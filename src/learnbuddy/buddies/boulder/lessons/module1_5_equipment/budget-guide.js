import { Wallet, ShoppingBag, AlertCircle, Target, TrendingUp, Info } from 'lucide-react';

export const budgetGuide = {
  title: {
    de: "Budget-Guide - Was kostet Bouldern wirklich?",
    en: "Budget Guide - What Does Bouldering Really Cost?"
  },
  description: {
    de: "Lerne, wie du mit einem kleinen Budget startest, was wirklich notwendig ist und was warten kann. Plus: Tipps zum Gebrauchtkauf.",
    en: "Learn how to start on a small budget, what's really necessary, and what can wait. Plus: tips for buying used."
  },
  content: {
    de: `
### Bouldern muss nicht teuer sein

Eine häufige Sorge von Anfängern: "Ist Bouldern teuer?" Die gute Nachricht: **Du kannst mit einem sehr kleinen Budget starten.** Du brauchst nicht alles auf einmal, und vieles kannst du erstmal leihen.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Wallet className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Die Realität</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Bouldern kann teuer werden, wenn du alles neu kaufst. Aber mit ein paar klugen Entscheidungen kannst du mit weniger als 50€ starten und trotzdem alles haben, was du brauchst.
      </p>
    </div>
  </div>
</div>

---

### Minimal-Setup: So startest du günstig

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    Was du wirklich brauchst
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">1. Kletterschuhe (geliehen)</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        <strong>Kosten:</strong> 3-5€ pro Session (Leihgebühr)
      </p>
      <p className="text-sm text-green-700 dark:text-green-300">
        <strong>Tipp:</strong> Die meisten Hallen verleihen Kletterschuhe. Das ist perfekt, um zu testen, ob Bouldern etwas für dich ist, bevor du investierst.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">2. Liquid Chalk</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        <strong>Kosten:</strong> 8-15€ (hält mehrere Monate)
      </p>
      <p className="text-sm text-green-700 dark:text-green-300">
        <strong>Tipp:</strong> Liquid Chalk ist in den meisten Hallen erlaubt und hält lange. Eine Flasche reicht für viele Sessions.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">3. Halleneintritt</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        <strong>Kosten:</strong> 8-15€ pro Session (oder Monatsabo)
      </p>
      <p className="text-sm text-green-700 dark:text-green-300">
        <strong>Tipp:</strong> Viele Hallen bieten günstige Einsteiger-Angebote oder Studentenrabatte. Monatsabos sind oft günstiger, wenn du regelmäßig gehst.
      </p>
    </div>
  </div>
  
  <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/40 rounded-lg">
    <p className="text-sm font-bold text-green-800 dark:text-green-200">
      💰 Minimal-Setup Gesamt: ~20-30€ für die erste Session (Schuhe geliehen + Chalk + Eintritt)
    </p>
  </div>
</div>

**Wichtig:** Du kannst mit diesem Setup mehrere Monate bouldern, bevor du eigene Schuhe kaufen musst!

---

### Starter-Set: Dein erstes eigenes Equipment

Wenn du weißt, dass Bouldern etwas für dich ist, kannst du in ein Starter-Set investieren.

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">Starter-Set (~100-150€)</h4>
  
  <div className="space-y-3 text-sm text-purple-700 dark:text-purple-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">1. Kletterschuhe (Anfänger-Modell)</h5>
      <p><strong>Kosten:</strong> 60-90€</p>
      <p>Beispiele: La Sportiva Tarantula, Scarpa Origin, Five Ten Rogue</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">2. Liquid Chalk</h5>
      <p><strong>Kosten:</strong> 8-15€</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">3. Chalk-Bag (klein)</h5>
      <p><strong>Kosten:</strong> 10-20€</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">4. Bürste</h5>
      <p><strong>Kosten:</strong> 5-10€</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">5. Hautpflege (optional, aber empfohlen)</h5>
      <p><strong>Kosten:</strong> 10-20€</p>
    </div>
  </div>
  
  <div className="mt-4 p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
    <p className="text-sm font-bold text-purple-800 dark:text-purple-200">
      💰 Starter-Set Gesamt: ~100-150€ (einmalige Investition)
    </p>
  </div>
</div>

**Nach diesem Set:** Du hast alles, was du für Indoor-Bouldern brauchst. Der Rest ist optional!

---

### Was kann warten?

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Nicht sofort notwendig</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">1. Teure Schuhe</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        Anfänger-Schuhe (60-90€) reichen völlig aus. Teure, aggressive Schuhe (150€+) sind für Fortgeschrittene. Du wirst sie erst brauchen, wenn du wirklich fortgeschritten bist.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">2. Eigenes Crashpad</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        Nur für Outdoor-Bouldern relevant. Crashpads kosten 200-400€. Wenn du nur Indoor boulderst, brauchst du keinen. Wenn du Outdoor boulderst, leihe dir erstmal einen oder gehe mit jemandem, der einen hat.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">3. Spezial-Ausrüstung</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        Tape, Nagelfeile, spezielle Hautpflege – das alles kannst du später kaufen, wenn du es wirklich brauchst. Beginne mit dem Nötigsten.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">4. Mehrere Paar Schuhe</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        Ein Paar Schuhe reicht völlig aus. Du brauchst nicht verschiedene Schuhe für verschiedene Situationen – das ist für Fortgeschrittene.
      </p>
    </div>
  </div>
</div>

**Tipp:** Kaufe nur, was du wirklich brauchst. Du kannst später immer noch mehr kaufen!

---

### Gebraucht kaufen: Worauf achten?

Gebraucht kaufen kann viel Geld sparen, besonders bei Schuhen. Aber es gibt ein paar Dinge zu beachten.

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">WICHTIG: Prüfe genau!</h4>
      <p className="text-sm text-red-700 dark:text-red-300">
        Gebrauchte Schuhe können eine gute Investition sein, aber nur wenn sie noch in gutem Zustand sind. Prüfe genau, bevor du kaufst!
      </p>
    </div>
  </div>
</div>

#### Worauf du bei gebrauchten Schuhen achten solltest:

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <ShoppingBag className="text-green-600 dark:text-green-400" size={24} />
    Der Gebraucht-Check
  </h3>
  
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">1. Sohle prüfen</h4>
      <p>Die Sohle sollte noch genug Gummi haben. Wenn sie komplett abgenutzt ist, musst du sie resohlen lassen (30-50€).</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">2. Passform testen</h4>
      <p>Wenn möglich, die Schuhe anprobieren. Gebrauchte Schuhe sind bereits ausgedehnt – sie sollten trotzdem passen.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">3. Geruch prüfen</h4>
      <p>Starker Geruch kann ein Problem sein. Manche Gerüche lassen sich nicht entfernen.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">4. Preis vergleichen</h4>
      <p>Gebrauchte Schuhe sollten deutlich günstiger sein als neue (mindestens 30-50% Rabatt).</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">5. Wo kaufen?</h4>
      <ul className="space-y-1 list-disc list-inside mt-1">
        <li>Online: eBay, Kleinanzeigen, spezielle Kletter-Foren</li>
        <li>Lokal: Kletter-Shops (manche verkaufen auch Gebrauchtes)</li>
        <li>In der Halle: Frag andere Kletterer, ob sie Schuhe verkaufen</li>
      </ul>
    </div>
  </div>
</div>

**Tipp:** Wenn du unsicher bist, kaufe lieber neu. Die Sicherheit ist es wert!

---

### Kosten pro Monat (nach dem Starter-Set)

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">Laufende Kosten</h4>
  
  <div className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-1">Halleneintritt:</h5>
      <ul className="space-y-1 list-disc list-inside">
        <li>Einzelticket: 8-15€ pro Session</li>
        <li>Monatsabo: 40-70€ (oft günstiger bei regelmäßigem Besuch)</li>
        <li>Jahresabo: 400-700€ (oft noch günstiger)</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-1">Chalk:</h5>
      <p>Liquid Chalk: ~5-10€ pro Monat (je nach Nutzung)</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-1">Hautpflege:</h5>
      <p>~5-10€ pro Monat (optional, aber empfohlen)</p>
    </div>
  </div>
  
  <div className="mt-4 p-4 bg-teal-100 dark:bg-teal-900/40 rounded-lg">
    <p className="text-sm font-bold text-teal-800 dark:text-teal-200">
      💰 Monatliche Kosten (mit Monatsabo): ~50-90€
    </p>
  </div>
</div>

**Tipp:** Ein Monatsabo lohnt sich, wenn du 2-3 Mal pro Woche gehst. Einzeltickets sind teurer.

---

### Geld sparen: Tipps & Tricks

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">Wie du Geld sparst</h4>
  
  <div className="space-y-3 text-sm text-purple-700 dark:text-purple-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">1. Schuhe erstmal leihen</h5>
      <p>Leihe dir Schuhe, bis du sicher bist, dass Bouldern etwas für dich ist. Dann investiere in eigene Schuhe.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">2. Monatsabo statt Einzeltickets</h5>
      <p>Wenn du regelmäßig gehst, ist ein Monatsabo günstiger als Einzeltickets.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">3. Gebraucht kaufen</h5>
      <p>Schuhe, Chalk-Bags und andere Ausrüstung kannst du gebraucht kaufen und viel Geld sparen.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">4. Studentenrabatte nutzen</h5>
      <p>Viele Hallen bieten Studentenrabatte. Frag nach!</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">5. Nicht alles auf einmal kaufen</h5>
      <p>Kaufe nur, was du wirklich brauchst. Der Rest kann warten.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">6. Schuhe resohlen lassen</h5>
      <p>Wenn die Sohle abgenutzt ist, kannst du die Schuhe resohlen lassen (30-50€) statt neue zu kaufen.</p>
    </div>
  </div>
</div>

---

### Zusammenfassung: Die wichtigsten Punkte

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Dein Budget-Check
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Minimal-Setup:</strong> ~20-30€ für die erste Session (Schuhe geliehen + Chalk + Eintritt).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Starter-Set:</strong> ~100-150€ einmalig (eigene Schuhe + Chalk + Chalk-Bag + Bürste).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Monatliche Kosten:</strong> ~50-90€ (Monatsabo + Chalk + Hautpflege).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Was kann warten:</strong> Teure Schuhe, Crashpad, Spezial-Ausrüstung – kaufe nur, was du wirklich brauchst.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Gebraucht kaufen:</strong> Kann viel Geld sparen, aber prüfe genau (Sohle, Passform, Geruch, Preis).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Geld sparen:</strong> Schuhe erstmal leihen, Monatsabo statt Einzeltickets, Studentenrabatte nutzen, nicht alles auf einmal kaufen.</span>
    </li>
  </ul>
</div>

**Denk daran:** Bouldern muss nicht teuer sein. Beginne mit dem Minimal-Setup und investiere erst, wenn du sicher bist, dass Bouldern etwas für dich ist. Die meisten Kosten sind laufende Kosten (Halleneintritt), nicht einmalige Investitionen!
    `,
    en: `
### Bouldering Doesn't Have to Be Expensive

A common concern for beginners: "Is bouldering expensive?" The good news: **You can start with a very small budget.** You don't need everything at once, and you can rent many things first.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Wallet className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">The Reality</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Bouldering can get expensive if you buy everything new. But with a few smart decisions, you can start with less than 50€ and still have everything you need.
      </p>
    </div>
  </div>
</div>

---

### Minimal Setup: How to Start Cheap

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    What You Really Need
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">1. Climbing Shoes (Rented)</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        <strong>Cost:</strong> 3-5€ per session (rental fee)
      </p>
      <p className="text-sm text-green-700 dark:text-green-300">
        <strong>Tip:</strong> Most gyms rent climbing shoes. This is perfect for testing if bouldering is for you before investing.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">2. Liquid Chalk</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        <strong>Cost:</strong> 8-15€ (lasts several months)
      </p>
      <p className="text-sm text-green-700 dark:text-green-300">
        <strong>Tip:</strong> Liquid chalk is allowed in most gyms and lasts long. One bottle is enough for many sessions.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">3. Gym Entry</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        <strong>Cost:</strong> 8-15€ per session (or monthly membership)
      </p>
      <p className="text-sm text-green-700 dark:text-green-300">
        <strong>Tip:</strong> Many gyms offer cheap beginner deals or student discounts. Monthly memberships are often cheaper if you go regularly.
      </p>
    </div>
  </div>
  
  <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/40 rounded-lg">
    <p className="text-sm font-bold text-green-800 dark:text-green-200">
      💰 Minimal Setup Total: ~20-30€ for first session (shoes rented + chalk + entry)
    </p>
  </div>
</div>

**Important:** You can boulder for several months with this setup before you need to buy your own shoes!

---

### Starter Set: Your First Own Equipment

When you know bouldering is for you, you can invest in a starter set.

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">Starter Set (~100-150€)</h4>
  
  <div className="space-y-3 text-sm text-purple-700 dark:text-purple-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">1. Climbing Shoes (Beginner Model)</h5>
      <p><strong>Cost:</strong> 60-90€</p>
      <p>Examples: La Sportiva Tarantula, Scarpa Origin, Five Ten Rogue</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">2. Liquid Chalk</h5>
      <p><strong>Cost:</strong> 8-15€</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">3. Chalk Bag (Small)</h5>
      <p><strong>Cost:</strong> 10-20€</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">4. Brush</h5>
      <p><strong>Cost:</strong> 5-10€</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">5. Skin Care (Optional, but Recommended)</h5>
      <p><strong>Cost:</strong> 10-20€</p>
    </div>
  </div>
  
  <div className="mt-4 p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
    <p className="text-sm font-bold text-purple-800 dark:text-purple-200">
      💰 Starter Set Total: ~100-150€ (one-time investment)
    </p>
  </div>
</div>

**After this set:** You have everything you need for indoor bouldering. The rest is optional!

---

### What Can Wait?

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Not Immediately Necessary</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">1. Expensive Shoes</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        Beginner shoes (60-90€) are completely sufficient. Expensive, aggressive shoes (150€+) are for advanced climbers. You'll only need them when you're really advanced.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">2. Own Crash Pad</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        Only relevant for outdoor bouldering. Crash pads cost 200-400€. If you only boulder indoors, you don't need one. If you boulder outdoors, rent one first or go with someone who has one.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">3. Specialty Equipment</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        Tape, nail file, special skin care – you can buy all of this later when you really need it. Start with the essentials.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">4. Multiple Pairs of Shoes</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        One pair of shoes is completely sufficient. You don't need different shoes for different situations – that's for advanced climbers.
      </p>
    </div>
  </div>
</div>

**Tip:** Only buy what you really need. You can always buy more later!

---

### Buying Used: What to Watch For

Buying used can save a lot of money, especially with shoes. But there are a few things to watch for.

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">IMPORTANT: Check Carefully!</h4>
      <p className="text-sm text-red-700 dark:text-red-300">
        Used shoes can be a good investment, but only if they're still in good condition. Check carefully before buying!
      </p>
    </div>
  </div>
</div>

#### What to Watch For With Used Shoes:

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <ShoppingBag className="text-green-600 dark:text-green-400" size={24} />
    The Used Checklist
  </h3>
  
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">1. Check Sole</h4>
      <p>The sole should still have enough rubber. If it's completely worn, you'll need to resole (30-50€).</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">2. Test Fit</h4>
      <p>If possible, try on the shoes. Used shoes are already stretched – they should still fit.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">3. Check Odor</h4>
      <p>Strong odor can be a problem. Some odors can't be removed.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">4. Compare Price</h4>
      <p>Used shoes should be significantly cheaper than new (at least 30-50% discount).</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-1">5. Where to Buy?</h4>
      <ul className="space-y-1 list-disc list-inside mt-1">
        <li>Online: eBay, classifieds, special climbing forums</li>
        <li>Local: Climbing shops (some also sell used)</li>
        <li>In gym: Ask other climbers if they're selling shoes</li>
      </ul>
    </div>
  </div>
</div>

**Tip:** If you're unsure, buy new instead. The security is worth it!

---

### Monthly Costs (After Starter Set)

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">Ongoing Costs</h4>
  
  <div className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-1">Gym Entry:</h5>
      <ul className="space-y-1 list-disc list-inside">
        <li>Single ticket: 8-15€ per session</li>
        <li>Monthly membership: 40-70€ (often cheaper with regular visits)</li>
        <li>Annual membership: 400-700€ (often even cheaper)</li>
      </ul>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-1">Chalk:</h5>
      <p>Liquid chalk: ~5-10€ per month (depending on usage)</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-1">Skin Care:</h5>
      <p>~5-10€ per month (optional, but recommended)</p>
    </div>
  </div>
  
  <div className="mt-4 p-4 bg-teal-100 dark:bg-teal-900/40 rounded-lg">
    <p className="text-sm font-bold text-teal-800 dark:text-teal-200">
      💰 Monthly Costs (with monthly membership): ~50-90€
    </p>
  </div>
</div>

**Tip:** A monthly membership pays off if you go 2-3 times per week. Single tickets are more expensive.

---

### Save Money: Tips & Tricks

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">How to Save Money</h4>
  
  <div className="space-y-3 text-sm text-purple-700 dark:text-purple-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">1. Rent Shoes First</h5>
      <p>Rent shoes until you're sure bouldering is for you. Then invest in your own shoes.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">2. Monthly Membership Instead of Single Tickets</h5>
      <p>If you go regularly, a monthly membership is cheaper than single tickets.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">3. Buy Used</h5>
      <p>You can buy shoes, chalk bags, and other equipment used and save a lot of money.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">4. Use Student Discounts</h5>
      <p>Many gyms offer student discounts. Ask!</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">5. Don't Buy Everything at Once</h5>
      <p>Only buy what you really need. The rest can wait.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-1">6. Resole Shoes</h5>
      <p>When the sole is worn, you can have shoes resoled (30-50€) instead of buying new ones.</p>
    </div>
  </div>
</div>

---

### Summary: The Most Important Points

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Your Budget Checklist
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Minimal setup:</strong> ~20-30€ for first session (shoes rented + chalk + entry).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Starter set:</strong> ~100-150€ one-time (own shoes + chalk + chalk bag + brush).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Monthly costs:</strong> ~50-90€ (monthly membership + chalk + skin care).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>What can wait:</strong> Expensive shoes, crash pad, specialty equipment – only buy what you really need.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Buy used:</strong> Can save a lot of money, but check carefully (sole, fit, odor, price).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Save money:</strong> Rent shoes first, monthly membership instead of single tickets, use student discounts, don't buy everything at once.</span>
    </li>
  </ul>
</div>

**Remember:** Bouldering doesn't have to be expensive. Start with the minimal setup and only invest when you're sure bouldering is for you. Most costs are ongoing costs (gym entry), not one-time investments!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Budget planen",
      description: "Plane dein Bouldering-Budget und finde heraus, was du wirklich brauchst.",
      checklist: [
        { text: "Informiere dich über die Preise in deiner Halle: Einzelticket, Monatsabo, Studentenrabatte", checked: false },
        { text: "Entscheide: Willst du erstmal Schuhe leihen oder direkt eigene kaufen?", checked: false },
        { text: "Erstelle eine Liste: Was brauchst du wirklich? Was kann warten?", checked: false },
        { text: "Wenn du gebraucht kaufen willst: Schaue nach Angeboten online oder in der Halle", checked: false },
        { text: "Wichtig: Beginne mit dem Minimal-Setup und investiere erst, wenn du sicher bist, dass Bouldern etwas für dich ist", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Plan Budget",
      description: "Plan your bouldering budget and find out what you really need.",
      checklist: [
        { text: "Learn about prices in your gym: single ticket, monthly membership, student discounts", checked: false },
        { text: "Decide: Do you want to rent shoes first or buy your own right away?", checked: false },
        { text: "Make a list: What do you really need? What can wait?", checked: false },
        { text: "If you want to buy used: Look for offers online or in the gym", checked: false },
        { text: "Important: Start with minimal setup and only invest when you're sure bouldering is for you", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was kostet ein Minimal-Setup für die erste Session?",
        answer: "Ein Minimal-Setup kostet etwa 20-30€ für die erste Session: Schuhe geliehen (3-5€), Liquid Chalk (8-15€, hält mehrere Monate), und Halleneintritt (8-15€). Mit diesem Setup kann man mehrere Monate bouldern, bevor man eigene Schuhe kaufen muss."
      },
      {
        question: "Was kostet ein Starter-Set und was ist enthalten?",
        answer: "Ein Starter-Set kostet etwa 100-150€ einmalig und enthält: eigene Kletterschuhe (60-90€), Liquid Chalk (8-15€), Chalk-Bag (10-20€), Bürste (5-10€), und optional Hautpflege (10-20€). Nach diesem Set hat man alles, was man für Indoor-Bouldern braucht."
      },
      {
        question: "Worauf sollte man beim Gebrauchtkauf von Kletterschuhen achten?",
        answer: "Beim Gebrauchtkauf sollte man prüfen: Die Sohle (sollte noch genug Gummi haben, sonst muss man resohlen lassen), die Passform (wenn möglich anprobieren, gebrauchte Schuhe sind bereits ausgedehnt), den Geruch (starker Geruch kann ein Problem sein), und den Preis (sollte deutlich günstiger sein als neu, mindestens 30-50% Rabatt)."
      }
    ],
    en: [
      {
        question: "What does a minimal setup cost for the first session?",
        answer: "A minimal setup costs about 20-30€ for the first session: shoes rented (3-5€), liquid chalk (8-15€, lasts several months), and gym entry (8-15€). With this setup, you can boulder for several months before you need to buy your own shoes."
      },
      {
        question: "What does a starter set cost and what is included?",
        answer: "A starter set costs about 100-150€ one-time and includes: own climbing shoes (60-90€), liquid chalk (8-15€), chalk bag (10-20€), brush (5-10€), and optionally skin care (10-20€). After this set, you have everything you need for indoor bouldering."
      },
      {
        question: "What should you watch for when buying used climbing shoes?",
        answer: "When buying used, you should check: the sole (should still have enough rubber, otherwise you need to resole), the fit (try on if possible, used shoes are already stretched), the odor (strong odor can be a problem), and the price (should be significantly cheaper than new, at least 30-50% discount)."
      }
    ]
  }
};


