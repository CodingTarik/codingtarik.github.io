import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Clock } from 'lucide-react';
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

    if (nextCompleted) {
      playSuccessSound();
      if (activeIndex === lessons.length - 1 || stats.completedCount + 1 >= lessons.length) {
        confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
      } else {
        confetti({ particleCount: 50, spread: 50, origin: { y: 0.8 } });
      }
    }
  };

  const handleNextLesson = () => {
    if (!isCurrentCompleted) {
      handleToggleComplete();
    }
    if (activeIndex < lessons.length - 1) {
      onSelectLesson(lessons[activeIndex + 1].id);
    }
  };

  const handleJumpSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(jumpPageInput.trim(), 10);
    if (!isNaN(num) && num >= 1 && num <= lessons.length) {
      const target = lessons[num - 1];
      if (target) {
        onSelectLesson(target.id);
        setJumpPageInput('');
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-text flex">
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

      <div className="lg:ml-80 flex-1 flex flex-col min-w-0 relative">
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

        {/* Floating Controls */}
        <FloatingReaderControls
          currentIndex={activeIndex}
          totalCount={lessons.length}
          jumpInput={jumpPageInput}
          setJumpInput={setJumpPageInput}
          onJumpSubmit={handleJumpSubmit}
          isBook={false}
        />

        <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-10 -mt-6">
          <div className="mb-10 p-8 sm:p-12 rounded-[32px] bg-gradient-to-r from-primary/10 via-card to-card border border-primary/20 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-primary text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                  Lesson {activeIndex + 1}
                </span>
                {currentLesson.duration && (
                  <span className="inline-flex items-center gap-1 text-xs text-muted bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full font-bold border border-border/50">
                    <Clock size={13} />
                    <span>{currentLesson.duration}</span>
                  </span>
                )}
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-text leading-tight tracking-tight mt-2">
                {currentLesson.title}
              </h2>

              {currentLesson.description && (
                <p className="text-base sm:text-lg text-muted mt-4 max-w-2xl font-medium leading-relaxed">
                  {currentLesson.description}
                </p>
              )}
            </div>
          </div>

          {/* Render Lesson Content */}
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <BlogPostContent content={currentLesson.content} />
          </div>

          {/* Large Navigation Buttons */}
          <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            {activeIndex > 0 && (
              <button
                onClick={() => onSelectLesson(lessons[activeIndex - 1].id)}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-bold bg-card border-2 border-border text-muted hover:border-primary hover:text-primary transition-all text-center"
              >
                ← Previous Lesson
              </button>
            )}
            <div className="flex-1"></div>
            <button
              onClick={handleNextLesson}
              className="w-full sm:w-auto px-10 py-4 rounded-2xl text-sm font-black bg-gradient-to-r from-primary to-secondary text-white shadow-xl shadow-primary/20 hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>{activeIndex < lessons.length - 1 ? 'Complete & Next' : 'Finish Course 🎉'}</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
