import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "___ down the street, I noticed a new café had opened.", de: "Als ich die Straße entlangging, bemerkte ich, dass ein neues Café eröffnet hatte." },
    words: ["Walking", "Walked", "Having walked", "To walk"],
    correct: "Walking",
    explanation: { en: "Present participle clause: 'Walking down the street' = 'As I was walking down the street'.", de: "Partizip-Präsens-Satz: 'Walking down the street' = 'Als ich die Straße entlangging'." }
  },
  {
    prompt: { en: "___ in 1984, the novel became an instant classic.", de: "Das 1984 geschriebene Buch wurde sofort ein Klassiker." },
    words: ["Written", "Writing", "Having written", "Wrote"],
    correct: "Written",
    explanation: { en: "Past participle clause: 'Written in 1984' = 'The novel, which was written in 1984'.", de: "Partizip-Perfekt-Satz: 'Written in 1984' = 'Das Buch, das 1984 geschrieben wurde'." }
  },
  {
    prompt: { en: "___ by the news, she sat down and cried.", de: "Schockiert von der Nachricht, setzte sie sich hin und weinte." },
    words: ["Shocked", "Shocking", "Having shocked", "Being shock"],
    correct: "Shocked",
    explanation: { en: "Past participle 'shocked' because SHE was shocked (passive meaning).", de: "Partizip Perfekt 'shocked', weil SIE geschockt wurde (passive Bedeutung)." }
  },
  {
    prompt: { en: "The children ran outside, ___ with excitement.", de: "Die Kinder rannten nach draußen und schrien vor Aufregung." },
    words: ["screaming", "screamed", "having screamed", "to scream"],
    correct: "screaming",
    explanation: { en: "Present participle 'screaming' describes a simultaneous action.", de: "Partizip Präsens 'screaming' beschreibt eine gleichzeitige Handlung." }
  },
  {
    prompt: { en: "___ with care, the package arrived in perfect condition.", de: "Sorgfältig verpackt, kam das Paket in einwandfreiem Zustand an." },
    words: ["Wrapped", "Wrapping", "Having wrapped", "To wrap"],
    correct: "Wrapped",
    explanation: { en: "Past participle 'wrapped' because the package WAS wrapped (passive).", de: "Partizip Perfekt 'wrapped', weil das Paket verpackt WURDE (passiv)." }
  },
  {
    prompt: { en: "___ that it was getting late, we decided to leave.", de: "Da wir merkten, dass es spät wurde, beschlossen wir zu gehen." },
    words: ["Realizing", "Realized", "Having realize", "To realize"],
    correct: "Realizing",
    explanation: { en: "Present participle for simultaneous/reason clause: 'Because we realized...'", de: "Partizip Präsens für gleichzeitige/Begründungssätze: 'Weil wir merkten...'" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "Walked along the beach, we found a beautiful shell.",
    mistakeIndex: 0,
    correction: "Walking",
    explanation: { en: "Use present participle 'Walking' for an active, simultaneous action: 'Walking along the beach, we found...'", de: "Verwende Partizip Präsens 'Walking' für eine aktive, gleichzeitige Handlung." }
  },
  {
    sentence: "Writing in French, the book was difficult for me to read.",
    mistakeIndex: 0,
    correction: "Written",
    explanation: { en: "The book WAS written (passive), so use past participle 'Written in French, the book...'", de: "Das Buch WURDE geschrieben (passiv), also verwende Partizip Perfekt 'Written in French'." }
  },
  {
    sentence: "Exciting by the idea, the team started working immediately.",
    mistakeIndex: 0,
    correction: "Excited",
    explanation: { en: "The team WAS excited (passive/state), not 'exciting'. Use past participle 'Excited'.", de: "Das Team WAR begeistert (passiv/Zustand), nicht 'exciting'. Verwende Partizip Perfekt 'Excited'." }
  },
  {
    sentence: "Not known what to say, he remained silent.",
    mistakeIndex: 1,
    correction: "knowing",
    explanation: { en: "Active meaning: HE didn't know → 'Not knowing what to say' (present participle).", de: "Aktive Bedeutung: ER wusste nicht → 'Not knowing what to say' (Partizip Präsens)." }
  },
  {
    sentence: "Locating in the city centre, the hotel is easy to find.",
    mistakeIndex: 0,
    correction: "Located",
    explanation: { en: "The hotel IS located (passive state) → 'Located in the city centre'.", de: "Das Hotel IST gelegen (passiver Zustand) → 'Located in the city centre'." }
  }
];

