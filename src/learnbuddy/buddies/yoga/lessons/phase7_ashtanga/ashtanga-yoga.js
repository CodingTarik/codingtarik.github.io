export const ashtangaYoga = {
  title: { de: "Ashtanga Yoga - Primärserie, Mysore-Stil & Drishti", en: "Ashtanga Yoga - Primary Series, Mysore Style & Drishti" },
  description: { de: "Lerne das traditionelle Ashtanga-System: die Primärserie, Atemzählung, Bandhas und den Mysore-Stil.", en: "Learn the traditional Ashtanga system: the primary series, breath counting, bandhas, and the Mysore style." },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Ashtanga Yoga</h2>
  <p className="text-lg leading-relaxed">Ashtanga Yoga ist eines der strukturiertesten Yoga-Systeme überhaupt. Entwickelt von Sri K. Pattabhi Jois in Mysore, Indien, basiert es auf einer festen Abfolge von Posen, die mit dem Atem synchronisiert werden. Es gibt sechs Serien, aber die meisten Praktizierenden arbeiten jahrelang an der Primärserie (Yoga Chikitsa – „Yoga-Therapie").</p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Die acht Glieder (Ashtanga = Acht Glieder)</h3>
    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li><strong>Yama</strong> – Ethische Regeln (Gewaltlosigkeit, Wahrhaftigkeit, etc.)</li>
      <li><strong>Niyama</strong> – Selbstdisziplin (Reinheit, Zufriedenheit, etc.)</li>
      <li><strong>Asana</strong> – Körperübungen</li>
      <li><strong>Pranayama</strong> – Atemkontrolle</li>
      <li><strong>Pratyahara</strong> – Rückzug der Sinne</li>
      <li><strong>Dharana</strong> – Konzentration</li>
      <li><strong>Dhyana</strong> – Meditation</li>
      <li><strong>Samadhi</strong> – Einheit / Erleuchtung</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Die Tristhana-Methode</h3>
  <p className="leading-relaxed">Die drei Säulen der Ashtanga-Praxis bilden zusammen eine bewegende Meditation:</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800 text-center">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Ujjayi Pranayama</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">Hörbare Atmung durch die Nase. Jede Bewegung wird durch einen Ein- oder Ausatem eingeleitet. Der Atem ist der Taktgeber.</p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800 text-center">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Bandhas</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">Energieverschlüsse. Mula Bandha (Beckenboden) und Uddiyana Bandha (Bauch) bleiben während der gesamten Praxis aktiv.</p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800 text-center">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Drishti</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">9 Blickpunkte (Nasenspitze, Daumen, dritte Auge, Nabel, etc.). Fokussiert den Geist und verhindert Ablenkung.</p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Die Primärserie (Yoga Chikitsa)</h3>
  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Ablauf der Primärserie:</h4>
    <ol className="list-decimal list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Sonnengruß A</strong> (5x) & <strong>Sonnengruß B</strong> (5x) – Aufwärmen</li>
      <li><strong>Stehende Sequenz</strong> – Padangusthasana, Trikonasana, Parsvakonasana, Prasarita Padottanasana, Parsvottanasana, Utthita Hasta Padangusthasana</li>
      <li><strong>Sitzende Sequenz</strong> – Paschimottanasana, Purvottanasana, Janu Sirsasana A/B/C, Marichyasana A/B/C/D, Navasana</li>
      <li><strong>Rückbeugen</strong> – Urdhva Dhanurasana (Rad)</li>
      <li><strong>Abschlusssequenz</strong> – Schulterstand, Pflug, Fisch, Kopfstand, Padmasana, Savasana</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Mysore-Stil</h3>
  <p className="leading-relaxed">Im Mysore-Stil übt jeder in seinem eigenen Tempo die auswendig gelernte Sequenz. Der Lehrer geht durch den Raum und gibt individuelle Hilfestellungen (Adjustments). Es gibt keinen geführten Unterricht – du lernst die Sequenz Schritt für Schritt und bekommst neue Posen erst, wenn die vorherigen gemeistert sind.</p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Vinyasa Count (Atemzählung)</h3>
    <p className="text-blue-700 dark:text-blue-300 mb-3">Jede Pose hat eine bestimmte Anzahl von Vinyasas (Atem-Bewegungs-Verbindungen). Beispiel Surya Namaskar A:</p>
    <table className="w-full border-collapse mt-3">
      <thead><tr className="bg-blue-100 dark:bg-blue-800/40">
        <th className="border border-blue-300 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Zählung</th>
        <th className="border border-blue-300 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Atem</th>
        <th className="border border-blue-300 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Bewegung</th>
      </tr></thead>
      <tbody className="text-blue-700 dark:text-blue-300">
        <tr><td className="border border-blue-300 dark:border-blue-700 p-2">Ekam (1)</td><td className="border border-blue-300 dark:border-blue-700 p-2">Einatmen</td><td className="border border-blue-300 dark:border-blue-700 p-2">Arme hoch (Urdhva Hastasana)</td></tr>
        <tr><td className="border border-blue-300 dark:border-blue-700 p-2">Dve (2)</td><td className="border border-blue-300 dark:border-blue-700 p-2">Ausatmen</td><td className="border border-blue-300 dark:border-blue-700 p-2">Vorbeuge (Uttanasana)</td></tr>
        <tr><td className="border border-blue-300 dark:border-blue-700 p-2">Trini (3)</td><td className="border border-blue-300 dark:border-blue-700 p-2">Einatmen</td><td className="border border-blue-300 dark:border-blue-700 p-2">Halbe Vorbeuge (Ardha Uttanasana)</td></tr>
        <tr><td className="border border-blue-300 dark:border-blue-700 p-2">Catvari (4)</td><td className="border border-blue-300 dark:border-blue-700 p-2">Ausatmen</td><td className="border border-blue-300 dark:border-blue-700 p-2">Chaturanga Dandasana</td></tr>
      </tbody>
    </table>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-5 rounded-xl border-2 border-red-200 dark:border-red-800 mt-6">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">Wichtige Hinweise</h3>
    <ul className="list-disc list-inside space-y-1 text-red-700 dark:text-red-300">
      <li>Traditionell wird 6 Tage pro Woche geübt (Samstag frei, Mond-/Neumond frei)</li>
      <li>Morgenpraxis vor dem Frühstück ist ideal</li>
      <li>Geduld: Posen werden nur vom Lehrer „gegeben", wenn du bereit bist</li>
      <li>Vergleiche dich nicht mit anderen – jeder hat seinen eigenen Weg</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Praktische Übung: Ashtanga-Einstieg</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Lerne Surya Namaskar A auswendig und übe 5 Runden mit Atemzählung</li>
      <li>Füge Surya Namaskar B hinzu (5 Runden)</li>
      <li>Übe die stehende Sequenz bis Parsvottanasana</li>
      <li>Halte Mula Bandha und Ujjayi-Atmung durchgehend aktiv</li>
      <li>Wähle für jede Pose den korrekten Drishti-Punkt</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Ashtanga Yoga</h2>
  <p className="text-lg leading-relaxed">Ashtanga Yoga is one of the most structured yoga systems in existence. Developed by Sri K. Pattabhi Jois in Mysore, India, it is based on a fixed sequence of poses synchronized with the breath. There are six series, but most practitioners spend years working on the Primary Series (Yoga Chikitsa – "Yoga Therapy").</p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">The Eight Limbs (Ashtanga = Eight Limbs)</h3>
    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li><strong>Yama</strong> – Ethical rules (non-violence, truthfulness, etc.)</li>
      <li><strong>Niyama</strong> – Self-discipline (purity, contentment, etc.)</li>
      <li><strong>Asana</strong> – Physical postures</li>
      <li><strong>Pranayama</strong> – Breath control</li>
      <li><strong>Pratyahara</strong> – Sense withdrawal</li>
      <li><strong>Dharana</strong> – Concentration</li>
      <li><strong>Dhyana</strong> – Meditation</li>
      <li><strong>Samadhi</strong> – Union / Enlightenment</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Tristhana Method</h3>
  <p className="leading-relaxed">The three pillars of Ashtanga practice together form a moving meditation:</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800 text-center">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Ujjayi Pranayama</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">Audible breathing through the nose. Every movement is initiated by an inhale or exhale. The breath is the metronome.</p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800 text-center">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Bandhas</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">Energy locks. Mula Bandha (pelvic floor) and Uddiyana Bandha (abdomen) remain active throughout the entire practice.</p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800 text-center">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Drishti</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">9 gazing points (nose tip, thumb, third eye, navel, etc.). Focuses the mind and prevents distraction.</p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Primary Series (Yoga Chikitsa)</h3>
  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Primary Series Structure:</h4>
    <ol className="list-decimal list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Sun Salutation A</strong> (5x) & <strong>Sun Salutation B</strong> (5x) – Warm-up</li>
      <li><strong>Standing Sequence</strong> – Padangusthasana, Trikonasana, Parsvakonasana, Prasarita Padottanasana, Parsvottanasana, Utthita Hasta Padangusthasana</li>
      <li><strong>Seated Sequence</strong> – Paschimottanasana, Purvottanasana, Janu Sirsasana A/B/C, Marichyasana A/B/C/D, Navasana</li>
      <li><strong>Backbends</strong> – Urdhva Dhanurasana (Wheel)</li>
      <li><strong>Closing Sequence</strong> – Shoulderstand, Plow, Fish, Headstand, Padmasana, Savasana</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Mysore Style</h3>
  <p className="leading-relaxed">In Mysore style, each student practices the memorized sequence at their own pace. The teacher walks around the room providing individual adjustments. There is no led class – you learn the sequence step by step and only receive new poses when the previous ones are mastered.</p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Vinyasa Count (Breath Counting)</h3>
    <p className="text-blue-700 dark:text-blue-300 mb-3">Each pose has a specific number of vinyasas (breath-movement connections). Example Surya Namaskar A:</p>
    <table className="w-full border-collapse mt-3">
      <thead><tr className="bg-blue-100 dark:bg-blue-800/40">
        <th className="border border-blue-300 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Count</th>
        <th className="border border-blue-300 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Breath</th>
        <th className="border border-blue-300 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Movement</th>
      </tr></thead>
      <tbody className="text-blue-700 dark:text-blue-300">
        <tr><td className="border border-blue-300 dark:border-blue-700 p-2">Ekam (1)</td><td className="border border-blue-300 dark:border-blue-700 p-2">Inhale</td><td className="border border-blue-300 dark:border-blue-700 p-2">Arms up (Urdhva Hastasana)</td></tr>
        <tr><td className="border border-blue-300 dark:border-blue-700 p-2">Dve (2)</td><td className="border border-blue-300 dark:border-blue-700 p-2">Exhale</td><td className="border border-blue-300 dark:border-blue-700 p-2">Forward fold (Uttanasana)</td></tr>
        <tr><td className="border border-blue-300 dark:border-blue-700 p-2">Trini (3)</td><td className="border border-blue-300 dark:border-blue-700 p-2">Inhale</td><td className="border border-blue-300 dark:border-blue-700 p-2">Half lift (Ardha Uttanasana)</td></tr>
        <tr><td className="border border-blue-300 dark:border-blue-700 p-2">Catvari (4)</td><td className="border border-blue-300 dark:border-blue-700 p-2">Exhale</td><td className="border border-blue-300 dark:border-blue-700 p-2">Chaturanga Dandasana</td></tr>
      </tbody>
    </table>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-5 rounded-xl border-2 border-red-200 dark:border-red-800 mt-6">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">Important Notes</h3>
    <ul className="list-disc list-inside space-y-1 text-red-700 dark:text-red-300">
      <li>Traditionally practiced 6 days per week (Saturday off, moon days off)</li>
      <li>Morning practice before breakfast is ideal</li>
      <li>Patience: poses are only "given" by the teacher when you are ready</li>
      <li>Don't compare yourself to others – everyone has their own path</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Practice: Ashtanga Introduction</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Memorize Surya Namaskar A and practice 5 rounds with breath counting</li>
      <li>Add Surya Namaskar B (5 rounds)</li>
      <li>Practice the standing sequence up to Parsvottanasana</li>
      <li>Keep Mula Bandha and Ujjayi breathing active throughout</li>
      <li>Choose the correct Drishti point for each pose</li>
    </ol>
  </div>
</div>
    `
  },
  task: { de: { title: "Ashtanga Yoga erkunden", description: "Tauche ein in das traditionelle Ashtanga-System.", checklist: [{ text: "Lerne Surya Namaskar A mit Sanskrit-Zählung auswendig", checked: false }, { text: "Übe 5 Runden Sonnengruß A mit Ujjayi-Atmung", checked: false }, { text: "Identifiziere die 9 Drishti-Punkte und wende sie in deiner Praxis an", checked: false }] }, en: { title: "Explore Ashtanga Yoga", description: "Dive into the traditional Ashtanga system.", checklist: [{ text: "Memorize Surya Namaskar A with Sanskrit counting", checked: false }, { text: "Practice 5 rounds of Sun Salutation A with Ujjayi breath", checked: false }, { text: "Identify the 9 Drishti points and apply them in your practice", checked: false }] } },
  quiz: { de: [{ question: "Was bedeutet 'Ashtanga' und welche acht Glieder gibt es?", answer: "Ashtanga bedeutet 'acht Glieder': Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi." }, { question: "Was ist die Tristhana-Methode?", answer: "Die drei Säulen der Ashtanga-Praxis: Ujjayi Pranayama (Atmung), Bandhas (Energieverschlüsse) und Drishti (Blickpunkte)." }, { question: "Was ist der Mysore-Stil?", answer: "Jeder übt die auswendig gelernte Sequenz in seinem eigenen Tempo, der Lehrer gibt individuelle Hilfestellungen. Neue Posen werden erst gegeben, wenn vorherige gemeistert sind." }], en: [{ question: "What does 'Ashtanga' mean and what are the eight limbs?", answer: "Ashtanga means 'eight limbs': Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi." }, { question: "What is the Tristhana method?", answer: "The three pillars of Ashtanga practice: Ujjayi Pranayama (breathing), Bandhas (energy locks), and Drishti (gazing points)." }, { question: "What is Mysore style?", answer: "Each student practices the memorized sequence at their own pace, the teacher provides individual adjustments. New poses are only given when previous ones are mastered." }] }
};
