import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "This car is ___ expensive ___ that one.", de: "Dieses Auto ist ___ teuer ___ jenes." },
    words: ["as", "as", "than", "more"],
    correct: "as as",
    explanation: { en: "As...as = equal comparison (as expensive as = same price)", de: "As...as = gleicher Vergleich (as expensive as = gleicher Preis)" }
  },
  {
    prompt: { en: "She is taller ___ me.", de: "Sie ist größer ___ ich." },
    words: ["than", "as", "to", "from"],
    correct: "than",
    explanation: { en: "Than = used with comparatives (taller than = more tall)", de: "Than = wird mit Komparativen verwendet (taller than = größer)" }
  },
  {
    prompt: { en: "I'm not ___ tall ___ you.", de: "Ich bin nicht ___ groß ___ du." },
    words: ["as", "as", "than", "more"],
    correct: "as as",
    explanation: { en: "Not as...as = not equal (not as tall as = less tall)", de: "Not as...as = nicht gleich (not as tall as = nicht so groß)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "This car is as expensive than that one.",
    mistakeIndex: 3,
    correction: "as",
    explanation: { en: "As...as for equal comparison (not as...than)", de: "As...as für gleichen Vergleich (nicht as...than)" }
  },
  {
    sentence: "She is taller as me.",
    mistakeIndex: 2,
    correction: "than",
    explanation: { en: "Than with comparatives (taller than, not taller as)", de: "Than mit Komparativen (taller than, nicht taller as)" }
  },
  {
    sentence: "I'm not so tall than you.",
    mistakeIndex: 3,
    correction: "as",
    explanation: { en: "Not as...as (not so...than)", de: "Not as...as (nicht so...than)" }
  }
];

const grammarRacerData = [
  {
    prompt: "This car is ___ expensive ___ that one.",
    options: ["as...as", "than", "more"],
    correct: "as...as",
    explanation: "Equal comparison: as...as"
  },
  {
    prompt: "She is taller ___ me.",
    options: ["than", "as", "to"],
    correct: "than",
    explanation: "Comparative: than"
  },
  {
    prompt: "I'm not ___ tall ___ you.",
    options: ["as...as", "than", "more"],
    correct: "as...as",
    explanation: "Not equal: not as...as"
  }
];

