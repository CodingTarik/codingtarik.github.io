import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "The results ___ to suggest that the new treatment is effective.", de: "Die Ergebnisse scheinen nahezulegen, dass die neue Behandlung wirksam ist." },
    words: ["seem", "are", "prove", "show"],
    correct: "seem",
    explanation: { en: "'Seem to suggest' is a hedging expression that avoids making a direct claim. It softens the assertion.", de: "'Seem to suggest' ist ein Hedging-Ausdruck, der eine direkte Behauptung vermeidet." }
  },
  {
    prompt: { en: "This is ___ the most significant discovery in the field this decade.", de: "Dies ist wohl die bedeutendste Entdeckung in diesem Bereich in diesem Jahrzehnt." },
    words: ["arguably", "definitely", "obviously", "certainly"],
    correct: "arguably",
    explanation: { en: "'Arguably' hedges a strong claim by acknowledging it could be debated. It means 'it could be argued that'.", de: "'Arguably' schwächt eine starke Behauptung ab, indem es anerkennt, dass sie diskutiert werden könnte." }
  },
  {
    prompt: { en: "The data ___ indicate a correlation between the two variables.", de: "Die Daten scheinen auf eine Korrelation zwischen den beiden Variablen hinzudeuten." },
    words: ["would", "will", "must", "shall"],
    correct: "would",
    explanation: { en: "'Would indicate' is a tentative hedge — less assertive than 'indicates'. Common in academic writing.", de: "'Would indicate' ist ein vorsichtiger Hedge — weniger bestimmt als 'indicates'. Häufig in akademischer Schrift." }
  },
  {
    prompt: { en: "There is ___ evidence that the policy has had a positive impact.", de: "Es gibt einige Hinweise darauf, dass die Politik eine positive Wirkung hatte." },
    words: ["some", "clear", "absolute", "definite"],
    correct: "some",
    explanation: { en: "'Some evidence' hedges the claim by not committing to 'strong' or 'clear' evidence.", de: "'Some evidence' schwächt die Behauptung ab, indem es sich nicht auf 'starke' Beweise festlegt." }
  },
  {
    prompt: { en: "It ___ be said that the government's response was inadequate.", de: "Man könnte sagen, dass die Reaktion der Regierung unzureichend war." },
    words: ["could", "must", "shall", "will"],
    correct: "could",
    explanation: { en: "'It could be said' is an impersonal hedge that distances the speaker from a direct criticism.", de: "'It could be said' ist ein unpersönlicher Hedge, der den Sprecher von direkter Kritik distanziert." }
  },
  {
    prompt: { en: "People ___ to prefer online shopping over visiting physical stores.", de: "Die Leute neigen dazu, Online-Shopping dem Besuch physischer Geschäfte vorzuziehen." },
    words: ["tend", "always", "must", "have"],
    correct: "tend",
    explanation: { en: "'Tend to' avoids absolute statements by suggesting a general pattern rather than a universal rule.", de: "'Tend to' vermeidet absolute Aussagen, indem es ein allgemeines Muster statt einer universellen Regel vorschlägt." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "The experiment proves that this treatment cures the disease.",
    mistakeIndex: 2,
    correction: "suggests",
    explanation: { en: "In academic/scientific writing, avoid absolute claims. Use hedging: 'suggests' instead of 'proves'. One experiment rarely 'proves' anything.", de: "In akademischer Schrift absolute Behauptungen vermeiden. Hedging verwenden: 'suggests' statt 'proves'." }
  },
  {
    sentence: "Everyone agrees that social media is harmful to mental health.",
    mistakeIndex: 0,
    correction: "Many researchers argue",
    explanation: { en: "'Everyone agrees' is an absolute generalization. Hedge with 'Many researchers argue' or 'It is widely believed'.", de: "'Everyone agrees' ist eine absolute Verallgemeinerung. Hedge mit 'Many researchers argue'." }
  },
  {
    sentence: "This is obviously the best approach to solving the problem.",
    mistakeIndex: 2,
    correction: "arguably",
    explanation: { en: "'Obviously' assumes agreement from the reader. 'Arguably' acknowledges that the claim could be debated.", de: "'Obviously' nimmt Zustimmung an. 'Arguably' erkennt an, dass die Behauptung diskutiert werden könnte." }
  },
  {
    sentence: "The results always show a positive correlation in every case.",
    mistakeIndex: 2,
    correction: "generally",
    explanation: { en: "'Always' and 'every' are too absolute. Use hedges like 'generally', 'in most cases', or 'tend to'.", de: "'Always' und 'every' sind zu absolut. Verwende Hedges wie 'generally', 'in most cases' oder 'tend to'." }
  }
];

