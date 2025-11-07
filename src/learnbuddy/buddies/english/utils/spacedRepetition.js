/**
 * Spaced Repetition Algorithm
 * Based on SuperMemo 2 algorithm
 */

export const RATING = {
  AGAIN: 1,
  HARD: 2,
  GOOD: 3,
  EASY: 4
};

/**
 * Calculate next review date based on rating
 * @param {Object} card - The flashcard
 * @param {number} rating - Rating from 1-4
 * @returns {Object} Updated card with new review dates
 */
export function calculateNextReview(card, rating) {
  const now = new Date();
  let interval = card.interval || 0;
  let easeFactor = card.easeFactor || 2.5;
  let repetitions = card.repetitions || 0;

  // Update ease factor based on rating
  easeFactor = Math.max(1.3, easeFactor + (0.1 - (5 - rating) * (0.08 + (5 - rating) * 0.02)));

  // Calculate new interval
  if (rating < RATING.GOOD) {
    // Reset for AGAIN or HARD
    interval = rating === RATING.AGAIN ? 1 : Math.max(1, Math.floor(interval * 0.5));
    repetitions = 0;
  } else {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  }

  // Calculate next review date
  const nextReviewDate = new Date(now);
  nextReviewDate.setDate(nextReviewDate.getDate() + interval);

  return {
    ...card,
    interval,
    easeFactor,
    repetitions,
    lastReviewDate: now.toISOString(),
    nextReviewDate: nextReviewDate.toISOString()
  };
}

/**
 * Get cards due for review
 * @param {Array} cards - All cards
 * @returns {Array} Cards that are due for review
 */
export function getDueCards(cards) {
  const now = new Date();
  return cards.filter(card => {
    if (!card.nextReviewDate) return true; // New cards are always due
    const nextReview = new Date(card.nextReviewDate);
    return nextReview <= now;
  });
}

/**
 * Get statistics for a deck
 * @param {Array} cards - All cards in the deck
 * @returns {Object} Statistics
 */
export function getDeckStats(cards) {
  const now = new Date();
  const dueCards = getDueCards(cards);
  
  const newCards = cards.filter(c => !c.lastReviewDate).length;
  const learning = cards.filter(c => 
    c.lastReviewDate && (!c.repetitions || c.repetitions < 2)
  ).length;
  const mature = cards.filter(c => 
    c.repetitions >= 2
  ).length;

  return {
    total: cards.length,
    new: newCards,
    learning,
    mature,
    due: dueCards.length
  };
}

/**
 * Calculate streak (consecutive days studied)
 * @param {Array} reviewDates - Array of review date strings
 * @returns {number} Current streak
 */
export function calculateStreak(reviewDates) {
  if (!reviewDates || reviewDates.length === 0) return 0;

  const dates = reviewDates
    .map(d => new Date(d).toDateString())
    .filter((v, i, a) => a.indexOf(v) === i) // unique dates
    .sort((a, b) => new Date(b) - new Date(a)); // newest first

  let streak = 0;
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  // Check if studied today or yesterday
  if (dates[0] !== today && dates[0] !== yesterday) {
    return 0;
  }

  let currentDate = new Date();
  for (let i = 0; i < dates.length; i++) {
    const dateStr = new Date(currentDate).toDateString();
    if (dates.includes(dateStr)) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

