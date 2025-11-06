import React, { useState, useEffect, useMemo } from 'react';
import { Search as SearchIcon, Filter, X } from 'lucide-react';
import SearchBar from './SearchBar';
import PostCard from './PostCard';
import { searchPostsAdvanced, getAllCategories } from '../utils/blogUtils';

export default function SearchPage({ onPostClick }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

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

  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate async search with timeout for better UX
    setTimeout(() => {
      const results = searchPostsAdvanced(query);
      setSearchResults(results);
      setIsSearching(false);
      
      // Update URL
      window.location.hash = `#/blog/search?q=${encodeURIComponent(query)}`;
    }, 100);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory(null);
    performSearch(query);
  };

  const filteredResults = useMemo(() => {
    if (!selectedCategory) return searchResults;
    return searchResults.filter(post => 
      post.categories && post.categories.includes(selectedCategory)
    );
  }, [searchResults, selectedCategory]);

  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-3">
            <SearchIcon size={32} />
            <span>Search</span>
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            Search all blog posts by title, description and content
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />
        </div>

        {/* Category Filter */}
        {searchResults.length > 0 && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
              <Filter size={16} />
              <span className="font-medium">Filter:</span>
            </div>
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
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
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        )}

        {/* Results */}
        {isSearching ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-stone-900 dark:border-stone-100"></div>
            <p className="mt-4 text-stone-600 dark:text-stone-400">Searching...</p>
          </div>
        ) : searchQuery ? (
          <>
            {/* Results Header */}
            <div className="mb-6">
              <p className="text-stone-600 dark:text-stone-400">
                {filteredResults.length > 0 ? (
                  <>
                    <span className="font-semibold text-stone-900 dark:text-stone-100">
                      {filteredResults.length}
                    </span>
                    {' '}result{filteredResults.length !== 1 ? 's' : ''} for{' '}
                    <span className="font-semibold text-stone-900 dark:text-stone-100">
                      "{searchQuery}"
                    </span>
                  </>
                ) : (
                  <>
                    No results for{' '}
                    <span className="font-semibold text-stone-900 dark:text-stone-100">
                      "{searchQuery}"
                    </span>
                  </>
                )}
              </p>
            </div>

            {/* Results Grid */}
            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResults.map(post => (
                  <PostCard
                    key={post.id}
                    post={post}
                    onClick={() => onPostClick(post.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-12 text-center">
                <SearchIcon size={48} className="mx-auto mb-4 text-stone-400" />
                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                  No results found
                </h3>
                <p className="text-stone-600 dark:text-stone-400 mb-4">
                  Try different keywords or remove filters.
                </p>
                <button
                  onClick={() => handleSearch('')}
                  className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
                >
                  Reset search
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-12 text-center">
            <SearchIcon size={64} className="mx-auto mb-4 text-stone-300 dark:text-stone-600" />
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
              Start your search
            </h3>
            <p className="text-stone-600 dark:text-stone-400">
              Enter a search term to find blog posts
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

