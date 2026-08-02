/**
 * Typing Mode (Generation Effect)
 * Based on Slamecka & Graf (1978): actively generating an answer
 * produces ~40% better retention than passive recognition.
 *
 * The user types their answer, which is then compared to the correct
 * answer with visual diff highlighting.
 */

import { useState, useRef, useEffect } from 'react';
import { CheckCircle2, XCircle, Minus } from 'lucide-react';
import type { Rating } from '../types';

interface Props {
  correctAnswer: string;
  onResult: (accuracy: number, suggestedRating: Rating) => void;
  onSkip: () => void;
}

/**
 * Strip HTML/Markdown for comparison purposes.
 */
function stripForComparison(text: string): string {
  return text
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\*{1,3}([^*]+)\*{1,3}/g, '$1')
    .replace(/_{1,3}([^_]+)_{1,3}/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^>\s+/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Compute word-level similarity (0 to 1).
 * Uses normalized Levenshtein-like word matching.
 */
function computeAccuracy(input: string, correct: string): number {
  const inputWords = input.toLowerCase().split(/\s+/).filter(Boolean);
  const correctWords = correct.toLowerCase().split(/\s+/).filter(Boolean);

  if (correctWords.length === 0) return inputWords.length === 0 ? 1 : 0;
  if (inputWords.length === 0) return 0;

  let matched = 0;
  const used = new Set<number>();

  for (const iw of inputWords) {
    let bestScore = 0;
    let bestIdx = -1;

    for (let j = 0; j < correctWords.length; j++) {
      if (used.has(j)) continue;
      const cw = correctWords[j];
      // Exact match
      if (iw === cw) {
        if (1 > bestScore) { bestScore = 1; bestIdx = j; }
      }
      // Close match (edit distance)
      else if (Math.abs(iw.length - cw.length) <= 2) {
        const sim = wordSimilarity(iw, cw);
        if (sim > bestScore) { bestScore = sim; bestIdx = j; }
      }
    }

    if (bestScore >= 0.7 && bestIdx >= 0) {
      matched += bestScore;
      used.add(bestIdx);
    }
  }

  // Penalize missing words
  const coverage = matched / correctWords.length;
  // Penalize extra words
  const brevity = Math.min(1, correctWords.length / Math.max(inputWords.length, 1));

  return coverage * 0.8 + brevity * 0.2;
}

/**
 * Simple character-level similarity between two words.
 */
function wordSimilarity(a: string, b: string): number {
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;
  const dist = editDistance(a, b);
  return 1 - dist / maxLen;
}

function editDistance(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i-1] === b[j-1]
        ? dp[i-1][j-1]
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    }
  }
  return dp[m][n];
}

function suggestRating(accuracy: number): Rating {
  if (accuracy >= 0.95) return 'easy';
  if (accuracy >= 0.7) return 'good';
  if (accuracy >= 0.4) return 'hard';
  return 'again';
}

/**
 * Generate word-level diff for display.
 */
function getDiff(input: string, correct: string): { word: string; status: 'correct' | 'wrong' | 'missing' }[] {
  const inputWords = input.split(/\s+/).filter(Boolean);
  const correctWords = correct.split(/\s+/).filter(Boolean);
  const result: { word: string; status: 'correct' | 'wrong' | 'missing' }[] = [];

  const usedInput = new Set<number>();

  for (const cw of correctWords) {
    let found = false;
    for (let i = 0; i < inputWords.length; i++) {
      if (usedInput.has(i)) continue;
      if (inputWords[i].toLowerCase() === cw.toLowerCase() || wordSimilarity(inputWords[i].toLowerCase(), cw.toLowerCase()) >= 0.8) {
        result.push({ word: cw, status: 'correct' });
        usedInput.add(i);
        found = true;
        break;
      }
    }
    if (!found) {
      result.push({ word: cw, status: 'missing' });
    }
  }

  // Extra words the user typed
  for (let i = 0; i < inputWords.length; i++) {
    if (!usedInput.has(i)) {
      result.push({ word: inputWords[i], status: 'wrong' });
    }
  }

  return result;
}

