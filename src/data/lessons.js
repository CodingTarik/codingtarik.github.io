
// This file is the central hub for all lesson content.
// It imports individual lesson modules and exports them in a structured way.

// Module 1.1: INTRODUCTION TO BOULDERING
import { whatIsBouldering } from '../lessons/module1_1_introduction_to_bouldering/what-is-bouldering.js';
import { gymVsOutdoor } from '../lessons/module1_1_introduction_to_bouldering/gym-vs-outdoor.js';
import { theBoulderingCommunity } from '../lessons/module1_1_introduction_to_bouldering/the-bouldering-community.js';

// Module 1.3: SAFETY
import { safetyAndEtiquette } from '../lessons/module1_3_safety/safety-and-etiquette.js';


// The main export is an array of categories (modules).
// The 'id' for each lesson is dynamically generated from the object key.
export const lessons = [
  {
    id: 'module1_1',
    lessons: [
      whatIsBouldering,
      gymVsOutdoor,
      theBoulderingCommunity,
    ].map((lesson, index) => ({ ...lesson, id: `m1_1_l${index + 1}` }))
  },
  {
    id: 'module1_2',
    lessons: [
        // This module is currently empty and will be filled later
    ].map((lesson, index) => ({ ...lesson, id: `m1_2_l${index + 1}` }))
  },
  {
    id: 'module1_3',
    lessons: [
      safetyAndEtiquette,
    ].map((lesson, index) => ({ ...lesson, id: `m1_3_l${index + 1}` }))
  },
];

// Helper function to get all lessons in a flat array, with category info added.
export const getAllLessons = () => {
  return lessons.flatMap(category =>
    category.lessons.map(lesson => ({
      ...lesson,
      category: category.id
    }))
  );
};

export const getLessonById = (id) => {
  return getAllLessons().find(lesson => lesson.id === id);
};

export const getNextLesson = (currentLessonId) => {
  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex(lesson => lesson.id === currentLessonId);
  if (currentIndex === -1 || currentIndex === allLessons.length - 1) {
    return null; // No next lesson
  }
  return allLessons[currentIndex + 1];
};

