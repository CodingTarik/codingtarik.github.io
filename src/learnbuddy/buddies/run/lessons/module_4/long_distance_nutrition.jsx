import React from 'react';

export const longDistanceNutritionLesson = {
  id: 'r4_m2_long_distance_nutrition',
  title: { 
    en: '4.2 Nutrition for Long Distances', 
    de: '4.2 Ernährung für lange Distanzen' 
  },
  description: { 
    en: 'Master carb-loading, race-day fueling with gels and electrolytes to sustain energy through marathons and beyond.', 
    de: 'Meistere Carb-Loading, Race-Day-Fueling mit Gels und Elektrolyten, um Energie für Marathons und darüber hinaus zu halten.' 
  },
  category: 'marathon',
  
  content: {
    de: `
### Ernährung für lange Distanzen: Dein Race-Fuel! ⛽

Für Distanzen über 90 Min (Halbmarathon+) ist Ernährung entscheidend – sie verhindert die Wand und maximiert Performance. Dieser Modul vertieft Phase 2-Ernährung für Marathon/Ultra: Carb-Loading, Gels, Elektrolyte!

---
### Carb-Loading: Der Energiespeicher füllen

**Was ist Carb-Loading?**
- 2-3 Tage vor Rennen: Kohlenhydrate erhöhen (8-10g/kg Körpergewicht)
- Training reduzieren (leichte Läufe)
- Warum? Glykogen-Speicher maximieren (ca. 2000-3000 kcal Energie)

**Wie umsetzen?**
- Tag -3: Normale Carbs + leichter Lauf
- Tag -2: Hohe Carbs (Pasta, Reis, Brot), kein Fett
- Tag -1: Noch höher Carbs, Ruhetag
- Race Day: Leichtes Frühstück (3-4 Std. vorher)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Beispiel für 70kg Läufer</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    560-700g Carbs/Tag (z.B. 200g Pasta = 150g Carbs). Nicht übertreiben – zu viel = Blähungen!
  </p>
</div>

**Häufige Fehler:**
- ❌ Zu früh starten → Gewichtszunahme
- ❌ Zu viel Fett/Protein → Verdauungsprobleme
- ✅ Tipp: Teste im Training (vor Long Run)

**Praktische Übung:** Teste Carb-Loading vor einem Long Run (>20 km). Iss 3 Tage hoch Carbs, tracke Energie. Vergleiche mit normaler Woche.

---
### Race-Day-Ernährung: Fueling während des Rennens

**Frühstück (3-4 Std. vorher):**
- Leicht verdaulich: Toast mit Banane, Hafer mit Honig (Carbs + wenig Protein)
- 1-2g Carbs/kg (70kg = 70-140g)
- Koffein: Schwarzer Kaffee (optional, testbar)

**Während des Rennens (alle 45-60 Min):**
- **Gels:** 30-60g Carbs/Gel (km 7,14,21,28,35 für Marathon)
- **Flüssigkeit:** Immer mit Wasser (Gels ohne = Magenprobleme)
- **Timing:** Bei km 5,10,15,20,25,30,35 (je nach Distanz)

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Zeitpunkt</th>
      <th className="border p-3 text-left">Was essen?</th>
      <th className="border p-3 text-left">Carbs (g)</th>
      <th className="border p-3 text-left">Flüssigkeit</th>
      <th className="border p-3 text-left">Tipp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>3-4 Std. vor</strong></td>
      <td className="border p-3">Hafer + Banane</td>
      <td className="border p-3">60-100g</td>
      <td className="border p-3">500ml Wasser</td>
      <td className="border p-3">Leicht verdaulich</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Start + 45 Min</strong></td>
      <td className="border p-3">Gel 1</td>
      <td className="border p-3">25-30g</td>
      <td className="border p-3">150ml Wasser</td>
      <td className="border p-3">km 7-8</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Alle 45 Min</strong></td>
      <td className="border p-3">Gels 2-6</td>
      <td className="border p-3">25-30g pro Gel</td>
      <td className="border p-3">150ml + Elektrolyte</td>
      <td className="border p-3">Bis km 35</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Nach Rennen</strong></td>
      <td className="border p-3">Shake + Banane</td>
      <td className="border p-3">40g Carbs + 20g Protein</td>
      <td className="border p-3">500ml Recovery-Drink</td>
      <td className="border p-3">30 Min Window</td>
    </tr>
  </tbody>
</table>

**Gels wählen & testen:**
- Typen: Koffein-Gels (Endspurt), Koffein-frei (früh)
- Marken: Maurten, GU, SiS (Magen verträglich)
- Warum? 200-300 kcal/Stunde nötig >90 Min

**Praktische Übung:** Teste verschiedene Gels im Training (Long Run >2 Std.). Nimm mit Wasser, notiere: Boost? Magen? Finde deine Favoriten.

---
### Elektrolyte: Salz & Mineralien für Ausdauer

**Warum wichtig?**
- Bei Schweißverlust: Natrium, Kalium, Magnesium
- Verhindert Krämpfe, Dehydration
- Bei Hitze/Langstrecke: Essentiell!

**Quellen:**
- Sportgetränke (Gatorade, Powerade)
- Elektrolyt-Tabletten (SaltStick, Nuun)
- Natürliche: Banane (Kalium), Salz (Natrium)

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Dosierung</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    500-700mg Natrium/Stunde (schweren Schweißer). Teste im Training – zu viel = Übelkeit, zu wenig = Krämpfe.
  </p>
</div>

**Integration:**
- Alle 20 Min: 100-200ml Getränk mit Elektrolyten
- Bei Ultra: Feste Nahrung (z.B. Sandwiches) ergänzen

**Praktische Übung:** Bei langem Lauf (>2 Std.): Teste Elektrolyt-Getränk vs. Wasser. Wiege vor/nach: Flüssigkeitsverlust? Krämpfe?

---
### Häufige Fehler & Warnungen

**Fehler:**
- ❌ Kein Testen → Race-Crash (Magenprobleme)
- ❌ Zu wenig Carbs → Wand
- ❌ Über-Loaden → Blähungen

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warnung</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Individuelle Toleranz! Bei Allergien/Unverträglichkeiten Arzt fragen. Teste ALLES im Training – Race Day ist nicht der Testtag.
  </p>
</div>

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Praktische Übung</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Plane Race-Ernährung für Marathon: Carb-Loading 3 Tage, Gels-Timing, Elektrolyte. Teste bei 30-km-Long Run.
  </p>
</div>

---
### Zusammenfassung

**Ernährung für lange Distanzen:**
- ✅ Carb-Loading: 2-3 Tage vor (8-10g/kg)
- ✅ Race-Fueling: Gels alle 45 Min + Wasser
- ✅ Elektrolyte: 500-700mg Na+/Stunde (Schweiß)
- ✅ Testen: Im Training, nicht Race Day
- ✅ Nachher: Recovery (Protein + Carbs 30 Min)

**Merke dir:** Ernährung gewinnt Marathons! Dein Magen ist dein bester Freund – füttere ihn richtig.
    `,
    en: `
### Nutrition for Long Distances: Your Race Fuel! ⛽

For distances over 90 min (half marathon+), nutrition is crucial – it prevents the wall and maximizes performance. This module deepens Phase 2 nutrition for marathon/ultra: Carb-loading, gels, electrolytes!

---
### Carb-Loading: Fill the Energy Stores

**What is Carb-Loading?**
- 2-3 days before race: Increase carbs (8-10g/kg body weight)
- Reduce training (light runs)
- Why? Maximize glycogen stores (about 2000-3000 kcal energy)

**How to Do It?**
- Day -3: Normal carbs + light run
- Day -2: High carbs (pasta, rice, bread), no fat
- Day -1: Even higher carbs, rest day
- Race Day: Light breakfast (3-4 hours before)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Example for 70kg Runner</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    560-700g carbs/day (e.g., 200g pasta = 150g carbs). Don't overdo – too much = bloating!
  </p>
</div>

**Common Mistakes:**
- ❌ Start too early → Weight gain
- ❌ Too much fat/protein → Digestion issues
- ✅ Tip: Test in training (before long run)

**Practical Exercise:** Test carb-loading before a long run (>20 km). Eat high carbs 3 days, track energy. Compare to normal week.

---
### Race-Day Nutrition: Fueling During the Race

**Breakfast (3-4 Hours Before):**
- Easy to digest: Toast with banana, oats with honey (carbs + little protein)
- 1-2g carbs/kg (70kg = 70-140g)
- Caffeine: Black coffee (optional, testable)

**During the Race (Every 45-60 Min):**
- **Gels:** 30-60g carbs/gel (km 7,14,21,28,35 for marathon)
- **Liquid:** Always with water (gels without = stomach issues)
- **Timing:** At km 5,10,15,20,25,30,35 (depending on distance)

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Time</th>
      <th className="border p-3 text-left">What to Eat?</th>
      <th className="border p-3 text-left">Carbs (g)</th>
      <th className="border p-3 text-left">Liquid</th>
      <th className="border p-3 text-left">Tip</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>3-4 Hours Before</strong></td>
      <td className="border p-3">Oats + banana</td>
      <td className="border p-3">60-100g</td>
      <td className="border p-3">500ml water</td>
      <td className="border p-3">Easy to digest</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Start + 45 Min</strong></td>
      <td className="border p-3">Gel 1</td>
      <td className="border p-3">25-30g</td>
      <td className="border p-3">150ml water</td>
      <td className="border p-3">km 7-8</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Every 45 Min</strong></td>
      <td className="border p-3">Gels 2-6</td>
      <td className="border p-3">25-30g per gel</td>
      <td className="border p-3">150ml + electrolytes</td>
      <td className="border p-3">Up to km 35</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Post-Race</strong></td>
      <td className="border p-3">Shake + banana</td>
      <td className="border p-3">40g carbs + 20g protein</td>
      <td className="border p-3">500ml recovery drink</td>
      <td className="border p-3">30 min window</td>
    </tr>
  </tbody>
</table>

**Choose & Test Gels:**
- Types: Caffeine gels (kick), caffeine-free (early)
- Brands: Maurten, GU, SiS (stomach friendly)
- Why? 200-300 kcal/hour needed >90 min

**Practical Exercise:** Test different gels in training (long run >2 hours). Take with water, note: Boost? Stomach? Find your favorites.

---
### Electrolytes: Salt & Minerals for Endurance

**Why Important?**
- Sweat loss: Sodium, potassium, magnesium
- Prevents cramps, dehydration
- In heat/long: Essential!

**Sources:**
- Sports drinks (Gatorade, Powerade)
- Electrolyte tabs (SaltStick, Nuun)
- Natural: Banana (potassium), salt (sodium)

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Dosage</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    500-700mg sodium/hour (heavy sweaters). Test in training – too much = nausea, too little = cramps.
  </p>
</div>

**Integration:**
- Every 20 min: 100-200ml drink with electrolytes
- For ultra: Supplement solid food (e.g., sandwiches)

**Practical Exercise:** On long run (>2 hours): Test electrolyte drink vs. water. Weigh before/after: Fluid loss? Cramps?

---
### Common Mistakes & Warnings

**Mistakes:**
- ❌ No testing → Race crash (stomach issues)
- ❌ Too few carbs → Wall
- ❌ Over-loading → Bloating

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warning</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Individual tolerance! Ask doctor for allergies/intolerances. Test EVERYTHING in training – race day isn't test day.
  </p>
</div>

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Practical Exercise</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Plan race nutrition for marathon: Carb-loading 3 days, gel timing, electrolytes. Test on 30-km long run.
  </p>
</div>

---
### Summary

**Nutrition for Long Distances:**
- ✅ Carb-loading: 2-3 days before (8-10g/kg)
- ✅ Race-fueling: Gels every 45 min + water
- ✅ Electrolytes: 500-700mg Na+/hour (sweat)
- ✅ Test: In training, not race day
- ✅ Post: Recovery (protein + carbs 30 min)

**Remember:** Nutrition wins marathons! Your stomach is your best friend – feed it right.
    `
  },

  task: {
    de: {
      title: 'Long-Distance-Fueling testen',
      description: 'Teste Ernährung für lange Distanzen in einem Training.',
      checklist: [
        { text: 'Carb-Loading: 3 Tage vor Long Run (8g/kg Carbs)' },
        { text: 'Race-Frühstück: 3 Std. vor (z.B. Hafer + Banane)' },
        { text: 'Während: Gels alle 45 Min + Wasser (3-4 Gels)' },
        { text: 'Elektrolyte: Getränk mit Na+ testen' },
        { text: 'Nachher: Recovery-Shake (30 Min Window)' },
        { text: 'Analysieren: Energie? Magen? Anpassen für Race' }
      ]
    },
    en: {
      title: 'Test Long-Distance Fueling',
      description: 'Test nutrition for long distances in training.',
      checklist: [
        { text: 'Carb-loading: 3 days before long run (8g/kg carbs)' },
        { text: 'Race breakfast: 3 hours before (e.g., oats + banana)' },
        { text: 'During: Gels every 45 min + water (3-4 gels)' },
        { text: 'Electrolytes: Test drink with Na+' },
        { text: 'Post: Recovery shake (30 min window)' },
        { text: 'Analyze: Energy? Stomach? Adjust for race' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Carb-Loading Dosierung?',
        back: '8-10g Carbs/kg Körpergewicht, 2-3 Tage vor. Training reduzieren. Testen im Training!'
      },
      {
        front: 'Gel-Timing im Marathon?',
        back: 'Alle 45 Min (km 7,14,21,28,35). Immer mit 150ml Wasser. Koffein-Gels für Endspurt.'
      },
      {
        front: 'Elektrolyte wann?',
        back: 'Bei Schweiß/Langstrecke: 500-700mg Na+/Stunde. Sportgetränke oder Tabs. Krämpfe verhindern.'
      }
    ],
    en: [
      {
        front: 'Carb-loading dosage?',
        back: '8-10g carbs/kg body weight, 2-3 days before. Reduce training. Test in training!'
      },
      {
        front: 'Gel timing in marathon?',
        back: 'Every 45 min (km 7,14,21,28,35). Always with 150ml water. Caffeine gels for kick.'
      },
      {
        front: 'Electrolytes when?',
        back: 'For sweat/long: 500-700mg Na+/hour. Sports drinks or tabs. Prevent cramps.'
      }
    ]
  }
};
