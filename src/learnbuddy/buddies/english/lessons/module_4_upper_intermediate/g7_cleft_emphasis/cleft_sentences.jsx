import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "It ___ John who broke the window.", de: "Es war John, der das Fenster zerbrochen hat." },
    words: ["was", "is", "were", "did"],
    correct: "was",
    explanation: { en: "It-cleft: 'It was + focused element + who/that...' emphasises WHO did it.", de: "It-Spaltsatz: 'It was + betontes Element + who/that...' betont, WER es getan hat." }
  },
  {
    prompt: { en: "What I ___ is a good cup of coffee.", de: "Was ich brauche, ist eine gute Tasse Kaffee." },
    words: ["need", "needs", "needed", "needing"],
    correct: "need",
    explanation: { en: "What-cleft: 'What I need is...' emphasises the thing needed.", de: "What-Spaltsatz: 'What I need is...' betont das, was gebraucht wird." }
  },
  {
    prompt: { en: "It was ___ the accident happened.", de: "Hier ist der Unfall passiert." },
    words: ["here that", "here where", "that here", "where here"],
    correct: "here that",
    explanation: { en: "It-cleft for place: 'It was here that the accident happened.'", de: "It-Spaltsatz für Ort: 'It was here that the accident happened.'" }
  },
  {
    prompt: { en: "All I ___ is for people to be honest.", de: "Alles, was ich will, ist, dass die Leute ehrlich sind." },
    words: ["want", "wants", "wanted", "wanting"],
    correct: "want",
    explanation: { en: "'All I want is...' — a what-cleft variation that emphasises the only thing desired.", de: "'All I want is...' — eine What-Spaltsatz-Variante, die das Einzige betont, das gewünscht wird." }
  },
  {
    prompt: { en: "The reason ___ I called is that I need your help.", de: "Der Grund, warum ich angerufen habe, ist, dass ich deine Hilfe brauche." },
    words: ["why", "that", "which", "because"],
    correct: "why",
    explanation: { en: "'The reason why... is that...' — emphasises the cause/motivation.", de: "'The reason why... is that...' — betont den Grund/die Motivation." }
  },
  {
    prompt: { en: "What ___ me most was her kindness.", de: "Was mich am meisten beeindruckt hat, war ihre Freundlichkeit." },
    words: ["impressed", "impresses", "impressing", "impress"],
    correct: "impressed",
    explanation: { en: "What-cleft in past: 'What impressed me most was...'", de: "What-Spaltsatz in der Vergangenheit: 'What impressed me most was...'" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "It was John which broke the window.",
    mistakeIndex: 3,
    correction: "who",
    explanation: { en: "Use 'who' (or 'that') for people in it-clefts, not 'which'.", de: "Verwende 'who' (oder 'that') für Personen in It-Spaltsätzen, nicht 'which'." }
  },
  {
    sentence: "What I need it is more time.",
    mistakeIndex: 3,
    correction: "is",
    explanation: { en: "Remove 'it': 'What I need is more time.' The 'what' clause already serves as the subject.", de: "Entferne 'it': 'What I need is more time.' Der 'what'-Satz dient bereits als Subjekt." }
  },
  {
    sentence: "It was yesterday when I met her.",
    mistakeIndex: 3,
    correction: "that",
    explanation: { en: "In it-clefts, use 'that' for time: 'It was yesterday that I met her.' ('when' is for relative clauses).", de: "In It-Spaltsätzen verwende 'that' für Zeit: 'It was yesterday that I met her.'" }
  },
  {
    sentence: "The thing what bothers me is the noise.",
    mistakeIndex: 2,
    correction: "that",
    explanation: { en: "'The thing that...' (not 'the thing what...'). 'What' is used at the start: 'What bothers me is...'", de: "'The thing that...' (nicht 'the thing what...'). 'What' wird am Anfang verwendet: 'What bothers me is...'" }
  }
];

