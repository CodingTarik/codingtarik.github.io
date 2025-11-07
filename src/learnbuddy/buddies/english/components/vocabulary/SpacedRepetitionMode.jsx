import React, { useState, useEffect } from 'react';
import { ArrowLeft, RotateCcw, Check, Trophy, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';
import { fetchCardsFromSheet, updateCardInSheet } from '../../utils/googleSheetsAPI';
import { getDueCards, calculateNextReview, RATING } from '../../utils/spacedRepetition';
import { saveReviewSession } from '../../utils/deckStorage';
import ReactMarkdown from 'react-markdown';

function SpacedRepetitionMode({ deck, onBack }) {
  const { language } = useLanguage();
  const [allCards, setAllCards] = useState([]);
  const [dueCards, setDueCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sessionStats, setSessionStats] = useState({
    again: 0,
    hard: 0,
    good: 0,
    easy: 0,
    total: 0
  });
  const [sessionComplete, setSessionComplete] = useState(false);

  useEffect(() => {
    loadCards();
  }, [deck]);

  const loadCards = async () => {
    setLoading(true);
    try {
      const fetchedCards = await fetchCardsFromSheet(deck.scriptUrl);
      setAllCards(fetchedCards);
      
      const due = getDueCards(fetchedCards);
      setDueCards(due);
      
      if (due.length === 0) {
        setSessionComplete(true);
      }
    } catch (error) {
      console.error('Error loading cards:', error);
      alert(language === 'en' ? 'Failed to load cards' : 'Karten konnten nicht geladen werden');
    } finally {
      setLoading(false);
    }
  };

  const handleRating = async (rating) => {
    const currentCard = dueCards[currentIndex];
    const updatedCard = calculateNextReview(currentCard, rating);
    
    // Update card in Google Sheets
    try {
      const cardIndex = allCards.findIndex(c => c === currentCard);
      await updateCardInSheet(deck.scriptUrl, cardIndex, updatedCard);
      
      // Update session stats
      const newStats = { ...sessionStats, total: sessionStats.total + 1 };
      switch (rating) {
        case RATING.AGAIN:
          newStats.again++;
          break;
        case RATING.HARD:
          newStats.hard++;
          break;
        case RATING.GOOD:
          newStats.good++;
          break;
        case RATING.EASY:
          newStats.easy++;
          break;
      }
      setSessionStats(newStats);
      
      // Move to next card
      if (currentIndex < dueCards.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setShowAnswer(false);
      } else {
        // Session complete
        saveReviewSession(deck.id, newStats);
        setSessionComplete(true);
      }
    } catch (error) {
      console.error('Error updating card:', error);
      alert(language === 'en' ? 'Failed to save progress' : 'Fortschritt konnte nicht gespeichert werden');
    }
  };

  const resetSession = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setSessionStats({ again: 0, hard: 0, good: 0, easy: 0, total: 0 });
    setSessionComplete(false);
    loadCards();
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-rose-500 border-t-transparent mx-auto"></div>
          <p className="mt-4 text-stone-600 dark:text-stone-400">
            {language === 'en' ? 'Loading cards...' : 'Lade Karten...'}
          </p>
        </div>
      </div>
    );
  }

  if (sessionComplete) {
    return (
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onBack}
            className="p-2 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg transition-colors"
          >
            <ArrowLeft size={24} className="text-stone-600 dark:text-stone-400" />
          </button>
          <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100">
            {deck.name}
          </h2>
        </div>

        {/* Completion Card */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 text-center border-2 border-green-200 dark:border-green-800">
          <div className="mb-6">
            <Trophy size={64} className="mx-auto text-green-500" />
          </div>
          
          <h3 className="text-3xl font-bold text-green-800 dark:text-green-300 mb-4">
            {language === 'en' ? 'Session Complete!' : 'Sitzung abgeschlossen!'}
          </h3>
          
          {sessionStats.total > 0 ? (
            <>
              <p className="text-lg text-green-700 dark:text-green-400 mb-6">
                {language === 'en' 
                  ? `You reviewed ${sessionStats.total} card${sessionStats.total > 1 ? 's' : ''}!`
                  : `Du hast ${sessionStats.total} Karte${sessionStats.total > 1 ? 'n' : ''} wiederholt!`}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white dark:bg-stone-800 rounded-xl p-4">
                  <div className="text-3xl font-bold text-red-500 mb-1">{sessionStats.again}</div>
                  <div className="text-sm text-stone-600 dark:text-stone-400">
                    {language === 'en' ? 'Again' : 'Nochmal'}
                  </div>
                </div>
                <div className="bg-white dark:bg-stone-800 rounded-xl p-4">
                  <div className="text-3xl font-bold text-orange-500 mb-1">{sessionStats.hard}</div>
                  <div className="text-sm text-stone-600 dark:text-stone-400">
                    {language === 'en' ? 'Hard' : 'Schwer'}
                  </div>
                </div>
                <div className="bg-white dark:bg-stone-800 rounded-xl p-4">
                  <div className="text-3xl font-bold text-green-500 mb-1">{sessionStats.good}</div>
                  <div className="text-sm text-stone-600 dark:text-stone-400">
                    {language === 'en' ? 'Good' : 'Gut'}
                  </div>
                </div>
                <div className="bg-white dark:bg-stone-800 rounded-xl p-4">
                  <div className="text-3xl font-bold text-blue-500 mb-1">{sessionStats.easy}</div>
                  <div className="text-sm text-stone-600 dark:text-stone-400">
                    {language === 'en' ? 'Easy' : 'Einfach'}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p className="text-lg text-green-700 dark:text-green-400 mb-6">
              {language === 'en' 
                ? 'No cards due for review right now. Great job staying on top of your studies!'
                : 'Keine Karten zum Wiederholen fällig. Gut gemacht!'}
            </p>
          )}

          <div className="flex gap-4 justify-center">
            <button
              onClick={resetSession}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
            >
              <RotateCcw size={20} />
              {language === 'en' ? 'Review Again' : 'Nochmal wiederholen'}
            </button>
            <button
              onClick={onBack}
              className="px-6 py-3 bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-100 font-bold rounded-xl hover:bg-stone-300 dark:hover:bg-stone-600 transition-all"
            >
              {language === 'en' ? 'Back to Decks' : 'Zurück zu Decks'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (dueCards.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onBack}
            className="p-2 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg transition-colors"
          >
            <ArrowLeft size={24} className="text-stone-600 dark:text-stone-400" />
          </button>
          <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100">
            {deck.name}
          </h2>
        </div>

        <div className="text-center py-12">
          <Check size={64} className="mx-auto text-green-500 mb-4" />
          <p className="text-xl text-stone-600 dark:text-stone-400">
            {language === 'en' ? 'No cards due for review!' : 'Keine Karten zum Wiederholen fällig!'}
          </p>
        </div>
      </div>
    );
  }

  const currentCard = dueCards[currentIndex];
  const progress = ((currentIndex) / dueCards.length) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg transition-colors"
          >
            <ArrowLeft size={24} className="text-stone-600 dark:text-stone-400" />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100">
              {deck.name}
            </h2>
            <p className="text-stone-600 dark:text-stone-400">
              {currentIndex + 1} / {dueCards.length} {language === 'en' ? 'cards' : 'Karten'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <TrendingUp className="text-rose-500" size={20} />
          <span className="font-bold text-stone-800 dark:text-stone-100">
            {sessionStats.total}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="h-3 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Flashcard */}
      <div
        className="bg-gradient-to-br from-white to-stone-50 dark:from-stone-800 dark:to-stone-900 rounded-2xl p-12 shadow-2xl border-2 border-stone-200 dark:border-stone-700 min-h-[400px] flex flex-col items-center justify-center cursor-pointer"
        onClick={() => !showAnswer && setShowAnswer(true)}
      >
        {!showAnswer ? (
          <>
            <div className="text-center mb-8">
              <div className="text-sm font-semibold text-rose-500 mb-4">
                {language === 'en' ? 'QUESTION' : 'FRAGE'}
              </div>
              <h3 className="text-4xl font-bold text-stone-800 dark:text-stone-100">
                {currentCard.word}
              </h3>
            </div>
            <p className="text-stone-500 dark:text-stone-400 text-center">
              {language === 'en' ? 'Click to reveal answer' : 'Klicken um Antwort zu zeigen'}
            </p>
          </>
        ) : (
          <div className="w-full">
            <div className="text-center mb-8">
              <div className="text-sm font-semibold text-rose-500 mb-2">
                {language === 'en' ? 'ANSWER' : 'ANTWORT'}
              </div>
              <h3 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-6">
                {currentCard.translation}
              </h3>
              
              {currentCard.explanation && (
                <div className="mt-6 p-4 bg-stone-100 dark:bg-stone-800 rounded-xl prose prose-sm dark:prose-invert max-w-none">
                  <ReactMarkdown>{currentCard.explanation}</ReactMarkdown>
                </div>
              )}
            </div>

            {/* Rating Buttons */}
            <div className="grid grid-cols-4 gap-3 mt-8">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRating(RATING.AGAIN);
                }}
                className="px-4 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-all"
              >
                <div className="text-lg mb-1">😰</div>
                <div className="text-xs">
                  {language === 'en' ? 'Again' : 'Nochmal'}
                </div>
                <div className="text-xs opacity-75">&lt;1m</div>
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRating(RATING.HARD);
                }}
                className="px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all"
              >
                <div className="text-lg mb-1">😐</div>
                <div className="text-xs">
                  {language === 'en' ? 'Hard' : 'Schwer'}
                </div>
                <div className="text-xs opacity-75">&lt;6m</div>
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRating(RATING.GOOD);
                }}
                className="px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all"
              >
                <div className="text-lg mb-1">😊</div>
                <div className="text-xs">
                  {language === 'en' ? 'Good' : 'Gut'}
                </div>
                <div className="text-xs opacity-75">&lt;10m</div>
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRating(RATING.EASY);
                }}
                className="px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all"
              >
                <div className="text-lg mb-1">🤩</div>
                <div className="text-xs">
                  {language === 'en' ? 'Easy' : 'Einfach'}
                </div>
                <div className="text-xs opacity-75">4d</div>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Instructions */}
      {!showAnswer && (
        <div className="mt-6 text-center text-sm text-stone-500 dark:text-stone-400">
          <p>{language === 'en' 
            ? 'Think about the answer, then click to reveal'
            : 'Denke über die Antwort nach, dann klicke um sie zu enthüllen'}</p>
        </div>
      )}
    </div>
  );
}

export default SpacedRepetitionMode;

