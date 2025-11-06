import React from 'react';
import { Lightbulb, X } from 'lucide-react';
import GrammarGame from '../../components/grammar-games/GrammarGame';

// Game data
const sentenceBuilderData = [
  {
    prompt: { en: "Build a sentence about a daily habit:", de: "Baue einen Satz über eine tägliche Gewohnheit:" },
    words: ["I", "coffee", "drink", "every", "morning"],
    correct: "I drink coffee every morning",
    explanation: { en: "For habits, we use Present Simple. 'I' takes the base form 'drink'.", de: "Für Gewohnheiten verwenden wir Present Simple. 'I' nimmt die Grundform 'drink'." }
  },
  {
    prompt: { en: "Build a sentence with 'he':", de: "Baue einen Satz mit 'he':" },
    words: ["He", "to", "school", "walks", "every", "day"],
    correct: "He walks to school every day",
    explanation: { en: "With 'he/she/it', we add -s to the verb: walk → walks.", de: "Mit 'he/she/it' fügen wir -s zum Verb hinzu: walk → walks." }
  },
  {
    prompt: { en: "Build a sentence with an adverb of frequency:", de: "Baue einen Satz mit einem Häufigkeitsadverb:" },
    words: ["She", "never", "chocolate", "eats"],
    correct: "She never eats chocolate",
    explanation: { en: "Adverbs of frequency (never, always, often) go BEFORE the main verb.", de: "Häufigkeitsadverbien (never, always, often) stehen VOR dem Hauptverb." }
  },
  {
    prompt: { en: "Build a question:", de: "Baue eine Frage:" },
    words: ["Do", "you", "like", "pizza", "?"],
    correct: "Do you like pizza ?",
    explanation: { en: "Questions start with 'Do' for I/you/we/they, followed by subject + base verb.", de: "Fragen beginnen mit 'Do' für I/you/we/they, gefolgt von Subjekt + Grundform." }
  },
  {
    prompt: { en: "Build a negative sentence:", de: "Baue einen negativen Satz:" },
    words: ["They", "don't", "work", "on", "Sundays"],
    correct: "They don't work on Sundays",
    explanation: { en: "Negative sentences use 'don't' + base form of the verb.", de: "Negative Sätze verwenden 'don't' + Grundform des Verbs." }
  }
];

