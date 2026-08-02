import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { useBuddy } from './context/BuddyContext';
import { useLanguage } from './context/LanguageContext';
import { updateMetaTags } from '../blog/utils/seoUtils';

import GlobalHeader from './shared/components/GlobalHeader';
import BottomNavigation from './shared/components/BottomNavigation';
import HomePage from './shared/components/HomePage';
import LessonsPage from './shared/components/LessonsPage';
import LessonDetailPage from './shared/components/LessonDetailPage';
import PlanPage from './shared/components/PlanPage';
import SettingsPage from './shared/components/SettingsPage';

// Boulder components
import TrainingPage from './buddies/boulder/components/TrainingPage';
import SessionLogger from './buddies/boulder/components/SessionLogger';
import WorkoutExecutor from './buddies/boulder/components/WorkoutExecutor';
import BoulderSkillPath from './buddies/boulder/components/BoulderSkillPath';
import BoulderSummary from './buddies/boulder/components/BoulderSummary';

// English components
import GrammarLevels from './buddies/english/components/GrammarLevels';
import ReadingLibrary from './buddies/english/components/ReadingLibrary';
import VocabularyPage from './buddies/english/components/VocabularyPage';
import VideoPlayerPage from './buddies/english/components/VideoPlayerPage';
import WritingPage from './buddies/english/components/WritingPage';
import SpeakingPage from './buddies/english/components/SpeakingPage';

// LifeSkills components
import PomodoroTimer from './buddies/lifeskills/components/PomodoroTimer';
import TimeAudit from './buddies/lifeskills/components/TimeAudit';
import HabitTracker from './buddies/lifeskills/components/HabitTracker';
import GoalTracker from './buddies/lifeskills/components/GoalTracker';
import ReflectionTool from './buddies/lifeskills/components/ReflectionTool';
import DayPlanner from './buddies/lifeskills/components/DayPlanner';

// Piano components
import PianoPractice from './buddies/piano/components/PianoPractice';
import SongLibrary from './buddies/piano/components/SongLibrary';

// Cook components
import RecipeBook from './buddies/cook/components/RecipeBook';
import ShoppingList from './buddies/cook/components/ShoppingList';
import KitchenConverter from './buddies/cook/components/KitchenConverter';
import KitchenTimer from './buddies/cook/components/KitchenTimer';
import MealPlanner from './buddies/cook/components/MealPlanner';
import CookSkillPath from './buddies/cook/components/CookSkillPath';

// Gym components
import WorkoutTracker from './buddies/gym/components/WorkoutTracker';
import GymSkillPath from './buddies/gym/components/GymSkillPath';
import GymSummary from './buddies/gym/components/GymSummary';

// Run components
import RunTools from './buddies/run/components/RunTools';
import RunSkillPath from './buddies/run/components/RunSkillPath';
import RunSummary from './buddies/run/components/RunSummary';

// Swim components
import SwimTools from './buddies/swim/components/SwimTools';
import SwimSummary from './buddies/swim/components/SwimSummary';

// Yoga components
import YogaTools from './buddies/yoga/components/YogaTools';

