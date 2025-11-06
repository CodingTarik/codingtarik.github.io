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
          className="flex items-center gap-2 text-muted hover:text-primary mb-6 transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          <span>Back to overview</span>
        </button>

        {/* Post Header */}
        <header className="mb-6 md:mb-8">
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map(category => (
                <span
                  key={category}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold"
                >
                  <Tag size={12} />
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-text mb-4 tracking-tight">
            {post.title}
          </h1>

          {/* Description */}
          {post.description && (
            <p className="text-lg md:text-xl text-muted">
              {post.description}
            </p>
          )}

          {/* Meta Information */}
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted pt-6 border-t border-border">
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
            <div className="flex-grow"></div>
            <button 
              onClick={handleShare}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Share2 size={14} />
              <span>Share</span>
            </button>
          </div>
        </header>

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

