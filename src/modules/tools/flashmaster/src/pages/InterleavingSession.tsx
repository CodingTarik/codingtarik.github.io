/**
 * Interleaving Study Session
 * Based on Rohrer & Taylor (2007), Kornell & Bjork (2008):
 * Mixing topics during study (interleaving) improves discrimination
 * and long-term retention by 20-50% compared to blocking (studying
 * one topic at a time).
 *
 * This session mixes cards from multiple decks.
 */

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import {
  X,
  Zap,
  RotateCcw,
  Eye,
  ChevronLeft,
  ChevronRight,
  SkipForward,
  Shuffle,
  Volume2,
  VolumeX,
  Brain,
  Layers,
  Keyboard,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../lib/db';
import { reviewCard, getDueCards, previewIntervals, formatInterval } from '../lib/srs';
import { recordStudySession } from '../lib/gamification';
import type { Card, Deck, Rating, DeckSettings } from '../types';
import { DEFAULT_DECK_SETTINGS } from '../types';
import MarkdownRenderer from '../components/MarkdownRenderer';
import TTSButton from '../components/TTSButton';
import PomodoroTimer from '../components/PomodoroTimer';
import TypingMode from '../components/TypingMode';
import { v4 as uuidv4 } from 'uuid';
import {
  playFlip,
  playRatingSound,
  playSkip,
  playNav,
  playComplete,
  playAchievement,
  isSoundEnabled,
  setSoundEnabled,
} from '../lib/sounds';
import { isLeech, justBecameLeech } from '../lib/leech';
import { getRetention, getStrengthColor, getStrengthLabel } from '../lib/memoryStrength';
import toast from 'react-hot-toast';

interface Props {
  onRefresh: () => void;
}

export default function InterleavingSession({ onRefresh }: Props) {
  const navigate = useNavigate();
  const [selectedDeckIds, setSelectedDeckIds] = useState<string[]>([]);
  const [phase, setPhase] = useState<'select' | 'study' | 'done'>('select');
  const [isFlipped, setIsFlipped] = useState(false);
  const [queue, setQueue] = useState<(Card & { _deckName: string; _deckColor: string; _settings: DeckSettings })[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionCards, setSessionCards] = useState(0);
  const [sessionXp, setSessionXp] = useState(0);
  const [startTime] = useState(Date.now());
  const [cardStartTime, setCardStartTime] = useState(Date.now());
  const [history, setHistory] = useState<typeof queue>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [muted, setMuted] = useState(!isSoundEnabled());
  const [typingMode, setTypingMode] = useState(false);
  const [showAchievement, setShowAchievement] = useState<string | null>(null);

  const queueRef = useRef(queue);
  const currentIndexRef = useRef(currentIndex);
  queueRef.current = queue;
  currentIndexRef.current = currentIndex;

  const decks = useLiveQuery(() => db.decks.toArray());
  const allCards = useLiveQuery(() => db.cards.toArray());

  const deckDueCounts = useMemo(() => {
    if (!decks || !allCards) return {};
    const counts: Record<string, number> = {};
    decks.forEach(d => {
      const dc = allCards.filter(c => c.deckId === d.id);
      counts[d.id] = getDueCards(dc, d.settings).counts.total;
    });
    return counts;
  }, [decks, allCards]);

  const toggleDeck = (id: string) => {
    setSelectedDeckIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const startSession = () => {
    if (!decks || !allCards || selectedDeckIds.length === 0) return;

    const cards: typeof queue = [];
    for (const deckId of selectedDeckIds) {
      const deck = decks.find(d => d.id === deckId);
      if (!deck) continue;
      const deckCards = allCards.filter(c => c.deckId === deckId);
      const { allDue } = getDueCards(deckCards, deck.settings);
      for (const card of allDue) {
        cards.push({
          ...card,
          _deckName: deck.name,
          _deckColor: deck.color,
          _settings: deck.settings,
        });
      }
    }

    // Shuffle (interleave!) the cards
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    if (cards.length === 0) {
      toast('No due cards in selected decks!', { icon: '📚' });
      return;
    }

    setQueue(cards);
    setCurrentIndex(0);
    setPhase('study');
    setCardStartTime(Date.now());
  };

  const isViewingHistory = historyIndex >= 0;
  const currentCard = isViewingHistory ? history[historyIndex] : queue[currentIndex];

  const intervals = currentCard && !isViewingHistory
    ? previewIntervals(currentCard, currentCard._settings)
    : null;

  const toggleFlip = useCallback(() => {
    setIsFlipped(f => !f);
    playFlip();
  }, []);

  const goBack = useCallback(() => {
    if (isViewingHistory && historyIndex > 0) {
      setHistoryIndex(i => i - 1); setIsFlipped(false); playNav();
    } else if (!isViewingHistory && history.length > 0) {
      setHistoryIndex(history.length - 1); setIsFlipped(false); playNav();
    }
  }, [isViewingHistory, historyIndex, history.length]);

  const goForward = useCallback(() => {
    if (isViewingHistory) {
      if (historyIndex < history.length - 1) setHistoryIndex(i => i + 1);
      else setHistoryIndex(-1);
      setIsFlipped(false); playNav();
    }
  }, [isViewingHistory, historyIndex, history.length]);

  const handleSkip = useCallback(() => {
    if (isViewingHistory) return;
    const q = queueRef.current;
    const idx = currentIndexRef.current;
    if (q.length <= 1 || idx >= q.length) return;
    const newQueue = [...q];
    const [skipped] = newQueue.splice(idx, 1);
    newQueue.push(skipped);
    setQueue(newQueue);
    if (idx >= q.length - 1) setCurrentIndex(0);
    setIsFlipped(false);
    setCardStartTime(Date.now());
    playSkip();
  }, [isViewingHistory]);

  const handleRate = useCallback(async (rating: Rating) => {
    if (!currentCard || isViewingHistory) return;
    const timeTaken = Date.now() - cardStartTime;
    const prevLapses = currentCard.lapses;
    const { card: updatedCard, xpEarned } = reviewCard(currentCard, rating, currentCard._settings);

    // Leech check
    if (justBecameLeech(updatedCard, prevLapses, currentCard._settings)) {
      await db.cards.update(updatedCard.id, { isLeech: true });
      toast('⚠️ Leech detected! This card may need reformulation.', { duration: 4000 });
    }

    playRatingSound(rating);
    await db.cards.put(updatedCard);
    await db.reviewLogs.put({
      id: uuidv4(), cardId: currentCard.id, deckId: currentCard.deckId,
      rating, ease: updatedCard.ease, interval: updatedCard.interval,
      timeTaken, reviewedAt: Date.now(),
    });

    const { newAchievements } = await recordStudySession(rating, xpEarned, timeTaken);
    if (newAchievements.length > 0) {
      playAchievement();
      setShowAchievement(`${newAchievements[0].icon} ${newAchievements[0].name}`);
      setTimeout(() => setShowAchievement(null), 3000);
    }

    setHistory(prev => [...prev, currentCard]);
    setSessionCards(c => c + 1);
    setSessionXp(x => x + xpEarned);

    const q = queueRef.current;
    const idx = currentIndexRef.current;

    if (updatedCard.status === 'learning' || updatedCard.status === 'relearning') {
      const newQueue = [...q];
      newQueue[idx] = { ...updatedCard, _deckName: currentCard._deckName, _deckColor: currentCard._deckColor, _settings: currentCard._settings };
      const [card] = newQueue.splice(idx, 1);
      newQueue.push(card);
      setQueue(newQueue);
    } else {
      const newQueue = [...q];
      newQueue.splice(idx, 1);
      setQueue(newQueue);
    }

    setIsFlipped(false);
    setCardStartTime(Date.now());

    const remaining = (updatedCard.status === 'learning' || updatedCard.status === 'relearning') ? q.length : q.length - 1;
    if (remaining <= 0) {
      setPhase('done');
      playComplete();
      onRefresh();
    } else if (idx >= remaining) {
      setCurrentIndex(0);
    }
  }, [currentCard, cardStartTime, onRefresh, isViewingHistory]);

  const handleTypingResult = useCallback((accuracy: number, suggestedRating: Rating) => {
    handleRate(suggestedRating);
  }, [handleRate]);

  // Keyboard shortcuts
  useEffect(() => {
    if (phase !== 'study') return;
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      switch (e.key) {
        case 'ArrowLeft': case 'h': e.preventDefault(); goBack(); break;
        case 'ArrowRight': case 'l': e.preventDefault(); goForward(); break;
        case 's': handleSkip(); break;
        case 'f': toggleFlip(); break;
        case 'm': setMuted(prev => { const n = !prev; setSoundEnabled(!n); return n; }); break;
        case '1': if (isFlipped && !isViewingHistory && !typingMode) handleRate('again'); break;
        case '2': if (isFlipped && !isViewingHistory && !typingMode) handleRate('hard'); break;
        case '3': if (isFlipped && !isViewingHistory && !typingMode) handleRate('good'); break;
        case '4': if (isFlipped && !isViewingHistory && !typingMode) handleRate('easy'); break;
        case ' ': case 'Enter':
          e.preventDefault();
          if (!typingMode) {
            if (!isFlipped) toggleFlip();
            else if (!isViewingHistory) handleRate('good');
          }
          break;
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [phase, isFlipped, isViewingHistory, typingMode, goBack, goForward, handleSkip, toggleFlip, handleRate]);

  // ── Deck Selection Phase ──
  if (phase === 'select') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate('/')} className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50">
            <X size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Shuffle size={22} className="text-purple-400" />
              {t('interleave.title')}
            </h1>
            <p className="text-sm text-slate-400 mt-0.5">
              Mix cards from multiple decks — improves discrimination &amp; transfer
            </p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-4 mb-6">
          <div className="flex items-start gap-2 mb-3 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
            <Brain size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-purple-300">
              <strong>Science:</strong> Interleaving different topics during study forces your brain to discriminate between concepts,
              leading to 20-50% better long-term retention (Rohrer &amp; Taylor, 2007).
            </p>
          </div>

          <h3 className="text-sm font-medium text-slate-300 mb-3">Select decks to mix:</h3>
          <div className="space-y-2">
            {decks?.map(deck => {
              const due = deckDueCounts[deck.id] || 0;
              const selected = selectedDeckIds.includes(deck.id);
              return (
                <button
                  key={deck.id}
                  onClick={() => toggleDeck(deck.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                    selected
                      ? 'bg-primary-500/15 ring-1 ring-primary-500/40'
                      : 'bg-slate-800/40 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg" style={{ backgroundColor: `${deck.color}20` }}>
                    {deck.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{deck.name}</p>
                    <p className="text-xs text-slate-500">{due} due</p>
                  </div>
                  <div className={`w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center ${
                    selected ? 'bg-primary-500 border-primary-500' : 'border-slate-600'
                  }`}>
                    {selected && <span className="text-white text-xs">✓</span>}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={startSession}
          disabled={selectedDeckIds.length < 2}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-primary-600 hover:from-purple-500 hover:to-primary-500 font-bold text-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg"
        >
          <Shuffle size={20} className="inline mr-2" />
          Start {t('interleave.title')} ({selectedDeckIds.reduce((s, id) => s + (deckDueCounts[id] || 0), 0)} {t('common.cards')})
        </button>
      </div>
    );
  }

  // ── Done Phase ──
  if (phase === 'done') {
    const elapsed = Math.round((Date.now() - startTime) / 1000);
    return (
      <div className="flex items-center justify-center min-h-screen px-4">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-md">
          <div className="text-6xl mb-4">🧠</div>
          <h2 className="text-3xl font-bold mb-2">{t('interleave.complete')}</h2>
          <p className="text-slate-400 mb-6">Great cross-topic practice session</p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="glass-card rounded-xl p-3"><p className="text-2xl font-bold text-primary-400">{sessionCards}</p><p className="text-xs text-slate-500">{t('common.cards')}</p></div>
            <div className="glass-card rounded-xl p-3"><p className="text-2xl font-bold text-amber-400">{sessionXp}</p><p className="text-xs text-slate-500">{t('common.xp')}</p></div>
            <div className="glass-card rounded-xl p-3"><p className="text-2xl font-bold text-emerald-400">{Math.floor(elapsed / 60)}:{(elapsed % 60).toString().padStart(2, '0')}</p><p className="text-xs text-slate-500">{t('common.time')}</p></div>
          </div>
          <button onClick={() => navigate('/')} className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary-600 to-purple-600 font-bold text-lg">
            {t('interleave.backDashboard')}
          </button>
        </motion.div>
      </div>
    );
  }

  // ── Study Phase ──
  if (!currentCard) return null;

  const retention = getRetention(currentCard);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Achievement notification */}
      <AnimatePresence>
        {showAchievement && (
          <motion.div initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -60, opacity: 0 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-2xl bg-amber-500/20 border border-amber-500/30 backdrop-blur-xl text-amber-300 font-bold text-lg shadow-xl"
          >
            {showAchievement}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 glass">
        <button onClick={() => navigate('/')} className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50">
          <X size={20} />
        </button>

        <div className="flex-1 mx-4">
          <div className="flex items-center justify-center gap-2 text-sm">
            <Shuffle size={14} className="text-purple-400" />
            <span className="text-slate-400">{queue.length - currentIndex} remaining</span>
            <span className="text-slate-600">•</span>
            <span className="text-amber-400">{sessionXp} XP</span>
          </div>
          <div className="mt-1.5 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-purple-500 to-primary-500 rounded-full"
              animate={{ width: `${Math.round((sessionCards / (sessionCards + queue.length)) * 100)}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Typing mode toggle */}
          <button
            onClick={() => { setTypingMode(t => !t); setIsFlipped(false); }}
            className={`p-2 rounded-lg transition-colors ${typingMode ? 'bg-purple-500/20 text-purple-400' : 'bg-slate-800/50 text-slate-400 hover:text-white'}`}
            title="Typing mode (Generation Effect)"
          >
            <Keyboard size={16} />
          </button>
          <button onClick={() => setMuted(p => { const n = !p; setSoundEnabled(!n); return n; })}
            className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-white">
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
          <PomodoroTimer onPomodoroComplete={() => {
            db.userStats.get('main').then(s => {
              if (s) db.userStats.update('main', { pomodorosCompleted: (s.pomodorosCompleted || 0) + 1 });
            });
          }} />
        </div>
      </div>

      {/* Deck indicator */}
      <div className="px-4 py-1.5 flex items-center justify-center gap-2">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: currentCard._deckColor }} />
        <span className="text-xs text-slate-400">{currentCard._deckName}</span>
        {currentCard.isLeech && (
          <span className="text-xs text-amber-400 bg-amber-500/15 px-2 py-0.5 rounded-full">⚠️ Leech</span>
        )}
        {retention > 0 && (
          <span className={`text-xs ${getStrengthColor(retention)}`}>
            {getStrengthLabel(retention)} ({Math.round(retention * 100)}%)
          </span>
        )}
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center px-4 py-4">
        <div className="w-full max-w-2xl">
          <motion.div key={currentCard.id + currentIndex} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="w-full">
            {typingMode && !isFlipped && !isViewingHistory ? (
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="text-center mb-4">
                  <MarkdownRenderer content={currentCard.front} />
                  {currentCard.frontImageUrl && <img src={currentCard.frontImageUrl} alt="" className="max-h-48 mx-auto mt-4 rounded-lg" />}
                </div>
                <TypingMode
                  correctAnswer={currentCard.back}
                  onResult={handleTypingResult}
                  onSkip={() => { setIsFlipped(true); setTypingMode(false); }}
                />
              </div>
            ) : (
              <div className="flip-card" onClick={toggleFlip} style={{ minHeight: '300px' }}>
                <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                  <div className="flip-card-front">
                    <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[300px] flex flex-col items-center justify-center">
                      <div className="w-full text-center">
                        <MarkdownRenderer content={currentCard.front} />
                        {currentCard.frontImageUrl && <img src={currentCard.frontImageUrl} alt="" className="max-h-48 mx-auto mt-4 rounded-lg" />}
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <TTSButton text={currentCard.front} cardKey={currentCard.id + '-front-' + currentIndex} />
                        <p className="text-xs text-slate-500">{t('interleave.tapToFlip')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[300px] flex flex-col items-center justify-center">
                      <div className="w-full text-center">
                        <MarkdownRenderer content={currentCard.back} />
                        {currentCard.backImageUrl && <img src={currentCard.backImageUrl} alt="" className="max-h-48 mx-auto mt-4 rounded-lg" />}
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <TTSButton text={currentCard.back} cardKey={currentCard.id + '-back-' + currentIndex} />
                        <p className="text-xs text-slate-500">Tap to flip back</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Buttons */}
      <div className="px-4 pb-6 safe-bottom">
        <div className="max-w-2xl mx-auto flex items-center gap-2 mb-3">
          <button onClick={goBack} disabled={!isViewingHistory && history.length === 0}
            className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 disabled:opacity-30 transition-all">
            <ChevronLeft size={18} />
          </button>
          <div className="flex-1 flex items-center justify-center gap-2">
            {!isViewingHistory && queue.length > 1 && (
              <button onClick={handleSkip} className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-sm text-slate-400 hover:text-white transition-all">
                <SkipForward size={14} /><span className="hidden md:inline">{t('action.skip')}</span>
              </button>
            )}
            {!typingMode && (
              <button onClick={toggleFlip} className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-sm text-slate-400 hover:text-white transition-all">
                <RotateCcw size={14} /><span className="hidden md:inline">{isFlipped ? t('study.showFront') : t('study.showBack')}</span>
              </button>
            )}
          </div>
          <button onClick={goForward} disabled={!isViewingHistory}
            className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 disabled:opacity-30 transition-all">
            <ChevronRight size={18} />
          </button>
        </div>

        {!isViewingHistory && isFlipped && !typingMode ? (
          <div className="max-w-2xl mx-auto grid grid-cols-4 gap-2">
            {[
              { r: 'again' as Rating, label: t('rating.again'), color: 'from-red-600 to-red-700', tc: 'text-red-200' },
              { r: 'hard' as Rating, label: t('rating.hard'), color: 'from-orange-600 to-orange-700', tc: 'text-orange-200' },
              { r: 'good' as Rating, label: t('rating.good'), color: 'from-emerald-600 to-emerald-700', tc: 'text-emerald-200' },
              { r: 'easy' as Rating, label: t('rating.easy'), color: 'from-blue-600 to-blue-700', tc: 'text-blue-200' },
            ].map(b => (
              <motion.button key={b.r} whileTap={{ scale: 0.95 }} onClick={() => handleRate(b.r)}
                className={`py-3 rounded-xl bg-gradient-to-b ${b.color} font-medium shadow-lg flex flex-col items-center`}>
                <span className={`text-sm font-semibold ${b.tc}`}>{b.label}</span>
                {intervals && <span className="text-xs opacity-70 mt-0.5">{intervals[b.r]}</span>}
              </motion.button>
            ))}
          </div>
        ) : !isViewingHistory && !isFlipped && !typingMode ? (
          <button onClick={toggleFlip} className="w-full max-w-2xl mx-auto block py-4 rounded-2xl bg-gradient-to-r from-primary-600 to-purple-600 font-medium text-lg transition-all shadow-lg">
            <Eye size={20} className="inline mr-2" />{t('action.showAnswer')}
          </button>
        ) : null}
      </div>
    </div>
  );
}
