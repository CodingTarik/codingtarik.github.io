import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "After the reorganization, there were a lot of ___ and ends to sort out.", de: "Nach der Umstrukturierung gab es viele Kleinigkeiten zu klären." },
    words: ["odds", "bits", "this", "here"],
    correct: "odds",
    explanation: { en: "'Odds and ends' is a binomial expression meaning 'miscellaneous small items or tasks'. The order is fixed — you cannot say 'ends and odds'.", de: "'Odds and ends' ist ein Binomialausdruck, der 'verschiedene kleine Dinge oder Aufgaben' bedeutet. Die Reihenfolge ist fest — man kann nicht 'ends and odds' sagen." }
  },
  {
    prompt: { en: "The project has had its ___ and downs, but we've made real progress.", de: "Das Projekt hatte seine Höhen und Tiefen, aber wir haben echte Fortschritte gemacht." },
    words: ["ups", "highs", "tops", "peaks"],
    correct: "ups",
    explanation: { en: "'Ups and downs' is a fixed binomial collocation meaning 'good and bad experiences'. Native speakers never say 'highs and lows' in this particular idiom.", de: "'Ups and downs' ist eine feste Binomialkollokation, die 'gute und schlechte Erfahrungen' bedeutet. Muttersprachler sagen in dieser Redewendung nie 'highs and lows'." }
  },
  {
    prompt: { en: "The contract is legally ___; there's no way to get out of it.", de: "Der Vertrag ist rechtlich bindend; es gibt keinen Weg, sich daraus zu lösen." },
    words: ["binding", "tying", "holding", "fixing"],
    correct: "binding",
    explanation: { en: "'Legally binding' is a strong collocation in legal English. While 'tying' and 'holding' relate to similar concepts, only 'binding' collocates naturally with 'legally'.", de: "'Legally binding' ist eine starke Kollokation im juristischen Englisch. Obwohl 'tying' und 'holding' ähnliche Konzepte betreffen, kolloziiert nur 'binding' natürlich mit 'legally'." }
  },
  {
    prompt: { en: "She gave a/an ___ and butter explanation — nothing fancy, just the basics.", de: "Sie gab eine einfache Erklärung — nichts Besonderes, nur die Grundlagen." },
    words: ["bread", "plain", "simple", "basic"],
    correct: "bread",
    explanation: { en: "'Bread and butter' used attributively means 'basic, fundamental, everyday'. It is a semi-fixed phrase that functions as a compound adjective.", de: "'Bread and butter' als Attribut verwendet bedeutet 'grundlegend, alltäglich'. Es ist eine halbfeste Phrase, die als zusammengesetztes Adjektiv fungiert." }
  },
  {
    prompt: { en: "The whole argument was based on smoke and ___ — no real substance at all.", de: "Das ganze Argument beruhte auf Schein — keinerlei reale Substanz." },
    words: ["mirrors", "glass", "fog", "shadow"],
    correct: "mirrors",
    explanation: { en: "'Smoke and mirrors' means 'deception, illusion' — originally from magic shows. It is a fixed binomial expression that cannot be altered.", de: "'Smoke and mirrors' bedeutet 'Täuschung, Illusion' — ursprünglich aus Zaubershows. Es ist ein fester Binomialausdruck, der nicht verändert werden kann." }
  },
  {
    prompt: { en: "By and ___, the new policy has been well received by staff.", de: "Im Großen und Ganzen wurde die neue Richtlinie vom Personal gut aufgenommen." },
    words: ["large", "wide", "far", "whole"],
    correct: "large",
    explanation: { en: "'By and large' means 'generally, on the whole'. It is a completely fixed expression — no element can be substituted.", de: "'By and large' bedeutet 'im Allgemeinen, im Großen und Ganzen'. Es ist ein völlig fester Ausdruck — kein Element kann ersetzt werden." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "The politician's speech was full of sound and fury but it signified everything.",
    mistakeIndex: 11,
    correction: "nothing",
    explanation: { en: "The expression 'full of sound and fury, signifying nothing' comes from Shakespeare's Macbeth. The fixed phrase requires 'nothing' — it means the speech was dramatic but meaningless.", de: "Der Ausdruck 'full of sound and fury, signifying nothing' stammt aus Shakespeares Macbeth. Die feste Phrase erfordert 'nothing' — sie bedeutet, die Rede war dramatisch aber bedeutungslos." }
  },
  {
    sentence: "She's been working around the watch to finish the project before the deadline.",
    mistakeIndex: 4,
    correction: "around the clock",
    explanation: { en: "The correct idiom is 'around the clock' (24 hours continuously), not 'around the watch'. This is a fixed expression that cannot be modified.", de: "Die korrekte Redewendung ist 'around the clock' (24 Stunden durchgehend), nicht 'around the watch'. Dies ist ein fester Ausdruck." }
  },
  {
    sentence: "He accepted the award with cap and bells, thanking everyone profusely.",
    mistakeIndex: 5,
    correction: "bells and whistles",
    explanation: { en: "'Cap and bells' (jester's outfit) does not fit here. The likely intended expression was either 'with great fanfare' or the context suggests a different idiom entirely. 'Bells and whistles' means extra features/showiness.", de: "'Cap and bells' (Narrenkleidung) passt hier nicht. Der Ausdruck 'bells and whistles' bedeutet zusätzliche Extras/Aufmachung." }
  },
  {
    sentence: "We need to discuss the nuts and screws of the implementation plan.",
    mistakeIndex: 6,
    correction: "bolts",
    explanation: { en: "The correct binomial is 'nuts and bolts' (the basic practical details). 'Nuts and screws' is not an established expression in English.", de: "Das korrekte Binomial ist 'nuts and bolts' (die grundlegenden praktischen Details). 'Nuts and screws' ist kein etablierter Ausdruck im Englischen." }
  },
  {
    sentence: "The investigation revealed that the company had been cutting edges on safety procedures.",
    mistakeIndex: 7,
    correction: "corners",
    explanation: { en: "The correct idiom is 'cutting corners' (doing something cheaply or carelessly), not 'cutting edges'. 'Cutting edge' means innovative — a completely different meaning.", de: "Die korrekte Redewendung ist 'cutting corners' (etwas billig oder nachlässig tun), nicht 'cutting edges'. 'Cutting edge' bedeutet innovativ — eine völlig andere Bedeutung." }
  }
];

