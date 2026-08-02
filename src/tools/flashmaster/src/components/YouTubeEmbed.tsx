/**
 * YouTubeEmbed — Renders an embedded YouTube player for a given URL.
 * Supports standard URLs, short URLs, and embed URLs.
 * Reads autoplay preference from localStorage.
 */

import { useMemo } from 'react';

const YT_AUTOPLAY_KEY = 'flashmaster-yt-autoplay';

export function isYouTubeAutoplay(): boolean {
  return localStorage.getItem(YT_AUTOPLAY_KEY) === 'true';
}

export function setYouTubeAutoplay(enabled: boolean): void {
  localStorage.setItem(YT_AUTOPLAY_KEY, String(enabled));
}

/** Extract YouTube video ID from various URL formats */
export function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  const trimmed = url.trim();

  // youtu.be/VIDEO_ID
  const shortMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];

  // youtube.com/watch?v=VIDEO_ID
  const watchMatch = trimmed.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return watchMatch[1];

  // youtube.com/embed/VIDEO_ID
  const embedMatch = trimmed.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];

  // youtube.com/shorts/VIDEO_ID
  const shortsMatch = trimmed.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
  if (shortsMatch) return shortsMatch[1];

  // Bare video ID (11 chars)
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;

  return null;
}

/** Check if a string looks like a valid YouTube URL/ID */
export function isValidYouTubeUrl(url: string): boolean {
  return extractYouTubeId(url) !== null;
}

interface Props {
  url: string;
  autoplayOverride?: boolean; // override global setting
}

export default function YouTubeEmbed({ url, autoplayOverride }: Props) {
  const videoId = useMemo(() => extractYouTubeId(url), [url]);
  const autoplay = autoplayOverride ?? isYouTubeAutoplay();

  if (!videoId) return null;

  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0${autoplay ? '&autoplay=1&mute=1' : ''}`;

  return (
    <div
      className="relative w-full mt-3 rounded-xl overflow-hidden shadow-lg"
      style={{ paddingBottom: '56.25%' /* 16:9 */ }}
      onClick={e => e.stopPropagation()}
    >
      <iframe
        src={embedUrl}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
        loading="lazy"
      />
    </div>
  );
}
