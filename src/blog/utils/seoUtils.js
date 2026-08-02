/**
 * SEO Utilities for blog and site
 * Uses real paths (not hash fragments) for proper SEO
 */

const SITE_URL = 'https://codingtarik.github.io';
const SITE_NAME = 'Tarik Azzouzi - CodingTarik';
const AUTHOR_NAME = 'Tarik Azzouzi';

/**
 * Get the canonical URL for a given path
 * Now uses real paths instead of hash fragments
 */
export const getCanonicalUrl = (path = '') => {
  // Remove leading hash or slash
  let cleanPath = path.replace(/^[#/]+/, '');
  // Also handle legacy hash paths
  if (cleanPath.startsWith('#')) {
    cleanPath = cleanPath.replace(/^#+\/?/, '');
  }
  return cleanPath ? `${SITE_URL}/${cleanPath}` : SITE_URL;
};

/**
 * Update the canonical URL in the document head
 */
export const updateCanonicalUrl = (path = '') => {
  const canonical = getCanonicalUrl(path);
  let link = document.querySelector('link[rel="canonical"]');
  if (link) {
    link.setAttribute('href', canonical);
  } else {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonical);
    document.head.appendChild(link);
  }

  // Also update og:url
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute('content', canonical);
  }
};

/**
 * Update all SEO meta tags for a page
 */
export const updateMetaTags = ({
  title,
  description,
  keywords = [],
  ogType = 'website',
  ogImage = null,
  ogImageAlt = '',
  author = AUTHOR_NAME,
  canonicalPath = '',
  publishedTime = null,
  modifiedTime = null,
}) => {
  // Update document title
  if (title) {
    document.title = title;
  }

  // Helper to update or create meta tag
  const setMeta = (selector, attribute, content) => {
    if (!content) return;
    let el = document.querySelector(selector);
    if (el) {
      el.setAttribute(attribute, content);
    } else {
      el = document.createElement('meta');
      if (selector.includes('property=')) {
        el.setAttribute('property', selector.match(/property="(.+?)"/)[1]);
      } else if (selector.includes('name=')) {
        el.setAttribute('name', selector.match(/name="(.+?)"/)[1]);
      }
      el.setAttribute(attribute, content);
      document.head.appendChild(el);
    }
  };

  // Standard meta tags
  if (description) setMeta('meta[name="description"]', 'content', description);
  if (author) setMeta('meta[name="author"]', 'content', author);
  if (keywords.length > 0) setMeta('meta[name="keywords"]', 'content', keywords.join(', '));

  // Open Graph
  if (title) setMeta('meta[property="og:title"]', 'content', title);
  if (description) setMeta('meta[property="og:description"]', 'content', description);
  setMeta('meta[property="og:type"]', 'content', ogType);
  if (ogImage) {
    setMeta('meta[property="og:image"]', 'content', ogImage);
    if (ogImageAlt) setMeta('meta[property="og:image:alt"]', 'content', ogImageAlt);
  }

  // Article-specific OG tags
  if (publishedTime) setMeta('meta[property="article:published_time"]', 'content', publishedTime);
  if (modifiedTime) setMeta('meta[property="article:modified_time"]', 'content', modifiedTime);

  // Twitter
  if (title) setMeta('meta[name="twitter:title"]', 'content', title);
  if (description) setMeta('meta[name="twitter:description"]', 'content', description);
  if (ogImage) setMeta('meta[name="twitter:image"]', 'content', ogImage);

  // Canonical URL
  if (canonicalPath !== undefined) {
    updateCanonicalUrl(canonicalPath);
  }
};

/**
 * Generate structured data (JSON-LD) for a blog post
 * Now uses real URLs instead of hash fragments
 */
export const generateBlogPostStructuredData = (post) => {
  const postUrl = `${SITE_URL}/blog/post/${post.id}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description || '',
    "image": post.thumbnail ? `${SITE_URL}${post.thumbnail}` : `${SITE_URL}/pictures/blog/profile/profile.jpeg`,
    "datePublished": post.date,
    "dateModified": post.lastModified || post.date,
    "author": {
      "@type": "Person",
      "name": post.author || AUTHOR_NAME,
      "url": SITE_URL,
      "sameAs": [
        "https://github.com/CodingTarik",
        "https://www.linkedin.com/in/tarik-azzouzi/"
      ]
    },
    "publisher": {
      "@type": "Person",
      "name": AUTHOR_NAME,
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/icon.svg`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "url": postUrl,
    "keywords": post.keywords ? post.keywords.join(', ') : '',
    "articleSection": post.categories ? post.categories.join(', ') : '',
    "wordCount": typeof post.content === 'string' ? post.content.split(/\s+/).length : undefined,
    "inLanguage": post.language || "de",
    "isAccessibleForFree": true
  };
};

/**
 * Generate structured data for the blog homepage
 */
export const generateBlogStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Tarik's Blog",
    "description": "Gedanken, Projekte und Erfahrungen rund um Web Development, Cybersecurity und Lernen",
    "url": `${SITE_URL}/blog`,
    "inLanguage": ["de", "en"],
    "author": {
      "@type": "Person",
      "name": AUTHOR_NAME,
      "url": SITE_URL
    },
    "publisher": {
      "@type": "Person",
      "name": AUTHOR_NAME
    }
  };
};

/**
 * Generate structured data for person/author
 */
export const generatePersonStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": AUTHOR_NAME,
    "url": SITE_URL,
    "image": `${SITE_URL}/pictures/blog/profile/profile.jpeg`, // Structured data needs absolute URL anyway
    "sameAs": [
      "https://github.com/CodingTarik",
      "https://www.linkedin.com/in/tarik-azzouzi/",
      "https://app.hackthebox.com/profile/477139",
      "https://tryhackme.com/p/CodingTarik",
      "https://discord.gg/xggTvK2"
    ],
    "knowsAbout": ["Web Development", "React", "JavaScript", "Node.js", "Cybersecurity", "DevOps"]
  };
};

/**
 * Generate BreadcrumbList structured data
 */
export const generateBreadcrumbStructuredData = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? `${SITE_URL}/${item.url}` : undefined
    }))
  };
};

/**
 * Inject structured data into page
 */
export const injectStructuredData = (data, options = {}) => {
  const { replace = true, id = 'dynamic-ld-json' } = options;

  if (replace) {
    document.querySelectorAll(`script[data-seo-id="${id}"]`).forEach(el => el.remove());
  }

  const dataArray = Array.isArray(data) ? data : [data];

  dataArray.forEach((item) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-id', id);
    script.textContent = JSON.stringify(item);
    document.head.appendChild(script);
  });
};

/**
 * Remove dynamic structured data from page
 */
export const removeStructuredData = (id = 'dynamic-ld-json') => {
  document.querySelectorAll(`script[data-seo-id="${id}"]`).forEach(el => el.remove());
};

/**
 * Clean text for meta descriptions (remove markdown syntax)
 */
export const cleanTextForMeta = (text, maxLength = 160) => {
  let cleaned = text
    .replace(/#{1,6}\s/g, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
    .replace(/`(.+?)`/g, '$1')
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (cleaned.length > maxLength) {
    cleaned = cleaned.substring(0, maxLength - 3) + '...';
  }

  return cleaned;
};