const grammarRacerData = [
  {
    prompt: "Fixed binomial: 'law and ___' (meaning public order)",
    options: ["order", "peace", "rules"],
    correct: "order",
    explanation: "'Law and order' is a fixed binomial expression referring to the maintenance of public peace and rule of law."
  },
  {
    prompt: "The meeting covered the issue of ___ and take in negotiations.",
    options: ["give", "push", "back"],
    correct: "give",
    explanation: "'Give and take' is a fixed binomial meaning 'mutual compromise'. The order cannot be reversed."
  },
  {
    prompt: "She was tired of the same old ___ and dance every time she asked for a raise.",
    options: ["song", "step", "show"],
    correct: "song",
    explanation: "'Song and dance' means 'a fuss or a long explanation/excuse'. It is a fixed idiomatic expression."
  },
  {
    prompt: "Complete the collocation: 'make a ___ decision' (= lasting, permanent)",
    options: ["binding", "fixed", "strong"],
    correct: "binding",
    explanation: "'Binding decision' is a strong legal/formal collocation meaning a decision that must be followed."
  },
  {
    prompt: "The project was touch and ___ for a while, but it worked out in the end.",
    options: ["go", "run", "stop"],
    correct: "go",
    explanation: "'Touch and go' means 'uncertain, risky — could go either way'. It is a completely fixed expression."
  }
];

