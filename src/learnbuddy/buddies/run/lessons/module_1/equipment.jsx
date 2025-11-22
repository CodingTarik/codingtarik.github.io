import React from 'react';

export const equipmentLesson = {
  id: 'r1_m1_equipment',
  title: { 
    en: '1.2 Equipment & Clothing', 
    de: '1.2 Ausrüstung & Kleidung' 
  },
  description: { 
    en: 'Learn about running shoes, clothing, and accessories - the foundation of comfortable and injury-free running.', 
    de: 'Lerne alles über Laufschuhe, Kleidung und Accessoires - das Fundament für komfortables und verletzungsfreies Laufen.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Ausrüstung & Kleidung: Das Fundament 🏃‍♀️

Bevor du deinen ersten Lauf machst, ist es wichtig, die richtige Ausrüstung zu haben. Die falsche Ausrüstung kann zu Unbehagen, Verletzungen und Frustration führen. Die richtige Ausrüstung macht den Unterschied zwischen "Das macht Spaß!" und "Das tut weh!".

---

### Laufschuhe - Die wichtigste Ausrüstung!

**Warum die richtigen Schuhe entscheidend sind**

Laufschuhe sind dein wichtigstes Stück Ausrüstung. Sie schützen deine Füße, absorbieren Stöße und unterstützen deine natürliche Bewegung. Die falschen Schuhe können zu:

- Läuferknie (ITBS)
- Schienbeinkantensyndrom (Shin Splints)
- Plantarfasziitis
- Blasen und Druckstellen

führen.

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Wichtig: Keine alten Alltagsschuhe!</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Laufschuhe sind speziell für Laufen entwickelt. Turnschuhe, Wanderschuhe oder alte Sportschuhe sind nicht dafür gemacht, die wiederholten Aufprallkräfte beim Laufen zu absorbieren. Investiere in richtige Laufschuhe – es ist eine Investition in deine Gesundheit.
  </p>
</div>

**Laufanalyse: Pronation, Supination, Neutral**

Jeder Fuß ist anders. Eine professionelle Laufanalyse in einem Fachgeschäft kann dir helfen, den richtigen Schuhtyp zu finden:

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Typ</th>
      <th className="border p-3 text-left">Beschreibung</th>
      <th className="border p-3 text-left">Schuhtyp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Neutral</strong></td>
      <td className="border p-3">Fuß rollt natürlich nach innen</td>
      <td className="border p-3">Neutraler Schuh</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Überpronation</strong></td>
      <td className="border p-3">Fuß rollt zu stark nach innen</td>
      <td className="border p-3">Stabilitätsschuh</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Supination</strong></td>
      <td className="border p-3">Fuß rollt nach außen</td>
      <td className="border p-3">Neutral bis leicht gedämpft</td>
    </tr>
  </tbody>
</table>

**Schuhtypen im Überblick**

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="p-4 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Neutral</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      Für Läufer mit natürlichem Laufstil. Keine zusätzliche Stabilisierung.
    </p>
  </div>
  <div className="p-4 bg-green-50 dark:bg-green-900/40 rounded-lg">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Stabilität</h4>
    <p className="text-sm text-green-700 dark:text-green-300">
      Für Überpronierer. Unterstützt die natürliche Bewegung und verhindert übermäßiges Einknicken.
    </p>
  </div>
  <div className="p-4 bg-purple-50 dark:bg-purple-900/40 rounded-lg">
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Dämpfung</h4>
    <p className="text-sm text-purple-700 dark:text-purple-300">
      Extra Polsterung für größere Läufer oder bei Knie-/Fußproblemen.
    </p>
  </div>
  <div className="p-4 bg-amber-50 dark:bg-amber-900/40 rounded-lg">
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Minimalistisch</h4>
    <p className="text-sm text-amber-700 dark:text-amber-300">
      Sehr leicht, wenig Dämpfung. Nur für erfahrene Läufer mit guter Technik!
    </p>
  </div>
</div>

**Passform: Was ist wichtig?**

- **Daumenbreite Platz:** Zwischen deiner längsten Zehe und der Schuhspitze sollte eine Daumenbreite Platz sein
- **Keine Druckstellen:** Der Schuh sollte keine Stellen haben, die drücken
- **Ferse:** Sitzt fest, rutscht aber nicht
- **Breite:** Fuß sollte nicht über die Sohle hinausragen
- **Zehen:** Zehen sollten sich bewegen können

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Tipp: Abends kaufen</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Füße schwellen über den Tag an. Kaufe Laufschuhe am Nachmittag oder Abend, wenn deine Füße ihre größte Größe haben. Nimm deine eigenen Lauf-Socken mit!
  </p>
</div>

**Wann neue Schuhe?**

- **Nach 600-800 km:** Je nach Laufstil und Gewicht
- **Alle 6-12 Monate:** Wenn du regelmäßig läufst
- **Bei Verschleiß:** Sichtbare Abnutzung an der Sohle
- **Bei Beschwerden:** Wenn du mehr Schmerzen bekommst

---

### Kleidung - Funktion vor Mode

**Funktionskleidung vs. Baumwolle**

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">❌ Warum kein Baumwolle?</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
    Baumwolle saugt Schweiß auf, aber gibt ihn nicht ab. Das bedeutet:
  </p>
  <ul className="text-sm space-y-1 text-amber-700 dark:text-amber-300">
    <li>✓ Nass und schwer werdende Kleidung</li>
    <li>✓ Kältegefühl (nasse Kleidung kühlt ab)</li>
    <li>✓ Scheuerstellen und Blasen</li>
    <li>✓ Schwere, unbequeme Kleidung</li>
  </ul>
  <p className="text-sm text-amber-700 dark:text-amber-300 mt-3">
    <strong>Funktionskleidung</strong> transportiert Feuchtigkeit von der Haut weg – du bleibst trocken und komfortabel!
  </p>
</div>

**Schichtenprinzip (Zwiebelprinzip)**

Bei kaltem Wetter ist Schichtung der Schlüssel:

1. **Base Layer (Grundschicht):** Direkt auf der Haut, transportiert Feuchtigkeit weg
2. **Mid Layer (Mittelschicht):** Isoliert und hält warm
3. **Outer Layer (Außenschicht):** Schützt vor Wind und Regen

**Temperaturen & Kleidung - Praktischer Guide**

<div className="space-y-4 my-6">
  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
    <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">🌞 Über 20°C</h4>
    <p className="text-sm text-yellow-700 dark:text-yellow-300">
      Kurze Shorts, Funktions-T-Shirt oder Tanktop. Sonnenbrille, Sonnencreme!
    </p>
  </div>
  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">🌤️ 10-20°C</h4>
    <p className="text-sm text-green-700 dark:text-green-300">
      Lange Laufhose oder Shorts (je nach Gefühl), Funktions-T-Shirt oder Langarmshirt. Optional: leichte Mütze
    </p>
  </div>
  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">❄️ 0-10°C</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      Lange Laufhose, Langarmshirt, Laufjacke. Optional: Handschuhe, Mütze
    </p>
  </div>
  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">🧊 Unter 0°C</h4>
    <p className="text-sm text-purple-700 dark:text-purple-300">
      Thermounterwäsche, Langarmshirt, Laufjacke, lange Laufhose. Handschuhe, Mütze, eventuell Sturmhaube
    </p>
  </div>
</div>

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Regel: Etwas kälter anziehen</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Ziehe dich so an, als wäre es 10°C wärmer. Wenn du dich beim Rausgehen etwas kühl fühlst, ist es richtig. Nach 10 Minuten läufst du warm. Bei der richtigen Kleidung solltest du weder frieren noch überhitzen.
  </p>
</div>

**Reflektoren & Sichtbarkeit**

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Sicherheit ist Pflicht!</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Wenn du bei Dämmerung oder Dunkelheit läufst, bist du für Autofahrer schwer zu sehen. Nutze:
  </p>
  <ul className="text-sm space-y-1 text-red-700 dark:text-red-300 mt-3">
    <li>✓ Reflektierende Kleidung oder Westen</li>
    <li>✓ Reflektierende Bänder an Armen/Beinen</li>
    <li>✓ Leuchtende Farben (gelb, orange, neon)</li>
    <li>✓ Blinklicht am Körper oder an der Kleidung</li>
    <li>✓ Kopflampe oder Stirnlampe</li>
  </ul>
</div>

---

### Accessoires & Gadgets

**Laufuhr/Smartwatch**

- Herzfrequenzmessung
- Pace (Geschwindigkeit)
- Distanz-Tracking
- GPS für Routen
- Training-Apps

**Handy-Armband oder Laufgürtel**

- Handy sicher transportieren
- Wasser mitnehmen (Hydration Belt)
- Keys, Geld, etc.

**Laufbrille**

- UV-Schutz für die Augen
- Windschutz
- Verhindert Tränen bei Wind
- Bessere Sicht bei Sonne

**Mütze/Kopfbedeckung**

- Wärmt bei Kälte (verlorene Wärme geht über den Kopf)
- Schützt vor Sonne
- Hält Regen ab

**Handschuhe**

- Bei Temperaturen unter 10°C
- Finger werden schnell kalt
- Leicht und einfach in der Tasche mitzunehmen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Starte einfach</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Du brauchst nicht alles auf einmal! Starte mit guten Laufschuhen und passender Kleidung. Gadgets können später hinzukommen. Was wichtig ist: Komfort und Sicherheit.
  </p>
</div>

---

### Zusammenfassung

**Die drei wichtigsten Investitionen:**

1. **Laufschuhe:** Investiere hier am meisten. Gehe in ein Fachgeschäft!
2. **Funktionskleidung:** Mindestens ein Set für den Start
3. **Sichtbarkeit:** Reflektoren oder leuchtende Kleidung für Dunkelheit

**Was du NICHT brauchst:**

- Die teuerste Ausrüstung
- Alles auf einmal
- Modebewusstsein (Funktion > Aussehen!)

**Merke dir:** Die richtige Ausrüstung macht Laufen komfortabel und sicher. Sie ist eine Investition in deine Gesundheit und deinen Spaß am Laufen!
    `,
    en: `
### Equipment & Clothing: The Foundation 🏃‍♀️

Before you take your first run, it's important to have the right equipment. Wrong equipment can lead to discomfort, injuries, and frustration. The right equipment makes the difference between "This is fun!" and "This hurts!".

---

### Running Shoes - The Most Important Equipment!

**Why the right shoes are crucial**

Running shoes are your most important piece of equipment. They protect your feet, absorb impact, and support your natural movement. Wrong shoes can lead to:

- Runner's knee (ITBS)
- Shin splints
- Plantar fasciitis
- Blisters and pressure points

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Important: No old everyday shoes!</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Running shoes are specifically designed for running. Sneakers, hiking boots, or old sports shoes are not designed to absorb the repeated impact forces of running. Invest in proper running shoes – it's an investment in your health.
  </p>
</div>

**Running Analysis: Pronation, Supination, Neutral**

Every foot is different. A professional running analysis at a specialty store can help you find the right shoe type:

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Type</th>
      <th className="border p-3 text-left">Description</th>
      <th className="border p-3 text-left">Shoe Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Neutral</strong></td>
      <td className="border p-3">Foot rolls naturally inward</td>
      <td className="border p-3">Neutral shoe</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Overpronation</strong></td>
      <td className="border p-3">Foot rolls too much inward</td>
      <td className="border p-3">Stability shoe</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Supination</strong></td>
      <td className="border p-3">Foot rolls outward</td>
      <td className="border p-3">Neutral to slightly cushioned</td>
    </tr>
  </tbody>
</table>

**Shoe Types Overview**

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="p-4 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Neutral</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      For runners with natural running style. No additional stabilization.
    </p>
  </div>
  <div className="p-4 bg-green-50 dark:bg-green-900/40 rounded-lg">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Stability</h4>
    <p className="text-sm text-green-700 dark:text-green-300">
      For overpronators. Supports natural movement and prevents excessive pronation.
    </p>
  </div>
  <div className="p-4 bg-purple-50 dark:bg-purple-900/40 rounded-lg">
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Cushioning</h4>
    <p className="text-sm text-purple-700 dark:text-purple-300">
      Extra padding for larger runners or knee/foot problems.
    </p>
  </div>
  <div className="p-4 bg-amber-50 dark:bg-amber-900/40 rounded-lg">
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Minimalist</h4>
    <p className="text-sm text-amber-700 dark:text-amber-300">
      Very light, minimal cushioning. Only for experienced runners with good technique!
    </p>
  </div>
</div>

**Fit: What's Important?**

- **Thumb width space:** Between your longest toe and shoe tip should be one thumb width
- **No pressure points:** The shoe should not have places that press
- **Heel:** Fits firmly but doesn't slip
- **Width:** Foot should not protrude beyond sole
- **Toes:** Toes should be able to move

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Tip: Buy in the evening</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Feet swell during the day. Buy running shoes in the afternoon or evening when your feet are at their largest size. Bring your own running socks!
  </p>
</div>

**When New Shoes?**

- **After 600-800 km:** Depending on running style and weight
- **Every 6-12 months:** If you run regularly
- **When worn:** Visible wear on sole
- **When discomfort:** If you experience more pain

---

### Clothing - Function Before Fashion

**Functional Clothing vs. Cotton**

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">❌ Why no cotton?</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
    Cotton absorbs sweat but doesn't release it. This means:
  </p>
  <ul className="text-sm space-y-1 text-amber-700 dark:text-amber-300">
    <li>✓ Clothing becomes wet and heavy</li>
    <li>✓ Feeling cold (wet clothing cools down)</li>
    <li>✓ Chafing and blisters</li>
    <li>✓ Heavy, uncomfortable clothing</li>
  </ul>
  <p className="text-sm text-amber-700 dark:text-amber-300 mt-3">
    <strong>Functional clothing</strong> transports moisture away from the skin – you stay dry and comfortable!
  </p>
</div>

**Layering Principle (Onion Principle)**

In cold weather, layering is key:

1. **Base Layer:** Directly on skin, transports moisture away
2. **Mid Layer:** Insulates and keeps warm
3. **Outer Layer:** Protects from wind and rain

**Temperatures & Clothing - Practical Guide**

<div className="space-y-4 my-6">
  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
    <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">🌞 Over 20°C</h4>
    <p className="text-sm text-yellow-700 dark:text-yellow-300">
      Short shorts, functional T-shirt or tank top. Sunglasses, sunscreen!
    </p>
  </div>
  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">🌤️ 10-20°C</h4>
    <p className="text-sm text-green-700 dark:text-green-300">
      Long running pants or shorts (depending on feeling), functional T-shirt or long-sleeved shirt. Optional: light cap
    </p>
  </div>
  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">❄️ 0-10°C</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      Long running pants, long-sleeved shirt, running jacket. Optional: gloves, cap
    </p>
  </div>
  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">🧊 Under 0°C</h4>
    <p className="text-sm text-purple-700 dark:text-purple-300">
      Thermal underwear, long-sleeved shirt, running jacket, long running pants. Gloves, cap, possibly balaclava
    </p>
  </div>
</div>

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Rule: Dress a bit cold</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Dress as if it were 10°C warmer. If you feel a bit cool when going out, that's right. After 10 minutes you'll warm up. With the right clothing, you should neither freeze nor overheat.
  </p>
</div>

**Reflectors & Visibility**

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Safety is mandatory!</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    If you run at dusk or in the dark, you're hard to see for drivers. Use:
  </p>
  <ul className="text-sm space-y-1 text-red-700 dark:text-red-300 mt-3">
    <li>✓ Reflective clothing or vests</li>
    <li>✓ Reflective bands on arms/legs</li>
    <li>✓ Bright colors (yellow, orange, neon)</li>
    <li>✓ Blinking light on body or clothing</li>
    <li>✓ Headlamp or headlight</li>
  </ul>
</div>

---

### Accessories & Gadgets

**Running Watch/Smartwatch**

- Heart rate measurement
- Pace (speed)
- Distance tracking
- GPS for routes
- Training apps

**Phone Armband or Running Belt**

- Transport phone safely
- Take water (hydration belt)
- Keys, money, etc.

**Running Glasses**

- UV protection for eyes
- Wind protection
- Prevents tearing in wind
- Better visibility in sun

**Cap/Headgear**

- Warms in cold (lost heat goes through head)
- Protects from sun
- Keeps rain off

**Gloves**

- At temperatures under 10°C
- Fingers get cold quickly
- Light and easy to carry in pocket

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Start simple</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    You don't need everything at once! Start with good running shoes and appropriate clothing. Gadgets can come later. What's important: Comfort and safety.
  </p>
</div>

---

### Summary

**The three most important investments:**

1. **Running Shoes:** Invest the most here. Go to a specialty store!
2. **Functional Clothing:** At least one set to start
3. **Visibility:** Reflectors or bright clothing for darkness

**What you DON'T need:**

- The most expensive equipment
- Everything at once
- Fashion consciousness (Function > Appearance!)

**Remember:** The right equipment makes running comfortable and safe. It's an investment in your health and enjoyment of running!
    `
  },

  task: {
    de: {
      title: 'Laufanalyse & Schuhtest',
      description: 'Besuche ein Fachgeschäft für Laufschuhe und lasse eine Laufanalyse machen. Dies ist die wichtigste Investition für dein Laufen!',
      checklist: [
        { text: 'Suche ein Fachgeschäft für Laufschuhe in deiner Nähe' },
        { text: 'Vereinbare einen Termin oder gehe ohne Termin (manche Geschäfte machen das)' },
        { text: 'Nimm deine eigenen Lauf-Socken mit' },
        { text: 'Lasse eine Laufanalyse machen (oft kostenlos bei Schuhkauf)' },
        { text: 'Teste mindestens 3 verschiedene Modelle' },
        { text: 'Laufe in jedem Schuh mindestens 5 Minuten im Geschäft oder draußen' },
        { text: 'Achte auf: Passform, Komfort, Gefühl beim Laufen' },
        { text: 'Kaufe den Schuh, der sich am besten anfühlt (nicht unbedingt der Teuerste!)' }
      ]
    },
    en: {
      title: 'Running Analysis & Shoe Test',
      description: 'Visit a specialty running store and have a running analysis done. This is the most important investment for your running!',
      checklist: [
        { text: 'Find a specialty running store near you' },
        { text: 'Make an appointment or go without appointment (some stores do this)' },
        { text: 'Bring your own running socks' },
        { text: 'Have a running analysis done (often free with shoe purchase)' },
        { text: 'Test at least 3 different models' },
        { text: 'Run in each shoe for at least 5 minutes in the store or outside' },
        { text: 'Pay attention to: Fit, comfort, running feel' },
        { text: 'Buy the shoe that feels best (not necessarily the most expensive!)' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Warum sind Laufschuhe so wichtig?',
        back: 'Sie schützen die Füße, absorbieren Stöße und unterstützen die natürliche Bewegung. Falsche Schuhe können zu Verletzungen führen.'
      },
      {
        front: 'Was sind die wichtigsten Schuhtypen?',
        back: 'Neutral (für natürlichen Laufstil), Stabilität (für Überpronierer), Dämpfung (extra Polsterung), Minimalistisch (für erfahrene Läufer)'
      },
      {
        front: 'Was ist bei der Passform wichtig?',
        back: 'Daumenbreite Platz vor den Zehen, keine Druckstellen, feste Ferse, Zehen können sich bewegen'
      },
      {
        front: 'Warum keine Baumwolle beim Laufen?',
        back: 'Baumwolle saugt Schweiß auf, gibt ihn aber nicht ab. Kleidung wird nass, schwer und unbequem. Funktionskleidung transportiert Feuchtigkeit weg.'
      },
      {
        front: 'Wie kleide ich mich bei verschiedenen Temperaturen?',
        back: 'Über 20°C: Kurze Shorts, T-Shirt. 10-20°C: Lange Hose oder Shorts, T-Shirt/Langarmshirt. 0-10°C: Lange Hose, Langarmshirt, Jacke. Unter 0°C: Thermounterwäsche, Jacke, Handschuhe, Mütze'
      }
    ],
    en: [
      {
        front: 'Why are running shoes so important?',
        back: 'They protect the feet, absorb impact, and support natural movement. Wrong shoes can lead to injuries.'
      },
      {
        front: 'What are the most important shoe types?',
        back: 'Neutral (for natural running style), Stability (for overpronators), Cushioning (extra padding), Minimalist (for experienced runners)'
      },
      {
        front: 'What\'s important about fit?',
        back: 'Thumb width space in front of toes, no pressure points, firm heel, toes can move'
      },
      {
        front: 'Why no cotton when running?',
        back: 'Cotton absorbs sweat but doesn\'t release it. Clothing becomes wet, heavy, and uncomfortable. Functional clothing transports moisture away.'
      },
      {
        front: 'How do I dress at different temperatures?',
        back: 'Over 20°C: Short shorts, T-shirt. 10-20°C: Long pants or shorts, T-shirt/long-sleeved shirt. 0-10°C: Long pants, long-sleeved shirt, jacket. Under 0°C: Thermal underwear, jacket, gloves, cap'
      }
    ]
  }
};

