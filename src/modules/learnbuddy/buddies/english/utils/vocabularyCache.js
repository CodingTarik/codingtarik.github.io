/**
 * Local cache for vocabulary cards with sync tracking
 * Also handles persistent local storage for local-mode decks
 */

const CACHE_KEY_PREFIX = 'vocabulary_cache_';
const PENDING_KEY_PREFIX = 'vocabulary_pending_';
const LOCAL_STORAGE_KEY_PREFIX = 'vocabulary_local_';

/**
 * Get cached cards for a deck
 */
export function getCachedCards(deckId) {
  try {
    const cached = localStorage.getItem(CACHE_KEY_PREFIX + deckId);
    return cached ? JSON.parse(cached) : null;
  } catch (e) {
    console.error('Error loading cached cards:', e);
    return null;
  }
}

/**
 * Cache cards for a deck
 * For local-mode decks, also saves to persistent storage
 */
export function setCachedCards(deckId, cards, isLocalMode = false) {
  try {
    const cacheData = {
      cards,
      timestamp: Date.now()
    };
    
    localStorage.setItem(CACHE_KEY_PREFIX + deckId, JSON.stringify(cacheData));
    
    // For local-mode decks, also save to persistent storage
    if (isLocalMode) {
      localStorage.setItem(LOCAL_STORAGE_KEY_PREFIX + deckId, JSON.stringify(cards));
    }
  } catch (e) {
    console.error('Error caching cards:', e);
  }
}

/**
 * Get cards from local storage (for local-mode decks)
 */
export function getLocalCards(deckId) {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY_PREFIX + deckId);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error loading local cards:', e);
    return [];
  }
}

/**
 * Save cards to local storage (for local-mode decks)
 */
export function saveLocalCards(deckId, cards) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY_PREFIX + deckId, JSON.stringify(cards));
    // Also update cache
    setCachedCards(deckId, cards, true);
    return true;
  } catch (e) {
    console.error('Error saving local cards:', e);
    return false;
  }
}

/**
 * Delete local storage for a deck
 */
export function deleteLocalCards(deckId) {
  try {
    localStorage.removeItem(LOCAL_STORAGE_KEY_PREFIX + deckId);
    return true;
  } catch (e) {
    console.error('Error deleting local cards:', e);
    return false;
  }
}

/**
 * Get pending changes for a deck
 */
export function getPendingChanges(deckId) {
  try {
    const pending = localStorage.getItem(PENDING_KEY_PREFIX + deckId);
    return pending ? JSON.parse(pending) : { adds: [], updates: [], deletes: [] };
  } catch (e) {
    console.error('Error loading pending changes:', e);
    return { adds: [], updates: [], deletes: [] };
  }
}

/**
 * Set pending changes for a deck
 */
export function setPendingChanges(deckId, changes) {
  try {
    localStorage.setItem(PENDING_KEY_PREFIX + deckId, JSON.stringify(changes));
  } catch (e) {
    console.error('Error saving pending changes:', e);
  }
}

/**
 * Add a card locally (pending sync for spreadsheet mode, immediate save for local mode)
 */