export const idiomaticPatterns = {
  id: 'c2_g5',
  title: {
    en: 'Advanced Idiomatic Patterns',
    de: 'Fortgeschrittene idiomatische Muster'
  },
  description: {
    en: "Master binomials, collocations, fixed expressions, and semi-fixed phrases at the highest level of English proficiency.",
    de: "Meistern Sie Binomiale, Kollokationen, feste Ausdrücke und halbfeste Phrasen auf höchstem Sprachniveau."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Advanced Idiomatic Patterns 🧩

At C2 level, your command of English extends beyond grammar and vocabulary to the **formulaic sequences** that make speech sound truly native. These include binomials, collocations, fixed expressions, and semi-fixed phrases — patterns that are stored and retrieved as whole units rather than constructed word by word.

### 1. Binomials (Irreversible Pairs) 🔗

Binomials are pairs of words joined by a conjunction (usually "and" or "or") in a **fixed order**. Reversing them sounds unnatural:

| Binomial | Meaning | Why Fixed? |
|----------|---------|-----------|
| odds **and** ends | miscellaneous items | Convention |
| bread **and** butter | basic essentials | Shorter word first |
| give **and** take | mutual compromise | Convention |
| law **and** order | public stability | Convention |
| ups **and** downs | good and bad times | Phonetic pattern |
| pros **and** cons | advantages and disadvantages | Latin origin |
| trial **and** error | learning by mistakes | Logical sequence |
| now **and** then | occasionally | Time sequence |
| safe **and** sound | unharmed | Alliteration |
| sick **and** tired | fed up | Intensification |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Why Does Order Matter?</h3>
  <p>Several principles determine binomial order:</p>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Shorter word first:</strong> bread and butter, black and white</li>
    <li><strong>More common word first:</strong> men and women (historically), day and night</li>
    <li><strong>Phonetic preference:</strong> vowel sounds often come first — odds and ends</li>
    <li><strong>Cultural convention:</strong> ladies and gentlemen, king and queen</li>
  </ul>
</div>

### 2. Trinomials (Three-Part Expressions) 🔗🔗

Some formulaic expressions come in groups of three:

- "**Lock, stock, and barrel**" = everything, completely
- "**Tom, Dick, and Harry**" = any ordinary person
- "**Blood, sweat, and tears**" = extreme effort
- "**Hook, line, and sinker**" = completely (deceived)
- "**Morning, noon, and night**" = all the time

### 3. Strong Collocations 💪

Collocations are words that naturally co-occur. At C2, you must know not just what sounds right, but **why certain combinations are preferred**:

| Verb + Noun | Natural | Unnatural |
|-------------|---------|-----------|
| **make** a decision | ✅ | ❌ do a decision |
| **take** action | ✅ | ❌ make action |
| **pay** attention | ✅ | ❌ give attention |
| **raise** a concern | ✅ | ❌ lift a concern |
| **lodge** a complaint | ✅ | ❌ put a complaint |
| **draw** a conclusion | ✅ | ❌ pull a conclusion |
| **break** the news | ✅ | ❌ crack the news |
| **meet** a deadline | ✅ | ❌ reach a deadline |

**Adjective + Noun Collocations:**

| Collocation | Meaning |
|-------------|---------|
| **heavy** traffic | lots of vehicles |
| **strong** coffee | concentrated coffee |
| **high** priority | very important |
| **bitter** disappointment | intense disappointment |
| **blatant** disregard | obvious contempt |
| **sweeping** changes | comprehensive reforms |

<GamePlaceholder id="sentenceBuilder" />

### 4. Fixed Expressions (Completely Frozen) ❄️

These cannot be modified at all — changing any word breaks the expression:

- "**By and large**" = generally (not "by and wide")
- "**Once in a blue moon**" = very rarely (not "once in a red moon")
- "**The powers that be**" = the authorities (not "the powers that are")
- "**Suffice it to say**" = it is enough to mention (not "sufficient it to say")
- "**Be that as it may**" = nevertheless (not "be this as it might")
- "**Come what may**" = regardless of what happens
- "**As luck would have it**" = by chance

### 5. Semi-Fixed Phrases (With a Slot) 🔧

These have a fixed structure with one or more **variable slots**:

- "It's not **X** — it's the principle of the thing." (X = the money / the cost / the time)
- "The **X** of the matter is…" (X = fact / heart / crux)
- "Not to put too fine a **point** on it, but…" (always "point")
- "**X** notwithstanding, we must proceed." (X = any noun phrase)
- "For want of a better **word/term**, I'd call it…"

### 6. Idiomatic Patterns in Academic English 🎓

Even formal writing has its own fixed patterns:

- "It is **widely acknowledged** that…"
- "There is a **growing body of evidence** to suggest…"
- "This **raises important questions** about…"
- "The findings **shed light on**…"
- "Further research is **warranted**."
- "This is **beyond the scope** of the current study."

### 7. Common Mistakes ❌

**Mistake 1:** Reversing binomials.
- ❌ "ends and odds" / "butter and bread" / "cons and pros"
- ✅ "odds and ends" / "bread and butter" / "pros and cons"

**Mistake 2:** Substituting words in fixed expressions.
- ❌ "once in a red moon" / "by and wide"
- ✅ "once in a blue moon" / "by and large"

**Mistake 3:** Wrong collocations due to L1 interference.
- ❌ "do a mistake" (common in many languages)
- ✅ "make a mistake"

**Mistake 4:** Over-extending an idiom.
- ❌ "We need to think outside the box and inside the circle."
- ✅ "We need to think outside the box." (The idiom is self-contained.)

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Binomials</strong> are fixed-order pairs: odds and ends, give and take.</li>
    <li><strong>Trinomials</strong> come in threes: lock, stock, and barrel.</li>
    <li><strong>Collocations</strong> are natural word partnerships: make a decision, heavy traffic.</li>
    <li><strong>Fixed expressions</strong> cannot be modified: by and large, once in a blue moon.</li>
    <li><strong>Semi-fixed phrases</strong> have variable slots: "the X of the matter is…"</li>
    <li>Mastering these patterns is what makes your English sound <strong>truly native</strong>.</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Idiomatic Precision**
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Idiomatic Mastery Challenge:</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>List 10 binomials and use each in a sentence that demonstrates its meaning.</li>
    <li>Correct the collocations: "do a decision," "give attention," "take a complaint."</li>
    <li>Write a formal paragraph using at least 5 academic fixed expressions from section 6.</li>
    <li>Explain the meaning and origin of: "lock, stock, and barrel" and "hook, line, and sinker."</li>
    <li>Create 5 sentences using semi-fixed phrases with different slot fillers.</li>
  </ol>
</div>
`,
    de: `
## Fortgeschrittene idiomatische Muster 🧩

Auf C2-Niveau erstreckt sich Ihre Beherrschung des Englischen über Grammatik und Wortschatz hinaus auf die **formelhaften Sequenzen**, die Sprache wirklich muttersprachlich klingen lassen. Dazu gehören Binomiale, Kollokationen, feste Ausdrücke und halbfeste Phrasen — Muster, die als ganze Einheiten gespeichert und abgerufen werden.

### 1. Binomiale (Irreversible Paare) 🔗

Binomiale sind Wortpaare, die durch eine Konjunktion (meist "and" oder "or") in **fester Reihenfolge** verbunden sind. Sie umzukehren klingt unnatürlich:

| Binomial | Bedeutung | Warum fest? |
|----------|-----------|------------|
| odds **and** ends | verschiedene Kleinigkeiten | Konvention |
| bread **and** butter | grundlegende Dinge | Kürzeres Wort zuerst |
| give **and** take | gegenseitiger Kompromiss | Konvention |
| law **and** order | öffentliche Ordnung | Konvention |
| ups **and** downs | gute und schlechte Zeiten | Phonetisches Muster |
| pros **and** cons | Vor- und Nachteile | Lateinischer Ursprung |
| trial **and** error | Lernen durch Fehler | Logische Abfolge |
| safe **and** sound | unversehrt | Alliteration |
| sick **and** tired | es satt haben | Verstärkung |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Warum ist die Reihenfolge wichtig?</h3>
  <p>Mehrere Prinzipien bestimmen die Binomialreihenfolge:</p>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Kürzeres Wort zuerst:</strong> bread and butter, black and white</li>
    <li><strong>Häufigeres Wort zuerst:</strong> men and women (historisch), day and night</li>
    <li><strong>Phonetische Präferenz:</strong> Vokale kommen oft zuerst — odds and ends</li>
    <li><strong>Kulturelle Konvention:</strong> ladies and gentlemen, king and queen</li>
  </ul>
</div>

### 2. Trinomiale (Dreiteilige Ausdrücke) 🔗🔗

Einige formelhafte Ausdrücke kommen in Dreiergruppen:

- "**Lock, stock, and barrel**" = alles, vollständig
- "**Tom, Dick, and Harry**" = jeder Beliebige
- "**Blood, sweat, and tears**" = extreme Anstrengung
- "**Hook, line, and sinker**" = vollständig (getäuscht)
- "**Morning, noon, and night**" = die ganze Zeit

### 3. Starke Kollokationen 💪

Kollokationen sind Wörter, die natürlich gemeinsam auftreten. Auf C2 müssen Sie nicht nur wissen, was richtig klingt, sondern **warum bestimmte Kombinationen bevorzugt werden**:

| Verb + Substantiv | Natürlich | Unnatürlich |
|-------------------|-----------|-------------|
| **make** a decision | ✅ | ❌ do a decision |
| **take** action | ✅ | ❌ make action |
| **pay** attention | ✅ | ❌ give attention |
| **raise** a concern | ✅ | ❌ lift a concern |
| **lodge** a complaint | ✅ | ❌ put a complaint |
| **draw** a conclusion | ✅ | ❌ pull a conclusion |
| **break** the news | ✅ | ❌ crack the news |
| **meet** a deadline | ✅ | ❌ reach a deadline |

**Adjektiv + Substantiv Kollokationen:**

| Kollokation | Bedeutung |
|-------------|-----------|
| **heavy** traffic | viel Verkehr |
| **strong** coffee | starker Kaffee |
| **high** priority | hohe Priorität |
| **bitter** disappointment | bittere Enttäuschung |
| **blatant** disregard | offensichtliche Missachtung |
| **sweeping** changes | umfassende Veränderungen |

<GamePlaceholder id="sentenceBuilder" />

### 4. Feste Ausdrücke (Völlig eingefroren) ❄️

Diese können überhaupt nicht modifiziert werden — jedes geänderte Wort zerstört den Ausdruck:

- "**By and large**" = im Allgemeinen (nicht "by and wide")
- "**Once in a blue moon**" = sehr selten (nicht "once in a red moon")
- "**The powers that be**" = die Obrigkeit (nicht "the powers that are")
- "**Suffice it to say**" = es genügt zu sagen (nicht "sufficient it to say")
- "**Be that as it may**" = nichtsdestotrotz
- "**Come what may**" = komme, was da wolle
- "**As luck would have it**" = wie es der Zufall wollte

### 5. Halbfeste Phrasen (Mit einer Leerstelle) 🔧

Diese haben eine feste Struktur mit einer oder mehreren **variablen Leerstellen**:

- "It's not **X** — it's the principle of the thing." (X = the money / the cost / the time)
- "The **X** of the matter is…" (X = fact / heart / crux)
- "Not to put too fine a **point** on it, but…" (immer "point")
- "**X** notwithstanding, we must proceed." (X = beliebige Nominalphrase)
- "For want of a better **word/term**, I'd call it…"

### 6. Idiomatische Muster im akademischen Englisch 🎓

Auch formelles Schreiben hat seine eigenen festen Muster:

- "It is **widely acknowledged** that…"
- "There is a **growing body of evidence** to suggest…"
- "This **raises important questions** about…"
- "The findings **shed light on**…"
- "Further research is **warranted**."
- "This is **beyond the scope** of the current study."

### 7. Häufige Fehler ❌

**Fehler 1:** Binomiale umkehren.
- ❌ "ends and odds" / "butter and bread" / "cons and pros"
- ✅ "odds and ends" / "bread and butter" / "pros and cons"

**Fehler 2:** Wörter in festen Ausdrücken ersetzen.
- ❌ "once in a red moon" / "by and wide"
- ✅ "once in a blue moon" / "by and large"

**Fehler 3:** Falsche Kollokationen durch L1-Interferenz.
- ❌ "do a mistake" (häufig in vielen Sprachen)
- ✅ "make a mistake"

**Fehler 4:** Eine Redewendung überdehnen.
- ❌ "We need to think outside the box and inside the circle."
- ✅ "We need to think outside the box." (Die Redewendung ist in sich abgeschlossen.)

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Binomiale</strong> sind Paare in fester Reihenfolge: odds and ends, give and take.</li>
    <li><strong>Trinomiale</strong> kommen in Dreiergruppen: lock, stock, and barrel.</li>
    <li><strong>Kollokationen</strong> sind natürliche Wortpartnerschaften: make a decision, heavy traffic.</li>
    <li><strong>Feste Ausdrücke</strong> können nicht modifiziert werden: by and large, once in a blue moon.</li>
    <li><strong>Halbfeste Phrasen</strong> haben variable Leerstellen: "the X of the matter is…"</li>
    <li>Die Beherrschung dieser Muster macht Ihr Englisch <strong>wirklich muttersprachlich</strong>.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Idiomatische Präzision**
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Idiomatische Meisterschafts-Challenge:</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>Listen Sie 10 Binomiale auf und verwenden Sie jedes in einem Satz, der seine Bedeutung demonstriert.</li>
    <li>Korrigieren Sie die Kollokationen: "do a decision," "give attention," "take a complaint."</li>
    <li>Schreiben Sie einen formellen Absatz mit mindestens 5 akademischen festen Ausdrücken aus Abschnitt 6.</li>
    <li>Erklären Sie Bedeutung und Ursprung von: "lock, stock, and barrel" und "hook, line, and sinker."</li>
    <li>Erstellen Sie 5 Sätze mit halbfesten Phrasen und verschiedenen Leerstellenfüllungen.</li>
  </ol>
</div>
`
  }
};
