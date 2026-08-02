import React from 'react';
import { Shield, FileText, Cookie } from 'lucide-react';
import { navigate, getPath } from '../../utils/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Check if we're in blog view (has sidebar) - use getPath for offline compatibility
  const path = getPath();
  const isBlogView = path.startsWith('/blog') || path === '/' || path === '';

  const handleOpenConsentBanner = () => {
    window.dispatchEvent(new CustomEvent('open-consent-banner'));
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className={`bg-light-background dark:bg-dark-background border-t border-light-border dark:border-dark-border mt-auto relative z-50 ${isBlogView ? 'lg:ml-80' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
            <a
              href="/privacy"
              onClick={(e) => handleNavClick(e, '/privacy')}
              className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary transition-colors font-medium"
            >
              <Shield size={14} />
              <span>Privacy Policy</span>
            </a>
            <a
              href="/imprint"
              onClick={(e) => handleNavClick(e, '/imprint')}
              className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary transition-colors font-medium"
            >
              <FileText size={14} />
              <span>Legal Notice</span>
            </a>
            <button
              onClick={handleOpenConsentBanner}
              className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary transition-colors font-medium"
            >
              <Cookie size={14} />
              <span>Privacy Settings</span>
            </button>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span>&copy; {currentYear} </span>
            <a
              href="https://github.com/CodingTarik"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-light-text dark:text-dark-text hover:underline"
            >
              CodingTarik
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
