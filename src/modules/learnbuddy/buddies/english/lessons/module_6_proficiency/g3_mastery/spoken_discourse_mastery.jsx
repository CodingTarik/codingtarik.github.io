import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "To politely interrupt in a meeting: 'Sorry, ___ I just jump in here for a moment?'", de: "Um höflich in einem Meeting zu unterbrechen: 'Sorry, ___ I just jump in here for a moment?'" },
    words: ["could", "will", "shall", "do"],
    correct: "could",
    explanation: { en: "'Could I just jump in' is a standard polite interruption formula in professional English. 'Could' is softer than 'can' and more natural than 'may' in spoken discourse.", de: "'Could I just jump in' ist eine standardmäßige höfliche Unterbrechungsformel im professionellen Englisch. 'Could' ist sanfter als 'can' und natürlicher als 'may' in gesprochener Sprache." }
  },
  {
    prompt: { en: "As a backchannel signal to show you're listening actively: '___-huh, I see what you mean.'", de: "Als Rückkopplungssignal, um aktives Zuhören zu zeigen: '___-huh, ich verstehe, was du meinst.'" },
    words: ["Uh", "Oh", "Ah", "Eh"],
    correct: "Uh",
    explanation: { en: "'Uh-huh' is the primary English backchannel signal indicating 'I'm listening, continue.' Other backchannels include 'mm-hmm,' 'right,' 'yeah,' and 'I see.'", de: "'Uh-huh' ist das primäre englische Rückkopplungssignal, das bedeutet 'Ich höre zu, fahre fort.' Weitere Rückkopplungssignale sind 'mm-hmm,' 'right,' 'yeah,' und 'I see.'" }
  },
  {
    prompt: { en: "To return to a previous topic: 'Going ___ to what you said earlier about funding...'", de: "Um zu einem früheren Thema zurückzukehren: 'Um auf das zurückzukommen, was du vorhin über Finanzierung gesagt hast...'" },
    words: ["back", "again", "over", "around"],
    correct: "back",
    explanation: { en: "'Going back to' is a standard topic management device for returning to a previous point in conversation. It is natural and non-disruptive.", de: "'Going back to' ist ein standardmäßiges Themenmanagement-Mittel, um zu einem vorherigen Punkt zurückzukehren. Es ist natürlich und nicht störend." }
  },
  {
    prompt: { en: "To signal you're about to wrap up: 'So, just to ___ up, our main priorities are...'", de: "Um zu signalisieren, dass man zusammenfasst: 'Also, nur um zusammenzufassen, unsere Hauptprioritäten sind...'" },
    words: ["sum", "wrap", "finish", "close"],
    correct: "sum",
    explanation: { en: "'Just to sum up' is a discourse marker used to signal a summary is coming. 'Wrap up' means to finish; 'sum up' specifically means to summarize — the distinction matters.", de: "'Just to sum up' ist ein Diskursmarker, der signalisiert, dass eine Zusammenfassung folgt. 'Wrap up' bedeutet beenden; 'sum up' bedeutet spezifisch zusammenfassen." }
  },
  {
    prompt: { en: "To repair a misunderstanding: 'Sorry, that's not quite what I ___. Let me rephrase.'", de: "Um ein Missverständnis zu korrigieren: 'Sorry, das ist nicht ganz das, was ich ___. Lassen Sie mich umformulieren.'" },
    words: ["meant", "said", "told", "spoke"],
    correct: "meant",
    explanation: { en: "'That's not what I meant' distinguishes between what was said and what was intended — a key repair strategy in spoken discourse. 'Said' would be factually incorrect if you did say it.", de: "'That's not what I meant' unterscheidet zwischen dem, was gesagt wurde, und dem, was beabsichtigt war — eine wichtige Reparaturstrategie." }
  },
  {
    prompt: { en: "To take the floor in a group discussion: 'If I ___ just make a point here...'", de: "Um in einer Gruppendiskussion das Wort zu ergreifen: 'Wenn ich hier nur einen Punkt ___ darf...'" },
    words: ["could", "would", "should", "might"],
    correct: "could",
    explanation: { en: "'If I could just…' is a hedged floor-taking device. It frames your contribution as conditional, making it less imposing and more polite than simply starting to speak.", de: "'If I could just…' ist ein abgesichertes Mittel zur Redeübernahme. Es rahmt Ihren Beitrag als bedingt ein und macht ihn höflicher." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "Excuse me for cutting you off, but I totally disagree with everything you just said.",
    mistakeIndex: 7,
    correction: "I see your point, but I'd like to offer a different perspective",
    explanation: { en: "While the interruption formula is polite ('excuse me for cutting you off'), the follow-up is too confrontational. In professional discourse, disagree diplomatically: 'I see your point, but I'd like to offer a different perspective.'", de: "Während die Unterbrechungsformel höflich ist, ist die Folge zu konfrontativ. Widersprechen Sie diplomatisch im professionellen Diskurs." }
  },
  {
    sentence: "As I was saying before you rudely interrupted, the budget needs revision.",
    mistakeIndex: 5,
    correction: "before we moved on to that point",
    explanation: { en: "Directly accusing someone of being rude is a face-threatening act. The repair should be face-saving: 'As I was saying before we moved on to that point…'.", de: "Jemanden direkt der Unhöflichkeit zu beschuldigen ist ein gesichtsbedrohender Akt. Die Reparatur sollte gesichtswahrend sein." }
  },
  {
    sentence: "Yeah yeah yeah, anyway, so what I think is way more important, right?",
    mistakeIndex: 0,
    correction: "That's an interesting point. Building on that,",
    explanation: { en: "Dismissive backchanneling ('yeah yeah yeah') followed by self-aggrandizing ('what I think is more important') violates cooperative principles. Acknowledge the other speaker before transitioning.", de: "Abweisendes Rückkopplungssignal ('yeah yeah yeah') gefolgt von Selbstüberhebung verletzt kooperative Prinzipien. Erkennen Sie den anderen Sprecher an." }
  },
  {
    sentence: "I don't know what I'm trying to say. Never mind, forget it. It doesn't matter anyway.",
    mistakeIndex: 0,
    correction: "Let me rephrase that. What I'm getting at is",
    explanation: { en: "Abandoning your point entirely is a failed repair strategy. Use self-repair: 'Let me rephrase that. What I'm getting at is…' to maintain your contribution.", de: "Seinen Punkt ganz aufzugeben ist eine gescheiterte Reparaturstrategie. Verwenden Sie Selbstreparatur: 'Let me rephrase that. What I'm getting at is…'" }
  },
  {
    sentence: "To change the subject completely, have you seen the new marketing data?",
    mistakeIndex: 1,
    correction: "shift gears for a moment — on a related note,",
    explanation: { en: "'To change the subject completely' is too abrupt and signals the speaker knows the transition is awkward. Smoother: 'To shift gears for a moment' or 'On a related note.'", de: "'To change the subject completely' ist zu abrupt. Geschmeidiger: 'To shift gears for a moment' oder 'On a related note.'" }
  }
];

