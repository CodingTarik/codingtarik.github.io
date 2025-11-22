import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "My train ___ (leave) at 5pm tomorrow.", de: "Mein Zug ___ (abfahren) morgen um 17 Uhr." },
    words: ["leaves", "will leave", "is leaving", "leave"],
    correct: "leaves",
    explanation: { en: "Fixed schedule/timetable → Present Simple", de: "Fester Fahrplan/Zeitplan → Present Simple" }
  },
  {
    prompt: { en: "I ___ (meet) Sarah at the cinema tonight.", de: "Ich ___ (treffen) Sarah heute Abend im Kino." },
    words: ["am meeting", "meet", "will meet", "meets"],
    correct: "am meeting",
    explanation: { en: "Arranged plan → Present Continuous", de: "Vereinbarter Plan → Present Continuous" }
  },
  {
    prompt: { en: "The concert ___ (start) at 8pm.", de: "Das Konzert ___ (beginnen) um 20 Uhr." },
    words: ["starts", "will start", "is starting", "start"],
    correct: "starts",
    explanation: { en: "Timetable/schedule → Present Simple", de: "Fahrplan/Zeitplan → Present Simple" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I will go to the dentist next week.",
    mistakeIndex: 1,
    correction: "am going",
    explanation: { en: "Arranged appointment → Present Continuous: I am going", de: "Vereinbarter Termin → Present Continuous: I am going" }
  },
  {
    sentence: "The bus is leaving at 3pm.",
    mistakeIndex: 2,
    correction: "leaves",
    explanation: { en: "Timetable → Present Simple: leaves", de: "Fahrplan → Present Simple: leaves" }
  },
  {
    sentence: "I meet my friends tomorrow.",
    mistakeIndex: 1,
    correction: "am meeting",
    explanation: { en: "Arranged plan → Present Continuous: am meeting", de: "Vereinbarter Plan → Present Continuous: am meeting" }
  }
];

const grammarRacerData = [
  {
    prompt: "The plane ___ at 10am.",
    options: ["departs", "will depart", "is departing"],
    correct: "departs",
    explanation: "Timetable: departs"
  },
  {
    prompt: "I ___ my parents this weekend.",
    options: ["am visiting", "visit", "will visit"],
    correct: "am visiting",
    explanation: "Arranged plan: am visiting"
  },
  {
    prompt: "What time ___ the film ___?",
    options: ["does start", "will start", "is starting"],
    correct: "does start",
    explanation: "Timetable question: does start"
  }
];

