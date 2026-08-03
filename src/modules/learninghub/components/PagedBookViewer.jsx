import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Circle, Printer, Info 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import BlogPostContent from '../../blog/components/BlogPostContent';
import CourseHeaderBar from './CourseHeaderBar';
import CourseSidebar from './CourseSidebar';
import FloatingReaderControls from './FloatingReaderControls';
import { playSuccessSound } from '../utils/soundUtils';

export default function PagedBookViewer({
  course,
  onBackToOverview,
  isLessonCompleted,
  toggleLessonCompleted,
  getCourseStats
}) {
  const chapters = course.chapters || [];
  const [activeChapterId, setActiveChapterId] = useState(chapters[0]?.id || null);
  const [activePageNum, setActivePageNum] = useState(1);
  const [viewMode, setViewMode] = useState('chapter'); // 'chapter' or 'continuous'
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [jumpPageInput, setJumpPageInput] = useState('');

  // Helper function to split content by page breaks
  const splitContentIntoPages = (cnt) => {
    if (!cnt) return [];
    return cnt.split(/<div\s+class(?:Name)?=["']page-break["']\s*>\s*<\/div>|<div\s+class(?:Name)?=["']page-break["']\s*\/>/i);
  };

  // Build a flat list of all pages in the book
  const allPages = useMemo(() => {
    let globalPageNum = 1;
    const pageList = [];

    chapters.forEach((ch, chIdx) => {
      const rawPages = splitContentIntoPages(ch.content);
      rawPages.forEach((pageContent, pageInChIdx) => {
        pageList.push({
          globalPageNum,
          chapterId: ch.id,
          chapterIndex: chIdx,
          chapterTitle: ch.title,
          chapterNumber: ch.chapterNumber || chIdx + 1,
          pageInChIdx,
          isFirstPageOfChapter: pageInChIdx === 0,
          isLastPageOfChapter: pageInChIdx === rawPages.length - 1,
          pageContent
        });
        globalPageNum++;
      });
    });

    return pageList;
  }, [chapters]);

  const stats = getCourseStats(course);
  const activeIndex = chapters.findIndex((ch) => ch.id === activeChapterId);
  const activeChapter = chapters[activeIndex >= 0 ? activeIndex : 0] || chapters[0];

  const isCurrentCompleted = activeChapter ? isLessonCompleted(course.id, activeChapter.id) : false;

  // Select chapter and sync activePageNum
  const handleSelectChapter = (id) => {
    setActiveChapterId(id);
    const firstPage = allPages.find((p) => p.chapterId === id);
    if (firstPage) {
      setActivePageNum(firstPage.globalPageNum);
    }
  };

  useEffect(() => {
    if (viewMode === 'chapter') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeChapterId, viewMode]);

  // IntersectionObserver for page-level scrollspy
  useEffect(() => {
    if (viewMode !== 'continuous') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pageNumAttr = entry.target.getAttribute('data-page-num');
            const chIdAttr = entry.target.getAttribute('data-chapter-id');
            if (pageNumAttr) {
              const pNum = parseInt(pageNumAttr, 10);
              setActivePageNum(pNum);
            }
            if (chIdAttr) {
              setActiveChapterId(chIdAttr);
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

    const elements = document.querySelectorAll('[data-page-num]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [viewMode, allPages]);

  const handlePrintPdf = () => {
    window.print();
  };

  const handleToggleChapter = () => {
    if (!activeChapter) return;
    const nextCompleted = !isCurrentCompleted;
    toggleLessonCompleted(course.id, activeChapter.id);
    
    if (nextCompleted) {
      playSuccessSound();
      if (activeIndex === chapters.length - 1 || stats.completedCount + 1 >= chapters.length) {
        confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
      } else {
        confetti({ particleCount: 50, spread: 50, origin: { y: 0.8 } });
      }
    }
  };

  const handleJumpSubmit = (e) => {
    e.preventDefault();
    const targetNum = parseInt(jumpPageInput.trim(), 10);
    if (!isNaN(targetNum) && targetNum >= 1 && targetNum <= allPages.length) {
      const targetPage = allPages.find((p) => p.globalPageNum === targetNum);
      if (targetPage) {
        setActivePageNum(targetPage.globalPageNum);
        setActiveChapterId(targetPage.chapterId);
        setJumpPageInput('');

        if (viewMode === 'continuous') {
          const targetEl = document.querySelector(`[data-page-num="${targetPage.globalPageNum}"]`);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-text flex">
      {/* Paged.js Print & Book Styles */}
      <style>{`
        /* Force exact colors so background colors, SVGs, and text colors print properly */
        *, *::before, *::after {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }

        /* Force white background for the book reading container on screen & print */
        .book-reading-area {
          background-color: #ffffff !important;
          color: #111827;
        }

        /* Default prose text colors while allowing inline styles and color utility classes */
        .book-reading-area .prose {
          --tw-prose-body: #111827;
          --tw-prose-headings: #111827;
          --tw-prose-lead: #374151;
          --tw-prose-links: #2563eb;
          --tw-prose-bold: #000000;
          --tw-prose-counters: #4b5563;
          --tw-prose-bullets: #9ca3af;
          --tw-prose-hr: #e5e7eb;
          --tw-prose-quotes: #111827;
          --tw-prose-quote-borders: #e5e7eb;
          --tw-prose-captions: #4b5563;
          --tw-prose-code: #111827;
          --tw-prose-pre-code: #111827;
          --tw-prose-pre-bg: #f3f4f6;
          --tw-prose-th-borders: #d1d5db;
          --tw-prose-td-borders: #e5e7eb;
          color: #111827;
        }

        /* On-Screen A4 Page Simulation */
        @media screen {
          .print-only {
            display: none !important;
          }
          .book-reading-area {
            box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1), 0 0 10px rgba(0,0,0,0.05);
            min-height: 700px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          @media (min-width: 640px) {
            .book-reading-area {
              min-height: 1000px;
            }
          }
        }

        /* Essential Print CSS for Paged.js / PDF Export */
        @media print {
          .print-only {
            display: block !important;
          }
          html, body {
            background: #ffffff !important;
            color: #111827 !important;
          }
          .no-print {
            display: none !important;
          }
          
          /* Clean Page Breaks */
          .book-page-break, .page-break {
            page-break-before: always !important;
            break-before: page !important;
            height: 0 !important;
            margin: 0 !important;
            border: none !important;
            background: transparent !important;
          }
          .book-page-break::after, .page-break::after {
            display: none !important;
          }
          
          /* Prevent paragraphs and images from being cut in half across pages */
          .prose p, .prose img, .prose pre, .prose blockquote, .prose ul, .prose ol, .prose div {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .prose h1, .prose h2, .prose h3 {
            page-break-after: avoid !important;
            break-after: avoid !important;
          }

          .prose {
            max-width: 100% !important;
          }
          
          @page {
            size: ${course.pagedOptions?.pageSize || 'A4'};
            margin: ${course.pagedOptions?.margin || '20mm'};
            
            @top-right {
              content: "${course.title}";
              font-size: 9pt;
              color: #888;
            }
            @bottom-right {
              content: counter(page);
              font-size: 10pt;
              font-weight: bold;
              color: #444;
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
          handleSelectChapter(id);
          if (viewMode === 'continuous') {
            const firstPage = allPages.find((p) => p.chapterId === id);
            if (firstPage) {
              const targetEl = document.querySelector(`[data-page-num="${firstPage.globalPageNum}"]`);
              if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
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
              Click **Export PDF / Print** to generate an A4 optimized PDF. Use <code>&lt;div class="page-break"&gt;&lt;/div&gt;</code> in markdown to force manual page breaks!
            </p>
          </div>
        }
      />

      {/* Main Reader Content Area */}
      <div className="lg:ml-80 flex-1 flex flex-col min-w-0 relative">
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

        {/* The sleek, floating sticky right control bar tracking PAGES */}
        <FloatingReaderControls
          currentIndex={activePageNum - 1}
          totalCount={allPages.length}
          jumpInput={jumpPageInput}
          setJumpInput={setJumpPageInput}
          onJumpSubmit={handleJumpSubmit}
          viewMode={viewMode}
          setViewMode={setViewMode}
          isBook={true}
        />

        {/* Main Book Content Container (Forced White Background for Paged.js aesthetics) */}
        <main className="flex-1 p-4 sm:p-10 max-w-4xl mx-auto w-full no-print">
          
          {/* Reading Mode Renderer */}
          {viewMode === 'chapter' ? (
            /* Chapter-by-Chapter Mode */
            activeChapter && (
              <div className="space-y-12">
                {allPages
                  .filter((p) => p.chapterId === activeChapter.id)
                  .map((pageObj) => (
                    <article
                      key={`page-${pageObj.globalPageNum}`}
                      data-page-num={pageObj.globalPageNum}
                      className="book-reading-area border border-border/80 rounded-[32px] p-8 sm:p-14 relative overflow-hidden shadow-xl"
                    >
                      {pageObj.isFirstPageOfChapter ? (
                        <div className="mb-10 pb-6 border-b border-gray-200 flex items-center justify-between flex-wrap gap-4">
                          <div>
                            <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
                              Chapter {activeChapter.chapterNumber || activeIndex + 1}
                            </span>
                            <h2 className="text-3xl font-extrabold text-black mt-2">
                              {activeChapter.title}
                            </h2>
                          </div>
                        </div>
                      ) : (
                        <div className="mb-6 pb-4 border-b border-gray-100 flex items-center justify-between">
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                            Chapter {activeChapter.chapterNumber || activeIndex + 1} &bull; Page {pageObj.pageInChIdx + 1}
                          </span>
                          <span className="text-xs font-extrabold text-amber-600">
                            Page {pageObj.globalPageNum} of {allPages.length}
                          </span>
                        </div>
                      )}

                      <div className="prose prose-lg mx-auto max-w-none">
                        <BlogPostContent content={pageObj.pageContent} />
                      </div>
                      
                      {/* Action buttons on last page of chapter */}
                      {pageObj.isLastPageOfChapter && (
                        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                          {activeIndex > 0 && (
                            <button
                              onClick={() => handleSelectChapter(chapters[activeIndex - 1].id)}
                              className="w-full sm:w-auto px-6 py-4 rounded-2xl text-sm font-bold border-2 border-gray-200 text-gray-700 hover:border-amber-500 hover:text-amber-600 transition-all text-center cursor-pointer"
                            >
                              ← Previous Chapter
                            </button>
                          )}
                          <div className="flex-1"></div>
                          <button
                            onClick={() => {
                              if (!isCurrentCompleted) handleToggleChapter();
                              if (activeIndex < chapters.length - 1) handleSelectChapter(chapters[activeIndex + 1].id);
                            }}
                            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-bold bg-amber-500 text-white shadow-xl shadow-amber-500/20 hover:bg-amber-600 active:scale-95 transition-all text-center cursor-pointer"
                          >
                            {activeIndex < chapters.length - 1 ? 'Next Chapter →' : 'Finish Book 🎉'}
                          </button>
                        </div>
                      )}
                    </article>
                  ))}
              </div>
            )
          ) : (
            /* Continuous Scroll Mode across ALL pages in the entire book */
            <div className="space-y-12">
              {allPages.map((pageObj) => (
                <article
                  key={`page-${pageObj.globalPageNum}`}
                  data-page-num={pageObj.globalPageNum}
                  data-chapter-id={pageObj.isFirstPageOfChapter ? pageObj.chapterId : undefined}
                  className="book-reading-area border border-border/80 rounded-[32px] p-8 sm:p-14 relative scroll-mt-[150px] shadow-xl"
                >
                  {pageObj.isFirstPageOfChapter ? (
                    <div className="mb-10 pb-6 border-b border-gray-200 flex items-center justify-between">
                      <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
                        Chapter {pageObj.chapterNumber}: {pageObj.chapterTitle}
                      </span>
                      <span className="text-xs font-bold text-gray-400">
                        Page {pageObj.globalPageNum} of {allPages.length}
                      </span>
                    </div>
                  ) : (
                    <div className="mb-6 pb-4 border-b border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Chapter {pageObj.chapterNumber}: {pageObj.chapterTitle} &bull; Page {pageObj.pageInChIdx + 1}
                      </span>
                      <span className="text-xs font-bold text-gray-400">
                        Page {pageObj.globalPageNum} of {allPages.length}
                      </span>
                    </div>
                  )}

                  <div className="prose prose-lg mx-auto max-w-none">
                    <BlogPostContent content={pageObj.pageContent} />
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>

        {/* Hidden Container exclusively for window.print() and Paged.js logic */}
        <div className="print-only book-reading-area">
          <div className="text-center py-32 border-b-2 border-black page-break">
            <h1 className="text-5xl font-black text-black mb-6">{course.title}</h1>
            <p className="text-2xl text-gray-800 mb-12 max-w-2xl mx-auto">{course.description}</p>
            <p className="text-lg text-gray-500 font-bold uppercase tracking-widest">Author: {course.author || 'Tarik Azzouzi'}</p>
          </div>

          {chapters.map((ch, idx) => (
            <div key={ch.id} className="book-page-break pt-12">
              <h2 className="text-4xl font-black text-black border-b-2 border-gray-200 pb-4 mb-10">
                Chapter {idx + 1}: {ch.title}
              </h2>
              <div className="prose prose-lg mx-auto max-w-none">
                <BlogPostContent content={ch.content} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
