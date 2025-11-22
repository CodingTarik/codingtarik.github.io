import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I have a ___ car.", de: "Ich habe ein ___ Auto." },
    words: ["nice", "new", "red", "a"],
    correct: "nice new red",
    explanation: { en: "Opinion + Size/Age + Color (nice new red car)", de: "Meinung + Größe/Alter + Farbe (nice new red car)" }
  },
  {
    prompt: { en: "She looks ___", de: "Sie sieht ___ aus" },
    words: ["tired", "looks", "She", "very"],
    correct: "She looks tired",
    explanation: { en: "look + adjective (not adverb)", de: "look + Adjektiv (nicht Adverb)" }
  },
  {
    prompt: { en: "This is a ___ house.", de: "Das ist ein ___ Haus." },
    words: ["big", "old", "beautiful", "a"],
    correct: "beautiful big old",
    explanation: { en: "Opinion + Size + Age (beautiful big old house)", de: "Meinung + Größe + Alter (beautiful big old house)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I have a red nice car.",
    mistakeIndex: 2,
    correction: "nice red",
    explanation: { en: "Order: Opinion before Color (nice red car)", de: "Reihenfolge: Meinung vor Farbe (nice red car)" }
  },
  {
    sentence: "She looks tiredly.",
    mistakeIndex: 2,
    correction: "tired",
    explanation: { en: "look + adjective (not adverb), not 'tiredly'", de: "look + Adjektiv (nicht Adverb), nicht 'tiredly'" }
  },
  {
    sentence: "I have a new nice car.",
    mistakeIndex: 2,
    correction: "nice new",
    explanation: { en: "Order: Opinion before Age (nice new car)", de: "Reihenfolge: Meinung vor Alter (nice new car)" }
  }
];

const verbPilotData = [
  {
    prompt: "Catch the correct ADJECTIVE ORDER!",
    targets: ["nice", "big", "red"],
    distractors: ["car", "very", "looks", "is", "a"],
    correct: "nice"
  }
];

