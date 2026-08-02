import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  { prompt: { en: "She's interested in ___ Spanish.", de: "Sie ist daran interessiert, Spanisch zu lernen." }, words: ["learning", "to learn", "learn", "learned"], correct: "learning", explanation: { en: "After a preposition, always use -ing.", de: "Nach einer Präposition immer -ing benutzen." } },
  { prompt: { en: "I'm tired of ___ the same thing every day.", de: "Ich bin es leid, jeden Tag das Gleiche zu tun." }, words: ["doing", "to do", "do", "did"], correct: "doing", explanation: { en: "tired of + -ing.", de: "tired of + -ing." } },
  { prompt: { en: "Thank you for ___ me.", de: "Danke, dass du mir geholfen hast." }, words: ["helping", "to help", "help", "helped"], correct: "helping", explanation: { en: "for + -ing.", de: "for + -ing." } }
];

const fixTheMistakeData = [
  { sentence: "I'm good at to cook.", mistakeIndex: 4, correction: "cooking", explanation: { en: "After prepositions, use -ing, not 'to': 'good at cooking'.", de: "Nach Präpositionen benutze -ing, nicht 'to': 'good at cooking'." } },
  { sentence: "She left without to say goodbye.", mistakeIndex: 3, correction: "saying", explanation: { en: "After 'without' (preposition), use -ing.", de: "Nach 'without' (Präposition) benutze -ing." } },
  { sentence: "He insisted on to pay the bill.", mistakeIndex: 3, correction: "paying", explanation: { en: "insisted on + -ing.", de: "insisted on + -ing." } }
];

const grammarRacerData = [
  { prompt: "I'm thinking about ___ a new car.", options: ["buying", "to buy", "buy"], correct: "buying", explanation: "about + -ing." },
  { prompt: "She apologized for ___ late.", options: ["being", "to be", "be"], correct: "being", explanation: "for + -ing." },
  { prompt: "He's afraid of ___.", options: ["flying", "to fly", "fly"], correct: "flying", explanation: "of + -ing." }
];

export const prepositionIng = {
  id: 'b1_g60',
  title: { en: 'Preposition + -ing', de: 'Präposition + -ing' },
  description: { en: "After prepositions, always use -ing: 'interested in learning', 'good at cooking'.", de: "Nach Präpositionen immer -ing: 'interested in learning', 'good at cooking'." },
  components: { sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />, fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />, grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} /> },
  content: {
    en: `
## Preposition + -ing 📐

### The Rule: After a preposition, ALWAYS use -ing ✅

| Preposition | Example |
|-------------|---------|
| **in** | interested **in learning** |
| **of** | tired **of waiting**, afraid **of flying** |
| **for** | thank you **for helping**, sorry **for being** late |
| **about** | thinking **about moving**, worried **about losing** |
| **at** | good **at cooking**, surprised **at seeing** |
| **on** | insist **on paying**, keen **on learning** |
| **to** | look forward **to meeting**, used **to living** |
| **without** | left **without saying** goodbye |
| **before/after** | **before leaving**, **after finishing** |
| **by** | by **working** hard |
| **instead of** | **instead of driving** |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Careful with 'to'!</h3>
  <p>'To' can be a preposition OR part of the infinitive:</p>
  <ul className="list-disc list-inside">
    <li>"I want <strong>to go</strong>." (to = infinitive marker)</li>
    <li>"I look forward <strong>to going</strong>." (to = preposition → -ing)</li>
    <li>"I'm used <strong>to living</strong> here." (to = preposition → -ing)</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Präposition + -ing 📐

### Die Regel: Nach einer Präposition IMMER -ing benutzen ✅

| Präposition | Beispiel |
|-------------|----------|
| **in** | interested **in learning** |
| **of** | tired **of waiting**, afraid **of flying** |
| **for** | thank you **for helping**, sorry **for being** late |
| **about** | thinking **about moving**, worried **about losing** |
| **at** | good **at cooking**, surprised **at seeing** |
| **on** | insist **on paying**, keen **on learning** |
| **to** | look forward **to meeting**, used **to living** |
| **without** | left **without saying** goodbye |
| **before/after** | **before leaving**, **after finishing** |
| **by** | by **working** hard |
| **instead of** | **instead of driving** |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Vorsicht mit 'to'!</h3>
  <p>'To' kann eine Präposition ODER Teil des Infinitivs sein:</p>
  <ul className="list-disc list-inside">
    <li>"I want <strong>to go</strong>." (to = Infinitivzeichen)</li>
    <li>"I look forward <strong>to going</strong>." (to = Präposition → -ing)</li>
    <li>"I'm used <strong>to living</strong> here." (to = Präposition → -ing)</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: { en: { title: 'Preposition + -ing', description: 'Practice -ing after prepositions.', checklist: [{ text: 'Write 5 sentences with different preposition + -ing combinations', checked: false }, { text: "Write 3 sentences with 'to' as preposition (look forward to, used to)", checked: false }, { text: 'Fix 3 common mistakes', checked: false }] }, de: { title: 'Präposition + -ing', description: 'Übe -ing nach Präpositionen.', checklist: [{ text: 'Schreibe 5 Sätze mit verschiedenen Präposition + -ing Kombinationen', checked: false }, { text: "Schreibe 3 Sätze mit 'to' als Präposition (look forward to, used to)", checked: false }, { text: 'Korrigiere 3 häufige Fehler', checked: false }] } },
  quiz: { en: [], de: [] }
};
