import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Search, Filter, Sparkles, BookOpen, 
  CheckCircle2, Trophy, Clock, BookMarked, FileText 
} from 'lucide-react';
import CourseCard from './CourseCard';
import { getAllCourses, getCourseCategories } from '../utils/courseUtils';

export default function LearningHubPage({ onSelectCourse, progressHook }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const courses = useMemo(() => getAllCourses(), []);
  const categories = useMemo(() => getCourseCategories(), []);
  const { getCourseStats, getOverallStats } = progressHook;

  const stats = useMemo(() => getOverallStats(courses), [getOverallStats, courses]);

  // Filtered courses
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      if (selectedType !== 'All' && course.type !== selectedType) {
        return false;
      }
      if (selectedCategory !== 'All' && course.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesDesc = (course.description || '').toLowerCase().includes(query);
        const matchesTag = course.tags?.some((t) => t.toLowerCase().includes(query));
        return matchesTitle || matchesDesc || matchesTag;
      }
      return true;
    });
  }, [courses, selectedType, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background text-text p-4 sm:p-8 max-w-7xl mx-auto">
      {/* Sleek Hero Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/15 via-card/80 to-card border border-primary/20 p-6 sm:p-10 mb-8 shadow-sm">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 border border-primary/20 backdrop-blur-md">
            <GraduationCap size={16} />
            <span>Learning Hub & E-Book Studio</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-text via-primary to-secondary bg-clip-text text-transparent mb-3 tracking-tight">
            Interaktive Kurse & E-Books
          </h1>

          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Lerne mit strukturierten Markdown-Artikelserien oder lies druckfertige E-Bücher im Paged.js Format. 
            Klicke einfach auf eine Kurs-Kachel, um direkt zu starten!
          </p>

          {/* Quick Learning Stats Widget */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-6 pt-6 border-t border-border/50">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0 shadow-xs">
                <BookOpen size={20} />
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-extrabold text-text leading-none">{stats.startedCourses}</p>
                <p className="text-[11px] sm:text-xs text-muted font-medium mt-1">Gestartete Kurse</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 shrink-0 shadow-xs">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-extrabold text-text leading-none">{stats.totalLessonsCompleted}</p>
                <p className="text-[11px] sm:text-xs text-muted font-medium mt-1">Lektionen gelesen</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 shrink-0 shadow-xs">
                <Trophy size={20} />
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-extrabold text-text leading-none">{stats.completedCourses}</p>
                <p className="text-[11px] sm:text-xs text-muted font-medium mt-1">Abgeschlossen</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Ambient Background Orb */}
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      </div>

      {/* Controls: Search Bar & Filters */}
      <div className="space-y-4 mb-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Kurse, Themen oder Tags suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-2xl text-xs sm:text-sm text-text placeholder-muted focus:outline-none focus:border-primary transition-colors shadow-xs"
            />
          </div>

          {/* Type Filter Buttons */}
          <div className="inline-flex items-center p-1.5 bg-card border border-border rounded-2xl gap-1 shrink-0 self-start sm:self-auto shadow-xs">
            <button
              onClick={() => setSelectedType('All')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedType === 'All'
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-muted hover:text-text'
              }`}
            >
              Alle Formate
            </button>
            <button
              onClick={() => setSelectedType('lessons')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedType === 'lessons'
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-muted hover:text-text'
              }`}
            >
              <FileText size={14} />
              <span>Serien</span>
            </button>
            <button
              onClick={() => setSelectedType('book')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedType === 'book'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-muted hover:text-text'
              }`}
            >
              <BookMarked size={14} />
              <span>Bücher</span>
            </button>
          </div>
        </div>

        {/* Category Pills */}
        {categories.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'All'
                  ? 'bg-text text-background shadow-xs'
                  : 'bg-card border border-border text-muted hover:text-text'
              }`}
            >
              Alle Kategorien
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-card border border-border text-muted hover:text-text'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              stats={getCourseStats(course)}
              onSelectCourse={onSelectCourse}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-card border border-border rounded-3xl p-8">
          <BookOpen size={48} className="mx-auto text-muted/50 mb-4" />
          <h3 className="text-lg font-bold text-text mb-1">Keine Kurse gefunden</h3>
          <p className="text-xs text-muted mb-4 max-w-sm mx-auto">
            Es wurden keine Kurse für deine aktuellen Filtereinstellungen gefunden.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedType('All');
            }}
            className="px-4 py-2 bg-primary text-white rounded-xl text-xs font-bold shadow-md hover:bg-primary/90 transition-all cursor-pointer"
          >
            Filter zurücksetzen
          </button>
        </div>
      )}
    </div>
  );
}
