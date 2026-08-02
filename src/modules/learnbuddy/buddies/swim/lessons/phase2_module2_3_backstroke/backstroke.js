export const backstroke = {
  title: {
    de: "Rückenschwimmen - Schwimmen auf dem Rücken",
    en: "Backstroke - Swimming on Your Back"
  },
  description: {
    de: "Lerne das Rückenschwimmen: Armbewegung, Beinschlag, Körperlage und Atmung.",
    en: "Learn backstroke: arm movement, kick, body position, and breathing."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Rückenschwimmen - Schwimmen auf dem Rücken</h2>

  <p className="text-lg leading-relaxed">
    Rückenschwimmen ist der einzige Wettkampfstil, bei dem du auf dem Rücken liegst. Dein Gesicht 
    bleibt die ganze Zeit über Wasser, was die Atmung einfacher macht. Technisch ist er dem 
    Kraulschwimmen sehr ähnlich - nur eben umgedreht.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Vorteile des Rückenschwimmens</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Freie Atmung - das Gesicht ist immer über Wasser</li>
      <li>Entlastet den Nacken und die Halswirbelsäule</li>
      <li>Öffnet die Brust und verbessert die Haltung</li>
      <li>Hervorragender Ausgleich zum Kraulschwimmen</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Die Armbewegung</h3>

  <p className="leading-relaxed">
    Die Arme arbeiten wie beim Kraul abwechselnd, aber in umgekehrter Richtung. 
    Während ein Arm unter Wasser zieht, schwingt der andere über Wasser nach vorne.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Unterwasser-Zugphase</h4>
      <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300 text-sm">
        <li><strong>Eintauchen:</strong> Der gestreckte Arm taucht hinter dem Kopf ein, mit dem kleinen Finger zuerst.</li>
        <li><strong>Fassen:</strong> Die Hand dreht sich nach außen und beginnt das Wasser zu greifen.</li>
        <li><strong>Ziehen:</strong> Der Arm zieht in einer S-Kurve neben dem Körper nach unten. Der Ellenbogen beugt sich auf etwa 90 Grad.</li>
        <li><strong>Drücken:</strong> Der Arm drückt das Wasser nach unten Richtung Füße und streckt sich dabei.</li>
      </ul>
    </div>
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Überwasser-Erholung</h4>
      <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300 text-sm">
        <li><strong>Austritt:</strong> Der Daumen kommt zuerst aus dem Wasser.</li>
        <li><strong>Schwung:</strong> Der gestreckte Arm schwingt in einer vertikalen Ebene über Wasser nach hinten.</li>
        <li><strong>Eintritt:</strong> Der kleine Finger taucht zuerst ein, direkt hinter dem Kopf in Verlängerung der Schulter.</li>
        <li><strong>Rotation:</strong> Die Schulter dreht sich natürlich mit jeder Armbewegung.</li>
      </ul>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Der Beinschlag</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Flutter Kick (umgekehrt)</h3>
    <p className="text-green-700 dark:text-green-300 mb-3">
      Der Beinschlag ist ähnlich wie beim Kraul, aber umgedreht - der Hauptvortrieb kommt vom Aufwärtsschlag:
    </p>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Die Bewegung kommt aus der Hüfte, nicht aus den Knien.</li>
      <li>Die Beine sind fast gestreckt, die Knie nur leicht gebeugt.</li>
      <li>Die Füße sind entspannt und zeigen nach innen (pigeon-toed).</li>
      <li>Die Zehenspitzen sollten leicht die Wasseroberfläche durchbrechen.</li>
      <li>Ein gleichmäßiger, kontinuierlicher Rhythmus ist wichtiger als Kraft.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Körperlage & Position</h3>

  <p className="leading-relaxed">
    Eine gute Körperlage ist beim Rückenschwimmen entscheidend. Du musst flach und hoch im Wasser 
    liegen, um den Wasserwiderstand zu minimieren.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-4">
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Kopfposition:</strong> Der Kopf liegt still im Wasser, Blick nach oben (zur Decke/Himmel). Nur die Ohren sind unter Wasser.</li>
      <li><strong>Hüfte:</strong> Die Hüfte bleibt hoch, nahe der Wasseroberfläche. Nicht durchhängen lassen!</li>
      <li><strong>Körperrotation:</strong> Wie beim Kraul rotiert der Körper 30-45 Grad um die Längsachse.</li>
      <li><strong>Schultern:</strong> Die Schultern wechseln sich ab - eine taucht ein, die andere kommt hoch.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Atmung</h3>

  <p className="leading-relaxed">
    Da das Gesicht beim Rückenschwimmen immer über Wasser ist, ist die Atmung technisch einfach. 
    Trotzdem sollte sie rhythmisch und an den Armzyklus gekoppelt sein:
  </p>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-4">
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Einatmen:</strong> Wenn ein Arm aus dem Wasser kommt (z.B. rechter Arm).</li>
      <li><strong>Ausatmen:</strong> Wenn der andere Arm aus dem Wasser kommt (z.B. linker Arm).</li>
      <li><strong>Rhythmus:</strong> Atme gleichmäßig und tief. Vermeide flaches Atmen.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Häufige Fehler</h3>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Vermeide diese Fehler!</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li><strong>Sitzende Position:</strong> Die Hüfte sinkt ab und du sitzt quasi im Wasser. Hüfte hoch halten!</li>
      <li><strong>Kopf zu hoch:</strong> Den Kopf nicht anheben - das senkt die Hüfte.</li>
      <li><strong>Zu viel Kniebeugung:</strong> Die Knie sollten nur leicht gebeugt sein, Bewegung aus der Hüfte.</li>
      <li><strong>Fehlende Rotation:</strong> Ohne Schulterrotation wird der Armzug ineffizient.</li>
      <li><strong>Überstrecken:</strong> Der Arm sollte nicht zu weit hinter dem Kopf eintauchen.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Übungen zum Üben</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Rücken-Kick mit ausgestreckten Armen:</strong> Arme über dem Kopf in Streamline, nur mit Beinschlag schwimmen.</li>
      <li><strong>Ein-Arm-Rücken:</strong> Schwimme nur mit einem Arm, der andere liegt seitlich am Körper. Dann wechseln.</li>
      <li><strong>Becher-Balance:</strong> Lege einen Plastikbecher auf deine Stirn und schwimme Rücken, ohne ihn zu verlieren. Trainiert ruhige Kopfhaltung.</li>
      <li><strong>Rotation Drill:</strong> 6 Beinschläge auf der rechten Seite, Armzug, 6 Beinschläge auf der linken Seite. Trainiert Rotation.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Backstroke - Swimming on Your Back</h2>

  <p className="text-lg leading-relaxed">
    Backstroke is the only competitive style where you lie on your back. Your face stays above 
    water the entire time, making breathing easier. Technically, it's very similar to freestyle - 
    just flipped over.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Benefits of Backstroke</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Free breathing - face is always above water</li>
      <li>Relieves neck and cervical spine</li>
      <li>Opens the chest and improves posture</li>
      <li>Excellent complement to freestyle</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Arm Movement</h3>

  <p className="leading-relaxed">
    Arms work alternately like freestyle, but in the opposite direction. While one arm pulls 
    underwater, the other swings forward above water.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Underwater Pull Phase</h4>
      <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300 text-sm">
        <li><strong>Entry:</strong> The extended arm enters behind the head, pinky finger first.</li>
        <li><strong>Catch:</strong> The hand rotates outward and begins to grip the water.</li>
        <li><strong>Pull:</strong> The arm pulls in an S-curve alongside the body. The elbow bends to about 90 degrees.</li>
        <li><strong>Push:</strong> The arm pushes water downward toward the feet and extends.</li>
      </ul>
    </div>
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Above-Water Recovery</h4>
      <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300 text-sm">
        <li><strong>Exit:</strong> The thumb exits the water first.</li>
        <li><strong>Swing:</strong> The extended arm swings in a vertical plane over the water backward.</li>
        <li><strong>Entry:</strong> The pinky finger enters first, directly behind the head in line with the shoulder.</li>
        <li><strong>Rotation:</strong> The shoulder naturally rotates with each arm movement.</li>
      </ul>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Kick</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Flutter Kick (Inverted)</h3>
    <p className="text-green-700 dark:text-green-300 mb-3">
      The kick is similar to freestyle but inverted - main propulsion comes from the upward kick:
    </p>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Movement originates from the hips, not the knees.</li>
      <li>Legs are almost straight with only slightly bent knees.</li>
      <li>Feet are relaxed and pointed inward (pigeon-toed).</li>
      <li>Toes should slightly break the water surface.</li>
      <li>A steady, continuous rhythm is more important than power.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Body Position</h3>

  <p className="leading-relaxed">
    Good body position is crucial in backstroke. You must lie flat and high in the water 
    to minimize drag.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-4">
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Head position:</strong> Head lies still in water, looking up (at ceiling/sky). Only ears are underwater.</li>
      <li><strong>Hips:</strong> Hips stay high, near the water surface. Don't let them sag!</li>
      <li><strong>Body rotation:</strong> Like freestyle, the body rotates 30-45 degrees around the longitudinal axis.</li>
      <li><strong>Shoulders:</strong> Shoulders alternate - one dips in, the other comes up.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Breathing</h3>

  <p className="leading-relaxed">
    Since the face is always above water in backstroke, breathing is technically easy. 
    Still, it should be rhythmic and tied to the arm cycle:
  </p>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-4">
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Inhale:</strong> When one arm exits the water (e.g., right arm).</li>
      <li><strong>Exhale:</strong> When the other arm exits the water (e.g., left arm).</li>
      <li><strong>Rhythm:</strong> Breathe evenly and deeply. Avoid shallow breathing.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Common Errors</h3>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Avoid These Mistakes!</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li><strong>Sitting position:</strong> Hips sink and you're effectively sitting in the water. Keep hips up!</li>
      <li><strong>Head too high:</strong> Don't lift your head - it sinks the hips.</li>
      <li><strong>Too much knee bend:</strong> Knees should only be slightly bent, movement from hips.</li>
      <li><strong>Missing rotation:</strong> Without shoulder rotation, the arm pull becomes inefficient.</li>
      <li><strong>Over-reaching:</strong> Arm shouldn't enter too far behind the head.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Practice Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Streamline back kick:</strong> Arms extended overhead in streamline, swim with kick only.</li>
      <li><strong>Single-arm backstroke:</strong> Swim with one arm only, the other at your side. Then switch.</li>
      <li><strong>Cup balance:</strong> Place a plastic cup on your forehead and swim backstroke without losing it. Trains steady head position.</li>
      <li><strong>Rotation drill:</strong> 6 kicks on right side, arm stroke, 6 kicks on left side. Trains rotation.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Rückenschwimmen üben",
      description: "Übe die Grundlagen des Rückenschwimmens im Wasser.",
      checklist: [
        { text: "Übe den Rücken-Beinschlag mit ausgestreckten Armen für 4 Bahnen", checked: false },
        { text: "Schwimme 4 Bahnen Ein-Arm-Rücken (je 2 pro Arm)", checked: false },
        { text: "Arbeite an der Körperrotation mit dem Rotation Drill", checked: false },
        { text: "Schwimme 6 Bahnen Rückenschwimmen mit Fokus auf flache Körperlage", checked: false }
      ]
    },
    en: {
      title: "Practice Backstroke",
      description: "Practice the basics of backstroke in the water.",
      checklist: [
        { text: "Practice back kick with extended arms for 4 lengths", checked: false },
        { text: "Swim 4 lengths single-arm backstroke (2 per arm)", checked: false },
        { text: "Work on body rotation with the rotation drill", checked: false },
        { text: "Swim 6 lengths backstroke focusing on flat body position", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Welcher Finger taucht beim Rückenschwimmen zuerst ins Wasser ein?",
        answer: "Der kleine Finger taucht beim Eintauchen zuerst ein, der Daumen kommt beim Austritt zuerst heraus."
      },
      {
        question: "Was ist der Hauptvorteil des Rückenschwimmens gegenüber anderen Stilen?",
        answer: "Das Gesicht bleibt immer über Wasser, was die Atmung einfacher und natürlicher macht."
      },
      {
        question: "Warum ist eine hohe Hüftposition beim Rückenschwimmen wichtig?",
        answer: "Eine hohe Hüfte reduziert den Wasserwiderstand. Wenn die Hüfte absinkt, entsteht eine 'sitzende Position', die viel Widerstand erzeugt."
      }
    ],
    en: [
      {
        question: "Which finger enters the water first in backstroke?",
        answer: "The pinky finger enters first during entry, the thumb exits first during exit."
      },
      {
        question: "What is the main advantage of backstroke over other styles?",
        answer: "The face stays above water at all times, making breathing easier and more natural."
      },
      {
        question: "Why is a high hip position important in backstroke?",
        answer: "High hips reduce drag. When hips sink, a 'sitting position' is created that generates a lot of resistance."
      }
    ]
  }
};
