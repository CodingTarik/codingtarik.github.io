// ============================================================
// CUPCAKE CHAOS — A Chaotic Online Card Game
// ============================================================
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Copy, Check, Users, Play, Crown, X, Volume2, VolumeX,
  RotateCcw, Eye, Zap, Shield, Flame, ChevronDown, ChevronUp, Sparkles,
  AlertTriangle, Clock, Shuffle, HandMetal, ArrowRightLeft
} from 'lucide-react';
import Peer from 'peerjs';
import confetti from 'canvas-confetti';
import { createDeck, shuffleArray } from './cards';

// ============================================================
// SOUND SYSTEM (Web Audio API)
// ============================================================
let audioCtx = null;
const getAudioCtx = () => {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
};

const SOUNDS = {
  draw: () => {
    const c = getAudioCtx(), o = c.createOscillator(), g = c.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(600, c.currentTime);
    o.frequency.exponentialRampToValueAtTime(1200, c.currentTime + 0.12);
    g.gain.setValueAtTime(0.18, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.15);
    o.connect(g).connect(c.destination); o.start(); o.stop(c.currentTime + 0.15);
  },
  play: () => {
    const c = getAudioCtx(), o = c.createOscillator(), g = c.createGain();
    o.type = 'triangle'; o.frequency.setValueAtTime(350, c.currentTime);
    o.frequency.exponentialRampToValueAtTime(700, c.currentTime + 0.15);
    g.gain.setValueAtTime(0.15, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.2);
    o.connect(g).connect(c.destination); o.start(); o.stop(c.currentTime + 0.2);
  },
  counter: () => {
    const c = getAudioCtx();
    [500, 300, 200].forEach((f, i) => {
      const o = c.createOscillator(), g = c.createGain();
      o.type = 'sawtooth'; o.frequency.value = f;
      g.gain.setValueAtTime(0.1, c.currentTime + i * 0.08);
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.08 + 0.12);
      o.connect(g).connect(c.destination);
      o.start(c.currentTime + i * 0.08); o.stop(c.currentTime + i * 0.08 + 0.12);
    });
  },
  steal: () => {
    const c = getAudioCtx(), o = c.createOscillator(), g = c.createGain();
    o.type = 'triangle'; o.frequency.setValueAtTime(800, c.currentTime);
    o.frequency.exponentialRampToValueAtTime(200, c.currentTime + 0.25);
    g.gain.setValueAtTime(0.15, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.3);
    o.connect(g).connect(c.destination); o.start(); o.stop(c.currentTime + 0.3);
  },
  claim: () => {
    const c = getAudioCtx();
    [523, 659, 784, 1047].forEach((f, i) => {
      const o = c.createOscillator(), g = c.createGain();
      o.type = 'sine'; o.frequency.value = f;
      g.gain.setValueAtTime(0.2, c.currentTime + i * 0.12);
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.12 + 0.35);
      o.connect(g).connect(c.destination);
      o.start(c.currentTime + i * 0.12); o.stop(c.currentTime + i * 0.12 + 0.35);
    });
  },
  victory: () => {
    const c = getAudioCtx();
    [523, 587, 659, 784, 880, 1047].forEach((f, i) => {
      const o = c.createOscillator(), g = c.createGain();
      o.type = 'square'; o.frequency.value = f;
      g.gain.setValueAtTime(0.08, c.currentTime + i * 0.15);
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.15 + 0.25);
      o.connect(g).connect(c.destination);
      o.start(c.currentTime + i * 0.15); o.stop(c.currentTime + i * 0.15 + 0.25);
    });
  },
  trap: () => {
    const c = getAudioCtx(), o = c.createOscillator(), g = c.createGain();
    o.type = 'sawtooth'; o.frequency.setValueAtTime(250, c.currentTime);
    o.frequency.exponentialRampToValueAtTime(60, c.currentTime + 0.4);
    g.gain.setValueAtTime(0.12, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.45);
    o.connect(g).connect(c.destination); o.start(); o.stop(c.currentTime + 0.45);
  },
  turn: () => {
    const c = getAudioCtx(), o = c.createOscillator(), g = c.createGain();
    o.type = 'sine'; o.frequency.value = 880;
    g.gain.setValueAtTime(0.12, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.18);
    o.connect(g).connect(c.destination); o.start(); o.stop(c.currentTime + 0.18);
  },
  error: () => {
    const c = getAudioCtx(), o = c.createOscillator(), g = c.createGain();
    o.type = 'square'; o.frequency.setValueAtTime(200, c.currentTime);
    o.frequency.setValueAtTime(150, c.currentTime + 0.1);
    g.gain.setValueAtTime(0.1, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.2);
    o.connect(g).connect(c.destination); o.start(); o.stop(c.currentTime + 0.2);
  },
};

function sfx(name, enabled) {
  if (!enabled) return;
  try { SOUNDS[name]?.(); } catch { /* ignore */ }
}

// ============================================================
// CONSTANTS
// ============================================================
const WIN_COUNT = 10;
const COUNTER_MS = 6000;
const PLAYER_COLORS = ['#818cf8', '#f472b6', '#34d399', '#fbbf24', '#fb923c', '#22d3ee'];
const PLAYER_EMOJIS = ['🧁', '🍰', '🍩', '🍪', '🎂', '🍭'];
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function genCode() {
  let c = '';
  for (let i = 0; i < 4; i++) c += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
  return c;
}

function deepClone(o) { return JSON.parse(JSON.stringify(o)); }