export const presentTensesForFuture = {
  id: 'a2_g19',
  title: {
    en: 'Present Tenses (I am doing / I do) for the Future',
    de: 'Gegenwartszeitformen (Ich mache gerade / Ich mache) für die Zukunft'
  },
  description: {
    en: "Using Present Simple and Present Continuous to talk about future events - timetables, schedules, and arranged plans.",
    de: "Present Simple und Present Continuous verwenden, um über zukünftige Ereignisse zu sprechen - Fahrpläne, Zeitpläne und vereinbarte Pläne."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Present Tenses for the Future: Timetables and Plans 📅

Wait, what? Using **Present** tenses to talk about the **Future**? Yes! In English, we often use Present Simple and Present Continuous to talk about future events. This might seem strange, but it\'s very common and natural!

### Why Use Present Tenses for Future?

Think about it: when you say "My train **leaves** at 5pm," you\'re talking about a **fixed schedule** - something that\'s already decided and won\'t change. The same with "I **am meeting** Sarah tonight" - it\'s an **arranged plan**.

### 1. Present Simple = Timetables & Schedules ⏰

We use **Present Simple** for future events that are part of a **fixed schedule** or **timetable**. These are things that are already decided and won\'t change.

**Common uses:**
- Public transport (trains, buses, planes)
- Events (concerts, shows, matches)
- Classes, lessons, meetings
- Opening/closing times

**Examples:**
- "My train **leaves** at 5pm tomorrow." (Fixed timetable)
- "The concert **starts** at 8pm." (Fixed schedule)
- "The shop **opens** at 9am." (Fixed time)
- "What time **does** the film **start**?" (Timetable question)

**Pattern:** Subject + Present Simple + future time expression

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p>Present Simple for future = <strong>Fixed schedules</strong> that won\'t change!</p>
  <p>Think: timetables, schedules, official times</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Present Continuous = Arranged Plans 📋

We use **Present Continuous** for future events that are **arranged** or **planned**. These are personal plans that you've already made.

**Common uses:**
- Personal appointments
- Meetings with people
- Social plans
- Arranged activities

**Examples:**
- "I **am meeting** Sarah at the cinema tonight." (Arranged plan)
- "We **are having** a party next Saturday." (Planned event)
- "She **is going** to the dentist tomorrow." (Arranged appointment)
- "What **are** you **doing** this weekend?" (Asking about plans)

**Pattern:** Subject + am/is/are + verb-ing + future time expression

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Remember:</h3>
  <p>Present Continuous for future = <strong>Arranged plans</strong> that you've already made!</p>
  <p>Think: personal plans, appointments, social arrangements</p>
</div>

### 3. The Key Difference 🔄

| Tense | Use | Example |
|-------|-----|---------|
| **Present Simple** | Fixed schedules/timetables | "The train **leaves** at 5pm." |
| **Present Continuous** | Arranged personal plans | "I **am meeting** her at 5pm." |

**Compare:**
- "The train **leaves** at 5pm." (Timetable - fixed schedule)
- "I **am leaving** at 5pm." (My plan - arranged)

**Both talk about the future, but:**
- Present Simple = Official, fixed, can\'t change
- Present Continuous = Personal, arranged, you decided

<GamePlaceholder id="fixTheMistake" />

### 4. Time Expressions 📅

Both tenses use **future time expressions**:

**Common future time expressions:**
- tomorrow, tonight, next week/month/year
- this evening, this weekend
- at 5pm, on Monday, in January
- next Friday, the day after tomorrow

**Examples:**
- "I **am going** to the cinema **tonight**."
- "The bus **leaves** **at 3pm**."
- "We **are meeting** **next Saturday**."
- "The shop **closes** **at 6pm**."

### 5. When NOT to Use Present Tenses ❌

**Don't use Present tenses for:**
- Spontaneous decisions → Use **will**
  - "I'll help you!" (Spontaneous - decided now)
- Predictions → Use **will** or **going to**
  - "It will rain tomorrow." (Prediction)
- Promises/offers → Use **will**
  - "I'll call you later." (Promise)

**Use Present tenses ONLY for:**
- Fixed schedules (Present Simple)
- Arranged plans (Present Continuous)

### 6. Questions ❓

**Present Simple questions:**
- "What time **does** the train **leave**?"
- "When **does** the concert **start**?"
- "What time **do** you **finish** work?"

**Present Continuous questions:**
- "What **are** you **doing** tonight?"
- "**Are** you **meeting** Sarah tomorrow?"
- "Where **are** you **going** this weekend?"

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Present for Future**
Choose the correct tense! Timetable or arranged plan?
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Your Future Plans</h3>
  <p className="mb-4">Write sentences about future events using Present tenses:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence with Present Simple about a timetable/schedule (e.g., "The bus leaves at 8am")</li>
    <li>One sentence with Present Continuous about an arranged plan (e.g., "I am meeting friends tonight")</li>
    <li>One question about a timetable using Present Simple</li>
    <li>One question about someone's plans using Present Continuous</li>
  </ol>
</div>
`,
    de: `
## Gegenwartszeitformen für die Zukunft: Fahrpläne und Pläne 📅

Moment, was? **Gegenwartszeitformen** verwenden, um über die **Zukunft** zu sprechen? Ja! Im Englischen verwenden wir oft Present Simple und Present Continuous, um über zukünftige Ereignisse zu sprechen. Das mag seltsam erscheinen, aber es ist sehr häufig und natürlich!

### Warum Gegenwartszeitformen für die Zukunft verwenden?

Denk darüber nach: Wenn du sagst "My train **leaves** at 5pm," sprichst du über einen **festen Fahrplan** - etwas, das bereits entschieden ist und sich nicht ändern wird. Das Gleiche mit "I **am meeting** Sarah tonight" - es ist ein **vereinbarter Plan**.

### 1. Present Simple = Fahrpläne & Zeitpläne ⏰

Wir verwenden **Present Simple** für zukünftige Ereignisse, die Teil eines **festen Fahrplans** oder **Zeitplans** sind. Das sind Dinge, die bereits entschieden sind und sich nicht ändern werden.

**Häufige Verwendungen:**
- Öffentlicher Verkehr (Züge, Busse, Flugzeuge)
- Veranstaltungen (Konzerte, Shows, Spiele)
- Klassen, Unterricht, Meetings
- Öffnungs-/Schließzeiten

**Beispiele:**
- "My train **leaves** at 5pm tomorrow." (Fester Fahrplan)
- "The concert **starts** at 8pm." (Fester Zeitplan)
- "The shop **opens** at 9am." (Feste Zeit)
- "What time **does** the film **start**?" (Fahrplanfrage)

**Muster:** Subjekt + Present Simple + zukünftiger Zeitausdruck

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p>Present Simple für Zukunft = <strong>Feste Fahrpläne</strong>, die sich nicht ändern werden!</p>
  <p>Denk: Fahrpläne, Zeitpläne, offizielle Zeiten</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Present Continuous = Vereinbarte Pläne 📋

Wir verwenden **Present Continuous** für zukünftige Ereignisse, die **vereinbart** oder **geplant** sind. Das sind persönliche Pläne, die du bereits gemacht hast.

**Häufige Verwendungen:**
- Persönliche Termine
- Treffen mit Menschen
- Soziale Pläne
- Vereinbarte Aktivitäten

**Beispiele:**
- "I **am meeting** Sarah at the cinema tonight." (Vereinbarter Plan)
- "We **are having** a party next Saturday." (Geplantes Ereignis)
- "She **is going** to the dentist tomorrow." (Vereinbarter Termin)
- "What **are** you **doing** this weekend?" (Nach Plänen fragen)

**Muster:** Subjekt + am/is/are + Verb-ing + zukünftiger Zeitausdruck

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Merke dir:</h3>
  <p>Present Continuous für Zukunft = <strong>Vereinbarte Pläne</strong>, die du bereits gemacht hast!</p>
  <p>Denk: persönliche Pläne, Termine, soziale Vereinbarungen</p>
</div>

### 3. Der Hauptunterschied 🔄

| Zeitform | Verwendung | Beispiel |
|----------|------------|----------|
| **Present Simple** | Feste Fahrpläne/Zeitpläne | "The train **leaves** at 5pm." |
| **Present Continuous** | Vereinbarte persönliche Pläne | "I **am meeting** her at 5pm." |

**Vergleiche:**
- "The train **leaves** at 5pm." (Fahrplan - fester Zeitplan)
- "I **am leaving** at 5pm." (Mein Plan - vereinbart)

**Beide sprechen über die Zukunft, aber:**
- Present Simple = Offiziell, fest, kann nicht geändert werden
- Present Continuous = Persönlich, vereinbart, du hast entschieden

<GamePlaceholder id="fixTheMistake" />

### 4. Zeitausdrücke 📅

Beide Zeitformen verwenden **zukünftige Zeitausdrücke**:

**Häufige zukünftige Zeitausdrücke:**
- tomorrow, tonight, next week/month/year
- this evening, this weekend
- at 5pm, on Monday, in January
- next Friday, the day after tomorrow

**Beispiele:**
- "I **am going** to the cinema **tonight**."
- "The bus **leaves** **at 3pm**."
- "We **are meeting** **next Saturday**."
- "The shop **closes** **at 6pm**."

### 5. Wann NICHT Gegenwartszeitformen verwenden ❌

**Verwende keine Gegenwartszeitformen für:**
- Spontane Entscheidungen → Verwende **will**
  - "I'll help you!" (Spontan - jetzt entschieden)
- Vorhersagen → Verwende **will** oder **going to**
  - "It will rain tomorrow." (Vorhersage)
- Versprechen/Angebote → Verwende **will**
  - "I'll call you later." (Versprechen)

**Verwende Gegenwartszeitformen NUR für:**
- Feste Fahrpläne (Present Simple)
- Vereinbarte Pläne (Present Continuous)

### 6. Fragen ❓

**Present Simple Fragen:**
- "What time **does** the train **leave**?"
- "When **does** the concert **start**?"
- "What time **do** you **finish** work?"

**Present Continuous Fragen:**
- "What **are** you **doing** tonight?"
- "**Are** you **meeting** Sarah tomorrow?"
- "Where **are** you **going** this weekend?"

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Present für Zukunft**
Wähle die richtige Zeitform! Fahrplan oder vereinbarter Plan?
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Deine Zukunftspläne</h3>
  <p className="mb-4">Schreibe Sätze über zukünftige Ereignisse mit Gegenwartszeitformen:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz mit Present Simple über einen Fahrplan/Zeitplan (z.B. "The bus leaves at 8am")</li>
    <li>Ein Satz mit Present Continuous über einen vereinbarten Plan (z.B. "I am meeting friends tonight")</li>
    <li>Eine Frage über einen Fahrplan mit Present Simple</li>
    <li>Eine Frage über jemandes Pläne mit Present Continuous</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Gegenwartszeitformen für die Zukunft',
      description: 'Schreibe Sätze über zukünftige Ereignisse mit Present tenses.',
      checklist: [
        { text: 'Satz mit Present Simple über Fahrplan/Zeitplan', checked: false },
        { text: 'Satz mit Present Continuous über vereinbarten Plan', checked: false },
        { text: 'Frage über Fahrplan (Present Simple)', checked: false },
        { text: 'Frage über Pläne (Present Continuous)', checked: false }
      ]
    },
    en: {
      title: 'Present Tenses for Future',
      description: 'Write sentences about future events using Present tenses.',
      checklist: [
        { text: 'Sentence with Present Simple about timetable/schedule', checked: false },
        { text: 'Sentence with Present Continuous about arranged plan', checked: false },
        { text: 'Question about timetable (Present Simple)', checked: false },
        { text: 'Question about plans (Present Continuous)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

