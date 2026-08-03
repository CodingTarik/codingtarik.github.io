import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, Circle, X, RotateCcw, ChevronDown, ChevronRight, Bookmark, FileText, BookMarked
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
  allPages = [],
  activePageNum = 1,
  onSelectPage,
  bookmarks = [],
  onToggleBookmark
}) {
  const isBook = course.type === 'book';
  const itemTypeLabel = isBook ? 'Chapter' : 'Lesson';
  const activeItemRef = useRef(null);

  // Track expanded chapters (by default only active chapter is expanded)
  const [expandedChapters, setExpandedChapters] = useState(() => {
    const initial = {};
    items.forEach((ch) => {
      initial[ch.id] = ch.id === activeItemId;
    });
    return initial;
  });

  const toggleExpandChapter = (id, e) => {
    e.stopPropagation();
    setExpandedChapters((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Auto-scroll sidebar list so active item is smoothly centered in view
  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [activeItemId]);

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

      {/* Fixed Sidebar Container */}
      <aside
        className={`
          no-print fixed left-0 top-0 bottom-0 z-40 w-[85vw] sm:w-80 bg-card/95 backdrop-blur-md border-r border-border
          flex flex-col h-screen transition-transform duration-300 ease-in-out shadow-2xl lg:shadow-none shrink-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-border flex flex-col gap-3 bg-card/40 shrink-0">
          <div className="flex items-center justify-between">
            <button
              onClick={onBackToOverview}
              className="inline-flex items-center gap-2 text-xs font-bold text-muted hover:text-amber-500 transition-colors cursor-pointer"
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
                {stats?.percentage || 0}%
              </span>
            </div>
            <div className="w-full h-2 bg-border/60 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 rounded-full ${
                  isBook 
                    ? 'bg-amber-500' 
                    : 'bg-gradient-to-r from-primary via-secondary to-primary'
                }`}
                style={{ width: `${stats?.percentage || 0}%` }}
              />
            </div>
            <p className="text-[11px] text-muted">
              {stats?.completedCount || 0} of {stats?.totalCount || items.length} {isBook ? 'chapters' : 'lessons'} completed
            </p>
          </div>
        </div>

        {/* Item List (Independently Scrollable with Collapsible Sub-Pages for Books) */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2 scrollbar-thin">
          {items.map((item, idx) => {
            const isActive = item.id === activeItemId;
            const isDone = isItemCompleted ? isItemCompleted(course.id, item.id) : false;
            const isExpanded = expandedChapters[item.id] ?? true;

            // Pages belonging to this chapter
            const chapterPages = isBook 
              ? allPages.filter((p) => p.chapterId === item.id)
              : [];

            return (
              <div key={item.id} className="space-y-1">
                {/* Chapter Parent Row */}
                <div
                  ref={isActive ? activeItemRef : null}
                  onClick={() => {
                    onSelectItem(item.id);
                    if (isBook) {
                      setExpandedChapters((prev) => ({ ...prev, [item.id]: true }));
                    } else {
                      onClose();
                    }
                  }}
                  className={`
                    w-full text-left p-3 rounded-2xl transition-all flex items-center justify-between gap-2 group cursor-pointer text-xs relative border
                    ${isActive
                      ? isBook
                        ? 'bg-amber-500/15 border-amber-500/50 text-amber-500 font-bold shadow-xs'
                        : 'bg-primary/15 border-primary/50 text-primary font-bold shadow-xs'
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

                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onToggleItemComplete) onToggleItemComplete(course.id, item.id);
                      }}
                      className="shrink-0 hover:scale-110 transition-transform cursor-pointer"
                      title={isDone ? 'Mark as incomplete' : 'Mark as completed'}
                    >
                      {isDone ? (
                        <CheckCircle2 size={16} className="text-emerald-500 fill-emerald-500/20" />
                      ) : (
                        <Circle size={16} className={`text-muted/60 ${isBook ? 'group-hover:text-amber-500' : 'group-hover:text-primary'} transition-colors`} />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] uppercase font-bold text-muted">
                          {itemTypeLabel} {item.chapterNumber || idx + 1}
                        </span>
                      </div>
                      <p className={`line-clamp-1 leading-snug ${isActive ? (isBook ? 'text-amber-500 font-bold' : 'text-primary font-bold') : 'text-text'}`}>
                        {item.title.replace(/^(Lektion|Kapitel|Lesson|Chapter) \d+:\s*/i, '')}
                      </p>
                    </div>
                  </div>

                  {/* Expand / Collapse Icon for Books */}
                  {isBook && chapterPages.length > 0 && (
                    <button
                      onClick={(e) => toggleExpandChapter(item.id, e)}
                      className="p-1 text-muted hover:text-text rounded-md hover:bg-border/40 transition-colors"
                      title={isExpanded ? 'Collapse pages' : 'Expand pages'}
                    >
                      {isExpanded ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
                    </button>
                  )}
                </div>

                {/* Collapsible Sub-Pages List for Books */}
                {isBook && isExpanded && chapterPages.length > 0 && (
                  <div className="pl-4 pr-1 space-y-1 border-l-2 border-amber-500/20 ml-4 py-1">
                    {chapterPages.map((page) => {
                      const isPageActive = page.globalPageNum === activePageNum;
                      const isBookmarked = bookmarks.includes(page.globalPageNum);

                      return (
                        <div
                          key={`sub-page-${page.globalPageNum}`}
                          onClick={() => {
                            if (onSelectPage) onSelectPage(page.globalPageNum);
                            onClose();
                          }}
                          className={`
                            flex items-center justify-between px-3 py-1.5 rounded-xl text-[11px] font-medium transition-all cursor-pointer group/sub
                            ${isPageActive
                              ? 'bg-amber-500 text-white font-bold shadow-xs'
                              : 'text-muted hover:text-text hover:bg-border/40'
                            }
                          `}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className={`text-[10px] font-extrabold ${isPageActive ? 'text-white' : 'text-amber-500'}`}>
                              Pg {page.globalPageNum}
                            </span>
                            <span className="truncate">
                              {page.pageInChIdx === 0 ? 'Start' : `Page ${page.pageInChIdx + 1}`}
                            </span>
                          </div>

                          {/* Bookmark Toggle Icon */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (onToggleBookmark) onToggleBookmark(page.globalPageNum);
                            }}
                            className={`p-0.5 rounded transition-colors ${
                              isBookmarked
                                ? isPageActive ? 'text-white fill-white' : 'text-amber-500 fill-amber-500'
                                : 'text-muted/40 hover:text-amber-500'
                            }`}
                            title={isBookmarked ? 'Bookmarked' : 'Add bookmark'}
                          >
                            <Bookmark size={11} fill={isBookmarked ? 'currentColor' : 'none'} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        {onResetProgress && (
          <div className="p-3 border-t border-border flex items-center justify-between text-xs text-muted bg-card/40 shrink-0">
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
