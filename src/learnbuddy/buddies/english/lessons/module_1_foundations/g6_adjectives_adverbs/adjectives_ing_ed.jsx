import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "This movie is very ___", de: "Dieser Film ist sehr ___" },
    words: ["boring", "bored", "bore", "bores"],
    correct: "boring",
    explanation: { en: "-ing = describes the thing (the movie is boring)", de: "-ing = beschreibt die Sache (der Film ist langweilig)" }
  },
  {
    prompt: { en: "I am ___ with this movie.", de: "Ich bin ___ von diesem Film." },
    words: ["bored", "boring", "bore", "bores"],
    correct: "bored",
    explanation: { en: "-ed = describes how you feel (I feel bored)", de: "-ed = beschreibt, wie du dich fühlst (ich fühle mich gelangweilt)" }
  },
  {
    prompt: { en: "The news was very ___", de: "Die Nachrichten waren sehr ___" },
    words: ["surprising", "surprised", "surprise", "surprises"],
    correct: "surprising",
    explanation: { en: "-ing = describes the thing (the news is surprising)", de: "-ing = beschreibt die Sache (die Nachrichten sind überraschend)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I am very interesting in science.",
    mistakeIndex: 2,
    correction: "interested",
    explanation: { en: "I am interested (how I feel), not interesting (what I am)", de: "I am interested (wie ich mich fühle), nicht interesting (was ich bin)" }
  },
  {
    sentence: "This book is very bored.",
    mistakeIndex: 3,
    correction: "boring",
    explanation: { en: "The book is boring (describes the book), not bored (how someone feels)", de: "Das Buch ist boring (beschreibt das Buch), nicht bored (wie jemand sich fühlt)" }
  },
  {
    sentence: "She looks very tiring.",
    mistakeIndex: 3,
    correction: "tired",
    explanation: { en: "She looks tired (how she feels), not tiring (what she is)", de: "Sie sieht tired aus (wie sie sich fühlt), nicht tiring (was sie ist)" }
  }
];

const grammarMoleData = [
  {
    prompt: "This movie is very ___",
    options: ["boring", "bored", "bore"],
    correct: "boring",
    explanation: "-ing describes the thing"
  },
  {
    prompt: "I am ___ with this movie.",
    options: ["bored", "boring", "bore"],
    correct: "bored",
    explanation: "-ed describes how you feel"
  },
  {
    prompt: "The news was very ___",
    options: ["surprising", "surprised", "surprise"],
    correct: "surprising",
    explanation: "-ing describes the thing"
  }
];

