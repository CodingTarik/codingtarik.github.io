import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, Circle, X, RotateCcw, BookMarked, FileText, Info
} from 'lucide-react';

export default function CourseSidebar({
  course,
  items = [],
  activeItemId,
  onSelectItem,
  isItemCompleted,
  onToggleItemComplete,
  stats,
  onBackToOverview,
  isOpen,
  onClose,
  onResetProgress,
  customFooterNote
}) {
  const isBook = course.type === 'book';
  const accentColor = isBook ? 'amber' : 'primary';
  const itemTypeLabel = isBook ? 'Chapter' : 'Lesson';

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sticky Sidebar Container */}
      <aside
        className={`
          no-print fixed lg:sticky top-0 lg:top-[57px] left-0 z-50 lg:z-auto w-[85vw] sm:w-80 bg-card/95 backdrop-blur-md border-r border-border
          flex flex-col h-screen lg:h-[calc(100vh-57px)] transition-transform duration-300 ease-in-out shadow-2xl lg:shadow-none shrink-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header */}
        <div className="p-4 border-b border-border flex flex-col gap-3 bg-card/40">
          <div className="flex items-center justify-between">
            <button
              onClick={onBackToOverview}
              className="inline-flex items-center gap-2 text-xs font-bold text-muted hover:text-primary transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Learning Hub</span>
            </button>
            <button
              onClick={onClose}
              className="lg:hidden p-1 text-muted hover:text-text rounded-lg"
              title="Close sidebar"
            >
              <X size={18} />
            </button>
          </div>

          <div>
            <span className={`text-[10px] font-extrabold uppercase tracking-wider ${
              isBook ? 'text-amber-500' : 'text-primary'
            }`}>
              {course.category || (isBook ? 'Book' : 'Course')}
            </span>
            <h2 className="text-base font-extrabold text-text line-clamp-1 mt-0.5">
              {course.title}
            </h2>
          </div>

          {/* Progress Summary */}
          <div className="space-y-1.5 pt-2 border-t border-border/50">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-muted">Progress</span>
              <span className={isBook ? 'text-amber-500 font-bold' : 'text-primary font-bold'}>
                {stats.percentage}%
              </span>
            </div>
            <div className="w-full h-2 bg-border/60 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 rounded-full ${
                  isBook 
                    ? 'bg-amber-500' 
                    : 'bg-gradient-to-r from-primary via-secondary to-primary'
                }`}
                style={{ width: `${stats.percentage}%` }}
              />
            </div>
            <p className="text-[11px] text-muted">
              {stats.completedCount} of {stats.totalCount} {isBook ? 'chapters' : 'lessons'} completed
            </p>
          </div>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5 scrollbar-thin">
          {items.map((item, idx) => {
            const isActive = item.id === activeItemId;
            const isDone = isItemCompleted(course.id, item.id);

            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectItem(item.id);
                  onClose();
                }}
                className={`
                  w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 group cursor-pointer text-xs relative overflow-hidden border
                  ${isActive
                    ? isBook
                      ? 'bg-amber-500/10 border-amber-500/40 text-amber-500 font-bold shadow-xs'
                      : 'bg-primary/15 border-primary/40 text-primary font-bold shadow-xs'
                    : isDone
                    ? 'bg-card hover:bg-border/30 text-text font-medium border-border/40'
                    : 'text-muted hover:text-text hover:bg-border/30 border-transparent'
                  }
                `}
              >
                {isActive && (
                  <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-full ${
                    isBook ? 'bg-amber-500' : 'bg-primary'
                  }`} />
                )}

                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleItemComplete(course.id, item.id);
                  }}
                  className="mt-0.5 shrink-0 hover:scale-110 transition-transform cursor-pointer"
                  title={isDone ? 'Mark as incomplete' : 'Mark as completed'}
                >
                  {isDone ? (
                    <CheckCircle2 size={16} className="text-emerald-500 fill-emerald-500/20" />
                  ) : (
                    <Circle size={16} className={`text-muted/60 ${isBook ? 'group-hover:text-amber-500' : 'group-hover:text-primary'} transition-colors`} />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="text-[10px] uppercase font-bold text-muted">
                      {itemTypeLabel} {item.chapterNumber || idx + 1}
                    </span>
                    {item.duration && (
                      <span className="text-[10px] text-muted/80">{item.duration}</span>
                    )}
                  </div>
                  <p className={`line-clamp-2 leading-snug ${isActive ? (isBook ? 'text-amber-500 font-bold' : 'text-primary font-bold') : 'text-text'}`}>
                    {item.title.replace(/^(Lektion|Kapitel|Lesson|Chapter) \d+:\s*/i, '')}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Custom Footer Note (e.g. PDF Export tip for books) */}
        {customFooterNote && (
          <div className="p-3 border-t border-border bg-card/30">
            {customFooterNote}
          </div>
        )}

        {/* Footer */}
        {onResetProgress && (
          <div className="p-3 border-t border-border flex items-center justify-between text-xs text-muted bg-card/40">
            <button
              onClick={() => onResetProgress(course.id)}
              className="flex items-center gap-1.5 hover:text-rose-500 transition-colors text-[11px] font-medium"
              title="Reset progress for this course"
            >
              <RotateCcw size={13} />
              <span>Reset Progress</span>
            </button>
            <span className="text-[11px] text-muted/80 font-mono">Press ← → Navigate</span>
          </div>
        )}
      </aside>
    </>
  );
}
