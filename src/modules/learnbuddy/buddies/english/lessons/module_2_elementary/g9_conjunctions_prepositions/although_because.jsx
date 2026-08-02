import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "___ it was raining, we went outside.", de: "___ es regnete, gingen wir nach draußen." },
    words: ["Although", "Because", "So", "But"],
    correct: "Although",
    explanation: { en: "Although = contrast (it was raining BUT we went)", de: "Although = Kontrast (es regnete ABER wir gingen)" }
  },
  {
    prompt: { en: "We stayed inside ___ it was raining.", de: "Wir blieben drinnen, ___ es regnete." },
    words: ["because", "although", "so", "but"],
    correct: "because",
    explanation: { en: "Because = reason (we stayed BECAUSE it was raining)", de: "Because = Grund (wir blieben, WEIL es regnete)" }
  },
  {
    prompt: { en: "___ the weather was bad, we had fun.", de: "___ das Wetter schlecht war, hatten wir Spaß." },
    words: ["Although", "Because", "So", "But"],
    correct: "Although",
    explanation: { en: "Although = contrast (bad weather BUT we had fun)", de: "Although = Kontrast (schlechtes Wetter ABER wir hatten Spaß)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "Although it was raining, so we stayed inside.",
    mistakeIndex: 2,
    correction: "",
    explanation: { en: "Don't use 'so' after 'although' - although already shows contrast", de: "Verwende nicht 'so' nach 'although' - although zeigt bereits Kontrast" }
  },
  {
    sentence: "Because it was raining, but we went outside.",
    mistakeIndex: 2,
    correction: "",
    explanation: { en: "Don't use 'but' after 'because' - choose one conjunction", de: "Verwende nicht 'but' nach 'because' - wähle eine Konjunktion" }
  },
  {
    sentence: "Although the weather was bad, because we had fun.",
    mistakeIndex: 2,
    correction: "",
    explanation: { en: "Don't use 'because' after 'although' - choose one conjunction", de: "Verwende nicht 'because' nach 'although' - wähle eine Konjunktion" }
  }
];

const grammarRacerData = [
  {
    prompt: "___ it was raining, we went outside.",
    options: ["Although", "Because", "So"],
    correct: "Although",
    explanation: "Contrast: Although"
  },
  {
    prompt: "We stayed inside ___ it was raining.",
    options: ["because", "although", "so"],
    correct: "because",
    explanation: "Reason: because"
  },
  {
    prompt: "___ the weather was bad, we had fun.",
    options: ["Although", "Because", "So"],
    correct: "Although",
    explanation: "Contrast: Although"
  }
];

