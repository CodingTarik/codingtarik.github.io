import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "She's not answering her phone. She ___ be asleep.", de: "Sie geht nicht ans Telefon. Sie muss eingeschlafen sein." },
    words: ["must", "can't", "might not", "shouldn't"],
    correct: "must",
    explanation: { en: "Must = we are almost sure something is true.", de: "Must = wir sind fast sicher, dass etwas wahr ist." }
  },
  {
    prompt: { en: "He says he's 25, but he ___ be! He looks at least 40.", de: "Er sagt, er ist 25, aber das kann nicht sein! Er sieht mindestens 40 aus." },
    words: ["can't", "must", "mustn't", "shouldn't"],
    correct: "can't",
    explanation: { en: "Can't = we are almost sure something is NOT true.", de: "Can't = wir sind fast sicher, dass etwas NICHT wahr ist." }
  },
  {
    prompt: { en: "That restaurant is always full. It ___ be very good.", de: "Das Restaurant ist immer voll. Es muss sehr gut sein." },
    words: ["must", "can't", "mustn't", "wouldn't"],
    correct: "must",
    explanation: { en: "We deduce something is true based on evidence.", de: "Wir schließen aus Beweisen, dass etwas wahr ist." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "He mustn't be at home – his car is in the driveway.",
    mistakeIndex: 1,
    correction: "must",
    explanation: { en: "For positive deduction, use 'must' not 'mustn't'. Mustn't means 'it is prohibited'.", de: "Für positive Schlussfolgerung benutze 'must', nicht 'mustn't'. Mustn't bedeutet 'es ist verboten'." }
  },
  {
    sentence: "She can be tired – she ran a marathon yesterday.",
    mistakeIndex: 1,
    correction: "must",
    explanation: { en: "For strong deduction, use 'must be' not 'can be'. 'Can be' is used for general possibility.", de: "Für starke Schlussfolgerung benutze 'must be', nicht 'can be'." }
  },
  {
    sentence: "You haven't eaten all day. You can't be hungry!",
    mistakeIndex: 5,
    correction: "must be",
    explanation: { en: "If someone hasn't eaten, we deduce they ARE hungry (must be), not that they aren't (can't be).", de: "Wenn jemand nichts gegessen hat, schließen wir, dass er hungrig IST (must be)." }
  }
];

const grammarRacerData = [
  {
    prompt: "Look at all that snow! It ___ be freezing outside.",
    options: ["must", "can't", "mustn't"],
    correct: "must",
    explanation: "Evidence (snow) → positive deduction."
  },
  {
    prompt: "She ___ be a doctor – she doesn't know any medicine.",
    options: ["can't", "must", "mustn't"],
    correct: "can't",
    explanation: "Negative deduction based on evidence."
  },
  {
    prompt: "He drives a Ferrari. He ___ be quite rich.",
    options: ["must", "can't", "mustn't"],
    correct: "must",
    explanation: "Evidence (Ferrari) → positive deduction."
  }
];

