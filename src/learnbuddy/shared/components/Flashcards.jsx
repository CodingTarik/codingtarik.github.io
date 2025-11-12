import React, { useState } from 'react';
import { RotateCcw, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

function Flashcards({ notes }) {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!notes || notes.length === 0) {
    return null;
  }

  const currentNote = notes[currentIndex];
  const front = currentNote.front;
  const back = currentNote.back;

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % notes.length);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + notes.length) % notes.length);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="text-yellow-500" size={24} />
        <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100">
          {language === 'en' ? 'Study Cards' : 'Lernkarten'}
        </h2>
        <span className="text-sm text-stone-500 dark:text-stone-400">
          ({currentIndex + 1} / {notes.length})
        </span>
      </div>

      <div className="relative" style={{ perspective: '1000px' }}>
        <motion.div
          className="relative w-full h-64 cursor-pointer"
          onClick={handleFlip}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front of card */}
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(0deg)'
            }}
          >
            <div className="bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-400 rounded-xl shadow-xl p-8 h-full flex flex-col justify-center items-center border-4 border-yellow-500">
              <div className="text-sm font-semibold text-yellow-900 mb-2 uppercase tracking-wide">
                {language === 'en' ? 'Question' : 'Frage'}
              </div>
              <div className="text-2xl font-bold text-stone-900 text-center">
                {front}
              </div>
              <div className="mt-4 text-sm text-yellow-900/70">
                {language === 'en' ? 'Click to flip' : 'Klicken zum Umdrehen'}
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 rounded-xl shadow-xl p-8 h-full flex flex-col justify-center items-center border-4 border-blue-500">
              <div className="text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                {language === 'en' ? 'Answer' : 'Antwort'}
              </div>
              <div className="text-xl font-semibold text-stone-900 text-center">
                {back}
              </div>
              <div className="mt-4 text-sm text-blue-900/70">
                {language === 'en' ? 'Click to flip' : 'Klicken zum Umdrehen'}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={handlePrevious}
          className="flex items-center gap-2 px-4 py-2 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 rounded-lg transition-colors"
        >
          <ChevronLeft size={20} />
          <span className="text-stone-700 dark:text-stone-300">
            {language === 'en' ? 'Previous' : 'Zurück'}
          </span>
        </button>

        <button
          onClick={handleFlip}
          className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors"
        >
          <RotateCcw size={20} />
          <span>{language === 'en' ? 'Flip' : 'Umdrehen'}</span>
        </button>

        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-4 py-2 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 rounded-lg transition-colors"
        >
          <span className="text-stone-700 dark:text-stone-300">
            {language === 'en' ? 'Next' : 'Weiter'}
          </span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Flashcards;

