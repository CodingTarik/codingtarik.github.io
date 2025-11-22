import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const fixTheMistakeData = [
  {
    sentence: "I will to help you.",
    mistakeIndex: 1,
    correction: "will",
    explanation: { en: "No 'to' after will! 'I will help'.", de: "Kein 'to' nach will! 'I will help'." }
  },
  {
    sentence: "She wills come later.",
    mistakeIndex: 1,
    correction: "will",
    explanation: { en: "No 's' for will. It never changes.", de: "Kein 's' bei will. Es ändert sich nie." }
  },
  {
    sentence: "Do you will go?",
    mistakeIndex: 0,
    correction: "Will",
    explanation: { en: "Question: 'Will you go?'", de: "Frage: 'Will you go?'" }
  }
];

const grammarRacerData = [
  {
    prompt: "The phone is ringing. I ___ answer it.",
    options: ["will", "am going to"],
    correct: "will",
    explanation: "Spontaneous decision"
  },
  {
    prompt: "I promise I ___ tell anyone.",
    options: ["will not", "don't will"],
    correct: "will not",
    explanation: "Promise (will not / won't)"
  },
  {
    prompt: "___ I open the window?",
    options: ["Will", "Shall", "Do"],
    correct: "Shall",
    explanation: "Offer / Suggestion (I/We)"
  },
  {
    prompt: "I think he ___ like the gift.",
    options: ["will", "is going to"],
    correct: "will",
    explanation: "Prediction (I think/believe)"
  }
];

export const willShall = {
  id: 'a1_g21',
  title: {
    en: 'Will and Shall (Future)',
    de: 'Will und Shall (Zukunft)'
  },
  description: {
    en: "Spontaneous decisions, offers, and promises.",
    de: "Spontane Entscheidungen, Angebote und Versprechen."
  },
  
  components: {
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Will & Shall: The "Instant" Future ⚡

We use **will** for the future, but it feels different from "going to".

### 1. Spontaneous Decisions ⚡

You decide **at the moment of speaking**. You didn't plan it before.

- (Phone rings) "I **will** answer it!" (Decided just now)
- (In a restaurant) "I **will** have the pizza, please."

### 2. Offers and Promises 🤝

- **Offer:** "That bag looks heavy. I **will** help you."
- **Promise:** "I **will** love you forever."

### 3. Predictions (What I think) 💭

When we guess or believe something, usually with "I think", "I hope", "I am sure".

- "I think he **will** be late."
- "I hope it **will** snow."

### 4. Forms (No 's'!)

**Will** is a modal verb. It never changes! No 's' for he/she/it.
We often use the short form **'ll**.

- I will = **I'll**
- She will = **She'll**
- Negative: will not = **won't** (Pronounced like "wont")

<GamePlaceholder id="fixTheMistake" />

### 5. What about "Shall"? 🎩

**Shall** is mostly used for **Offers** and **Suggestions**, but only with **I** and **We**.

- "**Shall I** open the window?" (Do you want me to do it?)
- "**Shall we** go?" (Suggestion: Let's go!)

*Note: In modern English, we rarely use "Shall" for normal future statements anymore. Use "Will".*

<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Will & Shall: Die "Spontane" Zukunft ⚡

Wir benutzen **will** für die Zukunft, aber es fühlt sich anders an als "going to".

### 1. Spontane Entscheidungen ⚡

Du entscheidest **im Moment des Sprechens**. Du hast es vorher nicht geplant.

- (Telefon klingelt) "I **will** answer it!" (Ich geh ran! - Gerade eben entschieden)
- (Im Restaurant) "I **will** have the pizza, please." (Ich nehme die Pizza.)

### 2. Angebote und Versprechen 🤝

- **Angebot:** "Die Tasche sieht schwer aus. I **will** help you." (Ich helfe dir.)
- **Versprechen:** "I **will** always love you." (Ich werde dich immer lieben.)

### 3. Vorhersagen (Was ich glaube) 💭

Wenn wir raten oder glauben, oft mit "I think", "I hope", "I am sure".

- "I think he **will** be late." (Ich glaube, er wird zu spät kommen.)
- "I hope it **will** snow." (Ich hoffe, es schneit.)

### 4. Formen (Kein 's'!)

**Will** ist ein Modalverb. Es ändert sich nie! Kein 's' bei he/she/it.
Wir nutzen oft die Kurzform **'ll**.

- I will = **I'll**
- She will = **She'll**
- Verneinung: will not = **won't** (Achtung bei der Aussprache!)

<GamePlaceholder id="fixTheMistake" />

### 5. Was ist mit "Shall"? 🎩

**Shall** wird heute fast nur noch für **Angebote** und **Vorschläge** benutzt, und zwar nur mit **I** (ich) und **We** (wir).

- "**Shall I** open the window?" (Soll ich das Fenster öffnen?)
- "**Shall we** go?" (Sollen wir gehen?)

*Hinweis: Für normale Zukunfts-Aussagen nutzen wir heute fast nur noch "Will", nicht mehr "Shall" (außer sehr formell).*

<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    de: {
      title: 'Angebote machen',
      description: 'Jemandem ist kalt. Mache ein Angebot mit "I will..." oder "Shall I...".',
      checklist: [
        { text: 'Satz: I will / Shall I...', checked: false }
      ]
    },
    en: {
      title: 'Making Offers',
      description: 'Someone is cold. Make an offer with "I will..." or "Shall I...".',
      checklist: [
        { text: 'Sentence: I will / Shall I...', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};
