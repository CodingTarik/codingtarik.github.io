import React, { useState, useEffect } from 'react';
import { Dumbbell, Plus, Play, Edit, Trash2, TrendingUp, Clock } from 'lucide-react';
import { loadWorkouts, deleteWorkout, getWorkoutSessionStats } from '../utils/workoutStorage';

function TrainingPage({ onCreateWorkout, onEditWorkout, onStartWorkout }) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    loadWorkoutsData();
  }, []);

  const loadWorkoutsData = () => {
    setWorkouts(loadWorkouts());
  };

  const handleDelete = (id) => {
    if (window.confirm('Workout wirklich löschen?')) {
      deleteWorkout(id);
      loadWorkoutsData();
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-stone-800 mb-6 flex items-center gap-2">
        <Dumbbell className="text-teal-500" />
        Training & Aufwärmen
      </h1>

      <p className="text-stone-600 mb-6">
        Erstelle deine eigenen Workout-Sets mit vorgefertigten oder custom Übungen. 
        Tracke deinen Fortschritt und fordere dich bei jeder Session heraus!
      </p>

      {/* Create New Workout Button */}
      <button
        onClick={onCreateWorkout}
        className="w-full bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 mb-8"
      >
        <Plus size={24} />
        Neues Workout erstellen
      </button>

      {/* Workouts List */}
      {workouts.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <Dumbbell size={64} className="mx-auto mb-4 text-stone-300" />
          <p className="text-stone-600 text-lg mb-2">
            Noch keine Workouts erstellt
          </p>
          <p className="text-stone-500 text-sm">
            Erstelle dein erstes Workout mit custom Übungen, Pausen und Zielen!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {workouts.map(workout => {
            const stats = getWorkoutSessionStats(workout.id);
            
            return (
              <div key={workout.id} className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-stone-800 mb-1">
                      {workout.name}
                    </h3>
                    {workout.description && (
                      <p className="text-sm text-stone-600">{workout.description}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEditWorkout(workout)}
                      className="text-stone-500 hover:text-teal-500 p-2 hover:bg-teal-50 rounded transition-colors"
                      title="Bearbeiten"
                    >
                      <Edit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(workout.id)}
                      className="text-stone-500 hover:text-red-500 p-2 hover:bg-red-50 rounded transition-colors"
                      title="Löschen"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>

                {/* Workout Info */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-stone-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-teal-600">
                      {workout.exercises?.length || 0}
                    </div>
                    <div className="text-xs text-stone-600">Übungen</div>
                  </div>
                  <div className="bg-stone-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      {stats ? stats.total : 0}
                    </div>
                    <div className="text-xs text-stone-600">Sessions</div>
                  </div>
                  <div className="bg-stone-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-teal-600">
                      <TrendingUp size={24} className="mx-auto" />
                    </div>
                    <div className="text-xs text-stone-600">Fortschritt</div>
                  </div>
                </div>

                {/* Last Session */}
                {stats && (
                  <div className="mb-4 text-sm text-stone-600 flex items-center gap-2">
                    <Clock size={16} className="text-teal-500" />
                    <span>
                      Letztes Training: {new Date(stats.lastDate).toLocaleDateString('de-DE')}
                    </span>
                  </div>
                )}

                {/* Exercise Preview */}
                <div className="mb-4">
                  <div className="text-xs text-stone-500 mb-2 uppercase tracking-wide">
                    Übungen:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {workout.exercises?.slice(0, 5).map((ex, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-stone-100 text-stone-700 px-2 py-1 rounded"
                      >
                        {ex.name}
                      </span>
                    ))}
                    {workout.exercises?.length > 5 && (
                      <span className="text-xs text-stone-500 px-2 py-1">
                        +{workout.exercises.length - 5} mehr
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
                  Workout starten
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TrainingPage;

