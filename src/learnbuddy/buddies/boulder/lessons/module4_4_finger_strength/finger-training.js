import { Hand, AlertTriangle, Shield, TrendingUp, Clock, Activity, BookOpen } from 'lucide-react';

export const fingerTraining = {
  title: { de: "Fingertraining & Verletzungsprävention", en: "Finger Training & Injury Prevention" },
  description: { de: "Hangboard-Protokolle, Finger-Anatomie verstehen und die wichtigsten Regeln zur Verletzungsprävention.", en: "Hangboard protocols, understanding finger anatomy, and the most important injury prevention rules." },
  content: {
    de: `
### Fingertraining: Kraft & Sicherheit

Fingerkraft ist beim Klettern entscheidend – aber auch der <strong>häufigste Ort für Verletzungen</strong>. Verstehe die Anatomie, trainiere smart und respektiere die langen Anpassungszeiten deiner Sehnen.

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">WICHTIG: Hangboard erst nach 6-12 Monaten Klettern!</h4>
      <p className="text-sm text-red-700 dark:text-red-300">
        Sehnen passen sich <strong>viel langsamer</strong> an als Muskeln. Auch wenn du dich stark genug fühlst – deine Sehnen sind es vielleicht noch nicht. Zu frühes Hangboard-Training führt zu Pulley-Verletzungen!
      </p>
    </div>
  </div>
</div>

---

### Finger-Anatomie

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Hand className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Das Pulley-System</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        Deine Finger haben <strong>Ringbänder (Pulleys)</strong>, die die Sehnen nah am Knochen halten. Das A2-Pulley (am Grundglied) ist die häufigste Kletterverletzung. Es "knackt" und tut sofort weh.
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li><strong>Sehnen:</strong> Verbinden Muskeln im Unterarm mit den Fingern</li>
        <li><strong>Pulleys:</strong> Halten Sehnen am Knochen (wie Ringe an einer Angel)</li>
        <li><strong>A2-Pulley:</strong> Am häufigsten verletzt, besonders beim Full Crimp</li>
        <li><strong>Anpassungszeit:</strong> Sehnen brauchen Monate, Muskeln nur Wochen</li>
      </ul>
    </div>
  </div>
</div>

---

### Verletzungsprävention

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Shield className="text-green-600 dark:text-green-400" size={24} />
    Die goldenen Regeln
  </h3>
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
        <li><strong>Open Hand > Closed Crimp:</strong> Open Hand (halber Crimp) schont die Pulleys</li>
        <li><strong>10%-Regel:</strong> Belastung pro Woche maximal 10% steigern</li>
        <li><strong>IMMER aufwärmen:</strong> 10-15 Minuten, bevor du kleine Griffe belastest</li>
        <li><strong>Bei Schmerz: SOFORT PAUSE!</strong> Kein "Durchtrainieren"!</li>
        <li><strong>Nie ruckartig belasten:</strong> Kontrolliert und langsam Kraft aufbauen</li>
        <li><strong>Antagonisten trainieren:</strong> Finger-Strecker mit Gummiband</li>
      </ul>
    </div>
  </div>
</div>

---

### Hangboard-Training

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Activity className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Hangboard-Protokolle (erst nach 6-12 Monaten!)</h4>
      <div className="space-y-3 mt-3">
        <div>
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Max Hangs:</strong> 10 Sekunden hängen mit maximalem Gewicht (oder kleinstmöglicher Leiste). 3-5 Sätze, 3 Minuten Pause. Kraft-fokussiert.</p>
        </div>
        <div>
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Repeater:</strong> 7 Sekunden hängen / 3 Sekunden Pause, 6 Wiederholungen = 1 Satz. 3-5 Sätze. Kraftausdauer-fokussiert.</p>
        </div>
        <div>
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Progression:</strong> Gewicht oder Leistenbreite nur schrittweise verändern. Nicht zu schnell steigern!</p>
        </div>
      </div>
    </div>
  </div>
</div>

**Merke:** Deine Finger sind dein Kapital als Kletterer. Schütze sie! Progressive Belastung und Geduld sind der Schlüssel.
    `,
    en: `
### Finger Training: Strength & Safety

Finger strength is crucial in climbing – but also the <strong>most common area for injuries</strong>. Understand the anatomy, train smart, and respect the long adaptation times of your tendons.

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">IMPORTANT: No hangboard until 6-12 months of climbing!</h4>
      <p className="text-sm text-red-700 dark:text-red-300">
        Tendons adapt <strong>much slower</strong> than muscles. Even if you feel strong enough – your tendons might not be ready. Too-early hangboard training leads to pulley injuries!
      </p>
    </div>
  </div>
</div>

---

### Finger Anatomy

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Hand className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">The Pulley System</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        Your fingers have <strong>annular ligaments (pulleys)</strong> that keep tendons close to the bone. The A2 pulley (at the proximal phalanx) is the most common climbing injury. It "pops" and hurts immediately.
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li><strong>Tendons:</strong> Connect muscles in the forearm to fingers</li>
        <li><strong>Pulleys:</strong> Keep tendons close to bone (like guides on a fishing rod)</li>
        <li><strong>A2 pulley:</strong> Most commonly injured, especially with full crimp</li>
        <li><strong>Adaptation time:</strong> Tendons need months, muscles only weeks</li>
      </ul>
    </div>
  </div>
</div>

---

### Injury Prevention

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Shield className="text-green-600 dark:text-green-400" size={24} />
    The Golden Rules
  </h3>
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
        <li><strong>Open Hand > Closed Crimp:</strong> Open hand (half crimp) is easier on pulleys</li>
        <li><strong>10% rule:</strong> Increase load by maximum 10% per week</li>
        <li><strong>ALWAYS warm up:</strong> 10-15 minutes before loading small holds</li>
        <li><strong>If it hurts: STOP IMMEDIATELY!</strong> No "training through pain"!</li>
        <li><strong>Never load abruptly:</strong> Build force controlled and slowly</li>
        <li><strong>Train antagonists:</strong> Finger extensors with rubber band</li>
      </ul>
    </div>
  </div>
</div>

---

### Hangboard Training

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Activity className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Hangboard Protocols (only after 6-12 months!)</h4>
      <div className="space-y-3 mt-3">
        <div><p className="text-sm text-amber-700 dark:text-amber-300"><strong>Max Hangs:</strong> 10 seconds hanging at maximum weight (or smallest possible edge). 3-5 sets, 3 minutes rest. Strength-focused.</p></div>
        <div><p className="text-sm text-amber-700 dark:text-amber-300"><strong>Repeaters:</strong> 7 seconds hang / 3 seconds rest, 6 reps = 1 set. 3-5 sets. Strength endurance focused.</p></div>
        <div><p className="text-sm text-amber-700 dark:text-amber-300"><strong>Progression:</strong> Only change weight or edge size gradually. Don't increase too fast!</p></div>
      </div>
    </div>
  </div>
</div>

**Remember:** Your fingers are your capital as a climber. Protect them! Progressive loading and patience are key.
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Finger-Gesundheit",
      description: "Lerne deine Finger zu schützen und progressive Belastung zu verstehen.",
      checklist: [
        { text: "Übe Open Hand (halben Crimp) statt Full Crimp bei allen Griffen", checked: false },
        { text: "Trainiere Finger-Strecker: 3x20 Wiederholungen mit Gummiband", checked: false },
        { text: "Wärme dich mindestens 15 Minuten auf, bevor du kleine Griffe belastest", checked: false },
        { text: "Höre auf deinen Körper: Bei Schmerz sofort pausieren!", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Finger Health",
      description: "Learn to protect your fingers and understand progressive loading.",
      checklist: [
        { text: "Practice open hand (half crimp) instead of full crimp on all holds", checked: false },
        { text: "Train finger extensors: 3x20 reps with rubber band", checked: false },
        { text: "Warm up at least 15 minutes before loading small holds", checked: false },
        { text: "Listen to your body: Stop immediately if it hurts!", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Warum sollst du mit Hangboard-Training mindestens 6-12 Monate warten?", answer: "Sehnen passen sich viel langsamer an als Muskeln. Auch wenn man sich stark genug fühlt, sind die Sehnen (besonders Pulleys) möglicherweise noch nicht bereit für die hohe Punktbelastung. Zu frühes Hangboard-Training ist die häufigste Ursache für Pulley-Verletzungen bei Kletterern." },
      { question: "Was ist das A2-Pulley und warum ist es so verletzungsanfällig?", answer: "Das A2-Pulley ist ein Ringband am Grundglied der Finger, das die Sehne nah am Knochen hält. Es ist die häufigste Kletterverletzung, besonders beim Full Crimp (geschlossener Griff), wo extrem hohe Kräfte auf das Band wirken. Es 'knackt' und tut sofort weh. Prävention: Open Hand bevorzugen, aufwärmen, nicht ruckartig belasten." },
      { question: "Was ist der Unterschied zwischen Max Hangs und Repeaters?", answer: "Max Hangs: 10 Sekunden mit maximalem Gewicht hängen, 3-5 Sätze mit 3 Minuten Pause – trainiert maximale Kraft. Repeaters: 7 Sekunden hängen / 3 Sekunden Pause, 6 Wiederholungen pro Satz, 3-5 Sätze – trainiert Kraftausdauer. Beide nur mit gutem Aufwärmen und nach mindestens 6-12 Monaten Klettererfahrung." }
    ],
    en: [
      { question: "Why should you wait at least 6-12 months before hangboard training?", answer: "Tendons adapt much slower than muscles. Even if you feel strong enough, tendons (especially pulleys) may not be ready for high point loading. Too-early hangboard training is the most common cause of pulley injuries in climbers." },
      { question: "What is the A2 pulley and why is it so injury-prone?", answer: "The A2 pulley is an annular ligament at the proximal phalanx that keeps the tendon close to the bone. It's the most common climbing injury, especially with full crimp where extremely high forces act on the ligament. It 'pops' and hurts immediately. Prevention: prefer open hand, warm up, don't load abruptly." },
      { question: "What is the difference between max hangs and repeaters?", answer: "Max Hangs: 10 seconds at maximum weight, 3-5 sets with 3 minutes rest – trains maximum strength. Repeaters: 7 seconds hang / 3 seconds rest, 6 reps per set, 3-5 sets – trains strength endurance. Both only with good warm-up and after at least 6-12 months of climbing experience." }
    ]
  }
};
