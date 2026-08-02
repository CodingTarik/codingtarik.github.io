// Magic Tricks Lessons
import { memoryCardTrick } from '../lessons/magic-tricks/memory-card-trick.js';
import { cardToTop } from '../lessons/magic-tricks/card-to-top.js';
import { coinBehindEar } from '../lessons/magic-tricks/coin-behind-ear.js';

// Communication Lessons
import { howToWinFriends } from '../lessons/communication/how-to-win-friends.js';
import { captivate } from '../lessons/communication/captivate.jsx';
import { bodyLanguage } from '../lessons/communication/body-language.js';
import { conflictResolution } from '../lessons/communication/conflict-resolution.js';

// Productivity Lessons
import { atomicHabits } from '../lessons/productivity/atomic-habits.js';

// Finance Lessons
import { financialBasics } from '../lessons/finance/financial-basics.js';
import { investingEtfs } from '../lessons/finance/investing-etfs.js';
import { taxesInsurance } from '../lessons/finance/taxes-insurance.js';
import { debtManagement } from '../lessons/finance/debt-management.js';

// Career Lessons
import { jobApplications } from '../lessons/career/job-applications.js';
import { interviews } from '../lessons/career/interviews.js';
import { salaryNegotiation } from '../lessons/career/salary-negotiation.js';

// Household Lessons
import { laundryBasics } from '../lessons/household/laundry-basics.js';
import { cleaningHome } from '../lessons/household/cleaning-home.js';
import { foodStorage } from '../lessons/household/food-storage.js';

// DIY & Craftsmanship Lessons
import { basicTools } from '../lessons/diy/basic-tools.js';
import { homeRepairs } from '../lessons/diy/home-repairs.js';

// Outdoor & Survival Lessons
import { fireMaking } from '../lessons/outdoor/fire-making.js';
import { knots } from '../lessons/outdoor/knots.js';
import { orientation } from '../lessons/outdoor/orientation.js';

// First Aid Lessons
import { firstAidBasics } from '../lessons/first-aid/first-aid-basics.js';
import { woundCare } from '../lessons/first-aid/wound-care.js';

// Philosophy & Mindset Lessons
import { stoicismBasics } from '../lessons/philosophy/stoicism-basics.js';
import { decisionMaking } from '../lessons/philosophy/decision-making.js';

// Games & Strategy Lessons
import { pokerBasics } from '../lessons/games/poker-basics.js';
import { chessBasics } from '../lessons/games/chess-basics.js';

// New Lessons
import { publicSpeaking } from '../lessons/communication/public-speaking.js';
import { emotionalIntelligence } from '../lessons/communication/emotional-intelligence.js';
import { timeManagement } from '../lessons/productivity/time-management.js';
import { networking } from '../lessons/career/networking.js';
import { criticalThinking } from '../lessons/philosophy/critical-thinking.js';
import { basicLegal } from '../lessons/legal/basic-legal.js';
import { movingOut } from '../lessons/independent-living/moving-out.js';
import { carBasics } from '../lessons/diy/car-basics.js';
import { sewingClothing } from '../lessons/household/sewing-clothing.js';
import { digitalLiteracy } from '../lessons/digital/digital-literacy.js';
import { mindfulnessStress } from '../lessons/wellness/mindfulness-stress.js';
import { travelPlanning } from '../lessons/travel/travel-planning.js';

