export const yogaForAthletes = {
  title: { de: "Yoga für Sportler - Leistungssteigerung & Verletzungsprävention", en: "Yoga for Athletes - Performance Enhancement & Injury Prevention" },
  description: { de: "Sport-spezifische Sequenzen, Regeneration, Verletzungsprävention und Cross-Training.", en: "Sport-specific sequences, recovery, injury prevention, and cross-training." },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Yoga für Sportler</h2>
  <p className="text-lg leading-relaxed">Yoga ist nicht nur Entspannung – es ist ein leistungsstarkes Cross-Training-Tool. Von LeBron James über die Deutsche Fußball-Nationalmannschaft bis zu Cristiano Ronaldo: Spitzenathleten nutzen Yoga für bessere Beweglichkeit, schnellere Regeneration und mentale Stärke. Hier lernst du, wie du Yoga gezielt für deinen Sport einsetzen kannst.</p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Warum Yoga für Sportler?</h3>
    <table className="w-full border-collapse mt-3">
      <thead><tr className="bg-purple-100 dark:bg-purple-800/40">
        <th className="border border-purple-300 dark:border-purple-700 p-2 text-left text-purple-800 dark:text-purple-200">Vorteil</th>
        <th className="border border-purple-300 dark:border-purple-700 p-2 text-left text-purple-800 dark:text-purple-200">Erklärung</th>
      </tr></thead>
      <tbody className="text-purple-700 dark:text-purple-300">
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">Beweglichkeit</td><td className="border border-purple-300 dark:border-purple-700 p-2">Größerer Bewegungsradius = mehr Kraft und Effizienz</td></tr>
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">Balance</td><td className="border border-purple-300 dark:border-purple-700 p-2">Propriozeption verbessern, Stabilität in jeder Position</td></tr>
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">Atemkontrolle</td><td className="border border-purple-300 dark:border-purple-700 p-2">Bessere Sauerstoffversorgung, späterer Laktatanstieg</td></tr>
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">Regeneration</td><td className="border border-purple-300 dark:border-purple-700 p-2">Schnellere Erholung durch Faszien-Arbeit und Entspannung</td></tr>
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">Verletzungsprävention</td><td className="border border-purple-300 dark:border-purple-700 p-2">Muskuläre Dysbalancen ausgleichen, Gelenke schützen</td></tr>
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">Mentale Stärke</td><td className="border border-purple-300 dark:border-purple-700 p-2">Fokus, Stressresistenz, Leistung unter Druck</td></tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Sport-spezifische Sequenzen</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800 mb-4">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Laufen / Radfahren</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-2">Fokus: Hüftbeuger, Hamstrings, IT-Band, Waden</p>
    <ol className="list-decimal list-inside space-y-1 text-blue-700 dark:text-blue-300 text-sm">
      <li>Low Lunge (Hüftbeuger) – 60 Sek. pro Seite</li>
      <li>Pyramid Pose (Hamstrings) – 60 Sek. pro Seite</li>
      <li>Pigeon Pose (Hüfte/Gesäß) – 90 Sek. pro Seite</li>
      <li>Reclined Hand-to-Big-Toe (Beinrückseite) – 60 Sek. pro Seite</li>
      <li>Downward Dog (Waden/Gesamtkörper) – 90 Sek.</li>
    </ol>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800 mb-4">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Kraftsport / CrossFit</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-2">Fokus: Schultern, Brustwirbelsäule, Hüfte, Handgelenke</p>
    <ol className="list-decimal list-inside space-y-1 text-blue-700 dark:text-blue-300 text-sm">
      <li>Eagle Arms (Schultern) – 45 Sek. pro Seite</li>
      <li>Thread the Needle (BWS-Rotation) – 60 Sek. pro Seite</li>
      <li>Malasana (tiefe Hocke) – 90 Sek.</li>
      <li>Lizard Pose (Hüftöffner) – 60 Sek. pro Seite</li>
      <li>Wrist Stretches (Handgelenke) – 60 Sek.</li>
    </ol>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800 mb-4">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Ballsport (Fußball, Basketball, Tennis)</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-2">Fokus: Sprunggelenke, Knie-Stabilität, Hüfte, Rumpf</p>
    <ol className="list-decimal list-inside space-y-1 text-blue-700 dark:text-blue-300 text-sm">
      <li>Tree Pose (Einbein-Balance) – 45 Sek. pro Seite</li>
      <li>Warrior III (Knie-Stabilität) – 30 Sek. pro Seite</li>
      <li>Side Plank (Rumpf/Seitenstabilität) – 30 Sek. pro Seite</li>
      <li>Half Split (Hamstrings) – 60 Sek. pro Seite</li>
      <li>Supine Twist (Rücken/Regeneration) – 90 Sek. pro Seite</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Regenerations-Protokoll (Post-Workout)</h3>
  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <p className="text-amber-700 dark:text-amber-300 mb-3">Diese 15-Minuten-Sequenz nach dem Training beschleunigt die Regeneration:</p>
    <ol className="list-decimal list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Child's Pose</strong> (2 Min.) – Nervensystem beruhigen</li>
      <li><strong>Downward Dog</strong> (1 Min.) – Gesamtkörper-Dehnung</li>
      <li><strong>Low Lunge + Twist</strong> (je 1 Min./Seite) – Hüftbeuger und BWS</li>
      <li><strong>Pigeon Pose</strong> (je 2 Min./Seite) – Tiefe Hüftöffnung</li>
      <li><strong>Supine Twist</strong> (je 1 Min./Seite) – Wirbelsäule dekomprimieren</li>
      <li><strong>Legs Up the Wall</strong> (3 Min.) – Durchblutung fördern</li>
    </ol>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Wochenplan: Yoga-Integration</h3>
    <table className="w-full border-collapse">
      <thead><tr className="bg-green-100 dark:bg-green-800/40">
        <th className="border border-green-300 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Tag</th>
        <th className="border border-green-300 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Empfehlung</th>
      </tr></thead>
      <tbody className="text-green-700 dark:text-green-300">
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Trainingstage</td><td className="border border-green-300 dark:border-green-700 p-2">15 Min. Post-Workout Regenerations-Sequenz</td></tr>
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Ruhetage</td><td className="border border-green-300 dark:border-green-700 p-2">30-45 Min. Yin oder Restorative Yoga</td></tr>
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Vor Wettkampf</td><td className="border border-green-300 dark:border-green-700 p-2">10 Min. dynamisches Yoga + Atemübungen</td></tr>
      </tbody>
    </table>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Yoga for Athletes</h2>
  <p className="text-lg leading-relaxed">Yoga isn't just relaxation – it's a powerful cross-training tool. From LeBron James to the German national football team to Cristiano Ronaldo: top athletes use yoga for better mobility, faster recovery, and mental toughness. Here you'll learn how to use yoga specifically for your sport.</p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Why Yoga for Athletes?</h3>
    <table className="w-full border-collapse mt-3">
      <thead><tr className="bg-purple-100 dark:bg-purple-800/40">
        <th className="border border-purple-300 dark:border-purple-700 p-2 text-left text-purple-800 dark:text-purple-200">Benefit</th>
        <th className="border border-purple-300 dark:border-purple-700 p-2 text-left text-purple-800 dark:text-purple-200">Explanation</th>
      </tr></thead>
      <tbody className="text-purple-700 dark:text-purple-300">
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">Mobility</td><td className="border border-purple-300 dark:border-purple-700 p-2">Greater range of motion = more power and efficiency</td></tr>
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">Balance</td><td className="border border-purple-300 dark:border-purple-700 p-2">Improved proprioception, stability in every position</td></tr>
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">Breath Control</td><td className="border border-purple-300 dark:border-purple-700 p-2">Better oxygen supply, delayed lactate buildup</td></tr>
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">Recovery</td><td className="border border-purple-300 dark:border-purple-700 p-2">Faster recovery through fascia work and relaxation</td></tr>
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">Injury Prevention</td><td className="border border-purple-300 dark:border-purple-700 p-2">Balance muscular imbalances, protect joints</td></tr>
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">Mental Toughness</td><td className="border border-purple-300 dark:border-purple-700 p-2">Focus, stress resistance, performance under pressure</td></tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Sport-Specific Sequences</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800 mb-4">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Running / Cycling</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-2">Focus: Hip flexors, hamstrings, IT band, calves</p>
    <ol className="list-decimal list-inside space-y-1 text-blue-700 dark:text-blue-300 text-sm">
      <li>Low Lunge (hip flexors) – 60 sec per side</li>
      <li>Pyramid Pose (hamstrings) – 60 sec per side</li>
      <li>Pigeon Pose (hip/glutes) – 90 sec per side</li>
      <li>Reclined Hand-to-Big-Toe (hamstrings) – 60 sec per side</li>
      <li>Downward Dog (calves/full body) – 90 sec</li>
    </ol>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800 mb-4">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Weight Training / CrossFit</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-2">Focus: Shoulders, thoracic spine, hips, wrists</p>
    <ol className="list-decimal list-inside space-y-1 text-blue-700 dark:text-blue-300 text-sm">
      <li>Eagle Arms (shoulders) – 45 sec per side</li>
      <li>Thread the Needle (thoracic rotation) – 60 sec per side</li>
      <li>Malasana (deep squat) – 90 sec</li>
      <li>Lizard Pose (hip opener) – 60 sec per side</li>
      <li>Wrist Stretches (wrists) – 60 sec</li>
    </ol>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800 mb-4">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Ball Sports (Soccer, Basketball, Tennis)</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-2">Focus: Ankles, knee stability, hips, core</p>
    <ol className="list-decimal list-inside space-y-1 text-blue-700 dark:text-blue-300 text-sm">
      <li>Tree Pose (single-leg balance) – 45 sec per side</li>
      <li>Warrior III (knee stability) – 30 sec per side</li>
      <li>Side Plank (core/lateral stability) – 30 sec per side</li>
      <li>Half Split (hamstrings) – 60 sec per side</li>
      <li>Supine Twist (back/recovery) – 90 sec per side</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Recovery Protocol (Post-Workout)</h3>
  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <p className="text-amber-700 dark:text-amber-300 mb-3">This 15-minute post-workout sequence accelerates recovery:</p>
    <ol className="list-decimal list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Child's Pose</strong> (2 min) – Calm the nervous system</li>
      <li><strong>Downward Dog</strong> (1 min) – Full body stretch</li>
      <li><strong>Low Lunge + Twist</strong> (1 min/side each) – Hip flexors and thoracic spine</li>
      <li><strong>Pigeon Pose</strong> (2 min/side each) – Deep hip opening</li>
      <li><strong>Supine Twist</strong> (1 min/side each) – Decompress the spine</li>
      <li><strong>Legs Up the Wall</strong> (3 min) – Promote circulation</li>
    </ol>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Weekly Plan: Yoga Integration</h3>
    <table className="w-full border-collapse">
      <thead><tr className="bg-green-100 dark:bg-green-800/40">
        <th className="border border-green-300 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Day</th>
        <th className="border border-green-300 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Recommendation</th>
      </tr></thead>
      <tbody className="text-green-700 dark:text-green-300">
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Training days</td><td className="border border-green-300 dark:border-green-700 p-2">15 min post-workout recovery sequence</td></tr>
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Rest days</td><td className="border border-green-300 dark:border-green-700 p-2">30-45 min Yin or Restorative Yoga</td></tr>
        <tr><td className="border border-green-300 dark:border-green-700 p-2">Pre-competition</td><td className="border border-green-300 dark:border-green-700 p-2">10 min dynamic yoga + breathwork</td></tr>
      </tbody>
    </table>
  </div>
</div>
    `
  },
  task: { de: { title: "Yoga für deinen Sport", description: "Integriere Yoga in dein Training.", checklist: [{ text: "Wähle die Sequenz für deine Sportart und übe sie nach dem Training", checked: false }, { text: "Führe das 15-Minuten Regenerations-Protokoll nach dem nächsten Workout durch", checked: false }, { text: "Erstelle einen Wochenplan mit Yoga-Integration", checked: false }] }, en: { title: "Yoga for Your Sport", description: "Integrate yoga into your training.", checklist: [{ text: "Choose the sequence for your sport and practice it after training", checked: false }, { text: "Complete the 15-minute recovery protocol after your next workout", checked: false }, { text: "Create a weekly plan with yoga integration", checked: false }] } },
  quiz: { de: [{ question: "Welche drei Hauptvorteile hat Yoga für Sportler?", answer: "1. Größerer Bewegungsradius (mehr Kraft/Effizienz), 2. Schnellere Regeneration durch Faszien-Arbeit, 3. Verletzungsprävention durch Ausgleich muskulärer Dysbalancen." }, { question: "Was sollte an Ruhetagen gemacht werden?", answer: "30-45 Minuten Yin oder Restorative Yoga für tiefe Regeneration und Faszien-Arbeit." }, { question: "Warum ist Legs Up the Wall gut nach dem Training?", answer: "Es fördert die venöse Rückführung (Durchblutung), reduziert Schwellungen in den Beinen und beruhigt das Nervensystem." }], en: [{ question: "What are three main benefits of yoga for athletes?", answer: "1. Greater range of motion (more power/efficiency), 2. Faster recovery through fascia work, 3. Injury prevention by balancing muscular imbalances." }, { question: "What should be done on rest days?", answer: "30-45 minutes of Yin or Restorative Yoga for deep recovery and fascia work." }, { question: "Why is Legs Up the Wall good after training?", answer: "It promotes venous return (circulation), reduces swelling in the legs, and calms the nervous system." }] }
};
