export const triathlonSwimming = {
  title: {
    de: "Triathlon-Schwimmen - Vom Becken ins Freiwasser",
    en: "Triathlon Swimming - From Pool to Open Water"
  },
  description: {
    de: "Open Water Sighting, Drafting, Neopren-Anzug, Schwimm-zu-Rad-Übergang und spezifisches Training für Triathleten.",
    en: "Open water sighting, drafting, wetsuit, swim-to-bike transition, and specific training for triathletes."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Triathlon-Schwimmen</h2>

  <p className="text-lg leading-relaxed">
    Das Triathlon-Schwimmen ist eine eigene Disziplin. Ob 750m Sprint oder 3,8km Ironman - 
    die Anforderungen unterscheiden sich fundamental vom Beckenschwimmen: Keine Linien am 
    Boden, keine Wände, keine klaren Bahnen. Dafür Wind, Wellen, andere Schwimmer und oft 
    ein Neoprenanzug. In dieser Lektion lernst du die spezifischen Techniken für Triathlon-Schwimmer.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">Sighting - Orientierung im Freiwasser</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Ohne schwarze Linie musst du dich an Landmarken orientieren. Sighting ist das kurze 
      Anheben des Kopfes, um die Richtung zu prüfen.
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Technik:</strong> Alle 6-10 Züge kurz den Kopf anheben. Nur so viel, dass die Augen über Wasser kommen. Kinn bleibt tief.</li>
      <li><strong>Rhythmus:</strong> Am besten beim Atemzug - dann siehst du zur Seite UND nach vorne in einer Bewegung.</li>
      <li><strong>Landmarken:</strong> Wähle hohe, gut sichtbare Objekte (Bäume, Masten, Gebäude). Nicht niedrige Bojen.</li>
      <li><strong>Geradeaus:</strong> Schwimme nicht blind! Häufiges Sighting verhindert Zickzack-Kurs und Zeitverlust.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Drafting - Im Kielwasser schwimmen</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <p className="text-green-700 dark:text-green-300 mb-3">
      Direkt hinter oder seitlich hinter einem Schwimmer zu schwimmen spart 10-25% Energie.
    </p>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Position:</strong> Füße des Vordermanns auf Höhe deiner Hüfte. Nicht zu nah (Kick treffen) - etwa 30-50cm Abstand.</li>
      <li><strong>Seitliches Drafting:</strong> Hüfthöhe des Nachbarn. Du bist in seiner "Sog-Zone" und sparst Kraft.</li>
      <li><strong>Ethisch:</strong> Drafting ist im Triathlon erlaubt. Nutze es, aber ärgere dich nicht, wenn andere dich nutzen.</li>
      <li><strong>Vorsicht:</strong> Der Vordermann kann die Richtung ändern. Behalte dein Sighting bei!</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Neoprenanzug (Wetsuit)</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Vorteile & Handhabung</h4>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Auftrieb:</strong> Beine und Hüfte liegen höher - bessere Wasserlage ohne Extra-Arbeit.</li>
      <li><strong>Wärme:</strong> Isoliert in kaltem Wasser. Unter 24°C oft vorgeschrieben.</li>
      <li><strong>Anzug anziehen:</strong> Plastiktüten über Hände/Füße, langsam hochziehen. Keine Fingernägel in den Neopren!</li>
      <li><strong>Armfrequenz:</strong> Neopren verändert die Armführung. Kürzere, höhere Armzüge. Übe im Pool mit Anzug!</li>
      <li><strong>Ausziehen:</strong> Am Hals anfangen, dann Schultern. Übe den Wechsel in der Transition mehrmals.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Schwimm-zu-Rad Übergang (T1)</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <ul className="list-disc list-inside space-y-3 text-blue-700 dark:text-blue-300">
      <li><strong>Ausstieg:</strong> Bei flachem Ufer: stehen, laufen. Bei Steg: Hände auf Rand, Schwung, raus.</li>
      <li><strong>Cap & Goggles:</strong> Brille in die Kappe. Beides zusammen abziehen beim Laufen - spart Zeit.</li>
      <li><strong>Neopren:</strong> Am Hals anfangen, Arme raus, dann runter bis zur Hüfte. Am Rad abstellen und rausziehen.</li>
      <li><strong>Position merken:</strong> Vor dem Rennen: Wo steht mein Rad? Welche Reihen, welche Markierung? Laufe die Route ab.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Spezifisches Training für Triathleten</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Freiwasser-Praxis:</strong> Mindestens 2-3 Open-Water-Sessions vor dem Wettkampf. Kein Pool ersetzt das.</li>
      <li><strong>Sighting-Integration:</strong> Im Pool alle 6 Züge "sichten" - Blick nach vorne zum Ende der Bahn.</li>
      <li><strong>Massenstarts:</strong> Übe den Start mit anderen - Gedränge, Kicks, Ellenbogen. Mentale Vorbereitung.</li>
      <li><strong>Negative-Split-Swim:</strong> Zweite Hälfte schneller als die erste - spart Energie für Rad und Lauf.</li>
      <li><strong>Brick-Training:</strong> Schwimmen gefolgt von Radfahren. Gewöhne dich an den Wechsel der Muskulatur.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Praktische Übungen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Sighting im Pool:</strong> 8x50m mit Sighting alle 6 Züge. Blick zur Wand am Bahnende.</li>
      <li><strong>Neopren-Test:</strong> Probiere deinen Anzug im Pool. Wie fühlt sich die Armführung an?</li>
      <li><strong>T1-Durchlauf:</strong> Übe den kompletten Wechsel 5x hintereinander (Zeit stoppen).</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Triathlon Swimming</h2>

  <p className="text-lg leading-relaxed">
    Triathlon swimming is its own discipline. Whether 750m sprint or 3.8km Ironman - the 
    requirements differ fundamentally from pool swimming: No lane lines, no walls, no clear 
    lanes. Instead: wind, waves, other swimmers, and often a wetsuit. In this lesson you'll 
    learn the specific techniques for triathlon swimmers.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">Sighting - Navigation in Open Water</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Without a black line you must orient by landmarks. Sighting is briefly lifting your head 
      to check direction.
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Technique:</strong> Every 6-10 strokes, briefly lift your head. Only enough for eyes above water. Chin stays low.</li>
      <li><strong>Rhythm:</strong> Best during breath - then you look sideways AND forward in one motion.</li>
      <li><strong>Landmarks:</strong> Choose tall, visible objects (trees, masts, buildings). Not low buoys.</li>
      <li><strong>Straight line:</strong> Don't swim blindly! Frequent sighting prevents zigzag course and time loss.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Drafting - Swimming in the Slipstream</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <p className="text-green-700 dark:text-green-300 mb-3">
      Swimming directly behind or beside another swimmer saves 10-25% energy.
    </p>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Position:</strong> Leader's feet at your hip height. Not too close (getting kicked) - about 30-50cm distance.</li>
      <li><strong>Side drafting:</strong> At neighbor's hip level. You're in their "slipstream" and save energy.</li>
      <li><strong>Ethics:</strong> Drafting is allowed in triathlon. Use it, but don't get annoyed when others use you.</li>
      <li><strong>Caution:</strong> The leader can change direction. Keep your sighting!</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Wetsuit</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Benefits & Handling</h4>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Buoyancy:</strong> Legs and hips sit higher - better body position without extra work.</li>
      <li><strong>Warmth:</strong> Insulates in cold water. Often required below 24°C.</li>
      <li><strong>Putting on:</strong> Plastic bags over hands/feet, pull up slowly. No fingernails in the neoprene!</li>
      <li><strong>Arm turnover:</strong> Wetsuit changes arm mechanics. Shorter, higher strokes. Practice in pool with suit!</li>
      <li><strong>Removal:</strong> Start at neck, then shoulders. Practice the transition change several times.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Swim-to-Bike Transition (T1)</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <ul className="list-disc list-inside space-y-3 text-blue-700 dark:text-blue-300">
      <li><strong>Exit:</strong> At shallow shore: stand, run. At dock: hands on edge, momentum, out.</li>
      <li><strong>Cap & goggles:</strong> Goggles inside cap. Remove both together while running - saves time.</li>
      <li><strong>Wetsuit:</strong> Start at neck, arms out, then down to hips. Stand at bike and pull off.</li>
      <li><strong>Remember position:</strong> Before race: Where is my bike? Which row, which marker? Walk the route.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Specific Training for Triathletes</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Open water practice:</strong> At least 2-3 open water sessions before competition. No pool replaces that.</li>
      <li><strong>Sighting integration:</strong> In pool, sight every 6 strokes - look forward to lane end.</li>
      <li><strong>Mass starts:</strong> Practice starts with others - crowding, kicks, elbows. Mental prep.</li>
      <li><strong>Negative split swim:</strong> Second half faster than first - saves energy for bike and run.</li>
      <li><strong>Brick training:</strong> Swim followed by bike. Get used to the muscle transition.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Practice Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Sighting in pool:</strong> 8x50m with sighting every 6 strokes. Look at wall at lane end.</li>
      <li><strong>Wetsuit test:</strong> Try your suit in the pool. How does arm mechanics feel?</li>
      <li><strong>T1 run-through:</strong> Practice the complete transition 5x in a row (time it).</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Triathlon-Schwimmen vorbereiten",
      description: "Bereite dich auf das Freiwasser-Schwimmen vor.",
      checklist: [
        { text: "Übe Sighting im Pool: 8x50m mit Sighting alle 6 Züge", checked: false },
        { text: "Teste deinen Neoprenanzug im Pool (falls vorhanden)", checked: false },
        { text: "Absolviere mindestens 1 Open-Water-Training vor dem Wettkampf", checked: false },
        { text: "Übe T1 (Schwimm-Ausstieg bis Rad-Start) 5x", checked: false }
      ]
    },
    en: {
      title: "Prepare Triathlon Swimming",
      description: "Prepare for open water swimming.",
      checklist: [
        { text: "Practice sighting in pool: 8x50m with sighting every 6 strokes", checked: false },
        { text: "Test your wetsuit in the pool (if you have one)", checked: false },
        { text: "Complete at least 1 open water session before competition", checked: false },
        { text: "Practice T1 (swim exit to bike start) 5x", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Wie oft soll man beim Freiwasser-Schwimmen sighten?", answer: "Alle 6-10 Züge. Am besten beim Atemzug - dann siehst du zur Seite und nach vorne. Zu selten = Zickzack-Kurs. Zu oft = Zeitverlust und schlechte Wasserlage." },
      { question: "Wie viel Energie kann Drafting sparen?", answer: "10-25%. Direkt hinter oder seitlich hinter einem Schwimmer zu schwimmen nutzt den Sog und reduziert den Widerstand erheblich." },
      { question: "Warum soll man den Neoprenanzug vor dem Wettkampf im Pool testen?", answer: "Der Neopren verändert die Armführung - kürzere, höhere Züge. Man muss sich an das Gefühl gewöhnen, sonst ist die Technik am Wettkampftag ungewohnt und ineffizient." }
    ],
    en: [
      { question: "How often should you sight when swimming open water?", answer: "Every 6-10 strokes. Best during breath - then you look sideways and forward. Too rarely = zigzag course. Too often = time loss and poor body position." },
      { question: "How much energy can drafting save?", answer: "10-25%. Swimming directly behind or beside another swimmer uses their slipstream and significantly reduces drag." },
      { question: "Why test the wetsuit in the pool before competition?", answer: "The wetsuit changes arm mechanics - shorter, higher strokes. You need to get used to the feel, otherwise technique feels unfamiliar and inefficient on race day." }
    ]
  }
};
