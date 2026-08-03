import React from 'react';
import { BookOpen, Layers } from 'lucide-react';

export default function FloatingReaderControls({
  currentIndex,
  totalCount,
  jumpInput,
  setJumpInput,
  onJumpSubmit,
  viewMode,
  setViewMode,
  isBook
}) {
  const itemType = isBook ? 'Page' : 'Lesson';

  return (
    <div className="no-print fixed bottom-6 right-6 z-50 flex justify-end pointer-events-none">
      {/* Compact Floating Pill */}
      <div className="pointer-events-auto flex items-center gap-2 p-1.5 sm:p-2 rounded-2xl bg-background/90 backdrop-blur-2xl border border-border shadow-2xl shadow-black/30">
        
        {/* Page / Chapter Indicator */}
        <div className="flex items-center gap-1 px-2 text-xs">
          <span className="font-extrabold text-muted uppercase tracking-wider text-[10px]">{itemType}</span>
          <span className={`font-black ${isBook ? 'text-amber-500' : 'text-primary'}`}>
            {currentIndex + 1}
          </span>
          <span className="font-bold text-muted/60 text-[11px]">/ {totalCount}</span>
        </div>

        {/* Divider */}
        <div className="w-px h-4 bg-border/80"></div>

        {/* Jump Input */}
        <form onSubmit={onJumpSubmit} className="flex items-center gap-1">
          <input
            type="number"
            min="1"
            max={totalCount}
            placeholder="#"
            value={jumpInput}
            onChange={(e) => setJumpInput(e.target.value)}
            className="w-9 px-1 py-0.5 bg-card/80 border border-border rounded-lg text-xs text-center font-bold focus:outline-none focus:border-primary transition-all"
            title={`Jump to ${itemType}`}
          />
          <button
            type="submit"
            className="px-2 py-0.5 bg-card border border-border hover:bg-border/80 text-text rounded-lg text-xs font-bold transition-all cursor-pointer active:scale-95"
          >
            Go
          </button>
        </form>

        {/* View Mode Toggle (Only for books) */}
        {isBook && (
          <>
            <div className="w-px h-4 bg-border/80"></div>
            <div className="flex items-center gap-0.5 bg-card/60 border border-border p-0.5 rounded-xl">
              <button
                onClick={() => setViewMode('chapter')}
                className={`p-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  viewMode === 'chapter'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-muted hover:text-text'
                }`}
                title="Chapter View"
              >
                <BookOpen size={13} />
                <span className="hidden md:inline">Chapter</span>
              </button>

              <button
                onClick={() => setViewMode('continuous')}
                className={`p-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  viewMode === 'continuous'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-muted hover:text-text'
                }`}
                title="Continuous Scroll"
              >
                <Layers size={13} />
                <span className="hidden md:inline">Scroll</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
