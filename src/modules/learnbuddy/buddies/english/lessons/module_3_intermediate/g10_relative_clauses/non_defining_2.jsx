import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    "prompt": {
      "en": "Complete the sentence correctly.",
      "de": "Vervollständige den Satz richtig."
    },
    "words": [
      "option1",
      "option2",
      "option3"
    ],
    "correct": "option1",
    "explanation": {
      "en": "Correct usage.",
      "de": "Korrekte Verwendung."
    }
  }
];

const fixTheMistakeData = [
  {
    "sentence": "Example with a mistake.",
    "mistakeIndex": 0,
    "correction": "Corrected",
    "explanation": {
      "en": "Explanation.",
      "de": "Erklärung."
    }
  }
];

const grammarRacerData = [
  {
    "prompt": "Quick question?",
    "options": [
      "a",
      "b",
      "c"
    ],
    "correct": "a",
    "explanation": "Reason."
  }
];

export const nonDefining2 = {
  id: 'b1_g96',
  title: { en: "Relative clauses 5 (non-defining advanced)", de: "Relativsätze 5 (nicht-bestimmend erweitert)" },
  description: { en: "Using which for whole clauses: 'He passed the exam, which surprised everyone.'", de: "'Which' für ganze Sätze: 'He passed the exam, which surprised everyone.'" },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Relative clauses 5 (non-defining advanced) 📚

This lesson covers using which for whole clauses: 'he passed the exam, which surprised everyone.'

Detailed explanations and examples coming soon.

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Relativsätze 5 (nicht-bestimmend erweitert) 📚

Diese Lektion behandelt 'which' für ganze sätze: 'he passed the exam, which surprised everyone.'

Detaillierte Erklärungen und Beispiele kommen bald.

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: { title: "Relative clauses 5 (non-defining advanced)", description: 'Practice this grammar topic.', checklist: [{ text: 'Study the rules and examples', checked: false }, { text: 'Complete the exercises', checked: false }, { text: 'Write your own example sentences', checked: false }] },
    de: { title: "Relativsätze 5 (nicht-bestimmend erweitert)", description: 'Übe dieses Grammatik-Thema.', checklist: [{ text: 'Lerne die Regeln und Beispiele', checked: false }, { text: 'Mache die Übungen', checked: false }, { text: 'Schreibe eigene Beispielsätze', checked: false }] }
  },
  quiz: { en: [], de: [] }
};
