import { useEffect } from 'react';

/**
 * SEO Head component to dynamically update meta tags
 * This helps with SEO by providing proper meta information for each page
 */
export default function SEOHead({
  title = 'LearnBuddy',
  description = 'Dein persönlicher Lern-Begleiter für verschiedene Skills',
  keywords = [],
  author = 'Tarik',
  ogType = 'website',
  ogImage = null,
  canonicalUrl = null
}) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMeta = (selector, attribute, content) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute(attribute, content);
      } else {
        element = document.createElement('meta');
        if (selector.includes('property')) {
          element.setAttribute('property', selector.match(/property="(.+?)"/)[1]);
        } else if (selector.includes('name')) {
          element.setAttribute('name', selector.match(/name="(.+?)"/)[1]);
        }
        element.setAttribute(attribute, content);
        document.head.appendChild(element);
      }
    };

    // Update standard meta tags
    updateMeta('meta[name="description"]', 'content', description);
    updateMeta('meta[name="author"]', 'content', author);
    
    if (keywords.length > 0) {
      updateMeta('meta[name="keywords"]', 'content', keywords.join(', '));
    }

    // Update Open Graph tags (for social media sharing)
    updateMeta('meta[property="og:title"]', 'content', title);
    updateMeta('meta[property="og:description"]', 'content', description);
    updateMeta('meta[property="og:type"]', 'content', ogType);
    updateMeta('meta[property="og:url"]', 'content', canonicalUrl || window.location.href);
    
    if (ogImage) {
      updateMeta('meta[property="og:image"]', 'content', ogImage);
    }

    // Twitter Card tags
    updateMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMeta('meta[name="twitter:title"]', 'content', title);
    updateMeta('meta[name="twitter:description"]', 'content', description);
    
    if (ogImage) {
      updateMeta('meta[name="twitter:image"]', 'content', ogImage);
    }

    // Canonical URL
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]');
      if (link) {
        link.setAttribute('href', canonicalUrl);
      } else {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', canonicalUrl);
        document.head.appendChild(link);
      }
    }

    // Add robots meta for indexing
    updateMeta('meta[name="robots"]', 'content', 'index, follow');
    updateMeta('meta[name="googlebot"]', 'content', 'index, follow');

    // Clean up function
    return () => {
      // Reset to default on unmount
      document.title = 'LearnBuddy';
    };
  }, [title, description, keywords, author, ogType, ogImage, canonicalUrl]);

  return null; // This component doesn't render anything
}

