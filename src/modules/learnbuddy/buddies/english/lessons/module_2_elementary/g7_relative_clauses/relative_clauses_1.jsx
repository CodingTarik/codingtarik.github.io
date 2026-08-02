import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "The woman ___ lives next door is a doctor.", de: "Die Frau, ___ nebenan wohnt, ist Ärztin." },
    words: ["who", "which", "that", "where"],
    correct: "who",
    explanation: { en: "Who = for people (the woman is a person)", de: "Who = für Personen (die Frau ist eine Person)" }
  },
  {
    prompt: { en: "The book ___ I'm reading is very interesting.", de: "Das Buch, ___ ich lese, ist sehr interessant." },
    words: ["who", "which", "that", "where"],
    correct: "which",
    explanation: { en: "Which = for things (the book is a thing)", de: "Which = für Dinge (das Buch ist ein Ding)" }
  },
  {
    prompt: { en: "The car ___ I bought is red.", de: "Das Auto, ___ ich gekauft habe, ist rot." },
    words: ["who", "which", "that", "where"],
    correct: "that",
    explanation: { en: "That = for things (can replace which)", de: "That = für Dinge (kann which ersetzen)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "The woman which lives next door is a doctor.",
    mistakeIndex: 1,
    correction: "who",
    explanation: { en: "Who = for people (not which)", de: "Who = für Personen (nicht which)" }
  },
  {
    sentence: "The book who I'm reading is interesting.",
    mistakeIndex: 1,
    correction: "which",
    explanation: { en: "Which = for things (not who)", de: "Which = für Dinge (nicht who)" }
  },
  {
    sentence: "The place where I work is nice.",
    mistakeIndex: 1,
    correction: "where",
    explanation: { en: "Where = for places (correct!)", de: "Where = für Orte (richtig!)" }
  }
];

const grammarRacerData = [
  {
    prompt: "The woman ___ lives next door is a doctor.",
    options: ["who", "which", "that"],
    correct: "who",
    explanation: "Who = for people"
  },
  {
    prompt: "The book ___ I'm reading is interesting.",
    options: ["who", "which", "that"],
    correct: "which",
    explanation: "Which = for things"
  },
  {
    prompt: "The car ___ I bought is red.",
    options: ["who", "which", "that"],
    correct: "that",
    explanation: "That = for things (can replace which)"
  }
];

