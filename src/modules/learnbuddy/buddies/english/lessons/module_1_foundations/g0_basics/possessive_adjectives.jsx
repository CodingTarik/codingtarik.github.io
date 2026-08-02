import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const possessiveData = [
  {
    prompt: { en: "This is ___ book (I).", de: "Das ist ___ Buch (ich)." },
    words: ["my", "mine", "me"],
    correct: "my",
    explanation: { en: "Adjective: my book", de: "Adjektiv: mein Buch" }
  },
  {
    prompt: { en: "Is that ___ car? (you)", de: "Ist das ___ Auto? (du)" },
    words: ["your", "yours", "you"],
    correct: "your",
    explanation: { en: "Adjective: your car", de: "Adjektiv: dein Auto" }
  },
  {
    prompt: { en: "This is not ___ house (we).", de: "Das ist nicht ___ Haus (wir)." },
    words: ["our", "ours", "us"],
    correct: "our",
    explanation: { en: "Adjective: our house", de: "Adjektiv: unser Haus" }
  },
  {
    prompt: { en: "___ name is Tom (he).", de: "___ Name ist Tom (er)." },
    words: ["His", "Him", "He"],
    correct: "His",
    explanation: { en: "Adjective: His name", de: "Adjektiv: Sein Name" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "Me name is Sarah.",
    mistakeIndex: 0,
    correction: "My",
    explanation: { en: "My name (Possessive), not Me name.", de: "My name (Besitz), nicht Me name." }
  },
  {
    sentence: "Is this you pen?",
    mistakeIndex: 2,
    correction: "your",
    explanation: { en: "Your pen, not you pen.", de: "Your pen (Dein Stift), nicht you pen." }
  },
  {
    sentence: "We car is blue.",
    mistakeIndex: 0,
    correction: "Our",
    explanation: { en: "Our car, not We car.", de: "Our car (Unser Auto), nicht We car." }
  },
  {
    sentence: "They house is big.",
    mistakeIndex: 0,
    correction: "Their",
    explanation: { en: "Their house, not They house.", de: "Their house (Ihr Haus), nicht They house." }
  }
];

const grammarRacerData = [
  {
    prompt: "I have a cat. ___ cat is cute.",
    options: ["Me", "My", "Mine"],
    correct: "My",
    explanation: "My cat"
  },
  {
    prompt: "You have a bike. ___ bike is fast.",
    options: ["You", "Yours", "Your"],
    correct: "Your",
    explanation: "Your bike"
  },
  {
    prompt: "She has a bag. ___ bag is red.",
    options: ["Her", "She", "Hers"],
    correct: "Her",
    explanation: "Her bag"
  },
  {
    prompt: "He has a dog. ___ dog is big.",
    options: ["Him", "His", "He"],
    correct: "His",
    explanation: "His dog"
  },
  {
    prompt: "We have a plan. ___ plan is good.",
    options: ["Us", "Our", "Ours"],
    correct: "Our",
    explanation: "Our plan"
  }
];

export const possessiveAdjectives = {
  id: 'a1_g0c',
  title: {
    en: 'Possessive Adjectives (my, your...)',
    de: 'Possessivbegleiter (mein, dein...)'
  },
  description: {
    en: "Learn how to say who owns what: my, your, his, her, our, their.",
    de: "Lerne auszudrücken, wem etwas gehört: mein, dein, sein, ihr, unser, ihr."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={possessiveData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Introduction to Possessive Adjectives

Imagine you want to say that something belongs to you. You can't just say "I book". That sounds like you *are* the book! Instead, you say "**My** book."

These little words (my, your, his...) are called **Possessive Adjectives**. They tell us **who owns** something.

### 1. The List of Owners 📋

| Subject (Person) | Possessive Adjective (Owner) | Example |
|---------|---------------------|---------|
| **I** | **my** | This is **my** car. |
| **You** | **your** | Is that **your** book? |
| **He** | **his** | **His** name is Tom. |
| **She** | **her** | **Her** cat is cute. |
| **It** | **its** | London is famous for **its** parks. |
| **We** | **our** | **Our** house is big. |
| **They** | **their** | **Their** car is red. |

**Important Rule:** These words always come **BEFORE** the noun (the thing that is owned).
- ✅ **My** car
- ❌ The car **my** (Wrong!)

<div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 my-4">
  <strong className="text-amber-800 dark:text-amber-200">⚠️ Common Mistake!</strong>
  <br/>
  Do not confuse **it's** (it is) with **its** (possession).
  <br/>
  - ✅ The dog plays with **its** ball. (Possession - no apostrophe!)
  <br/>
  - ✅ **It's** a nice day. (It is - with apostrophe!)
</div>

<GamePlaceholder id="fixTheMistake" />

### 2. Singular vs. Plural

In some languages (like German or French), the possessive word changes if you have one thing or many things (mein / meine).
In English, it is much easier! **The possessive adjective never changes.**

- My **friend** (one friend)
- My **friends** (many friends) - *Still "my", not "mys"*
- Our **problem**
- Our **problems**

<GamePlaceholder id="sentenceBuilder" />

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Possession Lap**
Race through the correct possessive adjectives!
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Einführung in Possessivbegleiter

Stell dir vor, du möchtest sagen, dass dir etwas gehört. Du kannst nicht einfach "Ich Buch" sagen. Das würde klingen, als wärst du das Buch! Stattdessen sagst du "**Mein** Buch" (My book).

Diese kleinen Wörter (mein, dein, sein...) nennt man **Possessivbegleiter**. Sie verraten uns, **wem** etwas gehört.

### 1. Die Liste der Besitzer 📋

| Subjekt (Person) | Possessivbegleiter (Besitzer) | Beispiel |
|---------|-------------------|----------|
| **I** (Ich) | **my** (mein) | This is **my** car. (Das ist **mein** Auto.) |
| **You** (Du) | **your** (dein) | Is that **your** book? (Ist das **dein** Buch?) |
| **He** (Er) | **his** (sein) | **His** name is Tom. (**Sein** Name ist Tom.) |
| **She** (Sie) | **her** (ihr) | **Her** cat is cute. (**Ihr** Katze ist süß.) |
| **It** (Es) | **its** (sein) | London is famous for **its** parks. (London ist bekannt für **seine** Parks.) |
| **We** (Wir) | **our** (unser) | **Our** house is big. (**Unser** Haus ist groß.) |
| **They** (Sie/Pl.) | **their** (ihr) | **Their** car is red. (**Ihr** Auto ist rot.) |

**Wichtige Regel:** Diese Wörter stehen immer **VOR** dem Nomen (dem Ding, das jemandem gehört).
- ✅ **My** car (Mein Auto)
- ❌ The car **my** (Falsch!)

<div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 my-4">
  <strong className="text-amber-800 dark:text-amber-200">⚠️ Häufiger Fehler!</strong>
  <br/>
  Verwechsle nicht **it's** (es ist) mit **its** (sein/Besitz).
  <br/>
  - ✅ The dog plays with **its** ball. (Besitz - kein Apostroph!)
  <br/>
  - ✅ **It's** a nice day. (Es ist - mit Apostroph!)
</div>

<GamePlaceholder id="fixTheMistake" />

### 2. Singular vs. Plural

Im Deutschen ändern sich diese Wörter oft (mein / meine / meinen).
Im Englischen ist es viel einfacher! **Der Possessivbegleiter verändert sich nie.** Egal ob dir eine Sache oder viele Dinge gehören.

- My **friend** (ein Freund)
- My **friends** (viele Freunde) - *Immer noch "my", nicht "mys"*
- Our **problem**
- Our **problems**

<GamePlaceholder id="sentenceBuilder" />

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Besitz-Runde**
Rase durch die richtigen Begleiter!
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    de: { 
      title: 'Wem gehört was?', 
      description: 'Zeige auf 3 Dinge im Raum und sage wem sie gehören (my, your, his...).', 
      checklist: [
        { text: 'Something that is "my..."', checked: false },
        { text: 'Something that is "your..."', checked: false },
        { text: 'Something that is "our..."', checked: false }
      ] 
    },
    en: { 
      title: 'Who owns what?', 
      description: 'Point at 3 things in the room and say who owns them (my, your, his...).', 
      checklist: [
        { text: 'Something that is "my..."', checked: false },
        { text: 'Something that is "your..."', checked: false },
        { text: 'Something that is "our..."', checked: false }
      ] 
    }
  },
  quiz: { 
    de: [], 
    en: [] 
  }
};
