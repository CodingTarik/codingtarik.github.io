import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "The letter ___ sent tomorrow.", de: "Der Brief wird morgen geschickt." },
    words: ["will be", "will been", "is being", "has been"],
    correct: "will be",
    explanation: { en: "Future passive: will + be + past participle.", de: "Zukunft Passiv: will + be + Partizip Perfekt." }
  },
  {
    prompt: { en: "The windows ___ cleaned every week.", de: "Die Fenster werden jede Woche geputzt." },
    words: ["are", "is", "were being", "have been"],
    correct: "are",
    explanation: { en: "Present simple passive: am/is/are + past participle.", de: "Present Simple Passiv: am/is/are + Partizip Perfekt." }
  },
  {
    prompt: { en: "The suspect ___ being questioned when the lawyer arrived.", de: "Der Verdächtige wurde gerade verhört, als der Anwalt ankam." },
    words: ["was", "is", "has", "had"],
    correct: "was",
    explanation: { en: "Past continuous passive: was/were + being + pp.", de: "Past Continuous Passiv: was/were + being + PP." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "The new school will been built next year.",
    mistakeIndex: 4,
    correction: "be",
    explanation: { en: "Future passive: will + BE + past participle, not 'been'.", de: "Zukunft Passiv: will + BE + Partizip Perfekt, nicht 'been'." }
  },
  {
    sentence: "English is spoke all over the world.",
    mistakeIndex: 2,
    correction: "spoken",
    explanation: { en: "Use the past participle 'spoken', not 'spoke'.", de: "Benutze das Partizip Perfekt 'spoken', nicht 'spoke'." }
  },
  {
    sentence: "The project must finished by Friday.",
    mistakeIndex: 2,
    correction: "be finished",
    explanation: { en: "Modal passive: must + BE + past participle.", de: "Modal Passiv: must + BE + Partizip Perfekt." }
  }
];

const grammarRacerData = [
  {
    prompt: "The homework must ___ completed by Monday.",
    options: ["be", "been", "being"],
    correct: "be",
    explanation: "Modal passive: must + be + pp."
  },
  {
    prompt: "This house ___ built in 1920.",
    options: ["was", "is", "has"],
    correct: "was",
    explanation: "Past simple passive."
  },
  {
    prompt: "The results will ___ announced next week.",
    options: ["be", "been", "being"],
    correct: "be",
    explanation: "Future passive: will be + pp."
  }
];

