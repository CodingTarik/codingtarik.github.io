import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "This is ___ book.", de: "Das ist ___ Buch." },
    words: ["Tom's", "Tom", "Toms", "Toms'"],
    correct: "Tom's",
    explanation: { en: "Possessive: add 's (Tom's book)", de: "Possessiv: füge 's hinzu (Toms Buch)" }
  },
  {
    prompt: { en: "These are the ___ books.", de: "Das sind die ___ Bücher." },
    words: ["students'", "student's", "students", "students's"],
    correct: "students'",
    explanation: { en: "Plural possessive: add ' (students' books)", de: "Plural Possessiv: füge ' hinzu (Bücher der Studenten)" }
  },
  {
    prompt: { en: "This is ___ car.", de: "Das ist ___ Auto." },
    words: ["my sister's", "my sisters", "my sisters'", "my sister"],
    correct: "my sister's",
    explanation: { en: "Singular possessive: sister's car", de: "Singular Possessiv: Schwester's Auto" }
  }
];

const grammarQuizData = [
  {
    prompt: "This is ___ book.",
    options: ["Tom's", "Toms", "Tom"],
    correct: "Tom's",
    explanation: "Singular possessive: add 's"
  },
  {
    prompt: "These are the ___ books.",
    options: ["students'", "student's", "students"],
    correct: "students'",
    explanation: "Plural possessive: add '"
  },
  {
    prompt: "This is ___ name.",
    options: ["my friend's", "my friends", "my friends'"],
    correct: "my friend's",
    explanation: "Singular possessive"
  }
];

export const possessiveS = {
  id: 'a1_g81',
  title: {
    en: "Possessive 's: Your Sister's Name",
    de: "Possessiv 's: Der Name deiner Schwester"
  },
  description: {
    en: "Showing ownership: 'Tom's book', 'the students' room'.",
    de: "Besitz zeigen: 'Toms Buch', 'das Zimmer der Studenten'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    grammarQuiz: <GrammarGame type="grammarQuiz" data={grammarQuizData} />
  },

  content: {
    en: `
## Possessive 's: Showing Ownership 👑

The **possessive 's** shows that something belongs to someone. It's like saying "the book of Tom" but shorter: "Tom's book".

### 1. Singular Possessive: Add 's ✅

For **singular** nouns (one person/thing), add **'s**.

**Examples:**
- **Tom's** book (the book of Tom)
- **my sister's** car (the car of my sister)
- **the teacher's** desk (the desk of the teacher)

**Pattern:** noun + **'s** + thing

<GamePlaceholder id="sentenceBuilder" />

### 2. Plural Possessive: Add ' ✅

For **plural** nouns ending in -s, just add **'** (apostrophe only).

**Examples:**
- **the students'** books (the books of the students)
- **my parents'** car (the car of my parents)
- **the teachers'** room (the room of the teachers)

**Pattern:** plural noun + **'** + thing

**Note:** If the plural doesn't end in -s (like "children"), add **'s**:
- **children's** toys (not "children'")

### 3. Common Uses 🎯

**People:**
- "**John's** house"
- "**my friend's** phone"
- "**the teacher's** book"

**Time:**
- "**today's** news"
- "**yesterday's** meeting"
- "**next week's** exam"

<GamePlaceholder id="grammarQuiz" />

### 4. Common Mistakes ❌

1. **Forgetting the apostrophe**
   - ❌ "Toms book" → ✅ "**Tom's** book"

2. **Wrong plural possessive**
   - ❌ "students's books" → ✅ "**students'** books"

3. **Using 's with plural ending in -s**
   - ❌ "teachers's room" → ✅ "**teachers'** room"

**Remember:** Singular = 's, Plural ending in -s = ', Plural not ending in -s = 's!
`,
    de: `
## Possessiv 's: Besitz Zeigen 👑

Das **Possessiv 's** zeigt, dass etwas jemandem gehört. Es ist wie "das Buch von Tom" zu sagen, aber kürzer: "Tom's book".

### 1. Singular Possessiv: Füge 's hinzu ✅

Für **Singular**-Nomen (eine Person/Sache), füge **'s** hinzu.

**Beispiele:**
- **Tom's** book (das Buch von Tom)
- **my sister's** car (das Auto meiner Schwester)
- **the teacher's** desk (der Schreibtisch des Lehrers)

**Muster:** Nomen + **'s** + Sache

<GamePlaceholder id="sentenceBuilder" />

### 2. Plural Possessiv: Füge ' hinzu ✅

Für **Plural**-Nomen, die auf -s enden, füge nur **'** (Apostroph) hinzu.

**Beispiele:**
- **the students'** books (die Bücher der Studenten)
- **my parents'** car (das Auto meiner Eltern)
- **the teachers'** room (das Zimmer der Lehrer)

**Muster:** Plural-Nomen + **'** + Sache

**Hinweis:** Wenn der Plural nicht auf -s endet (wie "children"), füge **'s** hinzu:
- **children's** toys (nicht "children'")

### 3. Häufige Verwendungen 🎯

**Personen:**
- "**John's** house"
- "**my friend's** phone"
- "**the teacher's** book"

**Zeit:**
- "**today's** news"
- "**yesterday's** meeting"
- "**next week's** exam"

<GamePlaceholder id="grammarQuiz" />

### 4. Häufige Fehler ❌

1. **Apostroph vergessen**
   - ❌ "Toms book" → ✅ "**Tom's** book"

2. **Falscher Plural Possessiv**
   - ❌ "students's books" → ✅ "**students'** books"

3. **'s mit Plural auf -s verwenden**
   - ❌ "teachers's room" → ✅ "**teachers'** room"

**Denk daran:** Singular = 's, Plural auf -s = ', Plural nicht auf -s = 's!
`
  },
  task: {
    de: {
      title: 'Possessiv \'s üben',
      description: 'Schreibe Sätze mit Possessiv \'s (Singular und Plural).',
      checklist: [
        { text: 'Satz mit Singular Possessiv (\'s)', checked: false },
        { text: 'Satz mit Plural Possessiv (\')', checked: false }
      ]
    },
    en: {
      title: 'Practicing Possessive \'s',
      description: 'Write sentences with possessive \'s (singular and plural).',
      checklist: [
        { text: 'Sentence with singular possessive (\'s)', checked: false },
        { text: 'Sentence with plural possessive (\')', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

