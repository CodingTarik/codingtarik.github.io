import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Wrench, ArrowUpRight, FileText, Music, 
  Layers, Mic, Edit3, Headphones, Search, 
  ShieldCheck, Zap, LayoutGrid, List, Cpu, GraduationCap, Palette,
  Star
} from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { navigate } from '../../../utils/navigation';

export default function ToolsOverviewPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const tools = [
    {
      id: 'learnbuddy',
      title: 'LearnBuddy Platform',
      tagline: 'Interactive Skill & Knowledge Companion',
      description: 'Comprehensive learning hub with tailored buddies for Bouldering, Languages, Gym Workouts, Cooking, Yoga & Life Skills.',
      icon: GraduationCap,
      accentColor: 'from-violet-600 via-purple-600 to-indigo-600',
      borderGlow: 'hover:border-purple-500/50 hover:shadow-purple-500/10',
      link: '/learnbuddy/boulder/home',
      category: 'Learning',
      featured: true,
      stats: '6 Skill Modules',
      badge: 'Flagship App',
      tags: ['PWA', 'Progress Tracker', 'Interactive Lessons']
    },
    {
      id: 'pdf-tools',
      title: 'PDF Utilities Suite',
      tagline: 'Private Browser-Based PDF Processor',
      description: 'Merge, split, compress, rotate, watermark, and reorder document pages with complete privacy — 0 bytes sent to any server.',
      icon: FileText,
      accentColor: 'from-rose-500 via-red-600 to-orange-500',
      borderGlow: 'hover:border-rose-500/50 hover:shadow-rose-500/10',
      link: '/tools/pdf-tools',
      category: 'Tools',
      stats: '100% Client-Side',
      badge: 'Zero Uploads',
      tags: ['Merge & Split', 'Compress', 'PDF Security']
    },
    {
      id: 'piano-studio',
      title: 'Piano Studio & Synthesizer',
      tagline: 'MIDI-Enabled Virtual Piano',
      description: 'Virtual piano practice environment with Web MIDI keyboard integration, falling notes mode, chord visualizer, and custom synth engine.',
      icon: Music,
      accentColor: 'from-blue-600 via-indigo-600 to-cyan-500',
      borderGlow: 'hover:border-blue-500/50 hover:shadow-blue-500/10',
      link: '/tools/piano',
      category: 'Creative',
      stats: 'Web MIDI API',
      badge: 'MIDI Hardware',
      tags: ['Falling Notes', 'Web Audio API', 'Sheet Planner']
    },
    {
      id: 'flashmaster',
      title: 'FlashMaster SRS',
      tagline: 'Spaced Repetition Flashcard Engine',
      description: 'Memory retention app powered by the SM-2 algorithm. Features text-to-speech audio, Anki package import/export, and study analytics.',
      icon: Layers,
      accentColor: 'from-amber-500 via-orange-600 to-yellow-500',
      borderGlow: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
      link: '/tools/flashmaster',
      category: 'Learning',
      stats: 'SM-2 Algorithm',
      badge: 'Anki Import',
      tags: ['Voice Mode', 'Deck Sharing', 'Smart Review']
    },
    {
      id: 'markdown-editor',
      title: 'MarkdownPad Workspace',
      tagline: 'Live Markdown & LaTeX Studio',
      description: 'Distraction-free Markdown editor with instant side-by-side preview, LaTeX mathematical formulas, Mermaid diagrams, and PDF export.',
      icon: Edit3,
      accentColor: 'from-emerald-500 via-teal-600 to-cyan-600',
      borderGlow: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
      link: '/tools/markdown',
      category: 'Tools',
      stats: 'Mermaid & LaTeX',
      badge: 'Local Saved',
      tags: ['Live Preview', 'Diagrams', 'Local Storage']
    },
    {
      id: 'device-test',
      title: 'Mic & Webcam Diagnostic',
      tagline: 'Hardware Diagnostic Suite',
      description: 'Inspect and test your audio inputs, microphone frequency response, stereo balance, and webcam feeds in complete isolation.',
      icon: Mic,
      accentColor: 'from-sky-500 via-blue-600 to-indigo-500',
      borderGlow: 'hover:border-sky-500/50 hover:shadow-sky-500/10',
      link: '/tools/device-test',
      category: 'Tools',
      stats: 'Real-time Waveform',
      badge: 'Private',
      tags: ['Audio Visualizer', 'Camera Test', 'Local Canvas']
    },
    {
      id: 'perfect-pitch',
      title: 'Perfect Pitch Trainer',
      tagline: 'Musical Ear & Interval Training',
      description: 'Ear training program to develop pitch recognition. Test yourself on single notes, intervals, and harmonic chords with adaptive difficulty.',
      icon: Headphones,
      accentColor: 'from-fuchsia-500 via-pink-600 to-rose-500',
      borderGlow: 'hover:border-pink-500/50 hover:shadow-pink-500/10',
      link: '/tools/perfect-pitch',
      category: 'Learning',
      stats: '3 Game Modes',
      badge: 'Ear Training',
      tags: ['Note Recognition', 'Intervals', 'Audio Feedback']
    }
  ];

  const categories = [
    { id: 'All', label: 'All Applications', icon: Cpu },
    { id: 'Learning', label: 'Learning & Skills', icon: GraduationCap },
    { id: 'Tools', label: 'Utilities & Editors', icon: Wrench },
    { id: 'Creative', label: 'Creative & Audio', icon: Palette }
  ];

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen relative bg-background text-text">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
        <ParticleBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        
        {/* Top Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-card/80 backdrop-blur-md border border-border/80 rounded-3xl p-6 sm:p-10 mb-10 overflow-hidden shadow-xl"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary mb-4">
              <Sparkles size={14} />
              <span>Interactive Application Hub</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 text-text">
              Tools & Web Apps
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed mb-6">
              A curated collection of web applications built for learning, privacy-focused document processing, audio analysis, and productivity. Runs 100% locally in your browser.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-border/60">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-text">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <ShieldCheck size={18} />
                </div>
                <span>100% Local Privacy</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-text">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  <Zap size={18} />
                </div>
                <span>Zero Server Uploads</span>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-text">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Star size={18} />
                </div>
                <span>7 Web Apps Ready</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Toolbar: Category Tabs + Search + Grid/List Switcher */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-card/90 border border-border rounded-2xl p-1.5 shadow-sm">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive ? 'text-white shadow-sm' : 'text-muted hover:text-text'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="toolCategoryPill"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <Icon size={16} className={`relative z-10 ${isActive ? 'text-white' : 'text-muted'}`} />
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Tools: Search & Layout Switcher */}
          <div className="flex items-center gap-3">
            {/* Search Box */}
            <div className="relative flex-1 lg:w-72">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Filter by keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-card border border-border rounded-xl text-xs sm:text-sm focus:outline-none focus:border-primary text-text placeholder:text-muted shadow-sm transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted hover:text-text"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Switcher (Grid vs List) */}
            <div className="flex items-center bg-card border border-border rounded-xl p-1 shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${viewMode === 'grid' ? 'bg-primary/20 text-primary font-bold' : 'text-muted hover:text-text'}`}
                title="Grid View"
              >
                <LayoutGrid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${viewMode === 'list' ? 'bg-primary/20 text-primary font-bold' : 'text-muted hover:text-text'}`}
                title="List View"
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Apps Grid / List Container */}
        <AnimatePresence mode="wait">
          {filteredTools.length > 0 ? (
            viewMode === 'grid' ? (
              /* GRID VIEW */
              <motion.div
                key="grid-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredTools.map((tool, idx) => {
                  const Icon = tool.icon;
                  return (
                    <motion.article
                      key={tool.id}
                      onClick={() => navigate(tool.link)}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ y: -6 }}
                      className={`
                        group relative bg-card border border-border rounded-2xl p-6 shadow-md ${tool.borderGlow}
                        transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer
                      `}
                    >
                      {/* Top Bar: Icon & Badge */}
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${tool.accentColor} text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                            <Icon size={24} />
                          </div>

                          <div className="flex flex-col items-end gap-1">
                            {tool.badge && (
                              <span className="px-2.5 py-0.5 bg-primary/10 text-primary border border-primary/20 text-[11px] font-bold rounded-full">
                                {tool.badge}
                              </span>
                            )}
                            <span className="text-[10px] font-semibold text-muted">
                              {tool.stats}
                            </span>
                          </div>
                        </div>

                        {/* Title & Tagline */}
                        <h2 className="text-xl font-extrabold text-text mb-1 group-hover:text-primary transition-colors">
                          {tool.title}
                        </h2>
                        <p className="text-xs font-semibold text-primary mb-3">
                          {tool.tagline}
                        </p>
                        <p className="text-xs sm:text-sm text-muted leading-relaxed mb-5">
                          {tool.description}
                        </p>
                      </div>

                      {/* Bottom Footer: Feature Chips + Launch Action */}
                      <div className="pt-4 border-t border-border/60">
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {tool.tags.map(t => (
                            <span key={t} className="px-2 py-0.5 bg-background text-muted text-[10px] font-medium rounded-md border border-border/50">
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className="text-muted tracking-wider uppercase text-[10px]">
                            {tool.category}
                          </span>
                          <div className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                            <span>Open App</span>
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            ) : (
              /* LIST VIEW */
              <motion.div
                key="list-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {filteredTools.map((tool, idx) => {
                  const Icon = tool.icon;
                  return (
                    <motion.article
                      key={tool.id}
                      onClick={() => navigate(tool.link)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      whileHover={{ x: 4 }}
                      className={`
                        group bg-card border border-border rounded-2xl p-5 shadow-sm ${tool.borderGlow}
                        transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer
                      `}
                    >
                      <div className="flex items-start sm:items-center gap-4">
                        <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${tool.accentColor} text-white shadow-md flex-shrink-0`}>
                          <Icon size={24} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h2 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
                              {tool.title}
                            </h2>
                            {tool.badge && (
                              <span className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold rounded-full">
                                {tool.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted max-w-2xl leading-relaxed">
                            {tool.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-border/50">
                        <div className="hidden md:flex flex-wrap gap-1">
                          {tool.tags.slice(0, 2).map(t => (
                            <span key={t} className="px-2 py-0.5 bg-background text-muted text-[10px] font-medium rounded-md border border-border/50">
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-1.5 px-4 py-2 bg-primary/10 text-primary font-bold text-xs rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                          <span>Launch</span>
                          <ArrowUpRight size={14} />
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            )
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-card rounded-3xl border border-border p-12 text-center my-8 shadow-sm"
            >
              <Wrench size={44} className="mx-auto mb-3 text-muted" />
              <h3 className="text-lg font-bold text-text mb-1">No matching tools found</h3>
              <p className="text-xs text-muted mb-4">No tools matching "{searchQuery}" in "{selectedCategory}".</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl hover:opacity-90 transition-opacity cursor-pointer"
              >
                Reset Search Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
