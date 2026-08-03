import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Circle, Printer, BookOpen, Layers, 
  ChevronLeft, ChevronRight, Info, ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import BlogPostContent from '../../blog/components/BlogPostContent';
import CourseHeaderBar from './CourseHeaderBar';
import CourseSidebar from './CourseSidebar';

export default function PagedBookViewer({
  course,
  onBackToOverview,
  isLessonCompleted,
  toggleLessonCompleted,
  getCourseStats
}) {
  const chapters = course.chapters || [];
  const [activeChapterId, setActiveChapterId] = useState(chapters[0]?.id || null);
  const [viewMode, setViewMode] = useState('chapter'); // 'chapter' or 'continuous'
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [jumpPageInput, setJumpPageInput] = useState('');

  const stats = getCourseStats(course);
  const activeIndex = chapters.findIndex((ch) => ch.id === activeChapterId);
  const activeChapter = chapters[activeIndex >= 0 ? activeIndex : 0] || chapters[0];

  const isCurrentCompleted = activeChapter ? isLessonCompleted(course.id, activeChapter.id) : false;

  // Scroll to top when changing active chapter in chapter view mode
  useEffect(() => {
    if (viewMode === 'chapter') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeChapterId, viewMode]);

  // Scrollspy: IntersectionObserver for Continuous Scroll Mode to auto-highlight active chapter in sidebar
  useEffect(() => {
    if (viewMode !== 'continuous') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const chId = entry.target.getAttribute('data-chapter-id');
            if (chId) {
              setActiveChapterId(chId);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-15% 0px -65% 0px',
        threshold: 0
      }
    );

    const elements = document.querySelectorAll('[data-chapter-id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [viewMode, chapters]);

  const handlePrintPdf = () => {
    window.print();
  };

  const handleToggleChapter = () => {
    if (!activeChapter) return;
    const nextCompleted = !isCurrentCompleted;
    toggleLessonCompleted(course.id, activeChapter.id);
    if (nextCompleted && (activeIndex === chapters.length - 1 || stats.completedCount + 1 >= chapters.length)) {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handleJumpToChapter = (e) => {
    e.preventDefault();
    const num = parseInt(jumpPageInput.trim(), 10);
    if (!isNaN(num) && num >= 1 && num <= chapters.length) {
      const targetCh = chapters[num - 1];
      if (targetCh) {
        setActiveChapterId(targetCh.id);
        setJumpPageInput('');

        if (viewMode === 'continuous') {
          const targetEl = document.querySelector(`[data-chapter-id="${targetCh.id}"]`);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-text flex">
      {/* Printable Book CSS Rules */}
      <style>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
          .book-page-break {
            page-break-before: always !important;
            break-before: page !important;
          }
          .prose {
            max-width: 100% !important;
            color: black !important;
          }
          @page {
            size: ${course.pagedOptions?.pageSize || 'A4'};
            margin: ${course.pagedOptions?.margin || '20mm'};
            @top-right {
              content: "${course.title}";
              font-size: 9pt;
              color: #666;
            }
            @bottom-center {
              content: counter(page);
              font-size: 10pt;
              font-weight: bold;
            }
          }
        }
      `}</style>

      {/* Shared Fixed Course Sidebar */}
      <CourseSidebar
        course={course}
        items={chapters}
        activeItemId={activeChapter?.id}
        onSelectItem={(id) => {
          setActiveChapterId(id);
          if (viewMode === 'continuous') {
            const targetEl = document.querySelector(`[data-chapter-id="${id}"]`);
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
        isItemCompleted={isLessonCompleted}
        onToggleItemComplete={toggleLessonCompleted}
        stats={stats}
        onBackToOverview={onBackToOverview}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        customFooterNote={
          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400">
            <p className="font-bold mb-1 flex items-center gap-1.5 text-xs">
              <Info size={14} />
              <span>PDF Export Guide</span>
            </p>
            <p className="text-[11px] leading-relaxed">
              Click **Export PDF / Print** in the top bar to save the complete book as a formatted A4 PDF.
            </p>
          </div>
        }
      />

      {/* Main Reader Content Area (Offset by lg:ml-80) */}
      <div className="lg:ml-80 flex-1 flex flex-col min-w-0">
        {/* Shared Header Bar */}
        <CourseHeaderBar
          course={course}
          activeItem={activeChapter}
          currentIndex={activeIndex}
          totalCount={chapters.length}
          isCompleted={isCurrentCompleted}
          onToggleComplete={handleToggleChapter}
          onBackToOverview={onBackToOverview}
          onToggleSidebar={() => setIsSidebarOpen(true)}
          onPrintPdf={handlePrintPdf}
        />

        {/* Main Book Content Container */}
        <main className="flex-1 p-4 sm:p-10 max-w-4xl mx-auto w-full">
          {/* Controls Bar: Right-Aligned Reading View Mode & Page Jump */}
          <div className="no-print mb-8 p-4 rounded-2xl bg-card border border-border/80 flex flex-wrap items-center justify-between gap-4 shadow-xs">
            <div className="text-xs font-bold text-muted">
              Chapter <span className="text-amber-500 text-sm font-extrabold">{activeIndex + 1}</span> of {chapters.length}
            </div>

            {/* Right-aligned Reading Controls */}
            <div className="flex flex-wrap items-center gap-3 ml-auto">
              {/* Direct Chapter / Page Jump Input */}
              <form onSubmit={handleJumpToChapter} className="flex items-center gap-1.5">
                <span className="text-xs font-medium text-muted hidden sm:inline">Jump to:</span>
                <input
                  type="number"
                  min="1"
                  max={chapters.length}
                  placeholder="#"
                  value={jumpPageInput}
                  onChange={(e) => setJumpPageInput(e.target.value)}
                  className="w-14 px-2 py-1.5 bg-background border border-border rounded-xl text-xs text-center font-bold focus:outline-none focus:border-amber-500 shadow-xs"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-amber-500 text-white rounded-xl text-xs font-bold hover:bg-amber-600 transition-colors shadow-xs cursor-pointer"
                >
                  Go
                </button>
              </form>

              {/* View Mode Toggle Pill */}
              <div className="inline-flex items-center p-1 bg-background border border-border rounded-xl gap-1">
                <button
                  onClick={() => setViewMode('chapter')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    viewMode === 'chapter'
                      ? 'bg-amber-500 text-white shadow-xs'
                      : 'text-muted hover:text-text'
                  }`}
                  title="View one chapter at a time"
                >
                  <BookOpen size={14} />
                  <span>Chapter View</span>
                </button>

                <button
                  onClick={() => setViewMode('continuous')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    viewMode === 'continuous'
                      ? 'bg-amber-500 text-white shadow-xs'
                      : 'text-muted hover:text-text'
                  }`}
                  title="Scroll seamlessly through all chapters"
                >
                  <Layers size={14} />
                  <span>Continuous Scroll</span>
                </button>
              </div>
            </div>
          </div>

          {/* Reading Mode Renderer */}
          {viewMode === 'chapter' ? (
            /* Chapter-by-Chapter Mode */
            activeChapter && (
              <article className="bg-card border border-border/80 rounded-3xl p-6 sm:p-10 shadow-xs relative">
                {/* Chapter Hero Banner */}
                <div className="mb-8 pb-5 border-b border-border/60 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <span className="text-xs font-extrabold text-amber-500 uppercase tracking-widest">
                      Chapter {activeChapter.chapterNumber || activeIndex + 1}
                    </span>
                    <h2 className="text-xl sm:text-3xl font-extrabold text-text mt-1">
                      {activeChapter.title}
                    </h2>
                  </div>

                  <button
                    onClick={handleToggleChapter}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
                      isCurrentCompleted
                        ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-500'
                        : 'bg-card border border-border text-muted hover:text-amber-500'
                    }`}
                  >
                    <CheckCircle2 size={16} />
                    <span>
                      {isCurrentCompleted
                        ? 'Completed'
                        : 'Mark Chapter Read'}
                    </span>
                  </button>
                </div>

                {/* Render Chapter Content */}
                <BlogPostContent content={activeChapter.content} />

                {/* Bottom Prev / Next Buttons */}
                <div className="no-print mt-12 pt-6 border-t border-border/80 flex items-center justify-between gap-4">
                  <button
                    onClick={() => {
                      if (activeIndex > 0) setActiveChapterId(chapters[activeIndex - 1].id);
                    }}
                    disabled={activeIndex === 0}
                    className={`px-5 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      activeIndex === 0
                        ? 'opacity-40 cursor-not-allowed bg-card border border-border text-muted'
                        : 'bg-card border border-border text-text hover:border-amber-500 hover:text-amber-500 shadow-sm'
                    }`}
                  >
                    <ChevronLeft size={16} />
                    <span>Previous Chapter</span>
                  </button>

                  <button
                    onClick={() => {
                      if (activeIndex < chapters.length - 1) {
                        setActiveChapterId(chapters[activeIndex + 1].id);
                      }
                    }}
                    disabled={activeIndex === chapters.length - 1}
                    className={`px-5 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      activeIndex === chapters.length - 1
                        ? 'opacity-40 cursor-not-allowed bg-card border border-border text-muted'
                        : 'bg-amber-500 text-white hover:bg-amber-600 shadow-md shadow-amber-500/20'
                    }`}
                  >
                    <span>Next Chapter</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </article>
            )
          ) : (
            /* Continuous Scroll Mode with Scrollspy */
            <div className="space-y-10">
              {chapters.map((ch, idx) => (
                <article
                  key={ch.id}
                  data-chapter-id={ch.id}
                  className="bg-card border border-border/80 rounded-3xl p-6 sm:p-10 shadow-xs relative scroll-mt-20"
                >
                  <div className="mb-6 pb-4 border-b border-border/60 flex items-center justify-between">
                    <span className="text-xs font-extrabold text-amber-500 uppercase tracking-widest">
                      Chapter {idx + 1}: {ch.title}
                    </span>
                    <button
                      onClick={() => toggleLessonCompleted(course.id, ch.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isLessonCompleted(course.id, ch.id)
                          ? 'bg-emerald-500/15 text-emerald-500'
                          : 'bg-card border border-border text-muted hover:text-amber-500'
                      }`}
                    >
                      <CheckCircle2 size={15} />
                      <span>{isLessonCompleted(course.id, ch.id) ? 'Completed' : 'Mark Read'}</span>
                    </button>
                  </div>
                  <BlogPostContent content={ch.content} />
                </article>
              ))}
            </div>
          )}

          {/* Hidden Container for window.print() */}
          <div className="hidden print:block space-y-12">
            <div className="text-center py-20 border-b border-black">
              <h1 className="text-4xl font-extrabold text-black mb-4">{course.title}</h1>
              <p className="text-lg text-gray-700 mb-8">{course.description}</p>
              <p className="text-sm text-gray-500">Author: {course.author || 'Tarik Azzouzi'}</p>
            </div>

            {chapters.map((ch, idx) => (
              <div key={ch.id} className="book-page-break pt-8">
                <h2 className="text-2xl font-bold text-black border-b border-gray-300 pb-2 mb-6">
                  Chapter {idx + 1}: {ch.title}
                </h2>
                <BlogPostContent content={ch.content} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
