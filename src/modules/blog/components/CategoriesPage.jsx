import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, FileText, TrendingUp, Grid, List, Search, Sparkles, BarChart3 } from 'lucide-react';
import { getAllCategories, getPostsByCategory, getAllPosts } from '../utils/blogUtils';
import ParticleBackground from './ParticleBackground';

export default function CategoriesPage({ onCategorySelect }) {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = getAllCategories();
  const allPosts = getAllPosts();
  
  // Get post count for each category
  const categoriesWithCount = categories.map(category => {
    const posts = getPostsByCategory(category);
    return {
      name: category,
      count: posts.length,
      posts: posts,
      // Calculate category color based on name hash
      color: getCategoryColor(category)
    };
  });

  // Sort by post count (most popular first)
  const sortedCategories = [...categoriesWithCount].sort((a, b) => b.count - a.count);
  
  // Filter by search
  const filteredCategories = sortedCategories.filter(cat => 
    cat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get category color based on name
  function getCategoryColor(name) {
    const colors = [
      { bg: 'bg-blue-500/10', text: 'text-blue-500', hover: 'hover:bg-blue-500', gradient: 'from-blue-500 to-cyan-500' },
      { bg: 'bg-purple-500/10', text: 'text-purple-500', hover: 'hover:bg-purple-500', gradient: 'from-purple-500 to-pink-500' },
      { bg: 'bg-green-500/10', text: 'text-green-500', hover: 'hover:bg-green-500', gradient: 'from-green-500 to-emerald-500' },
      { bg: 'bg-orange-500/10', text: 'text-orange-500', hover: 'hover:bg-orange-500', gradient: 'from-orange-500 to-red-500' },
      { bg: 'bg-pink-500/10', text: 'text-pink-500', hover: 'hover:bg-pink-500', gradient: 'from-pink-500 to-rose-500' },
      { bg: 'bg-indigo-500/10', text: 'text-indigo-500', hover: 'hover:bg-indigo-500', gradient: 'from-indigo-500 to-purple-500' },
    ];
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Particle Background */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-8 relative z-10">
        {/* Hero Header */}
        <motion.header 
          className="mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-6"
          >
            <FolderOpen size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Explore Topics</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Categories
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Discover {categories.length} categories with {allPosts.length} posts
          </motion.p>
        </motion.header>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          <div className="bg-card rounded-xl border border-border p-4 text-center">
            <BarChart3 size={24} className="mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold text-text">{categories.length}</div>
            <div className="text-sm text-muted">Categories</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-4 text-center">
            <FileText size={24} className="mx-auto mb-2 text-secondary" />
            <div className="text-2xl font-bold text-text">{allPosts.length}</div>
            <div className="text-sm text-muted">Total Posts</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-4 text-center">
            <TrendingUp size={24} className="mx-auto mb-2 text-accent" />
            <div className="text-2xl font-bold text-text">
              {sortedCategories[0]?.name || 'N/A'}
            </div>
            <div className="text-sm text-muted">Most Popular</div>
          </div>
        </motion.div>

        {/* Search & View Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          {/* Search */}
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-text placeholder:text-muted"
            />
          </div>
          
          {/* View Toggle */}
          <div className="flex gap-2 bg-card border border-border rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-md transition-all ${
                viewMode === 'grid' 
                  ? 'bg-primary text-white' 
                  : 'text-muted hover:text-text'
              }`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-md transition-all ${
                viewMode === 'list' 
                  ? 'bg-primary text-white' 
                  : 'text-muted hover:text-text'
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </motion.div>

        {/* Categories Display */}
        {filteredCategories.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {/* All Posts Card */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => onCategorySelect(null)}
              className="group relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border-2 border-primary/20 p-6 hover:shadow-xl hover:border-primary transition-all text-left overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-br from-primary to-secondary rounded-xl`}>
                    <Sparkles size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {allPosts.length}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-text mb-2">
                  All Posts
                </h2>
                <p className="text-sm text-muted">
                  Browse all blog posts
                </p>
              </div>
            </motion.button>

            {/* Individual Categories */}
            {filteredCategories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => onCategorySelect(category.name)}
                className="group relative bg-card rounded-xl border border-border p-6 hover:shadow-xl hover:border-primary transition-all text-left overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 ${category.color.bg} rounded-xl group-hover:bg-gradient-to-br ${category.color.gradient} transition-all`}>
                      <FolderOpen size={24} className={`${category.color.text} group-hover:text-white transition-colors`} />
                    </div>
                    <div className={`text-3xl font-bold ${category.color.text}`}>
                      {category.count}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h2>
                  <p className="text-sm text-muted">
                    {category.count} {category.count === 1 ? 'post' : 'posts'}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mt-4 h-2 bg-background rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${category.color.gradient}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(category.count / allPosts.length) * 100}%` }}
                      transition={{ delay: 0.8 + index * 0.05, duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  initial={false}
                />
              </motion.button>
            ))}
          </div>
        ) : searchQuery ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-card rounded-xl border border-border p-12 text-center"
          >
            <Search size={48} className="mx-auto mb-4 text-muted" />
            <p className="text-muted text-lg mb-2">
              No categories found for "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-primary hover:underline text-sm"
            >
              Clear search
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-card rounded-xl border border-border p-12 text-center"
          >
            <FolderOpen size={48} className="mx-auto mb-4 text-muted" />
            <p className="text-muted text-lg">
              No categories yet.
            </p>
            <p className="text-sm text-muted mt-2 opacity-75">
              Categories will appear here once you create blog posts with categories.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

