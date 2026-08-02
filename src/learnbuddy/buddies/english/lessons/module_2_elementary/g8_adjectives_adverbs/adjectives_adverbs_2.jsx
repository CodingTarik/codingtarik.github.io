import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "She speaks English very ___.", de: "Sie spricht sehr ___ Englisch." },
    words: ["well", "good", "goodly", "better"],
    correct: "well",
    explanation: { en: "Adverb: well (describes how she speaks)", de: "Adverb: well (beschreibt, wie sie spricht)" }
  },
  {
    prompt: { en: "He runs very ___.", de: "Er läuft sehr ___." },
    words: ["fast", "fastly", "quick", "quickly"],
    correct: "fast",
    explanation: { en: "Fast is both adjective and adverb (no -ly needed)", de: "Fast ist sowohl Adjektiv als auch Adverb (kein -ly nötig)" }
  },
  {
    prompt: { en: "I work very ___.", de: "Ich arbeite sehr ___." },
    words: ["hard", "hardly", "harder", "hardly"],
    correct: "hard",
    explanation: { en: "Hard = with effort (adverb). Hardly = almost not (different meaning!)", de: "Hard = mit Anstrengung (Adverb). Hardly = fast nicht (andere Bedeutung!)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "She speaks English very good.",
    mistakeIndex: 3,
    correction: "well",
    explanation: { en: "Adverb needed: well (not good) - describes how she speaks", de: "Adverb nötig: well (nicht good) - beschreibt, wie sie spricht" }
  },
  {
    sentence: "He runs very fastly.",
    mistakeIndex: 2,
    correction: "fast",
    explanation: { en: "Fast is already an adverb (no -ly needed)", de: "Fast ist bereits ein Adverb (kein -ly nötig)" }
  },
  {
    sentence: "I can hardly see you.",
    mistakeIndex: 2,
    correction: "hardly",
    explanation: { en: "Hardly = almost not (correct here). Hard = with effort (different meaning)", de: "Hardly = fast nicht (hier richtig). Hard = mit Anstrengung (andere Bedeutung)" }
  }
];

const grammarRacerData = [
  {
    prompt: "She speaks English very ___.",
    options: ["well", "good", "goodly"],
    correct: "well",
    explanation: "Adverb: well"
  },
  {
    prompt: "He runs very ___.",
    options: ["fast", "fastly", "quick"],
    correct: "fast",
    explanation: "Fast is both adjective and adverb"
  },
  {
    prompt: "I work very ___.",
    options: ["hard", "hardly", "harder"],
    correct: "hard",
    explanation: "Hard = with effort"
  }
];

