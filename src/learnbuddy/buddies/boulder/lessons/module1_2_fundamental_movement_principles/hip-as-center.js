
import { Target, Zap, Move, TrendingUp, AlertCircle, Lightbulb, Maximize2 } from 'lucide-react';

export const hipAsCenter = {
  title: {
    de: "Die Hüfte als Zentrum der Bewegung",
    en: "The Hip as the Center of Movement"
  },
  description: {
    de: "Die Hüfte ist dein Kommandobrücke. Lerne, wie ihre Position deine Effizienz, Reichweite und Stabilität bestimmt.",
    en: "The hip is your command center. Learn how its position determines your efficiency, reach, and stability."
  },
  content: {
    de: `
### Die Hüfte: Dein Kommandobrücke

Wenn du dir einen erfahrenen Kletterer ansiehst, wirst du etwas Wichtiges bemerken: Seine Hüfte bewegt sich ständig, sie ist nie statisch. Die Hüfte ist das **Zentrum deines Körpers** und damit das Zentrum jeder Bewegung beim Bouldern.

**Warum ist die Hüfte so wichtig?** Sie verbindet deinen Oberkörper mit deinem Unterkörper. Sie bestimmt, wo dein Schwerpunkt liegt. Sie kontrolliert deine Reichweite. Sie entscheidet über Effizienz oder Verschwendung von Energie.

In dieser Lektion lernst du, wie du deine Hüfte bewusst einsetzt, um besser, effizienter und kraftsparender zu klettern.

---

### Grundprinzip: Hüfte nah an der Wand = Effizienz

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Target className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Das Goldene Prinzip</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        <strong>Je näher deine Hüfte an der Wand ist, desto effizienter kletterst du.</strong> Warum? Weil dein Gewicht dann über deinen Füßen liegt, nicht an deinen Armen hängt.
      </p>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Wenn deine Hüfte weit von der Wand weg ist, musst du dein gesamtes Körpergewicht mit den Armen halten. Das ist extrem kraftraubend und ineffizient.
      </p>
    </div>
  </div>
</div>

**Stell dir vor:** Du stehst auf einer Leiter. Wenn du dich weit von der Leiter weg lehnst, müssen deine Arme dein gesamtes Gewicht halten. Wenn du nah an der Leiter bist, liegt dein Gewicht auf deinen Füßen. Genau dasselbe Prinzip gilt beim Bouldern.

---

### Die drei Dimensionen der Hüftposition

Die Hüfte kann sich in drei Dimensionen bewegen: **vertikal** (hoch/tief), **horizontal** (nah/weit von der Wand) und **rotational** (gedreht). Jede Dimension hat einen spezifischen Zweck.

#### 1. Horizontal: Nah vs. Weit von der Wand

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
    <div className="flex items-center gap-2 mb-3">
      <AlertCircle className="text-red-600 dark:text-red-400" size={24} />
      <h4 className="font-bold text-red-800 dark:text-red-200">❌ Hüfte weit weg</h4>
    </div>
    <ul className="text-sm text-red-700 dark:text-red-300 space-y-2 list-disc list-inside">
      <li>Gewicht hängt an den Armen</li>
      <li>Schnelle Erschöpfung</li>
      <li>Schlechte Balance</li>
      <li>Schwierig, mit Beinen zu drücken</li>
      <li>Mehr Kraftaufwand</li>
    </ul>
  </div>
  
  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
    <div className="flex items-center gap-2 mb-3">
      <Target className="text-green-600 dark:text-green-400" size={24} />
      <h4 className="font-bold text-green-800 dark:text-green-200">✅ Hüfte nah</h4>
    </div>
    <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
      <li>Gewicht liegt auf den Füßen</li>
      <li>Längere Ausdauer</li>
      <li>Bessere Balance</li>
      <li>Einfach, mit Beinen zu drücken</li>
      <li>Weniger Kraftaufwand</li>
    </ul>
  </div>
</div>

**Wie bringst du die Hüfte nah an die Wand?**

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
    <Lightbulb className="text-amber-600 dark:text-amber-400" size={24} />
    Praktische Tipps
  </h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li><strong>Knie beugen:</strong> Beuge deine Knie leicht, um näher zur Wand zu kommen</li>
    <li><strong>Hüfte aktivieren:</strong> Spanne deine Bauchmuskeln an, um die Hüfte zur Wand zu bringen</li>
    <li><strong>Füße hoch:</strong> Stelle deine Füße höher auf die Tritte, um die Hüfte näher zu bringen</li>
    <li><strong>Bewusstsein:</strong> Frage dich ständig: "Ist meine Hüfte nah genug?"</li>
  </ul>
</div>

#### 2. Vertikal: Hoch vs. Tief

Die vertikale Position deiner Hüfte bestimmt, wie viel Gewicht auf deinen Füßen liegt.

<div className="space-y-4 my-6">
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Hüfte tief = Mehr Gewicht auf Füßen</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Wenn deine Hüfte tief ist (Knie gebeugt), liegt mehr Gewicht auf deinen Füßen. Das ist ideal für:
    </p>
    <ul className="text-sm text-stone-600 dark:text-stone-400 mt-2 space-y-1 list-disc list-inside">
      <li>Ruhepositionen (Erholung)</li>
      <li>Stabile Standpositionen</li>
      <li>Vorbereitung auf dynamische Bewegungen</li>
    </ul>
  </div>
  
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Hüfte hoch = Mehr Reichweite</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Wenn deine Hüfte hoch ist (Knie gestreckt), kannst du weiter greifen. Das ist nützlich für:
    </p>
    <ul className="text-sm text-stone-600 dark:text-stone-400 mt-2 space-y-1 list-disc list-inside">
      <li>Weite Griffe erreichen</li>
      <li>Über Hindernisse hinweg greifen</li>
      <li>Dynamische Bewegungen</li>
    </ul>
  </div>
</div>

**Wichtig:** Die vertikale Position sollte sich ständig ändern, je nachdem, was du gerade brauchst. Statische Hüften sind ineffizient!

#### 3. Rotational: Eindrehen der Hüfte

Das Eindrehen der Hüfte ist eine der fortgeschrittensten und wichtigsten Techniken beim Bouldern. Es maximiert deine Reichweite und macht Bewegungen effizienter.

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500 my-6">
  <div className="flex items-start gap-4">
    <Move className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Was ist Eindrehen?</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        Eindrehen bedeutet, deine Hüfte zur Wand zu drehen, sodass eine Seite deines Körpers näher zur Wand kommt. Das bringt mehrere Vorteile:
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
        <li><strong>Mehr Reichweite:</strong> Du kannst weiter greifen</li>
        <li><strong>Bessere Balance:</strong> Dein Schwerpunkt verschiebt sich</li>
        <li><strong>Weniger Kraft:</strong> Du nutzt deine Körperstruktur besser</li>
        <li><strong>Mehr Stabilität:</strong> Eine Seite ist fest verankert</li>
      </ul>
    </div>
  </div>
</div>

**Wie drehst du dich ein?**

<div className="space-y-4 my-6">
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Beispiel: Nach rechts greifen</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
      Wenn du nach einem Griff rechts von dir greifen willst:
    </p>
    <ol className="text-sm text-stone-600 dark:text-stone-400 space-y-1 list-decimal list-inside">
      <li>Drehe deine rechte Hüfte zur Wand</li>
      <li>Dein rechtes Bein wird zur Wand zeigen</li>
      <li>Dein linker Arm kann jetzt weiter greifen</li>
      <li>Dein rechtes Bein drückt dich zur Wand</li>
    </ol>
  </div>
  
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Beispiel: Nach links greifen</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
      Wenn du nach einem Griff links von dir greifen willst:
    </p>
    <ol className="text-sm text-stone-600 dark:text-stone-400 space-y-1 list-decimal list-inside">
      <li>Drehe deine linke Hüfte zur Wand</li>
      <li>Dein linkes Bein wird zur Wand zeigen</li>
      <li>Dein rechter Arm kann jetzt weiter greifen</li>
      <li>Dein linkes Bein drückt dich zur Wand</li>
    </ol>
  </div>
</div>

---

### Die Hüfte bestimmt die Körperausrichtung

Deine Hüftposition bestimmt, wie dein gesamter Körper ausgerichtet ist. Das ist wichtig für:

#### Frontale Wand (vertikal)

<div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Ideal: Hüfte nah, Körper aufrecht</h4>
  <p className="text-sm text-teal-700 dark:text-teal-300">
    An einer vertikalen Wand sollte deine Hüfte nah sein und dein Körper relativ aufrecht. Das ermöglicht es dir, dein Gewicht auf deine Füße zu verlagern.
  </p>
</div>

#### Überhang

<div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">Ideal: Hüfte hoch, Körper parallel zur Wand</h4>
  <p className="text-sm text-orange-700 dark:text-orange-300">
    In einem Überhang muss deine Hüfte hoch sein, damit deine Füße Druck auf die Tritte ausüben können. Dein Körper sollte parallel zur Wand sein.
  </p>
</div>

#### Slab (flache Wand)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Ideal: Hüfte tief, Körper nah</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    An einer flachen Wand (Slab) sollte deine Hüfte tief und sehr nah an der Wand sein. Das maximiert die Reibung und Stabilität.
  </p>
</div>

---

### Praktische Übungen zur Hüftkontrolle

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Zap className="text-green-600 dark:text-green-400" size={24} />
    Übung 1: Hüfte nah vs. weit
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Suche dir einen einfachen Boulder und klettere ihn zweimal:
  </p>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li><strong>Erster Durchgang:</strong> Klettere mit der Hüfte bewusst weit von der Wand weg. Spüre, wie schwer es ist.</li>
    <li><strong>Zweiter Durchgang:</strong> Klettere mit der Hüfte bewusst nah an der Wand. Spüre den Unterschied!</li>
  </ol>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Zap className="text-green-600 dark:text-green-400" size={24} />
    Übung 2: Eindrehen üben
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Suche dir einen Boulder mit seitlichen Griffen:
  </p>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Stehe vor einem seitlichen Griff</li>
    <li>Versuche, ohne Eindrehen zu greifen (schwer!)</li>
    <li>Jetzt drehe dich ein: Hüfte zur Wand drehen</li>
    <li>Versuche erneut zu greifen (viel einfacher!)</li>
  </ol>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Zap className="text-green-600 dark:text-green-400" size={24} />
    Übung 3: Hüftbewegung beobachten
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Beobachte erfahrene Kletterer:
  </p>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
    <li>Wie bewegt sich ihre Hüfte?</li>
    <li>Ist sie immer nah an der Wand?</li>
    <li>Wann drehen sie sich ein?</li>
    <li>Wie ändert sich die Hüftposition bei verschiedenen Wandwinkeln?</li>
  </ul>
</div>

---

### Häufige Fehler

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Fehler 1: Statische Hüfte</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Viele Anfänger lassen ihre Hüfte in einer Position "einfrieren" und bewegen nur Arme und Beine. Das ist ineffizient.
  </p>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Lösung:</p>
  <p className="text-sm text-red-700 dark:text-red-300">
    Die Hüfte sollte sich ständig bewegen und an jede Situation anpassen. Sie ist nicht statisch, sondern dynamisch!
  </p>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Fehler 2: Hüfte zu weit weg</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Der häufigste Fehler ist, die Hüfte zu weit von der Wand zu lassen, besonders bei schwierigen Zügen.
  </p>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Lösung:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
    <li>Bewusstsein schaffen: Frage dich ständig "Ist meine Hüfte nah genug?"</li>
    <li>Knie beugen, um näher zu kommen</li>
    <li>Füße höher stellen</li>
    <li>Bauchmuskeln anspannen</li>
  </ul>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Fehler 3: Nicht eindrehen</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Viele Anfänger versuchen, seitliche Griffe zu erreichen, ohne sich einzudrehen. Das kostet unnötig Kraft.
  </p>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Lösung:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
    <li>Bei seitlichen Griffen immer eindrehen</li>
    <li>Hüfte zur Wand drehen</li>
    <li>Spüren, wie viel weiter du greifen kannst</li>
  </ul>
</div>

---

### Zusammenfassung: Die wichtigsten Punkte

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Deine Hüfte ist dein Kommandobrücke
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Hüfte nah = Effizienz</strong> - Je näher deine Hüfte an der Wand ist, desto effizienter kletterst du.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Drei Dimensionen:</strong> Horizontal (nah/weit), vertikal (hoch/tief), rotational (gedreht).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Eindrehen maximiert Reichweite</strong> - Drehe deine Hüfte zur Wand, um weiter greifen zu können.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Dynamisch, nicht statisch</strong> - Die Hüfte sollte sich ständig bewegen und anpassen.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Bewusstsein schaffen</strong> - Frage dich ständig: "Wo ist meine Hüfte? Ist sie optimal positioniert?"</span>
    </li>
  </ul>
</div>

**Denk daran:** Die Hüftposition ist nicht etwas, das du einmal richtig machst und dann vergisst. Sie ist ein ständiger Prozess der Anpassung. Jeder Zug erfordert eine andere Hüftposition. Lerne, sie bewusst zu kontrollieren, und du wirst sofort effizienter klettern.
    `,
    en: `
### The Hip: Your Command Center

When you watch an experienced climber, you'll notice something important: Their hip is constantly moving, never static. The hip is the **center of your body** and thus the center of every movement in bouldering.

**Why is the hip so important?** It connects your upper body with your lower body. It determines where your center of gravity lies. It controls your reach. It decides between efficiency or waste of energy.

In this lesson, you'll learn how to consciously use your hip to climb better, more efficiently, and more energy-saving.

---

### Basic Principle: Hip Close to Wall = Efficiency

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Target className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">The Golden Principle</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        <strong>The closer your hip is to the wall, the more efficiently you climb.</strong> Why? Because your weight then lies over your feet, not hanging on your arms.
      </p>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        If your hip is far from the wall, you have to hold your entire body weight with your arms. This is extremely energy-consuming and inefficient.
      </p>
    </div>
  </div>
</div>

**Imagine:** You're standing on a ladder. If you lean far away from the ladder, your arms have to hold your entire weight. If you're close to the ladder, your weight is on your feet. The exact same principle applies in bouldering.

---

### The Three Dimensions of Hip Position

The hip can move in three dimensions: **vertical** (high/low), **horizontal** (close/far from wall), and **rotational** (twisted). Each dimension has a specific purpose.

#### 1. Horizontal: Close vs. Far from Wall

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
    <div className="flex items-center gap-2 mb-3">
      <AlertCircle className="text-red-600 dark:text-red-400" size={24} />
      <h4 className="font-bold text-red-800 dark:text-red-200">❌ Hip Far Away</h4>
    </div>
    <ul className="text-sm text-red-700 dark:text-red-300 space-y-2 list-disc list-inside">
      <li>Weight hangs on arms</li>
      <li>Quick exhaustion</li>
      <li>Poor balance</li>
      <li>Difficult to push with legs</li>
      <li>More energy expenditure</li>
    </ul>
  </div>
  
  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
    <div className="flex items-center gap-2 mb-3">
      <Target className="text-green-600 dark:text-green-400" size={24} />
      <h4 className="font-bold text-green-800 dark:text-green-200">✅ Hip Close</h4>
    </div>
    <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
      <li>Weight lies on feet</li>
      <li>Longer endurance</li>
      <li>Better balance</li>
      <li>Easy to push with legs</li>
      <li>Less energy expenditure</li>
    </ul>
  </div>
</div>

**How do you bring the hip close to the wall?**

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
    <Lightbulb className="text-amber-600 dark:text-amber-400" size={24} />
    Practical Tips
  </h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li><strong>Bend knees:</strong> Bend your knees slightly to get closer to the wall</li>
    <li><strong>Activate hip:</strong> Tense your abdominal muscles to bring the hip to the wall</li>
    <li><strong>Feet high:</strong> Place your feet higher on the holds to bring the hip closer</li>
    <li><strong>Awareness:</strong> Constantly ask yourself: "Is my hip close enough?"</li>
  </ul>
</div>

#### 2. Vertical: High vs. Low

The vertical position of your hip determines how much weight is on your feet.

<div className="space-y-4 my-6">
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Hip Low = More Weight on Feet</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      If your hip is low (knees bent), more weight is on your feet. This is ideal for:
    </p>
    <ul className="text-sm text-stone-600 dark:text-stone-400 mt-2 space-y-1 list-disc list-inside">
      <li>Rest positions (recovery)</li>
      <li>Stable standing positions</li>
      <li>Preparation for dynamic movements</li>
    </ul>
  </div>
  
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Hip High = More Reach</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      If your hip is high (knees extended), you can reach further. This is useful for:
    </p>
    <ul className="text-sm text-stone-600 dark:text-stone-400 mt-2 space-y-1 list-disc list-inside">
      <li>Reaching far holds</li>
      <li>Reaching over obstacles</li>
      <li>Dynamic movements</li>
    </ul>
  </div>
</div>

**Important:** The vertical position should constantly change depending on what you need. Static hips are inefficient!

#### 3. Rotational: Twisting the Hip

Twisting the hip is one of the most advanced and important techniques in bouldering. It maximizes your reach and makes movements more efficient.

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500 my-6">
  <div className="flex items-start gap-4">
    <Move className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">What is Twisting?</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        Twisting means turning your hip toward the wall so that one side of your body comes closer to the wall. This brings several advantages:
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
        <li><strong>More reach:</strong> You can reach further</li>
        <li><strong>Better balance:</strong> Your center of gravity shifts</li>
        <li><strong>Less force:</strong> You use your body structure better</li>
        <li><strong>More stability:</strong> One side is firmly anchored</li>
      </ul>
    </div>
  </div>
</div>

**How do you twist?**

<div className="space-y-4 my-6">
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Example: Reaching Right</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
      If you want to reach a hold to your right:
    </p>
    <ol className="text-sm text-stone-600 dark:text-stone-400 space-y-1 list-decimal list-inside">
      <li>Turn your right hip toward the wall</li>
      <li>Your right leg will point toward the wall</li>
      <li>Your left arm can now reach further</li>
      <li>Your right leg pushes you toward the wall</li>
    </ol>
  </div>
  
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Example: Reaching Left</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
      If you want to reach a hold to your left:
    </p>
    <ol className="text-sm text-stone-600 dark:text-stone-400 space-y-1 list-decimal list-inside">
      <li>Turn your left hip toward the wall</li>
      <li>Your left leg will point toward the wall</li>
      <li>Your right arm can now reach further</li>
      <li>Your left leg pushes you toward the wall</li>
    </ol>
  </div>
</div>

---

### The Hip Determines Body Alignment

Your hip position determines how your entire body is aligned. This is important for:

#### Vertical Wall

<div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Ideal: Hip Close, Body Upright</h4>
  <p className="text-sm text-teal-700 dark:text-teal-300">
    On a vertical wall, your hip should be close and your body relatively upright. This allows you to shift your weight onto your feet.
  </p>
</div>

#### Overhang

<div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">Ideal: Hip High, Body Parallel to Wall</h4>
  <p className="text-sm text-orange-700 dark:text-orange-300">
    In an overhang, your hip must be high so your feet can apply pressure to the holds. Your body should be parallel to the wall.
  </p>
</div>

#### Slab (Shallow Wall)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Ideal: Hip Low, Body Close</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    On a shallow wall (slab), your hip should be low and very close to the wall. This maximizes friction and stability.
  </p>
</div>

---

### Practical Exercises for Hip Control

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Zap className="text-green-600 dark:text-green-400" size={24} />
    Exercise 1: Hip Close vs. Far
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Find an easy boulder and climb it twice:
  </p>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li><strong>First run:</strong> Climb with your hip consciously far from the wall. Feel how hard it is.</li>
    <li><strong>Second run:</strong> Climb with your hip consciously close to the wall. Feel the difference!</li>
  </ol>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Zap className="text-green-600 dark:text-green-400" size={24} />
    Exercise 2: Practice Twisting
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Find a boulder with side holds:
  </p>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Stand in front of a side hold</li>
    <li>Try to reach without twisting (hard!)</li>
    <li>Now twist: Turn hip toward wall</li>
    <li>Try reaching again (much easier!)</li>
  </ol>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Zap className="text-green-600 dark:text-green-400" size={24} />
    Exercise 3: Observe Hip Movement
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Observe experienced climbers:
  </p>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
    <li>How does their hip move?</li>
    <li>Is it always close to the wall?</li>
    <li>When do they twist?</li>
    <li>How does hip position change at different wall angles?</li>
  </ul>
</div>

---

### Common Mistakes

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Mistake 1: Static Hip</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Many beginners "freeze" their hip in one position and only move arms and legs. This is inefficient.
  </p>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Solution:</p>
  <p className="text-sm text-red-700 dark:text-red-300">
    The hip should constantly move and adapt to each situation. It's not static, but dynamic!
  </p>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Mistake 2: Hip Too Far Away</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    The most common mistake is leaving the hip too far from the wall, especially on difficult moves.
  </p>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Solution:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
    <li>Create awareness: Constantly ask yourself "Is my hip close enough?"</li>
    <li>Bend knees to get closer</li>
    <li>Place feet higher</li>
    <li>Tense abdominal muscles</li>
  </ul>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Mistake 3: Not Twisting</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Many beginners try to reach side holds without twisting. This wastes unnecessary energy.
  </p>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Solution:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
    <li>Always twist on side holds</li>
    <li>Turn hip toward wall</li>
    <li>Feel how much further you can reach</li>
  </ul>
</div>

---

### Summary: The Most Important Points

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Your Hip is Your Command Center
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Hip close = efficiency</strong> - The closer your hip is to the wall, the more efficiently you climb.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Three dimensions:</strong> Horizontal (close/far), vertical (high/low), rotational (twisted).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Twisting maximizes reach</strong> - Turn your hip toward the wall to reach further.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Dynamic, not static</strong> - The hip should constantly move and adapt.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Create awareness</strong> - Constantly ask yourself: "Where is my hip? Is it optimally positioned?"</span>
    </li>
  </ul>
</div>

**Remember:** Hip position isn't something you do right once and then forget. It's a constant process of adaptation. Every move requires a different hip position. Learn to control it consciously, and you'll immediately climb more efficiently.
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Hüftkontrolle entwickeln",
      description: "Diese Übung hilft dir, ein Bewusstsein für die Hüftposition zu entwickeln.",
      checklist: [
        { text: "Suche dir einen einfachen Boulder und klettere ihn einmal mit bewusst weit von der Wand entfernter Hüfte.", checked: false },
        { text: "Klettere denselben Boulder ein zweites Mal mit bewusst nah an der Wand positionierter Hüfte.", checked: false },
        { text: "Spüre den Unterschied: Wie fühlt sich dein Körper an? Wo liegt dein Gewicht?", checked: false },
        { text: "Suche dir einen Boulder mit seitlichen Griffen und übe das Eindrehen: Drehe deine Hüfte zur Wand, bevor du greifst.", checked: false },
        { text: "Beobachte erfahrene Kletterer: Wie bewegen sie ihre Hüfte? Wann drehen sie sich ein?", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Develop Hip Control",
      description: "This exercise helps you develop awareness of hip position.",
      checklist: [
        { text: "Find an easy boulder and climb it once with your hip consciously far from the wall.", checked: false },
        { text: "Climb the same boulder a second time with your hip consciously positioned close to the wall.", checked: false },
        { text: "Feel the difference: How does your body feel? Where is your weight?", checked: false },
        { text: "Find a boulder with side holds and practice twisting: Turn your hip toward the wall before reaching.", checked: false },
        { text: "Observe experienced climbers: How do they move their hip? When do they twist?", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum ist es wichtig, die Hüfte nah an der Wand zu haben?",
        answer: "Wenn die Hüfte nah an der Wand ist, liegt das Gewicht auf den Füßen statt an den Armen. Das ist viel effizienter und kraftsparender, da die Beine stärker sind als die Arme."
      },
      {
        question: "Was bedeutet 'Eindrehen' beim Bouldern?",
        answer: "Eindrehen bedeutet, die Hüfte zur Wand zu drehen, sodass eine Seite des Körpers näher zur Wand kommt. Das maximiert die Reichweite und macht Bewegungen effizienter."
      },
      {
        question: "In welchen drei Dimensionen kann sich die Hüfte bewegen?",
        answer: "Die Hüfte kann sich horizontal (nah/weit von der Wand), vertikal (hoch/tief) und rotational (gedreht/eingedreht) bewegen. Jede Dimension hat einen spezifischen Zweck für effizientes Klettern."
      }
    ],
    en: [
      {
        question: "Why is it important to have the hip close to the wall?",
        answer: "When the hip is close to the wall, the weight lies on the feet instead of on the arms. This is much more efficient and energy-saving, as the legs are stronger than the arms."
      },
      {
        question: "What does 'twisting' mean in bouldering?",
        answer: "Twisting means turning the hip toward the wall so that one side of the body comes closer to the wall. This maximizes reach and makes movements more efficient."
      },
      {
        question: "In which three dimensions can the hip move?",
        answer: "The hip can move horizontally (close/far from wall), vertically (high/low), and rotationally (twisted). Each dimension has a specific purpose for efficient climbing."
      }
    ]
  }
};

