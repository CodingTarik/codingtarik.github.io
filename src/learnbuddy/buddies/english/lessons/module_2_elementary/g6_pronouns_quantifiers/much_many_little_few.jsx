import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I don't have ___ money.", de: "Ich habe nicht ___ Geld." },
    words: ["much", "many", "a lot", "lots"],
    correct: "much",
    explanation: { en: "Money is uncountable: use 'much'", de: "Geld ist nicht zählbar: verwende 'much'" }
  },
  {
    prompt: { en: "There aren't ___ people here.", de: "Es sind nicht ___ Leute hier." },
    words: ["much", "many", "a lot", "lots"],
    correct: "many",
    explanation: { en: "People is countable: use 'many'", de: "Leute ist zählbar: verwende 'many'" }
  },
  {
    prompt: { en: "I have ___ time today.", de: "Ich habe ___ Zeit heute." },
    words: ["a little", "a few", "little", "few"],
    correct: "a little",
    explanation: { en: "Time is uncountable, positive meaning: use 'a little'", de: "Zeit ist nicht zählbar, positive Bedeutung: verwende 'a little'" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I don't have many money.",
    mistakeIndex: 2,
    correction: "much",
    explanation: { en: "Money is uncountable: use 'much' (not 'many')", de: "Geld ist nicht zählbar: verwende 'much' (nicht 'many')" }
  },
  {
    sentence: "There isn't much people here.",
    mistakeIndex: 2,
    correction: "many",
    explanation: { en: "People is countable: use 'many' (not 'much')", de: "Leute ist zählbar: verwende 'many' (nicht 'much')" }
  },
  {
    sentence: "I have few time.",
    mistakeIndex: 2,
    correction: "little",
    explanation: { en: "Time is uncountable: use 'little' (not 'few')", de: "Zeit ist nicht zählbar: verwende 'little' (nicht 'few')" }
  }
];

const grammarRacerData = [
  {
    prompt: "I don't have ___ money.",
    options: ["much", "many", "a lot"],
    correct: "much",
    explanation: "Uncountable: much"
  },
  {
    prompt: "There aren't ___ people here.",
    options: ["much", "many", "a lot"],
    correct: "many",
    explanation: "Countable: many"
  },
  {
    prompt: "I have ___ friends.",
    options: ["a little", "a few", "little"],
    correct: "a few",
    explanation: "Countable, positive: a few"
  }
];

