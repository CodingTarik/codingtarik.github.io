import React, { useState, useMemo, useEffect } from 'react';
import { Search, Menu, X, Tag } from 'lucide-react';
import PostCard from './PostCard';
import BlogSidebar from './BlogSidebar';
import CategoriesPage from './CategoriesPage';
import ProjectsPage from './ProjectsPage';
import { getAllPosts, getPostsByCategory, getAllCategories } from '../utils/blogUtils';
import { generateBlogStructuredData, injectStructuredData } from '../utils/seoUtils';

export default function BlogPage({ onPostClick, onBackToLearnBuddy }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTab, setSelectedTab] = useState('posts');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Update SEO for blog homepage
  useEffect(() => {
    document.title = "Tarik's Blog - Gedanken, Projekte & Erfahrungen";
    
    // Inject structured data
    const structuredData = generateBlogStructuredData();
    injectStructuredData(structuredData);

    return () => {
      document.title = 'LearnBuddy';
      const script = document.querySelector('script[type="application/ld+json"]');
      if (script) script.remove();
    };
  }, []);

  // Semantic search function - searches only title and description
  const searchPostsSemanticly = (query) => {
    if (!query || query.trim() === '') {
      return getAllPosts();
    }

    const lowerQuery = query.toLowerCase().trim();
    const searchTerms = lowerQuery.split(' ').filter(term => term.length > 0);
    
    return getAllPosts().filter(post => {
      const titleLower = post.title.toLowerCase();
      const descriptionLower = (post.description || '').toLowerCase();
      
      // Check if any search term matches title or description
      return searchTerms.some(term => 
        titleLower.includes(term) || descriptionLower.includes(term)
      );
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  // Get filtered posts
  const filteredPosts = useMemo(() => {
    let posts = getAllPosts();

    // Filter by category if selected
    if (selectedCategory) {
      posts = getPostsByCategory(selectedCategory);
    }

    // Filter by search query (semantic search on title & description)
    if (searchQuery.trim()) {
      const searchResults = searchPostsSemanticly(searchQuery);
      // If category is also selected, filter further
      if (selectedCategory) {
        posts = searchResults.filter(post => 
          post.categories && post.categories.includes(selectedCategory)
        );
      } else {
        posts = searchResults;
      }
    }

    return posts;
  }, [searchQuery, selectedCategory]);

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
    if (tabId === 'posts') {
      setSelectedCategory(null);
      setSearchQuery('');
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedTab('posts'); // Always switch to posts view when category is selected (including null for "All Posts")
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 flex">
      {/* Left Sidebar */}
      <BlogSidebar
        onBackToLearnBuddy={onBackToLearnBuddy}
        selectedTab={selectedTab}
        onTabChange={handleTabChange}
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="lg:ml-80 flex-1 p-4 md:p-8">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden fixed bottom-6 right-6 p-4 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full shadow-lg hover:scale-110 transition-transform z-30"
        >
          <Menu size={24} />
        </button>

        <div className="max-w-4xl mx-auto">
          {/* Search Bar and Category Filter */}
          {selectedTab === 'posts' && (
            <div className="mb-6">
              {/* Search Bar */}
              <div className="flex justify-end mb-4">
                <div className="relative w-full md:w-96">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 dark:focus:ring-stone-100 text-sm text-stone-900 dark:text-stone-100 placeholder-stone-500"
                  />
                </div>
              </div>

              {/* Category Filter Section */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-sm text-stone-600 dark:text-stone-400 font-medium">
                  Filter:
                </span>
                
                {/* Show all categories as filter chips */}
                {getAllCategories().map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category === selectedCategory ? null : category)}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 border-2 border-stone-900 dark:border-stone-100'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-600 hover:border-stone-900 dark:hover:border-stone-100'
                    }`}
                  >
                    <Tag size={12} />
                    <span>{category}</span>
                    {selectedCategory === category && (
                      <X size={12} />
                    )}
                  </button>
                ))}

                {/* Clear all filters button */}
                {selectedCategory && (
                  <button
                    onClick={() => handleCategorySelect(null)}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-600 hover:bg-red-200 dark:hover:bg-red-900/50 transition-all"
                  >
                    <X size={12} />
                    <span>Clear Filter</span>
                  </button>
                )}
              </div>

              {/* Active Filter Badge */}
              {selectedCategory && (
                <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-blue-900 dark:text-blue-100">
                      <Tag size={16} />
                      <span>
                        Showing posts in: <strong>{selectedCategory}</strong>
                      </span>
                    </div>
                    <button
                      onClick={() => handleCategorySelect(null)}
                      className="p-1 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded transition-colors"
                      title="Remove filter"
                    >
                      <X size={16} className="text-blue-900 dark:text-blue-100" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Blog Posts */}
          {selectedTab === 'posts' && (
            <>
              {filteredPosts.length > 0 ? (
                <div className="space-y-6">
                  {filteredPosts.map(post => (
                    <PostCard
                      key={post.id}
                      post={post}
                      onClick={() => onPostClick(post.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-12 text-center">
                  <p className="text-stone-600 dark:text-stone-400 text-lg">
                    No posts found.
                  </p>
                  {(searchQuery || selectedCategory) && (
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory(null);
                      }}
                      className="mt-4 text-stone-900 dark:text-stone-100 hover:underline font-medium"
                    >
                      Reset filters
                    </button>
                  )}
                </div>
              )}
            </>
          )}

          {/* Categories Page */}
          {selectedTab === 'categories' && (
            <CategoriesPage onCategorySelect={handleCategorySelect} />
          )}

          {/* Projects Page */}
          {selectedTab === 'projects' && (
            <ProjectsPage />
          )}
        </div>
      </div>
    </div>
  );
}