// Combine all lessons
export const lessons = [
  // Communication & Influence
  {
    ...howToWinFriends,
    category: 'communication',
    categoryTitle: {
      en: 'Communication & Influence',
      de: 'Kommunikation & Einfluss'
    }
  },
  {
    ...captivate,
    category: 'communication',
    categoryTitle: {
      en: 'Communication & Influence',
      de: 'Kommunikation & Einfluss'
    }
  },
  {
    ...bodyLanguage,
    category: 'communication',
    categoryTitle: {
      en: 'Communication & Influence',
      de: 'Kommunikation & Einfluss'
    }
  },
  {
    ...conflictResolution,
    category: 'communication',
    categoryTitle: {
      en: 'Communication & Influence',
      de: 'Kommunikation & Einfluss'
    }
  },
  // Productivity & Habits
  {
    ...atomicHabits,
    category: 'productivity',
    categoryTitle: {
      en: 'Productivity & Habits',
      de: 'Produktivität & Gewohnheiten'
    }
  },
  // Finance & Wealth Building
  {
    ...financialBasics,
    category: 'finance',
    categoryTitle: {
      en: 'Finance & Wealth Building',
      de: 'Finanzen & Vermögensaufbau'
    }
  },
  {
    ...investingEtfs,
    category: 'finance',
    categoryTitle: {
      en: 'Finance & Wealth Building',
      de: 'Finanzen & Vermögensaufbau'
    }
  },
  {
    ...taxesInsurance,
    category: 'finance',
    categoryTitle: {
      en: 'Finance & Wealth Building',
      de: 'Finanzen & Vermögensaufbau'
    }
  },
  {
    ...debtManagement,
    category: 'finance',
    categoryTitle: {
      en: 'Finance & Wealth Building',
      de: 'Finanzen & Vermögensaufbau'
    }
  },
  // Career & Professional Life
  {
    ...jobApplications,
    category: 'career',
    categoryTitle: {
      en: 'Career & Professional Life',
      de: 'Karriere & Berufswelt'
    }
  },
  {
    ...interviews,
    category: 'career',
    categoryTitle: {
      en: 'Career & Professional Life',
      de: 'Karriere & Berufswelt'
    }
  },
  {
    ...salaryNegotiation,
    category: 'career',
    categoryTitle: {
      en: 'Career & Professional Life',
      de: 'Karriere & Berufswelt'
    }
  },
  // Household & Home Management
  {
    ...laundryBasics,
    category: 'household',
    categoryTitle: {
      en: 'Household & Home Management',
      de: 'Haushalt & Wohnen'
    }
  },
  {
    ...cleaningHome,
    category: 'household',
    categoryTitle: {
      en: 'Household & Home Management',
      de: 'Haushalt & Wohnen'
    }
  },
  {
    ...foodStorage,
    category: 'household',
    categoryTitle: {
      en: 'Household & Home Management',
      de: 'Haushalt & Wohnen'
    }
  },
  // DIY & Craftsmanship
  {
    ...basicTools,
    category: 'diy',
    categoryTitle: {
      en: 'DIY & Craftsmanship',
      de: 'DIY & Handwerk'
    }
  },
  {
    ...homeRepairs,
    category: 'diy',
    categoryTitle: {
      en: 'DIY & Craftsmanship',
      de: 'DIY & Handwerk'
    }
  },
  // Outdoor & Survival
  {
    ...fireMaking,
    category: 'outdoor',
    categoryTitle: {
      en: 'Outdoor & Survival',
      de: 'Outdoor & Survival'
    }
  },
  {
    ...knots,
    category: 'outdoor',
    categoryTitle: {
      en: 'Outdoor & Survival',
      de: 'Outdoor & Survival'
    }
  },
  {
    ...orientation,
    category: 'outdoor',
    categoryTitle: {
      en: 'Outdoor & Survival',
      de: 'Outdoor & Survival'
    }
  },
  // First Aid & Emergency
  {
    ...firstAidBasics,
    category: 'firstaid',
    categoryTitle: {
      en: 'First Aid & Emergency',
      de: 'Erste Hilfe & Notfall'
    }
  },
  {
    ...woundCare,
    category: 'firstaid',
    categoryTitle: {
      en: 'First Aid & Emergency',
      de: 'Erste Hilfe & Notfall'
    }
  },
  // Philosophy & Mindset
  {
    ...stoicismBasics,
    category: 'philosophy',
    categoryTitle: {
      en: 'Philosophy & Mindset',
      de: 'Philosophie & Mindset'
    }
  },
  {
    ...decisionMaking,
    category: 'philosophy',
    categoryTitle: {
      en: 'Philosophy & Mindset',
      de: 'Philosophie & Mindset'
    }
  },
  // Games & Strategy
  {
    ...pokerBasics,
    category: 'games',
    categoryTitle: {
      en: 'Board Games & Strategy',
      de: 'Gesellschaftsspiele & Strategie'
    }
  },
  {
    ...chessBasics,
    category: 'games',
    categoryTitle: {
      en: 'Board Games & Strategy',
      de: 'Gesellschaftsspiele & Strategie'
    }
  },
  // Magic & Entertainment
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
  },
  // Public Speaking
  {
    ...publicSpeaking,
    category: 'communication',
    categoryTitle: {
      en: 'Communication & Influence',
      de: 'Kommunikation & Einfluss'
    }
  },
  // Emotional Intelligence
  {
    ...emotionalIntelligence,
    category: 'communication',
    categoryTitle: {
      en: 'Communication & Influence',
      de: 'Kommunikation & Einfluss'
    }
  },
  // Time Management
  {
    ...timeManagement,
    category: 'productivity',
    categoryTitle: {
      en: 'Productivity & Habits',
      de: 'Produktivität & Gewohnheiten'
    }
  },
  // Networking
  {
    ...networking,
    category: 'career',
    categoryTitle: {
      en: 'Career & Professional Life',
      de: 'Karriere & Berufswelt'
    }
  },
  // Critical Thinking
  {
    ...criticalThinking,
    category: 'philosophy',
    categoryTitle: {
      en: 'Philosophy & Mindset',
      de: 'Philosophie & Mindset'
    }
  },
  // Basic Legal Knowledge
  {
    ...basicLegal,
    category: 'legal',
    categoryTitle: {
      en: 'Legal & Consumer Rights',
      de: 'Recht & Verbraucherrechte'
    }
  },
  // Moving Out Guide
  {
    ...movingOut,
    category: 'independent-living',
    categoryTitle: {
      en: 'Independent Living',
      de: 'Eigenständig leben'
    }
  },
  // Car Basics
  {
    ...carBasics,
    category: 'diy',
    categoryTitle: {
      en: 'DIY & Craftsmanship',
      de: 'DIY & Handwerk'
    }
  },
  // Sewing & Clothing Care
  {
    ...sewingClothing,
    category: 'household',
    categoryTitle: {
      en: 'Household & Home Management',
      de: 'Haushalt & Wohnen'
    }
  },
  // Digital Literacy
  {
    ...digitalLiteracy,
    category: 'digital',
    categoryTitle: {
      en: 'Digital Literacy & Safety',
      de: 'Digitale Kompetenz & Sicherheit'
    }
  },
  // Mindfulness & Stress Management
  {
    ...mindfulnessStress,
    category: 'wellness',
    categoryTitle: {
      en: 'Wellness & Mental Health',
      de: 'Wohlbefinden & Mentale Gesundheit'
    }
  },
  // Travel Planning
  {
    ...travelPlanning,
    category: 'travel',
    categoryTitle: {
      en: 'Travel & Adventure',
      de: 'Reisen & Abenteuer'
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
