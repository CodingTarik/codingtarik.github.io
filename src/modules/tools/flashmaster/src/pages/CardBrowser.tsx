/**
 * CardBrowser — Global card manager across all decks.
 *
 * Features:
 * - View ALL cards from every deck
 * - Filter by deck, status, tags, leech, search
 * - Sort by date, name, interval, ease
 * - Select cards for bulk operations: move, copy, delete, suspend
 * - Edit inline / navigate to editor
 * - Move / copy single cards between decks
 */

import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import {
  ArrowLeft,
  Search,
  Filter,
  CheckSquare,
  Square,
  Edit3,
  Trash2,
  Copy,
  ArrowRightLeft,
  Ban,
  Tag,
  AlertTriangle,
  Brain,
  Paperclip,
  ChevronDown,
  X,
  SortAsc,
  Layers,
  Flag,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../lib/db';
import type { Card, Deck, CardStatus, CardFlag } from '../types';
import { CARD_FLAGS } from '../types';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { getRetention, getStrengthColor } from '../lib/memoryStrength';
import { useT } from '../lib/i18n';

type SortField = 'createdAt' | 'updatedAt' | 'front' | 'interval' | 'ease' | 'dueDate';
type SortDir = 'asc' | 'desc';

export default function CardBrowser() {
  const navigate = useNavigate();
  const { t } = useT();
  const allCards = useLiveQuery(() => db.cards.toArray());
  const allDecks = useLiveQuery(() => db.decks.toArray());

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDeck, setFilterDeck] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterTag, setFilterTag] = useState<string>('all');
  const [filterFlag, setFilterFlag] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  // Sort
  const [sortField, setSortField] = useState<SortField>('createdAt');
  const [sortDir, setSortDir] = useState<SortDir>('desc');

  // Selection
  const [selectMode, setSelectMode] = useState(false);
  const [selectedCards, setSelectedCards] = useState<Set<string>>(new Set());

  // Move/Copy modal
  const [showMoveModal, setShowMoveModal] = useState<'move' | 'copy' | null>(null);
  const [moveTargetDeck, setMoveTargetDeck] = useState<string>('');

  // All tags
  const allTags = useMemo(() => {
    if (!allCards) return [];
    const tagSet = new Set<string>();
    allCards.forEach(c => c.tags.forEach(t => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, [allCards]);

  // Deck map
  const deckMap = useMemo(() => {
    const map = new Map<string, Deck>();
    allDecks?.forEach(d => map.set(d.id, d));
    return map;
  }, [allDecks]);

  // Filtered + sorted cards
  const filteredCards = useMemo(() => {
    if (!allCards) return [];
    let cards = [...allCards];

    // Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      cards = cards.filter(c =>
        c.front.toLowerCase().includes(q) ||
        c.back.toLowerCase().includes(q) ||
        c.tags.some(t => t.includes(q))
      );
    }

    // Deck filter
    if (filterDeck !== 'all') {
      cards = cards.filter(c => c.deckId === filterDeck);
    }

    // Status filter
    if (filterStatus === 'leech') {
      cards = cards.filter(c => c.isLeech);
    } else if (filterStatus !== 'all') {
      cards = cards.filter(c => c.status === filterStatus);
    }

    // Tag filter
    if (filterTag !== 'all') {
      cards = cards.filter(c => c.tags.includes(filterTag));
    }

    // Flag filter
    if (filterFlag === 'flagged') {
      cards = cards.filter(c => c.flag && c.flag > 0);
    } else if (filterFlag !== 'all') {
      const flagNum = Number(filterFlag);
      cards = cards.filter(c => c.flag === flagNum);
    }

    // Sort
    cards.sort((a, b) => {
      let cmp = 0;
      switch (sortField) {
        case 'front': cmp = a.front.localeCompare(b.front); break;
        case 'createdAt': cmp = a.createdAt - b.createdAt; break;
        case 'updatedAt': cmp = a.updatedAt - b.updatedAt; break;
        case 'interval': cmp = a.interval - b.interval; break;
        case 'ease': cmp = a.ease - b.ease; break;
        case 'dueDate': cmp = a.dueDate - b.dueDate; break;
      }
      return sortDir === 'desc' ? -cmp : cmp;
    });

    return cards;
  }, [allCards, searchQuery, filterDeck, filterStatus, filterTag, filterFlag, sortField, sortDir]);

  // ── Actions ──

  const toggleSelection = (id: string) => {
    setSelectedCards(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectAllVisible = () => setSelectedCards(new Set(filteredCards.map(c => c.id)));
  const deselectAll = () => setSelectedCards(new Set());

  const bulkDelete = async () => {
    if (selectedCards.size === 0) return;
    if (!confirm(`Delete ${selectedCards.size} cards permanently?`)) return;
    await Promise.all([...selectedCards].map(id => db.cards.delete(id)));
    toast.success(`${selectedCards.size} cards deleted`);
    setSelectedCards(new Set());
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

  const handleMoveOrCopy = async () => {
    if (!moveTargetDeck || selectedCards.size === 0) return;
    const targetDeck = deckMap.get(moveTargetDeck);
    if (!targetDeck) return;

    if (showMoveModal === 'move') {
      await Promise.all([...selectedCards].map(id =>
        db.cards.update(id, { deckId: moveTargetDeck, updatedAt: Date.now() })
      ));
      toast.success(`${selectedCards.size} cards moved to "${targetDeck.name}"`);
    } else {
      const originals = await Promise.all([...selectedCards].map(id => db.cards.get(id)));
      const copies = originals.filter(Boolean).map(card => ({
        ...card!,
        id: uuidv4(),
        deckId: moveTargetDeck,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        status: 'new' as const,
        ease: targetDeck.settings.startingEase,
        interval: 0,
        dueDate: Date.now(),
        lapses: 0,
        reps: 0,
        learningStep: 0,
      }));
      await db.cards.bulkPut(copies);
      toast.success(`${copies.length} cards copied to "${targetDeck.name}"`);
    }

    setSelectedCards(new Set());
    setShowMoveModal(null);
    setMoveTargetDeck('');
  };

  const moveSingleCard = async (card: Card, targetDeckId: string) => {
    await db.cards.update(card.id, { deckId: targetDeckId, updatedAt: Date.now() });
    const target = deckMap.get(targetDeckId);
    toast.success(`Moved to "${target?.name}"`);
  };

  const copySingleCard = async (card: Card, targetDeckId: string) => {
    const target = deckMap.get(targetDeckId);
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

  const deleteCard = async (id: string) => {
    await db.cards.delete(id);
    toast.success('Card deleted');
  };

  // ── Render ──

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate('/')}
          className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="text-lg md:text-2xl font-bold flex items-center gap-2">
            <Layers size={20} className="text-primary-400 flex-shrink-0" />
            <span className="truncate">{t('browser.title')}</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-400">{allCards?.length || 0} cards · {allDecks?.length || 0} decks</p>
        </div>
        <button
          onClick={() => { setSelectMode(!selectMode); setSelectedCards(new Set()); }}
          className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
            selectMode ? 'bg-primary-500/20 text-primary-400' : 'bg-slate-800/50 text-slate-400 hover:text-white'
          }`}
        >
          <CheckSquare size={14} className="inline mr-1.5" />
          {selectMode ? t('action.done') : t('action.select')}
        </button>
      </div>

      {/* Search + Filter bar */}
      <div className="flex flex-col gap-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={t('browser.searchAll')}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-sm transition-colors"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-3 py-2.5 rounded-xl text-sm transition-all flex items-center gap-1.5 ${
              showFilters || filterDeck !== 'all' || filterStatus !== 'all' || filterTag !== 'all' || filterFlag !== 'all'
                ? 'bg-primary-500/20 text-primary-400'
                : 'bg-slate-800/50 text-slate-400 hover:text-white'
            }`}
          >
            <Filter size={14} />
            Filter
          </button>
        </div>

        {/* Expanded filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="glass-card rounded-xl p-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                {/* Deck */}
                <div>
                  <label className="text-[10px] text-slate-500 mb-1 block">Deck</label>
                  <select
                    value={filterDeck}
                    onChange={e => setFilterDeck(e.target.value)}
                    className="w-full px-2.5 py-2 rounded-lg bg-slate-800/60 border border-slate-700/40 text-xs focus:outline-none focus:border-primary-500/50"
                  >
                    <option value="all">{t('browser.allDecks')}</option>
                    {allDecks?.map(d => (
                      <option key={d.id} value={d.id}>{d.icon} {d.name}</option>
                    ))}
                  </select>
                </div>

                {/* Status */}
                <div>
                  <label className="text-[10px] text-slate-500 mb-1 block">Status</label>
                  <select
                    value={filterStatus}
                    onChange={e => setFilterStatus(e.target.value)}
                    className="w-full px-2.5 py-2 rounded-lg bg-slate-800/60 border border-slate-700/40 text-xs focus:outline-none focus:border-primary-500/50"
                  >
                    <option value="all">{t('common.all')}</option>
                    <option value="new">{t('status.new')}</option>
                    <option value="learning">{t('status.learning')}</option>
                    <option value="review">{t('status.review')}</option>
                    <option value="suspended">{t('status.suspended')}</option>
                    <option value="buried">{t('status.buried')}</option>
                    <option value="leech">🩸 Leeches</option>
                  </select>
                </div>

                {/* Tag */}
                <div>
                  <label className="text-[10px] text-slate-500 mb-1 block">Tag</label>
                  <select
                    value={filterTag}
                    onChange={e => setFilterTag(e.target.value)}
                    className="w-full px-2.5 py-2 rounded-lg bg-slate-800/60 border border-slate-700/40 text-xs focus:outline-none focus:border-primary-500/50"
                  >
                    <option value="all">{t('browser.allTags')}</option>
                    {allTags.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Flag */}
                <div>
                  <label className="text-[10px] text-slate-500 mb-1 block">Flag</label>
                  <select
                    value={filterFlag}
                    onChange={e => setFilterFlag(e.target.value)}
                    className="w-full px-2.5 py-2 rounded-lg bg-slate-800/60 border border-slate-700/40 text-xs focus:outline-none focus:border-primary-500/50"
                  >
                    <option value="all">{t('browser.allFlags')}</option>
                    <option value="flagged">🚩 Any Flag</option>
                    {CARD_FLAGS.filter(f => f.id > 0).map(f => (
                      <option key={f.id} value={f.id}>{f.label} Flag</option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div>
                  <label className="text-[10px] text-slate-500 mb-1 block">Sort</label>
                  <div className="flex gap-1">
                    <select
                      value={sortField}
                      onChange={e => setSortField(e.target.value as SortField)}
                      className="flex-1 px-2 py-2 rounded-lg bg-slate-800/60 border border-slate-700/40 text-xs focus:outline-none focus:border-primary-500/50"
                    >
                      <option value="createdAt">Created</option>
                      <option value="updatedAt">Updated</option>
                      <option value="front">Name</option>
                      <option value="interval">Interval</option>
                      <option value="ease">Ease</option>
                      <option value="dueDate">Due Date</option>
                    </select>
                    <button
                      onClick={() => setSortDir(d => d === 'asc' ? 'desc' : 'asc')}
                      className="px-2 py-2 rounded-lg bg-slate-800/60 border border-slate-700/40 text-xs hover:bg-slate-700/50 transition-colors"
                      title={sortDir === 'asc' ? 'Ascending' : 'Descending'}
                    >
                      <SortAsc size={14} className={sortDir === 'desc' ? 'rotate-180' : ''} />
                    </button>
                  </div>
                </div>

                {/* Clear */}
                {(filterDeck !== 'all' || filterStatus !== 'all' || filterTag !== 'all' || filterFlag !== 'all') && (
                  <button
                    onClick={() => { setFilterDeck('all'); setFilterStatus('all'); setFilterTag('all'); setFilterFlag('all'); }}
                    className="col-span-2 md:col-span-4 text-xs text-primary-400 hover:text-primary-300 flex items-center justify-center gap-1"
                  >
                    <X size={12} /> Clear all filters
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bulk Toolbar */}
      {selectMode && (
        <div className="mb-4 flex items-center gap-2 flex-wrap glass-card rounded-xl p-3">
          <button
            onClick={selectedCards.size === filteredCards.length ? deselectAll : selectAllVisible}
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
            <Copy size={12} /> {t('bulk.copy')}
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
            onClick={bulkDelete}
            disabled={selectedCards.size === 0}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-red-500/15 text-red-400 text-xs font-medium hover:bg-red-500/25 disabled:opacity-30 transition-colors"
          >
            <Trash2 size={12} /> {t('bulk.delete')}
          </button>
        </div>
      )}

      {/* Results count */}
      <p className="text-xs text-slate-500 mb-3">{filteredCards.length} cards</p>

      {/* Cards List */}
      <div className="space-y-2">
        {filteredCards.map((card, index) => {
          const deck = deckMap.get(card.deckId);
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.01, 0.3) }}
              className="glass-card rounded-xl p-3.5 group"
            >
              <div className="flex items-start gap-2.5">
                {/* Checkbox */}
                {selectMode && (
                  <button onClick={() => toggleSelection(card.id)} className="mt-0.5 flex-shrink-0">
                    {selectedCards.has(card.id) ? (
                      <CheckSquare size={18} className="text-primary-400" />
                    ) : (
                      <Square size={18} className="text-slate-500" />
                    )}
                  </button>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="text-sm line-clamp-2 mb-1.5">
                    <MarkdownRenderer content={card.front} />
                  </div>

                  {/* Meta row */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Deck badge */}
                    {deck && (
                      <span
                        className="flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-medium"
                        style={{ backgroundColor: `${deck.color}20`, color: deck.color }}
                      >
                        {deck.icon} {deck.name}
                      </span>
                    )}
                    <StatusBadge status={card.status} />
                    {card.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-slate-700/50 text-[10px] text-slate-400">
                        <Tag size={8} />{tag}
                      </span>
                    ))}
                    {card.isLeech && (
                      <span className="flex items-center gap-0.5 text-[10px] text-amber-400 bg-amber-500/10 px-1 py-0.5 rounded-md">
                        <AlertTriangle size={8} /> Leech
                      </span>
                    )}
                    {card.status === 'review' && (() => {
                      const r = getRetention(card);
                      return (
                        <span className={`flex items-center gap-0.5 text-[10px] ${getStrengthColor(r)}`}>
                          <Brain size={8} /> {Math.round(r * 100)}%
                        </span>
                      );
                    })()}
                    {card.attachments && card.attachments.length > 0 && (
                      <span className="flex items-center gap-0.5 text-[10px] text-slate-500">
                        <Paperclip size={8} /> {card.attachments.length}
                      </span>
                    )}
                    {/* Flag indicator */}
                    {card.flag && card.flag > 0 && (() => {
                      const f = CARD_FLAGS.find(fl => fl.id === card.flag);
                      return f ? (
                        <span className={`flex items-center gap-0.5 text-[10px] ${f.color} ${f.bg} px-1.5 py-0.5 rounded-md`}>
                          <Flag size={8} /> {f.label}
                        </span>
                      ) : null;
                    })()}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-0.5 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  <button
                    onClick={() => navigate(`/deck/${card.deckId}/card/${card.id}`)}
                    className="w-7 h-7 rounded-lg hover:bg-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                    title={t('action.edit')}
                  >
                    <Edit3 size={13} />
                  </button>

                  {/* Flag dropdown */}
                  <div className="relative group/flag">
                    <button
                      className={`w-7 h-7 rounded-lg hover:bg-slate-700/50 flex items-center justify-center transition-colors ${card.flag && card.flag > 0 ? CARD_FLAGS.find(f => f.id === card.flag)!.color : 'text-slate-400 hover:text-white'}`}
                      title="Set flag"
                    >
                      <Flag size={13} fill={card.flag && card.flag > 0 ? 'currentColor' : 'none'} />
                    </button>
                    <div className="absolute right-0 top-full mt-1 w-32 glass rounded-xl py-1 z-50 shadow-xl hidden group-hover/flag:block">
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

                  {/* Move dropdown */}
                  <div className="relative group/move">
                    <button
                      className="w-7 h-7 rounded-lg hover:bg-blue-500/10 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors"
                      title="Move to deck"
                    >
                      <ArrowRightLeft size={13} />
                    </button>
                    <div className="absolute right-0 top-full mt-1 w-48 glass rounded-xl py-1 z-50 shadow-xl hidden group-hover/move:block">
                      <p className="px-3 py-1 text-[10px] text-slate-500 font-medium">Move to...</p>
                      {allDecks?.filter(d => d.id !== card.deckId).map(d => (
                        <button
                          key={d.id}
                          onClick={() => moveSingleCard(card, d.id)}
                          className="w-full flex items-center gap-2 px-3 py-1.5 text-xs hover:bg-slate-700/50 transition-colors"
                        >
                          <span>{d.icon}</span> {d.name}
                        </button>
                      ))}
                      <hr className="border-slate-700/40 my-1" />
                      <p className="px-3 py-1 text-[10px] text-slate-500 font-medium">Copy to...</p>
                      {allDecks?.filter(d => d.id !== card.deckId).map(d => (
                        <button
                          key={d.id}
                          onClick={() => copySingleCard(card, d.id)}
                          className="w-full flex items-center gap-2 px-3 py-1.5 text-xs hover:bg-slate-700/50 transition-colors"
                        >
                          <Copy size={10} className="text-slate-500" /><span>{d.icon}</span> {d.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => deleteCard(card.id)}
                    className="w-7 h-7 rounded-lg hover:bg-red-500/10 flex items-center justify-center text-slate-400 hover:text-red-400 transition-colors"
                    title={t('action.delete')}
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {filteredCards.length === 0 && (
        <div className="text-center py-16">
          <p className="text-slate-500">{t('browser.noCardsMatch')}</p>
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
              <p className="text-xs text-slate-400 mb-4">Select the target deck:</p>

              <div className="space-y-2 mb-5 max-h-60 overflow-y-auto">
                {allDecks?.map(d => (
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
                  onClick={handleMoveOrCopy}
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
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { bg: string; text: string; label: string }> = {
    new: { bg: 'bg-blue-500/20', text: 'text-blue-400', label: 'New' },
    learning: { bg: 'bg-orange-500/20', text: 'text-orange-400', label: 'Learning' },
    review: { bg: 'bg-green-500/20', text: 'text-green-400', label: 'Review' },
    relearning: { bg: 'bg-amber-500/20', text: 'text-amber-400', label: 'Relearning' },
    suspended: { bg: 'bg-red-500/20', text: 'text-red-400', label: 'Suspended' },
    buried: { bg: 'bg-slate-500/20', text: 'text-slate-400', label: 'Buried' },
  };
  const c = config[status] || config.new;
  return (
    <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-medium ${c.bg} ${c.text}`}>
      {c.label}
    </span>
  );
}
