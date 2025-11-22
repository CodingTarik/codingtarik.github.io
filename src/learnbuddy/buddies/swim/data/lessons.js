// Import Phase 1 Module 1.1: Introduction
import { whatIsSwimming } from '../lessons/phase1_module1_1_introduction/what-is-swimming.js';
import { poolVsOpenWater } from '../lessons/phase1_module1_1_introduction/pool-vs-open-water.js';
import { swimmingCommunity } from '../lessons/phase1_module1_1_introduction/swimming-community.js';

// Import Phase 1 Module 1.2: Safety
import { waterSafety } from '../lessons/phase1_module1_2_safety/water-safety.js';
import { poolRulesEtiquette } from '../lessons/phase1_module1_2_safety/pool-rules-etiquette.js';
import { injuryPrevention } from '../lessons/phase1_module1_2_safety/injury-prevention.js';

// Import Phase 1 Module 1.3: Water Adaptation
import { waterFeeling } from '../lessons/phase1_module1_3_water_adaptation/water-feeling.js';

// Import Phase 1 Module 1.3: Water Adaptation (continued)
import { breathingInWater } from '../lessons/phase1_module1_3_water_adaptation/breathing-in-water.js';
import { practicalExercisesWater } from '../lessons/phase1_module1_3_water_adaptation/practical-exercises.js';

// Import Phase 1 Module 1.5: Equipment
import { swimGoggles } from '../lessons/phase1_module1_5_equipment/swim-goggles.js';
import { swimCap } from '../lessons/phase1_module1_5_equipment/swim-cap.js';
import { swimsuit } from '../lessons/phase1_module1_5_equipment/swimsuit.js';

// Category titles for each module
const categories = {
  phase1_module1_1: {
    en: 'PHASE 1.1: INTRODUCTION TO SWIMMING',
    de: 'PHASE 1.1: EINFÜHRUNG INS SCHWIMMEN'
  },
  phase1_module1_2: {
    en: 'PHASE 1.2: SAFETY',
    de: 'PHASE 1.2: SICHERHEIT'
  },
  phase1_module1_3: {
    en: 'PHASE 1.3: WATER ADAPTATION',
    de: 'PHASE 1.3: WASSERGEWÖHNUNG'
  },
  phase1_module1_4: {
    en: 'PHASE 1.4: BASIC BODY POSITION',
    de: 'PHASE 1.4: GRUNDLEGENDE KÖRPERPOSITION'
  },
  phase1_module1_5: {
    en: 'PHASE 1.5: EQUIPMENT',
    de: 'PHASE 1.5: AUSRÜSTUNG'
  },
  phase2_module2_1: {
    en: 'PHASE 2.1: BREASTSTROKE',
    de: 'PHASE 2.1: BRUSTSCHWIMMEN'
  },
  phase2_module2_2: {
    en: 'PHASE 2.2: FREESTYLE',
    de: 'PHASE 2.2: KRAULSCHWIMMEN'
  },
  phase2_module2_3: {
    en: 'PHASE 2.3: BACKSTROKE',
    de: 'PHASE 2.3: RÜCKENSCHWIMMEN'
  },
  phase2_module2_4: {
    en: 'PHASE 2.4: BUTTERFLY',
    de: 'PHASE 2.4: DELFINSCHWIMMEN'
  },
  phase3_module3_1: {
    en: 'PHASE 3.1: DIVE',
    de: 'PHASE 3.1: KOPFSPRUNG'
  },
  phase3_module3_2: {
    en: 'PHASE 3.2: RACE STARTS',
    de: 'PHASE 3.2: WETTKAMPFSTARTS'
  },
  phase3_module3_3: {
    en: 'PHASE 3.3: TURNS',
    de: 'PHASE 3.3: WENDEN'
  },
  phase3_module3_4: {
    en: 'PHASE 3.4: SOMERSAULT',
    de: 'PHASE 3.4: SALTO'
  },
  phase4_module4_1: {
    en: 'PHASE 4.1: DIVING BASICS',
    de: 'PHASE 4.1: GRUNDLAGEN DES TAUCHENS'
  },
  phase4_module4_2: {
    en: 'PHASE 4.2: DIVE WITH DIVING',
    de: 'PHASE 4.2: KOPFSPRUNG MIT TAUCHEN'
  },
  phase4_module4_3: {
    en: 'PHASE 4.3: UNDERWATER STYLES',
    de: 'PHASE 4.3: UNTERWASSER-SCHWIMMSTILE'
  },
  phase4_module4_4: {
    en: 'PHASE 4.4: DIVING GAMES',
    de: 'PHASE 4.4: TAUCHSPIELE'
  },
  phase5_module5_1: {
    en: 'PHASE 5.1: ENDURANCE',
    de: 'PHASE 5.1: AUSDAUER'
  },
  phase5_module5_2: {
    en: 'PHASE 5.2: TECHNIQUE IMPROVEMENT',
    de: 'PHASE 5.2: TECHNIK-VERBESSERUNG'
  },
  phase5_module5_3: {
    en: 'PHASE 5.3: POWER & SPEED',
    de: 'PHASE 5.3: KRAFT & GESCHWINDIGKEIT'
  },
  phase5_module5_4: {
    en: 'PHASE 5.4: DIFFERENT STYLES',
    de: 'PHASE 5.4: VERSCHIEDENE STILE'
  },
  phase6_module6_1: {
    en: 'PHASE 6.1: RACE TECHNIQUES',
    de: 'PHASE 6.1: WETTKAMPF-TECHNIKEN'
  },
  phase6_module6_2: {
    en: 'PHASE 6.2: OPEN WATER',
    de: 'PHASE 6.2: OPEN WATER'
  },
  phase6_module6_3: {
    en: 'PHASE 6.3: RESCUE SWIMMING',
    de: 'PHASE 6.3: RETTUNGSSCHWIMMEN'
  },
  phase6_module6_4: {
    en: 'PHASE 6.4: SYNCHRONIZED SWIMMING',
    de: 'PHASE 6.4: SYNCHRONSCHWIMMEN'
  },
  phase6_module6_5: {
    en: 'PHASE 6.5: WATER POLO',
    de: 'PHASE 6.5: WASSERBALL'
  },
  phase7_module7_1: {
    en: 'PHASE 7.1: COMPETITION PREPARATION',
    de: 'PHASE 7.1: WETTKAMPF-VORBEREITUNG'
  },
  phase7_module7_2: {
    en: 'PHASE 7.2: LONG DISTANCE',
    de: 'PHASE 7.2: LANGSTRECKEN-SCHWIMMEN'
  },
  phase7_module7_3: {
    en: 'PHASE 7.3: TECHNIQUE PERFECTION',
    de: 'PHASE 7.3: TECHNIK-PERFEKTIONIERUNG'
  },
  phase7_module7_4: {
    en: 'PHASE 7.4: FITNESS & HEALTH',
    de: 'PHASE 7.4: FITNESS & GESUNDHEIT'
  },
  phase7_module7_5: {
    en: 'PHASE 7.5: TEACHING CHILDREN',
    de: 'PHASE 7.5: KINDER LEHREN'
  }
};

