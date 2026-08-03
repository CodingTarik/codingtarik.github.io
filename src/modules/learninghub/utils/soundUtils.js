// Utility to play a "success / level up" sound using Web Audio API
export function playSuccessSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    
    // Play a nice two-tone "ding-ding" chord
    const playNote = (frequency, startTime, duration, type = 'sine') => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, startTime);
      
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.3, startTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(startTime);
      osc.stop(startTime + duration);
    };

    const now = ctx.currentTime;
    // C5 (523.25 Hz) -> E5 (659.25 Hz)
    playNote(523.25, now, 0.4);
    playNote(659.25, now + 0.15, 0.6);
  } catch (e) {
    console.error('Failed to play success sound:', e);
  }
}
