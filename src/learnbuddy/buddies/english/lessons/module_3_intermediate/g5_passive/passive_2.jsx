import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "The report has already ___ written.", de: "Der Bericht ist bereits geschrieben worden." },
    words: ["been", "being", "be", "was"],
    correct: "been",
    explanation: { en: "Present perfect passive: has/have + been + past participle.", de: "Perfekt Passiv: has/have + been + Partizip Perfekt." }
  },
  {
    prompt: { en: "The road is ___ repaired right now.", de: "Die Straße wird gerade repariert." },
    words: ["being", "been", "be", "was"],
    correct: "being",
    explanation: { en: "Present continuous passive: is/are + being + past participle.", de: "Verlaufsform Passiv: is/are + being + Partizip Perfekt." }
  },
  {
    prompt: { en: "The building had ___ demolished before we arrived.", de: "Das Gebäude war abgerissen worden, bevor wir ankamen." },
    words: ["been", "being", "be", "was"],
    correct: "been",
    explanation: { en: "Past perfect passive: had + been + past participle.", de: "Plusquamperfekt Passiv: had + been + Partizip Perfekt." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "The car has being repaired.",
    mistakeIndex: 2,
    correction: "been",
    explanation: { en: "Present perfect passive uses 'been' not 'being': has been repaired.", de: "Perfekt Passiv benutzt 'been' nicht 'being': has been repaired." }
  },
  {
    sentence: "The house is been painted.",
    mistakeIndex: 2,
    correction: "being",
    explanation: { en: "Present continuous passive uses 'being' not 'been': is being painted.", de: "Verlaufsform Passiv benutzt 'being' nicht 'been': is being painted." }
  },
  {
    sentence: "The letter has been send yesterday.",
    mistakeIndex: 4,
    correction: "sent",
    explanation: { en: "Use the past participle 'sent', not the base form 'send'.", de: "Benutze das Partizip Perfekt 'sent', nicht die Grundform 'send'." }
  }
];

const grammarRacerData = [
  {
    prompt: "The meeting has ___ cancelled.",
    options: ["been", "being", "be"],
    correct: "been",
    explanation: "Present perfect passive: has been + pp."
  },
  {
    prompt: "The bridge is ___ built at the moment.",
    options: ["being", "been", "be"],
    correct: "being",
    explanation: "Present continuous passive: is being + pp."
  },
  {
    prompt: "All the tickets had ___ sold before I arrived.",
    options: ["been", "being", "be"],
    correct: "been",
    explanation: "Past perfect passive: had been + pp."
  }
];

export const passive2 = {
  id: 'b1_g43',
  title: {
    en: 'Passive 2 – be done / been done / being done',
    de: 'Passiv 2 – be done / been done / being done'
  },
  description: {
    en: "Advanced passive forms: being done (continuous), been done (perfect).",
    de: "Erweiterte Passivformen: being done (Verlaufsform), been done (Perfekt)."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Passive 2 – be done / been done / being done 🔄

### 1. Quick Review: Basic Passive ✅

**Active:** "Someone **repairs** the car."
**Passive:** "The car **is repaired**."

The passive focuses on the **action** or the **object**, not who does it.

### 2. Passive with 'being' (Continuous) 🔨

**Present continuous passive:** is/are + **being** + past participle

- "The road **is being repaired** right now." (Someone is repairing it now).
- "New houses **are being built** in our street."
- "My car **is being washed** at the moment."

**Past continuous passive:** was/were + **being** + past participle

- "When I arrived, dinner **was being prepared**."
- "The rooms **were being cleaned** when the guests arrived."

### 3. Passive with 'been' (Perfect) ✨

**Present perfect passive:** has/have + **been** + past participle

- "The report **has been finished**."
- "Three people **have been arrested**."
- "Has the email **been sent** yet?"

**Past perfect passive:** had + **been** + past participle

- "The building **had been demolished** before we arrived."
- "All tickets **had been sold** out."

### 4. Overview Table 📊

| Tense | Active | Passive |
|-------|--------|---------|
| Present continuous | is repairing | **is being repaired** |
| Past continuous | was repairing | **was being repaired** |
| Present perfect | has repaired | **has been repaired** |
| Past perfect | had repaired | **had been repaired** |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Being vs. Been:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Being</strong> = continuous (happening now/then): "is <strong>being</strong> done"</li>
    <li><strong>Been</strong> = perfect (completed): "has <strong>been</strong> done"</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 5. Common Mistakes ❌

- ❌ "The car has **being** repaired." → ✅ "has **been** repaired"
- ❌ "The house is **been** painted." → ✅ "is **being** painted"

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>is/was being done</strong> = continuous passive (in progress).</li>
    <li><strong>has/had been done</strong> = perfect passive (completed).</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Passiv 2 – be done / been done / being done 🔄

### 1. Kurze Wiederholung: Einfaches Passiv ✅

**Aktiv:** "Someone **repairs** the car."
**Passiv:** "The car **is repaired**."

Das Passiv fokussiert auf die **Handlung** oder das **Objekt**, nicht auf den Handelnden.

### 2. Passiv mit 'being' (Verlaufsform) 🔨

**Present Continuous Passiv:** is/are + **being** + Partizip Perfekt

- "The road **is being repaired** right now." (Jemand repariert sie gerade).
- "New houses **are being built** in our street."
- "My car **is being washed** at the moment."

**Past Continuous Passiv:** was/were + **being** + Partizip Perfekt

- "When I arrived, dinner **was being prepared**."
- "The rooms **were being cleaned** when the guests arrived."

### 3. Passiv mit 'been' (Perfekt) ✨

**Present Perfect Passiv:** has/have + **been** + Partizip Perfekt

- "The report **has been finished**."
- "Three people **have been arrested**."
- "Has the email **been sent** yet?"

**Past Perfect Passiv:** had + **been** + Partizip Perfekt

- "The building **had been demolished** before we arrived."
- "All tickets **had been sold** out."

### 4. Übersichtstabelle 📊

| Zeitform | Aktiv | Passiv |
|----------|-------|--------|
| Present Continuous | is repairing | **is being repaired** |
| Past Continuous | was repairing | **was being repaired** |
| Present Perfect | has repaired | **has been repaired** |
| Past Perfect | had repaired | **had been repaired** |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Being vs. Been:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Being</strong> = Verlaufsform (passiert gerade/damals): "is <strong>being</strong> done"</li>
    <li><strong>Been</strong> = Perfekt (abgeschlossen): "has <strong>been</strong> done"</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 5. Häufige Fehler ❌

- ❌ "The car has **being** repaired." → ✅ "has **been** repaired"
- ❌ "The house is **been** painted." → ✅ "is **being** painted"

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>is/was being done</strong> = Verlaufsform Passiv (im Gange).</li>
    <li><strong>has/had been done</strong> = Perfekt Passiv (abgeschlossen).</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Passive 2',
      description: 'Practice continuous and perfect passive forms.',
      checklist: [
        { text: 'Write 3 sentences with is/are being done', checked: false },
        { text: 'Write 3 sentences with has/have been done', checked: false },
        { text: 'Transform 3 active sentences into passive', checked: false }
      ]
    },
    de: {
      title: 'Passiv 2',
      description: 'Übe Verlaufsform und Perfekt Passiv.',
      checklist: [
        { text: 'Schreibe 3 Sätze mit is/are being done', checked: false },
        { text: 'Schreibe 3 Sätze mit has/have been done', checked: false },
        { text: 'Wandle 3 aktive Sätze ins Passiv um', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