// All lessons in a structured array
export const lessons = [
  // Phase 1 Module 1.1: Introduction
  {
    id: 'p1_m1_1_l1',
    category: 'phase1_module1_1',
    categoryTitle: categories.phase1_module1_1,
    ...whatIsSwimming
  },
  {
    id: 'p1_m1_1_l2',
    category: 'phase1_module1_1',
    categoryTitle: categories.phase1_module1_1,
    ...poolVsOpenWater
  },
  {
    id: 'p1_m1_1_l3',
    category: 'phase1_module1_1',
    categoryTitle: categories.phase1_module1_1,
    ...swimmingCommunity
  },
  
  // Phase 1 Module 1.2: Safety
  {
    id: 'p1_m1_2_l1',
    category: 'phase1_module1_2',
    categoryTitle: categories.phase1_module1_2,
    ...waterSafety
  },
  {
    id: 'p1_m1_2_l2',
    category: 'phase1_module1_2',
    categoryTitle: categories.phase1_module1_2,
    ...poolRulesEtiquette
  },
  {
    id: 'p1_m1_2_l3',
    category: 'phase1_module1_2',
    categoryTitle: categories.phase1_module1_2,
    ...injuryPrevention
  },
  
  // Phase 1 Module 1.3: Water Adaptation
  {
    id: 'p1_m1_3_l1',
    category: 'phase1_module1_3',
    categoryTitle: categories.phase1_module1_3,
    ...waterFeeling
  },
  
  // Phase 1 Module 1.3: Water Adaptation (continued)
  {
    id: 'p1_m1_3_l2',
    category: 'phase1_module1_3',
    categoryTitle: categories.phase1_module1_3,
    ...breathingInWater
  },
  {
    id: 'p1_m1_3_l3',
    category: 'phase1_module1_3',
    categoryTitle: categories.phase1_module1_3,
    ...practicalExercisesWater
  },
  
  // Phase 1 Module 1.5: Equipment
  {
    id: 'p1_m1_5_l1',
    category: 'phase1_module1_5',
    categoryTitle: categories.phase1_module1_5,
    ...swimGoggles
  },
  {
    id: 'p1_m1_5_l2',
    category: 'phase1_module1_5',
    categoryTitle: categories.phase1_module1_5,
    ...swimCap
  },
  {
    id: 'p1_m1_5_l3',
    category: 'phase1_module1_5',
    categoryTitle: categories.phase1_module1_5,
    ...swimsuit
  }
];

// Helper function to get lesson by ID
export function getLessonById(id) {
  return lessons.find(lesson => lesson.id === id) || null;
}

// Helper function to get next lesson
export function getNextLesson(currentId) {
  const currentIndex = lessons.findIndex(lesson => lesson.id === currentId);
  if (currentIndex === -1 || currentIndex === lessons.length - 1) {
    return null;
  }
  return lessons[currentIndex + 1];
}

