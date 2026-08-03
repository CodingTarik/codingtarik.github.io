import React, { useState } from 'react';
import { BookOpen, Layers, ZoomIn, ZoomOut, Search, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  onZoomReset,
  onOpenSearch,
  onOpenSettings,
  // optional prev/next nav
  onPrev,
  onNext,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasZoom = onZoomIn && onZoomOut && onZoomReset;
  const hasViewMode = isBook && setViewMode;
  const hasBookExtras = isBook && (onOpenSearch || onOpenSettings);

  const canPrev = currentIndex > 0;
  const canNext = currentIndex < totalCount - 1;

  return (
    <div
      className="no-print fixed bottom-6 right-6 z-50 flex items-center justify-end"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Expanded controls — slides in from right */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: 16, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.94 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-1 mr-2"
          >
            {/* Jump form */}
            <form
              onSubmit={onJumpSubmit}
              className="flex items-center gap-1.5 px-3 py-2 rounded-2xl"
              style={{
                background: 'rgba(8,10,18,0.96)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
              }}
            >
              <span className="text-[11px] text-white/40 font-medium hidden sm:inline">Jump to</span>
              <input
                type="number"
                min="1"
                max={totalCount}
                placeholder="No."
                value={jumpInput}
                onChange={(e) => setJumpInput(e.target.value)}
                className="w-10 h-7 rounded-lg text-[12px] text-center font-bold focus:outline-none"
                style={{
                  background: 'rgba(255,255,255,0.09)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  color: '#ffffff',
                  caretColor: '#f59e0b',
                  WebkitAppearance: 'none',
                  MozAppearance: 'textfield',
                }}
                onFocus={(e) => e.target.style.borderColor = 'rgba(245,158,11,0.7)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.14)'}
              />
            </form>

            {/* Zoom */}
            {hasZoom && (
              <div
                className="flex items-center gap-0.5 px-1.5 py-1.5 rounded-2xl"
                style={{
                  background: 'rgba(8,10,18,0.96)',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                }}
              >
                <button onClick={onZoomOut} disabled={zoomLevel <= 50} className="w-8 h-8 flex items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-25 transition-all cursor-pointer">
                  <ZoomOut size={14} />
                </button>
                <button onClick={onZoomReset} className="h-8 px-2 rounded-xl text-[11px] font-extrabold text-amber-400 hover:bg-amber-500/15 transition-all cursor-pointer min-w-[42px]">
                  {zoomLevel}%
                </button>
                <button onClick={onZoomIn} disabled={zoomLevel >= 200} className="w-8 h-8 flex items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-25 transition-all cursor-pointer">
                  <ZoomIn size={14} />
                </button>
              </div>
            )}

            {/* View mode — books only */}
            {hasViewMode && (
              <div
                className="flex items-center gap-0.5 p-1 rounded-2xl"
                style={{
                  background: 'rgba(8,10,18,0.96)',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                }}
              >
                <button onClick={() => setViewMode('chapter')} className={`w-8 h-8 flex items-center justify-center rounded-xl transition-all cursor-pointer ${viewMode === 'chapter' ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' : 'text-white/40 hover:text-white hover:bg-white/8'}`} title="Chapter view">
                  <BookOpen size={13} />
                </button>
                <button onClick={() => setViewMode('continuous')} className={`w-8 h-8 flex items-center justify-center rounded-xl transition-all cursor-pointer ${viewMode === 'continuous' ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' : 'text-white/40 hover:text-white hover:bg-white/8'}`} title="Continuous">
                  <Layers size={13} />
                </button>
              </div>
            )}

            {/* Search + Settings — books only */}
            {hasBookExtras && (
              <div
                className="flex items-center gap-0.5 px-1.5 py-1.5 rounded-2xl"
                style={{
                  background: 'rgba(8,10,18,0.96)',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                }}
              >
                {onOpenSearch && (
                  <button onClick={onOpenSearch} className="w-8 h-8 flex items-center justify-center rounded-xl text-white/50 hover:text-amber-400 hover:bg-amber-500/12 transition-all cursor-pointer">
                    <Search size={13} />
                  </button>
                )}
                {onOpenSettings && (
                  <button onClick={onOpenSettings} className="w-8 h-8 flex items-center justify-center rounded-xl text-white/50 hover:text-amber-400 hover:bg-amber-500/12 transition-all cursor-pointer">
                    <Settings size={13} />
                  </button>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Compact Pill — always visible ── */}
      <motion.div
        layout
        className="flex items-center gap-1 rounded-full cursor-default"
        style={{
          background: 'rgba(8,10,18,0.96)',
          backdropFilter: 'blur(40px) saturate(200%)',
          WebkitBackdropFilter: 'blur(40px) saturate(200%)',
          border: '1px solid rgba(255,255,255,0.14)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
          padding: '6px 10px',
        }}
      >
        {/* Prev */}
        {onPrev && (
          <button
            onClick={onPrev}
            disabled={!canPrev}
            className="w-7 h-7 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 disabled:opacity-25 transition-all cursor-pointer"
          >
            <ChevronLeft size={14} />
          </button>
        )}

        {/* Counter */}
        <div className="flex items-center gap-1.5 px-1.5">
          <span className="text-[15px] font-black text-amber-400 tabular-nums leading-none">{currentIndex + 1}</span>
          <span className="text-[11px] text-white/25">/</span>
          <span className="text-[13px] text-white/40 font-semibold tabular-nums">{totalCount}</span>
        </div>

        {/* Separator + hover hint */}
        <div className="w-px h-4 bg-white/10 mx-0.5" />
        <motion.div
          animate={{ opacity: isExpanded ? 0 : 1 }}
          transition={{ duration: 0.15 }}
          className="text-[10px] text-white/25 font-medium pr-1 pointer-events-none select-none hidden sm:block"
        >
          Hover for tools
        </motion.div>

        {/* Next */}
        {onNext && (
          <button
            onClick={onNext}
            disabled={!canNext}
            className="w-7 h-7 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 disabled:opacity-25 transition-all cursor-pointer"
          >
            <ChevronRight size={14} />
          </button>
        )}
      </motion.div>
    </div>
  );
}
