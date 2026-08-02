export const divingGames = {
  title: {
    de: "Tauchspiele & Übungen",
    en: "Diving Games & Exercises"
  },
  description: {
    de: "Spielerische Übungen zum Tauchen: Schatzsuche, Ringe tauchen, Staffelspiele und mehr.",
    en: "Fun diving exercises: treasure hunt, ring diving, relay games, and more."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Tauchspiele & Übungen</h2>

  <p className="text-lg leading-relaxed">
    Tauchen muss nicht immer ernst und technisch sein! Spielerische Übungen machen das Tauchen 
    spannender und helfen dabei, die Unterwasserfähigkeiten natürlich und mit Freude zu verbessern. 
    Diese Spiele eignen sich für alle Altersgruppen und Schwimmniveaus.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Vorteile von Tauchspielen</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Reduziert die Angst vor dem Untertauchen</li>
      <li>Verbessert die Unterwasser-Orientierung spielerisch</li>
      <li>Stärkt die Atemkontrolle ohne bewussten Fokus darauf</li>
      <li>Baut Vertrauen im Wasser auf</li>
      <li>Macht das Training abwechslungsreicher und motivierender</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Schatzsuche (Tauchringe)</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">So geht's</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Wirf verschiedenfarbige Tauchringe, Stäbe oder Gegenstände ins Becken.</li>
      <li>Tauche ab und sammle so viele wie möglich in einem Tauchgang.</li>
      <li><strong>Variante 1:</strong> Auf Zeit - wer sammelt in 30 Sekunden die meisten?</li>
      <li><strong>Variante 2:</strong> Bestimmte Farbe zuerst - nur die blauen Ringe sammeln.</li>
      <li><strong>Variante 3:</strong> Reihenfolge vorgeben - erst rot, dann gelb, dann blau.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Unterwasser-Staffel</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Teamspiel</h3>
    <ol className="list-decimal list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li>Zwei oder mehr Teams bilden.</li>
      <li>Jedes Teammitglied muss unter Wasser eine Bahn (oder halbe Bahn) schwimmen.</li>
      <li>Am Ende der Strecke wird ein Gegenstand übergeben (z.B. Tauchring).</li>
      <li>Das Team, das zuerst fertig ist, gewinnt.</li>
      <li><strong>Wichtig:</strong> Niemand wird gezwungen, über seine Grenzen zu gehen!</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Unterwasser-Hindernislauf</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Aufbau</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Reifen oder Hula-Hoops unter Wasser befestigen, durch die man tauchen muss.</li>
      <li>Pool-Nudeln als Unterwasser-Hindernisse aufstellen.</li>
      <li>Gegenstände aufheben und an bestimmten Stellen ablegen.</li>
      <li>Kombiniere verschiedene Schwimm- und Tauchbewegungen.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Weitere Spiele</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Fotografieren</h4>
      <p className="text-green-700 dark:text-green-300 text-sm">
        Mit einer wasserdichten Kamera (oder einfach nur mit offenen Augen) unter Wasser 
        bestimmte Dinge "fotografieren" - Zahlen an der Wand lesen, Finger des Partners zählen.
      </p>
    </div>
    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Verstecken</h4>
      <p className="text-green-700 dark:text-green-300 text-sm">
        Ein Spieler versteckt einen kleinen Gegenstand am Beckenboden. Die anderen müssen 
        ihn finden. Wer ihn zuerst findet, darf als nächstes verstecken.
      </p>
    </div>
    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">U-Boot</h4>
      <p className="text-green-700 dark:text-green-300 text-sm">
        Vom Beckenrand abstoßen und so weit wie möglich unter Wasser gleiten - ohne einen 
        einzigen Schwimmzug! Nur der Abstoß zählt. Wer kommt am weitesten?
      </p>
    </div>
    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Zahlenraten</h4>
      <p className="text-green-700 dark:text-green-300 text-sm">
        Ein Spieler zeigt unter Wasser eine Zahl mit den Fingern. Der andere muss sie erkennen 
        und an der Oberfläche sagen. Trainiert das Sehen unter Wasser.
      </p>
    </div>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-8">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Sicherheit bei Tauchspielen</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li>Immer mit Partner oder Aufsichtsperson spielen.</li>
      <li>Nie jemanden unter Wasser drücken oder festhalten.</li>
      <li>Klare Regeln aufstellen und einhalten.</li>
      <li>Pausen einlegen und auf Ermüdung achten.</li>
      <li>Im Zweifelsfall immer auftauchen.</li>
    </ul>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Diving Games & Exercises</h2>

  <p className="text-lg leading-relaxed">
    Diving doesn't always have to be serious and technical! Playful exercises make diving more 
    exciting and help improve underwater skills naturally and with joy. These games are suitable 
    for all ages and swimming levels.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Benefits of Diving Games</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Reduces fear of submerging</li>
      <li>Improves underwater orientation playfully</li>
      <li>Strengthens breath control without conscious focus</li>
      <li>Builds confidence in water</li>
      <li>Makes training more varied and motivating</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Treasure Hunt (Diving Rings)</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">How It Works</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Throw different colored diving rings, sticks, or objects into the pool.</li>
      <li>Dive down and collect as many as possible in one dive.</li>
      <li><strong>Variant 1:</strong> Timed - who collects the most in 30 seconds?</li>
      <li><strong>Variant 2:</strong> Specific color first - only collect blue rings.</li>
      <li><strong>Variant 3:</strong> Set order - first red, then yellow, then blue.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Underwater Relay</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Team Game</h3>
    <ol className="list-decimal list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li>Form two or more teams.</li>
      <li>Each team member must swim one length (or half length) underwater.</li>
      <li>At the end, pass an object (e.g., diving ring).</li>
      <li>The team that finishes first wins.</li>
      <li><strong>Important:</strong> Nobody should be forced beyond their limits!</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Underwater Obstacle Course</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Setup</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Secure hoops or hula-hoops underwater to swim through.</li>
      <li>Set up pool noodles as underwater obstacles.</li>
      <li>Pick up objects and place them at designated spots.</li>
      <li>Combine different swimming and diving movements.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">More Games</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Photography</h4>
      <p className="text-green-700 dark:text-green-300 text-sm">
        With a waterproof camera (or just open eyes), "photograph" specific things underwater 
        - read numbers on the wall, count your partner's fingers.
      </p>
    </div>
    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Hide and Seek</h4>
      <p className="text-green-700 dark:text-green-300 text-sm">
        One player hides a small object on the pool floor. Others must find it. 
        Whoever finds it first gets to hide it next.
      </p>
    </div>
    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Submarine</h4>
      <p className="text-green-700 dark:text-green-300 text-sm">
        Push off the wall and glide as far as possible underwater - without a single stroke! 
        Only the push-off counts. Who gets farthest?
      </p>
    </div>
    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Number Guessing</h4>
      <p className="text-green-700 dark:text-green-300 text-sm">
        One player shows a number with fingers underwater. The other must recognize it 
        and say it at the surface. Trains underwater vision.
      </p>
    </div>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-8">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Safety During Diving Games</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li>Always play with a partner or supervisor.</li>
      <li>Never push or hold someone underwater.</li>
      <li>Set clear rules and follow them.</li>
      <li>Take breaks and watch for fatigue.</li>
      <li>When in doubt, always surface.</li>
    </ul>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Tauchspiele ausprobieren",
      description: "Probiere verschiedene Tauchspiele mit Freunden oder Trainingspartnern aus.",
      checklist: [
        { text: "Spiele eine Runde Schatzsuche mit Tauchringen", checked: false },
        { text: "Mache einen Unterwasser-Hindernislauf", checked: false },
        { text: "Spiele 'U-Boot' und miss deine Gleitstrecke", checked: false },
        { text: "Probiere das Zahlenraten unter Wasser aus", checked: false }
      ]
    },
    en: {
      title: "Try Diving Games",
      description: "Try different diving games with friends or training partners.",
      checklist: [
        { text: "Play a round of treasure hunt with diving rings", checked: false },
        { text: "Complete an underwater obstacle course", checked: false },
        { text: "Play 'Submarine' and measure your glide distance", checked: false },
        { text: "Try number guessing underwater", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum sind Tauchspiele gut fürs Schwimmtraining?",
        answer: "Sie verbessern spielerisch Unterwasser-Orientierung, Atemkontrolle und Wasservertrauen, ohne dass es sich wie hartes Training anfühlt."
      },
      {
        question: "Was ist die wichtigste Sicherheitsregel bei Tauchspielen?",
        answer: "Nie alleine spielen und nie jemanden unter Wasser drücken oder festhalten. Im Zweifelsfall immer auftauchen."
      },
      {
        question: "Was trainiert das Spiel 'Zahlenraten' unter Wasser?",
        answer: "Es trainiert das Sehen unter Wasser mit offenen Augen und die Fähigkeit, sich unter Wasser zu orientieren."
      }
    ],
    en: [
      {
        question: "Why are diving games good for swim training?",
        answer: "They playfully improve underwater orientation, breath control, and water confidence without feeling like hard training."
      },
      {
        question: "What is the most important safety rule in diving games?",
        answer: "Never play alone and never push or hold someone underwater. When in doubt, always surface."
      },
      {
        question: "What does the 'number guessing' game train?",
        answer: "It trains seeing underwater with open eyes and the ability to orient yourself underwater."
      }
    ]
  }
};
