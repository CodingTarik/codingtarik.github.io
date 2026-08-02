import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "The pen is ___ the desk.", de: "Der Stift ist ___ dem Schreibtisch." },
    words: ["on", "in", "at", "the"],
    correct: "on",
    explanation: { en: "on = surface (on the desk)", de: "on = Oberfläche (auf dem Schreibtisch)" }
  },
  {
    prompt: { en: "The keys are ___ my pocket.", de: "Die Schlüssel sind ___ meiner Tasche." },
    words: ["in", "on", "at", "my"],
    correct: "in",
    explanation: { en: "in = inside (in my pocket)", de: "in = innen (in meiner Tasche)" }
  },
  {
    prompt: { en: "I am waiting ___ the bus stop.", de: "Ich warte ___ der Bushaltestelle." },
    words: ["at", "in", "on", "the"],
    correct: "at",
    explanation: { en: "at = specific point (at the bus stop)", de: "at = spezifischer Punkt (an der Bushaltestelle)" }
  }
];

const grammarQuizData = [
  {
    prompt: "The pen is ___ the desk.",
    options: ["on", "in", "at"],
    correct: "on",
    explanation: "on = surface"
  },
  {
    prompt: "The keys are ___ my pocket.",
    options: ["in", "on", "at"],
    correct: "in",
    explanation: "in = inside"
  },
  {
    prompt: "I am waiting ___ the bus stop.",
    options: ["at", "in", "on"],
    correct: "at",
    explanation: "at = specific point"
  }
];

export const inAtOnPosition2 = {
  id: 'a1_g124',
  title: {
    en: 'in/at/on (Position) 2',
    de: 'in/at/on (Position) 2'
  },
  description: {
    en: "More practice with position prepositions: 'in the pocket', 'on the desk', 'at the bus stop'.",
    de: "Mehr Übung mit Positionspräpositionen: 'in der Tasche', 'auf dem Schreibtisch', 'an der Bushaltestelle'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    grammarQuiz: <GrammarGame type="grammarQuiz" data={grammarQuizData} />
  },

  content: {
    en: `
## More Position Practice: in/at/on 📍

Let's practice more with position prepositions! Remember:

- **in** = inside (enclosed space)
- **on** = surface (touching a surface)
- **at** = specific place (point location)

### 1. More Examples with "in" 📦

**Examples:**
- "The keys are **in** my pocket." (inside the pocket)
- "The money is **in** the wallet." (inside the wallet)
- "I am **in** the car." (inside the car)
- "She lives **in** Paris." (inside the city)

### 2. More Examples with "on" 📄

**Examples:**
- "The pen is **on** the desk." (on the surface)
- "The picture is **on** the wall." (on the surface)
- "I sit **on** the sofa." (on the surface)
- "The cat is **on** the floor." (on the surface)

### 3. More Examples with "at" 🎯

**Examples:**
- "I am waiting **at** the bus stop." (specific point)
- "She is **at** the door." (specific point)
- "We meet **at** the corner." (specific point)
- "He is **at** the window." (specific point)

<GamePlaceholder id="sentenceBuilder" />

### 4. Common Expressions 💬

**With "at":**
- **at** home
- **at** school
- **at** work
- **at** the station
- **at** the door
- **at** the window

**With "in":**
- **in** the room
- **in** the car
- **in** the box
- **in** my pocket
- **in** the city

**With "on":**
- **on** the table
- **on** the wall
- **on** the floor
- **on** the chair
- **on** the roof

<GamePlaceholder id="grammarQuiz" />

### 5. Practice Makes Perfect! 🎓

**Remember:**
- **in** = inside (in the pocket, in the car)
- **on** = surface (on the desk, on the wall)
- **at** = specific place (at the bus stop, at the door)

**Try these:**
- "The keys are **in** my pocket."
- "The pen is **on** the desk."
- "I am waiting **at** the bus stop."

**Keep practicing, and you'll master position prepositions!**
`,
    de: `
## Mehr Positionsübung: in/at/on 📍

Lass uns mehr mit Positionspräpositionen üben! Denk daran:

- **in** = innen (eingeschlossener Raum)
- **on** = Oberfläche (berührt eine Oberfläche)
- **at** = spezifischer Ort (Punkt)

### 1. Mehr Beispiele mit "in" 📦

**Beispiele:**
- "The keys are **in** my pocket." (in der Tasche)
- "The money is **in** the wallet." (im Portemonnaie)
- "I am **in** the car." (im Auto)
- "She lives **in** Paris." (in der Stadt)

### 2. Mehr Beispiele mit "on" 📄

**Beispiele:**
- "The pen is **on** the desk." (auf der Oberfläche)
- "The picture is **on** the wall." (auf der Oberfläche)
- "I sit **on** the sofa." (auf der Oberfläche)
- "The cat is **on** the floor." (auf der Oberfläche)

### 3. Mehr Beispiele mit "at" 🎯

**Beispiele:**
- "I am waiting **at** the bus stop." (spezifischer Punkt)
- "She is **at** the door." (spezifischer Punkt)
- "We meet **at** the corner." (spezifischer Punkt)
- "He is **at** the window." (spezifischer Punkt)

<GamePlaceholder id="sentenceBuilder" />

### 4. Häufige Ausdrücke 💬

**Mit "at":**
- **at** home
- **at** school
- **at** work
- **at** the station
- **at** the door
- **at** the window

**Mit "in":**
- **in** the room
- **in** the car
- **in** the box
- **in** my pocket
- **in** the city

**Mit "on":**
- **on** the table
- **on** the wall
- **on** the floor
- **on** the chair
- **on** the roof

<GamePlaceholder id="grammarQuiz" />

### 5. Übung macht den Meister! 🎓

**Denk daran:**
- **in** = innen (in der Tasche, im Auto)
- **on** = Oberfläche (auf dem Schreibtisch, an der Wand)
- **at** = spezifischer Ort (an der Bushaltestelle, an der Tür)

**Versuche diese:**
- "The keys are **in** my pocket."
- "The pen is **on** the desk."
- "I am waiting **at** the bus stop."

**Übe weiter, und du wirst Positionspräpositionen meistern!**
`
  },
  task: {
    de: {
      title: 'Mehr Positionspräpositionen üben',
      description: 'Schreibe 3 Sätze mit verschiedenen Positionen (in, on, at).',
      checklist: [
        { text: 'Satz mit in', checked: false },
        { text: 'Satz mit on', checked: false },
        { text: 'Satz mit at', checked: false }
      ]
    },
    en: {
      title: 'More Position Preposition Practice',
      description: 'Write 3 sentences with different positions (in, on, at).',
      checklist: [
        { text: 'Sentence with in', checked: false },
        { text: 'Sentence with on', checked: false },
        { text: 'Sentence with at', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


