import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I went to the store ___ (buy) milk.", de: "Ich bin zum Laden gegangen, um ___ (kaufen) Milch." },
    words: ["to buy", "for buying", "so that buy", "buying"],
    correct: "to buy",
    explanation: { en: "Purpose with infinitive: to + verb", de: "Zweck mit Infinitiv: to + Verb" }
  },
  {
    prompt: { en: "She bought a gift ___ her friend.", de: "Sie hat ein Geschenk ___ (für) ihren Freund gekauft." },
    words: ["for", "to", "so that", "that"],
    correct: "for",
    explanation: { en: "Purpose for benefit: for + noun/person", de: "Zweck für Nutzen: for + Nomen/Person" }
  },
  {
    prompt: { en: "He studied hard ___ (pass) the exam.", de: "Er hat hart gelernt, ___ (bestehen) die Prüfung." },
    words: ["so that he could pass", "to pass", "for passing", "pass"],
    correct: "so that he could pass",
    explanation: { en: "Purpose for result: so that + clause (with modal)", de: "Zweck für Ergebnis: so that + Nebensatz (mit Modalverb)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I came here for see you.",
    mistakeIndex: 3,
    correction: "to see",
    explanation: { en: "Purpose with action: 'to see' (not 'for see')", de: "Zweck mit Handlung: 'to see' (nicht 'for see')" }
  },
  {
    sentence: "She left early so she catch the train.",
    mistakeIndex: 4,
    correction: "that she could catch",
    explanation: { en: "So that + full clause with modal", de: "So that + vollständiger Nebensatz mit Modalverb" }
  },
  {
    sentence: "He bought flowers to his wife.",
    mistakeIndex: 3,
    correction: "for",
    explanation: { en: "For + person/noun (not 'to his wife')", de: "For + Person/Nomen (nicht 'to his wife')" }
  }
];

const grammarRacerData = [
  {
    prompt: "I went to the store ___ milk.",
    options: ["to buy", "for buy", "so that buy"],
    correct: "to buy",
    explanation: "To + verb for purpose"
  },
  {
    prompt: "She bought it ___ her brother.",
    options: ["for", "to", "so that"],
    correct: "for",
    explanation: "For + person for benefit"
  },
  {
    prompt: "He whispered ___ we wouldn\'t hear.",
    options: ["so that", "to that", "for that"],
    correct: "so that",
    explanation: "So that + clause for result"
  }
];

