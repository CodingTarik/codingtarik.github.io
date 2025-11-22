import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "___ is a book on the table.", de: "___ ist ein Buch auf dem Tisch." },
    words: ["There", "It", "This", "That"],
    correct: "There",
    explanation: { en: "There is = existence (something exists)", de: "There is = Existenz (etwas existiert)" }
  },
  {
    prompt: { en: "___ is cold today.", de: "___ ist heute kalt." },
    words: ["It", "There", "This", "That"],
    correct: "It",
    explanation: { en: "It = weather, time, distance", de: "It = Wetter, Zeit, Entfernung" }
  },
  {
    prompt: { en: "___ are many students here.", de: "___ sind viele Studenten hier." },
    words: ["There", "It", "They", "We"],
    correct: "There",
    explanation: { en: "There are = plural existence", de: "There are = Plural Existenz" }
  }
];

const grammarMoleData = [
  {
    prompt: "___ is a cat in the garden.",
    options: ["There", "It", "This"],
    correct: "There",
    explanation: "There is = existence"
  },
  {
    prompt: "___ is raining.",
    options: ["It", "There", "This"],
    correct: "It",
    explanation: "It = weather"
  },
  {
    prompt: "___ are five books.",
    options: ["There", "It", "They"],
    correct: "There",
    explanation: "There are = plural"
  }
];

export const thereIt = {
  id: 'a1_g84',
  title: {
    en: 'There... and It...',
    de: 'There... und It...'
  },
  description: {
    en: "Using 'there is/are' for existence and 'it' for weather, time, and distance.",
    de: "'There is/are' für Existenz und 'it' für Wetter, Zeit und Entfernung verwenden."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    grammarMole: <GrammarGame type="grammarMole" data={grammarMoleData} />
  },

  content: {
    en: `
## There vs. It: When to Use Which? 🤔

**There** and **It** are both used as "dummy" subjects, but for different purposes!

### 1. "There is/are" = Existence 📍

Use **There is/are** to say that something **exists** or is **present**.

**Structure:**
- **There is** + singular noun
- **There are** + plural noun

**Examples:**
- "**There is** a book on the table." (A book exists on the table)
- "**There are** many students here." (Many students exist here)
- "**There is** no milk in the fridge." (No milk exists)
- "**There are** three apples." (Three apples exist)

**Key Point:** "There" doesn't mean a place! It's just a way to say something exists.

<GamePlaceholder id="sentenceBuilder" />

### 2. "It" = Weather, Time, Distance 🌤️

Use **It** for:
- **Weather**: "**It** is raining." / "**It** is cold."
- **Time**: "**It** is 3 o'clock." / "**It** is Monday."
- **Distance**: "**It** is 5 km to the city."
- **General situations**: "**It** is important to study."

**Examples:**
- "**It** is sunny today." (Weather)
- "**It** is 9 o'clock." (Time)
- "**It** is far from here." (Distance)
- "**It** is nice to meet you." (General)

**Key Point:** "It" refers to the situation, not a specific thing.

<GamePlaceholder id="grammarMole" />

### 3. Common Mistakes ❌

1. **Using "It" for existence**
   - ❌ "It is a book on the table." → ✅ "**There is** a book on the table."

2. **Using "There" for weather**
   - ❌ "There is raining." → ✅ "**It** is raining."

3. **Wrong form: is vs are**
   - ❌ "There is many books." → ✅ "**There are** many books."

**Remember:** There = existence, It = weather/time/distance!
`,
    de: `
## There vs. It: Wann Welches Verwenden? 🤔

**There** und **It** werden beide als "Platzhalter"-Subjekte verwendet, aber für verschiedene Zwecke!

### 1. "There is/are" = Existenz 📍

Verwende **There is/are**, um zu sagen, dass etwas **existiert** oder **vorhanden** ist.

**Struktur:**
- **There is** + Singular-Nomen
- **There are** + Plural-Nomen

**Beispiele:**
- "**There is** a book on the table." (Ein Buch existiert auf dem Tisch)
- "**There are** many students here." (Viele Studenten existieren hier)
- "**There is** no milk in the fridge." (Keine Milch existiert)
- "**There are** three apples." (Drei Äpfel existieren)

**Wichtiger Punkt:** "There" bedeutet keinen Ort! Es ist nur eine Art zu sagen, dass etwas existiert.

<GamePlaceholder id="sentenceBuilder" />

### 2. "It" = Wetter, Zeit, Entfernung 🌤️

Verwende **It** für:
- **Wetter**: "**It** is raining." / "**It** is cold."
- **Zeit**: "**It** is 3 o'clock." / "**It** is Monday."
- **Entfernung**: "**It** is 5 km to the city."
- **Allgemeine Situationen**: "**It** is important to study."

**Beispiele:**
- "**It** is sunny today." (Wetter)
- "**It** is 9 o'clock." (Zeit)
- "**It** is far from here." (Entfernung)
- "**It** is nice to meet you." (Allgemein)

**Wichtiger Punkt:** "It" bezieht sich auf die Situation, nicht auf eine spezifische Sache.

<GamePlaceholder id="grammarMole" />

### 3. Häufige Fehler ❌

1. **"It" für Existenz verwenden**
   - ❌ "It is a book on the table." → ✅ "**There is** a book on the table."

2. **"There" für Wetter verwenden**
   - ❌ "There is raining." → ✅ "**It** is raining."

3. **Falsche Form: is vs are**
   - ❌ "There is many books." → ✅ "**There are** many books."

**Denk daran:** There = Existenz, It = Wetter/Zeit/Entfernung!
`
  },
  task: {
    de: {
      title: 'There und It üben',
      description: 'Schreibe Sätze mit There is/are (Existenz) und It (Wetter/Zeit).',
      checklist: [
        { text: 'Satz mit There is/are', checked: false },
        { text: 'Satz mit It (Wetter)', checked: false },
        { text: 'Satz mit It (Zeit)', checked: false }
      ]
    },
    en: {
      title: 'Practicing There and It',
      description: 'Write sentences with There is/are (existence) and It (weather/time).',
      checklist: [
        { text: 'Sentence with There is/are', checked: false },
        { text: 'Sentence with It (weather)', checked: false },
        { text: 'Sentence with It (time)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

