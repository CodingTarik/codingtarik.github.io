import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ (lose) my keys yesterday.", de: "Ich ___ (verlieren) meine Schlüssel gestern." },
    words: ["lost", "have lost", "lose", "am losing"],
    correct: "lost",
    explanation: { en: "Specific time (yesterday) → Past Simple", de: "Spezifische Zeit (gestern) → Past Simple" }
  },
  {
    prompt: { en: "I ___ (lose) my keys. I can't find them.", de: "Ich ___ (verlieren) meine Schlüssel. Ich kann sie nicht finden." },
    words: ["have lost", "lost", "lose", "am losing"],
    correct: "have lost",
    explanation: { en: "No specific time + result now → Present Perfect", de: "Keine spezifische Zeit + Ergebnis jetzt → Present Perfect" }
  },
  {
    prompt: { en: "Shakespeare ___ (write) many plays.", de: "Shakespeare ___ (schreiben) viele Stücke." },
    words: ["wrote", "has written", "writes", "is writing"],
    correct: "wrote",
    explanation: { en: "Dead person (finished life) → Past Simple", de: "Tote Person (abgeschlossenes Leben) → Past Simple" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I have been to Paris last year.",
    mistakeIndex: 3,
    correction: "went",
    explanation: { en: "Specific time (last year) → Use Past Simple: I went", de: "Spezifische Zeit (letztes Jahr) → Verwende Past Simple: I went" }
  },
  {
    sentence: "Did you see Tom?",
    mistakeIndex: 0,
    correction: "Have you seen",
    explanation: { en: "No specific time + asking about recent action → Present Perfect", de: "Keine spezifische Zeit + Frage nach kürzlicher Handlung → Present Perfect" }
  },
  {
    sentence: "I have finished my homework 2 hours ago.",
    mistakeIndex: 4,
    correction: "finished",
    explanation: { en: "Specific time (2 hours ago) → Past Simple: I finished", de: "Spezifische Zeit (vor 2 Stunden) → Past Simple: I finished" }
  }
];

const grammarRacerData = [
  {
    prompt: "I ___ that movie last week.",
    options: ["saw", "have seen", "see"],
    correct: "saw",
    explanation: "Specific time: saw"
  },
  {
    prompt: "I ___ that movie. It was great!",
    options: ["have seen", "saw", "see"],
    correct: "have seen",
    explanation: "No specific time: have seen"
  },
  {
    prompt: "My grandfather ___ in 1990.",
    options: ["died", "has died", "dies"],
    correct: "died",
    explanation: "Specific time + finished: died"
  }
];