// ============================================================
// SVG CARD ICONS
// ============================================================
const ICONS = {
  sparkles: (
    <g>
      <polygon points="24,4 27,14 37,17 27,20 24,30 21,20 11,17 21,14" fill="currentColor" opacity=".85"/>
      <polygon points="38,6 39.5,11 44,12.5 39.5,14 38,19 36.5,14 32,12.5 36.5,11" fill="currentColor" opacity=".5"/>
      <polygon points="10,30 11.5,34 16,35.5 11.5,37 10,41 8.5,37 4,35.5 8.5,34" fill="currentColor" opacity=".4"/>
    </g>
  ),
  hand: (
    <g>
      <path d="M16 38V20c0-2 2-4 4-2v10h3V14c0-2 3-4 4-1v14h3V18c0-2 3-4 4-1v14h3V24c0-2 3-3 3-1v14c0 5-4 9-10 9h-2c-5 0-12-4-12-8z" fill="currentColor" opacity=".8"/>
    </g>
  ),
  explosion: (
    <g>
      <polygon points="24,2 28,16 42,12 32,22 44,32 30,28 24,44 18,28 4,32 16,22 6,12 20,16" fill="currentColor" opacity=".8"/>
    </g>
  ),
  cherry: (
    <g>
      <circle cx="16" cy="32" r="8" fill="currentColor" opacity=".8"/>
      <circle cx="32" cy="28" r="7" fill="currentColor" opacity=".7"/>
      <path d="M16 24Q20 10 28 6" fill="none" stroke="currentColor" strokeWidth="2.5" opacity=".6"/>
      <path d="M32 21Q30 10 24 6" fill="none" stroke="currentColor" strokeWidth="2.5" opacity=".6"/>
      <ellipse cx="13" cy="29" rx="2" ry="3" fill="white" opacity=".25"/>
    </g>
  ),
  timer: (
    <g>
      <circle cx="24" cy="26" r="15" fill="none" stroke="currentColor" strokeWidth="3" opacity=".7"/>
      <line x1="24" y1="18" x2="24" y2="26" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <line x1="24" y1="26" x2="30" y2="30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="20" y="6" width="8" height="4" rx="2" fill="currentColor" opacity=".6"/>
    </g>
  ),
  reverse: (
    <g>
      <path d="M8 24a16 16 0 0127-11" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M40 24a16 16 0 01-27 11" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <polygon points="37,10 37,18 29,14" fill="currentColor"/>
      <polygon points="11,38 11,30 19,34" fill="currentColor"/>
    </g>
  ),
  bomb: (
    <g>
      <circle cx="24" cy="28" r="13" fill="currentColor" opacity=".8"/>
      <path d="M30 15L34 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="35" cy="5" r="3.5" fill="#fbbf24"/>
      <circle cx="34" cy="4" r="1.5" fill="#f97316"/>
      <ellipse cx="19" cy="24" rx="3" ry="4" fill="white" opacity=".15"/>
    </g>
  ),
  swap: (
    <g>
      <path d="M6 16h28" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <polygon points="36,16 28,10 28,22" fill="currentColor"/>
      <path d="M42 32H14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <polygon points="12,32 20,26 20,38" fill="currentColor"/>
    </g>
  ),
  mask: (
    <g>
      <path d="M6 20c0-4 6-10 18-10s18 6 18 10-4 8-8 8c-2 0-4-1-6-4h-8c-2 3-4 4-6 4-4 0-8-4-8-8z" fill="currentColor" opacity=".8"/>
      <ellipse cx="16" cy="20" rx="4" ry="4.5" fill="#1a0a2e"/>
      <ellipse cx="32" cy="20" rx="4" ry="4.5" fill="#1a0a2e"/>
    </g>
  ),
  broken: (
    <g>
      <path d="M6 24h12l3-8 4 16 4-16 3 8h12" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity=".8"/>
    </g>
  ),
  rain: (
    <g>
      <path d="M10 18c0-6 6-10 14-10s14 4 14 10" fill="currentColor" opacity=".3"/>
      <line x1="12" y1="24" x2="10" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity=".8"/>
      <line x1="20" y1="24" x2="18" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity=".7"/>
      <line x1="28" y1="24" x2="26" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity=".6"/>
      <line x1="36" y1="24" x2="34" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity=".5"/>
      <circle cx="14" cy="28" r="1.5" fill="currentColor" opacity=".4"/>
      <circle cx="32" cy="30" r="1.5" fill="currentColor" opacity=".4"/>
    </g>
  ),
  plus: (
    <g>
      <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="3" opacity=".6"/>
      <line x1="24" y1="14" x2="24" y2="34" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
      <line x1="14" y1="24" x2="34" y2="24" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    </g>
  ),
  tooth: (
    <g>
      <path d="M14 8c-5 0-8 5-8 11s4 16 8 16c2 0 3-4 6-4s4 4 6 4c4 0 8-10 8-16s-3-11-8-11c-2 0-4 2-6 2s-4-2-6-2z" fill="currentColor" opacity=".8"/>
      <ellipse cx="18" cy="18" rx="2" ry="3" fill="white" opacity=".2"/>
    </g>
  ),
  gift: (
    <g>
      <rect x="8" y="20" width="32" height="18" rx="3" fill="currentColor" opacity=".7"/>
      <rect x="6" y="14" width="36" height="8" rx="2" fill="currentColor" opacity=".9"/>
      <line x1="24" y1="14" x2="24" y2="38" stroke="#1a0a2e" strokeWidth="3"/>
      <path d="M24 14c-3-5-8-6-8-3s5 3 8 3c3 0 8 0 8-3s-5-2-8 3" fill="none" stroke="currentColor" strokeWidth="2"/>
    </g>
  ),
  trail: (
    <g>
      <circle cx="8" cy="36" r="4" fill="currentColor" opacity=".8"/>
      <circle cx="18" cy="28" r="3.5" fill="currentColor" opacity=".6"/>
      <circle cx="28" cy="20" r="3" fill="currentColor" opacity=".45"/>
      <circle cx="38" cy="12" r="2.5" fill="currentColor" opacity=".3"/>
    </g>
  ),
  fire: (
    <g>
      <path d="M24 4c0 7-12 12-12 24a12 12 0 0024 0c0-5-3-7-3-12s3-5 3-12c-3 3-6 4-9 1-1-1-2-1-3-1z" fill="currentColor" opacity=".8"/>
      <path d="M24 42a5 5 0 005-5c0-4-5-8-5-12 0 4-5 8-5 12a5 5 0 005 5z" fill="#fbbf24" opacity=".7"/>
    </g>
  ),
  cupcake_trap: (
    <g>
      <path d="M12 24h24l-2 16H14z" fill="currentColor" opacity=".6"/>
      <path d="M10 24c0-7 5-12 14-12s14 5 14 12z" fill="currentColor" opacity=".8"/>
      <circle cx="24" cy="16" r="3" fill="#ef4444"/>
      <line x1="24" y1="6" x2="24" y2="13" stroke="#ef4444" strokeWidth="2"/>
      <line x1="20" y1="8" x2="24" y2="13" stroke="#ef4444" strokeWidth="1.5"/>
      <line x1="28" y1="8" x2="24" y2="13" stroke="#ef4444" strokeWidth="1.5"/>
    </g>
  ),
  egg: (
    <g>
      <ellipse cx="24" cy="26" rx="13" ry="16" fill="currentColor" opacity=".8"/>
      <path d="M16 22l6-6 6 5" fill="none" stroke="#1a0a2e" strokeWidth="2.5" strokeLinejoin="round"/>
      <circle cx="19" cy="19" r="1" fill="#1a0a2e" opacity=".4"/>
    </g>
  ),
  stale: (
    <g>
      <rect x="8" y="18" width="32" height="16" rx="6" fill="currentColor" opacity=".7"/>
      <path d="M14 18c0-5 4-10 10-10s10 5 10 10" fill="none" stroke="currentColor" strokeWidth="3"/>
      <line x1="12" y1="8" x2="16" y2="14" stroke="currentColor" strokeWidth="2" opacity=".5"/>
      <line x1="36" y1="8" x2="32" y2="14" stroke="currentColor" strokeWidth="2" opacity=".5"/>
    </g>
  ),
  x_circle: (
    <g>
      <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="3" opacity=".7"/>
      <line x1="16" y1="16" x2="32" y2="32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="32" y1="16" x2="16" y2="32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
    </g>
  ),
  shield: (
    <g>
      <path d="M24 4L40 12v10c0 10-7 20-16 22C15 42 8 32 8 22V12z" fill="currentColor" opacity=".7"/>
      <path d="M24 10L36 16v8c0 8-5 16-12 18C17 40 12 32 12 24V16z" fill="currentColor" opacity=".3"/>
    </g>
  ),
  wings: (
    <g>
      <path d="M24 28c-6-2-14-8-18-16 4 1 10 4 18 10V14c-5-5-12-8-16-8 5-1 12 1 16 6V6c6 5 10 8 16 10-4 0-11-3-16-6v8c8-6 14-9 18-10-4 8-12 14-18 16v6c0 5-1 8 0 12 0 0 0 0 0 0-1-4 0-7 0-12z" fill="currentColor" opacity=".7"/>
    </g>
  ),
};

function CardIcon({ icon }) {
  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12" style={{ color: 'inherit' }}>
      {ICONS[icon] || <circle cx="24" cy="24" r="10" fill="currentColor" opacity=".5"/>}
    </svg>
  );
}

// ============================================================
// CARD TYPE THEME MAPS
// ============================================================
const TYPE_GRAD = {
  action: 'from-indigo-500 via-violet-500 to-purple-600',
  trap: 'from-rose-500 via-red-500 to-orange-500',
  counter: 'from-emerald-400 via-teal-500 to-cyan-600',
};
const TYPE_BORDER = {
  action: 'border-indigo-300/60',
  trap: 'border-rose-300/60',
  counter: 'border-emerald-300/60',
};
const TYPE_GLOW = {
  action: 'shadow-indigo-500/40',
  trap: 'shadow-rose-500/40',
  counter: 'shadow-emerald-500/40',
};
const TYPE_LABEL = { action: 'ACTION', trap: 'TRAP', counter: 'COUNTER' };

// ============================================================
// GAME CARD COMPONENT
// ============================================================
function GameCard({ card, onClick, disabled, faceDown, selected, glowing, small }) {
  const w = small ? 'w-20 h-28' : 'w-[7.5rem] h-44';

  if (faceDown) {
    return (
      <motion.div
        className={`${w} rounded-2xl bg-gradient-to-br from-purple-900 via-fuchsia-900 to-pink-900 border-2 border-purple-400/30 shadow-lg shadow-purple-900/50 cursor-pointer relative overflow-hidden flex-shrink-0`}
        whileHover={{ scale: 1.05, y: -4 }}
        onClick={onClick}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
          <svg viewBox="0 0 48 48" className="w-10 h-10 text-purple-400/30">
            <polygon points="24,4 27,14 37,17 27,20 24,30 21,20 11,17 21,14" fill="currentColor"/>
          </svg>
          <span className="text-[7px] tracking-[.2em] font-bold text-purple-400/40 uppercase">Cupcake Chaos</span>
        </div>
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-[.06]" style={{
          backgroundImage: 'radial-gradient(circle, #a855f7 1px, transparent 1px)',
          backgroundSize: '8px 8px',
        }}/>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`
        ${w} rounded-2xl bg-gradient-to-br ${TYPE_GRAD[card.type]}
        ${TYPE_BORDER[card.type]} border-2 shadow-lg ${TYPE_GLOW[card.type]}
        cursor-pointer relative overflow-hidden flex-shrink-0
        ${selected ? 'ring-[3px] ring-yellow-300 ring-offset-2 ring-offset-purple-950' : ''}
        ${disabled ? 'opacity-40 cursor-not-allowed saturate-50' : ''}
        ${glowing ? 'animate-pulse shadow-2xl shadow-yellow-400/60' : ''}
      `}
      whileHover={disabled ? {} : { scale: 1.08, y: -10, rotate: Math.random() * 2 - 1 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      onClick={disabled ? undefined : onClick}
      layout
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none"/>

      {/* Type badge */}
      <div className="absolute top-1.5 right-1.5">
        <span className="text-[6px] px-1.5 py-0.5 rounded-full bg-black/25 text-white/80 font-bold tracking-wider uppercase">
          {TYPE_LABEL[card.type]}
        </span>
      </div>

      {/* Card content */}
      <div className="flex flex-col items-center pt-2 px-1.5 h-full">
        {/* Icon */}
        <div className="text-white/90 drop-shadow-lg">
          <CardIcon icon={card.icon} />
        </div>
        {/* Name */}
        <div className={`${small ? 'text-[8px]' : 'text-[10px]'} font-extrabold text-white text-center leading-tight mt-0.5 drop-shadow`}>
          {card.name}
        </div>
        {/* Description */}
        <div className={`${small ? 'text-[6px] mt-0.5' : 'text-[8px] mt-1'} text-white/75 text-center leading-tight px-1 flex-1`}>
          {card.description}
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================
// ANIMATED BACKGROUND — Floating Sprinkles
// ============================================================
function FloatingBg() {
  const sprinkles = useMemo(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 3 + Math.random() * 6,
      dur: 15 + Math.random() * 25,
      delay: Math.random() * -20,
      color: ['#818cf8', '#f472b6', '#34d399', '#fbbf24', '#fb923c', '#22d3ee', '#a78bfa', '#f9a8d4'][
        Math.floor(Math.random() * 8)
      ],
      rot: Math.random() * 360,
    })),
  []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sprinkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size * 2.5,
            backgroundColor: s.color,
            opacity: 0.15,
            borderRadius: '50%',
            rotate: s.rot,
          }}
          animate={{ y: [0, -40, 0], x: [0, 15, -10, 0], rotate: [s.rot, s.rot + 180, s.rot + 360] }}
          transition={{ duration: s.dur, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

// ============================================================
// CUPCAKE LOGO SVG
// ============================================================
function CupcakeLogo({ size = 120 }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size}>
      {/* Wrapper / Base */}
      <path d="M30 55 L25 90 Q25 95 32 95 L68 95 Q75 95 75 90 L70 55 Z" fill="#f472b6" stroke="#ec4899" strokeWidth="1.5"/>
      <line x1="35" y1="58" x2="32" y2="92" stroke="#fb7185" strokeWidth="1.5" opacity=".5"/>
      <line x1="50" y1="55" x2="50" y2="95" stroke="#fb7185" strokeWidth="1.5" opacity=".5"/>
      <line x1="65" y1="58" x2="68" y2="92" stroke="#fb7185" strokeWidth="1.5" opacity=".5"/>
      {/* Frosting */}
      <path d="M22 55 Q28 35 38 42 Q44 30 50 38 Q56 28 62 40 Q72 34 78 55 Z" fill="#c084fc" stroke="#a855f7" strokeWidth="1.5"/>
      <path d="M28 50 Q35 40 42 46 Q47 38 52 44 Q58 36 64 44 Q72 38 72 50" fill="#d8b4fe" opacity=".5"/>
      {/* Cherry on top */}
      <circle cx="50" cy="30" r="8" fill="#ef4444" stroke="#dc2626" strokeWidth="1"/>
      <ellipse cx="47" cy="27" rx="2.5" ry="3" fill="white" opacity=".3"/>
      <path d="M50 22 Q52 14 56 12" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
      {/* Sprinkles on frosting */}
      <rect x="32" y="44" width="5" height="2" rx="1" fill="#fbbf24" transform="rotate(-20 34 45)"/>
      <rect x="55" y="40" width="5" height="2" rx="1" fill="#22d3ee" transform="rotate(15 57 41)"/>
      <rect x="44" y="48" width="4" height="2" rx="1" fill="#34d399" transform="rotate(-10 46 49)"/>
      <rect x="62" y="47" width="4" height="2" rx="1" fill="#f472b6" transform="rotate(25 64 48)"/>
    </svg>
  );
}

