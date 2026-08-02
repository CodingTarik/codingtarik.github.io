export const restorativeYoga = {
  title: { de: "Restorative Yoga - Tiefenentspannung mit Hilfsmitteln", en: "Restorative Yoga - Deep Relaxation with Props" },
  description: { de: "Entdecke Restorative Yoga: unterstützte Posen, Nervensystem-Regulation und eine 60-Minuten-Sequenz.", en: "Discover Restorative Yoga: supported poses, nervous system regulation, and a 60-minute sequence." },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Restorative Yoga</h2>
  <p className="text-lg leading-relaxed">Restorative Yoga ist eine zutiefst heilende Praxis, bei der der Körper durch Hilfsmittel (Props) vollständig unterstützt wird. Du hältst nur 4-6 Posen in einer Stunde, jeweils 10-20 Minuten, und lässt das Nervensystem komplett herunterfahren. Es geht nicht um Dehnung oder Stärke, sondern um absolute Entspannung.</p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Warum Restorative Yoga?</h3>
    <p className="text-purple-700 dark:text-purple-300 mb-3">In unserer hyperaktiven Welt ist das Nervensystem ständig im Sympathikus-Modus (Kampf oder Flucht). Restorative Yoga aktiviert bewusst den Parasympathikus (Ruhe und Verdauung):</p>
    <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li>Cortisolspiegel sinkt messbar</li>
      <li>Herzfrequenz und Blutdruck normalisieren sich</li>
      <li>Immunsystem wird gestärkt</li>
      <li>Chronische Spannungsmuster lösen sich</li>
      <li>Schlafqualität verbessert sich signifikant</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Deine Hilfsmittel (Props)</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Bolster (Yogakissen)</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">Das wichtigste Hilfsmittel. Unterstützt den Rücken in Rückbeugen und den Oberkörper in Vorbeugen. Alternative: fest gerollte Decken.</p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Yoga-Decken (2-3 Stück)</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">Gefaltet als Unterstützung oder zum Zudecken. Wärme ist entscheidend – der Körper kühlt in der Stille schnell ab.</p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Blöcke (2 Stück)</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">Unter Knien, Kopf oder als Bolster-Erhöhung. Schaffen die perfekte Höhe für jede Pose.</p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Augenkissen</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">Leichter Druck auf die Augen stimuliert den Vagusnerv und vertieft die Entspannung sofort.</p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Grundlegende Restorative Posen</h3>
  <div className="space-y-4">
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Supported Child's Pose</h4>
      <p className="text-purple-700 dark:text-purple-300">Bolster längs zwischen den Knien, Oberkörper komplett auf dem Bolster ablegen. Kopf zur Seite drehen. 10-15 Min.</p>
    </div>
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Supported Reclining Butterfly</h4>
      <p className="text-purple-700 dark:text-purple-300">Bolster unter dem Rücken, Fußsohlen zusammen, Knie nach außen (unterstützt durch Blöcke). Arme seitlich. 15-20 Min.</p>
    </div>
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Legs Up the Wall</h4>
      <p className="text-purple-700 dark:text-purple-300">Beine an der Wand hochgelegt, Bolster unter dem Becken. Verbessert Durchblutung und beruhigt das Nervensystem. 10-15 Min.</p>
    </div>
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Supported Savasana</h4>
      <p className="text-purple-700 dark:text-purple-300">Bolster unter den Knien, Decke über dem Körper, Augenkissen. Die ultimative Ruhepose. 15-20 Min.</p>
    </div>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Nervensystem-Regulation</h3>
    <p className="text-amber-700 dark:text-amber-300 mb-3">Restorative Yoga wirkt direkt auf den Vagusnerv – den „Ruhenerv" des Körpers:</p>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Erste 5 Minuten:</strong> Der Geist ist noch unruhig, der Körper beginnt sich anzupassen</li>
      <li><strong>5-10 Minuten:</strong> Muskelspannung löst sich, Atem wird langsamer</li>
      <li><strong>10-15 Minuten:</strong> Parasympathikus übernimmt, tiefe Gewebeentspannung beginnt</li>
      <li><strong>15+ Minuten:</strong> Körper geht in heilenden Ruhezustand, ähnlich dem Schlaf</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">60-Minuten Restorative Sequenz</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Supported Child's Pose – 10 Minuten</li>
      <li>Supported Reclining Butterfly – 15 Minuten</li>
      <li>Supported Side-Lying Twist (je Seite) – 7 Minuten</li>
      <li>Legs Up the Wall – 13 Minuten</li>
      <li>Supported Savasana – 15 Minuten</li>
    </ol>
    <p className="text-green-700 dark:text-green-300 mt-3 text-sm italic">Tipp: Stelle einen Timer, damit du dich wirklich fallen lassen kannst, ohne auf die Uhr zu schauen.</p>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Restorative Yoga</h2>
  <p className="text-lg leading-relaxed">Restorative Yoga is a deeply healing practice where the body is fully supported by props. You hold only 4-6 poses in an hour, each for 10-20 minutes, allowing the nervous system to completely down-regulate. It's not about stretching or strength – it's about absolute relaxation.</p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Why Restorative Yoga?</h3>
    <p className="text-purple-700 dark:text-purple-300 mb-3">In our hyperactive world, the nervous system is constantly in sympathetic mode (fight or flight). Restorative Yoga consciously activates the parasympathetic (rest and digest):</p>
    <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li>Cortisol levels measurably decrease</li>
      <li>Heart rate and blood pressure normalize</li>
      <li>Immune system is strengthened</li>
      <li>Chronic tension patterns dissolve</li>
      <li>Sleep quality significantly improves</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Your Props</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Bolster</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">The most important prop. Supports the back in backbends and the torso in forward folds. Alternative: firmly rolled blankets.</p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Yoga Blankets (2-3)</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">Folded as support or used for covering. Warmth is crucial – the body cools quickly in stillness.</p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Blocks (2)</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">Under knees, head, or to elevate the bolster. Create the perfect height for each pose.</p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Eye Pillow</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">Light pressure on the eyes stimulates the vagus nerve and deepens relaxation instantly.</p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Fundamental Restorative Poses</h3>
  <div className="space-y-4">
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Supported Child's Pose</h4>
      <p className="text-purple-700 dark:text-purple-300">Bolster lengthwise between knees, upper body completely resting on the bolster. Turn head to one side. 10-15 min.</p>
    </div>
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Supported Reclining Butterfly</h4>
      <p className="text-purple-700 dark:text-purple-300">Bolster under the back, soles of feet together, knees falling out (supported by blocks). Arms to sides. 15-20 min.</p>
    </div>
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Legs Up the Wall</h4>
      <p className="text-purple-700 dark:text-purple-300">Legs elevated against the wall, bolster under pelvis. Improves circulation and calms the nervous system. 10-15 min.</p>
    </div>
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Supported Savasana</h4>
      <p className="text-purple-700 dark:text-purple-300">Bolster under knees, blanket over body, eye pillow. The ultimate resting pose. 15-20 min.</p>
    </div>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Nervous System Regulation</h3>
    <p className="text-amber-700 dark:text-amber-300 mb-3">Restorative Yoga directly affects the vagus nerve – the body's "rest nerve":</p>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>First 5 minutes:</strong> Mind is still restless, body begins to adjust</li>
      <li><strong>5-10 minutes:</strong> Muscle tension releases, breath slows down</li>
      <li><strong>10-15 minutes:</strong> Parasympathetic takes over, deep tissue relaxation begins</li>
      <li><strong>15+ minutes:</strong> Body enters healing rest state, similar to sleep</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">60-Minute Restorative Sequence</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Supported Child's Pose – 10 minutes</li>
      <li>Supported Reclining Butterfly – 15 minutes</li>
      <li>Supported Side-Lying Twist (each side) – 7 minutes</li>
      <li>Legs Up the Wall – 13 minutes</li>
      <li>Supported Savasana – 15 minutes</li>
    </ol>
    <p className="text-green-700 dark:text-green-300 mt-3 text-sm italic">Tip: Set a timer so you can truly let go without watching the clock.</p>
  </div>
</div>
    `
  },
  task: { de: { title: "Restorative Yoga erleben", description: "Spüre die heilende Kraft der tiefen Entspannung.", checklist: [{ text: "Sammle deine Props: Bolster (oder Decken), Blöcke, Augenkissen", checked: false }, { text: "Übe Supported Child's Pose 10 Minuten lang", checked: false }, { text: "Führe die komplette 60-Minuten-Sequenz durch", checked: false }] }, en: { title: "Experience Restorative Yoga", description: "Feel the healing power of deep relaxation.", checklist: [{ text: "Gather your props: bolster (or blankets), blocks, eye pillow", checked: false }, { text: "Practice Supported Child's Pose for 10 minutes", checked: false }, { text: "Complete the full 60-minute sequence", checked: false }] } },
  quiz: { de: [{ question: "Was ist der Hauptunterschied zwischen Restorative und Yin Yoga?", answer: "Restorative Yoga nutzt Props zur vollständigen Unterstützung (keine Dehnung, nur Entspannung), Yin Yoga arbeitet mit passiver Dehnung des Bindegewebes." }, { question: "Welchen Teil des Nervensystems aktiviert Restorative Yoga?", answer: "Den Parasympathikus (Ruhe und Verdauung), der dem ständig aktiven Sympathikus (Kampf oder Flucht) entgegenwirkt." }, { question: "Warum ist ein Augenkissen hilfreich?", answer: "Der leichte Druck auf die Augen stimuliert den Vagusnerv und vertieft die Entspannung sofort." }], en: [{ question: "What is the main difference between Restorative and Yin Yoga?", answer: "Restorative Yoga uses props for complete support (no stretching, only relaxation), Yin Yoga works with passive stretching of connective tissue." }, { question: "Which part of the nervous system does Restorative Yoga activate?", answer: "The parasympathetic (rest and digest), counteracting the constantly active sympathetic (fight or flight)." }, { question: "Why is an eye pillow helpful?", answer: "The light pressure on the eyes stimulates the vagus nerve and deepens relaxation instantly." }] }
};
