export const dive = {
  title: {
    de: "Kopfsprung - Der richtige Einstieg ins Wasser",
    en: "Dive - The Proper Entry into Water"
  },
  description: {
    de: "Lerne den Kopfsprung: Grundposition, Absprung, Flugphase, Eintauchen und Unterwasserphase.",
    en: "Learn diving: basic position, takeoff, flight phase, entry, and underwater phase."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Kopfsprung - Der richtige Einstieg ins Wasser</h2>

  <p className="text-lg leading-relaxed">
    Der Kopfsprung ist eine grundlegende Fähigkeit im Schwimmsport. Er ermöglicht einen schnellen 
    und effizienten Start ins Wasser und bildet die Basis für Wettkampfstarts. Das Erlernen 
    erfordert Überwindung, aber mit der richtigen Technik ist es sicher und elegant.
  </p>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Sicherheitshinweis</h3>
    <p className="text-red-700 dark:text-red-300">
      Kopfsprünge nur in Becken mit ausreichender Tiefe (mindestens 1,80m) und am Startblock oder 
      Beckenrand durchführen. Nie in unbekannte Gewässer springen! Immer erst die Wassertiefe prüfen. 
      Anfänger sollten immer unter Aufsicht üben.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Die Grundposition</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Füße:</strong> Zehen greifen über die Beckenkante, Füße hüftbreit auseinander.</li>
      <li><strong>Knie:</strong> Leicht gebeugt, bereit zum Absprung.</li>
      <li><strong>Oberkörper:</strong> Nach vorne geneigt, Arme nach vorne-oben gestreckt.</li>
      <li><strong>Kopf:</strong> Zwischen den Armen, Blick auf den Eintauchpunkt im Wasser.</li>
      <li><strong>Hände:</strong> Übereinander gelegt, Daumen verschränkt (Streamline).</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Der Absprung</h3>

  <p className="leading-relaxed">
    Der Absprung ist der entscheidende Moment. Er muss kraftvoll sein, aber kontrolliert:
  </p>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-4">
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Gewichtsverlagerung:</strong> Verlagere dein Gewicht langsam nach vorne über die Zehenspitzen.</li>
      <li><strong>Abstoß:</strong> Drücke dich mit den Beinen kraftvoll nach vorne-oben ab.</li>
      <li><strong>Arme führen:</strong> Die Arme zeigen den Weg - sie sind gestreckt in Sprungrichtung.</li>
      <li><strong>Streckung:</strong> Im Moment des Abhebens den ganzen Körper strecken.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Die Flugphase</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      In der Flugphase ist der Körper vollständig gestreckt und bildet eine Linie von den 
      Fingerspitzen bis zu den Zehenspitzen:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Der Körper bildet einen leichten Bogen (wie ein umgekehrtes U).</li>
      <li>Die Bauchmuskeln sind angespannt.</li>
      <li>Der Blick ist auf den Eintauchpunkt gerichtet.</li>
      <li>Die Körperspannung bleibt bis zum Eintauchen erhalten.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Das Eintauchen</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Hände zuerst:</strong> Die zusammengelegten Hände durchbrechen als Erstes die Wasseroberfläche.</li>
      <li><strong>Kleines Loch:</strong> Der gesamte Körper sollte durch dasselbe "Loch" im Wasser gleiten.</li>
      <li><strong>Winkel:</strong> Der Eintauchwinkel beträgt etwa 30-45 Grad zur Wasseroberfläche.</li>
      <li><strong>Spannung halten:</strong> Den Körper gespannt halten, um Platschgeräusche zu minimieren.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Die Unterwasserphase</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <p className="text-green-700 dark:text-green-300 mb-3">
      Nach dem Eintauchen nutzt du den Schwung für die Unterwasserphase:
    </p>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Bleibe in der Streamline-Position und gleite.</li>
      <li>Beginne mit Delfin-Kicks, um den Schwung zu nutzen.</li>
      <li>Steuere mit den Händen die Tiefe - leicht nach oben kippen, um aufzutauchen.</li>
      <li>Beginne mit dem ersten Armzug, wenn du die Oberfläche erreichst.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Übungen zum Lernen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Sitzender Start:</strong> Setze dich auf den Beckenrand, Füße im Wasser. Hände in Streamline. Kippe nach vorne ins Wasser.</li>
      <li><strong>Kniender Start:</strong> Knie am Beckenrand auf einem Knie. Strecke dich ins Wasser.</li>
      <li><strong>Stehender Fall:</strong> Stehe am Beckenrand, Arme in Streamline. Lass dich einfach nach vorne ins Wasser fallen, ohne abzuspringen.</li>
      <li><strong>Voller Kopfsprung:</strong> Erst wenn die vorherigen Übungen sicher beherrscht werden, den vollen Kopfsprung mit Absprung üben.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Dive - The Proper Entry into Water</h2>

  <p className="text-lg leading-relaxed">
    The dive is a fundamental skill in swimming. It enables a fast and efficient start into the 
    water and forms the basis for competitive starts. Learning requires courage, but with proper 
    technique it's safe and elegant.
  </p>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Safety Notice</h3>
    <p className="text-red-700 dark:text-red-300">
      Only perform dives in pools with sufficient depth (at least 1.80m/6ft) and from the starting 
      block or pool edge. Never dive into unknown waters! Always check water depth first. 
      Beginners should always practice under supervision.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Basic Position</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Feet:</strong> Toes grip over the pool edge, feet hip-width apart.</li>
      <li><strong>Knees:</strong> Slightly bent, ready for takeoff.</li>
      <li><strong>Upper body:</strong> Leaning forward, arms extended forward-upward.</li>
      <li><strong>Head:</strong> Between the arms, looking at the entry point in the water.</li>
      <li><strong>Hands:</strong> Stacked on top of each other, thumbs interlocked (streamline).</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Takeoff</h3>

  <p className="leading-relaxed">
    The takeoff is the decisive moment. It must be powerful but controlled:
  </p>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-4">
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Weight shift:</strong> Slowly shift your weight forward over your toes.</li>
      <li><strong>Push-off:</strong> Push off powerfully forward-upward with your legs.</li>
      <li><strong>Arms lead:</strong> Arms show the way - extended in the direction of the dive.</li>
      <li><strong>Extension:</strong> At the moment of liftoff, extend the entire body.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Flight Phase</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      During the flight phase, the body is fully extended and forms a line from fingertips to toes:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>The body forms a slight arch (like an inverted U).</li>
      <li>Core muscles are engaged.</li>
      <li>Eyes are focused on the entry point.</li>
      <li>Body tension is maintained until entry.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Entry</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Hands first:</strong> The stacked hands break the water surface first.</li>
      <li><strong>Small hole:</strong> The entire body should glide through the same "hole" in the water.</li>
      <li><strong>Angle:</strong> Entry angle is about 30-45 degrees to the water surface.</li>
      <li><strong>Stay tight:</strong> Keep the body tense to minimize splash.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Underwater Phase</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <p className="text-green-700 dark:text-green-300 mb-3">
      After entry, use the momentum for the underwater phase:
    </p>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Stay in streamline position and glide.</li>
      <li>Begin dolphin kicks to maintain momentum.</li>
      <li>Steer depth with your hands - tilt slightly upward to surface.</li>
      <li>Begin your first arm stroke as you reach the surface.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Learning Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Seated start:</strong> Sit on the pool edge, feet in water. Hands in streamline. Tip forward into the water.</li>
      <li><strong>Kneeling start:</strong> Kneel at the pool edge on one knee. Extend into the water.</li>
      <li><strong>Standing fall:</strong> Stand at pool edge, arms in streamline. Simply fall forward into the water without jumping.</li>
      <li><strong>Full dive:</strong> Only after mastering previous exercises, practice the full dive with takeoff.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Kopfsprung lernen",
      description: "Arbeite dich Schritt für Schritt zum vollen Kopfsprung vor.",
      checklist: [
        { text: "Übe den sitzenden Start 5 Mal vom Beckenrand", checked: false },
        { text: "Übe den knienden Start 5 Mal", checked: false },
        { text: "Übe den stehenden Fall ohne Absprung 5 Mal", checked: false },
        { text: "Versuche einen vollständigen Kopfsprung mit Absprung", checked: false }
      ]
    },
    en: {
      title: "Learn to Dive",
      description: "Work your way step by step to a full dive.",
      checklist: [
        { text: "Practice the seated start 5 times from the pool edge", checked: false },
        { text: "Practice the kneeling start 5 times", checked: false },
        { text: "Practice the standing fall without takeoff 5 times", checked: false },
        { text: "Attempt a full dive with takeoff", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Welche Mindesttiefe sollte ein Becken für Kopfsprünge haben?",
        answer: "Mindestens 1,80 Meter. Nie in unbekannte oder flache Gewässer springen!"
      },
      {
        question: "In welcher Reihenfolge sollte man den Kopfsprung lernen?",
        answer: "Sitzend vom Beckenrand → Kniend → Stehend fallen lassen → Vollständiger Kopfsprung mit Absprung."
      },
      {
        question: "Was passiert nach dem Eintauchen ins Wasser?",
        answer: "Man bleibt in der Streamline-Position, gleitet, beginnt mit Delfin-Kicks und startet den ersten Armzug beim Auftauchen."
      }
    ],
    en: [
      {
        question: "What minimum depth should a pool have for diving?",
        answer: "At least 1.80 meters (6 feet). Never dive into unknown or shallow waters!"
      },
      {
        question: "In what order should you learn to dive?",
        answer: "Seated from pool edge → Kneeling → Standing fall → Full dive with takeoff."
      },
      {
        question: "What happens after entering the water?",
        answer: "Stay in streamline position, glide, begin dolphin kicks, and start first arm stroke when surfacing."
      }
    ]
  }
};
