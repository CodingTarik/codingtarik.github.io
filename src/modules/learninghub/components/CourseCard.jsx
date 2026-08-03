import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, FileText, CheckCircle2, BookMarked, ArrowRight } from 'lucide-react';
import { getCourseLessonCount } from '../utils/courseUtils';

export default function CourseCard({ course, stats, onSelectCourse }) {
  const lessonCount = getCourseLessonCount(course);
  const isBook = course.type === 'book';
  const { completedCount = 0, isCompleted = false } = stats || {};

  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const posX = (x / rect.width) * 100;
    const posY = (y / rect.height) * 100;

    const rY = ((x - rect.width / 2) / (rect.width / 2)) * 6;
    const rX = -((y - rect.height / 2) / (rect.height / 2)) * 6;

    setRotateX(rX);
    setRotateY(rY);
    setMousePos({ x: posX, y: posY });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setMousePos({ x: 50, y: 50 });
  };

  return (
    <div className="perspective-1000 h-full">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out'
        }}
        onClick={() => onSelectCourse(course)}
        tabIndex={0}
        role="button"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelectCourse(course);
          }
        }}
        className="group relative bg-card/90 backdrop-blur-sm border border-border/80 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-amber-500/15 transition-all duration-300 flex flex-col h-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      >
        {/* Dynamic Mesh Gradient Radial Glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(245, 158, 11, 0.18), transparent 40%)`
          }}
        />

        {/* Cover Image Container */}
        <div className="relative h-52 w-full overflow-hidden bg-muted">
          <img
            src={course.coverImage}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

          {/* Top Badges Overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-lg backdrop-blur-md border ${
              isBook 
                ? 'bg-amber-500/90 text-white border-amber-400/30' 
                : 'bg-primary/90 text-white border-primary-light/30'
            }`}>
              {isBook ? <BookMarked size={13} /> : <FileText size={13} />}
              <span>{isBook ? 'Paged.js Book' : 'Series'}</span>
            </span>

            {course.level && (
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-background/85 text-text backdrop-blur-md border border-border/60 shadow-sm">
                {course.level}
              </span>
            )}
          </div>

          {/* Completed Badge overlay */}
          {isCompleted && (
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-bold shadow-lg backdrop-blur-sm">
              <CheckCircle2 size={14} />
              <span>Completed</span>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div>
            {/* Category & Tags */}
            <div className="flex items-center gap-2 mb-2.5 flex-wrap">
              <span className="text-[11px] font-extrabold text-amber-500 tracking-wider uppercase">
                {course.category}
              </span>
              {course.tags?.slice(0, 2).map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-border/40 text-muted font-medium">
                  #{tag}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-bold text-text group-hover:text-amber-500 transition-colors duration-200 line-clamp-2 leading-snug">
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
                <Clock size={14} className="text-amber-500" />
                {course.duration}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <BookOpen size={14} className="text-amber-500" />
                {lessonCount} {isBook ? 'Chapters' : 'Lessons'}
              </span>
            </div>

            {/* Action Footer */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-bold text-amber-500 group-hover:underline flex items-center gap-1">
                Read Book
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
              {completedCount > 0 && (
                <span className="text-[11px] font-semibold text-muted">
                  {completedCount}/{lessonCount} read
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
