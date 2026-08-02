/**
 * PlayPhrase - Integration with playphrase.me
 * Embeds movie/TV clip searches for flashcard words/phrases
 * playphrase.me finds real movie scenes where the phrase is spoken
 */

import type { Card } from '../types';

// ── Global Settings ──

const AUTO_OPEN_KEY = 'flashmaster-playphrase-autoopen';
const LANGUAGE_KEY = 'flashmaster-playphrase-lang';

export function isAutoOpenEnabled(): boolean {
  return localStorage.getItem(AUTO_OPEN_KEY) === 'true';
}

export function setAutoOpenEnabled(enabled: boolean): void {
  localStorage.setItem(AUTO_OPEN_KEY, String(enabled));
}

export function getPlayPhraseLang(): string {
  return localStorage.getItem(LANGUAGE_KEY) || 'en';
}

export function setPlayPhraseLang(lang: string): void {
  localStorage.setItem(LANGUAGE_KEY, lang);
}

export const PLAYPHRASE_LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
  { code: 'pt', label: 'Português' },
  { code: 'ru', label: 'Русский' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '中文' },
];

// ── Strip markdown/HTML to get plain text ──

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

// ── Get the phrase for a card ──

export function getPhraseForCard(card: Card): string {
  if (!card.playPhraseEnabled) return '';

  if (card.playPhraseCustom && card.playPhraseCustom.trim()) {
    return card.playPhraseCustom.trim();
  }

  return stripMarkdown(card.front);
}

// ── Build playphrase.me URL ──

export function getPlayPhraseUrl(phrase: string, lang?: string): string {
  const q = encodeURIComponent(phrase.trim());
  const language = lang || getPlayPhraseLang();
  return `https://www.playphrase.me/#/search?q=${q}&pos=1&language=${language}`;
}

// ── Popup fallback ──

let popupWindow: Window | null = null;

/**
 * Open playphrase.me in a popup window (fallback if iframe is blocked).
 */
export function openPlayPhrasePopup(phrase: string): void {
  const url = getPlayPhraseUrl(phrase);

  if (popupWindow && !popupWindow.closed) {
    popupWindow.location.href = url;
    popupWindow.focus();
    return;
  }

  popupWindow = window.open(
    url,
    'playphrase',
    'width=900,height=560,resizable=yes,scrollbars=yes'
  );
  if (popupWindow) popupWindow.focus();
}

export function closePlayPhrasePopup(): void {
  if (popupWindow && !popupWindow.closed) popupWindow.close();
  popupWindow = null;
}

// Keep old names as aliases for compatibility
export const openPlayPhrase = openPlayPhrasePopup;
export const closePlayPhrase = closePlayPhrasePopup;
export const isPlayPhraseOpen = () => popupWindow !== null && !popupWindow.closed;

/**
 * Open playphrase.me for a card, respecting card settings
 */
export function openPlayPhraseForCard(
  card: Card,
  currentSide: 'front' | 'back',
  autoTrigger: boolean = false,
): void {
  if (!card.playPhraseEnabled) return;

  const side = card.playPhraseSide || 'front';
  if (side !== currentSide) return;

  if (autoTrigger && !isAutoOpenEnabled()) return;

  const phrase = getPhraseForCard(card);
  if (!phrase) return;

  // For embedded panel approach, we don't auto-open popup
  // The panel component handles this
}

/**
 * Manually trigger playphrase for a card
 */
export function manualOpenPlayPhrase(card: Card): void {
  if (!card.playPhraseEnabled) return;
  const phrase = getPhraseForCard(card);
  if (!phrase) return;
  openPlayPhrasePopup(phrase);
}
