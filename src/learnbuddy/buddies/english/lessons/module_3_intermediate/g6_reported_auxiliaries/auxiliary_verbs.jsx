import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: '"Are you going to the party?" "Yes, I ___."', de: '"Gehst du zur Party?" "Ja."' },
    words: ["am", "do", "will", "have"],
    correct: "am",
    explanation: { en: "Short answer repeats the auxiliary: are → I am.", de: "Kurzantwort wiederholt das Hilfsverb: are → I am." }
  },
  {
    prompt: { en: '"Will it rain?" "I hope ___."', de: '"Wird es regnen?" "Ich hoffe nicht."' },
    words: ["not", "it won't", "no", "don't"],
    correct: "not",
    explanation: { en: "I hope not / I think so – short forms with so/not.", de: "I hope not / I think so – Kurzformen mit so/not." }
  },
  {
    prompt: { en: '"She likes pizza." "So ___ I."', de: '"Sie mag Pizza." "Ich auch."' },
    words: ["do", "am", "like", "have"],
    correct: "do",
    explanation: { en: "So + auxiliary + subject = me too.", de: "So + Hilfsverb + Subjekt = ich auch." }
  }
];

const fixTheMistakeData = [
  {
    sentence: '"Do you like coffee?" "Yes, I like."',
    mistakeIndex: 7,
    correction: "do",
    explanation: { en: "Short answer: 'Yes, I do' – repeat the auxiliary, not the main verb.", de: "Kurzantwort: 'Yes, I do' – wiederhole das Hilfsverb, nicht das Hauptverb." }
  },
  {
    sentence: '"She works hard." "So work I."',
    mistakeIndex: 5,
    correction: "So do I",
    explanation: { en: "'So + auxiliary + subject': 'So do I', not 'So work I'.", de: "'So + Hilfsverb + Subjekt': 'So do I', nicht 'So work I'." }
  },
  {
    sentence: '"I don\'t like spiders." "Neither I do."',
    mistakeIndex: 5,
    correction: "Neither do I",
    explanation: { en: "'Neither + auxiliary + subject': 'Neither do I'.", de: "'Neither + Hilfsverb + Subjekt': 'Neither do I'." }
  }
];

const grammarRacerData = [
  {
    prompt: '"Have you been to Paris?" "Yes, I ___."',
    options: ["have", "do", "am"],
    correct: "have",
    explanation: "Short answer repeats: have."
  },
  {
    prompt: '"I can\'t swim." "Neither ___ I."',
    options: ["can", "do", "am"],
    correct: "can",
    explanation: "Neither + same auxiliary."
  },
  {
    prompt: '"Is it going to rain?" "I think ___."',
    options: ["so", "yes", "it will"],
    correct: "so",
    explanation: "I think so = I think it will."
  }
];

