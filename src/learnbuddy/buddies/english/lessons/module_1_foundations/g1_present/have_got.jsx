import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ a new car.", de: "Ich ___ ein neues Auto." },
    words: ["have", "got", "has", "is"],
    correct: "have got",
    explanation: { en: "I have got", de: "I have got" }
  },
  {
    prompt: { en: "She ___ blue eyes.", de: "Sie ___ blaue Augen." },
    words: ["has", "got", "have", "is"],
    correct: "has got",
    explanation: { en: "She has got", de: "She has got" }
  },
  {
    prompt: { en: "___ you ___ a sister?", de: "___ du eine Schwester?" },
    words: ["Have", "got", "Do", "have"],
    correct: "Have you got",
    explanation: { en: "Have you got...?", de: "Have you got...?" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I has got a dog.",
    mistakeIndex: 1,
    correction: "have",
    explanation: { en: "I have, not I has.", de: "I have, nicht I has." }
  },
  {
    sentence: "She have got a problem.",
    mistakeIndex: 1,
    correction: "has",
    explanation: { en: "She has, not She have.", de: "She has, nicht She have." }
  },
  {
    sentence: "Do you have got money?",
    mistakeIndex: 0,
    correction: "Have",
    explanation: { en: "Have you got money? (No 'Do' with 'got')", de: "Have you got money? (Kein 'Do' bei 'got')" }
  }
];

export const haveGot = {
  id: 'a1_g17',
  title: {
    en: 'Have and Have Got',
    de: 'Have und Have Got (Haben)'
  },
  description: {
    en: "Two ways to say 'I own this'. What's the difference?",
    de: "Zwei Wege, um 'Ich habe das' zu sagen. Was ist der Unterschied?"
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />
  },

  content: {
    en: `
## Have vs. Have Got 🤝

In English, there are two common ways to talk about possession (owning something), family relations, or illnesses.

1.  **have** (Standard, more formal, used everywhere)
2.  **have got** (More informal, very common in British English)

Both mean exactly the same thing!

### 1. The Forms

| Subject | Have Got | Have (Standard) |
|---------|----------|-----------------|
| I | I **have got** (I've got) | I **have** |
| You | You **have got** (You've got) | You **have** |
| He/She/It | He **has got** (He's got) | He **has** |
| We | We **have got** (We've got) | We **have** |
| They | They **have got** (They've got) | They **have** |

**Example:**
- "I **have got** a car." = "I **have** a car."

<GamePlaceholder id="sentenceBuilder" />

### 2. Negatives and Questions (Important Difference!) ⚠️

This is where they behave differently!

**A. Have Got (uses "have" as helper)**
- (-) "I **have not got** a car." (I haven't got)
- (?) "**Have** you **got** a car?"

**B. Have (uses "do/does" as helper)**
- (-) "I **do not have** a car." (I don't have)
- (?) "**Do** you **have** a car?"

<div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 my-4">
  <strong className="text-amber-800 dark:text-amber-200">💡 Note:</strong>
  "Have got" is usually **Present Tense only**.
  <br/>
  For the past, we almost always use "had" (without got).
  <br/>
  - Past: "I **had** a bike when I was young." (Not "had got")
</div>

<GamePlaceholder id="fixTheMistake" />
`,
    de: `
## Have vs. Have Got 🤝

Im Englischen gibt es zwei gängige Arten, über Besitz (Dinge, die man hat), Familienbeziehungen oder Krankheiten zu sprechen.

1.  **have** (Standard, etwas formeller, überall verwendet - besonders USA)
2.  **have got** (Etwas informeller, sehr häufig im britischen Englisch)

Beide bedeuten exakt dasselbe!

### 1. Die Formen

| Subjekt | Have Got | Have (Standard) |
|---------|----------|-----------------|
| I | I **have got** (I've got) | I **have** |
| You | You **have got** (You've got) | You **have** |
| He/She/It | He **has got** (He's got) | He **has** |
| We | We **have got** (We've got) | We **have** |
| They | They **have got** (They've got) | They **have** |

**Beispiel:**
- "I **have got** a car." = "I **have** a car." (Ich habe ein Auto.)

<GamePlaceholder id="sentenceBuilder" />

### 2. Verneinung und Fragen (Wichtiger Unterschied!) ⚠️

Hier verhalten sie sich unterschiedlich!

**A. Have Got (benutzt "have" als Hilfsverb)**
- (-) "I **have not got** a car." (I haven't got)
- (?) "**Have** you **got** a car?"

**B. Have (benutzt "do/does" als Hilfsverb)**
- (-) "I **do not have** a car." (I don't have)
- (?) "**Do** you **have** a car?"

<div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 my-4">
  <strong className="text-amber-800 dark:text-amber-200">💡 Hinweis:</strong>
  "Have got" gibt es meistens nur in der **Gegenwart**.
  <br/>
  Für die Vergangenheit nutzen wir fast immer nur "had" (ohne got).
  <br/>
  - Vergangenheit: "I **had** a bike when I was young." (Nicht "had got")
</div>

<GamePlaceholder id="fixTheMistake" />
`
  },
  task: {
    de: {
      title: 'Was hast du?',
      description: 'Schreibe 2 Sätze: Einen mit "I have" und einen mit "I have got".',
      checklist: [
        { text: 'Satz mit "I have..."', checked: false },
        { text: 'Satz mit "I have got..."', checked: false }
      ]
    },
    en: {
      title: 'What do you have?',
      description: 'Write 2 sentences: One with "I have" and one with "I have got".',
      checklist: [
        { text: 'Sentence with "I have..."', checked: false },
        { text: 'Sentence with "I have got..."', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


