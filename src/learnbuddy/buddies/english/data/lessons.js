// Import A1 Grammar Lessons
import { presentContinuous } from '../lessons/module_1_foundations/g1_present/present_continuous.jsx';
import { presentSimple } from '../lessons/module_1_foundations/g1_present/present_simple.jsx';
import { presentMixed1 } from '../lessons/module_1_foundations/g1_present/present_mixed_1.jsx';
import { presentMixed2 } from '../lessons/module_1_foundations/g1_present/present_mixed_2.jsx';
import { haveGot } from '../lessons/module_1_foundations/g1_present/have_got.jsx';

import { pastSimple } from '../lessons/module_1_foundations/g2_past_future/past_simple.jsx';
import { goingTo } from '../lessons/module_1_foundations/g2_past_future/going_to.jsx';
import { willShall } from '../lessons/module_1_foundations/g2_past_future/will_shall.jsx';

import { verbToBe } from '../lessons/module_1_foundations/g0_basics/verb_to_be.jsx';
import { subjectObjectPronouns } from '../lessons/module_1_foundations/g0_basics/pronouns.jsx';
import { possessiveAdjectives } from '../lessons/module_1_foundations/g0_basics/possessive_adjectives.jsx';
import { demonstratives } from '../lessons/module_1_foundations/g0_basics/demonstratives.jsx';

import { canCouldAbleTo } from '../lessons/module_1_foundations/g3_modals_imperative/can_could_able_to.jsx';
import { politeRequests } from '../lessons/module_1_foundations/g3_modals_imperative/polite_requests.jsx';
import { imperative } from '../lessons/module_1_foundations/g3_modals_imperative/imperative.jsx';

import { questions1 } from '../lessons/module_1_foundations/g4_questions_wordorder/questions_1.jsx';
import { wordOrder1 } from '../lessons/module_1_foundations/g4_questions_wordorder/word_order_1.jsx';
import { shortAnswers } from '../lessons/module_1_foundations/g4_questions_wordorder/short_answers.jsx';

import { countableUncountable1 } from '../lessons/module_1_foundations/g5_nouns_articles_pronouns/countable_uncountable_1.jsx';
import { countableUncountable2 } from '../lessons/module_1_foundations/g5_nouns_articles_pronouns/countable_uncountable_2.jsx';
import { aAnSome } from '../lessons/module_1_foundations/g5_nouns_articles_pronouns/a_an_some.jsx';
import { aAnThe } from '../lessons/module_1_foundations/g5_nouns_articles_pronouns/a_an_the.jsx';
import { singularPlural } from '../lessons/module_1_foundations/g5_nouns_articles_pronouns/singular_plural.jsx';
import { possessiveS } from '../lessons/module_1_foundations/g5_nouns_articles_pronouns/possessive_s.jsx';
import { reflexivePronouns } from '../lessons/module_1_foundations/g5_nouns_articles_pronouns/reflexive_pronouns.jsx';
import { thereIt } from '../lessons/module_1_foundations/g5_nouns_articles_pronouns/there_it.jsx';
import { someAny } from '../lessons/module_1_foundations/g5_nouns_articles_pronouns/some_any.jsx';

import { adjectivesIngEd } from '../lessons/module_1_foundations/g6_adjectives_adverbs/adjectives_ing_ed.jsx';
import { adjectivesPosition } from '../lessons/module_1_foundations/g6_adjectives_adverbs/adjectives_position.jsx';
import { adjectivesAdverbs1 } from '../lessons/module_1_foundations/g6_adjectives_adverbs/adjectives_adverbs_1.jsx';
import { comparative1 } from '../lessons/module_1_foundations/g6_adjectives_adverbs/comparative_1.jsx';
import { superlative } from '../lessons/module_1_foundations/g6_adjectives_adverbs/superlative.jsx';

import { atOnInTime } from '../lessons/module_1_foundations/g7_prepositions/at_on_in_time.jsx';
import { inAtOnPosition1 } from '../lessons/module_1_foundations/g7_prepositions/in_at_on_position_1.jsx';
import { inAtOnPosition2 } from '../lessons/module_1_foundations/g7_prepositions/in_at_on_position_2.jsx';
import { prepositionsOfPlace } from '../lessons/module_1_foundations/g7_prepositions/prepositions_of_place.jsx';

