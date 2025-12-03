import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I was tired because I ___ working hard.", de: "Ich war müde, weil ich hart gearbeitet hatte." },
    words: ["had been", "have been", "was", "am"],
    correct: "had been",
    explanation: { en: "Past Perfect Continuous: had been + -ing. Duration/activity before a past moment.", de: "Past Perfect Continuous: had been + -ing. Dauer/Aktivität vor einem vergangenen Moment." }
  },
  {
    prompt: { en: "It ___ raining for two hours when I arrived.", de: "Es hatte seit zwei Stunden geregnet, als ich ankam." },
    words: ["had been", "has been", "was", "is"],
    correct: "had been",
    explanation: { en: "Duration up to a past moment (when I arrived).", de: "Dauer bis zu einem vergangenen Moment (als ich ankam)." }
  },
  {
    prompt: { en: "He ___ waiting for 20 minutes.", de: "Er hatte 20 Minuten gewartet." },
    words: ["had been", "have been", "was", "is"],
    correct: "had been",
    explanation: { en: "Had been waiting (before something else happened).", de: "Had been waiting (bevor etwas anderes passierte)." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I was tired because I have been working.",
    mistakeIndex: 5,
    correction: "had been",
    explanation: { en: "Main verb is past (was tired), so the reason must be Past Perfect (had been).", de: "Hauptverb ist Vergangenheit (was tired), also muss der Grund Past Perfect sein (had been)." }
  },
  {
    sentence: "She had been slept for ten hours.",
    mistakeIndex: 3,
    correction: "sleeping",
    explanation: { en: "Structure: had been + -ING (sleeping).", de: "Struktur: had been + -ING (sleeping)." }
  },
  {
    sentence: "I had been knowing him for years.",
    mistakeIndex: 2,
    correction: "had known",
    explanation: { en: "State verbs (know) -> Past Perfect Simple (had known), not Continuous.", de: "Zustandsverben (know) -> Past Perfect Simple (had known), nicht Continuous." }
  }
];

const grammarRacerData = [
  {
    prompt: "I was out of breath. I ___ running.",
    options: ["had been", "have been", "was"],
    correct: "had been",
    explanation: "Past reason for past state."
  },
  {
    prompt: "She ___ living there for a year before she moved.",
    options: ["had been", "has been", "was"],
    correct: "had been",
    explanation: "Duration before past event (moved)."
  },
  {
    prompt: "We ___ waiting long when the bus came.",
    options: ["hadn't been", "haven't been", "weren't"],
    correct: "hadn't been",
    explanation: "Negative Past Perfect Continuous."
  }
];

