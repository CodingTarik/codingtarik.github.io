import React, { useState, useEffect } from 'react';
import { ArrowLeft, RotateCcw, Check, Star, Shuffle, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';
import { fetchCardsFromSheet, updateCardInSheet } from '../../utils/googleSheetsAPI';
import ReactMarkdown from 'react-markdown';

function GeneralLearningMode({ deck, onBack }) {
  const { language } = useLanguage();
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sessionStats, setSessionStats] = useState({
    reviewed: 0,
    ratings: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  });
  const [sessionComplete, setSessionComplete] = useState(false);
  const [shuffled, setShuffled] = useState(false);

  useEffect(() => {
    loadCards();
  }, [deck]);

  const loadCards = async () => {
    setLoading(true);
    try {
      const fetchedCards = await fetchCardsFromSheet(deck.scriptUrl);
      setCards(fetchedCards);
      
      if (fetchedCards.length === 0) {
        alert(language === 'en' ? 'No cards in this deck' : 'Keine Karten in diesem Deck');
        onBack();
      }
    } catch (error) {
      console.error('Error loading cards:', error);
      alert(language === 'en' ? 'Failed to load cards' : 'Karten konnten nicht geladen werden');
    } finally {
      setLoading(false);
    }
  };

  const handleShuffle = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setCurrentIndex(0);
    setShowAnswer(false);
    setShuffled(true);
  };

  const handleRating = async (rating) => {
    const currentCard = cards[currentIndex];
    
    // Update general rating
    try {
      const updatedCard = {
        ...currentCard,
        ratingGeneral: rating
      };
      
      const cardIndex = currentIndex;
      await updateCardInSheet(deck.scriptUrl, cardIndex, updatedCard);
      
      // Update local cards array
      const updatedCards = [...cards];
      updatedCards[currentIndex] = updatedCard;
      setCards(updatedCards);
      
      // Update session stats
      const newStats = {
        reviewed: sessionStats.reviewed + 1,
        ratings: {
          ...sessionStats.ratings,
          [rating]: sessionStats.ratings[rating] + 1
        }
      };
      setSessionStats(newStats);
      
      // Move to next card
      if (currentIndex < cards.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setShowAnswer(false);
      } else {
        setSessionComplete(true);
      }
    } catch (error) {
      console.error('Error updating card:', error);
      alert(language === 'en' ? 'Failed to save rating' : 'Bewertung konnte nicht gespeichert werden');
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    } else {
      setSessionComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    }
  };

  const resetSession = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setSessionStats({ reviewed: 0, ratings: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } });
    setSessionComplete(false);
    setShuffled(false);
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
    const avgRating = sessionStats.reviewed > 0
      ? Object.entries(sessionStats.ratings).reduce((sum, [rating, count]) => sum + (parseInt(rating) * count), 0) / sessionStats.reviewed
      : 0;

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
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 text-center border-2 border-purple-200 dark:border-purple-800">
          <div className="mb-6">
            <Check size={64} className="mx-auto text-purple-500" />
          </div>
          
          <h3 className="text-3xl font-bold text-purple-800 dark:text-purple-300 mb-4">
            {language === 'en' ? 'Review Complete!' : 'Wiederholung abgeschlossen!'}
          </h3>
          
          <p className="text-lg text-purple-700 dark:text-purple-400 mb-6">
            {language === 'en' 
              ? `You reviewed ${sessionStats.reviewed} out of ${cards.length} cards!`
              : `Du hast ${sessionStats.reviewed} von ${cards.length} Karten wiederholt!`}
          </p>

          {sessionStats.reviewed > 0 && (
            <>
              {/* Average Rating */}
              <div className="inline-flex items-center gap-2 bg-white dark:bg-stone-800 rounded-full px-6 py-3 mb-6">
                <Star className="text-yellow-500 fill-yellow-500" size={24} />
                <span className="text-2xl font-bold text-stone-800 dark:text-stone-100">
                  {avgRating.toFixed(1)}
                </span>
                <span className="text-stone-600 dark:text-stone-400">
                  / 5
                </span>
              </div>

              {/* Rating Distribution */}
              <div className="grid grid-cols-5 gap-3 mb-8">
                {[1, 2, 3, 4, 5].map(rating => (
                  <div key={rating} className="bg-white dark:bg-stone-800 rounded-xl p-4">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <Star 
                        size={16} 
                        className={rating <= avgRating ? 'text-yellow-500 fill-yellow-500' : 'text-stone-300 dark:text-stone-600'}
                      />
                      <span className="font-bold text-stone-800 dark:text-stone-100">{rating}</span>
                    </div>
                    <div className="text-2xl font-bold text-stone-800 dark:text-stone-100">
                      {sessionStats.ratings[rating]}
                    </div>
                  </div>
                ))}
              </div>
            </>
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

  const currentCard = cards[currentIndex];
  const progress = ((currentIndex) / cards.length) * 100;

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
              {currentIndex + 1} / {cards.length} {language === 'en' ? 'cards' : 'Karten'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShuffle}
            className="flex items-center gap-2 px-3 py-2 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 rounded-lg transition-colors"
            title={language === 'en' ? 'Shuffle' : 'Mischen'}
          >
            <Shuffle size={18} className="text-stone-600 dark:text-stone-400" />
          </button>
          <div className="flex items-center gap-2">
            <TrendingUp className="text-rose-500" size={20} />
            <span className="font-bold text-stone-800 dark:text-stone-100">
              {sessionStats.reviewed}
            </span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="h-3 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
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
              <div className="text-sm font-semibold text-purple-500 mb-4">
                {language === 'en' ? 'WORD' : 'WORT'}
              </div>
              <h3 className="text-4xl font-bold text-stone-800 dark:text-stone-100">
                {currentCard.word}
              </h3>
              {currentCard.ratingGeneral > 0 && (
                <div className="flex items-center justify-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < currentCard.ratingGeneral ? 'text-yellow-500 fill-yellow-500' : 'text-stone-300 dark:text-stone-600'}
                    />
                  ))}
                </div>
              )}
            </div>
            <p className="text-stone-500 dark:text-stone-400 text-center">
              {language === 'en' ? 'Click to reveal translation' : 'Klicken um Übersetzung zu zeigen'}
            </p>
          </>
        ) : (
          <div className="w-full">
            <div className="text-center mb-8">
              <div className="text-sm font-semibold text-purple-500 mb-2">
                {language === 'en' ? 'TRANSLATION' : 'ÜBERSETZUNG'}
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
            <div className="mb-6">
              <p className="text-center text-sm font-semibold text-stone-600 dark:text-stone-400 mb-3">
                {language === 'en' ? 'How well do you know this word?' : 'Wie gut kennst du dieses Wort?'}
              </p>
              <div className="flex gap-2 justify-center">
                {[1, 2, 3, 4, 5].map(rating => (
                  <button
                    key={rating}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRating(rating);
                    }}
                    className="flex flex-col items-center gap-1 px-4 py-3 bg-stone-100 dark:bg-stone-700 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white rounded-xl transition-all group"
                  >
                    <Star 
                      size={24} 
                      className="text-yellow-500 fill-yellow-500 group-hover:text-white group-hover:fill-white"
                    />
                    <span className="text-sm font-bold">{rating}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3 justify-center mt-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                disabled={currentIndex === 0}
                className="px-6 py-2 bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-100 font-semibold rounded-lg hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {language === 'en' ? 'Previous' : 'Zurück'}
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="px-6 py-2 bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-100 font-semibold rounded-lg hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors"
              >
                {language === 'en' ? 'Skip' : 'Überspringen'}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Instructions */}
      {!showAnswer && (
        <div className="mt-6 text-center text-sm text-stone-500 dark:text-stone-400">
          <p>{language === 'en' 
            ? 'Click the card to reveal the translation'
            : 'Klicke auf die Karte um die Übersetzung zu sehen'}</p>
        </div>
      )}
    </div>
  );
}

export default GeneralLearningMode;

