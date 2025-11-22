import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "___ is your name?", de: "___ ist dein Name?" },
    words: ["What", "is", "your", "name"],
    correct: "What is your name",
    explanation: { en: "What = Was (for things/information)", de: "What = Was (für Dinge/Informationen)" }
  },
  {
    prompt: { en: "___ are you from?", de: "___ kommst du her?" },
    words: ["Where", "are", "you", "from"],
    correct: "Where are you from",
    explanation: { en: "Where = Wo (for places)", de: "Where = Wo (für Orte)" }
  },
  {
    prompt: { en: "___ is that man?", de: "___ ist dieser Mann?" },
    words: ["Who", "is", "that", "man"],
    correct: "Who is that man",
    explanation: { en: "Who = Wer (for people)", de: "Who = Wer (für Personen)" }
  },
  {
    prompt: { en: "___ do you go to school?", de: "___ gehst du zur Schule?" },
    words: ["When", "do", "you", "go", "to", "school"],
    correct: "When do you go to school",
    explanation: { en: "When = Wann (for time)", de: "When = Wann (für Zeit)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "Where you are from?",
    mistakeIndex: 1,
    correction: "are you",
    explanation: { en: "Question word order: Question word + auxiliary + subject + verb", de: "Fragewortstellung: Fragewort + Hilfsverb + Subjekt + Verb" }
  },
  {
    sentence: "What your name is?",
    mistakeIndex: 1,
    correction: "is your",
    explanation: { en: "With 'be', invert subject and verb: What + is + your name?", de: "Mit 'be', Subjekt und Verb vertauschen: What + is + your name?" }
  },
  {
    sentence: "When you go?",
    mistakeIndex: 1,
    correction: "do you",
    explanation: { en: "With other verbs, use 'do': When + do + you + go?", de: "Mit anderen Verben, verwende 'do': When + do + you + go?" }
  }
];

const grammarMoleData = [
  {
    prompt: "___ is your favorite color?",
    options: ["What", "Where", "Who"],
    correct: "What",
    explanation: "What = asking about things/information"
  },
  {
    prompt: "___ do you live?",
    options: ["Where", "What", "When"],
    correct: "Where",
    explanation: "Where = asking about places"
  },
  {
    prompt: "___ is your teacher?",
    options: ["Who", "What", "Where"],
    correct: "Who",
    explanation: "Who = asking about people"
  },
  {
    prompt: "___ do you wake up?",
    options: ["When", "Where", "What"],
    correct: "When",
    explanation: "When = asking about time"
  }
];

const verbPilotData = [
  {
    prompt: "Catch the Question Words!",
    targets: ["What", "Where", "Who", "When", "Why", "How"],
    distractors: ["is", "are", "do", "does", "can", "will"],
    correct: "What"
  }
];

