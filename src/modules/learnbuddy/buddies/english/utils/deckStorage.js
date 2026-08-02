/**
 * Local Storage for Vocabulary Decks
 * Stores deck metadata and syncs with Google Sheets
 */

const STORAGE_KEY = 'english_vocabulary_decks';
const REVIEW_HISTORY_KEY = 'english_vocabulary_review_history';

/**
 * Get all decks from local storage
 * @returns {Array} Array of deck objects
 */
export function getDecks() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading decks:', error);
    return [];
  }
}

/**
 * Get a specific deck by ID
 * @param {string} deckId - Deck ID
 * @returns {Object|null} Deck object or null
 */
export function getDeck(deckId) {
  const decks = getDecks();
  return decks.find(d => d.id === deckId) || null;
}

/**
 * Save a new deck or update existing
 * @param {Object} deck - Deck object
 * @returns {Object} Saved deck with ID
 */
export function saveDeck(deck) {
  const decks = getDecks();
  
  if (!deck.id) {
    deck.id = generateDeckId();
    deck.createdAt = new Date().toISOString();
  }
  
  // Set default storage mode if not specified
  if (!deck.storageMode) {
    deck.storageMode = deck.scriptUrl ? 'spreadsheet' : 'local';
  }
  
  deck.updatedAt = new Date().toISOString();
  
  const existingIndex = decks.findIndex(d => d.id === deck.id);
  
  if (existingIndex >= 0) {
    decks[existingIndex] = deck;
  } else {
    decks.push(deck);
  }
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
    return deck;
  } catch (error) {
    console.error('Error saving deck:', error);
    throw error;
  }
}

/**
 * Delete a deck
 * @param {string} deckId - Deck ID to delete
 * @returns {boolean} Success status
 */
export function deleteDeck(deckId) {
  const decks = getDecks();
  const filtered = decks.filter(d => d.id !== deckId);
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error('Error deleting deck:', error);
    return false;
  }
}

/**
 * Generate unique deck ID
 * @returns {string} Unique ID
 */
function generateDeckId() {
  return `deck_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Save review session to history
 * @param {string} deckId - Deck ID
 * @param {Object} session - Session data
 */
export function saveReviewSession(deckId, session) {
  try {
    const history = getReviewHistory();
    
    if (!history[deckId]) {
      history[deckId] = [];
    }
    
    history[deckId].push({
      ...session,
      date: new Date().toISOString()
    });
    
    // Keep only last 100 sessions per deck
    if (history[deckId].length > 100) {
      history[deckId] = history[deckId].slice(-100);
    }
    
    localStorage.setItem(REVIEW_HISTORY_KEY, JSON.stringify(history));
  } catch (error) {
    console.error('Error saving review session:', error);
  }
}

/**
 * Get review history
 * @param {string} deckId - Optional deck ID to filter
 * @returns {Object|Array} All history or history for specific deck
 */
export function getReviewHistory(deckId = null) {
  try {
    const data = localStorage.getItem(REVIEW_HISTORY_KEY);
    const history = data ? JSON.parse(data) : {};
    
    if (deckId) {
      return history[deckId] || [];
    }
    
    return history;
  } catch (error) {
    console.error('Error loading review history:', error);
    return deckId ? [] : {};
  }
}

/**
 * Get all review dates for streak calculation
 * @returns {Array} Array of date strings
 */
export function getAllReviewDates() {
  const history = getReviewHistory();
  const dates = [];
  
  Object.values(history).forEach(deckHistory => {
    deckHistory.forEach(session => {
      dates.push(session.date);
    });
  });
  
  return dates;
}

/**
 * Export deck to JSON
 * @param {string} deckId - Deck ID
 * @param {Array} cards - Card data
 * @returns {string} JSON string
 */
export function exportDeck(deckId, cards) {
  const deck = getDeck(deckId);
  
  // Create export object with all metadata
  const exportData = {
    deck: {
      ...deck,
      // Don't export scriptUrl for local decks
      scriptUrl: deck.storageMode === 'local' ? undefined : deck.scriptUrl
    },
    cards: cards || [],
    exportDate: new Date().toISOString(),
    version: '2.0' // Updated version to include storageMode
  };
  
  return JSON.stringify(exportData, null, 2);
}

/**
 * Download deck as JSON file
 * @param {string} deckId - Deck ID
 * @param {Array} cards - Card data
 * @param {string} deckName - Deck name for filename
 */
export function downloadDeck(deckId, cards, deckName) {
  const jsonString = exportDeck(deckId, cards);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${deckName || 'deck'}_${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Import deck from JSON
 * @param {string} jsonString - JSON string
 * @param {string} storageMode - Optional storage mode override ('local' or 'spreadsheet')
 * @returns {Object} Imported deck and cards
 */
export function importDeck(jsonString, storageMode = null) {
  try {
    const data = JSON.parse(jsonString);
    
    // Generate new ID for imported deck
    delete data.deck.id;
    delete data.deck.createdAt;
    delete data.deck.updatedAt;
    
    // Add (Imported) suffix if not already present
    if (!data.deck.name.includes('(Imported)')) {
      data.deck.name = `${data.deck.name} (Imported)`;
    }
    
    // Set storage mode
    if (storageMode) {
      data.deck.storageMode = storageMode;
    } else if (!data.deck.storageMode) {
      // Default to local if no scriptUrl, otherwise spreadsheet
      data.deck.storageMode = data.deck.scriptUrl ? 'spreadsheet' : 'local';
    }
    
    // If switching to local mode, remove scriptUrl
    if (data.deck.storageMode === 'local') {
      data.deck.scriptUrl = undefined;
    }
    
    const savedDeck = saveDeck(data.deck);
    
    return {
      deck: savedDeck,
      cards: data.cards || []
    };
  } catch (error) {
    console.error('Error importing deck:', error);
    throw error;
  }
}

