export const modificationsProps = {
  title: {
    de: "Modifikationen & Props",
    en: "Modifications & Props"
  },
  description: {
    de: "Lerne, wie du mit Hilfsmitteln und Anpassungen jede Pose sicher und effektiv gestalten kannst.",
    en: "Learn how to use props and modifications to make every pose safe and effective."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Modifikationen & Props</h2>
  
  <p className="text-lg leading-relaxed">
    Props (Hilfsmittel) sind keine Zeichen von Schwäche - sie sind Zeichen von Intelligenz. 
    Selbst erfahrene Yogis nutzen Blöcke, Gurte und Decken, um ihre Praxis zu vertiefen. 
    Modifikationen ermöglichen es jedem, unabhängig von Flexibilität oder Erfahrung, die 
    Vorteile jeder Pose zu genießen.
  </p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Die wichtigsten Props</h3>
    <div className="space-y-4 mt-3">
      <div>
        <h4 className="font-bold text-purple-800 dark:text-purple-200">Yoga-Blöcke</h4>
        <p className="text-purple-700 dark:text-purple-300">Aus Kork, Schaumstoff oder Holz. Sie bringen den Boden näher zu dir. Ideal für Vorbeugen, stehende Posen und sitzende Haltungen, wenn du den Boden nicht erreichst.</p>
      </div>
      <div>
        <h4 className="font-bold text-purple-800 dark:text-purple-200">Yoga-Gurt</h4>
        <p className="text-purple-700 dark:text-purple-300">Verlängert deine Arme. Perfekt für Beindehnungen, Schulteröffnungen und gebundene Posen, wenn du noch nicht flexibel genug bist.</p>
      </div>
      <div>
        <h4 className="font-bold text-purple-800 dark:text-purple-200">Decke / Bolster</h4>
        <p className="text-purple-700 dark:text-purple-300">Für Polsterung unter Knien, Hüften oder im Savasana. Ein Bolster (Yoga-Kissen) ist besonders für Yin Yoga und Restorative Yoga wichtig.</p>
      </div>
      <div>
        <h4 className="font-bold text-purple-800 dark:text-purple-200">Wand</h4>
        <p className="text-purple-700 dark:text-purple-300">Dein bester Freund für Balance-Posen und Inversionen. Kostenlos und immer verfügbar!</p>
      </div>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Beispiele für Modifikationen</h3>

  <div className="space-y-4">
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Vorbeuge (Uttanasana)</h4>
      <ul className="list-disc list-inside space-y-1 text-amber-700 dark:text-amber-300 text-sm">
        <li><strong>Volle Pose:</strong> Hände auf dem Boden neben den Füßen</li>
        <li><strong>Modifikation 1:</strong> Knie leicht beugen</li>
        <li><strong>Modifikation 2:</strong> Hände auf Blöcke stellen</li>
        <li><strong>Modifikation 3:</strong> Hände auf Schienbeine</li>
      </ul>
    </div>

    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Sitzende Posen</h4>
      <ul className="list-disc list-inside space-y-1 text-amber-700 dark:text-amber-300 text-sm">
        <li><strong>Problem:</strong> Knie höher als Hüften im Schneidersitz</li>
        <li><strong>Lösung:</strong> Auf eine gefaltete Decke oder einen Block setzen</li>
        <li><strong>Warum:</strong> Das Becken kippt nach vorne, die Wirbelsäule kann sich aufrichten</li>
      </ul>
    </div>

    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Downward Dog</h4>
      <ul className="list-disc list-inside space-y-1 text-amber-700 dark:text-amber-300 text-sm">
        <li><strong>Volle Pose:</strong> Fersen auf dem Boden, Beine gerade</li>
        <li><strong>Modifikation 1:</strong> Knie leicht beugen (Fokus auf geraden Rücken)</li>
        <li><strong>Modifikation 2:</strong> Hände auf Blöcke (bei Handgelenk-Problemen)</li>
        <li><strong>Modifikation 3:</strong> Puppy Pose (Knie auf dem Boden)</li>
      </ul>
    </div>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Wichtige Erinnerung</h3>
    <p className="text-blue-700 dark:text-blue-300">
      Die "vollständige" Pose ist nicht das Ziel - das richtige Gefühl im Körper ist das Ziel. 
      Wenn eine Modifikation dir die gleiche Dehnung und Stärkung ermöglicht, ohne Schmerzen, 
      dann IST das deine perfekte Pose. Props zu benutzen macht dich nicht weniger "yogisch" - 
      es macht dich klüger.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">DIY-Props für zu Hause</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Alternativen zu teuren Props</h3>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Statt Yoga-Block:</strong> Dickes Buch, stabile Schachtel oder aufgerolltes Handtuch</li>
      <li><strong>Statt Yoga-Gurt:</strong> Gürtel, Schal oder Handtuch</li>
      <li><strong>Statt Bolster:</strong> Festes Kissen, gerollte Decke</li>
      <li><strong>Statt Yoga-Matte:</strong> Teppich oder große Decke (rutschfest!)</li>
    </ul>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Modifications & Props</h2>
  
  <p className="text-lg leading-relaxed">
    Props are not a sign of weakness - they're a sign of intelligence. Even experienced yogis 
    use blocks, straps, and blankets to deepen their practice. Modifications allow everyone, 
    regardless of flexibility or experience, to enjoy the benefits of every pose.
  </p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Essential Props</h3>
    <div className="space-y-4 mt-3">
      <div>
        <h4 className="font-bold text-purple-800 dark:text-purple-200">Yoga Blocks</h4>
        <p className="text-purple-700 dark:text-purple-300">Made of cork, foam, or wood. They bring the floor closer to you. Ideal for forward bends, standing poses, and seated postures when you can't reach the floor.</p>
      </div>
      <div>
        <h4 className="font-bold text-purple-800 dark:text-purple-200">Yoga Strap</h4>
        <p className="text-purple-700 dark:text-purple-300">Extends your arms. Perfect for leg stretches, shoulder openers, and bound poses when you're not flexible enough yet.</p>
      </div>
      <div>
        <h4 className="font-bold text-purple-800 dark:text-purple-200">Blanket / Bolster</h4>
        <p className="text-purple-700 dark:text-purple-300">For cushioning under knees, hips, or in Savasana. A bolster is especially important for Yin Yoga and Restorative Yoga.</p>
      </div>
      <div>
        <h4 className="font-bold text-purple-800 dark:text-purple-200">Wall</h4>
        <p className="text-purple-700 dark:text-purple-300">Your best friend for balance poses and inversions. Free and always available!</p>
      </div>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Modification Examples</h3>

  <div className="space-y-4">
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Forward Fold (Uttanasana)</h4>
      <ul className="list-disc list-inside space-y-1 text-amber-700 dark:text-amber-300 text-sm">
        <li><strong>Full pose:</strong> Hands on the floor beside feet</li>
        <li><strong>Modification 1:</strong> Slightly bend knees</li>
        <li><strong>Modification 2:</strong> Place hands on blocks</li>
        <li><strong>Modification 3:</strong> Hands on shins</li>
      </ul>
    </div>

    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Seated Poses</h4>
      <ul className="list-disc list-inside space-y-1 text-amber-700 dark:text-amber-300 text-sm">
        <li><strong>Problem:</strong> Knees higher than hips in cross-legged position</li>
        <li><strong>Solution:</strong> Sit on a folded blanket or block</li>
        <li><strong>Why:</strong> The pelvis tilts forward, allowing the spine to straighten</li>
      </ul>
    </div>

    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Downward Dog</h4>
      <ul className="list-disc list-inside space-y-1 text-amber-700 dark:text-amber-300 text-sm">
        <li><strong>Full pose:</strong> Heels on the floor, legs straight</li>
        <li><strong>Modification 1:</strong> Slightly bend knees (focus on straight back)</li>
        <li><strong>Modification 2:</strong> Hands on blocks (for wrist issues)</li>
        <li><strong>Modification 3:</strong> Puppy Pose (knees on the floor)</li>
      </ul>
    </div>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Important Reminder</h3>
    <p className="text-blue-700 dark:text-blue-300">
      The "full" pose is not the goal - the right feeling in your body is. If a modification 
      gives you the same stretch and strengthening without pain, then that IS your perfect pose. 
      Using props doesn't make you less "yogic" - it makes you smarter.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">DIY Props for Home</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Alternatives to Expensive Props</h3>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Instead of yoga block:</strong> Thick book, sturdy box, or rolled-up towel</li>
      <li><strong>Instead of yoga strap:</strong> Belt, scarf, or towel</li>
      <li><strong>Instead of bolster:</strong> Firm pillow, rolled blanket</li>
      <li><strong>Instead of yoga mat:</strong> Carpet or large blanket (non-slip!)</li>
    </ul>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Props kennenlernen und nutzen",
      description: "Mache dich mit Hilfsmitteln vertraut und nutze sie ohne Scham.",
      checklist: [
        { text: "Besorge oder improvisiere mindestens 2 Props (Blöcke und Gurt/Handtuch)", checked: false },
        { text: "Übe Uttanasana (Vorbeuge) mit und ohne Block - spüre den Unterschied", checked: false },
        { text: "Setze dich auf eine gefaltete Decke im Schneidersitz und bemerke, wie sich die Wirbelsäule aufrichtet", checked: false }
      ]
    },
    en: {
      title: "Get to Know and Use Props",
      description: "Familiarize yourself with props and use them without shame.",
      checklist: [
        { text: "Get or improvise at least 2 props (blocks and strap/towel)", checked: false },
        { text: "Practice Uttanasana (Forward Fold) with and without a block - feel the difference", checked: false },
        { text: "Sit on a folded blanket in cross-legged position and notice how the spine straightens", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum sollte man Props im Yoga nicht als Schwäche betrachten?",
        answer: "Props sind Zeichen von Intelligenz, nicht Schwäche. Sie ermöglichen die richtige Ausrichtung, vertiefen die Praxis und verhindern Verletzungen. Selbst erfahrene Yogis nutzen sie."
      },
      {
        question: "Welche 4 Haupt-Props gibt es im Yoga?",
        answer: "Yoga-Blöcke, Yoga-Gurt, Decke/Bolster und die Wand."
      },
      {
        question: "Wie hilft eine gefaltete Decke beim Sitzen im Schneidersitz?",
        answer: "Sie erhöht die Hüften über die Knie, kippt das Becken nach vorne und ermöglicht es der Wirbelsäule, sich aufzurichten."
      }
    ],
    en: [
      {
        question: "Why should props not be seen as weakness in yoga?",
        answer: "Props are a sign of intelligence, not weakness. They enable proper alignment, deepen practice, and prevent injuries. Even experienced yogis use them."
      },
      {
        question: "What are the 4 main yoga props?",
        answer: "Yoga blocks, yoga strap, blanket/bolster, and the wall."
      },
      {
        question: "How does a folded blanket help when sitting cross-legged?",
        answer: "It raises the hips above the knees, tilts the pelvis forward, and allows the spine to straighten."
      }
    ]
  }
};
