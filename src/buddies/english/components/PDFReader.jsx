import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import { 
  X, ChevronLeft, ChevronRight, BookMarked, Languages, 
  Save, Trash2, ZoomIn, ZoomOut, ArrowLeft 
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

// Set up PDF.js worker to use local file from public folder
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

function PDFReader({ book, onClose, onUpdate }) {
  const { language } = useLanguage();
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.2);
  const [selectedText, setSelectedText] = useState('');
  const [showTranslateButton, setShowTranslateButton] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [translatedText, setTranslatedText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [currentPage, setCurrentPage] = useState(book.currentPage || 1);
  
  const containerRef = useRef(null);
  const pageRefs = useRef({});
  const lastTouchDistance = useRef(null);

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
      }
    };

    document.addEventListener('mouseup', handleSelection);
    return () => document.removeEventListener('mouseup', handleSelection);
  }, []);

  const translateText = async () => {
    setIsTranslating(true);
    
    // Simple translation simulation (in real app, use Google Translate API or similar)
    setTimeout(() => {
      setTranslatedText(language === 'de' 
        ? `Übersetzung: [${selectedText}]` 
        : `Translation: [${selectedText}]`
      );
      setIsTranslating(false);
    }, 500);
  };

  const saveSelection = () => {
    const isWord = selectedText.split(' ').length === 1;
    const newItem = {
      id: Date.now(),
      text: selectedText,
      translation: translatedText,
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

  const jumpToPage = (page) => {
    const pageElement = pageRefs.current[page];
    if (pageElement && containerRef.current) {
      const container = containerRef.current;
      const pageTop = pageElement.offsetTop;
      container.scrollTo({
        top: pageTop - 20,
        behavior: 'smooth'
      });
    }
  };

  const changeScale = (delta) => {
    setScale(prevScale => Math.min(Math.max(0.5, prevScale + delta), 2.5));
  };

  return (
    <div className="fixed inset-0 bg-stone-900 z-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-80' : 'w-0'} bg-white dark:bg-stone-800 border-r border-stone-200 dark:border-stone-700 transition-all duration-300 overflow-hidden flex flex-col`}>
        <div className="p-4 border-b border-stone-200 dark:border-stone-700">
          <h2 className="font-bold text-lg text-stone-800 dark:text-stone-200 flex items-center gap-2">
            <BookMarked className="text-rose-500" />
            {language === 'de' ? 'Gespeichert' : 'Saved'}
          </h2>
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
                    className="bg-stone-50 dark:bg-stone-700 rounded-lg p-3 hover:shadow-md transition-all cursor-pointer group"
                    onClick={() => jumpToPage(word.page)}
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
                    className="bg-stone-50 dark:bg-stone-700 rounded-lg p-3 hover:shadow-md transition-all cursor-pointer group"
                    onClick={() => jumpToPage(sentence.page)}
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
              onClick={onClose}
              className="text-white hover:text-rose-500 transition-colors"
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
              onClick={onClose}
              className="text-white hover:text-rose-500 transition-colors p-2"
              title={language === 'de' ? 'Schließen' : 'Close'}
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
            transform: 'translate(-50%, -100%)'
          }}
        >
          <div className="bg-rose-500 text-white rounded-lg shadow-lg p-2 flex items-center gap-2">
            {!translatedText ? (
              <>
                <button
                  onClick={translateText}
                  disabled={isTranslating}
                  className="px-3 py-1 hover:bg-rose-600 rounded transition-colors text-sm font-semibold flex items-center gap-1"
                >
                  <Languages size={16} />
                  {isTranslating 
                    ? (language === 'de' ? 'Übersetze...' : 'Translating...') 
                    : (language === 'de' ? 'Übersetzen' : 'Translate')
                  }
                </button>
              </>
            ) : (
              <>
                <div className="px-3 py-1 text-sm">
                  {translatedText}
                </div>
                <button
                  onClick={saveSelection}
                  className="px-3 py-1 bg-green-500 hover:bg-green-600 rounded transition-colors text-sm font-semibold flex items-center gap-1"
                >
                  <Save size={16} />
                  {language === 'de' ? 'Speichern' : 'Save'}
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
      `}</style>
    </div>
  );
}

export default PDFReader;
