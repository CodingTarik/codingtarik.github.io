import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "This is the ___ car in the showroom.", de: "Das ist das ___ Auto im Showroom." },
    words: ["cheapest", "cheap", "cheaper", "the"],
    correct: "cheapest",
    explanation: { en: "Superlative: cheap → cheapest (add -est)", de: "Superlativ: cheap → cheapest (füge -est hinzu)" }
  },
  {
    prompt: { en: "This is the ___ book I've ever read.", de: "Das ist das ___ Buch, das ich je gelesen habe." },
    words: ["most", "interesting", "the", "ever"],
    correct: "most interesting",
    explanation: { en: "Superlative: most + long adjective (most interesting)", de: "Superlativ: most + langes Adjektiv (most interesting)" }
  },
  {
    prompt: { en: "She is the ___ student in the class.", de: "Sie ist die ___ Studentin in der Klasse." },
    words: ["tallest", "tall", "taller", "the"],
    correct: "tallest",
    explanation: { en: "Superlative: tall → tallest (add -est)", de: "Superlativ: tall → tallest (füge -est hinzu)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "This is the most cheap car.",
    mistakeIndex: 3,
    correction: "cheapest",
    explanation: { en: "Short adjectives: add -est (cheapest), not 'most cheap'", de: "Kurze Adjektive: füge -est hinzu (cheapest), nicht 'most cheap'" }
  },
  {
    sentence: "This is the interestingest book.",
    mistakeIndex: 3,
    correction: "most interesting",
    explanation: { en: "Long adjectives: use 'most' (most interesting), not -est", de: "Lange Adjektive: verwende 'most' (most interesting), nicht -est" }
  },
  {
    sentence: "She is tallest student.",
    mistakeIndex: 2,
    correction: "the tallest",
    explanation: { en: "Superlative needs 'the' before it: the tallest", de: "Superlativ braucht 'the' davor: the tallest" }
  }
];

const translateThisData = [
  {
    prompt: { en: "This is the cheapest car.", de: "Das ist das billigste Auto." },
    correct: "the cheapest",
    explanation: { en: "Superlative: the + cheapest", de: "Superlativ: the + cheapest" }
  },
  {
    prompt: { en: "This is the most interesting book.", de: "Das ist das interessanteste Buch." },
    correct: "the most interesting",
    explanation: { en: "Superlative: the + most + adjective", de: "Superlativ: the + most + Adjektiv" }
  },
  {
    prompt: { en: "She is the tallest student.", de: "Sie ist die größte Studentin." },
    correct: "the tallest",
    explanation: { en: "Superlative: the + tallest", de: "Superlativ: the + tallest" }
  }
];