export const auxiliaryVerbs = {
  id: 'b1_g51',
  title: {
    en: 'Auxiliary Verbs / I think so',
    de: 'Hilfsverben / I think so'
  },
  description: {
    en: "Using auxiliaries in short answers, 'so do I / neither do I', and 'I think so / I hope not'.",
    de: "Hilfsverben in Kurzantworten, 'so do I / neither do I', und 'I think so / I hope not'."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Auxiliary Verbs / I think so 🔄

### 1. Short Answers with Auxiliaries ✅

In English, we repeat the **auxiliary verb** in short answers:

- "Do you like coffee?" – "Yes, I **do**." / "No, I **don't**."
- "Can she swim?" – "Yes, she **can**." / "No, she **can't**."
- "Have you been there?" – "Yes, I **have**."
- "Is he coming?" – "Yes, he **is**."

### 2. So do I / Neither do I (Agreement) 🤝

**Positive agreement:** So + auxiliary + subject
- "I like pizza." – "**So do I**." (= Me too)
- "She can swim." – "**So can I**."
- "He's tired." – "**So am I**."

**Negative agreement:** Neither/Nor + auxiliary + subject
- "I don't like spiders." – "**Neither do I**." (= Me neither)
- "She can't drive." – "**Neither can I**."
- "He hasn't been there." – "**Neither have I**."

### 3. I think so / I hope not 💭

We use **so** (positive) and **not** (negative) to avoid repeating:

| Positive | Negative |
|----------|----------|
| I **think so**. | I **don't think so**. / I think **not**. |
| I **hope so**. | I **hope not**. |
| I **guess so**. | I **guess not**. |
| I'm **afraid so**. | I'm **afraid not**. |
| I **suppose so**. | I **suppose not**. |

- "Will it rain?" – "I **hope not**." (I hope it won't rain).
- "Is she coming?" – "I **think so**." (I think she is coming).

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Emphasis with auxiliaries:</h3>
  <p>We can stress the auxiliary for emphasis:</p>
  <p>"I <strong>DO</strong> like your new haircut!" (emphasis on liking it)</p>
  <p>"She <strong>DID</strong> call you – you just didn't hear!"</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Common Mistakes ❌

- ❌ "So like I." → ✅ "**So do I**."
- ❌ "Neither I do." → ✅ "**Neither do I**."
- ❌ "Yes, I like." → ✅ "Yes, I **do**."

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Hilfsverben / I think so 🔄

### 1. Kurzantworten mit Hilfsverben ✅

Im Englischen wiederholen wir das **Hilfsverb** in Kurzantworten:

- "Do you like coffee?" – "Yes, I **do**." / "No, I **don't**."
- "Can she swim?" – "Yes, she **can**." / "No, she **can't**."
- "Have you been there?" – "Yes, I **have**."
- "Is he coming?" – "Yes, he **is**."

### 2. So do I / Neither do I (Zustimmung) 🤝

**Positive Zustimmung:** So + Hilfsverb + Subjekt
- "I like pizza." – "**So do I**." (= Ich auch)
- "She can swim." – "**So can I**."
- "He's tired." – "**So am I**."

**Negative Zustimmung:** Neither/Nor + Hilfsverb + Subjekt
- "I don't like spiders." – "**Neither do I**." (= Ich auch nicht)
- "She can't drive." – "**Neither can I**."
- "He hasn't been there." – "**Neither have I**."

### 3. I think so / I hope not 💭

Wir benutzen **so** (positiv) und **not** (negativ), um Wiederholung zu vermeiden:

| Positiv | Negativ |
|---------|---------|
| I **think so**. | I **don't think so**. / I think **not**. |
| I **hope so**. | I **hope not**. |
| I **guess so**. | I **guess not**. |
| I'm **afraid so**. | I'm **afraid not**. |
| I **suppose so**. | I **suppose not**. |

- "Will it rain?" – "I **hope not**." (Ich hoffe, es wird nicht regnen).
- "Is she coming?" – "I **think so**." (Ich denke, sie kommt).

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Betonung mit Hilfsverben:</h3>
  <p>Wir können das Hilfsverb zur Betonung betonen:</p>
  <p>"I <strong>DO</strong> like your new haircut!" (Betonung, dass es gefällt)</p>
  <p>"She <strong>DID</strong> call you – you just didn't hear!"</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Häufige Fehler ❌

- ❌ "So like I." → ✅ "**So do I**."
- ❌ "Neither I do." → ✅ "**Neither do I**."
- ❌ "Yes, I like." → ✅ "Yes, I **do**."

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Auxiliary Verbs',
      description: 'Practice short answers and agreement expressions.',
      checklist: [
        { text: 'Write 5 short answer exchanges', checked: false },
        { text: "Write 3 'So do I' and 3 'Neither do I' responses", checked: false },
        { text: "Use 'I think so / I hope not' in 3 mini-dialogues", checked: false }
      ]
    },
    de: {
      title: 'Hilfsverben',
      description: 'Übe Kurzantworten und Zustimmungsausdrücke.',
      checklist: [
        { text: 'Schreibe 5 Kurzantwort-Dialoge', checked: false },
        { text: "Schreibe 3 'So do I' und 3 'Neither do I' Antworten", checked: false },
        { text: "Benutze 'I think so / I hope not' in 3 Mini-Dialogen", checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
