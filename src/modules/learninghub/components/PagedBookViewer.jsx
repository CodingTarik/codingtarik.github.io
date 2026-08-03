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
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem('learninghub_book_view_mode') || 'chapter';
  });

  const handleSetViewMode = (mode) => {
    setViewMode(mode);
    try {
      localStorage.setItem('learninghub_book_view_mode', mode);
    } catch (err) {
      console.warn('Could not save viewMode preference', err);
    }
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [jumpPageInput, setJumpPageInput] = useState('');
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(200, prev + 10));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(50, prev - 10));
  const handleZoomReset = () => setZoomLevel(100);

  // Butter-smooth zoom via Ctrl + Mouse Wheel or Trackpad pinch gesture
  useEffect(() => {
    let animFrame = null;

    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();

        if (animFrame) cancelAnimationFrame(animFrame);

        animFrame = requestAnimationFrame(() => {
          const zoomDelta = -e.deltaY * 0.15;
          setZoomLevel((prev) => {
            const next = Math.round(Math.min(200, Math.max(50, prev + zoomDelta)));
            return next;
          });
        });
      }
    };

    const mainEl = document.getElementById('paged-book-main');
    if (mainEl) {
      mainEl.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        mainEl.removeEventListener('wheel', handleWheel);
        if (animFrame) cancelAnimationFrame(animFrame);
      };
    }
  }, []);

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

  // Scrollspy for page-level reading position (works in both Chapter and Continuous mode)
  useEffect(() => {
    const handleScroll = () => {
      const pageElements = document.querySelectorAll('[data-page-num]');
      if (!pageElements.length) return;

      let closestPage = null;
      let minDistance = Infinity;

      pageElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Calculate distance from top of viewport (accounting for header offset)
        const distance = Math.abs(rect.top - 120);
        if (rect.top <= window.innerHeight * 0.7 && rect.bottom >= 100) {
          if (distance < minDistance) {
            minDistance = distance;
            closestPage = el;
          }
        }
      });

      if (closestPage) {
        const pNum = parseInt(closestPage.getAttribute('data-page-num'), 10);
        const chId = closestPage.getAttribute('data-chapter-id');
        if (pNum && !isNaN(pNum)) {
          setActivePageNum((prev) => (prev !== pNum ? pNum : prev));
        }
        if (chId) {
          setActiveChapterId((prev) => (prev !== chId ? chId : prev));
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode, allPages]);

  const handlePrintPdf = () => {
    // Inject a powerful overriding style that forces the browser to print ALL colors
    const printStyle = document.createElement('style');
    printStyle.id = 'force-print-colors';
    printStyle.innerHTML = `
      @media print {
        *, *::before, *::after {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
        /* Force every element's background to be visible */
        [style*="background"] {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        [style*="color"] {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        svg, svg * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          shape-rendering: geometricPrecision;
        }
      }
    `;
    document.head.appendChild(printStyle);
    
    // Small delay to let the style settle, then print
    setTimeout(() => {
      window.print();
      // Clean up after print dialog closes
      setTimeout(() => {
        const el = document.getElementById('force-print-colors');
        if (el) el.remove();
      }, 2000);
    }, 100);
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
            justify-content: flex-start;
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
            background-color: #ffffff !important;
          }
          html, body {
            background-color: #ffffff !important;
            color: #111827 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .no-print {
            display: none !important;
          }

          /* Force exact A4 sheet containers */
          .print-page {
            box-sizing: border-box !important;
            width: 210mm !important;
            height: 297mm !important;
            min-height: 297mm !important;
            padding: 20mm !important;
            background-color: #ffffff !important;
            color: #111827 !important;
            page-break-after: always !important;
            break-after: page !important;
            position: relative !important;
            overflow: hidden !important;
          }

          .print-page.is-cover {
            padding: 0 !important;
            margin: 0 !important;
            background: transparent !important;
          }

          .print-page.is-cover .cover-page {
            min-height: 297mm !important;
            height: 297mm !important;
          }

          .print-page .prose {
            color: #111827 !important;
            max-width: 100% !important;
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
          
          @page {
            size: ${course.pagedOptions?.pageSize || 'A4'};
            margin: 0 !important;
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
          setViewMode={handleSetViewMode}
          isBook={true}
          zoomLevel={zoomLevel}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onZoomReset={handleZoomReset}
        />

        {/* Main Book Content Container (Forced White Background for Paged.js aesthetics) */}
        <main
          id="paged-book-main"
          className="flex-1 p-4 sm:p-10 max-w-4xl mx-auto w-full no-print transition-transform duration-150 ease-out"
          style={{
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'top center'
          }}
        >
          
          {/* Reading Mode Renderer */}
          {viewMode === 'chapter' ? (
            /* Chapter-by-Chapter Mode */
            activeChapter && (
              <div className="space-y-12">
                {allPages
                  .filter((p) => p.chapterId === activeChapter.id)
                  .map((pageObj) => {
                    const isCover = pageObj.globalPageNum === 1 || pageObj.pageContent.includes('cover-page') || pageObj.pageContent.includes('full-bleed');
                    const noHeader = isCover || pageObj.pageContent.includes('no-header');

                    return (
                      <article
                        key={`page-${pageObj.globalPageNum}`}
                        data-page-num={pageObj.globalPageNum}
                        className={`book-reading-area border border-border/80 rounded-[32px] relative overflow-hidden shadow-xl ${
                          isCover ? 'p-0' : 'p-8 sm:p-14'
                        }`}
                      >
                        {!noHeader && (
                          (pageObj.isFirstPageOfChapter || (pageObj.globalPageNum === 2 && pageObj.chapterIndex === 0)) ? (
                            <div className="mb-10 pb-6 border-b border-gray-200 flex items-center justify-between flex-wrap gap-4">
                              <div>
                                <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
                                  Chapter {activeChapter.chapterNumber || activeIndex + 1}
                                </span>
                                <h2 className="text-3xl font-extrabold text-black mt-2">
                                  {activeChapter.title}
                                </h2>
                              </div>
                              <span className="text-xs font-extrabold text-amber-600">
                                Page {pageObj.globalPageNum} of {allPages.length}
                              </span>
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
                          )
                        )}

                        <div className="prose prose-lg mx-auto max-w-none w-full h-full">
                          <BlogPostContent content={pageObj.pageContent} />
                        </div>
                      </article>
                    );
                  })}

                {/* Navigation Buttons placed cleanly BELOW the A4 book page cards */}
                <div className="mt-10 pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto w-full">
                  {activeIndex > 0 && (
                    <button
                      onClick={() => handleSelectChapter(chapters[activeIndex - 1].id)}
                      className="flex-1 w-full px-8 py-4 rounded-2xl text-base font-bold bg-card border border-border text-text hover:border-amber-500 hover:text-amber-500 transition-all text-center cursor-pointer shadow-md active:scale-95"
                    >
                      ← Previous Chapter
                    </button>
                  )}
                  <button
                    onClick={() => {
                      if (!isCurrentCompleted) handleToggleChapter();
                      if (activeIndex < chapters.length - 1) handleSelectChapter(chapters[activeIndex + 1].id);
                    }}
                    className="flex-1 w-full px-8 py-4 rounded-2xl text-base font-bold bg-amber-500 text-white shadow-xl shadow-amber-500/25 hover:bg-amber-600 active:scale-95 transition-all text-center cursor-pointer"
                  >
                    {activeIndex < chapters.length - 1 ? 'Next Chapter →' : 'Finish Book 🎉'}
                  </button>
                </div>
              </div>
            )
          ) : (
            /* Continuous Scroll Mode across ALL pages in the entire book */
            <div className="space-y-12">
              {allPages.map((pageObj) => {
                const isCover = pageObj.globalPageNum === 1 || pageObj.pageContent.includes('cover-page') || pageObj.pageContent.includes('full-bleed');
                const noHeader = isCover || pageObj.pageContent.includes('no-header');

                return (
                  <article
                    key={`page-${pageObj.globalPageNum}`}
                    data-page-num={pageObj.globalPageNum}
                    data-chapter-id={pageObj.isFirstPageOfChapter ? pageObj.chapterId : undefined}
                    className={`book-reading-area border border-border/80 rounded-[32px] relative scroll-mt-[150px] shadow-xl ${
                      isCover ? 'p-0' : 'p-8 sm:p-14'
                    }`}
                  >
                    {!noHeader && (
                      pageObj.isFirstPageOfChapter ? (
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
                      )
                    )}

                    <div className="prose prose-lg mx-auto max-w-none w-full h-full">
                      <BlogPostContent content={pageObj.pageContent} />
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </main>

        {/* Hidden Container exclusively for window.print() and Paged.js logic */}
        <div className="print-only">
          {allPages.map((pageObj) => {
            const isCover = pageObj.globalPageNum === 1 || pageObj.pageContent.includes('cover-page') || pageObj.pageContent.includes('full-bleed');
            const showHeader = !isCover && !pageObj.pageContent.includes('no-header') && (
              pageObj.isFirstPageOfChapter || (pageObj.globalPageNum === 2 && pageObj.chapterIndex === 0)
            );

            return (
              <div
                key={`print-page-${pageObj.globalPageNum}`}
                className={`print-page ${isCover ? 'is-cover' : ''}`}
              >
                {showHeader && (
                  <div className="mb-8 pb-4 border-b border-gray-200 flex items-center justify-between">
                    <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
                      Chapter {pageObj.chapterNumber}: {pageObj.chapterTitle}
                    </span>
                    <span className="text-xs font-bold text-gray-400">
                      Page {pageObj.globalPageNum} of {allPages.length}
                    </span>
                  </div>
                )}
                <div className="prose prose-lg mx-auto max-w-none w-full h-full">
                  <BlogPostContent content={pageObj.pageContent} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
