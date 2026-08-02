import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "You're coming to the party, ___ you?", de: "Du kommst zur Party, oder?" },
    words: ["aren't", "are", "isn't", "don't"],
    correct: "aren't",
    explanation: { en: "Positive sentence → negative tag.", de: "Positiver Satz → negativer Tag." }
  },
  {
    prompt: { en: "She doesn't like coffee, ___ she?", de: "Sie mag keinen Kaffee, oder?" },
    words: ["does", "doesn't", "is", "isn't"],
    correct: "does",
    explanation: { en: "Negative sentence → positive tag.", de: "Negativer Satz → positiver Tag." }
  },
  {
    prompt: { en: "They've been here before, ___ they?", de: "Sie waren schon mal hier, oder?" },
    words: ["haven't", "have", "don't", "aren't"],
    correct: "haven't",
    explanation: { en: "Positive (have been) → negative tag (haven't).", de: "Positiv (have been) → negativer Tag (haven't)." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "He works hard, doesn't it?",
    mistakeIndex: 4,
    correction: "he",
    explanation: { en: "The pronoun in the tag must match the subject: 'he' not 'it'.", de: "Das Pronomen im Tag muss zum Subjekt passen: 'he' nicht 'it'." }
  },
  {
    sentence: "You can swim, don't you?",
    mistakeIndex: 4,
    correction: "can't you",
    explanation: { en: "The tag must use the same auxiliary: 'can' → 'can't you'.", de: "Der Tag muss das gleiche Hilfsverb benutzen: 'can' → 'can't you'." }
  },
  {
    sentence: "She is beautiful, isn't it?",
    mistakeIndex: 4,
    correction: "she",
    explanation: { en: "Match the subject pronoun: 'she' → 'isn't she'.", de: "Passe das Subjektpronomen an: 'she' → 'isn't she'." }
  }
];

const grammarRacerData = [
  {
    prompt: "It's cold today, ___ it?",
    options: ["isn't", "is", "doesn't"],
    correct: "isn't",
    explanation: "Positive → negative tag."
  },
  {
    prompt: "You haven't seen the film, ___ you?",
    options: ["have", "haven't", "do"],
    correct: "have",
    explanation: "Negative → positive tag."
  },
  {
    prompt: "Let's go, ___ we?",
    options: ["shall", "will", "do"],
    correct: "shall",
    explanation: "Let's → shall we?"
  }
];

export const questionTags = {
  id: 'b1_g52',
  title: {
    en: 'Question Tags',
    de: 'Question Tags (Frageanhängsel)'
  },
  description: {
    en: "Mini-questions at the end: 'You like it, don't you?' / 'She can swim, can't she?'",
    de: "Mini-Fragen am Ende: 'You like it, don't you?' / 'She can swim, can't she?'"
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Question Tags 🏷️❓

Question tags are short questions at the end of sentences. They're used to **confirm** information or **invite agreement**.

### 1. The Basic Rule 📐

**Positive sentence → Negative tag**
**Negative sentence → Positive tag**

- "You **are** a student, **aren't** you?"
- "She **doesn't** like fish, **does** she?"
- "They **have** finished, **haven't** they?"
- "He **can't** swim, **can** he?"

### 2. How to Form Question Tags 🔧

1. Use the **same auxiliary** as the main sentence
2. **Switch** positive ↔ negative
3. Use the correct **pronoun**

| Sentence | Tag |
|----------|-----|
| He **is** tired | **isn't he**? |
| They **don't** know | **do they**? |
| She **has** left | **hasn't she**? |
| You **can** drive | **can't you**? |
| It **won't** work | **will it**? |

### 3. Special Cases 🌟

| Sentence | Tag | Note |
|----------|-----|------|
| I **am** late | **aren't I**? | (Not "amn't I") |
| **Let's** go | **shall we**? | |
| **Don't** do that | **will you**? | (Commands) |
| **Nobody** came | **did they**? | (Negative meaning) |
| **Everyone** likes it | **don't they**? | |

### 4. Intonation 🎵

- **Falling** intonation (↘): You expect agreement → "Nice day, isn't it↘?"
- **Rising** intonation (↗): You're genuinely asking → "You locked the door, didn't you↗?"

<GamePlaceholder id="sentenceBuilder" />

### 5. Common Mistakes ❌

- ❌ "He works hard, **doesn't it**?" → ✅ "doesn't **he**?"
- ❌ "You can swim, **don't you**?" → ✅ "**can't you**?"
- ❌ "I am right, **amn't I**?" → ✅ "**aren't I**?"

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Positive sentence → negative tag.</li>
    <li>Negative sentence → positive tag.</li>
    <li>Use the SAME auxiliary verb.</li>
    <li>Match the subject pronoun.</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Question Tags (Frageanhängsel) 🏷️❓

Question Tags sind kurze Fragen am Ende von Sätzen. Sie werden benutzt, um Informationen zu **bestätigen** oder **Zustimmung einzuladen**.

### 1. Die Grundregel 📐

**Positiver Satz → Negativer Tag**
**Negativer Satz → Positiver Tag**

- "You **are** a student, **aren't** you?"
- "She **doesn't** like fish, **does** she?"
- "They **have** finished, **haven't** they?"
- "He **can't** swim, **can** he?"

### 2. Wie man Question Tags bildet 🔧

1. Benutze das **gleiche Hilfsverb** wie im Hauptsatz
2. **Wechsle** positiv ↔ negativ
3. Benutze das richtige **Pronomen**

| Satz | Tag |
|------|-----|
| He **is** tired | **isn't he**? |
| They **don't** know | **do they**? |
| She **has** left | **hasn't she**? |
| You **can** drive | **can't you**? |
| It **won't** work | **will it**? |

### 3. Sonderfälle 🌟

| Satz | Tag | Hinweis |
|------|-----|---------|
| I **am** late | **aren't I**? | (Nicht "amn't I") |
| **Let's** go | **shall we**? | |
| **Don't** do that | **will you**? | (Befehle) |
| **Nobody** came | **did they**? | (Negative Bedeutung) |
| **Everyone** likes it | **don't they**? | |

### 4. Intonation 🎵

- **Fallende** Intonation (↘): Du erwartest Zustimmung → "Nice day, isn't it↘?"
- **Steigende** Intonation (↗): Du fragst wirklich → "You locked the door, didn't you↗?"

<GamePlaceholder id="sentenceBuilder" />

### 5. Häufige Fehler ❌

- ❌ "He works hard, **doesn't it**?" → ✅ "doesn't **he**?"
- ❌ "You can swim, **don't you**?" → ✅ "**can't you**?"
- ❌ "I am right, **amn't I**?" → ✅ "**aren't I**?"

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Positiver Satz → negativer Tag.</li>
    <li>Negativer Satz → positiver Tag.</li>
    <li>Benutze das GLEICHE Hilfsverb.</li>
    <li>Passe das Subjektpronomen an.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Question Tags',
      description: 'Practice adding question tags to sentences.',
      checklist: [
        { text: 'Add question tags to 10 sentences (mix positive and negative)', checked: false },
        { text: 'Practice the special cases (I am, let\'s, nobody)', checked: false },
        { text: 'Write a dialogue using at least 5 question tags', checked: false }
      ]
    },
    de: {
      title: 'Question Tags',
      description: 'Übe, Question Tags an Sätze anzuhängen.',
      checklist: [
        { text: 'Füge Question Tags an 10 Sätze an (Mix aus positiv und negativ)', checked: false },
        { text: "Übe die Sonderfälle (I am, let's, nobody)", checked: false },
        { text: 'Schreibe einen Dialog mit mindestens 5 Question Tags', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
