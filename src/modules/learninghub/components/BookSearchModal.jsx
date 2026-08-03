import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, ArrowRight, CornerDownLeft } from 'lucide-react';

export default function BookSearchModal({ isOpen, onClose, allPages, onJumpToPage }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open search event handler handled in parent component
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter pages matching query
  const results = query.trim() === '' ? [] : allPages.flatMap((page) => {
    // Strip HTML tags for clean text matching
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = page.pageContent;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';

    const lowerQuery = query.toLowerCase();
    const index = textContent.toLowerCase().indexOf(lowerQuery);

    if (index !== -1) {
      // Extract snippet around match
      const start = Math.max(0, index - 40);
      const end = Math.min(textContent.length, index + query.length + 60);
      const snippet = textContent.substring(start, end);

      return [{
        globalPageNum: page.globalPageNum,
        chapterTitle: page.chapterTitle,
        chapterNumber: page.chapterNumber,
        snippet,
        matchIndex: index - start,
        matchLength: query.length
      }];
    }
    return [];
  });

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      {/* Overlay backdrop click */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Search Dialog */}
      <div className="relative w-full max-w-2xl bg-card border border-border shadow-2xl rounded-3xl overflow-hidden z-10 flex flex-col max-h-[80vh] animate-scaleUp">
        
        {/* Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-border/80 bg-background/50">
          <Search size={20} className="text-amber-500 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search in book... (e.g. Schrödinger, CSS, Paged.js)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-text text-base font-medium placeholder:text-muted focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-muted hover:text-text rounded-full hover:bg-border/60 transition-colors mr-2 cursor-pointer"
            >
              <X size={16} />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-[10px] font-bold text-muted bg-card border border-border rounded-lg shadow-xs">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {query.trim() === '' ? (
            <div className="py-12 text-center text-muted">
              <BookOpen size={36} className="mx-auto mb-3 opacity-30 text-amber-500" />
              <p className="text-sm font-semibold">Type a word or topic to search across all pages</p>
              <p className="text-xs text-muted/60 mt-1">Press <kbd className="px-1.5 py-0.5 bg-card border border-border rounded text-[10px]">Cmd + K</kbd> anytime</p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-muted">
              <p className="text-sm font-semibold">No matches found for "{query}"</p>
              <p className="text-xs text-muted/60 mt-1">Try searching with different keywords</p>
            </div>
          ) : (
            results.map((res, i) => (
              <div
                key={`search-res-${i}`}
                onClick={() => {
                  onJumpToPage(res.globalPageNum);
                  onClose();
                }}
                className="group flex items-start justify-between p-3.5 rounded-2xl bg-card hover:bg-amber-500/10 border border-border/60 hover:border-amber-500/40 transition-all cursor-pointer"
              >
                <div className="space-y-1 pr-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-amber-500 text-white">
                      Page {res.globalPageNum}
                    </span>
                    <span className="text-xs font-bold text-muted uppercase tracking-wider">
                      Chapter {res.chapterNumber}: {res.chapterTitle}
                    </span>
                  </div>
                  <p className="text-sm text-text/90 line-clamp-2 leading-relaxed">
                    ...{res.snippet}...
                  </p>
                </div>
                <div className="flex items-center text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={18} />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 border-t border-border/60 bg-background/40 flex items-center justify-between text-xs text-muted">
          <span>{results.length} result{results.length === 1 ? '' : 's'} found</span>
          <div className="flex items-center gap-2 text-[11px]">
            <span>Navigate with click</span>
            <CornerDownLeft size={12} />
          </div>
        </div>
      </div>
    </div>
  );
}
