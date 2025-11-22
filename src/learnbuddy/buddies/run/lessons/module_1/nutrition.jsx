import React from 'react';

export const nutritionLesson = {
  id: 'r1_m1_nutrition',
  title: { 
    en: '1.7 Nutrition & Hydration Basics', 
    de: '1.7 Ernährung & Hydration (Basics)' 
  },
  description: { 
    en: 'Learn the basics of hydration and nutrition for running - when and what to eat and drink for optimal performance and recovery.', 
    de: 'Lerne die Grundlagen von Hydration und Ernährung fürs Laufen - wann und was du essen und trinken solltest für optimale Performance und Regeneration.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Ernährung & Hydration: Die Basics 💧🍌

Richtige Ernährung und Hydration sind essentiell für gute Performance und schnelle Regeneration. Aber: Es muss nicht kompliziert sein!

**Die einfache Regel:** Höre auf deinen Körper, halte es einfach, und experimentiere vorsichtig.

---

### Hydration - Wasser ist Leben

Wasser ist der wichtigste Nährstoff für Läufer. Schon ein kleiner Flüssigkeitsverlust kann Performance beeinträchtigen.

**Vor dem Laufen**

- **1-2 Stunden vorher:** 500ml Wasser trinken
- Nicht zu viel kurz vorher (sonst musst du oft auf Toilette!)
- Urinfarbe als Indikator: Hellgelb = gut hydriert, dunkelgelb = mehr trinken

**Während des Laufens**

- **Bei Läufen >60 Minuten:** Trinken während des Laufens empfohlen
- **Bei Hitze:** Mehr trinken, auch bei kürzeren Läufen
- **Regel:** Alle 15-20 Minuten kleine Schlucke (nicht zu viel auf einmal!)

**Nach dem Laufen**

- **Innerhalb 30 Minuten:** Wasser trinken, um Flüssigkeitsverlust auszugleichen
- **Elektrolyte:** Bei langen Läufen (>90 Min) oder starkem Schwitzen wichtig

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Praktische Übung: Flüssigkeitsverlust messen</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Wiege dich vor und nach einem Lauf (ohne Kleidung). Der Gewichtsverlust ist hauptsächlich Wasser. Trinke 1,5x das Gewichtsverlust in ml. Beispiel: 1 kg Verlust = 1,5 Liter trinken.
  </p>
</div>

**Urinfarbe als Indikator:**

- ✅ **Hellgelb/Klar:** Gut hydriert
- ⚠️ **Gelb:** Okay, aber mehr trinken
- ❌ **Dunkelgelb/Orange:** Dehydriert! Mehr trinken!

---

### Ernährung vor dem Laufen

**2-3 Stunden vorher: Normale Mahlzeit**

Wenn du Zeit hast, iss eine normale Mahlzeit:
- Kohlenhydrate (Pasta, Reis, Brot, Haferflocken)
- Etwas Protein
- Nicht zu fettig (schwerer zu verdauen)

**1 Stunde vorher: Leichter Snack**

Wenn wenig Zeit, iss einen leichten Snack:
- Banane
- Toast mit Honig/Marmelade
- Energy Bar
- Etwas Obst

**Nüchtern laufen?**

- **Für kurze Läufe (<45 Min):** Kann okay sein, besonders morgens
- **Für lange Läufe:** Nicht ideal – du wirst früher müde
- **Teste es:** Manche vertragen es, andere nicht. Höre auf deinen Körper.

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Was vermeiden vor dem Laufen?</h4>
  <ul className="text-sm space-y-1 text-amber-700 dark:text-amber-300">
    <li>❌ Sehr fettige Mahlzeiten (schwer zu verdauen)</li>
    <li>❌ Sehr ballaststoffreiche Mahlzeiten (können zu Blähungen führen)</li>
    <li>❌ Scharfe Speisen (können Magenprobleme verursachen)</li>
    <li>❌ Zu viel kurz vorher (Risiko Seitenstechen)</li>
  </ul>
</div>

---

### Ernährung nach dem Laufen

Das "Anabolic Window" - die erste Stunde nach dem Laufen ist wichtig für Regeneration!

**30-60 Minuten nach dem Laufen: Protein + Kohlenhydrate**

Dein Körper braucht:
- **Protein:** Für Muskelreparatur
- **Kohlenhydrate:** Um Glykogen-Speicher aufzufüllen

**Gute Post-Run-Mahlzeiten:**

- Joghurt + Obst + Müsli
- Ei + Vollkorn-Toast
- Smoothie mit Proteinpulver
- Hühnchen + Süßkartoffel
- Quinoa-Bowl mit Gemüse

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Praktische Beispiele</h4>
  <ul className="text-sm space-y-1 text-blue-700 dark:text-blue-300">
    <li><strong>Schnell:</strong> Schoko-Milch (perfekt: Protein + Kohlenhydrate!)</li>
    <li><strong>Zu Hause:</strong> Omelett mit Toast</li>
    <li><strong>Nachmittag:</strong> Smoothie mit Banane, Beeren, Joghurt</li>
    <li><strong>Abend:</strong> Hühnchen mit Reis und Gemüse</li>
  </ul>
</div>

---

### Allgemeine Ernährungs-Tipps für Läufer

**Ausgewogene Ernährung täglich:**

- **Kohlenhydrate:** 50-60% (Hauptenergiequelle)
- **Proteine:** 15-20% (Muskelreparatur)
- **Fette:** 20-30% (Hormone, Energie)

**Nicht überkomplizieren!**

Für die meisten Läufer reicht eine normale, ausgewogene Ernährung. Du musst nicht:
- Spezielle Diäten machen
- Auf alles verzichten
- Komplizierte Mahlzeiten kochen

**Höre auf deinen Körper:**

- Wenn du müde bist, iss mehr Kohlenhydrate
- Wenn du hungrig bist, iss etwas (auch zwischen Mahlzeiten!)
- Wenn etwas nicht gut sitzt, ändere es beim nächsten Mal

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Praktische Übung</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Plane deine Mahlzeiten für einen Lauf-Tag:
  </p>
  <ul className="text-sm space-y-1 text-green-700 dark:text-green-300 mt-3 list-disc list-inside">
    <li><strong>2-3 Stunden vorher:</strong> Was isst du?</li>
    <li><strong>1 Stunde vorher:</strong> Leichter Snack?</li>
    <li><strong>Nach dem Laufen:</strong> Post-Run-Mahlzeit?</li>
    <li><strong>Teste es:</strong> Wie fühlt sich der Lauf an?</li>
  </ul>
</div>

---

### Zusammenfassung

**Hydration:**

- ✅ Vorher: 500ml 1-2 Stunden vorher
- ✅ Während: Bei Läufen >60 Min oder Hitze
- ✅ Nachher: Flüssigkeitsverlust ausgleichen
- ✅ Urinfarbe checken!

**Ernährung vorher:**

- ✅ 2-3 Stunden: Normale Mahlzeit
- ✅ 1 Stunde: Leichter Snack
- ✅ Nüchtern: Nur bei kurzen Läufen (<45 Min)

**Ernährung nachher:**

- ✅ 30-60 Min: Protein + Kohlenhydrate
- ✅ Joghurt + Obst, Ei + Toast, Smoothie

**Merke dir:** Halte es einfach! Experimentiere, höre auf deinen Körper, und mach es nicht komplizierter als nötig.
    `,
    en: `
### Nutrition & Hydration Basics 💧🍌

Proper nutrition and hydration are essential for good performance and fast recovery. But: It doesn't have to be complicated!

**The Simple Rule:** Listen to your body, keep it simple, and experiment carefully.

---

### Hydration - Water is Life

Water is the most important nutrient for runners. Even a small fluid loss can impair performance.

**Before Running**

- **1-2 hours before:** Drink 500ml water
- Not too much right before (otherwise you'll need frequent bathroom breaks!)
- Urine color as indicator: Light yellow = well hydrated, dark yellow = drink more

**During Running**

- **For runs >60 minutes:** Drink during run recommended
- **In heat:** Drink more, even for shorter runs
- **Rule:** Small sips every 15-20 minutes (not too much at once!)

**After Running**

- **Within 30 minutes:** Drink water to replace fluid loss
- **Electrolytes:** Important for long runs (>90 min) or heavy sweating

---

### Nutrition Before Running

**2-3 Hours Before: Normal Meal**

If you have time, eat a normal meal:
- Carbohydrates (pasta, rice, bread, oatmeal)
- Some protein
- Not too fatty (harder to digest)

**1 Hour Before: Light Snack**

If little time, eat a light snack:
- Banana
- Toast with honey/jam
- Energy bar
- Some fruit

**Running on Empty?**

- **For short runs (<45 min):** Can be okay, especially mornings
- **For long runs:** Not ideal – you'll get tired earlier
- **Test it:** Some tolerate it, others don't. Listen to your body.

---

### Nutrition After Running

The "Anabolic Window" - the first hour after running is important for recovery!

**30-60 Minutes After Running: Protein + Carbohydrates**

Your body needs:
- **Protein:** For muscle repair
- **Carbohydrates:** To refill glycogen stores

**Good Post-Run Meals:**

- Yogurt + fruit + granola
- Egg + whole grain toast
- Smoothie with protein powder
- Chicken + sweet potato
- Quinoa bowl with vegetables

---

### Summary

**Hydration:**

- ✅ Before: 500ml 1-2 hours before
- ✅ During: For runs >60 min or heat
- ✅ After: Replace fluid loss
- ✅ Check urine color!

**Nutrition Before:**

- ✅ 2-3 hours: Normal meal
- ✅ 1 hour: Light snack
- ✅ Empty: Only for short runs (<45 min)

**Nutrition After:**

- ✅ 30-60 min: Protein + carbohydrates
- ✅ Yogurt + fruit, egg + toast, smoothie

**Remember:** Keep it simple! Experiment, listen to your body, and don't make it more complicated than necessary.
    `
  },

  task: {
    de: {
      title: 'Hydration & Ernährung planen',
      description: 'Plane einen Lauf-Tag mit korrekter Hydration und Ernährung.',
      checklist: [
        { text: 'Vor dem Laufen: Trinke 500ml Wasser 1-2 Stunden vorher' },
        { text: 'Checke Urinfarbe: Ist sie hellgelb? Wenn nicht, mehr trinken!' },
        { text: '1 Stunde vorher: Leichter Snack (Banane oder Toast)' },
        { text: 'Nach dem Laufen: Innerhalb 30 Min Protein + Kohlenhydrate (z.B. Joghurt + Obst)' },
        { text: 'Messe Flüssigkeitsverlust: Wiege dich vor und nach (trinke 1,5x Gewichtsverlust in ml)' },
        { text: 'Notiere: Wie hast du dich gefühlt? Was hat funktioniert?' }
      ]
    },
    en: {
      title: 'Plan Hydration & Nutrition',
      description: 'Plan a running day with proper hydration and nutrition.',
      checklist: [
        { text: 'Before running: Drink 500ml water 1-2 hours before' },
        { text: 'Check urine color: Is it light yellow? If not, drink more!' },
        { text: '1 hour before: Light snack (banana or toast)' },
        { text: 'After running: Within 30 min protein + carbs (e.g., yogurt + fruit)' },
        { text: 'Measure fluid loss: Weigh before and after (drink 1.5x weight loss in ml)' },
        { text: 'Note: How did you feel? What worked?' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Wie viel sollte man vor dem Laufen trinken?',
        back: '500ml 1-2 Stunden vorher. Nicht zu viel kurz vorher (sonst häufige Toilettengänge).'
      },
      {
        front: 'Wann sollte man während des Laufens trinken?',
        back: 'Bei Läufen über 60 Minuten oder bei Hitze. Alle 15-20 Minuten kleine Schlucke.'
      },
      {
        front: 'Was isst man nach dem Laufen?',
        back: 'Innerhalb 30-60 Minuten: Protein + Kohlenhydrate (z.B. Joghurt + Obst, Ei + Toast, Smoothie)'
      },
      {
        front: 'Wie erkennt man Dehydration?',
        back: 'Urinfarbe: Dunkelgelb/Orange = dehydriert. Hellgelb/Klar = gut hydriert.'
      }
    ],
    en: [
      {
        front: 'How much should you drink before running?',
        back: '500ml 1-2 hours before. Not too much right before (otherwise frequent bathroom breaks).'
      },
      {
        front: 'When should you drink during running?',
        back: 'For runs over 60 minutes or in heat. Small sips every 15-20 minutes.'
      },
      {
        front: 'What do you eat after running?',
        back: 'Within 30-60 minutes: Protein + carbohydrates (e.g., yogurt + fruit, egg + toast, smoothie)'
      },
      {
        front: 'How do you recognize dehydration?',
        back: 'Urine color: Dark yellow/orange = dehydrated. Light yellow/clear = well hydrated.'
      }
    ]
  }
};

