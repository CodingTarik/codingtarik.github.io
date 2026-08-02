import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  { prompt: { en: "She succeeded ___ passing the exam.", de: "Es gelang ihr, die Prüfung zu bestehen." }, words: ["in", "to", "at", "for"], correct: "in", explanation: { en: "succeed in + -ing.", de: "succeed in + -ing." } },
  { prompt: { en: "He apologized ___ being late.", de: "Er entschuldigte sich dafür, zu spät zu sein." }, words: ["for", "of", "to", "about"], correct: "for", explanation: { en: "apologize for + -ing.", de: "apologize for + -ing." } },
  { prompt: { en: "She insisted ___ paying for dinner.", de: "Sie bestand darauf, das Abendessen zu bezahlen." }, words: ["on", "in", "for", "to"], correct: "on", explanation: { en: "insist on + -ing.", de: "insist on + -ing." } }
];

const fixTheMistakeData = [
  { sentence: "She succeeded to pass the exam.", mistakeIndex: 2, correction: "in passing", explanation: { en: "succeed IN + -ing, not 'to pass'.", de: "succeed IN + -ing, nicht 'to pass'." } },
  { sentence: "He accused me to steal his phone.", mistakeIndex: 3, correction: "of stealing", explanation: { en: "accuse someone OF + -ing.", de: "accuse someone OF + -ing." } },
  { sentence: "I'm looking forward to see you.", mistakeIndex: 5, correction: "seeing", explanation: { en: "'Look forward to' – 'to' is a preposition, so + -ing.", de: "'Look forward to' – 'to' ist eine Präposition, also + -ing." } }
];

const grammarRacerData = [
  { prompt: "I'm looking forward to ___ you.", options: ["seeing", "see", "to see"], correct: "seeing", explanation: "look forward to + -ing." },
  { prompt: "She blamed me ___ the accident.", options: ["for causing", "to cause", "of causing"], correct: "for causing", explanation: "blame someone for + -ing." },
  { prompt: "He prevented me ___ leaving.", options: ["from", "of", "to"], correct: "from", explanation: "prevent someone from + -ing." }
];

export const verbPrepIng = {
  id: 'b1_g62',
  title: { en: 'Verb + Preposition + -ing', de: 'Verb + Präposition + -ing' },
  description: { en: "succeed in -ing, insist on -ing, apologize for -ing, etc.", de: "succeed in -ing, insist on -ing, apologize for -ing, etc." },
  components: { sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />, fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />, grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} /> },
  content: {
    en: `
## Verb + Preposition + -ing 📋

Many verbs are followed by a fixed preposition, and then **-ing**:

### Common Combinations:

| Verb + Preposition | Example |
|-------------------|---------|
| succeed **in** | She succeeded **in getting** a job. |
| insist **on** | He insisted **on paying**. |
| apologize **for** | I apologized **for being** late. |
| blame someone **for** | She blamed me **for breaking** it. |
| accuse someone **of** | They accused him **of stealing**. |
| approve/disapprove **of** | She doesn't approve **of smoking**. |
| congratulate someone **on** | I congratulated her **on passing**. |
| depend **on** | It depends **on having** enough time. |
| feel **like** | I don't feel **like going** out. |
| look forward **to** | I look forward **to seeing** you. |
| prevent someone **from** | The rain prevented us **from going**. |
| stop someone **from** | Nothing can stop me **from trying**. |
| think **of/about** | I'm thinking **of moving**. |
| dream **of/about** | She dreams **of becoming** a doctor. |
| complain **about** | He complained **about waiting**. |
| warn someone **about** | She warned me **about driving** too fast. |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Remember: look forward to + -ing!</h3>
  <p>❌ "I look forward to <strong>see</strong> you."</p>
  <p>✅ "I look forward to <strong>seeing</strong> you."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Verb + Präposition + -ing 📋

Viele Verben werden von einer festen Präposition gefolgt, und dann **-ing**:

### Häufige Kombinationen:

| Verb + Präposition | Beispiel |
|--------------------|----------|
| succeed **in** | She succeeded **in getting** a job. |
| insist **on** | He insisted **on paying**. |
| apologize **for** | I apologized **for being** late. |
| blame someone **for** | She blamed me **for breaking** it. |
| accuse someone **of** | They accused him **of stealing**. |
| approve/disapprove **of** | She doesn't approve **of smoking**. |
| congratulate someone **on** | I congratulated her **on passing**. |
| depend **on** | It depends **on having** enough time. |
| feel **like** | I don't feel **like going** out. |
| look forward **to** | I look forward **to seeing** you. |
| prevent someone **from** | The rain prevented us **from going**. |
| stop someone **from** | Nothing can stop me **from trying**. |
| think **of/about** | I'm thinking **of moving**. |
| dream **of/about** | She dreams **of becoming** a doctor. |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Denk dran: look forward to + -ing!</h3>
  <p>❌ "I look forward to <strong>see</strong> you."</p>
  <p>✅ "I look forward to <strong>seeing</strong> you."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />
<GamePlaceholder id="fixTheMistake" />

---
### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: { en: { title: 'Verb + Preposition + -ing', description: 'Practice fixed verb-preposition combinations.', checklist: [{ text: 'Write 5 sentences using different combinations', checked: false }, { text: 'Test yourself: cover the preposition and guess it', checked: false }, { text: 'Write a paragraph using at least 4 verb + prep + -ing combinations', checked: false }] }, de: { title: 'Verb + Präposition + -ing', description: 'Übe feste Verb-Präposition-Kombinationen.', checklist: [{ text: 'Schreibe 5 Sätze mit verschiedenen Kombinationen', checked: false }, { text: 'Teste dich: verdecke die Präposition und rate sie', checked: false }, { text: 'Schreibe einen Absatz mit mindestens 4 Verb + Präp + -ing Kombinationen', checked: false }] } },
  quiz: { en: [], de: [] }
};
