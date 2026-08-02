/**
 * Animated voice waveform visualizer.
 * Shows during AI speech and user recording.
 */

import { motion } from 'framer-motion';

interface Props {
  active: boolean;
  color?: string;
  bars?: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function VoiceWaveform({ active, color = 'bg-primary-400', bars = 5, size = 'md' }: Props) {
  const heights = {
    sm: { min: 8, max: 20 },
    md: { min: 12, max: 32 },
    lg: { min: 16, max: 48 },
  };

  const h = heights[size];
  const gap = size === 'sm' ? 'gap-0.5' : size === 'md' ? 'gap-1' : 'gap-1.5';
  const barWidth = size === 'sm' ? 'w-0.5' : size === 'md' ? 'w-1' : 'w-1.5';

  return (
    <div className={`flex items-center justify-center ${gap}`} style={{ height: h.max }}>
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className={`${barWidth} rounded-full ${color}`}
          animate={active ? {
            height: [
              h.min,
              h.min + Math.random() * (h.max - h.min),
              h.min + Math.random() * (h.max - h.min) * 0.5,
              h.max - Math.random() * (h.max - h.min) * 0.3,
              h.min,
            ],
          } : { height: h.min }}
          transition={active ? {
            duration: 0.8 + Math.random() * 0.4,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay: i * 0.1,
          } : { duration: 0.3 }}
        />
      ))}
    </div>
  );
}
