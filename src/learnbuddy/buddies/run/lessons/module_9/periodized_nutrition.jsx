import React from 'react';

export const periodizedNutritionLesson = {
  id: 'r9_m5_periodized_nutrition',
  title: {
    en: '9.5 Periodized Nutrition',
    de: '9.5 Periodisierte Ernährung'
  },
  description: {
    en: 'Master carb loading, race day nutrition strategies, fat adaptation for endurance, and nutrition timing for peak performance.',
    de: 'Meistere Kohlenhydrat-Loading, Renntag-Ernährung, Fettanpassung für Ausdauer und optimales Nährstoff-Timing.'
  },
  category: 'advancedPerformance',

  content: {
    de: `
### Periodisierte Ernährung: Essen für die Leistung 🍽️

Periodisierte Ernährung bedeutet, deine Nährstoffzufuhr an dein Training und deine Wettkampfziele anzupassen. Nicht jeden Tag gleich essen – sondern strategisch Kohlenhydrate, Proteine und Fette timen, um maximale Leistung zu erzielen.

---
### Carb Loading: Kohlenhydrat-Aufladung

**Was ist Carb Loading?**
- Maximierung der Glykogenspeicher vor einem Wettkampf
- Glykogen = gespeicherte Kohlenhydrate in Muskeln und Leber
- Ermöglicht länger laufen ohne "die Wand" zu treffen

**Klassisches Protokoll (3 Tage):**
- Tag -3 bis -1: Reduziere Training, erhöhe Kohlenhydrate auf 8-10 g/kg Körpergewicht
- Nicht "Binge-Eating" – kontrolliert und verteilt über den Tag
- Beispiel (70 kg): 560-700 g Kohlenhydrate pro Tag

**1-Tage-Protokoll (für Halbmarathon):**
- Tag -1: 10-12 g Kohlenhydrate/kg, leichtes Training oder Ruhe
- Letzte große Mahlzeit 12-15 Stunden vor Start

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Carb Loading Fehler</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li><strong>Neue Lebensmittel:</strong> Nichts testen am Renntag – nur Bewährtes!</li>
    <li><strong>Zu viel Ballaststoffe:</strong> Kann zu Magenproblemen führen</li>
    <li><strong>Dehydrierung:</strong> Mit Kohlenhydraten genug trinken</li>
  </ul>
</div>

---
### Renntag-Ernährung

**2-4 Stunden vor dem Start:**
- 1-2 g Kohlenhydrate/kg Körpergewicht
- Leicht verdaulich: Toast, Banane, Haferflocken, Weißer Reis
- Vermeide: Fett, Ballaststoffe, neue Lebensmittel

**30-60 Min vor dem Start:**
- 30-60 g Kohlenhydrate (z.B. Energy Bar, Banane)
- Kann Blutzucker kurzzeitig senken – nicht bei jedem nötig

**Während des Rennens (>90 Min):**
- 30-60 g Kohlenhydrate pro Stunde
- Gels, Sportgetränke, Riegel – im Training getestet!
- Alle 20-30 Min kleine Portionen (nicht auf einmal)

**Nach dem Rennen:**
- 1-1.2 g Kohlenhydrate/kg + 0.25 g Protein/kg innerhalb 30-60 Min
- Fenster für optimale Glykogen-Resynthese

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Renntag-Checkliste</h4>
  <ol className="list-decimal list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li>Frühstück 3-4 Stunden vorher (bewährt, leicht verdaulich)</li>
    <li>Gels/Getränke im Training getestet</li>
    <li>Hydration: Urin hellgelb vor dem Start</li>
    <li>Keine Experimente am Renntag!</li>
  </ol>
</div>

---
### Fettanpassung (Fat Adaptation)

**Das Konzept:**
- Trainiere den Körper, Fett als primären Brennstoff zu nutzen
- Reduziert Abhängigkeit von Glykogen bei langen Läufen
- Relevant für Ultra-Marathon und lange Trail-Läufe

**Wie es funktioniert:**
- Trainiere mit niedrigen Glykogenspeichern (z.B. nüchtern, oder nach niedrig-Kohlenhydrat-Mahlzeit)
- Erhöhe Fettanteil in der Ernährung an Ruhetagen
- Dauer: 2-4 Wochen für spürbare Anpassung

**Wichtig:**
- Nicht für hochintensive Workouts geeignet
- Kombination: Fett-adaptiert für Easy/Long Runs, Carbs für Tempo/Intervall
- "Train Low, Race High" – im Training sparsam mit Carbs, am Renntag geladen

---
### Ernährung nach Trainingsphase

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Phase</th>
      <th className="border p-3 text-left">Kohlenhydrate</th>
      <th className="border p-3 text-left">Fokus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Basis/Ausdauer</strong></td>
      <td className="border p-3">5-7 g/kg</td>
      <td className="border p-3">Moderate Carbs, Fettverbrennung trainieren</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Intensitätsphase</strong></td>
      <td className="border p-3">6-8 g/kg</td>
      <td className="border p-3">Mehr Carbs an Trainings-/Intervalltagen</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Taper</strong></td>
      <td className="border p-3">7-10 g/kg</td>
      <td className="border p-3">Glykogen maximieren, weniger Training</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Renntag</strong></td>
      <td className="border p-3">10-12 g/kg (Tag davor)</td>
      <td className="border p-3">Maximale Speicher + Race-Fueling</td>
    </tr>
  </tbody>
</table>

---
### Zusammenfassung

**Key Takeaways:**
- 📊 **Carb Loading:** 8-10 g/kg über 2-3 Tage vor Marathon
- ⏰ **Renntag:** Bewährte Lebensmittel, 3-4h vorher essen
- 🏃 **Während Rennen:** 30-60 g Carbs/Stunde bei Läufen >90 Min
- 🥑 **Fettanpassung:** Für Ultra-Distanzen, Train Low Race High
- 📅 **Periodisierung:** Ernährung an Trainingsphase anpassen
    `,
    en: `
### Periodized Nutrition: Eating for Performance 🍽️

Periodized nutrition means adapting your nutrient intake to your training and race goals. Don't eat the same every day – instead, strategically time carbohydrates, proteins, and fats to achieve maximum performance.

---
### Carb Loading: Carbohydrate Loading

**What is Carb Loading?**
- Maximizing glycogen stores before a race
- Glycogen = stored carbohydrates in muscles and liver
- Allows running longer without "hitting the wall"

**Classic Protocol (3 Days):**
- Day -3 to -1: Reduce training, increase carbs to 8-10 g/kg body weight
- Not "binge-eating" – controlled and spread throughout the day
- Example (70 kg): 560-700 g carbohydrates per day

**1-Day Protocol (for Half Marathon):**
- Day -1: 10-12 g carbs/kg, light training or rest
- Last large meal 12-15 hours before start

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Carb Loading Mistakes</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li><strong>New foods:</strong> Don't experiment on race day – only tried-and-tested!</li>
    <li><strong>Too much fiber:</strong> Can cause stomach issues</li>
    <li><strong>Dehydration:</strong> Drink enough with carbohydrates</li>
  </ul>
</div>

---
### Race Day Nutrition

**2-4 Hours Before Start:**
- 1-2 g carbohydrates/kg body weight
- Easily digestible: toast, banana, oatmeal, white rice
- Avoid: fat, fiber, new foods

**30-60 Min Before Start:**
- 30-60 g carbohydrates (e.g., energy bar, banana)
- Can temporarily lower blood sugar – not necessary for everyone

**During Race (>90 Min):**
- 30-60 g carbohydrates per hour
- Gels, sports drinks, bars – tested in training!
- Small portions every 20-30 min (not all at once)

**After Race:**
- 1-1.2 g carbs/kg + 0.25 g protein/kg within 30-60 min
- Window for optimal glycogen resynthesis

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Race Day Checklist</h4>
  <ol className="list-decimal list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li>Breakfast 3-4 hours before (proven, easily digestible)</li>
    <li>Gels/drinks tested in training</li>
    <li>Hydration: urine light yellow before start</li>
    <li>No experiments on race day!</li>
  </ol>
</div>

---
### Fat Adaptation

**The Concept:**
- Train the body to use fat as primary fuel
- Reduces glycogen dependency on long runs
- Relevant for ultra-marathon and long trail runs

**How It Works:**
- Train with low glycogen stores (e.g., fasted, or after low-carb meal)
- Increase fat intake on rest days
- Duration: 2-4 weeks for noticeable adaptation

**Important:**
- Not suitable for high-intensity workouts
- Combination: fat-adapted for easy/long runs, carbs for tempo/intervals
- "Train Low, Race High" – spare carbs in training, loaded on race day

---
### Nutrition by Training Phase

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Phase</th>
      <th className="border p-3 text-left">Carbohydrates</th>
      <th className="border p-3 text-left">Focus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Base/Endurance</strong></td>
      <td className="border p-3">5-7 g/kg</td>
      <td className="border p-3">Moderate carbs, train fat burning</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Intensity Phase</strong></td>
      <td className="border p-3">6-8 g/kg</td>
      <td className="border p-3">More carbs on training/interval days</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Taper</strong></td>
      <td className="border p-3">7-10 g/kg</td>
      <td className="border p-3">Maximize glycogen, less training</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Race Day</strong></td>
      <td className="border p-3">10-12 g/kg (day before)</td>
      <td className="border p-3">Maximum stores + race fueling</td>
    </tr>
  </tbody>
</table>

---
### Summary

**Key Takeaways:**
- 📊 **Carb Loading:** 8-10 g/kg over 2-3 days before marathon
- ⏰ **Race Day:** Proven foods, eat 3-4h before
- 🏃 **During Race:** 30-60 g carbs/hour for runs >90 min
- 🥑 **Fat Adaptation:** For ultra distances, Train Low Race High
- 📅 **Periodization:** Adapt nutrition to training phase
    `
  },

  task: {
    de: {
      title: 'Periodisierte Ernährung planen',
      description: 'Erstelle einen Ernährungsplan für dein nächstes Rennen mit Carb Loading und Renntag-Strategie.',
      checklist: [
        { text: 'Carb-Loading-Protokoll für deine Rennlänge wählen (1 oder 3 Tage)' },
        { text: 'Kohlenhydrat-Bedarf für dein Gewicht berechnen (g/kg)' },
        { text: 'Renntag-Frühstück 3-4h vorher planen (bewährte Lebensmittel)' },
        { text: 'Fueling-Strategie für während des Rennens (Gels/Getränke)' },
        { text: 'Alles im Training testen – keine Experimente am Renntag!' }
      ]
    },
    en: {
      title: 'Plan Periodized Nutrition',
      description: 'Create a nutrition plan for your next race with carb loading and race day strategy.',
      checklist: [
        { text: 'Choose carb-loading protocol for your race distance (1 or 3 days)' },
        { text: 'Calculate carbohydrate needs for your weight (g/kg)' },
        { text: 'Plan race day breakfast 3-4h before (proven foods)' },
        { text: 'Fueling strategy during race (gels/drinks)' },
        { text: 'Test everything in training – no experiments on race day!' }
      ]
    }
  },

  notes: {
    de: [
      { front: 'Carb Loading – wie viel?', back: '8-10 g Kohlenhydrate/kg Körpergewicht über 2-3 Tage vor Marathon. Nicht übertreiben – kontrolliert und verteilt essen.' },
      { front: 'Renntag-Frühstück Timing?', back: '2-4 Stunden vor Start: 1-2 g Carbs/kg. Leicht verdaulich. Nur Bewährtes!' },
      { front: 'Fueling während Rennen?', back: '30-60 g Kohlenhydrate pro Stunde bei Läufen >90 Min. Alle 20-30 Min kleine Portionen. Im Training testen!' }
    ],
    en: [
      { front: 'Carb loading – how much?', back: '8-10 g carbohydrates/kg body weight over 2-3 days before marathon. Don\'t overdo it – controlled and spread intake.' },
      { front: 'Race day breakfast timing?', back: '2-4 hours before start: 1-2 g carbs/kg. Easily digestible. Only proven foods!' },
      { front: 'Fueling during race?', back: '30-60 g carbohydrates per hour for runs >90 min. Small portions every 20-30 min. Test in training!' }
    ]
  }
};
