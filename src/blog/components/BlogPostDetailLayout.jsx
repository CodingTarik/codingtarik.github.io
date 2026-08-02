import React, { useState } from 'react';
import { navigate } from '../../utils/navigation';
import BlogSidebar from './BlogSidebar';
import SearchBar from './SearchBar';
import PostDetail from './PostDetail';
import TableOfContents from './TableOfContents';
import RecentPosts from './RecentPosts';
import ScrollToTop from './ScrollToTop';

export default function BlogPostDetailLayout({ currentPost, handleBackToBlog, handlePostClick, language }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <BlogSidebar
        selectedTab="posts"
        onTabChange={(tab) => {
          if (tab === 'posts') navigate('/blog');
          else if (tab === 'search') navigate('/blog/search');
          else if (tab === 'categories') navigate('/blog/categories');
          else if (tab === 'projects') navigate('/blog/projects');
        }}
        onCategorySelect={() => { }}
        selectedCategory={null}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content - Blog Post */}
      <div className="lg:ml-80 flex-1 flex flex-col xl:flex-row">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden fixed bottom-6 right-6 p-3 sm:p-4 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full shadow-lg hover:scale-110 transition-transform z-30"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Post Content */}
        <div className="flex-1 max-w-4xl mx-auto px-3 sm:px-4 md:px-8 py-3 sm:py-4 md:py-8">
          {/* Search Bar - Top Right */}
          <div className="mb-4 sm:mb-6 flex justify-end">
            <div className="w-full md:w-96">
              <SearchBar
                onSearch={(query) => {
                  navigate(`/blog/search?q=${encodeURIComponent(query)}`);
                }}
              />
            </div>
          </div>

          <PostDetail post={currentPost} onBack={handleBackToBlog} onPostClick={handlePostClick} />
        </div>

        {/* Right Sidebar - Table of Contents & Recent Posts (Hidden on mobile) */}
        <div className="hidden xl:block w-80 shrink-0 p-4 md:p-8 space-y-6">
          <TableOfContents content={currentPost.content} />
          <RecentPosts
            onPostClick={handlePostClick}
            currentPostId={currentPost.id}
          />
        </div>

        <ScrollToTop />
      </div>
    </div>
  );
}
