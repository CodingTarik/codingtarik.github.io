import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: '"I will help you," she said. → She said she ___ help me.', de: '"Ich werde dir helfen," sagte sie. → Sie sagte, sie würde mir helfen.' },
    words: ["would", "will", "could", "should"],
    correct: "would",
    explanation: { en: "Backshift: will → would.", de: "Zeitverschiebung: will → would." }
  },
  {
    prompt: { en: '"I have finished," he said. → He said he ___ finished.', de: '"Ich habe es geschafft," sagte er. → Er sagte, er hätte es geschafft.' },
    words: ["had", "has", "have", "was"],
    correct: "had",
    explanation: { en: "Backshift: have → had.", de: "Zeitverschiebung: have → had." }
  },
  {
    prompt: { en: '"I can swim," she said. → She said she ___ swim.', de: '"Ich kann schwimmen," sagte sie. → Sie sagte, sie könnte schwimmen.' },
    words: ["could", "can", "would", "should"],
    correct: "could",
    explanation: { en: "Backshift: can → could.", de: "Zeitverschiebung: can → could." }
  }
];

const fixTheMistakeData = [
  {
    sentence: 'He said he will come tomorrow.',
    mistakeIndex: 3,
    correction: "would",
    explanation: { en: "Backshift rule: 'will' becomes 'would' in reported speech.", de: "Zeitverschiebung: 'will' wird zu 'would' in indirekter Rede." }
  },
  {
    sentence: 'She told that she was tired.',
    mistakeIndex: 1,
    correction: "told me",
    explanation: { en: "'Tell' needs an object: 'told me/him/her'. Or use 'said' without object.", de: "'Tell' braucht ein Objekt: 'told me/him/her'. Oder benutze 'said' ohne Objekt." }
  },
  {
    sentence: 'He said me he was leaving.',
    mistakeIndex: 1,
    correction: "told",
    explanation: { en: "'Said' doesn't take a direct object. Use 'told me' or 'said to me'.", de: "'Said' nimmt kein direktes Objekt. Benutze 'told me' oder 'said to me'." }
  }
];

const grammarRacerData = [
  {
    prompt: '"I am working." → She said she ___ working.',
    options: ["was", "is", "has been"],
    correct: "was",
    explanation: "Backshift: am → was."
  },
  {
    prompt: '"I bought a car." → He said he ___ a car.',
    options: ["had bought", "bought", "has bought"],
    correct: "had bought",
    explanation: "Backshift: past simple → past perfect."
  },
  {
    prompt: '"I must leave." → She said she ___ leave.',
    options: ["had to", "must", "should"],
    correct: "had to",
    explanation: "Backshift: must → had to."
  }
];

