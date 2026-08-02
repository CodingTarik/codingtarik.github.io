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

export const the3 = {
  id: 'b1_g75',
  title: { en: "Children / The children", de: "Children / The children" },
  description: { en: "General meaning (children) vs. specific group (the children).", de: "Allgemeine Bedeutung (children) vs. bestimmte Gruppe (the children)." },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Children / The children 📚

This lesson covers general meaning (children) vs. specific group (the children).

Detailed explanations and examples coming soon.

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Children / The children 📚

Diese Lektion behandelt allgemeine bedeutung (children) vs. bestimmte gruppe (the children).

Detaillierte Erklärungen und Beispiele kommen bald.

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: { title: "Children / The children", description: 'Practice this grammar topic.', checklist: [{ text: 'Study the rules and examples', checked: false }, { text: 'Complete the exercises', checked: false }, { text: 'Write your own example sentences', checked: false }] },
    de: { title: "Children / The children", description: 'Übe dieses Grammatik-Thema.', checklist: [{ text: 'Lerne die Regeln und Beispiele', checked: false }, { text: 'Mache die Übungen', checked: false }, { text: 'Schreibe eigene Beispielsätze', checked: false }] }
  },
  quiz: { en: [], de: [] }
};
