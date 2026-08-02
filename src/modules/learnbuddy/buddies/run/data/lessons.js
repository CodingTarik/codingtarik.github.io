import React from 'react';

// Phase 1: Fundamentals
import { introductionLesson } from '../lessons/module_1/introduction';
import { equipmentLesson } from '../lessons/module_1/equipment';
import { techniqueLesson } from '../lessons/module_1/technique';
import { firstStepsLesson } from '../lessons/module_1/first_steps';
import { trainingPlanningLesson } from '../lessons/module_1/training_planning';
import { injuryPreventionLesson } from '../lessons/module_1/injury_prevention';
import { nutritionLesson } from '../lessons/module_1/nutrition';

// Phase 2: Building & Consolidation
import { continuousRunsLesson } from '../lessons/module_2/continuous_runs';
import { tempoVariationLesson } from '../lessons/module_2/tempo_variation';
import { intervalsLesson } from '../lessons/module_2/intervals';
import { longRunLesson } from '../lessons/module_2/long_run';
import { weekStructureLesson } from '../lessons/module_2/week_structure';
import { crossTrainingLesson } from '../lessons/module_2/cross_training';
import { nutritionAdvancedLesson } from '../lessons/module_2/nutrition_advanced';

// Phase 3: Specialization & Distances
import { fiveKPlanLesson } from '../lessons/module_3/5k_plan';
import { tenKPlanLesson } from '../lessons/module_3/10k_plan';
import { halfMarathonLesson } from '../lessons/module_3/half_marathon';
import { advancedIntervalsLesson } from '../lessons/module_3/advanced_intervals';
import { hillTrainingLesson } from '../lessons/module_3/hill_training';
import { advancedTempoRunsLesson } from '../lessons/module_3/advanced_tempo_runs';

// Phase 4: Marathon & Advanced Training
import { marathonPreparationLesson } from '../lessons/module_4/marathon_preparation';
import { longDistanceNutritionLesson } from '../lessons/module_4/long_distance_nutrition';
import { taperLesson } from '../lessons/module_4/taper';
import { raceDayLogisticsLesson } from '../lessons/module_4/race_day_logistics';
import { mentalPreparationLesson } from '../lessons/module_4/mental_preparation';

// Phase 5: Advanced Topics
import { trailRunningLesson } from '../lessons/module_5/trail_running';
import { ultraRunningLesson } from '../lessons/module_5/ultra_running';
import { speedTrainingLesson } from '../lessons/module_5/speed_training';
import { extremeWeatherLesson } from '../lessons/module_5/extreme_weather';

// Phase 6: Recovery & Injury Management
import { regenerationLesson } from '../lessons/module_6/regeneration';
import { injuriesLesson } from '../lessons/module_6/injuries';
import { overtrainingLesson } from '../lessons/module_6/overtraining';
import { foamRollingLesson } from '../lessons/module_6/foam_rolling';
import { mobilityLesson } from '../lessons/module_6/mobility';

// Phase 7: Performance & Optimization
import { heartRateLesson } from '../lessons/module_7/heart_rate';
import { paceTempoLesson } from '../lessons/module_7/pace_tempo';
import { formAnalysisLesson } from '../lessons/module_7/form_analysis';
import { nutritionOptimizationLesson } from '../lessons/module_7/nutrition_optimization';

// Phase 8: Motivation & Lifestyle
import { motivationLesson } from '../lessons/module_8/motivation';
import { mentalStrengthLesson } from '../lessons/module_8/mental_strength';
import { communityLesson } from '../lessons/module_8/community';
import { lifelongRunningLesson } from '../lessons/module_8/lifelong_running';

// Phase 9: Advanced Performance
import { lactateThresholdLesson } from '../lessons/module_9/lactate_threshold';
import { runningEconomyLesson } from '../lessons/module_9/running_economy';
import { altitudeTrainingLesson } from '../lessons/module_9/altitude_training';
import { biomechanicsDeepDiveLesson } from '../lessons/module_9/biomechanics_deep_dive';
import { periodizedNutritionLesson } from '../lessons/module_9/periodized_nutrition';

// Phase 10: Mastery
import { obstacleRacingLesson } from '../lessons/module_10/obstacle_racing';
import { runningInjuriesLesson } from '../lessons/module_10/running_injuries';
import { trackFieldLesson } from '../lessons/module_10/track_field';
import { runningTechnologyLesson } from '../lessons/module_10/running_technology';
import { selfCoachingLesson } from '../lessons/module_10/self_coaching';

export const categories = {
  basics: {
    en: 'Phase 1: Fundamentals',
    de: 'Phase 1: Die Fundamentale'
  },
  building: {
    en: 'Phase 2: Building & Consolidation',
    de: 'Phase 2: Aufbau & Konsolidierung'
  },
  specialization: {
    en: 'Phase 3: Specialization & Distances',
    de: 'Phase 3: Spezialisierung & Distanzen'
  },
  marathon: {
    en: 'Phase 4: Marathon & Advanced Training',
    de: 'Phase 4: Marathon & Fortgeschrittenes Training'
  },
  advanced: {
    en: 'Phase 5: Advanced Topics',
    de: 'Phase 5: Fortgeschrittene Themen'
  },
  recovery: {
    en: 'Phase 6: Recovery & Injury Management',
    de: 'Phase 6: Regeneration & Verletzungen'
  },
  performance: {
    en: 'Phase 7: Performance & Optimization',
    de: 'Phase 7: Performance & Optimierung'
  },
  lifestyle: {
    en: 'Phase 8: Motivation & Lifestyle',
    de: 'Phase 8: Motivation & Lebensstil'
  },
  advancedPerformance: {
    en: 'Phase 9: Advanced Performance',
    de: 'Phase 9: Erweiterte Performance'
  },
  mastery: {
    en: 'Phase 10: Mastery',
    de: 'Phase 10: Meisterschaft'
  }
};

