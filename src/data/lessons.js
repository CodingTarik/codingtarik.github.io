
// This file is the central hub for all lesson content.
// It imports individual lesson modules and exports them in a structured way.

// Module 1.1: BASICS & GETTING STARTED
import { whatIsBouldering } from '../lessons/module1_1_basics_and_getting_started/what-is-bouldering.js';
import { safetyAndEtiquette } from '../lessons/module1_1_basics_and_getting_started/safety-and-etiquette.js';
import { boulderingABCs } from '../lessons/module1_1_basics_and_getting_started/bouldering-abcs.js';

// Module 1.2: FUNDAMENTAL MOVEMENT PRINCIPLES
import { movementFromTheFeet } from '../lessons/module1_2_fundamental_movement_principles/movement-from-the-feet.js';
import { hipAsTheCenter } from '../lessons/module1_2_fundamental_movement_principles/hip-as-the-center.js';
import { tensionVsRelaxation } from '../lessons/module1_2_fundamental_movement_principles/tension-vs-relaxation.js';


// The main export is an array of categories (modules).
// Each category object contains its ID and a list of its lessons.
// The lesson objects are imported from their respective files.
// The 'id' for each lesson is dynamically generated from the object key.
export const lessons = [
  {
    id: 'module1_1',
    lessons: [
      whatIsBouldering,
      safetyAndEtiquette,
      boulderingABCs,
    ].map((lesson, index) => ({ ...lesson, id: `m1_1_l${index + 1}` }))
  },
  {
    id: 'module1_2',
    lessons: [
      movementFromTheFeet,
      hipAsTheCenter,
      tensionVsRelaxation,
    ].map((lesson, index) => ({ ...lesson, id: `m1_2_l${index + 1}` }))
  },
  // Future modules will be added here
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

