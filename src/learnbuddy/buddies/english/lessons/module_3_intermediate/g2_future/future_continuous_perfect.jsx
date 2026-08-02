import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "This time next week, I ___ on the beach.", de: "Nächste Woche um diese Zeit werde ich am Strand liegen." },
    words: ["will be lying", "will lie", "am lying", "have lain"],
    correct: "will be lying",
    explanation: { en: "Future Continuous: Action in progress at a specific future time.", de: "Future Continuous: Handlung im Gange zu einer bestimmten zukünftigen Zeit." }
  },
  {
    prompt: { en: "By next year, I ___ my studies.", de: "Bis nächstes Jahr werde ich mein Studium abgeschlossen haben." },
    words: ["will have finished", "will finish", "have finished", "am finishing"],
    correct: "will have finished",
    explanation: { en: "Future Perfect: Action completed BEFORE a specific future time.", de: "Future Perfect: Handlung abgeschlossen VOR einer bestimmten zukünftigen Zeit." }
  },
  {
    prompt: { en: "Don't call at 8. I ___ dinner.", de: "Ruf nicht um 8 an. Ich werde zu Abend essen." },
    words: ["will be eating", "will eat", "eat", "ate"],
    correct: "will be eating",
    explanation: { en: "Action in progress at 8.", de: "Handlung im Gange um 8." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "At 10 o'clock tomorrow, I will work.",
    mistakeIndex: 6,
    correction: "will be working",
    explanation: { en: "Use Future Continuous (will be working) for an action in progress at a specific time.", de: "Benutze Future Continuous (will be working) für eine Handlung, die gerade stattfindet." }
  },
  {
    sentence: "By 2030, I will buy a house.",
    mistakeIndex: 4,
    correction: "will have bought",
    explanation: { en: "Use Future Perfect (will have bought) for completion BY a certain time.", de: "Benutze Future Perfect (will have bought) für Abschluss BIS zu einer bestimmten Zeit." }
  },
  {
    sentence: "Next year I will have been living here.",
    mistakeIndex: 5,
    correction: "will live",
    explanation: { en: "Usually 'will live' or 'will be living'. 'Will have been living' requires a duration (for 10 years).", de: "Meistens 'will live' oder 'will be living'. 'Will have been living' braucht eine Dauer." }
  }
];

const grammarRacerData = [
  {
    prompt: "This time tomorrow, we ___ to Paris.",
    options: ["will be flying", "will fly", "fly"],
    correct: "will be flying",
    explanation: "In progress at a specific time."
  },
  {
    prompt: "By Friday, I ___ the report.",
    options: ["will have finished", "will finish", "finish"],
    correct: "will have finished",
    explanation: "Completed by a deadline."
  },
  {
    prompt: "Don't phone me. I ___ .",
    options: ["will be sleeping", "will sleep", "sleep"],
    correct: "will be sleeping",
    explanation: "Action in progress."
  }
];

