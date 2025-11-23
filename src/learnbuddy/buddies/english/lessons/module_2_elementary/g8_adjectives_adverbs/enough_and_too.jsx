import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I'm not tall ___ to reach the shelf.", de: "Ich bin nicht groß ___, um das Regal zu erreichen." },
    words: ["enough", "too", "very", "so"],
    correct: "enough",
    explanation: { en: "Enough = sufficient (tall enough = sufficient height)", de: "Enough = ausreichend (tall enough = ausreichende Größe)" }
  },
  {
    prompt: { en: "This coffee is ___ hot to drink.", de: "Dieser Kaffee ist ___ heiß zum Trinken." },
    words: ["too", "enough", "very", "so"],
    correct: "too",
    explanation: { en: "Too = excessive, more than needed (too hot = excessively hot)", de: "Too = übermäßig, mehr als nötig (too hot = übermäßig heiß)" }
  },
  {
    prompt: { en: "I have ___ money to buy it.", de: "Ich habe ___ Geld, um es zu kaufen." },
    words: ["enough", "too", "very", "so"],
    correct: "enough",
    explanation: { en: "Enough = sufficient (enough money = sufficient money)", de: "Enough = ausreichend (enough money = ausreichendes Geld)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I'm not tall too to reach the shelf.",
    mistakeIndex: 2,
    correction: "enough",
    explanation: { en: "Enough = sufficient (not too = excessive)", de: "Enough = ausreichend (nicht too = übermäßig)" }
  },
  {
    sentence: "This coffee is enough hot to drink.",
    mistakeIndex: 2,
    correction: "too",
    explanation: { en: "Too = excessive (too hot = more than needed)", de: "Too = übermäßig (too hot = mehr als nötig)" }
  },
  {
    sentence: "I don't have too money.",
    mistakeIndex: 2,
    correction: "enough",
    explanation: { en: "Enough = sufficient (enough money). Too = excessive (too much money)", de: "Enough = ausreichend (enough money). Too = übermäßig (too much money)" }
  }
];

const grammarRacerData = [
  {
    prompt: "I'm not tall ___ to reach the shelf.",
    options: ["enough", "too", "very"],
    correct: "enough",
    explanation: "Enough = sufficient"
  },
  {
    prompt: "This coffee is ___ hot to drink.",
    options: ["too", "enough", "very"],
    correct: "too",
    explanation: "Too = excessive"
  },
  {
    prompt: "I have ___ money to buy it.",
    options: ["enough", "too", "very"],
    correct: "enough",
    explanation: "Enough = sufficient"
  }
];

