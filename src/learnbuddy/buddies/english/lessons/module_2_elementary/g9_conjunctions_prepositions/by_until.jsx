import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I will finish the report ___ Friday.", de: "Ich werde den Bericht ___ Freitag fertigstellen." },
    words: ["by", "until", "at", "in"],
    correct: "by",
    explanation: { en: "By = not later than (deadline). By Friday = on or before Friday.", de: "By = nicht später als (Deadline). By Friday = am oder vor Freitag." }
  },
  {
    prompt: { en: "I will stay here ___ Friday.", de: "Ich werde ___ Freitag hier bleiben." },
    words: ["until", "by", "at", "in"],
    correct: "until",
    explanation: { en: "Until = up to the time of (duration/limit). I stay from now UNTIL Friday.", de: "Until = bis zum Zeitpunkt von (Dauer/Limit). Ich bleibe von jetzt BIS Freitag." }
  },
  {
    prompt: { en: "___ the time we arrived, the party had started.", de: "___ wir ankamen, hatte die Party begonnen." },
    words: ["By", "Until", "At", "In"],
    correct: "By",
    explanation: { en: "By the time = not later than the moment something happened.", de: "By the time = nicht später als der Moment, in dem etwas passierte." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I will stay here by Friday.",
    mistakeIndex: 4,
    correction: "until",
    explanation: { en: "Use 'until' for a duration that continues up to a point. 'By' is for a deadline.", de: "Benutze 'until' für eine Dauer, die bis zu einem Punkt anhält. 'By' ist für eine Deadline." }
  },
  {
    sentence: "I need to finish this until 5 PM.",
    mistakeIndex: 5,
    correction: "by",
    explanation: { en: "Use 'by' for a deadline (finish before). 'Until' means doing it continuously until 5 PM.", de: "Benutze 'by' für eine Deadline (vorher fertig werden). 'Until' bedeutet, es kontinuierlich bis 17 Uhr zu tun." }
  },
  {
    sentence: "Until the time I got home, she had left.",
    mistakeIndex: 0,
    correction: "By",
    explanation: { en: "Use 'By the time' + clause (Subject + Verb).", de: "Benutze 'By the time' + Satz (Subjekt + Verb)." }
  }
];

const grammarRacerData = [
  {
    prompt: "I will be back ___ 5 o'clock.",
    options: ["by", "until", "at"],
    correct: "by",
    explanation: "By = not later than (deadline)"
  },
  {
    prompt: "I will wait ___ you come back.",
    options: ["until", "by", "for"],
    correct: "until",
    explanation: "Until = up to the time of"
  },
  {
    prompt: "___ the time I woke up, it was raining.",
    options: ["By", "Until", "At"],
    correct: "By",
    explanation: "By the time + clause"
  }
];

