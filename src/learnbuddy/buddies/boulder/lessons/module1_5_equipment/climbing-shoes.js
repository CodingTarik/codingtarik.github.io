import { Footprints, AlertCircle, Target, Info, TrendingUp, ShoppingBag } from 'lucide-react';

export const climbingShoes = {
  title: {
    de: "Kletterschuhe - Das wichtigste Investment!",
    en: "Climbing Shoes - The Most Important Investment!"
  },
  description: {
    de: "Kletterschuhe sind das wichtigste Stück Ausrüstung beim Bouldern. Lerne, warum spezielle Schuhe nötig sind, welche Typen es gibt und wie du die richtige Passform findest.",
    en: "Climbing shoes are the most important piece of equipment in bouldering. Learn why special shoes are necessary, what types exist, and how to find the right fit."
  },
  content: {
    de: `
### Das wichtigste Stück Ausrüstung

Kletterschuhe sind nicht optional – sie sind **absolut notwendig**. Normale Turnschuhe funktionieren nicht beim Bouldern. Warum? Weil Kletterschuhe speziell für das Klettern entwickelt wurden und dir die Präzision, den Grip und die Kontrolle geben, die du brauchst.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Footprints className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Warum spezielle Schuhe?</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Kletterschuhe sind das einzige Stück Ausrüstung, das du wirklich brauchst, um zu bouldern. Alles andere ist optional, aber ohne Kletterschuhe wirst du schnell an deine Grenzen stoßen.
      </p>
    </div>
  </div>
</div>

---

### Warum spezielle Schuhe? Sticky Rubber & Vorspannung

#### Sticky Rubber: Der magische Grip

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">Was ist Sticky Rubber?</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Kletterschuhe haben eine spezielle Gummisohle, die <strong>viel mehr Reibung</strong> erzeugt als normale Schuhsohlen. Diese "Sticky Rubber" Sohle ermöglicht es dir:
  </p>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
    <li>Auf kleinen Tritten zu stehen, die mit normalen Schuhen unmöglich wären</li>
    <li>Mehr Kontrolle und Präzision zu haben</li>
    <li>Dein Gewicht besser zu verteilen</li>
    <li>Auf Slopers (schlechten Griffen) zu stehen</li>
  </ul>
</div>

**Vergleich:** Mit normalen Turnschuhen rutschst du von kleinen Tritten ab. Mit Kletterschuhen kannst du selbst auf winzigen Tritten stehen.

#### Vorspannung: Die Form macht den Unterschied

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">Was ist Vorspannung?</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
    Vorspannung bedeutet, dass der Schuh eine <strong>gebogene Form</strong> hat, die deinen Fuß in eine optimale Position bringt. Das ermöglicht:
  </p>
  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
    <li>Mehr Kraft auf die Zehenspitze zu übertragen</li>
    <li>Besser auf kleinen Tritten zu stehen</li>
    <li>Präzisere Bewegungen</li>
    <li>Mehr Kontrolle in Überhängen</li>
  </ul>
</div>

**Wichtig:** Mehr Vorspannung = mehr Leistung, aber auch weniger Komfort. Anfänger sollten mit weniger Vorspannung beginnen.

---

### Die 3 Schuhtypen: Neutral, Moderat, Aggressiv

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Welcher Typ passt zu dir?</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">1. Neutral (Anfänger)</h5>
      <p className="text-sm text-amber-700 dark:text-purple-300 mb-2">
        <strong>Eigenschaften:</strong> Flache Sohle, wenig Vorspannung, komfortabel
      </p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside mb-2">
        <li>Perfekt für Anfänger</li>
        <li>Komfortabel für längere Sessions</li>
        <li>Gut für vertikale Wände</li>
        <li>Weniger Leistung, aber mehr Komfort</li>
      </ul>
      <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">Beispiele:</p>
      <p className="text-sm text-amber-700 dark:text-amber-300">La Sportiva Tarantula, Scarpa Origin, Five Ten Rogue</p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">2. Moderat (Fortgeschrittene)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Eigenschaften:</strong> Leichte Vorspannung, gute Balance zwischen Komfort und Leistung
      </p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside mb-2">
        <li>Für fortgeschrittene Kletterer</li>
        <li>Gut für verschiedene Wandwinkel</li>
        <li>Mehr Leistung als neutrale Schuhe</li>
        <li>Noch relativ komfortabel</li>
      </ul>
      <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">Beispiele:</p>
      <p className="text-sm text-amber-700 dark:text-amber-300">La Sportiva Katana, Scarpa Vapor V, Five Ten Anasazi</p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-400 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">3. Aggressiv (Profis)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Eigenschaften:</strong> Starke Vorspannung, asymmetrische Form, maximale Leistung
      </p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside mb-2">
        <li>Für sehr fortgeschrittene Kletterer</li>
        <li>Optimal für Überhänge</li>
        <li>Maximale Leistung</li>
        <li>Weniger komfortabel, kürzere Tragedauer</li>
      </ul>
      <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">Beispiele:</p>
      <p className="text-sm text-amber-700 dark:text-amber-300">La Sportiva Solution, Scarpa Drago, Five Ten Team</p>
    </div>
  </div>
</div>

**Für Anfänger:** Beginne mit neutralen Schuhen! Sie sind komfortabler und du wirst sie länger tragen können.

---

### Passform: Eng, aber nicht schmerzhaft

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Die häufigste Frage</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        <strong>"Wie eng sollen Kletterschuhe sein?"</strong> Das ist die wichtigste Frage beim Kauf.
      </p>
      <p className="text-sm text-red-700 dark:text-red-300">
        <strong>Die Antwort:</strong> Eng genug, dass keine Luft ist, aber nicht so eng, dass es schmerzt. Deine Zehen sollten leicht gekrümmt sein, aber nicht zusammengequetscht.
      </p>
    </div>
  </div>
</div>

#### Wie findest du die richtige Passform?

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    Der Passform-Check
  </h3>
  
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">1. Keine Luft</h4>
      <p>Der Schuh sollte eng anliegen, ohne dass Luft zwischen Fuß und Schuh ist. Keine Falten im Material.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">2. Zehen leicht gekrümmt</h4>
      <p>Deine Zehen sollten leicht gekrümmt sein, aber nicht zusammengequetscht. Sie sollten die Vorderseite des Schuhs berühren.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">3. Keine Druckstellen</h4>
      <p>Es sollte keine schmerzhaften Druckstellen geben. Wenn es sofort wehtut, ist der Schuh zu eng.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">4. Ferse sitzt</h4>
      <p>Die Ferse sollte gut sitzen, ohne dass sie rutscht. Wenn die Ferse rutscht, ist der Schuh zu groß.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">5. Teste an der Wand</h4>
      <p>Wenn möglich, teste die Schuhe an der Wand. Stehe auf kleinen Tritten und spüre, ob du genug Kontrolle hast.</p>
    </div>
  </div>
</div>

**Wichtig:** Kletterschuhe dehnen sich etwas aus, wenn du sie trägst. Sie sollten am Anfang etwas enger sein, aber nicht schmerzhaft.

---

### Leisten vs. Klettverschluss vs. Schnürung

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">Verschluss-Systeme</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">1. Leisten (Slip-On)</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
        <strong>Vorteile:</strong> Einfach an- und auszuziehen, leicht, keine Schnürsenkel
      </p>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        <strong>Nachteile:</strong> Weniger Anpassungsfähigkeit, kann rutschen
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">2. Klettverschluss (Velcro)</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
        <strong>Vorteile:</strong> Schnell an- und auszuziehen, gute Anpassungsfähigkeit, beliebt bei Boulderern
      </p>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        <strong>Nachteile:</strong> Kann sich lösen bei starker Belastung
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">3. Schnürung (Laces)</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
        <strong>Vorteile:</strong> Beste Anpassungsfähigkeit, sicherer Sitz, keine Bewegung
      </p>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        <strong>Nachteile:</strong> Länger zum An- und Ausziehen, Schnürsenkel können reißen
      </p>
    </div>
  </div>
</div>

**Für Anfänger:** Klettverschluss ist am praktischsten – schnell an- und auszuziehen, gute Anpassungsfähigkeit.

---

### Asymmetrie & Downturn

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">Fortgeschrittene Konzepte</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-purple-200 dark:border-purple-700">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Asymmetrie</h5>
      <p className="text-sm text-purple-700 dark:text-purple-300">
        Asymmetrische Schuhe sind so geformt, dass die große Zehe mehr Kraft übertragen kann. Das ist besonders wichtig für kleine Tritte und Überhänge. Je asymmetrischer, desto mehr Leistung, aber auch weniger Komfort.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-purple-200 dark:border-purple-700">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Downturn</h5>
      <p className="text-sm text-purple-700 dark:text-purple-300">
        Downturn bedeutet, dass die Zehenspitze nach unten zeigt. Das ermöglicht mehr Kraft auf kleine Tritte, ist aber weniger komfortabel. Anfänger sollten Schuhe mit wenig oder keinem Downturn wählen.
      </p>
    </div>
  </div>
</div>

---

### Anfänger-Empfehlungen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <ShoppingBag className="text-green-600 dark:text-green-400" size={24} />
    Die besten Schuhe für Anfänger
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">La Sportiva Tarantula</h4>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Neutral, komfortabel</li>
        <li>Gut für Anfänger</li>
        <li>Preiswert</li>
        <li>Schmale Passform</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Scarpa Origin</h4>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Neutral, komfortabel</li>
        <li>Breitere Passform</li>
        <li>Gut für breitere Füße</li>
        <li>Preiswert</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Five Ten Rogue</h4>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Sehr komfortabel</li>
        <li>Gute Passform für viele Füße</li>
        <li>Guter Grip</li>
        <li>Etwas teurer</li>
      </ul>
    </div>
  </div>
</div>

---

### Marken & Passformen

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Welche Marke passt zu deinem Fuß?</h4>
  
  <div className="space-y-3 text-sm text-amber-700 dark:text-amber-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>La Sportiva:</strong> Schmale Passform, gut für schmale Füße</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Scarpa:</strong> Breitere Passform, gut für breite Füße</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Five Ten:</strong> Komfortable Passform, gut für viele Füße</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Evolv:</strong> Breite Passform, gut für breite Füße</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Boreal:</strong> Komfortable Passform</p>
    </div>
  </div>
</div>

**Wichtig:** Jede Marke hat eine andere Passform. Probiere verschiedene Marken aus, um die richtige für deinen Fuß zu finden!

---

### Pflege: Geruch vermeiden, richtig lagern, Resohlen

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">Wie du deine Schuhe pflegst</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-blue-200 dark:border-blue-700">
      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Geruch vermeiden</h5>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li>Nach dem Klettern auslüften lassen</li>
        <li>Nicht in geschlossenen Taschen lagern</li>
        <li>Schuh-Deodorant verwenden</li>
        <li>Bei Bedarf waschen (vorsichtig!)</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-blue-200 dark:border-blue-700">
      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Richtig lagern</h5>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li>An einem kühlen, trockenen Ort lagern</li>
        <li>Nicht in der Sonne oder Hitze</li>
        <li>Nicht zusammengedrückt lagern</li>
        <li>Schuh-Baum verwenden (optional)</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-blue-200 dark:border-blue-700">
      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Resohlen</h5>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
        Wenn die Sohle abgenutzt ist, kannst du die Schuhe resohlen lassen. Das ist günstiger als neue Schuhe zu kaufen.
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li>Kosten: ca. 30-50€</li>
        <li>Lohnt sich bei guten Schuhen</li>
        <li>Lässt die Schuhe wie neu aussehen</li>
      </ul>
    </div>
  </div>
</div>

---

### Zusammenfassung: Die wichtigsten Punkte

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Dein Kletterschuh-Check
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Warum spezielle Schuhe:</strong> Sticky Rubber und Vorspannung geben dir den Grip und die Kontrolle, die du brauchst.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Schuhtyp:</strong> Anfänger sollten mit neutralen Schuhen beginnen (La Sportiva Tarantula, Scarpa Origin, Five Ten Rogue).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Passform:</strong> Eng, aber nicht schmerzhaft. Keine Luft, Zehen leicht gekrümmt, keine Druckstellen.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Verschluss:</strong> Klettverschluss ist für Anfänger am praktischsten.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Marke:</strong> La Sportiva (schmal), Scarpa (breit), Five Ten (komfortabel) – probiere verschiedene aus!</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Pflege:</strong> Nach dem Klettern auslüften, richtig lagern, bei Bedarf resohlen lassen.</span>
    </li>
  </ul>
</div>

**Denk daran:** Kletterschuhe sind eine Investition. Nimm dir Zeit, die richtigen zu finden. Probiere verschiedene Marken und Größen aus. Die richtigen Schuhe machen einen riesigen Unterschied!
    `,
    en: `
### The Most Important Piece of Equipment

Climbing shoes are not optional – they are **absolutely necessary**. Normal sneakers don't work for bouldering. Why? Because climbing shoes are specifically designed for climbing and give you the precision, grip, and control you need.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Footprints className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Why Special Shoes?</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Climbing shoes are the only piece of equipment you really need to boulder. Everything else is optional, but without climbing shoes you'll quickly hit your limits.
      </p>
    </div>
  </div>
</div>

---

### Why Special Shoes? Sticky Rubber & Tension

#### Sticky Rubber: The Magical Grip

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">What Is Sticky Rubber?</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Climbing shoes have a special rubber sole that creates <strong>much more friction</strong> than normal shoe soles. This "sticky rubber" sole allows you to:
  </p>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
    <li>Stand on small holds that would be impossible with normal shoes</li>
    <li>Have more control and precision</li>
    <li>Better distribute your weight</li>
    <li>Stand on slopers (bad holds)</li>
  </ul>
</div>

**Comparison:** With normal sneakers, you slip off small holds. With climbing shoes, you can stand on tiny holds.

#### Tension: The Shape Makes the Difference

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">What Is Tension?</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
    Tension means the shoe has a <strong>curved shape</strong> that puts your foot in an optimal position. This enables:
  </p>
  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
    <li>More power transfer to the toe</li>
    <li>Better standing on small holds</li>
    <li>More precise movements</li>
    <li>More control in overhangs</li>
  </ul>
</div>

**Important:** More tension = more performance, but also less comfort. Beginners should start with less tension.

---

### The 3 Shoe Types: Neutral, Moderate, Aggressive

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Which Type Fits You?</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">1. Neutral (Beginner)</h5>
      <p className="text-sm text-amber-700 dark:text-purple-300 mb-2">
        <strong>Features:</strong> Flat sole, little tension, comfortable
      </p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside mb-2">
        <li>Perfect for beginners</li>
        <li>Comfortable for longer sessions</li>
        <li>Good for vertical walls</li>
        <li>Less performance, but more comfort</li>
      </ul>
      <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">Examples:</p>
      <p className="text-sm text-amber-700 dark:text-amber-300">La Sportiva Tarantula, Scarpa Origin, Five Ten Rogue</p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">2. Moderate (Advanced)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Features:</strong> Light tension, good balance between comfort and performance
      </p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside mb-2">
        <li>For advanced climbers</li>
        <li>Good for various wall angles</li>
        <li>More performance than neutral shoes</li>
        <li>Still relatively comfortable</li>
      </ul>
      <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">Examples:</p>
      <p className="text-sm text-amber-700 dark:text-amber-300">La Sportiva Katana, Scarpa Vapor V, Five Ten Anasazi</p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-400 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">3. Aggressive (Professionals)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Features:</strong> Strong tension, asymmetric shape, maximum performance
      </p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside mb-2">
        <li>For very advanced climbers</li>
        <li>Optimal for overhangs</li>
        <li>Maximum performance</li>
        <li>Less comfortable, shorter wear time</li>
      </ul>
      <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">Examples:</p>
      <p className="text-sm text-amber-700 dark:text-amber-300">La Sportiva Solution, Scarpa Drago, Five Ten Team</p>
    </div>
  </div>
</div>

**For Beginners:** Start with neutral shoes! They're more comfortable and you can wear them longer.

---

### Fit: Tight, But Not Painful

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">The Most Common Question</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        <strong>"How tight should climbing shoes be?"</strong> This is the most important question when buying.
      </p>
      <p className="text-sm text-red-700 dark:text-red-300">
        <strong>The Answer:</strong> Tight enough that there's no air, but not so tight that it hurts. Your toes should be slightly curled, but not squashed together.
      </p>
    </div>
  </div>
</div>

#### How Do You Find the Right Fit?

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    The Fit Checklist
  </h3>
  
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">1. No Air</h4>
      <p>The shoe should fit snugly without air between foot and shoe. No wrinkles in the material.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">2. Toes Slightly Curled</h4>
      <p>Your toes should be slightly curled, but not squashed together. They should touch the front of the shoe.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">3. No Pressure Points</h4>
      <p>There should be no painful pressure points. If it hurts immediately, the shoe is too tight.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">4. Heel Fits</h4>
      <p>The heel should fit well without slipping. If the heel slips, the shoe is too large.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">5. Test on Wall</h4>
      <p>If possible, test the shoes on the wall. Stand on small holds and feel if you have enough control.</p>
    </div>
  </div>
</div>

**Important:** Climbing shoes stretch a bit when you wear them. They should be slightly tighter at the beginning, but not painful.

---

### Last vs. Velcro vs. Laces

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">Closure Systems</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">1. Slip-On</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
        <strong>Advantages:</strong> Easy to put on and take off, light, no laces
      </p>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        <strong>Disadvantages:</strong> Less adjustability, can slip
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">2. Velcro</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
        <strong>Advantages:</strong> Quick to put on and take off, good adjustability, popular with boulderers
      </p>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        <strong>Disadvantages:</strong> Can come loose under heavy load
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">3. Laces</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
        <strong>Advantages:</strong> Best adjustability, secure fit, no movement
      </p>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        <strong>Disadvantages:</strong> Longer to put on and take off, laces can break</p>
    </div>
  </div>
</div>

**For Beginners:** Velcro is most practical – quick to put on and take off, good adjustability.

---

### Asymmetry & Downturn

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">Advanced Concepts</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-purple-200 dark:border-purple-700">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Asymmetry</h5>
      <p className="text-sm text-purple-700 dark:text-purple-300">
        Asymmetric shoes are shaped so the big toe can transfer more power. This is especially important for small holds and overhangs. The more asymmetric, the more performance, but also less comfort.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-purple-200 dark:border-purple-700">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Downturn</h5>
      <p className="text-sm text-purple-700 dark:text-purple-300">
        Downturn means the toe points downward. This enables more power on small holds, but is less comfortable. Beginners should choose shoes with little or no downturn.
      </p>
    </div>
  </div>
</div>

---

### Beginner Recommendations

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <ShoppingBag className="text-green-600 dark:text-green-400" size={24} />
    The Best Shoes for Beginners
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">La Sportiva Tarantula</h4>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Neutral, comfortable</li>
        <li>Good for beginners</li>
        <li>Affordable</li>
        <li>Narrow fit</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Scarpa Origin</h4>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Neutral, comfortable</li>
        <li>Wider fit</li>
        <li>Good for wider feet</li>
        <li>Affordable</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Five Ten Rogue</h4>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Very comfortable</li>
        <li>Good fit for many feet</li>
        <li>Good grip</li>
        <li>Somewhat more expensive</li>
      </ul>
    </div>
  </div>
</div>

---

### Brands & Fits

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Which Brand Fits Your Foot?</h4>
  
  <div className="space-y-3 text-sm text-amber-700 dark:text-amber-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>La Sportiva:</strong> Narrow fit, good for narrow feet</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Scarpa:</strong> Wider fit, good for wide feet</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Five Ten:</strong> Comfortable fit, good for many feet</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Evolv:</strong> Wide fit, good for wide feet</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Boreal:</strong> Comfortable fit</p>
    </div>
  </div>
</div>

**Important:** Each brand has a different fit. Try different brands to find the right one for your foot!

---

### Care: Avoid Odor, Store Properly, Resole

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">How to Care for Your Shoes</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-blue-200 dark:border-blue-700">
      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Avoid Odor</h5>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li>Air out after climbing</li>
        <li>Don't store in closed bags</li>
        <li>Use shoe deodorant</li>
        <li>Wash if needed (carefully!)</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-blue-200 dark:border-blue-700">
      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Store Properly</h5>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li>Store in a cool, dry place</li>
        <li>Not in sun or heat</li>
        <li>Don't store compressed</li>
        <li>Use shoe tree (optional)</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-blue-200 dark:border-blue-700">
      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Resole</h5>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
        When the sole is worn, you can have the shoes resoled. This is cheaper than buying new shoes.
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li>Cost: about 30-50€</li>
        <li>Worth it for good shoes</li>
        <li>Makes shoes look like new</li>
      </ul>
    </div>
  </div>
</div>

---

### Summary: The Most Important Points

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Your Climbing Shoe Checklist
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Why special shoes:</strong> Sticky rubber and tension give you the grip and control you need.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Shoe type:</strong> Beginners should start with neutral shoes (La Sportiva Tarantula, Scarpa Origin, Five Ten Rogue).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Fit:</strong> Tight, but not painful. No air, toes slightly curled, no pressure points.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Closure:</strong> Velcro is most practical for beginners.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Brand:</strong> La Sportiva (narrow), Scarpa (wide), Five Ten (comfortable) – try different ones!</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Care:</strong> Air out after climbing, store properly, resole if needed.</span>
    </li>
  </ul>
</div>

**Remember:** Climbing shoes are an investment. Take time to find the right ones. Try different brands and sizes. The right shoes make a huge difference!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Die richtigen Kletterschuhe finden",
      description: "Lerne, wie du die richtigen Kletterschuhe für dich findest.",
      checklist: [
        { text: "Gehe in einen Klettershop oder eine Halle mit Verleih: Probiere verschiedene Marken aus (La Sportiva, Scarpa, Five Ten)", checked: false },
        { text: "Teste die Passform: Eng, aber nicht schmerzhaft. Keine Luft, Zehen leicht gekrümmt, keine Druckstellen", checked: false },
        { text: "Wenn möglich, teste die Schuhe an der Wand: Stehe auf kleinen Tritten und spüre die Kontrolle", checked: false },
        { text: "Wichtig: Beginne mit neutralen Schuhen (nicht aggressiv!) – sie sind komfortabler für Anfänger", checked: false },
        { text: "Vergleiche verschiedene Größen: Kletterschuhe sollten am Anfang etwas enger sein, dehnen sich aber aus", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Find the Right Climbing Shoes",
      description: "Learn how to find the right climbing shoes for you.",
      checklist: [
        { text: "Go to a climbing shop or gym with rental: Try different brands (La Sportiva, Scarpa, Five Ten)", checked: false },
        { text: "Test the fit: Tight, but not painful. No air, toes slightly curled, no pressure points", checked: false },
        { text: "If possible, test the shoes on the wall: Stand on small holds and feel the control", checked: false },
        { text: "Important: Start with neutral shoes (not aggressive!) – they're more comfortable for beginners", checked: false },
        { text: "Compare different sizes: Climbing shoes should be slightly tighter at first, but stretch out", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum braucht man spezielle Kletterschuhe?",
        answer: "Kletterschuhe haben Sticky Rubber (eine spezielle Gummisohle mit viel mehr Reibung) und Vorspannung (eine gebogene Form, die den Fuß in eine optimale Position bringt). Diese Eigenschaften geben dir den Grip, die Präzision und die Kontrolle, die du brauchst, um auf kleinen Tritten zu stehen und präzise Bewegungen auszuführen."
      },
      {
        question: "Welche drei Schuhtypen gibt es und welcher ist für Anfänger geeignet?",
        answer: "Es gibt neutrale, moderate und aggressive Schuhe. Neutrale Schuhe sind für Anfänger am besten geeignet, weil sie flache Sohlen, wenig Vorspannung und viel Komfort haben. Beispiele sind La Sportiva Tarantula, Scarpa Origin und Five Ten Rogue."
      },
      {
        question: "Wie sollte die Passform von Kletterschuhen sein?",
        answer: "Kletterschuhe sollten eng sein, aber nicht schmerzhaft. Es sollte keine Luft zwischen Fuß und Schuh sein, die Zehen sollten leicht gekrümmt sein (aber nicht zusammengequetscht), es sollten keine Druckstellen geben, und die Ferse sollte gut sitzen ohne zu rutschen. Kletterschuhe dehnen sich etwas aus, wenn man sie trägt, daher sollten sie am Anfang etwas enger sein."
      }
    ],
    en: [
      {
        question: "Why do you need special climbing shoes?",
        answer: "Climbing shoes have sticky rubber (a special rubber sole with much more friction) and tension (a curved shape that puts the foot in an optimal position). These features give you the grip, precision, and control you need to stand on small holds and perform precise movements."
      },
      {
        question: "What are the three shoe types and which is suitable for beginners?",
        answer: "There are neutral, moderate, and aggressive shoes. Neutral shoes are best for beginners because they have flat soles, little tension, and lots of comfort. Examples are La Sportiva Tarantula, Scarpa Origin, and Five Ten Rogue."
      },
      {
        question: "How should climbing shoes fit?",
        answer: "Climbing shoes should be tight, but not painful. There should be no air between foot and shoe, toes should be slightly curled (but not squashed together), there should be no pressure points, and the heel should fit well without slipping. Climbing shoes stretch a bit when worn, so they should be slightly tighter at first."
      }
    ]
  }
};


