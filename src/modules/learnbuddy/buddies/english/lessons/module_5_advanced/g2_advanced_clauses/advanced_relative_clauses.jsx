import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "The report, the conclusions ___ were highly controversial, was published last week.", de: "Der Bericht, dessen Schlussfolgerungen höchst umstritten waren, wurde letzte Woche veröffentlicht." },
    words: ["of which", "which", "whose", "that"],
    correct: "of which",
    explanation: { en: "'Of which' refers to part of the preceding noun: 'the conclusions of which' = 'the conclusions of the report'.", de: "'Of which' bezieht sich auf einen Teil des vorangehenden Substantivs: 'the conclusions of which' = 'the conclusions of the report'." }
  },
  {
    prompt: { en: "The researchers, several ___ had won Nobel Prizes, presented their findings.", de: "Die Forscher, von denen mehrere Nobelpreise gewonnen hatten, präsentierten ihre Ergebnisse." },
    words: ["of whom", "of which", "who", "whose"],
    correct: "of whom",
    explanation: { en: "'Of whom' is used for people with quantifiers: 'several of whom' = 'several of the researchers'.", de: "'Of whom' wird für Personen mit Mengenangaben verwendet: 'several of whom' = 'several of the researchers'." }
  },
  {
    prompt: { en: "___ really surprised me was how quickly she adapted to the new role.", de: "Was mich wirklich überrascht hat, war, wie schnell sie sich an die neue Rolle angepasst hat." },
    words: ["What", "Which", "That", "It"],
    correct: "What",
    explanation: { en: "'What' acts as a nominal relative pronoun meaning 'the thing that': 'What surprised me' = 'The thing that surprised me'.", de: "'What' fungiert als nominales Relativpronomen: 'What surprised me' = 'Das, was mich überraschte'." }
  },
  {
    prompt: { en: "The building, ___ in 1890, has been designated a heritage site.", de: "Das Gebäude, das 1890 erbaut wurde, wurde zum Denkmal erklärt." },
    words: ["built", "which built", "building", "was built"],
    correct: "built",
    explanation: { en: "Reduced relative clause: 'built in 1890' = 'which was built in 1890'. The relative pronoun and auxiliary are omitted.", de: "Verkürzter Relativsatz: 'built in 1890' = 'which was built in 1890'. Relativpronomen und Hilfsverb werden weggelassen." }
  },
  {
    prompt: { en: "She moved to Berlin, ___ she had always dreamed of living.", de: "Sie zog nach Berlin, wo sie immer schon davon geträumt hatte zu leben." },
    words: ["where", "which", "in which", "that"],
    correct: "where",
    explanation: { en: "'Where' introduces a non-defining relative clause for places: 'Berlin, where she had always dreamed of living'.", de: "'Where' leitet einen nicht-definierenden Relativsatz für Orte ein." }
  },
  {
    prompt: { en: "The committee, the chairperson ___ recently resigned, will hold elections.", de: "Der Ausschuss, dessen Vorsitzender kürzlich zurückgetreten ist, wird Wahlen abhalten." },
    words: ["of which", "whose", "which", "whom"],
    correct: "of which",
    explanation: { en: "'The chairperson of which' is a formal alternative to 'whose chairperson'. Preferred in academic writing.", de: "'The chairperson of which' ist eine formelle Alternative zu 'whose chairperson'." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "The candidates, most of who had extensive experience, performed well.",
    mistakeIndex: 4,
    correction: "whom",
    explanation: { en: "After a preposition, use 'whom' (not 'who'): 'most of whom'. 'Of' requires the object form.", de: "Nach einer Präposition verwendet man 'whom' (nicht 'who'): 'most of whom'." }
  },
  {
    sentence: "The city which I grew up is famous for its architecture.",
    mistakeIndex: 2,
    correction: "in which",
    explanation: { en: "A preposition is needed: 'the city in which I grew up'. You grow up 'in' a city.", de: "Eine Präposition ist nötig: 'the city in which I grew up'. Man wächst 'in' einer Stadt auf." }
  },
  {
    sentence: "That really matters is your commitment to the project.",
    mistakeIndex: 0,
    correction: "What",
    explanation: { en: "'What' (not 'that') is needed as a nominal relative pronoun: 'What really matters' = 'The thing that really matters'.", de: "'What' (nicht 'that') wird als nominales Relativpronomen benötigt." }
  },
  {
    sentence: "The book, was published in 2020, became an instant bestseller.",
    mistakeIndex: 2,
    correction: "which was",
    explanation: { en: "Non-defining relative clauses need a relative pronoun: 'The book, which was published in 2020...'", de: "Nicht-definierende Relativsätze brauchen ein Relativpronomen: 'The book, which was published in 2020...'" }
  },
  {
    sentence: "The reason for that she resigned remains unclear.",
    mistakeIndex: 3,
    correction: "which",
    explanation: { en: "After a preposition, use 'which' (not 'that'): 'The reason for which she resigned...'", de: "Nach einer Präposition verwendet man 'which' (nicht 'that'): 'The reason for which she resigned...'" }
  }
];

