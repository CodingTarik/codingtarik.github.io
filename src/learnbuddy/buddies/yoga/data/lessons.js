// Import Phase 1: Die Fundamente
import { whatIsYoga } from '../lessons/phase1_introduction/what-is-yoga.js';
import { yogaEtiquette } from '../lessons/phase1_introduction/yoga-etiquette.js';
import { naturalBreathing } from '../lessons/phase1_breathing/natural-breathing.js';
import { ujjayiBreath } from '../lessons/phase1_breathing/ujjayi.js';
import { alignmentSafety } from '../lessons/phase1_alignment/alignment-safety.js';
import { modificationsProps } from '../lessons/phase1_alignment/modifications-props.js';
import { standingPoses } from '../lessons/phase1_poses/standing-poses.js';
import { seatedPoses } from '../lessons/phase1_poses/seated-poses.js';
import { lyingPoses } from '../lessons/phase1_poses/lying-poses.js';

// Import Phase 2: Aufbau & Flow
import { sunSalutationA } from '../lessons/phase2_sun_salutation/sun-salutation-a.js';
import { balancePoses } from '../lessons/phase2_balance/balance-poses.js';
import { backbends } from '../lessons/phase2_backbends/backbends.js';
import { twistsSidebends } from '../lessons/phase2_twists/twists-sidebends.js';

// Import Phase 3: Stärke & Flexibilität
import { coreStrength } from '../lessons/phase3_core/core-strength.js';
import { hipOpeners } from '../lessons/phase3_hips/hip-openers.js';
import { legStretches } from '../lessons/phase3_legs/leg-stretches.js';
import { armBalancesPrep } from '../lessons/phase3_arms/arm-balances-prep.js';

// Import Phase 4: Flow & Sequencing
import { vinyasaBasics } from '../lessons/phase4_vinyasa/vinyasa-basics.js';
import { classicalSequences } from '../lessons/phase4_sequences/classical-sequences.js';
import { buildingSequences } from '../lessons/phase4_building/building-sequences.js';
import { timingRhythm } from '../lessons/phase4_timing/timing-rhythm.js';

// Import Phase 5: Vertiefung
import { advancedStanding } from '../lessons/phase5_advanced_standing/advanced-standing.js';
import { armBalances } from '../lessons/phase5_arm_balances/arm-balances.js';
import { deepBackbends } from '../lessons/phase5_backbends_deep/deep-backbends.js';
import { inversions } from '../lessons/phase5_inversions/inversions.js';

// Import Phase 6: Spezialisierung
import { yinYoga } from '../lessons/phase6_yin/yin-yoga.js';
import { meditation } from '../lessons/phase6_meditation/meditation.js';
import { advancedPranayama } from '../lessons/phase6_pranayama/advanced-pranayama.js';
import { yogaPhilosophy } from '../lessons/phase6_philosophy/yoga-philosophy.js';

// Import Phase 7: Fortgeschrittene Praxis
import { ashtangaYoga } from '../lessons/phase7_ashtanga/ashtanga-yoga.js';
import { restorativeYoga } from '../lessons/phase7_restorative/restorative-yoga.js';
import { prenatalPostnatal } from '../lessons/phase7_prenatal/prenatal-postnatal.js';
import { yogaForAthletes } from '../lessons/phase7_athletes/yoga-for-athletes.js';

// Import Phase 8: Integration
import { chakraSystem } from '../lessons/phase8_chakras/chakra-system.js';
import { ayurvedaYoga } from '../lessons/phase8_ayurveda/ayurveda-yoga.js';
import { teachingYoga } from '../lessons/phase8_teaching/teaching-yoga.js';
import { advancedMeditation } from '../lessons/phase8_meditation/advanced-meditation.js';

