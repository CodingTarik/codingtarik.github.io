/**
 * OpenAI Integration Module
 * Handles API key management, Chat Completions, and TTS for Voice Study Mode.
 */

import type { Card, Rating } from '../types';

const STORAGE_KEY = 'flashmaster_openai_key';
const MODEL_KEY = 'flashmaster_openai_model';
const VOICE_KEY = 'flashmaster_openai_voice';

// ── API Key Management ──

export function getOpenAIKey(): string {
  return localStorage.getItem(STORAGE_KEY) || '';
}

export function setOpenAIKey(key: string): void {
  localStorage.setItem(STORAGE_KEY, key.trim());
}

export function hasOpenAIKey(): boolean {
  return getOpenAIKey().length > 10;
}

export function getOpenAIModel(): string {
  return localStorage.getItem(MODEL_KEY) || 'gpt-4o-mini';
}

export function setOpenAIModel(model: string): void {
  localStorage.setItem(MODEL_KEY, model);
}

export type OpenAIVoice = 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';

export const OPENAI_VOICES: { id: OpenAIVoice; label: string; desc: string }[] = [
  { id: 'nova', label: 'Nova', desc: 'Friendly, warm female voice' },
  { id: 'alloy', label: 'Alloy', desc: 'Balanced, neutral voice' },
  { id: 'echo', label: 'Echo', desc: 'Deep, calm male voice' },
  { id: 'fable', label: 'Fable', desc: 'Expressive, storytelling voice' },
  { id: 'onyx', label: 'Onyx', desc: 'Authoritative, deep voice' },
  { id: 'shimmer', label: 'Shimmer', desc: 'Clear, bright female voice' },
];

export function getOpenAIVoice(): OpenAIVoice {
  return (localStorage.getItem(VOICE_KEY) as OpenAIVoice) || 'nova';
}

export function setOpenAIVoice(voice: OpenAIVoice): void {
  localStorage.setItem(VOICE_KEY, voice);
}

export const OPENAI_MODELS = [
  { id: 'gpt-4o-mini', label: 'GPT-4o Mini (Fast & Cheap)' },
  { id: 'gpt-4o', label: 'GPT-4o (Best Quality)' },
  { id: 'gpt-4.1-mini', label: 'GPT-4.1 Mini' },
  { id: 'gpt-4.1-nano', label: 'GPT-4.1 Nano (Fastest)' },
];

// ── Chat Completions ──

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export async function chatCompletion(
  messages: ChatMessage[],
  options?: { temperature?: number; maxTokens?: number }
): Promise<string> {
  const apiKey = getOpenAIKey();
  if (!apiKey) throw new Error('OpenAI API key not set');

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: getOpenAIModel(),
      messages,
      temperature: options?.temperature ?? 0.7,
      max_tokens: options?.maxTokens ?? 500,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `OpenAI API error: ${response.status}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

// ── OpenAI Whisper (Speech-to-Text) ──

export async function transcribeWithWhisper(audioBlob: Blob, language?: string): Promise<string> {
  const apiKey = getOpenAIKey();
  if (!apiKey) throw new Error('OpenAI API key not set');

  const formData = new FormData();
  formData.append('file', audioBlob, 'audio.webm');
  formData.append('model', 'whisper-1');
  if (language) formData.append('language', language);

  const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Whisper error: ${response.status}`);
  }

  const data = await response.json();
  return data.text || '';
}

// ── OpenAI TTS ──

let currentAudio: HTMLAudioElement | null = null;

export async function speakWithOpenAI(text: string): Promise<void> {
  const apiKey = getOpenAIKey();
  if (!apiKey) throw new Error('OpenAI API key not set');

  stopOpenAISpeech();

  const response = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'tts-1',
      input: text.slice(0, 4096),
      voice: getOpenAIVoice(),
      response_format: 'mp3',
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `TTS error: ${response.status}`);
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  return new Promise((resolve, reject) => {
    currentAudio = new Audio(url);
    currentAudio.onended = () => {
      URL.revokeObjectURL(url);
      currentAudio = null;
      resolve();
    };
    currentAudio.onerror = (e) => {
      URL.revokeObjectURL(url);
      currentAudio = null;
      reject(new Error('Audio playback failed'));
    };
    currentAudio.play().catch(reject);
  });
}

export function stopOpenAISpeech(): void {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = '';
    currentAudio = null;
  }
}

export function isOpenAISpeaking(): boolean {
  return currentAudio !== null && !currentAudio.paused;
}

// ── Voice Study System Prompt ──

// ── Voice Mode Conversation Styles ──

export type VoiceStyle = 'buddy' | 'strict' | 'fun' | 'socratic' | 'motivator' | 'zen';

