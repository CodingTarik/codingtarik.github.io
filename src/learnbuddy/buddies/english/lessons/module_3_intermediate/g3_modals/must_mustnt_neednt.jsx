import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "You ___ drive without a licence. It's illegal.", de: "Du darfst nicht ohne Führerschein fahren. Es ist illegal." },
    words: ["mustn't", "needn't", "must", "don't have to"],
    correct: "mustn't",
    explanation: { en: "Mustn't = it is prohibited / not allowed.", de: "Mustn't = es ist verboten / nicht erlaubt." }
  },
  {
    prompt: { en: "You ___ bring food – I've already prepared everything.", de: "Du brauchst kein Essen mitbringen – ich habe alles vorbereitet." },
    words: ["needn't", "mustn't", "must", "can't"],
    correct: "needn't",
    explanation: { en: "Needn't = it's not necessary (but you can if you want).", de: "Needn't = es ist nicht nötig (aber du kannst, wenn du willst)." }
  },
  {
    prompt: { en: "All passengers ___ wear seatbelts at all times.", de: "Alle Passagiere müssen jederzeit Sicherheitsgurte tragen." },
    words: ["must", "mustn't", "needn't", "shouldn't"],
    correct: "must",
    explanation: { en: "Must = it is required / obligatory.", de: "Must = es ist erforderlich / Pflicht." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "You mustn't hurry. We have plenty of time.",
    mistakeIndex: 1,
    correction: "needn't",
    explanation: { en: "'Mustn't' means 'it's forbidden'. Here, hurrying is not forbidden – it's just not necessary. Use 'needn't'.", de: "'Mustn't' bedeutet 'es ist verboten'. Hier ist Eile nicht verboten – nur nicht nötig. Benutze 'needn't'." }
  },
  {
    sentence: "You needn't park here. It's a no-parking zone.",
    mistakeIndex: 1,
    correction: "mustn't",
    explanation: { en: "A no-parking zone means it's forbidden to park. Use 'mustn't'.", de: "Ein Parkverbot bedeutet, es ist verboten zu parken. Benutze 'mustn't'." }
  },
  {
    sentence: "You needn't touch that wire – it's dangerous!",
    mistakeIndex: 1,
    correction: "mustn't",
    explanation: { en: "Touching a dangerous wire is prohibited/dangerous, not just unnecessary. Use 'mustn't'.", de: "Einen gefährlichen Draht zu berühren ist verboten/gefährlich, nicht nur unnötig. Benutze 'mustn't'." }
  }
];

const grammarRacerData = [
  {
    prompt: "You ___ tell anyone my secret. Promise me!",
    options: ["mustn't", "needn't", "must"],
    correct: "mustn't",
    explanation: "Prohibition – don't tell anyone!"
  },
  {
    prompt: "You ___ buy any milk – we still have two litres.",
    options: ["needn't", "mustn't", "must"],
    correct: "needn't",
    explanation: "Not necessary – we have enough."
  },
  {
    prompt: "Students ___ use their phones during exams.",
    options: ["mustn't", "needn't", "must"],
    correct: "mustn't",
    explanation: "It's forbidden/against the rules."
  }
];