export const adjectivesPosition = {
  id: 'a1_g99',
  title: {
    en: 'Adjectives: Position and Order',
    de: 'Adjektive: Position und Reihenfolge'
  },
  description: {
    en: "Where to put adjectives: 'a nice new house' and 'you look tired'.",
    de: "Wo Adjektive stehen: 'a nice new house' und 'you look tired'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    verbPilot: <GrammarGame type="verbPilot" data={verbPilotData} />
  },

  content: {
    en: `
## Adjective Position: Where Do They Go? 📍

Adjectives in English have specific positions! They can come **before** a noun or **after** certain verbs. Understanding where to put them is important for correct English!

### 1. Adjectives Before Nouns (Most Common) 📦

Most adjectives come **before** the noun they describe.

**Pattern:** adjective + noun

**Examples:**
- "a **nice** car" (nice + car)
- "a **big** house" (big + house)
- "a **red** apple" (red + apple)
- "an **old** book" (old + book)

**Key Point:** When you have **one** adjective, it goes **before** the noun!

<GamePlaceholder id="sentenceBuilder" />

### 2. Multiple Adjectives: The Order! 🎨

When you have **more than one** adjective, there's a specific order:

**Order:** Opinion → Size → Age → Shape → Color → Origin → Material → Purpose

**Common Order (Simplified):**
1. **Opinion** (nice, beautiful, ugly, good, bad)
2. **Size** (big, small, large, tiny)
3. **Age** (old, new, young, ancient)
4. **Color** (red, blue, green, black)
5. **Origin** (American, French, Chinese)
6. **Material** (wooden, metal, plastic)
7. **Purpose** (sleeping, cooking)

**Examples:**
- "a **nice big** car" (Opinion + Size)
- "a **beautiful old** house" (Opinion + Age)
- "a **nice new red** car" (Opinion + Age + Color)
- "a **big old wooden** table" (Size + Age + Material)

**Remember:** You don't need all categories! Just follow the order for the ones you use.

### 3. Adjectives After Verbs (look, feel, seem, etc.) 👀

Some verbs are followed by **adjectives**, not adverbs! These verbs describe **states** or **appearances**.

**Common Verbs:**
- **look** (appearance)
- **feel** (sensation)
- **seem** (appearance)
- **appear** (appearance)
- **sound** (perception)
- **taste** (perception)
- **smell** (perception)
- **be** (state)

**Pattern:** verb + adjective

**Examples:**
- "You **look tired**." (not "tiredly")
- "I **feel happy**." (not "happily")
- "She **seems nice**." (not "nicely")
- "The food **tastes good**." (not "well")
- "The music **sounds loud**." (not "loudly")

**Important:** These verbs are followed by **adjectives**, not adverbs!

<GamePlaceholder id="fixTheMistake" />

### 4. Common Mistakes ❌

1. **Wrong adjective order**
   - ❌ "a red nice car" → ✅ "a **nice red** car" (Opinion before Color)

2. **Using adverb instead of adjective**
   - ❌ "You look **tiredly**." → ✅ "You look **tired**."

3. **Wrong position**
   - ❌ "car nice" → ✅ "**nice** car"

<GamePlaceholder id="verbPilot" />

### 5. Practice Makes Perfect! 🎓

**Remember:**
- **Before noun:** adjective + noun ("a nice car")
- **After verbs:** verb + adjective ("look tired")
- **Multiple adjectives:** Opinion → Size → Age → Color

**Try these:**
- "a **beautiful big old** house" (Opinion + Size + Age)
- "You **look happy**." (verb + adjective)

**Master this, and your adjectives will be in the right place!**
`,
    de: `
## Adjektivposition: Wo Gehen Sie Hin? 📍

Adjektive im Englischen haben spezifische Positionen! Sie können **vor** einem Nomen oder **nach** bestimmten Verben stehen. Zu verstehen, wo sie hingehören, ist wichtig für korrektes Englisch!

### 1. Adjektive Vor Nomen (Am Häufigsten) 📦

Die meisten Adjektive stehen **vor** dem Nomen, das sie beschreiben.

**Muster:** Adjektiv + Nomen

**Beispiele:**
- "a **nice** car" (nice + car)
- "a **big** house" (big + house)
- "a **red** apple" (red + apple)
- "an **old** book" (old + book)

**Wichtiger Punkt:** Wenn du **ein** Adjektiv hast, steht es **vor** dem Nomen!

<GamePlaceholder id="sentenceBuilder" />

### 2. Mehrere Adjektive: Die Reihenfolge! 🎨

Wenn du **mehr als ein** Adjektiv hast, gibt es eine spezifische Reihenfolge:

**Reihenfolge:** Meinung → Größe → Alter → Form → Farbe → Herkunft → Material → Zweck

**Häufige Reihenfolge (Vereinfacht):**
1. **Meinung** (nice, beautiful, ugly, good, bad)
2. **Größe** (big, small, large, tiny)
3. **Alter** (old, new, young, ancient)
4. **Farbe** (red, blue, green, black)
5. **Herkunft** (American, French, Chinese)
6. **Material** (wooden, metal, plastic)
7. **Zweck** (sleeping, cooking)

**Beispiele:**
- "a **nice big** car" (Meinung + Größe)
- "a **beautiful old** house" (Meinung + Alter)
- "a **nice new red** car" (Meinung + Alter + Farbe)
- "a **big old wooden** table" (Größe + Alter + Material)

**Denk daran:** Du brauchst nicht alle Kategorien! Folge einfach der Reihenfolge für die, die du verwendest.

### 3. Adjektive Nach Verben (look, feel, seem, etc.) 👀

Einige Verben werden von **Adjektiven** gefolgt, nicht Adverbien! Diese Verben beschreiben **Zustände** oder **Erscheinungen**.

**Häufige Verben:**
- **look** (Aussehen)
- **feel** (Gefühl)
- **seem** (Erscheinung)
- **appear** (Erscheinung)
- **sound** (Wahrnehmung)
- **taste** (Wahrnehmung)
- **smell** (Wahrnehmung)
- **be** (Zustand)

**Muster:** Verb + Adjektiv

**Beispiele:**
- "You **look tired**." (nicht "tiredly")
- "I **feel happy**." (nicht "happily")
- "She **seems nice**." (nicht "nicely")
- "The food **tastes good**." (nicht "well")
- "The music **sounds loud**." (nicht "loudly")

**Wichtig:** Diese Verben werden von **Adjektiven** gefolgt, nicht Adverbien!

<GamePlaceholder id="fixTheMistake" />

### 4. Häufige Fehler ❌

1. **Falsche Adjektivreihenfolge**
   - ❌ "a red nice car" → ✅ "a **nice red** car" (Meinung vor Farbe)

2. **Adverb statt Adjektiv verwenden**
   - ❌ "You look **tiredly**." → ✅ "You look **tired**."

3. **Falsche Position**
   - ❌ "car nice" → ✅ "**nice** car"

<GamePlaceholder id="verbPilot" />

### 5. Übung macht den Meister! 🎓

**Denk daran:**
- **Vor Nomen:** Adjektiv + Nomen ("a nice car")
- **Nach Verben:** Verb + Adjektiv ("look tired")
- **Mehrere Adjektive:** Meinung → Größe → Alter → Farbe

**Versuche diese:**
- "a **beautiful big old** house" (Meinung + Größe + Alter)
- "You **look happy**." (Verb + Adjektiv)

**Meistere das, und deine Adjektive werden an der richtigen Stelle stehen!**
`
  },
  task: {
    de: {
      title: 'Adjektivposition üben',
      description: 'Schreibe 3 Sätze: einen mit mehreren Adjektiven vor dem Nomen und zwei mit Adjektiv nach Verb.',
      checklist: [
        { text: 'Satz mit mehreren Adjektiven (vor Nomen)', checked: false },
        { text: 'Satz 1 mit Adjektiv nach Verb', checked: false },
        { text: 'Satz 2 mit Adjektiv nach Verb', checked: false }
      ]
    },
    en: {
      title: 'Practicing Adjective Position',
      description: 'Write 3 sentences: one with multiple adjectives before noun and two with adjective after verb.',
      checklist: [
        { text: 'Sentence with multiple adjectives (before noun)', checked: false },
        { text: 'Sentence 1 with adjective after verb', checked: false },
        { text: 'Sentence 2 with adjective after verb', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

