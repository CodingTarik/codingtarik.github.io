import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ English every day.", de: "Ich ___ jeden Tag Englisch." },
    words: ["study", "English", "every", "day", "I"],
    correct: "I study English every day",
    explanation: { en: "Subject + Verb + Object + Time", de: "Subjekt + Verb + Objekt + Zeit" }
  },
  {
    prompt: { en: "She works ___ the morning.", de: "Sie arbeitet ___ Morgen." },
    words: ["in", "the", "morning", "at", "on"],
    correct: "in the morning",
    explanation: { en: "Time expressions: in the morning/afternoon/evening", de: "Zeitangaben: in the morning/afternoon/evening" }
  },
  {
    prompt: { en: "We go ___ school ___ Monday.", de: "Wir gehen ___ Schule ___ Montag." },
    words: ["to", "school", "on", "Monday", "We", "go"],
    correct: "We go to school on Monday",
    explanation: { en: "Place + Time: verb + place + time", de: "Ort + Zeit: Verb + Ort + Zeit" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I every day study English.",
    mistakeIndex: 1,
    correction: "study English every day",
    explanation: { en: "Word order: Subject + Verb + Object + Time (not Time + Verb)", de: "Wortstellung: Subjekt + Verb + Objekt + Zeit (nicht Zeit + Verb)" }
  },
  {
    sentence: "She goes to school in the morning always.",
    mistakeIndex: 4,
    correction: "always",
    explanation: { en: "Adverbs usually come before the main verb: always goes", de: "Adverbien kommen meist vor dem Hauptverb: always goes" }
  },
  {
    sentence: "We play football on Sunday in the park.",
    mistakeIndex: 3,
    correction: "in the park on Sunday",
    explanation: { en: "Place before time: verb + object + place + time", de: "Ort vor Zeit: Verb + Objekt + Ort + Zeit" }
  }
];

const grammarSmashData = [
  {
    prompt: "I ___ English ___ the morning.",
    options: ["study / in", "in / study", "study / at"],
    correct: "study / in",
    explanation: "Subject + Verb + Object + Time"
  },
  {
    prompt: "She goes ___ school ___ 8 o'clock.",
    options: ["to / at", "at / to", "to / in"],
    correct: "to / at",
    explanation: "Place + Time: to school at 8"
  },
  {
    prompt: "We play football ___ the park ___ Sunday.",
    options: ["in / on", "on / in", "at / on"],
    correct: "in / on",
    explanation: "Place before time"
  },
  {
    prompt: "They ___ home ___ the evening.",
    options: ["go / in", "in / go", "go / at"],
    correct: "go / in",
    explanation: "Verb + Place + Time"
  }
];

