export const raceStarts = {
  title: {
    de: "Wettkampfstarts - Schnell ins Rennen",
    en: "Race Starts - Fast into the Race"
  },
  description: {
    de: "Lerne verschiedene Wettkampfstarts: Grab Start, Track Start und Rückenschwimmstart.",
    en: "Learn different race starts: grab start, track start, and backstroke start."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Wettkampfstarts - Schnell ins Rennen</h2>

  <p className="text-lg leading-relaxed">
    Ein guter Start kann im Wettkampf über Sieg oder Niederlage entscheiden. Der Start ist die Phase, 
    in der du die höchste Geschwindigkeit erreichst - noch schneller als beim Schwimmen selbst. 
    Verschiedene Stile erfordern unterschiedliche Starttechniken.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Startarten im Überblick</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Grab Start:</strong> Beide Füße vorne, Hände greifen den Startblock.</li>
      <li><strong>Track Start:</strong> Ein Fuß vorne, einer hinten (wie beim Sprint-Start).</li>
      <li><strong>Rückenschwimmstart:</strong> Im Wasser, Gesicht zum Startblock.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Der Grab Start</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Technik</h3>
    <ol className="list-decimal list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>Position:</strong> Beide Füße an der Vorderkante des Startblocks, Zehen greifen über die Kante. Die Hände greifen die Vorderkante des Blocks.</li>
      <li><strong>Auf das Signal:</strong> Beim "Auf die Plätze" gehst du in die gebückte Position, Gewicht nach vorne.</li>
      <li><strong>Absprung:</strong> Beim Startsignal ziehst du dich mit den Armen nach vorne und stößt gleichzeitig mit den Beinen ab.</li>
      <li><strong>Flug:</strong> Strecke dich in die Streamline-Position. Der Körper bildet einen flachen Bogen.</li>
      <li><strong>Eintauchen:</strong> Hände zuerst, flacher Eintauchwinkel für maximale Gleitstrecke.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Der Track Start</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Technik</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Position:</strong> Ein Fuß vorne an der Kante, der andere auf der hinteren Platte des Startblocks. Hände greifen die Vorderkante.</li>
      <li><strong>Gewichtsverteilung:</strong> Das meiste Gewicht liegt auf dem vorderen Fuß und den Händen.</li>
      <li><strong>Absprung:</strong> Erst mit dem hinteren Bein abstoßen, dann mit dem vorderen nachdrücken. Die Arme schwingen nach vorne.</li>
      <li><strong>Vorteil:</strong> Der Track Start erzeugt mehr horizontale Geschwindigkeit und ist stabiler als der Grab Start.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Der Rückenschwimmstart</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Technik</h3>
    <ol className="list-decimal list-inside space-y-3 text-blue-700 dark:text-blue-300">
      <li><strong>Position:</strong> Im Wasser, Gesicht zum Startblock. Die Hände greifen die Griffe oder die Kante des Startblocks. Füße an der Wand, Knie gebeugt.</li>
      <li><strong>Spannung:</strong> Beim "Auf die Plätze" den Körper hochziehen, Hüfte aus dem Wasser.</li>
      <li><strong>Absprung:</strong> Beim Signal die Arme nach hinten-oben werfen, gleichzeitig mit den Beinen abstoßen. Der Körper macht einen Bogen nach hinten.</li>
      <li><strong>Eintauchen:</strong> Rücken zuerst, Hände über dem Kopf in Streamline. Unterwasser mit Delfinkicks auf dem Rücken gleiten.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Timing & Reaktion</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <p className="text-amber-700 dark:text-amber-300 mb-3">
      Das perfekte Timing beim Start ist entscheidend:
    </p>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Reaktionszeit:</strong> Die Zeit zwischen Signal und Startblock-Verlassen. Unter 0,7 Sekunden gilt als gut.</li>
      <li><strong>Fehlstart:</strong> Wer sich vor dem Signal bewegt, wird disqualifiziert (eine Chance seit 2010).</li>
      <li><strong>Konzentration:</strong> Fokussiere dich auf das Signal, nicht auf die anderen Schwimmer.</li>
      <li><strong>Mentales Training:</strong> Visualisiere den perfekten Start vor dem Rennen.</li>
    </ul>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-4">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Häufige Fehler</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li><strong>Zu steil eintauchen:</strong> Verliert Geschwindigkeit. Flacher Winkel ist besser.</li>
      <li><strong>Zu früh schwimmen:</strong> Die Gleitphase nutzen, nicht sofort mit dem Schwimmen beginnen.</li>
      <li><strong>Spannung verlieren:</strong> Den Körper während des gesamten Starts gespannt halten.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Übungen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Streamline-Sprünge:</strong> Vom Beckenrand ins Wasser springen und so weit wie möglich in Streamline gleiten.</li>
      <li><strong>Reaktionstraining:</strong> Ein Partner gibt ein Signal, du übst den Absprung. Verbessere die Reaktionszeit.</li>
      <li><strong>Unterwasser-Gleiten:</strong> Übe, nach dem Eintauchen möglichst weit mit Delfinkicks zu gleiten.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Race Starts - Fast into the Race</h2>

  <p className="text-lg leading-relaxed">
    A good start can make the difference between winning and losing in competition. The start is 
    the phase where you reach your highest speed - even faster than while swimming. Different 
    styles require different starting techniques.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Types of Starts</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Grab Start:</strong> Both feet forward, hands grip the starting block.</li>
      <li><strong>Track Start:</strong> One foot forward, one back (like a sprint start).</li>
      <li><strong>Backstroke Start:</strong> In the water, facing the starting block.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Grab Start</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Technique</h3>
    <ol className="list-decimal list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>Position:</strong> Both feet at the front edge of the block, toes curling over. Hands grip the front edge.</li>
      <li><strong>On your marks:</strong> At the command, assume the crouched position, weight forward.</li>
      <li><strong>Takeoff:</strong> At the start signal, pull forward with arms and push off with legs simultaneously.</li>
      <li><strong>Flight:</strong> Extend into streamline position. Body forms a flat arc.</li>
      <li><strong>Entry:</strong> Hands first, shallow entry angle for maximum glide distance.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Track Start</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Technique</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Position:</strong> One foot at the front edge, the other on the back plate. Hands grip the front edge.</li>
      <li><strong>Weight distribution:</strong> Most weight on the front foot and hands.</li>
      <li><strong>Takeoff:</strong> Push off with the back leg first, then drive with the front leg. Arms swing forward.</li>
      <li><strong>Advantage:</strong> The track start generates more horizontal speed and is more stable than the grab start.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Backstroke Start</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Technique</h3>
    <ol className="list-decimal list-inside space-y-3 text-blue-700 dark:text-blue-300">
      <li><strong>Position:</strong> In the water, facing the block. Hands grip the handles or edge. Feet on the wall, knees bent.</li>
      <li><strong>Set:</strong> At "take your marks," pull body up, hips out of water.</li>
      <li><strong>Takeoff:</strong> At the signal, throw arms back-upward while pushing off with legs. Body arcs backward.</li>
      <li><strong>Entry:</strong> Back enters first, hands overhead in streamline. Glide underwater with dolphin kicks on your back.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Timing & Reaction</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <p className="text-amber-700 dark:text-amber-300 mb-3">
      Perfect timing at the start is crucial:
    </p>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Reaction time:</strong> Time between signal and leaving the block. Under 0.7 seconds is considered good.</li>
      <li><strong>False start:</strong> Moving before the signal results in disqualification (one chance rule since 2010).</li>
      <li><strong>Focus:</strong> Concentrate on the signal, not on other swimmers.</li>
      <li><strong>Mental training:</strong> Visualize the perfect start before the race.</li>
    </ul>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-4">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Common Mistakes</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li><strong>Too steep entry:</strong> Loses speed. Shallow angle is better.</li>
      <li><strong>Swimming too soon:</strong> Use the glide phase, don't start swimming immediately.</li>
      <li><strong>Losing tension:</strong> Keep the body tense throughout the entire start.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Streamline jumps:</strong> Jump from pool edge and glide as far as possible in streamline.</li>
      <li><strong>Reaction training:</strong> Partner gives a signal, practice the takeoff. Improve reaction time.</li>
      <li><strong>Underwater gliding:</strong> Practice gliding as far as possible with dolphin kicks after entry.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Wettkampfstarts üben",
      description: "Übe die verschiedenen Starttechniken am Beckenrand oder Startblock.",
      checklist: [
        { text: "Übe den Grab Start 5 Mal vom Beckenrand", checked: false },
        { text: "Übe den Track Start 5 Mal vom Startblock", checked: false },
        { text: "Übe den Rückenschwimmstart 5 Mal", checked: false },
        { text: "Miss deine Gleitstrecke nach dem Start und versuche sie zu verbessern", checked: false }
      ]
    },
    en: {
      title: "Practice Race Starts",
      description: "Practice different starting techniques at the pool edge or starting block.",
      checklist: [
        { text: "Practice the grab start 5 times from the pool edge", checked: false },
        { text: "Practice the track start 5 times from the starting block", checked: false },
        { text: "Practice the backstroke start 5 times", checked: false },
        { text: "Measure your glide distance after the start and try to improve it", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was ist der Hauptunterschied zwischen Grab Start und Track Start?",
        answer: "Beim Grab Start stehen beide Füße vorne, beim Track Start steht ein Fuß vorne und einer hinten, was mehr horizontale Geschwindigkeit und Stabilität erzeugt."
      },
      {
        question: "Wie funktioniert der Rückenschwimmstart?",
        answer: "Man startet im Wasser mit dem Gesicht zum Startblock, greift die Kante, stößt sich nach hinten ab und gleitet in Streamline auf dem Rücken unter Wasser."
      },
      {
        question: "Was gilt als gute Reaktionszeit beim Wettkampfstart?",
        answer: "Eine Reaktionszeit unter 0,7 Sekunden zwischen Signal und Verlassen des Startblocks gilt als gut."
      }
    ],
    en: [
      {
        question: "What is the main difference between grab start and track start?",
        answer: "In the grab start both feet are forward; in the track start one foot is forward and one back, generating more horizontal speed and stability."
      },
      {
        question: "How does the backstroke start work?",
        answer: "You start in the water facing the block, grip the edge, push off backward, and glide in streamline on your back underwater."
      },
      {
        question: "What is considered a good reaction time for a race start?",
        answer: "A reaction time under 0.7 seconds between the signal and leaving the block is considered good."
      }
    ]
  }
};
