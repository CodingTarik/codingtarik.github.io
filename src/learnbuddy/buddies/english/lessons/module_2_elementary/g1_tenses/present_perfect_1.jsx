import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ (see) that movie three times.", de: "Ich ___ (sehen) diesen Film schon dreimal." },
    words: ["have seen", "saw", "see", "am seeing"],
    correct: "have seen",
    explanation: { en: "Present perfect: have/has + past participle", de: "Present perfect: have/has + Past Participle" }
  },
  {
    prompt: { en: "She ___ (never be) to Paris.", de: "Sie ___ (nie sein) in Paris." },
    words: ["has never been", "never was", "never is", "never be"],
    correct: "has never been",
    explanation: { en: "Present perfect: has + been (past participle of be)", de: "Present perfect: has + been (Past Participle von be)" }
  },
  {
    prompt: { en: "Have you ___ (eat) lunch yet?", de: "Hast du schon ___ (essen) zu Mittag?" },
    words: ["eaten", "ate", "eat", "eating"],
    correct: "eaten",
    explanation: { en: "Past participle: eat -> eaten", de: "Past Participle: eat -> eaten" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I have went to London last year.",
    mistakeIndex: 2,
    correction: "been",
    explanation: { en: "Present perfect: have been (not have went). Also, don't use 'last year' with present perfect!", de: "Present perfect: have been (nicht have went). Außerdem: 'last year' nicht mit Present perfect!" }
  },
  {
    sentence: "She has see that film.",
    mistakeIndex: 2,
    correction: "seen",
    explanation: { en: "Present perfect needs past participle: see -> seen", de: "Present perfect braucht Past Participle: see -> seen" }
  },
  {
    sentence: "Have you ever go to Japan?",
    mistakeIndex: 3,
    correction: "been",
    explanation: { en: "Have you ever been (past participle)", de: "Have you ever been (Past Participle)" }
  }
];

const grammarRacerData = [
  {
    prompt: "I ___ that book.",
    options: ["have read", "read", "am reading"],
    correct: "have read",
    explanation: "Present perfect: have read"
  },
  {
    prompt: "She ___ never ___ to Italy.",
    options: ["has been", "was", "is"],
    correct: "has been",
    explanation: "Present perfect: has been"
  },
  {
    prompt: "Have you ___ sushi?",
    options: ["tried", "try", "trying"],
    correct: "tried",
    explanation: "Past participle: tried"
  }
];

