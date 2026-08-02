import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import { LanguageProvider } from './learnbuddy/context/LanguageContext';
import { ThemeProvider } from './learnbuddy/context/ThemeContext';
import { BuddyProvider } from './learnbuddy/context/BuddyContext';
import { SettingsProvider } from './learnbuddy/context/SettingsContext';

import { useAppRouting } from './hooks/useAppRouting';
import { navigate, getPath } from './utils/navigation';

import BlogPage from './blog/components/BlogPage';
import BlogSubpageLayout from './blog/components/BlogSubpageLayout';
import BlogPostDetailLayout from './blog/components/BlogPostDetailLayout';
import SearchPage from './blog/components/SearchPage';
import CategoriesPage from './blog/components/CategoriesPage';
import ProjectsPage from './blog/components/ProjectsPage';

import LearnBuddyView from './learnbuddy/LearnBuddyView';
import ToolsOverviewPage from './blog/components/ToolsOverviewPage';

import PianoStudio from './tools/piano/PianoStudio';
import PdfTools from './tools/pdf-tools/PdfTools';
import FlashMaster from './tools/flashmaster/FlashMaster';
import DeviceTest from './tools/device-test/DeviceTest';
import MarkdownEditor from './tools/markdown-editor/MarkdownEditor';
import PerfectPitch from './tools/perfect-pitch/PerfectPitch';

import Footer from './shared/components/Footer';
import PrivacyPage from './shared/components/PrivacyPage';
import ImprintPageFooter from './shared/components/ImprintPageFooter';
import ConsentBanner from './shared/components/ConsentBanner';
import { applyConsent } from './shared/utils/consentManager';

function AppContent() {
  const { appView, currentPost, handlePostClick, handleBackToBlog } = useAppRouting();

  useEffect(() => {
    applyConsent();
  }, []);

  const renderContent = () => {
    if (appView === 'privacy') return <PrivacyPage />;
    if (appView === 'imprint') return <ImprintPageFooter />;
    if (appView === 'tools') return <ToolsOverviewPage />;
    if (appView === 'pdf-tools') return <PdfTools />;
    if (appView === 'piano-studio') return <PianoStudio />;
    if (appView === 'flashmaster') return <FlashMaster />;
    if (appView === 'markdown-editor') return <MarkdownEditor />;
    if (appView === 'device-test') return <DeviceTest />;
    if (appView === 'perfect-pitch') return <PerfectPitch />;

    if (appView === 'learnbuddy') {
      return <LearnBuddyView onSwitchToBlog={() => navigate('/blog')} />;
    }

    if (appView === 'blog') {
      const path = getPath();
      if (path.startsWith('/blog/search')) {
        return (
          <BlogSubpageLayout selectedTab="search" handlePostClick={handlePostClick}>
            <SearchPage onPostClick={handlePostClick} />
          </BlogSubpageLayout>
        );
      }

      if (path === '/blog/categories') {
        return (
          <BlogSubpageLayout
            selectedTab="categories"
            handlePostClick={handlePostClick}
            onCategorySelect={(category) => {
              if (category === null) navigate('/blog');
              else navigate(`/blog?category=${encodeURIComponent(category)}`);
            }}
          >
            <CategoriesPage
              onCategorySelect={(category) => {
                if (category === null) navigate('/blog');
                else navigate(`/blog?category=${encodeURIComponent(category)}`);
              }}
            />
          </BlogSubpageLayout>
        );
      }

      if (path === '/blog/projects') {
        return (
          <BlogSubpageLayout selectedTab="projects" handlePostClick={handlePostClick}>
            <ProjectsPage />
          </BlogSubpageLayout>
        );
      }

      if (currentPost) {
        return (
          <BlogPostDetailLayout
            currentPost={currentPost}
            handleBackToBlog={handleBackToBlog}
            handlePostClick={handlePostClick}
          />
        );
      }

      return <BlogPage onPostClick={handlePostClick} />;
    }

    return <BlogPage onPostClick={handlePostClick} />;
  };

  const showFooter = !['learnbuddy', 'piano-studio', 'flashmaster', 'markdown-editor', 'perfect-pitch'].includes(appView);

  return (
    <div className="min-h-screen flex flex-col bg-background text-text transition-colors duration-300">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex-1">
        {renderContent()}
      </div>
      {showFooter && <Footer />}
      <ConsentBanner />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SettingsProvider>
          <BuddyProvider>
            <AppContent />
          </BuddyProvider>
        </SettingsProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
