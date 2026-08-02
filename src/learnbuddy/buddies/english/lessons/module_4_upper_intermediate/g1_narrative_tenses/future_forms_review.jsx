import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "Look at those dark clouds – it ___ rain.", de: "Schau dir diese dunklen Wolken an – es wird regnen." },
    words: ["is going to", "will", "is about to", "shall"],
    correct: "is going to",
    explanation: { en: "Use 'going to' for predictions based on present evidence (we can see the clouds).", de: "Verwende 'going to' für Vorhersagen basierend auf gegenwärtigen Beweisen (wir können die Wolken sehen)." }
  },
  {
    prompt: { en: "By this time next year, I ___ my degree.", de: "Um diese Zeit nächstes Jahr werde ich meinen Abschluss gemacht haben." },
    words: ["will have finished", "will finish", "am finishing", "am going to finish"],
    correct: "will have finished",
    explanation: { en: "Future Perfect for an action that will be completed before a specific future point.", de: "Future Perfect für eine Handlung, die vor einem bestimmten zukünftigen Zeitpunkt abgeschlossen sein wird." }
  },
  {
    prompt: { en: "I ___ my sister at the airport tomorrow at 3 PM.", de: "Ich hole morgen um 15 Uhr meine Schwester am Flughafen ab." },
    words: ["am meeting", "will meet", "meet", "am going to meet"],
    correct: "am meeting",
    explanation: { en: "Present Continuous for fixed personal arrangements with a specific time.", de: "Present Continuous für feste persönliche Verabredungen mit einer bestimmten Uhrzeit." }
  },
  {
    prompt: { en: "At 8 o'clock tonight, we ___ to the new Italian restaurant.", de: "Heute Abend um 8 werden wir im neuen italienischen Restaurant essen." },
    words: ["will be going", "go", "will go", "are going"],
    correct: "will be going",
    explanation: { en: "Future Continuous for an action in progress at a specific time in the future.", de: "Future Continuous für eine Handlung, die zu einem bestimmten Zeitpunkt in der Zukunft im Gange sein wird." }
  },
  {
    prompt: { en: "Don't worry – I ___ you with your homework later.", de: "Keine Sorge – ich helfe dir später mit deinen Hausaufgaben." },
    words: ["will help", "am helping", "am going to help", "help"],
    correct: "will help",
    explanation: { en: "Use 'will' for spontaneous decisions and offers made at the moment of speaking.", de: "Verwende 'will' für spontane Entscheidungen und Angebote im Moment des Sprechens." }
  },
  {
    prompt: { en: "She ___ a new course next semester. She already enrolled.", de: "Sie wird nächstes Semester einen neuen Kurs belegen. Sie hat sich bereits eingeschrieben." },
    words: ["is going to take", "will take", "takes", "will be taking"],
    correct: "is going to take",
    explanation: { en: "Use 'going to' for plans and intentions already decided before speaking.", de: "Verwende 'going to' für Pläne und Absichten, die bereits vor dem Sprechen entschieden wurden." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I will meet John at 6 – we booked a table yesterday.",
    mistakeIndex: 1,
    correction: "am meeting",
    explanation: { en: "For pre-arranged appointments with specific times, use Present Continuous, not 'will'.", de: "Für im Voraus vereinbarte Termine mit bestimmten Zeiten verwende Present Continuous, nicht 'will'." }
  },
  {
    sentence: "Look out! The vase will fall!",
    mistakeIndex: 4,
    correction: "is going to fall",
    explanation: { en: "When there is visible evidence of what's about to happen, use 'going to', not 'will'.", de: "Wenn es sichtbare Anzeichen dafür gibt, was passieren wird, verwende 'going to', nicht 'will'." }
  },
  {
    sentence: "By next month, I am working here for ten years.",
    mistakeIndex: 4,
    correction: "will have been working",
    explanation: { en: "Use Future Perfect Continuous for duration up to a future point: 'will have been working'.", de: "Verwende Future Perfect Continuous für eine Dauer bis zu einem zukünftigen Zeitpunkt: 'will have been working'." }
  },
  {
    sentence: "This time tomorrow I will sit on the beach.",
    mistakeIndex: 4,
    correction: "will be sitting",
    explanation: { en: "Use Future Continuous for an action in progress at a specific future time.", de: "Verwende Future Continuous für eine Handlung, die zu einem bestimmten zukünftigen Zeitpunkt im Gange sein wird." }
  }
];