const grammarRacerData = [
  {
    prompt: "Which is the best backchannel response to 'I've been working on this project for months'?",
    options: ["Right, that sounds like a lot of work.", "Okay whatever.", "I don't care."],
    correct: "Right, that sounds like a lot of work.",
    explanation: "'Right, that sounds like a lot of work' validates the speaker and shows active listening — an effective backchannel response."
  },
  {
    prompt: "Polite way to interrupt: '___'",
    options: ["Sorry, could I just add something?", "Stop talking, I have something to say.", "Wait, listen to me."],
    correct: "Sorry, could I just add something?",
    explanation: "'Sorry, could I just add something?' uses an apology + conditional modal + minimizer ('just') — the ideal polite interruption formula."
  },
  {
    prompt: "Best topic-shift marker in a professional meeting: '___'",
    options: ["Moving on to the next point,", "Anyway, forget about that.", "Whatever, let's talk about something else."],
    correct: "Moving on to the next point,",
    explanation: "'Moving on to the next point' is a professional, structured topic-shift marker appropriate for meetings and formal discussions."
  },
  {
    prompt: "Which is the best self-repair strategy? 'What I meant to say ___ ...'",
    options: ["was", "is", "would be"],
    correct: "was",
    explanation: "'What I meant to say was…' is the standard self-repair formula, using past tense to refer back to the original (failed) intention."
  },
  {
    prompt: "To signal agreement before adding your own view: '___, and I'd also add that...'",
    options: ["Absolutely", "No", "Maybe"],
    correct: "Absolutely",
    explanation: "'Absolutely, and I'd also add…' validates the previous speaker before building on their point — a cooperative discourse strategy."
  }
];

