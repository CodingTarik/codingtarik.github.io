import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap, Search, Sparkles, BookOpen,
  CheckCircle2, Trophy, BookMarked, Layers, X, SlidersHorizontal, ChevronDown, Heart, Flame
} from 'lucide-react';
import CourseCard from './CourseCard';
import { getAllCourses, getCourseCategories } from '../utils/courseUtils';

// ── Favorites hook (localStorage) ──
function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem('learninghub_favorites');
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch { return new Set(); }
  });

  const toggleFavorite = useCallback((courseId) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(courseId)) { next.delete(courseId); } else { next.add(courseId); }
      try { localStorage.setItem('learninghub_favorites', JSON.stringify([...next])); } catch {}
      return next;
    });
  }, []);

  return { favorites, toggleFavorite };
}

// ── Animated Hero Visual ──
function HeroVisual() {
  const nodes = [
    { x: '12%',  y: '22%',  size: 58, color: '#f59e0b', delay: 0,    icon: '📚', label: 'E-Book'  },
    { x: '58%',  y: '12%',  size: 46, color: '#6366f1', delay: 0.3,  icon: '⚡', label: 'Series'  },
    { x: '82%',  y: '48%',  size: 54, color: '#10b981', delay: 0.6,  icon: '✓',  label: '100%'   },
    { x: '36%',  y: '66%',  size: 42, color: '#8b5cf6', delay: 0.9,  icon: '🎯', label: 'Goal'   },
    { x: '70%',  y: '80%',  size: 36, color: '#f59e0b', delay: 1.2,  icon: '🚀', label: 'Start'  },
    { x: '16%',  y: '76%',  size: 32, color: '#6366f1', delay: 1.5,  icon: '💡', label: 'Idea'   },
  ];

  const connections = [[0,1],[1,2],[0,3],[3,4],[2,4],[3,5]];

  return (
    <div className="relative w-full h-full min-h-[200px] overflow-hidden select-none pointer-events-none">
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        {connections.map(([a, b], i) => {
          const na = nodes[a], nb = nodes[b];
          return (
            <motion.line
              key={i}
              x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
              stroke="rgba(245,158,11,0.12)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: na.delay + 0.4, ease: 'easeOut' }}
            />
          );
        })}
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute flex flex-col items-center gap-1"
          style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)', zIndex: 1 }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: node.delay },
            scale:   { duration: 0.5, delay: node.delay, type: 'spring', stiffness: 200 },
            y:       { duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: node.delay }
          }}
        >
          <div
            className="rounded-2xl flex items-center justify-center text-white font-black shadow-2xl"
            style={{
              width: node.size, height: node.size,
              background: `linear-gradient(135deg, ${node.color}22, ${node.color}44)`,
              border: `1px solid ${node.color}55`,
              boxShadow: `0 8px 24px ${node.color}33, inset 0 1px 0 ${node.color}44`,
              fontSize: node.size > 44 ? '1.4rem' : '1rem',
              backdropFilter: 'blur(10px)',
            }}
          >
            {node.icon}
          </div>
          <span className="text-[9px] font-extrabold uppercase tracking-widest" style={{ color: node.color + 'bb' }}>
            {node.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ── Stat Widget ──
function StatWidget({ icon: Icon, value, label, color = 'amber', delay = 0 }) {
  const c = {
    amber:  { bg: 'rgba(245,158,11,0.1)',  text: '#f59e0b', border: 'rgba(245,158,11,0.2)'  },
    emerald:{ bg: 'rgba(16,185,129,0.1)',  text: '#10b981', border: 'rgba(16,185,129,0.2)'  },
    indigo: { bg: 'rgba(99,102,241,0.1)',  text: '#6366f1', border: 'rgba(99,102,241,0.2)'  },
  }[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-3 px-4 py-3 rounded-2xl"
      style={{ background: c.bg, border: `1px solid ${c.border}` }}
    >
      <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: c.bg, border: `1px solid ${c.border}` }}>
        <Icon size={16} style={{ color: c.text }} />
      </div>
      <div>
        <p className="text-xl font-black leading-none" style={{ color: c.text }}>{value}</p>
        <p className="text-[10px] text-muted font-semibold uppercase tracking-wider mt-0.5">{label}</p>
      </div>
    </motion.div>
  );
}

