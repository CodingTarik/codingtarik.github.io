export const naturalBreathing = {
  title: {
    de: "Natürliche Bauchatmung (Diaphragmatische Atmung)",
    en: "Natural Belly Breathing (Diaphragmatic Breathing)"
  },
  description: {
    de: "Lerne die Grundlage aller Yoga-Atemtechniken: die tiefe, natürliche Bauchatmung.",
    en: "Learn the foundation of all yoga breathing techniques: deep, natural belly breathing."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Natürliche Bauchatmung</h2>
  
  <p className="text-lg leading-relaxed">
    Die Atmung ist das Fundament jeder Yoga-Praxis. Bevor wir Posen lernen, müssen wir lernen, 
    richtig zu atmen. Die meisten Menschen atmen flach in die Brust - im Yoga lernen wir, tief 
    in den Bauch zu atmen, so wie Babys es instinktiv tun.
  </p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Warum ist die Atmung so wichtig?</h3>
    <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li><strong>Sauerstoffversorgung:</strong> Tiefe Atmung bringt mehr Sauerstoff in den Körper</li>
      <li><strong>Entspannung:</strong> Bauchatmung aktiviert das parasympathische Nervensystem (Ruhe & Verdauung)</li>
      <li><strong>Fokus:</strong> Bewusste Atmung beruhigt den Geist und verbessert die Konzentration</li>
      <li><strong>Verbindung:</strong> Der Atem verbindet Körper und Geist - er ist die Brücke zwischen beiden</li>
      <li><strong>Stressabbau:</strong> Tiefe Atemzüge senken den Cortisolspiegel und den Blutdruck</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Das Zwerchfell verstehen</h3>
  
  <p className="leading-relaxed">
    Das Zwerchfell (Diaphragma) ist ein großer, kuppelförmiger Muskel unter deinen Lungen. 
    Wenn du einatmest, zieht es sich zusammen und bewegt sich nach unten - dadurch entsteht 
    ein Unterdruck, der Luft in die Lungen saugt. Dein Bauch wölbt sich dabei nach außen. 
    Beim Ausatmen entspannt sich das Zwerchfell und bewegt sich nach oben, die Luft wird 
    herausgedrückt und dein Bauch flacht ab.
  </p>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Brustatmung vs. Bauchatmung</h3>
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-amber-100 dark:bg-amber-800/40">
          <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Brustatmung (flach)</th>
          <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Bauchatmung (tief)</th>
        </tr>
      </thead>
      <tbody className="text-amber-700 dark:text-amber-300">
        <tr>
          <td className="border border-amber-300 dark:border-amber-700 p-2">Schultern heben sich</td>
          <td className="border border-amber-300 dark:border-amber-700 p-2">Bauch hebt sich</td>
        </tr>
        <tr>
          <td className="border border-amber-300 dark:border-amber-700 p-2">Flach und schnell</td>
          <td className="border border-amber-300 dark:border-amber-700 p-2">Tief und langsam</td>
        </tr>
        <tr>
          <td className="border border-amber-300 dark:border-amber-700 p-2">Aktiviert Stressreaktion</td>
          <td className="border border-amber-300 dark:border-amber-700 p-2">Aktiviert Entspannung</td>
        </tr>
        <tr>
          <td className="border border-amber-300 dark:border-amber-700 p-2">Weniger Sauerstoff</td>
          <td className="border border-amber-300 dark:border-amber-700 p-2">Optimale Sauerstoffaufnahme</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">So übst du die Bauchatmung</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Schritt-für-Schritt Anleitung</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Position:</strong> Lege dich auf den Rücken (oder setze dich aufrecht hin)</li>
      <li><strong>Hände platzieren:</strong> Lege eine Hand auf den Bauch und eine auf die Brust</li>
      <li><strong>Einatmen:</strong> Atme langsam durch die Nase ein. Spüre, wie sich dein Bauch hebt - die Hand auf dem Bauch bewegt sich nach oben</li>
      <li><strong>Ausatmen:</strong> Atme langsam durch die Nase aus. Spüre, wie der Bauch sich senkt</li>
      <li><strong>Brust ruhig:</strong> Die Hand auf der Brust sollte sich kaum bewegen</li>
      <li><strong>Rhythmus:</strong> Atme 4 Sekunden ein, halte 2 Sekunden, atme 6 Sekunden aus</li>
      <li><strong>Wiederholung:</strong> Übe 10 Atemzüge, dann steigere auf 5 Minuten</li>
    </ol>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Tipp: Alltags-Integration</h3>
    <p className="text-blue-700 dark:text-blue-300">
      Übe die Bauchatmung nicht nur auf der Matte! Versuche sie bei Stress, vor dem Einschlafen 
      oder in der Mittagspause. Schon 5 tiefe Atemzüge können deinen Zustand komplett verändern. 
      Setze dir Erinnerungen auf dem Handy: "Atme tief" - und mach 3 bewusste Atemzüge.
    </p>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Natural Belly Breathing</h2>
  
  <p className="text-lg leading-relaxed">
    Breathing is the foundation of every yoga practice. Before we learn poses, we need to learn 
    how to breathe properly. Most people breathe shallowly into their chest - in yoga, we learn 
    to breathe deeply into the belly, just as babies instinctively do.
  </p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Why is Breathing So Important?</h3>
    <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li><strong>Oxygen supply:</strong> Deep breathing brings more oxygen into the body</li>
      <li><strong>Relaxation:</strong> Belly breathing activates the parasympathetic nervous system (rest & digest)</li>
      <li><strong>Focus:</strong> Conscious breathing calms the mind and improves concentration</li>
      <li><strong>Connection:</strong> Breath connects body and mind - it's the bridge between both</li>
      <li><strong>Stress relief:</strong> Deep breaths lower cortisol levels and blood pressure</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Understanding the Diaphragm</h3>
  
  <p className="leading-relaxed">
    The diaphragm is a large, dome-shaped muscle beneath your lungs. When you inhale, it 
    contracts and moves downward - creating negative pressure that draws air into the lungs. 
    Your belly expands outward. When you exhale, the diaphragm relaxes and moves upward, 
    pushing air out, and your belly flattens.
  </p>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Chest Breathing vs. Belly Breathing</h3>
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-amber-100 dark:bg-amber-800/40">
          <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Chest Breathing (shallow)</th>
          <th className="border border-amber-300 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Belly Breathing (deep)</th>
        </tr>
      </thead>
      <tbody className="text-amber-700 dark:text-amber-300">
        <tr>
          <td className="border border-amber-300 dark:border-amber-700 p-2">Shoulders rise</td>
          <td className="border border-amber-300 dark:border-amber-700 p-2">Belly rises</td>
        </tr>
        <tr>
          <td className="border border-amber-300 dark:border-amber-700 p-2">Shallow and fast</td>
          <td className="border border-amber-300 dark:border-amber-700 p-2">Deep and slow</td>
        </tr>
        <tr>
          <td className="border border-amber-300 dark:border-amber-700 p-2">Activates stress response</td>
          <td className="border border-amber-300 dark:border-amber-700 p-2">Activates relaxation</td>
        </tr>
        <tr>
          <td className="border border-amber-300 dark:border-amber-700 p-2">Less oxygen</td>
          <td className="border border-amber-300 dark:border-amber-700 p-2">Optimal oxygen intake</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">How to Practice Belly Breathing</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Step-by-Step Guide</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Position:</strong> Lie on your back (or sit upright)</li>
      <li><strong>Place hands:</strong> Put one hand on your belly and one on your chest</li>
      <li><strong>Inhale:</strong> Breathe in slowly through your nose. Feel your belly rise - the hand on your belly moves up</li>
      <li><strong>Exhale:</strong> Breathe out slowly through your nose. Feel your belly lower</li>
      <li><strong>Chest still:</strong> The hand on your chest should barely move</li>
      <li><strong>Rhythm:</strong> Breathe in for 4 seconds, hold for 2, exhale for 6 seconds</li>
      <li><strong>Repeat:</strong> Practice 10 breaths, then increase to 5 minutes</li>
    </ol>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Tip: Daily Integration</h3>
    <p className="text-blue-700 dark:text-blue-300">
      Practice belly breathing not just on the mat! Try it during stress, before falling asleep, 
      or during your lunch break. Even 5 deep breaths can completely change your state. 
      Set reminders on your phone: "Breathe deep" - and take 3 conscious breaths.
    </p>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Bauchatmung meistern",
      description: "Mache die tiefe Bauchatmung zu deiner täglichen Gewohnheit.",
      checklist: [
        { text: "Übe 5 Minuten Bauchatmung im Liegen mit Händen auf Bauch und Brust", checked: false },
        { text: "Übe die Bauchatmung im Sitzen (aufrechte Position)", checked: false },
        { text: "Integriere 3 bewusste Atemzüge in deinen Morgen-Routine", checked: false },
        { text: "Nutze die 4-2-6 Technik (4s ein, 2s halten, 6s aus) für 10 Atemzüge", checked: false }
      ]
    },
    en: {
      title: "Master Belly Breathing",
      description: "Make deep belly breathing your daily habit.",
      checklist: [
        { text: "Practice 5 minutes of belly breathing lying down with hands on belly and chest", checked: false },
        { text: "Practice belly breathing while seated (upright position)", checked: false },
        { text: "Integrate 3 conscious breaths into your morning routine", checked: false },
        { text: "Use the 4-2-6 technique (4s in, 2s hold, 6s out) for 10 breaths", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was ist der Hauptunterschied zwischen Brust- und Bauchatmung?",
        answer: "Bei der Brustatmung heben sich die Schultern (flach, schnell), bei der Bauchatmung hebt sich der Bauch (tief, langsam). Bauchatmung aktiviert die Entspannungsreaktion."
      },
      {
        question: "Welche Rolle spielt das Zwerchfell bei der Atmung?",
        answer: "Das Zwerchfell ist ein kuppelförmiger Muskel unter den Lungen. Beim Einatmen zieht es sich zusammen und bewegt sich nach unten, beim Ausatmen entspannt es sich nach oben."
      },
      {
        question: "Warum ist bewusste Atmung im Yoga so wichtig?",
        answer: "Sie verbindet Körper und Geist, verbessert die Sauerstoffversorgung, aktiviert das parasympathische Nervensystem (Entspannung) und verbessert Fokus und Konzentration."
      }
    ],
    en: [
      {
        question: "What is the main difference between chest and belly breathing?",
        answer: "In chest breathing, shoulders rise (shallow, fast); in belly breathing, the belly rises (deep, slow). Belly breathing activates the relaxation response."
      },
      {
        question: "What role does the diaphragm play in breathing?",
        answer: "The diaphragm is a dome-shaped muscle below the lungs. When inhaling, it contracts and moves down; when exhaling, it relaxes and moves up."
      },
      {
        question: "Why is conscious breathing so important in yoga?",
        answer: "It connects body and mind, improves oxygen supply, activates the parasympathetic nervous system (relaxation), and improves focus and concentration."
      }
    ]
  }
};