const grammarRacerData = [
  {
    prompt: "It ___ the weather that ruined our trip.",
    options: ["was", "were", "did"],
    correct: "was",
    explanation: "It-cleft: 'It was the weather that...' — emphasises what ruined the trip."
  },
  {
    prompt: "What she said ___ that she was leaving.",
    options: ["was", "were", "is"],
    correct: "was",
    explanation: "What-cleft: 'What she said was...' — emphasises the content."
  },
  {
    prompt: "___ I want is a bit of peace and quiet.",
    options: ["All", "What all", "It"],
    correct: "All",
    explanation: "'All I want is...' — emphasises this is the ONLY thing desired."
  },
  {
    prompt: "It was in Paris ___ they first met.",
    options: ["that", "where", "which"],
    correct: "that",
    explanation: "It-cleft: use 'that' (not 'where') → 'It was in Paris that they first met.'"
  }
];

export const cleftSentences = {
  id: 'b2_g14',
  title: {
    en: 'It-Clefts & What-Clefts',
    de: 'It-Spaltsätze & What-Spaltsätze'
  },
  description: {
    en: "Emphasise specific information: 'It was John who...', 'What I need is...', 'All I want is...'",
    de: "Bestimmte Informationen betonen: 'It was John who...', 'What I need is...', 'All I want is...'"
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## It-Clefts & What-Clefts 🎯📢

Cleft sentences **split** a simple sentence into two parts to put **focus** on one particular piece of information. They are powerful tools for emphasis in both spoken and written English.

### 1. What Are Cleft Sentences? 🤔

The word "cleft" means "split". A cleft sentence takes a simple statement and divides it to **highlight** a specific element:

| Simple sentence | Cleft (emphasised) | What's highlighted |
|-----------------|--------------------|--------------------|
| "**John** broke the window." | "It was **John** who broke the window." | WHO did it |
| "I need **more time**." | "What I need is **more time**." | WHAT is needed |
| "We met **in Paris**." | "It was **in Paris** that we met." | WHERE it happened |
| "I lost my keys **yesterday**." | "It was **yesterday** that I lost my keys." | WHEN it happened |

### 2. It-Clefts 📌

**Structure: It + be + focused element + who/that + rest of sentence**

Use it-clefts to emphasise **who**, **what**, **where**, or **when**:

**Emphasising a person:**
- "It was **Sarah** who suggested the idea." (not someone else!)
- "It's **you** that I want to talk to."

**Emphasising a thing:**
- "It was **the noise** that kept me awake." (not anything else!)
- "It's **this book** that changed my life."

**Emphasising a place:**
- "It was **in London** that we first met."
- "It was **at the café** that she told me."

**Emphasising a time:**
- "It was **in 2020** that everything changed."
- "It wasn't **until midnight** that they arrived."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 who vs. that in it-clefts</h3>
  <p><strong>People:</strong> Use 'who' or 'that': "It was John <strong>who/that</strong> called."</p>
  <p><strong>Things/places/times:</strong> Use 'that': "It was <strong>the rain that</strong> caused the flood."</p>
  <p>❌ Never use 'which' in it-clefts: "It was the book <strong>which</strong>..." → ✅ "...that..."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 3. What-Clefts (Pseudo-Clefts) 📘

**Structure: What + subject + verb + be + focused element**

What-clefts emphasise the thing that is important:

- "**What I need** is a holiday." (= The thing I need is a holiday)
- "**What surprised me** was her reaction." (= The thing that surprised me)
- "**What he said** was completely wrong."
- "**What happened** was a disaster."

### 4. Variations of What-Clefts 🔄

| Pattern | Example |
|---------|---------|
| **All + subject + verb + be** | "**All I want** is some peace and quiet." |
| **The thing that** | "**The thing that** annoys me is the delay." |
| **The person who** | "**The person who** helped me was a stranger." |
| **The reason why** | "**The reason why** I'm here is to apologise." |
| **The place where** | "**The place where** we met is now closed." |
| **The way (that)** | "**The way** she said it was hurtful." |

### 5. Reversed What-Clefts 🔃

You can also reverse the order for variety:

- "A holiday is **what I need**."
- "Her reaction was **what surprised me**."
- "Some rest is **all I want**."

### 6. Common Mistakes ❌

- ❌ "It was John **which** broke it." → ✅ "...John **who/that** broke it."
- ❌ "What I need **it** is time." → ✅ "What I need is time." (no extra 'it')
- ❌ "It was yesterday **when** I saw her." → ✅ "It was yesterday **that** I saw her."
- ❌ "The thing **what** I like..." → ✅ "The thing **that** I like..." / "**What** I like..."

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## It-Spaltsätze & What-Spaltsätze 🎯📢

Spaltsätze **teilen** einen einfachen Satz in zwei Teile, um **eine bestimmte Information** in den Fokus zu rücken. Sie sind mächtige Werkzeuge zur Betonung im gesprochenen und geschriebenen Englisch.

### 1. Was sind Spaltsätze? 🤔

Das Wort "cleft" bedeutet "gespalten". Ein Spaltsatz nimmt eine einfache Aussage und teilt sie, um ein bestimmtes Element **hervorzuheben**:

| Einfacher Satz | Spaltsatz (betont) | Was hervorgehoben wird |
|----------------|--------------------|-----------------------|
| "**John** broke the window." | "It was **John** who broke the window." | WER es tat |
| "I need **more time**." | "What I need is **more time**." | WAS gebraucht wird |
| "We met **in Paris**." | "It was **in Paris** that we met." | WO es passierte |
| "I lost my keys **yesterday**." | "It was **yesterday** that I lost my keys." | WANN es passierte |

### 2. It-Spaltsätze 📌

**Struktur: It + be + betontes Element + who/that + Rest des Satzes**

Verwende It-Spaltsätze, um **wer**, **was**, **wo** oder **wann** zu betonen:

**Person betonen:**
- "It was **Sarah** who suggested the idea." (nicht jemand anderes!)
- "It's **you** that I want to talk to."

**Sache betonen:**
- "It was **the noise** that kept me awake." (nichts anderes!)
- "It's **this book** that changed my life."

**Ort betonen:**
- "It was **in London** that we first met."
- "It was **at the café** that she told me."

**Zeit betonen:**
- "It was **in 2020** that everything changed."
- "It wasn't **until midnight** that they arrived."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 who vs. that in It-Spaltsätzen</h3>
  <p><strong>Personen:</strong> Verwende 'who' oder 'that': "It was John <strong>who/that</strong> called."</p>
  <p><strong>Dinge/Orte/Zeiten:</strong> Verwende 'that': "It was <strong>the rain that</strong> caused the flood."</p>
  <p>❌ Verwende niemals 'which' in It-Spaltsätzen: "It was the book <strong>which</strong>..." → ✅ "...that..."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 3. What-Spaltsätze (Pseudo-Spaltsätze) 📘

**Struktur: What + Subjekt + Verb + be + betontes Element**

What-Spaltsätze betonen das, was wichtig ist:

- "**What I need** is a holiday." (= Das, was ich brauche, ist ein Urlaub)
- "**What surprised me** was her reaction." (= Das, was mich überraschte)
- "**What he said** was completely wrong."
- "**What happened** was a disaster."

### 4. Varianten von What-Spaltsätzen 🔄

| Muster | Beispiel |
|--------|----------|
| **All + Subjekt + Verb + be** | "**All I want** is some peace and quiet." |
| **The thing that** | "**The thing that** annoys me is the delay." |
| **The person who** | "**The person who** helped me was a stranger." |
| **The reason why** | "**The reason why** I'm here is to apologise." |
| **The place where** | "**The place where** we met is now closed." |
| **The way (that)** | "**The way** she said it was hurtful." |

### 5. Umgekehrte What-Spaltsätze 🔃

Du kannst die Reihenfolge auch für Abwechslung umkehren:

- "A holiday is **what I need**."
- "Her reaction was **what surprised me**."
- "Some rest is **all I want**."

### 6. Häufige Fehler ❌

- ❌ "It was John **which** broke it." → ✅ "...John **who/that** broke it."
- ❌ "What I need **it** is time." → ✅ "What I need is time." (kein extra 'it')
- ❌ "It was yesterday **when** I saw her." → ✅ "It was yesterday **that** I saw her."
- ❌ "The thing **what** I like..." → ✅ "The thing **that** I like..." / "**What** I like..."

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  }
};
