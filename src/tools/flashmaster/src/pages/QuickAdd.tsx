/**
 * QuickAdd — Create flashcards directly via URL parameters.
 *
 * Perfect for Apple Intelligence, Siri Shortcuts, browser bookmarklets,
 * Alfred, Raycast, or any automation tool that can open URLs.
 *
 * ── URL Format ──
 * /#/add?front=...&back=...&deck=...&tags=...&type=...&auto=true
 *
 * ── Parameters ──
 * front     (required)  Front text of the card
 * back      (required)  Back text of the card
 * deck      (optional)  Deck name — creates if doesn't exist, uses first match
 * deckId    (optional)  Exact deck ID (takes priority over deck name)
 * tags      (optional)  Comma-separated tags, e.g. "vocab,german"
 * type      (optional)  Card note type: basic | reversed | cloze (default: basic)
 * auto      (optional)  If "true", saves immediately and shows success (no UI)
 * redirect  (optional)  URL or route to redirect after auto-save (e.g. "/" for home)
 * source    (optional)  Label for where the card came from (e.g. "siri", "safari")
 *
 * ── Examples ──
 * /#/add?front=Hello&back=Hallo&deck=German&auto=true
 * /#/add?front=Bonjour&back=Hello&deck=French&tags=greetings&type=basic&auto=true
 * /#/add?front={{c1::Berlin}} is the capital of Germany&type=cloze&deck=Geography
 */

