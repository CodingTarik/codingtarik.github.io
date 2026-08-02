import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ViewCounter({ postId }) {
  const [views, setViews] = useState(0);

  useEffect(() => {
    // Get views from localStorage
    const viewsData = JSON.parse(localStorage.getItem('blog_post_views') || '{}');
    const currentViews = viewsData[postId] || 0;
    
    // Increment view count
    const newViews = currentViews + 1;
    viewsData[postId] = newViews;
    localStorage.setItem('blog_post_views', JSON.stringify(viewsData));
    
    setViews(newViews);
  }, [postId]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
    >
      <Eye size={14} />
      <span>{views} {views === 1 ? 'view' : 'views'}</span>
    </motion.div>
  );
}

