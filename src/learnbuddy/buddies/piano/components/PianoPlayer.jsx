import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as Tone from 'tone';
import { Midi } from '@tonejs/midi';
import { 
  Play, 
  Pause, 
  Square, 
  Volume2, 
  VolumeX, 
  Upload, 
  Download,
  Circle,
  Settings,
  Zap,
  Music,
  Hand,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  GraduationCap,
  Target
} from 'lucide-react';

// Constants
const WHITE_KEYS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const BLACK_KEYS = ['C#', 'D#', 'F#', 'G#', 'A#'];
const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const NOTE_TO_KEY = {};
for (let i = 21; i <= 108; i++) {
  const octave = Math.floor(i / 12) - 1;
  const noteIndex = i % 12;
  const noteName = NOTES[noteIndex];
  NOTE_TO_KEY[i] = { name: noteName, octave, isBlack: noteName.includes('#') };
}

const PianoPlayer = ({ midiFileUrl, initialMuteState = { left: false, right: false } }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [tracks, setTracks] = useState([]);
  const [mutedTracks, setMutedTracks] = useState({});
  const [activeNotes, setActiveNotes] = useState(new Set());
  const [midiAccess, setMidiAccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // New features
  const [isRecording, setIsRecording] = useState(false);
  const [recordedNotes, setRecordedNotes] = useState([]);
  const [recordingStartTime, setRecordingStartTime] = useState(0);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [tempo, setTempo] = useState(120); // BPM
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0); // 0.25x to 2.0x
  
  // Handle playback speed change during playback
  const handleSpeedChange = (newSpeed) => {
    const wasPlaying = isPlaying;
    const currentPos = currentTime;
    
    if (wasPlaying) {
      Tone.Transport.stop();
      Tone.Transport.cancel();
      setIsPlaying(false);
    }
    
    setPlaybackSpeed(newSpeed);
    
    if (wasPlaying) {
      // Restart playback with new speed after state update
      setTimeout(() => {
        Tone.Transport.seconds = currentPos / newSpeed;
        
        // Re-schedule all notes with new speed
        Tone.Transport.cancel();
        Tone.Transport.bpm.value = tempo;
        
        const middleC = 60;
        tracks.forEach((track, trackIndex) => {
          if (mutedTracks[trackIndex]) return;
          track.notes.forEach(note => {
            const isLeftHand = note.midi < middleC;
            const isRightHand = note.midi >= middleC;
            
            if ((isLeftHand && muteLeftHand) || (isRightHand && muteRightHand)) {
              return;
            }
            
            const adjustedTime = note.time / newSpeed;
            const adjustedDuration = note.duration / newSpeed;
            
            Tone.Transport.schedule((time) => {
              synthRef.current.triggerAttackRelease(
                note.name,
                adjustedDuration,
                time,
                note.velocity
              );
            }, adjustedTime);
          });
        });
        
        Tone.Transport.start();
        setIsPlaying(true);
      }, 100);
    }
  };
  const [showSettings, setShowSettings] = useState(false);
  const [numKeys, setNumKeys] = useState(49); // Default: 49 keys (4 octaves)
  const [keyRange, setKeyRange] = useState({ start: 36, end: 85 }); // C2 to C6
  const [volume, setVolume] = useState(0.7);
  const [showMetronome, setShowMetronome] = useState(false);
  const [metronomeActive, setMetronomeActive] = useState(false);
  const [noteStreak, setNoteStreak] = useState(0);
  const [totalNotesPlayed, setTotalNotesPlayed] = useState(0);
  const [muteLeftHand, setMuteLeftHand] = useState(false);
  const [muteRightHand, setMuteRightHand] = useState(false);
  const [visualEffects, setVisualEffects] = useState([]); // For rising note effects
  const [heldKeys, setHeldKeys] = useState(new Map()); // Track held keys with start time
  const [progressHoverTime, setProgressHoverTime] = useState(null);
  const [learningMode, setLearningMode] = useState('normal'); // 'normal' or 'learn'
  const [waitingForNote, setWaitingForNote] = useState(null); // { midi: number, time: number }
  const [correctNotesPlayed, setCorrectNotesPlayed] = useState(new Set());

  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const synthRef = useRef(null);
  const animationFrameRef = useRef(null);
  const metronomeRef = useRef(null);

  // Initialize Audio
  useEffect(() => {
    const sampler = new Tone.Sampler({
      urls: {
        A0: "A0.mp3",
        C1: "C1.mp3",
        "D#1": "Ds1.mp3",
        "F#1": "Fs1.mp3",
        A1: "A1.mp3",
        C2: "C2.mp3",
        "D#2": "Ds2.mp3",
        "F#2": "Fs2.mp3",
        A2: "A2.mp3",
        C3: "C3.mp3",
        "D#3": "Ds3.mp3",
        "F#3": "Fs3.mp3",
        A3: "A3.mp3",
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
        C5: "C5.mp3",
        "D#5": "Ds5.mp3",
        "F#5": "Fs5.mp3",
        A5: "A5.mp3",
        C6: "C6.mp3",
        "D#6": "Ds6.mp3",
        "F#6": "Fs6.mp3",
        A6: "A6.mp3",
        C7: "C7.mp3",
        "D#7": "Ds7.mp3",
        "F#7": "Fs7.mp3",
        A7: "A7.mp3",
        C8: "C8.mp3"
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/"
    }).toDestination();
    
    sampler.volume.value = Tone.gainToDb(volume);
    synthRef.current = sampler;

    // Metronome
    const metronome = new Tone.MembraneSynth().toDestination();
    metronomeRef.current = metronome;

    return () => {
      sampler.dispose();
      metronome.dispose();
    };
  }, []);

  // Update volume
  useEffect(() => {
    if (synthRef.current) {
      synthRef.current.volume.value = Tone.gainToDb(volume);
    }
  }, [volume]);

  // Update Tempo in real-time
  useEffect(() => {
    if (Tone.Transport.bpm) {
      Tone.Transport.bpm.value = tempo;
    }
  }, [tempo]);

  // Metronome
  useEffect(() => {
    if (metronomeActive && metronomeRef.current) {
      const interval = (60 / tempo) * 1000;
      const metronomeInterval = setInterval(() => {
        metronomeRef.current.triggerAttackRelease('C2', '8n');
      }, interval);
      return () => clearInterval(metronomeInterval);
    }
  }, [metronomeActive, tempo]);

  // MIDI Input Setup
  useEffect(() => {
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess().then(access => {
        setMidiAccess(access);
        access.inputs.forEach(input => {
          input.onmidimessage = handleMidiMessage;
        });
        access.onstatechange = (e) => {
          if (e.port.type === 'input' && e.port.state === 'connected') {
            e.port.onmidimessage = handleMidiMessage;
          }
        };
      }, () => console.log('MIDI Access Denied'));
    }
  }, []);

  const handleMidiMessage = useCallback((message) => {
    const [command, note, velocity] = message.data;
    if (command === 144 && velocity > 0) {
      startNote(note, velocity / 127);
    } else if (command === 128 || (command === 144 && velocity === 0)) {
      stopNote(note);
    }
  }, []);

  const startNote = (midiNumber, velocity = 0.7, isUserInput = true) => {
    if (!synthRef.current) return;
    
    // Check mute settings
    const middleC = 60; // C4
    if (midiNumber < middleC && muteLeftHand) return;
    if (midiNumber >= middleC && muteRightHand) return;
    
    Tone.start();
    const noteName = Tone.Frequency(midiNumber, "midi").toNote();
    synthRef.current.triggerAttack(noteName, Tone.now(), velocity);
    setActiveNotes(prev => new Set(prev).add(midiNumber));
    
    if (isUserInput) {
      setTotalNotesPlayed(prev => prev + 1);
      setNoteStreak(prev => prev + 1);
    }

    // Track held key
    setHeldKeys(prev => {
      const newMap = new Map(prev);
      newMap.set(midiNumber, Date.now());
      return newMap;
    });

    // Learning mode: Check if this is the note we're waiting for
    if (learningMode === 'learn' && waitingForNote && isUserInput) {
      if (waitingForNote.midi === midiNumber) {
        // Correct note played!
        setCorrectNotesPlayed(prev => new Set(prev).add(midiNumber));
        setWaitingForNote(null);
        
        // Resume playback after a short delay
        setTimeout(() => {
          if (Tone.Transport.state === "paused") {
            Tone.Transport.start();
            setIsPlaying(true);
          }
        }, 200);
        
        // Extra visual feedback for correct note
        const effectId = Date.now() + Math.random();
        
        // Calculate correct x position in pixels (not percentage)
        const noteInfo = NOTE_TO_KEY[midiNumber];
        const isBlackKey = noteInfo?.isBlack;
        
        setVisualEffects(prev => [...prev, { 
          id: effectId, 
          note: midiNumber, 
          isBlack: isBlackKey,
          timestamp: Date.now(),
          isCorrect: true
        }]);
        
        setTimeout(() => {
          setVisualEffects(prev => prev.filter(e => e.id !== effectId));
        }, 1500);
      }
    } else if (isUserInput) {
      // Normal visual effect
      const effectId = Date.now() + Math.random();
      
      // Calculate correct x position (store note info, calculate pixel position in draw)
      const noteInfo = NOTE_TO_KEY[midiNumber];
      const isBlackKey = noteInfo?.isBlack;
      
      setVisualEffects(prev => [...prev, { 
        id: effectId, 
        note: midiNumber, 
        isBlack: isBlackKey,
        timestamp: Date.now()
      }]);
      
      setTimeout(() => {
        setVisualEffects(prev => prev.filter(e => e.id !== effectId));
      }, 1000);
    }

    // Recording
    if (isRecording && isUserInput) {
      const time = Date.now() - recordingStartTime;
      setRecordedNotes(prev => [...prev, { note: midiNumber, time, velocity, type: 'on' }]);
    }
  };

  const stopNote = (midiNumber) => {
    if (!synthRef.current) return;
    const noteName = Tone.Frequency(midiNumber, "midi").toNote();
    synthRef.current.triggerRelease(noteName);
    setActiveNotes(prev => {
      const next = new Set(prev);
      next.delete(midiNumber);
      return next;
    });

    // Remove from held keys
    setHeldKeys(prev => {
      const newMap = new Map(prev);
      newMap.delete(midiNumber);
      return newMap;
    });

    // Recording
    if (isRecording) {
      const time = Date.now() - recordingStartTime;
      setRecordedNotes(prev => [...prev, { note: midiNumber, time, type: 'off' }]);
    }
  };

  // Recording controls
  const startRecording = () => {
    setIsRecording(true);
    setRecordedNotes([]);
    setRecordingStartTime(Date.now());
    setRecordingDuration(0);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  // Update recording duration
  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingDuration(Math.floor((Date.now() - recordingStartTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording, recordingStartTime]);

  const downloadRecording = () => {
    const midi = new Midi();
    const track = midi.addTrack();
    
    recordedNotes.forEach(note => {
      if (note.type === 'on') {
        const offNote = recordedNotes.find(n => 
          n.note === note.note && n.type === 'off' && n.time > note.time
        );
        if (offNote) {
          track.addNote({
            midi: note.note,
            time: note.time / 1000,
            duration: (offNote.time - note.time) / 1000,
            velocity: note.velocity || 0.7
          });
        }
      }
    });

    const blob = new Blob([midi.toArray()], { type: 'audio/midi' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `recording-${Date.now()}.mid`;
    a.click();
  };

  // Load MIDI File
  const loadMidi = async (urlOrBuffer) => {
    setIsLoading(true);
    try {
      let midi;
      if (typeof urlOrBuffer === 'string') {
        midi = await Midi.fromUrl(urlOrBuffer);
      } else {
        midi = new Midi(urlOrBuffer);
      }
      
      setDuration(midi.duration);
      setTracks(midi.tracks);
    } catch (e) {
      console.error("Failed to load MIDI", e);
    }
    setIsLoading(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        loadMidi(e.target.result);
      };
      reader.readAsArrayBuffer(file);
    }
  };
  
  useEffect(() => {
    if (midiFileUrl) {
      loadMidi(midiFileUrl);
    }
  }, [midiFileUrl]);

  // Playback
  const play = async () => {
    await Tone.start();
    if (Tone.Transport.state === "started") {
      pause();
      return;
    }

    Tone.Transport.cancel();
    Tone.Transport.bpm.value = tempo;
    
    const middleC = 60; // C4
    
    if (learningMode === 'learn') {
      // Learning mode: Schedule notes with pause logic
      const allNotes = [];
      
      tracks.forEach((track, trackIndex) => {
        if (mutedTracks[trackIndex]) return;
        track.notes.forEach(note => {
          const isLeftHand = note.midi < middleC;
          const isRightHand = note.midi >= middleC;
          
          if ((isLeftHand && muteLeftHand) || (isRightHand && muteRightHand)) {
            return;
          }
          
          allNotes.push({
            ...note,
            adjustedTime: note.time / playbackSpeed,
            adjustedDuration: note.duration / playbackSpeed
          });
        });
      });
      
      // Sort notes by time
      allNotes.sort((a, b) => a.adjustedTime - b.adjustedTime);
      
      // Schedule notes with pause logic
      allNotes.forEach((note, index) => {
        Tone.Transport.schedule((time) => {
          // Check if we should pause for this note
          const shouldPause = !correctNotesPlayed.has(note.midi);
          
          if (shouldPause) {
            // Pause and wait for user input
            Tone.Transport.pause();
            setIsPlaying(false);
            setWaitingForNote({ midi: note.midi, time: note.adjustedTime });
          } else {
            // Play the note automatically
            synthRef.current.triggerAttackRelease(
              note.name,
              note.adjustedDuration,
              time,
              note.velocity
            );
          }
        }, note.adjustedTime);
      });
    } else {
      // Normal mode: Play all notes
      tracks.forEach((track, trackIndex) => {
        if (mutedTracks[trackIndex]) return;
        track.notes.forEach(note => {
          const isLeftHand = note.midi < middleC;
          const isRightHand = note.midi >= middleC;
          
          if ((isLeftHand && muteLeftHand) || (isRightHand && muteRightHand)) {
            return;
          }
          
          const adjustedTime = note.time / playbackSpeed;
          const adjustedDuration = note.duration / playbackSpeed;
          
          Tone.Transport.schedule((time) => {
            synthRef.current.triggerAttackRelease(
              note.name,
              adjustedDuration,
              time,
              note.velocity
            );
          }, adjustedTime);
        });
      });
    }

    Tone.Transport.start();
    setIsPlaying(true);
  };

  const pause = () => {
    Tone.Transport.pause();
    setIsPlaying(false);
  };

  const stop = () => {
    Tone.Transport.stop();
    setIsPlaying(false);
    setActiveNotes(new Set());
    setCurrentTime(0);
    setWaitingForNote(null);
    setCorrectNotesPlayed(new Set());
  };

  const seekTo = (seconds) => {
    const wasPlaying = isPlaying;
    if (wasPlaying) {
      Tone.Transport.pause();
    }
    Tone.Transport.seconds = seconds;
    setCurrentTime(seconds);
    if (wasPlaying) {
      Tone.Transport.start();
    }
  };

  const skipBackward = () => {
    const newTime = Math.max(0, currentTime - 5);
    seekTo(newTime);
  };

  const skipForward = () => {
    const newTime = Math.min(duration, currentTime + 5);
    seekTo(newTime);
  };

  const toggleMute = (trackIndex) => {
    setMutedTracks(prev => ({
      ...prev,
      [trackIndex]: !prev[trackIndex]
    }));
    // Restart playback to apply mute changes
    if (isPlaying) {
      stop();
      // Small delay to ensure clean restart
      setTimeout(() => play(), 100);
    }
  };

  // Visualization
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear with gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#0f172a');
    gradient.addColorStop(1, '#1e293b');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Get accurate playback time FIRST
    let adjustedTime;
    if (isPlaying) {
      adjustedTime = Tone.Transport.seconds * playbackSpeed;
      setCurrentTime(adjustedTime);
    } else {
      adjustedTime = currentTime;
    }

    const timeWindow = 5; // Increased from 3 to 5 seconds for earlier note visibility
    const pixelsPerSecond = height / timeWindow;
    
    // Count white keys only - they define the quadrants
    const whiteKeys = [];
    for (let i = keyRange.start; i < keyRange.end; i++) {
      if (!NOTE_TO_KEY[i]?.isBlack) {
        whiteKeys.push(i);
      }
    }
    const numWhiteKeys = whiteKeys.length;
    const quadrantWidth = width / numWhiteKeys; // Each white key gets equal space

    // Draw vertical dashed lines for white key boundaries (quadrant separators)
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 5]);
    for (let i = 0; i <= numWhiteKeys; i++) {
      const x = i * quadrantWidth;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // Horizontal grid lines
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let i = 0; i < height; i += 40) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
      ctx.stroke();
    }

    // Draw held key bars (for keys being held down)
    let now = Date.now();
    heldKeys.forEach((startTime, midiNumber) => {
      if (midiNumber < keyRange.start || midiNumber >= keyRange.end) return;
      
      // Calculate exact position based on key type
      const noteInfo = NOTE_TO_KEY[midiNumber];
      const isBlackKey = noteInfo?.isBlack;
      
      let x, barWidth;
      if (isBlackKey) {
        // Black keys: position ON the vertical line
        // Find which white key is immediately before this black key
        let whiteKeyIndex = 0;
        for (let i = keyRange.start; i < midiNumber; i++) {
          if (!NOTE_TO_KEY[i]?.isBlack) whiteKeyIndex++;
        }
        // Black key is centered on the line between quadrants
        x = whiteKeyIndex * quadrantWidth;
        barWidth = quadrantWidth * 0.4; // Narrower for black keys
        x = x - barWidth / 2; // Center on the line
      } else {
        // White keys: position WITHIN the quadrant
        let whiteKeyIndex = 0;
        for (let i = keyRange.start; i <= midiNumber; i++) {
          if (!NOTE_TO_KEY[i]?.isBlack) {
            if (i === midiNumber) break;
            whiteKeyIndex++;
          }
        }
        // Center within the quadrant
        x = whiteKeyIndex * quadrantWidth;
        barWidth = quadrantWidth - 8; // Leave some margin
        x = x + 4; // Add margin offset
      }
      
      const duration = (now - startTime) / 1000; // seconds
      const barHeight = Math.min(duration * pixelsPerSecond * 0.5, height * 0.8);
      
      // Gradient bar from bottom to top
      const barGradient = ctx.createLinearGradient(x, height, x, height - barHeight);
      barGradient.addColorStop(0, '#fbbf24FF');
      barGradient.addColorStop(0.5, '#fbbf24CC');
      barGradient.addColorStop(1, '#fbbf2466');
      
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#fbbf24';
      ctx.fillStyle = barGradient;
      ctx.fillRect(x, height - barHeight, barWidth, barHeight);
      ctx.shadowBlur = 0;
      
      // Pulsing glow at top
      const pulseIntensity = Math.sin(now / 200) * 0.3 + 0.7;
      ctx.shadowBlur = 25 * pulseIntensity;
      ctx.shadowColor = '#fbbf24';
      ctx.fillStyle = `rgba(251, 191, 36, ${pulseIntensity})`;
      ctx.beginPath();
      ctx.arc(x + barWidth / 2, height - barHeight, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // Draw MIDI tracks
    const middleC = 60;
    tracks.forEach((track, trackIndex) => {
      if (mutedTracks[trackIndex]) return;

      const colors = ['#6366f1', '#ec4899', '#10b981', '#f59e0b'];
      const color = colors[trackIndex % colors.length];
      
      track.notes.forEach(note => {
        if (note.midi < keyRange.start || note.midi >= keyRange.end) return;
        
        // Check left/right hand mute
        const isLeftHand = note.midi < middleC;
        const isRightHand = note.midi >= middleC;
        if ((isLeftHand && muteLeftHand) || (isRightHand && muteRightHand)) return;
        
        const timeUntilHit = note.time - adjustedTime;
        
        if (timeUntilHit < timeWindow && timeUntilHit + note.duration > 0) {
          // Calculate exact position based on key type
          const noteInfo = NOTE_TO_KEY[note.midi];
          const isBlackKey = noteInfo?.isBlack;
          
          let x, noteWidth;
          if (isBlackKey) {
            // Black keys: position ON the vertical line
            // Find which white key is immediately before this black key
            let whiteKeyIndex = 0;
            for (let i = keyRange.start; i < note.midi; i++) {
              if (!NOTE_TO_KEY[i]?.isBlack) whiteKeyIndex++;
            }
            // Black key note is centered on the line between quadrants
            x = whiteKeyIndex * quadrantWidth;
            noteWidth = quadrantWidth * 0.4; // Narrower for black keys
            x = x - noteWidth / 2; // Center on the line
          } else {
            // White keys: position WITHIN the quadrant
            let whiteKeyIndex = 0;
            for (let i = keyRange.start; i <= note.midi; i++) {
              if (!NOTE_TO_KEY[i]?.isBlack) {
                if (i === note.midi) break;
                whiteKeyIndex++;
              }
            }
            // Center within the quadrant
            x = whiteKeyIndex * quadrantWidth;
            noteWidth = quadrantWidth - 8; // Leave margin
            x = x + 4; // Add margin offset
          }
          
          const yBottom = height - (timeUntilHit * pixelsPerSecond);
          const noteHeight = note.duration * pixelsPerSecond;
          const yTop = yBottom - noteHeight;
          
          // Glow effect
          ctx.shadowBlur = 15;
          ctx.shadowColor = color;
          
          // Gradient for note
          const noteGradient = ctx.createLinearGradient(x, yTop, x, yBottom);
          noteGradient.addColorStop(0, color + 'CC');
          noteGradient.addColorStop(1, color + '66');
          ctx.fillStyle = noteGradient;
          
          ctx.fillRect(x, yTop, noteWidth, noteHeight);
          
          // Border
          ctx.strokeStyle = color;
          ctx.lineWidth = 2;
          ctx.strokeRect(x, yTop, noteWidth, noteHeight);
          
          ctx.shadowBlur = 0;
        }
      });
    });

    // Draw visual effects (rising particles)
    now = Date.now();
    visualEffects.forEach(effect => {
      const duration = effect.isCorrect ? 1500 : 1000;
      const age = now - effect.timestamp;
      const progress = age / duration;
      
      if (progress < 1) {
        // Calculate x position based on note and key type
        let x;
        if (effect.isBlack) {
          // Black key: on the line
          let whiteKeyIndex = 0;
          for (let i = keyRange.start; i < effect.note; i++) {
            if (!NOTE_TO_KEY[i]?.isBlack) whiteKeyIndex++;
          }
          x = whiteKeyIndex * quadrantWidth;
        } else {
          // White key: center of quadrant
          let whiteKeyIndex = 0;
          for (let i = keyRange.start; i <= effect.note; i++) {
            if (!NOTE_TO_KEY[i]?.isBlack) {
              if (i === effect.note) break;
              whiteKeyIndex++;
            }
          }
          x = (whiteKeyIndex + 0.5) * quadrantWidth;
        }
        
        const y = height - (progress * height * 0.8);
        const opacity = 1 - progress;
        
        if (effect.isCorrect) {
          // Special effect for correct notes in learn mode
          const size = 30 * (1 - progress * 0.3);
          const pulseSize = size + Math.sin(age / 100) * 5;
          
          // Green glow
          ctx.shadowBlur = 30;
          ctx.shadowColor = '#10b981';
          ctx.fillStyle = `rgba(16, 185, 129, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
          
          // Checkmark or star
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.font = `bold ${size * 1.5}px Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('✓', x, y);
          
          // Sparkles around
          for (let i = 0; i < 3; i++) {
            const angle = (progress * Math.PI * 2) + (i * Math.PI * 2 / 3);
            const sparkleX = x + Math.cos(angle) * size * 2;
            const sparkleY = y + Math.sin(angle) * size * 2;
            const sparkleSize = 5 * (1 - progress);
            
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
            ctx.beginPath();
            ctx.arc(sparkleX, sparkleY, sparkleSize, 0, Math.PI * 2);
            ctx.fill();
          }
        } else {
          // Normal effect
          const size = 20 * (1 - progress * 0.5);
          
          ctx.shadowBlur = 20;
          ctx.shadowColor = '#fbbf24';
          ctx.fillStyle = `rgba(251, 191, 36, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
          
          // Musical note symbol
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.font = `${size * 1.5}px Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('♪', x, y);
        }
      }
    });

    // Hit line
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 5]);
    ctx.beginPath();
    ctx.moveTo(0, height - 10);
    ctx.lineTo(width, height - 10);
    ctx.stroke();
    ctx.setLineDash([]);

    animationFrameRef.current = requestAnimationFrame(draw);
  }, [tracks, mutedTracks, keyRange, tempo, visualEffects, muteLeftHand, muteRightHand, playbackSpeed, heldKeys, isPlaying, currentTime]);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [draw, playbackSpeed]);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && canvasRef.current) {
        canvasRef.current.width = containerRef.current.clientWidth;
        canvasRef.current.height = containerRef.current.clientHeight;
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getPlaybackActiveNotes = () => {
    const active = new Map();
    tracks.forEach((track, index) => {
      if (mutedTracks[index]) return;
      const colors = ['#6366f1', '#ec4899', '#10b981', '#f59e0b'];
      const color = colors[index % colors.length];
      track.notes.forEach(note => {
        if (currentTime >= note.time && currentTime < note.time + note.duration) {
          active.set(note.midi, color);
        }
      });
    });
    return active;
  };

  return (
    <div className="flex flex-col w-full bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-indigo-500/20">
      {/* Header / Controls */}
      <div className="p-4 bg-slate-900/80 backdrop-blur-sm border-b border-indigo-500/20">
        {/* First Row: Playback Controls */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
          {/* Skip Backward */}
          <button 
            onClick={skipBackward}
            disabled={duration === 0}
            className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            title="Skip backward 5s"
          >
            <Rewind size={18} className="text-white" />
          </button>

          {/* Play/Pause */}
          <button 
            onClick={isPlaying ? pause : play}
            className="p-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/50 transform hover:scale-105"
          >
            {isPlaying ? <Pause size={24} className="text-white" /> : <Play size={24} className="text-white" />}
          </button>

          {/* Stop */}
          <button 
            onClick={stop}
            className="p-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition-all"
          >
            <Square size={20} className="text-white" />
          </button>

          {/* Skip Forward */}
          <button 
            onClick={skipForward}
            disabled={duration === 0}
            className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            title="Skip forward 5s"
          >
            <FastForward size={18} className="text-white" />
          </button>
          
          <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-xl">
            <Music size={16} className="text-indigo-400" />
            <span className="text-sm font-mono text-white">
              {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')} / 
              {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
            </span>
          </div>

          {/* Learning Mode Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                const newMode = learningMode === 'normal' ? 'learn' : 'normal';
                setLearningMode(newMode);
                setWaitingForNote(null);
                setCorrectNotesPlayed(new Set());
                if (isPlaying) {
                  stop();
                }
              }}
              className={`px-4 py-2 rounded-xl text-sm font-medium flex items-center space-x-2 transition-all ${
                learningMode === 'learn'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/50'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
              title={learningMode === 'learn' ? 'Learning Mode Active' : 'Switch to Learning Mode'}
            >
              {learningMode === 'learn' ? <GraduationCap size={18} /> : <Target size={18} />}
              <span>{learningMode === 'learn' ? 'Learn Mode' : 'Normal Mode'}</span>
            </button>
          </div>

          {/* Playback Speed Control */}
          <div className="flex items-center space-x-2 bg-slate-800 px-3 py-2 rounded-xl">
            <button
              onClick={() => handleSpeedChange(Math.max(0.25, playbackSpeed - 0.25))}
              className="text-white hover:text-indigo-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={playbackSpeed <= 0.25}
            >
              <span className="text-lg font-bold">−</span>
            </button>
            <div className="flex flex-col items-center min-w-[50px]">
              <span className="text-xs text-slate-400">Speed</span>
              <span className="text-sm font-bold text-white">{playbackSpeed.toFixed(2)}x</span>
            </div>
            <button
              onClick={() => handleSpeedChange(Math.min(2.0, playbackSpeed + 0.25))}
              className="text-white hover:text-indigo-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={playbackSpeed >= 2.0}
            >
              <span className="text-lg font-bold">+</span>
            </button>
          </div>
          </div>
        </div>

        {/* Second Row: Stats, Mute Controls, Settings */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">

          {/* Recording Controls */}
          <button
            onClick={isRecording ? stopRecording : startRecording}
            className={`p-3 rounded-xl transition-all ${
              isRecording 
                ? 'bg-red-600 hover:bg-red-700 animate-pulse' 
                : 'bg-slate-700 hover:bg-slate-600'
            }`}
          >
            <Circle size={20} className={isRecording ? 'text-white fill-white' : 'text-white'} />
          </button>

          {/* Recording Timer */}
          {isRecording && (
            <div className="flex items-center space-x-2 bg-red-600 px-4 py-2 rounded-xl animate-pulse">
              <Circle size={12} className="text-white fill-white" />
              <span className="text-sm font-mono text-white font-bold">
                {Math.floor(recordingDuration / 60)}:{(recordingDuration % 60).toString().padStart(2, '0')}
              </span>
            </div>
          )}

          {recordedNotes.length > 0 && !isRecording && (
            <button
              onClick={downloadRecording}
              className="p-3 bg-green-600 hover:bg-green-700 rounded-xl transition-all"
            >
              <Download size={20} className="text-white" />
            </button>
          )}

          {/* Stats */}
          <div className="flex items-center space-x-4 bg-slate-800 px-4 py-2 rounded-xl">
            <div className="flex items-center space-x-2">
              <Zap size={16} className="text-yellow-400" />
              <span className="text-sm font-bold text-white">{noteStreak}</span>
            </div>
            <div className="text-xs text-slate-400">
              {totalNotesPlayed} notes
            </div>
          </div>

          {/* Left/Right Hand Mute */}
          <div className="flex space-x-2">
            <button
              onClick={() => setMuteLeftHand(!muteLeftHand)}
              className={`px-3 py-2 rounded-xl text-xs flex items-center space-x-1 transition-all ${
                muteLeftHand 
                  ? 'bg-slate-700 text-slate-400' 
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
              }`}
              title="Mute Left Hand (below C4)"
            >
              <Hand size={14} className="transform -scale-x-100" />
              <span>Left</span>
            </button>
            <button
              onClick={() => setMuteRightHand(!muteRightHand)}
              className={`px-3 py-2 rounded-xl text-xs flex items-center space-x-1 transition-all ${
                muteRightHand 
                  ? 'bg-slate-700 text-slate-400' 
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
              }`}
              title="Mute Right Hand (C4 and above)"
            >
              <Hand size={14} />
              <span>Right</span>
            </button>
          </div>

          {tracks.length > 0 && (
            <div className="flex space-x-2">
              <span className="text-xs text-slate-400 self-center mr-1">Tracks:</span>
              {tracks.map((track, i) => (
                track.notes.length > 0 && (
                  <button
                    key={i}
                    onClick={() => toggleMute(i)}
                    className={`px-3 py-2 rounded-xl text-xs flex items-center space-x-1 transition-all ${
                      mutedTracks[i] 
                        ? 'bg-slate-700 text-slate-400 line-through' 
                        : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg'
                    }`}
                    title={mutedTracks[i] ? 'Unmute track (click to hear)' : 'Mute track (click to silence)'}
                  >
                    {mutedTracks[i] ? <VolumeX size={14}/> : <Volume2 size={14}/>}
                    <span>{i+1}</span>
                  </button>
                )
              ))}
            </div>
          )}

          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition-all"
          >
            <Settings size={20} className="text-white" />
          </button>

          <label className="flex items-center space-x-2 cursor-pointer bg-slate-700 px-4 py-2 rounded-xl hover:bg-slate-600 transition-all">
            <Upload size={18} className="text-white" />
            <span className="text-sm text-white">MIDI</span>
            <input type="file" accept=".mid,.midi" onChange={handleFileUpload} className="hidden" />
          </label>
        </div>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="p-4 bg-slate-800/90 backdrop-blur-sm border-b border-indigo-500/20 space-y-4">
          <div className="grid grid-cols-5 gap-4">
            <div>
              <label className="text-xs text-slate-400 mb-2 block">Number of Keys</label>
              <select
                value={numKeys}
                onChange={(e) => {
                  const newNumKeys = Number(e.target.value);
                  setNumKeys(newNumKeys);
                  // Center around middle C (60)
                  const middleC = 60;
                  const halfKeys = Math.floor(newNumKeys / 2);
                  setKeyRange({ 
                    start: middleC - halfKeys, 
                    end: middleC + halfKeys 
                  });
                }}
                className="w-full bg-slate-700 text-white rounded-lg px-3 py-2 text-sm"
              >
                <option value="25">25 (2 octaves)</option>
                <option value="37">37 (3 octaves)</option>
                <option value="49">49 (4 octaves)</option>
                <option value="61">61 (5 octaves)</option>
                <option value="76">76 (6+ octaves)</option>
                <option value="88">88 (Full piano)</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-2 block">Playback Speed</label>
              <input
                type="range"
                min="0.25"
                max="2.0"
                step="0.25"
                value={playbackSpeed}
                onChange={(e) => handleSpeedChange(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-center text-white font-bold mt-1">{playbackSpeed.toFixed(2)}x</div>
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-2 block">Tempo (BPM)</label>
              <input
                type="range"
                min="40"
                max="240"
                value={tempo}
                onChange={(e) => setTempo(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-center text-white font-bold mt-1">{tempo}</div>
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-2 block">Volume</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-center text-white font-bold mt-1">{Math.round(volume * 100)}%</div>
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-2 block">Metronome</label>
              <button
                onClick={() => setMetronomeActive(!metronomeActive)}
                className={`w-full py-2 rounded-lg transition-all ${
                  metronomeActive 
                    ? 'bg-green-600 text-white' 
                    : 'bg-slate-700 text-slate-400'
                }`}
              >
                {metronomeActive ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>
          
          {/* Quick Speed Presets */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-slate-400">Quick Presets:</span>
            {[0.5, 0.75, 1.0, 1.25, 1.5].map(speed => (
              <button
                key={speed}
                onClick={() => handleSpeedChange(speed)}
                className={`px-3 py-1 rounded-lg text-xs transition-all ${
                  playbackSpeed === speed
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/50'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Progress Bar */}
      {duration > 0 && (
        <div className="px-4 py-3 bg-slate-900/80 backdrop-blur-sm border-b border-indigo-500/20">
          <div className="flex items-center space-x-3">
            <span className="text-xs text-slate-400 font-mono min-w-[45px]">
              {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}
            </span>
            <div 
              className="flex-1 h-3 bg-slate-700 rounded-full cursor-pointer relative group"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const percentage = x / rect.width;
                seekTo(percentage * duration);
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const percentage = x / rect.width;
                setProgressHoverTime(percentage * duration);
              }}
              onMouseLeave={() => setProgressHoverTime(null)}
            >
              {/* Progress fill - using currentTime and duration (both in song time) */}
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-full transition-all shadow-lg shadow-indigo-500/50"
                style={{ width: `${Math.min(100, Math.max(0, (currentTime / duration) * 100))}%` }}
              />
              
              {/* Hover indicator */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="h-full bg-white/10 rounded-full" />
              </div>
              
              {/* Hover tooltip */}
              {progressHoverTime !== null && (
                <div 
                  className="absolute -top-8 transform -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs font-mono whitespace-nowrap shadow-lg border border-indigo-500/30"
                  style={{ left: `${(progressHoverTime / duration) * 100}%` }}
                >
                  {Math.floor(progressHoverTime / 60)}:{Math.floor(progressHoverTime % 60).toString().padStart(2, '0')}
                </div>
              )}
            </div>
            <span className="text-xs text-slate-400 font-mono min-w-[45px]">
              {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
            </span>
          </div>
        </div>
      )}

      {/* Visualization Area */}
      <div className="relative bg-slate-900 h-96" ref={containerRef}>
        <canvas ref={canvasRef} className="w-full h-full block" />
        
        {/* Waiting for Note Indicator */}
        {waitingForNote && learningMode === 'learn' && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-green-600/90 backdrop-blur-sm text-white px-8 py-6 rounded-2xl shadow-2xl border-2 border-green-400 animate-pulse">
              <div className="flex flex-col items-center space-y-3">
                <GraduationCap size={48} className="text-green-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold mb-1">Play this note!</p>
                  <p className="text-green-200 text-lg">
                    {NOTE_TO_KEY[waitingForNote.midi]?.name}{NOTE_TO_KEY[waitingForNote.midi]?.octave}
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-sm text-green-200">
                  <Target size={16} />
                  <span>Press the highlighted key</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Piano Keys */}
      <div className="bg-slate-950 border-t-4 border-red-600 relative">
        <Keyboard 
          startNote={keyRange.start} 
          endNote={keyRange.end} 
          activeNotes={activeNotes}
          playbackActiveNotes={getPlaybackActiveNotes()}
          onNoteOn={startNote}
          onNoteOff={stopNote}
          waitingForNote={waitingForNote}
        />
      </div>
    </div>
  );
};

const Keyboard = ({ startNote, endNote, activeNotes, playbackActiveNotes, onNoteOn, onNoteOff, waitingForNote }) => {
  const whiteKeys = [];
  for (let i = startNote; i < endNote; i++) {
    if (!NOTE_TO_KEY[i]?.isBlack) whiteKeys.push(i);
  }
  
  return (
    <div className="relative h-32 flex" style={{ width: '100%' }}>
      {whiteKeys.map((midi) => {
        const isActiveInput = activeNotes.has(midi);
        const playbackColor = playbackActiveNotes.get(midi);
        const isWaitingForThis = waitingForNote?.midi === midi;
        const isActive = isActiveInput || !!playbackColor;
        
        let color = 'white';
        let boxShadow = 'inset 0 -4px 8px rgba(0,0,0,0.1)';
        
        if (isWaitingForThis) {
          color = '#10b981'; // Green for target note
          boxShadow = '0 0 30px #10b981, 0 -4px 15px #10b981, inset 0 0 20px rgba(16, 185, 129, 0.3)';
        } else if (isActive) {
          color = isActiveInput ? '#fbbf24' : playbackColor;
          boxShadow = `0 0 20px ${color}, 0 -4px 10px ${color}`;
        }
        
        const note = NOTE_TO_KEY[midi];

        return (
          <div 
            key={midi}
            className={`flex-1 border-r border-slate-600 relative cursor-pointer select-none transition-all duration-75 ${
              isActive ? 'transform -translate-y-1' : ''
            } ${isWaitingForThis ? 'animate-pulse' : ''}`}
            style={{ 
              backgroundColor: color,
              boxShadow: boxShadow
            }}
            onMouseDown={() => onNoteOn(midi)}
            onMouseUp={() => onNoteOff(midi)}
            onMouseLeave={() => onNoteOff(midi)}
            onTouchStart={(e) => { e.preventDefault(); onNoteOn(midi); }}
            onTouchEnd={(e) => { e.preventDefault(); onNoteOff(midi); }}
          >
            {/* Note label */}
            <div className={`absolute bottom-2 left-0 right-0 text-center text-xs font-mono ${
              isWaitingForThis ? 'text-white font-bold' : 'text-slate-400'
            }`}>
              {note.name}{note.octave}
            </div>

            {/* Black Key */}
            {NOTE_TO_KEY[midi + 1]?.isBlack && (
              <div 
                className={`absolute top-0 -right-3 w-6 h-20 bg-slate-900 z-10 rounded-b border border-slate-700 cursor-pointer transition-all duration-75 ${
                  activeNotes.has(midi + 1) || playbackActiveNotes.has(midi + 1) ? 'transform translate-y-1' : ''
                } ${waitingForNote?.midi === midi + 1 ? 'animate-pulse' : ''}`}
                style={{
                  backgroundColor: waitingForNote?.midi === midi + 1
                    ? '#10b981'
                    : activeNotes.has(midi + 1) 
                      ? '#fbbf24' 
                      : (playbackActiveNotes.get(midi + 1) || '#0f172a'),
                  boxShadow: waitingForNote?.midi === midi + 1
                    ? '0 0 30px #10b981, 0 -4px 15px #10b981'
                    : (activeNotes.has(midi + 1) || playbackActiveNotes.has(midi + 1))
                      ? `0 0 15px ${activeNotes.has(midi + 1) ? '#fbbf24' : playbackActiveNotes.get(midi + 1)}`
                      : 'none'
                }}
                onMouseDown={(e) => { e.stopPropagation(); onNoteOn(midi + 1); }}
                onMouseUp={(e) => { e.stopPropagation(); onNoteOff(midi + 1); }}
                onMouseLeave={() => onNoteOff(midi + 1)}
                onTouchStart={(e) => { e.preventDefault(); e.stopPropagation(); onNoteOn(midi + 1); }}
                onTouchEnd={(e) => { e.preventDefault(); e.stopPropagation(); onNoteOff(midi + 1); }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PianoPlayer;
