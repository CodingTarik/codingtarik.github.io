import { introductionLesson } from '../lessons/module_1_introduction';
import { safetyLesson } from '../lessons/module_1_safety';
import { vocabularyLesson } from '../lessons/module_1_vocabulary';
import { anatomyLesson } from '../lessons/module_1_anatomy';
import { equipmentLesson } from '../lessons/module_1_equipment';

export const categories = {
  basics: {
    en: 'Phase 1: Foundations & First Steps',
    de: 'Phase 1: Grundlagen & Erste Schritte'
  }
};

export const lessons = [
  // Phase 1: Foundations & First Steps (Module 1.1 - 1.5)
  {
    category: 'basics',
    ...introductionLesson
  },
  {
    category: 'basics',
    ...safetyLesson
  },
  {
    category: 'basics',
    ...vocabularyLesson
  },
  {
    category: 'basics',
    ...anatomyLesson
  },
  {
    category: 'basics',
    ...equipmentLesson
  }
];

export function getLessonById(id) {
  return lessons.find(l => l.id === id);
}

export function getNextLesson(currentId) {
  const idx = lessons.findIndex(l => l.id === currentId);
  return idx >= 0 && idx < lessons.length - 1 ? lessons[idx + 1] : null;
}

