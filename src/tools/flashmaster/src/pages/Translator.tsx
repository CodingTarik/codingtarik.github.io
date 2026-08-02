/**
 * Translator — A Google Translate-style page powered by ChatGPT.
 *
 * Features:
 * - Translate text between many languages
 * - Swap source/target languages
 * - AI-generated rich results: translation, synonyms, examples, grammar notes
 * - One-click flashcard creation from any translation
 * - Translation history within the session
 * - Auto-detect source language
 * - TTS playback for both source and result
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import {
  ArrowLeft, ArrowRightLeft, Languages, Loader, Volume2, Copy,
  Plus, Save, Sparkles, X, ChevronDown, Trash2, BookOpen,
  Clock, Star, Layers, Tag, Check,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../lib/db';
import { chatCompletion, hasOpenAIKey } from '../lib/openai';
import { speak as ttsSpeak } from '../lib/tts';
import { useT } from '../lib/i18n';
import type { Card, Deck } from '../types';
import { DEFAULT_DECK_SETTINGS } from '../types';

// ── Languages ──

const LANGUAGES = [
  { code: 'auto', label: 'Auto-detect', flag: '🔍' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'German', flag: '🇩🇪' },
  { code: 'es', label: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', label: 'French', flag: '🇫🇷' },
  { code: 'it', label: 'Italian', flag: '🇮🇹' },
  { code: 'pt', label: 'Portuguese', flag: '🇵🇹' },
  { code: 'ru', label: 'Russian', flag: '🇷🇺' },
  { code: 'zh', label: 'Chinese', flag: '🇨🇳' },
  { code: 'ja', label: 'Japanese', flag: '🇯🇵' },
  { code: 'ko', label: 'Korean', flag: '🇰🇷' },
  { code: 'ar', label: 'Arabic', flag: '🇸🇦' },
  { code: 'hi', label: 'Hindi', flag: '🇮🇳' },
  { code: 'tr', label: 'Turkish', flag: '🇹🇷' },
  { code: 'nl', label: 'Dutch', flag: '🇳🇱' },
  { code: 'pl', label: 'Polish', flag: '🇵🇱' },
  { code: 'sv', label: 'Swedish', flag: '🇸🇪' },
  { code: 'da', label: 'Danish', flag: '🇩🇰' },
  { code: 'no', label: 'Norwegian', flag: '🇳🇴' },
  { code: 'fi', label: 'Finnish', flag: '🇫🇮' },
  { code: 'el', label: 'Greek', flag: '🇬🇷' },
  { code: 'cs', label: 'Czech', flag: '🇨🇿' },
  { code: 'ro', label: 'Romanian', flag: '🇷🇴' },
  { code: 'hu', label: 'Hungarian', flag: '🇭🇺' },
  { code: 'uk', label: 'Ukrainian', flag: '🇺🇦' },
  { code: 'th', label: 'Thai', flag: '🇹🇭' },
  { code: 'vi', label: 'Vietnamese', flag: '🇻🇳' },
  { code: 'id', label: 'Indonesian', flag: '🇮🇩' },
  { code: 'ms', label: 'Malay', flag: '🇲🇾' },
  { code: 'he', label: 'Hebrew', flag: '🇮🇱' },
  { code: 'fa', label: 'Persian', flag: '🇮🇷' },
];

interface TranslationResult {
  translation: string;
  detectedLang?: string;
  synonyms?: string[];
  examples?: string[];
  grammar?: string;
  formality?: string;
}

interface HistoryEntry {
  id: string;
  sourceText: string;
  sourceLang: string;
  targetLang: string;
  result: TranslationResult;
  timestamp: number;
}

export default function Translator() {
  const navigate = useNavigate();
  const { t } = useT();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const decks = useLiveQuery(() => db.decks.orderBy('name').toArray());

  // Translation state
  const [sourceText, setSourceText] = useState('');
  const [sourceLang, setSourceLang] = useState('auto');
  const [targetLang, setTargetLang] = useState('de');
  const [translating, setTranslating] = useState(false);
  const [result, setResult] = useState<TranslationResult | null>(null);

  // History
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Save to deck
  const [showSave, setShowSave] = useState(false);
  const [selectedDeckId, setSelectedDeckId] = useState('');
  const [newDeckName, setNewDeckName] = useState('');
  const [cardTags, setCardTags] = useState('vocabulary');
  const [saving, setSaving] = useState(false);
  const [cardMode, setCardMode] = useState<'basic' | 'rich'>('rich');

  // Language dropdowns
  const [showSourceLangs, setShowSourceLangs] = useState(false);
  const [showTargetLangs, setShowTargetLangs] = useState(false);
  const [langSearch, setLangSearch] = useState('');

  // ── Translate ──

  const handleTranslate = useCallback(async () => {
    if (!sourceText.trim()) return;
    if (!hasOpenAIKey()) {
      toast.error('Set your OpenAI API key in Settings first');
      return;
    }

    setTranslating(true);
    setResult(null);

    try {
      const srcLabel = LANGUAGES.find(l => l.code === sourceLang)?.label || sourceLang;
      const tgtLabel = LANGUAGES.find(l => l.code === targetLang)?.label || targetLang;

      const isWord = sourceText.trim().split(/\s+/).length <= 3;

      const prompt = `You are an expert translator. Translate the following text${sourceLang === 'auto' ? '' : ` from ${srcLabel}`} to ${tgtLabel}.

Text: "${sourceText.trim()}"

Return a JSON object with these fields:
{
  "translation": "the translated text",
  ${sourceLang === 'auto' ? '"detectedLang": "the detected source language name (e.g. English)",' : ''}
  ${isWord ? '"synonyms": ["2-4 synonyms in the target language"],' : ''}
  ${isWord ? '"examples": ["2 example sentences using the translation in the target language"],' : ''}
  ${isWord ? '"grammar": "brief grammar note (e.g. noun gender, verb conjugation, plural form)",' : ''}
  "formality": "formal/informal/neutral — indicate the register"
}

${!isWord ? 'For longer texts, you can omit synonyms, examples, and grammar.' : ''}
Only return valid JSON, no markdown.`;

      const response = await chatCompletion(
        [{ role: 'user', content: prompt }],
        { temperature: 0.3, maxTokens: 600 }
      );

      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]) as TranslationResult;
        setResult(parsed);

        // Add to history
        const entry: HistoryEntry = {
          id: uuidv4(),
          sourceText: sourceText.trim(),
          sourceLang,
          targetLang,
          result: parsed,
          timestamp: Date.now(),
        };
        setHistory(prev => [entry, ...prev].slice(0, 50));
      } else {
        setResult({ translation: response.trim() });
      }
    } catch (err: any) {
      toast.error(err.message || 'Translation failed');
    } finally {
      setTranslating(false);
    }
  }, [sourceText, sourceLang, targetLang]);

  // Translate on Enter (Ctrl/Cmd+Enter)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleTranslate();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleTranslate]);

  // ── Swap Languages ──

  const handleSwap = () => {
    if (sourceLang === 'auto') {
      // Use detected language if available
      if (result?.detectedLang) {
        const detected = LANGUAGES.find(l =>
          l.label.toLowerCase() === result.detectedLang!.toLowerCase()
        );
        if (detected) setSourceLang(detected.code);
      }
    } else {
      const oldSource = sourceLang;
      setSourceLang(targetLang);
      setTargetLang(oldSource);
    }
    if (result) {
      setSourceText(result.translation);
      setResult(null);
    }
  };

  // ── TTS ──

  const handleSpeak = (text: string) => {
    ttsSpeak(text).catch(() => toast.error('TTS not available'));
  };

  // ── Save as Flashcard ──

  const handleSave = useCallback(async () => {
    if (!result || !sourceText.trim()) return;
    setSaving(true);

    try {
      let deckId = selectedDeckId;

      if (!deckId && newDeckName.trim()) {
        const newDeck: Deck = {
          id: uuidv4(),
          name: newDeckName.trim(),
          description: 'Created from Translator',
          color: '#8b5cf6',
          icon: '🌐',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          settings: DEFAULT_DECK_SETTINGS,
          tags: ['vocabulary', 'translation'],
        };
        await db.decks.put(newDeck);
        deckId = newDeck.id;
        toast.success(`Deck "${newDeckName.trim()}" created`);
      }

      if (!deckId) {
        toast.error('Select or create a deck');
        setSaving(false);
        return;
      }

      const parsedTags = cardTags.split(',').map(t => t.trim()).filter(Boolean);
      const deck = await db.decks.get(deckId);
      const settings = deck?.settings || DEFAULT_DECK_SETTINGS;

      // Build card content
      let backContent: string;
      if (cardMode === 'rich') {
        const parts = [`**${result.translation}**`];
        if (result.grammar) parts.push(`\n_${result.grammar}_`);
        if (result.synonyms?.length) parts.push(`\n**Synonyms:** ${result.synonyms.join(', ')}`);
        if (result.examples?.length) parts.push(`\n**Examples:**\n${result.examples.map(e => `- ${e}`).join('\n')}`);
        backContent = parts.join('\n');
      } else {
        backContent = result.translation;
      }

      const card: Card = {
        id: uuidv4(),
        deckId,
        front: sourceText.trim(),
        back: backContent,
        tags: parsedTags,
        noteType: 'basic',
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

      toast.success('Flashcard created!');
      setShowSave(false);
    } catch (err: any) {
      toast.error(err.message || 'Failed to save');
    } finally {
      setSaving(false);
    }
  }, [result, sourceText, selectedDeckId, newDeckName, cardTags, cardMode]);

  // ── Load from history ──

  const loadFromHistory = (entry: HistoryEntry) => {
    setSourceText(entry.sourceText);
    setSourceLang(entry.sourceLang);
    setTargetLang(entry.targetLang);
    setResult(entry.result);
    setShowHistory(false);
  };

  const getLang = (code: string) => LANGUAGES.find(l => l.code === code);
  const filteredLangs = LANGUAGES.filter(l =>
    l.label.toLowerCase().includes(langSearch.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate('/')} className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Languages size={24} className="text-purple-400" />
            Translator
          </h1>
          <p className="text-xs text-slate-500">AI-powered translation — create flashcards instantly</p>
        </div>
        <button
          onClick={() => setShowHistory(!showHistory)}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
            showHistory ? 'bg-purple-500/20 text-purple-400' : 'bg-slate-800/50 text-slate-400 hover:text-white'
          }`}
          title="Translation history"
        >
          <Clock size={18} />
        </button>
      </div>

      {/* Language Selector Bar */}
      <div className="glass-card rounded-2xl p-3 mb-4">
        <div className="flex items-center gap-2">
          {/* Source language */}
          <div className="relative flex-1">
            <button
              onClick={() => { setShowSourceLangs(!showSourceLangs); setShowTargetLangs(false); setLangSearch(''); }}
              className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors text-sm"
            >
              <span className="text-lg">{getLang(sourceLang)?.flag}</span>
              <span className="flex-1 text-left font-medium">{getLang(sourceLang)?.label}</span>
              <ChevronDown size={14} className="text-slate-500" />
            </button>

            <AnimatePresence>
              {showSourceLangs && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full left-0 right-0 mt-1 bg-slate-800 border border-slate-700/50 rounded-xl shadow-2xl z-20 max-h-60 overflow-hidden flex flex-col"
                >
                  <input
                    type="text"
                    value={langSearch}
                    onChange={e => setLangSearch(e.target.value)}
                    placeholder="Search..."
                    className="px-3 py-2 bg-transparent border-b border-slate-700/50 text-xs focus:outline-none"
                    autoFocus
                  />
                  <div className="overflow-y-auto">
                    {filteredLangs.map(l => (
                      <button
                        key={l.code}
                        onClick={() => { setSourceLang(l.code); setShowSourceLangs(false); setLangSearch(''); }}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-xs hover:bg-slate-700/50 text-left transition-colors ${
                          sourceLang === l.code ? 'bg-primary-500/10 text-primary-400' : ''
                        }`}
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Swap button */}
          <button
            onClick={handleSwap}
            className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:bg-purple-500/10 transition-all hover:rotate-180 duration-300 flex-shrink-0"
            title="Swap languages"
          >
            <ArrowRightLeft size={16} />
          </button>

          {/* Target language */}
          <div className="relative flex-1">
            <button
              onClick={() => { setShowTargetLangs(!showTargetLangs); setShowSourceLangs(false); setLangSearch(''); }}
              className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors text-sm"
            >
              <span className="text-lg">{getLang(targetLang)?.flag}</span>
              <span className="flex-1 text-left font-medium">{getLang(targetLang)?.label}</span>
              <ChevronDown size={14} className="text-slate-500" />
            </button>

            <AnimatePresence>
              {showTargetLangs && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full left-0 right-0 mt-1 bg-slate-800 border border-slate-700/50 rounded-xl shadow-2xl z-20 max-h-60 overflow-hidden flex flex-col"
                >
                  <input
                    type="text"
                    value={langSearch}
                    onChange={e => setLangSearch(e.target.value)}
                    placeholder="Search..."
                    className="px-3 py-2 bg-transparent border-b border-slate-700/50 text-xs focus:outline-none"
                    autoFocus
                  />
                  <div className="overflow-y-auto">
                    {filteredLangs.filter(l => l.code !== 'auto').map(l => (
                      <button
                        key={l.code}
                        onClick={() => { setTargetLang(l.code); setShowTargetLangs(false); setLangSearch(''); }}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-xs hover:bg-slate-700/50 text-left transition-colors ${
                          targetLang === l.code ? 'bg-primary-500/10 text-primary-400' : ''
                        }`}
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Translation Area */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {/* Source */}
        <div className="glass-card rounded-2xl p-4 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-medium text-slate-500">
              {sourceLang === 'auto' ? (result?.detectedLang ? `Detected: ${result.detectedLang}` : 'Source') : getLang(sourceLang)?.label}
            </p>
            <div className="flex items-center gap-1">
              {sourceText && (
                <button onClick={() => handleSpeak(sourceText)} className="w-7 h-7 rounded-md bg-slate-800/40 flex items-center justify-center text-slate-500 hover:text-white transition-colors" title="Listen">
                  <Volume2 size={12} />
                </button>
              )}
              {sourceText && (
                <button onClick={() => { setSourceText(''); setResult(null); }} className="w-7 h-7 rounded-md bg-slate-800/40 flex items-center justify-center text-slate-500 hover:text-red-400 transition-colors">
                  <X size={12} />
                </button>
              )}
            </div>
          </div>
          <textarea
            ref={textareaRef}
            value={sourceText}
            onChange={e => setSourceText(e.target.value)}
            placeholder="Enter text to translate..."
            rows={6}
            className="flex-1 w-full bg-transparent focus:outline-none text-sm resize-none placeholder-slate-600 leading-relaxed min-h-[120px]"
            autoFocus
          />
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/50">
            <span className="text-[10px] text-slate-600">{sourceText.length} chars</span>
            <button
              onClick={handleTranslate}
              disabled={translating || !sourceText.trim()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-sm font-medium hover:from-purple-400 hover:to-indigo-400 transition-all disabled:opacity-40 shadow-lg"
            >
              {translating ? <Loader size={14} className="animate-spin" /> : <Languages size={14} />}
              Translate
            </button>
          </div>
          <p className="text-[9px] text-slate-700 mt-1">Ctrl+Enter to translate</p>
        </div>

        {/* Result */}
        <div className="glass-card rounded-2xl p-4 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-medium text-slate-500">{getLang(targetLang)?.flag} {getLang(targetLang)?.label}</p>
            <div className="flex items-center gap-1">
              {result && (
                <>
                  <button onClick={() => handleSpeak(result.translation)} className="w-7 h-7 rounded-md bg-slate-800/40 flex items-center justify-center text-slate-500 hover:text-white transition-colors" title="Listen">
                    <Volume2 size={12} />
                  </button>
                  <button onClick={() => { navigator.clipboard.writeText(result.translation); toast.success('Copied!'); }} className="w-7 h-7 rounded-md bg-slate-800/40 flex items-center justify-center text-slate-500 hover:text-white transition-colors" title="Copy">
                    <Copy size={12} />
                  </button>
                </>
              )}
            </div>
          </div>

          {translating ? (
            <div className="flex-1 flex items-center justify-center min-h-[120px]">
              <div className="text-center space-y-2">
                <Loader size={24} className="animate-spin text-purple-400 mx-auto" />
                <p className="text-xs text-slate-500">Translating...</p>
              </div>
            </div>
          ) : result ? (
            <div className="flex-1 space-y-3 min-h-[120px]">
              {/* Main translation */}
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{result.translation}</p>

              {result.formality && (
                <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-medium ${
                  result.formality === 'formal' ? 'bg-blue-500/10 text-blue-400' :
                  result.formality === 'informal' ? 'bg-amber-500/10 text-amber-400' :
                  'bg-slate-800/50 text-slate-500'
                }`}>
                  {result.formality}
                </span>
              )}

              {/* Grammar */}
              {result.grammar && (
                <div className="p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/20">
                  <p className="text-[10px] text-slate-500 mb-0.5">Grammar</p>
                  <p className="text-xs text-slate-300">{result.grammar}</p>
                </div>
              )}

              {/* Synonyms */}
              {result.synonyms && result.synonyms.length > 0 && (
                <div>
                  <p className="text-[10px] text-slate-500 mb-1">Synonyms</p>
                  <div className="flex flex-wrap gap-1.5">
                    {result.synonyms.map((syn, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-400 text-xs">{syn}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Examples */}
              {result.examples && result.examples.length > 0 && (
                <div>
                  <p className="text-[10px] text-slate-500 mb-1">Examples</p>
                  <div className="space-y-1">
                    {result.examples.map((ex, i) => (
                      <p key={i} className="text-xs text-slate-400 italic pl-2 border-l-2 border-purple-500/30">{ex}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center min-h-[120px]">
              <p className="text-sm text-slate-600">Translation will appear here</p>
            </div>
          )}

          {/* Save as flashcard */}
          {result && (
            <div className="mt-3 pt-2 border-t border-slate-800/50">
              <button
                onClick={() => setShowSave(!showSave)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary-500/15 text-primary-400 text-sm font-medium hover:bg-primary-500/25 transition-colors"
              >
                <Plus size={14} /> Save as Flashcard
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Save to Deck Panel */}
      <AnimatePresence>
        {showSave && result && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mb-4"
          >
            <div className="glass-card rounded-2xl p-5 space-y-4">
              <h3 className="text-sm font-bold flex items-center gap-2">
                <Save size={14} className="text-primary-400" />
                Save as Flashcard
              </h3>

              {/* Card preview */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/20">
                  <p className="text-[10px] text-slate-500 mb-1">Front</p>
                  <p className="text-sm">{sourceText.slice(0, 100)}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/40 border border-primary-500/20">
                  <p className="text-[10px] text-primary-400 mb-1">Back</p>
                  <p className="text-sm font-medium">{result.translation.slice(0, 100)}</p>
                  {cardMode === 'rich' && result.synonyms && (
                    <p className="text-[10px] text-slate-500 mt-1">+ synonyms, examples...</p>
                  )}
                </div>
              </div>

              {/* Card mode */}
              <div className="flex gap-2">
                <button
                  onClick={() => setCardMode('rich')}
                  className={`flex-1 py-2 rounded-lg text-xs font-medium transition-colors ${
                    cardMode === 'rich' ? 'bg-purple-500/20 text-purple-400 ring-1 ring-purple-500/30' : 'bg-slate-800/40 text-slate-500'
                  }`}
                >
                  <Sparkles size={12} className="inline mr-1" /> Rich (with synonyms, examples)
                </button>
                <button
                  onClick={() => setCardMode('basic')}
                  className={`flex-1 py-2 rounded-lg text-xs font-medium transition-colors ${
                    cardMode === 'basic' ? 'bg-slate-700/50 text-white ring-1 ring-slate-600/30' : 'bg-slate-800/40 text-slate-500'
                  }`}
                >
                  Simple (translation only)
                </button>
              </div>

              {/* Deck selection */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                  <Layers size={12} /> Deck
                </label>
                <select
                  value={selectedDeckId}
                  onChange={e => { setSelectedDeckId(e.target.value); setNewDeckName(''); }}
                  className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm focus:outline-none focus:border-primary-500/50"
                >
                  <option value="">{newDeckName ? `Create: "${newDeckName}"` : 'Select a deck...'}</option>
                  {(decks || []).map(d => (
                    <option key={d.id} value={d.id}>{d.icon} {d.name}</option>
                  ))}
                </select>
                {!selectedDeckId && (
                  <input
                    type="text"
                    value={newDeckName}
                    onChange={e => setNewDeckName(e.target.value)}
                    placeholder="Or type a new deck name..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-800/40 border border-slate-700/40 text-xs focus:outline-none focus:border-primary-500/50"
                  />
                )}
              </div>

              {/* Tags */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                  <Tag size={12} /> Tags
                </label>
                <input
                  type="text"
                  value={cardTags}
                  onChange={e => setCardTags(e.target.value)}
                  placeholder="tag1, tag2..."
                  className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-xs focus:outline-none focus:border-primary-500/50"
                />
              </div>

              {/* Save button */}
              <button
                onClick={handleSave}
                disabled={saving || (!selectedDeckId && !newDeckName.trim())}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 font-medium text-sm disabled:opacity-40 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                {saving ? <Loader size={14} className="animate-spin" /> : <Check size={14} />}
                Create Flashcard
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* History Panel */}
      <AnimatePresence>
        {showHistory && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="glass-card rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold flex items-center gap-2">
                  <Clock size={14} className="text-slate-400" />
                  Recent Translations ({history.length})
                </h3>
                {history.length > 0 && (
                  <button onClick={() => setHistory([])} className="text-[10px] text-slate-600 hover:text-red-400 transition-colors flex items-center gap-1">
                    <Trash2 size={10} /> Clear
                  </button>
                )}
              </div>

              {history.length === 0 ? (
                <p className="text-xs text-slate-600 text-center py-4">No translations yet</p>
              ) : (
                <div className="space-y-1.5 max-h-60 overflow-y-auto">
                  {history.map(entry => (
                    <button
                      key={entry.id}
                      onClick={() => loadFromHistory(entry)}
                      className="w-full text-left p-2.5 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors group"
                    >
                      <div className="flex items-center gap-2 text-[10px] text-slate-600 mb-1">
                        <span>{getLang(entry.sourceLang)?.flag} → {getLang(entry.targetLang)?.flag}</span>
                        <span>{new Date(entry.timestamp).toLocaleTimeString()}</span>
                      </div>
                      <div className="flex gap-3">
                        <p className="text-xs text-slate-400 flex-1 truncate">{entry.sourceText}</p>
                        <p className="text-xs text-primary-400 flex-1 truncate">{entry.result.translation}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