const grammarRacerData = [
  {
    prompt: "I think it ___ a beautiful day tomorrow.",
    options: ["will be", "is being", "is going to be"],
    correct: "will be",
    explanation: "'Will' for predictions based on opinion/belief (I think...)."
  },
  {
    prompt: "By 2030, scientists ___ a cure for the disease.",
    options: ["will have found", "will find", "are finding"],
    correct: "will have found",
    explanation: "Future Perfect for completion before a future point."
  },
  {
    prompt: "We ___ dinner at 7. The reservation is confirmed.",
    options: ["are having", "will have", "have"],
    correct: "are having",
    explanation: "Present Continuous for fixed arrangements."
  },
  {
    prompt: "Don't call me at 9 – I ___ the exam then.",
    options: ["will be taking", "will take", "take"],
    correct: "will be taking",
    explanation: "Future Continuous for an activity in progress at a future time."
  },
  {
    prompt: "She's very determined. She ___ a doctor one day.",
    options: ["is going to become", "becomes", "will have become"],
    correct: "is going to become",
    explanation: "'Going to' for intentions and strong plans."
  }
];

export const futureFormsReview = {
  id: 'b2_g2',
  title: {
    en: 'Future Forms Review – All Future Tenses',
    de: 'Zukunftsformen im Überblick – Alle Zukunftszeiten'
  },
  description: {
    en: "Master the differences between will, going to, present continuous, future perfect, and future continuous.",
    de: "Meistere die Unterschiede zwischen will, going to, Present Continuous, Future Perfect und Future Continuous."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Future Forms Review – Choosing the Right Future Tense 🔮

English has **five main ways** to talk about the future, each with its own specific use. At B2 level, knowing when to use which form makes your English sound natural and precise.

### 1. Will – Predictions, Decisions & Promises

**Form:** will + base verb

Use for:
- **Predictions based on opinion:** "I think AI **will change** everything."
- **Spontaneous decisions:** "I'm cold. I**'ll close** the window."
- **Promises & offers:** "I**'ll help** you move this weekend."

### 2. Going to – Plans & Evidence-Based Predictions

**Form:** am/is/are + going to + base verb

Use for:
- **Pre-decided plans:** "We**'re going to visit** Japan next summer." (already decided)
- **Predictions based on evidence:** "Look at those clouds – it**'s going to rain**."

### 3. Present Continuous – Fixed Arrangements

**Form:** am/is/are + -ing

Use for:
- **Personal arrangements with a specific time/place:** "I**'m having** dinner with Tom at 7."
- **Confirmed plans:** "She**'s flying** to London on Friday."

> 💡 The difference between *going to* (intention) and *Present Continuous* (arrangement) is subtle. Present Continuous implies the arrangement is confirmed (booked, agreed upon).

### 4. Future Continuous – Actions in Progress

**Form:** will be + -ing

Use for:
- **An action in progress at a specific future time:** "At 10 PM, I**'ll be watching** the match."
- **Polite inquiries:** "**Will** you **be using** the car tonight?"
- **Planned future as a matter of course:** "I**'ll be seeing** her tomorrow anyway."

### 5. Future Perfect – Completion Before a Deadline

**Form:** will have + past participle

Use for:
- **An action completed before a specific future point:** "By June, I**'ll have graduated**."
- **Duration up to a future point** (with continuous): "By next year, she**'ll have been working** here for a decade."

### Quick Comparison Table 📊

| Future Form | Example | Key Use |
|-------------|---------|---------|
| **will** | "It will rain tomorrow." | opinion/prediction |
| **going to** | "It's going to rain." (clouds!) | evidence/plan |
| **Present Continuous** | "I'm meeting her at 5." | arrangement |
| **Future Continuous** | "I'll be sleeping at midnight." | in progress at a time |
| **Future Perfect** | "I'll have finished by 6." | completed before a time |

<GamePlaceholder id="sentenceBuilder" />

### Common Mistakes ❌

**Mistake 1:** Using 'will' for pre-arranged plans
- ❌ "I **will meet** Sarah at 3 tomorrow." (if already arranged)
- ✅ "I**'m meeting** Sarah at 3 tomorrow."

**Mistake 2:** Using 'will' when there's visible evidence
- ❌ "Careful! You **will** drop that!"
- ✅ "Careful! You**'re going to** drop that!"

**Mistake 3:** Confusing Future Perfect and Future Simple
- ❌ "By Friday, I **will finish** the report."
- ✅ "By Friday, I **will have finished** the report."

**Mistake 4:** Using Present Simple for future arrangements
- ❌ "I **fly** to Berlin tomorrow." (informal/rare)
- ✅ "I**'m flying** to Berlin tomorrow."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Key Tips:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Spontaneous?</strong> → will</li>
    <li><strong>Already decided?</strong> → going to</li>
    <li><strong>Confirmed arrangement?</strong> → Present Continuous</li>
    <li><strong>In progress at a future time?</strong> → Future Continuous</li>
    <li><strong>Completed before a future time?</strong> → Future Perfect</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Zukunftsformen im Überblick – Die richtige Zukunftszeit wählen 🔮

Englisch hat **fünf Hauptwege**, um über die Zukunft zu sprechen, jeder mit einem bestimmten Verwendungszweck. Auf B2-Niveau macht es dein Englisch natürlich und präzise, wenn du weißt, wann du welche Form verwendest.

### 1. Will – Vorhersagen, Entscheidungen & Versprechen

**Form:** will + Grundform des Verbs

Verwende für:
- **Vorhersagen basierend auf Meinung:** "I think AI **will change** everything."
- **Spontane Entscheidungen:** "I'm cold. I**'ll close** the window."
- **Versprechen & Angebote:** "I**'ll help** you move this weekend."

### 2. Going to – Pläne & evidenzbasierte Vorhersagen

**Form:** am/is/are + going to + Grundform

Verwende für:
- **Bereits entschiedene Pläne:** "We**'re going to visit** Japan next summer."
- **Vorhersagen basierend auf Beweisen:** "Look at those clouds – it**'s going to rain**."

### 3. Present Continuous – Feste Verabredungen

**Form:** am/is/are + -ing

Verwende für:
- **Persönliche Verabredungen mit bestimmter Zeit/Ort:** "I**'m having** dinner with Tom at 7."

> 💡 Der Unterschied zwischen *going to* (Absicht) und *Present Continuous* (Verabredung) ist subtil. Present Continuous impliziert, dass die Verabredung bestätigt ist.

### 4. Future Continuous – Handlungen im Verlauf

**Form:** will be + -ing

Verwende für:
- **Eine Handlung im Verlauf zu einem bestimmten zukünftigen Zeitpunkt:** "At 10 PM, I**'ll be watching** the match."

### 5. Future Perfect – Abschluss vor einer Frist

**Form:** will have + Partizip Perfekt

Verwende für:
- **Eine vor einem bestimmten Zeitpunkt abgeschlossene Handlung:** "By June, I**'ll have graduated**."

### Schnelle Vergleichstabelle 📊

| Zukunftsform | Beispiel | Hauptverwendung |
|-------------|---------|-----------------|
| **will** | "It will rain tomorrow." | Meinung/Vorhersage |
| **going to** | "It's going to rain." | Beweis/Plan |
| **Present Continuous** | "I'm meeting her at 5." | Verabredung |
| **Future Continuous** | "I'll be sleeping at midnight." | im Verlauf |
| **Future Perfect** | "I'll have finished by 6." | abgeschlossen vor |

<GamePlaceholder id="sentenceBuilder" />

### Häufige Fehler ❌

**Fehler 1:** 'Will' für vorab vereinbarte Pläne verwenden
- ❌ "I **will meet** Sarah at 3 tomorrow."
- ✅ "I**'m meeting** Sarah at 3 tomorrow."

**Fehler 2:** 'Will' verwenden, wenn sichtbare Beweise vorliegen
- ❌ "Careful! You **will** drop that!"
- ✅ "Careful! You**'re going to** drop that!"

**Fehler 3:** Future Perfect und Future Simple verwechseln
- ❌ "By Friday, I **will finish** the report."
- ✅ "By Friday, I **will have finished** the report."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Wichtige Tipps:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Spontan?</strong> → will</li>
    <li><strong>Bereits entschieden?</strong> → going to</li>
    <li><strong>Bestätigte Verabredung?</strong> → Present Continuous</li>
    <li><strong>Im Verlauf zu einem zukünftigen Zeitpunkt?</strong> → Future Continuous</li>
    <li><strong>Abgeschlossen vor einem zukünftigen Zeitpunkt?</strong> → Future Perfect</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  }
};
