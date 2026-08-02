import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I wish I ___ speak French. (but I can't)", de: "Ich wünschte, ich könnte Französisch sprechen. (aber ich kann es nicht)" },
    words: ["could", "can", "would", "will"],
    correct: "could",
    explanation: { en: "I wish + past tense for present wishes.", de: "I wish + Vergangenheit für gegenwärtige Wünsche." }
  },
  {
    prompt: { en: "I wish I ___ gone to the party last night.", de: "Ich wünschte, ich wäre gestern Abend zur Party gegangen." },
    words: ["had", "have", "would have", "was"],
    correct: "had",
    explanation: { en: "I wish + past perfect for past regrets.", de: "I wish + Past Perfect für vergangenes Bedauern." }
  },
  {
    prompt: { en: "I wish it ___ raining. (but it is raining now)", de: "Ich wünschte, es würde nicht regnen. (aber es regnet gerade)" },
    words: ["wasn't", "isn't", "won't be", "wouldn't"],
    correct: "wasn't",
    explanation: { en: "Wish + past simple for things we want to be different NOW.", de: "Wish + Past Simple für Dinge, die wir JETZT anders haben wollen." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I wish I can play the piano.",
    mistakeIndex: 3,
    correction: "could",
    explanation: { en: "After 'wish', use past tense: 'could' not 'can'.", de: "Nach 'wish' benutze Vergangenheit: 'could' nicht 'can'." }
  },
  {
    sentence: "I wish I didn't eat so much yesterday.",
    mistakeIndex: 3,
    correction: "hadn't eaten",
    explanation: { en: "For past regrets, use 'wish + past perfect': 'hadn't eaten'.", de: "Für vergangenes Bedauern benutze 'wish + Past Perfect': 'hadn't eaten'." }
  },
  {
    sentence: "I wish I am taller.",
    mistakeIndex: 3,
    correction: "were",
    explanation: { en: "After 'wish', use past simple: 'were' not 'am'.", de: "Nach 'wish' benutze Past Simple: 'were' nicht 'am'." }
  }
];

const grammarRacerData = [
  {
    prompt: "I wish I ___ more time. (present wish)",
    options: ["had", "have", "will have"],
    correct: "had",
    explanation: "Wish + past simple for present."
  },
  {
    prompt: "I wish I ___ studied harder. (past regret)",
    options: ["had", "have", "would"],
    correct: "had",
    explanation: "Wish + past perfect for past regret."
  },
  {
    prompt: "I wish it ___ so cold today.",
    options: ["weren't", "isn't", "won't be"],
    correct: "weren't",
    explanation: "Present wish → past simple."
  }
];

