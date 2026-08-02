import { Scale, Target, Move, AlertTriangle, TrendingUp, Activity, Compass } from 'lucide-react';

export const balanceCenterGravity = {
  title: {
    de: "Balance & Schwerpunkt",
    en: "Balance & Center of Gravity"
  },
  description: {
    de: "Lerne, wie du deinen Körperschwerpunkt kontrollierst, das Balance-Dreieck nutzt und mit Flagging-Techniken stabil an der Wand bleibst.",
    en: "Learn how to control your center of gravity, use the balance triangle, and stay stable on the wall with flagging techniques."
  },
  content: {
    de: `
### Balance & Schwerpunkt: Der Schlüssel zu effizientem Klettern

Gute Kletterer sehen mühelos aus. Das liegt nicht nur an Kraft, sondern vor allem an ihrer **Balance**. Sie wissen instinktiv, wo ihr Schwerpunkt ist und wie sie ihn kontrollieren können. Wenn du Balance meisterst, brauchst du deutlich weniger Kraft!

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Scale className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Das fundamentale Prinzip</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        <strong>"Dein Schwerpunkt bestimmt alles!"</strong>
      </p>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Dein Körperschwerpunkt liegt ungefähr auf Höhe deines Bauchnabels. Je näher dieser Punkt an der Wand ist, desto mehr Gewicht lastet auf deinen Füßen – und desto weniger müssen deine Arme arbeiten. Das ist das Geheimnis effizienten Kletterns!
      </p>
    </div>
  </div>
</div>

---

### Schwerpunkt nah an der Wand

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    Hüfte zur Wand!
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Warum Hüfte nah an der Wand?</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Wenn deine Hüfte weit von der Wand entfernt ist, hängst du an deinen Armen – sie tragen dann einen Großteil deines Gewichts. Drückst du die Hüfte an die Wand, verlagert sich das Gewicht auf deine Füße.
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li><strong>Hüfte nah:</strong> 70-80% des Gewichts auf den Füßen</li>
        <li><strong>Hüfte weit weg:</strong> 50-60% des Gewichts an den Armen</li>
        <li><strong>Eindrehen:</strong> Bringt die Hüfte noch näher an die Wand</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Tipps für bessere Hüftposition</h4>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Drehe die Hüfte seitlich ein (Drop Knee)</li>
        <li>Stelle dir vor, dein Bauchnabel berührt die Wand</li>
        <li>Nutze breite Fußpositionen für mehr Stabilität</li>
        <li>Arme gestreckt lassen – das zieht die Hüfte automatisch näher</li>
      </ul>
    </div>
  </div>
</div>

---

### Das Balance-Dreieck

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Compass className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Drei-Punkt-Kontakt & Balance-Dreieck</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        Beim Klettern hast du meistens <strong>3 Kontaktpunkte</strong> an der Wand (2 Füße + 1 Hand oder 2 Hände + 1 Fuß). Diese 3 Punkte bilden ein Dreieck. Dein Schwerpunkt sollte sich innerhalb dieses Dreiecks befinden!
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>Schwerpunkt innerhalb des Dreiecks:</strong> Du bist stabil und im Gleichgewicht</li>
        <li><strong>Schwerpunkt außerhalb des Dreiecks:</strong> Du rotierst weg → "Barn Door"-Effekt</li>
        <li><strong>Dreieck aktiv verlagern:</strong> Bewege das Dreieck strategisch zur nächsten Position</li>
      </ul>
    </div>
  </div>
</div>

---

### Flagging: Bein als Gegengewicht

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Move className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Was ist Flagging?</h4>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
        Flagging bedeutet, ein Bein als <strong>Gegengewicht</strong> zu nutzen, ohne es auf einen Tritt zu stellen. Du streckst das Bein zur Seite oder hinter dem Standbein vorbei, um dein Gleichgewicht zu halten und das "Barn Door"-Problem zu lösen.
      </p>
    </div>
  </div>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Die 2 Hauptarten des Flagging</h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">1. Inside Flag (Flaggen nach innen)</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Du streckst das freie Bein <strong>hinter dem Standbein</strong> auf die andere Seite. Das erzeugt Gegendruck und hält dich stabil.
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Nutze es, wenn du mit der gleichen Hand wie dem Standfuß greifst</li>
        <li>Das freie Bein geht hinter dem Standbein vorbei</li>
        <li>Drücke leicht gegen die Wand für extra Stabilität</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">2. Outside Flag (Flaggen nach außen)</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Du streckst das freie Bein auf der <strong>gleichen Seite</strong> wie die greifende Hand nach außen. Das verschiebt deinen Schwerpunkt.
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Nutze es, wenn du diagonal greifst (rechte Hand, linker Fuß)</li>
        <li>Das freie Bein geht auf der anderen Seite nach außen</li>
        <li>Sehr effektiv bei seitlichen Zügen</li>
      </ul>
    </div>
  </div>
</div>

---

### Gegendruck (Opposition)

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Activity className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Das Prinzip der Opposition</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        Opposition bedeutet, dass du <strong>in entgegengesetzte Richtungen</strong> drückst und ziehst, um Stabilität zu erzeugen. Es ist eines der mächtigsten Prinzipien beim Klettern!
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2 list-disc list-inside">
        <li><strong>Untergriff + Fußdruck:</strong> Du ziehst den Griff nach oben, während deine Füße nach unten drücken</li>
        <li><strong>Side-Pulls:</strong> Du ziehst seitlich mit der Hand und drückst seitlich mit dem Fuß → Gegenkraft</li>
        <li><strong>Stemmen:</strong> Zwei gegenüberliegende Wände oder Flächen gegeneinander nutzen</li>
        <li><strong>Flagging + Griff:</strong> Bein als Gegengewicht zur ziehenden Hand</li>
      </ul>
    </div>
  </div>
</div>

---

### Das "Barn Door"-Problem

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Was ist der Barn Door?</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        Der "Barn Door" (Scheunentor) ist eine ungewollte Rotation, bei der dein Körper wie ein Scheunentor von der Wand wegdreht. Das passiert, wenn dein Schwerpunkt außerhalb des Balance-Dreiecks liegt.
      </p>
      <p className="text-sm text-red-700 dark:text-red-300 mb-2"><strong>Lösungen:</strong></p>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li><strong>Flagging:</strong> Bein als Gegengewicht nutzen (effektivste Lösung!)</li>
        <li><strong>Schwerpunkt verlagern:</strong> Hüfte in Richtung Standfuß verschieben</li>
        <li><strong>Schneller greifen:</strong> Manchmal hilft Tempo, bevor die Rotation beginnt</li>
        <li><strong>Fuß tiefer setzen:</strong> Einen tieferen Tritt nutzen, um das Dreieck zu vergrößern</li>
      </ul>
    </div>
  </div>
</div>

---

### Praktische Übungen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    Übungen für bessere Balance
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 1: Hüfte-an-die-Wand</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Klettere einen leichten Boulder</li>
        <li>Bei jedem Zug: Halte an und prüfe deine Hüftposition</li>
        <li>Versuche, den Bauchnabel so nah wie möglich an die Wand zu bringen</li>
        <li>Spüre, wie viel weniger deine Arme arbeiten müssen</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 2: Flagging-Training</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Klettere einen leichten Boulder nur mit Inside Flags</li>
        <li>Dann denselben Boulder nur mit Outside Flags</li>
        <li>Spüre den Unterschied in der Stabilität</li>
        <li>Wähle bei jedem Zug bewusst die passende Flag-Variante</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 3: Einbein-Klettern</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Klettere einen sehr leichten Boulder</li>
        <li>Nutze nur einen Fuß auf den Tritten</li>
        <li>Das andere Bein dient nur als Gegengewicht (Flagging)</li>
        <li>So lernst du, Balance bewusst zu kontrollieren</li>
      </ol>
    </div>
  </div>
</div>

---

### Zusammenfassung

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Deine Balance-Checkliste
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Hüfte nah an der Wand:</strong> Je näher dein Schwerpunkt an der Wand, desto weniger Armkraft brauchst du.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Balance-Dreieck:</strong> Halte deinen Schwerpunkt innerhalb des Dreiecks deiner Kontaktpunkte.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Flagging:</strong> Nutze Inside oder Outside Flag, um den "Barn Door" zu verhindern.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Opposition:</strong> Drücken + Ziehen in Gegenrichtung = Stabilität ohne extra Kraft.</span>
    </li>
  </ul>
</div>

**Merke:** Balance ist der Unterschied zwischen Klettern und Hochziehen. Wer Balance meistert, klettert mühelos!
    `,
    en: `
### Balance & Center of Gravity: The Key to Efficient Climbing

Good climbers look effortless. That's not just because of strength – it's primarily about **balance**. They instinctively know where their center of gravity is and how to control it. When you master balance, you need significantly less strength!

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Scale className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">The Fundamental Principle</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        <strong>"Your center of gravity determines everything!"</strong>
      </p>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Your center of gravity is approximately at your belly button. The closer this point is to the wall, the more weight rests on your feet – and the less your arms have to work. This is the secret of efficient climbing!
      </p>
    </div>
  </div>
</div>

---

### Center of Gravity Close to the Wall

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    Hips to the Wall!
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Why Hips Close to the Wall?</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        When your hips are far from the wall, you're hanging on your arms – they carry most of your weight. Push your hips to the wall, and the weight shifts to your feet.
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li><strong>Hips close:</strong> 70-80% of weight on feet</li>
        <li><strong>Hips far away:</strong> 50-60% of weight on arms</li>
        <li><strong>Turning in:</strong> Brings hips even closer to the wall</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Tips for Better Hip Position</h4>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Turn your hips sideways (drop knee)</li>
        <li>Imagine your belly button touching the wall</li>
        <li>Use wide foot positions for more stability</li>
        <li>Keep arms straight – this automatically pulls hips closer</li>
      </ul>
    </div>
  </div>
</div>

---

### The Balance Triangle

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Compass className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Three-Point Contact & Balance Triangle</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        While climbing, you usually have <strong>3 contact points</strong> on the wall (2 feet + 1 hand or 2 hands + 1 foot). These 3 points form a triangle. Your center of gravity should be inside this triangle!
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>Center of gravity inside the triangle:</strong> You're stable and balanced</li>
        <li><strong>Center of gravity outside the triangle:</strong> You rotate away → "Barn Door" effect</li>
        <li><strong>Actively shift the triangle:</strong> Move the triangle strategically to the next position</li>
      </ul>
    </div>
  </div>
</div>

---

### Flagging: Leg as Counterbalance

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Move className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">What is Flagging?</h4>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
        Flagging means using a leg as a <strong>counterbalance</strong> without placing it on a foothold. You extend the leg to the side or behind the standing leg to maintain balance and solve the "Barn Door" problem.
      </p>
    </div>
  </div>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">The 2 Main Types of Flagging</h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">1. Inside Flag</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        You extend the free leg <strong>behind the standing leg</strong> to the other side. This creates counter-pressure and keeps you stable.
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Use when grabbing with the same hand as the standing foot</li>
        <li>The free leg goes behind the standing leg</li>
        <li>Press lightly against the wall for extra stability</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">2. Outside Flag</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        You extend the free leg on the <strong>same side</strong> as the reaching hand outward. This shifts your center of gravity.
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Use when reaching diagonally (right hand, left foot)</li>
        <li>The free leg extends to the other side</li>
        <li>Very effective for lateral moves</li>
      </ul>
    </div>
  </div>
</div>

---

### Opposition (Counter-Pressure)

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Activity className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">The Principle of Opposition</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        Opposition means pushing and pulling in <strong>opposite directions</strong> to create stability. It's one of the most powerful principles in climbing!
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2 list-disc list-inside">
        <li><strong>Undercling + foot push:</strong> Pull the hold upward while your feet push downward</li>
        <li><strong>Side-pulls:</strong> Pull sideways with hand and push sideways with foot → counter-force</li>
        <li><strong>Stemming:</strong> Use two opposing walls or surfaces against each other</li>
        <li><strong>Flagging + grip:</strong> Leg as counterbalance to the pulling hand</li>
      </ul>
    </div>
  </div>
</div>

---

### The "Barn Door" Problem

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">What is a Barn Door?</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        The "Barn Door" is an unwanted rotation where your body swings away from the wall like a barn door. This happens when your center of gravity is outside the balance triangle.
      </p>
      <p className="text-sm text-red-700 dark:text-red-300 mb-2"><strong>Solutions:</strong></p>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li><strong>Flagging:</strong> Use leg as counterbalance (most effective solution!)</li>
        <li><strong>Shift center of gravity:</strong> Move hips toward standing foot</li>
        <li><strong>Grab faster:</strong> Sometimes speed helps before rotation begins</li>
        <li><strong>Lower foot:</strong> Use a lower foothold to enlarge the triangle</li>
      </ul>
    </div>
  </div>
</div>

---

### Practical Exercises

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    Exercises for Better Balance
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 1: Hips-to-Wall</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Climb an easy boulder</li>
        <li>At each move: Stop and check your hip position</li>
        <li>Try to bring your belly button as close to the wall as possible</li>
        <li>Feel how much less your arms need to work</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 2: Flagging Training</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Climb an easy boulder using only inside flags</li>
        <li>Then the same boulder using only outside flags</li>
        <li>Feel the difference in stability</li>
        <li>Consciously choose the right flag variant at each move</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 3: One-Leg Climbing</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Climb a very easy boulder</li>
        <li>Use only one foot on footholds</li>
        <li>The other leg serves only as counterbalance (flagging)</li>
        <li>This teaches you to consciously control balance</li>
      </ol>
    </div>
  </div>
</div>

---

### Summary

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Your Balance Checklist
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Hips close to the wall:</strong> The closer your center of gravity to the wall, the less arm strength you need.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Balance triangle:</strong> Keep your center of gravity inside the triangle of your contact points.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Flagging:</strong> Use inside or outside flag to prevent the "Barn Door".</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Opposition:</strong> Push + pull in opposite directions = stability without extra strength.</span>
    </li>
  </ul>
</div>

**Remember:** Balance is the difference between climbing and pulling yourself up. Master balance, and you climb effortlessly!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Balance & Schwerpunkt",
      description: "Trainiere dein Gleichgewicht und lerne, deinen Schwerpunkt zu kontrollieren.",
      checklist: [
        { text: "Übung 1: Hüfte-an-die-Wand - Klettere leichte Boulder und achte bei jedem Zug auf deine Hüftposition", checked: false },
        { text: "Übung 2: Flagging üben - Klettere denselben Boulder einmal mit Inside Flags, einmal mit Outside Flags", checked: false },
        { text: "Übung 3: Einbein-Klettern - Nutze nur einen Fuß auf Tritten, das andere Bein nur als Gegengewicht", checked: false },
        { text: "Beobachte: Wo dreht dein Körper weg (Barn Door)? Nutze bewusst Flagging um gegenzusteuern", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Balance & Center of Gravity",
      description: "Train your balance and learn to control your center of gravity.",
      checklist: [
        { text: "Exercise 1: Hips-to-wall - Climb easy boulders and check your hip position at every move", checked: false },
        { text: "Exercise 2: Flagging practice - Climb the same boulder once with inside flags, once with outside flags", checked: false },
        { text: "Exercise 3: One-leg climbing - Use only one foot on holds, the other leg only as counterbalance", checked: false },
        { text: "Observe: Where does your body rotate away (Barn Door)? Consciously use flagging to counter it", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum ist es so wichtig, die Hüfte nah an der Wand zu halten?",
        answer: "Die Hüfte nah an der Wand zu halten ist wichtig, weil dadurch der Schwerpunkt näher an die Wand kommt. Das verlagert 70-80% des Körpergewichts auf die Füße statt auf die Arme. Ist die Hüfte weit weg, hängt man an den Armen und verschwendet Kraft. Eindrehen und gestreckte Arme helfen, die Hüfte automatisch näher zu bringen."
      },
      {
        question: "Was ist das Balance-Dreieck und warum ist es wichtig?",
        answer: "Das Balance-Dreieck wird durch die drei Kontaktpunkte an der Wand gebildet (z.B. 2 Füße + 1 Hand). Solange der Schwerpunkt innerhalb dieses Dreiecks liegt, ist man stabil. Liegt er außerhalb, dreht der Körper weg (Barn Door). Beim Klettern verschiebt man dieses Dreieck aktiv von Position zu Position."
      },
      {
        question: "Was ist der Unterschied zwischen Inside Flag und Outside Flag?",
        answer: "Beim Inside Flag geht das freie Bein hinter dem Standbein auf die andere Seite – man nutzt es, wenn man mit der gleichen Hand wie dem Standfuß greift. Beim Outside Flag streckt man das freie Bein auf der gleichen Seite wie die greifende Hand nach außen – das ist effektiv bei diagonalen Zügen. Beide verhindern den Barn Door, aber in unterschiedlichen Situationen."
      }
    ],
    en: [
      {
        question: "Why is it so important to keep your hips close to the wall?",
        answer: "Keeping hips close to the wall is important because it brings the center of gravity closer to the wall. This transfers 70-80% of body weight to the feet instead of the arms. When hips are far away, you're hanging on your arms and wasting strength. Turning in and keeping arms straight help bring hips closer automatically."
      },
      {
        question: "What is the balance triangle and why does it matter?",
        answer: "The balance triangle is formed by your three contact points on the wall (e.g., 2 feet + 1 hand). As long as your center of gravity is inside this triangle, you're stable. If it's outside, your body rotates away (Barn Door). While climbing, you actively shift this triangle from position to position."
      },
      {
        question: "What is the difference between inside flag and outside flag?",
        answer: "With an inside flag, the free leg goes behind the standing leg to the other side – use it when grabbing with the same hand as the standing foot. With an outside flag, you extend the free leg on the same side as the reaching hand – effective for diagonal moves. Both prevent the Barn Door, but in different situations."
      }
    ]
  }
};
