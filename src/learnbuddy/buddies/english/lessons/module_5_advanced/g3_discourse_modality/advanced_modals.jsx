import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "She ___ have left already — her coat is gone.", de: "Sie muss schon gegangen sein — ihr Mantel ist weg." },
    words: ["must", "might", "could", "should"],
    correct: "must",
    explanation: { en: "'Must have + pp' expresses strong deduction about the past (near certainty): 'She must have left' = I'm almost sure she left.", de: "'Must have + pp' drückt starke Schlussfolgerung über die Vergangenheit aus (fast sicher): 'She must have left'." }
  },
  {
    prompt: { en: "He ___ have been at the party — he was working a night shift.", de: "Er kann nicht auf der Party gewesen sein — er hatte Nachtschicht." },
    words: ["can't", "mustn't", "shouldn't", "wouldn't"],
    correct: "can't",
    explanation: { en: "'Can't have + pp' expresses impossibility about the past: 'He can't have been there' = It's impossible he was there.", de: "'Can't have + pp' drückt Unmöglichkeit in der Vergangenheit aus: 'He can't have been there' = Es ist unmöglich, dass er dort war." }
  },
  {
    prompt: { en: "You ___ have told me earlier! I could have helped.", de: "Du hättest es mir früher sagen sollen! Ich hätte helfen können." },
    words: ["should", "must", "would", "could"],
    correct: "should",
    explanation: { en: "'Should have + pp' expresses criticism or regret about a past action that didn't happen.", de: "'Should have + pp' drückt Kritik oder Bedauern über eine nicht stattgefundene Handlung aus." }
  },
  {
    prompt: { en: "The letter ___ have been delivered by now — I posted it three days ago.", de: "Der Brief sollte inzwischen zugestellt worden sein — ich habe ihn vor drei Tagen abgeschickt." },
    words: ["should", "must", "could", "might"],
    correct: "should",
    explanation: { en: "'Should have + pp' here expresses expectation: 'It should have been delivered' = I expect it has been delivered by now.", de: "'Should have + pp' drückt hier Erwartung aus: 'Es sollte zugestellt worden sein'." }
  },
  {
    prompt: { en: "They ___ have taken a different route — I'm not sure.", de: "Sie könnten eine andere Route genommen haben — ich bin nicht sicher." },
    words: ["may", "must", "should", "will"],
    correct: "may",
    explanation: { en: "'May have + pp' expresses possibility about the past (50/50 chance): 'They may have taken' = It's possible they took.", de: "'May have + pp' drückt Möglichkeit in der Vergangenheit aus (50/50): 'They may have taken' = Es ist möglich, dass sie nahmen." }
  },
  {
    prompt: { en: "The accident ___ have been prevented with better safety measures.", de: "Der Unfall hätte mit besseren Sicherheitsmaßnahmen verhindert werden können." },
    words: ["could", "must", "should", "would"],
    correct: "could",
    explanation: { en: "'Could have + pp' expresses past ability/possibility that wasn't realized: the accident was preventable but wasn't prevented.", de: "'Could have + pp' drückt eine nicht realisierte Möglichkeit in der Vergangenheit aus." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "She mustn't have seen the email — she would have replied.",
    mistakeIndex: 1,
    correction: "can't",
    explanation: { en: "For impossibility about the past, use 'can't have', not 'mustn't have'. 'Mustn't' is for prohibition, not deduction.", de: "Für Unmöglichkeit in der Vergangenheit verwende 'can't have', nicht 'mustn't have'. 'Mustn't' ist für Verbote." }
  },
  {
    sentence: "He can have forgotten about the meeting — it was very important.",
    mistakeIndex: 1,
    correction: "may",
    explanation: { en: "For past possibility, use 'may/might/could have', not 'can have'. 'Can have' is not used for past deductions.", de: "Für vergangene Möglichkeit verwende 'may/might/could have', nicht 'can have'." }
  },
  {
    sentence: "You should have not told her the secret.",
    mistakeIndex: 2,
    correction: "shouldn't have",
    explanation: { en: "The negative comes before 'have': 'You shouldn't have told her...' not 'should have not told'.", de: "Die Verneinung kommt vor 'have': 'You shouldn't have told her...' nicht 'should have not told'." }
  },
  {
    sentence: "They must have arrive before us — the lights were already on.",
    mistakeIndex: 3,
    correction: "arrived",
    explanation: { en: "After 'must have', use the past participle: 'must have arrived', not 'must have arrive'.", de: "Nach 'must have' steht das Partizip Perfekt: 'must have arrived', nicht 'must have arrive'." }
  }
];

