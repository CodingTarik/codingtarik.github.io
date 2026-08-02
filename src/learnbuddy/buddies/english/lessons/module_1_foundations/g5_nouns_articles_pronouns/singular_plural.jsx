import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I have one ___", de: "Ich habe einen ___" },
    words: ["book", "books", "bookes", "bookies"],
    correct: "book",
    explanation: { en: "Singular: one book (no -s)", de: "Singular: ein Buch (kein -s)" }
  },
  {
    prompt: { en: "I have three ___", de: "Ich habe drei ___" },
    words: ["books", "book", "bookes", "bookies"],
    correct: "books",
    explanation: { en: "Plural: add -s (books)", de: "Plural: füge -s hinzu (books)" }
  },
  {
    prompt: { en: "I have two ___", de: "Ich habe zwei ___" },
    words: ["children", "childs", "child", "childes"],
    correct: "children",
    explanation: { en: "Irregular plural: child → children", de: "Unregelmäßiger Plural: child → children" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I have three book.",
    mistakeIndex: 2,
    correction: "books",
    explanation: { en: "Plural: add -s (three books)", de: "Plural: füge -s hinzu (drei Bücher)" }
  },
  {
    sentence: "I have two childs.",
    mistakeIndex: 2,
    correction: "children",
    explanation: { en: "Irregular plural: children (not childs)", de: "Unregelmäßiger Plural: children (nicht childs)" }
  },
  {
    sentence: "I have many boxs.",
    mistakeIndex: 2,
    correction: "boxes",
    explanation: { en: "Words ending in -x: add -es (boxes)", de: "Wörter auf -x: füge -es hinzu (boxes)" }
  }
];

const verbPilotData = [
  {
    prompt: "Catch the PLURAL forms!",
    targets: ["books", "children", "boxes", "mice", "teeth"],
    distractors: ["book", "child", "box", "mouse", "tooth", "childs", "mouses"],
    correct: "books"
  }
];

