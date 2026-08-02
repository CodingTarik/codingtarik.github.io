import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ (read) when you called.", de: "Ich ___ (lesen), als du anriefst." },
    words: ["was reading", "read", "am reading", "reading"],
    correct: "was reading",
    explanation: { en: "Past continuous: was/were + verb-ing", de: "Past continuous: was/were + Verb-ing" }
  },
  {
    prompt: { en: "They ___ (play) football at 3pm yesterday.", de: "Sie ___ (spielen) gestern um 15 Uhr Fußball." },
    words: ["were playing", "played", "are playing", "play"],
    correct: "were playing",
    explanation: { en: "They were playing (past continuous)", de: "They were playing (Past continuous)" }
  },
  {
    prompt: { en: "What ___ you ___ (do) when I saw you?", de: "Was ___ du ___ (tun), als ich dich sah?" },
    words: ["were doing", "did do", "are doing", "do"],
    correct: "were doing",
    explanation: { en: "Question: were you doing?", de: "Frage: were you doing?" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I was watch TV when the phone rang.",
    mistakeIndex: 2,
    correction: "watching",
    explanation: { en: "Past continuous: was watching (verb + -ing)", de: "Past continuous: was watching (Verb + -ing)" }
  },
  {
    sentence: "They was playing tennis.",
    mistakeIndex: 1,
    correction: "were",
    explanation: { en: "They were (plural), not They was", de: "They were (Plural), nicht They was" }
  },
  {
    sentence: "What did you doing?",
    mistakeIndex: 1,
    correction: "were you",
    explanation: { en: "Past continuous question: were you doing?", de: "Past continuous Frage: were you doing?" }
  }
];

const grammarRacerData = [
  {
    prompt: "I ___ a book when the doorbell rang.",
    options: ["was reading", "read", "am reading"],
    correct: "was reading",
    explanation: "Past continuous: was reading"
  },
  {
    prompt: "They ___ football at 5pm yesterday.",
    options: ["were playing", "played", "are playing"],
    correct: "were playing",
    explanation: "Past continuous: were playing"
  },
  {
    prompt: "She ___ when I arrived.",
    options: ["was sleeping", "slept", "sleeps"],
    correct: "was sleeping",
    explanation: "Past continuous: was sleeping"
  }
];

