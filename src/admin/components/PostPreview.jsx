import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Eye, Clock } from 'lucide-react';
import BlogPostContent from '../../blog/components/BlogPostContent';
import { calculateReadingTime } from '../../blog/utils/blogUtils';

export default function PostPreview({ post, onBack }) {
  const categories = typeof post.categories === 'string' 
    ? post.categories.split(',').map(c => c.trim()).filter(c => c)
    : post.categories || [];
  
  const readingTime = post.content ? calculateReadingTime(post.content) : 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-card text-text rounded-lg hover:bg-background transition-all border border-border"
        >
          <ArrowLeft size={18} />
          Back to Editor
        </button>
        <div className="flex items-center gap-2 text-sm text-muted">
          <Eye size={16} />
          <span>Preview Mode</span>
        </div>
      </div>

      {/* Preview Container - Exact copy of PostDetail layout */}
      <div className="bg-background">
        {/* Header */}
        <motion.header 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Categories */}
          {categories.length > 0 && (
            <motion.div 
              className="flex flex-wrap gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {categories.map((category, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wide"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {category}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* Title */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-text via-primary to-text bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {post.title || 'Untitled Post'}
          </motion.h1>

          {/* Meta Info */}
          <motion.div 
            className="flex flex-wrap items-center gap-4 text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-primary" />
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-secondary" />
              <span>{readingTime} min read</span>
            </div>
            {post.author && (
              <div className="flex items-center gap-1.5">
                <span>by {post.author}</span>
              </div>
            )}
            {post.featured && (
              <div className="flex items-center gap-2 px-2 py-1 bg-accent/10 text-accent rounded-md">
                <Tag size={14} />
                <span className="text-xs font-semibold">Featured</span>
              </div>
            )}
          </motion.div>
        </motion.header>

        {/* Thumbnail */}
        {post.thumbnail && (
          <div className="my-8 aspect-video overflow-hidden rounded-xl shadow-lg border border-border">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content - Using shared BlogPostContent component */}
        <BlogPostContent content={post.content || '*No content yet*'} />
      </div>
    </motion.div>
  );
}

