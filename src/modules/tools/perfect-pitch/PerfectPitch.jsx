import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Music, ArrowLeft, Trophy, Play, Volume2, Star, Settings, RotateCcw, Sparkles,
  Headphones, BarChart3, Piano, Waves, Guitar, ChevronDown, ChevronUp,
  ArrowUpDown, ArrowUp, ArrowDown, Info, X, Keyboard, Sliders, BookOpen
} from 'lucide-react';

// ─── NOTE DATA ───────────────────────────────────────────────
const BASE_NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Generate notes across octaves (C2 - C7)
const generateNotes = () => {
  const notes = [];
  for (let octave = 2; octave <= 7; octave++) {
    BASE_NOTES.forEach((name, i) => {
      if (octave === 7 && i > 0) return; // Only C7
      const semitone = (octave - 4) * 12 + i - 9; // relative to A4
      const freq = 440 * Math.pow(2, semitone / 12);
      notes.push({
        name,
        octave,
        freq: Math.round(freq * 100) / 100,
        type: name.includes('#') ? 'black' : 'white',
        label: `${name}${octave}`,
        midi: 60 + (octave - 4) * 12 + i, // C4 = 60
      });
    });
  }
  return notes;
};

const ALL_GENERATED_NOTES = generateNotes();

const getNotesInRange = (minOctave, maxOctave) => {
  return ALL_GENERATED_NOTES.filter(n => {
    if (n.octave > maxOctave) return false;
    if (n.octave < minOctave) return false;
    if (n.octave === maxOctave && n.name !== 'C') {
      // Include all notes up to C of maxOctave+1, but we stop at the octave ceiling
      return true;
    }
    return true;
  });
};

// ─── INTERVALS ───────────────────────────────────────────────
const ALL_INTERVALS = [
  { name: 'Minor 2nd', semitones: 1, short: 'm2', category: 'second' },
  { name: 'Major 2nd', semitones: 2, short: 'M2', category: 'second' },
  { name: 'Minor 3rd', semitones: 3, short: 'm3', category: 'third' },
  { name: 'Major 3rd', semitones: 4, short: 'M3', category: 'third' },
  { name: 'Perfect 4th', semitones: 5, short: 'P4', category: 'perfect' },
  { name: 'Tritone', semitones: 6, short: 'TT', category: 'tritone' },
  { name: 'Perfect 5th', semitones: 7, short: 'P5', category: 'perfect' },
  { name: 'Minor 6th', semitones: 8, short: 'm6', category: 'sixth' },
  { name: 'Major 6th', semitones: 9, short: 'M6', category: 'sixth' },
  { name: 'Minor 7th', semitones: 10, short: 'm7', category: 'seventh' },
  { name: 'Major 7th', semitones: 11, short: 'M7', category: 'seventh' },
  { name: 'Octave', semitones: 12, short: 'P8', category: 'perfect' },
];

// ─── CHORDS ──────────────────────────────────────────────────
const CHORD_TYPES = [
  { name: 'Major', intervals: [0, 4, 7], short: 'Maj', color: 'text-green-400' },
  { name: 'Minor', intervals: [0, 3, 7], short: 'min', color: 'text-blue-400' },
  { name: 'Diminished', intervals: [0, 3, 6], short: 'dim', color: 'text-red-400' },
  { name: 'Augmented', intervals: [0, 4, 8], short: 'aug', color: 'text-orange-400' },
  { name: 'Major 7th', intervals: [0, 4, 7, 11], short: 'Maj7', color: 'text-emerald-400' },
  { name: 'Minor 7th', intervals: [0, 3, 7, 10], short: 'min7', color: 'text-cyan-400' },
  { name: 'Dominant 7th', intervals: [0, 4, 7, 10], short: '7', color: 'text-yellow-400' },
  { name: 'Suspended 2nd', intervals: [0, 2, 7], short: 'sus2', color: 'text-purple-400' },
  { name: 'Suspended 4th', intervals: [0, 5, 7], short: 'sus4', color: 'text-pink-400' },
];

// ─── SOUND TYPES ─────────────────────────────────────────────
const SOUND_TYPES = {
  piano: { name: 'Piano', icon: Piano },
  sine: { name: 'Pure Tone', icon: Waves },
  organ: { name: 'Organ', icon: Music },
  bright: { name: 'Bright', icon: Sparkles },
};

// ─── MODES ───────────────────────────────────────────────────
const MODES = {
  'white-keys': { name: 'White Keys', description: 'Natural notes only (C D E F G A B)', color: 'from-green-500 to-emerald-600', icon: '🎹' },
  'all-keys': { name: 'All Keys', description: 'All 12 notes including sharps/flats', color: 'from-blue-500 to-indigo-600', icon: '🎵' },
  'intervals': { name: 'Intervals', description: 'Identify the distance between two notes', color: 'from-purple-500 to-violet-600', icon: '📏' },
  'chords': { name: 'Chords', description: 'Identify chord quality (Major, Minor, Dim, 7th...)', color: 'from-amber-500 to-orange-600', icon: '🎶' },
  'free-play': { name: 'Free Play', description: 'Explore the keyboard — learn notes by ear', color: 'from-rose-500 to-pink-600', icon: '🎹' },
};

// ─── KEYBOARD SHORTCUTS ──────────────────────────────────────
const NOTE_KEYS = { 'a': 'C', 'w': 'C#', 's': 'D', 'e': 'D#', 'd': 'E', 'f': 'F', 't': 'F#', 'g': 'G', 'y': 'G#', 'h': 'A', 'u': 'A#', 'j': 'B' };

