import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "It's getting late. We ___ go home now.", de: "Es wird spät. Wir sollten jetzt besser nach Hause gehen." },
    words: ["had better", "would better", "have better", "should better"],
    correct: "had better",
    explanation: { en: "Had better = strong advice, often with a warning.", de: "Had better = starker Rat, oft mit Warnung." }
  },
  {
    prompt: { en: "You look tired. ___ you went to bed.", de: "Du siehst müde aus. Es ist Zeit, dass du ins Bett gehst." },
    words: ["It's time", "It's better", "Had better", "You'd rather"],
    correct: "It's time",
    explanation: { en: "It's time + past tense = the right moment to do something.", de: "It's time + Vergangenheit = der richtige Moment, etwas zu tun." }
  },
  {
    prompt: { en: "You ___ not be late again, or you'll lose your job.", de: "Du solltest besser nicht wieder zu spät kommen, sonst verlierst du deinen Job." },
    words: ["had better", "would better", "should better", "must better"],
    correct: "had better",
    explanation: { en: "Had better not = strong warning/advice (negative).", de: "Had better not = starke Warnung/Rat (negativ)." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "You would better hurry up!",
    mistakeIndex: 1,
    correction: "had better",
    explanation: { en: "The correct form is 'had better' (or 'd better), not 'would better'.", de: "Die korrekte Form ist 'had better' (oder 'd better), nicht 'would better'." }
  },
  {
    sentence: "It's time we leave.",
    mistakeIndex: 3,
    correction: "left",
    explanation: { en: "'It's time' + subject uses the past tense: 'It's time we left'.", de: "'It's time' + Subjekt benutzt die Vergangenheit: 'It's time we left'." }
  },
  {
    sentence: "You had better to call a doctor.",
    mistakeIndex: 3,
    correction: "call",
    explanation: { en: "After 'had better', use the base form WITHOUT 'to': 'had better call'.", de: "Nach 'had better' benutze die Grundform OHNE 'to': 'had better call'." }
  }
];

const grammarRacerData = [
  {
    prompt: "The bus leaves in 5 minutes. We ___ run!",
    options: ["'d better", "would better", "should better"],
    correct: "'d better",
    explanation: "'d better = had better (strong advice)."
  },
  {
    prompt: "It's time you ___ driving. You're 25!",
    options: ["learned", "learn", "will learn"],
    correct: "learned",
    explanation: "It's time + past tense."
  },
  {
    prompt: "You ___ not touch that. It's very hot.",
    options: ["'d better", "would better", "'d rather"],
    correct: "'d better",
    explanation: "Had better not = strong warning."
  }
];