export const wishKnew = {
  id: 'b1_g41',
  title: {
    en: 'I wish I knew / I wish I had known',
    de: 'I wish I knew / I wish I had known'
  },
  description: {
    en: "Wishes about the present ('I wish I knew') and regrets about the past ('I wish I had known').",
    de: "Wünsche über die Gegenwart ('I wish I knew') und Bedauern über die Vergangenheit ('I wish I had known')."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## I wish I knew / I wish I had known 🌟

**Wish** is used when we want something to be **different** from reality.

### 1. Wish + Past Simple = Present Wishes 💭

We wish about something that is **not true now** but we want it to be:

- "I **wish I had** more free time." (I don't have enough).
- "I **wish I knew** the answer." (I don't know it).
- "I **wish I were** taller." (I'm not tall).
- "She **wishes** she **could** drive." (She can't).

**Structure:** Subject + wish(es) + **past simple**

### 2. Wish + Past Perfect = Past Regrets 😔

We regret something that **happened** (or didn't happen) in the past:

- "I **wish I had studied** harder." (I didn't study enough).
- "I **wish I hadn't said** that." (I said it, and I regret it).
- "She **wishes** she **had gone** to university." (She didn't go).

**Structure:** Subject + wish(es) + **had** + past participle

### 3. Wish + Would = Complaints / Requests 😤

We're annoyed about something and want it to change:

- "I **wish** you **would stop** making noise." (You keep making noise).
- "I **wish** it **would stop** raining." (I'm annoyed by the rain).
- "I **wish** he **would listen** to me." (He doesn't listen).

**Note:** Don't use 'wish + would' about yourself: ❌ "I wish I would..."

### 4. Summary Table 📊

| Form | Time | Example | Meaning |
|------|------|---------|---------|
| wish + **past simple** | Present | "I wish I **knew**..." | Want something different NOW |
| wish + **past perfect** | Past | "I wish I **had known**..." | Regret about the PAST |
| wish + **would** | Future | "I wish it **would stop**..." | Complaint / want change |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Wish + were</h3>
  <p>After 'wish', we often use <strong>were</strong> instead of 'was' (similar to Type 2 conditionals):</p>
  <ul className="list-disc list-inside">
    <li>"I wish I <strong>were</strong> rich." (formal)</li>
    <li>"I wish I <strong>was</strong> rich." (informal but common)</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 5. Common Mistakes ❌

**Mistake 1:** Using present tense after wish.
- ❌ "I wish I **have** a car."
- ✅ "I wish I **had** a car."

**Mistake 2:** Using past simple for past regrets.
- ❌ "I wish I **didn't eat** so much yesterday."
- ✅ "I wish I **hadn't eaten** so much yesterday."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Wish + past simple</strong> = present wish (I wish I knew).</li>
    <li><strong>Wish + past perfect</strong> = past regret (I wish I had known).</li>
    <li><strong>Wish + would</strong> = complaint (I wish you would stop).</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## I wish I knew / I wish I had known 🌟

**Wish** wird benutzt, wenn wir etwas **anders** haben wollen als die Realität.

### 1. Wish + Past Simple = Gegenwärtige Wünsche 💭

Wir wünschen etwas, das **jetzt nicht wahr ist**, aber wir wollen es:

- "I **wish I had** more free time." (Ich habe nicht genug).
- "I **wish I knew** the answer." (Ich weiß es nicht).
- "I **wish I were** taller." (Ich bin nicht groß).
- "She **wishes** she **could** drive." (Sie kann nicht).

**Struktur:** Subjekt + wish(es) + **Past Simple**

### 2. Wish + Past Perfect = Vergangenes Bedauern 😔

Wir bedauern etwas, das in der Vergangenheit **passiert ist** (oder nicht):

- "I **wish I had studied** harder." (Ich habe nicht genug gelernt).
- "I **wish I hadn't said** that." (Ich habe es gesagt und bereue es).
- "She **wishes** she **had gone** to university." (Sie ist nicht gegangen).

**Struktur:** Subjekt + wish(es) + **had** + Partizip Perfekt

### 3. Wish + Would = Beschwerden / Bitten 😤

Wir sind genervt und wollen, dass sich etwas ändert:

- "I **wish** you **would stop** making noise." (Du machst immer Lärm).
- "I **wish** it **would stop** raining." (Der Regen nervt mich).
- "I **wish** he **would listen** to me." (Er hört nicht zu).

**Hinweis:** Benutze 'wish + would' nicht über dich selbst: ❌ "I wish I would..."

### 4. Übersichtstabelle 📊

| Form | Zeit | Beispiel | Bedeutung |
|------|------|----------|-----------|
| wish + **Past Simple** | Gegenwart | "I wish I **knew**..." | Jetzt etwas anders wollen |
| wish + **Past Perfect** | Vergangenheit | "I wish I **had known**..." | Bedauern über VERGANGENHEIT |
| wish + **would** | Zukunft | "I wish it **would stop**..." | Beschwerde / Änderung wollen |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Wish + were</h3>
  <p>Nach 'wish' benutzen wir oft <strong>were</strong> statt 'was' (ähnlich wie Typ-2-Konditionalsätze):</p>
  <ul className="list-disc list-inside">
    <li>"I wish I <strong>were</strong> rich." (formal)</li>
    <li>"I wish I <strong>was</strong> rich." (informell aber üblich)</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 5. Häufige Fehler ❌

**Fehler 1:** Gegenwart nach wish benutzen.
- ❌ "I wish I **have** a car."
- ✅ "I wish I **had** a car."

**Fehler 2:** Past Simple für vergangenes Bedauern benutzen.
- ❌ "I wish I **didn't eat** so much yesterday."
- ✅ "I wish I **hadn't eaten** so much yesterday."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Wish + Past Simple</strong> = gegenwärtiger Wunsch (I wish I knew).</li>
    <li><strong>Wish + Past Perfect</strong> = vergangenes Bedauern (I wish I had known).</li>
    <li><strong>Wish + would</strong> = Beschwerde (I wish you would stop).</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Wish sentences',
      description: 'Practice wishes about present and past.',
      checklist: [
        { text: 'Write 3 present wishes (wish + past simple)', checked: false },
        { text: 'Write 3 past regrets (wish + past perfect)', checked: false },
        { text: 'Write 2 complaints (wish + would)', checked: false }
      ]
    },
    de: {
      title: 'Wish-Sätze',
      description: 'Übe Wünsche über Gegenwart und Vergangenheit.',
      checklist: [
        { text: 'Schreibe 3 gegenwärtige Wünsche (wish + Past Simple)', checked: false },
        { text: 'Schreibe 3 vergangene Bedauern (wish + Past Perfect)', checked: false },
        { text: 'Schreibe 2 Beschwerden (wish + would)', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