// Import A2 Grammar Lessons
import { pastContinuous } from '../lessons/module_2_elementary/g1_tenses/past_continuous.jsx';
import { presentPerfect1 } from '../lessons/module_2_elementary/g1_tenses/present_perfect_1.jsx';
import { presentPerfect2 } from '../lessons/module_2_elementary/g1_tenses/present_perfect_2.jsx';
import { howLongHaveYouBeen } from '../lessons/module_2_elementary/g1_tenses/how_long_have_you_been.jsx';
import { forAndSince } from '../lessons/module_2_elementary/g1_tenses/for_and_since.jsx';
import { presentPerfectAndPast1 } from '../lessons/module_2_elementary/g1_tenses/present_perfect_and_past_1.jsx';
import { presentPerfectAndPast2 } from '../lessons/module_2_elementary/g1_tenses/present_perfect_and_past_2.jsx';
import { presentTensesForFuture } from '../lessons/module_2_elementary/g1_tenses/present_tenses_for_future.jsx';
import { willAndGoingTo } from '../lessons/module_2_elementary/g1_tenses/will_and_going_to.jsx';

import { usedTo } from '../lessons/module_2_elementary/g2_modals/used_to.jsx';
import { mayAndMight1 } from '../lessons/module_2_elementary/g2_modals/may_and_might_1.jsx';
import { mayAndMight2 } from '../lessons/module_2_elementary/g2_modals/may_and_might_2.jsx';
import { haveToAndMust } from '../lessons/module_2_elementary/g2_modals/have_to_and_must.jsx';
import { should1 } from '../lessons/module_2_elementary/g2_modals/should_1.jsx';

import { ifIDo } from '../lessons/module_2_elementary/g3_conditional_passive/if_i_do.jsx';
import { passive1 } from '../lessons/module_2_elementary/g3_conditional_passive/passive_1.jsx';

// New A2 Grammar Lessons
import { verbPlusIng } from '../lessons/module_2_elementary/g5_gerund_infinitive/verb_plus_ing.jsx';
import { verbPlusTo } from '../lessons/module_2_elementary/g5_gerund_infinitive/verb_plus_to.jsx';
import { purposeExpressions } from '../lessons/module_2_elementary/g5_gerund_infinitive/purpose_expressions.jsx';
import { negationPronouns } from '../lessons/module_2_elementary/g6_pronouns_quantifiers/negation_pronouns.jsx';

// Define lesson categories
export const categories = {
  a1_grammar: {
    en: 'A1 Grammar - Beginner',
    de: 'A1 Grammatik - Anfänger'
  },
  a2_grammar: {
    en: 'A2 Grammar - Elementary',
    de: 'A2 Grammatik - Grundlagen'
  },
  b1_grammar: {
    en: 'B1 Grammar - Intermediate',
    de: 'B1 Grammatik - Mittelstufe'
  },
  b2_grammar: {
    en: 'B2 Grammar - Upper Intermediate',
    de: 'B2 Grammatik - Fortgeschritten'
  },
  c1_grammar: {
    en: 'C1 Grammar - Advanced',
    de: 'C1 Grammatik - Sehr Fortgeschritten'
  },
  c2_grammar: {
    en: 'C2 Grammar - Proficiency',
    de: 'C2 Grammatik - Experte'
  }
};

