import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { navigate } from '../../../utils/navigation';
import BlogSidebar from './BlogSidebar';

export default function BlogSubpageLayout({ selectedTab, handlePostClick, onCategorySelect, children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <BlogSidebar
        selectedTab={selectedTab}
        onTabChange={(tab) => {
          if (tab === 'posts') navigate('/blog');
          else if (tab === 'search') navigate('/blog/search');
          else if (tab === 'categories') navigate('/blog/categories');
          else if (tab === 'projects') navigate('/blog/projects');
          else if (tab === 'tools') navigate('/tools');
        }}
        onCategorySelect={onCategorySelect || (() => { })}
        selectedCategory={null}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="lg:ml-72 flex-1">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden fixed bottom-6 right-6 p-3 sm:p-4 bg-primary text-white rounded-full shadow-lg shadow-primary/30 hover:scale-110 transition-transform z-30 cursor-pointer"
        >
          <Menu size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}