export const presentPerfect1 = {
  id: 'a2_g7',
  title: {
    en: 'Present Perfect 1 (I have done) - Experience',
    de: 'Present Perfect 1 (Ich habe gemacht) - Erfahrung'
  },
  description: {
    en: "Talking about experiences and things that happened in your life. 'I have been to Paris', 'Have you ever...?'",
    de: "Über Erfahrungen und Dinge sprechen, die in deinem Leben passiert sind. 'Ich war schon in Paris', 'Warst du schon mal...?'"
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Present Perfect: Your Life Experiences 🌍

The **Present Perfect** is one of the most important tenses in English, but it can be confusing because it talks about the past... but it's called "Present" Perfect! The key is: it connects the **past** to the **present**.

### Why "Present" Perfect?

Think of it this way: "I **have been** to Paris" means that in your life (up to NOW), you have this experience. The experience happened in the past, but it's relevant to your present life. It's like saying: "In my life so far, I have this experience."

### 1. Form: Have/Has + Past Participle 📝

The structure is: **have/has** + **past participle**

| Subject | Form | Example |
|---------|------|---------|
| I/We/You/They | **have** + past participle | I **have seen** |
| He/She/It | **has** + past participle | She **has been** |

**Important:** You need the **past participle** (3rd form) of the verb!

**Regular verbs:** work → worked → **worked** (same as past simple)
**Irregular verbs:** go → went → **gone** (different!)

**Common irregular past participles:**
- be → **been**
- see → **seen**
- eat → **eaten**
- do → **done**
- go → **gone**
- write → **written**

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Common Mistake!</strong>
  <br/>
  Don't confuse past simple and past participle!
  <br/>
  - ❌ "I have **went**" (Wrong! went is past simple)
  <br/>
  - ✅ "I have **gone**" (Correct! gone is past participle)
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Use 1: Life Experiences (Have You Ever...?) 🎯

This is the most common use! We use Present Perfect to talk about experiences in our life, without saying **when** exactly.

**Key words:** **ever**, **never**, **before**

**Examples:**
- "I **have been** to Japan." (In my life, I have this experience)
- "Have you **ever eaten** sushi?" (In your life, have you had this experience?)
- "She **has never seen** snow." (In her life, she doesn't have this experience)
- "I **have tried** Italian food **before**." (I have this experience)

**Important:** We DON'T use specific past times (yesterday, last year, in 2010) with this use!

- ❌ "I have been to Paris **last year**." (Wrong!)
- ✅ "I **went** to Paris **last year**." (Use Past Simple with specific times!)
- ✅ "I **have been** to Paris." (Present Perfect - no specific time)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 The "Ever" Question:</h3>
  <p><strong>"Have you ever...?"</strong> is the classic Present Perfect question. It means "In your whole life, have you done this?"</p>
  <ul className="list-disc list-inside mt-2">
    <li>"Have you **ever been** to London?"</li>
    <li>"Have you **ever tried** bungee jumping?"</li>
    <li>"Have you **ever met** a famous person?"</li>
  </ul>
</div>

<GamePlaceholder id="fixTheMistake" />

### 3. Questions and Negatives ❓

**Negative:**
- "I **have not** (haven't) been to Paris."
- "She **has not** (hasn't) seen that movie."

**Question:**
- "**Have** you **been** to Paris?"
- "**Has** she **seen** that movie?"
- "**Have** you **ever eaten** sushi?"

**Short answers:**
- "Yes, I **have**." / "No, I **haven't**."
- "Yes, she **has**." / "No, she **hasn't**."

### 4. Present Perfect vs Past Simple 🔄

This is crucial! Both talk about the past, but differently:

| Present Perfect | Past Simple |
|----------------|-------------|
| No specific time | Specific time |
| "I **have been** to Paris." | "I **went** to Paris **last year**." |
| Experience in your life | Finished action at a specific time |
| Still relevant now | Finished, done |

**Compare:**
- "I **have been** to Paris." (Experience - no time mentioned)
- "I **went** to Paris **in 2019**." (Specific time - use Past Simple)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Rule of Thumb:</h3>
  <p>If you mention <strong>when</strong> something happened (yesterday, last week, in 2010, at 3pm), use <strong>Past Simple</strong>.</p>
  <p>If you don't mention when, and it's about experiences, use <strong>Present Perfect</strong>.</p>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Perfect Experience**
Choose the correct form! Remember: have/has + past participle!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Your Life Experiences</h3>
  <p className="mb-4">Write about your experiences using Present Perfect:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One place you have visited (use "have been")</li>
    <li>One food you have never tried (use "have never eaten")</li>
    <li>One question starting with "Have you ever...?"</li>
  </ol>
</div>
`,
    de: `
## Present Perfect: Deine Lebenserfahrungen 🌍

Das **Present Perfect** ist eine der wichtigsten Zeitformen im Englischen, aber es kann verwirrend sein, weil es über die Vergangenheit spricht... aber es heißt "Present" Perfect! Der Schlüssel ist: Es verbindet die **Vergangenheit** mit der **Gegenwart**.

### Warum "Present" Perfect?

Stell es dir so vor: "I **have been** to Paris" bedeutet, dass du in deinem Leben (bis JETZT) diese Erfahrung hast. Die Erfahrung ist in der Vergangenheit passiert, aber sie ist für dein gegenwärtiges Leben relevant. Es ist wie zu sagen: "In meinem Leben bisher habe ich diese Erfahrung."

### 1. Form: Have/Has + Past Participle 📝

Die Struktur ist: **have/has** + **Past Participle**

| Subjekt | Form | Beispiel |
|---------|------|----------|
| I/We/You/They | **have** + Past Participle | I **have seen** (Ich habe gesehen) |
| He/She/It | **has** + Past Participle | She **has been** (Sie ist gewesen) |

**Wichtig:** Du brauchst das **Past Participle** (3. Form) des Verbs!

**Regelmäßige Verben:** work → worked → **worked** (gleich wie Past Simple)
**Unregelmäßige Verben:** go → went → **gone** (anders!)

**Häufige unregelmäßige Past Participles:**
- be → **been**
- see → **seen**
- eat → **eaten**
- do → **done**
- go → **gone**
- write → **written**

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Häufiger Fehler!</strong>
  <br/>
  Verwechsle nicht Past Simple und Past Participle!
  <br/>
  - ❌ "I have **went**" (Falsch! went ist Past Simple)
  <br/>
  - ✅ "I have **gone**" (Richtig! gone ist Past Participle)
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Verwendung 1: Lebenserfahrungen (Have You Ever...?) 🎯

Das ist die häufigste Verwendung! Wir verwenden Present Perfect, um über Erfahrungen in unserem Leben zu sprechen, ohne zu sagen, **wann** genau.

**Schlüsselwörter:** **ever**, **never**, **before**

**Beispiele:**
- "I **have been** to Japan." (In meinem Leben habe ich diese Erfahrung)
- "Have you **ever eaten** sushi?" (In deinem Leben, hast du diese Erfahrung gemacht?)
- "She **has never seen** snow." (In ihrem Leben hat sie diese Erfahrung nicht)
- "I **have tried** Italian food **before**." (Ich habe diese Erfahrung gemacht)

**Wichtig:** Wir verwenden KEINE spezifischen Zeitangaben (gestern, letztes Jahr, 2010) bei dieser Verwendung!

- ❌ "I have been to Paris **last year**." (Falsch!)
- ✅ "I **went** to Paris **last year**." (Verwende Past Simple mit spezifischen Zeiten!)
- ✅ "I **have been** to Paris." (Present Perfect - keine spezifische Zeit)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Die "Ever"-Frage:</h3>
  <p><strong>"Have you ever...?"</strong> ist die klassische Present Perfect Frage. Es bedeutet "In deinem ganzen Leben, hast du das gemacht?"</p>
  <ul className="list-disc list-inside mt-2">
    <li>"Have you **ever been** to London?"</li>
    <li>"Have you **ever tried** bungee jumping?"</li>
    <li>"Have you **ever met** a famous person?"</li>
  </ul>
</div>

<GamePlaceholder id="fixTheMistake" />

### 3. Fragen und Verneinung ❓

**Verneinung:**
- "I **have not** (haven't) been to Paris." (Ich war noch nie in Paris.)
- "She **has not** (hasn't) seen that movie." (Sie hat diesen Film nicht gesehen.)

**Frage:**
- "**Have** you **been** to Paris?" (Warst du schon mal in Paris?)
- "**Has** she **seen** that movie?" (Hat sie diesen Film gesehen?)
- "**Have** you **ever eaten** sushi?" (Hast du schon mal Sushi gegessen?)

**Kurze Antworten:**
- "Yes, I **have**." / "No, I **haven't**."
- "Yes, she **has**." / "No, she **hasn't**."

### 4. Present Perfect vs Past Simple 🔄

Das ist entscheidend! Beide sprechen über die Vergangenheit, aber unterschiedlich:

| Present Perfect | Past Simple |
|----------------|-------------|
| Keine spezifische Zeit | Spezifische Zeit |
| "I **have been** to Paris." | "I **went** to Paris **last year**." |
| Erfahrung in deinem Leben | Abgeschlossene Handlung zu einer bestimmten Zeit |
| Immer noch relevant | Fertig, erledigt |

**Vergleiche:**
- "I **have been** to Paris." (Erfahrung - keine Zeit erwähnt)
- "I **went** to Paris **in 2019**." (Spezifische Zeit - verwende Past Simple)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Faustregel:</h3>
  <p>Wenn du erwähnst, <strong>wann</strong> etwas passiert ist (gestern, letzte Woche, 2010, um 15 Uhr), verwende <strong>Past Simple</strong>.</p>
  <p>Wenn du nicht erwähnst, wann, und es geht um Erfahrungen, verwende <strong>Present Perfect</strong>.</p>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Perfekte Erfahrung**
Wähle die richtige Form! Denk daran: have/has + Past Participle!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Deine Lebenserfahrungen</h3>
  <p className="mb-4">Schreibe über deine Erfahrungen mit Present Perfect:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Ort, den du besucht hast (verwende "have been")</li>
    <li>Ein Essen, das du noch nie probiert hast (verwende "have never eaten")</li>
    <li>Eine Frage, die mit "Have you ever...?" beginnt</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Deine Erfahrungen',
      description: 'Schreibe über deine Lebenserfahrungen mit Present Perfect.',
      checklist: [
        { text: 'Satz mit "I have been to..." (ein Ort)', checked: false },
        { text: 'Satz mit "I have never..." (etwas, das du nie gemacht hast)', checked: false },
        { text: 'Frage mit "Have you ever...?"', checked: false }
      ]
    },
    en: {
      title: 'Your Experiences',
      description: 'Write about your life experiences using Present Perfect.',
      checklist: [
        { text: 'Sentence with "I have been to..." (a place)', checked: false },
        { text: 'Sentence with "I have never..." (something you\'ve never done)', checked: false },
        { text: 'Question with "Have you ever...?"', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

