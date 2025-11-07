import React, { useEffect, useState } from 'react';

/**
 * Confetti celebration effect
 */
function ConfettiEffect({ show, onComplete }) {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    if (show) {
      // Generate confetti pieces
      const pieces = [];
      const colors = ['#f43f5e', '#ec4899', '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b'];
      const emojis = ['🎉', '⭐', '✨', '🌟', '💫', '🎊'];
      
      for (let i = 0; i < 50; i++) {
        pieces.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 0.5,
          duration: 2 + Math.random() * 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
          rotation: Math.random() * 360,
          type: Math.random() > 0.5 ? 'rect' : 'emoji'
        });
      }
      
      setConfetti(pieces);
      
      // Clear confetti after animation
      const timer = setTimeout(() => {
        setConfetti([]);
        if (onComplete) onComplete();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  if (!show || confetti.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute -top-10 animate-confetti-fall"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`
          }}
        >
          {piece.type === 'emoji' ? (
            <span 
              className="text-2xl inline-block animate-spin"
              style={{
                animationDuration: `${piece.duration * 0.5}s`
              }}
            >
              {piece.emoji}
            </span>
          ) : (
            <div
              className="w-3 h-3 animate-spin"
              style={{
                backgroundColor: piece.color,
                transform: `rotate(${piece.rotation}deg)`,
                animationDuration: `${piece.duration * 0.3}s`
              }}
            />
          )}
        </div>
      ))}
      
      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotateZ(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotateZ(720deg);
            opacity: 0;
          }
        }
        .animate-confetti-fall {
          animation: confetti-fall linear forwards;
        }
      `}</style>
    </div>
  );
}

export default ConfettiEffect;

