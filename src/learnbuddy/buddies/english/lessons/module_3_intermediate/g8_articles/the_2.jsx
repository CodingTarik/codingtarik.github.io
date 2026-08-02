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

export const the2 = {
  id: 'b1_g74',
  title: { en: "School / The school", de: "School / The school" },
  description: { en: "The difference: 'go to school' (purpose) vs. 'go to the school' (building).", de: "Der Unterschied: 'go to school' (Zweck) vs. 'go to the school' (Gebäude)." },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## School / The school 📚

This lesson covers the difference: 'go to school' (purpose) vs. 'go to the school' (building).

Detailed explanations and examples coming soon.

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## School / The school 📚

Diese Lektion behandelt der unterschied: 'go to school' (zweck) vs. 'go to the school' (gebäude).

Detaillierte Erklärungen und Beispiele kommen bald.

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: { title: "School / The school", description: 'Practice this grammar topic.', checklist: [{ text: 'Study the rules and examples', checked: false }, { text: 'Complete the exercises', checked: false }, { text: 'Write your own example sentences', checked: false }] },
    de: { title: "School / The school", description: 'Übe dieses Grammatik-Thema.', checklist: [{ text: 'Lerne die Regeln und Beispiele', checked: false }, { text: 'Mache die Übungen', checked: false }, { text: 'Schreibe eigene Beispielsätze', checked: false }] }
  },
  quiz: { en: [], de: [] }
};
