import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I wake up ___ 7 o'clock.", de: "Ich wache ___ 7 Uhr auf." },
    words: ["at", "on", "in", "7"],
    correct: "at",
    explanation: { en: "at + specific time (at 7 o'clock)", de: "at + spezifische Zeit (at 7 o'clock)" }
  },
  {
    prompt: { en: "I go to school ___ Monday.", de: "Ich gehe ___ Montag zur Schule." },
    words: ["on", "at", "in", "Monday"],
    correct: "on",
    explanation: { en: "on + day (on Monday)", de: "on + Tag (on Monday)" }
  },
  {
    prompt: { en: "I was born ___ 1990.", de: "Ich wurde ___ 1990 geboren." },
    words: ["in", "at", "on", "1990"],
    correct: "in",
    explanation: { en: "in + year/month (in 1990)", de: "in + Jahr/Monat (in 1990)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I wake up on 7 o'clock.",
    mistakeIndex: 2,
    correction: "at",
    explanation: { en: "at + specific time (at 7 o'clock), not 'on'", de: "at + spezifische Zeit (at 7 o'clock), nicht 'on'" }
  },
  {
    sentence: "I go to school in Monday.",
    mistakeIndex: 3,
    correction: "on",
    explanation: { en: "on + day (on Monday), not 'in'", de: "on + Tag (on Monday), nicht 'in'" }
  },
  {
    sentence: "I was born at 1990.",
    mistakeIndex: 3,
    correction: "in",
    explanation: { en: "in + year (in 1990), not 'at'", de: "in + Jahr (in 1990), nicht 'at'" }
  }
];

const verbPilotData = [
  {
    prompt: "Catch the correct PREPOSITION for TIME!",
    targets: ["at", "on", "in"],
    distractors: ["the", "a", "is", "are", "Monday", "morning"],
    correct: "at"
  }
];

