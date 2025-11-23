import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "___ of my parents are teachers.", de: "___ meiner Eltern sind Lehrer." },
    words: ["Both", "Neither", "Either", "All"],
    correct: "Both",
    explanation: { en: "Both = two things, positive", de: "Both = zwei Dinge, positiv" }
  },
  {
    prompt: { en: "___ of these books is interesting.", de: "___ dieser Bücher ist interessant." },
    words: ["Both", "Neither", "Either", "All"],
    correct: "Either",
    explanation: { en: "Either = one of two, singular verb", de: "Either = eines von zwei, Singular-Verb" }
  },
  {
    prompt: { en: "___ of us wants to go.", de: "___ von uns will gehen." },
    words: ["Both", "Neither", "Either", "All"],
    correct: "Neither",
    explanation: { en: "Neither = not one of two, negative meaning", de: "Neither = keines von zwei, negative Bedeutung" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "Both of my parents is teachers.",
    mistakeIndex: 2,
    correction: "are",
    explanation: { en: "Both + plural verb (both = two things)", de: "Both + Plural-Verb (both = zwei Dinge)" }
  },
  {
    sentence: "Either of these books are interesting.",
    mistakeIndex: 2,
    correction: "is",
    explanation: { en: "Either + singular verb (either = one of two)", de: "Either + Singular-Verb (either = eines von zwei)" }
  },
  {
    sentence: "Neither of us want to go.",
    mistakeIndex: 2,
    correction: "wants",
    explanation: { en: "Neither + singular verb (neither = not one of two)", de: "Neither + Singular-Verb (neither = keines von zwei)" }
  }
];

const grammarRacerData = [
  {
    prompt: "___ of my parents are teachers.",
    options: ["Both", "Neither", "Either"],
    correct: "Both",
    explanation: "Both = two things, positive"
  },
  {
    prompt: "___ of these books is interesting.",
    options: ["Both", "Neither", "Either"],
    correct: "Either",
    explanation: "Either = one of two, singular"
  },
  {
    prompt: "___ of us wants to go.",
    options: ["Both", "Neither", "Either"],
    correct: "Neither",
    explanation: "Neither = not one of two, negative"
  }
];

