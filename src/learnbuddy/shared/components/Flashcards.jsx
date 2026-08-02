import React, { useState } from 'react';
import { RotateCcw, ChevronLeft, ChevronRight, BookOpen, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import toast from 'react-hot-toast';

function Flashcards({ notes }) {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const copyToRemNote = async () => {
    if (!notes || notes.length === 0) return;

    // Format for RemNote: Use >> separator for forward flashcards
    // Format: "Front >> Back" (one per line)
    const remNoteFormat = notes
      .map(note => `${note.front} >> ${note.back}`)
      .join('\n');

    try {
      await navigator.clipboard.writeText(remNoteFormat);
      setCopied(true);
      toast.success(
        language === 'en' 
          ? `Copied ${notes.length} cards to clipboard for RemNote!` 
          : `${notes.length} Karteikarten für RemNote in Zwischenablage kopiert!`
      );
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      toast.error(
        language === 'en' 
          ? 'Failed to copy to clipboard' 
          : 'Kopieren in Zwischenablage fehlgeschlagen'
      );
    }
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BookOpen className="text-yellow-500" size={24} />
          <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'Study Cards' : 'Lernkarten'}
          </h2>
          <span className="text-sm text-stone-500 dark:text-stone-400">
            ({currentIndex + 1} / {notes.length})
          </span>
        </div>
        <button
          onClick={copyToRemNote}
          className="flex items-center gap-2 px-3 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors text-sm font-semibold"
          title={language === 'en' ? 'Copy all cards to clipboard for RemNote' : 'Alle Karteikarten für RemNote kopieren'}
        >
          {copied ? (
            <>
              <Check size={16} />
              <span>{language === 'en' ? 'Copied!' : 'Kopiert!'}</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span>{language === 'en' ? 'Copy to RemNote' : 'Zu RemNote kopieren'}</span>
            </>
          )}
        </button>
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

