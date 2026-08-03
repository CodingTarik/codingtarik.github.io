import React from 'react';
import { 
  CheckCircle2, Circle, Menu, Printer, BookMarked, FileText 
} from 'lucide-react';

export default function CourseHeaderBar({
  course,
  activeItem,
  currentIndex,
  totalCount,
  isCompleted,
  onToggleComplete,
  onToggleSidebar,
  onPrintPdf
}) {
  const isBook = course.type === 'book';
  const itemTypeLabel = isBook ? 'Chapter' : 'Lesson';

  return (
    <header className="no-print sticky top-0 z-30 bg-background/85 backdrop-blur-2xl border-b border-border/80 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs">
      {/* Left: Mobile Sidebar Drawer Toggle & Title Info */}
      <div className="flex items-center gap-3 min-w-0">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-xl bg-card border border-border text-text hover:bg-border/60 transition-colors shrink-0 cursor-pointer shadow-xs"
            title="Open Table of Contents"
          >
            <Menu size={18} />
          </button>
        )}

        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs font-medium text-muted flex-wrap">
            <span className={`inline-flex items-center gap-1 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
              isBook 
                ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20 shadow-xs' 
                : 'bg-primary/10 text-primary border border-primary/20 shadow-xs'
            }`}>
              {isBook ? <BookMarked size={11} /> : <FileText size={11} />}
              <span>{isBook ? 'Paged.js Book' : 'Series'}</span>
            </span>

            <span className="hidden sm:inline text-muted/40">•</span>
            
            <span className="hidden sm:inline font-semibold text-muted truncate max-w-[220px] sm:max-w-[320px]">
              {course.title}
            </span>

            <span className="text-muted/40">•</span>

            <span className={`shrink-0 font-extrabold text-xs px-2 py-0.5 rounded-md bg-border/40 ${
              isBook ? 'text-amber-500' : 'text-primary'
            }`}>
              {itemTypeLabel} {currentIndex + 1} of {totalCount}
            </span>
          </div>

          <h1 className="text-sm sm:text-base font-extrabold text-text truncate mt-1">
            {activeItem?.title ? activeItem.title.replace(/^(Lektion|Kapitel|Lesson|Chapter) \d+:\s*/i, '') : ''}
          </h1>
        </div>
      </div>

      {/* Right: Actions (Completion Toggle & PDF Export for books) */}
      <div className="flex items-center gap-2.5 shrink-0 ml-4">
        {isBook && onPrintPdf && (
          <button
            onClick={onPrintPdf}
            className="px-4 py-2.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 text-white hover:opacity-95 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
            title="Save book as PDF or Print"
          >
            <Printer size={15} />
            <span className="hidden sm:inline">Export PDF / Print</span>
          </button>
        )}

        <button
          onClick={onToggleComplete}
          className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-xs active:scale-95 ${
            isCompleted
              ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-500 hover:bg-emerald-500/25'
              : 'bg-card border border-border text-text hover:border-primary hover:text-primary'
          }`}
        >
          {isCompleted ? (
            <CheckCircle2 size={16} className="text-emerald-500" />
          ) : (
            <Circle size={16} className="text-muted" />
          )}
          <span className="hidden sm:inline">
            {isCompleted ? 'Completed' : 'Mark as Done'}
          </span>
        </button>
      </div>
    </header>
  );
}
