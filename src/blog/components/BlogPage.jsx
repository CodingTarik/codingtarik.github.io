import React, { useState, useMemo, useEffect } from 'react';
import PostCard from './PostCard';
import BlogSidebar from './BlogSidebar';
import { searchPosts, getPostsByCategory, getAllPosts } from '../utils/blogUtils';
import { generateBlogStructuredData, injectStructuredData } from '../utils/seoUtils';

export default function BlogPage({ onPostClick, onBackToLearnBuddy }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  // Get filtered posts
  const filteredPosts = useMemo(() => {
    let posts = getAllPosts();

    // Filter by category if selected
    if (selectedCategory) {
      posts = getPostsByCategory(selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      posts = searchPosts(searchQuery);
      // If category is also selected, filter further
      if (selectedCategory) {
        posts = posts.filter(post => 
          post.categories && post.categories.includes(selectedCategory)
        );
      }
    }

    return posts;
  }, [searchQuery, selectedCategory]);

  const handleHomeClick = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 flex">
      {/* Left Sidebar */}
      <BlogSidebar
        onPostClick={onPostClick}
        onBackToLearnBuddy={onBackToLearnBuddy}
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
        onHomeClick={handleHomeClick}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content Area */}
      <div className="ml-80 flex-1 p-8">
        <div className="max-w-4xl mx-auto">
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
            <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-12 text-center">
              <p className="text-stone-600 dark:text-stone-400 text-lg">
                Keine Beiträge gefunden.
              </p>
              {(searchQuery || selectedCategory) && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                  }}
                  className="mt-4 text-purple-600 dark:text-purple-400 hover:underline font-medium"
                >
                  Filter zurücksetzen
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

