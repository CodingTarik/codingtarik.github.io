import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Github, Code, Star, Search, Filter, Layers, Sparkles, Terminal,
  GraduationCap, Calculator, Film, Database, Cpu, Utensils, Boxes, Server,
  Clock, Shapes, Gamepad2, Usb, ArrowUpRight, LayoutGrid, List, SortAsc, X, Info
} from 'lucide-react';
import GitHubActivity from './GitHubActivity';
import ParticleBackground from './ParticleBackground';
import blogConfig from '../config';

// Mouse-tracking Spotlight Card Component
function SpotlightCard({ children, className = '', onClick }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden bg-card/80 backdrop-blur-xl rounded-3xl border border-border/80 p-6 sm:p-7 transition-all duration-300 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/15 ${className}`}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 229, 255, 0.14), transparent 45%)`,
          }}
        />
      )}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {children}
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [sortBy, setSortBy] = useState('featured'); // 'featured' | 'stars' | 'name'
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'LearnBuddy PWA',
      description: 'Progressive Web Application for skill learning — from bouldering & cooking to software development. Features interactive lessons, quiz modes & offline sync.',
      fullDescription: 'LearnBuddy is a modular Progressive Web Application designed for interactive self-education. It provides tailored learning pathways for various disciplines like Bouldering, Languages, Gym Workouts, Cooking, and Programming with offline capabilities.',
      tech: ['React', 'Tailwind CSS', 'PWA', 'Vite'],
      category: 'web',
      icon: GraduationCap,
      color: 'from-cyan-500/20 to-blue-500/20',
      iconColor: 'text-cyan-400',
      github: `https://github.com/${blogConfig.author.github}/${blogConfig.github?.repo || 'codingtarik.github.io'}`,
      demo: '/learnbuddy/boulder/home',
      featured: true,
      stars: 12,
      status: 'Production Ready',
    },
    {
      id: 2,
      title: 'MathPlan (TU Darmstadt)',
      description: 'Management System for TU Darmstadt students. Streamlines submission, verification, and approval of academic examination plans with an administrative review board.',
      fullDescription: 'Developed specifically for TU Darmstadt mathematics department. Streamlines student course planning, module validation, and official examination schedule submissions.',
      tech: ['Node.js', 'Express', 'MySQL', 'SQLite', 'Jest'],
      category: 'web',
      icon: Calculator,
      color: 'from-blue-500/20 to-indigo-500/20',
      iconColor: 'text-blue-400',
      github: `https://github.com/${blogConfig.author.github}/MathPlan`,
      featured: true,
      stars: 8,
      status: 'Deployed',
    },
    {
      id: 3,
      title: 'Parallel Subtitle Player',
      description: 'Synchronized dual-subtitle video player for language acquisition. Compare and analyze dialogues in real-time with bookmarking and vocabulary export.',
      fullDescription: 'Elevates video-based language learning by displaying two subtitle tracks in sync. Supports keyboard navigation, phrase looping, dictionary lookup, and vocabulary export.',
      tech: ['TypeScript', 'React', 'Tailwind', 'Media APIs'],
      category: 'web',
      icon: Film,
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400',
      github: `https://github.com/${blogConfig.author.github}/Parallel-Subtitle-Player`,
      featured: true,
      stars: 15,
      status: 'Open Source',
    },
    {
      id: 4,
      title: 'Pangolin Wildlife Database',
      description: 'Conservation data management system built for the Tikki Hywood Foundation to track and protect endangered pangolin species in real time.',
      fullDescription: 'Custom wildlife management database software engineered for the Tikki Hywood Foundation. Handles rescue records, medical treatments, telemetry logs, and release tracking.',
      tech: ['Python', 'SQLite', 'Tkinter', 'Data Analysis'],
      category: 'python',
      icon: Database,
      color: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-400',
      github: `https://github.com/${blogConfig.author.github}/Pangolin-Database-Manager`,
      featured: true,
      stars: 9,
      status: 'Completed',
    },
    {
      id: 5,
      title: 'Jarvis Home Automation',
      description: 'Smart home IoT automation controller inspired by J.A.R.V.I.S. Includes voice command processing, sensor dashboards, and local hardware telemetry.',
      fullDescription: 'An offline-first IoT controller featuring voice recognition, MQTT sensor telemetry, dynamic lighting automation, and hardware dashboards.',
      tech: ['Python', 'IoT', 'Speech Recognition', 'AsyncIO'],
      category: 'python',
      icon: Cpu,
      color: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400',
      github: `https://github.com/${blogConfig.author.github}/Jarvis-Home`,
      featured: true,
      stars: 18,
      status: 'Active Lab Project',
    },
    {
      id: 6,
      title: 'Mensa Menu Planner',
      description: 'University cafeteria menu aggregator with intuitive meal planning, dietary filters, and student nutrition tracking.',
      fullDescription: 'Aggregates cafeteria menus across campus dining halls, providing real-time allergen filtering, price comparisons, and meal ratings.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'REST API'],
      category: 'web',
      icon: Utensils,
      color: 'from-red-500/20 to-orange-500/20',
      iconColor: 'text-orange-400',
      github: `https://github.com/${blogConfig.author.github}/mensa-website`,
      status: 'Maintained',
    },
    {
      id: 7,
      title: 'Multiple Knapsack Solver',
      description: 'High-performance combinatorial optimization algorithm for solving the NP-hard Multiple Knapsack Problem efficiently.',
      fullDescription: 'Algorithmic suite implementing exact branch-and-bound as well as greedy heuristic solvers for the Multiple Knapsack Problem.',
      tech: ['Python', 'Algorithms', 'Optimization', 'NumPy'],
      category: 'python',
      icon: Boxes,
      color: 'from-teal-500/20 to-cyan-500/20',
      iconColor: 'text-teal-400',
      github: `https://github.com/${blogConfig.author.github}/Multiple-Knapsack-Solver`,
      status: 'Research Tool',
    },
    {
      id: 8,
      title: 'Java Client-Server File System',
      description: 'Multi-threaded client-server file distribution system with encrypted file transfers and custom Swing GUI client.',
      fullDescription: 'Concurrent Java file server featuring socket communication, custom protocol headers, user authentication, and desktop GUI.',
      tech: ['Java', 'Swing', 'Sockets', 'Multithreading'],
      category: 'tools',
      icon: Server,
      color: 'from-sky-500/20 to-indigo-500/20',
      iconColor: 'text-sky-400',
      github: `https://github.com/${blogConfig.author.github}/Java-Client-Server-File-Server-With-Gui`,
      status: 'Open Source',
    },
    {
      id: 9,
      title: 'Forest Chrome Extension',
      description: 'Productivity extension augmenting the Forest app with custom site blocking logic and session stats.',
      fullDescription: 'Extends the Forest focus browser extension to allow granular whitelist rules, exception schedules, and study analytics.',
      tech: ['JavaScript', 'Chrome Extension API', 'CSS'],
      category: 'tools',
      icon: Clock,
      color: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-400',
      github: `https://github.com/${blogConfig.author.github}/Forest-Chrome-Extension-Exceptional-Use`,
      status: 'Stable',
    },
    {
      id: 10,
      title: 'Euklid Geometric Engine',
      description: 'Algorithmic visualization platform for Euclidean geometry and classic mathematical proofs.',
      fullDescription: 'Interactive math engine capable of plotting Euclidean constructions, calculating intersections, and visualizing geometry algorithms.',
      tech: ['Python', 'Mathematics', 'Geometry'],
      category: 'python',
      icon: Shapes,
      color: 'from-violet-500/20 to-purple-500/20',
      iconColor: 'text-violet-400',
      github: `https://github.com/${blogConfig.author.github}/Euklid`,
      status: 'Stable',
    },
    {
      id: 11,
      title: '2048 Python Game',
      description: 'Custom Python implementation of the 2048 grid puzzle featuring smooth animations and high-score persistence.',
      fullDescription: 'Clean Pygame desktop implementation of 2048 with keyboard controls, tile merging animations, and undo history.',
      tech: ['Python', 'Pygame'],
      category: 'python',
      icon: Gamepad2,
      color: 'from-rose-500/20 to-pink-500/20',
      iconColor: 'text-rose-400',
      github: `https://github.com/${blogConfig.author.github}/2048Python`,
      status: 'Game',
    },
    {
      id: 12,
      title: 'K8055 USB Experiment Board',
      description: 'Hardware controller interface in Java for communicating with Velleman K8055 USB experiment boards.',
      fullDescription: 'Java hardware wrapper enabling low-latency digital I/O, analog-to-digital reading, and PWM output for the K8055 board.',
      tech: ['Java', 'USB Native', 'Hardware Control'],
      category: 'tools',
      icon: Usb,
      color: 'from-yellow-500/20 to-amber-500/20',
      iconColor: 'text-yellow-400',
      github: `https://github.com/${blogConfig.author.github}/k8055-USB-BOARD-Java-control`,
      status: 'Hardware',
    },
  ];

  const filterCategories = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'featured', label: '⭐ Featured', icon: Star },
    { id: 'web', label: 'Web & React', icon: Code },
    { id: 'python', label: 'Python & AI', icon: Terminal },
    { id: 'tools', label: 'Tools & Systems', icon: Sparkles },
  ];

  // Tech Stats Distribution Calculation
  const techBreakdown = useMemo(() => {
    return [
      { name: 'Python', count: 6, color: 'bg-emerald-500', percent: '45%' },
      { name: 'React / Web', count: 4, color: 'bg-cyan-500', percent: '32%' },
      { name: 'Java', count: 2, color: 'bg-amber-500', percent: '15%' },
      { name: 'Node.js', count: 1, color: 'bg-purple-500', percent: '8%' },
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    let result = projects.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      if (activeFilter === 'all') return matchesSearch;
      if (activeFilter === 'featured') return matchesSearch && p.featured;
      return matchesSearch && p.category === activeFilter;
    });

    if (sortBy === 'stars') {
      result = [...result].sort((a, b) => (b.stars || 0) - (a.stars || 0));
    } else if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'featured') {
      result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [projects, searchQuery, activeFilter, sortBy]);

  return (
    <div className="min-h-screen bg-background relative text-text overflow-hidden">
      {/* Particle Background */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        
        {/* Header Hero Section */}
        <motion.header
          className="mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-card/90 border border-border/80 rounded-full mb-4 shadow-sm backdrop-blur-md"
          >
            <Sparkles size={16} className="text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-muted">
              Open Source Portfolio • {projects.length} Repositories
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-text via-primary to-secondary bg-clip-text text-transparent tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Projects & Open Source
          </motion.h1>

          {/* Tech Breakdown Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto mt-6 p-4 rounded-2xl bg-card/70 border border-border/80 backdrop-blur-md shadow-md"
          >
            <div className="flex items-center justify-between text-xs font-bold text-muted mb-2">
              <span>Ecosystem Tech Breakdown</span>
              <span>12 Repositories</span>
            </div>
            {/* Progress Bar */}
            <div className="h-2.5 w-full bg-background rounded-full overflow-hidden flex gap-0.5 p-0.5 border border-border/50 mb-3">
              {techBreakdown.map((t) => (
                <div key={t.name} style={{ width: t.percent }} className={`${t.color} h-full rounded-full transition-all`} />
              ))}
            </div>
            {/* Legend */}
            <div className="flex items-center justify-center flex-wrap gap-4 text-xs font-semibold">
              {techBreakdown.map((t) => (
                <div key={t.name} className="flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${t.color}`} />
                  <span className="text-text">{t.name}</span>
                  <span className="text-muted font-mono">({t.percent})</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.header>

        {/* Live GitHub Activity Board */}
        <GitHubActivity username={blogConfig.author.github} />

        {/* Search & Filter Toolbar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Search projects or tech stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-card/80 backdrop-blur-md border border-border/80 rounded-2xl text-xs sm:text-sm text-text placeholder-muted focus:outline-none focus:border-primary transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-muted hover:text-text"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none">
              {filterCategories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeFilter === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105'
                        : 'bg-card/80 border border-border/80 text-muted hover:text-text hover:border-primary/40'
                    }`}
                  >
                    <Icon size={14} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Controls: Sort & Grid/List View */}
            <div className="flex items-center gap-2 justify-end">
              {/* Sort Selector */}
              <div className="flex items-center bg-card/80 border border-border/80 rounded-xl p-1 shadow-sm">
                <SortAsc size={14} className="ml-2 mr-1 text-muted" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-xs font-bold text-text focus:outline-none pr-2 cursor-pointer"
                >
                  <option value="featured" className="bg-card text-text">Featured</option>
                  <option value="stars" className="bg-card text-text">Most Stars</option>
                  <option value="name" className="bg-card text-text">Name (A-Z)</option>
                </select>
              </div>

              {/* View Switcher */}
              <div className="flex items-center bg-card/80 border border-border/80 rounded-xl p-1 shadow-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${viewMode === 'grid' ? 'bg-primary/20 text-primary font-bold' : 'text-muted hover:text-text'}`}
                  title="Grid View"
                >
                  <LayoutGrid size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${viewMode === 'list' ? 'bg-primary/20 text-primary font-bold' : 'text-muted hover:text-text'}`}
                  title="List View"
                >
                  <List size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Projects Grid / List Container */}
        <AnimatePresence mode="popLayout">
          {viewMode === 'grid' ? (
            /* GRID VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project, index) => {
                const ProjectIcon = project.icon;

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                  >
                    <SpotlightCard className="h-full flex flex-col justify-between group">
                      <div>
                        {/* Top Header Row with Custom Icon & Badges */}
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <div className="flex items-center gap-3">
                            <motion.div
                              whileHover={{ rotate: 8, scale: 1.1 }}
                              className={`p-3 rounded-2xl bg-gradient-to-br ${project.color} border border-border/60 ${project.iconColor} shadow-md flex-shrink-0`}
                            >
                              <ProjectIcon size={24} />
                            </motion.div>

                            <div>
                              <h3 
                                onClick={() => setSelectedProject(project)}
                                className="text-lg sm:text-xl font-extrabold text-text group-hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer"
                              >
                                {project.title}
                              </h3>
                              <span className="text-[11px] font-mono text-muted uppercase tracking-wider">
                                {project.category}
                              </span>
                            </div>
                          </div>

                          {/* Badges */}
                          <div className="flex items-center gap-2 flex-shrink-0">
                            {project.featured && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 rounded-full text-[11px] font-bold">
                                <Star size={12} className="fill-amber-400 text-amber-400" />
                                <span>Featured</span>
                              </span>
                            )}

                            {project.stars && (
                              <span className="flex items-center gap-1 text-xs font-semibold text-muted bg-background/60 px-2.5 py-1 rounded-full border border-border/60">
                                <Star size={12} className="text-amber-400 fill-amber-400" />
                                {project.stars}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-muted mb-5 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        {/* Tech Stack Pills (Clickable for fast filtering) */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tech.map((tech) => (
                            <button
                              key={tech}
                              onClick={() => setSearchQuery(tech)}
                              className="px-2.5 py-1 bg-background/80 border border-border/70 text-text hover:border-primary hover:text-primary rounded-lg text-[11px] font-semibold tracking-wide transition-colors cursor-pointer"
                            >
                              {tech}
                            </button>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2.5 pt-4 border-t border-border/50">
                          {project.github && (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-primary/10 hover:opacity-90 transition-all cursor-pointer group/btn"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Github size={15} />
                              <span>Source Code</span>
                              <ArrowUpRight size={14} className="opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </motion.a>
                          )}

                          <button
                            onClick={() => setSelectedProject(project)}
                            className="px-3 py-2.5 bg-card border border-border/80 text-muted hover:text-text hover:border-primary/50 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1"
                            title="Quick Details"
                          >
                            <Info size={15} />
                            <span>Details</span>
                          </button>

                          {project.demo && (
                            <motion.a
                              href={project.demo}
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-card border border-border/80 text-text hover:border-primary/50 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer group/btn"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <ExternalLink size={15} />
                              <span>Live Demo</span>
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            /* LIST VIEW */
            <div className="space-y-4">
              {filteredProjects.map((project, index) => {
                const ProjectIcon = project.icon;

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                    className="p-5 bg-card/80 backdrop-blur-md rounded-2xl border border-border/80 hover:border-primary/50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.color} ${project.iconColor} border border-border/60 flex-shrink-0`}>
                        <ProjectIcon size={22} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 
                            onClick={() => setSelectedProject(project)}
                            className="font-bold text-base text-text group-hover:text-primary transition-colors cursor-pointer"
                          >
                            {project.title}
                          </h3>
                          {project.featured && (
                            <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-bold border border-amber-500/30">
                              Featured
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted max-w-xl line-clamp-1 mt-0.5">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-border/50">
                      <div className="flex gap-1">
                        {project.tech.slice(0, 3).map((t) => (
                          <span key={t} className="px-2 py-0.5 bg-background text-muted text-[10px] font-semibold rounded-md border border-border/60">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1"
                          >
                            <Github size={14} />
                            <span>Code</span>
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            className="px-3 py-1.5 bg-card border border-border text-text hover:border-primary rounded-xl text-xs font-bold transition-all flex items-center gap-1"
                          >
                            <ExternalLink size={14} />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-card/60 rounded-3xl border border-border/80">
            <Search size={40} className="mx-auto mb-3 text-muted" />
            <h3 className="text-lg font-bold text-text mb-1">No projects found</h3>
            <p className="text-xs sm:text-sm text-muted mb-4">Try a different search query or filter.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
              className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Coming Soon Footer Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-card/80 backdrop-blur-xl rounded-3xl border border-border/80 p-8 sm:p-10 text-center relative overflow-hidden shadow-xl"
        >
          <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-4 border border-primary/20">
            <Code size={32} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-text mb-2">
            Constantly Building Open Source
          </h3>
          <p className="text-xs sm:text-sm text-muted max-w-md mx-auto leading-relaxed">
            Follow on GitHub to get real-time updates on new repositories, tools, and releases.
          </p>
          <a
            href={`https://github.com/${blogConfig.author.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all cursor-pointer"
          >
            <Github size={16} />
            <span>Follow @CodingTarik on GitHub</span>
          </a>
        </motion.div>

      </div>

      {/* Quick Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-card border border-border/80 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 z-10 text-text"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-background border border-border text-muted hover:text-text cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${selectedProject.color} ${selectedProject.iconColor} border border-border/60 shadow-md`}>
                  <selectedProject.icon size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-text">{selectedProject.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-mono text-primary font-bold">{selectedProject.category.toUpperCase()}</span>
                    {selectedProject.status && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold">
                        {selectedProject.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <p className="text-sm text-muted leading-relaxed mb-6">
                {selectedProject.fullDescription || selectedProject.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-background border border-border rounded-lg text-xs font-semibold text-text">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-border/60">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl text-sm shadow-md cursor-pointer hover:opacity-90"
                  >
                    <Github size={18} />
                    <span>View Repository</span>
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-card border border-border text-text font-bold rounded-2xl text-sm cursor-pointer hover:border-primary"
                  >
                    <ExternalLink size={18} />
                    <span>Open Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
