import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "She ___ in London since 2018.", de: "Sie lebt seit 2018 in London." },
    words: ["has lived", "lives", "lived", "is living"],
    correct: "has lived",
    explanation: { en: "Present Perfect for an action that started in the past and continues to the present (since 2018).", de: "Present Perfect für eine Handlung, die in der Vergangenheit begann und bis zur Gegenwart andauert (since 2018)." }
  },
  {
    prompt: { en: "I ___ three cups of coffee today, and it's only 10 AM.", de: "Ich habe heute schon drei Tassen Kaffee getrunken, und es ist erst 10 Uhr." },
    words: ["have had", "had", "am having", "have"],
    correct: "have had",
    explanation: { en: "Present Perfect for an action within an unfinished time period (today).", de: "Present Perfect für eine Handlung innerhalb eines unabgeschlossenen Zeitraums (heute)." }
  },
  {
    prompt: { en: "By the time you read this, I ___ the country.", de: "Wenn du das liest, werde ich das Land bereits verlassen haben." },
    words: ["will have left", "will leave", "have left", "am leaving"],
    correct: "will have left",
    explanation: { en: "Future Perfect for an action completed before a specific future moment.", de: "Future Perfect für eine Handlung, die vor einem bestimmten zukünftigen Zeitpunkt abgeschlossen ist." }
  },
  {
    prompt: { en: "While I ___ to work yesterday, I saw a deer.", de: "Während ich gestern zur Arbeit fuhr, sah ich ein Reh." },
    words: ["was driving", "drove", "had driven", "have driven"],
    correct: "was driving",
    explanation: { en: "Past Continuous for the background action interrupted by a sudden event.", de: "Past Continuous für die Hintergrundhandlung, die durch ein plötzliches Ereignis unterbrochen wurde." }
  },
  {
    prompt: { en: "He ___ German since he was twelve – he's fluent now.", de: "Er lernt Deutsch, seit er zwölf war – er spricht es jetzt fließend." },
    words: ["has been learning", "learns", "was learning", "learned"],
    correct: "has been learning",
    explanation: { en: "Present Perfect Continuous for an action that started in the past and continues, emphasising duration.", de: "Present Perfect Continuous für eine Handlung, die in der Vergangenheit begann und andauert, mit Betonung der Dauer." }
  },
  {
    prompt: { en: "Every morning, she ___ up at 6 and goes for a run.", de: "Jeden Morgen steht sie um 6 auf und geht laufen." },
    words: ["gets", "is getting", "has got", "got"],
    correct: "gets",
    explanation: { en: "Present Simple for regular habits and routines.", de: "Present Simple für regelmäßige Gewohnheiten und Routinen." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I am living here since 2015.",
    mistakeIndex: 1,
    correction: "have lived",
    explanation: { en: "With 'since', use Present Perfect (have lived), not Present Continuous.", de: "Mit 'since' verwende Present Perfect (have lived), nicht Present Continuous." }
  },
  {
    sentence: "When I arrived, they already left.",
    mistakeIndex: 4,
    correction: "had already left",
    explanation: { en: "Use Past Perfect (had left) for the earlier of two past events.", de: "Verwende Past Perfect (had left) für das frühere von zwei vergangenen Ereignissen." }
  },
  {
    sentence: "She has been to Paris last summer.",
    mistakeIndex: 1,
    correction: "went",
    explanation: { en: "With a finished time expression (last summer), use Past Simple, not Present Perfect.", de: "Mit einem abgeschlossenen Zeitausdruck (last summer) verwende Past Simple, nicht Present Perfect." }
  },
  {
    sentence: "I will have finished the project tomorrow at 5 PM if I will work hard.",
    mistakeIndex: 11,
    correction: "work",
    explanation: { en: "After 'if', don't use 'will'. Use Present Simple in conditional/time clauses.", de: "Nach 'if' verwende kein 'will'. Verwende Present Simple in Konditional-/Zeitsätzen." }
  }
];

const grammarRacerData = [
  {
    prompt: "I ___ never ___ sushi before I went to Japan.",
    options: ["had ... tried", "have ... tried", "was ... trying"],
    correct: "had ... tried",
    explanation: "Past Perfect for experience before another past event."
  },
  {
    prompt: "Water ___ at 100 degrees Celsius.",
    options: ["boils", "is boiling", "has boiled"],
    correct: "boils",
    explanation: "Present Simple for scientific facts."
  },
  {
    prompt: "This time next week, I ___ on a beach in Thailand.",
    options: ["will be lying", "will lie", "lie"],
    correct: "will be lying",
    explanation: "Future Continuous for an action in progress at a specific future time."
  },
  {
    prompt: "She ___ to the gym three times a week.",
    options: ["goes", "is going", "has gone"],
    correct: "goes",
    explanation: "Present Simple for regular routines."
  },
  {
    prompt: "I can't go out. I ___ my homework yet.",
    options: ["haven't finished", "didn't finish", "don't finish"],
    correct: "haven't finished",
    explanation: "Present Perfect with 'yet' for an incomplete action."
  }
];

