// Magic Tricks Lessons
import { memoryCardTrick } from '../lessons/magic-tricks/memory-card-trick.js';
import { cardToTop } from '../lessons/magic-tricks/card-to-top.js';
import { coinBehindEar } from '../lessons/magic-tricks/coin-behind-ear.js';

// Combine all lessons
export const lessons = [
  {
    ...memoryCardTrick,
    category: 'magic',
    categoryTitle: {
      en: 'Magic & Entertainment',
      de: 'Zauberei & Unterhaltung'
    }
  },
  {
    ...cardToTop,
    category: 'magic',
    categoryTitle: {
      en: 'Magic & Entertainment',
      de: 'Zauberei & Unterhaltung'
    }
  },
  {
    ...coinBehindEar,
    category: 'magic',
    categoryTitle: {
      en: 'Magic & Entertainment',
      de: 'Zauberei & Unterhaltung'
    }
  }
];

export function getLessonById(id) {
  return lessons.find(lesson => lesson.id === id) || null;
}

export function getNextLesson(currentId) {
  const currentIndex = lessons.findIndex(lesson => lesson.id === currentId);
  if (currentIndex === -1 || currentIndex === lessons.length - 1) {
    return null;
  }
  return lessons[currentIndex + 1];
}

