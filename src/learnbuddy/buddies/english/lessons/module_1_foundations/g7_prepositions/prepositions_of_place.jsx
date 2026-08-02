import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "The cat is ___ the table.", de: "Die Katze ist ___ dem Tisch." },
    words: ["under", "next", "to", "between"],
    correct: "under",
    explanation: { en: "under = below (under the table)", de: "under = unter (unter dem Tisch)" }
  },
  {
    prompt: { en: "The book is ___ the table and the chair.", de: "Das Buch ist ___ dem Tisch und dem Stuhl." },
    words: ["between", "next", "to", "under"],
    correct: "between",
    explanation: { en: "between = in the middle of two things", de: "between = zwischen zwei Dingen" }
  },
  {
    prompt: { en: "I sit ___ my friend.", de: "Ich sitze ___ meinem Freund." },
    words: ["next", "to", "between", "under"],
    correct: "next to",
    explanation: { en: "next to = beside (next to my friend)", de: "next to = neben (neben meinem Freund)" }
  }
];

const grammarSmashData = [
  {
    prompt: "The cat is ___ the table.",
    options: ["under", "next to", "between"],
    correct: "under",
    explanation: "under = below"
  },
  {
    prompt: "The book is ___ the table and the chair.",
    options: ["between", "next to", "under"],
    correct: "between",
    explanation: "between = in the middle"
  },
  {
    prompt: "I sit ___ my friend.",
    options: ["next to", "between", "under"],
    correct: "next to",
    explanation: "next to = beside"
  }
];

