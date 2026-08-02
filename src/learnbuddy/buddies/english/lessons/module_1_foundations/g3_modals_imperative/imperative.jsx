import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "___ down!", de: "___ dich hin!" },
    words: ["Sit", "down", "Stand", "up"],
    correct: "Sit down",
    explanation: { en: "Imperative: Verb + (object/adverb)", de: "Imperativ: Verb + (Objekt/Adverb)" }
  },
  {
    prompt: { en: "___ talk!", de: "___ nicht reden!" },
    words: ["Don't", "talk", "Do", "not"],
    correct: "Don't talk",
    explanation: { en: "Negative imperative: Don't + verb", de: "Negativer Imperativ: Don't + Verb" }
  },
  {
    prompt: { en: "___ careful!", de: "___ vorsichtig!" },
    words: ["Be", "careful", "Do", "be"],
    correct: "Be careful",
    explanation: { en: "Imperative with 'be': Be + adjective", de: "Imperativ mit 'be': Be + Adjektiv" }
  },
  {
    prompt: { en: "___ the door, please.", de: "___ bitte die Tür." },
    words: ["Close", "the", "door", "please"],
    correct: "Close the door please",
    explanation: { en: "Polite imperative: Verb + object + please", de: "Höflicher Imperativ: Verb + Objekt + please" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "You sit down!",
    mistakeIndex: 0,
    correction: "Sit",
    explanation: { en: "Imperative doesn't use 'you'. Just the verb!", de: "Imperativ verwendet kein 'you'. Nur das Verb!" }
  },
  {
    sentence: "Not talk!",
    mistakeIndex: 0,
    correction: "Don't",
    explanation: { en: "Negative imperative: Don't + verb (not just 'not')", de: "Negativer Imperativ: Don't + Verb (nicht nur 'not')" }
  },
  {
    sentence: "You be quiet!",
    mistakeIndex: 0,
    correction: "Be",
    explanation: { en: "No 'you' in imperative. Just 'Be quiet!'", de: "Kein 'you' im Imperativ. Nur 'Be quiet!'" }
  }
];

const grammarSmashData = [
  {
    prompt: "___ quiet, please!",
    options: ["Be", "You be", "Are"],
    correct: "Be",
    explanation: "Imperative: Be + adjective"
  },
  {
    prompt: "___ run in the hallway!",
    options: ["Don't", "Not", "No"],
    correct: "Don't",
    explanation: "Negative imperative"
  },
  {
    prompt: "___ your homework!",
    options: ["Do", "You do", "Does"],
    correct: "Do",
    explanation: "Imperative: Verb + object"
  },
  {
    prompt: "___ careful with that glass!",
    options: ["Be", "You be", "Are"],
    correct: "Be",
    explanation: "Imperative with 'be'"
  }
];

