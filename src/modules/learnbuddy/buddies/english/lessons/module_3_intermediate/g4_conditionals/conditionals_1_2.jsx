import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "If it ___ tomorrow, we'll stay home.", de: "Wenn es morgen regnet, bleiben wir zu Hause." },
    words: ["rains", "rained", "will rain", "would rain"],
    correct: "rains",
    explanation: { en: "Type 1: If + present simple, ... will + base verb.", de: "Typ 1: If + Present Simple, ... will + Grundform." }
  },
  {
    prompt: { en: "If I ___ a million dollars, I'd travel the world.", de: "Wenn ich eine Million Dollar hätte, würde ich die Welt bereisen." },
    words: ["had", "have", "will have", "would have"],
    correct: "had",
    explanation: { en: "Type 2: If + past simple, ... would + base verb.", de: "Typ 2: If + Past Simple, ... would + Grundform." }
  },
  {
    prompt: { en: "If you study hard, you ___ pass the exam.", de: "Wenn du fleißig lernst, wirst du die Prüfung bestehen." },
    words: ["will", "would", "could have", "might have"],
    correct: "will",
    explanation: { en: "Type 1: real/possible situation → will.", de: "Typ 1: reale/mögliche Situation → will." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "If I will see him, I'll tell him.",
    mistakeIndex: 2,
    correction: "see",
    explanation: { en: "In Type 1, don't use 'will' in the if-clause. Use present simple: 'If I see him'.", de: "In Typ 1, benutze kein 'will' im if-Satz. Benutze Present Simple: 'If I see him'." }
  },
  {
    sentence: "If I was rich, I would buy a yacht.",
    mistakeIndex: 2,
    correction: "were",
    explanation: { en: "In Type 2, use 'were' for all subjects (formal): 'If I were rich'. ('Was' is informal but common).", de: "In Typ 2, benutze 'were' für alle Subjekte (formal): 'If I were rich'." }
  },
  {
    sentence: "If she studied harder, she will pass.",
    mistakeIndex: 5,
    correction: "would pass",
    explanation: { en: "The if-clause has past simple (studied) = Type 2 → use 'would', not 'will'.", de: "Der if-Satz hat Past Simple (studied) = Typ 2 → benutze 'would', nicht 'will'." }
  }
];

const grammarRacerData = [
  {
    prompt: "If I ___ you, I'd apologize. (Type 2)",
    options: ["were", "am", "will be"],
    correct: "were",
    explanation: "Type 2: if + past simple (were for all subjects)."
  },
  {
    prompt: "If it's sunny, we ___ go to the beach.",
    options: ["will", "would", "had"],
    correct: "will",
    explanation: "Type 1: real possibility → will."
  },
  {
    prompt: "If I won the lottery, I ___ quit my job.",
    options: ["would", "will", "had"],
    correct: "would",
    explanation: "Type 2: imaginary situation → would."
  }
];

