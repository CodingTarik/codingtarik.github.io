import React from 'react';

export const nutritionOptimizationLesson = {
  id: 'r7_m4_nutrition_optimization',
  title: { 
    en: '7.4 Nutrition Optimization for Performance', 
    de: '7.4 Ernährungs-Optimierung für Performance' 
  },
  description: { 
    en: 'Master periodized nutrition, race-day fueling strategies, and evidence-based supplements to optimize your running performance.', 
    de: 'Meistere periodisierte Ernährung, Wettkampf-Ernährungsstrategien und evidenzbasierte Supplements zur Optimierung deiner Lauf-Performance.' 
  },
  category: 'performance',
  
  content: {
    de: `
### Ernährungs-Optimierung: Fuel Your Performance! 🍽️

Ernährung ist der vierte Trainingsreiz neben Laufen, Kraft und Regeneration. Richtige Ernährung kann 5-10% Performance-Unterschied machen. Dieser Modul zeigt periodisierte Ernährung, Race-Day-Strategien und sinnvolle Supplements.

---
### Periodisierte Ernährung

**Was ist das?**
- Ernährung an Trainingsbelastung anpassen
- Mehr Kohlenhydrate an harten Tagen
- Mehr Protein an Regenerationstagen
- Kalorien an Bedarf anpassen

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Trainingstag</th>
      <th className="border p-3 text-left">Kohlenhydrate</th>
      <th className="border p-3 text-left">Protein</th>
      <th className="border p-3 text-left">Fett</th>
      <th className="border p-3 text-left">Kalorien</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Ruhetag</strong></td>
      <td className="border p-3">3-5 g/kg</td>
      <td className="border p-3">1,6-2,0 g/kg</td>
      <td className="border p-3">1,0-1,5 g/kg</td>
      <td className="border p-3">Normal</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Easy Run</strong></td>
      <td className="border p-3">5-7 g/kg</td>
      <td className="border p-3">1,4-1,6 g/kg</td>
      <td className="border p-3">1,0 g/kg</td>
      <td className="border p-3">Normal+</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Harter Tag (Tempo/Intervall)</strong></td>
      <td className="border p-3">7-10 g/kg</td>
      <td className="border p-3">1,4-1,6 g/kg</td>
      <td className="border p-3">0,8-1,0 g/kg</td>
      <td className="border p-3">Hoch</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Long Run Tag</strong></td>
      <td className="border p-3">8-12 g/kg</td>
      <td className="border p-3">1,4-1,6 g/kg</td>
      <td className="border p-3">0,8 g/kg</td>
      <td className="border p-3">Sehr hoch</td>
    </tr>
  </tbody>
</table>

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Fuel for the Work</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    <strong>"Fuel for the work required"</strong> - Iss entsprechend deinem Training. An harten Tagen brauchst du mehr Kohlenhydrate (Energie!). An leichten Tagen weniger Kohlenhydrate, mehr Protein (Regeneration!).
  </p>
</div>

---
### Wettkampf-Ernährung (Race Nutrition)

**Vor dem Rennen (3-4 Tage):**
- **Carb-Loading:** Kohlenhydrate auf 8-12 g/kg erhöhen
- **Nicht übertreiben:** Portionen steigern, nicht komplett umstellen
- **Getestet:** Nur Lebensmittel essen, die du kennst!
- **Hydration:** Gut hydriert an den Start gehen

**Race-Day Frühstück (3-4 Std. vorher):**
- Leicht verdaulich, kohlenhydratreich
- Beispiele: Toast + Marmelade, Haferbrei, Banane + Riegel
- 500-800 kcal (je nach Distanz)
- Kaffee okay (wenn gewohnt)

**Während des Rennens:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Distanz</th>
      <th className="border p-3 text-left">Kohlenhydrate/Std.</th>
      <th className="border p-3 text-left">Strategie</th>
      <th className="border p-3 text-left">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>5K/10K</strong></td>
      <td className="border p-3">Keine nötig</td>
      <td className="border p-3">Nur Wasser wenn heiß</td>
      <td className="border p-3">-</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Halbmarathon</strong></td>
      <td className="border p-3">30-60g</td>
      <td className="border p-3">1 Gel bei km 7-8, ggf. km 14</td>
      <td className="border p-3">1-2 Gels + Wasser</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Marathon</strong></td>
      <td className="border p-3">60-90g</td>
      <td className="border p-3">Gel alle 30-45 Min ab km 5</td>
      <td className="border p-3">5-7 Gels + Elektrolyte</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Ultra</strong></td>
      <td className="border p-3">60-90g+</td>
      <td className="border p-3">Mix aus Gels + fester Nahrung</td>
      <td className="border p-3">Gels, Riegel, Bananen, Brühe</td>
    </tr>
  </tbody>
</table>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Goldene Regel</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    <strong>Nothing new on race day!</strong> Teste ALLES vorher im Training. Neue Gels, neue Getränke, neues Frühstück = Magenprobleme garantiert. Der Magen muss trainiert werden wie die Beine!
  </p>
</div>

---
### Supplements für Läufer

**Evidenzbasiert (gut belegt):**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Supplement</th>
      <th className="border p-3 text-left">Wirkung</th>
      <th className="border p-3 text-left">Dosierung</th>
      <th className="border p-3 text-left">Evidenz</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Koffein</strong></td>
      <td className="border p-3">Performance +3-5%</td>
      <td className="border p-3">3-6 mg/kg, 30-60 Min vorher</td>
      <td className="border p-3">⭐⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Kreatin</strong></td>
      <td className="border p-3">Kraft, Sprint-Leistung</td>
      <td className="border p-3">3-5 g/Tag</td>
      <td className="border p-3">⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Eisen</strong></td>
      <td className="border p-3">Sauerstofftransport</td>
      <td className="border p-3">Nur bei Mangel (Arzt!)</td>
      <td className="border p-3">⭐⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Vitamin D</strong></td>
      <td className="border p-3">Knochengesundheit, Immunsystem</td>
      <td className="border p-3">1000-2000 IU/Tag (Winter)</td>
      <td className="border p-3">⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Omega-3</strong></td>
      <td className="border p-3">Entzündungshemmend</td>
      <td className="border p-3">1-2 g EPA+DHA/Tag</td>
      <td className="border p-3">⭐⭐⭐⭐</td>
    </tr>
  </tbody>
</table>

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Supplements-Warnung</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li><strong>Erst die Basics:</strong> Ernährung, Schlaf, Training optimieren BEVOR Supplements</li>
    <li><strong>Arzt konsultieren:</strong> Besonders bei Eisen (Blutbild!)</li>
    <li><strong>Qualität:</strong> Nur zertifizierte Produkte (Informed Sport, Kölner Liste)</li>
    <li><strong>Kein Wundermittel:</strong> Supplements = 1-5% Verbesserung, Training = 95%+</li>
  </ul>
</div>

---
### Zusammenfassung

**Key Takeaways:**
- 🍽️ **Periodisierte Ernährung:** Kohlenhydrate an Trainingsbelastung anpassen
- 🏁 **Race Nutrition:** Carb-Loading, Gels alle 30-45 Min (Marathon), ALLES vorher testen
- 💊 **Supplements:** Koffein (beste Evidenz), Eisen (bei Mangel), Vitamin D (Winter)
- ⚠️ **Nothing new on race day!** Magen muss trainiert werden
- 📊 **Basics first:** Ernährung > Supplements

**Essen ist Training - trainiere deinen Magen wie deine Beine!** 🏃‍♂️
    `,
    en: `
### Nutrition Optimization: Fuel Your Performance! 🍽️

Nutrition is the fourth training stimulus alongside running, strength, and recovery. Proper nutrition can make a 5-10% performance difference. This module covers periodized nutrition, race-day strategies, and evidence-based supplements.

---
### Periodized Nutrition

**What is it?**
- Adapt nutrition to training load
- More carbs on hard days
- More protein on recovery days
- Adjust calories to needs

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Training Day</th>
      <th className="border p-3 text-left">Carbs</th>
      <th className="border p-3 text-left">Protein</th>
      <th className="border p-3 text-left">Fat</th>
      <th className="border p-3 text-left">Calories</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Rest Day</strong></td>
      <td className="border p-3">3-5 g/kg</td>
      <td className="border p-3">1.6-2.0 g/kg</td>
      <td className="border p-3">1.0-1.5 g/kg</td>
      <td className="border p-3">Normal</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Easy Run</strong></td>
      <td className="border p-3">5-7 g/kg</td>
      <td className="border p-3">1.4-1.6 g/kg</td>
      <td className="border p-3">1.0 g/kg</td>
      <td className="border p-3">Normal+</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Hard Day (Tempo/Intervals)</strong></td>
      <td className="border p-3">7-10 g/kg</td>
      <td className="border p-3">1.4-1.6 g/kg</td>
      <td className="border p-3">0.8-1.0 g/kg</td>
      <td className="border p-3">High</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Long Run Day</strong></td>
      <td className="border p-3">8-12 g/kg</td>
      <td className="border p-3">1.4-1.6 g/kg</td>
      <td className="border p-3">0.8 g/kg</td>
      <td className="border p-3">Very High</td>
    </tr>
  </tbody>
</table>

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Fuel for the Work</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    <strong>"Fuel for the work required"</strong> - Eat according to your training. On hard days you need more carbs (energy!). On easy days fewer carbs, more protein (recovery!).
  </p>
</div>

---
### Race Nutrition

**Before the Race (3-4 Days):**
- **Carb-Loading:** Increase carbs to 8-12 g/kg
- **Don't overdo it:** Increase portions, don't completely change diet
- **Tested:** Only eat foods you know!
- **Hydration:** Start well-hydrated

**Race-Day Breakfast (3-4 hrs before):**
- Easily digestible, carb-rich
- Examples: Toast + jam, oatmeal, banana + bar
- 500-800 kcal (depending on distance)
- Coffee okay (if used to it)

**During the Race:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Distance</th>
      <th className="border p-3 text-left">Carbs/Hour</th>
      <th className="border p-3 text-left">Strategy</th>
      <th className="border p-3 text-left">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>5K/10K</strong></td>
      <td className="border p-3">None needed</td>
      <td className="border p-3">Only water if hot</td>
      <td className="border p-3">-</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Half Marathon</strong></td>
      <td className="border p-3">30-60g</td>
      <td className="border p-3">1 gel at km 7-8, possibly km 14</td>
      <td className="border p-3">1-2 gels + water</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Marathon</strong></td>
      <td className="border p-3">60-90g</td>
      <td className="border p-3">Gel every 30-45 min from km 5</td>
      <td className="border p-3">5-7 gels + electrolytes</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Ultra</strong></td>
      <td className="border p-3">60-90g+</td>
      <td className="border p-3">Mix of gels + solid food</td>
      <td className="border p-3">Gels, bars, bananas, broth</td>
    </tr>
  </tbody>
</table>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Golden Rule</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    <strong>Nothing new on race day!</strong> Test EVERYTHING in training first. New gels, new drinks, new breakfast = stomach problems guaranteed. The stomach must be trained like the legs!
  </p>
</div>

---
### Supplements for Runners

**Evidence-Based (Well-Supported):**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Supplement</th>
      <th className="border p-3 text-left">Effect</th>
      <th className="border p-3 text-left">Dosage</th>
      <th className="border p-3 text-left">Evidence</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Caffeine</strong></td>
      <td className="border p-3">Performance +3-5%</td>
      <td className="border p-3">3-6 mg/kg, 30-60 min before</td>
      <td className="border p-3">⭐⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Creatine</strong></td>
      <td className="border p-3">Strength, sprint performance</td>
      <td className="border p-3">3-5 g/day</td>
      <td className="border p-3">⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Iron</strong></td>
      <td className="border p-3">Oxygen transport</td>
      <td className="border p-3">Only if deficient (doctor!)</td>
      <td className="border p-3">⭐⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Vitamin D</strong></td>
      <td className="border p-3">Bone health, immune system</td>
      <td className="border p-3">1000-2000 IU/day (winter)</td>
      <td className="border p-3">⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Omega-3</strong></td>
      <td className="border p-3">Anti-inflammatory</td>
      <td className="border p-3">1-2g EPA+DHA/day</td>
      <td className="border p-3">⭐⭐⭐⭐</td>
    </tr>
  </tbody>
</table>

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Supplements Warning</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li><strong>Basics first:</strong> Optimize nutrition, sleep, training BEFORE supplements</li>
    <li><strong>Consult doctor:</strong> Especially for iron (blood test!)</li>
    <li><strong>Quality:</strong> Only certified products (Informed Sport)</li>
    <li><strong>No magic pill:</strong> Supplements = 1-5% improvement, training = 95%+</li>
  </ul>
</div>

---
### Summary

**Key Takeaways:**
- 🍽️ **Periodized nutrition:** Adjust carbs to training load
- 🏁 **Race nutrition:** Carb-loading, gels every 30-45 min (marathon), test EVERYTHING first
- 💊 **Supplements:** Caffeine (best evidence), iron (if deficient), vitamin D (winter)
- ⚠️ **Nothing new on race day!** Stomach must be trained
- 📊 **Basics first:** Nutrition > supplements

**Eating is training - train your stomach like your legs!** 🏃‍♂️
    `
  },

  task: {
    de: {
      title: 'Ernährung optimieren',
      description: 'Optimiere deine Ernährung basierend auf deinem Training.',
      checklist: [
        { text: 'Aktuellen Kohlenhydrat-Verbrauch tracken (3 Tage)' },
        { text: 'Periodisierte Ernährung 1 Woche testen (mehr KH an harten Tagen)' },
        { text: 'Post-Workout-Mahlzeit planen (Protein + KH innerhalb 60 Min)' },
        { text: 'Gel/Getränk während Long Run testen' },
        { text: 'Vitamin D und Eisen-Status beim Arzt prüfen lassen' },
        { text: 'Race-Day-Ernährungsstrategie planen' }
      ]
    },
    en: {
      title: 'Optimize Nutrition',
      description: 'Optimize your nutrition based on your training.',
      checklist: [
        { text: 'Track current carb intake (3 days)' },
        { text: 'Test periodized nutrition for 1 week (more carbs on hard days)' },
        { text: 'Plan post-workout meal (protein + carbs within 60 min)' },
        { text: 'Test gel/drink during long run' },
        { text: 'Get vitamin D and iron status checked by doctor' },
        { text: 'Plan race-day nutrition strategy' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Periodisierte Ernährung?',
        back: 'Kohlenhydrate an Training anpassen: Ruhetag 3-5 g/kg, Easy Run 5-7 g/kg, harter Tag 7-10 g/kg, Long Run 8-12 g/kg. Protein: 1,4-2,0 g/kg.'
      },
      {
        front: 'Race-Day Ernährung (Marathon)?',
        back: 'Carb-Loading 3-4 Tage vorher (8-12 g/kg). Frühstück 3-4 Std vorher. Gels alle 30-45 Min ab km 5 (60-90g KH/Std). ALLES vorher testen!'
      },
      {
        front: 'Beste Supplements für Läufer?',
        back: 'Koffein (3-6 mg/kg, +3-5% Performance), Eisen (nur bei Mangel!), Vitamin D (1000-2000 IU/Tag Winter), Omega-3 (1-2g/Tag). Basics first!'
      }
    ],
    en: [
      {
        front: 'Periodized nutrition?',
        back: 'Adjust carbs to training: Rest day 3-5 g/kg, easy run 5-7 g/kg, hard day 7-10 g/kg, long run 8-12 g/kg. Protein: 1.4-2.0 g/kg.'
      },
      {
        front: 'Race-day nutrition (marathon)?',
        back: 'Carb-load 3-4 days before (8-12 g/kg). Breakfast 3-4 hrs before. Gels every 30-45 min from km 5 (60-90g carbs/hr). Test EVERYTHING first!'
      },
      {
        front: 'Best supplements for runners?',
        back: 'Caffeine (3-6 mg/kg, +3-5% performance), iron (only if deficient!), vitamin D (1000-2000 IU/day winter), omega-3 (1-2g/day). Basics first!'
      }
    ]
  }
};
