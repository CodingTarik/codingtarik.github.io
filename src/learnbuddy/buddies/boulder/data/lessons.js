
// This file is the central hub for all lesson content.
// It imports individual lesson modules and exports them in a structured way.

// Module 1.1: INTRODUCTION TO BOULDERING
import { whatIsBouldering } from '../lessons/module1_1_introduction_to_bouldering/what-is-bouldering.js';
import { gymVsOutdoor } from '../lessons/module1_1_introduction_to_bouldering/gym-vs-outdoor.js';
import { theBoulderingCommunity } from '../lessons/module1_1_introduction_to_bouldering/the-bouldering-community.js';

// Module 1.2: FUNDAMENTAL MOVEMENT PRINCIPLES
import { movementFromFeet } from '../lessons/module1_2_fundamental_movement_principles/movement-from-feet.js';
import { hipAsCenter } from '../lessons/module1_2_fundamental_movement_principles/hip-as-center.js';
import { tensionVsRelaxation } from '../lessons/module1_2_fundamental_movement_principles/tension-vs-relaxation.js';

// Module 1.3: SAFETY
import { safetyAndEtiquette } from '../lessons/module1_3_safety/safety-and-etiquette.js';
import { fallingSafely } from '../lessons/module1_3_safety/falling-safely.js';
import { spotting } from '../lessons/module1_3_safety/spotting.js';
import { injuryPrevention } from '../lessons/module1_3_safety/injury-prevention.js';

// Module 1.4: READING ROUTES
import { holdMarkingsColors } from '../lessons/module1_4_reading_routes/hold-markings-colors.js';
import { difficultyGrades } from '../lessons/module1_4_reading_routes/difficulty-grades.js';
import { boulderingVocabulary } from '../lessons/module1_4_reading_routes/bouldering-vocabulary.js';

// Module 1.5: EQUIPMENT
import { climbingShoes } from '../lessons/module1_5_equipment/climbing-shoes.js';
import { chalk } from '../lessons/module1_5_equipment/chalk.js';
import { additionalEquipment } from '../lessons/module1_5_equipment/additional-equipment.js';
import { budgetGuide } from '../lessons/module1_5_equipment/budget-guide.js';

// Module 2.1: BODY TENSION
import { bodyTensionFundament } from '../lessons/module2_1_body_tension/body-tension-fundament.js';

// Module 2.2: ARMS & WRISTS
import { straightArms } from '../lessons/module2_2_arms_wrists/straight-arms.js';

// Module 2.3: GRIP TECHNIQUES
import { jugCrimpSloper } from '../lessons/module2_3_grip_techniques/jug-crimp-sloper.js';
import { pinchPocketUndercling } from '../lessons/module2_3_grip_techniques/pinch-pocket-undercling.js';

// Module 2.4: FOOTWORK
import { footworkFundamentals } from '../lessons/module2_4_footwork/footwork-fundamentals.js';

// Module 2.5: BALANCE & CENTER OF GRAVITY
import { balanceCenterGravity } from '../lessons/module2_5_balance/balance-center-gravity.js';

// Module 2.6: PACING & ENDURANCE
import { pacingEndurance } from '../lessons/module2_6_pacing/pacing-endurance.js';

// Module 3.1: DYNAMIC MOVEMENTS
import { dynamicMovements } from '../lessons/module3_1_dynamic_moves/dynamic-movements.js';

// Module 3.2: OVERHANG TECHNIQUES
import { overhangTechniques } from '../lessons/module3_2_overhang/overhang-techniques.js';

// Module 3.3: MANTLING & TOP-OUT
import { mantlingTopout } from '../lessons/module3_3_mantling/mantling-topout.js';

// Module 3.4: SLAB TECHNIQUES
import { slabTechniques } from '../lessons/module3_4_slab/slab-techniques.js';

// Module 3.5: COMPRESSION
import { compressionTechniques } from '../lessons/module3_5_compression/compression-techniques.js';

// Module 3.6: ROUTE READING - ADVANCED
import { advancedRouteReading } from '../lessons/module3_6_route_reading/advanced-route-reading.js';

// Module 4.1: WARM-UP ROUTINE
import { warmupRoutine } from '../lessons/module4_1_warmup/warmup-routine.js';

// Module 4.2: TRAINING PLANNING
import { trainingPlanning } from '../lessons/module4_2_training_plan/training-planning.js';

// Module 4.3: CLIMBING DRILLS
import { climbingDrills } from '../lessons/module4_3_drills/climbing-drills.js';

// Module 4.4: FINGER TRAINING
import { fingerTraining } from '../lessons/module4_4_finger_strength/finger-training.js';

// Module 4.5: OFF-WALL TRAINING
import { offwallTraining } from '../lessons/module4_5_offwall/offwall-training.js';

