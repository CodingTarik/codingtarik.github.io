import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, BookMarked, FileText, ArrowRight, Check, Layers, Heart, Flame } from 'lucide-react';
import { getCourseLessonCount } from '../utils/courseUtils';

export default function CourseCard({ course, stats, onSelectCourse, isFavorite, onToggleFavorite }) {
  const lessonCount = getCourseLessonCount(course);
  const isBook = course.type === 'book';
  const { completedCount = 0, percentage = 0, isCompleted = false } = stats || {};

  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRotateX(-((y - rect.height / 2) / (rect.height / 2)) * 4);
    setRotateY(((x - rect.width / 2) / (rect.width / 2)) * 4);
    setMousePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setMousePos({ x: 50, y: 50 });
  };

  // Color system based on type
  const accent = isBook
    ? { glow: 'rgba(245,158,11,0.18)', bar: 'linear-gradient(90deg,#f59e0b,#fbbf24)', badge: 'rgba(245,158,11,0.9)', badgeBorder: 'rgba(245,158,11,0.3)', text: '#f59e0b' }
    : { glow: 'rgba(99,102,241,0.18)',  bar: 'linear-gradient(90deg,#6366f1,#8b5cf6)', badge: 'rgba(99,102,241,0.9)',  badgeBorder: 'rgba(99,102,241,0.3)',  text: '#818cf8' };

  // Progress state label
  const statusLabel = isCompleted
    ? 'Completed'
    : percentage > 0
    ? `${percentage}% read`
    : course.level || 'New';

  const statusStyle = isCompleted
    ? { bg: 'rgba(16,185,129,0.15)', text: '#10b981', border: 'rgba(16,185,129,0.3)' }
    : percentage > 0
    ? { bg: 'rgba(245,158,11,0.15)', text: '#f59e0b', border: 'rgba(245,158,11,0.3)' }
    : { bg: 'rgba(255,255,255,0.07)', text: 'rgba(255,255,255,0.6)', border: 'rgba(255,255,255,0.12)' };

  const ctaLabel = isCompleted ? 'Read again' : percentage > 0 ? 'Continue reading' : isBook ? 'Start book' : 'Start course';

  return (
    <div className="perspective-1000 h-full">
      <motion.div
        ref={cardRef}
        whileHover={{ scale: 1.015, y: -4 }}
        transition={{ type: 'spring', stiffness: 320, damping: 24 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.18s ease-out'
        }}
        onClick={() => onSelectCourse(course)}
        tabIndex={0}
        role="button"
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectCourse(course); } }}
        className="group relative rounded-[28px] overflow-hidden flex flex-col h-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-xl hover:shadow-2xl transition-shadow duration-300"
      >
        {/* Glass base */}
        <div className="absolute inset-0 bg-card/60 backdrop-blur-2xl" />
        {/* Border */}
        <div className="absolute inset-0 rounded-[28px] border border-white/[0.09] group-hover:border-white/[0.18] transition-colors duration-300 z-20 pointer-events-none" />
        {/* Top inset highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent z-20" />
        {/* Dynamic glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
          style={{ background: `radial-gradient(500px circle at ${mousePos.x}% ${mousePos.y}%, ${accent.glow}, transparent 50%)` }}
        />

        {/* ── Cover Image ── */}
        <div className="relative h-44 w-full overflow-hidden">
          {course.coverImage ? (
            <>
              <img
                src={course.coverImage}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/55 to-card/10" />
            </>
          ) : (
            <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${accent.badge}33, ${accent.badge}55)` }} />
          )}

          {/* Favorite button — top left */}
          <button
            onClick={(e) => { e.stopPropagation(); onToggleFavorite?.(course.id); }}
            className={`absolute top-3 left-3 z-30 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
              isFavorite
                ? 'bg-rose-500 shadow-lg shadow-rose-500/40 scale-110'
                : 'bg-black/40 backdrop-blur-md hover:bg-rose-500/30 hover:scale-110'
            }`}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart
              size={14}
              className={isFavorite ? 'text-white fill-white' : 'text-white/70'}
              fill={isFavorite ? 'currentColor' : 'none'}
            />
          </button>

          {/* Type badge — top right */}
          <div className="absolute top-3 right-3 z-10">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wide uppercase text-white shadow-lg backdrop-blur-xl border"
              style={{ background: accent.badge, borderColor: accent.badgeBorder }}
            >
              {isBook ? <BookMarked size={10} /> : <Layers size={10} />}
              {isBook ? 'E-Book' : 'Series'}
            </span>
          </div>

          {/* Favorite flame indicator (when favorited + in progress) */}
          {isFavorite && percentage > 0 && !isCompleted && (
            <div className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/30 backdrop-blur-sm">
              <Flame size={10} className="text-rose-400" />
              <span className="text-[9px] font-extrabold text-rose-400 uppercase tracking-wider">Active</span>
            </div>
          )}
        </div>

        {/* ── Card Body ── */}
        <div className="relative z-10 flex-1 flex flex-col p-5 gap-3">

          {/* Category + tags */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-extrabold tracking-wider uppercase" style={{ color: accent.text }}>
              {course.category}
            </span>
            {course.tags?.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md font-semibold" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.08)' }}>
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-text group-hover:text-amber-400 transition-colors duration-200 line-clamp-2 leading-snug tracking-tight">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-muted line-clamp-2 leading-relaxed font-normal flex-1">
            {course.description}
          </p>

          {/* ── Progress + Meta ── */}
          <div className="pt-3 space-y-3" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>

            {/* Progress bar — always visible, subtle when 0% */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                {/* Meta: duration + count */}
                <div className="flex items-center gap-3 text-xs text-muted">
                  {course.duration && (
                    <span className="flex items-center gap-1 font-medium">
                      <Clock size={11} style={{ color: accent.text }} />
                      {course.duration}
                    </span>
                  )}
                  <span className="flex items-center gap-1 font-medium">
                    <BookOpen size={11} style={{ color: accent.text }} />
                    {lessonCount} {isBook ? 'Ch.' : 'Les.'}
                  </span>
                  {completedCount > 0 && (
                    <span className="font-semibold" style={{ color: 'rgba(255,255,255,0.35)' }}>
                      {completedCount}/{lessonCount}
                    </span>
                  )}
                </div>

                {/* Status badge */}
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: statusStyle.bg, color: statusStyle.text, border: `1px solid ${statusStyle.border}` }}
                >
                  {isCompleted && <Check size={9} className="inline mr-0.5 mb-px" strokeWidth={3} />}
                  {statusLabel}
                </span>
              </div>

              {/* Progress track */}
              <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${isCompleted ? 100 : percentage}%` }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="h-full rounded-full"
                  style={{ background: isCompleted ? 'linear-gradient(90deg,#10b981,#34d399)' : accent.bar }}
                />
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between pt-0.5">
              <span
                className="text-xs font-bold flex items-center gap-1 transition-colors"
                style={{ color: isCompleted ? '#10b981' : accent.text }}
              >
                {ctaLabel}
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>

              {isFavorite && (
                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-rose-400">
                  <Heart size={10} className="fill-rose-400" />
                  Favorite
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