export const spokenDiscourseMastery = {
  id: 'c2_g8',
  title: {
    en: 'Spoken English Mastery & Discourse',
    de: 'Mündliche Englischmeisterschaft & Diskurs'
  },
  description: {
    en: "Master turn-taking, interrupting politely, backchanneling, topic management, and repair strategies in spoken English.",
    de: "Meistern Sie Sprecherwechsel, höfliches Unterbrechen, Rückkopplung, Themenmanagement und Reparaturstrategien."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Spoken English Mastery & Discourse 🗣️

At C2, spoken English is about far more than grammar and vocabulary. It is about **managing conversation itself** — knowing when and how to take the floor, keep it, yield it, interrupt politely, show you are listening, shift topics smoothly, and repair breakdowns. These are the skills that separate fluent speakers from truly masterful ones.

### 1. Turn-Taking: The Art of Conversation Flow 🔄

Conversation is a **collaborative activity** governed by unwritten rules. Turn-taking is the system by which speakers manage who speaks when:

**a) Turn-Constructional Units (TCUs):**
Every turn consists of recognizable units (a sentence, clause, or phrase) after which a transition to the next speaker becomes possible.

**b) Transition-Relevance Places (TRPs):**
These are the natural points where a speaker change can occur — typically at the end of a sentence or complete thought.

**c) Turn-taking signals:**

| Signal Type | Examples |
|------------|---------|
| **Yielding the floor** | "…so that's my view." / "What do you think?" / Falling intonation + pause |
| **Holding the floor** | "And another thing…" / "Let me just finish this point…" / Filled pauses ("um," "uh") |
| **Taking the floor** | "If I could just…" / "Can I jump in here?" / "Building on that…" |
| **Selecting next speaker** | "What's your take, Sarah?" / Eye contact + gesture |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 C2 Insight: Cultural Variation</h3>
  <p>Turn-taking norms vary dramatically across cultures. In some cultures, <strong>overlapping speech</strong> is normal and shows engagement. In British English, it can be perceived as rude. In American English, it is more tolerated. C2 speakers must adapt their turn-taking to the cultural context.</p>
</div>

### 2. Interrupting Politely 🤚

At C2, you must be able to interrupt **without causing offense**. The key is using hedged, face-saving formulae:

**Polite interruption formulae (from least to most assertive):**

| Level | Formula | Context |
|-------|---------|---------|
| Very soft | "Sorry, could I just add something quickly?" | Equal-status conversation |
| Soft | "If I may, I'd like to raise a point here." | Formal meeting |
| Medium | "Can I jump in here for a second?" | Professional discussion |
| Assertive | "I need to stop you there — this is important." | Urgent correction |
| Emergency | "I'm sorry to interrupt, but we need to address this immediately." | Crisis situation |

**The anatomy of a polite interruption:**
1. **Apology/hedge:** "Sorry," / "If I may,"
2. **Modal verb:** "could" / "might" / "may"
3. **Minimizer:** "just" / "quickly" / "briefly"
4. **Justification (optional):** "because this relates to…"