export const mustAndCant = {
  id: 'b1_g28',
  title: {
    en: "Must and Can't (Deduction)",
    de: "Must und Can't (Schlussfolgerung)"
  },
  description: {
    en: "Using must and can't to make deductions: 'She must be at home' / 'He can't be serious'.",
    de: "Must und can't für Schlussfolgerungen: 'She must be at home' / 'He can't be serious'."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Must and Can't – Deduction 🕵️

We use **must** and **can't** to say we are almost **certain** about something, based on evidence or logic.

### 1. Must = I'm almost sure it IS true ✅

When we have evidence that makes us believe something is true:

- "She's been studying all day. She **must be** tired." (I'm sure she is).
- "He knows everything about cars. He **must be** a mechanic."
- "They **must have** a lot of money – look at their house!"

**Structure:** Subject + **must** + base verb (present) / **must have** + past participle (past)

### 2. Can't = I'm almost sure it is NOT true ❌

When we believe something is impossible or very unlikely:

- "He **can't be** hungry. He just ate a huge lunch."
- "She **can't be** 60 years old. She looks so young!"
- "That **can't be** true! I don't believe it."

**Structure:** Subject + **can't** + base verb

### 3. Must have / Can't have (Past Deductions) 🔙

For deductions about the **past**:

- "He knew the answer immediately. He **must have studied** hard."
- "She **can't have seen** us – she was looking the other way."

| Form | Meaning | Example |
|------|---------|---------|
| **must be** | Certain it's true (now) | "He must be at work." |
| **can't be** | Certain it's not true (now) | "She can't be serious." |
| **must have done** | Certain it was true (past) | "They must have left." |
| **can't have done** | Certain it wasn't true (past) | "He can't have known." |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Must vs. Must (obligation)</h3>
  <p><strong>Must</strong> has two meanings – context tells you which:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>"You <strong>must</strong> wear a seatbelt." (Obligation/Rule)</li>
    <li>"You <strong>must</strong> be tired." (Deduction/I'm sure)</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Common Mistakes ❌

**Mistake 1:** Using "mustn't" for deduction.
- ❌ "He **mustn't be** at home." (This means "He is not allowed to be at home").
- ✅ "He **can't be** at home." (Deduction: I'm sure he isn't).

**Mistake 2:** Using "can be" for positive deduction.
- ❌ "She **can be** tired." (General possibility, not deduction).
- ✅ "She **must be** tired." (I'm almost sure she is).

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Must (be)</strong> = I'm sure it's true (deduction).</li>
    <li><strong>Can't (be)</strong> = I'm sure it's NOT true (deduction).</li>
    <li><strong>Mustn't</strong> ≠ deduction! It means "prohibition".</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Must vs. Can't**
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Make deductions!</h3>
  <p className="mb-4">Look at these situations and write must/can't sentences:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Your friend got 100% on the test → "She ___ very hard."</li>
    <li>A man is wearing a winter coat in July → "He ___ from here."</li>
    <li>The lights are off in their house → "They ___ at home."</li>
  </ol>
</div>
`,
    de: `
## Must und Can't – Schlussfolgerung 🕵️

Wir benutzen **must** und **can't**, um zu sagen, dass wir fast **sicher** über etwas sind, basierend auf Beweisen oder Logik.

### 1. Must = Ich bin fast sicher, es IST wahr ✅

Wenn wir Beweise haben, die uns glauben lassen, dass etwas wahr ist:

- "She's been studying all day. She **must be** tired." (Ich bin sicher, sie ist es).
- "He knows everything about cars. He **must be** a mechanic."
- "They **must have** a lot of money – look at their house!"

**Struktur:** Subjekt + **must** + Grundform (Gegenwart) / **must have** + Partizip Perfekt (Vergangenheit)

### 2. Can't = Ich bin fast sicher, es ist NICHT wahr ❌

Wenn wir glauben, etwas ist unmöglich oder sehr unwahrscheinlich:

- "He **can't be** hungry. He just ate a huge lunch."
- "She **can't be** 60 years old. She looks so young!"
- "That **can't be** true! I don't believe it."

**Struktur:** Subjekt + **can't** + Grundform

### 3. Must have / Can't have (Vergangene Schlussfolgerungen) 🔙

Für Schlussfolgerungen über die **Vergangenheit**:

- "He knew the answer immediately. He **must have studied** hard."
- "She **can't have seen** us – she was looking the other way."

| Form | Bedeutung | Beispiel |
|------|-----------|----------|
| **must be** | Sicher, dass es wahr ist (jetzt) | "He must be at work." |
| **can't be** | Sicher, dass es nicht wahr ist (jetzt) | "She can't be serious." |
| **must have done** | Sicher, dass es wahr war (Vergangenheit) | "They must have left." |
| **can't have done** | Sicher, dass es nicht wahr war (Vergangenheit) | "He can't have known." |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Must vs. Must (Verpflichtung)</h3>
  <p><strong>Must</strong> hat zwei Bedeutungen – der Kontext verrät welche:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>"You <strong>must</strong> wear a seatbelt." (Verpflichtung/Regel)</li>
    <li>"You <strong>must</strong> be tired." (Schlussfolgerung/Ich bin sicher)</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Häufige Fehler ❌

**Fehler 1:** "Mustn't" für Schlussfolgerung benutzen.
- ❌ "He **mustn't be** at home." (Das bedeutet "Er darf nicht zu Hause sein").
- ✅ "He **can't be** at home." (Schlussfolgerung: Ich bin sicher, er ist es nicht).

**Fehler 2:** "Can be" für positive Schlussfolgerung benutzen.
- ❌ "She **can be** tired." (Allgemeine Möglichkeit, keine Schlussfolgerung).
- ✅ "She **must be** tired." (Ich bin fast sicher, sie ist es).

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Must (be)</strong> = Ich bin sicher, es ist wahr (Schlussfolgerung).</li>
    <li><strong>Can't (be)</strong> = Ich bin sicher, es ist NICHT wahr (Schlussfolgerung).</li>
    <li><strong>Mustn't</strong> ≠ Schlussfolgerung! Es bedeutet "Verbot".</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Must vs. Can't**
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Ziehe Schlussfolgerungen!</h3>
  <p className="mb-4">Schau dir diese Situationen an und schreibe must/can't Sätze:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Deine Freundin hat 100% im Test → "She ___ very hard."</li>
    <li>Ein Mann trägt einen Wintermantel im Juli → "He ___ from here."</li>
    <li>Die Lichter in ihrem Haus sind aus → "They ___ at home."</li>
  </ol>
</div>
`
  },
  task: {
    en: {
      title: "Must & Can't Deductions",
      description: "Practice making deductions with must and can't.",
      checklist: [
        { text: "Write 3 'must be' sentences about people around you", checked: false },
        { text: "Write 3 'can't be' sentences about unlikely situations", checked: false },
        { text: "Write 2 past deductions with 'must have' / 'can't have'", checked: false }
      ]
    },
    de: {
      title: "Must & Can't Schlussfolgerungen",
      description: "Übe Schlussfolgerungen mit must und can't.",
      checklist: [
        { text: "Schreibe 3 'must be' Sätze über Menschen um dich herum", checked: false },
        { text: "Schreibe 3 'can't be' Sätze über unwahrscheinliche Situationen", checked: false },
        { text: "Schreibe 2 Schlussfolgerungen über die Vergangenheit mit 'must have' / 'can't have'", checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