export const mustMustntNeednt = {
  id: 'b1_g32',
  title: {
    en: "Must / Mustn't / Needn't",
    de: "Must / Mustn't / Needn't"
  },
  description: {
    en: "Must (obligation), mustn't (prohibition) vs. needn't (not necessary).",
    de: "Must (Verpflichtung), mustn't (Verbot) vs. needn't (nicht nötig)."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Must / Mustn't / Needn't 🚦

These three forms look similar but have **very different meanings**. Mixing them up is one of the most common B1 mistakes!

### 1. Must = Obligation / Necessity ✅

Something is required or very important:

- "You **must** wear a helmet on a motorbike." (It's the law).
- "I **must** finish this report by Friday." (It's very important).
- "All visitors **must** sign in at reception."

### 2. Mustn't = Prohibition / Forbidden 🚫

Something is **not allowed**:

- "You **mustn't** smoke in the hospital." (It's against the rules).
- "You **mustn't** tell anyone about this." (Don't do it!).
- "Children **mustn't** play near the road."

### 3. Needn't = Not Necessary 🤷

Something is **not required** – you don't have to, but you can if you want:

- "You **needn't** bring anything to the party." (But you can if you want).
- "We **needn't** hurry – we have lots of time."
- "You **needn't** worry. Everything will be fine."

**Needn't** = **don't need to** = **don't have to**

### 4. The Key Difference ⚡

| Modal | Meaning | Example |
|-------|---------|---------|
| **must** | You are required to | "You must stop at a red light." |
| **mustn't** | You are NOT allowed to | "You mustn't cross on red." |
| **needn't** | You are NOT required to (optional) | "You needn't wait for me." |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Careful!</h3>
  <p><strong>Mustn't ≠ needn't!</strong></p>
  <ul className="list-disc list-inside space-y-1">
    <li>"You <strong>mustn't</strong> eat this!" = DON'T eat it! (Danger/Prohibition)</li>
    <li>"You <strong>needn't</strong> eat this." = You don't have to. (It's optional)</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 5. Needn't have done (Past) 🔙

**Needn't have + past participle** means someone did something, but it **wasn't necessary**:

- "You **needn't have bought** so much food. We already had enough." (You bought it, but it wasn't needed).
- "I **needn't have worried**. The exam was easy." (I worried, but it was unnecessary).

### 6. Common Mistakes ❌

**Mistake 1:** Using mustn't when you mean not necessary.
- ❌ "You **mustn't** come if you're busy." (= You are forbidden to come!?)
- ✅ "You **needn't** come if you're busy." (= It's not necessary).

**Mistake 2:** Confusing needn't and shouldn't.
- "You **needn't** go." (= Not necessary).
- "You **shouldn't** go." (= I advise against it).

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Must</strong> = obligation (you have to do it).</li>
    <li><strong>Mustn't</strong> = prohibition (don't do it!).</li>
    <li><strong>Needn't</strong> = not necessary (you don't have to).</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer**
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Must / Mustn't / Needn't 🚦

Diese drei Formen sehen ähnlich aus, haben aber **sehr unterschiedliche Bedeutungen**. Sie zu verwechseln ist einer der häufigsten B1-Fehler!

### 1. Must = Verpflichtung / Notwendigkeit ✅

Etwas ist erforderlich oder sehr wichtig:

- "You **must** wear a helmet on a motorbike." (Es ist Gesetz).
- "I **must** finish this report by Friday." (Es ist sehr wichtig).
- "All visitors **must** sign in at reception."

### 2. Mustn't = Verbot 🚫

Etwas ist **nicht erlaubt**:

- "You **mustn't** smoke in the hospital." (Es ist gegen die Regeln).
- "You **mustn't** tell anyone about this." (Tu es nicht!).
- "Children **mustn't** play near the road."

### 3. Needn't = Nicht nötig 🤷

Etwas ist **nicht erforderlich** – du musst nicht, aber du kannst, wenn du willst:

- "You **needn't** bring anything to the party." (Aber du kannst, wenn du willst).
- "We **needn't** hurry – we have lots of time."
- "You **needn't** worry. Everything will be fine."

**Needn't** = **don't need to** = **don't have to**

### 4. Der entscheidende Unterschied ⚡

| Modal | Bedeutung | Beispiel |
|-------|-----------|----------|
| **must** | Du musst | "You must stop at a red light." |
| **mustn't** | Du darfst NICHT | "You mustn't cross on red." |
| **needn't** | Du musst NICHT (optional) | "You needn't wait for me." |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Vorsicht!</h3>
  <p><strong>Mustn't ≠ needn't!</strong></p>
  <ul className="list-disc list-inside space-y-1">
    <li>"You <strong>mustn't</strong> eat this!" = ISS es NICHT! (Gefahr/Verbot)</li>
    <li>"You <strong>needn't</strong> eat this." = Du musst das nicht. (Es ist freiwillig)</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 5. Needn't have done (Vergangenheit) 🔙

**Needn't have + Partizip Perfekt** bedeutet, jemand hat etwas getan, aber es **war nicht nötig**:

- "You **needn't have bought** so much food. We already had enough." (Du hast es gekauft, aber es war unnötig).
- "I **needn't have worried**. The exam was easy." (Ich habe mir Sorgen gemacht, aber es war unnötig).

### 6. Häufige Fehler ❌

**Fehler 1:** Mustn't benutzen, wenn man "nicht nötig" meint.
- ❌ "You **mustn't** come if you're busy." (= Es ist dir verboten zu kommen!?)
- ✅ "You **needn't** come if you're busy." (= Es ist nicht nötig).

**Fehler 2:** Needn't und shouldn't verwechseln.
- "You **needn't** go." (= Nicht nötig).
- "You **shouldn't** go." (= Ich rate davon ab).

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Must</strong> = Verpflichtung (du musst es tun).</li>
    <li><strong>Mustn't</strong> = Verbot (tu es nicht!).</li>
    <li><strong>Needn't</strong> = nicht nötig (du musst nicht).</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer**
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: "Must / Mustn't / Needn't",
      description: "Practice the difference between obligation, prohibition, and no necessity.",
      checklist: [
        { text: "Write 3 school/work rules with 'must'", checked: false },
        { text: "Write 3 prohibitions with 'mustn't'", checked: false },
        { text: "Write 3 'not necessary' sentences with 'needn't'", checked: false }
      ]
    },
    de: {
      title: "Must / Mustn't / Needn't",
      description: "Übe den Unterschied zwischen Verpflichtung, Verbot und Nicht-Notwendigkeit.",
      checklist: [
        { text: "Schreibe 3 Schul-/Arbeitsregeln mit 'must'", checked: false },
        { text: "Schreibe 3 Verbote mit 'mustn't'", checked: false },
        { text: "Schreibe 3 'nicht nötig' Sätze mit 'needn't'", checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
