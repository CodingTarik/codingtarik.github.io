import React, { useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { formatDate, calculateReadingTime } from '../utils/blogUtils';
import { generateBlogPostStructuredData, injectStructuredData } from '../utils/seoUtils';
import ReadingProgress from './ReadingProgress';
import ViewCounter from './ViewCounter';
import { trackPostView, trackPostShare } from './Analytics';

export default function PostDetail({ post, onBack, onPostClick }) {
  const readingTime = calculateReadingTime(post.content);

  // Update document title and inject structured data for SEO
  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Tarik's Blog`;
      
      // Inject structured data for search engines
      const structuredData = generateBlogPostStructuredData(post);
      injectStructuredData(structuredData);
      
      // Track post view
      trackPostView(post.id, post.title, post.categories || []);
    }
    return () => {
      document.title = 'LearnBuddy';
      // Clean up structured data
      const script = document.querySelector('script[type="application/ld+json"]');
      if (script) script.remove();
    };
  }, [post]);

  // Add meta tags for SEO
  useEffect(() => {
    if (post) {
      // Description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.description || '');
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = post.description || '';
        document.head.appendChild(meta);
      }

      // Keywords
      if (post.keywords) {
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
          metaKeywords.setAttribute('content', post.keywords.join(', '));
        } else {
          const meta = document.createElement('meta');
          meta.name = 'keywords';
          meta.content = post.keywords.join(', ');
          document.head.appendChild(meta);
        }
      }

      // Open Graph tags for social media
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', post.title);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:title');
        meta.content = post.title;
        document.head.appendChild(meta);
      }

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', post.description || '');
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:description');
        meta.content = post.description || '';
        document.head.appendChild(meta);
      }

      if (post.socialImage) {
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) {
          ogImage.setAttribute('content', post.socialImage);
        } else {
          const meta = document.createElement('meta');
          meta.setAttribute('property', 'og:image');
          meta.content = post.socialImage;
          document.head.appendChild(meta);
        }
      }
    }
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
        
        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:font-bold prose-headings:text-text prose-headings:scroll-mt-24
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-muted prose-p:leading-relaxed
          prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline
          prose-code:text-secondary prose-code:bg-secondary/10 prose-code:px-1.5 prose-code:py-1 prose-code:rounded-md prose-code:font-mono
          prose-pre:bg-card prose-pre:text-text prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:scrollbar-thin
          prose-img:rounded-lg prose-img:shadow-md
          prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-background prose-blockquote:p-4 prose-blockquote:text-base
          prose-ul:text-muted
          prose-ol:text-muted
          prose-li:my-1
          prose-strong:text-text
        ">
          <Markdown
            options={{
              overrides: {
                h2: {
                  component: ({ children, ...props }) => {
                    const id = children
                      ?.toString()
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '');
                    return <h2 id={id} {...props}>{children}</h2>;
                  },
                },
                h3: {
                  component: ({ children, ...props }) => {
                    const id = children
                      ?.toString()
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '');
                    return <h3 id={id} {...props}>{children}</h3>;
                  },
                },
              },
            }}
          >
            {post.content}
          </Markdown>
        </div>

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