export const purposeExpressions = {
  id: 'a2_g64',
  title: {
    en: 'to … , for … and so that … (Purpose)',
    de: 'to … , for … und so that … (Zweck)'
  },
  description: {
    en: "Expressing purpose and reason. 'I went to buy milk', 'This is for you', 'I left early so that I wouldn\'t be late'.",
    de: "Zweck und Grund ausdrücken. 'Ich bin gegangen, um Milch zu kaufen', 'Das ist für dich', 'Ich bin früh gegangen, damit ich nicht zu spät komme'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Expressing Purpose: to, for, and so that 🎯

When we talk about **why** we do something (purpose or reason), English has three main ways: **to + verb**, **for + noun/person**, and **so that + clause**. Each has a specific use, and choosing the right one makes your sentences clear and natural.

### Why Do We Need Different Ways to Express Purpose?

Purpose answers "Why?" or "What for?". Different structures fit different situations:
- **To + verb**: For the direct reason (what action you want to achieve)
- **For + noun**: For the benefit of someone/something
- **So that + clause**: For a specific result (often with modals like can, could, will)

Think about these:
- "I studied **to pass** the exam." (Direct purpose: the action of passing)
- "This gift is **for you**." (Benefit: it\'s meant for you)
- "I whispered **so that** you wouldn\'t hear." (Result: the outcome I wanted)

**Key idea:** Choose based on what follows – verb (to), noun (for), or full idea (so that).

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>To</strong> = for actions (infinitive); <strong>For</strong> = for people/things; <strong>So that</strong> = for results with a clause.</p>
  <p>These connect actions to their reasons – always think "Why am I doing this?"</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. To + Verb: Direct Purpose (Infinitive of Purpose) 🚀

Use **to + base verb** to explain the direct reason for an action. It's the most common for "why I did X – to do Y".

**Structure:** Action + to + base verb
- "I went to the store **to buy** bread." (Why? To buy – direct action)
- "She called **to check** if you\'re okay." (Why? To check)
- "We saved money **to travel** abroad." (Why? To travel)

**With negatives:** Use "not to + verb"
- "I didn't go **not to see** him." (Rare; better: "to avoid seeing")

**Why this structure?** It links one action directly to another – simple and clear for goals.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Important:</h3>
  <p><strong>To + verb</strong> is for the <strong>purpose of the action itself</strong>.</p>
  <p>Use base verb after 'to' (not -ing or past form).</p>
  <p>Common with verbs like go, come, study, work.</p>
</div>

### 2. For + Noun/Person: Purpose for Benefit 🎁

Use **for + noun/person** when the purpose is to benefit someone or something. It's not for actions, but for "what/who it\'s meant for".

**Structure:** Action + for + noun/person
- "This letter is **for you**." (It's meant for you)
- "I bought flowers **for my mom**." (Benefit for mom)
- "It's a tool **for cutting** wood." (Purpose: for the function of cutting)

**With things:** Often for objects or general use
- "We need batteries **for the remote**." (For the remote's benefit)

**Why this structure?** It shows the recipient or target – like "intended for X".

### 3. So That + Clause: Purpose for a Specific Result 📋

Use **so that + subject + verb** (full clause) when the purpose leads to a specific result. Often includes modals (can, could, will, would) to show possibility.

**Structure:** Action + so that + clause (often with modal)
- "I left early **so that** I wouldn\'t be late." (Result: not being late)
- "Speak clearly **so that** everyone can hear." (Result: hearing)
- "He saved money **so that** he could buy a car." (Result: buying with 'could')

**With modals:** Common for future/possibility
- "Turn off the light **so that** we save energy." (Will save)
- "She whispered **so that** the kids wouldn\'t wake." (Would not wake)

**Why this structure?** It's for complex results – when you need a full sentence to explain the outcome.

<GamePlaceholder id="fixTheMistake" />

### 4. Comparison: To, For, So That – When to Use Each? 🔄

Each has a unique role. Here's a table to compare:

| Structure   | What follows? | Use for...                  | Example                          |
|-------------|---------------|-----------------------------|----------------------------------|
| **To + verb** | Action (base verb) | Direct purpose of action   | Go to the store to buy milk     |
| **For + noun** | Person/thing/noun | Benefit or recipient       | Buy a gift for your friend      |
| **So that + clause** | Full sentence (often modal) | Specific result/outcome   | Study hard so that you pass     |

**Quick rules:**
- If explaining an **action reason**: Use "to + verb"
- If for a **person/thing**: Use "for + noun"
- If for a **result with details**: Use "so that + clause"

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>To + verb</strong> = Simple purpose (why the action? To do X)</li>
    <li><strong>For + noun</strong> = For someone's benefit (intended for Y)</li>
    <li><strong>So that + clause</strong> = For a result (so Z happens, often with can/will)</li>
    <li>Practice mixing: "I bought this for you so that you can use it."</li>
  </ul>
</div>

### 5. Common Mistakes ❌

**Mistake 1:** Using "for" with actions
- ❌ "I went for buy milk." (Wrong!)
- ✅ "I went **to buy** milk." (Correct – action purpose)

**Mistake 2:** Incomplete "so that"
- ❌ "I studied so I pass." (Wrong – needs clause)
- ✅ "I studied **so that I would pass**." (Correct)

**Mistake 3:** Confusing "for" and "to" with people
- ❌ "This is to my friend." (Wrong!)
- ✅ "This is **for** my friend." (Correct – benefit)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Purpose Expressions**
Choose the right structure! To for actions, for for benefits, so that for results!

<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Expressing Purpose</h3>
  <p className="mb-4">Write sentences expressing purpose:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence with "to + verb" (why you did something)</li>
    <li>One sentence with "for + noun/person" (something for someone)</li>
    <li>One sentence with "so that + clause" (for a result, use a modal)</li>
    <li>Combine two: Use "to" and "for" in one sentence</li>
  </ol>
</div>
    `,
    de: `
## Zweck ausdrücken: to, for und so that 🎯

Wenn wir über den **Grund** sprechen, warum wir etwas tun (Zweck oder Begründung), hat Englisch drei Hauptwege: **to + Verb**, **for + Nomen/Person** und **so that + Nebensatz**. Jeder hat eine spezifische Verwendung, und die richtige Wahl macht deine Sätze klar und natürlich.

### Warum brauchen wir verschiedene Wege, Zweck auszudrücken?

Zweck beantwortet "Warum?" oder "Wozu?". Verschiedene Strukturen passen zu verschiedenen Situationen:
- **To + Verb**: Für den direkten Grund (welche Handlung du erreichen willst)
- **For + Nomen**: Für den Nutzen von jemandem/etwas
- **So that + Nebensatz**: Für ein spezifisches Ergebnis (oft mit Modalverben wie can, could, will)

Denk an diese:
- "I studied **to pass** the exam." (Direkter Zweck: die Handlung Bestehen)
- "This gift is **for you**." (Nutzen: es ist für dich gemeint)
- "I whispered **so that** you wouldn\'t hear." (Ergebnis: das gewünschte Outcome)

**Schlüsselidee:** Wähle basierend darauf, was folgt – Verb (to), Nomen (for) oder vollständige Idee (so that).

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>To</strong> = für Handlungen (Infinitiv); <strong>For</strong> = für Personen/Dinge; <strong>So that</strong> = für Ergebnisse mit Nebensatz.</p>
  <p>Diese verbinden Handlungen mit ihren Gründen – denke immer "Warum tue ich das?"</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. To + Verb: Direkter Zweck (Infinitiv des Zwecks) 🚀

Verwende **to + Grundform**, um den direkten Grund für eine Handlung zu erklären. Es ist am häufigsten für "Warum habe ich X getan – um Y zu tun".

**Struktur:** Handlung + to + Grundform
- "I went to the store **to buy** bread." (Warum? Um zu kaufen – direkte Handlung)
- "She called **to check** if you\'re okay." (Warum? Um zu prüfen)
- "We saved money **to travel** abroad." (Warum? Um zu reisen)

**Mit Verneinung:** Verwende "not to + Verb"
- "I didn't go **not to see** him." (Selten; besser: "to avoid seeing")

**Warum diese Struktur?** Sie verknüpft eine Handlung direkt mit einer anderen – einfach und klar für Ziele.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Wichtig:</h3>
  <p><strong>To + Verb</strong> ist für den <strong>Zweck der Handlung selbst</strong>.</p>
  <p>Verwende Grundform nach 'to' (nicht -ing oder Vergangenheitsform).</p>
  <p>Häufig mit Verben wie go, come, study, work.</p>
</div>

### 2. For + Nomen/Person: Zweck für Nutzen 🎁

Verwende **for + Nomen/Person**, wenn der Zweck der Nutzen für jemanden oder etwas ist. Es ist nicht für Handlungen, sondern für "wofür/wem es gemeint ist".

**Struktur:** Handlung + for + Nomen/Person
- "This letter is **for you**." (Es ist für dich gemeint)
- "I bought flowers **for my mom**." (Nutzen für Mama)
- "It's a tool **for cutting** wood." (Zweck: für die Funktion Schneiden)

**Mit Dingen:** Oft für Objekte oder allgemeine Verwendung
- "We need batteries **for the remote**." (Für den Nutzen des Fernbedieners)

**Warum diese Struktur?** Sie zeigt den Empfänger oder das Ziel – wie "bestimmt für X".

### 3. So That + Nebensatz: Zweck für ein spezifisches Ergebnis 📋

Verwende **so that + Subjekt + Verb** (vollständiger Nebensatz), wenn der Zweck zu einem spezifischen Ergebnis führt. Oft mit Modalverben (can, could, will, would) für Möglichkeit.

**Struktur:** Handlung + so that + Nebensatz (oft mit Modal)
- "I left early **so that** I wouldn\'t be late." (Ergebnis: nicht zu spät sein)
- "Speak clearly **so that** everyone can hear." (Ergebnis: Hören)
- "He saved money **so that** he could buy a car." (Ergebnis: Kaufen mit 'could')

**Mit Modalverben:** Häufig für Zukunft/Möglichkeit
- "Turn off the light **so that** we save energy." (Wird sparen)
- "She whispered **so that** the kids wouldn\'t wake." (Würden nicht aufwachen)

**Warum diese Struktur?** Sie ist für komplexe Ergebnisse – wenn du einen vollständigen Satz brauchst, um das Outcome zu erklären.

<GamePlaceholder id="fixTheMistake" />

### 4. Vergleich: To, For, So That – Wann welches? 🔄

Jedes hat eine einzigartige Rolle. Hier eine Tabelle zum Vergleichen:

| Struktur    | Was folgt?     | Verwendung für...           | Beispiel                         |
|-------------|----------------|-----------------------------|----------------------------------|
| **To + Verb** | Handlung (Grundform) | Direkter Zweck der Handlung | Go to the store to buy milk     |
| **For + Nomen** | Person/Ding/Nomen | Nutzen oder Empfänger      | Buy a gift for your friend      |
| **So that + Nebensatz** | Vollständiger Satz (oft Modal) | Spezifisches Ergebnis/Outcome | Study hard so that you pass     |

**Schnelle Regeln:**
- Wenn du einen **Handlungsgrund** erklärst: Verwende "to + Verb"
- Wenn für eine **Person/Ding**: Verwende "for + Nomen"
- Wenn für ein **Ergebnis mit Details**: Verwende "so that + Nebensatz"

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>To + Verb</strong> = Einfacher Zweck (warum die Handlung? Um X zu tun)</li>
    <li><strong>For + Nomen</strong> = Für den Nutzen von jemandem (bestimmt für Y)</li>
    <li><strong>So that + Nebensatz</strong> = Für ein Ergebnis (damit Z passiert, oft mit can/will)</li>
    <li>Übung mischen: "I bought this for you so that you can use it."</li>
  </ul>
</div>

### 5. Häufige Fehler ❌

**Fehler 1:** "For" mit Handlungen verwenden
- ❌ "I went for buy milk." (Falsch!)
- ✅ "I went **to buy** milk." (Richtig – Handlungszweck)

**Fehler 2:** Unvollständiges "so that"
- ❌ "I studied so I pass." (Falsch – braucht Nebensatz)
- ✅ "I studied **so that I would pass**." (Richtig)

**Fehler 3:** "For" und "to" mit Personen verwechseln
- ❌ "This is to my friend." (Falsch!)
- ✅ "This is **for** my friend." (Richtig – Nutzen)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Zweckausdrücke**
Wähle die richtige Struktur! To für Handlungen, for für Nutzen, so that für Ergebnisse!

<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Zweck ausdrücken</h3>
  <p className="mb-4">Schreibe Sätze, die Zweck ausdrücken:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz mit "to + Verb" (warum du etwas getan hast)</li>
    <li>Ein Satz mit "for + Nomen/Person" (etwas für jemanden)</li>
    <li>Ein Satz mit "so that + Nebensatz" (für ein Ergebnis, mit Modalverb)</li>
    <li>Kombiniere zwei: Verwende "to" und "for" in einem Satz</li>
  </ol>
</div>
    `
  },
  task: {
    de: {
      title: 'Zweckausdrücke - To, For, So That',
      description: 'Schreibe Sätze, die Zweck ausdrücken.',
      checklist: [
        { text: 'Satz mit "to + Verb" (Grund einer Handlung)', checked: false },
        { text: 'Satz mit "for + Nomen/Person"', checked: false },
        { text: 'Satz mit "so that + Nebensatz" (mit Modal)', checked: false },
        { text: 'Kombinierter Satz mit "to" und "for"', checked: false }
      ]
    },
    en: {
      title: 'Purpose Expressions - To, For, So That',
      description: 'Write sentences expressing purpose.',
      checklist: [
        { text: 'Sentence with "to + verb" (reason for action)', checked: false },
        { text: 'Sentence with "for + noun/person"', checked: false },
        { text: 'Sentence with "so that + clause" (with modal)', checked: false },
        { text: 'Combined sentence with "to" and "for"', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};
