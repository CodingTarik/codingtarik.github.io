import { Wind, Heart, Timer, Battery, TrendingUp, AlertCircle, Pause } from 'lucide-react';

export const pacingEndurance = {
  title: {
    de: "Pacing, Atmung & Erholung",
    en: "Pacing, Breathing & Recovery"
  },
  description: {
    de: "Lerne, wie du deine Energie einteilst, richtig atmest und Rastpositionen an der Wand findest, um länger und besser zu klettern.",
    en: "Learn how to manage your energy, breathe correctly, and find rest positions on the wall to climb longer and better."
  },
  content: {
    de: `
### Pacing, Atmung & Erholung an der Wand

Viele Anfänger scheitern nicht an Kraft, sondern an <strong>schlechtem Pacing</strong>. Sie klettern zu schnell, halten die Luft an und vergessen, dass man sich an der Wand erholen kann. Richtiges Pacing ist wie ein Marathon – nicht wie ein Sprint!

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Heart className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Das fundamentale Prinzip</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        <strong>"Klettere schnell durch schwere Stellen, erhole dich an leichten!"</strong>
      </p>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Gute Kletterer wechseln zwischen intensiven Phasen (Crux) und Erholungsphasen (Rest). Wer überall gleich schnell klettert, verschwendet Energie an den falschen Stellen.
      </p>
    </div>
  </div>
</div>

---

### Kletter-Atmung: Nicht die Luft anhalten!

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Der häufigste Fehler!</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        Die meisten Anfänger <strong>halten die Luft an</strong>, wenn es schwer wird. Das ist fatal! Ohne Sauerstoff ermüden deine Muskeln viel schneller. Du wirst schneller "pumpen" und früher loslassen müssen.
      </p>
    </div>
  </div>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Wind className="text-green-600 dark:text-green-400" size={24} />
    Richtig atmen beim Klettern
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Bei schweren Zügen: Ausatmen!</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Atme <strong>kräftig aus</strong>, wenn du einen schweren Zug machst. Das stabilisiert deinen Rumpf und gibt dir Kraft. Deshalb schreien oder grunzen manche Kletterer – sie atmen kraftvoll aus!
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Einatmen in der Vorbereitung</li>
        <li>Kräftig ausatmen beim Zug</li>
        <li>Wie beim Gewichtheben: Ausatmen bei Anstrengung</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">An Rastpositionen: Tief und ruhig atmen</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Wenn du eine gute Position findest, <strong>atme bewusst tief und langsam</strong>. Das senkt deinen Puls und hilft, den "Pump" abzubauen.
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Tiefes Einatmen durch die Nase (4 Sekunden)</li>
        <li>Langsames Ausatmen durch den Mund (6 Sekunden)</li>
        <li>3-5 tiefe Atemzüge können den Pump spürbar reduzieren</li>
      </ul>
    </div>
  </div>
</div>

---

### Shake-Outs: Pump abbauen

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Battery className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Was ist ein Shake-Out?</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        Ein Shake-Out bedeutet, dass du an einem guten Griff <strong>einen Arm nach unten hängen lässt und ausschüttelst</strong>. Das fördert die Durchblutung und hilft, den Pump (Laktat-Ansammlung in den Unterarmen) abzubauen.
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>Technik:</strong> Arm ganz nach unten hängen, Finger spreizen, Hand schütteln</li>
        <li><strong>Dauer:</strong> Mindestens 10-15 Sekunden pro Arm</li>
        <li><strong>Reihenfolge:</strong> Erst den stärker gepumpten Arm ausschütteln</li>
        <li><strong>Position:</strong> Arm sollte unterhalb des Herzens sein (Schwerkraft hilft)</li>
      </ul>
    </div>
  </div>
</div>

---

### Rastpositionen finden

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Pause className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Wo kannst du rasten?</h4>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
        Gute Kletterer <strong>lesen die Route</strong> und identifizieren Rastpositionen, bevor sie einsteigen. Hier sind die typischen Rast-Möglichkeiten:
      </p>
    </div>
  </div>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Arten von Rastpositionen</h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Gute Griffe (Jugs)</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Der einfachste Rest: Ein großer, bequemer Griff. Halte dich mit einer Hand fest, schüttle die andere aus. Dann wechseln.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Knee-Bars</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Knie zwischen Griff/Volume und Tritt klemmen. So kannst du <strong>komplett ohne Hände</strong> hängen! Perfekt zum Chalken und Erholen.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Stemmpositionen</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        In Ecken oder Verschneidungen kannst du dich mit Beinen stemmen und die Arme entlasten.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">No-Hands-Rests</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Die besten Rests: Positionen, wo du <strong>beide Hände loslassen</strong> kannst. Knee-Bars, Bat Hangs oder auf einem breiten Tritt stehen.
      </p>
    </div>
  </div>
</div>

---

### Das richtige Timing

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Timer className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Wann lohnt sich eine Pause?</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        Nicht jede Pause ist sinnvoll! Manchmal kostet das Halten an einem mittelmäßigen Griff mehr Energie als weiterzuklettern.
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2 list-disc list-inside">
        <li><strong>Guter Rest:</strong> Großer Griff, stabile Position → 15-30 Sekunden rasten</li>
        <li><strong>Mittelmäßiger Rest:</strong> Okay-Griff → Kurzes Shake-Out (5-10 Sek), dann weiter</li>
        <li><strong>Schlechter Rest:</strong> Kleiner Griff, viel Kraft nötig → Nicht rasten, weiterklettern!</li>
        <li><strong>Vor der Crux:</strong> Immer versuchen, vorher zu rasten, dann schnell durch die Crux</li>
      </ul>
    </div>
  </div>
</div>

---

### Praktische Übungen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    Übungen für besseres Pacing
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 1: Atem-Bewusstsein</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Klettere einen leichten Boulder</li>
        <li>Achte bewusst auf deine Atmung</li>
        <li>Atme bei jedem Zug kräftig aus</li>
        <li>Hältst du die Luft an? Bewusst korrigieren!</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 2: Shake-Out üben</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Finde einen guten Griff an der Wand</li>
        <li>Übe den perfekten Shake-Out (Arm runter, Finger spreizen, schütteln)</li>
        <li>Atme dabei tief und ruhig</li>
        <li>Wechsle die Seite und wiederhole</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 3: Rest-Positionen scannen</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Schaue dir einen Boulder an, BEVOR du einsteigst</li>
        <li>Identifiziere alle möglichen Rastpositionen</li>
        <li>Plane: Wo rastest du? Wo kletterst du schnell?</li>
        <li>Klettere den Boulder mit diesem Plan</li>
      </ol>
    </div>
  </div>
</div>

---

### Zusammenfassung

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Deine Pacing-Checkliste
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Nie die Luft anhalten:</strong> Kräftig ausatmen bei schweren Zügen, tief atmen an Rests.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Shake-Outs nutzen:</strong> Arm runterhängen, Finger spreizen, schütteln – mindestens 10-15 Sekunden.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Rastpositionen lesen:</strong> Vor dem Klettern identifizieren, wo du rasten kannst.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Tempo variieren:</strong> Schnell durch die Crux, langsam an leichten Stellen.</span>
    </li>
  </ul>
</div>

**Merke:** Pacing ist der Unterschied zwischen "Pump nach 3 Zügen" und "Ich könnte noch weiterklettern"!
    `,
    en: `
### Pacing, Breathing & Recovery on the Wall

Many beginners don't fail because of strength – they fail because of <strong>bad pacing</strong>. They climb too fast, hold their breath, and forget that you can recover on the wall. Proper pacing is like a marathon – not a sprint!

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Heart className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">The Fundamental Principle</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        <strong>"Climb fast through hard sections, recover at easy ones!"</strong>
      </p>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Good climbers alternate between intense phases (crux) and recovery phases (rest). If you climb at the same speed everywhere, you waste energy in the wrong places.
      </p>
    </div>
  </div>
</div>

---

### Climbing Breathing: Don't Hold Your Breath!

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">The Most Common Mistake!</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        Most beginners <strong>hold their breath</strong> when it gets hard. This is fatal! Without oxygen, your muscles fatigue much faster. You'll pump out sooner and have to let go earlier.
      </p>
    </div>
  </div>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Wind className="text-green-600 dark:text-green-400" size={24} />
    Breathing Correctly While Climbing
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">During Hard Moves: Exhale!</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        <strong>Exhale forcefully</strong> when making a hard move. This stabilizes your core and gives you power. That's why some climbers yell or grunt – they're exhaling powerfully!
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Inhale during preparation</li>
        <li>Exhale forcefully during the move</li>
        <li>Like weightlifting: exhale during exertion</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">At Rest Positions: Breathe Deep and Slow</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        When you find a good position, <strong>breathe consciously deep and slow</strong>. This lowers your heart rate and helps reduce the pump.
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Deep inhale through nose (4 seconds)</li>
        <li>Slow exhale through mouth (6 seconds)</li>
        <li>3-5 deep breaths can noticeably reduce pump</li>
      </ul>
    </div>
  </div>
</div>

---

### Shake-Outs: Reducing Pump

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Battery className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">What is a Shake-Out?</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        A shake-out means <strong>letting one arm hang down and shaking it out</strong> while holding a good hold. This promotes blood flow and helps reduce pump (lactate buildup in forearms).
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>Technique:</strong> Let arm hang completely, spread fingers, shake hand</li>
        <li><strong>Duration:</strong> At least 10-15 seconds per arm</li>
        <li><strong>Order:</strong> Shake out the more pumped arm first</li>
        <li><strong>Position:</strong> Arm should be below heart level (gravity helps)</li>
      </ul>
    </div>
  </div>
</div>

---

### Finding Rest Positions

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Pause className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Where Can You Rest?</h4>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
        Good climbers <strong>read the route</strong> and identify rest positions before starting. Here are the typical rest options:
      </p>
    </div>
  </div>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Types of Rest Positions</h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Good Holds (Jugs)</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        The simplest rest: A large, comfortable hold. Hold on with one hand, shake out the other. Then switch.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Knee-Bars</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Wedge your knee between a hold/volume and a foothold. This way you can hang <strong>completely hands-free</strong>! Perfect for chalking up and recovering.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Stemming Positions</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        In corners or dihedrals, you can stem with your legs and take weight off your arms.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">No-Hands Rests</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        The best rests: Positions where you can <strong>let go with both hands</strong>. Knee-bars, bat hangs, or standing on a wide ledge.
      </p>
    </div>
  </div>
</div>

---

### The Right Timing

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Timer className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">When is a Pause Worth It?</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        Not every pause makes sense! Sometimes holding on at a mediocre hold costs more energy than continuing.
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2 list-disc list-inside">
        <li><strong>Good rest:</strong> Large hold, stable position → rest 15-30 seconds</li>
        <li><strong>Mediocre rest:</strong> Okay hold → Quick shake-out (5-10 sec), then continue</li>
        <li><strong>Bad rest:</strong> Small hold, lots of strength needed → Don't rest, keep climbing!</li>
        <li><strong>Before the crux:</strong> Always try to rest beforehand, then blast through the crux</li>
      </ul>
    </div>
  </div>
</div>

---

### Practical Exercises

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    Exercises for Better Pacing
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 1: Breathing Awareness</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Climb an easy boulder</li>
        <li>Pay conscious attention to your breathing</li>
        <li>Exhale forcefully with each move</li>
        <li>Are you holding your breath? Consciously correct it!</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 2: Shake-Out Practice</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Find a good hold on the wall</li>
        <li>Practice the perfect shake-out (arm down, spread fingers, shake)</li>
        <li>Breathe deeply and calmly while doing it</li>
        <li>Switch sides and repeat</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 3: Scan Rest Positions</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Look at a boulder BEFORE you start climbing</li>
        <li>Identify all possible rest positions</li>
        <li>Plan: Where do you rest? Where do you climb fast?</li>
        <li>Climb the boulder with this plan</li>
      </ol>
    </div>
  </div>
</div>

---

### Summary

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Your Pacing Checklist
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Never hold your breath:</strong> Exhale forcefully during hard moves, breathe deeply at rests.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Use shake-outs:</strong> Let arm hang, spread fingers, shake – at least 10-15 seconds.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Read rest positions:</strong> Identify where you can rest before climbing.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Vary tempo:</strong> Fast through the crux, slow at easy sections.</span>
    </li>
  </ul>
</div>

**Remember:** Pacing is the difference between "pumped after 3 moves" and "I could keep climbing"!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Pacing & Atmung",
      description: "Trainiere bewusstes Atmen und lerne, Rastpositionen zu nutzen.",
      checklist: [
        { text: "Übung 1: Klettere einen Boulder und achte bewusst darauf, NICHT die Luft anzuhalten", checked: false },
        { text: "Übung 2: Übe den perfekten Shake-Out an einem guten Griff (10-15 Sekunden pro Arm)", checked: false },
        { text: "Übung 3: Scanne einen Boulder vor dem Klettern nach Rastpositionen und plane dein Pacing", checked: false },
        { text: "Beobachte erfahrene Kletterer: Wo rasten sie? Wie atmen sie?", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Pacing & Breathing",
      description: "Practice conscious breathing and learn to use rest positions.",
      checklist: [
        { text: "Exercise 1: Climb a boulder and consciously focus on NOT holding your breath", checked: false },
        { text: "Exercise 2: Practice the perfect shake-out at a good hold (10-15 seconds per arm)", checked: false },
        { text: "Exercise 3: Scan a boulder for rest positions before climbing and plan your pacing", checked: false },
        { text: "Observe experienced climbers: Where do they rest? How do they breathe?", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum ist es so schlecht, beim Klettern die Luft anzuhalten?",
        answer: "Die Luft anzuhalten ist schlecht, weil die Muskeln ohne Sauerstoff viel schneller ermüden. Laktat baut sich schneller auf, die Unterarme 'pumpen' früher und man muss schneller loslassen. Kräftiges Ausatmen bei schweren Zügen stabilisiert den Rumpf und gibt Kraft, tiefes Atmen an Rests senkt den Puls und baut Pump ab."
      },
      {
        question: "Wie führst du einen richtigen Shake-Out durch?",
        answer: "Beim Shake-Out hältst du dich mit einer Hand an einem guten Griff fest und lässt den anderen Arm komplett nach unten hängen (unterhalb des Herzens). Dann spreizt du die Finger und schüttelst die Hand. Mindestens 10-15 Sekunden pro Arm. Dabei tief und ruhig atmen. Zuerst den stärker gepumpten Arm ausschütteln."
      },
      {
        question: "Wann lohnt sich eine Rastposition und wann solltest du weiterklettern?",
        answer: "Ein Rest lohnt sich bei großen Griffen und stabilen Positionen (15-30 Sek rasten). Bei mittelmäßigen Griffen macht man nur ein kurzes Shake-Out (5-10 Sek). Bei kleinen Griffen, wo viel Kraft nötig ist, sollte man NICHT rasten, sondern weiterklettern, da das Halten mehr Energie kostet. Besonders wichtig: Vor der Crux immer versuchen zu rasten!"
      }
    ],
    en: [
      {
        question: "Why is holding your breath while climbing so bad?",
        answer: "Holding your breath is bad because muscles fatigue much faster without oxygen. Lactate builds up faster, forearms pump out sooner, and you have to let go earlier. Forceful exhaling during hard moves stabilizes the core and gives power, deep breathing at rests lowers heart rate and reduces pump."
      },
      {
        question: "How do you perform a proper shake-out?",
        answer: "For a shake-out, hold on with one hand at a good hold and let the other arm hang completely down (below heart level). Then spread your fingers and shake your hand. At least 10-15 seconds per arm. Breathe deeply and calmly while doing it. Shake out the more pumped arm first."
      },
      {
        question: "When is a rest position worth it and when should you keep climbing?",
        answer: "A rest is worth it at large holds and stable positions (rest 15-30 seconds). At mediocre holds, just do a quick shake-out (5-10 sec). At small holds requiring lots of strength, DON'T rest – keep climbing, as holding costs more energy. Especially important: Always try to rest before the crux!"
      }
    ]
  }
};
