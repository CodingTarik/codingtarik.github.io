
import { Footprints, Zap, Target, AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';

export const movementFromFeet = {
  title: {
    de: "Bewegung aus den Füßen einleiten",
    en: "Initiating Movement from the Feet"
  },
  description: {
    de: "Das fundamentale Prinzip: Beine drücken, Arme balancieren. Lerne, wie du die Kraft aus den größten Muskelgruppen nutzt und effizienter kletterst.",
    en: "The fundamental principle: legs push, arms balance. Learn how to use power from the largest muscle groups and climb more efficiently."
  },
  content: {
    de: `
### Das wichtigste Prinzip beim Bouldern

Wenn du dir einen erfahrenen Kletterer ansiehst, fällt dir vielleicht auf, dass er oft mühelos aussieht, während Anfänger nach wenigen Zügen erschöpft sind. Der Unterschied liegt nicht nur in der Kraft, sondern vor allem in der **Effizienz der Bewegung**. Und hier kommt das erste und wichtigste Prinzip ins Spiel:

**"Beine drücken, Arme balancieren"**

Dieses Mantra sollte dein ständiger Begleiter werden. Es ist der Schlüssel zu effizientem, kraftsparendem Klettern.

---

### Warum die Füße so wichtig sind

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Footprints className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Die Anatomie der Kraft</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        Deine Beine sind die stärksten Muskelgruppen deines Körpers. Die Oberschenkelmuskulatur (Quadrizeps) und die Gesäßmuskeln sind um ein Vielfaches stärker als deine Arme. Warum also sollten wir diese Kraftquelle ignorieren?
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li><strong>Oberschenkel:</strong> Die größten Muskeln deines Körpers</li>
        <li><strong>Gesäß:</strong> Dein stärkster Muskel überhaupt</li>
        <li><strong>Waden:</strong> Stabilisieren und geben Antrieb</li>
        <li><strong>Arme:</strong> Relativ klein, schnell erschöpft</li>
      </ul>
    </div>
  </div>
</div>

**Der häufigste Fehler von Anfängern:** Sie ziehen sich mit den Armen nach oben, als würden sie Klimmzüge machen. Das führt dazu, dass die Arme nach wenigen Minuten brennen und die Beine praktisch ungenutzt bleiben.

**Die Lösung:** Nutze deine Beine, um dich nach oben zu drücken, und deine Arme, um das Gleichgewicht zu halten und dich zu positionieren.

---

### Das Prinzip verstehen: Drücken vs. Ziehen

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
    <div className="flex items-center gap-2 mb-3">
      <AlertCircle className="text-red-600 dark:text-red-400" size={24} />
      <h4 className="font-bold text-red-800 dark:text-red-200">❌ Falsch: Ziehen mit den Armen</h4>
    </div>
    <ul className="text-sm text-red-700 dark:text-red-300 space-y-2 list-disc list-inside">
      <li>Arme übernehmen die Hauptarbeit</li>
      <li>Schnelle Erschöpfung (Arme sind klein!)</li>
      <li>Ineffizienter Energieverbrauch</li>
      <li>Schlechte Körperposition</li>
      <li>Hüfte hängt weit von der Wand weg</li>
    </ul>
  </div>
  
  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
    <div className="flex items-center gap-2 mb-3">
      <Target className="text-green-600 dark:text-green-400" size={24} />
      <h4 className="font-bold text-green-800 dark:text-green-200">✅ Richtig: Drücken mit den Beinen</h4>
    </div>
    <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
      <li>Beine übernehmen die Hauptarbeit</li>
      <li>Längere Ausdauer (Beine sind stark!)</li>
      <li>Effizienter Energieverbrauch</li>
      <li>Bessere Körperposition</li>
      <li>Hüfte nah an der Wand</li>
    </ul>
  </div>
</div>

---

### Praktische Anwendung: Wie du es umsetzt

#### 1. Bewusstsein schaffen: Wann ziehst du, wann drückst du?

Der erste Schritt ist, ein **Bewusstsein** dafür zu entwickeln, wann du ziehst und wann du drückst. Viele Anfänger machen das komplett unbewusst.

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
    <Lightbulb className="text-amber-600 dark:text-amber-400" size={24} />
    Übung: Selbstbeobachtung
  </h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
    Bei deiner nächsten Session, nimm dir einen einfachen Boulder und klettere ihn langsam. Bei jedem Zug, frage dich:
  </p>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li><strong>"Ziehe ich mich gerade mit den Armen hoch?"</strong> → Wenn ja, STOPP! Überlege, wie du stattdessen mit den Beinen drücken kannst.</li>
    <li><strong>"Spüre ich die Kraft in meinen Oberschenkeln?"</strong> → Wenn nein, nutzt du deine Beine nicht optimal.</li>
    <li><strong>"Sind meine Arme entspannt oder angespannt?"</strong> → Sie sollten hauptsächlich balancieren, nicht ziehen.</li>
  </ul>
</div>

#### 2. Die Beine aktivieren: Von unten nach oben denken

Stelle dir vor, du stehst auf dem Boden und willst auf einen Stuhl steigen. Was machst du? Du drückst dich mit den Beinen hoch, nicht mit den Armen. Genau dasselbe Prinzip gilt an der Wand.

<div className="space-y-4 my-6">
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Schritt 1: Gute Fußposition</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Stelle deinen Fuß so auf den Tritt, dass du möglichst viel Kontaktfläche hast. Die Zehenspitze zeigt zur Wand (oder leicht nach innen gedreht). Je mehr Fußfläche auf dem Tritt ist, desto mehr Kraft kannst du übertragen.
    </p>
  </div>
  
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Schritt 2: Gewicht auf den Fuß verlagern</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Bevor du dich bewegst, verlagere dein Gewicht auf den Fuß, der drücken soll. Du solltest spüren, wie dein Oberschenkel aktiv wird. Das ist das Signal, dass du bereit bist.
    </p>
  </div>
  
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Schritt 3: Mit den Beinen drücken</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Jetzt drückst du dich mit dem Bein nach oben. Die Arme sind dabei relativ entspannt und halten hauptsächlich das Gleichgewicht. Du solltest das Gefühl haben, dass du dich "hochstemmst", nicht "hochziehst".
    </p>
  </div>
</div>

#### 3. Häufige Fehler und wie du sie vermeidest

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Fehler 1: Zu kleine Tritte</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Wenn die Tritte sehr klein sind, ist es schwierig, mit den Beinen zu drücken. In diesem Fall musst du lernen, mit der Zehenspitze präzise zu treten und trotzdem Druck zu erzeugen.
  </p>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Lösung:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
    <li>Nutze die Zehenspitze präzise (nicht den ganzen Fuß)</li>
    <li>Erzeuge Druck durch aktive Beinmuskulatur</li>
    <li>Kombiniere Beindruck mit Armbewegung</li>
  </ul>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Fehler 2: Hüfte zu weit von der Wand</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Wenn deine Hüfte weit von der Wand weg ist, kannst du nicht effektiv mit den Beinen drücken. Dein Gewicht hängt dann an den Armen.
  </p>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Lösung:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
    <li>Hüfte nah an die Wand bringen</li>
    <li>Knie leicht beugen, um näher zur Wand zu kommen</li>
    <li>Gewicht über die Füße verlagern</li>
  </ul>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Fehler 3: Zu schnell, zu hektisch</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Wenn du zu schnell kletterst, hast du keine Zeit, die Beine richtig einzusetzen. Du fällst zurück in alte Muster (Ziehen mit den Armen).
  </p>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Lösung:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
    <li>Langsam klettern, jeden Zug bewusst ausführen</li>
    <li>Vor jeder Bewegung kurz innehalten</li>
    <li>Überlegen: "Wie kann ich hier mit den Beinen drücken?"</li>
  </ul>
</div>

---

### Fortgeschrittene Techniken

Sobald du das Grundprinzip verinnerlicht hast, kannst du es auf verschiedene Situationen anwenden:

#### Dynamische Bewegungen

Auch bei dynamischen Zügen (Dynos) kommt die Kraft aus den Beinen. Du drückst dich mit den Beinen ab, um Schwung zu bekommen, nicht mit den Armen.

#### Überhänge

In Überhängen ist es besonders wichtig, mit den Beinen zu drücken. Die Beine halten dein Gewicht, während die Arme dich nur positionieren.

#### Traversen

Bei Traversen (seitwärts klettern) drückst du dich mit den Beinen seitwärts ab, nicht nach oben. Das Prinzip bleibt dasselbe: Beine drücken, Arme balancieren.

---

### Zusammenfassung: Die wichtigsten Punkte

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    Dein neues Mantra
  </h3>
  <ul className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-green-800 dark:text-green-200">1.</span>
      <span><strong>Beine drücken, Arme balancieren</strong> - Das ist die Grundregel für effizientes Klettern.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-green-800 dark:text-green-200">2.</span>
      <span><strong>Bewusstsein schaffen</strong> - Frage dich bei jedem Zug: "Ziehe ich oder drücke ich?"</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-green-800 dark:text-green-200">3.</span>
      <span><strong>Gewicht auf die Füße</strong> - Bevor du dich bewegst, verlagere dein Gewicht auf den drückenden Fuß.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-green-800 dark:text-green-200">4.</span>
      <span><strong>Langsam üben</strong> - Geschwindigkeit kommt später. Erst die Technik, dann die Geschwindigkeit.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-green-800 dark:text-green-200">5.</span>
      <span><strong>Geduld haben</strong> - Dieses Prinzip zu verinnerlichen braucht Zeit. Gib nicht auf!</span>
    </li>
  </ul>
</div>

**Denk daran:** Jeder erfahrene Kletterer hat einmal als Anfänger angefangen und genau diese Lektion lernen müssen. Es ist normal, dass es Zeit braucht. Der Schlüssel ist, bewusst zu üben und nicht in alte Muster zurückzufallen.
    `,
    en: `
### The Most Important Principle in Bouldering

When you watch an experienced climber, you might notice they often look effortless, while beginners are exhausted after just a few moves. The difference isn't just strength, but primarily in the **efficiency of movement**. And that's where the first and most important principle comes in:

**"Legs push, arms balance"**

This mantra should become your constant companion. It's the key to efficient, energy-saving climbing.

---

### Why Feet Are So Important

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Footprints className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">The Anatomy of Power</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        Your legs are the strongest muscle groups in your body. Your thigh muscles (quadriceps) and glutes are many times stronger than your arms. So why should we ignore this power source?
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li><strong>Thighs:</strong> The largest muscles in your body</li>
        <li><strong>Glutes:</strong> Your strongest muscle overall</li>
        <li><strong>Calves:</strong> Stabilize and provide drive</li>
        <li><strong>Arms:</strong> Relatively small, quickly exhausted</li>
      </ul>
    </div>
  </div>
</div>

**The most common beginner mistake:** They pull themselves up with their arms as if doing pull-ups. This causes the arms to burn after just a few minutes while the legs remain practically unused.

**The solution:** Use your legs to push yourself up, and your arms to maintain balance and position yourself.

---

### Understanding the Principle: Pushing vs. Pulling

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
    <div className="flex items-center gap-2 mb-3">
      <AlertCircle className="text-red-600 dark:text-red-400" size={24} />
      <h4 className="font-bold text-red-800 dark:text-red-200">❌ Wrong: Pulling with Arms</h4>
    </div>
    <ul className="text-sm text-red-700 dark:text-red-300 space-y-2 list-disc list-inside">
      <li>Arms do the main work</li>
      <li>Quick exhaustion (arms are small!)</li>
      <li>Inefficient energy consumption</li>
      <li>Poor body position</li>
      <li>Hips hang far from the wall</li>
    </ul>
  </div>
  
  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
    <div className="flex items-center gap-2 mb-3">
      <Target className="text-green-600 dark:text-green-400" size={24} />
      <h4 className="font-bold text-green-800 dark:text-green-200">✅ Right: Pushing with Legs</h4>
    </div>
    <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
      <li>Legs do the main work</li>
      <li>Longer endurance (legs are strong!)</li>
      <li>Efficient energy consumption</li>
      <li>Better body position</li>
      <li>Hips close to the wall</li>
    </ul>
  </div>
</div>

---

### Practical Application: How to Implement It

#### 1. Creating Awareness: When Do You Pull, When Do You Push?

The first step is to develop **awareness** of when you're pulling and when you're pushing. Many beginners do this completely unconsciously.

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
    <Lightbulb className="text-amber-600 dark:text-amber-400" size={24} />
    Exercise: Self-Observation
  </h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
    In your next session, take an easy boulder and climb it slowly. With each move, ask yourself:
  </p>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li><strong>"Am I pulling myself up with my arms right now?"</strong> → If yes, STOP! Think about how you can push with your legs instead.</li>
    <li><strong>"Do I feel the power in my thighs?"</strong> → If no, you're not using your legs optimally.</li>
    <li><strong>"Are my arms relaxed or tense?"</strong> → They should mainly balance, not pull.</li>
  </ul>
</div>

#### 2. Activating the Legs: Thinking from Bottom to Top

Imagine you're standing on the ground and want to step onto a chair. What do you do? You push yourself up with your legs, not with your arms. The exact same principle applies on the wall.

<div className="space-y-4 my-6">
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Step 1: Good Foot Position</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Place your foot on the hold so you have as much contact surface as possible. The toe points toward the wall (or slightly turned inward). The more foot surface on the hold, the more power you can transfer.
    </p>
  </div>
  
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Step 2: Shift Weight onto the Foot</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Before you move, shift your weight onto the foot that should push. You should feel your thigh activate. That's the signal that you're ready.
    </p>
  </div>
  
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Step 3: Push with Your Legs</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Now push yourself up with your leg. Your arms are relatively relaxed and mainly maintain balance. You should feel like you're "pushing yourself up," not "pulling yourself up."
    </p>
  </div>
</div>

#### 3. Common Mistakes and How to Avoid Them

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Mistake 1: Too Small Holds</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    When the holds are very small, it's difficult to push with your legs. In this case, you need to learn to step precisely with your toe and still generate pressure.
  </p>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Solution:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
    <li>Use your toe precisely (not the whole foot)</li>
    <li>Generate pressure through active leg muscles</li>
    <li>Combine leg push with arm movement</li>
  </ul>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Mistake 2: Hips Too Far from Wall</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    If your hips are far from the wall, you can't effectively push with your legs. Your weight then hangs on your arms.
  </p>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Solution:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
    <li>Bring hips close to the wall</li>
    <li>Bend knees slightly to get closer to the wall</li>
    <li>Shift weight over your feet</li>
  </ul>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Mistake 3: Too Fast, Too Hectic</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    If you climb too fast, you don't have time to use your legs properly. You fall back into old patterns (pulling with arms).
  </p>
  <p className="text-sm font-semibold text-red-800 dark:text-red-200">Solution:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
    <li>Climb slowly, execute each move consciously</li>
    <li>Pause briefly before each movement</li>
    <li>Think: "How can I push with my legs here?"</li>
  </ul>
</div>

---

### Advanced Techniques

Once you've internalized the basic principle, you can apply it to various situations:

#### Dynamic Moves

Even in dynamic moves (dynos), the power comes from your legs. You push off with your legs to gain momentum, not with your arms.

#### Overhangs

In overhangs, it's especially important to push with your legs. Your legs hold your weight while your arms only position you.

#### Traverses

In traverses (climbing sideways), you push sideways with your legs, not upward. The principle remains the same: legs push, arms balance.

---

### Summary: The Most Important Points

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    Your New Mantra
  </h3>
  <ul className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-green-800 dark:text-green-200">1.</span>
      <span><strong>Legs push, arms balance</strong> - This is the basic rule for efficient climbing.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-green-800 dark:text-green-200">2.</span>
      <span><strong>Create awareness</strong> - Ask yourself with each move: "Am I pulling or pushing?"</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-green-800 dark:text-green-200">3.</span>
      <span><strong>Weight on feet</strong> - Before you move, shift your weight onto the pushing foot.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-green-800 dark:text-green-200">4.</span>
      <span><strong>Practice slowly</strong> - Speed comes later. First technique, then speed.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-green-800 dark:text-green-200">5.</span>
      <span><strong>Be patient</strong> - Internalizing this principle takes time. Don't give up!</span>
    </li>
  </ul>
</div>

**Remember:** Every experienced climber started as a beginner and had to learn this exact lesson. It's normal that it takes time. The key is to practice consciously and not fall back into old patterns.
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Beine vs. Arme",
      description: "Diese Übung hilft dir, das Bewusstsein für das Drücken mit den Beinen zu entwickeln.",
      checklist: [
        { text: "Suche dir einen einfachen Boulder (z.B. V0-V2) und klettere ihn einmal normal.", checked: false },
        { text: "Klettere ihn ein zweites Mal, aber diesmal: Bei jedem Zug fragst du dich laut 'Ziehe ich oder drücke ich?'", checked: false },
        { text: "Versuche, mindestens 3 Züge zu finden, bei denen du bewusst mit den Beinen drückst statt mit den Armen zu ziehen.", checked: false },
        { text: "Spüre die Aktivierung in deinen Oberschenkeln. Wenn du sie nicht spürst, versuche es nochmal.", checked: false },
        { text: "Vergleiche: Wie fühlt sich dein Körper nach dem zweiten Durchgang an? Sind deine Arme weniger erschöpft?", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Legs vs. Arms",
      description: "This exercise helps you develop awareness of pushing with your legs.",
      checklist: [
        { text: "Find an easy boulder (e.g., V0-V2) and climb it once normally.", checked: false },
        { text: "Climb it a second time, but this time: With each move, ask yourself out loud 'Am I pulling or pushing?'", checked: false },
        { text: "Try to find at least 3 moves where you consciously push with your legs instead of pulling with your arms.", checked: false },
        { text: "Feel the activation in your thighs. If you don't feel it, try again.", checked: false },
        { text: "Compare: How does your body feel after the second run? Are your arms less exhausted?", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum sind die Beine wichtiger als die Arme beim Klettern?",
        answer: "Die Beine enthalten die größten und stärksten Muskelgruppen des Körpers (Oberschenkel, Gesäß). Sie können viel mehr Kraft erzeugen als die relativ kleinen Armmuskeln und ermüden langsamer."
      },
      {
        question: "Was bedeutet das Mantra 'Beine drücken, Arme balancieren'?",
        answer: "Es bedeutet, dass die Hauptarbeit beim Klettern von den Beinen übernommen werden sollte (drücken), während die Arme hauptsächlich für Balance und Positionierung zuständig sind, nicht für das Hochziehen des Körpers."
      },
      {
        question: "Was ist der häufigste Fehler von Anfängern bezüglich der Bein-Arbeit?",
        answer: "Anfänger ziehen sich oft mit den Armen nach oben, als würden sie Klimmzüge machen, anstatt ihre Beine zu nutzen, um sich nach oben zu drücken. Das führt zu schneller Erschöpfung der Arme."
      }
    ],
    en: [
      {
        question: "Why are legs more important than arms when climbing?",
        answer: "The legs contain the largest and strongest muscle groups in the body (thighs, glutes). They can generate much more power than the relatively small arm muscles and fatigue more slowly."
      },
      {
        question: "What does the mantra 'legs push, arms balance' mean?",
        answer: "It means that the main work in climbing should be done by the legs (pushing), while the arms are mainly responsible for balance and positioning, not for pulling the body up."
      },
      {
        question: "What is the most common beginner mistake regarding leg work?",
        answer: "Beginners often pull themselves up with their arms as if doing pull-ups, instead of using their legs to push themselves up. This leads to quick arm exhaustion."
      }
    ]
  }
};


