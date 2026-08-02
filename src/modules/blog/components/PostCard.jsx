import React from 'react';
import { Calendar, Clock, Tag } from 'lucide-react';
import { formatDate, calculateReadingTime } from '../utils/blogUtils';

export default function PostCard({ post, onClick }) {
  const readingTime = calculateReadingTime(post.content);

  return (
    <article
      onClick={() => onClick(post.id)}
      className="bg-card rounded-xl border border-card-border overflow-hidden group relative flex flex-col transition-all duration-300 hover:shadow-lg hover:border-primary"
    >
      {/* Thumbnail */}
      {post.thumbnail && (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.map(category => (
              <span
                key={category}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-background text-secondary border border-border rounded-full text-xs font-bold"
              >
                <Tag size={12} />
                {category}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h2 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h2>

        {/* Description */}
        {post.description && (
          <p className="text-muted mb-4 line-clamp-3 flex-grow">
            {post.description}
          </p>
        )}

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted mt-auto pt-4 border-t border-border">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            <span>{readingTime} min read</span>
          </div>
          {post.author && (
            <div className="flex items-center gap-1.5">
              <span>by {post.author}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

