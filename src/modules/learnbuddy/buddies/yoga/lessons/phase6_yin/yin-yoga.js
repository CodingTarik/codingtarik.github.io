export const yinYoga = {
  title: { de: "Yin Yoga - Passive Dehnungen, tiefe Entspannung", en: "Yin Yoga - Passive Stretches, Deep Relaxation" },
  description: { de: "Entdecke Yin Yoga: lange gehaltene, passive Posen für tiefes Bindegewebe und innere Ruhe.", en: "Discover Yin Yoga: long-held, passive poses for deep connective tissue and inner calm." },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Yin Yoga</h2>
  <p className="text-lg leading-relaxed">Yin Yoga ist das perfekte Gegenstück zu einer dynamischen Praxis. Hier hältst du passive Posen 3-5 Minuten und lässt die Schwerkraft die Arbeit machen. Ziel sind tiefe Schichten: Faszien, Bänder, Gelenke und das Nervensystem.</p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Yin vs. Yang</h3>
    <table className="w-full border-collapse mt-3">
      <thead><tr className="bg-purple-100 dark:bg-purple-800/40">
        <th className="border border-purple-300 dark:border-purple-700 p-2 text-left text-purple-800 dark:text-purple-200">Yin Yoga</th>
        <th className="border border-purple-300 dark:border-purple-700 p-2 text-left text-purple-800 dark:text-purple-200">Yang Yoga (Vinyasa/Hatha)</th>
      </tr></thead>
      <tbody className="text-purple-700 dark:text-purple-300">
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">Passiv, entspannt</td><td className="border border-purple-300 dark:border-purple-700 p-2">Aktiv, muskulär</td></tr>
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">3-5 Minuten halten</td><td className="border border-purple-300 dark:border-purple-700 p-2">5-10 Atemzüge</td></tr>
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">Bindegewebe, Faszien</td><td className="border border-purple-300 dark:border-purple-700 p-2">Muskeln, Herz-Kreislauf</td></tr>
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">Kühlend, beruhigend</td><td className="border border-purple-300 dark:border-purple-700 p-2">Wärmend, energetisierend</td></tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Grundlegende Yin-Posen</h3>
  <div className="space-y-4">
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Butterfly (Schmetterling)</h4>
      <p className="text-purple-700 dark:text-purple-300">Fußsohlen zusammen, Oberkörper nach vorne fallen lassen. Rücken darf rund sein! 3-5 Minuten.</p>
    </div>
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Dragon (Drache)</h4>
      <p className="text-purple-700 dark:text-purple-300">Tiefer Ausfallschritt, Hüfte sinken lassen. Öffnet Hüftbeuger und Leiste. 3-5 Minuten pro Seite.</p>
    </div>
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Sphinx</h4>
      <p className="text-purple-700 dark:text-purple-300">Auf dem Bauch, auf Unterarme gestützt. Sanfte Rückbeuge für die Lendenwirbelsäule. 3-5 Minuten.</p>
    </div>
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Sleeping Swan</h4>
      <p className="text-purple-700 dark:text-purple-300">Wie Pigeon Pose, aber Oberkörper komplett nach vorne ablegen. Tiefe Hüftöffnung. 3-5 Minuten pro Seite.</p>
    </div>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Die 3 Yin-Prinzipien</h3>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Finde deine Kante:</strong> Geh in die Pose bis zum ersten deutlichen Widerstand, nicht weiter</li>
      <li><strong>Sei still:</strong> Halte die Pose, bewege dich nicht, lass den Körper sich öffnen</li>
      <li><strong>Halte die Zeit:</strong> 3-5 Minuten mindestens, die Magie passiert erst nach 2 Minuten</li>
    </ol>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Praktische Übung: 30-Minuten Yin-Sequenz</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Butterfly - 5 Minuten</li>
      <li>Sleeping Swan rechts - 4 Minuten</li>
      <li>Sleeping Swan links - 4 Minuten</li>
      <li>Dragon rechts - 3 Minuten</li>
      <li>Dragon links - 3 Minuten</li>
      <li>Sphinx - 4 Minuten</li>
      <li>Savasana - 7 Minuten</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Yin Yoga</h2>
  <p className="text-lg leading-relaxed">Yin Yoga is the perfect counterpart to a dynamic practice. Here you hold passive poses for 3-5 minutes and let gravity do the work. The targets are deep layers: fascia, ligaments, joints, and the nervous system.</p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Yin vs. Yang</h3>
    <table className="w-full border-collapse mt-3">
      <thead><tr className="bg-purple-100 dark:bg-purple-800/40">
        <th className="border border-purple-300 dark:border-purple-700 p-2 text-left text-purple-800 dark:text-purple-200">Yin Yoga</th>
        <th className="border border-purple-300 dark:border-purple-700 p-2 text-left text-purple-800 dark:text-purple-200">Yang Yoga (Vinyasa/Hatha)</th>
      </tr></thead>
      <tbody className="text-purple-700 dark:text-purple-300">
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">Passive, relaxed</td><td className="border border-purple-300 dark:border-purple-700 p-2">Active, muscular</td></tr>
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">Hold 3-5 minutes</td><td className="border border-purple-300 dark:border-purple-700 p-2">5-10 breaths</td></tr>
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">Connective tissue, fascia</td><td className="border border-purple-300 dark:border-purple-700 p-2">Muscles, cardiovascular</td></tr>
        <tr><td className="border border-purple-300 dark:border-purple-700 p-2">Cooling, calming</td><td className="border border-purple-300 dark:border-purple-700 p-2">Warming, energizing</td></tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Basic Yin Poses</h3>
  <div className="space-y-4">
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Butterfly</h4>
      <p className="text-purple-700 dark:text-purple-300">Soles of feet together, let upper body fold forward. Back CAN be rounded! 3-5 minutes.</p>
    </div>
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Dragon</h4>
      <p className="text-purple-700 dark:text-purple-300">Deep lunge, let hips sink. Opens hip flexors and groin. 3-5 minutes per side.</p>
    </div>
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Sphinx</h4>
      <p className="text-purple-700 dark:text-purple-300">Face down, propped on forearms. Gentle backbend for the lumbar spine. 3-5 minutes.</p>
    </div>
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Sleeping Swan</h4>
      <p className="text-purple-700 dark:text-purple-300">Like Pigeon Pose but upper body folds completely forward. Deep hip opening. 3-5 minutes per side.</p>
    </div>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">The 3 Yin Principles</h3>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Find your edge:</strong> Enter the pose to the first clear resistance, no further</li>
      <li><strong>Be still:</strong> Hold the pose, don't move, let the body open</li>
      <li><strong>Hold the time:</strong> At least 3-5 minutes, the magic happens after 2 minutes</li>
    </ol>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Practice: 30-Minute Yin Sequence</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Butterfly - 5 minutes</li>
      <li>Sleeping Swan right - 4 minutes</li>
      <li>Sleeping Swan left - 4 minutes</li>
      <li>Dragon right - 3 minutes</li>
      <li>Dragon left - 3 minutes</li>
      <li>Sphinx - 4 minutes</li>
      <li>Savasana - 7 minutes</li>
    </ol>
  </div>
</div>
    `
  },
  task: { de: { title: "Yin Yoga entdecken", description: "Erlebe die transformative Kraft des langen Haltens.", checklist: [{ text: "Halte Butterfly 5 Minuten und beobachte, wie sich die Dehnung verändert", checked: false }, { text: "Übe Sleeping Swan 3 Minuten pro Seite", checked: false }, { text: "Führe die 30-Minuten Yin-Sequenz komplett durch", checked: false }] }, en: { title: "Discover Yin Yoga", description: "Experience the transformative power of long holding.", checklist: [{ text: "Hold Butterfly 5 minutes and observe how the stretch changes", checked: false }, { text: "Practice Sleeping Swan 3 minutes per side", checked: false }, { text: "Complete the 30-minute Yin sequence", checked: false }] } },
  quiz: { de: [{ question: "Was sind die 3 Yin-Prinzipien?", answer: "1. Finde deine Kante (geh zum ersten Widerstand). 2. Sei still (bewege dich nicht). 3. Halte die Zeit (3-5 Minuten)." }, { question: "Was ist der Hauptunterschied zwischen Yin und Yang Yoga?", answer: "Yin ist passiv und zielt auf Bindegewebe/Faszien (lange Haltezeiten), Yang ist aktiv und zielt auf Muskeln/Kreislauf (kurze Haltezeiten)." }, { question: "Warum darf der Rücken im Yin Yoga rund sein?", answer: "Im Yin Yoga arbeiten wir mit passiver Dehnung des Bindegewebes, nicht mit aktiver Muskelarbeit. Ein runder Rücken dehnt die Faszien entlang der Wirbelsäule." }], en: [{ question: "What are the 3 Yin principles?", answer: "1. Find your edge (go to first resistance). 2. Be still (don't move). 3. Hold the time (3-5 minutes)." }, { question: "What is the main difference between Yin and Yang Yoga?", answer: "Yin is passive targeting connective tissue/fascia (long holds), Yang is active targeting muscles/cardio (short holds)." }, { question: "Why can the back be rounded in Yin Yoga?", answer: "In Yin Yoga we work with passive stretching of connective tissue, not active muscle work. A rounded back stretches the fascia along the spine." }] }
};