export const imperative = {
  id: 'a1_imperative',
  title: {
    en: 'The Imperative: Commands and Instructions',
    de: 'Der Imperativ: Befehle und Anweisungen'
  },
  description: {
    en: "Giving commands: 'Sit down!' 'Don't talk!' 'Be careful!'",
    de: "Befehle geben: 'Sit down!' 'Don't talk!' 'Be careful!'"
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarSmash: <GrammarGame type="grammarSmash" data={grammarSmashData} />
  },

  content: {
    en: `
## The Imperative: Giving Commands and Instructions 📢

The **imperative** is used to give commands, instructions, warnings, or advice. It's the form we use when we tell someone what to do (or what not to do).

Think about it: When a teacher says "Sit down!" or a sign says "Don't smoke!", that\'s the imperative!

### 1. What is the Imperative? 🤔

The imperative is the **base form** of the verb (the infinitive without "to"). It's used to:
- Give commands: "**Stop**!"
- Give instructions: "**Turn** left, then **go** straight."
- Give warnings: "**Be** careful!"
- Give advice: "**Eat** more vegetables."

**Key Point:** The imperative is **direct** and **simple**. It doesn't need a subject (no "you")!

### 2. Positive Imperative (Do This!) ✅

**Structure:** Verb + (object/adverb)

**Examples:**
- "**Sit** down!" (Sit + adverb)
- "**Close** the door!" (Close + object)
- "**Listen** carefully!" (Listen + adverb)
- "**Be** quiet!" (Be + adjective)
- "**Come** here!" (Come + adverb)

**Important:** 
- No subject needed! We don\'t say "You sit down!" (though it\'s understood that we\'re talking to "you")
- Start with the verb directly!

<GamePlaceholder id="sentenceBuilder" />

### 3. Negative Imperative (Don't Do This!) ❌

**Structure:** Don't + verb + (object/adverb)

**Examples:**
- "**Don't** talk!" (Don't + verb)
- "**Don't** run!" (Don't + verb)
- "**Don't** be late!" (Don't + be + adjective)
- "**Don't** forget your keys!" (Don't + verb + object)

**Important:**
- Always use **Don't** (not "Not" or "No")
- **Don't** = Do not (short form)

### 4. Polite Imperative (Please) 🎩

To make the imperative more polite, add **please**:
- At the beginning: "**Please** sit down."
- At the end: "Sit down, **please**."

**Examples:**
- "**Please** close the window."
- "Close the window, **please**."
- "**Please** don\'t smoke here."
- "Don't smoke here, **please**."

**Note:** "Please" makes commands much more polite and friendly!

<GamePlaceholder id="fixTheMistake" />

### 5. Common Uses of the Imperative 🎯

#### A) Instructions (How to Do Something) 📖

- "**Mix** the ingredients together."
- "**Press** the red button."
- "**Turn** left at the corner."

#### B) Warnings (Be Careful!) ⚠️

- "**Be** careful!"
- "**Watch** out!"
- "**Don't** touch that!"

#### C) Advice (Suggestions) 💡

- "**Eat** more fruit."
- "**Get** enough sleep."
- "**Don't** worry."

#### D) Commands (Direct Orders) 📢

- "**Stop**!"
- "**Go** away!"
- "**Don't** move!"

#### E) Invitations (Come Join!) 🎉

- "**Come** in!"
- "**Have** a seat!"
- "**Help** yourself!"

<GamePlaceholder id="grammarSmash" />

### 6. Special Cases: "Be" and "Let's" ⭐

#### Using "Be" in Imperatives

"Be" is special because it\'s used with adjectives:
- "**Be** careful!" (not "Careful!")
- "**Be** quiet!" (not "Quiet!")
- "**Be** patient!" (not "Patient!")

#### Using "Let's" (Let Us)

"Let's" is used for suggestions when you include yourself:
- "**Let's** go!" (Let us go = We should go)
- "**Let's** eat!" (Let us eat = We should eat)
- "**Let's** not argue." (Let us not argue = We shouldn\'t argue)

### 7. Common Mistakes ❌

1. **Don't add "you"**
   - ❌ "You sit down!" → ✅ "Sit down!"

2. **Don't use "not" alone**
   - ❌ "Not talk!" → ✅ "Don't talk!"

3. **Don't forget "be" with adjectives**
   - ❌ "Quiet!" → ✅ "Be quiet!"

4. **Don't use "to"**
   - ❌ "To sit down!" → ✅ "Sit down!"

### 8. Real-World Examples 🌍

#### In the Classroom 🏫
- "**Open** your books!"
- "**Don't** talk during the test!"
- "**Listen** carefully!"

#### In the Kitchen 🍳
- "**Add** salt and pepper."
- "**Don't** burn the food!"
- "**Be** careful with the knife!"

#### On Signs 🚦
- "**Stop**" (Stop sign)
- "**Don't** smoke" (No smoking sign)
- "**Keep** off the grass" (Park sign)

#### In Daily Life 💬
- "**Come** here!"
- "**Don't** forget!"
- "**Be** on time!"

### 9. Practice Makes Perfect! 🎓

Try using imperatives in your daily English:
- Give instructions: "Turn left..."
- Give warnings: "Be careful..."
- Give advice: "Eat well..."

**Remember:** The imperative is direct and powerful. Use it when you need to tell someone what to do clearly and simply!
`,
    de: `
## Der Imperativ: Befehle und Anweisungen geben 📢

Der **Imperativ** wird verwendet, um Befehle, Anweisungen, Warnungen oder Ratschläge zu geben. Es ist die Form, die wir verwenden, wenn wir jemandem sagen, was er tun soll (oder was nicht).

Denk daran: Wenn ein Lehrer sagt "Sit down!" oder ein Schild sagt "Don't smoke!", das ist der Imperativ!

### 1. Was ist der Imperativ? 🤔

Der Imperativ ist die **Grundform** des Verbs (der Infinitiv ohne "to"). Er wird verwendet, um:
- Befehle zu geben: "**Stop**!"
- Anweisungen zu geben: "**Turn** left, then **go** straight."
- Warnungen zu geben: "**Be** careful!"
- Ratschläge zu geben: "**Eat** more vegetables."

**Wichtiger Punkt:** Der Imperativ ist **direkt** und **einfach**. Er braucht kein Subjekt (kein "you")!

### 2. Positiver Imperativ (Tu das!) ✅

**Struktur:** Verb + (Objekt/Adverb)

**Beispiele:**
- "**Sit** down!" (Sit + Adverb)
- "**Close** the door!" (Close + Objekt)
- "**Listen** carefully!" (Listen + Adverb)
- "**Be** quiet!" (Be + Adjektiv)
- "**Come** here!" (Come + Adverb)

**Wichtig:**
- Kein Subjekt nötig! Wir sagen nicht "You sit down!" (obwohl verstanden wird, dass wir zu "you" sprechen)
- Beginne direkt mit dem Verb!

<GamePlaceholder id="sentenceBuilder" />

### 3. Negativer Imperativ (Tu das nicht!) ❌

**Struktur:** Don't + Verb + (Objekt/Adverb)

**Beispiele:**
- "**Don't** talk!" (Don't + Verb)
- "**Don't** run!" (Don't + Verb)
- "**Don't** be late!" (Don't + be + Adjektiv)
- "**Don't** forget your keys!" (Don't + Verb + Objekt)

**Wichtig:**
- Verwende immer **Don't** (nicht "Not" oder "No")
- **Don't** = Do not (Kurzform)

### 4. Höflicher Imperativ (Please) 🎩

Um den Imperativ höflicher zu machen, füge **please** hinzu:
- Am Anfang: "**Please** sit down."
- Am Ende: "Sit down, **please**."

**Beispiele:**
- "**Please** close the window."
- "Close the window, **please**."
- "**Please** don\'t smoke here."
- "Don't smoke here, **please**."

**Hinweis:** "Please" macht Befehle viel höflicher und freundlicher!

<GamePlaceholder id="fixTheMistake" />

### 5. Häufige Verwendungen des Imperativs 🎯

#### A) Anweisungen (Wie man etwas tut) 📖

- "**Mix** the ingredients together."
- "**Press** the red button."
- "**Turn** left at the corner."

#### B) Warnungen (Sei vorsichtig!) ⚠️

- "**Be** careful!"
- "**Watch** out!"
- "**Don't** touch that!"

#### C) Ratschläge (Vorschläge) 💡

- "**Eat** more fruit."
- "**Get** enough sleep."
- "**Don't** worry."

#### D) Befehle (Direkte Anordnungen) 📢

- "**Stop**!"
- "**Go** away!"
- "**Don't** move!"

#### E) Einladungen (Komm mit!) 🎉

- "**Come** in!"
- "**Have** a seat!"
- "**Help** yourself!"

<GamePlaceholder id="grammarSmash" />

### 6. Besondere Fälle: "Be" und "Let's" ⭐

#### "Be" im Imperativ verwenden

"Be" ist besonders, weil es mit Adjektiven verwendet wird:
- "**Be** careful!" (nicht "Careful!")
- "**Be** quiet!" (nicht "Quiet!")
- "**Be** patient!" (nicht "Patient!")

#### "Let's" verwenden (Let Us)

"Let's" wird für Vorschläge verwendet, wenn du dich selbst einschließt:
- "**Let's** go!" (Lass uns gehen = Wir sollten gehen)
- "**Let's** eat!" (Lass uns essen = Wir sollten essen)
- "**Let's** not argue." (Lass uns nicht streiten = Wir sollten nicht streiten)

### 7. Häufige Fehler ❌

1. **Füge kein "you" hinzu**
   - ❌ "You sit down!" → ✅ "Sit down!"

2. **Verwende "not" nicht allein**
   - ❌ "Not talk!" → ✅ "Don't talk!"

3. **Vergiss nicht "be" mit Adjektiven**
   - ❌ "Quiet!" → ✅ "Be quiet!"

4. **Verwende kein "to"**
   - ❌ "To sit down!" → ✅ "Sit down!"

### 8. Beispiele aus der Praxis 🌍

#### Im Klassenzimmer 🏫
- "**Open** your books!"
- "**Don't** talk during the test!"
- "**Listen** carefully!"

#### In der Küche 🍳
- "**Add** salt and pepper."
- "**Don't** burn the food!"
- "**Be** careful with the knife!"

#### Auf Schildern 🚦
- "**Stop**" (Stoppschild)
- "**Don't** smoke" (Nichtraucherschild)
- "**Keep** off the grass" (Park-Schild)

#### Im täglichen Leben 💬
- "**Come** here!"
- "**Don't** forget!"
- "**Be** on time!"

### 9. Übung macht den Meister! 🎓

Versuche, Imperative in deinem täglichen Englisch zu verwenden:
- Gib Anweisungen: "Turn left..."
- Gib Warnungen: "Be careful..."
- Gib Ratschläge: "Eat well..."

**Denk daran:** Der Imperativ ist direkt und mächtig. Verwende ihn, wenn du jemandem klar und einfach sagen musst, was zu tun ist!
`
  },
  task: {
    de: {
      title: 'Befehle und Anweisungen geben',
      description: 'Schreibe drei Imperativ-Sätze: einen positiven Befehl, einen negativen Befehl und eine höfliche Anweisung mit "please".',
      checklist: [
        { text: 'Positiver Befehl: Verb...', checked: false },
        { text: 'Negativer Befehl: Don\'t...', checked: false },
        { text: 'Höfliche Anweisung: ...please', checked: false }
      ]
    },
    en: {
      title: 'Giving Commands and Instructions',
      description: 'Write three imperative sentences: one positive command, one negative command, and one polite instruction with "please".',
      checklist: [
        { text: 'Positive command: Verb...', checked: false },
        { text: 'Negative command: Don\'t...', checked: false },
        { text: 'Polite instruction: ...please', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

