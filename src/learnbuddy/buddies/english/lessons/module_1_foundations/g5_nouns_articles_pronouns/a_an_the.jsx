import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I need ___ book.", de: "Ich brauche ___ Buch." },
    words: ["a", "an", "the", "some"],
    correct: "a",
    explanation: { en: "a = any book (not specific)", de: "a = irgendein Buch (nicht spezifisch)" }
  },
  {
    prompt: { en: "___ book on the table is mine.", de: "___ Buch auf dem Tisch ist meins." },
    words: ["The", "A", "An", "Some"],
    correct: "The",
    explanation: { en: "the = specific book (we know which one)", de: "the = spezifisches Buch (wir wissen welches)" }
  },
  {
    prompt: { en: "I saw ___ elephant at the zoo.", de: "Ich sah ___ Elefant im Zoo." },
    words: ["an", "a", "the", "some"],
    correct: "an",
    explanation: { en: "an = first mention (not specific yet)", de: "an = erste Erwähnung (noch nicht spezifisch)" }
  }
];

const grammarSmashData = [
  {
    prompt: "I want ___ apple.",
    options: ["an", "the", "some"],
    correct: "an",
    explanation: "First mention, not specific"
  },
  {
    prompt: "___ apple you gave me was delicious.",
    options: ["The", "A", "An"],
    correct: "The",
    explanation: "Specific apple (we know which one)"
  },
  {
    prompt: "I need ___ pen. ___ pen is on my desk.",
    options: ["a / The", "the / A", "an / The"],
    correct: "a / The",
    explanation: "First mention: a, second mention: the"
  }
];

export const aAnThe = {
  id: 'a1_g72',
  title: {
    en: 'a/an and the: Articles',
    de: 'a/an und the: Artikel'
  },
  description: {
    en: "Understanding when to use 'a/an' (general) vs 'the' (specific).",
    de: "Verstehen, wann 'a/an' (allgemein) vs 'the' (spezifisch) verwendet wird."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    grammarSmash: <GrammarGame type="grammarSmash" data={grammarSmashData} />
  },

  content: {
    en: `
## a/an vs. the: The Article System 📖

Articles are small words that come before nouns. Understanding when to use **a/an** vs **the** is crucial for correct English!

### 1. "a/an" = General, Not Specific 🌍

Use **a/an** when you're talking about **any** thing, not a specific one.

**Examples:**
- "I need **a** pen." (any pen, not a specific one)
- "She has **an** apple." (any apple)
- "I want **a** car." (any car)

**Key Point:** First mention, general, not specific

### 2. "the" = Specific, Known 🎯

Use **the** when you're talking about a **specific** thing that both you and the listener know about.

**Examples:**
- "**The** pen on my desk is blue." (specific pen - we know which one)
- "**The** apple you gave me was delicious." (specific apple)
- "**The** car I bought is red." (specific car)

**Key Point:** Specific, known, or mentioned before

<GamePlaceholder id="sentenceBuilder" />

### 3. The Pattern: First Mention vs. Second Mention 🔄

**First mention:** Use **a/an** (general)
**Second mention:** Use **the** (now we know which one)

**Example:**
- "I saw **a** cat. **The** cat was black." (First: a, Second: the)
- "I need **a** book. **The** book is on the table." (First: a, Second: the)

<GamePlaceholder id="grammarSmash" />

### 4. Common Uses of "the" 🎯

Use **the** when:
- Talking about something **specific**: "**The** book on the table"
- Something **unique**: "**the** sun", "**the** moon", "**the** earth"
- Something **mentioned before**: "I saw a dog. **The** dog was big."
- With **superlatives**: "**the** best", "**the** biggest"

**Remember:** a/an = general, the = specific!
`,
    de: `
## a/an vs. the: Das Artikelsystem 📖

Artikel sind kleine Wörter, die vor Nomen stehen. Zu verstehen, wann **a/an** vs **the** verwendet wird, ist entscheidend für korrektes Englisch!

### 1. "a/an" = Allgemein, Nicht Spezifisch 🌍

Verwende **a/an**, wenn du über **irgendein** Ding sprichst, nicht ein spezifisches.

**Beispiele:**
- "I need **a** pen." (irgendein Stift, nicht ein spezifischer)
- "She has **an** apple." (irgendein Apfel)
- "I want **a** car." (irgendein Auto)

**Wichtiger Punkt:** Erste Erwähnung, allgemein, nicht spezifisch

### 2. "the" = Spezifisch, Bekannt 🎯

Verwende **the**, wenn du über ein **spezifisches** Ding sprichst, das sowohl du als auch der Zuhörer kennen.

**Beispiele:**
- "**The** pen on my desk is blue." (spezifischer Stift - wir wissen welcher)
- "**The** apple you gave me was delicious." (spezifischer Apfel)
- "**The** car I bought is red." (spezifisches Auto)

**Wichtiger Punkt:** Spezifisch, bekannt oder vorher erwähnt

<GamePlaceholder id="sentenceBuilder" />

### 3. Das Muster: Erste vs. Zweite Erwähnung 🔄

**Erste Erwähnung:** Verwende **a/an** (allgemein)
**Zweite Erwähnung:** Verwende **the** (jetzt wissen wir welches)

**Beispiel:**
- "I saw **a** cat. **The** cat was black." (Erste: a, Zweite: the)
- "I need **a** book. **The** book is on the table." (Erste: a, Zweite: the)

<GamePlaceholder id="grammarSmash" />

### 4. Häufige Verwendungen von "the" 🎯

Verwende **the**, wenn:
- Du über etwas **Spezifisches** sprichst: "**The** book on the table"
- Etwas **Einzigartiges**: "**the** sun", "**the** moon", "**the** earth"
- Etwas **vorher erwähnt**: "I saw a dog. **The** dog was big."
- Mit **Superlativen**: "**the** best", "**the** biggest"

**Denk daran:** a/an = allgemein, the = spezifisch!
`
  },
  task: {
    de: {
      title: 'Artikel üben',
      description: 'Schreibe Sätze mit a/an (allgemein) und the (spezifisch).',
      checklist: [
        { text: 'Satz mit a/an (erste Erwähnung)', checked: false },
        { text: 'Satz mit the (spezifisch)', checked: false }
      ]
    },
    en: {
      title: 'Practicing Articles',
      description: 'Write sentences with a/an (general) and the (specific).',
      checklist: [
        { text: 'Sentence with a/an (first mention)', checked: false },
        { text: 'Sentence with the (specific)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

