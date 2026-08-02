export const differentStyles = {
  title: {
    de: "Verschiedene Stile - Individual Medley (Lagen)",
    en: "Different Styles - Individual Medley"
  },
  description: {
    de: "Lerne das Lagenschwimmen: Alle vier Stile kombinieren, Übergänge und Wettkampf-Lagen.",
    en: "Learn the individual medley: combining all four styles, transitions, and competition medley."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Individual Medley - Lagenschwimmen</h2>

  <p className="text-lg leading-relaxed">
    Das Individual Medley (IM oder Lagen) ist die Königsdisziplin des Schwimmens. Du schwimmst 
    alle vier Stile in einer festgelegten Reihenfolge: Delfin, Rücken, Brust, Kraul. Es erfordert 
    die Beherrschung aller Stile und die Fähigkeit, nahtlos zwischen ihnen zu wechseln.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Die Reihenfolge</h3>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Delfin (Butterfly):</strong> Der anspruchsvollste Stil kommt zuerst, wenn du noch frisch bist.</li>
      <li><strong>Rücken (Backstroke):</strong> Erholsamer als Delfin, aber technisch anspruchsvoll.</li>
      <li><strong>Brust (Breaststroke):</strong> Der langsamste Stil - hier wird das Rennen oft entschieden.</li>
      <li><strong>Kraul (Freestyle):</strong> Der schnellste Stil kommt zum Schluss - hier gibst du alles!</li>
    </ol>
    <p className="text-blue-700 dark:text-blue-300 mt-3">
      <strong>Merke:</strong> Im Wettkampf gibt es 200m IM (50m pro Stil) und 400m IM (100m pro Stil).
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Die Übergänge</h3>

  <p className="leading-relaxed">
    Die Übergänge zwischen den Stilen sind entscheidend. Jeder Stilwechsel erfordert eine 
    spezifische Wendetechnik:
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Delfin → Rücken</h4>
      <p className="text-amber-700 dark:text-amber-300 text-sm">
        Offene Wende (beide Hände an die Wand), dann auf den Rücken drehen und abstoßen. 
        Unterwasser mit Delfinkicks auf dem Rücken.
      </p>
    </div>
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Rücken → Brust</h4>
      <p className="text-amber-700 dark:text-amber-300 text-sm">
        Rücken-Wende (auf den Bauch drehen erlaubt), offene Wende, dann Brust-Pullout 
        und Brustschwimmen beginnen.
      </p>
    </div>
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Brust → Kraul</h4>
      <p className="text-amber-700 dark:text-amber-300 text-sm">
        Offene Wende (beide Hände an die Wand), dann Abstoß in Bauchlage. 
        Unterwasser-Delfinkicks, dann Kraul beginnen.
      </p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Strategie & Pacing</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Tempoeinteilung</h3>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Delfin:</strong> Starte kontrolliert - nicht zu schnell, da du noch 3 Stile vor dir hast.</li>
      <li><strong>Rücken:</strong> Gleichmäßiges Tempo. Nutze die Rotation für Effizienz.</li>
      <li><strong>Brust:</strong> Hier trennt sich die Spreu vom Weizen. Lange Gleitphasen für Effizienz.</li>
      <li><strong>Kraul:</strong> Alles geben! Sprint bis zum Ende.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Training für IM</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">IM-Trainingssets</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>4 x 100m IM:</strong> Jede 100m als 25m Delfin, 25m Rücken, 25m Brust, 25m Kraul. 20s Pause.</li>
      <li><strong>Schwächsten Stil trainieren:</strong> Identifiziere deinen schwächsten Stil und widme ihm extra Trainingszeit.</li>
      <li><strong>Übergangs-Drills:</strong> Übe nur die Übergänge zwischen den Stilen an der Wand.</li>
      <li><strong>Reverse IM:</strong> Kraul, Brust, Rücken, Delfin - trainiert anders und ist eine gute Abwechslung.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Übungen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Erster IM:</strong> Schwimme 200m IM (50m pro Stil) und notiere deine Gesamtzeit.</li>
      <li><strong>Stil-Vergleich:</strong> Schwimme 50m in jedem Stil und vergleiche die Zeiten. Wo bist du am schwächsten?</li>
      <li><strong>Übergangs-Übung:</strong> Schwimme 4 x 50m (25m Delfin + 25m Rücken, dann 25m Rücken + 25m Brust, etc.).</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Individual Medley</h2>

  <p className="text-lg leading-relaxed">
    The Individual Medley (IM) is the ultimate swimming discipline. You swim all four styles in a 
    fixed order: butterfly, backstroke, breaststroke, freestyle. It requires mastery of all styles 
    and the ability to transition seamlessly between them.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">The Order</h3>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Butterfly:</strong> The most demanding style comes first, when you're still fresh.</li>
      <li><strong>Backstroke:</strong> More restful than butterfly, but technically demanding.</li>
      <li><strong>Breaststroke:</strong> The slowest style - races are often decided here.</li>
      <li><strong>Freestyle:</strong> The fastest style comes last - give it everything!</li>
    </ol>
    <p className="text-blue-700 dark:text-blue-300 mt-3">
      <strong>Note:</strong> In competition there's 200m IM (50m per style) and 400m IM (100m per style).
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Transitions</h3>

  <p className="leading-relaxed">
    Transitions between styles are crucial. Each style change requires a specific turn technique:
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Butterfly → Backstroke</h4>
      <p className="text-amber-700 dark:text-amber-300 text-sm">
        Open turn (both hands on wall), then roll onto back and push off. 
        Underwater dolphin kicks on back.
      </p>
    </div>
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Backstroke → Breaststroke</h4>
      <p className="text-amber-700 dark:text-amber-300 text-sm">
        Backstroke turn (rolling to front allowed), open turn, then breaststroke 
        pullout and begin breaststroke.
      </p>
    </div>
    <div className="bg-amber-50 dark:bg-amber-900/40 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800">
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Breaststroke → Freestyle</h4>
      <p className="text-amber-700 dark:text-amber-300 text-sm">
        Open turn (both hands on wall), then push off on front. 
        Underwater dolphin kicks, then begin freestyle.
      </p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Strategy & Pacing</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Pace Distribution</h3>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Butterfly:</strong> Start controlled - not too fast, as you have 3 styles ahead.</li>
      <li><strong>Backstroke:</strong> Steady pace. Use rotation for efficiency.</li>
      <li><strong>Breaststroke:</strong> This is where the race is often decided. Long glide phases for efficiency.</li>
      <li><strong>Freestyle:</strong> Give everything! Sprint to the finish.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Training for IM</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">IM Training Sets</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>4 x 100m IM:</strong> Each 100m as 25m fly, 25m back, 25m breast, 25m free. 20s rest.</li>
      <li><strong>Train weakest style:</strong> Identify your weakest style and dedicate extra training time.</li>
      <li><strong>Transition drills:</strong> Practice only the transitions between styles at the wall.</li>
      <li><strong>Reverse IM:</strong> Free, breast, back, fly - trains differently and is a good change.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>First IM:</strong> Swim 200m IM (50m per style) and record your total time.</li>
      <li><strong>Style comparison:</strong> Swim 50m in each style and compare times. Where are you weakest?</li>
      <li><strong>Transition drill:</strong> Swim 4 x 50m (25m fly + 25m back, then 25m back + 25m breast, etc.).</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Lagenschwimmen üben",
      description: "Trainiere alle vier Stile und ihre Übergänge.",
      checklist: [
        { text: "Schwimme 200m IM (50m pro Stil) und notiere die Gesamtzeit", checked: false },
        { text: "Schwimme 50m in jedem Stil und vergleiche die Zeiten", checked: false },
        { text: "Übe die Übergänge zwischen den Stilen (4 x 50m Übergangs-Drill)", checked: false },
        { text: "Identifiziere deinen schwächsten Stil und übe ihn gezielt", checked: false }
      ]
    },
    en: {
      title: "Practice Individual Medley",
      description: "Train all four styles and their transitions.",
      checklist: [
        { text: "Swim 200m IM (50m per style) and record total time", checked: false },
        { text: "Swim 50m in each style and compare times", checked: false },
        { text: "Practice transitions between styles (4 x 50m transition drill)", checked: false },
        { text: "Identify your weakest style and practice it specifically", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "In welcher Reihenfolge werden die Stile beim Individual Medley geschwommen?",
        answer: "Delfin (Butterfly), Rücken (Backstroke), Brust (Breaststroke), Kraul (Freestyle) - in dieser festen Reihenfolge."
      },
      {
        question: "Welche Wendetechnik wird beim Übergang von Delfin zu Rücken verwendet?",
        answer: "Eine offene Wende (Touch Turn) mit beidhändigem Wandanschlag, dann Drehung auf den Rücken und Abstoß."
      },
      {
        question: "Warum kommt Delfin als erster Stil im IM?",
        answer: "Delfin ist der anspruchsvollste und kraftintensivste Stil und wird daher geschwommen, wenn der Schwimmer noch am frischesten ist."
      }
    ],
    en: [
      {
        question: "In what order are styles swum in the Individual Medley?",
        answer: "Butterfly, Backstroke, Breaststroke, Freestyle - in this fixed order."
      },
      {
        question: "What turn technique is used for the butterfly to backstroke transition?",
        answer: "An open turn (touch turn) with two-hand wall touch, then rotation onto back and push-off."
      },
      {
        question: "Why does butterfly come first in the IM?",
        answer: "Butterfly is the most demanding and power-intensive style, so it's swum when the swimmer is still freshest."
      }
    ]
  }
};
