import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, Circle, ChevronRight, ChevronLeft, 
  Menu, X, BookOpen, Clock, Award, Share2, RotateCcw, Sparkles, Check 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import BlogPostContent from '../../blog/components/BlogPostContent';
import { navigate } from '../../../utils/navigation';

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

  // Find active lesson index
  const activeIndex = lessons.findIndex((l) => l.id === activeLessonId);
  const currentLesson = lessons[activeIndex >= 0 ? activeIndex : 0] || lessons[0];

  const stats = getCourseStats(course);
  const isCurrentCompleted = currentLesson ? isLessonCompleted(course.id, currentLesson.id) : false;

  // Scroll to top on lesson change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentLesson?.id]);

  // Keyboard navigation (Left/Right arrows)
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
        <p>Lektion nicht gefunden.</p>
        <button onClick={onBackToOverview} className="mt-4 px-4 py-2 bg-primary text-white rounded-xl text-xs font-bold">
          Zurück zur Übersicht
        </button>
      </div>
    );
  }

  const handleToggleComplete = () => {
    const nextCompleted = !isCurrentCompleted;
    toggleLessonCompleted(course.id, currentLesson.id);

    // Trigger celebratory confetti if user marks final lesson complete or completes course!
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
      // Trigger final confetti on finishing course
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
    <div className="min-h-screen bg-background text-text flex flex-col lg:flex-row">
      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Course Reader Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 bottom-0 z-50 lg:z-auto w-[85vw] sm:w-80 bg-card/95 backdrop-blur-md border-r border-border
          flex flex-col h-screen transition-transform duration-300 ease-in-out shadow-2xl lg:shadow-none
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Sidebar Top Branding Header */}
        <div className="p-4 border-b border-border flex flex-col gap-3 bg-card/40">
          <div className="flex items-center justify-between">
            <button
              onClick={onBackToOverview}
              className="inline-flex items-center gap-2 text-xs font-bold text-muted hover:text-primary transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Learning Hub</span>
            </button>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-1 text-muted hover:text-text rounded-lg"
            >
              <X size={18} />
            </button>
          </div>

          <div>
            <span className="text-[10px] font-extrabold uppercase text-primary tracking-wider">
              {course.category || 'Kurs'}
            </span>
            <h2 className="text-base font-extrabold text-text line-clamp-1 mt-0.5">
              {course.title}
            </h2>
          </div>

          {/* Overall Progress Indicator */}
          <div className="space-y-1.5 pt-2 border-t border-border/50">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-muted">Fortschritt</span>
              <span className="text-primary">{stats.percentage}%</span>
            </div>
            <div className="w-full h-2 bg-border/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-300 rounded-full"
                style={{ width: `${stats.percentage}%` }}
              />
            </div>
            <p className="text-[11px] text-muted">
              {stats.completedCount} von {stats.totalCount} Lektionen beendet
            </p>
          </div>
        </div>

        {/* Lesson Navigation List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5 scrollbar-thin">
          {lessons.map((lesson, idx) => {
            const isActive = lesson.id === currentLesson.id;
            const isDone = isLessonCompleted(course.id, lesson.id);

            return (
              <button
                key={lesson.id}
                onClick={() => {
                  onSelectLesson(lesson.id);
                  setIsSidebarOpen(false);
                }}
                className={`
                  w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 group cursor-pointer text-xs relative overflow-hidden
                  ${isActive
                    ? 'bg-primary/15 border border-primary/40 text-primary font-bold shadow-sm'
                    : isDone
                    ? 'bg-card hover:bg-border/30 text-text font-medium border border-border/40'
                    : 'text-muted hover:text-text hover:bg-border/30 border border-transparent'
                  }
                `}
              >
                {/* Active Indicator Strip */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
                )}

                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLessonCompleted(course.id, lesson.id);
                  }}
                  className="mt-0.5 shrink-0 hover:scale-110 transition-transform cursor-pointer"
                  title={isDone ? 'Als unvollständig markieren' : 'Als abgeschlossen markieren'}
                >
                  {isDone ? (
                    <CheckCircle2 size={16} className="text-emerald-500 fill-emerald-500/20" />
                  ) : (
                    <Circle size={16} className="text-muted/60 group-hover:text-primary transition-colors" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="text-[10px] uppercase font-bold text-muted">
                      Lektion {idx + 1}
                    </span>
                    {lesson.duration && (
                      <span className="text-[10px] text-muted/80">{lesson.duration}</span>
                    )}
                  </div>
                  <p className={`line-clamp-2 leading-snug ${isActive ? 'text-primary font-bold' : 'text-text'}`}>
                    {lesson.title.replace(/^Lektion \d+:\s*/, '')}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Sidebar Reset Footer */}
        <div className="p-3 border-t border-border flex items-center justify-between text-xs text-muted bg-card/30">
          <button
            onClick={() => resetCourseProgress(course.id)}
            className="flex items-center gap-1.5 hover:text-rose-500 transition-colors text-[11px] font-medium"
            title="Fortschritt für diesen Kurs zurücksetzen"
          >
            <RotateCcw size={13} />
            <span>Neu starten</span>
          </button>
          <span className="text-[11px] text-muted/80 font-mono">Taste ← → Blättern</span>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Sleek Top Glassmorphic Navigation Bar */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/80 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-card border border-border text-text hover:bg-border/40 transition-colors"
              title="Lektionsliste öffnen"
            >
              <Menu size={18} />
            </button>

            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs text-muted font-medium">
                <span className="truncate">{course.title}</span>
                <span>•</span>
                <span className="shrink-0 text-primary font-bold">Lektion {activeIndex + 1} von {lessons.length}</span>
              </div>
              <h1 className="text-sm sm:text-base font-extrabold text-text truncate">
                {currentLesson.title.replace(/^Lektion \d+:\s*/, '')}
              </h1>
            </div>
          </div>

          {/* Mark Complete Pill Button */}
          <button
            onClick={handleToggleComplete}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm shrink-0 ${
              isCurrentCompleted
                ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-500 hover:bg-emerald-500/25'
                : 'bg-card border border-border text-text hover:border-primary hover:text-primary shadow-xs'
            }`}
          >
            {isCurrentCompleted ? (
              <CheckCircle2 size={16} className="text-emerald-500" />
            ) : (
              <Circle size={16} className="text-muted" />
            )}
            <span className="hidden sm:inline">
              {isCurrentCompleted ? 'Erledigt' : 'Als erledigt markieren'}
            </span>
          </button>
        </header>

        {/* Lesson Body Content View */}
        <div className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-10">
          {/* Lesson Hero Header Banner */}
          <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-card to-card border border-border/80 shadow-sm relative overflow-hidden">
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-primary text-white text-[11px] font-extrabold uppercase tracking-wider">
                    Lektion {activeIndex + 1}
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
                  <span>{isCurrentCompleted ? 'Abgeschlossen' : 'Lektion abschließen'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Render Lesson Markdown */}
          <article className="prose dark:prose-invert max-w-none">
            <BlogPostContent post={{ content: currentLesson.content }} />
          </article>

          {/* Bottom Navigation Buttons */}
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
              <span>Vorherige Lektion</span>
            </button>

            <button
              onClick={handleNextLesson}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl text-xs font-bold bg-gradient-to-r from-primary via-secondary to-primary text-white hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-primary/25"
            >
              <span>
                {activeIndex < lessons.length - 1
                  ? 'Nächste Lektion'
                  : 'Kurs Abschließen 🎉'}
              </span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
