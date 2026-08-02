/**
 * Deck Sharing Module
 * Uses the Web Share API for native sharing (WhatsApp, Email, Signal, etc.)
 * Falls back to download + copy-link for unsupported browsers.
 */

import { db } from './db';
import { exportAllData } from './anki';
import type { Deck, Card, SyncData } from '../types';
import { saveAs } from 'file-saver';

/**
 * Export a single deck (with its cards) as a JSON blob.
 */
export async function exportDeckAsJson(deckId: string): Promise<{ blob: Blob; filename: string; deck: Deck }> {
  const deck = await db.decks.get(deckId);
  if (!deck) throw new Error('Deck not found');
  const cards = await db.cards.where('deckId').equals(deckId).toArray();
  const reviewLogs = await db.reviewLogs.where('deckId').equals(deckId).toArray();

  const data: SyncData = {
    version: 1,
    exportedAt: Date.now(),
    decks: [deck],
    cards,
    reviewLogs,
    userStats: null, // Don't share personal stats
  };

  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const safeName = deck.name.replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 50);
  const filename = `FlashMaster-${safeName}.json`;

  return { blob, filename, deck };
}

/**
 * Check if Web Share API with file sharing is supported.
 */
export function isShareSupported(): boolean {
  return 'share' in navigator;
}

export function isFileShareSupported(): boolean {
  return 'canShare' in navigator;
}

/**
 * Share a deck via the native Web Share API.
 * Falls back to file download if sharing is not supported.
 */
export async function shareDeck(deckId: string): Promise<'shared' | 'downloaded' | 'cancelled'> {
  const { blob, filename, deck } = await exportDeckAsJson(deckId);

  // Try native share with file
  if (isFileShareSupported()) {
    const file = new File([blob], filename, { type: 'application/json' });
    const shareData: ShareData = {
      title: `FlashMaster: ${deck.name}`,
      text: `Check out my "${deck.name}" flashcard deck! (${deck.tags.length > 0 ? deck.tags.join(', ') + ' • ' : ''}Import in FlashMaster)`,
      files: [file],
    };

    try {
      if (navigator.canShare(shareData)) {
        await navigator.share(shareData);
        return 'shared';
      }
    } catch (err: any) {
      if (err.name === 'AbortError') return 'cancelled';
      // Fall through to text-only share
    }
  }

  // Try text-only share (without file)
  if (isShareSupported()) {
    try {
      await navigator.share({
        title: `FlashMaster: ${deck.name}`,
        text: `Check out my "${deck.name}" flashcard deck with ${await db.cards.where('deckId').equals(deckId).count()} cards! Open in FlashMaster to import.`,
      });
      // Also trigger download since we couldn't share the file
      saveAs(blob, filename);
      return 'shared';
    } catch (err: any) {
      if (err.name === 'AbortError') return 'cancelled';
    }
  }

  // Fallback: just download the file
  saveAs(blob, filename);
  return 'downloaded';
}

/**
 * Share all decks.
 */
export async function shareAllDecks(): Promise<'shared' | 'downloaded' | 'cancelled'> {
  const data = await exportAllData();
  data.userStats = null; // Privacy
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const filename = `FlashMaster-all-decks-${new Date().toISOString().slice(0, 10)}.json`;

  if (isFileShareSupported()) {
    const file = new File([blob], filename, { type: 'application/json' });
    try {
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'FlashMaster Decks',
          text: 'My FlashMaster flashcard decks! Import in FlashMaster.',
          files: [file],
        });
        return 'shared';
      }
    } catch (err: any) {
      if (err.name === 'AbortError') return 'cancelled';
    }
  }

  saveAs(blob, filename);
  return 'downloaded';
}
