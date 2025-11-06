import React from 'react';
import { Calendar, Clock, Tag } from 'lucide-react';
import { formatDate, calculateReadingTime } from '../utils/blogUtils';

export default function PostCard({ post, onClick }) {
  const readingTime = calculateReadingTime(post.content);

  return (
    <article
      onClick={onClick}
      className="bg-white dark:bg-stone-800 rounded-lg shadow-sm hover:shadow-md border border-stone-200 dark:border-stone-700 transition-all cursor-pointer overflow-hidden group"
    >
      {/* Thumbnail (if available) */}
      {post.thumbnail && (
        <div className="aspect-video overflow-hidden">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-4 md:p-6">
        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.map(category => (
              <span
                key={category}
                className="inline-flex items-center gap-1 px-2 md:px-3 py-1 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-600 rounded-full text-xs font-medium"
              >
                <Tag size={12} />
                {category}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-stone-900 dark:text-stone-100 mb-3 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
          {post.title}
        </h2>

        {/* Description */}
        {post.description && (
          <p className="text-stone-600 dark:text-stone-400 mb-4 line-clamp-3">
            {post.description}
          </p>
        )}

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500 dark:text-stone-400">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{readingTime} min read</span>
          </div>
          {post.author && (
            <div className="flex items-center gap-1">
              <span>von {post.author}</span>
            </div>
          )}
        </div>

        {/* Featured Badge */}
        {post.featured && (
          <div className="mt-4 inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-bold">
            ⭐ Featured
          </div>
        )}
      </div>
    </article>
  );
}