export const enoughAndToo = {
  id: 'a2_g103',
  title: {
    en: 'Enough and Too',
    de: 'Enough und Too'
  },
  description: {
    en: "Expressing sufficiency and excess. 'I'm tall enough', 'This coffee is too hot', 'I have enough money'.",
    de: "Ausreichend und übermäßig ausdrücken. 'Ich bin groß genug', 'Dieser Kaffee ist zu heiß', 'Ich habe genug Geld'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Enough and Too: Sufficiency and Excess 📊

**Enough** and **too** are used to talk about **sufficiency** (enough) and **excess** (too much/too many). Understanding the difference helps you express whether something is sufficient or excessive.

### Why Do We Need Both?

Think about these situations:
- "I'm tall **enough** to reach the shelf." (Sufficient height - I can reach it)
- "This coffee is **too** hot to drink." (Excessive heat - I cannot drink it)
- "I have **enough** money." (Sufficient money - I have what I need)
- "I have **too** much money." (Excessive money - more than needed)

The key idea: **Enough** = sufficient, **Too** = excessive (more than needed)!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>Enough</strong> = Sufficient, adequate (enough = just right)</p>
  <p><strong>Too</strong> = Excessive, more than needed (too = more than necessary)</p>
  <p><strong>Enough</strong> comes AFTER adjectives/adverbs, BEFORE nouns</p>
  <p><strong>Too</strong> comes BEFORE adjectives/adverbs/nouns</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Enough: Sufficient ✅

**Enough** means "sufficient" or "adequate" - just the right amount, not too little, not too much.

**Structure:**
- Adjective/Adverb + **enough** + to + verb
- **Enough** + noun

**Examples:**
- "I'm tall **enough** to reach the shelf." (Sufficient height - I can reach it)
- "She is old **enough** to drive." (Sufficient age - she can drive)
- "I have **enough** money." (Sufficient money - I have what I need)
- "There is **enough** time." (Sufficient time - we have what we need)
- "He works hard **enough**." (Sufficient effort - he works adequately)

**Key idea:** Enough = sufficient, adequate, just right!

**Position:** Enough comes **after** adjectives/adverbs, **before** nouns!

### 2. Too: Excessive ❌

**Too** means "excessive" or "more than needed" - more than necessary, causing a problem.

**Structure:**
- **Too** + adjective/adverb + to + verb
- **Too** + much/many + noun

**Examples:**
- "This coffee is **too** hot to drink." (Excessive heat - I cannot drink it)
- "She is **too** young to drive." (Excessive youth - she cannot drive)
- "I have **too** much money." (Excessive money - more than needed)
- "There are **too** many people here." (Excessive people - more than needed)
- "He works **too** hard." (Excessive effort - more than necessary)

**Key idea:** Too = excessive, more than needed, causing a problem!

**Position:** Too comes **before** adjectives/adverbs/nouns!

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Common Mistake!</strong>
  <br/>
  <p className="mt-2"><strong>Enough</strong> = Sufficient (just right)</p>
  <p><strong>Too</strong> = Excessive (more than needed)</p>
  <p>❌ "I'm tall <strong>too</strong> to reach." (Wrong! - too = excessive)</p>
  <p>✅ "I'm tall <strong>enough</strong> to reach." (Correct! - enough = sufficient)</p>
  <p>❌ "This coffee is <strong>enough</strong> hot." (Wrong! - enough comes after adjective)</p>
  <p>✅ "This coffee is <strong>too</strong> hot." (Correct! - too comes before adjective)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 3. Enough: Position Rules 📍

**Enough** position depends on what it modifies:

**After Adjectives/Adverbs:**
- "I'm tall **enough**." (Enough comes after "tall" - adjective)
- "She works hard **enough**." (Enough comes after "hard" - adverb)
- "He is old **enough** to drive." (Enough comes after "old" - adjective)

**Before Nouns:**
- "I have **enough** money." (Enough comes before "money" - noun)
- "There is **enough** time." (Enough comes before "time" - noun)
- "We have **enough** food." (Enough comes before "food" - noun)

**Key rule:** Enough comes **after** adjectives/adverbs, **before** nouns!

### 4. Too: Position Rules 📍

**Too** always comes **before** what it modifies:

**Before Adjectives/Adverbs:**
- "This coffee is **too** hot." (Too comes before "hot" - adjective)
- "She works **too** hard." (Too comes before "hard" - adverb)
- "He is **too** young to drive." (Too comes before "young" - adjective)

**Before Much/Many + Nouns:**
- "I have **too** much money." (Too comes before "much money")
- "There are **too** many people." (Too comes before "many people")
- "We have **too** much food." (Too comes before "much food")

**Key rule:** Too always comes **before** adjectives/adverbs/nouns!

### 5. Enough vs Too: Comparison 🔄

| Situation | Enough | Too |
|-----------|--------|-----|
| **Meaning** | Sufficient, adequate | Excessive, more than needed |
| **Position with adjectives** | After (tall enough) | Before (too tall) |
| **Position with nouns** | Before (enough money) | Before (too much money) |
| **Result** | Positive (can do it) | Negative (cannot do it) |

**Examples:**
- "I'm tall **enough** to reach." (Sufficient - I can reach it) ✅
- "I'm **too** short to reach." (Excessive shortness - I cannot reach it) ❌
- "I have **enough** money." (Sufficient - I have what I need) ✅
- "I have **too** much money." (Excessive - more than needed) ❌

### 6. Common Patterns 📝

**Enough + to + verb:**
- "I'm tall **enough to reach** the shelf."
- "She is old **enough to drive**."
- "He works hard **enough to succeed**."

**Too + adjective + to + verb:**
- "This coffee is **too hot to drink**."
- "She is **too young to drive**."
- "He is **too tired to work**."

**Enough + noun:**
- "I have **enough money**."
- "There is **enough time**."
- "We have **enough food**."

**Too + much/many + noun:**
- "I have **too much money**."
- "There are **too many people**."
- "We have **too much food**."

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Enough</strong> = Sufficient, adequate (just right)</li>
    <li><strong>Too</strong> = Excessive, more than needed</li>
    <li><strong>Enough</strong> = After adjectives/adverbs, before nouns</li>
    <li><strong>Too</strong> = Before adjectives/adverbs/nouns</li>
  </ul>
</div>

### 7. Common Mistakes ❌

**Mistake 1:** Using "too" instead of "enough"
- ❌ "I'm tall **too** to reach." (Wrong! - too = excessive)
- ✅ "I'm tall **enough** to reach." (Correct! - enough = sufficient)

**Mistake 2:** Wrong position of "enough"
- ❌ "I have money **enough**." (Wrong! - enough comes before nouns)
- ✅ "I have **enough** money." (Correct!)

**Mistake 3:** Wrong position of "enough" with adjectives
- ❌ "I'm **enough** tall." (Wrong! - enough comes after adjectives)
- ✅ "I'm tall **enough**." (Correct!)

**Mistake 4:** Confusing "too" with "very"
- ⚠️ "This coffee is **very** hot." (Very = very, but not necessarily excessive)
- ✅ "This coffee is **too** hot to drink." (Too = excessive, cannot drink it)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Enough and Too**
Choose the correct word! Remember: enough = sufficient, too = excessive!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Enough and Too</h3>
  <p className="mb-4">Write sentences using enough and too:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence with "enough" (sufficient, with adjective)</li>
    <li>One sentence with "enough" (sufficient, with noun)</li>
    <li>One sentence with "too" (excessive, with adjective)</li>
    <li>One sentence with "too" (excessive, with much/many + noun)</li>
  </ol>
</div>
`,
    de: `
## Enough und Too: Ausreichend und übermäßig 📊

**Enough** und **too** werden verwendet, um über **Ausreichendheit** (enough) und **Übermaß** (too much/too many) zu sprechen. Den Unterschied zu verstehen hilft dir auszudrücken, ob etwas ausreichend oder übermäßig ist.

### Warum brauchen wir beide?

Denk an diese Situationen:
- "Ich bin groß **genug**, um das Regal zu erreichen." (Ausreichende Größe - ich kann es erreichen)
- "Dieser Kaffee ist **zu** heiß zum Trinken." (Übermäßige Hitze - ich kann ihn nicht trinken)
- "Ich habe **genug** Geld." (Ausreichendes Geld - ich habe, was ich brauche)
- "Ich habe **zu** viel Geld." (Übermäßiges Geld - mehr als nötig)

Die Schlüsselidee: **Enough** = ausreichend, **Too** = übermäßig (mehr als nötig)!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>Enough</strong> = Ausreichend, angemessen (enough = genau richtig)</p>
  <p><strong>Too</strong> = Übermäßig, mehr als nötig (too = mehr als notwendig)</p>
  <p><strong>Enough</strong> kommt NACH Adjektiven/Adverbien, VOR Nomen</p>
  <p><strong>Too</strong> kommt VOR Adjektiven/Adverbien/Nomen</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Enough: Ausreichend ✅

**Enough** bedeutet "ausreichend" oder "angemessen" - genau die richtige Menge, nicht zu wenig, nicht zu viel.

**Struktur:**
- Adjektiv/Adverb + **enough** + to + Verb
- **Enough** + Nomen

**Beispiele:**
- "Ich bin groß **genug**, um das Regal zu erreichen." (Ausreichende Größe - ich kann es erreichen)
- "Sie ist alt **genug** zum Fahren." (Ausreichendes Alter - sie kann fahren)
- "Ich habe **genug** Geld." (Ausreichendes Geld - ich habe, was ich brauche)
- "Es ist **genug** Zeit." (Ausreichende Zeit - wir haben, was wir brauchen)
- "Er arbeitet hart **genug**." (Ausreichende Anstrengung - er arbeitet angemessen)

**Schlüsselidee:** Enough = ausreichend, angemessen, genau richtig!

**Position:** Enough kommt **nach** Adjektiven/Adverbien, **vor** Nomen!

### 2. Too: Übermäßig ❌

**Too** bedeutet "übermäßig" oder "mehr als nötig" - mehr als notwendig, verursacht ein Problem.

**Struktur:**
- **Too** + Adjektiv/Adverb + to + Verb
- **Too** + much/many + Nomen

**Beispiele:**
- "Dieser Kaffee ist **zu** heiß zum Trinken." (Übermäßige Hitze - ich kann ihn nicht trinken)
- "Sie ist **zu** jung zum Fahren." (Übermäßige Jugend - sie kann nicht fahren)
- "Ich habe **zu** viel Geld." (Übermäßiges Geld - mehr als nötig)
- "Es sind **zu** viele Leute hier." (Übermäßige Leute - mehr als nötig)
- "Er arbeitet **zu** hart." (Übermäßige Anstrengung - mehr als notwendig)

**Schlüsselidee:** Too = übermäßig, mehr als nötig, verursacht ein Problem!

**Position:** Too kommt **vor** Adjektiven/Adverbien/Nomen!

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Häufiger Fehler!</strong>
  <br/>
  <p className="mt-2"><strong>Enough</strong> = Ausreichend (genau richtig)</p>
  <p><strong>Too</strong> = Übermäßig (mehr als nötig)</p>
  <p>❌ "Ich bin groß <strong>zu</strong>, um zu erreichen." (Falsch! - too = übermäßig)</p>
  <p>✅ "Ich bin groß <strong>genug</strong>, um zu erreichen." (Richtig! - enough = ausreichend)</p>
  <p>❌ "Dieser Kaffee ist <strong>genug</strong> heiß." (Falsch! - enough kommt nach Adjektiv)</p>
  <p>✅ "Dieser Kaffee ist <strong>zu</strong> heiß." (Richtig! - too kommt vor Adjektiv)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 3. Enough: Positionsregeln 📍

Die **Enough**-Position hängt davon ab, was es modifiziert:

**Nach Adjektiven/Adverbien:**
- "Ich bin groß **genug**." (Enough kommt nach "groß" - Adjektiv)
- "Sie arbeitet hart **genug**." (Enough kommt nach "hart" - Adverb)
- "Er ist alt **genug** zum Fahren." (Enough kommt nach "alt" - Adjektiv)

**Vor Nomen:**
- "Ich habe **genug** Geld." (Enough kommt vor "Geld" - Nomen)
- "Es ist **genug** Zeit." (Enough kommt vor "Zeit" - Nomen)
- "Wir haben **genug** Essen." (Enough kommt vor "Essen" - Nomen)

**Schlüsselregel:** Enough kommt **nach** Adjektiven/Adverbien, **vor** Nomen!

### 4. Too: Positionsregeln 📍

**Too** kommt immer **vor** dem, was es modifiziert:

**Vor Adjektiven/Adverbien:**
- "Dieser Kaffee ist **zu** heiß." (Too kommt vor "heiß" - Adjektiv)
- "Sie arbeitet **zu** hart." (Too kommt vor "hart" - Adverb)
- "Er ist **zu** jung zum Fahren." (Too kommt vor "jung" - Adjektiv)

**Vor Much/Many + Nomen:**
- "Ich habe **zu** viel Geld." (Too kommt vor "viel Geld")
- "Es sind **zu** viele Leute." (Too kommt vor "viele Leute")
- "Wir haben **zu** viel Essen." (Too kommt vor "viel Essen")

**Schlüsselregel:** Too kommt immer **vor** Adjektiven/Adverbien/Nomen!

### 5. Enough vs Too: Vergleich 🔄

| Situation | Enough | Too |
|-----------|--------|-----|
| **Bedeutung** | Ausreichend, angemessen | Übermäßig, mehr als nötig |
| **Position mit Adjektiven** | Nach (tall enough) | Vor (too tall) |
| **Position mit Nomen** | Vor (enough money) | Vor (too much money) |
| **Ergebnis** | Positiv (kann es tun) | Negativ (kann es nicht tun) |

**Beispiele:**
- "Ich bin groß **genug**, um zu erreichen." (Ausreichend - ich kann es erreichen) ✅
- "Ich bin **zu** klein, um zu erreichen." (Übermäßige Kleinheit - ich kann es nicht erreichen) ❌
- "Ich habe **genug** Geld." (Ausreichend - ich habe, was ich brauche) ✅
- "Ich habe **zu** viel Geld." (Übermäßig - mehr als nötig) ❌

### 6. Häufige Muster 📝

**Enough + to + Verb:**
- "Ich bin groß **genug, um zu erreichen** das Regal."
- "Sie ist alt **genug zum Fahren**."
- "Er arbeitet hart **genug, um erfolgreich zu sein**."

**Too + Adjektiv + to + Verb:**
- "Dieser Kaffee ist **zu heiß zum Trinken**."
- "Sie ist **zu jung zum Fahren**."
- "Er ist **zu müde zum Arbeiten**."

**Enough + Nomen:**
- "Ich habe **genug Geld**."
- "Es ist **genug Zeit**."
- "Wir haben **genug Essen**."

**Too + much/many + Nomen:**
- "Ich habe **zu viel Geld**."
- "Es sind **zu viele Leute**."
- "Wir haben **zu viel Essen**."

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Enough</strong> = Ausreichend, angemessen (genau richtig)</li>
    <li><strong>Too</strong> = Übermäßig, mehr als nötig</li>
    <li><strong>Enough</strong> = Nach Adjektiven/Adverbien, vor Nomen</li>
    <li><strong>Too</strong> = Vor Adjektiven/Adverbien/Nomen</li>
  </ul>
</div>

### 7. Häufige Fehler ❌

**Fehler 1:** "Too" statt "enough" verwenden
- ❌ "Ich bin groß **zu**, um zu erreichen." (Falsch! - too = übermäßig)
- ✅ "Ich bin groß **genug**, um zu erreichen." (Richtig! - enough = ausreichend)

**Fehler 2:** Falsche Position von "enough"
- ❌ "Ich habe Geld **genug**." (Falsch! - enough kommt vor Nomen)
- ✅ "Ich habe **genug** Geld." (Richtig!)

**Fehler 3:** Falsche Position von "enough" mit Adjektiven
- ❌ "Ich bin **genug** groß." (Falsch! - enough kommt nach Adjektiven)
- ✅ "Ich bin groß **genug**." (Richtig!)

**Fehler 4:** "Too" mit "very" verwechseln
- ⚠️ "Dieser Kaffee ist **sehr** heiß." (Very = sehr, aber nicht unbedingt übermäßig)
- ✅ "Dieser Kaffee ist **zu** heiß zum Trinken." (Too = übermäßig, kann ihn nicht trinken)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Enough und Too**
Wähle das richtige Wort! Denk daran: enough = ausreichend, too = übermäßig!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Enough und Too</h3>
  <p className="mb-4">Schreibe Sätze mit enough und too:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz mit "enough" (ausreichend, mit Adjektiv)</li>
    <li>Ein Satz mit "enough" (ausreichend, mit Nomen)</li>
    <li>Ein Satz mit "too" (übermäßig, mit Adjektiv)</li>
    <li>Ein Satz mit "too" (übermäßig, mit much/many + Nomen)</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Enough und Too',
      description: 'Schreibe Sätze mit enough und too über Ausreichendheit und Übermaß.',
      checklist: [
        { text: 'Satz mit "enough" (ausreichend, mit Adjektiv)', checked: false },
        { text: 'Satz mit "enough" (ausreichend, mit Nomen)', checked: false },
        { text: 'Satz mit "too" (übermäßig, mit Adjektiv)', checked: false },
        { text: 'Satz mit "too" (übermäßig, mit much/many + Nomen)', checked: false }
      ]
    },
    en: {
      title: 'Enough and Too',
      description: 'Write sentences using enough and too about sufficiency and excess.',
      checklist: [
        { text: 'Sentence with "enough" (sufficient, with adjective)', checked: false },
        { text: 'Sentence with "enough" (sufficient, with noun)', checked: false },
        { text: 'Sentence with "too" (excessive, with adjective)', checked: false },
        { text: 'Sentence with "too" (excessive, with much/many + noun)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

