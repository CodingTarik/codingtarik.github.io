// Import A1 Grammar Lessons
import { presentSimple } from '../lessons/a1_grammar/present-simple';

// Define lesson categories
export const categories = {
  a1_grammar: {
    en: 'A1 Grammar - Beginner',
    de: 'A1 Grammatik - Anfänger'
  },
  a2_grammar: {
    en: 'A2 Grammar - Elementary',
    de: 'A2 Grammatik - Grundlagen'
  },
  b1_grammar: {
    en: 'B1 Grammar - Intermediate',
    de: 'B1 Grammatik - Mittelstufe'
  },
  b2_grammar: {
    en: 'B2 Grammar - Upper Intermediate',
    de: 'B2 Grammatik - Fortgeschritten'
  },
  c1_grammar: {
    en: 'C1 Grammar - Advanced',
    de: 'C1 Grammatik - Sehr Fortgeschritten'
  },
  c2_grammar: {
    en: 'C2 Grammar - Proficiency',
    de: 'C2 Grammatik - Experte'
  }
};

// All lessons with IDs and categories
export const lessons = [
  // A1 Grammar
  {
    id: 'a1_g1',
    category: 'a1_grammar',
    categoryTitle: categories.a1_grammar,
    ...presentSimple
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

// Helper function to get lessons by category
export function getLessonsByCategory(categoryId) {
  return lessons.filter(lesson => lesson.category === categoryId);
}

