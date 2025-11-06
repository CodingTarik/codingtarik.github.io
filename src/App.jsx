import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Check } from 'lucide-react';

// Context Providers
import { LanguageProvider } from './learnbuddy/context/LanguageContext';
import { ThemeProvider } from './learnbuddy/context/ThemeContext';
import { BuddyProvider, useBuddy } from './learnbuddy/context/BuddyContext';
import { SettingsProvider } from './learnbuddy/context/SettingsContext';
import { useLanguage } from './learnbuddy/context/LanguageContext';

// LearnBuddy Shared Components
import GlobalHeader from './learnbuddy/shared/components/GlobalHeader';
import SupportBanner from './learnbuddy/shared/components/SupportBanner';
import BottomNavigation from './learnbuddy/shared/components/BottomNavigation';
import HomePage from './learnbuddy/shared/components/HomePage';
import LessonsPage from './learnbuddy/shared/components/LessonsPage';
import LessonDetailPage from './learnbuddy/shared/components/LessonDetailPage';
import PlanPage from './learnbuddy/shared/components/PlanPage';
import ImprintPage from './learnbuddy/shared/components/ImprintPage';
import SettingsPage from './learnbuddy/shared/components/SettingsPage';

// Boulder-specific components
import TrainingPage from './learnbuddy/buddies/boulder/components/TrainingPage';
import SessionLogger from './learnbuddy/buddies/boulder/components/SessionLogger';
import WorkoutExecutor from './learnbuddy/buddies/boulder/components/WorkoutExecutor';

// English-specific components
import GrammarLevels from './learnbuddy/buddies/english/components/GrammarLevels';
import ReadingLibrary from './learnbuddy/buddies/english/components/ReadingLibrary';

// Blog Components
import BlogPage from './blog/components/BlogPage';
import PostDetail from './blog/components/PostDetail';
import { getPostById } from './blog/utils/blogUtils';