export const mixedTensesReview = {
  id: 'b2_g3',
  title: {
    en: 'Mixed Tenses Review – All 12 English Tenses',
    de: 'Gemischte Zeiten im Überblick – Alle 12 englischen Zeitformen'
  },
  description: {
    en: "A comprehensive review of all 12 English tenses: when and why to use each one.",
    de: "Ein umfassender Überblick über alle 12 englischen Zeitformen: wann und warum jede verwendet wird."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Mixed Tenses Review – The Complete Picture 🧭

English has **12 tenses** formed from combinations of time (past, present, future) and aspect (simple, continuous, perfect, perfect continuous). Here's the complete overview.

### 1. The 12 Tenses at a Glance 📊

| | **Simple** | **Continuous** | **Perfect** | **Perfect Continuous** |
|---|---|---|---|---|
| **Present** | I work | I am working | I have worked | I have been working |
| **Past** | I worked | I was working | I had worked | I had been working |
| **Future** | I will work | I will be working | I will have worked | I will have been working |

### 2. Present Tenses 🔵

**Present Simple** – facts, habits, routines
- "She **works** in a bank." / "Water **boils** at 100°C."

**Present Continuous** – now, temporary, changing situations
- "I**'m reading** a great book." / "The climate **is getting** warmer."

**Present Perfect** – past action connected to now, experience, unfinished time
- "I**'ve visited** 20 countries." / "She **has lived** here since 2010."

**Present Perfect Continuous** – action started in past, still continuing, emphasis on duration
- "I**'ve been waiting** for an hour!" / "He**'s been studying** all day."

### 3. Past Tenses 🟠

**Past Simple** – completed actions at a specific past time
- "I **went** to Rome last year." / "She **didn't call** me."

**Past Continuous** – background action, in progress at a past time
- "I **was cooking** when the phone rang."

**Past Perfect** – the earlier of two past events
- "When I arrived, they **had already left**."

**Past Perfect Continuous** – duration of an action before another past event
- "She **had been working** for hours before she took a break."

### 4. Future Tenses 🟢

**Future Simple (will)** – predictions, spontaneous decisions, promises
- "I **will help** you." / "It **will rain** tomorrow."

**Future Continuous** – in progress at a specific future time
- "At 8 PM, I**'ll be watching** the match."

**Future Perfect** – completed before a future point
- "By December, I**'ll have finished** the course."

**Future Perfect Continuous** – duration up to a future point
- "By June, she**'ll have been teaching** for 20 years."

<GamePlaceholder id="sentenceBuilder" />

### 5. Common Confusion Points 🤔

**Present Perfect vs Past Simple**
- ✅ "I **have been** to Japan." (experience, time not important)
- ✅ "I **went** to Japan **last year**." (specific past time)
- ❌ "I **have been** to Japan **last year**." (WRONG – don't mix!)

**Present Perfect vs Present Perfect Continuous**
- "I**'ve read** three books this month." (focus on result/quantity)
- "I**'ve been reading** all morning." (focus on duration/activity)

**Past Simple vs Past Perfect**
- "When I arrived, the film **started**." (= at the same time)
- "When I arrived, the film **had started**." (= before I arrived)

### 6. Key Time Signals ⏰

| Signal Words | Typical Tense |
|-------------|--------------|
| always, usually, every day | Present Simple |
| now, at the moment, currently | Present Continuous |
| already, yet, just, ever, never, since, for | Present Perfect |
| yesterday, last week, in 2020, ago | Past Simple |
| while, as | Past Continuous |
| before, after, by the time, already (past) | Past Perfect |
| tomorrow, next week, in 2030 | Future (will/going to) |
| by + future time | Future Perfect |

### 7. Common Mistakes ❌

**Mistake 1:** Using Present Perfect with finished time
- ❌ "I **have seen** that film **yesterday**."
- ✅ "I **saw** that film **yesterday**."

**Mistake 2:** Using 'will' after time conjunctions
- ❌ "When she **will arrive**, I'll call you."
- ✅ "When she **arrives**, I'll call you."

**Mistake 3:** Using Present Continuous for permanent situations
- ❌ "She **is living** in Berlin." (if permanent)
- ✅ "She **lives** in Berlin."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Master Tips:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Ask: <strong>When?</strong> (past, present, future) → choose the TIME</li>
    <li>Ask: <strong>How?</strong> (complete, in progress, connected to now, duration) → choose the ASPECT</li>
    <li>Look for <strong>signal words</strong> to guide your choice</li>
    <li>Remember: <strong>time clauses</strong> (when, after, before, until) take Present Simple for future meaning</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Gemischte Zeiten im Überblick – Das vollständige Bild 🧭

Englisch hat **12 Zeitformen**, die aus Kombinationen von Zeit (Vergangenheit, Gegenwart, Zukunft) und Aspekt (Simple, Continuous, Perfect, Perfect Continuous) gebildet werden.

### 1. Die 12 Zeitformen auf einen Blick 📊

| | **Simple** | **Continuous** | **Perfect** | **Perfect Continuous** |
|---|---|---|---|---|
| **Present** | I work | I am working | I have worked | I have been working |
| **Past** | I worked | I was working | I had worked | I had been working |
| **Future** | I will work | I will be working | I will have worked | I will have been working |

### 2. Gegenwartsformen 🔵

**Present Simple** – Fakten, Gewohnheiten, Routinen
- "She **works** in a bank." / "Water **boils** at 100°C."

**Present Continuous** – jetzt, vorübergehend, sich ändernde Situationen
- "I**'m reading** a great book." / "The climate **is getting** warmer."

**Present Perfect** – vergangene Handlung mit Bezug zur Gegenwart
- "I**'ve visited** 20 countries." / "She **has lived** here since 2010."

**Present Perfect Continuous** – Betonung der Dauer einer andauernden Handlung
- "I**'ve been waiting** for an hour!" / "He**'s been studying** all day."

### 3. Vergangenheitsformen 🟠

**Past Simple** – abgeschlossene Handlungen zu einem bestimmten Zeitpunkt
- "I **went** to Rome last year." / "She **didn't call** me."

**Past Continuous** – Hintergrundhandlung, im Verlauf
- "I **was cooking** when the phone rang."

**Past Perfect** – das frühere von zwei vergangenen Ereignissen
- "When I arrived, they **had already left**."

**Past Perfect Continuous** – Dauer einer Handlung vor einem anderen vergangenen Ereignis
- "She **had been working** for hours before she took a break."

### 4. Zukunftsformen 🟢

**Future Simple** – Vorhersagen, spontane Entscheidungen
- "I **will help** you." / "It **will rain** tomorrow."

**Future Continuous** – im Verlauf zu einem zukünftigen Zeitpunkt
- "At 8 PM, I**'ll be watching** the match."

**Future Perfect** – abgeschlossen vor einem zukünftigen Zeitpunkt
- "By December, I**'ll have finished** the course."

**Future Perfect Continuous** – Dauer bis zu einem zukünftigen Zeitpunkt
- "By June, she**'ll have been teaching** for 20 years."

<GamePlaceholder id="sentenceBuilder" />

### 5. Häufige Verwechslungen 🤔

**Present Perfect vs Past Simple**
- ✅ "I **have been** to Japan." (Erfahrung, Zeit unwichtig)
- ✅ "I **went** to Japan **last year**." (bestimmte Zeit)
- ❌ "I **have been** to Japan **last year**." (FALSCH!)

**Past Simple vs Past Perfect**
- "When I arrived, the film **started**." (= gleichzeitig)
- "When I arrived, the film **had started**." (= vorher)

### 6. Signalwörter ⏰

| Signalwörter | Typische Zeitform |
|-------------|------------------|
| always, usually, every day | Present Simple |
| now, at the moment | Present Continuous |
| already, yet, since, for | Present Perfect |
| yesterday, last week, ago | Past Simple |
| while, as | Past Continuous |
| before, by the time | Past Perfect |
| by + Zukunftszeit | Future Perfect |

### 7. Häufige Fehler ❌

**Fehler 1:** Present Perfect mit abgeschlossener Zeit verwenden
- ❌ "I **have seen** that film **yesterday**."
- ✅ "I **saw** that film **yesterday**."

**Fehler 2:** 'Will' nach Zeitkonjunktionen verwenden
- ❌ "When she **will arrive**, I'll call you."
- ✅ "When she **arrives**, I'll call you."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Meister-Tipps:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Frage: <strong>Wann?</strong> (Vergangenheit, Gegenwart, Zukunft) → wähle die ZEIT</li>
    <li>Frage: <strong>Wie?</strong> (abgeschlossen, im Verlauf, mit Bezug zu jetzt) → wähle den ASPEKT</li>
    <li>Achte auf <strong>Signalwörter</strong></li>
    <li><strong>Zeitsätze</strong> (when, after, before) nehmen Present Simple für Zukunftsbedeutung</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  }
};
