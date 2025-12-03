import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I want ___ (go) to the cinema tonight.", de: "Ich möchte ___ (gehen) heute Abend ins Kino." },
    words: ["to go", "going", "go", "goes"],
    correct: "to go",
    explanation: { en: "Want + to + verb (infinitive)", de: "Want + to + Verb (Infinitiv)" }
  },
  {
    prompt: { en: "She decided ___ (study) abroad.", de: "Sie hat entschieden, ___ (studieren) im Ausland." },
    words: ["to study", "studying", "study", "studies"],
    correct: "to study",
    explanation: { en: "Decide + to + verb", de: "Decide + to + Verb" }
  },
  {
    prompt: { en: "We hope ___ (finish) the project soon.", de: "Wir hoffen, ___ (beenden) das Projekt bald." },
    words: ["to finish", "finishing", "finish", "finishes"],
    correct: "to finish",
    explanation: { en: "Hope + to + verb", de: "Hope + to + Verb" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I decided study English.",
    mistakeIndex: 2,
    correction: "to study",
    explanation: { en: "Decide + to + verb (not just 'study')", de: "Decide + to + Verb (nicht nur 'study')" }
  },
  {
    sentence: "He wants going home.",
    mistakeIndex: 2,
    correction: "to go",
    explanation: { en: "Want + to + verb (not 'going')", de: "Want + to + Verb (nicht 'going')" }
  },
  {
    sentence: "She forgot to lock the door.",
    mistakeIndex: 0,
    correction: "forgot",
    explanation: { en: "Forget + to + verb for future actions", de: "Forget + to + Verb für zukünftige Handlungen" }
  }
];

const grammarRacerData = [
  {
    prompt: "I want ___ to the cinema.",
    options: ["to go", "going", "go"],
    correct: "to go",
    explanation: "Want + to + verb"
  },
  {
    prompt: "She decided ___ abroad.",
    options: ["to study", "studying", "study"],
    correct: "to study",
    explanation: "Decide + to + verb"
  },
  {
    prompt: "We hope ___ soon.",
    options: ["to finish", "finishing", "finish"],
    correct: "to finish",
    explanation: "Hope + to + verb"
  }
];

