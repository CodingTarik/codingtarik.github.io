/**
 * Text-to-Speech Module
 * Uses Web Speech API with preference for natural-sounding voices
 */

// ── Settings ──

const TTS_ENABLED_KEY = 'flashmaster-tts-enabled';
const TTS_AUTOPLAY_KEY = 'flashmaster-tts-autoplay';
const TTS_LANG_KEY = 'flashmaster-tts-lang';
const TTS_RATE_KEY = 'flashmaster-tts-rate';

export function isTTSEnabled(): boolean {
  return localStorage.getItem(TTS_ENABLED_KEY) !== 'false';
}
export function setTTSEnabled(v: boolean): void {
  localStorage.setItem(TTS_ENABLED_KEY, String(v));
}

export function isTTSAutoPlay(): boolean {
  return localStorage.getItem(TTS_AUTOPLAY_KEY) === 'true';
}
export function setTTSAutoPlay(v: boolean): void {
  localStorage.setItem(TTS_AUTOPLAY_KEY, String(v));
}

export function getTTSLang(): string {
  return localStorage.getItem(TTS_LANG_KEY) || '';
}
export function setTTSLang(v: string): void {
  localStorage.setItem(TTS_LANG_KEY, v);
}

export function getTTSRate(): number {
  const v = localStorage.getItem(TTS_RATE_KEY);
  return v ? parseFloat(v) : 0.9;
}
export function setTTSRate(v: number): void {
  localStorage.setItem(TTS_RATE_KEY, String(v));
}

// ── Voice selection ──

let cachedVoices: SpeechSynthesisVoice[] = [];

function loadVoices(): SpeechSynthesisVoice[] {
  if (!('speechSynthesis' in window)) return [];
  cachedVoices = speechSynthesis.getVoices();
  return cachedVoices;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  speechSynthesis.onvoiceschanged = () => { loadVoices(); };
  loadVoices();
}

export function getAvailableVoices(): SpeechSynthesisVoice[] {
  if (cachedVoices.length === 0) loadVoices();
  return cachedVoices;
}

/**
 * Prioritize natural-sounding voices.
 * Premium/Enhanced voices from Google, Microsoft, Apple tend to sound best.
 */
function scoreVoice(v: SpeechSynthesisVoice): number {
  let score = 0;
  const name = v.name.toLowerCase();
  const lang = v.lang.toLowerCase();

  // Prefer local (higher quality) voices
  if (v.localService) score += 5;

  // Premium voices keywords
  if (name.includes('enhanced')) score += 20;
  if (name.includes('premium')) score += 20;
  if (name.includes('natural')) score += 15;
  if (name.includes('neural')) score += 15;
  if (name.includes('wavenet')) score += 12;

  // Good quality voice engines
  if (name.includes('google')) score += 8;
  if (name.includes('microsoft')) score += 8;
  if (name.includes('samantha')) score += 10; // Apple high-quality
  if (name.includes('daniel')) score += 10;
  if (name.includes('karen')) score += 10;
  if (name.includes('moira')) score += 10;
  if (name.includes('tessa')) score += 10;
  if (name.includes('anna')) score += 8; // German
  if (name.includes('thomas')) score += 8;
  if (name.includes('amélie')) score += 8; // French
  if (name.includes('monica')) score += 8; // Spanish

  // Penalize robotic/compact voices
  if (name.includes('compact')) score -= 10;
  if (name.includes('espeak')) score -= 15;

  return score;
}

/**
 * Get the best voice for a language code.
 * Falls back to any available voice if no match.
 */
export function getBestVoice(langCode?: string): SpeechSynthesisVoice | null {
  const voices = getAvailableVoices();
  if (voices.length === 0) return null;

  const code = langCode || getTTSLang();

  // Filter by language if specified
  let candidates = voices;
  if (code) {
    const prefix = code.split('-')[0].toLowerCase();
    const exact = voices.filter(v => v.lang.toLowerCase() === code.toLowerCase());
    const partial = voices.filter(v => v.lang.toLowerCase().startsWith(prefix));
    candidates = exact.length > 0 ? exact : partial.length > 0 ? partial : voices;
  }

  // Sort by quality score
  candidates.sort((a, b) => scoreVoice(b) - scoreVoice(a));
  return candidates[0] || null;
}

export function getVoicesForLang(lang: string): SpeechSynthesisVoice[] {
  const voices = getAvailableVoices();
  if (!lang) return voices;
  const prefix = lang.split('-')[0].toLowerCase();
  return voices.filter(v => v.lang.toLowerCase().startsWith(prefix));
}

export const POPULAR_LANGUAGES = [
  { code: '', label: 'Auto-detect' },
  { code: 'en-US', label: 'English (US)' },
  { code: 'en-GB', label: 'English (UK)' },
  { code: 'de-DE', label: 'Deutsch' },
  { code: 'fr-FR', label: 'Français' },
  { code: 'es-ES', label: 'Español' },
  { code: 'it-IT', label: 'Italiano' },
  { code: 'pt-BR', label: 'Português (BR)' },
  { code: 'ja-JP', label: '日本語' },
  { code: 'ko-KR', label: '한국어' },
  { code: 'zh-CN', label: '中文 (简体)' },
  { code: 'ru-RU', label: 'Русский' },
  { code: 'ar-SA', label: 'العربية' },
  { code: 'tr-TR', label: 'Türkçe' },
  { code: 'nl-NL', label: 'Nederlands' },
  { code: 'pl-PL', label: 'Polski' },
  { code: 'sv-SE', label: 'Svenska' },
];

// ── Strip markdown ──

function stripMarkdown(text: string): string {
  return text
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\*{1,3}([^*]+)\*{1,3}/g, '$1')
    .replace(/_{1,3}([^_]+)_{1,3}/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^>\s+/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// ── Speaking ──

export function stopTTS(): void {
  if ('speechSynthesis' in window) speechSynthesis.cancel();
}

export function isSpeaking(): boolean {
  return 'speechSynthesis' in window && speechSynthesis.speaking;
}

export function isTTSSupported(): boolean {
  return 'speechSynthesis' in window;
}

/**
 * Speak the given text using the best available voice.
 */
export function speak(text: string, lang?: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!isTTSSupported()) {
      reject(new Error('TTS not supported'));
      return;
    }

    speechSynthesis.cancel();

    const cleaned = stripMarkdown(text);
    if (!cleaned) { resolve(); return; }

    const utterance = new SpeechSynthesisUtterance(cleaned);
    const langCode = lang || getTTSLang();
    if (langCode) utterance.lang = langCode;

    const voice = getBestVoice(langCode);
    if (voice) utterance.voice = voice;

    utterance.rate = getTTSRate();
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    utterance.onend = () => resolve();
    utterance.onerror = (e) => {
      if (e.error === 'interrupted' || e.error === 'canceled') resolve();
      else reject(e);
    };

    speechSynthesis.speak(utterance);
  });
}

/**
 * Speak card text. Uses front text by default.
 * If autoPlay is true, only speaks if global autoplay is enabled.
 */
export function speakCardText(
  text: string,
  autoPlay: boolean = false,
): void {
  if (!isTTSEnabled()) return;
  if (autoPlay && !isTTSAutoPlay()) return;
  speak(text).catch(() => {});
}