// ============================================================
// MENU SCREEN
// ============================================================
function MenuScreen({ playerName, setPlayerName, onHost, onJoin, joinCode, setJoinCode, error }) {
  const [mode, setMode] = useState(null); // null | 'host' | 'join'

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0520] via-[#1a0a3a] to-[#2d0a2e] flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingBg />
      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CupcakeLogo size={100} />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mt-2 tracking-tight">
            Cupcake Chaos
          </h1>
          <p className="text-purple-300/60 text-sm mt-1 tracking-wide">The Chaotic Card Game</p>
        </div>

        {/* Card-like panel */}
        <div className="bg-white/[.06] backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-2xl shadow-purple-900/40">
          {/* Name Input */}
          <label className="block mb-4">
            <span className="text-purple-200/80 text-sm font-medium mb-1 block">Your Name</span>
            <input
              type="text"
              value={playerName}
              onChange={e => setPlayerName(e.target.value.slice(0, 16))}
              placeholder="Enter your name..."
              maxLength={16}
              className="w-full px-4 py-3 rounded-xl bg-white/[.08] border border-white/10 text-white placeholder-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/40 transition-all text-lg"
            />
          </label>

          {error && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-3 p-3 rounded-xl bg-red-500/20 border border-red-400/30 text-red-300 text-sm">
              {error}
            </motion.div>
          )}

          {!mode && (
            <div className="grid grid-cols-2 gap-3 mt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setMode('host')}
                disabled={!playerName.trim()}
                className="py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg shadow-lg shadow-indigo-500/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <Users className="inline w-5 h-5 mr-1 -mt-0.5" /> Host
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setMode('join')}
                disabled={!playerName.trim()}
                className="py-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold text-lg shadow-lg shadow-pink-500/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <Play className="inline w-5 h-5 mr-1 -mt-0.5" /> Join
              </motion.button>
            </div>
          )}

          {mode === 'host' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={onHost}
                className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg shadow-lg shadow-indigo-500/30 transition-all"
              >
                <Sparkles className="inline w-5 h-5 mr-2 -mt-0.5" />Create Room
              </motion.button>
              <button onClick={() => setMode(null)} className="w-full mt-2 text-purple-400/60 text-sm hover:text-purple-300 transition-colors">← Back</button>
            </motion.div>
          )}

          {mode === 'join' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <label className="block mt-3">
                <span className="text-purple-200/80 text-sm font-medium mb-1 block">Room Code</span>
                <input
                  type="text"
                  value={joinCode}
                  onChange={e => setJoinCode(e.target.value.toUpperCase().slice(0, 4))}
                  placeholder="XXXX"
                  maxLength={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/[.08] border border-white/10 text-white placeholder-purple-400/40 focus:outline-none focus:ring-2 focus:ring-pink-500/50 text-center text-2xl font-mono tracking-[.3em] uppercase"
                />
              </label>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={onJoin}
                disabled={joinCode.length < 4}
                className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold text-lg shadow-lg shadow-pink-500/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Join Room
              </motion.button>
              <button onClick={() => setMode(null)} className="w-full mt-2 text-purple-400/60 text-sm hover:text-purple-300 transition-colors">← Back</button>
            </motion.div>
          )}
        </div>

        {/* Rules hint */}
        <p className="text-center text-purple-400/40 text-xs mt-4">
          First to hold exactly {WIN_COUNT} cards & shout CUPCAKE! wins.
        </p>
      </motion.div>
    </div>
  );
}

