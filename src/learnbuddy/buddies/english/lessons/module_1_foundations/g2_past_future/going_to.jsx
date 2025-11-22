import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ (buy) a car next week.", de: "Ich ___ (kaufen) nächste Woche ein Auto." },
    words: ["am", "going", "to", "buy"],
    correct: "am going to buy",
    explanation: { en: "I am going to buy (Plan)", de: "I am going to buy (Plan)" }
  },
  {
    prompt: { en: "Look at the clouds! It ___ (rain).", de: "Schau die Wolken! Es ___ (regnen)." },
    words: ["is", "going", "to", "rain"],
    correct: "is going to rain",
    explanation: { en: "Prediction based on evidence", de: "Vorhersage aufgrund von Beweisen" }
  },
  {
    prompt: { en: "They ___ (visit) us.", de: "Sie ___ (besuchen) uns." },
    words: ["are", "going", "to", "visit"],
    correct: "are going to visit",
    explanation: { en: "They are going to visit", de: "They are going to visit" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I going to play tennis.",
    mistakeIndex: 1,
    correction: "am going",
    explanation: { en: "Don't forget 'am'! I am going to...", de: "Vergiss 'am' nicht! I am going to..." }
  },
  {
    sentence: "She is go to eat.",
    mistakeIndex: 2,
    correction: "going",
    explanation: { en: "She is 'going' to eat.", de: "She is 'going' to eat." }
  },
  {
    sentence: "We are going to played.",
    mistakeIndex: 4,
    correction: "play",
    explanation: { en: "Use base verb after 'to': to play.", de: "Grundform nach 'to': to play." }
  }
];

export const goingTo = {
  id: 'a1_g20',
  title: {
    en: 'I\'m going to (Future Plans)',
    de: 'I\'m going to (Zukunftspläne)'
  },
  description: {
    en: "Talk about your plans and what you think will happen.",
    de: "Sprich über deine Pläne und was du denkst, was passieren wird."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />
  },

  content: {
    en: `
## Going to Future: Plans & Predictions 🔮

We use the structure **be going to + verb** to talk about the future.

### 1. Plans and Intentions 📅

Use this when you have **already decided** to do something. It is a plan in your head.

- "I **am going to buy** a new car next week." (I decided this already)
- "She **is going to be** a doctor." (Her life plan)

### 2. Predictions (with Evidence) 🌧️

Use this when you can **see** something is about to happen right now.

- "Look at those black clouds! It **is going to rain**." (I see the clouds)
- "Watch out! That box **is going to fall**!" (I see it wobbling)

### 3. The Structure 🏗️

It's like Present Continuous, but with "going to" + Base Verb.

| Subject | be | going to | Verb |
|---------|----|----------|------|
| I | **am** | **going to** | **eat** |
| He/She | **is** | **going to** | **fly** |
| We/They | **are** | **going to** | **win** |

<GamePlaceholder id="sentenceBuilder" />

<div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4">
  <strong className="text-blue-800 dark:text-blue-200">💡 Pronunciation Tip (Slang):</strong>
  <br/>
  In songs and movies, you often hear "gonna".
  <br/>
  "I'm **gonna** fly." = "I am **going to** fly."
  <br/>
  *(Don't write this in formal exams, but good to know!)*
</div>

<GamePlaceholder id="fixTheMistake" />
`,
    de: `
## Going to Future: Pläne & Vorhersagen 🔮

Wir nutzen die Struktur **be going to + Verb**, um über die Zukunft zu sprechen.

### 1. Pläne und Absichten 📅

Benutze das, wenn du bereits **entschieden** hast, etwas zu tun. Es ist ein Plan in deinem Kopf.

- "I **am going to buy** a new car next week." (Ich habe das schon entschieden/geplant.)
- "She **is going to be** a doctor." (Das ist ihr Lebensplan.)

### 2. Vorhersagen (mit Beweisen) 🌧️

Benutze das, wenn du **sehen** kannst, dass gleich etwas passiert.

- "Look at those black clouds! It **is going to rain**." (Ich sehe die dunklen Wolken - es wird gleich regnen.)
- "Pass auf! Die Kiste **is going to fall**!" (Ich sehe, wie sie wackelt - sie wird fallen.)

### 3. Die Struktur 🏗️

Es ist wie Present Continuous, aber mit "going to" + Grundform.

| Subjekt | be | going to | Verb |
|---------|----|----------|------|
| I | **am** | **going to** | **eat** |
| He/She | **is** | **going to** | **fly** |
| We/They | **are** | **going to** | **win** |

<GamePlaceholder id="sentenceBuilder" />

<div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4">
  <strong className="text-blue-800 dark:text-blue-200">💡 Aussprache-Tipp (Slang):</strong>
  <br/>
  In Songs und Filmen hörst du oft "gonna".
  <br/>
  "I'm **gonna** fly." = "I am **going to** fly."
  <br/>
  *(Schreibe das nicht in Prüfungen, aber gut zu wissen!)*
</div>

<GamePlaceholder id="fixTheMistake" />
`
  },
  task: {
    de: {
      title: 'Deine Pläne',
      description: 'Was hast du für morgen geplant? Schreibe 2 Sätze mit "I am going to...".',
      checklist: [
        { text: 'Satz 1: I am going to...', checked: false },
        { text: 'Satz 2: I am going to...', checked: false }
      ]
    },
    en: {
      title: 'Your Plans',
      description: 'What are your plans for tomorrow? Write 2 sentences with "I am going to...".',
      checklist: [
        { text: 'Sentence 1: I am going to...', checked: false },
        { text: 'Sentence 2: I am going to...', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};
