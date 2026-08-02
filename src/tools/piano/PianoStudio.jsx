import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Tone from 'tone';
import { Midi } from '@tonejs/midi';
import Peer from 'peerjs';
import {
  Play, Pause, Square, Volume2, VolumeX, Upload, Download,
  Circle, Settings, Zap, Music, Hand, Rewind, FastForward,
  GraduationCap, Target, ArrowLeft, Users, Copy, Check,
  Plus, Trash2, List, ChevronDown,
  Headphones, X, MessageSquare, Layers,
  Crown, LogOut, Maximize2, Minimize2, Repeat, Tag,
  Gauge, Timer, Sparkles, Palette, Keyboard, HelpCircle,
  Activity, SkipBack, SkipForward
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */
const NT = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const N2K = {};
for (let i = 21; i <= 108; i++) {
  const oct = Math.floor(i / 12) - 1, ni = i % 12, nm = NT[ni];
  N2K[i] = { name: nm, oct, black: nm.includes('#'), full: `${nm}${oct}` };
}

const RANGES = {
  25: { s: 48, e: 73 }, 37: { s: 36, e: 73 }, 49: { s: 36, e: 85 },
  61: { s: 24, e: 85 }, 76: { s: 28, e: 104 }, 88: { s: 21, e: 109 },
};

const KMAP = {
  'a':60,'w':61,'s':62,'e':63,'d':64,'f':65,'t':66,'g':67,
  'y':68,'h':69,'u':70,'j':71,'k':72,'o':73,'l':74,'p':75,
};

const SCALE_PATTERNS = {
  Major:[0,2,4,5,7,9,11], Minor:[0,2,3,5,7,8,10], Pentatonic:[0,2,4,7,9],
  Blues:[0,3,5,6,7,10], Dorian:[0,2,3,5,7,9,10], Mixolydian:[0,2,4,5,7,9,10],
  'Harmonic Min':[0,2,3,5,7,8,11], Chromatic:[0,1,2,3,4,5,6,7,8,9,10,11],
};

/* ── Themes ── */
const THEMES = {
  midnight: {
    id:'midnight', name:'Midnight', accent:'#818cf8', accent2:'#c084fc',
    bg1:'#09090f', bg2:'#0f0f1e', glow:'rgba(129,140,248,0.15)',
    noteColors:['#818cf8','#fb7185','#34d399','#fbbf24','#c084fc','#fb923c','#22d3ee','#a3e635'],
    keyActive:'#fbbf24', keyActiveGrad:['#fef3c7','#fbbf24'],
  },
  ocean: {
    id:'ocean', name:'Ocean', accent:'#22d3ee', accent2:'#3b82f6',
    bg1:'#060d18', bg2:'#0a1628', glow:'rgba(34,211,238,0.15)',
    noteColors:['#22d3ee','#38bdf8','#06b6d4','#0ea5e9','#67e8f9','#7dd3fc','#a5f3fc','#3b82f6'],
    keyActive:'#22d3ee', keyActiveGrad:['#cffafe','#22d3ee'],
  },
  sunset: {
    id:'sunset', name:'Sunset', accent:'#fb923c', accent2:'#f43f5e',
    bg1:'#120808', bg2:'#1a0e0e', glow:'rgba(251,146,60,0.15)',
    noteColors:['#fb923c','#f43f5e','#ef4444','#f97316','#fbbf24','#fb7185','#e11d48','#eab308'],
    keyActive:'#fb923c', keyActiveGrad:['#ffedd5','#fb923c'],
  },
  aurora: {
    id:'aurora', name:'Aurora', accent:'#34d399', accent2:'#a78bfa',
    bg1:'#060f0a', bg2:'#0a1a10', glow:'rgba(52,211,153,0.15)',
    noteColors:['#34d399','#a78bfa','#2dd4bf','#818cf8','#6ee7b7','#c084fc','#5eead4','#e879f9'],
    keyActive:'#34d399', keyActiveGrad:['#d1fae5','#34d399'],
  },
};

/* ── Chord Detection ── */
const CHORD_TYPES = [
  { name:'maj', p:[0,4,7] }, { name:'min', p:[0,3,7] },
  { name:'dim', p:[0,3,6] }, { name:'aug', p:[0,4,8] },
  { name:'maj7', p:[0,4,7,11] }, { name:'min7', p:[0,3,7,10] },
  { name:'7', p:[0,4,7,10] }, { name:'sus2', p:[0,2,7] },
  { name:'sus4', p:[0,5,7] }, { name:'dim7', p:[0,3,6,9] },
  { name:'m7b5', p:[0,3,6,10] }, { name:'add9', p:[0,2,4,7] },
  { name:'6', p:[0,4,7,9] }, { name:'min6', p:[0,3,7,9] },
  { name:'9', p:[0,2,4,7,10] }, { name:'min9', p:[0,2,3,7,10] },
  { name:'maj9', p:[0,2,4,7,11] },
];

/* ── Demo Song: Für Elise – Beethoven ── */
const DEMO_SONG = (() => {
  const E = 0.27; // eighth note duration in seconds (~♩=111)
  const mn = (m, b, d = 1) => [m, b, d]; // [midi, beat, duration_in_eighths]

  // Right hand melody
  const rh = [
    // ── A section (1st time) ──
    mn(76,0), mn(75,1),                                     // Pickup: E5, D#5
    mn(76,2), mn(75,3), mn(76,4),                           // m1: E5, D#5, E5
    mn(71,5), mn(74,6), mn(72,7),                           // m2: B4, D5, C5
    mn(69,8,3),                                              // m3: A4 (dotted quarter)
    mn(60,12), mn(64,13),                                    // m4: rest, C4, E4
    mn(69,14), mn(71,15,2),                                  // m5: A4, B4 (quarter)
    mn(64,18), mn(68,19),                                    // m6: rest, E4, G#4
    mn(71,20), mn(72,21,2),                                  // m7: B4, C5 (quarter)
    mn(64,24), mn(76,25), mn(75,26),                         // m8: rest, E4 → pickup E5, D#5
    // ── A section (2nd time, different ending) ──
    mn(76,27), mn(75,28), mn(76,29),
    mn(71,30), mn(74,31), mn(72,32),
    mn(69,33,3),
    mn(60,37), mn(64,38),
    mn(69,39), mn(71,40,2),
    mn(64,43), mn(72,44),                                    // m6': rest, E4, C5
    mn(71,45), mn(69,46,2),                                  // m7': B4, A4 (resolves)
    // ── B section ──
    mn(71,48), mn(72,49), mn(74,50),                         // B4, C5, D5
    mn(76,51,3),                                              // E5 (dotted quarter)
    mn(67,55), mn(77,56),                                    // rest, G4, F5
    mn(76,57), mn(74,58,2),                                  // E5, D5 (quarter)
    mn(65,61), mn(76,62),                                    // rest, F4, E5
    mn(74,63), mn(72,64,2),                                  // D5, C5 (quarter)
    mn(64,67), mn(74,68),                                    // rest, E4, D5
    mn(72,69), mn(71,70,2),                                  // C5, B4 (quarter)
    mn(64,73),                                                // rest, E4 (transition)
    // ── A section (final) ──
    mn(76,74), mn(75,75),                                    // Pickup: E5, D#5
    mn(76,76), mn(75,77), mn(76,78),
    mn(71,79), mn(74,80), mn(72,81),
    mn(69,82,3),
    mn(60,86), mn(64,87),
    mn(69,88), mn(71,89,2),
    mn(64,92), mn(72,93),                                    // E4, C5
    mn(71,94), mn(69,95,3),                                  // B4, A4 (final, dotted quarter)
  ];

  // Left hand accompaniment
  const lh = [
    // A1
    mn(45,8), mn(52,9), mn(57,10),                           // A2, E3, A3
    mn(40,14), mn(52,15), mn(56,16),                         // E2, E3, G#3
    mn(45,20), mn(52,21), mn(57,22),                         // A2, E3, A3
    // A2
    mn(45,33), mn(52,34), mn(57,35),
    mn(40,39), mn(52,40), mn(56,41),
    mn(45,45), mn(52,46), mn(57,47),
    // B section
    mn(48,51), mn(55,52), mn(60,53),                         // C3, G3, C4
    mn(43,57), mn(55,58), mn(59,59),                         // G2, G3, B3
    mn(45,63), mn(52,64), mn(57,65),                         // A2, E3, A3
    mn(40,69), mn(52,70), mn(56,71),                         // E2, E3, G#3
    // A3 (final)
    mn(45,82), mn(52,83), mn(57,84),
    mn(40,88), mn(52,89), mn(56,90),
    mn(45,94), mn(52,95), mn(57,96),
  ];

  const toNotes = (arr, vel) => arr.map(([midi, beat, dur]) => ({
    midi,
    name: NT[midi % 12] + (Math.floor(midi / 12) - 1),
    time: beat * E,
    duration: dur * E * 0.92,
    velocity: vel,
  }));

  return {
    tracks: [
      { notes: toNotes(rh, 0.6) },
      { notes: toNotes(lh, 0.35) },
    ],
    duration: 98 * E,
    name: 'Für Elise – Beethoven',
  };
})();

function detectChord(activeSet) {
  if (activeSet.size < 2) return null;
  const pcs = [...new Set([...activeSet].map(m => m % 12))].sort((a,b) => a - b);
  if (pcs.length < 2) return null;
  let best = null;
  for (const root of pcs) {
    const iv = pcs.map(p => (p - root + 12) % 12).sort((a,b) => a - b);
    for (const ch of CHORD_TYPES) {
      if (ch.p.length === iv.length && ch.p.every((v,i) => v === iv[i])) {
        if (!best || ch.p.length > best.size) {
          best = { root: NT[root], name: ch.name, size: ch.p.length, notes: pcs.map(p => NT[p]) };
        }
      }
    }
  }
  return best || { root: null, name: null, notes: pcs.map(p => NT[p]) };
}

const fmt = s => `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`;

/* ── Particle System ── */
class Particle {
  constructor(x, y, color) {
    this.x = x; this.y = y; this.color = color;
    this.vx = (Math.random() - 0.5) * 4;
    this.vy = -Math.random() * 5 - 2;
    this.life = 1; this.decay = 0.018 + Math.random() * 0.018;
    this.size = Math.random() * 5 + 2;
  }
  update() { this.x += this.vx; this.y += this.vy; this.vy += 0.06; this.life -= this.decay; }
  draw(ctx) {
    if (this.life <= 0) return;
    ctx.globalAlpha = this.life * 0.8;
    ctx.shadowBlur = 12; ctx.shadowColor = this.color;
    ctx.fillStyle = this.color;
    ctx.beginPath(); ctx.arc(this.x, this.y, this.size * this.life, 0, Math.PI * 2); ctx.fill();
    ctx.shadowBlur = 0; ctx.globalAlpha = 1;
  }
}

/* ═══════════════════════════════════════════════════════════════
   PIANO KEYBOARD
   ═══════════════════════════════════════════════════════════════ */
const PianoKeys = React.memo(({ range, active, pbNotes, onOn, onOff, waitNote, labels, scaleNotes, theme }) => {
  const whites = [], blacks = {};
  for (let i = range.s; i < range.e; i++) {
    const k = N2K[i]; if (!k) continue;
    if (!k.black) whites.push(i); else blacks[i] = true;
  }
  const n = whites.length;
  const bkOff = nm => ({ 'C#':.62,'D#':.78,'F#':.62,'G#':.68,'A#':.78 }[nm] || .65);

  const getStyle = (midi, isBlack) => {
    const isActive = active.has(midi);
    const pb = pbNotes?.get(midi);
    const isWait = waitNote?.midi === midi;
    const isScale = scaleNotes?.has(midi % 12);
    const info = N2K[midi];
    const isC = info?.name === 'C';

    if (isBlack) {
      let bg = 'linear-gradient(180deg, #303030 0%, #1a1a1a 30%, #0a0a0a 70%, #050505 100%)';
      let sh = '2px 3px 6px rgba(0,0,0,.8), inset 0 -2px 3px rgba(0,0,0,.6), inset 0 1px 1px rgba(255,255,255,.06)';
      let tr = '';
      if (isWait) { bg = 'linear-gradient(180deg, #6ee7b7, #059669)'; sh = '0 0 30px rgba(16,185,129,.7), 0 2px 8px rgba(0,0,0,.4)'; }
      else if (isActive) { bg = `linear-gradient(180deg, ${theme.keyActiveGrad[0]}, ${theme.keyActive})`; sh = `0 0 24px ${theme.keyActive}99`; tr = 'translateY(2px)'; }
      else if (pb) { bg = `linear-gradient(180deg, ${pb}ee, ${pb}aa)`; sh = `0 0 18px ${pb}88`; }
      else if (isScale) { bg = 'linear-gradient(180deg, #3a3a5a 0%, #1e1e3a 50%, #121225 100%)'; sh = `0 0 10px ${theme.accent}22, 2px 3px 6px rgba(0,0,0,.8)`; }
      return { background: bg, boxShadow: sh, transform: tr };
    } else {
      let bg = 'linear-gradient(180deg, #fdfdfc 0%, #f7f7f5 20%, #f0efec 60%, #e5e3df 90%, #d8d5cf 100%)';
      let sh = 'inset 0 -6px 12px rgba(0,0,0,.04), inset -1px 0 0 rgba(0,0,0,.06), 0 2px 4px rgba(0,0,0,.08)';
      let tr = '';
      if (isWait) { bg = 'linear-gradient(180deg, #a7f3d0, #10b981)'; sh = '0 0 35px rgba(16,185,129,.4), inset 0 -3px 6px rgba(0,0,0,.06)'; }
      else if (isActive) { bg = `linear-gradient(180deg, ${theme.keyActiveGrad[0]}, ${theme.keyActiveGrad[1]}cc)`; sh = `0 0 24px ${theme.keyActive}55`; tr = 'translateY(1px)'; }
      else if (pb) { bg = `linear-gradient(180deg, ${pb}30, ${pb}15)`; sh = `0 0 14px ${pb}55, inset 0 -3px 6px rgba(0,0,0,.04)`; }
      else if (isScale) { bg = `linear-gradient(180deg, #e8ecff 0%, #d4d9fc 50%, #bcc5f7 100%)`; sh = `inset 0 -4px 8px rgba(0,0,0,.04), 0 0 8px ${theme.accent}18`; }
      return { background: bg, boxShadow: sh, transform: tr, borderBottom: isC ? `3px solid ${theme.accent}77` : '3px solid #b8b4ae' };
    }
  };

  return (
    <div className="relative select-none w-full h-full" style={{ touchAction: 'none' }}>
      <div className="flex h-full">
        {whites.map((midi, idx) => {
          const info = N2K[midi]; const isC = info?.name === 'C';
          return (
            <div key={midi} className="flex-1 relative cursor-pointer" style={{
              ...getStyle(midi, false),
              borderRight: idx < n - 1 ? '1px solid #ccc9c2' : 'none',
              borderRadius: '0 0 6px 6px',
              transition: 'transform 50ms ease, background 80ms ease, box-shadow 80ms ease',
              zIndex: 1, minWidth: 0,
            }}
              onPointerDown={e => { e.preventDefault(); onOn(midi); }}
              onPointerUp={e => { e.preventDefault(); onOff(midi); }}
              onPointerLeave={e => { if (e.buttons > 0) onOff(midi); }}
              onTouchStart={e => { e.preventDefault(); onOn(midi); }}
              onTouchEnd={e => { e.preventDefault(); onOff(midi); }}
            >
              {(labels || isC) && (
                <span className={`absolute bottom-2 left-0 right-0 text-center font-mono pointer-events-none select-none
                  ${active.has(midi) ? 'font-bold text-[10px]' : isC ? 'font-bold text-[10px]' : 'text-[8px]'}`}
                  style={{ color: active.has(midi) ? theme.keyActive : isC ? theme.accent : 'rgba(120,115,105,.5)' }}>
                  {info?.full}
                </span>
              )}
            </div>
          );
        })}
      </div>
      {whites.map((midi, idx) => {
        const bm = midi + 1; if (!blacks[bm]) return null;
        const info = N2K[bm]; if (!info) return null;
        const ww = 100 / n, left = (idx + bkOff(info.name)) * ww, bw = ww * 0.58;
        return (
          <div key={bm} className="absolute top-0 cursor-pointer" style={{
            left: `${left}%`, width: `${bw}%`, height: '62%', ...getStyle(bm, true),
            borderRadius: '0 0 5px 5px', transition: 'transform 50ms ease, background 80ms ease, box-shadow 80ms ease',
            zIndex: 10, minWidth: 0,
          }}
            onPointerDown={e => { e.stopPropagation(); e.preventDefault(); onOn(bm); }}
            onPointerUp={e => { e.stopPropagation(); e.preventDefault(); onOff(bm); }}
            onPointerLeave={e => { if (e.buttons > 0) onOff(bm); }}
            onTouchStart={e => { e.preventDefault(); e.stopPropagation(); onOn(bm); }}
            onTouchEnd={e => { e.preventDefault(); e.stopPropagation(); onOff(bm); }}
          />
        );
      })}
    </div>
  );
});

/* ═══════════════════════════════════════════════════════════════
   WATERFALL CANVAS
   ═══════════════════════════════════════════════════════════════ */
const WaterfallCanvas = ({ tracks, muted, range, curTime, playing, speed, muteL, muteR, loopA, loopB, activeNotes, theme }) => {
  const cRef = useRef(null), dRef = useRef(null), afRef = useRef(null);
  const particlesRef = useRef([]);

  const draw = useCallback(() => {
    const c = cRef.current; if (!c) return;
    const ctx = c.getContext('2d');
    const W = c.width, H = c.height;

    // Background with subtle gradient
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, theme.bg1);
    bg.addColorStop(1, theme.bg2);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Subtle radial glow from bottom center
    const rg = ctx.createRadialGradient(W / 2, H + 40, 0, W / 2, H, H * 0.7);
    rg.addColorStop(0, theme.glow);
    rg.addColorStop(1, 'transparent');
    ctx.fillStyle = rg;
    ctx.fillRect(0, 0, W, H);

    const wk = [];
    for (let i = range.s; i < range.e; i++) if (!N2K[i]?.black) wk.push(i);
    const nW = wk.length; if (!nW) return;
    const cW = W / nW;

    // Subtle grid
    ctx.strokeStyle = 'rgba(255,255,255,0.018)';
    ctx.lineWidth = 0.5;
    for (let i = 1; i < nW; i++) {
      ctx.beginPath(); ctx.moveTo(i * cW, 0); ctx.lineTo(i * cW, H); ctx.stroke();
    }

    // C note column highlight
    wk.forEach((midi, idx) => {
      if (N2K[midi]?.name === 'C') {
        ctx.fillStyle = theme.glow.replace(/[\d.]+\)$/, '0.04)');
        ctx.fillRect(idx * cW, 0, cW, H);
      }
    });

    const t = playing ? Tone.Transport.seconds * speed : curTime;
    const tw = 4, pps = H / tw;

    // Loop region
    if (loopA !== null && loopB !== null) {
      const y1 = H - ((loopA - t) * pps), y2 = H - ((loopB - t) * pps);
      ctx.fillStyle = `${theme.keyActive}08`;
      ctx.fillRect(0, Math.min(y1, y2), W, Math.abs(y2 - y1));
    }

    // Draw falling notes
    const nc = theme.noteColors;
    tracks.forEach((track, ti) => {
      if (muted[ti]) return;
      const col = nc[ti % nc.length];

      track.notes.forEach(note => {
        if (note.midi < range.s || note.midi >= range.e) return;
        if ((note.midi < 60 && muteL) || (note.midi >= 60 && muteR)) return;
        const dt = note.time - t;
        if (dt >= tw || dt + note.duration < -0.5) return;

        const inf = N2K[note.midi];
        let x, nw;
        if (inf.black) {
          let wi = 0;
          for (let i = range.s; i < note.midi; i++) if (!N2K[i]?.black) wi++;
          nw = cW * 0.52; x = wi * cW - nw / 2;
        } else {
          let wi = 0;
          for (let i = range.s; i <= note.midi; i++) if (!N2K[i]?.black) { if (i === note.midi) break; wi++; }
          x = wi * cW + 1.5; nw = cW - 3;
        }

        const yB = H - (dt * pps);
        const nh = Math.max(note.duration * pps, 6);
        const yT = yB - nh;
        const prox = Math.max(0, 1 - Math.abs(dt) * 1.5);

        ctx.save();
        ctx.shadowBlur = 6 + prox * 22;
        ctx.shadowColor = col;

        // Note body with glass effect
        const ng = ctx.createLinearGradient(x, yT, x, yB);
        ng.addColorStop(0, col + 'dd');
        ng.addColorStop(0.3, col + 'bb');
        ng.addColorStop(0.7, col + 'aa');
        ng.addColorStop(1, col + '88');
        ctx.fillStyle = ng;
        const r = Math.min(nw / 3.5, 7);
        ctx.beginPath(); ctx.roundRect(x, yT, nw, nh, r); ctx.fill();

        // Glass highlight on top
        if (nh > 10) {
          const hg = ctx.createLinearGradient(x, yT, x, yT + Math.min(8, nh * 0.3));
          hg.addColorStop(0, 'rgba(255,255,255,0.30)');
          hg.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.fillStyle = hg;
          ctx.beginPath(); ctx.roundRect(x + 1, yT + 0.5, nw - 2, Math.min(8, nh * 0.3), [r, r, 0, 0]); ctx.fill();
        }

        // Side highlight (subtle)
        if (nh > 12 && nw > 8) {
          const sg = ctx.createLinearGradient(x, yT, x + 3, yT);
          sg.addColorStop(0, 'rgba(255,255,255,0.08)');
          sg.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.fillStyle = sg;
          ctx.fillRect(x + 1, yT + 4, 3, nh - 8);
        }

        ctx.restore();

        // Particles on hit
        if (dt <= 0 && dt > -0.08) {
          for (let p = 0; p < 4; p++) {
            particlesRef.current.push(new Particle(x + nw / 2, H - 6, col));
          }
        }
      });
    });

    // Particles
    particlesRef.current = particlesRef.current.filter(p => p.life > 0);
    particlesRef.current.forEach(p => { p.update(); p.draw(ctx); });

    // Active note glow columns rising from bottom
    if (activeNotes && activeNotes.size > 0) {
      activeNotes.forEach(midi => {
        if (midi < range.s || midi >= range.e) return;
        const inf = N2K[midi]; if (!inf) return;
        let x, nw;
        if (inf.black) {
          let wi = 0; for (let i = range.s; i < midi; i++) if (!N2K[i]?.black) wi++;
          nw = cW * 0.52; x = wi * cW - nw / 2;
        } else {
          let wi = 0; for (let i = range.s; i <= midi; i++) if (!N2K[i]?.black) { if (i === midi) break; wi++; }
          x = wi * cW + 1.5; nw = cW - 3;
        }
        const gh = ctx.createLinearGradient(x, H, x, H - 80);
        gh.addColorStop(0, `${theme.keyActive}55`);
        gh.addColorStop(0.5, `${theme.keyActive}15`);
        gh.addColorStop(1, 'transparent');
        ctx.fillStyle = gh;
        ctx.fillRect(x, H - 80, nw, 80);
      });
    }

    // Hit line
    const hlg = ctx.createLinearGradient(0, H - 4, 0, H);
    hlg.addColorStop(0, 'transparent');
    hlg.addColorStop(0.3, `${theme.accent}cc`);
    hlg.addColorStop(1, `${theme.accent}44`);
    ctx.fillStyle = hlg;
    ctx.fillRect(0, H - 4, W, 4);

    // Thin bright line
    ctx.fillStyle = `${theme.accent}bb`;
    ctx.fillRect(0, H - 2, W, 1);

    afRef.current = requestAnimationFrame(draw);
  }, [tracks, muted, range, curTime, playing, speed, muteL, muteR, loopA, loopB, activeNotes, theme]);

  useEffect(() => { afRef.current = requestAnimationFrame(draw); return () => cancelAnimationFrame(afRef.current); }, [draw]);

  useEffect(() => {
    const resize = () => { if (dRef.current && cRef.current) { cRef.current.width = dRef.current.clientWidth; cRef.current.height = dRef.current.clientHeight; } };
    const ro = new ResizeObserver(resize);
    if (dRef.current) ro.observe(dRef.current);
    resize();
    return () => ro.disconnect();
  }, []);

  return <div ref={dRef} className="w-full h-full"><canvas ref={cRef} className="w-full h-full block" /></div>;
};

