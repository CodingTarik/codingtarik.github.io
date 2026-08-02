import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "He ___ said to be very rich.", de: "Er soll sehr reich sein." },
    words: ["is", "has", "was being", "it"],
    correct: "is",
    explanation: { en: "Subject + is said to + verb.", de: "Subjekt + is said to + Verb." }
  },
  {
    prompt: { en: "It ___ believed that the company will close.", de: "Es wird geglaubt, dass die Firma schließen wird." },
    words: ["is", "has", "was being", "are"],
    correct: "is",
    explanation: { en: "It + is believed that + clause.", de: "It + is believed that + Satz." }
  },
  {
    prompt: { en: "She is ___ to have left the country.", de: "Sie soll das Land verlassen haben." },
    words: ["supposed", "said being", "believing", "thinking"],
    correct: "supposed",
    explanation: { en: "She is supposed to have done = people say she did.", de: "She is supposed to have done = man sagt, sie hat es getan." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "It is said he is a spy.",
    mistakeIndex: 3,
    correction: "that he",
    explanation: { en: "Use 'It is said THAT he is...' with the conjunction 'that'.", de: "Benutze 'It is said THAT he is...' mit der Konjunktion 'that'." }
  },
  {
    sentence: "He is said be very talented.",
    mistakeIndex: 3,
    correction: "to be",
    explanation: { en: "Use 'is said TO be' – the 'to' is required.", de: "Benutze 'is said TO be' – das 'to' ist erforderlich." }
  },
  {
    sentence: "They are supposed left early.",
    mistakeIndex: 3,
    correction: "to have left",
    explanation: { en: "Use 'supposed to have left' for past actions.", de: "Benutze 'supposed to have left' für vergangene Handlungen." }
  }
];

const grammarRacerData = [
  {
    prompt: "It is ___ that he stole the painting.",
    options: ["believed", "believing", "believe"],
    correct: "believed",
    explanation: "It is believed that..."
  },
  {
    prompt: "She is said ___ the best doctor in town.",
    options: ["to be", "be", "being"],
    correct: "to be",
    explanation: "Subject + is said + to be."
  },
  {
    prompt: "He is ___ to be working on a new project.",
    options: ["supposed", "said being", "believing"],
    correct: "supposed",
    explanation: "He is supposed to be = people say he is."
  }
];

export const itIsSaid = {
  id: 'b1_g45',
  title: {
    en: 'It is said that / He is supposed to',
    de: 'It is said that / He is supposed to'
  },
  description: {
    en: "Reporting what people say/believe: 'It is said that...' and 'He is supposed to...'",
    de: "Berichten, was Leute sagen/glauben: 'It is said that...' und 'He is supposed to...'"
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## It is said that / He is supposed to 📰

These structures are used to report what **people say, believe, or think** without saying who exactly.

### 1. Two Patterns 📐

**Pattern A:** It + passive + that + clause
- "**It is said that** he is very rich."
- "**It is believed that** the earth is 4.5 billion years old."
- "**It is thought that** she left the country."

**Pattern B:** Subject + passive + to + verb
- "He **is said to be** very rich."
- "The earth **is believed to be** 4.5 billion years old."
- "She **is thought to have left** the country."

### 2. Common Verbs Used 📝

| Verb | Pattern A | Pattern B |
|------|-----------|-----------|
| **say** | It is said that... | He is said to... |
| **believe** | It is believed that... | He is believed to... |
| **think** | It is thought that... | He is thought to... |
| **know** | It is known that... | He is known to... |
| **report** | It is reported that... | He is reported to... |
| **expect** | It is expected that... | He is expected to... |
| **suppose** | It is supposed that... | He is supposed to... |

### 3. Supposed to 🎯

**Is supposed to** has a special additional meaning: "should / expected to":

- "You **are supposed to** wear a uniform." (= You should / It's expected).
- "He **is supposed to** arrive at 3." (= He should arrive at 3).
- "We **aren't supposed to** park here." (= We shouldn't / It's not allowed).

### 4. Past Reference ⏪

For events in the past, use **to have + past participle**:

- "He **is said to have worked** for the secret service." (People say he worked...).
- "She **is believed to have left** the city." (People believe she left...).

<GamePlaceholder id="sentenceBuilder" />

### 5. Common Mistakes ❌

- ❌ "He is said **be** rich." → ✅ "He is said **to be** rich."
- ❌ "It is said **he** is rich." → ✅ "It is said **that he** is rich."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>It is said/believed/thought that...</strong> = reporting what people say.</li>
    <li><strong>He is said/believed to...</strong> = same meaning, different structure.</li>
    <li><strong>Is supposed to</strong> = expected to / should.</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## It is said that / He is supposed to 📰

Diese Strukturen werden benutzt, um zu berichten, was **Leute sagen, glauben oder denken**, ohne genau zu sagen, wer.

### 1. Zwei Muster 📐

**Muster A:** It + Passiv + that + Satz
- "**It is said that** he is very rich."
- "**It is believed that** the earth is 4.5 billion years old."
- "**It is thought that** she left the country."

**Muster B:** Subjekt + Passiv + to + Verb
- "He **is said to be** very rich."
- "The earth **is believed to be** 4.5 billion years old."
- "She **is thought to have left** the country."

### 2. Häufig benutzte Verben 📝

| Verb | Muster A | Muster B |
|------|----------|----------|
| **say** | It is said that... | He is said to... |
| **believe** | It is believed that... | He is believed to... |
| **think** | It is thought that... | He is thought to... |
| **know** | It is known that... | He is known to... |
| **report** | It is reported that... | He is reported to... |
| **expect** | It is expected that... | He is expected to... |
| **suppose** | It is supposed that... | He is supposed to... |

### 3. Supposed to 🎯

**Is supposed to** hat eine spezielle zusätzliche Bedeutung: "sollte / wird erwartet":

- "You **are supposed to** wear a uniform." (= Du solltest / Es wird erwartet).
- "He **is supposed to** arrive at 3." (= Er sollte um 3 ankommen).
- "We **aren't supposed to** park here." (= Wir sollten nicht / Es ist nicht erlaubt).

### 4. Vergangenheitsbezug ⏪

Für Ereignisse in der Vergangenheit benutze **to have + Partizip Perfekt**:

- "He **is said to have worked** for the secret service." (Man sagt, er hat gearbeitet...).
- "She **is believed to have left** the city." (Man glaubt, sie hat die Stadt verlassen...).

<GamePlaceholder id="sentenceBuilder" />

### 5. Häufige Fehler ❌

- ❌ "He is said **be** rich." → ✅ "He is said **to be** rich."
- ❌ "It is said **he** is rich." → ✅ "It is said **that he** is rich."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>It is said/believed/thought that...</strong> = berichten, was Leute sagen.</li>
    <li><strong>He is said/believed to...</strong> = gleiche Bedeutung, andere Struktur.</li>
    <li><strong>Is supposed to</strong> = erwartet / sollte.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'It is said / Supposed to',
      description: 'Practice reporting structures.',
      checklist: [
        { text: "Write 3 'It is said that' sentences", checked: false },
        { text: "Rewrite them using 'He/She is said to'", checked: false },
        { text: "Write 3 'supposed to' sentences (obligation meaning)", checked: false }
      ]
    },
    de: {
      title: 'It is said / Supposed to',
      description: 'Übe Berichtsstrukturen.',
      checklist: [
        { text: "Schreibe 3 'It is said that' Sätze", checked: false },
        { text: "Schreibe sie um mit 'He/She is said to'", checked: false },
        { text: "Schreibe 3 'supposed to' Sätze (Verpflichtungs-Bedeutung)", checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
