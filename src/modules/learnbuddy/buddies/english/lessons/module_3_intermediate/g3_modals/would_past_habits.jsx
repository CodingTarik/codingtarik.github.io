import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "When I was a child, I ___ play in the garden every day.", de: "Als ich ein Kind war, spielte ich jeden Tag im Garten." },
    words: ["would", "will", "used to", "had"],
    correct: "would",
    explanation: { en: "Would = repeated past action (habit).", de: "Would = wiederholte vergangene Handlung (Gewohnheit)." }
  },
  {
    prompt: { en: "My grandmother ___ always bake cookies for us on Sundays.", de: "Meine Großmutter backte sonntags immer Kekse für uns." },
    words: ["would", "will", "could", "should"],
    correct: "would",
    explanation: { en: "Would for a repeated past habit/routine.", de: "Would für eine wiederholte vergangene Gewohnheit/Routine." }
  },
  {
    prompt: { en: "I ___ have a cat when I was young.", de: "Ich hatte eine Katze, als ich jung war." },
    words: ["used to", "would", "will", "had to"],
    correct: "used to",
    explanation: { en: "For past STATES (have, be, live), use 'used to', NOT 'would'.", de: "Für vergangene ZUSTÄNDE (have, be, live) benutze 'used to', NICHT 'would'." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I would be very shy as a child.",
    mistakeIndex: 1,
    correction: "used to",
    explanation: { en: "'Be' is a state verb. Use 'used to' for past states, not 'would'.", de: "'Be' ist ein Zustandsverb. Benutze 'used to' für vergangene Zustände, nicht 'would'." }
  },
  {
    sentence: "She would lived in Paris when she was young.",
    mistakeIndex: 2,
    correction: "live",
    explanation: { en: "After 'would', use the base form: 'would live', not 'would lived'.", de: "Nach 'would' benutze die Grundform: 'would live', nicht 'would lived'." }
  },
  {
    sentence: "He would have a big dog before he moved.",
    mistakeIndex: 1,
    correction: "used to",
    explanation: { en: "'Have' (possession) is a state. Use 'used to have', not 'would have'.", de: "'Have' (Besitz) ist ein Zustand. Benutze 'used to have', nicht 'would have'." }
  }
];

const grammarRacerData = [
  {
    prompt: "Every summer, we ___ go camping by the lake.",
    options: ["would", "will", "should"],
    correct: "would",
    explanation: "Repeated past action."
  },
  {
    prompt: "I ___ live in London. (past state, not anymore)",
    options: ["used to", "would", "will"],
    correct: "used to",
    explanation: "'Live' = state verb → use 'used to'."
  },
  {
    prompt: "She ___ always sing while cooking dinner.",
    options: ["would", "will", "must"],
    correct: "would",
    explanation: "Repeated past habit."
  }
];

