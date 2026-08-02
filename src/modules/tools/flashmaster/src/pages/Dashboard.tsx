import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { useT } from '../lib/i18n';
import {
  BookOpen,
  Plus,
  Clock,
  Zap,
  ChevronRight,
  Sparkles,
  Cloud,
  FolderSync,
  RefreshCw,
  CheckCircle2,
  Shuffle,
  Brain,
  Mic,
  Star,
  Search,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { db } from '../lib/db';
import { getDueCards } from '../lib/srs';
import { isFSAccessSupported, selectSyncFolder, performSync } from '../lib/sync';
import { hasOpenAIKey } from '../lib/openai';
import type { Deck, Card, UserStats } from '../types';
import XPBar from '../components/XPBar';
import StreakTracker from '../components/StreakTracker';

interface Props {
  stats: UserStats | null;
  onRefresh: () => void;
}

export default function Dashboard({ stats, onRefresh }: Props) {
  const navigate = useNavigate();
  const { t } = useT();
  const decks = useLiveQuery(() => db.decks.orderBy('updatedAt').reverse().toArray());
  const allCards = useLiveQuery(() => db.cards.toArray());
  const [syncing, setSyncing] = useState(false);
  const [syncDone, setSyncDone] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Global search results
  const searchResults = searchQuery.trim().length >= 2
    ? (allCards || []).filter(c => {
        const q = searchQuery.toLowerCase();
        return c.front.toLowerCase().includes(q) || c.back.toLowerCase().includes(q) || c.tags.some(t => t.toLowerCase().includes(q));
      }).slice(0, 20)
    : [];
  const getDeckForCard = (card: Card) => decks?.find(d => d.id === card.deckId);

  useEffect(() => { onRefresh(); }, []);

  const handleCloudSync = async () => {
    try {
      // First try to sync — if no folder selected, prompt user to pick one
      setSyncing(true);
      setSyncDone(false);
      try {
        const result = await performSync();
        switch (result) {
          case 'pushed': toast.success('Data pushed to cloud folder'); break;
          case 'pulled': toast.success('New data pulled from cloud'); onRefresh(); break;
          case 'up-to-date': toast.success('Already up to date'); break;
        }
        setSyncDone(true);
        setTimeout(() => setSyncDone(false), 2500);
      } catch (err: any) {
        // If no folder selected, prompt
        if (err.message?.includes('No sync folder')) {
          const name = await selectSyncFolder();
          toast.success(`Sync folder set: ${name}`);
          const result = await performSync();
          switch (result) {
            case 'pushed': toast.success('Data pushed to cloud folder'); break;
            case 'pulled': toast.success('New data pulled from cloud'); onRefresh(); break;
            case 'up-to-date': toast.success('Already up to date'); break;
          }
          setSyncDone(true);
          setTimeout(() => setSyncDone(false), 2500);
        } else {
          throw err;
        }
      }
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        toast.error(`Sync failed: ${err.message}`);
      }
    } finally {
      setSyncing(false);
    }
  };

  const getDeckCounts = (deck: Deck) => {
    if (!allCards) return { new: 0, learning: 0, review: 0, total: 0 };
    const deckCards = allCards.filter(c => c.deckId === deck.id);
    return getDueCards(deckCards, deck.settings).counts;
  };

  const totalDue = decks?.reduce((sum, deck) => sum + getDeckCounts(deck).total, 0) ?? 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">{t('dashboard.title')}</span>
            </h1>
            <p className="text-slate-400 mt-1">
              {totalDue > 0
                ? t('dashboard.cardsWaiting', { count: String(totalDue) })
                : t('dashboard.allCaughtUp')
              }
            </p>
          </div>

          {/* Cloud Sync Button */}
          {isFSAccessSupported() && (
            <button
              onClick={handleCloudSync}
              disabled={syncing}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                syncDone
                  ? 'bg-emerald-500/15 text-emerald-400'
                  : syncing
                    ? 'bg-slate-800/60 text-slate-400'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/60 hover:text-white'
              }`}
              title="Sync with cloud folder (iCloud, Google Drive, etc.)"
            >
              {syncDone ? (
                <CheckCircle2 size={18} />
              ) : syncing ? (
                <RefreshCw size={18} className="animate-spin" />
              ) : (
                <Cloud size={18} />
              )}
              <span className="hidden sm:inline">
                {syncDone ? t('dashboard.synced') : syncing ? t('dashboard.syncing') : t('dashboard.sync')}
              </span>
            </button>
          )}
        </div>

        {/* XP Bar */}
        {stats && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4"
          >
            <XPBar xp={stats.xp} level={stats.level} />
          </motion.div>
        )}

        {/* Streak Tracker (compact) */}
        {stats && (
          <div className="mt-4">
            <StreakTracker stats={stats} compact />
          </div>
        )}
      </div>

      {/* Quick Study Button */}
      {totalDue > 0 && decks && decks.length > 0 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            const deckWithMostDue = decks.reduce((best, deck) => {
              const counts = getDeckCounts(deck);
              const bestCounts = getDeckCounts(best);
              return counts.total > bestCounts.total ? deck : best;
            }, decks[0]);
            navigate(`/study/${deckWithMostDue.id}`);
          }}
          className="w-full mb-8 p-6 rounded-2xl bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 transition-all shadow-xl glow-lg"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                <Zap size={28} className="text-yellow-300" />
              </div>
              <div className="text-left">
                <p className="text-lg font-bold">{t('dashboard.startStudying')}</p>
                <p className="text-sm text-white/70">{totalDue} cards due today</p>
              </div>
            </div>
            <ChevronRight size={24} className="text-white/70" />
          </div>
        </motion.button>
      )}

      {/* Interleaved Study */}
      {decks && decks.length >= 2 && totalDue > 0 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => navigate('/study/interleave')}
          className="w-full mb-8 p-4 rounded-2xl bg-gradient-to-r from-purple-600/30 to-primary-600/30 border border-purple-500/20 hover:border-purple-500/40 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <Shuffle size={22} className="text-purple-400" />
            </div>
            <div className="text-left flex-1">
              <p className="font-bold text-sm flex items-center gap-2">
                {t('dashboard.interleaved')}
                <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full font-normal">{t('dashboard.scienceBacked')}</span>
              </p>
              <p className="text-xs text-slate-400 mt-0.5">Mix cards from multiple decks — improves retention by 20-50%</p>
            </div>
            <ChevronRight size={18} className="text-purple-400/50" />
          </div>
        </motion.button>
      )}

      {/* Voice Study Mode */}
      {hasOpenAIKey() && decks && decks.length > 0 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => {
            // Pick deck with most due cards, or most total cards as fallback
            const deckWithMost = decks.reduce((best, deck) => {
              const counts = getDeckCounts(deck);
              const bestCounts = getDeckCounts(best);
              if (counts.total > 0) return counts.total > bestCounts.total ? deck : best;
              // Fallback: compare total card count
              const total = allCards?.filter(c => c.deckId === deck.id).length || 0;
              const bestTotal = allCards?.filter(c => c.deckId === best.id).length || 0;
              return total > bestTotal ? deck : best;
            }, decks[0]);
            navigate(`/voice/${deckWithMost.id}`);
          }}
          className="w-full mb-8 p-4 rounded-2xl bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 border border-violet-500/20 hover:border-violet-500/40 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center">
              <Mic size={22} className="text-violet-400" />
            </div>
            <div className="text-left flex-1">
              <p className="font-bold text-sm flex items-center gap-2">
                {t('dashboard.voiceMode')}
                <span className="text-[10px] bg-violet-500/20 text-violet-400 px-2 py-0.5 rounded-full font-normal">{t('dashboard.aiPowered')}</span>
              </p>
              <p className="text-xs text-slate-400 mt-0.5">Talk with an AI study partner — practice speaking & get instant feedback</p>
            </div>
            <ChevronRight size={18} className="text-violet-400/50" />
          </div>
        </motion.button>
      )}

      {/* Today's Progress */}
      {stats && (
        <div className="grid grid-cols-3 gap-3 mb-8">
          <StatCard
            icon={<BookOpen size={18} />}
            label={t('dashboard.studiedToday')}
            value={stats.studyHistory?.[new Date().toISOString().slice(0, 10)]?.cards || 0}
            color="text-blue-400"
          />
          <StatCard
            icon={<Zap size={18} />}
            label={t('dashboard.xpToday')}
            value={stats.studyHistory?.[new Date().toISOString().slice(0, 10)]?.xp || 0}
            color="text-amber-400"
          />
          <StatCard
            icon={<Clock size={18} />}
            label={t('dashboard.totalCards')}
            value={allCards?.length || 0}
            color="text-emerald-400"
          />
        </div>
      )}

      {/* Global Card Search */}
      <div className="mb-6">
        <div className="relative">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder={t('dashboard.searchCards')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-sm transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Search Results */}
        <AnimatePresence>
          {searchQuery.trim().length >= 2 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 overflow-hidden"
            >
              <div className="glass-card rounded-xl overflow-hidden">
                {searchResults.length === 0 ? (
                  <p className="text-sm text-slate-500 px-4 py-3">No cards found for "{searchQuery}"</p>
                ) : (
                  <>
                    <p className="text-xs text-slate-500 px-4 pt-3 pb-1">{searchResults.length}{searchResults.length === 20 ? '+' : ''} results</p>
                    <div className="max-h-72 overflow-y-auto divide-y divide-slate-700/30">
                      {searchResults.map(card => {
                        const cardDeck = getDeckForCard(card);
                        return (
                          <button
                            key={card.id}
                            onClick={() => navigate(`/practice/${card.deckId}?startCard=${card.id}`)}
                            className="w-full text-left px-4 py-2.5 hover:bg-slate-700/30 transition-colors flex items-start gap-3"
                          >
                            <span className="text-lg flex-shrink-0 mt-0.5">{cardDeck?.icon || '📋'}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm line-clamp-1">{card.front.replace(/[#*_`<>[\]]/g, '')}</p>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-[10px] text-slate-500">{cardDeck?.name || 'Unknown deck'}</span>
                                {card.starRating && card.starRating > 0 && (
                                  <span className="text-[10px] text-amber-400">{'★'.repeat(card.starRating)}</span>
                                )}
                                {card.tags.length > 0 && (
                                  <span className="text-[10px] text-slate-600">#{card.tags[0]}</span>
                                )}
                              </div>
                            </div>
                            <ChevronRight size={14} className="text-slate-600 mt-1 flex-shrink-0" />
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decks Grid */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{t('dashboard.yourDecks')}</h2>
        <button
          onClick={() => navigate('/new-deck')}
          className="flex items-center gap-1.5 text-sm text-primary-400 hover:text-primary-300 transition-colors"
        >
          <Plus size={16} />
          {t('dashboard.newDeck')}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AnimatePresence>
          {(() => {
            if (!decks) return null;
            // Build hierarchical list: top-level first, then their children
            const sorted = decks.slice().sort((a, b) => (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0));
            const topLevel = sorted.filter(d => !d.parentDeckId);
            const childMap = new Map<string, Deck[]>();
            sorted.filter(d => d.parentDeckId).forEach(d => {
              const list = childMap.get(d.parentDeckId!) || [];
              list.push(d);
              childMap.set(d.parentDeckId!, list);
            });
            const flat: { deck: Deck; depth: number }[] = [];
            const addWithChildren = (d: Deck, depth: number) => {
              flat.push({ deck: d, depth });
              (childMap.get(d.id) || []).forEach(child => addWithChildren(child, depth + 1));
            };
            topLevel.forEach(d => addWithChildren(d, 0));
            // Also add orphan subdecks (parent deleted)
            sorted.filter(d => d.parentDeckId && !decks.find(p => p.id === d.parentDeckId) && !flat.find(f => f.deck.id === d.id))
              .forEach(d => flat.push({ deck: d, depth: 0 }));
            return flat.map(({ deck, depth }, index) => (
              <DeckCard
                key={deck.id}
                deck={deck}
                counts={getDeckCounts(deck)}
                totalCards={allCards?.filter(c => c.deckId === deck.id).length || 0}
                index={index}
                depth={depth}
                onClick={() => navigate(`/deck/${deck.id}`)}
                onStudy={() => navigate(`/study/${deck.id}`)}
                onToggleFavorite={async () => {
                  await db.decks.update(deck.id, { isFavorite: !deck.isFavorite });
                }}
              />
            ));
          })()}
        </AnimatePresence>

        {/* Add New Deck Card */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: (decks?.length || 0) * 0.05 }}
          onClick={() => navigate('/new-deck')}
          className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-3 min-h-[180px] hover:border-primary-500/30 transition-all group cursor-pointer"
        >
          <div className="w-14 h-14 rounded-xl bg-slate-800 group-hover:bg-primary-500/20 flex items-center justify-center transition-colors">
            <Plus size={24} className="text-slate-400 group-hover:text-primary-400 transition-colors" />
          </div>
          <p className="text-slate-400 group-hover:text-slate-300 font-medium transition-colors">{t('dashboard.createNewDeck')}</p>
        </motion.button>

        {/* AI Deck Generator Card */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: ((decks?.length || 0) + 1) * 0.05 }}
          onClick={() => navigate('/generate-deck')}
          className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-3 min-h-[180px] hover:border-purple-500/30 transition-all group cursor-pointer"
        >
          <div className="w-14 h-14 rounded-xl bg-slate-800 group-hover:bg-purple-500/20 flex items-center justify-center transition-colors">
            <Sparkles size={24} className="text-slate-400 group-hover:text-purple-400 transition-colors" />
          </div>
          <p className="text-slate-400 group-hover:text-slate-300 font-medium transition-colors text-center text-sm">AI Deck Generator</p>
        </motion.button>
      </div>

      {/* Achievements Preview */}
      {stats && stats.achievements.some(a => a.unlockedAt) && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Sparkles size={20} className="text-amber-400" />
              Recent Achievements
            </h2>
            <button
              onClick={() => navigate('/analytics')}
              className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
            >
              View All
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {stats.achievements
              .filter(a => a.unlockedAt)
              .sort((a, b) => (b.unlockedAt || 0) - (a.unlockedAt || 0))
              .slice(0, 5)
              .map(a => (
                <div
                  key={a.id}
                  className="glass-card rounded-xl p-3 min-w-[140px] flex flex-col items-center text-center"
                >
                  <span className="text-2xl mb-1">{a.icon}</span>
                  <p className="text-xs font-medium text-slate-300">{a.name}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{a.description}</p>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Donate */}
      <div className="mt-8 text-center">
        <a
          href="https://buymeacoffee.com/codingtarik?l=de"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFDD00]/10 hover:bg-[#FFDD00]/20 text-[#FFDD00]/80 hover:text-[#FFDD00] text-xs font-medium transition-all"
        >
          {t('dashboard.donate')}
        </a>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, color }: {
  icon: React.ReactNode;
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="glass-card rounded-xl p-3 text-center">
      <div className={`flex justify-center mb-1 ${color}`}>{icon}</div>
      <p className="text-xl font-bold">{value}</p>
      <p className="text-[10px] text-slate-500 mt-0.5">{label}</p>
    </div>
  );
}

function DeckCard({ deck, counts, totalCards, index, depth = 0, onClick, onStudy, onToggleFavorite }: {
  deck: Deck;
  counts: { new: number; learning: number; review: number; total: number };
  totalCards: number;
  index: number;
  depth?: number;
  onClick: () => void;
  onStudy: () => void;
  onToggleFavorite: () => void;
}) {
  const { t } = useT();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`glass-card rounded-2xl p-5 hover:border-primary-500/30 transition-all cursor-pointer group ${deck.isFavorite ? 'ring-1 ring-amber-500/20' : ''} ${depth > 0 ? 'sm:col-span-2 border-l-2 border-primary-500/20' : ''}`}
      style={depth > 0 ? { marginLeft: `${depth * 20}px` } : undefined}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{ backgroundColor: `${deck.color}20` }}
          >
            {deck.icon}
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onToggleFavorite(); }}
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
              deck.isFavorite
                ? 'text-amber-400 hover:text-amber-300'
                : 'text-slate-600 hover:text-amber-400 opacity-0 group-hover:opacity-100'
            }`}
            title={deck.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Star size={16} fill={deck.isFavorite ? 'currentColor' : 'none'} />
          </button>
        </div>
        {counts.total > 0 && (
          <button
            onClick={(e) => { e.stopPropagation(); onStudy(); }}
            className="px-3 py-1.5 rounded-lg bg-primary-500/20 text-primary-400 text-xs font-medium hover:bg-primary-500/30 transition-colors"
          >
            {t('dashboard.study')}
          </button>
        )}
      </div>

      <h3 className="font-bold text-lg mb-1 group-hover:text-primary-300 transition-colors">
        {deck.isFavorite && <Star size={14} fill="currentColor" className="inline text-amber-400 mr-1.5" />}
        {deck.name}
      </h3>
      <p className="text-sm text-slate-400 line-clamp-2 mb-3">{deck.description}</p>

      <div className="flex items-center gap-4 text-xs">
        <span className="text-blue-400 font-medium">{counts.new} new</span>
        <span className="text-orange-400 font-medium">{counts.learning} learning</span>
        <span className="text-green-400 font-medium">{counts.review} review</span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-slate-500">{totalCards} cards total</span>
        <div className="h-1.5 flex-1 mx-3 bg-slate-700/50 rounded-full overflow-hidden">
          {totalCards > 0 && (
            <div
              className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full transition-all"
              style={{
                width: `${Math.max(5, ((totalCards - counts.new - counts.total) / totalCards) * 100)}%`,
              }}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
