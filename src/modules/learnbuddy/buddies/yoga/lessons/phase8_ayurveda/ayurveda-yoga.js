export const ayurvedaYoga = {
  title: { de: "Ayurveda & Yoga - Doshas, saisonale Praxis & Lebensstil", en: "Ayurveda & Yoga - Doshas, Seasonal Practice & Lifestyle" },
  description: { de: "Verbinde Yoga mit Ayurveda: Lerne die drei Doshas, saisonale Praxis und ganzheitliche Lebensführung.", en: "Connect yoga with Ayurveda: Learn the three doshas, seasonal practice, and holistic living." },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Ayurveda & Yoga</h2>
  <p className="text-lg leading-relaxed">Ayurveda (Sanskrit: „Wissenschaft des Lebens") ist die Schwesterwissenschaft des Yoga. Während Yoga den Geist klärt und den Körper stärkt, bietet Ayurveda ein Framework für Ernährung, Tagesrhythmus und Lebensstil. Zusammen bilden sie ein ganzheitliches System für optimale Gesundheit.</p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Die drei Doshas</h3>
    <p className="text-purple-700 dark:text-purple-300 mb-4">Jeder Mensch hat eine einzigartige Mischung der drei Doshas. Dein Dosha bestimmt deine körperliche Konstitution, Persönlichkeit und ideale Yoga-Praxis.</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-sky-50 dark:bg-sky-900/40 p-5 rounded-lg border-2 border-sky-200 dark:border-sky-800">
      <h4 className="font-bold text-sky-800 dark:text-sky-200 mb-2">Vata (Luft + Äther)</h4>
      <p className="text-sky-700 dark:text-sky-300 text-sm mb-2"><strong>Typ:</strong> Leicht, kreativ, schnell, unruhig</p>
      <p className="text-sky-700 dark:text-sky-300 text-sm mb-2"><strong>Körper:</strong> Schlank, trockene Haut, kalte Hände</p>
      <p className="text-sky-700 dark:text-sky-300 text-sm mb-2"><strong>Ungleichgewicht:</strong> Angst, Schlaflosigkeit, Verdauungsprobleme</p>
      <p className="text-sky-700 dark:text-sky-300 text-sm"><strong>Ideale Praxis:</strong> Langsam, erdend, warm. Yin Yoga, sanftes Hatha, lange Savasana.</p>
    </div>
    <div className="bg-red-50 dark:bg-red-900/40 p-5 rounded-lg border-2 border-red-200 dark:border-red-800">
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Pitta (Feuer + Wasser)</h4>
      <p className="text-red-700 dark:text-red-300 text-sm mb-2"><strong>Typ:</strong> Fokussiert, ehrgeizig, hitzig, zielstrebig</p>
      <p className="text-red-700 dark:text-red-300 text-sm mb-2"><strong>Körper:</strong> Mittlerer Körperbau, warm, rötliche Haut</p>
      <p className="text-red-700 dark:text-red-300 text-sm mb-2"><strong>Ungleichgewicht:</strong> Reizbarkeit, Entzündungen, Perfektionismus</p>
      <p className="text-red-700 dark:text-red-300 text-sm"><strong>Ideale Praxis:</strong> Kühlend, nicht-kompetitiv. Mond-Grüße, Vorbeugen, Restorative.</p>
    </div>
    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Kapha (Erde + Wasser)</h4>
      <p className="text-green-700 dark:text-green-300 text-sm mb-2"><strong>Typ:</strong> Ruhig, loyal, beständig, träge</p>
      <p className="text-green-700 dark:text-green-300 text-sm mb-2"><strong>Körper:</strong> Kräftig, stabile Gelenke, neigt zu Gewichtszunahme</p>
      <p className="text-green-700 dark:text-green-300 text-sm mb-2"><strong>Ungleichgewicht:</strong> Lethargie, Depression, Verschleimung</p>
      <p className="text-green-700 dark:text-green-300 text-sm"><strong>Ideale Praxis:</strong> Dynamisch, wärmend, aktivierend. Vinyasa, Power Yoga, Sonnengrüße.</p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Saisonale Praxis (Ritucharya)</h3>
  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <table className="w-full border-collapse">
      <thead><tr className="bg-amber-100 dark:bg-amber-800/40">
        <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Jahreszeit</th>
        <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Dominantes Dosha</th>
        <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Empfohlene Praxis</th>
      </tr></thead>
      <tbody className="text-amber-700 dark:text-amber-300">
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">Frühling</td><td className="border border-amber-300 dark:border-amber-700 p-2">Kapha</td><td className="border border-amber-300 dark:border-amber-700 p-2">Dynamisch, entgiftend. Twists, Sonnengrüße, Kapalabhati</td></tr>
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">Sommer</td><td className="border border-amber-300 dark:border-amber-700 p-2">Pitta</td><td className="border border-amber-300 dark:border-amber-700 p-2">Kühlend, entspannend. Mond-Grüße, Sitali-Atmung, Yin Yoga</td></tr>
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">Herbst</td><td className="border border-amber-300 dark:border-amber-700 p-2">Vata</td><td className="border border-amber-300 dark:border-amber-700 p-2">Erdend, wärmend. Langsames Hatha, Stehposen, Nadi Shodhana</td></tr>
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">Winter</td><td className="border border-amber-300 dark:border-amber-700 p-2">Kapha/Vata</td><td className="border border-amber-300 dark:border-amber-700 p-2">Wärmend, aufbauend. Kräftiges Vinyasa, Rückbeugen, Ujjayi</td></tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Ayurvedischer Tagesrhythmus (Dinacharya)</h3>
  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>6:00 Uhr:</strong> Aufstehen vor Sonnenaufgang, Zungenschaben, warmes Wasser</li>
      <li><strong>6:30 Uhr:</strong> Yoga-Praxis und Meditation</li>
      <li><strong>8:00 Uhr:</strong> Warmes Frühstück (leicht verdaulich)</li>
      <li><strong>12:00 Uhr:</strong> Hauptmahlzeit (Agni/Verdauungsfeuer ist am stärksten)</li>
      <li><strong>18:00 Uhr:</strong> Leichtes Abendessen</li>
      <li><strong>20:00 Uhr:</strong> Abend-Routine: Ölmassage, Journaling, sanftes Dehnen</li>
      <li><strong>22:00 Uhr:</strong> Schlafengehen</li>
    </ol>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Praktische Übung: Finde dein Dosha</h3>
    <p className="text-green-700 dark:text-green-300 mb-3">Beantworte diese Fragen ehrlich und zähle, welcher Buchstabe am häufigsten vorkommt:</p>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Körperbau: a) Schlank, leicht b) Mittel, muskulös c) Kräftig, stabil</li>
      <li>Schlaf: a) Leicht, unruhig b) Mäßig, intensiv c) Tief, lang</li>
      <li>Temperatur: a) Kalt b) Warm/Heiß c) Anpassungsfähig</li>
      <li>Stress-Reaktion: a) Angst b) Ärger c) Rückzug</li>
      <li>Energie: a) Wechselhaft b) Fokussiert c) Gleichmäßig</li>
    </ol>
    <p className="text-green-700 dark:text-green-300 mt-3">Meist a = Vata | Meist b = Pitta | Meist c = Kapha</p>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Ayurveda & Yoga</h2>
  <p className="text-lg leading-relaxed">Ayurveda (Sanskrit: "Science of Life") is yoga's sister science. While yoga clears the mind and strengthens the body, Ayurveda provides a framework for nutrition, daily rhythm, and lifestyle. Together they form a holistic system for optimal health.</p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">The Three Doshas</h3>
    <p className="text-purple-700 dark:text-purple-300 mb-4">Every person has a unique blend of three doshas. Your dosha determines your physical constitution, personality, and ideal yoga practice.</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-sky-50 dark:bg-sky-900/40 p-5 rounded-lg border-2 border-sky-200 dark:border-sky-800">
      <h4 className="font-bold text-sky-800 dark:text-sky-200 mb-2">Vata (Air + Ether)</h4>
      <p className="text-sky-700 dark:text-sky-300 text-sm mb-2"><strong>Type:</strong> Light, creative, quick, restless</p>
      <p className="text-sky-700 dark:text-sky-300 text-sm mb-2"><strong>Body:</strong> Slim, dry skin, cold hands</p>
      <p className="text-sky-700 dark:text-sky-300 text-sm mb-2"><strong>Imbalance:</strong> Anxiety, insomnia, digestive issues</p>
      <p className="text-sky-700 dark:text-sky-300 text-sm"><strong>Ideal practice:</strong> Slow, grounding, warm. Yin Yoga, gentle Hatha, long Savasana.</p>
    </div>
    <div className="bg-red-50 dark:bg-red-900/40 p-5 rounded-lg border-2 border-red-200 dark:border-red-800">
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Pitta (Fire + Water)</h4>
      <p className="text-red-700 dark:text-red-300 text-sm mb-2"><strong>Type:</strong> Focused, ambitious, fiery, goal-driven</p>
      <p className="text-red-700 dark:text-red-300 text-sm mb-2"><strong>Body:</strong> Medium build, warm, reddish skin</p>
      <p className="text-red-700 dark:text-red-300 text-sm mb-2"><strong>Imbalance:</strong> Irritability, inflammation, perfectionism</p>
      <p className="text-red-700 dark:text-red-300 text-sm"><strong>Ideal practice:</strong> Cooling, non-competitive. Moon salutations, forward bends, Restorative.</p>
    </div>
    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Kapha (Earth + Water)</h4>
      <p className="text-green-700 dark:text-green-300 text-sm mb-2"><strong>Type:</strong> Calm, loyal, steady, sluggish</p>
      <p className="text-green-700 dark:text-green-300 text-sm mb-2"><strong>Body:</strong> Sturdy, stable joints, tends to gain weight</p>
      <p className="text-green-700 dark:text-green-300 text-sm mb-2"><strong>Imbalance:</strong> Lethargy, depression, congestion</p>
      <p className="text-green-700 dark:text-green-300 text-sm"><strong>Ideal practice:</strong> Dynamic, warming, activating. Vinyasa, Power Yoga, Sun Salutations.</p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Seasonal Practice (Ritucharya)</h3>
  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <table className="w-full border-collapse">
      <thead><tr className="bg-amber-100 dark:bg-amber-800/40">
        <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Season</th>
        <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Dominant Dosha</th>
        <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Recommended Practice</th>
      </tr></thead>
      <tbody className="text-amber-700 dark:text-amber-300">
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">Spring</td><td className="border border-amber-300 dark:border-amber-700 p-2">Kapha</td><td className="border border-amber-300 dark:border-amber-700 p-2">Dynamic, detoxifying. Twists, Sun Salutations, Kapalabhati</td></tr>
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">Summer</td><td className="border border-amber-300 dark:border-amber-700 p-2">Pitta</td><td className="border border-amber-300 dark:border-amber-700 p-2">Cooling, relaxing. Moon Salutations, Sitali breath, Yin Yoga</td></tr>
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">Autumn</td><td className="border border-amber-300 dark:border-amber-700 p-2">Vata</td><td className="border border-amber-300 dark:border-amber-700 p-2">Grounding, warming. Slow Hatha, standing poses, Nadi Shodhana</td></tr>
        <tr><td className="border border-amber-300 dark:border-amber-700 p-2">Winter</td><td className="border border-amber-300 dark:border-amber-700 p-2">Kapha/Vata</td><td className="border border-amber-300 dark:border-amber-700 p-2">Warming, building. Vigorous Vinyasa, backbends, Ujjayi</td></tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Ayurvedic Daily Routine (Dinacharya)</h3>
  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>6:00 AM:</strong> Rise before sunrise, tongue scraping, warm water</li>
      <li><strong>6:30 AM:</strong> Yoga practice and meditation</li>
      <li><strong>8:00 AM:</strong> Warm breakfast (easily digestible)</li>
      <li><strong>12:00 PM:</strong> Main meal (Agni/digestive fire is strongest)</li>
      <li><strong>6:00 PM:</strong> Light dinner</li>
      <li><strong>8:00 PM:</strong> Evening routine: oil massage, journaling, gentle stretching</li>
      <li><strong>10:00 PM:</strong> Bedtime</li>
    </ol>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Practice: Find Your Dosha</h3>
    <p className="text-green-700 dark:text-green-300 mb-3">Answer these questions honestly and count which letter appears most:</p>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Body type: a) Slim, light b) Medium, muscular c) Sturdy, stable</li>
      <li>Sleep: a) Light, restless b) Moderate, intense c) Deep, long</li>
      <li>Temperature: a) Cold b) Warm/Hot c) Adaptable</li>
      <li>Stress reaction: a) Anxiety b) Anger c) Withdrawal</li>
      <li>Energy: a) Fluctuating b) Focused c) Steady</li>
    </ol>
    <p className="text-green-700 dark:text-green-300 mt-3">Mostly a = Vata | Mostly b = Pitta | Mostly c = Kapha</p>
  </div>
