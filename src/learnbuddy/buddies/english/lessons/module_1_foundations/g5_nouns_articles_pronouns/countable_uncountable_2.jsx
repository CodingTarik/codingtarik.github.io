import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I need ___ information.", de: "Ich brauche ___ Information." },
    words: ["some", "a", "an", "many"],
    correct: "some",
    explanation: { en: "Uncountable: use 'some' (not 'a' or 'many')", de: "Unzählbar: verwende 'some' (nicht 'a' oder 'many')" }
  },
  {
    prompt: { en: "I have ___ friends.", de: "Ich habe ___ Freunde." },
    words: ["many", "much", "some", "a"],
    correct: "many",
    explanation: { en: "Countable plural: use 'many' (not 'much')", de: "Zählbar Plural: verwende 'many' (nicht 'much')" }
  },
  {
    prompt: { en: "There isn't ___ time.", de: "Es gibt nicht ___ Zeit." },
    words: ["much", "many", "a", "an"],
    correct: "much",
    explanation: { en: "Uncountable: use 'much' in negative (not 'many')", de: "Unzählbar: verwende 'much' in Verneinung (nicht 'many')" }
  }
];

const grammarMoleData = [
  {
    prompt: "I have ___ books.",
    options: ["many", "much", "some"],
    correct: "many",
    explanation: "Countable: many books"
  },
  {
    prompt: "I don't have ___ money.",
    options: ["much", "many", "some"],
    correct: "much",
    explanation: "Uncountable: much money"
  },
  {
    prompt: "I need ___ advice.",
    options: ["some", "a", "many"],
    correct: "some",
    explanation: "Uncountable: some advice"
  }
];

export const countableUncountable2 = {
  id: 'a1_g70',
  title: {
    en: 'Countable and Uncountable Nouns 2: Quantifiers',
    de: 'Zählbare und Unzählbare Nomen 2: Quantoren'
  },
  description: {
    en: "Using 'many' with countable nouns and 'much' with uncountable nouns.",
    de: "'Many' mit zählbaren Nomen und 'much' mit unzählbaren Nomen verwenden."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    grammarMole: <GrammarGame type="grammarMole" data={grammarMoleData} />
  },

  content: {
    en: `
## Quantifiers: Many vs. Much 📊

Now that you understand countable and uncountable nouns, you need to know which quantifiers to use with each type!

**The Golden Rule:**
- **Many** = for **countable** nouns (things you can count)
- **Much** = for **uncountable** nouns (things you cannot count)

### 1. "Many" with Countable Nouns 🔢

Use **many** with countable nouns (plural).

**Examples:**
- "I have **many** books." (books = countable)
- "There are **many** students." (students = countable)
- "She has **many** friends." (friends = countable)

**Common Pattern:** many + plural countable noun

### 2. "Much" with Uncountable Nouns 💧

Use **much** with uncountable nouns (no plural).

**Examples:**
- "I don't have **much** money." (money = uncountable)
- "There isn't **much** time." (time = uncountable)
- "She doesn't drink **much** water." (water = uncountable)

**Common Pattern:** much + uncountable noun

**Note:** "Much" is often used in **negative** sentences and **questions**.

### 3. "Some" - Works with Both! ✅

**Some** can be used with both countable and uncountable nouns!

**Examples:**
- "I have **some** books." (countable)
- "I have **some** water." (uncountable)
- "I need **some** help." (uncountable)
- "I want **some** apples." (countable)

**Remember:** "Some" is very flexible and commonly used!

<GamePlaceholder id="sentenceBuilder" />

### 4. Common Mistakes ❌

1. **Using "much" with countable nouns**
   - ❌ "I have much books." → ✅ "I have **many** books."

2. **Using "many" with uncountable nouns**
   - ❌ "I don't have many money." → ✅ "I don't have **much** money."

3. **Forgetting the plural**
   - ❌ "I have many book." → ✅ "I have **many books**."

<GamePlaceholder id="grammarMole" />

**Remember:** Many = countable, Much = uncountable!
`,
    de: `
## Quantoren: Many vs. Much 📊

Jetzt, da du zählbare und unzählbare Nomen verstehst, musst du wissen, welche Quantoren mit jedem Typ verwendet werden!

**Die Goldene Regel:**
- **Many** = für **zählbare** Nomen (Dinge, die du zählen kannst)
- **Much** = für **unzählbare** Nomen (Dinge, die du nicht zählen kannst)

### 1. "Many" mit Zählbaren Nomen 🔢

Verwende **many** mit zählbaren Nomen (Plural).

**Beispiele:**
- "I have **many** books." (books = zählbar)
- "There are **many** students." (students = zählbar)
- "She has **many** friends." (friends = zählbar)

**Häufiges Muster:** many + Plural zählbares Nomen

### 2. "Much" mit Unzählbaren Nomen 💧

Verwende **much** mit unzählbaren Nomen (kein Plural).

**Beispiele:**
- "I don't have **much** money." (money = unzählbar)
- "There isn't **much** time." (time = unzählbar)
- "She doesn't drink **much** water." (water = unzählbar)

**Häufiges Muster:** much + unzählbares Nomen

**Hinweis:** "Much" wird oft in **verneinten** Sätzen und **Fragen** verwendet.

### 3. "Some" - Funktioniert mit Beiden! ✅

**Some** kann mit sowohl zählbaren als auch unzählbaren Nomen verwendet werden!

**Beispiele:**
- "I have **some** books." (zählbar)
- "I have **some** water." (unzählbar)
- "I need **some** help." (unzählbar)
- "I want **some** apples." (zählbar)

**Denk daran:** "Some" ist sehr flexibel und häufig verwendet!

<GamePlaceholder id="sentenceBuilder" />

### 4. Häufige Fehler ❌

1. **"much" mit zählbaren Nomen verwenden**
   - ❌ "I have much books." → ✅ "I have **many** books."

2. **"many" mit unzählbaren Nomen verwenden**
   - ❌ "I don't have many money." → ✅ "I don't have **much** money."

3. **Plural vergessen**
   - ❌ "I have many book." → ✅ "I have **many books**."

<GamePlaceholder id="grammarMole" />

**Denk daran:** Many = zählbar, Much = unzählbar!
`
  },
  task: {
    de: {
      title: 'Quantoren üben',
      description: 'Schreibe Sätze mit many, much und some.',
      checklist: [
        { text: 'Satz mit many (zählbar)', checked: false },
        { text: 'Satz mit much (unzählbar)', checked: false },
        { text: 'Satz mit some (beide)', checked: false }
      ]
    },
    en: {
      title: 'Practicing Quantifiers',
      description: 'Write sentences with many, much, and some.',
      checklist: [
        { text: 'Sentence with many (countable)', checked: false },
        { text: 'Sentence with much (uncountable)', checked: false },
        { text: 'Sentence with some (both)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