// ============================================================
// LOBBY SCREEN
// ============================================================
function LobbyScreen({ players, roomCode, isHost, onStart, onLeave, myId }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(roomCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  };

  const shareLink = () => {
    const url = `${window.location.origin}/games/cupcake-chaos/${roomCode}`;
    if (navigator.share) {
      navigator.share({ title: 'Cupcake Chaos', text: 'Join my Cupcake Chaos game!', url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0520] via-[#1a0a3a] to-[#2d0a2e] flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingBg />
      <motion.div
        className="relative z-10 w-full max-w-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-6">
          <CupcakeLogo size={60} />
          <h2 className="text-2xl font-bold text-white mt-2">Waiting Room</h2>
        </div>

        <div className="bg-white/[.06] backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-2xl shadow-purple-900/40">
          {/* Room Code */}
          <div className="text-center mb-6">
            <p className="text-purple-300/60 text-sm mb-1">Room Code</p>
            <div className="flex items-center justify-center gap-3">
              <span className="text-4xl font-mono font-black tracking-[.3em] bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                {roomCode}
              </span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={copyCode}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-purple-300"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </motion.button>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={shareLink}
              className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 font-semibold rounded-xl text-xs transition border border-purple-500/20"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
              </svg>
              {copied ? 'Link copied!' : 'Share invite link'}
            </motion.button>
          </div>

          {/* Players */}
          <div className="space-y-2 mb-6">
            <p className="text-purple-300/60 text-sm">Players ({players.length}/6)</p>
            <AnimatePresence>
              {players.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[.05] border border-white/[.06]"
                >
                  <span className="text-2xl">{PLAYER_EMOJIS[i]}</span>
                  <span className="flex-1 text-white font-medium">{p.name}</span>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: PLAYER_COLORS[i] }}/>
                  {p.id === myId && <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/30 text-purple-300 font-medium">YOU</span>}
                  {i === 0 && <Crown className="w-4 h-4 text-yellow-400" />}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Actions */}
          {isHost ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={onStart}
              disabled={players.length < 2}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg shadow-lg shadow-green-500/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <Play className="inline w-5 h-5 mr-2 -mt-0.5" />
              Start Game ({players.length} players)
            </motion.button>
          ) : (
            <div className="text-center py-4">
              <motion.div animate={{ opacity: [.4, 1, .4] }} transition={{ duration: 2, repeat: Infinity }} className="text-purple-300/60">
                Waiting for host to start the game...
              </motion.div>
            </div>
          )}

          <button onClick={onLeave} className="w-full mt-3 text-purple-400/50 text-sm hover:text-red-400 transition-colors">
            Leave Room
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ============================================================
// GAME LOG
// ============================================================
function GameLog({ log, expanded, onToggle }) {
  const typeColor = {
    system: 'text-purple-300/70',
    action: 'text-indigo-300',
    counter: 'text-emerald-300',
    trap: 'text-rose-300',
    info: 'text-white/60',
  };

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-2xl border border-white/[.06] overflow-hidden">
      <button onClick={onToggle} className="w-full flex items-center justify-between p-3 text-purple-300/70 hover:text-purple-200 transition-colors">
        <span className="text-xs font-bold tracking-wider uppercase">Game Log</span>
        {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3 max-h-40 overflow-y-auto space-y-1 scrollbar-thin">
              {log.slice(0, 30).map((entry, i) => (
                <motion.div
                  key={i}
                  initial={i === 0 ? { opacity: 0, x: -10 } : {}}
                  animate={{ opacity: 1, x: 0 }}
                  className={`text-xs ${typeColor[entry.type] || 'text-white/50'}`}
                >
                  {entry.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================
// OPPONENT PANEL
// ============================================================
function OpponentPanel({ player, idx, isCurrentTurn, color, canTarget, onTarget }) {
  return (
    <motion.div
      className={`
        relative px-3 py-2 rounded-2xl border transition-all cursor-default
        ${isCurrentTurn
          ? 'bg-white/[.12] border-yellow-400/50 shadow-lg shadow-yellow-400/20'
          : 'bg-white/[.04] border-white/[.06]'}
        ${canTarget ? 'cursor-pointer hover:bg-white/[.15] hover:border-pink-400/50 hover:shadow-pink-400/20 hover:shadow-md' : ''}
      `}
      whileHover={canTarget ? { scale: 1.05 } : {}}
      whileTap={canTarget ? { scale: 0.95 } : {}}
      onClick={canTarget ? onTarget : undefined}
    >
      {isCurrentTurn && (
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-yellow-400"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
      <div className="flex items-center gap-2">
        <span className="text-lg">{PLAYER_EMOJIS[idx]}</span>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-bold text-white truncate">{player.name}</div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[10px] text-purple-300/60">{player.handCount} cards</span>
            {player.trapCount > 0 && (
              <span className="text-[10px] text-rose-400/60">
                <Flame className="inline w-3 h-3 -mt-0.5" /> {player.trapCount}
              </span>
            )}
          </div>
        </div>
        <div className="w-2 h-8 rounded-full" style={{ backgroundColor: color, opacity: 0.6 }} />
      </div>
      {player.immune && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 text-[7px] font-bold">
          IMMUNE
        </div>
      )}
      {canTarget && (
        <div className="absolute inset-0 rounded-2xl border-2 border-pink-400/40 animate-pulse pointer-events-none" />
      )}
    </motion.div>
  );
}

// ============================================================
// COUNTER WINDOW OVERLAY
// ============================================================
function CounterWindowOverlay({ cw, myHand, myIdx, onCounter, timeLeft }) {
  const counterCards = myHand
    .map((c, i) => ({ ...c, handIdx: i }))
    .filter(c => c.type === 'counter');

  const canCounter = counterCards.length > 0 && cw.playedByIdx !== myIdx;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 20 }}
        className="bg-gradient-to-br from-[#1a0a3a] to-[#2d0a2e] rounded-3xl border border-white/10 p-6 max-w-md w-full shadow-2xl"
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
            className="inline-block mb-3"
          >
            <Zap className="w-10 h-10 text-yellow-400" />
          </motion.div>
          <h3 className="text-lg font-bold text-white mb-1">Card Played!</h3>
          <p className="text-purple-300/70 text-sm mb-4">
            {cw.playerName} played <span className="font-bold text-white">{cw.card.name}</span>
            {cw.targetName && <> targeting <span className="font-bold text-pink-300">{cw.targetName}</span></>}
          </p>

          {/* Card preview */}
          <div className="flex justify-center mb-4">
            <GameCard card={cw.card} small disabled />
          </div>

          {/* Timer */}
          <div className="mb-4">
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: COUNTER_MS / 1000, ease: 'linear' }}
              />
            </div>
            <p className="text-xs text-purple-400/50 mt-1">{Math.ceil(timeLeft / 1000)}s to counter...</p>
          </div>

          {/* Counter options */}
          {canCounter ? (
            <div className="flex gap-2 justify-center flex-wrap">
              {counterCards.map(c => (
                <motion.button
                  key={c.uid}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onCounter(c.handIdx)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all"
                >
                  {c.name}
                </motion.button>
              ))}
            </div>
          ) : (
            <p className="text-purple-400/40 text-sm">
              {cw.playedByIdx === myIdx ? 'Waiting for others to respond...' : 'No counter cards available.'}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================================
// CHOOSE DISCARD MODAL
// ============================================================
function ChooseDiscardModal({ hand, count, selected, onToggle, onConfirm }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-gradient-to-br from-[#1a0a3a] to-[#2d0a2e] rounded-3xl border border-white/10 p-6 max-w-2xl w-full shadow-2xl"
      >
        <h3 className="text-lg font-bold text-white text-center mb-1">Choose {count} Card{count > 1 ? 's' : ''} to Discard</h3>
        <p className="text-purple-300/60 text-sm text-center mb-4">Selected: {selected.length}/{count}</p>
        <div className="flex gap-2 justify-center flex-wrap max-h-60 overflow-y-auto py-2">
          {hand.map((card, i) => (
            <GameCard
              key={card.uid}
              card={card}
              small
              selected={selected.includes(i)}
              onClick={() => onToggle(i)}
            />
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={onConfirm}
          disabled={selected.length !== count}
          className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 text-white font-bold shadow-lg shadow-rose-500/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          Discard Selected
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

// ============================================================
// VICTORY SCREEN
// ============================================================
function VictoryScreen({ winner, onPlayAgain, onLeave, isHost }) {
  useEffect(() => {
    const dur = 3000;
    const end = Date.now() + dur;
    const frame = () => {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0, y: 0.7 }, colors: ['#818cf8', '#f472b6', '#fbbf24'] });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1, y: 0.7 }, colors: ['#34d399', '#22d3ee', '#a78bfa'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0520] via-[#1a0a3a] to-[#2d0a2e] flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingBg />
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <CupcakeLogo size={120} />
        </motion.div>
        <h1 className="text-5xl font-black bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent mt-4">
          CUPCAKE!
        </h1>
        <p className="text-2xl text-white font-bold mt-2">{winner} wins!</p>
        <p className="text-purple-300/60 mt-1">They held exactly {WIN_COUNT} cards!</p>

        <div className="flex gap-3 justify-center mt-8">
          {isHost && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onPlayAgain}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-lg shadow-indigo-500/30"
            >
              <RotateCcw className="inline w-4 h-4 mr-2 -mt-0.5" /> Play Again
            </motion.button>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onLeave}
            className="px-6 py-3 rounded-xl bg-white/10 border border-white/10 text-white font-bold hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="inline w-4 h-4 mr-2 -mt-0.5" /> Leave
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function CupcakeChaos() {
  // === SCREEN STATE ===
  const [screen, setScreen] = useState('menu');
  const [playerName, setPlayerName] = useState(() => localStorage.getItem('cc_name') || '');
  const [joinCode, setJoinCode] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [isHost, setIsHost] = useState(false);
  const [error, setError] = useState('');
  const [soundOn, setSoundOn] = useState(true);

  // === LOBBY STATE ===
  const [lobbyPlayers, setLobbyPlayers] = useState([]);

  // === GAME STATE ===
  const [gs, setGs] = useState(null);

  // === UI STATE ===
  const [targetMode, setTargetMode] = useState(false);
  const [pendingCardIdx, setPendingCardIdx] = useState(null);
  const [chooseDiscard, setChooseDiscard] = useState(null); // { count, selected: [] }
  const [counterTimeLeft, setCounterTimeLeft] = useState(0);
  const [logExpanded, setLogExpanded] = useState(false);

  // === REFS ===
  const peerRef = useRef(null);
  const connsRef = useRef([]);
  const hostConnRef = useRef(null);
  const myIdRef = useRef(null);
  const gsRef = useRef(null);
  const lobbyRef = useRef([]);
  const counterTimerRef = useRef(null);
  const counterIntervalRef = useRef(null);

  // Keep refs in sync
  useEffect(() => { gsRef.current = gs; }, [gs]);
  useEffect(() => { lobbyRef.current = lobbyPlayers; }, [lobbyPlayers]);
  useEffect(() => { localStorage.setItem('cc_name', playerName); }, [playerName]);

  // Derived values
  const myIndex = useMemo(() => gs?.players?.findIndex(p => p.id === myIdRef.current) ?? -1, [gs]);
  const myPlayer = gs?.players?.[myIndex];
  const myHand = myPlayer?.hand || [];
  const isMyTurn = gs?.currentPlayerIndex === myIndex;
  const canAct = isMyTurn && gs?.turnPhase === 'idle' && !gs?.winner;

  // === AUTO-DETECT JOIN CODE FROM URL ===
  useEffect(() => {
    const m = window.location.pathname.match(/\/games\/cupcake-chaos\/([A-Z0-9]+)/i);
    if (m) setJoinCode(m[1].toUpperCase());
  }, []);

  // === CLEANUP ===
  useEffect(() => {
    return () => {
      peerRef.current?.destroy();
      clearTimeout(counterTimerRef.current);
      clearInterval(counterIntervalRef.current);
    };
  }, []);

  // === BROADCAST (HOST) ===
  const broadcast = useCallback((msg) => {
    connsRef.current.forEach(conn => {
      try { if (conn.open) conn.send(msg); } catch { /* ignore */ }
    });
  }, []);

  // === SEND TO HOST (CLIENT) ===
  const sendToHost = useCallback((msg) => {
    try { if (hostConnRef.current?.open) hostConnRef.current.send(msg); } catch { /* ignore */ }
  }, []);

  // === UPDATE & BROADCAST STATE (HOST) ===
  const updateAndBroadcast = useCallback((newState) => {
    gsRef.current = newState;
    setGs(newState);
    // Send personalized state to each client (hide hands)
    connsRef.current.forEach(conn => {
      try {
        if (conn.open) {
          const s = deepClone(newState);
          s.players = s.players.map((p, i) => ({
            ...p,
            hand: p.id === conn.peer ? p.hand : [],
            handCount: newState.players[i].hand.length,
            traps: p.id === conn.peer ? p.traps : [],
            trapCount: newState.players[i].traps.length,
          }));
          conn.send({ type: 'gameState', state: s });
        }
      } catch { /* ignore */ }
    });
    // Update own view
    const own = deepClone(newState);
    own.players = own.players.map((p, i) => ({
      ...p,
      hand: p.id === myIdRef.current ? p.hand : [],
      handCount: newState.players[i].hand.length,
      traps: p.id === myIdRef.current ? p.traps : [],
      trapCount: newState.players[i].traps.length,
    }));
    setGs(own);
  }, []);

  // ============================================================
  // GAME LOGIC HELPERS (all operate on full state, host only)
  // ============================================================

  function drawFromDeck(state, playerIdx, count) {
    const s = state;
    let drawn = 0;
    for (let i = 0; i < count; i++) {
      if (s.deck.length === 0) {
        // Reshuffle discard into deck
        if (s.discardPile.length === 0) break;
        s.deck = shuffleArray(s.discardPile);
        s.discardPile = [];
        s.log.unshift({ text: 'Deck empty! Discard pile reshuffled.', type: 'system' });
      }
      s.players[playerIdx].hand.push(s.deck.pop());
      drawn++;
    }
    return drawn;
  }

  function discardRandom(state, playerIdx, count) {
    const p = state.players[playerIdx];
    const actual = Math.min(count, p.hand.length);
    for (let i = 0; i < actual; i++) {
      const rIdx = Math.floor(Math.random() * p.hand.length);
      state.discardPile.push(p.hand.splice(rIdx, 1)[0]);
    }
    return actual;
  }

  function stealRandom(state, fromIdx, toIdx, count) {
    const from = state.players[fromIdx];
    const actual = Math.min(count, from.hand.length);
    for (let i = 0; i < actual; i++) {
      const rIdx = Math.floor(Math.random() * from.hand.length);
      state.players[toIdx].hand.push(from.hand.splice(rIdx, 1)[0]);
    }
    return actual;
  }

  function checkReach10Traps(state, playerIdx) {
    if (state.players[playerIdx].hand.length < WIN_COUNT) return;
    // Check all players' traps for booby_frosted
    for (let i = 0; i < state.players.length; i++) {
      if (i === playerIdx) continue;
      const tIdx = state.players[i].traps.findIndex(t => t.id === 'booby_frosted');
      if (tIdx !== -1) {
        const trap = state.players[i].traps.splice(tIdx, 1)[0];
        state.discardPile.push(trap);
        const discarded = discardRandom(state, playerIdx, 3);
        state.log.unshift({
          text: `💥 ${state.players[i].name}'s Booby Frosted trap! ${state.players[playerIdx].name} discards ${discarded} cards!`,
          type: 'trap'
        });
        break;
      }
    }
  }

  function checkStealTraps(state, stealerIdx, victimIdx) {
    const tIdx = state.players[victimIdx].traps.findIndex(t => t.id === 'burnt_offering');
    if (tIdx !== -1) {
      const trap = state.players[victimIdx].traps.splice(tIdx, 1)[0];
      state.discardPile.push(trap);
      const discarded = discardRandom(state, stealerIdx, 2);
      state.log.unshift({
        text: `🔥 ${state.players[victimIdx].name}'s Burnt Offering trap! ${state.players[stealerIdx].name} discards ${discarded} cards!`,
        type: 'trap'
      });
    }
  }

  function checkMultiDrawTraps(state, playerIdx, drawCount) {
    if (drawCount < 2) return;
    for (let i = 0; i < state.players.length; i++) {
      if (i === playerIdx) continue;
      const tIdx = state.players[i].traps.findIndex(t => t.id === 'stale_batch');
      if (tIdx !== -1) {
        const trap = state.players[i].traps.splice(tIdx, 1)[0];
        state.discardPile.push(trap);
        discardRandom(state, playerIdx, 1);
        state.log.unshift({
          text: `🍞 ${state.players[i].name}'s Stale Batch trap! ${state.players[playerIdx].name} discards 1 card!`,
          type: 'trap'
        });
        break;
      }
    }
  }

  function resolveCardEffect(state, card, pIdx, targetIdx) {
    const p = state.players[pIdx];

    switch (card.id) {
      case 'sugar_rush': {
        const drawn = drawFromDeck(state, pIdx, 3);
        state.log.unshift({ text: `${p.name} drew ${drawn} cards!`, type: 'action' });
        checkMultiDrawTraps(state, pIdx, drawn);
        checkReach10Traps(state, pIdx);
        break;
      }
      case 'sticky_fingers': {
        if (targetIdx != null && !state.players[targetIdx].immune) {
          const count = stealRandom(state, targetIdx, pIdx, 1);
          if (count > 0) {
            state.log.unshift({ text: `${p.name} stole a card from ${state.players[targetIdx].name}!`, type: 'action' });
            checkStealTraps(state, pIdx, targetIdx);
          }
        }
        checkReach10Traps(state, pIdx);
        break;
      }
      case 'frosting_blast': {
        for (let i = 0; i < state.players.length; i++) {
          if (i !== pIdx && !state.players[i].immune) {
            discardRandom(state, i, 1);
          }
        }
        state.log.unshift({ text: `All other players discarded a card!`, type: 'action' });
        break;
      }
      case 'cherry_pick': {
        const drawn = drawFromDeck(state, pIdx, 2);
        state.log.unshift({ text: `${p.name} drew ${drawn} cards, must discard 1.`, type: 'action' });
        checkMultiDrawTraps(state, pIdx, drawn);
        // Need to choose a card to discard — set chooseDiscard phase
        state._needsDiscard = { playerIdx: pIdx, count: 1 };
        break;
      }
      case 'oven_timer': {
        const nextIdx = (state.currentPlayerIndex + state.direction + state.players.length) % state.players.length;
        state.players[nextIdx].skipNextTurn = true;
        state.log.unshift({ text: `${state.players[nextIdx].name}'s next turn will be skipped!`, type: 'action' });
        break;
      }
      case 'rolling_pin': {
        state.direction *= -1;
        drawFromDeck(state, pIdx, 1);
        state.log.unshift({ text: `Play direction reversed! ${p.name} drew a card.`, type: 'action' });
        checkReach10Traps(state, pIdx);
        break;
      }
      case 'flour_bomb': {
        for (let i = 0; i < state.players.length; i++) {
          drawFromDeck(state, i, 2);
        }
        state.log.unshift({ text: `Everyone drew 2 cards!`, type: 'action' });
        for (let i = 0; i < state.players.length; i++) {
          checkMultiDrawTraps(state, i, 2);
          checkReach10Traps(state, i);
        }
        break;
      }
      case 'recipe_swap': {
        if (targetIdx != null && !state.players[targetIdx].immune) {
          const tempHand = p.hand;
          p.hand = state.players[targetIdx].hand;
          state.players[targetIdx].hand = tempHand;
          state.log.unshift({ text: `${p.name} swapped hands with ${state.players[targetIdx].name}!`, type: 'action' });
          checkReach10Traps(state, pIdx);
          checkReach10Traps(state, targetIdx);
        }
        break;
      }
      case 'cupcake_thief': {
        if (targetIdx != null && !state.players[targetIdx].immune) {
          const count = stealRandom(state, targetIdx, pIdx, 2);
          state.log.unshift({ text: `${p.name} stole ${count} cards from ${state.players[targetIdx].name}!`, type: 'action' });
          if (count > 0) checkStealTraps(state, pIdx, targetIdx);
        }
        checkReach10Traps(state, pIdx);
        break;
      }
      case 'half_baked': {
        if (targetIdx != null && !state.players[targetIdx].immune) {
          const half = Math.floor(state.players[targetIdx].hand.length / 2);
          const discarded = discardRandom(state, targetIdx, half);
          state.log.unshift({ text: `${state.players[targetIdx].name} discarded ${discarded} cards!`, type: 'action' });
        }
        break;
      }
      case 'sprinkle_shower': {
        let totalStolen = 0;
        for (let i = 0; i < state.players.length; i++) {
          if (i !== pIdx && !state.players[i].immune) {
            totalStolen += stealRandom(state, i, pIdx, 1);
            checkStealTraps(state, pIdx, i);
          }
        }
        state.log.unshift({ text: `${p.name} took ${totalStolen} cards from other players!`, type: 'action' });
        checkReach10Traps(state, pIdx);
        break;
      }
      case 'garnish': {
        const count = state.players.length;
        const drawn = drawFromDeck(state, pIdx, count);
        state.log.unshift({ text: `${p.name} drew ${drawn} cards!`, type: 'action' });
        checkMultiDrawTraps(state, pIdx, drawn);
        checkReach10Traps(state, pIdx);
        break;
      }
      case 'sweet_tooth': {
        if (p.hand.length < 7) {
          const need = 7 - p.hand.length;
          const drawn = drawFromDeck(state, pIdx, need);
          state.log.unshift({ text: `${p.name} drew ${drawn} cards (up to 7).`, type: 'action' });
          checkMultiDrawTraps(state, pIdx, drawn);
          checkReach10Traps(state, pIdx);
        } else {
          state.log.unshift({ text: `${p.name} already has 7+ cards. No effect.`, type: 'info' });
        }
        break;
      }
      case 'batter_up': {
        const drawn = drawFromDeck(state, pIdx, 3);
        state.log.unshift({ text: `${p.name} drew ${drawn} cards.`, type: 'action' });
        if (targetIdx != null) {
          const tDraw = drawFromDeck(state, targetIdx, 2);
          state.log.unshift({ text: `${state.players[targetIdx].name} also drew ${tDraw} cards.`, type: 'action' });
          checkMultiDrawTraps(state, targetIdx, tDraw);
          checkReach10Traps(state, targetIdx);
        }
        checkMultiDrawTraps(state, pIdx, drawn);
        checkReach10Traps(state, pIdx);
        break;
      }
      case 'crumb_trail': {
        // Pass 2 random cards to the left (next player in direction)
        const tempCards = [];
        for (let i = 0; i < state.players.length; i++) {
          const toPass = Math.min(2, state.players[i].hand.length);
          const passed = [];
          for (let j = 0; j < toPass; j++) {
            const rIdx = Math.floor(Math.random() * state.players[i].hand.length);
            passed.push(state.players[i].hand.splice(rIdx, 1)[0]);
          }
          tempCards.push(passed);
        }
        // Distribute to next player (in play direction)
        for (let i = 0; i < state.players.length; i++) {
          const nextI = (i + state.direction + state.players.length) % state.players.length;
          state.players[nextI].hand.push(...tempCards[i]);
        }
        state.log.unshift({ text: `Everyone passed cards to the left!`, type: 'action' });
        for (let i = 0; i < state.players.length; i++) {
          checkReach10Traps(state, i);
        }
        break;
      }
    }

    return state;
  }

  function advanceTurn(state) {
    let next = state.currentPlayerIndex;
    let attempts = 0;
    do {
      next = (next + state.direction + state.players.length) % state.players.length;
      attempts++;
      if (attempts > state.players.length * 2) break;
      if (state.players[next].skipNextTurn) {
        state.players[next].skipNextTurn = false;
        state.log.unshift({ text: `${state.players[next].name}'s turn was skipped!`, type: 'system' });
        continue;
      }
      break;
    } while (true);

    state.currentPlayerIndex = next;
    state.turnPhase = 'idle';

    // Reset immunity for the new current player
    state.players[next].immune = false;

    // Check win: if next player has exactly WIN_COUNT and has claimed
    if (state.claimedCupcake[state.players[next].id] && state.players[next].hand.length === WIN_COUNT) {
      state.winner = state.players[next].name;
      state.turnPhase = 'game_over';
      state.log.unshift({ text: `🎉 ${state.players[next].name} wins with exactly ${WIN_COUNT} cards! CUPCAKE!`, type: 'system' });
    }

    return state;
  }

  // ============================================================
  // PROCESS ACTION (HOST ONLY)
  // ============================================================
  const processAction = useCallback((action) => {
    if (!gsRef.current) return;
    let s = deepClone(gsRef.current);
    // Get full state (gsRef has full state for host)

    switch (action.type) {
      case 'draw': {
        if (s.turnPhase !== 'idle' || s.currentPlayerIndex !== action.pIdx || s.winner) return;
        drawFromDeck(s, action.pIdx, 1);
        s.log.unshift({ text: `${s.players[action.pIdx].name} drew a card.`, type: 'action' });
        checkReach10Traps(s, action.pIdx);
        s = advanceTurn(s);
        break;
      }

      case 'playCard': {
        if (s.currentPlayerIndex !== action.pIdx || s.winner) return;
        const card = s.players[action.pIdx].hand[action.cardIdx];
        if (!card) return;

        if (card.type === 'trap') {
          // Place trap
          s.players[action.pIdx].hand.splice(action.cardIdx, 1);
          s.players[action.pIdx].traps.push(card);
          s.log.unshift({ text: `${s.players[action.pIdx].name} set a trap!`, type: 'trap' });
          s = advanceTurn(s);
        } else if (card.type === 'action') {
          // Remove from hand, add to discard
          s.players[action.pIdx].hand.splice(action.cardIdx, 1);
          s.discardPile.push(card);

          // Check if any player has counter cards (excluding the player who played)
          const anyoneCanCounter = s.players.some((p, i) =>
            i !== action.pIdx && p.hand.some(c => c.type === 'counter')
          );

          if (anyoneCanCounter) {
            // Start counter window
            s.turnPhase = 'counter_window';
            s.counterWindow = {
              card,
              playedByIdx: action.pIdx,
              playerName: s.players[action.pIdx].name,
              targetIdx: action.targetIdx ?? null,
              targetName: action.targetIdx != null ? s.players[action.targetIdx].name : null,
              endsAt: Date.now() + COUNTER_MS,
            };
            s.pendingAction = { card, pIdx: action.pIdx, targetIdx: action.targetIdx };
            s.log.unshift({ text: `${s.players[action.pIdx].name} played ${card.name}!`, type: 'action' });

            // Set timeout to auto-resolve
            clearTimeout(counterTimerRef.current);
            counterTimerRef.current = setTimeout(() => {
              resolveCounterWindow(false);
            }, COUNTER_MS + 500); // small buffer
          } else {
            // No one can counter, resolve immediately
            s.log.unshift({ text: `${s.players[action.pIdx].name} played ${card.name}!`, type: 'action' });
            s = resolveCardEffect(s, card, action.pIdx, action.targetIdx);

            if (s._needsDiscard) {
              s.turnPhase = 'choose_discard';
              s.chooseDiscardInfo = s._needsDiscard;
              delete s._needsDiscard;
            } else {
              s = advanceTurn(s);
            }
          }
        }
        break;
      }

      case 'counter': {
        if (s.turnPhase !== 'counter_window' || !s.pendingAction) return;
        const counterCard = s.players[action.pIdx].hand[action.cardIdx];
        if (!counterCard || counterCard.type !== 'counter') return;

        s.players[action.pIdx].hand.splice(action.cardIdx, 1);
        s.discardPile.push(counterCard);

        clearTimeout(counterTimerRef.current);

        if (counterCard.id === 'nope') {
          s.log.unshift({ text: `${s.players[action.pIdx].name} played Nope! Action cancelled!`, type: 'counter' });
          s.pendingAction = null;
          s.counterWindow = null;
          s.turnPhase = 'idle';
          s = advanceTurn(s);
        } else if (counterCard.id === 'not_today') {
          s.log.unshift({ text: `${s.players[action.pIdx].name} played Not Today! They're protected!`, type: 'counter' });
          s.players[action.pIdx].immune = true;
          // Still resolve the action, but this player is protected
          const pa = s.pendingAction;
          s.pendingAction = null;
          s.counterWindow = null;
          s = resolveCardEffect(s, pa.card, pa.pIdx, pa.targetIdx);
          if (s._needsDiscard) {
            s.turnPhase = 'choose_discard';
            s.chooseDiscardInfo = s._needsDiscard;
            delete s._needsDiscard;
          } else {
            s = advanceTurn(s);
          }
        } else if (counterCard.id === 'sweet_escape') {
          s.log.unshift({ text: `${s.players[action.pIdx].name} played Sweet Escape! Immune until next turn!`, type: 'counter' });
          s.players[action.pIdx].immune = true;
          // Don't cancel the counter window, others can still counter
          // But if this was the target, they're now safe
          return; // Don't resolve yet, counter window continues
        }
        break;
      }

      case 'claimCupcake': {
        const p = s.players[action.pIdx];
        if (p.hand.length !== WIN_COUNT) return;

        // Check rotten egg traps
        let egged = false;
        for (let i = 0; i < s.players.length; i++) {
          if (i === action.pIdx) continue;
          const tIdx = s.players[i].traps.findIndex(t => t.id === 'rotten_egg');
          if (tIdx !== -1) {
            const trap = s.players[i].traps.splice(tIdx, 1)[0];
            s.discardPile.push(trap);
            discardRandom(s, action.pIdx, 5);
            s.log.unshift({
              text: `🥚 ${s.players[i].name}'s Rotten Egg trap! ${p.name} discards 5 cards!`,
              type: 'trap'
            });
            egged = true;
            break;
          }
        }

        if (!egged) {
          s.claimedCupcake[p.id] = true;
          s.log.unshift({ text: `🧁 ${p.name} shouts CUPCAKE! They need to survive until their turn!`, type: 'system' });
        }
        break;
      }

      case 'chooseDiscard': {
        if (s.turnPhase !== 'choose_discard' || !s.chooseDiscardInfo) return;
        if (action.pIdx !== s.chooseDiscardInfo.playerIdx) return;
        const indices = [...action.cardIndices].sort((a, b) => b - a);
        for (const idx of indices) {
          if (idx < s.players[action.pIdx].hand.length) {
            s.discardPile.push(s.players[action.pIdx].hand.splice(idx, 1)[0]);
          }
        }
        s.chooseDiscardInfo = null;
        s.turnPhase = 'idle';
        checkReach10Traps(s, action.pIdx);
        s = advanceTurn(s);
        break;
      }
    }

    updateAndBroadcast(s);
  }, [updateAndBroadcast]);

  // === RESOLVE COUNTER WINDOW (HOST) ===
  const resolveCounterWindow = useCallback((countered, counterPlayerIdx, counterCard) => {
    clearTimeout(counterTimerRef.current);

    if (!gsRef.current?.pendingAction) return;
    let s = deepClone(gsRef.current);
    const pa = s.pendingAction;

    if (!countered) {
      // No counter - resolve the pending action
      s = resolveCardEffect(s, pa.card, pa.pIdx, pa.targetIdx);
      if (s._needsDiscard) {
        s.turnPhase = 'choose_discard';
        s.chooseDiscardInfo = s._needsDiscard;
        delete s._needsDiscard;
      } else {
        s = advanceTurn(s);
      }
    }

    s.pendingAction = null;
    s.counterWindow = null;

    updateAndBroadcast(s);
  }, [updateAndBroadcast]);

  // ============================================================
  // MESSAGE HANDLER
  // ============================================================
  const handleMessage = useCallback((msg, fromId) => {
    if (isHost) {
      // Host processes actions from clients
      switch (msg.type) {
        case 'join': {
          const newPlayers = [...lobbyRef.current, { id: fromId, name: msg.name }];
          lobbyRef.current = newPlayers;
          setLobbyPlayers(newPlayers);
          broadcast({ type: 'lobby', players: newPlayers });
          break;
        }
        case 'action':
          processAction({ ...msg.action, pIdx: gsRef.current?.players.findIndex(p => p.id === fromId) });
          break;
      }
    } else {
      // Client receives state updates from host
      switch (msg.type) {
        case 'lobby':
          setLobbyPlayers(msg.players);
          break;
        case 'gameState':
          setGs(msg.state);
          gsRef.current = msg.state;
          // Check if it's my turn now
          if (msg.state.currentPlayerIndex !== undefined) {
            const mi = msg.state.players.findIndex(p => p.id === myIdRef.current);
            if (msg.state.currentPlayerIndex === mi && msg.state.turnPhase === 'idle' && !msg.state.winner) {
              sfx('turn', soundOn);
            }
          }
          break;
        case 'startGame':
          setScreen('game');
          break;
      }
    }
  }, [isHost, broadcast, processAction, soundOn]);

  // ============================================================
  // NETWORK SETUP
  // ============================================================
  const createRoom = useCallback(() => {
    const code = genCode();
    setRoomCode(code);
    setIsHost(true);
    setError('');

    const peer = new Peer(`cupcake-${code}`, { debug: 0 });
    peerRef.current = peer;

    peer.on('open', (id) => {
      myIdRef.current = id;
      const me = { id, name: playerName.trim() };
      lobbyRef.current = [me];
      setLobbyPlayers([me]);
      setScreen('lobby');
    });

    peer.on('connection', (conn) => {
      connsRef.current.push(conn);
      conn.on('data', (data) => handleMessage(data, conn.peer));
      conn.on('close', () => {
        connsRef.current = connsRef.current.filter(c => c !== conn);
        // Remove from lobby
        const updated = lobbyRef.current.filter(p => p.id !== conn.peer);
        lobbyRef.current = updated;
        setLobbyPlayers(updated);
        broadcast({ type: 'lobby', players: updated });
      });
    });

    peer.on('error', (err) => {
      console.error('PeerJS error:', err);
      setError(`Connection error: ${err.type}`);
    });
  }, [playerName, handleMessage, broadcast]);

  const joinRoom = useCallback(() => {
    if (joinCode.length < 4) return;
    setError('');

    const peer = new Peer(undefined, { debug: 0 });
    peerRef.current = peer;

    peer.on('open', (id) => {
      myIdRef.current = id;
      const conn = peer.connect(`cupcake-${joinCode}`);
      hostConnRef.current = conn;

      conn.on('open', () => {
        conn.send({ type: 'join', name: playerName.trim() });
        setRoomCode(joinCode);
        setScreen('lobby');
      });

      conn.on('data', (data) => handleMessage(data, 'host'));

      conn.on('close', () => {
        setError('Disconnected from host.');
        setScreen('menu');
      });

      conn.on('error', (err) => {
        console.error('Connection error:', err);
        setError('Failed to connect. Check the room code.');
      });
    });

    peer.on('error', (err) => {
      console.error('PeerJS error:', err);
      setError(`Connection error: ${err.type}`);
    });
  }, [joinCode, playerName, handleMessage]);

  // ============================================================
  // START GAME (HOST)
  // ============================================================
  const startGame = useCallback(() => {
    const deck = createDeck();
    const players = lobbyRef.current.map(p => ({
      id: p.id,
      name: p.name,
      hand: [],
      traps: [],
      skipNextTurn: false,
      immune: false,
    }));

    // Deal 3 cards each
    for (let p = 0; p < players.length; p++) {
      for (let i = 0; i < 3; i++) {
        if (deck.length > 0) players[p].hand.push(deck.pop());
      }
    }

    const state = {
      deck,
      discardPile: [],
      players,
      currentPlayerIndex: 0,
      direction: 1,
      turnPhase: 'idle',
      counterWindow: null,
      pendingAction: null,
      chooseDiscardInfo: null,
      claimedCupcake: {},
      log: [{ text: '🧁 Cupcake Chaos begins! Let the chaos unfold!', type: 'system' }],
      winner: null,
    };

    gsRef.current = state;
    updateAndBroadcast(state);
    broadcast({ type: 'startGame' });
    setScreen('game');
    sfx('claim', soundOn);
  }, [updateAndBroadcast, broadcast, soundOn]);

  // ============================================================
  // LEAVE / CLEANUP
  // ============================================================
  const leaveGame = useCallback(() => {
    peerRef.current?.destroy();
    peerRef.current = null;
    connsRef.current = [];
    hostConnRef.current = null;
    clearTimeout(counterTimerRef.current);
    clearInterval(counterIntervalRef.current);
    setGs(null);
    gsRef.current = null;
    setScreen('menu');
    setError('');
    setLobbyPlayers([]);
    setTargetMode(false);
    setPendingCardIdx(null);
    setChooseDiscard(null);
  }, []);

  // ============================================================
  // UI ACTION HANDLERS
  // ============================================================
  const handleDraw = useCallback(() => {
    if (!canAct) return;
    sfx('draw', soundOn);
    if (isHost) {
      processAction({ type: 'draw', pIdx: myIndex });
    } else {
      sendToHost({ type: 'action', action: { type: 'draw' } });
    }
  }, [canAct, isHost, myIndex, processAction, sendToHost, soundOn]);

  const handlePlayCard = useCallback((cardIdx) => {
    if (!canAct) return;
    const card = myHand[cardIdx];
    if (!card) return;

    if (card.type === 'counter') {
      // Counter cards can only be played during counter window
      sfx('error', soundOn);
      return;
    }

    if (card.type === 'trap') {
      sfx('trap', soundOn);
      if (isHost) {
        processAction({ type: 'playCard', pIdx: myIndex, cardIdx });
      } else {
        sendToHost({ type: 'action', action: { type: 'playCard', cardIdx } });
      }
      return;
    }

    // Action card - check if needs target
    if (card.targetType === 'player') {
      // Need to select a target
      setTargetMode(true);
      setPendingCardIdx(cardIdx);
      sfx('play', soundOn);
      return;
    }

    // No target needed, play immediately
    sfx('play', soundOn);
    if (isHost) {
      processAction({ type: 'playCard', pIdx: myIndex, cardIdx });
    } else {
      sendToHost({ type: 'action', action: { type: 'playCard', cardIdx } });
    }
  }, [canAct, myHand, isHost, myIndex, processAction, sendToHost, soundOn]);

  const handleSelectTarget = useCallback((targetIdx) => {
    if (pendingCardIdx == null) return;
    setTargetMode(false);

    if (isHost) {
      processAction({ type: 'playCard', pIdx: myIndex, cardIdx: pendingCardIdx, targetIdx });
    } else {
      sendToHost({ type: 'action', action: { type: 'playCard', cardIdx: pendingCardIdx, targetIdx } });
    }
    setPendingCardIdx(null);
  }, [pendingCardIdx, isHost, myIndex, processAction, sendToHost]);

  const handleCounter = useCallback((cardIdx) => {
    sfx('counter', soundOn);
    if (isHost) {
      processAction({ type: 'counter', pIdx: myIndex, cardIdx });
    } else {
      sendToHost({ type: 'action', action: { type: 'counter', cardIdx } });
    }
  }, [isHost, myIndex, processAction, sendToHost, soundOn]);

  const handleClaimCupcake = useCallback(() => {
    sfx('claim', soundOn);
    if (isHost) {
      processAction({ type: 'claimCupcake', pIdx: myIndex });
    } else {
      sendToHost({ type: 'action', action: { type: 'claimCupcake' } });
    }
  }, [isHost, myIndex, processAction, sendToHost, soundOn]);

  const handleChooseDiscard = useCallback(() => {
    if (!chooseDiscard || chooseDiscard.selected.length !== chooseDiscard.count) return;
    if (isHost) {
      processAction({ type: 'chooseDiscard', pIdx: myIndex, cardIndices: chooseDiscard.selected });
    } else {
      sendToHost({ type: 'action', action: { type: 'chooseDiscard', cardIndices: chooseDiscard.selected } });
    }
    setChooseDiscard(null);
  }, [chooseDiscard, isHost, myIndex, processAction, sendToHost]);

  // === Counter Window Timer (client-side display) ===
  useEffect(() => {
    if (gs?.counterWindow) {
      const update = () => {
        const left = Math.max(0, (gs.counterWindow.endsAt || 0) - Date.now());
        setCounterTimeLeft(left);
        if (left <= 0) clearInterval(counterIntervalRef.current);
      };
      update();
      counterIntervalRef.current = setInterval(update, 100);
      return () => clearInterval(counterIntervalRef.current);
    } else {
      setCounterTimeLeft(0);
    }
  }, [gs?.counterWindow]);

  // === Choose Discard phase detection ===
  useEffect(() => {
    if (gs?.turnPhase === 'choose_discard' && gs?.chooseDiscardInfo?.playerIdx === myIndex && !chooseDiscard) {
      setChooseDiscard({ count: gs.chooseDiscardInfo.count, selected: [] });
    }
  }, [gs?.turnPhase, gs?.chooseDiscardInfo, myIndex, chooseDiscard]);

  // === Turn notification sound ===
  useEffect(() => {
    if (gs && isMyTurn && gs.turnPhase === 'idle' && !gs.winner) {
      sfx('turn', soundOn);
    }
  }, [gs?.currentPlayerIndex]);

  // === Victory detection ===
  useEffect(() => {
    if (gs?.winner) {
      sfx('victory', soundOn);
      setScreen('victory');
    }
  }, [gs?.winner, soundOn]);

  // ============================================================
  // RENDER SCREENS
  // ============================================================
  if (screen === 'menu') {
    return (
      <MenuScreen
        playerName={playerName}
        setPlayerName={setPlayerName}
        joinCode={joinCode}
        setJoinCode={setJoinCode}
        onHost={createRoom}
        onJoin={joinRoom}
        error={error}
      />
    );
  }

  if (screen === 'lobby') {
    return (
      <LobbyScreen
        players={lobbyPlayers}
        roomCode={roomCode}
        isHost={isHost}
        myId={myIdRef.current}
        onStart={startGame}
        onLeave={leaveGame}
      />
    );
  }

  if (screen === 'victory') {
    return (
      <VictoryScreen
        winner={gs?.winner}
        isHost={isHost}
        onPlayAgain={startGame}
        onLeave={leaveGame}
      />
    );
  }

  if (!gs) return null;

  // === MAIN GAME RENDER ===
  const otherPlayers = gs.players
    .map((p, i) => ({ ...p, idx: i }))
    .filter((_, i) => i !== myIndex);

  const showCupcakeBtn = myHand.length === WIN_COUNT && !gs.claimedCupcake[myIdRef.current] && !gs.winner;
  const hasClaimed = gs.claimedCupcake[myIdRef.current];
  const currentPlayerName = gs.players[gs.currentPlayerIndex]?.name || '???';
  const deckCount = typeof gs.deck === 'object' && Array.isArray(gs.deck) ? gs.deck.length : (gs.deck?.count ?? 0);
  const topDiscard = gs.discardPile?.[gs.discardPile.length - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0520] via-[#1a0a3a] to-[#2d0a2e] relative overflow-hidden select-none">
      <FloatingBg />

      {/* === HEADER === */}
      <header className="relative z-20 flex items-center justify-between px-3 py-2 bg-black/20 backdrop-blur-sm border-b border-white/[.05]">
        <div className="flex items-center gap-2">
          <button
            onClick={leaveGame}
            className="p-1.5 rounded-lg hover:bg-white/10 text-purple-400/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <CupcakeLogo size={28} />
          <span className="text-sm font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent hidden sm:inline">
            Cupcake Chaos
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] px-2 py-1 rounded-full bg-white/[.06] text-purple-300/50 font-mono tracking-wider">
            {roomCode}
          </span>
          <button
            onClick={() => setSoundOn(!soundOn)}
            className="p-1.5 rounded-lg hover:bg-white/10 text-purple-400/60 hover:text-white transition-colors"
          >
            {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* === TURN INDICATOR === */}
      <div className="relative z-10 text-center py-2">
        <motion.div
          key={gs.currentPlayerIndex}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${
            isMyTurn ? 'bg-yellow-500/20 border border-yellow-400/30' : 'bg-white/[.05] border border-white/[.06]'
          }`}
        >
          {isMyTurn ? (
            <>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                <Sparkles className="w-4 h-4 text-yellow-400" />
              </motion.div>
              <span className="text-sm font-bold text-yellow-300">Your Turn!</span>
            </>
          ) : (
            <>
              <Clock className="w-3.5 h-3.5 text-purple-400/60" />
              <span className="text-sm text-purple-300/70">{currentPlayerName}'s turn</span>
            </>
          )}
          {gs.direction === -1 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-300 ml-1">↺ Reversed</span>
          )}
        </motion.div>
      </div>

      {/* === OPPONENTS === */}
      <div className="relative z-10 flex justify-center gap-2 px-3 flex-wrap">
        {otherPlayers.map(p => (
          <OpponentPanel
            key={p.id}
            player={p}
            idx={p.idx}
            isCurrentTurn={gs.currentPlayerIndex === p.idx}
            color={PLAYER_COLORS[p.idx]}
            canTarget={targetMode && p.idx !== myIndex}
            onTarget={() => handleSelectTarget(p.idx)}
          />
        ))}
      </div>

      {/* === TARGET MODE BANNER === */}
      <AnimatePresence>
        {targetMode && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="relative z-30 text-center mt-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-500/20 border border-pink-400/30">
              <Eye className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-pink-300 font-medium">Select a target player</span>
              <button
                onClick={() => { setTargetMode(false); setPendingCardIdx(null); }}
                className="ml-2 p-1 rounded-lg hover:bg-white/10 text-pink-400/60"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === CENTER: DECK & DISCARD === */}
      <div className="relative z-10 flex items-center justify-center gap-6 py-4 px-4">
        {/* Deck */}
        <motion.div
          className="relative cursor-pointer"
          whileHover={canAct ? { scale: 1.05 } : {}}
          whileTap={canAct ? { scale: 0.95 } : {}}
          onClick={handleDraw}
        >
          <div className={`w-[7.5rem] h-44 rounded-2xl bg-gradient-to-br from-purple-800 via-fuchsia-800 to-pink-800 border-2 ${canAct ? 'border-yellow-400/50 shadow-lg shadow-yellow-400/20' : 'border-purple-500/30'} flex flex-col items-center justify-center relative overflow-hidden transition-all`}>
            <div className="absolute inset-0 opacity-[.06]" style={{
              backgroundImage: 'radial-gradient(circle, #a855f7 1px, transparent 1px)',
              backgroundSize: '8px 8px',
            }}/>
            <svg viewBox="0 0 48 48" className="w-12 h-12 text-purple-300/40 mb-1">
              <polygon points="24,4 27,14 37,17 27,20 24,30 21,20 11,17 21,14" fill="currentColor"/>
            </svg>
            <span className="text-lg font-black text-white/70">{deckCount}</span>
            <span className="text-[8px] text-purple-400/50 tracking-wider uppercase">Draw Pile</span>
            {canAct && (
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-yellow-400/30"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </div>
        </motion.div>

        {/* Discard Pile */}
        <div className="relative">
          {topDiscard ? (
            <GameCard card={topDiscard} disabled />
          ) : (
            <div className="w-[7.5rem] h-44 rounded-2xl border-2 border-dashed border-white/10 flex items-center justify-center">
              <span className="text-xs text-purple-400/30">Discard</span>
            </div>
          )}
          {gs.discardPile.length > 0 && (
            <div className="absolute -bottom-1 right-0 text-[9px] px-1.5 py-0.5 rounded-full bg-black/40 text-purple-300/50">
              {gs.discardPile.length}
            </div>
          )}
        </div>

        {/* Game Log (side panel) */}
        <div className="hidden md:block w-56">
          <GameLog log={gs.log} expanded={logExpanded} onToggle={() => setLogExpanded(!logExpanded)} />
        </div>
      </div>

      {/* Mobile Game Log */}
      <div className="md:hidden relative z-10 px-3">
        <GameLog log={gs.log} expanded={logExpanded} onToggle={() => setLogExpanded(!logExpanded)} />
      </div>

      {/* === MY TRAPS === */}
      {myPlayer?.traps?.length > 0 && (
        <div className="relative z-10 px-4 mt-2">
          <div className="flex items-center gap-1 mb-1">
            <Flame className="w-3 h-3 text-rose-400/60" />
            <span className="text-[10px] text-rose-400/60 font-medium">Your Traps</span>
          </div>
          <div className="flex gap-1.5">
            {myPlayer.traps.map(trap => (
              <GameCard key={trap.uid} card={trap} small disabled />
            ))}
          </div>
        </div>
      )}

      {/* === CUPCAKE CLAIM BUTTON === */}
      <AnimatePresence>
        {showCupcakeBtn && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="relative z-30 flex justify-center mt-3"
          >
            <motion.button
              onClick={handleClaimCupcake}
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 0 20px rgba(251,191,36,0.3)',
                  '0 0 40px rgba(251,191,36,0.6)',
                  '0 0 20px rgba(251,191,36,0.3)',
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-white font-black text-2xl tracking-wider shadow-2xl shadow-yellow-500/40 hover:brightness-110 transition-all"
            >
              🧁 CUPCAKE!
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {hasClaimed && !gs.winner && (
        <div className="relative z-10 text-center mt-2">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/15 border border-yellow-400/20"
          >
            <Crown className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-xs text-yellow-300/80 font-medium">CUPCAKE claimed! Survive until your turn!</span>
          </motion.div>
        </div>
      )}

      {/* === MY HAND === */}
      <div className="relative z-10 mt-3 pb-4 px-2">
        <div className="flex items-center justify-between px-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs text-purple-300/60 font-medium">Your Hand</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
              myHand.length === WIN_COUNT
                ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-400/30'
                : 'bg-white/[.06] text-purple-300/50'
            }`}>
              {myHand.length}/{WIN_COUNT}
            </span>
          </div>
          {myPlayer && (
            <div className="flex items-center gap-1.5">
              <span className="text-lg">{PLAYER_EMOJIS[myIndex]}</span>
              <span className="text-xs text-white/60 font-medium">{myPlayer.name}</span>
            </div>
          )}
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 px-2 justify-center flex-wrap">
          <AnimatePresence mode="popLayout">
            {myHand.map((card, i) => (
              <motion.div
                key={card.uid}
                initial={{ opacity: 0, scale: 0.5, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: -30 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <GameCard
                  card={card}
                  onClick={() => handlePlayCard(i)}
                  disabled={!canAct && card.type !== 'counter'}
                  selected={pendingCardIdx === i}
                  glowing={canAct && card.type === 'action'}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {canAct && (
          <p className="text-center text-[10px] text-purple-400/40 mt-1">
            Click a card to play it, or click the deck to draw.
          </p>
        )}
      </div>

      {/* === COUNTER WINDOW OVERLAY === */}
      <AnimatePresence>
        {gs.counterWindow && gs.turnPhase === 'counter_window' && (
          <CounterWindowOverlay
            cw={gs.counterWindow}
            myHand={myHand}
            myIdx={myIndex}
            onCounter={handleCounter}
            timeLeft={counterTimeLeft}
          />
        )}
      </AnimatePresence>

      {/* === CHOOSE DISCARD OVERLAY === */}
      <AnimatePresence>
        {chooseDiscard && (
          <ChooseDiscardModal
            hand={myHand}
            count={chooseDiscard.count}
            selected={chooseDiscard.selected}
            onToggle={(idx) => {
              setChooseDiscard(prev => {
                if (!prev) return prev;
                const sel = prev.selected.includes(idx)
                  ? prev.selected.filter(i => i !== idx)
                  : prev.selected.length < prev.count
                    ? [...prev.selected, idx]
                    : prev.selected;
                return { ...prev, selected: sel };
              });
            }}
            onConfirm={handleChooseDiscard}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