export default function LearnBuddyView({ onSwitchToBlog }) {
  const { activeBuddy, currentBuddyConfig, switchBuddy } = useBuddy();
  const { language } = useLanguage();

  const [currentPage, setCurrentPage] = useState('home');
  const [currentLesson, setCurrentLesson] = useState(null);

  // Boulder-specific state
  const [showWorkoutExecutor, setShowWorkoutExecutor] = useState(false);
  const [executingWorkout, setExecutingWorkout] = useState(null);

  // Saved plan items
  const [savedPlanItems, setSavedPlanItems] = useState([]);
  const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);

  const getLessons = () => {
    if (currentBuddyConfig.lessons && currentBuddyConfig.lessons.data) {
      return currentBuddyConfig.lessons.data;
    }
    return [];
  };

  const getNextLesson = (id) => {
    if (currentBuddyConfig.lessons && currentBuddyConfig.lessons.getNextLesson) {
      return currentBuddyConfig.lessons.getNextLesson(id);
    }
    return null;
  };

  // SEO Update for LearnBuddy
  useEffect(() => {
    const buddyName = currentBuddyConfig.name[language];
    let title = `${buddyName} - LearnBuddy`;
    let description = `${buddyName} - Dein interaktiver Lernbegleiter. Lerne mit strukturierten Lektionen und interaktiven Uebungen.`;
    let canonicalPath = `learnbuddy/${activeBuddy}/home`;

    if (currentLesson) {
      const lessonTitle = currentLesson.title?.[language] || currentLesson.title;
      title = `${lessonTitle} - ${buddyName}`;
      description = `Lektion: ${lessonTitle} - Lerne mit ${buddyName} auf LearnBuddy.`;
      canonicalPath = `learnbuddy/${activeBuddy}/lessons/${currentLesson.id || ''}`;
    } else if (currentPage === 'lektionen') {
      title = `${language === 'en' ? 'Lessons' : 'Lektionen'} - ${buddyName}`;
      description = `Alle Lektionen fuer ${buddyName} - Strukturiertes Lernen auf LearnBuddy.`;
      canonicalPath = `learnbuddy/${activeBuddy}/lessons`;
    } else if (currentPage === 'plan') {
      title = `${language === 'en' ? 'Plan' : 'Plan'} - ${buddyName}`;
      canonicalPath = `learnbuddy/${activeBuddy}/plan`;
    } else if (currentPage.startsWith('custom-')) {
      const tabId = currentPage.replace('custom-', '');
      const customTab = currentBuddyConfig.customTabs?.find(tab => tab.id === tabId);
      if (customTab) {
        title = `${customTab.name[language]} - ${buddyName}`;
        canonicalPath = `learnbuddy/${activeBuddy}/custom-${tabId}`;
      }
    }

    updateMetaTags({ title, description, canonicalPath });
  }, [activeBuddy, currentBuddyConfig, currentPage, currentLesson, language]);

  const savePlanItem = (item) => {
    const newItem = {
      id: Date.now().toString(),
      type: item.type,
      title: item.title,
      source: item.source || currentBuddyConfig.name[language],
      buddyId: activeBuddy,
      addedAt: new Date().toISOString(),
      details: item.details || {}
    };
    setSavedPlanItems(prev => [newItem, ...prev]);
    setShowSaveConfirmation(true);
    setTimeout(() => setShowSaveConfirmation(false), 3000);
  };

  const updatePlanItem = (id, updatedData) => {
    setSavedPlanItems(prev => prev.map(item => item.id === id ? { ...item, ...updatedData } : item));
  };

  const removePlanItem = (id) => {
    setSavedPlanItems(prev => prev.filter(item => item.id !== id));
  };

  const handleSetCurrentPage = (page) => {
    setCurrentPage(page);
    setCurrentLesson(null);
  };

  const renderHomePage = () => (
    <HomePage
      onSelectLesson={(lesson) => setCurrentLesson(lesson)}
      onNavigateToPage={handleSetCurrentPage}
    />
  );

  const renderCustomTab = (tabId) => {
    if (activeBuddy === 'boulder') {
      if (tabId === 'training') {
        return (
          <TrainingPage
            onStartWorkout={(workout) => {
              setExecutingWorkout(workout);
              setShowWorkoutExecutor(true);
            }}
          />
        );
      } else if (tabId === 'logger') {
        return <SessionLogger onSaveSession={savePlanItem} />;
      } else if (tabId === 'curriculum') {
        return <BoulderSkillPath />;
      } else if (tabId === 'summary') {
        return <BoulderSummary onBack={() => handleSetCurrentPage('lektionen')} />;
      }
    } else if (activeBuddy === 'english') {
      if (tabId === 'grammar') return <GrammarLevels onSaveTask={savePlanItem} />;
      if (tabId === 'reading') return <ReadingLibrary onSaveTask={savePlanItem} />;
      if (tabId === 'vocab') return <VocabularyPage onSaveTask={savePlanItem} />;
      if (tabId === 'video') return <VideoPlayerPage onSaveTask={savePlanItem} />;
      if (tabId === 'writing') return <WritingPage onSaveTask={savePlanItem} />;
      if (tabId === 'speaking') return <SpeakingPage onSaveTask={savePlanItem} />;
    } else if (activeBuddy === 'lifeskills') {
      if (tabId === 'pomodoro') return <PomodoroTimer onSaveTask={savePlanItem} />;
      if (tabId === 'timeaudit') return <TimeAudit onSaveTask={savePlanItem} />;
      if (tabId === 'habits') return <HabitTracker onSaveTask={savePlanItem} />;
      if (tabId === 'goals') return <GoalTracker onSaveTask={savePlanItem} />;
      if (tabId === 'reflection') return <ReflectionTool onSaveTask={savePlanItem} />;
      if (tabId === 'planner') return <DayPlanner onSaveTask={savePlanItem} />;
    } else if (activeBuddy === 'piano') {
      if (tabId === 'practice') return <PianoPractice onSaveTask={savePlanItem} />;
      if (tabId === 'songs') return <SongLibrary onSaveTask={savePlanItem} />;
    } else if (activeBuddy === 'cook') {
      if (tabId === 'recipes') return <RecipeBook />;
      if (tabId === 'shopping') return <ShoppingList />;
      if (tabId === 'mealplan') return <MealPlanner />;
      if (tabId === 'timer') return <KitchenTimer />;
      if (tabId === 'converter') return <KitchenConverter />;
      if (tabId === 'path') return <CookSkillPath />;
    } else if (activeBuddy === 'gym') {
      if (tabId === 'tracker') return <WorkoutTracker />;
      if (tabId === 'curriculum') return <GymSkillPath />;
      if (tabId === 'summary') return <GymSummary onBack={() => handleSetCurrentPage('lektionen')} />;
    } else if (activeBuddy === 'run') {
      if (tabId === 'tools') return <RunTools />;
      if (tabId === 'curriculum') return <RunSkillPath />;
      if (tabId === 'summary') return <RunSummary onBack={() => handleSetCurrentPage('lektionen')} />;
    } else if (activeBuddy === 'swim') {
      if (tabId === 'tools') return <SwimTools />;
      if (tabId === 'summary') return <SwimSummary onBack={() => handleSetCurrentPage('lektionen')} />;
    } else if (activeBuddy === 'yoga') {
      if (tabId === 'tools') return <YogaTools />;
    }

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

  const renderContent = () => {
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

    if (currentLesson) {
      return (
        <LessonDetailPage
          lesson={currentLesson}
          onBack={() => setCurrentLesson(null)}
          onSaveTask={savePlanItem}
          onGoToNextLesson={() => {
            const nextLesson = getNextLesson(currentLesson.id);
            if (nextLesson) {
              setCurrentLesson(nextLesson);
            }
          }}
        />
      );
    }

    switch (currentPage) {
      case 'home':
        return renderHomePage();

      case 'lektionen':
        const currentLessons = getLessons();
        if (currentLessons.length === 0) {
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
            {['boulder', 'swim', 'run', 'gym'].includes(activeBuddy) && (
              <button
                onClick={() => handleSetCurrentPage('custom-summary')}
                className="w-full mb-8 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-xl p-4 flex items-center justify-between hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-800 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    ⚡
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-stone-800 dark:text-stone-100">
                      {language === 'en' ? 'No time to read everything?' : 'Keine Zeit alles zu lesen?'}
                    </h3>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      {language === 'en' ? 'Click here for the summary' : 'Hier geht es zur Summary'}
                    </p>
                  </div>
                </div>
                <div className="text-teal-600 dark:text-teal-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
            )}
            <LessonsPage
              lessons={currentLessons}
              onSelectLesson={(lesson) => setCurrentLesson(lesson)}
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

      case 'settings':
        return <SettingsPage />;

      default:
        if (currentPage.startsWith('custom-')) {
          const tabId = currentPage.replace('custom-', '');
          return renderCustomTab(tabId);
        }
        return renderHomePage();
    }
  };

  return (
    <div className="pt-14 sm:pt-16 pb-16 sm:pb-20">
      <GlobalHeader currentView="learnbuddy" onViewChange={(v) => v === 'blog' && onSwitchToBlog()} />
      {renderContent()}

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