export const reportedSpeech2 = {
  id: 'b1_g48',
  title: {
    en: 'Reported Speech 2 – Complex Backshift',
    de: 'Indirekte Rede 2 – Komplexe Zeitverschiebung'
  },
  description: {
    en: "Advanced reported speech: backshift rules for all tenses and modals.",
    de: "Fortgeschrittene indirekte Rede: Zeitverschiebungsregeln für alle Zeitformen und Modalverben."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Reported Speech 2 – Complex Backshift 🔙📢

### 1. Complete Backshift Table 📊

| Direct Speech | Reported Speech |
|--------------|-----------------|
| **Present simple** (I work) | **Past simple** (he worked) |
| **Present continuous** (I am working) | **Past continuous** (he was working) |
| **Past simple** (I worked) | **Past perfect** (he had worked) |
| **Present perfect** (I have worked) | **Past perfect** (he had worked) |
| **will** | **would** |
| **can** | **could** |
| **may** | **might** |
| **must** | **had to** |

### 2. Other Changes 🔄

**Pronouns:** I → he/she, we → they, my → his/her
**Time words:** today → that day, yesterday → the day before, tomorrow → the next day
**Place words:** here → there, this → that

- "I'll do it **tomorrow**." → He said he would do it **the next day**.
- "I live **here**." → She said she lived **there**.

### 3. Say vs. Tell ⚡

| **say** | **tell** |
|---------|----------|
| say (that)... | tell someone (that)... |
| "He **said** he was tired." | "He **told me** he was tired." |
| No object needed | Object required |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Common Error:</h3>
  <ul className="list-disc list-inside">
    <li>❌ "He <strong>said me</strong>..." → ✅ "He <strong>told me</strong>..."</li>
    <li>❌ "He <strong>told that</strong>..." → ✅ "He <strong>said that</strong>..."</li>
  </ul>
</div>

### 4. Reporting Questions ❓

**Yes/No questions:** Use **if/whether**
- "Are you coming?" → She asked **if** I was coming.

**Wh-questions:** Keep the question word, but use statement word order
- "Where do you live?" → He asked me **where I lived**.
- ❌ "He asked where **did I live**." (wrong word order)

<GamePlaceholder id="sentenceBuilder" />

### 5. When NOT to Backshift 🤔

You don't need to backshift when:
- The information is still true: "She said the earth **is** round." (still true)
- Using present reporting verb: "He **says** he is busy."

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Indirekte Rede 2 – Komplexe Zeitverschiebung 🔙📢

### 1. Vollständige Zeitverschiebungstabelle 📊

| Direkte Rede | Indirekte Rede |
|-------------|----------------|
| **Present Simple** (I work) | **Past Simple** (he worked) |
| **Present Continuous** (I am working) | **Past Continuous** (he was working) |
| **Past Simple** (I worked) | **Past Perfect** (he had worked) |
| **Present Perfect** (I have worked) | **Past Perfect** (he had worked) |
| **will** | **would** |
| **can** | **could** |
| **may** | **might** |
| **must** | **had to** |

### 2. Andere Änderungen 🔄

**Pronomen:** I → he/she, we → they, my → his/her
**Zeitwörter:** today → that day, yesterday → the day before, tomorrow → the next day
**Ortswörter:** here → there, this → that

- "I'll do it **tomorrow**." → He said he would do it **the next day**.
- "I live **here**." → She said she lived **there**.

### 3. Say vs. Tell ⚡

| **say** | **tell** |
|---------|----------|
| say (that)... | tell someone (that)... |
| "He **said** he was tired." | "He **told me** he was tired." |
| Kein Objekt nötig | Objekt erforderlich |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Häufiger Fehler:</h3>
  <ul className="list-disc list-inside">
    <li>❌ "He <strong>said me</strong>..." → ✅ "He <strong>told me</strong>..."</li>
    <li>❌ "He <strong>told that</strong>..." → ✅ "He <strong>said that</strong>..."</li>
  </ul>
</div>

### 4. Fragen berichten ❓

**Ja/Nein-Fragen:** Benutze **if/whether**
- "Are you coming?" → She asked **if** I was coming.

**W-Fragen:** Behalte das Fragewort, aber benutze Aussage-Wortstellung
- "Where do you live?" → He asked me **where I lived**.
- ❌ "He asked where **did I live**." (falsche Wortstellung)

<GamePlaceholder id="sentenceBuilder" />

### 5. Wann NICHT Zeitverschiebung 🤔

Du musst nicht verschieben, wenn:
- Die Information noch wahr ist: "She said the earth **is** round." (noch wahr)
- Ein Gegenwarts-Berichtsverb benutzt wird: "He **says** he is busy."

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Reported Speech 2',
      description: 'Practice complex backshift in reported speech.',
      checklist: [
        { text: 'Report 5 sentences using full backshift', checked: false },
        { text: 'Report 3 questions (yes/no and wh-)', checked: false },
        { text: 'Practice say vs. tell in 3 sentences each', checked: false }
      ]
    },
    de: {
      title: 'Indirekte Rede 2',
      description: 'Übe komplexe Zeitverschiebung in der indirekten Rede.',
      checklist: [
        { text: 'Berichte 5 Sätze mit vollständiger Zeitverschiebung', checked: false },
        { text: 'Berichte 3 Fragen (Ja/Nein und W-Fragen)', checked: false },
        { text: 'Übe say vs. tell in je 3 Sätzen', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
