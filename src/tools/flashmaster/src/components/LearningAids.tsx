/**
 * LearningAids — Science-based memory tools for study sessions.
 *
 * Features (each backed by peer-reviewed research):
 *  1. Progressive First-Letter Hints  (Testing Effect / Generation Effect)
 *  2. AI Mnemonic Generator           (Keyword Method — Atkinson & Raugh, 1975)
 *  3. AI Context Sentences             (Levels of Processing — Craik & Lockhart, 1972)
 *  4. AI Visual Keyword                (Dual Coding Theory — Paivio, 1986)
 *  5. AI Etymology                     (Elaborative Interrogation — Pressley et al.)
 *  6. Confidence-Before-Answer         (Metacognitive Monitoring)
 *  7. Rotating Study Tips              (Various learning science principles)
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lightbulb,
  Brain,
  BookOpen,
  Eye,
  Layers,
  Gauge,
  ChevronDown,
  ChevronUp,
  Save,
  Check,
  Sparkles,
  Loader2,
  Info,
} from 'lucide-react';
import type { Card } from '../types';
import { db } from '../lib/db';
import { hasOpenAIKey, chatCompletion } from '../lib/openai';
import { useT } from '../lib/i18n';

// ── Props ──

interface LearningAidsProps {
  card: Card;
  isFlipped: boolean;
  /** Called when user selects confidence level before flipping */
  onConfidenceSelect?: (level: 'low' | 'mid' | 'high') => void;
}

// ── Helpers ──

/** Strip HTML and get plain text from card content */
function plainText(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\{\{c\d+::(.*?)\}\}/g, '$1')
    .trim();
}

/** Generate progressive hint from answer text: show N characters, rest as underscores */
function generateHint(answer: string, revealCount: number): string {
  const clean = plainText(answer);
  if (!clean) return '';
  const words = clean.split(/\s+/);
  let revealed = 0;
  return words.map(word => {
    return word.split('').map(char => {
      if (/[^a-zA-Z0-9äöüÄÖÜß\u00C0-\u024F\u0400-\u04FF\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff]/.test(char)) {
        return char; // Keep punctuation / special chars
      }
      revealed++;
      return revealed <= revealCount ? char : '_';
    }).join('');
  }).join(' ');
}

function countLetters(text: string): number {
  const clean = plainText(text);
  return (clean.match(/[a-zA-Z0-9äöüÄÖÜß\u00C0-\u024F\u0400-\u04FF\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff]/g) || []).length;
}

// ── Study Tips (rotated) ──

const TIP_KEYS = Array.from({ length: 15 }, (_, i) => `aids.tip${i + 1}`);

// ── Component ──

