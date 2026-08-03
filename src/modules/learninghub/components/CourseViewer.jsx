import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, ChevronLeft, Clock, CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import BlogPostContent from '../../blog/components/BlogPostContent';
import CourseHeaderBar from './CourseHeaderBar';
import CourseSidebar from './CourseSidebar';

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
  const lessons = course.lessons || [];

  const activeIndex = lessons.findIndex((l) => l.id === activeLessonId);
  const currentLesson = lessons[activeIndex >= 0 ? activeIndex : 0] || lessons[0];

  const stats = getCourseStats(course);
  const isCurrentCompleted = currentLesson ? isLessonCompleted(course.id, currentLesson.id) : false;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentLesson?.id]);

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
        <button onClick={onBackToOverview} className="mt-4 px-4 py-2 bg-primary text-white rounded-xl text-xs font-bold">
          Back to Overview
        </button>
      </div>
    );
  }

  const handleToggleComplete = () => {
    const nextCompleted = !isCurrentCompleted;
    toggleLessonCompleted(course.id, currentLesson.id);

    if (nextCompleted && (activeIndex === lessons.length - 1 || stats.completedCount + 1 >= lessons.length)) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleNextLesson = () => {
    if (!isCurrentCompleted) {
      toggleLessonCompleted(course.id, currentLesson.id);
    }
    if (activeIndex < lessons.length - 1) {
      onSelectLesson(lessons[activeIndex + 1].id);
    } else {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handlePrevLesson = () => {
    if (activeIndex > 0) {
      onSelectLesson(lessons[activeIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-background text-text flex">
      {/* Shared Fixed Course Sidebar */}
      <CourseSidebar
        course={course}
        items={lessons}
        activeItemId={currentLesson?.id}
        onSelectItem={onSelectLesson}
        isItemCompleted={isLessonCompleted}
        onToggleItemComplete={toggleLessonCompleted}
        stats={stats}
        onBackToOverview={onBackToOverview}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onResetProgress={resetCourseProgress}
      />

      {/* Main Reader Content Area (Offset by lg:ml-80) */}
      <div className="lg:ml-80 flex-1 flex flex-col min-w-0">
        {/* Shared Header Bar */}
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

        {/* Lesson Body Content */}
        <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-10">
          {/* Lesson Hero Header Banner */}
          <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-card to-card border border-border/80 shadow-sm relative overflow-hidden">
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-primary text-white text-[11px] font-extrabold uppercase tracking-wider">
                    Lesson {activeIndex + 1}
                  </span>
                  {currentLesson.duration && (
                    <span className="inline-flex items-center gap-1 text-xs text-muted bg-border/40 px-3 py-1 rounded-full font-medium">
                      <Clock size={13} />
                      <span>{currentLesson.duration}</span>
                    </span>
                  )}
                </div>

                <h2 className="text-xl sm:text-3xl font-extrabold text-text leading-snug">
                  {currentLesson.title}
                </h2>

                {currentLesson.description && (
                  <p className="text-sm text-muted mt-2 leading-relaxed">
                    {currentLesson.description}
                  </p>
                )}
              </div>

              <div className="shrink-0">
                <button
                  onClick={handleToggleComplete}
                  className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                    isCurrentCompleted
                      ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                      : 'bg-card border border-border text-text hover:border-primary hover:text-primary'
                  }`}
                >
                  <CheckCircle2 size={16} />
                  <span>{isCurrentCompleted ? 'Completed' : 'Mark as Complete'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Render Lesson Content */}
          <BlogPostContent content={currentLesson.content} />

          {/* Bottom Navigation Controls */}
          <div className="mt-14 pt-8 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handlePrevLesson}
              disabled={activeIndex === 0}
              className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeIndex === 0
                  ? 'opacity-40 cursor-not-allowed bg-card border border-border text-muted'
                  : 'bg-card border border-border text-text hover:border-primary hover:text-primary shadow-sm'
              }`}
            >
              <ChevronLeft size={16} />
              <span>Previous Lesson</span>
            </button>

            <button
              onClick={handleNextLesson}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl text-xs font-bold bg-gradient-to-r from-primary via-secondary to-primary text-white hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-primary/25"
            >
              <span>
                {activeIndex < lessons.length - 1
                  ? 'Next Lesson'
                  : 'Finish Course 🎉'}
              </span>
              <ChevronRight size={16} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
