import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "This car is ___ than that one.", de: "Dieses Auto ist ___ als jenes." },
    words: ["cheaper", "cheap", "cheapest", "than", "that"],
    correct: "cheaper than",
    explanation: { en: "Comparative: cheap → cheaper (add -er)", de: "Komparativ: cheap → cheaper (füge -er hinzu)" }
  },
  {
    prompt: { en: "This book is ___ than that one.", de: "Dieses Buch ist ___ als jenes." },
    words: ["more", "interesting", "than", "most"],
    correct: "more interesting than",
    explanation: { en: "Comparative: more + long adjective (more interesting)", de: "Komparativ: more + langes Adjektiv (more interesting)" }
  },
  {
    prompt: { en: "She is ___ than me.", de: "Sie ist ___ als ich." },
    words: ["taller", "tall", "tallest", "than"],
    correct: "taller than",
    explanation: { en: "Comparative: tall → taller (add -er)", de: "Komparativ: tall → taller (füge -er hinzu)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "This car is more cheap than that one.",
    mistakeIndex: 3,
    correction: "cheaper",
    explanation: { en: "Short adjectives: add -er (cheaper), not 'more cheap'", de: "Kurze Adjektive: füge -er hinzu (cheaper), nicht 'more cheap'" }
  },
  {
    sentence: "This book is interestinger than that one.",
    mistakeIndex: 2,
    correction: "more interesting",
    explanation: { en: "Long adjectives: use 'more' (more interesting), not -er", de: "Lange Adjektive: verwende 'more' (more interesting), nicht -er" }
  },
  {
    sentence: "She is tall than me.",
    mistakeIndex: 2,
    correction: "taller",
    explanation: { en: "Comparative needs -er: taller (not tall)", de: "Komparativ braucht -er: taller (nicht tall)" }
  }
];

const grammarMoleData = [
  {
    prompt: "This car is ___ than that one.",
    options: ["cheaper", "cheap", "cheapest"],
    correct: "cheaper",
    explanation: "Short adjective: add -er"
  },
  {
    prompt: "This book is ___ than that one.",
    options: ["more interesting", "interestinger", "interesting"],
    correct: "more interesting",
    explanation: "Long adjective: use 'more'"
  },
  {
    prompt: "She is ___ than me.",
    options: ["taller", "tall", "tallest"],
    correct: "taller",
    explanation: "Comparative: add -er"
  }
];