const grammarRacerData = [
  {
    prompt: "___ carefully, the letter revealed some surprising information.",
    options: ["Read", "Reading", "Having reading"],
    correct: "Read",
    explanation: "Past participle 'Read' – the letter WAS read (passive meaning)."
  },
  {
    prompt: "___ hard all day, we decided to take a break.",
    options: ["Working", "Worked", "Work"],
    correct: "Working",
    explanation: "Present participle – WE were working (active, simultaneous action)."
  },
  {
    prompt: "The painting, ___ by Monet, sold for millions.",
    options: ["created", "creating", "creates"],
    correct: "created",
    explanation: "Past participle – the painting WAS created by Monet."
  },
  {
    prompt: "___ in the dark, we couldn't find the exit.",
    options: ["Standing", "Stood", "Stand"],
    correct: "Standing",
    explanation: "Present participle – WE were standing (active, ongoing action)."
  },
  {
    prompt: "The documents, ___ on the desk, were clearly important.",
    options: ["left", "leaving", "leave"],
    correct: "left",
    explanation: "Past participle – the documents WERE left on the desk."
  }
];

export const presentPastParticiples = {
  id: 'b2_g10',
  title: {
    en: 'Present & Past Participle Clauses',
    de: 'Partizip-Präsens- & Partizip-Perfekt-Sätze'
  },
  description: {
    en: "Replace relative and adverb clauses with participle clauses: 'Walking down the street, I saw...'",
    de: "Ersetzung von Relativ- und Adverbialsätzen durch Partizipialsätze: 'Walking down the street, I saw...'"
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Present & Past Participle Clauses 📝✨

Participle clauses allow you to **shorten** relative clauses and adverb clauses, making your English sound more **natural and sophisticated**. They are extremely common in written English and formal speech.

### 1. What Are Participle Clauses? 🤔

A participle clause uses a **present participle (-ing)** or **past participle (-ed/irregular)** instead of a full clause with a subject and finite verb.

| Full clause | Participle clause |
|-------------|-------------------|
| "**As I was walking** down the street, I saw a cat." | "**Walking** down the street, I saw a cat." |
| "The book, **which was written** in 1984, is a classic." | "The book, **written** in 1984, is a classic." |
| "**Because she felt** tired, she went to bed early." | "**Feeling** tired, she went to bed early." |

### 2. Present Participle Clauses (-ing) 🔵

Use the **present participle (-ing form)** when:
- The subject **actively does** something
- Two actions happen **at the same time**
- One action is the **reason** for another

**Simultaneous actions:**
- "**Smiling** broadly, she accepted the award." (= She was smiling as she accepted it)
- "He sat at the desk, **typing** furiously." (= He sat and typed at the same time)

**Reason/cause:**
- "**Feeling** ill, he stayed home." (= Because he felt ill...)
- "**Not wanting** to be late, she took a taxi." (= Because she didn't want to be late...)

### 3. Past Participle Clauses (-ed / irregular) 🔴

Use the **past participle** when the subject **receives** the action (passive meaning):

- "**Built** in the 18th century, the castle still stands." (= The castle, **which was built**...)
- "**Shocked** by the news, she couldn't speak." (= She **was shocked** by the news, so...)
- "**Written** in plain English, the guide is easy to follow." (= The guide, **which was written**...)

### 4. Position in the Sentence 📍

Participle clauses can go **before** or **after** the main clause:

| Position | Example |
|----------|---------|
| **Before** | "**Walking** home, I saw an accident." |
| **After** | "I saw an accident **walking** home." |
| **Mid-sentence** | "The man, **wearing** a blue hat, waved at me." |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Watch out for dangling participles!</h3>
  <p>The participle clause MUST refer to the <strong>subject</strong> of the main clause:</p>
  <p>❌ "<strong>Walking</strong> down the road, <strong>the trees</strong> were beautiful." (The trees weren't walking!)</p>
  <p>✅ "<strong>Walking</strong> down the road, <strong>I</strong> noticed the beautiful trees."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 5. Replacing Different Clause Types 🔄

| Original clause type | Example with participle |
|---------------------|------------------------|
| **Relative clause** | "The woman **sitting** next to me is a doctor." (= who is sitting) |
| **Time clause** | "**Arriving** at the station, I called a taxi." (= When I arrived) |
| **Reason clause** | "**Being** a teacher, she understood children." (= Because she was) |
| **Result clause** | "The bomb exploded, **destroying** the building." (= and it destroyed) |

### 6. Common Mistakes ❌

- ❌ "**Walked** along the beach, we found shells." → ✅ "**Walking** along the beach..." (active = -ing)
- ❌ "**Writing** in French, the book was hard to read." → ✅ "**Written** in French..." (passive = past participle)
- ❌ "**Exciting** by the idea, they started work." → ✅ "**Excited** by the idea..." (they WERE excited)

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Partizip-Präsens- & Partizip-Perfekt-Sätze 📝✨

Partizipialsätze ermöglichen es dir, Relativ- und Adverbialsätze zu **verkürzen** und dein Englisch **natürlicher und anspruchsvoller** klingen zu lassen. Sie sind im geschriebenen Englisch und in formeller Sprache extrem häufig.

### 1. Was sind Partizipialsätze? 🤔

Ein Partizipialsatz verwendet ein **Partizip Präsens (-ing)** oder **Partizip Perfekt (-ed/unregelmäßig)** anstelle eines vollständigen Satzes mit Subjekt und finitem Verb.

| Vollständiger Satz | Partizipialsatz |
|---------------------|-----------------|
| "**As I was walking** down the street, I saw a cat." | "**Walking** down the street, I saw a cat." |
| "The book, **which was written** in 1984, is a classic." | "The book, **written** in 1984, is a classic." |
| "**Because she felt** tired, she went to bed early." | "**Feeling** tired, she went to bed early." |

### 2. Partizip-Präsens-Sätze (-ing) 🔵

Verwende das **Partizip Präsens (-ing-Form)** wenn:
- Das Subjekt etwas **aktiv tut**
- Zwei Handlungen **gleichzeitig** passieren
- Eine Handlung der **Grund** für eine andere ist

**Gleichzeitige Handlungen:**
- "**Smiling** broadly, she accepted the award." (= Sie lächelte, als sie ihn annahm)
- "He sat at the desk, **typing** furiously." (= Er saß und tippte gleichzeitig)

**Grund/Ursache:**
- "**Feeling** ill, he stayed home." (= Weil er sich krank fühlte...)
- "**Not wanting** to be late, she took a taxi." (= Weil sie nicht zu spät kommen wollte...)

### 3. Partizip-Perfekt-Sätze (-ed / unregelmäßig) 🔴

Verwende das **Partizip Perfekt** wenn das Subjekt die Handlung **empfängt** (passive Bedeutung):

- "**Built** in the 18th century, the castle still stands." (= Das Schloss, **das gebaut wurde**...)
- "**Shocked** by the news, she couldn't speak." (= Sie **war geschockt** von der Nachricht, also...)
- "**Written** in plain English, the guide is easy to follow." (= Der Leitfaden, **der geschrieben wurde**...)

### 4. Position im Satz 📍

Partizipialsätze können **vor** oder **nach** dem Hauptsatz stehen:

| Position | Beispiel |
|----------|----------|
| **Davor** | "**Walking** home, I saw an accident." |
| **Danach** | "I saw an accident **walking** home." |
| **Mittendrin** | "The man, **wearing** a blue hat, waved at me." |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Vorsicht vor hängenden Partizipien!</h3>
  <p>Der Partizipialsatz MUSS sich auf das <strong>Subjekt</strong> des Hauptsatzes beziehen:</p>
  <p>❌ "<strong>Walking</strong> down the road, <strong>the trees</strong> were beautiful." (Die Bäume gingen nicht spazieren!)</p>
  <p>✅ "<strong>Walking</strong> down the road, <strong>I</strong> noticed the beautiful trees."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 5. Verschiedene Satztypen ersetzen 🔄

| Ursprünglicher Satztyp | Beispiel mit Partizip |
|------------------------|----------------------|
| **Relativsatz** | "The woman **sitting** next to me is a doctor." (= die neben mir sitzt) |
| **Zeitsatz** | "**Arriving** at the station, I called a taxi." (= Als ich ankam) |
| **Begründungssatz** | "**Being** a teacher, she understood children." (= Weil sie Lehrerin war) |
| **Ergebnissatz** | "The bomb exploded, **destroying** the building." (= und es zerstörte) |

### 6. Häufige Fehler ❌

- ❌ "**Walked** along the beach, we found shells." → ✅ "**Walking** along the beach..." (aktiv = -ing)
- ❌ "**Writing** in French, the book was hard to read." → ✅ "**Written** in French..." (passiv = Partizip Perfekt)
- ❌ "**Exciting** by the idea, they started work." → ✅ "**Excited** by the idea..." (sie WAREN begeistert)

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  }
};
