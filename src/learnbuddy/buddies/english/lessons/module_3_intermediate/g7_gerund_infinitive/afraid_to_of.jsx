import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  { prompt: { en: "I'm afraid ___ spiders. (general fear)", de: "Ich habe Angst vor Spinnen." }, words: ["of", "to", "for", "at"], correct: "of", explanation: { en: "afraid of = general fear of something.", de: "afraid of = allgemeine Angst vor etwas." } },
  { prompt: { en: "She was afraid ___ tell the truth. (worried about consequences)", de: "Sie hatte Angst, die Wahrheit zu sagen." }, words: ["to", "of", "for", "at"], correct: "to", explanation: { en: "afraid to = worried about doing something.", de: "afraid to = besorgt, etwas zu tun." } },
  { prompt: { en: "I'm afraid ___ falling. (the thing itself scares me)", de: "Ich habe Angst zu fallen." }, words: ["of", "to", "for", "at"], correct: "of", explanation: { en: "afraid of + -ing = the action itself is scary.", de: "afraid of + -ing = die Handlung selbst macht Angst." } }
];

const fixTheMistakeData = [
  { sentence: "I'm afraid of go out at night.", mistakeIndex: 3, correction: "going", explanation: { en: "afraid of + -ing: 'afraid of going'.", de: "afraid of + -ing: 'afraid of going'." } },
  { sentence: "She's afraid of tell her parents.", mistakeIndex: 3, correction: "to tell", explanation: { en: "afraid to do = worried about consequences.", de: "afraid to do = besorgt über Konsequenzen." } },
  { sentence: "He was too afraid for speaking up.", mistakeIndex: 3, correction: "to speak", explanation: { en: "too afraid TO do something.", de: "too afraid TO do something." } }
];

const grammarRacerData = [
  { prompt: "Are you afraid ___ the dark?", options: ["of", "to", "for"], correct: "of", explanation: "General fear = afraid of." },
  { prompt: "He was afraid ___ ask for a raise.", options: ["to", "of", "for"], correct: "to", explanation: "Worried about doing it = afraid to." },
  { prompt: "I'm afraid ___ making mistakes.", options: ["of", "to", "for"], correct: "of", explanation: "The action itself scares = afraid of + -ing." }
];

export const afraidToOf = {
  id: 'b1_g66',
  title: { en: 'Afraid to do vs. Afraid of -ing', de: 'Afraid to do vs. Afraid of -ing' },
  description: { en: "'I was afraid to tell' (hesitant) vs. 'I'm afraid of flying' (the thing scares me).", de: "'I was afraid to tell' (zögernd) vs. 'I'm afraid of flying' (die Sache macht Angst)." },
  components: { sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />, fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />, grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} /> },
  content: {
    en: `
## Afraid to do vs. Afraid of -ing 😨

| Form | Meaning | Example |
|------|---------|---------|
| afraid **to do** | Hesitant/worried about doing | "She was afraid **to speak** up." (worried about consequences) |
| afraid **of + -ing** | The action itself is scary | "I'm afraid **of flying**." (flying scares me) |
| afraid **of + noun** | General fear | "I'm afraid **of spiders**." |

Both forms are often interchangeable, but the nuance differs:
- "I'm afraid **to jump**." (I don't dare)
- "I'm afraid **of jumping**." (The act of jumping frightens me)

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Afraid to do vs. Afraid of -ing 😨

| Form | Bedeutung | Beispiel |
|------|-----------|----------|
| afraid **to do** | Zögernd/besorgt, etwas zu tun | "She was afraid **to speak** up." (besorgt über Konsequenzen) |
| afraid **of + -ing** | Die Handlung selbst macht Angst | "I'm afraid **of flying**." (Fliegen macht mir Angst) |
| afraid **of + Nomen** | Allgemeine Angst | "I'm afraid **of spiders**." |

Beide Formen sind oft austauschbar, aber die Nuance ist anders:
- "I'm afraid **to jump**." (Ich traue mich nicht)
- "I'm afraid **of jumping**." (Das Springen an sich ängstigt mich)

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: { en: { title: 'Afraid to / Afraid of', description: 'Practice both patterns.', checklist: [{ text: 'Write 3 afraid to sentences', checked: false }, { text: 'Write 3 afraid of + -ing sentences', checked: false }, { text: 'Explain the nuance difference in your own words', checked: false }] }, de: { title: 'Afraid to / Afraid of', description: 'Übe beide Muster.', checklist: [{ text: 'Schreibe 3 afraid to Sätze', checked: false }, { text: 'Schreibe 3 afraid of + -ing Sätze', checked: false }, { text: 'Erkläre den Nuancenunterschied in eigenen Worten', checked: false }] } },
  quiz: { en: [], de: [] }
};