export const comparative3 = {
  id: 'a2_g107',
  title: {
    en: 'Comparative 3: as … as / than',
    de: 'Komparativ 3: as … as / than'
  },
  description: {
    en: "Equal and unequal comparisons. 'This car is as expensive as that one', 'She is taller than me', 'I'm not as tall as you'.",
    de: "Gleiche und ungleiche Vergleiche. 'Dieses Auto ist genauso teuer wie jenes', 'Sie ist größer als ich', 'Ich bin nicht so groß wie du'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Comparative 3: As...As and Than 🔄

**As...as** and **than** are used to make comparisons. **As...as** is for **equal** comparisons (same level), while **than** is used with **comparatives** (more/less than).

### Why Do We Need Both?

Think about these situations:
- "This car is **as expensive as** that one." (Equal - same price)
- "She is taller **than** me." (Unequal - she is more tall)
- "I'm not **as tall as** you." (Not equal - I am less tall)

The key idea: **As...as** = equal comparison, **Than** = used with comparatives (more/less)!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>As...as</strong> = Equal comparison (same level)</p>
  <p><strong>Than</strong> = Used with comparatives (more/less than)</p>
  <p><strong>Not as...as</strong> = Not equal (less than)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. As...As: Equal Comparison ✅

**As...as** is used to say that two things are **equal** (the same level).

**Structure:** as + adjective/adverb + as

**Examples:**
- "This car is **as expensive as** that one." (Equal price - same level)
- "She is **as tall as** me." (Equal height - same level)
- "He runs **as fast as** I do." (Equal speed - same level)
- "This book is **as interesting as** that one." (Equal interest - same level)

**Key idea:** As...as = equal, same level!

**Note:** You can also use "as...as" with adverbs:
- "She speaks **as clearly as** he does." (Equal clarity)

### 2. Not As...As: Not Equal ❌

**Not as...as** is used to say that one thing is **less** than another (not equal).

**Structure:** not as + adjective/adverb + as

**Examples:**
- "This car is **not as expensive as** that one." (Less expensive - not equal)
- "I'm **not as tall as** you." (Less tall - not equal)
- "He doesn't run **as fast as** I do." (Less fast - not equal)
- "This book is **not as interesting as** that one." (Less interesting - not equal)

**Key idea:** Not as...as = less than, not equal!

**Alternative:** You can also say "not so...as" (less common):
- "I'm **not so tall as** you." (Same meaning as "not as tall as")

### 3. Than: With Comparatives 📊

**Than** is used with **comparative forms** (taller, more expensive, better) to show that one thing is **more** or **less** than another.

**Structure:** comparative + than

**Examples:**
- "She is taller **than** me." (More tall - comparative)
- "This car is more expensive **than** that one." (More expensive - comparative)
- "He runs faster **than** I do." (More fast - comparative)
- "This book is more interesting **than** that one." (More interesting - comparative)

**Key idea:** Than = used with comparatives (more/less than)!

**Note:** After "than", you can use:
- Object pronouns: "taller **than me**" (common in spoken English)
- Subject + verb: "taller **than I am**" (more formal)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Important:</h3>
  <p><strong>As...as</strong> = Equal comparison (same level)</p>
  <p><strong>Than</strong> = With comparatives (more/less)</p>
  <p>✅ "This car is <strong>as expensive as</strong> that one." (Equal)</p>
  <p>✅ "This car is <strong>more expensive than</strong> that one." (More)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. Comparison Summary Table 📋

| Type | Structure | Meaning | Example |
|------|-----------|---------|---------|
| **Equal** | as + adj/adv + as | Same level | as expensive as |
| **Not equal** | not as + adj/adv + as | Less than | not as expensive as |
| **More** | comparative + than | More than | more expensive than |
| **Less** | less + adj/adv + than | Less than | less expensive than |

**Examples:**
- "This car is **as expensive as** that one." (Equal) ✅
- "This car is **not as expensive as** that one." (Less) ❌
- "This car is **more expensive than** that one." (More) ⬆️
- "This car is **less expensive than** that one." (Less) ⬇️

### 5. Common Patterns 📝

**As...as (Equal):**
- "She is **as tall as** me."
- "He runs **as fast as** I do."
- "This is **as good as** that."

**Not as...as (Not equal):**
- "I'm **not as tall as** you."
- "He doesn't run **as fast as** I do."
- "This is **not as good as** that."

**Comparative + than (More):**
- "She is taller **than** me."
- "He runs faster **than** I do."
- "This is better **than** that."

**Less + than (Less):**
- "She is less tall **than** me."
- "He runs less fast **than** I do."
- "This is less good **than** that."

### 6. Common Mistakes ❌

**Mistake 1:** Using "than" with "as...as"
- ❌ "This car is as expensive **than** that one." (Wrong! - use "as...as")
- ✅ "This car is **as expensive as** that one." (Correct!)

**Mistake 2:** Using "as" with comparatives
- ❌ "She is taller **as** me." (Wrong! - use "than")
- ✅ "She is taller **than** me." (Correct!)

**Mistake 3:** Forgetting the second "as"
- ❌ "This car is as expensive that one." (Wrong! - need "as...as")
- ✅ "This car is **as expensive as** that one." (Correct!)

**Mistake 4:** Confusing "not as...as" with "not so...than"
- ❌ "I'm not so tall **than** you." (Wrong! - use "not as...as")
- ✅ "I'm **not as tall as** you." (Correct!)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>As...as</strong> = Equal comparison (same level)</li>
    <li><strong>Not as...as</strong> = Not equal (less than)</li>
    <li><strong>Than</strong> = With comparatives (more/less than)</li>
    <li>✅ "as expensive as" (equal) vs "more expensive than" (more)</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: As...As and Than**
Choose the correct form! Remember: as...as for equal, than for comparatives!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 As...As and Than</h3>
  <p className="mb-4">Write sentences using as...as and than:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence with "as...as" (equal comparison)</li>
    <li>One sentence with "not as...as" (not equal)</li>
    <li>One sentence with "than" (comparative)</li>
    <li>Write your own comparison sentence</li>
  </ol>
</div>
`,
    de: `
## Komparativ 3: As...As und Than 🔄

**As...as** und **than** werden verwendet, um Vergleiche zu machen. **As...as** ist für **gleiche** Vergleiche (gleiches Niveau), während **than** mit **Komparativen** (mehr/weniger als) verwendet wird.

### Warum brauchen wir beide?

Denk an diese Situationen:
- "Dieses Auto ist **genauso teuer wie** jenes." (Gleich - gleicher Preis)
- "Sie ist größer **als** ich." (Ungleich - sie ist größer)
- "Ich bin nicht **so groß wie** du." (Nicht gleich - ich bin kleiner)

Die Schlüsselidee: **As...as** = gleicher Vergleich, **Than** = wird mit Komparativen verwendet (mehr/weniger)!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>As...as</strong> = Gleicher Vergleich (gleiches Niveau)</p>
  <p><strong>Than</strong> = Wird mit Komparativen verwendet (mehr/weniger als)</p>
  <p><strong>Not as...as</strong> = Nicht gleich (weniger als)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. As...As: Gleicher Vergleich ✅

**As...as** wird verwendet, um zu sagen, dass zwei Dinge **gleich** sind (gleiches Niveau).

**Struktur:** as + Adjektiv/Adverb + as

**Beispiele:**
- "Dieses Auto ist **genauso teuer wie** jenes." (Gleicher Preis - gleiches Niveau)
- "Sie ist **genauso groß wie** ich." (Gleiche Größe - gleiches Niveau)
- "Er läuft **genauso schnell wie** ich." (Gleiche Geschwindigkeit - gleiches Niveau)
- "Dieses Buch ist **genauso interessant wie** jenes." (Gleiches Interesse - gleiches Niveau)

**Schlüsselidee:** As...as = gleich, gleiches Niveau!

**Hinweis:** Du kannst auch "as...as" mit Adverbien verwenden:
- "Sie spricht **genauso klar wie** er." (Gleiche Klarheit)

### 2. Not As...As: Nicht gleich ❌

**Not as...as** wird verwendet, um zu sagen, dass eine Sache **weniger** als eine andere ist (nicht gleich).

**Struktur:** not as + Adjektiv/Adverb + as

**Beispiele:**
- "Dieses Auto ist **nicht so teuer wie** jenes." (Weniger teuer - nicht gleich)
- "Ich bin **nicht so groß wie** du." (Weniger groß - nicht gleich)
- "Er läuft **nicht so schnell wie** ich." (Weniger schnell - nicht gleich)
- "Dieses Buch ist **nicht so interessant wie** jenes." (Weniger interessant - nicht gleich)

**Schlüsselidee:** Not as...as = weniger als, nicht gleich!

**Alternative:** Du kannst auch "not so...as" sagen (weniger häufig):
- "Ich bin **nicht so groß wie** du." (Gleiche Bedeutung wie "not as tall as")

### 3. Than: Mit Komparativen 📊

**Than** wird mit **Komparativformen** (taller, more expensive, better) verwendet, um zu zeigen, dass eine Sache **mehr** oder **weniger** als eine andere ist.

**Struktur:** Komparativ + than

**Beispiele:**
- "Sie ist größer **als** ich." (Mehr groß - Komparativ)
- "Dieses Auto ist teurer **als** jenes." (Mehr teuer - Komparativ)
- "Er läuft schneller **als** ich." (Mehr schnell - Komparativ)
- "Dieses Buch ist interessanter **als** jenes." (Mehr interessant - Komparativ)

**Schlüsselidee:** Than = wird mit Komparativen verwendet (mehr/weniger als)!

**Hinweis:** Nach "than" kannst du verwenden:
- Objektpronomen: "größer **als mich**" (häufig im gesprochenen Englisch)
- Subjekt + Verb: "größer **als ich bin**" (formeller)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Wichtig:</h3>
  <p><strong>As...as</strong> = Gleicher Vergleich (gleiches Niveau)</p>
  <p><strong>Than</strong> = Mit Komparativen (mehr/weniger)</p>
  <p>✅ "Dieses Auto ist <strong>genauso teuer wie</strong> jenes." (Gleich)</p>
  <p>✅ "Dieses Auto ist <strong>teurer als</strong> jenes." (Mehr)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. Vergleichszusammenfassungstabelle 📋

| Typ | Struktur | Bedeutung | Beispiel |
|-----|----------|-----------|----------|
| **Gleich** | as + Adj/Adv + as | Gleiches Niveau | as expensive as |
| **Nicht gleich** | not as + Adj/Adv + as | Weniger als | not as expensive as |
| **Mehr** | Komparativ + than | Mehr als | more expensive than |
| **Weniger** | less + Adj/Adv + than | Weniger als | less expensive than |

**Beispiele:**
- "Dieses Auto ist **genauso teuer wie** jenes." (Gleich) ✅
- "Dieses Auto ist **nicht so teuer wie** jenes." (Weniger) ❌
- "Dieses Auto ist **teurer als** jenes." (Mehr) ⬆️
- "Dieses Auto ist **weniger teuer als** jenes." (Weniger) ⬇️

### 5. Häufige Muster 📝

**As...as (Gleich):**
- "Sie ist **genauso groß wie** ich."
- "Er läuft **genauso schnell wie** ich."
- "Das ist **genauso gut wie** das."

**Not as...as (Nicht gleich):**
- "Ich bin **nicht so groß wie** du."
- "Er läuft **nicht so schnell wie** ich."
- "Das ist **nicht so gut wie** das."

**Komparativ + than (Mehr):**
- "Sie ist größer **als** ich."
- "Er läuft schneller **als** ich."
- "Das ist besser **als** das."

**Less + than (Weniger):**
- "Sie ist weniger groß **als** ich."
- "Er läuft weniger schnell **als** ich."
- "Das ist weniger gut **als** das."

### 6. Häufige Fehler ❌

**Fehler 1:** "Than" mit "as...as" verwenden
- ❌ "Dieses Auto ist genauso teuer **als** jenes." (Falsch! - verwende "as...as")
- ✅ "Dieses Auto ist **genauso teuer wie** jenes." (Richtig!)

**Fehler 2:** "As" mit Komparativen verwenden
- ❌ "Sie ist größer **wie** ich." (Falsch! - verwende "than")
- ✅ "Sie ist größer **als** ich." (Richtig!)

**Fehler 3:** Das zweite "as" vergessen
- ❌ "Dieses Auto ist genauso teuer jenes." (Falsch! - braucht "as...as")
- ✅ "Dieses Auto ist **genauso teuer wie** jenes." (Richtig!)

**Fehler 4:** "Not as...as" mit "not so...than" verwechseln
- ❌ "Ich bin nicht so groß **als** du." (Falsch! - verwende "not as...as")
- ✅ "Ich bin **nicht so groß wie** du." (Richtig!)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>As...as</strong> = Gleicher Vergleich (gleiches Niveau)</li>
    <li><strong>Not as...as</strong> = Nicht gleich (weniger als)</li>
    <li><strong>Than</strong> = Mit Komparativen (mehr/weniger als)</li>
    <li>✅ "as expensive as" (gleich) vs "more expensive than" (mehr)</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: As...As und Than**
Wähle die richtige Form! Denk daran: as...as für gleich, than für Komparative!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 As...As und Than</h3>
  <p className="mb-4">Schreibe Sätze mit as...as und than:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz mit "as...as" (gleicher Vergleich)</li>
    <li>Ein Satz mit "not as...as" (nicht gleich)</li>
    <li>Ein Satz mit "than" (Komparativ)</li>
    <li>Schreibe deinen eigenen Vergleichssatz</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'As...As und Than',
      description: 'Schreibe Sätze mit as...as und than für gleiche und ungleiche Vergleiche.',
      checklist: [
        { text: 'Satz mit "as...as" (gleicher Vergleich)', checked: false },
        { text: 'Satz mit "not as...as" (nicht gleich)', checked: false },
        { text: 'Satz mit "than" (Komparativ)', checked: false },
        { text: 'Eigener Vergleichssatz', checked: false }
      ]
    },
    en: {
      title: 'As...As and Than',
      description: 'Write sentences using as...as and than for equal and unequal comparisons.',
      checklist: [
        { text: 'Sentence with "as...as" (equal comparison)', checked: false },
        { text: 'Sentence with "not as...as" (not equal)', checked: false },
        { text: 'Sentence with "than" (comparative)', checked: false },
        { text: 'Own comparison sentence', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