export const lessons = [
  // Phase 1: Fundamentals
  {
    category: 'basics',
    ...introductionLesson
  },
  {
    category: 'basics',
    ...equipmentLesson
  },
  {
    category: 'basics',
    ...techniqueLesson
  },
  {
    category: 'basics',
    ...firstStepsLesson
  },
  {
    category: 'basics',
    ...trainingPlanningLesson
  },
  {
    category: 'basics',
    ...injuryPreventionLesson
  },
  {
    category: 'basics',
    ...nutritionLesson
  },
  // Phase 2: Building & Consolidation
  {
    category: 'building',
    ...continuousRunsLesson
  },
  {
    category: 'building',
    ...tempoVariationLesson
  },
  {
    category: 'building',
    ...intervalsLesson
  },
  {
    category: 'building',
    ...longRunLesson
  },
  {
    category: 'building',
    ...weekStructureLesson
  },
  {
    category: 'building',
    ...crossTrainingLesson
  },
  {
    category: 'building',
    ...nutritionAdvancedLesson
  },
  // Phase 3: Specialization & Distances
  {
    category: 'specialization',
    ...fiveKPlanLesson
  },
  {
    category: 'specialization',
    ...tenKPlanLesson
  },
  {
    category: 'specialization',
    ...halfMarathonLesson
  },
  {
    category: 'specialization',
    ...advancedIntervalsLesson
  },
  {
    category: 'specialization',
    ...hillTrainingLesson
  },
  {
    category: 'specialization',
    ...advancedTempoRunsLesson
  },
  // Phase 4: Marathon & Advanced Training
  {
    category: 'marathon',
    ...marathonPreparationLesson
  },
  {
    category: 'marathon',
    ...longDistanceNutritionLesson
  },
  {
    category: 'marathon',
    ...taperLesson
  },
  {
    category: 'marathon',
    ...raceDayLogisticsLesson
  },
  {
    category: 'marathon',
    ...mentalPreparationLesson
  },
  // Phase 5: Advanced Topics
  {
    category: 'advanced',
    ...trailRunningLesson
  },
  {
    category: 'advanced',
    ...ultraRunningLesson
  },
  {
    category: 'advanced',
    ...speedTrainingLesson
  },
  {
    category: 'advanced',
    ...extremeWeatherLesson
  },
  // Phase 6: Recovery & Injury Management
  {
    category: 'recovery',
    ...regenerationLesson
  },
  {
    category: 'recovery',
    ...injuriesLesson
  },
  {
    category: 'recovery',
    ...overtrainingLesson
  },
  {
    category: 'recovery',
    ...foamRollingLesson
  },
  {
    category: 'recovery',
    ...mobilityLesson
  },
  // Phase 7: Performance & Optimization
  {
    category: 'performance',
    ...heartRateLesson
  },
  {
    category: 'performance',
    ...paceTempoLesson
  },
  {
    category: 'performance',
    ...formAnalysisLesson
  },
  {
    category: 'performance',
    ...nutritionOptimizationLesson
  },
  // Phase 8: Motivation & Lifestyle
  {
    category: 'lifestyle',
    ...motivationLesson
  },
  {
    category: 'lifestyle',
    ...mentalStrengthLesson
  },
  {
    category: 'lifestyle',
    ...communityLesson
  },
  {
    category: 'lifestyle',
    ...lifelongRunningLesson
  },
  // Phase 9: Advanced Performance
  {
    category: 'advancedPerformance',
    ...lactateThresholdLesson
  },
  {
    category: 'advancedPerformance',
    ...runningEconomyLesson
  },
  {
    category: 'advancedPerformance',
    ...altitudeTrainingLesson
  },
  {
    category: 'advancedPerformance',
    ...biomechanicsDeepDiveLesson
  },
  {
    category: 'advancedPerformance',
    ...periodizedNutritionLesson
  },
  // Phase 10: Mastery
  {
    category: 'mastery',
    ...obstacleRacingLesson
  },
  {
    category: 'mastery',
    ...runningInjuriesLesson
  },
  {
    category: 'mastery',
    ...trackFieldLesson
  },
  {
    category: 'mastery',
    ...runningTechnologyLesson
  },
  {
    category: 'mastery',
    ...selfCoachingLesson
  }
];

export function getLessonById(id) {
  return lessons.find(l => l.id === id);
}

export function getNextLesson(currentId) {
  const idx = lessons.findIndex(l => l.id === currentId);
  return idx >= 0 && idx < lessons.length - 1 ? lessons[idx + 1] : null;
}
