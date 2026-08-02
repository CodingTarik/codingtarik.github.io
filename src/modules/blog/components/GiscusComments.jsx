import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../learnbuddy/context/ThemeContext';

/**
 * Giscus Comments Component
 * GitHub Discussions-based commenting system
 * Free, no ads, privacy-friendly
 * 
 * Setup:
 * 1. Enable GitHub Discussions on your repo
 * 2. Install Giscus app: https://github.com/apps/giscus
 * 3. Configure at: https://giscus.app/
 * 4. Update the props below with your config
 */
export default function GiscusComments({ postId, postTitle }) {
  const ref = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    // Clean up previous instance
    if (ref.current) {
      ref.current.innerHTML = '';
    }

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'CodingTarik/codingtarik.github.io');
    script.setAttribute('data-repo-id', ''); // Fill in from giscus.app config
    script.setAttribute('data-category', 'Blog Comments');
    script.setAttribute('data-category-id', ''); // Fill in from giscus.app config
    script.setAttribute('data-mapping', 'specific');
    script.setAttribute('data-term', postId);
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', isDark ? 'dark_dimmed' : 'light');
    script.setAttribute('data-lang', 'de');
    script.setAttribute('data-loading', 'lazy');
    script.crossOrigin = 'anonymous';
    script.async = true;

    if (ref.current) {
      ref.current.appendChild(script);
    }

    return () => {
      if (ref.current) {
        ref.current.innerHTML = '';
      }
    };
  }, [postId, isDark]);

  // Update theme when dark mode changes
  useEffect(() => {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (iframe) {
      iframe.contentWindow?.postMessage(
        { giscus: { setConfig: { theme: isDark ? 'dark_dimmed' : 'light' } } },
        'https://giscus.app'
      );
    }
  }, [isDark]);

  return (
    <section className="mt-16 pt-8 border-t border-border" aria-label="Comments">
      <h2 className="text-2xl font-bold text-text mb-6">Comments</h2>
      <p className="text-sm text-muted mb-4">
        Sign in with GitHub to leave a comment. Powered by{' '}
        <a 
          href="https://giscus.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Giscus
        </a>
        .
      </p>
      <div ref={ref} className="giscus-container" />
    </section>
  );
}
