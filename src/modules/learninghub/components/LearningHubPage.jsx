import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Search, Sparkles, BookOpen, 
  CheckCircle2, Trophy, Clock, BookMarked, FileText, Target
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
      if (selectedType !== 'All' && course.type !== selectedType) return false;
      if (selectedCategory !== 'All' && course.category !== selectedCategory) return false;
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
      {/* Sleek Hero Header Banner with Gamified Stats */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary/20 via-card to-card border border-primary/20 p-8 sm:p-12 mb-10 shadow-2xl shadow-primary/5">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          
          {/* Left: Title & Intro */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20 backdrop-blur-md shadow-sm">
              <GraduationCap size={16} />
              <span>Learning Hub & E-Book Studio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-text mb-4 tracking-tight leading-tight">
              Master New Skills.
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Read Awesome Books.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed font-medium">
              Explore highly polished interactive courses and print-ready A4 Paged.js E-Books. 
              Track your progress seamlessly.
            </p>
          </div>

          {/* Right: Gamified Stats Dashboard Card */}
          <div className="lg:w-80 shrink-0 bg-background/50 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-xl">
            <h3 className="text-xs font-extrabold text-muted uppercase tracking-widest mb-5 flex items-center gap-2">
              <Target size={14} className="text-primary" />
              Your Progress
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-card p-3 rounded-2xl border border-border shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <p className="text-2xl font-black text-text leading-none">{stats.startedCourses}</p>
                  <p className="text-[11px] text-muted font-bold mt-1 uppercase tracking-wide">Started Courses</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-card p-3 rounded-2xl border border-border shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-2xl font-black text-text leading-none">{stats.totalLessonsCompleted}</p>
                  <p className="text-[11px] text-muted font-bold mt-1 uppercase tracking-wide">Lessons Read</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-card p-3 rounded-2xl border border-border shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <Trophy size={24} />
                </div>
                <div>
                  <p className="text-2xl font-black text-text leading-none">{stats.completedCourses}</p>
                  <p className="text-[11px] text-muted font-bold mt-1 uppercase tracking-wide">Fully Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Ambient Glow */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      </div>

      {/* Controls: Search Bar & Filters */}
      <div className="space-y-5 mb-10">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search courses, topics, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-card/50 backdrop-blur-sm border border-border/80 rounded-2xl text-sm font-medium text-text placeholder-muted focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
            />
          </div>

          {/* Type Filter Buttons */}
          <div className="inline-flex items-center p-1.5 bg-card/50 backdrop-blur-sm border border-border/80 rounded-2xl gap-1 shrink-0 self-start sm:self-auto shadow-sm">
            <button
              onClick={() => setSelectedType('All')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedType === 'All'
                  ? 'bg-text text-background shadow-md'
                  : 'text-muted hover:text-text'
              }`}
            >
              All Formats
            </button>
            <button
              onClick={() => setSelectedType('lessons')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedType === 'lessons'
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'text-muted hover:text-text'
              }`}
            >
              <FileText size={14} />
              <span>Series</span>
            </button>
            <button
              onClick={() => setSelectedType('book')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedType === 'book'
                  ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
                  : 'text-muted hover:text-text'
              }`}
            >
              <BookMarked size={14} />
              <span>Books</span>
            </button>
          </div>
        </div>

        {/* Category Pills */}
        {categories.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'All'
                  ? 'bg-card border-2 border-primary text-primary shadow-sm'
                  : 'bg-card border-2 border-transparent text-muted hover:text-text hover:bg-border/30'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-card border-2 border-primary text-primary shadow-sm'
                    : 'bg-card border-2 border-transparent text-muted hover:text-text hover:bg-border/30'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div className="text-center py-20 bg-card/50 backdrop-blur-sm border border-border/80 rounded-3xl p-8 shadow-sm">
          <BookOpen size={48} className="mx-auto text-muted/30 mb-6" />
          <h3 className="text-xl font-bold text-text mb-2">No courses found</h3>
          <p className="text-sm text-muted mb-6 max-w-sm mx-auto">
            Try adjusting your search or filters to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedType('All');
            }}
            className="px-6 py-3 bg-text text-background rounded-xl text-sm font-bold shadow-xl hover:opacity-90 transition-all cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
