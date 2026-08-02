export const somersault = {
  title: {
    de: "Salto im Wasser - Vorwärts und Rückwärts",
    en: "Somersault in Water - Forward and Backward"
  },
  description: {
    de: "Lerne Saltos im Wasser: Vorwärtssalto, Rückwärtssalto, Sicherheit und Übungen.",
    en: "Learn water somersaults: forward somersault, backward somersault, safety, and exercises."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Salto im Wasser - Vorwärts und Rückwärts</h2>

  <p className="text-lg leading-relaxed">
    Saltos im Wasser sind nicht nur eine unterhaltsame Übung, sondern entwickeln auch wichtige 
    Fähigkeiten wie räumliche Orientierung unter Wasser, Körperkontrolle und Vertrauen. 
    Sie bilden die Grundlage für fortgeschrittene Techniken wie Rollwenden und Sprünge.
  </p>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Sicherheit zuerst!</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li>Übe immer in ausreichend tiefem Wasser (mindestens 1,50m).</li>
      <li>Stelle sicher, dass genug Platz um dich herum ist.</li>
      <li>Übe nie alleine - immer mit einem Trainingspartner oder unter Aufsicht.</li>
      <li>Atme durch die Nase aus, während du dich drehst, um Wasser in der Nase zu vermeiden.</li>
      <li>Beginne immer mit einfacheren Übungen, bevor du den vollen Salto versuchst.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Der Vorwärtssalto</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Technik Schritt für Schritt</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Ausgangsposition:</strong> Stehe aufrecht im Wasser (mindestens brusttief). Arme nach vorne gestreckt.</li>
      <li><strong>Einleitung:</strong> Ziehe das Kinn zur Brust und tauche den Kopf unter.</li>
      <li><strong>Rotation:</strong> Ziehe die Knie zur Brust (Tucke) und rolle dich nach vorne. Die Hände können die Knie greifen.</li>
      <li><strong>Drehen:</strong> Halte die enge Tuck-Position, um die Rotation zu beschleunigen.</li>
      <li><strong>Öffnen:</strong> Wenn du fast eine volle Drehung gemacht hast, strecke die Beine aus und stehe auf.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Der Rückwärtssalto</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Technik Schritt für Schritt</h3>
    <ol className="list-decimal list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>Ausgangsposition:</strong> Stehe aufrecht im Wasser. Arme seitlich, leicht nach hinten.</li>
      <li><strong>Einleitung:</strong> Lehne dich nach hinten und werfe die Arme über den Kopf nach hinten.</li>
      <li><strong>Rotation:</strong> Ziehe die Knie zur Brust und rolle dich rückwärts.</li>
      <li><strong>Orientierung:</strong> Halte die Augen offen, um dich unter Wasser zu orientieren.</li>
      <li><strong>Öffnen:</strong> Strecke die Beine, wenn du die Drehung fast abgeschlossen hast.</li>
    </ol>
    <p className="text-amber-700 dark:text-amber-300 mt-3">
      <strong>Tipp:</strong> Der Rückwärtssalto ist einfacher als er aussieht, weil das Wasser 
      die Rotation unterstützt und du sanft landest.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Salto beim Schwimmen</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Saltos im Schwimmen sind die Grundlage für Rollwenden. Die Fähigkeit, sich unter Wasser 
      kontrolliert zu drehen, ist essentiell für:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Rollwenden:</strong> Die Vorwärtsrolle an der Wand ist im Wesentlichen ein halber Vorwärtssalto.</li>
      <li><strong>Unterwasser-Navigation:</strong> Sich unter Wasser drehen und orientieren können.</li>
      <li><strong>Sprünge:</strong> Bei Kopfsprüngen mit Schrauben oder Salto-Elementen.</li>
      <li><strong>Wasserball:</strong> Schnelle Richtungswechsel im Wasser.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Übungen zum Lernen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Ball-Rolle:</strong> Mach dich so klein wie möglich (Knie an die Brust) und rolle dich im Wasser vorwärts. Wiederhole 10 Mal.</li>
      <li><strong>Halbe Rotation:</strong> Übe nur eine halbe Drehung vorwärts, bis du dich wohl fühlst.</li>
      <li><strong>Mit Hilfe:</strong> Lass einen Partner dich sanft bei der Rotation unterstützen.</li>
      <li><strong>Vorwärtssalto vom Sprung:</strong> Springe ins tiefe Wasser und mache während des Eintauchens einen Vorwärtssalto.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Somersault in Water - Forward and Backward</h2>

  <p className="text-lg leading-relaxed">
    Water somersaults are not just a fun exercise - they also develop important skills like spatial 
    orientation underwater, body control, and confidence. They form the foundation for advanced 
    techniques like flip turns and dives.
  </p>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Safety First!</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li>Always practice in sufficiently deep water (at least 1.50m/5ft).</li>
      <li>Make sure there's enough space around you.</li>
      <li>Never practice alone - always with a training partner or under supervision.</li>
      <li>Exhale through your nose while rotating to avoid water in the nose.</li>
      <li>Always start with simpler exercises before attempting the full somersault.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Forward Somersault</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Step-by-Step Technique</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Starting position:</strong> Stand upright in water (at least chest deep). Arms extended forward.</li>
      <li><strong>Initiation:</strong> Tuck chin to chest and submerge the head.</li>
      <li><strong>Rotation:</strong> Pull knees to chest (tuck) and roll forward. Hands can grab knees.</li>
      <li><strong>Spin:</strong> Maintain tight tuck position to accelerate rotation.</li>
      <li><strong>Open:</strong> When you've almost completed a full rotation, extend legs and stand up.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Backward Somersault</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Step-by-Step Technique</h3>
    <ol className="list-decimal list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>Starting position:</strong> Stand upright in water. Arms at sides, slightly back.</li>
      <li><strong>Initiation:</strong> Lean backward and throw arms over head backward.</li>
      <li><strong>Rotation:</strong> Pull knees to chest and roll backward.</li>
      <li><strong>Orientation:</strong> Keep eyes open to orient yourself underwater.</li>
      <li><strong>Open:</strong> Extend legs when you've almost completed the rotation.</li>
    </ol>
    <p className="text-amber-700 dark:text-amber-300 mt-3">
      <strong>Tip:</strong> The backward somersault is easier than it looks because the water 
      supports the rotation and you land softly.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Somersaults in Swimming</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Somersaults in swimming are the foundation for flip turns. The ability to rotate 
      in a controlled way underwater is essential for:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Flip turns:</strong> The forward roll at the wall is essentially a half forward somersault.</li>
      <li><strong>Underwater navigation:</strong> Being able to turn and orient yourself underwater.</li>
      <li><strong>Dives:</strong> In dives with twists or somersault elements.</li>
      <li><strong>Water polo:</strong> Quick direction changes in the water.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Learning Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Ball roll:</strong> Make yourself as small as possible (knees to chest) and roll forward in the water. Repeat 10 times.</li>
      <li><strong>Half rotation:</strong> Practice only a half turn forward until you feel comfortable.</li>
      <li><strong>With assistance:</strong> Have a partner gently assist you with the rotation.</li>
      <li><strong>Forward somersault from jump:</strong> Jump into deep water and do a forward somersault during entry.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Saltos im Wasser üben",
      description: "Lerne Schritt für Schritt Saltos im Wasser auszuführen.",
      checklist: [
        { text: "Übe die Ball-Rolle 10 Mal vorwärts im Stehen", checked: false },
        { text: "Mache 5 vollständige Vorwärtssaltos im Stehen", checked: false },
        { text: "Versuche 3 Rückwärtssaltos (mit Partner)", checked: false },
        { text: "Übe einen Vorwärtssalto aus dem Schwimmen heraus", checked: false }
      ]
    },
    en: {
      title: "Practice Water Somersaults",
      description: "Learn step by step to perform somersaults in water.",
      checklist: [
        { text: "Practice the ball roll 10 times forward while standing", checked: false },
        { text: "Do 5 complete forward somersaults while standing", checked: false },
        { text: "Try 3 backward somersaults (with a partner)", checked: false },
        { text: "Practice a forward somersault from swimming", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum sollte man durch die Nase ausatmen, während man einen Salto macht?",
        answer: "Um zu verhindern, dass Wasser in die Nase gelangt, da der Körper sich während der Rotation kopfüber dreht."
      },
      {
        question: "Wie kann man die Rotationsgeschwindigkeit beim Salto erhöhen?",
        answer: "Durch eine enge Tuck-Position (Knie fest an die Brust ziehen). Je kompakter der Körper, desto schneller die Rotation."
      },
      {
        question: "Welche Schwimmtechnik basiert auf dem Vorwärtssalto?",
        answer: "Die Rollwende (Flip Turn) beim Kraul- und Rückenschwimmen basiert auf einer halben Vorwärtsrolle."
      }
    ],
    en: [
      {
        question: "Why should you exhale through your nose during a somersault?",
        answer: "To prevent water from entering the nose, since the body turns upside down during rotation."
      },
      {
        question: "How can you increase rotation speed during a somersault?",
        answer: "By maintaining a tight tuck position (pulling knees firmly to chest). The more compact the body, the faster the rotation."
      },
      {
        question: "Which swimming technique is based on the forward somersault?",
        answer: "The flip turn in freestyle and backstroke is based on a half forward roll."
      }
    ]
  }
};
