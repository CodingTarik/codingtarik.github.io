// Magic Tricks Lessons
import { memoryCardTrick } from '../lessons/magic-tricks/memory-card-trick.js';
import { cardToTop } from '../lessons/magic-tricks/card-to-top.js';

// Combine all lessons
export const lessons = [
  {
    id: memoryCardTrick.id,
    category: memoryCardTrick.category,
    categoryTitle: memoryCardTrick.categoryTitle,
    ...memoryCardTrick
  },
  {
    id: cardToTop.id,
    category: cardToTop.category,
    categoryTitle: cardToTop.categoryTitle,
    ...cardToTop
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