// Category titles for each module
const categories = {
  phase1_introduction: {
    en: 'PHASE 1.1: INTRODUCTION & PHILOSOPHY',
    de: 'PHASE 1.1: EINFÜHRUNG & PHILOSOPHIE'
  },
  phase1_breathing: {
    en: 'PHASE 1.2: BREATHING (PRANAYAMA)',
    de: 'PHASE 1.2: ATMUNG (PRANAYAMA)'
  },
  phase1_alignment: {
    en: 'PHASE 1.3: ALIGNMENT & SAFETY',
    de: 'PHASE 1.3: AUSRICHTUNG & SICHERHEIT'
  },
  phase1_poses: {
    en: 'PHASE 1.4: FUNDAMENTAL POSES',
    de: 'PHASE 1.4: GRUNDPOSEN'
  },
  phase2_sun_salutation: {
    en: 'PHASE 2.1: SUN SALUTATION',
    de: 'PHASE 2.1: SONNENGRUSS'
  },
  phase2_balance: {
    en: 'PHASE 2.2: BALANCE POSES',
    de: 'PHASE 2.2: BALANCE-POSEN'
  },
  phase2_backbends: {
    en: 'PHASE 2.3: BACKBENDS',
    de: 'PHASE 2.3: RÜCKBEUGEN'
  },
  phase2_twists: {
    en: 'PHASE 2.4: TWISTS & SIDE BENDS',
    de: 'PHASE 2.4: TWISTS & SEITENDEHNUNGEN'
  },
  phase3_core: {
    en: 'PHASE 3.1: CORE STRENGTH',
    de: 'PHASE 3.1: KERNSTÄRKE'
  },
  phase3_hips: {
    en: 'PHASE 3.2: HIP OPENERS',
    de: 'PHASE 3.2: HÜFTÖFFNUNGEN'
  },
  phase3_legs: {
    en: 'PHASE 3.3: LEG STRETCHES',
    de: 'PHASE 3.3: BEINDEHNUNGEN'
  },
  phase3_arms: {
    en: 'PHASE 3.4: ARM BALANCE PREPARATION',
    de: 'PHASE 3.4: ARMSTÜTZEN VORBEREITUNG'
  },
  phase4_vinyasa: {
    en: 'PHASE 4.1: VINYASA FLOW BASICS',
    de: 'PHASE 4.1: VINYASA FLOW GRUNDLAGEN'
  },
  phase4_sequences: {
    en: 'PHASE 4.2: CLASSICAL SEQUENCES',
    de: 'PHASE 4.2: KLASSISCHE SEQUENZEN'
  },
  phase4_building: {
    en: 'PHASE 4.3: BUILDING SEQUENCES',
    de: 'PHASE 4.3: EIGENE SEQUENZEN BAUEN'
  },
  phase4_timing: {
    en: 'PHASE 4.4: TIMING & RHYTHM',
    de: 'PHASE 4.4: TIMING & RHYTHMUS'
  },
  phase5_advanced_standing: {
    en: 'PHASE 5.1: ADVANCED STANDING POSES',
    de: 'PHASE 5.1: FORTGESCHRITTENE STEHPOSEN'
  },
  phase5_arm_balances: {
    en: 'PHASE 5.2: ARM BALANCES',
    de: 'PHASE 5.2: ARMSTÜTZEN'
  },
  phase5_backbends_deep: {
    en: 'PHASE 5.3: DEEP BACKBENDS',
    de: 'PHASE 5.3: RÜCKBEUGEN VERTIEFUNG'
  },
  phase5_inversions: {
    en: 'PHASE 5.4: INVERSIONS',
    de: 'PHASE 5.4: INVERSIONEN'
  },
  phase6_yin: {
    en: 'PHASE 6.1: YIN YOGA',
    de: 'PHASE 6.1: YIN YOGA'
  },
  phase6_meditation: {
    en: 'PHASE 6.2: MEDITATION & MINDFULNESS',
    de: 'PHASE 6.2: MEDITATION & ACHTSAMKEIT'
  },
  phase6_pranayama: {
    en: 'PHASE 6.3: ADVANCED PRANAYAMA',
    de: 'PHASE 6.3: PRANAYAMA VERTIEFUNG'
  },
  phase6_philosophy: {
    en: 'PHASE 6.4: YOGA PHILOSOPHY',
    de: 'PHASE 6.4: YOGA-PHILOSOPHIE'
  },
  phase7_ashtanga: {
    en: 'PHASE 7.1: ASHTANGA YOGA',
    de: 'PHASE 7.1: ASHTANGA YOGA'
  },
  phase7_restorative: {
    en: 'PHASE 7.2: RESTORATIVE YOGA',
    de: 'PHASE 7.2: RESTORATIVE YOGA'
  },
  phase7_prenatal: {
    en: 'PHASE 7.3: PRENATAL & POSTNATAL YOGA',
    de: 'PHASE 7.3: PRÄ- & POSTNATALES YOGA'
  },
  phase7_athletes: {
    en: 'PHASE 7.4: YOGA FOR ATHLETES',
    de: 'PHASE 7.4: YOGA FÜR SPORTLER'
  },
  phase8_chakras: {
    en: 'PHASE 8.1: CHAKRA SYSTEM',
    de: 'PHASE 8.1: CHAKRA-SYSTEM'
  },
  phase8_ayurveda: {
    en: 'PHASE 8.2: AYURVEDA & YOGA',
    de: 'PHASE 8.2: AYURVEDA & YOGA'
  },
  phase8_teaching: {
    en: 'PHASE 8.3: TEACHING YOGA',
    de: 'PHASE 8.3: YOGA UNTERRICHTEN'
  },
  phase8_meditation: {
    en: 'PHASE 8.4: ADVANCED MEDITATION',
    de: 'PHASE 8.4: FORTGESCHRITTENE MEDITATION'
  }
};