export const presentPerfectAndPast1 = {
  id: 'a2_g13',
  title: {
    en: 'Present Perfect and Past 1 (I have done and I did) - The Important Difference!',
    de: 'Present Perfect und Past 1 (Ich habe gemacht und Ich machte) - Der wichtige Unterschied!'
  },
  description: {
    en: "Understanding when to use Present Perfect vs Past Simple - one of the most important grammar distinctions in English!",
    de: "Verstehen, wann man Present Perfect vs Past Simple verwendet - eine der wichtigsten Grammatikunterscheidungen im Englischen!"
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Present Perfect vs Past Simple: The Critical Difference! ⚡

This is **THE MOST IMPORTANT** grammar lesson for A2 level! Many English learners struggle with this distinction. The key question is: **When do you use Present Perfect, and when do you use Past Simple?**

The answer is simpler than you think, but it requires understanding **time relationships** and **relevance to now**.

### The Golden Rule 🏆

**PAST SIMPLE** = Finished action at a **specific time** in the past
**PRESENT PERFECT** = Action in the past with **connection to now** (no specific time mentioned)

### 1. Specific Time = Past Simple ⏰

If you mention **when** something happened (yesterday, last week, in 2019, at 3pm, etc.), you **MUST** use **Past Simple**.

**Why?** Because you're talking about a finished action at a specific point in time.

**Time markers for Past Simple:**
- yesterday, last week/month/year
- in 2019, in January, on Monday
- at 3pm, two hours ago, when I was a child
- then, at that time

**Examples:**
- "I **went** to Paris **last year**." (Specific time: last year)
- "She **finished** her homework **yesterday**." (Specific time: yesterday)
- "We **met** **in 2019**." (Specific time: in 2019)
- "He **called** me **at 3pm**." (Specific time: at 3pm)

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Critical Rule!</strong>
  <br/>
  <p className="mt-2">If you see a specific time word (yesterday, last week, in 2019, etc.), you <strong>CANNOT</strong> use Present Perfect!</p>
  <p>❌ "I have been to Paris last year." (WRONG!)</p>
  <p>✅ "I went to Paris last year." (CORRECT!)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. No Specific Time + Connection to Now = Present Perfect 🔗

If you **don't mention when** something happened, and it's relevant to **now**, use **Present Perfect**.

**Why?** Because the action happened in the past, but it's still relevant or connected to the present moment.

**Examples:**
- "I **have been** to Paris." (No specific time - just an experience in my life)
- "She **has finished** her homework." (No specific time - but it's finished now)
- "We **have met** before." (No specific time - but we know each other now)
- "I **have lost** my keys." (No specific time - but I don't have them now)

**Key idea:** The action is in the past, but its **result** or **relevance** is in the present.

### 3. The "Result Now" Test 🎯

A great way to decide: **Does this action have a result or effect NOW?**

**Present Perfect (result now):**
- "I **have lost** my keys." → Result: I don't have them now
- "She **has broken** her phone." → Result: Her phone is broken now
- "I **have finished** my homework." → Result: My homework is done now

**Past Simple (no result now, or result is finished):**
- "I **lost** my keys **yesterday**." → Specific time, finished action
- "She **broke** her phone **last week**." → Specific time, finished action
- "I **finished** my homework **2 hours ago**." → Specific time, finished action

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 The Test:</h3>
  <p>Ask yourself: "Is this action's result still relevant NOW?"</p>
  <p>If YES → Present Perfect</p>
  <p>If NO (or you mention WHEN) → Past Simple</p>
</div>

### 4. Common Scenarios 📋

#### Scenario 1: Recent Action (Just Happened)
- "I **have just finished** my breakfast." (Very recent, no specific time)
- "I **finished** my breakfast **10 minutes ago**." (Specific time → Past Simple)

#### Scenario 2: Life Experience
- "I **have been** to Japan." (Experience in my life, no specific time)
- "I **went** to Japan **in 2019**." (Specific time → Past Simple)

#### Scenario 3: News / Recent Information
- "The president **has resigned**." (Recent news, relevant now)
- "The president **resigned** **yesterday**." (Specific time → Past Simple)

#### Scenario 4: Dead People / Finished Periods
- "Shakespeare **wrote** many plays." (He's dead - his life is finished → Past Simple)
- "My grandfather **died** **in 1990**." (Specific time + finished → Past Simple)

<GamePlaceholder id="fixTheMistake" />

### 5. Questions: Have You...? vs Did You...? ❓

**"Have you...?"** (Present Perfect)
- No specific time mentioned
- Asking about experience or recent action
- "**Have you seen** that movie?" (Ever? Recently?)
- "**Have you finished** your homework?" (Is it done now?)

**"Did you...?"** (Past Simple)
- Specific time mentioned or implied
- Asking about a finished action
- "**Did you see** that movie **yesterday**?" (Specific time)
- "**Did you finish** your homework **last night**?" (Specific time)

**Both can be correct, but mean different things:**
- "**Have you seen** Tom?" (Recently? Is he here now?)
- "**Did you see** Tom **yesterday**?" (Specific time: yesterday)

### 6. Time Expressions Summary 📊

| Expression | Tense | Example |
|------------|-------|---------|
| yesterday, last week, in 2019 | **Past Simple** | I went yesterday |
| just, already, yet | **Present Perfect** | I have just finished |
| ever, never, before | **Present Perfect** | Have you ever been? |
| for, since | **Present Perfect** | I have lived here for 5 years |
| ago | **Past Simple** | I saw him 2 hours ago |
| this morning/afternoon (if still that time) | **Present Perfect** | I have seen him this morning |
| this morning/afternoon (if that time passed) | **Past Simple** | I saw him this morning (it's now afternoon) |

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Perfect or Past?**
Choose the correct tense! Remember: specific time = Past Simple!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 The Tense Challenge</h3>
  <p className="mb-4">Write sentences showing you understand the difference:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence with Past Simple + specific time (e.g., "I went to the cinema yesterday")</li>
    <li>One sentence with Present Perfect, same action, no specific time (e.g., "I have been to the cinema")</li>
    <li>One sentence showing a "result now" with Present Perfect (e.g., "I have lost my phone - I can't call you")</li>
    <li>One question: "Have you...?" (no specific time) and one "Did you...?" (with specific time)</li>
  </ol>
</div>
`,
    de: `
## Present Perfect vs Past Simple: Der kritische Unterschied! ⚡

Das ist **DIE WICHTIGSTE** Grammatiklektion für A2-Niveau! Viele Englischlernende haben Schwierigkeiten mit dieser Unterscheidung. Die Schlüsselfrage ist: **Wann verwendest du Present Perfect und wann Past Simple?**

Die Antwort ist einfacher, als du denkst, aber sie erfordert das Verständnis von **Zeitbeziehungen** und **Relevanz für jetzt**.

### Die goldene Regel 🏆

**PAST SIMPLE** = Abgeschlossene Handlung zu einer **spezifischen Zeit** in der Vergangenheit
**PRESENT PERFECT** = Handlung in der Vergangenheit mit **Verbindung zu jetzt** (keine spezifische Zeit erwähnt)

### 1. Spezifische Zeit = Past Simple ⏰

Wenn du erwähnst, **wann** etwas passiert ist (gestern, letzte Woche, 2019, um 15 Uhr, etc.), **MUSST** du **Past Simple** verwenden.

**Warum?** Weil du über eine abgeschlossene Handlung zu einem bestimmten Zeitpunkt sprichst.

**Zeitmarker für Past Simple:**
- yesterday, last week/month/year
- in 2019, in January, on Monday
- at 3pm, two hours ago, when I was a child
- then, at that time

**Beispiele:**
- "I **went** to Paris **last year**." (Spezifische Zeit: letztes Jahr)
- "She **finished** her homework **yesterday**." (Spezifische Zeit: gestern)
- "We **met** **in 2019**." (Spezifische Zeit: 2019)
- "He **called** me **at 3pm**." (Spezifische Zeit: um 15 Uhr)

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Kritische Regel!</strong>
  <br/>
  <p className="mt-2">Wenn du ein spezifisches Zeitwort siehst (gestern, letzte Woche, 2019, etc.), kannst du <strong>KEIN</strong> Present Perfect verwenden!</p>
  <p>❌ "I have been to Paris last year." (FALSCH!)</p>
  <p>✅ "I went to Paris last year." (RICHTIG!)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Keine spezifische Zeit + Verbindung zu jetzt = Present Perfect 🔗

Wenn du **nicht erwähnst, wann** etwas passiert ist, und es relevant für **jetzt** ist, verwende **Present Perfect**.

**Warum?** Weil die Handlung in der Vergangenheit passiert ist, aber sie ist noch relevant oder mit dem gegenwärtigen Moment verbunden.

**Beispiele:**
- "I **have been** to Paris." (Keine spezifische Zeit - nur eine Erfahrung in meinem Leben)
- "She **has finished** her homework." (Keine spezifische Zeit - aber sie ist jetzt fertig)
- "We **have met** before." (Keine spezifische Zeit - aber wir kennen uns jetzt)
- "I **have lost** my keys." (Keine spezifische Zeit - aber ich habe sie jetzt nicht)

**Schlüsselidee:** Die Handlung ist in der Vergangenheit, aber ihr **Ergebnis** oder ihre **Relevanz** ist in der Gegenwart.

### 3. Der "Ergebnis jetzt"-Test 🎯

Ein großartiger Weg zu entscheiden: **Hat diese Handlung ein Ergebnis oder eine Wirkung JETZT?**

**Present Perfect (Ergebnis jetzt):**
- "I **have lost** my keys." → Ergebnis: Ich habe sie jetzt nicht
- "She **has broken** her phone." → Ergebnis: Ihr Handy ist jetzt kaputt
- "I **have finished** my homework." → Ergebnis: Meine Hausaufgaben sind jetzt fertig

**Past Simple (kein Ergebnis jetzt, oder Ergebnis ist abgeschlossen):**
- "I **lost** my keys **yesterday**." → Spezifische Zeit, abgeschlossene Handlung
- "She **broke** her phone **last week**." → Spezifische Zeit, abgeschlossene Handlung
- "I **finished** my homework **2 hours ago**." → Spezifische Zeit, abgeschlossene Handlung

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Der Test:</h3>
  <p>Frag dich selbst: "Ist das Ergebnis dieser Handlung noch relevant JETZT?"</p>
  <p>Wenn JA → Present Perfect</p>
  <p>Wenn NEIN (oder du erwähnst WANN) → Past Simple</p>
</div>

### 4. Häufige Szenarien 📋

#### Szenario 1: Kürzliche Handlung (Gerade passiert)
- "I **have just finished** my breakfast." (Sehr kürzlich, keine spezifische Zeit)
- "I **finished** my breakfast **10 minutes ago**." (Spezifische Zeit → Past Simple)

#### Szenario 2: Lebenserfahrung
- "I **have been** to Japan." (Erfahrung in meinem Leben, keine spezifische Zeit)
- "I **went** to Japan **in 2019**." (Spezifische Zeit → Past Simple)

#### Szenario 3: Nachrichten / Kürzliche Information
- "The president **has resigned**." (Kürzliche Nachricht, relevant jetzt)
- "The president **resigned** **yesterday**." (Spezifische Zeit → Past Simple)

#### Szenario 4: Tote Personen / Abgeschlossene Perioden
- "Shakespeare **wrote** many plays." (Er ist tot - sein Leben ist abgeschlossen → Past Simple)
- "My grandfather **died** **in 1990**." (Spezifische Zeit + abgeschlossen → Past Simple)

<GamePlaceholder id="fixTheMistake" />

### 5. Fragen: Have You...? vs Did You...? ❓

**"Have you...?"** (Present Perfect)
- Keine spezifische Zeit erwähnt
- Fragt nach Erfahrung oder kürzlicher Handlung
- "**Have you seen** that movie?" (Schon mal? Kürzlich?)
- "**Have you finished** your homework?" (Ist es jetzt fertig?)

**"Did you...?"** (Past Simple)
- Spezifische Zeit erwähnt oder impliziert
- Fragt nach einer abgeschlossenen Handlung
- "**Did you see** that movie **yesterday**?" (Spezifische Zeit)
- "**Did you finish** your homework **last night**?" (Spezifische Zeit)

**Beide können richtig sein, bedeuten aber unterschiedliches:**
- "**Have you seen** Tom?" (Kürzlich? Ist er jetzt hier?)
- "**Did you see** Tom **yesterday**?" (Spezifische Zeit: gestern)

### 6. Zeitausdrücke Zusammenfassung 📊

| Ausdruck | Zeitform | Beispiel |
|----------|----------|----------|
| yesterday, last week, in 2019 | **Past Simple** | I went yesterday |
| just, already, yet | **Present Perfect** | I have just finished |
| ever, never, before | **Present Perfect** | Have you ever been? |
| for, since | **Present Perfect** | I have lived here for 5 years |
| ago | **Past Simple** | I saw him 2 hours ago |
| this morning/afternoon (wenn noch diese Zeit) | **Present Perfect** | I have seen him this morning |
| this morning/afternoon (wenn diese Zeit vorbei) | **Past Simple** | I saw him this morning (es ist jetzt Nachmittag) |

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Perfect oder Past?**
Wähle die richtige Zeitform! Denk daran: spezifische Zeit = Past Simple!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Die Zeitform-Herausforderung</h3>
  <p className="mb-4">Schreibe Sätze, die zeigen, dass du den Unterschied verstehst:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz mit Past Simple + spezifischer Zeit (z.B. "I went to the cinema yesterday")</li>
    <li>Ein Satz mit Present Perfect, gleiche Handlung, keine spezifische Zeit (z.B. "I have been to the cinema")</li>
    <li>Ein Satz, der ein "Ergebnis jetzt" mit Present Perfect zeigt (z.B. "I have lost my phone - I can't call you")</li>
    <li>Eine Frage: "Have you...?" (keine spezifische Zeit) und eine "Did you...?" (mit spezifischer Zeit)</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Present Perfect vs Past Simple',
      description: 'Zeige, dass du den Unterschied verstehst.',
      checklist: [
        { text: 'Satz mit Past Simple + spezifischer Zeit', checked: false },
        { text: 'Satz mit Present Perfect, gleiche Handlung, keine Zeit', checked: false },
        { text: 'Satz mit "Ergebnis jetzt" (Present Perfect)', checked: false },
        { text: 'Frage "Have you...?" und "Did you...?"', checked: false }
      ]
    },
    en: {
      title: 'Present Perfect vs Past Simple',
      description: 'Show you understand the difference.',
      checklist: [
        { text: 'Sentence with Past Simple + specific time', checked: false },
        { text: 'Sentence with Present Perfect, same action, no time', checked: false },
        { text: 'Sentence showing "result now" (Present Perfect)', checked: false },
        { text: 'Question "Have you...?" and "Did you...?"', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