// Define groups (New Feature)
export const groups = {
  // A1 Groups
  basics: {
    id: 'basics',
    title: { en: '1.0 Essentials & Basics', de: '1.0 Grundlagen & Essentials' }
  },
  present_tenses: {
    id: 'present_tenses',
    title: { en: '1.1 Present Tenses', de: '1.1 Gegenwart (Present)' }
  },
  past_future: {
    id: 'past_future',
    title: { en: '1.2 Past & Future (Basics)', de: '1.2 Vergangenheit & Zukunft (Basis)' }
  },
  modals_imperative: {
    id: 'modals_imperative',
    title: { en: '1.3 Modals & Imperative (Basics)', de: '1.3 Modalverben & Imperativ (Basis)' }
  },
  questions_wordorder: {
    id: 'questions_wordorder',
    title: { en: '1.4 Questions & Word Order (Basics)', de: '1.4 Fragen & Satzbau (Basis)' }
  },
  nouns_articles_pronouns: {
    id: 'nouns_articles_pronouns',
    title: { en: '1.5 Nouns, Articles & Pronouns (Basics)', de: '1.5 Nomen, Artikel & Pronomen (Basis)' }
  },
  adjectives_adverbs: {
    id: 'adjectives_adverbs',
    title: { en: '1.6 Adjectives & Adverbs (Basics)', de: '1.6 Adjektive & Adverbien (Basis)' }
  },
  prepositions: {
    id: 'prepositions',
    title: { en: '1.7 Prepositions (Basics)', de: '1.7 Präpositionen (Basis)' }
  },
  // A2 Groups
  a2_tenses: {
    id: 'a2_tenses',
    title: { en: '2.1 Tenses (Advanced)', de: '2.1 Zeitformen (Erweitert)' }
  },
  a2_modals: {
    id: 'a2_modals',
    title: { en: '2.2 Modals & Related (Advanced)', de: '2.2 Modalverben & Verwandtes (Erweitert)' }
  },
  a2_conditional_passive: {
    id: 'a2_conditional_passive',
    title: { en: '2.3 Conditional & Passive (Basics)', de: '2.3 Konditional & Passiv (Basis)' }
  },
  a2_reported_speech: {
    id: 'a2_reported_speech',
    title: { en: '2.4 Reported Speech & Questions (Basics)', de: '2.4 Indirekte Rede & Fragen (Basis)' }
  },
  a2_gerund_infinitive: {
    id: 'a2_gerund_infinitive',
    title: { en: '2.5 Gerund/Infinitive (Basics)', de: '2.5 Gerund/Infinitiv (Basis)' }
  },
  a2_pronouns_quantifiers: {
    id: 'a2_pronouns_quantifiers',
    title: { en: '2.6 Pronouns & Quantifiers (Advanced)', de: '2.6 Pronomen & Quantifiers (Erweitert)' }
  },
  a2_relative_clauses: {
    id: 'a2_relative_clauses',
    title: { en: '2.7 Relative Clauses (Basics)', de: '2.7 Relativsätze (Basis)' }
  },
  a2_adjectives_adverbs: {
    id: 'a2_adjectives_adverbs',
    title: { en: '2.8 Adjectives/Adverbs & Comparisons', de: '2.8 Adjektive/Adverben & Vergleiche' }
  },
  a2_conjunctions_prepositions: {
    id: 'a2_conjunctions_prepositions',
    title: { en: '2.9 Conjunctions & Prepositions', de: '2.9 Konjunktionen & Präpositionen' }
  }
};

