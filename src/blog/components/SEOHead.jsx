import { useEffect } from 'react';
import { updateMetaTags, updateCanonicalUrl } from '../utils/seoUtils';

/**
 * SEO Head component to dynamically update meta tags
 * This helps with SEO by providing proper meta information for each page
 */
export default function SEOHead({
  title = 'Tarik Azzouzi - Blog & Portfolio',
  description = 'Persoenlicher Blog und Portfolio von Tarik Azzouzi - Web Development, Cybersecurity, DevOps und mehr.',
  keywords = [],
  author = 'Tarik Azzouzi',
  ogType = 'website',
  ogImage = null,
  ogImageAlt = '',
  canonicalPath = ''
}) {
  useEffect(() => {
    updateMetaTags({
      title,
      description,
      keywords,
      ogType,
      ogImage,
      ogImageAlt,
      author,
      canonicalPath
    });

    // Clean up function - reset to defaults on unmount
    return () => {
      document.title = 'Tarik Azzouzi - Blog, Portfolio & LearnBuddy';
      updateCanonicalUrl('');
    };
  }, [title, description, keywords, author, ogType, ogImage, ogImageAlt, canonicalPath]);

  return null; // This component doesn't render anything
}
