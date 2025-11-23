import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I am going ___ France next week.", de: "Ich gehe nächste Woche ___ Frankreich." },
    words: ["to", "in", "at", "into"],
    correct: "to",
    explanation: { en: "To = movement/direction (go to a place).", de: "To = Bewegung/Richtung (zu einem Ort gehen)." }
  },
  {
    prompt: { en: "She ran ___ the room.", de: "Sie rannte ___ Zimmer." },
    words: ["into", "in", "to", "at"],
    correct: "into",
    explanation: { en: "Into = movement from outside to inside (enter).", de: "Into = Bewegung von draußen nach drinnen (eintreten)." }
  },
  {
    prompt: { en: "We arrived ___ the airport.", de: "Wir kamen ___ Flughafen an." },
    words: ["at", "to", "in", "into"],
    correct: "at",
    explanation: { en: "Arrive at = for places/buildings (airport, station).", de: "Arrive at = für Orte/Gebäude (Flughafen, Bahnhof)." }
  },
  {
    prompt: { en: "We arrived ___ London.", de: "Wir kamen ___ London an." },
    words: ["in", "at", "to", "into"],
    correct: "in",
    explanation: { en: "Arrive in = for cities and countries.", de: "Arrive in = für Städte und Länder." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "We arrived to Paris yesterday.",
    mistakeIndex: 2,
    correction: "in",
    explanation: { en: "Don't say 'arrive to'. Use 'arrive in' for cities/countries.", de: "Sage nicht 'arrive to'. Benutze 'arrive in' für Städte/Länder." }
  },
  {
    sentence: "I have been to Italy since 2010.",
    mistakeIndex: 3,
    correction: "in",
    explanation: { en: "Use 'been in' to live/stay there. 'Been to' implies visiting and coming back.", de: "Benutze 'been in', um dort zu leben. 'Been to' impliziert besuchen und zurückkommen." }
  },
  {
    sentence: "He jumped in the water.",
    mistakeIndex: 2,
    correction: "into",
    explanation: { en: "Use 'into' for movement (entering). 'Jump into the water'.", de: "Benutze 'into' für Bewegung (Hineingehen). 'Ins Wasser springen'." }
  }
];

const grammarRacerData = [
  {
    prompt: "I walked ___ the shop.",
    options: ["into", "in", "at"],
    correct: "into",
    explanation: "Into = entering"
  },
  {
    prompt: "I am ___ the shop now.",
    options: ["in", "to", "into"],
    correct: "in",
    explanation: "In = position (inside)"
  },
  {
    prompt: "They arrived ___ the hotel.",
    options: ["at", "to", "in"],
    correct: "at",
    explanation: "Arrive at a place/building"
  }
];

