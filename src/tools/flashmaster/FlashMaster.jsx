/**
 * FlashMaster wrapper – integrates the standalone FlashMaster app
 * into the parent project.  We use MemoryRouter so FlashMaster's
 * internal routes don't clash with the parent's hash-based routing.
 */
import React, { useEffect, useRef } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from './src/lib/i18n';
import App from './src/App';

// FlashMaster's own stylesheet (custom classes, light-mode overrides, etc.)
import './src/index.css';

export default function FlashMaster() {
  const savedClassesRef = useRef(null);
  const savedDirRef = useRef(null);

  useEffect(() => {
    // Save the parent's <html> classes and dir attribute so we can restore on unmount
    savedClassesRef.current = document.documentElement.className;
    savedDirRef.current = document.documentElement.dir;

    // Dynamic Manifest Switching for FlashMaster PWA
    const link = document.querySelector("link[rel*='manifest']");
    let originalManifest = null;

    if (link) {
      originalManifest = link.href;
      link.href = '/manifest-flashmaster.json';
    }

    return () => {
      // Restore original manifest
      if (link && originalManifest) {
        link.href = originalManifest;
      }

      // Clean up FlashMaster's theme / i18n modifications on <html>
      document.documentElement.classList.remove('light');
      if (savedClassesRef.current !== null) {
        document.documentElement.className = savedClassesRef.current;
      }
      if (savedDirRef.current !== null) {
        document.documentElement.dir = savedDirRef.current;
      }
    };
  }, []);

  return (
    <MemoryRouter>
      <I18nProvider>
        <App />
      </I18nProvider>
    </MemoryRouter>
  );
}
