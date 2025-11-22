import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const demoData = [
  {
    prompt: { en: "___ book here (singular).", de: "___ Buch hier (Einzahl)." },
    words: ["This", "That", "These"],
    correct: "This",
    explanation: { en: "Near + Singular = This", de: "Nah + Einzahl = This" }
  },
  {
    prompt: { en: "___ car over there (singular).", de: "___ Auto dort drüben (Einzahl)." },
    words: ["That", "This", "Those"],
    correct: "That",
    explanation: { en: "Far + Singular = That", de: "Fern + Einzahl = That" }
  },
  {
    prompt: { en: "___ apples here (plural).", de: "___ Äpfel hier (Mehrzahl)." },
    words: ["These", "Those", "This"],
    correct: "These",
    explanation: { en: "Near + Plural = These", de: "Nah + Mehrzahl = These" }
  },
  {
    prompt: { en: "___ birds over there (plural).", de: "___ Vögel dort drüben (Mehrzahl)." },
    words: ["Those", "These", "That"],
    correct: "Those",
    explanation: { en: "Far + Plural = Those", de: "Fern + Mehrzahl = Those" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "These book is good.",
    mistakeIndex: 0,
    correction: "This",
    explanation: { en: "Book is singular, so use 'This'.", de: "Book ist Einzahl, also 'This'." }
  },
  {
    sentence: "I like those car.",
    mistakeIndex: 2,
    correction: "that",
    explanation: { en: "Car is singular, so use 'that'.", de: "Car ist Einzahl, also 'that'." }
  },
  {
    sentence: "Look at that birds.",
    mistakeIndex: 2,
    correction: "those",
    explanation: { en: "Birds is plural, so use 'those'.", de: "Birds ist Mehrzahl, also 'those'." }
  }
];

const grammarRacerData = [
  {
    prompt: "___ is my pen (here).",
    options: ["That", "This", "These"],
    correct: "This",
    explanation: "Near/Singular"
  },
  {
    prompt: "___ star is far away.",
    options: ["This", "That", "Those"],
    correct: "That",
    explanation: "Far/Singular"
  },
  {
    prompt: "___ shoes (here) are tight.",
    options: ["These", "Those", "This"],
    correct: "These",
    explanation: "Near/Plural"
  },
  {
    prompt: "___ mountains (there) are high.",
    options: ["These", "Those", "That"],
    correct: "Those",
    explanation: "Far/Plural"
  }
];

export const demonstratives = {
  id: 'a1_g0d',
  title: {
    en: 'Demonstratives (This, That...)',
    de: 'Demonstrativpronomen (Dies, Jenes...)'
  },
  description: {
    en: "Pointing at things: This vs That, These vs Those.",
    de: "Auf Dinge zeigen: This vs That, These vs Those."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={demoData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Introduction to Demonstratives (This, That...) 👉

Demonstratives are words we use to **point** at specific people or things. It's like using your finger to show what you are talking about.

If you are in a shop, you might say: "I want **this** apple, not **that** apple."

We choose the right word based on two questions:
1. **Where** is it? (Near me or far away?)
2. **How many** are there? (One or many?)

---

### 1. The Matrix

Here is the simple rule to remember:

| | Near (Here) 👇 | Far (There) 👉 |
|---|---|---|
| **Singular** (1) | **This** | **That** |
| **Plural** (2+) | **These** | **Those** |

### 2. Examples & Explanations

#### Near you (Here) 👇
Use these when you are holding the object or it is close enough to touch.

- **This book** (singular): "This book is interesting." (The one in my hand)
- **These keys** (plural): "Are these your keys?" (The ones on the table here)

#### Far from you (There) 👉
Use these when the object is across the room, down the street, or you can't touch it.

- **That car** (singular): "Look at that car!" (Over there on the street)
- **Those birds** (plural): "Those birds are flying high." (Up in the sky)

<GamePlaceholder id="sentenceBuilder" />

<div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-4">
  <strong className="text-green-800 dark:text-green-200">👂 Pronunciation Tip!</strong>
  <br/>
  Be careful with **This** vs **These**.
  <br/>
  - **This**: Short 'i' sound (like in 'fish'). Ends with a soft 's'. -> /ðɪs/
  <br/>
  - **These**: Long 'ee' sound (like in 'cheese'). Ends with a buzzing 'z'. -> /ðiːz/
</div>

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Pointer Challenge**
Pick the right word based on distance!
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Einführung in Demonstrativpronomen (Dies, Jenes...) 👉

Demonstrativpronomen sind "Zeigewörter". Wir benutzen sie, um auf bestimmte Personen oder Dinge zu **zeigen**. Es ist fast so, als würdest du deinen Finger benutzen.

Wenn du in einem Laden bist, sagst du vielleicht: "Ich möchte **diesen** (this) Apfel, nicht **jenen** (that) Apfel."

Wir wählen das richtige Wort basierend auf zwei Fragen:
1. **Wo** ist es? (Nah bei mir oder weit weg?)
2. **Wie viele** sind es? (Eins oder viele?)

---

### 1. Die Matrix

Hier ist die einfache Regel zum Merken:

| | Nah (Hier) 👇 | Fern (Dort) 👉 |
|---|---|---|
| **Einzahl** (1) | **This** (Dies/Dieses) | **That** (Das/Jenes) |
| **Mehrzahl** (2+) | **These** (Diese) | **Those** (Die/Jene) |

### 2. Beispiele & Erklärungen

#### Nah bei dir (Hier) 👇
Benutze diese Wörter, wenn du den Gegenstand hältst oder er nah genug zum Anfassen ist.

- **This book** (Einzahl): "This book is interesting." (Dieses Buch hier in meiner Hand)
- **These keys** (Mehrzahl): "Are these your keys?" (Sind das hier deine Schlüssel?)

#### Weit weg von dir (Dort) 👉
Benutze diese Wörter, wenn der Gegenstand auf der anderen Seite des Raumes oder der Straße ist.

- **That car** (Einzahl): "Look at that car!" (Schau dir das Auto dort drüben an!)
- **Those birds** (Mehrzahl): "Those birds are flying high." (Die Vögel dort oben am Himmel)

<GamePlaceholder id="sentenceBuilder" />

<div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-4">
  <strong className="text-green-800 dark:text-green-200">👂 Aussprache-Tipp!</strong>
  <br/>
  Achte auf den Unterschied zwischen **This** und **These**.
  <br/>
  - **This**: Kurzes 'i' (wie in 'Fisch'). Endet mit einem weichen 's'. -> /ðɪs/
  <br/>
  - **These**: Langes 'ih' (wie in 'Wiese'). Endet mit einem summenden 'z'. -> /ðiːz/
</div>

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Zeige-Challenge**
Wähle das richtige Wort basierend auf der Entfernung!
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    de: { 
      title: 'Zeig drauf!', 
      description: 'Finde 2 Dinge nah bei dir (This/These) und 2 Dinge weit weg (That/Those).', 
      checklist: [] 
    },
    en: { 
      title: 'Point it out!', 
      description: 'Find 2 things near you (This/These) and 2 things far away (That/Those).', 
      checklist: [] 
    }
  },
  quiz: { de: [], en: [] }
};
