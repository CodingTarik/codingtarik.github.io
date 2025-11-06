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
    <div className="min-h-screen py-8 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text mb-4 tracking-tight">
            Search Posts
          </h1>
          <p className="text-lg text-muted">
            Find what you're looking for across all articles.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />
        </div>

        {/* Category Filter */}
        {searchResults.length > 0 && (
          <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
            <div className="flex items-center gap-2 text-sm text-muted">
              <Filter size={16} />
              <span className="font-medium">Filter:</span>
            </div>
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                selectedCategory === null
                  ? 'bg-primary text-white'
                  : 'bg-card border border-card-border hover:border-primary'
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
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-card border border-card-border hover:border-primary'
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
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="mt-4 text-muted">Searching...</p>
          </div>
        ) : searchQuery ? (
          <>
            {/* Results Header */}
            <div className="mb-6">
              <p className="text-muted">
                {filteredResults.length > 0 ? (
                  <>
                    <span className="font-semibold text-text">
                      {filteredResults.length}
                    </span>
                    {' '}result{filteredResults.length !== 1 ? 's' : ''} for{' '}
                    <span className="font-semibold text-text">
                      "{searchQuery}"
                    </span>
                  </>
                ) : (
                  <>
                    No results for{' '}
                    <span className="font-semibold text-text">
                      "{searchQuery}"
                    </span>
                  </>
                )}
              </p>
            </div>

            {/* Results Grid */}
            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {filteredResults.map(post => (
                  <PostCard
                    key={post.id}
                    post={post}
                    onClick={() => onPostClick(post.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-card rounded-lg border border-border p-12 text-center">
                <SearchIcon size={48} className="mx-auto mb-4 text-muted" />
                <h3 className="text-xl font-bold mb-2">
                  No results found
                </h3>
                <p className="text-muted mb-4">
                  Try different keywords or remove filters.
                </p>
                <button
                  onClick={() => handleSearch('')}
                  className="text-primary hover:underline font-medium"
                >
                  Reset search
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="bg-card rounded-lg border border-border p-12 text-center">
            <SearchIcon size={64} className="mx-auto mb-4 text-muted opacity-50" />
            <h3 className="text-xl font-bold mb-2">
              Start your search
            </h3>
            <p className="text-muted">
              Enter a search term to find blog posts
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

