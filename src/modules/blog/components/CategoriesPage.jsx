import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, FileText, TrendingUp, Grid, List, Search, Sparkles, BarChart3 } from 'lucide-react';
import { getAllCategories, getPostsByCategory, getAllPosts } from '../utils/blogUtils';
import ParticleBackground from './ParticleBackground';

export default function CategoriesPage({ onCategorySelect }) {
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = getAllCategories();
  const allPosts = getAllPosts();
  
  const categoriesWithCount = categories.map(category => {
    const posts = getPostsByCategory(category);
    return {
      name: category,
      count: posts.length,
      posts: posts,
      color: getCategoryColor(category)
    };
  });

  const sortedCategories = [...categoriesWithCount].sort((a, b) => b.count - a.count);
  
  const filteredCategories = sortedCategories.filter(cat => 
    cat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-8 relative z-10">
        {/* Header */}
        <motion.header 
          className="mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
          >
            <FolderOpen size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Explore Topics</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Categories
          </h1>
          
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Discover {categories.length} categories with {allPosts.length} posts
          </p>
        </motion.header>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          <div className="bg-card rounded-xl border border-border p-4 text-center shadow-sm">
            <BarChart3 size={24} className="mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold text-text">{categories.length}</div>
            <div className="text-sm text-muted">Categories</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-4 text-center shadow-sm">
            <FileText size={24} className="mx-auto mb-2 text-secondary" />
            <div className="text-2xl font-bold text-text">{allPosts.length}</div>
            <div className="text-sm text-muted">Total Posts</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-4 text-center shadow-sm">
            <TrendingUp size={24} className="mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold text-text truncate px-2">
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
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-text placeholder:text-muted shadow-sm"
            />
          </div>
          
          <div className="flex gap-1 bg-card border border-border rounded-xl p-1 self-end sm:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2.5 rounded-lg transition-all ${
                viewMode === 'grid' 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-muted hover:text-text'
              }`}
              title="Grid View"
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2.5 rounded-lg transition-all ${
                viewMode === 'list' 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-muted hover:text-text'
              }`}
              title="List View"
            >
              <List size={18} />
            </button>
          </div>
        </motion.div>

        {/* Categories Display */}
        {filteredCategories.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-3'}>
            {/* All Posts Card */}
            {viewMode === 'grid' ? (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ y: -4 }}
                onClick={() => onCategorySelect(null)}
                className="group relative bg-card rounded-2xl border-2 border-primary/30 p-6 hover:shadow-xl hover:border-primary transition-all text-left overflow-hidden w-full cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl text-white">
                    <Sparkles size={24} />
                  </div>
                  <span className="text-3xl font-extrabold text-primary">
                    {allPosts.length}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-text mb-1 group-hover:text-primary transition-colors">
                  All Posts
                </h2>
                <p className="text-sm text-muted">
                  Browse all blog posts
                </p>
              </motion.button>
            ) : (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ x: 4 }}
                onClick={() => onCategorySelect(null)}
                className="group w-full bg-card border-2 border-primary/30 rounded-xl p-4 flex items-center justify-between hover:border-primary hover:shadow-md transition-all text-left cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-gradient-to-br from-primary to-secondary rounded-lg text-white">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h2 className="font-bold text-text group-hover:text-primary transition-colors">
                      All Posts
                    </h2>
                    <p className="text-xs text-muted">Browse all blog posts</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary font-bold text-sm rounded-full">
                    {allPosts.length} posts
                  </span>
                </div>
              </motion.button>
            )}

            {/* Individual Categories */}
            {filteredCategories.map((category, index) => {
              if (viewMode === 'grid') {
                return (
                  <motion.button
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    whileHover={{ y: -4 }}
                    onClick={() => onCategorySelect(category.name)}
                    className="group relative bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:border-primary transition-all text-left overflow-hidden w-full cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 ${category.color.bg} rounded-xl group-hover:bg-gradient-to-br ${category.color.gradient} transition-all`}>
                          <FolderOpen size={24} className={`${category.color.text} group-hover:text-white transition-colors`} />
                        </div>
                        <span className={`text-3xl font-extrabold ${category.color.text}`}>
                          {category.count}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-text mb-1 group-hover:text-primary transition-colors">
                        {category.name}
                      </h2>
                      <p className="text-sm text-muted mb-4">
                        {category.count} {category.count === 1 ? 'post' : 'posts'}
                      </p>
                    </div>

                    <div className="h-1.5 w-full bg-background rounded-full overflow-hidden mt-2">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color.gradient}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.max(10, (category.count / allPosts.length) * 100)}%` }}
                        transition={{ delay: 0.8 + index * 0.05, duration: 0.5 }}
                      />
                    </div>
                  </motion.button>
                );
              }

              // List Mode Item
              return (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  whileHover={{ x: 4 }}
                  onClick={() => onCategorySelect(category.name)}
                  className="group w-full bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:border-primary hover:shadow-md transition-all text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 ${category.color.bg} rounded-lg group-hover:bg-gradient-to-br ${category.color.gradient} transition-all`}>
                      <FolderOpen size={20} className={`${category.color.text} group-hover:text-white transition-colors`} />
                    </div>
                    <div>
                      <h2 className="font-bold text-text group-hover:text-primary transition-colors">
                        {category.name}
                      </h2>
                      <p className="text-xs text-muted">
                        {category.count} {category.count === 1 ? 'post' : 'posts'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-24 sm:w-32 h-2 bg-background rounded-full overflow-hidden hidden sm:block">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color.gradient}`}
                        style={{ width: `${Math.max(10, (category.count / allPosts.length) * 100)}%` }}
                      />
                    </div>
                    <span className={`px-3 py-1 ${category.color.bg} ${category.color.text} font-bold text-xs rounded-full`}>
                      {category.count} {category.count === 1 ? 'post' : 'posts'}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        ) : searchQuery ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-card rounded-xl border border-border p-12 text-center"
          >
            <Search size={48} className="mx-auto mb-4 text-muted" />
            <p className="text-muted text-lg mb-2">No categories found matching "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-primary hover:underline font-medium text-sm"
            >
              Clear search
            </button>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}
