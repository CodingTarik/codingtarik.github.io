import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "If I ___ known about the party, I would have come.", de: "Wenn ich von der Party gewusst hätte, wäre ich gekommen." },
    words: ["had", "have", "would have", "has"],
    correct: "had",
    explanation: { en: "Type 3: If + past perfect, ... would have + past participle.", de: "Typ 3: If + Past Perfect, ... would have + Partizip Perfekt." }
  },
  {
    prompt: { en: "If she had studied harder, she ___ passed the exam.", de: "Wenn sie härter gelernt hätte, hätte sie die Prüfung bestanden." },
    words: ["would have", "would", "will have", "had"],
    correct: "would have",
    explanation: { en: "Type 3: the result clause uses 'would have + past participle'.", de: "Typ 3: der Ergebnissatz benutzt 'would have + Partizip Perfekt'." }
  },
  {
    prompt: { en: "If we hadn't missed the bus, we ___ arrived on time.", de: "Wenn wir den Bus nicht verpasst hätten, wären wir pünktlich angekommen." },
    words: ["would have", "would", "had", "will have"],
    correct: "would have",
    explanation: { en: "Type 3: imaginary past situation and its result.", de: "Typ 3: imaginäre vergangene Situation und ihr Ergebnis." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "If I would have known, I would have helped.",
    mistakeIndex: 2,
    correction: "had",
    explanation: { en: "Don't use 'would have' in the if-clause. Use 'had': 'If I had known'.", de: "Benutze kein 'would have' im if-Satz. Benutze 'had': 'If I had known'." }
  },
  {
    sentence: "If he had taken the job, he would be rich now.",
    mistakeIndex: 7,
    correction: "would have been",
    explanation: { en: "For pure Type 3 (past result), use 'would have been'. Note: 'would be rich now' is a mixed conditional (also valid in context).", de: "Für reinen Typ 3 (vergangenes Ergebnis) benutze 'would have been'." }
  },
  {
    sentence: "If they had left earlier, they didn't miss the flight.",
    mistakeIndex: 6,
    correction: "wouldn't have missed",
    explanation: { en: "Type 3 result clause needs 'would(n't) have + past participle'.", de: "Der Ergebnissatz von Typ 3 braucht 'would(n't) have + Partizip Perfekt'." }
  }
];

const grammarRacerData = [
  {
    prompt: "If I had woken up earlier, I ___ missed the train.",
    options: ["wouldn't have", "won't have", "didn't"],
    correct: "wouldn't have",
    explanation: "Type 3: wouldn't have + past participle."
  },
  {
    prompt: "If she ___ called me, I would have picked her up.",
    options: ["had", "has", "would have"],
    correct: "had",
    explanation: "Type 3: if + past perfect."
  },
  {
    prompt: "We ___ won if we had practised more.",
    options: ["would have", "will have", "had"],
    correct: "would have",
    explanation: "Type 3 result clause."
  }
];

