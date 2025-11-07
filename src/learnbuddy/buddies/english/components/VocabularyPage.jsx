import React, { useState } from 'react';
import { BookOpen, BarChart3 } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import DeckList from './vocabulary/DeckList';
import DeckSetupModal from './vocabulary/DeckSetupModal';
import CardManager from './vocabulary/CardManager';
import SpacedRepetitionMode from './vocabulary/SpacedRepetitionMode';
import GeneralLearningMode from './vocabulary/GeneralLearningMode';
import StatsPanel from './vocabulary/StatsPanel';
import { saveDeck } from '../utils/deckStorage';

function VocabularyPage() {
  const { language } = useLanguage();
  const [currentView, setCurrentView] = useState('decks'); // decks, manage, spaced, general, stats
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingDeck, setEditingDeck] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [activeTab, setActiveTab] = useState('decks'); // decks or stats

  const handleCreateDeck = (deckData) => {
    if (editingDeck) {
      // Update existing deck
      saveDeck({ ...editingDeck, ...deckData });
      setEditingDeck(null);
    } else {
      // Create new deck
      saveDeck(deckData);
    }
    setShowCreateModal(false);
    setRefreshTrigger(prev => prev + 1);
  };

  const handleEditDeck = (deck) => {
    setEditingDeck(deck);
    setShowCreateModal(true);
  };
  
  const handleCloseModal = () => {
    setShowCreateModal(false);
    setEditingDeck(null);
  };

  const handleSelectDeck = (deck, mode) => {
    setSelectedDeck(deck);
    setCurrentView(mode);
  };

  const handleBackToDecks = () => {
    setCurrentView('decks');
    setSelectedDeck(null);
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      {currentView === 'decks' && (
        <>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen size={48} className="text-rose-500" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                {language === 'en' ? 'Vocabulary Trainer' : 'Vokabeltrainer'}
              </h1>
            </div>
            <p className="text-xl text-stone-600 dark:text-stone-400">
              {language === 'en' 
                ? 'Master new words with spaced repetition'
                : 'Meistere neue Wörter mit Spaced Repetition'}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab('decks')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'decks'
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                  : 'bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-400 hover:bg-stone-300 dark:hover:bg-stone-600'
              }`}
            >
              <BookOpen size={20} />
              {language === 'en' ? 'My Decks' : 'Meine Decks'}
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'stats'
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                  : 'bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-400 hover:bg-stone-300 dark:hover:bg-stone-600'
              }`}
            >
              <BarChart3 size={20} />
              {language === 'en' ? 'Statistics' : 'Statistiken'}
            </button>
          </div>
        </>
      )}

      {/* Content */}
      {currentView === 'decks' && activeTab === 'decks' && (
        <DeckList
          onCreateDeck={() => setShowCreateModal(true)}
          onEditDeck={handleEditDeck}
          onSelectDeck={handleSelectDeck}
          refreshTrigger={refreshTrigger}
        />
      )}

      {currentView === 'decks' && activeTab === 'stats' && (
        <StatsPanel />
      )}

      {currentView === 'manage' && selectedDeck && (
        <CardManager
          deck={selectedDeck}
          onBack={handleBackToDecks}
        />
      )}

      {currentView === 'spaced' && selectedDeck && (
        <SpacedRepetitionMode
          deck={selectedDeck}
          onBack={handleBackToDecks}
        />
      )}

      {currentView === 'general' && selectedDeck && (
        <GeneralLearningMode
          deck={selectedDeck}
          onBack={handleBackToDecks}
        />
      )}

      {/* Create/Edit Deck Modal */}
      <DeckSetupModal
        isOpen={showCreateModal}
        onClose={handleCloseModal}
        onSave={handleCreateDeck}
        editingDeck={editingDeck}
      />

      {/* Info Box */}
      {currentView === 'decks' && activeTab === 'decks' && (
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-3">
            💡 {language === 'en' ? 'How it works' : 'So funktioniert es'}
          </h3>
          <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <p>
              <strong>{language === 'en' ? 'Spaced Repetition:' : 'Spaced Repetition:'}</strong>{' '}
              {language === 'en' 
                ? 'Study cards at optimal intervals. Rate each card and the system will show it again at the perfect time.'
                : 'Lerne Karten in optimalen Intervallen. Bewerte jede Karte und das System zeigt sie zur perfekten Zeit wieder.'}
            </p>
            <p>
              <strong>{language === 'en' ? 'General Review:' : 'Allgemeine Wiederholung:'}</strong>{' '}
              {language === 'en' 
                ? 'Go through all cards in your deck and rate your knowledge level (1-5 stars).'
                : 'Gehe alle Karten in deinem Deck durch und bewerte dein Wissenslevel (1-5 Sterne).'}
            </p>
            <p>
              <strong>{language === 'en' ? 'Google Sheets:' : 'Google Sheets:'}</strong>{' '}
              {language === 'en' 
                ? 'All your vocabulary is stored in your own Google Spreadsheet. You have full control and can edit it anytime.'
                : 'Alle deine Vokabeln werden in deinem eigenen Google Spreadsheet gespeichert. Du hast volle Kontrolle und kannst jederzeit bearbeiten.'}
            </p>
            <p>
              <strong>{language === 'en' ? 'Markdown Support:' : 'Markdown Unterstützung:'}</strong>{' '}
              {language === 'en' 
                ? 'Add images, formatting, and rich content to your cards using Markdown.'
                : 'Füge Bilder, Formatierung und reichhaltigen Inhalt zu deinen Karten mit Markdown hinzu.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default VocabularyPage;

