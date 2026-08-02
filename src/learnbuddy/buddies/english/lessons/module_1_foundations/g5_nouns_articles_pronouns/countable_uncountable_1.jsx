import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I have three ___", de: "Ich habe drei ___" },
    words: ["apples", "apple", "water", "milk"],
    correct: "apples",
    explanation: { en: "Countable: apples (can count: 1, 2, 3 apples)", de: "Zählbar: apples (kann zählen: 1, 2, 3 Äpfel)" }
  },
  {
    prompt: { en: "I need some ___", de: "Ich brauche etwas ___" },
    words: ["water", "waters", "book", "books"],
    correct: "water",
    explanation: { en: "Uncountable: water (cannot count, use 'some')", de: "Unzählbar: water (kann nicht zählen, verwende 'some')" }
  },
  {
    prompt: { en: "There are five ___ in the room.", de: "Es sind fünf ___ im Zimmer." },
    words: ["chairs", "chair", "furniture", "furnitures"],
    correct: "chairs",
    explanation: { en: "Countable: chairs (can count: 1, 2, 3 chairs)", de: "Zählbar: chairs (kann zählen: 1, 2, 3 Stühle)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I have three waters.",
    mistakeIndex: 2,
    correction: "glasses of water",
    explanation: { en: "Water is uncountable. Use 'glasses of water' or 'some water'.", de: "Water ist unzählbar. Verwende 'glasses of water' oder 'some water'." }
  },
  {
    sentence: "I need a furniture.",
    mistakeIndex: 2,
    correction: "some furniture",
    explanation: { en: "Furniture is uncountable. Use 'some furniture' or 'a piece of furniture'.", de: "Furniture ist unzählbar. Verwende 'some furniture' oder 'a piece of furniture'." }
  },
  {
    sentence: "I have five informations.",
    mistakeIndex: 2,
    correction: "pieces of information",
    explanation: { en: "Information is uncountable. Use 'some information' or 'pieces of information'.", de: "Information ist unzählbar. Verwende 'some information' oder 'pieces of information'." }
  }
];

const verbPilotData = [
  {
    prompt: "Catch the COUNTABLE nouns!",
    targets: ["apples", "chairs", "books", "students"],
    distractors: ["water", "milk", "bread", "furniture", "information"],
    correct: "apples"
  }
];

