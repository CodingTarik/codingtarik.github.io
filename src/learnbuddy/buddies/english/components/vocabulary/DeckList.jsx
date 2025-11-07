import React, { useState, useEffect } from 'react';
import { Plus, BookOpen, Edit, Trash2, Play, Brain, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';
import { getDecks, deleteDeck } from '../../utils/deckStorage';
import { getDeckStats } from '../../utils/spacedRepetition';

function DeckList({ onCreateDeck, onEditDeck, onSelectDeck, refreshTrigger }) {
  const { language } = useLanguage();
  const [decks, setDecks] = useState([]);
  const [deckStats, setDeckStats] = useState({});

  useEffect(() => {
    loadDecks();
  }, [refreshTrigger]);

  const loadDecks = () => {
    const loadedDecks = getDecks();
    setDecks(loadedDecks);
    
    // Load stats for each deck (would need to fetch cards from sheets)
    const stats = {};
    loadedDecks.forEach(deck => {
      // Placeholder stats - in real usage would fetch from Google Sheets
      stats[deck.id] = {
        total: 0,
        new: 0,
        learning: 0,
        mature: 0,
        due: 0
      };
    });
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
          
          return (
            <div
              key={deck.id}
              className="group bg-gradient-to-br from-white to-stone-50 dark:from-stone-800 dark:to-stone-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-stone-200 dark:border-stone-700 overflow-hidden"
            >
              {/* Deck Header */}
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-4">
                <div className="flex items-start justify-between mb-2">
                  <BookOpen className="text-white" size={32} />
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

