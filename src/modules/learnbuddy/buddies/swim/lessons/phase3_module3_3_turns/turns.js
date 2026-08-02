export const turns = {
  title: {
    de: "Wenden - Effizient die Richtung wechseln",
    en: "Turns - Efficiently Change Direction"
  },
  description: {
    de: "Lerne verschiedene Wendetechniken: Kippwende, Rollwende, Rücken-Rollwende und offene Wende.",
    en: "Learn different turn techniques: flip turn, touch turn, backstroke flip turn, and open turn."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Wenden - Effizient die Richtung wechseln</h2>

  <p className="text-lg leading-relaxed">
    Die Wende ist ein oft unterschätztes Element im Schwimmen. Eine gute Wende kann pro 
    Bahnwechsel mehrere Sekunden einsparen. Im Wettkampf sind Wenden genauso wichtig wie 
    die Schwimmtechnik selbst. Es gibt verschiedene Wendetechniken für verschiedene Schwimmstile.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">Die Rollwende (Flip Turn)</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Für Kraul und Rücken</h3>
    <ol className="list-decimal list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>Annäherung:</strong> Schwimme mit voller Geschwindigkeit auf die Wand zu. Die letzte Armbewegung zieht durch, ohne zu atmen.</li>
      <li><strong>Rolle:</strong> Wenn du etwa eine Armlänge von der Wand entfernt bist, starte die Vorwärtsrolle. Kinn zur Brust, Knie anziehen.</li>
      <li><strong>Wandkontakt:</strong> Die Füße treffen die Wand in Hüfthöhe, Knie gebeugt, Füße flach an der Wand.</li>
      <li><strong>Abstoß:</strong> Drücke dich kraftvoll in Streamline-Position von der Wand ab.</li>
      <li><strong>Drehung:</strong> Während des Gleitens drehst du dich von der Rücken- in die Bauchlage (bei Kraul).</li>
      <li><strong>Übergang:</strong> Beginne mit Delfinkicks und dann mit dem Schwimmen.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Die offene Wende (Touch Turn)</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Für Brust und Delfin (Pflicht im Wettkampf)</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Anschlag:</strong> Beide Hände berühren gleichzeitig die Wand (Wettkampfregel!).</li>
      <li><strong>Eintauchen:</strong> Ein Arm zieht von der Wand weg, der Körper dreht sich zur Seite.</li>
      <li><strong>Füße setzen:</strong> Die Füße werden unter Wasser an die Wand gesetzt, Knie gebeugt.</li>
      <li><strong>Abstoß:</strong> Der zweite Arm kommt von der Wand weg und schwingt in Streamline nach vorne. Gleichzeitig kräftiger Abstoß.</li>
      <li><strong>Gleiten:</strong> In Streamline-Position gleiten und dann mit dem Schwimmen beginnen.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Die Rücken-Rollwende</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Spezielle Technik</h3>
    <ol className="list-decimal list-inside space-y-3 text-blue-700 dark:text-blue-300">
      <li><strong>Annäherung:</strong> Die Fähnchen 5 Meter vor der Wand helfen bei der Orientierung. Zähle deine Züge von den Fähnchen zur Wand.</li>
      <li><strong>Drehung:</strong> Auf den letzten Zügen darfst du dich auf den Bauch drehen (eine halbe Drehung erlaubt).</li>
      <li><strong>Rolle:</strong> Führe eine normale Vorwärtsrolle wie beim Kraul aus.</li>
      <li><strong>Abstoß:</strong> Stoße dich in Rückenlage ab und gleite in Streamline auf dem Rücken.</li>
    </ol>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-8">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Häufige Fehler bei Wenden</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li><strong>Zu weit weg rollen:</strong> Die Rolle zu früh beginnen und die Wand nicht richtig treffen.</li>
      <li><strong>Zu nah dran:</strong> Gegen die Wand schwimmen und die Rolle zusammenquetschen.</li>
      <li><strong>Zu tief abstoßen:</strong> Den Abstoß horizontal, nicht nach unten ausführen.</li>
      <li><strong>Luft anhalten:</strong> Durch die Nase ausatmen während der Rolle, um kein Wasser in die Nase zu bekommen.</li>
      <li><strong>Geschwindigkeit verlieren:</strong> Nicht abbremsen vor der Wende!</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Übungen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Purzelbaum im Wasser:</strong> Übe Vorwärtsrollen in der Beckenmitte, ohne Wand.</li>
      <li><strong>Wand-Rolle:</strong> Stehe nah an der Wand und übe die Rolle mit Wandkontakt.</li>
      <li><strong>Annäherung üben:</strong> Schwimme zur Wand und finde den richtigen Abstand für die Rolle.</li>
      <li><strong>Komplette Wende:</strong> Schwimme heran, rolle, stoße ab und schwimme weiter. Wiederhole.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Turns - Efficiently Change Direction</h2>

  <p className="text-lg leading-relaxed">
    The turn is an often underestimated element in swimming. A good turn can save several seconds 
    per wall. In competition, turns are just as important as swimming technique itself. There are 
    different turn techniques for different swimming styles.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Flip Turn</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">For Freestyle and Backstroke</h3>
    <ol className="list-decimal list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>Approach:</strong> Swim at full speed toward the wall. Last arm pull completes without breathing.</li>
      <li><strong>Flip:</strong> About one arm's length from the wall, start the forward somersault. Chin to chest, knees tuck in.</li>
      <li><strong>Wall contact:</strong> Feet hit the wall at hip height, knees bent, feet flat on the wall.</li>
      <li><strong>Push-off:</strong> Push off powerfully in streamline position from the wall.</li>
      <li><strong>Rotation:</strong> During the glide, rotate from back to front (for freestyle).</li>
      <li><strong>Transition:</strong> Begin with dolphin kicks, then start swimming.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Touch Turn (Open Turn)</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">For Breaststroke and Butterfly (Required in Competition)</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Touch:</strong> Both hands touch the wall simultaneously (competition rule!).</li>
      <li><strong>Tuck:</strong> One arm pulls away from the wall, body rotates to the side.</li>
      <li><strong>Feet placement:</strong> Feet are placed on the wall underwater, knees bent.</li>
      <li><strong>Push-off:</strong> The second arm comes off the wall and swings into streamline forward. Simultaneous powerful push-off.</li>
      <li><strong>Glide:</strong> Glide in streamline position, then begin swimming.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Backstroke Flip Turn</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Special Technique</h3>
    <ol className="list-decimal list-inside space-y-3 text-blue-700 dark:text-blue-300">
      <li><strong>Approach:</strong> The flags 5 meters from the wall help with orientation. Count your strokes from flags to wall.</li>
      <li><strong>Rotation:</strong> On the last strokes, you may roll onto your stomach (one half turn allowed).</li>
      <li><strong>Flip:</strong> Execute a normal forward somersault like in freestyle.</li>
      <li><strong>Push-off:</strong> Push off on your back and glide in streamline on your back.</li>
    </ol>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-8">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Common Turn Mistakes</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li><strong>Flipping too far:</strong> Starting the flip too early and missing the wall.</li>
      <li><strong>Too close:</strong> Swimming into the wall and cramping the flip.</li>
      <li><strong>Pushing too deep:</strong> Execute the push-off horizontally, not downward.</li>
      <li><strong>Holding breath:</strong> Exhale through nose during the flip to prevent water entering the nose.</li>
      <li><strong>Losing speed:</strong> Don't slow down before the turn!</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Somersaults in water:</strong> Practice forward rolls in the middle of the pool, no wall.</li>
      <li><strong>Wall roll:</strong> Stand close to the wall and practice the flip with wall contact.</li>
      <li><strong>Approach practice:</strong> Swim to the wall and find the right distance for the flip.</li>
      <li><strong>Complete turn:</strong> Swim in, flip, push off, and swim away. Repeat.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Wenden üben",
      description: "Übe verschiedene Wendetechniken im Schwimmbad.",
      checklist: [
        { text: "Übe 10 Purzelbäume in der Beckenmitte", checked: false },
        { text: "Übe 10 Rollwenden beim Kraulschwimmen", checked: false },
        { text: "Übe 5 offene Wenden für Brust/Delfin", checked: false },
        { text: "Schwimme 8 Bahnen mit Fokus auf schnelle, saubere Wenden", checked: false }
      ]
    },
    en: {
      title: "Practice Turns",
      description: "Practice different turn techniques at the pool.",
      checklist: [
        { text: "Practice 10 somersaults in the middle of the pool", checked: false },
        { text: "Practice 10 flip turns during freestyle", checked: false },
        { text: "Practice 5 open turns for breaststroke/butterfly", checked: false },
        { text: "Swim 8 lengths focusing on fast, clean turns", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum muss man bei Brust und Delfin eine offene Wende machen?",
        answer: "Bei Brust und Delfin müssen laut Wettkampfregeln beide Hände gleichzeitig die Wand berühren. Eine Rollwende ist daher nicht erlaubt."
      },
      {
        question: "Wofür dienen die Fähnchen 5 Meter vor der Wand beim Rückenschwimmen?",
        answer: "Sie helfen bei der Orientierung. Schwimmer zählen ihre Züge von den Fähnchen zur Wand, um den richtigen Zeitpunkt für die Wende zu finden."
      },
      {
        question: "Warum sollte man durch die Nase ausatmen während einer Rollwende?",
        answer: "Um zu verhindern, dass Wasser in die Nase gelangt, da der Körper sich während der Rolle kopfüber dreht."
      }
    ],
    en: [
      {
        question: "Why must you use an open turn in breaststroke and butterfly?",
        answer: "Competition rules require both hands to touch the wall simultaneously in breaststroke and butterfly. A flip turn is therefore not allowed."
      },
      {
        question: "What are the flags 5 meters from the wall for in backstroke?",
        answer: "They help with orientation. Swimmers count their strokes from the flags to the wall to find the right timing for the turn."
      },
      {
        question: "Why should you exhale through your nose during a flip turn?",
        answer: "To prevent water from entering the nose, since the body turns upside down during the flip."
      }
    ]
  }
};
