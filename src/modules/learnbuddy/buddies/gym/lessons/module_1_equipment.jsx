import React from 'react';

export const equipmentLesson = {
  id: 'g1_m1_equipment',
  title: { 
    en: '1.5 Equipment (What Do You Really Need?)', 
    de: '1.5 Ausrüstung (Was brauchst du wirklich?)' 
  },
  description: { 
    en: 'Learn which equipment is essential and which is just marketing hype.', 
    de: 'Lerne, welche Ausrüstung essentiell ist und was nur Marketing ist.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Was brauchst du wirklich? 🎒

Die Fitness-Industrie will dir tausend Dinge verkaufen. Aber die Wahrheit ist: Du brauchst am Anfang sehr wenig! 
Diese Lektion zeigt dir, was wirklich wichtig ist – und was du dir sparen kannst.

<div className="my-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
  <p className="text-sm text-green-800 dark:text-green-200">
    <strong>💡 Die goldene Regel:</strong> Investiere in Qualität bei den Basics, spare bei den "Nice-to-Haves". 
    Deine Technik und Konsistenz sind wichtiger als jede Ausrüstung!
  </p>
</div>

---

### Must-Haves: Das brauchst du wirklich

Diese Dinge sind essentiell für sicheres und effektives Training.

<div className="space-y-6 my-6">

<div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">👕</span> 1. Bequeme Sportkleidung
  </h4>
  
  <div className="space-y-3">
    <div>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
        <strong>Was du brauchst:</strong>
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li>Atmungsaktives T-Shirt oder Tank Top (kein Baumwoll-Shirt, das sich vollsaugt!)</li>
        <li>Bequeme Trainingshose oder Shorts</li>
        <li>Sport-Unterwäsche (wichtig für Komfort!)</li>
      </ul>
    </div>
    <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded">
      <p className="text-sm text-blue-800 dark:text-blue-200">
        <strong>💰 Budget:</strong> 30-50€ reichen völlig. Marken sind nicht wichtig – Hauptsache bequem!
      </p>
    </div>
  </div>
</div>

<div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">👟</span> 2. Die richtigen Schuhe (WICHTIG!)
  </h4>
  
  <div className="space-y-3">
    <div>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        <strong>Für Krafttraining brauchst du KEINE Jogging-Schuhe!</strong> Die dicke, weiche Sohle ist instabil.
      </p>
      <p className="text-sm text-red-700 dark:text-red-300 mb-2">
        <strong>Ideal:</strong> Schuhe mit flacher, fester Sohle
      </p>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li><strong>Chucks (Converse):</strong> Der Klassiker! Flach, stabil, günstig (~50€)</li>
        <li><strong>Vans:</strong> Ähnlich wie Chucks, auch gut</li>
        <li><strong>Gewichtheber-Schuhe:</strong> Für Fortgeschrittene (erhöhte Ferse für tiefe Kniebeugen)</li>
        <li><strong>Barfuß-Schuhe:</strong> Auch eine Option (z.B. Vivobarefoot)</li>
      </ul>
    </div>
    <div className="bg-red-100 dark:bg-red-900/40 p-3 rounded">
      <p className="text-sm text-red-800 dark:text-red-200">
        <strong>⚠️ Warum?</strong> Bei Kniebeugen und Kreuzheben brauchst du stabilen Bodenkontakt. 
        Weiche Sohlen = wackeliger Stand = Verletzungsrisiko!
      </p>
    </div>
  </div>
</div>

<div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">🧴</span> 3. Handtuch & Wasserflasche
  </h4>
  
  <div className="space-y-3">
    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
      <li><strong>Handtuch:</strong> Pflicht in den meisten Studios! Lege es auf Bänke/Geräte.</li>
      <li><strong>Wasserflasche:</strong> Mindestens 1 Liter. Hydrierung ist essentiell!</li>
    </ul>
    <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded">
      <p className="text-sm text-purple-800 dark:text-purple-200">
        <strong>💰 Budget:</strong> 5-15€. Mikrofaser-Handtuch ist praktisch (klein, schnelltrocknend).
      </p>
    </div>
  </div>
</div>

</div>

---

### Nice-to-Have: Sinnvoll für Fortgeschrittene

Diese Dinge sind optional, aber können sinnvoll sein – **wenn du die Basics beherrschst!**

<div className="space-y-6 my-6">

<div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">🔒</span> Gewichthebergürtel (Lifting Belt)
  </h4>
  
  <div className="space-y-3">
    <p className="text-sm text-amber-700 dark:text-amber-300">
      <strong>Wofür?</strong> Stützt den Rumpf bei sehr schweren Sätzen (Kniebeuge, Kreuzheben).
    </p>
    <div className="bg-amber-100 dark:bg-amber-900/40 p-4 rounded space-y-2">
      <p className="text-sm text-amber-800 dark:text-amber-200 font-semibold">⚠️ Wichtig:</p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li><strong>Lerne es erst OHNE!</strong> Der Gürtel ist kein Ersatz für Core-Stabilität.</li>
        <li>Nur bei schweren Sätzen nutzen (>80% deiner 1RM)</li>
        <li>Nicht bei allen Übungen nötig (z.B. nicht bei Bizeps Curls!)</li>
      </ul>
      <p className="text-sm text-amber-800 dark:text-amber-200 mt-2">
        <strong>💰 Budget:</strong> 30-100€. Erst ab 6+ Monaten Training sinnvoll!
      </p>
    </div>
  </div>
</div>

<div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">🤲</span> Zughilfen (Lifting Straps)
  </h4>
  
  <div className="space-y-3">
    <p className="text-sm text-orange-700 dark:text-orange-300">
      <strong>Wofür?</strong> Helfen bei Griffkraft-Limitierung (z.B. schweres Rudern, Kreuzheben).
    </p>
    <div className="bg-orange-100 dark:bg-orange-900/40 p-4 rounded space-y-2">
      <p className="text-sm text-orange-800 dark:text-orange-200">
        <strong>Wann sinnvoll?</strong> Wenn deine Griffkraft vor deinem Rücken aufgibt. 
        Beispiel: Du könntest mehr Gewicht beim Rudern ziehen, aber die Hände geben auf.
      </p>
      <p className="text-sm text-orange-800 dark:text-orange-200 mt-2">
        <strong>💰 Budget:</strong> 10-20€. Erst ab 3+ Monaten Training.
      </p>
    </div>
  </div>
</div>

<div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">🧤</span> Trainingshandschuhe
  </h4>
  
  <div className="space-y-3">
    <p className="text-sm text-green-700 dark:text-green-300">
      <strong>Wofür?</strong> Schützen die Hände vor Hornhaut und verbessern den Grip.
    </p>
    <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded space-y-2">
      <p className="text-sm text-green-800 dark:text-green-200">
        <strong>Meinung:</strong> Kontrovers! Viele Trainierende nutzen sie nicht, da Hornhaut als "Badge of Honor" gilt. 
        Aber: Wenn du keine rauen Hände willst, sind sie ok.
      </p>
      <p className="text-sm text-green-800 dark:text-green-200 mt-2">
        <strong>💰 Budget:</strong> 10-30€. Optional!
      </p>
    </div>
  </div>
</div>

<div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">🧊</span> Kreide (Chalk)
  </h4>
  
  <div className="space-y-3">
    <p className="text-sm text-blue-700 dark:text-blue-300">
      <strong>Wofür?</strong> Verbessert den Grip bei schweren Zug-Übungen (Kreuzheben, Klimmzüge).
    </p>
    <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded space-y-2">
      <p className="text-sm text-blue-800 dark:text-blue-200">
        <strong>Typen:</strong> Flüssig (weniger Sauerei) oder Pulver (traditionell). 
        Nicht in allen Studios erlaubt – frag vorher!
      </p>
      <p className="text-sm text-blue-800 dark:text-blue-200 mt-2">
        <strong>💰 Budget:</strong> 5-15€. Erst ab 6+ Monaten Training.
      </p>
    </div>
  </div>
</div>

<div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-l-4 border-indigo-500">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">🦵</span> Knie-Stulpen (Knee Sleeves)
  </h4>
  
  <div className="space-y-3">
    <p className="text-sm text-indigo-700 dark:text-indigo-300">
      <strong>Wofür?</strong> Wärmen das Kniegelenk, geben leichte Kompression (keine Bandagen!).
    </p>
    <div className="bg-indigo-100 dark:bg-indigo-900/40 p-4 rounded space-y-2">
      <p className="text-sm text-indigo-800 dark:text-indigo-200">
        <strong>Wann sinnvoll?</strong> Bei Knieproblemen oder sehr schweren Kniebeugen. 
        Nicht als Ersatz für gute Technik!
      </p>
      <p className="text-sm text-indigo-800 dark:text-indigo-200 mt-2">
        <strong>💰 Budget:</strong> 20-50€. Optional!
      </p>
    </div>
  </div>
</div>

</div>

---

### Nicht nötig (Marketing-Hype!)

Diese Dinge werden oft beworben, sind aber für Anfänger **nicht nötig**:

<div className="my-6 bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-2 border-red-300 dark:border-red-700">

<h4 className="font-bold text-red-800 dark:text-red-200 mb-4 text-lg">❌ Spare dein Geld bei:</h4>

<div className="space-y-3 text-sm text-red-700 dark:text-red-300">

<div className="flex items-start gap-3">
  <span className="text-xl flex-shrink-0">🚫</span>
  <div>
    <p className="font-semibold">Teure Trainingskleidung</p>
    <p>Ein 80€ Nike-Shirt macht dich nicht stärker. 20€ Decathlon-Shirt tut's auch!</p>
  </div>
</div>

<div className="flex items-start gap-3">
  <span className="text-xl flex-shrink-0">🚫</span>
  <div>
    <p className="font-semibold">Fitness-Tracker / Smartwatch (am Anfang)</p>
    <p>Nett, aber nicht nötig. Dein Logbuch (App oder Papier) reicht völlig!</p>
  </div>
</div>

<div className="flex items-start gap-3">
  <span className="text-xl flex-shrink-0">🚫</span>
  <div>
    <p className="font-semibold">Spezielle "Trainings-Supplements" (Pre-Workout, BCAAs, etc.)</p>
    <p>Am Anfang brauchst du nur Protein-Pulver (optional!) und Kreatin. Der Rest ist Marketing!</p>
  </div>
</div>

<div className="flex items-start gap-3">
  <span className="text-xl flex-shrink-0">🚫</span>
  <div>
    <p className="font-semibold">Handgelenkbandagen (Wrist Wraps)</p>
    <p>Nur für sehr schwere Drück-Übungen nötig. Als Anfänger nicht relevant!</p>
  </div>
</div>

<div className="flex items-start gap-3">
  <span className="text-xl flex-shrink-0">🚫</span>
  <div>
    <p className="font-semibold">Kompressionskleidung</p>
    <p>Sieht cool aus, bringt aber keine messbaren Vorteile für Training oder Recovery.</p>
  </div>
</div>

</div>

</div>

---

### Das Wichtigste: Dein Trainings-Logbuch

<div className="my-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl border-2 border-green-300 dark:border-green-700">

<div className="flex items-center gap-3 mb-4">
  <div className="text-4xl">📓</div>
  <h3 className="text-2xl font-bold text-green-900 dark:text-green-100">Das wichtigste "Equipment"!</h3>
</div>

<p className="text-green-800 dark:text-green-200 mb-4">
  <strong>Du kannst nicht steigern, was du nicht misst.</strong> Ein Trainings-Logbuch ist wichtiger als jede Ausrüstung!
</p>

<div className="bg-green-100 dark:bg-green-900/40 p-5 rounded-lg space-y-3">
  <div>
    <p className="font-semibold text-green-900 dark:text-green-100 mb-2">Was eintragen?</p>
    <ul className="text-sm text-green-800 dark:text-green-200 space-y-1 list-disc list-inside">
      <li>Datum, Übung, Gewicht, Sätze, Wiederholungen</li>
      <li>Notizen (z.B. "fühlte sich leicht an", "RIR 2", "Schulter etwas schmerzhaft")</li>
      <li>Körpergewicht (morgens, nüchtern – 1x pro Woche)</li>
      <li>Schlafqualität & Energie-Level (1-10)</li>
    </ul>
  </div>

  <div>
    <p className="font-semibold text-green-900 dark:text-green-100 mb-2">Empfohlene Apps (kostenlos):</p>
    <ul className="text-sm text-green-800 dark:text-green-200 space-y-1 list-disc list-inside">
      <li><strong>Strong:</strong> Sehr beliebt, einfach, übersichtlich</li>
      <li><strong>Hevy:</strong> Ähnlich wie Strong, auch sehr gut</li>
      <li><strong>Jefit:</strong> Viele Features, große Community</li>
    </ul>
  </div>

  <div className="mt-4 p-3 bg-green-200 dark:bg-green-800/40 rounded">
    <p className="text-sm text-green-900 dark:text-green-100 font-semibold">
      🎯 Ziel: Im nächsten Training die Zahlen vom letzten Mal (leicht) überbieten → Progressive Overload!
    </p>
  </div>
</div>

</div>

---

### Zusammenfassung: Deine Einkaufsliste

<div className="my-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-700">

#### ✅ Sofort kaufen (Must-Haves):

<div className="grid md:grid-cols-2 gap-4 my-4">

<div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
  <h5 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Für Tag 1 im Studio:</h5>
  <ul className="text-sm text-stone-700 dark:text-stone-300 space-y-1 list-disc list-inside">
    <li>Sportkleidung (30-50€)</li>
    <li>Flache Schuhe (Chucks ~50€)</li>
    <li>Handtuch (~5€)</li>
    <li>Wasserflasche (~10€)</li>
  </ul>
  <p className="text-sm font-bold text-stone-800 dark:text-stone-200 mt-3">
    <strong>Gesamt: ~100€</strong>
  </p>
</div>

<div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
  <h5 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Später (Nice-to-Have):</h5>
  <ul className="text-sm text-stone-700 dark:text-stone-300 space-y-1 list-disc list-inside">
    <li>Gewichthebergürtel (ab 6+ Monate)</li>
    <li>Zughilfen (ab 3+ Monate)</li>
    <li>Kreide (optional)</li>
    <li>Knie-Stulpen (optional)</li>
  </ul>
  <p className="text-sm font-bold text-stone-800 dark:text-stone-200 mt-3">
    <strong>Erst kaufen, wenn nötig!</strong>
  </p>
</div>

</div>

<div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
  <p className="text-sm text-blue-900 dark:text-blue-100 font-semibold">
    💡 Wichtigste "Ausrüstung": Trainings-Logbuch (App: Strong, Hevy) – KOSTENLOS!
  </p>
</div>

</div>

**Glückwunsch!** Du hast Phase 1 (Grundlagen & erste Schritte) abgeschlossen! 🎉

In den nächsten Modulen lernst du die **große Übungs-Bibliothek** – alle wichtigen Übungen mit perfekter Technik!

🎒 **Du brauchst weniger, als du denkst!**
    `,
    en: `
### What Do You Really Need? 🎒

The fitness industry wants to sell you a thousand things. But the truth is: you need very little at the start! 
This lesson shows you what's really important – and what you can save money on.

<div className="my-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
  <p className="text-sm text-green-800 dark:text-green-200">
    <strong>💡 The golden rule:</strong> Invest in quality for the basics, save on the "nice-to-haves". 
    Your technique and consistency are more important than any equipment!
  </p>
</div>

---

### Must-Haves: What You Really Need

These things are essential for safe and effective training.

<div className="space-y-6 my-6">

<div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">👕</span> 1. Comfortable Workout Clothes
  </h4>
  
  <div className="space-y-3">
    <div>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
        <strong>What you need:</strong>
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li>Breathable t-shirt or tank top (no cotton shirt that soaks up sweat!)</li>
        <li>Comfortable training pants or shorts</li>
        <li>Athletic underwear (important for comfort!)</li>
      </ul>
    </div>
    <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded">
      <p className="text-sm text-blue-800 dark:text-blue-200">
        <strong>💰 Budget:</strong> $30-50 is plenty. Brands don't matter – just comfortable!
      </p>
    </div>
  </div>
</div>

<div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">👟</span> 2. The Right Shoes (IMPORTANT!)
  </h4>
  
  <div className="space-y-3">
    <div>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        <strong>For strength training you DON'T need running shoes!</strong> The thick, soft sole is unstable.
      </p>
      <p className="text-sm text-red-700 dark:text-red-300 mb-2">
        <strong>Ideal:</strong> Shoes with flat, firm sole
      </p>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li><strong>Converse (Chucks):</strong> The classic! Flat, stable, affordable (~$50)</li>
        <li><strong>Vans:</strong> Similar to Chucks, also good</li>
        <li><strong>Weightlifting shoes:</strong> For advanced (raised heel for deep squats)</li>
        <li><strong>Barefoot shoes:</strong> Also an option (e.g., Vivobarefoot)</li>
      </ul>
    </div>
    <div className="bg-red-100 dark:bg-red-900/40 p-3 rounded">
      <p className="text-sm text-red-800 dark:text-red-200">
        <strong>⚠️ Why?</strong> For squats and deadlifts you need stable ground contact. 
        Soft soles = wobbly stance = injury risk!
      </p>
    </div>
  </div>
</div>

<div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">🧴</span> 3. Towel & Water Bottle
  </h4>
  
  <div className="space-y-3">
    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
      <li><strong>Towel:</strong> Required in most gyms! Place it on benches/equipment.</li>
      <li><strong>Water bottle:</strong> At least 1 liter. Hydration is essential!</li>
    </ul>
    <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded">
      <p className="text-sm text-purple-800 dark:text-purple-200">
        <strong>💰 Budget:</strong> $5-15. Microfiber towel is practical (small, quick-drying).
      </p>
    </div>
  </div>
</div>

</div>

---

### Nice-to-Have: Useful for Advanced

These things are optional, but can be useful – **when you master the basics!**

<div className="space-y-6 my-6">

<div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">🔒</span> Lifting Belt
  </h4>
  
  <div className="space-y-3">
    <p className="text-sm text-amber-700 dark:text-amber-300">
      <strong>What for?</strong> Supports the core during very heavy sets (squat, deadlift).
    </p>
    <div className="bg-amber-100 dark:bg-amber-900/40 p-4 rounded space-y-2">
      <p className="text-sm text-amber-800 dark:text-amber-200 font-semibold">⚠️ Important:</p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li><strong>Learn it WITHOUT first!</strong> The belt is not a replacement for core stability.</li>
        <li>Only use for heavy sets (>80% of your 1RM)</li>
        <li>Not needed for all exercises (e.g., not for bicep curls!)</li>
      </ul>
      <p className="text-sm text-amber-800 dark:text-amber-200 mt-2">
        <strong>💰 Budget:</strong> $30-100. Only useful after 6+ months training!
      </p>
    </div>
  </div>
</div>

<div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">🤲</span> Lifting Straps
  </h4>
  
  <div className="space-y-3">
    <p className="text-sm text-orange-700 dark:text-orange-300">
      <strong>What for?</strong> Help with grip strength limitation (e.g., heavy rows, deadlifts).
    </p>
    <div className="bg-orange-100 dark:bg-orange-900/40 p-4 rounded space-y-2">
      <p className="text-sm text-orange-800 dark:text-orange-200">
        <strong>When useful?</strong> When your grip gives out before your back. 
        Example: You could pull more weight rowing, but your hands give out.
      </p>
      <p className="text-sm text-orange-800 dark:text-orange-200 mt-2">
        <strong>💰 Budget:</strong> $10-20. Only after 3+ months training.
      </p>
    </div>
  </div>
</div>

<div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">🧤</span> Training Gloves
  </h4>
  
  <div className="space-y-3">
    <p className="text-sm text-green-700 dark:text-green-300">
      <strong>What for?</strong> Protect hands from calluses and improve grip.
    </p>
    <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded space-y-2">
      <p className="text-sm text-green-800 dark:text-green-200">
        <strong>Opinion:</strong> Controversial! Many don't use them as calluses are a "badge of honor". 
        But: If you don't want rough hands, they're ok.
      </p>
      <p className="text-sm text-green-800 dark:text-green-200 mt-2">
        <strong>💰 Budget:</strong> $10-30. Optional!
      </p>
    </div>
  </div>
</div>

<div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">🧊</span> Chalk
  </h4>
  
  <div className="space-y-3">
    <p className="text-sm text-blue-700 dark:text-blue-300">
      <strong>What for?</strong> Improves grip for heavy pulling exercises (deadlift, pull-ups).
    </p>
    <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded space-y-2">
      <p className="text-sm text-blue-800 dark:text-blue-200">
        <strong>Types:</strong> Liquid (less mess) or powder (traditional). 
        Not allowed in all gyms – ask first!
      </p>
      <p className="text-sm text-blue-800 dark:text-blue-200 mt-2">
        <strong>💰 Budget:</strong> $5-15. Only after 6+ months training.
      </p>
    </div>
  </div>
</div>

<div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-l-4 border-indigo-500">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">🦵</span> Knee Sleeves
  </h4>
  
  <div className="space-y-3">
    <p className="text-sm text-indigo-700 dark:text-indigo-300">
      <strong>What for?</strong> Warm the knee joint, provide light compression (not wraps!).
    </p>
    <div className="bg-indigo-100 dark:bg-indigo-900/40 p-4 rounded space-y-2">
      <p className="text-sm text-indigo-800 dark:text-indigo-200">
        <strong>When useful?</strong> For knee problems or very heavy squats. 
        Not a replacement for good technique!
      </p>
      <p className="text-sm text-indigo-800 dark:text-indigo-200 mt-2">
        <strong>💰 Budget:</strong> $20-50. Optional!
      </p>
    </div>
  </div>
</div>

</div>

---

### Not Necessary (Marketing Hype!)

These things are often advertised but are **not necessary** for beginners:

<div className="my-6 bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-2 border-red-300 dark:border-red-700">

<h4 className="font-bold text-red-800 dark:text-red-200 mb-4 text-lg">❌ Save your money on:</h4>

<div className="space-y-3 text-sm text-red-700 dark:text-red-300">

<div className="flex items-start gap-3">
  <span className="text-xl flex-shrink-0">🚫</span>
  <div>
    <p className="font-semibold">Expensive Training Clothes</p>
    <p>An $80 Nike shirt doesn't make you stronger. A $20 shirt works just as well!</p>
  </div>
</div>

<div className="flex items-start gap-3">
  <span className="text-xl flex-shrink-0">🚫</span>
  <div>
    <p className="font-semibold">Fitness Tracker / Smartwatch (at the start)</p>
    <p>Nice, but not necessary. Your logbook (app or paper) is enough!</p>
  </div>
</div>

<div className="flex items-start gap-3">
  <span className="text-xl flex-shrink-0">🚫</span>
  <div>
    <p className="font-semibold">Special "Training Supplements" (Pre-workout, BCAAs, etc.)</p>
    <p>At the start you only need protein powder (optional!) and creatine. The rest is marketing!</p>
  </div>
</div>

<div className="flex items-start gap-3">
  <span className="text-xl flex-shrink-0">🚫</span>
  <div>
    <p className="font-semibold">Wrist Wraps</p>
    <p>Only needed for very heavy pressing exercises. Not relevant for beginners!</p>
  </div>
</div>

<div className="flex items-start gap-3">
  <span className="text-xl flex-shrink-0">🚫</span>
  <div>
    <p className="font-semibold">Compression Clothing</p>
    <p>Looks cool, but provides no measurable benefits for training or recovery.</p>
  </div>
</div>

</div>

</div>

---

### The Most Important: Your Training Log

<div className="my-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl border-2 border-green-300 dark:border-green-700">

<div className="flex items-center gap-3 mb-4">
  <div className="text-4xl">📓</div>
  <h3 className="text-2xl font-bold text-green-900 dark:text-green-100">The most important "equipment"!</h3>
</div>

<p className="text-green-800 dark:text-green-200 mb-4">
  <strong>You can't improve what you don't measure.</strong> A training log is more important than any equipment!
</p>

<div className="bg-green-100 dark:bg-green-900/40 p-5 rounded-lg space-y-3">
  <div>
    <p className="font-semibold text-green-900 dark:text-green-100 mb-2">What to log?</p>
    <ul className="text-sm text-green-800 dark:text-green-200 space-y-1 list-disc list-inside">
      <li>Date, exercise, weight, sets, reps</li>
      <li>Notes (e.g., "felt easy", "RIR 2", "shoulder slightly painful")</li>
      <li>Body weight (morning, fasted – 1x per week)</li>
      <li>Sleep quality & energy level (1-10)</li>
    </ul>
  </div>

  <div>
    <p className="font-semibold text-green-900 dark:text-green-100 mb-2">Recommended apps (free):</p>
    <ul className="text-sm text-green-800 dark:text-green-200 space-y-1 list-disc list-inside">
      <li><strong>Strong:</strong> Very popular, simple, clear</li>
      <li><strong>Hevy:</strong> Similar to Strong, also very good</li>
      <li><strong>Jefit:</strong> Many features, large community</li>
    </ul>
  </div>

  <div className="mt-4 p-3 bg-green-200 dark:bg-green-800/40 rounded">
    <p className="text-sm text-green-900 dark:text-green-100 font-semibold">
      🎯 Goal: In the next training, (slightly) beat the numbers from last time → Progressive Overload!
    </p>
  </div>
</div>

</div>

---

### Summary: Your Shopping List

<div className="my-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-700">

#### ✅ Buy immediately (Must-Haves):

<div className="grid md:grid-cols-2 gap-4 my-4">

<div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
  <h5 className="font-bold text-stone-800 dark:text-stone-200 mb-2">For Day 1 at the gym:</h5>
  <ul className="text-sm text-stone-700 dark:text-stone-300 space-y-1 list-disc list-inside">
    <li>Workout clothes ($30-50)</li>
    <li>Flat shoes (Chucks ~$50)</li>
    <li>Towel (~$5)</li>
    <li>Water bottle (~$10)</li>
  </ul>
  <p className="text-sm font-bold text-stone-800 dark:text-stone-200 mt-3">
    <strong>Total: ~$100</strong>
  </p>
</div>

<div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
  <h5 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Later (Nice-to-Have):</h5>
  <ul className="text-sm text-stone-700 dark:text-stone-300 space-y-1 list-disc list-inside">
    <li>Lifting belt (after 6+ months)</li>
    <li>Lifting straps (after 3+ months)</li>
    <li>Chalk (optional)</li>
    <li>Knee sleeves (optional)</li>
  </ul>
  <p className="text-sm font-bold text-stone-800 dark:text-stone-200 mt-3">
    <strong>Only buy when needed!</strong>
  </p>
</div>

</div>

<div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
  <p className="text-sm text-blue-900 dark:text-blue-100 font-semibold">
    💡 Most important "equipment": Training log (app: Strong, Hevy) – FREE!
  </p>
</div>

</div>

**Congratulations!** You've completed Phase 1 (Foundations & First Steps)! 🎉

In the next modules you'll learn the **big exercise library** – all important exercises with perfect technique!

🎒 **You need less than you think!**
    `
  },

  task: {
    de: {
      title: 'Equipment-Check: Bereite dich vor',
      description: 'Stelle sicher, dass du alles hast, was du für dein erstes Training brauchst.',
      checklist: [
        { text: 'Kaufe oder finde bequeme Sportkleidung (atmungsaktiv, nicht Baumwolle)' },
        { text: 'Besorge dir flache Schuhe (Chucks, Vans oder ähnlich) – KEINE Jogging-Schuhe!' },
        { text: 'Packe ein Handtuch und eine Wasserflasche ein' },
        { text: 'Lade eine Trainings-Logbuch-App herunter (Strong oder Hevy empfohlen)' },
        { text: 'Erstelle deinen ersten Trainingsplan in der App (oder nutze einen Vorlage)' }
      ]
    },
    en: {
      title: 'Equipment Check: Prepare Yourself',
      description: 'Make sure you have everything you need for your first training session.',
      checklist: [
        { text: 'Buy or find comfortable workout clothes (breathable, not cotton)' },
        { text: 'Get flat shoes (Chucks, Vans or similar) – NO running shoes!' },
        { text: 'Pack a towel and water bottle' },
        { text: 'Download a training log app (Strong or Hevy recommended)' },
        { text: 'Create your first training plan in the app (or use a template)' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was sind die 4 Must-Have Equipment-Teile für Tag 1?',
        back: '1. Bequeme Sportkleidung (atmungsaktiv)\n2. Flache Schuhe (Chucks, Vans – KEINE Jogging-Schuhe!)\n3. Handtuch\n4. Wasserflasche\nBudget: ~100€'
      },
      {
        front: 'Warum sind Jogging-Schuhe schlecht für Krafttraining?',
        back: 'Die dicke, weiche Sohle ist instabil. Bei Kniebeugen und Kreuzheben brauchst du stabilen Bodenkontakt. Weiche Sohlen = wackeliger Stand = Verletzungsrisiko!'
      },
      {
        front: 'Wann ist ein Gewichthebergürtel sinnvoll?',
        back: 'Erst ab 6+ Monaten Training, nur bei sehr schweren Sätzen (>80% 1RM), nur bei Kniebeuge/Kreuzheben. NICHT als Ersatz für Core-Stabilität! Lerne es erst ohne!'
      },
      {
        front: 'Was ist das wichtigste "Equipment" für Krafttraining?',
        back: 'Ein Trainings-Logbuch (App: Strong, Hevy – kostenlos!).\nDu kannst nicht steigern, was du nicht misst. Progressive Overload braucht Tracking!'
      },
      {
        front: 'Nenne 3 Dinge, die du als Anfänger NICHT brauchst',
        back: '1. Teure Trainingskleidung (20€ reicht!)\n2. Fitness-Tracker/Smartwatch (Logbuch reicht)\n3. Spezielle Supplements (außer Protein + Kreatin)\n4. Kompressionskleidung (bringt nichts)'
      },
      {
        front: 'Was solltest du in dein Trainings-Logbuch eintragen?',
        back: '- Datum, Übung, Gewicht, Sätze, Reps\n- Notizen (z.B. "RIR 2", "fühlte sich leicht an")\n- Körpergewicht (1x/Woche)\n- Schlafqualität & Energie (1-10)\nZiel: Nächstes Mal die Zahlen überbieten!'
      }
    ],
    en: [
      {
        front: 'What are the 4 must-have equipment pieces for day 1?',
        back: '1. Comfortable workout clothes (breathable)\n2. Flat shoes (Chucks, Vans – NO running shoes!)\n3. Towel\n4. Water bottle\nBudget: ~$100'
      },
      {
        front: 'Why are running shoes bad for strength training?',
        back: 'The thick, soft sole is unstable. For squats and deadlifts you need stable ground contact. Soft soles = wobbly stance = injury risk!'
      },
      {
        front: 'When is a lifting belt useful?',
        back: 'Only after 6+ months training, only for very heavy sets (>80% 1RM), only for squat/deadlift. NOT as replacement for core stability! Learn without it first!'
      },
      {
        front: 'What is the most important "equipment" for strength training?',
        back: 'A training log (app: Strong, Hevy – free!).\nYou can\'t improve what you don\'t measure. Progressive overload needs tracking!'
      },
      {
        front: 'Name 3 things you DON\'T need as a beginner',
        back: '1. Expensive training clothes ($20 is enough!)\n2. Fitness tracker/smartwatch (logbook is enough)\n3. Special supplements (except protein + creatine)\n4. Compression clothing (provides no benefits)'
      },
      {
        front: 'What should you log in your training log?',
        back: '- Date, exercise, weight, sets, reps\n- Notes (e.g., "RIR 2", "felt easy")\n- Body weight (1x/week)\n- Sleep quality & energy (1-10)\nGoal: Beat the numbers next time!'
      }
    ]
  }
};


