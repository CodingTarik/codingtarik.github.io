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
  
  // SICHERHEIT: Erst synchronisieren, wenn bereits Löschungen ausstehen,
  // da sonst die Indizes durcheinander geraten können.
  if (pendingCheck.deletes.length > 0) {
    console.warn("Bitte erst synchronisieren, bevor Duplikate entfernt werden, um Index-Fehler zu vermeiden.");
    alert("Bitte synchronisiere erst deine aktuellen Löschungen mit Google Sheets, bevor du die Duplikat-Suche startest!");
    return 0;
  }

  if (!cached || !cached.cards) return 0;
  
  const seen = new Map(); // Map statt Set, um den ersten Index zu speichern
  const uniqueCards = [];
  const indicesToDelete = [];
  const duplicateExamples = []; // Für Debugging
  
  console.group("Duplikat-Prüfung gestartet");
  console.log(`Prüfe ${cached.cards.length} Karten auf Duplikate...`);
  
  let emptyCards = 0;
  let cardsWithOnlyWord = 0;
  let cardsWithOnlyTranslation = 0;
  let validCards = 0;
  
  cached.cards.forEach((card, index) => {
    // 1. Strings erzwingen, trimmen und Unicode normalisieren
    const word = String(card.word || '').normalize('NFC').trim();
    const translation = String(card.translation || '').normalize('NFC').trim();
    
    // Statistiken sammeln
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
    
    // 2. Erstelle einen eindeutigen Key - NUR für Karten mit BEIDEN Feldern gefüllt
    const uniqueKey = JSON.stringify([word.toLowerCase(), translation.toLowerCase()]);
    
    if (seen.has(uniqueKey)) {
      // Das ist ein echtes Duplikat!
      const firstIndex = seen.get(uniqueKey);
      indicesToDelete.push(index);
      
      // Erste 10 Duplikate für Debugging speichern
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
  
  console.log(`Statistiken:`);
  console.log(`- Leere Karten: ${emptyCards}`);
  console.log(`- Nur Wort: ${cardsWithOnlyWord}`);
  console.log(`- Nur Übersetzung: ${cardsWithOnlyTranslation}`);
  console.log(`- Gültige Karten (beide Felder): ${validCards}`);
  console.log(`- Eindeutige Karten: ${seen.size}`);
  console.log(`- Duplikate gefunden: ${indicesToDelete.length}`);
  
  if (duplicateExamples.length > 0) {
    console.log(`Beispiele für Duplikate:`);
    duplicateExamples.forEach((ex, i) => {
      console.log(`${i + 1}. Index ${ex.first.index} & ${ex.duplicate.index}: "${ex.first.word}" -> "${ex.first.translation}"`);
    });
  }
  
  // SICHERHEIT: Wenn mehr als 50% der Karten als Duplikate erkannt werden, ist etwas falsch
  const duplicateRatio = indicesToDelete.length / cached.cards.length;
  if (duplicateRatio > 0.5) {
    console.error(`WARNUNG: ${(duplicateRatio * 100).toFixed(1)}% der Karten wurden als Duplikate erkannt! Das scheint falsch zu sein.`);
    console.error(`Bitte überprüfe die Karten manuell.`);
    console.groupEnd();
    return 0; // Sicherheitshalber nichts löschen
  }
  
  console.groupEnd();

  if (indicesToDelete.length > 0) {
    // Cache mit den bereinigten Karten überschreiben
    setCachedCards(deckId, uniqueCards);
    
    const pending = getPendingChanges(deckId);
    
    // 1. Duplikate aus den "Adds" (neu hinzugefügten, noch nicht gesyncten) entfernen
    const seenAdds = new Set();
    pending.adds = pending.adds.filter(card => {
      const w = String(card.word || '').normalize('NFC').trim();
      const t = String(card.translation || '').normalize('NFC').trim();
      const key = JSON.stringify([w, t]);
      
      if (seenAdds.has(key)) return false;
      seenAdds.add(key);
      return true;
    });
    
    // 2. Updates und Deletes Indizes anpassen
    // Wir sortieren absteigend, damit wir von hinten löschen und Indizes vorne stabil bleiben
    const sortedIndices = [...indicesToDelete].sort((a, b) => b - a);
    
    // Updates anpassen: Wenn eine Karte VOR einem Update gelöscht wurde, rutscht der Index des Updates eins runter
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

