import React, { useState, useEffect } from 'react';
import { Dumbbell, Plus, Play, Edit, Trash2, TrendingUp, Clock, ClipboardList, BarChart3, Activity } from 'lucide-react';
import { loadWorkouts, deleteWorkout, getWorkoutSessionStats } from '../utils/workoutStorage';
import { useLanguage } from '../context/LanguageContext';
import SessionLogger from './SessionLogger';
import SessionStats from './SessionStats';
import StrengthTests from './StrengthTests';

function TrainingPage({ onCreateWorkout, onEditWorkout, onStartWorkout }) {
  const { language } = useLanguage();
  const [workouts, setWorkouts] = useState([]);
  const [activeTab, setActiveTab] = useState('workouts'); // workouts, logger, stats, strength
  const [showSessionLogger, setShowSessionLogger] = useState(false);

  useEffect(() => {
    loadWorkoutsData();
  }, []);

  const loadWorkoutsData = () => {
    setWorkouts(loadWorkouts());
  };

  const handleDelete = (id) => {
    if (window.confirm(language === 'de' ? 'Workout wirklich löschen?' : 'Really delete workout?')) {
      deleteWorkout(id);
      loadWorkoutsData();
    }
  };

  const tabs = [
    { id: 'workouts', label: 'Workouts', icon: Dumbbell },
    { id: 'logger', label: t('sessionLogger'), icon: ClipboardList },
    { id: 'stats', label: t('statistics'), icon: BarChart3 },
    { id: 'strength', label: t('strengthTests'), icon: Activity },
  ];

  // Session Logger view
  if (showSessionLogger) {
    return (
      <SessionLogger
        onComplete={() => {
          setShowSessionLogger(false);
          setActiveTab('stats');
        }}
        onCancel={() => setShowSessionLogger(false)}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Tabs */}
      <div className="mb-6 overflow-x-auto">
        <div className="flex gap-2 border-b border-stone-200 dark:border-stone-700">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 font-semibold transition-all border-b-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-teal-500 text-teal-600 dark:text-teal-400'
                    : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200'
                }`}
              >
                <Icon size={20} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'workouts' && (
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-2 flex items-center gap-2">
              <Dumbbell className="text-teal-500" />
              {language === 'de' ? 'Training & Aufwärmen' : 'Training & Warmup'}
            </h1>
            <p className="text-stone-600 dark:text-stone-400">
              {language === 'de'
                ? 'Erstelle deine eigenen Workout-Sets mit vorgefertigten oder custom Übungen. Tracke deinen Fortschritt und fordere dich bei jeder Session heraus!'
                : 'Create your own workout sets with predefined or custom exercises. Track your progress and challenge yourself with each session!'}
            </p>
          </div>

          {/* Create New Workout Button */}
          <button
            onClick={onCreateWorkout}
            className="w-full bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 mb-8"
          >
            <Plus size={24} />
            {language === 'de' ? 'Neues Workout erstellen' : 'Create New Workout'}
          </button>

          {/* Workouts List */}
          {workouts.length === 0 ? (
            <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-12 text-center">
              <Dumbbell size={64} className="mx-auto mb-4 text-stone-300" />
              <p className="text-stone-600 dark:text-stone-400 text-lg mb-2">
                {language === 'de' ? 'Noch keine Workouts erstellt' : 'No workouts created yet'}
              </p>
              <p className="text-stone-500 dark:text-stone-500 text-sm">
                {language === 'de'
                  ? 'Erstelle dein erstes Workout mit custom Übungen, Pausen und Zielen!'
                  : 'Create your first workout with custom exercises, breaks and goals!'}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {workouts.map(workout => {
                const stats = getWorkoutSessionStats(workout.id);
                
                return (
                  <div key={workout.id} className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-1">
                          {workout.name}
                        </h3>
                        {workout.description && (
                          <p className="text-sm text-stone-600 dark:text-stone-400">{workout.description}</p>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => onEditWorkout(workout)}
                          className="text-stone-500 dark:text-stone-400 hover:text-teal-500 p-2 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded transition-colors"
                          title={language === 'de' ? 'Bearbeiten' : 'Edit'}
                        >
                          <Edit size={20} />
                        </button>
                        <button
                          onClick={() => handleDelete(workout.id)}
                          className="text-stone-500 dark:text-stone-400 hover:text-red-500 p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                          title={language === 'de' ? 'Löschen' : 'Delete'}
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Workout Info */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-stone-50 dark:bg-stone-900 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-teal-600">
                          {workout.exercises?.length || 0}
                        </div>
                        <div className="text-xs text-stone-600 dark:text-stone-400">
                          {language === 'de' ? 'Übungen' : 'Exercises'}
                        </div>
                      </div>
                      <div className="bg-stone-50 dark:bg-stone-900 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-orange-600">
                          {stats ? stats.total : 0}
                        </div>
                        <div className="text-xs text-stone-600 dark:text-stone-400">Sessions</div>
                      </div>
                      <div className="bg-stone-50 dark:bg-stone-900 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-teal-600">
                          <TrendingUp size={24} className="mx-auto" />
                        </div>
                        <div className="text-xs text-stone-600 dark:text-stone-400">
                          {language === 'de' ? 'Fortschritt' : 'Progress'}
                        </div>
                      </div>
                    </div>

                    {/* Last Session */}
                    {stats && (
                      <div className="mb-4 text-sm text-stone-600 dark:text-stone-400 flex items-center gap-2">
                        <Clock size={16} className="text-teal-500" />
                        <span>
                          {language === 'de' ? 'Letztes Training' : 'Last workout'}: {new Date(stats.lastDate).toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US')}
                        </span>
                      </div>
                    )}

                    {/* Exercise Preview */}
                    <div className="mb-4">
                      <div className="text-xs text-stone-500 dark:text-stone-400 mb-2 uppercase tracking-wide">
                        {language === 'de' ? 'Übungen:' : 'Exercises:'}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {workout.exercises?.slice(0, 5).map((ex, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 px-2 py-1 rounded"
                          >
                            {ex.name}
                          </span>
                        ))}
                        {workout.exercises?.length > 5 && (
                          <span className="text-xs text-stone-500 px-2 py-1">
                            +{workout.exercises.length - 5} {language === 'de' ? 'mehr' : 'more'}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Start Button */}
                    <button
                      onClick={() => onStartWorkout(workout)}
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      <Play size={20} />
                      {language === 'de' ? 'Workout starten' : 'Start Workout'}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {activeTab === 'logger' && (
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-2 flex items-center gap-2">
              <ClipboardList className="text-teal-500" />
              {t('sessionLogger')}
            </h1>
            <p className="text-stone-600 dark:text-stone-400">
              {language === 'de'
                ? 'Logge deine Boulder-Sessions mit Fotos, Videos und detaillierten Infos!'
                : 'Log your boulder sessions with photos, videos and detailed info!'}
            </p>
          </div>

          <button
            onClick={() => setShowSessionLogger(true)}
            className="w-full bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white font-bold py-6 px-6 rounded-lg shadow-md transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3"
          >
            <Plus size={28} />
            <div className="text-left">
              <div className="text-xl">{t('startNewSession')}</div>
              <div className="text-sm text-teal-100">
                {t('logBoulders')}
              </div>
            </div>
          </button>
        </div>
      )}

      {activeTab === 'stats' && <SessionStats />}

      {activeTab === 'strength' && <StrengthTests />}
    </div>
  );
}

export default TrainingPage;

