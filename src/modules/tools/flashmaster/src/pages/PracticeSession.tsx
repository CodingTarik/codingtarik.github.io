import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import {
  X,
  ChevronLeft,
  ChevronRight,
  SkipForward,
  RotateCcw,
  Star,
  Clock,
  Hash,
  Volume2,
  VolumeX,
  Filter,
  Search,
  Tag,
  XCircle,
  Eye,
  EyeOff,
  Flag,
  ArrowUpDown,
  Edit3,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../lib/db';
import type { Card, CardStatus, CardFlag } from '../types';
import { CARD_FLAGS } from '../types';
import MarkdownRenderer from '../components/MarkdownRenderer';
import AttachmentViewer from '../components/AttachmentViewer';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { hasCloze, renderClozeFront, renderClozeBack } from '../lib/cloze';
import { playFlip, playNav, playSkip, playStar, playComplete, isSoundEnabled, setSoundEnabled } from '../lib/sounds';
import PlayPhrasePanel from '../components/PlayPhrasePanel';
import TTSButton from '../components/TTSButton';
import { MultipleChoiceRenderer, AIDynamicRenderer, TypeInRenderer, ImageOcclusionRenderer, OrderingRenderer } from '../components/CardTypeRenderers';
import StudyMascot from '../components/StudyMascot';
import LearningAids from '../components/LearningAids';
import { closePlayPhrase } from '../lib/playphrase';
import { stopTTS } from '../lib/tts';
import { useT } from '../lib/i18n';

// ── Filter Types ──

interface Filters {
  search: string;
  tags: string[];
  statuses: CardStatus[];
  minStars: number;
  maxStars: number; // -1 = no max filter
  unratedOnly: boolean;
}

const EMPTY_FILTERS: Filters = { search: '', tags: [], statuses: [], minStars: 0, maxStars: -1, unratedOnly: false };

function isFiltersActive(f: Filters): boolean {
  return f.search !== '' || f.tags.length > 0 || f.statuses.length > 0 || f.minStars > 0 || f.maxStars >= 0 || f.unratedOnly;
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
  if (filters.unratedOnly) {
    if (card.starRating && card.starRating > 0) return false;
  }
  if (filters.minStars > 0) {
    if ((card.starRating || 0) < filters.minStars) return false;
  }
  if (filters.maxStars >= 0) {
    if ((card.starRating || 0) > filters.maxStars) return false;
  }
  return true;
}

export default function PracticeSession() {
  const { t } = useT();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const startCardId = searchParams.get('startCard');
  const customMode = searchParams.get('mode') as 'ahead' | 'forgot' | 'tag' | 'all' | 'new' | null;
  const customLimit = parseInt(searchParams.get('limit') || '0') || 50;
  const customTag = searchParams.get('tag') || '';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startCardApplied, setStartCardApplied] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [startTime] = useState(Date.now());
  const [skippedIds, setSkippedIds] = useState<Set<string>>(new Set());
  const [ratedCount, setRatedCount] = useState(0);
  const [muted, setMuted] = useState(!isSoundEnabled());
  // Mascot combo tracking
  const [mascotRating, setMascotRating] = useState<{ rating: 'again' | 'hard' | 'good' | 'easy'; cardId: string; timestamp: number } | null>(null);

  // Filter state
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<string>('custom');

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

  // Collect all unique tags
  const allTags = useMemo(() => {
    if (!allCards) return [];
    const tagSet = new Set<string>();
    allCards.forEach(c => c.tags.forEach(t => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, [allCards]);

  // Apply custom study mode pre-filter, then user filters & sorting
  const cards = useMemo(() => {
    if (!allCards) return [];
    const now = Date.now();
    let base = [...allCards];

    // Custom study mode pre-filtering
    if (customMode) {
      switch (customMode) {
        case 'ahead':
          // Cards not yet due (review cards with dueDate in the future)
          base = base.filter(c => c.status === 'review' && c.dueDate > now);
          base.sort((a, b) => a.dueDate - b.dueDate);
          break;
        case 'forgot':
          // Cards with lapses > 0 — recently forgotten
          base = base.filter(c => c.lapses > 0);
          base.sort((a, b) => b.lapses - a.lapses);
          break;
        case 'new':
          // Only new cards
          base = base.filter(c => c.status === 'new');
          break;
        case 'tag':
          // Cards matching a specific tag
          if (customTag) base = base.filter(c => c.tags.includes(customTag));
          break;
        case 'all':
          // Cram: all cards, shuffle
          for (let i = base.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [base[i], base[j]] = [base[j], base[i]];
          }
          break;
      }
      base = base.slice(0, customLimit);
    }

    let result = isFiltersActive(filters) ? base.filter(c => matchesFilters(c, filters)) : base;

    switch (sortBy) {
      case 'custom':
        result.sort((a, b) => (a.sortOrder ?? a.createdAt) - (b.sortOrder ?? b.createdAt));
        break;
      case 'created-asc':
        result.sort((a, b) => a.createdAt - b.createdAt);
        break;
      case 'created-desc':
        result.sort((a, b) => b.createdAt - a.createdAt);
        break;
      case 'alpha-asc':
        result.sort((a, b) => a.front.localeCompare(b.front));
        break;
      case 'alpha-desc':
        result.sort((a, b) => b.front.localeCompare(a.front));
        break;
      case 'rating-desc':
        result.sort((a, b) => (b.starRating || 0) - (a.starRating || 0));
        break;
      case 'rating-asc':
        result.sort((a, b) => (a.starRating || 0) - (b.starRating || 0));
        break;
      case 'due-asc':
        result.sort((a, b) => a.dueDate - b.dueDate);
        break;
      case 'interval-desc':
        result.sort((a, b) => b.interval - a.interval);
        break;
      case 'interval-asc':
        result.sort((a, b) => a.interval - b.interval);
        break;
      case 'random':
        for (let i = result.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [result[i], result[j]] = [result[j], result[i]];
        }
        break;
    }
    return result;
  }, [allCards, filters, sortBy]);

  // Jump to startCard once cards are loaded
  useEffect(() => {
    if (startCardId && cards.length > 0 && !startCardApplied) {
      const idx = cards.findIndex(c => c.id === startCardId);
      if (idx >= 0) {
        setCurrentIndex(idx);
      }
      setStartCardApplied(true);
    }
  }, [startCardId, cards, startCardApplied]);

  const currentCard = cards[currentIndex];
  const isFinished = cards.length > 0 && currentIndex >= cards.length;

  // Reset index when filters or sort change
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [filters, sortBy]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.key) {
        case ' ':
        case 'Enter':
          e.preventDefault();
          toggleFlip();
          break;
        case 'ArrowRight':
        case 'l':
          e.preventDefault();
          goNext();
          break;
        case 'ArrowLeft':
        case 'h':
          e.preventDefault();
          goPrev();
          break;
        case 's':
          e.preventDefault();
          handleSkip();
          break;
        case '1': case '2': case '3': case '4': case '5':
          e.preventDefault();
          handleStarRate(parseInt(e.key));
          break;
        case 'm':
          e.preventDefault();
          handleToggleMute();
          break;
        case 'e':
          e.preventDefault();
          if (filteredCards[currentIndex]) navigate(`/deck/${id}/card/${filteredCards[currentIndex].id}`);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isFlipped, cards.length]);

  const toggleFlip = useCallback(() => {
    setIsFlipped(f => !f);
    playFlip();
  }, []);

  const goNext = useCallback(() => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(i => i + 1);
      setIsFlipped(false);
      playNav();
    } else if (currentIndex === cards.length - 1) {
      setCurrentIndex(cards.length);
      playComplete();
    }
  }, [currentIndex, cards.length]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
      setIsFlipped(false);
      playNav();
    }
  }, [currentIndex]);

  const handleSkip = useCallback(() => {
    if (!currentCard) return;
    setSkippedIds(prev => new Set(prev).add(currentCard.id));
    goNext();
    playSkip();
  }, [currentCard, goNext]);

  const handleStarRate = useCallback(async (stars: number) => {
    if (!currentCard) return;
    await db.cards.update(currentCard.id, { starRating: stars, updatedAt: Date.now() });
    playStar(stars);
    setRatedCount(c => c + 1);
    // Feed mascot: 4-5 stars = good/easy, 3 = hard, 1-2 = again
    const mascotR = stars >= 4 ? 'good' as const : stars === 3 ? 'hard' as const : 'again' as const;
    setMascotRating({ rating: mascotR, cardId: currentCard.id, timestamp: Date.now() });
    setTimeout(() => goNext(), 300);
  }, [currentCard, goNext]);

  // ── Filter helpers ──
  const filtersActive = isFiltersActive(filters) || sortBy !== 'custom';

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
            📖
          </motion.div>
          <h1 className="text-3xl font-bold mb-2">{t('practice.complete')}</h1>
          <p className="text-slate-400 mb-8">
            {filtersActive
              ? `You've gone through all ${cards.length} filtered cards.`
              : "You've gone through all cards."
            }
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="glass-card rounded-xl p-4">
              <p className="text-2xl font-bold text-primary-400">{cards.length}</p>
              <p className="text-xs text-slate-400">{t('common.cards')}</p>
            </div>
            <div className="glass-card rounded-xl p-4">
              <p className="text-2xl font-bold text-amber-400">{ratedCount}</p>
              <p className="text-xs text-slate-400">{t('practice.rated')}</p>
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
              {t('practice.home')}
            </button>
            <button
              onClick={() => { setCurrentIndex(0); setIsFlipped(false); setSkippedIds(new Set()); setRatedCount(0); }}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 font-medium transition-all"
            >
              {t('practice.restart')}
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!currentCard || !deck) {
    // If filters are active and no cards match, show a message
    if (filtersActive && cards.length === 0 && allCards && allCards.length > 0) {
      return (
        <div className="min-h-screen flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 glass">
            <button
              onClick={() => navigate(`/deck/${id}`)}
              className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors"
            >
              <X size={20} />
            </button>
            <span className="text-sm text-slate-400">{t('practice.noCardsMatch')}</span>
            <button
              onClick={() => setFilters(EMPTY_FILTERS)}
              className="px-3 py-2 rounded-lg text-xs text-red-400 bg-red-500/10 hover:bg-red-500/20 transition-colors"
            >
              {t('practice.clearFilters')}
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 glass">
        <button
          onClick={() => navigate(`/deck/${id}`)}
          className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex-1 mx-4">
          <div className="flex items-center justify-center gap-3 text-sm">
            <span className="text-slate-400 flex items-center gap-1">
              <Hash size={14} />
              {currentIndex + 1} / {cards.length}
              {filtersActive && allCards && cards.length !== allCards.length && (
                <span className="text-primary-400/60 text-xs">({allCards.length} total)</span>
              )}
            </span>
            <span className="text-teal-400 font-medium">
              {customMode
                ? customMode === 'ahead' ? 'Study Ahead'
                : customMode === 'forgot' ? 'Review Forgotten'
                : customMode === 'new' ? 'Extra New Cards'
                : customMode === 'tag' ? `Tag: ${customTag}`
                : 'Cram Mode'
                : t('practice.title')}
            </span>
          </div>
          <div className="h-1.5 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
              animate={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1 text-sm text-slate-400">
            <Clock size={14} />
            <span>{Math.floor((Date.now() - startTime) / 1000)}s</span>
          </div>
          <button
            onClick={() => setShowFilters(f => !f)}
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors relative ${
              showFilters
                ? 'text-teal-400 bg-teal-500/15'
                : filtersActive
                  ? 'text-teal-400 bg-teal-500/10'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
            title={t('study.filters')}
          >
            <Filter size={15} />
            {filtersActive && (
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-teal-500" />
            )}
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
                  placeholder={t('practice.searchCards')}
                  className="w-full pl-9 pr-8 py-2 rounded-lg bg-slate-800/60 border border-slate-700/40 text-sm focus:border-teal-500/50 focus:outline-none transition-colors placeholder:text-slate-600"
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
                  <StatusChip label={t('status.suspended')} active={filters.statuses.includes('suspended')} onClick={() => toggleStatus('suspended')} activeClass="bg-slate-500/20 text-slate-400 ring-1 ring-slate-500/40" />
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

              {/* Star rating filter */}
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1.5 font-medium flex items-center gap-1">
                  <Star size={10} /> {t('practice.ratingFilter')}
                </p>
                <div className="flex flex-wrap items-center gap-1.5">
                  <button
                    onClick={() => setFilters(prev => ({ ...prev, minStars: 0, maxStars: -1, unratedOnly: false }))}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                      !filters.unratedOnly && filters.minStars === 0 && filters.maxStars < 0
                        ? 'bg-slate-700/60 text-slate-300 ring-1 ring-slate-600/50'
                        : 'bg-slate-800/50 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {t('common.all')}
                  </button>
                  <button
                    onClick={() => setFilters(prev => ({
                      ...prev,
                      unratedOnly: !prev.unratedOnly,
                      minStars: 0,
                      maxStars: -1,
                    }))}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1 ${
                      filters.unratedOnly
                        ? 'bg-slate-600/30 text-slate-300 ring-1 ring-slate-500/40'
                        : 'bg-slate-800/50 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <EyeOff size={10} /> {t('practice.unrated')}
                  </button>
                  <span className="text-slate-600 text-[10px] mx-0.5">min:</span>
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={`min-${star}`}
                      onClick={() => setFilters(prev => ({
                        ...prev,
                        minStars: prev.minStars === star ? 0 : star,
                        unratedOnly: false,
                      }))}
                      className={`px-2 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-0.5 ${
                        filters.minStars === star
                          ? 'bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/40'
                          : 'bg-slate-800/50 text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {star}<Star size={10} className={filters.minStars === star ? 'fill-amber-400' : ''} />+
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Order */}
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1.5 font-medium flex items-center gap-1">
                  <ArrowUpDown size={10} /> {t('practice.sortOrder')}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { value: 'custom', label: t('sort.custom') },
                    { value: 'created-asc', label: t('sort.oldest') },
                    { value: 'created-desc', label: t('sort.newest') },
                    { value: 'alpha-asc', label: t('sort.aToZ') },
                    { value: 'alpha-desc', label: t('sort.zToA') },
                    { value: 'rating-desc', label: t('sort.best') },
                    { value: 'rating-asc', label: t('sort.worst') },
                    { value: 'due-asc', label: t('sort.dueSoon') },
                    { value: 'interval-desc', label: t('sort.longInterval') },
                    { value: 'random', label: t('sort.random') },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setSortBy(opt.value)}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                        sortBy === opt.value
                          ? 'bg-indigo-500/20 text-indigo-400 ring-1 ring-indigo-500/40'
                          : 'bg-slate-800/50 text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear / Close */}
              <div className="flex items-center justify-between pt-1">
                {filtersActive ? (
                  <button
                    onClick={() => { setFilters(EMPTY_FILTERS); setSortBy('custom'); }}
                    className="text-xs text-red-400 hover:text-red-300 transition-colors flex items-center gap-1"
                  >
                    <XCircle size={12} /> Clear all filters
                  </button>
                ) : (
                  <span className="text-xs text-slate-600">No filters active</span>
                )}
                <span className="text-xs text-slate-500">
                  {cards.length} card{cards.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

      {/* Card Area - Flippable */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 overflow-y-auto">
        <div className="w-full max-w-2xl">
          {/* ═══ Multiple Choice ═══ */}
          {currentCard.noteType === 'multipleChoice' ? (
            <motion.div key={currentCard.id + '-mc'} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
              <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[250px]">
                <MultipleChoiceRenderer
                  card={currentCard}
                  isFlipped={isFlipped}
                  onAnswer={(correct) => {
                    setIsFlipped(true);
                  }}
                />
              </div>
            </motion.div>
          ) : currentCard.noteType === 'aiDynamic' ? (
            /* ═══ AI Dynamic ═══ */
            <div className="flip-card" onClick={toggleFlip} style={{ cursor: 'pointer' }}>
              <motion.div key={currentCard.id + '-ai'} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }}>
                <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                  <div className="flip-card-front">
                    <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[250px] flex flex-col items-center justify-center">
                      <AIDynamicRenderer card={currentCard} isFlipped={false} onFlip={toggleFlip} />
                      <p className="text-xs text-slate-500 mt-4">{t('practice.tapToFlip')}</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[250px] flex flex-col items-center justify-center">
                      <AIDynamicRenderer card={currentCard} isFlipped={true} onFlip={toggleFlip} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : currentCard.noteType === 'typeIn' ? (
            /* ═══ Type-In ═══ */
            <motion.div key={currentCard.id + '-typein'} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
              <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[250px]">
                <TypeInRenderer
                  card={currentCard}
                  onResult={(correct) => {
                    setIsFlipped(true);
                  }}
                />
              </div>
            </motion.div>
          ) : currentCard.noteType === 'imageOcclusion' ? (
            /* ═══ Image Occlusion ═══ */
            <div className="flip-card" onClick={toggleFlip} style={{ cursor: 'pointer' }}>
              <motion.div key={currentCard.id + '-io'} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }}>
                <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                  <div className="flip-card-front">
                    <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[250px] flex flex-col items-center justify-center">
                      <ImageOcclusionRenderer card={currentCard} isFlipped={false} />
                      <p className="text-xs text-slate-500 mt-4">{t('practice.tapToFlip')}</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[250px] flex flex-col items-center justify-center">
                      <ImageOcclusionRenderer card={currentCard} isFlipped={true} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : currentCard.noteType === 'ordering' ? (
            /* ═══ Ordering ═══ */
            <motion.div key={currentCard.id + '-order'} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
              <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[250px]">
                <OrderingRenderer
                  card={currentCard}
                  onAnswer={(correct) => {
                    setIsFlipped(true);
                  }}
                />
              </div>
            </motion.div>
          ) : (
          /* ═══ Standard Flip Card ═══ */
          <div className="flip-card" onClick={toggleFlip} style={{ cursor: 'pointer' }}>
            <motion.div
              key={currentCard.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                {/* Front */}
                <div className="flip-card-front">
                  <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[250px] flex flex-col items-center justify-center">
                    <div className="w-full text-center">
                      {hasCloze(currentCard.front) ? (
                        <MarkdownRenderer content={renderClozeFront(currentCard.front, 1)} />
                      ) : (
                        <MarkdownRenderer content={currentCard.front} />
                      )}
                      {currentCard.frontImageUrl && (
                        <img
                          src={currentCard.frontImageUrl}
                          alt="Card front"
                          className="max-h-48 mx-auto mt-4 rounded-lg"
                        />
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
                      <p className="text-xs text-slate-500">{t('practice.tapToFlip')}</p>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back">
                  <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[250px] flex flex-col items-center justify-center">
                    <div className="w-full text-center">
                      {hasCloze(currentCard.front) ? (
                        <MarkdownRenderer content={renderClozeBack(currentCard.front, 1)} />
                      ) : (
                        <MarkdownRenderer content={currentCard.back} />
                      )}
                      {currentCard.backImageUrl && (
                        <img
                          src={currentCard.backImageUrl}
                          alt="Card back"
                          className="max-h-48 mx-auto mt-4 rounded-lg"
                        />
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
                      <p className="text-xs text-slate-500">{t('practice.tapToFlipBack')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          )}

        </div>

        {/* Star Rating & Flag — outside the flip card, below it with clear spacing */}
        <div className="w-full max-w-2xl mt-5" onClick={e => e.stopPropagation()}>
          <AnimatePresence>
            {isFlipped && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-center"
              >
                <p className="text-xs text-slate-400 mb-2">{t('practice.howWell')}</p>
                <div className="flex items-center justify-center gap-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      onClick={() => handleStarRate(star)}
                      className="p-1.5"
                    >
                      <Star
                        size={28}
                        className={`transition-colors ${
                          (currentCard.starRating || 0) >= star
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-600 hover:text-amber-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Flag indicator & quick toggle */}
          <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
            {currentCard.flag && currentCard.flag > 0 && (() => {
              const f = CARD_FLAGS.find(fl => fl.id === currentCard.flag);
              return f ? (
                <span className={`text-xs flex items-center gap-1 ${f.color} ${f.bg} px-2.5 py-1 rounded-full`}>
                  <Flag size={12} fill="currentColor" /> {f.label} Flag
                </span>
              ) : null;
            })()}
            <div className="relative group/flag inline-block">
              <button
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs transition-all ${
                  currentCard.flag && currentCard.flag > 0
                    ? CARD_FLAGS.find(f => f.id === currentCard.flag)!.color + ' ' + CARD_FLAGS.find(f => f.id === currentCard.flag)!.bg
                    : 'text-slate-500 bg-slate-800/50 hover:bg-slate-700/50'
                }`}
                title="Set flag"
              >
                <Flag size={12} fill={currentCard.flag && currentCard.flag > 0 ? 'currentColor' : 'none'} />
                Flag
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 w-36 glass rounded-xl py-1 z-50 shadow-xl hidden group-hover/flag:block">
                {CARD_FLAGS.map(f => (
                  <button
                    key={f.id}
                    onClick={() => {
                      db.cards.update(currentCard.id, { flag: f.id as CardFlag, updatedAt: Date.now() });
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-1.5 text-xs hover:bg-slate-700/50 transition-colors ${currentCard.flag === f.id ? 'bg-slate-700/30 font-medium' : ''}`}
                  >
                    <Flag size={10} className={f.color} fill={f.id > 0 ? 'currentColor' : 'none'} />
                    <span className={f.color}>{f.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="px-4 pb-6 safe-bottom">
        <div className="max-w-2xl mx-auto flex items-center gap-2">
          {/* Previous */}
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex-shrink-0"
            title="Previous (←)"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Edit */}
          <button
            onClick={() => { if (currentCard) navigate(`/deck/${id}/card/${currentCard.id}`); }}
            className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-primary-500/10 text-slate-500 hover:text-primary-400 transition-all flex-shrink-0"
            title="Edit card (E)"
          >
            <Edit3 size={18} />
          </button>

          {/* Flip */}
          <button
            onClick={toggleFlip}
            className="flex-1 py-3 md:py-3.5 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 font-medium flex items-center justify-center gap-2 transition-all text-sm md:text-base"
          >
            <RotateCcw size={16} />
            {isFlipped ? t('study.showFront') : t('study.showBack')}
          </button>

          {/* Skip */}
          <button
            onClick={handleSkip}
            className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-all flex-shrink-0"
            title="Skip (S)"
          >
            <SkipForward size={18} />
          </button>

          {/* Next */}
          <button
            onClick={goNext}
            className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 flex items-center justify-center transition-all shadow-lg flex-shrink-0"
            title="Next (→)"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Keyboard hints */}
        <div className="max-w-2xl mx-auto mt-2 flex items-center justify-center gap-4 text-[10px] text-slate-500 hidden md:flex">
          <span>← → Navigate</span>
          <span>Space Flip</span>
          <span>S Skip</span>
          <span>E Edit</span>
          <span>M Mute</span>
          <span>1-5 Rate</span>
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
