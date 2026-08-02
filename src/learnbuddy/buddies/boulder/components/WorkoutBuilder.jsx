import React, { useState, useEffect } from 'react';
import { ChevronLeft, Save, Plus, Trash2, GripVertical, Timer, Repeat, Weight } from 'lucide-react';
import { predefinedExercises, exerciseCategories } from '../data/exercises';
import { addWorkout, updateWorkout } from '../utils/workoutStorage';

function WorkoutBuilder({ workout, onBack, onSave }) {
  const [name, setName] = useState(workout?.name || '');
  const [description, setDescription] = useState(workout?.description || '');
  const [exercises, setExercises] = useState(workout?.exercises || []);
  const [showExercisePicker, setShowExercisePicker] = useState(false);
  const [showCustomExerciseForm, setShowCustomExerciseForm] = useState(false);

  const handleSave = () => {
    if (!name.trim()) {
      alert('Bitte gib einen Namen für dein Workout ein!');
      return;
    }

    if (exercises.length === 0) {
      alert('Füge mindestens eine Übung hinzu!');
      return;
    }

    const workoutData = {
      name: name.trim(),
      description: description.trim(),
      exercises
    };

    if (workout?.id) {
      updateWorkout(workout.id, workoutData);
    } else {
      addWorkout(workoutData);
    }

    onSave();
  };

  const addExercise = (exercise) => {
    const newExercise = {
      id: `ex_${Date.now()}`,
      exerciseId: exercise.id,
      name: exercise.name,
      type: exercise.type,
      category: exercise.category,
      hasWeight: exercise.hasWeight,
      svg: exercise.svg,
      
      // Defaults
      ...(exercise.type === 'timer' && {
        duration: exercise.defaultDuration || 30,
        timerMode: 'countdown' // 'countdown' or 'challenge'
      }),
      ...(exercise.type === 'reps' && {
        reps: exercise.defaultReps || 10
      }),
      ...(exercise.hasWeight && {
        weight: 0,
        weightUnit: 'kg'
      })
    };

    setExercises([...exercises, newExercise]);
    setShowExercisePicker(false);
  };

  const addCustomExercise = (customEx) => {
    setExercises([...exercises, { ...customEx, id: `ex_${Date.now()}` }]);
    setShowCustomExerciseForm(false);
  };

  const removeExercise = (id) => {
    setExercises(exercises.filter(ex => ex.id !== id));
  };

  const updateExercise = (id, updates) => {
    setExercises(exercises.map(ex => ex.id === id ? { ...ex, ...updates } : ex));
  };

  const moveExercise = (index, direction) => {
    const newExercises = [...exercises];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (targetIndex < 0 || targetIndex >= newExercises.length) return;
    
    [newExercises[index], newExercises[targetIndex]] = [newExercises[targetIndex], newExercises[index]];
    setExercises(newExercises);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-teal-500 hover:text-teal-600 mb-6"
      >
        <ChevronLeft size={20} />
        <span>Zurück</span>
      </button>

      <h1 className="text-3xl font-bold text-stone-800 mb-6">
        {workout?.id ? 'Workout bearbeiten' : 'Neues Workout erstellen'}
      </h1>

      {/* Workout Name & Description */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="mb-4">
          <label className="block text-sm font-semibold text-stone-700 mb-2">
            Workout-Name *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="z.B. Montags-Aufwärmen, Post-Boulder-Core"
            className="w-full px-4 py-2 border-2 border-stone-200 rounded-lg focus:border-teal-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-stone-700 mb-2">
            Beschreibung (optional)
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Was ist das Ziel dieses Workouts?"
            rows={2}
            className="w-full px-4 py-2 border-2 border-stone-200 rounded-lg focus:border-teal-500 focus:outline-none resize-none"
          />
        </div>
      </div>

      {/* Exercises List */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-stone-800">Übungen</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setShowExercisePicker(true)}
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm flex items-center gap-1"
            >
              <Plus size={16} />
              Vorgefertigt
            </button>
            <button
              onClick={() => setShowCustomExerciseForm(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm flex items-center gap-1"
            >
              <Plus size={16} />
              Custom
            </button>
          </div>
        </div>

        {exercises.length === 0 ? (
          <div className="text-center py-8 text-stone-500">
            Noch keine Übungen hinzugefügt. Klicke auf "Vorgefertigt" oder "Custom"!
          </div>
        ) : (
          <div className="space-y-3">
            {exercises.map((ex, idx) => (
              <ExerciseItem
                key={ex.id}
                exercise={ex}
                index={idx}
                total={exercises.length}
                onUpdate={(updates) => updateExercise(ex.id, updates)}
                onRemove={() => removeExercise(ex.id)}
                onMove={(dir) => moveExercise(idx, dir)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="w-full bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
      >
        <Save size={24} />
        Workout speichern
      </button>

      {/* Exercise Picker Modal */}
      {showExercisePicker && (
        <ExercisePicker
          onSelect={addExercise}
          onClose={() => setShowExercisePicker(false)}
        />
      )}

      {/* Custom Exercise Form Modal */}
      {showCustomExerciseForm && (
        <CustomExerciseForm
          onSave={addCustomExercise}
          onClose={() => setShowCustomExerciseForm(false)}
        />
      )}
    </div>
  );
}

// === Exercise Item Component ===
function ExerciseItem({ exercise, index, total, onUpdate, onRemove, onMove }) {
  return (
    <div className="bg-stone-50 rounded-lg p-4 border-2 border-stone-200">
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="flex flex-col gap-1">
          <button
            onClick={() => onMove('up')}
            disabled={index === 0}
            className="text-stone-400 hover:text-teal-500 disabled:opacity-30"
          >
            ▲
          </button>
          <GripVertical size={16} className="text-stone-400" />
          <button
            onClick={() => onMove('down')}
            disabled={index === total - 1}
            className="text-stone-400 hover:text-teal-500 disabled:opacity-30"
          >
            ▼
          </button>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-stone-800">{exercise.name}</h3>
            <button
              onClick={onRemove}
              className="text-stone-400 hover:text-red-500 transition-colors"
            >
              <Trash2 size={18} />
            </button>
          </div>

          {/* Exercise Type Badge */}
          <div className="flex gap-2 mb-3">
            <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded font-semibold">
              {exercise.category}
            </span>
            {exercise.type === 'timer' && (
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded flex items-center gap-1">
                <Timer size={12} />
                Timer
              </span>
            )}
            {exercise.type === 'reps' && (
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded flex items-center gap-1">
                <Repeat size={12} />
                Wiederholungen
              </span>
            )}
          </div>

          {/* Configuration */}
          <div className="grid grid-cols-2 gap-3">
            {/* Timer Configuration */}
            {exercise.type === 'timer' && (
              <>
                <div>
                  <label className="block text-xs text-stone-600 mb-1">Timer-Modus</label>
                  <select
                    value={exercise.timerMode || 'countdown'}
                    onChange={(e) => onUpdate({ timerMode: e.target.value })}
                    className="w-full px-2 py-1 text-sm border border-stone-300 rounded focus:border-teal-500 focus:outline-none"
                  >
                    <option value="countdown">Countdown (Rückwärts)</option>
                    <option value="challenge">Challenge (Vorwärts)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-stone-600 mb-1">
                    {exercise.timerMode === 'challenge' ? 'Start-Zeit (Sek)' : 'Dauer (Sek)'}
                  </label>
                  <input
                    type="number"
                    value={exercise.duration}
                    onChange={(e) => onUpdate({ duration: parseInt(e.target.value) || 30 })}
                    min="5"
                    max="600"
                    className="w-full px-2 py-1 text-sm border border-stone-300 rounded focus:border-teal-500 focus:outline-none"
                  />
                </div>
              </>
            )}

            {/* Reps Configuration */}
            {exercise.type === 'reps' && (
              <div>
                <label className="block text-xs text-stone-600 mb-1">Wiederholungen</label>
                <input
                  type="number"
                  value={exercise.reps}
                  onChange={(e) => onUpdate({ reps: parseInt(e.target.value) || 10 })}
                  min="1"
                  max="100"
                  className="w-full px-2 py-1 text-sm border border-stone-300 rounded focus:border-teal-500 focus:outline-none"
                />
              </div>
            )}

            {/* Weight Configuration */}
            {exercise.hasWeight && (
              <>
                <div>
                  <label className="block text-xs text-stone-600 mb-1 flex items-center gap-1">
                    <Weight size={12} />
                    Gewicht
                  </label>
                  <input
                    type="number"
                    value={exercise.weight || 0}
                    onChange={(e) => onUpdate({ weight: parseFloat(e.target.value) || 0 })}
                    min="0"
                    step="0.5"
                    className="w-full px-2 py-1 text-sm border border-stone-300 rounded focus:border-teal-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-stone-600 mb-1">Einheit</label>
                  <select
                    value={exercise.weightUnit || 'kg'}
                    onChange={(e) => onUpdate({ weightUnit: e.target.value })}
                    className="w-full px-2 py-1 text-sm border border-stone-300 rounded focus:border-teal-500 focus:outline-none"
                  >
                    <option value="kg">kg</option>
                    <option value="lbs">lbs</option>
                  </select>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// === Exercise Picker Modal ===
function ExercisePicker({ onSelect, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  const filteredExercises = selectedCategory === 'Alle'
    ? predefinedExercises
    : predefinedExercises.filter(ex => ex.category === selectedCategory);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-stone-200">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Übung auswählen</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('Alle')}
              className={`px-3 py-1 rounded-lg text-sm font-semibold transition-colors ${
                selectedCategory === 'Alle'
                  ? 'bg-teal-500 text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              Alle
            </button>
            {exerciseCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-sm font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-teal-500 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Exercise List */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredExercises.map(ex => (
              <button
                key={ex.id}
                onClick={() => onSelect(ex)}
                className="bg-stone-50 hover:bg-teal-50 border-2 border-stone-200 hover:border-teal-500 rounded-lg p-4 text-left transition-all"
              >
                <div className="flex items-start gap-3">
                  {ex.svg && (
                    <div
                      className="w-12 h-12 flex-shrink-0"
                      dangerouslySetInnerHTML={{ __html: ex.svg }}
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-stone-800 mb-1">{ex.name}</h3>
                    <p className="text-xs text-stone-600 line-clamp-2">{ex.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-stone-200">
          <button
            onClick={onClose}
            className="w-full bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Abbrechen
          </button>
        </div>
      </div>
    </div>
  );
}

// === Custom Exercise Form Modal ===
function CustomExerciseForm({ onSave, onClose }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Kraft');
  const [type, setType] = useState('reps');
  const [hasWeight, setHasWeight] = useState(false);
  const [duration, setDuration] = useState(30);
  const [reps, setReps] = useState(10);

  const handleSave = () => {
    if (!name.trim()) {
      alert('Bitte gib einen Namen ein!');
      return;
    }

    const customEx = {
      name: name.trim(),
      category,
      type,
      hasWeight,
      isCustom: true,
      ...(type === 'timer' && { duration, timerMode: 'countdown' }),
      ...(type === 'reps' && { reps }),
      ...(hasWeight && { weight: 0, weightUnit: 'kg' }),
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="60" fill="#14b8a6" opacity="0.3"/>
        <text x="100" y="110" font-size="40" text-anchor="middle" fill="#14b8a6" font-weight="bold">?</text>
      </svg>`
    };

    onSave(customEx);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-stone-800 mb-6">Custom Übung erstellen</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Übungsname *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="z.B. Einarmige Klimmzüge"
                className="w-full px-4 py-2 border-2 border-stone-200 rounded-lg focus:border-teal-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Kategorie
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border-2 border-stone-200 rounded-lg focus:border-teal-500 focus:outline-none"
              >
                {exerciseCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Typ
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-4 py-2 border-2 border-stone-200 rounded-lg focus:border-teal-500 focus:outline-none"
              >
                <option value="reps">Wiederholungen</option>
                <option value="timer">Timer</option>
              </select>
            </div>

            {type === 'timer' && (
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Dauer (Sekunden)
                </label>
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value) || 30)}
                  min="5"
                  className="w-full px-4 py-2 border-2 border-stone-200 rounded-lg focus:border-teal-500 focus:outline-none"
                />
              </div>
            )}

            {type === 'reps' && (
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Wiederholungen
                </label>
                <input
                  type="number"
                  value={reps}
                  onChange={(e) => setReps(parseInt(e.target.value) || 10)}
                  min="1"
                  className="w-full px-4 py-2 border-2 border-stone-200 rounded-lg focus:border-teal-500 focus:outline-none"
                />
              </div>
            )}

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="hasWeight"
                checked={hasWeight}
                onChange={(e) => setHasWeight(e.target.checked)}
                className="w-5 h-5 text-teal-500 rounded focus:ring-teal-500"
              />
              <label htmlFor="hasWeight" className="text-sm font-semibold text-stone-700">
                Mit Gewicht
              </label>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={onClose}
              className="flex-1 bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Abbrechen
            </button>
            <button
              onClick={handleSave}
              className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Erstellen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutBuilder;

