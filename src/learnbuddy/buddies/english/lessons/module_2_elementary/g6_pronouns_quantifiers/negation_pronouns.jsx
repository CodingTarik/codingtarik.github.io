import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "There is ___ (nothing) in the fridge.", de: "Es gibt ___ (nichts) im Kühlschrank." },
    words: ["nothing", "anything", "something", "no thing"],
    correct: "nothing",
    explanation: { en: "Negative statement: nothing (not anything)", de: "Negativer Satz: nothing (nicht anything)" }
  },
  {
    prompt: { en: "I don\'t know ___ (anyone) here.", de: "Ich kenne ___ (niemanden) hier." },
    words: ["anyone", "someone", "no one", "nobody"],
    correct: "anyone",
    explanation: { en: "Negative context: anyone (but meaning no one)", de: "Negativer Kontext: anyone (bedeutet aber niemand)" }
  },
  {
    prompt: { en: "Is there ___ (any) milk left?", de: "Gibt es ___ (irgendwelche) Milch übrig?" },
    words: ["any", "some", "no", "none"],
    correct: "any",
    explanation: { en: "Question: any (for unknown quantity)", de: "Frage: any (für unbekannte Menge)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "There isn\'t no milk.",
    mistakeIndex: 3,
    correction: "any",
    explanation: { en: "Double negative wrong: isn\'t any (not 'isn\'t no')", de: "Doppelte Verneinung falsch: isn\'t any (nicht 'isn\'t no')" }
  },
  {
    sentence: "I have none problems.",
    mistakeIndex: 2,
    correction: "no",
    explanation: { en: "No + noun (not 'none problems')", de: "No + Nomen (nicht 'none problems')" }
  },
  {
    sentence: "Do you have something to eat?",
    mistakeIndex: 1,
    correction: "anything",
    explanation: { en: "Question: anything (not something in questions)", de: "Frage: anything (nicht something in Fragen)" }
  }
];

const grammarRacerData = [
  {
    prompt: "There is ___ in the box.",
    options: ["nothing", "anything", "something"],
    correct: "nothing",
    explanation: "Negative: nothing"
  },
  {
    prompt: "I don\'t know ___ here.",
    options: ["anyone", "someone", "no one"],
    correct: "anyone",
    explanation: "Negative: anyone (means no one)"
  },
  {
    prompt: "Is there ___ milk?",
    options: ["any", "some", "no"],
    correct: "any",
    explanation: "Question: any"
  }
];