export const singularPlural = {
  id: 'a1_g79',
  title: {
    en: 'Singular and Plural: Rules and Exceptions',
    de: 'Singular und Plural: Regeln und Ausnahmen'
  },
  description: {
    en: "Forming plurals: regular (-s) and irregular (children, mice, etc.).",
    de: "Plural bilden: regelmäßig (-s) und unregelmäßig (children, mice, etc.)."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    verbPilot: <GrammarGame type="verbPilot" data={verbPilotData} />
  },

  content: {
    en: `
## Singular and Plural: Making Nouns Plural 📚

In English, most nouns have two forms: **singular** (one) and **plural** (more than one). Learning the rules helps you speak correctly!

### 1. Regular Plurals: Add -s ✅

Most nouns simply add **-s** to make them plural.

**Examples:**
- book → **books**
- cat → **cats**
- dog → **dogs**
- student → **students**

**Pattern:** noun + **-s**

<GamePlaceholder id="sentenceBuilder" />

### 2. Special Cases: Add -es 📝

Add **-es** (not just -s) when the noun ends in:
- **-s**: bus → **buses**
- **-x**: box → **boxes**
- **-ch**: watch → **watches**
- **-sh**: dish → **dishes**

**Examples:**
- class → **classes**
- fox → **foxes**
- church → **churches**
- brush → **brushes**

### 3. Words Ending in -y 🔤

When a noun ends in **-y**, change it to **-ies**:
- city → **cities**
- baby → **babies**
- country → **countries**

**Exception:** If there's a vowel before -y, just add -s:
- boy → **boys** (not "boies")
- day → **days**

### 4. Words Ending in -f or -fe 🔤

Change **-f** or **-fe** to **-ves**:
- knife → **knives**
- leaf → **leaves**
- wife → **wives**

**Exception:** Some words just add -s:
- roof → **roofs**
- belief → **beliefs**

### 5. Irregular Plurals ⚠️

Some nouns don't follow any rule! You must memorize them:

**Common Irregular Plurals:**
- child → **children**
- person → **people**
- foot → **feet**
- tooth → **teeth**
- mouse → **mice**
- man → **men**
- woman → **women**

**No Change:**
- sheep → **sheep** (same!)
- fish → **fish** (or fishes)
- deer → **deer**

<GamePlaceholder id="fixTheMistake" />

### 6. Common Mistakes ❌

1. **Forgetting -s in plural**
   - ❌ "I have three book." → ✅ "I have three **books**."

2. **Wrong irregular plural**
   - ❌ "two childs" → ✅ "two **children**"

3. **Adding -s to uncountable nouns**
   - ❌ "two waters" → ✅ "two glasses of water"

<GamePlaceholder id="verbPilot" />

**Remember:** Most nouns add -s, but learn the exceptions!
`,
    de: `
## Singular und Plural: Nomen Plural Machen 📚

Im Englischen haben die meisten Nomen zwei Formen: **Singular** (eins) und **Plural** (mehr als eins). Die Regeln zu lernen hilft dir, korrekt zu sprechen!

### 1. Regelmäßige Plurale: Füge -s hinzu ✅

Die meisten Nomen fügen einfach **-s** hinzu, um sie plural zu machen.

**Beispiele:**
- book → **books**
- cat → **cats**
- dog → **dogs**
- student → **students**

**Muster:** Nomen + **-s**

<GamePlaceholder id="sentenceBuilder" />

### 2. Besondere Fälle: Füge -es hinzu 📝

Füge **-es** (nicht nur -s) hinzu, wenn das Nomen endet auf:
- **-s**: bus → **buses**
- **-x**: box → **boxes**
- **-ch**: watch → **watches**
- **-sh**: dish → **dishes**

**Beispiele:**
- class → **classes**
- fox → **foxes**
- church → **churches**
- brush → **brushes**

### 3. Wörter auf -y 🔤

Wenn ein Nomen auf **-y** endet, ändere es zu **-ies**:
- city → **cities**
- baby → **babies**
- country → **countries**

**Ausnahme:** Wenn ein Vokal vor -y steht, füge nur -s hinzu:
- boy → **boys** (nicht "boies")
- day → **days**

### 4. Wörter auf -f oder -fe 🔤

Ändere **-f** oder **-fe** zu **-ves**:
- knife → **knives**
- leaf → **leaves**
- wife → **wives**

**Ausnahme:** Einige Wörter fügen nur -s hinzu:
- roof → **roofs**
- belief → **beliefs**

### 5. Unregelmäßige Plurale ⚠️

Einige Nomen folgen keiner Regel! Du musst sie auswendig lernen:

**Häufige Unregelmäßige Plurale:**
- child → **children**
- person → **people**
- foot → **feet**
- tooth → **teeth**
- mouse → **mice**
- man → **men**
- woman → **women**

**Keine Änderung:**
- sheep → **sheep** (gleich!)
- fish → **fish** (oder fishes)
- deer → **deer**

<GamePlaceholder id="fixTheMistake" />

### 6. Häufige Fehler ❌

1. **-s im Plural vergessen**
   - ❌ "I have three book." → ✅ "I have three **books**."

2. **Falscher unregelmäßiger Plural**
   - ❌ "two childs" → ✅ "two **children**"

3. **-s zu unzählbaren Nomen hinzufügen**
   - ❌ "two waters" → ✅ "two glasses of water"

<GamePlaceholder id="verbPilot" />

**Denk daran:** Die meisten Nomen fügen -s hinzu, aber lerne die Ausnahmen!
`
  },
  task: {
    de: {
      title: 'Plural bilden',
      description: 'Bilde den Plural von 5 Nomen (regelmäßig und unregelmäßig).',
      checklist: [
        { text: '3 regelmäßige Plurale (-s)', checked: false },
        { text: '2 unregelmäßige Plurale', checked: false }
      ]
    },
    en: {
      title: 'Forming Plurals',
      description: 'Form the plural of 5 nouns (regular and irregular).',
      checklist: [
        { text: '3 regular plurals (-s)', checked: false },
        { text: '2 irregular plurals', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

