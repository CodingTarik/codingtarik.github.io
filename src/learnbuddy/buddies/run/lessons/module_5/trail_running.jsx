import React from 'react';

export const trailRunningLesson = {
  id: 'r5_m1_trail_running',
  title: { 
    en: '5.1 Trail Running', 
    de: '5.1 Trail Running (Geländelauf)' 
  },
  description: { 
    en: 'Transition to off-road running with techniques for varied terrain, essential gear, and safety tips for nature trails.', 
    de: 'Wechsle zum Off-Road-Laufen mit Techniken für variiertes Gelände, essenzieller Ausrüstung und Sicherheits-Tipps für Naturpfade.' 
  },
  category: 'advanced',
  
  content: {
    de: `
### Trail Running: Freiheit in der Natur! 🌲

Trail Running ist Laufen im Gelände – Wald, Berge, Pfade statt Asphalt. Abenteuerlich, herausfordernd, erfrischend! Dieser Modul zeigt Unterschiede zu Straße, Technik, Ausrüstung und Sicherheit. Von Road zu Trail – neues Level!

---
### Was ist Trail Running?

**Unterschied zu Straßenlauf:**
- Gelände: Uneben, Wurzeln, Steine, Schlamm (mehr Balance)
- Technik: Kürzere Schritte, mehr Kernstabilität
- Ausrüstung: Trail-Schuhe, Hydration-Pack
- Vorteile: Weniger Impact (gelenkschonend), Natur pur, mentale Erfrischung

**Warum starten?**
- ✅ Abwechslung (keine Langeweile)
- ✅ Verletzungsprävention (andere Muskeln)
- ✅ Mentale Stärke (unvorhersehbares Gelände)
- ✅ Fitness-Boost (mehr Kalorienverbrauch)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Einstieg</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Starte mit einfachen Pfaden (keine Extreme). Von Road zu Trail: Erste Läufe kürzer (30-45 Min). Baue Balance auf!
  </p>
</div>

**Herausforderungen:**
- Navigation (keine Markierungen)
- Wetter (Regen = rutschig)
- Allein laufen (Sicherheit beachten)

---
### Trail-Technik: Anpassen ans Gelände

**Allgemeine Regeln:**
- **Schritte:** Kürzer, schneller (Cadence hoch für Balance)
- **Blick:** 5-10m voraus (nicht auf Füße starren)
- **Arme:** Breiter für Stabilität (Balance)
- **Kern:** Engagiert halten (Core-Stärke essenziell)

**Bergauf:**
- Kürzere Schritte, mehr Armeinsatz
- Hüfte vorne, nicht nach hinten lehnen
- Power Hiking bei steil (>15%)

**Bergab:**
- Kontrolliert, Knie gebeugt (Shock absorption)
- Kleine Schritte, Arme für Balance
- Nicht bremsen (vorsichtig vorwärts)

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Gelände</th>
      <th className="border p-3 text-left">Technik</th>
      <th className="border p-3 text-left">Tempo-Anpassung</th>
      <th className="border p-3 text-left">Tipp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Flach/Wurzeln</strong></td>
      <td className="border p-3">Hohe Cadence, Kern engagiert</td>
      <td className="border p-3">Easy Pace +10-20 Sek/km</td>
      <td className="border p-3">Blick voraus, Stolpern vermeiden</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Bergauf (5-10%)</strong></td>
      <td className="border p-3">Kurze Schritte, Arme pumpen</td>
      <td className="border p-3">Langsamer, Power Hiking bei steil</td>
      <td className="border p-3">Hüfte vorne halten</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Bergab</strong></td>
      <td className="border p-3">Knie gebeugt, kleine Schritte</td>
      <td className="border p-3">Kontrolliert, nicht sprinten</td>
      <td className="border p-3">Arme für Balance</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Schlamm/Steine</strong></td>
      <td className="border p-3">Hohe Knie, vorsichtige Landung</td>
      <td className="border p-3">Sehr langsam, Fokus</td>
      <td className="border p-3">Trail-Sticks bei technisch</td>
    </tr>
  </tbody>
</table>

**Praktische Übung:** Erster Trail-Lauf: 30 Min einfacher Pfad. Fokussiere Technik (Blick voraus, Kern). Vergleiche mit Road: Mehr Anstrengung? Besserer Flow?

---
### Trail-Ausrüstung: Das Richtige mitnehmen

**Essentiell:**
- **Schuhe:** Trail-Modelle (Grip, Schutz, Dämpfung)
- **Hydration:** Pack oder Flasche (Wasser + Elektrolyte)
- **Kleidung:** Schnelltrocknend, Schichten (Wetterwechsel)
- **Navigation:** GPS-Uhr/App (z.B. Strava, Komoot)
- **Erste Hilfe:** Blasenpflaster, Desinfektionsmittel

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Item</th>
      <th className="border p-3 text-left">Warum?</th>
      <th className="border p-3 text-left">Empfehlung</th>
      <th className="border p-3 text-left">Preis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Trail-Schuhe</strong></td>
      <td className="border p-3">Grip, Stein-Schutz</td>
      <td className="border p-3">Hoka Speedgoat, Salomon Ultra</td>
      <td className="border p-3">100-150€</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Hydration Pack</strong></td>
      <td className="border p-3">Wasser + Gels (keine Stationen)</td>
      <td className="border p-3">CamelBak, Salomon 2L</td>
      <td className="border p-3">50-80€</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>GPS-Uhr</strong></td>
      <td className="border p-3">Navigation, Pace</td>
      <td className="border p-3">Garmin Forerunner</td>
      <td className="border p-3">200-400€</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Sticks</strong></td>
      <td className="border p-3">Steil/technisch</td>
      <td className="border p-3">Black Diamond</td>
      <td className="border p-3">80-120€</td>
    </tr>
  </tbody>
</table>

**Sicherheit:**
- Route kennen/GPS (kein "verlaufen")
- Jemandem Bescheid geben (Zeit/Route)
- Wetter checken (Regen = gefährlich)
- Allein? Buddy oder App (z.B. Strava Beacon)

**Praktische Übung:** Rüste dich aus (Schuhe + Pack). Teste auf kurzem Trail. Notiere: Grip besser? Hydration easy?

---
### Sicherheit & Progression

**Sicherheits-Tipps:**
- Immer Handy mit (Notfall)
- Buddy-System (nicht allein in Wildnis)
- Kennzeichnung (Reflektoren bei Dämmer)
- Tiere/Wild: Lärm machen, nicht füttern

**Progression:**
- Starte flach (Parks), dann hügelig
- Von 30 Min auf 2 Std. steigern
- Mix: 1x Trail/Woche + Road

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warnung</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Trails sind unvorhersehbar! Bei Alleinlaufen: App teilen, Route bekannt. Rutschgefahr hoch – gute Schuhe, Vorsicht bergab.
  </p>
</div>

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Praktische Übung</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Plane ersten Trail: Route wählen (App), Ausrüstung packen, Buddy einladen. Nachher: Spaß? Herausforderung? Anpassen.
  </p>
</div>

---
### Zusammenfassung

**Trail Running:**
- ✅ Unterschied: Uneben, Balance, Natur
- ✅ Technik: Kurze Schritte, Blick voraus, Kern
- ✅ Ausrüstung: Trail-Schuhe, Hydration, GPS
- ✅ Sicherheit: Route, Buddy, Wetter
- ✅ Start: Einfache Pfade, 1x/Woche

**Merke dir:** Trail ist Freiheit – aber respektiere die Natur. Von Road zu Trail: Abenteuer wartet!
    `,
    en: `
### Trail Running: Freedom in Nature! 🌲

Trail running is off-road – woods, mountains, paths not asphalt. Adventurous, challenging, refreshing! This module shows road vs. trail differences, technique, gear, safety. From road to trail – new level!

---
### What is Trail Running?

**Difference from Road Running:**
- Terrain: Uneven, roots, rocks, mud (more balance)
- Technique: Shorter steps, more core stability
- Gear: Trail shoes, hydration pack
- Benefits: Less impact (joint-friendly), pure nature, mental refresh

**Why Start?**
- ✅ Variety (no boredom)
- ✅ Injury prevention (different muscles)
- ✅ Mental toughness (unpredictable terrain)
- ✅ Fitness boost (higher calorie burn)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Entry</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Start with easy paths (no extremes). From road to trail: First runs shorter (30-45 min). Build balance!
  </p>
</div>

**Challenges:**
- Navigation (no markers)
- Weather (rain = slippery)
- Solo running (safety note)

---
### Trail Technique: Adapt to Terrain

**General Rules:**
- **Steps:** Shorter, quicker (high cadence for balance)
- **Gaze:** 5-10m ahead (don't stare at feet)
- **Arms:** Wider for stability (balance)
- **Core:** Engaged (core strength essential)

**Uphill:**
- Shorter steps, more arm drive
- Hips forward, don't lean back
- Power hike if steep (>15%)

**Downhill:**
- Controlled, bent knees (shock absorption)
- Small steps, arms for balance
- Don't brake (careful forward)

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Terrain</th>
      <th className="border p-3 text-left">Technique</th>
      <th className="border p-3 text-left">Pace Adjustment</th>
      <th className="border p-3 text-left">Tip</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Flat/Roots</strong></td>
      <td className="border p-3">High cadence, core engaged</td>
      <td className="border p-3">Easy pace +10-20 sec/km</td>
      <td className="border p-3">Look ahead, avoid tripping</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Uphill (5-10%)</strong></td>
      <td className="border p-3">Short steps, arm pump</td>
      <td className="border p-3">Slower, power hike if steep</td>
      <td className="border p-3">Keep hips forward</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Downhill</strong></td>
      <td className="border p-3">Bent knees, small steps</td>
      <td className="border p-3">Controlled, no sprint</td>
      <td className="border p-3">Arms for balance</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Mud/Rocks</strong></td>
      <td className="border p-3">High knees, careful landing</td>
      <td className="border p-3">Very slow, focus</td>
      <td className="border p-3">Trail poles if technical</td>
    </tr>
  </tbody>
</table>

**Practical Exercise:** First trail run: 30 min easy path. Focus technique (gaze ahead, core). Compare to road: More effort? Better flow?

---
### Trail Gear: Take the Right Stuff

**Essentials:**
- **Shoes:** Trail models (grip, protection, cushion)
- **Hydration:** Pack or bottle (water + electrolytes)
- **Clothing:** Quick-dry, layers (weather changes)
- **Navigation:** GPS watch/app (e.g., Strava, Komoot)
- **First Aid:** Blister pads, antiseptic

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Item</th>
      <th className="border p-3 text-left">Why?</th>
      <th className="border p-3 text-left">Recommendation</th>
      <th className="border p-3 text-left">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Trail Shoes</strong></td>
      <td className="border p-3">Grip, rock protection</td>
      <td className="border p-3">Hoka Speedgoat, Salomon Ultra</td>
      <td className="border p-3">100-150€</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Hydration Pack</strong></td>
      <td className="border p-3">Water + gels (no stations)</td>
      <td className="border p-3">CamelBak, Salomon 2L</td>
      <td className="border p-3">50-80€</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>GPS Watch</strong></td>
      <td className="border p-3">Navigation, pace</td>
      <td className="border p-3">Garmin Forerunner</td>
      <td className="border p-3">200-400€</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Poles</strong></td>
      <td className="border p-3">Steep/technical</td>
      <td className="border p-3">Black Diamond</td>
      <td className="border p-3">80-120€</td>
    </tr>
  </tbody>
</table>

**Safety:**
- Know route/GPS (no getting lost)
- Tell someone (time/route)
- Weather check (rain = dangerous)
- Solo? Buddy or app (e.g., Strava Beacon)

**Practical Exercise:** Gear up (shoes + pack). Test on short trail. Note: Better grip? Easy hydration?

---
### Safety & Progression

**Safety Tips:**
- Always phone (emergency)
- Buddy system (not alone in wilderness)
- Marking (reflectors at dusk)
- Animals/wild: Make noise, don't feed

**Progression:**
- Start flat (parks), then hilly
- From 30 min to 2 hours
- Mix: 1x trail/week + road

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warning</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Trails unpredictable! For solo: Share app, known route. High slip risk – good shoes, careful downhill.
  </p>
</div>

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Practical Exercise</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Plan first trail: Choose route (app), pack gear, invite buddy. After: Fun? Challenge? Adjust.
  </p>
</div>

---
### Summary

**Trail Running:**
- ✅ Difference: Uneven, balance, nature
- ✅ Technique: Short steps, gaze ahead, core
- ✅ Gear: Trail shoes, hydration, GPS
- ✅ Safety: Route, buddy, weather
- ✅ Start: Easy paths, 1x/week

**Remember:** Trail is freedom – but respect nature. From road to trail: Adventure awaits!
    `
  },

  task: {
    de: {
      title: 'Ersten Trail-Lauf planen',
      description: 'Plane und führe deinen ersten Trail Run durch.',
      checklist: [
        { text: 'Einfachen Pfad wählen (App: Komoot/Strava, 5-10 km)' },
        { text: 'Ausrüstung packen: Trail-Schuhe, Wasser, Handy' },
        { text: 'Buddy einladen oder Route teilen (Sicherheit)' },
        { text: 'Technik üben: Kurze Schritte, Blick voraus' },
        { text: 'Nachher reflektieren: Spaß? Anpassungen?' },
        { text: 'Nächster Trail: Etwas anspruchsvoller (Hügel)' }
      ]
    },
    en: {
      title: 'Plan First Trail Run',
      description: 'Plan and do your first trail run.',
      checklist: [
        { text: 'Choose easy path (app: Komoot/Strava, 5-10 km)' },
        { text: 'Pack gear: Trail shoes, water, phone' },
        { text: 'Invite buddy or share route (safety)' },
        { text: 'Practice technique: Short steps, gaze ahead' },
        { text: 'Reflect after: Fun? Adjustments?' },
        { text: 'Next trail: Slightly harder (hills)' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Trail vs. Road?',
        back: 'Unebenes Gelände, mehr Balance, weniger Impact. Technik: Kürzere Schritte, Kern engagiert.'
      },
      {
        front: 'Essentielle Gear?',
        back: 'Trail-Schuhe (Grip), Hydration-Pack, GPS. Für steil: Sticks. Teste vorab.'
      },
      {
        front: 'Sicherheitstipps?',
        back: 'Route bekannt, Buddy, Wetter checken, Handy mit. Allein: App teilen (Strava Beacon).'
      }
    ],
    en: [
      {
        front: 'Trail vs. road?',
        back: 'Uneven terrain, more balance, less impact. Technique: Shorter steps, core engaged.'
      },
      {
        front: 'Essential gear?',
        back: 'Trail shoes (grip), hydration pack, GPS. For steep: Poles. Test beforehand.'
      },
      {
        front: 'Safety tips?',
        back: 'Known route, buddy, weather check, phone. Solo: Share app (Strava Beacon).'
      }
    ]
  }
};
