import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ my room. It looks clean now.", de: "Ich habe mein Zimmer gestrichen. Es sieht jetzt sauber aus." },
    words: ["have painted", "have been painting", "painted", "painting"],
    correct: "have painted",
    explanation: { en: "Present Perfect Simple: Focus on the result (the painted room).", de: "Present Perfect Simple: Fokus auf das Ergebnis (das gestrichene Zimmer)." }
  },
  {
    prompt: { en: "My hands are blue. I ___ my room.", de: "Meine Hände sind blau. Ich habe mein Zimmer gestrichen." },
    words: ["have been painting", "have painted", "painted", "painting"],
    correct: "have been painting",
    explanation: { en: "Present Perfect Continuous: Focus on the activity (painting).", de: "Present Perfect Continuous: Fokus auf die Aktivität (Streichen)." }
  },
  {
    prompt: { en: "I ___ ten pages today.", de: "Ich habe heute zehn Seiten gelesen." },
    words: ["have read", "have been reading", "read", "reading"],
    correct: "have read",
    explanation: { en: "Present Perfect Simple: How much/many? (Completion).", de: "Present Perfect Simple: Wie viel/viele? (Abschluss)." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I have been reading ten pages today.",
    mistakeIndex: 2,
    correction: "have read",
    explanation: { en: "Use Simple for 'how much/many' (completed quantity).", de: "Benutze Simple für 'wie viel/viele' (abgeschlossene Menge)." }
  },
  {
    sentence: "I have been knowing him for ten years.",
    mistakeIndex: 2,
    correction: "have known",
    explanation: { en: "State verbs (know, like, believe) are not used in continuous forms.", de: "Zustandsverben (know, like, believe) werden nicht in Verlaufsformen verwendet." }
  },
  {
    sentence: "Look! I have been buying a new car.",
    mistakeIndex: 3,
    correction: "have bought",
    explanation: { en: "Buying a car is a short action, not a continuous activity here. Result: I have it.", de: "Ein Auto kaufen ist eine kurze Handlung, keine andauernde Aktivität hier. Ergebnis: Ich habe es." }
  }
];

const grammarRacerData = [
  {
    prompt: "I ___ the book. Here it is.",
    options: ["have read", "have been reading"],
    correct: "have read",
    explanation: "Finished result (Here it is)."
  },
  {
    prompt: "I ___ the book all afternoon.",
    options: ["have been reading", "have read"],
    correct: "have been reading",
    explanation: "Focus on activity/duration (all afternoon)."
  },
  {
    prompt: "She ___ three cups of coffee.",
    options: ["has drunk", "has been drinking"],
    correct: "has drunk",
    explanation: "Quantity (three cups) = Simple."
  }
];

