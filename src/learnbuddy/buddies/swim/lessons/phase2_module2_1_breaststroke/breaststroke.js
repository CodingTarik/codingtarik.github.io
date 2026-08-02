export const breaststroke = {
  title: {
    de: "Brustschwimmen - Der klassische Schwimmstil",
    en: "Breaststroke - The Classic Swimming Style"
  },
  description: {
    de: "Lerne die Technik des Brustschwimmens: Armbewegung, Beinschlag, Atmung und Gleitphase.",
    en: "Learn breaststroke technique: arm movement, leg kick, breathing, and glide phase."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Brustschwimmen - Der klassische Schwimmstil</h2>

  <p className="text-lg leading-relaxed">
    Brustschwimmen ist der älteste und bekannteste Schwimmstil. Er wird oft als erster Stil gelernt, 
    weil der Kopf dabei die meiste Zeit über Wasser bleibt. Trotz seiner scheinbaren Einfachheit 
    erfordert Brustschwimmen eine präzise Koordination von Armen, Beinen und Atmung.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Überblick</h3>
    <p className="text-blue-700 dark:text-blue-300">
      Brustschwimmen ist ein symmetrischer Schwimmstil, bei dem beide Arme und Beine gleichzeitig 
      und spiegelbildlich bewegt werden. Der Zyklus besteht aus Armzug, Beinschlag, Gleitphase und 
      Atmung. Im Wettkampf ist es der langsamste der vier Hauptstile, aber er ist sehr energieeffizient 
      und eignet sich hervorragend für lange Strecken.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Die Armbewegung</h3>

  <p className="leading-relaxed">
    Die Armbewegung beim Brustschwimmen ist kreisförmig und symmetrisch. Sie beginnt mit gestreckten 
    Armen in der Streamline-Position und besteht aus drei Phasen:
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">1. Ausholphase</h4>
      <p className="text-amber-700 dark:text-amber-300 text-sm">
        Die Hände drehen sich nach außen und ziehen das Wasser seitwärts auseinander. Die Arme 
        bleiben dabei leicht gebeugt. Diese Phase erzeugt den ersten Vortrieb.
      </p>
    </div>
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">2. Zugphase</h4>
      <p className="text-amber-700 dark:text-amber-300 text-sm">
        Die Hände werden kraftvoll nach innen und unten gezogen. Die Ellenbogen bleiben hoch. 
        Dies ist die Hauptantriebsphase der Arme und der Moment, in dem der Kopf zum Atmen angehoben wird.
      </p>
    </div>
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">3. Erholungsphase</h4>
      <p className="text-amber-700 dark:text-amber-300 text-sm">
        Die Hände werden vor der Brust zusammengeführt und nach vorne geschoben, zurück in die 
        Streamline-Position. Diese Phase sollte schnell und stromlinienförmig erfolgen.
      </p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Der Beinschlag (Grätschschlag)</h3>

  <p className="leading-relaxed">
    Der Beinschlag beim Brustschwimmen ist einzigartig unter allen Schwimmstilen. Er wird auch 
    Grätschschlag oder Froschschlag genannt und liefert den Hauptantrieb.
  </p>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-4">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Technik des Beinschlags</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Anziehen:</strong> Die Fersen werden zum Gesäß gezogen, die Knie bleiben hüftbreit. 
      Die Füße werden dabei nach außen gedreht (dorsiflektiert).</li>
      <li><strong>Ausstoßen:</strong> Die Füße werden in einem kreisförmigen Bogen nach außen und 
      hinten gestoßen. Die Fußsohlen drücken dabei das Wasser weg.</li>
      <li><strong>Zusammenführen:</strong> Die Beine werden kraftvoll zusammengeführt und gestreckt. 
      Dies erzeugt den maximalen Vortrieb.</li>
      <li><strong>Gleiten:</strong> In der gestreckten Position gleiten die Beine stromlinienförmig 
      durch das Wasser.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Atmung</h3>

  <p className="leading-relaxed">
    Die Atmung beim Brustschwimmen ist natürlicher als bei anderen Stilen, da der Kopf bei jedem 
    Armzug über Wasser kommt. Der Atemrhythmus ist fest an den Bewegungszyklus gekoppelt:
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-4">
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Einatmen:</strong> Während der Zugphase der Arme hebt sich der Oberkörper, und du 
      atmest schnell durch den Mund ein.</li>
      <li><strong>Ausatmen:</strong> Während der Gleitphase wird die Luft gleichmäßig durch Nase und 
      Mund ins Wasser ausgeatmet.</li>
      <li><strong>Timing:</strong> Das Ein- und Ausatmen sollte fließend und rhythmisch erfolgen. 
      Nie die Luft anhalten!</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Die Gleitphase</h3>

  <p className="leading-relaxed">
    Die Gleitphase ist das Geheimnis eines effizienten Brustschwimmens. Nach dem Beinschlag 
    streckst du dich vollständig in der Streamline-Position und lässt den Schwung dich durch das 
    Wasser tragen. Viele Anfänger machen den Fehler, diese Phase zu kurz zu halten.
  </p>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-4">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Timing des Gesamtzyklus</h3>
    <p className="text-amber-700 dark:text-amber-300 mb-3">
      Der ideale Brustschwimm-Zyklus folgt diesem Rhythmus:
    </p>
    <ol className="list-decimal list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li>Armzug beginnt → Kopf hebt sich → Einatmen</li>
      <li>Arme zusammenführen → Beine anziehen</li>
      <li>Arme nach vorne strecken → Beinschlag</li>
      <li>Gleiten in Streamline-Position → Ausatmen</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Häufige Fehler</h3>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Vermeide diese Fehler!</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li><strong>Zu breiter Armzug:</strong> Die Arme sollten nie weiter als schulterbreit auseinander gehen.</li>
      <li><strong>Scherenbeinschlag:</strong> Beide Beine müssen symmetrisch arbeiten, nicht wie eine Schere.</li>
      <li><strong>Keine Gleitphase:</strong> Ohne Gleiten wird der Stil sehr anstrengend und ineffizient.</li>
      <li><strong>Kopf zu hoch:</strong> Nur so weit heben, wie zum Atmen nötig. Ein zu hoher Kopf senkt die Hüfte.</li>
      <li><strong>Knie zu weit auseinander:</strong> Die Knie sollten höchstens hüftbreit sein, nicht weiter.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Übungen zum Üben</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Beinschlag am Beckenrand:</strong> Halte dich am Beckenrand fest und übe nur den Beinschlag. 
      Konzentriere dich auf die Fußstellung und den kreisförmigen Abstoß.</li>
      <li><strong>Armzug mit Pull-Buoy:</strong> Schwimme nur mit den Armen, während ein Pull-Buoy die Beine 
      oben hält. So kannst du dich auf die Armtechnik konzentrieren.</li>
      <li><strong>Gleitzählen:</strong> Zähle, wie viele Züge du für eine Bahn brauchst. Versuche, mit 
      jedem Durchgang einen Zug weniger zu brauchen, indem du die Gleitphase verlängerst.</li>
      <li><strong>2-1-2 Drill:</strong> 2 Beinschläge, 1 Armzug, 2 Beinschläge. Dies verbessert die 
      Koordination und die Beinarbeit.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Breaststroke - The Classic Swimming Style</h2>

  <p className="text-lg leading-relaxed">
    Breaststroke is the oldest and most well-known swimming style. It's often the first style learned 
    because the head stays above water most of the time. Despite its apparent simplicity, breaststroke 
    requires precise coordination of arms, legs, and breathing.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Overview</h3>
    <p className="text-blue-700 dark:text-blue-300">
      Breaststroke is a symmetrical swimming style where both arms and legs move simultaneously 
      in mirror image. The cycle consists of arm pull, leg kick, glide phase, and breathing. 
      In competition, it's the slowest of the four main styles, but it's very energy-efficient 
      and excellent for long distances.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Arm Movement</h3>

  <p className="leading-relaxed">
    The arm movement in breaststroke is circular and symmetrical. It starts with arms extended in 
    the streamline position and consists of three phases:
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">1. Outsweep</h4>
      <p className="text-amber-700 dark:text-amber-300 text-sm">
        The hands turn outward and pull the water apart sideways. The arms remain slightly bent. 
        This phase generates the initial propulsion.
      </p>
    </div>
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">2. Pull Phase</h4>
      <p className="text-amber-700 dark:text-amber-300 text-sm">
        The hands are pulled powerfully inward and downward. The elbows stay high. This is the 
        main propulsive phase of the arms and the moment when the head rises for breathing.
      </p>
    </div>
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">3. Recovery Phase</h4>
      <p className="text-amber-700 dark:text-amber-300 text-sm">
        The hands are brought together in front of the chest and pushed forward, back into the 
        streamline position. This phase should be quick and streamlined.
      </p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Kick (Whip Kick)</h3>

  <p className="leading-relaxed">
    The breaststroke kick is unique among all swimming styles. Also called the whip kick or frog kick, 
    it provides the main propulsion.
  </p>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-4">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Kick Technique</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Recovery:</strong> Heels are drawn up toward the buttocks, knees stay hip-width apart. 
      Feet are turned outward (dorsiflexed).</li>
      <li><strong>Outsweep:</strong> Feet are pushed outward and backward in a circular arc. 
      The soles of the feet push the water away.</li>
      <li><strong>Insweep:</strong> Legs are brought together powerfully and extended. 
      This generates maximum propulsion.</li>
      <li><strong>Glide:</strong> In the extended position, legs glide streamlined through the water.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Breathing</h3>

  <p className="leading-relaxed">
    Breathing in breaststroke is more natural than in other styles because the head comes above water 
    with every arm stroke. The breathing rhythm is tied to the movement cycle:
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-4">
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Inhale:</strong> During the arm pull phase, the upper body rises and you breathe in 
      quickly through the mouth.</li>
      <li><strong>Exhale:</strong> During the glide phase, air is exhaled steadily through nose and 
      mouth into the water.</li>
      <li><strong>Timing:</strong> Inhaling and exhaling should be smooth and rhythmic. 
      Never hold your breath!</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Glide Phase</h3>

  <p className="leading-relaxed">
    The glide phase is the secret to efficient breaststroke. After the kick, you fully extend in 
    the streamline position and let the momentum carry you through the water. Many beginners make 
    the mistake of cutting this phase too short.
  </p>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-4">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Complete Cycle Timing</h3>
    <p className="text-amber-700 dark:text-amber-300 mb-3">
      The ideal breaststroke cycle follows this rhythm:
    </p>
    <ol className="list-decimal list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li>Arm pull begins → Head rises → Inhale</li>
      <li>Arms come together → Legs recover</li>
      <li>Arms extend forward → Kick</li>
      <li>Glide in streamline position → Exhale</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Common Errors</h3>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Avoid These Mistakes!</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li><strong>Too-wide arm pull:</strong> Arms should never go wider than shoulder width.</li>
      <li><strong>Scissor kick:</strong> Both legs must work symmetrically, not like scissors.</li>
      <li><strong>No glide phase:</strong> Without gliding, the style becomes very tiring and inefficient.</li>
      <li><strong>Head too high:</strong> Only lift as much as needed to breathe. A head too high sinks the hips.</li>
      <li><strong>Knees too wide:</strong> Knees should be at most hip-width apart, no wider.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Practice Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Wall kick drill:</strong> Hold onto the pool wall and practice only the kick. 
      Focus on foot position and the circular push-off.</li>
      <li><strong>Arm pull with pull buoy:</strong> Swim using only arms while a pull buoy keeps legs 
      afloat. This lets you focus on arm technique.</li>
      <li><strong>Stroke counting:</strong> Count how many strokes you need for one length. Try to use 
      one fewer stroke each time by extending the glide phase.</li>
      <li><strong>2-1-2 Drill:</strong> 2 kicks, 1 arm pull, 2 kicks. This improves coordination 
      and kick technique.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Brustschwimmen üben",
      description: "Übe die einzelnen Elemente des Brustschwimmens und setze sie zusammen.",
      checklist: [
        { text: "Übe den Grätschschlag am Beckenrand für 10 Minuten", checked: false },
        { text: "Schwimme 4 Bahnen nur mit Armzug (mit Pull-Buoy)", checked: false },
        { text: "Schwimme 4 Bahnen mit Fokus auf die Gleitphase", checked: false },
        { text: "Zähle deine Züge pro Bahn und versuche sie zu reduzieren", checked: false }
      ]
    },
    en: {
      title: "Practice Breaststroke",
      description: "Practice the individual elements of breaststroke and put them together.",
      checklist: [
        { text: "Practice the whip kick at the pool wall for 10 minutes", checked: false },
        { text: "Swim 4 lengths using only arm pull (with pull buoy)", checked: false },
        { text: "Swim 4 lengths focusing on the glide phase", checked: false },
        { text: "Count your strokes per length and try to reduce them", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Welche drei Phasen hat die Armbewegung beim Brustschwimmen?",
        answer: "Ausholphase (Hände nach außen), Zugphase (Hände nach innen und unten) und Erholungsphase (Hände zusammenführen und nach vorne strecken)."
      },
      {
        question: "Warum ist die Gleitphase beim Brustschwimmen so wichtig?",
        answer: "Die Gleitphase nutzt den Schwung des Beinschlags und macht den Stil energieeffizient. Ohne sie wird Brustschwimmen sehr anstrengend."
      },
      {
        question: "Was ist der häufigste Fehler beim Brustschwimm-Beinschlag?",
        answer: "Der Scherenbeinschlag, bei dem die Beine asymmetrisch arbeiten statt symmetrisch, sowie zu weit geöffnete Knie."
      }
    ],
    en: [
      {
        question: "What are the three phases of the breaststroke arm movement?",
        answer: "Outsweep (hands outward), pull phase (hands inward and downward), and recovery phase (hands together and extend forward)."
      },
      {
        question: "Why is the glide phase so important in breaststroke?",
        answer: "The glide phase uses the momentum from the kick and makes the style energy-efficient. Without it, breaststroke becomes very tiring."
      },
      {
        question: "What is the most common error in the breaststroke kick?",
        answer: "The scissor kick, where legs work asymmetrically instead of symmetrically, and knees opening too wide."
      }
    ]
  }
};