function AppContent() {
  const { activeBuddy, currentBuddyConfig, allBuddies, switchBuddy } = useBuddy();
  const { language } = useLanguage();
  
  // App view state (blog vs learnbuddy)
  const [appView, setAppView] = useState('learnbuddy'); // 'blog' or 'learnbuddy'
  
  // Navigation state
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLesson, setCurrentLesson] = useState(null);
  
  // Blog state
  const [currentPost, setCurrentPost] = useState(null);
  
  // Boulder-specific state
  const [showWorkoutExecutor, setShowWorkoutExecutor] = useState(false);
  const [executingWorkout, setExecutingWorkout] = useState(null);
  
  // Plan items state (generic for all buddies)
  const [savedPlanItems, setSavedPlanItems] = useState([]);
  const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);

  // Get buddy-specific lessons - use config if available
  const getLessons = () => {
    if (currentBuddyConfig.lessons && currentBuddyConfig.lessons.data) {
      return currentBuddyConfig.lessons.data;
    }
    return [];
  };

  const getLessonById = (id) => {
    if (currentBuddyConfig.lessons && currentBuddyConfig.lessons.getLessonById) {
      return currentBuddyConfig.lessons.getLessonById(id);
    }
    return null;
  };

  const getNextLesson = (id) => {
    if (currentBuddyConfig.lessons && currentBuddyConfig.lessons.getNextLesson) {
      return currentBuddyConfig.lessons.getNextLesson(id);
    }
    return null;
  };

  // Update document title based on active buddy and page
  useEffect(() => {
    const buddyName = currentBuddyConfig.name[language];
    let title = `${buddyName} - LearnBuddy`;
    
    if (currentLesson) {
      const lessonTitle = currentLesson.title?.[language] || currentLesson.title;
      title = `${lessonTitle} - ${buddyName}`;
    } else if (currentPage === 'lektionen') {
      title = `${language === 'en' ? 'Lessons' : 'Lektionen'} - ${buddyName}`;
    } else if (currentPage === 'plan') {
      title = `${language === 'en' ? 'Plan' : 'Plan'} - ${buddyName}`;
    } else if (currentPage.startsWith('custom-')) {
      const tabId = currentPage.replace('custom-', '');
      const customTab = currentBuddyConfig.customTabs?.find(tab => tab.id === tabId);
      if (customTab) {
        title = `${customTab.name[language]} - ${buddyName}`;
      }
    }
    
    document.title = title;
  }, [activeBuddy, currentBuddyConfig, currentPage, currentLesson, language]);

  // Handle URL hash for routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      // Check for blog routes
      if (hash.startsWith('#/blog')) {
        setAppView('blog');
        
        // Check if viewing a specific post
        const postMatch = hash.match(/^#\/blog\/post\/(.+)$/);
        if (postMatch) {
          const postId = postMatch[1];
          const post = getPostById(postId);
          if (post) {
            setCurrentPost(post);
          }
        } else {
          setCurrentPost(null);
        }
        return;
      } else {
        setAppView('learnbuddy');
      }
      
      // Check for buddy selection in URL (e.g., #/learnbuddy/boulder/home, #/learnbuddy/swim/lessons)
      const buddyMatch = hash.match(/^#\/learnbuddy\/(boulder|swim|run|gym|cook|yoga|lifeskills|cybersecurity|piano|english)(\/.*)?$/i);
      if (buddyMatch) {
        const buddyId = buddyMatch[1].toLowerCase();
        const path = buddyMatch[2] || '/home';
        
        if (allBuddies[buddyId] && buddyId !== activeBuddy) {
          switchBuddy(buddyId);
        }
        
        // Parse the path
        if (path === '/home' || path === '/') {
          setCurrentLesson(null);
          setCurrentPage('home');
        } else if (path === '/lessons' || path === '/lektionen') {
          setCurrentLesson(null);
          setCurrentPage('lektionen');
        } else if (path === '/plan') {
          setCurrentLesson(null);
          setCurrentPage('plan');
        } else if (path.startsWith('/lessons/')) {
          const lessonId = path.replace('/lessons/', '');
          const lesson = getLessonById(lessonId);
          if (lesson) {
            setCurrentLesson(lesson);
            setCurrentPage('lektionen');
          }
        } else if (path.startsWith('/custom-')) {
          const tabId = path.replace('/custom-', '');
          setCurrentLesson(null);
          setCurrentPage(`custom-${tabId}`);
        }
        return;
      }
      
      // Legacy support for old URLs (without /learnbuddy prefix) - redirect
      if (hash.startsWith('#/') && !hash.startsWith('#/blog') && !hash.startsWith('#/learnbuddy')) {
        // Redirect old URLs to new format
        const oldBuddyMatch = hash.match(/^#\/(boulder|swim|run|gym|cook|yoga|lifeskills|cybersecurity|piano|english)/i);
        if (oldBuddyMatch) {
          const buddyId = oldBuddyMatch[1].toLowerCase();
          const restPath = hash.substring(`#/${buddyId}`.length);
          window.location.hash = `#/learnbuddy/${buddyId}${restPath || '/home'}`;
          return;
        }
        // Other legacy routes
        if (hash === '#/imprint' || hash === '#/settings') {
          // These stay as is
          setCurrentLesson(null);
          setCurrentPage(hash.replace('#/', ''));
          return;
        }
        // Default redirect to learnbuddy
        window.location.hash = `#/learnbuddy/${activeBuddy}/home`;
        return;
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activeBuddy]);

  // Update URL hash when state changes
  const handleSetCurrentPage = (page) => {
    if (page.startsWith('custom-')) {
      window.location.hash = `#/learnbuddy/${activeBuddy}/${page}`;
    } else if (page === 'home') {
      window.location.hash = `#/learnbuddy/${activeBuddy}/home`;
    } else if (page === 'lektionen') {
      window.location.hash = `#/learnbuddy/${activeBuddy}/lessons`;
    } else if (page === 'plan') {
      window.location.hash = `#/learnbuddy/${activeBuddy}/plan`;
    } else {
      window.location.hash = `#/learnbuddy/${activeBuddy}/${page}`;
    }
    setCurrentPage(page);
    setCurrentLesson(null);
  };

  const handleSetCurrentLesson = (lesson) => {
    if (lesson) {
      window.location.hash = `#/learnbuddy/${activeBuddy}/lessons/${lesson.id}`;
    } else {
      window.location.hash = `#/learnbuddy/${activeBuddy}/lessons`;
    }
    setCurrentLesson(lesson);
  };

  // Load saved plan items from localStorage (buddy-specific)
  useEffect(() => {
    const storageKey = `${activeBuddy}BuddyPlanItems`;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setSavedPlanItems(JSON.parse(saved));
    } else {
      setSavedPlanItems([]);
    }
  }, [activeBuddy]);

  // Save plan items to localStorage (buddy-specific)
  useEffect(() => {
    const storageKey = `${activeBuddy}BuddyPlanItems`;
    localStorage.setItem(storageKey, JSON.stringify(savedPlanItems));
  }, [savedPlanItems, activeBuddy]);

  // Plan item management functions
  const savePlanItem = (item) => {
    setSavedPlanItems([...savedPlanItems, { ...item, id: Date.now() }]);
    setShowSaveConfirmation(true);
    setTimeout(() => setShowSaveConfirmation(false), 2000);
  };

  const removePlanItem = (itemId) => {
    setSavedPlanItems(savedPlanItems.filter(item => item.id !== itemId));
  };

  const updatePlanItem = (itemId, updatedItem) => {
    setSavedPlanItems(savedPlanItems.map(item => 
      item.id === itemId ? updatedItem : item
    ));
  };

  // Render buddy-specific home page
  const renderHomePage = () => {
    const commonProps = {
      onStartLesson: () => handleSetCurrentPage('lektionen')
    };

    // Get the HomePage component from the current buddy's config
    const BuddyHomePageComponent = currentBuddyConfig.homePage;
    
    if (BuddyHomePageComponent) {
      return <BuddyHomePageComponent {...commonProps} />;
    }
    
    // Fallback to generic HomePage if no specific one is defined
    return <HomePage {...commonProps} />;
  };

  // Render custom buddy tabs
  const renderCustomTab = (tabId) => {
    if (activeBuddy === 'boulder') {
      if (tabId === 'training') {
        return <TrainingPage />;
      } else if (tabId === 'sessions') {
        return <SessionLogger />;
      }
    } else if (activeBuddy === 'english') {
      // English components
      if (tabId === 'reading') {
        return <ReadingLibrary />;
      }
      // Other English tabs coming soon
      return (
        <div className="max-w-2xl mx-auto px-4 py-8 mt-8">
          <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-12 text-center">
            <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
              {language === 'en' ? 'Coming Soon!' : 'Bald verfügbar!'}
            </h2>
            <p className="text-stone-600 dark:text-stone-400">
              {language === 'en'
                ? 'This feature is currently being developed. Stay tuned!'
                : 'Dieses Feature wird gerade entwickelt. Bleib dran!'}
            </p>
          </div>
        </div>
      );
    }
    // Default for other buddies
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 mt-8">
        <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-12 text-center">
          <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            {language === 'en' ? 'Coming Soon!' : 'Bald verfügbar!'}
          </h2>
          <p className="text-stone-600 dark:text-stone-400">
            {language === 'en'
              ? 'This feature is currently being developed. Stay tuned!'
              : 'Dieses Feature wird gerade entwickelt. Bleib dran!'}
          </p>
        </div>
      </div>
    );
  };

  // Handle blog navigation
  const handleViewChange = (view) => {
    if (view === 'blog') {
      window.location.hash = '#/blog';
      setAppView('blog');
    } else {
      window.location.hash = `#/learnbuddy/${activeBuddy}/home`;
      setAppView('learnbuddy');
    }
  };

  const handlePostClick = (postId) => {
    window.location.hash = `#/blog/post/${postId}`;
    const post = getPostById(postId);
    if (post) {
      setCurrentPost(post);
    }
  };

  const handleBackToBlog = () => {
    window.location.hash = '#/blog';
    setCurrentPost(null);
  };

  // Determine what to render
  const renderContent = () => {
    // Blog View
    if (appView === 'blog') {
      if (currentPost) {
        return <PostDetail post={currentPost} onBack={handleBackToBlog} />;
      }
      return <BlogPage onPostClick={handlePostClick} onBackToLearnBuddy={() => handleViewChange('learnbuddy')} />;
    }

    // LearnBuddy View
    // Show workout executor overlay if active (boulder-specific)
    if (showWorkoutExecutor && executingWorkout) {
      return (
        <WorkoutExecutor
          workout={executingWorkout}
          onComplete={() => {
            setShowWorkoutExecutor(false);
            setExecutingWorkout(null);
          }}
          onCancel={() => {
            setShowWorkoutExecutor(false);
            setExecutingWorkout(null);
          }}
        />
      );
    }

    // Show lesson detail if a lesson is selected
    if (currentLesson) {
      return (
        <LessonDetailPage
          lesson={currentLesson}
          onBack={() => handleSetCurrentLesson(null)}
          onSaveTask={savePlanItem}
          onGoToNextLesson={() => {
            const nextLesson = getNextLesson(currentLesson.id);
            if (nextLesson) {
              handleSetCurrentLesson(nextLesson);
            }
          }}
        />
      );
    }

    // Show page based on currentPage
    switch (currentPage) {
      case 'home':
        return renderHomePage();
      
      case 'lektionen':
        const currentLessons = getLessons();
        if (currentLessons.length === 0) {
          // No lessons available for this buddy yet
          return (
            <div className="max-w-2xl mx-auto px-4 py-8 mt-8">
              <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-12 text-center">
                <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
                  {language === 'en' ? 'Coming Soon!' : 'Bald verfügbar!'}
                </h2>
                <p className="text-stone-600 dark:text-stone-400">
                  {language === 'en' 
                    ? 'Lessons for this buddy are currently being developed. Stay tuned!' 
                    : 'Lektionen für diesen Buddy werden gerade entwickelt. Bleib dran!'}
                </p>
              </div>
            </div>
          );
        }
        return (
          <div className="max-w-2xl mx-auto px-4 py-8 mt-8">
            <LessonsPage
              lessons={currentLessons}
              onSelectLesson={(lesson) => handleSetCurrentLesson(lesson)}
            />
          </div>
        );
      
      case 'plan':
        return (
          <div className="max-w-2xl mx-auto px-4 py-8 mt-8">
            <PlanPage
              savedItems={savedPlanItems}
              onUpdateItem={updatePlanItem}
              onDeleteItem={removePlanItem}
            />
          </div>
        );
      
      case 'imprint':
        return <ImprintPage />;
      
      case 'settings':
        return <SettingsPage />;
      
      default:
        // Check if it's a custom tab
        if (currentPage.startsWith('custom-')) {
          const tabId = currentPage.replace('custom-', '');
          return renderCustomTab(tabId);
        }
        return renderHomePage();
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900">
      {/* LearnBuddy Header - Only in LearnBuddy view */}
      {appView === 'learnbuddy' && (
        <GlobalHeader currentView={appView} onViewChange={handleViewChange} />
      )}
      
      {/* Main Content */}
      <div className={appView === 'learnbuddy' ? 'pt-16 pb-20' : ''}>
        {renderContent()}
      </div>
      
      {/* Save Confirmation Toast */}
      {showSaveConfirmation && (
        <div className="fixed top-20 right-4 bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in z-50">
          <Check size={20} />
          <span className="font-semibold">Saved to Plan!</span>
        </div>
      )}
      
      {/* Bottom Navigation - Only show in LearnBuddy view */}
      {appView === 'learnbuddy' && (
        <BottomNavigation
          currentPage={currentPage}
          setCurrentPage={handleSetCurrentPage}
        />
      )}
    </div>
  );
}

function App() {
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

export default App;
