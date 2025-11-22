import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ (play) football yesterday.", de: "Ich ___ (spielen) gestern Fußball." },
    words: ["played", "play", "was", "playing"],
    correct: "played",
    explanation: { en: "Regular verb: play + ed", de: "Regelmäßiges Verb: play + ed" }
  },
  {
    prompt: { en: "We ___ (be) happy.", de: "Wir ___ (sein) glücklich." },
    words: ["were", "was", "are", "been"],
    correct: "were",
    explanation: { en: "We/You/They + were", de: "We/You/They + were" }
  },
  {
    prompt: { en: "She ___ (go) to school.", de: "Sie ___ (gehen) zur Schule." },
    words: ["went", "goed", "gone", "goes"],
    correct: "went",
    explanation: { en: "Irregular: go -> went", de: "Unregelmäßig: go -> went" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I goed to the cinema.",
    mistakeIndex: 1,
    correction: "went",
    explanation: { en: "Go is irregular: go -> went.", de: "Go ist unregelmäßig: go -> went." }
  },
  {
    sentence: "She was tired yesterday?",
    mistakeIndex: 1,
    correction: "Was she",
    explanation: { en: "Question: Was she tired...?", de: "Frage: Was she tired...?" }
  },
  {
    sentence: "We was at home.",
    mistakeIndex: 1,
    correction: "were",
    explanation: { en: "We were, not We was.", de: "We were, nicht We was." }
  },
  {
    sentence: "Did you played tennis?",
    mistakeIndex: 2,
    correction: "play",
    explanation: { en: "Did you play? (Base form after Did)", de: "Did you play? (Grundform nach Did)" }
  }
];

const grammarRacerData = [
  {
    prompt: "Yesterday, I ___ a pizza.",
    options: ["eat", "ate", "eated"],
    correct: "ate",
    explanation: "Irregular: eat -> ate"
  },
  {
    prompt: "He ___ finish his homework.",
    options: ["didn't", "don't", "not"],
    correct: "didn't",
    explanation: "Negative past: didn't"
  },
  {
    prompt: "___ you see the movie?",
    options: ["Did", "Do", "Was"],
    correct: "Did",
    explanation: "Question past: Did you...?"
  },
  {
    prompt: "They ___ in London in 2010.",
    options: ["was", "were", "are"],
    correct: "were",
    explanation: "To be (past): They were"
  }
];

