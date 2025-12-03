import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "The book ___ I'm reading is interesting.", de: "Das Buch, ___ ich lese, ist interessant." },
    words: ["which", "that", "which/that", ""],
    correct: "which/that",
    explanation: { en: "Can omit which/that when it's the object (I'm reading the book)", de: "Kann which/that weglassen, wenn es das Objekt ist (ich lese das Buch)" }
  },
  {
    prompt: { en: "The woman ___ lives next door is a doctor.", de: "Die Frau, ___ nebenan wohnt, ist Ärztin." },
    words: ["who", "that", "who/that", ""],
    correct: "who/that",
    explanation: { en: "Cannot omit who/that when it's the subject (the woman lives)", de: "Kann who/that nicht weglassen, wenn es das Subjekt ist (die Frau wohnt)" }
  },
  {
    prompt: { en: "The car ___ I bought is red.", de: "Das Auto, ___ ich gekauft habe, ist rot." },
    words: ["which", "that", "which/that", ""],
    correct: "which/that",
    explanation: { en: "Can omit which/that when it's the object (I bought the car)", de: "Kann which/that weglassen, wenn es das Objekt ist (ich habe das Auto gekauft)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "The woman lives next door is a doctor.",
    mistakeIndex: 1,
    correction: "who",
    explanation: { en: "Cannot omit who when it's the subject (the woman lives)", de: "Kann who nicht weglassen, wenn es das Subjekt ist (die Frau wohnt)" }
  },
  {
    sentence: "The book I'm reading it is interesting.",
    mistakeIndex: 3,
    correction: "",
    explanation: { en: "Remove 'it' - the book is already the object (I'm reading the book)", de: "Entferne 'es' - das Buch ist bereits das Objekt (ich lese das Buch)" }
  },
  {
    sentence: "The car that I bought it is red.",
    mistakeIndex: 3,
    correction: "",
    explanation: { en: "Remove 'it' - the car is already the object (I bought the car)", de: "Entferne 'es' - das Auto ist bereits das Objekt (ich habe das Auto gekauft)" }
  }
];

const grammarRacerData = [
  {
    prompt: "The book ___ I'm reading is interesting.",
    options: ["which", "that", "(can omit)"],
    correct: "(can omit)",
    explanation: "Object: can omit which/that"
  },
  {
    prompt: "The woman ___ lives next door is a doctor.",
    options: ["who", "that", "(cannot omit)"],
    correct: "(cannot omit)",
    explanation: "Subject: cannot omit who/that"
  },
  {
    prompt: "The car ___ I bought is red.",
    options: ["which", "that", "(can omit)"],
    correct: "(can omit)",
    explanation: "Object: can omit which/that"
  }
];