export const wordOrder1 = {
  id: 'a1_g109',
  title: {
    en: 'Word Order 1: Verb + Object; Place and Time',
    de: 'Wortstellung 1: Verb + Objekt; Ort und Zeit'
  },
  description: {
    en: "Understanding English sentence structure: Subject + Verb + Object + Place + Time.",
    de: "Die englische Satzstruktur verstehen: Subjekt + Verb + Objekt + Ort + Zeit."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarSmash: <GrammarGame type="grammarSmash" data={grammarSmashData} />
  },

  content: {
    en: `
## Word Order: The English Sentence Structure 📐

English has a very specific word order that must be followed. Unlike some languages, you can't just put words anywhere! Understanding word order is crucial for making correct sentences.

Think about it: "I study English every day" is correct, but "I every day study English" sounds wrong. Why? Because English has rules about where words go!

### 1. The Basic Sentence Structure 🏗️

The most common English sentence structure is:

**Subject + Verb + Object + Place + Time**

Let's break this down:

- **Subject** = Who or what does the action (I, you, he, she, it, we, they, or a noun)
- **Verb** = The action (study, go, eat, play, etc.)
- **Object** = What receives the action (English, football, pizza, etc.)
- **Place** = Where it happens (at school, in the park, at home, etc.)
- **Time** = When it happens (every day, in the morning, on Monday, etc.)

**Example:**
- "I study English at school every day."
  - Subject: I
  - Verb: study
  - Object: English
  - Place: at school
  - Time: every day

### 2. Verb + Object (The Core) 💪

The most important part is: **Verb + Object**

**Examples:**
- "I **study English**." (study + English)
- "She **plays football**." (plays + football)
- "We **eat pizza**." (eat + pizza)
- "They **watch TV**." (watch + TV)

**Important:** The object comes **directly after** the verb!

<GamePlaceholder id="sentenceBuilder" />

### 3. Place (Where?) 📍

Place expressions tell us **where** something happens.

**Common Place Expressions:**
- **at** + place: at school, at home, at work, at the park
- **in** + place: in the park, in the classroom, in the kitchen
- **on** + place: on the table, on the floor, on the bus

**Position:** Place usually comes **after** the object (if there is one) or **after** the verb.

**Examples:**
- "I study **at school**." (Verb + Place)
- "She plays football **in the park**." (Verb + Object + Place)
- "We eat **at home**." (Verb + Place)

### 4. Time (When?) ⏰

Time expressions tell us **when** something happens.

**Common Time Expressions:**
- **every** + period: every day, every week, every month
- **in** + part of day: in the morning, in the afternoon, in the evening
- **on** + day: on Monday, on Sunday, on weekends
- **at** + specific time: at 8 o'clock, at noon, at night

**Position:** Time usually comes **at the end** of the sentence, **after** place.

**Examples:**
- "I study English **every day**." (Verb + Object + Time)
- "She goes to school **in the morning**." (Verb + Place + Time)
- "We play football **on Sunday**." (Verb + Object + Time)

<GamePlaceholder id="fixTheMistake" />

### 5. The Complete Pattern: Place + Time 🎯

When you have both place and time, the order is:

**Subject + Verb + Object + Place + Time**

**Examples:**
- "I study English **at school** **every day**." (Place + Time)
- "She plays football **in the park** **on Sunday**." (Place + Time)
- "We eat lunch **at home** **in the afternoon**." (Place + Time)

**Important Rule:** **Place comes before Time!**

- ✅ "I go to school **in the morning**." (Place + Time)
- ❌ "I go **in the morning** to school." (Wrong order!)

### 6. Common Patterns 📋

#### Pattern 1: Subject + Verb + Object
- "I **study English**."
- "She **plays football**."

#### Pattern 2: Subject + Verb + Place
- "I go **to school**."
- "She works **at home**."

#### Pattern 3: Subject + Verb + Object + Time
- "I study English **every day**."
- "She plays football **on Sunday**."

#### Pattern 4: Subject + Verb + Place + Time
- "I go **to school** **in the morning**."
- "She works **at home** **every day**."

#### Pattern 5: Subject + Verb + Object + Place + Time
- "I study English **at school** **every day**."
- "She plays football **in the park** **on Sunday**."

<GamePlaceholder id="grammarSmash" />

### 7. Adverbs of Frequency (always, usually, often, etc.) 🔄

Adverbs of frequency (always, usually, often, sometimes, never) have special positions:

**Position:** Usually **before** the main verb, but **after** "be"

**Examples:**
- "I **always** study English." (Before verb)
- "She **usually** goes to school." (Before verb)
- "I **am always** happy." (After "be")
- "They **are never** late." (After "be")

**With other verbs:**
- "I **always** eat breakfast." ✅
- "I eat breakfast **always**." ❌ (Less natural)

### 8. Common Mistakes ❌

1. **Wrong order: Time before Verb**
   - ❌ "I every day study." → ✅ "I study **every day**."

2. **Wrong order: Time before Place**
   - ❌ "I go in the morning to school." → ✅ "I go **to school** **in the morning**."

3. **Time in the middle**
   - ❌ "I study every day English." → ✅ "I study English **every day**."

4. **Place before Object**
   - ❌ "I go to school English." → ✅ "I study English **at school**."

### 9. Practice Makes Perfect! 🎓

Try building sentences following this order:
1. Subject (I, you, he, she, etc.)
2. Verb (study, go, play, etc.)
3. Object (English, football, etc.) - if needed
4. Place (at school, in the park, etc.) - if needed
5. Time (every day, in the morning, etc.) - if needed

**Remember:** English word order is like building blocks. Put them in the right order, and your sentences will be correct!
`,
    de: `
## Wortstellung: Die englische Satzstruktur 📐

Das Englische hat eine sehr spezifische Wortstellung, die befolgt werden muss. Im Gegensatz zu einigen Sprachen kannst du die Wörter nicht einfach irgendwo hinsetzen! Die Wortstellung zu verstehen ist entscheidend, um korrekte Sätze zu bilden.

Denk daran: "I study English every day" ist richtig, aber "I every day study English" klingt falsch. Warum? Weil das Englische Regeln darüber hat, wo Wörter stehen!

### 1. Die Grundlegende Satzstruktur 🏗️

Die häufigste englische Satzstruktur ist:

**Subjekt + Verb + Objekt + Ort + Zeit**

Lass uns das aufschlüsseln:

- **Subjekt** = Wer oder was die Handlung ausführt (I, you, he, she, it, we, they oder ein Nomen)
- **Verb** = Die Handlung (study, go, eat, play, etc.)
- **Objekt** = Was die Handlung empfängt (English, football, pizza, etc.)
- **Ort** = Wo es passiert (at school, in the park, at home, etc.)
- **Zeit** = Wann es passiert (every day, in the morning, on Monday, etc.)

**Beispiel:**
- "I study English at school every day."
  - Subjekt: I
  - Verb: study
  - Objekt: English
  - Ort: at school
  - Zeit: every day

### 2. Verb + Objekt (Der Kern) 💪

Der wichtigste Teil ist: **Verb + Objekt**

**Beispiele:**
- "I **study English**." (study + English)
- "She **plays football**." (plays + football)
- "We **eat pizza**." (eat + pizza)
- "They **watch TV**." (watch + TV)

**Wichtig:** Das Objekt kommt **direkt nach** dem Verb!

<GamePlaceholder id="sentenceBuilder" />

### 3. Ort (Wo?) 📍

Ortsangaben sagen uns, **wo** etwas passiert.

**Häufige Ortsangaben:**
- **at** + Ort: at school, at home, at work, at the park
- **in** + Ort: in the park, in the classroom, in the kitchen
- **on** + Ort: on the table, on the floor, on the bus

**Position:** Ort kommt normalerweise **nach** dem Objekt (wenn vorhanden) oder **nach** dem Verb.

**Beispiele:**
- "I study **at school**." (Verb + Ort)
- "She plays football **in the park**." (Verb + Objekt + Ort)
- "We eat **at home**." (Verb + Ort)

### 4. Zeit (Wann?) ⏰

Zeitangaben sagen uns, **wann** etwas passiert.

**Häufige Zeitangaben:**
- **every** + Zeitraum: every day, every week, every month
- **in** + Tageszeit: in the morning, in the afternoon, in the evening
- **on** + Tag: on Monday, on Sunday, on weekends
- **at** + spezifische Zeit: at 8 o'clock, at noon, at night

**Position:** Zeit kommt normalerweise **am Ende** des Satzes, **nach** dem Ort.

**Beispiele:**
- "I study English **every day**." (Verb + Objekt + Zeit)
- "She goes to school **in the morning**." (Verb + Ort + Zeit)
- "We play football **on Sunday**." (Verb + Objekt + Zeit)

<GamePlaceholder id="fixTheMistake" />

### 5. Das Vollständige Muster: Ort + Zeit 🎯

Wenn du sowohl Ort als auch Zeit hast, ist die Reihenfolge:

**Subjekt + Verb + Objekt + Ort + Zeit**

**Beispiele:**
- "I study English **at school** **every day**." (Ort + Zeit)
- "She plays football **in the park** **on Sunday**." (Ort + Zeit)
- "We eat lunch **at home** **in the afternoon**." (Ort + Zeit)

**Wichtige Regel:** **Ort kommt vor Zeit!**

- ✅ "I go to school **in the morning**." (Ort + Zeit)
- ❌ "I go **in the morning** to school." (Falsche Reihenfolge!)

### 6. Häufige Muster 📋

#### Muster 1: Subjekt + Verb + Objekt
- "I **study English**."
- "She **plays football**."

#### Muster 2: Subjekt + Verb + Ort
- "I go **to school**."
- "She works **at home**."

#### Muster 3: Subjekt + Verb + Objekt + Zeit
- "I study English **every day**."
- "She plays football **on Sunday**."

#### Muster 4: Subjekt + Verb + Ort + Zeit
- "I go **to school** **in the morning**."
- "She works **at home** **every day**."

#### Muster 5: Subjekt + Verb + Objekt + Ort + Zeit
- "I study English **at school** **every day**."
- "She plays football **in the park** **on Sunday**."

<GamePlaceholder id="grammarSmash" />

### 7. Häufigkeitsadverbien (always, usually, often, etc.) 🔄

Häufigkeitsadverbien (always, usually, often, sometimes, never) haben spezielle Positionen:

**Position:** Normalerweise **vor** dem Hauptverb, aber **nach** "be"

**Beispiele:**
- "I **always** study English." (Vor Verb)
- "She **usually** goes to school." (Vor Verb)
- "I **am always** happy." (Nach "be")
- "They **are never** late." (Nach "be")

**Mit anderen Verben:**
- "I **always** eat breakfast." ✅
- "I eat breakfast **always**." ❌ (Weniger natürlich)

### 8. Häufige Fehler ❌

1. **Falsche Reihenfolge: Zeit vor Verb**
   - ❌ "I every day study." → ✅ "I study **every day**."

2. **Falsche Reihenfolge: Zeit vor Ort**
   - ❌ "I go in the morning to school." → ✅ "I go **to school** **in the morning**."

3. **Zeit in der Mitte**
   - ❌ "I study every day English." → ✅ "I study English **every day**."

4. **Ort vor Objekt**
   - ❌ "I go to school English." → ✅ "I study English **at school**."

### 9. Übung macht den Meister! 🎓

Versuche, Sätze zu bilden, die dieser Reihenfolge folgen:
1. Subjekt (I, you, he, she, etc.)
2. Verb (study, go, play, etc.)
3. Objekt (English, football, etc.) - wenn nötig
4. Ort (at school, in the park, etc.) - wenn nötig
5. Zeit (every day, in the morning, etc.) - wenn nötig

**Denk daran:** Die englische Wortstellung ist wie Bauklötze. Setze sie in die richtige Reihenfolge, und deine Sätze werden korrekt sein!
`
  },
  task: {
    de: {
      title: 'Sätze mit korrekter Wortstellung bilden',
      description: 'Schreibe drei Sätze mit Verb + Objekt + Ort + Zeit in der richtigen Reihenfolge.',
      checklist: [
        { text: 'Satz 1: Subjekt + Verb + Objekt + Ort + Zeit', checked: false },
        { text: 'Satz 2: Subjekt + Verb + Objekt + Ort + Zeit', checked: false },
        { text: 'Satz 3: Subjekt + Verb + Objekt + Ort + Zeit', checked: false }
      ]
    },
    en: {
      title: 'Building Sentences with Correct Word Order',
      description: 'Write three sentences with Verb + Object + Place + Time in the correct order.',
      checklist: [
        { text: 'Sentence 1: Subject + Verb + Object + Place + Time', checked: false },
        { text: 'Sentence 2: Subject + Verb + Object + Place + Time', checked: false },
        { text: 'Sentence 3: Subject + Verb + Object + Place + Time', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

