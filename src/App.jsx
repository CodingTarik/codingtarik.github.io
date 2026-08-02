import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Check, Menu } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

// Navigation utility (history-based routing for SEO)
import { navigate, getPath } from './utils/navigation';

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
import SettingsPage from './learnbuddy/shared/components/SettingsPage';

// Boulder-specific components
import TrainingPage from './learnbuddy/buddies/boulder/components/TrainingPage';
import SessionLogger from './learnbuddy/buddies/boulder/components/SessionLogger';
import WorkoutExecutor from './learnbuddy/buddies/boulder/components/WorkoutExecutor';
import BoulderSkillPath from './learnbuddy/buddies/boulder/components/BoulderSkillPath';
import BoulderSummary from './learnbuddy/buddies/boulder/components/BoulderSummary';

// English-specific components
import GrammarLevels from './learnbuddy/buddies/english/components/GrammarLevels';
import ReadingLibrary from './learnbuddy/buddies/english/components/ReadingLibrary';
import VocabularyPage from './learnbuddy/buddies/english/components/VocabularyPage';
import VideoPlayerPage from './learnbuddy/buddies/english/components/VideoPlayerPage';
import WritingPage from './learnbuddy/buddies/english/components/WritingPage';
import SpeakingPage from './learnbuddy/buddies/english/components/SpeakingPage';

// LifeSkills-specific components
import PomodoroTimer from './learnbuddy/buddies/lifeskills/components/PomodoroTimer';
import TimeAudit from './learnbuddy/buddies/lifeskills/components/TimeAudit';
import HabitTracker from './learnbuddy/buddies/lifeskills/components/HabitTracker';
import GoalTracker from './learnbuddy/buddies/lifeskills/components/GoalTracker';
import ReflectionTool from './learnbuddy/buddies/lifeskills/components/ReflectionTool';
import DayPlanner from './learnbuddy/buddies/lifeskills/components/DayPlanner';

// Piano-specific components
import PianoPractice from './learnbuddy/buddies/piano/components/PianoPractice';
import SongLibrary from './learnbuddy/buddies/piano/components/SongLibrary';

// Cook-specific components
import RecipeBook from './learnbuddy/buddies/cook/components/RecipeBook';
import ShoppingList from './learnbuddy/buddies/cook/components/ShoppingList';
import KitchenConverter from './learnbuddy/buddies/cook/components/KitchenConverter';
import KitchenTimer from './learnbuddy/buddies/cook/components/KitchenTimer';
import MealPlanner from './learnbuddy/buddies/cook/components/MealPlanner';
import CookSkillPath from './learnbuddy/buddies/cook/components/CookSkillPath';

// Gym-specific components
import WorkoutTracker from './learnbuddy/buddies/gym/components/WorkoutTracker';
import GymSkillPath from './learnbuddy/buddies/gym/components/GymSkillPath';
import GymSummary from './learnbuddy/buddies/gym/components/GymSummary';

// Run-specific components
import RunTools from './learnbuddy/buddies/run/components/RunTools';
import RunSkillPath from './learnbuddy/buddies/run/components/RunSkillPath';
import RunSummary from './learnbuddy/buddies/run/components/RunSummary';

// Swim-specific components
import SwimTools from './learnbuddy/buddies/swim/components/SwimTools';
import SwimSummary from './learnbuddy/buddies/swim/components/SwimSummary';

// Yoga-specific components
import YogaTools from './learnbuddy/buddies/yoga/components/YogaTools';

// Blog Components
import BlogPage from './blog/components/BlogPage';
import PostDetail from './blog/components/PostDetail';
import BlogSidebar from './blog/components/BlogSidebar';
import RecentPosts from './blog/components/RecentPosts';
import TableOfContents from './blog/components/TableOfContents';
import ScrollToTop from './blog/components/ScrollToTop';
import SearchPage from './blog/components/SearchPage';
import SearchBar from './blog/components/SearchBar';
import CategoriesPage from './blog/components/CategoriesPage';
import ProjectsPage from './blog/components/ProjectsPage';
import { getPostById } from './blog/utils/blogUtils';

