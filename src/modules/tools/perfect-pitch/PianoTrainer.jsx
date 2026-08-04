import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Music, Trophy, Play, Volume2, Settings,
  RotateCcw, Headphones, BarChart3, Timer,
  Shuffle, Layers, Check, Flame,
  Target, BookOpen, Sliders, X,
  RefreshCw, Home, Eye, EyeOff
} from 'lucide-react';

/* ═══ MUSIC THEORY DATA ═══ */
const NAMES_EN = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const NAMES_DE = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'B', 'H'];
const DIATONIC_STEPS = [0, 0, 1, 1, 2, 3, 3, 4, 4, 5, 5, 6];

const CHORDS = [
  { id: 'maj',  en: 'Major',         de: 'Dur',        short: 'dur',  intervals: [0,4,7],    color: '#34d399' },
  { id: 'min',  en: 'Minor',         de: 'Moll',       short: 'moll', intervals: [0,3,7],    color: '#60a5fa' },
  { id: 'dim',  en: 'Diminished',    de: 'Vermindert', short: 'dim',  intervals: [0,3,6],    color: '#f87171' },
  { id: 'aug',  en: 'Augmented',     de: 'Übermäßig',  short: 'aug',  intervals: [0,4,8],    color: '#fb923c' },
  { id: 'maj7', en: 'Major 7th',     de: 'Maj7',       short: 'Δ7',   intervals: [0,4,7,11], color: '#a78bfa' },
  { id: 'min7', en: 'Minor 7th',     de: 'm7',         short: 'm7',   intervals: [0,3,7,10], color: '#22d3ee' },
  { id: 'dom7', en: 'Dominant 7th',  de: 'Dom7',       short: '7',    intervals: [0,4,7,10], color: '#facc15' },
  { id: 'sus2', en: 'Suspended 2nd', de: 'Sus2',       short: 'sus2', intervals: [0,2,7],    color: '#e879f9' },
  { id: 'sus4', en: 'Suspended 4th', de: 'Sus4',       short: 'sus4', intervals: [0,5,7],    color: '#f472b6' },
];

const CHORD_SETS = {
  beginner:     ['maj', 'min'],
  intermediate: ['maj', 'min', 'dim', 'aug'],
  expert:       CHORDS.map(c => c.id),
};

const getMidiInfo = (midi, lang = 'de') => {
  const pc = ((midi % 12) + 12) % 12;
  const octave = Math.floor(midi / 12) - 1;
  const nameEn = NAMES_EN[pc];
  const nameDe = NAMES_DE[pc];
  const name = lang === 'de' ? nameDe : nameEn;
  const isSharp = [1, 3, 6, 8, 10].includes(pc);
  const absDiatonic = octave * 7 + DIATONIC_STEPS[pc];
  const trebleStep = absDiatonic - 30;
  const bassStep   = absDiatonic - 18;
  return { midi, pc, octave, name, nameEn, nameDe, isSharp, trebleStep, bassStep };
};

