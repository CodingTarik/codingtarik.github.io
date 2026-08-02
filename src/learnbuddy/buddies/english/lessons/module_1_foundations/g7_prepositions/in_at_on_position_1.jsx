import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "The book is ___ the table.", de: "Das Buch ist ___ dem Tisch." },
    words: ["on", "in", "at", "the"],
    correct: "on",
    explanation: { en: "on = surface (on the table)", de: "on = Oberfläche (auf dem Tisch)" }
  },
  {
    prompt: { en: "The cat is ___ the box.", de: "Die Katze ist ___ der Box." },
    words: ["in", "on", "at", "the"],
    correct: "in",
    explanation: { en: "in = inside (in the box)", de: "in = innen (in der Box)" }
  },
  {
    prompt: { en: "I am ___ home.", de: "Ich bin ___ Zuhause." },
    words: ["at", "in", "on", "home"],
    correct: "at",
    explanation: { en: "at = specific place (at home)", de: "at = spezifischer Ort (zu Hause)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "The book is in the table.",
    mistakeIndex: 3,
    correction: "on",
    explanation: { en: "on = surface (on the table), not 'in' (inside)", de: "on = Oberfläche (auf dem Tisch), nicht 'in' (innen)" }
  },
  {
    sentence: "The cat is on the box.",
    mistakeIndex: 3,
    correction: "in",
    explanation: { en: "in = inside (in the box), not 'on' (surface)", de: "in = innen (in der Box), nicht 'on' (Oberfläche)" }
  },
  {
    sentence: "I am in home.",
    mistakeIndex: 2,
    correction: "at",
    explanation: { en: "at home (specific place), not 'in home'", de: "at home (spezifischer Ort), nicht 'in home'" }
  }
];

const grammarSmashData = [
  {
    prompt: "The book is ___ the table.",
    options: ["on", "in", "at"],
    correct: "on",
    explanation: "on = surface"
  },
  {
    prompt: "The cat is ___ the box.",
    options: ["in", "on", "at"],
    correct: "in",
    explanation: "in = inside"
  },
  {
    prompt: "I am ___ home.",
    options: ["at", "in", "on"],
    correct: "at",
    explanation: "at = specific place"
  }
];

