import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

// --- Game Data ---

const pronounsData = [
  {
    prompt: { en: "___ is my brother.", de: "___ ist mein Bruder." },
    words: ["He", "Him", "His"],
    correct: "He",
    explanation: { en: "Subject (Wer?): He", de: "Subjekt (Wer?): He" }
  },
  {
    prompt: { en: "I like ___.", de: "Ich mag ___." },
    words: ["she", "her", "hers"],
    correct: "her",
    explanation: { en: "Object (Wem?): Her", de: "Objekt (Wem?): Her" }
  },
  {
    prompt: { en: "___ are my friends.", de: "___ sind meine Freunde." },
    words: ["Them", "They", "Their"],
    correct: "They",
    explanation: { en: "Subject (Wer?): They", de: "Subjekt (Wer?): They" }
  },
  {
    prompt: { en: "Listen to ___!", de: "Hör ___ zu!" },
    words: ["I", "my", "me"],
    correct: "me",
    explanation: { en: "Object (Wem?): Me", de: "Objekt (Wem?): Me" }
  },
  {
    prompt: { en: "___ lives in London.", de: "___ lebt in London." },
    words: ["She", "Her", "Hers"],
    correct: "She",
    explanation: { en: "Subject (Wer?): She", de: "Subjekt (Wer?): She" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "Him is nice.",
    mistakeIndex: 0,
    correction: "He",
    explanation: { en: "Use Subject Pronoun 'He' at start.", de: "Nutze Subjektpronomen 'He' am Anfang." }
  },
  {
    sentence: "I like she.",
    mistakeIndex: 2,
    correction: "her",
    explanation: { en: "Use Object Pronoun 'her' after verb.", de: "Nutze Objektpronomen 'her' nach Verb." }
  },
  {
    sentence: "Them are playing.",
    mistakeIndex: 0,
    correction: "They",
    explanation: { en: "Subject: They", de: "Subjekt: They" }
  },
  {
    sentence: "Give it to I.",
    mistakeIndex: 3,
    correction: "me",
    explanation: { en: "Give it to 'me' (Object).", de: "Give it to 'me' (Objekt)." }
  }
];

const verbPilotData = [
  {
    prompt: "Catch the SUBJECT Pronouns (Wer?)",
    targets: ["I", "You", "He", "She", "We", "They"],
    distractors: ["me", "him", "her", "us", "them", "my", "your"],
    correct: "I" // Default target for simple mode, but game handles arrays
  }
];

// --- Lesson Content ---

export const subjectObjectPronouns = {
  id: 'a1_g0b',
  title: {
    en: 'Subject & Object Pronouns',
    de: 'Subjekt- & Objektpronomen'
  },
  description: {
    en: "Understanding the difference between I/Me, He/Him, They/Them is crucial.",
    de: "Der Unterschied zwischen I/Me, He/Him, They/Them ist entscheidend."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={pronounsData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    verbPilot: <GrammarGame type="verbPilot" data={verbPilotData} />
  },

  content: {
    en: `
## Introduction to Personal Pronouns

Pronouns are small words that replace names. Instead of saying "Tom plays football. Tom is good," we say "Tom plays football. **He** is good."

In English, these pronouns change their form depending on their job in the sentence. We call this the difference between **Subject** and **Object**.

### 1. Subject Pronouns (The Actors) 🎬

The **Subject** is the person or thing doing the action. 
- "**I** eat the apple." (I am doing the eating)
- "**She** drives the car." (She is doing the driving)

We usually find subject pronouns at the **beginning** of a sentence, before the verb.

| English | German | Example |
|---------|--------|---------|
| **I** | Ich | **I** love pizza. |
| **You** | Du | **You** are nice. |
| **He** | Er | **He** works here. |
| **She** | Sie | **She** is tall. |
| **It** | Es | **It** is a cat. |
| **We** | Wir | **We** are happy. |
| **They** | Sie (Pl.) | **They** play football. |

### 2. Object Pronouns (The Receivers) 🤲

The **Object** is the person or thing receiving the action.
- "Tom calls **me**." (I am receiving the call)
- "I see **him**." (He is being seen)

We usually find object pronouns **after the verb** or after prepositions like 'for', 'to', 'with'.

| English | German | Example |
|---------|--------|---------|
| **me** | mir/mich | She loves **me**. |
| **you** | dir/dich | I see **you**. |
| **him** | ihm/ihn | Look at **him**. |
| **her** | ihr/sie | Call **her**. |
| **it** | es | I like **it**. |
| **us** | uns | Wait for **us**. |
| **them** | ihnen/sie | Help **them**. |

<div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4">
  <strong className="text-blue-800 dark:text-blue-200">💡 Pro Tip:</strong>
  <br/>
  If you are unsure, try replacing the word with a name.
  <br/>
  - "___ is nice." -> "Tom is nice." -> **He** is nice. (Subject)
  <br/>
  - "I like ___." -> "I like Tom." -> I like **him**. (Object)
</div>

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Practice Zone

**Build the correct sentence:**
<GamePlaceholder id="sentenceBuilder" />

**✈️ Verb Pilot: Sky High Pronouns**
Fly your plane and catch ONLY the **Subject Pronouns** (I, He, She, We...). Avoid the Object Pronouns!
<GamePlaceholder id="verbPilot" />
`,
    de: `
## Einführung in Personalpronomen

Pronomen sind kleine Wörter, die Namen ersetzen. Anstatt zu sagen "Tom spielt Fußball. Tom ist gut", sagen wir "Tom spielt Fußball. **Er** (He) ist gut."

Im Englischen ändern diese Pronomen ihre Form, je nachdem, welche Aufgabe sie im Satz haben. Wir unterscheiden zwischen **Subjekt** und **Objekt**. Das ist wichtig, weil man im Deutschen oft "sie" für beides benutzt, im Englischen aber unterscheidet ("she" vs "her").

### 1. Subjektpronomen (Die Handelnden) 🎬

Das **Subjekt** ist die Person, die etwas tut.
- "**I** eat the apple." (Ich esse den Apfel - Ich tue es.)
- "**She** drives the car." (Sie fährt das Auto.)

Subjektpronomen stehen fast immer am **Satzanfang**, vor dem Verb.

| Englisch | Deutsch | Beispiel |
|---------|--------|---------|
| **I** | Ich | **I** love pizza. (Ich liebe Pizza.) |
| **You** | Du | **You** are nice. (Du bist nett.) |
| **He** | Er | **He** works here. (Er arbeitet hier.) |
| **She** | Sie | **She** is tall. (Sie ist groß.) |
| **It** | Es | **It** is a cat. (Es ist eine Katze.) |
| **We** | Wir | **We** are happy. (Wir sind glücklich.) |
| **They** | Sie (Pl.) | **They** play football. (Sie spielen Fußball.) |

### 2. Objektpronomen (Die Empfänger) 🤲

Das **Objekt** ist die Person, der etwas "passiert" oder die etwas empfängt.
- "Tom calls **me**." (Tom ruft mich an - Ich empfange den Anruf.)
- "I see **him**." (Ich sehe ihn - Er wird gesehen.)

Objektpronomen stehen meist **nach dem Verb** oder nach Wörtern wie 'for' (für), 'to' (zu), 'with' (mit).

| Englisch | Deutsch | Beispiel |
|---------|--------|---------|
| **me** | mir/mich | She loves **me**. (Sie liebt **mich**.) |
| **you** | dir/dich | I see **you**. (Ich sehe **dich**.) |
| **him** | ihm/ihn | Look at **him**. (Schau **ihn** an.) |
| **her** | ihr/sie | Call **her**. (Ruf **sie** an.) |
| **it** | es | I like **it**. (Ich mag **es**.) |
| **us** | uns | Wait for **us**. (Warte auf **uns**.) |
| **them** | ihnen/sie | Help **them**. (Hilf **ihnen**.) |

<div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4">
  <strong className="text-blue-800 dark:text-blue-200">💡 Profi-Tipp:</strong>
  <br/>
  Wenn du unsicher bist, ersetze das Wort durch einen Namen.
  <br/>
  - "___ is nice." -> "Tom ist nett." -> **He** is nice. (Subjekt)
  <br/>
  - "I like ___." -> "Ich mag Tom." -> I like **him**. (Objekt)
</div>

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Trainings-Zone

**Baue den korrekten Satz:**
<GamePlaceholder id="sentenceBuilder" />

**✈️ Verb Pilot: Pronomen-Flieger**
Flieg dein Flugzeug und fange NUR die **Subjektpronomen** (I, He, She, We...). Weiche den Objektpronomen aus!
<GamePlaceholder id="verbPilot" />
`
  },
  task: {
    de: { 
      title: 'Wer und Wen?', 
      description: 'Schreibe 2 Sätze mit "I" und 2 Sätze mit "me" (oder anderen Paaren).', 
      checklist: [
        { text: 'Satz mit Subjekt (I/He/She)', checked: false },
        { text: 'Satz mit Objekt (me/him/her)', checked: false }
      ] 
    },
    en: { 
      title: 'Who and Whom?', 
      description: 'Write 2 sentences with "I" and 2 sentences with "me" (or other pairs).', 
      checklist: [
        { text: 'Sentence with Subject (I/He/She)', checked: false },
        { text: 'Sentence with Object (me/him/her)', checked: false }
      ] 
    }
  },
  quiz: { 
    de: [
      { question: 'Welches Pronomen steht meist am Satzanfang?', answer: 'Subjektpronomen (Subject Pronoun)' },
      { question: 'I like ___ (he/him).', answer: 'him' }
    ], 
    en: [
      { question: 'Which pronoun usually starts a sentence?', answer: 'Subject Pronoun' },
      { question: 'I like ___ (he/him).', answer: 'him' }
    ] 
  }
};
