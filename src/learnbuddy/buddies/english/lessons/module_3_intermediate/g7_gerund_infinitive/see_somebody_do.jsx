import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  { prompt: { en: "I saw her ___ the street. (complete action)", de: "Ich sah sie die Straße überqueren. (vollständige Handlung)" }, words: ["cross", "crossing", "to cross", "crossed"], correct: "cross", explanation: { en: "see + object + base form = complete action.", de: "see + Objekt + Grundform = vollständige Handlung." } },
  { prompt: { en: "I saw her ___ the street. (in progress)", de: "Ich sah sie gerade die Straße überqueren. (im Gange)" }, words: ["crossing", "cross", "to cross", "crossed"], correct: "crossing", explanation: { en: "see + object + -ing = action in progress.", de: "see + Objekt + -ing = Handlung im Gange." } },
  { prompt: { en: "I heard them ___ in the next room.", de: "Ich hörte sie im Nebenraum reden." }, words: ["talking", "talk", "to talk", "talked"], correct: "talking", explanation: { en: "hear + object + -ing = action in progress.", de: "hear + Objekt + -ing = Handlung im Gange." } }
];

const fixTheMistakeData = [
  { sentence: "I saw him to leave the building.", mistakeIndex: 3, correction: "leave", explanation: { en: "see + object + base form (no 'to'): 'saw him leave'.", de: "see + Objekt + Grundform (kein 'to'): 'saw him leave'." } },
  { sentence: "She heard the baby to cry.", mistakeIndex: 4, correction: "cry", explanation: { en: "hear + object + base form (no 'to'): 'heard the baby cry'.", de: "hear + Objekt + Grundform (kein 'to'): 'heard the baby cry'." } },
  { sentence: "I felt something to crawl on my arm.", mistakeIndex: 2, correction: "crawl", explanation: { en: "feel + object + base form.", de: "feel + Objekt + Grundform." } }
];

const grammarRacerData = [
  { prompt: "I watched the sun ___. (complete)", options: ["set", "setting", "to set"], correct: "set", explanation: "Complete action = base form." },
  { prompt: "I could hear someone ___ upstairs. (in progress)", options: ["walking", "walk", "to walk"], correct: "walking", explanation: "In progress = -ing." },
  { prompt: "She noticed him ___ at her.", options: ["staring", "stare", "to stare"], correct: "staring", explanation: "In progress = -ing." }
];

export const seeSomebodyDo = {
  id: 'b1_g67',
  title: { en: 'See somebody do vs. doing', de: 'See somebody do vs. doing' },
  description: { en: "'I saw her cross the street' (complete) vs. 'I saw her crossing' (in progress).", de: "'I saw her cross the street' (komplett) vs. 'I saw her crossing' (im Gange)." },
  components: { sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />, fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />, grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} /> },
  content: {
    en: `
## See somebody do vs. doing 👀

### Perception verbs: see, hear, watch, notice, feel

| Form | Meaning | Example |
|------|---------|---------|
| verb + object + **base form** | Complete action | "I **saw** him **leave**." (He left – I saw the whole thing) |
| verb + object + **-ing** | Action in progress | "I **saw** him **leaving**." (He was leaving – I saw part of it) |

**No 'to'!** ❌ "I saw him **to leave**."

### Examples:
- "I **heard** her **sing** the whole song." (Complete)
- "I **heard** her **singing** as I walked past." (In progress)
- "I **felt** something **crawl** on my hand." (Complete)
- "I **watched** the children **playing** in the park." (In progress)

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## See somebody do vs. doing 👀

### Wahrnehmungsverben: see, hear, watch, notice, feel

| Form | Bedeutung | Beispiel |
|------|-----------|----------|
| Verb + Objekt + **Grundform** | Vollständige Handlung | "I **saw** him **leave**." (Er ging – ich sah das Ganze) |
| Verb + Objekt + **-ing** | Handlung im Gange | "I **saw** him **leaving**." (Er ging gerade – ich sah einen Teil) |

**Kein 'to'!** ❌ "I saw him **to leave**."

### Beispiele:
- "I **heard** her **sing** the whole song." (Komplett)
- "I **heard** her **singing** as I walked past." (Im Gange)
- "I **felt** something **crawl** on my hand." (Komplett)
- "I **watched** the children **playing** in the park." (Im Gange)

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: { en: { title: 'See somebody do/doing', description: 'Practice perception verbs.', checklist: [{ text: 'Write 3 sentences with complete actions (base form)', checked: false }, { text: 'Write 3 sentences with actions in progress (-ing)', checked: false }, { text: 'Use hear, watch, feel, and notice in sentences', checked: false }] }, de: { title: 'See somebody do/doing', description: 'Übe Wahrnehmungsverben.', checklist: [{ text: 'Schreibe 3 Sätze mit vollständigen Handlungen (Grundform)', checked: false }, { text: 'Schreibe 3 Sätze mit Handlungen im Gange (-ing)', checked: false }, { text: 'Benutze hear, watch, feel und notice in Sätzen', checked: false }] } },
  quiz: { en: [], de: [] }
};
