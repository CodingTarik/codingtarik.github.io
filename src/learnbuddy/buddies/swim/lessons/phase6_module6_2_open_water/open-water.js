export const openWater = {
  title: {
    de: "Open Water Schwimmen - Schwimmen im Freiwasser",
    en: "Open Water Swimming - Swimming in Open Water"
  },
  description: {
    de: "Lerne Freiwasserschwimmen: Navigation, Sicherheit, Ausrüstung und Besonderheiten des Open Water.",
    en: "Learn open water swimming: navigation, safety, equipment, and open water specifics."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Open Water Schwimmen</h2>

  <p className="text-lg leading-relaxed">
    Open Water Swimming findet in natürlichen Gewässern statt - Seen, Flüsse oder das Meer. 
    Es ist eine völlig andere Erfahrung als Beckenschwimmen: keine Wände zum Abstoßen, keine 
    Linien am Boden, dafür Natur pur und einzigartige Herausforderungen.
  </p>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Sicherheit zuerst!</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li>Nie alleine im Freiwasser schwimmen.</li>
      <li>Immer eine Schwimmboje (Rettungsboje) mitführen.</li>
      <li>Wetter und Strömungen prüfen.</li>
      <li>Bekannte Gewässer bevorzugen.</li>
      <li>Jemandem am Ufer Bescheid geben.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Navigation & Orientierung</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Sighting (Peilen)</h3>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Krokodil-Sighting:</strong> Alle 6-10 Züge kurz den Kopf heben und nach vorne schauen.</li>
      <li><strong>Landmarken:</strong> Feste Punkte am Ufer anvisieren (Gebäude, Bäume, Bojen).</li>
      <li><strong>Frequenz:</strong> In unruhigem Wasser öfter peilen als in ruhigem.</li>
      <li><strong>Integration:</strong> Das Peilen in den Atemrhythmus einbauen, um keine Energie zu verschwenden.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Besondere Herausforderungen</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Wellen & Strömung</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">
        Passe deinen Atemrhythmus an die Wellen an. Atme auf der wellenabgewandten Seite. 
        Nutze Strömungen, wenn möglich, zu deinem Vorteil.
      </p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Temperatur</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">
        Neoprenanzug bei Wassertemperaturen unter 20°C. Akklimatisiere dich langsam an kaltes 
        Wasser. Kenne die Symptome von Unterkühlung.
      </p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Massenstart</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">
        Bei Wettkämpfen starten viele Schwimmer gleichzeitig. Positioniere dich am Rand, 
        wenn du Körperkontakt vermeiden willst.
      </p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Keine Wände</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">
        Im Freiwasser gibt es keine Wände zum Ausruhen. Trainiere das Schwimmen ohne Pausen 
        und ohne Wandabstoß.
      </p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Ausrüstung</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Schwimmboje:</strong> Pflicht! Macht dich sichtbar und dient als Rettungsmittel.</li>
      <li><strong>Neoprenanzug:</strong> Für kaltes Wasser. Verbessert auch den Auftrieb.</li>
      <li><strong>Helle Badekappe:</strong> Zur besseren Sichtbarkeit.</li>
      <li><strong>Getönte Schwimmbrille:</strong> Gegen Sonnenlicht und Blendung.</li>
      <li><strong>Anti-Chafing-Creme:</strong> Gegen Scheuern durch den Neoprenanzug.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Übungen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Sighting üben:</strong> Im Becken alle 6 Züge den Kopf heben und einen Punkt an der Wand anvisieren.</li>
      <li><strong>Ohne Wand schwimmen:</strong> Im Becken 200m am Stück schwimmen, ohne die Wand zum Abstoß zu nutzen.</li>
      <li><strong>Erstes Open Water:</strong> In einem sicheren Gewässer mit Begleitung eine kurze Strecke schwimmen.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Open Water Swimming</h2>

  <p className="text-lg leading-relaxed">
    Open water swimming takes place in natural bodies of water - lakes, rivers, or the ocean. 
    It's a completely different experience from pool swimming: no walls to push off, no lines 
    on the bottom, but pure nature and unique challenges.
  </p>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Safety First!</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li>Never swim alone in open water.</li>
      <li>Always carry a swim buoy (safety buoy).</li>
      <li>Check weather and currents.</li>
      <li>Prefer familiar waters.</li>
      <li>Let someone on shore know.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Navigation & Orientation</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Sighting</h3>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Crocodile sighting:</strong> Every 6-10 strokes, briefly lift head and look forward.</li>
      <li><strong>Landmarks:</strong> Aim for fixed points on shore (buildings, trees, buoys).</li>
      <li><strong>Frequency:</strong> Sight more often in rough water than calm.</li>
      <li><strong>Integration:</strong> Build sighting into breathing rhythm to conserve energy.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Unique Challenges</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Waves & Current</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">
        Adjust your breathing rhythm to the waves. Breathe on the side away from waves. 
        Use currents to your advantage when possible.
      </p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Temperature</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">
        Wetsuit for water temperatures below 20°C. Acclimatize slowly to cold water. 
        Know the symptoms of hypothermia.
      </p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Mass Start</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">
        In competitions, many swimmers start together. Position yourself on the edge 
        if you want to avoid body contact.
      </p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">No Walls</h4>
      <p className="text-blue-700 dark:text-blue-300 text-sm">
        In open water there are no walls to rest on. Train swimming without breaks 
        and without wall push-offs.
      </p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Equipment</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Swim buoy:</strong> Essential! Makes you visible and serves as a rescue aid.</li>
      <li><strong>Wetsuit:</strong> For cold water. Also improves buoyancy.</li>
      <li><strong>Bright swim cap:</strong> For better visibility.</li>
      <li><strong>Tinted goggles:</strong> Against sunlight and glare.</li>
      <li><strong>Anti-chafing cream:</strong> Against rubbing from the wetsuit.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Practice sighting:</strong> In the pool, lift your head every 6 strokes and sight a point on the wall.</li>
      <li><strong>No-wall swimming:</strong> Swim 200m non-stop in the pool without using the wall for push-offs.</li>
      <li><strong>First open water:</strong> In a safe body of water with company, swim a short distance.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Open Water Schwimmen vorbereiten",
      description: "Bereite dich auf dein erstes Freiwasserschwimmen vor.",
      checklist: [
        { text: "Übe Sighting im Schwimmbad (alle 6 Züge Kopf heben)", checked: false },
        { text: "Schwimme 400m am Stück ohne Wandabstoß", checked: false },
        { text: "Informiere dich über sichere Freiwasser-Spots in deiner Nähe", checked: false },
        { text: "Besorge eine Schwimmboje für dein erstes Open Water Abenteuer", checked: false }
      ]
    },
    en: {
      title: "Prepare for Open Water Swimming",
      description: "Prepare for your first open water swim.",
      checklist: [
        { text: "Practice sighting in the pool (lift head every 6 strokes)", checked: false },
        { text: "Swim 400m non-stop without wall push-offs", checked: false },
        { text: "Research safe open water spots near you", checked: false },
        { text: "Get a swim buoy for your first open water adventure", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Was ist 'Sighting' und warum ist es im Freiwasser wichtig?", answer: "Sighting bedeutet, regelmäßig den Kopf zu heben, um die Richtung zu prüfen. Ohne Linien am Boden und Wände als Orientierung kann man im Freiwasser schnell vom Kurs abkommen." },
      { question: "Warum sollte man im Freiwasser nie alleine schwimmen?", answer: "Im Freiwasser gibt es Gefahren wie Strömungen, Kälte, Erschöpfung und keine Beckenwand zum Festhalten. Ein Begleiter kann im Notfall Hilfe leisten." },
      { question: "Ab welcher Wassertemperatur wird ein Neoprenanzug empfohlen?", answer: "Unter 20°C Wassertemperatur wird ein Neoprenanzug empfohlen. Er schützt vor Kälte und verbessert den Auftrieb." }
    ],
    en: [
      { question: "What is 'sighting' and why is it important in open water?", answer: "Sighting means regularly lifting your head to check direction. Without floor lines and walls for orientation, you can quickly veer off course in open water." },
      { question: "Why should you never swim alone in open water?", answer: "Open water has dangers like currents, cold, exhaustion, and no pool wall to hold onto. A companion can provide help in an emergency." },
      { question: "At what water temperature is a wetsuit recommended?", answer: "Below 20°C water temperature, a wetsuit is recommended. It protects against cold and improves buoyancy." }
    ]
  }
};
