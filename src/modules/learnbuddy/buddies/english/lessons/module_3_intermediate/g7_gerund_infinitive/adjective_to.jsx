import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  { prompt: { en: "It's difficult ___ learn a new language.", de: "Es ist schwierig, eine neue Sprache zu lernen." }, words: ["to", "for", "-ing", "at"], correct: "to", explanation: { en: "It's + adjective + to + verb.", de: "It's + Adjektiv + to + Verb." } },
  { prompt: { en: "I was surprised ___ see her there.", de: "Ich war überrascht, sie dort zu sehen." }, words: ["to", "for", "at", "-ing"], correct: "to", explanation: { en: "adjective + to + verb (reaction).", de: "Adjektiv + to + Verb (Reaktion)." } },
  { prompt: { en: "It was nice ___ you to help.", de: "Es war nett von dir, zu helfen." }, words: ["of", "for", "to", "at"], correct: "of", explanation: { en: "It's nice/kind OF someone to do something.", de: "It's nice/kind OF someone, etwas zu tun." } }
];

const fixTheMistakeData = [
  { sentence: "It's important learn English.", mistakeIndex: 2, correction: "to learn", explanation: { en: "It's + adjective + TO + verb.", de: "It's + Adjektiv + TO + Verb." } },
  { sentence: "It was kind for you to help.", mistakeIndex: 2, correction: "of", explanation: { en: "It's kind/nice OF someone.", de: "It's kind/nice OF someone." } },
  { sentence: "This exercise is easy for do.", mistakeIndex: 4, correction: "to do", explanation: { en: "adjective + to + verb: 'easy to do'.", de: "Adjektiv + to + Verb: 'easy to do'." } }
];

const grammarRacerData = [
  { prompt: "It was stupid ___ him to say that.", options: ["of", "for", "to"], correct: "of", explanation: "Character judgment = OF." },
  { prompt: "This book is easy ___.", options: ["to read", "reading", "for read"], correct: "to read", explanation: "Adjective + to + verb." },
  { prompt: "I was happy ___ hear the news.", options: ["to", "for", "of"], correct: "to", explanation: "Emotion adjective + to." }
];

export const adjectiveTo = {
  id: 'b1_g65',
  title: { en: 'Adjective + to (infinitive)', de: 'Adjektiv + to (Infinitiv)' },
  description: { en: "Patterns: 'It's easy to learn', 'I was happy to hear', 'It was kind of you to help'.", de: "Muster: 'It's easy to learn', 'I was happy to hear', 'It was kind of you to help'." },
  components: { sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />, fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />, grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} /> },
  content: {
    en: `
## Adjective + to (Infinitive) 📐

### 1. It's + adjective + to + verb
- "It's **easy to make** mistakes." / "It's **important to study**."

### 2. Adjective + to (Reactions/Feelings)
- "I was **happy to hear** the news." / "She was **surprised to see** me."

### 3. It's + adjective + of/for someone + to
- **OF** (character judgment): "It was **kind of** you **to help**." / "It was **stupid of** him **to say** that."
- **FOR** (purpose/suitability): "It's **important for** students **to read**." / "It was **difficult for** me **to understand**."

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Adjektiv + to (Infinitiv) 📐

### 1. It's + Adjektiv + to + Verb
- "It's **easy to make** mistakes." / "It's **important to study**."

### 2. Adjektiv + to (Reaktionen/Gefühle)
- "I was **happy to hear** the news." / "She was **surprised to see** me."

### 3. It's + Adjektiv + of/for someone + to
- **OF** (Charakterbeurteilung): "It was **kind of** you **to help**." / "It was **stupid of** him **to say** that."
- **FOR** (Zweck/Eignung): "It's **important for** students **to read**." / "It was **difficult for** me **to understand**."

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: { en: { title: 'Adjective + to', description: 'Practice adjective + infinitive patterns.', checklist: [{ text: "Write 3 'It's + adj + to' sentences", checked: false }, { text: "Write 3 reaction sentences (happy/surprised to)", checked: false }, { text: "Write 2 sentences each with of and for", checked: false }] }, de: { title: 'Adjektiv + to', description: 'Übe Adjektiv + Infinitiv Muster.', checklist: [{ text: "Schreibe 3 'It's + Adj + to' Sätze", checked: false }, { text: "Schreibe 3 Reaktionssätze (happy/surprised to)", checked: false }, { text: "Schreibe je 2 Sätze mit of und for", checked: false }] } },
  quiz: { en: [], de: [] }
};
