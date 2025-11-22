import { introductionLesson } from '../lessons/module_1/introduction';
import { miseEnPlaceLesson } from '../lessons/module_1/mise_en_place';
import { safetyHygieneLesson } from '../lessons/module_1/safety_hygiene';
import { recipesLanguageLesson } from '../lessons/module_1/recipes_language';
import { equipmentLesson } from '../lessons/module_1/equipment';
import { pantryLesson } from '../lessons/module_1/pantry';
import { dairyFatsLesson } from '../lessons/module_1/dairy_fats';
import { tomatoSauceLesson } from '../lessons/module_1/basics';

import { knifeSkillsLesson } from '../lessons/module_2/knife_skills';
import { knifeCareLesson } from '../lessons/module_2/knife_care';
import { vegetablePrepLesson } from '../lessons/module_2/vegetable_prep';
import { dryHeatLesson } from '../lessons/module_2/dry_heat';
import { wetHeatLesson } from '../lessons/module_2/wet_heat';
import { lowTempLesson } from '../lessons/module_2/low_temp';
import { staplesCookingLesson } from '../lessons/module_2/staples_cooking';
import { eggTechniquesLesson } from '../lessons/module_2/egg_techniques';
import { seasoningBalanceLesson } from '../lessons/module_2/seasoning_balance';

export const categories = {
  basics: {
    en: 'Module 1: Kitchen Foundations',
    de: 'Modul 1: Das Fundament der Küche'
  },
  techniques: {
    en: 'Module 2: Fundamental Techniques',
    de: 'Modul 2: Fundamentale Techniken'
  }
};

export const lessons = [
  // Module 1: Basics
  {
    category: 'basics',
    ...introductionLesson
  },
  {
    category: 'basics',
    ...miseEnPlaceLesson
  },
  {
    category: 'basics',
    ...safetyHygieneLesson
  },
  {
    category: 'basics',
    ...recipesLanguageLesson
  },
  {
    category: 'basics',
    ...equipmentLesson
  },
  {
    category: 'basics',
    ...pantryLesson
  },
  {
    category: 'basics',
    ...dairyFatsLesson
  },
  {
    category: 'basics',
    ...tomatoSauceLesson
  },

  // Module 2: Techniques
  {
    category: 'techniques',
    ...knifeSkillsLesson
  },
  {
    category: 'techniques',
    ...knifeCareLesson
  },
  {
    category: 'techniques',
    ...vegetablePrepLesson
  },
  {
    category: 'techniques',
    ...dryHeatLesson
  },
  {
    category: 'techniques',
    ...wetHeatLesson
  },
  {
    category: 'techniques',
    ...lowTempLesson
  },
  {
    category: 'techniques',
    ...staplesCookingLesson
  },
  {
    category: 'techniques',
    ...eggTechniquesLesson
  },
  {
    category: 'techniques',
    ...seasoningBalanceLesson
  }
];

export function getLessonById(id) {
  return lessons.find(l => l.id === id);
}

export function getNextLesson(currentId) {
  const idx = lessons.findIndex(l => l.id === currentId);
  return idx >= 0 && idx < lessons.length - 1 ? lessons[idx + 1] : null;
}
