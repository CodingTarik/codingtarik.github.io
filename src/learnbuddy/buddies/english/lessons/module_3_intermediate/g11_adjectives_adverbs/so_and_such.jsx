import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    "prompt": {
      "en": "It was ___ a beautiful sunset!",
      "de": "Es war so ein wunderschöner Sonnenuntergang!"
    },
    "words": [
      "such",
      "so",
      "very",
      "too"
    ],
    "correct": "such",
    "explanation": {
      "en": "such + a + adjective + noun.",
      "de": "such + a + Adjektiv + Nomen."
    }
  },
  {
    "prompt": {
      "en": "She's ___ talented!",
      "de": "Sie ist so talentiert!"
    },
    "words": [
      "so",
      "such",
      "very much",
      "such a"
    ],
    "correct": "so",
    "explanation": {
      "en": "so + adjective (no noun after).",
      "de": "so + Adjektiv (kein Nomen danach)."
    }
  },
  {
    "prompt": {
      "en": "There were ___ many people at the concert!",
      "de": "Es waren so viele Leute beim Konzert!"
    },
    "words": [
      "so",
      "such",
      "very",
      "too"
    ],
    "correct": "so",
    "explanation": {
      "en": "so many (+ countable plural).",
      "de": "so many (+ zählbarer Plural)."
    }
  }
];

const fixTheMistakeData = [
  {
    "sentence": "It was such cold yesterday.",
    "mistakeIndex": 2,
    "correction": "so",
    "explanation": {
      "en": "so + adjective (alone): 'so cold'.",
      "de": "so + Adjektiv (allein): 'so cold'."
    }
  },
  {
    "sentence": "She is so a good teacher.",
    "mistakeIndex": 1,
    "correction": "such",
    "explanation": {
      "en": "such + a + adjective + noun: 'such a good teacher'.",
      "de": "such + a + Adjektiv + Nomen: 'such a good teacher'."
    }
  },
  {
    "sentence": "There was such much traffic.",
    "mistakeIndex": 1,
    "correction": "so",
    "explanation": {
      "en": "so much (not 'such much').",
      "de": "so much (nicht 'such much')."
    }
  }
];

const grammarRacerData = [
  {
    "prompt": "It was ___ hot that I couldn't sleep.",
    "options": [
      "so",
      "such",
      "very"
    ],
    "correct": "so",
    "explanation": "so + adjective + that."
  },
  {
    "prompt": "He is ___ a kind man!",
    "options": [
      "such",
      "so",
      "very"
    ],
    "correct": "such",
    "explanation": "such + a + adjective + noun."
  },
  {
    "prompt": "Why do you drive ___ fast?",
    "options": [
      "so",
      "such",
      "such a"
    ],
    "correct": "so",
    "explanation": "so + adverb."
  }
];

export const soAndSuch = {
  id: 'b1_g102',
  title: { en: "So and such", de: "So und such" },
  description: { en: "so + adjective vs. such + noun: 'so tired' / 'such a nice day'.", de: "so + Adjektiv vs. such + Nomen: 'so tired' / 'such a nice day'." },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## So and Such 💪

### 1. So + adjective/adverb
- "It's **so cold** today!" / "She speaks **so quickly**!"

### 2. Such + (a/an) + adjective + noun
- "It's **such a cold** day!" / "She's **such a nice** person!"

### 3. So/Such ... that
- "It was **so hot that** I couldn't sleep."
- "It was **such a hot** day **that** we stayed inside."

| Structure | Example |
|-----------|---------|
| **so** + adjective | so cold, so tired |
| **such** + (a/an) + noun | such a nice day, such fun |
| **so much/many** | so much money, so many people |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Common mistakes:</h3>
  <ul className="list-disc list-inside">
    <li>❌ "It was <strong>such</strong> cold." → ✅ "It was <strong>so</strong> cold."</li>
    <li>❌ "It was <strong>so</strong> a nice day." → ✅ "It was <strong>such</strong> a nice day."</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## So und Such 💪

### 1. So + Adjektiv/Adverb
- "It's **so cold** today!" / "She speaks **so quickly**!"

### 2. Such + (a/an) + Adjektiv + Nomen
- "It's **such a cold** day!" / "She's **such a nice** person!"

### 3. So/Such ... that
- "It was **so hot that** I couldn't sleep."
- "It was **such a hot** day **that** we stayed inside."

| Struktur | Beispiel |
|----------|----------|
| **so** + Adjektiv | so cold, so tired |
| **such** + (a/an) + Nomen | such a nice day, such fun |
| **so much/many** | so much money, so many people |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Häufige Fehler:</h3>
  <ul className="list-disc list-inside">
    <li>❌ "It was <strong>such</strong> cold." → ✅ "It was <strong>so</strong> cold."</li>
    <li>❌ "It was <strong>so</strong> a nice day." → ✅ "It was <strong>such</strong> a nice day."</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: { title: "So and such", description: 'Practice this grammar topic.', checklist: [{ text: 'Study the rules and examples', checked: false }, { text: 'Complete the interactive exercises', checked: false }, { text: 'Write your own example sentences', checked: false }] },
    de: { title: "So und such", description: 'Übe dieses Grammatik-Thema.', checklist: [{ text: 'Lerne die Regeln und Beispiele', checked: false }, { text: 'Mache die interaktiven Übungen', checked: false }, { text: 'Schreibe eigene Beispielsätze', checked: false }] }
  },
  quiz: { en: [], de: [] }
};
