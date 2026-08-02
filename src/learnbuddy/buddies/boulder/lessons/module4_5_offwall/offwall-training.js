import { Dumbbell, Shield, Activity, TrendingUp, RotateCcw, Heart, Zap } from 'lucide-react';

export const offwallTraining = {
  title: { de: "Off-Wall Training", en: "Off-Wall Training" },
  description: { de: "Antagonisten-Training, Klimmzüge, Core-Übungen und Mobility für Kletterer – was du abseits der Wand trainieren solltest.", en: "Antagonist training, pull-ups, core exercises, and mobility for climbers – what to train off the wall." },
  content: {
    de: `
### Off-Wall Training: Stark & gesund abseits der Wand

Klettern allein reicht nicht! Ohne <strong>Antagonisten-Training</strong> entwickelst du Muskelungleichgewichte, die zu Verletzungen führen. Off-Wall Training macht dich stärker, gesünder und verlängert deine Kletter-Karriere.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Shield className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Warum Antagonisten-Training?</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Klettern ist primär "Ziehen". Ohne Gegengewicht (Drücken) entstehen Schulterprobleme, Kletter-Ellenbogen und Haltungsschäden. <strong>Push-Übungen sind Pflicht!</strong>
      </p>
    </div>
  </div>
</div>

---

### Core-Training

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Activity className="text-green-600 dark:text-green-400" size={24} />
    Bauch & Rücken
  </h3>
  <div className="space-y-2">
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Plank-Variationen:</strong> Front Plank, Side Plank, Plank with arm lift (je 30-60 Sek)</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Hollow Body Hold:</strong> 3x30 Sekunden – die beste Core-Übung für Kletterer</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>L-Sit:</strong> Am Boden oder hängend – fortgeschritten aber extrem effektiv</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Beinheben hängend:</strong> 3x10 – trainiert Core für Überhang</p>
  </div>
</div>

### Pull-Training

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Zap className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Zieh-Kraft</h4>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li><strong>Klimmzüge:</strong> Verschiedene Griffe (Obergriff, Untergriff, eng, breit)</li>
        <li><strong>Frenchies:</strong> Lock-Offs bei 90°, 120°, oben – extrem kletterspezifisch</li>
        <li><strong>One-Arm Hangs:</strong> Einseitig hängen für Finger- und Schulterkraft</li>
      </ul>
    </div>
  </div>
</div>

### Push-Training (Antagonisten!)

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <Dumbbell className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Drück-Kraft (PFLICHT!)</h4>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li><strong>Liegestütze:</strong> Normal, Diamond, Archer – 3x15</li>
        <li><strong>Dips:</strong> 3x10 – Trizeps und Schulter</li>
        <li><strong>Overhead Press:</strong> Schulter-Gesundheit</li>
        <li><strong>Face Pulls:</strong> Gegen Schulter-Rundung</li>
        <li><strong>Handgelenk-Strecker:</strong> Gegen Kletter-Ellenbogen</li>
      </ul>
    </div>
  </div>
</div>

### Flexibility & Mobility

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <RotateCcw className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Beweglichkeit</h4>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
        <li><strong>Hüft-Mobility:</strong> Für hohe Tritte & Hooks</li>
        <li><strong>Schulter-Mobility:</strong> Overhead Reaches</li>
        <li><strong>Hamstrings:</strong> Bessere Reichweite</li>
        <li><strong>Foam Rolling:</strong> Faszien-Training für bessere Recovery</li>
      </ul>
    </div>
  </div>
</div>

**Merke:** Off-Wall Training ist kein Extra – es ist essentiell für eine lange, verletzungsfreie Kletter-Karriere!
    `,
    en: `
### Off-Wall Training: Strong & Healthy Away from the Wall

Climbing alone isn't enough! Without <strong>antagonist training</strong>, you develop muscle imbalances that lead to injuries. Off-wall training makes you stronger, healthier, and extends your climbing career.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Shield className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Why Antagonist Training?</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Climbing is primarily "pulling." Without counterbalance (pushing), you develop shoulder problems, climber's elbow, and posture issues. <strong>Push exercises are mandatory!</strong>
      </p>
    </div>
  </div>
</div>

---

### Core Training

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Activity className="text-green-600 dark:text-green-400" size={24} />
    Abs & Back
  </h3>
  <div className="space-y-2">
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Plank Variations:</strong> Front plank, side plank, plank with arm lift (30-60 sec each)</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Hollow Body Hold:</strong> 3x30 seconds – the best core exercise for climbers</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>L-Sit:</strong> On floor or hanging – advanced but extremely effective</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Hanging Leg Raises:</strong> 3x10 – trains core for overhangs</p>
  </div>
</div>

### Pull Training

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Zap className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Pull Strength</h4>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li><strong>Pull-ups:</strong> Various grips (overhand, underhand, narrow, wide)</li>
        <li><strong>Frenchies:</strong> Lock-offs at 90°, 120°, top – extremely climbing-specific</li>
        <li><strong>One-Arm Hangs:</strong> Single-arm hanging for finger and shoulder strength</li>
      </ul>
    </div>
  </div>
</div>

### Push Training (Antagonists!)

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <Dumbbell className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Push Strength (MANDATORY!)</h4>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li><strong>Push-ups:</strong> Normal, diamond, archer – 3x15</li>
        <li><strong>Dips:</strong> 3x10 – triceps and shoulders</li>
        <li><strong>Overhead Press:</strong> Shoulder health</li>
        <li><strong>Face Pulls:</strong> Against shoulder rounding</li>
        <li><strong>Wrist Extensors:</strong> Against climber's elbow</li>
      </ul>
    </div>
  </div>
</div>

### Flexibility & Mobility

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <RotateCcw className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Flexibility</h4>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
        <li><strong>Hip Mobility:</strong> For high steps & hooks</li>
        <li><strong>Shoulder Mobility:</strong> Overhead reaches</li>
        <li><strong>Hamstrings:</strong> Better reach</li>
        <li><strong>Foam Rolling:</strong> Fascia training for better recovery</li>
      </ul>
    </div>
  </div>
</div>

**Remember:** Off-wall training isn't extra – it's essential for a long, injury-free climbing career!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Off-Wall Training",
      description: "Baue Antagonisten- und Core-Training in deinen Trainingsplan ein.",
      checklist: [
        { text: "Core: 3x30 Sek Plank + 3x30 Sek Hollow Body Hold", checked: false },
        { text: "Push: 3x15 Liegestütze + 3x10 Dips (Antagonisten!)", checked: false },
        { text: "Pull: 3x5 Klimmzüge (oder assisted)", checked: false },
        { text: "Mobility: 10 Minuten Hüft- und Schulter-Mobilisation", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Off-Wall Training",
      description: "Incorporate antagonist and core training into your plan.",
      checklist: [
        { text: "Core: 3x30 sec plank + 3x30 sec hollow body hold", checked: false },
        { text: "Push: 3x15 push-ups + 3x10 dips (antagonists!)", checked: false },
        { text: "Pull: 3x5 pull-ups (or assisted)", checked: false },
        { text: "Mobility: 10 minutes hip and shoulder mobilization", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Warum ist Antagonisten-Training für Kletterer so wichtig?", answer: "Klettern ist primär Ziehen (Pull). Ohne Gegengewicht entstehen Muskelungleichgewichte, die zu Schulterprobleme, Kletter-Ellenbogen und Haltungsschäden führen. Push-Übungen wie Liegestütze, Dips und Face Pulls sind Pflicht, um diese Ungleichgewichte auszugleichen und langfristig gesund zu bleiben." },
      { question: "Welche Core-Übungen sind am besten für Kletterer?", answer: "Die besten Core-Übungen für Kletterer sind: Hollow Body Hold (3x30 Sek – beste Kletter-Core-Übung), Plank-Variationen (Front, Side, mit Arm-Lift), L-Sit (am Boden oder hängend), und hängendes Beinheben (3x10). Core ist essentiell für Überhang-Klettern, Hooks und Körperspannung." },
      { question: "Was ist ein Frenchie und warum ist es kletterspezifisch?", answer: "Ein Frenchie ist eine Klimmzug-Variante, bei der man auf verschiedenen Höhen (oben, 90°, 120°) in einem Lock-Off verharrt. Es trainiert die Fähigkeit, den Körper in einer bestimmten Position zu halten – genau das, was man beim Klettern ständig braucht. Es ist die kletterspezifischste Pull-Übung." }
    ],
    en: [
      { question: "Why is antagonist training so important for climbers?", answer: "Climbing is primarily pulling. Without counterbalance, muscle imbalances develop leading to shoulder problems, climber's elbow, and posture issues. Push exercises like push-ups, dips, and face pulls are mandatory to balance these imbalances and stay healthy long-term." },
      { question: "Which core exercises are best for climbers?", answer: "The best core exercises for climbers are: Hollow Body Hold (3x30 sec – best climbing core exercise), plank variations (front, side, with arm lift), L-Sit (on floor or hanging), and hanging leg raises (3x10). Core is essential for overhang climbing, hooks, and body tension." },
      { question: "What is a Frenchie and why is it climbing-specific?", answer: "A Frenchie is a pull-up variation where you hold a lock-off at different heights (top, 90°, 120°). It trains the ability to hold your body in a specific position – exactly what you constantly need while climbing. It's the most climbing-specific pull exercise." }
    ]
  }
};