export const passive3 = {
  id: 'b1_g44',
  title: {
    en: 'Passive 3 – All Tenses',
    de: 'Passiv 3 – Alle Zeitformen'
  },
  description: {
    en: "Complete overview of passive in all tenses including modals.",
    de: "Vollständige Übersicht des Passivs in allen Zeitformen inklusive Modalverben."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Passive 3 – All Tenses Overview 📋

### Complete Passive Table 📊

| Tense | Active | Passive |
|-------|--------|---------|
| **Present simple** | They make cars. | Cars **are made**. |
| **Present continuous** | They are making cars. | Cars **are being made**. |
| **Past simple** | They made cars. | Cars **were made**. |
| **Past continuous** | They were making cars. | Cars **were being made**. |
| **Present perfect** | They have made cars. | Cars **have been made**. |
| **Past perfect** | They had made cars. | Cars **had been made**. |
| **Future (will)** | They will make cars. | Cars **will be made**. |
| **Future (going to)** | They are going to make cars. | Cars **are going to be made**. |
| **Modal (can)** | They can make cars. | Cars **can be made**. |
| **Modal (must)** | They must make cars. | Cars **must be made**. |

### 1. Modal Passives 🔧

**Structure:** modal + **be** + past participle

- "This **can be done** easily."
- "The report **must be finished** by Friday."
- "Mistakes **should be corrected** immediately."
- "The rules **may be changed** next year."

### 2. Future Passive 🔮

**Will:** will + **be** + past participle
- "The results **will be announced** tomorrow."

**Going to:** am/is/are going to + **be** + past participle
- "A new hospital **is going to be built** here."

### 3. By + Agent 👤

We add **by** when we want to say WHO does the action:

- "This book **was written by** J.K. Rowling."
- "The window **was broken by** the children."

Often we DON'T mention the agent:
- "The window **was broken**." (We don't know/care who did it).

<GamePlaceholder id="sentenceBuilder" />

### 4. Common Mistakes ❌

- ❌ "The cake will **been** baked." → ✅ "will **be** baked"
- ❌ "It must **finished**." → ✅ "must **be finished**"
- ❌ "English is **spoke** here." → ✅ "is **spoken** here"

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Key Pattern:</h3>
  <p>All passive forms use: <strong>form of BE + past participle</strong></p>
  <p>The form of BE changes depending on the tense.</p>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Passiv 3 – Alle Zeitformen Übersicht 📋

### Vollständige Passiv-Tabelle 📊

| Zeitform | Aktiv | Passiv |
|----------|-------|--------|
| **Present Simple** | They make cars. | Cars **are made**. |
| **Present Continuous** | They are making cars. | Cars **are being made**. |
| **Past Simple** | They made cars. | Cars **were made**. |
| **Past Continuous** | They were making cars. | Cars **were being made**. |
| **Present Perfect** | They have made cars. | Cars **have been made**. |
| **Past Perfect** | They had made cars. | Cars **had been made**. |
| **Future (will)** | They will make cars. | Cars **will be made**. |
| **Future (going to)** | They are going to make cars. | Cars **are going to be made**. |
| **Modal (can)** | They can make cars. | Cars **can be made**. |
| **Modal (must)** | They must make cars. | Cars **must be made**. |

### 1. Modal Passiv 🔧

**Struktur:** Modal + **be** + Partizip Perfekt

- "This **can be done** easily."
- "The report **must be finished** by Friday."
- "Mistakes **should be corrected** immediately."
- "The rules **may be changed** next year."

### 2. Zukunft Passiv 🔮

**Will:** will + **be** + Partizip Perfekt
- "The results **will be announced** tomorrow."

**Going to:** am/is/are going to + **be** + Partizip Perfekt
- "A new hospital **is going to be built** here."

### 3. By + Handelnder 👤

Wir fügen **by** hinzu, wenn wir sagen wollen, WER die Handlung ausführt:

- "This book **was written by** J.K. Rowling."
- "The window **was broken by** the children."

Oft erwähnen wir den Handelnden NICHT:
- "The window **was broken**." (Wir wissen nicht/es ist egal, wer es war).

<GamePlaceholder id="sentenceBuilder" />

### 4. Häufige Fehler ❌

- ❌ "The cake will **been** baked." → ✅ "will **be** baked"
- ❌ "It must **finished**." → ✅ "must **be finished**"
- ❌ "English is **spoke** here." → ✅ "is **spoken** here"

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Schlüsselmuster:</h3>
  <p>Alle Passivformen benutzen: <strong>Form von BE + Partizip Perfekt</strong></p>
  <p>Die Form von BE ändert sich je nach Zeitform.</p>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Passive – All Tenses',
      description: 'Practice passive in different tenses.',
      checklist: [
        { text: 'Transform 5 active sentences into passive (different tenses)', checked: false },
        { text: 'Write 3 modal passive sentences', checked: false },
        { text: 'Write 2 future passive sentences', checked: false }
      ]
    },
    de: {
      title: 'Passiv – Alle Zeitformen',
      description: 'Übe das Passiv in verschiedenen Zeitformen.',
      checklist: [
        { text: 'Wandle 5 aktive Sätze ins Passiv um (verschiedene Zeitformen)', checked: false },
        { text: 'Schreibe 3 Modal-Passiv-Sätze', checked: false },
        { text: 'Schreibe 2 Zukunft-Passiv-Sätze', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
