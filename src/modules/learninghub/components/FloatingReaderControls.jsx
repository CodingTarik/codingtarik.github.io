import React from 'react';
import { BookOpen, Layers, ZoomIn, ZoomOut } from 'lucide-react';

export default function FloatingReaderControls({
  currentIndex,
  totalCount,
  jumpInput,
  setJumpInput,
  onJumpSubmit,
  viewMode,
  setViewMode,
  isBook,
  zoomLevel = 100,
  onZoomIn,
  onZoomOut,
  onZoomReset
}) {
  return (
    <div className="no-print fixed bottom-5 right-5 z-50 flex justify-end pointer-events-none">
      {/* Sleek, Compact Glassmorphic Reader Widget */}
      <div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/85 backdrop-blur-xl border border-border/80 shadow-2xl shadow-black/40 text-xs">
        
        {/* Page counter & Jump input */}
        <form onSubmit={onJumpSubmit} className="flex items-center gap-1.5">
          <div className="flex items-center gap-1 font-bold text-text">
            <span className="text-amber-500 font-extrabold">{currentIndex + 1}</span>
            <span className="text-muted/60 text-[11px]">/ {totalCount}</span>
          </div>

          <input
            type="number"
            min="1"
            max={totalCount}
            placeholder="#"
            value={jumpInput}
            onChange={(e) => setJumpInput(e.target.value)}
            className="w-8 px-1 py-0.5 bg-card/90 border border-border/80 rounded-md text-[11px] text-center font-bold focus:outline-none focus:border-amber-500 transition-all placeholder:text-muted/50"
            title="Type page number & press Enter"
          />
        </form>

        {/* Zoom Controls */}
        {isBook && (
          <>
            <div className="w-px h-3.5 bg-border/70"></div>
            <div className="flex items-center gap-0.5">
              <button
                onClick={onZoomOut}
                disabled={zoomLevel <= 50}
                className="p-1 rounded-full text-muted hover:text-text hover:bg-card/80 disabled:opacity-30 transition-all cursor-pointer"
                title="Zoom Out (Ctrl + Scroll)"
              >
                <ZoomOut size={13} />
              </button>

              <button
                onClick={onZoomReset}
                className="px-1.5 py-0.5 rounded-md text-[10px] font-extrabold text-amber-500 hover:bg-amber-500/10 transition-all cursor-pointer"
                title="Reset Zoom (100%)"
              >
                {zoomLevel}%
              </button>

              <button
                onClick={onZoomIn}
                disabled={zoomLevel >= 200}
                className="p-1 rounded-full text-muted hover:text-text hover:bg-card/80 disabled:opacity-30 transition-all cursor-pointer"
                title="Zoom In (Ctrl + Scroll)"
              >
                <ZoomIn size={13} />
              </button>
            </div>
          </>
        )}

        {/* View Mode Segmented Controls */}
        {isBook && (
          <>
            <div className="w-px h-3.5 bg-border/70"></div>
            <div className="flex items-center gap-0.5 p-0.5 bg-card/60 rounded-full border border-border/60">
              <button
                onClick={() => setViewMode('chapter')}
                className={`p-1 rounded-full transition-all cursor-pointer ${
                  viewMode === 'chapter'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-muted hover:text-text'
                }`}
                title="Chapter View"
              >
                <BookOpen size={12} />
              </button>

              <button
                onClick={() => setViewMode('continuous')}
                className={`p-1 rounded-full transition-all cursor-pointer ${
                  viewMode === 'continuous'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-muted hover:text-text'
                }`}
                title="Continuous Scroll Mode"
              >
                <Layers size={12} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
