import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "___ the CEO wants is a complete restructuring of the department.", de: "Was der CEO will, ist eine komplette Umstrukturierung der Abteilung." },
    words: ["What", "It", "That", "Which"],
    correct: "What",
    explanation: { en: "Pseudo-cleft (wh-cleft): 'What the CEO wants is...' emphasizes 'a complete restructuring'. 'What' = 'The thing that'.", de: "Pseudo-Spaltsatz: 'What the CEO wants is...' betont 'a complete restructuring'. 'What' = 'Das, was'." }
  },
  {
    prompt: { en: "___ was the lack of communication that caused the project to fail.", de: "Es war der Mangel an Kommunikation, der das Projekt zum Scheitern brachte." },
    words: ["It", "What", "There", "This"],
    correct: "It",
    explanation: { en: "It-cleft: 'It was X that...' focuses attention on X. Here: 'It was the lack of communication that caused the failure'.", de: "It-Spaltsatz: 'It was X that...' lenkt die Aufmerksamkeit auf X." }
  },
  {
    prompt: { en: "___ happened was that the entire system crashed overnight.", de: "Was passiert ist, war, dass das gesamte System über Nacht abstürzte." },
    words: ["What", "It", "That", "Which"],
    correct: "What",
    explanation: { en: "Pseudo-cleft: 'What happened was that...' introduces a surprising or important result.", de: "Pseudo-Spaltsatz: 'What happened was that...' führt ein überraschendes Ergebnis ein." }
  },
  {
    prompt: { en: "A complete redesign is ___ we need to stay competitive.", de: "Ein komplettes Redesign ist das, was wir brauchen, um wettbewerbsfähig zu bleiben." },
    words: ["what", "which", "that", "it"],
    correct: "what",
    explanation: { en: "Reversed pseudo-cleft: The complement comes first, followed by 'is what...'. Emphasizes 'a complete redesign'.", de: "Umgekehrter Pseudo-Spaltsatz: Das Komplement steht zuerst, gefolgt von 'is what...'." }
  },
  {
    prompt: { en: "___ I find most frustrating is the constant delays.", de: "Was ich am frustrierendsten finde, sind die ständigen Verzögerungen." },
    words: ["What", "It", "That", "The thing"],
    correct: "What",
    explanation: { en: "Pseudo-cleft with emphasis on feeling: 'What I find most frustrating is...' highlights the speaker's attitude.", de: "Pseudo-Spaltsatz mit Betonung auf Gefühl: 'What I find most frustrating is...' hebt die Haltung hervor." }
  },
  {
    prompt: { en: "It was only after the investigation ___ the truth emerged.", de: "Erst nach der Untersuchung kam die Wahrheit ans Licht." },
    words: ["that", "which", "when", "what"],
    correct: "that",
    explanation: { en: "It-cleft with time focus: 'It was only after X that Y happened'. 'That' connects the focused element.", de: "It-Spaltsatz mit Zeitfokus: 'It was only after X that Y happened'. 'That' verbindet das fokussierte Element." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "It was her dedication which it impressed the committee most.",
    mistakeIndex: 5,
    correction: "that",
    explanation: { en: "In it-cleft sentences, use 'that' (not 'which it'): 'It was her dedication that impressed the committee.'", de: "In It-Spaltsätzen verwendet man 'that' (nicht 'which it')." }
  },
  {
    sentence: "That he really needs is a long vacation.",
    mistakeIndex: 0,
    correction: "What",
    explanation: { en: "Pseudo-cleft sentences start with 'What' (not 'That'): 'What he really needs is...'", de: "Pseudo-Spaltsätze beginnen mit 'What' (nicht 'That'): 'What he really needs is...'" }
  },
  {
    sentence: "What surprised me it was his complete lack of remorse.",
    mistakeIndex: 3,
    correction: "was",
    explanation: { en: "Remove the extra 'it': 'What surprised me was his complete lack of remorse.'", de: "Entferne das extra 'it': 'What surprised me was his complete lack of remorse.'" }
  },
  {
    sentence: "It is in Paris where she first studied architecture.",
    mistakeIndex: 4,
    correction: "that",
    explanation: { en: "In it-cleft sentences, always use 'that': 'It is in Paris that she first studied architecture.'", de: "In It-Spaltsätzen immer 'that' verwenden, nicht 'where'." }
  }
];

const grammarRacerData = [
  {
    prompt: "___ we need is more time to prepare the proposal.",
    options: ["What", "It", "That"],
    correct: "What",
    explanation: "Pseudo-cleft: 'What we need is...' = 'The thing that we need is...'"
  },
  {
    prompt: "It was the marketing team ___ proposed the new strategy.",
    options: ["that", "what", "which"],
    correct: "that",
    explanation: "It-cleft: 'It was X that Y' — 'that' connects the focused element to the clause."
  },
  {
    prompt: "The reason I called is ___ I wanted to apologize.",
    options: ["that", "what", "because"],
    correct: "that",
    explanation: "Demonstrative cleft: 'The reason... is that...' gives emphasis to the reason."
  },
  {
    prompt: "Patience is ___ you need most in this job.",
    options: ["what", "that", "which"],
    correct: "what",
    explanation: "Reversed pseudo-cleft: 'Patience is what you need' puts emphasis on 'patience'."
  },
  {
    prompt: "It was not until midnight ___ they finally reached an agreement.",
    options: ["that", "when", "which"],
    correct: "that",
    explanation: "It-cleft with 'not until': Always use 'that' in it-clefts."
  }
];

