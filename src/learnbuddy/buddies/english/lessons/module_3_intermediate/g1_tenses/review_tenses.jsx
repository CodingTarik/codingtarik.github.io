import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ to the cinema yesterday.", de: "Ich ging gestern ins Kino." },
    words: ["went", "have gone", "had gone", "was going"],
    correct: "went",
    explanation: { en: "Past Simple: Finished action at a specific time (yesterday).", de: "Past Simple: Abgeschlossene Handlung zu einer bestimmten Zeit (gestern)." }
  },
  {
    prompt: { en: "I ___ that movie three times.", de: "Ich habe diesen Film dreimal gesehen." },
    words: ["have seen", "saw", "had seen", "was seeing"],
    correct: "have seen",
    explanation: { en: "Present Perfect: Experience in life (time not important).", de: "Present Perfect: Lebenserfahrung (Zeit nicht wichtig)." }
  },
  {
    prompt: { en: "When I arrived, the movie ___ started.", de: "Als ich ankam, hatte der Film begonnen." },
    words: ["had", "has", "was", "did"],
    correct: "had",
    explanation: { en: "Past Perfect: Happened BEFORE another past action.", de: "Past Perfect: Passierte VOR einer anderen vergangenen Handlung." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I have seen him yesterday.",
    mistakeIndex: 1,
    correction: "saw",
    explanation: { en: "Do not use Present Perfect with specific past time (yesterday). Use Past Simple.", de: "Benutze kein Present Perfect mit spezifischer Zeit (yesterday). Benutze Past Simple." }
  },
  {
    sentence: "I am knowing him for years.",
    mistakeIndex: 1,
    correction: "have known",
    explanation: { en: "State verb (know) + Duration (for years) = Present Perfect Simple.", de: "Zustandsverb (know) + Dauer (for years) = Present Perfect Simple." }
  },
  {
    sentence: "When I got home, I was cooking dinner.",
    mistakeIndex: 5,
    correction: "cooked",
    explanation: { en: "If you started cooking AFTER you got home, use Past Simple. 'Was cooking' means you were already doing it.", de: "Wenn du NACH dem Nachhausekommen angefangen hast, nutze Past Simple. 'Was cooking' heißt, du warst schon dabei." }
  }
];

const grammarRacerData = [
  {
    prompt: "I ___ English now.",
    options: ["am learning", "learn", "have learned"],
    correct: "am learning",
    explanation: "Right now = Present Continuous."
  },
  {
    prompt: "I ___ English every day.",
    options: ["learn", "am learning", "have learned"],
    correct: "learn",
    explanation: "Routine = Present Simple."
  },
  {
    prompt: "I ___ English for 5 years.",
    options: ["have been learning", "am learning", "learn"],
    correct: "have been learning",
    explanation: "Duration up to now = Present Perfect Continuous."
  }
];