export const inAtOnPosition1 = {
  id: 'a1_g123',
  title: {
    en: 'in/at/on (Position) 1',
    de: 'in/at/on (Position) 1'
  },
  description: {
    en: "Using prepositions for position: 'in the box', 'on the table', 'at home'.",
    de: "Präpositionen für Position verwenden: 'in der Box', 'auf dem Tisch', 'zu Hause'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarSmash: <GrammarGame type="grammarSmash" data={grammarSmashData} />
  },

  content: {
    en: `
## in/at/on for Position: Where Is It? 📍

Prepositions for position tell us **where** something is. The rules are:

- **in** = inside (enclosed space)
- **on** = surface (touching a surface)
- **at** = specific place (point location)

### 1. "in" = Inside 📦

Use **in** when something is **inside** an enclosed space.

**Examples:**
- "The cat is **in** the box." (inside the box)
- "I am **in** the room." (inside the room)
- "The water is **in** the bottle." (inside the bottle)
- "She is **in** the car." (inside the car)
- "I live **in** London." (inside the city)

**Pattern:** **in** + enclosed space

<GamePlaceholder id="sentenceBuilder" />

### 2. "on" = Surface 📄

Use **on** when something is **on a surface** (touching the top).

**Examples:**
- "The book is **on** the table." (on the surface of the table)
- "The picture is **on** the wall." (on the surface of the wall)
- "I sit **on** the chair." (on the surface of the chair)
- "The cat is **on** the roof." (on the surface of the roof)

**Pattern:** **on** + surface

### 3. "at" = Specific Place 🎯

Use **at** for **specific places** or **points**.

**Examples:**
- "I am **at** home." (specific place)
- "She is **at** school." (specific place)
- "We meet **at** the station." (specific point)
- "He is **at** work." (specific place)
- "I am **at** the door." (specific point)

**Pattern:** **on** + surface

**Note:** "at home", "at school", "at work" are common expressions!

<GamePlaceholder id="fixTheMistake" />

### 4. Quick Reference Table 📋

| Preposition | Use For | Examples |
|-------------|---------|----------|
| **in** | Inside (enclosed) | in the box, in the room, in London |
| **on** | Surface | on the table, on the wall, on the chair |
| **at** | Specific place | at home, at school, at the station |

### 5. Common Mistakes ❌

1. **Confusing "in" and "on"**
   - ❌ "The book is **in** the table." → ✅ "The book is **on** the table."
   - ❌ "The cat is **on** the box." → ✅ "The cat is **in** the box."

2. **Wrong preposition for places**
   - ❌ "I am **in** home." → ✅ "I am **at** home."
   - ❌ "She is **on** school." → ✅ "She is **at** school."

<GamePlaceholder id="grammarSmash" />

### 6. Practice Makes Perfect! 🎓

**Remember:**
- **in** = inside (in the box, in the room)
- **on** = surface (on the table, on the wall)
- **at** = specific place (at home, at school)

**Try these:**
- "The book is **on** the table."
- "The cat is **in** the box."
- "I am **at** home."

**Master this, and you'll describe positions correctly!**
`,
    de: `
## in/at/on für Position: Wo Ist Es? 📍

Präpositionen für Position sagen uns, **wo** etwas ist. Die Regeln sind:

- **in** = innen (eingeschlossener Raum)
- **on** = Oberfläche (berührt eine Oberfläche)
- **at** = spezifischer Ort (Punkt)

### 1. "in" = Innen 📦

Verwende **in**, wenn etwas **innen** in einem eingeschlossenen Raum ist.

**Beispiele:**
- "The cat is **in** the box." (in der Box)
- "I am **in** the room." (im Zimmer)
- "The water is **in** the bottle." (in der Flasche)
- "She is **in** the car." (im Auto)
- "I live **in** London." (in der Stadt)

**Muster:** **in** + eingeschlossener Raum

<GamePlaceholder id="sentenceBuilder" />

### 2. "on" = Oberfläche 📄

Verwende **on**, wenn etwas **auf einer Oberfläche** ist (berührt die Oberseite).

**Beispiele:**
- "The book is **on** the table." (auf der Oberfläche des Tisches)
- "The picture is **on** the wall." (auf der Oberfläche der Wand)
- "I sit **on** the chair." (auf der Oberfläche des Stuhls)
- "The cat is **on** the roof." (auf der Oberfläche des Dachs)

**Muster:** **on** + Oberfläche

### 3. "at" = Spezifischer Ort 🎯

Verwende **at** für **spezifische Orte** oder **Punkte**.

**Beispiele:**
- "I am **at** home." (spezifischer Ort)
- "She is **at** school." (spezifischer Ort)
- "We meet **at** the station." (spezifischer Punkt)
- "He is **at** work." (spezifischer Ort)
- "I am **at** the door." (spezifischer Punkt)

**Muster:** **on** + Oberfläche

**Hinweis:** "at home", "at school", "at work" sind häufige Ausdrücke!

<GamePlaceholder id="fixTheMistake" />

### 4. Schnellreferenz-Tabelle 📋

| Präposition | Verwendung | Beispiele |
|-------------|------------|-----------|
| **in** | Innen (eingeschlossen) | in the box, in the room, in London |
| **on** | Oberfläche | on the table, on the wall, on the chair |
| **at** | Spezifischer Ort | at home, at school, at the station |

### 5. Häufige Fehler ❌

1. **"in" und "on" verwechseln**
   - ❌ "The book is **in** the table." → ✅ "The book is **on** the table."
   - ❌ "The cat is **on** the box." → ✅ "The cat is **in** the box."

2. **Falsche Präposition für Orte**
   - ❌ "I am **in** home." → ✅ "I am **at** home."
   - ❌ "She is **on** school." → ✅ "She is **at** school."

<GamePlaceholder id="grammarSmash" />

### 6. Übung macht den Meister! 🎓

**Denk daran:**
- **in** = innen (in the box, in the room)
- **on** = Oberfläche (on the table, on the wall)
- **at** = spezifischer Ort (at home, at school)

**Versuche diese:**
- "The book is **on** the table."
- "The cat is **in** the box."
- "I am **at** home."

**Meistere das, und du wirst Positionen korrekt beschreiben!**
`
  },
  task: {
    de: {
      title: 'Positionspräpositionen üben',
      description: 'Schreibe 3 Sätze: einen mit in, einen mit on, und einen mit at.',
      checklist: [
        { text: 'Satz mit in (innen)', checked: false },
        { text: 'Satz mit on (Oberfläche)', checked: false },
        { text: 'Satz mit at (spezifischer Ort)', checked: false }
      ]
    },
    en: {
      title: 'Practicing Position Prepositions',
      description: 'Write 3 sentences: one with in, one with on, and one with at.',
      checklist: [
        { text: 'Sentence with in (inside)', checked: false },
        { text: 'Sentence with on (surface)', checked: false },
        { text: 'Sentence with at (specific place)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