### 3. Backchanneling: Active Listening Signals 👂

Backchannels are the small verbal and non-verbal signals that show you are **listening without wanting to take the floor**:

**Verbal backchannels:**
- "Mm-hmm," "Uh-huh," "Right," "Yeah," "I see"
- "Oh really?" "That's interesting." "No way!"
- "Exactly." "Absolutely." "Of course."

**Functions of backchannels:**

| Function | Example |
|----------|---------|
| **Continuity signal** | "Mm-hmm" (= keep going) |
| **Understanding** | "I see" / "Right" (= I follow you) |
| **Agreement** | "Absolutely" / "Exactly" (= I agree) |
| **Surprise/Interest** | "Oh really?" / "No way!" (= that's unexpected) |
| **Empathy** | "Oh no" / "That must have been difficult" |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Backchannel Frequency</h3>
  <p>Too few backchannels = you seem disengaged or hostile. Too many = you seem impatient or insincere. The right frequency depends on culture, context, and relationship. In phone calls, more backchannels are needed because visual cues are absent.</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Topic Management 📋

Skilled speakers manage conversational topics smoothly using specific discourse markers:

**a) Introducing a topic:**
- "I'd like to raise a point about…"
- "There's something I've been meaning to discuss…"
- "Can we talk about the budget for a moment?"

**b) Shifting topics:**
- "On a related note,…"
- "Moving on to the next item,…"
- "That reminds me — have you heard about…?"
- "To shift gears for a moment,…"
- "Speaking of which,…"

**c) Returning to a topic:**
- "Going back to what you said earlier about…"
- "To return to the point about funding,…"
- "As I was saying before,…"

**d) Closing a topic:**
- "So, to sum up on this point,…"
- "I think we've covered this adequately."
- "Unless there's anything else on this topic,…"

**e) Digression markers:**
- "This is slightly off-topic, but…"
- "If I may digress for a moment,…"
- "I know this is tangential, but…"

### 5. Repair Strategies: Fixing Communication Breakdowns 🔧

Repair strategies handle misunderstandings, mishearings, and miscommunications:

**a) Self-repair (correcting yourself):**
- "Sorry, what I **meant** to say was…"
- "Let me rephrase that…"
- "Actually, that's not quite right. What I'm trying to say is…"
- "Or rather,…" (mid-sentence correction)

**b) Other-initiated repair (asking for clarification):**
- "Sorry, could you say that again?"
- "I'm not sure I follow — could you elaborate?"
- "When you say 'restructuring,' do you mean the whole department?"
- "Just to clarify, are you suggesting that…?"

**c) Comprehension checks (verifying understanding):**
- "Does that make sense?"
- "Am I making myself clear?"
- "Are we on the same page here?"

**d) Confirmation checks:**
- "So if I understand correctly, you're saying that…?"
- "Just to make sure I've got this right: the deadline is Friday?"

### 6. Hedging in Spoken Discourse 🌿

Spoken English uses extensive hedging to soften assertions, save face, and maintain politeness:

| Hedge Type | Examples |
|-----------|---------|
| **Epistemic hedges** | "I think," "I believe," "It seems to me" |
| **Approximators** | "sort of," "kind of," "more or less," "roughly" |
| **Shields** | "As far as I know," "If I'm not mistaken" |
| **Fillers/Softeners** | "Well," "You know," "I mean," "The thing is" |
| **Tag questions** | "…isn't it?" "…don't you think?" "…right?" |

### 7. Common Mistakes ❌

**Mistake 1:** Interrupting without a hedge or apology.
- ❌ "No, you're wrong. Listen to me."
- ✅ "Sorry, could I just offer a different perspective here?"

**Mistake 2:** Failing to backchannel (especially on the phone).
- ❌ Complete silence while the other person speaks.
- ✅ Regular "mm-hmm," "right," "I see" signals.

**Mistake 3:** Abrupt topic changes without transition markers.
- ❌ "Anyway. The marketing budget."
- ✅ "On a related note, I'd like to discuss the marketing budget."

