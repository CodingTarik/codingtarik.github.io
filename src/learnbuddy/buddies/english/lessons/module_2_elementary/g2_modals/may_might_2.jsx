import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "You ___ (want) to check the weather before going out.", de: "Du ___ (wollen) vielleicht das Wetter prüfen, bevor du rausgehst." },
    words: ["might want", "may want", "can want", "will want"],
    correct: "might want",
    explanation: { en: "Suggestion: might + verb", de: "Vorschlag: might + Verb" }
  },
  {
    prompt: { en: "I ___ (have) left my keys at home.", de: "Ich ___ (haben) meine Schlüssel vielleicht zu Hause gelassen." },
    words: ["might have", "may have", "can have", "will have"],
    correct: "might have",
    explanation: { en: "Past possibility: might have + past participle", de: "Vergangene Möglichkeit: might have + Partizip Perfekt" }
  },
  {
    prompt: { en: "She ___ (be) at the library.", de: "Sie ___ (sein) vielleicht in der Bibliothek." },
    words: ["might be", "may be", "can be", "will be"],
    correct: "might be",
    explanation: { en: "Present possibility: might be", de: "Gegenwärtige Möglichkeit: might be" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "You might to check this.",
    mistakeIndex: 2,
    correction: "check",
    explanation: { en: "Might + base verb (no 'to')", de: "Might + Grundform (kein 'to')" }
  },
  {
    sentence: "He may has left.",
    mistakeIndex: 2,
    correction: "have",
    explanation: { en: "Past possibility: may have + past participle", de: "Vergangene Möglichkeit: may have + Partizip Perfekt" }
  },
  {
    sentence: "It might be raining.",
    mistakeIndex: 2,
    correction: "be",
    explanation: { en: "Might + be (not 'being') for continuous", de: "Might + be (nicht 'being') für Kontinuierlich" }
  }
];

const grammarRacerData = [
  {
    prompt: "You ___ want to see this.",
    options: ["might", "can", "will"],
    correct: "might",
    explanation: "Suggestion: might"
  },
  {
    prompt: "He ___ have forgotten.",
    options: ["might", "can", "will"],
    correct: "might",
    explanation: "Past possibility: might have"
  },
  {
    prompt: "They ___ be waiting.",
    options: ["might", "can", "will"],
    correct: "might",
    explanation: "Present possibility: might be"
  }
];