export const VOICE_STYLES: Record<VoiceStyle, { label: string; icon: string; desc: string; prompt: string }> = {
  buddy: {
    label: 'Study Buddy',
    icon: '🤝',
    desc: 'Friendly, casual, like studying with a friend',
    prompt: `PERSONALITY: You are a chill, encouraging study buddy. Talk casually like a friend.
- Use informal language, contractions, small talk
- Celebrate correct answers enthusiastically ("Nice!", "You got it!")
- When wrong, be kind: "No worries, happens to everyone"
- Add small encouraging remarks between cards
- Keep it light and conversational`,
  },
  strict: {
    label: 'Strict Teacher',
    icon: '🎓',
    desc: 'Direct, no-nonsense, focused on accuracy',
    prompt: `PERSONALITY: You are a strict but fair teacher. Be concise and precise.
- No fluff — state whether the answer is correct/incorrect directly
- Point out specific errors clearly
- Don't sugarcoat mistakes, but stay respectful
- Value precision — partial answers get "hard", not "good"
- Keep feedback to 1-2 sentences max, very efficient`,
  },
  fun: {
    label: 'Fun & Playful',
    icon: '🎉',
    desc: 'Humorous, uses jokes, memes, and wordplay',
    prompt: `PERSONALITY: You are hilarious and make studying fun with humor!
- Use puns, wordplay, and funny analogies related to the topic
- React to wrong answers with humorous (but kind) comments
- Celebrate right answers with over-the-top enthusiasm
- Use pop culture references, funny comparisons
- Throw in study-related jokes between cards
- Make the user SMILE while learning`,
  },
  socratic: {
    label: 'Socratic Guide',
    icon: '🏛️',
    desc: 'Uses questions to guide thinking, never gives answers directly',
    prompt: `PERSONALITY: You are a Socratic teacher who guides through questions.
- When the user is wrong, don't just give the answer — ask guiding questions
- "What if you think about it from this angle…?"
- Help them arrive at the answer themselves when possible
- Ask follow-up questions to deepen understanding
- Only reveal the answer after 1-2 guiding hints
- Focus on WHY something is the answer, not just WHAT`,
  },
  motivator: {
    label: 'Hype Coach',
    icon: '🔥',
    desc: 'High energy, motivational, celebrates every win',
    prompt: `PERSONALITY: You are a high-energy motivational coach!
- PUMP the user up! "LET'S GO!", "You're on FIRE!"
- Track streaks: "That's 3 in a row! UNSTOPPABLE!"
- Use motivational language and sports metaphors
- When wrong: "Shake it off, champion! Next one is yours!"
- Build momentum and hype throughout the session
- Be like a personal trainer, but for the brain`,
  },
  zen: {
    label: 'Calm & Mindful',
    icon: '🧘',
    desc: 'Gentle, patient, encourages reflection',
    prompt: `PERSONALITY: You are a calm, mindful study guide.
- Speak gently and patiently, never rush
- Encourage the user to take a breath and think carefully
- "Take your time… the answer will come to you"
- Relate concepts to broader understanding when possible
- When wrong: "That's okay, every mistake is a lesson"
- Add brief mindful moments: "Pause… let that sink in"
- Emphasize the joy of learning over performance`,
  },
};

export function buildSystemPrompt(cards: Card[], language: string = 'en', style: VoiceStyle = 'buddy'): string {
  const lang = language === 'de' ? 'German' : language === 'en' ? 'English' : language;
  const stylePrompt = VOICE_STYLES[style].prompt;

  return `You are an AI study partner for a flashcard app. You quiz the user using spaced repetition flashcards in a conversational way.

LANGUAGE: Respond in ${lang}. The user may speak in ${lang} or mix languages.

${stylePrompt}

YOUR ROLE:
- You present flashcard questions to the user one at a time
- The user answers verbally (their speech is transcribed)
- You evaluate their answer, give brief feedback, and rate their knowledge
- You can answer follow-up questions briefly, but always steer back to studying
- Keep your responses SHORT (2-4 sentences max for feedback)

RATING SYSTEM:
After the user answers each card, you must include a JSON rating in your response. The rating must be one of:
- "again" — user didn't know it at all or was completely wrong
- "hard" — user partially knew it, struggled significantly 
- "good" — user knew it well with minor mistakes or hesitation
- "easy" — user knew it perfectly and immediately

RESPONSE FORMAT:
Always include exactly one rating block when evaluating an answer:
[RATING:again] or [RATING:hard] or [RATING:good] or [RATING:easy]

When presenting a new card, include:
[NEXT_CARD:index]
where index is the 0-based index of the card you're presenting.

CARD NAVIGATION:
[DONE] — when all cards have been reviewed.

BEHAVIOR:
1. Start by greeting the user briefly and presenting the first card question
2. After the user answers, provide brief feedback + rating
3. Move to the next card
4. If the user asks a question about the topic, answer briefly (1-2 sentences) then continue
5. If the user says something like "skip" or "next", move on with [RATING:hard]
6. If a card has cloze deletions like {{c1::answer}}, ask about the hidden part
7. Do NOT show the full answer before the user attempts — only reveal after their response`;
}

export function buildCardContext(cards: Card[]): string {
  return cards.map((card, i) => {
    let front = card.front;
    let back = card.back;
    // Clean markdown/html for context
    front = front.replace(/[#*_>\[\]`<>]/g, '').trim();
    back = back.replace(/[#*_>\[\]`<>]/g, '').trim();
    return `Card ${i}: Front: "${front}" | Back: "${back}"`;
  }).join('\n');
}

// ── Parse AI Response ──

export function parseRating(text: string): Rating | null {
  const match = text.match(/\[RATING:(again|hard|good|easy)\]/i);
  if (match) return match[1].toLowerCase() as Rating;
  return null;
}

export function parseNextCard(text: string): number | null {
  const match = text.match(/\[NEXT_CARD:(\d+)\]/);
  if (match) return parseInt(match[1], 10);
  return null;
}

export function isDone(text: string): boolean {
  return text.includes('[DONE]');
}

export function cleanResponseForDisplay(text: string): string {
  return text
    .replace(/\[RATING:(again|hard|good|easy)\]/gi, '')
    .replace(/\[NEXT_CARD:\d+\]/g, '')
    .replace(/\[DONE\]/g, '')
    .trim();
}

// ── Speech Recognition (Web Speech API) ──

export function isSpeechRecognitionSupported(): boolean {
  return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
}

export function createSpeechRecognition(lang: string = 'en-US'): SpeechRecognition | null {
  const SpeechRecognitionClass = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  if (!SpeechRecognitionClass) return null;

  const recognition = new SpeechRecognitionClass();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = lang;
  recognition.maxAlternatives = 1;
  return recognition;
}