**Mistake 4:** Failing to repair misunderstandings.
- ❌ Ignoring confusion and moving on.
- ✅ "I sense there might be some confusion. Let me clarify what I meant."

**Mistake 5:** Over-hedging to the point of seeming uncertain.
- ❌ "I sort of maybe kind of think it might possibly be the case that…"
- ✅ "I think there's a good case for…"

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Turn-taking</strong> — yield, hold, take, and select through verbal and non-verbal signals.</li>
    <li><strong>Polite interruption</strong> — apology + modal + minimizer + justification.</li>
    <li><strong>Backchanneling</strong> — "mm-hmm," "right," "I see" to show active listening.</li>
    <li><strong>Topic management</strong> — smooth introduction, shifting, returning, closing with discourse markers.</li>
    <li><strong>Repair strategies</strong> — self-repair, other-initiated repair, comprehension and confirmation checks.</li>
    <li><strong>Hedging</strong> — softening assertions with "I think," "sort of," "as far as I know."</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Discourse Skills**
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Spoken Discourse Mastery Challenge:</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>Role-play a meeting where you must interrupt politely 3 times using different formulae.</li>
    <li>Listen to a 5-minute conversation and identify all backchannel signals used.</li>
    <li>Practice 5 different topic-shift strategies in a simulated group discussion.</li>
    <li>Record yourself explaining a complex topic, then analyze your self-repair strategies.</li>
    <li>Write out a dialogue demonstrating at least 3 different repair strategies (self-repair, clarification request, confirmation check).</li>
  </ol>
</div>
`,
    de: `
## Mündliche Englischmeisterschaft & Diskurs 🗣️

Auf C2-Niveau geht es bei gesprochenem Englisch um weit mehr als Grammatik und Wortschatz. Es geht darum, **die Konversation selbst zu steuern** — zu wissen, wann und wie man das Wort ergreift, es hält, abgibt, höflich unterbricht, zeigt, dass man zuhört, Themen geschmeidig wechselt und Kommunikationsstörungen repariert.

### 1. Sprecherwechsel: Die Kunst des Gesprächsflusses 🔄

Konversation ist eine **kollaborative Aktivität**, die von ungeschriebenen Regeln geleitet wird. Der Sprecherwechsel ist das System, durch das Sprecher verwalten, wer wann spricht:

**a) Turn-Konstruktionseinheiten (TCUs):**
Jeder Turn besteht aus erkennbaren Einheiten (Satz, Teilsatz oder Phrase), nach denen ein Übergang zum nächsten Sprecher möglich wird.

**b) Übergangsrelevante Stellen (TRPs):**
Dies sind die natürlichen Punkte, an denen ein Sprecherwechsel stattfinden kann — typischerweise am Ende eines Satzes oder vollständigen Gedankens.

**c) Sprecherwechselsignale:**

| Signaltyp | Beispiele |
|-----------|----------|
| **Rederecht abgeben** | "…so that's my view." / "What do you think?" / Fallende Intonation + Pause |
| **Rederecht halten** | "And another thing…" / "Let me just finish this point…" / Gefüllte Pausen ("um," "uh") |
| **Rederecht übernehmen** | "If I could just…" / "Can I jump in here?" / "Building on that…" |
| **Nächsten Sprecher auswählen** | "What's your take, Sarah?" / Blickkontakt + Geste |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 C2-Einsicht: Kulturelle Variation</h3>
  <p>Sprecherwechselnormen variieren dramatisch zwischen Kulturen. In manchen Kulturen ist <strong>überlappende Rede</strong> normal und zeigt Engagement. Im britischen Englisch kann es als unhöflich empfunden werden. C2-Sprecher müssen ihren Sprecherwechsel dem kulturellen Kontext anpassen.</p>
</div>

### 2. Höfliches Unterbrechen 🤚