export const presentPerfectContinuousSimple = {
  id: 'b1_g10',
  title: {
    en: 'Present Perfect: Continuous vs. Simple',
    de: 'Present Perfect: Verlauf vs. Einfach'
  },
  description: {
    en: "Activity vs. Result. 'I have been painting' (Activity) vs. 'I have painted' (Result).",
    de: "Aktivität vs. Ergebnis. 'Ich habe gestrichen' (Aktivität) vs. 'Ich habe fertig gestrichen' (Ergebnis)."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Continuous vs. Simple: Activity vs. Result 🔄✅

Both forms connect the past with the present, but they focus on different things.

### 1. Continuous: Focus on the Activity (Ongoing/Recent) 🏃

**Structure:** have been + -ing

We use the **Continuous** form to say that an activity has been happening. We are interested in the **activity itself**, not necessarily if it's finished.

- "My hands are dirty. I **have been repairing** the car." (Focus: The activity caused dirty hands).
- "She **has been eating** too much recently." (Focus: Her recent behavior/activity).
- "I **have been reading** the book you lent me." (I'm still reading it or just focused on the act).

**Key Question:** How long? (Duration)

### 2. Simple: Focus on the Result (Completed) ✅

**Structure:** have + past participle (done/eaten/seen)

We use the **Simple** form to say that something is **completed**. We are interested in the **result**.

- "The car is ready. I **have repaired** it." (Focus: The job is done).
- "She **has eaten** all the cookies." (Focus: The box is empty. Result).
- "I **have read** the book you lent me. Here it is." (Focus: I finished it).

**Key Question:** How much? How many? (Quantity/Completion)

### 3. How Long vs. How Much 📏

**Continuous (How Long):**
- "I **have been writing** emails for two hours." (Activity duration).
- "I **have been running** all morning."

**Simple (How Much/Many):**
- "I **have written** ten emails." (Completed quantity).
- "I **have run** 10 kilometers." (Completed distance).

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Comparison:</h3>
  <p><strong>I have been painting my room.</strong> (There is paint on my clothes. Maybe I'm not finished.)</p>
  <p><strong>I have painted my room.</strong> (The room is yellow now. It is finished.)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. State Verbs (Important Exception!) 🚫

Remember that state verbs (know, like, believe, belong, want) are **not** usually used in the continuous form.

- ❌ "I have been knowing him for ten years."
- ✅ "I **have known** him for ten years."

- ❌ "I have been wanting a car."
- ✅ "I **have wanted** a car."

### 5. Common Mistakes ❌

**Mistake 1:** Using Continuous for completed quantity.
- ❌ "I **have been drinking** three cups of coffee."
- ✅ "I **have drunk** three cups of coffee."

**Mistake 2:** Using Simple for duration emphasis without result.
- "I have played tennis." (Fact).
- "I have been playing tennis." (Explanation why I am tired).

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Continuous (-ing)</strong>: Activity, Duration, "How long?", Incomplete or just stopped.</li>
    <li><strong>Simple (done)</strong>: Result, Completion, "How many?", Finished.</li>
    <li><strong>State verbs</strong>: Always Simple (have known, have had).</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Simple vs. Continuous**
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Activity or Result?</h3>
  <p className="mb-4">Write sentences:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One thing you have been doing lately (Activity).</li>
    <li>One thing you have finished today (Result).</li>
    <li>"I have been..." vs "I have..." (Compare two similar actions).</li>
  </ol>
</div>
`,
    de: `
## Continuous vs. Simple: Aktivität vs. Ergebnis 🔄✅

Beide Formen verbinden die Vergangenheit mit der Gegenwart, aber sie konzentrieren sich auf unterschiedliche Dinge.

### 1. Continuous: Fokus auf die Aktivität (Laufend/Kürzlich) 🏃

**Struktur:** have been + -ing

Wir verwenden die **Continuous**-Form, um zu sagen, dass eine Aktivität stattgefunden hat. Wir interessieren uns für die **Aktivität selbst**, nicht unbedingt, ob sie abgeschlossen ist.

- "Meine Hände sind schmutzig. I **have been repairing** the car." (Fokus: Die Aktivität verursachte schmutzige Hände).
- "She **has been eating** too much recently." (Fokus: Ihr kürzliches Verhalten).
- "I **have been reading** the book." (Ich lese es noch oder betone das Lesen).

**Schlüsselfrage:** Wie lange? (Dauer)

### 2. Simple: Fokus auf das Ergebnis (Abgeschlossen) ✅

**Struktur:** have + Partizip Perfekt (done/eaten/seen)

Wir verwenden die **Simple**-Form, um zu sagen, dass etwas **abgeschlossen** ist. Wir interessieren uns für das **Ergebnis**.

- "Das Auto ist fertig. I **have repaired** it." (Fokus: Die Arbeit ist erledigt).
- "She **has eaten** all the cookies." (Fokus: Die Box ist leer. Ergebnis).
- "I **have read** the book. Here it is." (Fokus: Ich bin fertig).

**Schlüsselfrage:** Wie viel? Wie viele? (Menge/Abschluss)

### 3. How Long vs. How Much 📏

**Continuous (Wie lange):**
- "I **have been writing** emails for two hours." (Dauer der Aktivität).
- "I **have been running** all morning."

**Simple (Wie viel/viele):**
- "I **have written** ten emails." (Abgeschlossene Menge).
- "I **have run** 10 kilometers." (Abgeschlossene Distanz).

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Vergleich:</h3>
  <p><strong>I have been painting my room.</strong> (Farbe auf Kleidung. Vielleicht noch nicht fertig.)</p>
  <p><strong>I have painted my room.</strong> (Zimmer ist jetzt gelb. Es ist fertig.)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Zustandsverben (Wichtige Ausnahme!) 🚫

Denk daran, dass Zustandsverben (know, like, believe, belong, want) **nicht** in der Verlaufsform verwendet werden.

- ❌ "I have been knowing him for ten years."
- ✅ "I **have known** him for ten years."

### 5. Häufige Fehler ❌

**Fehler 1:** Continuous für abgeschlossene Menge benutzen.
- ❌ "I **have been drinking** three cups of coffee."
- ✅ "I **have drunk** three cups of coffee."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Continuous (-ing)</strong>: Aktivität, Dauer, "Wie lange?", Unvollständig oder gerade gestoppt.</li>
    <li><strong>Simple (done)</strong>: Ergebnis, Abschluss, "Wie viele?", Fertig.</li>
    <li><strong>Zustandsverben</strong>: Immer Simple (have known).</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Simple vs. Continuous**
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Aktivität oder Ergebnis?</h3>
  <p className="mb-4">Schreibe Sätze:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Eine Sache, die du kürzlich getan hast (Aktivität).</li>
    <li>Eine Sache, die du heute fertiggestellt hast (Ergebnis).</li>
    <li>Vergleich: "I have been..." vs "I have...".</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Simple vs. Continuous',
      description: 'Unterscheide zwischen Aktivität und Ergebnis.',
      checklist: [
        { text: 'Satz über Aktivität (Continuous)', checked: false },
        { text: 'Satz über Ergebnis/Menge (Simple)', checked: false },
        { text: 'Satz mit Zustandsverb (Simple)', checked: false }
      ]
    },
    en: {
      title: 'Simple vs. Continuous',
      description: 'Distinguish between activity and result.',
      checklist: [
        { text: 'Sentence about activity (Continuous)', checked: false },
        { text: 'Sentence about result/quantity (Simple)', checked: false },
        { text: 'Sentence with state verb (Simple)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