export const hadBetter = {
  id: 'b1_g35',
  title: {
    en: "I'd better / It's time",
    de: "I'd better / It's time"
  },
  description: {
    en: "Had better for strong advice/warning. It's time for saying something should happen now.",
    de: "Had better für starken Rat/Warnung. It's time um zu sagen, dass etwas jetzt passieren sollte."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## I'd better / It's time 🕐⚠️

### 1. Had better = Strong Advice (with warning) ⚠️

**Had better** (often shortened to **'d better**) gives strong advice. It often implies that something bad will happen if you don't follow the advice.

- "You**'d better** hurry, or you'll miss the train."
- "I**'d better** take an umbrella. It looks like rain."
- "We**'d better** not be late." (Negative: had better **not**)

**Structure:** Subject + **had better** + base verb (no 'to'!)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Had better vs. Should</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Should</strong> = general advice: "You should eat more vegetables."</li>
    <li><strong>Had better</strong> = urgent/stronger advice with consequence: "You'd better eat something, or you'll faint."</li>
  </ul>
  <p className="mt-2"><strong>Had better</strong> is for specific situations, not general advice.</p>
</div>

### 2. It's time = Something should happen now ⏰

**It's time** tells us the right moment has arrived.

**Three patterns:**

| Pattern | Example |
|---------|---------|
| **It's time to do** | "It's time **to go** home." |
| **It's time for + noun** | "It's time **for lunch**." |
| **It's time + subject + past tense** | "It's time you **went** to bed." |

The third form (with past tense) implies the action is **overdue** – it should have happened already:

- "It's time you **got** a job." (You should have a job by now).
- "It's time we **left**." (We should leave now / we're late).
- "It's **about** time you **started** studying!" (Emphasis – long overdue!).

<GamePlaceholder id="sentenceBuilder" />

### 3. Common Mistakes ❌

**Mistake 1:** "Would better" instead of "had better".
- ❌ "You **would better** study."
- ✅ "You **had better** study." / "You**'d better** study."

**Mistake 2:** Using "to" after "had better".
- ❌ "You'd better **to leave**."
- ✅ "You'd better **leave**."

**Mistake 3:** Using present tense after "It's time + subject".
- ❌ "It's time you **go** to bed."
- ✅ "It's time you **went** to bed."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Had better + base verb</strong> = strong advice with warning.</li>
    <li><strong>Had better not</strong> = strong negative advice.</li>
    <li><strong>It's time to + verb</strong> = the right moment.</li>
    <li><strong>It's time + subject + past tense</strong> = overdue, should happen now.</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## I'd better / It's time 🕐⚠️

### 1. Had better = Starker Rat (mit Warnung) ⚠️

**Had better** (oft abgekürzt zu **'d better**) gibt starken Rat. Es impliziert oft, dass etwas Schlechtes passiert, wenn man dem Rat nicht folgt.

- "You**'d better** hurry, or you'll miss the train."
- "I**'d better** take an umbrella. It looks like rain."
- "We**'d better** not be late." (Negativ: had better **not**)

**Struktur:** Subjekt + **had better** + Grundform (kein 'to'!)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Had better vs. Should</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Should</strong> = allgemeiner Rat: "You should eat more vegetables."</li>
    <li><strong>Had better</strong> = dringender/stärkerer Rat mit Konsequenz: "You'd better eat something, or you'll faint."</li>
  </ul>
  <p className="mt-2"><strong>Had better</strong> ist für spezifische Situationen, nicht allgemeinen Rat.</p>
</div>

### 2. It's time = Etwas sollte jetzt passieren ⏰

**It's time** sagt uns, der richtige Moment ist gekommen.

**Drei Muster:**

| Muster | Beispiel |
|--------|----------|
| **It's time to do** | "It's time **to go** home." |
| **It's time for + Nomen** | "It's time **for lunch**." |
| **It's time + Subjekt + Vergangenheit** | "It's time you **went** to bed." |

Die dritte Form (mit Vergangenheit) impliziert, die Handlung ist **überfällig** – sie hätte schon passieren sollen:

- "It's time you **got** a job." (Du solltest inzwischen einen Job haben).
- "It's time we **left**." (Wir sollten jetzt gehen / wir sind spät).
- "It's **about** time you **started** studying!" (Betonung – längst überfällig!).

<GamePlaceholder id="sentenceBuilder" />

### 3. Häufige Fehler ❌

**Fehler 1:** "Would better" statt "had better".
- ❌ "You **would better** study."
- ✅ "You **had better** study." / "You**'d better** study."

**Fehler 2:** "To" nach "had better" benutzen.
- ❌ "You'd better **to leave**."
- ✅ "You'd better **leave**."

**Fehler 3:** Gegenwart nach "It's time + Subjekt" benutzen.
- ❌ "It's time you **go** to bed."
- ✅ "It's time you **went** to bed."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Had better + Grundform</strong> = starker Rat mit Warnung.</li>
    <li><strong>Had better not</strong> = starker negativer Rat.</li>
    <li><strong>It's time to + Verb</strong> = der richtige Moment.</li>
    <li><strong>It's time + Subjekt + Vergangenheit</strong> = überfällig, sollte jetzt passieren.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: "Had better / It's time",
      description: "Practice giving strong advice and saying something is overdue.",
      checklist: [
        { text: "Write 3 'had better' warnings", checked: false },
        { text: "Write 3 'it's time + past tense' sentences", checked: false },
        { text: "Compare 'should' and 'had better' in similar situations", checked: false }
      ]
    },
    de: {
      title: "Had better / It's time",
      description: "Übe starken Rat zu geben und zu sagen, dass etwas überfällig ist.",
      checklist: [
        { text: "Schreibe 3 'had better' Warnungen", checked: false },
        { text: "Schreibe 3 'it's time + Vergangenheit' Sätze", checked: false },
        { text: "Vergleiche 'should' und 'had better' in ähnlichen Situationen", checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