// All lessons with IDs and categories and Groups
export const lessons = [
  // --- A1: BASICS ---
  {
    category: 'a1_grammar',
    group: groups.basics,
    ...verbToBe
  },
  {
    category: 'a1_grammar',
    group: groups.basics,
    ...subjectObjectPronouns
  },
  {
    category: 'a1_grammar',
    group: groups.basics,
    ...possessiveAdjectives
  },
  {
    category: 'a1_grammar',
    group: groups.basics,
    ...demonstratives
  },
  
  // --- A1: PRESENT TENSES ---
  {
    category: 'a1_grammar',
    group: groups.present_tenses,
    ...presentContinuous
  },
  {
    category: 'a1_grammar',
    group: groups.present_tenses,
    ...presentSimple
  },
  {
    category: 'a1_grammar',
    group: groups.present_tenses,
    ...presentMixed1
  },
  {
    category: 'a1_grammar',
    group: groups.present_tenses,
    ...presentMixed2
  },
  {
    category: 'a1_grammar',
    group: groups.present_tenses,
    ...haveGot
  },

  // --- A1: PAST & FUTURE ---
  {
    category: 'a1_grammar',
    group: groups.past_future,
    ...pastSimple
  },
  {
    category: 'a1_grammar',
    group: groups.past_future,
    ...goingTo
  },
  {
    category: 'a1_grammar',
    group: groups.past_future,
    ...willShall
  },

  // --- A1: MODALS & IMPERATIVE ---
  {
    category: 'a1_grammar',
    group: groups.modals_imperative,
    ...canCouldAbleTo
  },
  {
    category: 'a1_grammar',
    group: groups.modals_imperative,
    ...politeRequests
  },
  {
    category: 'a1_grammar',
    group: groups.modals_imperative,
    ...imperative
  },

  // --- A1: QUESTIONS & WORD ORDER ---
  {
    category: 'a1_grammar',
    group: groups.questions_wordorder,
    ...questions1
  },
  {
    category: 'a1_grammar',
    group: groups.questions_wordorder,
    ...wordOrder1
  },
  {
    category: 'a1_grammar',
    group: groups.questions_wordorder,
    ...shortAnswers
  },

  // --- A1: NOUNS, ARTICLES & PRONOUNS ---
  {
    category: 'a1_grammar',
    group: groups.nouns_articles_pronouns,
    ...countableUncountable1
  },
  {
    category: 'a1_grammar',
    group: groups.nouns_articles_pronouns,
    ...countableUncountable2
  },
  {
    category: 'a1_grammar',
    group: groups.nouns_articles_pronouns,
    ...aAnSome
  },
  {
    category: 'a1_grammar',
    group: groups.nouns_articles_pronouns,
    ...aAnThe
  },
  {
    category: 'a1_grammar',
    group: groups.nouns_articles_pronouns,
    ...singularPlural
  },
  {
    category: 'a1_grammar',
    group: groups.nouns_articles_pronouns,
    ...possessiveS
  },
  {
    category: 'a1_grammar',
    group: groups.nouns_articles_pronouns,
    ...reflexivePronouns
  },
  {
    category: 'a1_grammar',
    group: groups.nouns_articles_pronouns,
    ...thereIt
  },
  {
    category: 'a1_grammar',
    group: groups.nouns_articles_pronouns,
    ...someAny
  },

  // --- A1: ADJECTIVES & ADVERBS ---
  {
    category: 'a1_grammar',
    group: groups.adjectives_adverbs,
    ...adjectivesIngEd
  },
  {
    category: 'a1_grammar',
    group: groups.adjectives_adverbs,
    ...adjectivesPosition
  },
  {
    category: 'a1_grammar',
    group: groups.adjectives_adverbs,
    ...adjectivesAdverbs1
  },
  {
    category: 'a1_grammar',
    group: groups.adjectives_adverbs,
    ...comparative1
  },
  {
    category: 'a1_grammar',
    group: groups.adjectives_adverbs,
    ...superlative
  },

  // --- A1: PREPOSITIONS ---
  {
    category: 'a1_grammar',
    group: groups.prepositions,
    ...atOnInTime
  },
  {
    category: 'a1_grammar',
    group: groups.prepositions,
    ...inAtOnPosition1
  },
  {
    category: 'a1_grammar',
    group: groups.prepositions,
    ...inAtOnPosition2
  },
  {
    category: 'a1_grammar',
    group: groups.prepositions,
    ...prepositionsOfPlace
  },

  // --- A2: TENSES (ADVANCED) ---
  {
    category: 'a2_grammar',
    group: groups.a2_tenses,
    ...pastContinuous
  },
  {
    category: 'a2_grammar',
    group: groups.a2_tenses,
    ...presentPerfect1
  },
  {
    category: 'a2_grammar',
    group: groups.a2_tenses,
    ...presentPerfect2
  },
  {
    category: 'a2_grammar',
    group: groups.a2_tenses,
    ...howLongHaveYouBeen
  },
  {
    category: 'a2_grammar',
    group: groups.a2_tenses,
    ...forAndSince
  },
  {
    category: 'a2_grammar',
    group: groups.a2_tenses,
    ...presentPerfectAndPast1
  },
  {
    category: 'a2_grammar',
    group: groups.a2_tenses,
    ...presentPerfectAndPast2
  },
  {
    category: 'a2_grammar',
    group: groups.a2_tenses,
    ...presentTensesForFuture
  },
  {
    category: 'a2_grammar',
    group: groups.a2_tenses,
    ...willAndGoingTo
  },

  // --- A2: MODALS & RELATED (ADVANCED) ---
  {
    category: 'a2_grammar',
    group: groups.a2_modals,
    ...usedTo
  },
  {
    category: 'a2_grammar',
    group: groups.a2_modals,
    ...mayAndMight1
  },
  {
    category: 'a2_grammar',
    group: groups.a2_modals,
    ...mayAndMight2
  },
  {
    category: 'a2_grammar',
    group: groups.a2_modals,
    ...haveToAndMust
  },
  {
    category: 'a2_grammar',
    group: groups.a2_modals,
    ...should1
  },

  // --- A2: CONDITIONAL & PASSIVE ---
  {
    category: 'a2_grammar',
    group: groups.a2_conditional_passive,
    ...ifIDo
  },
  {
    category: 'a2_grammar',
    group: groups.a2_conditional_passive,
    ...passive1
  },

  // New A2 Lessons: Gerund/Infinitive
  {
    category: 'a2_grammar',
    group: groups.a2_gerund_infinitive,
    ...verbPlusIng
  },
  {
    category: 'a2_grammar',
    group: groups.a2_gerund_infinitive,
    ...verbPlusTo
  },
  {
    category: 'a2_grammar',
    group: groups.a2_gerund_infinitive,
    ...purposeExpressions
  },

  // New A2 Lessons: Pronouns & Quantifiers
  {
    category: 'a2_grammar',
    group: groups.a2_pronouns_quantifiers,
    ...negationPronouns
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

// Helper function to get lessons by category
export function getLessonsByCategory(categoryId) {
  return lessons.filter(lesson => lesson.category === categoryId);
}
