import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const verbConjugatorData = [
  {
    subject: "I",
    verb: "play",
    correct: "play",
    explanation: { en: "I play", de: "I play" }
  },
  {
    subject: "You",
    verb: "work",
    correct: "work",
    explanation: { en: "You work", de: "You work" }
  },
  {
    subject: "He",
    verb: "like",
    correct: "likes",
    explanation: { en: "He likes (He/She/It + s)", de: "He likes (He/She/It + s)" }
  },
  {
    subject: "She",
    verb: "go",
    correct: "goes",
    explanation: { en: "She goes (ends in -o -> -es)", de: "She goes (endet auf -o -> -es)" }
  },
  {
    subject: "It",
    verb: "rain",
    correct: "rains",
    explanation: { en: "It rains", de: "It rains" }
  },
  {
    subject: "We",
    verb: "live",
    correct: "live",
    explanation: { en: "We live", de: "We live" }
  },
  {
    subject: "They",
    verb: "study",
    correct: "study",
    explanation: { en: "They study", de: "They study" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "He like pizza.",
    mistakeIndex: 1,
    correction: "likes",
    explanation: { en: "He likes (don't forget the 's'!).", de: "He likes (vergiss das 's' nicht!)." }
  },
  {
    sentence: "She watch TV every day.",
    mistakeIndex: 1,
    correction: "watches",
    explanation: { en: "She watches (add -es after ch/sh).", de: "She watches (-es nach ch/sh)." }
  },
  {
    sentence: "They plays football.",
    mistakeIndex: 1,
    correction: "play",
    explanation: { en: "They play (no 's' for plural).", de: "They play (kein 's' bei Plural)." }
  },
  {
    sentence: "I goes to school.",
    mistakeIndex: 1,
    correction: "go",
    explanation: { en: "I go (no 'es' for I).", de: "I go (kein 'es' bei I)." }
  }
];

const grammarRacerData = [
  {
    prompt: "My brother ___ in London.",
    options: ["live", "lives", "living"],
    correct: "lives",
    explanation: "He lives (Permanent)"
  },
  {
    prompt: "Water ___ at 100 degrees.",
    options: ["boil", "boils", "is boiling"],
    correct: "boils",
    explanation: "General truth"
  },
  {
    prompt: "I usually ___ up at 7.",
    options: ["get", "gets", "getting"],
    correct: "get",
    explanation: "Habit (usually)"
  },
  {
    prompt: "She ___ English very well.",
    options: ["speak", "speaks", "speaking"],
    correct: "speaks",
    explanation: "Fact/Ability"
  }
];

export const presentSimple = {
  id: 'a1_g2',
  title: {
    en: 'Present Simple (I do)',
    de: 'Present Simple (Einfache Gegenwart)'
  },
  description: {
    en: "For facts, habits, and things that are generally true.",
    de: "Für Fakten, Gewohnheiten und allgemeine Wahrheiten."
  },
  
  components: {
    verbConjugator: <GrammarGame type="verbConjugator" data={verbConjugatorData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Present Simple: Facts & Habits 📅

The **Present Simple** is the most common tense. We use it for things that are true **in general**, not just at this moment.

- **Habits:** "I **play** tennis every Sunday."
- **Facts:** "The sun **rises** in the east."
- **Permanent states:** "She **works** in a bank."

### 1. The Golden Rule: He/She/It - the 's' must fit! 🐍

This is the most important rule in English grammar for beginners:
In positive sentences, if the subject is **He**, **She**, or **It** (3rd person singular), you simply add an **-s** to the verb.

| Subject | Verb | Example |
|---------|------|---------|
| I | work | I work here. |
| You | work | You work here. |
| **He/She/It** | **works** | **She works** here. ⭐️ |
| We | work | We work here. |
| They | work | They work here. |

There is a rhyme to remember this: **"He, she, it - das 's' muss mit!"** (German rhyme)

<GamePlaceholder id="verbConjugator" />

### 2. Spelling Rules for the 's' 📝

Sometimes simply adding 's' is hard to pronounce, so we add **-es**:

1.  **After -s, -sh, -ch, -x:**
    *   *watch -> watch**es***
    *   *wash -> wash**es***
    *   *kiss -> kiss**es***
2.  **After -o:**
    *   *go -> go**es***
    *   *do -> do**es***
3.  **Consonant + y:** The 'y' changes to 'ies'.
    *   *study -> stud**ies***
    *   *fly -> fl**ies***
    *   *(But: play -> plays, because 'a' is a vowel!)*

### 3. Signal Words 🚦

These words show how often something happens, so we use Present Simple:
- **always** (immer)
- **usually** (gewöhnlich)
- **often** (oft)
- **sometimes** (manchmal)
- **never** (nie)
- **every day/week/year** (jeden Tag/Woche...)

<div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 my-4">
  <strong className="text-amber-800 dark:text-amber-200">💡 Tip:</strong>
  Remember, we do NOT use the verb "to be" (am/is/are) here!
  <br/>
  - ❌ "I am work every day." (Wrong!)
  <br/>
  - ✅ "I **work** every day." (Correct!)
</div>

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: The 'S' Challenge**
Do you need an 's' or not? Decide fast!
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Present Simple: Fakten & Gewohnheiten 📅

Das **Present Simple** (die einfache Gegenwart) ist die häufigste Zeitform. Wir benutzen sie für Dinge, die **allgemein wahr** sind, nicht unbedingt genau jetzt.

- **Gewohnheiten:** "I **play** tennis every Sunday." (Ich spiele jeden Sonntag Tennis.)
- **Fakten:** "The sun **rises** in the east." (Die Sonne geht im Osten auf.)
- **Dauerhafte Zustände:** "She **works** in a bank." (Sie arbeitet in einer Bank - das ist ihr Job.)

### 1. Die Goldene Regel: He/She/It - das 's' muss mit! 🐍

Das ist die allerwichtigste Regel für Anfänger:
Wenn das Subjekt **He** (Er), **She** (Sie) oder **It** (Es) ist (3. Person Einzahl), hängen wir ein **-s** an das Verb.

| Subjekt | Verb | Beispiel |
|---------|------|----------|
| I | work | I work here. |
| You | work | You work here. |
| **He/She/It** | **works** | **She works** here. ⭐️ |
| We | work | We work here. |
| They | work | They work here. |

Merkspruch: **"He, she, it - das 's' muss mit!"**

<GamePlaceholder id="verbConjugator" />

### 2. Schreibregeln für das 's' 📝

Manchmal ist ein einfaches 's' schwer auszusprechen, dann hängen wir **-es** an:

1.  **Nach Zischlauten (-s, -sh, -ch, -x):**
    *   *watch -> watch**es***
    *   *wash -> wash**es***
2.  **Nach -o:**
    *   *go -> go**es***
    *   *do -> do**es***
3.  **Konsonant + y:** Das 'y' wird zu 'ies'.
    *   *study -> stud**ies*** (lernen)
    *   *fly -> fl**ies*** (fliegen)
    *   *(Aber: play -> plays, weil 'a' ein Vokal ist!)*

### 3. Signalwörter 🚦

Diese Wörter zeigen an, wie oft etwas passiert, daher nutzen wir Present Simple:
- **always** (immer)
- **usually** (gewöhnlich)
- **often** (oft)
- **sometimes** (manchmal)
- **never** (nie)
- **every day/week/year** (jeden Tag/Woche...)

<div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 my-4">
  <strong className="text-amber-800 dark:text-amber-200">💡 Wichtiger Tipp:</strong>
  Verwende hier KEIN "to be" (am/is/are)!
  <br/>
  - ❌ "I am work every day." (Falsch!)
  <br/>
  - ✅ "I **work** every day." (Richtig!)
</div>

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Die 'S'-Challenge**
Brauchst du ein 's' oder nicht? Entscheide schnell!
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    de: {
      title: 'Dein Alltag',
      description: 'Schreibe 3 Dinge auf, die du jeden Tag machst (Present Simple).',
      checklist: [
        { text: 'Ein Satz mit "I ... every day"', checked: false },
        { text: 'Ein Satz über einen Freund "He/She ..."', checked: false }
      ]
    },
    en: {
      title: 'Your Routine',
      description: 'Write 3 things you do every day (Present Simple).',
      checklist: [
        { text: 'One sentence with "I ... every day"', checked: false },
        { text: 'One sentence about a friend "He/She ..."', checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: 'Was passiert mit dem Verb bei He/She/It?', answer: 'Es bekommt ein -s (oder -es).' },
      { question: 'Welches Signalwort deutet auf Present Simple hin?', answer: 'Every day, always, often, usually...' }
    ],
    en: [
      { question: 'What happens to the verb with He/She/It?', answer: 'It gets an -s (or -es).' },
      { question: 'Which signal word indicates Present Simple?', answer: 'Every day, always, often, usually...' }
    ]
  }
};
