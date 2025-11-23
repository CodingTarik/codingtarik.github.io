import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I was so tired, I ___ slept for a week.", de: "Ich war so müde, ich hätte eine Woche schlafen können." },
    words: ["could have", "can have", "could", "should"],
    correct: "could have",
    explanation: { en: "Could have done = Past possibility (didn't happen).", de: "Could have done = Vergangene Möglichkeit (nicht passiert)." }
  },
  {
    prompt: { en: "She ___ come to the party, but she stayed home.", de: "Sie hätte zur Party kommen können, aber sie blieb zu Hause." },
    words: ["could have", "can have", "could", "would"],
    correct: "could have",
    explanation: { en: "Past possibility that was not used.", de: "Vergangene Möglichkeit, die nicht genutzt wurde." }
  },
  {
    prompt: { en: "I don't know where he is. He ___ got stuck in traffic.", de: "Ich weiß nicht, wo er ist. Er könnte im Stau stecken geblieben sein." },
    words: ["could have", "can have", "should have", "must have"],
    correct: "could have",
    explanation: { en: "Past possibility/guess (maybe he did).", de: "Vergangene Möglichkeit/Vermutung (vielleicht hat er)." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I could pass the exam, but I didn't study.",
    mistakeIndex: 1,
    correction: "could have passed",
    explanation: { en: "For a past opportunity that didn't happen, use 'could have done'. 'Could pass' is general ability or future.", de: "Für eine vergangene Gelegenheit, die nicht genutzt wurde, benutze 'could have done'." }
  },
  {
    sentence: "She can have left her phone at home.",
    mistakeIndex: 1,
    correction: "could have",
    explanation: { en: "We don't use 'can have' for past probability. Use 'could have' or 'may/might have'.", de: "Wir benutzen 'can have' nicht für vergangene Wahrscheinlichkeit. Benutze 'could have' oder 'may/might have'." }
  },
  {
    sentence: "I was so hungry, I could eat a horse.",
    mistakeIndex: 6,
    correction: "could have eaten",
    explanation: { en: "If talking about the past moment ('was hungry'), use 'could have eaten'.", de: "Wenn man über den vergangenen Moment spricht ('was hungry'), benutze 'could have eaten'." }
  }
];

const grammarRacerData = [
  {
    prompt: "Why did you stay at a hotel? You ___ with me!",
    options: ["could have stayed", "could stay", "can stay"],
    correct: "could have stayed",
    explanation: "Past opportunity (you didn't do it)."
  },
  {
    prompt: "He is not here. He ___ forgotten.",
    options: ["could have", "can have", "could"],
    correct: "could have",
    explanation: "Possibility/Guess about past."
  },
  {
    prompt: "I ___ helped you, why didn't you ask?",
    options: ["could have", "can have", "could"],
    correct: "could have",
    explanation: "I had the ability/willingness in the past."
  }
];

