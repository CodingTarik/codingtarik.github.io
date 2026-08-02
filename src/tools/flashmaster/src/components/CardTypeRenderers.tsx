/**
 * CardTypeRenderers — Shared interactive renderers for special card types.
 * Used in both StudySession and PracticeSession.
 */

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Check, X, Sparkles, Loader, ArrowUp, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Card, Rating } from '../types';
import { chatCompletion, hasOpenAIKey } from '../lib/openai';
import MarkdownRenderer from './MarkdownRenderer';

// ═══════════════════════════════════════════
// Multiple Choice Renderer
// ═══════════════════════════════════════════

interface MCProps {
  card: Card;
  isFlipped: boolean;
  onAnswer: (correct: boolean, suggestedRating: Rating) => void;
}

export function MultipleChoiceRenderer({ card, isFlipped, onAnswer }: MCProps) {
  const choices = card.mcChoices || [];
  const correctIdx = card.mcCorrectIndex ?? 0;
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  // Shuffle choices if enabled
  const shuffledIndices = useMemo(() => {
    const indices = choices.map((_, i) => i);
    if (card.mcShuffle !== false) {
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
    }
    return indices;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [card.id]);

  useEffect(() => {
    setSelectedIdx(null);
    setAnswered(false);
  }, [card.id]);

  const handleSelect = (shuffledPos: number) => {
    if (answered) return;
    const actualIdx = shuffledIndices[shuffledPos];
    setSelectedIdx(shuffledPos);
    setAnswered(true);
    const correct = actualIdx === correctIdx;
    // Small delay before reporting result
    setTimeout(() => {
      onAnswer(correct, correct ? 'good' : 'again');
    }, 800);
  };

  return (
    <div className="w-full space-y-4">
      {/* Question */}
      <div className="text-center">
        <MarkdownRenderer content={card.front} />
        {card.frontImageUrl && <img src={card.frontImageUrl} alt="" className="max-h-48 mx-auto mt-4 rounded-lg" />}
      </div>

      {/* Choices */}
      <div className="grid gap-2 mt-4">
        {shuffledIndices.map((actualIdx, pos) => {
          const isSelected = selectedIdx === pos;
          const isCorrect = actualIdx === correctIdx;
          const showResult = answered;

          let bg = 'bg-slate-800/50 hover:bg-slate-700/50 border-slate-700/50';
          if (showResult && isCorrect) bg = 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300';
          else if (showResult && isSelected && !isCorrect) bg = 'bg-red-500/20 border-red-500/50 text-red-300';
          else if (isSelected) bg = 'bg-primary-500/20 border-primary-500/50';

          return (
            <motion.button
              key={actualIdx}
              onClick={(e) => { e.stopPropagation(); handleSelect(pos); }}
              className={`w-full text-left px-4 py-3 rounded-xl border transition-all flex items-center gap-3 ${bg}`}
              whileTap={!answered ? { scale: 0.98 } : {}}
              disabled={answered}
            >
              <span className="w-7 h-7 rounded-lg bg-slate-700/50 flex items-center justify-center text-xs font-bold flex-shrink-0">
                {String.fromCharCode(65 + pos)}
              </span>
              <span className="flex-1 text-sm">{choices[actualIdx]}</span>
              {showResult && isCorrect && <Check size={16} className="text-emerald-400 flex-shrink-0" />}
              {showResult && isSelected && !isCorrect && <X size={16} className="text-red-400 flex-shrink-0" />}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// AI Dynamic Card Renderer
// ═══════════════════════════════════════════

interface AIDynamicProps {
  card: Card;
  isFlipped: boolean;
  onFlip: () => void;
}

interface AIContent {
  question: string;
  answer: string;
}

export function AIDynamicRenderer({ card, isFlipped, onFlip }: AIDynamicProps) {
  const [aiContent, setAiContent] = useState<AIContent | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateContent = useCallback(async () => {
    if (!hasOpenAIKey()) {
      setError('OpenAI API key required. Set it in Settings.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const systemPrompt = `You are a flashcard question generator. Generate exactly ONE question-answer pair based on the user's prompt. Return JSON only: {"question":"...","answer":"..."}. The question should be clear and the answer concise. Difficulty: ${card.aiDifficulty || 'medium'}. ${card.aiTopic ? `Topic: ${card.aiTopic}.` : ''}`;

      const result = await chatCompletion([
        { role: 'system', content: systemPrompt },
        { role: 'user', content: card.aiPrompt || 'Generate a general knowledge question' },
      ], { temperature: 0.9, maxTokens: 300 });

      // Parse JSON from response
      const jsonMatch = result.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        setAiContent({ question: parsed.question, answer: parsed.answer });
      } else {
        // Fallback: split by newline
        const lines = result.trim().split('\n').filter(l => l.trim());
        setAiContent({
          question: lines[0] || result,
          answer: lines.slice(1).join('\n') || 'See the AI response above.',
        });
      }
    } catch (err: any) {
      setError(err.message || 'Failed to generate content');
    } finally {
      setLoading(false);
    }
  }, [card.id, card.aiPrompt, card.aiTopic, card.aiDifficulty]);

  useEffect(() => {
    setAiContent(null);
    setError('');
    generateContent();
  }, [generateContent]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-3">
        <Loader size={24} className="animate-spin text-purple-400" />
        <p className="text-sm text-slate-400">AI is generating a question...</p>
        <p className="text-[10px] text-slate-600">{card.aiTopic ? `Topic: ${card.aiTopic}` : ''} • {card.aiDifficulty || 'medium'}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 space-y-3">
        <p className="text-sm text-red-400">{error}</p>
        <button
          onClick={(e) => { e.stopPropagation(); generateContent(); }}
          className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 text-sm hover:bg-purple-500/30 transition-colors"
        >
          <Sparkles size={14} className="inline mr-1" /> Retry
        </button>
      </div>
    );
  }

  if (!aiContent) return null;

  return (
    <div className="w-full text-center">
      {!isFlipped ? (
        <>
          <div className="flex items-center justify-center gap-1.5 mb-3">
            <Sparkles size={12} className="text-purple-400" />
            <span className="text-[10px] text-purple-400/70 uppercase tracking-wider font-medium">AI Generated</span>
          </div>
          <MarkdownRenderer content={aiContent.question} />
          <button
            onClick={(e) => { e.stopPropagation(); generateContent(); }}
            className="mt-3 px-3 py-1 rounded-lg bg-purple-500/10 text-purple-400 text-xs hover:bg-purple-500/20 transition-colors"
          >
            <Sparkles size={10} className="inline mr-1" /> New Question
          </button>
        </>
      ) : (
        <>
          <p className="text-xs text-slate-500 mb-2">Answer:</p>
          <MarkdownRenderer content={aiContent.answer} />
        </>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════
// Type-In Renderer
// ═══════════════════════════════════════════

interface TypeInProps {
  card: Card;
  onResult: (correct: boolean, suggestedRating: Rating) => void;
}

export function TypeInRenderer({ card, onResult }: TypeInProps) {
  const [userInput, setUserInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setUserInput('');
    setSubmitted(false);
  }, [card.id]);

  const checkAnswer = () => {
    if (!userInput.trim()) return;
    setSubmitted(true);
    const expected = card.typeInAnswer || card.back;
    const alternatives = card.typeInAcceptAlternatives || [];
    const allAccepted = [expected, ...alternatives];
    const caseSensitive = card.typeInCaseSensitive ?? false;

    const normalize = (s: string) => caseSensitive ? s.trim() : s.trim().toLowerCase();
    const userNorm = normalize(userInput);
    const correct = allAccepted.some(a => normalize(a) === userNorm);
    setIsCorrect(correct);

    setTimeout(() => {
      onResult(correct, correct ? 'good' : 'again');
    }, 1200);
  };

  // Compute diff for visual feedback
  const expected = card.typeInAnswer || card.back;

  return (
    <div className="w-full space-y-4" onClick={e => e.stopPropagation()}>
      <div className="text-center">
        <MarkdownRenderer content={card.front} />
        {card.frontImageUrl && <img src={card.frontImageUrl} alt="" className="max-h-48 mx-auto mt-4 rounded-lg" />}
      </div>

      <div className="space-y-3">
        <input
          type="text"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); checkAnswer(); } }}
          placeholder="Type your answer..."
          className={`w-full px-4 py-3 rounded-xl border text-center text-lg transition-all focus:outline-none ${
            submitted
              ? isCorrect
                ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-300'
                : 'bg-red-500/10 border-red-500/50 text-red-300 line-through'
              : 'bg-slate-800/50 border-slate-700/50 focus:border-primary-500/50'
          }`}
          disabled={submitted}
          autoFocus
        />

        {!submitted ? (
          <button
            onClick={checkAnswer}
            disabled={!userInput.trim()}
            className="w-full py-3 rounded-xl bg-primary-500/20 text-primary-400 font-medium hover:bg-primary-500/30 disabled:opacity-30 transition-all"
          >
            Check Answer
          </button>
        ) : (
          <div className="text-center space-y-2">
            {isCorrect ? (
              <p className="text-emerald-400 font-medium flex items-center justify-center gap-2">
                <Check size={18} /> Correct!
              </p>
            ) : (
              <div>
                <p className="text-red-400 font-medium flex items-center justify-center gap-2 mb-1">
                  <X size={18} /> Incorrect
                </p>
                <p className="text-xs text-slate-400">
                  Correct answer: <span className="text-emerald-400 font-medium">{expected}</span>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// Image Occlusion Renderer
// ═══════════════════════════════════════════

interface IOProps {
  card: Card;
  isFlipped: boolean;
}

export function ImageOcclusionRenderer({ card, isFlipped }: IOProps) {
  const regions = card.ioRegions || [];
  const imageUrl = card.ioImageUrl;

  if (!imageUrl) return <p className="text-sm text-slate-500">No image set.</p>;

  return (
    <div className="w-full space-y-3">
      {card.front && card.front !== 'Image Occlusion' && (
        <div className="text-center mb-2">
          <MarkdownRenderer content={card.front} />
        </div>
      )}
      <div className="relative rounded-xl overflow-hidden">
        <img src={imageUrl} alt="Occlusion" className="w-full" />
        {regions.map((region, i) => (
          <div
            key={region.id}
            className={`absolute transition-all duration-500 ${
              isFlipped
                ? 'bg-transparent border-2 border-emerald-400/60 rounded-sm'
                : 'bg-red-500/80 rounded-sm flex items-center justify-center'
            }`}
            style={{
              left: `${region.x}%`,
              top: `${region.y}%`,
              width: `${region.width}%`,
              height: `${region.height}%`,
            }}
          >
            {!isFlipped && (
              <span className="text-white font-bold text-xs drop-shadow">{i + 1}</span>
            )}
            {isFlipped && region.label && (
              <span className="absolute -bottom-5 left-0 text-[10px] text-emerald-400 font-medium whitespace-nowrap">
                {region.label}
              </span>
            )}
          </div>
        ))}
      </div>
      {isFlipped && regions.some(r => r.label) && (
        <div className="flex flex-wrap gap-2 justify-center mt-2">
          {regions.map((r, i) => r.label ? (
            <span key={r.id} className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-xs">
              {i + 1}. {r.label}
            </span>
          ) : null)}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════
// Ordering Renderer
// ═══════════════════════════════════════════

interface OrderingProps {
  card: Card;
  onAnswer: (correct: boolean, suggestedRating: Rating) => void;
}

export function OrderingRenderer({ card, onAnswer }: OrderingProps) {
  const correctOrder = card.orderItems || [];
  const [items, setItems] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Shuffle on card change
  useEffect(() => {
    const shuffled = [...correctOrder];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setItems(shuffled);
    setSubmitted(false);
    setIsCorrect(false);
  }, [card.id]);

  const moveItem = (from: number, to: number) => {
    if (submitted || to < 0 || to >= items.length) return;
    const next = [...items];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    setItems(next);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const correct = items.every((item, i) => item === correctOrder[i]);
    setIsCorrect(correct);
    setTimeout(() => {
      onAnswer(correct, correct ? 'good' : 'again');
    }, 1000);
  };

  return (
    <div className="w-full space-y-4" onClick={e => e.stopPropagation()}>
      {card.front && (
        <div className="text-center">
          <MarkdownRenderer content={card.front} />
        </div>
      )}

      <div className="space-y-1.5">
        {items.map((item, i) => {
          const isRightPos = submitted && item === correctOrder[i];
          const isWrongPos = submitted && item !== correctOrder[i];
          return (
            <div
              key={`${item}-${i}`}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all ${
                isRightPos ? 'bg-emerald-500/15 border-emerald-500/40' :
                isWrongPos ? 'bg-red-500/10 border-red-500/30' :
                'bg-slate-800/50 border-slate-700/40'
              }`}
            >
              <span className="text-xs text-slate-500 w-5 font-mono">{i + 1}.</span>
              {!submitted && (
                <div className="flex flex-col gap-0.5 mr-1">
                  <button onClick={() => moveItem(i, i - 1)} disabled={i === 0} className="text-slate-600 hover:text-white disabled:opacity-20 transition-colors"><ArrowUp size={10} /></button>
                  <button onClick={() => moveItem(i, i + 1)} disabled={i === items.length - 1} className="text-slate-600 hover:text-white disabled:opacity-20 transition-colors"><ArrowDown size={10} /></button>
                </div>
              )}
              <span className="flex-1 text-sm">{item}</span>
              {isRightPos && <Check size={14} className="text-emerald-400" />}
              {isWrongPos && <X size={14} className="text-red-400" />}
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-xl bg-primary-500/20 text-primary-400 font-medium hover:bg-primary-500/30 transition-all"
        >
          Check Order
        </button>
      ) : (
        <div className="text-center space-y-2">
          {isCorrect ? (
            <p className="text-emerald-400 font-medium flex items-center justify-center gap-2">
              <Check size={18} /> Perfect Order!
            </p>
          ) : (
            <div className="space-y-1">
              <p className="text-red-400 font-medium">Not quite right</p>
              <p className="text-xs text-slate-400">
                Correct: {correctOrder.join(' → ')}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