export const pastSimple = {
  id: 'a1_g5',
  title: {
    en: 'Past Simple (I did)',
    de: 'Past Simple (Einfache Vergangenheit)'
  },
  description: {
    en: "Describing finished actions in the past. 'I played', 'I went'.",
    de: "Abgeschlossene Handlungen in der Vergangenheit beschreiben. 'Ich spielte', 'Ich ging'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Past Simple: It is finished! 🏁

We use the **Past Simple** for actions that started and **finished** in the past. The time is important (yesterday, last year, in 1999).

### 1. The Verb "to be" (Was/Were) 👻

The verb "to be" is special again! It has two past forms:

| Subject | Present | Past |
|---------|---------|------|
| I | am | **was** |
| He/She/It | is | **was** |
| We/You/They | are | **were** |

**Examples:**
- "I **was** tired yesterday."
- "They **were** happy."

### 2. Regular Verbs (+ed) 🔨

For most verbs, we simply add **-ed**.

- work -> work**ed**
- play -> play**ed**
- start -> start**ed**

**Spelling:**
- stop -> stop**p**ed (double consonant)
- study -> stud**ied** (y -> i)
- live -> liv**ed** (only d if it ends in e)

<GamePlaceholder id="sentenceBuilder" />

### 3. Irregular Verbs (The List!) 📜

Many important verbs are irregular. You have to learn them! 
(Here are the Top 3)

1.  **go** -> **went** ("I **went** to the cinema.")
2.  **do** -> **did** ("I **did** my homework.")
3.  **have** -> **had** ("We **had** fun.")

*Check the Irregular Verbs list in the appendix for more!*

### 4. Questions and Negatives (The Helper "Did") ❓

For all verbs (except "to be"), we use the helper **did**.

**Negative (-):**
- "I **did not** (didn't) play."
- *Note: After 'did', use the base verb! (Not "didn't played")*

**Question (?):**
- "**Did** you play?"
- "Where **did** you go?"

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Common Mistake!</strong>
  <br/>
  Never use **did** and the **past form** together.
  <br/>
  - ❌ "Did you **went**?" (Wrong!)
  <br/>
  - ✅ "Did you **go**?" (Correct!)
</div>

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Past Master**
Choose the correct past form! Watch out for irregulars!
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Past Simple: Es ist vorbei! 🏁

Wir benutzen das **Past Simple** für Handlungen, die in der Vergangenheit angefangen haben und **abgeschlossen** sind. Der Zeitpunkt ist wichtig (gestern, letztes Jahr, 1999).

### 1. Das Verb "to be" (Was/Were) 👻

Das Verb "sein" ist wieder speziell! Es hat zwei Vergangenheitsformen:

| Subjekt | Gegenwart (Present) | Vergangenheit (Past) |
|---------|---------|------|
| I | am | **was** (war) |
| He/She/It | is | **was** (war) |
| We/You/They | are | **were** (waren) |

**Beispiele:**
- "I **was** tired yesterday." (Ich war gestern müde.)
- "They **were** happy." (Sie waren glücklich.)

### 2. Regelmäßige Verben (+ed) 🔨

Bei den meisten Verben hängen wir einfach ein **-ed** an.

- work -> work**ed** (arbeitete / habe gearbeitet)
- play -> play**ed** (spielte / habe gespielt)
- start -> start**ed** (startete / habe gestartet)

**Schreibweise:**
- stop -> stop**p**ed (doppelter Konsonant nach kurzem Vokal)
- study -> stud**ied** (y wird zu i)
- live -> liv**ed** (nur d, wenn es schon auf e endet)

<GamePlaceholder id="sentenceBuilder" />

### 3. Unregelmäßige Verben (Die Liste!) 📜

Viele wichtige Verben sind unregelmäßig. Du musst sie auswendig lernen!
(Hier sind die Top 3)

1.  **go** (gehen) -> **went** ("I **went** to the cinema.")
2.  **do** (tun) -> **did** ("I **did** my homework.")
3.  **have** (haben) -> **had** ("We **had** fun.")

*Schau in die Liste der unregelmäßigen Verben für mehr!*

### 4. Fragen und Verneinung (Der Helfer "Did") ❓

Für alle Verben (außer "to be") benutzen wir den Helfer **did**.

**Verneinung (-):**
- "I **did not** (didn't) play." (Ich habe nicht gespielt.)
- *Achtung: Nach 'did' kommt die Grundform! (Nicht "didn't played")*

**Frage (?):**
- "**Did** you play?" (Hast du gespielt?)
- "Where **did** you go?" (Wo bist du hingegangen?)

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Häufiger Fehler!</strong>
  <br/>
  Benutze niemals **did** und die **Vergangenheitsform** zusammen.
  <br/>
  - ❌ "Did you **went**?" (Falsch!)
  <br/>
  - ✅ "Did you **go**?" (Richtig!)
</div>

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Meister der Vergangenheit**
Wähle die richtige Form! Achte auf die Unregelmäßigen!
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    de: {
      title: 'Gestern...',
      description: 'Was hast du gestern gemacht? Schreibe 3 Sätze im Past Simple.',
      checklist: [
        { text: 'Satz mit "I was..."', checked: false },
        { text: 'Satz mit einem regulären Verb (played, worked...)', checked: false },
        { text: 'Satz mit einem unregelmäßigen Verb (went, did, had...)', checked: false }
      ]
    },
    en: {
      title: 'Yesterday...',
      description: 'What did you do yesterday? Write 3 sentences in Past Simple.',
      checklist: [
        { text: 'Sentence with "I was..."', checked: false },
        { text: 'Sentence with a regular verb (played, worked...)', checked: false },
        { text: 'Sentence with an irregular verb (went, did, had...)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};
