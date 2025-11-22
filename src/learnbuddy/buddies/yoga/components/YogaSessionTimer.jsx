import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

/**
 * YogaSessionTimer - Smooth, guided yoga session timer with pose transitions
 * Features:
 * - Customizable sequences
 * - Smooth pose transitions with animations
 * - Audio cues (optional)
 * - Progress tracking
 * - Beautiful UI with smooth animations
 */
const YogaSessionTimer = ({ sequence = null, onComplete = null }) => {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPoseIndex, setCurrentPoseIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [sessionProgress, setSessionProgress] = useState(0);
  const [completedPoses, setCompletedPoses] = useState(new Set());
  
  const intervalRef = useRef(null);
  const audioContextRef = useRef(null);

  // Default sequence if none provided
  const defaultSequence = [
    { name: 'Tadasana', nameDe: 'Berg-Pose', duration: 30, description: 'Grundhaltung, Atem normalisieren' },
    { name: 'Uttanasana', nameDe: 'Vorbeuge', duration: 45, description: 'Rücken entspannen' },
    { name: 'Adho Mukha Svanasana', nameDe: 'Nach unten schauender Hund', duration: 60, description: 'Ganzkörperdehnung' },
    { name: 'Virabhadrasana I', nameDe: 'Krieger I', duration: 45, description: 'Kraft und Balance' },
    { name: 'Virabhadrasana II', nameDe: 'Krieger II', duration: 45, description: 'Hüfte öffnen' },
    { name: 'Trikonasana', nameDe: 'Dreieck', duration: 60, description: 'Seitdehnung' },
    { name: 'Savasana', nameDe: 'Entspannungslage', duration: 180, description: 'Vollständige Entspannung' },
  ];

  const activeSequence = sequence || defaultSequence;

  // Initialize timer
  useEffect(() => {
    if (activeSequence.length > 0 && currentPoseIndex < activeSequence.length) {
      const currentPose = activeSequence[currentPoseIndex];
      setTimeRemaining(currentPose.duration);
      setTotalTime(currentPose.duration);
      
      // Calculate total session time
      const total = activeSequence.reduce((sum, pose) => sum + pose.duration, 0);
      setTotalTime(total);
    }
  }, [activeSequence, currentPoseIndex]);

  // Timer logic
  useEffect(() => {
    if (isPlaying && timeRemaining > 0) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            // Move to next pose
            handleNextPose();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, timeRemaining]);

  // Calculate progress
  useEffect(() => {
    const elapsed = activeSequence
      .slice(0, currentPoseIndex)
      .reduce((sum, pose) => sum + pose.duration, 0);
    const currentElapsed = activeSequence[currentPoseIndex]?.duration - timeRemaining || 0;
    const total = activeSequence.reduce((sum, pose) => sum + pose.duration, 0);
    setSessionProgress(((elapsed + currentElapsed) / total) * 100);
  }, [currentPoseIndex, timeRemaining, activeSequence]);

  const handleNextPose = () => {
    if (currentPoseIndex < activeSequence.length - 1) {
      setCompletedPoses((prev) => new Set([...prev, currentPoseIndex]));
      setCurrentPoseIndex((prev) => prev + 1);
      const nextPose = activeSequence[currentPoseIndex + 1];
      setTimeRemaining(nextPose.duration);
      setTotalTime(nextPose.duration);
      
      // Gentle sound cue (optional - can be enabled)
      playTransitionSound();
    } else {
      // Session complete
      handleComplete();
    }
  };

  const handlePreviousPose = () => {
    if (currentPoseIndex > 0) {
      setCurrentPoseIndex((prev) => prev - 1);
      const prevPose = activeSequence[currentPoseIndex - 1];
      setTimeRemaining(prevPose.duration);
      setTotalTime(prevPose.duration);
    }
  };

  const handleComplete = () => {
    setIsPlaying(false);
    setCompletedPoses((prev) => new Set([...prev, currentPoseIndex]));
    if (onComplete) {
      onComplete();
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentPoseIndex(0);
    setCompletedPoses(new Set());
    const firstPose = activeSequence[0];
    setTimeRemaining(firstPose.duration);
    setTotalTime(firstPose.duration);
  };

  const playTransitionSound = () => {
    // Create a gentle bell-like sound using Web Audio API
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const audioContext = audioContextRef.current;
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 800;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
      // Silently fail if audio not available
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentPose = activeSequence[currentPoseIndex];
  const isLastPose = currentPoseIndex === activeSequence.length - 1;
  const isFirstPose = currentPoseIndex === 0;

  if (!currentPose) {
    return (
      <div className="text-center p-8">
        <p className="text-stone-600 dark:text-stone-400">
          {language === 'en' ? 'No sequence available' : 'Keine Sequenz verfügbar'}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-stone-600 dark:text-stone-400">
            {language === 'en' ? 'Session Progress' : 'Fortschritt'}
          </span>
          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
            {Math.round(sessionProgress)}%
          </span>
        </div>
        <div className="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${sessionProgress}%` }}
          />
        </div>
      </div>

      {/* Current Pose Card */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 mb-6 shadow-xl border border-purple-100 dark:border-purple-800">
        <div className="text-center mb-6">
          {/* Pose Number */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500 text-white font-bold text-xl mb-4 shadow-lg">
            {currentPoseIndex + 1}/{activeSequence.length}
          </div>
          
          {/* Pose Name */}
          <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-2">
            {language === 'de' && currentPose.nameDe ? currentPose.nameDe : currentPose.name}
          </h2>
          
          {/* Pose Description */}
          {currentPose.description && (
            <p className="text-stone-600 dark:text-stone-400 text-lg italic">
              {currentPose.description}
            </p>
          )}
        </div>

        {/* Timer Display */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-purple-200 dark:bg-purple-800 rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="relative bg-white dark:bg-stone-800 rounded-full p-8 border-4 border-purple-300 dark:border-purple-600">
              <Clock className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <div className="text-6xl font-bold text-purple-600 dark:text-purple-400 font-mono">
                {formatTime(timeRemaining)}
              </div>
              <div className="text-sm text-stone-500 dark:text-stone-400 mt-2">
                {language === 'en' ? 'remaining' : 'verbleibend'}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <button
            onClick={handlePreviousPose}
            disabled={isFirstPose}
            className="px-6 py-3 bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-stone-300 dark:hover:bg-stone-600 transition-all"
          >
            ← {language === 'en' ? 'Previous' : 'Zurück'}
          </button>
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-2"
          >
            {isPlaying ? (
              <>
                <Pause className="w-5 h-5" />
                {language === 'en' ? 'Pause' : 'Pause'}
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                {language === 'en' ? 'Start' : 'Start'}
              </>
            )}
          </button>
          
          <button
            onClick={handleNextPose}
            disabled={isLastPose && timeRemaining > 0}
            className="px-6 py-3 bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-stone-300 dark:hover:bg-stone-600 transition-all"
          >
            {language === 'en' ? 'Next' : 'Weiter'} →
          </button>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleReset}
            className="px-4 py-2 text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 transition-all flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            {language === 'en' ? 'Reset' : 'Zurücksetzen'}
          </button>
        </div>
      </div>

      {/* Sequence Overview */}
      <div className="bg-stone-50 dark:bg-stone-900 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-500" />
          {language === 'en' ? 'Sequence Overview' : 'Sequenz-Übersicht'}
        </h3>
        <div className="space-y-2">
          {activeSequence.map((pose, index) => {
            const isActive = index === currentPoseIndex;
            const isCompleted = completedPoses.has(index);
            
            return (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-purple-500 text-white shadow-lg transform scale-105'
                    : isCompleted
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  {isCompleted && !isActive && (
                    <CheckCircle className="w-5 h-5" />
                  )}
                  <span className="font-medium">
                    {index + 1}. {language === 'de' && pose.nameDe ? pose.nameDe : pose.name}
                  </span>
                </div>
                <span className="text-sm opacity-75">
                  {formatTime(pose.duration)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YogaSessionTimer;

