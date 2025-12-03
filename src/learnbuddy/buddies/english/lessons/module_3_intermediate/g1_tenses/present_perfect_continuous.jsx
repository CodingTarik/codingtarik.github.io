import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ waiting for two hours.", de: "Ich warte schon seit zwei Stunden." },
    words: ["have", "been", "am", "was"],
    correct: "have been",
    explanation: { en: "Present Perfect Continuous: have/has been + -ing. 'I have been waiting'.", de: "Present Perfect Continuous: have/has been + -ing. 'I have been waiting'." }
  },
  {
    prompt: { en: "It ___ been raining all day.", de: "Es regnet schon den ganzen Tag." },
    words: ["has", "have", "is", "was"],
    correct: "has",
    explanation: { en: "It has been raining. (Action started in past, continues now).", de: "Es regnet schon. (Handlung begann in der Vergangenheit, dauert an)." }
  },
  {
    prompt: { en: "How long ___ you been learning English?", de: "Wie lange lernst du schon Englisch?" },
    words: ["have", "are", "did", "do"],
    correct: "have",
    explanation: { en: "How long have you been...? (Duration up to now).", de: "Wie lange ... schon? (Dauer bis jetzt)." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I am waiting here for two hours.",
    mistakeIndex: 1,
    correction: "have been",
    explanation: { en: "Use Present Perfect Continuous for duration up to now ('for two hours'), not Present Continuous.", de: "Benutze Present Perfect Continuous für Dauer bis jetzt, nicht Present Continuous." }
  },
  {
    sentence: "She has been worked here since 2010.",
    mistakeIndex: 3,
    correction: "working",
    explanation: { en: "Structure: have/has been + -ING (working).", de: "Struktur: have/has been + -ING (working)." }
  },
  {
    sentence: "It is raining all day.",
    mistakeIndex: 1,
    correction: "has been",
    explanation: { en: "If it started in the past and is still happening (all day), use 'has been raining'.", de: "Wenn es in der Vergangenheit begann und immer noch passiert, benutze 'has been raining'." }
  }
];

const grammarRacerData = [
  {
    prompt: "I ___ running for 30 minutes.",
    options: ["have been", "am", "was"],
    correct: "have been",
    explanation: "Duration up to now: have been + -ing"
  },
  {
    prompt: "She ___ been sleeping since noon.",
    options: ["has", "have", "is"],
    correct: "has",
    explanation: "She has been..."
  },
  {
    prompt: "You look tired. Have you ___ working hard?",
    options: ["been", "be", "being"],
    correct: "been",
    explanation: "Have you been working...?"
  }
];