// All lessons in a structured array
export const lessons = [
  // Phase 1: Die Fundamente
  {
    id: 'p1_intro_l1',
    category: 'phase1_introduction',
    categoryTitle: categories.phase1_introduction,
    ...whatIsYoga
  },
  {
    id: 'p1_intro_l2',
    category: 'phase1_introduction',
    categoryTitle: categories.phase1_introduction,
    ...yogaEtiquette
  },
  {
    id: 'p1_breath_l1',
    category: 'phase1_breathing',
    categoryTitle: categories.phase1_breathing,
    ...naturalBreathing
  },
  {
    id: 'p1_breath_l2',
    category: 'phase1_breathing',
    categoryTitle: categories.phase1_breathing,
    ...ujjayiBreath
  },
  {
    id: 'p1_align_l1',
    category: 'phase1_alignment',
    categoryTitle: categories.phase1_alignment,
    ...alignmentSafety
  },
  {
    id: 'p1_align_l2',
    category: 'phase1_alignment',
    categoryTitle: categories.phase1_alignment,
    ...modificationsProps
  },
  {
    id: 'p1_poses_l1',
    category: 'phase1_poses',
    categoryTitle: categories.phase1_poses,
    ...standingPoses
  },
  {
    id: 'p1_poses_l2',
    category: 'phase1_poses',
    categoryTitle: categories.phase1_poses,
    ...seatedPoses
  },
  {
    id: 'p1_poses_l3',
    category: 'phase1_poses',
    categoryTitle: categories.phase1_poses,
    ...lyingPoses
  },

  // Phase 2: Aufbau & Flow
  {
    id: 'p2_sun_l1',
    category: 'phase2_sun_salutation',
    categoryTitle: categories.phase2_sun_salutation,
    ...sunSalutationA
  },
  {
    id: 'p2_balance_l1',
    category: 'phase2_balance',
    categoryTitle: categories.phase2_balance,
    ...balancePoses
  },
  {
    id: 'p2_back_l1',
    category: 'phase2_backbends',
    categoryTitle: categories.phase2_backbends,
    ...backbends
  },
  {
    id: 'p2_twist_l1',
    category: 'phase2_twists',
    categoryTitle: categories.phase2_twists,
    ...twistsSidebends
  },

  // Phase 3: Stärke & Flexibilität
  {
    id: 'p3_core_l1',
    category: 'phase3_core',
    categoryTitle: categories.phase3_core,
    ...coreStrength
  },
  {
    id: 'p3_hips_l1',
    category: 'phase3_hips',
    categoryTitle: categories.phase3_hips,
    ...hipOpeners
  },
  {
    id: 'p3_legs_l1',
    category: 'phase3_legs',
    categoryTitle: categories.phase3_legs,
    ...legStretches
  },
  {
    id: 'p3_arms_l1',
    category: 'phase3_arms',
    categoryTitle: categories.phase3_arms,
    ...armBalancesPrep
  },

  // Phase 4: Flow & Sequencing
  {
    id: 'p4_vinyasa_l1',
    category: 'phase4_vinyasa',
    categoryTitle: categories.phase4_vinyasa,
    ...vinyasaBasics
  },
  {
    id: 'p4_seq_l1',
    category: 'phase4_sequences',
    categoryTitle: categories.phase4_sequences,
    ...classicalSequences
  },
  {
    id: 'p4_build_l1',
    category: 'phase4_building',
    categoryTitle: categories.phase4_building,
    ...buildingSequences
  },
  {
    id: 'p4_timing_l1',
    category: 'phase4_timing',
    categoryTitle: categories.phase4_timing,
    ...timingRhythm
  },

  // Phase 5: Vertiefung
  {
    id: 'p5_stand_l1',
    category: 'phase5_advanced_standing',
    categoryTitle: categories.phase5_advanced_standing,
    ...advancedStanding
  },
  {
    id: 'p5_arms_l1',
    category: 'phase5_arm_balances',
    categoryTitle: categories.phase5_arm_balances,
    ...armBalances
  },
  {
    id: 'p5_back_l1',
    category: 'phase5_backbends_deep',
    categoryTitle: categories.phase5_backbends_deep,
    ...deepBackbends
  },
  {
    id: 'p5_inv_l1',
    category: 'phase5_inversions',
    categoryTitle: categories.phase5_inversions,
    ...inversions
  },

  // Phase 6: Spezialisierung
  {
    id: 'p6_yin_l1',
    category: 'phase6_yin',
    categoryTitle: categories.phase6_yin,
    ...yinYoga
  },
  {
    id: 'p6_med_l1',
    category: 'phase6_meditation',
    categoryTitle: categories.phase6_meditation,
    ...meditation
  },
  {
    id: 'p6_prana_l1',
    category: 'phase6_pranayama',
    categoryTitle: categories.phase6_pranayama,
    ...advancedPranayama
  },
  {
    id: 'p6_phil_l1',
    category: 'phase6_philosophy',
    categoryTitle: categories.phase6_philosophy,
    ...yogaPhilosophy
  },

  // Phase 7: Fortgeschrittene Praxis
  {
    id: 'p7_ashtanga_l1',
    category: 'phase7_ashtanga',
    categoryTitle: categories.phase7_ashtanga,
    ...ashtangaYoga
  },
  {
    id: 'p7_restorative_l1',
    category: 'phase7_restorative',
    categoryTitle: categories.phase7_restorative,
    ...restorativeYoga
  },
  {
    id: 'p7_prenatal_l1',
    category: 'phase7_prenatal',
    categoryTitle: categories.phase7_prenatal,
    ...prenatalPostnatal
  },
  {
    id: 'p7_athletes_l1',
    category: 'phase7_athletes',
    categoryTitle: categories.phase7_athletes,
    ...yogaForAthletes
  },

  // Phase 8: Integration
  {
    id: 'p8_chakras_l1',
    category: 'phase8_chakras',
    categoryTitle: categories.phase8_chakras,
    ...chakraSystem
  },
  {
    id: 'p8_ayurveda_l1',
    category: 'phase8_ayurveda',
    categoryTitle: categories.phase8_ayurveda,
    ...ayurvedaYoga
  },
  {
    id: 'p8_teaching_l1',
    category: 'phase8_teaching',
    categoryTitle: categories.phase8_teaching,
    ...teachingYoga
  },
  {
    id: 'p8_meditation_l1',
    category: 'phase8_meditation',
    categoryTitle: categories.phase8_meditation,
    ...advancedMeditation
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