export const atOnInTime = {
  id: 'a1_g121',
  title: {
    en: 'at/on/in (Time)',
    de: 'at/on/in (Zeit)'
  },
  description: {
    en: "Using prepositions with time: 'at 7 o'clock', 'on Monday', 'in 1990'.",
    de: "Präpositionen mit Zeit verwenden: 'at 7 o'clock', 'on Monday', 'in 1990'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    verbPilot: <GrammarGame type="verbPilot" data={verbPilotData} />
  },

  content: {
    en: `
## at/on/in with Time: The Golden Rules! ⏰

Prepositions with time can be confusing! But there are clear rules:

- **at** = specific time
- **on** = day
- **in** = longer periods (month, year, season)

### 1. "at" = Specific Time 🕐

Use **at** for **specific times** (clock times).

**Examples:**
- "**at** 7 o'clock"
- "**at** noon" (12:00)
- "**at** midnight" (00:00)
- "**at** night" (the time period)
- "**at** lunchtime"
- "**at** the moment"

**Pattern:** **at** + specific time

<GamePlaceholder id="sentenceBuilder" />

### 2. "on" = Days 📅

Use **on** for **days** (days of the week, dates).

**Examples:**
- "**on** Monday"
- "**on** Tuesday"
- "**on** weekends"
- "**on** my birthday"
- "**on** Christmas Day"
- "**on** the 15th of March"

**Pattern:** **on** + day

### 3. "in" = Longer Periods 📆

Use **in** for **longer periods** (months, years, seasons, parts of day).

**Examples:**
- "**in** January" (month)
- "**in** 1990" (year)
- "**in** spring" (season)
- "**in** the morning" (part of day)
- "**in** the afternoon"
- "**in** the evening"
- "**in** the future"
- "**in** the past"

**Pattern:** **in** + longer period

**Note:** "in the morning/afternoon/evening" BUT "at night"!

<GamePlaceholder id="fixTheMistake" />

### 4. Quick Reference Table 📋

| Preposition | Use For | Examples |
|-------------|---------|----------|
| **at** | Specific times | at 7 o'clock, at noon, at night |
| **on** | Days | on Monday, on weekends, on my birthday |
| **in** | Longer periods | in January, in 1990, in the morning |

### 5. Common Mistakes ❌

1. **Wrong preposition for time**
   - ❌ "on 7 o'clock" → ✅ "**at** 7 o'clock"
   - ❌ "in Monday" → ✅ "**on** Monday"
   - ❌ "at 1990" → ✅ "**in** 1990"

2. **Confusing "at night" and "in the morning"**
   - ✅ "**at** night" (special case)
   - ✅ "**in** the morning" (part of day)

<GamePlaceholder id="verbPilot" />

### 6. Practice Makes Perfect! 🎓

**Remember:**
- **at** = specific time (at 7 o'clock)
- **on** = day (on Monday)
- **in** = longer period (in January, in 1990, in the morning)

**Try these:**
- "I wake up **at** 7 o'clock."
- "I go to school **on** Monday."
- "I was born **in** 1990."
- "I study **in** the morning."

**Master this, and you'll use time prepositions correctly!**
`,
    de: `
## at/on/in mit Zeit: Die Goldenen Regeln! ⏰

Präpositionen mit Zeit können verwirrend sein! Aber es gibt klare Regeln:

- **at** = spezifische Zeit
- **on** = Tag
- **in** = längere Perioden (Monat, Jahr, Jahreszeit)

### 1. "at" = Spezifische Zeit 🕐

Verwende **at** für **spezifische Zeiten** (Uhrzeiten).

**Beispiele:**
- "**at** 7 o'clock"
- "**at** noon" (12:00)
- "**at** midnight" (00:00)
- "**at** night" (die Zeitperiode)
- "**at** lunchtime"
- "**at** the moment"

**Muster:** **at** + spezifische Zeit

<GamePlaceholder id="sentenceBuilder" />

### 2. "on" = Tage 📅

Verwende **on** für **Tage** (Wochentage, Daten).

**Beispiele:**
- "**on** Monday"
- "**on** Tuesday"
- "**on** weekends"
- "**on** my birthday"
- "**on** Christmas Day"
- "**on** the 15th of March"

**Muster:** **on** + Tag

### 3. "in" = Längere Perioden 📆

Verwende **in** für **längere Perioden** (Monate, Jahre, Jahreszeiten, Tageszeiten).

**Beispiele:**
- "**in** January" (Monat)
- "**in** 1990" (Jahr)
- "**in** spring" (Jahreszeit)
- "**in** the morning" (Tageszeit)
- "**in** the afternoon"
- "**in** the evening"
- "**in** the future"
- "**in** the past"

**Muster:** **in** + längere Periode

**Hinweis:** "in the morning/afternoon/evening" ABER "at night"!

<GamePlaceholder id="fixTheMistake" />

### 4. Schnellreferenz-Tabelle 📋

| Präposition | Verwendung | Beispiele |
|-------------|------------|-----------|
| **at** | Spezifische Zeiten | at 7 o'clock, at noon, at night |
| **on** | Tage | on Monday, on weekends, on my birthday |
| **in** | Längere Perioden | in January, in 1990, in the morning |

### 5. Häufige Fehler ❌

1. **Falsche Präposition für Zeit**
   - ❌ "on 7 o'clock" → ✅ "**at** 7 o'clock"
   - ❌ "in Monday" → ✅ "**on** Monday"
   - ❌ "at 1990" → ✅ "**in** 1990"

2. **"at night" und "in the morning" verwechseln**
   - ✅ "**at** night" (Sonderfall)
   - ✅ "**in** the morning" (Tageszeit)

<GamePlaceholder id="verbPilot" />

### 6. Übung macht den Meister! 🎓

**Denk daran:**
- **at** = spezifische Zeit (at 7 o'clock)
- **on** = Tag (on Monday)
- **in** = längere Periode (in January, in 1990, in the morning)

**Versuche diese:**
- "I wake up **at** 7 o'clock."
- "I go to school **on** Monday."
- "I was born **in** 1990."
- "I study **in** the morning."

**Meistere das, und du wirst Zeitpräpositionen korrekt verwenden!**
`
  },
  task: {
    de: {
      title: 'Zeitpräpositionen üben',
      description: 'Schreibe 3 Sätze: einen mit at, einen mit on, und einen mit in.',
      checklist: [
        { text: 'Satz mit at (spezifische Zeit)', checked: false },
        { text: 'Satz mit on (Tag)', checked: false },
        { text: 'Satz mit in (längere Periode)', checked: false }
      ]
    },
    en: {
      title: 'Practicing Time Prepositions',
      description: 'Write 3 sentences: one with at, one with on, and one with in.',
      checklist: [
        { text: 'Sentence with at (specific time)', checked: false },
        { text: 'Sentence with on (day)', checked: false },
        { text: 'Sentence with in (longer period)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


