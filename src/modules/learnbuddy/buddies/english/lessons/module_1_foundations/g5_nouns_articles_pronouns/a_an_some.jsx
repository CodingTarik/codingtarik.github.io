import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I need ___ apple.", de: "Ich brauche ___ Apfel." },
    words: ["an", "a", "some", "the"],
    correct: "an",
    explanation: { en: "an + vowel sound (apple starts with 'a')", de: "an + Vokallaut (apple beginnt mit 'a')" }
  },
  {
    prompt: { en: "I want ___ book.", de: "Ich möchte ___ Buch." },
    words: ["a", "an", "some", "the"],
    correct: "a",
    explanation: { en: "a + consonant sound (book starts with 'b')", de: "a + Konsonantenlaut (book beginnt mit 'b')" }
  },
  {
    prompt: { en: "I have ___ apples.", de: "Ich habe ___ Äpfel." },
    words: ["some", "a", "an", "the"],
    correct: "some",
    explanation: { en: "some + plural countable (apples)", de: "some + Plural zählbar (apples)" }
  }
];

const grammarSmashData = [
  {
    prompt: "I need ___ hour.",
    options: ["an", "a", "some"],
    correct: "an",
    explanation: "an + hour (h is silent, starts with vowel sound)"
  },
  {
    prompt: "I want ___ university.",
    options: ["a", "an", "some"],
    correct: "a",
    explanation: "a + university (u sounds like 'you', consonant sound)"
  },
  {
    prompt: "I have ___ eggs.",
    options: ["some", "a", "an"],
    correct: "some",
    explanation: "some + plural"
  }
];

export const aAnSome = {
  id: 'a1_g71',
  title: {
    en: 'Countable Nouns with a/an and some',
    de: 'Zählbare Nomen mit a/an und some'
  },
  description: {
    en: "Using 'a/an' for singular and 'some' for plural countable nouns.",
    de: "'a/an' für Singular und 'some' für Plural zählbarer Nomen verwenden."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    grammarSmash: <GrammarGame type="grammarSmash" data={grammarSmashData} />
  },

  content: {
    en: `
## a/an and some: The Basics 📚

When talking about countable nouns, you need to know when to use **a/an** (singular) and **some** (plural).

### 1. "a" vs "an" - The Sound Rule 🔊

**Use "a"** before words that start with a **consonant sound**.
**Use "an"** before words that start with a **vowel sound** (a, e, i, o, u).

**Important:** It's about the **SOUND**, not the letter!

**Examples with "a":**
- **a** book (b = consonant)
- **a** cat (c = consonant)
- **a** dog (d = consonant)
- **a** university (u sounds like "you" = consonant sound)

**Examples with "an":**
- **an** apple (a = vowel)
- **an** egg (e = vowel)
- **an** hour (h is silent, starts with vowel sound)
- **an** umbrella (u = vowel)

<GamePlaceholder id="sentenceBuilder" />

### 2. "a/an" for Singular Countable Nouns 🔢

Use **a/an** with **singular** countable nouns (one thing).

**Examples:**
- "I need **a** pen." (one pen)
- "She has **an** apple." (one apple)
- "I want **a** car." (one car)

**Pattern:** a/an + singular countable noun

### 3. "some" for Plural Countable Nouns 📦

Use **some** with **plural** countable nouns (more than one, but not a specific number).

**Examples:**
- "I have **some** books." (more than one book)
- "She bought **some** apples." (more than one apple)
- "We need **some** chairs." (more than one chair)

**Pattern:** some + plural countable noun

**Note:** "Some" means "a few" or "several" - not a specific number.

<GamePlaceholder id="grammarSmash" />

### 4. Common Mistakes ❌

1. **Using "a/an" with plural**
   - ❌ "I have a books." → ✅ "I have **some** books."

2. **Using "some" with singular**
   - ❌ "I need some book." → ✅ "I need **a** book."

3. **Wrong choice: a vs an**
   - ❌ "a hour" → ✅ "**an** hour" (h is silent)
   - ❌ "an university" → ✅ "**a** university" (u sounds like "you")

**Remember:** a/an = singular, some = plural!
`,
    de: `
## a/an und some: Die Grundlagen 📚

Wenn du über zählbare Nomen sprichst, musst du wissen, wann du **a/an** (Singular) und **some** (Plural) verwendest.

### 1. "a" vs "an" - Die Lautregel 🔊

**Verwende "a"** vor Wörtern, die mit einem **Konsonantenlaut** beginnen.
**Verwende "an"** vor Wörtern, die mit einem **Vokallaut** beginnen (a, e, i, o, u).

**Wichtig:** Es geht um den **LAUT**, nicht den Buchstaben!

**Beispiele mit "a":**
- **a** book (b = Konsonant)
- **a** cat (c = Konsonant)
- **a** dog (d = Konsonant)
- **a** university (u klingt wie "you" = Konsonantenlaut)

**Beispiele mit "an":**
- **an** apple (a = Vokal)
- **an** egg (e = Vokal)
- **an** hour (h ist stumm, beginnt mit Vokallaut)
- **an** umbrella (u = Vokal)

<GamePlaceholder id="sentenceBuilder" />

### 2. "a/an" für Singular Zählbare Nomen 🔢

Verwende **a/an** mit **Singular** zählbaren Nomen (ein Ding).

**Beispiele:**
- "I need **a** pen." (ein Stift)
- "She has **an** apple." (ein Apfel)
- "I want **a** car." (ein Auto)

**Muster:** a/an + Singular zählbares Nomen

### 3. "some" für Plural Zählbare Nomen 📦

Verwende **some** mit **Plural** zählbaren Nomen (mehr als eins, aber keine spezifische Zahl).

**Beispiele:**
- "I have **some** books." (mehr als ein Buch)
- "She bought **some** apples." (mehr als ein Apfel)
- "We need **some** chairs." (mehr als ein Stuhl)

**Muster:** some + Plural zählbares Nomen

**Hinweis:** "Some" bedeutet "einige" oder "mehrere" - keine spezifische Zahl.

<GamePlaceholder id="grammarSmash" />

### 4. Häufige Fehler ❌

1. **"a/an" mit Plural verwenden**
   - ❌ "I have a books." → ✅ "I have **some** books."

2. **"some" mit Singular verwenden**
   - ❌ "I need some book." → ✅ "I need **a** book."

3. **Falsche Wahl: a vs an**
   - ❌ "a hour" → ✅ "**an** hour" (h ist stumm)
   - ❌ "an university" → ✅ "**a** university" (u klingt wie "you")

**Denk daran:** a/an = Singular, some = Plural!
`
  },
  task: {
    de: {
      title: 'a/an und some üben',
      description: 'Schreibe Sätze mit a/an (Singular) und some (Plural).',
      checklist: [
        { text: 'Satz mit a/an (Singular)', checked: false },
        { text: 'Satz mit some (Plural)', checked: false }
      ]
    },
    en: {
      title: 'Practicing a/an and some',
      description: 'Write sentences with a/an (singular) and some (plural).',
      checklist: [
        { text: 'Sentence with a/an (singular)', checked: false },
        { text: 'Sentence with some (plural)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