export const prepositionsOfPlace = {
  id: 'a1_prepositions_place',
  title: {
    en: 'Prepositions of Place: Next to, Under, Between',
    de: 'Präpositionen des Ortes: Next to, Under, Between'
  },
  description: {
    en: "More position prepositions: 'next to', 'under', 'between', 'behind', 'in front of'.",
    de: "Weitere Positionspräpositionen: 'next to', 'under', 'between', 'behind', 'in front of'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    grammarSmash: <GrammarGame type="grammarSmash" data={grammarSmashData} />
  },

  content: {
    en: `
## Prepositions of Place: More Positions! 📍

Besides **in**, **on**, and **at**, there are many more prepositions to describe position!

### 1. Common Prepositions of Place 📋

| Preposition | Meaning | Example |
|-------------|---------|---------|
| **next to** | beside, near | "I sit **next to** my friend." |
| **under** | below | "The cat is **under** the table." |
| **between** | in the middle of two | "The book is **between** the table and the chair." |
| **behind** | at the back of | "The car is **behind** the house." |
| **in front of** | before, ahead | "I stand **in front of** the door." |
| **above** | higher than | "The picture is **above** the sofa." |
| **below** | lower than | "The carpet is **below** the table." |
| **near** | close to | "I live **near** the school." |
| **far from** | distant from | "The station is **far from** here." |

<GamePlaceholder id="sentenceBuilder" />

### 2. "next to" = Beside 👥

**next to** means **beside** or **near**.

**Examples:**
- "I sit **next to** my friend." (beside my friend)
- "The bank is **next to** the post office." (beside the post office)
- "She stands **next to** me." (beside me)

### 3. "under" = Below ⬇️

**under** means **below** or **beneath**.

**Examples:**
- "The cat is **under** the table." (below the table)
- "The keys are **under** the book." (below the book)
- "I hide **under** the bed." (below the bed)

### 4. "between" = In the Middle 🔄

**between** means **in the middle of two** things.

**Examples:**
- "The book is **between** the table and the chair." (in the middle)
- "I sit **between** Tom and Mary." (in the middle of two people)
- "The car is **between** the two houses." (in the middle)

### 5. "behind" vs. "in front of" ⬅️➡️

- **behind** = at the back
- **in front of** = before, ahead

**Examples:**
- "The car is **behind** the house." (at the back)
- "I stand **in front of** the door." (before the door)
- "She sits **behind** me." (at my back)
- "He stands **in front of** me." (before me)

<GamePlaceholder id="grammarSmash" />

### 6. Practice Makes Perfect! 🎓

**Remember:**
- **next to** = beside
- **under** = below
- **between** = in the middle of two
- **behind** = at the back
- **in front of** = before

**Try these:**
- "I sit **next to** my friend."
- "The cat is **under** the table."
- "The book is **between** the table and the chair."

**Master these, and you'll describe positions precisely!**
`,
    de: `
## Präpositionen des Ortes: Mehr Positionen! 📍

Neben **in**, **on** und **at** gibt es noch viele weitere Präpositionen, um Positionen zu beschreiben!

### 1. Häufige Präpositionen des Ortes 📋

| Präposition | Bedeutung | Beispiel |
|-------------|-----------|----------|
| **next to** | neben, nahe | "I sit **next to** my friend." |
| **under** | unter | "The cat is **under** the table." |
| **between** | zwischen zwei | "The book is **between** the table and the chair." |
| **behind** | hinter | "The car is **behind** the house." |
| **in front of** | vor | "I stand **in front of** the door." |
| **above** | über | "The picture is **above** the sofa." |
| **below** | unter | "The carpet is **below** the table." |
| **near** | nahe | "I live **near** the school." |
| **far from** | weit von | "The station is **far from** here." |

<GamePlaceholder id="sentenceBuilder" />

### 2. "next to" = Neben 👥

**next to** bedeutet **neben** oder **nahe**.

**Beispiele:**
- "I sit **next to** my friend." (neben meinem Freund)
- "The bank is **next to** the post office." (neben dem Postamt)
- "She stands **next to** me." (neben mir)

### 3. "under" = Unter ⬇️

**under** bedeutet **unter** oder **darunter**.

**Beispiele:**
- "The cat is **under** the table." (unter dem Tisch)
- "The keys are **under** the book." (unter dem Buch)
- "I hide **under** the bed." (unter dem Bett)

### 4. "between" = Zwischen 🔄

**between** bedeutet **zwischen zwei** Dingen.

**Beispiele:**
- "The book is **between** the table and the chair." (zwischen)
- "I sit **between** Tom and Mary." (zwischen zwei Personen)
- "The car is **between** the two houses." (zwischen)

### 5. "behind" vs. "in front of" ⬅️➡️

- **behind** = hinter
- **in front of** = vor

**Beispiele:**
- "The car is **behind** the house." (hinter)
- "I stand **in front of** the door." (vor der Tür)
- "She sits **behind** me." (hinter mir)
- "He stands **in front of** me." (vor mir)

<GamePlaceholder id="grammarSmash" />

### 6. Übung macht den Meister! 🎓

**Denk daran:**
- **next to** = neben
- **under** = unter
- **between** = zwischen zwei
- **behind** = hinter
- **in front of** = vor

**Versuche diese:**
- "I sit **next to** my friend."
- "The cat is **under** the table."
- "The book is **between** the table and the chair."

**Meistere diese, und du wirst Positionen präzise beschreiben!**
`
  },
  task: {
    de: {
      title: 'Präpositionen des Ortes üben',
      description: 'Schreibe 3 Sätze mit verschiedenen Präpositionen des Ortes (next to, under, between, behind, in front of).',
      checklist: [
        { text: 'Satz mit next to', checked: false },
        { text: 'Satz mit under', checked: false },
        { text: 'Satz mit between/behind/in front of', checked: false }
      ]
    },
    en: {
      title: 'Practicing Prepositions of Place',
      description: 'Write 3 sentences with different prepositions of place (next to, under, between, behind, in front of).',
      checklist: [
        { text: 'Sentence with next to', checked: false },
        { text: 'Sentence with under', checked: false },
        { text: 'Sentence with between/behind/in front of', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


