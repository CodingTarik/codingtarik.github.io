import React, { useState } from 'react';
import { Shield, FileText, Cookie } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Check if we're in blog view (has sidebar)
  const isBlogView = window.location.hash.startsWith('#/blog');

  return (
    <footer className={`bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 mt-auto ${isBlogView ? 'lg:ml-80' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
            <a
              href="#/privacy"
              className="flex items-center gap-1.5 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              <Shield size={14} />
              <span>Datenschutz</span>
            </a>
            <a
              href="#/imprint"
              className="flex items-center gap-1.5 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              <FileText size={14} />
              <span>Impressum</span>
            </a>
            <button
              onClick={() => {
                // TODO: Implement Cookie Settings Modal
                alert('Cookie-Einstellungen werden bald verfügbar sein!');
              }}
              className="flex items-center gap-1.5 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              <Cookie size={14} />
              <span>Cookie-Einstellungen</span>
            </button>
          </div>

          {/* Copyright */}
          <div className="text-sm text-stone-600 dark:text-stone-400">
            <span>© {currentYear} </span>
            <a
              href="https://github.com/CodingTarik"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-stone-900 dark:text-stone-100 hover:underline"
            >
              CodingTarik
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

