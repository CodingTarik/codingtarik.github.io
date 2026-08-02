/**
 * Auto Generate Cards Page
 *
 * Upload PDFs/TXTs → extract text (with OCR) → AI generates flashcards →
 * user reviews & selects → add to deck.
 */

import { useState, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import {
  ArrowLeft,
  Upload,
  FileText,
  Loader,
  Sparkles,
  CheckSquare,
  Square,
  Plus,
  Trash2,
  X,
  FileUp,
  Eye,
  ChevronDown,
  ChevronUp,
  Settings,
  Tag,
  Edit3,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../lib/db';
import { hasOpenAIKey } from '../lib/openai';
import { extractFromFiles, type ExtractionProgress } from '../lib/documentExtractor';
import { generateCardsFromText, type GeneratedCard, type GenerationProgress } from '../lib/cardGenerator';
import type { Card } from '../types';
import { DEFAULT_DECK_SETTINGS } from '../types';
import MarkdownRenderer from '../components/MarkdownRenderer';

type Phase = 'upload' | 'extracting' | 'generating' | 'review';

export default function AutoGenerateCards() {
  const { id: deckId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const deck = useLiveQuery(() => (deckId ? db.decks.get(deckId) : undefined), [deckId]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Phase
  const [phase, setPhase] = useState<Phase>('upload');

  // Upload
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);

  // Options
  const [language, setLanguage] = useState('auto');
  const [cardStyle, setCardStyle] = useState<'basic' | 'cloze' | 'mixed'>('basic');
  const [maxCards, setMaxCards] = useState(30);
  const [showOptions, setShowOptions] = useState(false);

  // Progress
  const [extractionProgress, setExtractionProgress] = useState<ExtractionProgress | null>(null);
  const [generationProgress, setGenerationProgress] = useState<GenerationProgress | null>(null);

  // Generated cards
  const [generatedCards, setGeneratedCards] = useState<GeneratedCard[]>([]);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [editingCard, setEditingCard] = useState<string | null>(null);

  // ── File Handling ──

  const handleFileSelect = useCallback((newFiles: FileList | File[]) => {
    const validFiles = Array.from(newFiles).filter(f => {
      const ext = f.name.split('.').pop()?.toLowerCase() || '';
      return ['pdf', 'txt', 'md', 'csv', 'log', 'json', 'xml', 'yaml', 'yml'].includes(ext);
    });

    if (validFiles.length === 0) {
      toast.error('Please upload PDF or text files');
      return;
    }

    setFiles(prev => [...prev, ...validFiles]);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files) {
      handleFileSelect(e.dataTransfer.files);
    }
  }, [handleFileSelect]);

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  // ── Generate Pipeline ──

  const handleGenerate = async () => {
    if (files.length === 0) {
      toast.error('Please add at least one file');
      return;
    }

    try {
      // Phase 1: Extract text
      setPhase('extracting');
      const results = await extractFromFiles(files, setExtractionProgress);

      const combinedText = results
        .filter(r => r.text.trim())
        .map(r => `=== ${r.filename} ===\n\n${r.text}`)
        .join('\n\n---\n\n');

      if (!combinedText.trim()) {
        toast.error('No text could be extracted from the files');
        setPhase('upload');
        return;
      }

      const totalPages = results.reduce((s, r) => s + r.pages, 0);
      const ocrPages = results.reduce((s, r) => s + r.ocrPages, 0);
      if (ocrPages > 0) {
        toast.success(`Extracted text from ${totalPages} pages (${ocrPages} via OCR)`);
      }

      // Phase 2: Generate cards
      setPhase('generating');
      const allCards: GeneratedCard[] = [];

      for (const result of results) {
        if (!result.text.trim()) continue;
        const cards = await generateCardsFromText(result.text, result.filename, {
          language,
          cardStyle,
          maxCards: Math.ceil(maxCards / results.length),
          onProgress: setGenerationProgress,
        });
        allCards.push(...cards);
      }

      if (allCards.length === 0) {
        toast.error('AI could not generate any cards from the text');
        setPhase('upload');
        return;
      }

      // Limit total
      const limited = allCards.slice(0, maxCards);
      setGeneratedCards(limited);
      setPhase('review');
      toast.success(`${limited.length} cards generated!`);
    } catch (err: any) {
      toast.error(`Error: ${err.message}`);
      setPhase('upload');
    }
  };

  // ── Card Selection ──

  const selectedCount = generatedCards.filter(c => c.selected).length;

  const toggleCard = (id: string) => {
    setGeneratedCards(prev =>
      prev.map(c => c.id === id ? { ...c, selected: !c.selected } : c)
    );
  };

  const selectAll = () => {
    setGeneratedCards(prev => prev.map(c => ({ ...c, selected: true })));
  };

  const deselectAll = () => {
    setGeneratedCards(prev => prev.map(c => ({ ...c, selected: false })));
  };

  const removeCard = (id: string) => {
    setGeneratedCards(prev => prev.filter(c => c.id !== id));
  };

  const updateCardText = (id: string, field: 'front' | 'back', value: string) => {
    setGeneratedCards(prev =>
      prev.map(c => c.id === id ? { ...c, [field]: value } : c)
    );
  };

  // ── Add to Deck ──

  const handleAddSelected = async () => {
    const toAdd = generatedCards.filter(c => c.selected);
    if (toAdd.length === 0) {
      toast.error('No cards selected');
      return;
    }

    const deckData = await db.decks.get(deckId!);
    const settings = deckData?.settings || DEFAULT_DECK_SETTINGS;

    const cards: Card[] = toAdd.map(gc => ({
      id: uuidv4(),
      deckId: deckId!,
      front: gc.front,
      back: gc.back,
      tags: gc.tags,
      noteType: gc.front.includes('{{c') ? 'cloze' as const : 'basic' as const,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      status: 'new' as const,
      ease: settings.startingEase,
      interval: 0,
      dueDate: Date.now(),
      lapses: 0,
      reps: 0,
      learningStep: 0,
    }));

    await db.cards.bulkPut(cards);
    toast.success(`${cards.length} cards added to deck!`);
    navigate(`/deck/${deckId}`);
  };

  const handleAddAll = async () => {
    selectAll();
    // Small delay so state updates, then add
    setTimeout(() => handleAddSelected(), 50);
  };

  // ── Render ──

  if (!deck) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader size={24} className="animate-spin text-primary-400" />
      </div>
    );
  }

  if (!hasOpenAIKey()) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center glass-card rounded-2xl p-8">
          <Sparkles size={32} className="mx-auto mb-4 text-purple-400" />
          <h2 className="text-xl font-bold mb-2">AI Card Generator</h2>
          <p className="text-sm text-slate-400 mb-6">
            Requires an OpenAI API key. Go to Settings to add it.
          </p>
          <div className="flex gap-3">
            <button onClick={() => navigate(-1)} className="flex-1 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-sm font-medium transition-colors">
              Go Back
            </button>
            <button onClick={() => navigate('/settings')} className="flex-1 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-sm font-medium transition-all">
              <Settings size={16} className="inline mr-1.5" />
              Settings
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate(`/deck/${deckId}`)}
          className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Sparkles size={20} className="text-purple-400" />
            AI Card Generator
          </h1>
          <p className="text-sm text-slate-400">
            {deck.icon} {deck.name}
          </p>
        </div>
      </div>

      {/* ─── UPLOAD PHASE ─── */}
      {phase === 'upload' && (
        <div className="space-y-5">
          {/* Drop zone */}
          <div
            onDragOver={e => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
              dragOver
                ? 'border-purple-400 bg-purple-500/10'
                : 'border-slate-700/50 hover:border-purple-500/30 hover:bg-slate-800/30'
            }`}
          >
            <FileUp size={40} className="mx-auto mb-3 text-slate-500" />
            <p className="font-medium mb-1">Drop files here or click to browse</p>
            <p className="text-xs text-slate-500">
              Supports PDF, TXT, MD, CSV. Image-PDFs are OCR'd automatically via AI.
            </p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.txt,.md,.csv,.log,.json,.xml,.yaml,.yml"
              onChange={e => { if (e.target.files) handleFileSelect(e.target.files); e.target.value = ''; }}
              className="hidden"
            />
          </div>

          {/* File list */}
          {files.length > 0 && (
            <div className="glass-card rounded-2xl p-4">
              <p className="text-sm font-medium text-slate-300 mb-3">{files.length} file(s) selected</p>
              <div className="space-y-2">
                {files.map((file, i) => (
                  <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-800/40">
                    <FileText size={16} className={file.name.endsWith('.pdf') ? 'text-red-400' : 'text-blue-400'} />
                    <span className="flex-1 text-sm truncate">{file.name}</span>
                    <span className="text-xs text-slate-500">
                      {file.size < 1024 * 1024
                        ? `${(file.size / 1024).toFixed(0)} KB`
                        : `${(file.size / (1024 * 1024)).toFixed(1)} MB`
                      }
                    </span>
                    <button onClick={() => removeFile(i)} className="text-slate-500 hover:text-red-400 transition-colors">
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Options */}
          <div className="glass-card rounded-2xl overflow-hidden">
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium hover:bg-slate-800/30 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Settings size={14} className="text-slate-400" />
                Generation Options
              </span>
              {showOptions ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            <AnimatePresence>
              {showOptions && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4 space-y-4 border-t border-slate-700/30 pt-4">
                    {/* Language */}
                    <div>
                      <label className="text-xs text-slate-400 mb-1.5 block">Language</label>
                      <select
                        value={language}
                        onChange={e => setLanguage(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-sm focus:outline-none focus:border-purple-500/50"
                      >
                        <option value="auto">Auto-detect</option>
                        <option value="English">English</option>
                        <option value="German">Deutsch</option>
                        <option value="French">Français</option>
                        <option value="Spanish">Español</option>
                        <option value="Italian">Italiano</option>
                        <option value="Portuguese">Português</option>
                        <option value="Japanese">日本語</option>
                        <option value="Chinese">中文</option>
                      </select>
                    </div>

                    {/* Card Style */}
                    <div>
                      <label className="text-xs text-slate-400 mb-1.5 block">Card Style</label>
                      <div className="flex gap-2">
                        {[
                          { value: 'basic', label: 'Q&A', desc: 'Question → Answer' },
                          { value: 'cloze', label: 'Cloze', desc: '{{c1::...}} fill-in' },
                          { value: 'mixed', label: 'Mixed', desc: 'Both styles' },
                        ].map(s => (
                          <button
                            key={s.value}
                            onClick={() => setCardStyle(s.value as any)}
                            className={`flex-1 px-3 py-2 rounded-xl text-sm transition-all ${
                              cardStyle === s.value
                                ? 'bg-purple-500/20 text-purple-300 ring-1 ring-purple-500/40'
                                : 'bg-slate-800/50 text-slate-400 hover:text-white'
                            }`}
                          >
                            <p className="font-medium text-xs">{s.label}</p>
                            <p className="text-[10px] text-slate-500">{s.desc}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Max Cards */}
                    <div>
                      <label className="text-xs text-slate-400 mb-1.5 block">Max Cards: {maxCards}</label>
                      <input
                        type="range"
                        min={5}
                        max={100}
                        step={5}
                        value={maxCards}
                        onChange={e => setMaxCards(Number(e.target.value))}
                        className="w-full accent-purple-500"
                      />
                      <div className="flex justify-between text-[10px] text-slate-600">
                        <span>5</span><span>50</span><span>100</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Generate button */}
          <button
            onClick={handleGenerate}
            disabled={files.length === 0}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-primary-600 hover:from-purple-500 hover:to-primary-500 font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg glow-sm disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Sparkles size={22} />
            Generate Flashcards
          </button>
        </div>
      )}

      {/* ─── EXTRACTING PHASE ─── */}
      {phase === 'extracting' && (
        <div className="glass-card rounded-2xl p-8 text-center">
          <Loader size={32} className="mx-auto mb-4 animate-spin text-purple-400" />
          <h3 className="text-lg font-bold mb-2">Extracting Text</h3>
          {extractionProgress && (
            <div className="space-y-2">
              <p className="text-sm text-slate-400">{extractionProgress.message}</p>
              {extractionProgress.totalPages && (
                <div className="w-full max-w-xs mx-auto bg-slate-800/50 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-primary-500 rounded-full transition-all"
                    style={{ width: `${((extractionProgress.currentPage || 0) / extractionProgress.totalPages) * 100}%` }}
                  />
                </div>
              )}
              {extractionProgress.step === 'ocr' && (
                <p className="text-xs text-amber-400 mt-2">
                  Running OCR on image pages via AI Vision...
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* ─── GENERATING PHASE ─── */}
      {phase === 'generating' && (
        <div className="glass-card rounded-2xl p-8 text-center">
          <Sparkles size={32} className="mx-auto mb-4 text-purple-400 animate-pulse" />
          <h3 className="text-lg font-bold mb-2">Generating Flashcards</h3>
          {generationProgress && (
            <div className="space-y-2">
              <p className="text-sm text-slate-400">{generationProgress.message}</p>
              <div className="w-full max-w-xs mx-auto bg-slate-800/50 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-primary-500 rounded-full transition-all"
                  style={{ width: `${(generationProgress.current / Math.max(generationProgress.total, 1)) * 100}%` }}
                />
              </div>
            </div>
          )}
          <p className="text-xs text-slate-500 mt-4">This may take a moment depending on the amount of text...</p>
        </div>
      )}

      {/* ─── REVIEW PHASE ─── */}
      {phase === 'review' && (
        <div className="space-y-4">
          {/* Summary bar */}
          <div className="glass-card rounded-2xl p-4 flex items-center justify-between flex-wrap gap-3">
            <div>
              <p className="text-sm font-medium">{generatedCards.length} cards generated</p>
              <p className="text-xs text-slate-400">{selectedCount} selected</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={selectedCount === generatedCards.length ? deselectAll : selectAll}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/50 text-xs font-medium hover:bg-slate-700/50 transition-colors"
              >
                {selectedCount === generatedCards.length ? <CheckSquare size={14} /> : <Square size={14} />}
                {selectedCount === generatedCards.length ? 'Deselect All' : 'Select All'}
              </button>
            </div>
          </div>

          {/* Card list */}
          <div className="space-y-2">
            {generatedCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.02, 0.5) }}
                className={`glass-card rounded-xl overflow-hidden transition-all ${
                  card.selected ? 'ring-1 ring-purple-500/30' : 'opacity-60'
                }`}
              >
                <div className="flex items-start gap-3 p-4">
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleCard(card.id)}
                    className="mt-0.5 flex-shrink-0"
                  >
                    {card.selected ? (
                      <CheckSquare size={20} className="text-purple-400" />
                    ) : (
                      <Square size={20} className="text-slate-500" />
                    )}
                  </button>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm mb-1">
                      <span className="text-[10px] text-slate-500 mr-2">#{index + 1}</span>
                      {editingCard === card.id ? (
                        <div className="space-y-2 mt-1">
                          <div>
                            <label className="text-[10px] text-slate-500 block mb-0.5">Front</label>
                            <textarea
                              value={card.front}
                              onChange={e => updateCardText(card.id, 'front', e.target.value)}
                              className="w-full px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/40 text-xs focus:outline-none focus:border-purple-500/50 resize-none"
                              rows={3}
                            />
                          </div>
                          <div>
                            <label className="text-[10px] text-slate-500 block mb-0.5">Back</label>
                            <textarea
                              value={card.back}
                              onChange={e => updateCardText(card.id, 'back', e.target.value)}
                              className="w-full px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/40 text-xs focus:outline-none focus:border-purple-500/50 resize-none"
                              rows={3}
                            />
                          </div>
                          <button
                            onClick={() => setEditingCard(null)}
                            className="text-xs text-purple-400 hover:text-purple-300"
                          >
                            Done editing
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="line-clamp-2">
                            <MarkdownRenderer content={card.front} />
                          </div>
                          {expandedCard === card.id && card.back && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              className="mt-2 pt-2 border-t border-slate-700/30"
                            >
                              <p className="text-[10px] text-slate-500 mb-0.5">Answer:</p>
                              <div className="text-slate-400 text-xs">
                                <MarkdownRenderer content={card.back} />
                              </div>
                            </motion.div>
                          )}
                        </>
                      )}
                    </div>

                    {/* Tags */}
                    {card.tags.length > 0 && editingCard !== card.id && (
                      <div className="flex gap-1 mt-1">
                        {card.tags.map(tag => (
                          <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700/50 text-slate-500">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {editingCard !== card.id && (
                      <button
                        onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
                        className="w-7 h-7 rounded-lg hover:bg-slate-700/50 flex items-center justify-center text-slate-500 hover:text-white transition-colors"
                        title="Preview"
                      >
                        <Eye size={13} />
                      </button>
                    )}
                    <button
                      onClick={() => setEditingCard(editingCard === card.id ? null : card.id)}
                      className="w-7 h-7 rounded-lg hover:bg-slate-700/50 flex items-center justify-center text-slate-500 hover:text-white transition-colors"
                      title="Edit"
                    >
                      <Edit3 size={13} />
                    </button>
                    <button
                      onClick={() => removeCard(card.id)}
                      className="w-7 h-7 rounded-lg hover:bg-red-500/10 flex items-center justify-center text-slate-500 hover:text-red-400 transition-colors"
                      title="Remove"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="sticky bottom-20 md:bottom-4 z-40 flex gap-3">
            <button
              onClick={() => { setPhase('upload'); setGeneratedCards([]); }}
              className="flex-1 py-3.5 rounded-xl bg-slate-800/80 backdrop-blur-lg hover:bg-slate-700/80 font-medium text-sm transition-colors"
            >
              Start Over
            </button>
            <button
              onClick={handleAddSelected}
              disabled={selectedCount === 0}
              className="flex-[2] py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-primary-600 hover:from-purple-500 hover:to-primary-500 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg disabled:opacity-40 disabled:cursor-not-allowed backdrop-blur-lg"
            >
              <Plus size={18} />
              Add {selectedCount} Selected Cards
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
