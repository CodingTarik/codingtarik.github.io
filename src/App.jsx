import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

// Context Providers
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

// Components
import BottomNavigation from './components/BottomNavigation';
import HomePage from './components/HomePage';
import LessonsPage from './components/LessonsPage';
import LessonDetailPage from './components/LessonDetailPage';
import TrainingPlanPage from './components/TrainingPlanPage';
import WarmupTimer from './components/WarmupTimer';
import TrainingPage from './components/TrainingPage';
import WorkoutBuilder from './components/WorkoutBuilder';
import WorkoutExecutor from './components/WorkoutExecutor';

// Data
import { lessons, getLessonById, getNextLesson } from './data/lessons';
import { warmupExercises } from './data/warmupExercises';

function AppContent() {
  // Navigation state
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLesson, setCurrentLesson] = useState(null);
  const [showWarmupTimer, setShowWarmupTimer] = useState(false);
  
  // Training state
  const [showWorkoutBuilder, setShowWorkoutBuilder] = useState(false);
  const [showWorkoutExecutor, setShowWorkoutExecutor] = useState(false);
  const [editingWorkout, setEditingWorkout] = useState(null);
  const [executingWorkout, setExecutingWorkout] = useState(null);
  
  // Tasks state (for Training Plan)
  const [savedTasks, setSavedTasks] = useState([]);
  const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);

  // Handle URL hash for routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
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
      } else if (hash === '#/training') {
        setCurrentLesson(null);
        setCurrentPage('training');
      } else {
        setCurrentLesson(null);
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL hash when state changes
  const handleSetCurrentPage = (page) => {
    window.location.hash = `#/${page}`;
  };

  const handleSetCurrentLesson = (lesson) => {
    if (lesson) {
      window.location.hash = `#/lessons/${lesson.id}`;
    } else {
      window.location.hash = '#/lektionen';
    }
  };

  // Load saved tasks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('boulderBuddyTasks');
    if (saved) {
      setSavedTasks(JSON.parse(saved));
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('boulderBuddyTasks', JSON.stringify(savedTasks));
  }, [savedTasks]);

  // Task management functions
  const saveTask = (task) => {
    setSavedTasks([...savedTasks, { ...task, id: Date.now() }]);
    setShowSaveConfirmation(true);
    setTimeout(() => setShowSaveConfirmation(false), 2000);
  };

  const removeTask = (taskId) => {
    setSavedTasks(savedTasks.filter(task => task.id !== taskId));
  };

  const toggleChecklistItem = (taskId, itemIndex) => {
    setSavedTasks(savedTasks.map(task => {
      if (task.id === taskId) {
        const newChecklist = [...task.checklist];
        newChecklist[itemIndex] = { ...newChecklist[itemIndex], checked: !newChecklist[itemIndex].checked };
        return { ...task, checklist: newChecklist };
      }
      return task;
    }));
  };

  // Training/Workout functions
  const handleCreateWorkout = () => {
    setEditingWorkout(null);
    setShowWorkoutBuilder(true);
  };

  const handleEditWorkout = (workout) => {
    setEditingWorkout(workout);
    setShowWorkoutBuilder(true);
  };

  const handleStartWorkout = (workout) => {
    setExecutingWorkout(workout);
    setShowWorkoutExecutor(true);
  };

  const handleWorkoutSaved = () => {
    setShowWorkoutBuilder(false);
    setEditingWorkout(null);
    // Refresh training page by setting a flag or reloading
  };

  const handleWorkoutComplete = () => {
    setShowWorkoutExecutor(false);
    setExecutingWorkout(null);
    // Show success message or stats
  };

  // Determine what to render
  const renderContent = () => {
    // Workout Executor (full screen)
    if (showWorkoutExecutor && executingWorkout) {
      return (
        <WorkoutExecutor
          workout={executingWorkout}
          onBack={() => setShowWorkoutExecutor(false)}
          onComplete={handleWorkoutComplete}
        />
      );
    }

    // Workout Builder (full screen)
    if (showWorkoutBuilder) {
      return (
        <WorkoutBuilder
          workout={editingWorkout}
          onBack={() => {
            setShowWorkoutBuilder(false);
            setEditingWorkout(null);
          }}
          onSave={handleWorkoutSaved}
        />
      );
    }

    // Warmup Timer (full screen)
    if (showWarmupTimer) {
      return (
        <WarmupTimer
          exercises={warmupExercises}
          title="Aufwärm-Routine"
          onBack={() => setShowWarmupTimer(false)}
          onSave={saveTask}
        />
      );
    }

    // Lesson Detail (full screen)
    if (currentLesson) {
      const nextLesson = getNextLesson(currentLesson.id);
      return (
        <LessonDetailPage
          lesson={currentLesson}
          onBack={() => handleSetCurrentLesson(null)}
          onSaveTask={saveTask}
          onGoToNextLesson={nextLesson ? () => handleSetCurrentLesson(nextLesson) : null}
        />
      );
    }

    // Main pages with bottom navigation
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onStartLesson={() => {
              handleSetCurrentPage('lektionen');
            }}
            onStartWarmup={() => setShowWarmupTimer(true)}
          />
        );
      
      case 'lektionen':
        return (
          <LessonsPage
            onSelectLesson={handleSetCurrentLesson}
          />
        );
      
      case 'plan':
        return (
          <TrainingPlanPage
            savedTasks={savedTasks}
            onUpdateTask={(taskId, updatedTask) => {
              setSavedTasks(savedTasks.map(task => task.id === taskId ? updatedTask : task));
            }}
            onDeleteTask={removeTask}
          />
        );
      
      case 'training':
        return (
          <TrainingPage
            onCreateWorkout={handleCreateWorkout}
            onEditWorkout={handleEditWorkout}
            onStartWorkout={handleStartWorkout}
          />
        );

      default:
        return <HomePage onStartLesson={() => setCurrentPage('lektionen')} onStartWarmup={() => setShowWarmupTimer(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-900 pb-20 transition-colors">
      {/* Save Confirmation Toast */}
      {showSaveConfirmation && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-bounce">
          <Check size={20} />
          <span className="font-semibold">Gespeichert!</span>
        </div>
      )}

      {/* Main Content */}
      {renderContent()}

      {/* Bottom Navigation - only show on main pages */}
      {!currentLesson && !showWarmupTimer && !showWorkoutBuilder && !showWorkoutExecutor && (
        <BottomNavigation currentPage={currentPage} setCurrentPage={handleSetCurrentPage} />
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

