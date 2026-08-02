import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "___ completed the analysis, the team moved on to the next phase.", de: "Nachdem sie die Analyse abgeschlossen hatten, ging das Team zur nächsten Phase über." },
    words: ["Having", "Have", "Being", "Had"],
    correct: "Having",
    explanation: { en: "'Having completed' is a perfect participle clause showing that the first action was finished before the second began.", de: "'Having completed' ist ein perfektes Partizip, das zeigt, dass die erste Handlung vor der zweiten abgeschlossen war." }
  },
  {
    prompt: { en: "The weather ___ fine, we decided to have the meeting outside.", de: "Da das Wetter schön war, beschlossen wir, das Meeting draußen abzuhalten." },
    words: ["being", "was", "is", "been"],
    correct: "being",
    explanation: { en: "Absolute participle clause with its own subject ('the weather'). 'The weather being fine' = 'Because the weather was fine'.", de: "Absoluter Partizipialsatz mit eigenem Subjekt ('the weather'). 'The weather being fine' = 'Because the weather was fine'." }
  },
  {
    prompt: { en: "___ from a wealthy family, she had never experienced financial hardship.", de: "Da sie aus einer wohlhabenden Familie stammte, hatte sie nie finanzielle Not erlebt." },
    words: ["Coming", "Came", "Come", "Having come"],
    correct: "Coming",
    explanation: { en: "'Coming from...' is a present participle clause giving background reason. It replaces 'Because/Since she came from...'", de: "'Coming from...' ist ein Partizipialsatz im Präsens, der einen Hintergrundgrund angibt." }
  },
  {
    prompt: { en: "___ been warned several times, he continued to ignore the regulations.", de: "Obwohl er mehrfach gewarnt worden war, ignorierte er weiterhin die Vorschriften." },
    words: ["Having", "Being", "Has", "Was"],
    correct: "Having",
    explanation: { en: "'Having been warned' is a perfect passive participle: 'Although he had been warned several times...'", de: "'Having been warned' ist ein perfektes passives Partizip: 'Although he had been warned several times...'" }
  },
  {
    prompt: { en: "All things ___, I think we made the right decision.", de: "Alles in Betracht gezogen, denke ich, dass wir die richtige Entscheidung getroffen haben." },
    words: ["considered", "considering", "consider", "considers"],
    correct: "considered",
    explanation: { en: "'All things considered' is an absolute participial phrase — the subject ('all things') differs from the main clause subject.", de: "'All things considered' ist eine absolute Partizipialphrase — das Subjekt ('all things') unterscheidet sich vom Hauptsatzsubjekt." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "Driving to work, the accident happened on the highway.",
    mistakeIndex: 0,
    correction: "While she was driving",
    explanation: { en: "Dangling participle! 'Driving' must refer to the main clause subject. 'The accident' wasn't driving.", de: "Hängendes Partizip! 'Driving' muss sich auf das Hauptsatzsubjekt beziehen. 'The accident' fuhr nicht." }
  },
  {
    sentence: "Being a sunny day, we went to the beach.",
    mistakeIndex: 0,
    correction: "It being",
    explanation: { en: "The subject of 'being' is 'it' (the day), not 'we'. Use absolute construction: 'It being a sunny day...'", de: "Das Subjekt von 'being' ist 'it' (der Tag), nicht 'we'. Verwende absolute Konstruktion: 'It being a sunny day...'" }
  },
  {
    sentence: "Finished the project, the team celebrated with a dinner.",
    mistakeIndex: 0,
    correction: "Having finished",
    explanation: { en: "A perfect participle is needed for sequence: 'Having finished the project' = 'After they had finished the project'.", de: "Ein perfektes Partizip ist nötig für die Abfolge: 'Having finished the project' = 'After they had finished the project'." }
  },
  {
    sentence: "Walking through the park, a beautiful fountain was seen by us.",
    mistakeIndex: 0,
    correction: "Walking through the park, we",
    explanation: { en: "Dangling participle! 'Walking' should match the subject. 'A fountain' cannot walk. Fix: '...we saw a beautiful fountain.'", de: "Hängendes Partizip! 'Walking' sollte zum Subjekt passen. 'A fountain' kann nicht gehen." }
  }
];

const grammarRacerData = [
  {
    prompt: "___ knowing the answer, she remained silent during the discussion.",
    options: ["Not", "Don't", "Didn't"],
    correct: "Not",
    explanation: "Negative participle clauses use 'not' before the participle: 'Not knowing the answer...'"
  },
  {
    prompt: "The task ___, they moved on to the next assignment.",
    options: ["completed", "completing", "complete"],
    correct: "completed",
    explanation: "Absolute clause: 'The task completed' = 'After the task was/had been completed'."
  },
  {
    prompt: "___ lived abroad for ten years, she spoke three languages fluently.",
    options: ["Having", "Has", "Being"],
    correct: "Having",
    explanation: "'Having lived abroad' shows a completed experience before the main clause action."
  },
  {
    prompt: "___ written in haste, the letter contained several errors.",
    options: ["Having been", "Being", "Has been"],
    correct: "Having been",
    explanation: "'Having been written' is a perfect passive participle: 'Because it had been written in haste...'"
  }
];

