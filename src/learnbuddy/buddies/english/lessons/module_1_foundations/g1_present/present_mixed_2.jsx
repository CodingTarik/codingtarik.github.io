import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const fixTheMistakeData = [
  {
    sentence: "I am liking pizza.",
    mistakeIndex: 1,
    correction: "like",
    explanation: { en: "'Like' is a stative verb. No -ing!", de: "'Like' ist ein Zustandsverb. Kein -ing!" }
  },
  {
    sentence: "She is knowing the answer.",
    mistakeIndex: 1,
    correction: "knows",
    explanation: { en: "'Know' describes a state. Use Simple.", de: "'Know' beschreibt einen Zustand. Nutze Simple." }
  },
  {
    sentence: "Are you understanding me?",
    mistakeIndex: 0,
    correction: "Do you understand",
    explanation: { en: "Understand is a stative verb.", de: "Understand ist ein Zustandsverb." }
  },
  {
    sentence: "I am wanting a coffee.",
    mistakeIndex: 1,
    correction: "want",
    explanation: { en: "'Want' describes a desire (state).", de: "'Want' beschreibt einen Wunsch (Zustand)." }
  }
];

const grammarRacerData = [
  {
    prompt: "I ___ you are right.",
    options: ["think", "am thinking"],
    correct: "think",
    explanation: "think = believe (State)"
  },
  {
    prompt: "Quiet! I ___ about the problem.",
    options: ["think", "am thinking"],
    correct: "am thinking",
    explanation: "think = mental activity (Action)"
  },
  {
    prompt: "This soup ___ good.",
    options: ["tastes", "is tasting"],
    correct: "tastes",
    explanation: "State (Eigenschaft)"
  },
  {
    prompt: "The chef ___ the soup.",
    options: ["tastes", "is tasting"],
    correct: "is tasting",
    explanation: "Action (probieren)"
  }
];

export const presentMixed2 = {
  id: 'a1_g4',
  title: {
    en: 'Present Continuous vs. Simple 2',
    de: 'Present Continuous vs. Simple 2'
  },
  description: {
    en: "Advanced: Verbs that hate -ing (Stative Verbs like 'know', 'like').",
    de: "Fortgeschritten: Verben, die -ing hassen (Zustandsverben wie 'know', 'like')."
  },
  
  components: {
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Stative Verbs: The verbs that hate "-ing" 🚫

Some verbs generally **cannot** be used in the Continuous form (with -ing), even if they are happening right now!
These are called **Stative Verbs**. They describe states, feelings, or thoughts, not active movements.

### 1. The "Non-Action" List

Do not use **-ing** with these verbs:

*   **Feelings:** like, love, hate, want, prefer, need
*   **Thinking:** know, understand, believe, remember, mean
*   **Senses:** seem, look (appear), smell, taste, sound
*   **Possession:** have (possession), own, belong

**Examples:**
- ❌ "I am knowing him." (Wrong!)
- ✅ "I **know** him." (Correct!)
- ❌ "I am wanting a coffee." (Wrong!)
- ✅ "I **want** a coffee." (Correct!)

<GamePlaceholder id="fixTheMistake" />

### 2. Tricky Verbs (Double Meaning) 🎭

Some verbs can be BOTH, but the meaning changes!

**A. Think**
- State: "I **think** it is good." (= I believe / My opinion) -> **Simple**
- Action: "I **am thinking** about my holiday." (= My brain is working right now) -> **Continuous**

**B. Have**
- State: "I **have** a car." (= Possession) -> **Simple**
- Action: "I **am having** lunch." (= Eating / Experience) -> **Continuous**

**C. Taste/Smell**
- State: "The soup **tastes** good." (= It has a good flavor) -> **Simple**
- Action: "The chef **is tasting** the soup." (= He is testing it with a spoon) -> **Continuous**

<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Zustandsverben: Die Verben, die "-ing" hassen 🚫

Einige Verben können normalerweise **nicht** in der Continuous-Form (mit -ing) verwendet werden, selbst wenn sie gerade jetzt passieren!
Man nennt sie **Stative Verbs** (Zustandsverben). Sie beschreiben Zustände, Gefühle oder Gedanken, keine aktiven Bewegungen.

### 1. Die "Nicht-Handlungs"-Liste

Benutze kein **-ing** mit diesen Verben:

*   **Gefühle:** like, love, hate, want, prefer, need
*   **Denken:** know, understand, believe, remember, mean
*   **Sinne:** seem, look (erscheinen), smell, taste, sound
*   **Besitz:** have (besitzen), own, belong

**Beispiele:**
- ❌ "I am knowing him." (Falsch!)
- ✅ "I **know** him." (Richtig!)
- ❌ "I am wanting a coffee." (Falsch!)
- ✅ "I **want** a coffee." (Richtig!)

<GamePlaceholder id="fixTheMistake" />

### 2. Trickreiche Verben (Doppelte Bedeutung) 🎭

Manche Verben können BEIDES sein, aber die Bedeutung ändert sich!

**A. Think (Denken/Glauben)**
- Zustand: "I **think** it is good." (= Ich glaube / Meine Meinung) -> **Simple**
- Handlung: "I **am thinking** about my holiday." (= Mein Gehirn arbeitet gerade daran) -> **Continuous**

**B. Have (Haben)**
- Zustand: "I **have** a car." (= Besitz) -> **Simple**
- Handlung: "I **am having** lunch." (= Ich esse gerade / Erlebe gerade) -> **Continuous**

**C. Taste/Smell (Schmecken/Riechen)**
- Zustand: "The soup **tastes** good." (= Sie hat einen guten Geschmack) -> **Simple**
- Handlung: "The chef **is tasting** the soup." (= Er probiert sie gerade aktiv) -> **Continuous**

<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    de: {
      title: 'Zustand vs. Handlung',
      description: 'Finde ein Beispiel für ein Zustandsverb (z.B. know) und schreibe einen Satz.',
      checklist: [
        { text: 'Satz mit Zustandsverb (Simple)', checked: false }
      ]
    },
    en: {
      title: 'State vs. Action',
      description: 'Find an example of a stative verb (e.g., know) and write a sentence.',
      checklist: [
        { text: 'Sentence with stative verb (Simple)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