export const relativeClauses1 = {
  id: 'a2_g92',
  title: {
    en: 'Relative Clauses 1: Clauses with who/that/which',
    de: 'Relativsätze 1: Sätze mit who/that/which'
  },
  description: {
    en: "Adding extra information about people and things. 'The woman who lives next door is a doctor', 'The book which I'm reading is interesting'.",
    de: "Zusätzliche Informationen über Personen und Dinge hinzufügen. 'Die Frau, die nebenan wohnt, ist Ärztin', 'Das Buch, das ich lese, ist interessant'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Relative Clauses: Adding Extra Information 📝

**Relative Clauses** (also called Adjective Clauses) add extra information about a person or thing. They help us combine two sentences into one and make our English more natural and fluent.

### Why Do We Need Relative Clauses?

Think about these situations:
- "The woman is a doctor. She lives next door." (Two separate sentences)
- "The woman **who lives next door** is a doctor." (One sentence with relative clause - more natural!)

- "The book is interesting. I'm reading it." (Two separate sentences)
- "The book **which I'm reading** is interesting." (One sentence with relative clause - more natural!)

The key idea: Relative clauses use **relative pronouns** (who, which, that) to connect information!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>Who</strong> = For people (the person who...)</p>
  <p><strong>Which</strong> = For things (the thing which...)</p>
  <p><strong>That</strong> = For things (can replace which, more common in spoken English)</p>
  <p><strong>Where</strong> = For places (the place where...)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Who: For People 👤

**Who** is used to add information about **people**.

**Structure:** Noun (person) + **who** + verb + rest of clause

**Examples:**
- "The woman **who lives next door** is a doctor." (Who = the woman)
- "The man **who I met yesterday** is my teacher." (Who = the man)
- "People **who work hard** succeed." (Who = people)
- "The student **who studies every day** gets good grades." (Who = the student)

**Key idea:** Who = for people, connects the person to the extra information!

**Note:** In spoken English, "that" can sometimes replace "who" for people:
- "The woman **that** lives next door is a doctor." (Less formal, but common)

### 2. Which: For Things 📦

**Which** is used to add information about **things** (objects, animals, ideas).

**Structure:** Noun (thing) + **which** + verb + rest of clause

**Examples:**
- "The book **which I'm reading** is very interesting." (Which = the book)
- "The car **which I bought** is red." (Which = the car)
- "The movie **which we saw** was great." (Which = the movie)
- "The idea **which he suggested** is good." (Which = the idea)

**Key idea:** Which = for things, connects the thing to the extra information!

**Note:** "Which" is more formal. In spoken English, "that" is often used instead.

### 3. That: For Things (Common in Spoken English) 🗣️

**That** can replace **which** for things. It's very common in spoken English and informal writing.

**Structure:** Noun (thing) + **that** + verb + rest of clause

**Examples:**
- "The book **that I'm reading** is very interesting." (That = the book, replaces which)
- "The car **that I bought** is red." (That = the car, replaces which)
- "The movie **that we saw** was great." (That = the movie, replaces which)
- "The idea **that he suggested** is good." (That = the idea, replaces which)

**Key idea:** That = for things, very common in spoken English (can replace which)!

**Important:** "That" can also replace "who" for people in informal English:
- "The woman **that** lives next door is a doctor." (Informal, but common)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Important:</h3>
  <p><strong>Which</strong> = More formal, for things</p>
  <p><strong>That</strong> = More common in spoken English, for things (and sometimes people)</p>
  <p>✅ "The book <strong>which</strong> I'm reading..." (Formal)</p>
  <p>✅ "The book <strong>that</strong> I'm reading..." (Common in speech)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. Where: For Places 📍

**Where** is used to add information about **places**.

**Structure:** Noun (place) + **where** + subject + verb + rest of clause

**Examples:**
- "The place **where I work** is nice." (Where = the place)
- "The city **where I was born** is beautiful." (Where = the city)
- "The restaurant **where we had dinner** is expensive." (Where = the restaurant)
- "The school **where I studied** is very good." (Where = the school)

**Key idea:** Where = for places, connects the place to the extra information!

**Note:** "Where" is used for places, not "which" or "that"!

### 5. Combining Sentences with Relative Clauses 🔗

**How to combine two sentences:**

**Step 1:** Identify the noun that appears in both sentences
**Step 2:** Choose the correct relative pronoun (who/which/that/where)
**Step 3:** Combine the sentences

**Example 1:**
- Sentence 1: "The woman is a doctor."
- Sentence 2: "She lives next door."
- Combined: "The woman **who lives next door** is a doctor."

**Example 2:**
- Sentence 1: "The book is interesting."
- Sentence 2: "I'm reading it."
- Combined: "The book **which I'm reading** is interesting." (or "that I'm reading")

**Example 3:**
- Sentence 1: "The place is nice."
- Sentence 2: "I work there."
- Combined: "The place **where I work** is nice."

### 6. Relative Pronouns: Summary Table 📋

| Pronoun | Used For | Example |
|---------|----------|---------|
| **Who** | People | The woman **who** lives next door |
| **Which** | Things (formal) | The book **which** I'm reading |
| **That** | Things (common) | The book **that** I'm reading |
| **That** | People (informal) | The woman **that** lives next door |
| **Where** | Places | The place **where** I work |

**Choosing the right pronoun:**
1. **People** → Use "who" (or "that" in informal English)
2. **Things** → Use "which" (formal) or "that" (common)
3. **Places** → Use "where"

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Who</strong> = For people (the person who...)</li>
    <li><strong>Which</strong> = For things, formal (the thing which...)</li>
    <li><strong>That</strong> = For things, common in speech (the thing that...)</li>
    <li><strong>Where</strong> = For places (the place where...)</li>
  </ul>
</div>

### 7. Common Mistakes ❌

**Mistake 1:** Using "which" for people
- ❌ "The woman **which** lives next door is a doctor." (Wrong! - which is for things)
- ✅ "The woman **who** lives next door is a doctor." (Correct!)

**Mistake 2:** Using "who" for things
- ❌ "The book **who** I'm reading is interesting." (Wrong! - who is for people)
- ✅ "The book **which** I'm reading is interesting." (Correct!)

**Mistake 3:** Using "which" or "that" for places
- ❌ "The place **which** I work is nice." (Wrong! - use where for places)
- ✅ "The place **where** I work is nice." (Correct!)

**Mistake 4:** Forgetting the relative pronoun
- ❌ "The woman lives next door is a doctor." (Wrong! - missing who)
- ✅ "The woman **who** lives next door is a doctor." (Correct!)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Relative Clauses**
Choose the correct relative pronoun! Remember: who for people, which/that for things, where for places!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Relative Clauses</h3>
  <p className="mb-4">Combine two sentences using relative clauses:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Combine: "The man is my teacher. I met him yesterday." → Use "who"</li>
    <li>Combine: "The book is interesting. I'm reading it." → Use "which" or "that"</li>
    <li>Combine: "The place is nice. I work there." → Use "where"</li>
    <li>Write your own sentence with a relative clause</li>
  </ol>
</div>
`,
    de: `
## Relativsätze: Zusätzliche Informationen hinzufügen 📝

**Relativsätze** (auch Adjektivsätze genannt) fügen zusätzliche Informationen über eine Person oder ein Ding hinzu. Sie helfen uns, zwei Sätze zu einem zu kombinieren und unser Englisch natürlicher und flüssiger zu machen.

### Warum brauchen wir Relativsätze?

Denk an diese Situationen:
- "Die Frau ist Ärztin. Sie wohnt nebenan." (Zwei separate Sätze)
- "Die Frau, **die nebenan wohnt**, ist Ärztin." (Ein Satz mit Relativsatz - natürlicher!)

- "Das Buch ist interessant. Ich lese es." (Zwei separate Sätze)
- "Das Buch, **das ich lese**, ist interessant." (Ein Satz mit Relativsatz - natürlicher!)

Die Schlüsselidee: Relativsätze verwenden **Relativpronomen** (who, which, that) um Informationen zu verbinden!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>Who</strong> = Für Personen (die Person, die...)</p>
  <p><strong>Which</strong> = Für Dinge (das Ding, das...)</p>
  <p><strong>That</strong> = Für Dinge (kann which ersetzen, häufiger im gesprochenen Englisch)</p>
  <p><strong>Where</strong> = Für Orte (der Ort, wo...)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Who: Für Personen 👤

**Who** wird verwendet, um Informationen über **Personen** hinzuzufügen.

**Struktur:** Nomen (Person) + **who** + Verb + Rest des Satzes

**Beispiele:**
- "Die Frau, **die nebenan wohnt**, ist Ärztin." (Who = die Frau)
- "Der Mann, **den ich gestern getroffen habe**, ist mein Lehrer." (Who = der Mann)
- "Menschen, **die hart arbeiten**, haben Erfolg." (Who = Menschen)
- "Der Student, **der jeden Tag lernt**, bekommt gute Noten." (Who = der Student)

**Schlüsselidee:** Who = für Personen, verbindet die Person mit den zusätzlichen Informationen!

**Hinweis:** Im gesprochenen Englisch kann "that" manchmal "who" für Personen ersetzen:
- "Die Frau, **die** nebenan wohnt, ist Ärztin." (Weniger formal, aber üblich)

### 2. Which: Für Dinge 📦

**Which** wird verwendet, um Informationen über **Dinge** (Objekte, Tiere, Ideen) hinzuzufügen.

**Struktur:** Nomen (Ding) + **which** + Verb + Rest des Satzes

**Beispiele:**
- "Das Buch, **das ich lese**, ist sehr interessant." (Which = das Buch)
- "Das Auto, **das ich gekauft habe**, ist rot." (Which = das Auto)
- "Der Film, **den wir gesehen haben**, war großartig." (Which = der Film)
- "Die Idee, **die er vorgeschlagen hat**, ist gut." (Which = die Idee)

**Schlüsselidee:** Which = für Dinge, verbindet das Ding mit den zusätzlichen Informationen!

**Hinweis:** "Which" ist formeller. Im gesprochenen Englisch wird oft "that" verwendet.

### 3. That: Für Dinge (Häufig im gesprochenen Englisch) 🗣️

**That** kann **which** für Dinge ersetzen. Es ist sehr häufig im gesprochenen Englisch und in informellen Texten.

**Struktur:** Nomen (Ding) + **that** + Verb + Rest des Satzes

**Beispiele:**
- "Das Buch, **das ich lese**, ist sehr interessant." (That = das Buch, ersetzt which)
- "Das Auto, **das ich gekauft habe**, ist rot." (That = das Auto, ersetzt which)
- "Der Film, **den wir gesehen haben**, war großartig." (That = der Film, ersetzt which)
- "Die Idee, **die er vorgeschlagen hat**, ist gut." (That = die Idee, ersetzt which)

**Schlüsselidee:** That = für Dinge, sehr häufig im gesprochenen Englisch (kann which ersetzen)!

**Wichtig:** "That" kann auch "who" für Personen im informellen Englisch ersetzen:
- "Die Frau, **die** nebenan wohnt, ist Ärztin." (Informell, aber üblich)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Wichtig:</h3>
  <p><strong>Which</strong> = Formeller, für Dinge</p>
  <p><strong>That</strong> = Häufiger im gesprochenen Englisch, für Dinge (und manchmal Personen)</p>
  <p>✅ "Das Buch, <strong>das</strong> ich lese..." (Formal)</p>
  <p>✅ "Das Buch, <strong>das</strong> ich lese..." (Häufig in der Sprache)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. Where: Für Orte 📍

**Where** wird verwendet, um Informationen über **Orte** hinzuzufügen.

**Struktur:** Nomen (Ort) + **where** + Subjekt + Verb + Rest des Satzes

**Beispiele:**
- "Der Ort, **wo ich arbeite**, ist schön." (Where = der Ort)
- "Die Stadt, **wo ich geboren wurde**, ist schön." (Where = die Stadt)
- "Das Restaurant, **wo wir zu Abend gegessen haben**, ist teuer." (Where = das Restaurant)
- "Die Schule, **wo ich studiert habe**, ist sehr gut." (Where = die Schule)

**Schlüsselidee:** Where = für Orte, verbindet den Ort mit den zusätzlichen Informationen!

**Hinweis:** "Where" wird für Orte verwendet, nicht "which" oder "that"!

### 5. Sätze mit Relativsätzen kombinieren 🔗

**Wie man zwei Sätze kombiniert:**

**Schritt 1:** Identifiziere das Nomen, das in beiden Sätzen vorkommt
**Schritt 2:** Wähle das richtige Relativpronomen (who/which/that/where)
**Schritt 3:** Kombiniere die Sätze

**Beispiel 1:**
- Satz 1: "Die Frau ist Ärztin."
- Satz 2: "Sie wohnt nebenan."
- Kombiniert: "Die Frau, **die nebenan wohnt**, ist Ärztin."

**Beispiel 2:**
- Satz 1: "Das Buch ist interessant."
- Satz 2: "Ich lese es."
- Kombiniert: "Das Buch, **das ich lese**, ist interessant." (oder "which I'm reading")

**Beispiel 3:**
- Satz 1: "Der Ort ist schön."
- Satz 2: "Ich arbeite dort."
- Kombiniert: "Der Ort, **wo ich arbeite**, ist schön."

### 6. Relativpronomen: Zusammenfassungstabelle 📋

| Pronomen | Verwendet für | Beispiel |
|----------|---------------|----------|
| **Who** | Personen | Die Frau, **die** nebenan wohnt |
| **Which** | Dinge (formal) | Das Buch, **das** ich lese |
| **That** | Dinge (häufig) | Das Buch, **das** ich lese |
| **That** | Personen (informell) | Die Frau, **die** nebenan wohnt |
| **Where** | Orte | Der Ort, **wo** ich arbeite |

**Das richtige Pronomen wählen:**
1. **Personen** → Verwende "who" (oder "that" im informellen Englisch)
2. **Dinge** → Verwende "which" (formal) oder "that" (häufig)
3. **Orte** → Verwende "where"

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Who</strong> = Für Personen (die Person, die...)</li>
    <li><strong>Which</strong> = Für Dinge, formal (das Ding, das...)</li>
    <li><strong>That</strong> = Für Dinge, häufig in der Sprache (das Ding, das...)</li>
    <li><strong>Where</strong> = Für Orte (der Ort, wo...)</li>
  </ul>
</div>

### 7. Häufige Fehler ❌

**Fehler 1:** "Which" für Personen verwenden
- ❌ "Die Frau, **die** nebenan wohnt, ist Ärztin." (Falsch! - which ist für Dinge)
- ✅ "Die Frau, **die** nebenan wohnt, ist Ärztin." (Richtig!)

**Fehler 2:** "Who" für Dinge verwenden
- ❌ "Das Buch, **das** ich lese, ist interessant." (Falsch! - who ist für Personen)
- ✅ "Das Buch, **das** ich lese, ist interessant." (Richtig!)

**Fehler 3:** "Which" oder "that" für Orte verwenden
- ❌ "Der Ort, **den** ich arbeite, ist schön." (Falsch! - verwende where für Orte)
- ✅ "Der Ort, **wo** ich arbeite, ist schön." (Richtig!)

**Fehler 4:** Das Relativpronomen vergessen
- ❌ "Die Frau wohnt nebenan ist Ärztin." (Falsch! - fehlt who)
- ✅ "Die Frau, **die** nebenan wohnt, ist Ärztin." (Richtig!)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Relativsätze**
Wähle das richtige Relativpronomen! Denk daran: who für Personen, which/that für Dinge, where für Orte!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Relativsätze</h3>
  <p className="mb-4">Kombiniere zwei Sätze mit Relativsätzen:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Kombiniere: "Der Mann ist mein Lehrer. Ich habe ihn gestern getroffen." → Verwende "who"</li>
    <li>Kombiniere: "Das Buch ist interessant. Ich lese es." → Verwende "which" oder "that"</li>
    <li>Kombiniere: "Der Ort ist schön. Ich arbeite dort." → Verwende "where"</li>
    <li>Schreibe deinen eigenen Satz mit einem Relativsatz</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Relativsätze 1',
      description: 'Kombiniere zwei Sätze mit Relativsätzen mit who, which, that oder where.',
      checklist: [
        { text: 'Satz mit "who" für Personen kombinieren', checked: false },
        { text: 'Satz mit "which" oder "that" für Dinge kombinieren', checked: false },
        { text: 'Satz mit "where" für Orte kombinieren', checked: false },
        { text: 'Eigener Satz mit Relativsatz', checked: false }
      ]
    },
    en: {
      title: 'Relative Clauses 1',
      description: 'Combine two sentences using relative clauses with who, which, that, or where.',
      checklist: [
        { text: 'Combine sentence with "who" for people', checked: false },
        { text: 'Combine sentence with "which" or "that" for things', checked: false },
        { text: 'Combine sentence with "where" for places', checked: false },
        { text: 'Own sentence with relative clause', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


