import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I studied ___ the summer.", de: "Ich habe ___ den Sommer studiert." },
    words: ["during", "for", "while", "in"],
    correct: "during",
    explanation: { en: "During = throughout a period (during the summer = throughout summer)", de: "During = während einer Periode (during the summer = während des Sommers)" }
  },
  {
    prompt: { en: "I studied ___ three hours.", de: "Ich habe ___ drei Stunden studiert." },
    words: ["for", "during", "while", "in"],
    correct: "for",
    explanation: { en: "For = duration of time (for three hours = duration)", de: "For = Dauer der Zeit (for three hours = Dauer)" }
  },
  {
    prompt: { en: "I studied ___ my friend was sleeping.", de: "Ich habe studiert, ___ mein Freund schlief." },
    words: ["while", "during", "for", "in"],
    correct: "while",
    explanation: { en: "While = at the same time as (while = during the time that)", de: "While = zur gleichen Zeit wie (while = während der Zeit, dass)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I studied during three hours.",
    mistakeIndex: 2,
    correction: "for",
    explanation: { en: "For = duration (for three hours). During = throughout a period (during the summer)", de: "For = Dauer (for three hours). During = während einer Periode (during the summer)" }
  },
  {
    sentence: "I studied for the summer.",
    mistakeIndex: 2,
    correction: "during",
    explanation: { en: "During = throughout a period (during the summer). For = duration (for three hours)", de: "During = während einer Periode (during the summer). For = Dauer (for three hours)" }
  },
  {
    sentence: "I studied during my friend was sleeping.",
    mistakeIndex: 2,
    correction: "while",
    explanation: { en: "While = with clause (while + subject + verb). During = with noun (during + noun)", de: "While = mit Satz (while + Subjekt + Verb). During = mit Nomen (during + Nomen)" }
  }
];

const grammarRacerData = [
  {
    prompt: "I studied ___ the summer.",
    options: ["during", "for", "while"],
    correct: "during",
    explanation: "During = throughout a period"
  },
  {
    prompt: "I studied ___ three hours.",
    options: ["for", "during", "while"],
    correct: "for",
    explanation: "For = duration"
  },
  {
    prompt: "I studied ___ my friend was sleeping.",
    options: ["while", "during", "for"],
    correct: "while",
    explanation: "While = at the same time"
  }
];

