export const teachingChildren = {
  title: {
    de: "Kinder lehren - Schwimmen beibringen mit Freude",
    en: "Teaching Children - Teaching Swimming with Joy"
  },
  description: {
    de: "Lerne, Kindern das Schwimmen beizubringen: Altersgerechte Methoden, Sicherheit und spielerisches Lernen.",
    en: "Learn to teach children swimming: age-appropriate methods, safety, and playful learning."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Kindern Schwimmen beibringen</h2>

  <p className="text-lg leading-relaxed">
    Kindern das Schwimmen beizubringen ist eine der wertvollsten Fähigkeiten, die man 
    weitergeben kann. Es kann Leben retten und eine lebenslange Liebe zum Wasser schaffen. 
    Der Schlüssel liegt in Geduld, Spaß und altersgerechten Methoden.
  </p>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Goldene Regeln</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li>Kinder NIEMALS unbeaufsichtigt im oder am Wasser lassen.</li>
      <li>Nie Angst erzeugen - Wasser soll positiv erlebt werden.</li>
      <li>Jedes Kind hat sein eigenes Tempo - keinen Druck ausüben.</li>
      <li>Spaß steht an erster Stelle - Leistung kommt von alleine.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Altersgruppen</h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">0-3 Jahre</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">
        Wassergewöhnung: Baden, Planschen, Gießen. Immer in Armreichweite. Ziel: 
        Positive Erfahrungen mit Wasser sammeln.
      </p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">4-6 Jahre</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">
        Ideales Lernalter: Gesicht ins Wasser, Gleiten, Paddeln, erste Schwimmbewegungen. 
        Schwimmhilfen schrittweise reduzieren.
      </p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">7+ Jahre</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">
        Technik verfeinern, verschiedene Stile lernen, Ausdauer aufbauen. 
        Wettbewerbe und Spiele motivieren.
      </p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Schritt für Schritt</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Die 7 Stufen des Schwimmenlernens</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Wassergewöhnung:</strong> Gesicht ins Wasser, Blubbern, Spritzen - Spaß haben!</li>
      <li><strong>Untertauchen:</strong> Kurz unter Wasser tauchen, Augen öffnen, Ringe aufheben.</li>
      <li><strong>Gleiten:</strong> Vom Beckenrand abstoßen und gleiten (mit Hilfe, dann alleine).</li>
      <li><strong>Beinschlag:</strong> Beinbewegung üben (am Rand, mit Brett, dann frei).</li>
      <li><strong>Armbewegung:</strong> Erst an Land üben, dann im flachen Wasser.</li>
      <li><strong>Koordination:</strong> Arme und Beine zusammen - erst kurze Strecken.</li>
      <li><strong>Atmung:</strong> Rhythmisches Atmen in die Bewegung integrieren.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Spielerisches Lernen</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Tiernamen:</strong> "Schwimm wie ein Frosch" (Brust), "wie ein Delfin" (Welle), "wie ein Hund" (Hundepaddeln).</li>
      <li><strong>Schatzsuche:</strong> Ringe oder Spielzeug vom Boden aufheben.</li>
      <li><strong>Rakete:</strong> Vom Wand abstoßen und so weit wie möglich gleiten.</li>
      <li><strong>Seeotter:</strong> Auf dem Rücken treiben mit einem Ball auf dem Bauch.</li>
      <li><strong>Stern:</strong> Auf dem Bauch und Rücken wie ein Seestern treiben.</li>
    </ul>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-4">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Schwimmabzeichen als Motivation</h3>
    <p className="text-blue-700 dark:text-blue-300">
      Deutsche Schwimmabzeichen bieten tolle Ziele für Kinder: Seepferdchen (25m + Tauchregel), 
      Bronze (200m in 15 Min), Silber (400m in 25 Min), Gold (600m in 24 Min). 
      Jedes Abzeichen ist ein Erfolg zum Feiern!
    </p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Tipps für den Unterricht</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Kurze Einheiten:</strong> 20-30 Minuten sind genug für kleine Kinder.</li>
      <li><strong>Lob:</strong> Jeder kleine Fortschritt verdient Lob und Ermutigung.</li>
      <li><strong>Vorbild sein:</strong> Wenn du Spaß im Wasser zeigst, haben die Kinder auch Spaß.</li>
      <li><strong>Keine Schwimmflügel:</strong> Lieber Schwimmbretter oder Nudeln - sie erzwingen keine falsche Körperhaltung.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Teaching Children to Swim</h2>

  <p className="text-lg leading-relaxed">
    Teaching children to swim is one of the most valuable skills you can pass on. It can save 
    lives and create a lifelong love of water. The key lies in patience, fun, and age-appropriate 
    methods.
  </p>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Golden Rules</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li>NEVER leave children unsupervised in or near water.</li>
      <li>Never create fear - water should be experienced positively.</li>
      <li>Every child has their own pace - don't apply pressure.</li>
      <li>Fun comes first - performance follows naturally.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Age Groups</h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">0-3 Years</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">
        Water familiarization: bathing, splashing, pouring. Always within arm's reach. 
        Goal: Positive experiences with water.
      </p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">4-6 Years</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">
        Ideal learning age: face in water, gliding, paddling, first swimming movements. 
        Gradually reduce swimming aids.
      </p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">7+ Years</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">
        Refine technique, learn different styles, build endurance. 
        Competitions and games motivate.
      </p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Step by Step</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">The 7 Steps of Learning to Swim</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Water familiarization:</strong> Face in water, blowing bubbles, splashing - have fun!</li>
      <li><strong>Submerging:</strong> Brief dips underwater, open eyes, pick up rings.</li>
      <li><strong>Gliding:</strong> Push off from pool wall and glide (with help, then alone).</li>
      <li><strong>Leg kick:</strong> Practice leg movement (at wall, with board, then free).</li>
      <li><strong>Arm movement:</strong> Practice on land first, then in shallow water.</li>
      <li><strong>Coordination:</strong> Arms and legs together - short distances first.</li>
      <li><strong>Breathing:</strong> Integrate rhythmic breathing into the movement.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Playful Learning</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Animal names:</strong> "Swim like a frog" (breaststroke), "like a dolphin" (wave), "like a dog" (doggy paddle).</li>
      <li><strong>Treasure hunt:</strong> Pick up rings or toys from the bottom.</li>
      <li><strong>Rocket:</strong> Push off wall and glide as far as possible.</li>
      <li><strong>Sea otter:</strong> Float on back with a ball on the belly.</li>
      <li><strong>Starfish:</strong> Float on front and back like a starfish.</li>
    </ul>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-4">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Swim Badges as Motivation</h3>
    <p className="text-blue-700 dark:text-blue-300">
      Swimming badges provide great goals for children. Each badge is an achievement to celebrate 
      and motivates kids to keep improving. Check your local swimming organization for programs.
    </p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Teaching Tips</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Short sessions:</strong> 20-30 minutes is enough for small children.</li>
      <li><strong>Praise:</strong> Every small progress deserves praise and encouragement.</li>
      <li><strong>Be a role model:</strong> If you show fun in water, kids will have fun too.</li>
      <li><strong>No arm bands:</strong> Prefer kickboards or noodles - they don't force incorrect body position.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Kinder-Schwimmunterricht vorbereiten",
      description: "Bereite dich darauf vor, einem Kind das Schwimmen beizubringen.",
      checklist: [
        { text: "Lerne die 7 Stufen des Schwimmenlernens auswendig", checked: false },
        { text: "Bereite 3 spielerische Übungen für die Wassergewöhnung vor", checked: false },
        { text: "Informiere dich über Schwimmkurse und Schwimmabzeichen in deiner Nähe", checked: false },
        { text: "Übe, einfache Schwimmbewegungen kindgerecht zu erklären", checked: false }
      ]
    },
    en: {
      title: "Prepare Children's Swim Lessons",
      description: "Prepare to teach a child to swim.",
      checklist: [
        { text: "Memorize the 7 steps of learning to swim", checked: false },
        { text: "Prepare 3 playful exercises for water familiarization", checked: false },
        { text: "Research swim courses and swim badges near you", checked: false },
        { text: "Practice explaining simple swim movements in child-friendly terms", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "In welchem Alter lernen Kinder idealerweise das Schwimmen?", answer: "Das ideale Lernalter ist 4-6 Jahre. In diesem Alter haben Kinder die nötige Koordination und können Anweisungen folgen." },
      { question: "Was sind die 7 Stufen des Schwimmenlernens?", answer: "Wassergewöhnung → Untertauchen → Gleiten → Beinschlag → Armbewegung → Koordination → Atmung." },
      { question: "Warum werden Schwimmflügel nicht empfohlen?", answer: "Schwimmflügel erzwingen eine aufrechte Körperhaltung mit Armen zur Seite, was eine falsche Schwimmposition antrainiert. Besser sind Schwimmbretter oder Nudeln." }
    ],
    en: [
      { question: "At what age do children ideally learn to swim?", answer: "The ideal learning age is 4-6 years. At this age, children have the necessary coordination and can follow instructions." },
      { question: "What are the 7 steps of learning to swim?", answer: "Water familiarization → Submerging → Gliding → Leg kick → Arm movement → Coordination → Breathing." },
      { question: "Why are arm bands not recommended?", answer: "Arm bands force an upright body position with arms to the sides, which trains incorrect swimming posture. Kickboards or noodles are better." }
    ]
  }
};