export const negationPronouns = {
  id: 'a2_g86',
  title: {
    en: 'no/none/any nothing/nobody etc.',
    de: 'no/none/any nothing/nobody etc.'
  },
  description: {
    en: "Negative pronouns and quantifiers. 'There is nothing to eat', 'I don\'t know anyone here', 'Do you have any questions?'.",
    de: "Negative Pronomen und Quantifizierer. 'Es gibt nichts zu essen', 'Ich kenne hier niemanden', 'Hast du irgendwelche Fragen?'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Negative Pronouns and Quantifiers: no, none, any, nothing, nobody 📉

English has special words for talking about **absence** or **non-existence** – things like "nothing", "nobody", or "no one". These replace "some/someone" in negative contexts and help avoid double negatives. Understanding them makes your negatives clear and natural.

### Why Do We Need These Words?

Negatives express "not this/not that". But English rules change words in questions and negatives:
- **Some** = positive/affirmative (some milk)
- **Any** = questions/negatives (any milk? / no milk)
- **No/none/nothing** = direct negatives (no milk / nothing)

Think about these:
- "I have **some** friends." (Positive)
- "Do you have **any** friends?" (Question)
- "I don\'t have **any** friends." (Negative – or "no friends")
- "I have **no** friends." (Strong negative)

**Key idea:** Use "any" in questions/negatives for flexibility; "no/nothing" for emphasis on absence.

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>Any</strong> works in questions and negatives (unknown/zero quantity).</p>
  <p><strong>No/nothing/nobody</strong> = zero/explicit absence (stronger).</p>
  <p>Never use "some" in negatives – it\'s for positives only!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Any vs. Some: The Basic Rule 🌟

**Some** = positive statements (expecting yes/known amount)
- "I have **some** money." (Positive – I do have it)
- "Would you like **some** tea?" (Offer – expecting yes)

**Any** = questions and negatives (unknown or zero)
- "Do you have **any** money?" (Question – don\'t know)
- "I don\'t have **any** money." (Negative – zero)

**Why the difference?** "Some" assumes existence; "any" is neutral for uncertainty or denial.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Important:</h3>
  <p>In negatives, use <strong>any</strong> with "not" (don\'t have any).</p>
  <p>But you can use <strong>no</strong> instead: "I have no money" (same meaning, stronger).</p>
  <p>Questions always use "any" – not "some"!</p>
</div>

### 2. No and None: Direct Negatives 🚫

**No** = before nouns (no + noun)
- "There is **no** milk in the fridge." (Zero milk)
- "**No** problem!" (Zero issue)

**None** = replaces noun (answer to "how many/much?")
- "How much money do you have? **None**." (Zero amount)
- "None of the students came." (Zero students)

**Why use them?** "No/none" emphasize complete absence – stronger than "not any".

### 3. Nothing, Nobody, No One, Nowhere: Negative Pronouns 👥

These replace nouns for people, things, places:
- **Nothing** = no thing (replaces "something")
  - "There is **nothing** to eat." (No food)
- **Nobody/No one** = no person (replaces "someone")
  - "I know **nobody** here." (No people)
  - "**No one** called." (Same as nobody)
- **Nowhere** = no place (replaces "somewhere")
  - "I can\'t find it **anywhere**." (In negative: nowhere to be found)

**In negatives/questions:**
- Negative: "I don\'t have **anything**." (Nothing)
- Question: "Is there **anyone** home?" (Any person?)

**Why these?** They make sentences shorter and emphasize "zero" without repeating nouns.

<GamePlaceholder id="fixTheMistake" />

### 4. Comparison Table: Affirmative vs. Negative Forms 🔄

Here's how they pair up:

| Positive/Affirmative | Question/Negative | Strong Negative | Example (Negative)              |
|----------------------|-------------------|-----------------|---------------------------------|
| **Some** (quantity) | **Any**          | **No/None**    | I don\'t have any/no money      |
| **Something**       | **Anything**     | **Nothing**    | There is nothing/anything here |
| **Someone/Anyone**  | **Anyone**       | **Nobody/No one** | I don\'t know anyone/nobody     |
| **Somewhere**       | **Anywhere**     | **Nowhere**    | I can\'t go anywhere/nowhere    |

**Quick rules:**
- Positive statements: Some/something/someone/somewhere
- Questions/Negatives: Any/anything/anyone/anywhere
- Emphasis on zero: No/none/nothing/nobody/nowhere

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Any/anything/anyone/anywhere</strong> = Questions and negatives (neutral)</li>
    <li><strong>No/none/nothing/nobody/nowhere</strong> = Direct zero/absence (strong)</li>
    <li>Avoid double negatives: "I don\'t have nothing" = wrong (means I have something!)</li>
    <li>Practice: In questions, always "any"; in negatives, "any" or "no" for emphasis</li>
  </ul>
</div>

### 5. Common Mistakes ❌

**Mistake 1:** Double negatives
- ❌ "I don\'t have **no** money." (Wrong – means I do have money!)
- ✅ "I don\'t have **any** money." or "I have **no** money." (Correct)

**Mistake 2:** Using "some" in questions/negatives
- ❌ "Do you have **some** questions?" (Wrong – sounds like assuming yes)
- ✅ "Do you have **any** questions?" (Correct)

**Mistake 3:** "None" with nouns
- ❌ "**None** problems here." (Wrong)
- ✅ "**No** problems here." or "**None** of the problems." (Correct)

**Mistake 4:** "No one" vs. "anyone" in negatives
- ❌ "I don\'t know **no one**." (Double negative)
- ✅ "I don\'t know **anyone**." (Correct – means no one)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Negative Pronouns**
Choose the right form! Any for questions/negatives, nothing/nobody for strong zero!

<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Negative Pronouns Practice</h3>
  <p className="mb-4">Write sentences using negative forms:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One negative statement with "any" (don\'t have any...)</li>
    <li>One statement with "nothing" or "nobody" (strong absence)</li>
    <li>One question with "any/anyone/anywhere"</li>
    <li>One sentence with "no/none" (direct negative)</li>
  </ol>
</div>
    `,
    de: `
## Negative Pronomen und Quantifizierer: no, none, any, nothing, nobody 📉

Englisch hat spezielle Wörter, um über **Abwesenheit** oder **Nicht-Existenz** zu sprechen – wie "nothing", "nobody" oder "no one". Diese ersetzen "some/someone" in negativen Kontexten und helfen, Doppelverneinungen zu vermeiden. Sie zu verstehen, macht deine Negationen klar und natürlich.

### Warum brauchen wir diese Wörter?

Negationen drücken "nicht das/nicht jenes" aus. Aber Englisch-Regeln ändern Wörter in Fragen und Negationen:
- **Some** = positiv/affirmativ (some Milch)
- **Any** = Fragen/Negationen (any Milch? / keine Milch)
- **No/none/nothing** = direkte Negationen (no Milch / nothing)

Denk an diese:
- "I have **some** friends." (Positiv)
- "Do you have **any** friends?" (Frage)
- "I don\'t have **any** friends." (Negativ – oder "no friends")
- "I have **no** friends." (Starke Negativ)

**Schlüsselidee:** Verwende "any" in Fragen/Negationen für Flexibilität; "no/nothing" für Betonung der Abwesenheit.

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>Any</strong> funktioniert in Fragen und Negationen (unbekannt/Null-Menge).</p>
  <p><strong>No/nothing/nobody</strong> = Null/explizite Abwesenheit (stärker).</p>
  <p>Verwende nie "some" in Negationen – es ist nur für Positives!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Any vs. Some: Die Grundregel 🌟

**Some** = positive Sätze (erwartet Ja/bekannte Menge)
- "I have **some** money." (Positiv – ich habe es)
- "Would you like **some** tea?" (Angebot – Ja erwartet)

**Any** = Fragen und Negationen (unbekannt oder Null)
- "Do you have **any** money?" (Frage – weiß nicht)
- "I don\'t have **any** money." (Negativ – Null)

**Warum der Unterschied?** "Some" nimmt Existenz an; "any" ist neutral für Unsicherheit oder Ablehnung.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Wichtig:</h3>
  <p>In Negationen <strong>any</strong> mit "not" verwenden (don\'t have any).</p>
  <p>Aber du kannst <strong>no</strong> stattdessen: "I have no money" (gleiche Bedeutung, stärker).</p>
  <p>Fragen verwenden immer "any" – nicht "some"!</p>
</div>

### 2. No und None: Direkte Negationen 🚫

**No** = vor Nomen (no + Nomen)
- "There is **no** milk in the fridge." (Null Milch)
- "**No** problem!" (Null Problem)

**None** = ersetzt Nomen (Antwort auf "how many/much?")
- "How much money do you have? **None**." (Null Menge)
- "None of the students came." (Null Studenten)

**Warum sie verwenden?** "No/none" betonen vollständige Abwesenheit – stärker als "not any".

### 3. Nothing, Nobody, No One, Nowhere: Negative Pronomen 👥

Diese ersetzen Nomen für Personen, Dinge, Orte:
- **Nothing** = keine Sache (ersetzt "something")
  - "There is **nothing** to eat." (Kein Essen)
- **Nobody/No one** = keine Person (ersetzt "someone")
  - "I know **nobody** here." (Keine Personen)
  - "**No one** called." (Gleich wie nobody)
- **Nowhere** = kein Ort (ersetzt "somewhere")
  - "I can\'t find it **anywhere**." (In Negativ: nirgends zu finden)

**In Negationen/Fragen:**
- Negativ: "I don\'t have **anything**." (Nothing)
- Frage: "Is there **anyone** home?" (Jede Person?)

**Warum diese?** Sie machen Sätze kürzer und betonen "Null" ohne Nomen-Wiederholung.

<GamePlaceholder id="fixTheMistake" />

### 4. Vergleichstabelle: Affirmative vs. Negative Formen 🔄

So passen sie zusammen:

| Positiv/Affirmativ | Frage/Negativ     | Starke Negativ    | Beispiel (Negativ)               |
|--------------------|-------------------|-------------------|----------------------------------|
| **Some** (Menge)  | **Any**          | **No/None**      | I don\'t have any/no money       |
| **Something**     | **Anything**     | **Nothing**      | There is nothing/anything here  |
| **Someone/Anyone**| **Anyone**       | **Nobody/No one**| I don\'t know anyone/nobody      |
| **Somewhere**     | **Anywhere**     | **Nowhere**      | I can\'t go anywhere/nowhere     |

**Schnelle Regeln:**
- Positive Sätze: Some/something/someone/somewhere
- Fragen/Negationen: Any/anything/anyone/anywhere
- Betonung auf Null: No/none/nothing/nobody/nowhere

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Any/anything/anyone/anywhere</strong> = Fragen und Negationen (neutral)</li>
    <li><strong>No/none/nothing/nobody/nowhere</strong> = Direkte Null/Abwesenheit (stark)</li>
    <li>Vermeide Doppelnegationen: "I don\'t have nothing" = falsch (bedeutet ich habe etwas!)</li>
    <li>Übung: In Fragen immer "any"; in Negationen "any" oder "no" für Betonung</li>
  </ul>
</div>

### 5. Häufige Fehler ❌

**Fehler 1:** Doppelnegationen
- ❌ "I don\'t have **no** money." (Falsch – bedeutet ich habe Geld!)
- ✅ "I don\'t have **any** money." oder "I have **no** money." (Richtig)

**Fehler 2:** "Some" in Fragen/Negationen
- ❌ "Do you have **some** questions?" (Falsch – klingt, als ob Ja erwartet)
- ✅ "Do you have **any** questions?" (Richtig)

**Fehler 3:** "None" mit Nomen
- ❌ "**None** problems here." (Falsch)
- ✅ "**No** problems here." oder "**None** of the problems." (Richtig)

**Fehler 4:** "No one" vs. "anyone" in Negationen
- ❌ "I don\'t know **no one**." (Doppelnegation)
- ✅ "I don\'t know **anyone**." (Richtig – bedeutet niemand)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Negative Pronomen**
Wähle die richtige Form! Any für Fragen/Negationen, nothing/nobody für starkes Null!

<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Negative Pronomen Übung</h3>
  <p className="mb-4">Schreibe Sätze mit negativen Formen:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein negativer Satz mit "any" (don\'t have any...)</li>
    <li>Ein Satz mit "nothing" oder "nobody" (starke Abwesenheit)</li>
    <li>Eine Frage mit "any/anyone/anywhere"</li>
    <li>Ein Satz mit "no/none" (direkte Negativ)</li>
  </ol>
</div>
    `
  },
  task: {
    de: {
      title: 'Negative Pronomen - No, None, Any, Nothing',
      description: 'Schreibe Sätze mit negativen Pronomen.',
      checklist: [
        { text: 'Negativer Satz mit "any" (don\'t have any...)', checked: false },
        { text: 'Satz mit "nothing" oder "nobody"', checked: false },
        { text: 'Frage mit "any/anyone/anywhere"', checked: false },
        { text: 'Satz mit "no/none"', checked: false }
      ]
    },
    en: {
      title: 'Negative Pronouns - No, None, Any, Nothing',
      description: 'Write sentences with negative pronouns.',
      checklist: [
        { text: 'Negative statement with "any" (don\'t have any...)', checked: false },
        { text: 'Statement with "nothing" or "nobody"', checked: false },
        { text: 'Question with "any/anyone/anywhere"', checked: false },
        { text: 'Sentence with "no/none"', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};
