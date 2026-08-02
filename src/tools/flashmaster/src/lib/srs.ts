/**
 * SM-2 based Spaced Repetition Engine
 * Compatible with Anki's algorithm
 */

import type { Card, DeckSettings, Rating } from '../types';

export interface ReviewResult {
  card: Card;
  xpEarned: number;
}

/** Mature card threshold – Anki considers cards with interval >= 21 days as "mature" */
export const MATURE_INTERVAL = 21;
/** Young card: graduated but not yet mature */
export const YOUNG_MAX = MATURE_INTERVAL - 1;

/**
 * Fuzz factor – adds ±randomness to review intervals to prevent cards
 * from clustering on the same day (Anki default behaviour).
 * Range is ±5% for short intervals, up to ±25% for long ones.
 */
function fuzzInterval(interval: number): number {
  if (interval < 2) return interval; // no fuzz for very short intervals
  if (interval === 2) return Math.random() < 0.5 ? 2 : 3;
  const fuzzRange = interval < 7
    ? Math.max(1, Math.round(interval * 0.25))
    : interval < 30
      ? Math.max(1, Math.round(interval * 0.15))
      : Math.max(1, Math.round(interval * 0.05));
  const delta = Math.floor(Math.random() * (fuzzRange * 2 + 1)) - fuzzRange;
  return Math.max(1, interval + delta);
}

/**
 * Process a card review and return updated card state
 */
export function reviewCard(
  card: Card,
  rating: Rating,
  settings: DeckSettings,
  now: number = Date.now()
): ReviewResult {
  const updated = { ...card, updatedAt: now };
  let xpEarned = 10;

  switch (card.status) {
    case 'new':
    case 'learning':
      handleLearning(updated, rating, settings, now);
      break;
    case 'review':
      handleReview(updated, rating, settings, now);
      break;
    case 'relearning':
      handleRelearning(updated, rating, settings, now);
      break;
    default:
      break;
  }

  if (rating === 'easy') xpEarned += 5;
  if (rating === 'again') xpEarned = 5;

  updated.reps += 1;
  return { card: updated, xpEarned };
}

function handleLearning(card: Card, rating: Rating, settings: DeckSettings, now: number) {
  const steps = settings.learningSteps;

  switch (rating) {
    case 'again':
      card.learningStep = 0;
      card.status = 'learning';
      card.dueDate = now + (steps[0] || 1) * 60 * 1000;
      break;

    case 'hard':
      // Stay on current step, repeat with slightly longer delay
      card.status = 'learning';
      const hardDelay = steps[card.learningStep] || steps[steps.length - 1] || 1;
      card.dueDate = now + hardDelay * 1.5 * 60 * 1000;
      break;

    case 'good':
      card.learningStep += 1;
      if (card.learningStep >= steps.length) {
        // Graduate
        card.status = 'review';
        card.interval = settings.graduatingInterval;
        card.ease = settings.startingEase;
        card.dueDate = now + card.interval * 24 * 60 * 60 * 1000;
      } else {
        card.status = 'learning';
        card.dueDate = now + steps[card.learningStep] * 60 * 1000;
      }
      break;

    case 'easy':
      // Immediately graduate with easy interval
      card.status = 'review';
      card.interval = settings.easyInterval;
      card.ease = settings.startingEase;
      card.dueDate = now + card.interval * 24 * 60 * 60 * 1000;
      break;
  }
}