const grammarRacerData = [
  {
    prompt: "The findings ___ suggest a link between diet and longevity.",
    options: ["appear to", "definitely", "always"],
    correct: "appear to",
    explanation: "'Appear to suggest' is a double hedge — very cautious and appropriate for academic writing."
  },
  {
    prompt: "There is ___ a connection between stress and immune function.",
    options: ["arguably", "absolutely", "obviously"],
    correct: "arguably",
    explanation: "'Arguably' presents a claim as debatable rather than fact."
  },
  {
    prompt: "This ___ explains why the previous studies found different results.",
    options: ["might", "must", "will"],
    correct: "might",
    explanation: "'Might explain' hedges with uncertainty — not claiming definite causation."
  },
  {
    prompt: "People in urban areas ___ to experience higher levels of stress.",
    options: ["tend", "always", "must"],
    correct: "tend",
    explanation: "'Tend to' indicates a general pattern without claiming it's universal."
  }
];

export const hedgingVagueLanguage = {
  id: 'c1_g9',
  title: {
    en: 'Hedging & Vague Language',
    de: 'Hedging & Vage Sprache'
  },
  description: {
    en: "Learn to use sort of, kind of, somewhat, tend to, arguably, and it could be said for nuanced communication.",
    de: "Lerne sort of, kind of, somewhat, tend to, arguably und it could be said für nuancierte Kommunikation."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />,
  },
  content: {
    en: `
## Hedging & Vague Language 🌫️💬

**Hedging** means softening claims to avoid sounding too direct, absolute, or certain. It's essential in **academic writing**, **professional communication**, and **polite conversation**. **Vague language** keeps things intentionally imprecise when exactness isn't needed or desired.

### 1. Why Hedge? 🎯

Compare these pairs:

| Too Direct / Absolute | Hedged / Nuanced |
|---|---|
| This **proves** that... | This **suggests** that... |
| **Everyone** knows... | It is **widely accepted** that... |
| X **causes** Y. | X **appears to be associated with** Y. |
| This is **the best** solution. | This is **arguably** the best solution. |

Hedging is important because:
- ✅ It shows **intellectual humility** and **academic credibility**
- ✅ It avoids overgeneralizations that can be challenged
- ✅ It's considered more **persuasive** in academic and professional contexts
- ✅ It's **polite** — it doesn't impose your view on others

### 2. Hedging Verbs & Expressions 📝

| Type | Examples |
|---|---|
| **Reporting verbs** | suggest, indicate, imply, appear to, seem to |
| **Modal verbs** | may, might, could, would |
| **Tentative verbs** | tend to, appear to, seem to |
| **Impersonal constructions** | It could be argued that..., It is possible that..., It has been suggested that... |
| **Adverbs** | perhaps, possibly, arguably, somewhat, relatively, apparently |
| **Quantifiers** | some, certain, a number of, to some extent |

### 3. Hedging in Academic Writing ✍️

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Academic Hedging Toolkit:</h3>
  <p>• "The results <strong>suggest</strong> that..." (not "prove")</p>
  <p>• "This <strong>may</strong> indicate..." (not "indicates")</p>
  <p>• "There <strong>appears to be</strong> a correlation..." (not "there is")</p>
  <p>• "<strong>It could be argued</strong> that..." (not "it is clear")</p>
  <p>• "The data <strong>would seem to</strong> support..." (not "supports")</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Vague Language in Conversation 💬

In everyday English, vague language makes you sound **natural and fluent**:

| Expression | Function | Example |
|---|---|---|
| **sort of / kind of** | Soften a description | "I'm sort of tired." / "It's kind of complicated." |
| **or something (like that)** | Approximate | "We could go to a cafe or something." |
| **stuff / things** | General reference | "She's into art and stuff like that." |
| **-ish** | Approximate | "Let's meet at six-ish." / "It's a blue-ish color." |
| **about / around** | Approximate numbers | "There were about fifty people there." |
| **and so on / etc.** | Incomplete lists | "We discussed budgets, timelines, and so on." |

### 5. Common Mistakes ❌

**Mistake 1:** Being too absolute in academic writing.
- ❌ "This **proves** that X causes Y."
- ✅ "This **suggests** that X **may be** associated with Y."

**Mistake 2:** Overusing hedges (sounds wishy-washy).
- ❌ "It could perhaps possibly somewhat suggest..."
- ✅ "The evidence **suggests** that..." (one hedge is enough)

**Mistake 3:** Using vague language in formal writing.
- ❌ "The results were sort of significant and stuff."
- ✅ "The results were **somewhat** significant."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Hedging verbs:</strong> suggest, indicate, appear to, seem to, tend to</li>
    <li><strong>Modal hedges:</strong> may, might, could, would</li>
    <li><strong>Adverb hedges:</strong> arguably, somewhat, relatively, perhaps</li>
    <li><strong>Vague language:</strong> sort of, kind of, -ish, or something — for conversation</li>
    <li><strong>Balance is key:</strong> Hedge enough to be precise, not so much you seem uncertain</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Hedging & Vage Sprache 🌫️💬

**Hedging** bedeutet, Behauptungen abzuschwächen, um nicht zu direkt, absolut oder sicher zu klingen. Es ist unverzichtbar in **akademischer Schrift**, **professioneller Kommunikation** und **höflicher Konversation**. **Vage Sprache** hält Dinge absichtlich ungenau, wenn Präzision nicht nötig oder gewünscht ist.

### 1. Warum hedgen? 🎯

Vergleiche diese Paare:

| Zu direkt / Absolut | Abgeschwächt / Nuanciert |
|---|---|
| This **proves** that... | This **suggests** that... |
| **Everyone** knows... | It is **widely accepted** that... |
| X **causes** Y. | X **appears to be associated with** Y. |
| This is **the best** solution. | This is **arguably** the best solution. |

Hedging ist wichtig, weil:
- ✅ Es zeigt **intellektuelle Bescheidenheit** und **akademische Glaubwürdigkeit**
- ✅ Es vermeidet Übergeneralisierungen, die angefochten werden können
- ✅ Es gilt als **überzeugender** in akademischen und professionellen Kontexten
- ✅ Es ist **höflich** — es drängt anderen die eigene Meinung nicht auf

### 2. Hedging-Verben & Ausdrücke 📝

| Typ | Beispiele |
|---|---|
| **Berichtsverben** | suggest, indicate, imply, appear to, seem to |
| **Modalverben** | may, might, could, would |
| **Tentative Verben** | tend to, appear to, seem to |
| **Unpersönliche Konstruktionen** | It could be argued that..., It is possible that... |
| **Adverbien** | perhaps, possibly, arguably, somewhat, relatively |
| **Quantifizierer** | some, certain, a number of, to some extent |

### 3. Hedging in akademischer Schrift ✍️

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Akademisches Hedging-Werkzeugkasten:</h3>
  <p>• "The results <strong>suggest</strong> that..." (nicht "prove")</p>
  <p>• "This <strong>may</strong> indicate..." (nicht "indicates")</p>
  <p>• "There <strong>appears to be</strong> a correlation..." (nicht "there is")</p>
  <p>• "<strong>It could be argued</strong> that..." (nicht "it is clear")</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Vage Sprache in der Konversation 💬

Im alltäglichen Englisch lässt dich vage Sprache **natürlicher und fließender** klingen:

| Ausdruck | Funktion | Beispiel |
|---|---|---|
| **sort of / kind of** | Beschreibung abschwächen | "I'm sort of tired." / "It's kind of complicated." |
| **or something (like that)** | Annähern | "We could go to a cafe or something." |
| **stuff / things** | Allgemeiner Bezug | "She's into art and stuff like that." |
| **-ish** | Annähern | "Let's meet at six-ish." |
| **about / around** | Ungefähre Zahlen | "There were about fifty people there." |

### 5. Häufige Fehler ❌

**Fehler 1:** Zu absolut in akademischer Schrift.
- ❌ "This **proves** that X causes Y."
- ✅ "This **suggests** that X **may be** associated with Y."

**Fehler 2:** Zu viele Hedges (klingt unsicher).
- ❌ "It could perhaps possibly somewhat suggest..."
- ✅ "The evidence **suggests** that..." (ein Hedge reicht)

**Fehler 3:** Vage Sprache in formeller Schrift.
- ❌ "The results were sort of significant and stuff."
- ✅ "The results were **somewhat** significant."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Hedging-Verben:</strong> suggest, indicate, appear to, seem to, tend to</li>
    <li><strong>Modale Hedges:</strong> may, might, could, would</li>
    <li><strong>Adverb-Hedges:</strong> arguably, somewhat, relatively, perhaps</li>
    <li><strong>Vage Sprache:</strong> sort of, kind of, -ish, or something — für Konversation</li>
    <li><strong>Balance ist wichtig:</strong> Genug hedgen für Präzision, nicht zu viel</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Hedging & Vague Language',
      description: 'Practice softening claims and using appropriate vague language.',
      checklist: [
        { text: 'Rewrite 5 absolute statements using hedging expressions', checked: false },
        { text: 'Write an academic paragraph using at least 4 hedging devices', checked: false },
        { text: 'Practice using vague language in 3 conversational scenarios', checked: false }
      ]
    },
    de: {
      title: 'Hedging & Vage Sprache',
      description: 'Übe das Abschwächen von Behauptungen und die Verwendung angemessener vager Sprache.',
      checklist: [
        { text: 'Schreibe 5 absolute Aussagen mit Hedging-Ausdrücken um', checked: false },
        { text: 'Schreibe einen akademischen Absatz mit mindestens 4 Hedging-Mitteln', checked: false },
        { text: 'Übe vage Sprache in 3 Gesprächsszenarien', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