export const conditionals3 = {
  id: 'b1_g40',
  title: {
    en: 'Conditional Type 3 – If I had known',
    de: 'Konditionalsatz Typ 3 – If I had known'
  },
  description: {
    en: "Third conditional for imaginary past: 'If I had known, I would have helped.'",
    de: "Dritter Konditional für imaginäre Vergangenheit: 'If I had known, I would have helped.'"
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Conditional Type 3 – If I had known 🔙💭

The **Third Conditional** talks about **imaginary past situations** – things that didn't happen and their imaginary results.

### 1. Structure 📐

**If + past perfect, ... would have + past participle**

- "If I **had known** about the problem, I **would have helped**."
- "If she **had left** earlier, she **wouldn't have missed** the bus."
- "If they **hadn't invited** me, I **wouldn't have gone**."

### 2. When to use it 🎯

The situation is **impossible** because it's in the past – we can't change it:

- "If I **had studied** medicine, I **would have become** a doctor." (But I didn't study medicine).
- "If it **hadn't rained**, we **would have had** a picnic." (But it did rain).
- "If you **had told** me, I **would have understood**." (But you didn't tell me).

### 3. All Three Conditionals Compared 📊

| Type | If-clause | Main clause | Meaning |
|------|-----------|-------------|---------|
| **1** | present simple | will + verb | Real/possible future |
| **2** | past simple | would + verb | Imaginary present |
| **3** | past perfect | would have + pp | Imaginary past |

Examples:
- **Type 1:** "If it **rains**, I**'ll stay** home." (Maybe it will rain).
- **Type 2:** "If it **rained**, I**'d stay** home." (Unlikely/imaginary).
- **Type 3:** "If it **had rained**, I **would have stayed** home." (It didn't rain).

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Contractions:</h3>
  <p>"If I'd known" = If I had known</p>
  <p>"I'd have helped" = I would have helped</p>
  <p>Be careful: <strong>'d</strong> can mean 'had' or 'would'!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Common Mistakes ❌

**Mistake 1:** Using 'would have' in the if-clause.
- ❌ "If I **would have known**..."
- ✅ "If I **had known**..."

**Mistake 2:** Using simple past in the result.
- ❌ "If she had called, I **helped**."
- ✅ "If she had called, I **would have helped**."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Type 3:</strong> If + past perfect → would have + past participle.</li>
    <li>Used for <strong>imaginary past</strong> situations (things that didn't happen).</li>
    <li>NEVER use 'would have' in the if-clause.</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Konditionalsatz Typ 3 – If I had known 🔙💭

Der **Dritte Konditional** spricht über **imaginäre vergangene Situationen** – Dinge, die nicht passiert sind, und ihre imaginären Ergebnisse.

### 1. Struktur 📐

**If + Past Perfect, ... would have + Partizip Perfekt**

- "If I **had known** about the problem, I **would have helped**."
- "If she **had left** earlier, she **wouldn't have missed** the bus."
- "If they **hadn't invited** me, I **wouldn't have gone**."

### 2. Wann benutzen 🎯

Die Situation ist **unmöglich**, weil sie in der Vergangenheit liegt – wir können sie nicht ändern:

- "If I **had studied** medicine, I **would have become** a doctor." (Aber ich habe kein Medizin studiert).
- "If it **hadn't rained**, we **would have had** a picnic." (Aber es hat geregnet).
- "If you **had told** me, I **would have understood**." (Aber du hast es mir nicht gesagt).

### 3. Alle drei Konditionalsätze im Vergleich 📊

| Typ | If-Satz | Hauptsatz | Bedeutung |
|-----|---------|-----------|-----------|
| **1** | Present Simple | will + Verb | Real/möglich (Zukunft) |
| **2** | Past Simple | would + Verb | Imaginär (Gegenwart) |
| **3** | Past Perfect | would have + PP | Imaginär (Vergangenheit) |

Beispiele:
- **Typ 1:** "If it **rains**, I**'ll stay** home." (Vielleicht regnet es).
- **Typ 2:** "If it **rained**, I**'d stay** home." (Unwahrscheinlich/imaginär).
- **Typ 3:** "If it **had rained**, I **would have stayed** home." (Es hat nicht geregnet).

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Kurzformen:</h3>
  <p>"If I'd known" = If I had known</p>
  <p>"I'd have helped" = I would have helped</p>
  <p>Vorsicht: <strong>'d</strong> kann 'had' oder 'would' bedeuten!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Häufige Fehler ❌

**Fehler 1:** 'Would have' im if-Satz benutzen.
- ❌ "If I **would have known**..."
- ✅ "If I **had known**..."

**Fehler 2:** Simple Past im Ergebnis benutzen.
- ❌ "If she had called, I **helped**."
- ✅ "If she had called, I **would have helped**."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Typ 3:</strong> If + Past Perfect → would have + Partizip Perfekt.</li>
    <li>Benutzt für <strong>imaginäre Vergangenheit</strong> (Dinge, die nicht passiert sind).</li>
    <li>NIEMALS 'would have' im if-Satz benutzen.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Third Conditional',
      description: 'Practice imaginary past situations.',
      checklist: [
        { text: 'Write 3 Type 3 sentences about missed opportunities', checked: false },
        { text: 'Compare the same situation in Type 1, 2, and 3', checked: false },
        { text: 'Write a short story using at least 2 Type 3 conditionals', checked: false }
      ]
    },
    de: {
      title: 'Dritter Konditional',
      description: 'Übe imaginäre vergangene Situationen.',
      checklist: [
        { text: 'Schreibe 3 Typ-3-Sätze über verpasste Gelegenheiten', checked: false },
        { text: 'Vergleiche die gleiche Situation in Typ 1, 2 und 3', checked: false },
        { text: 'Schreibe eine kurze Geschichte mit mindestens 2 Typ-3-Konditionalsätzen', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
