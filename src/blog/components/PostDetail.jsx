import React, { useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { formatDate, calculateReadingTime } from '../utils/blogUtils';
import { generateBlogPostStructuredData, injectStructuredData } from '../utils/seoUtils';

export default function PostDetail({ post, onBack, onPostClick }) {
  const readingTime = calculateReadingTime(post.content);

  // Update document title and inject structured data for SEO
  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Tarik's Blog`;
      
      // Inject structured data for search engines
      const structuredData = generateBlogPostStructuredData(post);
      injectStructuredData(structuredData);
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
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-purple-600 dark:hover:text-purple-400 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Zurück zur Übersicht</span>
        </button>

        {/* Post Header */}
        <header className="mb-6 md:mb-8">
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map(category => (
                <span
                  key={category}
                  className="inline-flex items-center gap-1 px-2 md:px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs md:text-sm font-medium"
                >
                  <Tag size={14} />
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            {post.title}
          </h1>

          {/* Description */}
          {post.description && (
            <p className="text-base md:text-xl text-stone-600 dark:text-stone-400 mb-6">
              {post.description}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500 dark:text-stone-400 pb-6 border-b border-stone-200 dark:border-stone-700">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{readingTime} Min. Lesezeit</span>
            </div>
            {post.author && (
              <div className="flex items-center gap-1">
                <span>von <strong>{post.author}</strong></span>
              </div>
            )}
            <button
              onClick={handleShare}
              className="ml-auto flex items-center gap-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <Share2 size={16} />
              <span>Teilen</span>
            </button>
          </div>
        </header>

        {/* Thumbnail (if available) */}
        {post.thumbnail && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Post Content */}
        <div className="prose prose-lg prose-stone dark:prose-invert max-w-none">
          <Markdown
            options={{
              overrides: {
                // Custom styling for markdown elements
                h1: {
                  component: ({ children, ...props }) => {
                    const id = children
                      ?.toString()
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '');
                    return (
                      <h1 id={id} className="text-3xl font-bold text-stone-800 dark:text-stone-100 mt-8 mb-4 scroll-mt-20" {...props}>
                        {children}
                      </h1>
                    );
                  },
                },
                h2: {
                  component: ({ children, ...props }) => {
                    const id = children
                      ?.toString()
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '');
                    return (
                      <h2 id={id} className="text-2xl font-bold text-stone-800 dark:text-stone-100 mt-6 mb-3 scroll-mt-20" {...props}>
                        {children}
                      </h2>
                    );
                  },
                },
                h3: {
                  component: ({ children, ...props }) => {
                    const id = children
                      ?.toString()
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '');
                    return (
                      <h3 id={id} className="text-xl font-bold text-stone-800 dark:text-stone-100 mt-4 mb-2 scroll-mt-20" {...props}>
                        {children}
                      </h3>
                    );
                  },
                },
                p: {
                  props: {
                    className: 'text-stone-700 dark:text-stone-300 mb-4 leading-relaxed',
                  },
                },
                a: {
                  props: {
                    className: 'text-purple-600 dark:text-purple-400 hover:underline',
                  },
                },
                code: {
                  props: {
                    className: 'bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded text-sm',
                  },
                },
                pre: {
                  props: {
                    className: 'bg-stone-800 dark:bg-stone-900 p-4 rounded-lg overflow-x-auto my-4',
                  },
                },
                ul: {
                  props: {
                    className: 'list-disc list-inside space-y-2 mb-4',
                  },
                },
                ol: {
                  props: {
                    className: 'list-decimal list-inside space-y-2 mb-4',
                  },
                },
                blockquote: {
                  props: {
                    className: 'border-l-4 border-purple-500 pl-4 italic text-stone-600 dark:text-stone-400 my-4',
                  },
                },
                img: {
                  props: {
                    className: 'rounded-lg my-6 w-full h-auto',
                  },
                },
              },
            }}
          >
            {post.content}
          </Markdown>
        </div>

        {/* Post Footer */}
        <footer className="mt-12 pt-6 border-t border-stone-200 dark:border-stone-700">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline font-medium"
          >
            <ArrowLeft size={20} />
            <span>Zurück zur Übersicht</span>
          </button>
        </footer>
      </article>
  );
}

