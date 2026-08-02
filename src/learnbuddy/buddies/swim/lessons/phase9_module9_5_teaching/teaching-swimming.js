export const teachingSwimming = {
  title: {
    de: "Schwimmen lehren - Von der Theorie zur Praxis",
    en: "Teaching Swimming - From Theory to Practice"
  },
  description: {
    de: "Progressive Lehrmethoden, Wasserangst überwinden, Unterschiede Kinder vs. Erwachsene, und sicheres Unterrichten.",
    en: "Progressive teaching methods, overcoming water fear, differences children vs. adults, and safe instruction."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Schwimmen lehren</h2>

  <p className="text-lg leading-relaxed">
    Schwimmen zu unterrichten ist eine verantwortungsvolle und erfüllende Aufgabe. Ob du 
    Kindern das erste Gleiten beibringst oder Erwachsenen die Kraultechnik erklärst - die 
    Prinzipien guten Unterrichts sind ähnlich, die Umsetzung jedoch unterschiedlich. Hier 
    lernst du progressive Methoden, wie du Wasserangst überwindest und worin sich das 
    Unterrichten von Kindern und Erwachsenen unterscheidet.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">Progressive Lehrmethode</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Schwimmen lernt man schrittweise - vom Einfachen zum Komplexen.
    </p>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Stufen der Progression</h4>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Wassergewöhnung:</strong> Gesicht benetzen, untertauchen, Augen öffnen. Kein Druck, spielerisch.</li>
      <li><strong>Atmung:</strong> Ausatmen ins Wasser (blubbern), rhythmisches Atmen am Beckenrand.</li>
      <li><strong>Schweben:</strong> Rücken und Bauchlage, Auftrieb spüren. Vertrauen in das Wasser.</li>
      <li><strong>Gleiten:</strong> Abstoßen und gleiten - zuerst mit Brett, dann ohne.</li>
      <li><strong>Beinschlag:</strong> Flutterkick in Rückenlage, dann in Bauchlage.</li>
      <li><strong>Armzug:</strong> Armbewegung einzeln, dann koordiniert mit Atmung.</li>
      <li><strong>Ganze Lage:</strong> Alle Teile zusammen. Erst Kurzstrecken, dann länger.</li>
    </ol>
    <p className="text-blue-700 dark:text-blue-300 mt-3 italic">
      Wichtig: Keinen Schritt überspringen. Jeder baut auf dem vorherigen auf.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Wasserangst überwinden</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <p className="text-amber-700 dark:text-amber-300 mb-3">
      Angst vor dem Wasser ist häufig - bei Kindern und Erwachsenen. Respektvoll und geduldig angehen.
    </p>
    <ul className="list-disc list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>Kein Zwang:</strong> Niemals jemanden ins Wasser schieben oder untertauchen. Vertrauen zerstören ist schneller als aufbauen.</li>
      <li><strong>Tempo des Lernenden:</strong> Der Ängstliche entscheidet das Tempo. Du bietest Möglichkeiten an.</li>
      <li><strong>Kleine Schritte:</strong> Erst am Rand sitzen, Füße eintauchen. Dann ins flache Wasser gehen. Dann tiefer. Jeder Schritt wird gefeiert.</li>
      <li><strong>Modellieren:</strong> Zeige, dass Wasser sicher ist. Du gehst zuerst, machst vor, lachst.</li>
      <li><strong>Spielerischer Zugang:</strong> Ballspiele, Tauchringe, "Ringe vom Boden holen" - Ablenkung von der Angst.</li>
      <li><strong>Lob:</strong> Jede noch so kleine Überwindung verdient Anerkennung. "Du hast dich getraut!"</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Kinder vs. Erwachsene - Unterschiede</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-green-100 dark:bg-green-800/60">
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Aspekt</th>
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Kinder</th>
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Erwachsene</th>
        </tr>
      </thead>
      <tbody className="text-green-700 dark:text-green-300">
        <tr><td className="border border-green-200 dark:border-green-700 p-2">Lernstil</td><td className="border border-green-200 dark:border-green-700 p-2">Spielerisch, durch Imitation</td><td className="border border-green-200 dark:border-green-700 p-2">Analytisch, Erklärungen nötig</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2">Aufmerksamkeit</td><td className="border border-green-200 dark:border-green-700 p-2">Kurz (5-10 Min.), Abwechslung wichtig</td><td className="border border-green-200 dark:border-green-700 p-2">Länger, fokussierter</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2">Angst</td><td className="border border-green-200 dark:border-green-700 p-2">Oft weniger rational, schneller überwindbar</td><td className="border border-green-200 dark:border-green-700 p-2">Tief sitzend, rationaler Zugang hilft</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2">Körpergefühl</td><td className="border border-green-200 dark:border-green-700 p-2">Noch in Entwicklung, flexibler</td><td className="border border-green-200 dark:border-green-700 p-2">Festgefahren, korrigieren schwieriger</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2">Motivation</td><td className="border border-green-200 dark:border-green-700 p-2">Spaß, Spiel, Belohnung</td><td className="border border-green-200 dark:border-green-700 p-2">Ziele, Fortschritt, Verstehen</td></tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Sicheres Unterrichten</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <ul className="list-disc list-inside space-y-3 text-blue-700 dark:text-blue-300">
      <li><strong>Übersicht:</strong> Immer alle Teilnehmer im Blick. Nie den Rücken zudrehen, wenn jemand im Wasser ist.</li>
      <li><strong>Gruppengröße:</strong> Maximal 6-8 Kinder oder 10-12 Erwachsene pro Lehrperson. Je weniger Erfahrung, desto kleiner die Gruppe.</li>
      <li><strong>Regeln:</strong> Klare, einfache Regeln von Anfang an. Kein Rennen am Beckenrand, kein Springen ohne Aufforderung.</li>
      <li><strong>Rettungsfähigkeit:</strong> Als Lehrer solltest du Rettungsschwimmer sein oder jemanden mit Rettungsqualifikation dabei haben.</li>
      <li><strong>Erste Hilfe:</strong> Wissen, wie man bei Badeunfällen reagiert. Bewusstlosigkeit, Wasser in der Lunge, etc.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Effektive Korrekturen geben</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Eine Sache:</strong> Maximal eine Korrektur pro Runde. Nicht überladen.</li>
      <li><strong>Positiv formulieren:</strong> "Kinn runter" statt "Kopf nicht hoch". "Arm gestreckt lassen" statt "Arm nicht beugen".</li>
      <li><strong>Zeigen und fühlen lassen:</strong> Vormachen, dann den Lernenden die Bewegung an Land oder im Wasser nachmachen lassen.</li>
      <li><strong>Fragen:</strong> "Wie hat sich das angefühlt?" - Lernende zur Selbstwahrnehmung bringen.</li>
      <li><strong>Lob vor Korrektur:</strong> "Dein Kick ist schon gut. Lass uns am Armzug arbeiten." - Motivation erhalten.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Praktische Übungen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Progression planen:</strong> Schreibe eine 6-Wochen-Progression für einen Anfänger (Kraul lernen).</li>
      <li><strong>Angst-Szenario:</strong> Überlege: Wie würdest du einen ängstlichen Erwachsenen an das Untertauchen heranführen?</li>
      <li><strong>Korrektur üben:</strong> Gib einem Partner eine Korrektur - positiv formuliert, eine Sache, mit Demonstration.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Teaching Swimming</h2>

  <p className="text-lg leading-relaxed">
    Teaching swimming is a responsible and fulfilling task. Whether you're teaching children 
    their first glide or explaining freestyle technique to adults - the principles of good 
    instruction are similar, but implementation differs. Here you'll learn progressive methods, 
    how to overcome water fear, and how teaching children differs from teaching adults.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">Progressive Teaching Method</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Swimming is learned step by step - from simple to complex.
    </p>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Stages of Progression</h4>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Water acclimation:</strong> Wet face, submersion, open eyes. No pressure, playful.</li>
      <li><strong>Breathing:</strong> Exhale into water (bubbling), rhythmic breathing at pool edge.</li>
      <li><strong>Floating:</strong> Back and front float, feel buoyancy. Trust in the water.</li>
      <li><strong>Gliding:</strong> Push off and glide - first with board, then without.</li>
      <li><strong>Kick:</strong> Flutter kick on back, then on front.</li>
      <li><strong>Arm stroke:</strong> Arm movement alone, then coordinated with breathing.</li>
      <li><strong>Full stroke:</strong> All parts together. First short distances, then longer.</li>
    </ol>
    <p className="text-blue-700 dark:text-blue-300 mt-3 italic">
      Important: Don't skip steps. Each builds on the previous one.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Overcoming Water Fear</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <p className="text-amber-700 dark:text-amber-300 mb-3">
      Fear of water is common - in children and adults. Approach respectfully and patiently.
    </p>
    <ul className="list-disc list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>No force:</strong> Never push anyone into water or hold them under. Destroying trust is faster than building it.</li>
      <li><strong>Learner's pace:</strong> The fearful person decides the pace. You offer opportunities.</li>
      <li><strong>Small steps:</strong> First sit at edge, feet in water. Then walk into shallow water. Then deeper. Each step is celebrated.</li>
      <li><strong>Model:</strong> Show that water is safe. You go first, demonstrate, laugh.</li>
      <li><strong>Playful approach:</strong> Ball games, dive rings, "fetch rings from the bottom" - distraction from fear.</li>
      <li><strong>Praise:</strong> Every small overcoming deserves recognition. "You were brave!"</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Children vs. Adults - Differences</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-green-100 dark:bg-green-800/60">
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Aspect</th>
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Children</th>
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Adults</th>
        </tr>
      </thead>
      <tbody className="text-green-700 dark:text-green-300">
        <tr><td className="border border-green-200 dark:border-green-700 p-2">Learning style</td><td className="border border-green-200 dark:border-green-700 p-2">Playful, through imitation</td><td className="border border-green-200 dark:border-green-700 p-2">Analytical, explanations needed</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2">Attention</td><td className="border border-green-200 dark:border-green-700 p-2">Short (5-10 min), variety important</td><td className="border border-green-200 dark:border-green-700 p-2">Longer, more focused</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2">Fear</td><td className="border border-green-200 dark:border-green-700 p-2">Often less rational, quicker to overcome</td><td className="border border-green-200 dark:border-green-700 p-2">Deep-seated, rational approach helps</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2">Body awareness</td><td className="border border-green-200 dark:border-green-700 p-2">Still developing, more flexible</td><td className="border border-green-200 dark:border-green-700 p-2">Ingrained, harder to correct</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2">Motivation</td><td className="border border-green-200 dark:border-green-700 p-2">Fun, play, rewards</td><td className="border border-green-200 dark:border-green-700 p-2">Goals, progress, understanding</td></tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Teaching Safely</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <ul className="list-disc list-inside space-y-3 text-blue-700 dark:text-blue-300">
      <li><strong>Overview:</strong> Always keep all participants in view. Never turn your back when someone is in the water.</li>
      <li><strong>Group size:</strong> Max 6-8 children or 10-12 adults per instructor. Less experience = smaller group.</li>
      <li><strong>Rules:</strong> Clear, simple rules from the start. No running at pool edge, no jumping without permission.</li>
      <li><strong>Lifesaving ability:</strong> As a teacher you should be a lifeguard or have someone with rescue qualification present.</li>
      <li><strong>First aid:</strong> Know how to respond to water accidents. Unconsciousness, water in lungs, etc.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Giving Effective Corrections</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>One thing:</strong> Maximum one correction per round. Don't overload.</li>
      <li><strong>Positive phrasing:</strong> "Chin down" instead of "don't hold head up". "Keep arm extended" instead of "don't bend arm".</li>
      <li><strong>Show and feel:</strong> Demonstrate, then have the learner replicate the movement on land or in water.</li>
      <li><strong>Questions:</strong> "How did that feel?" - Bring learners to self-awareness.</li>
      <li><strong>Praise before correction:</strong> "Your kick is already good. Let's work on the arm pull." - Maintain motivation.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Practice Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Plan progression:</strong> Write a 6-week progression for a beginner (learning freestyle).</li>
      <li><strong>Fear scenario:</strong> Consider: How would you introduce a fearful adult to submersion?</li>
      <li><strong>Practice corrections:</strong> Give a partner a correction - positively phrased, one thing, with demonstration.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Schwimmunterricht vorbereiten",
      description: "Lerne die Grundlagen des sicheren und effektiven Schwimmunterrichts.",
      checklist: [
        { text: "Erstelle eine 6-Wochen-Progression für einen Kraul-Anfänger", checked: false },
        { text: "Übe das Geben einer positiven Korrektur (mit Partner oder imaginär)", checked: false },
        { text: "Informiere dich über Rettungsschwimmer-Qualifikation in deiner Region", checked: false },
        { text: "Überlege einen Ansatz für einen ängstlichen Lernenden", checked: false }
      ]
    },
    en: {
      title: "Prepare Swimming Instruction",
      description: "Learn the basics of safe and effective swimming instruction.",
      checklist: [
        { text: "Create a 6-week progression for a freestyle beginner", checked: false },
        { text: "Practice giving a positive correction (with partner or imagined)", checked: false },
        { text: "Research lifeguard qualification in your region", checked: false },
        { text: "Consider an approach for a fearful learner", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Warum sollte man niemals jemanden ins Wasser zwingen?", answer: "Zwang zerstört Vertrauen und kann traumatisieren. Vertrauen aufzubauen dauert lange - zu zerstören nur Sekunden. Der Lernende muss selbst entscheiden, wann er bereit ist." },
      { question: "Wie unterscheidet sich das Lernen von Kindern und Erwachsenen?", answer: "Kinder lernen spielerisch durch Imitation, haben kürzere Aufmerksamkeit, brauchen Abwechslung. Erwachsene lernen analytisch, brauchen Erklärungen, sind fokussierter, aber oft steifer in Bewegungsmustern." },
      { question: "Wie viele Korrekturen sollte man pro Runde geben?", answer: "Maximal eine. Zu viele Korrekturen überfordern und führen zu keiner nachhaltigen Verbesserung. Lieber eine Sache gut machen, dann die nächste." }
    ],
    en: [
      { question: "Why should you never force anyone into the water?", answer: "Force destroys trust and can traumatize. Building trust takes time - destroying it takes seconds. The learner must decide when they're ready." },
      { question: "How does learning differ between children and adults?", answer: "Children learn playfully through imitation, have shorter attention spans, need variety. Adults learn analytically, need explanations, are more focused, but often stiffer in movement patterns." },
      { question: "How many corrections should you give per round?", answer: "Maximum one. Too many corrections overwhelm and lead to no lasting improvement. Better to do one thing well, then the next." }
    ]
  }
};
