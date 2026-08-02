import { Flame } from 'lucide-react';

interface Props {
  streak: number;
}

export default function StreakFire({ streak }: Props) {
  if (streak === 0) return null;

  const intensity = Math.min(streak / 30, 1);
  const size = 16 + intensity * 8;

  return (
    <div className="flex items-center gap-1.5">
      <div
        className="relative"
        style={{
          filter: `drop-shadow(0 0 ${4 + intensity * 8}px rgba(251, 146, 60, ${0.3 + intensity * 0.5}))`,
        }}
      >
        <Flame
          size={size}
          className="text-orange-400"
          fill={`rgba(251, 146, 60, ${0.3 + intensity * 0.7})`}
        />
      </div>
      <span className="font-bold text-orange-400">{streak}</span>
    </div>
  );
}
