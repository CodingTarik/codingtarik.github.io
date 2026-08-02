import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ (know) him for 5 years.", de: "Ich ___ (kennen) ihn seit 5 Jahren." },
    words: ["have known", "knew", "know", "am knowing"],
    correct: "have known",
    explanation: { en: "Duration (for 5 years) → Present Perfect", de: "Dauer (for 5 years) → Present Perfect" }
  },
  {
    prompt: { en: "I ___ (know) him when we were children.", de: "Ich ___ (kennen) ihn, als wir Kinder waren." },
    words: ["knew", "have known", "know", "am knowing"],
    correct: "knew",
    explanation: { en: "Specific time period (when we were children) → Past Simple", de: "Spezifische Zeitperiode (als wir Kinder waren) → Past Simple" }
  },
  {
    prompt: { en: "This is the best book I ___ (ever read).", de: "Das ist das beste Buch, das ich ___ (jemals lesen)." },
    words: ["have ever read", "ever read", "read", "am reading"],
    correct: "have ever read",
    explanation: { en: "Ever + superlative → Present Perfect", de: "Ever + Superlativ → Present Perfect" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I knew him for 10 years.",
    mistakeIndex: 1,
    correction: "have known",
    explanation: { en: "Duration (for 10 years) → Present Perfect: have known", de: "Dauer (for 10 years) → Present Perfect: have known" }
  },
  {
    sentence: "This is the first time I see this movie.",
    mistakeIndex: 4,
    correction: "have seen",
    explanation: { en: "'This is the first time' → Present Perfect: have seen", de: "'This is the first time' → Present Perfect: have seen" }
  },
  {
    sentence: "I have been to London three times last year.",
    mistakeIndex: 4,
    correction: "went",
    explanation: { en: "Specific time (last year) → Past Simple: I went", de: "Spezifische Zeit (letztes Jahr) → Past Simple: I went" }
  }
];

const grammarRacerData = [
  {
    prompt: "I ___ him since 2020.",
    options: ["have known", "knew", "know"],
    correct: "have known",
    explanation: "Duration with since: have known"
  },
  {
    prompt: "This is the best meal I ___.",
    options: ["have ever had", "ever had", "had"],
    correct: "have ever had",
    explanation: "Superlative + ever: have ever had"
  },
  {
    prompt: "I ___ three times yesterday.",
    options: ["went", "have gone", "go"],
    correct: "went",
    explanation: "Specific time: went"
  }
];

