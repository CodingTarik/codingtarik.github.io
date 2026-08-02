export const videoAnalysis = {
  title: {
    de: "Video-Analyse - Technik verbessern durch Sehen",
    en: "Video Analysis - Improve Technique by Seeing"
  },
  description: {
    de: "Was bei der Videoanalyse zu beachten ist, häufige Fehler, Tipps zum Selbstfilmen und systematische Auswertung.",
    en: "What to look for in video analysis, common errors, self-filming tips, and systematic evaluation."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Video-Analyse für Schwimmer</h2>

  <p className="text-lg leading-relaxed">
    Du spürst das Wasser, aber siehst dich nicht. Die meisten Schwimmer haben eine völlig 
    falsche Vorstellung von ihrer Technik. Video-Analyse öffnet die Augen: Du siehst endlich, 
    was du wirklich tust - und kannst es gezielt verbessern. In dieser Lektion lernst du, wie 
    du deine Schwimmtechnik per Video analysierst.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">Worauf achten bei der Analyse?</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Kraul/Freestyle - Checkliste</h4>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Kopfposition:</strong> Neutrale Haltung? Oder schaut der Kopf zu weit nach vorne/hinten?</li>
      <li><strong>Körperlage:</strong> Hüften und Beine an der Oberfläche oder sinken sie ab?</li>
      <li><strong>Armzug:</strong> Hoher Ellbogen in der Rückholphase? Catch mit frühem Hochwasser-Eintauchen?</li>
      <li><strong>Beinschlag:</strong> Kommt er aus der Hüfte? Oder nur aus dem Knie (Radfahrer-Kick)?</li>
      <li><strong>Rotation:</strong> Dreht sich der ganze Körper zur Seite (45°) oder nur die Schultern?</li>
      <li><strong>Atmung:</strong> Dreht der Kopf mit dem Körper oder isoliert? Ein Auge im Wasser?</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Häufige technische Fehler</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-amber-100 dark:bg-amber-800/60">
          <th className="border border-amber-200 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Fehler</th>
          <th className="border border-amber-200 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Folge</th>
          <th className="border border-amber-200 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Korrektur</th>
        </tr>
      </thead>
      <tbody className="text-amber-700 dark:text-amber-300">
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Cross-over (Hände über Mittellinie)</td><td className="border border-amber-200 dark:border-amber-700 p-2">Zickzack-Schwimmbahn, Ineffizienz</td><td className="border border-amber-200 dark:border-amber-700 p-2">Arme schulterbreit eintauchen, Zipper Drill</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Überkreuzen der Beine</td><td className="border border-amber-200 dark:border-amber-700 p-2">Widerstand, Energieverschwendung</td><td className="border border-amber-200 dark:border-amber-700 p-2">Kick aus Hüfte, Zehen nach innen</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Flacher Armzug (low elbow)</td><td className="border border-amber-200 dark:border-amber-700 p-2">Kein Catch, wenig Vortrieb</td><td className="border border-amber-200 dark:border-amber-700 p-2">Fingertip Drag, Catch-Up Drill</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Head-up (Kopf zu hoch)</td><td className="border border-amber-200 dark:border-amber-700 p-2">Sinkende Beine, hoher Widerstand</td><td className="border border-amber-200 dark:border-amber-700 p-2">Blick nach unten/vorne, nicht nach oben</td></tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Tipps zum Selbstfilmen</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <ul className="list-disc list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Kamera-Position:</strong> Unterwasser seitlich (beste Perspektive) oder über Wasser am Beckenrand. Idealerweise auf Augenhöhe des Schwimmers.</li>
      <li><strong>Abstand:</strong> 3-5 Meter seitlich. Genug Abstand, um den ganzen Körper zu erfassen.</li>
      <li><strong>Licht:</strong> Gute Beleuchtung, keine Gegenlicht-Situation. Unterwasser: klare Sicht.</li>
      <li><strong>Fokus:</strong> Ein Aspekt pro Aufnahme. Z.B. nur Armzug oder nur Beinschlag.</li>
      <li><strong>Geschwindigkeit:</strong> Langsame Bahn für Technik, schnelle Bahn für Race-Pace-Analyse. Beides filmen!</li>
      <li><strong>Tools:</strong> Smartphone reicht. Apps wie Coach's Eye oder Hudl Technique für Zeitlupen und Markierungen.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Systematische Auswertung</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <ol className="list-decimal list-inside space-y-3 text-blue-700 dark:text-blue-300">
      <li><strong>Erster Durchlauf:</strong> Gesamteindruck. Was fällt sofort auf?</li>
      <li><strong>Zweiter Durchlauf:</strong> Ein Körperteil pro Durchlauf. Kopf, dann Arme, dann Beine, dann Rotation.</li>
      <li><strong>Vergleich:</strong> Vergleiche mit Technik-Videos von Profis. Wo ist der Unterschied?</li>
      <li><strong>Priorisierung:</strong> Wähle maximal 1-2 Fehler zum Beheben. Nicht alles auf einmal!</li>
      <li><strong>Drills zuordnen:</strong> Für jeden Fehler: Welcher Drill hilft? (z.B. Cross-over → Zipper Drill)</li>
      <li><strong>Nach 2 Wochen:</strong> Erneut filmen. Fortschritt dokumentieren.</li>
    </ol>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Praktische Übungen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Erste Aufnahme:</strong> Lass dich filmen (seitlich, 50m Kraul). Analysiere mit der Checkliste.</li>
      <li><strong>Fehler-Liste:</strong> Notiere die 2 wichtigsten Fehler und die zugehörigen Korrektur-Drills.</li>
      <li><strong>Verlauf:</strong> Alle 2 Wochen neue Aufnahme. Vergleiche mit der ersten.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Video Analysis for Swimmers</h2>

  <p className="text-lg leading-relaxed">
    You feel the water, but you don't see yourself. Most swimmers have a completely wrong idea 
    of their technique. Video analysis opens your eyes: you finally see what you really do - 
    and can improve it systematically. In this lesson you'll learn how to analyze your swimming 
    technique via video.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">What to Look For in Analysis</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Freestyle - Checklist</h4>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Head position:</strong> Neutral? Or is the head looking too far forward/backward?</li>
      <li><strong>Body position:</strong> Are hips and legs at the surface or do they sink?</li>
      <li><strong>Arm pull:</strong> High elbow in recovery? Early vertical forearm catch?</li>
      <li><strong>Kick:</strong> Originating from hips? Or only from knees (bicycle kick)?</li>
      <li><strong>Rotation:</strong> Does the whole body rotate to the side (45°) or only shoulders?</li>
      <li><strong>Breathing:</strong> Does head turn with body or isolated? One eye in water?</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Common Technical Errors</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-amber-100 dark:bg-amber-800/60">
          <th className="border border-amber-200 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Error</th>
          <th className="border border-amber-200 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Consequence</th>
          <th className="border border-amber-200 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Correction</th>
        </tr>
      </thead>
      <tbody className="text-amber-700 dark:text-amber-300">
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Cross-over (hands over centerline)</td><td className="border border-amber-200 dark:border-amber-700 p-2">Zigzag lane, inefficiency</td><td className="border border-amber-200 dark:border-amber-700 p-2">Hands enter shoulder-width, Zipper Drill</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Scissor kick (legs crossing)</td><td className="border border-amber-200 dark:border-amber-700 p-2">Drag, energy waste</td><td className="border border-amber-200 dark:border-amber-700 p-2">Kick from hips, toes inward</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Flat arm pull (low elbow)</td><td className="border border-amber-200 dark:border-amber-700 p-2">No catch, little propulsion</td><td className="border border-amber-200 dark:border-amber-700 p-2">Fingertip Drag, Catch-Up Drill</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Head-up (head too high)</td><td className="border border-amber-200 dark:border-amber-700 p-2">Sinking legs, high drag</td><td className="border border-amber-200 dark:border-amber-700 p-2">Look down/forward, not up</td></tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Self-Filming Tips</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <ul className="list-disc list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Camera position:</strong> Underwater from the side (best perspective) or above water at pool edge. Ideally at swimmer's eye level.</li>
      <li><strong>Distance:</strong> 3-5 meters to the side. Enough to capture the full body.</li>
      <li><strong>Lighting:</strong> Good light, no backlight. Underwater: clear visibility.</li>
      <li><strong>Focus:</strong> One aspect per recording. E.g. arms only or kick only.</li>
      <li><strong>Pace:</strong> Slow lap for technique, fast lap for race-pace analysis. Film both!</li>
      <li><strong>Tools:</strong> Smartphone is enough. Apps like Coach's Eye or Hudl Technique for slow-motion and markings.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Systematic Evaluation</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <ol className="list-decimal list-inside space-y-3 text-blue-700 dark:text-blue-300">
      <li><strong>First pass:</strong> Overall impression. What stands out immediately?</li>
      <li><strong>Second pass:</strong> One body part per pass. Head, then arms, then legs, then rotation.</li>
      <li><strong>Compare:</strong> Compare with technique videos of pros. Where's the difference?</li>
      <li><strong>Prioritize:</strong> Choose max 1-2 errors to fix. Not everything at once!</li>
      <li><strong>Assign drills:</strong> For each error: Which drill helps? (e.g. cross-over → Zipper Drill)</li>
      <li><strong>After 2 weeks:</strong> Film again. Document progress.</li>
    </ol>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Practice Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>First recording:</strong> Get filmed (from the side, 50m freestyle). Analyze with the checklist.</li>
      <li><strong>Error list:</strong> Note the 2 most important errors and the corresponding correction drills.</li>
      <li><strong>Progress:</strong> New recording every 2 weeks. Compare with the first.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Video-Analyse durchführen",
      description: "Analysiere deine Schwimmtechnik mit Video.",
      checklist: [
        { text: "Lass dich beim Kraul-Schwimmen von der Seite filmen (50m)", checked: false },
        { text: "Analysiere die Aufnahme mit der Checkliste und notiere 2 Fehler", checked: false },
        { text: "Wähle für jeden Fehler einen Korrektur-Drill und übe ihn", checked: false },
        { text: "Nach 2 Wochen: Erneute Aufnahme und Fortschritts-Vergleich", checked: false }
      ]
    },
    en: {
      title: "Conduct Video Analysis",
      description: "Analyze your swimming technique with video.",
      checklist: [
        { text: "Get filmed swimming freestyle from the side (50m)", checked: false },
        { text: "Analyze the recording with the checklist and note 2 errors", checked: false },
        { text: "Choose a correction drill for each error and practice it", checked: false },
        { text: "After 2 weeks: New recording and progress comparison", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Warum ist Video-Analyse für Schwimmer so wertvoll?", answer: "Schwimmer können sich selbst nicht sehen. Die meisten haben eine falsche Vorstellung ihrer Technik. Video zeigt real, was passiert - und ermöglicht zielgerichtete Verbesserung." },
      { question: "Was ist ein Cross-over und warum ist er problematisch?", answer: "Cross-over bedeutet, dass die Hände beim Eintauchen die Mittellinie des Körpers überkreuzen. Folge: Zickzack-Schwimmbahn, Ineffizienz, unnötiger Widerstand." },
      { question: "Wie viele Fehler sollte man gleichzeitig korrigieren?", answer: "Maximal 1-2. Zu viele Korrekturen gleichzeitig überfordern und führen zu keiner nachhaltigen Verbesserung. Besser einen Fehler beheben, dann den nächsten angehen." }
    ],
    en: [
      { question: "Why is video analysis so valuable for swimmers?", answer: "Swimmers can't see themselves. Most have a wrong idea of their technique. Video shows what really happens - enabling targeted improvement." },
      { question: "What is a cross-over and why is it problematic?", answer: "Cross-over means hands cross the body's centerline when entering the water. Consequence: Zigzag lane, inefficiency, unnecessary drag." },
      { question: "How many errors should you fix at once?", answer: "Maximum 1-2. Too many corrections at once overwhelm and lead to no lasting improvement. Better to fix one error, then tackle the next." }
    ]
  }
};
