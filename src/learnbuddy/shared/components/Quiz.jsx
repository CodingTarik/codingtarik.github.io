import React, { useState } from 'react';
import { RefreshCw, ChevronLeft, ChevronRight, Check, Copy, BookOpen } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import toast from 'react-hot-toast';

function Quiz({ questions }) {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!questions || questions.length === 0) {
    return null;
  }
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };
  
  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsComplete(false);
  };

  const copyToRemNote = async () => {
    if (!questions || questions.length === 0) return;

    // Format for RemNote: Use >> separator for forward flashcards
    // Format: "Question >> Answer" (one per line)
    const remNoteFormat = questions
      .map(q => `${q.question} >> ${q.answer}`)
      .join('\n');

    try {
      await navigator.clipboard.writeText(remNoteFormat);
      setCopied(true);
      toast.success(
        language === 'en' 
          ? `Copied ${questions.length} questions to clipboard for RemNote!` 
          : `${questions.length} Fragen für RemNote in Zwischenablage kopiert!`
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
  
  if (isComplete) {
    return (
      <div className="bg-gradient-to-br from-teal-50 to-orange-50 dark:from-teal-900/20 dark:to-orange-900/20 rounded-lg shadow-md p-6 border-2 border-teal-500 dark:border-teal-700 mt-8">
        <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4 text-center">{t('quizComplete')}</h2>
        <div className="flex flex-col items-center gap-4">
          <Check size={48} className="text-green-500" />
          <p className="text-stone-700 dark:text-stone-300">{t('quizCompleteMessage')}</p>
          <button
            onClick={handleRestart}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw size={18} />
            {t('quizRestart')}
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="bg-gradient-to-br from-teal-50 to-orange-50 dark:from-teal-900/20 dark:to-orange-900/20 rounded-lg shadow-md p-6 border-2 border-teal-500 dark:border-teal-700 mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100">{t('knowledgeCheck')}</h2>
        <button
          onClick={copyToRemNote}
          className="flex items-center gap-2 px-3 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors text-sm font-semibold"
          title={language === 'en' ? 'Copy all questions to clipboard for RemNote' : 'Alle Fragen für RemNote kopieren'}
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
      
      <div className="perspective-1000">
        <div 
          className={`relative w-full h-64 transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
          onClick={handleFlip}
        >
          {/* Front of the card (Question) */}
          <div className="absolute w-full h-full bg-white dark:bg-stone-800 rounded-lg shadow-lg flex items-center justify-center p-6 text-center backface-hidden">
            <p className="text-lg font-semibold text-stone-800 dark:text-stone-200">{currentQuestion.question}</p>
          </div>
          
          {/* Back of the card (Answer) */}
          <div className="absolute w-full h-full bg-white dark:bg-stone-700 rounded-lg shadow-lg flex items-center justify-center p-6 text-center rotate-y-180 backface-hidden">
            <p className="text-md text-stone-700 dark:text-stone-300">{currentQuestion.answer}</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-4">
        <button 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          className="p-2 rounded-full bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 disabled:opacity-50"
        >
          <ChevronLeft size={24} className="text-stone-700 dark:text-stone-300" />
        </button>
        
        <div className="text-sm font-semibold text-stone-600 dark:text-stone-400">
          {currentIndex + 1} / {questions.length}
        </div>
        
        <button 
          onClick={handleNext} 
          className="p-2 rounded-full bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600"
        >
          <ChevronRight size={24} className="text-stone-700 dark:text-stone-300" />
        </button>
      </div>
      
      <button onClick={handleFlip} className="w-full text-center mt-4 text-teal-600 dark:text-teal-400 font-semibold flex items-center justify-center gap-1">
        <RefreshCw size={16} />
        {t('flipCard')}
      </button>
    </div>
  );
}

export default Quiz;
