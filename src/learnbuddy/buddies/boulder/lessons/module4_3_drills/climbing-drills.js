import { Crosshair, Volume2, Eye, Footprints, TrendingUp, Repeat, Zap } from 'lucide-react';

export const climbingDrills = {
  title: { de: "Kletterübungen & Drills", en: "Climbing Drills & Exercises" },
  description: { de: "Silent Feet, Downclimbing, Hover Hands und weitere Drills, die deine Technik auf das nächste Level bringen.", en: "Silent feet, downclimbing, hover hands, and more drills that take your technique to the next level." },
  content: {
    de: `
### Kletterübungen & Drills: Technik gezielt verbessern

Drills sind <strong>gezielte Übungen</strong>, bei denen du eine bestimmte Fähigkeit isoliert trainierst. Sie sind das Geheimnis schneller Verbesserung!

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Crosshair className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Warum Drills?</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        <strong>"Übung macht den Meister."</strong> Drills zwingen dich, dich auf eine Sache zu konzentrieren. Statt alles gleichzeitig zu verbessern, isolierst du eine Schwäche und trainierst sie gezielt.
      </p>
    </div>
  </div>
</div>

---

### Bewegungs-Flow Drills

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Repeat className="text-green-600 dark:text-green-400" size={24} />
    Für flüssige Bewegungen
  </h3>
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Boulder-Golf</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Klettere einen Boulder mit <strong>so wenig Zügen wie möglich</strong>. Zwingt dich zu effizienten Bewegungen und kreativen Lösungen.</p>
    </div>
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Add-On</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Bei jeder Wiederholung einen Zug hinzufügen. Start: 2 Züge, dann 3, dann 4... Trainiert Ausdauer und Merkfähigkeit.</p>
    </div>
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Downclimbing</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Klettere einen Boulder <strong>rückwärts herunter</strong>. Trainiert Kontrolle, Körperposition und Präzision. Viel schwieriger als es klingt!</p>
    </div>
  </div>
</div>

---

### Präzisions-Drills

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Eye className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Für perfekte Platzierung</h4>
      <div className="space-y-3 mt-3">
        <div>
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Hover Hands:</strong> Halte die Hand 3 Sekunden über dem Griff, bevor du greifst. Trainiert Bewusstsein und Präzision.</p>
        </div>
        <div>
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Sticky Hands/Feet:</strong> Einmal platziert, dürfen Hände/Füße NICHT mehr angepasst werden. Zwingt zu bewusster Platzierung.</p>
        </div>
        <div>
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>No-Read:</strong> Klettere einen Boulder ohne ihn vorher anzusehen. Trainiert Intuition und spontane Problemlösung.</p>
        </div>
      </div>
    </div>
  </div>
</div>

---

### Fußtechnik-Drills

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Volume2 className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Silent Feet & mehr</h4>
      <div className="space-y-3 mt-3">
        <div>
          <p className="text-sm text-purple-700 dark:text-purple-300"><strong>Silent Feet (Stumme Füße):</strong> Klettere so leise wie möglich. Jedes Geräusch = ein Fehler. DER beste Drill für Fußtechnik!</p>
        </div>
        <div>
          <p className="text-sm text-purple-700 dark:text-purple-300"><strong>Nur-Füße-Traverse:</strong> Traversiere nur mit den Füßen, Hände an einer Leiste auf Schulterhöhe. Trainiert Fußpräzision und Balance.</p>
        </div>
        <div>
          <p className="text-sm text-purple-700 dark:text-purple-300"><strong>Sloper-Only:</strong> Nur auf Slopern klettern. Zwingt zu perfekter Körperpositionierung und Gewichtsverlagerung.</p>
        </div>
      </div>
    </div>
  </div>
</div>

---

### Kraft-Drills

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Zap className="text-green-600 dark:text-green-400" size={24} />
    Für mehr Power
  </h3>
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Einarmig klettern</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Leichte Boulder nur mit einer Hand. Trainiert Lock-Off-Stärke und Balance. Extrem schwer!</p>
    </div>
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">4x4s</h4>
      <p className="text-sm text-green-700 dark:text-green-300">4 Boulder auswählen, alle 4 ohne Pause klettern. Pause, dann noch 3 Runden. Killer für Ausdauer!</p>
    </div>
  </div>
</div>

**Merke:** 10 Minuten Drills pro Session machen einen riesigen Unterschied in deiner Technik!
    `,
    en: `
### Climbing Drills & Exercises: Targeted Technique Improvement

Drills are <strong>targeted exercises</strong> where you isolate and train a specific skill. They're the secret to rapid improvement!

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Crosshair className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Why Drills?</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        <strong>"Practice makes perfect."</strong> Drills force you to focus on one thing. Instead of improving everything at once, you isolate a weakness and train it specifically.
      </p>
    </div>
  </div>
</div>

---

### Movement Flow Drills

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Repeat className="text-green-600 dark:text-green-400" size={24} />
    For Fluid Movement
  </h3>
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Boulder Golf</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Climb a boulder with <strong>as few moves as possible</strong>. Forces efficient movements and creative solutions.</p>
    </div>
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Add-On</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Add one move with each repetition. Start: 2 moves, then 3, then 4... Trains endurance and memory.</p>
    </div>
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Downclimbing</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Climb a boulder <strong>backwards down</strong>. Trains control, body position, and precision. Much harder than it sounds!</p>
    </div>
  </div>
</div>

---

### Precision Drills

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Eye className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">For Perfect Placement</h4>
      <div className="space-y-3 mt-3">
        <div><p className="text-sm text-amber-700 dark:text-amber-300"><strong>Hover Hands:</strong> Hold your hand 3 seconds above the hold before grabbing. Trains awareness and precision.</p></div>
        <div><p className="text-sm text-amber-700 dark:text-amber-300"><strong>Sticky Hands/Feet:</strong> Once placed, hands/feet may NOT be adjusted. Forces conscious placement.</p></div>
        <div><p className="text-sm text-amber-700 dark:text-amber-300"><strong>No-Read:</strong> Climb a boulder without looking at it first. Trains intuition and spontaneous problem-solving.</p></div>
      </div>
    </div>
  </div>
</div>

---

### Footwork Drills

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Volume2 className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Silent Feet & More</h4>
      <div className="space-y-3 mt-3">
        <div><p className="text-sm text-purple-700 dark:text-purple-300"><strong>Silent Feet:</strong> Climb as quietly as possible. Every sound = a mistake. THE best drill for footwork!</p></div>
        <div><p className="text-sm text-purple-700 dark:text-purple-300"><strong>Feet-Only Traverse:</strong> Traverse using only feet, hands on a rail at shoulder height. Trains foot precision and balance.</p></div>
        <div><p className="text-sm text-purple-700 dark:text-purple-300"><strong>Sloper-Only:</strong> Climb only on slopers. Forces perfect body positioning and weight transfer.</p></div>
      </div>
    </div>
  </div>
</div>

---

### Strength Drills

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Zap className="text-green-600 dark:text-green-400" size={24} />
    For More Power
  </h3>
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">One-Arm Climbing</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Easy boulders with only one hand. Trains lock-off strength and balance. Extremely hard!</p>
    </div>
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">4x4s</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Choose 4 boulders, climb all 4 without rest. Rest, then 3 more rounds. Killer for endurance!</p>
    </div>
  </div>
</div>

**Remember:** 10 minutes of drills per session make a huge difference in your technique!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Kletter-Drills",
      description: "Integriere gezielte Drills in deine Klettersessions.",
      checklist: [
        { text: "Silent Feet: Klettere 3 Boulder so leise wie möglich", checked: false },
        { text: "Hover Hands: Halte bei jedem Griff 3 Sekunden inne, bevor du greifst", checked: false },
        { text: "Downclimbing: Klettere einen leichten Boulder rückwärts herunter", checked: false },
        { text: "Boulder-Golf: Versuche einen Boulder mit minimaler Züge-Anzahl zu klettern", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Climbing Drills",
      description: "Integrate targeted drills into your climbing sessions.",
      checklist: [
        { text: "Silent Feet: Climb 3 boulders as quietly as possible", checked: false },
        { text: "Hover Hands: Pause 3 seconds above each hold before grabbing", checked: false },
        { text: "Downclimbing: Climb an easy boulder backwards down", checked: false },
        { text: "Boulder Golf: Try to climb a boulder with minimum number of moves", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Was ist der 'Silent Feet' Drill und warum ist er so effektiv?", answer: "Beim Silent Feet Drill klettert man so leise wie möglich – jedes Geräusch beim Treten zählt als Fehler. Er ist so effektiv, weil leises Treten präzise Platzierung, Kontrolle und bewusstes Fußsetzen erfordert. Es ist der beste Drill für Fußtechnik und trainiert gleichzeitig Konzentration und Körperbewusstsein." },
      { question: "Wie funktioniert der Hover-Hands-Drill?", answer: "Beim Hover Hands hält man die Hand 3 Sekunden über dem Zielgriff, bevor man greift. Das trainiert bewusste Platzierung statt hastiges Zugreifen. Man wird gezwungen, den Griff genau anzuschauen, die beste Greifposition zu planen und erst dann kontrolliert zuzugreifen. Es verbessert Präzision und Bewusstsein." },
      { question: "Warum ist Downclimbing eine so gute Übung?", answer: "Downclimbing (einen Boulder rückwärts herunterklettern) ist eine hervorragende Übung, weil es Kontrolle, Körperpositionierung und Präzision trainiert. Es ist viel schwieriger als Hochklettern, da man gegen die Schwerkraft langsam und kontrolliert absteigen muss. Es verbessert die Körperwahrnehmung und das Bewegungsgefühl." }
    ],
    en: [
      { question: "What is the Silent Feet drill and why is it so effective?", answer: "In the Silent Feet drill, you climb as quietly as possible – every sound when stepping counts as a mistake. It's effective because quiet stepping requires precise placement, control, and conscious foot setting. It's the best drill for footwork and simultaneously trains concentration and body awareness." },
      { question: "How does the Hover Hands drill work?", answer: "In Hover Hands, you hold your hand 3 seconds above the target hold before grabbing. This trains conscious placement instead of hasty grabbing. You're forced to look at the hold carefully, plan the best grip position, and only then grab in a controlled manner. It improves precision and awareness." },
      { question: "Why is downclimbing such a good exercise?", answer: "Downclimbing (climbing a boulder backwards down) is an excellent exercise because it trains control, body positioning, and precision. It's much harder than climbing up since you must descend slowly and controlled against gravity. It improves body awareness and movement sense." }
    ]
  }
};
