import React, { useState, useEffect } from 'react';
import { ArrowLeft, RotateCcw, Check, Star, Shuffle, TrendingUp, RefreshCw, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import toast from 'react-hot-toast';
import { useLanguage } from '../../../../context/LanguageContext';
import { fetchCardsFromSheet, updateCardInSheet, addCardToSheet, deleteCardFromSheet } from '../../utils/googleSheetsAPI';
import { 
  getCachedCards, 
  setCachedCards, 
  updateCardLocally,
  getPendingChanges,
  clearPendingChanges,
  getPendingChangesCount
} from '../../utils/vocabularyCache';
import ReactMarkdown from 'react-markdown';
import * as sounds from '../../utils/vocabularySounds';

function GeneralLearningMode({ deck, onBack }) {
  const { language } = useLanguage();
  const [allCards, setAllCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [pendingCount, setPendingCount] = useState(0);
  const [sessionStats, setSessionStats] = useState({
    reviewed: 0,
    ratings: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  });
  const [sessionComplete, setSessionComplete] = useState(false);
  const [shuffled, setShuffled] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [ratingFilter, setRatingFilter] = useState([1, 2, 3, 4, 5, 0]); // 0 = unrated

  useEffect(() => {
    loadCards();
    updatePendingCount();
  }, [deck]);

  useEffect(() => {
    // Apply filter when cards or filter changes
    applyFilter();
  }, [allCards, ratingFilter]);

  const updatePendingCount = () => {
    setPendingCount(getPendingChangesCount(deck.id));
  };

  const loadCards = async (forceRefresh = false) => {
    setLoading(true);
    try {
      // Try to load from cache first
      const cached = getCachedCards(deck.id);
      
      let fetchedCards;
      if (!forceRefresh && cached && cached.cards) {
        fetchedCards = cached.cards;
      } else {
        // Fetch from Google Sheets
        fetchedCards = await fetchCardsFromSheet(deck.scriptUrl);
        setCachedCards(deck.id, fetchedCards);
      }
      
      setAllCards(fetchedCards);
      
      if (fetchedCards.length === 0) {
        toast.error(language === 'en' ? 'No cards in this deck' : 'Keine Karten in diesem Deck');
        onBack();
      }
    } catch (error) {
      console.error('Error loading cards:', error);
      toast.error(language === 'en' ? 'Failed to load cards' : 'Karten konnten nicht geladen werden');
    } finally {
      setLoading(false);
    }
  };

  const applyFilter = () => {
    const filtered = allCards.filter(card => {
      const rating = card.ratingGeneral || 0;
      return ratingFilter.includes(rating);
    });
    setFilteredCards(filtered);
    setCurrentIndex(0);
  };

  const toggleRatingFilter = (rating) => {
    setRatingFilter(prev => {
      if (prev.includes(rating)) {
        // Remove rating from filter
        const newFilter = prev.filter(r => r !== rating);
        return newFilter.length > 0 ? newFilter : prev; // Keep at least one
      } else {
        // Add rating to filter
        return [...prev, rating].sort();
      }
    });
  };

  const handleShuffle = () => {
    const shuffledCards = [...filteredCards].sort(() => Math.random() - 0.5);
    setFilteredCards(shuffledCards);
    setCurrentIndex(0);
    setShowAnswer(false);
    setShuffled(true);
  };

  const handleRating = (rating) => {
    const currentCard = filteredCards[currentIndex];
    
    // Find card index in allCards
    const cardIndexInAll = allCards.findIndex(c => c.word === currentCard.word);
    
    // Update general rating locally (instant!)
    const updatedCard = {
      ...currentCard,
      ratingGeneral: rating
    };
    
    updateCardLocally(deck.id, cardIndexInAll, updatedCard);
    updatePendingCount();
    
    // Update local cards arrays for immediate UI feedback
    const updatedAllCards = [...allCards];
    updatedAllCards[cardIndexInAll] = updatedCard;
    setAllCards(updatedAllCards);
    
    const updatedFilteredCards = [...filteredCards];
    updatedFilteredCards[currentIndex] = updatedCard;
    setFilteredCards(updatedFilteredCards);
    
    // Update session stats
    const newStats = {
      reviewed: sessionStats.reviewed + 1,
      ratings: {
        ...sessionStats.ratings,
        [rating]: sessionStats.ratings[rating] + 1
      }
    };
    setSessionStats(newStats);
    
    // Play sound
    sounds.playCorrect();
    
    // Don't auto-advance - user will use navigation buttons
    setShowAnswer(false);
  };

  const handleSync = async (forceRefresh = false) => {
    setSyncing(true);
    try {
      const pending = getPendingChanges(deck.id);
      const hasPending = pending.adds.length > 0 || pending.updates.length > 0 || pending.deletes.length > 0;
      
      if (!hasPending || forceRefresh) {
        // No pending changes - just refresh from Google Sheets
        await loadCards(true);
        updatePendingCount();
        toast.success(
          language === 'en' ? 'Cards refreshed from Google Sheets!' : 'Karten von Google Sheets aktualisiert!',
          { icon: '✅' }
        );
        return;
      }
      
      // Has pending changes - upload to Google Sheets
      let errors = [];
      
      // Process deletes first (in reverse order to maintain indices)
      for (const index of pending.deletes.sort((a, b) => b - a)) {
        try {
          await deleteCardFromSheet(deck.scriptUrl, index);
        } catch (e) {
          errors.push(`Delete at index ${index}: ${e.message}`);
        }
      }
      
      // Process updates (including ratings)
      for (const { index, card } of pending.updates) {
        try {
          await updateCardInSheet(deck.scriptUrl, index, card);
        } catch (e) {
          errors.push(`Update at index ${index}: ${e.message}`);
        }
      }
      
      // Process adds
      for (const card of pending.adds) {
        try {
          const { _tempId, ...cardWithoutTemp } = card;
          await addCardToSheet(deck.scriptUrl, cardWithoutTemp);
        } catch (e) {
          errors.push(`Add card "${card.word}": ${e.message}`);
        }
      }
      
      if (errors.length > 0) {
        console.error('Sync errors:', errors);
        toast.error(
          language === 'en' ? `${errors.length} changes failed to sync` : `${errors.length} Änderungen konnten nicht synchronisiert werden`,
          { duration: 5000 }
        );
      } else {
        // Clear pending changes and reload
        clearPendingChanges(deck.id);
        await loadCards(true);
        updatePendingCount();
        toast.success(
          language === 'en' ? 'All changes synced successfully!' : 'Alle Änderungen erfolgreich synchronisiert!',
          { icon: '🎉' }
        );
      }
    } catch (error) {
      console.error('Sync error:', error);
      toast.error(language === 'en' ? 'Sync failed' : 'Synchronisierung fehlgeschlagen');
    } finally {
      setSyncing(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
      sounds.playWhoosh();
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
      sounds.playWhoosh();
    }
  };

  const resetSession = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setSessionStats({ reviewed: 0, ratings: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } });
    setSessionComplete(false);
    setShuffled(false);
    setRatingFilter([1, 2, 3, 4, 5, 0]);
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
              ? `You reviewed ${sessionStats.reviewed} out of ${filteredCards.length} cards!`
              : `Du hast ${sessionStats.reviewed} von ${filteredCards.length} Karten wiederholt!`}
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

  if (filteredCards.length === 0) {
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
          <Filter size={64} className="mx-auto text-stone-300 dark:text-stone-600 mb-4" />
          <p className="text-xl text-stone-600 dark:text-stone-400 mb-4">
            {language === 'en' ? 'No cards match your filter' : 'Keine Karten entsprechen deinem Filter'}
          </p>
          <button
            onClick={() => setRatingFilter([1, 2, 3, 4, 5, 0])}
            className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
          >
            {language === 'en' ? 'Reset Filter' : 'Filter zurücksetzen'}
          </button>
        </div>
      </div>
    );
  }

  const currentCard = filteredCards[currentIndex];
  const progress = ((currentIndex) / filteredCards.length) * 100;

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
              {currentIndex + 1} / {filteredCards.length} {language === 'en' ? 'cards' : 'Karten'}
              {filteredCards.length < allCards.length && (
                <span className="ml-2 text-xs text-purple-500">
                  ({language === 'en' ? 'filtered' : 'gefiltert'})
                </span>
              )}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {pendingCount > 0 && (
            <span className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 text-xs font-bold rounded-full">
              {pendingCount}
            </span>
          )}
          <button
            onClick={() => handleSync(false)}
            disabled={syncing}
            className={`p-2 rounded-lg transition-colors disabled:opacity-50 hover:bg-stone-200 dark:hover:bg-stone-700 ${
              pendingCount > 0 ? 'text-blue-500' : 'text-green-500'
            }`}
            title={pendingCount > 0 
              ? (language === 'en' ? 'Upload ratings' : 'Bewertungen hochladen')
              : (language === 'en' ? 'Refresh from Google Sheets' : 'Von Google Sheets aktualisieren')}
          >
            <RefreshCw size={20} className={syncing ? 'animate-spin' : ''} />
          </button>
          
          {/* Filter Button */}
          <div className="relative">
            <button
              onClick={() => setShowFilterMenu(!showFilterMenu)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                ratingFilter.length < 6
                  ? 'bg-purple-500 text-white hover:bg-purple-600'
                  : 'bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600'
              }`}
              title={language === 'en' ? 'Filter by rating' : 'Nach Bewertung filtern'}
            >
              <Filter size={18} />
              {ratingFilter.length < 6 && (
                <span className="text-xs font-bold">{ratingFilter.length}</span>
              )}
            </button>
            
            {/* Filter Dropdown */}
            {showFilterMenu && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-stone-800 rounded-xl shadow-2xl border-2 border-stone-200 dark:border-stone-700 p-4 z-10 w-64">
                <p className="text-sm font-bold text-stone-800 dark:text-stone-100 mb-3">
                  {language === 'en' ? 'Show cards with rating:' : 'Zeige Karten mit Bewertung:'}
                </p>
                <div className="space-y-2">
                  {[0, 1, 2, 3, 4, 5].map(rating => (
                    <label key={rating} className="flex items-center gap-3 cursor-pointer hover:bg-stone-100 dark:hover:bg-stone-700 p-2 rounded-lg">
                      <input
                        type="checkbox"
                        checked={ratingFilter.includes(rating)}
                        onChange={() => toggleRatingFilter(rating)}
                        className="w-4 h-4"
                      />
                      <div className="flex items-center gap-2 flex-1">
                        {rating === 0 ? (
                          <span className="text-stone-600 dark:text-stone-400 text-sm">
                            {language === 'en' ? 'Unrated' : 'Nicht bewertet'}
                          </span>
                        ) : (
                          <>
                            {[...Array(rating)].map((_, i) => (
                              <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                            ))}
                          </>
                        )}
                      </div>
                      <span className="text-xs text-stone-500">
                        ({allCards.filter(c => (c.ratingGeneral || 0) === rating).length})
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
          
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
        className={`bg-gradient-to-br from-white to-stone-50 dark:from-stone-800 dark:to-stone-900 rounded-2xl p-12 shadow-2xl border-2 border-stone-200 dark:border-stone-700 min-h-[400px] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
          isFlipping ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
        }`}
        onClick={() => {
          if (!showAnswer) {
            setIsFlipping(true);
            sounds.playCardFlip();
            setTimeout(() => {
              setShowAnswer(true);
              setIsFlipping(false);
            }, 150);
          }
        }}
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

          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-stone-200 to-stone-300 dark:from-stone-700 dark:to-stone-600 text-stone-800 dark:text-stone-100 font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={24} />
          {language === 'en' ? 'Previous' : 'Zurück'}
        </button>

        <div className="text-sm text-stone-500 dark:text-stone-400">
          {!showAnswer && (
            <p>{language === 'en' 
              ? 'Click card to reveal'
              : 'Karte klicken zum aufdecken'}</p>
          )}
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex === filteredCards.length - 1}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {language === 'en' ? 'Next' : 'Weiter'}
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default GeneralLearningMode;