</div>
    `
  },
  task: { de: { title: "Ayurveda & Yoga Integration", description: "Entdecke dein Dosha und passe deine Praxis an.", checklist: [{ text: "Mache den Dosha-Test und identifiziere deinen Typ", checked: false }, { text: "Passe deine nächste Yoga-Session an dein Dosha an", checked: false }, { text: "Probiere einen Tag lang die Dinacharya-Routine aus", checked: false }] }, en: { title: "Ayurveda & Yoga Integration", description: "Discover your dosha and adapt your practice.", checklist: [{ text: "Take the dosha quiz and identify your type", checked: false }, { text: "Adapt your next yoga session to your dosha", checked: false }, { text: "Try the Dinacharya routine for one day", checked: false }] } },
  quiz: { de: [{ question: "Was sind die drei Doshas und ihre Elemente?", answer: "Vata (Luft + Äther), Pitta (Feuer + Wasser), Kapha (Erde + Wasser)." }, { question: "Welche Yoga-Praxis ist ideal für Pitta-Typen und warum?", answer: "Kühlende, nicht-kompetitive Praxis wie Mond-Grüße, Vorbeugen und Restorative Yoga – um das Feuer-Element auszugleichen und Überanstrengung zu vermeiden." }, { question: "Was ist Dinacharya?", answer: "Der ayurvedische Tagesrhythmus: ein strukturierter Tagesablauf mit festen Zeiten für Aufstehen, Yoga, Essen und Schlafen, abgestimmt auf die natürlichen Rhythmen des Körpers." }], en: [{ question: "What are the three doshas and their elements?", answer: "Vata (Air + Ether), Pitta (Fire + Water), Kapha (Earth + Water)." }, { question: "What yoga practice is ideal for Pitta types and why?", answer: "Cooling, non-competitive practice like Moon Salutations, forward bends, and Restorative Yoga – to balance the fire element and avoid overexertion." }, { question: "What is Dinacharya?", answer: "The Ayurvedic daily routine: a structured daily schedule with fixed times for waking, yoga, eating, and sleeping, aligned with the body's natural rhythms." }] }
};