export const pastContinuous = {
  id: 'a2_g6',
  title: {
    en: 'Past Continuous (I was doing)',
    de: 'Past Continuous (Ich war dabei, etwas zu tun)'
  },
  description: {
    en: "Describing actions in progress in the past. 'I was reading', 'They were playing'.",
    de: "Handlungen beschreiben, die in der Vergangenheit im Gange waren. 'Ich las gerade', 'Sie spielten gerade'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Past Continuous: What Was Happening? 🎬

The **Past Continuous** (also called Past Progressive) describes actions that were **in progress** at a specific time in the past. Think of it as a "movie scene" from the past - something was happening, and maybe something else interrupted it.

### Why Do We Need This Tense?

Imagine you want to tell a story: "Yesterday at 3pm, I was reading a book. Then, suddenly, the phone rang." The Past Continuous sets the scene - it shows what was happening in the background when another action occurred.

### 1. Form: Was/Were + Verb-ing 📝

The structure is simple: **was/were** + **verb + -ing**

| Subject | Form | Example |
|---------|------|---------|
| I/He/She/It | **was** + verb-ing | I **was reading** |
| We/You/They | **were** + verb-ing | They **were playing** |

**Examples:**
- "I **was studying** when you called."
- "She **was cooking** dinner at 6pm."
- "We **were watching** a movie."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p>Just like Present Continuous, you need <strong>-ing</strong> at the end of the verb!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. When to Use Past Continuous 🎯

#### A) Action in Progress at a Specific Time

"When I arrived at 8pm, they **were having** dinner."
→ At 8pm, the dinner was already happening.

#### B) Two Actions: One Interrupted the Other

"I **was reading** when the phone **rang**."
→ The reading (long action) was interrupted by the phone ringing (short action).

**Pattern:** Past Continuous (long action) + **when** + Past Simple (short action)

#### C) Two Actions Happening at the Same Time

"While I **was cooking**, my sister **was setting** the table."
→ Both actions happened simultaneously.

**Pattern:** **While** + Past Continuous + Past Continuous

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Important:</h3>
  <p>Past Continuous is for <strong>actions</strong>, not states. We don't usually say "I was knowing" or "I was having" (when it means possession).</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 3. Questions and Negatives ❓

**Negative:**
- "I **was not** (wasn't) sleeping."
- "They **were not** (weren't) playing."

**Question:**
- "**Was** she studying?"
- "**Were** you watching TV?"
- "What **were** you **doing**?"

### 4. Past Continuous vs Past Simple 🔄

This is important! Both tenses talk about the past, but differently:

| Past Simple | Past Continuous |
|-------------|----------------|
| Finished action | Action in progress |
| "I **read** a book yesterday." | "I **was reading** when you called." |
| Complete, done | Ongoing, interrupted |

**Compare:**
- "I **watched** TV for 2 hours." (finished watching)
- "I **was watching** TV when the power went out." (interrupted)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Continuous Action**
Choose the correct form! Remember: was/were + verb-ing!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Write Your Story</h3>
  <p className="mb-4">Think about yesterday evening. What were you doing at 7pm? Write 3 sentences using Past Continuous:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence about what you were doing at a specific time</li>
    <li>One sentence about an interrupted action (use "when")</li>
    <li>One sentence about two simultaneous actions (use "while")</li>
  </ol>
</div>
`,
    de: `
## Past Continuous: Was war gerade los? 🎬

Das **Past Continuous** (auch Past Progressive) beschreibt Handlungen, die zu einem bestimmten Zeitpunkt in der Vergangenheit **im Gange** waren. Stell es dir wie eine "Filmszene" aus der Vergangenheit vor - etwas passierte gerade, und vielleicht wurde es von etwas anderem unterbrochen.

### Warum brauchen wir diese Zeitform?

Stell dir vor, du willst eine Geschichte erzählen: "Gestern um 15 Uhr las ich gerade ein Buch. Dann klingelte plötzlich das Telefon." Das Past Continuous setzt die Szene - es zeigt, was im Hintergrund passierte, als eine andere Handlung eintrat.

### 1. Form: Was/Were + Verb-ing 📝

Die Struktur ist einfach: **was/were** + **Verb + -ing**

| Subjekt | Form | Beispiel |
|---------|------|----------|
| I/He/She/It | **was** + Verb-ing | I **was reading** (Ich las gerade) |
| We/You/They | **were** + Verb-ing | They **were playing** (Sie spielten gerade) |

**Beispiele:**
- "I **was studying** when you called." (Ich lernte gerade, als du anriefst.)
- "She **was cooking** dinner at 6pm." (Sie kochte um 18 Uhr gerade Abendessen.)
- "We **were watching** a movie." (Wir sahen gerade einen Film.)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p>Genau wie beim Present Continuous brauchst du <strong>-ing</strong> am Ende des Verbs!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Wann verwendet man Past Continuous? 🎯

#### A) Handlung im Gange zu einem bestimmten Zeitpunkt

"When I arrived at 8pm, they **were having** dinner."
(Als ich um 20 Uhr ankam, aßen sie gerade zu Abend.)
→ Um 20 Uhr war das Abendessen bereits im Gange.

#### B) Zwei Handlungen: Eine unterbrach die andere

"I **was reading** when the phone **rang**."
(Ich las gerade, als das Telefon klingelte.)
→ Das Lesen (lange Handlung) wurde vom Telefonklingeln (kurze Handlung) unterbrochen.

**Muster:** Past Continuous (lange Handlung) + **when** + Past Simple (kurze Handlung)

#### C) Zwei gleichzeitig ablaufende Handlungen

"While I **was cooking**, my sister **was setting** the table."
(Während ich kochte, deckte meine Schwester den Tisch.)
→ Beide Handlungen liefen gleichzeitig ab.

**Muster:** **While** + Past Continuous + Past Continuous

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Wichtig:</h3>
  <p>Past Continuous ist für <strong>Handlungen</strong>, nicht für Zustände. Wir sagen normalerweise nicht "I was knowing" oder "I was having" (wenn es Besitz bedeutet).</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 3. Fragen und Verneinung ❓

**Verneinung:**
- "I **was not** (wasn't) sleeping." (Ich schlief nicht.)
- "They **were not** (weren't) playing." (Sie spielten nicht.)

**Frage:**
- "**Was** she studying?" (Lernte sie gerade?)
- "**Were** you watching TV?" (Sahst du gerade fern?)
- "What **were** you **doing**?" (Was hast du gerade gemacht?)

### 4. Past Continuous vs Past Simple 🔄

Das ist wichtig! Beide Zeitformen sprechen über die Vergangenheit, aber unterschiedlich:

| Past Simple | Past Continuous |
|-------------|----------------|
| Abgeschlossene Handlung | Handlung im Gange |
| "I **read** a book yesterday." | "I **was reading** when you called." |
| Fertig, erledigt | Andauernd, unterbrochen |

**Vergleiche:**
- "I **watched** TV for 2 hours." (Ich sah 2 Stunden fern - fertig)
- "I **was watching** TV when the power went out." (Ich sah gerade fern, als der Strom ausfiel - unterbrochen)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Andauernde Handlung**
Wähle die richtige Form! Denk daran: was/were + Verb-ing!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Schreibe deine Geschichte</h3>
  <p className="mb-4">Denk an gestern Abend. Was hast du um 19 Uhr gemacht? Schreibe 3 Sätze im Past Continuous:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz darüber, was du zu einem bestimmten Zeitpunkt gemacht hast</li>
    <li>Ein Satz über eine unterbrochene Handlung (verwende "when")</li>
    <li>Ein Satz über zwei gleichzeitige Handlungen (verwende "while")</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Gestern um diese Zeit...',
      description: 'Was hast du gestern um 19 Uhr gemacht? Schreibe 3 Sätze im Past Continuous.',
      checklist: [
        { text: 'Satz mit "I was..." zu einem bestimmten Zeitpunkt', checked: false },
        { text: 'Satz mit unterbrochener Handlung (verwende "when")', checked: false },
        { text: 'Satz mit zwei gleichzeitigen Handlungen (verwende "while")', checked: false }
      ]
    },
    en: {
      title: 'Yesterday at this time...',
      description: 'What were you doing yesterday at 7pm? Write 3 sentences using Past Continuous.',
      checklist: [
        { text: 'Sentence with "I was..." at a specific time', checked: false },
        { text: 'Sentence with interrupted action (use "when")', checked: false },
        { text: 'Sentence with two simultaneous actions (use "while")', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