export const muchManyLittleFew = {
  id: 'a2_g87',
  title: {
    en: 'Much, Many, Little, Few, A Lot, Plenty',
    de: 'Much, Many, Little, Few, A Lot, Plenty'
  },
  description: {
    en: "Quantifiers for countable and uncountable nouns. 'I don't have much money', 'There aren't many people', 'I have a little time'.",
    de: "Mengenangaben für zählbare und nicht zählbare Nomen. 'Ich habe nicht viel Geld', 'Es sind nicht viele Leute hier', 'Ich habe ein wenig Zeit'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Much, Many, Little, Few: Quantifiers 📊

**Quantifiers** are words that tell us about **quantity** (how much or how many). The choice between "much/many" and "little/few" depends on whether the noun is **countable** or **uncountable**, and whether the meaning is **positive** or **negative**.

### Why Do We Need Different Quantifiers?

Think about these situations:
- "I don't have **much** money." (Money is uncountable)
- "There aren't **many** people here." (People is countable)
- "I have **a little** time." (Time is uncountable, positive)
- "I have **little** time." (Time is uncountable, negative meaning)

Each situation needs a different quantifier!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>Much/Little</strong> = Uncountable nouns (money, time, water)</p>
  <p><strong>Many/Few</strong> = Countable nouns (people, books, cars)</p>
  <p><strong>A little/A few</strong> = Positive meaning (some, but not a lot)</p>
  <p><strong>Little/Few</strong> = Negative meaning (not enough, almost none)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Much vs Many: Negative/Questions ❌❓

**Much** = Used with **uncountable** nouns (in negative sentences and questions)
**Many** = Used with **countable** nouns (in negative sentences and questions)

**Structure:**
- "I don't have **much** + uncountable noun"
- "There aren't **many** + countable noun"

**Examples with Much (Uncountable):**
- "I don't have **much** money." (Money is uncountable)
- "There isn't **much** time left." (Time is uncountable)
- "Do you have **much** water?" (Water is uncountable)
- "I don't drink **much** coffee." (Coffee is uncountable)

**Examples with Many (Countable):**
- "There aren't **many** people here." (People is countable)
- "I don't have **many** friends." (Friends is countable)
- "Do you have **many** books?" (Books is countable)
- "I don't see **many** cars." (Cars is countable)

**Key idea:** Much = uncountable, Many = countable (both used in negatives/questions)!

### 2. A Lot Of / Lots Of: Positive ✅

**A lot of** and **lots of** can be used with **both** countable and uncountable nouns, and are used in **positive** sentences.

**Structure:**
- "I have **a lot of** + noun" (countable or uncountable)
- "I have **lots of** + noun" (countable or uncountable)

**Examples:**
- "I have **a lot of** money." (Uncountable - positive)
- "I have **a lot of** friends." (Countable - positive)
- "There's **lots of** time." (Uncountable - positive)
- "There are **lots of** people here." (Countable - positive)

**Note:** "Lots of" is more informal than "a lot of", but both mean the same thing!

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Important:</h3>
  <p><strong>A lot of / Lots of</strong> = Used in positive sentences (both countable and uncountable)</p>
  <p><strong>Much / Many</strong> = Used in negative sentences and questions</p>
  <p>✅ "I have <strong>a lot of</strong> money." (Positive)</p>
  <p>✅ "I don't have <strong>much</strong> money." (Negative)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 3. A Little vs Little: Uncountable Nouns 📉

**A little** = Some, but not a lot (positive meaning)
**Little** = Not much, almost none (negative meaning)

**Structure:**
- "I have **a little** + uncountable noun" (positive)
- "I have **little** + uncountable noun" (negative)

**Examples with A Little (Positive):**
- "I have **a little** time." (Some time - positive)
- "There's **a little** water left." (Some water - positive)
- "I speak **a little** English." (Some English - positive)

**Examples with Little (Negative):**
- "I have **little** time." (Not much time - negative)
- "There's **little** hope." (Not much hope - negative)
- "I have **little** money." (Not much money - negative)

**Key idea:** "A little" = positive (some), "Little" = negative (not much)!

### 4. A Few vs Few: Countable Nouns 📉

**A few** = Some, but not a lot (positive meaning)
**Few** = Not many, almost none (negative meaning)

**Structure:**
- "I have **a few** + countable noun" (positive)
- "I have **few** + countable noun" (negative)

**Examples with A Few (Positive):**
- "I have **a few** friends." (Some friends - positive)
- "There are **a few** people here." (Some people - positive)
- "I've read **a few** books." (Some books - positive)

**Examples with Few (Negative):**
- "I have **few** friends." (Not many friends - negative)
- "There are **few** people here." (Not many people - negative)
- "I've read **few** books." (Not many books - negative)

**Key idea:** "A few" = positive (some), "Few" = negative (not many)!

### 5. Plenty Of: More Than Enough 🌟

**Plenty of** = More than enough (used with both countable and uncountable nouns)

**Structure:**
- "I have **plenty of** + noun" (countable or uncountable)

**Examples:**
- "I have **plenty of** time." (More than enough time)
- "There are **plenty of** books." (More than enough books)
- "We have **plenty of** money." (More than enough money)
- "There's **plenty of** food." (More than enough food)

**Key idea:** Plenty of = More than enough (positive meaning)!

### 6. Summary Table 📋

| Quantifier | Countable | Uncountable | Meaning |
|-----------|-----------|-------------|---------|
| **Much** | ❌ | ✅ | Negative/Questions |
| **Many** | ✅ | ❌ | Negative/Questions |
| **A lot of / Lots of** | ✅ | ✅ | Positive |
| **A little** | ❌ | ✅ | Positive (some) |
| **Little** | ❌ | ✅ | Negative (not much) |
| **A few** | ✅ | ❌ | Positive (some) |
| **Few** | ✅ | ❌ | Negative (not many) |
| **Plenty of** | ✅ | ✅ | More than enough |

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Much/Many</strong> = Negative sentences and questions</li>
    <li><strong>A lot of / Lots of</strong> = Positive sentences (both countable and uncountable)</li>
    <li><strong>A little / A few</strong> = Positive meaning (some)</li>
    <li><strong>Little / Few</strong> = Negative meaning (not much/many)</li>
  </ul>
</div>

### 7. Common Mistakes ❌

**Mistake 1:** Using "many" with uncountable nouns
- ❌ "I don't have **many** money." (Wrong! - money is uncountable)
- ✅ "I don't have **much** money." (Correct!)

**Mistake 2:** Using "much" with countable nouns
- ❌ "There isn't **much** people here." (Wrong! - people is countable)
- ✅ "There aren't **many** people here." (Correct!)

**Mistake 3:** Confusing "a little" with "little"
- ❌ "I have **little** time, so let's meet!" (Wrong! - sounds negative)
- ✅ "I have **a little** time, so let's meet!" (Correct! - positive)

**Mistake 4:** Confusing "a few" with "few"
- ❌ "I have **few** friends, so I'm happy!" (Wrong! - sounds negative)
- ✅ "I have **a few** friends, so I'm happy!" (Correct! - positive)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Much, Many, Little, Few**
Choose the correct quantifier! Remember: much/many for negatives, a little/a few for positives!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Quantifiers</h3>
  <p className="mb-4">Write sentences using quantifiers:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence with "much" (uncountable, negative)</li>
    <li>One sentence with "many" (countable, negative)</li>
    <li>One sentence with "a little" (uncountable, positive)</li>
    <li>One sentence with "a few" (countable, positive)</li>
  </ol>
</div>
`,
    de: `
## Much, Many, Little, Few: Mengenangaben 📊

**Mengenangaben** (Quantifiers) sind Wörter, die uns über die **Menge** informieren (wie viel oder wie viele). Die Wahl zwischen "much/many" und "little/few" hängt davon ab, ob das Nomen **zählbar** oder **nicht zählbar** ist, und ob die Bedeutung **positiv** oder **negativ** ist.

### Warum brauchen wir verschiedene Mengenangaben?

Denk an diese Situationen:
- "Ich habe nicht **viel** Geld." (Geld ist nicht zählbar)
- "Es sind nicht **viele** Leute hier." (Leute ist zählbar)
- "Ich habe **ein wenig** Zeit." (Zeit ist nicht zählbar, positive Bedeutung)
- "Ich habe **wenig** Zeit." (Zeit ist nicht zählbar, negative Bedeutung)

Jede Situation braucht eine andere Mengenangabe!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>Much/Little</strong> = Nicht zählbare Nomen (Geld, Zeit, Wasser)</p>
  <p><strong>Many/Few</strong> = Zählbare Nomen (Leute, Bücher, Autos)</p>
  <p><strong>A little/A few</strong> = Positive Bedeutung (einige, aber nicht viele)</p>
  <p><strong>Little/Few</strong> = Negative Bedeutung (nicht genug, fast keine)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Much vs Many: Verneinung/Fragen ❌❓

**Much** = Wird mit **nicht zählbaren** Nomen verwendet (in verneinten Sätzen und Fragen)
**Many** = Wird mit **zählbaren** Nomen verwendet (in verneinten Sätzen und Fragen)

**Struktur:**
- "I don't have **much** + nicht zählbares Nomen"
- "There aren't **many** + zählbares Nomen"

**Beispiele mit Much (Nicht zählbar):**
- "I don't have **much** money." (Geld ist nicht zählbar)
- "There isn't **much** time left." (Zeit ist nicht zählbar)
- "Do you have **much** water?" (Wasser ist nicht zählbar)
- "I don't drink **much** coffee." (Kaffee ist nicht zählbar)

**Beispiele mit Many (Zählbar):**
- "There aren't **many** people here." (Leute ist zählbar)
- "I don't have **many** friends." (Freunde ist zählbar)
- "Do you have **many** books?" (Bücher ist zählbar)
- "I don't see **many** cars." (Autos ist zählbar)

**Schlüsselidee:** Much = nicht zählbar, Many = zählbar (beide in Verneinungen/Fragen)!

### 2. A Lot Of / Lots Of: Positiv ✅

**A lot of** und **lots of** können mit **beiden** zählbaren und nicht zählbaren Nomen verwendet werden und werden in **positiven** Sätzen verwendet.

**Struktur:**
- "I have **a lot of** + Nomen" (zählbar oder nicht zählbar)
- "I have **lots of** + Nomen" (zählbar oder nicht zählbar)

**Beispiele:**
- "I have **a lot of** money." (Nicht zählbar - positiv)
- "I have **a lot of** friends." (Zählbar - positiv)
- "There's **lots of** time." (Nicht zählbar - positiv)
- "There are **lots of** people here." (Zählbar - positiv)

**Hinweis:** "Lots of" ist informeller als "a lot of", aber beide bedeuten dasselbe!

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Wichtig:</h3>
  <p><strong>A lot of / Lots of</strong> = Wird in positiven Sätzen verwendet (beide zählbar und nicht zählbar)</p>
  <p><strong>Much / Many</strong> = Wird in verneinten Sätzen und Fragen verwendet</p>
  <p>✅ "I have <strong>a lot of</strong> money." (Positiv)</p>
  <p>✅ "I don't have <strong>much</strong> money." (Verneinung)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 3. A Little vs Little: Nicht zählbare Nomen 📉

**A little** = Einige, aber nicht viele (positive Bedeutung)
**Little** = Nicht viel, fast keine (negative Bedeutung)

**Struktur:**
- "I have **a little** + nicht zählbares Nomen" (positiv)
- "I have **little** + nicht zählbares Nomen" (negativ)

**Beispiele mit A Little (Positiv):**
- "I have **a little** time." (Etwas Zeit - positiv)
- "There's **a little** water left." (Etwas Wasser - positiv)
- "I speak **a little** English." (Etwas Englisch - positiv)

**Beispiele mit Little (Negativ):**
- "I have **little** time." (Nicht viel Zeit - negativ)
- "There's **little** hope." (Nicht viel Hoffnung - negativ)
- "I have **little** money." (Nicht viel Geld - negativ)

**Schlüsselidee:** "A little" = positiv (einige), "Little" = negativ (nicht viel)!

### 4. A Few vs Few: Zählbare Nomen 📉

**A few** = Einige, aber nicht viele (positive Bedeutung)
**Few** = Nicht viele, fast keine (negative Bedeutung)

**Struktur:**
- "I have **a few** + zählbares Nomen" (positiv)
- "I have **few** + zählbares Nomen" (negativ)

**Beispiele mit A Few (Positiv):**
- "I have **a few** friends." (Einige Freunde - positiv)
- "There are **a few** people here." (Einige Leute - positiv)
- "I've read **a few** books." (Einige Bücher - positiv)

**Beispiele mit Few (Negativ):**
- "I have **few** friends." (Nicht viele Freunde - negativ)
- "There are **few** people here." (Nicht viele Leute - negativ)
- "I've read **few** books." (Nicht viele Bücher - negativ)

**Schlüsselidee:** "A few" = positiv (einige), "Few" = negativ (nicht viele)!

### 5. Plenty Of: Mehr als genug 🌟

**Plenty of** = Mehr als genug (wird mit beiden zählbaren und nicht zählbaren Nomen verwendet)

**Struktur:**
- "I have **plenty of** + Nomen" (zählbar oder nicht zählbar)

**Beispiele:**
- "I have **plenty of** time." (Mehr als genug Zeit)
- "There are **plenty of** books." (Mehr als genug Bücher)
- "We have **plenty of** money." (Mehr als genug Geld)
- "There's **plenty of** food." (Mehr als genug Essen)

**Schlüsselidee:** Plenty of = Mehr als genug (positive Bedeutung)!

### 6. Zusammenfassungstabelle 📋

| Mengenangabe | Zählbar | Nicht zählbar | Bedeutung |
|-------------|---------|---------------|-----------|
| **Much** | ❌ | ✅ | Verneinung/Fragen |
| **Many** | ✅ | ❌ | Verneinung/Fragen |
| **A lot of / Lots of** | ✅ | ✅ | Positiv |
| **A little** | ❌ | ✅ | Positiv (einige) |
| **Little** | ❌ | ✅ | Negativ (nicht viel) |
| **A few** | ✅ | ❌ | Positiv (einige) |
| **Few** | ✅ | ❌ | Negativ (nicht viele) |
| **Plenty of** | ✅ | ✅ | Mehr als genug |

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Much/Many</strong> = Verneinte Sätze und Fragen</li>
    <li><strong>A lot of / Lots of</strong> = Positive Sätze (beide zählbar und nicht zählbar)</li>
    <li><strong>A little / A few</strong> = Positive Bedeutung (einige)</li>
    <li><strong>Little / Few</strong> = Negative Bedeutung (nicht viel/viele)</li>
  </ul>
</div>

### 7. Häufige Fehler ❌

**Fehler 1:** "Many" mit nicht zählbaren Nomen verwenden
- ❌ "I don't have **many** money." (Falsch! - Geld ist nicht zählbar)
- ✅ "I don't have **much** money." (Richtig!)

**Fehler 2:** "Much" mit zählbaren Nomen verwenden
- ❌ "There isn't **much** people here." (Falsch! - Leute ist zählbar)
- ✅ "There aren't **many** people here." (Richtig!)

**Fehler 3:** "A little" mit "little" verwechseln
- ❌ "I have **little** time, so let's meet!" (Falsch! - klingt negativ)
- ✅ "I have **a little** time, so let's meet!" (Richtig! - positiv)

**Fehler 4:** "A few" mit "few" verwechseln
- ❌ "I have **few** friends, so I'm happy!" (Falsch! - klingt negativ)
- ✅ "I have **a few** friends, so I'm happy!" (Richtig! - positiv)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Much, Many, Little, Few**
Wähle die richtige Mengenangabe! Denk daran: much/many für Verneinungen, a little/a few für Positives!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Mengenangaben</h3>
  <p className="mb-4">Schreibe Sätze mit Mengenangaben:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz mit "much" (nicht zählbar, verneint)</li>
    <li>Ein Satz mit "many" (zählbar, verneint)</li>
    <li>Ein Satz mit "a little" (nicht zählbar, positiv)</li>
    <li>Ein Satz mit "a few" (zählbar, positiv)</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Mengenangaben',
      description: 'Schreibe Sätze mit Mengenangaben für zählbare und nicht zählbare Nomen.',
      checklist: [
        { text: 'Satz mit "much" (nicht zählbar, verneint)', checked: false },
        { text: 'Satz mit "many" (zählbar, verneint)', checked: false },
        { text: 'Satz mit "a little" (nicht zählbar, positiv)', checked: false },
        { text: 'Satz mit "a few" (zählbar, positiv)', checked: false }
      ]
    },
    en: {
      title: 'Quantifiers',
      description: 'Write sentences using quantifiers for countable and uncountable nouns.',
      checklist: [
        { text: 'Sentence with "much" (uncountable, negative)', checked: false },
        { text: 'Sentence with "many" (countable, negative)', checked: false },
        { text: 'Sentence with "a little" (uncountable, positive)', checked: false },
        { text: 'Sentence with "a few" (countable, positive)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