/* ═══ MUSICAL STAFF ═══ */
function MusicalStaff({ clef = 'treble', notes = [], showAnswer = false }) {
  const gap      = 16;
  const staffTop = 52;
  const noteRx   = 10;
  const noteRy   = 7;
  const svgW     = 500;
  const numLines = 5;
  const svgH     = staffTop + (numLines + 5) * gap + 36;

  const getY = (step) => {
    const bottomY = staffTop + (numLines - 1) * gap;
    return bottomY - step * (gap / 2);
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        style={{ width: '100%', maxHeight: 240 }}
      >
        <rect x="0" y="0" width={svgW} height={svgH} rx="16" fill="#0f172a" fillOpacity="0.8" />
        <rect x="0" y="0" width={svgW} height={svgH} rx="16" fill="none" stroke="#1e3a5f" strokeWidth="1" />

        {/* Staff Lines */}
        {Array.from({ length: numLines }, (_, i) => {
          const y = staffTop + i * gap;
          return (
            <line key={i} x1="56" y1={y} x2={svgW - 20} y2={y}
              stroke={i === 0 || i === 4 ? '#94a3b8' : '#64748b'}
              strokeWidth={i === 0 || i === 4 ? 2 : 1.2}
            />
          );
        })}

        {/* Vertical bar */}
        <line x1="56" y1={staffTop} x2="56" y2={staffTop + (numLines-1)*gap} stroke="#94a3b8" strokeWidth="2.5" />

        {/* Clef symbol */}
        <text
          x={clef === 'treble' ? '62' : '60'}
          y={clef === 'treble' ? staffTop + gap * 3.4 : staffTop + gap * 2.1}
          fontSize={clef === 'treble' ? gap * 7 : gap * 4.8}
          fontFamily="Times New Roman, serif"
          fill={clef === 'treble' ? '#38bdf8' : '#c084fc'}
          opacity="0.95"
        >
          {clef === 'treble' ? '𝄞' : '𝄢'}
        </text>

        {/* Notes */}
        {notes.map((noteObj, idx) => {
          const info = getMidiInfo(noteObj.midi);
          const step = clef === 'bass' ? info.bassStep : info.trebleStep;
          const y = getY(step);
          const color = noteObj.color || '#f1f5f9';
          const xCenter = svgW / 2 + (notes.length > 1 ? (idx - (notes.length - 1) / 2) * (noteRx * 2.4) : 0);

          const ledgerLines = [];
          if (step <= -2) for (let s = -2; s >= step; s -= 2) ledgerLines.push(getY(s));
          if (step >= 10) for (let s = 10; s <= step; s += 2) ledgerLines.push(getY(s));

          const stemUp = step < 4;

          return (
            <g key={idx}>
              {ledgerLines.map((ly, li) => (
                <line key={li}
                  x1={xCenter - noteRx - 6} y1={ly}
                  x2={xCenter + noteRx + 6} y2={ly}
                  stroke="#94a3b8" strokeWidth="2"
                />
              ))}
              {info.isSharp && (
                <text x={xCenter - noteRx - 16} y={y + 6}
                  fontSize="20" fontWeight="bold" fill={color}
                  fontFamily="Times New Roman, serif"
                >♯</text>
              )}
              <ellipse
                cx={xCenter} cy={y} rx={noteRx} ry={noteRy}
                fill={color}
                transform={`rotate(-12 ${xCenter} ${y})`}
              />
              <line
                x1={stemUp ? xCenter + noteRx - 1 : xCenter - noteRx + 1} y1={y}
                x2={stemUp ? xCenter + noteRx - 1 : xCenter - noteRx + 1} y2={stemUp ? y - gap * 3 : y + gap * 3}
                stroke={color} strokeWidth="2.2"
              />
              {showAnswer && (
                <text x={xCenter} y={svgH - 10} textAnchor="middle"
                  fontSize="14" fontWeight="bold" fill={color}
                  fontFamily="Inter, sans-serif"
                >{info.name}{info.octave}</text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ═══ VIRTUAL PIANO KEYBOARD ═══ */
function VirtualPiano({
  startMidi = 48, endMidi = 72,
  activeKeys = new Set(), correctKeys = new Set(), wrongKeys = new Set(),
  onKeyClick, disabled = false, showLabels = false, keyHeight = 140, lang = 'de',
}) {
  const whiteNotes = [];
  for (let m = startMidi; m <= endMidi; m++) {
    if (![1, 3, 6, 8, 10].includes(m % 12)) whiteNotes.push(m);
  }
  const totalWhite = whiteNotes.length;
  const whiteIndexMap = {};
  whiteNotes.forEach((m, i) => { whiteIndexMap[m] = i; });

  const blackNotes = [];
  for (let m = startMidi; m <= endMidi; m++) {
    if ([1, 3, 6, 8, 10].includes(m % 12)) blackNotes.push(m);
  }

  const whiteW = 100 / totalWhite;
  const blackW = whiteW * 0.6;
  const blackH = keyHeight * 0.62;

  const getBlackLeft = (midi) => {
    const lw = whiteIndexMap[midi - 1];
    if (lw === undefined) return null;
    return lw * whiteW + whiteW * 0.63;
  };

  return (
    <div style={{
      position: 'relative', width: '100%', height: keyHeight,
      background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
      borderRadius: 16, overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
      userSelect: 'none',
    }}>
      {/* White Keys */}
      {whiteNotes.map((midi) => {
        const info = getMidiInfo(midi, lang);
        const isCorrect = correctKeys.has(midi);
        const isWrong   = wrongKeys.has(midi);
        const isActive  = activeKeys.has(midi);
        const isC       = info.pc === 0;

        let bg = 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)';
        let shadow = 'inset 0 -4px 0 #cbd5e1, inset 0 1px 0 white';
        let textCol = '#334155';

        if (isCorrect) {
          bg = 'linear-gradient(180deg, #86efac 0%, #22c55e 100%)';
          shadow = 'inset 0 -4px 0 #16a34a, 0 0 24px #22c55e55';
          textCol = '#14532d';
        } else if (isWrong) {
          bg = 'linear-gradient(180deg, #fca5a5 0%, #ef4444 100%)';
          shadow = 'inset 0 -4px 0 #dc2626, 0 0 24px #ef444455';
          textCol = '#fff';
        } else if (isActive) {
          bg = 'linear-gradient(180deg, #c4b5fd 0%, #8b5cf6 100%)';
          shadow = 'inset 0 -4px 0 #6d28d9';
          textCol = '#fff';
        }

        return (
          <button
            key={midi}
            disabled={disabled}
            onClick={() => !disabled && onKeyClick && onKeyClick(midi)}
            style={{
              position: 'absolute', top: 0, bottom: 0,
              left: `${(whiteIndexMap[midi] / totalWhite) * 100}%`,
              width: `${whiteW}%`,
              background: bg,
              boxShadow: shadow,
              border: '1px solid rgba(148,163,184,0.3)',
              borderRadius: '0 0 10px 10px',
              cursor: disabled ? 'default' : 'pointer',
              zIndex: 1,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'flex-end',
              paddingBottom: 6,
              transition: 'filter 0.1s',
            }}
            onMouseDown={e => { if (!disabled) e.currentTarget.style.filter = 'brightness(0.9)'; }}
            onMouseUp={e => { e.currentTarget.style.filter = 'brightness(1)'; }}
            onMouseLeave={e => { e.currentTarget.style.filter = 'brightness(1)'; }}
          >
            {(showLabels || isCorrect || isWrong) && (
              <span style={{
                fontSize: 10, fontWeight: 700, color: textCol, opacity: 0.85,
                fontFamily: 'Inter, sans-serif',
              }}>
                {isC ? `${info.name}${info.octave}` : info.name}
              </span>
            )}
          </button>
        );
      })}

      {/* Black Keys */}
      {blackNotes.map((midi) => {
        const info  = getMidiInfo(midi, lang);
        const left  = getBlackLeft(midi);
        if (left === null) return null;

        const isCorrect = correctKeys.has(midi);
        const isWrong   = wrongKeys.has(midi);
        const isActive  = activeKeys.has(midi);

        let bg = 'linear-gradient(180deg, #475569 0%, #0f172a 100%)';
        let shadow = 'inset 0 -5px 0 #000, inset 0 1px 0 #64748b';

        if (isCorrect) { bg = 'linear-gradient(180deg, #4ade80 0%, #16a34a 100%)'; shadow = 'inset 0 -5px 0 #14532d, 0 0 20px #22c55e66'; }
        else if (isWrong) { bg = 'linear-gradient(180deg, #f87171 0%, #dc2626 100%)'; shadow = 'inset 0 -5px 0 #991b1b, 0 0 20px #ef444466'; }
        else if (isActive) { bg = 'linear-gradient(180deg, #8b5cf6 0%, #4c1d95 100%)'; shadow = 'inset 0 -5px 0 #2e1065'; }

        return (
          <button
            key={midi}
            disabled={disabled}
            onClick={(e) => { e.stopPropagation(); !disabled && onKeyClick && onKeyClick(midi); }}
            style={{
              position: 'absolute', top: 0,
              left: `${left}%`,
              width: `${blackW}%`,
              height: blackH,
              background: bg,
              boxShadow: shadow,
              border: '1px solid #0f172a',
              borderRadius: '0 0 8px 8px',
              cursor: disabled ? 'default' : 'pointer',
              zIndex: 10,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'flex-end',
              paddingBottom: 4,
              transition: 'filter 0.1s',
            }}
            onMouseDown={e => { if (!disabled) e.currentTarget.style.filter = 'brightness(0.85)'; }}
            onMouseUp={e => { e.currentTarget.style.filter = 'brightness(1)'; }}
            onMouseLeave={e => { e.currentTarget.style.filter = 'brightness(1)'; }}
          >
            {(showLabels || isCorrect || isWrong) && (
              <span style={{ fontSize: 8, fontWeight: 700, color: 'white', opacity: 0.85 }}>
                {info.name}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

/* ═══ TOGGLE SWITCH ═══ */
function Toggle({ value, onChange, label, sub }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        width: '100%', padding: '14px 16px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 14, cursor: 'pointer', textAlign: 'left',
        transition: 'background 0.15s',
      }}
    >
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'white', marginBottom: 2 }}>{label}</div>
        {sub && <div style={{ fontSize: 11, color: '#94a3b8' }}>{sub}</div>}
      </div>
      <div style={{
        position: 'relative', flexShrink: 0, marginLeft: 16,
        width: 50, height: 28, borderRadius: 14,
        background: value ? 'linear-gradient(90deg, #7c3aed, #db2777)' : '#334155',
        transition: 'background 0.2s',
      }}>
        <div style={{
          position: 'absolute', top: 4, borderRadius: '50%',
          width: 20, height: 20, background: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
          left: value ? 26 : 4,
          transition: 'left 0.2s',
        }} />
      </div>
    </button>
  );
}

/* ═══ OPTION ROW ═══ */
function OptionRow({ label, sub, options, value, onChange, accentColor = '#7c3aed' }) {
  return (
    <div style={{
      padding: '14px 16px', background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14,
    }}>
      <div style={{ marginBottom: 10 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'white', marginBottom: 2 }}>{label}</div>
        {sub && <div style={{ fontSize: 11, color: '#94a3b8' }}>{sub}</div>}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {options.map(opt => (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            style={{
              padding: '6px 14px', borderRadius: 10, cursor: 'pointer',
              fontSize: 12, fontWeight: 700,
              background: value === opt.id ? accentColor : 'rgba(255,255,255,0.06)',
              color: value === opt.id ? 'white' : '#94a3b8',
              border: value === opt.id ? `1px solid ${accentColor}` : '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.15s',
              boxShadow: value === opt.id ? `0 4px 12px ${accentColor}44` : 'none',
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ═══ SETTINGS PANEL ═══ */
function SettingsPanel({ cfg, setCfg, onClose }) {
  const set = (key) => (val) => setCfg(prev => ({ ...prev, [key]: val }));
  const setNum = (key) => (val) => setCfg(prev => ({ ...prev, [key]: Number(val) }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 50,
        display: 'flex', alignItems: 'flex-end',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(12px)',
        }}
        onClick={onClose}
      />
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
        style={{
          position: 'relative', zIndex: 10,
          width: '100%', maxWidth: 680,
          background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '24px 24px 0 0',
          maxHeight: '90vh', overflowY: 'auto',
          boxShadow: '0 -20px 60px rgba(0,0,0,0.6)',
        }}
      >
        {/* Header */}
        <div style={{
          position: 'sticky', top: 0, zIndex: 10,
          background: 'rgba(30,41,59,0.98)', backdropFilter: 'blur(20px)',
          padding: '20px 24px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 42, height: 42, borderRadius: 12,
              background: 'linear-gradient(135deg, #7c3aed, #db2777)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Sliders size={18} color="white" />
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 900, color: 'white' }}>Einstellungen</div>
              <div style={{ fontSize: 11, color: '#64748b' }}>Trainingsparameter anpassen</div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 36, height: 36, borderRadius: 10, cursor: 'pointer',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#94a3b8',
            }}
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>

          {/* Section: Noten */}
          <div style={{ fontSize: 10, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', paddingTop: 8, paddingLeft: 4 }}>
            Noten & Schlüssel
          </div>

          <OptionRow
            label="Notenschlüssel"
            sub="Violinschlüssel (G) oder Bassschlüssel (F)"
            options={[
              { id: 'treble', label: '𝄞 Violinschlüssel' },
              { id: 'bass',   label: '𝄢 Bassschlüssel' },
              { id: 'both',   label: '⇄ Beide zufällig' },
            ]}
            value={cfg.clef} onChange={set('clef')} accentColor="#7c3aed"
          />

          <OptionRow
            label="Noten-Schwierigkeit"
            sub="Nur Noten auf Linien, nur in Zwischenräumen, gemischt oder mit Vorzeichen"
            options={[
              { id: 'lines',  label: 'Auf Linien' },
              { id: 'spaces', label: 'Zwischenräume' },
              { id: 'mixed',  label: 'Gemischt' },
              { id: 'expert', label: '# Vorzeichen' },
            ]}
            value={cfg.difficulty} onChange={set('difficulty')} accentColor="#9333ea"
          />

          <OptionRow
            label="Noten-Notation"
            sub="Deutsche (H) oder internationale Notation (B)"
            options={[
              { id: 'de', label: '🇩🇪 Deutsch: C D E F G A H' },
              { id: 'en', label: '🇬🇧 Englisch: C D E F G A B' },
            ]}
            value={cfg.lang} onChange={set('lang')} accentColor="#0891b2"
          />

          {/* Section: Klaviatur */}
          <div style={{ fontSize: 10, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', paddingTop: 8, paddingLeft: 4 }}>
            Klaviatur
          </div>

          <OptionRow
            label="Keyboard-Größe (Oktaven)"
            sub="Wie viele Oktaven auf dem virtuellen Keyboard angezeigt werden"
            options={[
              { id: 'small',  label: '1 Oktave' },
              { id: 'medium', label: '2 Oktaven' },
              { id: 'large',  label: '3 Oktaven' },
              { id: 'xlarge', label: '4 Oktaven' },
            ]}
            value={cfg.keyboardSize} onChange={set('keyboardSize')} accentColor="#1d4ed8"
          />

          <OptionRow
            label="Keyboard-Höhe"
            sub="Tastenhöhe des virtuellen Pianos"
            options={[
              { id: 'small',  label: 'Klein (100px)' },
              { id: 'medium', label: 'Mittel (140px)' },
              { id: 'large',  label: 'Groß (180px)' },
              { id: 'xlarge', label: 'XL (220px)' },
            ]}
            value={cfg.keyHeight} onChange={set('keyHeight')} accentColor="#1d4ed8"
          />

          <Toggle
            label="Tasten-Beschriftung"
            sub="Notennamen auf Keyboard anzeigen (für Anfänger hilfreich)"
            value={cfg.showLabels} onChange={set('showLabels')}
          />

          {/* Section: Eingabe */}
          <div style={{ fontSize: 10, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', paddingTop: 8, paddingLeft: 4 }}>
            Eingabe & Antworten
          </div>

          <OptionRow
            label="Eingabe-Modus"
            sub="Wie du deine Antwort eingibst"
            options={[
              { id: 'piano',   label: '🎹 Piano' },
              { id: 'buttons', label: '🔤 Buttons' },
              { id: 'both',    label: '✨ Beides' },
            ]}
            value={cfg.inputMode} onChange={set('inputMode')} accentColor="#059669"
          />

          <Toggle
            label="Auto-Fortschritt"
            sub="Nach Beantwortung automatisch zur nächsten Note wechseln"
            value={cfg.autoAdvance} onChange={set('autoAdvance')}
          />

          {/* Section: Sound */}
          <div style={{ fontSize: 10, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', paddingTop: 8, paddingLeft: 4 }}>
            Sound & Audio
          </div>

          <Toggle
            label="Ton automatisch abspielen"
            sub="Note erklingt sofort beim Start jeder neuen Frage"
            value={cfg.autoPlaySound} onChange={set('autoPlaySound')}
          />

          <OptionRow
            label="Klangfarbe"
            sub="Welcher Klangtypus wird für die Noten verwendet"
            options={[
              { id: 'piano', label: '🎹 Piano' },
              { id: 'organ', label: '🎸 Orgel' },
              { id: 'synth', label: '🌊 Synth' },
            ]}
            value={cfg.soundType} onChange={set('soundType')} accentColor="#d97706"
          />

          {/* Section: Session */}
          <div style={{ fontSize: 10, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', paddingTop: 8, paddingLeft: 4 }}>
            Session & Zeit
          </div>

          <OptionRow
            label="Runden pro Session"
            sub="Anzahl der Fragen pro Training"
            options={[5,10,15,20,30,50].map(n => ({ id: n, label: `${n}` }))}
            value={cfg.totalRounds} onChange={setNum('totalRounds')} accentColor="#7c3aed"
          />

          <Toggle
            label="Zeitmodus (Speed Run)"
            sub="Countdown-Timer — du musst innerhalb der Zeit antworten"
            value={cfg.timedMode} onChange={set('timedMode')}
          />

          {cfg.timedMode && (
            <OptionRow
              label="Zeit pro Frage (Sekunden)"
              sub="Wie viel Zeit du für jede Antwort hast"
              options={[5,8,10,15,20].map(n => ({ id: n, label: `${n}s` }))}
              value={cfg.timeLimit} onChange={setNum('timeLimit')} accentColor="#dc2626"
            />
          )}

          {/* Section: Akkorde */}
          <div style={{ fontSize: 10, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', paddingTop: 8, paddingLeft: 4 }}>
            Akkord-Trainer
          </div>

          <OptionRow
            label="Akkord-Schwierigkeit"
            sub="Welche Akkordtypen werden abgefragt"
            options={[
              { id: 'beginner',     label: 'Anfänger (Dur & Moll)' },
              { id: 'intermediate', label: 'Fortgeschritten (+dim/aug)' },
              { id: 'expert',       label: 'Experte (alle inkl. 7th)' },
            ]}
            value={cfg.chordLevel} onChange={set('chordLevel')} accentColor="#9333ea"
          />

        </div>

        {/* Footer */}
        <div style={{
          position: 'sticky', bottom: 0,
          padding: '16px 24px',
          background: 'rgba(15,23,42,0.98)', backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}>
          <button
            onClick={onClose}
            style={{
              width: '100%', padding: '16px',
              background: 'linear-gradient(135deg, #7c3aed, #9333ea, #db2777)',
              color: 'white', fontWeight: 900, fontSize: 15,
              borderRadius: 14, cursor: 'pointer', border: 'none',
              boxShadow: '0 8px 24px rgba(124,58,237,0.4)',
            }}
          >
            ✓ Einstellungen speichern
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ═══ DEFAULT CONFIG ═══ */
const DEFAULT_CFG = {
  clef:         'treble',
  difficulty:   'mixed',
  lang:         'de',
  soundType:    'piano',
  keyboardSize: 'medium',
  keyHeight:    'medium',
  showLabels:   false,
  inputMode:    'both',
  autoPlaySound: true,
  autoAdvance:  true,
  timedMode:    false,
  timeLimit:    10,
  totalRounds:  10,
  chordLevel:   'beginner',
};

const KEY_HEIGHT_MAP = { small: 100, medium: 140, large: 180, xlarge: 220 };
const KEY_RANGE_MAP  = {
  small:  { treble: [60, 71],  bass: [43, 54]  },
  medium: { treble: [55, 79],  bass: [36, 60]  },
  large:  { treble: [48, 83],  bass: [29, 64]  },
  xlarge: { treble: [41, 88],  bass: [24, 67]  },
};

/* ═══ MAIN COMPONENT ═══ */
export default function PianoTrainer() {
  const [screen, setScreen]           = useState('home');
  const [gameMode, setGameMode]       = useState('note-reading');
  const [cfg, setCfg]                 = useState(DEFAULT_CFG);
  const [showSettings, setShowSettings] = useState(false);
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore]             = useState(0);
  const [streak, setStreak]           = useState(0);
  const [bestStreak, setBestStreak]   = useState(0);
  const [currentTask, setCurrentTask] = useState(null);
  const [feedback, setFeedback]       = useState(null);
  const [isAnswered, setIsAnswered]   = useState(false);
  const [roundHistory, setRoundHistory] = useState([]);
  const [timeLeft, setTimeLeft]       = useState(10);
  const [revealAnswer, setRevealAnswer] = useState(false);

  const timerRef  = useRef(null);
  const startTime = useRef(0);
  const audioRef  = useRef(null);
  const gainRef   = useRef(null);

  /* ── AUDIO ── */
  const getCtx = useCallback(() => {
    if (!audioRef.current || audioRef.current.state === 'closed') {
      audioRef.current = new (window.AudioContext || window.webkitAudioContext)();
      gainRef.current  = audioRef.current.createGain();
      gainRef.current.connect(audioRef.current.destination);
    }
    if (audioRef.current.state === 'suspended') audioRef.current.resume();
    gainRef.current.gain.setValueAtTime(0.7, audioRef.current.currentTime);
    return audioRef.current;
  }, []);

  const playNote = useCallback((midi, duration = 1.4) => {
    try {
      const ctx = getCtx();
      const now = ctx.currentTime;
      const freq = 440 * Math.pow(2, (midi - 69) / 12);
      const master = gainRef.current;
      if (cfg.soundType === 'piano') {
        [[1,0.45,1],[2,0.18,0.6],[3,0.08,0.4],[4,0.03,0.25]].forEach(([mult, g, durM]) => {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'sine'; osc.frequency.setValueAtTime(freq * mult, now);
          gain.gain.setValueAtTime(0, now);
          gain.gain.linearRampToValueAtTime(g, now + 0.008);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + duration * durM);
          osc.connect(gain).connect(master); osc.start(now); osc.stop(now + duration * durM + 0.05);
        });
      } else if (cfg.soundType === 'organ') {
        [1,2,3,4].forEach((mult, i) => {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'sine'; osc.frequency.setValueAtTime(freq * mult, now);
          const v = [0.3,0.18,0.1,0.04][i];
          gain.gain.setValueAtTime(0, now); gain.gain.linearRampToValueAtTime(v, now + 0.015);
          gain.gain.linearRampToValueAtTime(0, now + duration);
          osc.connect(gain).connect(master); osc.start(now); osc.stop(now + duration + 0.02);
        });
      } else {
        const osc = ctx.createOscillator(); const gain = ctx.createGain();
        osc.type = 'triangle'; osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0, now); gain.gain.linearRampToValueAtTime(0.35, now + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
        osc.connect(gain).connect(master); osc.start(now); osc.stop(now + duration + 0.02);
      }
    } catch(e) { console.warn('Audio error:', e); }
  }, [cfg.soundType, getCtx]);

  const playChord = useCallback((midis) => {
    midis.forEach((m, i) => setTimeout(() => playNote(m, 2), i * 60));
  }, [playNote]);

  const playFeedback = useCallback((correct) => {
    if (correct) [72, 76, 79].forEach((m, i) => setTimeout(() => playNote(m, 0.3), i * 80));
    else [60, 59].forEach((m, i) => setTimeout(() => playNote(m, 0.4), i * 110));
  }, [playNote]);

  /* ── TASK GENERATION ── */
  const generateTask = useCallback(() => {
    setFeedback(null);
    setIsAnswered(false);
    setRevealAnswer(false);
    clearInterval(timerRef.current);

    const activeClef = cfg.clef === 'both'
      ? (Math.random() > 0.5 ? 'treble' : 'bass') : cfg.clef;

    let effectiveMode = gameMode;
    if (gameMode === 'mixed') {
      effectiveMode = ['note-reading','chord-training','ear-training'][Math.floor(Math.random() * 3)];
    }

    if (effectiveMode === 'note-reading') {
      let minMidi = activeClef === 'treble' ? 60 : 43;
      let maxMidi = activeClef === 'treble' ? 77 : 60;
      if (cfg.difficulty === 'expert') { minMidi = activeClef === 'treble' ? 57 : 36; maxMidi = activeClef === 'treble' ? 84 : 64; }
      const candidates = [];
      for (let m = minMidi; m <= maxMidi; m++) {
        const info = getMidiInfo(m, cfg.lang);
        const step = activeClef === 'bass' ? info.bassStep : info.trebleStep;
        if (cfg.difficulty === 'lines'  && step % 2 !== 0) continue;
        if (cfg.difficulty === 'spaces' && step % 2 === 0) continue;
        if (cfg.difficulty !== 'expert' && info.isSharp) continue;
        candidates.push(m);
      }
      if (!candidates.length) for (let m = minMidi; m <= maxMidi; m++) { if (!getMidiInfo(m).isSharp) candidates.push(m); }
      const midi = candidates[Math.floor(Math.random() * candidates.length)];
      const info = getMidiInfo(midi, cfg.lang);
      setCurrentTask({ type: 'note', midi, name: info.name, clef: activeClef, notes: [{ midi }] });
      if (cfg.autoPlaySound) playNote(midi);

    } else if (effectiveMode === 'chord-training') {
      const chordIds = CHORD_SETS[cfg.chordLevel] || CHORD_SETS.beginner;
      const chord = CHORDS.find(c => c.id === chordIds[Math.floor(Math.random() * chordIds.length)]);
      const rootMidi = (activeClef === 'treble' ? 60 : 43) + Math.floor(Math.random() * 7);
      const midis = chord.intervals.map(iv => rootMidi + iv);
      setCurrentTask({ type: 'chord', chord, clef: activeClef, midis, notes: midis.map(m => ({ midi: m, color: chord.color })) });
      if (cfg.autoPlaySound) playChord(midis);

    } else {
      const minMidi = activeClef === 'treble' ? 57 : 36;
      const maxMidi = activeClef === 'treble' ? 84 : 64;
      const midi = minMidi + Math.floor(Math.random() * (maxMidi - minMidi + 1));
      const info = getMidiInfo(midi, cfg.lang);
      setCurrentTask({ type: 'ear', midi, name: info.name, clef: activeClef, notes: [{ midi }] });
      if (cfg.autoPlaySound) playNote(midi);
    }

    startTime.current = performance.now();
    if (cfg.timedMode) setTimeLeft(cfg.timeLimit);
  }, [cfg, gameMode, playNote, playChord]);

  /* ── TIMER ── */
  useEffect(() => {
    if (!cfg.timedMode || screen !== 'training' || isAnswered || !currentTask) return;
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(timerRef.current); submitAnswer(null, true); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTask, cfg.timedMode, isAnswered]);

  useEffect(() => {
    if (screen === 'training') generateTask();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, currentRound]);

  const startSession = useCallback(() => {
    setScore(0); setStreak(0); setBestStreak(0);
    setCurrentRound(0); setRoundHistory([]);
    setScreen('training');
  }, []);

  const submitAnswer = useCallback((userAnswer, isTimeout = false) => {
    if (isAnswered || !currentTask) return;
    clearInterval(timerRef.current);
    setIsAnswered(true);
    setRevealAnswer(true);

    const elapsed = Math.round(performance.now() - startTime.current);
    let isCorrect = false;
    if (!isTimeout) {
      if (currentTask.type === 'note' || currentTask.type === 'ear') {
        isCorrect = typeof userAnswer === 'number'
          ? (userAnswer % 12) === (currentTask.midi % 12)
          : userAnswer === currentTask.name;
      } else if (currentTask.type === 'chord') {
        isCorrect = userAnswer === currentTask.chord.id || userAnswer === currentTask.chord.de;
      }
    }

    const newStreak = isCorrect ? streak + 1 : 0;
    if (isCorrect) setScore(s => s + 1);
    setStreak(newStreak);
    if (newStreak > bestStreak) setBestStreak(newStreak);

    const correctText = currentTask.type === 'chord' ? currentTask.chord.de : currentTask.name;
    setFeedback({
      correct: isCorrect,
      message: isTimeout ? `⏱ Zeit! Richtig: ${correctText}` : isCorrect ? '✓ Richtig!' : `✗ Falsch — Richtig: ${correctText}`,
      elapsed,
    });
    playFeedback(isCorrect);
    setRoundHistory(prev => [...prev, { correct: isCorrect, task: currentTask, elapsed }]);

    if (cfg.autoAdvance) {
      setTimeout(() => {
        const next = currentRound + 1;
        if (next >= cfg.totalRounds) setScreen('result');
        else setCurrentRound(next);
      }, isCorrect ? 1100 : 1700);
    }
  }, [isAnswered, currentTask, streak, bestStreak, currentRound, cfg, playFeedback]);

  const goNext = useCallback(() => {
    const next = currentRound + 1;
    if (next >= cfg.totalRounds) setScreen('result');
    else setCurrentRound(next);
  }, [currentRound, cfg.totalRounds]);

  const keyRange = useMemo(() => {
    const clefKey = currentTask?.clef === 'bass' ? 'bass' : 'treble';
    return KEY_RANGE_MAP[cfg.keyboardSize]?.[clefKey] || [55, 79];
  }, [cfg.keyboardSize, currentTask]);

  const keyHeightPx = KEY_HEIGHT_MAP[cfg.keyHeight] || 140;
  const noteButtons = cfg.lang === 'de' ? ['C','D','E','F','G','A','H'] : ['C','D','E','F','G','A','B'];

  const modeGrads = {
    'note-reading':   'linear-gradient(135deg, #4f46e5, #7c3aed)',
    'chord-training': 'linear-gradient(135deg, #9333ea, #db2777)',
    'ear-training':   'linear-gradient(135deg, #059669, #0d9488)',
    'mixed':          'linear-gradient(135deg, #d97706, #dc2626)',
  };

  /* ════════ HOME ════════ */
  if (screen === 'home') {
    const modes = [
      { id: 'note-reading',   title: 'Noten-Trainer',       sub: 'Sight Reading',    desc: 'Erkenne Noten auf Violin- & Bassschlüssel. Linien, Zwischenräume und Vorzeichen.', icon: BookOpen,  grad: 'linear-gradient(135deg, #4f46e5, #7c3aed)', glow: '#7c3aed' },
      { id: 'chord-training', title: 'Akkord-Trainer',      sub: 'Chord Recognition',desc: 'Erkenne Dreiklänge & Septakkorde auf dem Notensystem. Dur, Moll, dim, aug, Maj7.', icon: Layers,    grad: 'linear-gradient(135deg, #9333ea, #db2777)', glow: '#db2777' },
      { id: 'ear-training',   title: 'Gehörtraining',       sub: 'Ear Training',     desc: 'Nur Gehör — höre die Note und tippe die richtige Taste. Kein Notensystem sichtbar!', icon: Headphones,grad: 'linear-gradient(135deg, #059669, #0d9488)', glow: '#059669' },
      { id: 'mixed',          title: 'Gemischtes Training', sub: 'Mixed Mode',       desc: 'Alle drei Modi zufällig gemischt — die ultimative Herausforderung.', icon: Shuffle,   grad: 'linear-gradient(135deg, #d97706, #dc2626)', glow: '#d97706' },
    ];

    const cfgLabels = [
      cfg.clef === 'both' ? '⇄ Beide Schlüssel' : cfg.clef === 'treble' ? '𝄞 Violinschlüssel' : '𝄢 Bassschlüssel',
      { lines: 'Auf Linien', spaces: 'Zwischenräume', mixed: 'Gemischt', expert: '# Vorzeichen' }[cfg.difficulty] || 'Gemischt',
      cfg.lang === 'de' ? '🇩🇪 DE' : '🇬🇧 EN',
      { small: '1 Okt.', medium: '2 Okt.', large: '3 Okt.', xlarge: '4 Okt.' }[cfg.keyboardSize],
      `${cfg.totalRounds} Runden`,
      ...(cfg.timedMode ? [`⏱ ${cfg.timeLimit}s`] : []),
    ];

    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #020617 0%, #1a0533 50%, #020617 100%)', color: 'white', fontFamily: 'Inter, system-ui, sans-serif' }}>
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -200, left: -200, width: 700, height: 700, background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: -200, right: -200, width: 600, height: 600, background: 'radial-gradient(circle, rgba(219,39,119,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 860, margin: '0 auto', padding: '32px 20px 48px' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 16, flexShrink: 0,
              background: 'linear-gradient(135deg, #7c3aed, #db2777)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(124,58,237,0.4)',
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="2" y="4" width="20" height="14" rx="2"/>
                <path d="M8 4v14M12 4v14M16 4v14"/>
                <path d="M5 14h1M10 10h1M14 14h1M19 10h1" strokeLinecap="round" strokeWidth="2.5"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <h1 style={{ margin: 0, fontSize: 28, fontWeight: 900, lineHeight: 1.1 }}>
                <span style={{ background: 'linear-gradient(135deg, #fff 0%, #c4b5fd 50%, #f9a8d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Piano Trainer
                </span>
              </h1>
              <p style={{ margin: '4px 0 0', fontSize: 12, color: '#64748b' }}>Notenlesen · Akkorde · Gehörtraining · Gemischt</p>
            </div>
            <button
              onClick={() => setShowSettings(true)}
              style={{
                width: 44, height: 44, borderRadius: 12, cursor: 'pointer',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8',
                transition: 'background 0.15s',
              }}
            >
              <Settings size={18} />
            </button>
          </div>

          {/* Mode Cards */}
          <div style={{ fontSize: 10, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12, paddingLeft: 4 }}>
            Training wählen
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
            {modes.map(m => {
              const isSelected = gameMode === m.id;
              return (
                <motion.button
                  key={m.id}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setGameMode(m.id)}
                  style={{
                    textAlign: 'left', padding: '20px', borderRadius: 18, cursor: 'pointer',
                    background: isSelected
                      ? `linear-gradient(135deg, ${m.glow}22 0%, rgba(15,23,42,0.95) 100%)`
                      : 'rgba(255,255,255,0.04)',
                    border: isSelected
                      ? `1px solid ${m.glow}60`
                      : '1px solid rgba(255,255,255,0.08)',
                    boxShadow: isSelected ? `0 0 32px ${m.glow}30` : 'none',
                    position: 'relative', overflow: 'hidden', transition: 'all 0.2s',
                  }}
                >
                  {isSelected && (
                    <div style={{
                      position: 'absolute', top: 12, right: 12,
                      width: 22, height: 22, borderRadius: 11,
                      background: m.glow, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Check size={13} color="white" />
                    </div>
                  )}
                  <div style={{
                    width: 48, height: 48, borderRadius: 13, marginBottom: 12,
                    background: m.grad, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 6px 20px ${m.glow}44`,
                  }}>
                    <m.icon size={22} color="white" />
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 900, color: 'white', marginBottom: 2 }}>{m.title}</div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: m.glow, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>{m.sub}</div>
                  <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.5 }}>{m.desc}</div>
                </motion.button>
              );
            })}
          </div>

          {/* Config Summary */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center',
            padding: '14px 16px', borderRadius: 14,
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            marginBottom: 20,
          }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#475569', marginRight: 4 }}>Einstellungen:</span>
            {cfgLabels.map((lbl, i) => (
              <span key={i} style={{
                fontSize: 11, fontWeight: 600, color: '#94a3b8',
                padding: '4px 10px', borderRadius: 8,
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              }}>{lbl}</span>
            ))}
            <button
              onClick={() => setShowSettings(true)}
              style={{
                marginLeft: 'auto', fontSize: 11, fontWeight: 700, color: '#7c3aed',
                background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4,
              }}
            >
              <Settings size={11} /> Ändern
            </button>
          </div>

          {/* Start Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={startSession}
            style={{
              width: '100%', padding: '20px', borderRadius: 18, cursor: 'pointer',
              background: modeGrads[gameMode],
              color: 'white', fontWeight: 900, fontSize: 18, border: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
              boxShadow: '0 12px 40px rgba(124,58,237,0.4)',
            }}
          >
            <Play size={24} /> Training starten
          </motion.button>
        </div>

        <AnimatePresence>
          {showSettings && (
            <SettingsPanel cfg={cfg} setCfg={setCfg} onClose={() => setShowSettings(false)} />
          )}
        </AnimatePresence>
      </div>
    );
  }

  /* ════════ TRAINING ════════ */
  if (screen === 'training' && currentTask) {
    const keyRangeEff = KEY_RANGE_MAP[cfg.keyboardSize]?.[currentTask.clef === 'bass' ? 'bass' : 'treble'] || [55, 79];
    const correctKeys = new Set();
    const wrongKeys   = new Set();
    if (isAnswered) {
      const midiSet = currentTask.type === 'chord' ? currentTask.midis : [currentTask.midi];
      if (feedback?.correct) midiSet.forEach(m => correctKeys.add(m));
      else midiSet.forEach(m => wrongKeys.add(m));
    }

    const progress = (currentRound / cfg.totalRounds) * 100;
    const badgeColor = { note: '#7c3aed', chord: '#9333ea', ear: '#059669' }[currentTask.type] || '#7c3aed';

    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #020617 0%, #1a0533 50%, #020617 100%)', color: 'white', fontFamily: 'Inter, system-ui, sans-serif', display: 'flex', flexDirection: 'column' }}>
        {/* Top Bar */}
        <div style={{
          background: 'rgba(2,6,23,0.9)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 12, position: 'sticky', top: 0, zIndex: 20,
        }}>
          <button
            onClick={() => { clearInterval(timerRef.current); setScreen('home'); }}
            style={{
              width: 36, height: 36, borderRadius: 10, cursor: 'pointer', flexShrink: 0,
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8',
            }}
          ><Home size={15} /></button>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: '#64748b' }}>
                Frage <strong style={{ color: 'white' }}>{currentRound + 1}</strong>/{cfg.totalRounds}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12 }}>
                <span style={{ color: '#34d399', fontWeight: 700 }}>✓ {score}</span>
                {streak > 1 && (
                  <span style={{ color: '#fbbf24', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Flame size={12} />{streak}
                  </span>
                )}
                {cfg.timedMode && (
                  <span style={{ color: timeLeft <= 3 ? '#f87171' : '#fbbf24', fontWeight: 900, fontSize: 14, fontFamily: 'monospace' }}>
                    {timeLeft}s
                  </span>
                )}
              </div>
            </div>
            <div style={{ width: '100%', height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #7c3aed, #db2777)', borderRadius: 2, transition: 'width 0.3s' }} />
            </div>
          </div>

          <button
            onClick={() => { currentTask.type === 'chord' ? playChord(currentTask.midis) : playNote(currentTask.midi); }}
            style={{
              width: 36, height: 36, borderRadius: 10, cursor: 'pointer', flexShrink: 0,
              background: `${badgeColor}22`, border: `1px solid ${badgeColor}44`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: badgeColor,
            }}
          ><Volume2 size={15} /></button>
        </div>

        <div style={{ flex: 1, maxWidth: 800, margin: '0 auto', width: '100%', padding: '16px 16px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* Badge + Question */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{
              fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
              padding: '5px 12px', borderRadius: 99,
              background: `${badgeColor}22`, color: badgeColor, border: `1px solid ${badgeColor}44`,
            }}>
              {currentTask.type === 'note'  && `Notenlesen · ${currentTask.clef === 'treble' ? 'Violinschlüssel' : 'Bassschlüssel'}`}
              {currentTask.type === 'chord' && 'Akkord erkennen'}
              {currentTask.type === 'ear'   && 'Gehörtraining'}
            </span>
            {currentTask.type === 'ear' && (
              <button
                onClick={() => setRevealAnswer(r => !r)}
                style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}
              >
                {revealAnswer ? <EyeOff size={12}/> : <Eye size={12}/>}
                {revealAnswer ? 'Ausblenden' : 'Notensystem zeigen'}
              </button>
            )}
          </div>

          <h2 style={{ margin: 0, fontSize: 24, fontWeight: 900, textAlign: 'center', color: 'white' }}>
            {currentTask.type === 'note'  && 'Welche Note ist das?'}
            {currentTask.type === 'chord' && 'Welcher Akkord ist das?'}
            {currentTask.type === 'ear'   && 'Welchen Ton hörst du?'}
          </h2>

          {/* Staff / Ear panel */}
          <AnimatePresence mode="wait">
            {currentTask.type !== 'ear' || revealAnswer ? (
              <motion.div
                key={`staff-${currentTask.midi}-${currentTask.type}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(15,23,42,0.7)' }}
              >
                <MusicalStaff
                  clef={currentTask.clef}
                  notes={currentTask.notes.map(n => ({
                    ...n,
                    color: isAnswered ? (feedback?.correct ? '#34d399' : '#f87171') : (n.color || '#f1f5f9'),
                  }))}
                  showAnswer={isAnswered}
                />
              </motion.div>
            ) : (
              <motion.div
                key="ear-panel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  borderRadius: 18, padding: '40px 24px', textAlign: 'center',
                  background: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.3)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
                }}
              >
                <div style={{
                  width: 72, height: 72, borderRadius: 36,
                  background: 'linear-gradient(135deg, #059669, #0d9488)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(5,150,105,0.4)',
                }}>
                  <Headphones size={32} color="white" />
                </div>
                <p style={{ fontSize: 13, color: '#64748b', maxWidth: 280, lineHeight: 1.6, margin: 0 }}>
                  Höre genau hin und identifiziere den Ton nach Gehör. Kein Notensystem sichtbar!
                </p>
                <button
                  onClick={() => playNote(currentTask.midi)}
                  style={{
                    padding: '10px 24px', borderRadius: 12, cursor: 'pointer',
                    background: 'rgba(5,150,105,0.2)', border: '1px solid rgba(5,150,105,0.4)',
                    color: '#34d399', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', gap: 8,
                  }}
                >
                  <Volume2 size={15} /> Ton abspielen
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Feedback */}
          <AnimatePresence>
            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  padding: '14px 20px', borderRadius: 14, fontWeight: 700, fontSize: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: feedback.correct ? 'rgba(52,211,153,0.12)' : 'rgba(248,113,113,0.12)',
                  border: `1px solid ${feedback.correct ? 'rgba(52,211,153,0.4)' : 'rgba(248,113,113,0.4)'}`,
                  color: feedback.correct ? '#34d399' : '#f87171',
                }}
              >
                <span>{feedback.message}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 11, opacity: 0.6, fontFamily: 'monospace' }}>{feedback.elapsed}ms</span>
                  {!cfg.autoAdvance && (
                    <button
                      onClick={goNext}
                      style={{
                        padding: '6px 14px', borderRadius: 8, cursor: 'pointer', fontSize: 12, fontWeight: 700,
                        background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.15)', color: 'white',
                      }}
                    >Weiter →</button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Note name buttons */}
          {(cfg.inputMode === 'buttons' || cfg.inputMode === 'both') && currentTask.type !== 'chord' && (
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Note eingeben</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8 }}>
                {noteButtons.map(n => {
                  const isCorrectBtn = isAnswered && n === currentTask.name;
                  return (
                    <motion.button
                      key={n}
                      whileHover={!isAnswered ? { scale: 1.06 } : {}}
                      whileTap={!isAnswered ? { scale: 0.92 } : {}}
                      disabled={isAnswered}
                      onClick={() => submitAnswer(n)}
                      style={{
                        padding: '16px 0', borderRadius: 12, cursor: isAnswered ? 'default' : 'pointer',
                        fontSize: 18, fontWeight: 900,
                        background: isCorrectBtn
                          ? 'linear-gradient(135deg, #34d399, #059669)'
                          : isAnswered ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.08)',
                        border: isCorrectBtn ? '1px solid #34d399' : '1px solid rgba(255,255,255,0.12)',
                        color: isAnswered && !isCorrectBtn ? '#475569' : 'white',
                        boxShadow: isCorrectBtn ? '0 4px 20px rgba(52,211,153,0.4)' : 'none',
                        transition: 'all 0.15s',
                      }}
                    >{n}</motion.button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Chord buttons */}
          {currentTask.type === 'chord' && (
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Akkord wählen</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 8 }}>
                {CHORDS.filter(c => CHORD_SETS[cfg.chordLevel]?.includes(c.id)).map(c => {
                  const isCorrectBtn = isAnswered && c.id === currentTask.chord.id;
                  return (
                    <motion.button
                      key={c.id}
                      whileHover={!isAnswered ? { scale: 1.05 } : {}}
                      whileTap={!isAnswered ? { scale: 0.95 } : {}}
                      disabled={isAnswered}
                      onClick={() => submitAnswer(c.id)}
                      style={{
                        padding: '12px 8px', borderRadius: 12, cursor: isAnswered ? 'default' : 'pointer',
                        background: isCorrectBtn ? `${c.color}33` : isAnswered ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.07)',
                        border: isCorrectBtn ? `1px solid ${c.color}` : '1px solid rgba(255,255,255,0.1)',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                        transition: 'all 0.15s',
                      }}
                    >
                      <span style={{ fontSize: 16, fontWeight: 900, color: isAnswered ? c.color : 'white' }}>{c.short || c.de}</span>
                      <span style={{ fontSize: 10, color: '#64748b' }}>{c.de}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Piano Keyboard */}
          {(cfg.inputMode === 'piano' || cfg.inputMode === 'both') && (
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Piano-Eingabe</div>
              <VirtualPiano
                startMidi={keyRangeEff[0]}
                endMidi={keyRangeEff[1]}
                disabled={isAnswered}
                lang={cfg.lang}
                showLabels={cfg.showLabels}
                keyHeight={keyHeightPx}
                onKeyClick={submitAnswer}
                correctKeys={correctKeys}
                wrongKeys={wrongKeys}
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  /* ════════ RESULT ════════ */
  if (screen === 'result') {
    const accuracy = Math.round((score / cfg.totalRounds) * 100);
    const avgTime  = roundHistory.length > 0
      ? Math.round(roundHistory.reduce((a,b) => a + b.elapsed, 0) / roundHistory.length) : 0;
    let medal = '🥉';
    if (accuracy >= 90) medal = '🏆';
    else if (accuracy >= 70) medal = '🥈';
    else if (accuracy >= 50) medal = '🥉';
    else medal = '😅';

    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #020617 0%, #1a0533 50%, #020617 100%)', color: 'white', fontFamily: 'Inter, system-ui, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          style={{
            width: '100%', maxWidth: 480,
            background: 'rgba(15,23,42,0.95)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 24, overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
          }}
        >
          <div style={{ padding: '36px 32px 24px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: 64, marginBottom: 12 }}>{medal}</div>
            <h2 style={{ margin: 0, fontSize: 28, fontWeight: 900 }}>Training beendet!</h2>
            <p style={{ margin: '6px 0 0', fontSize: 13, color: '#64748b' }}>Deine Auswertung</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: '24px 24px 0' }}>
            {[
              { label: 'Richtig', value: `${score}/${cfg.totalRounds}`, color: '#34d399' },
              { label: 'Genauigkeit', value: `${accuracy}%`, color: '#a78bfa' },
              { label: 'Beste Serie 🔥', value: bestStreak, color: '#fbbf24' },
              { label: 'Ø Antwortzeit', value: `${avgTime}ms`, color: '#38bdf8' },
            ].map(s => (
              <div key={s.label} style={{
                padding: '16px', borderRadius: 16,
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <div style={{ fontSize: 26, fontWeight: 900, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {roundHistory.length > 0 && (
            <div style={{ padding: '16px 24px' }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Verlauf</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {roundHistory.map((r, i) => (
                  <div key={i} style={{
                    width: 28, height: 28, borderRadius: 8, fontSize: 11, fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: r.correct ? 'rgba(52,211,153,0.15)' : 'rgba(248,113,113,0.15)',
                    border: `1px solid ${r.correct ? 'rgba(52,211,153,0.4)' : 'rgba(248,113,113,0.4)'}`,
                    color: r.correct ? '#34d399' : '#f87171',
                    cursor: 'default',
                    title: `Frage ${i+1}: ${r.correct ? '✓' : '✗'}`,
                  }}>
                    {r.correct ? '✓' : '✗'}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: 12, padding: '16px 24px 28px', borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 4 }}>
            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              onClick={() => { setCurrentRound(0); setScore(0); setStreak(0); setBestStreak(0); setRoundHistory([]); setScreen('training'); }}
              style={{
                flex: 1, padding: '16px', borderRadius: 14, cursor: 'pointer',
                background: 'linear-gradient(135deg, #7c3aed, #db2777)',
                color: 'white', fontWeight: 900, fontSize: 15, border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                boxShadow: '0 8px 24px rgba(124,58,237,0.4)',
              }}
            >
              <RefreshCw size={16} /> Nochmal
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              onClick={() => setScreen('home')}
              style={{
                padding: '16px 20px', borderRadius: 14, cursor: 'pointer',
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
                color: 'white', fontWeight: 700, fontSize: 15,
                display: 'flex', alignItems: 'center', gap: 8,
              }}
            >
              <Home size={16} /> Menü
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 56, height: 56, borderRadius: 16, background: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <Music size={26} color="white" />
        </div>
        <p style={{ color: '#64748b' }}>Piano Trainer wird geladen…</p>
      </div>
    </div>
  );
}