// CV Component
import CVPage from './cv/components/CVPage';

// Tools & Games
import ToolsOverviewPage from './blog/components/ToolsOverviewPage';
import DoodleDash from './games/doodledash/DoodleDash';
import Maexchen from './games/maexchen/Maexchen';
import Kniffel from './games/kniffel/Kniffel';
import LiarsDice from './games/liars-dice/LiarsDice';
import WhoAmI from './games/who-am-i/WhoAmI';
import CupcakeChaos from './games/cupcake-chaos/CupcakeChaos';
import Imposter from './games/imposter/Imposter';
import CyberShield from './games/cybershield/CyberShield';
import LogicTest from './tools/logic-test/LogicTest';
import FocusDetector from './tools/focus-detector/FocusDetector';
import PianoStudio from './tools/piano/PianoStudio';
import PdfTools from './tools/pdf-tools/PdfTools';
import FlashMaster from './tools/flashmaster/FlashMaster';
import TravelHub from './tools/travel/TravelHub';
import DeviceTest from './tools/device-test/DeviceTest';
import PromptLibrary from './tools/prompt-library/PromptLibrary';
import DataConverter from './tools/data-converter/DataConverter';
import MarkdownEditor from './tools/markdown-editor/MarkdownEditor';
import PubgTierList from './tools/pubg-tierlist/PubgTierList';
import AoeStrategy from './tools/aoe-strategy/AoeStrategy';
import BrainTraining from './tools/brain-training/BrainTraining';
import PerfectPitch from './tools/perfect-pitch/PerfectPitch';

// Shared Components
import Footer from './shared/components/Footer';
import PrivacyPage from './shared/components/PrivacyPage';
import ImprintPageFooter from './shared/components/ImprintPageFooter';

// SEO Utilities
import { updateMetaTags, updateCanonicalUrl, removeStructuredData } from './blog/utils/seoUtils';

// Consent & DSGVO
import ConsentBanner from './shared/components/ConsentBanner';
import { applyConsent, hasConsented } from './shared/utils/consentManager';

// Admin Panel
import AdminPanel from './admin/AdminPanel';

// Reusable blog subpage layout with responsive sidebar
function BlogSubpageWithSidebar({ selectedTab, handlePostClick, onCategorySelect, children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <BlogSidebar
        selectedTab={selectedTab}
        onTabChange={(tab) => {
          if (tab === 'posts') navigate('/blog');
          else if (tab === 'search') navigate('/blog/search');
          else if (tab === 'categories') navigate('/blog/categories');
          else if (tab === 'projects') navigate('/blog/projects');
          else if (tab === 'cv') navigate('/cv');
        }}
        onCategorySelect={onCategorySelect || (() => { })}
        selectedCategory={null}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="lg:ml-80 flex-1">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden fixed bottom-6 right-6 p-3 sm:p-4 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full shadow-lg hover:scale-110 transition-transform z-30"
        >
          <Menu size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}

// Blog Post Detail with responsive sidebar layout
function BlogPostDetailWithSidebar({ currentPost, handleBackToBlog, handlePostClick, language }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <BlogSidebar
        selectedTab="posts"
        onTabChange={(tab) => {
          if (tab === 'posts') navigate('/blog');
          else if (tab === 'search') navigate('/blog/search');
          else if (tab === 'categories') navigate('/blog/categories');
          else if (tab === 'projects') navigate('/blog/projects');
          else if (tab === 'cv') navigate('/cv');
        }}
        onCategorySelect={() => { }}
        selectedCategory={null}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content - Blog Post */}
      <div className="lg:ml-80 flex-1 flex flex-col xl:flex-row">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden fixed bottom-6 right-6 p-3 sm:p-4 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full shadow-lg hover:scale-110 transition-transform z-30"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Post Content */}
        <div className="flex-1 max-w-4xl mx-auto px-3 sm:px-4 md:px-8 py-3 sm:py-4 md:py-8">
          {/* Search Bar - Top Right */}
          <div className="mb-4 sm:mb-6 flex justify-end">
            <div className="w-full md:w-96">
              <SearchBar
                onSearch={(query) => {
                  navigate(`/blog/search?q=${encodeURIComponent(query)}`);
                }}
              />
            </div>
          </div>

          <PostDetail post={currentPost} onBack={handleBackToBlog} onPostClick={handlePostClick} />
        </div>

        {/* Right Sidebar - Table of Contents & Recent Posts (Hidden on mobile) */}
        <div className="hidden xl:block w-80 shrink-0 p-4 md:p-8 space-y-6">
          {/* Table of Contents */}
          <TableOfContents content={currentPost.content} />

          {/* Recent Posts */}
          <RecentPosts
            onPostClick={handlePostClick}
            currentPostId={currentPost.id}
          />
        </div>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </div>
  );
}