export const conditionals12 = {
  id: 'b1_g38',
  title: {
    en: 'Conditionals Type 1 & 2',
    de: 'Konditionalsätze Typ 1 & 2'
  },
  description: {
    en: "If I do (Type 1 – real) vs. If I did (Type 2 – imaginary). 'If it rains...' vs. 'If I were rich...'",
    de: "If I do (Typ 1 – real) vs. If I did (Typ 2 – imaginär). 'If it rains...' vs. 'If I were rich...'"
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Conditionals Type 1 & 2 🔀

### 1. Type 1 – Real / Possible Situations ✅

For things that **can really happen** (now or future):

**Structure:** If + **present simple**, ... **will** + base verb

- "If it **rains**, I**'ll take** an umbrella."
- "If you **don't hurry**, you**'ll miss** the bus."
- "If she **passes** the test, she**'ll be** very happy."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Key Rule:</h3>
  <p>Don't use <strong>will</strong> in the if-clause!</p>
  <ul className="list-disc list-inside">
    <li>❌ "If it <strong>will rain</strong>..."</li>
    <li>✅ "If it <strong>rains</strong>..."</li>
  </ul>
</div>

### 2. Type 2 – Imaginary / Unreal Situations 💭

For things that are **not real** or **unlikely**:

**Structure:** If + **past simple**, ... **would** + base verb

- "If I **had** more money, I **would travel** the world." (But I don't have much money).
- "If she **spoke** Chinese, she **would get** that job." (But she doesn't speak Chinese).
- "If I **were** you, I **would accept** the offer."

### 3. If I were... (not 'was') 🎩

In formal English, we use **were** (not 'was') for all subjects in Type 2:

- "If I **were** rich..." (formal/correct)
- "If he **were** here..." (formal/correct)
- "If I **was** rich..." (informal but common)

### 4. Comparison Table 📊

| | Type 1 (Real) | Type 2 (Imaginary) |
|---|---|---|
| **If-clause** | present simple | past simple |
| **Main clause** | will + base verb | would + base verb |
| **Meaning** | Possible/likely | Unreal/unlikely |
| **Example** | "If I **have** time, I**'ll help**." | "If I **had** time, I**'d help**." |

<GamePlaceholder id="sentenceBuilder" />

### 5. Common Mistakes ❌

**Mistake 1:** Using 'will' in the if-clause (Type 1).
- ❌ "If it **will rain**, I'll stay home."
- ✅ "If it **rains**, I'll stay home."

**Mistake 2:** Mixing Type 1 and Type 2.
- ❌ "If I **had** money, I **will** buy it."
- ✅ "If I **had** money, I **would** buy it." (Type 2)
- ✅ "If I **have** money, I **will** buy it." (Type 1)

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Type 1:</strong> If + present, will + verb (real/possible).</li>
    <li><strong>Type 2:</strong> If + past, would + verb (imaginary/unreal).</li>
    <li>Never use 'will' in the if-clause of Type 1.</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Real vs. Imaginary</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>Write 3 Type 1 sentences about your plans this week</li>
    <li>Write 3 Type 2 sentences about imaginary situations</li>
    <li>Complete: "If I were the president, I would..."</li>
  </ol>
</div>
`,
    de: `
## Konditionalsätze Typ 1 & 2 🔀

### 1. Typ 1 – Reale / Mögliche Situationen ✅

Für Dinge, die **wirklich passieren können** (jetzt oder Zukunft):

**Struktur:** If + **Present Simple**, ... **will** + Grundform

- "If it **rains**, I**'ll take** an umbrella."
- "If you **don't hurry**, you**'ll miss** the bus."
- "If she **passes** the test, she**'ll be** very happy."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Wichtige Regel:</h3>
  <p>Benutze kein <strong>will</strong> im if-Satz!</p>
  <ul className="list-disc list-inside">
    <li>❌ "If it <strong>will rain</strong>..."</li>
    <li>✅ "If it <strong>rains</strong>..."</li>
  </ul>
</div>

### 2. Typ 2 – Imaginäre / Irreale Situationen 💭

Für Dinge, die **nicht real** oder **unwahrscheinlich** sind:

**Struktur:** If + **Past Simple**, ... **would** + Grundform

- "If I **had** more money, I **would travel** the world." (Aber ich habe nicht viel Geld).
- "If she **spoke** Chinese, she **would get** that job." (Aber sie spricht kein Chinesisch).
- "If I **were** you, I **would accept** the offer."

### 3. If I were... (nicht 'was') 🎩

Im formellen Englisch benutzen wir **were** (nicht 'was') für alle Subjekte in Typ 2:

- "If I **were** rich..." (formal/korrekt)
- "If he **were** here..." (formal/korrekt)
- "If I **was** rich..." (informell aber üblich)

### 4. Vergleichstabelle 📊

| | Typ 1 (Real) | Typ 2 (Imaginär) |
|---|---|---|
| **If-Satz** | Present Simple | Past Simple |
| **Hauptsatz** | will + Grundform | would + Grundform |
| **Bedeutung** | Möglich/wahrscheinlich | Irreal/unwahrscheinlich |
| **Beispiel** | "If I **have** time, I**'ll help**." | "If I **had** time, I**'d help**." |

<GamePlaceholder id="sentenceBuilder" />

### 5. Häufige Fehler ❌

**Fehler 1:** 'Will' im if-Satz benutzen (Typ 1).
- ❌ "If it **will rain**, I'll stay home."
- ✅ "If it **rains**, I'll stay home."

**Fehler 2:** Typ 1 und Typ 2 mischen.
- ❌ "If I **had** money, I **will** buy it."
- ✅ "If I **had** money, I **would** buy it." (Typ 2)
- ✅ "If I **have** money, I **will** buy it." (Typ 1)

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Typ 1:</strong> If + Gegenwart, will + Verb (real/möglich).</li>
    <li><strong>Typ 2:</strong> If + Vergangenheit, would + Verb (imaginär/irreal).</li>
    <li>Benutze nie 'will' im if-Satz von Typ 1.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Real vs. Imaginär</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>Schreibe 3 Typ-1-Sätze über deine Pläne diese Woche</li>
    <li>Schreibe 3 Typ-2-Sätze über imaginäre Situationen</li>
    <li>Vervollständige: "If I were the president, I would..."</li>
  </ol>
</div>
`
  },
  task: {
    en: {
      title: 'Conditionals Type 1 & 2',
      description: 'Practice real and imaginary conditional sentences.',
      checklist: [
        { text: 'Write 3 Type 1 sentences about realistic plans', checked: false },
        { text: 'Write 3 Type 2 sentences about dreams/wishes', checked: false },
        { text: "Explain the difference between 'If I have' and 'If I had'", checked: false }
      ]
    },
    de: {
      title: 'Konditionalsätze Typ 1 & 2',
      description: 'Übe reale und imaginäre Konditionalsätze.',
      checklist: [
        { text: 'Schreibe 3 Typ-1-Sätze über realistische Pläne', checked: false },
        { text: 'Schreibe 3 Typ-2-Sätze über Träume/Wünsche', checked: false },
        { text: "Erkläre den Unterschied zwischen 'If I have' und 'If I had'", checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