export const bothNeitherEither = {
  id: 'a2_g89',
  title: {
    en: 'Both, Neither, Either (both of / neither of / either of)',
    de: 'Both, Neither, Either (both of / neither of / either of)'
  },
  description: {
    en: "Talking about two things or people. 'Both of my parents are teachers', 'Neither of us wants to go', 'Either of these books is interesting'.",
    de: "Über zwei Dinge oder Personen sprechen. 'Beide meiner Eltern sind Lehrer', 'Keiner von uns will gehen', 'Eines dieser Bücher ist interessant'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Both, Neither, Either: Talking About Two Things 👥

**Both, Neither, and Either** are used to talk about **two things or people**. They help us express relationships between two items, whether we're talking about both of them, neither of them, or one of them.

### Why Do We Need Both, Neither, and Either?

Think about these situations:
- "**Both** of my parents are teachers." (Both = the two of them)
- "**Neither** of us wants to go." (Neither = not one of the two)
- "**Either** of these books is interesting." (Either = one of the two)

Each word has a specific meaning and grammar!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>Both</strong> = The two things/people (positive, plural verb)</p>
  <p><strong>Neither</strong> = Not one of the two (negative, singular verb)</p>
  <p><strong>Either</strong> = One of the two (positive, singular verb)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Both: The Two Things/People ✅✅

**Both** means "the two of them" or "both of the two". It's used with a **plural verb**.

**Structure:**
- "**Both** + noun" (Both parents)
- "**Both of** + noun/pronoun" (Both of my parents, Both of them)
- "**Both** + noun + **and** + noun" (Both John and Mary)

**Examples:**
- "**Both** of my parents are teachers." (The two of them are teachers)
- "**Both** books are interesting." (The two books are interesting)
- "**Both** of us want to go." (The two of us want to go)
- "**Both** John **and** Mary are coming." (The two of them are coming)

**Key idea:** Both = the two things/people, always with **plural verb**!

**Note:** You can also use "both" without "of":
- "**Both** my parents are teachers." (Same as "Both of my parents")
- "**Both** books are interesting." (Same as "Both of the books")

### 2. Neither: Not One of the Two ❌❌

**Neither** means "not one of the two" or "not either of them". It's used with a **singular verb**.

**Structure:**
- "**Neither** + noun" (Neither parent)
- "**Neither of** + noun/pronoun" (Neither of my parents, Neither of us)
- "**Neither** + noun + **nor** + noun" (Neither John nor Mary)

**Examples:**
- "**Neither** of my parents is a teacher." (Not one of them is a teacher)
- "**Neither** book is interesting." (Not one of the two books is interesting)
- "**Neither** of us wants to go." (Not one of us wants to go)
- "**Neither** John **nor** Mary is coming." (Not one of them is coming)

**Key idea:** Neither = not one of the two, always with **singular verb**!

**Important:** "Neither" is negative, so don't use "not" with it!
- ❌ "Neither of us **doesn't** want to go." (Wrong! - double negative)
- ✅ "**Neither** of us wants to go." (Correct! - neither is already negative)

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Common Mistake!</strong>
  <br/>
  <p className="mt-2"><strong>Neither</strong> = Already negative, so use singular verb!</p>
  <p>❌ "Neither of us <strong>want</strong> to go." (Wrong! - plural verb)</p>
  <p>✅ "Neither of us <strong>wants</strong> to go." (Correct! - singular verb)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 3. Either: One of the Two ✅

**Either** means "one of the two" or "one or the other". It's used with a **singular verb**.

**Structure:**
- "**Either** + noun" (Either book)
- "**Either of** + noun/pronoun" (Either of these books, Either of them)
- "**Either** + noun + **or** + noun" (Either John or Mary)

**Examples:**
- "**Either** of these books is interesting." (One of the two books is interesting)
- "**Either** book is fine." (One of the two books is fine)
- "**Either** of us can go." (One of the two of us can go)
- "**Either** John **or** Mary is coming." (One of them is coming)

**Key idea:** Either = one of the two, always with **singular verb**!

**Note:** "Either" can also be used in questions:
- "Would you like **either** of these books?" (Would you like one of them?)

### 4. Both...And, Neither...Nor, Either...Or 🔗

**Both...And** = The two things/people (both are true)
**Neither...Nor** = Not one of the two (both are false)
**Either...Or** = One of the two (one is true)

**Examples with Both...And:**
- "**Both** John **and** Mary are coming." (The two of them are coming)
- "I like **both** coffee **and** tea." (I like the two of them)
- "**Both** my parents **and** my sister are teachers." (The three of them are teachers)

**Examples with Neither...Nor:**
- "**Neither** John **nor** Mary is coming." (Not one of them is coming)
- "I like **neither** coffee **nor** tea." (I don't like either of them)
- "**Neither** my parents **nor** my sister is a teacher." (Not one of them is a teacher)

**Examples with Either...Or:**
- "**Either** John **or** Mary is coming." (One of them is coming)
- "I'll have **either** coffee **or** tea." (I'll have one of them)
- "**Either** my parents **or** my sister is a teacher." (One of them is a teacher)

**Important:** With "neither...nor" and "either...or", the verb agrees with the **closer** subject:
- "**Neither** John **nor** Mary **is** coming." (Verb agrees with Mary - singular)
- "**Either** my parents **or** my sister **is** a teacher." (Verb agrees with sister - singular)

### 5. Summary Table 📋

| Word | Meaning | Verb | Example |
|------|---------|------|---------|
| **Both** | The two things/people | Plural | Both of us **are** happy. |
| **Neither** | Not one of the two | Singular | Neither of us **wants** to go. |
| **Either** | One of the two | Singular | Either of these books **is** interesting. |

**With "of":**
- "**Both of** my parents **are** teachers."
- "**Neither of** us **wants** to go."
- "**Either of** these books **is** interesting."

**With "and/nor/or":**
- "**Both** John **and** Mary **are** coming."
- "**Neither** John **nor** Mary **is** coming."
- "**Either** John **or** Mary **is** coming."

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Both</strong> = The two things/people (plural verb)</li>
    <li><strong>Neither</strong> = Not one of the two (singular verb, negative)</li>
    <li><strong>Either</strong> = One of the two (singular verb)</li>
  </ul>
</div>

### 6. Common Mistakes ❌

**Mistake 1:** Using plural verb with "neither"
- ❌ "Neither of us **want** to go." (Wrong! - plural verb)
- ✅ "Neither of us **wants** to go." (Correct! - singular verb)

**Mistake 2:** Using singular verb with "both"
- ❌ "Both of my parents **is** a teacher." (Wrong! - singular verb)
- ✅ "Both of my parents **are** teachers." (Correct! - plural verb)

**Mistake 3:** Using "not" with "neither"
- ❌ "Neither of us **doesn't** want to go." (Wrong! - double negative)
- ✅ "**Neither** of us wants to go." (Correct! - neither is already negative)

**Mistake 4:** Confusing "either" with "neither"
- ❌ "**Either** of us wants to go." (Wrong! - means one wants to go)
- ✅ "**Neither** of us wants to go." (Correct! - means not one wants to go)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Both, Neither, Either**
Choose the correct word! Remember: both = plural, neither/either = singular!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Both, Neither, Either</h3>
  <p className="mb-4">Write sentences using both, neither, and either:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence with "both" (two things, plural verb)</li>
    <li>One sentence with "neither" (not one of two, singular verb)</li>
    <li>One sentence with "either" (one of two, singular verb)</li>
    <li>One sentence with "both...and" or "neither...nor" or "either...or"</li>
  </ol>
</div>
`,
    de: `
## Both, Neither, Either: Über zwei Dinge sprechen 👥

**Both, Neither und Either** werden verwendet, um über **zwei Dinge oder Personen** zu sprechen. Sie helfen uns, Beziehungen zwischen zwei Elementen auszudrücken, ob wir über beide, keines oder eines von ihnen sprechen.

### Warum brauchen wir Both, Neither und Either?

Denk an diese Situationen:
- "**Beide** meiner Eltern sind Lehrer." (Both = die beiden)
- "**Keiner** von uns will gehen." (Neither = keines von beiden)
- "**Eines** dieser Bücher ist interessant." (Either = eines von beiden)

Jedes Wort hat eine spezifische Bedeutung und Grammatik!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>Both</strong> = Die zwei Dinge/Personen (positiv, Plural-Verb)</p>
  <p><strong>Neither</strong> = Keines von beiden (negativ, Singular-Verb)</p>
  <p><strong>Either</strong> = Eines von beiden (positiv, Singular-Verb)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Both: Die zwei Dinge/Personen ✅✅

**Both** bedeutet "die beiden" oder "beide von beiden". Es wird mit einem **Plural-Verb** verwendet.

**Struktur:**
- "**Both** + Nomen" (Both parents)
- "**Both of** + Nomen/Pronomen" (Both of my parents, Both of them)
- "**Both** + Nomen + **and** + Nomen" (Both John and Mary)

**Beispiele:**
- "**Beide** meiner Eltern sind Lehrer." (Die beiden sind Lehrer)
- "**Beide** Bücher sind interessant." (Die beiden Bücher sind interessant)
- "**Beide** von uns wollen gehen." (Die beiden von uns wollen gehen)
- "**Sowohl** John **als auch** Mary kommen." (Die beiden kommen)

**Schlüsselidee:** Both = die zwei Dinge/Personen, immer mit **Plural-Verb**!

**Hinweis:** Du kannst "both" auch ohne "of" verwenden:
- "**Beide** meine Eltern sind Lehrer." (Gleich wie "Both of my parents")
- "**Beide** Bücher sind interessant." (Gleich wie "Both of the books")

### 2. Neither: Keines von beiden ❌❌

**Neither** bedeutet "keines von beiden" oder "nicht eines von beiden". Es wird mit einem **Singular-Verb** verwendet.

**Struktur:**
- "**Neither** + Nomen" (Neither parent)
- "**Neither of** + Nomen/Pronomen" (Neither of my parents, Neither of us)
- "**Neither** + Nomen + **nor** + Nomen" (Neither John nor Mary)

**Beispiele:**
- "**Keines** meiner Eltern ist Lehrer." (Nicht eines von ihnen ist Lehrer)
- "**Keines** der Bücher ist interessant." (Nicht eines der beiden Bücher ist interessant)
- "**Keiner** von uns will gehen." (Nicht einer von uns will gehen)
- "**Weder** John **noch** Mary kommt." (Nicht einer von ihnen kommt)

**Schlüsselidee:** Neither = keines von beiden, immer mit **Singular-Verb**!

**Wichtig:** "Neither" ist bereits negativ, verwende also nicht "not" damit!
- ❌ "Keiner von uns **will nicht** gehen." (Falsch! - doppelte Verneinung)
- ✅ "**Keiner** von uns will gehen." (Richtig! - neither ist bereits negativ)

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Häufiger Fehler!</strong>
  <br/>
  <p className="mt-2"><strong>Neither</strong> = Bereits negativ, verwende also Singular-Verb!</p>
  <p>❌ "Keiner von uns <strong>wollen</strong> gehen." (Falsch! - Plural-Verb)</p>
  <p>✅ "Keiner von uns <strong>will</strong> gehen." (Richtig! - Singular-Verb)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 3. Either: Eines von beiden ✅

**Either** bedeutet "eines von beiden" oder "eines oder das andere". Es wird mit einem **Singular-Verb** verwendet.

**Struktur:**
- "**Either** + Nomen" (Either book)
- "**Either of** + Nomen/Pronomen" (Either of these books, Either of them)
- "**Either** + Nomen + **or** + Nomen" (Either John or Mary)

**Beispiele:**
- "**Eines** dieser Bücher ist interessant." (Eines der beiden Bücher ist interessant)
- "**Eines** der Bücher ist in Ordnung." (Eines der beiden Bücher ist in Ordnung)
- "**Einer** von uns kann gehen." (Einer der beiden von uns kann gehen)
- "**Entweder** John **oder** Mary kommt." (Einer von ihnen kommt)

**Schlüsselidee:** Either = eines von beiden, immer mit **Singular-Verb**!

**Hinweis:** "Either" kann auch in Fragen verwendet werden:
- "Möchtest du **eines** dieser Bücher?" (Möchtest du eines von ihnen?)

### 4. Both...And, Neither...Nor, Either...Or 🔗

**Both...And** = Die zwei Dinge/Personen (beide sind wahr)
**Neither...Nor** = Keines von beiden (beide sind falsch)
**Either...Or** = Eines von beiden (eines ist wahr)

**Beispiele mit Both...And:**
- "**Sowohl** John **als auch** Mary kommen." (Die beiden kommen)
- "Ich mag **sowohl** Kaffee **als auch** Tee." (Ich mag die beiden)
- "**Sowohl** meine Eltern **als auch** meine Schwester sind Lehrer." (Die drei sind Lehrer)

**Beispiele mit Neither...Nor:**
- "**Weder** John **noch** Mary kommt." (Nicht einer von ihnen kommt)
- "Ich mag **weder** Kaffee **noch** Tee." (Ich mag keines von ihnen)
- "**Weder** meine Eltern **noch** meine Schwester ist Lehrer." (Nicht einer von ihnen ist Lehrer)

**Beispiele mit Either...Or:**
- "**Entweder** John **oder** Mary kommt." (Einer von ihnen kommt)
- "Ich nehme **entweder** Kaffee **oder** Tee." (Ich nehme eines von ihnen)
- "**Entweder** meine Eltern **oder** meine Schwester ist Lehrer." (Einer von ihnen ist Lehrer)

**Wichtig:** Bei "neither...nor" und "either...or" stimmt das Verb mit dem **näheren** Subjekt überein:
- "**Weder** John **noch** Mary **kommt**." (Verb stimmt mit Mary überein - Singular)
- "**Entweder** meine Eltern **oder** meine Schwester **ist** Lehrer." (Verb stimmt mit Schwester überein - Singular)

### 5. Zusammenfassungstabelle 📋

| Wort | Bedeutung | Verb | Beispiel |
|------|-----------|------|----------|
| **Both** | Die zwei Dinge/Personen | Plural | Beide von uns **sind** glücklich. |
| **Neither** | Keines von beiden | Singular | Keiner von uns **will** gehen. |
| **Either** | Eines von beiden | Singular | Eines dieser Bücher **ist** interessant. |

**Mit "of":**
- "**Beide** meiner Eltern **sind** Lehrer."
- "**Keiner** von uns **will** gehen."
- "**Eines** dieser Bücher **ist** interessant."

**Mit "and/nor/or":**
- "**Sowohl** John **als auch** Mary **kommen**."
- "**Weder** John **noch** Mary **kommt**."
- "**Entweder** John **oder** Mary **kommt**."

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Both</strong> = Die zwei Dinge/Personen (Plural-Verb)</li>
    <li><strong>Neither</strong> = Keines von beiden (Singular-Verb, negativ)</li>
    <li><strong>Either</strong> = Eines von beiden (Singular-Verb)</li>
  </ul>
</div>

### 6. Häufige Fehler ❌

**Fehler 1:** Plural-Verb mit "neither" verwenden
- ❌ "Keiner von uns **wollen** gehen." (Falsch! - Plural-Verb)
- ✅ "Keiner von uns **will** gehen." (Richtig! - Singular-Verb)

**Fehler 2:** Singular-Verb mit "both" verwenden
- ❌ "Beide meiner Eltern **ist** Lehrer." (Falsch! - Singular-Verb)
- ✅ "Beide meiner Eltern **sind** Lehrer." (Richtig! - Plural-Verb)

**Fehler 3:** "Not" mit "neither" verwenden
- ❌ "Keiner von uns **will nicht** gehen." (Falsch! - doppelte Verneinung)
- ✅ "**Keiner** von uns will gehen." (Richtig! - neither ist bereits negativ)

**Fehler 4:** "Either" mit "neither" verwechseln
- ❌ "**Einer** von uns will gehen." (Falsch! - bedeutet einer will gehen)
- ✅ "**Keiner** von uns will gehen." (Richtig! - bedeutet nicht einer will gehen)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Both, Neither, Either**
Wähle das richtige Wort! Denk daran: both = Plural, neither/either = Singular!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Both, Neither, Either</h3>
  <p className="mb-4">Schreibe Sätze mit both, neither und either:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz mit "both" (zwei Dinge, Plural-Verb)</li>
    <li>Ein Satz mit "neither" (keines von beiden, Singular-Verb)</li>
    <li>Ein Satz mit "either" (eines von beiden, Singular-Verb)</li>
    <li>Ein Satz mit "both...and" oder "neither...nor" oder "either...or"</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Both, Neither, Either',
      description: 'Schreibe Sätze mit both, neither und either über zwei Dinge oder Personen.',
      checklist: [
        { text: 'Satz mit "both" (zwei Dinge, Plural-Verb)', checked: false },
        { text: 'Satz mit "neither" (keines von beiden, Singular-Verb)', checked: false },
        { text: 'Satz mit "either" (eines von beiden, Singular-Verb)', checked: false },
        { text: 'Satz mit "both...and" oder "neither...nor" oder "either...or"', checked: false }
      ]
    },
    en: {
      title: 'Both, Neither, Either',
      description: 'Write sentences using both, neither, and either about two things or people.',
      checklist: [
        { text: 'Sentence with "both" (two things, plural verb)', checked: false },
        { text: 'Sentence with "neither" (not one of two, singular verb)', checked: false },
        { text: 'Sentence with "either" (one of two, singular verb)', checked: false },
        { text: 'Sentence with "both...and" or "neither...nor" or "either...or"', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