export const presentPerfectAndPast2 = {
  id: 'a2_g14',
  title: {
    en: 'Present Perfect and Past 2 (I have done and I did) - Advanced',
    de: 'Present Perfect und Past 2 (Ich habe gemacht und Ich machte) - Fortgeschritten'
  },
  description: {
    en: "More advanced uses of Present Perfect vs Past Simple, including duration, superlatives, and first/second/third time.",
    de: "Fortgeschrittenere Verwendungen von Present Perfect vs Past Simple, einschließlich Dauer, Superlativen und first/second/third time."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Present Perfect and Past 2: Advanced Uses 🔍

In the previous lesson, we learned the basic difference: specific time = Past Simple, no specific time = Present Perfect. Now let's go deeper into more advanced situations where this distinction matters!

### 1. Duration: For/Since = Present Perfect ⏱️

When you talk about **how long** something has been happening (duration), you use **Present Perfect**, even if it started a long time ago!

**Key rule:** Duration (for/since) = Present Perfect

**Examples:**
- "I **have known** him **for 10 years**." (Duration: 10 years)
- "She **has lived** here **since 2015**." (Duration: since 2015)
- "We **have been** friends **for a long time**." (Duration: a long time)

**Why not Past Simple?** Because the action is **still continuing** or **still relevant** now!

**Compare:**
- "I **have known** him **for 10 years**." (I still know him now - Present Perfect)
- "I **knew** him **when we were children**." (Finished period - Past Simple)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p>If you use <strong>for</strong> or <strong>since</strong>, you're talking about duration → Use <strong>Present Perfect</strong>!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Superlatives + Ever = Present Perfect 🏆

When you use a **superlative** (best, worst, first, only, etc.) with **ever**, you use **Present Perfect**.

**Why?** Because you're talking about your **entire life experience** up to now!

**Structure:** This is the + superlative + (noun) + I have ever + past participle

**Examples:**
- "This is the **best** movie I **have ever seen**." (In my whole life, this is the best)
- "She is the **most interesting** person I **have ever met**." (In my whole life)
- "This is the **worst** day I **have ever had**." (In my whole life)
- "It's the **first** time I **have been** here." (First time in my life)

**Important:** Even if the experience happened in the past, it's still part of your **life experience** → Present Perfect!

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Pattern:</h3>
  <p><strong>Superlative + ever</strong> = Your whole life experience = <strong>Present Perfect</strong></p>
</div>

### 3. First/Second/Third Time = Present Perfect 🥇

When you say "This is the first/second/third time...", you use **Present Perfect**.

**Examples:**
- "This is the **first time** I **have been** to Paris." (First time in my life)
- "This is the **second time** I **have seen** this movie." (Second time in my life)
- "It's the **third time** she **has called** today." (Third time today - still today!)

**Why?** Because you're counting experiences in your life **up to now**!

**Compare:**
- "This is the first time I **have been** here." (Present Perfect - counting experiences)
- "It **was** the first time I **had been** there." (Past Perfect - if talking about past)

<GamePlaceholder id="fixTheMistake" />

### 4. Today, This Week, This Year = Present Perfect? 📅

This is tricky! It depends on whether that time period is **still continuing** or **finished**.

**If the time period is STILL continuing:**
- "I **have seen** him **today**." (Today is still continuing → Present Perfect)
- "I **have been** to the cinema **this week**." (This week is still continuing → Present Perfect)

**If the time period is FINISHED:**
- "I **saw** him **this morning**." (It's now afternoon - this morning is finished → Past Simple)
- "I **went** to the cinema **this week**." (If this week is finished → Past Simple)

**The test:** Is that time period still "now"? If yes → Present Perfect. If no → Past Simple.

### 5. Multiple Times = Present Perfect? 🔢

When you say "I have done something **three times**" without mentioning **when**, use Present Perfect.

**Examples:**
- "I **have been** to Paris **three times**." (No specific time - just counting experiences)
- "She **has called** me **five times** today." (Today is still continuing)

**But:** If you mention **when** those times were:
- "I **went** to Paris **three times last year**." (Specific time: last year → Past Simple)

### 6. Common Mistakes ❌

**Mistake 1:** Using Past Simple with duration
- ❌ "I **knew** him **for 10 years**." (Wrong! Duration → Present Perfect)
- ✅ "I **have known** him **for 10 years**." (Correct!)

**Mistake 2:** Using Past Simple with superlatives + ever
- ❌ "This is the best movie I **ever saw**." (Wrong! Superlative + ever → Present Perfect)
- ✅ "This is the best movie I **have ever seen**." (Correct!)

**Mistake 3:** Mixing specific time with Present Perfect
- ❌ "I **have been** to Paris **three times last year**." (Wrong! Specific time → Past Simple)
- ✅ "I **went** to Paris **three times last year**." (Correct!)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Perfect or Past?**
Choose correctly! Remember the advanced rules!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Advanced Practice</h3>
  <p className="mb-4">Write sentences using advanced Present Perfect and Past Simple:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence with duration (for/since) using Present Perfect</li>
    <li>One sentence with superlative + "ever" using Present Perfect</li>
    <li>One sentence with "This is the first time..." using Present Perfect</li>
    <li>One sentence with multiple times + specific time using Past Simple</li>
  </ol>
</div>
`,
    de: `
## Present Perfect und Past 2: Fortgeschrittene Verwendungen 🔍

In der vorherigen Lektion haben wir den grundlegenden Unterschied gelernt: spezifische Zeit = Past Simple, keine spezifische Zeit = Present Perfect. Jetzt gehen wir tiefer in fortgeschrittenere Situationen, wo diese Unterscheidung wichtig ist!

### 1. Dauer: For/Since = Present Perfect ⏱️

Wenn du über **wie lange** etwas schon passiert sprichst (Dauer), verwendest du **Present Perfect**, auch wenn es vor langer Zeit angefangen hat!

**Hauptregel:** Dauer (for/since) = Present Perfect

**Beispiele:**
- "I **have known** him **for 10 years**." (Dauer: 10 Jahre)
- "She **has lived** here **since 2015**." (Dauer: seit 2015)
- "We **have been** friends **for a long time**." (Dauer: eine lange Zeit)

**Warum nicht Past Simple?** Weil die Handlung **noch andauert** oder **noch relevant** ist!

**Vergleiche:**
- "I **have known** him **for 10 years**." (Ich kenne ihn noch jetzt - Present Perfect)
- "I **knew** him **when we were children**." (Abgeschlossene Periode - Past Simple)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p>Wenn du <strong>for</strong> oder <strong>since</strong> verwendest, sprichst du über Dauer → Verwende <strong>Present Perfect</strong>!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Superlative + Ever = Present Perfect 🏆

Wenn du einen **Superlativ** (best, worst, first, only, etc.) mit **ever** verwendest, verwendest du **Present Perfect**.

**Warum?** Weil du über deine **gesamte Lebenserfahrung** bis jetzt sprichst!

**Struktur:** This is the + Superlativ + (Nomen) + I have ever + Past Participle

**Beispiele:**
- "This is the **best** movie I **have ever seen**." (In meinem ganzen Leben ist das das Beste)
- "She is the **most interesting** person I **have ever met**." (In meinem ganzen Leben)
- "This is the **worst** day I **have ever had**." (In meinem ganzen Leben)
- "It's the **first** time I **have been** here." (Erstes Mal in meinem Leben)

**Wichtig:** Auch wenn die Erfahrung in der Vergangenheit passiert ist, ist sie immer noch Teil deiner **Lebenserfahrung** → Present Perfect!

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Muster:</h3>
  <p><strong>Superlativ + ever</strong> = Deine ganze Lebenserfahrung = <strong>Present Perfect</strong></p>
</div>

### 3. First/Second/Third Time = Present Perfect 🥇

Wenn du sagst "This is the first/second/third time...", verwendest du **Present Perfect**.

**Beispiele:**
- "This is the **first time** I **have been** to Paris." (Erstes Mal in meinem Leben)
- "This is the **second time** I **have seen** this movie." (Zweites Mal in meinem Leben)
- "It's the **third time** she **has called** today." (Drittes Mal heute - noch heute!)

**Warum?** Weil du Erfahrungen in deinem Leben **bis jetzt** zählst!

**Vergleiche:**
- "This is the first time I **have been** here." (Present Perfect - Erfahrungen zählen)
- "It **was** the first time I **had been** there." (Past Perfect - wenn über Vergangenheit sprechen)

<GamePlaceholder id="fixTheMistake" />

### 4. Today, This Week, This Year = Present Perfect? 📅

Das ist knifflig! Es hängt davon ab, ob diese Zeitperiode **noch andauert** oder **abgeschlossen** ist.

**Wenn die Zeitperiode NOCH ANDAUERT:**
- "I **have seen** him **today**." (Heute dauert noch an → Present Perfect)
- "I **have been** to the cinema **this week**." (Diese Woche dauert noch an → Present Perfect)

**Wenn die Zeitperiode ABGESCHLOSSEN ist:**
- "I **saw** him **this morning**." (Es ist jetzt Nachmittag - dieser Morgen ist vorbei → Past Simple)
- "I **went** to the cinema **this week**." (Wenn diese Woche vorbei ist → Past Simple)

**Der Test:** Ist diese Zeitperiode noch "jetzt"? Wenn ja → Present Perfect. Wenn nein → Past Simple.

### 5. Mehrere Male = Present Perfect? 🔢

Wenn du sagst "I have done something **three times**" ohne zu erwähnen, **wann**, verwende Present Perfect.

**Beispiele:**
- "I **have been** to Paris **three times**." (Keine spezifische Zeit - nur Erfahrungen zählen)
- "She **has called** me **five times** today." (Heute dauert noch an)

**Aber:** Wenn du erwähnst, **wann** diese Male waren:
- "I **went** to Paris **three times last year**." (Spezifische Zeit: letztes Jahr → Past Simple)

### 6. Häufige Fehler ❌

**Fehler 1:** Past Simple mit Dauer verwenden
- ❌ "I **knew** him **for 10 years**." (Falsch! Dauer → Present Perfect)
- ✅ "I **have known** him **for 10 years**." (Richtig!)

**Fehler 2:** Past Simple mit Superlativen + ever verwenden
- ❌ "This is the best movie I **ever saw**." (Falsch! Superlativ + ever → Present Perfect)
- ✅ "This is the best movie I **have ever seen**." (Richtig!)

**Fehler 3:** Spezifische Zeit mit Present Perfect mischen
- ❌ "I **have been** to Paris **three times last year**." (Falsch! Spezifische Zeit → Past Simple)
- ✅ "I **went** to Paris **three times last year**." (Richtig!)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Perfect oder Past?**
Wähle richtig! Denk an die fortgeschrittenen Regeln!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Fortgeschrittene Übung</h3>
  <p className="mb-4">Schreibe Sätze mit fortgeschrittenem Present Perfect und Past Simple:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz mit Dauer (for/since) mit Present Perfect</li>
    <li>Ein Satz mit Superlativ + "ever" mit Present Perfect</li>
    <li>Ein Satz mit "This is the first time..." mit Present Perfect</li>
    <li>Ein Satz mit mehreren Malen + spezifischer Zeit mit Past Simple</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Present Perfect vs Past Simple Fortgeschritten',
      description: 'Zeige fortgeschrittenes Verständnis der Zeitformen.',
      checklist: [
        { text: 'Satz mit Dauer (for/since) - Present Perfect', checked: false },
        { text: 'Satz mit Superlativ + ever - Present Perfect', checked: false },
        { text: 'Satz mit "This is the first time..." - Present Perfect', checked: false },
        { text: 'Satz mit mehreren Malen + spezifischer Zeit - Past Simple', checked: false }
      ]
    },
    en: {
      title: 'Present Perfect vs Past Simple Advanced',
      description: 'Show advanced understanding of tenses.',
      checklist: [
        { text: 'Sentence with duration (for/since) - Present Perfect', checked: false },
        { text: 'Sentence with superlative + ever - Present Perfect', checked: false },
        { text: 'Sentence with "This is the first time..." - Present Perfect', checked: false },
        { text: 'Sentence with multiple times + specific time - Past Simple', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


