import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "If I had studied medicine, I ___ a doctor now.", de: "Wenn ich Medizin studiert hätte, wäre ich jetzt Arzt." },
    words: ["would be", "would have been", "will be", "was"],
    correct: "would be",
    explanation: { en: "Mixed conditional (3rd→2nd): past condition (had studied) + present result (would be now).", de: "Gemischter Konditional (3.→2.): vergangene Bedingung (had studied) + gegenwärtiges Ergebnis (would be now)." }
  },
  {
    prompt: { en: "If she ___ so lazy, she would have passed the exam.", de: "Wenn sie nicht so faul wäre, hätte sie die Prüfung bestanden." },
    words: ["weren't", "hadn't been", "isn't", "wouldn't be"],
    correct: "weren't",
    explanation: { en: "Mixed conditional (2nd→3rd): general/present condition (weren't lazy) + past result (would have passed).", de: "Gemischter Konditional (2.→3.): allgemeine/gegenwärtige Bedingung (weren't lazy) + vergangenes Ergebnis (would have passed)." }
  },
  {
    prompt: { en: "If I hadn't broken my leg, I ___ in the marathon right now.", de: "Wenn ich mir nicht das Bein gebrochen hätte, würde ich jetzt am Marathon teilnehmen." },
    words: ["would be running", "would have run", "will run", "ran"],
    correct: "would be running",
    explanation: { en: "Past condition (hadn't broken) + present ongoing result (would be running now).", de: "Vergangene Bedingung (hadn't broken) + gegenwärtiges andauerndes Ergebnis (would be running now)." }
  },
  {
    prompt: { en: "If he ___ more ambitious, he would have applied for the promotion.", de: "Wenn er ehrgeiziger wäre, hätte er sich um die Beförderung beworben." },
    words: ["were", "had been", "was being", "is"],
    correct: "were",
    explanation: { en: "Mixed (2nd→3rd): present/general quality (were ambitious) + past result (would have applied).", de: "Gemischt (2.→3.): gegenwärtige/allgemeine Eigenschaft (were ambitious) + vergangenes Ergebnis (would have applied)." }
  },
  {
    prompt: { en: "If they had saved more money, they ___ to worry about retirement.", de: "Wenn sie mehr Geld gespart hätten, müssten sie sich jetzt keine Sorgen um die Rente machen." },
    words: ["wouldn't have", "won't have", "didn't have", "wouldn't need"],
    correct: "wouldn't have",
    explanation: { en: "Mixed (3rd→2nd): past condition (had saved) + present result (wouldn't have to worry now).", de: "Gemischt (3.→2.): vergangene Bedingung (had saved) + gegenwärtiges Ergebnis (wouldn't have to worry now)." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "If I had taken that job, I would have been happier now.",
    mistakeIndex: 8,
    correction: "would be happier now",
    explanation: { en: "The result is about NOW, so use 'would be' (2nd conditional result), not 'would have been' (3rd conditional result).", de: "Das Ergebnis bezieht sich auf JETZT, also verwende 'would be' (2. Konditional), nicht 'would have been' (3. Konditional)." }
  },
  {
    sentence: "If she wasn't so stubborn, she would have listened to the advice.",
    mistakeIndex: 2,
    correction: "weren't",
    explanation: { en: "In formal mixed conditionals, use 'weren't' (subjunctive) instead of 'wasn't' for all subjects.", de: "In formellen gemischten Konditionalsätzen verwende 'weren't' (Konjunktiv) statt 'wasn't' für alle Subjekte." }
  },
  {
    sentence: "If I didn't move to London, I wouldn't have met my wife.",
    mistakeIndex: 2,
    correction: "hadn't moved",
    explanation: { en: "The condition is about the PAST (moving to London), so use Past Perfect 'hadn't moved', not Past Simple.", de: "Die Bedingung bezieht sich auf die VERGANGENHEIT, also verwende Past Perfect 'hadn't moved', nicht Past Simple." }
  },
  {
    sentence: "If he were more careful, he wouldn't break his phone yesterday.",
    mistakeIndex: 7,
    correction: "wouldn't have broken",
    explanation: { en: "The result happened in the past (yesterday), so use 'wouldn't have broken', not 'wouldn't break'.", de: "Das Ergebnis geschah in der Vergangenheit (yesterday), also verwende 'wouldn't have broken'." }
  }
];