export const questions1 = {
  id: 'a1_g49',
  title: {
    en: 'Questions 1: Question Words (What, Where, Who, When, Why, How)',
    de: 'Fragen 1: Fragewörter (What, Where, Who, When, Why, How)'
  },
  description: {
    en: "Asking questions with question words: What, Where, Who, When, Why, How.",
    de: "Fragen mit Fragewörtern stellen: What, Where, Who, When, Why, How."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarMole: <GrammarGame type="grammarMole" data={grammarMoleData} />,
    verbPilot: <GrammarGame type="verbPilot" data={verbPilotData} />
  },

  content: {
    en: `
## Question Words: The 5 W's and How! ❓

In English, we use **question words** (also called "WH-words") to ask for specific information. These words help us get detailed answers instead of just "yes" or "no".

Think about it: When you want to know someone's name, you ask "**What** is your name?" When you want to know where they're from, you ask "**Where** are you from?" These question words are essential for real conversations!

### 1. What are Question Words? 🤔

Question words are special words that start questions and ask for specific information:
- **What** = Was (things, information)
- **Where** = Wo (places, location)
- **Who** = Wer (people)
- **When** = Wann (time)
- **Why** = Warum (reason)
- **How** = Wie (manner, way)

**Important:** Question words always come **at the beginning** of the question!

### 2. "What" - Asking About Things and Information 📦

**What** is used to ask about things, objects, or information.

**Examples:**
- "**What** is your name?" (Asking for name)
- "**What** is this?" (Asking about an object)
- "**What** do you like?" (Asking about preferences)
- "**What** time is it?" (Asking for time)
- "**What** color is your car?" (Asking about color)

**Common Patterns:**
- What + is/are + ...? (With "be")
- What + do/does + subject + verb? (With other verbs)

<GamePlaceholder id="sentenceBuilder" />

### 3. "Where" - Asking About Places 📍

**Where** is used to ask about location or place.

**Examples:**
- "**Where** are you from?" (Asking about origin)
- "**Where** do you live?" (Asking about residence)
- "**Where** is the bathroom?" (Asking for location)
- "**Where** are you going?" (Asking about destination)
- "**Where** did you go?" (Asking about past location)

**Common Patterns:**
- Where + is/are + ...? (With "be")
- Where + do/does + subject + verb? (With other verbs)

### 4. "Who" - Asking About People 👤

**Who** is used to ask about people.

**Examples:**
- "**Who** is that?" (Asking about a person)
- "**Who** is your teacher?" (Asking about a person)
- "**Who** do you know?" (Asking about people you know)
- "**Who** called you?" (Asking about the caller)

**Important:** "Who" can be the subject or object:
- "**Who** is calling?" (Who = subject)
- "**Who** did you call?" (Who = object)

### 5. "When" - Asking About Time ⏰

**When** is used to ask about time or when something happens.

**Examples:**
- "**When** is your birthday?" (Asking about date)
- "**When** do you wake up?" (Asking about time)
- "**When** did you arrive?" (Asking about past time)
- "**When** will you come?" (Asking about future time)

**Common Answers:**
- "At 7 o'clock"
- "On Monday"
- "In the morning"
- "Yesterday"

<GamePlaceholder id="fixTheMistake" />

### 6. "Why" - Asking About Reasons 🤷

**Why** is used to ask about reasons or causes.

**Examples:**
- "**Why** are you late?" (Asking for reason)
- "**Why** do you like pizza?" (Asking for reason)
- "**Why** did you leave?" (Asking for reason)
- "**Why** is it cold?" (Asking for cause)

**Common Answers:**
- "Because..."
- "So that..."
- "Due to..."

### 7. "How" - Asking About Manner or Way 🔧

**How** is used to ask about the way something is done, manner, or condition.

**Examples:**
- "**How** are you?" (Asking about condition/state)
- "**How** do you go to school?" (Asking about method)
- "**How** old are you?" (Asking about age)
- "**How** much does it cost?" (Asking about quantity/price)
- "**How** many people?" (Asking about number)

**Special Uses:**
- **How much** = Wie viel (uncountable)
- **How many** = Wie viele (countable)
- **How old** = Wie alt
- **How often** = Wie oft

<GamePlaceholder id="grammarMole" />

### 8. Word Order in Questions 📝

**Important Rule:** Question words come first, then the word order changes!

#### With "be" (am, is, are, was, were):
**Structure:** Question word + be + subject + ...?

- "**What is** your name?" (Not "What your name is?")
- "**Where are** you from?" (Not "Where you are from?")
- "**Who is** that?" (Not "Who that is?")

#### With other verbs (need "do/does/did"):
**Structure:** Question word + do/does/did + subject + verb + ...?

- "**What do** you like?" (Not "What you like?")
- "**Where do** you live?" (Not "Where you live?")
- "**When did** you arrive?" (Not "When you arrived?")

**Key Point:** The subject comes **after** the auxiliary verb (be/do/does/did)!

<GamePlaceholder id="verbPilot" />

### 9. Common Mistakes ❌

1. **Wrong word order**
   - ❌ "Where you are from?" → ✅ "Where **are you** from?"

2. **Missing auxiliary verb**
   - ❌ "What you like?" → ✅ "What **do you** like?"

3. **Wrong question word**
   - ❌ "Who is your favorite color?" → ✅ "**What** is your favorite color?"

4. **Forgetting to invert**
   - ❌ "What your name is?" → ✅ "What **is your** name?"

### 10. Practice Makes Perfect! 🎓

Try asking questions using these question words:
- **What** is...? (For things/information)
- **Where** is/are...? (For places)
- **Who** is...? (For people)
- **When** do/does...? (For time)
- **Why** do/does...? (For reasons)
- **How** are/is...? (For manner/condition)

**Remember:** Question words are your key to getting detailed information! Master them, and you can ask about anything!
`,
    de: `
## Fragewörter: Die 5 W's und How! ❓

Im Englischen verwenden wir **Fragewörter** (auch "WH-Wörter" genannt), um nach spezifischen Informationen zu fragen. Diese Wörter helfen uns, detaillierte Antworten zu bekommen, anstatt nur "ja" oder "nein".

Denk daran: Wenn du den Namen von jemandem wissen willst, fragst du "**What** is your name?" Wenn du wissen willst, woher sie kommen, fragst du "**Where** are you from?" Diese Fragewörter sind essentiell für echte Gespräche!

### 1. Was sind Fragewörter? 🤔

Fragewörter sind spezielle Wörter, die Fragen beginnen und nach spezifischen Informationen fragen:
- **What** = Was (Dinge, Informationen)
- **Where** = Wo (Orte, Lage)
- **Who** = Wer (Personen)
- **When** = Wann (Zeit)
- **Why** = Warum (Grund)
- **How** = Wie (Art, Weise)

**Wichtig:** Fragewörter stehen immer **am Anfang** der Frage!

### 2. "What" - Nach Dingen und Informationen fragen 📦

**What** wird verwendet, um nach Dingen, Objekten oder Informationen zu fragen.

**Beispiele:**
- "**What** is your name?" (Nach dem Namen fragen)
- "**What** is this?" (Nach einem Objekt fragen)
- "**What** do you like?" (Nach Präferenzen fragen)
- "**What** time is it?" (Nach der Zeit fragen)
- "**What** color is your car?" (Nach der Farbe fragen)

**Häufige Muster:**
- What + is/are + ...? (Mit "be")
- What + do/does + Subjekt + Verb? (Mit anderen Verben)

<GamePlaceholder id="sentenceBuilder" />

### 3. "Where" - Nach Orten fragen 📍

**Where** wird verwendet, um nach dem Ort oder der Lage zu fragen.

**Beispiele:**
- "**Where** are you from?" (Nach der Herkunft fragen)
- "**Where** do you live?" (Nach dem Wohnort fragen)
- "**Where** is the bathroom?" (Nach dem Ort fragen)
- "**Where** are you going?" (Nach dem Ziel fragen)
- "**Where** did you go?" (Nach dem vergangenen Ort fragen)

**Häufige Muster:**
- Where + is/are + ...? (Mit "be")
- Where + do/does + Subjekt + Verb? (Mit anderen Verben)

### 4. "Who" - Nach Personen fragen 👤

**Who** wird verwendet, um nach Personen zu fragen.

**Beispiele:**
- "**Who** is that?" (Nach einer Person fragen)
- "**Who** is your teacher?" (Nach einer Person fragen)
- "**Who** do you know?" (Nach Personen fragen, die du kennst)
- "**Who** called you?" (Nach dem Anrufer fragen)

**Wichtig:** "Who" kann Subjekt oder Objekt sein:
- "**Who** is calling?" (Who = Subjekt)
- "**Who** did you call?" (Who = Objekt)

### 5. "When" - Nach Zeit fragen ⏰

**When** wird verwendet, um nach der Zeit oder wann etwas passiert zu fragen.

**Beispiele:**
- "**When** is your birthday?" (Nach dem Datum fragen)
- "**When** do you wake up?" (Nach der Zeit fragen)
- "**When** did you arrive?" (Nach der vergangenen Zeit fragen)
- "**When** will you come?" (Nach der zukünftigen Zeit fragen)

**Häufige Antworten:**
- "At 7 o'clock"
- "On Monday"
- "In the morning"
- "Yesterday"

<GamePlaceholder id="fixTheMistake" />

### 6. "Why" - Nach Gründen fragen 🤷

**Why** wird verwendet, um nach Gründen oder Ursachen zu fragen.

**Beispiele:**
- "**Why** are you late?" (Nach dem Grund fragen)
- "**Why** do you like pizza?" (Nach dem Grund fragen)
- "**Why** did you leave?" (Nach dem Grund fragen)
- "**Why** is it cold?" (Nach der Ursache fragen)

**Häufige Antworten:**
- "Because..."
- "So that..."
- "Due to..."

### 7. "How" - Nach Art oder Weise fragen 🔧

**How** wird verwendet, um nach der Art, wie etwas gemacht wird, oder nach dem Zustand zu fragen.

**Beispiele:**
- "**How** are you?" (Nach dem Zustand fragen)
- "**How** do you go to school?" (Nach der Methode fragen)
- "**How** old are you?" (Nach dem Alter fragen)
- "**How** much does it cost?" (Nach der Menge/Preis fragen)
- "**How** many people?" (Nach der Anzahl fragen)

**Besondere Verwendungen:**
- **How much** = Wie viel (nicht zählbar)
- **How many** = Wie viele (zählbar)
- **How old** = Wie alt
- **How often** = Wie oft

<GamePlaceholder id="grammarMole" />

### 8. Wortstellung in Fragen 📝

**Wichtige Regel:** Fragewörter stehen zuerst, dann ändert sich die Wortstellung!

#### Mit "be" (am, is, are, was, were):
**Struktur:** Fragewort + be + Subjekt + ...?

- "**What is** your name?" (Nicht "What your name is?")
- "**Where are** you from?" (Nicht "Where you are from?")
- "**Who is** that?" (Nicht "Who that is?")

#### Mit anderen Verben (brauchen "do/does/did"):
**Struktur:** Fragewort + do/does/did + Subjekt + Verb + ...?

- "**What do** you like?" (Nicht "What you like?")
- "**Where do** you live?" (Nicht "Where you live?")
- "**When did** you arrive?" (Nicht "When you arrived?")

**Wichtiger Punkt:** Das Subjekt kommt **nach** dem Hilfsverb (be/do/does/did)!

<GamePlaceholder id="verbPilot" />

### 9. Häufige Fehler ❌

1. **Falsche Wortstellung**
   - ❌ "Where you are from?" → ✅ "Where **are you** from?"

2. **Fehlendes Hilfsverb**
   - ❌ "What you like?" → ✅ "What **do you** like?"

3. **Falsches Fragewort**
   - ❌ "Who is your favorite color?" → ✅ "**What** is your favorite color?"

4. **Vergessen zu invertieren**
   - ❌ "What your name is?" → ✅ "What **is your** name?"

### 10. Übung macht den Meister! 🎓

Versuche, Fragen mit diesen Fragewörtern zu stellen:
- **What** is...? (Für Dinge/Informationen)
- **Where** is/are...? (Für Orte)
- **Who** is...? (Für Personen)
- **When** do/does...? (Für Zeit)
- **Why** do/does...? (Für Gründe)
- **How** are/is...? (Für Art/Zustand)

**Denk daran:** Fragewörter sind dein Schlüssel, um detaillierte Informationen zu bekommen! Meistere sie, und du kannst nach allem fragen!
`
  },
  task: {
    de: {
      title: 'Fragen mit Fragewörtern stellen',
      description: 'Stelle fünf Fragen mit verschiedenen Fragewörtern (What, Where, Who, When, Why, How).',
      checklist: [
        { text: 'What-Frage', checked: false },
        { text: 'Where-Frage', checked: false },
        { text: 'Who-Frage', checked: false },
        { text: 'When-Frage', checked: false },
        { text: 'Why- oder How-Frage', checked: false }
      ]
    },
    en: {
      title: 'Asking Questions with Question Words',
      description: 'Ask five questions using different question words (What, Where, Who, When, Why, How).',
      checklist: [
        { text: 'What question', checked: false },
        { text: 'Where question', checked: false },
        { text: 'Who question', checked: false },
        { text: 'When question', checked: false },
        { text: 'Why or How question', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

