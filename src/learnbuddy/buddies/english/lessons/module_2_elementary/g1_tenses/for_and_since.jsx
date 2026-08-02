import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I have lived here ___ 5 years.", de: "Ich wohne hier schon ___ 5 Jahren." },
    words: ["for", "since", "during", "from"],
    correct: "for",
    explanation: { en: "'For' is used with periods of time (5 years = duration)", de: "'For' wird mit Zeitspannen verwendet (5 Jahre = Dauer)" }
  },
  {
    prompt: { en: "She has been working ___ 2020.", de: "Sie arbeitet dort schon ___ 2020." },
    words: ["since", "for", "during", "from"],
    correct: "since",
    explanation: { en: "'Since' is used with points in time (2020 = starting point)", de: "'Since' wird mit Zeitpunkten verwendet (2020 = Ausgangspunkt)" }
  },
  {
    prompt: { en: "We have known each other ___ a long time.", de: "Wir kennen uns schon ___ langer Zeit." },
    words: ["for", "since", "during", "from"],
    correct: "for",
    explanation: { en: "'For' with periods: a long time = duration", de: "'For' mit Zeitspannen: a long time = Dauer" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I have been waiting since 2 hours.",
    mistakeIndex: 3,
    correction: "for",
    explanation: { en: "'Since' is for points in time. '2 hours' is a period - use 'for'", de: "'Since' ist für Zeitpunkte. '2 hours' ist eine Zeitspanne - verwende 'for'" }
  },
  {
    sentence: "She has lived here for 2019.",
    mistakeIndex: 3,
    correction: "since",
    explanation: { en: "'For' is for periods. '2019' is a point in time - use 'since'", de: "'For' ist für Zeitspannen. '2019' ist ein Zeitpunkt - verwende 'since'" }
  },
  {
    sentence: "We have been friends for last year.",
    mistakeIndex: 3,
    correction: "since",
    explanation: { en: "'Last year' is a point in time - use 'since'", de: "'Last year' ist ein Zeitpunkt - verwende 'since'" }
  }
];

const grammarRacerData = [
  {
    prompt: "I have been studying ___ 3 months.",
    options: ["for", "since", "during"],
    correct: "for",
    explanation: "Period: for 3 months"
  },
  {
    prompt: "He has worked here ___ January.",
    options: ["since", "for", "during"],
    correct: "since",
    explanation: "Point in time: since January"
  },
  {
    prompt: "They have been waiting ___ a long time.",
    options: ["for", "since", "from"],
    correct: "for",
    explanation: "Period: for a long time"
  }
];