export default function LearningAids({ card, isFlipped, onConfidenceSelect }: LearningAidsProps) {
  const { t } = useT();
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'hint' | 'mnemonic' | 'context' | 'visualize' | 'etymology' | 'tips'>('hint');

  // Hint state
  const [hintLevel, setHintLevel] = useState(0);
  const totalLetters = useMemo(() => countLetters(card.back), [card.back]);

  // AI generation states
  const [mnemonic, setMnemonic] = useState(card.mnemonic || '');
  const [context, setContext] = useState(card.exampleSentence || '');
  const [visual, setVisual] = useState(card.visualKeyword || '');
  const [etymology, setEtymology] = useState(card.etymology || '');
  const [generating, setGenerating] = useState<string | null>(null);
  const [saved, setSaved] = useState<string | null>(null);

  // Confidence before answer
  const [confidenceChosen, setConfidenceChosen] = useState(false);

  // Study tip
  const [tipIndex] = useState(() => Math.floor(Math.random() * TIP_KEYS.length));

  // Reset when card changes
  useEffect(() => {
    setHintLevel(0);
    setMnemonic(card.mnemonic || '');
    setContext(card.exampleSentence || '');
    setVisual(card.visualKeyword || '');
    setEtymology(card.etymology || '');
    setConfidenceChosen(false);
    setSaved(null);
  }, [card.id]);

  const front = useMemo(() => plainText(card.front), [card.front]);
  const back = useMemo(() => plainText(card.back), [card.back]);

  // ── Hint Logic ──
  const revealMore = useCallback(() => {
    setHintLevel(prev => Math.min(prev + Math.max(1, Math.floor(totalLetters / 5)), totalLetters));
  }, [totalLetters]);

  const hintText = useMemo(() => generateHint(card.back, hintLevel), [card.back, hintLevel]);

  // ── AI Generators ──
  const generateAI = useCallback(async (type: 'mnemonic' | 'context' | 'visualize' | 'etymology') => {
    if (!hasOpenAIKey()) return;
    setGenerating(type);
    try {
      const prompts: Record<string, string> = {
        mnemonic: `Create a short, creative, memorable mnemonic or memory hook to remember that "${front}" means "${back}". Use the Keyword Method: find a similar-sounding word in English (or the user's language) and create a vivid, funny, or absurd mental image linking the sound to the meaning. Keep it to 1-2 sentences. Be creative and make it memorable!`,
        context: `Write 2 natural, useful example sentences using the word/phrase "${front}" (which means "${back}"). Each sentence should clearly demonstrate the meaning in a real-world context. Format: numbered list, with the target word in **bold**.`,
        visualize: `Using the Keyword Method (Dual Coding Theory), suggest a vivid mental image that connects "${front}" to its meaning "${back}". Describe a specific, colorful, memorable scene in 2-3 sentences that the learner can visualize to remember this association. Make it unusual, funny, or emotionally engaging — bizarre images stick better!`,
        etymology: `Explain the etymology (word origin) and roots of "${front}" (meaning: "${back}"). Break down the word into its components (prefixes, roots, suffixes) and explain how they connect to the meaning. Include the language of origin. Keep it concise (2-4 sentences). If it's a compound word, explain each part.`,
      };
      const result = await chatCompletion(
        [
          { role: 'system', content: 'You are a language learning assistant specializing in memory techniques. Be concise, creative, and scientifically accurate. Respond in the same language as the user\'s query.' },
          { role: 'user', content: prompts[type] },
        ],
        { temperature: 0.9, maxTokens: 300 }
      );
      switch (type) {
        case 'mnemonic': setMnemonic(result); break;
        case 'context': setContext(result); break;
        case 'visualize': setVisual(result); break;
        case 'etymology': setEtymology(result); break;
      }
    } catch (err) {
      console.error('AI generation failed:', err);
    } finally {
      setGenerating(null);
    }
  }, [front, back]);

  // ── Save to Card ──
  const saveToCard = useCallback(async (field: 'mnemonic' | 'exampleSentence' | 'visualKeyword' | 'etymology', value: string) => {
    await db.cards.update(card.id, { [field]: value, updatedAt: Date.now() });
    setSaved(field);
    setTimeout(() => setSaved(null), 2000);
  }, [card.id]);

  // ── Confidence Handler ──
  const handleConfidence = useCallback((level: 'low' | 'mid' | 'high') => {
    setConfidenceChosen(true);
    onConfidenceSelect?.(level);
  }, [onConfidenceSelect]);

  const hasAI = hasOpenAIKey();

  const tabs = [
    { id: 'hint' as const, icon: Lightbulb, label: t('aids.hint'), color: 'text-amber-400' },
    { id: 'mnemonic' as const, icon: Brain, label: t('aids.mnemonic'), color: 'text-purple-400' },
    { id: 'context' as const, icon: BookOpen, label: t('aids.context'), color: 'text-blue-400' },
    { id: 'visualize' as const, icon: Eye, label: t('aids.visualize'), color: 'text-emerald-400' },
    { id: 'etymology' as const, icon: Layers, label: t('aids.etymology'), color: 'text-cyan-400' },
    { id: 'tips' as const, icon: Info, label: t('aids.tip'), color: 'text-rose-400' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mt-3">
      {/* ── Confidence-Before-Answer (only before flip) ── */}
      <AnimatePresence>
        {!isFlipped && !confidenceChosen && onConfidenceSelect && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-3 p-3 rounded-xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20"
          >
            <div className="flex items-center gap-2 mb-2">
              <Gauge size={14} className="text-indigo-400" />
              <span className="text-xs font-medium text-indigo-300">{t('aids.confidencePrompt')}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleConfidence('low')}
                className="flex-1 py-2 px-3 rounded-lg bg-red-500/15 hover:bg-red-500/25 border border-red-500/20 text-xs font-medium text-red-400 transition-all"
              >
                {t('aids.confidenceLow')}
              </button>
              <button
                onClick={() => handleConfidence('mid')}
                className="flex-1 py-2 px-3 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/20 text-xs font-medium text-amber-400 transition-all"
              >
                {t('aids.confidenceMid')}
              </button>
              <button
                onClick={() => handleConfidence('high')}
                className="flex-1 py-2 px-3 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/20 text-xs font-medium text-emerald-400 transition-all"
              >
                {t('aids.confidenceHigh')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Collapsible Panel ── */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition-all"
      >
        <Sparkles size={14} className="text-purple-400" />
        {t('aids.title')}
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-1 rounded-xl bg-slate-900/60 border border-slate-700/40 backdrop-blur-sm">
              {/* ── Tab Bar ── */}
              <div className="flex items-center gap-0.5 p-1.5 border-b border-slate-700/30 overflow-x-auto scrollbar-thin">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all ${
                      activeTab === tab.id
                        ? `${tab.color} bg-slate-800/80 ring-1 ring-slate-600/50`
                        : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/40'
                    }`}
                  >
                    <tab.icon size={12} />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* ── Tab Content ── */}
              <div className="p-4 min-h-[100px]">
                {/* ═══ HINT ═══ */}
                {activeTab === 'hint' && (
                  <div className="space-y-3">
                    <p className="text-[11px] text-slate-500 italic">
                      Testing Effect — partial cues force deeper retrieval than full answers
                    </p>
                    {hintLevel === 0 ? (
                      <button
                        onClick={revealMore}
                        className="w-full py-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 text-amber-400 font-medium text-sm transition-all flex items-center justify-center gap-2"
                      >
                        <Lightbulb size={16} />
                        {t('aids.hint')} — {t('aids.moreHint')}
                      </button>
                    ) : (
                      <>
                        <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/30 font-mono text-base text-center tracking-wider text-slate-200 leading-relaxed">
                          {hintText}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] text-slate-500">
                            {hintLevel >= totalLetters
                              ? t('aids.hintFull')
                              : `${hintLevel}/${totalLetters} ${t('aids.hintRevealed')}`}
                          </span>
                          {hintLevel < totalLetters && (
                            <button
                              onClick={revealMore}
                              className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 transition-colors"
                            >
                              <Lightbulb size={12} /> {t('aids.moreHint')}
                            </button>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* ═══ MNEMONIC ═══ */}
                {activeTab === 'mnemonic' && (
                  <AIPanel
                    description={t('aids.mnemonicDesc')}
                    science="Keyword Method (Atkinson & Raugh, 1975)"
                    content={mnemonic}
                    generating={generating === 'mnemonic'}
                    hasAI={hasAI}
                    onGenerate={() => generateAI('mnemonic')}
                    onSave={() => saveToCard('mnemonic', mnemonic)}
                    saved={saved === 'mnemonic'}
                    t={t}
                    icon={<Brain size={16} className="text-purple-400" />}
                    panelBg="bg-purple-500/5"
                    panelBorder="border-purple-500/20"
                    btnBg="bg-purple-500/10 hover:bg-purple-500/20"
                    btnBorder="border-purple-500/20"
                  />
                )}

                {/* ═══ CONTEXT ═══ */}
                {activeTab === 'context' && (
                  <AIPanel
                    description={t('aids.contextDesc')}
                    science="Levels of Processing (Craik & Lockhart, 1972)"
                    content={context}
                    generating={generating === 'context'}
                    hasAI={hasAI}
                    onGenerate={() => generateAI('context')}
                    onSave={() => saveToCard('exampleSentence', context)}
                    saved={saved === 'exampleSentence'}
                    t={t}
                    icon={<BookOpen size={16} className="text-blue-400" />}
                    panelBg="bg-blue-500/5"
                    panelBorder="border-blue-500/20"
                    btnBg="bg-blue-500/10 hover:bg-blue-500/20"
                    btnBorder="border-blue-500/20"
                  />
                )}

                {/* ═══ VISUALIZE ═══ */}
                {activeTab === 'visualize' && (
                  <AIPanel
                    description={t('aids.visualizeDesc')}
                    science="Dual Coding Theory (Paivio, 1986)"
                    content={visual}
                    generating={generating === 'visualize'}
                    hasAI={hasAI}
                    onGenerate={() => generateAI('visualize')}
                    onSave={() => saveToCard('visualKeyword', visual)}
                    saved={saved === 'visualKeyword'}
                    t={t}
                    icon={<Eye size={16} className="text-emerald-400" />}
                    panelBg="bg-emerald-500/5"
                    panelBorder="border-emerald-500/20"
                    btnBg="bg-emerald-500/10 hover:bg-emerald-500/20"
                    btnBorder="border-emerald-500/20"
                  />
                )}

                {/* ═══ ETYMOLOGY ═══ */}
                {activeTab === 'etymology' && (
                  <AIPanel
                    description={t('aids.etymologyDesc')}
                    science="Elaborative Interrogation (Pressley et al., 1987)"
                    content={etymology}
                    generating={generating === 'etymology'}
                    hasAI={hasAI}
                    onGenerate={() => generateAI('etymology')}
                    onSave={() => saveToCard('etymology', etymology)}
                    saved={saved === 'etymology'}
                    t={t}
                    icon={<Layers size={16} className="text-cyan-400" />}
                    panelBg="bg-cyan-500/5"
                    panelBorder="border-cyan-500/20"
                    btnBg="bg-cyan-500/10 hover:bg-cyan-500/20"
                    btnBorder="border-cyan-500/20"
                  />
                )}

                {/* ═══ STUDY TIPS ═══ */}
                {activeTab === 'tips' && (
                  <div className="space-y-3">
                    <p className="text-[11px] text-slate-500 italic">
                      {t('aids.tipBased')}
                    </p>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-rose-500/10 to-orange-500/10 border border-rose-500/20">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Info size={16} className="text-rose-400" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-200 leading-relaxed">
                            {t(TIP_KEYS[tipIndex])}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Reusable AI Panel ──

function AIPanel({
  description,
  science,
  content,
  generating,
  hasAI,
  onGenerate,
  onSave,
  saved,
  t,
  icon,
  panelBg,
  panelBorder,
  btnBg,
  btnBorder,
}: {
  description: string;
  science: string;
  content: string;
  generating: boolean;
  hasAI: boolean;
  onGenerate: () => void;
  onSave: () => void;
  saved: boolean;
  t: (key: string) => string;
  icon: React.ReactNode;
  panelBg: string;
  panelBorder: string;
  btnBg: string;
  btnBorder: string;
}) {
  return (
    <div className="space-y-3">
      <p className="text-[11px] text-slate-500 italic">{science}</p>

      {!hasAI ? (
        <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/30 text-center">
          <p className="text-xs text-slate-500">{t('aids.needsAI')}</p>
        </div>
      ) : content ? (
        <div className="space-y-2">
          <div className={`p-4 rounded-xl ${panelBg} border ${panelBorder}`}>
            <div className="flex items-start gap-2.5">
              <div className="mt-0.5 flex-shrink-0">{icon}</div>
              <p className="text-sm text-slate-200 leading-relaxed whitespace-pre-wrap">{content}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onGenerate}
              disabled={generating}
              className="text-xs text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1"
            >
              <Sparkles size={10} /> Regenerate
            </button>
            <button
              onClick={onSave}
              className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 ml-auto"
            >
              {saved ? <><Check size={10} /> {t('aids.saved')}</> : <><Save size={10} /> {t('aids.saveMnemonic')}</>}
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={onGenerate}
          disabled={generating}
          className={`w-full py-3 rounded-xl ${btnBg} border ${btnBorder} text-sm font-medium transition-all flex items-center justify-center gap-2 text-slate-300`}
        >
          {generating ? (
            <><Loader2 size={16} className="animate-spin" /> {t('aids.generating')}</>
          ) : (
            <>{icon} {description}</>
          )}
        </button>
      )}
    </div>
  );
}
