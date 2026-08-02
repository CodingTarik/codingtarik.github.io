import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    "prompt": {
      "en": "Can you pass me ___ salt?",
      "de": "Kannst du mir das Salz reichen?"
    },
    "words": [
      "the",
      "a",
      "-",
      "some"
    ],
    "correct": "the",
    "explanation": {
      "en": "Specific salt (on the table).",
      "de": "Bestimmtes Salz (auf dem Tisch)."
    }
  },
  {
    "prompt": {
      "en": "___ life is beautiful.",
      "de": "Das Leben ist schön."
    },
    "words": [
      "-",
      "The",
      "A",
      "Some"
    ],
    "correct": "-",
    "explanation": {
      "en": "Life in general = no article.",
      "de": "Leben allgemein = kein Artikel."
    }
  },
  {
    "prompt": {
      "en": "She's ___ best student in the class.",
      "de": "Sie ist die beste Schülerin der Klasse."
    },
    "words": [
      "the",
      "a",
      "-",
      "an"
    ],
    "correct": "the",
    "explanation": {
      "en": "Superlative = the.",
      "de": "Superlativ = the."
    }
  }
];

const fixTheMistakeData = [
  {
    "sentence": "The love is important.",
    "mistakeIndex": 0,
    "correction": "Love",
    "explanation": {
      "en": "General concept = no 'the': 'Love is important'.",
      "de": "Allgemeines Konzept = kein 'the': 'Love is important'."
    }
  },
  {
    "sentence": "I went to a bank on High Street.",
    "mistakeIndex": 3,
    "correction": "the",
    "explanation": {
      "en": "Specific bank (on High Street) = 'the bank'.",
      "de": "Bestimmte Bank (auf der High Street) = 'the bank'."
    }
  },
  {
    "sentence": "Can you turn off a light?",
    "mistakeIndex": 4,
    "correction": "the",
    "explanation": {
      "en": "We both know which light = 'the light'.",
      "de": "Wir wissen beide, welches Licht = 'the light'."
    }
  }
];

const grammarRacerData = [
  {
    "prompt": "___ earth goes around ___ sun.",
    "options": [
      "The / the",
      "The / a",
      "- / the"
    ],
    "correct": "The / the",
    "explanation": "Only one earth and sun = the."
  },
  {
    "prompt": "___ water is essential for life.",
    "options": [
      "-",
      "The",
      "A"
    ],
    "correct": "-",
    "explanation": "General concept = no article."
  },
  {
    "prompt": "Who was ___ first person on the moon?",
    "options": [
      "the",
      "a",
      "-"
    ],
    "correct": "the",
    "explanation": "Ordinal = the."
  }
];

export const the1 = {
  id: 'b1_g73',
  title: { en: "The (specific use)", de: "The (spezifische Verwendung)" },
  description: { en: "When to use 'the': specific things both speaker and listener know about.", de: "Wann man 'the' benutzt: spezifische Dinge, die Sprecher und Hörer kennen." },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## The – Specific Use 📌

### When to use THE:

**1. When it's clear which one we mean:**
- "Can you close **the** door?" (The door of this room)
- "I went to **the** bank." (The bank I usually go to)

**2. When we've already mentioned it:**
- "I saw a man and a woman. **The** man was tall."

**3. When there's only one:**
- "**The** sun, **the** moon, **the** internet, **the** government"

**4. Superlatives and ordinals:**
- "**The** best, **the** first, **the** most important"

**5. With of-phrases:**
- "**The** name **of** the book"
- "**The** beginning **of** the movie"

### When NOT to use THE:

- General/uncountable: ❌ "**The** life is beautiful." ✅ "Life is beautiful."
- General plural: ❌ "**The** dogs are loyal." ✅ "Dogs are loyal."

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## The – Spezifische Verwendung 📌

### Wann THE benutzen:

**1. Wenn klar ist, welches wir meinen:**
- "Can you close **the** door?" (Die Tür dieses Raums)
- "I went to **the** bank." (Die Bank, zu der ich normalerweise gehe)

**2. Wenn wir es bereits erwähnt haben:**
- "I saw a man and a woman. **The** man was tall."

**3. Wenn es nur eins gibt:**
- "**The** sun, **the** moon, **the** internet, **the** government"

**4. Superlative und Ordnungszahlen:**
- "**The** best, **the** first, **the** most important"

**5. Mit of-Phrasen:**
- "**The** name **of** the book"
- "**The** beginning **of** the movie"

### Wann NICHT THE benutzen:

- Allgemein/unzählbar: ❌ "**The** life is beautiful." ✅ "Life is beautiful."
- Allgemeiner Plural: ❌ "**The** dogs are loyal." ✅ "Dogs are loyal."

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {"title":"The (specific)","description":"Practice using the.","checklist":[{"text":"Write 5 sentences with the (specific)","checked":false},{"text":"Write 5 sentences without the (general)","checked":false},{"text":"Explain when to use the in your own words","checked":false}]},
    de: {"title":"The (spezifisch)","description":"Übe die Verwendung von the.","checklist":[{"text":"Schreibe 5 Sätze mit the (spezifisch)","checked":false},{"text":"Schreibe 5 Sätze ohne the (allgemein)","checked":false},{"text":"Erkläre, wann man the benutzt","checked":false}]}
  },
  quiz: { en: [], de: [] }
};