Auf C2-Niveau müssen Sie unterbrechen können, **ohne Anstoß zu erregen**. Der Schlüssel ist die Verwendung abgesicherter, gesichtswahrender Formeln:

**Höfliche Unterbrechungsformeln (von am wenigsten bis am meisten assertiv):**

| Stufe | Formel | Kontext |
|-------|--------|---------|
| Sehr sanft | "Sorry, could I just add something quickly?" | Gespräch unter Gleichgestellten |
| Sanft | "If I may, I'd like to raise a point here." | Formelle Besprechung |
| Mittel | "Can I jump in here for a second?" | Berufliche Diskussion |
| Assertiv | "I need to stop you there — this is important." | Dringende Korrektur |
| Notfall | "I'm sorry to interrupt, but we need to address this immediately." | Krisensituation |

**Die Anatomie einer höflichen Unterbrechung:**
1. **Entschuldigung/Absicherung:** "Sorry," / "If I may,"
2. **Modalverb:** "could" / "might" / "may"
3. **Abschwächer:** "just" / "quickly" / "briefly"
4. **Begründung (optional):** "because this relates to…"

### 3. Rückkopplung: Aktive Zuhörsignale 👂

Rückkopplungssignale sind die kleinen verbalen und nonverbalen Signale, die zeigen, dass Sie **zuhören, ohne das Wort übernehmen zu wollen**:

**Verbale Rückkopplungssignale:**
- "Mm-hmm," "Uh-huh," "Right," "Yeah," "I see"
- "Oh really?" "That's interesting." "No way!"
- "Exactly." "Absolutely." "Of course."

**Funktionen von Rückkopplungssignalen:**

| Funktion | Beispiel |
|----------|---------|
| **Fortfahrsignal** | "Mm-hmm" (= mach weiter) |
| **Verständnis** | "I see" / "Right" (= ich folge dir) |
| **Zustimmung** | "Absolutely" / "Exactly" (= ich stimme zu) |
| **Überraschung/Interesse** | "Oh really?" / "No way!" (= das ist unerwartet) |
| **Empathie** | "Oh no" / "That must have been difficult" |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Rückkopplungsfrequenz</h3>
  <p>Zu wenige Rückkopplungssignale = Sie wirken desinteressiert oder feindselig. Zu viele = Sie wirken ungeduldig oder unaufrichtig. Die richtige Frequenz hängt von Kultur, Kontext und Beziehung ab. Bei Telefonaten werden mehr Rückkopplungssignale benötigt, da visuelle Hinweise fehlen.</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Themenmanagement 📋

Versierte Sprecher verwalten Gesprächsthemen geschmeidig mit spezifischen Diskursmarkern:

**a) Ein Thema einführen:**
- "I'd like to raise a point about…"
- "There's something I've been meaning to discuss…"
- "Can we talk about the budget for a moment?"

**b) Themen wechseln:**
- "On a related note,…"
- "Moving on to the next item,…"
- "That reminds me — have you heard about…?"
- "To shift gears for a moment,…"
- "Speaking of which,…"

**c) Zu einem Thema zurückkehren:**
- "Going back to what you said earlier about…"
- "To return to the point about funding,…"
- "As I was saying before,…"

**d) Ein Thema abschließen:**
- "So, to sum up on this point,…"
- "I think we've covered this adequately."
- "Unless there's anything else on this topic,…"

**e) Abschweifungsmarker:**
- "This is slightly off-topic, but…"
- "If I may digress for a moment,…"
- "I know this is tangential, but…"

### 5. Reparaturstrategien: Kommunikationsstörungen beheben 🔧

Reparaturstrategien behandeln Missverständnisse, Verhörer und Fehlkommunikation:

**a) Selbstreparatur (sich selbst korrigieren):**
- "Sorry, what I **meant** to say was…"
- "Let me rephrase that…"
- "Actually, that's not quite right. What I'm trying to say is…"
- "Or rather,…" (Korrektur mitten im Satz)

