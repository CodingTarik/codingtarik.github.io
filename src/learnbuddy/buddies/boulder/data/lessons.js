
// This file is the central hub for all lesson content.
// It imports individual lesson modules and exports them in a structured way.

// Module 1.1: INTRODUCTION TO BOULDERING
import { whatIsBouldering } from '../lessons/module1_1_introduction_to_bouldering/what-is-bouldering.js';
import { gymVsOutdoor } from '../lessons/module1_1_introduction_to_bouldering/gym-vs-outdoor.js';
import { theBoulderingCommunity } from '../lessons/module1_1_introduction_to_bouldering/the-bouldering-community.js';

// Module 1.3: SAFETY
import { safetyAndEtiquette } from '../lessons/module1_3_safety/safety-and-etiquette.js';

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
  
  // Module 1.2: FUNDAMENTAL MOVEMENT PRINCIPLES (empty for now)
  
  // Module 1.3: SAFETY
  {
    id: 'm1_3_l1',
    category: 'module1_3',
    categoryTitle: categories.module1_3,
    ...safetyAndEtiquette
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