// ── Main ──
export default function LearningHubPage({ onSelectCourse, progressHook }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);

  const { favorites, toggleFavorite } = useFavorites();

  const courses = useMemo(() => getAllCourses(), []);
  const categories = useMemo(() => getCourseCategories(), []);
  const { getCourseStats, getOverallStats } = progressHook;
  const stats = useMemo(() => getOverallStats(courses), [getOverallStats, courses]);

  // Cmd+K search
  useEffect(() => {
    const h = (e) => { if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); searchRef.current?.focus(); } };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  // Close dropdown
  useEffect(() => {
    const h = (e) => { if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setShowCategoryDropdown(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      if (showFavoritesOnly && !favorites.has(course.id)) return false;
      if (selectedType !== 'All' && course.type !== selectedType) return false;
      if (selectedCategory !== 'All' && course.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          course.title.toLowerCase().includes(q) ||
          (course.description || '').toLowerCase().includes(q) ||
          course.tags?.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [courses, selectedType, selectedCategory, searchQuery, showFavoritesOnly, favorites]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.07 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }
  };

  const typeOptions = [
    { id: 'All', label: 'All', icon: GraduationCap },
    { id: 'book', label: 'E-Books', icon: BookMarked },
    { id: 'series', label: 'Series', icon: Layers },
  ];

  const hasActiveFilter = searchQuery || selectedType !== 'All' || selectedCategory !== 'All' || showFavoritesOnly;
  const favoriteCount = favorites.size;

  return (
    <div className="relative min-h-screen bg-background text-text pb-20">

      {/* Ambient orbs — colored, not white */}
      <div
        className="fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none -z-10 animate-lh-breathe"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, rgba(251,191,36,0.06) 60%, transparent 100%)' }}
      />
      <div
        className="fixed top-32 right-1/5 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(99,102,241,0.05) 60%, transparent 100%)', animationDelay: '1.5s' }}
      />
      <div
        className="fixed bottom-0 left-1/3 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 space-y-8">

        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px]"
          style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.15)'
          }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
          {/* Colored inner glow (amber-purple, not white) */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[80px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, rgba(139,92,246,0.06) 60%, transparent 100%)' }} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left content */}
            <div className="relative z-10 p-8 sm:p-12">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-amber-400 text-[11px] font-extrabold uppercase tracking-wider mb-5"
                style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}
              >
                <Sparkles size={12} className="animate-spin-slow" />
                <span>Learning Hub</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl sm:text-5xl font-black text-text mb-3 tracking-tight leading-[1.08]"
              >
                Build Knowledge.
                <br />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 40%, #f97316 100%)' }}>
                  Learn Interactively.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sm text-muted leading-relaxed font-medium max-w-md mb-8"
              >
                High-quality interactive courses, e-books, and article series — with real progress tracking.
              </motion.p>

              <div className="flex flex-wrap gap-3">
                <StatWidget icon={BookOpen}     value={stats.startedCourses}       label="Started"     color="amber"   delay={0.35} />
                <StatWidget icon={CheckCircle2} value={stats.totalLessonsCompleted} label="Lessons"     color="emerald" delay={0.42} />
                <StatWidget icon={Trophy}       value={stats.completedCourses}      label="Completed"   color="indigo"  delay={0.49} />
              </div>
            </div>

            {/* Right: animated visual */}
            <div className="relative h-56 lg:h-auto overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-20 pointer-events-none z-10 lg:block hidden" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.03), transparent)' }} />
              <HeroVisual />
            </div>
          </div>
        </motion.div>

        {/* ── Filter Toolbar ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">

            {/* Search */}
            <div className="relative flex-1 min-w-0">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/60 pointer-events-none" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search courses, e-books, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-2xl text-sm font-medium text-text placeholder:text-muted/50 focus:outline-none transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', color: 'inherit' }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(245,158,11,0.5)'; e.target.style.background = 'rgba(255,255,255,0.07)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.background = 'rgba(255,255,255,0.05)'; }}
              />
              {searchQuery
                ? <button onClick={() => setSearchQuery('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center text-muted hover:text-text hover:bg-white/10 transition-colors"><X size={12} /></button>
                : <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-white/15 hidden sm:inline pointer-events-none">⌘K</span>
              }
            </div>

            {/* Type segment */}
            <div className="flex items-center gap-0.5 p-1 rounded-2xl shrink-0" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              {typeOptions.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setSelectedType(id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[13px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                    selectedType === id ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' : 'text-muted hover:text-text hover:bg-white/5'
                  }`}
                >
                  <Icon size={13} />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>

            {/* Favorites toggle button */}
            <button
              onClick={() => setShowFavoritesOnly((p) => !p)}
              className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-sm font-bold transition-all cursor-pointer shrink-0 ${
                showFavoritesOnly ? 'text-rose-400' : 'text-muted hover:text-text'
              }`}
              style={{
                background: showFavoritesOnly ? 'rgba(244,63,94,0.12)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${showFavoritesOnly ? 'rgba(244,63,94,0.3)' : 'rgba(255,255,255,0.08)'}`,
              }}
              title="Show favorites"
            >
              <Heart size={15} className={showFavoritesOnly ? 'fill-rose-400' : ''} fill={showFavoritesOnly ? 'currentColor' : 'none'} />
              <span className="hidden sm:inline">Favorites</span>
              {favoriteCount > 0 && (
                <span
                  className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-full"
                  style={{ background: showFavoritesOnly ? 'rgba(244,63,94,0.2)' : 'rgba(255,255,255,0.1)', color: showFavoritesOnly ? '#f43f5e' : 'rgba(255,255,255,0.5)' }}
                >
                  {favoriteCount}
                </span>
              )}
            </button>

            {/* Category dropdown */}
            {categories.length > 0 && (
              <div className="relative shrink-0" ref={dropdownRef}>
                <button
                  onClick={() => setShowCategoryDropdown((p) => !p)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold transition-all cursor-pointer whitespace-nowrap"
                  style={{
                    background: selectedCategory !== 'All' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${selectedCategory !== 'All' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)'}`,
                    color: selectedCategory !== 'All' ? 'inherit' : 'rgba(156,163,175,1)',
                  }}
                >
                  <SlidersHorizontal size={14} style={{ color: selectedCategory !== 'All' ? '#f59e0b' : undefined }} />
                  <span>{selectedCategory === 'All' ? 'Category' : selectedCategory}</span>
                  <ChevronDown size={13} className={`transition-transform ${showCategoryDropdown ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {showCategoryDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full right-0 mt-2 min-w-[200px] rounded-2xl overflow-hidden z-30"
                      style={{
                        background: 'rgba(8,10,18,0.96)',
                        backdropFilter: 'blur(40px) saturate(200%)',
                        WebkitBackdropFilter: 'blur(40px) saturate(200%)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        boxShadow: '0 20px 48px rgba(0,0,0,0.5)'
                      }}
                    >
                      <button
                        onClick={() => { setSelectedCategory('All'); setShowCategoryDropdown(false); }}
                        className={`w-full text-left px-4 py-3 text-sm font-semibold transition-colors ${selectedCategory === 'All' ? 'text-amber-400 bg-amber-500/10' : 'text-muted hover:text-text hover:bg-white/5'}`}
                      >
                        All Categories
                      </button>
                      <div className="mx-3 h-px bg-white/8" />
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => { setSelectedCategory(cat); setShowCategoryDropdown(false); }}
                          className={`w-full text-left px-4 py-3 text-sm font-semibold transition-colors ${selectedCategory === cat ? 'text-amber-400 bg-amber-500/10' : 'text-muted hover:text-text hover:bg-white/5'}`}
                        >
                          {cat}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Clear all */}
            <AnimatePresence>
              {hasActiveFilter && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedType('All'); setShowFavoritesOnly(false); }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-rose-400 cursor-pointer transition-all shrink-0"
                  style={{ background: 'rgba(244,63,94,0.08)', border: '1px solid rgba(244,63,94,0.18)' }}
                >
                  <X size={13} />
                  <span className="hidden sm:inline">Reset</span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Active filter pills */}
          <AnimatePresence>
            {hasActiveFilter && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center gap-2 flex-wrap overflow-hidden"
              >
                {searchQuery && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-lg text-text" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    „{searchQuery}" <button onClick={() => setSearchQuery('')} className="text-muted hover:text-rose-400"><X size={10}/></button>
                  </span>
                )}
                {selectedType !== 'All' && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-lg text-amber-400" style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.18)' }}>
                    {typeOptions.find(t => t.id === selectedType)?.label}
                    <button onClick={() => setSelectedType('All')} className="hover:text-rose-400"><X size={10}/></button>
                  </span>
                )}
                {selectedCategory !== 'All' && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-lg text-indigo-400" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.18)' }}>
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory('All')} className="hover:text-rose-400"><X size={10}/></button>
                  </span>
                )}
                {showFavoritesOnly && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-lg text-rose-400" style={{ background: 'rgba(244,63,94,0.08)', border: '1px solid rgba(244,63,94,0.18)' }}>
                    <Heart size={10} className="fill-rose-400" />
                    Favorites
                    <button onClick={() => setShowFavoritesOnly(false)} className="hover:text-rose-400"><X size={10}/></button>
                  </span>
                )}
                <span className="text-[11px] text-muted/60 font-medium">
                  {filteredCourses.length} {filteredCourses.length === 1 ? 'result' : 'results'}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Course Grid ── */}
        <AnimatePresence mode="wait">
          {filteredCourses.length > 0 ? (
            <motion.div
              key={`course-grid-${showFavoritesOnly}-${selectedType}-${selectedCategory}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { staggerChildren: 0.07 } }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  <CourseCard
                    course={course}
                    stats={getCourseStats(course.id)}
                    onSelectCourse={onSelectCourse}
                    isFavorite={favorites.has(course.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-24 rounded-[32px] flex flex-col items-center gap-5"
              style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(30px)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="w-20 h-20 rounded-3xl flex items-center justify-center" style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}>
                {showFavoritesOnly
                  ? <Heart size={32} style={{ color: 'rgba(244,63,94,0.6)' }} />
                  : <BookOpen size={32} style={{ color: 'rgba(245,158,11,0.6)' }} />
                }
              </div>
              <div>
                <h3 className="text-lg font-bold text-text mb-1.5">
                  {showFavoritesOnly ? 'No Favorites' : 'No Courses Found'}
                </h3>
                <p className="text-sm text-muted max-w-xs mx-auto leading-relaxed">
                  {showFavoritesOnly
                    ? 'Click the heart icon on any card to add it to your favorites.'
                    : 'Adjust your search or filters to find matching content.'}
                </p>
              </div>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedType('All'); setShowFavoritesOnly(false); }}
                className="px-6 py-2.5 text-white rounded-2xl text-sm font-bold cursor-pointer active:scale-95 transition-all"
                style={{ background: '#f59e0b', boxShadow: '0 8px 24px rgba(245,158,11,0.35)' }}
              >
                Reset
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
