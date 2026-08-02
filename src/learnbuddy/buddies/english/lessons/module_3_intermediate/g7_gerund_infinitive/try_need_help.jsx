import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  { prompt: { en: "I tried ___ the window, but it was stuck.", de: "Ich versuchte, das Fenster zu öffnen, aber es klemmte." }, words: ["to open", "opening", "open", "opened"], correct: "to open", explanation: { en: "try + to = attempt (make an effort).", de: "try + to = versuchen (sich bemühen)." } },
  { prompt: { en: "The room is hot. Try ___ the window.", de: "Das Zimmer ist heiß. Versuch mal, das Fenster aufzumachen." }, words: ["opening", "to open", "open", "opened"], correct: "opening", explanation: { en: "try + -ing = experiment (see if it works).", de: "try + -ing = ausprobieren (schauen ob es funktioniert)." } },
  { prompt: { en: "The garden needs ___.", de: "Der Garten muss gemäht werden." }, words: ["mowing", "to mow", "mow", "mowed"], correct: "mowing", explanation: { en: "need + -ing = passive meaning (needs to be done).", de: "need + -ing = passive Bedeutung (muss gemacht werden)." } }
];

const fixTheMistakeData = [
  { sentence: "Can you help me to carrying these bags?", mistakeIndex: 5, correction: "carry", explanation: { en: "help + (to) + base form: 'help me carry' or 'help me to carry'.", de: "help + (to) + Grundform: 'help me carry' oder 'help me to carry'." } },
  { sentence: "This shirt needs to iron.", mistakeIndex: 3, correction: "ironing", explanation: { en: "need + -ing (passive meaning): 'needs ironing' = 'needs to be ironed'.", de: "need + -ing (passive Bedeutung): 'needs ironing' = 'needs to be ironed'." } },
  { sentence: "I tried calling him but I couldn't because my phone was dead.", mistakeIndex: 1, correction: "tried to call", explanation: { en: "If you couldn't do it (attempt), use 'tried to call'. 'Tried calling' = you did call.", de: "Wenn du es nicht konntest (Versuch), benutze 'tried to call'. 'Tried calling' = du hast angerufen." } }
];

const grammarRacerData = [
  { prompt: "I can't sleep. I'll try ___ some warm milk.", options: ["drinking", "to drink", "drink"], correct: "drinking", explanation: "Experiment – see if it helps." },
  { prompt: "The car needs ___.", options: ["washing", "to wash", "wash"], correct: "washing", explanation: "Passive meaning: needs to be washed." },
  { prompt: "Could you help me ___ this box?", options: ["move", "moving", "to moving"], correct: "move", explanation: "help + (to) + base form." }
];

export const tryNeedHelp = {
  id: 'b1_g57',
  title: { en: 'Verb + -ing or to 2 (try/need/help)', de: 'Verb + -ing oder to 2 (try/need/help)' },
  description: { en: "try to do (attempt) vs. try doing (experiment); need doing; help (to) do.", de: "try to do (Versuch) vs. try doing (Experiment); need doing; help (to) do." },
  components: { sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />, fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />, grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} /> },
  content: {
    en: `
## Verb + -ing or to 2 – try / need / help 🔧

### 1. Try 🎯

| Form | Meaning | Example |
|------|---------|---------|
| try + **to** | Attempt (make an effort) | "I **tried to open** the jar, but I couldn't." |
| try + **-ing** | Experiment (see if it works) | "**Try adding** more salt." (Maybe it will taste better) |

### 2. Need 🔨

| Form | Meaning | Example |
|------|---------|---------|
| need + **to** | Active (I must do it) | "I **need to wash** my car." |
| need + **-ing** | Passive (it must be done) | "My car **needs washing**." (= needs to be washed) |

### 3. Help 🤝

**Help** can be followed by the base form (no 'to') OR the infinitive with 'to':
- "Can you **help me carry** this?" ✅
- "Can you **help me to carry** this?" ✅
- ❌ "Can you help me **carrying** this?"

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Verb + -ing oder to 2 – try / need / help 🔧

### 1. Try 🎯

| Form | Bedeutung | Beispiel |
|------|-----------|----------|
| try + **to** | Versuch (sich bemühen) | "I **tried to open** the jar, but I couldn't." |
| try + **-ing** | Experiment (schauen ob es klappt) | "**Try adding** more salt." (Vielleicht schmeckt es besser) |

### 2. Need 🔨

| Form | Bedeutung | Beispiel |
|------|-----------|----------|
| need + **to** | Aktiv (Ich muss es tun) | "I **need to wash** my car." |
| need + **-ing** | Passiv (es muss getan werden) | "My car **needs washing**." (= needs to be washed) |

### 3. Help 🤝

**Help** kann mit Grundform (ohne 'to') ODER Infinitiv mit 'to' stehen:
- "Can you **help me carry** this?" ✅
- "Can you **help me to carry** this?" ✅
- ❌ "Can you help me **carrying** this?"

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: { en: { title: 'Try/Need/Help', description: 'Practice these special verbs.', checklist: [{ text: 'Write 2 pairs with try (-ing vs to)', checked: false }, { text: 'Write 3 sentences with need + -ing', checked: false }, { text: 'Write 3 sentences with help', checked: false }] }, de: { title: 'Try/Need/Help', description: 'Übe diese besonderen Verben.', checklist: [{ text: 'Schreibe 2 Paare mit try (-ing vs to)', checked: false }, { text: 'Schreibe 3 Sätze mit need + -ing', checked: false }, { text: 'Schreibe 3 Sätze mit help', checked: false }] } },
  quiz: { en: [], de: [] }
};
