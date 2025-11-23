import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "Do you know ___ the train leaves?", de: "Weißt du, ___ der Zug abfährt?" },
    words: ["when", "when does", "when do", "when is"],
    correct: "when",
    explanation: { en: "Indirect question: Do you know + question word + subject + verb", de: "Indirekte Frage: Do you know + Fragewort + Subjekt + Verb" }
  },
  {
    prompt: { en: "Can you tell me ___ she lives?", de: "Kannst du mir sagen, ___ sie wohnt?" },
    words: ["where", "where does", "where do", "where is"],
    correct: "where",
    explanation: { en: "Indirect question: Can you tell me + question word + subject + verb", de: "Indirekte Frage: Can you tell me + Fragewort + Subjekt + Verb" }
  },
  {
    prompt: { en: "I wonder ___ he is coming.", de: "Ich frage mich, ___ er kommt." },
    words: ["if", "does", "is", "will"],
    correct: "if",
    explanation: { en: "Indirect yes/no question: I wonder + if + subject + verb", de: "Indirekte Ja/Nein-Frage: I wonder + if + Subjekt + Verb" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "Do you know where does she live?",
    mistakeIndex: 2,
    correction: "where",
    explanation: { en: "Indirect question: no 'do/does' after question word", de: "Indirekte Frage: kein 'do/does' nach Fragewort" }
  },
  {
    sentence: "Can you tell me what time is it?",
    mistakeIndex: 3,
    correction: "it is",
    explanation: { en: "Indirect question: subject + verb (not verb + subject)", de: "Indirekte Frage: Subjekt + Verb (nicht Verb + Subjekt)" }
  },
  {
    sentence: "I don't know does he will come.",
    mistakeIndex: 2,
    correction: "if",
    explanation: { en: "Indirect yes/no question: use 'if' (not 'does')", de: "Indirekte Ja/Nein-Frage: verwende 'if' (nicht 'does')" }
  }
];

const grammarRacerData = [
  {
    prompt: "Do you know ___ the train leaves?",
    options: ["when", "when does", "when do"],
    correct: "when",
    explanation: "Indirect question: when"
  },
  {
    prompt: "Can you tell me ___ she lives?",
    options: ["where", "where does", "where do"],
    correct: "where",
    explanation: "Indirect question: where"
  },
  {
    prompt: "I wonder ___ he is coming.",
    options: ["if", "does", "is"],
    correct: "if",
    explanation: "Indirect yes/no question: if"
  }
];

