// Sound utility functions using Web Audio API

let audioContext = null;

const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
};

/**
 * Plays a pleasant "success" sound when a lesson is completed
 */
export const playCompletionSound = () => {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    // Create oscillator for the main tone
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    // Connect nodes
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    // Set up a pleasant "ding" sound (two notes: C6 -> E6)
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(1046.5, now); // C6
    oscillator.frequency.setValueAtTime(1318.5, now + 0.1); // E6
    
    // Envelope for smooth sound
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.3, now + 0.01); // Attack
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5); // Decay
    
    // Play the sound
    oscillator.start(now);
    oscillator.stop(now + 0.5);
  } catch (error) {
    console.warn('Could not play completion sound:', error);
  }
};

/**
 * Plays a timer/workout completion sound
 */
export const playTimerSound = () => {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    // Create three beeps
    for (let i = 0; i < 3; i++) {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(800, now + i * 0.15);
      
      gainNode.gain.setValueAtTime(0, now + i * 0.15);
      gainNode.gain.linearRampToValueAtTime(0.2, now + i * 0.15 + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + i * 0.15 + 0.1);
      
      oscillator.start(now + i * 0.15);
      oscillator.stop(now + i * 0.15 + 0.1);
    }
  } catch (error) {
    console.warn('Could not play timer sound:', error);
  }
};

