import Dexie, { type Table } from 'dexie';
import type { Card, Deck, ReviewLog, UserStats, DeckResource, Book, ChatSession } from '../types';

export class FlashMasterDB extends Dexie {
  decks!: Table<Deck>;
  cards!: Table<Card>;
  reviewLogs!: Table<ReviewLog>;
  userStats!: Table<UserStats>;
  resources!: Table<DeckResource>;
  books!: Table<Book>;
  chatSessions!: Table<ChatSession>;

  constructor() {
    super('FlashMasterDB');
    this.version(1).stores({
      decks: 'id, name, createdAt, updatedAt',
      cards: 'id, deckId, status, dueDate, createdAt, updatedAt, [deckId+status], [deckId+dueDate]',
      reviewLogs: 'id, cardId, deckId, reviewedAt, [deckId+reviewedAt]',
      userStats: 'id',
    });
    this.version(2).stores({
      decks: 'id, name, createdAt, updatedAt',
      cards: 'id, deckId, status, dueDate, createdAt, updatedAt, [deckId+status], [deckId+dueDate]',
      reviewLogs: 'id, cardId, deckId, reviewedAt, [deckId+reviewedAt]',
      userStats: 'id',
      resources: 'id, deckId, type, createdAt, updatedAt, [deckId+type]',
    });
    this.version(3).stores({
      decks: 'id, name, createdAt, updatedAt',
      cards: 'id, deckId, status, dueDate, createdAt, updatedAt, [deckId+status], [deckId+dueDate]',
      reviewLogs: 'id, cardId, deckId, reviewedAt, [deckId+reviewedAt]',
      userStats: 'id',
      resources: 'id, deckId, type, createdAt, updatedAt, [deckId+type]',
      books: 'id, title, author, format, addedAt, lastReadAt, progress',
    });
    this.version(4).stores({
      decks: 'id, name, createdAt, updatedAt',
      cards: 'id, deckId, status, dueDate, createdAt, updatedAt, [deckId+status], [deckId+dueDate]',
      reviewLogs: 'id, cardId, deckId, reviewedAt, [deckId+reviewedAt]',
      userStats: 'id',
      resources: 'id, deckId, type, createdAt, updatedAt, [deckId+type]',
      books: 'id, title, author, format, addedAt, lastReadAt, progress',
      chatSessions: 'id, createdAt, updatedAt',
    });
  }
}

export const db = new FlashMasterDB();
