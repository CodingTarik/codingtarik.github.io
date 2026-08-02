import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { formatDate, calculateReadingTime } from '../utils/blogUtils';
import { 
  generateBlogPostStructuredData, 
  generateBreadcrumbStructuredData,
  injectStructuredData, 
  removeStructuredData,
  updateMetaTags 
} from '../utils/seoUtils';
import ReadingProgress from './ReadingProgress';
import ViewCounter from './ViewCounter';
import BlogPostContent from './BlogPostContent';
import BookmarkButton from './BookmarkButton';
import GiscusComments from './GiscusComments';
import { trackPostView, trackPostShare } from './Analytics';

export default function PostDetail({ post, onBack, onPostClick }) {
  const readingTime = calculateReadingTime(post.content);

  // Update SEO: title, meta tags, structured data, canonical URL
  useEffect(() => {
    if (post) {
      // Update all meta tags at once
      updateMetaTags({
        title: `${post.title} - Tarik's Blog`,
        description: post.description || '',
        keywords: post.keywords || [],
        ogType: 'article',
        ogImage: post.socialImage || post.thumbnail || null,
        ogImageAlt: post.title,
        canonicalPath: `blog/post/${post.id}`
      });
      
      // Inject structured data: BlogPosting + Breadcrumbs
      const postStructuredData = generateBlogPostStructuredData(post);
      const breadcrumbData = generateBreadcrumbStructuredData([
        { name: 'Home', url: '' },
        { name: 'Blog', url: 'blog' },
        { name: post.title }
      ]);
      injectStructuredData([postStructuredData, breadcrumbData]);
      
      // Track post view
      trackPostView(post.id, post.title, post.categories || []);
    }
    return () => {
      document.title = 'Tarik Azzouzi - Blog, Portfolio & LearnBuddy';
      removeStructuredData();
    };
  }, [post]);

  const handleShare = async () => {
    // Track share attempt
    trackPostShare(post.id, post.title, 'native-share');
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link in Zwischenablage kopiert!');
    }
  };

  return (
      <article className="w-full">
        {/* Reading Progress Bar */}
        <ReadingProgress />
        
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 text-muted hover:text-primary mb-6 transition-colors font-medium"
          whileHover={{ x: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ArrowLeft size={20} />
          <span>Back to overview</span>
        </motion.button>

        {/* Post Header */}
        <motion.header 
          className="mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category, index) => (
                <motion.span
                  key={category}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 rounded-full text-xs font-bold backdrop-blur-sm"
                >
                  <Tag size={12} />
                  {category}
                </motion.span>
              ))}
            </div>
          )}

          {/* Title with Gradient */}
          <motion.h1 
            className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-text via-primary to-text bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {post.title}
          </motion.h1>

          {/* Description */}
          {post.description && (
            <p className="text-lg md:text-xl text-muted">
              {post.description}
            </p>
          )}

          {/* Meta Information */}
          <motion.div 
            className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted pt-6 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
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
            
            {/* View Counter */}
            <ViewCounter postId={post.id} />
            
            <div className="flex-grow"></div>

            {/* Bookmark Button */}
            <BookmarkButton postId={post.id} />

            <motion.button 
              onClick={handleShare}
              className="flex items-center gap-1.5 hover:text-primary transition-colors px-3 py-1.5 rounded-lg hover:bg-primary/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Share2 size={14} />
              <span>Share</span>
            </motion.button>
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
        
        {/* Content — optimal reading width */}
        <div className="prose-container max-w-[65ch] lg:max-w-[72ch]">
          <BlogPostContent content={post.content} />
        </div>

        {/* Giscus Comments */}
        <GiscusComments postId={post.id} postTitle={post.title} />

        {/* Post Footer */}
        <footer className="mt-12 pt-8 border-t border-border">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <ArrowLeft size={20} />
            <span>Back to overview</span>
          </button>
        </footer>
      </article>
  );
}