function AppContent() {
  const { activeBuddy, currentBuddyConfig, allBuddies, switchBuddy } = useBuddy();
  const { language } = useLanguage();

  // Apply consent on mount: load services based on current consent state
  // Analytics (Umami) is default ON (legitimate interest), so it loads even on first visit
  useEffect(() => {
    applyConsent();
  }, []);

  // App view state (blog vs learnbuddy vs admin vs tools vs games)
  const [appView, setAppView] = useState('blog'); // 'blog', 'learnbuddy', 'admin', 'tools', 'games'

  // Navigation state
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLesson, setCurrentLesson] = useState(null);

  // Blog state
  const [currentPost, setCurrentPost] = useState(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

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

  // Update document title and SEO meta tags based on active buddy and page
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

    // Only update SEO when in LearnBuddy view
    if (appView === 'learnbuddy') {
      updateMetaTags({ title, description, canonicalPath });
    } else {
      document.title = title;
    }
  }, [activeBuddy, currentBuddyConfig, currentPage, currentLesson, language, appView]);

  // Update SEO for non-blog, non-learnbuddy views
  useEffect(() => {
    const seoByView = {
      'cv': {
        title: 'Lebenslauf - Tarik Azzouzi | Software Engineer',
        description: 'Lebenslauf und berufliches Profil von Tarik Azzouzi - Software Engineer mit Erfahrung in Web Development, Cybersecurity und DevOps.',
        canonicalPath: 'cv'
      },
      'tools': {
        title: 'Tools & Utilities - Tarik Azzouzi',
        description: 'Nuetzliche Online-Tools: Logik-Test, Fokus-Detektor und mehr. Kostenlos und ohne Anmeldung.',
        canonicalPath: 'tools'
      },
      'logic-test': {
        title: 'Logik-Test - Teste dein logisches Denken',
        description: 'Kostenloser Online Logik-Test. Trainiere dein logisches Denkvermogen mit verschiedenen Aufgabentypen.',
        canonicalPath: 'tools/logic-test'
      },
      'focus-detector': {
        title: 'Fokus-Detektor - Aufmerksamkeit testen',
        description: 'Teste und trainiere deine Aufmerksamkeit und Konzentration mit dem Fokus-Detektor.',
        canonicalPath: 'tools/focus-detector'
      },
      'privacy': {
        title: 'Datenschutz - Tarik Azzouzi',
        description: 'Datenschutzerklaerung fuer codingtarik.github.io',
        canonicalPath: 'privacy'
      },
      'imprint': {
        title: 'Impressum - Tarik Azzouzi',
        description: 'Impressum und Kontaktinformationen von Tarik Azzouzi.',
        canonicalPath: 'imprint'
      },
      'games': {
        title: 'Games - DoodleDash & mehr',
        description: 'Spiele und Mini-Games zum Zeitvertreib. Probiere DoodleDash und mehr aus.',
        canonicalPath: 'games/doodledash'
      },
      'flashmaster': {
        title: 'FlashMaster - Karteikarten mit Spaced Repetition',
        description: 'Leistungsstarke Karteikarten-App mit Spaced Repetition, KI-Kartenerstellung, Anki-Import/Export, Voice-Modus und mehr.',
        canonicalPath: 'tools/flashmaster'
      },
      'device-test': {
        title: 'Mic & Webcam Test - Mikrofon und Kamera testen',
        description: 'Teste dein Mikrofon und deine Webcam direkt im Browser. Echtzeit-Visualisierung, 100% lokal, keine Daten werden gesendet.',
        canonicalPath: 'tools/device-test'
      },
      'prompt-library': {
        title: 'AI Prompt Library - Prompts speichern, organisieren & testen',
        description: 'Speichere und organisiere deine AI Prompts mit Variablen, Tags, Kategorien, Import/Export. 100% lokal im Browser.',
        canonicalPath: 'tools/prompt-library'
      },
      'data-converter': {
        title: 'Data Converter - JSON ↔ YAML ↔ TOML',
        description: 'Konvertiere zwischen JSON, YAML und TOML. Auto-Erkennung, Pretty-Print, Minify. 100% lokal im Browser.',
        canonicalPath: 'tools/data-converter'
      },
      'pubg-tierlist': {
        title: 'PUBG Weapon Tier List - All Weapons Ranked',
        description: 'PUBG Weapon Tier List with Damage, Fire Rate, Range & Stability stats. S- to D-Tier ranking of all weapons.',
        canonicalPath: 'tools/pubg-tierlist'
      },
      'aoe-strategy': {
        title: 'Age of Empires II Strategy Guide - Build Orders',
        description: 'Build Orders and strategies for every AoE2 civilization. Step-by-step from Dark Age to Castle Age.',
        canonicalPath: 'tools/aoe-strategy'
      },
      'brain-training': {
        title: 'Brain Training - 6 Science-Based Cognitive Exercises',
        description: 'Train your brain with scientifically-backed exercises: Reaction Time, Stroop Test, N-Back, Aim Trainer, Speed Reading & Peripheral Vision.',
        canonicalPath: 'tools/brain-training'
      },
      'perfect-pitch': {
        title: 'Perfect Pitch Trainer - Ear Training for Musical Notes & Intervals',
        description: 'Train your ear to identify musical notes and intervals. Three difficulty modes: White Keys, All Keys, and Intervals.',
        canonicalPath: 'tools/perfect-pitch'
      }
    };

    const seo = seoByView[appView];
    if (seo) {
      updateMetaTags(seo);
    } else if (appView === 'blog') {
      // Blog pages handle their own SEO via BlogPage/PostDetail components
      updateCanonicalUrl(window.location.pathname.replace(/^\//, '') || '');
    }
  }, [appView]);

  // Handle URL routing (history-based for SEO)
  useEffect(() => {
    const handleRouteChange = () => {
      const path = getPath();
      setCurrentPath(path);

      // Legacy hash handling is now done in navigation.js or handled by getPath for offline mode


      // Check for Privacy route
      if (path === '/privacy') {
        setAppView('privacy');
        return;
      }

      // Check for Imprint route
      if (path === '/imprint') {
        setAppView('imprint');
        return;
      }

      // Check for Admin route
      if (path.startsWith('/admin')) {
        setAppView('admin');
        return;
      }

      // Check for CV route
      if (path === '/cv') {
        setAppView('cv');
        return;
      }

      // Check for Tools route
      if (path === '/tools') {
        setAppView('tools');
        return;
      }

      // Check for Logic Test route
      if (path === '/tools/logic-test') {
        setAppView('logic-test');
        return;
      }

      // Check for Focus Detector route
      if (path === '/tools/focus-detector') {
        setAppView('focus-detector');
        return;
      }

      // Check for PDF Tools route
      if (path === '/tools/pdf-tools') {
        setAppView('pdf-tools');
        return;
      }

      // Check for Piano Studio route
      if (path === '/tools/piano') {
        setAppView('piano-studio');
        return;
      }

      // Check for FlashMaster route
      if (path === '/tools/flashmaster') {
        setAppView('flashmaster');
        return;
      }

      // Check for Travel Hub route
      if (path === '/tools/travel') {
        setAppView('travel-hub');
        return;
      }

      // Check for Device Test route
      if (path === '/tools/device-test') {
        setAppView('device-test');
        return;
      }

      // Check for Prompt Library route
      if (path === '/tools/prompt-library') {
        setAppView('prompt-library');
        return;
      }

      // Check for Data Converter route
      if (path === '/tools/data-converter') {
        setAppView('data-converter');
        return;
      }

      // Check for Markdown Editor route
      if (path === '/tools/markdown') {
        setAppView('markdown-editor');
        return;
      }

      // Check for PUBG Tier List route
      if (path === '/tools/pubg-tierlist') {
        setAppView('pubg-tierlist');
        return;
      }

      // Check for AoE Strategy route
      if (path === '/tools/aoe-strategy') {
        setAppView('aoe-strategy');
        return;
      }

      // Check for Brain Training route
      if (path === '/tools/brain-training') {
        setAppView('brain-training');
        return;
      }

      // Check for Perfect Pitch route
      if (path === '/tools/perfect-pitch') {
        setAppView('perfect-pitch');
        return;
      }

      // Check for Games routes
      if (path.startsWith('/games/')) {
        setAppView('games');
        return;
      }

      // Check for blog routes
      if (path.startsWith('/blog')) {
        setAppView('blog');

        // Check if viewing search page
        if (path.startsWith('/blog/search')) {
          setCurrentPost(null);
          return;
        }

        // Check if viewing categories page
        if (path === '/blog/categories') {
          setCurrentPost(null);
          return;
        }

        // Check if viewing projects page
        if (path === '/blog/projects') {
          setCurrentPost(null);
          return;
        }

        // Check if viewing a specific post
        const postMatch = path.match(/^\/blog\/post\/(.+)$/);
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
      }

      // Check for LearnBuddy routes
      const buddyMatch = path.match(/^\/learnbuddy\/(boulder|swim|run|gym|cook|yoga|lifeskills|cybersecurity|piano|english)(\/.*)?$/i);
      if (buddyMatch) {
        setAppView('learnbuddy');
        const buddyId = buddyMatch[1].toLowerCase();
        const subPath = buddyMatch[2] || '/home';

        if (allBuddies[buddyId] && buddyId !== activeBuddy) {
          switchBuddy(buddyId);
        }

        // Parse the path
        if (subPath === '/home' || subPath === '/') {
          setCurrentLesson(null);
          setCurrentPage('home');
        } else if (subPath === '/lessons' || subPath === '/lektionen') {
          setCurrentLesson(null);
          setCurrentPage('lektionen');
        } else if (subPath === '/plan') {
          setCurrentLesson(null);
          setCurrentPage('plan');
        } else if (subPath.startsWith('/lessons/')) {
          const lessonId = subPath.replace('/lessons/', '');
          const lesson = getLessonById(lessonId);
          if (lesson) {
            setCurrentLesson(lesson);
            setCurrentPage('lektionen');
          }
        } else if (subPath.startsWith('/custom-')) {
          const tabId = subPath.replace('/custom-', '');
          setCurrentLesson(null);
          setCurrentPage(`custom-${tabId}`);
        }
        return;
      }

      // Legacy support for old buddy URLs (without /learnbuddy prefix)
      const oldBuddyMatch = path.match(/^\/(boulder|swim|run|gym|cook|yoga|lifeskills|cybersecurity|piano|english)/i);
      if (oldBuddyMatch) {
        const buddyId = oldBuddyMatch[1].toLowerCase();
        const restPath = path.substring(`/${buddyId}`.length);
        navigate(`/learnbuddy/${buddyId}${restPath || '/home'}`, { replace: true });
        return;
      }

      // Default: root path → blog
      if (path === '/' || path === '') {
        setAppView('blog');
        return;
      }

      // Unknown route → default to blog
      setAppView('blog');
    };

    window.addEventListener('popstate', handleRouteChange);
    handleRouteChange(); // Initial check

    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [activeBuddy]);

  // Update URL when state changes
  const handleSetCurrentPage = (page) => {
    if (page.startsWith('custom-')) {
      navigate(`/learnbuddy/${activeBuddy}/${page}`);
    } else if (page === 'home') {
      navigate(`/learnbuddy/${activeBuddy}/home`);
    } else if (page === 'lektionen') {
      navigate(`/learnbuddy/${activeBuddy}/lessons`);
    } else if (page === 'plan') {
      navigate(`/learnbuddy/${activeBuddy}/plan`);
    } else {
      navigate(`/learnbuddy/${activeBuddy}/${page}`);
    }
    setCurrentPage(page);
    setCurrentLesson(null);
  };

  const handleSetCurrentLesson = (lesson) => {
    if (lesson) {
      navigate(`/learnbuddy/${activeBuddy}/lessons/${lesson.id}`);
    } else {
      navigate(`/learnbuddy/${activeBuddy}/lessons`);
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
      } else if (tabId === 'path') {
        return <BoulderSkillPath />;
      } else if (tabId === 'summary') {
        return <BoulderSummary onBack={() => handleSetCurrentPage('lektionen')} />;
      }
    } else if (activeBuddy === 'english') {
      // English components
      if (tabId === 'vocabulary') {
        return <VocabularyPage />;
      } else if (tabId === 'reading') {
        return <ReadingLibrary />;
      } else if (tabId === 'listening') {
        return <VideoPlayerPage />;
      } else if (tabId === 'writing') {
        return <WritingPage />;
      } else if (tabId === 'speaking') {
        return <SpeakingPage />;
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
    } else if (activeBuddy === 'lifeskills') {
      // LifeSkills components
      if (tabId === 'pomodoro') {
        return <PomodoroTimer />;
      } else if (tabId === 'timeaudit') {
        return <TimeAudit />;
      } else if (tabId === 'habits') {
        return <HabitTracker />;
      } else if (tabId === 'goals') {
        return <GoalTracker />;
      } else if (tabId === 'reflection') {
        return <ReflectionTool />;
      } else if (tabId === 'dayplanner') {
        return <DayPlanner />;
      }
    } else if (activeBuddy === 'piano') {
      // Piano components
      if (tabId === 'practice') {
        return <PianoPractice />;
      } else if (tabId === 'songs') {
        return <SongLibrary />;
      }
    } else if (activeBuddy === 'cook') {
      // Cook components
      if (tabId === 'recipes') {
        return <RecipeBook />;
      } else if (tabId === 'shopping') {
        return <ShoppingList />;
      } else if (tabId === 'mealplan') {
        return <MealPlanner />;
      } else if (tabId === 'timer') {
        return <KitchenTimer />;
      } else if (tabId === 'converter') {
        return <KitchenConverter />;
      } else if (tabId === 'path') {
        return <CookSkillPath />;
      }
    } else if (activeBuddy === 'gym') {
      // Gym components
      if (tabId === 'tracker') {
        return <WorkoutTracker />;
      } else if (tabId === 'curriculum') {
        return <GymSkillPath />;
      } else if (tabId === 'summary') {
        return <GymSummary onBack={() => handleSetCurrentPage('lektionen')} />;
      }
    } else if (activeBuddy === 'run') {
      // Run components
      if (tabId === 'tools') {
        return <RunTools />;
      } else if (tabId === 'curriculum') {
        return <RunSkillPath />;
      } else if (tabId === 'summary') {
        return <RunSummary onBack={() => handleSetCurrentPage('lektionen')} />;
      }
    } else if (activeBuddy === 'swim') {
      // Swim components
      if (tabId === 'tools') {
        return <SwimTools />;
      } else if (tabId === 'summary') {
        return <SwimSummary onBack={() => handleSetCurrentPage('lektionen')} />;
      }
    } else if (activeBuddy === 'yoga') {
      // Yoga components
      if (tabId === 'tools') {
        return <YogaTools />;
      }
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
      navigate('/blog');
      setAppView('blog');
    } else {
      navigate(`/learnbuddy/${activeBuddy}/home`);
      setAppView('learnbuddy');
    }
  };

  const handlePostClick = (postId) => {
    navigate(`/blog/post/${postId}`);
    const post = getPostById(postId);
    if (post) {
      setCurrentPost(post);
    }
  };

  const handleBackToBlog = () => {
    navigate('/blog');
    setCurrentPost(null);
  };

  // Determine what to render
  const renderContent = () => {
    // Privacy View
    if (appView === 'privacy') {
      return <PrivacyPage />;
    }

    // Imprint View
    if (appView === 'imprint') {
      return <ImprintPageFooter />;
    }

    // CV View
    if (appView === 'cv') {
      return <CVPage />;
    }

    // Tools View
    if (appView === 'tools') {
      return <ToolsOverviewPage />;
    }

    // Logic Test View
    if (appView === 'logic-test') {
      return <LogicTest />;
    }

    // Focus Detector View
    if (appView === 'focus-detector') {
      return <FocusDetector />;
    }

    // PDF Tools View
    if (appView === 'pdf-tools') {
      return <PdfTools />;
    }

    // Piano Studio View
    if (appView === 'piano-studio') {
      return <PianoStudio />;
    }

    // FlashMaster View
    if (appView === 'flashmaster') {
      return <FlashMaster />;
    }

    // Travel Hub View
    if (appView === 'travel-hub') {
      return <TravelHub />;
    }

    // Markdown Editor View
    if (appView === 'markdown-editor') {
      return <MarkdownEditor />;
    }

    // Device Test View
    if (appView === 'device-test') {
      return <DeviceTest />;
    }

    // Prompt Library View
    if (appView === 'prompt-library') {
      return <PromptLibrary />;
    }

    // Data Converter View
    if (appView === 'data-converter') {
      return <DataConverter />;
    }

    // PUBG Tier List View
    if (appView === 'pubg-tierlist') {
      return <PubgTierList />;
    }

    // AoE Strategy View
    if (appView === 'aoe-strategy') {
      return <AoeStrategy />;
    }

    // Brain Training View
    if (appView === 'brain-training') {
      return <BrainTraining />;
    }

    // Perfect Pitch View
    if (appView === 'perfect-pitch') {
      return <PerfectPitch />;
    }

    // Games View
    if (appView === 'games') {
      const path = getPath();
      // Check specific game route
      if (path.startsWith('/games/doodledash')) {
        return <DoodleDash />;
      }
      if (path.startsWith('/games/maexchen')) {
        return <Maexchen />;
      }
      if (path.startsWith('/games/kniffel')) {
        return <Kniffel />;
      }
      if (path.startsWith('/games/liars-dice')) {
        return <LiarsDice />;
      }
      if (path.startsWith('/games/who-am-i')) {
        return <WhoAmI />;
      }
      if (path === '/games/imposter') {
        return <Imposter />;
      }
      if (path.startsWith('/games/cupcake-chaos')) {
        return <CupcakeChaos />;
      }
      if (path === '/games/cybershield') {
        return <CyberShield />;
      }
      // Default: redirect to tools
      navigate('/tools', { replace: true });
      return null;
    }

    // Blog View
    if (appView === 'blog') {
      // Check for search page
      if (window.location.pathname.startsWith('/blog/search')) {
        return (
          <BlogSubpageWithSidebar selectedTab="search" handlePostClick={handlePostClick}>
            <SearchPage onPostClick={handlePostClick} />
          </BlogSubpageWithSidebar>
        );
      }

      // Check for categories page
      if (getPath() === '/blog/categories') {
        return (
          <BlogSubpageWithSidebar
            selectedTab="categories"
            handlePostClick={handlePostClick}
            onCategorySelect={(category) => {
              if (category === null) {
                navigate('/blog');
              } else {
                navigate(`/blog?category=${encodeURIComponent(category)}`);
              }
            }}
          >
            <CategoriesPage
              onCategorySelect={(category) => {
                if (category === null) {
                  navigate('/blog');
                } else {
                  navigate(`/blog?category=${encodeURIComponent(category)}`);
                }
              }}
            />
          </BlogSubpageWithSidebar>
        );
      }

      // Check for projects page
      if (getPath() === '/blog/projects') {
        return (
          <BlogSubpageWithSidebar selectedTab="projects" handlePostClick={handlePostClick}>
            <ProjectsPage />
          </BlogSubpageWithSidebar>
        );
      }

      if (currentPost) {
        // Blog Post Detail with Sidebar, Search and Recent Posts
        return (
          <BlogPostDetailWithSidebar
            currentPost={currentPost}
            handleBackToBlog={handleBackToBlog}
            handlePostClick={handlePostClick}
            language={language}
          />
        );
      }

      // Default Blog Page (Posts overview) - only if no other blog route matched
      return <BlogPage onPostClick={handlePostClick} />;
    }

    // Admin Panel View
    if (appView === 'admin') {
      return <AdminPanel />;
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
            {activeBuddy === 'boulder' && (
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
            {activeBuddy === 'swim' && (
              <button
                onClick={() => handleSetCurrentPage('custom-summary')}
                className="w-full mb-8 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-xl p-4 flex items-center justify-between hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-800 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    🌊
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
                <div className="text-cyan-600 dark:text-cyan-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
            )}
            {activeBuddy === 'run' && (
              <button
                onClick={() => handleSetCurrentPage('custom-summary')}
                className="w-full mb-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 flex items-center justify-between hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    🏃‍♂️
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
                <div className="text-green-600 dark:text-green-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
            )}
            {activeBuddy === 'gym' && (
              <button
                onClick={() => handleSetCurrentPage('custom-summary')}
                className="w-full mb-8 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 flex items-center justify-between hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    💪
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
                <div className="text-red-600 dark:text-red-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
            )}
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
    <div className="min-h-screen flex flex-col bg-background text-text transition-colors duration-300">
      {/* Toast Notifications */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
            borderRadius: '12px',
            padding: '16px',
            fontSize: '14px',
            fontWeight: '600',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
          loading: {
            iconTheme: {
              primary: '#3b82f6',
              secondary: '#fff',
            },
          },
        }}
      />

      {/* LearnBuddy Header - Only in LearnBuddy view */}
      {appView === 'learnbuddy' && (
        <GlobalHeader currentView={appView} onViewChange={handleViewChange} />
      )}

      {/* Main Content */}
      <div className={`flex-1 ${appView === 'learnbuddy' ? 'pt-14 sm:pt-16 pb-16 sm:pb-20' : ''}`}>
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

      {/* Footer - Show on Blog, CV, Privacy, Imprint pages, but NOT on LearnBuddy, Games */}
      {appView !== 'learnbuddy' && appView !== 'games' && appView !== 'piano-studio' && appView !== 'flashmaster' && appView !== 'markdown-editor' && appView !== 'brain-training' && appView !== 'perfect-pitch' && <Footer />}

      {/* DSGVO Consent Banner */}
      <ConsentBanner />
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
