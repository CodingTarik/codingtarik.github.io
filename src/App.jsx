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
import { lessons } from './data/lessons';
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
      return (
        <LessonDetailPage
          lesson={currentLesson}
          onBack={() => setCurrentLesson(null)}
          onSaveTask={saveTask}
        />
      );
    }

    // Main pages with bottom navigation
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onStartLesson={() => {
              setCurrentPage('lektionen');
              setCurrentLesson(null);
            }}
            onStartWarmup={() => setShowWarmupTimer(true)}
          />
        );
      
      case 'lektionen':
        return (
          <LessonsPage
            onSelectLesson={setCurrentLesson}
          />
        );
      
      case 'plan':
        return (
          <TrainingPlanPage
            tasks={savedTasks}
            onRemoveTask={removeTask}
            onToggleChecklistItem={toggleChecklistItem}
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
        <BottomNavigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
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

