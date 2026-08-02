import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import {
  ArrowLeft,
  Play,
  Plus,
  Settings,
  Trash2,
  Search,
  MoreVertical,
  Edit3,
  Copy,
  Tag,
  BookOpen,
  Layers,
  AlertTriangle,
  Brain,
  Share2,
  Ban,
  CheckSquare,
  Square,
  Paperclip,
  X,
  Mic,
  Sparkles,
  ArrowRightLeft,
  Copy as CopyIcon,
  Star,
  Flag,
  ArrowUpDown,
  ChevronUp,
  ChevronDown,
  Crosshair,
  FastForward,
  RotateCcw,
  Hash,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../lib/db';
import { getDueCards } from '../lib/srs';
import type { Card, CardFlag } from '../types';
import { CARD_FLAGS } from '../types';
import { getRetention, getStrengthColor } from '../lib/memoryStrength';
import { isLeech } from '../lib/leech';
import { shareDeck } from '../lib/share';
import { hasOpenAIKey } from '../lib/openai';
import { useT } from '../lib/i18n';
import AttachmentViewer from '../components/AttachmentViewer';

export default function DeckView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useT();
  const [searchQuery, setSearchQuery] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectMode, setSelectMode] = useState(false);
  const [selectedCards, setSelectedCards] = useState<Set<string>>(new Set());
  const [showMoveModal, setShowMoveModal] = useState<'move' | 'copy' | null>(null);
  const [moveTargetDeck, setMoveTargetDeck] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('custom');
  const [showCustomStudy, setShowCustomStudy] = useState(false);
  const [customStudyType, setCustomStudyType] = useState<'ahead' | 'forgot' | 'tag' | 'all' | 'new'>('ahead');
  const [customStudyLimit, setCustomStudyLimit] = useState(50);
  const [customStudyTag, setCustomStudyTag] = useState('');
  const [showBatchEdit, setShowBatchEdit] = useState(false);
  const allDecks = useLiveQuery(() => db.decks.toArray());

  // Pagination for performance with large decks
  const PAGE_SIZE = 50;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Reset visible count when filters/sort change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [searchQuery, filterStatus, sortBy]);

  const deck = useLiveQuery(() => db.decks.get(id!), [id]);
  const cards = useLiveQuery(
    () => db.cards.where('deckId').equals(id!).toArray(),
    [id]
  );

  const dueCounts = (cards && deck) ? getDueCards(cards, deck.settings).counts : { new: 0, learning: 0, review: 0, total: 0 };

  const filteredCards = (() => {
    let result = cards?.filter(card => {
      const q = searchQuery.toLowerCase();
      const matchesSearch = searchQuery === '' ||
        card.front.toLowerCase().includes(q) ||
        card.back.toLowerCase().includes(q) ||
        card.tags.some(t => t.toLowerCase().includes(q));
      let matchesFilter = false;
      if (filterStatus === 'all') matchesFilter = true;
      else if (filterStatus === 'leech') matchesFilter = !!card.isLeech;
      else if (filterStatus === 'flagged') matchesFilter = !!(card.flag && card.flag > 0);
      else if (filterStatus.startsWith('flag-')) matchesFilter = card.flag === Number(filterStatus.split('-')[1]);
      else matchesFilter = card.status === filterStatus;
      return matchesSearch && matchesFilter;
    }) || [];

    // Sort
    result = [...result];
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
      case 'flag':
        result.sort((a, b) => (b.flag || 0) - (a.flag || 0));
        break;
      case 'random':
        for (let i = result.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [result[i], result[j]] = [result[j], result[i]];
        }
        break;
    }
    return result;
  })();

  // Move card up/down in custom order
  const moveCard = async (cardId: string, direction: 'up' | 'down') => {
    const idx = filteredCards.findIndex(c => c.id === cardId);
    if (idx < 0) return;
    const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= filteredCards.length) return;

    const cardA = filteredCards[idx];
    const cardB = filteredCards[swapIdx];
    const orderA = cardA.sortOrder ?? cardA.createdAt;
    const orderB = cardB.sortOrder ?? cardB.createdAt;

    await db.cards.update(cardA.id, { sortOrder: orderB, updatedAt: Date.now() });
    await db.cards.update(cardB.id, { sortOrder: orderA, updatedAt: Date.now() });
  };

  const handleDelete = async () => {
    if (!confirm(t('deckView.confirmDeleteDeck'))) return;
    await db.cards.where('deckId').equals(id!).delete();
    await db.decks.delete(id!);
    toast.success(t('bulk.toast.deckDeleted'));
    navigate('/');
  };

  const handleDuplicateCard = async (card: Card) => {
    if (!deck) return;
    const newCard: Card = {
      ...card,
      id: uuidv4(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      status: 'new',
      ease: deck.settings.startingEase,
      interval: 0,
      dueDate: Date.now(),
      lapses: 0,
      reps: 0,
      learningStep: 0,
    };
    await db.cards.put(newCard);
    toast.success(t('bulk.toast.cardDuplicated'));
  };

  const handleDeleteCard = async (cardId: string) => {
    await db.cards.delete(cardId);
    toast.success(t('bulk.toast.cardDeleted'));
  };

  const handleShare = async () => {
    try {
      const result = await shareDeck(id!);
      if (result === 'shared') toast.success('Deck shared!');
      else if (result === 'downloaded') toast.success('Deck exported as file');
    } catch (err: any) {
      toast.error(err.message || 'Share failed');
    }
  };

  // Bulk operations
  const toggleCardSelection = (cardId: string) => {
    setSelectedCards(prev => {
      const next = new Set(prev);
      if (next.has(cardId)) next.delete(cardId);
      else next.add(cardId);
      return next;
    });
  };

  const selectAll = () => {
    setSelectedCards(new Set(filteredCards.map(c => c.id)));
  };

  const deselectAll = () => {
    setSelectedCards(new Set());
  };

  const bulkDelete = async () => {
    if (selectedCards.size === 0) return;
    if (!confirm(`Delete ${selectedCards.size} selected cards?`)) return;
    await Promise.all([...selectedCards].map(id => db.cards.delete(id)));
    toast.success(`${selectedCards.size} cards deleted`);
    setSelectedCards(new Set());
    setSelectMode(false);
  };

  const bulkSuspend = async () => {
    if (selectedCards.size === 0) return;
    await Promise.all([...selectedCards].map(id => db.cards.update(id, { status: 'suspended' as const })));
    toast.success(`${selectedCards.size} cards suspended`);
    setSelectedCards(new Set());
  };

  const bulkUnsuspend = async () => {
    if (selectedCards.size === 0) return;
    await Promise.all([...selectedCards].map(id => db.cards.update(id, { status: 'new' as const })));
    toast.success(`${selectedCards.size} cards unsuspended`);
    setSelectedCards(new Set());
  };

  const handleBulkMoveOrCopy = async () => {
    if (!moveTargetDeck || selectedCards.size === 0) return;
    const target = allDecks?.find(d => d.id === moveTargetDeck);
    if (!target) return;

    if (showMoveModal === 'move') {
      await Promise.all([...selectedCards].map(cid =>
        db.cards.update(cid, { deckId: moveTargetDeck, updatedAt: Date.now() })
      ));
      toast.success(`${selectedCards.size} cards moved to "${target.name}"`);
    } else {
      const originals = await Promise.all([...selectedCards].map(cid => db.cards.get(cid)));
      const copies = originals.filter(Boolean).map(card => ({
        ...card!,
        id: uuidv4(),
        deckId: moveTargetDeck,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        status: 'new' as const,
        ease: target.settings.startingEase,
        interval: 0,
        dueDate: Date.now(),
        lapses: 0,
        reps: 0,
        learningStep: 0,
      }));
      await db.cards.bulkPut(copies);
      toast.success(`${copies.length} cards copied to "${target.name}"`);
    }

    setSelectedCards(new Set());
    setShowMoveModal(null);
    setMoveTargetDeck('');
  };

  const handleDuplicateDeck = async () => {
    if (!deck || !cards) return;
    const newDeckId = uuidv4();
    const newDeck = {
      ...deck,
      id: newDeckId,
      name: `${deck.name} (Copy)`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    await db.decks.put(newDeck);

    // Copy all cards
    const deckCards = cards || [];
    const newCards = deckCards.map(c => ({
      ...c,
      id: uuidv4(),
      deckId: newDeckId,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      status: 'new' as const,
      ease: deck.settings.startingEase,
      interval: 0,
      dueDate: Date.now(),
      lapses: 0,
      reps: 0,
      learningStep: 0,
    }));
    await db.cards.bulkPut(newCards);
    toast.success(`Deck duplicated with ${newCards.length} cards`);
  };

  const moveSingleCard = async (card: Card, targetDeckId: string) => {
    await db.cards.update(card.id, { deckId: targetDeckId, updatedAt: Date.now() });
    const target = allDecks?.find(d => d.id === targetDeckId);
    toast.success(`Moved to "${target?.name}"`);
  };

  const copySingleCard = async (card: Card, targetDeckId: string) => {
    const target = allDecks?.find(d => d.id === targetDeckId);
    if (!target) return;
    const copy: Card = {
      ...card,
      id: uuidv4(),
      deckId: targetDeckId,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      status: 'new',
      ease: target.settings.startingEase,
      interval: 0,
      dueDate: Date.now(),
      lapses: 0,
      reps: 0,
      learningStep: 0,
    };
    await db.cards.put(copy);
    toast.success(`Copied to "${target.name}"`);
  };

  // ── Infinite scroll: load more cards as user scrolls ──
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount(prev => Math.min(prev + PAGE_SIZE, filteredCards.length));
        }
      },
      { rootMargin: '400px' }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [filteredCards.length]);

  const visibleCards = useMemo(
    () => filteredCards.slice(0, visibleCount),
    [filteredCards, visibleCount]
  );

  // ── Batch Edit ──
  const handleBatchEdit = useCallback(async (field: string, value: unknown) => {
    const targetIds = selectedCards.size > 0
      ? [...selectedCards]
      : filteredCards.map(c => c.id);
    const count = targetIds.length;
    if (!confirm(`Apply change to ${count} cards?`)) return;

    const updates: Record<string, unknown> = { [field]: value, updatedAt: Date.now() };
    await Promise.all(targetIds.map(cid => db.cards.update(cid, updates)));
    toast.success(`Updated ${count} cards`);
    setShowBatchEdit(false);
  }, [selectedCards, filteredCards]);

  if (!deck) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-slate-400">Deck not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate('/')}
          className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl">{deck.icon}</span>
            <h1 className="text-lg md:text-2xl font-bold truncate">{deck.name}</h1>
          </div>
          <p className="text-xs md:text-sm text-slate-400 mt-0.5 line-clamp-1">{deck.description}</p>
        </div>
        <button
          onClick={async () => { await db.decks.update(id!, { isFavorite: !deck.isFavorite }); }}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
            deck.isFavorite
              ? 'bg-amber-500/15 text-amber-400'
              : 'bg-slate-800/50 text-slate-500 hover:text-amber-400'
          }`}
          title={deck.isFavorite ? t('deckView.removeFavorite') : t('deckView.addFavorite')}
        >
          <Star size={18} fill={deck.isFavorite ? 'currentColor' : 'none'} />
        </button>
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors"
          >
            <MoreVertical size={20} />
          </button>
          {showMenu && (
            <div className="absolute right-0 top-12 w-48 glass rounded-xl py-2 z-50 shadow-xl">
              <button
                onClick={() => { navigate(`/deck/${id}/edit`); setShowMenu(false); }}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-700/50 transition-colors"
              >
                <Settings size={16} />
                {t('deckView.deckSettings')}
              </button>
              <button
                onClick={() => { handleShare(); setShowMenu(false); }}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-700/50 transition-colors"
              >
                <Share2 size={16} />
                {t('deckView.shareDeck')}
              </button>
              <button
                onClick={() => { handleDuplicateDeck(); setShowMenu(false); }}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-700/50 transition-colors"
              >
                <CopyIcon size={16} />
                {t('deckView.duplicateDeck')}
              </button>
              <button
                onClick={() => { setSelectMode(!selectMode); setSelectedCards(new Set()); setShowMenu(false); }}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-700/50 transition-colors"
              >
                <CheckSquare size={16} />
                {selectMode ? t('deckView.exitSelect') : t('deckView.selectCards')}
              </button>
              <hr className="border-slate-700/50 my-1" />
              <button
                onClick={() => { handleDelete(); setShowMenu(false); }}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <Trash2 size={16} />
                {t('deckView.deleteDeck')}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Due Cards Summary */}
      <div className="glass-card rounded-2xl p-5 mb-6">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-400">{dueCounts.new}</p>
            <p className="text-xs text-slate-400">{t('status.new')}</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-400">{dueCounts.learning}</p>
            <p className="text-xs text-slate-400">{t('status.learning')}</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-400">{dueCounts.review}</p>
            <p className="text-xs text-slate-400">{t('status.review')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {dueCounts.total > 0 && (
            <button
              onClick={() => navigate(`/study/${id}`)}
              className="py-3 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 font-medium flex items-center justify-center gap-2 transition-all"
            >
              <Layers size={18} />
              {t('dashboard.study')} ({dueCounts.total})
            </button>
          )}

          {(cards?.length || 0) > 0 && (
            <button
              onClick={() => navigate(`/practice/${id}`)}
              className="py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 font-medium flex items-center justify-center gap-2 transition-all"
            >
              <BookOpen size={18} />
              Practice All ({cards?.length || 0})
            </button>
          )}
        </div>

        {/* Voice Mode */}
        {hasOpenAIKey() && (cards?.length || 0) > 0 && (
          <button
            onClick={() => navigate(`/voice/${id}`)}
            className="w-full mt-3 py-3 rounded-xl bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 border border-violet-500/20 hover:border-violet-500/40 font-medium flex items-center justify-center gap-2 text-sm text-violet-300 transition-all"
          >
            <Mic size={16} />
            {t('deckView.voiceStudy')}
            <span className="text-[9px] bg-violet-500/20 text-violet-400 px-1.5 py-0.5 rounded-full">AI</span>
          </button>
        )}

        {/* Custom Study */}
        {(cards?.length || 0) > 0 && (
          <button
            onClick={() => setShowCustomStudy(true)}
            className="w-full mt-2 py-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/30 font-medium flex items-center justify-center gap-2 text-sm text-slate-300 transition-all"
          >
            <Crosshair size={16} />
            Custom Study Session
          </button>
        )}

        {dueCounts.total === 0 && (cards?.length || 0) === 0 && (
          <div className="text-center py-2">
            <p className="text-slate-400 text-sm">Add some cards to get started!</p>
          </div>
        )}

        {dueCounts.total === 0 && (cards?.length || 0) > 0 && (
          <p className="text-center text-sm text-slate-400 mt-2">
            No SRS cards due. Use Practice Mode to browse all cards!
          </p>
        )}
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col gap-2 mb-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder={t('deckView.searchCards')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-sm transition-colors"
          />
        </div>
        <div className="flex items-center gap-2">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="flex-1 min-w-0 px-2.5 py-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-xs focus:border-primary-500/50 focus:outline-none transition-colors"
          >
            <option value="all">{t('deckView.allStatus')}</option>
            <option value="new">{t('status.new')}</option>
            <option value="learning">{t('status.learning')}</option>
            <option value="review">{t('status.review')}</option>
            <option value="suspended">{t('status.suspended')}</option>
            <option value="leech">🩸 {t('deckView.leeches')}</option>
            <option value="flagged">🚩 {t('deckView.flagged')}</option>
            <option value="flag-1">🔴 Red</option>
            <option value="flag-2">🟠 Orange</option>
            <option value="flag-3">🟢 Green</option>
            <option value="flag-4">🔵 Blue</option>
            <option value="flag-5">🩷 Pink</option>
            <option value="flag-6">🩵 Teal</option>
            <option value="flag-7">🟣 Purple</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="flex-1 min-w-0 px-2.5 py-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-xs focus:border-primary-500/50 focus:outline-none transition-colors"
            title="Sort cards"
          >
            <option value="custom">↕ Custom</option>
            <option value="created-asc">📅 Oldest</option>
            <option value="created-desc">📅 Newest</option>
            <option value="alpha-asc">🔤 A→Z</option>
            <option value="alpha-desc">🔤 Z→A</option>
            <option value="rating-desc">⭐ Best</option>
            <option value="rating-asc">⭐ Worst</option>
            <option value="due-asc">⏰ Due</option>
            <option value="interval-desc">📈 Long</option>
            <option value="interval-asc">📉 Short</option>
            <option value="flag">🚩 Flag</option>
            <option value="random">🎲 Random</option>
          </select>
        </div>
      </div>

      {/* Bulk Toolbar */}
      {selectMode && (
        <div className="mb-4 flex items-center gap-2 flex-wrap glass-card rounded-xl p-3">
          <button
            onClick={selectedCards.size === filteredCards.length ? deselectAll : selectAll}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700/50 text-xs font-medium hover:bg-slate-600/50 transition-colors"
          >
            {selectedCards.size === filteredCards.length ? <CheckSquare size={14} /> : <Square size={14} />}
            {selectedCards.size === filteredCards.length ? t('action.deselectAll') : t('action.selectAll')}
          </button>
          <span className="text-xs text-slate-400">{selectedCards.size} selected</span>
          <div className="flex-1" />
          <button
            onClick={() => { setShowMoveModal('move'); setMoveTargetDeck(''); }}
            disabled={selectedCards.size === 0}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-medium hover:bg-blue-500/25 disabled:opacity-30 transition-colors"
          >
            <ArrowRightLeft size={12} /> {t('bulk.move')}
          </button>
          <button
            onClick={() => { setShowMoveModal('copy'); setMoveTargetDeck(''); }}
            disabled={selectedCards.size === 0}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-purple-500/15 text-purple-400 text-xs font-medium hover:bg-purple-500/25 disabled:opacity-30 transition-colors"
          >
            <CopyIcon size={12} /> {t('bulk.copy')}
          </button>
          <button
            onClick={bulkSuspend}
            disabled={selectedCards.size === 0}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-500/15 text-amber-400 text-xs font-medium hover:bg-amber-500/25 disabled:opacity-30 transition-colors"
          >
            <Ban size={12} /> {t('bulk.suspend')}
          </button>
          <button
            onClick={bulkUnsuspend}
            disabled={selectedCards.size === 0}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-green-500/15 text-green-400 text-xs font-medium hover:bg-green-500/25 disabled:opacity-30 transition-colors"
          >
            {t('bulk.unsuspend')}
          </button>
          <button
            onClick={() => setShowBatchEdit(true)}
            disabled={selectedCards.size === 0}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-primary-500/15 text-primary-400 text-xs font-medium hover:bg-primary-500/25 disabled:opacity-30 transition-colors"
          >
            <Edit3 size={12} /> Batch Edit
          </button>
          <button
            onClick={bulkDelete}
            disabled={selectedCards.size === 0}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-red-500/15 text-red-400 text-xs font-medium hover:bg-red-500/25 disabled:opacity-30 transition-colors"
          >
            <Trash2 size={12} /> {t('bulk.delete')}
          </button>
          <button
            onClick={() => { setSelectMode(false); setSelectedCards(new Set()); }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-700/50 text-xs font-medium hover:bg-slate-600/50 transition-colors"
          >
            <X size={12} /> {t('action.done')}
          </button>
        </div>
      )}

      {/* Batch Edit Modal */}
      <AnimatePresence>
        {showBatchEdit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setShowBatchEdit(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700/50 rounded-2xl p-6 max-w-md w-full shadow-2xl"
            >
              <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
                <Edit3 size={18} className="text-primary-400" />
                Batch Edit {selectedCards.size > 0 ? `${selectedCards.size} cards` : `All ${filteredCards.length} cards`}
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                {selectedCards.size > 0 ? 'Apply to selected cards' : 'Apply to all filtered cards'}
              </p>

              <div className="space-y-3">
                {/* PlayPhrase */}
                <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/40 transition-colors">
                  <div>
                    <p className="text-sm font-medium">Enable PlayPhrase</p>
                    <p className="text-[10px] text-slate-500">playphrase.me on all cards</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleBatchEdit('playPhraseEnabled', true)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 text-xs font-medium hover:bg-emerald-500/25 transition-colors"
                    >
                      Enable
                    </button>
                    <button
                      onClick={() => handleBatchEdit('playPhraseEnabled', false)}
                      className="px-3 py-1.5 rounded-lg bg-red-500/15 text-red-400 text-xs font-medium hover:bg-red-500/25 transition-colors"
                    >
                      Disable
                    </button>
                  </div>
                </div>

                {/* PlayPhrase Side */}
                <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/40 transition-colors">
                  <div>
                    <p className="text-sm font-medium">PlayPhrase Side</p>
                    <p className="text-[10px] text-slate-500">Show on front or back</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleBatchEdit('playPhraseSide', 'front')}
                      className="px-3 py-1.5 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-medium hover:bg-blue-500/25 transition-colors"
                    >
                      Front
                    </button>
                    <button
                      onClick={() => handleBatchEdit('playPhraseSide', 'back')}
                      className="px-3 py-1.5 rounded-lg bg-purple-500/15 text-purple-400 text-xs font-medium hover:bg-purple-500/25 transition-colors"
                    >
                      Back
                    </button>
                  </div>
                </div>

                {/* Set status */}
                <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/40 transition-colors">
                  <div>
                    <p className="text-sm font-medium">Set Status</p>
                    <p className="text-[10px] text-slate-500">Reset card status</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleBatchEdit('status', 'new')}
                      className="px-3 py-1.5 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-medium hover:bg-blue-500/25 transition-colors"
                    >
                      New
                    </button>
                    <button
                      onClick={() => handleBatchEdit('status', 'suspended')}
                      className="px-3 py-1.5 rounded-lg bg-amber-500/15 text-amber-400 text-xs font-medium hover:bg-amber-500/25 transition-colors"
                    >
                      Suspend
                    </button>
                  </div>
                </div>

                {/* Set Flag */}
                <div className="px-4 py-3 rounded-xl bg-slate-800/50">
                  <p className="text-sm font-medium mb-2">Set Flag</p>
                  <div className="flex gap-2 flex-wrap">
                    {CARD_FLAGS.map(f => (
                      <button
                        key={f.id}
                        onClick={() => handleBatchEdit('flag', f.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${f.id === 0 ? 'bg-slate-700/50 text-slate-400 hover:bg-slate-600/50' : `${f.bg} ${f.color}`}`}
                      >
                        <Flag size={10} fill={f.id > 0 ? 'currentColor' : 'none'} />
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Star Rating */}
                <div className="px-4 py-3 rounded-xl bg-slate-800/50">
                  <p className="text-sm font-medium mb-2">Set Star Rating</p>
                  <div className="flex gap-2">
                    {[0, 1, 2, 3, 4, 5].map(r => (
                      <button
                        key={r}
                        onClick={() => handleBatchEdit('starRating', r)}
                        className="px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-medium hover:bg-amber-500/20 transition-colors"
                      >
                        {r === 0 ? 'Clear' : '★'.repeat(r)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add Tag */}
                <div className="px-4 py-3 rounded-xl bg-slate-800/50">
                  <p className="text-sm font-medium mb-2">Add Tag to All</p>
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const form = e.target as HTMLFormElement;
                      const input = form.elements.namedItem('batchTag') as HTMLInputElement;
                      const tag = input.value.trim();
                      if (!tag) return;
                      const targetIds = selectedCards.size > 0 ? [...selectedCards] : filteredCards.map(c => c.id);
                      if (!confirm(`Add tag "${tag}" to ${targetIds.length} cards?`)) return;
                      for (const cid of targetIds) {
                        const c = cards?.find(x => x.id === cid);
                        if (c && !c.tags.includes(tag)) {
                          await db.cards.update(cid, { tags: [...c.tags, tag], updatedAt: Date.now() });
                        }
                      }
                      toast.success(`Added tag "${tag}" to cards`);
                      setShowBatchEdit(false);
                    }}
                    className="flex gap-2"
                  >
                    <input
                      name="batchTag"
                      placeholder="Tag name..."
                      className="flex-1 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700/50 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary-500/50"
                    />
                    <button
                      type="submit"
                      className="px-4 py-1.5 rounded-lg bg-primary-500/20 text-primary-400 text-xs font-medium hover:bg-primary-500/30 transition-colors"
                    >
                      Add
                    </button>
                  </form>
                </div>
              </div>

              <button
                onClick={() => setShowBatchEdit(false)}
                className="w-full mt-4 py-2.5 rounded-xl bg-slate-800/50 text-sm text-slate-400 hover:bg-slate-700/50 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cards List */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm text-slate-400">{filteredCards.length} cards</p>
        <div className="flex items-center gap-2">
          {hasOpenAIKey() && (
            <button
              onClick={() => navigate(`/deck/${id}/generate`)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/15 text-purple-400 text-sm font-medium hover:bg-purple-500/25 transition-colors"
            >
              <Sparkles size={14} />
              {t('deckView.aiGenerate')}
            </button>
          )}
          <button
            onClick={() => navigate(`/deck/${id}/card/new`)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-500/20 text-primary-400 text-sm font-medium hover:bg-primary-500/30 transition-colors"
          >
            <Plus size={14} />
            {t('deckView.addCard')}
          </button>
          <button
            onClick={() => navigate(`/deck/${id}/resources`)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/15 text-amber-400 text-sm font-medium hover:bg-amber-500/25 transition-colors"
          >
            <Layers size={14} />
            Resources
          </button>
        </div>
      </div>

      <div className="space-y-2">
          {visibleCards.map((card, index) => (
            <div
              key={card.id}
              className="glass-card rounded-xl p-4 group cursor-pointer hover:border-primary-500/20 transition-colors"
              onClick={() => navigate(`/practice/${id}?startCard=${card.id}`)}
            >
              <div className="flex items-start gap-3">
                {selectMode && (
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleCardSelection(card.id); }}
                    className="mt-0.5 flex-shrink-0"
                  >
                    {selectedCards.has(card.id) ? (
                      <CheckSquare size={18} className="text-primary-400" />
                    ) : (
                      <Square size={18} className="text-slate-500" />
                    )}
                  </button>
                )}
                {!selectMode && (
                  <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" title={t('deckView.practiceFromCard')}>
                    <Play size={14} className="text-primary-400 ml-0.5" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="text-sm line-clamp-2 mb-2 text-slate-200">
                    {card.front.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').slice(0, 200) || '(empty)'}
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <StatusBadge status={card.status} />
                    {card.tags.map(tag => (
                      <span key={tag} className="flex items-center gap-0.5 px-2 py-0.5 rounded-md bg-slate-700/50 text-xs text-slate-400">
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                    {card.starRating && card.starRating > 0 && (
                      <span className="text-xs text-amber-400">
                        {'★'.repeat(card.starRating)}{'☆'.repeat(5 - card.starRating)}
                      </span>
                    )}
                    {card.isLeech && (
                      <span className="flex items-center gap-0.5 text-xs text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded-md">
                        <AlertTriangle size={10} /> Leech
                      </span>
                    )}
                    {card.interval > 0 && (
                      <span className="text-xs text-slate-500">
                        Interval: {card.interval}d • Ease: {(card.ease * 100).toFixed(0)}%
                      </span>
                    )}
                    {/* Memory strength */}
                    {card.status === 'review' && (() => {
                      const r = getRetention(card);
                      return (
                        <span className={`flex items-center gap-1 text-[10px] ${getStrengthColor(r)}`}>
                          <Brain size={10} />
                          {Math.round(r * 100)}%
                        </span>
                      );
                    })()}
                    {/* Attachment count */}
                    {card.attachments && card.attachments.length > 0 && (
                      <span className="flex items-center gap-0.5 text-xs text-slate-500">
                        <Paperclip size={10} />
                        {card.attachments.length}
                      </span>
                    )}
                    {/* Card flag indicator */}
                    {card.flag && card.flag > 0 && (() => {
                      const f = CARD_FLAGS.find(fl => fl.id === card.flag);
                      return f ? (
                        <span className={`flex items-center gap-0.5 text-xs ${f.color} ${f.bg} px-1.5 py-0.5 rounded-md`}>
                          <Flag size={10} />
                          {f.label}
                        </span>
                      ) : null;
                    })()}
                  </div>
                </div>
                <div className="flex items-center gap-0.5 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" onClick={e => e.stopPropagation()}>
                  {/* Move up/down */}
                  {sortBy === 'custom' && (
                    <div className="flex flex-col -my-1 mr-0.5">
                      <button
                        onClick={() => moveCard(card.id, 'up')}
                        disabled={index === 0}
                        className="w-6 h-5 flex items-center justify-center text-slate-500 hover:text-white disabled:opacity-20 transition-colors"
                        title="Move up"
                      >
                        <ChevronUp size={13} />
                      </button>
                      <button
                        onClick={() => moveCard(card.id, 'down')}
                        disabled={index === filteredCards.length - 1}
                        className="w-6 h-5 flex items-center justify-center text-slate-500 hover:text-white disabled:opacity-20 transition-colors"
                        title="Move down"
                      >
                        <ChevronDown size={13} />
                      </button>
                    </div>
                  )}
                  <button
                    onClick={() => navigate(`/deck/${id}/card/${card.id}`)}
                    className="w-8 h-8 rounded-lg hover:bg-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                    title={t('action.edit')}
                  >
                    <Edit3 size={14} />
                  </button>
                  <button
                    onClick={() => handleDuplicateCard(card)}
                    className="w-8 h-8 rounded-lg hover:bg-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                    title={t('deckView.duplicate')}
                  >
                    <Copy size={14} />
                  </button>
                  {/* Flag selector */}
                  <div className="relative group/flag">
                    <button
                      className={`w-8 h-8 rounded-lg hover:bg-slate-700/50 flex items-center justify-center transition-colors ${card.flag && card.flag > 0 ? CARD_FLAGS.find(f => f.id === card.flag)!.color : 'text-slate-400 hover:text-white'}`}
                      title="Set flag"
                    >
                      <Flag size={14} fill={card.flag && card.flag > 0 ? 'currentColor' : 'none'} />
                    </button>
                    <div className="fixed-dropdown absolute right-0 bottom-full mb-1 w-36 bg-slate-900 border border-slate-700/60 rounded-xl py-1 z-[60] shadow-2xl hidden group-hover/flag:block">
                      {CARD_FLAGS.map(f => (
                        <button
                          key={f.id}
                          onClick={() => db.cards.update(card.id, { flag: f.id as CardFlag, updatedAt: Date.now() })}
                          className={`w-full flex items-center gap-2 px-3 py-1.5 text-xs hover:bg-slate-700/50 transition-colors ${card.flag === f.id ? 'bg-slate-700/30 font-medium' : ''}`}
                        >
                          <Flag size={10} className={f.color} fill={f.id > 0 ? 'currentColor' : 'none'} />
                          <span className={f.color}>{f.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* Move/Copy to another deck */}
                  <div className="relative group/mv">
                    <button
                      className="w-8 h-8 rounded-lg hover:bg-blue-500/10 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors"
                      title="Move / Copy to deck"
                    >
                      <ArrowRightLeft size={14} />
                    </button>
                    <div className="absolute right-0 bottom-full mb-1 w-44 bg-slate-900 border border-slate-700/60 rounded-xl py-1 z-[60] shadow-2xl max-h-64 overflow-y-auto hidden group-hover/mv:block">
                      <p className="px-3 py-1 text-[9px] text-slate-500 font-medium">Move to...</p>
                      {allDecks?.filter(d => d.id !== id).map(d => (
                        <button
                          key={'mv-' + d.id}
                          onClick={() => moveSingleCard(card, d.id)}
                          className="w-full flex items-center gap-2 px-3 py-1.5 text-xs hover:bg-slate-700/50 transition-colors"
                        >
                          {d.icon} {d.name}
                        </button>
                      ))}
                      <hr className="border-slate-700/40 my-1" />
                      <p className="px-3 py-1 text-[9px] text-slate-500 font-medium">Copy to...</p>
                      {allDecks?.filter(d => d.id !== id).map(d => (
                        <button
                          key={'cp-' + d.id}
                          onClick={() => copySingleCard(card, d.id)}
                          className="w-full flex items-center gap-2 px-3 py-1.5 text-xs hover:bg-slate-700/50 transition-colors"
                        >
                          <CopyIcon size={10} className="text-slate-500" /> {d.icon} {d.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteCard(card.id)}
                    className="w-8 h-8 rounded-lg hover:bg-red-500/10 flex items-center justify-center text-slate-400 hover:text-red-400 transition-colors"
                    title={t('action.delete')}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}

        {/* Infinite scroll sentinel */}
        {visibleCount < filteredCards.length && (
          <div ref={sentinelRef} className="flex items-center justify-center py-6">
            <p className="text-xs text-slate-500">
              Showing {visibleCount} of {filteredCards.length} cards — scroll for more
            </p>
          </div>
        )}
      </div>

      {filteredCards.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400 mb-4">{t('deckView.noCardsYet')}</p>
          <button
            onClick={() => navigate(`/deck/${id}/card/new`)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 font-medium hover:from-primary-500 hover:to-purple-500 transition-all"
          >
            <Plus size={18} className="inline mr-2" />
            {t('deckView.addCard')}
          </button>
        </div>
      )}

      {/* Move/Copy Modal */}
      <AnimatePresence>
        {showMoveModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setShowMoveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700/50 rounded-2xl p-6 max-w-sm w-full shadow-2xl"
            >
              <h3 className="text-lg font-bold mb-1">
                {showMoveModal === 'move' ? 'Move' : 'Copy'} {selectedCards.size} cards
              </h3>
              <p className="text-xs text-slate-400 mb-4">{t('deckView.selectTargetDeck')}</p>
              <div className="space-y-2 mb-5 max-h-60 overflow-y-auto">
                {allDecks?.filter(d => d.id !== id).map(d => (
                  <button
                    key={d.id}
                    onClick={() => setMoveTargetDeck(d.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-left ${
                      moveTargetDeck === d.id
                        ? 'bg-primary-500/20 ring-1 ring-primary-500/40'
                        : 'bg-slate-800/50 hover:bg-slate-700/50'
                    }`}
                  >
                    <span className="text-xl">{d.icon}</span>
                    <span className="text-sm font-medium">{d.name}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowMoveModal(null)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-sm font-medium transition-colors"
                >
                  {t('action.cancel')}
                </button>
                <button
                  onClick={handleBulkMoveOrCopy}
                  disabled={!moveTargetDeck}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-sm font-bold transition-all disabled:opacity-40"
                >
                  {showMoveModal === 'move' ? t('bulk.move') : t('bulk.copy')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Custom Study Modal ── */}
      <AnimatePresence>
        {showCustomStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowCustomStudy(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700/50 rounded-2xl p-6 max-w-md w-full shadow-2xl"
            >
              <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
                <Crosshair size={18} className="text-primary-400" />
                Custom Study Session
              </h3>
              <p className="text-xs text-slate-400 mb-5">Choose a study strategy</p>

              <div className="space-y-2 mb-5">
                {[
                  { key: 'ahead' as const, icon: <FastForward size={16} />, label: 'Study Ahead', desc: 'Review cards not yet due' },
                  { key: 'forgot' as const, icon: <RotateCcw size={16} />, label: 'Review Forgotten', desc: 'Cards you got wrong recently (lapses > 0)' },
                  { key: 'new' as const, icon: <Plus size={16} />, label: 'Increase New Cards', desc: 'Study extra new cards beyond daily limit' },
                  { key: 'tag' as const, icon: <Tag size={16} />, label: 'Study by Tag', desc: 'Focus on cards with a specific tag' },
                  { key: 'all' as const, icon: <Layers size={16} />, label: 'Study All (Cram)', desc: 'Ignore scheduling, review everything' },
                ].map(opt => (
                  <button
                    key={opt.key}
                    onClick={() => setCustomStudyType(opt.key)}
                    className={`w-full flex items-start gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                      customStudyType === opt.key
                        ? 'bg-primary-500/15 ring-1 ring-primary-500/40'
                        : 'bg-slate-800/40 hover:bg-slate-700/40'
                    }`}
                  >
                    <span className={`mt-0.5 ${customStudyType === opt.key ? 'text-primary-400' : 'text-slate-400'}`}>{opt.icon}</span>
                    <div>
                      <p className="text-sm font-medium">{opt.label}</p>
                      <p className="text-[11px] text-slate-500">{opt.desc}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Options */}
              <div className="space-y-3 mb-5">
                <div className="flex items-center justify-between">
                  <label className="text-xs text-slate-400">Card limit</label>
                  <input
                    type="number"
                    value={customStudyLimit}
                    onChange={e => setCustomStudyLimit(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 px-2 py-1.5 rounded-lg bg-slate-800 border border-slate-700/50 text-sm text-center"
                    min={1}
                  />
                </div>

                {customStudyType === 'tag' && (
                  <div className="flex items-center justify-between gap-3">
                    <label className="text-xs text-slate-400 flex-shrink-0">Tag</label>
                    <select
                      value={customStudyTag}
                      onChange={e => setCustomStudyTag(e.target.value)}
                      className="flex-1 px-2 py-1.5 rounded-lg bg-slate-800 border border-slate-700/50 text-sm"
                    >
                      <option value="">Select a tag...</option>
                      {[...new Set((cards || []).flatMap(c => c.tags))].sort().map(tag => (
                        <option key={tag} value={tag}>{tag}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowCustomStudy(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-sm font-medium transition-colors"
                >
                  {t('action.cancel')}
                </button>
                <button
                  onClick={() => {
                    const params = new URLSearchParams();
                    params.set('mode', customStudyType);
                    params.set('limit', String(customStudyLimit));
                    if (customStudyType === 'tag' && customStudyTag) {
                      params.set('tag', customStudyTag);
                    }
                    navigate(`/practice/${id}?${params.toString()}`);
                    setShowCustomStudy(false);
                  }}
                  disabled={customStudyType === 'tag' && !customStudyTag}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-sm font-bold transition-all disabled:opacity-40"
                >
                  Start Custom Study
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { bg: string; text: string; label: string }> = {
    new: { bg: 'bg-blue-500/20', text: 'text-blue-400', label: 'New' },
    learning: { bg: 'bg-orange-500/20', text: 'text-orange-400', label: 'Learning' },
    review: { bg: 'bg-green-500/20', text: 'text-green-400', label: 'Review' },
    relearning: { bg: 'bg-amber-500/20', text: 'text-amber-400', label: 'Relearning' },
    suspended: { bg: 'bg-slate-500/20', text: 'text-slate-400', label: 'Suspended' },
    buried: { bg: 'bg-slate-500/20', text: 'text-slate-500', label: 'Buried' },
  };
  const c = config[status] || config.new;
  return (
    <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${c.bg} ${c.text}`}>
      {c.label}
    </span>
  );
}
