import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, TrendingUp } from 'lucide-react';
import { formatDate, calculateReadingTime } from '../utils/blogUtils';

export default function AnimatedPostCard({ post, onClick, index }) {
  const readingTime = calculateReadingTime(post.content);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      onClick={() => onClick(post.id)}
      className="bg-card rounded-2xl border border-card-border overflow-hidden group relative flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 cursor-pointer"
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Thumbnail with Parallax Effect */}
      {post.thumbnail && (
        <div className="aspect-[16/9] overflow-hidden relative">
          <motion.img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
        {/* Categories with Animation */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.map((category, idx) => (
              <motion.span
                key={category}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + idx * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 rounded-full text-xs font-bold backdrop-blur-sm"
              >
                <Tag size={12} />
                {category}
              </motion.span>
            ))}
          </div>
        )}

        {/* Title with Gradient on Hover */}
        <h2 className="text-xl font-bold text-text mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {post.title}
        </h2>

        {/* Description */}
        {post.description && (
          <p className="text-muted mb-4 line-clamp-3 flex-grow leading-relaxed">
            {post.description}
          </p>
        )}

        {/* Meta Information with Icons */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted mt-auto pt-4 border-t border-border">
          <motion.div 
            className="flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar size={14} className="text-primary" />
            <span>{formatDate(post.date)}</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
          >
            <Clock size={14} className="text-secondary" />
            <span>{readingTime} min read</span>
          </motion.div>
          {post.author && (
            <motion.div 
              className="flex items-center gap-1.5"
              whileHover={{ scale: 1.05 }}
            >
              <span>by {post.author}</span>
            </motion.div>
          )}
          
          {/* Trending Indicator */}
          <motion.div
            className="ml-auto flex items-center gap-1.5 text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <TrendingUp size={14} />
          </motion.div>
        </div>
      </div>

      {/* Shine Effect on Hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        initial={false}
        animate={{
          background: [
            'linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%, transparent 100%)',
            'linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%, transparent 100%)'
          ],
          backgroundPosition: ['-200% 0', '200% 0']
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
    </motion.article>
  );
}