export const adjectivesAdverbs2 = {
  id: 'a2_g101',
  title: {
    en: 'Adjectives and Adverbs 2: well, fast, late, hard/hardly',
    de: 'Adjektive und Adverbien 2: well, fast, late, hard/hardly'
  },
  description: {
    en: "Special adverbs that don't follow the -ly rule. 'She speaks well', 'He runs fast', 'I work hard' vs 'I can hardly see'.",
    de: "Besondere Adverbien, die nicht der -ly-Regel folgen. 'Sie spricht gut', 'Er läuft schnell', 'Ich arbeite hart' vs 'Ich kann dich kaum sehen'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Adjectives and Adverbs 2: Special Cases ⚠️

Most adverbs end in **-ly** (quickly, slowly, carefully), but some important adverbs **don't follow this rule**. Words like **well, fast, late, and hard** are special - they can be both adjectives and adverbs, and they don't need **-ly**!

### Why Are These Special?

Think about these sentences:
- "She speaks **well**." (Not "goodly" - well is the adverb!)
- "He runs **fast**." (Not "fastly" - fast is already an adverb!)
- "I arrived **late**." (Not "lately" - late is the adverb!)
- "I work **hard**." (Not "hardly" - hard is the adverb, but "hardly" means something different!)

The key idea: These words are **already adverbs** - they don't need **-ly**!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>Well</strong> = Adverb (good → well)</p>
  <p><strong>Fast</strong> = Both adjective and adverb (no -ly)</p>
  <p><strong>Late</strong> = Both adjective and adverb (no -ly)</p>
  <p><strong>Hard</strong> = Adverb (with effort). <strong>Hardly</strong> = Almost not (different meaning!)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Well vs Good: The Classic Mistake ⭐

**Good** = Adjective (describes nouns)
**Well** = Adverb (describes verbs)

**Examples with Good (Adjective):**
- "She is a **good** student." (Good describes student - noun)
- "The food is **good**." (Good describes food - noun)
- "He is **good** at math." (Good describes he - what he is)

**Examples with Well (Adverb):**
- "She speaks English **well**." (Well describes how she speaks - verb)
- "He plays piano **well**." (Well describes how he plays - verb)
- "I did **well** on the test." (Well describes how I did - verb)

**Important:** "Well" can also be an adjective meaning "healthy":
- "I am **well**." (I am healthy - adjective)

**Common mistake:**
- ❌ "She speaks English **good**." (Wrong! - good is adjective, not adverb)
- ✅ "She speaks English **well**." (Correct! - well is adverb)

### 2. Fast: Both Adjective and Adverb 🏃

**Fast** can be both an **adjective** and an **adverb** - it doesn't need **-ly**!

**As Adjective:**
- "He is a **fast** runner." (Fast describes runner - noun)
- "This is a **fast** car." (Fast describes car - noun)

**As Adverb:**
- "He runs **fast**." (Fast describes how he runs - verb)
- "The car goes **fast**." (Fast describes how it goes - verb)

**Important:** There is **no** word "fastly"! Fast is already the adverb!

**Common mistake:**
- ❌ "He runs **fastly**." (Wrong! - no such word)
- ✅ "He runs **fast**." (Correct! - fast is the adverb)

### 3. Late: Both Adjective and Adverb ⏰

**Late** can be both an **adjective** and an **adverb** - it doesn't need **-ly**!

**As Adjective:**
- "I am **late**." (Late describes I - what I am)
- "The train is **late**." (Late describes train - noun)

**As Adverb:**
- "I arrived **late**." (Late describes when I arrived - verb)
- "She came **late** to the meeting." (Late describes when she came - verb)

**Important:** "Lately" exists but means "recently" (not the same as "late")!
- "I have been working hard **lately**." (Lately = recently)

**Common mistake:**
- ❌ "I arrived **lately**." (Wrong! - lately means recently, not late)
- ✅ "I arrived **late**." (Correct! - late is the adverb)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Important:</h3>
  <p><strong>Late</strong> = Not on time (adjective or adverb)</p>
  <p><strong>Lately</strong> = Recently (adverb, different meaning!)</p>
  <p>✅ "I arrived <strong>late</strong>." (Not on time)</p>
  <p>✅ "I have been working hard <strong>lately</strong>." (Recently)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. Hard vs Hardly: Completely Different! ⚠️

**Hard** = With effort, with difficulty (adverb)
**Hardly** = Almost not, barely (adverb, but different meaning!)

**Examples with Hard (With Effort):**
- "I work **hard**." (I work with effort - adverb)
- "She studies **hard**." (She studies with effort - adverb)
- "He tries **hard**." (He tries with effort - adverb)

**Examples with Hardly (Almost Not):**
- "I can **hardly** see you." (I can almost not see you - almost not)
- "She **hardly** speaks English." (She almost doesn't speak English - almost not)
- "There is **hardly** any time left." (There is almost no time - almost not)

**Key idea:** Hard = with effort, Hardly = almost not (completely different meanings)!

**Common mistake:**
- ❌ "I work **hardly**." (Wrong! - means "I almost don't work")
- ✅ "I work **hard**." (Correct! - means "I work with effort")

### 5. Summary Table 📋

| Word | Adjective | Adverb | Notes |
|------|-----------|--------|-------|
| **Good** | ✅ Yes | ❌ No | Use "well" for adverb |
| **Well** | ✅ Yes (healthy) | ✅ Yes | Adverb form of "good" |
| **Fast** | ✅ Yes | ✅ Yes | Same form for both |
| **Late** | ✅ Yes | ✅ Yes | Same form for both |
| **Lately** | ❌ No | ✅ Yes | Means "recently" (different!) |
| **Hard** | ✅ Yes | ✅ Yes | Means "with effort" |
| **Hardly** | ❌ No | ✅ Yes | Means "almost not" (different!) |

**Rules:**
1. **Well** = Adverb (not "goodly")
2. **Fast** = Both adjective and adverb (no "fastly")
3. **Late** = Both adjective and adverb (not "lately" - that means recently)
4. **Hard** = With effort (not "hardly" - that means almost not)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Well</strong> = Adverb (not good)</li>
    <li><strong>Fast</strong> = Both adjective and adverb (no -ly)</li>
    <li><strong>Late</strong> = Both adjective and adverb (not lately)</li>
    <li><strong>Hard</strong> = With effort (not hardly - that means almost not)</li>
  </ul>
</div>

### 6. Common Mistakes ❌

**Mistake 1:** Using "good" as an adverb
- ❌ "She speaks English **good**." (Wrong! - good is adjective)
- ✅ "She speaks English **well**." (Correct! - well is adverb)

**Mistake 2:** Adding -ly to "fast"
- ❌ "He runs **fastly**." (Wrong! - no such word)
- ✅ "He runs **fast**." (Correct! - fast is already adverb)

**Mistake 3:** Using "lately" instead of "late"
- ❌ "I arrived **lately**." (Wrong! - lately means recently)
- ✅ "I arrived **late**." (Correct! - late is the adverb)

**Mistake 4:** Confusing "hard" with "hardly"
- ❌ "I work **hardly**." (Wrong! - means "I almost don't work")
- ✅ "I work **hard**." (Correct! - means "I work with effort")

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Special Adverbs**
Choose the correct form! Remember: well (not good), fast (not fastly), hard (not hardly)!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Special Adverbs</h3>
  <p className="mb-4">Write sentences using well, fast, late, and hard:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence with "well" (adverb)</li>
    <li>One sentence with "fast" (adverb)</li>
    <li>One sentence with "late" (adverb)</li>
    <li>One sentence with "hard" (adverb, meaning with effort)</li>
  </ol>
</div>
`,
    de: `
## Adjektive und Adverbien 2: Besondere Fälle ⚠️

Die meisten Adverbien enden auf **-ly** (quickly, slowly, carefully), aber einige wichtige Adverbien **folgen dieser Regel nicht**. Wörter wie **well, fast, late und hard** sind besonders - sie können sowohl Adjektive als auch Adverbien sein, und sie brauchen kein **-ly**!

### Warum sind diese besonders?

Denk an diese Sätze:
- "Sie spricht **gut**." (Nicht "goodly" - well ist das Adverb!)
- "Er läuft **schnell**." (Nicht "fastly" - fast ist bereits ein Adverb!)
- "Ich bin **spät** angekommen." (Nicht "lately" - late ist das Adverb!)
- "Ich arbeite **hart**." (Nicht "hardly" - hard ist das Adverb, aber "hardly" bedeutet etwas anderes!)

Die Schlüsselidee: Diese Wörter sind **bereits Adverbien** - sie brauchen kein **-ly**!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>Well</strong> = Adverb (good → well)</p>
  <p><strong>Fast</strong> = Sowohl Adjektiv als auch Adverb (kein -ly)</p>
  <p><strong>Late</strong> = Sowohl Adjektiv als auch Adverb (kein -ly)</p>
  <p><strong>Hard</strong> = Adverb (mit Anstrengung). <strong>Hardly</strong> = Fast nicht (andere Bedeutung!)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Well vs Good: Der klassische Fehler ⭐

**Good** = Adjektiv (beschreibt Nomen)
**Well** = Adverb (beschreibt Verben)

**Beispiele mit Good (Adjektiv):**
- "Sie ist eine **gute** Studentin." (Good beschreibt Studentin - Nomen)
- "Das Essen ist **gut**." (Good beschreibt Essen - Nomen)
- "Er ist **gut** in Mathe." (Good beschreibt er - was er ist)

**Beispiele mit Well (Adverb):**
- "Sie spricht Englisch **gut**." (Well beschreibt, wie sie spricht - Verb)
- "Er spielt Klavier **gut**." (Well beschreibt, wie er spielt - Verb)
- "Ich habe **gut** bei dem Test abgeschnitten." (Well beschreibt, wie ich abgeschnitten habe - Verb)

**Wichtig:** "Well" kann auch ein Adjektiv sein, das "gesund" bedeutet:
- "Mir geht es **gut**." (Ich bin gesund - Adjektiv)

**Häufiger Fehler:**
- ❌ "Sie spricht Englisch **gut**." (Falsch! - good ist Adjektiv, nicht Adverb)
- ✅ "Sie spricht Englisch **gut**." (Richtig! - well ist Adverb)

### 2. Fast: Sowohl Adjektiv als auch Adverb 🏃

**Fast** kann sowohl ein **Adjektiv** als auch ein **Adverb** sein - es braucht kein **-ly**!

**Als Adjektiv:**
- "Er ist ein **schneller** Läufer." (Fast beschreibt Läufer - Nomen)
- "Das ist ein **schnelles** Auto." (Fast beschreibt Auto - Nomen)

**Als Adverb:**
- "Er läuft **schnell**." (Fast beschreibt, wie er läuft - Verb)
- "Das Auto fährt **schnell**." (Fast beschreibt, wie es fährt - Verb)

**Wichtig:** Es gibt **kein** Wort "fastly"! Fast ist bereits das Adverb!

**Häufiger Fehler:**
- ❌ "Er läuft **fastly**." (Falsch! - gibt es nicht)
- ✅ "Er läuft **fast**." (Richtig! - fast ist das Adverb)

### 3. Late: Sowohl Adjektiv als auch Adverb ⏰

**Late** kann sowohl ein **Adjektiv** als auch ein **Adverb** sein - es braucht kein **-ly**!

**Als Adjektiv:**
- "Ich bin **spät**." (Late beschreibt ich - was ich bin)
- "Der Zug ist **spät**." (Late beschreibt Zug - Nomen)

**Als Adverb:**
- "Ich bin **spät** angekommen." (Late beschreibt, wann ich angekommen bin - Verb)
- "Sie kam **spät** zum Meeting." (Late beschreibt, wann sie kam - Verb)

**Wichtig:** "Lately" existiert, bedeutet aber "kürzlich" (nicht dasselbe wie "late")!
- "Ich habe **kürzlich** hart gearbeitet." (Lately = kürzlich)

**Häufiger Fehler:**
- ❌ "Ich bin **lately** angekommen." (Falsch! - lately bedeutet kürzlich, nicht spät)
- ✅ "Ich bin **late** angekommen." (Richtig! - late ist das Adverb)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Wichtig:</h3>
  <p><strong>Late</strong> = Nicht pünktlich (Adjektiv oder Adverb)</p>
  <p><strong>Lately</strong> = Kürzlich (Adverb, andere Bedeutung!)</p>
  <p>✅ "Ich bin <strong>spät</strong> angekommen." (Nicht pünktlich)</p>
  <p>✅ "Ich habe <strong>kürzlich</strong> hart gearbeitet." (Kürzlich)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. Hard vs Hardly: Völlig unterschiedlich! ⚠️

**Hard** = Mit Anstrengung, mit Schwierigkeit (Adverb)
**Hardly** = Fast nicht, kaum (Adverb, aber andere Bedeutung!)

**Beispiele mit Hard (Mit Anstrengung):**
- "Ich arbeite **hart**." (Ich arbeite mit Anstrengung - Adverb)
- "Sie lernt **hart**." (Sie lernt mit Anstrengung - Adverb)
- "Er versucht es **hart**." (Er versucht es mit Anstrengung - Adverb)

**Beispiele mit Hardly (Fast Nicht):**
- "Ich kann dich **kaum** sehen." (Ich kann dich fast nicht sehen - fast nicht)
- "Sie spricht **kaum** Englisch." (Sie spricht fast kein Englisch - fast nicht)
- "Es bleibt **kaum** Zeit." (Es bleibt fast keine Zeit - fast nicht)

**Schlüsselidee:** Hard = mit Anstrengung, Hardly = fast nicht (völlig unterschiedliche Bedeutungen)!

**Häufiger Fehler:**
- ❌ "Ich arbeite **hardly**." (Falsch! - bedeutet "Ich arbeite fast nicht")
- ✅ "Ich arbeite **hard**." (Richtig! - bedeutet "Ich arbeite mit Anstrengung")

### 5. Zusammenfassungstabelle 📋

| Wort | Adjektiv | Adverb | Hinweise |
|------|----------|--------|----------|
| **Good** | ✅ Ja | ❌ Nein | Verwende "well" für Adverb |
| **Well** | ✅ Ja (gesund) | ✅ Ja | Adverbform von "good" |
| **Fast** | ✅ Ja | ✅ Ja | Gleiche Form für beide |
| **Late** | ✅ Ja | ✅ Ja | Gleiche Form für beide |
| **Lately** | ❌ Nein | ✅ Ja | Bedeutet "kürzlich" (anders!) |
| **Hard** | ✅ Ja | ✅ Ja | Bedeutet "mit Anstrengung" |
| **Hardly** | ❌ Nein | ✅ Ja | Bedeutet "fast nicht" (anders!) |

**Regeln:**
1. **Well** = Adverb (nicht "goodly")
2. **Fast** = Sowohl Adjektiv als auch Adverb (kein "fastly")
3. **Late** = Sowohl Adjektiv als auch Adverb (nicht "lately" - das bedeutet kürzlich)
4. **Hard** = Mit Anstrengung (nicht "hardly" - das bedeutet fast nicht)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Well</strong> = Adverb (nicht good)</li>
    <li><strong>Fast</strong> = Sowohl Adjektiv als auch Adverb (kein -ly)</li>
    <li><strong>Late</strong> = Sowohl Adjektiv als auch Adverb (nicht lately)</li>
    <li><strong>Hard</strong> = Mit Anstrengung (nicht hardly - das bedeutet fast nicht)</li>
  </ul>
</div>

### 6. Häufige Fehler ❌

**Fehler 1:** "Good" als Adverb verwenden
- ❌ "Sie spricht Englisch **gut**." (Falsch! - good ist Adjektiv)
- ✅ "Sie spricht Englisch **gut**." (Richtig! - well ist Adverb)

**Fehler 2:** -ly zu "fast" hinzufügen
- ❌ "Er läuft **fastly**." (Falsch! - gibt es nicht)
- ✅ "Er läuft **fast**." (Richtig! - fast ist bereits Adverb)

**Fehler 3:** "Lately" statt "late" verwenden
- ❌ "Ich bin **lately** angekommen." (Falsch! - lately bedeutet kürzlich)
- ✅ "Ich bin **late** angekommen." (Richtig! - late ist das Adverb)

**Fehler 4:** "Hard" mit "hardly" verwechseln
- ❌ "Ich arbeite **hardly**." (Falsch! - bedeutet "Ich arbeite fast nicht")
- ✅ "Ich arbeite **hard**." (Richtig! - bedeutet "Ich arbeite mit Anstrengung")

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Besondere Adverbien**
Wähle die richtige Form! Denk daran: well (nicht good), fast (nicht fastly), hard (nicht hardly)!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Besondere Adverbien</h3>
  <p className="mb-4">Schreibe Sätze mit well, fast, late und hard:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz mit "well" (Adverb)</li>
    <li>Ein Satz mit "fast" (Adverb)</li>
    <li>Ein Satz mit "late" (Adverb)</li>
    <li>Ein Satz mit "hard" (Adverb, bedeutet mit Anstrengung)</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Besondere Adverbien',
      description: 'Schreibe Sätze mit well, fast, late und hard als Adverbien.',
      checklist: [
        { text: 'Satz mit "well" (Adverb)', checked: false },
        { text: 'Satz mit "fast" (Adverb)', checked: false },
        { text: 'Satz mit "late" (Adverb)', checked: false },
        { text: 'Satz mit "hard" (Adverb, bedeutet mit Anstrengung)', checked: false }
      ]
    },
    en: {
      title: 'Special Adverbs',
      description: 'Write sentences using well, fast, late, and hard as adverbs.',
      checklist: [
        { text: 'Sentence with "well" (adverb)', checked: false },
        { text: 'Sentence with "fast" (adverb)', checked: false },
        { text: 'Sentence with "late" (adverb)', checked: false },
        { text: 'Sentence with "hard" (adverb, meaning with effort)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


