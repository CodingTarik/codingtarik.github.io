import React from 'react';
import { FolderOpen, FileText } from 'lucide-react';
import { getAllCategories, getPostsByCategory } from '../utils/blogUtils';

export default function CategoriesPage({ onCategorySelect }) {
  const categories = getAllCategories();
  
  // Get post count for each category
  const categoriesWithCount = categories.map(category => ({
    name: category,
    count: getPostsByCategory(category).length
  }));

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        {/* Header */}
        <header className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
            Categories
          </h1>
          <p className="text-sm md:text-lg text-stone-600 dark:text-stone-400">
            Browse posts by category. Click on any category to see related posts.
          </p>
        </header>

        {/* Categories Grid */}
        {categoriesWithCount.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* All Posts */}
            <button
              onClick={() => onCategorySelect(null)}
              className="bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-4 md:p-6 hover:shadow-md hover:border-stone-900 dark:hover:border-stone-100 transition-all text-left group"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-2 md:p-3 bg-stone-100 dark:bg-stone-700 rounded-lg group-hover:bg-stone-900 dark:group-hover:bg-stone-100 transition-colors">
                    <FileText size={20} className="md:w-6 md:h-6 text-stone-600 dark:text-stone-300 group-hover:text-white dark:group-hover:text-stone-900" />
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-stone-900 dark:text-stone-100 mb-1">
                      All Posts
                    </h2>
                    <p className="text-xs md:text-sm text-stone-600 dark:text-stone-400">
                      View all blog posts
                    </p>
                  </div>
                </div>
                <div className="text-xl md:text-2xl font-bold text-stone-900 dark:text-stone-100">
                  {categoriesWithCount.reduce((sum, cat) => sum + cat.count, 0)}
                </div>
              </div>
            </button>

            {/* Individual Categories */}
            {categoriesWithCount.map(category => (
              <button
                key={category.name}
                onClick={() => onCategorySelect(category.name)}
                className="bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-4 md:p-6 hover:shadow-md hover:border-stone-900 dark:hover:border-stone-100 transition-all text-left group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="p-2 md:p-3 bg-stone-100 dark:bg-stone-700 rounded-lg group-hover:bg-stone-900 dark:group-hover:bg-stone-100 transition-colors">
                      <FolderOpen size={20} className="md:w-6 md:h-6 text-stone-600 dark:text-stone-300 group-hover:text-white dark:group-hover:text-stone-900" />
                    </div>
                    <div>
                      <h2 className="text-lg md:text-xl font-bold text-stone-900 dark:text-stone-100">
                        {category.name}
                      </h2>
                    </div>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-stone-900 dark:text-stone-100">
                    {category.count}
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-12 text-center">
            <FolderOpen size={48} className="mx-auto mb-4 text-stone-400" />
            <p className="text-stone-600 dark:text-stone-400 text-lg">
              No categories yet.
            </p>
            <p className="text-sm text-stone-500 dark:text-stone-500 mt-2">
              Categories will appear here once you create blog posts with categories.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

