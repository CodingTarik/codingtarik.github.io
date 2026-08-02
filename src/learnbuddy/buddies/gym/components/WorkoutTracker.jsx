import React, { useState, useEffect } from 'react';
import WorkoutBuilder from './WorkoutBuilder';
import ActiveSession from './ActiveSession';
import ProgressStats from './ProgressStats';
import ExerciseLibrary from './ExerciseLibrary';
import { getWorkouts, deleteWorkout } from '../utils/storage';
import { Plus, BarChart3, Dumbbell, Trash2, Play, ChevronLeft, Trophy, History, Activity } from 'lucide-react';

const WorkoutTracker = () => {
  const [view, setView] = useState('dashboard'); // dashboard, create, active, stats, library
  const [workouts, setWorkouts] = useState([]);
  const [activeWorkout, setActiveWorkout] = useState(null);

  useEffect(() => {
    setWorkouts(getWorkouts());
  }, [view]);

  const startWorkout = (workout) => {
    setActiveWorkout(workout);
    setView('active');
  };

  const handleDelete = (id, e) => {
    e.stopPropagation();
    if (confirm('Möchtest du dieses Workout wirklich löschen?')) {
      setWorkouts(deleteWorkout(id));
    }
  };

  if (view === 'create') {
    return <WorkoutBuilder onSave={() => setView('dashboard')} onCancel={() => setView('dashboard')} />;
  }

  if (view === 'active' && activeWorkout) {
    return <ActiveSession workout={activeWorkout} onFinish={() => setView('stats')} />;
  }

  if (view === 'stats') {
    return (
      <div>
        <button onClick={() => setView('dashboard')} className="mb-6 flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors">
          <ChevronLeft size={20} />
          <span>Zurück</span>
        </button>
        <ProgressStats />
      </div>
    );
  }

  if (view === 'library') {
    return (
      <div>
        <button onClick={() => setView('dashboard')} className="mb-6 flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors">
          <ChevronLeft size={20} />
          <span>Zurück</span>
        </button>
        <h2 className="text-3xl font-bold mb-6 text-stone-800 dark:text-stone-100">Übungs-Bibliothek</h2>
        <ExerciseLibrary />
      </div>
    );
  }

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold text-stone-900 dark:text-white mb-2">Dein Training</h1>
          <p className="text-stone-500 dark:text-stone-400">Wähle ein Workout oder erstelle ein neues.</p>
        </div>
        <button 
          onClick={() => setView('create')}
          className="hidden md:flex bg-stone-900 hover:bg-black text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-transform active:scale-95 items-center gap-2"
        >
          <Plus size={20} />
          Neues Workout
        </button>
      </div>

      {/* Quick Stats / Teaser */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div 
          onClick={() => setView('stats')}
          className="cursor-pointer bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <BarChart3 className="mb-3 opacity-80" size={28} />
          <div className="font-bold text-lg">Statistik</div>
          <div className="text-purple-100 text-sm">Dein Fortschritt</div>
        </div>
        <div 
          onClick={() => setView('library')}
          className="cursor-pointer bg-gradient-to-br from-orange-400 to-red-500 text-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <Dumbbell className="mb-3 opacity-80" size={28} />
          <div className="font-bold text-lg">Übungen</div>
          <div className="text-orange-100 text-sm">Bibliothek</div>
        </div>
        <div className="cursor-pointer bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
          <Trophy className="mb-3 text-yellow-500" size={28} />
          <div className="font-bold text-lg text-stone-800 dark:text-white">Rekorde</div>
          <div className="text-stone-500 text-sm">Coming Soon</div>
        </div>
        <div className="cursor-pointer bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
          <History className="mb-3 text-blue-500" size={28} />
          <div className="font-bold text-lg text-stone-800 dark:text-white">Verlauf</div>
          <div className="text-stone-500 text-sm">Letzte Trainings</div>
        </div>
      </div>

      {/* Mobile Add Button */}
      <button 
        onClick={() => setView('create')}
        className="md:hidden w-full bg-stone-900 text-white px-6 py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2"
      >
        <Plus size={20} />
        Neues Workout erstellen
      </button>

      {/* Workouts Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-stone-800 dark:text-stone-100 flex items-center gap-2">
          <Activity className="text-red-500" />
          Deine Pläne
        </h2>
        
        {workouts.length === 0 ? (
          <div className="text-center py-16 bg-stone-50 dark:bg-stone-800/50 rounded-3xl border-2 border-dashed border-stone-200 dark:border-stone-700">
            <Dumbbell size={48} className="mx-auto text-stone-300 mb-4" />
            <h3 className="text-xl font-bold text-stone-600 dark:text-stone-400 mb-2">Noch keine Workouts</h3>
            <p className="text-stone-500 mb-6">Erstelle deinen ersten Plan um loszulegen.</p>
            <button 
              onClick={() => setView('create')}
              className="text-blue-600 font-bold hover:underline"
            >
              Jetzt erstellen →
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.map(workout => (
              <div 
                key={workout.id} 
                onClick={() => startWorkout(workout)}
                className="group bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-sm hover:shadow-xl border border-stone-100 dark:border-stone-700 transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={(e) => handleDelete(workout.id, e)}
                    className="p-2 bg-red-50 text-red-500 rounded-full hover:bg-red-100"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-stone-800 dark:text-white mb-1">{workout.name}</h3>
                  <p className="text-stone-500 text-sm">{workout.exercises.length} Übungen</p>
                </div>

                <div className="space-y-2 mb-6">
                  {workout.exercises.slice(0, 3).map((ex, i) => (
                    <div key={i} className="text-sm text-stone-600 dark:text-stone-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-stone-300"></div>
                      {/* We might need a helper to get name efficiently here, or just store it */}
                      <span className="truncate">{ex.exerciseId}</span>
                    </div>
                  ))}
                  {workout.exercises.length > 3 && (
                    <div className="text-xs text-stone-400 pl-3.5">+ {workout.exercises.length - 3} weitere</div>
                  )}
                </div>

                <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all">
                  <span>Starten</span>
                  <Play size={16} fill="currentColor" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutTracker;
