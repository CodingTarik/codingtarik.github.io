export const advancedMeditation = {
  title: { de: "Fortgeschrittene Meditation - Vipassana, Metta, Body Scan & Mantra", en: "Advanced Meditation - Vipassana, Loving-Kindness, Body Scan & Mantra" },
  description: { de: "Vertiefe deine Meditationspraxis mit Vipassana, Loving-Kindness, Body Scan und Mantra-Meditation.", en: "Deepen your meditation practice with Vipassana, Loving-Kindness, Body Scan, and Mantra Meditation." },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Fortgeschrittene Meditation</h2>
  <p className="text-lg leading-relaxed">Nachdem du die Grundlagen der Meditation gemeistert hast, ist es Zeit, tiefer zu gehen. Diese vier fortgeschrittenen Techniken bieten jeweils einen einzigartigen Zugang zur inneren Welt und haben alle tiefe wissenschaftliche Unterstützung.</p>

  <h3 className="text-2xl font-bold mt-8 mb-4">1. Vipassana – Einsichtsmeditation</h3>
  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <p className="text-purple-700 dark:text-purple-300 mb-3">Vipassana (Pali: „klar sehen") ist eine der ältesten Meditationstechniken Indiens (2.500+ Jahre). Sie wurde von S.N. Goenka weltweit verbreitet. Das Ziel: die Realität so sehen, wie sie wirklich ist – Vergänglichkeit (Anicca).</p>
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Technik:</h4>
    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li><strong>Tag 1-3:</strong> Anapana – Beobachte nur den Atem an der Nasenspitze. Kein Kontrollieren, nur beobachten.</li>
      <li><strong>Tag 4+:</strong> Beginne, Empfindungen im gesamten Körper systematisch zu scannen. Von Kopf bis Fuß, dann zurück.</li>
      <li><strong>Schlüsselprinzip:</strong> Gleichmut (Equanimity) – Reagiere nicht auf angenehme oder unangenehme Empfindungen. Beobachte nur.</li>
      <li><strong>Erkenntnis:</strong> Alle Empfindungen sind vergänglich (Anicca). Anhaftung und Aversion erzeugen Leiden.</li>
    </ol>
    <p className="text-purple-700 dark:text-purple-300 mt-3 text-sm italic">Traditionell wird Vipassana in 10-Tage-Retreats erlernt (10 Stunden Meditation/Tag, Schweigen).</p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">2. Metta – Liebende-Güte-Meditation</h3>
  <div className="bg-pink-50 dark:bg-pink-900/40 p-6 rounded-xl border-2 border-pink-200 dark:border-pink-800">
    <p className="text-pink-700 dark:text-pink-300 mb-3">Metta (Loving-Kindness) kultiviert bedingungslose Liebe und Mitgefühl – erst für dich selbst, dann für andere, und schließlich für alle Wesen.</p>
    <h4 className="font-bold text-pink-800 dark:text-pink-200 mb-2">Anleitung (20 Minuten):</h4>
    <ol className="list-decimal list-inside space-y-2 text-pink-700 dark:text-pink-300">
      <li><strong>Für dich selbst (5 Min.):</strong> „Möge ich glücklich sein. Möge ich gesund sein. Möge ich sicher sein. Möge ich frei von Leiden sein."</li>
      <li><strong>Für einen geliebten Menschen (4 Min.):</strong> Visualisiere die Person, sende die gleichen Wünsche.</li>
      <li><strong>Für einen neutralen Menschen (3 Min.):</strong> Jemand, den du kaum kennst (Kassierer, Nachbar).</li>
      <li><strong>Für eine schwierige Person (4 Min.):</strong> Jemand, mit dem du Konflikte hast. Dies ist die größte Herausforderung.</li>
      <li><strong>Für alle Wesen (4 Min.):</strong> „Mögen alle Wesen glücklich sein. Mögen alle Wesen frei von Leiden sein."</li>
    </ol>
    <div className="bg-pink-100 dark:bg-pink-800/40 p-3 rounded-lg mt-3">
      <p className="text-pink-700 dark:text-pink-300 text-sm"><strong>Wissenschaft:</strong> Studien zeigen, dass regelmäßige Metta-Meditation die graue Substanz in Gehirnregionen für Empathie und emotionale Regulation vergrößert.</p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">3. Body Scan – Progressive Körperwahrnehmung</h3>
  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">Der Body Scan ist eine systematische Reise durch den Körper, die tiefe Entspannung und Körperbewusstsein fördert. Populär durch Jon Kabat-Zinn (MBSR).</p>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Anleitung (30 Minuten):</h4>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Lege dich bequem auf den Rücken (wie Savasana)</li>
      <li>Beginne bei den Zehen des linken Fußes. Spüre jede Empfindung: Wärme, Kälte, Kribbeln, Taubheit, Druck</li>
      <li>Wandere langsam aufwärts: Fuß → Knöchel → Unterschenkel → Knie → Oberschenkel</li>
      <li>Wiederhole rechts. Dann Becken → Bauch → Brust → Rücken → Hände → Arme → Schultern → Nacken → Gesicht → Scheitel</li>
      <li>Spüre am Ende den gesamten Körper als Ganzes</li>
    </ol>
    <p className="text-blue-700 dark:text-blue-300 mt-3 text-sm"><strong>Tipp:</strong> Wo du nichts spürst: Bleibe dort. Versuche nicht, etwas zu fühlen. Die Wahrnehmung kommt mit Übung.</p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">4. Mantra-Meditation</h3>
  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <p className="text-amber-700 dark:text-amber-300 mb-3">Ein Mantra (Sanskrit: „Instrument des Geistes") ist ein Wort oder Klang, der wiederholt wird, um den Geist zu fokussieren und Gedanken zu beruhigen.</p>
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Klassische Mantras:</h4>
    <table className="w-full border-collapse mt-3">
      <thead><tr className="bg-amber-100 dark:bg-amber-800/40">
        <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Mantra</th>
        <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Bedeutung</th>
        <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Anwendung</th>
      </tr></thead>
      <tbody className="text-amber-700 dark:text-amber-300">
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">OM</td><td className="border border-amber-300 dark:border-amber-700 p-2">Urklang des Universums</td><td className="border border-amber-300 dark:border-amber-700 p-2">Universell, Beginn/Ende der Praxis</td></tr>
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">So Hum</td><td className="border border-amber-300 dark:border-amber-700 p-2">„Ich bin das"</td><td className="border border-amber-300 dark:border-amber-700 p-2">Ein = So, Aus = Hum</td></tr>
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">Om Namah Shivaya</td><td className="border border-amber-300 dark:border-amber-700 p-2">Verbeugung vor dem inneren Selbst</td><td className="border border-amber-300 dark:border-amber-700 p-2">Selbstfindung, innerer Frieden</td></tr>
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">Om Mani Padme Hum</td><td className="border border-amber-300 dark:border-amber-700 p-2">Juwel im Lotus</td><td className="border border-amber-300 dark:border-amber-700 p-2">Mitgefühl, tibetisch-buddhistisch</td></tr>
      </tbody>
    </table>
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2 mt-4">Japa-Meditation mit Mala:</h4>
    <p className="text-amber-700 dark:text-amber-300">Verwende eine Mala-Kette (108 Perlen). Wiederhole das Mantra bei jeder Perle. Eine volle Runde = 108 Wiederholungen. Die Wiederholung wirkt wie ein Anker für den Geist.</p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Wochenplan: Meditationsvertiefung</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Montag:</strong> Vipassana – 20 Min. Body Scan mit Gleichmut</li>
      <li><strong>Dienstag:</strong> Metta – 20 Min. Liebende-Güte für alle 5 Gruppen</li>
      <li><strong>Mittwoch:</strong> Mantra – 20 Min. "So Hum" mit Atemfokus</li>
      <li><strong>Donnerstag:</strong> Body Scan – 30 Min. Progressive Körperwahrnehmung</li>
      <li><strong>Freitag:</strong> Vipassana – 20 Min. Empfindungen beobachten</li>
      <li><strong>Samstag:</strong> Metta – 20 Min. mit Fokus auf schwierige Person</li>
      <li><strong>Sonntag:</strong> Freie Wahl – 30 Min. deine Lieblingstechnik</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Advanced Meditation</h2>
  <p className="text-lg leading-relaxed">After mastering the basics of meditation, it's time to go deeper. These four advanced techniques each offer a unique gateway to the inner world, all backed by deep scientific research.</p>

  <h3 className="text-2xl font-bold mt-8 mb-4">1. Vipassana – Insight Meditation</h3>
  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <p className="text-purple-700 dark:text-purple-300 mb-3">Vipassana (Pali: "to see clearly") is one of India's oldest meditation techniques (2,500+ years). It was spread worldwide by S.N. Goenka. The goal: to see reality as it truly is – impermanence (Anicca).</p>
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Technique:</h4>
    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li><strong>Day 1-3:</strong> Anapana – Observe only the breath at the tip of the nose. No controlling, just observing.</li>
      <li><strong>Day 4+:</strong> Begin systematically scanning sensations throughout the entire body. Head to toe, then back.</li>
      <li><strong>Key principle:</strong> Equanimity – Don't react to pleasant or unpleasant sensations. Just observe.</li>
      <li><strong>Insight:</strong> All sensations are impermanent (Anicca). Attachment and aversion create suffering.</li>
    </ol>
    <p className="text-purple-700 dark:text-purple-300 mt-3 text-sm italic">Traditionally, Vipassana is learned in 10-day retreats (10 hours meditation/day, noble silence).</p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">2. Metta – Loving-Kindness Meditation</h3>
  <div className="bg-pink-50 dark:bg-pink-900/40 p-6 rounded-xl border-2 border-pink-200 dark:border-pink-800">
    <p className="text-pink-700 dark:text-pink-300 mb-3">Metta (Loving-Kindness) cultivates unconditional love and compassion – first for yourself, then for others, and finally for all beings.</p>
    <h4 className="font-bold text-pink-800 dark:text-pink-200 mb-2">Guide (20 Minutes):</h4>
    <ol className="list-decimal list-inside space-y-2 text-pink-700 dark:text-pink-300">
      <li><strong>For yourself (5 min):</strong> "May I be happy. May I be healthy. May I be safe. May I be free from suffering."</li>
      <li><strong>For a loved one (4 min):</strong> Visualize the person, send the same wishes.</li>
      <li><strong>For a neutral person (3 min):</strong> Someone you barely know (cashier, neighbor).</li>
      <li><strong>For a difficult person (4 min):</strong> Someone you have conflict with. This is the greatest challenge.</li>
      <li><strong>For all beings (4 min):</strong> "May all beings be happy. May all beings be free from suffering."</li>
    </ol>
    <div className="bg-pink-100 dark:bg-pink-800/40 p-3 rounded-lg mt-3">
      <p className="text-pink-700 dark:text-pink-300 text-sm"><strong>Science:</strong> Studies show regular Metta meditation increases gray matter in brain regions for empathy and emotional regulation.</p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">3. Body Scan – Progressive Body Awareness</h3>
  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">The Body Scan is a systematic journey through the body that promotes deep relaxation and body awareness. Popularized by Jon Kabat-Zinn (MBSR).</p>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Guide (30 Minutes):</h4>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Lie comfortably on your back (like Savasana)</li>
      <li>Start at the toes of your left foot. Feel every sensation: warmth, cold, tingling, numbness, pressure</li>
      <li>Slowly move upward: foot → ankle → lower leg → knee → thigh</li>
      <li>Repeat on the right. Then pelvis → belly → chest → back → hands → arms → shoulders → neck → face → crown</li>
      <li>At the end, feel the entire body as a whole</li>
    </ol>
    <p className="text-blue-700 dark:text-blue-300 mt-3 text-sm"><strong>Tip:</strong> Where you feel nothing: stay there. Don't try to create sensations. Awareness comes with practice.</p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">4. Mantra Meditation</h3>
  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <p className="text-amber-700 dark:text-amber-300 mb-3">A mantra (Sanskrit: "instrument of the mind") is a word or sound repeated to focus the mind and calm thoughts.</p>
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Classical Mantras:</h4>
    <table className="w-full border-collapse mt-3">
      <thead><tr className="bg-amber-100 dark:bg-amber-800/40">
        <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Mantra</th>
        <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Meaning</th>
        <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Application</th>
      </tr></thead>
      <tbody className="text-amber-700 dark:text-amber-300">
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">OM</td><td className="border border-amber-300 dark:border-amber-700 p-2">Primordial sound of the universe</td><td className="border border-amber-300 dark:border-amber-700 p-2">Universal, beginning/end of practice</td></tr>
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">So Hum</td><td className="border border-amber-300 dark:border-amber-700 p-2">"I am that"</td><td className="border border-amber-300 dark:border-amber-700 p-2">Inhale = So, Exhale = Hum</td></tr>
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">Om Namah Shivaya</td><td className="border border-amber-300 dark:border-amber-700 p-2">Bowing to the inner self</td><td className="border border-amber-300 dark:border-amber-700 p-2">Self-discovery, inner peace</td></tr>
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">Om Mani Padme Hum</td><td className="border border-amber-300 dark:border-amber-700 p-2">Jewel in the lotus</td><td className="border border-amber-300 dark:border-amber-700 p-2">Compassion, Tibetan Buddhist</td></tr>
      </tbody>
    </table>
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2 mt-4">Japa Meditation with Mala:</h4>
    <p className="text-amber-700 dark:text-amber-300">Use a mala (108 beads). Repeat the mantra at each bead. One full round = 108 repetitions. The repetition acts as an anchor for the mind.</p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Weekly Plan: Meditation Deepening</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Monday:</strong> Vipassana – 20 min body scan with equanimity</li>
      <li><strong>Tuesday:</strong> Metta – 20 min loving-kindness for all 5 groups</li>
      <li><strong>Wednesday:</strong> Mantra – 20 min "So Hum" with breath focus</li>
      <li><strong>Thursday:</strong> Body Scan – 30 min progressive body awareness</li>
      <li><strong>Friday:</strong> Vipassana – 20 min observing sensations</li>
      <li><strong>Saturday:</strong> Metta – 20 min with focus on difficult person</li>
      <li><strong>Sunday:</strong> Free choice – 30 min your favorite technique</li>
    </ol>
  </div>
</div>
    `
  },
  task: { de: { title: "Meditationsvertiefung", description: "Probiere alle vier Techniken in einer Woche aus.", checklist: [{ text: "Vipassana: 20 Minuten Body Scan mit Gleichmut üben", checked: false }, { text: "Metta: Sende Liebende-Güte an alle 5 Gruppen (inkl. schwierige Person)", checked: false }, { text: "Mantra: Chante 'So Hum' 108 Mal (mit oder ohne Mala)", checked: false }] }, en: { title: "Meditation Deepening", description: "Try all four techniques in one week.", checklist: [{ text: "Vipassana: Practice 20-minute body scan with equanimity", checked: false }, { text: "Metta: Send loving-kindness to all 5 groups (incl. difficult person)", checked: false }, { text: "Mantra: Chant 'So Hum' 108 times (with or without mala)", checked: false }] } },
  quiz: { de: [{ question: "Was ist das Kernprinzip von Vipassana?", answer: "Gleichmut (Equanimity) – Empfindungen beobachten ohne zu reagieren, und die Vergänglichkeit (Anicca) aller Erfahrungen erkennen." }, { question: "Welche 5 Gruppen werden in der Metta-Meditation angesprochen?", answer: "1. Du selbst, 2. Ein geliebter Mensch, 3. Ein neutraler Mensch, 4. Eine schwierige Person, 5. Alle Wesen." }, { question: "Was ist eine Mala und wie wird sie verwendet?", answer: "Eine Gebetskette mit 108 Perlen. Bei jeder Perle wird ein Mantra wiederholt. Eine volle Runde = 108 Wiederholungen." }], en: [{ question: "What is the core principle of Vipassana?", answer: "Equanimity – observing sensations without reacting, and recognizing the impermanence (Anicca) of all experiences." }, { question: "Which 5 groups are addressed in Metta meditation?", answer: "1. Yourself, 2. A loved one, 3. A neutral person, 4. A difficult person, 5. All beings." }, { question: "What is a mala and how is it used?", answer: "A prayer bead necklace with 108 beads. A mantra is repeated at each bead. One full round = 108 repetitions." }] }
};
