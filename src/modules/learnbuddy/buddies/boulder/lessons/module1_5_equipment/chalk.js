import { Hand, AlertCircle, Info, Zap, TrendingUp } from 'lucide-react';

export const chalk = {
  title: {
    de: "Chalk - Für besseren Grip",
    en: "Chalk - For Better Grip"
  },
  description: {
    de: "Lerne alles über Chalk: Warum Magnesiumcarbonat verwendet wird, welche Arten es gibt und wie du es richtig anwendest.",
    en: "Learn everything about chalk: why magnesium carbonate is used, what types exist, and how to apply it correctly."
  },
  content: {
    de: `
### Chalk: Dein Freund für besseren Grip

Chalk (Magnesiumcarbonat) ist ein wichtiger Helfer beim Bouldern. Es trocknet deine Hände und verbessert den Grip auf Griffen. Aber zu viel Chalk kann auch kontraproduktiv sein.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Hand className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Warum Chalk?</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Wenn deine Hände schwitzen, wird der Grip schlechter. Chalk trocknet die Hände und erhöht die Reibung zwischen Hand und Griff. Das kann den Unterschied zwischen Erfolg und Scheitern machen.
      </p>
    </div>
  </div>
</div>

---

### Warum Magnesiumcarbonat?

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">Die Wissenschaft dahinter</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Magnesiumcarbonat ist ein weißes Pulver, das Feuchtigkeit absorbiert. Es ist:
  </p>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
    <li><strong>Ungiftig:</strong> Sicher für die Haut</li>
    <li><strong>Absorbierend:</strong> Nimmt Schweiß auf</li>
    <li><strong>Gleitfähig:</strong> Verbessert die Reibung</li>
    <li><strong>Günstig:</strong> Relativ preiswert</li>
  </ul>
</div>

**Wichtig:** Chalk ist kein Wundermittel. Es hilft, aber gute Technik ist wichtiger!

---

### Pulver vs. Block vs. Liquid Chalk

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Welche Art passt zu dir?</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">1. Pulver-Chalk (Loose Chalk)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Vorteile:</strong> Günstig, einfach zu verwenden, viel Kontrolle über die Menge
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Nachteile:</strong> Kann viel Staub erzeugen, nicht in allen Hallen erlaubt
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        <strong>Verwendung:</strong> In einen Chalk-Bag oder Chalk-Bucket geben, Hände eintauchen
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">2. Block-Chalk</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Vorteile:</strong> Weniger Staub, länger haltbar, einfach zu transportieren
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Nachteile:</strong> Etwas teurer, muss zerkleinert werden
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        <strong>Verwendung:</strong> Block reiben, um Pulver zu erzeugen, dann wie Pulver-Chalk verwenden
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">3. Liquid Chalk</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Vorteile:</strong> Kein Staub, in vielen Hallen bevorzugt oder vorgeschrieben, lange Haltbarkeit auf der Haut
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Nachteile:</strong> Teurer, muss trocknen, weniger Kontrolle über die Menge
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        <strong>Verwendung:</strong> Auf Hände auftragen, trocknen lassen (30-60 Sekunden)
      </p>
    </div>
  </div>
</div>

**Für Anfänger:** Liquid Chalk ist am praktischsten, besonders wenn deine Halle es bevorzugt oder vorschreibt.

---

### Chalk-Bag vs. Chalk-Bucket

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">Wie transportierst du dein Chalk?</h4>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-purple-200 dark:border-purple-700">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Chalk-Bag</h5>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
        <strong>Für:</strong> Unterwegs, Outdoor-Bouldern, wenn du wenig Chalk brauchst
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
        <li>Klein und kompakt</li>
        <li>Am Gürtel oder Rucksack befestigen</li>
        <li>Gut für unterwegs</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-purple-200 dark:border-purple-700">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Chalk-Bucket</h5>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
        <strong>Für:</strong> In der Halle, wenn du viel Chalk brauchst, Team-Nutzung
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
        <li>Größer, mehr Chalk</li>
        <li>Auf dem Boden stellen</li>
        <li>Gut für längere Sessions</li>
      </ul>
    </div>
  </div>
</div>

**Für Anfänger:** Ein kleiner Chalk-Bag reicht völlig aus. Du kannst später immer noch auf einen Bucket umsteigen.

---

### Hallen-Regeln: Viele nur Liquid Chalk!

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">WICHTIG: Informiere dich!</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        <strong>Viele Hallen erlauben nur Liquid Chalk!</strong> Pulver-Chalk erzeugt viel Staub, der die Luft verschmutzt und die Griffe verschmutzt.
      </p>
      <p className="text-sm text-red-700 dark:text-red-300">
        <strong>Was tun?</strong> Informiere dich vor deinem ersten Besuch über die Regeln der Halle. Schaue auf die Website oder frage beim Personal nach.
      </p>
    </div>
  </div>
</div>

#### Warum nur Liquid Chalk?

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Die Gründe</h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li><strong>Luftqualität:</strong> Pulver-Chalk erzeugt Staub, der die Luft verschmutzt</li>
    <li><strong>Sauberkeit:</strong> Weniger Staub auf dem Boden und den Griffen</li>
    <li><strong>Gesundheit:</strong> Weniger Staub bedeutet weniger Atemprobleme</li>
    <li><strong>Wartung:</strong> Hallen müssen weniger saubermachen</li>
  </ul>
</div>

**Tipp:** Wenn du Liquid Chalk verwendest, bist du auf der sicheren Seite – es ist in fast allen Hallen erlaubt!

---

### Wie viel ist zu viel? Over-chalking = schlechter Grip

<div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Info className="text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">Der häufigste Fehler</h4>
      <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
        <strong>Zu viel Chalk verschlechtert den Grip!</strong> Wenn deine Hände komplett weiß sind und das Chalk dick aufgetragen ist, kann es rutschig werden.
      </p>
      <p className="text-sm text-orange-700 dark:text-orange-300">
        <strong>Die Lösung:</strong> Eine dünne Schicht Chalk reicht völlig aus. Deine Hände sollten leicht weiß sein, nicht komplett bedeckt.
      </p>
    </div>
  </div>
</div>

#### Wie viel Chalk brauchst du wirklich?

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Zap className="text-green-600 dark:text-green-400" size={24} />
    Die richtige Menge
  </h3>
  
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">✅ Richtig:</h4>
      <ul className="space-y-1 list-disc list-inside">
        <li>Dünne, gleichmäßige Schicht</li>
        <li>Hände sind leicht weiß</li>
        <li>Chalk ist nicht klumpig</li>
        <li>Du kannst noch die Haut sehen</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">❌ Zu viel:</h4>
      <ul className="space-y-1 list-disc list-inside">
        <li>Dicke, klumpige Schicht</li>
        <li>Hände sind komplett weiß</li>
        <li>Chalk fällt ab</li>
        <li>Kann rutschig werden</li>
      </ul>
    </div>
  </div>
</div>

**Tipp:** Weniger ist mehr! Eine dünne Schicht Chalk ist effektiver als eine dicke Schicht.

---

### Wie wendest du Chalk richtig an?

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">Die richtige Technik</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Mit Pulver-Chalk:</h5>
      <ol className="text-sm text-teal-700 dark:text-teal-300 space-y-1 list-decimal list-inside">
        <li>Hände in Chalk-Bag oder Bucket eintauchen</li>
        <li>Hände zusammenreiben</li>
        <li>Überschüssiges Chalk abklopfen</li>
        <li>Dünne, gleichmäßige Schicht sollte bleiben</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Mit Liquid Chalk:</h5>
      <ol className="text-sm text-teal-700 dark:text-teal-300 space-y-1 list-decimal list-inside">
        <li>Kleine Menge (ca. 1-2 Pumpen) auf Hände geben</li>
        <li>Gleichmäßig verteilen</li>
        <li>30-60 Sekunden trocknen lassen</li>
        <li>Fertig! Hält länger als Pulver-Chalk</li>
      </ol>
    </div>
  </div>
</div>

**Wann nachchalken?**
- Wenn deine Hände schwitzen
- Nach einigen Versuchen
- Wenn der Grip schlechter wird
- Nicht nach jedem Versuch! (Das ist zu viel)

---

### Zusammenfassung: Die wichtigsten Punkte

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Dein Chalk-Check
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Warum Chalk:</strong> Trocknet die Hände und verbessert den Grip durch erhöhte Reibung.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Arten:</strong> Pulver-Chalk (günstig, viel Staub), Block-Chalk (weniger Staub), Liquid Chalk (kein Staub, in vielen Hallen bevorzugt).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Hallen-Regeln:</strong> Viele Hallen erlauben nur Liquid Chalk! Informiere dich vorher.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Menge:</strong> Weniger ist mehr! Eine dünne, gleichmäßige Schicht reicht. Zu viel Chalk verschlechtert den Grip.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Anwendung:</strong> Hände eintauchen (Pulver) oder auftragen (Liquid), gleichmäßig verteilen, überschüssiges abklopfen.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Nachchalken:</strong> Nur wenn nötig (schwitzende Hände, schlechter Grip), nicht nach jedem Versuch!</span>
    </li>
  </ul>
</div>

**Denk daran:** Chalk ist ein Hilfsmittel, kein Ersatz für gute Technik. Eine dünne Schicht reicht völlig aus. Zu viel Chalk kann kontraproduktiv sein!
    `,
    en: `
### Chalk: Your Friend for Better Grip

Chalk (magnesium carbonate) is an important helper in bouldering. It dries your hands and improves grip on holds. But too much chalk can also be counterproductive.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Hand className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Why Chalk?</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        When your hands sweat, grip gets worse. Chalk dries the hands and increases friction between hand and hold. This can make the difference between success and failure.
      </p>
    </div>
  </div>
</div>

---

### Why Magnesium Carbonate?

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">The Science Behind It</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Magnesium carbonate is a white powder that absorbs moisture. It is:
  </p>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
    <li><strong>Non-toxic:</strong> Safe for skin</li>
    <li><strong>Absorbent:</strong> Absorbs sweat</li>
    <li><strong>Slippery:</strong> Improves friction</li>
    <li><strong>Affordable:</strong> Relatively inexpensive</li>
  </ul>
</div>

**Important:** Chalk is not a miracle cure. It helps, but good technique is more important!

---

### Powder vs. Block vs. Liquid Chalk

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Which Type Fits You?</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">1. Powder Chalk (Loose Chalk)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Advantages:</strong> Cheap, easy to use, lots of control over amount
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Disadvantages:</strong> Can create lots of dust, not allowed in all gyms
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        <strong>Usage:</strong> Put in chalk bag or bucket, dip hands in
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">2. Block Chalk</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Advantages:</strong> Less dust, longer lasting, easy to transport
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Disadvantages:</strong> Somewhat more expensive, needs to be crushed
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        <strong>Usage:</strong> Rub block to create powder, then use like powder chalk
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">3. Liquid Chalk</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Advantages:</strong> No dust, preferred or required in many gyms, long-lasting on skin
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Disadvantages:</strong> More expensive, needs to dry, less control over amount
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        <strong>Usage:</strong> Apply to hands, let dry (30-60 seconds)
      </p>
    </div>
  </div>
</div>

**For Beginners:** Liquid chalk is most practical, especially if your gym prefers or requires it.

---

### Chalk Bag vs. Chalk Bucket

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">How Do You Transport Your Chalk?</h4>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-purple-200 dark:border-purple-700">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Chalk Bag</h5>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
        <strong>For:</strong> On the go, outdoor bouldering, when you need little chalk
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
        <li>Small and compact</li>
        <li>Attach to belt or backpack</li>
        <li>Good for on the go</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-purple-200 dark:border-purple-700">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Chalk Bucket</h5>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
        <strong>For:</strong> In gym, when you need lots of chalk, team use
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
        <li>Larger, more chalk</li>
        <li>Place on floor</li>
        <li>Good for longer sessions</li>
      </ul>
    </div>
  </div>
</div>

**For Beginners:** A small chalk bag is completely sufficient. You can always upgrade to a bucket later.

---

### Gym Rules: Many Only Allow Liquid Chalk!

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">IMPORTANT: Inform Yourself!</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        <strong>Many gyms only allow liquid chalk!</strong> Powder chalk creates lots of dust that pollutes the air and dirties the holds.
      </p>
      <p className="text-sm text-red-700 dark:text-red-300">
        <strong>What to do?</strong> Inform yourself before your first visit about the gym's rules. Check the website or ask staff.
      </p>
    </div>
  </div>
</div>

#### Why Only Liquid Chalk?

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">The Reasons</h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li><strong>Air quality:</strong> Powder chalk creates dust that pollutes the air</li>
    <li><strong>Cleanliness:</strong> Less dust on floor and holds</li>
    <li><strong>Health:</strong> Less dust means fewer breathing problems</li>
    <li><strong>Maintenance:</strong> Gyms need to clean less</li>
  </ul>
</div>

**Tip:** If you use liquid chalk, you're on the safe side – it's allowed in almost all gyms!

---

### How Much Is Too Much? Over-chalking = Worse Grip

<div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Info className="text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">The Most Common Mistake</h4>
      <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
        <strong>Too much chalk worsens grip!</strong> If your hands are completely white and chalk is thickly applied, it can become slippery.
      </p>
      <p className="text-sm text-orange-700 dark:text-orange-300">
        <strong>The solution:</strong> A thin layer of chalk is completely sufficient. Your hands should be slightly white, not completely covered.
      </p>
    </div>
  </div>
</div>

#### How Much Chalk Do You Really Need?

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Zap className="text-green-600 dark:text-green-400" size={24} />
    The Right Amount
  </h3>
  
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">✅ Right:</h4>
      <ul className="space-y-1 list-disc list-inside">
        <li>Thin, even layer</li>
        <li>Hands are slightly white</li>
        <li>Chalk is not clumpy</li>
        <li>You can still see skin</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">❌ Too Much:</h4>
      <ul className="space-y-1 list-disc list-inside">
        <li>Thick, clumpy layer</li>
        <li>Hands are completely white</li>
        <li>Chalk falls off</li>
        <li>Can become slippery</li>
      </ul>
    </div>
  </div>
</div>

**Tip:** Less is more! A thin layer of chalk is more effective than a thick layer.

---

### How Do You Apply Chalk Correctly?

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">The Right Technique</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">With Powder Chalk:</h5>
      <ol className="text-sm text-teal-700 dark:text-teal-300 space-y-1 list-decimal list-inside">
        <li>Dip hands in chalk bag or bucket</li>
        <li>Rub hands together</li>
        <li>Knock off excess chalk</li>
        <li>Thin, even layer should remain</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">With Liquid Chalk:</h5>
      <ol className="text-sm text-teal-700 dark:text-teal-300 space-y-1 list-decimal list-inside">
        <li>Apply small amount (about 1-2 pumps) to hands</li>
        <li>Spread evenly</li>
        <li>Let dry for 30-60 seconds</li>
        <li>Done! Lasts longer than powder chalk</li>
      </ol>
    </div>
  </div>
</div>

**When to rechalk?**
- When your hands sweat
- After several attempts
- When grip gets worse
- Not after every attempt! (That's too much)

---

### Summary: The Most Important Points

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Your Chalk Checklist
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Why chalk:</strong> Dries hands and improves grip through increased friction.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Types:</strong> Powder chalk (cheap, lots of dust), block chalk (less dust), liquid chalk (no dust, preferred in many gyms).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Gym rules:</strong> Many gyms only allow liquid chalk! Inform yourself beforehand.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Amount:</strong> Less is more! A thin, even layer is sufficient. Too much chalk worsens grip.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Application:</strong> Dip hands (powder) or apply (liquid), spread evenly, knock off excess.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Rechalking:</strong> Only when needed (sweaty hands, worse grip), not after every attempt!</span>
    </li>
  </ul>
</div>

**Remember:** Chalk is an aid, not a substitute for good technique. A thin layer is completely sufficient. Too much chalk can be counterproductive!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Chalk richtig anwenden",
      description: "Lerne, wie du Chalk richtig verwendest und die richtige Menge findest.",
      checklist: [
        { text: "Informiere dich über die Chalk-Regeln in deiner Halle: Ist nur Liquid Chalk erlaubt?", checked: false },
        { text: "Teste verschiedene Chalk-Mengen: Zu wenig, richtig, zu viel – spüre den Unterschied im Grip", checked: false },
        { text: "Wichtig: Eine dünne, gleichmäßige Schicht reicht! Nicht nach jedem Versuch nachchalken", checked: false },
        { text: "Wenn du Liquid Chalk verwendest: Warte 30-60 Sekunden, bis es trocken ist, bevor du kletterst", checked: false },
        { text: "Beobachte andere Kletterer: Wie viel Chalk verwenden sie? Wann chalken sie nach?", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Apply Chalk Correctly",
      description: "Learn how to use chalk correctly and find the right amount.",
      checklist: [
        { text: "Learn about chalk rules in your gym: Is only liquid chalk allowed?", checked: false },
        { text: "Test different chalk amounts: Too little, right, too much – feel the difference in grip", checked: false },
        { text: "Important: A thin, even layer is enough! Don't rechalk after every attempt", checked: false },
        { text: "If you use liquid chalk: Wait 30-60 seconds until it's dry before climbing", checked: false },
        { text: "Observe other climbers: How much chalk do they use? When do they rechalk?", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum verwenden Kletterer Chalk?",
        answer: "Chalk (Magnesiumcarbonat) trocknet die Hände und verbessert den Grip durch erhöhte Reibung zwischen Hand und Griff. Wenn die Hände schwitzen, wird der Grip schlechter. Chalk absorbiert die Feuchtigkeit und ermöglicht besseren Halt."
      },
      {
        question: "Was ist der Unterschied zwischen Pulver-Chalk und Liquid Chalk?",
        answer: "Pulver-Chalk ist günstiger und einfacher zu verwenden, erzeugt aber viel Staub und ist in vielen Hallen nicht erlaubt. Liquid Chalk erzeugt keinen Staub, ist in vielen Hallen bevorzugt oder vorgeschrieben, hält länger auf der Haut, ist aber teurer und muss trocknen."
      },
      {
        question: "Warum kann zu viel Chalk den Grip verschlechtern?",
        answer: "Wenn zu viel Chalk aufgetragen wird (dicke, klumpige Schicht), kann es rutschig werden und den Grip verschlechtern. Eine dünne, gleichmäßige Schicht ist effektiver als eine dicke Schicht. Weniger ist mehr!"
      }
    ],
    en: [
      {
        question: "Why do climbers use chalk?",
        answer: "Chalk (magnesium carbonate) dries the hands and improves grip through increased friction between hand and hold. When hands sweat, grip gets worse. Chalk absorbs moisture and enables better hold."
      },
      {
        question: "What is the difference between powder chalk and liquid chalk?",
        answer: "Powder chalk is cheaper and easier to use, but creates lots of dust and is not allowed in many gyms. Liquid chalk creates no dust, is preferred or required in many gyms, lasts longer on skin, but is more expensive and needs to dry."
      },
      {
        question: "Why can too much chalk worsen grip?",
        answer: "When too much chalk is applied (thick, clumpy layer), it can become slippery and worsen grip. A thin, even layer is more effective than a thick layer. Less is more!"
      }
    ]
  }
};


