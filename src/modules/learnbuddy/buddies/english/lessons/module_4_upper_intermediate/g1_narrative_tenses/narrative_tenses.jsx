import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "While she ___ dinner, the phone rang.", de: "Während sie das Abendessen kochte, klingelte das Telefon." },
    words: ["was cooking", "cooked", "had cooked", "has cooked"],
    correct: "was cooking",
    explanation: { en: "Past Continuous for an ongoing action interrupted by a shorter action (Past Simple).", de: "Past Continuous für eine andauernde Handlung, die durch eine kürzere Handlung (Past Simple) unterbrochen wird." }
  },
  {
    prompt: { en: "By the time we arrived, the concert ___.", de: "Als wir ankamen, hatte das Konzert bereits begonnen." },
    words: ["had already started", "already started", "was already starting", "has already started"],
    correct: "had already started",
    explanation: { en: "Past Perfect for an action completed before another past action.", de: "Past Perfect für eine Handlung, die vor einer anderen vergangenen Handlung abgeschlossen war." }
  },
  {
    prompt: { en: "I ___ along the beach when I found a gold coin.", de: "Ich ging am Strand entlang, als ich eine Goldmünze fand." },
    words: ["was walking", "walked", "had walked", "have walked"],
    correct: "was walking",
    explanation: { en: "Past Continuous sets the background scene; Past Simple describes the sudden event.", de: "Past Continuous setzt die Hintergrundszene; Past Simple beschreibt das plötzliche Ereignis." }
  },
  {
    prompt: { en: "She ___ the letter before she went to the post office.", de: "Sie hatte den Brief geschrieben, bevor sie zur Post ging." },
    words: ["had written", "wrote", "was writing", "has written"],
    correct: "had written",
    explanation: { en: "Past Perfect shows which action happened first in the past.", de: "Past Perfect zeigt, welche Handlung zuerst in der Vergangenheit geschah." }
  },
  {
    prompt: { en: "The sun ___ and the birds were singing when we left the house.", de: "Die Sonne schien und die Vögel sangen, als wir das Haus verließen." },
    words: ["was shining", "shone", "had shone", "has shone"],
    correct: "was shining",
    explanation: { en: "Past Continuous for describing the background atmosphere in a narrative.", de: "Past Continuous zur Beschreibung der Hintergrundatmosphäre in einer Erzählung." }
  },
  {
    prompt: { en: "After he ___ the door, he realised he had left his keys inside.", de: "Nachdem er die Tür geschlossen hatte, bemerkte er, dass er seine Schlüssel drinnen vergessen hatte." },
    words: ["had closed", "closed", "was closing", "has closed"],
    correct: "had closed",
    explanation: { en: "Past Perfect after 'after' to clarify the sequence of past events.", de: "Past Perfect nach 'after', um die Reihenfolge vergangener Ereignisse zu verdeutlichen." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "When I arrived, they were already ate dinner.",
    mistakeIndex: 5,
    correction: "had already eaten",
    explanation: { en: "Use Past Perfect (had eaten), not Past Continuous + past tense, for an action completed before another past event.", de: "Verwende Past Perfect (had eaten), nicht Past Continuous + Vergangenheit, für eine vor einem anderen Ereignis abgeschlossene Handlung." }
  },
  {
    sentence: "She was walking home when she was seeing an old friend.",
    mistakeIndex: 7,
    correction: "saw",
    explanation: { en: "'See' here is a sudden event, so use Past Simple (saw), not Past Continuous.", de: "'See' ist hier ein plötzliches Ereignis, daher verwende Past Simple (saw), nicht Past Continuous." }
  },
  {
    sentence: "He told me that he goes to Paris the week before.",
    mistakeIndex: 5,
    correction: "had gone",
    explanation: { en: "In narrative, when referring to an earlier past event, use Past Perfect (had gone).", de: "In einer Erzählung verwende Past Perfect (had gone), wenn du dich auf ein früheres vergangenes Ereignis beziehst." }
  },
  {
    sentence: "While we had dinner, the lights went out.",
    mistakeIndex: 2,
    correction: "were having",
    explanation: { en: "Use Past Continuous (were having) for the background action in progress, not Past Simple.", de: "Verwende Past Continuous (were having) für die andauernde Hintergrundhandlung, nicht Past Simple." }
  }
];

