// Vorgefertigte Übungen für Training & Aufwärmen
// Types: 'timer' (countdown/challenge), 'reps' (Wiederholungen), 'pause'

export const predefinedExercises = [
  // === AUFWÄRMEN / MOBILITY ===
  {
    id: 'warmup_wrist_circles',
    name: 'Handgelenke kreisen',
    category: 'Aufwärmen',
    type: 'timer',
    defaultDuration: 30,
    description: 'Kreise deine Handgelenke langsam in beide Richtungen.',
    hasWeight: false,
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="none" stroke="#14b8a6" stroke-width="4" opacity="0.3"/>
      <path d="M 100 20 Q 180 100 100 180 Q 20 100 100 20" fill="none" stroke="#14b8a6" stroke-width="6" stroke-linecap="round"/>
      <circle cx="100" cy="100" r="15" fill="#f97316"/>
      <line x1="100" y1="100" x2="140" y2="60" stroke="#f97316" stroke-width="4" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'warmup_finger_flex',
    name: 'Finger öffnen & schließen',
    category: 'Aufwärmen',
    type: 'reps',
    defaultReps: 20,
    description: 'Öffne deine Hände vollständig und schließe sie zur Faust.',
    hasWeight: false,
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="80" width="100" height="80" rx="10" fill="#14b8a6" opacity="0.7"/>
      <rect x="60" y="50" width="15" height="60" rx="7" fill="#f97316"/>
      <rect x="85" y="40" width="15" height="70" rx="7" fill="#f97316"/>
      <rect x="110" y="45" width="15" height="65" rx="7" fill="#f97316"/>
      <rect x="135" y="55" width="15" height="55" rx="7" fill="#f97316"/>
    </svg>`
  },
  {
    id: 'warmup_shoulder_circles',
    name: 'Schultern kreisen',
    category: 'Aufwärmen',
    type: 'timer',
    defaultDuration: 30,
    description: 'Große Kreisbewegungen mit den Schultern.',
    hasWeight: false,
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="80" r="20" fill="#f97316"/>
      <rect x="85" y="100" width="30" height="60" rx="8" fill="#14b8a6"/>
      <ellipse cx="60" cy="110" rx="25" ry="15" fill="#14b8a6" opacity="0.7"/>
      <ellipse cx="140" cy="110" rx="25" ry="15" fill="#14b8a6" opacity="0.7"/>
      <path d="M 60 110 Q 60 60 100 50" fill="none" stroke="#f97316" stroke-width="4" stroke-dasharray="5,5"/>
    </svg>`
  },
  {
    id: 'warmup_squats',
    name: 'Dynamische Kniebeugen',
    category: 'Aufwärmen',
    type: 'reps',
    defaultReps: 15,
    description: 'Leichte, dynamische Kniebeugen zum Aufwärmen.',
    hasWeight: false,
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="40" r="20" fill="#f97316"/>
      <rect x="85" y="60" width="30" height="50" rx="8" fill="#14b8a6"/>
      <line x1="100" y1="110" x2="70" y2="150" stroke="#14b8a6" stroke-width="12" stroke-linecap="round"/>
      <line x1="100" y1="110" x2="130" y2="150" stroke="#14b8a6" stroke-width="12" stroke-linecap="round"/>
      <path d="M 70 150 L 60 180" stroke="#14b8a6" stroke-width="10" stroke-linecap="round"/>
      <path d="M 130 150 L 140 180" stroke="#14b8a6" stroke-width="10" stroke-linecap="round"/>
    </svg>`
  },

  // === KRAFT-TRAINING ===
  {
    id: 'strength_pullup',
    name: 'Klimmzüge',
    category: 'Kraft',
    type: 'reps',
    defaultReps: 5,
    description: 'Klassische Klimmzüge für Rücken und Bizeps.',
    hasWeight: true,
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="30" x2="160" y2="30" stroke="#78716c" stroke-width="8" stroke-linecap="round"/>
      <circle cx="100" cy="70" r="18" fill="#f97316"/>
      <rect x="87" y="88" width="26" height="45" rx="8" fill="#14b8a6"/>
      <line x1="100" y1="55" x2="100" y2="30" stroke="#14b8a6" stroke-width="8"/>
      <line x1="100" y1="133" x2="75" y2="170" stroke="#14b8a6" stroke-width="10" stroke-linecap="round"/>
      <line x1="100" y1="133" x2="125" y2="170" stroke="#14b8a6" stroke-width="10" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'strength_pushup',
    name: 'Liegestütze',
    category: 'Kraft',
    type: 'reps',
    defaultReps: 10,
    description: 'Antagonisten-Training für Brust und Trizeps.',
    hasWeight: false,
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="140" width="160" height="20" rx="4" fill="#d6d3d1"/>
      <circle cx="100" cy="80" r="18" fill="#f97316"/>
      <rect x="85" y="98" width="30" height="42" rx="8" fill="#14b8a6"/>
      <line x1="50" y1="120" x2="85" y2="110" stroke="#14b8a6" stroke-width="10" stroke-linecap="round"/>
      <line x1="150" y1="120" x2="115" y2="110" stroke="#14b8a6" stroke-width="10" stroke-linecap="round"/>
      <line x1="100" y1="140" x2="100" y2="160" stroke="#14b8a6" stroke-width="10" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'strength_hanging',
    name: 'Passives Hängen',
    category: 'Kraft',
    type: 'timer',
    defaultDuration: 20,
    description: 'Hänge an großen Griffen oder einer Stange.',
    hasWeight: true,
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="30" x2="160" y2="30" stroke="#78716c" stroke-width="8" stroke-linecap="round"/>
      <ellipse cx="70" cy="30" rx="15" ry="10" fill="#f97316"/>
      <ellipse cx="130" cy="30" rx="15" ry="10" fill="#f97316"/>
      <line x1="70" y1="40" x2="85" y2="80" stroke="#14b8a6" stroke-width="8"/>
      <line x1="130" y1="40" x2="115" y2="80" stroke="#14b8a6" stroke-width="8"/>
      <circle cx="100" cy="90" r="18" fill="#f97316"/>
      <rect x="87" y="108" width="26" height="45" rx="8" fill="#14b8a6"/>
      <line x1="100" y1="153" x2="85" y2="180" stroke="#14b8a6" stroke-width="10" stroke-linecap="round"/>
      <line x1="100" y1="153" x2="115" y2="180" stroke="#14b8a6" stroke-width="10" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'strength_plank',
    name: 'Plank (Unterarmstütz)',
    category: 'Core',
    type: 'timer',
    defaultDuration: 30,
    description: 'Halte deinen Körper in gerader Linie.',
    hasWeight: false,
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="140" width="160" height="15" rx="4" fill="#d6d3d1"/>
      <circle cx="140" cy="80" r="16" fill="#f97316"/>
      <rect x="50" y="85" width="75" height="25" rx="8" fill="#14b8a6"/>
      <line x1="35" y1="110" x2="50" y2="95" stroke="#14b8a6" stroke-width="10" stroke-linecap="round"/>
      <line x1="125" y1="95" x2="145" y2="125" stroke="#14b8a6" stroke-width="10" stroke-linecap="round"/>
      <line x1="35" y1="110" x2="40" y2="140" stroke="#14b8a6" stroke-width="8"/>
    </svg>`
  },
  {
    id: 'strength_leg_raise',
    name: 'Beinheben hängend',
    category: 'Core',
    type: 'reps',
    defaultReps: 8,
    description: 'Hänge an der Stange und hebe deine Beine.',
    hasWeight: false,
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="30" x2="160" y2="30" stroke="#78716c" stroke-width="8" stroke-linecap="round"/>
      <line x1="80" y1="30" x2="90" y2="65" stroke="#14b8a6" stroke-width="8"/>
      <line x1="120" y1="30" x2="110" y2="65" stroke="#14b8a6" stroke-width="8"/>
      <circle cx="100" cy="75" r="16" fill="#f97316"/>
      <rect x="88" y="91" width="24" height="40" rx="8" fill="#14b8a6"/>
      <line x1="100" y1="131" x2="120" y2="110" stroke="#14b8a6" stroke-width="10" stroke-linecap="round"/>
      <line x1="100" y1="131" x2="80" y2="110" stroke="#14b8a6" stroke-width="10" stroke-linecap="round"/>
    </svg>`
  },

  // === DEHNEN / STRETCHING ===
  {
    id: 'stretch_forearm',
    name: 'Unterarm-Dehnung',
    category: 'Dehnen',
    type: 'timer',
    defaultDuration: 30,
    description: 'Dehne deine Unterarme nach dem Training.',
    hasWeight: false,
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="100" x2="120" y2="100" stroke="#14b8a6" stroke-width="10" stroke-linecap="round"/>
      <rect x="120" y="85" width="40" height="30" rx="8" fill="#f97316"/>
      <path d="M 50 100 Q 40 80 50 60" stroke="#f97316" stroke-width="6" stroke-linecap="round" fill="none"/>
    </svg>`
  },
  {
    id: 'stretch_shoulder',
    name: 'Schulter-Dehnung',
    category: 'Dehnen',
    type: 'timer',
    defaultDuration: 30,
    description: 'Ziehe einen Arm über die Brust.',
    hasWeight: false,
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="70" r="18" fill="#f97316"/>
      <rect x="85" y="88" width="30" height="50" rx="8" fill="#14b8a6"/>
      <line x1="85" y1="100" x2="140" y2="100" stroke="#f97316" stroke-width="8" stroke-linecap="round"/>
    </svg>`
  },

  // === PAUSE ===
  {
    id: 'pause',
    name: 'Pause',
    category: 'Pause',
    type: 'timer',
    defaultDuration: 60,
    description: 'Erhole dich zwischen den Übungen.',
    hasWeight: false,
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="60" fill="#14b8a6" opacity="0.2"/>
      <rect x="75" y="60" width="20" height="80" rx="4" fill="#14b8a6"/>
      <rect x="105" y="60" width="20" height="80" rx="4" fill="#14b8a6"/>
    </svg>`
  }
];

// Exercise Categories
export const exerciseCategories = [
  'Aufwärmen',
  'Kraft',
  'Core',
  'Dehnen',
  'Pause'
];

// Helper functions
export const getExerciseById = (id) => {
  return predefinedExercises.find(ex => ex.id === id);
};

export const getExercisesByCategory = (category) => {
  return predefinedExercises.filter(ex => ex.category === category);
};

