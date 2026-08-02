import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "The results were disappointing. ___, we learned a great deal from the experience.", de: "Die Ergebnisse waren enttäuschend. Allerdings haben wir viel aus der Erfahrung gelernt." },
    words: ["Having said that", "By the way", "In other words", "For instance"],
    correct: "Having said that",
    explanation: { en: "'Having said that' introduces a contrasting point after a concession. It means 'despite what I just said'.", de: "'Having said that' führt einen kontrastierenden Punkt nach einem Zugeständnis ein. Es bedeutet 'trotz dem, was ich gerade gesagt habe'." }
  },
  {
    prompt: { en: "The proposal has some merits. ___, there are serious concerns about the budget.", de: "Der Vorschlag hat einige Vorzüge. Allerdings gibt es ernsthafte Bedenken bezüglich des Budgets." },
    words: ["That said", "Moreover", "In addition", "Similarly"],
    correct: "That said",
    explanation: { en: "'That said' (or 'that being said') concedes a previous point while introducing a contrasting one.", de: "'That said' räumt einen vorherigen Punkt ein und führt gleichzeitig einen kontrastierenden ein." }
  },
  {
    prompt: { en: "The hotel was a bit dated. ___, the staff were incredibly friendly.", de: "Das Hotel war etwas veraltet. Wohlgemerkt, das Personal war unglaublich freundlich." },
    words: ["Mind you", "As a result", "Furthermore", "In conclusion"],
    correct: "Mind you",
    explanation: { en: "'Mind you' adds a qualifying or surprising piece of information that partially offsets the previous statement.", de: "'Mind you' (Wohlgemerkt) fügt eine einschränkende oder überraschende Information hinzu." }
  },
  {
    prompt: { en: "I think the plan needs more work. ___, I could be wrong about this.", de: "Ich denke, der Plan braucht mehr Arbeit. Wohlgemerkt, ich könnte mich irren." },
    words: ["Then again", "Therefore", "As a result", "In fact"],
    correct: "Then again",
    explanation: { en: "'Then again' introduces a reconsideration or counter-argument to what you just said.", de: "'Then again' führt eine Neuüberlegung oder ein Gegenargument ein." }
  },
  {
    prompt: { en: "___, what I was trying to say is that we need more time for testing.", de: "Wie dem auch sei, was ich sagen wollte, ist, dass wir mehr Zeit zum Testen brauchen." },
    words: ["Anyway", "However", "Nevertheless", "Furthermore"],
    correct: "Anyway",
    explanation: { en: "'Anyway' is used to return to the main topic after a digression.", de: "'Anyway' wird verwendet, um nach einer Abschweifung zum Hauptthema zurückzukehren." }
  },
  {
    prompt: { en: "The data shows a clear trend. ___, it suggests that our approach is working.", de: "Die Daten zeigen einen klaren Trend. Das heißt, es deutet darauf hin, dass unser Ansatz funktioniert." },
    words: ["I mean", "By the way", "Anyway", "Mind you"],
    correct: "I mean",
    explanation: { en: "'I mean' is used to clarify, rephrase, or elaborate on a previous statement.", de: "'I mean' wird verwendet, um eine vorherige Aussage zu klären oder auszuarbeiten." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "The project failed. By the way, we learned important lessons from it.",
    mistakeIndex: 3,
    correction: "Having said that",
    explanation: { en: "'By the way' introduces unrelated topics. For a concessive contrast, use 'Having said that' or 'That said'.", de: "'By the way' führt unverwandte Themen ein. Für einen konzessiven Kontrast verwende 'Having said that'." }
  },
  {
    sentence: "She is very talented. As I was saying, she still needs more experience.",
    mistakeIndex: 4,
    correction: "That said",
    explanation: { en: "'As I was saying' returns to a previously interrupted topic. For contrast, use 'That said' or 'Having said that'.", de: "'As I was saying' kehrt zu einem unterbrochenen Thema zurück. Für Kontrast verwende 'That said'." }
  },
  {
    sentence: "The restaurant was expensive. In other words, the food was absolutely delicious.",
    mistakeIndex: 4,
    correction: "Mind you",
    explanation: { en: "'In other words' rephrases; it doesn't introduce a surprising contrast. Use 'Mind you' for an unexpected qualifying addition.", de: "'In other words' formuliert um. Verwende 'Mind you' für eine überraschende Ergänzung." }
  },
  {
    sentence: "Well, I think we should postpone. Moreover, maybe we should cancel entirely.",
    mistakeIndex: 6,
    correction: "Then again",
    explanation: { en: "'Moreover' adds to the same argument. 'Then again' introduces a reconsideration or opposite thought.", de: "'Moreover' ergänzt dasselbe Argument. 'Then again' führt eine Neuüberlegung ein." }
  }
];

