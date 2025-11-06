import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';
import blogConfig from '../../blog/config';

export default function ImprintPageFooter() {
  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text py-8">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary mb-6 transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        {/* Header */}
        <div className="bg-light-card dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText size={32} className="text-light-primary dark:text-dark-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Imprint
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="bg-light-card dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border p-6 md:p-8">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>{blogConfig.imprint.name}</strong><br />
              {blogConfig.imprint.street}<br />
              {blogConfig.imprint.postalCode} {blogConfig.imprint.city}<br />
              {blogConfig.imprint.country}
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon: <a href={`tel:${blogConfig.imprint.phone}`}>{blogConfig.imprint.phone}</a><br />
              E-Mail: <a href={`mailto:${blogConfig.imprint.email}`}>{blogConfig.imprint.email}</a><br />
              GitHub: <a href={blogConfig.social.github} target="_blank" rel="noopener noreferrer">@{blogConfig.author.github}</a><br />
              LinkedIn: <a href={blogConfig.social.linkedin} target="_blank" rel="noopener noreferrer">{blogConfig.author.name}</a>
            </p>

            <h2>Liability for Content</h2>
            <p>
              As a service provider, we are responsible for our own content on these pages according to § 7 Abs.1 TMG 
              under general laws. However, according to §§ 8 to 10 TMG, we as a service provider are not obligated 
              to monitor transmitted or stored third-party information or to investigate circumstances that indicate 
              illegal activity.
            </p>

            <h2>Liability for Links</h2>
            <p>
              Our offer contains links to external third-party websites, over whose content we have no influence. 
              Therefore, we cannot assume any liability for this external content. The respective provider or operator 
              of the pages is always responsible for the content of the linked pages.
            </p>

            <h2>Copyright</h2>
            <p>
              The content and works created by the site operators on these pages are subject to German copyright law. 
              The reproduction, editing, distribution, and any kind of exploitation outside the limits of copyright 
              require the written consent of the respective author or creator.
            </p>

            <h2>Open Source</h2>
            <p>
              Parts of this website are based on open-source software. The source code is available on GitHub:<br />
              <a href={`https://github.com/${blogConfig.github.owner}/${blogConfig.github.repo}`} target="_blank" rel="noopener noreferrer">
                github.com/{blogConfig.github.owner}/{blogConfig.github.repo}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

