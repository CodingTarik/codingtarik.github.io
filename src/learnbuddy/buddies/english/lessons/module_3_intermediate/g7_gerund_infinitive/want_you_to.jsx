import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  { prompt: { en: "I want you ___ help me.", de: "Ich will, dass du mir hilfst." }, words: ["to", "for", "that", "-ing"], correct: "to", explanation: { en: "want + object + to + verb.", de: "want + Objekt + to + Verb." } },
  { prompt: { en: "She asked me ___ wait.", de: "Sie bat mich zu warten." }, words: ["to", "for", "that", "-"], correct: "to", explanation: { en: "ask + object + to + verb.", de: "ask + Objekt + to + Verb." } },
  { prompt: { en: "They expected us ___ arrive early.", de: "Sie erwarteten, dass wir früh ankommen." }, words: ["to", "for", "that", "-"], correct: "to", explanation: { en: "expect + object + to + verb.", de: "expect + Objekt + to + Verb." } }
];

const fixTheMistakeData = [
  { sentence: "I want that you come.", mistakeIndex: 2, correction: "you to come", explanation: { en: "Don't use 'that': 'want + object + to + verb'.", de: "Benutze kein 'that': 'want + Objekt + to + Verb'." } },
  { sentence: "She told me wait.", mistakeIndex: 3, correction: "to wait", explanation: { en: "After tell + object, use 'to': 'told me to wait'.", de: "Nach tell + Objekt, benutze 'to': 'told me to wait'." } },
  { sentence: "He advised me don't go.", mistakeIndex: 3, correction: "not to go", explanation: { en: "Negative: 'advised me NOT TO go'.", de: "Negativ: 'advised me NOT TO go'." } }
];

const grammarRacerData = [
  { prompt: "I'd like you ___ come to dinner.", options: ["to", "for", "-"], correct: "to", explanation: "would like + object + to + verb." },
  { prompt: "She persuaded him ___ change his mind.", options: ["to", "for", "that"], correct: "to", explanation: "persuade + object + to + verb." },
  { prompt: "They warned us ___ go there.", options: ["not to", "don't", "to not"], correct: "not to", explanation: "warn + object + not to + verb." }
];

export const wantYouTo = {
  id: 'b1_g55',
  title: { en: 'Verb + Object + to (infinitive)', de: 'Verb + Objekt + to (Infinitiv)' },
  description: { en: "Patterns like 'I want you to help' / 'She asked me to wait'.", de: "Muster wie 'I want you to help' / 'She asked me to wait'." },
  components: { sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />, fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />, grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} /> },
  content: {
    en: `
## Verb + Object + to (Infinitive) 📋

### 1. The Pattern 📐

Many verbs follow the pattern: **verb + object + to + infinitive**

- "I **want** you **to help** me."
- "She **asked** me **to wait**."
- "They **told** us **to be** quiet."

### 2. Common Verbs with this Pattern 📝

| Verb | Example |
|------|---------|
| **want** | I want you to come. |
| **ask** | She asked me to help. |
| **tell** | He told me to stop. |
| **expect** | They expect us to work hard. |
| **would like** | I'd like you to meet my friend. |
| **advise** | The doctor advised me to rest. |
| **encourage** | She encouraged me to apply. |
| **invite** | They invited us to stay. |
| **persuade** | He persuaded me to change my mind. |
| **remind** | Remind me to call her. |
| **warn** | They warned us to be careful. |
| **allow/permit** | They don't allow us to park here. |
| **force** | Nobody forced you to do this. |
| **teach** | She taught me to cook. |
| **order** | The officer ordered them to stop. |

### 3. Negative: not to ❌

- "I told him **not to** worry."
- "She asked me **not to** tell anyone."
- ❌ "She asked me **to not** tell anyone." (Less common)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Don't use 'that' with 'want':</h3>
  <ul className="list-disc list-inside">
    <li>❌ "I want <strong>that</strong> you come."</li>
    <li>✅ "I want <strong>you to</strong> come."</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Common Mistakes ❌
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Verb + Objekt + to (Infinitiv) 📋

### 1. Das Muster 📐

Viele Verben folgen dem Muster: **Verb + Objekt + to + Infinitiv**

- "I **want** you **to help** me."
- "She **asked** me **to wait**."
- "They **told** us **to be** quiet."

### 2. Häufige Verben mit diesem Muster 📝

| Verb | Beispiel |
|------|----------|
| **want** | I want you to come. |
| **ask** | She asked me to help. |
| **tell** | He told me to stop. |
| **expect** | They expect us to work hard. |
| **would like** | I'd like you to meet my friend. |
| **advise** | The doctor advised me to rest. |
| **encourage** | She encouraged me to apply. |
| **invite** | They invited us to stay. |
| **persuade** | He persuaded me to change my mind. |
| **remind** | Remind me to call her. |
| **warn** | They warned us to be careful. |
| **allow/permit** | They don't allow us to park here. |
| **force** | Nobody forced you to do this. |
| **teach** | She taught me to cook. |
| **order** | The officer ordered them to stop. |

### 3. Negativ: not to ❌

- "I told him **not to** worry."
- "She asked me **not to** tell anyone."

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Kein 'that' mit 'want':</h3>
  <ul className="list-disc list-inside">
    <li>❌ "I want <strong>that</strong> you come."</li>
    <li>✅ "I want <strong>you to</strong> come."</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Häufige Fehler ❌
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: { en: { title: 'Verb + Object + to', description: 'Practice the pattern.', checklist: [{ text: 'Write 5 sentences with different verbs from the list', checked: false }, { text: 'Write 3 negative sentences (not to)', checked: false }, { text: 'Create a mini dialogue using ask/tell/want + object + to', checked: false }] }, de: { title: 'Verb + Objekt + to', description: 'Übe das Muster.', checklist: [{ text: 'Schreibe 5 Sätze mit verschiedenen Verben aus der Liste', checked: false }, { text: 'Schreibe 3 negative Sätze (not to)', checked: false }, { text: 'Erstelle einen Mini-Dialog mit ask/tell/want + Objekt + to', checked: false }] } },
  quiz: { en: [], de: [] }
};