export const advancedCleftSentences = {
  id: 'c1_g6',
  title: {
    en: 'Advanced Cleft Sentences',
    de: 'Fortgeschrittene Spaltsätze'
  },
  description: {
    en: "Master pseudo-cleft, reversed cleft, all-cleft, and demonstrative cleft patterns for emphasis.",
    de: "Pseudo-Spaltsätze, umgekehrte Spaltsätze, All-Spaltsätze und demonstrative Spaltsätze meistern."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />,
  },
  content: {
    en: `
## Advanced Cleft Sentences 🔍✨

Cleft sentences **split** a simple sentence into two parts to give **special emphasis** to one element. At C1 level, master **pseudo-clefts**, **reversed clefts**, **all-clefts**, and **demonstrative clefts**.

### 1. Review: It-Cleft Sentences 📌

**Structure:** It + be + **focused element** + that/who + rest

| Simple Sentence | It-Cleft (Emphasis) |
|---|---|
| **John** broke the window. | **It was John** who/that broke the window. |
| She left **on Monday**. | **It was on Monday** that she left. |
| I need **your help**. | **It is your help** that I need. |

Use "that" for things/times/places. Use "who" for people (optional).

### 2. Pseudo-Cleft (Wh-Cleft) Sentences 💎

**Structure:** What + clause + be + **focused element**

- "**What** we need **is** more funding." (emphasis on "more funding")
- "**What** surprised everyone **was** her sudden resignation."
- "**What** I don't understand **is** why they rejected the proposal."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Why use pseudo-clefts?</h3>
  <p>They sound <strong>more natural in speech</strong> than it-clefts and are excellent for <strong>introducing topics</strong> or <strong>explaining situations</strong>.</p>
  <p>They follow the information principle: known → new (the focus comes at the end).</p>
</div>

### 3. Reversed Pseudo-Cleft ↩️

**Structure:** **Focused element** + be + what + clause

The complement comes FIRST for extra emphasis:

- "**More funding** is what we need." (strong emphasis)
- "**A complete overhaul** is what the system requires."
- "**Patience** is what you need most in this profession."

Compare:
- Pseudo-cleft: "What we need is **more funding**." (neutral emphasis)
- Reversed: "**More funding** is what we need." (stronger emphasis)

<GamePlaceholder id="sentenceBuilder" />

### 4. All-Cleft Sentences 🎯

**Structure:** All + (that) + clause + be + **focused element**

Emphasizes that something is **the only thing needed/wanted**:

- "**All** (that) I want **is** a quiet evening at home."
- "**All** you need to do **is** sign the form."
- "**All** it takes **is** a little patience."

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ "All" minimizes:</h3>
  <p>"All you need to do is sign" implies it's <strong>simple and easy</strong>.</p>
  <p>This can sound dismissive in some contexts, so use it carefully!</p>
</div>

### 5. Demonstrative Cleft Sentences 👉

**Structure:** The thing/reason/person + (that) + clause + be + **focused element**

- "**The thing** I admire most about her **is** her resilience."
- "**The reason** I called **is that** I wanted to apologize."
- "**The person** who helped me most **was** my mentor."
- "**The problem** **is that** nobody wants to take responsibility."

### 6. Common Mistakes ❌

**Mistake 1:** Using "that" instead of "what" in pseudo-clefts.
- ❌ "**That** we need is more time."
- ✅ "**What** we need is more time."

**Mistake 2:** Using "where/when" instead of "that" in it-clefts.
- ❌ "It was in Paris **where** she studied."
- ✅ "It was in Paris **that** she studied."

**Mistake 3:** Adding an extra pronoun.
- ❌ "What he said **it** shocked everyone."
- ✅ "What he said shocked everyone."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>It-cleft:</strong> "It was X that..." — strong, formal emphasis</li>
    <li><strong>Pseudo-cleft:</strong> "What... is X" — natural topic introduction</li>
    <li><strong>Reversed pseudo-cleft:</strong> "X is what..." — extra strong emphasis</li>
    <li><strong>All-cleft:</strong> "All... is X" — only thing needed</li>
    <li><strong>Demonstrative cleft:</strong> "The thing/reason... is X" — specific focus</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Fortgeschrittene Spaltsätze 🔍✨

Spaltsätze **teilen** einen einfachen Satz in zwei Teile, um einem Element **besondere Betonung** zu verleihen. Auf C1-Niveau meistere **Pseudo-Spaltsätze**, **umgekehrte Spaltsätze**, **All-Spaltsätze** und **demonstrative Spaltsätze**.

### 1. Wiederholung: It-Spaltsätze 📌

**Struktur:** It + be + **fokussiertes Element** + that/who + Rest

| Einfacher Satz | It-Spaltsatz (Betonung) |
|---|---|
| **John** broke the window. | **It was John** who/that broke the window. |
| She left **on Monday**. | **It was on Monday** that she left. |
| I need **your help**. | **It is your help** that I need. |

Verwende "that" für Dinge/Zeiten/Orte. Verwende "who" für Personen (optional).

### 2. Pseudo-Spaltsätze (Wh-Spaltsätze) 💎

**Struktur:** What + Satz + be + **fokussiertes Element**

- "**What** we need **is** more funding." (Betonung auf "more funding")
- "**What** surprised everyone **was** her sudden resignation."
- "**What** I don't understand **is** why they rejected the proposal."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Warum Pseudo-Spaltsätze?</h3>
  <p>Sie klingen <strong>natürlicher</strong> als It-Spaltsätze und eignen sich zum <strong>Einführen von Themen</strong>.</p>
  <p>Sie folgen dem Informationsprinzip: bekannt → neu (der Fokus kommt am Ende).</p>
</div>

### 3. Umgekehrter Pseudo-Spaltsatz ↩️

**Struktur:** **Fokussiertes Element** + be + what + Satz

Das Komplement kommt ZUERST für extra Betonung:

- "**More funding** is what we need." (starke Betonung)
- "**A complete overhaul** is what the system requires."
- "**Patience** is what you need most in this profession."

Vergleiche:
- Pseudo-Spaltsatz: "What we need is **more funding**." (neutrale Betonung)
- Umgekehrt: "**More funding** is what we need." (stärkere Betonung)

<GamePlaceholder id="sentenceBuilder" />

### 4. All-Spaltsätze 🎯

**Struktur:** All + (that) + Satz + be + **fokussiertes Element**

Betont, dass etwas **das Einzige ist, was nötig/gewünscht ist**:

- "**All** (that) I want **is** a quiet evening at home." (Alles, was ich will)
- "**All** you need to do **is** sign the form." (Alles, was du tun musst)
- "**All** it takes **is** a little patience." (Alles, was es braucht)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ "All" minimiert:</h3>
  <p>"All you need to do is sign" impliziert, dass es <strong>einfach</strong> ist.</p>
  <p>Kann in manchen Kontexten abwertend klingen!</p>
</div>

### 5. Demonstrative Spaltsätze 👉

**Struktur:** The thing/reason/person + (that) + Satz + be + **fokussiertes Element**

- "**The thing** I admire most about her **is** her resilience." (Was ich am meisten bewundere)
- "**The reason** I called **is that** I wanted to apologize." (Der Grund, warum ich anrief)
- "**The person** who helped me most **was** my mentor." (Die Person, die mir am meisten half)
- "**The problem** **is that** nobody wants to take responsibility." (Das Problem ist, dass...)

### 6. Häufige Fehler ❌

**Fehler 1:** "That" statt "what" in Pseudo-Spaltsätzen.
- ❌ "**That** we need is more time."
- ✅ "**What** we need is more time."

**Fehler 2:** "Where/when" statt "that" in It-Spaltsätzen.
- ❌ "It was in Paris **where** she studied."
- ✅ "It was in Paris **that** she studied."

**Fehler 3:** Zusätzliches Pronomen.
- ❌ "What he said **it** shocked everyone."
- ✅ "What he said shocked everyone."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>It-Spaltsatz:</strong> "It was X that..." — starke, formelle Betonung</li>
    <li><strong>Pseudo-Spaltsatz:</strong> "What... is X" — natürliche Themeneinführung</li>
    <li><strong>Umgekehrter Pseudo-Spaltsatz:</strong> "X is what..." — extra starke Betonung</li>
    <li><strong>All-Spaltsatz:</strong> "All... is X" — einzig Nötiges</li>
    <li><strong>Demonstrativer Spaltsatz:</strong> "The thing/reason... is X" — spezifischer Fokus</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Advanced Cleft Sentences',
      description: 'Practice creating different types of cleft sentences for emphasis.',
      checklist: [
        { text: 'Transform 5 simple sentences into it-cleft sentences', checked: false },
        { text: 'Rewrite 3 sentences as pseudo-cleft and reversed pseudo-cleft', checked: false },
        { text: 'Write a paragraph using at least 3 different cleft types', checked: false }
      ]
    },
    de: {
      title: 'Fortgeschrittene Spaltsätze',
      description: 'Übe das Erstellen verschiedener Spaltsatztypen für Betonung.',
      checklist: [
        { text: 'Wandle 5 einfache Sätze in It-Spaltsätze um', checked: false },
        { text: 'Schreibe 3 Sätze als Pseudo-Spaltsatz und umgekehrten Pseudo-Spaltsatz um', checked: false },
        { text: 'Schreibe einen Absatz mit mindestens 3 verschiedenen Spaltsatztypen', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