function handleReview(card: Card, rating: Rating, settings: DeckSettings, now: number) {
  switch (rating) {
    case 'again':
      card.lapses += 1;
      card.ease = Math.max(1.3, card.ease - 0.2);
      card.interval = fuzzInterval(Math.max(
        settings.lapseMinInterval,
        Math.round(card.interval * settings.lapseNewInterval)
      ));
      if (settings.lapseSteps.length > 0) {
        card.status = 'relearning';
        card.learningStep = 0;
        card.dueDate = now + settings.lapseSteps[0] * 60 * 1000;
      } else {
        card.dueDate = now + card.interval * 24 * 60 * 60 * 1000;
      }
      break;

    case 'hard':
      card.ease = Math.max(1.3, card.ease - 0.15);
      card.interval = fuzzInterval(Math.min(
        settings.maxInterval,
        Math.round(card.interval * 1.2 * settings.intervalModifier)
      ));
      card.dueDate = now + card.interval * 24 * 60 * 60 * 1000;
      break;

    case 'good':
      card.interval = fuzzInterval(Math.min(
        settings.maxInterval,
        Math.round(card.interval * card.ease * settings.intervalModifier)
      ));
      card.dueDate = now + card.interval * 24 * 60 * 60 * 1000;
      break;

    case 'easy':
      card.ease += 0.15;
      card.interval = fuzzInterval(Math.min(
        settings.maxInterval,
        Math.round(card.interval * card.ease * settings.easyBonus * settings.intervalModifier)
      ));
      card.dueDate = now + card.interval * 24 * 60 * 60 * 1000;
      break;
  }
}

function handleRelearning(card: Card, rating: Rating, settings: DeckSettings, now: number) {
  const steps = settings.lapseSteps;

  switch (rating) {
    case 'again':
      card.learningStep = 0;
      card.dueDate = now + (steps[0] || 10) * 60 * 1000;
      break;

    case 'hard':
      const hardDelay = steps[card.learningStep] || steps[steps.length - 1] || 10;
      card.dueDate = now + hardDelay * 1.5 * 60 * 1000;
      break;

    case 'good':
      card.learningStep += 1;
      if (card.learningStep >= steps.length) {
        card.status = 'review';
        card.dueDate = now + card.interval * 24 * 60 * 60 * 1000;
      } else {
        card.dueDate = now + steps[card.learningStep] * 60 * 1000;
      }
      break;

    case 'easy':
      card.status = 'review';
      card.interval = Math.max(card.interval, settings.easyInterval);
      card.dueDate = now + card.interval * 24 * 60 * 60 * 1000;
      break;
  }
}

/**
 * Get the cards due for study in a deck
 */
export function getDueCards(cards: Card[], settings: DeckSettings, now: number = Date.now()) {
  const newCards = cards.filter(c => c.status === 'new').slice(0, settings.newCardsPerDay);
  const learningCards = cards.filter(c =>
    (c.status === 'learning' || c.status === 'relearning') && c.dueDate <= now
  );
  const reviewCards = cards.filter(c =>
    c.status === 'review' && c.dueDate <= now
  ).slice(0, settings.reviewsPerDay);

  return {
    newCards,
    learningCards,
    reviewCards,
    allDue: [...learningCards, ...newCards, ...reviewCards],
    counts: {
      new: newCards.length,
      learning: learningCards.length,
      review: reviewCards.length,
      total: learningCards.length + newCards.length + reviewCards.length,
    },
  };
}

/**
 * Format interval for display
 */
export function formatInterval(days: number): string {
  if (days < 1) {
    const minutes = Math.round(days * 24 * 60);
    if (minutes < 60) return `${minutes}m`;
    return `${Math.round(minutes / 60)}h`;
  }
  if (days < 30) return `${Math.round(days)}d`;
  if (days < 365) return `${Math.round(days / 30)}mo`;
  return `${(days / 365).toFixed(1)}y`;
}

/**
 * Preview the next intervals for all ratings
 */
export function previewIntervals(card: Card, settings: DeckSettings): Record<Rating, string> {
  const ratings: Rating[] = ['again', 'hard', 'good', 'easy'];
  const result: Record<string, string> = {};

  for (const rating of ratings) {
    const { card: preview } = reviewCard({ ...card }, rating, settings);
    const diffMs = preview.dueDate - Date.now();
    const diffDays = diffMs / (24 * 60 * 60 * 1000);
    result[rating] = formatInterval(diffDays);
  }

  return result as Record<Rating, string>;
}
