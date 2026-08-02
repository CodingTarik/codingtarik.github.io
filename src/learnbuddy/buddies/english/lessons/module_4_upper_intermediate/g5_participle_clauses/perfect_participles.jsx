import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "___ finished the report, she submitted it to her boss.", de: "Nachdem sie den Bericht fertiggestellt hatte, reichte sie ihn bei ihrem Chef ein." },
    words: ["Having", "Have", "Has", "Had"],
    correct: "Having",
    explanation: { en: "Perfect participle: 'Having finished' = 'After she had finished'.", de: "Perfektes Partizip: 'Having finished' = 'Nachdem sie fertiggestellt hatte'." }
  },
  {
    prompt: { en: "___ been warned about the danger, they proceeded with caution.", de: "Nachdem sie vor der Gefahr gewarnt worden waren, gingen sie vorsichtig vor." },
    words: ["Having", "Have", "Being", "Were"],
    correct: "Having",
    explanation: { en: "'Having been warned' = 'After they had been warned' (passive perfect participle).", de: "'Having been warned' = 'Nachdem sie gewarnt worden waren' (passives perfektes Partizip)." }
  },
  {
    prompt: { en: "___ lived in Japan for five years, he spoke fluent Japanese.", de: "Da er fünf Jahre in Japan gelebt hatte, sprach er fließend Japanisch." },
    words: ["Having", "Have", "Has", "Being"],
    correct: "Having",
    explanation: { en: "'Having lived' shows the first action was completed before the second.", de: "'Having lived' zeigt, dass die erste Handlung vor der zweiten abgeschlossen war." }
  },
  {
    prompt: { en: "Having ___ all the evidence, the jury reached a verdict.", de: "Nachdem sie alle Beweise geprüft hatte, fällte die Jury ein Urteil." },
    words: ["reviewed", "reviewing", "review", "been review"],
    correct: "reviewed",
    explanation: { en: "Having + past participle: 'Having reviewed' = 'After they had reviewed'.", de: "Having + Partizip Perfekt: 'Having reviewed' = 'Nachdem sie überprüft hatten'." }
  },
  {
    prompt: { en: "Having been ___ of the changes, we adjusted our plans.", de: "Nachdem wir über die Änderungen informiert worden waren, passten wir unsere Pläne an." },
    words: ["informed", "informing", "inform", "information"],
    correct: "informed",
    explanation: { en: "'Having been informed' = passive perfect participle (we WERE informed first, then we adjusted).", de: "'Having been informed' = passives perfektes Partizip (wir WURDEN zuerst informiert, dann passten wir an)." }
  },
  {
    prompt: { en: "Not ___ studied enough, he failed the exam.", de: "Da er nicht genug gelernt hatte, fiel er durch die Prüfung." },
    words: ["having", "have", "has", "had"],
    correct: "having",
    explanation: { en: "Negative perfect participle: 'Not having studied' = 'Because he had not studied'.", de: "Negatives perfektes Partizip: 'Not having studied' = 'Weil er nicht gelernt hatte'." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "Have finished the project, they celebrated.",
    mistakeIndex: 0,
    correction: "Having",
    explanation: { en: "Perfect participle needs 'Having', not 'Have': 'Having finished the project, they celebrated.'", de: "Perfektes Partizip braucht 'Having', nicht 'Have': 'Having finished the project, they celebrated.'" }
  },
  {
    sentence: "Having been tell about the problem, she tried to fix it.",
    mistakeIndex: 2,
    correction: "told",
    explanation: { en: "'Having been' + PAST PARTICIPLE: 'Having been told', not 'tell'.", de: "'Having been' + PARTIZIP PERFEKT: 'Having been told', nicht 'tell'." }
  },
  {
    sentence: "Having ate lunch, we went back to work.",
    mistakeIndex: 1,
    correction: "eaten",
    explanation: { en: "Use the past participle 'eaten', not the past simple 'ate': 'Having eaten lunch...'", de: "Verwende das Partizip Perfekt 'eaten', nicht das Simple Past 'ate': 'Having eaten lunch...'" }
  },
  {
    sentence: "Having being rejected twice, she didn't apply again.",
    mistakeIndex: 1,
    correction: "been",
    explanation: { en: "'Having been rejected' (not 'having being'). Use 'been' for the passive perfect participle.", de: "'Having been rejected' (nicht 'having being'). Verwende 'been' für das passive perfekte Partizip." }
  }
];