export const complexParticipleClauses = {
  id: 'c1_g5',
  title: {
    en: 'Complex Participle Clauses',
    de: 'Komplexe Partizipialsätze'
  },
  description: {
    en: "Master participle clauses with their own subjects, dangling participles, and linking participles.",
    de: "Partizipialsätze mit eigenem Subjekt, hängende Partizipien und verbindende Partizipien meistern."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />,
  },
  content: {
    en: `
## Complex Participle Clauses 📝🔗

Participle clauses are a hallmark of **sophisticated, formal English**. At C1 level, you need to master **absolute constructions**, **perfect participles**, and how to avoid **dangling participles**.

### 1. Review: Basic Participle Clauses 📋

Participle clauses replace adverbial clauses (reason, time, condition):

| Full Clause | Participle Clause |
|---|---|
| **Because** she felt tired, she left early. | **Feeling** tired, she left early. |
| **While** he was walking home, he found a wallet. | **Walking** home, he found a wallet. |
| **After** they had finished dinner, they went out. | **Having finished** dinner, they went out. |

**Rule:** The subject of the participle clause must match the subject of the main clause.

### 2. Perfect Participle Clauses ⏰

Use **"having + past participle"** when one action clearly happened **before** another:

- "**Having studied** all night, she felt confident about the exam." (= After she had studied...)
- "**Having lived** in Japan for five years, he spoke fluent Japanese."
- "**Having been rejected** twice, she was reluctant to apply again." (passive)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 When to use "Having + pp":</h3>
  <p>Use it when the time difference between the two actions is <strong>important for understanding</strong>. If both actions happened around the same time, a simple -ing clause is fine.</p>
</div>

### 3. Absolute Participle Clauses (With Own Subject) 🎭

An **absolute participle clause** has its own subject, different from the main clause:

- "**The meeting over**, everyone headed for the exit." (= Because the meeting was over)
- "**The weather being fine**, we decided to eat outdoors." (= Because the weather was fine)
- "**All things considered**, the project was a success." (= When all things are considered)
- "**His homework finished**, the boy went out to play." (= After his homework was finished)

These are common in **literary and academic writing**.

<GamePlaceholder id="sentenceBuilder" />

### 4. Dangling Participles — The Big Trap! ⚠️

A **dangling participle** occurs when the participle clause doesn't logically refer to the main clause subject:

- ❌ "**Walking** through the park, **the fountain** caught my eye." (The fountain wasn't walking!)
- ✅ "**Walking** through the park, **I** noticed a beautiful fountain."

- ❌ "**Having finished** the essay, **the printer** was turned on." (The printer didn't finish!)
- ✅ "**Having finished** the essay, **she** turned on the printer."

<div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🚫 How to spot dangling participles:</h3>
  <p>Ask: <strong>"Who is doing the action in the -ing clause?"</strong></p>
  <p>If the answer doesn't match the main clause subject, it's dangling!</p>
</div>

### 5. Linking Participles (Adding Information) 🔗

Participles can link sentences, showing **result, addition, or consequence**:

- "The company invested heavily in R&D, **resulting** in several breakthroughs."
- "She resigned from her position, **citing** personal reasons."
- "The river burst its banks, **flooding** the surrounding area."
- "He won the competition, **thus becoming** the youngest champion."

### 6. Common Mistakes ❌

**Mistake 1:** Dangling participle — subject mismatch.
- ❌ "Arriving late, the door was already locked."
- ✅ "Arriving late, **we** found the door already locked."

**Mistake 2:** Missing "having" for sequence.
- ❌ "Finishing the course, she applied for the job." (unclear sequence)
- ✅ "**Having finished** the course, she applied for the job."

**Mistake 3:** Wrong form after "having."
- ❌ "Having **went** to the store..."
- ✅ "Having **gone** to the store..."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Perfect participle:</strong> "Having done" — for clear sequence of events</li>
    <li><strong>Absolute clause:</strong> Own subject — "The weather being fine..."</li>
    <li><strong>Dangling participles:</strong> ALWAYS match the -ing subject to the main clause subject</li>
    <li><strong>Linking participles:</strong> Show result/addition — "...resulting in..."</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Komplexe Partizipialsätze 📝🔗

Partizipialsätze sind ein Kennzeichen von **anspruchsvollem, formellem Englisch**. Auf C1-Niveau muss man **absolute Konstruktionen**, **perfekte Partizipien** beherrschen und wissen, wie man **hängende Partizipien** vermeidet.

### 1. Wiederholung: Grundlegende Partizipialsätze 📋

Partizipialsätze ersetzen Adverbialsätze (Grund, Zeit, Bedingung):

| Vollständiger Satz | Partizipialsatz |
|---|---|
| **Because** she felt tired, she left early. | **Feeling** tired, she left early. |
| **While** he was walking home, he found a wallet. | **Walking** home, he found a wallet. |
| **After** they had finished dinner, they went out. | **Having finished** dinner, they went out. |

**Regel:** Das Subjekt des Partizipialsatzes muss mit dem Subjekt des Hauptsatzes übereinstimmen.

### 2. Perfekte Partizipialsätze ⏰

Verwende **"having + Partizip Perfekt"**, wenn eine Handlung klar **vor** einer anderen stattfand:

- "**Having studied** all night, she felt confident about the exam." (= Nachdem sie die ganze Nacht gelernt hatte...)
- "**Having lived** in Japan for five years, he spoke fluent Japanese." (= Da er fünf Jahre in Japan gelebt hatte...)
- "**Having been rejected** twice, she was reluctant to apply again." (= Passiv)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Wann "Having + pp" verwenden:</h3>
  <p>Verwende es, wenn der Zeitunterschied zwischen den beiden Handlungen <strong>wichtig für das Verständnis</strong> ist.</p>
</div>

### 3. Absolute Partizipialsätze (Mit eigenem Subjekt) 🎭

Ein **absoluter Partizipialsatz** hat sein eigenes Subjekt, das sich vom Hauptsatz unterscheidet:

- "**The meeting over**, everyone headed for the exit." (= Weil das Meeting vorbei war)
- "**The weather being fine**, we decided to eat outdoors." (= Weil das Wetter schön war)
- "**All things considered**, the project was a success." (= Wenn man alles berücksichtigt)
- "**His homework finished**, the boy went out to play." (= Nachdem seine Hausaufgaben fertig waren)

Diese sind häufig in **literarischer und akademischer Schrift**.

<GamePlaceholder id="sentenceBuilder" />

### 4. Hängende Partizipien — Die große Falle! ⚠️

Ein **hängendes Partizip** entsteht, wenn der Partizipialsatz sich nicht auf das Hauptsatzsubjekt bezieht:

- ❌ "**Walking** through the park, **the fountain** caught my eye." (Der Brunnen ging nicht spazieren!)
- ✅ "**Walking** through the park, **I** noticed a beautiful fountain."

- ❌ "**Having finished** the essay, **the printer** was turned on." (Der Drucker hat nicht geschrieben!)
- ✅ "**Having finished** the essay, **she** turned on the printer."

<div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🚫 Wie man hängende Partizipien erkennt:</h3>
  <p>Frage: <strong>"Wer führt die Handlung im -ing-Satz aus?"</strong></p>
  <p>Wenn die Antwort nicht mit dem Hauptsatzsubjekt übereinstimmt, hängt es!</p>
</div>

### 5. Verbindende Partizipien 🔗

Partizipien können Sätze verbinden und **Ergebnis, Ergänzung oder Konsequenz** zeigen:

- "The company invested heavily in R&D, **resulting** in several breakthroughs."
- "She resigned from her position, **citing** personal reasons."
- "The river burst its banks, **flooding** the surrounding area."
- "He won the competition, **thus becoming** the youngest champion."

### 6. Häufige Fehler ❌

**Fehler 1:** Hängendes Partizip — Subjekt stimmt nicht überein.
- ❌ "Arriving late, the door was already locked."
- ✅ "Arriving late, **we** found the door already locked."

**Fehler 2:** Fehlendes "having" für Abfolge.
- ❌ "Finishing the course, she applied for the job."
- ✅ "**Having finished** the course, she applied for the job."

**Fehler 3:** Falsche Form nach "having."
- ❌ "Having **went** to the store..."
- ✅ "Having **gone** to the store..."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Perfektes Partizip:</strong> "Having done" — für klare Handlungsabfolge</li>
    <li><strong>Absoluter Satz:</strong> Eigenes Subjekt — "The weather being fine..."</li>
    <li><strong>Hängende Partizipien:</strong> IMMER das -ing-Subjekt mit dem Hauptsatzsubjekt abgleichen</li>
    <li><strong>Verbindende Partizipien:</strong> Ergebnis zeigen — "...resulting in..."</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Complex Participle Clauses',
      description: 'Practice forming and identifying complex participle clause patterns.',
      checklist: [
        { text: 'Rewrite 5 sentences using perfect participle clauses (Having + past participle)', checked: false },
        { text: 'Write 3 absolute participle clauses with their own subjects', checked: false },
        { text: 'Identify and correct 3 dangling participles in a paragraph', checked: false }
      ]
    },
    de: {
      title: 'Komplexe Partizipialsätze',
      description: 'Übe das Bilden und Erkennen von komplexen Partizipialsatzmustern.',
      checklist: [
        { text: 'Schreibe 5 Sätze mit perfekten Partizipialsätzen um', checked: false },
        { text: 'Schreibe 3 absolute Partizipialsätze mit eigenen Subjekten', checked: false },
        { text: 'Identifiziere und korrigiere 3 hängende Partizipien', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
