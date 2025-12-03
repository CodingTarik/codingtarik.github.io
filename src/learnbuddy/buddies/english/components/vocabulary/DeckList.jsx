import React, { useState, useEffect } from 'react';
import { Plus, BookOpen, Edit, Trash2, Play, Brain, TrendingUp, AlertCircle, RefreshCw, MessageCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { useLanguage } from '../../../../context/LanguageContext';
import { getDecks, deleteDeck } from '../../utils/deckStorage';
import { getDueCards } from '../../utils/spacedRepetition';
import { getPendingChangesCount, getPendingChanges, clearPendingChanges, getCachedCards, setCachedCards } from '../../utils/vocabularyCache';
import { fetchCardsFromSheet, addCardToSheet, updateCardInSheet, deleteCardFromSheet } from '../../utils/googleSheetsAPI';

function DeckList({ onCreateDeck, onEditDeck, onSelectDeck, refreshTrigger }) {
  const { language } = useLanguage();
  const [decks, setDecks] = useState([]);
  const [deckStats, setDeckStats] = useState({});
  const [pendingCounts, setPendingCounts] = useState({});
  const [syncingDeck, setSyncingDeck] = useState(null);

  useEffect(() => {
    loadDecks();
  }, [refreshTrigger]);

  const loadDecks = async () => {
    const loadedDecks = getDecks();
    setDecks(loadedDecks);
    
    // Load pending counts for each deck
    const counts = {};
    loadedDecks.forEach(deck => {
      counts[deck.id] = getPendingChangesCount(deck.id);
    });
    setPendingCounts(counts);
    
    // Load stats for each deck from cached cards
    const stats = {};
    for (const deck of loadedDecks) {
      const cached = getCachedCards(deck.id);
      const cards = cached?.cards || [];
      
      const dueCards = getDueCards(cards);
      const now = new Date();
      
      stats[deck.id] = {
        total: cards.length,
        due: dueCards.length,
        new: cards.filter(c => !c.lastReviewDate).length,
        mature: cards.filter(c => {
          if (!c.lastReviewDate) return false;
          const daysSinceReview = (now - new Date(c.lastReviewDate)) / (1000 * 60 * 60 * 24);
          return daysSinceReview > 21 && c.interval > 21;
        }).length
      };
    }
    setDeckStats(stats);
  };

  const handleDelete = (deckId, deckName) => {
    if (window.confirm(
      language === 'en' 
        ? `Are you sure you want to delete "${deckName}"? This will not delete the Google Spreadsheet.`
        : `Möchtest du "${deckName}" wirklich löschen? Das Google Spreadsheet wird nicht gelöscht.`
    )) {
      deleteDeck(deckId);
      loadDecks();
    }
  };

  const handleSync = async (deck, event, forceRefresh = false) => {
    event.stopPropagation(); // Prevent triggering deck selection
    setSyncingDeck(deck.id);
    
    try {
      const pending = getPendingChanges(deck.id);
      const hasPending = pending.adds.length > 0 || pending.updates.length > 0 || pending.deletes.length > 0;
      
      if (!hasPending || forceRefresh) {
        // No pending changes - just refresh from Google Sheets
        const fetchedCards = await fetchCardsFromSheet(deck.scriptUrl);
        setCachedCards(deck.id, fetchedCards);
        loadDecks();
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
      
      // Process updates
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
        // Clear pending changes and reload from Google Sheets
        clearPendingChanges(deck.id);
        
        // Fetch fresh data from Google Sheets
        const fetchedCards = await fetchCardsFromSheet(deck.scriptUrl);
        setCachedCards(deck.id, fetchedCards);
        
        // Reload the deck list to update pending counts
        loadDecks();
        
        toast.success(
          language === 'en' ? 'All changes synced successfully!' : 'Alle Änderungen erfolgreich synchronisiert!',
          { icon: '🎉' }
        );
      }
    } catch (error) {
      console.error('Sync error:', error);
      toast.error(language === 'en' ? 'Sync failed' : 'Synchronisierung fehlgeschlagen');
    } finally {
      setSyncingDeck(null);
    }
  };

  if (decks.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="mb-6">
          <BookOpen size={64} className="mx-auto text-stone-300 dark:text-stone-600" />
        </div>
        <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
          {language === 'en' ? 'No Decks Yet' : 'Noch keine Decks'}
        </h3>
        <p className="text-stone-600 dark:text-stone-400 mb-8 max-w-md mx-auto">
          {language === 'en' 
            ? 'Create your first vocabulary deck to start learning!'
            : 'Erstelle dein erstes Vokabel-Deck, um mit dem Lernen zu beginnen!'}
        </p>
        <button
          onClick={onCreateDeck}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
        >
          <Plus size={20} />
          {language === 'en' ? 'Create First Deck' : 'Erstes Deck erstellen'}
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'My Decks' : 'Meine Decks'}
          </h2>
          <p className="text-stone-600 dark:text-stone-400">
            {decks.length} {decks.length === 1 
              ? (language === 'en' ? 'deck' : 'Deck')
              : (language === 'en' ? 'decks' : 'Decks')}
          </p>
        </div>
        <button
          onClick={onCreateDeck}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
        >
          <Plus size={20} />
          {language === 'en' ? 'New Deck' : 'Neues Deck'}
        </button>
      </div>

      {/* Deck Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {decks.map(deck => {
          const stats = deckStats[deck.id] || { total: 0, new: 0, learning: 0, mature: 0, due: 0 };
          const pendingCount = pendingCounts[deck.id] || 0;
          
          return (
            <div
              key={deck.id}
              className="group bg-gradient-to-br from-white to-stone-50 dark:from-stone-800 dark:to-stone-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-stone-200 dark:border-stone-700 overflow-hidden"
            >
              {/* Deck Header */}
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="text-white" size={32} />
                    {pendingCount > 0 && (
                      <span className="px-2 py-0.5 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                        <AlertCircle size={12} />
                        {pendingCount}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => onEditDeck(deck)}
                      className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                      title={language === 'en' ? 'Edit' : 'Bearbeiten'}
                    >
                      <Edit size={16} className="text-white" />
                    </button>
                    <button
                      onClick={() => handleDelete(deck.id, deck.name)}
                      className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                      title={language === 'en' ? 'Delete' : 'Löschen'}
                    >
                      <Trash2 size={16} className="text-white" />
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{deck.name}</h3>
                {deck.description && (
                  <p className="text-sm text-white/80 line-clamp-2">{deck.description}</p>
                )}
                {pendingCount > 0 && (
                  <p className="text-xs text-orange-200 mt-2 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {language === 'en' 
                      ? `${pendingCount} change${pendingCount > 1 ? 's' : ''} not synced`
                      : `${pendingCount} Änderung${pendingCount > 1 ? 'en' : ''} nicht synchronisiert`}
                  </p>
                )}
              </div>

              {/* Stats */}
              <div className="p-4">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {stats.total}
                    </div>
                    <div className="text-xs text-blue-800 dark:text-blue-300">
                      {language === 'en' ? 'Total Cards' : 'Karten'}
                    </div>
                  </div>
                  
                  <div className="bg-rose-50 dark:bg-rose-900/20 rounded-lg p-3">
                    <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">
                      {stats.due}
                    </div>
                    <div className="text-xs text-rose-800 dark:text-rose-300">
                      {language === 'en' ? 'Due Now' : 'Fällig'}
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {stats.new}
                    </div>
                    <div className="text-xs text-green-800 dark:text-green-300">
                      {language === 'en' ? 'New' : 'Neu'}
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {stats.mature}
                    </div>
                    <div className="text-xs text-purple-800 dark:text-purple-300">
                      {language === 'en' ? 'Mastered' : 'Gelernt'}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  {/* Sync Button - always visible, changes based on pending state */}
                  <button
                    onClick={(e) => handleSync(deck, e, false)}
                    disabled={syncingDeck === deck.id}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 ${
                      pendingCount > 0
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                        : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                    }`}
                  >
                    <RefreshCw size={18} className={syncingDeck === deck.id ? 'animate-spin' : ''} />
                    {syncingDeck === deck.id
                      ? (language === 'en' ? 'Syncing...' : 'Synchronisiere...')
                      : pendingCount > 0
                        ? (language === 'en' ? `Upload ${pendingCount}` : `${pendingCount} hochladen`)
                        : (language === 'en' ? 'Refresh' : 'Aktualisieren')}
                  </button>
                  
                  <button
                    onClick={() => onSelectDeck(deck, 'spaced')}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                  >
                    <Brain size={18} />
                    {language === 'en' ? 'Spaced Repetition' : 'Spaced Repetition'}
                  </button>
                  
                  <button
                    onClick={() => onSelectDeck(deck, 'general')}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-100 font-bold rounded-xl hover:bg-stone-300 dark:hover:bg-stone-600 transition-all"
                  >
                    <Play size={18} />
                    {language === 'en' ? 'General Review' : 'Allgemeine Wiederholung'}
                  </button>
                  
                  <button
                    onClick={() => onSelectDeck(deck, 'aitutor')}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                  >
                    <MessageCircle size={18} />
                    {language === 'en' ? 'AI Tutor' : 'AI Tutor'}
                  </button>
                  
                  <button
                    onClick={() => onSelectDeck(deck, 'manage')}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 text-stone-600 dark:text-stone-400 hover:text-rose-500 dark:hover:text-rose-400 font-semibold transition-colors"
                  >
                    <TrendingUp size={16} />
                    {language === 'en' ? 'Manage Cards' : 'Karten verwalten'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DeckList;