// ─── COMPONENT ───────────────────────────────────────────────
export default function PerfectPitch() {
  // ─── STATE ─────────────────────────────────────────────────
  const [phase, setPhase] = useState('menu'); // menu, settings, playing, result, stats, free-play
  const [mode, setMode] = useState('white-keys');

  // Game state
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [currentNote, setCurrentNote] = useState(null);
  const [currentInterval, setCurrentInterval] = useState(null);
  const [currentChord, setCurrentChord] = useState(null);
  const [baseNote, setBaseNote] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [times, setTimes] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [roundHistory, setRoundHistory] = useState([]); // Track each round for stats

  // Settings
  const [totalRounds, setTotalRounds] = useState(12);
  const [minOctave, setMinOctave] = useState(3);
  const [maxOctave, setMaxOctave] = useState(5);
  const [soundType, setSoundType] = useState('piano');
  const [volume, setVolume] = useState(0.7);
  const [showReference, setShowReference] = useState(false);
  const [intervalDirection, setIntervalDirection] = useState('ascending'); // ascending, descending, both
  const [enabledIntervals, setEnabledIntervals] = useState(ALL_INTERVALS.map(i => i.name));
  const [enabledChords, setEnabledChords] = useState(CHORD_TYPES.map(c => c.name));
  const [autoPlay, setAutoPlay] = useState(true);
  const [showKeyHints, setShowKeyHints] = useState(true);

  // Persistent data
  const [highScores, setHighScores] = useState(() => {
    const saved = localStorage.getItem('perfect-pitch-scores-v2');
    return saved ? JSON.parse(saved) : {};
  });
  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem('perfect-pitch-stats-v2');
    return saved ? JSON.parse(saved) : { sessions: [], noteAccuracy: {}, intervalAccuracy: {}, chordAccuracy: {} };
  });

  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);

  // ─── AUDIO ENGINE ──────────────────────────────────────────
  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      masterGainRef.current = audioCtxRef.current.createGain();
      masterGainRef.current.connect(audioCtxRef.current.destination);
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    masterGainRef.current.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);
    return audioCtxRef.current;
  }, [volume]);

  const playNote = useCallback((freq, duration = 1.2) => {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const master = masterGainRef.current;

    if (soundType === 'sine') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.4, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.01, now + duration);
      osc.connect(gain).connect(master);
      osc.start(now);
      osc.stop(now + duration);
    } else if (soundType === 'organ') {
      [1, 2, 3, 4].forEach((harmonic, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq * harmonic, now);
        const vol = [0.4, 0.2, 0.1, 0.05][i];
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(vol, now + 0.02);
        gain.gain.setValueAtTime(vol, now + duration - 0.1);
        gain.gain.linearRampToValueAtTime(0, now + duration);
        osc.connect(gain).connect(master);
        osc.start(now);
        osc.stop(now + duration + 0.01);
      });
    } else if (soundType === 'bright') {
      ['sine', 'triangle'].forEach((type, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq * (idx === 0 ? 1 : 2), now);
        const vol = idx === 0 ? 0.35 : 0.1;
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(vol, now + 0.005);
        gain.gain.exponentialRampToValueAtTime(0.01, now + duration * 0.8);
        osc.connect(gain).connect(master);
        osc.start(now);
        osc.stop(now + duration);
      });
    } else {
      // Piano: rich harmonics with quick decay
      const harmonics = [
        { mult: 1, vol: 0.45, decay: 1.0 },
        { mult: 2, vol: 0.18, decay: 0.7 },
        { mult: 3, vol: 0.06, decay: 0.5 },
        { mult: 4, vol: 0.02, decay: 0.35 },
      ];
      harmonics.forEach(h => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq * h.mult, now);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(h.vol, now + 0.008);
        gain.gain.exponentialRampToValueAtTime(h.vol * 0.6, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration * h.decay);
        osc.connect(gain).connect(master);
        osc.start(now);
        osc.stop(now + duration * h.decay + 0.01);
      });
      // Attack noise
      const noise = ctx.createOscillator();
      const nGain = ctx.createGain();
      noise.type = 'sawtooth';
      noise.frequency.setValueAtTime(freq * 6, now);
      nGain.gain.setValueAtTime(0.03, now);
      nGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      noise.connect(nGain).connect(master);
      noise.start(now);
      noise.stop(now + 0.06);
    }
  }, [getAudioContext, soundType, volume]);

  const playTwoNotes = useCallback((freq1, freq2, delay = 600) => {
    playNote(freq1, 1.0);
    setTimeout(() => playNote(freq2, 1.2), delay);
  }, [playNote]);

  const playChord = useCallback((freqs, duration = 2.0) => {
    freqs.forEach((f, i) => {
      // Slight stagger for strumming effect
      setTimeout(() => playNote(f, duration), i * 40);
    });
  }, [playNote]);

  const playReferenceNote = useCallback(() => {
    playNote(440, 0.8); // A4
  }, [playNote]);

  // ─── NOTES IN CURRENT RANGE ────────────────────────────────
  const notesInRange = useMemo(() => getNotesInRange(minOctave, maxOctave), [minOctave, maxOctave]);
  const whiteNotesInRange = useMemo(() => notesInRange.filter(n => n.type === 'white'), [notesInRange]);

  // Notes for single-octave display (for answer selection)
  const singleOctaveNotes = useMemo(() => {
    return ALL_GENERATED_NOTES.filter(n => n.octave === 4 && n.name !== 'C5');
  }, []);
  const singleOctaveWhite = useMemo(() => singleOctaveNotes.filter(n => n.type === 'white'), [singleOctaveNotes]);

  // Filtered intervals/chords
  const activeIntervals = useMemo(() => ALL_INTERVALS.filter(i => enabledIntervals.includes(i.name)), [enabledIntervals]);
  const activeChords = useMemo(() => CHORD_TYPES.filter(c => enabledChords.includes(c.name)), [enabledChords]);

  // ─── GAME LOGIC ────────────────────────────────────────────
  const generateRound = useCallback(() => {
    setFeedback(null);
    setAnswered(false);

    if (showReference) {
      playReferenceNote();
      // Delay the actual note
      setTimeout(() => generateRoundInner(), 1000);
    } else {
      generateRoundInner();
    }

    function generateRoundInner() {
      const pool = mode === 'white-keys'
        ? notesInRange.filter(n => n.type === 'white')
        : notesInRange;

      if (mode === 'white-keys' || mode === 'all-keys') {
        const note = pool[Math.floor(Math.random() * pool.length)];
        setCurrentNote(note);
        setCurrentInterval(null);
        setCurrentChord(null);
        setBaseNote(null);
        playNote(note.freq);
      } else if (mode === 'intervals') {
        if (activeIntervals.length === 0) return;
        const interval = activeIntervals[Math.floor(Math.random() * activeIntervals.length)];
        // Pick base note ensuring target stays in range
        const maxSemitones = interval.semitones;
        const validBases = pool.filter(n => {
          const targetFreq = n.freq * Math.pow(2, maxSemitones / 12);
          return targetFreq <= notesInRange[notesInRange.length - 1].freq;
        });
        if (validBases.length === 0) return;
        const base = validBases[Math.floor(Math.random() * validBases.length)];

        let semitones = interval.semitones;
        let direction = intervalDirection;
        if (direction === 'both') direction = Math.random() > 0.5 ? 'ascending' : 'descending';
        if (direction === 'descending') semitones = -semitones;

        const targetFreq = base.freq * Math.pow(2, semitones / 12);
        setCurrentNote(null);
        setBaseNote(base);
        setCurrentInterval({ ...interval, direction });
        setCurrentChord(null);
        playTwoNotes(base.freq, targetFreq);
      } else if (mode === 'chords') {
        if (activeChords.length === 0) return;
        const chord = activeChords[Math.floor(Math.random() * activeChords.length)];
        const validBases = pool.filter(n => {
          const maxInterval = Math.max(...chord.intervals);
          const topFreq = n.freq * Math.pow(2, maxInterval / 12);
          return topFreq <= notesInRange[notesInRange.length - 1].freq * 1.1;
        });
        if (validBases.length === 0) return;
        const base = validBases[Math.floor(Math.random() * validBases.length)];
        const freqs = chord.intervals.map(i => base.freq * Math.pow(2, i / 12));
        setCurrentNote(null);
        setBaseNote(base);
        setCurrentChord(chord);
        setCurrentInterval(null);
        playChord(freqs);
      }

      setStartTime(performance.now());
    }
  }, [mode, notesInRange, activeIntervals, activeChords, intervalDirection, showReference, playNote, playTwoNotes, playChord, playReferenceNote]);

  const startGame = useCallback(() => {
    if (mode === 'free-play') {
      setPhase('free-play');
      return;
    }
    setPhase('playing');
    setRound(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setTimes([]);
    setRoundHistory([]);
    setTimeout(() => generateRound(), 300);
  }, [generateRound, mode]);

  const replaySound = useCallback(() => {
    if (mode === 'chords' && baseNote && currentChord) {
      const freqs = currentChord.intervals.map(i => baseNote.freq * Math.pow(2, i / 12));
      playChord(freqs);
    } else if (mode === 'intervals' && baseNote && currentInterval) {
      const semitones = currentInterval.direction === 'descending' ? -currentInterval.semitones : currentInterval.semitones;
      const targetFreq = baseNote.freq * Math.pow(2, semitones / 12);
      playTwoNotes(baseNote.freq, targetFreq);
    } else if (currentNote) {
      playNote(currentNote.freq);
    }
  }, [mode, baseNote, currentChord, currentInterval, currentNote, playNote, playTwoNotes, playChord]);

  const handleAnswer = useCallback((answer) => {
    if (answered) return;
    setAnswered(true);
    const elapsed = Math.round(performance.now() - startTime);

    let isCorrect = false;
    let correctAnswer = '';
    if (mode === 'intervals') {
      isCorrect = answer === currentInterval.name;
      correctAnswer = currentInterval.name;
    } else if (mode === 'chords') {
      isCorrect = answer === currentChord.name;
      correctAnswer = currentChord.name;
    } else {
      isCorrect = answer === currentNote.name;
      correctAnswer = currentNote.name;
    }

    setFeedback({ correct: isCorrect, answer, time: elapsed });
    setTimes(t => [...t, elapsed]);
    setRoundHistory(h => [...h, { correct: isCorrect, answer, correctAnswer, time: elapsed, mode }]);

    if (isCorrect) {
      setScore(s => s + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) setBestStreak(newStreak);
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      const nextRound = round + 1;
      if (nextRound >= totalRounds) {
        const finalScore = isCorrect ? score + 1 : score;
        const key = `${mode}-${totalRounds}`;
        if (!highScores[key] || finalScore > highScores[key]) {
          const newScores = { ...highScores, [key]: finalScore };
          setHighScores(newScores);
          localStorage.setItem('perfect-pitch-scores-v2', JSON.stringify(newScores));
        }
        // Save stats
        saveStats(isCorrect, correctAnswer);
        setPhase('result');
      } else {
        setRound(nextRound);
        generateRound();
      }
    }, 800);
  }, [answered, startTime, mode, currentInterval, currentChord, currentNote, streak, bestStreak, round, score, highScores, totalRounds, generateRound]);

  const saveStats = useCallback((lastCorrect, lastCorrectAnswer) => {
    setStats(prev => {
      const session = {
        date: new Date().toISOString(),
        mode,
        score: lastCorrect ? score + 1 : score,
        total: totalRounds,
        avgTime: times.length > 0 ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : 0,
      };

      // Update per-note/interval/chord accuracy
      const newStats = { ...prev, sessions: [...(prev.sessions || []).slice(-50), session] };

      roundHistory.concat([{ correctAnswer: lastCorrectAnswer, correct: lastCorrect }]).forEach(r => {
        const key = mode === 'intervals' ? 'intervalAccuracy' : mode === 'chords' ? 'chordAccuracy' : 'noteAccuracy';
        const bucket = newStats[key] || {};
        if (!bucket[r.correctAnswer]) bucket[r.correctAnswer] = { correct: 0, total: 0 };
        bucket[r.correctAnswer].total++;
        if (r.correct) bucket[r.correctAnswer].correct++;
        newStats[key] = bucket;
      });

      localStorage.setItem('perfect-pitch-stats-v2', JSON.stringify(newStats));
      return newStats;
    });
  }, [mode, score, totalRounds, times, roundHistory]);

  // ─── KEYBOARD SHORTCUTS ────────────────────────────────────
  useEffect(() => {
    if (phase !== 'playing' && phase !== 'free-play') return;
    const handler = (e) => {
      if (e.target.tagName === 'INPUT') return;
      const key = e.key.toLowerCase();

      // R for replay
      if (key === 'r' && phase === 'playing') {
        e.preventDefault();
        replaySound();
        return;
      }

      // Note shortcuts
      if (NOTE_KEYS[key] && (mode === 'white-keys' || mode === 'all-keys' || phase === 'free-play')) {
        e.preventDefault();
        const noteName = NOTE_KEYS[key];
        if (phase === 'free-play') {
          const note = ALL_GENERATED_NOTES.find(n => n.name === noteName && n.octave === 4);
          if (note) playNote(note.freq);
        } else if (phase === 'playing') {
          if (mode === 'white-keys' && noteName.includes('#')) return;
          handleAnswer(noteName);
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [phase, mode, replaySound, handleAnswer, playNote]);

  // ─── COMPUTED ──────────────────────────────────────────────
  const avgTime = times.length > 0 ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : 0;
  const accuracy = totalRounds > 0 ? Math.round((score / totalRounds) * 100) : 0;

  // ─── SETTINGS PANEL ────────────────────────────────────────
  const renderSettings = () => (
    <motion.div key="settings" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="w-full max-w-xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => setPhase('menu')} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
          <ArrowLeft size={20} className="text-slate-300" />
        </button>
        <Sliders size={22} className="text-violet-400" />
        <h2 className="text-2xl font-bold text-white">Settings</h2>
      </div>

      <div className="space-y-6">
        {/* Rounds */}
        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
          <label className="text-sm text-slate-400 mb-2 block">Rounds per Session</label>
          <div className="flex gap-2">
            {[5, 10, 12, 15, 20, 25].map(n => (
              <button key={n} onClick={() => setTotalRounds(n)}
                className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${totalRounds === n ? 'bg-violet-600 text-white' : 'bg-slate-700 text-slate-400 hover:bg-slate-600'}`}>
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* Octave Range */}
        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
          <label className="text-sm text-slate-400 mb-2 block">Octave Range: <span className="text-white font-bold">C{minOctave} — C{maxOctave + 1}</span></label>
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <label className="text-xs text-slate-500">Min</label>
              <input type="range" min={2} max={maxOctave - 1} value={minOctave} onChange={e => setMinOctave(parseInt(e.target.value))}
                className="w-full accent-violet-500" />
            </div>
            <div className="flex-1">
              <label className="text-xs text-slate-500">Max</label>
              <input type="range" min={minOctave + 1} max={6} value={maxOctave} onChange={e => setMaxOctave(parseInt(e.target.value))}
                className="w-full accent-violet-500" />
            </div>
          </div>
        </div>

        {/* Sound Type */}
        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
          <label className="text-sm text-slate-400 mb-2 block">Sound Type</label>
          <div className="grid grid-cols-4 gap-2">
            {Object.entries(SOUND_TYPES).map(([key, val]) => {
              const Icon = val.icon;
              return (
                <button key={key} onClick={() => { setSoundType(key); playNote(440, 0.6); }}
                  className={`py-3 rounded-lg text-sm font-medium transition-all flex flex-col items-center gap-1 ${soundType === key ? 'bg-violet-600 text-white' : 'bg-slate-700 text-slate-400 hover:bg-slate-600'}`}>
                  <Icon size={18} />
                  {val.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Volume */}
        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
          <label className="text-sm text-slate-400 mb-2 block">Volume: <span className="text-white font-bold">{Math.round(volume * 100)}%</span></label>
          <input type="range" min={0} max={100} value={Math.round(volume * 100)} onChange={e => setVolume(parseInt(e.target.value) / 100)}
            className="w-full accent-violet-500" />
        </div>

        {/* Reference Note */}
        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 flex items-center justify-between">
          <div>
            <p className="text-white font-medium">Reference Note (A4 = 440Hz)</p>
            <p className="text-xs text-slate-500">Play A4 before each question as anchor</p>
          </div>
          <button onClick={() => setShowReference(!showReference)}
            className={`w-12 h-7 rounded-full transition-colors ${showReference ? 'bg-violet-500' : 'bg-slate-600'}`}>
            <div className={`w-5 h-5 bg-white rounded-full transition-transform mx-1 ${showReference ? 'translate-x-5' : ''}`} />
          </button>
        </div>

        {/* Auto-play */}
        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 flex items-center justify-between">
          <div>
            <p className="text-white font-medium">Auto-play Next</p>
            <p className="text-xs text-slate-500">Automatically play the next note after answering</p>
          </div>
          <button onClick={() => setAutoPlay(!autoPlay)}
            className={`w-12 h-7 rounded-full transition-colors ${autoPlay ? 'bg-violet-500' : 'bg-slate-600'}`}>
            <div className={`w-5 h-5 bg-white rounded-full transition-transform mx-1 ${autoPlay ? 'translate-x-5' : ''}`} />
          </button>
        </div>

        {/* Keyboard Hints */}
        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 flex items-center justify-between">
          <div>
            <p className="text-white font-medium">Keyboard Hints</p>
            <p className="text-xs text-slate-500">Show keyboard shortcut letters on keys</p>
          </div>
          <button onClick={() => setShowKeyHints(!showKeyHints)}
            className={`w-12 h-7 rounded-full transition-colors ${showKeyHints ? 'bg-violet-500' : 'bg-slate-600'}`}>
            <div className={`w-5 h-5 bg-white rounded-full transition-transform mx-1 ${showKeyHints ? 'translate-x-5' : ''}`} />
          </button>
        </div>

        {/* Interval Direction */}
        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
          <label className="text-sm text-slate-400 mb-2 block">Interval Direction</label>
          <div className="flex gap-2">
            {[
              { key: 'ascending', label: 'Ascending', icon: ArrowUp },
              { key: 'descending', label: 'Descending', icon: ArrowDown },
              { key: 'both', label: 'Both', icon: ArrowUpDown },
            ].map(d => {
              const Icon = d.icon;
              return (
                <button key={d.key} onClick={() => setIntervalDirection(d.key)}
                  className={`flex-1 py-2 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-1 ${intervalDirection === d.key ? 'bg-violet-600 text-white' : 'bg-slate-700 text-slate-400 hover:bg-slate-600'}`}>
                  <Icon size={14} />{d.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interval Selection */}
        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm text-slate-400">Active Intervals ({enabledIntervals.length}/{ALL_INTERVALS.length})</label>
            <div className="flex gap-2">
              <button onClick={() => setEnabledIntervals(ALL_INTERVALS.map(i => i.name))} className="text-xs text-violet-400 hover:text-violet-300">All</button>
              <button onClick={() => setEnabledIntervals(['Perfect 4th', 'Perfect 5th', 'Octave'])} className="text-xs text-violet-400 hover:text-violet-300">Perfect</button>
              <button onClick={() => setEnabledIntervals(['Minor 3rd', 'Major 3rd', 'Perfect 5th'])} className="text-xs text-violet-400 hover:text-violet-300">Basic</button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {ALL_INTERVALS.map(interval => (
              <button key={interval.name}
                onClick={() => setEnabledIntervals(prev =>
                  prev.includes(interval.name) ? prev.filter(i => i !== interval.name) : [...prev, interval.name]
                )}
                className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${enabledIntervals.includes(interval.name) ? 'bg-violet-600/50 text-violet-200 border border-violet-500/50' : 'bg-slate-700/50 text-slate-500 border border-slate-600/50'}`}>
                {interval.short} {interval.name.replace('Minor ', 'm').replace('Major ', 'M').replace('Perfect ', 'P')}
              </button>
            ))}
          </div>
        </div>

        {/* Chord Selection */}
        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm text-slate-400">Active Chords ({enabledChords.length}/{CHORD_TYPES.length})</label>
            <div className="flex gap-2">
              <button onClick={() => setEnabledChords(CHORD_TYPES.map(c => c.name))} className="text-xs text-violet-400 hover:text-violet-300">All</button>
              <button onClick={() => setEnabledChords(['Major', 'Minor'])} className="text-xs text-violet-400 hover:text-violet-300">Basic</button>
              <button onClick={() => setEnabledChords(['Major', 'Minor', 'Diminished', 'Augmented'])} className="text-xs text-violet-400 hover:text-violet-300">Triads</button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {CHORD_TYPES.map(chord => (
              <button key={chord.name}
                onClick={() => setEnabledChords(prev =>
                  prev.includes(chord.name) ? prev.filter(c => c !== chord.name) : [...prev, chord.name]
                )}
                className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${enabledChords.includes(chord.name) ? 'bg-amber-600/50 text-amber-200 border border-amber-500/50' : 'bg-slate-700/50 text-slate-500 border border-slate-600/50'}`}>
                {chord.short} {chord.name}
              </button>
            ))}
          </div>
        </div>

        {/* Reset Stats */}
        <button onClick={() => {
          if (confirm('Reset all statistics and high scores?')) {
            setStats({ sessions: [], noteAccuracy: {}, intervalAccuracy: {}, chordAccuracy: {} });
            setHighScores({});
            localStorage.removeItem('perfect-pitch-stats-v2');
            localStorage.removeItem('perfect-pitch-scores-v2');
          }
        }} className="w-full py-3 bg-red-900/30 border border-red-800/50 text-red-400 rounded-xl hover:bg-red-900/50 transition-colors text-sm font-medium">
          Reset All Statistics
        </button>
      </div>
    </motion.div>
  );

  // ─── STATS PAGE ────────────────────────────────────────────
  const renderStatsPage = () => {
    const recentSessions = [...(stats.sessions || [])].reverse().slice(0, 10);
    const noteAcc = stats.noteAccuracy || {};
    const intAcc = stats.intervalAccuracy || {};
    const chordAcc = stats.chordAccuracy || {};

    const renderAccuracy = (acc, label) => {
      const entries = Object.entries(acc).sort((a, b) => {
        const aRate = a[1].total > 0 ? a[1].correct / a[1].total : 0;
        const bRate = b[1].total > 0 ? b[1].correct / b[1].total : 0;
        return aRate - bRate;
      });
      if (entries.length === 0) return <p className="text-slate-500 text-sm">No data yet</p>;

      return (
        <div className="space-y-1.5">
          {entries.map(([name, data]) => {
            const rate = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
            return (
              <div key={name} className="flex items-center gap-2 text-sm">
                <span className="w-24 text-slate-300 font-medium truncate">{name}</span>
                <div className="flex-1 bg-slate-700 rounded-full h-2.5">
                  <div className={`h-2.5 rounded-full ${rate >= 80 ? 'bg-green-500' : rate >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${rate}%` }} />
                </div>
                <span className={`w-14 text-right font-mono ${rate >= 80 ? 'text-green-400' : rate >= 50 ? 'text-yellow-400' : 'text-red-400'}`}>
                  {rate}%
                </span>
                <span className="w-12 text-right text-slate-500 text-xs">{data.correct}/{data.total}</span>
              </div>
            );
          })}
        </div>
      );
    };

    return (
      <motion.div key="stats" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="w-full max-w-xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => setPhase('menu')} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
            <ArrowLeft size={20} className="text-slate-300" />
          </button>
          <BarChart3 size={22} className="text-violet-400" />
          <h2 className="text-2xl font-bold text-white">Statistics</h2>
        </div>

        {/* Summary */}
        {recentSessions.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700 text-center">
              <p className="text-2xl font-bold text-violet-400">{stats.sessions?.length || 0}</p>
              <p className="text-xs text-slate-400">Sessions</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700 text-center">
              <p className="text-2xl font-bold text-green-400">
                {stats.sessions?.length > 0 ? Math.round(stats.sessions.reduce((a, s) => a + (s.score / s.total) * 100, 0) / stats.sessions.length) : 0}%
              </p>
              <p className="text-xs text-slate-400">Avg Accuracy</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700 text-center">
              <p className="text-2xl font-bold text-blue-400">
                {stats.sessions?.length > 0 ? Math.round(stats.sessions.reduce((a, s) => a + s.avgTime, 0) / stats.sessions.length) : 0}ms
              </p>
              <p className="text-xs text-slate-400">Avg Time</p>
            </div>
          </div>
        )}

        {/* Note Accuracy */}
        {Object.keys(noteAcc).length > 0 && (
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 mb-4">
            <h3 className="text-white font-bold mb-3 flex items-center gap-2"><Music size={16} className="text-green-400" />Note Accuracy</h3>
            {renderAccuracy(noteAcc, 'Notes')}
          </div>
        )}

        {/* Interval Accuracy */}
        {Object.keys(intAcc).length > 0 && (
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 mb-4">
            <h3 className="text-white font-bold mb-3 flex items-center gap-2"><ArrowUpDown size={16} className="text-purple-400" />Interval Accuracy</h3>
            {renderAccuracy(intAcc, 'Intervals')}
          </div>
        )}

        {/* Chord Accuracy */}
        {Object.keys(chordAcc).length > 0 && (
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 mb-4">
            <h3 className="text-white font-bold mb-3 flex items-center gap-2"><Headphones size={16} className="text-amber-400" />Chord Accuracy</h3>
            {renderAccuracy(chordAcc, 'Chords')}
          </div>
        )}

        {/* Recent Sessions */}
        {recentSessions.length > 0 && (
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <h3 className="text-white font-bold mb-3">Recent Sessions</h3>
            <div className="space-y-2">
              {recentSessions.map((s, i) => (
                <div key={i} className="flex items-center gap-3 text-sm bg-slate-700/30 rounded-lg px-3 py-2">
                  <span className="text-slate-500 w-16">{new Date(s.date).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' })}</span>
                  <span className="text-slate-300 font-medium flex-1">{MODES[s.mode]?.name || s.mode}</span>
                  <span className={`font-bold ${Math.round((s.score / s.total) * 100) >= 80 ? 'text-green-400' : 'text-yellow-400'}`}>
                    {s.score}/{s.total}
                  </span>
                  <span className="text-slate-500 w-16 text-right">{s.avgTime}ms</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {stats.sessions?.length === 0 && (
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 text-center">
            <BarChart3 size={48} className="text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400">No sessions yet. Start training to see your stats!</p>
          </div>
        )}
      </motion.div>
    );
  };

  // ─── FREE PLAY ─────────────────────────────────────────────
  const renderFreePlay = () => {
    const octaveNotes = (oct) => ALL_GENERATED_NOTES.filter(n => n.octave === oct);
    const displayOctaves = [];
    for (let o = minOctave; o <= maxOctave; o++) displayOctaves.push(o);

    return (
      <motion.div key="free-play" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => setPhase('menu')} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
            <ArrowLeft size={20} className="text-slate-300" />
          </button>
          <BookOpen size={22} className="text-pink-400" />
          <h2 className="text-xl font-bold text-white">Free Play — Explore & Learn</h2>
        </div>

        <p className="text-slate-400 text-sm mb-4 text-center">Click notes to hear them. Use keyboard: A=C, W=C#, S=D, E=D#, D=E, F=F, T=F#, G=G, Y=G#, H=A, U=A#, J=B</p>

        {/* Multi-octave keyboard */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-0.5 min-w-fit mx-auto justify-center">
            {displayOctaves.map(oct => {
              const notes = octaveNotes(oct);
              const whites = notes.filter(n => n.type === 'white');
              const blackPositions = { 'C#': 0, 'D#': 1, 'F#': 3, 'G#': 4, 'A#': 5 };

              return (
                <div key={oct} className="relative">
                  {/* Octave label */}
                  <div className="text-[10px] text-slate-500 text-center mb-1">C{oct}</div>
                  <div className="flex gap-px relative">
                    {whites.map(note => (
                      <motion.button
                        key={note.label}
                        whileTap={{ scale: 0.95, backgroundColor: '#a78bfa' }}
                        onClick={() => playNote(note.freq)}
                        className="w-10 md:w-12 h-28 md:h-36 rounded-b-md bg-white hover:bg-violet-100 border border-slate-300 text-slate-600 text-[10px] font-medium relative flex flex-col justify-end items-center pb-1 transition-colors"
                      >
                        <span>{note.name}</span>
                        {showKeyHints && note.octave === 4 && (
                          <span className="text-[8px] text-slate-400">{Object.entries(NOTE_KEYS).find(([k, v]) => v === note.name && !note.name.includes('#'))?.[0]?.toUpperCase()}</span>
                        )}
                      </motion.button>
                    ))}
                    {/* Black keys */}
                    {whites.map((_, i) => {
                      const bn = notes.find(n => n.type === 'black' && blackPositions[n.name] === i);
                      if (!bn) return null;
                      const leftOffset = (i + 1) * (40) - 12; // approx positioning
                      const mdLeftOffset = (i + 1) * (48) - 14;
                      return (
                        <motion.button
                          key={bn.label}
                          whileTap={{ scale: 0.95, backgroundColor: '#7c3aed' }}
                          onClick={() => playNote(bn.freq)}
                          className="absolute top-5 w-7 md:w-8 h-16 md:h-20 rounded-b-md bg-slate-800 hover:bg-violet-800 text-slate-300 text-[8px] font-medium flex flex-col justify-end items-center pb-0.5 z-10 shadow-md transition-colors"
                          style={{ left: `${leftOffset}px` }}
                        >
                          <span>{bn.name}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reference pitch button */}
        <div className="flex justify-center gap-3 mt-6">
          <button onClick={playReferenceNote}
            className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors text-sm flex items-center gap-2">
            <Volume2 size={16} /> Play A4 (440Hz) Reference
          </button>
        </div>
      </motion.div>
    );
  };

  // ─── PIANO KEYBOARD (GAME) ────────────────────────────────
  const renderPianoKeyboard = () => {
    const useWhiteOnly = mode === 'white-keys';
    const whiteKeys = singleOctaveWhite;
    const allKeys = singleOctaveNotes;
    const blackKeyPositions = { 'C#': 0, 'D#': 1, 'F#': 3, 'G#': 4, 'A#': 5 };

    return (
      <div className="relative mx-auto" style={{ maxWidth: useWhiteOnly ? '370px' : '420px' }}>
        {/* White keys */}
        <div className="flex gap-1">
          {whiteKeys.map((note) => {
            const shortcut = showKeyHints ? Object.entries(NOTE_KEYS).find(([k, v]) => v === note.name && !note.name.includes('#'))?.[0]?.toUpperCase() : null;
            return (
              <motion.button
                key={note.label}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAnswer(note.name)}
                disabled={answered}
                className={`relative flex-1 h-32 md:h-40 rounded-b-lg font-bold text-sm transition-all border ${
                  feedback && !feedback.correct && feedback.answer === note.name
                    ? 'bg-red-400 border-red-500 text-red-900'
                    : feedback && currentNote?.name === note.name
                      ? 'bg-green-400 border-green-500 text-green-900'
                      : 'bg-white hover:bg-slate-100 border-slate-300 text-slate-700'
                }`}
              >
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2">{note.name}</span>
                {shortcut && (
                  <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 bg-slate-100 px-1 rounded">{shortcut}</span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Black keys */}
        {!useWhiteOnly && (
          <div className="absolute top-0 left-0 right-0 flex pointer-events-none" style={{ padding: '0 2px' }}>
            {whiteKeys.map((_, i) => {
              const blackNote = allKeys.find(n => n.type === 'black' && blackKeyPositions[n.name] === i);
              if (!blackNote) return <div key={i} className="flex-1" />;
              const shortcut = showKeyHints ? Object.entries(NOTE_KEYS).find(([k, v]) => v === blackNote.name)?.[0]?.toUpperCase() : null;

              return (
                <div key={i} className="flex-1 flex justify-end" style={{ marginRight: '-12px' }}>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAnswer(blackNote.name)}
                    disabled={answered}
                    className={`pointer-events-auto w-8 md:w-10 h-20 md:h-24 rounded-b-md font-bold text-xs z-10 transition-all relative ${
                      feedback && !feedback.correct && feedback.answer === blackNote.name
                        ? 'bg-red-600 text-red-200'
                        : feedback && currentNote?.name === blackNote.name
                          ? 'bg-green-600 text-green-200'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                    }`}
                  >
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px]">{blackNote.name}</span>
                    {shortcut && (
                      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[8px] text-slate-500">{shortcut}</span>
                    )}
                  </motion.button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  // ─── INTERVAL BUTTONS ──────────────────────────────────────
  const renderIntervalButtons = () => (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-2 max-w-lg mx-auto">
      {activeIntervals.map((interval) => (
        <motion.button
          key={interval.name}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleAnswer(interval.name)}
          disabled={answered}
          className={`px-3 py-3 rounded-xl font-medium text-sm transition-all ${
            feedback && !feedback.correct && feedback.answer === interval.name
              ? 'bg-red-600 text-white ring-2 ring-red-400'
              : feedback && currentInterval?.name === interval.name
                ? 'bg-green-600 text-white ring-2 ring-green-400'
                : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
          }`}
        >
          <span className="block font-bold">{interval.short}</span>
          <span className="block text-xs opacity-70">{interval.name}</span>
        </motion.button>
      ))}
    </div>
  );

  // ─── CHORD BUTTONS ─────────────────────────────────────────
  const renderChordButtons = () => (
    <div className="grid grid-cols-3 gap-2 max-w-lg mx-auto">
      {activeChords.map((chord) => (
        <motion.button
          key={chord.name}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleAnswer(chord.name)}
          disabled={answered}
          className={`px-3 py-4 rounded-xl font-medium text-sm transition-all ${
            feedback && !feedback.correct && feedback.answer === chord.name
              ? 'bg-red-600 text-white ring-2 ring-red-400'
              : feedback && currentChord?.name === chord.name
                ? 'bg-green-600 text-white ring-2 ring-green-400'
                : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
          }`}
        >
          <span className={`block font-bold ${chord.color}`}>{chord.short}</span>
          <span className="block text-xs opacity-70">{chord.name}</span>
        </motion.button>
      ))}
    </div>
  );

  // ─── RENDER ────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-violet-950/30 to-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="bg-slate-900/80 backdrop-blur border-b border-slate-700 px-4 py-3 flex items-center gap-3">
          <a href="/tools" className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
            <ArrowLeft size={20} className="text-slate-300" />
          </a>
          <Music size={22} className="text-violet-400" />
          <h1 className="text-lg font-bold text-white">Perfect Pitch Trainer</h1>

          {phase === 'playing' && (
            <div className="ml-auto flex gap-4 text-sm">
              <span className="text-slate-400">Round: <span className="text-white">{round + 1}/{totalRounds}</span></span>
              <span className="text-slate-400">Score: <span className="text-green-400">{score}</span></span>
              {streak > 1 && <span className="text-yellow-400 font-bold">{streak}x</span>}
            </div>
          )}

          {phase === 'menu' && (
            <div className="ml-auto flex gap-2">
              <button onClick={() => setPhase('stats')} className="p-2 hover:bg-slate-700 rounded-lg transition-colors" title="Statistics">
                <BarChart3 size={18} className="text-slate-400" />
              </button>
              <button onClick={() => setPhase('settings')} className="p-2 hover:bg-slate-700 rounded-lg transition-colors" title="Settings">
                <Settings size={18} className="text-slate-400" />
              </button>
            </div>
          )}
        </div>

        <div className="flex-1 flex items-center justify-center p-4 overflow-y-auto">
          <AnimatePresence mode="wait">
            {/* ─── MENU ────────────────────────────────────── */}
            {phase === 'menu' && (
              <motion.div key="menu" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center max-w-lg w-full">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-violet-500/30 rounded-2xl flex items-center justify-center">
                  <Music size={40} className="text-violet-400" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Perfect Pitch</h2>
                <p className="text-slate-400 mb-2">
                  Train your ear to identify notes, intervals, and chords.
                </p>
                <p className="text-slate-500 text-sm mb-6">
                  Range: C{minOctave}—C{maxOctave + 1} · {totalRounds} rounds · {SOUND_TYPES[soundType].name} sound
                </p>

                {/* Mode Selection */}
                <div className="space-y-2.5 mb-8">
                  {Object.entries(MODES).map(([key, val]) => {
                    const hsKey = `${key}-${totalRounds}`;
                    return (
                      <motion.button
                        key={key}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setMode(key)}
                        className={`w-full px-5 py-3.5 rounded-xl text-left transition-all flex items-center gap-4 ${
                          mode === key
                            ? 'bg-gradient-to-r ' + val.color + ' text-white shadow-lg shadow-violet-500/10'
                            : 'bg-slate-800/50 text-slate-300 border border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        <span className="text-2xl">{val.icon}</span>
                        <div className="flex-1">
                          <p className="font-bold text-sm">{val.name}</p>
                          <p className={`text-xs ${mode === key ? 'text-white/80' : 'text-slate-500'}`}>
                            {val.description}
                          </p>
                        </div>
                        {highScores[hsKey] && (
                          <span className={`text-sm ${mode === key ? 'text-white/80' : 'text-yellow-400'}`}>
                            <Trophy size={13} className="inline mr-1" />{highScores[hsKey]}/{totalRounds}
                          </span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                <button onClick={startGame}
                  className="px-8 py-4 bg-gradient-to-r from-violet-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto shadow-lg shadow-violet-500/25">
                  <Play size={20} />
                  {mode === 'free-play' ? 'Open Keyboard' : `Start Training (${totalRounds} rounds)`}
                </button>

                {/* Quick info */}
                <div className="mt-6 flex justify-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Keyboard size={12} /> Keyboard shortcuts</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Volume2 size={12} /> R to replay</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Settings size={12} /> Customize</span>
                </div>
              </motion.div>
            )}

            {/* ─── SETTINGS ──────────────────────────────── */}
            {phase === 'settings' && renderSettings()}

            {/* ─── STATS ─────────────────────────────────── */}
            {phase === 'stats' && renderStatsPage()}

            {/* ─── FREE PLAY ─────────────────────────────── */}
            {phase === 'free-play' && renderFreePlay()}

            {/* ─── PLAYING ───────────────────────────────── */}
            {phase === 'playing' && (
              <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center w-full max-w-xl">
                {/* Progress */}
                <div className="w-full bg-slate-800 rounded-full h-2 mb-6">
                  <motion.div
                    className={`bg-gradient-to-r ${MODES[mode]?.color || 'from-violet-500 to-pink-500'} h-2 rounded-full`}
                    animate={{ width: `${((round + 1) / totalRounds) * 100}%` }}
                  />
                </div>

                <p className="text-slate-400 mb-3 text-sm">
                  {mode === 'intervals'
                    ? `Listen to the two notes (${currentInterval?.direction || intervalDirection}) and identify the interval`
                    : mode === 'chords'
                      ? `Listen to the chord and identify its quality${baseNote ? ` (root: ${baseNote.name}${baseNote.octave})` : ''}`
                      : `Listen to the note and identify it${currentNote ? ` (octave ${currentNote.octave})` : ''}`}
                </p>

                {/* Controls */}
                <div className="flex justify-center gap-2 mb-5">
                  <motion.button whileTap={{ scale: 0.9 }} onClick={replaySound}
                    className="px-5 py-2.5 bg-violet-600/20 border border-violet-500/30 text-violet-300 rounded-xl hover:bg-violet-600/30 transition-all flex items-center gap-2 text-sm">
                    <Volume2 size={16} /> Replay <span className="text-violet-500 text-xs">(R)</span>
                  </motion.button>
                  {showReference && (
                    <motion.button whileTap={{ scale: 0.9 }} onClick={playReferenceNote}
                      className="px-5 py-2.5 bg-slate-800/50 border border-slate-600 text-slate-400 rounded-xl hover:bg-slate-700 transition-all flex items-center gap-2 text-sm">
                      <Music size={16} /> A4 Ref
                    </motion.button>
                  )}
                </div>

                {/* Streak indicator */}
                {streak > 1 && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mb-4 flex items-center justify-center gap-1">
                    {Array.from({ length: Math.min(streak, 10) }).map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-yellow-400 font-bold text-sm ml-1">{streak}x streak</span>
                  </motion.div>
                )}

                {/* Answer area */}
                {mode === 'intervals' ? renderIntervalButtons()
                  : mode === 'chords' ? renderChordButtons()
                  : renderPianoKeyboard()}

                {/* Feedback */}
                <AnimatePresence>
                  {feedback && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className={`mt-4 inline-block px-5 py-2.5 rounded-full text-sm font-bold ${
                        feedback.correct ? 'bg-green-600/20 text-green-400 border border-green-500/30' : 'bg-red-600/20 text-red-400 border border-red-500/30'
                      }`}>
                      {feedback.correct ? 'Correct!' :
                        mode === 'intervals' ? `Wrong! It was ${currentInterval?.name}`
                        : mode === 'chords' ? `Wrong! It was ${currentChord?.name}`
                        : `Wrong! It was ${currentNote?.name}${currentNote?.octave}`}
                      <span className="ml-2 text-xs opacity-60">{feedback.time}ms</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* ─── RESULT ────────────────────────────────── */}
            {phase === 'result' && (
              <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md w-full">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
                  <Trophy size={64} className={accuracy >= 80 ? 'text-yellow-400 mx-auto mb-4' : accuracy >= 50 ? 'text-slate-300 mx-auto mb-4' : 'text-slate-500 mx-auto mb-4'} />
                </motion.div>

                <h2 className="text-3xl font-bold text-white mb-1">Training Complete!</h2>
                <p className="text-slate-400 mb-6">{MODES[mode]?.name} · {totalRounds} rounds · {SOUND_TYPES[soundType].name}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <p className="text-3xl font-bold text-green-400">{score}/{totalRounds}</p>
                    <p className="text-xs text-slate-400 mt-1">Correct</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <p className="text-3xl font-bold text-blue-400">{accuracy}%</p>
                    <p className="text-xs text-slate-400 mt-1">Accuracy</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <p className="text-3xl font-bold text-purple-400">{avgTime}ms</p>
                    <p className="text-xs text-slate-400 mt-1">Avg Response</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <p className="text-3xl font-bold text-yellow-400">{bestStreak}</p>
                    <p className="text-xs text-slate-400 mt-1">Best Streak</p>
                  </div>
                </div>

                {/* Round-by-round breakdown */}
                {roundHistory.length > 0 && (
                  <div className="flex justify-center gap-1 mb-6">
                    {roundHistory.map((r, i) => (
                      <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.03 }}
                        title={`${r.correctAnswer} — ${r.correct ? 'Correct' : 'Wrong: ' + r.answer} (${r.time}ms)`}
                        className={`w-3 h-3 rounded-full ${r.correct ? 'bg-green-500' : 'bg-red-500'}`} />
                    ))}
                  </div>
                )}

                {highScores[`${mode}-${totalRounds}`] === score && score > 0 && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-yellow-400 font-bold mb-4 flex items-center justify-center gap-1">
                    <Sparkles size={16} /> New High Score!
                  </motion.p>
                )}

                <div className="flex gap-3 justify-center">
                  <button onClick={startGame}
                    className="px-6 py-3 bg-gradient-to-r from-violet-600 to-pink-600 text-white rounded-xl font-bold hover:scale-105 transition-transform">
                    Play Again
                  </button>
                  <button onClick={() => setPhase('stats')}
                    className="px-6 py-3 bg-slate-800 text-slate-300 rounded-xl font-bold hover:bg-slate-700 flex items-center gap-2">
                    <BarChart3 size={16} /> Stats
                  </button>
                  <button onClick={() => setPhase('menu')}
                    className="px-6 py-3 bg-slate-800 text-slate-300 rounded-xl font-bold hover:bg-slate-700">
                    Menu
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
