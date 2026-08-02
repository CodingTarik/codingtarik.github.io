export const alignmentSafety = {
  title: {
    de: "Ausrichtung & Sicherheit",
    en: "Alignment & Safety"
  },
  description: {
    de: "Lerne die Grundprinzipien der korrekten Ausrichtung und wie du Verletzungen vermeidest.",
    en: "Learn the fundamental principles of correct alignment and how to prevent injuries."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Ausrichtung & Sicherheit</h2>
  
  <p className="text-lg leading-relaxed">
    Korrekte Ausrichtung ist der Schlüssel zu einer sicheren und effektiven Yoga-Praxis. 
    Sie schützt deine Gelenke, maximiert die Wirkung der Posen und verhindert Verletzungen. 
    Es geht nicht darum, "perfekt" auszusehen, sondern darum, deinen Körper optimal zu unterstützen.
  </p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Die 5 Grundprinzipien der Ausrichtung</h3>
    <ol className="list-decimal list-inside space-y-3 text-purple-700 dark:text-purple-300">
      <li><strong>Neutrale Wirbelsäule:</strong> Respektiere die natürlichen Kurven deiner Wirbelsäule - Lordose (Lendenwirbel), Kyphose (Brustwirbel), Lordose (Halswirbel)</li>
      <li><strong>Gelenke schützen:</strong> Knie über Knöchel, Handgelenke nicht überlasten, Schultern weg von den Ohren</li>
      <li><strong>Kern aktivieren:</strong> Leichte Anspannung der tiefen Bauchmuskeln stabilisiert die Wirbelsäule</li>
      <li><strong>Erdung:</strong> Spüre den Kontakt zum Boden - ob Füße, Hände oder Sitzknochen</li>
      <li><strong>Länge schaffen:</strong> Strecke dich von der Erdung weg nach oben oder in die Richtung der Pose</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Wichtige Ausrichtungsregeln</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Knie</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        In Ausfallschritten: Knie direkt über dem Knöchel, nicht darüber hinaus. 
        Knie zeigt in dieselbe Richtung wie die Zehen. Nie das Knie nach innen kollabieren lassen.
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Handgelenke</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        Finger weit spreizen, Gewicht gleichmäßig verteilen. Drücke die Fingerkuppen in den 
        Boden, um die Handgelenke zu entlasten. "Hasta Bandha" - das Handschloss.
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Schultern</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        Schultern aktiv weg von den Ohren ziehen. Schulterblätter leicht zusammen und nach 
        unten. Diese Haltung schützt den Nacken und öffnet die Brust.
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Nacken</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        Der Nacken ist eine Verlängerung der Wirbelsäule. Vermeide es, den Kopf stark zu 
        überstrecken oder zu komprimieren. Kinn leicht zur Brust in vielen Posen.
      </p>
    </div>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-300 dark:border-red-800 mt-6">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Wann du SOFORT aufhören solltest</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li><strong>Scharfer, stechender Schmerz</strong> - das ist KEIN normales Dehnungsgefühl</li>
      <li><strong>Taubheit oder Kribbeln</strong> - ein Nerv wird eingeklemmt</li>
      <li><strong>Schwindel oder Übelkeit</strong> - besonders bei Inversionen</li>
      <li><strong>Atemnot</strong> - du solltest immer ruhig atmen können</li>
      <li><strong>Knacken oder Knirschgeräusche in Gelenken</strong> mit Schmerzen</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Warm-up & Cool-down</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Die goldene Regel</h3>
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Beginne IMMER mit leichten Bewegungen und Aufwärmübungen. Dehne niemals kalte Muskeln. 
      Am Ende jeder Praxis: mindestens 5 Minuten Savasana (Entspannungslage).
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Warm-up (5-10 Min):</strong> Sanfte Gelenkmobilisation, Cat-Cow, leichte Dehnungen</li>
      <li><strong>Hauptteil:</strong> Stehende Posen → Balance → Rückbeugen/Twists</li>
      <li><strong>Cool-down (5-10 Min):</strong> Vorbeugen, Hüftöffnungen, Liegende Posen</li>
      <li><strong>Savasana (5-10 Min):</strong> Vollständige Entspannung zum Abschluss</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Praktische Übung: Körperbewusstsein</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Stehe in Tadasana (Berg-Pose) und scanne deinen Körper von den Füßen bis zum Kopf</li>
      <li>Spüre: Ist dein Gewicht gleichmäßig auf beiden Füßen verteilt?</li>
      <li>Sind deine Schultern entspannt oder hochgezogen?</li>
      <li>Ist dein Kern leicht aktiviert?</li>
      <li>Atme 5 Mal tief und korrigiere bewusst deine Haltung</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Alignment & Safety</h2>
  
  <p className="text-lg leading-relaxed">
    Correct alignment is the key to a safe and effective yoga practice. It protects your 
    joints, maximizes the benefits of poses, and prevents injuries. It's not about looking 
    "perfect" but about optimally supporting your body.
  </p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">The 5 Fundamental Alignment Principles</h3>
    <ol className="list-decimal list-inside space-y-3 text-purple-700 dark:text-purple-300">
      <li><strong>Neutral spine:</strong> Respect the natural curves of your spine - lordosis (lumbar), kyphosis (thoracic), lordosis (cervical)</li>
      <li><strong>Protect joints:</strong> Knees over ankles, don't overload wrists, shoulders away from ears</li>
      <li><strong>Engage core:</strong> Slight engagement of deep abdominal muscles stabilizes the spine</li>
      <li><strong>Grounding:</strong> Feel the contact with the floor - whether feet, hands, or sit bones</li>
      <li><strong>Create length:</strong> Extend away from your grounding point upward or in the direction of the pose</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Key Alignment Rules</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Knees</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        In lunges: knee directly over ankle, not beyond. Knee points in the same direction as 
        toes. Never let the knee collapse inward.
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Wrists</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        Spread fingers wide, distribute weight evenly. Press fingertips into the floor to 
        relieve wrists. "Hasta Bandha" - the hand lock.
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Shoulders</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        Actively draw shoulders away from ears. Shoulder blades slightly together and down. 
        This posture protects the neck and opens the chest.
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Neck</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        The neck is an extension of the spine. Avoid strongly extending or compressing the head. 
        Chin slightly toward chest in many poses.
      </p>
    </div>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-300 dark:border-red-800 mt-6">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">When to STOP Immediately</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li><strong>Sharp, stabbing pain</strong> - this is NOT a normal stretching sensation</li>
      <li><strong>Numbness or tingling</strong> - a nerve is being pinched</li>
      <li><strong>Dizziness or nausea</strong> - especially during inversions</li>
      <li><strong>Shortness of breath</strong> - you should always be able to breathe calmly</li>
      <li><strong>Cracking or grinding sounds in joints</strong> accompanied by pain</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Warm-up & Cool-down</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">The Golden Rule</h3>
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      ALWAYS start with light movements and warm-up exercises. Never stretch cold muscles. 
      At the end of every practice: at least 5 minutes of Savasana (relaxation pose).
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Warm-up (5-10 min):</strong> Gentle joint mobilization, Cat-Cow, light stretches</li>
      <li><strong>Main practice:</strong> Standing poses → Balance → Backbends/Twists</li>
      <li><strong>Cool-down (5-10 min):</strong> Forward bends, hip openers, lying poses</li>
      <li><strong>Savasana (5-10 min):</strong> Complete relaxation to finish</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Practice Exercise: Body Awareness</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Stand in Tadasana (Mountain Pose) and scan your body from feet to head</li>
      <li>Feel: Is your weight evenly distributed on both feet?</li>
      <li>Are your shoulders relaxed or hunched up?</li>
      <li>Is your core lightly engaged?</li>
      <li>Breathe deeply 5 times and consciously correct your posture</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Ausrichtungsprinzipien anwenden",
      description: "Verinnerliche die 5 Grundprinzipien der Ausrichtung und erkenne Warnsignale.",
      checklist: [
        { text: "Übe den Körperscan in Tadasana (Berg-Pose) für 2 Minuten", checked: false },
        { text: "Lerne den Unterschied zwischen Dehnungsunbehagen und Schmerz zu erkennen", checked: false },
        { text: "Übe die korrekte Knie-Ausrichtung in einem Ausfallschritt", checked: false },
        { text: "Praktiziere die Schulter-Entspannung: Schultern hoch zu den Ohren, dann loslassen", checked: false }
      ]
    },
    en: {
      title: "Apply Alignment Principles",
      description: "Internalize the 5 fundamental alignment principles and recognize warning signs.",
      checklist: [
        { text: "Practice body scan in Tadasana (Mountain Pose) for 2 minutes", checked: false },
        { text: "Learn to distinguish between stretching discomfort and pain", checked: false },
        { text: "Practice correct knee alignment in a lunge", checked: false },
        { text: "Practice shoulder relaxation: shrug shoulders to ears, then release", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was sind die 5 Grundprinzipien der Ausrichtung im Yoga?",
        answer: "Neutrale Wirbelsäule, Gelenke schützen, Kern aktivieren, Erdung und Länge schaffen."
      },
      {
        question: "Wann solltest du eine Pose sofort verlassen?",
        answer: "Bei scharfem/stechendem Schmerz, Taubheit/Kribbeln, Schwindel, Übelkeit oder Atemnot."
      },
      {
        question: "Wie schützt du deine Handgelenke in Posen wie Downward Dog?",
        answer: "Finger weit spreizen, Gewicht gleichmäßig verteilen und Fingerkuppen in den Boden drücken (Hasta Bandha), um die Handgelenke zu entlasten."
      }
    ],
    en: [
      {
        question: "What are the 5 fundamental alignment principles in yoga?",
        answer: "Neutral spine, protect joints, engage core, grounding, and create length."
      },
      {
        question: "When should you immediately leave a pose?",
        answer: "With sharp/stabbing pain, numbness/tingling, dizziness, nausea, or shortness of breath."
      },
      {
        question: "How do you protect your wrists in poses like Downward Dog?",
        answer: "Spread fingers wide, distribute weight evenly, and press fingertips into the floor (Hasta Bandha) to relieve the wrists."
      }
    ]
  }
};
