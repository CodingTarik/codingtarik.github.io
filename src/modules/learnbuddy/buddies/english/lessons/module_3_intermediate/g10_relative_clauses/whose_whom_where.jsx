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

export const whoseWhomWhere = {
  id: 'b1_g94',
  title: { en: "Relative clauses 3 (whose/whom/where)", de: "Relativsätze 3 (whose/whom/where)" },
  description: { en: "Whose (possession), whom (formal object), where (place).", de: "Whose (Besitz), whom (formales Objekt), where (Ort)." },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Relative clauses 3 (whose/whom/where) 📚

This lesson covers whose (possession), whom (formal object), where (place).

Detailed explanations and examples coming soon.

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Relativsätze 3 (whose/whom/where) 📚

Diese Lektion behandelt whose (besitz), whom (formales objekt), where (ort).

Detaillierte Erklärungen und Beispiele kommen bald.

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: { title: "Relative clauses 3 (whose/whom/where)", description: 'Practice this grammar topic.', checklist: [{ text: 'Study the rules and examples', checked: false }, { text: 'Complete the exercises', checked: false }, { text: 'Write your own example sentences', checked: false }] },
    de: { title: "Relativsätze 3 (whose/whom/where)", description: 'Übe dieses Grammatik-Thema.', checklist: [{ text: 'Lerne die Regeln und Beispiele', checked: false }, { text: 'Mache die Übungen', checked: false }, { text: 'Schreibe eigene Beispielsätze', checked: false }] }
  },
  quiz: { en: [], de: [] }
};