export const forAndSince = {
  id: 'a2_g12',
  title: {
    en: 'For and Since - When ... ? and How Long ... ?',
    de: 'For und Since - Wann ... ? und Wie Lange ... ?'
  },
  description: {
    en: "Understanding the difference between 'for' (duration) and 'since' (starting point) when talking about time.",
    de: "Den Unterschied zwischen 'for' (Dauer) und 'since' (Ausgangspunkt) verstehen, wenn man über Zeit spricht."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## For and Since: Duration vs Starting Point ⏰

When you talk about how long something has been happening, you need to choose between **for** and **since**. This is one of the most common mistakes English learners make! The key is understanding the difference between a **period of time** (duration) and a **point in time** (starting point).

### The Core Difference

**FOR** = Duration (how long) - a period of time
**SINCE** = Starting point (when it began) - a point in time

Think of it like this:
- "I have been living here **for 5 years**." → The duration is 5 years
- "I have been living here **since 2019**." → The starting point was 2019

### 1. FOR = Period of Time (Duration) 📏

**For** is used with **periods of time** - answers the question "How long?"

**Common periods:**
- for 5 minutes / for 2 hours / for 3 days
- for a week / for 2 weeks / for a month
- for 6 months / for a year / for 5 years
- for a long time / for ages / for a while

**Examples:**
- "I have been waiting **for 2 hours**." (Duration: 2 hours)
- "She has lived here **for 5 years**." (Duration: 5 years)
- "We have been friends **for a long time**." (Duration: a long time)
- "He has been studying **for 3 months**." (Duration: 3 months)

**Pattern:** for + period of time

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>For</strong> answers "How long?" - it tells you the <strong>duration</strong>.</p>
  <p>If you can count it (5 minutes, 2 years) or describe it as a period (a long time), use <strong>for</strong>.</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. SINCE = Point in Time (Starting Point) 📅

**Since** is used with **points in time** - answers the question "When did it start?"

**Common points in time:**
- since 2020 / since 2019 / since last year
- since January / since Monday / since last week
- since this morning / since yesterday / since last month
- since I was a child / since I arrived / since we met

**Examples:**
- "I have been waiting **since 3pm**." (Started at 3pm)
- "She has lived here **since 2020**." (Started in 2020)
- "We have been friends **since we were children**." (Started when we were children)
- "He has been studying **since January**." (Started in January)

**Pattern:** since + point in time

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Remember:</h3>
  <p><strong>Since</strong> answers "When did it start?" - it tells you the <strong>starting point</strong>.</p>
  <p>If it's a specific time, date, or event, use <strong>since</strong>.</p>
</div>

### 3. The Key Rule: Period vs Point 🎯

The easiest way to remember:

| Type | Use | Examples |
|------|-----|----------|
| **Period** (Duration) | **FOR** | for 5 minutes, for 2 years, for a long time |
| **Point** (Starting) | **SINCE** | since 2020, since Monday, since I arrived |

**Test yourself:**
- "5 years" → Is this a period or a point? → **Period** → Use **for**
- "2020" → Is this a period or a point? → **Point** → Use **since**
- "last week" → Is this a period or a point? → **Point** → Use **since**
- "2 hours" → Is this a period or a point? → **Period** → Use **for**

<GamePlaceholder id="fixTheMistake" />

### 4. Common Mistakes ❌

**Mistake 1:** Using "since" with periods
- ❌ "I have been waiting **since 2 hours**." (Wrong! 2 hours is a period)
- ✅ "I have been waiting **for 2 hours**." (Correct!)

**Mistake 2:** Using "for" with points in time
- ❌ "I have lived here **for 2020**." (Wrong! 2020 is a point)
- ✅ "I have lived here **since 2020**." (Correct!)

**Mistake 3:** Confusing "last year" / "last week"
- ❌ "I have been here **for last year**." (Wrong! "last year" is a point)
- ✅ "I have been here **since last year**." (Correct!)
- ✅ "I have been here **for a year**." (Also correct - "a year" is a period)

### 5. Questions: When vs How Long? ❓

**"When...?"** asks for a **point in time** → Answer with **since**
- Q: "When did you start working here?"
- A: "I started working here **in 2020**." (Past Simple) OR "I **have been working** here **since 2020**." (Present Perfect)

**"How long...?"** asks for a **duration** → Answer with **for**
- Q: "How long have you been working here?"
- A: "I **have been working** here **for 5 years**."

**Both questions can have the same answer:**
- "I have been working here **since 2020**." (Starting point)
- "I have been working here **for 3 years**." (Duration - if it's now 2023)

### 6. Converting Between For and Since 🔄

You can often say the same thing two ways:

**Same meaning, different structure:**
- "I have been living here **for 5 years**." (Duration)
- "I have been living here **since 2019**." (Starting point - if it's now 2024)

**Both are correct!** Choose based on what information you want to emphasize:
- Use **for** when you want to emphasize **how long** (duration)
- Use **since** when you want to emphasize **when it started** (starting point)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: For or Since?**
Choose the correct word! Remember: period = for, point = since!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Your Timeline</h3>
  <p className="mb-4">Write sentences about your life using 'for' and 'since':</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence with "for" + a period of time (e.g., "I have been studying English for 2 years")</li>
    <li>One sentence with "since" + a point in time (e.g., "I have lived here since 2020")</li>
    <li>One sentence with "since" + an event (e.g., "I have known him since we were children")</li>
    <li>Convert one of your "for" sentences to use "since" instead (or vice versa)</li>
  </ol>
</div>
`,
    de: `
## For und Since: Dauer vs Ausgangspunkt ⏰

Wenn du darüber sprichst, wie lange etwas schon passiert, musst du zwischen **for** und **since** wählen. Das ist einer der häufigsten Fehler, den Englischlernende machen! Der Schlüssel ist, den Unterschied zwischen einer **Zeitspanne** (Dauer) und einem **Zeitpunkt** (Ausgangspunkt) zu verstehen.

### Der Kernunterschied

**FOR** = Dauer (wie lange) - eine Zeitspanne
**SINCE** = Ausgangspunkt (wann es begann) - ein Zeitpunkt

Stell es dir so vor:
- "I have been living here **for 5 years**." → Die Dauer ist 5 Jahre
- "I have been living here **since 2019**." → Der Ausgangspunkt war 2019

### 1. FOR = Zeitspanne (Dauer) 📏

**For** wird mit **Zeitspannen** verwendet - beantwortet die Frage "Wie lange?"

**Häufige Zeitspannen:**
- for 5 minutes / for 2 hours / for 3 days
- for a week / for 2 weeks / for a month
- for 6 months / for a year / for 5 years
- for a long time / for ages / for a while

**Beispiele:**
- "I have been waiting **for 2 hours**." (Dauer: 2 Stunden)
- "She has lived here **for 5 years**." (Dauer: 5 Jahre)
- "We have been friends **for a long time**." (Dauer: eine lange Zeit)
- "He has been studying **for 3 months**." (Dauer: 3 Monate)

**Muster:** for + Zeitspanne

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>For</strong> beantwortet "Wie lange?" - es sagt dir die <strong>Dauer</strong>.</p>
  <p>Wenn du es zählen kannst (5 Minuten, 2 Jahre) oder als Zeitspanne beschreiben kannst (eine lange Zeit), verwende <strong>for</strong>.</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. SINCE = Zeitpunkt (Ausgangspunkt) 📅

**Since** wird mit **Zeitpunkten** verwendet - beantwortet die Frage "Wann hat es angefangen?"

**Häufige Zeitpunkte:**
- since 2020 / since 2019 / since last year
- since January / since Monday / since last week
- since this morning / since yesterday / since last month
- since I was a child / since I arrived / since we met

**Beispiele:**
- "I have been waiting **since 3pm**." (Begann um 15 Uhr)
- "She has lived here **since 2020**." (Begann 2020)
- "We have been friends **since we were children**." (Begann, als wir Kinder waren)
- "He has been studying **since January**." (Begann im Januar)

**Muster:** since + Zeitpunkt

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Merke dir:</h3>
  <p><strong>Since</strong> beantwortet "Wann hat es angefangen?" - es sagt dir den <strong>Ausgangspunkt</strong>.</p>
  <p>Wenn es eine spezifische Zeit, ein Datum oder ein Ereignis ist, verwende <strong>since</strong>.</p>
</div>

### 3. Die Hauptregel: Zeitspanne vs Zeitpunkt 🎯

Der einfachste Weg, sich zu erinnern:

| Typ | Verwendung | Beispiele |
|------|------------|----------|
| **Zeitspanne** (Dauer) | **FOR** | for 5 minutes, for 2 years, for a long time |
| **Zeitpunkt** (Ausgangspunkt) | **SINCE** | since 2020, since Monday, since I arrived |

**Teste dich selbst:**
- "5 years" → Ist das eine Zeitspanne oder ein Zeitpunkt? → **Zeitspanne** → Verwende **for**
- "2020" → Ist das eine Zeitspanne oder ein Zeitpunkt? → **Zeitpunkt** → Verwende **since**
- "last week" → Ist das eine Zeitspanne oder ein Zeitpunkt? → **Zeitpunkt** → Verwende **since**
- "2 hours" → Ist das eine Zeitspanne oder ein Zeitpunkt? → **Zeitspanne** → Verwende **for**

<GamePlaceholder id="fixTheMistake" />

### 4. Häufige Fehler ❌

**Fehler 1:** "Since" mit Zeitspannen verwenden
- ❌ "I have been waiting **since 2 hours**." (Falsch! 2 Stunden ist eine Zeitspanne)
- ✅ "I have been waiting **for 2 hours**." (Richtig!)

**Fehler 2:** "For" mit Zeitpunkten verwenden
- ❌ "I have lived here **for 2020**." (Falsch! 2020 ist ein Zeitpunkt)
- ✅ "I have lived here **since 2020**." (Richtig!)

**Fehler 3:** "Last year" / "last week" verwechseln
- ❌ "I have been here **for last year**." (Falsch! "last year" ist ein Zeitpunkt)
- ✅ "I have been here **since last year**." (Richtig!)
- ✅ "I have been here **for a year**." (Auch richtig - "a year" ist eine Zeitspanne)

### 5. Fragen: Wann vs Wie Lange? ❓

**"When...?"** fragt nach einem **Zeitpunkt** → Antwort mit **since**
- F: "When did you start working here?" (Wann hast du hier angefangen zu arbeiten?)
- A: "I started working here **in 2020**." (Past Simple) ODER "I **have been working** here **since 2020**." (Present Perfect)

**"How long...?"** fragt nach einer **Dauer** → Antwort mit **for**
- F: "How long have you been working here?" (Wie lange arbeitest du hier schon?)
- A: "I **have been working** here **for 5 years**."

**Beide Fragen können die gleiche Antwort haben:**
- "I have been working here **since 2020**." (Ausgangspunkt)
- "I have been working here **for 3 years**." (Dauer - wenn es jetzt 2023 ist)

### 6. Umwandeln zwischen For und Since 🔄

Du kannst oft dasselbe auf zwei Arten sagen:

**Gleiche Bedeutung, unterschiedliche Struktur:**
- "I have been living here **for 5 years**." (Dauer)
- "I have been living here **since 2019**." (Ausgangspunkt - wenn es jetzt 2024 ist)

**Beide sind richtig!** Wähle basierend darauf, welche Information du betonen willst:
- Verwende **for**, wenn du betonen willst, **wie lange** (Dauer)
- Verwende **since**, wenn du betonen willst, **wann es angefangen hat** (Ausgangspunkt)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: For oder Since?**
Wähle das richtige Wort! Denk daran: Zeitspanne = for, Zeitpunkt = since!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Deine Zeitleiste</h3>
  <p className="mb-4">Schreibe Sätze über dein Leben mit 'for' und 'since':</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz mit "for" + einer Zeitspanne (z.B. "I have been studying English for 2 years")</li>
    <li>Ein Satz mit "since" + einem Zeitpunkt (z.B. "I have lived here since 2020")</li>
    <li>Ein Satz mit "since" + einem Ereignis (z.B. "I have known him since we were children")</li>
    <li>Wandle einen deiner "for"-Sätze um, um "since" zu verwenden (oder umgekehrt)</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'For und Since',
      description: 'Schreibe Sätze mit for und since über dein Leben.',
      checklist: [
        { text: 'Satz mit "for" + Zeitspanne', checked: false },
        { text: 'Satz mit "since" + Zeitpunkt', checked: false },
        { text: 'Satz mit "since" + Ereignis', checked: false },
        { text: 'Umwandlung eines Satzes (for ↔ since)', checked: false }
      ]
    },
    en: {
      title: 'For and Since',
      description: 'Write sentences with for and since about your life.',
      checklist: [
        { text: 'Sentence with "for" + period of time', checked: false },
        { text: 'Sentence with "since" + point in time', checked: false },
        { text: 'Sentence with "since" + event', checked: false },
        { text: 'Convert one sentence (for ↔ since)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


