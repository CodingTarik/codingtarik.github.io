import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Check } from 'lucide-react';

// Context Providers
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { BuddyProvider, useBuddy } from './context/BuddyContext';
import { useLanguage } from './context/LanguageContext';

// Shared Components
import GlobalHeader from './shared/components/GlobalHeader';
import SupportBanner from './shared/components/SupportBanner';
import BottomNavigation from './shared/components/BottomNavigation';
import HomePage from './shared/components/HomePage';
import LessonsPage from './shared/components/LessonsPage';
import LessonDetailPage from './shared/components/LessonDetailPage';
import PlanPage from './shared/components/PlanPage';

// Boulder-specific components
import TrainingPage from './buddies/boulder/components/TrainingPage';
import SessionLogger from './buddies/boulder/components/SessionLogger';
import WorkoutExecutor from './buddies/boulder/components/WorkoutExecutor';

// Buddy Home Pages
import SwimHomePage from './buddies/swim/components/SwimHomePage';
import RunHomePage from './buddies/run/components/RunHomePage';
import GymHomePage from './buddies/gym/components/GymHomePage';
import CookHomePage from './buddies/cook/components/CookHomePage';

// Data - will be loaded dynamically based on active buddy
import { lessons as boulderLessons, getLessonById as getBoulderLessonById, getNextLesson as getBoulderNextLesson } from './buddies/boulder/data/lessons';

function AppContent() {
  const { activeBuddy, currentBuddyConfig, allBuddies, switchBuddy } = useBuddy();
  const { language } = useLanguage();
  
  // Navigation state
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLesson, setCurrentLesson] = useState(null);
  
  // Boulder-specific state
  const [showWorkoutExecutor, setShowWorkoutExecutor] = useState(false);
  const [executingWorkout, setExecutingWorkout] = useState(null);
  
  // Plan items state (generic for all buddies)
  const [savedPlanItems, setSavedPlanItems] = useState([]);
  const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);

  // Get buddy-specific lessons (for now, only boulder has lessons)
  const getLessons = () => {
    if (activeBuddy === 'boulder') return boulderLessons;
    return []; // Other buddies don't have lessons yet
  };

  const getLessonById = (id) => {
    if (activeBuddy === 'boulder') return getBoulderLessonById(id);
    return null;
  };

  const getNextLesson = (id) => {
    if (activeBuddy === 'boulder') return getBoulderNextLesson(id);
    return null;
  };

  // Handle URL hash for routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      // Check for buddy selection in URL (e.g., #/swimbuddy, #/boulderbuddy)
      const buddyMatch = hash.match(/^#\/(boulder|swim|run|gym|cook|yoga|lifeskills|cybersecurity|piano|english)buddy$/i);
      if (buddyMatch) {
        const buddyId = buddyMatch[1].toLowerCase();
        if (allBuddies[buddyId] && buddyId !== activeBuddy) {
          switchBuddy(buddyId);
        }
        setCurrentLesson(null);
        setCurrentPage('home');
        return;
      }

      const lessonMatch = hash.match(/^#\/lessons\/(m\d+_\d+_l\d+)$/);

      if (lessonMatch) {
        const lessonId = lessonMatch[1];
        const lesson = getLessonById(lessonId);
        if (lesson) {
          setCurrentLesson(lesson);
          setCurrentPage('lektionen');
        }
      } else if (hash === '#/lektionen') {
        setCurrentLesson(null);
        setCurrentPage('lektionen');
      } else if (hash === '#/plan') {
        setCurrentLesson(null);
        setCurrentPage('plan');
      } else if (hash.startsWith('#/custom-')) {
        // Handle custom buddy tabs
        const tabId = hash.replace('#/custom-', '');
        setCurrentLesson(null);
        setCurrentPage(`custom-${tabId}`);
      } else {
        setCurrentLesson(null);
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activeBuddy]);

  // Update URL hash when state changes
  const handleSetCurrentPage = (page) => {
    if (page.startsWith('custom-')) {
      window.location.hash = `#/${page}`;
    } else {
      window.location.hash = page === 'home' ? '#/' : `#/${page}`;
    }
  };

  const handleSetCurrentLesson = (lesson) => {
    if (lesson) {
      window.location.hash = `#/lessons/${lesson.id}`;
    } else {
      window.location.hash = '#/lektionen';
    }
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

    switch (activeBuddy) {
      case 'swim':
        return <SwimHomePage {...commonProps} />;
      case 'run':
        return <RunHomePage {...commonProps} />;
      case 'gym':
        return <GymHomePage {...commonProps} />;
      case 'cook':
        return <CookHomePage {...commonProps} />;
      default: // boulder
        return <HomePage {...commonProps} />;
    }
  };

  // Render custom buddy tabs
  const renderCustomTab = (tabId) => {
    if (activeBuddy === 'boulder') {
      if (tabId === 'training') {
        return <TrainingPage />;
      } else if (tabId === 'sessions') {
        return <SessionLogger />;
      }
    }
    // Add other buddy custom tabs here as they're implemented
    return <div className="p-8 text-center text-stone-600 dark:text-stone-400">Coming soon!</div>;
  };

  // Determine what to render
  const renderContent = () => {
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
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 pb-20">
      {/* Global Header - Always visible */}
      <GlobalHeader />
      
      {/* Main Content with padding for header */}
      <div className="pt-16">
        {renderContent()}
      </div>
      
      {/* Save Confirmation Toast */}
      {showSaveConfirmation && (
        <div className="fixed top-20 right-4 bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in z-50">
          <Check size={20} />
          <span className="font-semibold">Saved to Plan!</span>
        </div>
      )}
      
      <BottomNavigation
        currentPage={currentPage}
        setCurrentPage={handleSetCurrentPage}
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BuddyProvider>
          <AppContent />
        </BuddyProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
