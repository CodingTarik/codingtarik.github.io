import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ my car washed yesterday. (I didn't wash it myself)", de: "Ich habe mein Auto gestern waschen lassen." },
    words: ["had", "have", "got", "was"],
    correct: "had",
    explanation: { en: "Have/had something done = someone else does it for you.", de: "Have/had something done = jemand anderes macht es für dich." }
  },
  {
    prompt: { en: "She's going to ___ her hair cut tomorrow.", de: "Sie wird sich morgen die Haare schneiden lassen." },
    words: ["have", "had", "get", "make"],
    correct: "have",
    explanation: { en: "Have something done = arrange for someone to do it.", de: "Have something done = veranlassen, dass jemand es tut." }
  },
  {
    prompt: { en: "We need to get the roof ___.", de: "Wir müssen das Dach reparieren lassen." },
    words: ["repaired", "repair", "repairing", "to repair"],
    correct: "repaired",
    explanation: { en: "Get something DONE (past participle).", de: "Get something DONE (Partizip Perfekt)." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I had my hair cutting yesterday.",
    mistakeIndex: 4,
    correction: "cut",
    explanation: { en: "Use the past participle: 'had my hair CUT', not 'cutting'.", de: "Benutze das Partizip Perfekt: 'had my hair CUT', nicht 'cutting'." }
  },
  {
    sentence: "She has her car repair every month.",
    mistakeIndex: 4,
    correction: "repaired",
    explanation: { en: "Have something DONE – use past participle: 'repaired'.", de: "Have something DONE – benutze Partizip Perfekt: 'repaired'." }
  },
  {
    sentence: "I had painted the house. (meaning: I hired someone)",
    mistakeIndex: 1,
    correction: "had the house painted",
    explanation: { en: "'I had painted the house' = I did it myself. 'I had the house painted' = someone else did it.", de: "'I had painted the house' = Ich tat es selbst. 'I had the house painted' = jemand anderes tat es." }
  }
];

const grammarRacerData = [
  {
    prompt: "I need to have my eyes ___.",
    options: ["tested", "test", "testing"],
    correct: "tested",
    explanation: "Have something DONE (past participle)."
  },
  {
    prompt: "She ___ her nails done every two weeks.",
    options: ["has", "is", "does"],
    correct: "has",
    explanation: "Has something done = regular arrangement."
  },
  {
    prompt: "We got our kitchen ___ last year.",
    options: ["renovated", "renovate", "renovating"],
    correct: "renovated",
    explanation: "Get something done = past participle."
  }
];

export const haveSomethingDone = {
  id: 'b1_g46',
  title: {
    en: 'Have something done (Causative)',
    de: 'Have something done (Kausativ)'
  },
  description: {
    en: "When someone else does something for you: 'I had my car repaired.'",
    de: "Wenn jemand anderes etwas für dich macht: 'I had my car repaired.'"
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Have something done (Causative) 🔧👤

We use **have something done** when we **arrange for someone else** to do something for us.

### 1. The Structure 📐

**have + object + past participle**

- "I **had** my car **repaired**." (A mechanic repaired it – not me).
- "She **has** her hair **cut** every month." (A hairdresser cuts it).
- "We're going to **have** the house **painted**." (Painters will do it).

### 2. Tense Changes ⏰

| Tense | Example |
|-------|---------|
| Present simple | "I **have** my car **serviced** every year." |
| Present continuous | "I'**m having** my kitchen **renovated**." |
| Past simple | "I **had** my teeth **checked** last week." |
| Present perfect | "I'**ve** just **had** my hair **done**." |
| Future (will) | "I'**ll have** the roof **fixed** soon." |
| Future (going to) | "I'**m going to have** my eyes **tested**." |

### 3. Get something done 🔄

**Get** can replace **have** (more informal):

- "I need to **get** my phone **fixed**." = "I need to **have** my phone **fixed**."
- "She **got** her ears **pierced**." = "She **had** her ears **pierced**."

### 4. Have something done vs. Do it yourself ⚡

| Sentence | Meaning |
|----------|---------|
| "I **painted** the house." | I did it myself. |
| "I **had** the house **painted**." | Someone else painted it for me. |
| "He **cut** his hair." | He cut it himself. |
| "He **had** his hair **cut**." | A barber cut it. |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Also used for bad experiences:</h3>
  <p>"I <strong>had</strong> my wallet <strong>stolen</strong>." (Someone stole it – bad experience).</p>
  <p>"She <strong>had</strong> her car <strong>broken into</strong>."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 5. Common Mistakes ❌

- ❌ "I had my hair **cutting**." → ✅ "had my hair **cut**"
- ❌ "I had **repair** my car." → ✅ "I had my car **repaired**."

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Have something done (Kausativ) 🔧👤

Wir benutzen **have something done**, wenn wir **veranlassen, dass jemand anderes** etwas für uns tut.

### 1. Die Struktur 📐

**have + Objekt + Partizip Perfekt**

- "I **had** my car **repaired**." (Ein Mechaniker hat es repariert – nicht ich).
- "She **has** her hair **cut** every month." (Ein Friseur schneidet es).
- "We're going to **have** the house **painted**." (Maler werden es machen).

### 2. Zeitform-Änderungen ⏰

| Zeitform | Beispiel |
|----------|----------|
| Present Simple | "I **have** my car **serviced** every year." |
| Present Continuous | "I'**m having** my kitchen **renovated**." |
| Past Simple | "I **had** my teeth **checked** last week." |
| Present Perfect | "I'**ve** just **had** my hair **done**." |
| Future (will) | "I'**ll have** the roof **fixed** soon." |
| Future (going to) | "I'**m going to have** my eyes **tested**." |

### 3. Get something done 🔄

**Get** kann **have** ersetzen (informeller):

- "I need to **get** my phone **fixed**." = "I need to **have** my phone **fixed**."
- "She **got** her ears **pierced**." = "She **had** her ears **pierced**."

### 4. Have something done vs. Selbst machen ⚡

| Satz | Bedeutung |
|------|-----------|
| "I **painted** the house." | Ich habe es selbst gemacht. |
| "I **had** the house **painted**." | Jemand anderes hat es für mich gemacht. |
| "He **cut** his hair." | Er hat es selbst geschnitten. |
| "He **had** his hair **cut**." | Ein Friseur hat es geschnitten. |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Auch für schlechte Erfahrungen:</h3>
  <p>"I <strong>had</strong> my wallet <strong>stolen</strong>." (Jemand hat es gestohlen – schlechte Erfahrung).</p>
  <p>"She <strong>had</strong> her car <strong>broken into</strong>."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 5. Häufige Fehler ❌

- ❌ "I had my hair **cutting**." → ✅ "had my hair **cut**"
- ❌ "I had **repair** my car." → ✅ "I had my car **repaired**."

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Have something done',
      description: 'Practice causative structures.',
      checklist: [
        { text: 'Write 5 things you have done regularly (hairdresser, mechanic, etc.)', checked: false },
        { text: 'Write 3 sentences about past services', checked: false },
        { text: 'Rewrite using get instead of have', checked: false }
      ]
    },
    de: {
      title: 'Have something done',
      description: 'Übe Kausativ-Strukturen.',
      checklist: [
        { text: 'Schreibe 5 Dinge, die du regelmäßig machen lässt (Friseur, Mechaniker, etc.)', checked: false },
        { text: 'Schreibe 3 Sätze über vergangene Dienstleistungen', checked: false },
        { text: 'Schreibe sie mit get statt have um', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
