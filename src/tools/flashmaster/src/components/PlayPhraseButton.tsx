import { useEffect, useRef } from 'react';
import { Film } from 'lucide-react';
import type { Card } from '../types';
import {
  openPlayPhraseForCard,
  manualOpenPlayPhrase,
  isAutoOpenEnabled,
} from '../lib/playphrase';

interface Props {
  card: Card;
  currentSide: 'front' | 'back';
  /** Unique key that changes when card changes - triggers auto-open */
  cardKey: string;
}

export default function PlayPhraseButton({ card, currentSide, cardKey }: Props) {
  const prevKeyRef = useRef('');
  const prevSideRef = useRef<'front' | 'back'>('front');

  // Auto-open when card or side changes
  useEffect(() => {
    if (!card.playPhraseEnabled) return;

    const keyChanged = prevKeyRef.current !== cardKey;
    const sideChanged = prevSideRef.current !== currentSide;
    prevKeyRef.current = cardKey;
    prevSideRef.current = currentSide;

    if (keyChanged || sideChanged) {
      openPlayPhraseForCard(card, currentSide, true);
    }
  }, [card, currentSide, cardKey]);

  if (!card.playPhraseEnabled) return null;

  // Only show button on the configured side
  const side = card.playPhraseSide || 'front';
  if (side !== currentSide) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Don't trigger card flip
    manualOpenPlayPhrase(card);
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all bg-purple-500/15 text-purple-400 hover:bg-purple-500/25 hover:text-purple-300"
      title={`Open on PlayPhrase.me${isAutoOpenEnabled() ? ' (auto-open on)' : ''}`}
    >
      <Film size={15} />
      <span className="hidden sm:inline">PlayPhrase</span>
    </button>
  );
}
