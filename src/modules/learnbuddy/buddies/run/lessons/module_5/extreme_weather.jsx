import React from 'react';

export const extremeWeatherLesson = {
  id: 'r5_m4_extreme_weather',
  title: { 
    en: '5.4 Running in Extreme Weather', 
    de: '5.4 Laufen bei extremem Wetter' 
  },
  description: { 
    en: 'Master running in heat, cold, rain, and challenging weather conditions with proper preparation and adaptation.', 
    de: 'Meistere das Laufen bei Hitze, Kälte, Regen und herausfordernden Wetterbedingungen mit richtiger Vorbereitung und Anpassung.' 
  },
  category: 'advanced',
  
  content: {
    de: `
### Laufen bei extremem Wetter: Für jede Bedingung gewappnet! 🌡️

Wetter stoppt keine Läufer! Ob Hitze, Kälte, Regen oder Wind - mit der richtigen Vorbereitung kannst du bei jedem Wetter sicher und effektiv trainieren. Dieser Modul zeigt Anpassungen, Ausrüstung und Sicherheit für extreme Bedingungen.

---
### Hitze-Training: Wenn die Sonne brennt ☀️

**Die Herausforderungen:**
- Höhere Herzfrequenz bei gleichem Tempo
- Schnellere Dehydration
- Überhitzungsgefahr (Hitzschlag!)
- Reduzierte Performance (normal!)

**Physiologische Anpassungen:**
- Körper braucht 10-14 Tage zur Akklimatisierung
- Mehr Schwitzen (Kühlmechanismus)
- Bessere Thermoregulation nach Anpassung
- Sei geduldig mit dir selbst!

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warnsignale Hitzschlag</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Bei diesen Symptomen SOFORT aufhören und Hilfe suchen:
  </p>
  <ul className="list-disc list-inside space-y-2 text-sm text-red-700 dark:text-red-300">
    <li><strong>Schwindel, Übelkeit, Kopfschmerzen</strong></li>
    <li><strong>Verwirrtheit, Desorientierung</strong></li>
    <li><strong>Kein Schwitzen mehr trotz Hitze</strong></li>
    <li><strong>Sehr hohe Herzfrequenz</strong></li>
    <li><strong>Krämpfe in mehreren Muskelgruppen</strong></li>
  </ul>
</div>

**Strategien für Hitze-Training:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Strategie</th>
      <th className="border p-3 text-left">Details</th>
      <th className="border p-3 text-left">Warum?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Tageszeit</strong></td>
      <td className="border p-3">Früh morgens (5-7 Uhr) oder spät abends (20-22 Uhr)</td>
      <td className="border p-3">Niedrigere Temperaturen, weniger UV</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Tempo</strong></td>
      <td className="border p-3">20-30% langsamer als normal</td>
      <td className="border p-3">Körper arbeitet härter bei Hitze</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Hydration</strong></td>
      <td className="border p-3">Alle 15-20 Min trinken (150-200ml)</td>
      <td className="border p-3">Schweißverlust ausgleichen</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Kleidung</strong></td>
      <td className="border p-3">Helle, lockere, atmungsaktive Kleidung</td>
      <td className="border p-3">Reflektiert Sonne, lässt Luft zirkulieren</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Sonnenschutz</strong></td>
      <td className="border p-3">LSF 30+, Kappe, Sonnenbrille</td>
      <td className="border p-3">UV-Schutz, Hautkrebs-Prävention</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Route</strong></td>
      <td className="border p-3">Schattige Wege, Nähe zu Wasserstellen</td>
      <td className="border p-3">Kühler, Notfall-Hydration möglich</td>
    </tr>
  </tbody>
</table>

**Hydration-Strategie bei Hitze:**
- **Vor dem Lauf:** 500ml Wasser 1-2 Std. vorher
- **Während (>30 Min):** 150-200ml alle 15-20 Min
- **Nach dem Lauf:** 1,5x Gewichtsverlust in ml trinken
- **Elektrolyte:** Bei Läufen >60 Min oder starkem Schwitzen

**Kühlungstechniken:**
- Handgelenke unter kaltes Wasser halten (vor dem Lauf)
- Nasses Tuch im Nacken
- Kappe mit Wasser befeuchten
- Eiswürfel in Trinkflasche

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Praktische Übung: Hitze-Akklimatisierung</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    <strong>Woche 1:</strong> 20 Min bei Hitze (>25°C), sehr langsam, viel trinken
  </p>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    <strong>Woche 2:</strong> 30 Min bei Hitze, langsames Tempo
  </p>
  <p className="text-sm text-green-700 dark:text-green-300">
    <strong>Ab Woche 3:</strong> Normale Distanzen, aber 20% langsamer als bei kühlem Wetter
  </p>
</div>

---
### Kälte-Training: Wenn es friert ❄️

**Die Herausforderungen:**
- Steife Muskeln (längeres Aufwärmen nötig)
- Rutschgefahr (Eis, Schnee)
- Erfrierungsgefahr (Finger, Zehen, Nase, Ohren)
- Atmung kann brennen

**Vorteile von Kälte:**
- Keine Überhitzung
- Bessere Performance möglich (ideal: 5-10°C)
- Härtet mental ab

**Das Schichtenprinzip (Zwiebelprinzip):**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Temperatur</th>
      <th className="border p-3 text-left">Base Layer</th>
      <th className="border p-3 text-left">Mid Layer</th>
      <th className="border p-3 text-left">Outer Layer</th>
      <th className="border p-3 text-left">Extras</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>10-15°C</strong></td>
      <td className="border p-3">Langarm-Shirt</td>
      <td className="border p-3">-</td>
      <td className="border p-3">-</td>
      <td className="border p-3">Lange Hose</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>5-10°C</strong></td>
      <td className="border p-3">Langarm-Shirt</td>
      <td className="border p-3">Leichte Weste</td>
      <td className="border p-3">-</td>
      <td className="border p-3">Lange Hose, Handschuhe</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>0-5°C</strong></td>
      <td className="border p-3">Thermo-Shirt</td>
      <td className="border p-3">Langarm-Shirt</td>
      <td className="border p-3">Laufjacke</td>
      <td className="border p-3">Thermo-Tights, Handschuhe, Mütze</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>-5-0°C</strong></td>
      <td className="border p-3">Thermo-Unterwäsche</td>
      <td className="border p-3">Fleece/Thermo-Shirt</td>
      <td className="border p-3">Winddichte Jacke</td>
      <td className="border p-3">Thermo-Tights, dicke Handschuhe, Mütze, Buff</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>&lt;-5°C</strong></td>
      <td className="border p-3">Merino-Unterwäsche</td>
      <td className="border p-3">Fleece + Thermo</td>
      <td className="border p-3">Winterjacke</td>
      <td className="border p-3">2 Schichten Hose, Fäustlinge, Sturmhaube</td>
    </tr>
  </tbody>
</table>

**Die Faustregel:**
- Kleide dich so, als wäre es 10°C wärmer
- Nach 10 Min Laufen sollte es angenehm sein (nicht zu warm!)
- Lieber zu kühl starten als zu warm (du wärmst dich auf)

**Kritische Körperteile schützen:**
- **Hände:** Handschuhe (bei <-5°C: Fäustlinge)
- **Kopf:** 40% Wärmeverlust über Kopf! Mütze/Stirnband
- **Ohren:** Mütze oder Stirnband
- **Hals:** Buff oder Schal
- **Gesicht:** Bei extremer Kälte: Sturmhaube oder Buff über Nase
- **Füße:** Warme Socken (Merino), evtl. Überschuhe

**Atmung bei Kälte:**
- Durch Nase atmen (wärmt Luft vor)
- Bei Anstrengung: Buff vor Mund (filtert kalte Luft)
- Brennen in Lunge ist normal, aber nicht übertreiben
- Bei <-15°C: Nur kurze, leichte Läufe

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Aufwärmen bei Kälte</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
    Bei Kälte ist Aufwärmen noch wichtiger:
  </p>
  <ul className="list-disc list-inside space-y-2 text-sm text-blue-700 dark:text-blue-300">
    <li><strong>Drinnen:</strong> 5-10 Min dynamisches Dehnen, Jumping Jacks</li>
    <li><strong>Draußen:</strong> Erste 10-15 Min sehr langsam laufen</li>
    <li><strong>Muskeln:</strong> Brauchen länger, um warm zu werden</li>
  </ul>
</div>

---
### Regen & Nässe: Wenn es schüttet 🌧️

**Die Herausforderungen:**
- Rutschgefahr (nasse Wege, Laub)
- Nasse Kleidung (schwer, reibt)
- Sichtbarkeit reduziert
- Motivation (mental!)

**Ausrüstung für Regen:**
- **Laufjacke:** Wasserdicht oder wasserabweisend (atmungsaktiv!)
- **Kappe:** Hält Regen aus Augen
- **Funktionskleidung:** KEINE Baumwolle! (saugt sich voll)
- **Reflektoren:** Sichtbarkeit bei Regen oft schlecht
- **Wasserdichte Tasche:** Für Handy/Schlüssel

**Technik-Anpassungen:**
- **Kürzere Schritte:** Bessere Balance auf nassem Untergrund
- **Vorsichtig:** Bei Laub, Pfützen, Markierungen (rutschig!)
- **Blick voraus:** Hindernisse früh erkennen

**Nach dem Lauf:**
- Sofort aus nasser Kleidung (Erkältungsgefahr!)
- Warme Dusche
- Schuhe ausstopfen (Zeitungspapier), trocknen lassen
- Kleidung waschen und trocknen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Praktische Übung: Regen-Lauf</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Beim nächsten Regen: Gehe bewusst laufen (30 Min). Teste deine Ausrüstung:
  </p>
  <ul className="list-disc list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li>Hält die Jacke dich trocken?</li>
    <li>Scheuert nasse Kleidung?</li>
    <li>Sind die Schuhe rutschig?</li>
    <li>Wie ist deine mentale Einstellung?</li>
  </ul>
</div>

---
### Wind: Der unsichtbare Gegner 💨

**Die Herausforderungen:**
- Gegenwind: Viel anstrengender
- Rückenwind: Zu schnell unterwegs (Täuschung!)
- Seitenwind: Gleichgewicht schwieriger
- Windchill: Gefühlte Temperatur viel kälter

**Strategien bei Wind:**
- **Route planen:** Hinweg gegen Wind, Rückweg mit Wind (leichter am Ende)
- **Tempo anpassen:** Bei Gegenwind langsamer, nicht kämpfen
- **Körperhaltung:** Leicht nach vorne bei Gegenwind
- **Windschutz:** Laufe hinter Gebäuden, Hecken, anderen Läufern
- **Kleidung:** Winddichte Jacke bei kaltem Wind (Windchill!)

**Windchill-Tabelle (gefühlte Temperatur):**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Temperatur</th>
      <th className="border p-3 text-left">Wind 20 km/h</th>
      <th className="border p-3 text-left">Wind 40 km/h</th>
      <th className="border p-3 text-left">Wind 60 km/h</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3">5°C</td>
      <td className="border p-3">1°C</td>
      <td className="border p-3">-2°C</td>
      <td className="border p-3">-4°C</td>
    </tr>
    <tr>
      <td className="border p-3">0°C</td>
      <td className="border p-3">-5°C</td>
      <td className="border p-3">-8°C</td>
      <td className="border p-3">-10°C</td>
    </tr>
    <tr>
      <td className="border p-3">-5°C</td>
      <td className="border p-3">-11°C</td>
      <td className="border p-3">-15°C</td>
      <td className="border p-3">-17°C</td>
    </tr>
    <tr>
      <td className="border p-3">-10°C</td>
      <td className="border p-3">-17°C</td>
      <td className="border p-3">-21°C</td>
      <td className="border p-3">-24°C</td>
    </tr>
  </tbody>
</table>

---
### Sicherheit bei extremem Wetter

**Allgemeine Sicherheitsregeln:**

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Wann NICHT laufen?</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li><strong>Gewitter:</strong> Blitzschlaggefahr! Drinnen bleiben</li>
    <li><strong>Eisregen:</strong> Extrem rutschig, Verletzungsgefahr</li>
    <li><strong>Hitze >35°C:</strong> Hitzschlaggefahr zu hoch</li>
    <li><strong>Windchill <-20°C:</strong> Erfrierungsgefahr</li>
    <li><strong>Starker Sturm:</strong> Herabfallende Äste, Gegenstände</li>
    <li><strong>Schlechte Sicht:</strong> Nebel, Dunkelheit + Regen</li>
  </ul>
</div>

**Sichtbarkeit:**
- Reflektoren an Kleidung, Schuhen
- Stirnlampe (vorne weiß, hinten rot)
- Reflektorweste bei schlechter Sicht
- Helle Kleidung

**Notfall-Vorbereitung:**
- Handy mitnehmen (wasserdicht verpackt)
- Jemandem Bescheid geben (Route, Dauer)
- Notfall-Geld für Taxi/Bus
- Kenntnis der Route (nicht verlaufen!)

---
### Mentale Einstellung

**"Es gibt kein schlechtes Wetter, nur schlechte Kleidung!"**

**Mentale Strategien:**
- **Positive Einstellung:** "Ich bin härter als das Wetter!"
- **Stolz:** Wenige laufen bei Extremwetter - du schon!
- **Anpassung:** Akzeptiere langsameres Tempo
- **Flexibilität:** Notfalls abbrechen ist okay (Sicherheit geht vor)
- **Belohnung:** Nach hartem Wetter-Lauf: Warme Dusche, gutes Essen

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">📋 Wetter-Checkliste</h4>
  <div className="space-y-3 text-sm text-purple-700 dark:text-purple-300">
    <p><strong>Vor dem Lauf:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Wetter checken (Temperatur, Wind, Regen, Gewitter?)</li>
      <li>Passende Kleidung wählen</li>
      <li>Route anpassen (Schatten bei Hitze, Windschutz bei Wind)</li>
      <li>Hydration vorbereiten (bei Hitze)</li>
    </ul>
    <p><strong>Während des Laufs:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Tempo anpassen (langsamer bei Extremen)</li>
      <li>Auf Körper hören (Warnsignale beachten!)</li>
      <li>Sicherheit priorisieren (bei Gefahr abbrechen)</li>
    </ul>
    <p><strong>Nach dem Lauf:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Schnell aus nasser/kalter Kleidung</li>
      <li>Hydration/Ernährung</li>
      <li>Ausrüstung pflegen (Schuhe trocknen, etc.)</li>
    </ul>
  </div>
</div>

---
### Zusammenfassung

**Key Takeaways:**
- ☀️ **Hitze:** Früh/spät laufen, viel trinken, 20-30% langsamer, Sonnenschutz
- ❄️ **Kälte:** Schichtenprinzip, kritische Körperteile schützen, länger aufwärmen
- 🌧️ **Regen:** Funktionskleidung (keine Baumwolle!), Sichtbarkeit, vorsichtig laufen
- 💨 **Wind:** Route planen (gegen Wind hin), Tempo anpassen, Windchill beachten
- ⚠️ **Sicherheit:** Bei Gewitter, Eisregen, extremer Hitze/Kälte nicht laufen
- 🧠 **Mental:** Positive Einstellung, Anpassung akzeptieren, Stolz auf Härte

**Nächste Schritte:**
1. Teste deine Ausrüstung bei verschiedenen Wetterbedingungen
2. Lerne deine persönlichen Grenzen kennen (Hitze/Kälte-Toleranz)
3. Baue eine Wetter-Ausrüstung auf (Jacke, Handschuhe, Kappe, etc.)
4. Entwickle mentale Härte - Wetter ist nur eine Herausforderung!

Mit der richtigen Vorbereitung kannst du das ganze Jahr über laufen - egal was der Himmel bringt! 🌈
    `,
    en: `
### Running in Extreme Weather: Prepared for Every Condition! 🌡️

Weather doesn't stop runners! Whether heat, cold, rain, or wind - with proper preparation you can train safely and effectively in any weather. This module covers adaptations, gear, and safety for extreme conditions.

---
### Heat Training: When the Sun Burns ☀️

**The Challenges:**
- Higher heart rate at same pace
- Faster dehydration
- Overheating risk (heat stroke!)
- Reduced performance (normal!)

**Physiological Adaptations:**
- Body needs 10-14 days to acclimatize
- More sweating (cooling mechanism)
- Better thermoregulation after adaptation
- Be patient with yourself!

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Heat Stroke Warning Signs</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    STOP immediately and seek help with these symptoms:
  </p>
  <ul className="list-disc list-inside space-y-2 text-sm text-red-700 dark:text-red-300">
    <li><strong>Dizziness, nausea, headaches</strong></li>
    <li><strong>Confusion, disorientation</strong></li>
    <li><strong>No sweating despite heat</strong></li>
    <li><strong>Very high heart rate</strong></li>
    <li><strong>Cramps in multiple muscle groups</strong></li>
  </ul>
</div>

**Strategies for Heat Training:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Strategy</th>
      <th className="border p-3 text-left">Details</th>
      <th className="border p-3 text-left">Why?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Time of Day</strong></td>
      <td className="border p-3">Early morning (5-7 AM) or late evening (8-10 PM)</td>
      <td className="border p-3">Lower temperatures, less UV</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Pace</strong></td>
      <td className="border p-3">20-30% slower than normal</td>
      <td className="border p-3">Body works harder in heat</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Hydration</strong></td>
      <td className="border p-3">Every 15-20 min drink (150-200ml)</td>
      <td className="border p-3">Compensate sweat loss</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Clothing</strong></td>
      <td className="border p-3">Light, loose, breathable clothing</td>
      <td className="border p-3">Reflects sun, allows air circulation</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Sun Protection</strong></td>
      <td className="border p-3">SPF 30+, cap, sunglasses</td>
      <td className="border p-3">UV protection, skin cancer prevention</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Route</strong></td>
      <td className="border p-3">Shaded paths, near water sources</td>
      <td className="border p-3">Cooler, emergency hydration possible</td>
    </tr>
  </tbody>
</table>

**Hydration Strategy in Heat:**
- **Before run:** 500ml water 1-2 hrs before
- **During (>30 min):** 150-200ml every 15-20 min
- **After run:** Drink 1.5x weight loss in ml
- **Electrolytes:** For runs >60 min or heavy sweating

**Cooling Techniques:**
- Hold wrists under cold water (before run)
- Wet towel on neck
- Moisten cap with water
- Ice cubes in water bottle

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Practical Exercise: Heat Acclimatization</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    <strong>Week 1:</strong> 20 min in heat (>25°C), very slow, drink plenty
  </p>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    <strong>Week 2:</strong> 30 min in heat, slow pace
  </p>
  <p className="text-sm text-green-700 dark:text-green-300">
    <strong>From Week 3:</strong> Normal distances, but 20% slower than in cool weather
  </p>
</div>

---
### Cold Training: When It Freezes ❄️

**The Challenges:**
- Stiff muscles (longer warm-up needed)
- Slip hazard (ice, snow)
- Frostbite risk (fingers, toes, nose, ears)
- Breathing can burn

**Benefits of Cold:**
- No overheating
- Better performance possible (ideal: 5-10°C)
- Mental toughness

**The Layering System:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Temperature</th>
      <th className="border p-3 text-left">Base Layer</th>
      <th className="border p-3 text-left">Mid Layer</th>
      <th className="border p-3 text-left">Outer Layer</th>
      <th className="border p-3 text-left">Extras</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>10-15°C</strong></td>
      <td className="border p-3">Long-sleeve shirt</td>
      <td className="border p-3">-</td>
      <td className="border p-3">-</td>
      <td className="border p-3">Long pants</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>5-10°C</strong></td>
      <td className="border p-3">Long-sleeve shirt</td>
      <td className="border p-3">Light vest</td>
      <td className="border p-3">-</td>
      <td className="border p-3">Long pants, gloves</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>0-5°C</strong></td>
      <td className="border p-3">Thermal shirt</td>
      <td className="border p-3">Long-sleeve shirt</td>
      <td className="border p-3">Running jacket</td>
      <td className="border p-3">Thermal tights, gloves, hat</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>-5-0°C</strong></td>
      <td className="border p-3">Thermal underwear</td>
      <td className="border p-3">Fleece/thermal shirt</td>
      <td className="border p-3">Windproof jacket</td>
      <td className="border p-3">Thermal tights, thick gloves, hat, buff</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>&lt;-5°C</strong></td>
      <td className="border p-3">Merino underwear</td>
      <td className="border p-3">Fleece + thermal</td>
      <td className="border p-3">Winter jacket</td>
      <td className="border p-3">2 layers pants, mittens, balaclava</td>
    </tr>
  </tbody>
</table>

**The Rule of Thumb:**
- Dress as if it's 10°C warmer
- After 10 min running it should feel comfortable (not too warm!)
- Better start too cool than too warm (you'll warm up)

**Protect Critical Body Parts:**
- **Hands:** Gloves (at <-5°C: mittens)
- **Head:** 40% heat loss through head! Hat/headband
- **Ears:** Hat or headband
- **Neck:** Buff or scarf
- **Face:** In extreme cold: balaclava or buff over nose
- **Feet:** Warm socks (merino), possibly overshoes

**Breathing in Cold:**
- Breathe through nose (warms air)
- During exertion: buff over mouth (filters cold air)
- Burning in lungs is normal, but don't overdo it
- At <-15°C: Only short, easy runs

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Warming Up in Cold</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
    Warming up is even more important in cold:
  </p>
  <ul className="list-disc list-inside space-y-2 text-sm text-blue-700 dark:text-blue-300">
    <li><strong>Indoors:</strong> 5-10 min dynamic stretching, jumping jacks</li>
    <li><strong>Outdoors:</strong> First 10-15 min run very slowly</li>
    <li><strong>Muscles:</strong> Take longer to warm up</li>
  </ul>
</div>

---
### Rain & Wetness: When It Pours 🌧️

**The Challenges:**
- Slip hazard (wet paths, leaves)
- Wet clothing (heavy, chafes)
- Reduced visibility
- Motivation (mental!)

**Gear for Rain:**
- **Running jacket:** Waterproof or water-resistant (breathable!)
- **Cap:** Keeps rain out of eyes
- **Technical clothing:** NO cotton! (absorbs water)
- **Reflectors:** Visibility often poor in rain
- **Waterproof bag:** For phone/keys

**Technique Adjustments:**
- **Shorter steps:** Better balance on wet ground
- **Careful:** With leaves, puddles, markings (slippery!)
- **Look ahead:** Spot obstacles early

**After the Run:**
- Get out of wet clothes immediately (cold risk!)
- Warm shower
- Stuff shoes (newspaper), let dry
- Wash and dry clothing

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Practical Exercise: Rain Run</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Next rain: Deliberately go running (30 min). Test your gear:
  </p>
  <ul className="list-disc list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li>Does the jacket keep you dry?</li>
    <li>Does wet clothing chafe?</li>
    <li>Are the shoes slippery?</li>
    <li>How's your mental attitude?</li>
  </ul>
</div>

---
### Wind: The Invisible Enemy 💨

**The Challenges:**
- Headwind: Much more exhausting
- Tailwind: Too fast (deceptive!)
- Crosswind: Balance more difficult
- Windchill: Feels much colder

**Strategies in Wind:**
- **Plan route:** Outbound against wind, return with wind (easier at end)
- **Adjust pace:** Slower in headwind, don't fight it
- **Posture:** Slight forward lean in headwind
- **Windbreak:** Run behind buildings, hedges, other runners
- **Clothing:** Windproof jacket in cold wind (windchill!)

**Windchill Table (feels-like temperature):**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Temperature</th>
      <th className="border p-3 text-left">Wind 20 km/h</th>
      <th className="border p-3 text-left">Wind 40 km/h</th>
      <th className="border p-3 text-left">Wind 60 km/h</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3">5°C</td>
      <td className="border p-3">1°C</td>
      <td className="border p-3">-2°C</td>
      <td className="border p-3">-4°C</td>
    </tr>
    <tr>
      <td className="border p-3">0°C</td>
      <td className="border p-3">-5°C</td>
      <td className="border p-3">-8°C</td>
      <td className="border p-3">-10°C</td>
    </tr>
    <tr>
      <td className="border p-3">-5°C</td>
      <td className="border p-3">-11°C</td>
      <td className="border p-3">-15°C</td>
      <td className="border p-3">-17°C</td>
    </tr>
    <tr>
      <td className="border p-3">-10°C</td>
      <td className="border p-3">-17°C</td>
      <td className="border p-3">-21°C</td>
      <td className="border p-3">-24°C</td>
    </tr>
  </tbody>
</table>

---
### Safety in Extreme Weather

**General Safety Rules:**

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ When NOT to Run?</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li><strong>Thunderstorms:</strong> Lightning risk! Stay indoors</li>
    <li><strong>Freezing rain:</strong> Extremely slippery, injury risk</li>
    <li><strong>Heat >35°C:</strong> Heat stroke risk too high</li>
    <li><strong>Windchill <-20°C:</strong> Frostbite risk</li>
    <li><strong>Strong storms:</strong> Falling branches, objects</li>
    <li><strong>Poor visibility:</strong> Fog, darkness + rain</li>
  </ul>
</div>

**Visibility:**
- Reflectors on clothing, shoes
- Headlamp (white front, red back)
- Reflective vest in poor visibility
- Bright clothing

**Emergency Preparation:**
- Take phone (waterproof packaging)
- Tell someone (route, duration)
- Emergency money for taxi/bus
- Know the route (don't get lost!)

---
### Mental Attitude

**"There's no bad weather, only bad clothing!"**

**Mental Strategies:**
- **Positive attitude:** "I'm tougher than the weather!"
- **Pride:** Few run in extreme weather - you do!
- **Adaptation:** Accept slower pace
- **Flexibility:** Aborting if necessary is okay (safety first)
- **Reward:** After tough weather run: warm shower, good food

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">📋 Weather Checklist</h4>
  <div className="space-y-3 text-sm text-purple-700 dark:text-purple-300">
    <p><strong>Before the run:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Check weather (temperature, wind, rain, thunderstorms?)</li>
      <li>Choose appropriate clothing</li>
      <li>Adjust route (shade in heat, windbreak in wind)</li>
      <li>Prepare hydration (in heat)</li>
    </ul>
    <p><strong>During the run:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Adjust pace (slower in extremes)</li>
      <li>Listen to body (heed warning signs!)</li>
      <li>Prioritize safety (abort if dangerous)</li>
    </ul>
    <p><strong>After the run:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Quickly out of wet/cold clothing</li>
      <li>Hydration/nutrition</li>
      <li>Care for gear (dry shoes, etc.)</li>
    </ul>
  </div>
</div>

---
### Summary

**Key Takeaways:**
- ☀️ **Heat:** Run early/late, drink plenty, 20-30% slower, sun protection
- ❄️ **Cold:** Layering system, protect critical body parts, longer warm-up
- 🌧️ **Rain:** Technical clothing (no cotton!), visibility, run carefully
- 💨 **Wind:** Plan route (against wind outbound), adjust pace, mind windchill
- ⚠️ **Safety:** Don't run in thunderstorms, freezing rain, extreme heat/cold
- 🧠 **Mental:** Positive attitude, accept adaptation, pride in toughness

**Next Steps:**
1. Test your gear in different weather conditions
2. Learn your personal limits (heat/cold tolerance)
3. Build weather gear collection (jacket, gloves, cap, etc.)
4. Develop mental toughness - weather is just a challenge!

With proper preparation you can run year-round - no matter what the sky brings! 🌈
    `
  }
};