export const comparative1 = {
  id: 'a1_g105',
  title: {
    en: 'Comparative 1: cheaper, more expensive',
    de: 'Komparativ 1: cheaper, more expensive'
  },
  description: {
    en: "Comparing two things: 'cheaper than', 'more expensive than'.",
    de: "Zwei Dinge vergleichen: 'cheaper than', 'more expensive than'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarMole: <GrammarGame type="grammarMole" data={grammarMoleData} />
  },

  content: {
    en: `
## Comparative: Comparing Two Things 🔄

The **comparative** form is used to compare **two** things. We use it to say that one thing is **more** or **less** than another.

**Pattern:** adjective + **-er** + **than** OR **more** + adjective + **than**

### 1. Short Adjectives: Add -er ✅

For **short adjectives** (usually 1-2 syllables), add **-er**.

**Rules:**
- Most adjectives: add **-er** (cheap → **cheaper**)
- Ending in -e: add **-r** (nice → **nicer**)
- Ending in -y: change to **-ier** (happy → **happier**)
- One vowel + one consonant: double consonant + **-er** (big → **bigger**)

**Examples:**
- "This car is **cheaper** than that one." (cheap → cheaper)
- "She is **taller** than me." (tall → taller)
- "This book is **nicer** than that one." (nice → nicer)
- "I am **happier** now." (happy → happier)
- "This box is **bigger** than that one." (big → bigger)

**Pattern:** adjective + **-er** + **than**

<GamePlaceholder id="sentenceBuilder" />

### 2. Long Adjectives: Use "more" 📚

For **long adjectives** (usually 3+ syllables), use **more** before the adjective.

**Examples:**
- "This car is **more expensive** than that one." (expensive → more expensive)
- "This book is **more interesting** than that one." (interesting → more interesting)
- "She is **more beautiful** than her sister." (beautiful → more beautiful)
- "This problem is **more difficult** than that one." (difficult → more difficult)

**Pattern:** **more** + adjective + **than**

### 3. Irregular Comparatives ⚠️

Some adjectives have **irregular** comparative forms:

| Adjective | Comparative |
|-----------|-------------|
| **good** | **better** |
| **bad** | **worse** |
| **far** | **farther/further** |
| **many/much** | **more** |
| **little** | **less** |

**Examples:**
- "This is **better** than that." (not "gooder")
- "This is **worse** than that." (not "badder")
- "I have **more** books than you." (not "manyer")

<GamePlaceholder id="fixTheMistake" />

### 4. Common Mistakes ❌

1. **Using "more" with short adjectives**
   - ❌ "more cheap" → ✅ "**cheaper**"

2. **Using -er with long adjectives**
   - ❌ "interestinger" → ✅ "**more interesting**"

3. **Forgetting "than"**
   - ❌ "This is cheaper that one." → ✅ "This is cheaper **than** that one."

4. **Wrong irregular form**
   - ❌ "gooder" → ✅ "**better**"

<GamePlaceholder id="grammarMole" />

### 5. Practice Makes Perfect! 🎓

**Remember:**
- **Short adjectives** (1-2 syllables): add **-er** (cheaper, taller)
- **Long adjectives** (3+ syllables): use **more** (more expensive, more interesting)
- **Always use "than"** after the comparative

**Try these:**
- "This car is **cheaper** than that one."
- "This book is **more interesting** than that one."
- "She is **taller** than me."

**Master this, and you'll compare things correctly!**
`,
    de: `
## Komparativ: Zwei Dinge Vergleichen 🔄

Die **Komparativ**-Form wird verwendet, um **zwei** Dinge zu vergleichen. Wir verwenden sie, um zu sagen, dass ein Ding **mehr** oder **weniger** als ein anderes ist.

**Muster:** Adjektiv + **-er** + **than** ODER **more** + Adjektiv + **than**

### 1. Kurze Adjektive: Füge -er hinzu ✅

Für **kurze Adjektive** (normalerweise 1-2 Silben), füge **-er** hinzu.

**Regeln:**
- Die meisten Adjektive: füge **-er** hinzu (cheap → **cheaper**)
- Endet auf -e: füge **-r** hinzu (nice → **nicer**)
- Endet auf -y: ändere zu **-ier** (happy → **happier**)
- Ein Vokal + ein Konsonant: verdopple Konsonant + **-er** (big → **bigger**)

**Beispiele:**
- "This car is **cheaper** than that one." (cheap → cheaper)
- "She is **taller** than me." (tall → taller)
- "This book is **nicer** than that one." (nice → nicer)
- "I am **happier** now." (happy → happier)
- "This box is **bigger** than that one." (big → bigger)

**Muster:** Adjektiv + **-er** + **than**

<GamePlaceholder id="sentenceBuilder" />

### 2. Lange Adjektive: Verwende "more" 📚

Für **lange Adjektive** (normalerweise 3+ Silben), verwende **more** vor dem Adjektiv.

**Beispiele:**
- "This car is **more expensive** than that one." (expensive → more expensive)
- "This book is **more interesting** than that one." (interesting → more interesting)
- "She is **more beautiful** than her sister." (beautiful → more beautiful)
- "This problem is **more difficult** than that one." (difficult → more difficult)

**Muster:** **more** + Adjektiv + **than**

### 3. Unregelmäßige Komparative ⚠️

Einige Adjektive haben **unregelmäßige** Komparativformen:

| Adjektiv | Komparativ |
|----------|------------|
| **good** | **better** |
| **bad** | **worse** |
| **far** | **farther/further** |
| **many/much** | **more** |
| **little** | **less** |

**Beispiele:**
- "This is **better** than that." (nicht "gooder")
- "This is **worse** than that." (nicht "badder")
- "I have **more** books than you." (nicht "manyer")

<GamePlaceholder id="fixTheMistake" />

### 4. Häufige Fehler ❌

1. **"more" mit kurzen Adjektiven verwenden**
   - ❌ "more cheap" → ✅ "**cheaper**"

2. **-er mit langen Adjektiven verwenden**
   - ❌ "interestinger" → ✅ "**more interesting**"

3. **"than" vergessen**
   - ❌ "This is cheaper that one." → ✅ "This is cheaper **than** that one."

4. **Falsche unregelmäßige Form**
   - ❌ "gooder" → ✅ "**better**"

<GamePlaceholder id="grammarMole" />

### 5. Übung macht den Meister! 🎓

**Denk daran:**
- **Kurze Adjektive** (1-2 Silben): füge **-er** hinzu (cheaper, taller)
- **Lange Adjektive** (3+ Silben): verwende **more** (more expensive, more interesting)
- **Verwende immer "than"** nach dem Komparativ

**Versuche diese:**
- "This car is **cheaper** than that one."
- "This book is **more interesting** than that one."
- "She is **taller** than me."

**Meistere das, und du wirst Dinge korrekt vergleichen!**
`
  },
  task: {
    de: {
      title: 'Komparativ üben',
      description: 'Schreibe 3 Sätze: einen mit -er, einen mit more, und einen mit unregelmäßigem Komparativ.',
      checklist: [
        { text: 'Satz mit -er Komparativ', checked: false },
        { text: 'Satz mit more Komparativ', checked: false },
        { text: 'Satz mit unregelmäßigem Komparativ', checked: false }
      ]
    },
    en: {
      title: 'Practicing Comparatives',
      description: 'Write 3 sentences: one with -er, one with more, and one with irregular comparative.',
      checklist: [
        { text: 'Sentence with -er comparative', checked: false },
        { text: 'Sentence with more comparative', checked: false },
        { text: 'Sentence with irregular comparative', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

