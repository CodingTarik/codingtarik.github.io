import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Wind, Heart, Moon, Sun, Sparkles } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

/**
 * BreathingGuide - Smooth, visual breathing guide for pranayama practice
 * Features:
 * - Multiple breathing patterns (4-7-8, Box Breathing, Ujjayi, etc.)
 * - Smooth visual animations
 * - Guided audio cues
 * - Customizable timing
 * - Beautiful, calming UI
 */
const BreathingGuide = () => {
  const { language } = useLanguage();
  const [isActive, setIsActive] = useState(false);
  const [currentPhase, setCurrentPhase] = useState('inhale'); // inhale, hold, exhale, hold
  const [breathCount, setBreathCount] = useState(0);
  const [sessionTime, setSessionTime] = useState(0);
  
  const [selectedPattern, setSelectedPattern] = useState('box');
  const [customTiming, setCustomTiming] = useState({ inhale: 4, holdIn: 4, exhale: 4, holdOut: 4 });
  
  const intervalRef = useRef(null);
  const phaseTimerRef = useRef(null);
  const sessionTimerRef = useRef(null);
  const circleScaleRef = useRef(1);

  const breathingPatterns = {
    box: {
      name: language === 'en' ? 'Box Breathing' : 'Quadrat-Atmung',
      nameDe: 'Quadrat-Atmung',
      description: language === 'en' 
        ? 'Equal timing for all phases. Calming and balancing.'
        : 'Gleiche Zeit für alle Phasen. Beruhigend und ausgleichend.',
      timing: { inhale: 4, holdIn: 4, exhale: 4, holdOut: 4 },
      icon: Wind,
      color: 'blue'
    },
    '4-7-8': {
      name: '4-7-8 Breathing',
      nameDe: '4-7-8 Atmung',
      description: language === 'en'
        ? 'Deep relaxation technique. Inhale 4, hold 7, exhale 8.'
        : 'Tiefe Entspannungstechnik. Einatmen 4, halten 7, ausatmen 8.',
      timing: { inhale: 4, holdIn: 7, exhale: 8, holdOut: 0 },
      icon: Moon,
      color: 'purple'
    },
    ujjayi: {
      name: 'Ujjayi Breath',
      nameDe: 'Ujjayi-Atem',
      description: language === 'en'
        ? 'Ocean breath. Continuous flow with slight throat constriction.'
        : 'Ozean-Atem. Kontinuierlicher Fluss mit leichter Kehlkopfverengung.',
      timing: { inhale: 6, holdIn: 0, exhale: 6, holdOut: 0 },
      icon: Wind,
      color: 'teal'
    },
    energizing: {
      name: language === 'en' ? 'Energizing Breath' : 'Energie-Atmung',
      nameDe: 'Energie-Atmung',
      description: language === 'en'
        ? 'Quick, energizing pattern. Great for morning practice.'
        : 'Schnelles, energetisierendes Muster. Perfekt für Morgenpraxis.',
      timing: { inhale: 2, holdIn: 1, exhale: 2, holdOut: 1 },
      icon: Sun,
      color: 'orange'
    },
    custom: {
      name: language === 'en' ? 'Custom' : 'Individuell',
      nameDe: 'Individuell',
      description: language === 'en'
        ? 'Create your own breathing pattern.'
        : 'Erstelle dein eigenes Atemmuster.',
      timing: customTiming,
      icon: Sparkles,
      color: 'pink'
    }
  };

  const currentPattern = breathingPatterns[selectedPattern];
  const currentTiming = selectedPattern === 'custom' ? customTiming : currentPattern.timing;

  // Phase management
  useEffect(() => {
    if (!isActive) return;

    const phases = [];
    if (currentTiming.inhale > 0) phases.push({ name: 'inhale', duration: currentTiming.inhale });
    if (currentTiming.holdIn > 0) phases.push({ name: 'holdIn', duration: currentTiming.holdIn });
    if (currentTiming.exhale > 0) phases.push({ name: 'exhale', duration: currentTiming.exhale });
    if (currentTiming.holdOut > 0) phases.push({ name: 'holdOut', duration: currentTiming.holdOut });

    let phaseIndex = 0;
    let timeInPhase = 0;

    const runPhase = () => {
      if (!isActive) return;

      const currentPhaseData = phases[phaseIndex];
      if (!currentPhaseData) {
        phaseIndex = 0;
        setBreathCount((prev) => prev + 1);
        return runPhase();
      }

      setCurrentPhase(currentPhaseData.name);
      timeInPhase = currentPhaseData.duration;

      // Animate circle based on phase
      const animateCircle = () => {
        if (!isActive) return;
        
        const progress = timeInPhase / currentPhaseData.duration;
        
        if (currentPhaseData.name === 'inhale') {
          circleScaleRef.current = 1 + (progress * 0.5); // Grow from 1 to 1.5
        } else if (currentPhaseData.name === 'holdIn') {
          circleScaleRef.current = 1.5; // Hold at max
        } else if (currentPhaseData.name === 'exhale') {
          circleScaleRef.current = 1.5 - (progress * 0.5); // Shrink from 1.5 to 1
        } else {
          circleScaleRef.current = 1; // Hold at min
        }

        timeInPhase -= 0.1;
        
        if (timeInPhase > 0) {
          requestAnimationFrame(animateCircle);
        } else {
          phaseIndex = (phaseIndex + 1) % phases.length;
          if (phaseIndex === 0) {
            setBreathCount((prev) => prev + 1);
          }
          runPhase();
        }
      };

      animateCircle();
    };

    runPhase();

    return () => {
      // Cleanup handled by isActive dependency
    };
  }, [isActive, selectedPattern, currentTiming]);

  // Session timer
  useEffect(() => {
    if (isActive) {
      sessionTimerRef.current = setInterval(() => {
        setSessionTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(sessionTimerRef.current);
    }

    return () => clearInterval(sessionTimerRef.current);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
    setBreathCount(0);
    setSessionTime(0);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setBreathCount(0);
    setSessionTime(0);
    setCurrentPhase('inhale');
    circleScaleRef.current = 1;
  };

  const getPhaseText = () => {
    const texts = {
      inhale: language === 'en' ? 'Breathe In' : 'Einatmen',
      holdIn: language === 'en' ? 'Hold' : 'Halten',
      exhale: language === 'en' ? 'Breathe Out' : 'Ausatmen',
      holdOut: language === 'en' ? 'Pause' : 'Pause'
    };
    return texts[currentPhase] || '';
  };

  const getPhaseColor = () => {
    const colors = {
      inhale: 'from-blue-400 to-cyan-400',
      holdIn: 'from-purple-400 to-pink-400',
      exhale: 'from-teal-400 to-green-400',
      holdOut: 'from-stone-400 to-stone-500'
    };
    return colors[currentPhase] || 'from-purple-400 to-pink-400';
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Pattern Selection */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
          {language === 'en' ? 'Select Breathing Pattern' : 'Atemmuster wählen'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(breathingPatterns).map(([key, pattern]) => {
            const Icon = pattern.icon;
            const isSelected = selectedPattern === key;
            
            return (
              <button
                key={key}
                onClick={() => setSelectedPattern(key)}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  isSelected
                    ? `border-${pattern.color}-500 bg-${pattern.color}-50 dark:bg-${pattern.color}-900/20 shadow-lg`
                    : 'border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon className={`w-6 h-6 text-${pattern.color}-500`} />
                  <h3 className="font-bold text-stone-800 dark:text-stone-100">
                    {language === 'de' && pattern.nameDe ? pattern.nameDe : pattern.name}
                  </h3>
                </div>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  {pattern.description}
                </p>
                {key !== 'custom' && (
                  <div className="mt-2 text-xs text-stone-500 dark:text-stone-500">
                    {pattern.timing.inhale}-{pattern.timing.holdIn}-{pattern.timing.exhale}
                    {pattern.timing.holdOut > 0 && `-${pattern.timing.holdOut}`}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom Timing Editor */}
      {selectedPattern === 'custom' && (
        <div className="mb-8 bg-stone-50 dark:bg-stone-900 rounded-xl p-6">
          <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-4">
            {language === 'en' ? 'Customize Timing' : 'Zeit anpassen'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { key: 'inhale', label: language === 'en' ? 'Inhale' : 'Einatmen' },
              { key: 'holdIn', label: language === 'en' ? 'Hold In' : 'Halten (Ein)' },
              { key: 'exhale', label: language === 'en' ? 'Exhale' : 'Ausatmen' },
              { key: 'holdOut', label: language === 'en' ? 'Hold Out' : 'Halten (Aus)' }
            ].map(({ key, label }) => (
              <div key={key}>
                <label className="block text-sm font-medium text-stone-600 dark:text-stone-400 mb-2">
                  {label}
                </label>
                <input
                  type="number"
                  min="0"
                  max="20"
                  value={customTiming[key]}
                  onChange={(e) =>
                    setCustomTiming((prev) => ({
                      ...prev,
                      [key]: parseInt(e.target.value) || 0
                    }))
                  }
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Breathing Circle */}
      <div className="mb-8">
        <div className="relative flex items-center justify-center h-96">
          {/* Outer glow */}
          <div
            className={`absolute w-80 h-80 rounded-full bg-gradient-to-br ${getPhaseColor()} opacity-20 blur-3xl transition-all duration-500 ${
              isActive ? 'animate-pulse' : ''
            }`}
            style={{
              transform: `scale(${circleScaleRef.current})`,
              transition: 'transform 0.1s ease-out'
            }}
          />
          
          {/* Main circle */}
          <div
            className={`relative w-64 h-64 rounded-full bg-gradient-to-br ${getPhaseColor()} shadow-2xl transition-all duration-500 flex items-center justify-center ${
              isActive ? 'animate-pulse' : ''
            }`}
            style={{
              transform: `scale(${circleScaleRef.current})`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">{getPhaseText()}</div>
              <div className="text-2xl opacity-90">
                {breathCount} {language === 'en' ? 'breaths' : 'Atemzüge'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-stone-50 dark:bg-stone-900 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
            {breathCount}
          </div>
          <div className="text-sm text-stone-600 dark:text-stone-400">
            {language === 'en' ? 'Breaths' : 'Atemzüge'}
          </div>
        </div>
        <div className="bg-stone-50 dark:bg-stone-900 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-1">
            {formatTime(sessionTime)}
          </div>
          <div className="text-sm text-stone-600 dark:text-stone-400">
            {language === 'en' ? 'Session Time' : 'Sitzungszeit'}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-4">
        {!isActive ? (
          <button
            onClick={handleStart}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            {language === 'en' ? 'Start Breathing' : 'Atmung starten'}
          </button>
        ) : (
          <button
            onClick={handleStop}
            className="px-8 py-4 bg-stone-600 dark:bg-stone-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-2"
          >
            <Pause className="w-5 h-5" />
            {language === 'en' ? 'Pause' : 'Pause'}
          </button>
        )}
        
        <button
          onClick={handleReset}
          className="px-6 py-4 bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-xl font-medium hover:bg-stone-300 dark:hover:bg-stone-600 transition-all flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          {language === 'en' ? 'Reset' : 'Zurücksetzen'}
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
          <Heart className="w-5 h-5" />
          {language === 'en' ? 'Tips for Best Practice' : 'Tipps für die beste Praxis'}
        </h3>
        <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
          <li>• {language === 'en' ? 'Find a quiet, comfortable place' : 'Finde einen ruhigen, bequemen Platz'}</li>
          <li>• {language === 'en' ? 'Sit or lie down comfortably' : 'Setze oder lege dich bequem hin'}</li>
          <li>• {language === 'en' ? 'Close your eyes and focus on your breath' : 'Schließe die Augen und konzentriere dich auf deinen Atem'}</li>
          <li>• {language === 'en' ? 'Follow the visual guide, but listen to your body' : 'Folge dem visuellen Guide, aber höre auf deinen Körper'}</li>
          <li>• {language === 'en' ? 'Practice daily for best results' : 'Übe täglich für beste Ergebnisse'}</li>
        </ul>
      </div>
    </div>
  );
};

export default BreathingGuide;


