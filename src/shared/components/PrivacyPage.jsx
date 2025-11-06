import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
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
            <Shield size={32} className="text-light-primary dark:text-dark-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Privacy Policy
            </h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-light-card dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border p-6 md:p-8 prose dark:prose-invert max-w-none">
          <h2>1. Introduction</h2>
          <p>
            This privacy policy informs you about the nature, scope, and purpose of the processing of 
            personal data on this website.
          </p>

          <h2>2. Data Controller</h2>
          <p>
            The person responsible for data processing on this website is:<br />
            <strong>Tarik Azzouzi</strong><br />
            {/* TODO: Add address */}
            Email: your.email@example.com
          </p>

          <h2>3. Analytics</h2>
          <p>
            This website uses <strong>Umami Analytics</strong>, a privacy-friendly web analytics tool. 
            Umami is GDPR, CCPA and cookie law compliant and does not use cookies or collect any personal data.
          </p>
          <p>
            The following anonymous data is collected:
          </p>
          <ul>
            <li>Page URL</li>
            <li>HTTP Referer (source of traffic)</li>
            <li>Browser type and version</li>
            <li>Device type (desktop, mobile, tablet)</li>
            <li>Operating system</li>
            <li>Country (based on IP address, but IP is not stored)</li>
          </ul>
          <p>
            <strong>No personal data is collected.</strong> Your IP address is not stored. No cookies are used. 
            All data is aggregated and anonymous. You can view our public analytics dashboard at any time.
          </p>
          <p>
            For more information about Umami's privacy practices, visit: 
            <a href="https://umami.is/docs/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              https://umami.is/docs/privacy
            </a>
          </p>

          <h2>4. Data Collection</h2>
          <p>
            This website automatically collects and stores information in so-called server log files, 
            which your browser automatically transmits to us. These are:
          </p>
          <ul>
            <li>Browser type and browser version</li>
            <li>Operating system used</li>
            <li>Referrer URL</li>
            <li>Hostname of the accessing computer</li>
            <li>Time of the server request</li>
            <li>IP address</li>
          </ul>

          <h2>5. Local Storage</h2>
          <p>
            This website uses Local Storage and Session Storage to store user settings 
            and preferences. This data remains on your device and is not transmitted to servers.
          </p>

          <h2>6. Cookies</h2>
          <p>
            This website uses minimally necessary cookies for functionality. You can adjust 
            the cookie settings at any time in the footer.
          </p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Information about your stored data</li>
            <li>Correction of incorrect data</li>
            <li>Deletion of your data</li>
            <li>Restriction of processing</li>
            <li>Data portability</li>
            <li>Object to processing</li>
          </ul>

          <h2>7. Contact</h2>
          <p>
            If you have any questions about data protection, you can contact us at any time:<br />
            Email: your.email@example.com
          </p>
        </div>
      </div>
    </div>
  );
}

