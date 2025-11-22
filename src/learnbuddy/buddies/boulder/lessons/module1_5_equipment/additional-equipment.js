import { Wrench, Shield, Heart, Mountain, Info, TrendingUp } from 'lucide-react';

export const additionalEquipment = {
  title: {
    de: "Weiteres Equipment",
    en: "Additional Equipment"
  },
  description: {
    de: "Lerne über weiteres nützliches Equipment: Bürste, Tape, Nagelfeile, Hautpflege und Crashpads für Outdoor-Bouldern.",
    en: "Learn about additional useful equipment: brush, tape, nail file, skin care, and crash pads for outdoor bouldering."
  },
  content: {
    de: `
### Nützliche Helfer für dein Bouldern

Neben Kletterschuhen und Chalk gibt es noch weitere Ausrüstungsgegenstände, die dein Bouldern verbessern können. Nicht alles ist notwendig, aber manches kann sehr hilfreich sein.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Wrench className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Was brauchst du wirklich?</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Die meisten dieser Gegenstände sind <strong>optional</strong>, aber sie können dein Bouldern angenehmer und sicherer machen. Manche sind nur für Outdoor-Bouldern relevant.
      </p>
    </div>
  </div>
</div>

---

### Bürste: Griffe reinigen für besseren Grip

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">Warum eine Bürste?</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Griffe werden mit der Zeit schmutzig – durch Chalk, Schweiß, Öl von den Händen. Eine Bürste entfernt diesen Schmutz und verbessert den Grip erheblich.
  </p>
  
  <div className="space-y-3 mt-4">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-green-800 dark:text-green-200 mb-1">Arten von Bürsten:</h5>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li><strong>Stahlbürste:</strong> Sehr effektiv, kann aber Griffe beschädigen</li>
        <li><strong>Nylonbürste:</strong> Sanfter, gut für die meisten Griffe</li>
        <li><strong>Bürste mit Griff:</strong> Praktisch zum Mitnehmen</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-green-800 dark:text-green-200 mb-1">Wann bürsten?</h5>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Vor dem Versuch, wenn der Griff schmutzig aussieht</li>
        <li>Wenn der Grip schlecht ist</li>
        <li>Nachdem viele Leute den Griff benutzt haben</li>
      </ul>
    </div>
  </div>
</div>

**Tipp:** Eine kleine Bürste passt in jeden Rucksack und kann den Unterschied machen!

---

### Tape: Hautschutz bei Verletzungen

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">Wann Tape verwenden?</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Tape wird verwendet, um verletzte Haut zu schützen oder zu stabilisieren. Es ist <strong>kein Ersatz</strong> für Heilung, sondern ein Schutz.
  </p>
  
  <div className="space-y-3 mt-4">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-1">Häufige Anwendungen:</h5>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li><strong>Offene Haut:</strong> Blasen, Risse, Wunden schützen</li>
        <li><strong>Fingerstabilisierung:</strong> Bei leichten Verletzungen (aber Vorsicht!)</li>
        <li><strong>Prävention:</strong> An Stellen, die oft gereizt werden</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-1">Wichtig:</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        Tape sollte <strong>nicht zu fest</strong> sein – es kann die Durchblutung beeinträchtigen. Bei ernsten Verletzungen: Arzt konsultieren!
      </p>
    </div>
  </div>
</div>

**Wichtig:** Tape ist kein Ersatz für Ruhe bei Verletzungen. Wenn etwas wehtut, höre auf zu klettern!

---

### Nagelfeile: Scharfe Kanten glätten

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">Warum eine Nagelfeile?</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
    Scharfe Nagelkanten können reißen oder die Haut verletzen. Eine Nagelfeile glättet diese Kanten und verhindert Verletzungen.
  </p>
  
  <div className="space-y-3 mt-4">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">Wann feilen?</h5>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
        <li>Nach dem Nägelschneiden</li>
        <li>Wenn die Nägel scharfe Kanten haben</li>
        <li>Vor dem Klettern, um Verletzungen zu vermeiden</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">Tipp:</h5>
      <p className="text-sm text-purple-700 dark:text-purple-300">
        Eine kleine Nagelfeile passt in jeden Rucksack und kann vor dem Klettern schnell verwendet werden.
      </p>
    </div>
  </div>
</div>

---

### Hautpflege: Creme, Balsam

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4 flex items-center gap-2">
    <Heart className="text-amber-600 dark:text-amber-400" size={24} />
    Deine Hände sind dein Werkzeug
  </h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
    Beim Bouldern werden deine Hände stark beansprucht. Gute Hautpflege hilft, Verletzungen zu vermeiden und die Heilung zu beschleunigen.
  </p>
  
  <div className="space-y-4 mt-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Wann pflegen?</h5>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li><strong>Nach dem Klettern:</strong> Hände waschen und eincremen</li>
        <li><strong>Bei trockener Haut:</strong> Regelmäßig eincremen</li>
        <li><strong>Bei Rissen oder Wunden:</strong> Spezielle Balsame verwenden</li>
        <li><strong>Vor dem Schlafen:</strong> Intensive Pflege über Nacht</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Empfohlene Produkte:</h5>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li><strong>Climb On!</strong> Sehr beliebt, gute Heilungseigenschaften</li>
        <li><strong>Rhino Repair:</strong> Speziell für Kletterer entwickelt</li>
        <li><strong>Jojoba-Öl:</strong> Natürlich, günstig, sehr effektiv</li>
        <li><strong>Handcreme:</strong> Jede gute Handcreme hilft</li>
      </ul>
    </div>
  </div>
</div>

**Tipp:** Pflege deine Hände regelmäßig – sie sind dein wichtigstes Werkzeug beim Bouldern!

---

### Crashpad (Outdoor): Größe, Dicke, Hinge vs. Taco-Pad

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <Mountain className="text-teal-600 dark:text-teal-400" size={24} />
    Nur für Outdoor-Bouldern
  </h4>
  <p className="text-sm text-teal-700 dark:text-teal-300 mb-3">
    Crashpads sind <strong>nur für Outdoor-Bouldern</strong> relevant. In der Halle sind Matten vorhanden. Aber wenn du draußen boulderst, brauchst du einen Crashpad.
  </p>
  
  <div className="space-y-4 mt-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Größe</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
        Crashpads gibt es in verschiedenen Größen:
      </p>
      <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-1 list-disc list-inside">
        <li><strong>Klein:</strong> Leicht zu transportieren, weniger Schutzfläche</li>
        <li><strong>Mittel:</strong> Gute Balance zwischen Größe und Gewicht</li>
        <li><strong>Groß:</strong> Mehr Schutzfläche, aber schwerer</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Dicke</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
        Die Dicke bestimmt, wie viel Aufprallenergie absorbiert wird:
      </p>
      <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-1 list-disc list-inside">
        <li><strong>Dünn (4-6cm):</strong> Leichter, weniger Schutz</li>
        <li><strong>Mittel (6-8cm):</strong> Gute Balance</li>
        <li><strong>Dick (8-10cm):</strong> Mehr Schutz, aber schwerer</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Hinge vs. Taco-Pad</h5>
      <div className="space-y-2 text-sm text-teal-700 dark:text-teal-300">
        <div>
          <p className="font-semibold mb-1">Hinge-Pad:</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Faltet sich in der Mitte</li>
            <li>Einfacher zu transportieren</li>
            <li>Kann Lücke in der Mitte haben</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-1">Taco-Pad:</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Faltet sich komplett zusammen</li>
            <li>Keine Lücke</li>
            <li>Schwerer zu transportieren</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

**Für Anfänger:** Crashpads sind teuer (200-400€). Wenn du nur Indoor boulderst, brauchst du keinen. Wenn du Outdoor boulderst, leihe dir erstmal einen oder kaufe gebraucht.

---

### Was ist wirklich notwendig?

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Info className="text-green-600 dark:text-green-400" size={24} />
    Prioritäten setzen
  </h3>
  
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">✅ Sehr nützlich:</h4>
      <ul className="space-y-1 list-disc list-inside">
        <li>Bürste (günstig, großer Unterschied)</li>
        <li>Hautpflege (verhindert Verletzungen)</li>
        <li>Nagelfeile (klein, hilfreich)</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">⚠️ Bei Bedarf:</h4>
      <ul className="space-y-1 list-disc list-inside">
        <li>Tape (nur bei Verletzungen)</li>
        <li>Crashpad (nur für Outdoor)</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">❌ Nicht notwendig:</h4>
      <ul className="space-y-1 list-disc list-inside">
        <li>Teure Spezialprodukte</li>
        <li>Übermäßige Ausrüstung</li>
        <li>Alles auf einmal kaufen</li>
      </ul>
    </div>
  </div>
</div>

---

### Zusammenfassung: Die wichtigsten Punkte

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Dein Equipment-Check
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Bürste:</strong> Reinigt Griffe und verbessert den Grip erheblich. Sehr nützlich!</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Tape:</strong> Schützt verletzte Haut, aber kein Ersatz für Ruhe bei Verletzungen.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Nagelfeile:</strong> Glättet scharfe Nagelkanten und verhindert Verletzungen.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Hautpflege:</strong> Regelmäßige Pflege verhindert Verletzungen und beschleunigt Heilung. Empfohlen: Climb On!, Rhino Repair, Jojoba-Öl.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Crashpad:</strong> Nur für Outdoor-Bouldern. Teuer (200-400€), erstmal leihen oder gebraucht kaufen.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Prioritäten:</strong> Bürste und Hautpflege sind sehr nützlich. Der Rest kann warten.</span>
    </li>
  </ul>
</div>

**Denk daran:** Du brauchst nicht alles auf einmal. Beginne mit dem Nötigsten und kaufe den Rest nach Bedarf. Gute Ausrüstung hilft, aber gute Technik ist wichtiger!
    `,
    en: `
### Useful Helpers for Your Bouldering

Besides climbing shoes and chalk, there are other equipment items that can improve your bouldering. Not everything is necessary, but some things can be very helpful.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Wrench className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">What Do You Really Need?</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Most of these items are <strong>optional</strong>, but they can make your bouldering more pleasant and safer. Some are only relevant for outdoor bouldering.
      </p>
    </div>
  </div>
</div>

---

### Brush: Clean Holds for Better Grip

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">Why a Brush?</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Holds get dirty over time – from chalk, sweat, oil from hands. A brush removes this dirt and significantly improves grip.
  </p>
  
  <div className="space-y-3 mt-4">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-green-800 dark:text-green-200 mb-1">Types of Brushes:</h5>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li><strong>Steel brush:</strong> Very effective, but can damage holds</li>
        <li><strong>Nylon brush:</strong> Gentler, good for most holds</li>
        <li><strong>Brush with handle:</strong> Practical to carry</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-green-800 dark:text-green-200 mb-1">When to Brush?</h5>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Before attempt if hold looks dirty</li>
        <li>When grip is poor</li>
        <li>After many people have used the hold</li>
      </ul>
    </div>
  </div>
</div>

**Tip:** A small brush fits in any backpack and can make a difference!

---

### Tape: Protect Skin from Injuries

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">When to Use Tape?</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Tape is used to protect or stabilize injured skin. It is <strong>not a substitute</strong> for healing, but protection.
  </p>
  
  <div className="space-y-3 mt-4">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-1">Common Applications:</h5>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li><strong>Open skin:</strong> Protect blisters, cracks, wounds</li>
        <li><strong>Finger stabilization:</strong> For minor injuries (but be careful!)</li>
        <li><strong>Prevention:</strong> On areas that are often irritated</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-1">Important:</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        Tape should <strong>not be too tight</strong> – it can affect circulation. For serious injuries: consult a doctor!
      </p>
    </div>
  </div>
</div>

**Important:** Tape is not a substitute for rest with injuries. If something hurts, stop climbing!

---

### Nail File: Smooth Sharp Edges

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">Why a Nail File?</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
    Sharp nail edges can tear or injure skin. A nail file smooths these edges and prevents injuries.
  </p>
  
  <div className="space-y-3 mt-4">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">When to File?</h5>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
        <li>After cutting nails</li>
        <li>When nails have sharp edges</li>
        <li>Before climbing to prevent injuries</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">Tip:</h5>
      <p className="text-sm text-purple-700 dark:text-purple-300">
        A small nail file fits in any backpack and can be used quickly before climbing.
      </p>
    </div>
  </div>
</div>

---

### Skin Care: Cream, Balm

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4 flex items-center gap-2">
    <Heart className="text-amber-600 dark:text-amber-400" size={24} />
    Your Hands Are Your Tool
  </h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
    In bouldering, your hands are heavily stressed. Good skin care helps prevent injuries and speeds healing.
  </p>
  
  <div className="space-y-4 mt-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">When to Care?</h5>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li><strong>After climbing:</strong> Wash hands and apply cream</li>
        <li><strong>With dry skin:</strong> Apply cream regularly</li>
        <li><strong>With cracks or wounds:</strong> Use special balms</li>
        <li><strong>Before sleeping:</strong> Intensive care overnight</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Recommended Products:</h5>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li><strong>Climb On!</strong> Very popular, good healing properties</li>
        <li><strong>Rhino Repair:</strong> Specifically developed for climbers</li>
        <li><strong>Jojoba oil:</strong> Natural, affordable, very effective</li>
        <li><strong>Hand cream:</strong> Any good hand cream helps</li>
      </ul>
    </div>
  </div>
</div>

**Tip:** Care for your hands regularly – they're your most important tool in bouldering!

---

### Crash Pad (Outdoor): Size, Thickness, Hinge vs. Taco Pad

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <Mountain className="text-teal-600 dark:text-teal-400" size={24} />
    Only for Outdoor Bouldering
  </h4>
  <p className="text-sm text-teal-700 dark:text-teal-300 mb-3">
    Crash pads are <strong>only relevant for outdoor bouldering</strong>. In the gym, mats are available. But if you boulder outside, you need a crash pad.
  </p>
  
  <div className="space-y-4 mt-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Size</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
        Crash pads come in different sizes:
      </p>
      <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-1 list-disc list-inside">
        <li><strong>Small:</strong> Easy to transport, less protection area</li>
        <li><strong>Medium:</strong> Good balance between size and weight</li>
        <li><strong>Large:</strong> More protection area, but heavier</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Thickness</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
        Thickness determines how much impact energy is absorbed:
      </p>
      <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-1 list-disc list-inside">
        <li><strong>Thin (4-6cm):</strong> Lighter, less protection</li>
        <li><strong>Medium (6-8cm):</strong> Good balance</li>
        <li><strong>Thick (8-10cm):</strong> More protection, but heavier</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Hinge vs. Taco Pad</h5>
      <div className="space-y-2 text-sm text-teal-700 dark:text-teal-300">
        <div>
          <p className="font-semibold mb-1">Hinge Pad:</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Folds in the middle</li>
            <li>Easier to transport</li>
            <li>Can have gap in middle</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-1">Taco Pad:</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Folds completely together</li>
            <li>No gap</li>
            <li>Heavier to transport</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

**For Beginners:** Crash pads are expensive (200-400€). If you only boulder indoors, you don't need one. If you boulder outdoors, rent one first or buy used.

---

### What Is Really Necessary?

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Info className="text-green-600 dark:text-green-400" size={24} />
    Set Priorities
  </h3>
  
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">✅ Very Useful:</h4>
      <ul className="space-y-1 list-disc list-inside">
        <li>Brush (affordable, big difference)</li>
        <li>Skin care (prevents injuries)</li>
        <li>Nail file (small, helpful)</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">⚠️ As Needed:</h4>
      <ul className="space-y-1 list-disc list-inside">
        <li>Tape (only for injuries)</li>
        <li>Crash pad (only for outdoor)</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">❌ Not Necessary:</h4>
      <ul className="space-y-1 list-disc list-inside">
        <li>Expensive specialty products</li>
        <li>Excessive equipment</li>
        <li>Buying everything at once</li>
      </ul>
    </div>
  </div>
</div>

---

### Summary: The Most Important Points

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Your Equipment Checklist
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Brush:</strong> Cleans holds and significantly improves grip. Very useful!</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Tape:</strong> Protects injured skin, but not a substitute for rest with injuries.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Nail file:</strong> Smooths sharp nail edges and prevents injuries.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Skin care:</strong> Regular care prevents injuries and speeds healing. Recommended: Climb On!, Rhino Repair, jojoba oil.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Crash pad:</strong> Only for outdoor bouldering. Expensive (200-400€), rent first or buy used.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Priorities:</strong> Brush and skin care are very useful. The rest can wait.</span>
    </li>
  </ul>
</div>

**Remember:** You don't need everything at once. Start with the essentials and buy the rest as needed. Good equipment helps, but good technique is more important!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Equipment kennenlernen",
      description: "Lerne, welche Ausrüstung wirklich nützlich ist und was du wirklich brauchst.",
      checklist: [
        { text: "Besorge dir eine Bürste: Teste, wie sich der Grip verbessert, wenn du Griffe bürstest", checked: false },
        { text: "Beginne mit Hautpflege: Creme deine Hände nach dem Klettern ein", checked: false },
        { text: "Wichtig: Du brauchst nicht alles auf einmal! Beginne mit dem Nötigsten (Bürste, Hautpflege)", checked: false },
        { text: "Wenn du Outdoor boulderst: Informiere dich über Crashpads oder leihe dir einen", checked: false },
        { text: "Beobachte andere Kletterer: Welche Ausrüstung verwenden sie? Was ist wirklich nützlich?", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Get to Know Equipment",
      description: "Learn which equipment is really useful and what you really need.",
      checklist: [
        { text: "Get a brush: Test how grip improves when you brush holds", checked: false },
        { text: "Start with skin care: Apply cream to your hands after climbing", checked: false },
        { text: "Important: You don't need everything at once! Start with the essentials (brush, skin care)", checked: false },
        { text: "If you boulder outdoors: Learn about crash pads or rent one", checked: false },
        { text: "Observe other climbers: What equipment do they use? What's really useful?", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum ist eine Bürste nützlich?",
        answer: "Eine Bürste entfernt Schmutz von Griffen (Chalk, Schweiß, Öl), der sich mit der Zeit ansammelt. Saubere Griffe bieten deutlich besseren Grip. Eine Bürste ist günstig und kann den Unterschied zwischen Erfolg und Scheitern machen."
      },
      {
        question: "Wann sollte man Tape verwenden?",
        answer: "Tape sollte verwendet werden, um verletzte Haut zu schützen (Blasen, Risse, Wunden) oder bei leichten Verletzungen zur Stabilisierung. Wichtig: Tape ist kein Ersatz für Ruhe bei Verletzungen. Wenn etwas wehtut, sollte man aufhören zu klettern. Bei ernsten Verletzungen sollte man einen Arzt konsultieren."
      },
      {
        question: "Was ist ein Crashpad und wann braucht man ihn?",
        answer: "Ein Crashpad ist eine dicke Matte für Outdoor-Bouldern, die den Fall abfängt. Er ist nur für Outdoor-Bouldern relevant, da in Hallen Matten vorhanden sind. Crashpads sind teuer (200-400€), daher sollte man sich erstmal einen leihen oder gebraucht kaufen, wenn man nur Indoor boulderst, braucht man keinen."
      }
    ],
    en: [
      {
        question: "Why is a brush useful?",
        answer: "A brush removes dirt from holds (chalk, sweat, oil) that accumulates over time. Clean holds offer significantly better grip. A brush is affordable and can make the difference between success and failure."
      },
      {
        question: "When should you use tape?",
        answer: "Tape should be used to protect injured skin (blisters, cracks, wounds) or for stabilization with minor injuries. Important: Tape is not a substitute for rest with injuries. If something hurts, you should stop climbing. For serious injuries, you should consult a doctor."
      },
      {
        question: "What is a crash pad and when do you need it?",
        answer: "A crash pad is a thick mat for outdoor bouldering that catches falls. It's only relevant for outdoor bouldering, as gyms have mats available. Crash pads are expensive (200-400€), so you should rent one first or buy used. If you only boulder indoors, you don't need one."
      }
    ]
  }
};

