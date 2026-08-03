import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import BlogPostContent from '../../blog/components/BlogPostContent';
import CourseHeaderBar from './CourseHeaderBar';
import CourseSidebar from './CourseSidebar';
import FloatingReaderControls from './FloatingReaderControls';
import { playSuccessSound } from '../utils/soundUtils';

export default function CourseViewer({
  course,
  activeLessonId,
  onSelectLesson,
  onBackToOverview,
  isLessonCompleted,
  toggleLessonCompleted,
  getCourseStats,
  resetCourseProgress
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [jumpPageInput, setJumpPageInput] = useState('');
  const [readingProgress, setReadingProgress] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(100);

  const lessons = course.lessons || [];
  const activeIndex = lessons.findIndex((l) => l.id === activeLessonId);
  const currentLesson = lessons[activeIndex >= 0 ? activeIndex : 0] || lessons[0];

  const stats = getCourseStats(course.id);
  const isCurrentCompleted = currentLesson ? isLessonCompleted(course.id, currentLesson.id) : false;

  // Scroll to top on lesson change & reset reading progress
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setReadingProgress(0);
  }, [currentLesson?.id]);

  // Track reading scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) { setReadingProgress(100); return; }
      setReadingProgress(Math.min(100, Math.round((scrollTop / docHeight) * 100)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentLesson?.id]);

  // Smooth zoom via Ctrl + Mouse Wheel (same as book viewer)
  useEffect(() => {
    let animFrame = null;
    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        if (animFrame) cancelAnimationFrame(animFrame);
        animFrame = requestAnimationFrame(() => {
          const delta = -e.deltaY * 0.15;
          setZoomLevel((prev) => Math.round(Math.min(200, Math.max(50, prev + delta))));
        });
      }
    };
    const el = document.getElementById('series-reader-main');
    if (el) {
      el.addEventListener('wheel', handleWheel, { passive: false });
      return () => { el.removeEventListener('wheel', handleWheel); if (animFrame) cancelAnimationFrame(animFrame); };
    }
  }, [currentLesson?.id]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
      if (e.key === 'ArrowRight' && activeIndex < lessons.length - 1) {
        onSelectLesson(lessons[activeIndex + 1].id);
      } else if (e.key === 'ArrowLeft' && activeIndex > 0) {
        onSelectLesson(lessons[activeIndex - 1].id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, lessons, onSelectLesson]);

  if (!currentLesson) {
    return (
      <div className="p-12 text-center text-muted">
        <p>Lesson not found.</p>
        <button onClick={onBackToOverview} className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-xl text-xs font-bold cursor-pointer">
          Back to overview
        </button>
      </div>
    );
  }

  // Sound + confetti helper — used by both header button and sidebar checkbox
  const triggerCompletionFeedback = (lessonId, nowCompleted) => {
    if (!nowCompleted) return;
    playSuccessSound();
    const completedAfter = (stats.completedCount || 0) + 1;
    if (completedAfter >= lessons.length) {
      confetti({ particleCount: 160, spread: 90, origin: { y: 0.55 }, colors: ['#f59e0b','#fbbf24','#6366f1','#10b981'] });
    } else {
      confetti({ particleCount: 55, spread: 55, origin: { y: 0.75 }, colors: ['#f59e0b','#6366f1'] });
    }
  };

  const handleToggleComplete = () => {
    const nextCompleted = !isCurrentCompleted;
    toggleLessonCompleted(course.id, currentLesson.id);
    triggerCompletionFeedback(currentLesson.id, nextCompleted);
  };

  // Sidebar checkbox toggle — wraps raw toggle with feedback
  const handleSidebarToggle = (courseId, lessonId) => {
    const isCurrentlyDone = isLessonCompleted(courseId, lessonId);
    toggleLessonCompleted(courseId, lessonId);
    triggerCompletionFeedback(lessonId, !isCurrentlyDone);
  };

  const handleNextLesson = () => {
    if (!isCurrentCompleted) handleToggleComplete();
    if (activeIndex < lessons.length - 1) onSelectLesson(lessons[activeIndex + 1].id);
  };

  const handlePrevLesson = () => {
    if (activeIndex > 0) onSelectLesson(lessons[activeIndex - 1].id);
  };

  const handleJumpSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(jumpPageInput.trim(), 10);
    if (!isNaN(num) && num >= 1 && num <= lessons.length) {
      const target = lessons[num - 1];
      if (target) { onSelectLesson(target.id); setJumpPageInput(''); }
    }
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(200, prev + 10));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(50, prev - 10));
  const handleZoomReset = () => setZoomLevel(100);

  return (
    <div className="min-h-screen bg-background text-text flex relative">
      {/* Global reading progress bar */}
      <div className="lh-reading-progress-bar" style={{ width: `${readingProgress}%` }} />

      {/* Ambient orbs */}
      <div className="fixed top-16 left-1/3 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-16 right-1/4 w-[350px] h-[350px] bg-amber-500/8 rounded-full blur-[100px] pointer-events-none -z-10" />

      <CourseSidebar
        course={course}
        items={lessons}
        activeItemId={currentLesson?.id}
        onSelectItem={onSelectLesson}
        isItemCompleted={isLessonCompleted}
        onToggleItemComplete={handleSidebarToggle}
        stats={stats}
        onBackToOverview={onBackToOverview}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onResetProgress={resetCourseProgress}
      />

      <div className="lg:ml-72 flex-1 flex flex-col min-w-0 relative">
        <CourseHeaderBar
          course={course}
          activeItem={currentLesson}
          currentIndex={activeIndex}
          totalCount={lessons.length}
          isCompleted={isCurrentCompleted}
          onToggleComplete={handleToggleComplete}
          onBackToOverview={onBackToOverview}
          onToggleSidebar={() => setIsSidebarOpen(true)}
        />

        <FloatingReaderControls
          currentIndex={activeIndex}
          totalCount={lessons.length}
          jumpInput={jumpPageInput}
          setJumpInput={setJumpPageInput}
          onJumpSubmit={handleJumpSubmit}
          isBook={false}
          zoomLevel={zoomLevel}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onZoomReset={handleZoomReset}
          onPrev={handlePrevLesson}
          onNext={handleNextLesson}
        />

        {/* Main content with zoom */}
        <main
          id="series-reader-main"
          className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-10 py-10 space-y-8 transition-transform duration-150 ease-out"
          style={{
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'top center'
          }}
        >
          {/* Lesson Hero */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`lesson-hero-${currentLesson.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              {/* Meta badges */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <span
                  className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-indigo-400"
                  style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
                >
                  Lesson {activeIndex + 1} of {lessons.length}
                </span>

                {currentLesson.duration && (
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted px-3 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <Clock size={11} className="text-indigo-400" />
                    {currentLesson.duration}
                  </span>
                )}

                {isCurrentCompleted && (
                  <span
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 px-3 py-1 rounded-full"
                    style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}
                  >
                    <CheckCircle2 size={11} />
                    Read
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-black text-text leading-tight tracking-tight">
                {currentLesson.title.replace(/^(Lektion|Kapitel|Lesson|Chapter) \d+:\s*/i, '')}
              </h2>

              {/* Description */}
              {currentLesson.description && (
                <p className="text-base text-muted font-medium leading-relaxed max-w-3xl">
                  {currentLesson.description}
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Article reading area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`lesson-content-${currentLesson.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[28px] overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.2)'
              }}
            >
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="p-6 sm:p-12">
                <div className="prose prose-lg dark:prose-invert mx-auto max-w-none">
                  <BlogPostContent content={currentLesson.content} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="pt-2 flex items-center gap-3 max-w-3xl mx-auto w-full">
            {activeIndex > 0 ? (
              <motion.button
                whileHover={{ scale: 1.02, x: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onSelectLesson(lessons[activeIndex - 1].id)}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold text-muted cursor-pointer transition-colors"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
              >
                <ChevronLeft size={16} />
                <span className="hidden sm:inline">Previous</span>
              </motion.button>
            ) : <div />}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleNextLesson}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-extrabold text-white cursor-pointer transition-all"
              style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', boxShadow: '0 8px 24px rgba(99,102,241,0.35)' }}
            >
              <span>
                {activeIndex < lessons.length - 1 ? 'Next Lesson' : 'Complete Course 🎉'}
              </span>
              <ChevronRight size={16} />
            </motion.button>
          </div>

        </main>
      </div>
    </div>
  );
}
