import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../../context/LanguageContext';

/**
 * Vocabulary Learning Mascot - An encouraging owl companion
 */
function VocabularyMascot({ mood = 'happy', message = '', show = true, onComplete }) {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(message);

  useEffect(() => {
    if (show && message) {
      setIsVisible(true);
      setCurrentMessage(message);
      
      // Auto-hide after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onComplete) {
          setTimeout(onComplete, 300);
        }
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [show, message, onComplete]);

  if (!isVisible) return null;

  // Owl animations based on mood
  const getOwlExpression = () => {
    switch (mood) {
      case 'excited':
        return '🦉✨';
      case 'celebrating':
        return '🎉🦉🎉';
      case 'encouraging':
        return '💪🦉';
      case 'thinking':
        return '🤔🦉';
      case 'proud':
        return '🦉👏';
      default:
        return '🦉';
    }
  };

  const getMoodColor = () => {
    switch (mood) {
      case 'excited':
        return 'from-yellow-400 to-orange-400';
      case 'celebrating':
        return 'from-purple-400 to-pink-400';
      case 'encouraging':
        return 'from-blue-400 to-teal-400';
      case 'thinking':
        return 'from-indigo-400 to-blue-400';
      case 'proud':
        return 'from-green-400 to-emerald-400';
      default:
        return 'from-rose-400 to-pink-400';
    }
  };

  return (
    <div 
      className={`fixed bottom-24 right-4 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="relative">
        {/* Speech Bubble */}
        <div className={`relative bg-gradient-to-r ${getMoodColor()} rounded-2xl p-4 shadow-2xl max-w-xs mb-2 animate-bounce`}>
          <p className="text-white font-bold text-center">
            {currentMessage}
          </p>
          {/* Bubble tail */}
          <div className={`absolute -bottom-2 right-8 w-4 h-4 bg-gradient-to-r ${getMoodColor()} transform rotate-45`}></div>
        </div>
        
        {/* Mascot */}
        <div className="flex justify-end">
          <div className="text-6xl animate-pulse">
            {getOwlExpression()}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Get motivational messages based on context
 */
export function getMotivationalMessage(context, language = 'en') {
  const messages = {
    cardFlip: {
      en: ['Nice!', 'Keep going!', 'You got this!', 'Awesome!'],
      de: ['Super!', 'Weiter so!', 'Du schaffst das!', 'Toll!']
    },
    correct: {
      en: [
        'Perfect! 🌟',
        'Excellent! 💯',
        'You\'re on fire! 🔥',
        'Amazing work!',
        'Brilliant! ✨',
        'Fantastic!',
        'You\'re a star! ⭐',
        'Superb!'
      ],
      de: [
        'Perfekt! 🌟',
        'Ausgezeichnet! 💯',
        'Du brennst! 🔥',
        'Großartig!',
        'Brilliant! ✨',
        'Fantastisch!',
        'Du bist ein Star! ⭐',
        'Hervorragend!'
      ]
    },
    streak3: {
      en: ['3 in a row! 🎯', 'You\'re getting good!', 'Keep the streak!'],
      de: ['3 hintereinander! 🎯', 'Du wirst immer besser!', 'Halte die Serie!']
    },
    streak5: {
      en: ['5 streak! Amazing! 🔥', 'Unstoppable! 💪', 'You\'re crushing it!'],
      de: ['5er Serie! Toll! 🔥', 'Unaufhaltsam! 💪', 'Du rockst!']
    },
    streak10: {
      en: ['WOW! 10 streak! 🚀', 'You\'re a vocabulary master!', 'Incredible! 👑'],
      de: ['WOW! 10er Serie! 🚀', 'Du bist ein Vokabel-Meister!', 'Unglaublich! 👑']
    },
    sessionComplete: {
      en: [
        'Well done! 🎉',
        'Great session! 💪',
        'You did it! ⭐',
        'Proud of you! 🦉',
        'Excellent work! 🌟'
      ],
      de: [
        'Gut gemacht! 🎉',
        'Tolle Session! 💪',
        'Du hast es geschafft! ⭐',
        'Stolz auf dich! 🦉',
        'Ausgezeichnete Arbeit! 🌟'
      ]
    },
    encouragement: {
      en: [
        'Don\'t give up! 💪',
        'You\'re learning!',
        'Keep practicing!',
        'Every mistake helps!',
        'You\'re improving! 📈'
      ],
      de: [
        'Nicht aufgeben! 💪',
        'Du lernst!',
        'Weiter üben!',
        'Jeder Fehler hilft!',
        'Du wirst besser! 📈'
      ]
    },
    dailyStreak: {
      en: [
        'Day {n} streak! 🔥',
        '{n} days learning!',
        'Keep it up! Day {n}! 💪'
      ],
      de: [
        'Tag {n} Serie! 🔥',
        '{n} Tage am Lernen!',
        'Weiter so! Tag {n}! 💪'
      ]
    }
  };

  const contextMessages = messages[context] || messages.encouragement;
  const langMessages = contextMessages[language] || contextMessages.en;
  return langMessages[Math.floor(Math.random() * langMessages.length)];
}

export default VocabularyMascot;

