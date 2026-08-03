import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, FileText, CheckCircle2, ArrowRight, BookMarked, Sparkles } from 'lucide-react';
import { getCourseLessonCount } from '../utils/courseUtils';

export default function CourseCard({ course, stats, onSelectCourse }) {
  const lessonCount = getCourseLessonCount(course);
  const isBook = course.type === 'book';
  const { percentage = 0, completedCount = 0, isCompleted = false } = stats || {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/40 transition-all flex flex-col h-full"
    >
      {/* Cover Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <img
          src={course.coverImage}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-md ${
            isBook 
              ? 'bg-amber-500/90 text-white' 
              : 'bg-primary/90 text-white'
          }`}>
            {isBook ? <BookMarked size={13} /> : <FileText size={13} />}
            <span>{isBook ? 'Paged.js Buch' : 'Artikel-Serie'}</span>
          </span>

          {course.level && (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-background/80 text-text backdrop-blur-md border border-border/50">
              {course.level}
            </span>
          )}
        </div>

        {/* Completed Badge overlay if 100% */}
        {isCompleted && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/90 text-white text-xs font-bold shadow-md">
            <CheckCircle2 size={14} />
            <span>Abgeschlossen</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Category & Tags */}
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-xs font-bold text-primary tracking-wide uppercase">
              {course.category}
            </span>
            {course.tags?.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-border/40 text-muted font-medium">
                #{tag}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors line-clamp-2 leading-snug">
            {course.title}
          </h3>

          <p className="text-xs text-muted mt-2 line-clamp-2 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Metadata & Progress */}
        <div className="space-y-3 pt-3 border-t border-border/60">
          {/* Info stats */}
          <div className="flex items-center justify-between text-xs text-muted">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock size={14} className="text-primary/80" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <BookOpen size={14} className="text-primary/80" />
              {lessonCount} {isBook ? 'Kapitel' : 'Lektionen'}
            </span>
          </div>

          {/* Progress Bar */}
          <div>
            <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
              <span className="text-muted">Fortschritt</span>
              <span className="text-primary">{percentage}%</span>
            </div>
            <div className="w-full h-2 bg-border/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={() => onSelectCourse(course)}
            className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
              isCompleted
                ? 'bg-card border border-primary/50 text-primary hover:bg-primary/10'
                : percentage > 0
                ? 'bg-primary text-white hover:bg-primary/90 shadow-primary/20'
                : 'bg-card border border-border text-text hover:border-primary hover:text-primary'
            }`}
          >
            <span>
              {isCompleted
                ? 'Erneut ansehen'
                : percentage > 0
                ? 'Weiterlernen'
                : isBook
                ? 'Buch lesen'
                : 'Kurs starten'}
            </span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