const grammarRacerData = [
  {
    prompt: "I don't really like the design. ___, it does serve its purpose well.",
    options: ["Mind you", "In addition", "For example"],
    correct: "Mind you",
    explanation: "'Mind you' adds a qualifying point that partially offsets the criticism."
  },
  {
    prompt: "Sorry, I got sidetracked. ___, the main point is that we need a new strategy.",
    options: ["Anyway", "Moreover", "Mind you"],
    correct: "Anyway",
    explanation: "'Anyway' returns to the main topic after a digression."
  },
  {
    prompt: "The plan isn't perfect. ___, no plan ever is at this stage.",
    options: ["Then again", "In addition", "As a result"],
    correct: "Then again",
    explanation: "'Then again' introduces a reconsideration that softens the previous statement."
  },
  {
    prompt: "The research has some flaws. ___, the overall methodology is sound.",
    options: ["Having said that", "Therefore", "In other words"],
    correct: "Having said that",
    explanation: "'Having said that' concedes the previous point while introducing a positive contrast."
  }
];

export const discourseMarkers = {
  id: 'c1_g7',
  title: {
    en: 'Discourse Markers & Pragmatics',
    de: 'Diskursmarker & Pragmatik'
  },
  description: {
    en: "Master discourse markers like well, mind you, that said, having said that, and as I was saying.",
    de: "Diskursmarker wie well, mind you, that said, having said that und as I was saying meistern."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />,
  },
  content: {
    en: `
## Discourse Markers & Pragmatics 💬🧠

**Discourse markers** are words and phrases that organize speech, signal relationships between ideas, and manage conversations. At C1 level, mastering them is essential for sounding **natural, fluent, and sophisticated**.

### 1. Concessive / Contrasting Markers 🔄

These acknowledge a point before introducing a contrast:

| Marker | Function | Example |
|---|---|---|
| **Having said that** | Formal concession + contrast | "The plan has risks. Having said that, I believe it's worth trying." |
| **That said** | Slightly less formal | "It was expensive. That said, the quality was excellent." |
| **Mind you** | Informal, adds surprising info | "It was cold. Mind you, we still had a great time." |
| **Then again** | Reconsideration | "I should study more. Then again, I did pass the last exam." |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 "Having said that" vs "That said":</h3>
  <p><strong>Having said that</strong> — slightly more formal, often in writing or presentations</p>
  <p><strong>That said</strong> — more conversational, common in both speech and writing</p>
  <p>Both are interchangeable in most contexts.</p>
</div>

### 2. Topic Management Markers 🎯

| Marker | Function | Example |
|---|---|---|
| **Anyway** | Return to main topic | "Sorry, I digressed. Anyway, the main issue is..." |
| **As I was saying** | Resume after interruption | "As I was saying before we were interrupted..." |
| **By the way** | Introduce side topic | "The report is due Friday. By the way, have you seen the new template?" |
| **Speaking of which** | Link to related topic | "We need more staff. Speaking of which, did you see the job posting?" |
| **Incidentally** | Formal side note | "The data supports our thesis. Incidentally, similar findings were reported in Japan." |

### 3. Clarification & Reformulation Markers 📝

| Marker | Function | Example |
|---|---|---|
| **I mean** | Clarify/rephrase | "It was hard. I mean, not impossible, but challenging." |
| **That is to say** | Formal rephrasing | "The results were inconclusive, that is to say, we need more data." |
| **In other words** | Simpler rephrasing | "The margin was razor-thin. In other words, we barely broke even." |
| **What I'm trying to say is** | Self-correction | "What I'm trying to say is that we need a different approach." |
| **Well** | Hesitation/softening | "Well, I'm not entirely sure about that." |
| **You know** | Shared understanding | "It was, you know, one of those situations where nothing goes right." |

<GamePlaceholder id="sentenceBuilder" />

### 4. Attitude & Stance Markers 🎭

| Marker | Function | Example |
|---|---|---|
| **Frankly** | Direct honesty | "Frankly, I think the proposal needs a complete rewrite." |
| **To be honest** | Honest opinion | "To be honest, I wasn't impressed by the presentation." |
| **Admittedly** | Conceding a weakness | "Admittedly, our sample size was small." |
| **Arguably** | Debatable claim | "This is arguably the best film of the decade." |

### 5. Common Mistakes ❌

**Mistake 1:** Using "by the way" for contrast (it's for side topics).
- ❌ "The food was bad. By the way, the service was excellent."
- ✅ "The food was bad. **Mind you**, the service was excellent."

**Mistake 2:** Using "moreover" for contrast (it adds to the same argument).
- ❌ "I like the idea. Moreover, it might not work."
- ✅ "I like the idea. **Then again**, it might not work."

**Mistake 3:** Overusing "like" and "you know" in formal contexts.
- ❌ "The data, like, you know, shows a clear trend."
- ✅ "The data shows a clear trend."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Concessive:</strong> Having said that, that said, mind you, then again</li>
    <li><strong>Topic management:</strong> Anyway, as I was saying, by the way, speaking of which</li>
    <li><strong>Clarification:</strong> I mean, in other words, that is to say</li>
    <li><strong>Attitude:</strong> Frankly, to be honest, admittedly, arguably</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Diskursmarker & Pragmatik 💬🧠

**Diskursmarker** sind Wörter und Phrasen, die Sprache organisieren, Beziehungen zwischen Ideen signalisieren und Gespräche steuern. Auf C1-Niveau ist ihre Beherrschung für **natürliches, fließendes und anspruchsvolles** Englisch unverzichtbar.

### 1. Konzessive / Kontrastierende Marker 🔄

Diese erkennen einen Punkt an, bevor sie einen Kontrast einführen:

| Marker | Funktion | Beispiel |
|---|---|---|
| **Having said that** | Formelle Konzession + Kontrast | "The plan has risks. Having said that, I believe it's worth trying." |
| **That said** | Etwas weniger formell | "It was expensive. That said, the quality was excellent." |
| **Mind you** | Informell, überraschende Info | "It was cold. Mind you, we still had a great time." |
| **Then again** | Neuüberlegung | "I should study more. Then again, I did pass the last exam." |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 "Having said that" vs "That said":</h3>
  <p><strong>Having said that</strong> — etwas formeller, oft in Schrift oder Präsentationen</p>
  <p><strong>That said</strong> — gesprächiger, in Sprache und Schrift üblich</p>
  <p>Beide sind in den meisten Kontexten austauschbar.</p>
</div>

### 2. Themenmanagement-Marker 🎯

| Marker | Funktion | Beispiel |
|---|---|---|
| **Anyway** | Zurück zum Hauptthema | "Sorry, I digressed. Anyway, the main issue is..." |
| **As I was saying** | Nach Unterbrechung fortfahren | "As I was saying before we were interrupted..." |
| **By the way** | Nebenthema einführen | "The report is due Friday. By the way, have you seen the template?" |
| **Speaking of which** | Verwandtes Thema verknüpfen | "We need more staff. Speaking of which, did you see the job posting?" |

### 3. Klärungs- & Reformulierungsmarker 📝

| Marker | Funktion | Beispiel |
|---|---|---|
| **I mean** | Klären/umformulieren | "It was hard. I mean, not impossible, but challenging." |
| **That is to say** | Formell umformulieren | "The results were inconclusive, that is to say, we need more data." |
| **In other words** | Einfacher umformulieren | "The margin was razor-thin. In other words, we barely broke even." |
| **Well** | Zögern/Abschwächen | "Well, I'm not entirely sure about that." |
| **You know** | Gemeinsames Verständnis | "It was, you know, one of those situations..." |

<GamePlaceholder id="sentenceBuilder" />

### 4. Haltungs- & Einstellungsmarker 🎭

| Marker | Funktion | Beispiel |
|---|---|---|
| **Frankly** | Direkte Ehrlichkeit | "Frankly, I think the proposal needs a rewrite." |
| **To be honest** | Ehrliche Meinung | "To be honest, I wasn't impressed." |
| **Admittedly** | Schwäche einräumen | "Admittedly, our sample size was small." |
| **Arguably** | Diskutable Behauptung | "This is arguably the best film of the decade." |

### 5. Häufige Fehler ❌

**Fehler 1:** "By the way" für Kontrast verwenden (ist für Nebenthemen).
- ❌ "The food was bad. By the way, the service was excellent."
- ✅ "The food was bad. **Mind you**, the service was excellent."

**Fehler 2:** "Moreover" für Kontrast verwenden (ergänzt dasselbe Argument).
- ❌ "I like the idea. Moreover, it might not work."
- ✅ "I like the idea. **Then again**, it might not work."

**Fehler 3:** "Like" und "you know" in formellen Kontexten übermäßig verwenden.
- ❌ "The data, like, you know, shows a clear trend."
- ✅ "The data shows a clear trend."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Konzessiv:</strong> Having said that, that said, mind you, then again</li>
    <li><strong>Themenmanagement:</strong> Anyway, as I was saying, by the way, speaking of which</li>
    <li><strong>Klärung:</strong> I mean, in other words, that is to say</li>
    <li><strong>Haltung:</strong> Frankly, to be honest, admittedly, arguably</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Discourse Markers & Pragmatics',
      description: 'Practice using discourse markers naturally in conversation and writing.',
      checklist: [
        { text: 'Write a dialogue using at least 5 different discourse markers', checked: false },
        { text: 'Identify the function of discourse markers in a news article', checked: false },
        { text: 'Rewrite a formal email adding appropriate discourse markers', checked: false }
      ]
    },
    de: {
      title: 'Diskursmarker & Pragmatik',
      description: 'Übe die natürliche Verwendung von Diskursmarkern in Gespräch und Schrift.',
      checklist: [
        { text: 'Schreibe einen Dialog mit mindestens 5 verschiedenen Diskursmarkern', checked: false },
        { text: 'Identifiziere die Funktion von Diskursmarkern in einem Nachrichtenartikel', checked: false },
        { text: 'Schreibe eine formelle E-Mail um und füge passende Diskursmarker hinzu', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