export const althoughBecause = {
  id: 'a2_g113',
  title: {
    en: 'Although, Though, Even Though, Because (Contrast and Reason)',
    de: 'Although, Though, Even Though, Because (Kontrast und Grund)'
  },
  description: {
    en: "Expressing contrast and reason. 'Although it was raining, we went outside', 'We stayed inside because it was raining'.",
    de: "Kontrast und Grund ausdrücken. 'Obwohl es regnete, gingen wir nach draußen', 'Wir blieben drinnen, weil es regnete'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Although and Because: Contrast and Reason 🔄

**Although** (and though, even though) and **because** are used to connect ideas. **Although** shows **contrast** (surprising or unexpected connection), while **because** shows **reason** (cause and effect).

### Why Do We Need Both?

Think about these situations:
- "**Although** it was raining, we went outside." (Contrast - surprising: rain but we went)
- "We stayed inside **because** it was raining." (Reason - cause: rain caused us to stay)
- "**Even though** I was tired, I went to the party." (Contrast - surprising: tired but went)
- "I went home **because** I was tired." (Reason - cause: tired caused me to go home)

The key idea: **Although** = contrast (surprising connection), **Because** = reason (cause and effect)!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>Although / Though / Even though</strong> = Contrast (surprising connection)</p>
  <p><strong>Because</strong> = Reason (cause and effect)</p>
  <p><strong>Although</strong> = More formal than "though"</p>
  <p><strong>Even though</strong> = Stronger contrast than "although"</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Although: Showing Contrast ⚠️

**Although** (and **though**, **even though**) shows **contrast** - a surprising or unexpected connection between two ideas.

**Structure:**
- **Although** + clause, + main clause
- Main clause + **although** + clause

**Examples:**
- "**Although** it was raining, we went outside." (Surprising: rain but we went)
- "We went outside **although** it was raining." (Same meaning)
- "**Though** I was tired, I went to the party." (Surprising: tired but went)
- "**Even though** the weather was bad, we had fun." (Strong contrast: bad weather but fun)

**Key idea:** Although/though/even though = contrast, surprising connection!

**Note:** "Although" is more formal than "though". "Even though" shows stronger contrast.

### 2. Because: Showing Reason 📝

**Because** shows **reason** - cause and effect, why something happened.

**Structure:**
- Main clause + **because** + clause
- **Because** + clause, + main clause (less common)

**Examples:**
- "We stayed inside **because** it was raining." (Reason: rain caused us to stay)
- "I went home **because** I was tired." (Reason: tired caused me to go home)
- "She was happy **because** she passed the test." (Reason: passing caused happiness)
- "**Because** it was late, we went home." (Reason: late caused us to go home)

**Key idea:** Because = reason, cause and effect!

**Note:** "Because" usually comes in the middle of the sentence, but can come at the beginning.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Important:</h3>
  <p><strong>Although</strong> = Contrast (surprising connection)</p>
  <p><strong>Because</strong> = Reason (cause and effect)</p>
  <p>✅ "<strong>Although</strong> it was raining, we went outside." (Contrast)</p>
  <p>✅ "We stayed inside <strong>because</strong> it was raining." (Reason)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 3. Although vs Because: The Difference 🔄

**Although** = Contrast (surprising connection)
- "**Although** it was raining, we went outside." (Surprising: rain but we went)

**Because** = Reason (cause and effect)
- "We stayed inside **because** it was raining." (Reason: rain caused us to stay)

**Key difference:**
- **Although** = "in spite of" (despite the fact that)
- **Because** = "for the reason that" (due to the fact that)

**Examples:**
- "**Although** I was tired, I went to the party." (Contrast: tired but went)
- "I went home **because** I was tired." (Reason: tired caused me to go home)

### 4. Though vs Although vs Even Though 📊

**Though** = Less formal, same meaning as "although"
**Although** = More formal, same meaning as "though"
**Even though** = Stronger contrast, emphasizes the surprise

**Examples:**
- "**Though** I was tired, I went." (Less formal)
- "**Although** I was tired, I went." (More formal)
- "**Even though** I was tired, I went." (Stronger contrast - more surprising)

**Note:** "Though" can also be used at the end of a sentence:
- "I was tired. I went to the party, **though**." (Informal)

### 5. Common Patterns 📝

**Although/Though/Even though (Contrast):**
- "**Although** it was raining, we went outside."
- "**Though** I was tired, I went to the party."
- "**Even though** the weather was bad, we had fun."

**Because (Reason):**
- "We stayed inside **because** it was raining."
- "I went home **because** I was tired."
- "She was happy **because** she passed the test."

**Important:** Don't use "but" or "so" with "although" or "because"!
- ❌ "Although it was raining, **but** we went." (Wrong!)
- ✅ "**Although** it was raining, we went." (Correct!)

### 6. Common Mistakes ❌

**Mistake 1:** Using "but" with "although"
- ❌ "**Although** it was raining, **but** we went." (Wrong! - don't use both)
- ✅ "**Although** it was raining, we went." (Correct!)

**Mistake 2:** Using "so" with "although"
- ❌ "**Although** it was raining, **so** we stayed." (Wrong! - don't use both)
- ✅ "**Although** it was raining, we stayed." (Correct!)

**Mistake 3:** Confusing "although" with "because"
- ❌ "**Although** it was raining, we stayed inside." (Wrong! - use "because" for reason)
- ✅ "We stayed inside **because** it was raining." (Correct!)

**Mistake 4:** Using "because" when you need contrast
- ❌ "**Because** it was raining, we went outside." (Wrong! - use "although" for contrast)
- ✅ "**Although** it was raining, we went outside." (Correct!)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Although / Though / Even though</strong> = Contrast (surprising connection)</li>
    <li><strong>Because</strong> = Reason (cause and effect)</li>
    <li>Don't use "but" or "so" with "although" or "because"</li>
    <li>✅ "Although it was raining, we went." (Contrast)</li>
    <li>✅ "We stayed because it was raining." (Reason)</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Although and Because**
Choose the correct conjunction! Remember: although = contrast, because = reason!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Although and Because</h3>
  <p className="mb-4">Write sentences using although and because:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence with "although" (contrast)</li>
    <li>One sentence with "because" (reason)</li>
    <li>One sentence with "even though" (strong contrast)</li>
    <li>Write your own sentence showing contrast or reason</li>
  </ol>
</div>
`,
    de: `
## Although und Because: Kontrast und Grund 🔄

**Although** (und though, even though) und **because** werden verwendet, um Ideen zu verbinden. **Although** zeigt **Kontrast** (überraschende oder unerwartete Verbindung), während **because** **Grund** zeigt (Ursache und Wirkung).

### Warum brauchen wir beide?

Denk an diese Situationen:
- "**Obwohl** es regnete, gingen wir nach draußen." (Kontrast - überraschend: Regen aber wir gingen)
- "Wir blieben drinnen, **weil** es regnete." (Grund - Ursache: Regen veranlasste uns zu bleiben)
- "**Auch wenn** ich müde war, ging ich zur Party." (Kontrast - überraschend: müde aber ging)
- "Ich ging nach Hause, **weil** ich müde war." (Grund - Ursache: müde veranlasste mich nach Hause zu gehen)

Die Schlüsselidee: **Although** = Kontrast (überraschende Verbindung), **Because** = Grund (Ursache und Wirkung)!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>Although / Though / Even though</strong> = Kontrast (überraschende Verbindung)</p>
  <p><strong>Because</strong> = Grund (Ursache und Wirkung)</p>
  <p><strong>Although</strong> = Formeller als "though"</p>
  <p><strong>Even though</strong> = Stärkerer Kontrast als "although"</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Although: Kontrast zeigen ⚠️

**Although** (und **though**, **even though**) zeigt **Kontrast** - eine überraschende oder unerwartete Verbindung zwischen zwei Ideen.

**Struktur:**
- **Although** + Satz, + Hauptsatz
- Hauptsatz + **although** + Satz

**Beispiele:**
- "**Obwohl** es regnete, gingen wir nach draußen." (Überraschend: Regen aber wir gingen)
- "Wir gingen nach draußen, **obwohl** es regnete." (Gleiche Bedeutung)
- "**Obwohl** ich müde war, ging ich zur Party." (Überraschend: müde aber ging)
- "**Auch wenn** das Wetter schlecht war, hatten wir Spaß." (Starker Kontrast: schlechtes Wetter aber Spaß)

**Schlüsselidee:** Although/though/even though = Kontrast, überraschende Verbindung!

**Hinweis:** "Although" ist formeller als "though". "Even though" zeigt stärkeren Kontrast.

### 2. Because: Grund zeigen 📝

**Because** zeigt **Grund** - Ursache und Wirkung, warum etwas passiert ist.

**Struktur:**
- Hauptsatz + **because** + Satz
- **Because** + Satz, + Hauptsatz (weniger häufig)

**Beispiele:**
- "Wir blieben drinnen, **weil** es regnete." (Grund: Regen veranlasste uns zu bleiben)
- "Ich ging nach Hause, **weil** ich müde war." (Grund: müde veranlasste mich nach Hause zu gehen)
- "Sie war glücklich, **weil** sie den Test bestanden hat." (Grund: Bestehen verursachte Glück)
- "**Weil** es spät war, gingen wir nach Hause." (Grund: spät veranlasste uns nach Hause zu gehen)

**Schlüsselidee:** Because = Grund, Ursache und Wirkung!

**Hinweis:** "Because" kommt normalerweise in der Mitte des Satzes, kann aber am Anfang stehen.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Wichtig:</h3>
  <p><strong>Although</strong> = Kontrast (überraschende Verbindung)</p>
  <p><strong>Because</strong> = Grund (Ursache und Wirkung)</p>
  <p>✅ "<strong>Obwohl</strong> es regnete, gingen wir nach draußen." (Kontrast)</p>
  <p>✅ "Wir blieben drinnen, <strong>weil</strong> es regnete." (Grund)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 3. Although vs Because: Der Unterschied 🔄

**Although** = Kontrast (überraschende Verbindung)
- "**Obwohl** es regnete, gingen wir nach draußen." (Überraschend: Regen aber wir gingen)

**Because** = Grund (Ursache und Wirkung)
- "Wir blieben drinnen, **weil** es regnete." (Grund: Regen veranlasste uns zu bleiben)

**Schlüsselunterschied:**
- **Although** = "trotz" (trotz der Tatsache, dass)
- **Because** = "aus dem Grund, dass" (aufgrund der Tatsache, dass)

**Beispiele:**
- "**Obwohl** ich müde war, ging ich zur Party." (Kontrast: müde aber ging)
- "Ich ging nach Hause, **weil** ich müde war." (Grund: müde veranlasste mich nach Hause zu gehen)

### 4. Though vs Although vs Even Though 📊

**Though** = Weniger formal, gleiche Bedeutung wie "although"
**Although** = Formeller, gleiche Bedeutung wie "though"
**Even though** = Stärkerer Kontrast, betont die Überraschung

**Beispiele:**
- "**Obwohl** ich müde war, ging ich." (Weniger formal)
- "**Obwohl** ich müde war, ging ich." (Formeller)
- "**Auch wenn** ich müde war, ging ich." (Stärkerer Kontrast - überraschender)

**Hinweis:** "Though" kann auch am Ende eines Satzes verwendet werden:
- "Ich war müde. Ich ging zur Party, **obwohl**." (Informell)

### 5. Häufige Muster 📝

**Although/Though/Even though (Kontrast):**
- "**Obwohl** es regnete, gingen wir nach draußen."
- "**Obwohl** ich müde war, ging ich zur Party."
- "**Auch wenn** das Wetter schlecht war, hatten wir Spaß."

**Because (Grund):**
- "Wir blieben drinnen, **weil** es regnete."
- "Ich ging nach Hause, **weil** ich müde war."
- "Sie war glücklich, **weil** sie den Test bestanden hat."

**Wichtig:** Verwende nicht "but" oder "so" mit "although" oder "because"!
- ❌ "Obwohl es regnete, **aber** wir gingen." (Falsch!)
- ✅ "**Obwohl** es regnete, gingen wir." (Richtig!)

### 6. Häufige Fehler ❌

**Fehler 1:** "But" mit "although" verwenden
- ❌ "**Obwohl** es regnete, **aber** wir gingen." (Falsch! - verwende nicht beide)
- ✅ "**Obwohl** es regnete, gingen wir." (Richtig!)

**Fehler 2:** "So" mit "although" verwenden
- ❌ "**Obwohl** es regnete, **so** blieben wir." (Falsch! - verwende nicht beide)
- ✅ "**Obwohl** es regnete, blieben wir." (Richtig!)

**Fehler 3:** "Although" mit "because" verwechseln
- ❌ "**Obwohl** es regnete, blieben wir drinnen." (Falsch! - verwende "because" für Grund)
- ✅ "Wir blieben drinnen, **weil** es regnete." (Richtig!)

**Fehler 4:** "Because" verwenden, wenn Kontrast nötig ist
- ❌ "**Weil** es regnete, gingen wir nach draußen." (Falsch! - verwende "although" für Kontrast)
- ✅ "**Obwohl** es regnete, gingen wir nach draußen." (Richtig!)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Although / Though / Even though</strong> = Kontrast (überraschende Verbindung)</li>
    <li><strong>Because</strong> = Grund (Ursache und Wirkung)</li>
    <li>Verwende nicht "but" oder "so" mit "although" oder "because"</li>
    <li>✅ "Obwohl es regnete, gingen wir." (Kontrast)</li>
    <li>✅ "Wir blieben, weil es regnete." (Grund)</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Although und Because**
Wähle die richtige Konjunktion! Denk daran: although = Kontrast, because = Grund!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Although und Because</h3>
  <p className="mb-4">Schreibe Sätze mit although und because:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz mit "although" (Kontrast)</li>
    <li>Ein Satz mit "because" (Grund)</li>
    <li>Ein Satz mit "even though" (starker Kontrast)</li>
    <li>Schreibe deinen eigenen Satz mit Kontrast oder Grund</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Although und Because',
      description: 'Schreibe Sätze mit although und because für Kontrast und Grund.',
      checklist: [
        { text: 'Satz mit "although" (Kontrast)', checked: false },
        { text: 'Satz mit "because" (Grund)', checked: false },
        { text: 'Satz mit "even though" (starker Kontrast)', checked: false },
        { text: 'Eigener Satz mit Kontrast oder Grund', checked: false }
      ]
    },
    en: {
      title: 'Although and Because',
      description: 'Write sentences using although and because for contrast and reason.',
      checklist: [
        { text: 'Sentence with "although" (contrast)', checked: false },
        { text: 'Sentence with "because" (reason)', checked: false },
        { text: 'Sentence with "even though" (strong contrast)', checked: false },
        { text: 'Own sentence with contrast or reason', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


