import { useEffect, useRef } from 'react';
import { Film } from 'lucide-react';
import type { Card } from '../types';
import {
  getPhraseForCard,
  openPlayPhrasePopup,
  isAutoOpenEnabled,
} from '../lib/playphrase';

interface Props {
  card: Card;
  currentSide: 'front' | 'back';
  cardKey: string;
}

/**
 * PlayPhrase button — opens playphrase.me directly in a popup window / new tab.
 * No iframe embedding (playphrase.me blocks it).
 */
export default function PlayPhrasePanel({ card, currentSide, cardKey }: Props) {
  const prevKeyRef = useRef('');
  const prevSideRef = useRef<'front' | 'back'>('front');

  if (!card.playPhraseEnabled) return null;

  const side = card.playPhraseSide || 'front';
  if (side !== currentSide) return null;

  const phrase = getPhraseForCard(card);
  if (!phrase) return null;

  // Auto-open popup when card/side changes (if enabled)
  useEffect(() => {
    const keyChanged = prevKeyRef.current !== cardKey;
    const sideChanged = prevSideRef.current !== currentSide;
    prevKeyRef.current = cardKey;
    prevSideRef.current = currentSide;

    if ((keyChanged || sideChanged) && isAutoOpenEnabled()) {
      openPlayPhrasePopup(phrase);
    }
  }, [cardKey, currentSide, phrase]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openPlayPhrasePopup(phrase);
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all bg-purple-500/15 text-purple-400 hover:bg-purple-500/25 hover:text-purple-300"
      title={`PlayPhrase.me: "${phrase}"${isAutoOpenEnabled() ? ' (auto-open on)' : ''}`}
    >
      <Film size={15} />
      <span className="hidden sm:inline">PlayPhrase</span>
    </button>
  );
}