export const toAtInInto = {
  id: 'a2_g126',
  title: {
    en: 'To, At, In, Into (Movement & Position)',
    de: 'To, At, In, Into (Bewegung & Position)'
  },
  description: {
    en: "Prepositions of movement and place. 'Go to', 'Arrive at', 'Jump into'.",
    de: "Präpositionen der Bewegung und des Ortes. 'Gehen nach', 'Ankommen bei', 'Springen in'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## To, At, In, Into: Movement vs. Position 🏃‍♂️📍

Prepositions can be confusing because they change depending on whether you are moving or staying still.

### 1. To vs. In/At (Movement vs. Position) 🚶‍♂️ vs 🛑

**TO** is for **movement** (Direction). You go **to** a place.
- "I am going **to** France."
- "We went **to** the cinema."
- "Come **to** my house."

**IN / AT** are for **position** (Location). You are **in** or **at** a place.
- "I live **in** France." (Not "to")
- "We were **at** the cinema."
- "She is **at** my house."

**Important:**
- **Go/Come/Travel** + **TO**
- **Be/Stay/Live** + **IN / AT**

### 2. Into vs. In (Entering vs. Inside) 🚪

**INTO** is for **movement** (Entering). Moving from outside to inside.
- "He walked **into** the room."
- "The cat jumped **into** the box."
- "Pour the water **into** the glass."

**IN** is for **position** (Inside). Being already inside.
- "He is **in** the room."
- "The cat is **in** the box."
- "The water is **in** the glass."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Visualization:</h3>
  <p><strong>Into</strong> = ➡️📦 (Moving inside)</p>
  <p><strong>In</strong> = 📦 (Being inside)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 3. Arrive: At or In? (Never To!) 🛬

We never say "arrive to". We say **arrive in** or **arrive at**.

**Arrive IN** + Cities / Countries 🏙️🌍
- "We arrived **in** London."
- "They arrived **in** France."

**Arrive AT** + Places / Buildings 🏨🏫
- "We arrived **at** the airport."
- "She arrived **at** the hotel."
- "He arrived **at** work."

**Exception:** Arrive **home** (no preposition).
- "We arrived home."

### 4. Get: To or In? 🤔

**Get TO** a place (Movement).
- "How do I **get to** the station?"
- "We **got to** London at 5 PM."

**Get IN** / **Get INTO** (Entering cars/rooms).
- "Get **in** the car!" (or "Get into")

**Exception:** Get **home** (no preposition).
- "I got home late."

<GamePlaceholder id="fixTheMistake" />

### 5. Common Mistakes ❌

**Mistake 1:** Arrive to
- ❌ "We arrived **to** Paris." (Wrong!)
- ✅ "We arrived **in** Paris." (Correct!)

**Mistake 2:** Been to vs. Been in
- "I have **been to** Italy." = I visited and came back (Experience).
- "I have **been in** Italy for 3 weeks." = I am staying there (Duration).

**Mistake 3:** Into vs. In
- "He ran **in** the room." (Could mean he was running inside circles in the room).
- "He ran **into** the room." (He entered running).

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>To</strong> = Movement (Go to)</li>
    <li><strong>In/At</strong> = Position (Stay at/in)</li>
    <li><strong>Into</strong> = Entering (Walk into)</li>
    <li><strong>Arrive In</strong> = Cities/Countries</li>
    <li><strong>Arrive At</strong> = Buildings/Places</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Prepositions**
Choose the correct preposition!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Movement & Place</h3>
  <p className="mb-4">Complete the sentences:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Yesterday I went ___ (supermarket).</li>
    <li>When I arrived ___ (supermarket), it was closed.</li>
    <li>So I went ___ (home).</li>
    <li>I ran ___ (my room) and jumped ___ (bed).</li>
  </ol>
</div>
`,
    de: `
## To, At, In, Into: Bewegung vs. Position 🏃‍♂️📍

Präpositionen können verwirrend sein, weil sie sich ändern, je nachdem, ob du dich bewegst oder stillstehst.

### 1. To vs. In/At (Bewegung vs. Position) 🚶‍♂️ vs 🛑

**TO** ist für **Bewegung** (Richtung). Du gehst **zu** einem Ort.
- "I am going **to** France." (Ich gehe nach Frankreich.)
- "We went **to** the cinema." (Wir gingen ins Kino.)
- "Come **to** my house." (Komm zu meinem Haus.)

**IN / AT** sind für **Position** (Ort). Du bist **an** oder **in** einem Ort.
- "I live **in** France." (Ich lebe in Frankreich.) (Nicht "to")
- "We were **at** the cinema." (Wir waren im Kino.)
- "She is **at** my house." (Sie ist bei mir zu Hause.)

**Wichtig:**
- **Go/Come/Travel** + **TO**
- **Be/Stay/Live** + **IN / AT**

### 2. Into vs. In (Eintreten vs. Drinnen) 🚪

**INTO** ist für **Bewegung** (Eintreten). Von draußen nach drinnen.
- "He walked **into** the room." (Er ging in den Raum hinein.)
- "The cat jumped **into** the box." (Die Katze sprang in die Box.)
- "Pour the water **into** the glass." (Gieß das Wasser in das Glas.)

**IN** ist für **Position** (Drinnen). Schon drinnen sein.
- "He is **in** the room." (Er ist im Raum.)
- "The cat is **in** the box." (Die Katze ist in der Box.)
- "The water is **in** the glass." (Das Wasser ist im Glas.)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Visualisierung:</h3>
  <p><strong>Into</strong> = ➡️📦 (Hineingehen)</p>
  <p><strong>In</strong> = 📦 (Drinnen sein)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 3. Arrive: At oder In? (Niemals To!) 🛬

Wir sagen niemals "arrive to". Wir sagen **arrive in** oder **arrive at**.

**Arrive IN** + Städte / Länder 🏙️🌍
- "We arrived **in** London."
- "They arrived **in** France."

**Arrive AT** + Orte / Gebäude 🏨🏫
- "We arrived **at** the airport."
- "She arrived **at** the hotel."
- "He arrived **at** work."

**Ausnahme:** Arrive **home** (keine Präposition).
- "We arrived home."

### 4. Get: To oder In? 🤔

**Get TO** einen Ort (Bewegung).
- "How do I **get to** the station?" (Wie komme ich zum Bahnhof?)
- "We **got to** London at 5 PM." (Wir kamen um 17 Uhr in London an.)

**Get IN** / **Get INTO** (In Autos/Räume einsteigen).
- "Get **in** the car!" (Steig ins Auto!)

**Ausnahme:** Get **home** (keine Präposition).
- "I got home late."

<GamePlaceholder id="fixTheMistake" />

### 5. Häufige Fehler ❌

**Fehler 1:** Arrive to
- ❌ "We arrived **to** Paris." (Falsch!)
- ✅ "We arrived **in** Paris." (Richtig!)

**Fehler 2:** Been to vs. Been in
- "I have **been to** Italy." = Ich habe es besucht und bin zurück (Erfahrung).
- "I have **been in** Italy for 3 weeks." = Ich bin seit 3 Wochen dort (Dauer).

**Fehler 3:** Into vs. In
- "He ran **in** the room." (Könnte bedeuten, er rannte im Zimmer im Kreis).
- "He ran **into** the room." (Er rannte hinein).

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>To</strong> = Bewegung (Gehe zu)</li>
    <li><strong>In/At</strong> = Position (Bleibe bei/in)</li>
    <li><strong>Into</strong> = Eintreten (Gehe hinein)</li>
    <li><strong>Arrive In</strong> = Städte/Länder</li>
    <li><strong>Arrive At</strong> = Gebäude/Orte</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Präpositionen**
Wähle die richtige Präposition!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Bewegung & Ort</h3>
  <p className="mb-4">Vervollständige die Sätze:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Gestern ging ich ___ (Supermarkt).</li>
    <li>Als ich ___ (Supermarkt) ankam, war er geschlossen.</li>
    <li>Also ging ich ___ (nach Hause).</li>
    <li>Ich rannte ___ (mein Zimmer) und sprang ___ (Bett).</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'To, At, In, Into',
      description: 'Fülle die Lücken mit den richtigen Präpositionen.',
      checklist: [
        { text: 'Satz mit "go to"', checked: false },
        { text: 'Satz mit "arrive at/in"', checked: false },
        { text: 'Satz mit "walk into"', checked: false },
        { text: 'Satz mit "be in/at"', checked: false }
      ]
    },
    en: {
      title: 'To, At, In, Into',
      description: 'Fill in the blanks with the correct prepositions.',
      checklist: [
        { text: 'Sentence with "go to"', checked: false },
        { text: 'Sentence with "arrive at/in"', checked: false },
        { text: 'Sentence with "walk into"', checked: false },
        { text: 'Sentence with "be in/at"', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

