import React, { useState } from 'react';
import ExerciseLibrary from './ExerciseLibrary';
import { saveWorkout } from '../utils/storage';
import { exercises } from '../data/exercises';

const WorkoutBuilder = ({ onSave, onCancel, initialData }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [selectedExercises, setSelectedExercises] = useState(initialData?.exercises || []);
  const [showLibrary, setShowLibrary] = useState(false);

  const addExercise = (exercise) => {
    setSelectedExercises([...selectedExercises, {
      exerciseId: exercise.id,
      sets: 3,
      reps: 10,
      targetWeight: 0
    }]);
    setShowLibrary(false);
  };

  const removeExercise = (index) => {
    const newEx = [...selectedExercises];
    newEx.splice(index, 1);
    setSelectedExercises(newEx);
  };

  const updateExerciseDetail = (index, field, value) => {
    const newEx = [...selectedExercises];
    newEx[index] = { ...newEx[index], [field]: value };
    setSelectedExercises(newEx);
  };

  const handleSave = () => {
    if (!name) return alert('Bitte gib dem Workout einen Namen.');
    if (selectedExercises.length === 0) return alert('Bitte wähle mindestens eine Übung aus.');
    
    const workout = {
      ...initialData,
      name,
      exercises: selectedExercises
    };
    saveWorkout(workout);
    onSave();
  };

  const getExerciseName = (id) => exercises.find(e => e.id === id)?.name || id;

  if (showLibrary) {
    return (
      <div>
        <button onClick={() => setShowLibrary(false)} className="mb-4 text-blue-500">← Zurück</button>
        <ExerciseLibrary onSelect={addExercise} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-1">Workout Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800"
          placeholder="z.B. Ganzkörper A"
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold">Übungen</h3>
          <button 
            onClick={() => setShowLibrary(true)}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            + Übung hinzufügen
          </button>
        </div>

        {selectedExercises.map((ex, idx) => (
          <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{getExerciseName(ex.exerciseId)}</span>
              <button onClick={() => removeExercise(idx)} className="text-red-500 text-sm">Entfernen</button>
            </div>
            <div className="flex gap-4 text-sm">
              <div>
                <label className="block text-xs text-gray-500">Sätze</label>
                <input 
                  type="number" 
                  value={ex.sets} 
                  onChange={(e) => updateExerciseDetail(idx, 'sets', e.target.value)}
                  className="w-16 p-1 rounded border dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500">Wdh.</label>
                <input 
                  type="number" 
                  value={ex.reps} 
                  onChange={(e) => updateExerciseDetail(idx, 'reps', e.target.value)}
                  className="w-16 p-1 rounded border dark:bg-gray-700"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 pt-4">
        <button 
          onClick={handleSave}
          className="flex-1 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Speichern
        </button>
        <button 
          onClick={onCancel}
          className="flex-1 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
        >
          Abbrechen
        </button>
      </div>
    </div>
  );
};

export default WorkoutBuilder;


