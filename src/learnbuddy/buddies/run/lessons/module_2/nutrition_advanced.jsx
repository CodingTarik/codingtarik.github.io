import React from 'react';

export const nutritionAdvancedLesson = {
  id: 'r2_m7_nutrition_advanced',
  title: { 
    en: '2.7 Advanced Nutrition for Runners', 
    de: '2.7 Ernährung vertieft für Läufer' 
  },
  description: { 
    en: 'Deep dive into macronutrients, meal timing, and run-specific nutrition to fuel your performance and recovery.', 
    de: 'Tiefergehender Einblick in Makronährstoffe, Mahlzeiten-Timing und lauf-spezifische Ernährung, um deine Leistung und Erholung zu optimieren.' 
  },
  category: 'building',
  
  content: {
    de: `
### Ernährung vertieft: Der Treibstoff für deine Läufe 🥗

Ernährung ist nicht nur Kalorien zählen – es geht um den richtigen Treibstoff zur richtigen Zeit! Diese Lektion vertieft die Basics und zeigt, wie du deine Ernährung auf das Laufen abstimmst.

---
### Makronährstoffe für Läufer: Das ABC der Energie

Makronährstoffe sind die Bausteine deiner Ernährung. Als Läufer brauchst du einen spezifischen Mix!

**Kohlenhydrate (50-60% der Kalorien):**
- Hauptenergiequelle für Läufe (Glykogen-Speicher)
- Komplexe Carbs: Vollkorn, Hafer, Süßkartoffeln (langsame Energie)
- Einfache Carbs: Früchte, Gels (schnelle Energie während Läufen)
- Warum? Ohne Carbs "hast du die Wand" beim Long Run!

**Proteine (15-20%):**
- Muskelreparatur und -aufbau nach Läufen
- Quellen: Eier, Hühnerbrust, Quark, Linsen, Tofu
- Timing: 20-30g innerhalb 30-60 Min nach dem Laufen
- Warum? Verhindert Muskelabbau und fördert Erholung

**Fette (20-30%):**
- Langsame Energiequelle, Hormone, Zellgesundheit
- Gesunde Fette: Avocados, Nüsse, Fischöl, Olivenöl
- Vermeide: Transfette (Fast Food)
- Warum? Wichtig für lange Läufe (Fettverbrennung)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Der perfekte Mix</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Bei 2000 Kalorien/Tag: 250-300g Carbs, 75-100g Protein, 44-67g Fett. Passe an dein Trainingsvolumen an – mehr Läufe = mehr Carbs!
  </p>
</div>

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Makronährstoff</th>
      <th className="border p-3 text-left">Anteil</th>
      <th className="border p-3 text-left">Beispiele</th>
      <th className="border p-3 text-left">Funktion für Läufer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Kohlenhydrate</strong></td>
      <td className="border p-3">50-60%</td>
      <td className="border p-3">Hafer, Banane, Vollkornbrot</td>
      <td className="border p-3">Sofortige Energie, Glykogen-Speicher</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Proteine</strong></td>
      <td className="border p-3">15-20%</td>
      <td className="border p-3">Hühnerbrust, Joghurt, Linsen</td>
      <td className="border p-3">Muskelreparatur, Erholung</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Fette</strong></td>
      <td className="border p-3">20-30%</td>
      <td className="border p-3">Avocado, Mandeln, Lachs</td>
      <td className="border p-3">Langsame Energie, Hormonbalance</td>
    </tr>
  </tbody>
</table>

---
### Timing ist alles: Wann essen?

**Vor dem Laufen (Fueling):**
- 2-3 Stunden vorher: Normale Mahlzeit (Carbs + Protein, z.B. Hafer mit Joghurt)
- 1 Stunde vorher: Leichter Snack (Banane, Toast mit Honig)
- Nüchtern laufen? Nur für kurze Easy Runs (<45 Min). Für Long Runs: Immer essen!

**Nach dem Laufen (Recovery Window):**
- 30-60 Min nach dem Laufen: Protein + Carbs (z.B. Shake mit Banane oder Ei auf Toast)
- Warum? Glykogen wieder auffüllen, Muskeln reparieren
- Täglich: Ausgewogene Mahlzeiten, 3x Hauptmahlzeiten + 2x Snacks

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Goldenes Fenster</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Die ersten 30-60 Min nach dem Laufen sind entscheidend! Iss innerhalb dieser Zeit, um Erholung zu maximieren. Ignoriere es nicht!
  </p>
</div>

**Lauf-spezifische Ernährung:**
- **Energie-Gels:** Für Läufe >90 Min (alle 45 Min ein Gel + Wasser)
- **Sportgetränke:** Bei langen Läufen/Schweiß (Elektrolyte: Natrium, Kalium)
- **Koffein:** 30-60 Min vor dem Lauf (z.B. starker Kaffee) – test im Training!
- Bei Hitze: Mehr Elektrolyte, weniger reine Carbs

**Praktische Übung:** Teste ein Energie-Gel während eines Long Runs (>90 Min). Nimm es mit Wasser und notiere: Energie-Boost? Magenprobleme?

---
### Spezielle Ernährung für Läufer

**Trainings-Phasen anpassen:**
- Hohes Volumen (Long Run Woche): Mehr Carbs (60%)
- Ruhewoche: Mehr Protein, weniger Carbs
- Race Week: Carb-Loading (3 Tage vor: 8-10g Carbs/kg Körpergewicht)

**Häufige Fehler:**
- ❌ Zu wenig Carbs: "Hitting the Wall" bei langen Läufen
- ❌ Zu viel Protein: Verstopfung, weniger Energie
- ❌ Kein Timing: Schlechte Performance oder Erholung

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warnung</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Ernährung ist individuell! Teste alles im Training, nicht erst beim Rennen. Bei Unverträglichkeiten (z.B. Laktose) passe an oder konsultiere einen Ernährungsberater.
  </p>
</div>

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Praktische Übung</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Plane deine Mahlzeiten für einen Lauf-Tag: Vorher (Carbs-Snack), Nachher (Protein + Carbs). Tracke für eine Woche: Mehr Energie? Bessere Erholung?
  </p>
</div>

---
### Zusammenfassung

**Ernährung vertieft:**
- ✅ Carbs (50-60%): Energiequelle, Glykogen
- ✅ Protein (15-20%): Reparatur, 20-30g post-run
- ✅ Fette (20-30%): Langsame Energie, Hormone
- ✅ Timing: Vorher fuelen, nachher recovern (30-60 Min Window)
- ✅ Lauf-spezifisch: Gels >90 Min, Elektrolyte bei Schweiß

**Merke dir:** Deine Ernährung ist 70% deines Erfolgs! Iss wie ein Athlet, nicht wie ein Hobbykoch. Teste und passe an – dein Körper ist einzigartig!
    `,
    en: `
### Advanced Nutrition: The Fuel for Your Runs 🥗

Nutrition isn't just counting calories – it's about the right fuel at the right time! This lesson deepens the basics and shows how to tailor your diet to running.

---
### Macronutrients for Runners: The ABC of Energy

Macronutrients are the building blocks of your diet. As a runner, you need a specific mix!

**Carbohydrates (50-60% of calories):**
- Main energy source for runs (glycogen stores)
- Complex carbs: Whole grains, oats, sweet potatoes (slow energy)
- Simple carbs: Fruits, gels (quick energy during runs)
- Why? Without carbs, you "hit the wall" on long runs!

**Proteins (15-20%):**
- Muscle repair and building after runs
- Sources: Eggs, chicken breast, cottage cheese, lentils, tofu
- Timing: 20-30g within 30-60 min after running
- Why? Prevents muscle breakdown and promotes recovery

**Fats (20-30%):**
- Slow energy source, hormones, cell health
- Healthy fats: Avocados, nuts, fish oil, olive oil
- Avoid: Trans fats (fast food)
- Why? Important for long runs (fat burning)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 The Perfect Mix</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    At 2000 calories/day: 250-300g carbs, 75-100g protein, 44-67g fat. Adjust to your training volume – more runs = more carbs!
  </p>
</div>

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Macronutrient</th>
      <th className="border p-3 text-left">Share</th>
      <th className="border p-3 text-left">Examples</th>
      <th className="border p-3 text-left">Function for Runners</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Carbohydrates</strong></td>
      <td className="border p-3">50-60%</td>
      <td className="border p-3">Oats, banana, whole grain bread</td>
      <td className="border p-3">Immediate energy, glycogen stores</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Proteins</strong></td>
      <td className="border p-3">15-20%</td>
      <td className="border p-3">Chicken breast, yogurt, lentils</td>
      <td className="border p-3">Muscle repair, recovery</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Fats</strong></td>
      <td className="border p-3">20-30%</td>
      <td className="border p-3">Avocado, almonds, salmon</td>
      <td className="border p-3">Slow energy, hormone balance</td>
    </tr>
  </tbody>
</table>

---
### Timing is Everything: When to Eat?

**Before Running (Fueling):**
- 2-3 hours before: Normal meal (carbs + protein, e.g., oats with yogurt)
- 1 hour before: Light snack (banana, toast with honey)
- Fasted running? Only for short easy runs (<45 min). For long runs: Always eat!

**After Running (Recovery Window):**
- 30-60 min after running: Protein + carbs (e.g., shake with banana or egg on toast)
- Why? Replenish glycogen, repair muscles
- Daily: Balanced meals, 3 main meals + 2 snacks

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Golden Window</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    The first 30-60 min after running are crucial! Eat within this time to maximize recovery. Don't ignore it!
  </p>
</div>

**Run-Specific Nutrition:**
- **Energy Gels:** For runs >90 min (one gel every 45 min + water)
- **Sports Drinks:** For long runs/sweating (electrolytes: sodium, potassium)
- **Caffeine:** 30-60 min before run (e.g., strong coffee) – test in training!
- In heat: More electrolytes, less pure carbs

**Practical Exercise:** Test an energy gel during a long run (>90 min). Take it with water and note: Energy boost? Stomach issues?

---
### Special Runner Nutrition

**Adjust to Training Phases:**
- High volume (long run week): More carbs (60%)
- Rest week: More protein, fewer carbs
- Race week: Carb-loading (3 days before: 8-10g carbs/kg body weight)

**Common Mistakes:**
- ❌ Too few carbs: "Hitting the wall" on long runs
- ❌ Too much protein: Constipation, less energy
- ❌ No timing: Poor performance or recovery

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warning</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Nutrition is individual! Test everything in training, not on race day. For intolerances (e.g., lactose), adjust or consult a nutritionist.
  </p>
</div>

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Practical Exercise</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Plan your meals for a run day: Before (carb snack), after (protein + carbs). Track for a week: More energy? Better recovery?
  </p>
</div>

---
### Summary

**Advanced Nutrition:**
- ✅ Carbs (50-60%): Energy source, glycogen
- ✅ Protein (15-20%): Repair, 20-30g post-run
- ✅ Fats (20-30%): Slow energy, hormones
- ✅ Timing: Fuel before, recover after (30-60 min window)
- ✅ Run-specific: Gels >90 min, electrolytes for sweat

**Remember:** Your nutrition is 70% of your success! Eat like an athlete, not a hobby cook. Test and adjust – your body is unique!
    `
  },

  task: {
    de: {
      title: 'Lauf-Ernährung planen',
      description: 'Plane und teste deine Ernährung für einen Lauf-Tag.',
      checklist: [
        { text: 'Berechne deinen Makro-Mix: Carbs 50-60%, Protein 15-20%, Fette 20-30%' },
        { text: 'Plane Vorher: 1 Std. Snack (z.B. Banane + Honig)' },
        { text: 'Plane Nachher: 30 Min post-run (z.B. Shake mit Protein + Carbs)' },
        { text: 'Teste während Long Run: Ein Energie-Gel + Wasser' },
        { text: 'Tracke eine Woche: Mehr Energie? Bessere Erholung?' },
        { text: 'Passe an: Bei Magenproblemen andere Optionen testen' }
      ]
    },
    en: {
      title: 'Plan Run Nutrition',
      description: 'Plan and test your nutrition for a run day.',
      checklist: [
        { text: 'Calculate your macro mix: Carbs 50-60%, Protein 15-20%, Fats 20-30%' },
        { text: 'Plan before: 1 hr snack (e.g., banana + honey)' },
        { text: 'Plan after: 30 min post-run (e.g., shake with protein + carbs)' },
        { text: 'Test during long run: One energy gel + water' },
        { text: 'Track for a week: More energy? Better recovery?' },
        { text: 'Adjust: If stomach issues, try other options' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Welcher Anteil Carbs für Läufer?',
        back: '50-60% der Kalorien. Hauptenergiequelle, Glykogen-Speicher. Mehr bei hohem Trainingsvolumen.'
      },
      {
        front: 'Recovery Window nach dem Laufen?',
        back: '30-60 Min nach dem Laufen: Protein + Carbs (20-30g Protein). Maximale Erholung und Glykogen-Auffüllung.'
      },
      {
        front: 'Wann Energie-Gels verwenden?',
        back: 'Bei Läufen >90 Min, alle 45 Min mit Wasser. Teste im Training, um Magenprobleme zu vermeiden.'
      }
    ],
    en: [
      {
        front: 'What share of carbs for runners?',
        back: '50-60% of calories. Main energy source, glycogen stores. More with high training volume.'
      },
      {
        front: 'Recovery window after running?',
        back: '30-60 min after running: Protein + carbs (20-30g protein). Maximum recovery and glycogen replenishment.'
      },
      {
        front: 'When to use energy gels?',
        back: 'For runs >90 min, every 45 min with water. Test in training to avoid stomach issues.'
      }
    ]
  }
};

