import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  { prompt: { en: "It's worth ___ that movie.", de: "Es lohnt sich, diesen Film zu sehen." }, words: ["seeing", "to see", "see", "seen"], correct: "seeing", explanation: { en: "It's worth + -ing.", de: "It's worth + -ing." } },
  { prompt: { en: "There's no point in ___ about it.", de: "Es hat keinen Sinn, sich darüber zu beschweren." }, words: ["complaining", "to complain", "complain", "complained"], correct: "complaining", explanation: { en: "There's no point in + -ing.", de: "There's no point in + -ing." } },
  { prompt: { en: "It's no use ___ to change his mind.", de: "Es hat keinen Zweck, zu versuchen, seine Meinung zu ändern." }, words: ["trying", "to try", "try", "tried"], correct: "trying", explanation: { en: "It's no use + -ing.", de: "It's no use + -ing." } }
];

const fixTheMistakeData = [
  { sentence: "It's worth to visit the museum.", mistakeIndex: 2, correction: "visiting", explanation: { en: "It's worth + -ing: 'worth visiting'.", de: "It's worth + -ing: 'worth visiting'." } },
  { sentence: "There's no point to argue.", mistakeIndex: 3, correction: "in arguing", explanation: { en: "There's no point IN + -ing.", de: "There's no point IN + -ing." } },
  { sentence: "It's no good to worry about it.", mistakeIndex: 3, correction: "worrying", explanation: { en: "It's no good + -ing.", de: "It's no good + -ing." } }
];

const grammarRacerData = [
  { prompt: "Is it worth ___ all that money?", options: ["spending", "to spend", "spend"], correct: "spending", explanation: "worth + -ing." },
  { prompt: "There's no point ___ waiting any longer.", options: ["in", "to", "of"], correct: "in", explanation: "no point IN + -ing." },
  { prompt: "It's no use ___ over spilt milk.", options: ["crying", "to cry", "cry"], correct: "crying", explanation: "no use + -ing." }
];

export const worthPointIng = {
  id: 'b1_g63',
  title: { en: "It's worth -ing / There's no point in -ing", de: "It's worth -ing / There's no point in -ing" },
  description: { en: "Expressions with -ing: worth doing, no point in doing, no use doing.", de: "Ausdrücke mit -ing: worth doing, no point in doing, no use doing." },
  components: { sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />, fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />, grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} /> },
  content: {
    en: `
## It's worth -ing / There's no point in -ing ⚖️

### Expressions always followed by -ing:

| Expression | Example | Meaning |
|------------|---------|---------|
| **It's worth** + -ing | "It's **worth seeing**." | It deserves the effort |
| **It's not worth** + -ing | "It's **not worth worrying**." | Don't waste your effort |
| **There's no point (in)** + -ing | "There's **no point in arguing**." | It's useless/futile |
| **It's no use** + -ing | "It's **no use crying**." | It won't help |
| **It's no good** + -ing | "It's **no good complaining**." | It won't help |
| **It's a waste of time/money** + -ing | "It's a waste of time **waiting**." | Don't waste your time |
| **have difficulty/trouble** + -ing | "I had **difficulty finding** it." | It was hard |

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## It's worth -ing / There's no point in -ing ⚖️

### Ausdrücke, die immer von -ing gefolgt werden:

| Ausdruck | Beispiel | Bedeutung |
|----------|----------|-----------|
| **It's worth** + -ing | "It's **worth seeing**." | Es ist die Mühe wert |
| **It's not worth** + -ing | "It's **not worth worrying**." | Verschwende deine Mühe nicht |
| **There's no point (in)** + -ing | "There's **no point in arguing**." | Es ist sinnlos/zwecklos |
| **It's no use** + -ing | "It's **no use crying**." | Es hilft nicht |
| **It's no good** + -ing | "It's **no good complaining**." | Es hilft nicht |
| **It's a waste of time/money** + -ing | "It's a waste of time **waiting**." | Verschwende deine Zeit nicht |
| **have difficulty/trouble** + -ing | "I had **difficulty finding** it." | Es war schwer |

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: { en: { title: "Worth / No point / No use", description: 'Practice -ing expressions.', checklist: [{ text: "Write 3 'worth doing' sentences", checked: false }, { text: "Write 3 'no point / no use' sentences", checked: false }, { text: "Write 2 'have difficulty' sentences", checked: false }] }, de: { title: "Worth / No point / No use", description: 'Übe -ing Ausdrücke.', checklist: [{ text: "Schreibe 3 'worth doing' Sätze", checked: false }, { text: "Schreibe 3 'no point / no use' Sätze", checked: false }, { text: "Schreibe 2 'have difficulty' Sätze", checked: false }] } },
  quiz: { en: [], de: [] }
};
