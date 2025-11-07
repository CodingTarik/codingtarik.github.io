import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, ArrowLeft, Save, X, Search, Download, Upload } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';
import { fetchCardsFromSheet, addCardToSheet, updateCardInSheet, deleteCardFromSheet } from '../../utils/googleSheetsAPI';
import ReactMarkdown from 'react-markdown';

function CardManager({ deck, onBack }) {
  const { language } = useLanguage();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingCard, setEditingCard] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    word: '',
    translation: '',
    explanation: '',
    ratingGeneral: 0
  });

  useEffect(() => {
    loadCards();
  }, [deck]);

  const loadCards = async () => {
    setLoading(true);
    try {
      const fetchedCards = await fetchCardsFromSheet(deck.scriptUrl);
      setCards(fetchedCards);
    } catch (error) {
      console.error('Error loading cards:', error);
      alert(language === 'en' ? 'Failed to load cards' : 'Karten konnten nicht geladen werden');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    if (!formData.word.trim() || !formData.translation.trim()) {
      alert(language === 'en' ? 'Word and translation are required' : 'Wort und Übersetzung sind erforderlich');
      return;
    }

    try {
      await addCardToSheet(deck.scriptUrl, {
        ...formData,
        lastReviewDate: null,
        nextReviewDate: null,
        interval: 0,
        easeFactor: 2.5,
        repetitions: 0
      });
      
      setFormData({ word: '', translation: '', explanation: '', ratingGeneral: 0 });
      setIsAdding(false);
      await loadCards();
    } catch (error) {
      console.error('Error adding card:', error);
      alert(language === 'en' ? 'Failed to add card' : 'Karte konnte nicht hinzugefügt werden');
    }
  };

  const handleEdit = async () => {
    if (!formData.word.trim() || !formData.translation.trim()) {
      alert(language === 'en' ? 'Word and translation are required' : 'Wort und Übersetzung sind erforderlich');
      return;
    }

    try {
      const cardIndex = cards.findIndex(c => c === editingCard);
      await updateCardInSheet(deck.scriptUrl, cardIndex, {
        ...editingCard,
        ...formData
      });
      
      setEditingCard(null);
      setFormData({ word: '', translation: '', explanation: '', ratingGeneral: 0 });
      await loadCards();
    } catch (error) {
      console.error('Error updating card:', error);
      alert(language === 'en' ? 'Failed to update card' : 'Karte konnte nicht aktualisiert werden');
    }
  };

  const handleDelete = async (card) => {
    if (!window.confirm(
      language === 'en' 
        ? 'Are you sure you want to delete this card?'
        : 'Möchtest du diese Karte wirklich löschen?'
    )) {
      return;
    }

    try {
      const cardIndex = cards.findIndex(c => c === card);
      await deleteCardFromSheet(deck.scriptUrl, cardIndex);
      await loadCards();
    } catch (error) {
      console.error('Error deleting card:', error);
      alert(language === 'en' ? 'Failed to delete card' : 'Karte konnte nicht gelöscht werden');
    }
  };

  const startEdit = (card) => {
    setEditingCard(card);
    setFormData({
      word: card.word,
      translation: card.translation,
      explanation: card.explanation || '',
      ratingGeneral: card.ratingGeneral || 0
    });
    setIsAdding(false);
  };

  const startAdd = () => {
    setIsAdding(true);
    setEditingCard(null);
    setFormData({ word: '', translation: '', explanation: '', ratingGeneral: 0 });
  };

  const cancelEdit = () => {
    setEditingCard(null);
    setIsAdding(false);
    setFormData({ word: '', translation: '', explanation: '', ratingGeneral: 0 });
  };

  const filteredCards = cards.filter(card =>
    card.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.translation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">
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
            </p>
          </div>
        </div>
        
        <button
          onClick={startAdd}
          disabled={isAdding || editingCard}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-50"
        >
          <Plus size={20} />
          {language === 'en' ? 'Add Card' : 'Karte hinzufügen'}
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'en' ? 'Search cards...' : 'Karten durchsuchen...'}
            className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 focus:border-rose-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Add/Edit Form */}
      {(isAdding || editingCard) && (
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-2xl p-6 mb-6 border-2 border-rose-200 dark:border-rose-800">
          <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            {isAdding 
              ? (language === 'en' ? 'Add New Card' : 'Neue Karte hinzufügen')
              : (language === 'en' ? 'Edit Card' : 'Karte bearbeiten')}
          </h3>
          
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
                {language === 'en' ? 'Save' : 'Speichern'}
              </button>
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
        <div className="space-y-3">
          {filteredCards.map((card, index) => (
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
    </div>
  );
}

export default CardManager;