const verbConjugatorData = [
  {
    subject: "She",
    verb: "study",
    correct: "studies",
    explanation: { en: "study → studies (consonant + y becomes -ies)", de: "study → studies (Konsonant + y wird zu -ies)" }
  },
  {
    subject: "He",
    verb: "go",
    correct: "goes",
    explanation: { en: "go → goes (verbs ending in -o add -es)", de: "go → goes (Verben, die auf -o enden, bekommen -es)" }
  },
  {
    subject: "It",
    verb: "rain",
    correct: "rains",
    explanation: { en: "rain → rains (most verbs just add -s)", de: "rain → rains (die meisten Verben bekommen nur -s)" }
  },
  {
    subject: "She",
    verb: "watch",
    correct: "watches",
    explanation: { en: "watch → watches (verbs ending in -ch add -es)", de: "watch → watches (Verben, die auf -ch enden, bekommen -es)" }
  },
  {
    subject: "He",
    verb: "have",
    correct: "has",
    explanation: { en: "have → has (irregular verb!)", de: "have → has (unregelmäßiges Verb!)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "He don't like coffee",
    mistakeIndex: 1,
    correction: "doesn't",
    explanation: { en: "With he/she/it, we use 'doesn't', not 'don't'.", de: "Mit he/she/it verwenden wir 'doesn't', nicht 'don't'." }
  },
  {
    sentence: "She doesn't likes pizza",
    mistakeIndex: 2,
    correction: "like",
    explanation: { en: "After 'doesn't', the verb stays in base form (no -s).", de: "Nach 'doesn't' bleibt das Verb in der Grundform (kein -s)." }
  },
  {
    sentence: "They goes to school every day",
    mistakeIndex: 1,
    correction: "go",
    explanation: { en: "'They' uses the base form 'go', not 'goes'.", de: "'They' verwendet die Grundform 'go', nicht 'goes'." }
  },
  {
    sentence: "I always drinks water",
    mistakeIndex: 2,
    correction: "drink",
    explanation: { en: "'I' uses the base form 'drink', not 'drinks'.", de: "'I' verwendet die Grundform 'drink', nicht 'drinks'." }
  },
  {
    sentence: "Does you like music ?",
    mistakeIndex: 0,
    correction: "Do",
    explanation: { en: "With 'you', we use 'Do', not 'Does'.", de: "Mit 'you' verwenden wir 'Do', nicht 'Does'." }
  }
];

const translateThisData = [
  {
    german: "Ich trinke jeden Morgen Kaffee.",
    correct: "I drink coffee every morning",
    explanation: { en: "Daily habits use Present Simple. 'I' + base form 'drink'.", de: "Tägliche Gewohnheiten verwenden Present Simple. 'I' + Grundform 'drink'." }
  },
  {
    german: "Sie arbeitet als Lehrerin.",
    correct: "She works as a teacher",
    explanation: { en: "Permanent situations use Present Simple. 'She' + works (verb + s).", de: "Dauerhafte Situationen verwenden Present Simple. 'She' + works (Verb + s)." }
  },
  {
    german: "Wir leben in Berlin.",
    correct: "We live in Berlin",
    explanation: { en: "Permanent situations. 'We' + base form 'live'.", de: "Dauerhafte Situationen. 'We' + Grundform 'live'." }
  },
  {
    german: "Er spielt nie Fußball.",
    correct: "He never plays football",
    explanation: { en: "Adverb 'never' goes before the main verb. 'He' + plays (verb + s).", de: "Adverb 'never' steht vor dem Hauptverb. 'He' + plays (Verb + s)." }
  },
  {
    german: "Magst du Pizza?",
    correct: "Do you like pizza",
    explanation: { en: "Questions: Do + you + base form. Note: 'mögen' = 'like' in English.", de: "Fragen: Do + you + Grundform. Hinweis: 'mögen' = 'like' auf Englisch." }
  }
];


export const presentSimple = {
  title: {
    en: 'A1 Grammar: The Present Simple Tense',
    de: 'A1 Grammatik: Das Present Simple (Einfache Gegenwart)'
  },
  description: {
    en: "Master the most fundamental tense in English for daily conversations.",
    de: "Meistere die grundlegendste Zeitform im Englischen für tägliche Gespräche."
  },
  
  // All components that can be used in the content via <GamePlaceholder id="..." />
  components: {
    tenseTimeline: <GrammarGame type="tenseTimeline" />,
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    verbConjugator: <GrammarGame type="verbConjugator" data={verbConjugatorData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    translateThis: <GrammarGame type="translateThis" data={translateThisData} />
  },

  content: {
    en: `
## Welcome to Your First Grammar Lesson! 🎉

The **Present Simple** is the foundation of English grammar. You'll use it every single day to talk about yourself, your life, and the world around you. Let's master it together!

---

### When Do We Use the Present Simple?

We use it in five main situations:

1.  **Habits and Routines**
    <p class="text-sm text-stone-600 dark:text-stone-400">Things you do regularly.</p>
    - I **drink** coffee every morning. ☕
    - She **goes** to the gym on Mondays.
    - They **rarely watch** TV.

2.  **General Truths and Facts**
    <p class="text-sm text-stone-600 dark:text-stone-400">Things that are always true.</p>
    - The sun **rises** in the east. 🌅
    - Water **boils** at 100 degrees Celsius.
    - The Earth **revolves** around the Sun.

3.  **Permanent Situations & States**
    <p class="text-sm text-stone-600 dark:text-stone-400">Long-term situations or feelings (using "stative verbs").</p>
    - I **live** in Berlin.
    - He **works** as a teacher.
    - She **believes** in magic.
    - I **love** pizza.

4.  **Schedules and Timetables**
    <p class="text-sm text-stone-600 dark:text-stone-400">For future events that are part of a fixed schedule.</p>
    - The train **leaves** at 8 AM tomorrow. 🚆
    - The concert **starts** at 9 PM.
    - Our flight **arrives** in London at noon.

5.  **Instructions and Headlines**
    <p class="text-sm text-stone-600 dark:text-stone-400">For giving directions or in news headlines for dramatic effect.</p>
    - First, you **open** the box. Then, you **take out** the parts.
    - *Newspaper Headline:* Man **walks** on the Moon!

---

## How to Form the Present Simple

### Positive Sentences (+)

For most verbs, it's super simple:

**I / You / We / They** + **verb** (base form)
- I **work** in an office.
- They **like** pizza.

**He / She / It** + **verb + s/es/ies**
- He **works** in an office.
- She **likes** pizza.
- It **rains** a lot here.

<div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 my-6">
  <div className="flex items-start gap-3">
    <Lightbulb className="text-amber-500 flex-shrink-0 mt-1" size={24} />
    <div>
      <strong className="text-amber-800 dark:text-amber-200">Spelling Rules for He/She/It</strong>
      <p className="text-sm text-amber-700 dark:text-amber-300">The "-s" rule has a few exceptions:</p>
      <ul className="mt-2 ml-4 list-disc text-sm text-amber-700 dark:text-amber-300 space-y-1">
        <li>Most verbs: add <strong>-s</strong> (work → work<strong>s</strong>, play → play<strong>s</strong>)</li>
        <li>Verbs ending in <strong>-s, -sh, -ch, -x, -o</strong>: add <strong>-es</strong> (kiss → kiss<strong>es</strong>, wash → wash<strong>es</strong>, go → go<strong>es</strong>)</li>
        <li>Verbs ending in <strong>consonant + y</strong>: change <strong>y</strong> to <strong>-ies</strong> (study → stud<strong>ies</strong>, cry → cr<strong>ies</strong>)</li>
        <li><strong>Irregular verbs:</strong> have → <strong>has</strong>, be → <strong>am/is/are</strong>, do → <strong>does</strong></li>
      </ul>
    </div>
  </div>
</div>

---

### Negative Sentences (-)

We use **don't** (do not) or **doesn't** (does not) + the **base form** of the verb.

**I / You / We / They** + **don't** + **verb**
- I **don't like** tea.
- They **don't work** on Sundays.

**He / She / It** + **doesn't** + **verb**
- He **doesn't like** tea.
- She **doesn't work** on Sundays.

<div className="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 my-4">
  <div className="flex items-start gap-2">
    <X className="text-rose-500 flex-shrink-0 mt-1" size={20} />
    <div>
      <strong>Crucial Rule!</strong>
      <br />
      ❌ He doesn't like<strong>s</strong> coffee. (WRONG)
      <br />
      ✅ He <strong>doesn't like</strong> coffee. (CORRECT)
      <br />
      <em>After "doesn't", the "-s" disappears from the main verb!</em>
    </div>
  </div>
</div>

---

### Questions (?)

We use **Do** or **Does** at the beginning.

**Do** + **I / you / we / they** + **verb**?
- **Do you like** music? → Yes, I do. / No, I don't.
- **Do they work** here? → Yes, they do. / No, they don't.

**Does** + **he / she / it** + **verb**?
- **Does he like** music? → Yes, he does. / No, he doesn't.
- **Does she work** here? → Yes, she does. / No, she doesn't.

**For WH-Questions** (What, Where, When, Why, Who, How), the structure is:
**WH-Word** + **do/does** + **subject** + **verb**?
- **Where do** you live?
- **What does** she study?
- **When do** they start work?

---

## Signal Words & Adverbs of Frequency

These words are often used with the Present Simple. Adverbs of frequency usually go **before the main verb**.

- I **always** brush my teeth.
- She is **usually** happy. (After verb 'to be')
- We **often** eat pizza.
- He **sometimes** plays guitar.
- They **rarely** watch TV.
- I **never** drink alcohol.
- I exercise **every day**.
- He visits his grandma **twice a week**.

---

## 🎮 Interactive Practice: Let's Play!

Now it's time to practice what you've learned! Try these interactive exercises.

### 🎯 Game 1: Tense Timeline
First, let's visualize when to use different tenses. Click on the timeline below to explore!
<GamePlaceholder id="tenseTimeline" />

---

### 🧩 Game 2: Sentence Builder
Build correct sentences by dragging words into the right order!
<GamePlaceholder id="sentenceBuilder" />

---

### 🔧 Game 3: Verb Conjugator Machine
Practice conjugating verbs! Type the correct form of the verb.
<GamePlaceholder id="verbConjugator" />

---

### 🚨 Game 4: Fix the Mistake
Find the grammatical error in each sentence and click on it!
<GamePlaceholder id="fixTheMistake" />

---

### 🌍 Game 5: Translate This
Translate these German sentences into English using the Present Simple!
<GamePlaceholder id="translateThis" />

---

## 🎯 Quick Reference Guide

Here's a handy cheat sheet you can always come back to:

<div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-lg p-6 border-2 border-teal-400 dark:border-teal-600 my-6">
  <h4 className="font-bold text-lg text-teal-800 dark:text-teal-200 mb-4">📋 Present Simple Cheat Sheet</h4>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-white dark:bg-stone-800 rounded-lg p-4">
      <h5 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Positive</h5>
      <p className="text-sm text-stone-700 dark:text-stone-300">I/You/We/They + <strong>verb</strong></p>
      <p className="text-sm text-stone-700 dark:text-stone-300">He/She/It + <strong>verb + s/es</strong></p>
    </div>
    
    <div className="bg-white dark:bg-stone-800 rounded-lg p-4">
      <h5 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Negative</h5>
      <p className="text-sm text-stone-700 dark:text-stone-300">I/You/We/They + <strong>don't</strong> + verb</p>
      <p className="text-sm text-stone-700 dark:text-stone-300">He/She/It + <strong>doesn't</strong> + verb</p>
    </div>
    
    <div className="bg-white dark:bg-stone-800 rounded-lg p-4">
      <h5 className="font-bold text-blue-700 dark:text-blue-300 mb-2">❓ Questions</h5>
      <p className="text-sm text-stone-700 dark:text-stone-300"><strong>Do</strong> + I/you/we/they + verb?</p>
      <p className="text-sm text-stone-700 dark:text-stone-300"><strong>Does</strong> + he/she/it + verb?</p>
    </div>
    
    <div className="bg-white dark:bg-stone-800 rounded-lg p-4">
      <h5 className="font-bold text-purple-700 dark:text-purple-300 mb-2">⏰ Signal Words</h5>
      <p className="text-sm text-stone-700 dark:text-stone-300">always, usually, often, sometimes, rarely, never, every day</p>
    </div>
  </div>
</div>

---

## 🌟 Common Mistakes to Avoid

<div className="space-y-3 my-6">
  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4">
    <p className="font-bold text-red-800 dark:text-red-200">❌ He don't like pizza.</p>
    <p className="text-sm text-red-700 dark:text-red-300">→ ✅ He <strong>doesn't</strong> like pizza.</p>
  </div>
  
  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4">
    <p className="font-bold text-red-800 dark:text-red-200">❌ She doesn't likes coffee.</p>
    <p className="text-sm text-red-700 dark:text-red-300">→ ✅ She doesn't <strong>like</strong> coffee.</p>
  </div>
  
  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4">
    <p className="font-bold text-red-800 dark:text-red-200">❌ Does you like music?</p>
    <p className="text-sm text-red-700 dark:text-red-300">→ ✅ <strong>Do</strong> you like music?</p>
  </div>
  
  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4">
    <p className="font-bold text-red-800 dark:text-red-200">❌ I always drinks water.</p>
    <p className="text-sm text-red-700 dark:text-red-300">→ ✅ I always <strong>drink</strong> water.</p>
  </div>
</div>

---

## 🎓 You're Ready!

Congratulations! You've now learned the **Present Simple** tense - the most important tense in English! 

**What you can do now:**
- ✅ Talk about your daily routines and habits
- ✅ Describe permanent situations
- ✅ State facts and general truths
- ✅ Ask and answer questions about everyday life
- ✅ Use frequency adverbs correctly

**Next steps:**
- Practice speaking about YOUR daily routine
- Try to think in English when doing everyday activities
- Move on to the next lesson: **Present Continuous** (for actions happening RIGHT NOW!)

Keep practicing, and remember: **mistakes are part of learning!** 🚀
`,
    de: `
## Willkommen zu deiner ersten Grammatik-Lektion! 🎉

Das **Present Simple** ist das Fundament der englischen Grammatik. Du wirst es jeden Tag benutzen, um über dich, dein Leben und die Welt um dich herum zu sprechen. Lass es uns gemeinsam meistern!

---

### Wann verwenden wir das Present Simple?

Wir verwenden es in fünf Hauptsituationen:

1.  **Gewohnheiten und Routinen**
    <p class="text-sm text-stone-600 dark:text-stone-400">Dinge, die du regelmäßig tust.</p>
    - I **drink** coffee every morning. ☕ (Ich trinke jeden Morgen Kaffee.)
    - She **goes** to the gym on Mondays. (Sie geht montags ins Fitnessstudio.)
    - They **rarely watch** TV. (Sie schauen selten fern.)

2.  **Allgemeine Wahrheiten und Fakten**
    <p class="text-sm text-stone-600 dark:text-stone-400">Dinge, die immer wahr sind.</p>
    - The sun **rises** in the east. 🌅 (Die Sonne geht im Osten auf.)
    - Water **boils** at 100 degrees Celsius. (Wasser kocht bei 100 Grad Celsius.)
    - The Earth **revolves** around the Sun. (Die Erde dreht sich um die Sonne.)

3.  **Dauerhafte Zustände & Gefühle**
    <p class="text-sm text-stone-600 dark:text-stone-400">Langfristige Situationen oder Gefühle (mit "Zustandsverben").</p>
    - I **live** in Berlin. (Ich lebe in Berlin.)
    - He **works** as a teacher. (Er arbeitet als Lehrer.)
    - She **believes** in magic. (Sie glaubt an Magie.)
    - I **love** pizza. (Ich liebe Pizza.)

4.  **Zeitpläne und Fahrpläne**
    <p class="text-sm text-stone-600 dark:text-stone-400">Für zukünftige Ereignisse, die Teil eines festen Plans sind.</p>
    - The train **leaves** at 8 AM tomorrow. 🚆 (Der Zug fährt morgen um 8 Uhr ab.)
    - The concert **starts** at 9 PM. (Das Konzert beginnt um 21 Uhr.)
    - Our flight **arrives** in London at noon. (Unser Flug kommt mittags in London an.)

5.  **Anleitungen und Schlagzeilen**
    <p class="text-sm text-stone-600 dark:text-stone-400">Um Anweisungen zu geben oder in Nachrichtenschlagzeilen für einen dramatischen Effekt.</p>
    - First, you **open** the box. Then, you **take out** the parts. (Zuerst öffnest du die Kiste. Dann nimmst du die Teile heraus.)
    - *Newspaper Headline:* Man **walks** on the Moon! (Mann geht auf dem Mond!)

---

## Wie bildet man das Present Simple?

### Positive Sätze (+)

Für die meisten Verben ist es super einfach:

**I / You / We / They** + **Verb** (Grundform)
- I **work** in an office. (Ich arbeite in einem Büro.)
- They **like** pizza. (Sie mögen Pizza.)

**He / She / It** + **Verb + s/es/ies**
- He **works** in an office. (Er arbeitet in einem Büro.)
- She **likes** pizza. (Sie mag Pizza.)
- It **rains** a lot here. (Es regnet hier viel.)

<div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 my-6">
  <div className="flex items-start gap-3">
    <Lightbulb className="text-amber-500 flex-shrink-0 mt-1" size={24} />
    <div>
      <strong className="text-amber-800 dark:text-amber-200">Rechtschreibregeln für He/She/It</strong>
      <p className="text-sm text-amber-700 dark:text-amber-300">Die "-s"-Regel hat ein paar Ausnahmen:</p>
      <ul className="mt-2 ml-4 list-disc text-sm text-amber-700 dark:text-amber-300 space-y-1">
        <li>Die meisten Verben: <strong>-s</strong> anhängen (work → work<strong>s</strong>, play → play<strong>s</strong>)</li>
        <li>Verben, die auf <strong>-s, -sh, -ch, -x, -o</strong> enden: <strong>-es</strong> anhängen (kiss → kiss<strong>es</strong>, wash → wash<strong>es</strong>, go → go<strong>es</strong>)</li>
        <li>Verben, die auf <strong>Konsonant + y</strong> enden: <strong>y</strong> wird zu <strong>-ies</strong> (study → stud<strong>ies</strong>, cry → cr<strong>ies</strong>)</li>
        <li><strong>Unregelmäßige Verben:</strong> have → <strong>has</strong>, be → <strong>am/is/are</strong>, do → <strong>does</strong></li>
      </ul>
    </div>
  </div>
</div>

---

### Negative Sätze (-)

Wir verwenden **don't** (do not) oder **doesn't** (does not) + die **Grundform** des Verbs.

**I / You / We / They** + **don't** + **Verb**
- I **don't like** tea. (Ich mag keinen Tee.)
- They **don't work** on Sundays. (Sie arbeiten sonntags nicht.)

**He / She / It** + **doesn't** + **Verb**
- He **doesn't like** tea. (Er mag keinen Tee.)
- She **doesn't work** on Sundays. (Sie arbeitet sonntags nicht.)

<div className="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 my-4">
  <div className="flex items-start gap-2">
    <X className="text-rose-500 flex-shrink-0 mt-1" size={20} />
    <div>
      <strong>Wichtige Regel!</strong>
      <br />
      ❌ He doesn't like<strong>s</strong> coffee. (FALSCH)
      <br />
      ✅ He <strong>doesn't like</strong> coffee. (RICHTIG)
      <br />
      <em>Nach "doesn't" verschwindet das "-s" vom Hauptverb!</em>
    </div>
  </div>
</div>

---

### Fragen (?)

Wir verwenden **Do** oder **Does** am Anfang.

**Do** + **I / you / we / they** + **Verb**?
- **Do you like** music? → Yes, I do. / No, I don't. (Magst du Musik?)
- **Do they work** here? → Yes, they do. / No, they don't. (Arbeiten sie hier?)

**Does** + **he / she / it** + **Verb**?
- **Does he like** music? → Yes, he does. / No, he doesn't. (Mag er Musik?)
- **Does she work** here? → Yes, she does. / No, she doesn't. (Arbeitet sie hier?)

**Für W-Fragen** (What, Where, When, Why, Who, How), ist die Struktur:
**W-Wort** + **do/does** + **Subjekt** + **Verb**?
- **Where do** you live? (Wo lebst du?)
- **What does** she study? (Was studiert sie?)
- **When do** they start work? (Wann beginnen sie mit der Arbeit?)

---

## Signalwörter & Häufigkeitsadverbien

Diese Wörter werden oft mit dem Present Simple verwendet. Häufigkeitsadverbien stehen normalerweise **vor dem Hauptverb**.

- I **always** brush my teeth. (Ich putze mir immer die Zähne.)
- She is **usually** happy. (Sie ist normalerweise glücklich.) (Nach dem Verb 'to be')
- We **often** eat pizza. (Wir essen oft Pizza.)
- He **sometimes** plays guitar. (Er spielt manchmal Gitarre.)
- They **rarely** watch TV. (Sie schauen selten fern.)
- I **never** drink alcohol. (Ich trinke niemals Alkohol.)
- I exercise **every day**. (Ich trainiere jeden Tag.)
- He visits his grandma **twice a week**. (Er besucht seine Oma zweimal pro Woche.)

---

## 🎮 Interactive Practice: Let's Play!

Now it's time to practice what you've learned! Try these interactive exercises.

### 🎯 Game 1: Tense Timeline
First, let's visualize when to use different tenses. Click on the timeline below to explore!
<GamePlaceholder id="tenseTimeline" />

---

### 🧩 Game 2: Sentence Builder
Build correct sentences by dragging words into the right order!
<GamePlaceholder id="sentenceBuilder" />

---

### 🔧 Game 3: Verb Conjugator Machine
Practice conjugating verbs! Type the correct form of the verb.
<GamePlaceholder id="verbConjugator" />

---

### 🚨 Game 4: Fix the Mistake
Find the grammatical error in each sentence and click on it!
<GamePlaceholder id="fixTheMistake" />

---

### 🌍 Game 5: Translate This
Translate these German sentences into English using the Present Simple!
<GamePlaceholder id="translateThis" />

---

## 🎯 Schnell-Referenz

Hier ist ein praktischer Spickzettel, zu dem du immer zurückkehren kannst:

<div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-lg p-6 border-2 border-teal-400 dark:border-teal-600 my-6">
  <h4 className="font-bold text-lg text-teal-800 dark:text-teal-200 mb-4">📋 Present Simple Spickzettel</h4>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-white dark:bg-stone-800 rounded-lg p-4">
      <h5 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Positiv</h5>
      <p className="text-sm text-stone-700 dark:text-stone-300">I/You/We/They + <strong>Verb</strong></p>
      <p className="text-sm text-stone-700 dark:text-stone-300">He/She/It + <strong>Verb + s/es</strong></p>
    </div>
    
    <div className="bg-white dark:bg-stone-800 rounded-lg p-4">
      <h5 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Negativ</h5>
      <p className="text-sm text-stone-700 dark:text-stone-300">I/You/We/They + <strong>don't</strong> + Verb</p>
      <p className="text-sm text-stone-700 dark:text-stone-300">He/She/It + <strong>doesn't</strong> + Verb</p>
    </div>
    
    <div className="bg-white dark:bg-stone-800 rounded-lg p-4">
      <h5 className="font-bold text-blue-700 dark:text-blue-300 mb-2">❓ Fragen</h5>
      <p className="text-sm text-stone-700 dark:text-stone-300"><strong>Do</strong> + I/you/we/they + Verb?</p>
      <p className="text-sm text-stone-700 dark:text-stone-300"><strong>Does</strong> + he/she/it + Verb?</p>
    </div>
    
    <div className="bg-white dark:bg-stone-800 rounded-lg p-4">
      <h5 className="font-bold text-purple-700 dark:text-purple-300 mb-2">⏰ Signalwörter</h5>
      <p className="text-sm text-stone-700 dark:text-stone-300">always, usually, often, sometimes, rarely, never, every day</p>
    </div>
  </div>
</div>

---

## 🌟 Häufige Fehler vermeiden

<div className="space-y-3 my-6">
  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4">
    <p className="font-bold text-red-800 dark:text-red-200">❌ He don't like pizza.</p>
    <p className="text-sm text-red-700 dark:text-red-300">→ ✅ He <strong>doesn't</strong> like pizza.</p>
  </div>
  
  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4">
    <p className="font-bold text-red-800 dark:text-red-200">❌ She doesn't likes coffee.</p>
    <p className="text-sm text-red-700 dark:text-red-300">→ ✅ She doesn't <strong>like</strong> coffee.</p>
  </div>
  
  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4">
    <p className="font-bold text-red-800 dark:text-red-200">❌ Does you like music?</p>
    <p className="text-sm text-red-700 dark:text-red-300">→ ✅ <strong>Do</strong> you like music?</p>
  </div>
  
  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4">
    <p className="font-bold text-red-800 dark:text-red-200">❌ I always drinks water.</p>
    <p className="text-sm text-red-700 dark:text-red-300">→ ✅ I always <strong>drink</strong> water.</p>
  </div>
</div>

---

## 🎓 Du bist bereit!

Glückwunsch! Du hast jetzt das **Present Simple** gelernt - die wichtigste Zeitform im Englischen! 

**Was du jetzt kannst:**
- ✅ Über deine täglichen Routinen und Gewohnheiten sprechen
- ✅ Dauerhafte Situationen beschreiben
- ✅ Fakten und allgemeine Wahrheiten aussprechen
- ✅ Fragen über das Alltagsleben stellen und beantworten
- ✅ Häufigkeitsadverbien korrekt verwenden

**Nächste Schritte:**
- Übe, über DEINE tägliche Routine zu sprechen
- Versuche, auf Englisch zu denken, wenn du alltägliche Aktivitäten machst
- Gehe zur nächsten Lektion: **Present Continuous** (für Handlungen, die GENAU JETZT passieren!)

Übe weiter und denk daran: **Fehler sind Teil des Lernens!** 🚀
`
  },

  task: {
    de: {
      title: 'Present Simple üben',
      description: 'Schreibe 5 Sätze über deine tägliche Routine, eine Gewohnheit eines Freundes/Familienmitglieds und eine allgemeine Wahrheit.',
      checklist: [
        { text: 'Ein Satz über etwas, das du jeden Morgen tust.', checked: false },
        { text: 'Ein Satz über etwas, das ein Freund (he/she) oft macht.', checked: false },
        { text: 'Ein Satz, der eine wissenschaftliche Tatsache beschreibt.', checked: false },
        { text: 'Eine Frage an einen Freund über seine Gewohnheiten.', checked: false },
        { text: 'Ein negativer Satz über etwas, das du nie tust.', checked: false }
      ]
    },
    en: {
      title: 'Practice the Present Simple',
      description: 'Write 5 sentences about your daily routine, a habit of a friend/family member, and a general truth.',
      checklist: [
        { text: 'A sentence about something you do every morning.', checked: false },
        { text: 'A sentence about something a friend (he/she) often does.', checked: false },
        { text: 'A sentence that describes a scientific fact.', checked: false },
        { text: 'A question to a friend about their habits.', checked: false },
        { text: 'A negative sentence about something you never do.', checked: false }
      ]
    }
  },

  quiz: {
    de: [
      {
        question: 'Wann verwenden wir Present Simple NICHT?',
        answer: 'Für Handlungen, die genau jetzt im Moment des Sprechens passieren (dafür verwendet man Present Continuous).'
      },
      {
        question: 'Wie lautet die 3. Person Singular von "to watch"?',
        answer: 'watches (weil es auf -ch endet, fügen wir -es hinzu).'
      },
      {
        question: 'Bilde eine Frage: "Where / she / work?"',
        answer: "Where does she work?"
      },
      {
        question: 'Was ist falsch an: "He doesn\'t likes coffee"?',
        answer: 'Nach "doesn\'t" muss das Verb in der Grundform bleiben: "He doesn\'t like coffee".'
      }
    ],
    en: [
      {
        question: 'When do we NOT use the Present Simple?',
        answer: 'For actions happening right now at the moment of speaking (for that, we use Present Continuous).'
      },
      {
        question: 'What is the 3rd person singular of "to watch"?',
        answer: 'watches (because it ends in -ch, we add -es).'
      },
      {
        question: 'Form a question: "Where / she / work?"',
        answer: "Where does she work?"
      },
      {
        question: 'What is wrong with: "He doesn\'t likes coffee"?',
        answer: 'After "doesn\'t", the verb should be in its base form: "He doesn\'t like coffee".'
      }
    ]
  }
};