export const adjectivesIngEd = {
  id: 'a1_g98',
  title: {
    en: 'Adjectives ending in -ing and -ed',
    de: 'Adjektive auf -ing und -ed'
  },
  description: {
    en: "Understanding the difference: 'boring' (describes the thing) vs 'bored' (describes how you feel).",
    de: "Den Unterschied verstehen: 'boring' (beschreibt die Sache) vs 'bored' (beschreibt, wie du dich fühlst)."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarMole: <GrammarGame type="grammarMole" data={grammarMoleData} />
  },

  content: {
    en: `
## -ing vs. -ed Adjectives: The Feeling vs. The Thing! 🎭

Many adjectives in English end in **-ing** or **-ed**. Understanding the difference is crucial! The key is: **-ing** describes **the thing**, while **-ed** describes **how you feel**.

Think about it: A movie can be **boring** (that\'s what the movie is), but you feel **bored** (that\'s how you feel). They're related, but different!

### 1. -ing Adjectives: Describing the Thing 📦

**-ing** adjectives describe **what something is** or **what it does**. They describe the **source** of the feeling.

**Examples:**
- "This movie is **boring**." (The movie makes people feel bored)
- "The news was **surprising**." (The news makes people feel surprised)
- "The work is **tiring**." (The work makes people feel tired)
- "The book is **interesting**." (The book makes people feel interested)

**Key Point:** The **-ing** adjective describes **the thing itself**, not the person!

<GamePlaceholder id="sentenceBuilder" />

### 2. -ed Adjectives: Describing How You Feel 😊

**-ed** adjectives describe **how someone feels**. They describe the **feeling** that comes from something.

**Examples:**
- "I am **bored**." (I feel bored because of the movie)
- "She was **surprised**." (She felt surprised because of the news)
- "We are **tired**." (We feel tired because of the work)
- "He is **interested**." (He feels interested because of the book)

**Key Point:** The **-ed** adjective describes **the person's feeling**, not the thing!

### 3. Common Pairs 📋

Here are common pairs of -ing and -ed adjectives:

| -ing (Thing) | -ed (Feeling) | Meaning |
|--------------|---------------|---------|
| **boring** | **bored** | langweilig / gelangweilt |
| **interesting** | **interested** | interessant / interessiert |
| **surprising** | **surprised** | überraschend / überrascht |
| **tiring** | **tired** | ermüdend / müde |
| **confusing** | **confused** | verwirrend / verwirrt |
| **exciting** | **excited** | aufregend / aufgeregt |
| **disappointing** | **disappointed** | enttäuschend / enttäuscht |
| **amazing** | **amazed** | erstaunlich / erstaunt |

<GamePlaceholder id="fixTheMistake" />

### 4. How to Choose? 🤔

**Ask yourself:**
1. **Am I describing the thing?** → Use **-ing**
   - "This book is **interesting**." ✅

2. **Am I describing how someone feels?** → Use **-ed**
   - "I am **interested** in this book." ✅

**Pattern:**
- **Thing + is/are + -ing adjective**
- **Person + am/is/are + -ed adjective**

### 5. Common Mistakes ❌

1. **Using -ed for things**
   - ❌ "This movie is **bored**." → ✅ "This movie is **boring**."

2. **Using -ing for feelings**
   - ❌ "I am **boring**." → ✅ "I am **bored**." (Unless you mean you make others bored!)

3. **Confusing the two**
   - ❌ "The news was **surprised**." → ✅ "The news was **surprising**."
   - ❌ "I am **surprising**." → ✅ "I am **surprised**."

<GamePlaceholder id="grammarMole" />

### 6. Practice Makes Perfect! 🎓

**Remember:**
- **-ing** = What the thing **is** (boring, interesting, surprising)
- **-ed** = How you **feel** (bored, interested, surprised)

**Try these:**
- "This lesson is **interesting**." (describes the lesson)
- "I am **interested** in learning." (describes how I feel)

**Master this, and you'll describe things and feelings correctly!**
`,
    de: `
## -ing vs. -ed Adjektive: Das Gefühl vs. Die Sache! 🎭

Viele Adjektive im Englischen enden auf **-ing** oder **-ed**. Den Unterschied zu verstehen ist entscheidend! Der Schlüssel ist: **-ing** beschreibt **die Sache**, während **-ed** beschreibt, **wie du dich fühlst**.

Denk daran: Ein Film kann **boring** sein (das ist, was der Film ist), aber du fühlst dich **bored** (das ist, wie du dich fühlst). Sie sind verwandt, aber unterschiedlich!

### 1. -ing Adjektive: Die Sache Beschreiben 📦

**-ing** Adjektive beschreiben **was etwas ist** oder **was es tut**. Sie beschreiben die **Quelle** des Gefühls.

**Beispiele:**
- "This movie is **boring**." (Der Film macht Menschen gelangweilt)
- "The news was **surprising**." (Die Nachrichten machen Menschen überrascht)
- "The work is **tiring**." (Die Arbeit macht Menschen müde)
- "The book is **interesting**." (Das Buch macht Menschen interessiert)

**Wichtiger Punkt:** Das **-ing** Adjektiv beschreibt **die Sache selbst**, nicht die Person!

<GamePlaceholder id="sentenceBuilder" />

### 2. -ed Adjektive: Beschreiben, Wie Du Dich Fühlst 😊

**-ed** Adjektive beschreiben **wie sich jemand fühlt**. Sie beschreiben das **Gefühl**, das von etwas kommt.

**Beispiele:**
- "I am **bored**." (Ich fühle mich gelangweilt wegen des Films)
- "She was **surprised**." (Sie fühlte sich überrascht wegen der Nachrichten)
- "We are **tired**." (Wir fühlen uns müde wegen der Arbeit)
- "He is **interested**." (Er fühlt sich interessiert wegen des Buches)

**Wichtiger Punkt:** Das **-ed** Adjektiv beschreibt **das Gefühl der Person**, nicht die Sache!

### 3. Häufige Paare 📋

Hier sind häufige Paare von -ing und -ed Adjektiven:

| -ing (Sache) | -ed (Gefühl) | Bedeutung |
|--------------|--------------|-----------|
| **boring** | **bored** | langweilig / gelangweilt |
| **interesting** | **interested** | interessant / interessiert |
| **surprising** | **surprised** | überraschend / überrascht |
| **tiring** | **tired** | ermüdend / müde |
| **confusing** | **confused** | verwirrend / verwirrt |
| **exciting** | **excited** | aufregend / aufgeregt |
| **disappointing** | **disappointed** | enttäuschend / enttäuscht |
| **amazing** | **amazed** | erstaunlich / erstaunt |

<GamePlaceholder id="fixTheMistake" />

### 4. Wie Wähle Ich? 🤔

**Frage dich:**
1. **Beschreibe ich die Sache?** → Verwende **-ing**
   - "This book is **interesting**." ✅

2. **Beschreibe ich, wie sich jemand fühlt?** → Verwende **-ed**
   - "I am **interested** in this book." ✅

**Muster:**
- **Sache + is/are + -ing Adjektiv**
- **Person + am/is/are + -ed Adjektiv**

### 5. Häufige Fehler ❌

1. **-ed für Sachen verwenden**
   - ❌ "This movie is **bored**." → ✅ "This movie is **boring**."

2. **-ing für Gefühle verwenden**
   - ❌ "I am **boring**." → ✅ "I am **bored**." (Außer du meinst, du machst andere gelangweilt!)

3. **Die beiden verwechseln**
   - ❌ "The news was **surprised**." → ✅ "The news was **surprising**."
   - ❌ "I am **surprising**." → ✅ "I am **surprised**."

<GamePlaceholder id="grammarMole" />

### 6. Übung macht den Meister! 🎓

**Denk daran:**
- **-ing** = Was die Sache **ist** (boring, interesting, surprising)
- **-ed** = Wie du dich **fühlst** (bored, interested, surprised)

**Versuche diese:**
- "This lesson is **interesting**." (beschreibt die Lektion)
- "I am **interested** in learning." (beschreibt, wie ich mich fühle)

**Meistere das, und du wirst Sachen und Gefühle korrekt beschreiben!**
`
  },
  task: {
    de: {
      title: '-ing und -ed Adjektive üben',
      description: 'Schreibe 3 Sätze: einen mit -ing (Sache beschreiben) und zwei mit -ed (Gefühle beschreiben).',
      checklist: [
        { text: 'Satz mit -ing Adjektiv (Sache)', checked: false },
        { text: 'Satz 1 mit -ed Adjektiv (Gefühl)', checked: false },
        { text: 'Satz 2 mit -ed Adjektiv (Gefühl)', checked: false }
      ]
    },
    en: {
      title: 'Practicing -ing and -ed Adjectives',
      description: 'Write 3 sentences: one with -ing (describing thing) and two with -ed (describing feelings).',
      checklist: [
        { text: 'Sentence with -ing adjective (thing)', checked: false },
        { text: 'Sentence 1 with -ed adjective (feeling)', checked: false },
        { text: 'Sentence 2 with -ed adjective (feeling)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


