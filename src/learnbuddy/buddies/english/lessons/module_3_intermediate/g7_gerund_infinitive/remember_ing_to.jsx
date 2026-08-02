import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  { prompt: { en: "I remember ___ the door. (I have a memory of doing it)", de: "Ich erinnere mich daran, die Tür abgeschlossen zu haben." }, words: ["locking", "to lock", "lock", "locked"], correct: "locking", explanation: { en: "remember + -ing = memory of a past action.", de: "remember + -ing = Erinnerung an eine vergangene Handlung." } },
  { prompt: { en: "Remember ___ the door before you leave!", de: "Denk daran, die Tür abzuschließen, bevor du gehst!" }, words: ["to lock", "locking", "lock", "locked"], correct: "to lock", explanation: { en: "remember + to = don't forget to do something.", de: "remember + to = vergiss nicht, etwas zu tun." } },
  { prompt: { en: "I regret ___ you that the flight has been cancelled.", de: "Ich bedaure, Ihnen mitteilen zu müssen, dass der Flug gestrichen wurde." }, words: ["to tell", "telling", "tell", "told"], correct: "to tell", explanation: { en: "regret + to = I'm sorry to say (formal).", de: "regret + to = Es tut mir leid zu sagen (formal)." } }
];

const fixTheMistakeData = [
  { sentence: "I remember to meet her at the party last year.", mistakeIndex: 1, correction: "remember meeting", explanation: { en: "Memory of a past event = remember + -ing.", de: "Erinnerung an ein vergangenes Ereignis = remember + -ing." } },
  { sentence: "Don't forget posting the letter!", mistakeIndex: 2, correction: "to post", explanation: { en: "Don't forget to do something (future) = forget + to.", de: "Vergiss nicht, etwas zu tun (Zukunft) = forget + to." } },
  { sentence: "I regret to spend so much money yesterday.", mistakeIndex: 2, correction: "spending", explanation: { en: "Regret about a past action = regret + -ing.", de: "Bedauern über eine vergangene Handlung = regret + -ing." } }
];

const grammarRacerData = [
  { prompt: "I'll never forget ___ the Eiffel Tower for the first time.", options: ["seeing", "to see", "see"], correct: "seeing", explanation: "Memory of past experience = -ing." },
  { prompt: "Please remember ___ off the lights.", options: ["to turn", "turning", "turn"], correct: "to turn", explanation: "Don't forget (future action) = to." },
  { prompt: "She regrets ___ him the truth.", options: ["telling", "to tell", "tell"], correct: "telling", explanation: "Regret about a past action = -ing." }
];

export const rememberIngTo = {
  id: 'b1_g56',
  title: { en: 'Verb + -ing or to 1 (remember/regret)', de: 'Verb + -ing oder to 1 (remember/regret)' },
  description: { en: "Verbs that change meaning: remember doing (past memory) vs. remember to do (don't forget).", de: "Verben mit Bedeutungsänderung: remember doing (Erinnerung) vs. remember to do (nicht vergessen)." },
  components: { sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />, fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />, grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} /> },
  content: {
    en: `
## Verb + -ing or to 1 – remember / regret / forget 🧠

Some verbs can be followed by both **-ing** and **to**, but the meaning **changes**.

### 1. Remember 📝

| Form | Meaning | Example |
|------|---------|---------|
| remember + **-ing** | Memory of a past action | "I **remember locking** the door." (I have a memory of it) |
| remember + **to** | Don't forget (future) | "**Remember to lock** the door!" (Don't forget!) |

### 2. Forget 🤔

| Form | Meaning | Example |
|------|---------|---------|
| forget + **-ing** | Lose memory of past | "I'll never **forget visiting** Paris." |
| forget + **to** | Fail to do something | "I **forgot to buy** milk." (I didn't buy it) |

### 3. Regret 😔

| Form | Meaning | Example |
|------|---------|---------|
| regret + **-ing** | Regret a past action | "I **regret saying** that." (I wish I hadn't) |
| regret + **to** | Formal announcement | "I **regret to inform** you..." (I'm sorry to say) |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Simple Rule:</h3>
  <p><strong>-ing</strong> = looking BACK at the past (memory)</p>
  <p><strong>to</strong> = looking FORWARD (something to do)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Common Mistakes ❌
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Verb + -ing oder to 1 – remember / regret / forget 🧠

Manche Verben können sowohl mit **-ing** als auch **to** stehen, aber die Bedeutung **ändert sich**.

### 1. Remember 📝

| Form | Bedeutung | Beispiel |
|------|-----------|----------|
| remember + **-ing** | Erinnerung an vergangene Handlung | "I **remember locking** the door." (Ich erinnere mich daran) |
| remember + **to** | Nicht vergessen (Zukunft) | "**Remember to lock** the door!" (Vergiss nicht!) |

### 2. Forget 🤔

| Form | Bedeutung | Beispiel |
|------|-----------|----------|
| forget + **-ing** | Erinnerung verlieren | "I'll never **forget visiting** Paris." |
| forget + **to** | Versäumen, etwas zu tun | "I **forgot to buy** milk." (Ich habe es nicht gekauft) |

### 3. Regret 😔

| Form | Bedeutung | Beispiel |
|------|-----------|----------|
| regret + **-ing** | Vergangene Handlung bedauern | "I **regret saying** that." (Ich wünschte, ich hätte es nicht gesagt) |
| regret + **to** | Formelle Ankündigung | "I **regret to inform** you..." (Es tut mir leid zu sagen) |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Einfache Regel:</h3>
  <p><strong>-ing</strong> = Blick ZURÜCK in die Vergangenheit (Erinnerung)</p>
  <p><strong>to</strong> = Blick NACH VORN (etwas zu tun)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Häufige Fehler ❌
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: { en: { title: 'Remember/Regret + -ing or to', description: 'Practice the meaning change.', checklist: [{ text: 'Write 2 pairs with remember (-ing vs to)', checked: false }, { text: 'Write 2 pairs with forget (-ing vs to)', checked: false }, { text: 'Write 2 pairs with regret (-ing vs to)', checked: false }] }, de: { title: 'Remember/Regret + -ing oder to', description: 'Übe den Bedeutungsunterschied.', checklist: [{ text: 'Schreibe 2 Paare mit remember (-ing vs to)', checked: false }, { text: 'Schreibe 2 Paare mit forget (-ing vs to)', checked: false }, { text: 'Schreibe 2 Paare mit regret (-ing vs to)', checked: false }] } },
  quiz: { en: [], de: [] }
};
