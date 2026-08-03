import React from 'react';
import { CheckCircle2, Circle, Menu, Printer, BookMarked, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CourseHeaderBar({
  course,
  activeItem,
  currentIndex,
  totalCount,
  isCompleted,
  onToggleComplete,
  onToggleSidebar,
  onBackToOverview,
  onPrintPdf
}) {
  const isBook = course.type === 'book';
  const itemTypeLabel = isBook ? 'Chapter' : 'Lesson';
  const progressPct = totalCount > 0 ? Math.round(((currentIndex + 1) / totalCount) * 100) : 0;

  return (
    <header
      className="no-print sticky top-0 z-30 flex flex-col"
      style={{
        background: 'rgba(10, 14, 23, 0.72)',
        backdropFilter: 'blur(40px) saturate(180%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        boxShadow: '0 1px 0 rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.2)'
      }}
    >
      {/* Reading progress line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: (currentIndex + 1) / totalCount }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-full origin-left"
          style={{ background: isBook ? 'linear-gradient(90deg, #f59e0b, #fbbf24)' : 'linear-gradient(90deg, #6366f1, #a78bfa)' }}
        />
      </div>

      {/* Main header row */}
      <div className="px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Left: sidebar toggle + info */}
        <div className="flex items-center gap-3 min-w-0">
          {onToggleSidebar && (
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 rounded-xl text-muted hover:text-text hover:bg-white/8 transition-colors shrink-0 cursor-pointer"
              title="Open table of contents"
            >
              <Menu size={17} />
            </button>
          )}

          <div className="min-w-0">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[11px] font-medium text-muted/70 mb-0.5 flex-wrap">
              {/* Type pill */}
              <span
                className={`inline-flex items-center gap-1 font-extrabold text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full ${
                  isBook
                    ? 'bg-amber-500/12 text-amber-400 border border-amber-500/25'
                    : 'bg-indigo-500/12 text-indigo-400 border border-indigo-500/25'
                }`}
              >
                {isBook ? <BookMarked size={9} /> : <Layers size={9} />}
                {isBook ? 'E-Book' : 'Series'}
              </span>

              <span className="text-white/15 hidden sm:inline">›</span>
              <span className="hidden sm:inline truncate max-w-[180px] font-semibold text-muted/60">{course.title}</span>
              <span className="text-white/15 hidden sm:inline">›</span>

              <span
                className={`font-bold text-[10px] px-2 py-0.5 rounded-full ${
                  isBook
                    ? 'text-amber-400 bg-amber-500/8'
                    : 'text-indigo-400 bg-indigo-500/8'
                }`}
              >
                {itemTypeLabel} {currentIndex + 1} / {totalCount}
              </span>
            </div>

            {/* Active item title */}
            <h1 className="text-sm font-bold text-text/90 truncate leading-tight">
              {activeItem?.title
                ? activeItem.title.replace(/^(Lektion|Kapitel|Lesson|Chapter) \d+:\s*/i, '')
                : ''}
            </h1>
          </div>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* PDF Export for books */}
          {isBook && onPrintPdf && (
            <button
              onClick={onPrintPdf}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Printer size={13} />
              <span className="hidden sm:inline">PDF</span>
            </button>
          )}

          {/* Mark as done toggle */}
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={onToggleComplete}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-250 flex items-center gap-1.5 cursor-pointer ${
              isCompleted
                ? 'bg-emerald-500/12 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                : 'bg-white/5 border border-white/10 text-muted hover:text-text hover:border-white/20'
            }`}
          >
            {isCompleted ? (
              <CheckCircle2 size={14} className="text-emerald-400" />
            ) : (
              <Circle size={14} />
            )}
            <span className="hidden sm:inline">
              {isCompleted ? 'Completed' : 'Mark as read'}
            </span>
          </motion.button>
        </div>
      </div>
    </header>
  );
}