import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import {
  Zap, Check, X, ChevronDown, Plus, Loader, Copy, ExternalLink,
  ArrowLeft, Sparkles, Tag, Layers,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../lib/db';
import { useT } from '../lib/i18n';
import type { Card, Deck, CardNoteType } from '../types';
import { DEFAULT_DECK_SETTINGS } from '../types';

export default function QuickAdd() {
  const navigate = useNavigate();
  const { t } = useT();
  const [params] = useSearchParams();

  // URL params
  const paramFront = params.get('front') || '';
  const paramBack = params.get('back') || '';
  const paramDeck = params.get('deck') || '';
  const paramDeckId = params.get('deckId') || '';
  const paramTags = params.get('tags') || '';
  const paramType = (params.get('type') || 'basic') as CardNoteType;
  const paramAuto = params.get('auto') === 'true';
  const paramRedirect = params.get('redirect') || '';
  const paramSource = params.get('source') || '';

  // Editable state
  const [front, setFront] = useState(paramFront);
  const [back, setBack] = useState(paramBack);
  const [deckName, setDeckName] = useState(paramDeck);
  const [selectedDeckId, setSelectedDeckId] = useState(paramDeckId);
  const [tags, setTags] = useState(paramTags);
  const [noteType, setNoteType] = useState<CardNoteType>(
    ['basic', 'reversed', 'cloze'].includes(paramType) ? paramType : 'basic'
  );
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [autoTriggered, setAutoTriggered] = useState(false);

  const decks = useLiveQuery(() => db.decks.orderBy('name').toArray());

  // ── Resolve or create deck ──
  const resolveDeck = useCallback(async (): Promise<string | null> => {
    // Priority: deckId param > selectedDeckId state > find by name > create new
    if (paramDeckId) {
      const exists = await db.decks.get(paramDeckId);
      if (exists) return paramDeckId;
    }
    if (selectedDeckId) {
      const exists = await db.decks.get(selectedDeckId);
      if (exists) return selectedDeckId;
    }

    const name = deckName.trim();
    if (name) {
      // Try to find by name (case-insensitive)
      const allDecks = await db.decks.toArray();
      const match = allDecks.find(d => d.name.toLowerCase() === name.toLowerCase());
      if (match) return match.id;

      // Create new deck
      const newDeck: Deck = {
        id: uuidv4(),
        name,
        description: paramSource ? `Created from ${paramSource}` : 'Created via Quick Add',
        color: '#6366f1',
        icon: '📝',
        createdAt: Date.now(),
        updatedAt: Date.now(),
        settings: DEFAULT_DECK_SETTINGS,
        tags: [],
      };
      await db.decks.put(newDeck);
      return newDeck.id;
    }

    // Fallback: use first deck
    const first = await db.decks.toCollection().first();
    return first?.id || null;
  }, [paramDeckId, selectedDeckId, deckName, paramSource]);

  // ── Save card ──
  const saveCard = useCallback(async () => {
    if (!front.trim()) {
      toast.error('Front text is required');
      return false;
    }
    if (!back.trim() && noteType !== 'cloze') {
      toast.error('Back text is required');
      return false;
    }

    setSaving(true);
    try {
      const deckId = await resolveDeck();
      if (!deckId) {
        toast.error('No deck available — create one first');
        setSaving(false);
        return false;
      }

      const parsedTags = tags
        .split(',')
        .map(t => t.trim())
        .filter(Boolean);
      if (paramSource && !parsedTags.includes(paramSource)) {
        parsedTags.push(paramSource);
      }

      const deck = await db.decks.get(deckId);
      const settings = deck?.settings || DEFAULT_DECK_SETTINGS;

      const card: Card = {
        id: uuidv4(),
        deckId,
        front: front.trim(),
        back: back.trim(),
        tags: parsedTags,
        noteType,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        status: 'new',
        ease: settings.startingEase,
        interval: 0,
        dueDate: Date.now(),
        lapses: 0,
        reps: 0,
        learningStep: 0,
      };

      await db.cards.put(card);
      setSaved(true);

      const deckLabel = deck?.name || 'deck';
      toast.success(`Card added to "${deckLabel}"!`);

      return true;
    } catch (err: any) {
      toast.error(err.message || 'Failed to save card');
      return false;
    } finally {
      setSaving(false);
    }
  }, [front, back, tags, noteType, resolveDeck, paramSource]);

  // ── Auto-save on mount ──
  useEffect(() => {
    if (paramAuto && paramFront && !autoTriggered) {
      setAutoTriggered(true);
      saveCard().then(success => {
        if (success && paramRedirect) {
          setTimeout(() => navigate(paramRedirect), 1200);
        }
      });
    }
  }, [paramAuto, paramFront, autoTriggered, saveCard, paramRedirect, navigate]);

  // ── Copy URL helper ──
  const currentUrl = window.location.href;
  const buildUrl = () => {
    const base = window.location.origin + window.location.pathname + '#/add';
    const p = new URLSearchParams();
    if (front) p.set('front', front);
    if (back) p.set('back', back);
    if (deckName) p.set('deck', deckName);
    else if (selectedDeckId) p.set('deckId', selectedDeckId);
    if (tags) p.set('tags', tags);
    if (noteType !== 'basic') p.set('type', noteType);
    return `${base}?${p.toString()}`;
  };

  const handleAddAnother = () => {
    setFront('');
    setBack('');
    setSaved(false);
  };

  // ── Auto mode: minimal UI ──
  if (paramAuto) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-card rounded-2xl p-8 max-w-sm w-full text-center"
        >
          {saving ? (
            <div className="space-y-3">
              <Loader size={32} className="animate-spin text-primary-400 mx-auto" />
              <p className="text-sm text-slate-400">Saving card...</p>
            </div>
          ) : saved ? (
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto">
                <Check size={32} className="text-emerald-400" />
              </div>
              <p className="text-lg font-bold text-emerald-400">Card Added!</p>
              <p className="text-sm text-slate-400 break-words">"{front.slice(0, 60)}{front.length > 60 ? '...' : ''}"</p>
              {paramRedirect && <p className="text-xs text-slate-600">Redirecting...</p>}
              {!paramRedirect && (
                <button
                  onClick={() => navigate('/')}
                  className="mt-4 px-4 py-2 rounded-lg bg-slate-800/50 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Go to Dashboard
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center mx-auto">
                <X size={32} className="text-red-400" />
              </div>
              <p className="text-lg font-bold text-red-400">Failed</p>
              <p className="text-sm text-slate-400">Could not save card</p>
              <button
                onClick={() => navigate('/')}
                className="mt-4 px-4 py-2 rounded-lg bg-slate-800/50 text-sm text-slate-400 hover:text-white transition-colors"
              >
                Go to Dashboard
              </button>
            </div>
          )}
        </motion.div>
      </div>
    );
  }

  // ── Manual mode: full editor ──
  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate('/')}
          className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Zap size={20} className="text-amber-400" />
            Quick Add
          </h1>
          <p className="text-xs text-slate-500">
            Create a flashcard via URL — perfect for shortcuts & automations
          </p>
        </div>
      </div>

      {saved ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-8 text-center space-y-4"
        >
          <div className="w-20 h-20 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto">
            <Check size={40} className="text-emerald-400" />
          </div>
          <p className="text-xl font-bold text-emerald-400">Card Saved!</p>
          <p className="text-sm text-slate-400">"{front.slice(0, 80)}"</p>
          <div className="flex gap-2 justify-center pt-2">
            <button
              onClick={handleAddAnother}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary-500/20 text-primary-400 text-sm font-medium hover:bg-primary-500/30 transition-colors"
            >
              <Plus size={16} /> Add Another
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2.5 rounded-xl bg-slate-800/50 text-sm text-slate-400 hover:text-white transition-colors"
            >
              Dashboard
            </button>
          </div>
        </motion.div>
      ) : (
        <div className="space-y-4">
          {/* Source badge */}
          {paramSource && (
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ExternalLink size={12} />
              Source: <span className="text-primary-400 font-medium">{paramSource}</span>
            </div>
          )}

          {/* Front */}
          <div className="glass-card rounded-2xl p-4 space-y-2">
            <label className="text-xs font-medium text-slate-400">Front</label>
            <textarea
              value={front}
              onChange={e => setFront(e.target.value)}
              placeholder="Question / Front side..."
              rows={3}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-sm resize-none transition-colors"
              autoFocus
            />
          </div>

          {/* Back */}
          <div className="glass-card rounded-2xl p-4 space-y-2">
            <label className="text-xs font-medium text-slate-400">Back</label>
            <textarea
              value={back}
              onChange={e => setBack(e.target.value)}
              placeholder="Answer / Back side..."
              rows={3}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-sm resize-none transition-colors"
            />
          </div>

          {/* Deck */}
          <div className="glass-card rounded-2xl p-4 space-y-2">
            <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
              <Layers size={12} /> Deck
            </label>
            <select
              value={selectedDeckId}
              onChange={e => { setSelectedDeckId(e.target.value); setDeckName(''); }}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-sm transition-colors"
            >
              <option value="">
                {deckName ? `Create: "${deckName}"` : 'Select or type new deck name...'}
              </option>
              {(decks || []).map(d => (
                <option key={d.id} value={d.id}>{d.icon} {d.name}</option>
              ))}
            </select>
            {!selectedDeckId && (
              <input
                type="text"
                value={deckName}
                onChange={e => setDeckName(e.target.value)}
                placeholder="Or type a new deck name..."
                className="w-full px-3 py-2 rounded-lg bg-slate-800/40 border border-slate-700/40 focus:border-primary-500/50 focus:outline-none text-xs transition-colors"
              />
            )}
          </div>

          {/* Tags & Type */}
          <div className="grid grid-cols-2 gap-3">
            <div className="glass-card rounded-2xl p-4 space-y-2">
              <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                <Tag size={12} /> Tags
              </label>
              <input
                type="text"
                value={tags}
                onChange={e => setTags(e.target.value)}
                placeholder="tag1, tag2..."
                className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-xs transition-colors"
              />
            </div>
            <div className="glass-card rounded-2xl p-4 space-y-2">
              <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                <Sparkles size={12} /> Type
              </label>
              <select
                value={noteType}
                onChange={e => setNoteType(e.target.value as CardNoteType)}
                className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-xs transition-colors"
              >
                <option value="basic">Basic</option>
                <option value="reversed">Reversed</option>
                <option value="cloze">Cloze</option>
              </select>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={saveCard}
            disabled={saving || !front.trim()}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 font-medium text-sm hover:from-primary-400 hover:to-purple-400 transition-all shadow-lg disabled:opacity-40 flex items-center justify-center gap-2"
          >
            {saving ? <Loader size={16} className="animate-spin" /> : <Zap size={16} />}
            Save Card
          </button>

          {/* URL Helper */}
          <div className="glass-card rounded-2xl p-4 space-y-3">
            <p className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
              <ExternalLink size={12} /> URL Shortcut
            </p>
            <p className="text-[10px] text-slate-600 leading-relaxed">
              Use this URL format in Apple Shortcuts, Siri, Alfred, Raycast, or bookmarklets to add cards instantly:
            </p>
            <div className="bg-slate-800/60 rounded-lg p-2.5 text-[10px] font-mono text-slate-400 break-all leading-relaxed">
              {window.location.origin}{window.location.pathname}#/add?front=<span className="text-primary-400">FRONT</span>&back=<span className="text-emerald-400">BACK</span>&deck=<span className="text-amber-400">DECK</span>&auto=<span className="text-purple-400">true</span>
            </div>
            <div className="text-[10px] text-slate-600 space-y-1">
              <p><span className="text-primary-400 font-medium">front</span> — Question / front text</p>
              <p><span className="text-emerald-400 font-medium">back</span> — Answer / back text</p>
              <p><span className="text-amber-400 font-medium">deck</span> — Deck name (auto-creates if new)</p>
              <p><span className="text-purple-400 font-medium">auto=true</span> — Save immediately without UI</p>
              <p><span className="text-slate-400 font-medium">tags</span> — Comma-separated tags</p>
              <p><span className="text-slate-400 font-medium">type</span> — basic | reversed | cloze</p>
              <p><span className="text-slate-400 font-medium">deckId</span> — Exact deck ID (priority over name)</p>
              <p><span className="text-slate-400 font-medium">redirect</span> — Route after auto-save (e.g. "/")</p>
              <p><span className="text-slate-400 font-medium">source</span> — Label (e.g. "siri", "safari")</p>
            </div>
            {front && (
              <button
                onClick={() => {
                  navigator.clipboard.writeText(buildUrl());
                  toast.success('URL copied!');
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/50 text-[10px] text-slate-400 hover:text-white transition-colors"
              >
                <Copy size={10} /> Copy current URL
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
