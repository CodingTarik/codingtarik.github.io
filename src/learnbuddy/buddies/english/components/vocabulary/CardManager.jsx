import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, ArrowLeft, Save, X, Search, Download, Upload, RefreshCw, AlertCircle, Copy, Check, Image as ImageIcon, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import toast from 'react-hot-toast';
import { useLanguage } from '../../../../context/LanguageContext';
import { fetchCardsFromSheet, addCardToSheet, updateCardInSheet, deleteCardFromSheet } from '../../utils/googleSheetsAPI';
import { 
  getCachedCards, 
  setCachedCards, 
  addCardLocally, 
  updateCardLocally, 
  deleteCardLocally,
  removeDuplicateCards,
  getPendingChanges,
  clearPendingChanges,
  clearCache,
  hasPendingChanges,
  getPendingChangesCount 
} from '../../utils/vocabularyCache';
import ReactMarkdown from 'react-markdown';
import ImageSearchModal from './ImageSearchModal';

function CardManager({ deck, onBack }) {
  const { language } = useLanguage();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingCard, setEditingCard] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [pendingCount, setPendingCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    word: '',
    translation: '',
    explanation: '',
    ratingGeneral: 0,
    image_url: ''
  });
  const [showImageModal, setShowImageModal] = useState(false);
  const [sortBy, setSortBy] = useState('word'); // 'word', 'translation', 'rating', 'date', 'lastReview'
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc', 'desc'
  const [showSortMenu, setShowSortMenu] = useState(false);

  useEffect(() => {
    loadCards();
    updatePendingCount();
  }, [deck]);

  // Close sort menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showSortMenu && !event.target.closest('.sort-menu-container')) {
        setShowSortMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSortMenu]);

  const updatePendingCount = () => {
    setPendingCount(getPendingChangesCount(deck.id));
  };

  const loadCards = async (forceRefresh = false) => {
    setLoading(true);
    try {
      // Try to load from cache first
      const cached = getCachedCards(deck.id);
      
      if (!forceRefresh && cached && cached.cards) {
        setCards(cached.cards);
        setLoading(false);
        return;
      }
      
      // Fetch from Google Sheets
      const fetchedCards = await fetchCardsFromSheet(deck.scriptUrl);
      setCards(fetchedCards);
      setCachedCards(deck.id, fetchedCards);
    } catch (error) {
      console.error('Error loading cards:', error);
      toast.error(language === 'en' ? 'Failed to load cards' : 'Karten konnten nicht geladen werden');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    if (!formData.word.trim() || !formData.translation.trim()) {
      toast.error(language === 'en' ? 'Word and translation are required' : 'Wort und Übersetzung sind erforderlich');
      return;
    }

    const newCard = {
      ...formData,
      lastReviewDate: null,
      nextReviewDate: null,
      interval: 0,
      easeFactor: 2.5,
      repetitions: 0
    };

    // Add locally
    const success = addCardLocally(deck.id, newCard);
    
    if (success) {
      // Update UI
      const cached = getCachedCards(deck.id);
      setCards(cached.cards);
      
      // Clear only word and translation, keep form open
      setFormData({ word: '', translation: '', explanation: formData.explanation, ratingGeneral: 0, image_url: formData.image_url });
      updatePendingCount();
      
      // Show success message
      const message = language === 'en' 
        ? 'Card added locally. Remember to sync!'
        : 'Karte lokal hinzugefügt. Vergiss nicht zu synchronisieren!';
      
      // Show success toast
      toast.success(message, { icon: '✅', duration: 2000 });
    } else {
      toast.error(language === 'en' ? 'Failed to add card locally' : 'Karte konnte nicht lokal hinzugefügt werden');
    }
  };

  const handleEdit = () => {
    if (!formData.word.trim() || !formData.translation.trim()) {
      toast.error(language === 'en' ? 'Word and translation are required' : 'Wort und Übersetzung sind erforderlich');
      return;
    }

    const cardIndex = cards.findIndex(c => c === editingCard);
    const updatedCard = {
      ...editingCard,
      ...formData
    };
    
    const success = updateCardLocally(deck.id, cardIndex, updatedCard);
    
    if (success) {
      const cached = getCachedCards(deck.id);
      setCards(cached.cards);
      setEditingCard(null);
      setFormData({ word: '', translation: '', explanation: '', ratingGeneral: 0, image_url: '' });
      updatePendingCount();
      toast.success(language === 'en' ? 'Card updated!' : 'Karte aktualisiert!', { icon: '✏️' });
    } else {
      toast.error(language === 'en' ? 'Failed to update card' : 'Karte konnte nicht aktualisiert werden');
    }
  };

  const handleDelete = (card) => {
    if (!window.confirm(
      language === 'en' 
        ? 'Are you sure you want to delete this card?'
        : 'Möchtest du diese Karte wirklich löschen?'
    )) {
      return;
    }

    const cardIndex = cards.findIndex(c => c === card);
    console.log(`Deleting card at index ${cardIndex}:`, card);
    const success = deleteCardLocally(deck.id, cardIndex);
    
    if (success) {
      const cached = getCachedCards(deck.id);
      const pending = getPendingChanges(deck.id);
      console.log(`After delete - pending.deletes:`, pending.deletes);
      setCards(cached.cards);
      updatePendingCount();
      toast.success(language === 'en' ? 'Card deleted! Remember to sync.' : 'Karte gelöscht! Vergiss nicht zu synchronisieren.', { icon: '🗑️' });
    } else {
      toast.error(language === 'en' ? 'Failed to delete card' : 'Karte konnte nicht gelöscht werden');
    }
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
      let successCount = { deletes: 0, updates: 0, adds: 0 };
      
      // Process deletes first (in reverse order to maintain indices)
      // Sort in descending order so indices remain valid after each delete
      const sortedDeletes = [...pending.deletes].sort((a, b) => b - a);
      console.log(`Syncing ${sortedDeletes.length} deletions...`, sortedDeletes);
      
      for (const index of sortedDeletes) {
        try {
          await deleteCardFromSheet(deck.scriptUrl, index);
          successCount.deletes++;
        } catch (e) {
          console.error(`Failed to delete card at index ${index}:`, e);
          errors.push(`Delete at index ${index}: ${e.message}`);
        }
      }
      
      // Process updates
      console.log(`Syncing ${pending.updates.length} updates...`);
      for (const { index, card } of pending.updates) {
        try {
          await updateCardInSheet(deck.scriptUrl, index, card);
          successCount.updates++;
        } catch (e) {
          console.error(`Failed to update card at index ${index}:`, e);
          errors.push(`Update at index ${index}: ${e.message}`);
        }
      }
      
      // Process adds
      console.log(`Syncing ${pending.adds.length} additions...`);
      for (const card of pending.adds) {
        try {
          const { _tempId, ...cardWithoutTemp } = card;
          await addCardToSheet(deck.scriptUrl, cardWithoutTemp);
          successCount.adds++;
        } catch (e) {
          console.error(`Failed to add card "${card.word}":`, e);
          errors.push(`Add card "${card.word}": ${e.message}`);
        }
      }
      
      if (errors.length > 0) {
        console.error('Sync errors:', errors);
        const successMsg = successCount.deletes > 0 || successCount.updates > 0 || successCount.adds > 0
          ? (language === 'en' 
            ? `Partially synced: ${successCount.deletes} deleted, ${successCount.updates} updated, ${successCount.adds} added. ${errors.length} failed.`
            : `Teilweise synchronisiert: ${successCount.deletes} gelöscht, ${successCount.updates} aktualisiert, ${successCount.adds} hinzugefügt. ${errors.length} fehlgeschlagen.`)
          : '';
        toast.error(
          language === 'en' 
            ? `${errors.length} changes failed to sync. ${successMsg}`
            : `${errors.length} Änderungen konnten nicht synchronisiert werden. ${successMsg}`,
          { duration: 7000 }
        );
      } else {
        // Clear pending changes and reload
        clearPendingChanges(deck.id);
        await loadCards(true);
        updatePendingCount();
        const syncSummary = [
          successCount.deletes > 0 && (language === 'en' ? `${successCount.deletes} deleted` : `${successCount.deletes} gelöscht`),
          successCount.updates > 0 && (language === 'en' ? `${successCount.updates} updated` : `${successCount.updates} aktualisiert`),
          successCount.adds > 0 && (language === 'en' ? `${successCount.adds} added` : `${successCount.adds} hinzugefügt`)
        ].filter(Boolean).join(', ');
        
        toast.success(
          language === 'en' 
            ? `All changes synced successfully! ${syncSummary}`
            : `Alle Änderungen erfolgreich synchronisiert! ${syncSummary}`,
          { icon: '🎉', duration: 4000 }
        );
      }
    } catch (error) {
      console.error('Sync error:', error);
      toast.error(language === 'en' ? 'Sync failed' : 'Synchronisierung fehlgeschlagen');
    } finally {
      setSyncing(false);
    }
  };

  const startEdit = (card) => {
    setEditingCard(card);
    setFormData({
      word: card.word,
      translation: card.translation,
      explanation: card.explanation || '',
      ratingGeneral: card.ratingGeneral || 0,
      image_url: card.image_url || ''
    });
    setIsAdding(false);
  };

  const startAdd = () => {
    setIsAdding(true);
    setEditingCard(null);
    setFormData({ word: '', translation: '', explanation: '', ratingGeneral: 0, image_url: '' });
  };

  const cancelEdit = () => {
    setEditingCard(null);
    setIsAdding(false);
    setFormData({ word: '', translation: '', explanation: '', ratingGeneral: 0, image_url: '' });
  };

  const handleImageSelect = (imageUrl) => {
    setFormData({ ...formData, image_url: imageUrl });
  };

  const filteredCards = cards.filter(card =>
    card.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.translation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort cards
  const sortedCards = [...filteredCards].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'word':
        comparison = a.word.localeCompare(b.word);
        break;
      case 'translation':
        comparison = (a.translation || '').localeCompare(b.translation || '');
        break;
      case 'rating':
        comparison = (a.ratingGeneral || 0) - (b.ratingGeneral || 0);
        break;
      case 'date':
        // Sort by lastReviewDate (newest first if desc, oldest first if asc)
        const dateA = a.lastReviewDate ? new Date(a.lastReviewDate).getTime() : 0;
        const dateB = b.lastReviewDate ? new Date(b.lastReviewDate).getTime() : 0;
        comparison = dateA - dateB;
        break;
      case 'lastReview':
        const reviewA = a.lastReviewDate ? new Date(a.lastReviewDate).getTime() : 0;
        const reviewB = b.lastReviewDate ? new Date(b.lastReviewDate).getTime() : 0;
        comparison = reviewA - reviewB;
        break;
      default:
        comparison = 0;
    }
    
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  const handleSortChange = (newSortBy) => {
    if (sortBy === newSortBy) {
      // Toggle sort order if same column
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(newSortBy);
      setSortOrder('asc');
    }
  };

  const copyToRemNote = async () => {
    if (!cards || cards.length === 0) return;

    // Format for RemNote: Use >> separator for forward flashcards
    // Format: "Word >> Translation" (one per line)
    const remNoteFormat = cards
      .map(card => `${card.word} >> ${card.translation}`)
      .join('\n');

    try {
      await navigator.clipboard.writeText(remNoteFormat);
      setCopied(true);
      toast.success(
        language === 'en' 
          ? `Copied ${cards.length} cards to clipboard for RemNote!` 
          : `${cards.length} Karteikarten für RemNote in Zwischenablage kopiert!`
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
    <div className="max-w-6xl mx-auto pb-8">
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
              {cards.length} {language === 'en' ? 'cards' : 'Karten'}
              {pendingCount > 0 && (
                <span className="ml-2 px-2 py-0.5 bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 text-xs font-bold rounded-full">
                  {pendingCount} {language === 'en' ? 'pending' : 'ausstehend'}
                </span>
              )}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={copyToRemNote}
            disabled={cards.length === 0}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title={language === 'en' ? 'Copy all cards to clipboard for RemNote' : 'Alle Karteikarten für RemNote kopieren'}
          >
            {copied ? (
              <>
                <Check size={18} />
                <span>{language === 'en' ? 'Copied!' : 'Kopiert!'}</span>
              </>
            ) : (
              <>
                <Copy size={18} />
                <span>{language === 'en' ? 'Copy to RemNote' : 'Zu RemNote kopieren'}</span>
              </>
            )}
          </button>
          <button
            onClick={() => handleSync(false)}
            disabled={syncing}
            className={`flex items-center gap-2 px-4 py-2 font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 ${
              pendingCount > 0
                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
            }`}
            title={pendingCount > 0 
              ? (language === 'en' ? 'Upload changes to Google Sheets' : 'Änderungen zu Google Sheets hochladen')
              : (language === 'en' ? 'Refresh from Google Sheets' : 'Von Google Sheets aktualisieren')}
          >
            <RefreshCw size={20} className={syncing ? 'animate-spin' : ''} />
            {syncing 
              ? (language === 'en' ? 'Syncing...' : 'Synchronisiere...')
              : pendingCount > 0
                ? (language === 'en' ? `Upload ${pendingCount}` : `${pendingCount} hochladen`)
                : (language === 'en' ? 'Refresh' : 'Aktualisieren')}
          </button>
          <button
            onClick={startAdd}
            disabled={isAdding || editingCard}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-50"
          >
            <Plus size={20} />
            {language === 'en' ? 'Add Card' : 'Karte hinzufügen'}
          </button>
          <button
            onClick={() => {
              const totalCards = cards.length;
              const confirmMsg = language === 'en' 
                ? `Remove duplicate cards?\n\nThis will check all ${totalCards} cards and remove duplicates where BOTH word AND translation are identical.\n\nCards with empty word or translation will be skipped.\n\nContinue?`
                : `Doppelte Karten entfernen?\n\nDies prüft alle ${totalCards} Karten und entfernt Duplikate, bei denen SOWOHL Wort ALS AUCH Übersetzung identisch sind.\n\nKarten mit leerem Wort oder Übersetzung werden übersprungen.\n\nFortfahren?`;
              
              if (!window.confirm(confirmMsg)) {
                return;
              }

              const removedCount = removeDuplicateCards(deck.id);
              
              if (removedCount === 0) {
                toast.success(
                  language === 'en' 
                    ? 'No duplicates found!'
                    : 'Keine Duplikate gefunden!',
                  { icon: '✅' }
                );
              } else if (removedCount > totalCards * 0.5) {
                // Sicherheitscheck: Wenn mehr als 50% entfernt werden, ist etwas falsch
                toast.error(
                  language === 'en' 
                    ? `Error: ${removedCount} cards would be removed (${((removedCount/totalCards)*100).toFixed(1)}%). This seems wrong. Please check manually.`
                    : `Fehler: ${removedCount} Karten würden entfernt (${((removedCount/totalCards)*100).toFixed(1)}%). Das scheint falsch zu sein. Bitte manuell prüfen.`,
                  { duration: 8000, icon: '⚠️' }
                );
                console.error('Duplikat-Entfernung abgebrochen - zu viele Karten würden entfernt werden');
              } else {
                toast.success(
                  language === 'en' 
                    ? `${removedCount} duplicate card(s) removed! (${((removedCount/totalCards)*100).toFixed(1)}% of total)`
                    : `${removedCount} doppelte Karte(n) entfernt! (${((removedCount/totalCards)*100).toFixed(1)}% der Gesamtzahl)`,
                  { icon: '✅', duration: 4000 }
                );
                loadCards();
                updatePendingCount();
              }
            }}
            className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
            title={language === 'en' ? 'Remove duplicate cards' : 'Doppelte Karten entfernen'}
          >
            <Copy size={18} />
            {language === 'en' ? 'Remove Duplicates' : 'Duplikate entfernen'}
          </button>
          {pendingCount > 0 && (
            <button
              onClick={() => {
                if (!window.confirm(
                  language === 'en' 
                    ? 'Cancel all pending changes and reset to last synced state? This will discard all local changes.'
                    : 'Alle ausstehenden Änderungen abbrechen und zum letzten synchronisierten Status zurücksetzen? Dies verwirft alle lokalen Änderungen.'
                )) {
                  return;
                }

                // Clear pending changes and cache, then reload from Google Sheets
                clearPendingChanges(deck.id);
                clearCache(deck.id);
                loadCards(true);
                updatePendingCount();
                toast.success(
                  language === 'en' 
                    ? 'Reset to last synced state!'
                    : 'Zurückgesetzt auf letzten synchronisierten Status!',
                  { icon: '🔄' }
                );
              }}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-colors"
              title={language === 'en' ? 'Cancel sync and reset' : 'Sync abbrechen und zurücksetzen'}
            >
              <X size={18} />
              {language === 'en' ? 'Cancel Sync' : 'Sync abbrechen'}
            </button>
          )}
        </div>
      </div>

      {/* Pending Changes Warning */}
      {pendingCount > 0 && !syncing && (
        <div className="mb-6 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-2 border-orange-200 dark:border-orange-800 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={20} />
            <div className="flex-1">
              <p className="text-sm font-semibold text-orange-800 dark:text-orange-300 mb-1">
                {language === 'en' 
                  ? `You have ${pendingCount} unsync${pendingCount > 1 ? '' : ''}ed change${pendingCount > 1 ? 's' : ''}`
                  : `Du hast ${pendingCount} nicht synchronisierte Änderung${pendingCount > 1 ? 'en' : ''}`}
              </p>
              <p className="text-xs text-orange-700 dark:text-orange-400">
                {language === 'en' 
                  ? 'Changes are saved locally. Click "Sync" to save them to Google Sheets.'
                  : 'Änderungen sind lokal gespeichert. Klicke auf "Synchronisieren" um sie in Google Sheets zu speichern.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Search and Sort */}
      <div className="mb-6 flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'en' ? 'Search cards...' : 'Karten durchsuchen...'}
            className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 focus:border-rose-500 focus:outline-none"
          />
        </div>
        <div className="relative sort-menu-container">
          <button
            onClick={() => setShowSortMenu(!showSortMenu)}
            className="flex items-center gap-2 px-4 py-3 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 rounded-xl transition-colors text-stone-800 dark:text-stone-100 font-semibold"
            title={language === 'en' ? 'Sort cards' : 'Karten sortieren'}
          >
            <ArrowUpDown size={18} />
            <span className="hidden sm:inline">
              {language === 'en' ? 'Sort' : 'Sortieren'}
            </span>
            {sortOrder === 'asc' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          </button>
          {showSortMenu && (
            <div className="absolute right-0 mt-2 bg-white dark:bg-stone-800 rounded-xl shadow-2xl border-2 border-stone-200 dark:border-stone-700 p-2 z-20 min-w-[200px] sort-menu-container">
              {[
                { key: 'word', label: language === 'en' ? 'Word' : 'Wort' },
                { key: 'translation', label: language === 'en' ? 'Translation' : 'Übersetzung' },
                { key: 'rating', label: language === 'en' ? 'Rating' : 'Bewertung' },
                { key: 'lastReview', label: language === 'en' ? 'Last Review' : 'Letzte Wiederholung' }
              ].map(option => (
                <button
                  key={option.key}
                  onClick={() => {
                    handleSortChange(option.key);
                    setShowSortMenu(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors flex items-center justify-between ${
                    sortBy === option.key ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300' : 'text-stone-700 dark:text-stone-300'
                  }`}
                >
                  <span>{option.label}</span>
                  {sortBy === option.key && (sortOrder === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />)}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Modal */}
      {(isAdding || editingCard) && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-rose-200 dark:border-rose-800">
          <div className="sticky top-0 bg-gradient-to-r from-rose-500 to-pink-500 p-6 flex items-center justify-between rounded-t-2xl mb-4">
            <h3 className="text-xl font-bold text-white">
              {isAdding 
                ? (language === 'en' ? 'Add New Card' : 'Neue Karte hinzufügen')
                : (language === 'en' ? 'Edit Card' : 'Karte bearbeiten')}
            </h3>
            <button
              onClick={cancelEdit}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="px-6 pb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                {language === 'en' ? 'Word / Phrase' : 'Wort / Phrase'} *
              </label>
              <input
                type="text"
                value={formData.word}
                onChange={(e) => setFormData({ ...formData, word: e.target.value })}
                placeholder={language === 'en' ? 'e.g., serendipity' : 'z.B., serendipity'}
                className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 focus:border-rose-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                {language === 'en' ? 'Translation' : 'Übersetzung'} *
              </label>
              <input
                type="text"
                value={formData.translation}
                onChange={(e) => setFormData({ ...formData, translation: e.target.value })}
                placeholder={language === 'en' ? 'e.g., glücklicher Zufall' : 'z.B., glücklicher Zufall'}
                className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 focus:border-rose-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                {language === 'en' ? 'Additional Info (Markdown supported)' : 'Weitere Info (Markdown unterstützt)'}
              </label>
              <textarea
                value={formData.explanation}
                onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
                placeholder={language === 'en' 
                  ? 'Example sentence, pronunciation, notes...'
                  : 'Beispielsatz, Aussprache, Notizen...'}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 focus:border-rose-500 focus:outline-none resize-none"
              />
            </div>

            {/* Image URL Field */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                {language === 'en' ? 'Image' : 'Bild'}
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  placeholder={language === 'en' ? 'Image URL or click search...' : 'Bild-URL oder Suche klicken...'}
                  className="flex-1 px-4 py-3 rounded-xl border-2 border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 focus:border-rose-500 focus:outline-none font-mono text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowImageModal(true)}
                  className="px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <ImageIcon size={20} />
                  {language === 'en' ? 'Search' : 'Suchen'}
                </button>
                {formData.image_url && (
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, image_url: '' })}
                    className="px-4 py-3 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-bold rounded-xl hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors"
                    title={language === 'en' ? 'Remove image' : 'Bild entfernen'}
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
              {formData.image_url && (
                <div className="mt-3 rounded-xl overflow-hidden border-2 border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-900 max-w-md">
                  <img
                    src={formData.image_url}
                    alt="Preview"
                    className="w-full h-auto max-h-48 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={cancelEdit}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-100 font-bold rounded-xl hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors"
              >
                <X size={20} />
                {language === 'en' ? 'Cancel' : 'Abbrechen'}
              </button>
              <button
                onClick={isAdding ? handleAdd : handleEdit}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
              >
                <Save size={20} />
                {isAdding 
                  ? (language === 'en' ? 'Add & Continue' : 'Hinzufügen & Weiter')
                  : (language === 'en' ? 'Save' : 'Speichern')}
              </button>
              {isAdding && (
                <button
                  onClick={() => {
                    handleAdd();
                    setIsAdding(false);
                  }}
                  className="px-4 py-3 bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-100 font-semibold rounded-xl hover:bg-stone-300 dark:hover:bg-stone-600 transition-all"
                >
                  {language === 'en' ? 'Add & Close' : 'Hinzufügen & Schließen'}
                </button>
              )}
            </div>
          </div>
          </div>
        </div>
        </div>
      )}

      {/* Cards List */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-rose-500 border-t-transparent mx-auto"></div>
          <p className="mt-4 text-stone-600 dark:text-stone-400">
            {language === 'en' ? 'Loading cards...' : 'Lade Karten...'}
          </p>
        </div>
      ) : filteredCards.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-stone-600 dark:text-stone-400">
            {searchQuery 
              ? (language === 'en' ? 'No cards found' : 'Keine Karten gefunden')
              : (language === 'en' ? 'No cards yet. Add your first card!' : 'Noch keine Karten. Füge deine erste Karte hinzu!')}
          </p>
        </div>
      ) : (
        <div className="space-y-3 max-h-[calc(100vh-400px)] overflow-y-auto">
          {sortedCards.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-stone-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all border-2 border-stone-200 dark:border-stone-700"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-2">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-1">
                        {card.word}
                      </h4>
                      <p className="text-stone-600 dark:text-stone-400">
                        {card.translation}
                      </p>
                    </div>
                    {card.ratingGeneral > 0 && (
                      <div className="flex items-center gap-1 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/20 rounded-full">
                        <span className="text-yellow-600 dark:text-yellow-400 text-sm font-bold">
                          ⭐ {card.ratingGeneral}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {card.image_url && (
                    <div className="mt-3 rounded-xl overflow-hidden border-2 border-purple-200 dark:border-purple-800 bg-stone-100 dark:bg-stone-900 max-w-xs">
                      <img
                        src={card.image_url}
                        alt={card.word}
                        className="w-full h-auto max-h-32 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  
                  {card.explanation && (
                    <div className="mt-3 p-3 bg-stone-50 dark:bg-stone-900 rounded-lg prose prose-sm dark:prose-invert max-w-none">
                      <ReactMarkdown>{card.explanation}</ReactMarkdown>
                    </div>
                  )}
                  
                  {card.lastReviewDate && (
                    <div className="mt-2 text-xs text-stone-500 dark:text-stone-500">
                      {language === 'en' ? 'Last reviewed:' : 'Zuletzt gelernt:'}{' '}
                      {new Date(card.lastReviewDate).toLocaleDateString()}
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  {card.image_url && (
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg" title={language === 'en' ? 'Has image' : 'Hat Bild'}>
                      <ImageIcon size={18} className="text-purple-600 dark:text-purple-400" />
                    </div>
                  )}
                  <button
                    onClick={() => startEdit(card)}
                    disabled={isAdding || editingCard}
                    className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg transition-colors disabled:opacity-50"
                    title={language === 'en' ? 'Edit' : 'Bearbeiten'}
                  >
                    <Edit size={18} className="text-blue-600 dark:text-blue-400" />
                  </button>
                  <button
                    onClick={() => handleDelete(card)}
                    disabled={isAdding || editingCard}
                    className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors disabled:opacity-50"
                    title={language === 'en' ? 'Delete' : 'Löschen'}
                  >
                    <Trash2 size={18} className="text-red-600 dark:text-red-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Image Search Modal */}
      <ImageSearchModal
        isOpen={showImageModal}
        onClose={() => setShowImageModal(false)}
        onSelectImage={handleImageSelect}
        currentImageUrl={formData.image_url}
      />
    </div>
  );
}

export default CardManager;