export const reviewTenses = {
  id: 'b1_review_tenses',
  title: {
    en: 'Review: All Tenses (Present, Past, Perfect)',
    de: 'Review: Alle Zeitformen (Gegenwart, Vergangenheit, Perfekt)'
  },
  description: {
    en: "A comprehensive overview of the main English tenses and when to use them.",
    de: "Ein umfassender Überblick über die wichtigsten englischen Zeitformen und wann man sie benutzt."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Tense Masterclass: The Big Picture 🌍🕰️

English tenses give two main pieces of information:
1. **When?** (Past, Present, Future)
2. **Aspect?** (Simple, Continuous, Perfect)

### 1. The Present Family 🎁

| Tense | Use | Example |
|-------|-----|---------|
| **Present Simple** | Facts, Routines, Habits | "I **work** every day." |
| **Present Continuous** | Now, Temporary, Future Plans | "I **am working** right now." |
| **Present Perfect Simple** | Result, Experience (Life), "Just/Already" | "I **have finished** the work." |
| **Present Perfect Continuous** | Duration up to now, Activity | "I **have been working** for 3 hours." |

### 2. The Past Family 🔙

| Tense | Use | Example |
|-------|-----|---------|
| **Past Simple** | Finished action, Specific time | "I **worked** yesterday." |
| **Past Continuous** | Action in progress at a past moment | "I **was working** when you called." |
| **Past Perfect Simple** | Action BEFORE another past action | "I **had finished** work when you called." |
| **Past Perfect Continuous** | Duration BEFORE another past action | "I **had been working** for 3 hours when you called." |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Key Comparisons:</h3>
  <p><strong>Past Simple vs. Present Perfect:</strong></p>
  <p>Past Simple: "I **lost** my keys yesterday." (It's over. Specific time).</p>
  <p>Present Perfect: "I **have lost** my keys." (I don't have them now. Result is important).</p>
  <br/>
  <p><strong>Simple vs. Continuous:</strong></p>
  <p>Simple: Facts, Completed actions. "I **ate** dinner."</p>
  <p>Continuous: Activities in progress, Duration. "I **was eating** dinner."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 3. Decision Tree 🌳

**Question 1: When is it?**
- **Now/Always?** -> Present
- **Finished time?** -> Past

**Question 2: Is it continuous/in progress?**
- **Yes:** Continuous (-ing)
- **No:** Simple

**Question 3: Is there a connection to a later time?**
- **Yes (Past -> Present):** Present Perfect
- **Yes (Past -> Later Past):** Past Perfect

### 4. Common Mistakes Review ❌

**Mistake 1:** Present Perfect with "yesterday/last week".
- ❌ "I have seen him yesterday."
- ✅ "I **saw** him yesterday."

**Mistake 2:** Present Continuous for routines.
- ❌ "I am going to work every day."
- ✅ "I **go** to work every day."

**Mistake 3:** "Since" with Present Simple.
- ❌ "I live here since 2010."
- ✅ "I **have lived** (or have been living) here since 2010."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Use **Simple** for facts and completed actions.</li>
    <li>Use **Continuous** for activities in progress.</li>
    <li>Use **Perfect** to connect earlier actions to later moments.</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Tense Mix**
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 My English Journey</h3>
  <p className="mb-4">Write a short story about learning English using at least 3 different tenses:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>When did you start? (Past Simple)</li>
    <li>How long have you been learning? (Present Perfect Continuous)</li>
    <li>Why do you like it? (Present Simple)</li>
    <li>What had you done before this course? (Past Perfect)</li>
  </ul>
</div>
`,
    de: `
## Zeitformen Masterclass: Das große Ganze 🌍🕰️

Englische Zeitformen geben zwei Hauptinformationen:
1. **Wann?** (Vergangenheit, Gegenwart, Zukunft)
2. **Aspekt?** (Einfach, Verlauf, Perfekt)

### 1. Die Gegenwarts-Familie 🎁

| Zeitform | Verwendung | Beispiel |
|-------|-----|---------|
| **Present Simple** | Fakten, Routinen, Gewohnheiten | "I **work** every day." |
| **Present Continuous** | Jetzt, Vorübergehend, Zukunftspläne | "I **am working** right now." |
| **Present Perfect Simple** | Ergebnis, Erfahrung (Leben), "Gerade/Schon" | "I **have finished** the work." |
| **Present Perfect Continuous** | Dauer bis jetzt, Aktivität | "I **have been working** for 3 hours." |

### 2. Die Vergangenheits-Familie 🔙

| Zeitform | Verwendung | Beispiel |
|-------|-----|---------|
| **Past Simple** | Abgeschlossene Handlung, Bestimmte Zeit | "I **worked** yesterday." |
| **Past Continuous** | Handlung im Gange zu einem vergangenen Moment | "I **was working** when you called." |
| **Past Perfect Simple** | Handlung VOR einer anderen Handlung | "I **had finished** work when you called." |
| **Past Perfect Continuous** | Dauer VOR einer anderen Handlung | "I **had been working** for 3 hours when you called." |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Wichtige Vergleiche:</h3>
  <p><strong>Past Simple vs. Present Perfect:</strong></p>
  <p>Past Simple: "I **lost** my keys yesterday." (Es ist vorbei. Spezifische Zeit).</p>
  <p>Present Perfect: "I **have lost** my keys." (Ich habe sie jetzt nicht. Ergebnis ist wichtig).</p>
  <br/>
  <p><strong>Simple vs. Continuous:</strong></p>
  <p>Simple: Fakten, Abgeschlossene Handlungen. "I **ate** dinner."</p>
  <p>Continuous: Aktivitäten im Gange, Dauer. "I **was eating** dinner."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 3. Entscheidungsbaum 🌳

**Frage 1: Wann ist es?**
- **Jetzt/Immer?** -> Present
- **Abgeschlossene Zeit?** -> Past

**Frage 2: Ist es im Verlauf/andauernd?**
- **Ja:** Continuous (-ing)
- **Nein:** Simple

**Frage 3: Gibt es eine Verbindung zu einer späteren Zeit?**
- **Ja (Vergangenheit -> Gegenwart):** Present Perfect
- **Ja (Vergangenheit -> Spätere Vergangenheit):** Past Perfect

### 4. Häufige Fehler Review ❌

**Fehler 1:** Present Perfect mit "yesterday/last week".
- ❌ "I have seen him yesterday."
- ✅ "I **saw** him yesterday."

**Fehler 2:** Present Continuous für Routinen.
- ❌ "I am going to work every day."
- ✅ "I **go** to work every day."

**Fehler 3:** "Since" mit Present Simple.
- ❌ "I live here since 2010."
- ✅ "I **have lived** (oder have been living) here since 2010."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Nutze **Simple** für Fakten und abgeschlossene Handlungen.</li>
    <li>Nutze **Continuous** für Aktivitäten im Gange.</li>
    <li>Nutze **Perfect** um frühere Handlungen mit späteren Momenten zu verbinden.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Zeiten-Mix**
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Meine Englisch-Reise</h3>
  <p className="mb-4">Schreibe eine kurze Geschichte über das Englischlernen mit mindestens 3 Zeitformen:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>Wann hast du angefangen? (Past Simple)</li>
    <li>Wie lange lernst du schon? (Present Perfect Continuous)</li>
    <li>Warum magst du es? (Present Simple)</li>
    <li>Was hattest du vor diesem Kurs gemacht? (Past Perfect)</li>
  </ul>
</div>
`
  },
  task: {
    de: {
      title: 'Tense Review',
      description: 'Benutze verschiedene Zeitformen in einem Text.',
      checklist: [
        { text: 'Satz im Past Simple', checked: false },
        { text: 'Satz im Present Perfect', checked: false },
        { text: 'Satz im Past Perfect', checked: false },
        { text: 'Satz im Continuous', checked: false }
      ]
    },
    en: {
      title: 'Tense Review',
      description: 'Use different tenses in a text.',
      checklist: [
        { text: 'Sentence in Past Simple', checked: false },
        { text: 'Sentence in Present Perfect', checked: false },
        { text: 'Sentence in Past Perfect', checked: false },
        { text: 'Sentence in Continuous', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

