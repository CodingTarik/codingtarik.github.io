import { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX, Loader } from 'lucide-react';
import { speak, stopTTS, isSpeaking, isTTSEnabled, isTTSAutoPlay, isTTSSupported } from '../lib/tts';
import { isSoundEnabled } from '../lib/sounds';

interface Props {
  /** Text to speak (front or back of card) */
  text: string;
  /** Unique key that changes when card/side changes -- triggers auto-play */
  cardKey: string;
}

export default function TTSButton({ text, cardKey }: Props) {
  const [playing, setPlaying] = useState(false);
  const prevKeyRef = useRef('');

  // Auto-play when card changes
  useEffect(() => {
    if (!isTTSEnabled() || !isTTSSupported() || !isSoundEnabled()) return;
    if (prevKeyRef.current === cardKey) return;
    prevKeyRef.current = cardKey;

    if (isTTSAutoPlay() && text) {
      setPlaying(true);
      speak(text)
        .then(() => setPlaying(false))
        .catch(() => setPlaying(false));
    }
  }, [cardKey, text]);

  // Poll speaking state
  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(() => {
      if (!isSpeaking()) setPlaying(false);
    }, 250);
    return () => clearInterval(interval);
  }, [playing]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (playing) {
      stopTTS();
      setPlaying(false);
    } else if (text) {
      setPlaying(true);
      speak(text)
        .then(() => setPlaying(false))
        .catch(() => setPlaying(false));
    }
  }, [playing, text]);

  if (!isTTSSupported() || !isTTSEnabled()) return null;

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
        playing
          ? 'bg-emerald-500/20 text-emerald-400 animate-pulse'
          : 'bg-slate-700/40 text-slate-400 hover:bg-slate-700/60 hover:text-white'
      }`}
      title={playing ? 'Stop speaking' : 'Read aloud'}
    >
      {playing ? <VolumeX size={14} /> : <Volume2 size={14} />}
    </button>
  );
}