export const duringForWhile = {
  id: 'a2_g119',
  title: {
    en: 'During, For, While (Time)',
    de: 'During, For, While (Zeit)'
  },
  description: {
    en: "Talking about time periods. 'I studied during the summer', 'I studied for three hours', 'I studied while my friend was sleeping'.",
    de: "Über Zeitperioden sprechen. 'Ich habe während des Sommers studiert', 'Ich habe drei Stunden lang studiert', 'Ich habe studiert, während mein Freund schlief'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## During, For, and While: Talking About Time ⏰

**During, for, and while** are all used to talk about time, but they have different meanings and uses. Understanding the difference helps you express time relationships correctly.

### Why Do We Need All Three?

Think about these situations:
- "I studied **during** the summer." (Throughout a period - during the summer months)
- "I studied **for** three hours." (Duration - how long)
- "I studied **while** my friend was sleeping." (At the same time as - simultaneous actions)

Each expresses time, but in different ways!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>During</strong> = Throughout a period (during + noun)</p>
  <p><strong>For</strong> = Duration (for + period of time)</p>
  <p><strong>While</strong> = At the same time as (while + subject + verb)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. During: Throughout a Period 📅

**During** means "throughout a period" or "in the course of". It's used with **nouns** (not verbs).

**Structure:** during + noun

**Examples:**
- "I studied **during** the summer." (Throughout the summer period)
- "She called **during** the meeting." (In the course of the meeting)
- "We met **during** the holiday." (Throughout the holiday period)
- "It rained **during** the night." (Throughout the night)

**Key idea:** During = throughout a period, used with nouns!

**Note:** "During" is followed by a noun, not a verb clause!

### 2. For: Duration of Time ⏱️

**For** means "duration" - how long something lasts. It's used with **periods of time**.

**Structure:** for + period of time

**Examples:**
- "I studied **for** three hours." (Duration: three hours)
- "She lived there **for** five years." (Duration: five years)
- "We waited **for** a long time." (Duration: a long time)
- "He worked **for** the whole day." (Duration: the whole day)

**Key idea:** For = duration, how long something lasts!

**Common time expressions with "for":**
- "for three hours", "for five years", "for a week", "for a long time"

### 3. While: At the Same Time As 🔄

**While** means "at the same time as" or "during the time that". It's used with **verb clauses** (subject + verb).

**Structure:** while + subject + verb

**Examples:**
- "I studied **while** my friend was sleeping." (At the same time: studying and sleeping)
- "She called **while** I was cooking." (At the same time: calling and cooking)
- "We met **while** we were traveling." (At the same time: meeting and traveling)
- "It rained **while** we were outside." (At the same time: raining and being outside)

**Key idea:** While = at the same time as, used with verb clauses!

**Note:** "While" is followed by a subject + verb, not just a noun!

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Important:</h3>
  <p><strong>During</strong> = Throughout a period (during + noun)</p>
  <p><strong>For</strong> = Duration (for + period of time)</p>
  <p><strong>While</strong> = At the same time (while + subject + verb)</p>
  <p>✅ "I studied <strong>during</strong> the summer." (Noun)</p>
  <p>✅ "I studied <strong>for</strong> three hours." (Duration)</p>
  <p>✅ "I studied <strong>while</strong> my friend was sleeping." (Clause)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. During vs For vs While: Comparison 🔄

| Word | Meaning | Structure | Example |
|------|---------|-----------|---------|
| **During** | Throughout a period | during + noun | during the summer |
| **For** | Duration | for + period of time | for three hours |
| **While** | At the same time | while + subject + verb | while I was studying |

**Examples:**
- "I studied **during** the summer." (Throughout summer - noun)
- "I studied **for** three hours." (Duration - how long)
- "I studied **while** my friend was sleeping." (At the same time - clause)

### 5. Common Patterns 📝

**During + Noun:**
- "during the summer", "during the meeting", "during the holiday", "during the night"

**For + Period of Time:**
- "for three hours", "for five years", "for a week", "for a long time"

**While + Clause:**
- "while I was studying", "while she was cooking", "while we were traveling"

**Important:** Don't confuse "during" with "while"!
- ❌ "I studied **during** my friend was sleeping." (Wrong! - during + noun, not clause)
- ✅ "I studied **while** my friend was sleeping." (Correct! - while + clause)

### 6. Common Mistakes ❌

**Mistake 1:** Using "during" with a clause
- ❌ "I studied **during** my friend was sleeping." (Wrong! - during + noun)
- ✅ "I studied **while** my friend was sleeping." (Correct! - while + clause)

**Mistake 2:** Using "for" with a period name
- ❌ "I studied **for** the summer." (Wrong! - for = duration, not period)
- ✅ "I studied **during** the summer." (Correct! - during = throughout period)

**Mistake 3:** Using "while" with a noun
- ❌ "I studied **while** the summer." (Wrong! - while + clause)
- ✅ "I studied **during** the summer." (Correct! - during + noun)

**Mistake 4:** Confusing "for" with "during"
- ❌ "I studied **during** three hours." (Wrong! - during = throughout period)
- ✅ "I studied **for** three hours." (Correct! - for = duration)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>During</strong> = Throughout a period (during + noun)</li>
    <li><strong>For</strong> = Duration (for + period of time)</li>
    <li><strong>While</strong> = At the same time (while + subject + verb)</li>
    <li>✅ "during the summer" (noun) vs "for three hours" (duration) vs "while I was studying" (clause)</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: During, For, While**
Choose the correct word! Remember: during + noun, for + duration, while + clause!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 During, For, While</h3>
  <p className="mb-4">Write sentences using during, for, and while:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence with "during" (throughout a period, with noun)</li>
    <li>One sentence with "for" (duration, with period of time)</li>
    <li>One sentence with "while" (at the same time, with clause)</li>
    <li>Write your own sentence about time</li>
  </ol>
</div>
`,
    de: `
## During, For und While: Über Zeit sprechen ⏰

**During, for und while** werden alle verwendet, um über Zeit zu sprechen, aber sie haben unterschiedliche Bedeutungen und Verwendungen. Den Unterschied zu verstehen hilft dir, Zeitbeziehungen korrekt auszudrücken.

### Warum brauchen wir alle drei?

Denk an diese Situationen:
- "Ich habe **während** des Sommers studiert." (Während einer Periode - während der Sommermonate)
- "Ich habe **drei Stunden lang** studiert." (Dauer - wie lange)
- "Ich habe studiert, **während** mein Freund schlief." (Zur gleichen Zeit - gleichzeitige Handlungen)

Jede drückt Zeit aus, aber auf unterschiedliche Weise!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>During</strong> = Während einer Periode (during + Nomen)</p>
  <p><strong>For</strong> = Dauer (for + Zeitdauer)</p>
  <p><strong>While</strong> = Zur gleichen Zeit wie (while + Subjekt + Verb)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. During: Während einer Periode 📅

**During** bedeutet "während einer Periode" oder "im Verlauf von". Es wird mit **Nomen** verwendet (nicht mit Verben).

**Struktur:** during + Nomen

**Beispiele:**
- "Ich habe **während** des Sommers studiert." (Während der Sommerperiode)
- "Sie rief **während** des Meetings an." (Im Verlauf des Meetings)
- "Wir trafen uns **während** des Urlaubs." (Während der Urlaubsperiode)
- "Es regnete **während** der Nacht." (Während der Nacht)

**Schlüsselidee:** During = während einer Periode, wird mit Nomen verwendet!

**Hinweis:** "During" wird von einem Nomen gefolgt, nicht von einem Verb-Satz!

### 2. For: Dauer der Zeit ⏱️

**For** bedeutet "Dauer" - wie lange etwas dauert. Es wird mit **Zeitdauern** verwendet.

**Struktur:** for + Zeitdauer

**Beispiele:**
- "Ich habe **drei Stunden lang** studiert." (Dauer: drei Stunden)
- "Sie lebte dort **fünf Jahre lang**." (Dauer: fünf Jahre)
- "Wir warteten **lange**." (Dauer: lange Zeit)
- "Er arbeitete **den ganzen Tag lang**." (Dauer: der ganze Tag)

**Schlüsselidee:** For = Dauer, wie lange etwas dauert!

**Häufige Zeitausdrücke mit "for":**
- "for three hours", "for five years", "for a week", "for a long time"

### 3. While: Zur gleichen Zeit 🔄

**While** bedeutet "zur gleichen Zeit wie" oder "während der Zeit, dass". Es wird mit **Verb-Sätzen** verwendet (Subjekt + Verb).

**Struktur:** while + Subjekt + Verb

**Beispiele:**
- "Ich habe studiert, **während** mein Freund schlief." (Zur gleichen Zeit: studieren und schlafen)
- "Sie rief an, **während** ich kochte." (Zur gleichen Zeit: anrufen und kochen)
- "Wir trafen uns, **während** wir reisten." (Zur gleichen Zeit: treffen und reisen)
- "Es regnete, **während** wir draußen waren." (Zur gleichen Zeit: regnen und draußen sein)

**Schlüsselidee:** While = zur gleichen Zeit wie, wird mit Verb-Sätzen verwendet!

**Hinweis:** "While" wird von einem Subjekt + Verb gefolgt, nicht nur von einem Nomen!

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Wichtig:</h3>
  <p><strong>During</strong> = Während einer Periode (during + Nomen)</p>
  <p><strong>For</strong> = Dauer (for + Zeitdauer)</p>
  <p><strong>While</strong> = Zur gleichen Zeit (while + Subjekt + Verb)</p>
  <p>✅ "Ich habe <strong>während</strong> des Sommers studiert." (Nomen)</p>
  <p>✅ "Ich habe <strong>drei Stunden lang</strong> studiert." (Dauer)</p>
  <p>✅ "Ich habe studiert, <strong>während</strong> mein Freund schlief." (Satz)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. During vs For vs While: Vergleich 🔄

| Wort | Bedeutung | Struktur | Beispiel |
|------|-----------|----------|----------|
| **During** | Während einer Periode | during + Nomen | during the summer |
| **For** | Dauer | for + Zeitdauer | for three hours |
| **While** | Zur gleichen Zeit | while + Subjekt + Verb | while I was studying |

**Beispiele:**
- "Ich habe **während** des Sommers studiert." (Während des Sommers - Nomen)
- "Ich habe **drei Stunden lang** studiert." (Dauer - wie lange)
- "Ich habe studiert, **während** mein Freund schlief." (Zur gleichen Zeit - Satz)

### 5. Häufige Muster 📝

**During + Nomen:**
- "during the summer", "during the meeting", "during the holiday", "during the night"

**For + Zeitdauer:**
- "for three hours", "for five years", "for a week", "for a long time"

**While + Satz:**
- "while I was studying", "while she was cooking", "while we were traveling"

**Wichtig:** Verwechsle nicht "during" mit "while"!
- ❌ "Ich habe **während** mein Freund schlief studiert." (Falsch! - during + Nomen, nicht Satz)
- ✅ "Ich habe studiert, **während** mein Freund schlief." (Richtig! - while + Satz)

### 6. Häufige Fehler ❌

**Fehler 1:** "During" mit einem Satz verwenden
- ❌ "Ich habe **während** mein Freund schlief studiert." (Falsch! - during + Nomen)
- ✅ "Ich habe studiert, **während** mein Freund schlief." (Richtig! - while + Satz)

**Fehler 2:** "For" mit einem Periodennamen verwenden
- ❌ "Ich habe **drei Stunden lang** den Sommer studiert." (Falsch! - for = Dauer, nicht Periode)
- ✅ "Ich habe **während** des Sommers studiert." (Richtig! - during = während Periode)

**Fehler 3:** "While" mit einem Nomen verwenden
- ❌ "Ich habe **während** der Sommer studiert." (Falsch! - while + Satz)
- ✅ "Ich habe **während** des Sommers studiert." (Richtig! - during + Nomen)

**Fehler 4:** "For" mit "during" verwechseln
- ❌ "Ich habe **während** drei Stunden studiert." (Falsch! - during = während Periode)
- ✅ "Ich habe **drei Stunden lang** studiert." (Richtig! - for = Dauer)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>During</strong> = Während einer Periode (during + Nomen)</li>
    <li><strong>For</strong> = Dauer (for + Zeitdauer)</li>
    <li><strong>While</strong> = Zur gleichen Zeit (while + Subjekt + Verb)</li>
    <li>✅ "during the summer" (Nomen) vs "for three hours" (Dauer) vs "while I was studying" (Satz)</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: During, For, While**
Wähle das richtige Wort! Denk daran: during + Nomen, for + Dauer, while + Satz!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 During, For, While</h3>
  <p className="mb-4">Schreibe Sätze mit during, for und while:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz mit "during" (während einer Periode, mit Nomen)</li>
    <li>Ein Satz mit "for" (Dauer, mit Zeitdauer)</li>
    <li>Ein Satz mit "while" (zur gleichen Zeit, mit Satz)</li>
    <li>Schreibe deinen eigenen Satz über Zeit</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'During, For, While',
      description: 'Schreibe Sätze mit during, for und while über Zeitperioden.',
      checklist: [
        { text: 'Satz mit "during" (während einer Periode, mit Nomen)', checked: false },
        { text: 'Satz mit "for" (Dauer, mit Zeitdauer)', checked: false },
        { text: 'Satz mit "while" (zur gleichen Zeit, mit Satz)', checked: false },
        { text: 'Eigener Satz über Zeit', checked: false }
      ]
    },
    en: {
      title: 'During, For, While',
      description: 'Write sentences using during, for, and while about time periods.',
      checklist: [
        { text: 'Sentence with "during" (throughout a period, with noun)', checked: false },
        { text: 'Sentence with "for" (duration, with period of time)', checked: false },
        { text: 'Sentence with "while" (at the same time, with clause)', checked: false },
        { text: 'Own sentence about time', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


