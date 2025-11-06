import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { getAllPosts, formatDate } from '../utils/blogUtils';

export default function RecentPosts({ onPostClick, currentPostId }) {
  // Get 5 most recent posts, excluding current post
  const recentPosts = getAllPosts()
    .filter(post => post.id !== currentPostId)
    .slice(0, 5);

  return (
    <div className="mt-8">
      <div className="bg-card rounded-lg border border-border p-4">
        <h3 className="text-sm font-semibold text-muted mb-3 flex items-center gap-2 uppercase tracking-wider">
          <Calendar size={14} />
          <span>Recent Posts</span>
        </h3>
        
        <div className="space-y-3">
          {recentPosts.map(post => (
            <button
              key={post.id}
              onClick={() => onPostClick(post.id)}
              className="w-full text-left group"
            >
              <div className="p-3 rounded-lg hover:bg-background transition-all">
                {/* Thumbnail if available */}
                {post.thumbnail && (
                  <div className="aspect-video w-full overflow-hidden rounded-md mb-2">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                {/* Title */}
                <h4 className="text-sm font-semibold text-text mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                
                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-muted">
                  <Calendar size={12} />
                  <span>{formatDate(post.date)}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
        
        {recentPosts.length === 0 && (
          <p className="text-sm text-muted text-center py-4">
            No more posts available
          </p>
        )}
      </div>
    </div>
  );
}