**b) Fremdreparatur (um Klärung bitten):**
- "Sorry, could you say that again?"
- "I'm not sure I follow — could you elaborate?"
- "When you say 'restructuring,' do you mean the whole department?"
- "Just to clarify, are you suggesting that…?"

**c) Verständnischecks:**
- "Does that make sense?"
- "Am I making myself clear?"
- "Are we on the same page here?"

**d) Bestätigungschecks:**
- "So if I understand correctly, you're saying that…?"
- "Just to make sure I've got this right: the deadline is Friday?"

### 6. Hedging im gesprochenen Diskurs 🌿

Gesprochenes Englisch verwendet umfangreiches Hedging, um Aussagen abzumildern, Gesicht zu wahren und Höflichkeit aufrechtzuerhalten:

| Hedge-Typ | Beispiele |
|-----------|----------|
| **Epistemische Hedges** | "I think," "I believe," "It seems to me" |
| **Approximatoren** | "sort of," "kind of," "more or less," "roughly" |
| **Schutzschilde** | "As far as I know," "If I'm not mistaken" |
| **Füller/Abschwächer** | "Well," "You know," "I mean," "The thing is" |
| **Rückversicherungsfragen** | "…isn't it?" "…don't you think?" "…right?" |

### 7. Häufige Fehler ❌

**Fehler 1:** Unterbrechen ohne Absicherung oder Entschuldigung.
- ❌ "No, you're wrong. Listen to me."
- ✅ "Sorry, could I just offer a different perspective here?"

**Fehler 2:** Fehlendes Rückkopplungssignal (besonders am Telefon).
- ❌ Völlige Stille, während die andere Person spricht.
- ✅ Regelmäßige "mm-hmm," "right," "I see" Signale.

**Fehler 3:** Abrupter Themenwechsel ohne Übergangsmarker.
- ❌ "Anyway. The marketing budget."
- ✅ "On a related note, I'd like to discuss the marketing budget."

**Fehler 4:** Missverständnisse nicht reparieren.
- ❌ Verwirrung ignorieren und weitermachen.
- ✅ "I sense there might be some confusion. Let me clarify what I meant."

**Fehler 5:** Über-Hedging bis zur scheinbaren Unsicherheit.
- ❌ "I sort of maybe kind of think it might possibly be the case that…"
- ✅ "I think there's a good case for…"

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Sprecherwechsel</strong> — abgeben, halten, übernehmen und auswählen durch verbale und nonverbale Signale.</li>
    <li><strong>Höfliches Unterbrechen</strong> — Entschuldigung + Modal + Abschwächer + Begründung.</li>
    <li><strong>Rückkopplung</strong> — "mm-hmm," "right," "I see" um aktives Zuhören zu zeigen.</li>
    <li><strong>Themenmanagement</strong> — geschmeidige Einführung, Wechsel, Rückkehr, Abschluss mit Diskursmarkern.</li>
    <li><strong>Reparaturstrategien</strong> — Selbstreparatur, Fremdreparatur, Verständnis- und Bestätigungschecks.</li>
    <li><strong>Hedging</strong> — Aussagen abschwächen mit "I think," "sort of," "as far as I know."</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Diskursfähigkeiten**
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Mündliche Diskursmeisterschafts-Challenge:</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>Spielen Sie eine Besprechung nach, in der Sie 3-mal höflich unterbrechen müssen — mit verschiedenen Formeln.</li>
    <li>Hören Sie sich ein 5-minütiges Gespräch an und identifizieren Sie alle verwendeten Rückkopplungssignale.</li>
    <li>Üben Sie 5 verschiedene Themenwechsel-Strategien in einer simulierten Gruppendiskussion.</li>
    <li>Nehmen Sie sich auf, während Sie ein komplexes Thema erklären, und analysieren Sie Ihre Selbstreparaturstrategien.</li>
    <li>Schreiben Sie einen Dialog, der mindestens 3 verschiedene Reparaturstrategien demonstriert.</li>
  </ol>
</div>
`
  }
};
