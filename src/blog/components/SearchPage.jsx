import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search as SearchIcon, 
  Filter, 
  X, 
  TrendingUp, 
  Clock, 
  Sparkles,
  Zap,
  Target,
  SortAsc,
  SortDesc,
  Calendar,
  Star
} from 'lucide-react';
import SearchBar from './SearchBar';
import AnimatedPostCard from './AnimatedPostCard';
import ParticleBackground from './ParticleBackground';
import { 
  searchPostsAdvanced, 
  getAllCategories, 
  getSearchSuggestions,
  getAllPosts 
} from '../utils/blogUtils';
import { trackSearch, trackCategoryClick } from './Analytics';

export default function SearchPage({ onPostClick }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [sortBy, setSortBy] = useState('relevance'); // 'relevance', 'date', 'title'
  const [recentSearches, setRecentSearches] = useState([]);

  // Load recent searches from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('recentSearches');
    if (stored) {
      setRecentSearches(JSON.parse(stored));
    }
  }, []);

  // Get query from URL hash if present
  useEffect(() => {
    const hash = window.location.hash;
    const match = hash.match(/^#\/blog\/search\?q=(.+)$/);
    if (match) {
      const query = decodeURIComponent(match[1]);
      setSearchQuery(query);
      performSearch(query);
    }
  }, []);

  // Update suggestions as user types
  useEffect(() => {
    if (searchQuery.length >= 2 && !isSearching) {
      const newSuggestions = getSearchSuggestions(searchQuery, 5);
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery, isSearching]);

  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    setShowSuggestions(false);
    
    // Save to recent searches
    const newRecent = [query, ...recentSearches.filter(q => q !== query)].slice(0, 5);
    setRecentSearches(newRecent);
    localStorage.setItem('recentSearches', JSON.stringify(newRecent));
    
    // Simulate async search with timeout for better UX
    setTimeout(() => {
      const results = searchPostsAdvanced(query);
      setSearchResults(results);
      setIsSearching(false);
      
      // Track search with results count
      trackSearch(query, results.length);
      
      // Update URL
      window.location.hash = `#/blog/search?q=${encodeURIComponent(query)}`;
    }, 300);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory(null);
    performSearch(query);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    performSearch(suggestion);
  };

  const handleRecentSearchClick = (query) => {
    setSearchQuery(query);
    performSearch(query);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  const filteredAndSortedResults = useMemo(() => {
    let results = searchResults;

    // Filter by category
    if (selectedCategory) {
      results = results.filter(post => 
        post.categories && post.categories.includes(selectedCategory)
      );
    }

    // Sort results
    if (sortBy === 'date') {
      results = [...results].sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'title') {
      results = [...results].sort((a, b) => a.title.localeCompare(b.title));
    }
    // 'relevance' is already sorted by Fuse.js

    return results;
  }, [searchResults, selectedCategory, sortBy]);

  const categories = getAllCategories();
  const allPosts = getAllPosts();

  // Get popular search terms (based on categories)
  const popularSearches = categories.slice(0, 5);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Particle Background */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 relative z-10">
        {/* Hero Header */}
        <motion.header 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-6"
          >
            <Zap size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Powered by Fuse.js</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Search Posts
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Find what you're looking for across {allPosts.length} articles with advanced fuzzy search
          </motion.p>
        </motion.header>

        {/* Search Bar with Suggestions */}
        <motion.div 
          className="mb-8 max-w-3xl mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <SearchBar 
            onSearch={handleSearch} 
            initialQuery={searchQuery}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          
          {/* Search Suggestions Dropdown */}
          <AnimatePresence>
            {showSuggestions && suggestions.length > 0 && !isSearching && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-xl overflow-hidden z-50"
              >
                <div className="p-2">
                  <div className="text-xs font-semibold text-muted px-3 py-2">
                    Suggestions
                  </div>
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left px-3 py-2 rounded-md hover:bg-primary/10 transition-colors flex items-center gap-2 text-text"
                    >
                      <SearchIcon size={14} className="text-muted" />
                      <span>{suggestion}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Stats & Quick Actions */}
        {!searchQuery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8 space-y-6"
          >
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock size={20} className="text-primary" />
                    <h3 className="font-bold text-text">Recent Searches</h3>
                  </div>
                  <button
                    onClick={clearRecentSearches}
                    className="text-xs text-muted hover:text-text transition-colors"
                  >
                    Clear
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((query, index) => (
                    <button
                      key={index}
                      onClick={() => handleRecentSearchClick(query)}
                      className="px-3 py-1.5 bg-background rounded-full text-sm text-text hover:bg-primary hover:text-white transition-all"
                    >
                      {query}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches */}
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={20} className="text-secondary" />
                <h3 className="font-bold text-text">Popular Topics</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((topic, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(topic)}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-sm font-medium text-text hover:from-primary hover:to-secondary hover:text-white transition-all"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter & Sort Bar */}
        {searchResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 space-y-4"
          >
            {/* Sort Options */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-card rounded-xl border border-border p-4">
              <div className="flex items-center gap-2">
                <Target size={18} className="text-primary" />
                <span className="text-sm font-medium text-text">Sort by:</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSortBy('relevance')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    sortBy === 'relevance'
                      ? 'bg-primary text-white'
                      : 'bg-background text-text hover:bg-primary/10'
                  }`}
                >
                  <Star size={14} />
                  Relevance
                </button>
                <button
                  onClick={() => setSortBy('date')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    sortBy === 'date'
                      ? 'bg-primary text-white'
                      : 'bg-background text-text hover:bg-primary/10'
                  }`}
                >
                  <Calendar size={14} />
                  Date
                </button>
                <button
                  onClick={() => setSortBy('title')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    sortBy === 'title'
                      ? 'bg-primary text-white'
                      : 'bg-background text-text hover:bg-primary/10'
                  }`}
                >
                  <SortAsc size={14} />
                  Title
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2 bg-card rounded-xl border border-border p-4">
              <div className="flex items-center gap-2 text-sm text-muted">
                <Filter size={16} />
                <span className="font-medium">Filter:</span>
              </div>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === null
                    ? 'bg-primary text-white'
                    : 'bg-background text-text hover:bg-primary/10'
                }`}
              >
                All ({searchResults.length})
              </button>
              {categories.map(category => {
                const count = searchResults.filter(p => 
                  p.categories && p.categories.includes(category)
                ).length;
                
                if (count === 0) return null;
                
                return (
                  <button
                    key={category}
                    onClick={() => {
                      const newCategory = selectedCategory === category ? null : category;
                      if (newCategory) trackCategoryClick(newCategory);
                      setSelectedCategory(newCategory);
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-background text-text hover:bg-primary/10'
                    }`}
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Results */}
        {isSearching ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            <p className="mt-4 text-muted font-medium">Searching with AI-powered fuzzy matching...</p>
          </motion.div>
        ) : searchQuery ? (
          <>
            {/* Results Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 bg-card rounded-xl border border-border p-4"
            >
              <p className="text-text">
                {filteredAndSortedResults.length > 0 ? (
                  <>
                    Found{' '}
                    <span className="font-bold text-primary text-xl">
                      {filteredAndSortedResults.length}
                    </span>
                    {' '}result{filteredAndSortedResults.length !== 1 ? 's' : ''} for{' '}
                    <span className="font-semibold">
                      "{searchQuery}"
                    </span>
                  </>
                ) : (
                  <>
                    No results for{' '}
                    <span className="font-semibold">
                      "{searchQuery}"
                    </span>
                  </>
                )}
              </p>
            </motion.div>

            {/* Results Grid */}
            {filteredAndSortedResults.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {filteredAndSortedResults.map((post, index) => (
                  <AnimatedPostCard
                    key={post.id}
                    post={post}
                    onClick={() => onPostClick(post.id)}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card rounded-xl border border-border p-16 text-center"
              >
                <SearchIcon size={64} className="mx-auto mb-4 text-muted" />
                <h3 className="text-2xl font-bold mb-2 text-text">
                  No results found
                </h3>
                <p className="text-muted mb-6 max-w-md mx-auto">
                  Try different keywords, check your spelling, or remove filters to see more results.
                </p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all font-medium"
                  >
                    Clear Filters
                  </button>
                  <button
                    onClick={() => handleSearch('')}
                    className="px-4 py-2 bg-background text-text rounded-lg hover:bg-primary/10 transition-all font-medium"
                  >
                    Reset Search
                  </button>
                </div>
              </motion.div>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}

