
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

