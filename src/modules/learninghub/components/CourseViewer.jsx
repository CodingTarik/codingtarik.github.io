import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, Circle, ChevronRight, ChevronLeft, 
  Menu, X, BookOpen, Clock, Award, Share2, RotateCcw 
} from 'lucide-react';
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
      // Don't intercept if user is typing in input
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
      <div className="p-8 text-center text-muted">
        <p>Lektion nicht gefunden.</p>
        <button onClick={onBackToOverview} className="mt-4 btn-primary">
          Zurück zur Übersicht
        </button>
      </div>
    );
  }

  const handleNextLesson = () => {
    if (!isCurrentCompleted) {
      toggleLessonCompleted(course.id, currentLesson.id);
    }
    if (activeIndex < lessons.length - 1) {
      onSelectLesson(lessons[activeIndex + 1].id);
    }
  };

  const handlePrevLesson = () => {
    if (activeIndex > 0) {
      onSelectLesson(lessons[activeIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Course Sidebar Navigation */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 bottom-0 z-50 lg:z-auto w-[85vw] sm:w-80 bg-card border-r border-border
          flex flex-col h-screen transition-transform duration-300 ease-in-out shadow-xl lg:shadow-none
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-border flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <button
              onClick={onBackToOverview}
              className="inline-flex items-center gap-2 text-xs font-bold text-muted hover:text-primary transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Kurse Übersicht</span>
            </button>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-1 text-muted hover:text-text rounded-lg"
            >
              <X size={18} />
            </button>
          </div>

          <h2 className="text-base font-bold text-text line-clamp-1">
            {course.title}
          </h2>

          {/* Course Progress Summary */}
          <div className="space-y-1.5 pt-2 border-t border-border/50">
            <div className="flex justify-between items-center text-xs font-semibold">
              <span className="text-muted">Fortschritt</span>
              <span className="text-primary font-bold">{stats.percentage}%</span>
            </div>
            <div className="w-full h-2 bg-border/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 rounded-full"
                style={{ width: `${stats.percentage}%` }}
              />
            </div>
            <p className="text-[11px] text-muted">
              {stats.completedCount} von {stats.totalCount} Lektionen abgeschlossen
            </p>
          </div>
        </div>

        {/* Lesson List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
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
                  w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 group cursor-pointer text-xs
                  ${isActive
                    ? 'bg-primary/10 border border-primary/40 text-primary font-bold shadow-sm'
                    : isDone
                    ? 'bg-card hover:bg-border/30 text-text font-medium'
                    : 'text-muted hover:text-text hover:bg-border/30'
                  }
                `}
              >
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
                  <p className={`line-clamp-2 leading-snug ${isActive ? 'text-primary' : 'text-text'}`}>
                    {lesson.title.replace(/^Lektion \d+:\s*/, '')}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-border flex items-center justify-between text-xs text-muted">
          <button
            onClick={() => resetCourseProgress(course.id)}
            className="flex items-center gap-1.5 hover:text-rose-500 transition-colors text-[11px]"
            title="Fortschritt für diesen Kurs zurücksetzen"
          >
            <RotateCcw size={13} />
            <span>Zurücksetzen</span>
          </button>
          <span className="text-[11px]">Taste ← → zum Blättern</span>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header Bar */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-card border border-border text-text hover:bg-border/40"
              title="Lektionen öffnen"
            >
              <Menu size={18} />
            </button>

            <div>
              <p className="text-xs text-muted font-medium">
                {course.title} • Lektion {activeIndex + 1} von {lessons.length}
              </p>
              <h1 className="text-sm sm:text-base font-bold text-text line-clamp-1">
                {currentLesson.title}
              </h1>
            </div>
          </div>

          {/* Mark Complete Toggle Button */}
          <button
            onClick={() => toggleLessonCompleted(course.id, currentLesson.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
              isCurrentCompleted
                ? 'bg-emerald-500/10 border border-emerald-500/40 text-emerald-500 hover:bg-emerald-500/20'
                : 'bg-card border border-border text-text hover:border-primary hover:text-primary'
            }`}
          >
            <CheckCircle2 size={15} className={isCurrentCompleted ? 'text-emerald-500' : 'text-muted'} />
            <span className="hidden sm:inline">
              {isCurrentCompleted ? 'Abgeschlossen' : 'Als erledigt markieren'}
            </span>
          </button>
        </header>

        {/* Lesson Body Content */}
        <div className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-8">
          {/* Lesson Metadata Banner */}
          <div className="mb-8 p-4 rounded-2xl bg-card border border-border/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <BookOpen size={20} />
              </div>
              <div>
                <span className="text-xs text-primary font-bold uppercase tracking-wider">
                  Modul {activeIndex + 1}
                </span>
                <h2 className="text-lg font-bold text-text">{currentLesson.title}</h2>
              </div>
            </div>

            {currentLesson.duration && (
              <div className="flex items-center gap-1.5 text-xs text-muted bg-border/40 px-3 py-1.5 rounded-lg font-medium">
                <Clock size={14} />
                <span>{currentLesson.duration} Lesezeit</span>
              </div>
            )}
          </div>

          {/* Markdown Content Renderer */}
          <article className="prose dark:prose-invert max-w-none">
            <BlogPostContent post={{ content: currentLesson.content }} />
          </article>

          {/* Bottom Navigation Bar */}
          <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handlePrevLesson}
              disabled={activeIndex === 0}
              className={`w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
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
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold bg-primary text-white hover:bg-primary/90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-primary/20"
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
