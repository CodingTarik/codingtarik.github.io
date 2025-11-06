import React, { useState, useMemo, useEffect } from 'react';
import { Search, Menu, X, Tag, Filter, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedPostCard from './AnimatedPostCard';
import BlogSidebar from './BlogSidebar';
import CategoriesPage from './CategoriesPage';
import ProjectsPage from './ProjectsPage';
import { getAllPosts, getPostsByCategory, getAllCategories } from '../utils/blogUtils';
import { generateBlogStructuredData, injectStructuredData } from '../utils/seoUtils';
import SearchBar from './SearchBar';

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
    setIsSidebarOpen(false); // Close mobile sidebar
    
    // Navigate to appropriate route
    if (tabId === 'posts') {
      window.location.hash = '#/blog';
      setSelectedCategory(null);
      setSearchQuery('');
    } else if (tabId === 'search') {
      window.location.hash = '#/blog/search';
    } else if (tabId === 'categories') {
      window.location.hash = '#/blog/categories';
    } else if (tabId === 'projects') {
      window.location.hash = '#/blog/projects';
    } else if (tabId === 'cv') {
      window.location.hash = '#/cv';
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedTab('posts'); // Always switch to posts view when category is selected (including null for "All Posts")
  };

  return (
    <div className="flex">
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
          className="lg:hidden fixed bottom-6 right-6 p-4 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform z-30"
        >
          <Menu size={24} />
        </button>

        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          {selectedTab === 'posts' && !searchQuery && !selectedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-6"
              >
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Welcome to my Blog</span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Thoughts & Code
              </h1>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Exploring software development, cybersecurity, and everything in between
              </p>
            </motion.div>
          )}
          
          {/* Search Bar and Category Filter */}
          {selectedTab === 'posts' && (
            <div className="mb-6">
              {/* Search Bar */}
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <SearchBar
                  onSearch={(query) => {
                    window.location.hash = `#/blog/search?q=${encodeURIComponent(query)}`;
                  }}
                />
              </motion.div>

              {/* Category Filter Section */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-sm font-medium text-muted">
                  Filter by category:
                </span>
                
                {/* Show all categories as filter chips */}
                {getAllCategories().map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category === selectedCategory ? null : category)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-card text-text border border-card-border hover:border-primary'
                    }`}
                  >
                    <span>{category}</span>
                    {selectedCategory === category && (
                      <X size={12} />
                    )}
                  </button>
                ))}
              </div>

              {/* Active Filter Badge */}
              {selectedCategory && (
                <div className="mb-4 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Tag size={16} />
                      <span>
                        Showing posts in: <strong>{selectedCategory}</strong>
                      </span>
                    </div>
                    <button
                      onClick={() => handleCategorySelect(null)}
                      className="p-1 hover:bg-primary/20 rounded transition-colors"
                      title="Remove filter"
                    >
                      <X size={16} className="text-primary" />
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
                <motion.div 
                  className="grid grid-cols-1 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {filteredPosts.map((post, index) => (
                    <AnimatedPostCard
                      key={post.id}
                      post={post}
                      onClick={() => onPostClick(post.id)}
                      index={index}
                    />
                  ))}
                </motion.div>
              ) : (
                <div className="bg-card rounded-lg border border-border p-12 text-center">
                  <Filter size={48} className="mx-auto mb-4 text-muted" />
                  <h3 className="text-xl font-bold mb-2">
                    No posts found
                  </h3>
                  <p className="text-muted mb-4">
                    There are no posts matching your current filter.
                  </p>
                  <button
                    onClick={() => handleCategorySelect(null)}
                    className="text-primary hover:underline font-medium"
                  >
                    Clear filter
                  </button>
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

