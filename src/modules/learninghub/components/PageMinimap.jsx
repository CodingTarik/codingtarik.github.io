import React, { useState } from 'react';
import { Layers, Bookmark, ChevronRight, ChevronLeft } from 'lucide-react';

export default function PageMinimap({
  allPages,
  activePageNum,
  onSelectPage,
  bookmarks = [],
  onToggleBookmark
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="no-print fixed top-24 right-4 z-40 flex items-start gap-2">
      {/* Toggle Minimap Sidebar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-2xl bg-card/90 backdrop-blur-xl border border-border shadow-xl text-text hover:text-amber-500 transition-all cursor-pointer flex items-center gap-1.5 font-bold text-xs"
        title={isOpen ? 'Close Page Minimap' : 'Open Page Minimap'}
      >
        <Layers size={16} className="text-amber-500" />
        <span className="hidden lg:inline text-[11px] uppercase tracking-wider font-extrabold">Minimap</span>
        {isOpen ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* Slide-out Minimap Drawer */}
      {isOpen && (
        <div className="w-56 max-h-[70vh] bg-card/95 backdrop-blur-2xl border border-border/80 shadow-2xl rounded-3xl p-3 flex flex-col space-y-3 overflow-hidden animate-fadeInRight">
          <div className="flex items-center justify-between px-2 pb-2 border-b border-border/60">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-500">
              Page Thumbnails
            </span>
            <span className="text-[10px] font-bold text-muted bg-border/40 px-2 py-0.5 rounded-full">
              {allPages.length} Pages
            </span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
            {allPages.map((page) => {
              const isActive = page.globalPageNum === activePageNum;
              const isBookmarked = bookmarks.includes(page.globalPageNum);

              return (
                <div
                  key={`minimap-page-${page.globalPageNum}`}
                  onClick={() => onSelectPage(page.globalPageNum)}
                  className={`group relative p-2.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-amber-500/10 border-amber-500 shadow-md ring-2 ring-amber-500/30'
                      : 'bg-background/60 border-border/60 hover:border-amber-500/50 hover:bg-card'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[11px] font-extrabold ${isActive ? 'text-amber-500' : 'text-text'}`}>
                      Page {page.globalPageNum}
                    </span>

                    {/* Bookmark Toggle Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(page.globalPageNum);
                      }}
                      className={`p-1 rounded-md transition-colors ${
                        isBookmarked
                          ? 'text-amber-500 fill-amber-500 bg-amber-500/10'
                          : 'text-muted/40 hover:text-amber-500'
                      }`}
                      title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Page'}
                    >
                      <Bookmark size={12} fill={isBookmarked ? 'currentColor' : 'none'} />
                    </button>
                  </div>

                  <p className="text-[10px] font-medium text-muted line-clamp-1">
                    {page.isFirstPageOfChapter
                      ? `Ch. ${page.chapterNumber}: ${page.chapterTitle}`
                      : `Chapter ${page.chapterNumber} (Cont.)`}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
