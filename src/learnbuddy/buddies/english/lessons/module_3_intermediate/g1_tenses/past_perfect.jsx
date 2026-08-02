import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "When I arrived, the train ___ left.", de: "Als ich ankam, war der Zug schon abgefahren." },
    words: ["had", "has", "was", "did"],
    correct: "had",
    explanation: { en: "Past Perfect: had + past participle. Action happened BEFORE another past action.", de: "Past Perfect: had + Partizip Perfekt. Handlung passierte VOR einer anderen Handlung." }
  },
  {
    prompt: { en: "She was hungry because she ___ not eaten.", de: "Sie war hungrig, weil sie nichts gegessen hatte." },
    words: ["had", "has", "did", "was"],
    correct: "had",
    explanation: { en: "Had not eaten (before she was hungry).", de: "Had not eaten (bevor sie hungrig war)." }
  },
  {
    prompt: { en: "I realized I ___ seen the movie before.", de: "Ich bemerkte, dass ich den Film schon gesehen hatte." },
    words: ["had", "have", "was", "did"],
    correct: "had",
    explanation: { en: "Seen before the moment I realized.", de: "Gesehen vor dem Moment, als ich es bemerkte." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "When I arrived, the train has left.",
    mistakeIndex: 5,
    correction: "had left",
    explanation: { en: "Use 'had left' (Past Perfect) because it happened BEFORE I arrived (Past Simple).", de: "Benutze 'had left', weil es VOR meiner Ankunft passierte." }
  },
  {
    sentence: "I was happy because I pass the exam.",
    mistakeIndex: 5,
    correction: "had passed",
    explanation: { en: "The passing happened BEFORE I was happy. Use Past Perfect.", de: "Das Bestehen passierte VOR dem Glücklichsein. Benutze Past Perfect." }
  },
  {
    sentence: "She told me she bought a new car.",
    mistakeIndex: 5,
    correction: "had bought",
    explanation: { en: "She bought it BEFORE she told me. 'had bought'.", de: "Sie kaufte es BEVOR sie es mir erzählte. 'had bought'." }
  }
];

const grammarRacerData = [
  {
    prompt: "I arrived at the party, but my friends ___ gone.",
    options: ["had", "have", "were"],
    correct: "had",
    explanation: "Had gone (before I arrived)."
  },
  {
    prompt: "He ___ never been to London before 2010.",
    options: ["had", "has", "was"],
    correct: "had",
    explanation: "Had been (Past Perfect)."
  },
  {
    prompt: "The house was quiet because everyone ___ to bed.",
    options: ["had gone", "went", "has gone"],
    correct: "had gone",
    explanation: "Had gone (before it was quiet)."
  }
];