// Module 4.6: NUTRITION & RECOVERY
import { nutritionRecovery } from '../lessons/module4_6_nutrition/nutrition-recovery.js';

// Module 5.1: FEAR & FALL PRACTICE
import { dealingWithFear } from '../lessons/module5_1_fear/dealing-with-fear.js';

// Module 5.2: FOCUS & VISUALIZATION
import { focusVisualization } from '../lessons/module5_2_focus/focus-visualization.js';

// Module 5.3: COMPETITION MINDSET
import { competitionMindset } from '../lessons/module5_3_competition/competition-mindset.js';

// Module 6.1: OUTDOOR BOULDERING
import { outdoorBouldering } from '../lessons/module6_1_outdoor/outdoor-bouldering.js';

// Module 6.2: SPECIAL STYLES
import { specialStyles } from '../lessons/module6_2_styles/special-styles.js';

// Category titles for each module
const categories = {
  module1_1: {
    en: 'MODULE 1.1: INTRODUCTION TO BOULDERING',
    de: 'MODUL 1.1: EINFÜHRUNG INS BOULDERN'
  },
  module1_2: {
    en: 'MODULE 1.2: FUNDAMENTAL MOVEMENT PRINCIPLES',
    de: 'MODUL 1.2: FUNDAMENTALE BEWEGUNGSPRINZIPIEN'
  },
  module1_3: {
    en: 'MODULE 1.3: SAFETY',
    de: 'MODUL 1.3: SICHERHEIT'
  },
  module1_4: {
    en: 'MODULE 1.4: READING ROUTES',
    de: 'MODUL 1.4: ROUTEN LESEN & VERSTEHEN'
  },
  module1_5: {
    en: 'MODULE 1.5: EQUIPMENT',
    de: 'MODUL 1.5: AUSRÜSTUNG'
  },
  module2_1: {
    en: 'MODULE 2.1: BODY TENSION - THE FOUNDATION',
    de: 'MODUL 2.1: KÖRPERSPANNUNG - DAS FUNDAMENT'
  },
  module2_2: {
    en: 'MODULE 2.2: ARMS & WRISTS - USE THEM RIGHT',
    de: 'MODUL 2.2: ARME & HANDGELENKE RICHTIG NUTZEN'
  },
  module2_3: {
    en: 'MODULE 2.3: GRIP TECHNIQUES - THE 7 MAIN GRIPS',
    de: 'MODUL 2.3: GREIFTECHNIKEN - DIE 7 HAUPTGRIFFE'
  },
  module2_4: {
    en: 'MODULE 2.4: FOOTWORK - THE MOST IMPORTANT!',
    de: 'MODUL 2.4: FUSSTECHNIK - DAS WICHTIGSTE!'
  },
  module2_5: {
    en: 'MODULE 2.5: BALANCE & CENTER OF GRAVITY',
    de: 'MODUL 2.5: BALANCE & SCHWERPUNKT'
  },
  module2_6: {
    en: 'MODULE 2.6: PACING & RECOVERY',
    de: 'MODUL 2.6: PACING & ERHOLUNG'
  },
  module3_1: {
    en: 'MODULE 3.1: DYNAMIC MOVEMENTS',
    de: 'MODUL 3.1: DYNAMISCHE BEWEGUNGEN'
  },
  module3_2: {
    en: 'MODULE 3.2: OVERHANG TECHNIQUES',
    de: 'MODUL 3.2: ÜBERHANG-TECHNIKEN'
  },
  module3_3: {
    en: 'MODULE 3.3: MANTLING & TOP-OUT',
    de: 'MODUL 3.3: MANTELN & TOP-OUT'
  },
  module3_4: {
    en: 'MODULE 3.4: SLAB CLIMBING',
    de: 'MODUL 3.4: SLAB/PLATTE'
  },
  module3_5: {
    en: 'MODULE 3.5: COMPRESSION',
    de: 'MODUL 3.5: KOMPRESSION'
  },
  module3_6: {
    en: 'MODULE 3.6: ADVANCED ROUTE READING',
    de: 'MODUL 3.6: ROUTE READING - FORTGESCHRITTEN'
  },
  module4_1: {
    en: 'MODULE 4.1: WARM-UP ROUTINE',
    de: 'MODUL 4.1: AUFWÄRM-ROUTINE'
  },
  module4_2: {
    en: 'MODULE 4.2: TRAINING PLANNING',
    de: 'MODUL 4.2: TRAININGSPLANUNG'
  },
  module4_3: {
    en: 'MODULE 4.3: CLIMBING DRILLS',
    de: 'MODUL 4.3: KLETTERÜBUNGEN & DRILLS'
  },
  module4_4: {
    en: 'MODULE 4.4: FINGER TRAINING',
    de: 'MODUL 4.4: FINGERTRAINING'
  },
  module4_5: {
    en: 'MODULE 4.5: OFF-WALL TRAINING',
    de: 'MODUL 4.5: OFF-WALL TRAINING'
  },
  module4_6: {
    en: 'MODULE 4.6: NUTRITION & RECOVERY',
    de: 'MODUL 4.6: ERNÄHRUNG & REGENERATION'
  },
  module5_1: {
    en: 'MODULE 5.1: FEAR & FALL PRACTICE',
    de: 'MODUL 5.1: ANGST & STURZTRAINING'
  },
  module5_2: {
    en: 'MODULE 5.2: FOCUS & VISUALIZATION',
    de: 'MODUL 5.2: FOKUS & VISUALISIERUNG'
  },
  module5_3: {
    en: 'MODULE 5.3: COMPETITION MINDSET',
    de: 'MODUL 5.3: WETTKAMPF-MENTALITÄT'
  },
  module6_1: {
    en: 'MODULE 6.1: OUTDOOR BOULDERING',
    de: 'MODUL 6.1: OUTDOOR BOULDERN'
  },
  module6_2: {
    en: 'MODULE 6.2: SPECIAL STYLES & DISCIPLINES',
    de: 'MODUL 6.2: SPEZIAL-STILE & DISZIPLINEN'
  }
};

