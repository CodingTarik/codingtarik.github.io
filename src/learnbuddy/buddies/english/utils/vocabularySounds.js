/**
 * Vocabulary Learning Sound System
 * Motivating sounds for vocabulary learning
 */

// Sound URLs (using Web Audio API with generated tones)
const sounds = {
  cardFlip: null,
  correct: null,
  streak: null,
  levelUp: null,
  wrong: null,
  celebration: null,
  buttonClick: null,
  whoosh: null
};

let audioContext = null;
let soundsEnabled = true;

/**
 * Initialize audio context
 */
function initAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

/**
 * Play a beep tone
 */
function playTone(frequency, duration, type = 'sine', volume = 0.3) {
  if (!soundsEnabled) return;
  
  const ctx = initAudioContext();
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  
  oscillator.frequency.value = frequency;
  oscillator.type = type;
  
  gainNode.gain.setValueAtTime(volume, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
  
  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + duration);
}

/**
 * Play multiple tones in sequence
 */
function playSequence(notes, interval = 0.1) {
  if (!soundsEnabled) return;
  
  notes.forEach((note, index) => {
    setTimeout(() => {
      playTone(note.frequency, note.duration, note.type || 'sine', note.volume || 0.3);
    }, index * interval * 1000);
  });
}

/**
 * Card flip sound
 */
export function playCardFlip() {
  playTone(600, 0.1, 'sine', 0.2);
}

/**
 * Correct answer sound (happy ascending notes)
 */
export function playCorrect() {
  playSequence([
    { frequency: 523.25, duration: 0.1, volume: 0.2 }, // C
    { frequency: 659.25, duration: 0.1, volume: 0.2 }, // E
    { frequency: 783.99, duration: 0.15, volume: 0.3 }  // G
  ], 0.08);
}

/**
 * Wrong answer sound (descending)
 */
export function playWrong() {
  playSequence([
    { frequency: 400, duration: 0.1, volume: 0.15 },
    { frequency: 300, duration: 0.15, volume: 0.15 }
  ], 0.08);
}

/**
 * Streak milestone sound
 */
export function playStreak() {
  playSequence([
    { frequency: 523.25, duration: 0.08, volume: 0.25 }, // C
    { frequency: 659.25, duration: 0.08, volume: 0.25 }, // E
    { frequency: 783.99, duration: 0.08, volume: 0.25 }, // G
    { frequency: 1046.50, duration: 0.2, volume: 0.3 }   // C (octave)
  ], 0.06);
}

/**
 * Level up / achievement sound
 */
export function playLevelUp() {
  playSequence([
    { frequency: 261.63, duration: 0.1, volume: 0.2 },  // C
    { frequency: 329.63, duration: 0.1, volume: 0.2 },  // E
    { frequency: 392.00, duration: 0.1, volume: 0.25 }, // G
    { frequency: 523.25, duration: 0.1, volume: 0.25 }, // C
    { frequency: 659.25, duration: 0.15, volume: 0.3 }, // E
    { frequency: 783.99, duration: 0.2, volume: 0.35 }  // G
  ], 0.07);
}

/**
 * Celebration sound (like confetti)
 */
export function playCelebration() {
  if (!soundsEnabled) return;
  
  const ctx = initAudioContext();
  
  // Multiple sparkle sounds
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const frequency = 800 + Math.random() * 800;
      playTone(frequency, 0.1, 'sine', 0.15);
    }, i * 50);
  }
}

/**
 * Button click sound
 */
export function playButtonClick() {
  playTone(800, 0.05, 'sine', 0.1);
}

/**
 * Whoosh sound (for transitions)
 */
export function playWhoosh() {
  if (!soundsEnabled) return;
  
  const ctx = initAudioContext();
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  
  oscillator.frequency.setValueAtTime(1000, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.2);
  oscillator.type = 'sine';
  
  gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
  
  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + 0.2);
}

/**
 * Enable or disable sounds
 */
export function setSoundsEnabled(enabled) {
  soundsEnabled = enabled;
  if (enabled) {
    initAudioContext();
  }
}

/**
 * Check if sounds are enabled
 */
export function areSoundsEnabled() {
  return soundsEnabled;
}

/**
 * Get sounds enabled from localStorage
 */
export function loadSoundSettings() {
  try {
    const saved = localStorage.getItem('vocabulary_sounds_enabled');
    soundsEnabled = saved !== null ? saved === 'true' : true;
    return soundsEnabled;
  } catch (e) {
    return true;
  }
}

/**
 * Save sound settings to localStorage
 */
export function saveSoundSettings(enabled) {
  soundsEnabled = enabled;
  try {
    localStorage.setItem('vocabulary_sounds_enabled', enabled.toString());
  } catch (e) {
    console.error('Failed to save sound settings');
  }
}

// Load settings on import
loadSoundSettings();

