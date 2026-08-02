export const freestyle = {
  title: {
    de: "Kraulschwimmen - Der schnellste Schwimmstil",
    en: "Freestyle - The Fastest Swimming Style"
  },
  description: {
    de: "Meistere das Kraulschwimmen: Armzug, Beinschlag, Atmung und Körperrotation.",
    en: "Master freestyle swimming: arm pull, kick, breathing, and body rotation."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Kraulschwimmen - Der schnellste Schwimmstil</h2>

  <p className="text-lg leading-relaxed">
    Kraulschwimmen (auch Freistil genannt) ist der schnellste und effizienteste aller Schwimmstile. 
    Die abwechselnde Armbewegung und der kontinuierliche Beinschlag erzeugen einen gleichmäßigen, 
    kraftvollen Vortrieb. Es ist der Stil, den Profis bei Freistilrennen wählen.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Warum Kraul lernen?</h3>
    <p className="text-blue-700 dark:text-blue-300">
      Kraulschwimmen ist der effizienteste Schwimmstil - du legst mit dem geringsten Energieaufwand 
      die größte Strecke zurück. Der Stil eignet sich für alle Distanzen, vom 50-Meter-Sprint bis 
      zum Open-Water-Marathon. Es ist auch die Grundlage für Triathlon und viele andere Wassersportarten.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Der Armzug (Pull & Recovery)</h3>

  <p className="leading-relaxed">
    Der Armzug beim Kraulschwimmen ist die Hauptantriebsquelle. Die Arme arbeiten abwechselnd - 
    während ein Arm unter Wasser zieht, erholt sich der andere über Wasser.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Unterwasser-Zugphase</h4>
      <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300 text-sm">
        <li><strong>Eintauchen:</strong> Die Hand taucht mit gestrecktem Arm vor der Schulter ein, Fingerspitzen zuerst.</li>
        <li><strong>Fassen:</strong> Die Hand greift das Wasser und beginnt den Zug nach hinten.</li>
        <li><strong>Ziehen:</strong> Der Arm zieht in einer S-Kurve unter dem Körper durch. Der Ellenbogen bleibt hoch.</li>
        <li><strong>Drücken:</strong> Am Ende des Zugs wird das Wasser nach hinten gedrückt, bis der Arm am Oberschenkel ankommt.</li>
      </ul>
    </div>
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Überwasser-Erholungsphase</h4>
      <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300 text-sm">
        <li><strong>Austritt:</strong> Der Ellenbogen führt und kommt als erstes aus dem Wasser.</li>
        <li><strong>Schwung:</strong> Der Arm schwingt entspannt nach vorne, der Ellenbogen bleibt hoch.</li>
        <li><strong>Eintritt:</strong> Die Hand taucht vor der Schulter wieder ein, gestreckt und entspannt.</li>
        <li><strong>Rotation:</strong> Die Schulter dreht sich mit der Armbewegung natürlich mit.</li>
      </ul>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Der Beinschlag (Flutter Kick)</h3>

  <p className="leading-relaxed">
    Der Kraulbeinschlag ist ein schnelles, alternierendes Auf- und Ab-Schlagen der Beine. 
    Er stabilisiert die Wasserlage und erzeugt zusätzlichen Vortrieb.
  </p>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-4">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Technik des Beinschlags</h3>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Die Bewegung kommt aus der Hüfte, nicht aus dem Knie.</li>
      <li>Die Beine bleiben relativ gestreckt mit leicht gebeugten Knien.</li>
      <li>Die Füße sind locker und leicht nach innen gedreht (Zehenspitzen zeigen zueinander).</li>
      <li>Die Amplitude (Schlaggröße) sollte klein sein - etwa 30-40 cm.</li>
      <li>Der 6-Beat-Kick (6 Beinschläge pro Armzyklus) ist Standard, aber 2-Beat ist effizienter für lange Strecken.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Atmung</h3>

  <p className="leading-relaxed">
    Die Atmung beim Kraulschwimmen ist eine der größten Herausforderungen. Der Kopf wird seitlich 
    zum Atmen gedreht, nicht gehoben. Das erfordert Übung und gutes Timing.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-4">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Atemtechnik</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Kopfdrehung:</strong> Der Kopf wird zur Seite gedreht (nicht gehoben!), wenn der Arm auf der Atemseite aus dem Wasser kommt.</li>
      <li><strong>Bugwelle:</strong> Durch deine Vorwärtsbewegung entsteht eine Bugwelle. In der Mulde neben deinem Kopf ist die Wasseroberfläche niedriger - dort atmest du ein.</li>
      <li><strong>Ein Auge unter Wasser:</strong> Beim seitlichen Atmen sollte idealerweise ein Auge unter Wasser bleiben.</li>
      <li><strong>Bilateral atmen:</strong> Übe, auf beiden Seiten zu atmen (alle 3 Züge wechseln), um eine symmetrische Technik zu entwickeln.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Körperrotation</h3>

  <p className="leading-relaxed">
    Die Körperrotation ist ein oft übersehenes, aber entscheidendes Element des Kraulschwimmens. 
    Der Körper rotiert um die Längsachse, was den Armzug verlängert, die Erholungsphase erleichtert 
    und den Wasserwiderstand reduziert.
  </p>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-4">
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li>Die Rotation beträgt etwa 30-45 Grad zu jeder Seite.</li>
      <li>Der Kopf bleibt still und dreht sich nur zum Atmen.</li>
      <li>Die Rotation wird durch den Armzug und die Hüftbewegung angetrieben.</li>
      <li>Eine gute Rotation reduziert die Belastung der Schultern erheblich.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Häufige Fehler</h3>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Vermeide diese Fehler!</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li><strong>Kopf heben statt drehen:</strong> Der Kopf wird nur seitlich gedreht, nie angehoben.</li>
      <li><strong>Überkreuzen der Mittellinie:</strong> Die Hände sollten vor der jeweiligen Schulter eintauchen, nicht über die Körpermitte.</li>
      <li><strong>Knie-dominierter Beinschlag:</strong> Die Bewegung muss aus der Hüfte kommen.</li>
      <li><strong>Flache Lage ohne Rotation:</strong> Ohne Körperrotation verlierst du Reichweite und belastest die Schultern.</li>
      <li><strong>Luft anhalten:</strong> Unter Wasser kontinuierlich ausatmen, nicht die Luft anhalten.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Übungen zum Üben</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Catch-up Drill:</strong> Ein Arm bleibt vorne gestreckt, bis der andere ihn berührt. 
      Perfekt für Timing und Rotation.</li>
      <li><strong>Fingertip Drag:</strong> Beim Überwasserschwung die Fingerspitzen über das Wasser ziehen. 
      Trainiert hohe Ellenbogen.</li>
      <li><strong>Seitenlage-Kick:</strong> Auf der Seite liegend nur mit Beinschlag schwimmen. 
      Verbessert Balance und Rotation.</li>
      <li><strong>Atmen üben:</strong> Mit dem Gesicht im Wasser stehen und den Kopf seitlich zum Atmen drehen. 
      Gewöhne dich an die Bewegung.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Freestyle - The Fastest Swimming Style</h2>

  <p className="text-lg leading-relaxed">
    Freestyle (also called front crawl) is the fastest and most efficient of all swimming styles. 
    The alternating arm movement and continuous kick generate smooth, powerful propulsion. It's the 
    style professionals choose in freestyle races.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Why Learn Freestyle?</h3>
    <p className="text-blue-700 dark:text-blue-300">
      Freestyle is the most efficient swimming style - you cover the greatest distance with the 
      least energy expenditure. It's suitable for all distances, from the 50-meter sprint to 
      open-water marathon. It's also the foundation for triathlon and many other water sports.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Arm Pull (Pull & Recovery)</h3>

  <p className="leading-relaxed">
    The freestyle arm pull is the main source of propulsion. Arms work alternately - while one arm 
    pulls underwater, the other recovers above water.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Underwater Pull Phase</h4>
      <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300 text-sm">
        <li><strong>Entry:</strong> Hand enters with extended arm in front of the shoulder, fingertips first.</li>
        <li><strong>Catch:</strong> The hand grips the water and begins pulling backward.</li>
        <li><strong>Pull:</strong> The arm pulls in an S-curve under the body. The elbow stays high.</li>
        <li><strong>Push:</strong> At the end of the pull, water is pushed backward until the arm reaches the thigh.</li>
      </ul>
    </div>
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Above-Water Recovery</h4>
      <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300 text-sm">
        <li><strong>Exit:</strong> The elbow leads and comes out of the water first.</li>
        <li><strong>Swing:</strong> The arm swings forward relaxed, elbow stays high.</li>
        <li><strong>Entry:</strong> The hand re-enters in front of the shoulder, extended and relaxed.</li>
        <li><strong>Rotation:</strong> The shoulder naturally rotates with the arm movement.</li>
      </ul>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Kick (Flutter Kick)</h3>

  <p className="leading-relaxed">
    The flutter kick is a rapid, alternating up-and-down movement of the legs. 
    It stabilizes body position and generates additional propulsion.
  </p>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-4">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Kick Technique</h3>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Movement originates from the hips, not the knees.</li>
      <li>Legs stay relatively straight with slightly bent knees.</li>
      <li>Feet are relaxed and slightly turned inward (toes pointing toward each other).</li>
      <li>Amplitude should be small - about 30-40 cm.</li>
      <li>6-beat kick (6 kicks per arm cycle) is standard, but 2-beat is more efficient for long distances.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Breathing</h3>

  <p className="leading-relaxed">
    Breathing in freestyle is one of the biggest challenges. The head is turned to the side 
    to breathe, not lifted. This requires practice and good timing.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-4">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Breathing Technique</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Head rotation:</strong> Turn the head to the side (don't lift it!) when the arm on the breathing side exits the water.</li>
      <li><strong>Bow wave:</strong> Your forward motion creates a bow wave. In the trough beside your head, the water surface is lower - that's where you breathe in.</li>
      <li><strong>One eye underwater:</strong> When breathing to the side, ideally one eye should remain underwater.</li>
      <li><strong>Bilateral breathing:</strong> Practice breathing on both sides (alternating every 3 strokes) to develop symmetrical technique.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Body Rotation</h3>

  <p className="leading-relaxed">
    Body rotation is an often overlooked but crucial element of freestyle. The body rotates along 
    its longitudinal axis, which lengthens the arm pull, facilitates recovery, and reduces drag.
  </p>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-4">
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li>Rotation is about 30-45 degrees to each side.</li>
      <li>The head stays still and only turns for breathing.</li>
      <li>Rotation is driven by the arm pull and hip movement.</li>
      <li>Good rotation significantly reduces shoulder strain.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Common Errors</h3>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Avoid These Mistakes!</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li><strong>Lifting instead of turning head:</strong> The head is only turned to the side, never lifted.</li>
      <li><strong>Crossing the centerline:</strong> Hands should enter in front of the respective shoulder, not cross body midline.</li>
      <li><strong>Knee-driven kick:</strong> Movement must come from the hips.</li>
      <li><strong>Flat position without rotation:</strong> Without body rotation you lose reach and stress shoulders.</li>
      <li><strong>Holding breath:</strong> Exhale continuously underwater, don't hold your breath.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Practice Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Catch-up Drill:</strong> One arm stays extended in front until the other touches it. 
      Perfect for timing and rotation.</li>
      <li><strong>Fingertip Drag:</strong> During recovery, drag fingertips along the water surface. 
      Trains high elbow position.</li>
      <li><strong>Side Kick:</strong> Swim on your side using only kick. 
      Improves balance and rotation.</li>
      <li><strong>Breathing practice:</strong> Stand in water with face submerged and practice turning 
      head to the side to breathe. Get used to the movement.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Kraulschwimmen üben",
      description: "Arbeite an den einzelnen Elementen des Kraulschwimmens.",
      checklist: [
        { text: "Übe den Catch-up Drill für 4 Bahnen", checked: false },
        { text: "Schwimme 4 Bahnen mit Fokus auf bilaterale Atmung (alle 3 Züge)", checked: false },
        { text: "Übe den Seitenlage-Kick für 2 Bahnen pro Seite", checked: false },
        { text: "Schwimme 8 Bahnen Kraul mit bewusster Körperrotation", checked: false }
      ]
    },
    en: {
      title: "Practice Freestyle",
      description: "Work on the individual elements of freestyle swimming.",
      checklist: [
        { text: "Practice the catch-up drill for 4 lengths", checked: false },
        { text: "Swim 4 lengths focusing on bilateral breathing (every 3 strokes)", checked: false },
        { text: "Practice the side kick drill for 2 lengths per side", checked: false },
        { text: "Swim 8 lengths freestyle with conscious body rotation", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Woher sollte die Bewegung beim Kraulbeinschlag kommen?",
        answer: "Die Bewegung sollte aus der Hüfte kommen, nicht aus dem Knie. Die Beine bleiben relativ gestreckt."
      },
      {
        question: "Was ist bilaterale Atmung und warum ist sie wichtig?",
        answer: "Bilaterale Atmung bedeutet, abwechselnd auf beiden Seiten zu atmen (z.B. alle 3 Züge). Sie hilft, eine symmetrische Technik zu entwickeln."
      },
      {
        question: "Welchen Zweck hat die Körperrotation beim Kraulschwimmen?",
        answer: "Die Körperrotation verlängert den Armzug, erleichtert die Erholungsphase, reduziert den Wasserwiderstand und schont die Schultern."
      }
    ],
    en: [
      {
        question: "Where should the movement in the flutter kick originate from?",
        answer: "Movement should come from the hips, not the knees. Legs stay relatively straight."
      },
      {
        question: "What is bilateral breathing and why is it important?",
        answer: "Bilateral breathing means alternating breathing on both sides (e.g., every 3 strokes). It helps develop symmetrical technique."
      },
      {
        question: "What purpose does body rotation serve in freestyle?",
        answer: "Body rotation lengthens the arm pull, facilitates recovery, reduces drag, and protects the shoulders."
      }
    ]
  }
};