export const verbPlusTo = {
  id: 'a2_g54',
  title: {
    en: 'Verb + to … (decide to … / forget to … etc.)',
    de: 'Verb + to … (entscheiden zu … / vergessen zu … etc.)'
  },
  description: {
    en: "Using the infinitive with 'to' after certain verbs like want, decide, hope, forget. 'I want to go', 'She decided to study'.",
    de: "Den Infinitiv mit 'to' nach bestimmten Verben wie want, decide, hope, forget verwenden. 'Ich möchte gehen', 'Sie hat entschieden zu studieren'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Verb + to + Verb: The Infinitive After Verbs 🎯

Many English verbs are followed by the **infinitive with 'to'** (to + base verb). This structure expresses intentions, plans, desires, or future actions. It's the counterpart to verb + -ing (gerund) from the previous lesson.

### Why Do We Use Verb + to + Verb?

The infinitive (to + verb) shows **purpose, intention, or future action**. It answers "What do I want/plan to do?" Unlike -ing (which treats the action as a noun), "to + verb" keeps it as a verb form for goals and decisions.

Think about these situations:
- "I **want to learn** English." (My desire for a future action)
- "She **decided to stay** home." (A plan or choice)
- "We **hope to visit** Paris." (A wish for the future)

**Key idea:** Verb + to + verb = Expressing plans, desires, or intentions about future actions.

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p>The 'to + verb' form emphasizes the <strong>purpose or goal</strong> of the action.</p>
  <p>It's like saying "I plan/intend to do this" – always future-oriented!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Common Verbs + to + Verb: Want, Decide, Hope 🌟

These verbs express **desires, decisions, and wishes**.

**Structure:** Subject + verb + to + base verb

**Want** (desire something):
- "I **want to eat** pizza tonight." (I desire this action)
- "They **want to travel** the world." (Their wish)

**Decide** (make a choice):
- "She **decided to change** her job." (She chose this)
- "We **decided to meet** at 7 PM." (Our decision)

**Hope** (wish for something positive):
- "I **hope to pass** the exam." (My wish)
- "He **hopes to find** a good job." (His aspiration)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Important:</h3>
  <p>These verbs focus on <strong>future intentions</strong> – what you plan or wish to do.</p>
  <p>Want = strong desire; Decide = after thinking; Hope = positive expectation</p>
  <p>Always use 'to + base verb' (not -ing or just the verb)!</p>
</div>

### 2. More Verbs: Forget, Try, Plan, Learn, Promise 🚀

**Forget** (fail to remember to do something – future actions):
- "I **forgot to call** you." (I didn't remember to do it)
- "She **forgot to lock** the door." (Future-oriented forgetfulness)

**Try** (attempt to do something):
- "Let's **try to fix** the problem." (Make an effort)
- "He **tried to explain** it." (He attempted)

**Plan** (intend to do):
- "We **plan to visit** family next week." (Our intention)
- "They **plan to buy** a house." (Their plan)

**Learn** (acquire a skill):
- "I'm **learning to drive**." (Gaining ability)
- "She **learned to cook** Italian food." (Acquired skill)

**Promise** (commit to doing):
- "I **promise to help** you." (My commitment)
- "He **promised to arrive** on time." (His word)

**Note:** "Forget" with "to + verb" means not doing something you should have (future). With -ing, it means remembering a past action (advanced topic for later).

### 3. Negative Forms and Questions ❓

**Negative:** Add "not" after "to"
- "I **don't want to go** out." (No desire)
- "She **decided not to tell** anyone." (Chose against it)

**Questions:**
- "Do you **want to eat** now?" (Yes/No)
- "What do you **plan to do** tomorrow?" (Wh-question)

<GamePlaceholder id="fixTheMistake" />

### 4. Verb + to + Verb vs. Verb + -ing: Key Differences 🔄

Remember the previous lesson? Some verbs take "to + verb", others take -ing. Here's a comparison:

| Verb       | Takes to + verb? | Example with to + verb     | Example with -ing (if applicable) |
|------------|------------------|----------------------------|-----------------------------------|
| Want      | Yes             | Want to go                | ❌ Not "want going"              |
| Decide    | Yes             | Decide to study           | ❌ Not "decide studying"         |
| Hope      | Yes             | Hope to finish            | ❌ Not "hope finishing"          |
| Enjoy     | No              | ❌ Not "enjoy to read"     | Enjoy reading                    |
| Avoid     | No              | ❌ Not "avoid to eat"      | Avoid eating                     |
| Forget    | Yes (future)    | Forget to call            | Forget calling (past – advanced) |

**Why the difference?**
- **To + verb**: For plans, intentions, desires (future-focused)
- **-ing**: For the activity itself (as a noun, often present feelings)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Verb + to + verb</strong> = Infinitive for intentions/plans (want, decide, hope, forget, try, plan, learn, promise)</li>
    <li>Use it for <strong>future goals</strong> or desires</li>
    <li>Negative: 'not to + verb'; Questions: Do you want to...?</li>
    <li>Compare to -ing: To = purpose; -ing = activity noun</li>
  </ul>
</div>

### 5. Common Mistakes ❌

**Mistake 1:** Forgetting "to"
- ❌ "I want go home." (Wrong!)
- ✅ "I **want to go** home." (Correct!)

**Mistake 2:** Using -ing instead of "to"
- ❌ "She decided studying." (Wrong!)
- ✅ "She decided **to study**." (Correct!)

**Mistake 3:** Wrong verb choice
- ❌ "I hope going well." (Wrong – hope takes "to")
- ✅ "I **hope to do** well." (Correct!)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Verb + to + Verb**
Choose the correct infinitive! Remember: want, decide, hope all take "to + verb"!

<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Verb + to + Verb Practice</h3>
  <p className="mb-4">Write sentences using verb + to + verb:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence with "want" (a desire you have)</li>
    <li>One sentence with "decide" or "plan" (a decision or plan)</li>
    <li>One sentence with "hope" (a wish for the future)</li>
    <li>One question with "try" (asking about an attempt)</li>
  </ol>
</div>
    `,
    de: `
## Verb + to + Verb: Der Infinitiv nach Verben 🎯

Viele englische Verben werden vom **Infinitiv mit 'to'** (to + Grundform) gefolgt. Diese Struktur drückt Absichten, Pläne, Wünsche oder zukünftige Handlungen aus. Sie ist das Gegenstück zu Verb + -ing (Gerundium) aus der vorherigen Lektion.

### Warum verwenden wir Verb + to + Verb?

Der Infinitiv (to + Verb) zeigt **Zweck, Absicht oder zukünftige Handlung**. Er beantwortet "Was möchte/plane ich zu tun?" Im Gegensatz zu -ing (das die Handlung als Nomen behandelt), behält "to + Verb" sie als Verbform für Ziele und Entscheidungen.

Denk an diese Situationen:
- "I **want to learn** English." (Mein Wunsch für eine zukünftige Handlung)
- "She **decided to stay** home." (Ein Plan oder eine Wahl)
- "We **hope to visit** Paris." (Ein Wunsch für die Zukunft)

**Schlüsselidee:** Verb + to + Verb = Ausdrücken von Plänen, Wünschen oder Absichten für zukünftige Handlungen.

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p>Die 'to + Verb'-Form betont den <strong>Zweck oder das Ziel</strong> der Handlung.</p>
  <p>Es ist wie "Ich plane/beabsichtige das zu tun" – immer zukunftsorientiert!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Häufige Verben + to + Verb: Want, Decide, Hope 🌟

Diese Verben drücken **Wünsche, Entscheidungen und Hoffnungen** aus.

**Struktur:** Subjekt + Verb + to + Grundform

**Want** (etwas wünschen):
- "I **want to eat** pizza tonight." (Ich wünsche mir diese Handlung)
- "They **want to travel** the world." (Ihr Wunsch)

**Decide** (eine Wahl treffen):
- "She **decided to change** her job." (Sie hat das gewählt)
- "We **decided to meet** at 7 PM." (Unsere Entscheidung)

**Hope** (auf etwas Positives hoffen):
- "I **hope to pass** the exam." (Meine Hoffnung)
- "He **hopes to find** a good job." (Seine Aspiration)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Wichtig:</h3>
  <p>Diese Verben fokussieren auf <strong>zukünftige Absichten</strong> – was du planst oder wünschst zu tun.</p>
  <p>Want = starker Wunsch; Decide = nach Nachdenken; Hope = positive Erwartung</p>
  <p>Verwende immer 'to + Grundform' (nicht -ing oder nur das Verb)!</p>
</div>

### 2. Weitere Verben: Forget, Try, Plan, Learn, Promise 🚀

**Forget** (vergessen, etwas zu tun – zukünftige Handlungen):
- "I **forgot to call** you." (Ich habe nicht daran gedacht, es zu tun)
- "She **forgot to lock** the door." (Vergessenheit für die Zukunft)

**Try** (versuchen, etwas zu tun):
- "Let's **try to fix** the problem." (Einen Versuch machen)
- "He **tried to explain** it." (Er hat es versucht)

**Plan** (vorhaben zu tun):
- "We **plan to visit** family next week." (Unsere Absicht)
- "They **plan to buy** a house." (Ihr Plan)

**Learn** (eine Fähigkeit erlernen):
- "I'm **learning to drive**." (Fähigkeit erwerben)
- "She **learned to cook** Italian food." (Erlernte Fähigkeit)

**Promise** (versprechen zu tun):
- "I **promise to help** you." (Mein Versprechen)
- "He **promised to arrive** on time." (Sein Wort)

**Hinweis:** "Forget" mit "to + Verb" bedeutet, etwas nicht getan zu haben, das man sollte (Zukunft). Mit -ing bedeutet es, sich an eine vergangene Handlung zu erinnern (fortgeschrittenes Thema für später).

### 3. Verneinungsformen und Fragen ❓

**Verneinung:** "Not" nach "to" setzen
- "I **don't want to go** out." (Kein Wunsch)
- "She **decided not to tell** anyone." (Entschieden dagegen)

**Fragen:**
- "Do you **want to eat** now?" (Ja/Nein)
- "What do you **plan to do** tomorrow?" (W-Frage)

<GamePlaceholder id="fixTheMistake" />

### 4. Verb + to + Verb vs. Verb + -ing: Wichtige Unterschiede 🔄

Erinnerst du dich an die vorige Lektion? Manche Verben nehmen "to + Verb", andere -ing. Hier ein Vergleich:

| Verb       | Nimmt to + Verb? | Beispiel mit to + Verb     | Beispiel mit -ing (falls zutreffend) |
|------------|------------------|----------------------------|--------------------------------------|
| Want      | Ja              | Want to go                | ❌ Nicht "want going"               |
| Decide    | Ja              | Decide to study           | ❌ Nicht "decide studying"          |
| Hope      | Ja              | Hope to finish            | ❌ Nicht "hope finishing"           |
| Enjoy     | Nein            | ❌ Nicht "enjoy to read"   | Enjoy reading                       |
| Avoid     | Nein            | ❌ Nicht "avoid to eat"    | Avoid eating                        |
| Forget    | Ja (Zukunft)    | Forget to call            | Forget calling (Vergangenheit – fortgeschritten) |

**Warum der Unterschied?**
- **To + Verb**: Für Pläne, Absichten, Wünsche (zukunftsorientiert)
- **-ing**: Für die Aktivität selbst (als Nomen, oft gegenwärtige Gefühle)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Verb + to + Verb</strong> = Infinitiv für Absichten/Pläne (want, decide, hope, forget, try, plan, learn, promise)</li>
    <li>Verwende es für <strong>zukünftige Ziele</strong> oder Wünsche</li>
    <li>Verneinung: 'not to + Verb'; Fragen: Do you want to...?</li>
    <li>Vergleiche zu -ing: To = Zweck; -ing = Aktivitätsnomen</li>
  </ul>
</div>

### 5. Häufige Fehler ❌

**Fehler 1:** "To" vergessen
- ❌ "I want go home." (Falsch!)
- ✅ "I **want to go** home." (Richtig!)

**Fehler 2:** -ing statt "to" verwenden
- ❌ "She decided studying." (Falsch!)
- ✅ "She decided **to study**." (Richtig!)

**Fehler 3:** Falsche Verbwahl
- ❌ "I hope going well." (Falsch – hope nimmt "to")
- ✅ "I **hope to do** well." (Richtig!)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Verb + to + Verb**
Wähle den richtigen Infinitiv! Denk dran: want, decide, hope nehmen alle "to + Verb"!

<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Verb + to + Verb Übung</h3>
  <p className="mb-4">Schreibe Sätze mit Verb + to + Verb:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz mit "want" (ein Wunsch, den du hast)</li>
    <li>Ein Satz mit "decide" oder "plan" (eine Entscheidung oder ein Plan)</li>
    <li>Ein Satz mit "hope" (ein Wunsch für die Zukunft)</li>
    <li>Eine Frage mit "try" (nach einem Versuch fragen)</li>
  </ol>
</div>
    `
  },
  task: {
    de: {
      title: 'Verb + to + Verb - Infinitiv',
      description: 'Schreibe Sätze mit Verb + to + Verb.',
      checklist: [
        { text: 'Satz mit "want" (ein Wunsch)', checked: false },
        { text: 'Satz mit "decide" oder "plan"', checked: false },
        { text: 'Satz mit "hope" (Zukunfts-Wunsch)', checked: false },
        { text: 'Frage mit "try"', checked: false }
      ]
    },
    en: {
      title: 'Verb + to + Verb - Infinitive',
      description: 'Write sentences with verb + to + verb.',
      checklist: [
        { text: 'Sentence with "want" (a desire)', checked: false },
        { text: 'Sentence with "decide" or "plan"', checked: false },
        { text: 'Sentence with "hope" (future wish)', checked: false },
        { text: 'Question with "try"', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