const grammarRacerData = [
  {
    prompt: "It was midnight. The wind ___ and rain was pouring down.",
    options: ["was howling", "howled", "had howled"],
    correct: "was howling",
    explanation: "Past Continuous for setting the scene in a narrative."
  },
  {
    prompt: "She ___ for two hours before the bus finally came.",
    options: ["had been waiting", "was waiting", "waited"],
    correct: "had been waiting",
    explanation: "Past Perfect Continuous for duration before another past event."
  },
  {
    prompt: "When I opened the door, the cat ___ out immediately.",
    options: ["ran", "was running", "had run"],
    correct: "ran",
    explanation: "Past Simple for a sudden, completed action."
  },
  {
    prompt: "They ___ the movie before, so they didn't want to see it again.",
    options: ["had seen", "saw", "were seeing"],
    correct: "had seen",
    explanation: "Past Perfect for the earlier of two past events."
  },
  {
    prompt: "While everyone ___, someone knocked on the door.",
    options: ["was sleeping", "slept", "had slept"],
    correct: "was sleeping",
    explanation: "Past Continuous for the ongoing background action."
  }
];

export const narrativeTenses = {
  id: 'b2_g1',
  title: {
    en: 'Narrative Tenses – Storytelling with Past Tenses',
    de: 'Erzählzeiten – Geschichten mit Vergangenheitsformen'
  },
  description: {
    en: "Combine Past Simple, Past Continuous, and Past Perfect for vivid storytelling.",
    de: "Kombiniere Past Simple, Past Continuous und Past Perfect für lebendiges Erzählen."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Narrative Tenses – Telling Stories in English 📖

When we tell stories or describe events in the past, we don't just use one tense. We weave together **three key past tenses** to create a rich, layered narrative. Each tense has a specific role to play.

### 1. The Three Tenses 🎭

| Tense | Form | Role in a Story |
|-------|------|-----------------|
| **Past Simple** | did / went / saw | Main events – the plot |
| **Past Continuous** | was doing / were going | Background scenes & atmosphere |
| **Past Perfect** | had done / had gone | Earlier events – backstory |

Think of it like a movie:
- **Past Continuous** = the camera panning across the scene (setting)
- **Past Simple** = the main action happening on screen (plot)
- **Past Perfect** = flashbacks to earlier events (backstory)

### 2. Setting the Scene with Past Continuous 🎬

We use Past Continuous to describe what was **already happening** when the story begins:

- "It **was raining** heavily. People **were rushing** to find shelter."
- "The children **were playing** in the garden. The sun **was setting** behind the hills."

This paints a picture for the reader before the action starts.

### 3. Moving the Plot with Past Simple ▶️

The main events – the things that actually happen – use Past Simple:

- "Suddenly, a car **stopped** in front of the house."
- "She **opened** the letter and **read** it silently."
- "He **stood** up, **grabbed** his coat, and **left**."

### 4. Adding Backstory with Past Perfect ⏪

When you need to refer to something that happened **before** the main story events:

- "She was nervous because she **had never spoken** in public before."
- "The streets were empty – everyone **had gone** home."
- "He didn't recognise her. She **had changed** so much."

### 5. Combining All Three – A Complete Example 🧩

> "It **was** a cold November evening. The wind **was blowing** through the empty streets and the last leaves **were falling** from the trees. Sarah **walked** quickly towards the station. She **was late** – her train **had already left** ten minutes ago. She **had forgotten** to set her alarm that morning, and now she **was paying** the price."

Notice how:
- Past Continuous sets the atmosphere (wind was blowing, leaves were falling)
- Past Simple drives the plot (walked, was late)
- Past Perfect provides the backstory (had already left, had forgotten)

<GamePlaceholder id="sentenceBuilder" />

### 6. Signal Words & Time Markers ⏰

| Signal | Typical Tense | Example |
|--------|--------------|---------|
| when / suddenly / then | Past Simple | "**When** she arrived, he **left**." |
| while / as | Past Continuous | "**While** I **was reading**, she called." |
| before / after / by the time / already | Past Perfect | "**By the time** I arrived, they **had left**." |

### 7. Common Mistakes ❌

**Mistake 1:** Using Past Simple for background descriptions
- ❌ "The birds **sang** and the sun **shone** when he walked in."
- ✅ "The birds **were singing** and the sun **was shining** when he walked in."

**Mistake 2:** Not using Past Perfect for earlier events
- ❌ "She was sad because her cat **died** the week before."
- ✅ "She was sad because her cat **had died** the week before."

**Mistake 3:** Overusing Past Perfect when Past Simple is enough
- ❌ "I **had gone** to the shop and **had bought** some milk." (simple sequence)
- ✅ "I **went** to the shop and **bought** some milk."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Key Rules:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Past Continuous</strong> = background / atmosphere / scene-setting</li>
    <li><strong>Past Simple</strong> = main events / completed actions in sequence</li>
    <li><strong>Past Perfect</strong> = events that happened BEFORE the main story</li>
    <li>Only use Past Perfect when the time difference matters</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Erzählzeiten – Geschichten auf Englisch erzählen 📖

Wenn wir Geschichten erzählen oder Ereignisse in der Vergangenheit beschreiben, verwenden wir nicht nur eine Zeitform. Wir verweben **drei wichtige Vergangenheitsformen**, um eine reichhaltige, vielschichtige Erzählung zu schaffen.

### 1. Die drei Zeitformen 🎭

| Zeitform | Form | Rolle in einer Geschichte |
|----------|------|--------------------------|
| **Past Simple** | did / went / saw | Hauptereignisse – die Handlung |
| **Past Continuous** | was doing / were going | Hintergrundszenen & Atmosphäre |
| **Past Perfect** | had done / had gone | Frühere Ereignisse – Vorgeschichte |

Stell es dir wie einen Film vor:
- **Past Continuous** = die Kamera schwenkt über die Szene (Kulisse)
- **Past Simple** = die Haupthandlung auf dem Bildschirm (Plot)
- **Past Perfect** = Rückblenden auf frühere Ereignisse (Vorgeschichte)

### 2. Die Szene setzen mit Past Continuous 🎬

Wir verwenden Past Continuous, um zu beschreiben, was **bereits passierte**, als die Geschichte beginnt:

- "It **was raining** heavily. People **were rushing** to find shelter."
- "The children **were playing** in the garden. The sun **was setting** behind the hills."

### 3. Die Handlung vorantreiben mit Past Simple ▶️

Die Hauptereignisse – die Dinge, die tatsächlich passieren – verwenden Past Simple:

- "Suddenly, a car **stopped** in front of the house."
- "She **opened** the letter and **read** it silently."

### 4. Vorgeschichte hinzufügen mit Past Perfect ⏪

Wenn du dich auf etwas beziehen musst, das **vor** den Hauptereignissen passierte:

- "She was nervous because she **had never spoken** in public before."
- "The streets were empty – everyone **had gone** home."

### 5. Alle drei kombiniert – Ein vollständiges Beispiel 🧩

> "It **was** a cold November evening. The wind **was blowing** through the empty streets. Sarah **walked** quickly towards the station. She **was late** – her train **had already left** ten minutes ago."

Beachte:
- Past Continuous setzt die Atmosphäre (wind was blowing)
- Past Simple treibt die Handlung voran (walked, was late)
- Past Perfect liefert die Vorgeschichte (had already left)

<GamePlaceholder id="sentenceBuilder" />

### 6. Signalwörter & Zeitmarker ⏰

| Signal | Typische Zeitform | Beispiel |
|--------|------------------|----------|
| when / suddenly / then | Past Simple | "**When** she arrived, he **left**." |
| while / as | Past Continuous | "**While** I **was reading**, she called." |
| before / after / by the time | Past Perfect | "**By the time** I arrived, they **had left**." |

### 7. Häufige Fehler ❌

**Fehler 1:** Past Simple für Hintergrundbeschreibungen verwenden
- ❌ "The birds **sang** when he walked in."
- ✅ "The birds **were singing** when he walked in."

**Fehler 2:** Past Perfect nicht für frühere Ereignisse verwenden
- ❌ "She was sad because her cat **died** the week before."
- ✅ "She was sad because her cat **had died** the week before."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Wichtige Regeln:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Past Continuous</strong> = Hintergrund / Atmosphäre / Szene setzen</li>
    <li><strong>Past Simple</strong> = Hauptereignisse / abgeschlossene Handlungen</li>
    <li><strong>Past Perfect</strong> = Ereignisse VOR der Hauptgeschichte</li>
    <li>Verwende Past Perfect nur, wenn der Zeitunterschied wichtig ist</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  }
};
