export const balancePoses = {
  title: {
    de: "Balance-Posen",
    en: "Balance Poses"
  },
  description: {
    de: "Lerne Vrksasana, Krieger III und Garudasana - Posen die Gleichgewicht, Fokus und Kernstärke aufbauen.",
    en: "Learn Vrksasana, Warrior III, and Garudasana - poses that build balance, focus, and core strength."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Balance-Posen</h2>
  
  <p className="text-lg leading-relaxed">
    Balance-Posen sind mehr als nur physisches Gleichgewicht - sie trainieren Konzentration, 
    Propriozeption (Körpergefühl) und mentale Stärke. Wenn du auf einem Bein stehst, gibt es 
    keinen Platz für wandernde Gedanken - du musst präsent sein.
  </p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Vrksasana - Baum-Pose</h3>
    <p className="text-purple-700 dark:text-purple-300 mb-3">
      Die bekannteste Balance-Pose. Wie ein Baum: verwurzelt in der Erde, wachsend zum Himmel.
    </p>
    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li>Stehe in Tadasana, verlagere das Gewicht auf den linken Fuß</li>
      <li>Hebe den rechten Fuß und platziere die Sohle an der Innenseite des linken Beins</li>
      <li>Fuß am Oberschenkel, Wade oder Knöchel - NIEMALS am Knie!</li>
      <li>Drücke Fuß und Bein gegeneinander für Stabilität</li>
      <li>Hände: vor dem Herzen (Namaste), auf den Hüften oder über dem Kopf</li>
      <li>Finde einen Fixpunkt (Drishti) und fixiere ihn mit dem Blick</li>
      <li>Halte 5-10 Atemzüge, dann wechsle die Seite</li>
    </ol>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-4">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Virabhadrasana III - Krieger III</h3>
    <p className="text-purple-700 dark:text-purple-300 mb-3">
      Eine der herausforderndsten Balance-Posen. Der gesamte Körper bildet eine gerade Linie.
    </p>
    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li>Stehe in Krieger I mit dem rechten Fuß vorne</li>
      <li>Verlagere das Gewicht auf den rechten Fuß</li>
      <li>Hebe das linke Bein nach hinten, parallel zum Boden</li>
      <li>Neige den Oberkörper gleichzeitig nach vorne</li>
      <li>Arme nach vorne strecken oder an der Seite</li>
      <li>Körper bildet ein "T" - von Fingerspitzen bis Fußspitze eine Linie</li>
      <li>Kern fest aktiviert, Standbein leicht gebeugt</li>
    </ol>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-4">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Garudasana - Adler-Pose</h3>
    <p className="text-purple-700 dark:text-purple-300 mb-3">
      Eine einzigartige Pose, die Balance, Flexibilität und Konzentration gleichzeitig fordert.
    </p>
    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li>Stehe in Tadasana, beuge leicht die Knie</li>
      <li>Hebe das rechte Bein und wickle es um das linke (Oberschenkel über Oberschenkel)</li>
      <li>Wenn möglich: rechter Fuß hakt sich hinter die linke Wade</li>
      <li>Arme: Strecke beide nach vorne, lege den rechten Arm unter den linken</li>
      <li>Verschränke die Unterarme, bringe die Handflächen zusammen</li>
      <li>Ellbogen auf Schulterhöhe, Finger zeigen nach oben</li>
      <li>Sinke tiefer in die Knie, halte 5 Atemzüge</li>
    </ol>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Tipps für bessere Balance</h3>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Drishti (Fokuspunkt):</strong> Fixiere einen unbeweglichen Punkt mit den Augen</li>
      <li><strong>Füße aktivieren:</strong> Spreize die Zehen, drücke alle vier Ecken des Fußes in den Boden</li>
      <li><strong>Kern aktivieren:</strong> Ein aktiver Kern ist das Geheimnis jeder Balance-Pose</li>
      <li><strong>Wackeln ist OK:</strong> Balance ist kein statischer Zustand - es ist ständiges Anpassen</li>
      <li><strong>Wand nutzen:</strong> Übe neben einer Wand als Sicherheitsnetz</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Praktische Übung</h3>
    <p className="text-green-700 dark:text-green-300 mb-3">Halte jede Balance-Pose 30 Sekunden pro Seite, wiederhole 3x:</p>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Vrksasana rechts → Vrksasana links</li>
      <li>Krieger III rechts → Krieger III links</li>
      <li>Garudasana rechts → Garudasana links</li>
      <li>Tadasana zum Abschluss - spüre die Stabilität auf beiden Füßen</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Balance Poses</h2>
  
  <p className="text-lg leading-relaxed">
    Balance poses are more than just physical equilibrium - they train concentration, 
    proprioception (body awareness), and mental strength. When standing on one leg, there's 
    no room for wandering thoughts - you must be present.
  </p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Vrksasana - Tree Pose</h3>
    <p className="text-purple-700 dark:text-purple-300 mb-3">
      The most well-known balance pose. Like a tree: rooted in the earth, growing toward the sky.
    </p>
    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li>Stand in Tadasana, shift weight to the left foot</li>
      <li>Lift right foot and place sole on the inside of the left leg</li>
      <li>Foot on thigh, calf, or ankle - NEVER on the knee!</li>
      <li>Press foot and leg against each other for stability</li>
      <li>Hands: at heart (Namaste), on hips, or overhead</li>
      <li>Find a focal point (Drishti) and fix your gaze on it</li>
      <li>Hold 5-10 breaths, then switch sides</li>
    </ol>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-4">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Virabhadrasana III - Warrior III</h3>
    <p className="text-purple-700 dark:text-purple-300 mb-3">
      One of the most challenging balance poses. The entire body forms a straight line.
    </p>
    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li>Stand in Warrior I with right foot forward</li>
      <li>Shift weight onto the right foot</li>
      <li>Lift left leg back, parallel to the floor</li>
      <li>Simultaneously tilt torso forward</li>
      <li>Extend arms forward or to the sides</li>
      <li>Body forms a "T" - one line from fingertips to toes</li>
      <li>Core firmly engaged, standing leg slightly bent</li>
    </ol>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-4">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Garudasana - Eagle Pose</h3>
    <p className="text-purple-700 dark:text-purple-300 mb-3">
      A unique pose that challenges balance, flexibility, and concentration simultaneously.
    </p>
    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li>Stand in Tadasana, slightly bend knees</li>
      <li>Lift right leg and wrap it around the left (thigh over thigh)</li>
      <li>If possible: right foot hooks behind left calf</li>
      <li>Arms: extend both forward, place right arm under left</li>
      <li>Wrap forearms, bring palms together</li>
      <li>Elbows at shoulder height, fingers point up</li>
      <li>Sink deeper into the knees, hold 5 breaths</li>
    </ol>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Tips for Better Balance</h3>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Drishti (Focal Point):</strong> Fix your gaze on a stationary point</li>
      <li><strong>Activate feet:</strong> Spread toes, press all four corners of the foot into the ground</li>
      <li><strong>Engage core:</strong> An active core is the secret of every balance pose</li>
      <li><strong>Wobbling is OK:</strong> Balance is not static - it's constant adjustment</li>
      <li><strong>Use the wall:</strong> Practice next to a wall as a safety net</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Practice Exercise</h3>
    <p className="text-green-700 dark:text-green-300 mb-3">Hold each balance pose 30 seconds per side, repeat 3x:</p>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Vrksasana right → Vrksasana left</li>
      <li>Warrior III right → Warrior III left</li>
      <li>Garudasana right → Garudasana left</li>
      <li>Tadasana to finish - feel the stability on both feet</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Balance-Posen trainieren",
      description: "Verbessere dein Gleichgewicht, deine Konzentration und deine Kernstärke.",
      checklist: [
        { text: "Halte Vrksasana (Baum) 30 Sekunden pro Seite ohne Wand", checked: false },
        { text: "Übe Krieger III mit Armen nach vorne für 5 Atemzüge pro Seite", checked: false },
        { text: "Probiere Garudasana (Adler) mit verschränkten Armen und Beinen", checked: false },
        { text: "Übe alle drei Balance-Posen in einer Sequenz, 3x wiederholt", checked: false }
      ]
    },
    en: {
      title: "Train Balance Poses",
      description: "Improve your balance, concentration, and core strength.",
      checklist: [
        { text: "Hold Vrksasana (Tree) 30 seconds per side without wall", checked: false },
        { text: "Practice Warrior III with arms forward for 5 breaths per side", checked: false },
        { text: "Try Garudasana (Eagle) with wrapped arms and legs", checked: false },
        { text: "Practice all three balance poses in a sequence, repeated 3x", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Wo darf man den Fuß in Vrksasana NICHT platzieren und warum?",
        answer: "Niemals am Knie! Seitlicher Druck auf das Kniegelenk kann die Bänder beschädigen. Fuß an Oberschenkel, Wade oder Knöchel."
      },
      {
        question: "Was ist ein 'Drishti' und warum ist er wichtig für Balance?",
        answer: "Ein Drishti ist ein fester Fokuspunkt für die Augen. Er hilft dem Gehirn, räumliche Orientierung zu halten und verbessert das Gleichgewicht deutlich."
      },
      {
        question: "Welche Körperform bildet man in Krieger III?",
        answer: "Ein 'T' - der Körper bildet eine gerade Linie von den Fingerspitzen bis zur Fußspitze des gehobenen Beins, parallel zum Boden."
      }
    ],
    en: [
      {
        question: "Where should you NEVER place your foot in Vrksasana and why?",
        answer: "Never on the knee! Lateral pressure on the knee joint can damage ligaments. Foot on thigh, calf, or ankle."
      },
      {
        question: "What is a 'Drishti' and why is it important for balance?",
        answer: "A Drishti is a fixed focal point for the eyes. It helps the brain maintain spatial orientation and significantly improves balance."
      },
      {
        question: "What body shape do you form in Warrior III?",
        answer: "A 'T' shape - the body forms a straight line from fingertips to the toes of the lifted leg, parallel to the floor."
      }
    ]
  }
};
