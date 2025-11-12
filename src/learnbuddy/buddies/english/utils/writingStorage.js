/**
 * Writing Storage for English Buddy
 * Stores written texts, corrections, and improvements
 */

const STORAGE_KEY = 'english_writing_texts';

/**
 * Get all saved texts
 */
export function getAllTexts() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

/**
 * Save a new text
 */
export function saveText(textData) {
  const texts = getAllTexts();
  const newText = {
    id: `text_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    ...textData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  texts.push(newText);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(texts));
  return newText;
}

/**
 * Update an existing text
 */
export function updateText(textId, updates) {
  const texts = getAllTexts();
  const index = texts.findIndex(t => t.id === textId);
  if (index === -1) return null;
  
  texts[index] = {
    ...texts[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(texts));
  return texts[index];
}

/**
 * Get a single text by ID
 */
export function getText(textId) {
  const texts = getAllTexts();
  return texts.find(t => t.id === textId) || null;
}

/**
 * Delete a text
 */
export function deleteText(textId) {
  const texts = getAllTexts();
  const filtered = texts.filter(t => t.id !== textId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

/**
 * Get texts by topic
 */
export function getTextsByTopic(topicId) {
  const texts = getAllTexts();
  return texts.filter(t => t.topicId === topicId);
}