export const wouldPastHabits = {
  id: 'b1_g36',
  title: {
    en: 'Would (Past Habits)',
    de: 'Would (Vergangene Gewohnheiten)'
  },
  description: {
    en: "Using 'would' for repeated past actions: 'Every summer, we would go camping.'",
    de: "Would für wiederholte vergangene Handlungen: 'Every summer, we would go camping.'"
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Would for Past Habits 🔁🕰️

We can use **would** to talk about things that happened **regularly** in the past – repeated actions and habits.

### 1. Would = Repeated Past Action ✅

- "When I was a child, I **would play** outside every day."
- "My father **would read** me a story every night before bed."
- "Every summer, we **would visit** our grandparents."

This is similar to **used to**, but there's an important difference!

### 2. Would vs. Used to ⚡

| | Would | Used to |
|---|---|---|
| **Past actions (repeated)** | ✅ Yes | ✅ Yes |
| **Past states (be, have, live, know...)** | ❌ No! | ✅ Yes |

**Would** can ONLY be used for **actions** (things you do), NOT for **states** (things you are/have):

- ✅ "I **used to live** in Berlin." / ❌ "I **would live** in Berlin."
- ✅ "She **used to be** very shy." / ❌ "She **would be** very shy."
- ✅ "We **used to have** a dog." / ❌ "We **would have** a dog."
- ✅ "He **would walk** to school every day." (Action → both OK)
- ✅ "He **used to walk** to school every day." (Action → both OK)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ State verbs: NO 'would'</h3>
  <p>These verbs describe <strong>states</strong> and can't use 'would' for past habits:</p>
  <p className="mt-2"><strong>be, have, know, like, love, hate, believe, want, need, live, belong</strong></p>
</div>

### 3. When to use 'would' for past habits 🎯

**Would** sounds more literary and nostalgic. It's common in storytelling:

- "In the old days, people **would travel** by horse."
- "My grandmother **would always** make the best apple pie."

**Important:** You usually need a **time reference** first:
- ✅ "**When I was young**, I would climb trees."
- ❌ "I would climb trees." (Unclear without context)

<GamePlaceholder id="sentenceBuilder" />

### 4. Common Mistakes ❌

**Mistake 1:** Using 'would' with state verbs.
- ❌ "I **would be** tall when I was 16."
- ✅ "I **used to be** tall when I was 16."

**Mistake 2:** Using past tense after 'would'.
- ❌ "She **would played** tennis every week."
- ✅ "She **would play** tennis every week."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Would + base verb</strong> = repeated past actions (habits).</li>
    <li><strong>Used to</strong> = past actions AND states.</li>
    <li><strong>Would</strong> CANNOT be used with state verbs (be, have, live...).</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Childhood Memories</h3>
  <p className="mb-4">Write about your childhood using 'would' and 'used to':</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>3 things you would do regularly (actions)</li>
    <li>3 things you used to be/have (states)</li>
    <li>A short paragraph about a typical day when you were 10</li>
  </ol>
</div>
`,
    de: `
## Would für vergangene Gewohnheiten 🔁🕰️

Wir können **would** benutzen, um über Dinge zu sprechen, die in der Vergangenheit **regelmäßig** passiert sind – wiederholte Handlungen und Gewohnheiten.

### 1. Would = Wiederholte vergangene Handlung ✅

- "When I was a child, I **would play** outside every day."
- "My father **would read** me a story every night before bed."
- "Every summer, we **would visit** our grandparents."

Das ist ähnlich wie **used to**, aber es gibt einen wichtigen Unterschied!

### 2. Would vs. Used to ⚡

| | Would | Used to |
|---|---|---|
| **Vergangene Handlungen (wiederholt)** | ✅ Ja | ✅ Ja |
| **Vergangene Zustände (be, have, live, know...)** | ❌ Nein! | ✅ Ja |

**Would** kann NUR für **Handlungen** (Dinge, die man tut) benutzt werden, NICHT für **Zustände** (Dinge, die man ist/hat):

- ✅ "I **used to live** in Berlin." / ❌ "I **would live** in Berlin."
- ✅ "She **used to be** very shy." / ❌ "She **would be** very shy."
- ✅ "We **used to have** a dog." / ❌ "We **would have** a dog."
- ✅ "He **would walk** to school every day." (Handlung → beides OK)
- ✅ "He **used to walk** to school every day." (Handlung → beides OK)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Zustandsverben: KEIN 'would'</h3>
  <p>Diese Verben beschreiben <strong>Zustände</strong> und können 'would' nicht für vergangene Gewohnheiten benutzen:</p>
  <p className="mt-2"><strong>be, have, know, like, love, hate, believe, want, need, live, belong</strong></p>
</div>

### 3. Wann 'would' für vergangene Gewohnheiten benutzen 🎯

**Would** klingt literarischer und nostalgischer. Es ist verbreitet beim Erzählen:

- "In the old days, people **would travel** by horse."
- "My grandmother **would always** make the best apple pie."

**Wichtig:** Man braucht normalerweise zuerst eine **Zeitangabe**:
- ✅ "**When I was young**, I would climb trees."
- ❌ "I would climb trees." (Unklar ohne Kontext)

<GamePlaceholder id="sentenceBuilder" />

### 4. Häufige Fehler ❌

**Fehler 1:** 'Would' mit Zustandsverben benutzen.
- ❌ "I **would be** tall when I was 16."
- ✅ "I **used to be** tall when I was 16."

**Fehler 2:** Vergangenheitsform nach 'would' benutzen.
- ❌ "She **would played** tennis every week."
- ✅ "She **would play** tennis every week."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Would + Grundform</strong> = wiederholte vergangene Handlungen (Gewohnheiten).</li>
    <li><strong>Used to</strong> = vergangene Handlungen UND Zustände.</li>
    <li><strong>Would</strong> KANN NICHT mit Zustandsverben (be, have, live...) benutzt werden.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Kindheitserinnerungen</h3>
  <p className="mb-4">Schreibe über deine Kindheit mit 'would' und 'used to':</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>3 Dinge, die du regelmäßig getan hast (Handlungen mit would)</li>
    <li>3 Dinge, die du gewesen bist/hattest (Zustände mit used to)</li>
    <li>Einen kurzen Absatz über einen typischen Tag, als du 10 warst</li>
  </ol>
</div>
`
  },
  task: {
    en: {
      title: 'Would (Past Habits)',
      description: 'Practice using would for past habits and distinguish from used to.',
      checklist: [
        { text: 'Write 5 childhood habits using would', checked: false },
        { text: 'Write 3 past states using used to (not would)', checked: false },
        { text: 'Explain why would cannot be used with state verbs', checked: false }
      ]
    },
    de: {
      title: 'Would (Vergangene Gewohnheiten)',
      description: 'Übe would für vergangene Gewohnheiten und unterscheide von used to.',
      checklist: [
        { text: 'Schreibe 5 Kindheitsgewohnheiten mit would', checked: false },
        { text: 'Schreibe 3 vergangene Zustände mit used to (nicht would)', checked: false },
        { text: 'Erkläre, warum would nicht mit Zustandsverben benutzt werden kann', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
