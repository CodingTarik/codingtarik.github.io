import React from 'react';
import { FileText, FolderOpen, Search, GraduationCap } from 'lucide-react';
import { navigate, getPath } from '../../../utils/navigation';

export default function BlogSubNav() {
  const currentPath = getPath();

  const isPosts = currentPath === '/blog' || currentPath === '/' || currentPath === '' || currentPath.startsWith('/blog/post');
  const isLearningHub = currentPath.startsWith('/learning-hub');
  const isCategories = currentPath === '/blog/categories';
  const isSearch = currentPath.startsWith('/blog/search');

  return (
    <div className="flex items-center justify-start sm:justify-center mb-8">
      <div className="inline-flex items-center p-1.5 bg-card border border-border rounded-2xl shadow-sm gap-1">
        <button
          onClick={() => navigate('/blog')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            isPosts
              ? 'bg-primary text-white shadow-sm'
              : 'text-muted hover:text-text hover:bg-border/30'
          }`}
        >
          <FileText size={15} />
          <span>Articles</span>
        </button>

        <button
          onClick={() => navigate('/learning-hub')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            isLearningHub
              ? 'bg-primary text-white shadow-sm'
              : 'text-muted hover:text-text hover:bg-border/30'
          }`}
        >
          <GraduationCap size={15} />
          <span>Kurse</span>
        </button>

        <button
          onClick={() => navigate('/blog/categories')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            isCategories
              ? 'bg-primary text-white shadow-sm'
              : 'text-muted hover:text-text hover:bg-border/30'
          }`}
        >
          <FolderOpen size={15} />
          <span>Categories</span>
        </button>

        <button
          onClick={() => navigate('/blog/search')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            isSearch
              ? 'bg-primary text-white shadow-sm'
              : 'text-muted hover:text-text hover:bg-border/30'
          }`}
        >
          <Search size={15} />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
}
