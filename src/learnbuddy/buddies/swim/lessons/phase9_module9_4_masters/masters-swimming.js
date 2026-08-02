export const mastersSwimming = {
  title: {
    de: "Masters-Schwimmen - Training als Erwachsener",
    en: "Masters Swimming - Training as an Adult"
  },
  description: {
    de: "Schwimmen als Erwachsener, Vereins-Schwimmen, Wettkampfkategorien, Altersklassen und motivationserhaltende Strategien.",
    en: "Swimming as an adult, club swimming, competition categories, age groups, and motivation strategies."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Masters-Schwimmen</h2>

  <p className="text-lg leading-relaxed">
    Schwimmen hat kein Verfallsdatum. Masters-Schwimmen (ab 25 Jahren) ist eine der 
    am schnellsten wachsenden Schwimmbewegungen weltweit. Ob Wiedereinsteiger oder 
    lebenslanger Schwimmer - im Masters-Bereich findest du Community, Wettkämpfe und 
    strukturiertes Training, das zu deinem Leben passt. Hier erfährst du alles über 
    das Schwimmen als Erwachsener.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">Was ist Masters-Schwimmen?</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Masters umfasst alle Schwimmer ab 25 Jahren, unabhängig vom Leistungsniveau.
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Altersgrenze:</strong> Ab 25 Jahren (in Deutschland oft ab 20). Keine Obergrenze.</li>
      <li><strong>Leistungsniveau:</strong> Vom Anfänger bis zum Ex-OLympioniken. Jeder ist willkommen.</li>
      <li><strong>Fokus:</strong> Fitness, Wettkampf, sozialer Austausch - je nach Verein und persönlichem Ziel.</li>
      <li><strong>Struktur:</strong> Oft angeleitetes Training 2-4x pro Woche, Wettkämpfe auf regionaler bis internationaler Ebene.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Altersklassen & Wettkampfkategorien</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-green-100 dark:bg-green-800/60">
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Altersklasse</th>
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Alter</th>
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Hinweis</th>
        </tr>
      </thead>
      <tbody className="text-green-700 dark:text-green-300">
        <tr><td className="border border-green-200 dark:border-green-700 p-2">25-29</td><td className="border border-green-200 dark:border-green-700 p-2">jüngste Klasse</td><td className="border border-green-200 dark:border-green-700 p-2">Oft die schnellsten Zeiten</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2">30-34, 35-39...</td><td className="border border-green-200 dark:border-green-700 p-2">5-Jahres-Schritte</td><td className="border border-green-200 dark:border-green-700 p-2">Fairer Vergleich innerhalb der Klasse</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2">100+</td><td className="border border-green-200 dark:border-green-700 p-2">100 Jahre und älter</td><td className="border border-green-200 dark:border-green-700 p-2">Es gibt tatsächlich 100-jährige Masters!</td></tr>
      </tbody>
    </table>
    <p className="text-green-700 dark:text-green-300 mt-3">
      Das Alter wird am 31. Dezember des Wettkampfjahres bestimmt. Du schwimmst in der Altersklasse, 
      der du in diesem Jahr angehörst.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Vereins-Schwimmen - Vorteile</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <ul className="list-disc list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>Angeleitetes Training:</strong> Ein Coach plant die Einheiten, korrigiert Technik, gibt Feedback.</li>
      <li><strong>Struktur:</strong> Feste Trainingszeiten, klare Abläufe. Kein "was soll ich heute schwimmen?"</li>
      <li><strong>Gemeinschaft:</strong> Gleichgesinnte, Freunde, soziale Verpflichtung. Höhere Motivation.</li>
      <li><strong>Wettkämpfe:</strong> Regional, national, international. Masters-WM, Europameisterschaften, lokale Masters-Meets.</li>
      <li><strong>Kostengünstig:</strong> Jahresbeitrag oft günstiger als Einzelkarten im Fitnessstudio.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Training als Erwachsener - Besonderheiten</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <ul className="list-disc list-inside space-y-3 text-blue-700 dark:text-blue-300">
      <li><strong>Regeneration:</strong> Erwachsene brauchen mehr Erholung. 48h zwischen intensiven Einheiten einplanen.</li>
      <li><strong>Flexibilität:</strong> Mit zunehmendem Alter nimmt die Beweglichkeit ab. Dehnen, Yoga, Mobilisation einbauen.</li>
      <li><strong>Kraft:</strong> Krafttraining ergänzen - besonders Rumpf, Rücken, Schultern. Verletzungsprävention.</li>
      <li><strong>Technik vor Tempo:</strong> Technik verbessert sich in jedem Alter. Fokus auf Effizienz, nicht nur auf Meter.</li>
      <li><strong>Zeitmanagement:</strong> Job, Familie, Verpflichtungen. Kurze, intensive Einheiten oft besser als lange lockere.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Motivation langfristig halten</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Ziele setzen:</strong> Konkrete Ziele - z.B. 100m unter 1:20, oder ersten Masters-Wettkampf absolvieren.</li>
      <li><strong>Abwechslung:</strong> Verschiedene Stile, Drills, offenes Wasser. Monotonie tötet Motivation.</li>
      <li><strong>Buddy-System:</strong> Mit jemandem verabreden. Soziale Verpflichtung hält dich am Ball.</li>
      <li><strong>Wettkampf als Event:</strong> Auch ohne Medaillenambition - Wettkämpfe sind Erlebnisse und Motivationsbooster.</li>
      <li><strong>Fortschritt feiern:</strong> Kleine Verbesserungen notieren. Du wirst besser - auch wenn es langsam geht.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Praktische Übungen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Verein recherchieren:</strong> Suche einen Masters-Verein in deiner Nähe und besuche ein Probetraining.</li>
      <li><strong>Altersklasse prüfen:</strong> In welcher Altersklasse würdest du bei den nächsten Masters-Meet schwimmen?</li>
      <li><strong>Wettkampf-Ziel:</strong> Setze ein Ziel: Erster Masters-Wettkampf innerhalb der nächsten 6 Monate.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Masters Swimming</h2>

  <p className="text-lg leading-relaxed">
    Swimming has no expiration date. Masters swimming (from age 25) is one of the fastest-growing 
    swimming movements worldwide. Whether you're returning to the sport or a lifelong swimmer - 
    in Masters you find community, competitions, and structured training that fits your life. 
    Here you'll learn everything about swimming as an adult.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">What is Masters Swimming?</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Masters includes all swimmers from age 25, regardless of performance level.
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Age limit:</strong> From 25 years (often 20 in Germany). No upper limit.</li>
      <li><strong>Performance level:</strong> From beginner to ex-Olympian. Everyone is welcome.</li>
      <li><strong>Focus:</strong> Fitness, competition, social exchange - depending on club and personal goal.</li>
      <li><strong>Structure:</strong> Often coached training 2-4x per week, competitions from regional to international.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Age Groups & Competition Categories</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-green-100 dark:bg-green-800/60">
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Age Group</th>
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Age</th>
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Note</th>
        </tr>
      </thead>
      <tbody className="text-green-700 dark:text-green-300">
        <tr><td className="border border-green-200 dark:border-green-700 p-2">25-29</td><td className="border border-green-200 dark:border-green-700 p-2">youngest class</td><td className="border border-green-200 dark:border-green-700 p-2">Often fastest times</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2">30-34, 35-39...</td><td className="border border-green-200 dark:border-green-700 p-2">5-year steps</td><td className="border border-green-200 dark:border-green-700 p-2">Fair comparison within class</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2">100+</td><td className="border border-green-200 dark:border-green-700 p-2">100 years and older</td><td className="border border-green-200 dark:border-green-700 p-2">There really are 100-year-old Masters!</td></tr>
      </tbody>
    </table>
    <p className="text-green-700 dark:text-green-300 mt-3">
      Age is determined as of December 31 of the competition year. You swim in the age group 
      you belong to that year.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Club Swimming - Benefits</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <ul className="list-disc list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>Coached training:</strong> A coach plans sessions, corrects technique, gives feedback.</li>
      <li><strong>Structure:</strong> Fixed training times, clear routines. No "what should I swim today?"</li>
      <li><strong>Community:</strong> Like-minded people, friends, social commitment. Higher motivation.</li>
      <li><strong>Competitions:</strong> Regional, national, international. Masters World Champs, Europeans, local Masters meets.</li>
      <li><strong>Cost-effective:</strong> Annual fees often cheaper than single gym passes.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Training as an Adult - Particularities</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <ul className="list-disc list-inside space-y-3 text-blue-700 dark:text-blue-300">
      <li><strong>Recovery:</strong> Adults need more recovery. Plan 48h between intense sessions.</li>
      <li><strong>Flexibility:</strong> Mobility decreases with age. Add stretching, yoga, mobilization.</li>
      <li><strong>Strength:</strong> Supplement with strength training - especially core, back, shoulders. Injury prevention.</li>
      <li><strong>Technique over tempo:</strong> Technique improves at any age. Focus on efficiency, not just meters.</li>
      <li><strong>Time management:</strong> Job, family, commitments. Short, intense sessions often better than long easy ones.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Keeping Motivation Long-Term</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Set goals:</strong> Concrete goals - e.g. 100m under 1:20, or complete first Masters competition.</li>
      <li><strong>Variety:</strong> Different strokes, drills, open water. Monotony kills motivation.</li>
      <li><strong>Buddy system:</strong> Meet up with someone. Social commitment keeps you on track.</li>
      <li><strong>Competition as event:</strong> Even without medal ambitions - competitions are experiences and motivation boosters.</li>
      <li><strong>Celebrate progress:</strong> Note small improvements. You're getting better - even if slowly.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Practice Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Research club:</strong> Find a Masters club nearby and try a trial session.</li>
      <li><strong>Check age group:</strong> Which age group would you swim in at the next Masters meet?</li>
      <li><strong>Competition goal:</strong> Set a goal: First Masters competition within the next 6 months.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Masters-Schwimmen erkunden",
      description: "Finde deinen Weg ins Masters-Schwimmen.",
      checklist: [
        { text: "Recherchiere Masters-Vereine in deiner Nähe", checked: false },
        { text: "Besuche ein Probetraining bei einem Masters-Verein", checked: false },
        { text: "Ermittle deine Altersklasse für das aktuelle Jahr", checked: false },
        { text: "Setze ein Ziel: Erster Wettkampf oder Technik-Verbesserung", checked: false }
      ]
    },
    en: {
      title: "Explore Masters Swimming",
      description: "Find your way into Masters swimming.",
      checklist: [
        { text: "Research Masters clubs in your area", checked: false },
        { text: "Try a trial session at a Masters club", checked: false },
        { text: "Determine your age group for the current year", checked: false },
        { text: "Set a goal: First competition or technique improvement", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Ab welchem Alter kann man Masters-Schwimmen?", answer: "Ab 25 Jahren (in Deutschland oft ab 20). Es gibt keine Obergrenze - es gibt sogar 100-jährige Masters-Schwimmer." },
      { question: "Warum brauchen erwachsene Schwimmer mehr Regeneration?", answer: "Der Körper regeneriert mit zunehmendem Alter langsamer. Muskeln, Bänder und das Nervensystem brauchen mehr Erholungszeit. 48 Stunden zwischen intensiven Einheiten sind empfehlenswert." },
      { question: "Wie werden die Altersklassen bei Masters-Wettkämpfen gebildet?", answer: "In 5-Jahres-Schritten (25-29, 30-34, 35-39 etc.). Das Alter wird am 31. Dezember des Wettkampfjahres bestimmt. So ist der Vergleich innerhalb der Klasse fair." }
    ],
    en: [
      { question: "From what age can you do Masters swimming?", answer: "From age 25 (often 20 in Germany). There's no upper limit - there are even 100-year-old Masters swimmers." },
      { question: "Why do adult swimmers need more recovery?", answer: "The body recovers more slowly with age. Muscles, ligaments, and the nervous system need more recovery time. 48 hours between intense sessions is recommended." },
      { question: "How are age groups formed in Masters competitions?", answer: "In 5-year steps (25-29, 30-34, 35-39 etc.). Age is determined as of December 31 of the competition year. This ensures fair comparison within the class." }
    ]
  }
};
