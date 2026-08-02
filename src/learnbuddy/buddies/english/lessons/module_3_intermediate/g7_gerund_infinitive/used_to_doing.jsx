import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  { prompt: { en: "I'm ___ to getting up early. (it's normal for me now)", de: "Ich bin es gewohnt, früh aufzustehen." }, words: ["used", "use", "using", "get used"], correct: "used", explanation: { en: "be used to + -ing = accustomed to.", de: "be used to + -ing = gewohnt an." } },
  { prompt: { en: "I ___ live in London. (but not anymore)", de: "Ich habe früher in London gelebt. (aber nicht mehr)" }, words: ["used to", "am used to", "got used to", "was used to"], correct: "used to", explanation: { en: "used to + base form = past habit/state.", de: "used to + Grundform = vergangene Gewohnheit/Zustand." } },
  { prompt: { en: "Don't worry, you'll ___ to it.", de: "Keine Sorge, du wirst dich daran gewöhnen." }, words: ["get used", "be used", "used", "use"], correct: "get used", explanation: { en: "get used to = process of becoming accustomed.", de: "get used to = Prozess des Sich-Gewöhnens." } }
];

const fixTheMistakeData = [
  { sentence: "I'm used to get up early.", mistakeIndex: 4, correction: "getting", explanation: { en: "'be used to' is followed by -ing: 'used to getting'.", de: "'be used to' wird von -ing gefolgt: 'used to getting'." } },
  { sentence: "I used to living in Paris.", mistakeIndex: 3, correction: "live", explanation: { en: "'used to' (past habit) + base form: 'used to live'.", de: "'used to' (vergangene Gewohnheit) + Grundform: 'used to live'." } },
  { sentence: "She can't get used to work at night.", mistakeIndex: 6, correction: "working", explanation: { en: "'get used to' + -ing: 'get used to working'.", de: "'get used to' + -ing: 'get used to working'." } }
];

const grammarRacerData = [
  { prompt: "I ___ live in a small village. (past habit)", options: ["used to", "am used to", "got used to"], correct: "used to", explanation: "Past habit = used to + base form." },
  { prompt: "I'm ___ to the noise now.", options: ["used", "use", "getting"], correct: "used", explanation: "be used to = accustomed." },
  { prompt: "It took time but she ___ used to the new job.", options: ["got", "was", "is"], correct: "got", explanation: "get used to = become accustomed." }
];

export const usedToDoing = {
  id: 'b1_g61',
  title: { en: 'Be/Get used to + -ing', de: 'Be/Get used to + -ing' },
  description: { en: "'I used to live' (past) vs. 'I'm used to living' (accustomed) vs. 'getting used to'.", de: "'I used to live' (Vergangenheit) vs. 'I'm used to living' (gewohnt) vs. 'getting used to'." },
  components: { sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />, fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />, grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} /> },
  content: {
    en: `
## Be/Get used to + -ing 🔄

### Three Different Structures:

| Structure | Form | Meaning | Example |
|-----------|------|---------|---------|
| **used to** + base verb | I used to live | Past habit (not anymore) | "I **used to smoke**." |
| **be used to** + -ing | I am used to living | Accustomed (it's normal now) | "I**'m used to working** late." |
| **get used to** + -ing | I got used to living | Becoming accustomed (process) | "I**'m getting used to** the food." |

### Key Points:
- **used to + verb** = PAST (I don't do it anymore)
- **be used to + -ing** = PRESENT (it's normal for me)
- **get used to + -ing** = CHANGE (becoming normal)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Don't mix them up!</h3>
  <ul className="list-disc list-inside">
    <li>"I <strong>used to live</strong> in London." (Past → base form)</li>
    <li>"I<strong>'m used to living</strong> in London." (Accustomed → -ing)</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Be/Get used to + -ing 🔄

### Drei verschiedene Strukturen:

| Struktur | Form | Bedeutung | Beispiel |
|----------|------|-----------|----------|
| **used to** + Grundform | I used to live | Vergangene Gewohnheit (nicht mehr) | "I **used to smoke**." |
| **be used to** + -ing | I am used to living | Gewohnt (es ist jetzt normal) | "I**'m used to working** late." |
| **get used to** + -ing | I got used to living | Sich gewöhnen (Prozess) | "I**'m getting used to** the food." |

### Wichtige Punkte:
- **used to + Verb** = VERGANGENHEIT (Ich mache es nicht mehr)
- **be used to + -ing** = GEGENWART (Es ist normal für mich)
- **get used to + -ing** = VERÄNDERUNG (wird normal)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Nicht verwechseln!</h3>
  <ul className="list-disc list-inside">
    <li>"I <strong>used to live</strong> in London." (Vergangenheit → Grundform)</li>
    <li>"I<strong>'m used to living</strong> in London." (Gewohnt → -ing)</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: { en: { title: 'Used to / Be used to', description: 'Practice all three structures.', checklist: [{ text: 'Write 3 past habits with used to', checked: false }, { text: "Write 3 'accustomed' sentences with be used to + -ing", checked: false }, { text: "Write 3 'process' sentences with get used to + -ing", checked: false }] }, de: { title: 'Used to / Be used to', description: 'Übe alle drei Strukturen.', checklist: [{ text: 'Schreibe 3 vergangene Gewohnheiten mit used to', checked: false }, { text: "Schreibe 3 'gewohnt' Sätze mit be used to + -ing", checked: false }, { text: "Schreibe 3 'Prozess' Sätze mit get used to + -ing", checked: false }] } },
  quiz: { en: [], de: [] }
};
