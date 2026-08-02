import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  { prompt: { en: "I prefer ___ to driving.", de: "Ich bevorzuge Laufen gegenüber Fahren." }, words: ["walking", "to walk", "walk", "walked"], correct: "walking", explanation: { en: "prefer + -ing + to + -ing.", de: "prefer + -ing + to + -ing." } },
  { prompt: { en: "I'd rather ___ at home tonight.", de: "Ich würde heute Abend lieber zu Hause bleiben." }, words: ["stay", "to stay", "staying", "stayed"], correct: "stay", explanation: { en: "would rather + base form (no 'to').", de: "would rather + Grundform (kein 'to')." } },
  { prompt: { en: "I'd prefer ___ a taxi.", de: "Ich würde lieber ein Taxi nehmen." }, words: ["to take", "taking", "take", "took"], correct: "to take", explanation: { en: "would prefer + to + verb.", de: "would prefer + to + Verb." } }
];

const fixTheMistakeData = [
  { sentence: "I'd rather to stay home.", mistakeIndex: 2, correction: "stay", explanation: { en: "'Would rather' + base form (no 'to'): 'I'd rather stay'.", de: "'Would rather' + Grundform (kein 'to'): 'I'd rather stay'." } },
  { sentence: "I prefer walking than driving.", mistakeIndex: 2, correction: "to", explanation: { en: "'prefer ... TO ...' not 'than': 'prefer walking to driving'.", de: "'prefer ... TO ...' nicht 'than': 'prefer walking to driving'." } },
  { sentence: "I'd rather you don't come.", mistakeIndex: 4, correction: "didn't come", explanation: { en: "'Would rather + someone' uses past tense: 'I'd rather you didn't come'.", de: "'Would rather + jemand' benutzt Vergangenheit: 'I'd rather you didn't come'." } }
];

const grammarRacerData = [
  { prompt: "I'd rather ___ coffee than tea.", options: ["have", "to have", "having"], correct: "have", explanation: "Would rather + base form." },
  { prompt: "She prefers reading ___ watching TV.", options: ["to", "than", "over"], correct: "to", explanation: "prefer + -ing + TO + -ing." },
  { prompt: "I'd rather you ___ tell anyone. (request)", options: ["didn't", "don't", "won't"], correct: "didn't", explanation: "Would rather + person + past tense." }
];

export const preferWouldRather = {
  id: 'b1_g59',
  title: { en: 'Prefer and Would rather', de: 'Prefer und Would rather' },
  description: { en: "'I prefer walking to driving' / 'I'd rather stay home.'", de: "'I prefer walking to driving' / 'I'd rather stay home.'" },
  components: { sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />, fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />, grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} /> },
  content: {
    en: `
## Prefer and Would rather 🤔

### 1. Prefer (General) 💭
- **prefer + -ing + to + -ing**: "I **prefer walking to driving**."
- **prefer + to + verb + rather than + verb**: "I **prefer to walk rather than drive**."

### 2. Would prefer (Specific) 🎯
- **would prefer + to**: "I**'d prefer to stay** home tonight."
- **would prefer + to + rather than**: "I'd prefer **to eat out rather than cook**."

### 3. Would rather (= Would prefer) ⚡
- **would rather + base form** (NO 'to'!):
  - "I**'d rather stay** home." (= I'd prefer to stay)
  - "I**'d rather not go**." (negative)

### 4. Would rather + someone else 👥
Uses **past tense** (like Type 2 conditional):
- "I**'d rather** you **didn't** tell anyone." (= I'd prefer if you didn't)
- "I**'d rather** they **came** tomorrow."

| Structure | Example |
|-----------|---------|
| prefer + -ing + to + -ing | prefer walking **to** driving |
| would rather + base form | I'd rather **stay** |
| would rather + person + past | I'd rather you **didn't** go |

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Prefer und Would rather 🤔

### 1. Prefer (Allgemein) 💭
- **prefer + -ing + to + -ing**: "I **prefer walking to driving**."
- **prefer + to + Verb + rather than + Verb**: "I **prefer to walk rather than drive**."

### 2. Would prefer (Konkret) 🎯
- **would prefer + to**: "I**'d prefer to stay** home tonight."
- **would prefer + to + rather than**: "I'd prefer **to eat out rather than cook**."

### 3. Would rather (= Would prefer) ⚡
- **would rather + Grundform** (KEIN 'to'!):
  - "I**'d rather stay** home." (= I'd prefer to stay)
  - "I**'d rather not go**." (negativ)

### 4. Would rather + jemand anders 👥
Benutzt **Vergangenheit** (wie Typ-2-Konditional):
- "I**'d rather** you **didn't** tell anyone." (= Ich würde es vorziehen, wenn du es nicht sagst)
- "I**'d rather** they **came** tomorrow."

| Struktur | Beispiel |
|----------|----------|
| prefer + -ing + to + -ing | prefer walking **to** driving |
| would rather + Grundform | I'd rather **stay** |
| would rather + Person + Vergangenheit | I'd rather you **didn't** go |

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: { en: { title: 'Prefer / Would rather', description: 'Practice preference expressions.', checklist: [{ text: 'Write 3 general preferences with prefer', checked: false }, { text: "Write 3 specific preferences with would rather", checked: false }, { text: "Write 2 sentences with 'would rather you...'", checked: false }] }, de: { title: 'Prefer / Would rather', description: 'Übe Präferenz-Ausdrücke.', checklist: [{ text: 'Schreibe 3 allgemeine Vorlieben mit prefer', checked: false }, { text: 'Schreibe 3 konkrete Vorlieben mit would rather', checked: false }, { text: "Schreibe 2 Sätze mit 'would rather you...'", checked: false }] } },
  quiz: { en: [], de: [] }
};
