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

export const namesThe1 = {
  id: 'b1_g77',
  title: { en: "Names with/without the 1", de: "Namen mit/ohne the 1" },
  description: { en: "Countries, cities, streets, mountains: when to use the.", de: "Länder, Städte, Straßen, Berge: wann man the benutzt." },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Names with/without the 1 📚

This lesson covers countries, cities, streets, mountains: when to use the.

Detailed explanations and examples coming soon.

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Namen mit/ohne the 1 📚

Diese Lektion behandelt länder, städte, straßen, berge: wann man the benutzt.

Detaillierte Erklärungen und Beispiele kommen bald.

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: { title: "Names with/without the 1", description: 'Practice this grammar topic.', checklist: [{ text: 'Study the rules and examples', checked: false }, { text: 'Complete the exercises', checked: false }, { text: 'Write your own example sentences', checked: false }] },
    de: { title: "Namen mit/ohne the 1", description: 'Übe dieses Grammatik-Thema.', checklist: [{ text: 'Lerne die Regeln und Beispiele', checked: false }, { text: 'Mache die Übungen', checked: false }, { text: 'Schreibe eigene Beispielsätze', checked: false }] }
  },
  quiz: { en: [], de: [] }
};