export function addCardLocally(deckId, card, isLocalMode = false) {
  const cached = getCachedCards(deckId);
  
  if (isLocalMode) {
    // For local mode, save immediately
    const localCards = cached ? cached.cards : getLocalCards(deckId);
    const newCards = [...localCards, card];
    return saveLocalCards(deckId, newCards);
  }
  
  // For spreadsheet mode, use pending changes
  if (!cached) return false;
  
  const pending = getPendingChanges(deckId);
  
  // Add temp ID for local tracking
  const tempId = `temp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const cardWithId = { ...card, _tempId: tempId };
  
  // Add to cache
  cached.cards.push(cardWithId);
  setCachedCards(deckId, cached.cards);
  
  // Add to pending
  pending.adds.push(cardWithId);
  setPendingChanges(deckId, pending);
  
  return true;
}

/**
 * Update a card locally (pending sync for spreadsheet mode, immediate save for local mode)
 */
export function updateCardLocally(deckId, index, updatedCard, isLocalMode = false) {
  if (isLocalMode) {
    // For local mode, save immediately
    const cached = getCachedCards(deckId);
    const localCards = cached ? cached.cards : getLocalCards(deckId);
    
    if (!localCards[index]) return false;
    
    const newCards = [...localCards];
    newCards[index] = updatedCard;
    return saveLocalCards(deckId, newCards);
  }
  
  // For spreadsheet mode, use pending changes
  const cached = getCachedCards(deckId);
  const pending = getPendingChanges(deckId);
  
  if (!cached || !cached.cards[index]) return false;
  
  const oldCard = cached.cards[index];
  
  // Update in cache
  cached.cards[index] = updatedCard;
  setCachedCards(deckId, cached.cards);
  
  // Add to pending updates
  if (oldCard._tempId) {
    // If it's a temp card, update in adds array
    const addIndex = pending.adds.findIndex(c => c._tempId === oldCard._tempId);
    if (addIndex >= 0) {
      pending.adds[addIndex] = updatedCard;
    }
  } else {
    // Otherwise add to updates
    const updateIndex = pending.updates.findIndex(u => u.index === index);
    if (updateIndex >= 0) {
      pending.updates[updateIndex].card = updatedCard;
    } else {
      pending.updates.push({ index, card: updatedCard });
    }
  }
  
  setPendingChanges(deckId, pending);
  return true;
}

/**
 * Delete a card locally (pending sync for spreadsheet mode, immediate save for local mode)
 */
export function deleteCardLocally(deckId, index, isLocalMode = false) {
  if (isLocalMode) {
    // For local mode, save immediately
    const cached = getCachedCards(deckId);
    const localCards = cached ? cached.cards : getLocalCards(deckId);
    
    if (!localCards[index]) return false;
    
    const newCards = localCards.filter((_, i) => i !== index);
    return saveLocalCards(deckId, newCards);
  }
  
  // For spreadsheet mode, use pending changes
  const cached = getCachedCards(deckId);
  const pending = getPendingChanges(deckId);
  
  if (!cached || !cached.cards[index]) return false;
  
  const card = cached.cards[index];
  
  // If it's a temp card, just remove from adds
  if (card._tempId) {
    const addIndex = pending.adds.findIndex(c => c._tempId === card._tempId);
    if (addIndex >= 0) {
      pending.adds.splice(addIndex, 1);
    }
    // Remove from cache
    cached.cards.splice(index, 1);
    setCachedCards(deckId, cached.cards);
    setPendingChanges(deckId, pending);
    return true;
  }
  
  // For non-temp cards, we need to:
  // 1. First adjust all existing pending deletes/updates that reference indices after this one
  // 2. Then add this index to deletes
  // 3. Then remove from cache
  
  // Adjust indices in pending updates and deletes BEFORE adding the new delete
  // All indices after the deleted one need to be decremented by 1
  pending.updates = pending.updates
    .filter(({ index: updateIndex }) => updateIndex !== index)
    .map(({ index: updateIndex, card: updateCard }) => {
      if (updateIndex > index) {
        return { index: updateIndex - 1, card: updateCard };
      }
      return { index: updateIndex, card: updateCard };
    });
  
  // Adjust existing deletes (but don't filter out the current index yet - we'll add it)
  pending.deletes = pending.deletes
    .filter(deleteIndex => deleteIndex !== index) // Remove if same index (shouldn't happen, but safety)
    .map(deleteIndex => {
      if (deleteIndex > index) {
        return deleteIndex - 1;
      }
      return deleteIndex;
    });
  
  // NOW add the current index to deletes (after adjusting other indices)
  pending.deletes.push(index);
  
  // Remove duplicates and sort (descending for sync)
  pending.deletes = [...new Set(pending.deletes)].sort((a, b) => b - a);
  
  // Remove from cache
  cached.cards.splice(index, 1);
  setCachedCards(deckId, cached.cards);
  
  setPendingChanges(deckId, pending);
  return true;
}

/**
 * Check if there are pending changes
 */
export function hasPendingChanges(deckId) {
  const pending = getPendingChanges(deckId);
  return pending.adds.length > 0 || pending.updates.length > 0 || pending.deletes.length > 0;
}

/**
 * Get count of pending changes
 */
export function getPendingChangesCount(deckId) {
  const pending = getPendingChanges(deckId);
  return pending.adds.length + pending.updates.length + pending.deletes.length;
}

/**
 * Clear pending changes after successful sync
 */
export function clearPendingChanges(deckId) {
  try {
    localStorage.removeItem(PENDING_KEY_PREFIX + deckId);
  } catch (e) {
    console.error('Error clearing pending changes:', e);
  }
}

/**
 * Clear cache for a deck
 */
export function clearCache(deckId) {
  try {
    localStorage.removeItem(CACHE_KEY_PREFIX + deckId);
  } catch (e) {
    console.error('Error clearing cache:', e);
  }
}

/**
 * Get cache age in minutes
 */
export function getCacheAge(deckId) {
  const cached = getCachedCards(deckId);
  if (!cached || !cached.timestamp) return Infinity;
  return (Date.now() - cached.timestamp) / 1000 / 60;
}

/**
 * Remove duplicate cards (Strict Mode)
 * Checks EXACT match of Front AND Back.
 * @param {string} deckId - Deck ID
 * @returns {number} Number of duplicates removed
 */
export function removeDuplicateCards(deckId) {
  const cached = getCachedCards(deckId);
  const pendingCheck = getPendingChanges(deckId);
  
  // Guard clause: Require sync before deleting duplicate indices
  if (pendingCheck.deletes.length > 0) {
    console.warn("Please sync pending deletions to Google Sheets before running duplicate removal.");
    alert("Please sync your pending deletions to Google Sheets before removing duplicates!");
    return 0;
  }

  if (!cached || !cached.cards) return 0;
  
  const seen = new Map();
  const uniqueCards = [];
  const indicesToDelete = [];
  const duplicateExamples = [];
  
  console.group("Duplicate Check");
  console.log(`Checking ${cached.cards.length} cards for duplicates...`);
  
  let emptyCards = 0;
  let cardsWithOnlyWord = 0;
  let cardsWithOnlyTranslation = 0;
  let validCards = 0;
  
  cached.cards.forEach((card, index) => {
    const word = String(card.word || '').normalize('NFC').trim();
    const translation = String(card.translation || '').normalize('NFC').trim();
    
    if (!word && !translation) {
      emptyCards++;
      uniqueCards.push(card);
      return;
    }
    if (!word) {
      cardsWithOnlyTranslation++;
      uniqueCards.push(card);
      return;
    }
    if (!translation) {
      cardsWithOnlyWord++;
      uniqueCards.push(card);
      return;
    }
    
    validCards++;
    
    const uniqueKey = JSON.stringify([word.toLowerCase(), translation.toLowerCase()]);
    
    if (seen.has(uniqueKey)) {
      const firstIndex = seen.get(uniqueKey);
      indicesToDelete.push(index);
      
      if (duplicateExamples.length < 10) {
        duplicateExamples.push({
          first: { index: firstIndex, word, translation },
          duplicate: { index, word, translation }
        });
      }
    } else {
      seen.set(uniqueKey, index);
      uniqueCards.push(card);
    }
  });
  
  console.log(`Stats:`);
  console.log(`- Empty cards: ${emptyCards}`);
  console.log(`- Word only: ${cardsWithOnlyWord}`);
  console.log(`- Translation only: ${cardsWithOnlyTranslation}`);
  console.log(`- Valid cards: ${validCards}`);
  console.log(`- Unique cards: ${seen.size}`);
  console.log(`- Duplicates found: ${indicesToDelete.length}`);
  
  if (duplicateExamples.length > 0) {
    console.log(`Duplicate Examples:`);
    duplicateExamples.forEach((ex, i) => {
      console.log(`${i + 1}. Index ${ex.first.index} & ${ex.duplicate.index}: "${ex.first.word}" -> "${ex.first.translation}"`);
    });
  }
  
  // Safety check: Abort if over 50% of cards match as duplicates
  const duplicateRatio = indicesToDelete.length / cached.cards.length;
  if (duplicateRatio > 0.5) {
    console.error(`WARNING: ${(duplicateRatio * 100).toFixed(1)}% of cards flagged as duplicates. Aborting for safety.`);
    console.groupEnd();
    return 0;
  }
  
  console.groupEnd();

  if (indicesToDelete.length > 0) {
    setCachedCards(deckId, uniqueCards);
    
    const pending = getPendingChanges(deckId);
    
    // Remove duplicates from pending additions
    const seenAdds = new Set();
    pending.adds = pending.adds.filter(card => {
      const w = String(card.word || '').normalize('NFC').trim();
      const t = String(card.translation || '').normalize('NFC').trim();
      const key = JSON.stringify([w, t]);
      
      if (seenAdds.has(key)) return false;
      seenAdds.add(key);
      return true;
    });
    
    // Adjust indices for pending updates and deletions
    const sortedIndices = [...indicesToDelete].sort((a, b) => b - a);
    
    pending.updates = pending.updates
      .filter(({ index }) => !indicesToDelete.includes(index))
      .map(({ index, card }) => {
        const deletedBefore = sortedIndices.filter(delIdx => delIdx < index).length;
        return { index: index - deletedBefore, card };
      });
    
    // 3. Die gefundenen Duplikate zur Löschliste hinzufügen
    // WICHTIG: Nur Karten löschen, die NICHT temporär (lokal neu) sind.
    sortedIndices.forEach(index => {
      const card = cached.cards[index]; // Zugriff auf die ORIGINAL Karte (vor Filterung)
      if (card && !card._tempId) {
        pending.deletes.push(index);
      }
    });
    
    // Deletes sauber sortieren und Dopplungen entfernen
    pending.deletes = [...new Set(pending.deletes)].sort((a, b) => b - a);
    
    setPendingChanges(deckId, pending);
  }
  
  return indicesToDelete.length;
}

