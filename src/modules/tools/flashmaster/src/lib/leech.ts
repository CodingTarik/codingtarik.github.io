/**
 * Leech Detection Module
 * Based on interference theory — cards that are repeatedly failed
 * consume disproportionate study time and should be flagged for
 * reformulation or suspension.
 * 
 * Leeches are detected when a card's lapse count exceeds the
 * deck's leech threshold (default: 8).
 */

import type { Card, DeckSettings } from '../types';

/**
 * Check if a card is a leech based on its lapse count.
 */
export function isLeech(card: Card, settings: DeckSettings): boolean {
  const threshold = settings.leechThreshold ?? 8;
  return card.lapses >= threshold;
}

/**
 * Check if a card just became a leech (crossed the threshold).
 */
export function justBecameLeech(card: Card, previousLapses: number, settings: DeckSettings): boolean {
  const threshold = settings.leechThreshold ?? 8;
  return previousLapses < threshold && card.lapses >= threshold;
}

/**
 * Get leech severity level (how far past threshold).
 */
export function leechSeverity(card: Card, settings: DeckSettings): 'none' | 'warning' | 'severe' | 'critical' {
  const threshold = settings.leechThreshold ?? 8;
  if (card.lapses < threshold) return 'none';
  if (card.lapses < threshold + 4) return 'warning';
  if (card.lapses < threshold + 8) return 'severe';
  return 'critical';
}

/**
 * Get suggestions for dealing with a leech card.
 */
export function getLeechSuggestions(card: Card): string[] {
  const suggestions: string[] = [];
  
  if (card.front.length > 100) {
    suggestions.push('The front is very long — try breaking it into smaller, more specific cards.');
  }
  if (card.back.length > 200) {
    suggestions.push('The back has a lot of information — consider splitting into multiple cards.');
  }
  if (!card.frontImageUrl && !card.backImageUrl) {
    suggestions.push('Add an image — visual cues can dramatically improve recall.');
  }
  if (card.tags.length === 0) {
    suggestions.push('Add tags to organize and create mental associations.');
  }
  
  suggestions.push('Try rewording the question to be more specific and unambiguous.');
  suggestions.push('Use a mnemonic or personal association to make it more memorable.');
  suggestions.push('Consider if this card tests just one concept (minimum information principle).');
  
  return suggestions;
}

/**
 * Get all leech cards from a deck.
 */
export function getLeechCards(cards: Card[], settings: DeckSettings): Card[] {
  return cards.filter(c => isLeech(c, settings));
}