// All lessons in a flat array with IDs and categories
export const lessons = [
  // Module 1.1: INTRODUCTION TO BOULDERING
  {
    id: 'm1_1_l1',
    category: 'module1_1',
    categoryTitle: categories.module1_1,
    ...whatIsBouldering
  },
  {
    id: 'm1_1_l2',
    category: 'module1_1',
    categoryTitle: categories.module1_1,
    ...gymVsOutdoor
  },
  {
    id: 'm1_1_l3',
    category: 'module1_1',
    categoryTitle: categories.module1_1,
    ...theBoulderingCommunity
  },
  
  // Module 1.2: FUNDAMENTAL MOVEMENT PRINCIPLES
  {
    id: 'm1_2_l1',
    category: 'module1_2',
    categoryTitle: categories.module1_2,
    ...movementFromFeet
  },
  {
    id: 'm1_2_l2',
    category: 'module1_2',
    categoryTitle: categories.module1_2,
    ...hipAsCenter
  },
  {
    id: 'm1_2_l3',
    category: 'module1_2',
    categoryTitle: categories.module1_2,
    ...tensionVsRelaxation
  },
  
  // Module 1.3: SAFETY
  {
    id: 'm1_3_l1',
    category: 'module1_3',
    categoryTitle: categories.module1_3,
    ...safetyAndEtiquette
  },
  {
    id: 'm1_3_l2',
    category: 'module1_3',
    categoryTitle: categories.module1_3,
    ...fallingSafely
  },
  {
    id: 'm1_3_l3',
    category: 'module1_3',
    categoryTitle: categories.module1_3,
    ...spotting
  },
  {
    id: 'm1_3_l4',
    category: 'module1_3',
    categoryTitle: categories.module1_3,
    ...injuryPrevention
  },
  
  // Module 1.4: READING ROUTES
  {
    id: 'm1_4_l1',
    category: 'module1_4',
    categoryTitle: categories.module1_4,
    ...holdMarkingsColors
  },
  {
    id: 'm1_4_l2',
    category: 'module1_4',
    categoryTitle: categories.module1_4,
    ...difficultyGrades
  },
  {
    id: 'm1_4_l3',
    category: 'module1_4',
    categoryTitle: categories.module1_4,
    ...boulderingVocabulary
  },
  
  // Module 1.5: EQUIPMENT
  {
    id: 'm1_5_l1',
    category: 'module1_5',
    categoryTitle: categories.module1_5,
    ...climbingShoes
  },
  {
    id: 'm1_5_l2',
    category: 'module1_5',
    categoryTitle: categories.module1_5,
    ...chalk
  },
  {
    id: 'm1_5_l3',
    category: 'module1_5',
    categoryTitle: categories.module1_5,
    ...additionalEquipment
  },
  {
    id: 'm1_5_l4',
    category: 'module1_5',
    categoryTitle: categories.module1_5,
    ...budgetGuide
  },
  
  // Module 2.1: BODY TENSION
  {
    id: 'm2_1_l1',
    category: 'module2_1',
    categoryTitle: categories.module2_1,
    ...bodyTensionFundament
  },
  
  // Module 2.2: ARMS & WRISTS
  {
    id: 'm2_2_l1',
    category: 'module2_2',
    categoryTitle: categories.module2_2,
    ...straightArms
  },
  
  // Module 2.3: GRIP TECHNIQUES
  {
    id: 'm2_3_l1',
    category: 'module2_3',
    categoryTitle: categories.module2_3,
    ...jugCrimpSloper
  },
  {
    id: 'm2_3_l2',
    category: 'module2_3',
    categoryTitle: categories.module2_3,
    ...pinchPocketUndercling
  },
  
  // Module 2.4: FOOTWORK
  {
    id: 'm2_4_l1',
    category: 'module2_4',
    categoryTitle: categories.module2_4,
    ...footworkFundamentals
  },

  // Module 2.5: BALANCE & CENTER OF GRAVITY
  {
    id: 'm2_5_l1',
    category: 'module2_5',
    categoryTitle: categories.module2_5,
    ...balanceCenterGravity
  },

  // Module 2.6: PACING & RECOVERY
  {
    id: 'm2_6_l1',
    category: 'module2_6',
    categoryTitle: categories.module2_6,
    ...pacingEndurance
  },

  // Module 3.1: DYNAMIC MOVEMENTS
  {
    id: 'm3_1_l1',
    category: 'module3_1',
    categoryTitle: categories.module3_1,
    ...dynamicMovements
  },

  // Module 3.2: OVERHANG TECHNIQUES
  {
    id: 'm3_2_l1',
    category: 'module3_2',
    categoryTitle: categories.module3_2,
    ...overhangTechniques
  },

  // Module 3.3: MANTLING & TOP-OUT
  {
    id: 'm3_3_l1',
    category: 'module3_3',
    categoryTitle: categories.module3_3,
    ...mantlingTopout
  },

  // Module 3.4: SLAB CLIMBING
  {
    id: 'm3_4_l1',
    category: 'module3_4',
    categoryTitle: categories.module3_4,
    ...slabTechniques
  },

  // Module 3.5: COMPRESSION
  {
    id: 'm3_5_l1',
    category: 'module3_5',
    categoryTitle: categories.module3_5,
    ...compressionTechniques
  },

  // Module 3.6: ADVANCED ROUTE READING
  {
    id: 'm3_6_l1',
    category: 'module3_6',
    categoryTitle: categories.module3_6,
    ...advancedRouteReading
  },

  // Module 4.1: WARM-UP ROUTINE
  {
    id: 'm4_1_l1',
    category: 'module4_1',
    categoryTitle: categories.module4_1,
    ...warmupRoutine
  },

  // Module 4.2: TRAINING PLANNING
  {
    id: 'm4_2_l1',
    category: 'module4_2',
    categoryTitle: categories.module4_2,
    ...trainingPlanning
  },

  // Module 4.3: CLIMBING DRILLS
  {
    id: 'm4_3_l1',
    category: 'module4_3',
    categoryTitle: categories.module4_3,
    ...climbingDrills
  },

  // Module 4.4: FINGER TRAINING
  {
    id: 'm4_4_l1',
    category: 'module4_4',
    categoryTitle: categories.module4_4,
    ...fingerTraining
  },

  // Module 4.5: OFF-WALL TRAINING
  {
    id: 'm4_5_l1',
    category: 'module4_5',
    categoryTitle: categories.module4_5,
    ...offwallTraining
  },

  // Module 4.6: NUTRITION & RECOVERY
  {
    id: 'm4_6_l1',
    category: 'module4_6',
    categoryTitle: categories.module4_6,
    ...nutritionRecovery
  },

  // Module 5.1: FEAR & FALL PRACTICE
  {
    id: 'm5_1_l1',
    category: 'module5_1',
    categoryTitle: categories.module5_1,
    ...dealingWithFear
  },

  // Module 5.2: FOCUS & VISUALIZATION
  {
    id: 'm5_2_l1',
    category: 'module5_2',
    categoryTitle: categories.module5_2,
    ...focusVisualization
  },

  // Module 5.3: COMPETITION MINDSET
  {
    id: 'm5_3_l1',
    category: 'module5_3',
    categoryTitle: categories.module5_3,
    ...competitionMindset
  },

  // Module 6.1: OUTDOOR BOULDERING
  {
    id: 'm6_1_l1',
    category: 'module6_1',
    categoryTitle: categories.module6_1,
    ...outdoorBouldering
  },

  // Module 6.2: SPECIAL STYLES & DISCIPLINES
  {
    id: 'm6_2_l1',
    category: 'module6_2',
    categoryTitle: categories.module6_2,
    ...specialStyles
  }
];

// Helper function to get lesson by ID
export function getLessonById(id) {
  return lessons.find(lesson => lesson.id === id) || null;
}

// Helper function to get next lesson
export function getNextLesson(currentLessonId) {
  const currentIndex = lessons.findIndex(lesson => lesson.id === currentLessonId);
  if (currentIndex === -1 || currentIndex === lessons.length - 1) {
    return null; // No next lesson
  }
  return lessons[currentIndex + 1];
}
