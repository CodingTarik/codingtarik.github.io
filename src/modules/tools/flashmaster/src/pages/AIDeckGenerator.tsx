/**
 * AI Deck Generator — Create entire decks from a text prompt using OpenAI.
 */

import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Sparkles, Loader, Plus, Trash2, Check, X,
  CheckSquare, Square, Wand2, BookOpen,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../lib/db';
import { chatCompletion, hasOpenAIKey } from '../lib/openai';
import { DEFAULT_DECK_SETTINGS } from '../types';
import type { Card, Deck } from '../types';
import { useT } from '../lib/i18n';

interface GeneratedCard {
  front: string;
  back: string;
  tags: string[];
  selected: boolean;
}

const EXAMPLE_PROMPTS = [
  'ISO 27001 Information Security',
  'Spanish vocabulary for traveling',
  'JavaScript ES6+ features',
  'Human anatomy – bones and muscles',
  'Machine Learning fundamentals',
  'European history – World War II',
  'Organic chemistry reactions',
  'Music theory basics',
];

export default function AIDeckGenerator() {
  const navigate = useNavigate();
  const { t } = useT();

  const [prompt, setPrompt] = useState('');
  const [cardCount, setCardCount] = useState(20);
  const [language, setLanguage] = useState('English');
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');
  const [generating, setGenerating] = useState(false);
  const [generatedCards, setGeneratedCards] = useState<GeneratedCard[]>([]);
  const [deckName, setDeckName] = useState('');
  const [deckIcon, setDeckIcon] = useState('🤖');
  const [saving, setSaving] = useState(false);
  const [progress, setProgress] = useState(0);

  const generateDeck = useCallback(async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a topic');
      return;
    }
    if (!hasOpenAIKey()) {
      toast.error('Set your OpenAI API key in Settings first');
      return;
    }

    setGenerating(true);
    setProgress(0);
    setGeneratedCards([]);

    try {
      // Generate in batches to handle large card counts and avoid token limits
      const batchSize = Math.min(cardCount, 30);
      const batches = Math.ceil(cardCount / batchSize);
      const allCards: GeneratedCard[] = [];

      for (let batch = 0; batch < batches; batch++) {
        const remaining = cardCount - allCards.length;
        const thisCount = Math.min(batchSize, remaining);
        const offset = allCards.length;

        setProgress(Math.round((batch / batches) * 100));

        const systemPrompt = `You are an expert flashcard creator. Create exactly ${thisCount} high-quality flashcards about the given topic.

Rules:
- Language: ${language}
- Difficulty level: ${difficulty}
- Cards should cover different aspects of the topic
- Front side: clear question or concept
- Back side: concise but complete answer (may include bullet points, examples)
- Tags: 1-3 relevant tags per card
- Cards should be factually accurate
- No duplicate or overlapping cards
${offset > 0 ? `- This is batch ${batch + 1}. You already created ${offset} cards. Create DIFFERENT cards from previous ones, covering new subtopics.` : ''}

Respond ONLY with a valid JSON array. Each element must have:
{ "front": "...", "back": "...", "tags": ["tag1", "tag2"] }

No markdown, no explanation — ONLY the JSON array.`;

        const userMsg = offset > 0
          ? `Topic: "${prompt}"\n\nCreate ${thisCount} more flashcards (cards ${offset + 1}-${offset + thisCount}), covering new aspects not yet covered.`
          : `Topic: "${prompt}"\n\nCreate ${thisCount} flashcards.`;

        const response = await chatCompletion(
          [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMsg },
          ],
          { temperature: 0.8, maxTokens: 4000 }
        );

        // Parse JSON from response (handle potential markdown wrapping)
        let parsed: Array<{ front: string; back: string; tags?: string[] }>;
        try {
          const jsonStr = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
          parsed = JSON.parse(jsonStr);
        } catch {
          // Try to find JSON array in the response
          const match = response.match(/\[[\s\S]*\]/);
          if (match) {
            parsed = JSON.parse(match[0]);
          } else {
            throw new Error('AI response was not valid JSON. Please try again.');
          }
        }

        if (!Array.isArray(parsed)) throw new Error('Expected an array of cards');

        const batchCards: GeneratedCard[] = parsed
          .filter(c => c.front && c.back)
          .map(c => ({
            front: c.front.trim(),
            back: c.back.trim(),
            tags: (c.tags || []).map((t: string) => t.trim()).filter(Boolean),
            selected: true,
          }));

        allCards.push(...batchCards);
        setGeneratedCards([...allCards]);
      }

      setProgress(100);

      // Auto-generate deck name from prompt if not set
      if (!deckName) {
        const shortName = prompt.length > 40 ? prompt.slice(0, 40) + '...' : prompt;
        setDeckName(shortName);
      }

      toast.success(`Generated ${allCards.length} flashcards!`);
    } catch (err: any) {
      console.error('AI deck generation failed:', err);
      toast.error(err.message || 'Generation failed');
    } finally {
      setGenerating(false);
    }
  }, [prompt, cardCount, language, difficulty, deckName]);

  const toggleCard = (index: number) => {
    setGeneratedCards(prev => prev.map((c, i) =>
      i === index ? { ...c, selected: !c.selected } : c
    ));
  };

  const selectAll = () => setGeneratedCards(prev => prev.map(c => ({ ...c, selected: true })));
  const deselectAll = () => setGeneratedCards(prev => prev.map(c => ({ ...c, selected: false })));

  const selectedCount = generatedCards.filter(c => c.selected).length;

  const saveDeck = useCallback(async () => {
    const selected = generatedCards.filter(c => c.selected);
    if (selected.length === 0) {
      toast.error('Select at least one card');
      return;
    }

    setSaving(true);
    try {
      const deckId = uuidv4();
      const newDeck: Deck = {
        id: deckId,
        name: deckName || prompt.slice(0, 50),
        description: `AI-generated deck: ${prompt}`,
        color: getRandomColor(),
        icon: deckIcon,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        settings: { ...DEFAULT_DECK_SETTINGS },
        tags: ['ai-generated'],
      };

      const cards: Card[] = selected.map(c => ({
        id: uuidv4(),
        deckId,
        front: c.front,
        back: c.back,
        tags: c.tags,
        noteType: 'basic' as const,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        status: 'new' as const,
        ease: DEFAULT_DECK_SETTINGS.startingEase,
        interval: 0,
        dueDate: Date.now(),
        lapses: 0,
        reps: 0,
        learningStep: 0,
      }));

      await db.decks.put(newDeck);
      await db.cards.bulkPut(cards);

      toast.success(`Created "${newDeck.name}" with ${cards.length} cards!`);
      navigate(`/deck/${deckId}`);
    } catch (err: any) {
      toast.error(err.message || 'Save failed');
    } finally {
      setSaving(false);
    }
  }, [generatedCards, deckName, deckIcon, prompt, navigate]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate('/')}
          className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <Wand2 size={22} className="text-purple-400" />
            AI Deck Generator
          </h1>
          <p className="text-xs md:text-sm text-slate-400">Create entire flashcard decks with AI</p>
        </div>
      </div>

      {/* Input Section */}
      <div className="glass-card rounded-2xl p-5 mb-6">
        <label className="text-sm font-medium text-slate-300 mb-2 block">
          What do you want to learn?
        </label>
        <textarea
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="e.g. ISO 27001 Information Security Management, Spanish vocabulary for traveling, JavaScript ES6+ features..."
          className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-purple-500/50 focus:outline-none text-white placeholder:text-slate-600 transition-colors resize-none"
          rows={3}
        />

        {/* Example prompts */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {EXAMPLE_PROMPTS.map(ex => (
            <button
              key={ex}
              onClick={() => setPrompt(ex)}
              className="px-2.5 py-1 rounded-lg bg-slate-800/40 text-[10px] text-slate-500 hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
            >
              {ex}
            </button>
          ))}
        </div>

        {/* Options row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
          <div>
            <label className="text-xs text-slate-500 mb-1 block">Number of cards</label>
            <input
              type="number"
              min={5}
              max={100}
              value={cardCount}
              onChange={e => setCardCount(Math.max(5, Math.min(100, Number(e.target.value))))}
              className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm text-white focus:outline-none focus:border-purple-500/50"
            />
          </div>
          <div>
            <label className="text-xs text-slate-500 mb-1 block">Language</label>
            <select
              value={language}
              onChange={e => setLanguage(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm text-white focus:outline-none focus:border-purple-500/50"
            >
              {['English', 'German', 'Spanish', 'French', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Hindi', 'Portuguese', 'Russian', 'Italian', 'Turkish'].map(l => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs text-slate-500 mb-1 block">Difficulty</label>
            <select
              value={difficulty}
              onChange={e => setDifficulty(e.target.value as typeof difficulty)}
              className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm text-white focus:outline-none focus:border-purple-500/50"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Generate button */}
        <button
          onClick={generateDeck}
          disabled={generating || !prompt.trim()}
          className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-primary-600 font-bold text-sm hover:from-purple-500 hover:to-primary-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
        >
          {generating ? (
            <>
              <Loader size={16} className="animate-spin" />
              Generating... {progress > 0 ? `${progress}%` : ''}
            </>
          ) : (
            <>
              <Sparkles size={16} />
              Generate Flashcards
            </>
          )}
        </button>

        {!hasOpenAIKey() && (
          <p className="text-xs text-amber-400 mt-2 text-center">
            Set your OpenAI API key in Settings to use this feature
          </p>
        )}
      </div>

      {/* Generated Cards Preview */}
      <AnimatePresence>
        {generatedCards.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Deck settings */}
            <div className="glass-card rounded-2xl p-5 mb-4">
              <h3 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
                <BookOpen size={14} className="text-primary-400" />
                Deck Settings
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="text-xs text-slate-500 mb-1 block">Deck name</label>
                  <input
                    value={deckName}
                    onChange={e => setDeckName(e.target.value)}
                    placeholder="My Deck"
                    className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm text-white focus:outline-none focus:border-primary-500/50"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">Icon</label>
                  <input
                    value={deckIcon}
                    onChange={e => setDeckIcon(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm text-white text-center focus:outline-none focus:border-primary-500/50"
                    maxLength={2}
                  />
                </div>
              </div>
            </div>

            {/* Cards toolbar */}
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="text-sm text-slate-400">
                {selectedCount} / {generatedCards.length} cards selected
              </span>
              <div className="flex-1" />
              <button
                onClick={selectAll}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800/50 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <CheckSquare size={12} /> All
              </button>
              <button
                onClick={deselectAll}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800/50 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <Square size={12} /> None
              </button>
              <button
                onClick={saveDeck}
                disabled={saving || selectedCount === 0}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-sm font-bold hover:from-emerald-500 hover:to-teal-500 disabled:opacity-40 transition-all"
              >
                {saving ? <Loader size={14} className="animate-spin" /> : <Plus size={14} />}
                Create Deck ({selectedCount} cards)
              </button>
            </div>

            {/* Card list */}
            <div className="space-y-2">
              {generatedCards.map((card, i) => (
                <div
                  key={i}
                  className={`glass-card rounded-xl p-4 transition-all cursor-pointer ${
                    card.selected ? 'border-purple-500/30' : 'opacity-50 border-transparent'
                  }`}
                  onClick={() => toggleCard(i)}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      {card.selected ? (
                        <CheckSquare size={16} className="text-purple-400" />
                      ) : (
                        <Square size={16} className="text-slate-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-200 mb-1">{card.front}</p>
                      <p className="text-xs text-slate-400 line-clamp-3 whitespace-pre-line">{card.back}</p>
                      {card.tags.length > 0 && (
                        <div className="flex gap-1 mt-2">
                          {card.tags.map(tag => (
                            <span key={tag} className="px-1.5 py-0.5 rounded-md bg-slate-700/50 text-[10px] text-slate-500">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-600 flex-shrink-0">#{i + 1}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom save button */}
            {generatedCards.length > 10 && (
              <div className="mt-4 text-center">
                <button
                  onClick={saveDeck}
                  disabled={saving || selectedCount === 0}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 font-bold text-sm hover:from-emerald-500 hover:to-teal-500 disabled:opacity-40 transition-all"
                >
                  {saving ? <Loader size={16} className="animate-spin" /> : <Check size={16} />}
                  Create Deck with {selectedCount} Cards
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function getRandomColor(): string {
  const colors = [
    '#6366f1', '#8b5cf6', '#ec4899', '#f43f5e',
    '#f97316', '#eab308', '#22c55e', '#06b6d4',
    '#3b82f6', '#a855f7', '#14b8a6', '#ef4444',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
