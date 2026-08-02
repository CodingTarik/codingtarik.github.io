import { introductionLesson } from '../lessons/module_1_introduction';
import { safetyLesson } from '../lessons/module_1_safety';
import { vocabularyLesson } from '../lessons/module_1_vocabulary';
import { anatomyLesson } from '../lessons/module_1_anatomy';
import { equipmentLesson } from '../lessons/module_1_equipment';
import { chestLesson } from '../lessons/module_2_chest';
import { backLesson } from '../lessons/module_2_back';
import { shouldersLesson } from '../lessons/module_2_shoulders';
import { legsLesson } from '../lessons/module_2_legs';
import { armsLesson } from '../lessons/module_2_arms';
import { coreLesson } from '../lessons/module_2_core';
import { splitsLesson } from '../lessons/module_3_splits';
import { progressionLesson } from '../lessons/module_3_progression';
import { intensityLesson } from '../lessons/module_3_intensity';
import { logbookLesson } from '../lessons/module_3_logbook';
import { advancedMethodsLesson } from '../lessons/module_3_advanced_methods';
import { periodizationLesson } from '../lessons/module_3_periodization';
import { scienceLesson } from '../lessons/module_3_science';
import { caloriesLesson } from '../lessons/module_4_calories';
import { macrosLesson } from '../lessons/module_4_macros';
import { timingLesson } from '../lessons/module_4_timing';
import { supplementsLesson } from '../lessons/module_4_supplements';
import { mealPrepLesson } from '../lessons/module_4_mealprep';
import { sleepLesson } from '../lessons/module_5_sleep';
import { mobilityLesson } from '../lessons/module_5_mobility';
import { warmupCooldownLesson } from '../lessons/module_5_warmup_cooldown';
import { mindsetLesson } from '../lessons/module_5_mindset';
import { injuryPreventionLesson } from '../lessons/module_5_injury_prevention';
import { cardioLesson } from '../lessons/module_5_cardio';
import { whatIsCalisthenicsLesson } from '../lessons/module_6_what_is_calisthenics';
import { progressionsLesson } from '../lessons/module_6_progressions';
import { big5SkillsLesson } from '../lessons/module_6_big5_skills';
import { hybridTrainingLesson } from '../lessons/module_6_hybrid';
import { advancedChestLesson } from '../lessons/module_7_advanced_chest';
import { advancedBackLesson } from '../lessons/module_7_advanced_back';
import { advancedShouldersLesson } from '../lessons/module_7_advanced_shoulders';
import { advancedLegsLesson } from '../lessons/module_7_advanced_legs';
import { advancedArmsLesson } from '../lessons/module_7_advanced_arms';
import { explosivePowerLesson } from '../lessons/module_8_explosive_power';
import { flexibilityMobilityLesson } from '../lessons/module_8_flexibility_mobility';
import { bodyRecompositionLesson } from '../lessons/module_8_body_recomposition';
import { competitionPrepLesson } from '../lessons/module_8_competition_prep';
import { advancedProgrammingLesson } from '../lessons/module_8_advanced_programming';

