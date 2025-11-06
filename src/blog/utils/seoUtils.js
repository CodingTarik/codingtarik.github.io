/**
 * SEO Utilities for blog
 * Helper functions for SEO optimization
 */

/**
 * Generate structured data (JSON-LD) for a blog post
 * This helps search engines understand the content better
 */
export const generateBlogPostStructuredData = (post) => {
  const baseUrl = window.location.origin;
  
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.thumbnail ? `${baseUrl}${post.thumbnail}` : null,
    "datePublished": post.date,
    "dateModified": post.date, // Could be different if you track updates
    "author": {
      "@type": "Person",
      "name": post.author || "Tarik"
    },
    "publisher": {
      "@type": "Person",
      "name": "Tarik"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}#/blog/post/${post.id}`
    },
    "keywords": post.keywords ? post.keywords.join(', ') : '',
    "articleSection": post.categories ? post.categories.join(', ') : ''
  };
};

/**
 * Generate structured data for the blog homepage
 */
export const generateBlogStructuredData = () => {
  const baseUrl = window.location.origin;
  
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Tarik's Blog",
    "description": "Gedanken, Projekte und Erfahrungen rund um Technologie und Lernen",
    "url": `${baseUrl}#/blog`,
    "author": {
      "@type": "Person",
      "name": "Tarik"
    }
  };
};

/**
 * Generate structured data for person/author
 */
export const generatePersonStructuredData = (socialLinks = {}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tarik",
    "url": window.location.origin,
    "sameAs": [
      socialLinks.github,
      socialLinks.linkedin,
      socialLinks.discord
    ].filter(Boolean)
  };
};

/**
 * Inject structured data into page
 */
export const injectStructuredData = (data) => {
  // Remove existing structured data
  const existing = document.querySelector('script[type="application/ld+json"]');
  if (existing) {
    existing.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

/**
 * Generate sitemap data (for manual sitemap generation)
 * Note: This returns data that can be used to create a sitemap.xml
 */
export const generateSitemapData = (posts) => {
  const baseUrl = window.location.origin;
  const urls = [];

  // Add blog homepage
  urls.push({
    loc: `${baseUrl}#/blog`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: '0.9'
  });

  // Add all blog posts
  posts.forEach(post => {
    urls.push({
      loc: `${baseUrl}#/blog/post/${post.id}`,
      lastmod: post.date,
      changefreq: 'monthly',
      priority: '0.8'
    });
  });

  return urls;
};

/**
 * Clean text for meta descriptions (remove markdown syntax)
 */
export const cleanTextForMeta = (text, maxLength = 160) => {
  // Remove markdown syntax
  let cleaned = text
    .replace(/#{1,6}\s/g, '') // Remove headers
    .replace(/\*\*(.+?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.+?)\*/g, '$1') // Remove italic
    .replace(/\[(.+?)\]\(.+?\)/g, '$1') // Remove links
    .replace(/`(.+?)`/g, '$1') // Remove code
    .replace(/\n/g, ' ') // Remove newlines
    .trim();

  // Truncate if needed
  if (cleaned.length > maxLength) {
    cleaned = cleaned.substring(0, maxLength - 3) + '...';
  }

  return cleaned;
};

