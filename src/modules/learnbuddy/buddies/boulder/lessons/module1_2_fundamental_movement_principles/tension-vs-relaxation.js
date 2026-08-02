
import { Zap, Power, Wind, AlertCircle, Target, Lightbulb, TrendingUp, Activity } from 'lucide-react';

export const tensionVsRelaxation = {
  title: {
    de: "Spannung vs. Entspannung",
    en: "Tension vs. Relaxation"
  },
  description: {
    de: "Lerne, wann du deinen ganzen Körper anspannen musst und wann du bewusst entspannen solltest. Der Schlüssel zu effizientem Klettern liegt im Wechselspiel zwischen beiden.",
    en: "Learn when you need to tense your entire body and when you should consciously relax. The key to efficient climbing lies in the interplay between both."
  },
  content: {
    de: `
### Das Geheimnis der Effizienz

Einer der größten Unterschiede zwischen Anfängern und erfahrenen Kletterern liegt nicht nur in der Kraft oder Technik, sondern in etwas viel Subtilerem: **dem bewussten Umgang mit Spannung und Entspannung**.

Anfänger neigen dazu, ihren ganzen Körper die ganze Zeit angespannt zu halten – eine "Dauer-Verkrampfung", die schnell zur Erschöpfung führt. Erfahrene Kletterer hingegen wissen genau, wann sie Spannung brauchen und wann sie sich entspannen können.

**Das ist der Schlüssel zu längerer Ausdauer und effizienterem Klettern.**

---

### Warum ist das so wichtig?

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Activity className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Energie sparen = Länger klettern</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        Jede unnötige Anspannung kostet Energie. Wenn du deine Arme, Schultern und Rumpf die ganze Zeit angespannt hältst, auch wenn du es nicht brauchst, wirst du schnell müde.
      </p>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        <strong>Die Lösung:</strong> Spanne nur an, wenn du es wirklich brauchst. Entspanne bewusst an guten Griffen und Positionen. So kannst du viel länger klettern.
      </p>
    </div>
  </div>
</div>

**Stell dir vor:** Du fährst mit dem Auto und hältst die ganze Zeit das Gaspedal gedrückt, auch wenn du bergab fährst. Das ist ineffizient! Genau dasselbe passiert, wenn du deinen Körper die ganze Zeit angespannt hältst.

---

### Wann brauchst du Spannung?

Ganzkörperspannung ist essentiell für bestimmte Situationen. Hier sind die wichtigsten:

#### 1. Schwere Züge und Überhänge

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Power className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Ganzkörperspannung für Kraft</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        Bei schweren Zügen, besonders in Überhängen, brauchst du Ganzkörperspannung. Das bedeutet:
      </p>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-2 list-disc list-inside">
        <li><strong>Rumpf angespannt:</strong> Deine Bauchmuskeln halten deinen Körper stabil</li>
        <li><strong>Beine aktiv:</strong> Deine Beine drücken und halten Spannung</li>
        <li><strong>Arme angespannt:</strong> Aber nicht verkrampft – nur so viel wie nötig</li>
        <li><strong>Ganzkörper als Einheit:</strong> Alles arbeitet zusammen</li>
      </ul>
      <p className="text-sm text-red-700 dark:text-red-300 mt-3">
        <strong>Warum?</strong> Ohne diese Spannung würdest du "durchhängen" und dein Gewicht würde komplett an deinen Armen hängen. Mit Spannung nutzt du deinen ganzen Körper als eine Einheit.
      </p>
    </div>
  </div>
</div>

#### 2. Dynamische Bewegungen (Dynos)

Bei dynamischen Bewegungen brauchst du explosive Spannung, um Schwung zu bekommen. Die Spannung wird kurz vor dem Absprung aufgebaut und dann explosiv freigesetzt.

#### 3. Kleine Tritte und schlechte Griffe

Wenn die Tritte klein sind oder die Griffe schlecht, brauchst du mehr Spannung, um nicht abzurutschen. Dein ganzer Körper muss zusammenarbeiten, um die Position zu halten.

#### 4. Weite Züge (Reach Moves)

Bei weiten Zügen brauchst du Spannung, um deinen Körper zu strecken und die maximale Reichweite zu erreichen.

---

### Wann solltest du entspannen?

Entspannung ist genauso wichtig wie Spannung – vielleicht sogar wichtiger, weil sie dir ermöglicht, Energie zu sparen.

#### 1. An guten Griffen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Wind className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Bewusstes Entspannen</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-3">
        Wenn du einen guten Griff hast, nutze die Gelegenheit, um dich zu entspannen:
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
        <li><strong>Arme lockern:</strong> Lass deine Arme hängen, wenn möglich</li>
        <li><strong>Schultern entspannen:</strong> Lass die Schultern fallen</li>
        <li><strong>Rumpf lockern:</strong> Du brauchst keine maximale Spannung</li>
        <li><strong>Atmen:</strong> Nutze die Zeit für tiefe Atemzüge</li>
      </ul>
      <p className="text-sm text-green-700 dark:text-green-300 mt-3">
        <strong>Wichtig:</strong> Entspannen bedeutet nicht, komplett schlaff zu werden. Du musst immer noch genug Spannung halten, um nicht abzufallen. Aber du kannst deutlich weniger Spannung halten als bei einem schweren Zug.
      </p>
    </div>
  </div>
</div>

#### 2. In stabilen Positionen

Wenn du in einer stabilen Position bist (z.B. beide Füße auf guten Tritten, guter Griff), kannst du dich entspannen. Dein Gewicht liegt auf deinen Füßen, du brauchst keine maximale Spannung.

#### 3. Zwischen schweren Zügen

Nutze die Momente zwischen schweren Zügen, um dich zu erholen. Selbst eine Sekunde Entspannung kann helfen, Energie zu sparen.

#### 4. Beim "Lesen" eines Boulders

Wenn du vor einem Boulder stehst und die Route "liest" (analysierst), entspanne dich. Du brauchst keine Spannung, wenn du nicht kletterst.

---

### Die Kunst des Wechsels

Der Schlüssel liegt im **Wechselspiel** zwischen Spannung und Entspannung. Erfahrene Kletterer wechseln ständig zwischen beiden:

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Der Rhythmus des Kletterns</h4>
  <div className="space-y-3 text-sm text-purple-700 dark:text-purple-300">
    <div className="flex items-start gap-2">
      <span className="font-bold">1.</span>
      <span><strong>Vorbereitung:</strong> Entspannt stehen, Route lesen</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold">2.</span>
      <span><strong>Bewegung:</strong> Spannung aufbauen für den Zug</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold">3.</span>
      <span><strong>Nach dem Zug:</strong> An gutem Griff entspannen</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold">4.</span>
      <span><strong>Nächste Bewegung:</strong> Wieder Spannung aufbauen</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold">5.</span>
      <span><strong>Wiederholen:</strong> Dieser Rhythmus wiederholt sich ständig</span>
    </div>
  </div>
</div>

---

### Praktische Übungen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Zap className="text-green-600 dark:text-green-400" size={24} />
    Übung 1: Bewusstes Anspannen und Entspannen
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Suche dir einen einfachen Boulder und klettere ihn langsam:
  </p>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Vor jedem Zug: Spüre, wie du Spannung aufbaust</li>
    <li>Während des Zugs: Halte die Spannung</li>
    <li>Nach dem Zug an gutem Griff: Bewusst entspannen</li>
    <li>Wiederhole diesen Prozess bei jedem Zug</li>
  </ol>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Zap className="text-green-600 dark:text-green-400" size={24} />
    Übung 2: Körper-Scan
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Während du kletterst, scanne regelmäßig deinen Körper:
  </p>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
    <li>Sind meine Schultern angespannt? Können sie entspannen?</li>
    <li>Sind meine Arme verkrampft? Können sie lockerer sein?</li>
    <li>Ist mein Rumpf angespannt, obwohl ich es nicht brauche?</li>
    <li>Halte ich unnötige Spannung irgendwo?</li>
  </ul>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Zap className="text-green-600 dark:text-green-400" size={24} />
    Übung 3: Erholungspositionen finden
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Suche dir einen Boulder und identifiziere die "Erholungspositionen":
  </p>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
    <li>Wo sind die guten Griffe?</li>
    <li>Wo kannst du dich entspannen?</li>
    <li>Wie lange kannst du in diesen Positionen bleiben?</li>
    <li>Nutze diese Positionen bewusst zur Erholung</li>
  </ul>
</div>

---

### Häufige Fehler

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Fehler 1: Dauer-Verkrampfung</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Der häufigste Fehler ist, den ganzen Körper die ganze Zeit angespannt zu halten, auch wenn es nicht nötig ist.
  </p>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Symptome:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside mb-3">
    <li>Schnelle Erschöpfung</li>
    <li>Brennende Arme nach wenigen Zügen</li>
    <li>Verkrampfte Schultern</li>
    <li>Unfähigkeit, lange zu klettern</li>
  </ul>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Lösung:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
    <li>Bewusstsein schaffen: Frage dich regelmäßig "Bin ich zu angespannt?"</li>
    <li>An guten Griffen bewusst entspannen</li>
    <li>Körper-Scan durchführen</li>
    <li>Langsam klettern und auf Spannung achten</li>
  </ul>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Fehler 2: Zu wenig Spannung bei schweren Zügen</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Manche Anfänger versuchen, sich zu entspannen, auch wenn sie Spannung brauchen. Das führt dazu, dass sie "durchhängen" und nicht genug Kraft haben.
  </p>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Lösung:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
    <li>Lerne zu erkennen, wann du Spannung brauchst</li>
    <li>Bei schweren Zügen: Ganzkörperspannung aufbauen</li>
    <li>Rumpf aktivieren</li>
    <li>Beine aktivieren</li>
  </ul>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Fehler 3: Nicht wissen, wann man entspannen kann</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Viele Anfänger wissen nicht, dass sie sich an guten Griffen entspannen können. Sie halten unnötige Spannung.
  </p>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Lösung:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
    <li>Lerne, gute Griffe zu erkennen</li>
    <li>Nutze diese Griffe bewusst zur Erholung</li>
    <li>Entspanne Arme, Schultern, Rumpf</li>
    <li>Atme tief durch</li>
  </ul>
</div>

---

### Fortgeschrittene Techniken

#### Core-Spannung für Stabilität

Dein Rumpf (Core) ist der Schlüssel zur Ganzkörperspannung. Ein starker, angespannter Core verbindet deine Beine mit deinen Armen und ermöglicht es dir, deinen ganzen Körper als Einheit zu bewegen.

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
    <Lightbulb className="text-amber-600 dark:text-amber-400" size={24} />
    Wie aktivierst du deinen Core?
  </h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li><strong>Bauchmuskeln anspannen:</strong> Ziehe deinen Bauchnabel leicht ein</li>
    <li><strong>Nicht verkrampfen:</strong> Es ist eine leichte, kontrollierte Spannung</li>
    <li><strong>Bei schweren Zügen:</strong> Mehr Spannung</li>
    <li><strong>An guten Griffen:</strong> Weniger Spannung</li>
  </ul>
</div>

#### Atmung und Spannung

Deine Atmung beeinflusst deine Spannung. Wenn du den Atem anhältst, neigst du dazu, dich zu verkrampfen. Tiefes Atmen hilft dir, bewusst zu entspannen.

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-3">Atemtechnik beim Klettern</h4>
  <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-2 list-disc list-inside">
    <li><strong>Vor dem Zug:</strong> Einatmen</li>
    <li><strong>Während des Zugs:</strong> Ausatmen (hilft bei der Bewegung)</li>
    <li><strong>An gutem Griff:</strong> Tief durchatmen, entspannen</li>
    <li><strong>Niemals:</strong> Den Atem anhalten (führt zu Verkrampfung)</li>
  </ul>
</div>

---

### Zusammenfassung: Die wichtigsten Punkte

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Spannung und Entspannung im Gleichgewicht
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Spannung bei schweren Zügen:</strong> Ganzkörperspannung für Kraft und Stabilität.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Entspannung an guten Griffen:</strong> Nutze gute Positionen zur Erholung.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Wechselspiel:</strong> Der Schlüssel liegt im ständigen Wechsel zwischen beiden.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Bewusstsein:</strong> Frage dich regelmäßig "Brauche ich hier Spannung oder kann ich entspannen?"</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Vermeide Dauer-Verkrampfung:</strong> Unnötige Spannung kostet Energie und führt zu schneller Erschöpfung.</span>
    </li>
  </ul>
</div>

**Denk daran:** Spannung und Entspannung sind keine Gegensätze, sondern zwei Seiten derselben Medaille. Der erfahrene Kletterer weiß, wann er welche braucht. Lerne, bewusst zwischen beiden zu wechseln, und du wirst sofort länger und effizienter klettern können.
    `,
    en: `
### The Secret of Efficiency

One of the biggest differences between beginners and experienced climbers isn\'t just strength or technique, but something much more subtle: **the conscious handling of tension and relaxation**.

Beginners tend to keep their entire body tense all the time – a "constant cramping" that quickly leads to exhaustion. Experienced climbers, on the other hand, know exactly when they need tension and when they can relax.

**This is the key to longer endurance and more efficient climbing.**

---

### Why Is This So Important?

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Activity className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Saving Energy = Climbing Longer</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        Every unnecessary tension costs energy. If you keep your arms, shoulders, and core tense all the time, even when you don\'t need it, you'll quickly get tired.
      </p>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        <strong>The solution:</strong> Only tense when you really need it. Consciously relax on good holds and positions. This way you can climb much longer.
      </p>
    </div>
  </div>
</div>

**Imagine:** You're driving a car and keep the gas pedal pressed all the time, even when going downhill. That's inefficient! The exact same thing happens when you keep your body tense all the time.

---

### When Do You Need Tension?

Full-body tension is essential for certain situations. Here are the most important:

#### 1. Hard Moves and Overhangs

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Power className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Full-Body Tension for Power</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        On hard moves, especially in overhangs, you need full-body tension. This means:
      </p>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-2 list-disc list-inside">
        <li><strong>Core tense:</strong> Your abdominal muscles keep your body stable</li>
        <li><strong>Legs active:</strong> Your legs push and maintain tension</li>
        <li><strong>Arms tense:</strong> But not cramped – only as much as needed</li>
        <li><strong>Whole body as unit:</strong> Everything works together</li>
      </ul>
      <p className="text-sm text-red-700 dark:text-red-300 mt-3">
        <strong>Why?</strong> Without this tension, you would "sag" and your weight would hang completely on your arms. With tension, you use your whole body as one unit.
      </p>
    </div>
  </div>
</div>

#### 2. Dynamic Moves (Dynos)

On dynamic moves, you need explosive tension to gain momentum. The tension is built up just before the jump and then explosively released.

#### 3. Small Holds and Poor Grips

When the holds are small or the grips are poor, you need more tension to avoid slipping. Your whole body must work together to maintain the position.

#### 4. Wide Moves (Reach Moves)

On wide moves, you need tension to stretch your body and achieve maximum reach.

---

### When Should You Relax?

Relaxation is just as important as tension – perhaps even more important, because it allows you to save energy.

#### 1. On Good Holds

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Wind className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Conscious Relaxation</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-3">
        When you have a good hold, use the opportunity to relax:
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
        <li><strong>Relax arms:</strong> Let your arms hang if possible</li>
        <li><strong>Relax shoulders:</strong> Let your shoulders drop</li>
        <li><strong>Relax core:</strong> You don\'t need maximum tension</li>
        <li><strong>Breathe:</strong> Use the time for deep breaths</li>
      </ul>
      <p className="text-sm text-green-700 dark:text-green-300 mt-3">
        <strong>Important:</strong> Relaxing doesn't mean going completely limp. You still need to maintain enough tension to not fall off. But you can hold significantly less tension than on a hard move.
      </p>
    </div>
  </div>
</div>

#### 2. In Stable Positions

When you\'re in a stable position (e.g., both feet on good holds, good grip), you can relax. Your weight is on your feet, you don\'t need maximum tension.

#### 3. Between Hard Moves

Use the moments between hard moves to recover. Even a second of relaxation can help save energy.

#### 4. When "Reading" a Boulder

When you\'re standing in front of a boulder and "reading" (analyzing) the route, relax. You don\'t need tension when you\'re not climbing.

---

### The Art of Alternation

The key lies in the **interplay** between tension and relaxation. Experienced climbers constantly alternate between both:

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">The Rhythm of Climbing</h4>
  <div className="space-y-3 text-sm text-purple-700 dark:text-purple-300">
    <div className="flex items-start gap-2">
      <span className="font-bold">1.</span>
      <span><strong>Preparation:</strong> Stand relaxed, read route</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold">2.</span>
      <span><strong>Movement:</strong> Build tension for the move</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold">3.</span>
      <span><strong>After move:</strong> Relax on good hold</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold">4.</span>
      <span><strong>Next movement:</strong> Build tension again</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold">5.</span>
      <span><strong>Repeat:</strong> This rhythm constantly repeats</span>
    </div>
  </div>
</div>

---

### Practical Exercises

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Zap className="text-green-600 dark:text-green-400" size={24} />
    Exercise 1: Conscious Tensing and Relaxing
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Find an easy boulder and climb it slowly:
  </p>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Before each move: Feel how you build tension</li>
    <li>During the move: Maintain tension</li>
    <li>After the move on good hold: Consciously relax</li>
    <li>Repeat this process with each move</li>
  </ol>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Zap className="text-green-600 dark:text-green-400" size={24} />
    Exercise 2: Body Scan
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    While climbing, regularly scan your body:
  </p>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
    <li>Are my shoulders tense? Can they relax?</li>
    <li>Are my arms cramped? Can they be looser?</li>
    <li>Is my core tense even though I don\'t need it?</li>
    <li>Am I holding unnecessary tension somewhere?</li>
  </ul>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Zap className="text-green-600 dark:text-green-400" size={24} />
    Exercise 3: Find Rest Positions
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Find a boulder and identify the "rest positions":
  </p>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
    <li>Where are the good holds?</li>
    <li>Where can you relax?</li>
    <li>How long can you stay in these positions?</li>
    <li>Consciously use these positions for recovery</li>
  </ul>
</div>

---

### Common Mistakes

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Mistake 1: Constant Cramping</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    The most common mistake is keeping the whole body tense all the time, even when it\'s not necessary.
  </p>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Symptoms:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside mb-3">
    <li>Quick exhaustion</li>
    <li>Burning arms after just a few moves</li>
    <li>Cramped shoulders</li>
    <li>Inability to climb for long</li>
  </ul>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Solution:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
    <li>Create awareness: Regularly ask yourself "Am I too tense?"</li>
    <li>Consciously relax on good holds</li>
    <li>Perform body scan</li>
    <li>Climb slowly and pay attention to tension</li>
  </ul>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Mistake 2: Too Little Tension on Hard Moves</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Some beginners try to relax even when they need tension. This causes them to "sag" and not have enough power.
  </p>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Solution:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
    <li>Learn to recognize when you need tension</li>
    <li>On hard moves: Build full-body tension</li>
    <li>Activate core</li>
    <li>Activate legs</li>
  </ul>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Mistake 3: Not Knowing When to Relax</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Many beginners don\'t know they can relax on good holds. They maintain unnecessary tension.
  </p>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Solution:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
    <li>Learn to recognize good holds</li>
    <li>Consciously use these holds for recovery</li>
    <li>Relax arms, shoulders, core</li>
    <li>Breathe deeply</li>
  </ul>
</div>

---

### Advanced Techniques

#### Core Tension for Stability

Your core is the key to full-body tension. A strong, tense core connects your legs with your arms and allows you to move your whole body as one unit.

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
    <Lightbulb className="text-amber-600 dark:text-amber-400" size={24} />
    How Do You Activate Your Core?
  </h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li><strong>Tense abdominal muscles:</strong> Pull your navel slightly inward</li>
    <li><strong>Don't cramp:</strong> It's a light, controlled tension</li>
    <li><strong>On hard moves:</strong> More tension</li>
    <li><strong>On good holds:</strong> Less tension</li>
  </ul>
</div>

#### Breathing and Tension

Your breathing affects your tension. When you hold your breath, you tend to cramp up. Deep breathing helps you consciously relax.

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-3">Breathing Technique While Climbing</h4>
  <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-2 list-disc list-inside">
    <li><strong>Before move:</strong> Inhale</li>
    <li><strong>During move:</strong> Exhale (helps with movement)</li>
    <li><strong>On good hold:</strong> Breathe deeply, relax</li>
    <li><strong>Never:</strong> Hold your breath (leads to cramping)</li>
  </ul>
</div>

---

### Summary: The Most Important Points

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Tension and Relaxation in Balance
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Tension on hard moves:</strong> Full-body tension for power and stability.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Relaxation on good holds:</strong> Use good positions for recovery.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Interplay:</strong> The key lies in constantly alternating between both.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Awareness:</strong> Regularly ask yourself "Do I need tension here or can I relax?"</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Avoid constant cramping:</strong> Unnecessary tension costs energy and leads to quick exhaustion.</span>
    </li>
  </ul>
</div>

**Remember:** Tension and relaxation aren\'t opposites, but two sides of the same coin. The experienced climber knows when they need which. Learn to consciously alternate between both, and you'll immediately be able to climb longer and more efficiently.
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Spannung und Entspannung meistern",
      description: "Diese Übung hilft dir, ein Bewusstsein für Spannung und Entspannung zu entwickeln.",
      checklist: [
        { text: "Suche dir einen einfachen Boulder und klettere ihn langsam. Bei jedem Zug: Spüre, wie du Spannung aufbaust.", checked: false },
        { text: "Nach jedem Zug an gutem Griff: Bewusst entspannen. Lockere Arme, Schultern, Rumpf.", checked: false },
        { text: "Führe einen Körper-Scan durch: Wo halte ich unnötige Spannung? Kann ich hier entspannen?", checked: false },
        { text: "Identifiziere die Erholungspositionen im Boulder: Wo sind die guten Griffe? Nutze sie bewusst.", checked: false },
        { text: "Vergleiche: Wie fühlt sich dein Körper an, wenn du bewusst zwischen Spannung und Entspannung wechselst?", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Master Tension and Relaxation",
      description: "This exercise helps you develop awareness of tension and relaxation.",
      checklist: [
        { text: "Find an easy boulder and climb it slowly. With each move: Feel how you build tension.", checked: false },
        { text: "After each move on good hold: Consciously relax. Loosen arms, shoulders, core.", checked: false },
        { text: "Perform a body scan: Where am I holding unnecessary tension? Can I relax here?", checked: false },
        { text: "Identify rest positions in the boulder: Where are the good holds? Consciously use them.", checked: false },
        { text: "Compare: How does your body feel when you consciously alternate between tension and relaxation?", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum ist es wichtig, zwischen Spannung und Entspannung zu wechseln?",
        answer: "Jede unnötige Anspannung kostet Energie. Wenn man den ganzen Körper die ganze Zeit angespannt hält, auch wenn es nicht nötig ist, wird man schnell müde. Durch bewusstes Entspannen an guten Griffen kann man Energie sparen und länger klettern."
      },
      {
        question: "Wann brauchst du Ganzkörperspannung?",
        answer: "Ganzkörperspannung ist essentiell bei schweren Zügen, besonders in Überhängen, bei dynamischen Bewegungen, bei kleinen Tritten und schlechten Griffen, sowie bei weiten Zügen. Sie ermöglicht es, den ganzen Körper als Einheit zu nutzen."
      },
      {
        question: "Was ist der häufigste Fehler von Anfängern bezüglich Spannung und Entspannung?",
        answer: "Der häufigste Fehler ist die 'Dauer-Verkrampfung' - den ganzen Körper die ganze Zeit angespannt zu halten, auch wenn es nicht nötig ist. Das führt zu schneller Erschöpfung, brennenden Armen nach wenigen Zügen und der Unfähigkeit, lange zu klettern."
      }
    ],
    en: [
      {
        question: "Why is it important to alternate between tension and relaxation?",
        answer: "Every unnecessary tension costs energy. If you keep your whole body tense all the time, even when it\'s not necessary, you'll quickly get tired. By consciously relaxing on good holds, you can save energy and climb longer."
      },
      {
        question: "When do you need full-body tension?",
        answer: "Full-body tension is essential on hard moves, especially in overhangs, on dynamic movements, on small holds and poor grips, as well as on wide moves. It allows you to use your whole body as one unit."
      },
      {
        question: "What is the most common beginner mistake regarding tension and relaxation?",
        answer: "The most common mistake is 'constant cramping' - keeping the whole body tense all the time, even when it\'s not necessary. This leads to quick exhaustion, burning arms after just a few moves, and the inability to climb for long."
      }
    ]
  }
};