export const couldDoHaveDone = {
  id: 'b1_g27',
  title: {
    en: 'Could do vs. Could have done',
    de: 'Could do vs. Could have done'
  },
  description: {
    en: "Past ability vs. Past possibility (that didn't happen). 'I could swim' vs 'I could have won'.",
    de: "Vergangene Fähigkeit vs. Vergangene Möglichkeit (nicht passiert). 'Ich konnte schwimmen' vs 'Ich hätte gewinnen können'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Could do vs. Could have done 🔙🤔

The word **could** has many meanings. The difference between the simple form and the perfect form ("have done") is crucial for talking about the past.

### 1. Could (do) = Past Ability / Possibility 💪

We use **could** (Past of 'can') to talk about **general ability** in the past.

- "When I was young, I **could run** very fast." (I had the ability).
- "He **could speak** three languages."

Or for **present/future possibility**:
- "We **could go** to the cinema tonight." (Suggestion/Possibility).

### 2. Could have (done) = Past Opportunity (Missed) 🚪🚫

We use **could have + past participle** to say that we had the ability or opportunity to do something in the past, but **we didn't do it**.

- "I **could have gone** to the party, but I was too tired." (I had the chance, but I didn't go).
- "Why did you walk? You **could have taken** a taxi." (Possibility existed, but wasn't used).
- "I **could have won** the race, but I fell."

**Key Idea:** Something was possible, but didn't happen.

### 3. Could have (done) = Past Guess / Possibility 🕵️‍♀️

We also use it to guess about what happened in the past (Possibility).

- "Where is John?" - "I don't know. He **could have gone** home." (It is possible that he went home).
- "She **could have lost** her phone." (It's a possibility).

In this meaning, it is similar to **might have** or **may have**.

### 4. Comparison 🔄

| Form | Example | Meaning |
|------|---------|---------|
| **Could run** | "I **could run** fast when I was 10." | General ability in the past. (I did it). |
| **Could have run** | "I **could have run** faster, but I was lazy." | Opportunity/Ability existed, but I didn't do it. |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Couldn't have done:</h3>
  <p>The negative form "I couldn't have done it" means it was <strong>impossible</strong>.</p>
  <p>"I <strong>couldn't have arrived</strong> earlier. The traffic was terrible." (Impossible to be earlier).</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 5. Common Mistakes ❌

**Mistake 1:** Using 'can have'.
- ❌ "He **can have** missed the bus." (Incorrect grammar).
- ✅ "He **could have** missed the bus." (Correct).

**Mistake 2:** Using 'could do' for missed opportunity.
- ❌ "I **could buy** that house, but I didn't." (Sounds like general ability).
- ✅ "I **could have bought** that house, but I didn't." (Specific missed opportunity).

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>**Could do**: General past ability ("I could swim").</li>
    <li>**Could have done**: Opportunity that wasn't used ("I could have helped").</li>
    <li>**Could have done**: Guess about past ("He could have forgotten").</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Could vs. Could have**
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 What could have happened?</h3>
  <p className="mb-4">Write sentences about regrets or missed chances:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>"I failed the test, but I ___ (study) more." (I could have studied...)</li>
    <li>"We stayed home, but we ___ (go) to the beach."</li>
    <li>"I didn't buy the shoes. Now they are sold out. I ___ (buy) them."</li>
  </ol>
</div>
`,
    de: `
## Could do vs. Could have done 🔙🤔

Das Wort **could** hat viele Bedeutungen. Der Unterschied zwischen der einfachen Form und der Perfekt-Form ("have done") ist entscheidend, wenn man über die Vergangenheit spricht.

### 1. Could (do) = Vergangene Fähigkeit / Möglichkeit 💪

Wir benutzen **could** (Vergangenheit von 'can'), um über **generelle Fähigkeiten** in der Vergangenheit zu sprechen.

- "When I was young, I **could run** very fast." (Ich hatte die Fähigkeit).
- "He **could speak** three languages."

Oder für **gegenwärtige/zukünftige Möglichkeit**:
- "We **could go** to the cinema tonight." (Vorschlag/Möglichkeit).

### 2. Could have (done) = Vergangene Gelegenheit (Verpasst) 🚪🚫

Wir benutzen **could have + Partizip Perfekt**, um zu sagen, dass wir die Fähigkeit oder Gelegenheit hatten, etwas in der Vergangenheit zu tun, aber **wir haben es nicht getan**.

- "I **could have gone** to the party, but I was too tired." (Ich hatte die Chance, aber ich ging nicht).
- "Why did you walk? You **could have taken** a taxi." (Möglichkeit existierte, wurde aber nicht genutzt).
- "I **could have won** the race, but I fell."

**Schlüsselidee:** Etwas war möglich, passierte aber nicht.

### 3. Could have (done) = Vergangene Vermutung 🕵️‍♀️

Wir benutzen es auch, um zu raten, was in der Vergangenheit passiert ist (Wahrscheinlichkeit).

- "Where is John?" - "I don't know. He **could have gone** home." (Es ist möglich, dass er nach Hause ging).
- "She **could have lost** her phone." (Es ist eine Möglichkeit).

In dieser Bedeutung ist es ähnlich wie **might have** oder **may have**.

### 4. Vergleich 🔄

| Form | Beispiel | Bedeutung |
|------|---------|---------|
| **Could run** | "I **could run** fast when I was 10." | Generelle Fähigkeit früher. (Ich tat es). |
| **Could have run** | "I **could have run** faster, but I was lazy." | Gelegenheit/Fähigkeit war da, aber ich tat es nicht. |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Couldn't have done:</h3>
  <p>Die negative Form "I couldn't have done it" bedeutet, es war <strong>unmöglich</strong>.</p>
  <p>"I <strong>couldn't have arrived</strong> earlier. The traffic was terrible." (Unmöglich, früher zu sein).</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 5. Häufige Fehler ❌

**Fehler 1:** 'Can have' benutzen.
- ❌ "He **can have** missed the bus." (Falsche Grammatik).
- ✅ "He **could have** missed the bus." (Richtig).

**Fehler 2:** 'Could do' für verpasste Chancen benutzen.
- ❌ "I **could buy** that house, but I didn't." (Klingt nach genereller Fähigkeit).
- ✅ "I **could have bought** that house, but I didn't." (Spezifische verpasste Chance).

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>**Could do**: Generelle Fähigkeit früher ("I could swim").</li>
    <li>**Could have done**: Gelegenheit, die nicht genutzt wurde ("I could have helped").</li>
    <li>**Could have done**: Vermutung über Vergangenheit ("He could have forgotten").</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Could vs. Could have**
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Was hätte passieren können?</h3>
  <p className="mb-4">Schreibe Sätze über Reue oder verpasste Chancen:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>"I failed the test, but I ___ (study) more." (I could have studied...)</li>
    <li>"We stayed home, but we ___ (go) to the beach."</li>
    <li>"I didn't buy the shoes. Now they are sold out. I ___ (buy) them."</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Could have done',
      description: 'Schreibe Sätze über verpasste Gelegenheiten.',
      checklist: [
        { text: 'Satz mit "I could have... but I didn\'t"', checked: false },
        { text: 'Satz über eine Vermutung ("He could have...")', checked: false },
        { text: 'Verneinung ("I couldn\'t have done better")', checked: false }
      ]
    },
    en: {
      title: 'Could have done',
      description: 'Write sentences about missed opportunities.',
      checklist: [
        { text: 'Sentence with "I could have... but I didn\'t"', checked: false },
        { text: 'Sentence about a guess ("He could have...")', checked: false },
        { text: 'Negative ("I couldn\'t have done better")', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