export const relativeClauses2 = {
  id: 'a2_g93',
  title: {
    en: 'Relative Clauses 2: Clauses with and without who/that/which',
    de: 'Relativsätze 2: Sätze mit und ohne who/that/which'
  },
  description: {
    en: "When you can omit relative pronouns. 'The book I'm reading' (without which/that) vs 'The woman who lives next door' (with who).",
    de: "Wann man Relativpronomen weglassen kann. 'Das Buch, das ich lese' (ohne which/that) vs 'Die Frau, die nebenan wohnt' (mit who)."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Relative Clauses: When Can You Omit the Pronoun? 🤔

In some relative clauses, you can **omit** (leave out) the relative pronoun (who/which/that). This makes your English sound more natural and fluent, especially in spoken English.

### Why Can We Sometimes Omit the Pronoun?

Think about these sentences:
- "The book **which** I'm reading is interesting." (With pronoun)
- "The book I'm reading is interesting." (Without pronoun - more natural!)

- "The woman **who** lives next door is a doctor." (With pronoun - **cannot** omit!)
- "The woman lives next door is a doctor." (Wrong! - cannot omit when it's the subject)

The key idea: You can **omit** the relative pronoun when it's the **object**, but **not** when it's the **subject**!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>Can omit</strong> = When the pronoun is the <strong>object</strong> (I'm reading <strong>the book</strong>)</p>
  <p><strong>Cannot omit</strong> = When the pronoun is the <strong>subject</strong> (<strong>The woman</strong> lives)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. When You CAN Omit: Object Clauses ✅

You can **omit** who/which/that when the relative pronoun is the **object** of the verb in the relative clause.

**Structure:** Noun + (who/which/that) + subject + verb

**Examples:**
- "The book **(which/that)** I'm reading is interesting." (I'm reading **the book** - object)
- "The car **(which/that)** I bought is red." (I bought **the car** - object)
- "The man **(who/that)** I met yesterday is my teacher." (I met **the man** - object)
- "The movie **(which/that)** we saw was great." (We saw **the movie** - object)

**Key idea:** When the pronoun is the **object**, you can omit it - this is very common in spoken English!

**Note:** In these cases, the relative clause starts directly with the subject:
- "The book **I'm reading**..." (Not "The book **which I'm reading**...")

### 2. When You CANNOT Omit: Subject Clauses ❌

You **cannot omit** who/which/that when the relative pronoun is the **subject** of the verb in the relative clause.

**Structure:** Noun + **who/which/that** + verb (pronoun is the subject!)

**Examples:**
- "The woman **who** lives next door is a doctor." (The woman **lives** - subject, cannot omit!)
- "The book **which** is on the table is mine." (The book **is** - subject, cannot omit!)
- "The man **who** works here is friendly." (The man **works** - subject, cannot omit!)
- "The car **that** broke down is expensive." (The car **broke** - subject, cannot omit!)

**Key idea:** When the pronoun is the **subject**, you **must** keep it - you cannot omit it!

**Important:** If you try to omit the pronoun when it's the subject, the sentence becomes wrong:
- ❌ "The woman lives next door is a doctor." (Wrong! - missing who)
- ✅ "The woman **who** lives next door is a doctor." (Correct!)

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Common Mistake!</strong>
  <br/>
  <p className="mt-2"><strong>Subject</strong> = Cannot omit the pronoun!</p>
  <p>❌ "The woman lives next door is a doctor." (Wrong! - missing who)</p>
  <p>✅ "The woman <strong>who</strong> lives next door is a doctor." (Correct!)</p>
  <p className="mt-2"><strong>Object</strong> = Can omit the pronoun!</p>
  <p>✅ "The book I'm reading is interesting." (Correct! - can omit which/that)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 3. How to Identify Subject vs Object 🔍

**Subject:** The person or thing that **does** the action
**Object:** The person or thing that **receives** the action

**Example 1:**
- "The woman **who** lives next door" (The woman **lives** - subject, cannot omit)
- "The woman **(who)** I met" (I met **the woman** - object, can omit)

**Example 2:**
- "The book **which** is on the table" (The book **is** - subject, cannot omit)
- "The book **(which)** I'm reading" (I'm reading **the book** - object, can omit)

**Example 3:**
- "The car **that** broke down" (The car **broke** - subject, cannot omit)
- "The car **(that)** I bought" (I bought **the car** - object, can omit)

**Key idea:** Ask yourself: "Who/what does the action?" (Subject - cannot omit) vs "Who/what receives the action?" (Object - can omit)!

### 4. Common Patterns: Object Clauses (Can Omit) 📝

**Pattern:** Noun + (pronoun) + subject + verb

**Examples:**
- "The person **(who/that)** I know" → "The person I know"
- "The thing **(which/that)** you said" → "The thing you said"
- "The place **(where)** we went" → "The place we went" (Note: "where" is less commonly omitted)
- "The time **(when)** we met" → "The time we met" (Note: "when" is less commonly omitted)

**In spoken English, omitting the pronoun is very common:**
- "The book I'm reading" (More natural than "The book which I'm reading")
- "The car I bought" (More natural than "The car that I bought")
- "The person I met" (More natural than "The person who I met")

### 5. Common Patterns: Subject Clauses (Cannot Omit) 📝

**Pattern:** Noun + **pronoun** + verb

**Examples:**
- "The person **who** works here" (Cannot omit - who is the subject)
- "The thing **which** is important" (Cannot omit - which is the subject)
- "The place **where** I work" (Cannot omit - where is for places)
- "The time **when** we met" (Cannot omit - when is for time)

**You must keep the pronoun:**
- "The woman **who** lives next door" (Must have who)
- "The book **which** is on the table" (Must have which)
- "The car **that** broke down" (Must have that)

### 6. Summary Table 📋

| Situation | Can Omit? | Example |
|-----------|-----------|---------|
| **Object** (I'm reading **the book**) | ✅ Yes | The book **(which/that)** I'm reading |
| **Subject** (**The woman** lives) | ❌ No | The woman **who** lives next door |
| **Object** (I met **the man**) | ✅ Yes | The man **(who/that)** I met |
| **Subject** (**The car** broke) | ❌ No | The car **that** broke down |

**Rules:**
1. **Object** → Can omit (very common in spoken English)
2. **Subject** → Cannot omit (must keep the pronoun)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Object</strong> = Can omit who/which/that (very common in speech)</li>
    <li><strong>Subject</strong> = Cannot omit who/which/that (must keep it)</li>
    <li>Example: "The book I'm reading" (object - can omit)</li>
    <li>Example: "The woman who lives next door" (subject - cannot omit)</li>
  </ul>
</div>

### 7. Common Mistakes ❌

**Mistake 1:** Omitting the pronoun when it's the subject
- ❌ "The woman lives next door is a doctor." (Wrong! - missing who)
- ✅ "The woman **who** lives next door is a doctor." (Correct!)

**Mistake 2:** Adding an extra pronoun when it's the object
- ❌ "The book which I'm reading **it** is interesting." (Wrong! - extra "it")
- ✅ "The book **(which)** I'm reading is interesting." (Correct! - can omit which)

**Mistake 3:** Confusing subject and object
- ❌ "The car I bought **it** is red." (Wrong! - extra "it")
- ✅ "The car **(that)** I bought is red." (Correct! - can omit that)

**Mistake 4:** Trying to omit "where" or "when"
- ⚠️ "The place **(where)** I work" (Less common to omit where/when)
- ✅ "The place **where** I work" (More common to keep where/when)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Omitting Relative Pronouns**
Decide if you can omit the pronoun! Remember: object = can omit, subject = cannot omit!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Relative Clauses with and without Pronouns</h3>
  <p className="mb-4">Write sentences with relative clauses:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence where you CAN omit the pronoun (object clause)</li>
    <li>One sentence where you CANNOT omit the pronoun (subject clause)</li>
    <li>Rewrite a sentence omitting the pronoun where possible</li>
    <li>Write your own sentence with a relative clause (with or without pronoun)</li>
  </ol>
</div>
`,
    de: `
## Relativsätze: Wann kann man das Pronomen weglassen? 🤔

In einigen Relativsätzen kannst du das Relativpronomen (who/which/that) **weglassen** (omitten). Das macht dein Englisch natürlicher und flüssiger, besonders im gesprochenen Englisch.

### Warum können wir manchmal das Pronomen weglassen?

Denk an diese Sätze:
- "Das Buch, **das** ich lese, ist interessant." (Mit Pronomen)
- "Das Buch, das ich lese, ist interessant." (Ohne Pronomen - natürlicher!)

- "Die Frau, **die** nebenan wohnt, ist Ärztin." (Mit Pronomen - **kann nicht** weggelassen werden!)
- "Die Frau wohnt nebenan ist Ärztin." (Falsch! - kann nicht weggelassen werden, wenn es das Subjekt ist)

Die Schlüsselidee: Du kannst das Relativpronomen **weglassen**, wenn es das **Objekt** ist, aber **nicht**, wenn es das **Subjekt** ist!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>Kann weglassen</strong> = Wenn das Pronomen das <strong>Objekt</strong> ist (ich lese <strong>das Buch</strong>)</p>
  <p><strong>Kann nicht weglassen</strong> = Wenn das Pronomen das <strong>Subjekt</strong> ist (<strong>Die Frau</strong> wohnt)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Wenn du weglassen KANNST: Objektsätze ✅

Du kannst who/which/that **weglassen**, wenn das Relativpronomen das **Objekt** des Verbs im Relativsatz ist.

**Struktur:** Nomen + (who/which/that) + Subjekt + Verb

**Beispiele:**
- "Das Buch, **(das)** ich lese, ist interessant." (Ich lese **das Buch** - Objekt)
- "Das Auto, **(das)** ich gekauft habe, ist rot." (Ich habe **das Auto** gekauft - Objekt)
- "Der Mann, **(den)** ich gestern getroffen habe, ist mein Lehrer." (Ich habe **den Mann** getroffen - Objekt)
- "Der Film, **(den)** wir gesehen haben, war großartig." (Wir haben **den Film** gesehen - Objekt)

**Schlüsselidee:** Wenn das Pronomen das **Objekt** ist, kannst du es weglassen - das ist sehr häufig im gesprochenen Englisch!

**Hinweis:** In diesen Fällen beginnt der Relativsatz direkt mit dem Subjekt:
- "Das Buch, **das ich lese**..." (Nicht "Das Buch, **das ich lese**...")

### 2. Wenn du NICHT weglassen KANNST: Subjektsätze ❌

Du **kannst** who/which/that **nicht weglassen**, wenn das Relativpronomen das **Subjekt** des Verbs im Relativsatz ist.

**Struktur:** Nomen + **who/which/that** + Verb (Pronomen ist das Subjekt!)

**Beispiele:**
- "Die Frau, **die** nebenan wohnt, ist Ärztin." (Die Frau **wohnt** - Subjekt, kann nicht weggelassen werden!)
- "Das Buch, **das** auf dem Tisch liegt, ist meins." (Das Buch **liegt** - Subjekt, kann nicht weggelassen werden!)
- "Der Mann, **der** hier arbeitet, ist freundlich." (Der Mann **arbeitet** - Subjekt, kann nicht weggelassen werden!)
- "Das Auto, **das** kaputt gegangen ist, ist teuer." (Das Auto **ist kaputt gegangen** - Subjekt, kann nicht weggelassen werden!)

**Schlüsselidee:** Wenn das Pronomen das **Subjekt** ist, **musst** du es behalten - du kannst es nicht weglassen!

**Wichtig:** Wenn du versuchst, das Pronomen wegzulassen, wenn es das Subjekt ist, wird der Satz falsch:
- ❌ "Die Frau wohnt nebenan ist Ärztin." (Falsch! - fehlt who)
- ✅ "Die Frau, **die** nebenan wohnt, ist Ärztin." (Richtig!)

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Häufiger Fehler!</strong>
  <br/>
  <p className="mt-2"><strong>Subjekt</strong> = Kann das Pronomen nicht weglassen!</p>
  <p>❌ "Die Frau wohnt nebenan ist Ärztin." (Falsch! - fehlt who)</p>
  <p>✅ "Die Frau, <strong>die</strong> nebenan wohnt, ist Ärztin." (Richtig!)</p>
  <p className="mt-2"><strong>Objekt</strong> = Kann das Pronomen weglassen!</p>
  <p>✅ "Das Buch, das ich lese, ist interessant." (Richtig! - kann which/that weglassen)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 3. Wie man Subjekt vs Objekt identifiziert 🔍

**Subjekt:** Die Person oder das Ding, das die Handlung **ausführt**
**Objekt:** Die Person oder das Ding, das die Handlung **empfängt**

**Beispiel 1:**
- "Die Frau, **die** nebenan wohnt" (Die Frau **wohnt** - Subjekt, kann nicht weggelassen werden)
- "Die Frau, **(die)** ich getroffen habe" (Ich habe **die Frau** getroffen - Objekt, kann weggelassen werden)

**Beispiel 2:**
- "Das Buch, **das** auf dem Tisch liegt" (Das Buch **liegt** - Subjekt, kann nicht weggelassen werden)
- "Das Buch, **(das)** ich lese" (Ich lese **das Buch** - Objekt, kann weggelassen werden)

**Beispiel 3:**
- "Das Auto, **das** kaputt gegangen ist" (Das Auto **ist kaputt gegangen** - Subjekt, kann nicht weggelassen werden)
- "Das Auto, **(das)** ich gekauft habe" (Ich habe **das Auto** gekauft - Objekt, kann weggelassen werden)

**Schlüsselidee:** Frage dich: "Wer/was führt die Handlung aus?" (Subjekt - kann nicht weggelassen werden) vs "Wer/was empfängt die Handlung?" (Objekt - kann weggelassen werden)!

### 4. Häufige Muster: Objektsätze (Kann weglassen) 📝

**Muster:** Nomen + (Pronomen) + Subjekt + Verb

**Beispiele:**
- "Die Person, **(die)** ich kenne" → "Die Person, die ich kenne"
- "Das Ding, **(das)** du gesagt hast" → "Das Ding, das du gesagt hast"
- "Der Ort, **(wo)** wir waren" → "Der Ort, wo wir waren" (Hinweis: "where" wird weniger häufig weggelassen)
- "Die Zeit, **(wann)** wir uns getroffen haben" → "Die Zeit, wann wir uns getroffen haben" (Hinweis: "when" wird weniger häufig weggelassen)

**Im gesprochenen Englisch ist das Weglassen des Pronomens sehr häufig:**
- "Das Buch, das ich lese" (Natürlicher als "Das Buch, das ich lese")
- "Das Auto, das ich gekauft habe" (Natürlicher als "Das Auto, das ich gekauft habe")
- "Die Person, die ich getroffen habe" (Natürlicher als "Die Person, die ich getroffen habe")

### 5. Häufige Muster: Subjektsätze (Kann nicht weglassen) 📝

**Muster:** Nomen + **Pronomen** + Verb

**Beispiele:**
- "Die Person, **die** hier arbeitet" (Kann nicht weggelassen werden - who ist das Subjekt)
- "Das Ding, **das** wichtig ist" (Kann nicht weggelassen werden - which ist das Subjekt)
- "Der Ort, **wo** ich arbeite" (Kann nicht weggelassen werden - where ist für Orte)
- "Die Zeit, **wann** wir uns getroffen haben" (Kann nicht weggelassen werden - when ist für Zeit)

**Du musst das Pronomen behalten:**
- "Die Frau, **die** nebenan wohnt" (Muss who haben)
- "Das Buch, **das** auf dem Tisch liegt" (Muss which haben)
- "Das Auto, **das** kaputt gegangen ist" (Muss that haben)

### 6. Zusammenfassungstabelle 📋

| Situation | Kann weglassen? | Beispiel |
|-----------|----------------|----------|
| **Objekt** (Ich lese **das Buch**) | ✅ Ja | Das Buch, **(das)** ich lese |
| **Subjekt** (**Die Frau** wohnt) | ❌ Nein | Die Frau, **die** nebenan wohnt |
| **Objekt** (Ich habe **den Mann** getroffen) | ✅ Ja | Der Mann, **(den)** ich getroffen habe |
| **Subjekt** (**Das Auto** ist kaputt gegangen) | ❌ Nein | Das Auto, **das** kaputt gegangen ist |

**Regeln:**
1. **Objekt** → Kann weglassen (sehr häufig im gesprochenen Englisch)
2. **Subjekt** → Kann nicht weglassen (muss das Pronomen behalten)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Objekt</strong> = Kann who/which/that weglassen (sehr häufig in der Sprache)</li>
    <li><strong>Subjekt</strong> = Kann who/which/that nicht weglassen (muss es behalten)</li>
    <li>Beispiel: "Das Buch, das ich lese" (Objekt - kann weglassen)</li>
    <li>Beispiel: "Die Frau, die nebenan wohnt" (Subjekt - kann nicht weglassen)</li>
  </ul>
</div>

### 7. Häufige Fehler ❌

**Fehler 1:** Das Pronomen weglassen, wenn es das Subjekt ist
- ❌ "Die Frau wohnt nebenan ist Ärztin." (Falsch! - fehlt who)
- ✅ "Die Frau, **die** nebenan wohnt, ist Ärztin." (Richtig!)

**Fehler 2:** Ein zusätzliches Pronomen hinzufügen, wenn es das Objekt ist
- ❌ "Das Buch, das ich lese **es**, ist interessant." (Falsch! - zusätzliches "es")
- ✅ "Das Buch, **(das)** ich lese, ist interessant." (Richtig! - kann which weglassen)

**Fehler 3:** Subjekt und Objekt verwechseln
- ❌ "Das Auto, das ich gekauft habe **es**, ist rot." (Falsch! - zusätzliches "es")
- ✅ "Das Auto, **(das)** ich gekauft habe, ist rot." (Richtig! - kann that weglassen)

**Fehler 4:** Versuchen, "where" oder "when" wegzulassen
- ⚠️ "Der Ort, **(wo)** ich arbeite" (Weniger häufig, where/when wegzulassen)
- ✅ "Der Ort, **wo** ich arbeite" (Häufiger, where/when zu behalten)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Relativpronomen weglassen**
Entscheide, ob du das Pronomen weglassen kannst! Denk daran: Objekt = kann weglassen, Subjekt = kann nicht weglassen!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Relativsätze mit und ohne Pronomen</h3>
  <p className="mb-4">Schreibe Sätze mit Relativsätzen:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz, wo du das Pronomen weglassen KANNST (Objektsatz)</li>
    <li>Ein Satz, wo du das Pronomen NICHT weglassen kannst (Subjektsatz)</li>
    <li>Schreibe einen Satz um und lasse das Pronomen weg, wo möglich</li>
    <li>Schreibe deinen eigenen Satz mit einem Relativsatz (mit oder ohne Pronomen)</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Relativsätze 2',
      description: 'Schreibe Sätze mit Relativsätzen, wo du das Pronomen weglassen kannst oder nicht.',
      checklist: [
        { text: 'Satz, wo du das Pronomen weglassen kannst (Objekt)', checked: false },
        { text: 'Satz, wo du das Pronomen nicht weglassen kannst (Subjekt)', checked: false },
        { text: 'Satz umschreiben und Pronomen weglassen, wo möglich', checked: false },
        { text: 'Eigener Satz mit Relativsatz (mit oder ohne Pronomen)', checked: false }
      ]
    },
    en: {
      title: 'Relative Clauses 2',
      description: 'Write sentences with relative clauses where you can or cannot omit the pronoun.',
      checklist: [
        { text: 'Sentence where you can omit the pronoun (object)', checked: false },
        { text: 'Sentence where you cannot omit the pronoun (subject)', checked: false },
        { text: 'Rewrite sentence omitting pronoun where possible', checked: false },
        { text: 'Own sentence with relative clause (with or without pronoun)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