export const indirectQuestions = {
  id: 'a2_g50',
  title: {
    en: 'Indirect Questions (do you know where ... ?)',
    de: 'Indirekte Fragen (weißt du, wo ... ?)'
  },
  description: {
    en: "Asking questions politely using indirect forms. 'Do you know where she lives?', 'Can you tell me what time it is?'",
    de: "Höfliche Fragen mit indirekten Formen stellen. 'Weißt du, wo sie wohnt?', 'Kannst du mir sagen, wie spät es ist?'"
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Indirect Questions: Asking Politely 🤔

**Indirect Questions** are a polite way to ask questions. Instead of asking directly "Where does she live?", you ask "Do you know where she lives?" This sounds more polite and formal.

### Why Use Indirect Questions?

Think about these situations:
- Direct: "**Where does** she live?" (Direct question - can sound abrupt)
- Indirect: "**Do you know where** she lives?" (Indirect question - more polite)

- Direct: "**What time is** it?" (Direct question)
- Indirect: "**Can you tell me what time** it is?" (Indirect question - more polite)

The key idea: Indirect questions use a **main clause** (like "Do you know...") + **question word** + **normal word order** (subject + verb)!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>Direct question:</strong> "Where <strong>does</strong> she live?" (Question word + do/does + subject + verb)</p>
  <p><strong>Indirect question:</strong> "Do you know where she <strong>lives</strong>?" (Question word + subject + verb - normal order!)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Structure: Main Clause + Question Word + Normal Order 📝

**Structure:** Main clause + question word + **subject + verb** (normal word order!)

**Common main clauses:**
- "Do you know..."
- "Can you tell me..."
- "I wonder..."
- "I'd like to know..."
- "Could you tell me..."

**Examples:**
- "**Do you know where** she lives?" (where + she + lives - normal order!)
- "**Can you tell me what time** it is?" (what time + it + is - normal order!)
- "**I wonder when** the train leaves." (when + the train + leaves - normal order!)

**Key idea:** After the question word, use **normal word order** (subject + verb), NOT question order (verb + subject)!

### 2. Question Words in Indirect Questions ❓

**Question words:** where, when, what, who, why, how, which

**Examples:**
- "**Do you know where** the station is?" (where + the station + is)
- "**Can you tell me when** the meeting starts?" (when + the meeting + starts)
- "**I wonder what** she wants." (what + she + wants)
- "**Could you tell me who** that person is?" (who + that person + is)
- "**Do you know why** he left?" (why + he + left)
- "**Can you tell me how** to get there?" (how + to get there)

**Important:** After the question word, use **normal word order** - no "do/does/did"!

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Common Mistake!</strong>
  <br/>
  <p className="mt-2">❌ "Do you know <strong>where does</strong> she live?" (Wrong! - has 'does')</p>
  <p>✅ "Do you know <strong>where she lives</strong>?" (Correct! - normal order)</p>
  <p className="mt-2">❌ "Can you tell me <strong>what time is</strong> it?" (Wrong! - question order)</p>
  <p>✅ "Can you tell me <strong>what time it is</strong>?" (Correct! - normal order)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 3. Yes/No Questions: Using "If" or "Whether" ✅❌

For **yes/no questions** (questions without question words), use **"if"** or **"whether"**:

**Structure:** Main clause + **if/whether** + subject + verb

**Examples:**
- Direct: "**Is** she coming?" (Yes/no question)
- Indirect: "**Do you know if** she is coming?" (if + she + is coming)

- Direct: "**Does** he like pizza?" (Yes/no question)
- Indirect: "**Can you tell me if** he likes pizza?" (if + he + likes pizza)

- Direct: "**Will** they arrive on time?" (Yes/no question)
- Indirect: "**I wonder if** they will arrive on time." (if + they + will arrive)

**"If" vs "Whether":**
- **"If"** is more common in spoken English
- **"Whether"** is more formal
- Both mean the same thing!

**Examples:**
- "Do you know **if** she is coming?" (Common)
- "Do you know **whether** she is coming?" (More formal)

### 4. Common Phrases for Indirect Questions 🗣️

**Asking for information:**
- "**Do you know** where the station is?"
- "**Can you tell me** what time it is?"
- "**Could you tell me** when the train leaves?"
- "**I'd like to know** who that person is."

**Expressing uncertainty:**
- "**I wonder** if she is coming."
- "**I'm not sure** whether he likes pizza."
- "**I don't know** if they will arrive on time."

**Asking politely:**
- "**Would you mind telling me** where the bathroom is?"
- "**Could you possibly tell me** what time it is?"

### 5. Direct vs Indirect Questions: Comparison 🔄

| Direct Question | Indirect Question |
|----------------|-------------------|
| "Where **does** she live?" | "Do you know where she **lives**?" |
| "What time **is** it?" | "Can you tell me what time **it is**?" |
| "When **will** they arrive?" | "I wonder when they **will** arrive." |
| "**Is** she coming?" | "Do you know **if** she is coming?" |
| "**Does** he like pizza?" | "Can you tell me **if** he likes pizza?" |

**Key differences:**
1. Direct questions use **question order** (verb + subject)
2. Indirect questions use **normal order** (subject + verb)
3. Direct questions can sound abrupt
4. Indirect questions sound more polite

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Direct:</strong> "Where <strong>does</strong> she live?" (Question order)</li>
    <li><strong>Indirect:</strong> "Do you know where she <strong>lives</strong>?" (Normal order)</li>
    <li><strong>Yes/No indirect:</strong> "Do you know <strong>if</strong> she is coming?"</li>
  </ul>
</div>

### 6. Common Mistakes ❌

**Mistake 1:** Using question order in indirect questions
- ❌ "Do you know where **does** she live?" (Wrong! - has 'does')
- ✅ "Do you know where she **lives**?" (Correct! - normal order)

**Mistake 2:** Using question order with "what time"
- ❌ "Can you tell me what time **is it**?" (Wrong! - question order)
- ✅ "Can you tell me what time **it is**?" (Correct! - normal order)

**Mistake 3:** Forgetting "if" for yes/no questions
- ❌ "Do you know **does** he like pizza?" (Wrong! - missing 'if')
- ✅ "Do you know **if** he likes pizza?" (Correct! - has 'if')

**Mistake 4:** Using "do/does" after question words
- ❌ "I wonder when **does** the train leave." (Wrong! - has 'does')
- ✅ "I wonder when the train **leaves**." (Correct! - normal order)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Indirect Questions**
Choose the correct form! Remember: normal word order after question words!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Indirect Questions</h3>
  <p className="mb-4">Convert direct questions to indirect questions:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Convert: "Where does she live?" → "Do you know..."</li>
    <li>Convert: "What time is it?" → "Can you tell me..."</li>
    <li>Convert: "Is he coming?" → "I wonder..."</li>
    <li>Write your own indirect question using "Do you know..."</li>
  </ol>
</div>
`,
    de: `
## Indirekte Fragen: Höflich fragen 🤔

**Indirekte Fragen** sind eine höfliche Art, Fragen zu stellen. Anstatt direkt "Wo wohnt sie?" zu fragen, fragst du "Weißt du, wo sie wohnt?" Das klingt höflicher und formeller.

### Warum indirekte Fragen verwenden?

Denk an diese Situationen:
- Direkt: "**Wo wohnt** sie?" (Direkte Frage - kann abrupt klingen)
- Indirekt: "**Weißt du, wo** sie wohnt?" (Indirekte Frage - höflicher)

- Direkt: "**Wie spät ist** es?" (Direkte Frage)
- Indirekt: "**Kannst du mir sagen, wie spät** es ist?" (Indirekte Frage - höflicher)

Die Schlüsselidee: Indirekte Fragen verwenden einen **Hauptsatz** (wie "Weißt du...") + **Fragewort** + **normale Wortstellung** (Subjekt + Verb)!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>Direkte Frage:</strong> "Wo <strong>wohnt</strong> sie?" (Fragewort + Verb + Subjekt)</p>
  <p><strong>Indirekte Frage:</strong> "Weißt du, wo sie <strong>wohnt</strong>?" (Fragewort + Subjekt + Verb - normale Reihenfolge!)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Struktur: Hauptsatz + Fragewort + Normale Reihenfolge 📝

**Struktur:** Hauptsatz + Fragewort + **Subjekt + Verb** (normale Wortstellung!)

**Häufige Hauptsätze:**
- "Do you know..." (Weißt du...)
- "Can you tell me..." (Kannst du mir sagen...)
- "I wonder..." (Ich frage mich...)
- "I'd like to know..." (Ich möchte wissen...)
- "Could you tell me..." (Könntest du mir sagen...)

**Beispiele:**
- "**Weißt du, wo** sie wohnt?" (wo + sie + wohnt - normale Reihenfolge!)
- "**Kannst du mir sagen, wie spät** es ist?" (wie spät + es + ist - normale Reihenfolge!)
- "**Ich frage mich, wann** der Zug abfährt." (wann + der Zug + abfährt - normale Reihenfolge!)

**Schlüsselidee:** Nach dem Fragewort verwende **normale Wortstellung** (Subjekt + Verb), NICHT Frage-Reihenfolge (Verb + Subjekt)!

### 2. Fragewörter in indirekten Fragen ❓

**Fragewörter:** where (wo), when (wann), what (was), who (wer), why (warum), how (wie), which (welche)

**Beispiele:**
- "**Weißt du, wo** der Bahnhof ist?" (wo + der Bahnhof + ist)
- "**Kannst du mir sagen, wann** das Meeting beginnt?" (wann + das Meeting + beginnt)
- "**Ich frage mich, was** sie will." (was + sie + will)
- "**Könntest du mir sagen, wer** diese Person ist?" (wer + diese Person + ist)
- "**Weißt du, warum** er gegangen ist?" (warum + er + gegangen ist)
- "**Kannst du mir sagen, wie** man dorthin kommt?" (wie + man + dorthin kommt)

**Wichtig:** Nach dem Fragewort verwende **normale Wortstellung** - kein "do/does/did"!

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Häufiger Fehler!</strong>
  <br/>
  <p className="mt-2">❌ "Weißt du, <strong>wo wohnt</strong> sie?" (Falsch! - Frage-Reihenfolge)</p>
  <p>✅ "Weißt du, <strong>wo sie wohnt</strong>?" (Richtig! - normale Reihenfolge)</p>
  <p className="mt-2">❌ "Kannst du mir sagen, <strong>wie spät ist</strong> es?" (Falsch! - Frage-Reihenfolge)</p>
  <p>✅ "Kannst du mir sagen, <strong>wie spät es ist</strong>?" (Richtig! - normale Reihenfolge)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 3. Ja/Nein-Fragen: "If" oder "Whether" verwenden ✅❌

Für **Ja/Nein-Fragen** (Fragen ohne Fragewörter) verwende **"if"** oder **"whether"**:

**Struktur:** Hauptsatz + **if/whether** + Subjekt + Verb

**Beispiele:**
- Direkt: "**Kommt** sie?" (Ja/Nein-Frage)
- Indirekt: "**Weißt du, ob** sie kommt?" (if + sie + kommt)

- Direkt: "**Mag** er Pizza?" (Ja/Nein-Frage)
- Indirekt: "**Kannst du mir sagen, ob** er Pizza mag?" (if + er + mag)

- Direkt: "**Werden** sie pünktlich ankommen?" (Ja/Nein-Frage)
- Indirekt: "**Ich frage mich, ob** sie pünktlich ankommen werden." (if + sie + werden ankommen)

**"If" vs "Whether":**
- **"If"** ist häufiger im gesprochenen Englisch
- **"Whether"** ist formeller
- Beide bedeuten dasselbe!

**Beispiele:**
- "Weißt du, **ob** sie kommt?" (Häufig)
- "Weißt du, **ob** sie kommt?" (Formeller)

### 4. Häufige Phrasen für indirekte Fragen 🗣️

**Nach Informationen fragen:**
- "**Weißt du**, wo der Bahnhof ist?"
- "**Kannst du mir sagen**, wie spät es ist?"
- "**Könntest du mir sagen**, wann der Zug abfährt?"
- "**Ich möchte wissen**, wer diese Person ist."

**Unsicherheit ausdrücken:**
- "**Ich frage mich**, ob sie kommt."
- "**Ich bin mir nicht sicher**, ob er Pizza mag."
- "**Ich weiß nicht**, ob sie pünktlich ankommen werden."

**Höflich fragen:**
- "**Würdest du mir sagen**, wo die Toilette ist?"
- "**Könntest du mir vielleicht sagen**, wie spät es ist?"

### 5. Direkte vs Indirekte Fragen: Vergleich 🔄

| Direkte Frage | Indirekte Frage |
|--------------|-----------------|
| "Wo **wohnt** sie?" | "Weißt du, wo sie **wohnt**?" |
| "Wie spät **ist** es?" | "Kannst du mir sagen, wie spät **es ist**?" |
| "Wann **werden** sie ankommen?" | "Ich frage mich, wann sie **ankommen werden**." |
| "**Kommt** sie?" | "Weißt du, **ob** sie kommt?" |
| "**Mag** er Pizza?" | "Kannst du mir sagen, **ob** er Pizza mag?" |

**Schlüsselunterschiede:**
1. Direkte Fragen verwenden **Frage-Reihenfolge** (Verb + Subjekt)
2. Indirekte Fragen verwenden **normale Reihenfolge** (Subjekt + Verb)
3. Direkte Fragen können abrupt klingen
4. Indirekte Fragen klingen höflicher

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Direkt:</strong> "Wo **wohnt** sie?" (Frage-Reihenfolge)</li>
    <li><strong>Indirekt:</strong> "Weißt du, wo sie **wohnt**?" (Normale Reihenfolge)</li>
    <li><strong>Ja/Nein indirekt:</strong> "Weißt du, **ob** sie kommt?"</li>
  </ul>
</div>

### 6. Häufige Fehler ❌

**Fehler 1:** Frage-Reihenfolge in indirekten Fragen verwenden
- ❌ "Weißt du, wo **wohnt** sie?" (Falsch! - Frage-Reihenfolge)
- ✅ "Weißt du, wo sie **wohnt**?" (Richtig! - normale Reihenfolge)

**Fehler 2:** Frage-Reihenfolge mit "wie spät" verwenden
- ❌ "Kannst du mir sagen, wie spät **ist es**?" (Falsch! - Frage-Reihenfolge)
- ✅ "Kannst du mir sagen, wie spät **es ist**?" (Richtig! - normale Reihenfolge)

**Fehler 3:** "If" für Ja/Nein-Fragen vergessen
- ❌ "Weißt du, **mag** er Pizza?" (Falsch! - fehlt 'if')
- ✅ "Weißt du, **ob** er Pizza mag?" (Richtig! - hat 'if')

**Fehler 4:** "Do/does" nach Fragewörtern verwenden
- ❌ "Ich frage mich, wann **fährt** der Zug ab." (Falsch! - Frage-Reihenfolge)
- ✅ "Ich frage mich, wann der Zug **abfährt**." (Richtig! - normale Reihenfolge)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Indirekte Fragen**
Wähle die richtige Form! Denk daran: normale Wortstellung nach Fragewörtern!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Indirekte Fragen</h3>
  <p className="mb-4">Wandle direkte Fragen in indirekte Fragen um:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Wandle um: "Wo wohnt sie?" → "Weißt du..."</li>
    <li>Wandle um: "Wie spät ist es?" → "Kannst du mir sagen..."</li>
    <li>Wandle um: "Kommt er?" → "Ich frage mich..."</li>
    <li>Schreibe deine eigene indirekte Frage mit "Weißt du..."</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Indirekte Fragen',
      description: 'Wandle direkte Fragen in indirekte Fragen um.',
      checklist: [
        { text: 'Direkte Frage zu indirekter Frage umwandeln (mit Fragewort)', checked: false },
        { text: 'Direkte Ja/Nein-Frage zu indirekter Frage umwandeln (mit if)', checked: false },
        { text: 'Normale Wortstellung in indirekter Frage zeigen', checked: false },
        { text: 'Eigene indirekte Frage schreiben', checked: false }
      ]
    },
    en: {
      title: 'Indirect Questions',
      description: 'Convert direct questions to indirect questions.',
      checklist: [
        { text: 'Convert direct to indirect question (with question word)', checked: false },
        { text: 'Convert direct yes/no to indirect question (with if)', checked: false },
        { text: 'Show normal word order in indirect question', checked: false },
        { text: 'Write own indirect question', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