export const mayMight2 = {
  id: 'a2_g30',
  title: {
    en: 'May and Might 2 (Advanced Uses)',
    de: 'May und Might 2 (Erweiterte Verwendung)'
  },
  description: {
    en: "Advanced uses of may and might: suggestions, past possibility, and continuous forms. 'You might want to...', 'He might have left'.",
    de: "Erweiterte Verwendung von may und might: Vorschläge, vergangene Möglichkeit und Kontinuierlich-Formen. 'Du könntest vielleicht...', 'Er könnte gegangen sein'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## May and Might 2: Advanced Uses 🚀

Now that you know the basics of **may** and **might**, let's explore their advanced uses: making suggestions, talking about past possibility, and using them with continuous forms.

### Why These Advanced Uses Matter

These structures help you:
- Make polite suggestions: "You **might** want to check this."
- Talk about past possibilities: "He **might have** left already."
- Express ongoing possibilities: "She **might be** working."

### 1. Might: Making Suggestions 💡

**Might** is often used to make **polite suggestions** - giving advice in a gentle, non-forceful way.

**Structure:** Subject + **might** + want to/like to + base verb

**Examples:**
- "You **might want to** check the weather before going out." (Polite suggestion)
- "You **might like to** visit the museum." (Polite suggestion)
- "We **might want to** leave early." (Polite suggestion)

**Why "might"?** It's softer than "should" or "must" - it suggests without forcing.

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>Might want to</strong> = Polite suggestion (softer than "should")</p>
  <p>It's like saying "Maybe you want to..." in a friendly way.</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. May/Might Have: Past Possibility 🔙

**May have** and **might have** express **possibility in the past** - something that possibly happened.

**Structure:** Subject + **may/might have** + past participle

**Examples:**
- "He **might have** left already." (Maybe he left - past possibility)
- "She **may have** forgotten." (Maybe she forgot - past possibility)
- "They **might have** arrived." (Maybe they arrived - past possibility)

**Key idea:** Talking about something that **possibly happened** in the past, but you're not sure.

**Compare:**
- "He **left**." (Past Simple - you know he left)
- "He **might have left**." (Past possibility - maybe he left, you're not sure)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Important:</h3>
  <p><strong>May/Might have</strong> = Past possibility (maybe it happened)</p>
  <p>After "may/might have", use the <strong>past participle</strong> (gone, left, forgotten, etc.)</p>
</div>

### 3. May/Might Be: Present Possibility (Continuous) 🔄

**May be** and **might be** can be used with **-ing** forms to express ongoing possibility.

**Structure:** Subject + **may/might be** + verb-ing

**Examples:**
- "She **might be** working." (Maybe she is working now)
- "He **may be** sleeping." (Maybe he is sleeping now)
- "They **might be** waiting for us." (Maybe they are waiting now)

**Key idea:** Expressing possibility about something that **might be happening right now**.

<GamePlaceholder id="fixTheMistake" />

### 4. Negative Forms ❌

**Might not have** and **may not have** express possibility that something did NOT happen:

**Examples:**
- "He **might not have** received the message." (Maybe he didn't receive it)
- "She **may not have** seen us." (Maybe she didn't see us)

**Might not be** (present):
- "She **might not be** home." (Maybe she is not home)

### 5. Questions ❓

**Might** in suggestion questions:
- "**Might** you want to check this?" (Less common - usually statements)

**May/Might have** in questions:
- "**Might** he have left already?" (Asking about past possibility)
- "Do you think she **might have** forgotten?" (Asking about past possibility)

**Note:** Questions with "might have" are less common. We often use "Do you think...?" instead.

### 6. Common Patterns 📋

**Pattern 1: Suggestion**
- "You **might want to** + verb" = Polite suggestion

**Pattern 2: Past Possibility**
- "Subject + **might have** + past participle" = Maybe it happened

**Pattern 3: Present Possibility (Continuous)**
- "Subject + **might be** + verb-ing" = Maybe it's happening now

**Pattern 4: Present Possibility (State)**
- "Subject + **might be** + adjective/noun" = Maybe it's true now

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Might want to</strong> = Polite suggestion</li>
    <li><strong>Might have</strong> = Past possibility</li>
    <li><strong>Might be</strong> = Present possibility (state or continuous)</li>
  </ul>
</div>

### 7. Common Mistakes ❌

**Mistake 1:** Using "might" with "to" incorrectly
- ❌ "You might **to** check this." (Wrong!)
- ✅ "You might **want to** check this." (Correct!)

**Mistake 2:** Wrong form after "might have"
- ❌ "He might have **lefts**." (Wrong!)
- ✅ "He might have **left**." (Correct! - past participle)

**Mistake 3:** Confusing "might be" with "might being"
- ❌ "She might **being** working." (Wrong!)
- ✅ "She might **be** working." (Correct!)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: May and Might Advanced**
Choose the correct form! Remember: might have for past possibility, might be for present possibility!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Advanced May and Might</h3>
  <p className="mb-4">Write sentences using advanced forms of may and might:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One polite suggestion (use "might want to")</li>
    <li>One sentence about past possibility (use "might have")</li>
    <li>One sentence about present possibility (use "might be" + -ing)</li>
    <li>One sentence about something that might not have happened (use "might not have")</li>
  </ol>
</div>
`,
    de: `
## May und Might 2: Erweiterte Verwendung 🚀

Jetzt, da du die Grundlagen von **may** und **might** kennst, erkunden wir ihre erweiterten Verwendungen: Vorschläge machen, über vergangene Möglichkeit sprechen und sie mit Kontinuierlich-Formen verwenden.

### Warum diese erweiterten Verwendungen wichtig sind

Diese Strukturen helfen dir:
- Höfliche Vorschläge machen: "You **might** want to check this."
- Über vergangene Möglichkeiten sprechen: "He **might have** left already."
- Andauernde Möglichkeiten ausdrücken: "She **might be** working."

### 1. Might: Vorschläge machen 💡

**Might** wird oft verwendet, um **höfliche Vorschläge** zu machen - Ratschläge auf sanfte, nicht aufdringliche Weise geben.

**Struktur:** Subjekt + **might** + want to/like to + Grundform

**Beispiele:**
- "You **might want to** check the weather before going out." (Höflicher Vorschlag)
- "You **might like to** visit the museum." (Höflicher Vorschlag)
- "We **might want to** leave early." (Höflicher Vorschlag)

**Warum "might"?** Es ist sanfter als "should" oder "must" - es schlägt vor, ohne zu zwingen.

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>Might want to</strong> = Höflicher Vorschlag (sanfter als "should")</p>
  <p>Es ist wie zu sagen "Vielleicht willst du..." auf freundliche Weise.</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. May/Might Have: Vergangene Möglichkeit 🔙

**May have** und **might have** drücken **Möglichkeit in der Vergangenheit** aus - etwas, das möglicherweise passiert ist.

**Struktur:** Subjekt + **may/might have** + Partizip Perfekt

**Beispiele:**
- "He **might have** left already." (Vielleicht ist er gegangen - vergangene Möglichkeit)
- "She **may have** forgotten." (Vielleicht hat sie vergessen - vergangene Möglichkeit)
- "They **might have** arrived." (Vielleicht sind sie angekommen - vergangene Möglichkeit)

**Schlüsselidee:** Über etwas sprechen, das **möglicherweise in der Vergangenheit** passiert ist, aber du bist dir nicht sicher.

**Vergleiche:**
- "He **left**." (Past Simple - du weißt, dass er gegangen ist)
- "He **might have left**." (Vergangene Möglichkeit - vielleicht ist er gegangen, du bist dir nicht sicher)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Wichtig:</h3>
  <p><strong>May/Might have</strong> = Vergangene Möglichkeit (vielleicht ist es passiert)</p>
  <p>Nach "may/might have" verwende das <strong>Partizip Perfekt</strong> (gone, left, forgotten, etc.)</p>
</div>

### 3. May/Might Be: Gegenwärtige Möglichkeit (Kontinuierlich) 🔄

**May be** und **might be** können mit **-ing**-Formen verwendet werden, um andauernde Möglichkeit auszudrücken.

**Struktur:** Subjekt + **may/might be** + Verb-ing

**Beispiele:**
- "She **might be** working." (Vielleicht arbeitet sie gerade)
- "He **may be** sleeping." (Vielleicht schläft er gerade)
- "They **might be** waiting for us." (Vielleicht warten sie auf uns)

**Schlüsselidee:** Möglichkeit über etwas ausdrücken, das **vielleicht gerade passiert**.

<GamePlaceholder id="fixTheMistake" />

### 4. Verneinungsformen ❌

**Might not have** und **may not have** drücken die Möglichkeit aus, dass etwas NICHT passiert ist:

**Beispiele:**
- "He **might not have** received the message." (Vielleicht hat er die Nachricht nicht erhalten)
- "She **may not have** seen us." (Vielleicht hat sie uns nicht gesehen)

**Might not be** (Gegenwart):
- "She **might not be** home." (Vielleicht ist sie nicht zu Hause)

### 5. Fragen ❓

**Might** in Vorschlagsfragen:
- "**Might** you want to check this?" (Weniger üblich - normalerweise Aussagen)

**May/Might have** in Fragen:
- "**Might** he have left already?" (Nach vergangener Möglichkeit fragen)
- "Do you think she **might have** forgotten?" (Nach vergangener Möglichkeit fragen)

**Hinweis:** Fragen mit "might have" sind weniger üblich. Wir verwenden oft "Do you think...?" stattdessen.

### 6. Häufige Muster 📋

**Muster 1: Vorschlag**
- "You **might want to** + Verb" = Höflicher Vorschlag

**Muster 2: Vergangene Möglichkeit**
- "Subjekt + **might have** + Partizip Perfekt" = Vielleicht ist es passiert

**Muster 3: Gegenwärtige Möglichkeit (Kontinuierlich)**
- "Subjekt + **might be** + Verb-ing" = Vielleicht passiert es gerade

**Muster 4: Gegenwärtige Möglichkeit (Zustand)**
- "Subjekt + **might be** + Adjektiv/Nomen" = Vielleicht ist es jetzt wahr

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Might want to</strong> = Höflicher Vorschlag</li>
    <li><strong>Might have</strong> = Vergangene Möglichkeit</li>
    <li><strong>Might be</strong> = Gegenwärtige Möglichkeit (Zustand oder kontinuierlich)</li>
  </ul>
</div>

### 7. Häufige Fehler ❌

**Fehler 1:** "Might" mit "to" falsch verwenden
- ❌ "You might **to** check this." (Falsch!)
- ✅ "You might **want to** check this." (Richtig!)

**Fehler 2:** Falsche Form nach "might have"
- ❌ "He might have **lefts**." (Falsch!)
- ✅ "He might have **left**." (Richtig! - Partizip Perfekt)

**Fehler 3:** "Might be" mit "might being" verwechseln
- ❌ "She might **being** working." (Falsch!)
- ✅ "She might **be** working." (Richtig!)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: May und Might Erweitert**
Wähle die richtige Form! Denk daran: might have für vergangene Möglichkeit, might be für gegenwärtige Möglichkeit!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Erweiterte May und Might</h3>
  <p className="mb-4">Schreibe Sätze mit erweiterten Formen von may und might:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein höflicher Vorschlag (verwende "might want to")</li>
    <li>Ein Satz über vergangene Möglichkeit (verwende "might have")</li>
    <li>Ein Satz über gegenwärtige Möglichkeit (verwende "might be" + -ing)</li>
    <li>Ein Satz über etwas, das vielleicht nicht passiert ist (verwende "might not have")</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'May und Might 2 - Erweiterte Verwendung',
      description: 'Schreibe Sätze mit erweiterten Formen von may und might.',
      checklist: [
        { text: 'Höflicher Vorschlag (might want to)', checked: false },
        { text: 'Satz über vergangene Möglichkeit (might have)', checked: false },
        { text: 'Satz über gegenwärtige Möglichkeit (might be + -ing)', checked: false },
        { text: 'Satz über etwas, das vielleicht nicht passiert ist (might not have)', checked: false }
      ]
    },
    en: {
      title: 'May and Might 2 - Advanced Uses',
      description: 'Write sentences using advanced forms of may and might.',
      checklist: [
        { text: 'Polite suggestion (might want to)', checked: false },
        { text: 'Sentence about past possibility (might have)', checked: false },
        { text: 'Sentence about present possibility (might be + -ing)', checked: false },
        { text: 'Sentence about something that might not have happened (might not have)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

