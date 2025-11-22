export const poolRulesEtiquette = {
  title: {
    de: "Beckenregeln & Etikette",
    en: "Pool Rules & Etiquette"
  },
  description: {
    de: "Lerne die wichtigsten Regeln und die Etikette im Schwimmbad, um sicher und respektvoll mit anderen zu schwimmen.",
    en: "Learn the most important rules and etiquette in the pool to swim safely and respectfully with others."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Beckenregeln & Etikette</h2>
  
  <p className="text-lg leading-relaxed">
    Ein Schwimmbad ist ein gemeinsamer Raum, den viele Menschen nutzen. Um sicher und harmonisch 
    zusammen zu schwimmen, gibt es Regeln und eine Etikette, die jeder befolgen sollte. Diese 
    Regeln sind nicht nur Höflichkeit - sie sind auch wichtig für deine Sicherheit und die 
    Sicherheit anderer.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Bahnenordnung verstehen</h3>
    
    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mt-4 mb-2">Rechts schwimmen, links überholen</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      In den meisten Schwimmbädern gilt die Regel: <strong>rechts schwimmen, links überholen</strong>. 
      Das funktioniert wie im Straßenverkehr - du hältst dich rechts in deiner Bahn, und wenn du 
      jemanden überholen möchtest, tust du dies auf der linken Seite.
    </p>
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Warum ist das wichtig? Es verhindert Kollisionen und sorgt für einen reibungslosen Ablauf. 
      Wenn jeder weiß, wo er schwimmen soll, gibt es weniger Unfälle und Konflikte.
    </p>

    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mt-4 mb-2">Geschwindigkeits-Bahnen</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Viele Schwimmbäder haben Bahnen mit unterschiedlichen Geschwindigkeiten:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Langsame Bahn:</strong> Für Anfänger, langsames Schwimmen, Wassergymnastik</li>
      <li><strong>Mittlere Bahn:</strong> Für fortgeschrittene Schwimmer mit moderatem Tempo</li>
      <li><strong>Schnelle Bahn:</strong> Für erfahrene Schwimmer und Wettkampftraining</li>
    </ul>
    <p className="text-blue-700 dark:text-blue-300 mt-3">
      Wähle die Bahn, die zu deinem Tempo passt. Wenn du unsicher bist, beginne mit der langsamsten 
      Bahn und arbeite dich hoch.
    </p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Wann darf man in eine Bahn einsteigen?</h3>
    
    <p className="text-green-700 dark:text-green-300 mb-4">
      Bevor du in eine Bahn einsteigst, solltest du einige Dinge beachten:
    </p>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">1. Prüfe, ob die Bahn frei ist</h4>
    <p className="text-green-700 dark:text-green-300 mb-3">
      Schaue, ob die Bahn leer ist oder ob andere Schwimmer dort trainieren. Wenn die Bahn leer 
      ist, kannst du direkt einsteigen.
    </p>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">2. Frage höflich, wenn die Bahn belegt ist</h4>
    <p className="text-green-700 dark:text-green-300 mb-3">
      Wenn bereits Schwimmer in der Bahn sind, frage höflich: "Darf ich mit schwimmen?" oder 
      "Ist hier noch Platz?". Die meisten Schwimmer sind freundlich und sagen gerne ja.
    </p>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">3. Kreis schwimmen bei mehreren Schwimmern</h4>
    <p className="text-green-700 dark:text-green-300 mb-3">
      Wenn mehrere Schwimmer in einer Bahn sind, schwimmt ihr alle in die gleiche Richtung 
      (Kreis schwimmen). Das verhindert Kollisionen und ist effizienter.
    </p>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">4. Warte am Beckenrand</h4>
    <p className="text-green-700 dark:text-green-300 mb-3">
      Wenn andere Schwimmer gerade an dir vorbeischwimmen, warte am Beckenrand, bis sie vorbei 
      sind, bevor du einsteigst. Springe nicht einfach mitten in die Bahn!
    </p>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Pausen am Beckenrand</h3>
    
    <p className="text-amber-700 dark:text-amber-300 mb-4">
      Wenn du eine Pause brauchst, gibt es einige wichtige Regeln:
    </p>

    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Halte dich am Beckenrand fest:</strong> Nicht in der Mitte der Bahn pausieren, 
      sondern immer am Rand</li>
      <li><strong>Lass Platz für andere:</strong> Andere Schwimmer müssen auch wenden oder pausieren 
      können</li>
      <li><strong>Verlasse die Bahn bei längeren Pausen:</strong> Wenn du länger als 30 Sekunden 
      pausierst, verlasse die Bahn komplett und setze dich auf die Bank</li>
      <li><strong>Achte auf andere:</strong> Schaue, ob jemand wenden möchte, bevor du wieder 
      einsteigst</li>
    </ul>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-6">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Rücksicht auf andere Schwimmer</h3>
    
    <h4 className="font-semibold text-red-800 dark:text-red-200 mt-4 mb-2">⚠️ Kein Springen in volle Bahnen</h4>
    <p className="text-red-700 dark:text-red-300 mb-4">
      Das ist eine der wichtigsten Sicherheitsregeln! Springe niemals in eine Bahn, in der 
      bereits Schwimmer trainieren. Das ist extrem gefährlich und kann zu schweren Verletzungen 
      führen. Wenn du springen möchtest, nutze die dafür vorgesehenen Bereiche oder warte, 
      bis die Bahn leer ist.
    </p>

    <h4 className="font-semibold text-red-800 dark:text-red-200 mt-4 mb-2">Keine lauten Gespräche</h4>
    <p className="text-red-700 dark:text-red-300 mb-3">
      Während andere trainieren, solltest du keine lauten Gespräche führen oder andere ablenken. 
      Viele Schwimmer konzentrieren sich auf ihre Technik und werden durch Lärm gestört.
    </p>

    <h4 className="font-semibold text-red-800 dark:text-red-200 mt-4 mb-2">Signalisiere Probleme</h4>
    <p className="text-red-700 dark:text-red-300 mb-3">
      Wenn du müde bist, Probleme hast oder Hilfe brauchst, signalisiere es deutlich. Halte 
      dich am Rand fest und winke, wenn nötig. Zögere nicht, um Hilfe zu bitten!
    </p>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-8">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Zusammenfassung: Die goldenen Regeln</h3>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Rechts schwimmen, links überholen</li>
      <li>Wähle die passende Geschwindigkeits-Bahn</li>
      <li>Frage höflich, bevor du in eine belegte Bahn einsteigst</li>
      <li>Pausiere nur am Beckenrand, nicht in der Mitte</li>
      <li>Kein Springen in volle Bahnen - niemals!</li>
      <li>Sei respektvoll und rücksichtsvoll</li>
      <li>Bei Problemen: Signalisiere es und hole Hilfe</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Pool Rules & Etiquette</h2>
  
  <p className="text-lg leading-relaxed">
    A swimming pool is a shared space used by many people. To swim together safely and harmoniously, 
    there are rules and etiquette that everyone should follow. These rules are not just politeness - 
    they're also important for your safety and the safety of others.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Understanding Lane Order</h3>
    
    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mt-4 mb-2">Swim on the right, pass on the left</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      In most pools, the rule is: <strong>swim on the right, pass on the left</strong>. 
      This works like traffic - you stay on the right in your lane, and if you want to overtake 
      someone, you do so on the left side.
    </p>
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Why is this important? It prevents collisions and ensures smooth operation. When everyone 
      knows where to swim, there are fewer accidents and conflicts.
    </p>

    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mt-4 mb-2">Speed Lanes</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Many pools have lanes with different speeds:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Slow lane:</strong> For beginners, slow swimming, water aerobics</li>
      <li><strong>Medium lane:</strong> For advanced swimmers with moderate pace</li>
      <li><strong>Fast lane:</strong> For experienced swimmers and competition training</li>
    </ul>
    <p className="text-blue-700 dark:text-blue-300 mt-3">
      Choose the lane that matches your pace. If you're unsure, start with the slowest lane 
      and work your way up.
    </p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">When can you enter a lane?</h3>
    
    <p className="text-green-700 dark:text-green-300 mb-4">
      Before entering a lane, you should consider a few things:
    </p>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">1. Check if the lane is free</h4>
    <p className="text-green-700 dark:text-green-300 mb-3">
      See if the lane is empty or if other swimmers are training there. If the lane is empty, 
      you can enter directly.
    </p>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">2. Ask politely if the lane is occupied</h4>
    <p className="text-green-700 dark:text-green-300 mb-3">
      If there are already swimmers in the lane, ask politely: "May I swim here?" or "Is there 
      room?". Most swimmers are friendly and happy to say yes.
    </p>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">3. Circle swim with multiple swimmers</h4>
    <p className="text-green-700 dark:text-green-300 mb-3">
      If multiple swimmers are in a lane, you all swim in the same direction (circle swim). 
      This prevents collisions and is more efficient.
    </p>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">4. Wait at the pool edge</h4>
    <p className="text-green-700 dark:text-green-300 mb-3">
      If other swimmers are passing by, wait at the pool edge until they've passed before 
      entering. Don't just jump into the middle of the lane!
    </p>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Resting at the Pool Edge</h3>
    
    <p className="text-amber-700 dark:text-amber-300 mb-4">
      When you need a break, there are some important rules:
    </p>

    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Hold on to the pool edge:</strong> Don't pause in the middle of the lane, 
      always at the edge</li>
      <li><strong>Leave space for others:</strong> Other swimmers also need to turn or rest</li>
      <li><strong>Leave the lane for longer breaks:</strong> If you're resting longer than 30 
      seconds, leave the lane completely and sit on the bench</li>
      <li><strong>Watch for others:</strong> See if someone wants to turn before you re-enter</li>
    </ul>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-6">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Consideration for Other Swimmers</h3>
    
    <h4 className="font-semibold text-red-800 dark:text-red-200 mt-4 mb-2">⚠️ No jumping into occupied lanes</h4>
    <p className="text-red-700 dark:text-red-300 mb-4">
      This is one of the most important safety rules! Never jump into a lane where swimmers 
      are already training. This is extremely dangerous and can lead to serious injuries. 
      If you want to jump, use the designated areas or wait until the lane is empty.
    </p>

    <h4 className="font-semibold text-red-800 dark:text-red-200 mt-4 mb-2">No loud conversations</h4>
    <p className="text-red-700 dark:text-red-300 mb-3">
      While others are training, you shouldn't have loud conversations or distract others. 
      Many swimmers focus on their technique and are disturbed by noise.
    </p>

    <h4 className="font-semibold text-red-800 dark:text-red-200 mt-4 mb-2">Signal problems</h4>
    <p className="text-red-700 dark:text-red-300 mb-3">
      If you're tired, having problems, or need help, signal it clearly. Hold on to the edge 
      and wave if necessary. Don't hesitate to ask for help!
    </p>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-8">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Summary: The Golden Rules</h3>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Swim on the right, pass on the left</li>
      <li>Choose the appropriate speed lane</li>
      <li>Ask politely before entering an occupied lane</li>
      <li>Rest only at the pool edge, not in the middle</li>
      <li>No jumping into occupied lanes - never!</li>
      <li>Be respectful and considerate</li>
      <li>If you have problems: Signal it and get help</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Beckenregeln praktisch anwenden",
      description: "Beim nächsten Schwimmbadbesuch wende die Regeln und die Etikette an.",
      checklist: [
        { text: "Wähle die passende Geschwindigkeits-Bahn für dein Tempo", checked: false },
        { text: "Frage höflich, bevor du in eine belegte Bahn einsteigst", checked: false },
        { text: "Halte dich rechts in der Bahn und überhole links", checked: false },
        { text: "Pausiere nur am Beckenrand, nicht in der Mitte der Bahn", checked: false }
      ]
    },
    en: {
      title: "Apply Pool Rules Practically",
      description: "On your next pool visit, apply the rules and etiquette.",
      checklist: [
        { text: "Choose the appropriate speed lane for your pace", checked: false },
        { text: "Ask politely before entering an occupied lane", checked: false },
        { text: "Stay on the right in the lane and pass on the left", checked: false },
        { text: "Rest only at the pool edge, not in the middle of the lane", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Wie funktioniert die Bahnenordnung im Schwimmbad?",
        answer: "Man schwimmt rechts in der Bahn und überholt links. Es gibt verschiedene Geschwindigkeits-Bahnen (langsam/mittel/schnell), und man sollte die passende für sein Tempo wählen."
      },
      {
        question: "Was sollte man tun, bevor man in eine belegte Bahn einsteigt?",
        answer: "Man sollte höflich fragen: 'Darf ich mit schwimmen?' oder 'Ist hier noch Platz?'. Man sollte auch warten, bis andere Schwimmer vorbei sind, bevor man einsteigt."
      },
      {
        question: "Warum ist es gefährlich, in eine volle Bahn zu springen?",
        answer: "Es ist extrem gefährlich, weil man andere Schwimmer treffen kann, die unter Wasser sind. Das kann zu schweren Verletzungen führen. Man sollte nur in dafür vorgesehenen Bereichen springen oder warten, bis die Bahn leer ist."
      }
    ],
    en: [
      {
        question: "How does lane order work in the pool?",
        answer: "You swim on the right in the lane and pass on the left. There are different speed lanes (slow/medium/fast), and you should choose the appropriate one for your pace."
      },
      {
        question: "What should you do before entering an occupied lane?",
        answer: "You should ask politely: 'May I swim here?' or 'Is there room?'. You should also wait until other swimmers have passed before entering."
      },
      {
        question: "Why is it dangerous to jump into an occupied lane?",
        answer: "It's extremely dangerous because you can hit other swimmers who are underwater. This can lead to serious injuries. You should only jump in designated areas or wait until the lane is empty."
      }
    ]
  }
};

