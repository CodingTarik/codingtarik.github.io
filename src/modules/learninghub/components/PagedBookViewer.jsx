import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, Circle, Printer, Info, Bookmark 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import BlogPostContent from '../../blog/components/BlogPostContent';
import CourseHeaderBar from './CourseHeaderBar';
import CourseSidebar from './CourseSidebar';
import FloatingReaderControls from './FloatingReaderControls';
import BookSearchModal from './BookSearchModal';
import PageMinimap from './PageMinimap';
import ReaderSettingsModal from './ReaderSettingsModal';
import BookTOCModal from './BookTOCModal';
import { playSuccessSound } from '../utils/soundUtils';

export default function PagedBookViewer({
  course,
  onBackToOverview,
  isLessonCompleted,
  toggleLessonCompleted,
  getCourseStats,
  resetCourseProgress
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

  // Modals & Reader Settings
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isTocOpen, setIsTocOpen] = useState(false);

  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem(`learninghub_bookmarks_${course.id}`);
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      return [];
    }
  });

  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('learninghub_reader_settings');
      return saved ? JSON.parse(saved) : {
        theme: 'white',
        paperTexture: true,
        meshGlow: true,
        transition: 'slide',
        pageNumberVariant: 'inline',
        pageNumberOffset: 24,
        showPageNumbers: true
      };
    } catch (err) {
      return {
        theme: 'white',
        paperTexture: true,
        meshGlow: true,
        transition: 'slide',
        pageNumberVariant: 'inline',
        pageNumberOffset: 24,
        showPageNumbers: true
      };
    }
  });

  const handleUpdateSettings = (newPartial) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newPartial };
      try {
        localStorage.setItem('learninghub_reader_settings', JSON.stringify(updated));
      } catch (err) {}
      return updated;
    });
  };

  const handleToggleBookmark = (pageNum) => {
    setBookmarks((prev) => {
      const next = prev.includes(pageNum)
        ? prev.filter((p) => p !== pageNum)
        : [...prev, pageNum];
      try {
        localStorage.setItem(`learninghub_bookmarks_${course.id}`, JSON.stringify(next));
      } catch (err) {}
      return next;
    });
  };

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

  // Cmd + K / Ctrl + K global search keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
          chapterTitle: ch.title,
          chapterNumber: ch.chapterNumber || chIdx + 1,
          chapterIndex: chIdx,
          pageInChIdx,
          totalInCh: rawPages.length,
          isFirstPageOfChapter: pageInChIdx === 0,
          isLastPageOfChapter: pageInChIdx === rawPages.length - 1,
          pageContent
        });
        globalPageNum++;
      });
    });

    return pageList;
  }, [chapters]);

  const activeIndex = chapters.findIndex((c) => c.id === activeChapterId);
  const activeChapter = chapters[activeIndex] || chapters[0];
  const stats = getCourseStats ? getCourseStats(course.id) : null;
  const isCurrentCompleted = isLessonCompleted ? isLessonCompleted(course.id, activeChapter?.id) : false;

  // Jump to a specific chapter
  const handleSelectChapter = (id) => {
    setActiveChapterId(id);
    const firstPageOfCh = allPages.find((p) => p.chapterId === id);
    if (firstPageOfCh) {
      setActivePageNum(firstPageOfCh.globalPageNum);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Jump directly to a page number
  const handleJumpToPageNum = (pageNum) => {
    const targetPage = allPages.find((p) => p.globalPageNum === pageNum);
    if (targetPage) {
      setActivePageNum(targetPage.globalPageNum);
      if (targetPage.chapterId !== activeChapterId) {
        setActiveChapterId(targetPage.chapterId);
      }
      if (viewMode === 'continuous') {
        const targetEl = document.querySelector(`[data-page-num="${targetPage.globalPageNum}"]`);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleJumpSubmit = (e) => {
    e.preventDefault();
    const pageNum = parseInt(jumpPageInput, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= allPages.length) {
      handleJumpToPageNum(pageNum);
      setJumpPageInput('');
    }
  };

  const handleToggleChapter = () => {
    if (!activeChapter) return;
    const wasCompleted = isCurrentCompleted;
    toggleLessonCompleted(course.id, activeChapter.id);

    if (!wasCompleted) {
      playSuccessSound();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handlePrintPdf = () => {
    window.print();
  };

  // Scrollspy to track active page number dynamically while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const pageElements = document.querySelectorAll('[data-page-num]');
      let currentActivePage = 1;
      let minDistance = Infinity;

      pageElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - 120);
        if (distance < minDistance) {
          minDistance = distance;
          currentActivePage = parseInt(el.getAttribute('data-page-num'), 10);
        }
      });

      if (currentActivePage && currentActivePage !== activePageNum) {
        setActivePageNum(currentActivePage);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePageNum]);

  // Page Transition variants
  const transitionVariants = {
    slide: {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -40 }
    },
    flip: {
      initial: { opacity: 0, rotateY: 90 },
      animate: { opacity: 1, rotateY: 0 },
      exit: { opacity: 0, rotateY: -90 }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    }
  };

  const currentVariant = transitionVariants[settings.transition] || transitionVariants.slide;

  // Bleeding page-number badge: sits outside the "proper zone" of the page
  const renderPageBadge = (pageObj) => {
    if (settings.showPageNumbers === false) return null;
    if (settings.pageNumberVariant !== 'bleed' || pageObj.isCover) return null;

    const offset = settings.pageNumberOffset ?? 24;
    return (
      <div
        className="no-print pointer-events-none absolute z-20 flex items-center gap-1 px-3 py-1.5 rounded-xl border font-mono font-bold tabular-nums"
        style={{
          right: -Math.max(0, offset * 0.5),
          top: 34,
          background: '#052e16',
          borderColor: '#14532d',
          color: '#4ade80',
          boxShadow: '4px 4px 0 rgba(34,197,94,0.25)',
          transform: `rotate(${offset > 30 ? -3 : offset < 0 ? 3 : 0}deg) translateX(${offset}px)`,
          transformOrigin: 'left top'
        }}
        data-page-badge={pageObj.globalPageNum}
      >
        <span className="text-[10px] text-emerald-200/70">P.</span>
        <span className="text-lg leading-none">{pageObj.globalPageNum}</span>
        <span className="text-[10px] text-emerald-200/50">/ {allPages.length}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-text flex">
      {/* Paged.js Print & Book Styles */}
      <style>{`
        *, *::before, *::after {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }

        .book-reading-area {
          background-color: #ffffff;
          color: #111827;
        }

        .book-reading-area .prose {
          --tw-prose-body: #111827;
          --tw-prose-headings: #111827;
          --tw-prose-lead: #374151;
          --tw-prose-links: #2563eb;
          --tw-prose-bold: #111827;
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
        onResetProgress={resetCourseProgress}
        allPages={allPages}
        activePageNum={activePageNum}
        onSelectPage={handleJumpToPageNum}
        bookmarks={bookmarks}
        onToggleBookmark={handleToggleBookmark}
      />

      {/* Main Reader Content Area */}
      <div className="lg:ml-72 flex-1 flex flex-col min-w-0 relative">
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


        {/* Floating sticky right control bar tracking PAGES */}
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
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onOpenToc={() => setIsTocOpen(true)}
        />

        {/* Main Book Content Container */}
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
            activeChapter && (
              <div className="space-y-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`chapter-container-${activeChapter.id}`}
                    initial={currentVariant.initial}
                    animate={currentVariant.animate}
                    exit={currentVariant.exit}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="space-y-12"
                  >
                    {allPages
                      .filter((p) => p.chapterId === activeChapter.id)
                      .map((pageObj) => {
                        const isCover = pageObj.globalPageNum === 1 || pageObj.pageContent.includes('cover-page') || pageObj.pageContent.includes('full-bleed');
                        const noHeader = isCover || pageObj.pageContent.includes('no-header');
                        const isBookmarked = bookmarks.includes(pageObj.globalPageNum);

                        return (
                          <article
                            key={`page-${pageObj.globalPageNum}`}
                            data-page-num={pageObj.globalPageNum}
                            className={`book-reading-area border border-border/80 rounded-[32px] relative overflow-hidden shadow-xl ${
                              settings.paperTexture ? 'paper-texture' : ''
                            } ${
                              settings.theme === 'sepia' ? 'theme-sepia' : settings.theme === 'dark' ? 'theme-dark' : ''
                            } ${isCover ? 'p-0' : 'p-8 sm:p-14'}`}
                          >
                            {/* Bookmark Ribbon Button */}
                            {!isCover && (
                              <button
                                onClick={() => handleToggleBookmark(pageObj.globalPageNum)}
                                className={`absolute top-6 right-6 p-2 rounded-full transition-all cursor-pointer z-10 ${
                                  isBookmarked
                                    ? 'text-amber-500 bg-amber-500/10 fill-amber-500 scale-110 shadow-sm'
                                    : 'text-muted/40 hover:text-amber-500 hover:bg-border/40'
                                }`}
                                title={isBookmarked ? 'Bookmarked page' : 'Bookmark this page'}
                              >
                                <Bookmark size={18} fill={isBookmarked ? 'currentColor' : 'none'} />
                              </button>
                            )}

                            {renderPageBadge(pageObj)}

                            {!noHeader && (
                              (pageObj.isFirstPageOfChapter || (pageObj.globalPageNum === 2 && pageObj.chapterIndex === 0)) ? (
                                <div className="mb-10 pb-6 border-b border-gray-200 flex items-center justify-between flex-wrap gap-4 pr-10">
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
                                <div className="mb-6 pb-4 border-b border-gray-100 flex items-center justify-between pr-10">
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
                  </motion.div>
                </AnimatePresence>

                {/* Chapter Navigation Buttons */}
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
                const isBookmarked = bookmarks.includes(pageObj.globalPageNum);

                return (
                  <article
                    key={`page-${pageObj.globalPageNum}`}
                    data-page-num={pageObj.globalPageNum}
                    data-chapter-id={pageObj.isFirstPageOfChapter ? pageObj.chapterId : undefined}
                    className={`book-reading-area border border-border/80 rounded-[32px] relative scroll-mt-[150px] shadow-xl ${
                      settings.paperTexture ? 'paper-texture' : ''
                    } ${
                      settings.theme === 'sepia' ? 'theme-sepia' : settings.theme === 'dark' ? 'theme-dark' : ''
                    } ${isCover ? 'p-0' : 'p-8 sm:p-14'}`}
                  >
                    {/* Bookmark Ribbon Button */}
                        {!isCover && (
                          <button
                            onClick={() => handleToggleBookmark(pageObj.globalPageNum)}
                            className={`absolute top-6 right-6 p-2 rounded-full transition-all cursor-pointer z-10 ${
                              isBookmarked
                                ? 'text-amber-500 bg-amber-500/10 fill-amber-500 scale-110 shadow-sm'
                                : 'text-muted/40 hover:text-amber-500 hover:bg-border/40'
                            }`}
                            title={isBookmarked ? 'Bookmarked page' : 'Bookmark this page'}
                          >
                            <Bookmark size={18} fill={isBookmarked ? 'currentColor' : 'none'} />
                          </button>
                        )}

                        {renderPageBadge(pageObj)}

                        {!noHeader && (
                      pageObj.isFirstPageOfChapter ? (
                        <div className="mb-10 pb-6 border-b border-gray-200 flex items-center justify-between pr-10">
                          <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
                            Chapter {pageObj.chapterNumber}: {pageObj.chapterTitle}
                          </span>
                          <span className="text-xs font-bold text-gray-400">
                            Page {pageObj.globalPageNum} of {allPages.length}
                          </span>
                        </div>
                      ) : (
                        <div className="mb-6 pb-4 border-b border-gray-100 flex items-center justify-between pr-10">
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

        {/* Global Search Modal */}
        <BookSearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          allPages={allPages}
          onJumpToPage={handleJumpToPageNum}
        />

        {/* Auto Table of Contents Modal */}
        <BookTOCModal
          isOpen={isTocOpen}
          onClose={() => setIsTocOpen(false)}
          chapters={chapters}
          allPages={allPages}
          onJumpToChapter={(id) => handleSelectChapter(id)}
          onJumpToPage={(pg) => handleJumpToPageNum(pg)}
        />

        {/* Reader Settings Modal */}
        <ReaderSettingsModal
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
          settings={settings}
          onUpdateSettings={handleUpdateSettings}
        />

      </div>

      {/* Hidden Print Container for PDF Export */}
      <div className="print-only">
        {allPages.map((pageObj) => {
          const isCover = pageObj.globalPageNum === 1 || pageObj.pageContent.includes('cover-page') || pageObj.pageContent.includes('full-bleed');
          const noHeader = isCover || pageObj.pageContent.includes('no-header');

          return (
            <div
              key={`print-page-${pageObj.globalPageNum}`}
              className={`print-page ${isCover ? 'is-cover' : ''}`}
            >
              {!noHeader && (
                (pageObj.isFirstPageOfChapter || (pageObj.globalPageNum === 2 && pageObj.chapterIndex === 0)) ? (
                  <div className="mb-8 pb-4 border-b border-gray-200 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Chapter {pageObj.chapterNumber}: {pageObj.chapterTitle}
                    </span>
                    <span className="text-xs font-bold text-gray-500">
                      Page {pageObj.globalPageNum} of {allPages.length}
                    </span>
                  </div>
                ) : (
                  <div className="mb-6 pb-3 border-b border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Chapter {pageObj.chapterNumber}: {pageObj.chapterTitle} &bull; Page {pageObj.pageInChIdx + 1}
                    </span>
                    <span className="text-xs font-medium text-gray-400">
                      Page {pageObj.globalPageNum} of {allPages.length}
                    </span>
                  </div>
                )
              )}

              <div className="prose prose-lg mx-auto max-w-none w-full h-full">
                <BlogPostContent content={pageObj.pageContent} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