export const countableUncountable1 = {
  id: 'a1_g69',
  title: {
    en: 'Countable and Uncountable Nouns 1',
    de: 'Zählbare und Unzählbare Nomen 1'
  },
  description: {
    en: "Understanding the difference: 'three apples' (countable) vs 'some water' (uncountable).",
    de: "Den Unterschied verstehen: 'three apples' (zählbar) vs 'some water' (unzählbar)."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    verbPilot: <GrammarGame type="verbPilot" data={verbPilotData} />
  },

  content: {
    en: `
## Countable vs. Uncountable: The Big Difference! 🔢

In English, nouns are divided into two groups: **countable** and **uncountable**. This is one of the most important concepts in English grammar! Understanding this difference helps you use articles (a/an, the) and quantifiers (some, many, much) correctly.

Think about it: You can count "apples" (1 apple, 2 apples, 3 apples), but you can't count "water" (not "1 water, 2 waters"). That's the difference!

### 1. What are Countable Nouns? 🔢

**Countable nouns** are things you can **count**. You can use numbers with them (1, 2, 3, etc.) and they have **singular** and **plural** forms.

**Examples:**
- **apple** (singular) → **apples** (plural)
- **book** (singular) → **books** (plural)
- **chair** (singular) → **chairs** (plural)
- **student** (singular) → **students** (plural)

**Key Characteristics:**
- ✅ Can use numbers: "three apples", "five books"
- ✅ Have plural forms: "apple" → "apples"
- ✅ Can use "a/an": "an apple", "a book"
- ✅ Can use "many": "many apples", "many books"

**Common Countable Nouns:**
- People: student, teacher, friend, person
- Animals: cat, dog, bird, horse
- Objects: book, chair, table, car
- Food (individual items): apple, banana, egg, cookie

<GamePlaceholder id="sentenceBuilder" />

### 2. What are Uncountable Nouns? 💧

**Uncountable nouns** are things you **cannot count** individually. They are usually:
- **Liquids**: water, milk, coffee, juice
- **Materials**: wood, metal, plastic, paper
- **Abstract concepts**: information, advice, music, homework
- **Food (mass)**: rice, bread, sugar, cheese
- **Activities**: homework, work, research

**Key Characteristics:**
- ❌ Cannot use numbers: NOT "three waters" (use "three glasses of water")
- ❌ No plural form: "water" (not "waters" in this sense)
- ❌ Cannot use "a/an" directly: NOT "a water" (use "a glass of water")
- ✅ Use "some": "some water", "some milk"
- ✅ Use "much": "much water", "much information"

**Common Uncountable Nouns:**
- Liquids: water, milk, coffee, tea, juice, wine
- Food: bread, rice, pasta, cheese, meat, sugar
- Materials: wood, metal, glass, paper, plastic
- Abstract: information, advice, news, music, homework
- Weather: rain, snow, sunshine, weather

<GamePlaceholder id="fixTheMistake" />

### 3. How to Identify Countable vs. Uncountable 🤔

**Ask yourself:**
1. **Can I count it?** (1, 2, 3...)
   - ✅ "apple" → Yes! (1 apple, 2 apples) = **Countable**
   - ❌ "water" → No! (not "1 water, 2 waters") = **Uncountable**

2. **Does it have a plural form?**
   - ✅ "book" → "books" = **Countable**
   - ❌ "milk" → "milk" (no plural) = **Uncountable**

3. **Can I use "a/an" with it?**
   - ✅ "a book" = **Countable**
   - ❌ "a water" (wrong!) = **Uncountable**

### 4. Making Uncountable Nouns Countable 📦

Sometimes you need to count uncountable nouns. Use **containers** or **units**:

**Pattern:** Number + container/unit + of + uncountable noun

**Examples:**
- "a **glass of** water" (not "a water")
- "two **cups of** coffee" (not "two coffees")
- "three **pieces of** furniture" (not "three furnitures")
- "a **piece of** advice" (not "an advice")
- "two **bottles of** milk" (not "two milks")

**Common Containers/Units:**
- **glass of** (water, juice, milk)
- **cup of** (coffee, tea)
- **bottle of** (water, wine, milk)
- **piece of** (furniture, advice, information, cake)
- **slice of** (bread, pizza, cake)
- **loaf of** (bread)
- **bag of** (rice, sugar, flour)

<GamePlaceholder id="verbPilot" />

### 5. Common Mistakes ❌

1. **Adding plural to uncountable nouns**
   - ❌ "I have three **waters**." → ✅ "I have three **glasses of water**."

2. **Using "a/an" with uncountable nouns**
   - ❌ "I need **a water**." → ✅ "I need **some water**." or "I need **a glass of water**."

3. **Using numbers directly with uncountable nouns**
   - ❌ "I have **five informations**." → ✅ "I have **five pieces of information**."

4. **Confusing countable and uncountable**
   - ❌ "I have **a furniture**." → ✅ "I have **some furniture**." or "I have **a piece of furniture**."

### 6. Practice Makes Perfect! 🎓

**Identify if these are countable or uncountable:**
- apple → **Countable** (apples)
- water → **Uncountable** (some water)
- book → **Countable** (books)
- milk → **Uncountable** (some milk)
- chair → **Countable** (chairs)
- information → **Uncountable** (some information)

**Remember:** This is a fundamental concept! Master it, and you'll use articles and quantifiers correctly!
`,
    de: `
## Zählbar vs. Unzählbar: Der Große Unterschied! 🔢

Im Englischen werden Nomen in zwei Gruppen eingeteilt: **zählbar** und **unzählbar**. Das ist eines der wichtigsten Konzepte in der englischen Grammatik! Diesen Unterschied zu verstehen hilft dir, Artikel (a/an, the) und Quantoren (some, many, much) korrekt zu verwenden.

Denk daran: Du kannst "apples" zählen (1 Apfel, 2 Äpfel, 3 Äpfel), aber du kannst "water" nicht zählen (nicht "1 water, 2 waters"). Das ist der Unterschied!

### 1. Was sind Zählbare Nomen? 🔢

**Zählbare Nomen** sind Dinge, die du **zählen kannst**. Du kannst Zahlen mit ihnen verwenden (1, 2, 3, etc.) und sie haben **Singular**- und **Plural**-Formen.

**Beispiele:**
- **apple** (Singular) → **apples** (Plural)
- **book** (Singular) → **books** (Plural)
- **chair** (Singular) → **chairs** (Plural)
- **student** (Singular) → **students** (Plural)

**Wichtige Eigenschaften:**
- ✅ Kann Zahlen verwenden: "three apples", "five books"
- ✅ Haben Pluralformen: "apple" → "apples"
- ✅ Kann "a/an" verwenden: "an apple", "a book"
- ✅ Kann "many" verwenden: "many apples", "many books"

**Häufige Zählbare Nomen:**
- Personen: student, teacher, friend, person
- Tiere: cat, dog, bird, horse
- Objekte: book, chair, table, car
- Essen (einzelne Stücke): apple, banana, egg, cookie

<GamePlaceholder id="sentenceBuilder" />

### 2. Was sind Unzählbare Nomen? 💧

**Unzählbare Nomen** sind Dinge, die du **nicht einzeln zählen kannst**. Sie sind normalerweise:
- **Flüssigkeiten**: water, milk, coffee, juice
- **Materialien**: wood, metal, plastic, paper
- **Abstrakte Konzepte**: information, advice, music, homework
- **Essen (Masse)**: rice, bread, sugar, cheese
- **Aktivitäten**: homework, work, research

**Wichtige Eigenschaften:**
- ❌ Kann keine Zahlen verwenden: NICHT "three waters" (verwende "three glasses of water")
- ❌ Keine Pluralform: "water" (nicht "waters" in diesem Sinne)
- ❌ Kann "a/an" nicht direkt verwenden: NICHT "a water" (verwende "a glass of water")
- ✅ Verwende "some": "some water", "some milk"
- ✅ Verwende "much": "much water", "much information"

**Häufige Unzählbare Nomen:**
- Flüssigkeiten: water, milk, coffee, tea, juice, wine
- Essen: bread, rice, pasta, cheese, meat, sugar
- Materialien: wood, metal, glass, paper, plastic
- Abstrakt: information, advice, news, music, homework
- Wetter: rain, snow, sunshine, weather

<GamePlaceholder id="fixTheMistake" />

### 3. Wie man Zählbar vs. Unzählbar Identifiziert 🤔

**Frage dich:**
1. **Kann ich es zählen?** (1, 2, 3...)
   - ✅ "apple" → Ja! (1 Apfel, 2 Äpfel) = **Zählbar**
   - ❌ "water" → Nein! (nicht "1 water, 2 waters") = **Unzählbar**

2. **Hat es eine Pluralform?**
   - ✅ "book" → "books" = **Zählbar**
   - ❌ "milk" → "milk" (kein Plural) = **Unzählbar**

3. **Kann ich "a/an" damit verwenden?**
   - ✅ "a book" = **Zählbar**
   - ❌ "a water" (falsch!) = **Unzählbar**

### 4. Unzählbare Nomen Zählbar Machen 📦

Manchmal musst du unzählbare Nomen zählen. Verwende **Behälter** oder **Einheiten**:

**Muster:** Zahl + Behälter/Einheit + of + unzählbares Nomen

**Beispiele:**
- "a **glass of** water" (nicht "a water")
- "two **cups of** coffee" (nicht "two coffees")
- "three **pieces of** furniture" (nicht "three furnitures")
- "a **piece of** advice" (nicht "an advice")
- "two **bottles of** milk" (nicht "two milks")

**Häufige Behälter/Einheiten:**
- **glass of** (water, juice, milk)
- **cup of** (coffee, tea)
- **bottle of** (water, wine, milk)
- **piece of** (furniture, advice, information, cake)
- **slice of** (bread, pizza, cake)
- **loaf of** (bread)
- **bag of** (rice, sugar, flour)

<GamePlaceholder id="verbPilot" />

### 5. Häufige Fehler ❌

1. **Plural zu unzählbaren Nomen hinzufügen**
   - ❌ "I have three **waters**." → ✅ "I have three **glasses of water**."

2. **"a/an" mit unzählbaren Nomen verwenden**
   - ❌ "I need **a water**." → ✅ "I need **some water**." oder "I need **a glass of water**."

3. **Zahlen direkt mit unzählbaren Nomen verwenden**
   - ❌ "I have **five informations**." → ✅ "I have **five pieces of information**."

4. **Zählbar und unzählbar verwechseln**
   - ❌ "I have **a furniture**." → ✅ "I have **some furniture**." oder "I have **a piece of furniture**."

### 6. Übung macht den Meister! 🎓

**Identifiziere, ob diese zählbar oder unzählbar sind:**
- apple → **Zählbar** (apples)
- water → **Unzählbar** (some water)
- book → **Zählbar** (books)
- milk → **Unzählbar** (some milk)
- chair → **Zählbar** (chairs)
- information → **Unzählbar** (some information)

**Denk daran:** Das ist ein fundamentales Konzept! Meistere es, und du wirst Artikel und Quantoren korrekt verwenden!
`
  },
  task: {
    de: {
      title: 'Zählbare und unzählbare Nomen identifizieren',
      description: 'Schreibe drei zählbare und drei unzählbare Nomen auf. Erkläre, warum sie zählbar/unzählbar sind.',
      checklist: [
        { text: '3 zählbare Nomen mit Beispielen', checked: false },
        { text: '3 unzählbare Nomen mit Beispielen', checked: false },
        { text: 'Erklärung für jedes Nomen', checked: false }
      ]
    },
    en: {
      title: 'Identifying Countable and Uncountable Nouns',
      description: 'Write down three countable and three uncountable nouns. Explain why they are countable/uncountable.',
      checklist: [
        { text: '3 countable nouns with examples', checked: false },
        { text: '3 uncountable nouns with examples', checked: false },
        { text: 'Explanation for each noun', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

