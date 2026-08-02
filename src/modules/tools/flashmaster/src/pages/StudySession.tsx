import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import {
  X,
  Clock,
  Zap,
  Eye,
  ChevronLeft,
  ChevronRight,
  SkipForward,
  RotateCcw,
  Hash,
  Volume2,
  VolumeX,
  Filter,
  Search,
  Tag,
  Star,
  XCircle,
  Keyboard,
  Brain,
  AlertTriangle,
  Undo2,
  Ban,
  EyeOff as EyeOffIcon,
  Flag,
  Edit3,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../lib/db';
import { reviewCard, getDueCards, previewIntervals } from '../lib/srs';
import { recordStudySession } from '../lib/gamification';
import type { Card, Rating, CardStatus, ReviewLog, CardFlag } from '../types';
import { CARD_FLAGS } from '../types';
import MarkdownRenderer from '../components/MarkdownRenderer';
import AttachmentViewer from '../components/AttachmentViewer';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { hasCloze, renderClozeFront, renderClozeBack, getClozeIndices } from '../lib/cloze';
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
import PlayPhrasePanel from '../components/PlayPhrasePanel';
import TTSButton from '../components/TTSButton';
import PomodoroTimer from '../components/PomodoroTimer';
import TypingMode from '../components/TypingMode';
import { MultipleChoiceRenderer, AIDynamicRenderer, TypeInRenderer, ImageOcclusionRenderer, OrderingRenderer } from '../components/CardTypeRenderers';
import StudyMascot from '../components/StudyMascot';
import LearningAids from '../components/LearningAids';
import { closePlayPhrase } from '../lib/playphrase';
import { stopTTS } from '../lib/tts';
import { isLeech, justBecameLeech } from '../lib/leech';
import { getRetention, getStrengthColor, getStrengthLabel } from '../lib/memoryStrength';
import toast from 'react-hot-toast';
import { useT } from '../lib/i18n';

interface Props {
  onRefresh: () => void;
}

// ── Filter Types ──

interface Filters {
  search: string;
  tags: string[];
  statuses: CardStatus[];
  minStars: number; // 0 = no filter
}

const EMPTY_FILTERS: Filters = { search: '', tags: [], statuses: [], minStars: 0 };

function isFiltersActive(f: Filters): boolean {
  return f.search !== '' || f.tags.length > 0 || f.statuses.length > 0 || f.minStars > 0;
}

function matchesFilters(card: Card, filters: Filters): boolean {
  if (filters.search) {
    const q = filters.search.toLowerCase();
    if (!card.front.toLowerCase().includes(q) && !card.back.toLowerCase().includes(q)) return false;
  }
  if (filters.tags.length > 0) {
    if (!filters.tags.some(t => card.tags.includes(t))) return false;
  }
  if (filters.statuses.length > 0) {
    if (!filters.statuses.includes(card.status)) return false;
  }
  if (filters.minStars > 0) {
    if ((card.starRating || 0) < filters.minStars) return false;
  }
  return true;
}

export default function StudySession({ onRefresh }: Props) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useT();
  const [isFlipped, setIsFlipped] = useState(false);
  const [queue, setQueue] = useState<Card[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState<Card[]>([]);
  const [sessionCards, setSessionCards] = useState(0);
  const [sessionXp, setSessionXp] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [cardStartTime, setCardStartTime] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showAchievement, setShowAchievement] = useState<string | null>(null);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [skippedCount, setSkippedCount] = useState(0);
  const [muted, setMuted] = useState(!isSoundEnabled());
  const [showFlagMenu, setShowFlagMenu] = useState(false);
  // Undo state
  const [lastAction, setLastAction] = useState<{
    card: Card;          // card state BEFORE the rating
    rating: Rating;
    reviewLogId: string;
    xpEarned: number;
  } | null>(null);

  const [typingMode, setTypingMode] = useState(false);
  // Mascot combo tracking
  const [mascotRating, setMascotRating] = useState<{ rating: Rating; cardId: string; timestamp: number } | null>(null);

  // Filter state
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
  const [showFilters, setShowFilters] = useState(false);

  // Refs for stable access in callbacks
  const queueRef = useRef<Card[]>([]);
  const currentIndexRef = useRef(0);
  queueRef.current = queue;
  currentIndexRef.current = currentIndex;

  const handleToggleMute = useCallback(() => {
    setMuted(prev => {
      const next = !prev;
      setSoundEnabled(!next);
      if (next) { closePlayPhrase(); stopTTS(); }
      return next;
    });
  }, []);

  const deck = useLiveQuery(() => db.decks.get(id!), [id]);
  const allCards = useLiveQuery(
    () => db.cards.where('deckId').equals(id!).toArray(),
    [id]
  );

  // Collect all unique tags from cards in this deck
  const allTags = useMemo(() => {
    if (!allCards) return [];
    const tagSet = new Set<string>();
    allCards.forEach(c => c.tags.forEach(t => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, [allCards]);

  // Build initial queue (considering filters)
  useEffect(() => {
    if (!deck || !allCards) return;

    // Get due cards from SRS
    const { allDue } = getDueCards(allCards, deck.settings);

    // Apply filters
    const filtered = isFiltersActive(filters)
      ? allDue.filter(c => matchesFilters(c, filters))
      : allDue;

    if (filtered.length === 0) {
      setIsFinished(true);
      playComplete();
    } else {
      setQueue(filtered);
      setCurrentIndex(0);
      setIsFlipped(false);
    }
    setStartTime(Date.now());
    setCardStartTime(Date.now());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deck?.id, allCards?.length, filters]);

  // Current card: either from history (browsing back) or from queue
  const isViewingHistory = historyIndex >= 0;
  const currentCard = isViewingHistory ? history[historyIndex] : queue[currentIndex];

  const intervals = currentCard && deck && !isViewingHistory
    ? previewIntervals(currentCard, deck.settings)
    : null;

  const toggleFlip = useCallback(() => {
    setIsFlipped(f => !f);
    playFlip();
  }, []);

  // Navigate backward through history
  const goBack = useCallback(() => {
    if (isViewingHistory) {
      if (historyIndex > 0) {
        setHistoryIndex(i => i - 1);
        setIsFlipped(false);
        playNav();
      }
    } else if (history.length > 0) {
      setHistoryIndex(history.length - 1);
      setIsFlipped(false);
      playNav();
    }
  }, [isViewingHistory, historyIndex, history.length]);

  // Navigate forward
  const goForward = useCallback(() => {
    if (isViewingHistory) {
      if (historyIndex < history.length - 1) {
        setHistoryIndex(i => i + 1);
        playNav();
      } else {
        setHistoryIndex(-1);
        playNav();
      }
      setIsFlipped(false);
    }
  }, [isViewingHistory, historyIndex, history.length]);

  // Skip current card -- uses refs for queue to avoid stale closures
  const handleSkip = useCallback(() => {
    if (isViewingHistory) return;

    const q = queueRef.current;
    const idx = currentIndexRef.current;
    if (q.length <= 1 || idx >= q.length) return; // Can't skip if only one card

    // Move current card to end of queue
    const newQueue = [...q];
    const [skipped] = newQueue.splice(idx, 1);
    newQueue.push(skipped);
    setQueue(newQueue);

    // If we were at the last card, wrap to 0
    if (idx >= q.length - 1) {
      setCurrentIndex(0);
    }
    // Otherwise currentIndex stays the same (points to next card after splice)

    setIsFlipped(false);
    setCardStartTime(Date.now());
    setSkippedCount(c => c + 1);
    playSkip();
  }, [isViewingHistory]);

  const handleTypingResult = useCallback((accuracy: number, suggestedRating: Rating) => {
    handleRate(suggestedRating);
  }, []);

  const handleRate = useCallback(async (rating: Rating) => {
    if (!currentCard || !deck || isViewingHistory) return;

    // Save card state for potential undo
    const cardBeforeRate = { ...currentCard };

    const timeTaken = Date.now() - cardStartTime;
    const prevLapses = currentCard.lapses;
    const { card: updatedCard, xpEarned } = reviewCard(currentCard, rating, deck.settings);

    // Leech detection
    if (justBecameLeech(updatedCard, prevLapses, deck.settings)) {
      await db.cards.update(updatedCard.id, { isLeech: true });
      toast(t('study.toast.leech'), { duration: 4000, icon: '🩸' });
    }

    playRatingSound(rating);

    // Feed mascot combo tracker
    setMascotRating({ rating, cardId: currentCard.id, timestamp: Date.now() });

    await db.cards.put(updatedCard);
    const reviewLogId = uuidv4();
    await db.reviewLogs.put({
      id: reviewLogId,
      cardId: currentCard.id,
      deckId: deck.id,
      rating,
      ease: updatedCard.ease,
      interval: updatedCard.interval,
      timeTaken,
      reviewedAt: Date.now(),
    });

    // Store undo info
    setLastAction({ card: cardBeforeRate, rating, reviewLogId, xpEarned });

    const { newAchievements } = await recordStudySession(rating, xpEarned, timeTaken);

    if (newAchievements.length > 0) {
      playAchievement();
      setShowAchievement(`${newAchievements[0].icon} ${newAchievements[0].name}`);
      setTimeout(() => setShowAchievement(null), 3000);
    }

    setHistory(prev => [...prev, currentCard]);
    setSessionCards(prev => prev + 1);
    setSessionXp(prev => prev + xpEarned);

    const q = queueRef.current;
    const idx = currentIndexRef.current;

    if (updatedCard.status === 'learning' || updatedCard.status === 'relearning') {
      // Card needs more learning -- move to end
      const newQueue = [...q];
      newQueue[idx] = updatedCard;
      const [card] = newQueue.splice(idx, 1);
      newQueue.push(card);
      setQueue(newQueue);
    } else {
      // Card graduated -- remove from queue
      const newQueue = [...q];
      newQueue.splice(idx, 1);
      setQueue(newQueue);
    }

    setIsFlipped(false);
    setCardStartTime(Date.now());

    // Check if done
    const remainingLength = (updatedCard.status === 'learning' || updatedCard.status === 'relearning')
      ? q.length
      : q.length - 1;

    if (remainingLength <= 0) {
      setIsFinished(true);
      playComplete();
      onRefresh();
    } else if (idx >= remainingLength) {
      setCurrentIndex(0);
    }
  }, [currentCard, deck, cardStartTime, onRefresh, isViewingHistory]);

  // Undo last rating
  const handleUndo = useCallback(async () => {
    if (!lastAction) return;
    try {
      // Restore card state
      await db.cards.put(lastAction.card);
      // Remove the review log
      await db.reviewLogs.delete(lastAction.reviewLogId);
      // Re-insert card into queue at current position
      const q = queueRef.current;
      const idx = currentIndexRef.current;
      const newQueue = [...q];
      newQueue.splice(idx, 0, lastAction.card);
      setQueue(newQueue);
      // Restore session counters
      setSessionCards(prev => Math.max(0, prev - 1));
      setSessionXp(prev => Math.max(0, prev - lastAction.xpEarned));
      setHistory(prev => prev.slice(0, -1));
      setIsFinished(false);
      setIsFlipped(false);
      setLastAction(null);
      toast.success(t('study.toast.undone'));
    } catch {
      toast.error('Undo failed');
    }
  }, [lastAction]);

  // Suspend current card
  const handleSuspend = useCallback(async () => {
    if (!currentCard || isViewingHistory) return;
    await db.cards.update(currentCard.id, { status: 'suspended' as const });
    const q = queueRef.current;
    const idx = currentIndexRef.current;
    const newQueue = [...q];
    newQueue.splice(idx, 1);
    setQueue(newQueue);
    if (newQueue.length === 0) { setIsFinished(true); playComplete(); onRefresh(); }
    else if (idx >= newQueue.length) setCurrentIndex(0);
    setIsFlipped(false);
    toast(t('study.toast.suspended'), { icon: '⏸️' });
  }, [currentCard, isViewingHistory, onRefresh]);

  // Bury current card (hidden until tomorrow)
  const handleBury = useCallback(async () => {
    if (!currentCard || isViewingHistory) return;
    await db.cards.update(currentCard.id, { status: 'buried' as const });
    const q = queueRef.current;
    const idx = currentIndexRef.current;
    const newQueue = [...q];
    newQueue.splice(idx, 1);
    setQueue(newQueue);
    if (newQueue.length === 0) { setIsFinished(true); playComplete(); onRefresh(); }
    else if (idx >= newQueue.length) setCurrentIndex(0);
    setIsFlipped(false);
    toast(t('study.toast.buried'), { icon: '🪦' });
  }, [currentCard, isViewingHistory, onRefresh]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.key) {
        case 'ArrowLeft':
        case 'h':
          e.preventDefault();
          goBack();
          return;
        case 'ArrowRight':
        case 'l':
          e.preventDefault();
          if (isViewingHistory) goForward();
          return;
        case 's':
          e.preventDefault();
          handleSkip();
          return;
        case 'f':
          e.preventDefault();
          toggleFlip();
          return;
        case 'm':
          e.preventDefault();
          handleToggleMute();
          return;
        case 'e': {
          e.preventDefault();
          const card = queueRef.current[currentIndexRef.current];
          if (card) navigate(`/deck/${id}/card/${card.id}`);
          return;
        }
        case 'z':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            handleUndo();
          }
          return;
      }

      // Ctrl/Cmd + 1-7 = set flag on current card, Ctrl/Cmd + 0 = remove flag
      if ((e.ctrlKey || e.metaKey) && /^[0-7]$/.test(e.key)) {
        e.preventDefault();
        const flagId = Number(e.key) as CardFlag;
        const q = queueRef.current;
        const card = q[currentIndexRef.current];
        if (card) {
          db.cards.update(card.id, { flag: flagId, updatedAt: Date.now() });
          const idx = q.findIndex(c => c.id === card.id);
          if (idx >= 0) q[idx] = { ...q[idx], flag: flagId };
        }
        return;
      }

      if (isViewingHistory) return;

      if (!isFlipped) {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          toggleFlip();
        }
      } else {
        switch (e.key) {
          case '1': handleRate('again'); break;
          case '2': handleRate('hard'); break;
          case '3': case ' ': case 'Enter': handleRate('good'); break;
          case '4': handleRate('easy'); break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFlipped, handleRate, goBack, goForward, handleSkip, toggleFlip, isViewingHistory, handleToggleMute, handleUndo]);

  // ── Filter helpers ──
  const filtersActive = isFiltersActive(filters);

  const toggleTag = (tag: string) => {
    setFilters(prev => ({
      ...prev,
      tags: prev.tags.includes(tag) ? prev.tags.filter(t => t !== tag) : [...prev.tags, tag],
    }));
  };

  const toggleStatus = (status: CardStatus) => {
    setFilters(prev => ({
      ...prev,
      statuses: prev.statuses.includes(status) ? prev.statuses.filter(s => s !== status) : [...prev.statuses, status],
    }));
  };

  // ── Finished screen ──
  if (isFinished) {
    const totalTime = Date.now() - startTime;
    const minutes = Math.floor(totalTime / 60000);
    const seconds = Math.floor((totalTime % 60000) / 1000);

    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="text-6xl mb-6"
          >
            🎉
          </motion.div>
          <h1 className="text-3xl font-bold mb-2">{t('study.sessionComplete')}</h1>
          <p className="text-slate-400 mb-8">{t('study.greatWork')}</p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="glass-card rounded-xl p-4">
              <p className="text-2xl font-bold text-primary-400">{sessionCards}</p>
              <p className="text-xs text-slate-400">{t('common.cards')}</p>
            </div>
            <div className="glass-card rounded-xl p-4">
              <p className="text-2xl font-bold text-amber-400">+{sessionXp}</p>
              <p className="text-xs text-slate-400">{t('common.xp')}</p>
            </div>
            <div className="glass-card rounded-xl p-4">
              <p className="text-2xl font-bold text-emerald-400">
                {minutes > 0 ? `${minutes}m` : ''}{seconds}s
              </p>
              <p className="text-xs text-slate-400">{t('common.time')}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate('/')}
              className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-medium transition-colors"
            >
              {t('study.home')}
            </button>
            <button
              onClick={() => navigate(`/deck/${id}`)}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 font-medium transition-all"
            >
              {t('study.viewDeck')}
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!currentCard || !deck) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const elapsed = Math.floor((Date.now() - cardStartTime) / 1000);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Achievement popup */}
      <AnimatePresence>
        {showAchievement && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass-card rounded-xl px-6 py-3 shadow-xl glow-md"
          >
            <p className="font-medium text-amber-400">{showAchievement} Unlocked!</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* History browsing banner */}
      <AnimatePresence>
        {isViewingHistory && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 text-center"
          >
            <p className="text-sm text-amber-400 flex items-center justify-center gap-2">
              <RotateCcw size={14} />
              Reviewing card {historyIndex + 1} of {history.length} (history)
              <button
                onClick={() => { setHistoryIndex(-1); setIsFlipped(false); }}
                className="ml-2 underline hover:text-amber-300"
              >
                Return to queue
              </button>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 glass">
        <button
          onClick={() => navigate(`/deck/${id}`)}
          className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Progress */}
        <div className="flex-1 mx-4">
          <div className="flex items-center justify-center gap-4 text-sm">
            <span className="text-blue-400 font-medium">
              {queue.filter(c => c.status === 'new').length}
            </span>
            <span className="text-orange-400 font-medium">
              {queue.filter(c => c.status === 'learning' || c.status === 'relearning').length}
            </span>
            <span className="text-green-400 font-medium">
              {queue.filter(c => c.status === 'review').length}
            </span>
          </div>
          <div className="h-1.5 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${(sessionCards / Math.max(1, sessionCards + queue.length)) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <div className="flex items-center gap-1">
          {deck.settings.showTimer && (
            <div className="flex items-center gap-1 text-sm text-slate-400">
              <Clock size={14} />
              <span>{elapsed}s</span>
            </div>
          )}
          <div className="flex items-center gap-1 text-sm text-amber-400">
            <Zap size={14} />
            <span>+{sessionXp}</span>
          </div>
          <button
            onClick={() => setShowFilters(f => !f)}
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors relative ${
              showFilters
                ? 'text-primary-400 bg-primary-500/15'
                : filtersActive
                  ? 'text-primary-400 bg-primary-500/10'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
            title={t('study.filters')}
          >
            <Filter size={15} />
            {filtersActive && (
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-primary-500" />
            )}
          </button>
          <button
            onClick={() => { setTypingMode(t => !t); setIsFlipped(false); }}
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
              typingMode ? 'text-purple-400 bg-purple-500/15' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
            title={t('study.typingMode')}
          >
            <Keyboard size={15} />
          </button>
          <button
            onClick={handleToggleMute}
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
              muted ? 'text-red-400 bg-red-500/10' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
            title={muted ? 'Unmute (M)' : 'Mute (M)'}
          >
            {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
          <PomodoroTimer onPomodoroComplete={() => {
            db.userStats.get('main').then(s => {
              if (s) db.userStats.update('main', { pomodorosCompleted: (s.pomodorosCompleted || 0) + 1 });
            });
          }} />
        </div>
      </div>

      {/* Filter Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-slate-700/30"
          >
            <div className="px-4 py-3 space-y-3 bg-slate-900/50 backdrop-blur-sm">
              {/* Search */}
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  value={filters.search}
                  onChange={e => setFilters(prev => ({ ...prev, search: e.target.value }))}
                  placeholder={t('study.searchCards')}
                  className="w-full pl-9 pr-8 py-2 rounded-lg bg-slate-800/60 border border-slate-700/40 text-sm focus:border-primary-500/50 focus:outline-none transition-colors placeholder:text-slate-600"
                />
                {filters.search && (
                  <button
                    onClick={() => setFilters(prev => ({ ...prev, search: '' }))}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                  >
                    <XCircle size={14} />
                  </button>
                )}
              </div>

              {/* Status chips */}
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1.5 font-medium">{t('common.status')}</p>
                <div className="flex flex-wrap gap-1.5">
                  <StatusChip label={t('status.new')} active={filters.statuses.includes('new')} onClick={() => toggleStatus('new')} activeClass="bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/40" />
                  <StatusChip label={t('status.learning')} active={filters.statuses.includes('learning')} onClick={() => toggleStatus('learning')} activeClass="bg-orange-500/20 text-orange-400 ring-1 ring-orange-500/40" />
                  <StatusChip label={t('status.review')} active={filters.statuses.includes('review')} onClick={() => toggleStatus('review')} activeClass="bg-green-500/20 text-green-400 ring-1 ring-green-500/40" />
                  <StatusChip label={t('status.relearning')} active={filters.statuses.includes('relearning')} onClick={() => toggleStatus('relearning')} activeClass="bg-rose-500/20 text-rose-400 ring-1 ring-rose-500/40" />
                </div>
              </div>

              {/* Tags */}
              {allTags.length > 0 && (
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1.5 font-medium flex items-center gap-1">
                    <Tag size={10} /> {t('common.tags')}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                          filters.tags.includes(tag)
                            ? 'bg-purple-500/20 text-purple-400 ring-1 ring-purple-500/40'
                            : 'bg-slate-800/50 text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Star rating */}
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1.5 font-medium flex items-center gap-1">
                  <Star size={10} /> Min. Rating
                </p>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setFilters(prev => ({ ...prev, minStars: 0 }))}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                      filters.minStars === 0
                        ? 'bg-slate-700/60 text-slate-300 ring-1 ring-slate-600/50'
                        : 'bg-slate-800/50 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    All
                  </button>
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      onClick={() => setFilters(prev => ({ ...prev, minStars: prev.minStars === star ? 0 : star }))}
                      className={`px-2 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-0.5 ${
                        filters.minStars === star
                          ? 'bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/40'
                          : 'bg-slate-800/50 text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {star}<Star size={10} className={filters.minStars === star ? 'fill-amber-400' : ''} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear / Close */}
              <div className="flex items-center justify-between pt-1">
                {filtersActive ? (
                  <button
                    onClick={() => setFilters(EMPTY_FILTERS)}
                    className="text-xs text-red-400 hover:text-red-300 transition-colors flex items-center gap-1"
                  >
                    <XCircle size={12} /> Clear all filters
                  </button>
                ) : (
                  <span className="text-xs text-slate-600">No filters active</span>
                )}
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Leech & Memory Strength indicators */}
      {currentCard && (
        <div className="px-4 flex items-center justify-center gap-3">
          {currentCard.isLeech && (
            <span className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full flex items-center gap-1">
              <AlertTriangle size={12} /> Leech — consider reformulating
            </span>
          )}
          {(() => {
            const r = getRetention(currentCard);
            return r > 0 ? (
              <span className={`text-xs flex items-center gap-1 ${getStrengthColor(r)}`}>
                <Brain size={12} />
                {getStrengthLabel(r)} ({Math.round(r * 100)}%)
              </span>
            ) : null;
          })()}
          {/* Flag indicator */}
          {currentCard.flag && currentCard.flag > 0 && (() => {
            const f = CARD_FLAGS.find(fl => fl.id === currentCard.flag);
            return f ? (
              <span className={`text-xs flex items-center gap-1 ${f.color} ${f.bg} px-2 py-0.5 rounded-full`}>
                <Flag size={12} fill="currentColor" />
                {f.label}
              </span>
            ) : null;
          })()}
        </div>
      )}

      {/* Mascot */}
      <div className="max-w-2xl mx-auto px-4 mt-1">
        <StudyMascot lastRating={mascotRating} />
      </div>

      {/* Learning Aids (Science-Based) */}
      {currentCard && (
        <div className="px-4">
          <LearningAids card={currentCard} isFlipped={isFlipped} />
        </div>
      )}

      {/* Card Area */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {/* ═══ Multiple Choice ═══ */}
          {currentCard.noteType === 'multipleChoice' ? (
            <motion.div key={currentCard.id + '-mc'} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[300px]">
                <MultipleChoiceRenderer
                  card={currentCard}
                  isFlipped={isFlipped}
                  onAnswer={(correct, rating) => {
                    setIsFlipped(true);
                    setTimeout(() => handleRate(rating), 200);
                  }}
                />
              </div>
            </motion.div>
          ) : currentCard.noteType === 'aiDynamic' ? (
            /* ═══ AI Dynamic ═══ */
            <div className="flip-card" onClick={toggleFlip} style={{ cursor: 'pointer' }}>
              <motion.div key={currentCard.id + '-ai'} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
                <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                  <div className="flip-card-front">
                    <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[300px] flex flex-col items-center justify-center">
                      <AIDynamicRenderer card={currentCard} isFlipped={false} onFlip={toggleFlip} />
                      <p className="text-xs text-slate-500 mt-4">{t('study.tapToFlip')} &middot; F</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[300px] flex flex-col items-center justify-center">
                      <AIDynamicRenderer card={currentCard} isFlipped={true} onFlip={toggleFlip} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : currentCard.noteType === 'typeIn' ? (
            /* ═══ Type-In ═══ */
            <motion.div key={currentCard.id + '-typein'} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[300px]">
                <TypeInRenderer
                  card={currentCard}
                  onResult={(correct, rating) => {
                    setIsFlipped(true);
                    setTimeout(() => handleRate(rating), 400);
                  }}
                />
              </div>
            </motion.div>
          ) : currentCard.noteType === 'imageOcclusion' ? (
            /* ═══ Image Occlusion ═══ */
            <div className="flip-card" onClick={toggleFlip} style={{ cursor: 'pointer' }}>
              <motion.div key={currentCard.id + '-io'} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
                <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                  <div className="flip-card-front">
                    <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[300px] flex flex-col items-center justify-center">
                      <ImageOcclusionRenderer card={currentCard} isFlipped={false} />
                      <p className="text-xs text-slate-500 mt-4">{t('study.tapToFlip')} &middot; F</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[300px] flex flex-col items-center justify-center">
                      <ImageOcclusionRenderer card={currentCard} isFlipped={true} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : currentCard.noteType === 'ordering' ? (
            /* ═══ Ordering ═══ */
            <motion.div key={currentCard.id + '-order'} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[300px]">
                <OrderingRenderer
                  card={currentCard}
                  onAnswer={(correct, rating) => {
                    setIsFlipped(true);
                    setTimeout(() => handleRate(rating), 400);
                  }}
                />
              </div>
            </motion.div>
          ) : typingMode && !isFlipped && !isViewingHistory ? (
          /* ═══ Typing Mode (basic/reversed/cloze) ═══ */
            <motion.div
              key={currentCard.id + '-typing'}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="text-center mb-4">
                  <MarkdownRenderer content={currentCard.front} />
                  {currentCard.frontImageUrl && <img src={currentCard.frontImageUrl} alt="" className="max-h-48 mx-auto mt-4 rounded-lg" />}
                </div>
                <TypingMode
                  correctAnswer={currentCard.back}
                  onResult={(accuracy, suggestedRating) => handleRate(suggestedRating)}
                  onSkip={() => { setIsFlipped(true); }}
                />
              </div>
            </motion.div>
          ) : (
          /* ═══ Standard Flip Card (basic/reversed/cloze) ═══ */
          <div className="flip-card" onClick={toggleFlip} style={{ cursor: 'pointer' }}>
            <motion.div
              key={currentCard.id + (isViewingHistory ? '-hist' : '')}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                {/* Front */}
                <div className="flip-card-front">
                  <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[300px] flex flex-col items-center justify-center">
                    <div className="w-full text-center">
                      {hasCloze(currentCard.front) ? (
                        <MarkdownRenderer content={renderClozeFront(currentCard.front, 1)} />
                      ) : (
                        <MarkdownRenderer content={currentCard.front} />
                      )}
                      {currentCard.frontImageUrl && (
                        <img src={currentCard.frontImageUrl} alt="Card front" className="max-h-48 mx-auto mt-4 rounded-lg" />
                      )}
                      {currentCard.frontYoutubeUrl && (
                        <YouTubeEmbed url={currentCard.frontYoutubeUrl} />
                      )}
                      {currentCard.attachments && currentCard.attachments.length > 0 && (
                        <AttachmentViewer attachments={currentCard.attachments} compact />
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <TTSButton text={currentCard.front} cardKey={currentCard.id + '-front-' + currentIndex} />
                      <PlayPhrasePanel card={currentCard} currentSide="front" cardKey={currentCard.id + '-' + currentIndex} />
                      <p className="text-xs text-slate-500">{t('study.tapToFlip')} &middot; F</p>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back">
                  <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[300px] flex flex-col items-center justify-center">
                    <div className="w-full text-center">
                      {hasCloze(currentCard.front) ? (
                        <MarkdownRenderer content={renderClozeBack(currentCard.front, 1)} />
                      ) : (
                        <MarkdownRenderer content={currentCard.back} />
                      )}
                      {currentCard.backImageUrl && (
                        <img src={currentCard.backImageUrl} alt="Card back" className="max-h-48 mx-auto mt-4 rounded-lg" />
                      )}
                      {currentCard.backYoutubeUrl && (
                        <YouTubeEmbed url={currentCard.backYoutubeUrl} />
                      )}
                      {currentCard.attachments && currentCard.attachments.length > 0 && (
                        <AttachmentViewer attachments={currentCard.attachments} compact />
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <TTSButton text={currentCard.back} cardKey={currentCard.id + '-back-' + currentIndex} />
                      <PlayPhrasePanel card={currentCard} currentSide="back" cardKey={currentCard.id + '-' + currentIndex} />
                      <p className="text-xs text-slate-500">{t('study.tapToFlipBack')} &middot; F</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="px-4 pb-6 safe-bottom">
        {/* Navigation row */}
        <div className="max-w-2xl mx-auto flex items-center gap-2 mb-3">
          <button
            onClick={goBack}
            disabled={!isViewingHistory && history.length === 0}
            className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            title="Previous card (←)"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex-1 flex items-center justify-center gap-1 mobile-scroll-x">
            {lastAction && (
              <button
                onClick={handleUndo}
                className="flex items-center gap-1 px-2.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-sm text-amber-400 hover:text-amber-300 transition-all"
                title="Undo last rating (Ctrl+Z)"
              >
                <Undo2 size={14} />
                <span className="hidden md:inline">{t('study.undo')}</span>
              </button>
            )}
            {!isViewingHistory && queue.length > 1 && (
              <button
                onClick={handleSkip}
                className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-sm text-slate-400 hover:text-white transition-all"
                title="Skip (S)"
              >
                <SkipForward size={14} />
                <span className="hidden md:inline">{t('action.skip')}</span>
              </button>
            )}
            <button
              onClick={toggleFlip}
              className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-sm text-slate-400 hover:text-white transition-all"
              title="Flip card (F)"
            >
              <RotateCcw size={14} />
              <span className="hidden md:inline">{isFlipped ? 'Show Front' : 'Show Back'}</span>
            </button>
            {!isViewingHistory && (
              <>
                <button
                  onClick={() => { if (currentCard) navigate(`/deck/${id}/card/${currentCard.id}`); }}
                  className="flex items-center gap-1 px-2.5 py-2 rounded-xl bg-slate-800/50 hover:bg-primary-500/10 text-sm text-slate-500 hover:text-primary-400 transition-all"
                  title="Edit card (E)"
                >
                  <Edit3 size={14} />
                  <span className="hidden lg:inline">{t('action.edit')}</span>
                </button>
                <button
                  onClick={handleSuspend}
                  className="flex items-center gap-1 px-2.5 py-2 rounded-xl bg-slate-800/50 hover:bg-red-500/10 text-sm text-slate-500 hover:text-red-400 transition-all"
                  title="Suspend card"
                >
                  <Ban size={14} />
                  <span className="hidden lg:inline">{t('study.suspend')}</span>
                </button>
                <button
                  onClick={handleBury}
                  className="flex items-center gap-1 px-2.5 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-sm text-slate-500 hover:text-slate-300 transition-all"
                  title="Bury until tomorrow"
                >
                  <EyeOffIcon size={14} />
                  <span className="hidden lg:inline">{t('study.bury')}</span>
                </button>
                {/* Flag dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowFlagMenu(v => !v)}
                    className={`flex items-center gap-1 px-2.5 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-sm transition-all ${
                      currentCard?.flag && currentCard.flag > 0
                        ? CARD_FLAGS.find(f => f.id === currentCard.flag)!.color
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                    title="Set flag (Ctrl+1-7)"
                  >
                    <Flag size={14} fill={currentCard?.flag && currentCard.flag > 0 ? 'currentColor' : 'none'} />
                    <span className="hidden lg:inline">Flag</span>
                  </button>
                  {showFlagMenu && (
                    <div className="absolute left-0 bottom-full mb-1 w-36 glass rounded-xl py-1 z-50 shadow-xl">
                      {CARD_FLAGS.map(f => (
                        <button
                          key={f.id}
                          onClick={() => {
                            if (!currentCard) return;
                            db.cards.update(currentCard.id, { flag: f.id as CardFlag, updatedAt: Date.now() });
                            const q = queueRef.current;
                            const idx = q.findIndex(c => c.id === currentCard.id);
                            if (idx >= 0) q[idx] = { ...q[idx], flag: f.id };
                            setShowFlagMenu(false);
                          }}
                          className={`w-full flex items-center gap-2 px-3 py-1.5 text-xs hover:bg-slate-700/50 transition-colors ${currentCard?.flag === f.id ? 'bg-slate-700/30 font-medium' : ''}`}
                        >
                          <Flag size={10} className={f.color} fill={f.id > 0 ? 'currentColor' : 'none'} />
                          <span className={f.color}>{f.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          <button
            onClick={goForward}
            disabled={!isViewingHistory}
            className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            title="Next in history (→)"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Rating buttons - only if viewing back and NOT in history */}
        {!isViewingHistory && isFlipped ? (
          <div className="max-w-2xl mx-auto grid grid-cols-4 gap-2 md:gap-3">
            <RatingButton
              label={t('rating.again')}
              sublabel={intervals?.again}
              color="from-red-600 to-red-700"
              textColor="text-red-200"
              onClick={() => handleRate('again')}
              shortcut="1"
            />
            <RatingButton
              label={t('rating.hard')}
              sublabel={intervals?.hard}
              color="from-orange-600 to-orange-700"
              textColor="text-orange-200"
              onClick={() => handleRate('hard')}
              shortcut="2"
            />
            <RatingButton
              label={t('rating.good')}
              sublabel={intervals?.good}
              color="from-emerald-600 to-emerald-700"
              textColor="text-emerald-200"
              onClick={() => handleRate('good')}
              shortcut="3"
            />
            <RatingButton
              label={t('rating.easy')}
              sublabel={intervals?.easy}
              color="from-blue-600 to-blue-700"
              textColor="text-blue-200"
              onClick={() => handleRate('easy')}
              shortcut="4"
            />
          </div>
        ) : !isViewingHistory && !isFlipped && !typingMode ? (
          <button
            onClick={toggleFlip}
            className="w-full max-w-2xl mx-auto block py-4 rounded-2xl bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 font-medium text-lg transition-all shadow-lg glow-sm"
          >
            <Eye size={20} className="inline mr-2" />
            {t('action.showAnswer')}
          </button>
        ) : null}

        {/* Keyboard hints */}
        <div className="max-w-2xl mx-auto mt-2 hidden md:flex items-center justify-center gap-4 text-[10px] text-slate-500">
          <span>← → Navigate</span>
          <span>F Flip</span>
          <span>S Skip</span>
          <span>E Edit</span>
          <span>⌘Z Undo</span>
          <span>M Mute</span>
          <span>1-4 Rate</span>
          <span>Space Show/Good</span>
        </div>
      </div>
    </div>
  );
}

function StatusChip({ label, active, onClick, activeClass }: {
  label: string;
  active: boolean;
  onClick: () => void;
  activeClass: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
        active ? activeClass : 'bg-slate-800/50 text-slate-500 hover:text-slate-300'
      }`}
    >
      {label}
    </button>
  );
}

function RatingButton({ label, sublabel, color, textColor, onClick, shortcut }: {
  label: string;
  sublabel?: string;
  color: string;
  textColor: string;
  onClick: () => void;
  shortcut: string;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      className={`py-3 md:py-4 rounded-xl bg-gradient-to-b ${color} font-medium transition-all shadow-lg flex flex-col items-center`}
    >
      <span className={`text-sm md:text-base font-semibold ${textColor}`}>{label}</span>
      {sublabel && (
        <span className="text-xs opacity-70 mt-0.5">{sublabel}</span>
      )}
      <span className="text-[10px] opacity-40 mt-0.5 hidden md:block">{shortcut}</span>
    </motion.button>
  );
}