/* ═══════════════════════════════════════════════════════════════
   INFO STRIP (Chord + Visualizer + Stats)
   ═══════════════════════════════════════════════════════════════ */
const InfoStrip = ({ chord, analyserRef, sessionTime, nPlayed, streak, theme, activeNotes }) => {
  const barsRef = useRef(null);
  const afRef = useRef(null);

  useEffect(() => {
    const canvas = barsRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = 200; canvas.height = 28;

    const draw = () => {
      afRef.current = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, 200, 28);
      const an = analyserRef?.current;
      if (!an) return;
      let values;
      try { values = an.getValue(); } catch { return; }
      if (!values || !values.length) return;

      const bars = 32;
      const bw = 200 / bars;
      for (let i = 0; i < bars; i++) {
        const idx = Math.floor(i * values.length / bars);
        const db = values[idx];
        const v = Math.max(0, Math.min(1, (db + 80) / 70));
        const h = v * 26;
        if (h < 1) continue;
        const g = ctx.createLinearGradient(0, 28, 0, 28 - h);
        g.addColorStop(0, theme.accent + 'aa');
        g.addColorStop(1, theme.accent2 + '44');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.roundRect(i * bw + 0.5, 28 - h, bw - 1.5, h, 1.5);
        ctx.fill();
      }
    };
    draw();
    return () => cancelAnimationFrame(afRef.current);
  }, [analyserRef, theme]);

  return (
    <div className="h-9 flex items-center px-4 shrink-0 z-10" style={{
      background: 'rgba(255,255,255,0.015)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
    }}>
      {/* Chord display */}
      <div className="flex-1 flex items-center gap-2 min-w-0">
        <AnimatePresence mode="wait">
          {chord && chord.root ? (
            <motion.div key={chord.root + chord.name}
              initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="flex items-baseline gap-1">
              <span className="text-base font-black tracking-tight" style={{ color: theme.accent }}>{chord.root}</span>
              <span className="text-xs font-medium text-white/40">{chord.name}</span>
            </motion.div>
          ) : chord && chord.notes ? (
            <motion.div key="notes" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex gap-1.5">
              {chord.notes.map((n, i) => (
                <span key={i} className="text-[11px] font-medium" style={{ color: theme.accent + 'aa' }}>{n}</span>
              ))}
            </motion.div>
          ) : (
            <motion.span key="empty" initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} className="text-[11px] text-white/20">
              Play notes to detect chords
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Audio visualizer */}
      <canvas ref={barsRef} className="w-[200px] h-7 opacity-70 shrink-0 mx-4" />

      {/* Mini stats */}
      <div className="flex-1 flex items-center justify-end gap-4">
        <div className="flex items-center gap-1.5">
          <Zap size={10} style={{ color: theme.keyActive + '88' }} />
          <span className="text-[10px] font-bold text-white/40">{streak}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Activity size={10} className="text-white/20" />
          <span className="text-[10px] text-white/30 font-mono">{nPlayed} notes</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Timer size={10} className="text-white/20" />
          <span className="text-[10px] text-white/30 font-mono">{fmt(sessionTime)}</span>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   UI COMPONENTS
   ═══════════════════════════════════════════════════════════════ */
const DropBtn = ({ icon: Icon, label, children, badge, theme }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('pointerdown', h); return () => document.removeEventListener('pointerdown', h);
  }, []);
  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150"
        style={{
          background: open ? 'rgba(255,255,255,0.08)' : 'transparent',
          color: open ? '#fff' : 'rgba(255,255,255,0.45)',
        }}
        onMouseEnter={e => { if (!open) { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; } }}
        onMouseLeave={e => { if (!open) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; } }}
      >
        <Icon size={14} />
        {label && <span className="hidden sm:inline">{label}</span>}
        {badge && <span className="w-1.5 h-1.5 rounded-full" style={{ background: theme?.accent || '#818cf8' }} />}
        <ChevronDown size={10} className={`transition-transform duration-150 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -6, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6, scale: .96 }}
            transition={{ duration: .12 }}
            className="absolute top-full mt-1.5 right-0 z-[100] min-w-[240px] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden"
            style={{ background: 'rgba(16,16,34,0.97)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div onClick={() => setOpen(false)}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Drawer = ({ open, onClose, title, children, theme }) => (
  <AnimatePresence>
    {open && (
      <>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80]" style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }} onClick={onClose} />
        <motion.div initial={{ x: -360 }} animate={{ x: 0 }} exit={{ x: -360 }}
          transition={{ type: 'spring', damping: 30, stiffness: 350 }}
          className="fixed left-0 top-0 bottom-0 w-[340px] z-[90] flex flex-col"
          style={{ background: 'rgba(12,12,28,0.97)', backdropFilter: 'blur(24px)', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 className="text-sm font-semibold text-white/90">{title}</h3>
            <button onClick={onClose} className="p-1.5 rounded-lg transition-colors hover:bg-white/10">
              <X size={15} className="text-white/40" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-5">{children}</div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

/* ═══════════════════════════════════════════════════════════════
   SONG PLANNER
   ═══════════════════════════════════════════════════════════════ */
const SongPlanner = ({ onLoad, theme }) => {
  const [songs, setSongs] = useState(() => { try { return JSON.parse(localStorage.getItem('ps_songs') || '[]'); } catch { return []; } });
  const [form, setForm] = useState(false);
  const [title, setTitle] = useState('');
  const [composer, setComposer] = useState('');
  const [diff, setDiff] = useState('intermediate');
  const fRef = useRef(null);

  useEffect(() => { localStorage.setItem('ps_songs', JSON.stringify(songs)); }, [songs]);

  const addFile = e => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = ev => setSongs(p => [...p, { id: Date.now(), title: f.name.replace(/\.(mid|midi)$/i, ''), composer: '', diff: 'intermediate', data: Array.from(new Uint8Array(ev.target.result)) }]);
    r.readAsArrayBuffer(f); e.target.value = '';
  };

  const dc = { beginner: theme.accent, intermediate: theme.keyActive, advanced: '#f43f5e' };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button onClick={() => fRef.current?.click()} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium transition-colors"
          style={{ background: theme.accent + '18', color: theme.accent, border: `1px solid ${theme.accent}22` }}>
          <Upload size={14} /> Import MIDI
        </button>
        <button onClick={() => setForm(!form)} className="px-3 py-2.5 bg-white/5 hover:bg-white/10 text-white/70 rounded-xl text-xs transition-colors">
          <Plus size={14} />
        </button>
        <input ref={fRef} type="file" accept=".mid,.midi" onChange={addFile} className="hidden" />
      </div>
      {form && (
        <div className="space-y-2 bg-white/[0.03] p-3 rounded-xl border border-white/5">
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title..."
            className="w-full bg-white/5 text-white rounded-lg px-3 py-2 text-xs border border-white/10 outline-none focus:border-white/20" />
          <div className="flex gap-2">
            <input value={composer} onChange={e => setComposer(e.target.value)} placeholder="Composer..."
              className="flex-1 bg-white/5 text-white rounded-lg px-3 py-2 text-xs border border-white/10 outline-none" />
            <select value={diff} onChange={e => setDiff(e.target.value)} className="bg-white/5 text-white rounded-lg px-2 py-2 text-xs border border-white/10">
              <option value="beginner">Easy</option><option value="intermediate">Medium</option><option value="advanced">Hard</option>
            </select>
          </div>
          <button onClick={() => { if (title.trim()) { setSongs(p => [...p, { id: Date.now(), title, composer, diff, data: null }]); setTitle(''); setComposer(''); setForm(false); } }}
            className="w-full py-2 rounded-lg text-xs font-medium transition-colors" style={{ background: theme.accent + '25', color: theme.accent }}>Add</button>
        </div>
      )}
      {songs.length === 0 ? (
        <div className="text-center py-12 text-white/15">
          <Music size={32} className="mx-auto mb-2 opacity-40" /><p className="text-xs">No songs yet</p>
        </div>
      ) : songs.map(s => (
        <div key={s.id} className="flex items-center gap-3 p-3 rounded-xl transition-colors group hover:bg-white/[0.04]" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: theme.accent + '12' }}>
            <Music size={14} style={{ color: theme.accent }} />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-medium text-white/90 truncate">{s.title}</h4>
            {s.composer && <p className="text-[10px] text-white/30">{s.composer}</p>}
          </div>
          <span className="text-[9px] font-medium" style={{ color: dc[s.diff] }}>{s.diff}</span>
          {s.data && (
            <button onClick={() => onLoad(new Uint8Array(s.data).buffer)}
              className="p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all" style={{ background: theme.accent + '20' }}>
              <Play size={10} style={{ color: theme.accent }} />
            </button>
          )}
          <button onClick={() => setSongs(p => p.filter(x => x.id !== s.id))}
            className="p-1.5 hover:bg-rose-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
            <Trash2 size={10} className="text-rose-400" />
          </button>
        </div>
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   MULTIPLAYER HUB
   ═══════════════════════════════════════════════════════════════ */
const MultiplayerHub = ({ onNote, theme }) => {
  const [mode, setMode] = useState('menu');
  const [name, setName] = useState(() => localStorage.getItem('ps_name') || '');
  const [code, setCode] = useState('');
  const [host, setHost] = useState(false);
  const [peers, setPeers] = useState([]);
  const [msgs, setMsgs] = useState([]);
  const [chat, setChat] = useState('');
  const [copied, setCopied] = useState(false);
  const [listen, setListen] = useState(true);
  const pRef = useRef(null), conns = useRef([]), hConn = useRef(null);
  const chatEndRef = useRef(null);

  useEffect(() => { if (name) localStorage.setItem('ps_name', name); }, [name]);
  useEffect(() => () => { conns.current.forEach(c => c.close()); pRef.current?.destroy(); }, []);
  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs]);

  const bc = (d, ex) => conns.current.forEach(c => { if (c !== ex && c.open) try { c.send(d); } catch {} });

  const onData = (d, conn) => {
    if (d.type === 'note_on' && listen) { onNote?.('on', d.midi, d.vel, d.name); if (host) bc(d, conn); }
    else if (d.type === 'note_off' && listen) { onNote?.('off', d.midi, 0, d.name); if (host) bc(d, conn); }
    else if (d.type === 'chat') { setMsgs(p => [...p, { n: d.name, t: d.text, ts: Date.now() }]); if (host) bc(d, conn); }
    else if (d.type === 'join') { setPeers(p => p.find(x => x.id === conn.peer) ? p : [...p, { n: d.name, id: conn.peer }]); setMsgs(p => [...p, { n: '', t: `${d.name} joined`, ts: Date.now(), sys: true }]); if (host) bc(d, conn); }
    else if (d.type === 'leave') { setPeers(p => p.filter(x => x.id !== conn.peer)); setMsgs(p => [...p, { n: '', t: `${d.name} left`, ts: Date.now(), sys: true }]); }
  };

  const doHost = () => {
    if (!name.trim()) return;
    const c = 'PIANO-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setCode(c); setHost(true);
    const p = new Peer(c, { debug: 0 }); pRef.current = p;
    p.on('open', id => { setMode('live'); setPeers([{ n: name, id, host: true }]); });
    p.on('connection', conn => { conns.current.push(conn); conn.on('data', d => onData(d, conn)); conn.on('close', () => { conns.current = conns.current.filter(x => x !== conn); setPeers(p2 => p2.filter(x => x.id !== conn.peer)); }); });
  };

  const doJoin = () => {
    if (!name.trim() || !code.trim()) return;
    const p = new Peer(undefined, { debug: 0 }); pRef.current = p;
    p.on('open', () => {
      const conn = p.connect(code.trim().toUpperCase());
      hConn.current = conn; conns.current.push(conn);
      conn.on('open', () => { conn.send({ type: 'join', name }); setMode('live'); });
      conn.on('data', d => onData(d, conn));
      conn.on('close', () => setMode('menu'));
    });
  };

  const leave = () => {
    const d = { type: 'leave', name };
    host ? bc(d) : hConn.current?.open && hConn.current.send(d);
    conns.current.forEach(c => c.close()); conns.current = [];
    pRef.current?.destroy(); pRef.current = null; hConn.current = null;
    setMode('menu'); setPeers([]); setMsgs([]); setHost(false); setCode('');
  };

  const send = () => {
    if (!chat.trim()) return;
    const d = { type: 'chat', name, text: chat };
    host ? bc(d) : hConn.current?.open && hConn.current.send(d);
    setMsgs(p => [...p, { n: name, t: chat, ts: Date.now() }]); setChat('');
  };

  const sendNote = useCallback((type, midi, vel) => {
    const d = { type: type === 'on' ? 'note_on' : 'note_off', midi, vel, name };
    host ? bc(d) : hConn.current?.open && hConn.current.send(d);
  }, [host, name]);
  useEffect(() => { if (onNote) onNote._send = sendNote; }, [sendNote, onNote]);

  const inputStyle = 'w-full bg-white/5 text-white rounded-xl px-4 py-2.5 text-xs border border-white/10 outline-none focus:border-white/20';

  if (mode === 'menu') return (
    <div className="space-y-4">
      <p className="text-xs text-white/30 leading-relaxed">Create a room or join with a code to play together in real-time.</p>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name..." className={inputStyle} />
      <button onClick={doHost} disabled={!name.trim()} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-medium transition-all disabled:opacity-30"
        style={{ background: theme.accent + '18', color: theme.accent, border: `1px solid ${theme.accent}22` }}>
        <Crown size={14} /> Create Room
      </button>
      <div className="flex gap-2">
        <input value={code} onChange={e => setCode(e.target.value)} placeholder="Room code..."
          className="flex-1 bg-white/5 text-white rounded-xl px-3 py-2.5 text-xs border border-white/10 outline-none font-mono uppercase" />
        <button onClick={doJoin} disabled={!name.trim() || !code.trim()}
          className="px-4 py-2.5 bg-emerald-500/15 hover:bg-emerald-500/25 disabled:opacity-30 text-emerald-300 border border-emerald-500/20 rounded-xl text-xs font-medium transition-colors">
          Join
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-3 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <button onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
            className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg text-[10px] font-mono text-white/80 transition-colors">
            {code} {copied ? <Check size={10} className="text-emerald-400" /> : <Copy size={10} className="text-white/30" />}
          </button>
          {host && <span className="text-[9px] px-2 py-0.5 rounded-full font-medium" style={{ background: theme.keyActive + '18', color: theme.keyActive }}>HOST</span>}
        </div>
        <div className="flex gap-1">
          <button onClick={() => setListen(!listen)} className="p-1.5 rounded-lg transition-colors" style={{ background: listen ? theme.accent + '20' : 'rgba(255,255,255,0.05)' }}>
            {listen ? <Volume2 size={12} style={{ color: theme.accent }} /> : <VolumeX size={12} className="text-white/30" />}
          </button>
          <button onClick={leave} className="p-1.5 hover:bg-rose-500/20 rounded-lg transition-colors"><LogOut size={12} className="text-rose-400" /></button>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {peers.map(p => (
          <div key={p.id} className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            <span className="text-[10px] text-white/80">{p.n}</span>
            {p.host && <Crown size={8} style={{ color: theme.keyActive }} />}
          </div>
        ))}
      </div>
      <div className="flex-1 bg-black/20 rounded-xl p-3 overflow-y-auto space-y-1 min-h-[160px]">
        {msgs.map((m, i) => (
          <div key={i} className={`text-[11px] ${m.sys ? 'text-white/15 italic text-center' : ''}`}>
            {!m.sys && <span className="font-semibold" style={{ color: theme.accent + 'aa' }}>{m.n}: </span>}
            <span className="text-white/55">{m.t}</span>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="flex gap-2">
        <input value={chat} onChange={e => setChat(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Message..." className="flex-1 bg-white/5 text-white rounded-xl px-3 py-2 text-[11px] border border-white/10 outline-none" />
        <button onClick={send} className="px-3 py-2 rounded-xl transition-colors" style={{ background: theme.accent + '18' }}>
          <MessageSquare size={12} style={{ color: theme.accent }} />
        </button>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   SHORTCUTS MODAL
   ═══════════════════════════════════════════════════════════════ */
const ShortcutsModal = ({ open, onClose, theme }) => (
  <AnimatePresence>
    {open && (
      <>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100]" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }} onClick={onClose} />
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-8" onClick={onClose}>
          <div className="w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
            style={{ background: 'rgba(14,14,30,0.97)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(24px)' }}
            onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="flex items-center gap-2">
                <Keyboard size={16} style={{ color: theme.accent }} />
                <h3 className="text-sm font-semibold text-white/90">Keyboard Shortcuts</h3>
              </div>
              <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg transition-colors"><X size={14} className="text-white/40" /></button>
            </div>
            <div className="p-6 space-y-3 max-h-[60vh] overflow-y-auto">
              {[
                ['A - L', 'Play white keys (C4-B4)'],
                ['W, E, T, Y, U, O, P', 'Play black keys'],
                ['Space', 'Play / Pause'],
                ['?', 'Toggle this help'],
                ['F', 'Toggle fullscreen'],
              ].map(([key, desc]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-xs text-white/50">{desc}</span>
                  <div className="flex gap-1">
                    {key.split(', ').map(k => (
                      <kbd key={k} className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium text-white/70"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        {k}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function PianoStudio() {
  // ── Theme ──
  const [themeId, setThemeId] = useState(() => localStorage.getItem('ps_theme') || 'midnight');
  const theme = THEMES[themeId] || THEMES.midnight;
  useEffect(() => { localStorage.setItem('ps_theme', themeId); }, [themeId]);

  // ── Playback state ──
  const [playing, setPlaying] = useState(false);
  const [curTime, setCurTime] = useState(0);
  const [dur, setDur] = useState(0);
  const [tracks, setTracks] = useState([]);
  const [muted, setMuted] = useState({});
  const [active, setActive] = useState(new Set());
  const [pbNotes, setPbNotes] = useState(new Map());
  const [fileName, setFileName] = useState('');

  // ── Settings ──
  const [vol, setVol] = useState(0.7);
  const [speed, setSpeed] = useState(1.0);
  const [tempo, setTempo] = useState(120);
  const [range, setRange] = useState(RANGES[49]);
  const [nKeys, setNKeys] = useState(49);
  const [metronome, setMetronome] = useState(false);
  const [muteL, setMuteL] = useState(false);
  const [muteR, setMuteR] = useState(false);
  const [learn, setLearn] = useState(false);
  const [waitNote, setWaitNote] = useState(null);
  const [labels, setLabels] = useState(false);
  const [transpose, setTranspose] = useState(0);
  const [sustain, setSustain] = useState(false);
  const sustainRef = useRef(new Set());

  // ── Scale ──
  const [scaleRoot, setScaleRoot] = useState(null);
  const [scaleType, setScaleType] = useState('Major');
  const scaleNotes = useMemo(() => {
    if (scaleRoot === null) return null;
    const set = new Set();
    SCALE_PATTERNS[scaleType]?.forEach(i => set.add((scaleRoot + i) % 12));
    return set;
  }, [scaleRoot, scaleType]);

  // ── Chord detection ──
  const chord = useMemo(() => detectChord(active), [active]);

  // ── Loop ──
  const [loopA, setLoopA] = useState(null);
  const [loopB, setLoopB] = useState(null);
  const [loopOn, setLoopOn] = useState(false);

  // ── Recording ──
  const [rec, setRec] = useState(false);
  const [recNotes, setRecNotes] = useState([]);
  const [recStart, setRecStart] = useState(0);
  const [recDur, setRecDur] = useState(0);

  // ── MIDI ──
  const [midiA, setMidiA] = useState(null);
  const [midiIn, setMidiIn] = useState(null);
  const [midiList, setMidiList] = useState([]);

  // ── Panels ──
  const [songs, setSongs] = useState(false);
  const [lobby, setLobby] = useState(false);
  const [fs, setFs] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);

  // ── Stats ──
  const [nPlayed, setNPlayed] = useState(0);
  const [streak, setStreak] = useState(0);
  const [sessionStart] = useState(Date.now());
  const [sessionTime, setSessionTime] = useState(0);
  const [accuracy, setAccuracy] = useState({ hit: 0, miss: 0 });

  // ── Tap tempo ──
  const tapTimesRef = useRef([]);

  const synthRef = useRef(null);
  const metRef = useRef(null);
  const analyserRef = useRef(null);
  const lobbyRef = useRef({ _send: () => {} });

  // Session timer
  useEffect(() => {
    const id = setInterval(() => setSessionTime(Math.floor((Date.now() - sessionStart) / 1000)), 1000);
    return () => clearInterval(id);
  }, [sessionStart]);

  // Init audio
  useEffect(() => {
    const s = new Tone.Sampler({
      urls: {
        A0:'A0.mp3',C1:'C1.mp3','D#1':'Ds1.mp3','F#1':'Fs1.mp3',A1:'A1.mp3',C2:'C2.mp3','D#2':'Ds2.mp3','F#2':'Fs2.mp3',
        A2:'A2.mp3',C3:'C3.mp3','D#3':'Ds3.mp3','F#3':'Fs3.mp3',A3:'A3.mp3',C4:'C4.mp3','D#4':'Ds4.mp3','F#4':'Fs4.mp3',
        A4:'A4.mp3',C5:'C5.mp3','D#5':'Ds5.mp3','F#5':'Fs5.mp3',A5:'A5.mp3',C6:'C6.mp3','D#6':'Ds6.mp3','F#6':'Fs6.mp3',
        A6:'A6.mp3',C7:'C7.mp3','D#7':'Ds7.mp3','F#7':'Fs7.mp3',A7:'A7.mp3',C8:'C8.mp3',
      },
      release: 1.2, baseUrl: 'https://tonejs.github.io/audio/salamander/',
    }).toDestination();
    s.volume.value = Tone.gainToDb(0.7);
    synthRef.current = s;

    const m = new Tone.MembraneSynth({ volume: -12 }).toDestination();
    metRef.current = m;

    // Audio analyser for visualizer
    try {
      const an = new Tone.Analyser('fft', 64);
      s.connect(an);
      analyserRef.current = an;
    } catch {}

    return () => { s.dispose(); m.dispose(); };
  }, []);

  // Load demo song on mount
  useEffect(() => {
    setTracks(DEMO_SONG.tracks);
    setDur(DEMO_SONG.duration);
    setTempo(111);
    setFileName(DEMO_SONG.name);
  }, []);

  useEffect(() => { if (synthRef.current) synthRef.current.volume.value = Tone.gainToDb(vol); }, [vol]);

  useEffect(() => {
    if (metronome && metRef.current) {
      const ms = (60 / tempo) * 1000;
      const id = setInterval(() => metRef.current.triggerAttackRelease('C2', '16n'), ms);
      return () => clearInterval(id);
    }
  }, [metronome, tempo]);

  useEffect(() => {
    if (rec) { const id = setInterval(() => setRecDur(Math.floor((Date.now() - recStart) / 1000)), 1000); return () => clearInterval(id); }
  }, [rec, recStart]);

  // MIDI devices
  useEffect(() => {
    if (!navigator.requestMIDIAccess) return;
    navigator.requestMIDIAccess().then(a => {
      setMidiA(a);
      const upd = () => { const l = []; a.inputs.forEach(i => l.push({ id: i.id, name: i.name })); setMidiList(l); };
      upd(); a.onstatechange = upd;
    }).catch(() => {});
  }, []);

  useEffect(() => {
    if (!midiA) return;
    const h = msg => {
      const [cmd, note, vel] = msg.data;
      if ((cmd & 0xF0) === 0xB0 && note === 64) { vel >= 64 ? setSustain(true) : (() => { setSustain(false); releaseSustained(); })(); return; }
      if (cmd === 144 && vel > 0) noteOn(note, vel / 127, true);
      else if (cmd === 128 || (cmd === 144 && vel === 0)) noteOff(note);
    };
    midiA.inputs.forEach(i => { i.onmidimessage = (!midiIn || i.id === midiIn) ? h : null; });
  }, [midiA, midiIn, sustain]);

  // Keyboard shortcuts
  useEffect(() => {
    const down = new Set();
    const kd = e => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
      const k = e.key.toLowerCase();
      if (KMAP[k] && !down.has(k)) { down.add(k); noteOn(KMAP[k] + transpose, 0.7, true); }
      if (k === ' ') { e.preventDefault(); playing ? pause() : play(); }
      if (e.key === '?') setShowShortcuts(p => !p);
    };
    const ku = e => { const k = e.key.toLowerCase(); if (KMAP[k]) { down.delete(k); noteOff(KMAP[k] + transpose); } };
    window.addEventListener('keydown', kd);
    window.addEventListener('keyup', ku);
    return () => { window.removeEventListener('keydown', kd); window.removeEventListener('keyup', ku); };
  }, [transpose, playing]);

  // Playback tracking
  useEffect(() => {
    if (!playing || !tracks.length) { if (pbNotes.size) setPbNotes(new Map()); return; }
    const id = setInterval(() => {
      const t = Tone.Transport.seconds * speed;
      setCurTime(t);
      if (loopOn && loopA !== null && loopB !== null && t >= loopB) { seekTo(loopA); return; }
      const a = new Map();
      const nc = theme.noteColors;
      tracks.forEach((tr, i) => { if (muted[i]) return; const c = nc[i % nc.length]; tr.notes.forEach(n => { if (t >= n.time && t < n.time + n.duration) a.set(n.midi, c); }); });
      setPbNotes(a);
    }, 20);
    return () => clearInterval(id);
  }, [playing, tracks, muted, speed, loopOn, loopA, loopB, theme]);

  // ── Note actions ──
  const noteOn = useCallback((midi, vel = 0.7, user = false) => {
    if (!synthRef.current || midi < 21 || midi > 108) return;
    if (midi < 60 && muteL) return;
    if (midi >= 60 && muteR) return;
    Tone.start();
    synthRef.current.triggerAttack(Tone.Frequency(midi, 'midi').toNote(), Tone.now(), vel);
    setActive(p => new Set(p).add(midi));
    if (user) {
      setNPlayed(p => p + 1); setStreak(p => p + 1);
      lobbyRef.current?._send?.('on', midi, vel);
    }
    if (learn && waitNote && user && waitNote.midi === midi) {
      setAccuracy(p => ({ ...p, hit: p.hit + 1 }));
      setWaitNote(null);
      setTimeout(() => { if (Tone.Transport.state === 'paused') { Tone.Transport.start(); setPlaying(true); } }, 150);
    }
    if (rec && user) setRecNotes(p => [...p, { n: midi, t: Date.now() - recStart, vel, type: 'on' }]);
  }, [muteL, muteR, learn, waitNote, rec, recStart]);

  const noteOff = useCallback(midi => {
    if (!synthRef.current) return;
    if (sustain) { sustainRef.current.add(midi); return; }
    synthRef.current.triggerRelease(Tone.Frequency(midi, 'midi').toNote());
    setActive(p => { const s = new Set(p); s.delete(midi); return s; });
    lobbyRef.current?._send?.('off', midi, 0);
    if (rec) setRecNotes(p => [...p, { n: midi, t: Date.now() - recStart, type: 'off' }]);
  }, [sustain, rec, recStart]);

  const releaseSustained = useCallback(() => {
    sustainRef.current.forEach(m => {
      synthRef.current?.triggerRelease(Tone.Frequency(m, 'midi').toNote());
      setActive(p => { const s = new Set(p); s.delete(m); return s; });
    });
    sustainRef.current.clear();
  }, []);

  const remoteNote = useCallback((type, midi, vel) => { type === 'on' ? noteOn(midi, vel) : noteOff(midi); }, [noteOn, noteOff]);

  // ── MIDI file ──
  const loadMidi = async (buf, name) => {
    try {
      const m = typeof buf === 'string' ? await Midi.fromUrl(buf) : new Midi(buf);
      setTracks(m.tracks.filter(t => t.notes.length > 0));
      setDur(m.duration); setTempo(m.header.tempos?.[0]?.bpm || 120);
      setFileName(name || 'MIDI'); setCurTime(0); setMuted({}); setLoopA(null); setLoopB(null);
    } catch (e) { console.error(e); }
  };

  // ── Playback ──
  const play = async () => {
    await Tone.start();
    if (Tone.Transport.state === 'started') { pause(); return; }
    Tone.Transport.cancel(); Tone.Transport.bpm.value = tempo;
    tracks.forEach((tr, ti) => {
      if (muted[ti]) return;
      tr.notes.forEach(note => {
        if ((note.midi < 60 && muteL) || (note.midi >= 60 && muteR)) return;
        const at = note.time / speed, ad = note.duration / speed;
        if (learn) Tone.Transport.schedule(() => { setWaitNote({ midi: note.midi }); Tone.Transport.pause(); setPlaying(false); }, Math.max(0, at - 0.01));
        Tone.Transport.schedule(t => { if (!learn) synthRef.current?.triggerAttackRelease(note.name, ad, t, note.velocity); }, at);
      });
    });
    Tone.Transport.schedule(() => stop(), dur / speed + 0.5);
    Tone.Transport.start(); setPlaying(true);
  };
  const pause = () => { Tone.Transport.pause(); setPlaying(false); };
  const stop = () => { Tone.Transport.stop(); Tone.Transport.cancel(); setPlaying(false); setActive(new Set()); setPbNotes(new Map()); setCurTime(0); setWaitNote(null); };
  const seekTo = s => { const w = playing; if (w) Tone.Transport.pause(); Tone.Transport.seconds = s / speed; setCurTime(s); if (w) Tone.Transport.start(); };

  // ── Recording ──
  const startRec = () => { setRec(true); setRecNotes([]); setRecStart(Date.now()); setRecDur(0); };
  const stopRec = () => setRec(false);
  const dlRec = () => {
    const m = new Midi(), tr = m.addTrack();
    recNotes.forEach(n => { if (n.type === 'on') { const o = recNotes.find(x => x.n === n.n && x.type === 'off' && x.t > n.t); if (o) tr.addNote({ midi: n.n, time: n.t / 1000, duration: (o.t - n.t) / 1000, velocity: n.vel || .7 }); } });
    const b = new Blob([m.toArray()], { type: 'audio/midi' });
    const u = URL.createObjectURL(b), a = document.createElement('a');
    a.href = u; a.download = `recording-${Date.now()}.mid`; a.click(); URL.revokeObjectURL(u);
  };

  // ── Tap tempo ──
  const tapTempo = () => {
    const now = Date.now();
    const taps = tapTimesRef.current;
    // Reset if last tap was >2s ago
    if (taps.length > 0 && now - taps[taps.length - 1] > 2000) { tapTimesRef.current = []; }
    taps.push(now);
    if (taps.length > 6) taps.shift();
    if (taps.length >= 2) {
      const intervals = [];
      for (let i = 1; i < taps.length; i++) intervals.push(taps[i] - taps[i - 1]);
      const avg = intervals.reduce((a, b) => a + b, 0) / intervals.length;
      const bpm = Math.round(60000 / avg);
      if (bpm >= 30 && bpm <= 300) setTempo(bpm);
    }
  };

  const kh = nKeys >= 76 ? 115 : nKeys >= 49 ? 135 : 155;
  const nc = theme.noteColors;

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden" style={{
      touchAction: 'none',
      background: `
        radial-gradient(ellipse 80% 60% at 15% 85%, ${theme.accent}07 0%, transparent 100%),
        radial-gradient(ellipse 60% 50% at 85% 15%, ${theme.accent2}05 0%, transparent 100%),
        radial-gradient(ellipse 100% 80% at 50% 100%, rgba(0,0,0,0.4) 0%, transparent 100%),
        linear-gradient(180deg, ${theme.bg1} 0%, ${theme.bg2} 50%, ${theme.bg1} 100%)
      `,
    }}>

      {/* ═══ TOOLBAR ═══ */}
      <div className="shrink-0 z-40">
        <div className="flex items-center gap-1.5 px-3 py-2" style={{
          background: 'rgba(255,255,255,0.02)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
        }}>
          {/* ── Left: Logo & File ── */}
          <div className="flex items-center gap-1.5 mr-2">
            <a href="#/tools" className="p-1.5 rounded-lg transition-colors hover:bg-white/5">
              <ArrowLeft size={15} className="text-white/35" />
            </a>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent2})`, boxShadow: `0 4px 15px ${theme.accent}33` }}>
              <Music size={14} className="text-white" />
            </div>
            <span className="text-xs font-semibold text-white/70 hidden md:inline ml-1">Piano Studio</span>
          </div>

          {/* ── File ── */}
          <div className="flex items-center gap-1 rounded-xl px-1 py-0.5" style={{ background: 'rgba(255,255,255,0.025)' }}>
            <label className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-white/50 text-xs cursor-pointer transition-colors hover:bg-white/5 hover:text-white/70">
              <Upload size={12} /> <span className="hidden sm:inline">Open</span>
              <input type="file" accept=".mid,.midi" onChange={e => { const f = e.target.files[0]; if (f) { const r = new FileReader(); r.onload = ev => loadMidi(ev.target.result, f.name); r.readAsArrayBuffer(f); } e.target.value = ''; }} className="hidden" />
            </label>
            {fileName && (
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/[0.03]">
                <span className="text-[10px] text-white/45 max-w-[90px] truncate font-medium">{fileName}</span>
                <button onClick={() => { setTracks([]); setDur(0); setFileName(''); stop(); }} className="hover:text-rose-400 transition-colors">
                  <X size={9} className="text-white/25" />
                </button>
              </div>
            )}
            {tracks.length > 0 && (
              <DropBtn icon={Layers} label="Tracks" theme={theme}>
                <div className="p-2.5 space-y-1">
                  {tracks.map((t, i) => (
                    <button key={i} onClick={() => { setMuted(p => ({ ...p, [i]: !p[i] })); if (playing) { stop(); setTimeout(play, 80); } }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-all hover:bg-white/5 ${muted[i] ? 'text-white/25 line-through' : 'text-white/75'}`}>
                      <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: muted[i] ? '#333' : nc[i % nc.length] }} />
                      Track {i + 1}
                      <span className="ml-auto text-white/15 text-[10px]">{t.notes.length}n</span>
                    </button>
                  ))}
                </div>
              </DropBtn>
            )}
          </div>

          <div className="w-px h-5 bg-white/[0.04] mx-1" />

          {/* ── Transport (center, prominent) ── */}
          <div className="flex items-center gap-1 rounded-xl px-1.5 py-0.5 mx-auto" style={{ background: 'rgba(255,255,255,0.025)' }}>
            <button onClick={() => seekTo(Math.max(0, curTime - 5))} disabled={!dur}
              className="p-1.5 rounded-lg transition-colors hover:bg-white/5 disabled:opacity-15">
              <SkipBack size={13} className="text-white/50" />
            </button>
            <button onClick={playing ? pause : play}
              className="p-3 rounded-xl shadow-lg active:scale-95 transition-all mx-1"
              style={{
                background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent2})`,
                boxShadow: `0 4px 20px ${theme.accent}40`,
              }}>
              {playing ? <Pause size={16} className="text-white" /> : <Play size={16} className="text-white ml-0.5" />}
            </button>
            <button onClick={stop} className="p-1.5 rounded-lg transition-colors hover:bg-white/5">
              <Square size={12} className="text-white/50" />
            </button>
            <button onClick={() => seekTo(Math.min(dur, curTime + 5))} disabled={!dur}
              className="p-1.5 rounded-lg transition-colors hover:bg-white/5 disabled:opacity-15">
              <SkipForward size={13} className="text-white/50" />
            </button>

            <div className="w-px h-4 bg-white/[0.06] mx-1" />

            <span className="text-[10px] font-mono text-white/35 tabular-nums hidden sm:inline">
              {fmt(curTime)}<span className="text-white/15"> / {fmt(dur)}</span>
            </span>
          </div>

          {/* ── Speed ── */}
          <div className="flex items-center gap-px rounded-xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.025)' }}>
            {[0.5, 0.75, 1, 1.25, 1.5].map(s => (
              <button key={s} onClick={() => { const w = playing; if (w) stop(); setSpeed(s); if (w) setTimeout(play, 80); }}
                className="px-2 py-1.5 text-[10px] font-medium transition-all"
                style={{
                  background: speed === s ? theme.accent + '30' : 'transparent',
                  color: speed === s ? theme.accent : 'rgba(255,255,255,0.25)',
                }}>
                {s}x
              </button>
            ))}
          </div>

          <div className="w-px h-5 bg-white/[0.04] mx-1" />

          {/* ── Right controls ── */}
          <div className="flex items-center gap-0.5">
            {/* Learn mode */}
            <button onClick={() => { setLearn(!learn); setWaitNote(null); if (playing) stop(); setAccuracy({ hit: 0, miss: 0 }); }}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-medium transition-all"
              style={{
                background: learn ? theme.accent + '20' : 'transparent',
                color: learn ? theme.accent : 'rgba(255,255,255,0.35)',
                boxShadow: learn ? `0 0 10px ${theme.accent}15` : 'none',
              }}>
              <GraduationCap size={12} />
              <span className="hidden lg:inline">{learn ? 'Learning' : 'Learn'}</span>
            </button>

            {learn && accuracy.hit > 0 && (
              <span className="text-[10px] font-mono font-bold" style={{ color: theme.accent + 'aa' }}>
                {Math.round(accuracy.hit / (accuracy.hit + accuracy.miss) * 100)}%
              </span>
            )}

            {/* Hands */}
            <button onClick={() => setMuteL(!muteL)} className="px-2 py-1.5 rounded-lg text-[10px] font-medium transition-all"
              style={{ color: muteL ? 'rgba(255,255,255,0.15)' : theme.accent + '99', background: muteL ? 'transparent' : theme.accent + '0a' }}>
              <Hand size={10} className="transform -scale-x-100 inline" /> L
            </button>
            <button onClick={() => setMuteR(!muteR)} className="px-2 py-1.5 rounded-lg text-[10px] font-medium transition-all"
              style={{ color: muteR ? 'rgba(255,255,255,0.15)' : theme.accent2 + '99', background: muteR ? 'transparent' : theme.accent2 + '0a' }}>
              <Hand size={10} className="inline" /> R
            </button>

            {/* Loop A-B */}
            <div className="flex items-center gap-px mx-0.5">
              <button onClick={() => { setLoopA(curTime); if (loopB !== null && curTime >= loopB) setLoopB(null); }}
                className="px-1.5 py-1 rounded-l-lg text-[10px] font-bold transition-all"
                style={{ background: loopA !== null ? theme.keyActive + '22' : 'rgba(255,255,255,0.025)', color: loopA !== null ? theme.keyActive : 'rgba(255,255,255,0.15)' }}>
                A
              </button>
              <button onClick={() => { setLoopB(curTime); if (loopA !== null && curTime <= loopA) setLoopA(null); }}
                className="px-1.5 py-1 text-[10px] font-bold transition-all"
                style={{ background: loopB !== null ? theme.keyActive + '22' : 'rgba(255,255,255,0.025)', color: loopB !== null ? theme.keyActive : 'rgba(255,255,255,0.15)' }}>
                B
              </button>
              <button onClick={() => { if (loopA !== null && loopB !== null) setLoopOn(!loopOn); }}
                className="px-1.5 py-1 rounded-r-lg transition-all"
                style={{ background: loopOn ? theme.keyActive + '30' : 'rgba(255,255,255,0.025)', color: loopOn ? theme.keyActive : 'rgba(255,255,255,0.15)' }}>
                <Repeat size={10} />
              </button>
            </div>

            {/* Record */}
            <button onClick={rec ? stopRec : startRec}
              className="p-1.5 rounded-lg transition-all"
              style={{ background: rec ? 'rgba(244,63,94,0.2)' : 'transparent', color: rec ? '#f43f5e' : 'rgba(255,255,255,0.3)' }}>
              <Circle size={12} className={rec ? 'fill-current animate-pulse' : ''} />
            </button>
            {rec && <span className="text-[10px] font-mono text-rose-400/70">{fmt(recDur)}</span>}
            {recNotes.length > 0 && !rec && (
              <button onClick={dlRec} className="p-1.5 hover:bg-emerald-500/15 rounded-lg transition-colors">
                <Download size={12} className="text-emerald-400" />
              </button>
            )}

            <div className="w-px h-5 bg-white/[0.04] mx-1" />

            {/* Volume */}
            <div className="hidden md:flex items-center gap-1.5 px-2 py-1 rounded-lg" style={{ background: 'rgba(255,255,255,0.025)' }}>
              <Volume2 size={11} className="text-white/25" />
              <input type="range" min="0" max="1" step=".01" value={vol} onChange={e => setVol(+e.target.value)}
                className="w-14 h-0.5 opacity-50 accent-current" style={{ color: theme.accent }} />
            </div>

            {/* Scale */}
            <DropBtn icon={Sparkles} label="Scale" badge={scaleRoot !== null} theme={theme}>
              <div className="p-3.5 space-y-3">
                <div>
                  <p className="text-[10px] text-white/25 mb-2 font-medium uppercase tracking-wider">Root Note</p>
                  <div className="flex flex-wrap gap-1">
                    <button onClick={() => setScaleRoot(null)}
                      className="px-2.5 py-1 rounded-md text-[10px] transition-all"
                      style={{ background: scaleRoot === null ? 'rgba(255,255,255,0.1)' : 'transparent', color: scaleRoot === null ? '#fff' : 'rgba(255,255,255,0.3)' }}>
                      Off
                    </button>
                    {NT.map((nm, i) => (
                      <button key={nm} onClick={() => setScaleRoot(i)}
                        className="px-2.5 py-1 rounded-md text-[10px] transition-all"
                        style={{ background: scaleRoot === i ? theme.accent + '30' : 'transparent', color: scaleRoot === i ? theme.accent : 'rgba(255,255,255,0.35)' }}>
                        {nm}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-white/25 mb-2 font-medium uppercase tracking-wider">Scale</p>
                  <div className="flex flex-wrap gap-1">
                    {Object.keys(SCALE_PATTERNS).map(s => (
                      <button key={s} onClick={() => setScaleType(s)}
                        className="px-2.5 py-1 rounded-md text-[10px] transition-all"
                        style={{ background: scaleType === s ? theme.accent + '30' : 'transparent', color: scaleType === s ? theme.accent : 'rgba(255,255,255,0.35)' }}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </DropBtn>

            {/* Theme */}
            <DropBtn icon={Palette} label="Theme" theme={theme}>
              <div className="p-3 space-y-1.5">
                {Object.values(THEMES).map(t => (
                  <button key={t.id} onClick={() => setThemeId(t.id)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs transition-all hover:bg-white/5"
                    style={{ background: themeId === t.id ? 'rgba(255,255,255,0.06)' : 'transparent' }}>
                    <div className="flex gap-0.5">
                      <div className="w-3 h-3 rounded-full" style={{ background: t.accent }} />
                      <div className="w-3 h-3 rounded-full" style={{ background: t.accent2 }} />
                    </div>
                    <span className={themeId === t.id ? 'text-white/90 font-medium' : 'text-white/45'}>{t.name}</span>
                    {themeId === t.id && <Check size={12} style={{ color: t.accent }} className="ml-auto" />}
                  </button>
                ))}
              </div>
            </DropBtn>

            {/* Settings */}
            <DropBtn icon={Settings} theme={theme}>
              <div className="p-3.5 space-y-4 min-w-[260px]">
                {/* Keys */}
                <div>
                  <p className="text-[10px] text-white/25 mb-2 font-medium uppercase tracking-wider">Keys</p>
                  <div className="flex gap-1">
                    {[25, 37, 49, 61, 76, 88].map(k => (
                      <button key={k} onClick={() => { setNKeys(k); setRange(RANGES[k]); }}
                        className="flex-1 py-1.5 rounded-lg text-[10px] font-medium transition-all"
                        style={{ background: nKeys === k ? theme.accent + '30' : 'rgba(255,255,255,0.03)', color: nKeys === k ? theme.accent : 'rgba(255,255,255,0.3)' }}>
                        {k}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Tempo */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] text-white/25 font-medium uppercase tracking-wider">Tempo</p>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-medium" style={{ color: theme.accent }}>{tempo}</span>
                      <span className="text-[9px] text-white/20">BPM</span>
                      <button onClick={tapTempo} className="px-2 py-0.5 rounded text-[9px] font-medium transition-all hover:bg-white/10"
                        style={{ background: 'rgba(255,255,255,0.05)', color: theme.accent }}>
                        TAP
                      </button>
                    </div>
                  </div>
                  <input type="range" min="40" max="240" value={tempo} onChange={e => setTempo(+e.target.value)}
                    className="w-full h-1 accent-current rounded-full" style={{ color: theme.accent }} />
                </div>
                {/* Transpose */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-white/25 font-medium uppercase tracking-wider">Transpose</span>
                  <div className="flex items-center gap-1.5">
                    <button onClick={() => setTranspose(p => p - 1)} className="w-6 h-6 rounded-md bg-white/5 hover:bg-white/10 text-white/50 text-xs flex items-center justify-center transition-colors">-</button>
                    <span className="text-[11px] font-mono font-medium w-7 text-center" style={{ color: transpose !== 0 ? theme.accent : 'rgba(255,255,255,0.35)' }}>
                      {transpose > 0 ? `+${transpose}` : transpose}
                    </span>
                    <button onClick={() => setTranspose(p => p + 1)} className="w-6 h-6 rounded-md bg-white/5 hover:bg-white/10 text-white/50 text-xs flex items-center justify-center transition-colors">+</button>
                  </div>
                </div>
                {/* Toggles */}
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { label: 'Labels', on: labels, toggle: () => setLabels(!labels) },
                    { label: 'Metronome', on: metronome, toggle: () => setMetronome(!metronome) },
                    { label: 'Sustain', on: sustain, toggle: () => setSustain(!sustain) },
                  ].map(item => (
                    <button key={item.label} onClick={item.toggle}
                      className="px-3 py-1.5 rounded-lg text-[10px] font-medium transition-all"
                      style={{ background: item.on ? theme.accent + '20' : 'rgba(255,255,255,0.03)', color: item.on ? theme.accent : 'rgba(255,255,255,0.3)' }}>
                      {item.label}
                    </button>
                  ))}
                </div>
                {/* MIDI */}
                {midiList.length > 0 && (
                  <div>
                    <p className="text-[10px] text-white/25 mb-2 font-medium uppercase tracking-wider">MIDI Input</p>
                    <select value={midiIn || ''} onChange={e => setMidiIn(e.target.value || null)}
                      className="w-full bg-white/5 text-white/70 rounded-lg px-3 py-2 text-[10px] border border-white/10 outline-none">
                      <option value="">All devices</option>
                      {midiList.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                    </select>
                  </div>
                )}
              </div>
            </DropBtn>

            {/* Panel toggles */}
            <button onClick={() => setSongs(!songs)} className="p-1.5 rounded-lg transition-all"
              style={{ background: songs ? theme.accent + '20' : 'transparent', color: songs ? theme.accent : 'rgba(255,255,255,0.25)' }}
              title="Songs">
              <List size={14} />
            </button>
            <button onClick={() => setLobby(!lobby)} className="p-1.5 rounded-lg transition-all"
              style={{ background: lobby ? '#34d399' + '20' : 'transparent', color: lobby ? '#34d399' : 'rgba(255,255,255,0.25)' }}
              title="Multiplayer">
              <Users size={14} />
            </button>
            <button onClick={() => setShowShortcuts(true)} className="p-1.5 rounded-lg transition-all text-white/20 hover:text-white/40 hover:bg-white/5" title="Shortcuts">
              <HelpCircle size={14} />
            </button>
            <button onClick={() => { if (!document.fullscreenElement) { document.documentElement.requestFullscreen?.(); setFs(true); } else { document.exitFullscreen?.(); setFs(false); } }}
              className="p-1.5 text-white/20 hover:text-white/40 hover:bg-white/5 rounded-lg transition-all" title="Fullscreen">
              {fs ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </button>
          </div>
        </div>

        {/* ── Progress bar ── */}
        {dur > 0 && (
          <div className="h-1.5 cursor-pointer relative group" style={{ background: 'rgba(0,0,0,0.4)' }}
            onClick={e => { const r = e.currentTarget.getBoundingClientRect(); seekTo((e.clientX - r.left) / r.width * dur); }}>
            <motion.div className="h-full" style={{
              width: `${Math.min(100, (curTime / dur) * 100)}%`,
              background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`,
              boxShadow: `0 0 8px ${theme.accent}55`,
            }} transition={{ duration: 0.1 }} />
            {/* Playhead dot */}
            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `${Math.min(100, (curTime / dur) * 100)}%`, transform: 'translate(-50%, -50%)', background: '#fff', boxShadow: `0 0 10px ${theme.accent}` }} />
            {loopA !== null && <div className="absolute top-0 bottom-0 w-0.5" style={{ left: `${(loopA / dur) * 100}%`, background: theme.keyActive + '88' }} />}
            {loopB !== null && <div className="absolute top-0 bottom-0 w-0.5" style={{ left: `${(loopB / dur) * 100}%`, background: theme.keyActive + '88' }} />}
            {loopA !== null && loopB !== null && loopOn && (
              <div className="absolute top-0 bottom-0" style={{
                left: `${(loopA / dur) * 100}%`,
                width: `${((loopB - loopA) / dur) * 100}%`,
                background: theme.keyActive + '10',
              }} />
            )}
          </div>
        )}
      </div>

      {/* ═══ MAIN AREA ═══ */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Waterfall */}
        <div className="flex-1 min-h-0 relative">
          <WaterfallCanvas tracks={tracks} muted={muted} range={range} curTime={curTime} playing={playing} speed={speed}
            muteL={muteL} muteR={muteR} loopA={loopOn ? loopA : null} loopB={loopOn ? loopB : null} activeNotes={active} theme={theme} />

          {/* Learn overlay */}
          {waitNote && learn && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="px-10 py-6 rounded-3xl border shadow-2xl"
                style={{
                  background: `${theme.accent}18`,
                  backdropFilter: 'blur(16px)',
                  borderColor: theme.accent + '33',
                  boxShadow: `0 20px 60px ${theme.accent}22`,
                }}>
                <div className="flex flex-col items-center gap-2">
                  <GraduationCap size={30} style={{ color: theme.accent }} />
                  <p className="text-2xl font-black tracking-tight text-white">{N2K[waitNote.midi]?.full}</p>
                  <p className="text-[11px] text-white/40">Press the highlighted key</p>
                </div>
              </motion.div>
            </div>
          )}

          {/* Empty state */}
          {!tracks.length && !rec && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="mb-4"
                >
                  <div className="w-20 h-20 rounded-3xl mx-auto flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${theme.accent}15, ${theme.accent2}15)`, border: `1px solid ${theme.accent}10` }}>
                    <Music size={32} style={{ color: theme.accent + '55' }} />
                  </div>
                </motion.div>
                <p className="text-base font-semibold text-white/20 mb-1">Open a MIDI file or play freely</p>
                <p className="text-xs text-white/10">Keyboard &middot; Mouse &middot; Touch &middot; MIDI Device</p>
              </div>
            </div>
          )}
        </div>

        {/* ── Info Strip ── */}
        <InfoStrip chord={chord} analyserRef={analyserRef} sessionTime={sessionTime} nPlayed={nPlayed} streak={streak} theme={theme} activeNotes={active} />

        {/* ── Keyboard ── */}
        <div className="shrink-0 relative" style={{ height: kh }}>
          {/* Top shadow for depth */}
          <div className="absolute top-0 left-0 right-0 h-3 z-20 pointer-events-none"
            style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 100%)' }} />
          <PianoKeys range={range} active={active} pbNotes={pbNotes} onOn={m => noteOn(m, .7, true)} onOff={noteOff}
            waitNote={waitNote} labels={labels} scaleNotes={scaleNotes} theme={theme} />
        </div>
      </div>

      {/* ═══ DRAWERS ═══ */}
      <Drawer open={songs} onClose={() => setSongs(false)} title="Song Planner" theme={theme}>
        <SongPlanner onLoad={buf => loadMidi(buf, 'Planned Song')} theme={theme} />
      </Drawer>
      <Drawer open={lobby} onClose={() => setLobby(false)} title="Multiplayer" theme={theme}>
        <MultiplayerHub onNote={remoteNote} theme={theme} />
      </Drawer>

      {/* ═══ SHORTCUTS MODAL ═══ */}
      <ShortcutsModal open={showShortcuts} onClose={() => setShowShortcuts(false)} theme={theme} />
    </div>
  );
}
