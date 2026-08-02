import { Zap, Target, AlertTriangle, TrendingUp, Timer, Rocket, Activity } from 'lucide-react';

export const dynamicMovements = {
  title: {
    de: "Dynamische Züge",
    en: "Dynamic Movements"
  },
  description: {
    de: "Lerne Dead Points, Dynos und koordinierte dynamische Bewegungen – wann Schwung dein Freund ist und wie du Timing meisterst.",
    en: "Learn dead points, dynos, and coordinated dynamic movements – when momentum is your friend and how to master timing."
  },
  content: {
    de: `
### Dynamische Züge: Wenn Statik nicht reicht

Bisher hast du hauptsächlich <strong>statisch</strong> geklettert – kontrolliert, langsam, Zug für Zug. Aber manche Boulder erfordern <strong>Schwung und Dynamik</strong>. Dynamische Züge nutzen Momentum, um Griffe zu erreichen, die statisch unerreichbar wären.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Zap className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Das fundamentale Prinzip</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        <strong>"Nutze die Schwerelosigkeit!"</strong>
      </p>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Bei jedem Schwung gibt es einen kurzen Moment, in dem du schwerelos bist – den "Dead Point". In diesem Moment kannst du den Griff am leichtesten greifen, weil keine Schwerkraft dich nach unten zieht.
      </p>
    </div>
  </div>
</div>

---

### Dead Point: Der kontrollierte Schwung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    Was ist ein Dead Point?
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Definition</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Ein Dead Point ist ein <strong>kontrollierter Schwung</strong>, bei dem du deinen Körper nach oben bewegst und den Zielgriff im höchsten Punkt greifst – genau in dem Moment, in dem du kurz "schwerelos" bist.
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li><strong>Füße bleiben auf den Tritten!</strong> Das unterscheidet ihn vom Dyno</li>
        <li>Koordinierter Push mit den Beinen</li>
        <li>Gleichzeitiges Loslassen und Greifen am höchsten Punkt</li>
        <li>Weniger riskant als ein Dyno, da Kontakt erhalten bleibt</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Technik Schritt für Schritt</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
        <li><strong>Vorbereiten:</strong> Gute Fußposition, Augen auf den Zielgriff</li>
        <li><strong>Einsinken:</strong> Leicht in die Knie gehen (Energie laden)</li>
        <li><strong>Drücken:</strong> Explosiv mit den Beinen nach oben drücken</li>
        <li><strong>Loslassen:</strong> Am höchsten Punkt die Hand zum Zielgriff führen</li>
        <li><strong>Greifen:</strong> Den Griff im "Dead Point" fangen – dem Moment der Schwerelosigkeit</li>
      </ol>
    </div>
  </div>
</div>

---

### Dyno: Der dynamische Sprung

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Rocket className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Was ist ein Dyno?</h4>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
        Ein Dyno ist ein <strong>Sprung an der Wand</strong>, bei dem <strong>beide Füße die Tritte verlassen</strong>. Du fliegst kurz durch die Luft und musst den Zielgriff fangen. Dynos sind spektakulär, aber auch riskant!
      </p>
    </div>
  </div>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Dyno-Varianten</h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Single Dyno</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Eine Hand greift den Zielgriff, die andere hält den Startgriff. Die einfachste Dyno-Variante.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Double Dyno</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        <strong>Beide Hände</strong> lassen los und fliegen zum Zielgriff. Deutlich schwieriger und riskanter!
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Koordinationsdyno</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Kombination aus Laufen/Schwingen und Springen. Typisch für moderne Wettkampf-Boulder mit Volumes und Macros.
      </p>
    </div>
  </div>
</div>

---

### Timing & Koordination

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Timer className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Timing ist alles!</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        Bei dynamischen Zügen ist das <strong>Timing</strong> entscheidend. Es geht nicht nur um Kraft – die Koordination von Beinen, Armen und dem Moment des Greifens muss perfekt aufeinander abgestimmt sein.
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>Beine initiieren:</strong> Die Aufwärtsbewegung kommt immer aus den Beinen</li>
        <li><strong>Arme führen:</strong> Die Hand wird zum Griff geführt, nicht "geworfen"</li>
        <li><strong>Fangen, nicht reißen:</strong> Den Griff sanft "einfangen", nicht ruckartig zugreifen</li>
        <li><strong>Core stabilisiert:</strong> Körperspannung verhindert unkontrolliertes Schwingen</li>
      </ul>
    </div>
  </div>
</div>

---

### Sicherheit bei dynamischen Zügen

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Vorsicht!</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        Dynamische Züge bergen Risiken:
      </p>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li><strong>Sturzgefahr:</strong> Unkontrollierte Stürze bei verfehltem Griff</li>
        <li><strong>Finger-Belastung:</strong> Hohe Spitzenkräfte auf Finger und Sehnen</li>
        <li><strong>Schulter-Belastung:</strong> Ruckartige Belastung bei Fehlversuch</li>
        <li><strong>Immer aufwärmen!</strong> Dynamische Züge nie als erstes in einer Session!</li>
        <li><strong>Langsam steigern:</strong> Mit kleinen Dead Points beginnen, nicht gleich große Dynos</li>
      </ul>
    </div>
  </div>
</div>

---

### Praktische Übungen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    Übungen für dynamische Züge
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 1: Dead Point am Jug</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Finde zwei große Griffe übereinander</li>
        <li>Übe den kontrollierten Schwung zum oberen Griff</li>
        <li>Fokus auf Timing: Greife im "schwerelos"-Moment</li>
        <li>Wiederhole, bis es sich flüssig anfühlt</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 2: Schwung-Übung</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>An einem guten Griff hängen</li>
        <li>Schwinge leicht hin und her</li>
        <li>Spüre den "Dead Point" am höchsten Punkt</li>
        <li>Dann versuche, einen Griff in diesem Moment zu greifen</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 3: Koordination</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Klettere einen leichten Boulder mit bewusstem Schwung</li>
        <li>Nutze bei jedem Zug die Beinkraft zum Drücken</li>
        <li>Versuche, den Rhythmus zu finden: Einsinken → Drücken → Greifen</li>
        <li>Achte auf flüssige, koordinierte Bewegungen</li>
      </ol>
    </div>
  </div>
</div>

**Merke:** Dynamische Züge sind nicht nur Kraft – sie sind Timing, Koordination und Mut. Übe sie regelmäßig und du wirst Boulder knacken, die vorher unmöglich schienen!
    `,
    en: `
### Dynamic Movements: When Static Isn't Enough

So far you've mainly climbed <strong>statically</strong> – controlled, slow, move by move. But some boulders require <strong>momentum and dynamics</strong>. Dynamic moves use momentum to reach holds that would be unreachable statically.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Zap className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">The Fundamental Principle</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        <strong>"Use the weightlessness!"</strong>
      </p>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        During every swing, there's a brief moment when you're weightless – the "Dead Point." In this moment, you can grab the hold most easily because gravity isn't pulling you down.
      </p>
    </div>
  </div>
</div>

---

### Dead Point: The Controlled Swing

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    What is a Dead Point?
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Definition</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        A dead point is a <strong>controlled swing</strong> where you move your body upward and grab the target hold at the highest point – exactly at the moment when you're briefly "weightless."
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li><strong>Feet stay on footholds!</strong> This distinguishes it from a dyno</li>
        <li>Coordinated push with legs</li>
        <li>Simultaneous release and grab at the highest point</li>
        <li>Less risky than a dyno since contact is maintained</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Step-by-Step Technique</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
        <li><strong>Prepare:</strong> Good foot position, eyes on target hold</li>
        <li><strong>Sink down:</strong> Slightly bend knees (load energy)</li>
        <li><strong>Push:</strong> Explosively push upward with legs</li>
        <li><strong>Release:</strong> At the highest point, guide hand to target hold</li>
        <li><strong>Catch:</strong> Grab the hold at the "dead point" – the moment of weightlessness</li>
      </ol>
    </div>
  </div>
</div>

---

### Dyno: The Dynamic Jump

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Rocket className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">What is a Dyno?</h4>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
        A dyno is a <strong>jump on the wall</strong> where <strong>both feet leave the footholds</strong>. You briefly fly through the air and must catch the target hold. Dynos are spectacular but also risky!
      </p>
    </div>
  </div>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Dyno Variants</h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Single Dyno</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        One hand grabs the target hold, the other keeps the starting hold. The simplest dyno variant.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Double Dyno</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        <strong>Both hands</strong> let go and fly to the target hold. Significantly harder and riskier!
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Coordination Dyno</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Combination of running/swinging and jumping. Typical for modern competition boulders with volumes and macros.
      </p>
    </div>
  </div>
</div>

---

### Timing & Coordination

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Timer className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Timing is Everything!</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        In dynamic moves, <strong>timing</strong> is crucial. It's not just about strength – the coordination of legs, arms, and the moment of catching must be perfectly synchronized.
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>Legs initiate:</strong> The upward movement always comes from the legs</li>
        <li><strong>Arms guide:</strong> The hand is guided to the hold, not "thrown"</li>
        <li><strong>Catch, don't rip:</strong> Gently "catch" the hold, don't grab abruptly</li>
        <li><strong>Core stabilizes:</strong> Body tension prevents uncontrolled swinging</li>
      </ul>
    </div>
  </div>
</div>

---

### Safety with Dynamic Moves

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Caution!</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        Dynamic moves carry risks:
      </p>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li><strong>Fall risk:</strong> Uncontrolled falls from missed holds</li>
        <li><strong>Finger stress:</strong> High peak forces on fingers and tendons</li>
        <li><strong>Shoulder stress:</strong> Sudden loading from failed attempts</li>
        <li><strong>Always warm up!</strong> Never do dynamic moves first in a session!</li>
        <li><strong>Progress gradually:</strong> Start with small dead points, not big dynos</li>
      </ul>
    </div>
  </div>
</div>

---

### Practical Exercises

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    Exercises for Dynamic Moves
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 1: Dead Point on Jugs</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Find two large holds stacked above each other</li>
        <li>Practice the controlled swing to the upper hold</li>
        <li>Focus on timing: Grab at the "weightless" moment</li>
        <li>Repeat until it feels fluid</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 2: Swing Practice</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Hang on a good hold</li>
        <li>Swing gently back and forth</li>
        <li>Feel the "dead point" at the highest point</li>
        <li>Then try to grab a hold at that moment</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 3: Coordination</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Climb an easy boulder with deliberate momentum</li>
        <li>Use leg power to push with each move</li>
        <li>Find the rhythm: Sink → Push → Grab</li>
        <li>Focus on fluid, coordinated movements</li>
      </ol>
    </div>
  </div>
</div>

**Remember:** Dynamic moves aren't just about strength – they're about timing, coordination, and courage. Practice them regularly and you'll send boulders that seemed impossible before!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Dynamische Züge",
      description: "Übe Dead Points und entwickle dein Timing für dynamische Bewegungen.",
      checklist: [
        { text: "Übung 1: Übe Dead Points an großen Griffen – fokussiere dich auf den 'schwerelos'-Moment", checked: false },
        { text: "Übung 2: Schwinge an einem Griff und spüre den Dead Point am höchsten Punkt", checked: false },
        { text: "Übung 3: Klettere einen Boulder mit bewusstem Rhythmus: Einsinken → Drücken → Greifen", checked: false },
        { text: "Sicherheit: Wärme dich immer gut auf, bevor du dynamische Züge übst!", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Dynamic Movements",
      description: "Practice dead points and develop your timing for dynamic movements.",
      checklist: [
        { text: "Exercise 1: Practice dead points on large holds – focus on the 'weightless' moment", checked: false },
        { text: "Exercise 2: Swing on a hold and feel the dead point at the highest point", checked: false },
        { text: "Exercise 3: Climb a boulder with deliberate rhythm: Sink → Push → Grab", checked: false },
        { text: "Safety: Always warm up well before practicing dynamic moves!", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was ist der Unterschied zwischen einem Dead Point und einem Dyno?",
        answer: "Beim Dead Point bleiben die Füße auf den Tritten – es ist ein kontrollierter Schwung, bei dem man den Zielgriff im 'schwerelos'-Moment am höchsten Punkt greift. Beim Dyno verlassen beide Füße die Tritte, man fliegt kurz durch die Luft und muss den Griff fangen. Der Dead Point ist weniger riskant, da Kontakt erhalten bleibt."
      },
      {
        question: "Was ist der 'Dead Point' und warum ist er so wichtig?",
        answer: "Der Dead Point ist der kurze Moment am höchsten Punkt eines Schwungs, in dem man 'schwerelos' ist – die Aufwärtsbewegung hat gestoppt, aber die Schwerkraft zieht noch nicht voll nach unten. In diesem Moment ist der Griff am leichtesten zu greifen, weil kein Gewicht auf der greifenden Hand lastet. Timing ist daher entscheidend!"
      },
      {
        question: "Welche Sicherheitsregeln gelten für dynamische Züge?",
        answer: "Man sollte sich immer gut aufwärmen, bevor man dynamische Züge übt – niemals als erstes in einer Session. Langsam steigern: erst kleine Dead Points, dann größere Dynos. Unkontrollierte Stürze sind gefährlich, die Finger- und Schulterbelastung ist hoch. Progressive Steigerung und gute Körperspannung reduzieren das Verletzungsrisiko."
      }
    ],
    en: [
      {
        question: "What is the difference between a dead point and a dyno?",
        answer: "In a dead point, feet stay on the footholds – it's a controlled swing where you grab the target hold at the 'weightless' moment at the highest point. In a dyno, both feet leave the footholds, you briefly fly through the air and must catch the hold. The dead point is less risky since contact is maintained."
      },
      {
        question: "What is the 'dead point' and why is it so important?",
        answer: "The dead point is the brief moment at the highest point of a swing when you're 'weightless' – the upward movement has stopped, but gravity isn't fully pulling down yet. At this moment, the hold is easiest to grab because no weight is on the reaching hand. Timing is therefore crucial!"
      },
      {
        question: "What safety rules apply to dynamic moves?",
        answer: "Always warm up well before practicing dynamic moves – never do them first in a session. Progress gradually: start with small dead points, then bigger dynos. Uncontrolled falls are dangerous, finger and shoulder stress is high. Progressive increase and good body tension reduce injury risk."
      }
    ]
  }
};
