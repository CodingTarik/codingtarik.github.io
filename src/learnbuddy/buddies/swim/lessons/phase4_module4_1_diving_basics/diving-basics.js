export const divingBasics = {
  title: {
    de: "Grundlagen des Tauchens",
    en: "Diving Basics"
  },
  description: {
    de: "Lerne die Grundlagen des Tauchens: Druckausgleich, Atemtechnik, Auftrieb und Sicherheit.",
    en: "Learn diving fundamentals: pressure equalization, breathing technique, buoyancy, and safety."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Grundlagen des Tauchens</h2>

  <p className="text-lg leading-relaxed">
    Tauchen im Schwimmkontext bedeutet, sich unter Wasser fortzubewegen und dort Zeit zu 
    verbringen. Es ist eine faszinierende Fähigkeit, die eine neue Perspektive auf die 
    Unterwasserwelt eröffnet. Die Grundlagen umfassen Druckausgleich, Atemkontrolle und 
    sichere Tauchpraktiken.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Was du lernen wirst</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Wie Wasserdruck auf deinen Körper wirkt</li>
      <li>Druckausgleich für die Ohren</li>
      <li>Effiziente Atemtechnik vor dem Tauchen</li>
      <li>Auftriebskontrolle unter Wasser</li>
      <li>Sicherheitsregeln beim Tauchen</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Druckausgleich</h3>

  <p className="leading-relaxed">
    Je tiefer du tauchst, desto mehr Druck wirkt auf deinen Körper - besonders auf die Ohren. 
    Der Druckausgleich ist die wichtigste Technik, um schmerzfrei tauchen zu können.
  </p>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-4">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Valsalva-Manöver</h3>
    <ol className="list-decimal list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li>Halte die Nase mit Daumen und Zeigefinger zu.</li>
      <li>Atme sanft gegen die geschlossene Nase aus.</li>
      <li>Du solltest ein leichtes "Ploppen" in den Ohren spüren.</li>
      <li>Führe den Druckausgleich früh und regelmäßig durch - alle 1-2 Meter Tiefe.</li>
    </ol>
    <p className="text-amber-700 dark:text-amber-300 mt-3">
      <strong>Wichtig:</strong> Nie mit Gewalt drücken! Wenn der Ausgleich nicht funktioniert, 
      tauche etwas auf und versuche es erneut.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Atemtechnik vor dem Tauchen</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Tiefes Atmen:</strong> Vor dem Tauchen 3-4 tiefe, ruhige Atemzüge nehmen. Nicht hyperventilieren!</li>
      <li><strong>Letzter Atemzug:</strong> Einen vollen, aber nicht übermäßig tiefen Atemzug nehmen.</li>
      <li><strong>Entspannung:</strong> Je entspannter du bist, desto weniger Sauerstoff verbrauchst du.</li>
      <li><strong>Ausatmen unter Wasser:</strong> Langsam und kontrolliert durch die Nase ausatmen, um den Auftrieb zu kontrollieren.</li>
    </ul>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-4">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Warnung: Hyperventilation</h3>
    <p className="text-red-700 dark:text-red-300">
      Nie vor dem Tauchen hyperventilieren (schnelles, tiefes Ein- und Ausatmen)! Dies senkt den 
      CO2-Spiegel im Blut und kann dazu führen, dass du unter Wasser ohne Vorwarnung das 
      Bewusstsein verlierst (Shallow Water Blackout). Das ist lebensgefährlich!
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Auftriebskontrolle</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Dein Körper hat natürlichen Auftrieb - er will an die Oberfläche. So kontrollierst du das:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Luft in der Lunge:</strong> Volle Lungen = mehr Auftrieb. Etwas Luft ablassen hilft beim Abtauchen.</li>
      <li><strong>Körperposition:</strong> Kopfüber abtauchen erzeugt weniger Widerstand als füßvoraus.</li>
      <li><strong>Armarbeit:</strong> Die Arme können wie Flossen verwendet werden, um die Tiefe zu kontrollieren.</li>
      <li><strong>Entspannung:</strong> Ein entspannter Körper taucht leichter als ein angespannter.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Übungen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Druckausgleich üben:</strong> Übe das Valsalva-Manöver an Land und dann in flachem Wasser.</li>
      <li><strong>Tiefatmung:</strong> Übe tiefe, kontrollierte Atemzüge - 4 Sekunden ein, 4 Sekunden aus.</li>
      <li><strong>Abtauchen im Stehen:</strong> Im hüfttiefen Wasser abtauchen und den Druckausgleich fühlen.</li>
      <li><strong>Schweben:</strong> Unter Wasser versuchen, auf einer Tiefe zu schweben, ohne auf- oder abzusteigen.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Diving Basics</h2>

  <p className="text-lg leading-relaxed">
    Diving in the swimming context means moving underwater and spending time beneath the surface. 
    It's a fascinating skill that opens a new perspective on the underwater world. The basics 
    include pressure equalization, breath control, and safe diving practices.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">What You'll Learn</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>How water pressure affects your body</li>
      <li>Ear pressure equalization</li>
      <li>Efficient breathing technique before diving</li>
      <li>Buoyancy control underwater</li>
      <li>Safety rules for diving</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Pressure Equalization</h3>

  <p className="leading-relaxed">
    The deeper you dive, the more pressure acts on your body - especially on your ears. 
    Pressure equalization is the most important technique for pain-free diving.
  </p>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-4">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Valsalva Maneuver</h3>
    <ol className="list-decimal list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li>Pinch your nose with thumb and index finger.</li>
      <li>Gently blow against the closed nose.</li>
      <li>You should feel a slight "pop" in your ears.</li>
      <li>Equalize early and regularly - every 1-2 meters of depth.</li>
    </ol>
    <p className="text-amber-700 dark:text-amber-300 mt-3">
      <strong>Important:</strong> Never force it! If equalization doesn't work, ascend 
      slightly and try again.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Breathing Technique Before Diving</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Deep breathing:</strong> Take 3-4 deep, calm breaths before diving. Don't hyperventilate!</li>
      <li><strong>Last breath:</strong> Take a full but not excessively deep breath.</li>
      <li><strong>Relaxation:</strong> The more relaxed you are, the less oxygen you consume.</li>
      <li><strong>Exhaling underwater:</strong> Slowly and controlled exhale through the nose to control buoyancy.</li>
    </ul>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-4">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Warning: Hyperventilation</h3>
    <p className="text-red-700 dark:text-red-300">
      Never hyperventilate before diving (rapid, deep breathing in and out)! This lowers blood CO2 
      levels and can cause you to lose consciousness underwater without warning (Shallow Water 
      Blackout). This is life-threatening!
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Buoyancy Control</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Your body has natural buoyancy - it wants to float to the surface. Here's how to control it:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Lung air:</strong> Full lungs = more buoyancy. Releasing some air helps with descending.</li>
      <li><strong>Body position:</strong> Head-first descent creates less resistance than feet-first.</li>
      <li><strong>Arm work:</strong> Arms can be used like fins to control depth.</li>
      <li><strong>Relaxation:</strong> A relaxed body sinks easier than a tense one.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Practice equalization:</strong> Practice the Valsalva maneuver on land, then in shallow water.</li>
      <li><strong>Deep breathing:</strong> Practice deep, controlled breaths - 4 seconds in, 4 seconds out.</li>
      <li><strong>Standing descent:</strong> Submerge in waist-deep water and feel the equalization.</li>
      <li><strong>Hovering:</strong> Underwater, try to hover at one depth without ascending or descending.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Tauch-Grundlagen üben",
      description: "Übe die grundlegenden Tauchfähigkeiten in sicherer Umgebung.",
      checklist: [
        { text: "Übe den Druckausgleich 10 Mal an Land", checked: false },
        { text: "Tauche in 2-3 Meter Tiefe ab und gleiche den Druck aus", checked: false },
        { text: "Übe kontrolliertes Ausatmen unter Wasser für 30 Sekunden", checked: false },
        { text: "Versuche unter Wasser auf einer Stelle zu schweben", checked: false }
      ]
    },
    en: {
      title: "Practice Diving Basics",
      description: "Practice fundamental diving skills in a safe environment.",
      checklist: [
        { text: "Practice pressure equalization 10 times on land", checked: false },
        { text: "Dive to 2-3 meter depth and equalize pressure", checked: false },
        { text: "Practice controlled exhaling underwater for 30 seconds", checked: false },
        { text: "Try hovering in one spot underwater", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was ist das Valsalva-Manöver und wofür wird es verwendet?",
        answer: "Man hält die Nase zu und bläst sanft dagegen, um den Druck in den Ohren auszugleichen. Es wird beim Tauchen verwendet, um Ohrenschmerzen durch den Wasserdruck zu vermeiden."
      },
      {
        question: "Warum ist Hyperventilation vor dem Tauchen gefährlich?",
        answer: "Hyperventilation senkt den CO2-Spiegel im Blut, was dazu führen kann, dass man unter Wasser ohne Vorwarnung das Bewusstsein verliert (Shallow Water Blackout)."
      },
      {
        question: "Wie beeinflusst die Luft in der Lunge den Auftrieb?",
        answer: "Volle Lungen erzeugen mehr Auftrieb (man treibt nach oben). Etwas Luft ablassen reduziert den Auftrieb und erleichtert das Abtauchen."
      }
    ],
    en: [
      {
        question: "What is the Valsalva maneuver and what is it used for?",
        answer: "Pinch the nose and gently blow against it to equalize pressure in the ears. It's used in diving to prevent ear pain from water pressure."
      },
      {
        question: "Why is hyperventilation before diving dangerous?",
        answer: "Hyperventilation lowers blood CO2 levels, which can cause loss of consciousness underwater without warning (Shallow Water Blackout)."
      },
      {
        question: "How does lung air affect buoyancy?",
        answer: "Full lungs create more buoyancy (you float up). Releasing some air reduces buoyancy and makes descending easier."
      }
    ]
  }
};
