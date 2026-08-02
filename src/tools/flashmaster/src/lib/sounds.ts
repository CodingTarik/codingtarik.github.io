/**
 * Sound Effects System v3
 * Warm, natural-sounding audio using Web Audio API
 * Uses layered oscillators with chorus, soft filtering, proper ADSR envelopes,
 * and convolution reverb for a polished, app-quality feel.
 */

let audioCtx: AudioContext | null = null;
let reverbBuffer: AudioBuffer | null = null;
let masterCompressor: DynamicsCompressorNode | null = null;

function getCtx(): AudioContext {
  if (!audioCtx) {
    audioCtx = new AudioContext();
    // Master compressor for smooth, consistent volume
    masterCompressor = audioCtx.createDynamicsCompressor();
    masterCompressor.threshold.value = -24;
    masterCompressor.knee.value = 12;
    masterCompressor.ratio.value = 4;
    masterCompressor.attack.value = 0.003;
    masterCompressor.release.value = 0.15;
    masterCompressor.connect(audioCtx.destination);
    createReverb(audioCtx).then(buf => { reverbBuffer = buf; });
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function getMaster(): AudioNode {
  return masterCompressor || getCtx().destination;
}

/** Generate a lush synthetic impulse response for a warm room reverb */
async function createReverb(ctx: AudioContext): Promise<AudioBuffer> {
  const length = ctx.sampleRate * 1.2; // 1.2s reverb tail
  const buffer = ctx.createBuffer(2, length, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const data = buffer.getChannelData(ch);
    for (let i = 0; i < length; i++) {
      const t = i / length;
      // Multi-stage decay for natural reverb feel
      const earlyDecay = Math.exp(-t * 6) * 0.6;
      const lateDecay = Math.exp(-t * 2.5) * 0.4;
      const envelope = earlyDecay + lateDecay;
      // Slightly correlated noise between channels for width
      data[i] = (Math.random() * 2 - 1) * envelope * 0.7;
    }
  }
  return buffer;
}

function createReverbSend(ctx: AudioContext, wetAmount: number = 0.2): GainNode | null {
  if (!reverbBuffer) return null;
  const convolver = ctx.createConvolver();
  convolver.buffer = reverbBuffer;

  // Pre-filter to soften the reverb
  const preFilter = ctx.createBiquadFilter();
  preFilter.type = 'lowpass';
  preFilter.frequency.value = 4000;
  preFilter.Q.value = 0.5;

  const wetGain = ctx.createGain();
  wetGain.gain.value = wetAmount;

  const sendGain = ctx.createGain();
  sendGain.gain.value = 1;

  sendGain.connect(preFilter);
  preFilter.connect(convolver);
  convolver.connect(wetGain);
  wetGain.connect(getMaster());

  return sendGain;
}

// ── Preference ──

const SOUND_KEY = 'flashmaster-sounds-enabled';

export function isSoundEnabled(): boolean {
  return localStorage.getItem(SOUND_KEY) !== 'false';
}

export function setSoundEnabled(enabled: boolean): void {
  localStorage.setItem(SOUND_KEY, String(enabled));
}

// ── Building blocks ──

interface ToneOpts {
  type?: OscillatorType;
  detuneCents?: number;
  /** Add a slightly detuned copy for chorus warmth */
  chorus?: boolean;
  /** Low-pass filter cutoff (Hz) - lower = warmer */
  lpf?: number;
  pan?: number;
  reverb?: number;
  /** Additional harmonics as freq multipliers */
  harmonics?: { mult: number; vol: number; type?: OscillatorType }[];
}

/** Play a rich, filtered tone with ADSR envelope */
function playTone(
  freq: number,
  startTime: number,
  attack: number,
  decay: number,
  sustain: number,
  release: number,
  peakVol: number,
  opts: ToneOpts = {}
): void {
  const ctx = getCtx();
  const {
    type = 'sine',
    detuneCents = 0,
    chorus = false,
    lpf = 6000,
    pan = 0,
    reverb = 0.15,
    harmonics = [],
  } = opts;

  const t = startTime;
  const sustainStart = t + attack + decay;
  const sustainVol = peakVol * sustain;
  const endTime = sustainStart + release;

  // Create oscillator chain
  function createOscChain(f: number, vol: number, oscType: OscillatorType, detune: number) {
    const osc = ctx.createOscillator();
    osc.type = oscType;
    osc.frequency.value = f;
    osc.detune.value = detune;

    const env = ctx.createGain();
    // ADSR envelope
    env.gain.setValueAtTime(0, t);
    env.gain.linearRampToValueAtTime(vol, t + attack);
    env.gain.exponentialRampToValueAtTime(Math.max(sustainVol, 0.0001), t + attack + decay);
    if (release > 0) {
      env.gain.setValueAtTime(Math.max(sustainVol, 0.0001), sustainStart);
      env.gain.exponentialRampToValueAtTime(0.0001, endTime);
    }

    osc.connect(env);
    osc.start(t);
    osc.stop(endTime + 0.05);
    return env;
  }

  // Low-pass filter for warmth
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = lpf;
  filter.Q.value = 0.7;

  // Stereo panning
  const panner = ctx.createStereoPanner();
  panner.pan.value = pan;

  // Connect filter -> panner -> master
  filter.connect(panner);
  panner.connect(getMaster());

  // Reverb send
  const reverbSend = createReverbSend(ctx, reverb);
  if (reverbSend) {
    panner.connect(reverbSend);
  }

  // Main oscillator
  const mainEnv = createOscChain(freq, peakVol, type, detuneCents);
  mainEnv.connect(filter);

  // Chorus: a slightly detuned copy for thickness
  if (chorus) {
    const chorusEnv = createOscChain(freq, peakVol * 0.35, type, detuneCents + 8);
    chorusEnv.connect(filter);
    const chorusEnv2 = createOscChain(freq, peakVol * 0.35, type, detuneCents - 8);
    chorusEnv2.connect(filter);
  }

  // Extra harmonics
  for (const h of harmonics) {
    const hEnv = createOscChain(freq * h.mult, h.vol, h.type || 'sine', detuneCents);
    hEnv.connect(filter);
  }
}

/** Soft filtered noise for texture (whooshes, brushes, taps) */
function playNoise(
  startTime: number,
  duration: number,
  filterFreq: number,
  filterType: BiquadFilterType,
  volume: number,
  filterQ: number = 1.0,
  decayPower: number = 3
): void {
  const ctx = getCtx();
  const t = startTime;
  const len = Math.ceil(ctx.sampleRate * duration);
  const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < len; i++) {
    const env = Math.pow(1 - i / len, decayPower);
    data[i] = (Math.random() * 2 - 1) * env;
  }

  const src = ctx.createBufferSource();
  src.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = filterType;
  filter.frequency.value = filterFreq;
  filter.Q.value = filterQ;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(volume, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

  src.connect(filter);
  filter.connect(gain);
  gain.connect(getMaster());

  src.start(t);
  src.stop(t + duration + 0.01);
}

// ════════════════════════════════════════════
// ── Public Sound Effects ──
// ════════════════════════════════════════════

/** Card flip — soft, satisfying page-turn feel with a tiny sparkle */
export function playFlip(): void {
  if (!isSoundEnabled()) return;
  const ctx = getCtx();
  const now = ctx.currentTime;

  // Soft filtered noise brush — like paper
  playNoise(now, 0.08, 3000, 'bandpass', 0.04, 0.8, 4);

  // Tiny bright sparkle at end
  playTone(3200, now + 0.02, 0.005, 0.01, 0.0, 0.06, 0.018, {
    type: 'sine',
    lpf: 5000,
    reverb: 0.06,
  });
}

/** Good / Correct — warm marimba-like two-note chime (C5 → E5) */
export function playCorrect(): void {
  if (!isSoundEnabled()) return;
  const ctx = getCtx();
  const now = ctx.currentTime;

  // Warm C5 — triangle for body, sine harmonic for presence
  playTone(523.25, now, 0.008, 0.15, 0.3, 0.6, 0.09, {
    type: 'triangle',
    chorus: true,
    lpf: 3500,
    pan: -0.12,
    reverb: 0.2,
    harmonics: [
      { mult: 2, vol: 0.015, type: 'sine' },
      { mult: 4, vol: 0.005 },
    ],
  });

  // E5 — slightly delayed
  playTone(659.25, now + 0.13, 0.008, 0.15, 0.25, 0.55, 0.08, {
    type: 'triangle',
    chorus: true,
    lpf: 3800,
    pan: 0.12,
    reverb: 0.2,
    harmonics: [
      { mult: 2, vol: 0.012 },
    ],
  });
}

/** Easy / Perfect — delightful ascending kalimba arpeggio (C5 → E5 → G5 → C6) */
export function playEasy(): void {
  if (!isSoundEnabled()) return;
  const ctx = getCtx();
  const now = ctx.currentTime;

  const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
  notes.forEach((freq, i) => {
    const t = now + i * 0.1;
    const vol = 0.07 - i * 0.008;

    playTone(freq, t, 0.006, 0.1, 0.2, 0.5 - i * 0.06, vol, {
      type: 'triangle',
      chorus: true,
      lpf: 3200 + i * 600,
      pan: -0.2 + i * 0.13,
      reverb: 0.22,
      harmonics: [
        { mult: 2, vol: 0.012 - i * 0.002 },
        { mult: 3, vol: 0.004 },
      ],
    });

    // Octave shimmer on last two notes
    if (i >= 2) {
      playTone(freq * 2, t + 0.03, 0.005, 0.08, 0.0, 0.3, 0.015, {
        lpf: 6000,
        pan: 0.2 - i * 0.13,
        reverb: 0.28,
      });
    }
  });
}

/** Again / Wrong — gentle, warm descending minor second. Soft and non-punishing. */
export function playAgain(): void {
  if (!isSoundEnabled()) return;
  const ctx = getCtx();
  const now = ctx.currentTime;

  // Eb4 → D4 descending minor second — melancholic but soft
  playTone(311.13, now, 0.01, 0.12, 0.2, 0.35, 0.055, {
    type: 'triangle',
    chorus: true,
    lpf: 2200,
    pan: -0.08,
    reverb: 0.15,
    harmonics: [{ mult: 2, vol: 0.008 }],
  });

  playTone(293.66, now + 0.14, 0.01, 0.15, 0.15, 0.4, 0.045, {
    type: 'triangle',
    chorus: true,
    lpf: 2000,
    pan: 0.08,
    reverb: 0.15,
    harmonics: [{ mult: 2, vol: 0.006 }],
  });
}

/** Hard — neutral soft wooden knock / muted bell */
export function playHard(): void {
  if (!isSoundEnabled()) return;
  const ctx = getCtx();
  const now = ctx.currentTime;

  // Muted bell-like tone (low-passed triangle)
  playTone(440, now, 0.004, 0.08, 0.1, 0.2, 0.05, {
    type: 'triangle',
    lpf: 1800,
    reverb: 0.1,
    harmonics: [
      { mult: 2.76, vol: 0.012, type: 'sine' }, // inharmonic = bell-like
      { mult: 5.4, vol: 0.004 },
    ],
  });

  // Gentle knock texture
  playNoise(now, 0.03, 2000, 'bandpass', 0.02, 1.2, 5);
}

/** Skip — light airy swoosh with subtle pitch drop */
export function playSkip(): void {
  if (!isSoundEnabled()) return;
  const ctx = getCtx();
  const now = ctx.currentTime;

  // Falling pitch swoosh
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(700, now);
  osc.frequency.exponentialRampToValueAtTime(250, now + 0.12);

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 2500;
  filter.Q.value = 0.5;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.035, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(getMaster());
  osc.start(now);
  osc.stop(now + 0.18);

  // Soft breathy swoosh
  playNoise(now, 0.08, 2500, 'highpass', 0.025, 0.5, 3);
}

/** Navigate — very subtle satisfying click/tick */
export function playNav(): void {
  if (!isSoundEnabled()) return;
  const ctx = getCtx();
  const now = ctx.currentTime;

  // Short, clean tick
  playTone(1400, now, 0.002, 0.005, 0.0, 0.035, 0.03, {
    type: 'sine',
    lpf: 3000,
    reverb: 0.04,
  });
}

/** Session complete — beautiful triumphant fanfare, warm & full */
export function playComplete(): void {
  if (!isSoundEnabled()) return;
  const ctx = getCtx();
  const now = ctx.currentTime;

  // Rising arpeggio: C4 → E4 → G4 → C5
  const notes = [261.63, 329.63, 392.0, 523.25];
  notes.forEach((freq, i) => {
    const t = now + i * 0.15;
    const vol = 0.065 + i * 0.005;

    playTone(freq, t, 0.01, 0.18, 0.35, 0.8 - i * 0.1, vol, {
      type: 'triangle',
      chorus: true,
      lpf: 2800 + i * 400,
      pan: -0.25 + i * 0.17,
      reverb: 0.25,
      harmonics: [
        { mult: 2, vol: 0.015, type: 'sine' },
        { mult: 3, vol: 0.006 },
      ],
    });

    // Perfect fifth harmony (subtle)
    playTone(freq * 1.5, t + 0.04, 0.008, 0.12, 0.2, 0.5, 0.02, {
      type: 'sine',
      lpf: 3000,
      pan: 0.25 - i * 0.17,
      reverb: 0.3,
    });
  });

  // Final sustained major chord
  setTimeout(() => {
    if (!isSoundEnabled()) return;
    const ctx2 = getCtx();
    const now2 = ctx2.currentTime;
    const chord = [523.25, 659.25, 783.99]; // C5, E5, G5
    chord.forEach((freq, i) => {
      playTone(freq, now2, 0.02, 0.2, 0.4, 1.0, 0.04, {
        type: 'triangle',
        chorus: true,
        lpf: 2800,
        pan: -0.2 + i * 0.2,
        reverb: 0.35,
        harmonics: [{ mult: 2, vol: 0.008 }],
      });
    });
  }, 700);
}

/** Achievement unlocked — magical sparkling cascade */
export function playAchievement(): void {
  if (!isSoundEnabled()) return;
  const ctx = getCtx();
  const now = ctx.currentTime;

  // Quick ascending sparkle: C6 → E6 → G6 → C7
  const notes = [1046.5, 1318.5, 1568.0, 2093.0];
  notes.forEach((freq, i) => {
    const t = now + i * 0.075;
    playTone(freq, t, 0.004, 0.06, 0.15, 0.4, 0.035 - i * 0.004, {
      type: 'sine',
      chorus: true,
      lpf: 5000,
      pan: -0.25 + i * 0.17,
      reverb: 0.3,
      harmonics: [
        { mult: 2, vol: 0.008 },
      ],
    });
  });

  // Shimmer tail
  playTone(2093.0, now + 0.35, 0.005, 0.1, 0.1, 0.5, 0.02, {
    type: 'sine',
    lpf: 4000,
    reverb: 0.35,
  });
}

/** Star rating — pleasant bell/chime, pitch rises with more stars */
export function playStar(starCount: number): void {
  if (!isSoundEnabled()) return;
  const ctx = getCtx();
  const now = ctx.currentTime;

  // Pentatonic scale: C5 D5 E5 G5 A5
  const starNotes = [523.25, 587.33, 659.25, 783.99, 880.0];
  const freq = starNotes[Math.min(starCount - 1, 4)];
  const brightness = 2500 + starCount * 400;

  playTone(freq, now, 0.005, 0.1, 0.2, 0.4, 0.06, {
    type: 'triangle',
    chorus: true,
    lpf: brightness,
    reverb: 0.2,
    pan: (starCount - 3) * 0.12,
    harmonics: [
      { mult: 2, vol: 0.012 },
      { mult: 4, vol: 0.003 },
    ],
  });

  // Extra shimmer for 4-5 stars
  if (starCount >= 4) {
    playTone(freq * 2, now + 0.06, 0.004, 0.06, 0.0, 0.3, 0.018, {
      type: 'sine',
      lpf: 6000,
      reverb: 0.25,
      pan: -(starCount - 3) * 0.12,
    });
  }
}

/** Play sound for a specific SRS rating */
export function playRatingSound(rating: string): void {
  switch (rating) {
    case 'again': playAgain(); break;
    case 'hard': playHard(); break;
    case 'good': playCorrect(); break;
    case 'easy': playEasy(); break;
  }
}
