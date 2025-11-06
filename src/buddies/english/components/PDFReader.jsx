import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import { 
  X, ChevronLeft, ChevronRight, BookMarked, Languages, 
  Save, Trash2, ZoomIn, ZoomOut, ArrowLeft, AlertCircle, Copy 
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { useSettings } from '../../../context/SettingsContext';
import { translateWithChatGPT } from '../../../utils/chatgpt';

// Set up PDF.js worker to use local file from public folder
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

function PDFReader({ book, onClose, onUpdate }) {
  const { language } = useLanguage();
  const { globalSettings, getBuddySettings } = useSettings();
  const englishSettings = getBuddySettings('english');
  
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.2);
  const [selectedText, setSelectedText] = useState('');
  const [showTranslateButton, setShowTranslateButton] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [translatedText, setTranslatedText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationError, setTranslationError] = useState('');
  const [currentPage, setCurrentPage] = useState(book.currentPage || 1);
  const [copyFeedback, setCopyFeedback] = useState('');
  
  const containerRef = useRef(null);
  const pageRefs = useRef({});
  const lastTouchDistance = useRef(null);
  const [highlightedItemId, setHighlightedItemId] = useState(null);

  // Update book progress
  useEffect(() => {
    if (numPages) {
      const progress = Math.round((currentPage / numPages) * 100);
      onUpdate({
        currentPage: currentPage,
        totalPages: numPages,
        progress: progress
      });
    }
  }, [currentPage, numPages, onUpdate]);

  // Track which page is currently visible while scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.scrollTop;
      const containerHeight = containerRef.current.clientHeight;
      const containerCenter = containerTop + containerHeight / 2;

      // Find which page is in the center of the viewport
      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const pageElement = pageRefs.current[pageNum];
        if (pageElement) {
          const pageTop = pageElement.offsetTop;
          const pageHeight = pageElement.clientHeight;
          const pageBottom = pageTop + pageHeight;

          if (containerCenter >= pageTop && containerCenter <= pageBottom) {
            setCurrentPage(pageNum);
            break;
          }
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [numPages]);

  // Pinch-to-zoom with trackpad/touchpad
  useEffect(() => {
    const handleWheel = (e) => {
      // Check if it's a pinch gesture (ctrlKey is set for pinch on trackpad)
      if (e.ctrlKey) {
        e.preventDefault();
        
        // deltaY is negative when zooming in, positive when zooming out
        const delta = -e.deltaY * 0.01;
        setScale(prevScale => Math.min(Math.max(0.5, prevScale + delta), 2.5));
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, []);

  // Touch pinch-to-zoom for mobile
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (e.touches.length === 2) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const distance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        lastTouchDistance.current = distance;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 2 && lastTouchDistance.current) {
        e.preventDefault();
        
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const distance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        
        const delta = (distance - lastTouchDistance.current) * 0.01;
        setScale(prevScale => Math.min(Math.max(0.5, prevScale + delta), 2.5));
        
        lastTouchDistance.current = distance;
      }
    };

    const handleTouchEnd = () => {
      lastTouchDistance.current = null;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    if (book.totalPages === 0) {
      onUpdate({ totalPages: numPages });
    }
  }

  // Handle text selection
  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      const text = selection.toString().trim();
      
      if (text.length > 0) {
        setSelectedText(text);
        
        // Get selection position
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        setButtonPosition({
          x: rect.left + (rect.width / 2),
          y: rect.top - 10
        });
        setShowTranslateButton(true);
      } else {
        setShowTranslateButton(false);
        setTranslatedText('');
        setTranslationError('');
      }
    };

    document.addEventListener('mouseup', handleSelection);
    return () => document.removeEventListener('mouseup', handleSelection);
  }, []);

  const translateText = async () => {
    setIsTranslating(true);
    setTranslationError('');
    
    // Check if API key is configured
    if (!globalSettings.chatGptApiKey) {
      setTranslationError(language === 'de' 
        ? 'Bitte konfiguriere deinen ChatGPT API Key in den Einstellungen' 
        : 'Please configure your ChatGPT API Key in settings'
      );
      setIsTranslating(false);
      return;
    }

    // Get user's native language from settings
    const nativeLanguage = englishSettings.nativeLanguage || 'de';
    const detailLevel = englishSettings.translationDetail || 'normal';

    try {
      const result = await translateWithChatGPT(
        selectedText,
        nativeLanguage,
        globalSettings.chatGptApiKey,
        detailLevel
      );
      
      setTranslatedText(result.translation);
    } catch (error) {
      console.error('Translation error:', error);
      setTranslationError(error.message);
    } finally {
      setIsTranslating(false);
    }
  };

  const saveSelection = (withTranslation = true) => {
    const isWord = selectedText.split(' ').length === 1;
    const newItem = {
      id: Date.now(),
      text: selectedText,
      translation: withTranslation ? translatedText : '',
      page: currentPage,
      timestamp: new Date().toISOString(),
      type: isWord ? 'word' : 'sentence'
    };

    if (isWord) {
      onUpdate({
        savedWords: [...book.savedWords, newItem]
      });
    } else {
      onUpdate({
        savedSentences: [...book.savedSentences, newItem]
      });
    }

    // Clear selection
    window.getSelection().removeAllRanges();
    setShowTranslateButton(false);
    setSelectedText('');
    setTranslatedText('');
    setTranslationError('');
  };

  const deleteItem = (itemId, type) => {
    if (type === 'word') {
      onUpdate({
        savedWords: book.savedWords.filter(w => w.id !== itemId)
      });
    } else {
      onUpdate({
        savedSentences: book.savedSentences.filter(s => s.id !== itemId)
      });
    }
  };

  const jumpToPage = (page, itemId) => {
    const pageElement = pageRefs.current[page];
    if (pageElement && containerRef.current) {
      const container = containerRef.current;
      const pageTop = pageElement.offsetTop;
      container.scrollTo({
        top: pageTop - 20,
        behavior: 'smooth'
      });
      
      // Highlight the item briefly
      setHighlightedItemId(itemId);
      setTimeout(() => {
        setHighlightedItemId(null);
      }, 2000); // Clear after 2 seconds
    }
  };

  const changeScale = (delta) => {
    setScale(prevScale => Math.min(Math.max(0.5, prevScale + delta), 2.5));
  };

  const copyAllToClipboard = (withTranslations = true) => {
    const allItems = [
      ...book.savedWords.map(w => ({ ...w, type: 'word' })),
      ...book.savedSentences.map(s => ({ ...s, type: 'sentence' }))
    ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    let text = '';
    allItems.forEach((item, index) => {
      if (index > 0) text += '\n\n';
      text += item.text;
      if (withTranslations && item.translation) {
        text += `\n${item.translation}`;
      }
    });

    navigator.clipboard.writeText(text).then(() => {
      setCopyFeedback(language === 'de' ? 'In Zwischenablage kopiert! ✓' : 'Copied to clipboard! ✓');
      setTimeout(() => setCopyFeedback(''), 3000);
    }).catch(err => {
      console.error('Failed to copy:', err);
      setCopyFeedback(language === 'de' ? 'Fehler beim Kopieren' : 'Failed to copy');
      setTimeout(() => setCopyFeedback(''), 3000);
    });
  };

  return (
    <div className="fixed inset-0 bg-stone-900 z-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-80' : 'w-0'} bg-white dark:bg-stone-800 border-r border-stone-200 dark:border-stone-700 transition-all duration-300 overflow-hidden flex flex-col`}>
        <div className="p-4 border-b border-stone-200 dark:border-stone-700">
          <h2 className="font-bold text-lg text-stone-800 dark:text-stone-200 flex items-center gap-2 mb-3">
            <BookMarked className="text-rose-500" />
            {language === 'de' ? 'Gespeichert' : 'Saved'}
          </h2>
          
          {/* Copy All Buttons */}
          {(book.savedWords.length > 0 || book.savedSentences.length > 0) && (
            <div className="flex flex-col gap-2 mt-3">
              {copyFeedback && (
                <div className="bg-green-100 dark:bg-green-900/30 border border-green-500 text-green-700 dark:text-green-300 px-3 py-2 rounded-lg text-sm font-semibold text-center animate-bounce">
                  {copyFeedback}
                </div>
              )}
              <button
                onClick={() => copyAllToClipboard(true)}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg transition-colors text-sm font-semibold"
              >
                <Copy size={16} />
                {language === 'de' ? 'Alle mit Übersetzung' : 'With translation'}
              </button>
              <button
                onClick={() => copyAllToClipboard(false)}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-stone-500 hover:bg-stone-600 text-white rounded-lg transition-colors text-sm font-semibold"
              >
                <Copy size={16} />
                {language === 'de' ? 'Nur Originale' : 'Originals only'}
              </button>
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Saved Words */}
          {book.savedWords.length > 0 && (
            <div>
              <h3 className="font-bold text-sm text-stone-600 dark:text-stone-400 mb-2">
                📝 {language === 'de' ? 'Wörter' : 'Words'} ({book.savedWords.length})
              </h3>
              <div className="space-y-2">
                {book.savedWords.map(word => (
                  <div
                    key={word.id}
                    className={`bg-stone-50 dark:bg-stone-700 rounded-lg p-3 hover:shadow-md transition-all cursor-pointer group ${
                      highlightedItemId === word.id ? 'animate-highlight' : ''
                    }`}
                    onClick={() => jumpToPage(word.page, word.id)}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="font-semibold text-stone-800 dark:text-stone-200">
                          {word.text}
                        </p>
                        {word.translation && (
                          <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                            {word.translation}
                          </p>
                        )}
                        <p className="text-xs text-stone-500 dark:text-stone-500 mt-1">
                          {language === 'de' ? 'Seite' : 'Page'} {word.page}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteItem(word.id, 'word');
                        }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Saved Sentences */}
          {book.savedSentences.length > 0 && (
            <div>
              <h3 className="font-bold text-sm text-stone-600 dark:text-stone-400 mb-2">
                💬 {language === 'de' ? 'Sätze' : 'Sentences'} ({book.savedSentences.length})
              </h3>
              <div className="space-y-2">
                {book.savedSentences.map(sentence => (
                  <div
                    key={sentence.id}
                    className={`bg-stone-50 dark:bg-stone-700 rounded-lg p-3 hover:shadow-md transition-all cursor-pointer group ${
                      highlightedItemId === sentence.id ? 'animate-highlight' : ''
                    }`}
                    onClick={() => jumpToPage(sentence.page, sentence.id)}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="text-sm text-stone-800 dark:text-stone-200">
                          "{sentence.text}"
                        </p>
                        {sentence.translation && (
                          <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                            {sentence.translation}
                          </p>
                        )}
                        <p className="text-xs text-stone-500 dark:text-stone-500 mt-1">
                          {language === 'de' ? 'Seite' : 'Page'} {sentence.page}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteItem(sentence.id, 'sentence');
                        }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {book.savedWords.length === 0 && book.savedSentences.length === 0 && (
            <div className="text-center text-stone-500 dark:text-stone-400 py-8">
              <BookMarked size={48} className="mx-auto mb-2 opacity-30" />
              <p className="text-sm">
                {language === 'de' 
                  ? 'Markiere Text und speichere Wörter!' 
                  : 'Select text and save words!'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Main PDF Viewer */}
      <div className="flex-1 flex flex-col bg-stone-800">
        {/* Top Bar */}
        <div className="bg-stone-900 border-b border-stone-700 p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClose();
              }}
              className="text-white hover:text-rose-500 transition-colors p-2 rounded-lg hover:bg-stone-800"
              type="button"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-white font-bold text-lg truncate max-w-md">
              {book.title}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Page Counter */}
            <div className="text-white text-sm">
              {language === 'de' ? 'Seite' : 'Page'} {currentPage} / {numPages || '?'}
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => changeScale(-0.2)}
                className="text-white hover:text-rose-500 transition-colors p-2"
                title={language === 'de' ? 'Verkleinern' : 'Zoom out'}
              >
                <ZoomOut size={20} />
              </button>
              <span className="text-white text-sm w-12 text-center">
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={() => changeScale(0.2)}
                className="text-white hover:text-rose-500 transition-colors p-2"
                title={language === 'de' ? 'Vergrößern' : 'Zoom in'}
              >
                <ZoomIn size={20} />
              </button>
            </div>

            {/* Pinch Zoom Hint */}
            <div className="text-stone-400 text-xs hidden md:block">
              {language === 'de' ? '⌘ + Scroll zum Zoomen' : '⌘ + Scroll to zoom'}
            </div>

            {/* Toggle Sidebar */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white hover:text-rose-500 transition-colors p-2"
              title={language === 'de' ? 'Seitenleiste' : 'Sidebar'}
            >
              <BookMarked size={20} />
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClose();
              }}
              className="text-white hover:text-rose-500 transition-colors p-2 rounded-lg hover:bg-stone-800"
              title={language === 'de' ? 'Schließen' : 'Close'}
              type="button"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* PDF Content - Continuous Scroll */}
        <div 
          ref={containerRef}
          className="flex-1 overflow-y-auto bg-stone-800 p-8"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="max-w-4xl mx-auto space-y-4">
            <Document
              file={book.pdfData}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="text-white text-center py-12">
                  {language === 'de' ? 'Lade PDF...' : 'Loading PDF...'}
                </div>
              }
              error={
                <div className="text-red-500 text-center py-12">
                  {language === 'de' ? 'Fehler beim Laden' : 'Error loading PDF'}
                </div>
              }
            >
              {numPages && Array.from(new Array(numPages), (el, index) => (
                <div
                  key={`page_${index + 1}`}
                  ref={(el) => pageRefs.current[index + 1] = el}
                  className="mb-4 bg-white shadow-2xl mx-auto relative"
                  style={{ width: 'fit-content' }}
                >
                  {/* Page Number Label */}
                  <div className="bg-stone-700 text-white text-xs px-3 py-1 text-center">
                    {language === 'de' ? 'Seite' : 'Page'} {index + 1}
                  </div>
                  
                  {/* PDF Page with text layer properly positioned */}
                  <div className="relative">
                    <Page
                      pageNumber={index + 1}
                      scale={scale}
                      renderTextLayer={true}
                      renderAnnotationLayer={false}
                      className="pdf-page"
                    />
                  </div>
                </div>
              ))}
            </Document>
          </div>
        </div>
      </div>

      {/* Floating Translate Button */}
      {showTranslateButton && (
        <div
          className="fixed z-50"
          style={{
            left: `${buttonPosition.x}px`,
            top: `${buttonPosition.y}px`,
            transform: 'translate(-50%, calc(-100% - 12px))'
          }}
        >
          <div className="bg-white dark:bg-stone-800 rounded-xl shadow-2xl border-2 border-rose-500 p-3 flex flex-col gap-2 max-w-md min-w-[280px]">
            {!translatedText && !translationError ? (
              <>
                <div className="flex gap-2">
                  <button
                    onClick={translateText}
                    disabled={isTranslating}
                    className="flex-1 px-4 py-2.5 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-lg transition-all text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <Languages size={18} />
                    {isTranslating 
                      ? (language === 'de' ? 'Übersetze...' : 'Translating...') 
                      : (language === 'de' ? 'Übersetzen' : 'Translate')
                    }
                  </button>
                  <button
                    onClick={() => saveSelection(false)}
                    className="flex-1 px-4 py-2.5 bg-gradient-to-r from-stone-500 to-stone-600 hover:from-stone-600 hover:to-stone-700 text-white rounded-lg transition-all text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <Save size={18} />
                    {language === 'de' ? 'Speichern' : 'Save'}
                  </button>
                </div>
                <div className="text-xs text-center text-stone-500 dark:text-stone-400 px-2">
                  {language === 'de' ? 'oder einfach speichern →' : 'or just save →'}
                </div>
              </>
            ) : translationError ? (
              <>
                <div className="bg-red-100 dark:bg-red-900/30 border border-red-500 px-4 py-3 rounded-lg flex items-start gap-2 text-sm">
                  <AlertCircle size={18} className="flex-shrink-0 mt-0.5 text-red-600 dark:text-red-400" />
                  <div className="flex-1">
                    <div className="font-semibold mb-1 text-red-800 dark:text-red-300">
                      {language === 'de' ? 'Fehler' : 'Error'}
                    </div>
                    <div className="text-xs text-red-700 dark:text-red-400">{translationError}</div>
                  </div>
                </div>
                <a
                  href="#/settings"
                  className="px-4 py-2.5 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-lg transition-all text-sm font-semibold text-center shadow-md"
                  onClick={() => {
                    window.getSelection().removeAllRanges();
                    setShowTranslateButton(false);
                  }}
                >
                  {language === 'de' ? '⚙️ Zu Einstellungen' : '⚙️ Go to Settings'}
                </a>
              </>
            ) : (
              <>
                <div className="px-4 py-3 text-sm bg-stone-50 dark:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-lg max-h-48 overflow-y-auto border border-stone-200 dark:border-stone-600 leading-relaxed">
                  {translatedText}
                </div>
                <button
                  onClick={() => saveSelection(true)}
                  className="px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg transition-all text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <Save size={18} />
                  {language === 'de' ? 'Mit Übersetzung speichern' : 'Save with translation'}
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Custom CSS for text layer */}
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

        @keyframes highlight {
          0%, 100% {
            background-color: transparent;
          }
          50% {
            background-color: rgb(250, 204, 21);
          }
        }

        .animate-highlight {
          animation: highlight 2s ease-in-out;
        }

        .dark .animate-highlight {
          animation: highlight-dark 2s ease-in-out;
        }

        @keyframes highlight-dark {
          0%, 100% {
            background-color: rgb(41, 37, 36);
          }
          50% {
            background-color: rgb(161, 98, 7);
          }
        }
      `}</style>
    </div>
  );
}

export default PDFReader;
