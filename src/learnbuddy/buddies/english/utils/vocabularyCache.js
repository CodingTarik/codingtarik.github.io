/**
 * Local cache for vocabulary cards with sync tracking
 */

const CACHE_KEY_PREFIX = 'vocabulary_cache_';
const PENDING_KEY_PREFIX = 'vocabulary_pending_';

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
 */
export function setCachedCards(deckId, cards) {
  try {
    localStorage.setItem(CACHE_KEY_PREFIX + deckId, JSON.stringify({
      cards,
      timestamp: Date.now()
    }));
  } catch (e) {
    console.error('Error caching cards:', e);
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
 * Add a card locally (pending sync)
 */
export function addCardLocally(deckId, card) {
  const cached = getCachedCards(deckId);
  const pending = getPendingChanges(deckId);
  
  if (!cached) return false;
  
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
 * Update a card locally (pending sync)
 */
export function updateCardLocally(deckId, index, updatedCard) {
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
 * Delete a card locally (pending sync)
 */
export function deleteCardLocally(deckId, index) {
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
  } else {
    // Otherwise add to deletes
    pending.deletes.push(index);
  }
  
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