const grammarRacerData = [
  {
    prompt: "The streets are wet. It ___ have rained last night.",
    options: ["must", "should", "would"],
    correct: "must",
    explanation: "'Must have rained' — strong deduction based on evidence (wet streets)."
  },
  {
    prompt: "She ___ have taken the wrong bus — she ended up in the wrong town.",
    options: ["might", "must", "should"],
    correct: "might",
    explanation: "'Might have taken' — uncertain possibility about the past."
  },
  {
    prompt: "You ___ have warned us about the delay. We wasted two hours waiting!",
    options: ["should", "must", "would"],
    correct: "should",
    explanation: "'Should have warned' — criticism about something that wasn't done."
  },
  {
    prompt: "He ___ have been the thief — he was abroad at the time.",
    options: ["can't", "mustn't", "shouldn't"],
    correct: "can't",
    explanation: "'Can't have been' — logical impossibility based on evidence."
  }
];

export const advancedModals = {
  id: 'c1_g8',
  title: {
    en: 'Advanced Modal Meanings',
    de: 'Fortgeschrittene Modalbedeutungen'
  },
  description: {
    en: "Master epistemic vs deontic modality, degrees of certainty, and modal perfect nuances.",
    de: "Epistemische vs. deontische Modalität, Gewissheitsgrade und modale Perfekt-Nuancen meistern."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />,
  },
  content: {
    en: `
## Advanced Modal Meanings 🔮📊

At C1 level, you need to understand that modals have **two fundamentally different types of meaning**: **epistemic** (knowledge/belief) and **deontic** (obligation/permission). This distinction is crucial for precise, nuanced English.

### 1. Epistemic vs Deontic Modality 🧠

| Modal | Epistemic (Belief/Deduction) | Deontic (Obligation/Permission) |
|---|---|---|
| **must** | "She **must** be tired." (= I deduce she is tired) | "You **must** wear a seatbelt." (= It's required) |
| **can't** | "He **can't** be serious." (= It's impossible) | "You **can't** park here." (= Not allowed) |
| **should** | "They **should** be here by now." (= I expect) | "You **should** apologize." (= It's advisable) |
| **may** | "It **may** rain later." (= It's possible) | "You **may** leave now." (= You have permission) |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 How to tell the difference:</h3>
  <p><strong>Epistemic:</strong> The speaker expresses what they <strong>believe or deduce</strong> about a situation.</p>
  <p><strong>Deontic:</strong> The speaker talks about <strong>rules, obligations, or permissions</strong>.</p>
  <p>Context determines which meaning is intended!</p>
</div>

### 2. Degrees of Certainty (Epistemic Scale) 📊

From most certain to least certain:

| Certainty Level | Modal Expression | Example |
|---|---|---|
| 🔴 **Near certain (positive)** | must | "She **must** be at work." (95%+) |
| 🔴 **Near certain (negative)** | can't / couldn't | "He **can't** be the one." (95%+) |
| 🟡 **Probable** | should / ought to | "They **should** arrive by 6." (75%) |
| 🟢 **Possible** | may / could | "It **may** be true." (50%) |
| 🔵 **Slight possibility** | might / could | "She **might** change her mind." (30%) |

### 3. Modal Perfect: Deductions About the Past ⏰

**Structure:** Modal + have + past participle

| Pattern | Meaning | Example |
|---|---|---|
| **must have + pp** | Near-certain past deduction | "He **must have forgotten**." (I'm almost sure) |
| **can't have + pp** | Impossible past deduction | "She **can't have known**." (Impossible!) |
| **may/might have + pp** | Possible past action | "They **may have left** early." (Perhaps) |
| **could have + pp** | Unrealized past possibility | "We **could have won**." (But we didn't) |
| **should have + pp** | Criticism / unfulfilled expectation | "You **should have called**." (But you didn't) |
| **needn't have + pp** | Unnecessary completed action | "You **needn't have worried**." (But you did) |

<GamePlaceholder id="sentenceBuilder" />

### 4. Subtle Nuances 🎭

**"Should have" — Two meanings:**
1. **Criticism/regret:** "You **should have** studied harder." (= But you didn't → I'm criticizing)
2. **Expectation:** "The package **should have** arrived by now." (= I expect it has)

**"Could have" — Three meanings:**
1. **Unrealized ability:** "I **could have** helped." (= I was able to, but didn't)
2. **Past possibility:** "She **could have** taken the bus." (= Maybe she took it)
3. **Criticism:** "You **could have** at least tried!" (= You didn't even try)

**"Needn't have" vs "Didn't need to":**
- "You **needn't have** bought flowers." (= You bought them, but it wasn't necessary)
- "You **didn't need to** buy flowers." (= It wasn't necessary — unclear if you did or not)

### 5. Common Mistakes ❌

**Mistake 1:** Using "mustn't have" for past impossibility.
- ❌ "He **mustn't have** seen us." (mustn't = prohibition, not deduction!)
- ✅ "He **can't have** seen us."

**Mistake 2:** Using "can have" for past possibility.
- ❌ "She **can have** forgotten."
- ✅ "She **may/might/could have** forgotten."

**Mistake 3:** Wrong word order in negatives.
- ❌ "You should have not gone."
- ✅ "You **shouldn't have** gone."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Epistemic</strong> = belief/deduction; <strong>Deontic</strong> = obligation/permission</li>
    <li>Certainty scale: must → should → may → might/could</li>
    <li>Modal + have + pp = deductions/comments about the <strong>past</strong></li>
    <li>Watch out: "mustn't have" ≠ past impossibility (use "can't have")</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Fortgeschrittene Modalbedeutungen 🔮📊

Auf C1-Niveau muss man verstehen, dass Modalverben **zwei grundlegend verschiedene Bedeutungstypen** haben: **epistemisch** (Wissen/Glaube) und **deontisch** (Verpflichtung/Erlaubnis). Diese Unterscheidung ist entscheidend für präzises Englisch.

### 1. Epistemische vs. Deontische Modalität 🧠

| Modal | Epistemisch (Glaube/Schlussfolgerung) | Deontisch (Pflicht/Erlaubnis) |
|---|---|---|
| **must** | "She **must** be tired." (= Ich folgere, sie ist müde) | "You **must** wear a seatbelt." (= Es ist vorgeschrieben) |
| **can't** | "He **can't** be serious." (= Unmöglich) | "You **can't** park here." (= Nicht erlaubt) |
| **should** | "They **should** be here by now." (= Ich erwarte) | "You **should** apologize." (= Es ist ratsam) |
| **may** | "It **may** rain later." (= Es ist möglich) | "You **may** leave now." (= Du hast Erlaubnis) |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Wie man den Unterschied erkennt:</h3>
  <p><strong>Epistemisch:</strong> Der Sprecher drückt aus, was er <strong>glaubt oder folgert</strong>.</p>
  <p><strong>Deontisch:</strong> Der Sprecher spricht über <strong>Regeln, Pflichten oder Erlaubnisse</strong>.</p>
  <p>Der Kontext bestimmt die Bedeutung!</p>
</div>

### 2. Gewissheitsgrade (Epistemische Skala) 📊

Von am sichersten bis am unsichersten:

| Gewissheit | Modaler Ausdruck | Beispiel |
|---|---|---|
| 🔴 **Fast sicher (positiv)** | must | "She **must** be at work." (95%+) |
| 🔴 **Fast sicher (negativ)** | can't / couldn't | "He **can't** be the one." (95%+) |
| 🟡 **Wahrscheinlich** | should / ought to | "They **should** arrive by 6." (75%) |
| 🟢 **Möglich** | may / could | "It **may** be true." (50%) |
| 🔵 **Geringe Möglichkeit** | might / could | "She **might** change her mind." (30%) |

### 3. Modal Perfect: Schlussfolgerungen über die Vergangenheit ⏰

**Struktur:** Modal + have + Partizip Perfekt

| Muster | Bedeutung | Beispiel |
|---|---|---|
| **must have + pp** | Fast sichere Vergangenheitsschlussfolgerung | "He **must have forgotten**." (Ich bin fast sicher) |
| **can't have + pp** | Unmögliche Vergangenheitsschlussfolgerung | "She **can't have known**." (Unmöglich!) |
| **may/might have + pp** | Mögliche vergangene Handlung | "They **may have left** early." (Vielleicht) |
| **could have + pp** | Nicht realisierte Möglichkeit | "We **could have won**." (Aber wir haben nicht) |
| **should have + pp** | Kritik / unerfüllte Erwartung | "You **should have called**." (Aber du hast nicht) |
| **needn't have + pp** | Unnötig durchgeführte Handlung | "You **needn't have worried**." (Aber du hast) |

<GamePlaceholder id="sentenceBuilder" />

### 4. Subtile Nuancen 🎭

**"Should have" — Zwei Bedeutungen:**
1. **Kritik/Bedauern:** "You **should have** studied harder." (= Aber du hast nicht → Kritik)
2. **Erwartung:** "The package **should have** arrived by now." (= Ich erwarte, dass es angekommen ist)

**"Could have" — Drei Bedeutungen:**
1. **Nicht genutzte Fähigkeit:** "I **could have** helped." (= Ich hätte helfen können)
2. **Vergangene Möglichkeit:** "She **could have** taken the bus." (= Vielleicht hat sie den Bus genommen)
3. **Kritik:** "You **could have** at least tried!" (= Du hast es nicht einmal versucht)

**"Needn't have" vs "Didn't need to":**
- "You **needn't have** bought flowers." (= Du hast sie gekauft, aber es war unnötig)
- "You **didn't need to** buy flowers." (= Es war nicht nötig — unklar, ob du es getan hast)

### 5. Häufige Fehler ❌

**Fehler 1:** "Mustn't have" für vergangene Unmöglichkeit verwenden.
- ❌ "He **mustn't have** seen us." (mustn't = Verbot, nicht Schlussfolgerung!)
- ✅ "He **can't have** seen us."

**Fehler 2:** "Can have" für vergangene Möglichkeit verwenden.
- ❌ "She **can have** forgotten."
- ✅ "She **may/might/could have** forgotten."

**Fehler 3:** Falsche Wortstellung bei Verneinungen.
- ❌ "You should have not gone."
- ✅ "You **shouldn't have** gone."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Epistemisch</strong> = Glaube/Schlussfolgerung; <strong>Deontisch</strong> = Pflicht/Erlaubnis</li>
    <li>Gewissheitsskala: must → should → may → might/could</li>
    <li>Modal + have + pp = Schlussfolgerungen über die <strong>Vergangenheit</strong></li>
    <li>Achtung: "mustn't have" ≠ vergangene Unmöglichkeit (verwende "can't have")</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Advanced Modal Meanings',
      description: 'Practice distinguishing epistemic and deontic modal uses.',
      checklist: [
        { text: 'Write 5 pairs of sentences showing epistemic vs deontic uses of must, can, should, may', checked: false },
        { text: 'Create a story using at least 4 different modal perfect forms', checked: false },
        { text: 'Rank 5 situations by certainty using the appropriate modal', checked: false }
      ]
    },
    de: {
      title: 'Fortgeschrittene Modalbedeutungen',
      description: 'Übe die Unterscheidung epistemischer und deontischer Modalverwendungen.',
      checklist: [
        { text: 'Schreibe 5 Satzpaare mit epistemischer vs. deontischer Verwendung von must, can, should, may', checked: false },
        { text: 'Erstelle eine Geschichte mit mindestens 4 verschiedenen Modal-Perfekt-Formen', checked: false },
        { text: 'Ordne 5 Situationen nach Gewissheit mit dem passenden Modalverb', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