const grammarRacerData = [
  {
    prompt: "If I had learned to code, I ___ a software developer now.",
    options: ["would be", "would have been", "will be"],
    correct: "would be",
    explanation: "Past condition → present result = would + base verb."
  },
  {
    prompt: "If she ___ so shy, she would have spoken up at the meeting.",
    options: ["weren't", "hadn't been", "isn't"],
    correct: "weren't",
    explanation: "Present/general condition → past result = mixed 2nd→3rd."
  },
  {
    prompt: "If they hadn't missed the flight, they ___ in Paris right now.",
    options: ["would be", "would have been", "are"],
    correct: "would be",
    explanation: "Past condition → present result."
  },
  {
    prompt: "If he ___ taller, he would have been accepted into the basketball team.",
    options: ["were", "had been", "is"],
    correct: "were",
    explanation: "General/permanent condition → past result = 2nd→3rd mixed."
  }
];

export const mixedConditionals = {
  id: 'b2_g4',
  title: {
    en: 'Mixed Conditionals – Crossing Time in If-Sentences',
    de: 'Gemischte Konditionalsätze – Zeitübergreifende If-Sätze'
  },
  description: {
    en: "Combine 2nd and 3rd conditional structures when the condition and result are in different times.",
    de: "Kombiniere 2. und 3. Konditional, wenn Bedingung und Ergebnis in verschiedenen Zeiten liegen."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Mixed Conditionals – When Past Meets Present 🔄

Standard conditionals keep both the condition and the result in the same time frame. But what happens when a **past** event affects the **present**, or a **general truth** explains a **past** result? That's where **mixed conditionals** come in.

### 1. Type A: Past Condition → Present Result (3rd → 2nd) 📐

**Structure:** If + Past Perfect, ... would + base verb (now)

This is the most common mixed conditional. A past event has a result that is still true NOW.

- "If I **had accepted** that job offer, I **would be** living in New York now."
  - (I didn't accept → so I'm not in New York now)
- "If she **hadn't missed** the train, she **would be** at work already."
  - (She missed it → so she's not at work yet)
- "If they **had invested** in Bitcoin early, they **would be** millionaires today."
  - (They didn't invest → so they're not millionaires)

> 💡 The clue: the if-clause talks about the **past** (had + past participle), but the result is about **now** (would + verb).

### 2. Type B: Present/General Condition → Past Result (2nd → 3rd) 📐

**Structure:** If + Past Simple, ... would have + past participle

A general truth or permanent characteristic explains why something happened (or didn't happen) in the past.

- "If she **weren't** so afraid of flying, she **would have travelled** more."
  - (She IS afraid of flying → so she DIDN'T travel)
- "If he **spoke** better English, he **would have got** the job."
  - (He DOESN'T speak well → so he DIDN'T get the job)
- "If I **weren't** allergic to cats, I **would have adopted** one years ago."
  - (I AM allergic → so I DIDN'T adopt one)

> 💡 The clue: the if-clause describes a **permanent/present** situation, but the result is about the **past**.

### 3. Visual Timeline 📊

**Type A (3rd → 2nd):**
\`\`\`
PAST ────────────────── NOW
If I had studied...   → I would be a doctor now.
  (condition)            (result)
\`\`\`

**Type B (2nd → 3rd):**
\`\`\`
ALWAYS/NOW ──────────── PAST
If I were braver...   → I would have spoken up.
  (condition)            (result)
\`\`\`

<GamePlaceholder id="sentenceBuilder" />

### 4. Comparison with Standard Conditionals

| Type | If-clause | Result clause | Time Frame |
|------|-----------|--------------|------------|
| **2nd** | Past Simple | would + verb | present → present |
| **3rd** | Past Perfect | would have + pp | past → past |
| **Mixed A** | Past Perfect | would + verb | past → present |
| **Mixed B** | Past Simple | would have + pp | present → past |

### 5. Common Mistakes ❌

**Mistake 1:** Using 'would have been' when the result is about now
- ❌ "If I had gone to university, I **would have been** richer now."
- ✅ "If I had gone to university, I **would be** richer now."

**Mistake 2:** Using Past Simple for a past condition
- ❌ "If I **didn't go** to that party, I wouldn't know her now."
- ✅ "If I **hadn't gone** to that party, I wouldn't know her now."

**Mistake 3:** Confusing which type to use
- Ask: Is the condition about the **past** or **present/general**?
- Ask: Is the result about the **past** or **present/now**?

<GamePlaceholder id="fixTheMistake" />

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 How to Choose:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Past cause + present effect → <strong>Type A</strong> (If + had done, would + do)</li>
    <li>Permanent trait + past consequence → <strong>Type B</strong> (If + did, would have + done)</li>
    <li>Look for time clues: "now", "today", "at the moment" → present result</li>
    <li>Look for time clues: "yesterday", "last year" → past result</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Gemischte Konditionalsätze – Wenn Vergangenheit auf Gegenwart trifft 🔄

Standard-Konditionalsätze halten Bedingung und Ergebnis im gleichen Zeitrahmen. Aber was passiert, wenn ein **vergangenes** Ereignis die **Gegenwart** beeinflusst, oder eine **allgemeine Wahrheit** ein **vergangenes** Ergebnis erklärt? Hier kommen **gemischte Konditionalsätze** ins Spiel.

### 1. Typ A: Vergangene Bedingung → Gegenwärtiges Ergebnis (3. → 2.) 📐

**Struktur:** If + Past Perfect, ... would + Grundform (jetzt)

Ein vergangenes Ereignis hat ein Ergebnis, das JETZT noch wahr ist.

- "If I **had accepted** that job, I **would be** in New York now."
  - (Ich habe nicht angenommen → also bin ich nicht in New York)
- "If she **hadn't missed** the train, she **would be** at work already."
  - (Sie hat ihn verpasst → also ist sie noch nicht bei der Arbeit)
- "If they **had invested** early, they **would be** millionaires today."
  - (Sie haben nicht investiert → also sind sie keine Millionäre)

> 💡 Der Hinweis: der if-Satz spricht über die **Vergangenheit** (had + Partizip), aber das Ergebnis ist über **jetzt** (would + Verb).

### 2. Typ B: Gegenwärtige Bedingung → Vergangenes Ergebnis (2. → 3.) 📐

**Struktur:** If + Past Simple, ... would have + Partizip Perfekt

Eine allgemeine Wahrheit oder permanente Eigenschaft erklärt, warum etwas in der Vergangenheit passiert ist (oder nicht).

- "If she **weren't** so afraid of flying, she **would have travelled** more."
  - (Sie IST flugängstlich → also hat sie NICHT gereist)
- "If he **spoke** better English, he **would have got** the job."
  - (Er SPRICHT nicht gut → also hat er den Job NICHT bekommen)

### 3. Visuelle Zeitlinie 📊

**Typ A (3. → 2.):**
\`\`\`
VERGANGENHEIT ────────── JETZT
If I had studied...    → I would be a doctor now.
  (Bedingung)             (Ergebnis)
\`\`\`

**Typ B (2. → 3.):**
\`\`\`
IMMER/JETZT ────────── VERGANGENHEIT
If I were braver...   → I would have spoken up.
  (Bedingung)            (Ergebnis)
\`\`\`

<GamePlaceholder id="sentenceBuilder" />

### 4. Vergleich mit Standard-Konditionalsätzen

| Typ | If-Satz | Ergebnis | Zeitrahmen |
|-----|---------|----------|------------|
| **2.** | Past Simple | would + Verb | Gegenwart → Gegenwart |
| **3.** | Past Perfect | would have + PP | Vergangenheit → Vergangenheit |
| **Gemischt A** | Past Perfect | would + Verb | Vergangenheit → Gegenwart |
| **Gemischt B** | Past Simple | would have + PP | Gegenwart → Vergangenheit |

### 5. Häufige Fehler ❌

**Fehler 1:** 'Would have been' verwenden, wenn das Ergebnis über jetzt ist
- ❌ "If I had gone to university, I **would have been** richer now."
- ✅ "If I had gone to university, I **would be** richer now."

**Fehler 2:** Past Simple für eine vergangene Bedingung verwenden
- ❌ "If I **didn't go** to that party, I wouldn't know her now."
- ✅ "If I **hadn't gone** to that party, I wouldn't know her now."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Wie man wählt:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Vergangene Ursache + gegenwärtiges Ergebnis → <strong>Typ A</strong></li>
    <li>Permanente Eigenschaft + vergangene Folge → <strong>Typ B</strong></li>
    <li>Achte auf Zeithinweise: "now", "today" → gegenwärtiges Ergebnis</li>
    <li>Achte auf Zeithinweise: "yesterday", "last year" → vergangenes Ergebnis</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  }
};
