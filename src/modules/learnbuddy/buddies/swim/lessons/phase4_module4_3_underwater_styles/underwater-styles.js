export const underwaterStyles = {
  title: {
    de: "Unterwasser-Schwimmstile",
    en: "Underwater Swimming Styles"
  },
  description: {
    de: "Lerne verschiedene Unterwasser-Schwimmtechniken: Delfinkick, Brustzug und Unterwasserkraul.",
    en: "Learn different underwater swimming techniques: dolphin kick, breaststroke pull, and underwater crawl."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Unterwasser-Schwimmstile</h2>

  <p className="text-lg leading-relaxed">
    Unterwasserschwimmen ist eine eigene Disziplin, die spezielle Techniken erfordert. Ohne 
    den Widerstand der Wasseroberfläche kann man unter Wasser überraschend schnell und effizient 
    schwimmen - vorausgesetzt, man beherrscht die richtigen Techniken.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Warum Unterwasserschwimmen?</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Reduzierter Wellenwiderstand unter der Oberfläche</li>
      <li>Essentiell für Starts und Wenden im Wettkampf</li>
      <li>Verbessert die Körperkontrolle und das Wassergefühl</li>
      <li>Grundlage für Apnoe-Tauchen und Rettungsschwimmen</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Der Unterwasser-Delfinkick</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Die schnellste Unterwassertechnik</h3>
    <p className="text-green-700 dark:text-green-300 mb-3">
      Der Delfinkick in Streamline-Position ist die effizienteste Art, sich unter Wasser fortzubewegen:
    </p>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Position:</strong> Arme gestreckt über dem Kopf, Hände übereinander, Körper gestreckt.</li>
      <li><strong>Welle:</strong> Die Wellenbewegung beginnt in der Brust und läuft bis zu den Füßen.</li>
      <li><strong>Kick:</strong> Der Abwärtskick erzeugt den Hauptvortrieb.</li>
      <li><strong>Frequenz:</strong> Schnelle, kleine Kicks für Geschwindigkeit; langsame, große Kicks für Strecke.</li>
      <li><strong>Seiten-Delfin:</strong> Auf der Seite liegend kann der Delfinkick noch effizienter sein.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Der Unterwasser-Brustzug</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Der Pullout</h3>
    <p className="text-amber-700 dark:text-amber-300 mb-3">
      Nach dem Start oder der Wende beim Brustschwimmen darfst du einen speziellen Unterwasserzug machen:
    </p>
    <ol className="list-decimal list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li>Gleite in Streamline-Position.</li>
      <li>Ein kraftvoller Armzug bis zu den Oberschenkeln (wie Butterfly unter Wasser).</li>
      <li>Ein Delfinkick während des Armzugs.</li>
      <li>Arme zurück in Streamline.</li>
      <li>Ein Brust-Beinschlag zum Auftauchen.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Unterwasser-Kraul</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Für längere Unterwasserstrecken (z.B. beim Streckentauchen) kann der modifizierte Kraulzug 
      unter Wasser verwendet werden:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Lange, kraftvolle Armzüge unter Wasser.</li>
      <li>Arme werden unter Wasser nach vorne gebracht (nicht über Wasser).</li>
      <li>Kombiniert mit leichtem Beinschlag.</li>
      <li>Langsamer aber energieeffizienter als der Delfinkick.</li>
    </ul>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-4">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Sicherheitshinweise</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li>Nie alleine Unterwasserschwimmen üben!</li>
      <li>Kenne deine Grenzen - tauche auf, wenn du den Drang zum Atmen spürst.</li>
      <li>Nie hyperventilieren vor dem Tauchen.</li>
      <li>Übe in überwachten Becken mit Rettungsschwimmer.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Übungen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Delfinkick-Distanz:</strong> Stoße von der Wand ab und schwimme so weit wie möglich mit Delfinkicks unter Wasser.</li>
      <li><strong>Brust-Pullout:</strong> Übe den Unterwasser-Brustzug von der Wand nach jedem Abstoß.</li>
      <li><strong>Seiten-Delfin:</strong> Übe Delfinkicks auf der Seite liegend unter Wasser.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Underwater Swimming Styles</h2>

  <p className="text-lg leading-relaxed">
    Underwater swimming is its own discipline requiring special techniques. Without the resistance 
    of the water surface, you can swim surprisingly fast and efficiently underwater - provided 
    you master the right techniques.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Why Underwater Swimming?</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Reduced wave resistance below the surface</li>
      <li>Essential for starts and turns in competition</li>
      <li>Improves body control and water feel</li>
      <li>Foundation for freediving and rescue swimming</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Underwater Dolphin Kick</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">The Fastest Underwater Technique</h3>
    <p className="text-green-700 dark:text-green-300 mb-3">
      The dolphin kick in streamline position is the most efficient way to move underwater:
    </p>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Position:</strong> Arms extended overhead, hands stacked, body streamlined.</li>
      <li><strong>Wave:</strong> The wave motion starts in the chest and runs to the feet.</li>
      <li><strong>Kick:</strong> The downward kick generates main propulsion.</li>
      <li><strong>Frequency:</strong> Fast, small kicks for speed; slow, large kicks for distance.</li>
      <li><strong>Side dolphin:</strong> Lying on your side, the dolphin kick can be even more efficient.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Underwater Breaststroke Pull</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">The Pullout</h3>
    <p className="text-amber-700 dark:text-amber-300 mb-3">
      After a start or turn in breaststroke, you may perform a special underwater pull:
    </p>
    <ol className="list-decimal list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li>Glide in streamline position.</li>
      <li>One powerful arm pull to the thighs (like butterfly underwater).</li>
      <li>One dolphin kick during the arm pull.</li>
      <li>Arms back to streamline.</li>
      <li>One breaststroke kick to surface.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Underwater Crawl</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      For longer underwater distances (e.g., distance diving), a modified crawl stroke 
      can be used underwater:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Long, powerful arm strokes underwater.</li>
      <li>Arms are brought forward underwater (not above water).</li>
      <li>Combined with a light kick.</li>
      <li>Slower but more energy-efficient than the dolphin kick.</li>
    </ul>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-4">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Safety Notes</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li>Never practice underwater swimming alone!</li>
      <li>Know your limits - surface when you feel the urge to breathe.</li>
      <li>Never hyperventilate before diving.</li>
      <li>Practice in supervised pools with lifeguards.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Dolphin kick distance:</strong> Push off the wall and swim as far as possible with dolphin kicks underwater.</li>
      <li><strong>Breaststroke pullout:</strong> Practice the underwater breaststroke pull from the wall after each push-off.</li>
      <li><strong>Side dolphin:</strong> Practice dolphin kicks lying on your side underwater.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Unterwasser-Schwimmstile üben",
      description: "Übe verschiedene Unterwasser-Schwimmtechniken.",
      checklist: [
        { text: "Schwimme 25m unter Wasser mit Delfinkicks (mit Aufsicht!)", checked: false },
        { text: "Übe den Brust-Pullout 10 Mal nach Wandabstoß", checked: false },
        { text: "Vergleiche Delfinkick auf Bauch vs. auf der Seite", checked: false },
        { text: "Übe Unterwasser-Kraul für kurze Strecken", checked: false }
      ]
    },
    en: {
      title: "Practice Underwater Swimming Styles",
      description: "Practice different underwater swimming techniques.",
      checklist: [
        { text: "Swim 25m underwater with dolphin kicks (with supervision!)", checked: false },
        { text: "Practice the breaststroke pullout 10 times after wall push-off", checked: false },
        { text: "Compare dolphin kick on stomach vs. on side", checked: false },
        { text: "Practice underwater crawl for short distances", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Welche ist die schnellste Unterwasser-Schwimmtechnik?",
        answer: "Der Delfinkick in Streamline-Position ist die schnellste und effizienteste Unterwassertechnik."
      },
      {
        question: "Was ist ein Brust-Pullout und wann wird er verwendet?",
        answer: "Ein spezieller Unterwasserzug beim Brustschwimmen nach Start oder Wende: Gleiten, kraftvoller Armzug, Delfinkick, Arme zurück in Streamline, Brust-Beinschlag zum Auftauchen."
      },
      {
        question: "Warum ist Unterwasserschwimmen schneller als Oberflächenschwimmen?",
        answer: "Unter Wasser gibt es keinen Wellenwiderstand, der an der Oberfläche erheblich bremst. Deshalb kann man unter Wasser schneller gleiten."
      }
    ],
    en: [
      {
        question: "What is the fastest underwater swimming technique?",
        answer: "The dolphin kick in streamline position is the fastest and most efficient underwater technique."
      },
      {
        question: "What is a breaststroke pullout and when is it used?",
        answer: "A special underwater pull in breaststroke after start or turn: glide, powerful arm pull, dolphin kick, arms back to streamline, breaststroke kick to surface."
      },
      {
        question: "Why is underwater swimming faster than surface swimming?",
        answer: "Underwater there's no wave resistance, which significantly slows you at the surface. That's why you can glide faster underwater."
      }
    ]
  }
};
