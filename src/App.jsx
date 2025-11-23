import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Check } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

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

// Run-specific components
import RunTools from './learnbuddy/buddies/run/components/RunTools';

// Swim-specific components
import SwimTools from './learnbuddy/buddies/swim/components/SwimTools';

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

// Shared Components
import Footer from './shared/components/Footer';
import PrivacyPage from './shared/components/PrivacyPage';
import ImprintPageFooter from './shared/components/ImprintPageFooter';

// Admin Panel
import AdminPanel from './admin/AdminPanel';

function AppContent() {
  const { activeBuddy, currentBuddyConfig, allBuddies, switchBuddy } = useBuddy();
  const { language } = useLanguage();
  
  // App view state (blog vs learnbuddy vs admin)
  const [appView, setAppView] = useState('blog'); // 'blog', 'learnbuddy', or 'admin'
  
  // Navigation state
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLesson, setCurrentLesson] = useState(null);
  
  // Blog state
  const [currentPost, setCurrentPost] = useState(null);
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  
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
      setCurrentHash(hash); // Update state to trigger re-render
      
      // Check for Privacy route
      if (hash === '#/privacy') {
        setAppView('privacy');
        return;
      }

      // Check for Imprint route
      if (hash === '#/imprint') {
        setAppView('imprint');
        return;
      }

      // Check for Admin route
      if (hash.startsWith('#/admin')) {
        setAppView('admin');
        return;
      }

      // Check for CV route
      if (hash === '#/cv') {
        setAppView('cv');
        return;
      }

      // Check for blog routes
      if (hash.startsWith('#/blog')) {
        setAppView('blog');
        
        // Check if viewing search page
        if (hash.startsWith('#/blog/search')) {
          setCurrentPost(null);
          return;
        }
        
        // Check if viewing categories page
        if (hash === '#/blog/categories') {
          setCurrentPost(null);
          return;
        }
        
        // Check if viewing projects page
        if (hash === '#/blog/projects') {
          setCurrentPost(null);
          return;
        }
        
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
      } else if (hash !== '#/cv' && hash !== '#/privacy' && hash !== '#/imprint') {
        // If no hash or empty hash, default to blog
        if (!hash || hash === '' || hash === '#') {
          setAppView('blog');
          window.location.hash = '#/blog';
          return;
        }
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
        // Default redirect to blog
        window.location.hash = '#/blog';
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
      } else if (tabId === 'path') {
        return <BoulderSkillPath />;
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
      }
    } else if (activeBuddy === 'run') {
      // Run components
      if (tabId === 'tools') {
        return <RunTools />;
      }
    } else if (activeBuddy === 'swim') {
      // Swim components
      if (tabId === 'tools') {
        return <SwimTools />;
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

    // Blog View
    if (appView === 'blog') {
      // Check for search page
      if (window.location.hash.startsWith('#/blog/search')) {
        return (
          <div className="min-h-screen flex">
            {/* Left Sidebar */}
            <BlogSidebar
              onBackToLearnBuddy={() => handleViewChange('learnbuddy')}
              selectedTab="search"
              onTabChange={(tab) => {
                if (tab === 'posts') window.location.hash = '#/blog';
                else if (tab === 'search') window.location.hash = '#/blog/search';
                else if (tab === 'categories') window.location.hash = '#/blog/categories';
                else if (tab === 'projects') window.location.hash = '#/blog/projects';
                else if (tab === 'cv') window.location.hash = '#/cv';
              }}
              onCategorySelect={() => {}}
              selectedCategory={null}
              isOpen={false}
              onClose={() => {}}
            />
            
            {/* Search Page */}
            <div className="lg:ml-80 flex-1">
              <SearchPage onPostClick={handlePostClick} />
            </div>
          </div>
        );
      }
      
      // Check for categories page
      if (window.location.hash === '#/blog/categories') {
        return (
          <div className="min-h-screen flex">
            {/* Left Sidebar */}
            <BlogSidebar
              onBackToLearnBuddy={() => handleViewChange('learnbuddy')}
              selectedTab="categories"
              onTabChange={(tab) => {
                if (tab === 'posts') window.location.hash = '#/blog';
                else if (tab === 'search') window.location.hash = '#/blog/search';
                else if (tab === 'categories') window.location.hash = '#/blog/categories';
                else if (tab === 'projects') window.location.hash = '#/blog/projects';
                else if (tab === 'cv') window.location.hash = '#/cv';
              }}
              onCategorySelect={(category) => {
                if (category === null) {
                  window.location.hash = '#/blog';
                } else {
                  window.location.hash = `#/blog?category=${encodeURIComponent(category)}`;
                }
              }}
              selectedCategory={null}
              isOpen={false}
              onClose={() => {}}
            />
            
            {/* Categories Page */}
            <div className="lg:ml-80 flex-1">
              <CategoriesPage 
                onCategorySelect={(category) => {
                  if (category === null) {
                    window.location.hash = '#/blog';
                  } else {
                    window.location.hash = `#/blog?category=${encodeURIComponent(category)}`;
                  }
                }}
              />
            </div>
          </div>
        );
      }
      
      // Check for projects page
      if (window.location.hash === '#/blog/projects') {
        return (
          <div className="min-h-screen flex">
            {/* Left Sidebar */}
            <BlogSidebar
              onBackToLearnBuddy={() => handleViewChange('learnbuddy')}
              selectedTab="projects"
              onTabChange={(tab) => {
                if (tab === 'posts') window.location.hash = '#/blog';
                else if (tab === 'search') window.location.hash = '#/blog/search';
                else if (tab === 'categories') window.location.hash = '#/blog/categories';
                else if (tab === 'projects') window.location.hash = '#/blog/projects';
                else if (tab === 'cv') window.location.hash = '#/cv';
              }}
              onCategorySelect={() => {}}
              selectedCategory={null}
              isOpen={false}
              onClose={() => {}}
            />
            
            {/* Projects Page */}
            <div className="lg:ml-80 flex-1">
              <ProjectsPage />
            </div>
          </div>
        );
      }
      
      if (currentPost) {
        // Blog Post Detail with Sidebar, Search and Recent Posts
        return (
          <div className="min-h-screen flex">
            {/* Left Sidebar */}
            <BlogSidebar
              onBackToLearnBuddy={() => handleViewChange('learnbuddy')}
              selectedTab="posts"
              onTabChange={(tab) => {
                if (tab === 'posts') window.location.hash = '#/blog';
                else if (tab === 'search') window.location.hash = '#/blog/search';
                else if (tab === 'categories') window.location.hash = '#/blog/categories';
                else if (tab === 'projects') window.location.hash = '#/blog/projects';
                else if (tab === 'cv') window.location.hash = '#/cv';
              }}
              onCategorySelect={() => {}}
              selectedCategory={null}
              isOpen={false}
              onClose={() => {}}
            />

            {/* Main Content - Blog Post */}
            <div className="lg:ml-80 flex-1 flex">
              {/* Mobile Menu Button */}
              <button
                onClick={() => {}}
                className="lg:hidden fixed bottom-6 right-6 p-4 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full shadow-lg hover:scale-110 transition-transform z-30"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>

              {/* Post Content */}
              <div className="flex-1 max-w-4xl mx-auto px-4 md:px-8 py-4 md:py-8">
                {/* Search Bar - Top Right */}
                <div className="mb-6 flex justify-end">
                  <div className="w-full md:w-96">
                    <SearchBar 
                      onSearch={(query) => {
                        window.location.hash = `#/blog/search?q=${encodeURIComponent(query)}`;
                      }}
                    />
                  </div>
                </div>
                
                <PostDetail post={currentPost} onBack={handleBackToBlog} onPostClick={handlePostClick} />
              </div>

              {/* Right Sidebar - Table of Contents & Recent Posts (Hidden on mobile) */}
              <div className="hidden xl:block w-80 p-4 md:p-8 space-y-6">
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
      
      // Default Blog Page (Posts overview) - only if no other blog route matched
      return <BlogPage onPostClick={handlePostClick} onBackToLearnBuddy={() => handleViewChange('learnbuddy')} />;
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
    <div className="min-h-screen flex flex-col">
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
      <div className={`flex-1 ${appView === 'learnbuddy' ? 'pt-16 pb-20' : ''}`}>
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

      {/* Footer - Show on Blog, CV, Privacy, Imprint pages, but NOT on LearnBuddy */}
      {appView !== 'learnbuddy' && <Footer />}
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
