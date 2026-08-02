export const teachingYoga = {
  title: { de: "Yoga Unterrichten - Sequencing, Cueing & Unterrichtsplanung", en: "Teaching Yoga - Sequencing, Cueing & Class Planning" },
  description: { de: "Lerne die Grundlagen des Yoga-Unterrichtens: Sequenzen aufbauen, verbale Anleitung und Klassen planen.", en: "Learn the fundamentals of teaching yoga: building sequences, verbal cueing, and class planning." },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Yoga Unterrichten</h2>
  <p className="text-lg leading-relaxed">Ob du Yoga-Lehrer werden willst oder einfach verstehen möchtest, wie eine gute Klasse aufgebaut ist – die Kunst des Unterrichtens verbindet technisches Wissen mit Kreativität und Einfühlungsvermögen. Hier lernst du die wichtigsten Prinzipien.</p>

  <h3 className="text-2xl font-bold mt-8 mb-4">Sequencing-Prinzipien</h3>
  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Der Spannungsbogen einer Klasse</h4>
    <p className="text-purple-700 dark:text-purple-300 mb-3">Jede gute Yoga-Klasse folgt einem Spannungsbogen – wie eine Bergtour:</p>
    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li><strong>Ankommen (5-10 Min.):</strong> Zentrierung, Atemübung, Intention setzen</li>
      <li><strong>Aufwärmen (10-15 Min.):</strong> Cat-Cow, sanfte Mobilisation, einfache Dehnungen</li>
      <li><strong>Aufbau (15-20 Min.):</strong> Sonnengrüße, stehende Posen, zunehmende Intensität</li>
      <li><strong>Peak Pose (5-10 Min.):</strong> Die herausforderndste Pose der Klasse</li>
      <li><strong>Abkühlen (10-15 Min.):</strong> Sitzende Posen, Vorbeugen, Twists</li>
      <li><strong>Savasana (5-10 Min.):</strong> Tiefenentspannung, Integration</li>
    </ol>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-4">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Sequencing-Regeln</h4>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Warm vor kalt:</strong> Dynamische Posen zuerst, passive zum Schluss</li>
      <li><strong>Einfach vor komplex:</strong> Grundposen vor Variationen</li>
      <li><strong>Counter-Poses:</strong> Nach Rückbeugen → Vorbeuge. Nach Twists → neutrale Wirbelsäule</li>
      <li><strong>Beide Seiten:</strong> Immer links UND rechts üben (gleiche Dauer)</li>
      <li><strong>Peak Pose vorbereiten:</strong> Alle vorherigen Posen sollten auf die Peak Pose hinarbeiten</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Die Kunst des Cueing (Verbale Anleitung)</h3>
  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Gutes vs. schlechtes Cueing</h4>
    <table className="w-full border-collapse mt-3">
      <thead><tr className="bg-amber-100 dark:bg-amber-800/40">
        <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Schlecht</th>
        <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Besser</th>
      </tr></thead>
      <tbody className="text-amber-700 dark:text-amber-300">
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">"Mach Krieger 2"</td><td className="border border-amber-300 dark:border-amber-700 p-2">"Schritt mit dem rechten Fuß nach hinten, dreh die Hüfte auf, beuge das vordere Knie über den Knöchel"</td></tr>
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">"Strecke deinen Arm"</td><td className="border border-amber-300 dark:border-amber-700 p-2">"Strecke deinen linken Arm zur Decke, Finger gespreizt, als ob du etwas greifen willst"</td></tr>
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">"Entspann dich"</td><td className="border border-amber-300 dark:border-amber-700 p-2">"Lass die Schultern von den Ohren sinken, löse die Spannung im Kiefer"</td></tr>
      </tbody>
    </table>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-4">
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Die 4 Arten von Cues</h4>
    <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li><strong>Direktionale Cues:</strong> "Hebe den rechten Arm" – klare Richtungsanweisungen</li>
      <li><strong>Alignment Cues:</strong> "Knie über dem Knöchel" – korrekte Ausrichtung</li>
      <li><strong>Energetische Cues:</strong> "Wurzle durch die Füße, wachse durch die Krone" – Qualität der Bewegung</li>
      <li><strong>Bildhafte Cues:</strong> "Stell dir vor, du drückst eine Wand weg" – Visualisierungen</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Hands-On Adjustments</h3>
  <div className="bg-red-50 dark:bg-red-900/40 p-5 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Goldene Regeln</h4>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li><strong>IMMER fragen:</strong> "Darf ich dich berühren?" – Consent ist nicht verhandelbar</li>
      <li><strong>Stabilisieren, nicht drücken:</strong> Unterstütze die Pose, zwinge niemanden tiefer</li>
      <li><strong>Vom Boden arbeiten:</strong> Stabile Basis des Schülers zuerst verbessern</li>
      <li><strong>Weniger ist mehr:</strong> Eine präzise Berührung ist effektiver als viele</li>
      <li><strong>Kenne deine Grenzen:</strong> Adjustments bei Nacken, Wirbelsäule und Knien erfordern besondere Sorgfalt</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Unterrichtsplanung</h3>
  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Template: 60-Minuten Klasse</h4>
    <table className="w-full border-collapse">
      <thead><tr className="bg-green-100 dark:bg-green-800/40">
        <th className="border border-green-300 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Phase</th>
        <th className="border border-green-300 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Zeit</th>
        <th className="border border-green-300 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Inhalt</th>
      </tr></thead>
      <tbody className="text-green-700 dark:text-green-300">
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Ankommen</td><td className="border border-green-300 dark:border-green-700 p-2">5 Min.</td><td className="border border-green-300 dark:border-green-700 p-2">Sitzend, Atemübung, Thema/Intention</td></tr>
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Aufwärmen</td><td className="border border-green-300 dark:border-green-700 p-2">10 Min.</td><td className="border border-green-300 dark:border-green-700 p-2">Cat-Cow, Schulter-Mobilisation, sanfte Twists</td></tr>
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Sonnengrüße</td><td className="border border-green-300 dark:border-green-700 p-2">10 Min.</td><td className="border border-green-300 dark:border-green-700 p-2">3x Surya A, 2x Surya B</td></tr>
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Stehende Posen</td><td className="border border-green-300 dark:border-green-700 p-2">15 Min.</td><td className="border border-green-300 dark:border-green-700 p-2">Krieger I, II, III, Dreieck, Halbmond</td></tr>
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Peak Pose</td><td className="border border-green-300 dark:border-green-700 p-2">5 Min.</td><td className="border border-green-300 dark:border-green-700 p-2">z.B. Rad, Krähe, Kopfstand</td></tr>
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Cool Down</td><td className="border border-green-300 dark:border-green-700 p-2">10 Min.</td><td className="border border-green-300 dark:border-green-700 p-2">Pigeon, Vorbeuge, Twist, Schulterstand</td></tr>
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Savasana</td><td className="border border-green-300 dark:border-green-700 p-2">5 Min.</td><td className="border border-green-300 dark:border-green-700 p-2">Tiefenentspannung</td></tr>
      </tbody>
    </table>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Teaching Yoga</h2>
  <p className="text-lg leading-relaxed">Whether you want to become a yoga teacher or simply understand how a great class is structured – the art of teaching combines technical knowledge with creativity and empathy. Here you'll learn the most important principles.</p>

  <h3 className="text-2xl font-bold mt-8 mb-4">Sequencing Principles</h3>
  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">The Arc of a Class</h4>
    <p className="text-purple-700 dark:text-purple-300 mb-3">Every great yoga class follows an arc – like climbing a mountain:</p>
    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li><strong>Centering (5-10 min):</strong> Grounding, breathwork, setting intention</li>
      <li><strong>Warm-up (10-15 min):</strong> Cat-Cow, gentle mobilization, easy stretches</li>
      <li><strong>Building (15-20 min):</strong> Sun Salutations, standing poses, increasing intensity</li>
      <li><strong>Peak Pose (5-10 min):</strong> The most challenging pose of the class</li>
      <li><strong>Cool Down (10-15 min):</strong> Seated poses, forward bends, twists</li>
      <li><strong>Savasana (5-10 min):</strong> Deep relaxation, integration</li>
    </ol>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-4">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Sequencing Rules</h4>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Warm before cool:</strong> Dynamic poses first, passive at the end</li>
      <li><strong>Simple before complex:</strong> Foundation poses before variations</li>
      <li><strong>Counter-poses:</strong> After backbends → forward bend. After twists → neutral spine</li>
      <li><strong>Both sides:</strong> Always practice left AND right (equal duration)</li>
      <li><strong>Prepare the peak:</strong> All preceding poses should build toward the peak pose</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Art of Cueing (Verbal Instruction)</h3>
  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Good vs. Bad Cueing</h4>
    <table className="w-full border-collapse mt-3">
      <thead><tr className="bg-amber-100 dark:bg-amber-800/40">
        <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Bad</th>
        <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Better</th>
      </tr></thead>
      <tbody className="text-amber-700 dark:text-amber-300">
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">"Do Warrior 2"</td><td className="border border-amber-300 dark:border-amber-700 p-2">"Step your right foot back, open your hips, bend your front knee over the ankle"</td></tr>
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">"Stretch your arm"</td><td className="border border-amber-300 dark:border-amber-700 p-2">"Extend your left arm to the ceiling, fingers spread, as if reaching for something"</td></tr>
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">"Relax"</td><td className="border border-amber-300 dark:border-amber-700 p-2">"Let your shoulders drop away from your ears, release the tension in your jaw"</td></tr>
      </tbody>
    </table>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-4">
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">The 4 Types of Cues</h4>
    <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li><strong>Directional Cues:</strong> "Lift your right arm" – clear direction</li>
      <li><strong>Alignment Cues:</strong> "Knee over ankle" – correct positioning</li>
      <li><strong>Energetic Cues:</strong> "Root through your feet, grow through the crown" – quality of movement</li>
      <li><strong>Imagery Cues:</strong> "Imagine pushing a wall away" – visualizations</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Hands-On Adjustments</h3>
  <div className="bg-red-50 dark:bg-red-900/40 p-5 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Golden Rules</h4>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li><strong>ALWAYS ask:</strong> "May I touch you?" – Consent is non-negotiable</li>
      <li><strong>Stabilize, don't push:</strong> Support the pose, never force someone deeper</li>
      <li><strong>Work from the ground:</strong> Improve the student's stable base first</li>
      <li><strong>Less is more:</strong> One precise touch is more effective than many</li>
      <li><strong>Know your limits:</strong> Adjustments at neck, spine, and knees require extra care</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Class Planning</h3>
  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Template: 60-Minute Class</h4>
    <table className="w-full border-collapse">
      <thead><tr className="bg-green-100 dark:bg-green-800/40">
        <th className="border border-green-300 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Phase</th>
        <th className="border border-green-300 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Time</th>
        <th className="border border-green-300 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Content</th>
      </tr></thead>
      <tbody className="text-green-700 dark:text-green-300">
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Centering</td><td className="border border-green-300 dark:border-green-700 p-2">5 min</td><td className="border border-green-300 dark:border-green-700 p-2">Seated, breathwork, theme/intention</td></tr>
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Warm-up</td><td className="border border-green-300 dark:border-green-700 p-2">10 min</td><td className="border border-green-300 dark:border-green-700 p-2">Cat-Cow, shoulder mobilization, gentle twists</td></tr>
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Sun Salutations</td><td className="border border-green-300 dark:border-green-700 p-2">10 min</td><td className="border border-green-300 dark:border-green-700 p-2">3x Surya A, 2x Surya B</td></tr>
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Standing Poses</td><td className="border border-green-300 dark:border-green-700 p-2">15 min</td><td className="border border-green-300 dark:border-green-700 p-2">Warrior I, II, III, Triangle, Crescent</td></tr>
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Peak Pose</td><td className="border border-green-300 dark:border-green-700 p-2">5 min</td><td className="border border-green-300 dark:border-green-700 p-2">e.g. Wheel, Crow, Headstand</td></tr>
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Cool Down</td><td className="border border-green-300 dark:border-green-700 p-2">10 min</td><td className="border border-green-300 dark:border-green-700 p-2">Pigeon, Forward Bend, Twist, Shoulderstand</td></tr>
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Savasana</td><td className="border border-green-300 dark:border-green-700 p-2">5 min</td><td className="border border-green-300 dark:border-green-700 p-2">Deep relaxation</td></tr>
      </tbody>
    </table>
  </div>
</div>
    `
  },
  task: { de: { title: "Eine Yoga-Klasse planen", description: "Erstelle deine erste eigene Sequenz.", checklist: [{ text: "Wähle eine Peak Pose und plane 3 vorbereitende Posen", checked: false }, { text: "Schreibe einen vollständigen 60-Minuten Klassenplan", checked: false }, { text: "Übe Cueing: Leite eine Pose verbal an, ohne sie zu zeigen", checked: false }] }, en: { title: "Plan a Yoga Class", description: "Create your first own sequence.", checklist: [{ text: "Choose a peak pose and plan 3 preparatory poses", checked: false }, { text: "Write a complete 60-minute class plan", checked: false }, { text: "Practice cueing: verbally guide a pose without demonstrating", checked: false }] } },
  quiz: { de: [{ question: "Was sind die 6 Phasen einer Yoga-Klasse?", answer: "1. Ankommen, 2. Aufwärmen, 3. Aufbau (Sonnengrüße, stehende Posen), 4. Peak Pose, 5. Cool Down, 6. Savasana." }, { question: "Was sind die 4 Arten von Cues?", answer: "1. Direktionale (Richtung), 2. Alignment (Ausrichtung), 3. Energetische (Qualität), 4. Bildhafte (Visualisierung)." }, { question: "Was ist die wichtigste Regel bei Hands-On Adjustments?", answer: "IMMER um Erlaubnis fragen (Consent). Berührung ist nie selbstverständlich." }], en: [{ question: "What are the 6 phases of a yoga class?", answer: "1. Centering, 2. Warm-up, 3. Building (Sun Salutations, standing poses), 4. Peak Pose, 5. Cool Down, 6. Savasana." }, { question: "What are the 4 types of cues?", answer: "1. Directional (direction), 2. Alignment (positioning), 3. Energetic (quality), 4. Imagery (visualization)." }, { question: "What is the most important rule for hands-on adjustments?", answer: "ALWAYS ask for permission (consent). Touch is never assumed." }] }
};
