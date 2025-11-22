export const swimsuit = {
  title: {
    de: "Schwimmanzug - Funktionalität vor Ästhetik",
    en: "Swimsuit - Functionality Over Aesthetics"
  },
  description: {
    de: "Wähle den richtigen Badeanzug/Badehose für Training: Material, Passform und Pflege.",
    en: "Choose the right swimsuit for training: Material, fit, and care."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Schwimmanzug - Funktionalität vor Ästhetik</h2>
  
  <p className="text-lg leading-relaxed">
    Dein Schwimmanzug ist dein Trainingspartner. Er sollte bequem sein, gut sitzen und langlebig 
    sein - Ästhetik ist zweitrangig. Für Wettkämpfe gibt es Tech-Suits, aber für Training reicht 
    Funktionsbekleidung.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Material: Polyester vs. Lycra</h3>
    
    <p className="text-blue-700 dark:text-blue-300 mb-4">
      Das Material bestimmt Haltbarkeit und Komfort.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Polyester</h4>
        <p className="text-blue-700 dark:text-blue-300 text-sm">
          <strong>Pros:</strong> Haltbar, chlorbeständig, trocknet schnell.<br/>
          <strong>Cons:</strong> Weniger dehnbar.<br/>
          <strong>Für:</strong> Intensives Training, langes Leben.
        </p>
      </div>

      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Lycra/Spandex</h4>
        <p className="text-blue-700 dark:text-blue-300 text-sm">
          <strong>Pros:</strong> Bequem, dehnbar, weich.<br/>
          <strong>Cons:</strong> Verschleißt schneller durch Chlor.<br/>
          <strong>Für:</strong> Freizeit, Komfort.
        </p>
      </div>
    </div>

    <p className="text-blue-700 dark:text-blue-300 mt-4">
      Empfehlung: Polyester für regelmäßiges Training - hält Chlor besser aus.
    </p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Passform: Eng, aber nicht einschnürend</h3>
    
    <p className="text-green-700 dark:text-green-300 mb-4">
      Der Anzug sollte wie eine zweite Haut sitzen - eng für Hydrodynamik, aber atmungsaktiv.
    </p>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">Tipps für die richtige Größe:</h4>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Eng, aber bequem:</strong> Du solltest dich frei bewegen können, ohne Einschnürung.</li>
      <li><strong>Schultern und Brust:</strong> Kein Reiben, gute Bewegungsfreiheit für Arme.</li>
      <li><strong>Beine und Hüfte:</strong> Hohe Beinausschnitte für weniger Widerstand.</li>
      <li><strong>Test:</strong> Anprobe mit Bewegung - Sit-Ups, Armkreisen.</li>
    </ul>

    <div className="bg-amber-50 dark:bg-amber-900/40 p-4 rounded-lg mt-4">
      <p className="text-amber-800 dark:text-amber-200 font-semibold">
        💡 Frauen: Einteiliger Anzug für Training. Bikini nur Freizeit.
      </p>
    </div>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-6">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Training vs. Wettkampf</h3>
    
    <p className="text-purple-700 dark:text-purple-300 mb-4">
      Unterschiedliche Anzüge für verschiedene Zwecke.
    </p>

    <div className="space-y-4">
      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Training</h4>
        <p className="text-purple-700 dark:text-purple-300">
          Funktional, bequem, langlebig. Kein Bedarf für Tech-Suits - zu teuer und zerstörerisch.
        </p>
      </div>

      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Wettkampf (Tech-Suit)</h4>
        <p className="text-purple-700 dark:text-purple-300">
          Kompressionsstoffe für mehr Geschwindigkeit. Nur für Wettkämpfe - nicht für Training!
        </p>
      </div>
    </div>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Pflege: Chlor entfernen</h3>
    
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Nach jedem Bad:</strong> Mit Süßwasser abspülen.</li>
      <li><strong>Trocknen:</strong> An der Luft, nicht im Trockner.</li>
      <li><strong>Lagern:</strong> Kühl, trocken, flach.</li>
      <li><strong>Waschen:</strong> Handwäsche mit mildem Seife, alle 5-10 Bäder.</li>
      <li><strong>Ersatz:</strong> 2-3 Anzüge rotieren, um Verschleiß zu vermeiden.</li>
    </ul>

    <div className="bg-red-50 dark:bg-red-900/40 p-4 rounded-lg mt-4">
      <p className="text-red-700 dark:text-red-300 font-semibold">
        ⚠️ Chlor zerstört elastische Fasern - regelmäßige Pflege verlängert die Lebensdauer!
      </p>
    </div>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Praktische Tipps</h3>
    
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Anprobe:</strong> Im Geschäft mit Bewegung testen.</li>
      <li><strong>Budget:</strong> 20-40€ für guten Training-Anzug.</li>
      <li><strong>Männer:</strong> Badehose mit Kappe für weniger Widerstand.</li>
      <li><strong>Frauen:</strong> Hochschnitt für Bewegungsfreiheit.</li>
    </ul>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Swimsuit - Functionality Over Aesthetics</h2>
  
  <p className="text-lg leading-relaxed">
    Your swimsuit is your training partner. It should be comfortable, fit well, and be durable - 
    aesthetics are secondary. For competitions, there are tech suits, but for training, functional 
    clothing suffices.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Material: Polyester vs. Lycra</h3>
    
    <p className="text-blue-700 dark:text-blue-300 mb-4">
      Material determines durability and comfort.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Polyester</h4>
        <p className="text-blue-700 dark:text-blue-300 text-sm">
          <strong>Pros:</strong> Durable, chlorine-resistant, quick-drying.<br/>
          <strong>Cons:</strong> Less stretchy.<br/>
          <strong>For:</strong> Intense training, long life.
        </p>
      </div>

      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Lycra/Spandex</h4>
        <p className="text-blue-700 dark:text-blue-300 text-sm">
          <strong>Pros:</strong> Comfortable, stretchy, soft.<br/>
          <strong>Cons:</strong> Wears faster from chlorine.<br/>
          <strong>For:</strong> Recreation, comfort.
        </p>
      </div>
    </div>

    <p className="text-blue-700 dark:text-blue-300 mt-4">
      Recommendation: Polyester for regular training - better chlorine resistance.
    </p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Fit: Tight, But Not Constricting</h3>
    
    <p className="text-green-700 dark:text-green-300 mb-4">
      The suit should fit like a second skin - tight for hydrodynamics, but breathable.
    </p>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">Tips for Right Size:</h4>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Tight but comfortable:</strong> You should move freely without constriction.</li>
      <li><strong>Shoulders and Chest:</strong> No rubbing, good arm freedom.</li>
      <li><strong>Legs and Hips:</strong> High leg cuts for less drag.</li>
      <li><strong>Test:</strong> Try with movement - sit-ups, arm circles.</li>
    </ul>

    <div className="bg-amber-50 dark:bg-amber-900/40 p-4 rounded-lg mt-4">
      <p className="text-amber-800 dark:text-amber-200 font-semibold">
        💡 Women: One-piece for training. Bikini for leisure only.
      </p>
    </div>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-6">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Training vs. Competition</h3>
    
    <p className="text-purple-700 dark:text-purple-300 mb-4">
      Different suits for different purposes.
    </p>

    <div className="space-y-4">
      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Training</h4>
        <p className="text-purple-700 dark:text-purple-300">
          Functional, comfortable, durable. No need for tech suits - too expensive and destructive.
        </p>
      </div>

      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Competition (Tech-Suit)</h4>
        <p className="text-purple-700 dark:text-purple-300">
          Compression fabrics for more speed. Only for competitions - not training!
        </p>
      </div>
    </div>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Care: Remove Chlorine</h3>
    
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>After Each Swim:</strong> Rinse with fresh water.</li>
      <li><strong>Dry:</strong> Air dry, no dryer.</li>
      <li><strong>Store:</strong> Cool, dry, flat.</li>
      <li><strong>Wash:</strong> Hand wash with mild soap every 5-10 swims.</li>
      <li><strong>Rotate:</strong> 2-3 suits to avoid wear.</li>
    </ul>

    <div className="bg-red-50 dark:bg-red-900/40 p-4 rounded-lg mt-4">
      <p className="text-red-700 dark:text-red-300 font-semibold">
        ⚠️ Chlor destroys elastic fibers - regular care extends life!
      </p>
    </div>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Practical Tips</h3>
    
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Fitting:</strong> Test in store with movement.</li>
      <li><strong>Budget:</strong> 20-40€ for good training suit.</li>
      <li><strong>Men:</strong> Briefs with cap for less drag.</li>
      <li><strong>Women:</strong> High-cut for freedom.</li>
    </ul>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Deinen Schwimmanzug wählen",
      description: "Finde den passenden Anzug für dein Training.",
      checklist: [
        { text: "Material vergleichen: Polyester vs. Lycra", checked: false },
        { text: "Passform testen: Eng, aber bequem", checked: false },
        { text: "Training vs. Wettkampf unterscheiden", checked: false },
        { text: "Pflegetipps anwenden: Abspülen nach Gebrauch", checked: false }
      ]
    },
    en: {
      title: "Choose Your Swimsuit",
      description: "Find the right suit for training.",
      checklist: [
        { text: "Compare materials: Polyester vs. Lycra", checked: false },
        { text: "Test fit: Tight but comfortable", checked: false },
        { text: "Distinguish training vs. competition", checked: false },
        { text: "Apply care: Rinse after use", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Welches Material ist chlorbeständiger?",
        answer: "Polyester - es ist haltbarer und trocknet schneller, ideal für regelmäßiges Training."
      },
      {
        question: "Wie sollte ein Training-Anzug sitzen?",
        answer: "Eng wie eine zweite Haut, aber nicht einschnürend - gute Bewegungsfreiheit und kein Reiben."
      },
      {
        question: "Wann verwendet man Tech-Suits?",
        answer: "Nur für Wettkämpfe - sie sind teuer und zerstörerisch für tägliches Training."
      },
      {
        question: "Wie pflegt man den Anzug?",
        answer: "Mit Süßwasser abspülen, an der Luft trocknen, handwaschen alle 5-10 Bäder und rotieren."
      }
    ],
    en: [
      {
        question: "Which material is more chlorine-resistant?",
        answer: "Polyester - it's more durable and quick-drying, ideal for regular training."
      },
      {
        question: "How should a training suit fit?",
        answer: "Tight like a second skin, but not constricting - good freedom and no rubbing."
      },
      {
        question: "When do you use tech suits?",
        answer: "Only for competitions - they're expensive and destructive for daily training."
      },
      {
        question: "How do you care for the suit?",
        answer: "Rinse with fresh water, air dry, hand wash every 5-10 swims, and rotate."
      }
    ]
  }
};
