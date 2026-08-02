import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    "prompt": {
      "en": "Complete correctly.",
      "de": "Vervollständige richtig."
    },
    "words": [
      "correct",
      "wrong1",
      "wrong2"
    ],
    "correct": "correct",
    "explanation": {
      "en": "Correct.",
      "de": "Richtig."
    }
  }
];

const fixTheMistakeData = [
  {
    "sentence": "Example mistake.",
    "mistakeIndex": 0,
    "correction": "Fixed",
    "explanation": {
      "en": "Fix.",
      "de": "Korrektur."
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

export const phrasalVerbsUpDown = {
  id: 'b1_g140',
  title: { en: "Phrasal Verbs – up/down", de: "Phrasal Verbs – up/down" },
  description: { en: "give up, pick up, turn up/down, break down, slow down, stand up.", de: "give up, pick up, turn up/down, break down, slow down, stand up." },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Phrasal Verbs – up/down 📚

give up, pick up, turn up/down, break down, slow down, stand up.

Detailed explanations with examples and practice.

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Phrasal Verbs – up/down 📚

give up, pick up, turn up/down, break down, slow down, stand up.

Detaillierte Erklärungen mit Beispielen und Übungen.

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: { title: "Phrasal Verbs – up/down", description: 'Practice this grammar topic.', checklist: [{ text: 'Study the rules and examples', checked: false }, { text: 'Complete the interactive exercises', checked: false }, { text: 'Write your own example sentences', checked: false }] },
    de: { title: "Phrasal Verbs – up/down", description: 'Übe dieses Grammatik-Thema.', checklist: [{ text: 'Lerne die Regeln und Beispiele', checked: false }, { text: 'Mache die interaktiven Übungen', checked: false }, { text: 'Schreibe eigene Beispielsätze', checked: false }] }
  },
  quiz: { en: [], de: [] }
};