export default function TypingMode({ correctAnswer, onResult, onSkip }: Props) {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [accuracy, setAccuracy] = useState(0);
  const [diff, setDiff] = useState<ReturnType<typeof getDiff>>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setInput('');
    setSubmitted(false);
    setAccuracy(0);
    setDiff([]);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [correctAnswer]);

  const handleSubmit = () => {
    if (!input.trim()) return;
    const cleanCorrect = stripForComparison(correctAnswer);
    const cleanInput = input.trim();
    const acc = computeAccuracy(cleanInput, cleanCorrect);
    const d = getDiff(cleanInput, cleanCorrect);
    setAccuracy(acc);
    setDiff(d);
    setSubmitted(true);
  };

  const handleConfirm = () => {
    const rating = suggestRating(accuracy);
    onResult(accuracy, rating);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (submitted) handleConfirm();
      else handleSubmit();
    }
  };

  if (!submitted) {
    return (
      <div className="space-y-3">
        <p className="text-xs text-slate-500 text-center">
          Type your answer below (Generation Effect — active recall)
        </p>
        <textarea
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type the answer..."
          rows={3}
          className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-white resize-none text-sm transition-colors"
          autoFocus
        />
        <div className="flex gap-2">
          <button
            onClick={onSkip}
            className="flex-1 py-2.5 rounded-xl bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 text-sm font-medium transition-colors"
          >
            Show Answer
          </button>
          <button
            onClick={handleSubmit}
            disabled={!input.trim()}
            className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 font-medium text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            Check Answer ↵
          </button>
        </div>
      </div>
    );
  }

  // Results view
  const pct = Math.round(accuracy * 100);
  const rating = suggestRating(accuracy);

  return (
    <div className="space-y-3">
      {/* Accuracy badge */}
      <div className="flex items-center justify-center gap-3">
        {accuracy >= 0.7 ? (
          <CheckCircle2 size={24} className="text-emerald-400" />
        ) : accuracy >= 0.4 ? (
          <Minus size={24} className="text-yellow-400" />
        ) : (
          <XCircle size={24} className="text-red-400" />
        )}
        <span className={`text-2xl font-bold ${
          accuracy >= 0.7 ? 'text-emerald-400' : accuracy >= 0.4 ? 'text-yellow-400' : 'text-red-400'
        }`}>
          {pct}%
        </span>
      </div>

      {/* Word diff */}
      <div className="p-3 rounded-xl bg-slate-800/40 text-sm leading-relaxed">
        <p className="text-[10px] text-slate-500 mb-1.5">Correct answer:</p>
        <div className="flex flex-wrap gap-1">
          {diff.map((d, i) => (
            <span
              key={i}
              className={`px-1.5 py-0.5 rounded text-sm ${
                d.status === 'correct' ? 'bg-emerald-500/20 text-emerald-300' :
                d.status === 'missing' ? 'bg-red-500/20 text-red-300 line-through' :
                'bg-yellow-500/20 text-yellow-300 line-through'
              }`}
            >
              {d.word}
            </span>
          ))}
        </div>
      </div>

      {/* Your answer */}
      <div className="p-3 rounded-xl bg-slate-800/30 text-sm">
        <p className="text-[10px] text-slate-500 mb-1">Your answer:</p>
        <p className="text-slate-300">{input}</p>
      </div>

      {/* Suggested rating */}
      <div className="text-center text-xs text-slate-500">
        Suggested: <span className={`font-medium ${
          rating === 'easy' ? 'text-blue-400' :
          rating === 'good' ? 'text-emerald-400' :
          rating === 'hard' ? 'text-orange-400' :
          'text-red-400'
        }`}>{rating.charAt(0).toUpperCase() + rating.slice(1)}</span>
      </div>

      <button
        onClick={handleConfirm}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 font-medium text-sm transition-all"
      >
        Continue with "{rating}" ↵
      </button>
    </div>
  );
}