const grammarRacerData = [
  {
    prompt: "___ completed the training, she was ready for the job.",
    options: ["Having", "Have", "Has"],
    correct: "Having",
    explanation: "Perfect participle: 'Having completed' = after she had completed."
  },
  {
    prompt: "Having ___ the door, he realized his keys were inside.",
    options: ["locked", "locking", "lock"],
    correct: "locked",
    explanation: "Having + past participle: 'Having locked'."
  },
  {
    prompt: "Having been ___ by a famous architect, the building is stunning.",
    options: ["designed", "designing", "design"],
    correct: "designed",
    explanation: "Passive perfect participle: 'Having been designed' (it was designed)."
  },
  {
    prompt: "Not having ___ the instructions, he made several errors.",
    options: ["read", "reading", "reads"],
    correct: "read",
    explanation: "Negative perfect participle: 'Not having read' = because he hadn't read."
  },
  {
    prompt: "Having ___ in the rain for an hour, they were completely soaked.",
    options: ["waited", "waiting", "wait"],
    correct: "waited",
    explanation: "Having + past participle: 'Having waited' = after they had waited."
  }
];

export const perfectParticiples = {
  id: 'b2_g11',
  title: {
    en: 'Perfect Participle Clauses & Having done',
    de: 'Perfekte Partizipialsätze & Having done'
  },
  description: {
    en: "Express completed earlier actions: 'Having finished the work, he left.'",
    de: "Vorher abgeschlossene Handlungen ausdrücken: 'Having finished the work, he left.'"
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Perfect Participle Clauses & Having done ⏪✨

The perfect participle is used to show that **one action was completed before another**. It makes your writing more concise and elegant, especially in formal and academic English.

### 1. The Structure 📐

**Having + past participle** replaces clauses like "After I had done..." or "Because I had done..."

| Full clause | Perfect participle clause |
|-------------|--------------------------|
| "**After she had finished** the work, she left." | "**Having finished** the work, she left." |
| "**Because he had lived** abroad, he spoke three languages." | "**Having lived** abroad, he spoke three languages." |
| "**Since they had seen** the film before, they chose another." | "**Having seen** the film before, they chose another." |

### 2. Active Perfect Participle 🔵

Use **Having + past participle** when the **subject actively did** the first action:

- "**Having read** the book, I returned it to the library." (= After I had read it)
- "**Having worked** all day, she was exhausted." (= Because she had worked all day)
- "**Having saved** enough money, they bought a house." (= After they had saved enough)

### 3. Passive Perfect Participle 🔴

Use **Having been + past participle** when the subject **received** the action:

- "**Having been told** about the delay, we made other plans." (= After we had been told)
- "**Having been built** in 1800, the bridge needed repairs." (= Because it had been built)
- "**Having been rejected** twice, she gave up applying." (= After she had been rejected)

### 4. Negative Form ➖

Add **not** before **having**:

- "**Not having studied** enough, he failed the exam." (= Because he hadn't studied)
- "**Not having been invited**, she didn't attend the party." (= Because she hadn't been invited)
- "**Never having travelled** alone, she was nervous." (= Because she had never travelled)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 When to use the perfect participle vs. present participle?</h3>
  <p><strong>Present participle (-ing):</strong> Actions happen at the <strong>same time</strong>.</p>
  <p>"<strong>Walking</strong> home, I saw an accident." (walking and seeing happened together)</p>
  <p><strong>Perfect participle (Having done):</strong> First action <strong>completed before</strong> second.</p>
  <p>"<strong>Having walked</strong> for hours, I was tired." (walking finished, THEN I was tired)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 5. Perfect Participle vs. Simple Participle ⚡

| Sentence | Meaning |
|----------|---------|
| "**Finishing** the report, she emailed it." | She finished and emailed almost simultaneously. |
| "**Having finished** the report, she emailed it." | She finished FIRST, then emailed it (clear sequence). |
| "**Hearing** the news, he smiled." | He smiled as he heard. |
| "**Having heard** the news, he called his friends." | He heard first, then called later. |

### 6. Common Mistakes ❌

- ❌ "**Have finished** the project, they celebrated." → ✅ "**Having finished**..." (not bare 'have')
- ❌ "Having **ate** lunch, we left." → ✅ "Having **eaten** lunch..." (past participle, not past simple!)
- ❌ "Having **being** told..." → ✅ "Having **been** told..." (use 'been', not 'being')
- ❌ "Having finished the work, **the report** was submitted." → ✅ "Having finished the work, **she** submitted the report." (subject must match!)

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Perfekte Partizipialsätze & Having done ⏪✨

Das perfekte Partizip wird verwendet, um zu zeigen, dass **eine Handlung vor einer anderen abgeschlossen wurde**. Es macht dein Schreiben prägnanter und eleganter, besonders im formellen und akademischen Englisch.

### 1. Die Struktur 📐

**Having + Partizip Perfekt** ersetzt Sätze wie "Nachdem ich ... hatte" oder "Weil ich ... hatte":

| Vollständiger Satz | Perfekter Partizipialsatz |
|---------------------|---------------------------|
| "**After she had finished** the work, she left." | "**Having finished** the work, she left." |
| "**Because he had lived** abroad, he spoke three languages." | "**Having lived** abroad, he spoke three languages." |
| "**Since they had seen** the film before, they chose another." | "**Having seen** the film before, they chose another." |

### 2. Aktives perfektes Partizip 🔵

Verwende **Having + Partizip Perfekt** wenn das **Subjekt die erste Handlung aktiv ausführte**:

- "**Having read** the book, I returned it to the library." (= Nachdem ich es gelesen hatte)
- "**Having worked** all day, she was exhausted." (= Weil sie den ganzen Tag gearbeitet hatte)
- "**Having saved** enough money, they bought a house." (= Nachdem sie genug gespart hatten)

### 3. Passives perfektes Partizip 🔴

Verwende **Having been + Partizip Perfekt** wenn das Subjekt die Handlung **empfing**:

- "**Having been told** about the delay, we made other plans." (= Nachdem uns gesagt worden war)
- "**Having been built** in 1800, the bridge needed repairs." (= Da sie 1800 gebaut worden war)
- "**Having been rejected** twice, she gave up applying." (= Nachdem sie zweimal abgelehnt worden war)

### 4. Verneinungsform ➖

Füge **not** vor **having** hinzu:

- "**Not having studied** enough, he failed the exam." (= Weil er nicht genug gelernt hatte)
- "**Not having been invited**, she didn't attend the party." (= Weil sie nicht eingeladen worden war)
- "**Never having travelled** alone, she was nervous." (= Weil sie nie allein gereist war)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Wann perfektes Partizip vs. Partizip Präsens verwenden?</h3>
  <p><strong>Partizip Präsens (-ing):</strong> Handlungen passieren <strong>gleichzeitig</strong>.</p>
  <p>"<strong>Walking</strong> home, I saw an accident." (Gehen und Sehen passierten zusammen)</p>
  <p><strong>Perfektes Partizip (Having done):</strong> Erste Handlung <strong>vorher abgeschlossen</strong>.</p>
  <p>"<strong>Having walked</strong> for hours, I was tired." (Gehen war beendet, DANN war ich müde)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 5. Perfektes Partizip vs. Einfaches Partizip ⚡

| Satz | Bedeutung |
|------|-----------|
| "**Finishing** the report, she emailed it." | Sie beendete und mailte fast gleichzeitig. |
| "**Having finished** the report, she emailed it." | Sie beendete ZUERST, dann mailte sie (klare Reihenfolge). |
| "**Hearing** the news, he smiled." | Er lächelte, als er es hörte. |
| "**Having heard** the news, he called his friends." | Er hörte zuerst, dann rief er später an. |

### 6. Häufige Fehler ❌

- ❌ "**Have finished** the project, they celebrated." → ✅ "**Having finished**..." (nicht bloßes 'have')
- ❌ "Having **ate** lunch, we left." → ✅ "Having **eaten** lunch..." (Partizip Perfekt, nicht Simple Past!)
- ❌ "Having **being** told..." → ✅ "Having **been** told..." ('been' verwenden, nicht 'being')
- ❌ "Having finished the work, **the report** was submitted." → ✅ "Having finished the work, **she** submitted the report." (Subjekt muss übereinstimmen!)

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  }
};