export const superlative = {
  id: 'a1_g108',
  title: {
    en: 'Superlative: the longest, the most enjoyable',
    de: 'Superlativ: the longest, the most enjoyable'
  },
  description: {
    en: "The highest degree: 'the cheapest', 'the most expensive', 'the best'.",
    de: "Der höchste Grad: 'the cheapest', 'the most expensive', 'the best'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    translateThis: <GrammarGame type="translateThis" data={translateThisData} />
  },

  content: {
    en: `
## Superlative: The Highest Degree! 🏆

The **superlative** form is used to say that something is **the most** or **the least** of all. We use it when comparing **three or more** things, or when something is the **best/worst** in a group.

**Pattern:** **the** + adjective + **-est** OR **the** + **most** + adjective

### 1. Short Adjectives: Add -est ✅

For **short adjectives** (usually 1-2 syllables), add **-est** and use **the** before it.

**Rules:**
- Most adjectives: add **-est** (cheap → **cheapest**)
- Ending in -e: add **-st** (nice → **nicest**)
- Ending in -y: change to **-iest** (happy → **happiest**)
- One vowel + one consonant: double consonant + **-est** (big → **biggest**)

**Examples:**
- "This is **the cheapest** car." (cheap → cheapest)
- "She is **the tallest** student." (tall → tallest)
- "This is **the nicest** book." (nice → nicest)
- "I am **the happiest** person." (happy → happiest)
- "This is **the biggest** box." (big → biggest)

**Pattern:** **the** + adjective + **-est**

<GamePlaceholder id="sentenceBuilder" />

### 2. Long Adjectives: Use "the most" 📚

For **long adjectives** (usually 3+ syllables), use **the most** before the adjective.

**Examples:**
- "This is **the most expensive** car." (expensive → the most expensive)
- "This is **the most interesting** book." (interesting → the most interesting)
- "She is **the most beautiful** person." (beautiful → the most beautiful)
- "This is **the most difficult** problem." (difficult → the most difficult)

**Pattern:** **the** + **most** + adjective

### 3. Irregular Superlatives ⚠️

Some adjectives have **irregular** superlative forms:

| Adjective | Superlative |
|-----------|-------------|
| **good** | **the best** |
| **bad** | **the worst** |
| **far** | **the farthest/furthest** |
| **many/much** | **the most** |
| **little** | **the least** |

**Examples:**
- "This is **the best** book." (not "the goodest")
- "This is **the worst** day." (not "the baddest")
- "I have **the most** books." (not "the manyest")

<GamePlaceholder id="fixTheMistake" />

### 4. Always Use "the"! ⭐

**Important:** Superlatives **always** use **the** before them!

- ✅ "**the** cheapest"
- ✅ "**the** most expensive"
- ✅ "**the** best"
- ❌ "cheapest" (wrong - missing "the")
- ❌ "most expensive" (wrong - missing "the")

### 5. Common Mistakes ❌

1. **Using "most" with short adjectives**
   - ❌ "the most cheap" → ✅ "**the cheapest**"

2. **Using -est with long adjectives**
   - ❌ "the interestingest" → ✅ "**the most interesting**"

3. **Forgetting "the"**
   - ❌ "cheapest car" → ✅ "**the cheapest** car"

4. **Wrong irregular form**
   - ❌ "the goodest" → ✅ "**the best**"

<GamePlaceholder id="translateThis" />

### 6. Practice Makes Perfect! 🎓

**Remember:**
- **Short adjectives** (1-2 syllables): add **-est** (cheapest, tallest)
- **Long adjectives** (3+ syllables): use **the most** (the most expensive, the most interesting)
- **Always use "the"** before the superlative
- **Compare 3+ things** or say something is the best/worst

**Try these:**
- "This is **the cheapest** car."
- "This is **the most interesting** book."
- "She is **the tallest** student."
- "This is **the best** day."

**Master this, and you'll express the highest degree correctly!**
`,
    de: `
## Superlativ: Der Höchste Grad! 🏆

Die **Superlativ**-Form wird verwendet, um zu sagen, dass etwas **das Meiste** oder **das Wenigste** von allen ist. Wir verwenden sie, wenn wir **drei oder mehr** Dinge vergleichen oder wenn etwas das **Beste/Schlechteste** in einer Gruppe ist.

**Muster:** **the** + Adjektiv + **-est** ODER **the** + **most** + Adjektiv

### 1. Kurze Adjektive: Füge -est hinzu ✅

Für **kurze Adjektive** (normalerweise 1-2 Silben), füge **-est** hinzu und verwende **the** davor.

**Regeln:**
- Die meisten Adjektive: füge **-est** hinzu (cheap → **cheapest**)
- Endet auf -e: füge **-st** hinzu (nice → **nicest**)
- Endet auf -y: ändere zu **-iest** (happy → **happiest**)
- Ein Vokal + ein Konsonant: verdopple Konsonant + **-est** (big → **biggest**)

**Beispiele:**
- "This is **the cheapest** car." (cheap → cheapest)
- "She is **the tallest** student." (tall → tallest)
- "This is **the nicest** book." (nice → nicest)
- "I am **the happiest** person." (happy → happiest)
- "This is **the biggest** box." (big → biggest)

**Muster:** **the** + Adjektiv + **-est**

<GamePlaceholder id="sentenceBuilder" />

### 2. Lange Adjektive: Verwende "the most" 📚

Für **lange Adjektive** (normalerweise 3+ Silben), verwende **the most** vor dem Adjektiv.

**Beispiele:**
- "This is **the most expensive** car." (expensive → the most expensive)
- "This is **the most interesting** book." (interesting → the most interesting)
- "She is **the most beautiful** person." (beautiful → the most beautiful)
- "This is **the most difficult** problem." (difficult → the most difficult)

**Muster:** **the** + **most** + Adjektiv

### 3. Unregelmäßige Superlative ⚠️

Einige Adjektive haben **unregelmäßige** Superlativformen:

| Adjektiv | Superlativ |
|----------|------------|
| **good** | **the best** |
| **bad** | **the worst** |
| **far** | **the farthest/furthest** |
| **many/much** | **the most** |
| **little** | **the least** |

**Beispiele:**
- "This is **the best** book." (nicht "the goodest")
- "This is **the worst** day." (nicht "the baddest")
- "I have **the most** books." (nicht "the manyest")

<GamePlaceholder id="fixTheMistake" />

### 4. Verwende Immer "the"! ⭐

**Wichtig:** Superlative verwenden **immer** **the** davor!

- ✅ "**the** cheapest"
- ✅ "**the** most expensive"
- ✅ "**the** best"
- ❌ "cheapest" (falsch - fehlt "the")
- ❌ "most expensive" (falsch - fehlt "the")

### 5. Häufige Fehler ❌

1. **"most" mit kurzen Adjektiven verwenden**
   - ❌ "the most cheap" → ✅ "**the cheapest**"

2. **-est mit langen Adjektiven verwenden**
   - ❌ "the interestingest" → ✅ "**the most interesting**"

3. **"the" vergessen**
   - ❌ "cheapest car" → ✅ "**the cheapest** car"

4. **Falsche unregelmäßige Form**
   - ❌ "the goodest" → ✅ "**the best**"

<GamePlaceholder id="translateThis" />

### 6. Übung macht den Meister! 🎓

**Denk daran:**
- **Kurze Adjektive** (1-2 Silben): füge **-est** hinzu (cheapest, tallest)
- **Lange Adjektive** (3+ Silben): verwende **the most** (the most expensive, the most interesting)
- **Verwende immer "the"** vor dem Superlativ
- **Vergleiche 3+ Dinge** oder sage, dass etwas das Beste/Schlechteste ist

**Versuche diese:**
- "This is **the cheapest** car."
- "This is **the most interesting** book."
- "She is **the tallest** student."
- "This is **the best** day."

**Meistere das, und du wirst den höchsten Grad korrekt ausdrücken!**
`
  },
  task: {
    de: {
      title: 'Superlativ üben',
      description: 'Schreibe 3 Sätze: einen mit -est, einen mit the most, und einen mit unregelmäßigem Superlativ.',
      checklist: [
        { text: 'Satz mit -est Superlativ', checked: false },
        { text: 'Satz mit the most Superlativ', checked: false },
        { text: 'Satz mit unregelmäßigem Superlativ', checked: false }
      ]
    },
    en: {
      title: 'Practicing Superlatives',
      description: 'Write 3 sentences: one with -est, one with the most, and one with irregular superlative.',
      checklist: [
        { text: 'Sentence with -est superlative', checked: false },
        { text: 'Sentence with the most superlative', checked: false },
        { text: 'Sentence with irregular superlative', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


