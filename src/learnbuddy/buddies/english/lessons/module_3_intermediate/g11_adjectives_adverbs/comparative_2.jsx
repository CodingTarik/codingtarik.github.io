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

export const comparative2 = {
  id: 'b1_g106',
  title: { en: "Comparative 2 (much better)", de: "Komparativ 2 (much better)" },
  description: { en: "Intensifying comparatives: much better, far more expensive, a bit older.", de: "Komparative verstärken: much better, far more expensive, a bit older." },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Comparative 2 (much better) 📚

Intensifying comparatives: much better, far more expensive, a bit older.

Detailed explanations with examples, rules, and practice exercises.

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Komparativ 2 (much better) 📚

Komparative verstärken: much better, far more expensive, a bit older.

Detaillierte Erklärungen mit Beispielen, Regeln und Übungen.

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: { title: "Comparative 2 (much better)", description: 'Practice this grammar topic.', checklist: [{ text: 'Study the rules and examples', checked: false }, { text: 'Complete the interactive exercises', checked: false }, { text: 'Write your own example sentences', checked: false }] },
    de: { title: "Komparativ 2 (much better)", description: 'Übe dieses Grammatik-Thema.', checklist: [{ text: 'Lerne die Regeln und Beispiele', checked: false }, { text: 'Mache die interaktiven Übungen', checked: false }, { text: 'Schreibe eigene Beispielsätze', checked: false }] }
  },
  quiz: { en: [], de: [] }
};
