export const lyingPoses = {
  title: {
    de: "Liegende Posen - Savasana & Apanasana",
    en: "Lying Poses - Savasana & Apanasana"
  },
  description: {
    de: "Lerne die wichtigsten liegenden Posen für Entspannung und Regeneration.",
    en: "Learn the most important lying poses for relaxation and recovery."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Liegende Posen</h2>
  
  <p className="text-lg leading-relaxed">
    Liegende Posen sind der krönende Abschluss jeder Yoga-Praxis. Sie ermöglichen es dem 
    Körper, die Vorteile der aktiven Praxis zu integrieren, und dem Geist, zur Ruhe zu kommen. 
    Savasana mag die "einfachste" Pose aussehen, ist aber für viele die herausforderndste.
  </p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Savasana - Die Totenstellung</h3>
    <p className="text-purple-700 dark:text-purple-300 mb-3">
      Die wichtigste Pose im Yoga. Trotz ihres Namens geht es nicht um den Tod, sondern 
      um vollständiges Loslassen - körperlich, geistig und emotional. Savasana integriert 
      alles, was du in der Praxis getan hast.
    </p>
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Ausführung:</h4>
    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li>Lege dich flach auf den Rücken</li>
      <li>Beine leicht auseinander, Füße fallen natürlich zur Seite</li>
      <li>Arme neben dem Körper, leicht vom Körper weg, Handflächen nach oben</li>
      <li>Schließe die Augen</li>
      <li>Scanne deinen Körper von den Zehen zum Kopf und entspanne jeden Bereich bewusst</li>
      <li>Lass den Atem natürlich fließen - kontrolliere ihn nicht</li>
      <li>Bleibe mindestens 5 Minuten (idealerweise 10-15 Minuten)</li>
    </ol>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-4">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Warum ist Savasana so wichtig?</h3>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Integration:</strong> Der Körper braucht Zeit, die Vorteile der aktiven Praxis aufzunehmen</li>
      <li><strong>Nervensystem:</strong> Savasana aktiviert das parasympathische Nervensystem (Ruhe & Regeneration)</li>
      <li><strong>Stressabbau:</strong> Tiefe Entspannung senkt Cortisol und Blutdruck</li>
      <li><strong>Mentales Training:</strong> Stillliegen und nichts tun ist eine der schwierigsten Übungen für den modernen Geist</li>
    </ul>
    <p className="text-amber-700 dark:text-amber-300 mt-3 font-bold">
      Savasana zu überspringen ist, wie eine Mahlzeit zu kochen und sie dann nicht zu essen!
    </p>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-4">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Apanasana - Knie zur Brust</h3>
    <p className="text-purple-700 dark:text-purple-300 mb-3">
      Eine sanfte, beruhigende Pose, die den unteren Rücken entspannt und die Verdauung 
      unterstützt. "Apana" bezieht sich auf die abwärts fließende Energie im Körper.
    </p>
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Ausführung:</h4>
    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li>Lege dich auf den Rücken</li>
      <li>Ziehe beide Knie zur Brust</li>
      <li>Umfasse die Schienbeine oder die Kniekehlen mit den Händen</li>
      <li>Halte den unteren Rücken am Boden (oder lass ihn leicht abheben)</li>
      <li>Rocke sanft von Seite zu Seite für eine Rückenmassage</li>
      <li>Atme tief und spüre, wie der untere Rücken sich entspannt</li>
    </ol>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Tipps für ein tiefes Savasana</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Lege eine Decke über dich - der Körper kühlt in der Entspannung ab</li>
      <li>Lege ein Augenkissen oder gefaltetes Tuch über die Augen</li>
      <li>Ein Bolster oder eine gerollte Decke unter den Knien entlastet den unteren Rücken</li>
      <li>Wenn Gedanken kommen, lass sie wie Wolken vorüberziehen</li>
      <li>Komme langsam zurück: Finger und Zehen bewegen, Knie anziehen, auf die Seite rollen</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Praktische Übung: Entspannungsritual</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Lege dich in Apanasana und rocke 1 Minute sanft von Seite zu Seite</li>
      <li>Strecke die Beine aus in Savasana</li>
      <li>Scanne deinen Körper: Füße, Beine, Hüften, Bauch, Brust, Arme, Hände, Nacken, Gesicht</li>
      <li>Entspanne bewusst jeden Bereich</li>
      <li>Bleibe 5-10 Minuten liegen und lass alles los</li>
      <li>Komme langsam zurück: Finger bewegen, Knie anziehen, auf die Seite rollen, aufsetzen</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Lying Poses</h2>
  
  <p className="text-lg leading-relaxed">
    Lying poses are the crowning conclusion of every yoga practice. They allow the body to 
    integrate the benefits of active practice, and the mind to come to rest. Savasana may 
    look like the "easiest" pose, but for many it's the most challenging.
  </p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Savasana - Corpse Pose</h3>
    <p className="text-purple-700 dark:text-purple-300 mb-3">
      The most important pose in yoga. Despite its name, it's not about death but about 
      complete letting go - physically, mentally, and emotionally. Savasana integrates 
      everything you did in practice.
    </p>
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Execution:</h4>
    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li>Lie flat on your back</li>
      <li>Legs slightly apart, feet fall naturally to the sides</li>
      <li>Arms beside the body, slightly away, palms facing up</li>
      <li>Close your eyes</li>
      <li>Scan your body from toes to head and consciously relax each area</li>
      <li>Let the breath flow naturally - don't control it</li>
      <li>Stay for at least 5 minutes (ideally 10-15 minutes)</li>
    </ol>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-4">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Why is Savasana So Important?</h3>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Integration:</strong> The body needs time to absorb the benefits of active practice</li>
      <li><strong>Nervous system:</strong> Savasana activates the parasympathetic nervous system (rest & recovery)</li>
      <li><strong>Stress relief:</strong> Deep relaxation lowers cortisol and blood pressure</li>
      <li><strong>Mental training:</strong> Lying still and doing nothing is one of the hardest exercises for the modern mind</li>
    </ul>
    <p className="text-amber-700 dark:text-amber-300 mt-3 font-bold">
      Skipping Savasana is like cooking a meal and then not eating it!
    </p>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-4">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Apanasana - Knees to Chest</h3>
    <p className="text-purple-700 dark:text-purple-300 mb-3">
      A gentle, calming pose that relaxes the lower back and supports digestion. "Apana" 
      refers to the downward-flowing energy in the body.
    </p>
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Execution:</h4>
    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li>Lie on your back</li>
      <li>Draw both knees to your chest</li>
      <li>Hold the shins or behind the knees with your hands</li>
      <li>Keep the lower back on the floor (or let it lift slightly)</li>
      <li>Rock gently side to side for a back massage</li>
      <li>Breathe deeply and feel the lower back relax</li>
    </ol>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Tips for a Deep Savasana</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Place a blanket over yourself - the body cools down during relaxation</li>
      <li>Place an eye pillow or folded cloth over your eyes</li>
      <li>A bolster or rolled blanket under the knees relieves the lower back</li>
      <li>When thoughts come, let them pass like clouds</li>
      <li>Return slowly: wiggle fingers and toes, draw knees in, roll to one side</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Practice Exercise: Relaxation Ritual</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Lie in Apanasana and rock gently side to side for 1 minute</li>
      <li>Extend legs into Savasana</li>
      <li>Scan your body: feet, legs, hips, belly, chest, arms, hands, neck, face</li>
      <li>Consciously relax each area</li>
      <li>Stay lying for 5-10 minutes and let everything go</li>
      <li>Return slowly: wiggle fingers, draw knees in, roll to side, sit up</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Entspannung üben",
      description: "Mache Savasana und Apanasana zu einem festen Bestandteil deiner Praxis.",
      checklist: [
        { text: "Übe Apanasana mit sanftem Schaukeln für 1 Minute", checked: false },
        { text: "Praktiziere Savasana für mindestens 5 Minuten mit Körperscan", checked: false },
        { text: "Probiere Savasana mit einer Decke und einem Augenkissen", checked: false },
        { text: "Beende deine nächste Yoga-Einheit bewusst mit Savasana", checked: false }
      ]
    },
    en: {
      title: "Practice Relaxation",
      description: "Make Savasana and Apanasana a fixed part of your practice.",
      checklist: [
        { text: "Practice Apanasana with gentle rocking for 1 minute", checked: false },
        { text: "Practice Savasana for at least 5 minutes with body scan", checked: false },
        { text: "Try Savasana with a blanket and eye pillow", checked: false },
        { text: "Consciously end your next yoga session with Savasana", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum ist Savasana die wichtigste Pose im Yoga?",
        answer: "Savasana integriert die Vorteile der aktiven Praxis, aktiviert das parasympathische Nervensystem (Ruhe & Regeneration) und trainiert den Geist im Loslassen."
      },
      {
        question: "Was ist Apanasana und wofür ist es gut?",
        answer: "Apanasana (Knie zur Brust) ist eine sanfte Pose, die den unteren Rücken entspannt, die Verdauung unterstützt und als Übergang zu Savasana dient."
      },
      {
        question: "Wie kommt man am besten aus Savasana zurück?",
        answer: "Langsam: Erst Finger und Zehen bewegen, dann Knie anziehen, auf eine Seite rollen und langsam aufsetzen. Nie abrupt aufspringen."
      }
    ],
    en: [
      {
        question: "Why is Savasana the most important pose in yoga?",
        answer: "Savasana integrates the benefits of active practice, activates the parasympathetic nervous system (rest & recovery), and trains the mind in letting go."
      },
      {
        question: "What is Apanasana and what is it good for?",
        answer: "Apanasana (Knees to Chest) is a gentle pose that relaxes the lower back, supports digestion, and serves as a transition to Savasana."
      },
      {
        question: "What's the best way to come out of Savasana?",
        answer: "Slowly: First wiggle fingers and toes, then draw knees in, roll to one side, and slowly sit up. Never jump up abruptly."
      }
    ]
  }
};