export const byUntil = {
  id: 'a2_g120',
  title: {
    en: 'By vs. Until',
    de: 'By vs. Until'
  },
  description: {
    en: "Understanding deadlines and duration. 'I will finish by Friday', 'I will wait until Friday'.",
    de: "Deadlines und Dauer verstehen. 'Ich werde bis Freitag fertig sein', 'Ich werde bis Freitag warten'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## By and Until: Deadlines vs. Duration ⏳

The difference between **by** and **until** is very important in English, especially for making plans and appointments.

### 1. By (+ Time): Not Later Than (Deadline) 🎯

We use **by** to say that something will happen **at or before** a specific time. It indicates a **deadline**.

**Structure:** by + time / date

**Examples:**
- "I will send the email **by** 5 PM." (At 5 PM or before. Not later than 5 PM.)
- "Please be home **by** dinner time."
- "The work must be finished **by** tomorrow."

**Key idea:** By = Deadline. The action happens *at some point* before the deadline.

### 2. Until (+ Time): Up To (Duration) ⏱️

We use **until** (or **till**) to say how long a situation continues. It indicates the **end of a period of time**.

**Structure:** until + time / date

**Examples:**
- "I will stay here **until** 5 PM." (From now up to 5 PM. Then I will leave.)
- "We waited **until** he arrived."
- "I slept **until** 10 AM."

**Key idea:** Until = How long something lasts. The action continues *continuously* up to that time.

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 The Difference:</h3>
  <p><strong>By 5 PM</strong> = I finish it at 4:00, or 4:30, or 4:59. (Deadline)</p>
  <p><strong>Until 5 PM</strong> = I do it continuously from now... 3:00... 4:00... 4:59... stop at 5:00. (Duration)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 3. By the time... 🕰️

We use **by the time** to connect two events. It means "not later than the moment that something else happens".

**Structure:** By the time + subject + verb

**Examples:**
- "**By the time** we arrived, the movie had already started." (When we arrived, the movie was already playing.)
- "Hurry up! **By the time** we get to the shops, they will be closed."

### 4. Common Mistakes ❌

**Mistake 1:** Using "until" for a deadline.
- ❌ "Tell me **until** Friday." (Wrong! You want the answer *before* Friday.)
- ✅ "Tell me **by** Friday." (Correct!)

**Mistake 2:** Using "by" for duration.
- ❌ "I will stay **by** next week." (Wrong!)
- ✅ "I will stay **until** next week." (Correct!)

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>By</strong> = Deadline (not later than). "Finish by Friday."</li>
    <li><strong>Until</strong> = Duration (how long). "Wait until Friday."</li>
    <li><strong>By the time</strong> = When something happens. "By the time I arrived..."</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: By vs. Until**
Choose the correct word!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 By or Until?</h3>
  <p className="mb-4">Write sentences about your week:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Something you must finish **by** Friday.</li>
    <li>Something you will do **until** tonight.</li>
    <li>A sentence with "by the time".</li>
  </ol>
</div>
`,
    de: `
## By und Until: Deadlines vs. Dauer ⏳

Der Unterschied zwischen **by** und **until** ist im Englischen sehr wichtig, besonders für Pläne und Termine.

### 1. By (+ Zeit): Nicht später als (Deadline) 🎯

Wir verwenden **by**, um zu sagen, dass etwas **um oder vor** einer bestimmten Zeit passieren wird. Es zeigt eine **Deadline** an.

**Struktur:** by + Zeit / Datum

**Beispiele:**
- "I will send the email **by** 5 PM." (Um 17 Uhr oder davor. Nicht später als 17 Uhr.)
- "Please be home **by** dinner time." (Sei bitte zum Abendessen zu Hause.)
- "The work must be finished **by** tomorrow." (Die Arbeit muss bis morgen fertig sein.)

**Schlüsselidee:** By = Deadline. Die Handlung passiert *zu einem beliebigen Zeitpunkt* vor der Deadline.

### 2. Until (+ Zeit): Bis zu (Dauer) ⏱️

Wir verwenden **until** (oder **till**), um zu sagen, wie lange eine Situation andauert. Es zeigt das **Ende einer Zeitperiode** an.

**Struktur:** until + Zeit / Datum

**Beispiele:**
- "I will stay here **until** 5 PM." (Von jetzt bis 17 Uhr. Dann gehe ich.)
- "We waited **until** he arrived." (Wir warteten, bis er ankam.)
- "I slept **until** 10 AM." (Ich schlief bis 10 Uhr.)

**Schlüsselidee:** Until = Wie lange etwas dauert. Die Handlung läuft *kontinuierlich* bis zu diesem Zeitpunkt.

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Der Unterschied:</h3>
  <p><strong>By 5 PM</strong> = Ich mache es fertig um 16:00, oder 16:30, oder 16:59. (Deadline)</p>
  <p><strong>Until 5 PM</strong> = Ich tue es durchgehend von jetzt... 15:00... 16:00... 16:59... stopp um 17:00. (Dauer)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 3. By the time... 🕰️

Wir verwenden **by the time**, um zwei Ereignisse zu verbinden. Es bedeutet "nicht später als der Moment, in dem etwas anderes passiert".

**Struktur:** By the time + Subjekt + Verb

**Beispiele:**
- "**By the time** we arrived, the movie had already started." (Als wir ankamen, lief der Film schon.)
- "Hurry up! **By the time** we get to the shops, they will be closed." (Beeil dich! Bis wir bei den Geschäften sind, werden sie geschlossen sein.)

### 4. Häufige Fehler ❌

**Fehler 1:** "Until" für eine Deadline verwenden.
- ❌ "Tell me **until** Friday." (Falsch! Du willst die Antwort *vor* Freitag.)
- ✅ "Tell me **by** Friday." (Richtig!)

**Fehler 2:** "By" für Dauer verwenden.
- ❌ "I will stay **by** next week." (Falsch!)
- ✅ "I will stay **until** next week." (Richtig!)

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>By</strong> = Deadline (nicht später als). "Finish by Friday."</li>
    <li><strong>Until</strong> = Dauer (wie lange). "Wait until Friday."</li>
    <li><strong>By the time</strong> = Wenn etwas passiert. "By the time I arrived..."</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: By vs. Until**
Wähle das richtige Wort!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 By oder Until?</h3>
  <p className="mb-4">Schreibe Sätze über deine Woche:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Etwas, das du **by** Freitag erledigen musst.</li>
    <li>Etwas, das du **until** heute Abend tun wirst.</li>
    <li>Ein Satz mit "by the time".</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'By vs. Until',
      description: 'Schreibe Sätze mit by und until.',
      checklist: [
        { text: 'Satz mit "by" (Deadline)', checked: false },
        { text: 'Satz mit "until" (Dauer)', checked: false },
        { text: 'Satz mit "by the time"', checked: false }
      ]
    },
    en: {
      title: 'By vs. Until',
      description: 'Write sentences using by and until.',
      checklist: [
        { text: 'Sentence with "by" (deadline)', checked: false },
        { text: 'Sentence with "until" (duration)', checked: false },
        { text: 'Sentence with "by the time"', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

