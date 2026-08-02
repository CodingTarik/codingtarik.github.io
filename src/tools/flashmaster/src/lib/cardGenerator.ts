/**
 * AI Card Generator
 *
 * Generates flashcards from extracted document text using OpenAI.
 * Produces structured front/back pairs ready to be reviewed and added.
 */

import { getOpenAIKey, getOpenAIModel } from './openai';
import { chunkText } from './documentExtractor';

// ── Types ──

export interface GeneratedCard {
  id: string;
  front: string;
  back: string;
  tags: string[];
  selected: boolean;
  source: string; // filename
}

export interface GenerationProgress {
  step: 'preparing' | 'generating' | 'done';
  current: number;
  total: number;
  message: string;
}

type ProgressCallback = (progress: GenerationProgress) => void;

// ── Main Generator ──

export async function generateCardsFromText(
  text: string,
  filename: string,
  options?: {
    language?: string;
    cardStyle?: 'basic' | 'cloze' | 'mixed';
    maxCards?: number;
    onProgress?: ProgressCallback;
  }
): Promise<GeneratedCard[]> {
  const apiKey = getOpenAIKey();
  if (!apiKey) throw new Error('OpenAI API key not set');

  const lang = options?.language || 'auto';
  const style = options?.cardStyle || 'basic';
  const maxCards = options?.maxCards || 50;
  const onProgress = options?.onProgress;

  // Split text into chunks for processing
  const chunks = chunkText(text, 10000);
  const allCards: GeneratedCard[] = [];
  let cardIdCounter = 0;

  onProgress?.({ step: 'preparing', current: 0, total: chunks.length, message: 'Preparing text...' });

  for (let i = 0; i < chunks.length; i++) {
    onProgress?.({
      step: 'generating',
      current: i + 1,
      total: chunks.length,
      message: `Generating cards from chunk ${i + 1}/${chunks.length}...`,
    });

    const remainingCards = maxCards - allCards.length;
    if (remainingCards <= 0) break;

    const cards = await generateFromChunk(chunks[i], {
      language: lang,
      cardStyle: style,
      maxCards: Math.min(remainingCards, 25),
      filename,
    });

    for (const card of cards) {
      cardIdCounter++;
      allCards.push({
        id: `gen-${cardIdCounter}-${Date.now()}`,
        front: card.front,
        back: card.back,
        tags: card.tags || [],
        selected: true,
        source: filename,
      });
    }
  }

  onProgress?.({ step: 'done', current: chunks.length, total: chunks.length, message: `Generated ${allCards.length} cards!` });

  return allCards;
}

// ── Chunk Processing ──

async function generateFromChunk(
  chunk: string,
  options: {
    language: string;
    cardStyle: string;
    maxCards: number;
    filename: string;
  }
): Promise<{ front: string; back: string; tags?: string[] }[]> {
  const apiKey = getOpenAIKey();

  const styleInstructions = options.cardStyle === 'cloze'
    ? 'Generate CLOZE cards using {{c1::answer}} syntax. The front should contain the full sentence with the key term hidden.'
    : options.cardStyle === 'mixed'
      ? 'Mix between standard Q&A cards and cloze deletion cards ({{c1::answer}} syntax). Use cloze for definitions and terminology, Q&A for concepts.'
      : 'Generate standard Q&A flashcards with a clear question on the front and a concise answer on the back.';

  const langInstruction = options.language === 'auto'
    ? 'Detect the language of the source text and generate cards in that same language.'
    : `Generate cards in ${options.language}.`;

  const systemPrompt = `You are an expert flashcard creator. Your job is to extract the most important facts, concepts, definitions, and relationships from the provided text and turn them into effective flashcards for spaced repetition learning.

RULES:
1. ${styleInstructions}
2. ${langInstruction}
3. Create at most ${options.maxCards} cards from this text.
4. Each card should test ONE concept or fact.
5. Keep fronts concise (question or prompt). Keep backs focused (direct answer).
6. Use Markdown formatting where helpful (bold for key terms, code blocks for code, math notation like $formula$ for formulas).
7. Add 1-2 relevant tags per card (lowercase, topic-based).
8. Avoid trivial or overly obvious cards.
9. For formulas, use LaTeX: $E = mc^2$.
10. Do NOT include the source filename or page numbers in the cards.

OUTPUT FORMAT:
Return a JSON array only (no markdown code fences, no explanation). Each element:
{"front": "...", "back": "...", "tags": ["tag1", "tag2"]}

Example:
[{"front": "What is the mitochondria?", "back": "The **mitochondria** is the powerhouse of the cell, responsible for producing ATP through cellular respiration.", "tags": ["biology", "cell"]},{"front": "{{c1::Photosynthesis}} converts light energy into chemical energy in plants.", "back": "", "tags": ["biology", "photosynthesis"]}]`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: getOpenAIModel(),
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Source: ${options.filename}\n\n${chunk}` },
      ],
      temperature: 0.5,
      max_tokens: 4096,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `API error: ${response.status}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content || '';

  // Parse the JSON response
  try {
    // Remove potential markdown code fences
    const cleaned = content.replace(/^```json?\s*\n?/i, '').replace(/\n?```\s*$/i, '').trim();
    const parsed = JSON.parse(cleaned);

    if (Array.isArray(parsed)) {
      return parsed.filter((c: any) => c.front && typeof c.front === 'string').map((c: any) => ({
        front: String(c.front).trim(),
        back: String(c.back || '').trim(),
        tags: Array.isArray(c.tags) ? c.tags.map(String) : [],
      }));
    }
  } catch (parseErr) {
    console.warn('Failed to parse AI response as JSON:', parseErr);
    // Try to extract JSON array from the response
    const jsonMatch = content.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[0]);
        if (Array.isArray(parsed)) {
          return parsed.filter((c: any) => c.front).map((c: any) => ({
            front: String(c.front).trim(),
            back: String(c.back || '').trim(),
            tags: Array.isArray(c.tags) ? c.tags.map(String) : [],
          }));
        }
      } catch {
        // give up
      }
    }
  }

  return [];
}
