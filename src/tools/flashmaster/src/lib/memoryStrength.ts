/**
 * Memory Strength & Forgetting Curve
 * Based on Ebbinghaus' forgetting curve research (1885).
 * 
 * The probability of recall decays exponentially:
 *   R = e^(-t/S)
 * where t = time since last review, S = stability (proportional to interval × ease)
 *
 * This module provides visual indicators of how well a card is memorized.
 */

import type { Card } from '../types';

/**
 * Calculate predicted retention probability (0 to 1).
 * Based on a simplified version of the forgetting curve.
 */
export function getRetention(card: Card, now: number = Date.now()): number {
  // New cards have no retention data
  if (card.status === 'new') return 0;

  // Currently in learning: partial retention
  if (card.status === 'learning' || card.status === 'relearning') {
    return 0.5;
  }

  // Review cards: calculate based on interval and time elapsed
  const daysSinceReview = Math.max(0, (now - card.dueDate + card.interval * 86400000)) / 86400000;
  const stability = card.interval * (card.ease / 2.5); // stability in days

  if (stability <= 0) return 0;

  // Forgetting curve: R = e^(-t/S)
  const retention = Math.exp(-daysSinceReview / stability);
  return Math.max(0, Math.min(1, retention));
}

/**
 * Get a human-readable strength label.
 */
export function getStrengthLabel(retention: number): string {
  if (retention >= 0.9) return 'Strong';
  if (retention >= 0.7) return 'Good';
  if (retention >= 0.5) return 'Fair';
  if (retention >= 0.3) return 'Weak';
  if (retention > 0) return 'Fading';
  return 'New';
}

/**
 * Get color class for strength indicator.
 */
export function getStrengthColor(retention: number): string {
  if (retention >= 0.9) return 'text-emerald-400';
  if (retention >= 0.7) return 'text-green-400';
  if (retention >= 0.5) return 'text-yellow-400';
  if (retention >= 0.3) return 'text-orange-400';
  if (retention > 0) return 'text-red-400';
  return 'text-slate-500';
}

/**
 * Get bg color class for strength bar.
 */
export function getStrengthBgColor(retention: number): string {
  if (retention >= 0.9) return 'bg-emerald-400';
  if (retention >= 0.7) return 'bg-green-400';
  if (retention >= 0.5) return 'bg-yellow-400';
  if (retention >= 0.3) return 'bg-orange-400';
  if (retention > 0) return 'bg-red-400';
  return 'bg-slate-600';
}

/**
 * Calculate the "maturity" of a card based on its review history.
 * Mature cards have long intervals and high ease.
 */
export function getMaturity(card: Card): number {
  if (card.status === 'new') return 0;
  // Maturity is a function of interval (how far apart reviews are)
  // A card with 365-day interval is very mature
  const intervalScore = Math.min(1, card.interval / 365);
  const easeScore = Math.min(1, (card.ease - 1.3) / (3.0 - 1.3));
  return (intervalScore * 0.7 + easeScore * 0.3);
}

/**
 * Predict when retention will drop below a threshold (in days from now).
 */
export function predictForgetting(card: Card, threshold: number = 0.5): number {
  if (card.status === 'new' || card.status === 'learning' || card.status === 'relearning') return 0;
  const stability = card.interval * (card.ease / 2.5);
  // Solve: threshold = e^(-t/S) → t = -S * ln(threshold)
  return Math.max(0, -stability * Math.log(threshold));
}
