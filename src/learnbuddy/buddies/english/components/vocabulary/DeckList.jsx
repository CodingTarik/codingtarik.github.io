import React, { useState, useEffect } from 'react';
import { Plus, BookOpen, Edit, Trash2, Play, Brain, TrendingUp, AlertCircle, RefreshCw, MessageCircle, Download, Upload, X } from 'lucide-react';
import toast from 'react-hot-toast';
import { useLanguage } from '../../../../context/LanguageContext';
import { getDecks, deleteDeck, downloadDeck, importDeck } from '../../utils/deckStorage';
import { getDueCards } from '../../utils/spacedRepetition';
import { getPendingChangesCount, getPendingChanges, clearPendingChanges, getCachedCards, setCachedCards, saveLocalCards, getLocalCards } from '../../utils/vocabularyCache';
import { fetchCardsFromSheet, addCardToSheet, updateCardInSheet, deleteCardFromSheet } from '../../utils/googleSheetsAPI';

function DeckList({ onCreateDeck, onEditDeck, onSelectDeck, refreshTrigger }) {
  const { language } = useLanguage();
  const [decks, setDecks] = useState([]);
  const [deckStats, setDeckStats] = useState({});
  const [pendingCounts, setPendingCounts] = useState({});
  const [syncingDeck, setSyncingDeck] = useState(null);
  const [showImportModal, setShowImportModal] = useState(false);

  useEffect(() => {
    loadDecks();
  }, [refreshTrigger]);

  const loadDecks = async () => {
    const loadedDecks = getDecks();
    setDecks(loadedDecks);
    
    // Load pending counts only for spreadsheet-mode decks
    const counts = {};
    loadedDecks.forEach(deck => {
      // Only show pending counts for spreadsheet-mode decks
      if (deck.storageMode === 'spreadsheet' || (!deck.storageMode && deck.scriptUrl)) {
        counts[deck.id] = getPendingChangesCount(deck.id);
      } else {
        counts[deck.id] = 0; // Local decks don't have pending changes
      }
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

  const handleExport = (deck, event) => {
    event.stopPropagation();
    try {
      let cards = [];
      
      // Load cards based on storage mode
      if (deck.storageMode === 'local' || (!deck.storageMode && !deck.scriptUrl)) {
        // For local decks, load from local storage
        cards = getLocalCards(deck.id);
        // Fallback to cache if local storage is empty
        if (cards.length === 0) {
          const cached = getCachedCards(deck.id);
          cards = cached?.cards || [];
        }
      } else {
        // For spreadsheet decks, load from cache
        const cached = getCachedCards(deck.id);
        cards = cached?.cards || [];
      }
      
      downloadDeck(deck.id, cards, deck.name);
      toast.success(
        language === 'en' 
          ? `Deck exported successfully! ${cards.length} cards exported.` 
          : `Deck erfolgreich exportiert! ${cards.length} Karten exportiert.`,
        { icon: '✅', duration: 3000 }
      );
    } catch (error) {
      console.error('Export error:', error);
      toast.error(
        language === 'en' ? 'Failed to export deck' : 'Deck konnte nicht exportiert werden'
      );
    }
  };

  const handleImport = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.name.endsWith('.json')) {
      toast.error(
        language === 'en' ? 'Please select a JSON file' : 'Bitte wähle eine JSON-Datei'
      );
      return;
    }

    try {
      const text = await file.text();
      const { deck, cards } = importDeck(text);
      
      // Save cards based on storage mode
      if (deck.storageMode === 'local') {
        // For local mode, save cards to persistent storage
        saveLocalCards(deck.id, cards || []);
        setCachedCards(deck.id, cards || [], true);
      } else if (deck.storageMode === 'spreadsheet' && deck.scriptUrl) {
        // For spreadsheet mode, try to load cards from sheet
        try {
          const fetchedCards = await fetchCardsFromSheet(deck.scriptUrl);
          setCachedCards(deck.id, fetchedCards);
        } catch (e) {
          // If fetch fails, use imported cards as fallback (cache only)
          console.warn('Could not fetch from spreadsheet, using imported cards:', e);
          setCachedCards(deck.id, cards || []);
        }
      } else {
        // Fallback: save to cache
        setCachedCards(deck.id, cards || []);
      }

      loadDecks();
      toast.success(
        language === 'en' 
          ? `Deck "${deck.name}" imported successfully! ${cards?.length || 0} cards imported.` 
          : `Deck "${deck.name}" erfolgreich importiert! ${cards?.length || 0} Karten importiert.`,
        { icon: '✅', duration: 3000 }
      );
    } catch (error) {
      console.error('Import error:', error);
      toast.error(
        language === 'en' 
          ? `Failed to import deck: ${error.message}` 
          : `Deck konnte nicht importiert werden: ${error.message}`
      );
    }

    // Reset file input
    event.target.value = '';
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
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-2 px-4 py-2 bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-100 font-bold rounded-xl hover:bg-stone-300 dark:hover:bg-stone-600 transition-all cursor-pointer">
            <Upload size={20} />
            {language === 'en' ? 'Import Deck' : 'Deck importieren'}
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
          </label>
          <button
            onClick={onCreateDeck}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
          >
            <Plus size={20} />
            {language === 'en' ? 'New Deck' : 'Neues Deck'}
          </button>
        </div>
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
                    {pendingCount > 0 && (deck.storageMode === 'spreadsheet' || (!deck.storageMode && deck.scriptUrl)) && (
                      <span className="px-2 py-0.5 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                        <AlertCircle size={12} />
                        {pendingCount}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={(e) => handleExport(deck, e)}
                      className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                      title={language === 'en' ? 'Export Deck' : 'Deck exportieren'}
                    >
                      <Download size={16} className="text-white" />
                    </button>
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
                {/* Show storage mode badge */}
                <div className="mt-2 flex items-center gap-2">
                  {deck.storageMode === 'local' || (!deck.storageMode && !deck.scriptUrl) ? (
                    <span className="px-2 py-0.5 bg-blue-500/80 text-white text-xs font-bold rounded-full">
                      {language === 'en' ? 'Local' : 'Lokal'}
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 bg-green-500/80 text-white text-xs font-bold rounded-full">
                      {language === 'en' ? 'Spreadsheet' : 'Spreadsheet'}
                    </span>
                  )}
                  {pendingCount > 0 && (deck.storageMode === 'spreadsheet' || (!deck.storageMode && deck.scriptUrl)) && (
                    <span className="px-2 py-0.5 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                      <AlertCircle size={12} />
                      {language === 'en' 
                        ? `${pendingCount} change${pendingCount > 1 ? 's' : ''} not synced`
                        : `${pendingCount} Änderung${pendingCount > 1 ? 'en' : ''} nicht synchronisiert`}
                    </span>
                  )}
                </div>
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
                  {/* Sync Button - only visible for spreadsheet-mode decks */}
                  {(deck.storageMode === 'spreadsheet' || (!deck.storageMode && deck.scriptUrl)) && (
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
                  )}
                  
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

