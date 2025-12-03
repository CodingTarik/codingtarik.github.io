import React, { useState } from 'react';
import { Plus, Trash2, GripVertical, Play, Save, Clock, Edit2, X } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import YogaSessionTimer from './YogaSessionTimer';

/**
 * SequenceBuilder - Interactive tool for building custom yoga sequences
 * Features:
 * - Drag and drop pose ordering
 * - Custom duration for each pose
 * - Save and load sequences
 * - Preview and practice sequences
 * - Beautiful, intuitive UI
 */
const SequenceBuilder = () => {
  const { language } = useLanguage();
  const [sequence, setSequence] = useState([]);
  const [sequenceName, setSequenceName] = useState('');
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);

  // Available poses database
  const availablePoses = [
    { id: 'tadasana', name: 'Tadasana', nameDe: 'Berg-Pose', defaultDuration: 30 },
    { id: 'uttanasana', name: 'Uttanasana', nameDe: 'Vorbeuge', defaultDuration: 45 },
    { id: 'adho-mukha-svanasana', name: 'Adho Mukha Svanasana', nameDe: 'Nach unten schauender Hund', defaultDuration: 60 },
    { id: 'virabhadrasana-i', name: 'Virabhadrasana I', nameDe: 'Krieger I', defaultDuration: 45 },
    { id: 'virabhadrasana-ii', name: 'Virabhadrasana II', nameDe: 'Krieger II', defaultDuration: 45 },
    { id: 'virabhadrasana-iii', name: 'Virabhadrasana III', nameDe: 'Krieger III', defaultDuration: 30 },
    { id: 'trikonasana', name: 'Trikonasana', nameDe: 'Dreieck', defaultDuration: 60 },
    { id: 'vrksasana', name: 'Vrksasana', nameDe: 'Baum-Pose', defaultDuration: 45 },
    { id: 'utkatasana', name: 'Utkatasana', nameDe: 'Stuhl-Pose', defaultDuration: 30 },
    { id: 'garudasana', name: 'Garudasana', nameDe: 'Adler-Pose', defaultDuration: 30 },
    { id: 'baddha-konasana', name: 'Baddha Konasana', nameDe: 'Gebundener Winkel', defaultDuration: 90 },
    { id: 'paschimottanasana', name: 'Paschimottanasana', nameDe: 'Sitzende Vorbeuge', defaultDuration: 60 },
    { id: 'ardha-matsyendrasana', name: 'Ardha Matsyendrasana', nameDe: 'Halber Drehsitz', defaultDuration: 45 },
    { id: 'setu-bandha-sarvangasana', name: 'Setu Bandha Sarvangasana', nameDe: 'Brücke', defaultDuration: 45 },
    { id: 'bhujangasana', name: 'Bhujangasana', nameDe: 'Kobra', defaultDuration: 30 },
    { id: 'savasana', name: 'Savasana', nameDe: 'Entspannungslage', defaultDuration: 300 },
  ];

  const addPose = (pose) => {
    const newPose = {
      ...pose,
      duration: pose.defaultDuration,
      id: `${pose.id}-${Date.now()}` // Unique ID
    };
    setSequence([...sequence, newPose]);
  };

  const removePose = (index) => {
    setSequence(sequence.filter((_, i) => i !== index));
  };

  const updatePoseDuration = (index, duration) => {
    const updated = [...sequence];
    updated[index] = { ...updated[index], duration: parseInt(duration) || 30 };
    setSequence(updated);
  };

  const movePose = (fromIndex, toIndex) => {
    const updated = [...sequence];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    setSequence(updated);
  };

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    
    const newSequence = [...sequence];
    const draggedItem = newSequence[draggedIndex];
    newSequence.splice(draggedIndex, 1);
    newSequence.splice(index, 0, draggedItem);
    setSequence(newSequence);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const calculateTotalTime = () => {
    return sequence.reduce((total, pose) => total + pose.duration, 0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const saveSequence = () => {
    if (!sequenceName.trim()) {
      alert(language === 'en' ? 'Please enter a sequence name' : 'Bitte gib einen Sequenznamen ein');
      return;
    }
    
    const sequenceData = {
      name: sequenceName,
      poses: sequence.map(pose => ({
        name: pose.name,
        nameDe: pose.nameDe,
        duration: pose.duration,
        description: pose.description || ''
      })),
      createdAt: new Date().toISOString()
    };

    // Save to localStorage
    const saved = JSON.parse(localStorage.getItem('yogaSequences') || '[]');
    saved.push(sequenceData);
    localStorage.setItem('yogaSequences', JSON.stringify(saved));
    
    alert(language === 'en' ? 'Sequence saved!' : 'Sequenz gespeichert!');
    setSequenceName('');
  };

  const startPreview = () => {
    if (sequence.length === 0) {
      alert(language === 'en' ? 'Please add poses to your sequence' : 'Bitte füge Posen zu deiner Sequenz hinzu');
      return;
    }
    setIsPreviewMode(true);
  };

  if (isPreviewMode) {
    return (
      <div>
        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={() => setIsPreviewMode(false)}
            className="text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-2"
          >
            ← {language === 'en' ? 'Back to Builder' : 'Zurück zum Builder'}
          </button>
        </div>
        <YogaSessionTimer 
          sequence={sequence.map(pose => ({
            name: language === 'de' && pose.nameDe ? pose.nameDe : pose.name,
            duration: pose.duration,
            description: pose.description || ''
          }))}
          onComplete={() => setIsPreviewMode(false)}
        />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">
          {language === 'en' ? 'Yoga Sequence Builder' : 'Yoga-Sequenz Builder'}
        </h1>
        <p className="text-stone-600 dark:text-stone-400">
          {language === 'en'
            ? 'Build your custom yoga sequence. Add poses, adjust timing, and practice!'
            : 'Erstelle deine individuelle Yoga-Sequenz. Füge Posen hinzu, passe die Zeit an und praktiziere!'}
        </p>
      </div>

      {/* Sequence Info */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 mb-6 border border-purple-100 dark:border-purple-800">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
              {language === 'en' ? 'Sequence Name' : 'Sequenzname'}
            </label>
            <input
              type="text"
              value={sequenceName}
              onChange={(e) => setSequenceName(e.target.value)}
              placeholder={language === 'en' ? 'e.g., Morning Flow' : 'z.B. Morgen-Flow'}
              className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {sequence.length}
              </div>
              <div className="text-sm text-stone-600 dark:text-stone-400">
                {language === 'en' ? 'Poses' : 'Posen'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600 dark:text-pink-400 flex items-center gap-1">
                <Clock className="w-5 h-5" />
                {formatTime(calculateTotalTime())}
              </div>
              <div className="text-sm text-stone-600 dark:text-stone-400">
                {language === 'en' ? 'Total Time' : 'Gesamtzeit'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Available Poses */}
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            {language === 'en' ? 'Available Poses' : 'Verfügbare Posen'}
          </h2>
          <div className="bg-stone-50 dark:bg-stone-900 rounded-xl p-4 max-h-[600px] overflow-y-auto">
            <div className="space-y-2">
              {availablePoses.map((pose) => (
                <button
                  key={pose.id}
                  onClick={() => addPose(pose)}
                  className="w-full text-left px-4 py-3 bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-purple-300 dark:hover:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
                >
                  <div className="font-medium text-stone-800 dark:text-stone-100">
                    {language === 'de' && pose.nameDe ? pose.nameDe : pose.name}
                  </div>
                  <div className="text-xs text-stone-500 dark:text-stone-500 mt-1">
                    {formatTime(pose.defaultDuration)}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sequence Builder */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100">
              {language === 'en' ? 'Your Sequence' : 'Deine Sequenz'}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={startPreview}
                disabled={sequence.length === 0}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                {language === 'en' ? 'Preview' : 'Vorschau'}
              </button>
              <button
                onClick={saveSequence}
                disabled={sequence.length === 0 || !sequenceName.trim()}
                className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-600 transition-all flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                {language === 'en' ? 'Save' : 'Speichern'}
              </button>
            </div>
          </div>

          {sequence.length === 0 ? (
            <div className="bg-stone-50 dark:bg-stone-900 rounded-xl p-12 text-center border-2 border-dashed border-stone-300 dark:border-stone-700">
              <p className="text-stone-500 dark:text-stone-400 mb-4">
                {language === 'en' 
                  ? 'Your sequence is empty. Add poses from the list to get started!'
                  : 'Deine Sequenz ist leer. Füge Posen aus der Liste hinzu, um zu beginnen!'}
              </p>
              <div className="text-6xl">🧘</div>
            </div>
          ) : (
            <div className="space-y-3">
              {sequence.map((pose, index) => (
                <div
                  key={pose.id}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDragEnd={handleDragEnd}
                  className={`bg-white dark:bg-stone-800 rounded-xl p-4 border-2 transition-all ${
                    draggedIndex === index
                      ? 'border-purple-500 opacity-50'
                      : 'border-stone-200 dark:border-stone-700 hover:border-purple-300 dark:hover:border-purple-600'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="cursor-move text-stone-400 hover:text-purple-500">
                      <GripVertical className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </span>
                        <span className="font-medium text-stone-800 dark:text-stone-100">
                          {language === 'de' && pose.nameDe ? pose.nameDe : pose.name}
                        </span>
                      </div>
                      
                      {editingIndex === index ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            min="5"
                            max="600"
                            value={pose.duration}
                            onChange={(e) => updatePoseDuration(index, e.target.value)}
                            className="w-24 px-2 py-1 border border-stone-300 dark:border-stone-600 rounded bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-100"
                          />
                          <span className="text-sm text-stone-600 dark:text-stone-400">
                            {language === 'en' ? 'seconds' : 'Sekunden'}
                          </span>
                          <button
                            onClick={() => setEditingIndex(null)}
                            className="text-green-600 hover:text-green-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-stone-600 dark:text-stone-400 flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {formatTime(pose.duration)}
                          </span>
                          <button
                            onClick={() => setEditingIndex(index)}
                            className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                    
                    <button
                      onClick={() => removePose(index)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      {sequence.length > 0 && (
        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
          <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
            {language === 'en' ? 'Quick Tips' : 'Schnelle Tipps'}
          </h3>
          <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
            <li>• {language === 'en' ? 'Start with warm-up poses like Tadasana or gentle stretches' : 'Beginne mit Aufwärm-Posen wie Tadasana oder sanften Dehnungen'}</li>
            <li>• {language === 'en' ? 'End with Savasana for at least 3-5 minutes' : 'Beende mit Savasana für mindestens 3-5 Minuten'}</li>
            <li>• {language === 'en' ? 'Balance standing poses with seated or lying poses' : 'Balance stehende Posen mit sitzenden oder liegenden Posen'}</li>
            <li>• {language === 'en' ? 'Drag poses to reorder them' : 'Ziehe Posen, um sie neu anzuordnen'}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SequenceBuilder;


