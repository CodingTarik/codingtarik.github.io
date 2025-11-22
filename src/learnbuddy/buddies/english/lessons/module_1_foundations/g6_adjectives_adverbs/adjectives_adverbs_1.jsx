import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "She runs very ___", de: "Sie läuft sehr ___" },
    words: ["quickly", "quick", "fast", "She", "runs"],
    correct: "She runs quickly",
    explanation: { en: "Adverb: describes HOW she runs (quickly)", de: "Adverb: beschreibt WIE sie läuft (quickly)" }
  },
  {
    prompt: { en: "She is very ___", de: "Sie ist sehr ___" },
    words: ["quick", "quickly", "fast", "She", "is"],
    correct: "She is quick",
    explanation: { en: "Adjective: describes WHAT she is (quick)", de: "Adjektiv: beschreibt WAS sie ist (quick)" }
  },
  {
    prompt: { en: "He speaks English ___", de: "Er spricht Englisch ___" },
    words: ["well", "good", "goodly", "He", "speaks"],
    correct: "He speaks English well",
    explanation: { en: "Adverb: describes HOW he speaks (well, not good)", de: "Adverb: beschreibt WIE er spricht (well, nicht good)" }
  },
  {
    prompt: { en: "She runs very ___", de: "Sie läuft sehr ___" },
    words: ["quickly", "quick", "fast", "She", "runs", "very"],
    correct: "She runs very quickly",
    explanation: { en: "Adverb: 'very quickly' describes HOW she runs. 'Quick' is adjective and cannot describe verbs!", de: "Adverb: 'very quickly' beschreibt WIE sie läuft. 'Quick' ist Adjektiv und kann Verben nicht beschreiben!" }
  },
  {
    prompt: { en: "She is a very ___ runner", de: "Sie ist eine sehr ___ Läuferin" },
    words: ["quick", "quickly", "fast", "She", "is", "very"],
    correct: "She is a very quick runner",
    explanation: { en: "Adjective: 'very quick' describes the noun 'runner'. Here 'quick' is an adjective!", de: "Adjektiv: 'very quick' beschreibt das Nomen 'runner'. Hier ist 'quick' ein Adjektiv!" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "She runs very quick.",
    mistakeIndex: 2,
    correction: "quickly",
    explanation: { en: "Adverb needed: quickly (describes HOW she runs)", de: "Adverb nötig: quickly (beschreibt WIE sie läuft)" }
  },
  {
    sentence: "She is very quickly.",
    mistakeIndex: 3,
    correction: "quick",
    explanation: { en: "Adjective needed: quick (describes WHAT she is)", de: "Adjektiv nötig: quick (beschreibt WAS sie ist)" }
  },
  {
    sentence: "He speaks English good.",
    mistakeIndex: 3,
    correction: "well",
    explanation: { en: "Adverb needed: well (not good - good is adjective)", de: "Adverb nötig: well (nicht good - good ist Adjektiv)" }
  },
  {
    sentence: "She runs very quick.",
    mistakeIndex: 3,
    correction: "quickly",
    explanation: { en: "Adverb needed: 'very quickly' (not 'very quick'). 'Quick' is adjective and cannot describe verbs!", de: "Adverb nötig: 'very quickly' (nicht 'very quick'). 'Quick' ist Adjektiv und kann Verben nicht beschreiben!" }
  },
  {
    sentence: "He learns very quickly.",
    mistakeIndex: 3,
    correction: "quickly",
    explanation: { en: "This is CORRECT! 'very quickly' is adverb describing 'learns'. No change needed!", de: "Das ist RICHTIG! 'very quickly' ist Adverb, das 'learns' beschreibt. Keine Änderung nötig!" }
  }
];

const grammarSmashData = [
  {
    prompt: "She runs very ___",
    options: ["quickly", "quick", "fast"],
    correct: "quickly",
    explanation: "Adverb: describes HOW"
  },
  {
    prompt: "She is very ___",
    options: ["quick", "quickly", "fastly"],
    correct: "quick",
    explanation: "Adjective: describes WHAT"
  },
  {
    prompt: "He speaks English ___",
    options: ["well", "good", "goodly"],
    correct: "well",
    explanation: "Adverb: well (not good)"
  }
];