export const categories = {
  basics: {
    en: 'Phase 1: Foundations & First Steps',
    de: 'Phase 1: Grundlagen & Erste Schritte'
  },
  exercises: {
    en: 'Phase 2: The Great Exercise Library',
    de: 'Phase 2: Die Große Übungs-Bibliothek'
  },
  planning: {
    en: 'Phase 3: Planning & Progression',
    de: 'Phase 3: Planung & Progression'
  },
  nutrition: {
    en: 'Phase 4: Nutrition for Muscle Growth',
    de: 'Phase 4: Ernährung für Muskelaufbau'
  },
  recovery: {
    en: 'Phase 5: Recovery & Mobility',
    de: 'Phase 5: Regeneration & Mobilität'
  },
  calisthenics: {
    en: 'Phase 6: Calisthenics',
    de: 'Phase 6: Calisthenics (Eigengewicht)'
  },
  advanced_bodybuilding: {
    en: 'Phase 7: Advanced Bodybuilding',
    de: 'Phase 7: Fortgeschrittenes Bodybuilding'
  },
  athletic_performance: {
    en: 'Phase 8: Athletic Performance',
    de: 'Phase 8: Athletische Leistung'
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
  },
  
  // Phase 2: The Great Exercise Library (Module 2.1 - 2.6)
  {
    category: 'exercises',
    ...chestLesson
  },
  {
    category: 'exercises',
    ...backLesson
  },
  {
    category: 'exercises',
    ...shouldersLesson
  },
  {
    category: 'exercises',
    ...legsLesson
  },
  {
    category: 'exercises',
    ...armsLesson
  },
  {
    category: 'exercises',
    ...coreLesson
  },

  // Phase 3: Planning & Progression (Module 3.1 - 3.7)
  {
    category: 'planning',
    ...splitsLesson
  },
  {
    category: 'planning',
    ...progressionLesson
  },
  {
    category: 'planning',
    ...intensityLesson
  },
  {
    category: 'planning',
    ...logbookLesson
  },
  {
    category: 'planning',
    ...advancedMethodsLesson
  },
  {
    category: 'planning',
    ...periodizationLesson
  },
  {
    category: 'planning',
    ...scienceLesson
  },

  // Phase 4: Nutrition for Muscle Growth (Module 4.1 - 4.5)
  {
    category: 'nutrition',
    ...caloriesLesson
  },
  {
    category: 'nutrition',
    ...macrosLesson
  },
  {
    category: 'nutrition',
    ...timingLesson
  },
  {
    category: 'nutrition',
    ...supplementsLesson
  },
  {
    category: 'nutrition',
    ...mealPrepLesson
  },

  // Phase 5: Recovery & Mobility (Module 5.1 - 5.6)
  {
    category: 'recovery',
    ...sleepLesson
  },
  {
    category: 'recovery',
    ...mobilityLesson
  },
  {
    category: 'recovery',
    ...warmupCooldownLesson
  },
  {
    category: 'recovery',
    ...mindsetLesson
  },
  {
    category: 'recovery',
    ...injuryPreventionLesson
  },
  {
    category: 'recovery',
    ...cardioLesson
  },

  // Phase 6: Calisthenics (Module 6.1 - 6.4)
  {
    category: 'calisthenics',
    ...whatIsCalisthenicsLesson
  },
  {
    category: 'calisthenics',
    ...progressionsLesson
  },
  {
    category: 'calisthenics',
    ...big5SkillsLesson
  },
  {
    category: 'calisthenics',
    ...hybridTrainingLesson
  },

  // Phase 7: Advanced Bodybuilding (Module 7.1 - 7.5)
  {
    category: 'advanced_bodybuilding',
    ...advancedChestLesson
  },
  {
    category: 'advanced_bodybuilding',
    ...advancedBackLesson
  },
  {
    category: 'advanced_bodybuilding',
    ...advancedShouldersLesson
  },
  {
    category: 'advanced_bodybuilding',
    ...advancedLegsLesson
  },
  {
    category: 'advanced_bodybuilding',
    ...advancedArmsLesson
  },

  // Phase 8: Athletic Performance (Module 8.1 - 8.5)
  {
    category: 'athletic_performance',
    ...explosivePowerLesson
  },
  {
    category: 'athletic_performance',
    ...flexibilityMobilityLesson
  },
  {
    category: 'athletic_performance',
    ...bodyRecompositionLesson
  },
  {
    category: 'athletic_performance',
    ...competitionPrepLesson
  },
  {
    category: 'athletic_performance',
    ...advancedProgrammingLesson
  }
];

export function getLessonById(id) {
  return lessons.find(l => l.id === id);
}

export function getNextLesson(currentId) {
  const idx = lessons.findIndex(l => l.id === currentId);
  return idx >= 0 && idx < lessons.length - 1 ? lessons[idx + 1] : null;
}