export const presentPerfectContinuous = {
  id: 'b1_g9',
  title: {
    en: 'Present Perfect Continuous (I have been doing)',
    de: 'Present Perfect Continuous (Verlaufsform)'
  },
  description: {
    en: "Focus on activity and duration. 'I have been waiting for an hour'.",
    de: "Fokus auf Aktivität und Dauer. 'Ich warte schon seit einer Stunde'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Present Perfect Continuous: Activity & Duration ⏳🏃

The **Present Perfect Continuous** connects the past with the present. It emphasizes the **activity** itself or its **duration**.

### 1. Structure 🏗️

**have / has + been + verb-ing**

- I **have been working**.
- She **has been sleeping**.
- We **have been waiting**.

### 2. Use Case 1: Activity that has recently stopped or just stopped 🛑

You can see the result now.
- "You're out of breath. **Have you been running**?" (Result: out of breath. Activity: running).
- "Why are your clothes dirty?" - "I **have been gardening**."
- "I'm tired. I **have been working** very hard."

### 3. Use Case 2: Activity continuing up to now (Duration) ⏱️

It started in the past and is still happening (or just finished). Often with **how long**, **for**, **since**.
- "It **has been raining** for two hours." (It is still raining).
- "How long **have you been learning** English?" (You are still learning).
- "She **has been watching** TV all day."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Comparison:</h3>
  <p><strong>Present Continuous:</strong> "I am working now." (Action happening right now)</p>
  <p><strong>Present Perfect Continuous:</strong> "I have been working for 3 hours." (Duration up to now)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Common Mistakes ❌

**Mistake 1:** Using Present Continuous for duration.
- ❌ "I **am waiting** for two hours." (Wrong! Sounds like 'I am waiting' is my name or permanent state).
- ✅ "I **have been waiting** for two hours." (Correct! Duration up to now).

**Mistake 2:** Forgetting 'been'.
- ❌ "I **have working** here since 2010."
- ✅ "I **have been working** here since 2010."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Structure: **have/has been + -ing**</li>
    <li>Focus: The **activity** or **duration**.</li>
    <li>Keywords: **How long**, **for**, **since**, **lately**, **all day**.</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Present Perfect Continuous**
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 How long have you been...?</h3>
  <p className="mb-4">Answer these questions:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>How long have you been learning English?</li>
    <li>What have you been doing today?</li>
    <li>Why are you tired? (I have been...)</li>
  </ol>
</div>
`,
    de: `
## Present Perfect Continuous: Aktivität & Dauer ⏳🏃

Das **Present Perfect Continuous** verbindet Vergangenheit mit Gegenwart. Es betont die **Aktivität** selbst oder ihre **Dauer**.

### 1. Struktur 🏗️

**have / has + been + verb-ing**

- I **have been working**. (Ich habe gearbeitet / arbeite schon...)
- She **has been sleeping**. (Sie hat geschlafen / schläft schon...)
- We **have been waiting**. (Wir haben gewartet / warten schon...)

### 2. Fall 1: Aktivität, die kürzlich aufhörte 🛑

Man sieht das Ergebnis jetzt.
- "Du bist außer Atem. **Bist du gerannt**?" (Ergebnis: außer Atem. Aktivität: rennen).
- "Warum sind deine Kleider schmutzig?" - "Ich **habe im Garten gearbeitet**."
- "Ich bin müde. Ich **habe** sehr hart **gearbeitet**."

### 3. Fall 2: Aktivität dauert bis jetzt an (Dauer) ⏱️

Es begann in der Vergangenheit und passiert immer noch. Oft mit **how long**, **for**, **since**.
- "It **has been raining** for two hours." (Es regnet seit zwei Stunden - und immer noch).
- "How long **have you been learning** English?" (Wie lange lernst du schon Englisch?).
- "She **has been watching** TV all day." (Sie schaut schon den ganzen Tag fern).

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Vergleich:</h3>
  <p><strong>Present Continuous:</strong> "I am working now." (Jetzt gerade)</p>
  <p><strong>Present Perfect Continuous:</strong> "I have been working for 3 hours." (Dauer bis jetzt)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Häufige Fehler ❌

**Fehler 1:** Present Continuous für Dauer benutzen.
- ❌ "I **am waiting** for two hours." (Falsch im Englischen!)
- ✅ "I **have been waiting** for two hours." (Richtig!)

**Fehler 2:** 'Been' vergessen.
- ❌ "I **have working** here since 2010."
- ✅ "I **have been working** here since 2010."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Struktur: **have/has been + -ing**</li>
    <li>Fokus: Die **Aktivität** oder **Dauer**.</li>
    <li>Schlüsselwörter: **How long**, **for**, **since**, **lately**, **all day**.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Present Perfect Continuous**
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Wie lange schon...?</h3>
  <p className="mb-4">Beantworte diese Fragen:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>How long have you been learning English?</li>
    <li>What have you been doing today?</li>
    <li>Why are you tired? (I have been...)</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Present Perfect Continuous',
      description: 'Schreibe Sätze über Aktivitäten und Dauer.',
      checklist: [
        { text: 'Satz mit "I have been... for"', checked: false },
        { text: 'Frage mit "How long have you been...?"', checked: false },
        { text: 'Satz über ein sichtbares Ergebnis ("My hands are dirty because...")', checked: false }
      ]
    },
    en: {
      title: 'Present Perfect Continuous',
      description: 'Write sentences about activities and duration.',
      checklist: [
        { text: 'Sentence with "I have been... for"', checked: false },
        { text: 'Question with "How long have you been...?"', checked: false },
        { text: 'Sentence about a visible result ("My hands are dirty because...")', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


