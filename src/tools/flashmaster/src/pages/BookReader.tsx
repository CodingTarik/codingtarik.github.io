/**
 * BookReader — Read EPUB/PDF books with text selection, AI translation,
 * bookmarks, and flashcard generation.
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import {
  ArrowLeft, BookmarkIcon, BookmarkPlus, ChevronLeft, ChevronRight,
  Languages, Loader, Plus, X, Sparkles, Save, Copy, Check,
  Bookmark, List, Settings2, ZoomIn, ZoomOut, Maximize2,
  Trash2, Download, ExternalLink, MessageSquare,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../lib/db';
import { useT } from '../lib/i18n';
import { chatCompletion, hasOpenAIKey } from '../lib/openai';
import type { Book, BookBookmark, SavedWord, Deck, Card } from '../types';
import { DEFAULT_DECK_SETTINGS } from '../types';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// Worker from the local pdfjs-dist (version-aligned with react-pdf)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const TRANSLATION_LANG_KEY = 'flashmaster-translation-lang';
export function getTranslationLang(): string {
  return localStorage.getItem(TRANSLATION_LANG_KEY) || 'English';
}
export function setTranslationLang(lang: string): void {
  localStorage.setItem(TRANSLATION_LANG_KEY, lang);
}

export default function BookReader() {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const { t } = useT();

  const book = useLiveQuery(() => db.books.get(bookId!), [bookId]);
  const decks = useLiveQuery(() => db.decks.toArray());

  // Reader state
  const [rendition, setRendition] = useState<any>(null);
  const [epubBook, setEpubBook] = useState<any>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [fontSize, setFontSize] = useState(100);
  const [loading, setLoading] = useState(true);

  // PDF state (react-pdf) — use Blob URL to avoid ArrayBuffer detachment on re-render
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const pdfContainerRef = useRef<HTMLDivElement>(null);
  const pdfPageWrapperRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const [visiblePages, setVisiblePages] = useState<Set<number>>(() => new Set([1, 2, 3]));
  const [pdfScale, setPdfScale] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return Math.max(0.5, (window.innerWidth - 16) / 612);
    }
    return 1.5;
  });
  const [pageInput, setPageInput] = useState('');
  const [showPageInput, setShowPageInput] = useState(false);

  // Enable pinch-to-zoom when reader is active, restore on unmount
  useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]');
    const original = viewport?.getAttribute('content') || '';
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    }
    return () => {
      if (viewport) viewport.setAttribute('content', original);
    };
  }, []);

  // Selection & Translation
  const [selectedText, setSelectedText] = useState('');
  const [selectionContext, setSelectionContext] = useState('');
  const [selectionPopup, setSelectionPopup] = useState<{ x: number; y: number; flipped?: boolean } | null>(null);
  const [copiedPopup, setCopiedPopup] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [translating, setTranslating] = useState(false);
  const [translationResult, setTranslationResult] = useState<{ translation: string; explanation: string } | null>(null);

  // Save to deck
  const [showSaveToDeck, setShowSaveToDeck] = useState(false);
  const [selectedDeckId, setSelectedDeckId] = useState('');
  const [newDeckName, setNewDeckName] = useState('');
  const [saving, setSaving] = useState(false);

  // Bookmarks & TOC
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [bookmarkLabel, setBookmarkLabel] = useState('');

  // Translations sidebar
  const [showTranslations, setShowTranslations] = useState(false);
  const [exportDeckId, setExportDeckId] = useState('');
  const [exportNewDeckName, setExportNewDeckName] = useState('');
  const [exporting, setExporting] = useState(false);

  // ── EPUB Rendering ──

  useEffect(() => {
    if (!book || book.format !== 'epub' || !viewerRef.current) return;
    let cancelled = false;

    async function initEpub() {
      setLoading(true);
      try {
        const ePub = (await import('epubjs')).default;

        // Convert data URL to ArrayBuffer
        const base64 = book!.fileData.split(',')[1];
        const binary = atob(base64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);

        const epubInstance = ePub(bytes.buffer);
        await epubInstance.ready;

        if (cancelled) return;
        setEpubBook(epubInstance);

        const rend = epubInstance.renderTo(viewerRef.current!, {
          width: '100%',
          height: '100%',
          spread: 'none',
          flow: 'paginated',
        });

        // Apply saved location
        if (book!.currentLocation) {
          await rend.display(book!.currentLocation);
        } else {
          await rend.display();
        }

        // Style the epub content — ensure text selection is enabled
        rend.themes.fontSize(`${fontSize}%`);
        rend.themes.default({
          'body': {
            'color': '#e2e8f0 !important',
            'background': 'transparent !important',
            'font-family': 'system-ui, -apple-system, sans-serif !important',
            '-webkit-user-select': 'text !important',
            'user-select': 'text !important',
            'cursor': 'text',
          },
          'p': { 'line-height': '1.7 !important' },
          'p, span, div, h1, h2, h3, h4, h5, h6, li, td, th, blockquote, em, strong, a': {
            '-webkit-user-select': 'text !important',
            'user-select': 'text !important',
          },
          'a': { 'color': '#818cf8 !important' },
          '::selection': { 'background': 'rgba(99, 102, 241, 0.35) !important' },
        });

        // Track location changes
        rend.on('relocated', (location: any) => {
          if (!location || !location.start) return;
          const cfi = location.start.cfi;
          const progress = epubInstance.locations?.percentageFromCfi?.(cfi);
          const pct = typeof progress === 'number' ? Math.round(progress * 100) : 0;
          setCurrentPage(location.start.displayed?.page || 1);
          setTotalPages(location.start.displayed?.total || 0);

          // Save progress
          db.books.update(bookId!, {
            currentLocation: cfi,
            progress: pct,
            lastReadAt: Date.now(),
          });
        });

        // ── EPUB text selection ──
        // EPUB.js renders content inside an iframe, so document-level mouseup
        // events don't capture text selection. We use the rendition's built-in
        // 'selected' event which fires whenever the user selects text inside
        // the epub iframe, and additionally listen to mouseup on the iframe
        // document for click-to-dismiss behaviour.
        rend.on('selected', (cfiRange: string, contents: any) => {
          try {
            const range = contents?.range?.(cfiRange);
            const text = range?.toString?.()?.trim() || contents?.window?.getSelection?.()?.toString()?.trim() || '';
            if (text && text.length > 0 && text.length < 500) {
              setSelectedText(text);
              setCopiedPopup(false);
              // Get surrounding context
              const contextText = range?.startContainer?.parentElement?.textContent?.slice(0, 200) || '';
              setSelectionContext(contextText);
              // Get popup position from the iframe's range rect relative to viewport
              const rect = range?.getBoundingClientRect?.();
              const iframeEl = contents?.document?.defaultView?.frameElement;
              if (rect && iframeEl) {
                const iframeRect = iframeEl.getBoundingClientRect();
                setSelectionPopup({
                  x: iframeRect.left + rect.left + rect.width / 2,
                  y: iframeRect.top + rect.top - 8,
                });
              } else if (rect) {
                setSelectionPopup({ x: rect.left + rect.width / 2, y: rect.top - 8 });
              }
            }
          } catch {
            // Fallback: try reading from the iframe's selection
            try {
              const text = contents?.window?.getSelection?.()?.toString()?.trim() || '';
              if (text) setSelectedText(text);
            } catch { /* ignore */ }
          }
        });

        // Listen to clicks inside the epub iframe to dismiss popup
        rend.on('click', () => {
          const iframeSel = rend.manager?.container?.querySelector?.('iframe')?.contentWindow?.getSelection?.();
          const text = iframeSel?.toString?.()?.trim();
          if (!text) {
            setSelectionPopup(null);
            setSelectedText('');
          }
        });

        setRendition(rend);

        // Generate locations for progress tracking
        await epubInstance.locations.generate(1024);
        if (book!.currentLocation) {
          rend.display(book!.currentLocation);
        }
      } catch (err) {
        console.error('EPUB load error:', err);
        toast.error('Failed to load EPUB');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    initEpub();
    return () => {
      cancelled = true;
      if (rendition) rendition.destroy?.();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [book?.id, book?.format]);

  // ── PDF: convert base64 → ArrayBuffer for react-pdf ──

  useEffect(() => {
    if (!book || book.format !== 'pdf') return;
    setLoading(true);
    try {
      const base64 = book.fileData.split(',')[1];
      const binary = atob(base64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      const blob = new Blob([bytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setPdfUrl(prev => { if (prev) URL.revokeObjectURL(prev); return url; });
    } catch (err) {
      console.error('PDF load error:', err);
      toast.error('Failed to load PDF');
      setLoading(false);
    }
    return () => {
      setPdfUrl(prev => { if (prev) URL.revokeObjectURL(prev); return null; });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [book?.id, book?.format]);

  // react-pdf Document load callbacks
  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setTotalPages(numPages);
    setLoading(false);
    const savedPage = book?.currentLocation ? parseInt(book.currentLocation) : 1;
    setCurrentPage(Math.min(savedPage, numPages));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [book?.currentLocation]);

  const onDocumentLoadError = useCallback((error: Error) => {
    console.error('react-pdf load error:', error);
    setLoading(false);
    toast.error('Failed to load PDF: ' + error.message);
  }, []);

  // Reset visible pages when scale changes (forces re-render of Page components)
  useEffect(() => {
    setVisiblePages(new Set([
      Math.max(1, currentPage - 1),
      currentPage,
      Math.min(totalPages || 1, currentPage + 1),
    ]));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdfScale]);

  // Scroll to saved page once loaded
  const scrolledToSaved = useRef(false);
  useEffect(() => {
    if (!pdfUrl || scrolledToSaved.current || totalPages === 0) return;
    scrolledToSaved.current = true;
    setTimeout(() => {
      const el = pdfPageWrapperRefs.current.get(currentPage);
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    }, 300);
  }, [pdfUrl, totalPages, currentPage]);

  // Observe which pages are in viewport for lazy rendering & page tracking
  useEffect(() => {
    if (totalPages === 0) return;

    let observerRef: IntersectionObserver | null = null;
    let scrollHandler: (() => void) | null = null;
    let containerEl: HTMLDivElement | null = null;

    const timerId = setTimeout(() => {
      const container = pdfContainerRef.current;
      if (!container) return;
      containerEl = container;

      observerRef = new IntersectionObserver((entries) => {
        const toAdd: number[] = [];
        for (const entry of entries) {
          const pageNum = parseInt((entry.target as HTMLElement).dataset.page || '0');
          if (entry.isIntersecting && pageNum > 0) {
            for (let i = Math.max(1, pageNum - 2); i <= Math.min(totalPages, pageNum + 2); i++) {
              toAdd.push(i);
            }
          }
        }
        if (toAdd.length > 0) {
          setVisiblePages(prev => {
            const next = new Set(prev);
            for (const p of toAdd) next.add(p);
            return next;
          });
        }
      }, {
        root: container,
        rootMargin: '600px 0px',
        threshold: 0.01,
      });

      pdfPageWrapperRefs.current.forEach(el => observerRef!.observe(el));

      scrollHandler = () => {
        const containerRect = container.getBoundingClientRect();
        let topPage = 1;
        for (let i = 1; i <= totalPages; i++) {
          const el = pdfPageWrapperRefs.current.get(i);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= containerRect.top + 120 && rect.bottom > containerRect.top + 50) {
              topPage = i;
            }
          }
        }
        setCurrentPage(prev => prev !== topPage ? topPage : prev);
      };
      container.addEventListener('scroll', scrollHandler, { passive: true });
    }, 200);

    return () => {
      clearTimeout(timerId);
      observerRef?.disconnect();
      if (scrollHandler && containerEl) {
        containerEl.removeEventListener('scroll', scrollHandler);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPages]);

  // Save PDF progress when currentPage changes
  useEffect(() => {
    if (!pdfUrl || totalPages === 0) return;
    const pct = Math.round((currentPage / totalPages) * 100);
    db.books.update(bookId!, {
      currentLocation: String(currentPage),
      progress: pct,
      totalLocations: totalPages,
      lastReadAt: Date.now(),
    });
  }, [currentPage, totalPages, pdfUrl, bookId]);

  // Jump to page (for PDF)
  const goToPage = useCallback((page: number) => {
    const p = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(p);
    const el = pdfPageWrapperRefs.current.get(p);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [totalPages]);

  // ── Navigation ──

  const goNext = useCallback(() => {
    if (book?.format === 'epub' && rendition) {
      rendition.next();
    } else if (book?.format === 'pdf' && currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  }, [book?.format, rendition, currentPage, totalPages, goToPage]);

  const goPrev = useCallback(() => {
    if (book?.format === 'epub' && rendition) {
      rendition.prev();
    } else if (book?.format === 'pdf' && currentPage > 1) {
      goToPage(currentPage - 1);
    }
  }, [book?.format, rendition, currentPage, goToPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev(); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  // ── Text Selection → Translation ──

  useEffect(() => {
    const handleSelection = (e: MouseEvent | TouchEvent) => {
      const sel = window.getSelection();
      const text = sel?.toString().trim();
      if (text && text.length > 0 && text.length < 500) {
        setSelectedText(text);
        setCopiedPopup(false);
        // Try to get surrounding context
        const anchor = sel?.anchorNode;
        const context = anchor?.parentElement?.textContent?.slice(0, 200) || '';
        setSelectionContext(context);
        // Get position for floating popup — placed well above selection
        const range = sel?.getRangeAt(0);
        if (range) {
          const rect = range.getBoundingClientRect();
          const popupAbove = rect.top - 12;    // anchor for translate(-50%, -100%)
          const popupBelow = rect.bottom + 8;   // anchor for translate(-50%, 0)
          const flipped = popupAbove < 50;
          setSelectionPopup({
            x: Math.max(80, Math.min(window.innerWidth - 80, rect.left + rect.width / 2)),
            y: flipped ? popupBelow : popupAbove,
            flipped,
          });
        }
      } else {
        // Click without selecting text → dismiss popup
        const target = e.target as HTMLElement;
        if (!target.closest('.pdf-selection-popup')) {
          setSelectionPopup(null);
          setSelectedText('');
        }
      }
    };

    document.addEventListener('mouseup', handleSelection as EventListener);
    document.addEventListener('touchend', handleSelection as EventListener);
    return () => {
      document.removeEventListener('mouseup', handleSelection as EventListener);
      document.removeEventListener('touchend', handleSelection as EventListener);
    };
  }, []);

  // Dismiss floating popup on scroll
  useEffect(() => {
    const container = pdfContainerRef.current;
    if (!container) return;
    const onScroll = () => setSelectionPopup(null);
    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  });

  // ── AI Translate ──

  const handleTranslate = useCallback(async () => {
    if (!selectedText || !hasOpenAIKey()) {
      if (!hasOpenAIKey()) toast.error('Set your OpenAI API key in Settings first');
      return;
    }
    setShowTranslation(true);
    setTranslating(true);
    setTranslationResult(null);

    try {
      const targetLang = getTranslationLang();
      const prompt = `Translate the following text to ${targetLang}. Also provide:
1. The translation
2. A brief explanation
3. 2-3 synonyms (if applicable)
4. An example sentence using this word/phrase

Text to translate: "${selectedText}"
${selectionContext ? `Context: "${selectionContext.slice(0, 150)}"` : ''}

Respond in JSON format:
{"translation": "...", "explanation": "Full explanation with synonyms and example sentence in ${targetLang}"}`;

      const result = await chatCompletion(
        [{ role: 'user', content: prompt }],
        { temperature: 0.3, maxTokens: 400 }
      );

      const jsonMatch = result.match(/\{[\s\S]*\}/);
      let tr: { translation: string; explanation: string };
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        tr = {
          translation: parsed.translation || result,
          explanation: parsed.explanation || '',
        };
      } else {
        tr = { translation: result, explanation: '' };
      }
      setTranslationResult(tr);

      // Auto-save to book's word list immediately
      const loc = book?.format === 'pdf'
        ? String(currentPage)
        : book?.currentLocation || '';
      const sw: SavedWord = {
        id: uuidv4(),
        text: selectedText,
        translation: tr.translation,
        explanation: tr.explanation,
        context: selectionContext.slice(0, 200),
        createdAt: Date.now(),
        location: loc,
      };
      const currentBook = await db.books.get(bookId!);
      if (currentBook) {
        await db.books.update(bookId!, {
          savedWords: [...(currentBook.savedWords || []), sw],
        });
      }
    } catch (err: any) {
      toast.error(err.message || 'Translation failed');
      setTranslationResult({ translation: 'Translation failed', explanation: '' });
    } finally {
      setTranslating(false);
    }
  }, [selectedText, selectionContext, book?.format, book?.currentLocation, currentPage, bookId]);

  // ── Save Translation as Flashcard ──

  const handleSaveToCard = useCallback(async () => {
    if (!translationResult || !selectedText) return;
    setSaving(true);

    try {
      let deckId = selectedDeckId;

      // Create new deck if needed
      if (!deckId && newDeckName.trim()) {
        const newDeck: Deck = {
          id: uuidv4(),
          name: newDeckName.trim(),
          description: `Words from "${book?.title || 'Book'}"`,
          color: '#6366f1',
          icon: '📚',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          settings: DEFAULT_DECK_SETTINGS,
          tags: ['vocabulary', 'reading'],
        };
        await db.decks.put(newDeck);
        deckId = newDeck.id;
        toast.success(`Deck "${newDeckName.trim()}" created`);
      }

      if (!deckId) {
        toast.error('Select or create a deck');
        setSaving(false);
        return;
      }

      // Create the card with AI-rich content
      const card: Card = {
        id: uuidv4(),
        deckId,
        front: selectedText,
        back: `**${translationResult.translation}**\n\n${translationResult.explanation}`,
        tags: ['vocabulary', 'reading'],
        noteType: 'basic',
        createdAt: Date.now(),
        updatedAt: Date.now(),
        status: 'new',
        ease: DEFAULT_DECK_SETTINGS.startingEase,
        interval: 0,
        dueDate: Date.now(),
        lapses: 0,
        reps: 0,
        learningStep: 0,
      };
      await db.cards.put(card);

      // Mark the saved word as exported to deck
      const currentBook = await db.books.get(bookId!);
      if (currentBook) {
        const updatedWords = (currentBook.savedWords || []).map(sw =>
          sw.text === selectedText && !sw.addedToDeck
            ? { ...sw, addedToDeck: deckId }
            : sw
        );
        await db.books.update(bookId!, { savedWords: updatedWords });
      }

      toast.success('Card created!');
      setShowSaveToDeck(false);
      setShowTranslation(false);
      setSelectedText('');
    } catch (err: any) {
      toast.error(err.message || 'Failed to save card');
    } finally {
      setSaving(false);
    }
  }, [translationResult, selectedText, selectedDeckId, newDeckName, book?.title, bookId, selectionContext]);

  // ── Bookmarks ──

  const addBookmark = useCallback(async () => {
    if (!book) return;
    const location = book.format === 'epub'
      ? book.currentLocation || ''
      : String(currentPage);
    const label = bookmarkLabel.trim() || `Page ${currentPage}`;

    const bm: BookBookmark = {
      id: uuidv4(),
      location,
      label,
      createdAt: Date.now(),
    };

    await db.books.update(bookId!, {
      bookmarks: [...(book.bookmarks || []), bm],
    });
    setBookmarkLabel('');
    toast.success('Bookmark added');
  }, [book, bookId, currentPage, bookmarkLabel]);

  const goToBookmark = useCallback((bm: BookBookmark) => {
    if (book?.format === 'epub' && rendition) {
      rendition.display(bm.location);
    } else if (book?.format === 'pdf') {
      setCurrentPage(parseInt(bm.location) || 1);
    }
    setShowBookmarks(false);
  }, [book?.format, rendition]);

  const removeBookmark = useCallback(async (bmId: string) => {
    if (!book) return;
    await db.books.update(bookId!, {
      bookmarks: book.bookmarks.filter(b => b.id !== bmId),
    });
  }, [book, bookId]);

  // ── Translations sidebar helpers ──

  const goToSavedWord = useCallback((sw: SavedWord) => {
    if (!sw.location) return;
    if (book?.format === 'epub' && rendition) {
      rendition.display(sw.location);
    } else if (book?.format === 'pdf') {
      goToPage(parseInt(sw.location) || 1);
    }
  }, [book?.format, rendition, goToPage]);

  const deleteSavedWord = useCallback(async (wordId: string) => {
    const currentBook = await db.books.get(bookId!);
    if (!currentBook) return;
    await db.books.update(bookId!, {
      savedWords: currentBook.savedWords.filter(sw => sw.id !== wordId),
    });
  }, [bookId]);

  const exportWordToDeck = useCallback(async (sw: SavedWord, deckId: string) => {
    const card: Card = {
      id: uuidv4(),
      deckId,
      front: sw.text,
      back: `**${sw.translation}**${sw.explanation ? `\n\n${sw.explanation}` : ''}`,
      tags: ['vocabulary', 'reading'],
      noteType: 'basic',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      status: 'new',
      ease: DEFAULT_DECK_SETTINGS.startingEase,
      interval: 0,
      dueDate: Date.now(),
      lapses: 0,
      reps: 0,
      learningStep: 0,
    };
    await db.cards.put(card);

    // Mark as exported
    const currentBook = await db.books.get(bookId!);
    if (currentBook) {
      const updatedWords = currentBook.savedWords.map(w =>
        w.id === sw.id ? { ...w, addedToDeck: deckId } : w
      );
      await db.books.update(bookId!, { savedWords: updatedWords });
    }
  }, [bookId]);

  const resolveExportDeck = useCallback(async (): Promise<string | null> => {
    if (exportDeckId) return exportDeckId;
    if (exportNewDeckName.trim()) {
      const newDeck: Deck = {
        id: uuidv4(),
        name: exportNewDeckName.trim(),
        description: `Words from "${book?.title || 'Book'}"`,
        color: '#6366f1',
        icon: '📚',
        createdAt: Date.now(),
        updatedAt: Date.now(),
        settings: DEFAULT_DECK_SETTINGS,
        tags: ['vocabulary', 'reading'],
      };
      await db.decks.put(newDeck);
      setExportDeckId(newDeck.id);
      return newDeck.id;
    }
    return null;
  }, [exportDeckId, exportNewDeckName, book?.title]);

  const exportAllToDeck = useCallback(async () => {
    if (!book) return;
    setExporting(true);
    try {
      const deckId = await resolveExportDeck();
      if (!deckId) { toast.error('Select or create a deck'); setExporting(false); return; }
      const unexported = book.savedWords.filter(sw => !sw.addedToDeck);
      if (unexported.length === 0) { toast.error('All translations already exported'); setExporting(false); return; }
      for (const sw of unexported) {
        await exportWordToDeck(sw, deckId);
      }
      toast.success(`${unexported.length} cards exported!`);
    } catch (err: any) {
      toast.error(err.message || 'Export failed');
    } finally {
      setExporting(false);
    }
  }, [book, resolveExportDeck, exportWordToDeck]);

  // Font size for EPUB
  useEffect(() => {
    if (rendition) {
      rendition.themes.fontSize(`${fontSize}%`);
    }
  }, [fontSize, rendition]);

  if (!book) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader size={24} className="animate-spin text-slate-500" />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-slate-950">
      {/* Top Bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/80 border-b border-slate-800/50 z-10">
        <button onClick={() => navigate('/library')} className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors flex-shrink-0">
          <ArrowLeft size={16} />
        </button>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{book.title}</p>
          <p className="text-[10px] text-slate-500 truncate">{book.author}</p>
        </div>

        {/* Translate selected text button */}
        <AnimatePresence>
          {selectedText && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={handleTranslate}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/20 text-purple-400 text-xs font-medium hover:bg-purple-500/30 transition-colors flex-shrink-0"
            >
              <Languages size={14} />
              Translate
            </motion.button>
          )}
        </AnimatePresence>

        {/* Zoom controls (EPUB) */}
        {book.format === 'epub' && (
          <div className="flex items-center gap-1">
            <button onClick={() => setFontSize(f => Math.max(60, f - 10))} className="w-7 h-7 rounded-md bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white"><ZoomOut size={12} /></button>
            <span className="text-[10px] text-slate-500 w-7 text-center">{fontSize}%</span>
            <button onClick={() => setFontSize(f => Math.min(200, f + 10))} className="w-7 h-7 rounded-md bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white"><ZoomIn size={12} /></button>
          </div>
        )}

        {/* PDF zoom */}
        {book.format === 'pdf' && (
          <div className="flex items-center gap-1">
            <button onClick={() => setPdfScale(s => Math.max(0.5, s - 0.25))} className="w-7 h-7 rounded-md bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white"><ZoomOut size={12} /></button>
            <button
              onClick={() => {
                // Fit to width: calculate scale that makes PDF page fill the container
                const containerWidth = pdfContainerRef.current?.clientWidth || window.innerWidth;
                setPdfScale(Math.max(0.5, (containerWidth - 16) / 612));
              }}
              className="px-1.5 h-7 rounded-md bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white text-[10px] font-medium"
              title="Fit to width"
            >
              {Math.round(pdfScale * 100)}%
            </button>
            <button onClick={() => setPdfScale(s => Math.min(3, s + 0.25))} className="w-7 h-7 rounded-md bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white"><ZoomIn size={12} /></button>
          </div>
        )}

        {/* Translations sidebar */}
        <button
          onClick={() => { setShowTranslations(!showTranslations); if (!showTranslations) setShowBookmarks(false); }}
          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors relative ${
            showTranslations ? 'bg-purple-500/20 text-purple-400' : 'bg-slate-800/50 text-slate-400 hover:text-white'
          }`}
          title="Saved translations"
        >
          <Languages size={16} />
          {book.savedWords.length > 0 && (
            <span className="absolute -top-1 -right-1 min-w-[14px] h-[14px] rounded-full bg-purple-500 text-[8px] font-bold flex items-center justify-center text-white">
              {book.savedWords.length}
            </span>
          )}
        </button>

        {/* Bookmarks */}
        <button
          onClick={() => { setShowBookmarks(!showBookmarks); if (!showBookmarks) setShowTranslations(false); }}
          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
            showBookmarks ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800/50 text-slate-400 hover:text-white'
          }`}
        >
          <BookmarkIcon size={16} />
        </button>

        {/* Add bookmark */}
        <button
          onClick={addBookmark}
          className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-amber-400 transition-colors"
          title="Add bookmark"
        >
          <BookmarkPlus size={16} />
        </button>
      </div>

      {/* Main Reader Area */}
      <div className="flex-1 relative overflow-hidden flex">
        {/* Bookmarks sidebar */}
        <AnimatePresence>
          {showBookmarks && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 280, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="bg-slate-900/95 border-r border-slate-800/50 overflow-y-auto flex-shrink-0"
            >
              <div className="p-3">
                <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                  <Bookmark size={14} className="text-amber-400" />
                  Bookmarks ({book.bookmarks.length})
                </h3>

                {book.bookmarks.length === 0 ? (
                  <p className="text-xs text-slate-500 text-center py-6">No bookmarks yet</p>
                ) : (
                  <div className="space-y-1.5">
                    {book.bookmarks.sort((a, b) => b.createdAt - a.createdAt).map(bm => (
                      <div
                        key={bm.id}
                        className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-slate-800/40 hover:bg-slate-800/60 cursor-pointer group transition-colors"
                        onClick={() => goToBookmark(bm)}
                      >
                        <BookmarkIcon size={12} className="text-amber-400 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium truncate">{bm.label}</p>
                          <p className="text-[9px] text-slate-600">{new Date(bm.createdAt).toLocaleDateString()}</p>
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); removeBookmark(bm.id); }}
                          className="opacity-0 group-hover:opacity-100 text-slate-600 hover:text-red-400 transition-all"
                        >
                          <X size={10} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Link to translations sidebar */}
                {book.savedWords.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-800/50">
                    <button
                      onClick={() => { setShowTranslations(true); setShowBookmarks(false); }}
                      className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg bg-purple-500/10 text-purple-400 text-xs font-medium hover:bg-purple-500/20 transition-colors"
                    >
                      <Languages size={14} />
                      View {book.savedWords.length} Saved Translations →
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reader content */}
        <div className="flex-1 relative">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950/80 z-10">
              <div className="text-center">
                <Loader size={32} className="animate-spin text-primary-400 mx-auto mb-3" />
                <p className="text-sm text-slate-400">Loading book...</p>
              </div>
            </div>
          )}

          {/* EPUB viewer */}
          {book.format === 'epub' && (
            <div ref={viewerRef} className="w-full h-full select-text" style={{ background: '#0f172a', cursor: 'text' }} />
          )}

          {/* PDF viewer — continuous scroll via react-pdf */}
          {book.format === 'pdf' && pdfUrl && (
            <div
              ref={pdfContainerRef}
              className="w-full h-full overflow-auto select-text"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading=""
                error={<div className="p-8 text-center text-red-400">Failed to load PDF</div>}
              >
                <div className="flex flex-col items-center gap-3 py-4 px-1 md:px-4 mx-auto" style={{ maxWidth: 'fit-content' }}>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                    <div
                      key={pageNum}
                      data-page={pageNum}
                      ref={el => {
                        if (el) pdfPageWrapperRefs.current.set(pageNum, el);
                        else pdfPageWrapperRefs.current.delete(pageNum);
                      }}
                      className="relative flex-shrink-0 mx-auto shadow-2xl rounded-lg overflow-hidden"
                    >
                      {visiblePages.has(pageNum) ? (
                        <Page
                          pageNumber={pageNum}
                          scale={pdfScale}
                          renderTextLayer={true}
                          renderAnnotationLayer={false}
                          className="pdf-page"
                          loading={
                            <div
                              style={{ width: Math.round(612 * pdfScale), height: Math.round(792 * pdfScale) }}
                              className="bg-white/10 animate-pulse"
                            />
                          }
                        />
                      ) : (
                        <div
                          style={{ width: Math.round(612 * pdfScale), height: Math.round(792 * pdfScale) }}
                          className="bg-white/5"
                        />
                      )}
                      <span className="absolute bottom-2 right-3 text-[10px] text-slate-400/60 bg-black/30 px-1.5 py-0.5 rounded pointer-events-none z-10">
                        {pageNum}
                      </span>
                    </div>
                  ))}
                </div>
              </Document>
            </div>
          )}

          {/* Navigation overlay buttons — small circular, do NOT block text selection */}
          {!showTranslations && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/60 backdrop-blur-sm flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-800/90 transition-all shadow-lg opacity-30 hover:opacity-100 z-[3]"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={goNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/60 backdrop-blur-sm flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-800/90 transition-all shadow-lg opacity-30 hover:opacity-100 z-[3]"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>

        {/* ── Floating Selection Popup (Copy / Translate) ── */}
        <AnimatePresence>
          {selectionPopup && selectedText && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.92 }}
              transition={{ duration: 0.15 }}
              className="pdf-selection-popup fixed z-[100] flex items-center gap-1 px-1.5 py-1 rounded-xl bg-slate-900/95 border border-slate-700/60 shadow-2xl backdrop-blur-xl"
              style={{
                left: `${selectionPopup.x}px`,
                top: `${selectionPopup.y}px`,
                transform: selectionPopup.flipped ? 'translate(-50%, 0)' : 'translate(-50%, -100%)',
              }}
            >
              <button
                onClick={() => {
                  navigator.clipboard.writeText(selectedText);
                  setCopiedPopup(true);
                  setTimeout(() => setCopiedPopup(false), 1500);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:bg-slate-700/60 transition-colors"
              >
                {copiedPopup ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                {copiedPopup ? 'Copied' : 'Copy'}
              </button>
              <div className="w-px h-4 bg-slate-700/50" />
              <button
                onClick={() => {
                  setSelectionPopup(null);
                  handleTranslate();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-purple-400 hover:bg-purple-500/15 transition-colors"
              >
                <Languages size={13} />
                Translate
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Translations Sidebar (right) ── */}
        <AnimatePresence>
          {showTranslations && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 340, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="bg-slate-900/95 border-l border-slate-800/50 overflow-hidden flex-shrink-0 flex flex-col"
            >
              {/* Header */}
              <div className="p-3 border-b border-slate-800/50 flex-shrink-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold flex items-center gap-2">
                    <Languages size={14} className="text-purple-400" />
                    Translations ({book.savedWords.length})
                  </h3>
                  <button onClick={() => setShowTranslations(false)} className="text-slate-600 hover:text-white transition-colors">
                    <X size={14} />
                  </button>
                </div>

                {/* Export all to deck */}
                {book.savedWords.length > 0 && (
                  <div className="space-y-2">
                    <select
                      value={exportDeckId}
                      onChange={e => setExportDeckId(e.target.value)}
                      className="w-full px-2 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-[11px] focus:outline-none focus:border-primary-500/50"
                    >
                      <option value="">Select deck to export...</option>
                      {(decks || []).map(d => (
                        <option key={d.id} value={d.id}>{d.icon} {d.name}</option>
                      ))}
                    </select>
                    {!exportDeckId && (
                      <input
                        type="text"
                        value={exportNewDeckName}
                        onChange={e => setExportNewDeckName(e.target.value)}
                        placeholder="Or new deck name..."
                        className="w-full px-2 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-[11px] focus:outline-none focus:border-primary-500/50"
                      />
                    )}
                    <button
                      onClick={exportAllToDeck}
                      disabled={exporting || (!exportDeckId && !exportNewDeckName.trim())}
                      className="w-full py-2 rounded-lg bg-gradient-to-r from-primary-500/80 to-purple-500/80 hover:from-primary-500 hover:to-purple-500 text-[11px] font-medium disabled:opacity-40 transition-all flex items-center justify-center gap-1.5"
                    >
                      {exporting ? <Loader size={12} className="animate-spin" /> : <Download size={12} />}
                      Export All ({book.savedWords.filter(sw => !sw.addedToDeck).length} new) to Deck
                    </button>
                  </div>
                )}
              </div>

              {/* Word list */}
              <div className="flex-1 overflow-y-auto p-2">
                {book.savedWords.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Languages size={28} className="text-slate-700 mb-3" />
                    <p className="text-xs text-slate-500 mb-1">No translations yet</p>
                    <p className="text-[10px] text-slate-600 max-w-[200px]">Select text in the book and click "Translate" to save translations here</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {[...book.savedWords].reverse().map(sw => (
                      <div
                        key={sw.id}
                        className="rounded-xl bg-slate-800/40 border border-slate-700/20 overflow-hidden group hover:border-purple-500/20 transition-colors"
                      >
                        {/* Main content — clickable to jump to page */}
                        <button
                          onClick={() => goToSavedWord(sw)}
                          className="w-full text-left p-3 hover:bg-slate-700/20 transition-colors"
                          title={sw.location ? `Go to ${book.format === 'pdf' ? `page ${sw.location}` : 'location'}` : undefined}
                        >
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <p className="text-xs font-semibold text-purple-300 line-clamp-2">{sw.text}</p>
                            {sw.location && (
                              <span className="text-[9px] text-slate-600 bg-slate-800 px-1.5 py-0.5 rounded flex-shrink-0 flex items-center gap-0.5">
                                <ExternalLink size={8} />
                                {book.format === 'pdf' ? `p.${sw.location}` : 'loc'}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] font-medium text-emerald-400 mb-1">{sw.translation}</p>
                          {sw.explanation && (
                            <p className="text-[10px] text-slate-500 line-clamp-3 leading-relaxed">{sw.explanation}</p>
                          )}
                        </button>

                        {/* Actions bar */}
                        <div className="flex items-center border-t border-slate-700/20 bg-slate-800/20">
                          {sw.addedToDeck ? (
                            <span className="flex-1 flex items-center gap-1 px-3 py-1.5 text-[9px] text-emerald-500">
                              <Check size={10} /> Exported
                            </span>
                          ) : (
                            <button
                              onClick={async () => {
                                const deckId = await resolveExportDeck();
                                if (!deckId) { toast.error('Select a deck first'); return; }
                                await exportWordToDeck(sw, deckId);
                                toast.success('Card created!');
                              }}
                              className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 text-[10px] text-primary-400 hover:bg-primary-500/10 transition-colors"
                            >
                              <Plus size={10} /> Add to Deck
                            </button>
                          )}
                          <button
                            onClick={() => { navigator.clipboard.writeText(`${sw.text} — ${sw.translation}`); toast.success('Copied!'); }}
                            className="px-2 py-1.5 text-slate-600 hover:text-white transition-colors"
                          >
                            <Copy size={10} />
                          </button>
                          <button
                            onClick={() => deleteSavedWord(sw.id)}
                            className="px-2 py-1.5 text-slate-600 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={10} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center gap-3 px-4 py-2 bg-slate-900/80 border-t border-slate-800/50">
        {/* Page indicator — click to jump */}
        {showPageInput ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const p = parseInt(pageInput);
              if (p >= 1 && p <= totalPages) {
                if (book.format === 'pdf') goToPage(p);
                else if (book.format === 'epub' && rendition) {
                  // EPUB: jump by percentage
                  const fraction = (p - 1) / Math.max(1, totalPages - 1);
                  const cfi = epubBook?.locations?.cfiFromPercentage?.(fraction);
                  if (cfi) rendition.display(cfi);
                  else setCurrentPage(p);
                }
              }
              setShowPageInput(false);
              setPageInput('');
            }}
            className="flex items-center gap-1.5"
          >
            <input
              type="number"
              autoFocus
              min={1}
              max={totalPages}
              value={pageInput}
              onChange={e => setPageInput(e.target.value)}
              placeholder={String(currentPage)}
              className="w-14 px-2 py-1 rounded-md bg-slate-800 border border-primary-500/50 text-xs text-center focus:outline-none"
              onBlur={() => { setShowPageInput(false); setPageInput(''); }}
              onKeyDown={e => { if (e.key === 'Escape') { setShowPageInput(false); setPageInput(''); } }}
            />
            <span className="text-[10px] text-slate-500">/ {totalPages}</span>
          </form>
        ) : (
          <button
            onClick={() => { setShowPageInput(true); setPageInput(String(currentPage)); }}
            className="text-xs text-slate-400 hover:text-primary-400 transition-colors tabular-nums"
            title="Click to jump to page"
          >
            {book.format === 'pdf' ? `Page ${currentPage} / ${totalPages}` : `${currentPage} / ${totalPages || '...'}`}
          </button>
        )}

        <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden relative cursor-pointer group"
          onClick={(e) => {
            if (totalPages <= 0) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const fraction = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            const targetPage = Math.max(1, Math.round(fraction * totalPages));
            if (book.format === 'pdf') goToPage(targetPage);
            else if (book.format === 'epub' && epubBook && rendition) {
              const cfi = epubBook.locations?.cfiFromPercentage?.(fraction);
              if (cfi) rendition.display(cfi);
            }
          }}
        >
          <div
            className="h-full bg-primary-500 rounded-full transition-all duration-300"
            style={{ width: `${book.progress || 0}%` }}
          />
        </div>
        <span className="text-xs text-slate-500">{Math.round(book.progress || 0)}%</span>
      </div>

      {/* Translation Panel */}
      <AnimatePresence>
        {showTranslation && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700/50 rounded-t-2xl shadow-2xl z-20 max-h-[60vh] overflow-y-auto"
          >
            <div className="p-4">
              {/* Handle bar */}
              <div className="w-10 h-1 bg-slate-700 rounded-full mx-auto mb-3" />

              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className="text-xs text-slate-500 mb-1">Selected text</p>
                  <p className="text-sm font-medium text-purple-300">"{selectedText}"</p>
                </div>
                <button onClick={() => { setShowTranslation(false); setSelectedText(''); }} className="text-slate-600 hover:text-white">
                  <X size={16} />
                </button>
              </div>

              {translating ? (
                <div className="flex items-center justify-center py-8 gap-2">
                  <Loader size={18} className="animate-spin text-purple-400" />
                  <span className="text-sm text-slate-400">Translating to {getTranslationLang()}...</span>
                </div>
              ) : translationResult ? (
                <div className="space-y-3">
                  {/* Translation */}
                  <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/30">
                    <p className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                      <Languages size={10} /> Translation ({getTranslationLang()})
                    </p>
                    <p className="text-base font-semibold text-emerald-400">{translationResult.translation}</p>
                  </div>

                  {/* Explanation */}
                  {translationResult.explanation && (
                    <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/20">
                      <p className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                        <Sparkles size={10} /> Explanation, Synonyms & Examples
                      </p>
                      <p className="text-sm text-slate-300 whitespace-pre-wrap">{translationResult.explanation}</p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => { navigator.clipboard.writeText(translationResult.translation); toast.success('Copied!'); }}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800/50 text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      <Copy size={12} /> Copy
                    </button>
                    <button
                      onClick={() => setShowSaveToDeck(true)}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary-500/20 text-primary-400 text-xs font-medium hover:bg-primary-500/30 transition-colors"
                    >
                      <Plus size={12} /> Save as Flashcard
                    </button>
                  </div>

                  {/* Save to Deck panel */}
                  <AnimatePresence>
                    {showSaveToDeck && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/30 space-y-3">
                          <p className="text-xs font-medium text-slate-300">Add to deck:</p>
                          <select
                            value={selectedDeckId}
                            onChange={e => setSelectedDeckId(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-sm focus:outline-none focus:border-primary-500/50"
                          >
                            <option value="">Select a deck...</option>
                            {(decks || []).map(d => (
                              <option key={d.id} value={d.id}>{d.name}</option>
                            ))}
                          </select>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <div className="flex-1 h-px bg-slate-700/50" />
                            or create new
                            <div className="flex-1 h-px bg-slate-700/50" />
                          </div>
                          <input
                            type="text"
                            value={newDeckName}
                            onChange={e => setNewDeckName(e.target.value)}
                            placeholder="New deck name..."
                            className="w-full px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-sm focus:outline-none focus:border-primary-500/50"
                          />
                          <button
                            onClick={handleSaveToCard}
                            disabled={saving || (!selectedDeckId && !newDeckName.trim())}
                            className="w-full py-2.5 rounded-lg bg-gradient-to-r from-primary-500 to-purple-500 text-sm font-medium disabled:opacity-40 transition-all flex items-center justify-center gap-2"
                          >
                            {saving ? <Loader size={14} className="animate-spin" /> : <Save size={14} />}
                            Create Flashcard
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom CSS to fix text layer alignment for PDF text selection */}
      <style>{`
        .react-pdf__Page__textContent {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          overflow: hidden !important;
        }

        .react-pdf__Page__textContent span {
          color: transparent !important;
          position: absolute !important;
          white-space: pre !important;
          cursor: text !important;
          transform-origin: 0% 0% !important;
        }

        .react-pdf__Page__canvas {
          display: block !important;
          user-select: none !important;
        }

        .pdf-page {
          position: relative !important;
        }
      `}</style>
    </div>
  );
}
