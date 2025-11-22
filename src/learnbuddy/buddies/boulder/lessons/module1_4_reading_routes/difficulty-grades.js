import { TrendingUp, AlertCircle, Scale, Info, Target, TrendingDown } from 'lucide-react';

export const difficultyGrades = {
  title: {
    de: "Schwierigkeitsgrade verstehen",
    en: "Understanding Difficulty Grades"
  },
  description: {
    de: "Lerne die verschiedenen Schwierigkeitsskalen kennen: Fontainebleau-Skala, V-Scale und warum Schwierigkeit relativ ist.",
    en: "Learn about different difficulty scales: Fontainebleau scale, V-Scale, and why difficulty is relative."
  },
  content: {
    de: `
### Schwierigkeitsgrade: Ein Wegweiser, kein Gesetz

Schwierigkeitsgrade sind hilfreich, um eine Route einzuschätzen, aber sie sind nicht absolut. Ein V3 in einer Halle kann sich wie ein V5 in einer anderen anfühlen. Ein V4 für eine große Person kann ein V6 für eine kleine Person sein.

Lerne die Skalen kennen, aber verstehe auch ihre Grenzen.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Scale className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Die Realität</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Schwierigkeitsgrade sind <strong>subjektiv</strong> und <strong>relativ</strong>. Sie geben dir eine grobe Orientierung, aber keine absolute Wahrheit. Was für dich schwer ist, kann für jemand anderen einfach sein – und umgekehrt.
      </p>
    </div>
  </div>
</div>

---

### Die Fontainebleau-Skala (Europa)

Die Fontainebleau-Skala ist die in Europa am häufigsten verwendete Skala. Sie wurde in Fontainebleau, Frankreich, entwickelt – der Wiege des Boulderns.

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    Das System
  </h3>
  
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Grundstruktur</h4>
      <p className="mb-2">Die Skala beginnt bei <strong>3a</strong> und geht bis <strong>9a</strong>:</p>
      <ul className="space-y-1 list-disc list-inside">
        <li><strong>3a, 3b, 3c:</strong> Sehr einfach (Anfänger)</li>
        <li><strong>4a, 4b, 4c:</strong> Einfach</li>
        <li><strong>5a, 5b, 5c:</strong> Mittel</li>
        <li><strong>6a, 6a+, 6b, 6b+, 6c, 6c+:</strong> Schwer</li>
        <li><strong>7a, 7a+, 7b, 7b+, 7c, 7c+:</strong> Sehr schwer</li>
        <li><strong>8a und höher:</strong> Extrem schwer (Profis)</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Die "+" Bedeutung</h4>
      <p className="mb-2">Das "+" bedeutet, dass der Boulder etwas schwerer ist als die Basis-Stufe:</p>
      <ul className="space-y-1 list-disc list-inside">
        <li><strong>6a:</strong> Basis-Schwierigkeit</li>
        <li><strong>6a+:</strong> Etwas schwerer als 6a, aber noch nicht 6b</li>
        <li><strong>6b:</strong> Nächste Stufe</li>
      </ul>
    </div>
  </div>
</div>

**Beispiel:** Ein Boulder mit "6b+" ist schwerer als ein "6b", aber leichter als ein "6c".

---

### Die V-Scale (USA)

Die V-Scale (Vermin Scale) ist die in den USA am häufigsten verwendete Skala. Sie ist einfacher zu verstehen, aber weniger detailliert.

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">Das System</h4>
  
  <div className="space-y-3 text-sm text-purple-700 dark:text-purple-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Grundstruktur</h5>
      <p className="mb-2">Die Skala beginnt bei <strong>V0</strong> und geht bis <strong>V17</strong>:</p>
      <ul className="space-y-1 list-disc list-inside">
        <li><strong>V0-V2:</strong> Einfach (Anfänger)</li>
        <li><strong>V3-V4:</strong> Mittel</li>
        <li><strong>V5-V6:</strong> Schwer</li>
        <li><strong>V7-V8:</strong> Sehr schwer</li>
        <li><strong>V9-V10:</strong> Extrem schwer</li>
        <li><strong>V11+:</strong> Profi-Level</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Vergleich mit Fontainebleau</h5>
      <p className="mb-2">Grobe Umrechnung (nicht exakt!):</p>
      <ul className="space-y-1 list-disc list-inside">
        <li>V0 ≈ 4a-4b</li>
        <li>V2 ≈ 5a-5b</li>
        <li>V4 ≈ 6a-6b</li>
        <li>V6 ≈ 6c-7a</li>
        <li>V8 ≈ 7b-7c</li>
      </ul>
      <p className="mt-2 text-xs italic">⚠️ Diese Umrechnung ist nur eine grobe Orientierung!</p>
    </div>
  </div>
</div>

**Wichtig:** Die V-Scale ist nicht linear. Der Unterschied zwischen V0 und V2 ist kleiner als der Unterschied zwischen V8 und V10.

---

### Relative Schwierigkeit: Halle vs. Halle unterschiedlich!

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Die wichtigste Lektion</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        <strong>Schwierigkeitsgrade sind nicht standardisiert!</strong> Ein V4 in Halle A kann sich wie ein V6 in Halle B anfühlen. Warum?
      </p>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li>Verschiedene Routensetter haben verschiedene Stile</li>
        <li>Verschiedene Grifftypen (klein/groß, schlecht/gut)</li>
        <li>Verschiedene Wandwinkel (vertikal vs. überhängend)</li>
        <li>Verschiedene Standards (manche Hallen sind "weicher", andere "härter")</li>
      </ul>
    </div>
  </div>
</div>

#### Was bedeutet das für dich?

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Praktische Tipps</h4>
  
  <div className="space-y-3 text-sm text-amber-700 dark:text-amber-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-1">1. In neuen Hallen vorsichtig beginnen</h5>
      <p>Wenn du in eine neue Halle gehst, beginne mit Routen, die etwas leichter sind als dein übliches Niveau. Lerne das System der Halle kennen.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-1">2. Nicht zu sehr auf Grade fixieren</h5>
      <p>Grade sind nur eine Orientierung. Ein V3, der zu deinen Stärken passt, kann sich einfacher anfühlen als ein V2, der zu deinen Schwächen passt.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-1">3. Auf deinen Körper hören</h5>
      <p>Wenn eine Route sich schwerer anfühlt als der Grade suggeriert, ist das okay. Wenn sie sich leichter anfühlt, auch. Höre auf deinen Körper, nicht nur auf Zahlen.</p>
    </div>
  </div>
</div>

---

### Subjektive Faktoren: Warum Grade nicht alles sind

Grade sind hilfreich, aber sie berücksichtigen nicht deine individuellen Stärken und Schwächen.

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">Faktoren, die die Schwierigkeit für dich beeinflussen</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">1. Körpergröße</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
        <strong>Größere Menschen:</strong> Können weiter greifen, haben aber manchmal Probleme mit engen Räumen.
      </p>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        <strong>Kleinere Menschen:</strong> Können besser in enge Räume passen, müssen aber weiter springen.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">2. Stil</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        Manche Routen passen besser zu deinem Stil als andere. Eine Route mit vielen dynamischen Bewegungen kann für dich schwerer sein als eine statische Route, auch wenn beide den gleichen Grade haben.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">3. Stärken</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
        Wenn du starke Finger hast, sind Routen mit kleinen Griffen für dich leichter. Wenn du starke Beine hast, sind Routen mit hohen Tritten für dich leichter.
      </p>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        <strong>Das bedeutet:</strong> Ein V5, der zu deinen Stärken passt, kann sich einfacher anfühlen als ein V3, der zu deinen Schwächen passt.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">4. Tagesform</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        An manchen Tagen bist du stärker, an anderen schwächer. Eine Route, die gestern einfach war, kann heute schwer sein – und umgekehrt.
      </p>
    </div>
  </div>
</div>

---

### Grade als Werkzeug, nicht als Ziel

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    Die richtige Einstellung zu Graden
  </h3>
  
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">✅ Grade verwenden für:</h4>
      <ul className="space-y-1 list-disc list-inside">
        <li>Grobe Orientierung bei der Routenauswahl</li>
        <li>Fortschritt über Zeit verfolgen</li>
        <li>Routen in einer Halle vergleichen</li>
        <li>Ziele setzen (z.B. "Ich will einen V5 schaffen")</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">❌ Grade NICHT verwenden für:</h4>
      <ul className="space-y-1 list-disc list-inside">
        <li>Vergleich mit anderen (jeder Körper ist anders!)</li>
        <li>Selbstwertgefühl (ein niedriger Grade ist kein Versagen)</li>
        <li>Absolutes Maß (Grade sind subjektiv)</li>
        <li>Entschuldigung ("Das ist zu schwer für mich")</li>
      </ul>
    </div>
  </div>
</div>

---

### Zusammenfassung: Die wichtigsten Punkte

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Dein Grade-Verständnis-Check
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Fontainebleau-Skala:</strong> 3a bis 9a, mit "+" für Zwischenstufen (Europa).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>V-Scale:</strong> V0 bis V17, einfacher aber weniger detailliert (USA).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Relative Schwierigkeit:</strong> Grade variieren zwischen Hallen – ein V4 in Halle A kann sich wie ein V6 in Halle B anfühlen.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Subjektive Faktoren:</strong> Körpergröße, Stil, Stärken und Tagesform beeinflussen die Schwierigkeit für dich persönlich.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Grade als Werkzeug:</strong> Verwende Grade für Orientierung, nicht als absolutes Maß oder für Selbstwert.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Auf deinen Körper hören:</strong> Wenn eine Route sich schwerer oder leichter anfühlt als der Grade suggeriert, ist das normal und okay.</span>
    </li>
  </ul>
</div>

**Denk daran:** Grade sind ein hilfreiches Werkzeug, aber sie sind nicht alles. Der wichtigste Grade ist der, der dir Spaß macht und dich herausfordert – unabhängig von der Zahl!
    `,
    en: `
### Difficulty Grades: A Guide, Not a Law

Difficulty grades are helpful for estimating a route, but they're not absolute. A V3 in one gym can feel like a V5 in another. A V4 for a tall person can be a V6 for a short person.

Learn the scales, but also understand their limitations.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Scale className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">The Reality</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Difficulty grades are <strong>subjective</strong> and <strong>relative</strong>. They give you a rough orientation, but not an absolute truth. What's hard for you can be easy for someone else – and vice versa.
      </p>
    </div>
  </div>
</div>

---

### The Fontainebleau Scale (Europe)

The Fontainebleau Scale is the most commonly used scale in Europe. It was developed in Fontainebleau, France – the birthplace of bouldering.

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    The System
  </h3>
  
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Basic Structure</h4>
      <p className="mb-2">The scale starts at <strong>3a</strong> and goes up to <strong>9a</strong>:</p>
      <ul className="space-y-1 list-disc list-inside">
        <li><strong>3a, 3b, 3c:</strong> Very easy (beginner)</li>
        <li><strong>4a, 4b, 4c:</strong> Easy</li>
        <li><strong>5a, 5b, 5c:</strong> Medium</li>
        <li><strong>6a, 6a+, 6b, 6b+, 6c, 6c+:</strong> Hard</li>
        <li><strong>7a, 7a+, 7b, 7b+, 7c, 7c+:</strong> Very hard</li>
        <li><strong>8a and higher:</strong> Extremely hard (professionals)</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">The "+" Meaning</h4>
      <p className="mb-2">The "+" means the boulder is slightly harder than the base level:</p>
      <ul className="space-y-1 list-disc list-inside">
        <li><strong>6a:</strong> Base difficulty</li>
        <li><strong>6a+:</strong> Slightly harder than 6a, but not yet 6b</li>
        <li><strong>6b:</strong> Next level</li>
      </ul>
    </div>
  </div>
</div>

**Example:** A boulder marked "6b+" is harder than a "6b", but easier than a "6c".

---

### The V-Scale (USA)

The V-Scale (Vermin Scale) is the most commonly used scale in the USA. It's simpler to understand, but less detailed.

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">The System</h4>
  
  <div className="space-y-3 text-sm text-purple-700 dark:text-purple-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Basic Structure</h5>
      <p className="mb-2">The scale starts at <strong>V0</strong> and goes up to <strong>V17</strong>:</p>
      <ul className="space-y-1 list-disc list-inside">
        <li><strong>V0-V2:</strong> Easy (beginner)</li>
        <li><strong>V3-V4:</strong> Medium</li>
        <li><strong>V5-V6:</strong> Hard</li>
        <li><strong>V7-V8:</strong> Very hard</li>
        <li><strong>V9-V10:</strong> Extremely hard</li>
        <li><strong>V11+:</strong> Professional level</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Comparison with Fontainebleau</h5>
      <p className="mb-2">Rough conversion (not exact!):</p>
      <ul className="space-y-1 list-disc list-inside">
        <li>V0 ≈ 4a-4b</li>
        <li>V2 ≈ 5a-5b</li>
        <li>V4 ≈ 6a-6b</li>
        <li>V6 ≈ 6c-7a</li>
        <li>V8 ≈ 7b-7c</li>
      </ul>
      <p className="mt-2 text-xs italic">⚠️ This conversion is only a rough guide!</p>
    </div>
  </div>
</div>

**Important:** The V-Scale is not linear. The difference between V0 and V2 is smaller than the difference between V8 and V10.

---

### Relative Difficulty: Gym vs. Gym Different!

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">The Most Important Lesson</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        <strong>Difficulty grades are not standardized!</strong> A V4 in Gym A can feel like a V6 in Gym B. Why?
      </p>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li>Different route setters have different styles</li>
        <li>Different hold types (small/large, bad/good)</li>
        <li>Different wall angles (vertical vs. overhanging)</li>
        <li>Different standards (some gyms are "softer", others "harder")</li>
      </ul>
    </div>
  </div>
</div>

#### What This Means for You

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Practical Tips</h4>
  
  <div className="space-y-3 text-sm text-amber-700 dark:text-amber-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-1">1. Start Carefully in New Gyms</h5>
      <p>When you go to a new gym, start with routes that are slightly easier than your usual level. Learn the gym's system.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-1">2. Don't Fixate Too Much on Grades</h5>
      <p>Grades are only a guide. A V3 that matches your strengths can feel easier than a V2 that matches your weaknesses.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-1">3. Listen to Your Body</h5>
      <p>If a route feels harder than the grade suggests, that's okay. If it feels easier, that's also okay. Listen to your body, not just numbers.</p>
    </div>
  </div>
</div>

---

### Subjective Factors: Why Grades Aren't Everything

Grades are helpful, but they don't account for your individual strengths and weaknesses.

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">Factors That Influence Difficulty for You</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">1. Body Height</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
        <strong>Taller people:</strong> Can reach further, but sometimes have problems with tight spaces.
      </p>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        <strong>Shorter people:</strong> Can fit better into tight spaces, but have to jump further.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">2. Style</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        Some routes match your style better than others. A route with many dynamic moves can be harder for you than a static route, even if both have the same grade.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">3. Strengths</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
        If you have strong fingers, routes with small holds are easier for you. If you have strong legs, routes with high steps are easier for you.
      </p>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        <strong>This means:</strong> A V5 that matches your strengths can feel easier than a V3 that matches your weaknesses.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">4. Daily Form</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        Some days you're stronger, other days weaker. A route that was easy yesterday can be hard today – and vice versa.
      </p>
    </div>
  </div>
</div>

---

### Grades as a Tool, Not a Goal

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    The Right Attitude Toward Grades
  </h3>
  
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">✅ Use Grades For:</h4>
      <ul className="space-y-1 list-disc list-inside">
        <li>Rough orientation when choosing routes</li>
        <li>Tracking progress over time</li>
        <li>Comparing routes in a gym</li>
        <li>Setting goals (e.g., "I want to send a V5")</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">❌ Don't Use Grades For:</h4>
      <ul className="space-y-1 list-disc list-inside">
        <li>Comparing yourself to others (every body is different!)</li>
        <li>Self-worth (a low grade is not a failure)</li>
        <li>Absolute measure (grades are subjective)</li>
        <li>Excuse ("That's too hard for me")</li>
      </ul>
    </div>
  </div>
</div>

---

### Summary: The Most Important Points

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Your Grade Understanding Checklist
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Fontainebleau Scale:</strong> 3a to 9a, with "+" for intermediate levels (Europe).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>V-Scale:</strong> V0 to V17, simpler but less detailed (USA).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Relative difficulty:</strong> Grades vary between gyms – a V4 in Gym A can feel like a V6 in Gym B.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Subjective factors:</strong> Body height, style, strengths, and daily form influence difficulty for you personally.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Grades as tool:</strong> Use grades for orientation, not as absolute measure or for self-worth.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Listen to your body:</strong> If a route feels harder or easier than the grade suggests, that's normal and okay.</span>
    </li>
  </ul>
</div>

**Remember:** Grades are a helpful tool, but they're not everything. The most important grade is the one that's fun and challenges you – regardless of the number!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Schwierigkeitsgrade verstehen",
      description: "Lerne die verschiedenen Schwierigkeitsskalen kennen und verstehe, warum Grade relativ sind.",
      checklist: [
        { text: "Informiere dich über das Farbsystem in deiner Halle: Welche Skala wird verwendet (Fontainebleau oder V-Scale)?", checked: false },
        { text: "Klettere Routen verschiedener Grade: Spüre den Unterschied zwischen V2, V3, V4 (oder 5a, 5b, 6a)", checked: false },
        { text: "Beobachte: Fühlt sich ein V4 schwerer oder leichter an als erwartet? Warum könnte das sein?", checked: false },
        { text: "Wichtig: Fixiere dich nicht zu sehr auf Grade – klettere Routen, die dir Spaß machen, unabhängig vom Grade", checked: false },
        { text: "Wenn du in eine neue Halle gehst: Beginne vorsichtig und lerne das System der Halle kennen", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Understand Difficulty Grades",
      description: "Learn about different difficulty scales and understand why grades are relative.",
      checklist: [
        { text: "Learn about the color system in your gym: Which scale is used (Fontainebleau or V-Scale)?", checked: false },
        { text: "Climb routes of different grades: Feel the difference between V2, V3, V4 (or 5a, 5b, 6a)", checked: false },
        { text: "Observe: Does a V4 feel harder or easier than expected? Why might that be?", checked: false },
        { text: "Important: Don't fixate too much on grades – climb routes that are fun, regardless of grade", checked: false },
        { text: "When you go to a new gym: Start carefully and learn the gym's system", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was ist der Unterschied zwischen der Fontainebleau-Skala und der V-Scale?",
        answer: "Die Fontainebleau-Skala (Europa) verwendet Zahlen mit Buchstaben (3a, 4a, 5a, 6a, 6a+, 6b...) und ist detaillierter. Die V-Scale (USA) verwendet V0, V1, V2... und ist einfacher zu verstehen, aber weniger detailliert."
      },
      {
        question: "Warum sind Schwierigkeitsgrade relativ?",
        answer: "Schwierigkeitsgrade variieren zwischen Hallen, weil verschiedene Routensetter verschiedene Stile haben, verschiedene Grifftypen verwendet werden, verschiedene Wandwinkel vorhanden sind und verschiedene Standards gelten. Ein V4 in Halle A kann sich wie ein V6 in Halle B anfühlen."
      },
      {
        question: "Welche subjektiven Faktoren beeinflussen die Schwierigkeit einer Route für dich persönlich?",
        answer: "Körpergröße (größere Menschen können weiter greifen, kleinere passen besser in enge Räume), Stil (manche Routen passen besser zu deinem Stil), Stärken (starke Finger machen kleine Griffe leichter, starke Beine machen hohe Tritte leichter) und Tagesform (an manchen Tagen bist du stärker als an anderen)."
      }
    ],
    en: [
      {
        question: "What is the difference between the Fontainebleau Scale and the V-Scale?",
        answer: "The Fontainebleau Scale (Europe) uses numbers with letters (3a, 4a, 5a, 6a, 6a+, 6b...) and is more detailed. The V-Scale (USA) uses V0, V1, V2... and is simpler to understand, but less detailed."
      },
      {
        question: "Why are difficulty grades relative?",
        answer: "Difficulty grades vary between gyms because different route setters have different styles, different hold types are used, different wall angles exist, and different standards apply. A V4 in Gym A can feel like a V6 in Gym B."
      },
      {
        question: "Which subjective factors influence the difficulty of a route for you personally?",
        answer: "Body height (taller people can reach further, shorter people fit better into tight spaces), style (some routes match your style better), strengths (strong fingers make small holds easier, strong legs make high steps easier), and daily form (some days you're stronger than others)."
      }
    ]
  }
};