export const futureContinuousPerfect = {
  id: 'b1_g24',
  title: {
    en: 'Future Continuous & Perfect',
    de: 'Future Continuous & Perfect'
  },
  description: {
    en: "Advanced future forms. 'I will be doing' vs 'I will have done'.",
    de: "Fortgeschrittene Zukunftsformen. 'Ich werde gerade tun' vs 'Ich werde getan haben'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Future Continuous & Future Perfect 🚀🔮

We often use simple "will" or "going to", but these two advanced forms add precision about **when** and **how** things happen in the future.

### 1. Future Continuous (will be doing) 🏃➡️

**Structure:** will + be + verb-ing

We use it to say that an action will be **in progress** at a specific time in the future.

- "At 10 o'clock tomorrow, I **will be working**." (I start before 10, and at 10 I am in the middle of it).
- "This time next week, I **will be lying** on the beach."
- "Don't call me at 8 PM. I **will be watching** the match."

**Key idea:** Just like Past Continuous ("I was working"), but in the future.

### 2. Future Perfect (will have done) ✅🏁

**Structure:** will + have + past participle

We use it to say that an action will be **completed** BEFORE a specific time in the future. Usually used with **by**.

- "By next year, I **will have finished** my studies." (It will be done).
- "By 5 PM, I **will have sent** all the emails."
- "We are late! The movie **will have started** by the time we get there."

**Key idea:** Looking back from the future. "At that point, it is already past."

### 3. Comparison 🔄

| Tense | Example | Meaning |
|-------|---------|---------|
| **Future Simple** | "I **will start** at 9." | Fact / Spontaneous decision. |
| **Future Continuous** | "At 9:30, I **will be working**." | Action in progress. (Started at 9, finishes later). |
| **Future Perfect** | "By 11, I **will have finished**." | Action completed. (Done before 11). |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Visualizing:</h3>
  <p><strong>Timeline:</strong> 9:00 Start --- 10:00 Working --- 11:00 Finish.</p>
  <p>At 9:00: "I <strong>will start</strong>."</p>
  <p>At 10:00: "I <strong>will be working</strong>."</p>
  <p>By 11:00: "I <strong>will have finished</strong>."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Future Perfect Continuous (Rare but useful) ⏱️

**Structure:** will + have + been + verb-ing

Used for **duration** up to a future point.
- "By next year, I **will have been living** here for 10 years."

### 5. Common Mistakes ❌

**Mistake 1:** Using Simple for progress.
- ❌ "At 8 PM, I **will eat**. Don't call." (Sounds like you start eating exactly at 8).
- ✅ "At 8 PM, I **will be eating**. Don't call." (I'm already eating).

**Mistake 2:** Using Simple for completion by a deadline.
- ❌ "By Friday, I **will finish** it." (Okay, but Perfect is better).
- ✅ "By Friday, I **will have finished** it." (Emphasizes completion).

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>**Will be doing**: In the middle of an action. ("This time next week...")</li>
    <li>**Will have done**: Finished before a time. ("By next year...")</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Future Forms**
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Your Future</h3>
  <p className="mb-4">Make predictions:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>What will you be doing at 8 PM tonight? (I will be...)</li>
    <li>What will you have achieved by next year? (I will have...)</li>
    <li>Where will you be living in 5 years? (I will be...)</li>
  </ol>
</div>
`,
    de: `
## Future Continuous & Future Perfect 🚀🔮

Wir benutzen oft einfach "will" oder "going to", aber diese zwei fortgeschrittenen Formen fügen Präzision hinzu, **wann** und **wie** Dinge in der Zukunft passieren.

### 1. Future Continuous (will be doing) 🏃➡️

**Struktur:** will + be + verb-ing

Wir benutzen es, um zu sagen, dass eine Handlung zu einem bestimmten Zeitpunkt in der Zukunft **im Gange** sein wird.

- "At 10 o'clock tomorrow, I **will be working**." (Ich fange vor 10 an, und um 10 bin ich mittendrin).
- "This time next week, I **will be lying** on the beach." (Nächste Woche um diese Zeit liege ich am Strand).
- "Don't call me at 8 PM. I **will be watching** the match."

**Schlüsselidee:** Genau wie Past Continuous ("I was working"), aber in der Zukunft.

### 2. Future Perfect (will have done) ✅🏁

**Struktur:** will + have + Partizip Perfekt

Wir benutzen es, um zu sagen, dass eine Handlung VOR einem bestimmten Zeitpunkt in der Zukunft **abgeschlossen** sein wird. Meistens mit **by** benutzt.

- "By next year, I **will have finished** my studies." (Es wird erledigt sein).
- "By 5 PM, I **will have sent** all the emails."
- "We are late! The movie **will have started** by the time we get there."

**Schlüsselidee:** Rückblick aus der Zukunft. "Zu jenem Zeitpunkt ist es bereits Vergangenheit."

### 3. Vergleich 🔄

| Zeitform | Beispiel | Bedeutung |
|-------|---------|---------|
| **Future Simple** | "I **will start** at 9." | Fakt / Spontane Entscheidung. |
| **Future Continuous** | "At 9:30, I **will be working**." | Handlung im Gange. (Startete um 9, endet später). |
| **Future Perfect** | "By 11, I **will have finished**." | Handlung abgeschlossen. (Fertig vor 11). |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Visualisierung:</h3>
  <p><strong>Zeitstrahl:</strong> 9:00 Start --- 10:00 Arbeiten --- 11:00 Ende.</p>
  <p>Um 9:00: "I <strong>will start</strong>."</p>
  <p>Um 10:00: "I <strong>will be working</strong>."</p>
  <p>Bis 11:00: "I <strong>will have finished</strong>."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Future Perfect Continuous (Selten aber nützlich) ⏱️

**Struktur:** will + have + been + verb-ing

Benutzt für **Dauer** bis zu einem zukünftigen Punkt.
- "By next year, I **will have been living** here for 10 years."

### 5. Häufige Fehler ❌

**Fehler 1:** Simple für Verlauf benutzen.
- ❌ "At 8 PM, I **will eat**. Don't call." (Klingt, als würdest du Punkt 8 anfangen).
- ✅ "At 8 PM, I **will be eating**. Don't call." (Ich bin schon dabei).

**Fehler 2:** Simple für Abschluss bis Deadline benutzen.
- ❌ "By Friday, I **will finish** it." (Okay, aber Perfect ist besser).
- ✅ "By Friday, I **will have finished** it." (Betont den Abschluss).

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>**Will be doing**: Mitten in einer Handlung. ("This time next week...")</li>
    <li>**Will have done**: Fertig vor einer Zeit. ("By next year...")</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Zukunftsformen**
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Deine Zukunft</h3>
  <p className="mb-4">Mache Vorhersagen:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Was wirst du heute Abend um 20 Uhr tun? (I will be...)</li>
    <li>Was wirst du bis nächstes Jahr erreicht haben? (I will have...)</li>
    <li>Wo wirst du in 5 Jahren leben? (I will be...)</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Future Forms',
      description: 'Benutze Future Continuous und Perfect.',
      checklist: [
        { text: 'Satz mit "I will be -ing" (Verlauf)', checked: false },
        { text: 'Satz mit "I will have -ed" (Abschluss)', checked: false },
        { text: 'Satz mit "By next year..."', checked: false }
      ]
    },
    en: {
      title: 'Future Forms',
      description: 'Use Future Continuous and Perfect.',
      checklist: [
        { text: 'Sentence with "I will be -ing" (Continuous)', checked: false },
        { text: 'Sentence with "I will have -ed" (Perfect)', checked: false },
        { text: 'Sentence with "By next year..."', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