export const adjectivesAdverbs1 = {
  id: 'a1_g100',
  title: {
    en: 'Adjectives and Adverbs 1: quick/quickly',
    de: 'Adjektive und Adverbien 1: quick/quickly'
  },
  description: {
    en: "Understanding the difference: 'quick' (adjective) vs 'quickly' (adverb).",
    de: "Den Unterschied verstehen: 'quick' (Adjektiv) vs 'quickly' (Adverb)."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarSmash: <GrammarGame type="grammarSmash" data={grammarSmashData} />
  },

  content: {
    en: `
## Adjectives vs. Adverbs: The Big Difference! 📝

**Adjectives** describe **nouns** (things, people). **Adverbs** describe **verbs** (actions) or **other adjectives/adverbs**. Understanding this difference is crucial!

### 1. Adjectives: Describing Nouns 📦

**Adjectives** describe **what something is** or **what someone is like**.

**Pattern:** adjective + noun OR be + adjective

**Examples:**
- "a **quick** runner" (quick describes runner - noun)
- "She is **quick**." (quick describes she - what she is)
- "a **good** student" (good describes student - noun)
- "The food is **good**." (good describes food - what it is)

**Key Point:** Adjectives answer: **What is it like?** or **What is he/she/it?**

<GamePlaceholder id="sentenceBuilder" />

### 2. Adverbs: Describing Verbs 🏃

**Adverbs** describe **how something is done** or **how an action happens**.

**Pattern:** verb + adverb

**Most adverbs end in -ly:**
- quick → **quickly**
- slow → **slowly**
- careful → **carefully**
- beautiful → **beautifully**

**Examples:**
- "She runs **quickly**." (quickly describes how she runs - verb)
- "He speaks **slowly**." (slowly describes how he speaks - verb)
- "Drive **carefully**!" (carefully describes how to drive - verb)

**Key Point:** Adverbs answer: **How is it done?**

### 3. The Special Case: Good vs. Well ⭐

**Good** is an **adjective** (describes nouns).
**Well** is an **adverb** (describes verbs).

**Examples:**
- "She is **good**." (good = adjective, describes she)
- "She speaks **well**." (well = adverb, describes how she speaks)
- "The food is **good**." (good = adjective, describes food)
- "He cooks **well**." (well = adverb, describes how he cooks)

**Important:** Never say "speaks good" - it's "speaks **well**"!

<GamePlaceholder id="fixTheMistake" />

### 4. Common Patterns 📋

**Adjective Patterns:**
- **be + adjective**: "I am **happy**."
- **adjective + noun**: "a **happy** person"
- **look/feel/seem + adjective**: "You look **tired**."

**Adverb Patterns:**
- **verb + adverb**: "She runs **quickly**."
- **adverb + adjective**: "very **quick**" (very is adverb)
- **adverb + adverb**: "very **quickly**"

### 4.1. Important Clarification: "very quick" vs. "very quickly" 🤔

**A common confusion:** Why is "quick" in "very quick" an adjective, even though it might relate to a verb?

**The answer lies in the function of the words:**

**1. "very quick" = Adjective (describes a noun)**
- "She is a **very quick** runner." (quick describes "runner" - a noun)
- "He is **very quick**." (quick describes "he" - what he is)
- Here, "very" (adverb) modifies the adjective "quick", and together they describe a noun.

**2. "very quickly" = Adverb (describes a verb)**
- "She runs **very quickly**." (quickly describes "runs" - a verb)
- Here, "very" (adverb) modifies the adverb "quickly", and together they describe a verb.

**❌ WRONG:** "She runs very quick."
- This is grammatically incorrect! "Quick" is an adjective and cannot describe a verb.
- ✅ **CORRECT:** "She runs very quickly." (Adverb describes verb)

**The Rule:**
- **"very" + adjective** → describes a noun (e.g., "a very quick person")
- **"very" + adverb** → describes a verb (e.g., "runs very quickly")

**Why is this so?**
- **Adjectives** modify nouns: "quick runner" (quick → runner)
- **Adverbs** modify verbs: "runs quickly" (quickly → runs)
- **"very"** is an adverb that intensifies other adjectives OR adverbs:
  - "very quick" = very fast (as a quality/characteristic)
  - "very quickly" = very fast (as a manner of action)

**Examples to clarify:**
- ✅ "She is **very quick**." (Adjective - what she is)
- ✅ "She runs **very quickly**." (Adverb - how she runs)
- ✅ "He is a **very quick** learner." (Adjective - describes "learner")
- ✅ "He learns **very quickly**." (Adverb - describes "learns")
- ❌ "She runs very quick." (WRONG - adjective cannot describe verb)

### 5. Common Mistakes ❌

1. **Using adjective instead of adverb**
   - ❌ "She runs **quick**." → ✅ "She runs **quickly**."

2. **Using adverb instead of adjective**
   - ❌ "She is **quickly**." → ✅ "She is **quick**."

3. **Confusing good and well**
   - ❌ "He speaks **good**." → ✅ "He speaks **well**."
   - ❌ "The food is **well**." → ✅ "The food is **good**."

<GamePlaceholder id="grammarSmash" />

### 6. Practice Makes Perfect! 🎓

**Remember:**
- **Adjective** = describes **nouns** (what something is)
- **Adverb** = describes **verbs** (how something is done)
- **Most adverbs** = adjective + **-ly**

**Try these:**
- "She is **quick**." (adjective - what she is)
- "She runs **quickly**." (adverb - how she runs)
- "He is **good**." (adjective - what he is)
- "He speaks **well**." (adverb - how he speaks)

**Master this, and you'll use adjectives and adverbs correctly!**
`,
    de: `
## Adjektive vs. Adverbien: Der Große Unterschied! 📝

**Adjektive** beschreiben **Nomen** (Dinge, Personen). **Adverbien** beschreiben **Verben** (Handlungen) oder **andere Adjektive/Adverbien**. Diesen Unterschied zu verstehen ist entscheidend!

### 1. Adjektive: Nomen Beschreiben 📦

**Adjektive** beschreiben **was etwas ist** oder **wie jemand ist**.

**Muster:** Adjektiv + Nomen ODER be + Adjektiv

**Beispiele:**
- "a **quick** runner" (quick beschreibt runner - Nomen)
- "She is **quick**." (quick beschreibt she - was sie ist)
- "a **good** student" (good beschreibt student - Nomen)
- "The food is **good**." (good beschreibt food - was es ist)

**Wichtiger Punkt:** Adjektive antworten: **Wie ist es?** oder **Wie ist er/sie/es?**

<GamePlaceholder id="sentenceBuilder" />

### 2. Adverbien: Verben Beschreiben 🏃

**Adverbien** beschreiben **wie etwas gemacht wird** oder **wie eine Handlung passiert**.

**Muster:** Verb + Adverb

**Die meisten Adverbien enden auf -ly:**
- quick → **quickly**
- slow → **slowly**
- careful → **carefully**
- beautiful → **beautifully**

**Beispiele:**
- "She runs **quickly**." (quickly beschreibt wie sie läuft - Verb)
- "He speaks **slowly**." (slowly beschreibt wie er spricht - Verb)
- "Drive **carefully**!" (carefully beschreibt wie man fährt - Verb)

**Wichtiger Punkt:** Adverbien antworten: **Wie wird es gemacht?**

### 3. Der Besondere Fall: Good vs. Well ⭐

**Good** ist ein **Adjektiv** (beschreibt Nomen).
**Well** ist ein **Adverb** (beschreibt Verben).

**Beispiele:**
- "She is **good**." (good = Adjektiv, beschreibt she)
- "She speaks **well**." (well = Adverb, beschreibt wie sie spricht)
- "The food is **good**." (good = Adjektiv, beschreibt food)
- "He cooks **well**." (well = Adverb, beschreibt wie er kocht)

**Wichtig:** Sage niemals "speaks good" - es ist "speaks **well**"!

<GamePlaceholder id="fixTheMistake" />

### 4. Häufige Muster 📋

**Adjektivmuster:**
- **be + Adjektiv**: "I am **happy**."
- **Adjektiv + Nomen**: "a **happy** person"
- **look/feel/seem + Adjektiv**: "You look **tired**."

**Adverbmuster:**
- **Verb + Adverb**: "She runs **quickly**."
- **Adverb + Adjektiv**: "very **quick**" (very ist Adverb)
- **Adverb + Adverb**: "very **quickly**"

### 4.1. Wichtige Klarstellung: "very quick" vs. "very quickly" 🤔

**Eine häufige Verwirrung:** Warum ist "quick" in "very quick" ein Adjektiv, obwohl es sich auf ein Verb beziehen könnte?

**Die Antwort liegt in der Funktion der Wörter:**

**1. "very quick" = Adjektiv (beschreibt ein Nomen)**
- "She is a **very quick** runner." (quick beschreibt "runner" - ein Nomen)
- "He is **very quick**." (quick beschreibt "he" - was er ist)
- Hier modifiziert "very" (Adverb) das Adjektiv "quick", und zusammen beschreiben sie ein Nomen.

**2. "very quickly" = Adverb (beschreibt ein Verb)**
- "She runs **very quickly**." (quickly beschreibt "runs" - ein Verb)
- Hier modifiziert "very" (Adverb) das Adverb "quickly", und zusammen beschreiben sie ein Verb.

**❌ FALSCH:** "She runs very quick."
- Das ist grammatikalisch falsch! "Quick" ist ein Adjektiv und kann kein Verb beschreiben.
- ✅ **RICHTIG:** "She runs very quickly." (Adverb beschreibt Verb)

**Die Regel:**
- **"very" + Adjektiv** → beschreibt ein Nomen (z.B. "a very quick person")
- **"very" + Adverb** → beschreibt ein Verb (z.B. "runs very quickly")

**Warum ist das so?**
- **Adjektive** modifizieren Nomen: "quick runner" (quick → runner)
- **Adverbien** modifizieren Verben: "runs quickly" (quickly → runs)
- **"very"** ist ein Adverb, das andere Adjektive ODER Adverbien verstärkt:
  - "very quick" = sehr schnell (als Eigenschaft)
  - "very quickly" = sehr schnell (als Art der Handlung)

**Beispiele zur Verdeutlichung:**
- ✅ "She is **very quick**." (Adjektiv - was sie ist)
- ✅ "She runs **very quickly**." (Adverb - wie sie läuft)
- ✅ "He is a **very quick** learner." (Adjektiv - beschreibt "learner")
- ✅ "He learns **very quickly**." (Adverb - beschreibt "learns")
- ❌ "She runs very quick." (FALSCH - Adjektiv kann Verb nicht beschreiben)

### 5. Häufige Fehler ❌

1. **Adjektiv statt Adverb verwenden**
   - ❌ "She runs **quick**." → ✅ "She runs **quickly**."

2. **Adverb statt Adjektiv verwenden**
   - ❌ "She is **quickly**." → ✅ "She is **quick**."

3. **Good und Well verwechseln**
   - ❌ "He speaks **good**." → ✅ "He speaks **well**."
   - ❌ "The food is **well**." → ✅ "The food is **good**."

<GamePlaceholder id="grammarSmash" />

### 6. Übung macht den Meister! 🎓

**Denk daran:**
- **Adjektiv** = beschreibt **Nomen** (was etwas ist)
- **Adverb** = beschreibt **Verben** (wie etwas gemacht wird)
- **Die meisten Adverbien** = Adjektiv + **-ly**

**Versuche diese:**
- "She is **quick**." (Adjektiv - was sie ist)
- "She runs **quickly**." (Adverb - wie sie läuft)
- "He is **good**." (Adjektiv - was er ist)
- "He speaks **well**." (Adverb - wie er spricht)

**Meistere das, und du wirst Adjektive und Adverbien korrekt verwenden!**
`
  },
  task: {
    de: {
      title: 'Adjektive und Adverbien üben',
      description: 'Schreibe 4 Sätze: zwei mit Adjektiven und zwei mit Adverbien.',
      checklist: [
        { text: 'Satz 1 mit Adjektiv', checked: false },
        { text: 'Satz 2 mit Adjektiv', checked: false },
        { text: 'Satz 1 mit Adverb', checked: false },
        { text: 'Satz 2 mit Adverb', checked: false }
      ]
    },
    en: {
      title: 'Practicing Adjectives and Adverbs',
      description: 'Write 4 sentences: two with adjectives and two with adverbs.',
      checklist: [
        { text: 'Sentence 1 with adjective', checked: false },
        { text: 'Sentence 2 with adjective', checked: false },
        { text: 'Sentence 1 with adverb', checked: false },
        { text: 'Sentence 2 with adverb', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