const grammarRacerData = [
  {
    prompt: "The proposal, the details ___ remain confidential, has been approved.",
    options: ["of which", "which", "whose"],
    correct: "of which",
    explanation: "'The details of which' = 'the details of the proposal'. 'Of which' links a noun to the antecedent."
  },
  {
    prompt: "The students, none ___ had studied abroad, excelled in the exam.",
    options: ["of whom", "of which", "who"],
    correct: "of whom",
    explanation: "'None of whom' — use 'of whom' for people with quantifiers (none, some, many, several)."
  },
  {
    prompt: "___ the teacher said made a lasting impression on the students.",
    options: ["What", "That", "Which"],
    correct: "What",
    explanation: "'What' = 'The thing that'. It acts as both the relative and the antecedent."
  },
  {
    prompt: "The bridge, ___ over 200 years ago, is still in use today.",
    options: ["constructed", "constructing", "was constructed"],
    correct: "constructed",
    explanation: "Reduced relative clause (passive): 'constructed' = 'which was constructed'."
  }
];

export const advancedRelativeClauses = {
  id: 'c1_g4',
  title: {
    en: 'Advanced Relative Clauses',
    de: 'Fortgeschrittene Relativsätze'
  },
  description: {
    en: "Master reduced clauses, preposition + which, of whom/which, and what as a relative pronoun.",
    de: "Verkürzte Relativsätze, Präposition + which, of whom/which und what als Relativpronomen meistern."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />,
  },
  content: {
    en: `
## Advanced Relative Clauses 🔗✨

At C1 level, you need to go beyond basic who/which/that and master **formal, reduced, and complex** relative clause patterns essential in academic, professional, and literary English.

### 1. Preposition + Which / Whom 📜

In formal English, prepositions come **before** the relative pronoun instead of at the end:

| Informal | Formal |
|---|---|
| The company **which** she works **for**... | The company **for which** she works... |
| The person **who** I spoke **to**... | The person **to whom** I spoke... |
| The topic **which** we argued **about**... | The topic **about which** we argued... |

- "The principle **on which** the theory is based has been challenged."
- "The colleagues **with whom** she collaborated were from different departments."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Key Rule:</h3>
  <p>After a preposition, always use <strong>"which"</strong> (for things) or <strong>"whom"</strong> (for people). Never use "that" or "who" after a preposition.</p>
  <p>❌ "The person to <strong>who</strong> I spoke..."</p>
  <p>✅ "The person to <strong>whom</strong> I spoke..."</p>
</div>

### 2. Of Which / Of Whom (Partitive Relatives) 📊

Use **"of which"** and **"of whom"** when referring to **part of a group** or **a feature of something**:

**With quantifiers:**
- "The students, **many of whom** were international, adapted quickly."
- "She wrote ten books, **several of which** became bestsellers."
- "The paintings, **none of which** had been exhibited before, caused a sensation."

**Describing a feature:**
- "The project, **the scope of which** was enormous, took five years to complete."
- "The treaty, **the terms of which** were widely debated, was finally ratified."

### 3. Reduced Relative Clauses ✂️

Reduce relative clauses by **removing the relative pronoun and auxiliary verb**:

| Full Relative Clause | Reduced |
|---|---|
| The man **who is standing** there... | The man **standing** there... |
| The letter **which was written** in French... | The letter **written** in French... |
| The students **who were selected**... | The students **selected**... |
| Anyone **who wishes** to apply... | Anyone **wishing** to apply... |

**Active (present participle):** Use -ing when the subject performs the action.
**Passive (past participle):** Use -ed/-en when the subject receives the action.

<GamePlaceholder id="sentenceBuilder" />

### 4. "What" as a Nominal Relative Pronoun 💎

**"What"** means **"the thing(s) that"** and introduces a noun clause:

- "**What** surprised me most was her calm reaction."
- "I don't understand **what** you're trying to say."
- "**What** matters is not the destination but the journey."

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ "What" vs "Which" vs "That":</h3>
  <p><strong>"What"</strong> — has no antecedent; it IS the antecedent + pronoun combined.</p>
  <p>❌ "The thing what surprised me..." (don't use both!)</p>
  <p>✅ "What surprised me..." OR "The thing that surprised me..."</p>
</div>

### 5. Common Mistakes ❌

**Mistake 1:** Using "who" after a preposition.
- ❌ "The person to **who** I wrote..."
- ✅ "The person to **whom** I wrote..."

**Mistake 2:** Missing a relative pronoun in non-defining clauses.
- ❌ "The report, was submitted late, contained errors."
- ✅ "The report, **which** was submitted late, contained errors."

**Mistake 3:** Confusing "what" and "that" as relatives.
- ❌ "**That** really concerns me is the lack of funding."
- ✅ "**What** really concerns me is the lack of funding."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Preposition + which/whom:</strong> Formal style — "for which", "to whom"</li>
    <li><strong>Of which/whom:</strong> Partitive — "several of whom", "the scope of which"</li>
    <li><strong>Reduced clauses:</strong> Remove pronoun + be — "standing", "written"</li>
    <li><strong>"What" as relative:</strong> = "The thing(s) that" — no antecedent needed</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Fortgeschrittene Relativsätze 🔗✨

Auf C1-Niveau muss man über die grundlegenden who/which/that hinausgehen und **formelle, verkürzte und komplexe** Relativsatzmuster beherrschen, die in akademischem, professionellem und literarischem Englisch unverzichtbar sind.

### 1. Präposition + Which / Whom 📜

Im formellen Englisch steht die Präposition **vor** dem Relativpronomen statt am Ende:

| Informell | Formell |
|---|---|
| The company **which** she works **for**... | The company **for which** she works... |
| The person **who** I spoke **to**... | The person **to whom** I spoke... |

- "The principle **on which** the theory is based has been challenged."
- "The colleagues **with whom** she collaborated were from different departments."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Wichtige Regel:</h3>
  <p>Nach einer Präposition immer <strong>"which"</strong> (für Dinge) oder <strong>"whom"</strong> (für Personen) verwenden.</p>
  <p>❌ "The person to <strong>who</strong> I spoke..."</p>
  <p>✅ "The person to <strong>whom</strong> I spoke..."</p>
</div>

### 2. Of Which / Of Whom (Partitive Relativsätze) 📊

Verwende **"of which"** und **"of whom"**, wenn du dich auf **einen Teil einer Gruppe** oder **ein Merkmal** beziehst:

**Mit Mengenangaben:**
- "The students, **many of whom** were international, adapted quickly." (von denen viele international waren)
- "She wrote ten books, **several of which** became bestsellers." (von denen mehrere Bestseller wurden)

**Ein Merkmal beschreiben:**
- "The project, **the scope of which** was enormous, took five years." (dessen Umfang enorm war)
- "The treaty, **the terms of which** were widely debated, was finally ratified." (dessen Bedingungen breit diskutiert wurden)

### 3. Verkürzte Relativsätze ✂️

Verkürze Relativsätze, indem du **das Relativpronomen und das Hilfsverb entfernst**:

| Voller Relativsatz | Verkürzt |
|---|---|
| The man **who is standing** there... | The man **standing** there... |
| The letter **which was written** in French... | The letter **written** in French... |
| Anyone **who wishes** to apply... | Anyone **wishing** to apply... |

**Aktiv (Partizip Präsens):** Verwende -ing, wenn das Subjekt die Handlung ausführt.
**Passiv (Partizip Perfekt):** Verwende -ed/-en, wenn das Subjekt die Handlung erhält.

<GamePlaceholder id="sentenceBuilder" />

### 4. "What" als nominales Relativpronomen 💎

**"What"** bedeutet **"das, was"** und leitet einen Substantivsatz ein:

- "**What** surprised me most was her calm reaction." (Was mich am meisten überraschte)
- "I don't understand **what** you're trying to say." (was du sagen willst)
- "**What** matters is not the destination but the journey." (Was zählt)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ "What" vs "Which" vs "That":</h3>
  <p><strong>"What"</strong> — hat kein Bezugswort; es IST Bezugswort + Pronomen in einem.</p>
  <p>❌ "The thing what surprised me..." (nicht beides verwenden!)</p>
  <p>✅ "What surprised me..." ODER "The thing that surprised me..."</p>
</div>

### 5. Häufige Fehler ❌

**Fehler 1:** "Who" nach einer Präposition.
- ❌ "The person to **who** I wrote..."
- ✅ "The person to **whom** I wrote..."

**Fehler 2:** Fehlendes Relativpronomen in nicht-definierenden Relativsätzen.
- ❌ "The report, was submitted late, contained errors."
- ✅ "The report, **which** was submitted late, contained errors."

**Fehler 3:** "What" und "that" verwechseln.
- ❌ "**That** really concerns me is the lack of funding."
- ✅ "**What** really concerns me is the lack of funding."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Präposition + which/whom:</strong> Formeller Stil — "for which", "to whom"</li>
    <li><strong>Of which/whom:</strong> Partitiv — "several of whom", "the scope of which"</li>
    <li><strong>Verkürzte Relativsätze:</strong> Pronomen + be entfernen — "standing", "written"</li>
    <li><strong>"What" als Relativpronomen:</strong> = "Das, was" — kein Bezugswort nötig</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Advanced Relative Clauses',
      description: 'Practice using formal and reduced relative clause patterns.',
      checklist: [
        { text: 'Rewrite 5 sentences using "preposition + which/whom"', checked: false },
        { text: 'Write 3 sentences using "of whom" or "of which" with quantifiers', checked: false },
        { text: 'Reduce 4 full relative clauses to participle phrases', checked: false }
      ]
    },
    de: {
      title: 'Fortgeschrittene Relativsätze',
      description: 'Übe die Verwendung von formellen und verkürzten Relativsatzmustern.',
      checklist: [
        { text: 'Schreibe 5 Sätze mit "Präposition + which/whom" um', checked: false },
        { text: 'Schreibe 3 Sätze mit "of whom" oder "of which" mit Mengenangaben', checked: false },
        { text: 'Verkürze 4 volle Relativsätze zu Partizipialphrasen', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
