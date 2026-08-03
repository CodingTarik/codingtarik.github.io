import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, CheckCircle2, Circle, X, RotateCcw, ChevronDown, ChevronRight, Bookmark
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

  const [expandedChapters, setExpandedChapters] = useState(() => {
    const initial = {};
    items.forEach((ch) => { initial[ch.id] = ch.id === activeItemId; });
    return initial;
  });

  const toggleExpandChapter = (id, e) => {
    e.stopPropagation();
    setExpandedChapters((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeItemId]);

  const progressPct = stats?.percentage || 0;
  const completedCount = stats?.completedCount || 0;
  const totalCount = stats?.totalCount || items.length;

  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`
          no-print fixed left-0 top-0 bottom-0 z-40 w-[82vw] sm:w-72 flex flex-col h-screen shrink-0
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        style={{
          background: 'rgba(10, 14, 23, 0.85)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          borderRight: '1px solid rgba(255,255,255,0.07)',
          boxShadow: '4px 0 24px rgba(0,0,0,0.3)'
        }}
      >
        {/* ── Header ── */}
        <div className="shrink-0 p-4 space-y-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          {/* Back + close */}
          <div className="flex items-center justify-between">
            <button
              onClick={onBackToOverview}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-amber-400 transition-colors cursor-pointer group"
            >
              <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
              <span>Learning Hub</span>
            </button>
            <button
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-muted hover:text-text hover:bg-white/8 transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Course info */}
          <div className="space-y-0.5">
            <span className={`text-[10px] font-extrabold uppercase tracking-widest ${isBook ? 'text-amber-400' : 'text-indigo-400'}`}>
              {course.category || (isBook ? 'E-Book' : 'Course')}
            </span>
            <h2 className="text-sm font-bold text-text line-clamp-2 leading-snug">{course.title}</h2>
          </div>

          {/* Progress section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted font-medium">Progress</span>
              <span className={`font-black ${isBook ? 'text-amber-400' : 'text-indigo-400'}`}>
                {progressPct}%
              </span>
            </div>

            {/* Track */}
            <div className="w-full h-1.5 bg-white/8 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className={`h-full rounded-full ${isBook ? 'bg-amber-500' : 'bg-indigo-500'}`}
              />
            </div>

            <p className="text-[11px] text-muted/70">
              {completedCount} of {totalCount} {isBook ? 'chapters' : 'lessons'} completed
            </p>
          </div>
        </div>

        {/* ── Item List ── */}
        <div className="flex-1 overflow-y-auto lh-sidebar-scroll p-3 space-y-1">
          {items.map((item, idx) => {
            const isActive = item.id === activeItemId;
            const isDone = isItemCompleted ? isItemCompleted(course.id, item.id) : false;
            const isExpanded = expandedChapters[item.id] ?? (item.id === activeItemId);
            const chapterPages = isBook ? allPages.filter((p) => p.chapterId === item.id) : [];

            return (
              <div key={item.id} className="space-y-0.5">
                {/* Main item row */}
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
                    w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer group relative
                    ${isActive
                      ? 'text-text'
                      : isDone
                      ? 'text-text/70 hover:text-text hover:bg-white/5'
                      : 'text-muted hover:text-text hover:bg-white/5'
                    }
                  `}
                  style={isActive ? {
                    background: isBook ? 'rgba(245,158,11,0.1)' : 'rgba(99,102,241,0.1)',
                    border: `1px solid ${isBook ? 'rgba(245,158,11,0.25)' : 'rgba(99,102,241,0.25)'}`,
                  } : { border: '1px solid transparent' }}
                >
                  {/* Active left accent bar */}
                  {isActive && (
                    <div
                      className="absolute left-0 top-2 bottom-2 w-0.5 rounded-r-full"
                      style={{ background: isBook ? '#f59e0b' : '#6366f1' }}
                    />
                  )}

                  {/* Completion toggle */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onToggleItemComplete) onToggleItemComplete(course.id, item.id);
                    }}
                    className="shrink-0 hover:scale-110 transition-transform cursor-pointer"
                    title={isDone ? 'Mark as unread' : 'Mark as read'}
                  >
                    {isDone ? (
                      <CheckCircle2 size={15} className="text-emerald-400" style={{ fill: 'rgba(52,211,153,0.2)' }} />
                    ) : (
                      <Circle size={15} className={`text-white/20 ${isActive ? (isBook ? 'group-hover:text-amber-400' : 'group-hover:text-indigo-400') : 'group-hover:text-white/50'} transition-colors`} />
                    )}
                  </div>

                  {/* Text content */}
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-bold text-muted/60 uppercase tracking-wider mb-0.5">
                      {itemTypeLabel} {item.chapterNumber || idx + 1}
                    </div>
                    <p className={`text-xs line-clamp-1 leading-snug font-semibold ${isActive ? (isBook ? 'text-amber-300' : 'text-indigo-300') : ''}`}>
                      {item.title.replace(/^(Lektion|Kapitel|Lesson|Chapter) \d+:\s*/i, '')}
                    </p>
                  </div>

                  {/* Expand/collapse for books */}
                  {isBook && chapterPages.length > 0 && (
                    <button
                      onClick={(e) => toggleExpandChapter(item.id, e)}
                      className="shrink-0 p-0.5 rounded text-muted/50 hover:text-text transition-colors"
                    >
                      {isExpanded
                        ? <ChevronDown size={13} />
                        : <ChevronRight size={13} />
                      }
                    </button>
                  )}
                </div>

                {/* Sub-pages for books */}
                {isBook && isExpanded && chapterPages.length > 0 && (
                  <div className="pl-6 pr-1 space-y-0.5 py-0.5">
                    {chapterPages.map((page) => {
                      const isPageActive = page.globalPageNum === activePageNum;
                      const isBookmarked = bookmarks.includes(page.globalPageNum);
                      return (
                        <div
                          key={`sub-page-${page.globalPageNum}`}
                          onClick={() => { if (onSelectPage) onSelectPage(page.globalPageNum); onClose(); }}
                          className={`
                            flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-all cursor-pointer group/sub
                            ${isPageActive
                              ? 'bg-amber-500 text-white shadow-sm'
                              : 'text-muted hover:text-text hover:bg-white/5'
                            }
                          `}
                        >
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className={`text-[10px] font-extrabold ${isPageActive ? 'text-white/70' : 'text-amber-500/70'}`}>
                              {page.globalPageNum}
                            </span>
                            <span className="truncate">
                              {page.pageInChIdx === 0 ? 'Start' : `Page ${page.pageInChIdx + 1}`}
                            </span>
                          </div>
                          <button
                            onClick={(e) => { e.stopPropagation(); if (onToggleBookmark) onToggleBookmark(page.globalPageNum); }}
                            className={`p-0.5 rounded transition-colors ${isBookmarked
                              ? isPageActive ? 'text-white' : 'text-amber-400'
                              : 'text-white/20 hover:text-amber-400'
                            }`}
                          >
                            <Bookmark size={10} fill={isBookmarked ? 'currentColor' : 'none'} />
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

        {/* ── Footer ── */}
        {onResetProgress && (
          <div
            className="shrink-0 px-4 py-3 flex items-center justify-between"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <button
              onClick={() => onResetProgress(course.id)}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted/60 hover:text-rose-400 transition-colors cursor-pointer"
            >
              <RotateCcw size={12} />
              <span>Reset progress</span>
            </button>
            <span className="text-[10px] text-muted/40 font-mono">← →</span>
          </div>
        )}
      </aside>
    </>
  );
}
