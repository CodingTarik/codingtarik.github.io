import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const racerData = [
  {
    prompt: "Look! It ___ .",
    options: ["snows", "is snowing"],
    correct: "is snowing",
    explanation: "Happening now (Look!)"
  },
  {
    prompt: "It usually ___ in winter here.",
    options: ["snows", "is snowing"],
    correct: "snows",
    explanation: "General truth / Habit (usually)"
  },
  {
    prompt: "Where is Tim? He ___ dinner.",
    options: ["cooks", "is cooking"],
    correct: "is cooking",
    explanation: "Happening now"
  },
  {
    prompt: "He ___ dinner every evening.",
    options: ["cooks", "is cooking"],
    correct: "cooks",
    explanation: "Routine (every evening)"
  },
  {
    prompt: "I ___ TV right now.",
    options: ["watch", "am watching"],
    correct: "am watching",
    explanation: "Right now"
  }
];

const fixData = [
  {
    sentence: "Look! The bus comes.",
    mistakeIndex: 3,
    correction: "is coming",
    explanation: { en: "Happening now (Look!) -> is coming", de: "Passiert jetzt (Look!) -> is coming" }
  },
  {
    sentence: "I am going to work every day.",
    mistakeIndex: 1,
    correction: "go",
    explanation: { en: "Habit (every day) -> I go", de: "Gewohnheit (jeden Tag) -> I go" }
  },
  {
    sentence: "She is speaking English very well.",
    mistakeIndex: 1,
    correction: "speaks",
    explanation: { en: "Fact/Ability -> speaks", de: "Fakt/Fähigkeit -> speaks" }
  },
  {
    sentence: "Be quiet! I study.",
    mistakeIndex: 3,
    correction: "am studying",
    explanation: { en: "Happening now (Be quiet!) -> am studying", de: "Passiert jetzt (Be quiet!) -> am studying" }
  }
];

export const presentMixed1 = {
  id: 'a1_g3',
  title: {
    en: 'Present Continuous vs. Simple 1',
    de: 'Present Continuous vs. Simple 1'
  },
  description: {
    en: "The ultimate showdown: 'I do' vs 'I am doing'. When to use which?",
    de: "Das große Duell: 'I do' vs 'I am doing'. Wann benutzt man was?"
  },
  
  components: {
    grammarRacer: <GrammarGame type="grammarRacer" data={racerData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixData} />
  },

  content: {
    en: `
## Simple or Continuous? 🤔

This is one of the most common questions for learners. Let's make it crystal clear.

### 1. The Difference

| **Present Simple** (I do) | **Present Continuous** (I am doing) |
|---------------------------|-------------------------------------|
| **General Truths & Facts** | **Happening NOW** |
| "I live in Berlin." (Permanent) | "I am staying at a hotel." (Temporary) |
| **Habits & Routines** | **In Progress / Incomplete** |
| "I eat breakfast at 8:00." | "I am eating right now." |
| **Always / Every day** | **Now / At the moment** |

### 2. Compare Situations

**Example A: Rain** 🌧️
- Simple: "It **rains** a lot in Ireland." (General fact about the climate)
- Continuous: "Look! It **is raining**." (Happening right now outside the window)

**Example B: Languages** 🗣️
- Simple: "He **speaks** French." (He has the ability, generally)
- Continuous: "He **is speaking** French to the waiter." (He is doing it right now)

<div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4">
  <strong className="text-blue-800 dark:text-blue-200">💡 Signal Words are Key!</strong>
  <br/>
  - **Simple:** always, never, usually, often, every day.
  <br/>
  - **Continuous:** now, at the moment, right now, Look!, Listen!
</div>

<GamePlaceholder id="grammarRacer" />

### 3. Common Mistakes

Don't use the Continuous for habits!
- ❌ "I am going to work every day." (Wrong!)
- ✅ "I **go** to work every day." (Correct!)

Don't use the Simple for current actions!
- ❌ "Where are you?" - "I read." (Wrong!)
- ✅ "Where are you?" - "I **am reading**." (Correct!)

<GamePlaceholder id="fixTheMistake" />
`,
    de: `
## Simple oder Continuous? 🤔

Das ist eine der häufigsten Fragen für Lernende. Lass uns den Unterschied kristallklar machen.

### 1. Der Unterschied

| **Present Simple** (I do) | **Present Continuous** (I am doing) |
|---------------------------|-------------------------------------|
| **Allgemeine Fakten** | **Passiert JETZT** |
| "I live in Berlin." (Dauerhaft) | "I am staying at a hotel." (Vorübergehend) |
| **Gewohnheiten** | **Im Gange / Unvollendet** |
| "I eat breakfast at 8:00." | "I am eating right now." |
| **Always / Every day** | **Now / At the moment** |

### 2. Vergleichssituationen

**Beispiel A: Regen** 🌧️
- Simple: "It **rains** a lot in Ireland." (Fakt über das Klima allgemein)
- Continuous: "Look! It **is raining**." (Es passiert genau jetzt draußen)

**Beispiel B: Sprachen** 🗣️
- Simple: "He **speaks** French." (Er kann die Sprache generell)
- Continuous: "He **is speaking** French to the waiter." (Er tut es genau in diesem Moment)

<div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4">
  <strong className="text-blue-800 dark:text-blue-200">💡 Signalwörter sind der Schlüssel!</strong>
  <br/>
  - **Simple:** always, never, usually, often, every day.
  <br/>
  - **Continuous:** now, at the moment, right now, Look!, Listen!
</div>

<GamePlaceholder id="grammarRacer" />

### 3. Häufige Fehler

Nutze nicht Continuous für Gewohnheiten!
- ❌ "I am going to work every day." (Falsch!)
- ✅ "I **go** to work every day." (Richtig!)

Nutze nicht Simple für momentane Handlungen!
- ❌ "Wo bist du?" - "I read." (Falsch!)
- ✅ "Wo bist du?" - "I **am reading**." (Richtig!)

<GamePlaceholder id="fixTheMistake" />
`
  },
  task: {
    de: {
      title: 'Fakt vs. Moment',
      description: 'Schreibe einen Satz über etwas, das du immer tust, und einen Satz über etwas, das du jetzt tust.',
      checklist: [
        { text: 'Gewohnheit (Simple): I ...', checked: false },
        { text: 'Jetzt (Continuous): I am ...', checked: false }
      ]
    },
    en: {
      title: 'Fact vs. Moment',
      description: 'Write one sentence about something you always do, and one sentence about something you are doing now.',
      checklist: [
        { text: 'Habit (Simple): I ...', checked: false },
        { text: 'Now (Continuous): I am ...', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