export const pastPerfectContinuous = {
  id: 'b1_g16',
  title: {
    en: 'Past Perfect Continuous (I had been doing)',
    de: 'Past Perfect Continuous (Verlaufsform)'
  },
  description: {
    en: "Duration before the past. 'I had been waiting for 20 minutes when he arrived'.",
    de: "Dauer vor der Vergangenheit. 'Ich hatte 20 Minuten gewartet, als er ankam'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Past Perfect Continuous: Duration in the Past ⏳🔙

The **Past Perfect Continuous** is like the Present Perfect Continuous, but shifted back into the past. It focuses on the **duration** or **activity** that happened **before** another past event.

### 1. Structure 🏗️

**had + been + verb-ing**

- I **had been waiting**.
- She **had been working**.
- It **had been raining**.

### 2. When to use it? 🕰️

**Reason for a past state:**
- "I was very tired because I **had been working** all day."
- "The ground was wet because it **had been raining**."

**Duration up to a past moment:**
- "When the bus finally came, I **had been waiting** for 20 minutes." (Wait started 20 mins *before* the bus came).
- "She **had been playing** tennis for years before she became a pro."

### 3. Comparison 🔄

| Tense | Example | Meaning |
|-------|---------|---------|
| **Present Perfect Continuous** | "I **have been waiting** for 20 mins." | I am waiting *now*. (Duration up to *now*). |
| **Past Perfect Continuous** | "I **had been waiting** for 20 mins." | I was waiting *then* (before something else happened). |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Visualizing:</h3>
  <p><strong>Present:</strong> It is 12:00. I have been working since 9:00.</p>
  <p><strong>Past:</strong> Yesterday at 12:00, I had been working since 9:00.</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Simple vs. Continuous (Past Perfect) 🏃✅

- **Had done (Simple):** Completed result.
  - "I **had painted** the room." (It was finished).
- **Had been doing (Continuous):** Activity / Duration.
  - "I **had been painting** the room." (Maybe finished, maybe not. Focus on the activity).

### 5. Common Mistakes ❌

**Mistake 1:** Mixing Present and Past.
- ❌ "I **was** tired because I **have been** running." (Wrong mix).
- ✅ "I **was** tired because I **had been** running." (Past + Past Perfect).

**Mistake 2:** State verbs.
- ❌ "I **had been knowing** him."
- ✅ "I **had known** him."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Structure: **had been + -ing**.</li>
    <li>Meaning: **Duration/Activity BEFORE a past moment**.</li>
    <li>Keywords: **for**, **since**, **all day**, **before**.</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Past Perfect Continuous**
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Duration in the Past</h3>
  <p className="mb-4">Complete sentences about a past situation:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>I was exhausted yesterday because I ___ (work) all day.</li>
    <li>When I got home, my eyes were red because I ___ (cry).</li>
    <li>They ___ (play) for an hour when it started to rain.</li>
  </ol>
</div>
`,
    de: `
## Past Perfect Continuous: Dauer in der Vergangenheit ⏳🔙

Das **Past Perfect Continuous** ist wie das Present Perfect Continuous, aber in die Vergangenheit verschoben. Es konzentriert sich auf die **Dauer** oder **Aktivität**, die **vor** einem anderen Ereignis in der Vergangenheit stattfand.

### 1. Struktur 🏗️

**had + been + verb-ing**

- I **had been waiting**.
- She **had been working**.
- It **had been raining**.

### 2. Wann benutzt man es? 🕰️

**Grund für einen vergangenen Zustand:**
- "I was very tired because I **had been working** all day." (Ich war müde, weil ich den ganzen Tag gearbeitet hatte).
- "The ground was wet because it **had been raining**." (Der Boden war nass, weil es geregnet hatte).

**Dauer bis zu einem vergangenen Moment:**
- "When the bus finally came, I **had been waiting** for 20 minutes." (Das Warten begann 20 Min *bevor* der Bus kam).
- "She **had been playing** tennis for years before she became a pro."

### 3. Vergleich 🔄

| Zeitform | Beispiel | Bedeutung |
|-------|---------|---------|
| **Present Perfect Continuous** | "I **have been waiting** for 20 mins." | Ich warte *jetzt*. (Dauer bis *jetzt*). |
| **Past Perfect Continuous** | "I **had been waiting** for 20 mins." | Ich wartete *damals* (bevor etwas passierte). |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Visualisierung:</h3>
  <p><strong>Gegenwart:</strong> Es ist 12:00. Ich arbeite seit 9:00. (have been working)</p>
  <p><strong>Vergangenheit:</strong> Gestern um 12:00 arbeitete ich seit 9:00. (had been working)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Simple vs. Continuous (Past Perfect) 🏃✅

- **Had done (Simple):** Abgeschlossenes Ergebnis.
  - "I **had painted** the room." (Es war fertig).
- **Had been doing (Continuous):** Aktivität / Dauer.
  - "I **had been painting** the room." (Vielleicht fertig, vielleicht nicht. Fokus auf der Tätigkeit).

### 5. Häufige Fehler ❌

**Fehler 1:** Gegenwart und Vergangenheit mischen.
- ❌ "I **was** tired because I **have been** running." (Falscher Mix).
- ✅ "I **was** tired because I **had been** running." (Vergangenheit + Vorvergangenheit).

**Fehler 2:** Zustandsverben.
- ❌ "I **had been knowing** him."
- ✅ "I **had known** him."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Struktur: **had been + -ing**.</li>
    <li>Bedeutung: **Dauer/Aktivität VOR einem vergangenen Moment**.</li>
    <li>Schlüsselwörter: **for**, **since**, **all day**, **before**.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Past Perfect Continuous**
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Dauer in der Vergangenheit</h3>
  <p className="mb-4">Vervollständige Sätze über eine vergangene Situation:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>I was exhausted yesterday because I ___ (work) all day.</li>
    <li>When I got home, my eyes were red because I ___ (cry).</li>
    <li>They ___ (play) for an hour when it started to rain.</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Past Perfect Continuous',
      description: 'Benutze Past Perfect Continuous für Dauer in der Vergangenheit.',
      checklist: [
        { text: 'Satz mit "I was tired because I had been..."', checked: false },
        { text: 'Satz mit "When... I had been waiting for..."', checked: false }
      ]
    },
    en: {
      title: 'Past Perfect Continuous',
      description: 'Use Past Perfect Continuous for duration in the past.',
      checklist: [
        { text: 'Sentence with "I was tired because I had been..."', checked: false },
        { text: 'Sentence with "When... I had been waiting for..."', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


