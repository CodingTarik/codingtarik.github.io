import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  { prompt: { en: "I like ___ in the morning. (general enjoyment)", de: "Ich schwimme gerne morgens. (allgemeines Vergnügen)" }, words: ["swimming", "to swim", "swim", "swam"], correct: "swimming", explanation: { en: "like + -ing = general enjoyment.", de: "like + -ing = allgemeines Vergnügen." } },
  { prompt: { en: "I'd like ___ now, please.", de: "Ich möchte jetzt bitte bestellen." }, words: ["to order", "ordering", "order", "ordered"], correct: "to order", explanation: { en: "would like + to = polite request/wish.", de: "would like + to = höfliche Bitte/Wunsch." } },
  { prompt: { en: "I like ___ tidy. (I think it's a good habit)", de: "Ich halte gerne Ordnung. (Ich finde es eine gute Angewohnheit)" }, words: ["to keep things", "keeping things", "keep", "kept"], correct: "to keep things", explanation: { en: "like + to = think it's good/right (not necessarily enjoyable).", de: "like + to = finde es gut/richtig (nicht unbedingt angenehm)." } }
];

const fixTheMistakeData = [
  { sentence: "I would like going to the cinema tonight.", mistakeIndex: 3, correction: "to go", explanation: { en: "'Would like' always takes 'to': 'would like to go'.", de: "'Would like' nimmt immer 'to': 'would like to go'." } },
  { sentence: "I'd like swimming. (meaning: I want to swim now)", mistakeIndex: 2, correction: "to swim", explanation: { en: "For a specific wish/request, use 'would like to': 'I'd like to swim'.", de: "Für einen konkreten Wunsch benutze 'would like to': 'I'd like to swim'." } },
  { sentence: "Would you like coming with us?", mistakeIndex: 3, correction: "to come", explanation: { en: "'Would you like' + to: 'Would you like to come?'", de: "'Would you like' + to: 'Would you like to come?'" } }
];

const grammarRacerData = [
  { prompt: "I like ___ books. (general hobby)", options: ["reading", "to read", "read"], correct: "reading", explanation: "General enjoyment = -ing." },
  { prompt: "I'd like ___ a coffee, please.", options: ["to have", "having", "have"], correct: "to have", explanation: "Would like = polite request → to." },
  { prompt: "Would you like ___ for a walk?", options: ["to go", "going", "go"], correct: "to go", explanation: "Would you like + to (invitation)." }
];

export const likeWouldLike = {
  id: 'b1_g58',
  title: { en: 'Like vs. Would like', de: 'Like vs. Would like' },
  description: { en: "'I like swimming' (general) vs. 'I'd like to swim' (specific wish).", de: "'I like swimming' (allgemein) vs. 'I'd like to swim' (konkreter Wunsch)." },
  components: { sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />, fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />, grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} /> },
  content: {
    en: `
## Like vs. Would like ❤️

### 1. Like + -ing = General Enjoyment 😊
- "I **like reading**." (I enjoy it in general)
- "She **likes cooking**."

### 2. Like + to = Good Habit / Choice ✅
- "I **like to get** up early." (I think it's a good thing to do)
- Often interchangeable with -ing, but emphasizes choice.

### 3. Would like + to = Specific Wish / Request 🎯
- "I**'d like to go** now." (I want to go now)
- "**Would** you **like to come**?" (Invitation)
- Always with **to** – never -ing!

| Form | Meaning | Example |
|------|---------|---------|
| **like + -ing** | General enjoyment | "I like swimming." |
| **like + to** | Good habit/choice | "I like to check my email first." |
| **would like + to** | Specific wish NOW | "I'd like to swim." |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Key difference:</h3>
  <p>"I <strong>like swimming</strong>." = I enjoy it (general)</p>
  <p>"I<strong>'d like to swim</strong>." = I want to swim (now/specific)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Like vs. Would like ❤️

### 1. Like + -ing = Allgemeines Vergnügen 😊
- "I **like reading**." (Ich genieße es allgemein)
- "She **likes cooking**."

### 2. Like + to = Gute Angewohnheit / Wahl ✅
- "I **like to get** up early." (Ich finde es gut, das zu tun)
- Oft austauschbar mit -ing, betont aber die Wahl.

### 3. Would like + to = Konkreter Wunsch / Bitte 🎯
- "I**'d like to go** now." (Ich möchte jetzt gehen)
- "**Would** you **like to come**?" (Einladung)
- Immer mit **to** – nie -ing!

| Form | Bedeutung | Beispiel |
|------|-----------|----------|
| **like + -ing** | Allgemeines Vergnügen | "I like swimming." |
| **like + to** | Gute Gewohnheit/Wahl | "I like to check my email first." |
| **would like + to** | Konkreter Wunsch JETZT | "I'd like to swim." |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Wichtiger Unterschied:</h3>
  <p>"I <strong>like swimming</strong>." = Ich genieße es (allgemein)</p>
  <p>"I<strong>'d like to swim</strong>." = Ich möchte schwimmen (jetzt/konkret)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: { en: { title: 'Like vs Would like', description: 'Practice the difference.', checklist: [{ text: 'Write 3 general likes with -ing', checked: false }, { text: 'Write 3 specific wishes with would like to', checked: false }, { text: 'Create a restaurant dialogue using would like', checked: false }] }, de: { title: 'Like vs Would like', description: 'Übe den Unterschied.', checklist: [{ text: 'Schreibe 3 allgemeine Vorlieben mit -ing', checked: false }, { text: 'Schreibe 3 konkrete Wünsche mit would like to', checked: false }, { text: 'Erstelle einen Restaurant-Dialog mit would like', checked: false }] } },
  quiz: { en: [], de: [] }
};