export const pastPerfect = {
  id: 'b1_g15',
  title: {
    en: 'Past Perfect (I had done)',
    de: 'Past Perfect (Vorvergangenheit)'
  },
  description: {
    en: "The 'past before the past'. 'When I arrived, the train had left'.",
    de: "Die 'Vergangenheit vor der Vergangenheit'. 'Als ich ankam, war der Zug abgefahren'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Past Perfect: The Past Before the Past 🔙🔙

The **Past Perfect** allows us to go back further in time. It makes it clear that one action happened **before** another past action.

### 1. Structure 🏗️

**had + past participle (done/gone/seen)**

- I **had finished**.
- She **had left**.
- They **had eaten**.

The auxiliary verb is always **had** (never have/has).

### 2. When to use it? 🕰️

Imagine a timeline:
1. **Past Action 1 (Earlier):** The train left (at 8:00).
2. **Past Action 2 (Later):** I arrived at the station (at 8:10).
3. **Now:** I am telling the story.

"When I **arrived** (Past Simple) at the station, the train **had left** (Past Perfect)."

If I say "When I arrived, the train left", it means these things happened at the same time (or in sequence). But **had left** means it was *already* gone.

### 3. Common Contexts 📖

**Reasons in the past:**
- "I was hungry (Past) because I **had not eaten** (Past Perfect)."
- "She was tired because she **had worked** hard."

**Realizations:**
- "I realized that I **had lost** my wallet." (Lost it before I realized).
- "He knew that he **had seen** her before."

**Reported Speech:**
- "She said that she **had bought** a car." (Originally: "I have bought a car").

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Past Simple vs. Past Perfect:</h3>
  <p><strong>Comparison:</strong></p>
  <p>1. "When I got home, my wife cooked dinner." (She started cooking <em>after</em> I arrived).</p>
  <p>2. "When I got home, my wife <strong>had cooked</strong> dinner." (Dinner was ready <em>before</em> I arrived).</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Common Mistakes ❌

**Mistake 1:** Using Past Simple when sequence matters.
- ❌ "I was hungry because I didn't eat." (Acceptable in spoken English, but Past Perfect is precise).
- ✅ "I was hungry because I **hadn't eaten**." (Better).

**Mistake 2:** Confusing 'had' and 'have'.
- ❌ "When I arrived, he **has** left." (Wrong! We are in the past).
- ✅ "When I arrived, he **had** left." (Correct!).

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Structure: **had + past participle**.</li>
    <li>Meaning: **Action BEFORE another past action**.</li>
    <li>Keywords: **already**, **before**, **by the time**, **after**.</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Past Perfect**
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 The Past Before the Past</h3>
  <p className="mb-4">Complete the sentences:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>I couldn't enter the house because I ___ (lose) my keys.</li>
    <li>When I turned on the TV, the match ___ (already/finish).</li>
    <li>She told me that she ___ (never/be) to Paris.</li>
  </ol>
</div>
`,
    de: `
## Past Perfect: Die Vorvergangenheit 🔙🔙

Das **Past Perfect** erlaubt uns, weiter in die Zeit zurückzugehen. Es macht klar, dass eine Handlung **vor** einer anderen Handlung in der Vergangenheit passierte.

### 1. Struktur 🏗️

**had + Partizip Perfekt (done/gone/seen)**

- I **had finished**.
- She **had left**.
- They **had eaten**.

Das Hilfsverb ist immer **had** (niemals have/has).

### 2. Wann benutzt man es? 🕰️

Stell dir einen Zeitstrahl vor:
1. **Vergangene Handlung 1 (Früher):** Der Zug fuhr ab (um 8:00).
2. **Vergangene Handlung 2 (Später):** Ich kam am Bahnhof an (um 8:10).
3. **Jetzt:** Ich erzähle die Geschichte.

"When I **arrived** (Past Simple) at the station, the train **had left** (Past Perfect)." (Als ich ankam, war der Zug [bereits] abgefahren).

Wenn ich sage "When I arrived, the train left", bedeutet das, dass es gleichzeitig oder nacheinander passierte. Aber **had left** bedeutet, er war *schon* weg.

### 3. Häufige Kontexte 📖

**Gründe in der Vergangenheit:**
- "I was hungry because I **had not eaten**." (Ich war hungrig, weil ich nicht gegessen *hatte*).
- "She was tired because she **had worked** hard."

**Erkenntnisse:**
- "I realized that I **had lost** my wallet." (Verloren, bevor ich es merkte).
- "He knew that he **had seen** her before."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Past Simple vs. Past Perfect:</h3>
  <p><strong>Vergleich:</strong></p>
  <p>1. "When I got home, my wife cooked dinner." (Sie begann zu kochen, <em>nachdem</em> ich ankam).</p>
  <p>2. "When I got home, my wife <strong>had cooked</strong> dinner." (Das Essen war fertig, <em>bevor</em> ich ankam).</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Häufige Fehler ❌

**Fehler 1:** Past Simple benutzen, wenn die Reihenfolge wichtig ist.
- ❌ "I was hungry because I didn't eat." (Akzeptabel, aber ungenau).
- ✅ "I was hungry because I **hadn't eaten**." (Besser).

**Fehler 2:** 'Had' und 'Have' verwechseln.
- ❌ "When I arrived, he **has** left." (Falsch! Wir sind in der Vergangenheit).
- ✅ "When I arrived, he **had** left." (Richtig!).

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Struktur: **had + Partizip Perfekt**.</li>
    <li>Bedeutung: **Handlung VOR einer anderen vergangenen Handlung**.</li>
    <li>Schlüsselwörter: **already**, **before**, **by the time**, **after**.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Past Perfect**
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Die Vorvergangenheit</h3>
  <p className="mb-4">Vervollständige die Sätze:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>I couldn't enter the house because I ___ (lose) my keys.</li>
    <li>When I turned on the TV, the match ___ (already/finish).</li>
    <li>She told me that she ___ (never/be) to Paris.</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Past Perfect',
      description: 'Benutze Past Perfect für Ereignisse vor anderen Ereignissen.',
      checklist: [
        { text: 'Satz mit "because I had..."', checked: false },
        { text: 'Satz mit "When I arrived, ... had ..."', checked: false },
        { text: 'Satz mit "I realized that I had..."', checked: false }
      ]
    },
    en: {
      title: 'Past Perfect',
      description: 'Use Past Perfect for events before other events.',
      checklist: [
        { text: 'Sentence with "because I had..."', checked: false },
        { text: 'Sentence with "When I arrived, ... had ..."', checked: false },
        { text: 'Sentence with "I realized that I had..."', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


