import React from 'react';

export const foamRollingLesson = {
  id: 'r6_m4_foam_rolling',
  title: { 
    en: '6.4 Foam Rolling & Self-Massage', 
    de: '6.4 Foam Rolling & Selbstmassage' 
  },
  description: { 
    en: 'Master self-myofascial release with foam rollers, lacrosse balls, and massage guns to improve recovery and prevent injuries.', 
    de: 'Meistere die Selbstmassage mit Faszienrollen, Lacrosse-Bällen und Massagepistolen für bessere Regeneration und Verletzungsprävention.' 
  },
  category: 'recovery',
  
  content: {
    de: `
### Foam Rolling & Selbstmassage: Löse Verspannungen! 🧘

Foam Rolling ist eine der effektivsten Regenerations-Methoden für Läufer. Mit einfachen Tools kannst du Verspannungen lösen, Durchblutung verbessern und Verletzungen vorbeugen. Dieser Modul zeigt Techniken, Tools und Routinen.

---
### Was ist Foam Rolling?

**Definition:**
- Self-Myofascial Release (SMR) = Selbstmassage der Faszien
- Faszien = Bindegewebshülle um Muskeln
- Durch Druck lösen sich Verklebungen und Verspannungen
- Vergleichbar mit einer leichten Massage

**Vorteile für Läufer:**
- Löst muskuläre Verspannungen und Trigger-Punkte
- Verbessert Durchblutung und Nährstoffversorgung
- Beschleunigt Regeneration nach Training
- Verbessert Beweglichkeit und Range of Motion
- Reduziert Muskelkater (DOMS)
- Hilft bei Verletzungsprävention

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Wann rollen?</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-blue-700 dark:text-blue-300">
    <li><strong>Nach dem Laufen:</strong> Ideal für Regeneration (10-15 Min)</li>
    <li><strong>Vor dem Laufen:</strong> Kurz und leicht (5 Min, lockert Muskeln)</li>
    <li><strong>An Ruhetagen:</strong> Längere Session möglich (15-20 Min)</li>
    <li><strong>Abends:</strong> Vor dem Schlafen (entspannend)</li>
  </ul>
</div>

---
### Die Tools: Foam Roller, Ball & Co.

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Tool</th>
      <th className="border p-3 text-left">Intensität</th>
      <th className="border p-3 text-left">Ideal für</th>
      <th className="border p-3 text-left">Preis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Weiche Rolle</strong></td>
      <td className="border p-3">Leicht</td>
      <td className="border p-3">Anfänger, empfindliche Bereiche</td>
      <td className="border p-3">15-25€</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Standard Rolle</strong></td>
      <td className="border p-3">Mittel</td>
      <td className="border p-3">Oberschenkel, Waden, Rücken</td>
      <td className="border p-3">20-35€</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Strukturierte Rolle</strong></td>
      <td className="border p-3">Hoch</td>
      <td className="border p-3">Tiefe Trigger-Punkte</td>
      <td className="border p-3">30-50€</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Lacrosse Ball</strong></td>
      <td className="border p-3">Sehr hoch</td>
      <td className="border p-3">Gesäß, Plantarfaszie, Schultern</td>
      <td className="border p-3">5-10€</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Massage Gun</strong></td>
      <td className="border p-3">Variabel</td>
      <td className="border p-3">Alle Bereiche, schnelle Sessions</td>
      <td className="border p-3">60-300€</td>
    </tr>
  </tbody>
</table>

**Empfehlung für Einsteiger:**
- Starte mit einer Standard-Faszienrolle (mittel)
- Ergänze einen Lacrosse-Ball für kleine Bereiche
- Massage Gun optional (nice to have)

---
### Technik: Richtig rollen

**Grundregeln:**
1. **Langsam rollen:** 2-3 cm pro Sekunde (nicht schnell hin und her!)
2. **Schmerzpunkt finden:** Auf Trigger-Punkt stoppen, 30-60 Sek. halten
3. **Druck anpassen:** Moderater Schmerz okay (4-6/10), nie unerträglich
4. **Atmen:** Tief einatmen, beim Ausatmen in den Druck "sinken"
5. **Nicht über Knochen rollen:** Nur auf Muskelgewebe
6. **Nicht über akute Verletzungen:** Entzündungen nicht massieren

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Nicht rollen bei:</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-red-700 dark:text-red-300">
    <li>Akuten Verletzungen (Zerrung, Riss)</li>
    <li>Direkt über Knochen oder Gelenken</li>
    <li>Auf dem unteren Rücken (Wirbelsäule!)</li>
    <li>Bei Blutergüssen oder Schwellungen</li>
    <li>Bei Taubheit oder stechendem Schmerz (Nerv!)</li>
  </ul>
</div>

---
### Die wichtigsten Bereiche für Läufer

**1. IT-Band (Außenseite Oberschenkel):**
- Seitlich liegen, Rolle unter Oberschenkel
- Von Hüfte bis Knie rollen
- Besonders wichtig bei ITBS/Läuferknie
- 2-3 Minuten pro Seite

**2. Quadrizeps (Vorderseite Oberschenkel):**
- Auf Bauch, Rolle unter Oberschenkel
- Von Hüfte bis Knie rollen
- Beide Beine oder einzeln
- 2 Minuten pro Seite

**3. Waden:**
- Sitzend, Rolle unter Wade
- Von Kniekehle bis Achillessehne
- Für mehr Druck: Anderes Bein aufeinander
- 2 Minuten pro Seite

**4. Hamstrings (Oberschenkelrückseite):**
- Sitzend, Rolle unter Oberschenkel
- Von Gesäß bis Knie
- Für mehr Druck: Auf einem Bein
- 2 Minuten pro Seite

**5. Gesäßmuskeln (Glutes):**
- Sitzend auf der Rolle
- Oder Lacrosse-Ball unter Gesäß
- Kreisende Bewegungen
- 2 Minuten pro Seite

**6. Plantarfaszie (Fußsohle):**
- Lacrosse-Ball oder gefrorene Wasserflasche unter Fuß rollen
- Im Stehen oder Sitzen
- Besonders bei Plantarfasziitis
- 1-2 Minuten pro Fuß

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Massage Gun Tipps</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Die Massage Gun (Percussion Therapy) ist schnell und effektiv:
  </p>
  <ul className="list-disc list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li><strong>Geschwindigkeit:</strong> Niedrig für Entspannung, hoch für tiefe Trigger-Punkte</li>
    <li><strong>Dauer:</strong> 30-60 Sek pro Muskelgruppe</li>
    <li><strong>Druck:</strong> Leicht auflegen, nicht reindrücken</li>
    <li><strong>Vermeiden:</strong> Knochen, Gelenke, Wirbelsäule, Nacken</li>
  </ul>
</div>

---
### Routinen für Läufer

**Quick-Routine nach dem Laufen (10 Min):**

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">📋 10-Minuten Post-Run Routine</h4>
  <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
    <p>1. <strong>Waden:</strong> 2 Min (je 1 Min pro Seite)</p>
    <p>2. <strong>Quadrizeps:</strong> 2 Min (je 1 Min pro Seite)</p>
    <p>3. <strong>IT-Band:</strong> 2 Min (je 1 Min pro Seite)</p>
    <p>4. <strong>Hamstrings:</strong> 2 Min (je 1 Min pro Seite)</p>
    <p>5. <strong>Glutes:</strong> 2 Min (Lacrosse Ball, je 1 Min pro Seite)</p>
  </div>
</div>

**Intensive Ruhetag-Routine (20 Min):**
- Alle obigen Bereiche: Je 2-3 Min pro Seite
- Plus Fußsohle mit Lacrosse-Ball (2 Min pro Fuß)
- Plus Rücken (oberer Rücken, nicht unterer!)
- Langsamer, tiefer, auf Trigger-Punkte konzentrieren

---
### Zusammenfassung

**Key Takeaways:**
- 🧘 **Foam Rolling** löst Verspannungen und verbessert Regeneration
- 🎯 **Technik:** Langsam rollen, Trigger-Punkte halten (30-60 Sek), moderater Druck
- 🔧 **Tools:** Faszienrolle (Standard), Lacrosse-Ball, optional Massage Gun
- 🦵 **Wichtigste Bereiche:** IT-Band, Waden, Quadrizeps, Hamstrings, Glutes
- ⏰ **Timing:** Nach dem Laufen (10 Min) oder an Ruhetagen (20 Min)
- ⚠️ **Nicht rollen:** Über Knochen, akute Verletzungen, unteren Rücken

**Nächste Schritte:**
1. Besorge eine Standard-Faszienrolle und einen Lacrosse-Ball
2. Teste die 10-Minuten Post-Run Routine
3. Finde deine persönlichen Trigger-Punkte
4. Baue Foam Rolling als feste Gewohnheit ein (3-5x pro Woche)
    `,
    en: `
### Foam Rolling & Self-Massage: Release Tension! 🧘

Foam rolling is one of the most effective recovery methods for runners. With simple tools you can release tension, improve circulation, and prevent injuries. This module covers techniques, tools, and routines.

---
### What is Foam Rolling?

**Definition:**
- Self-Myofascial Release (SMR) = self-massage of fascia
- Fascia = connective tissue sheath around muscles
- Pressure releases adhesions and tension
- Comparable to a light massage

**Benefits for Runners:**
- Releases muscular tension and trigger points
- Improves circulation and nutrient supply
- Accelerates recovery after training
- Improves flexibility and range of motion
- Reduces muscle soreness (DOMS)
- Helps with injury prevention

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 When to Roll?</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-blue-700 dark:text-blue-300">
    <li><strong>After running:</strong> Ideal for recovery (10-15 min)</li>
    <li><strong>Before running:</strong> Short and light (5 min, loosens muscles)</li>
    <li><strong>On rest days:</strong> Longer session possible (15-20 min)</li>
    <li><strong>Evenings:</strong> Before sleep (relaxing)</li>
  </ul>
</div>

---
### The Tools: Foam Roller, Ball & More

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Tool</th>
      <th className="border p-3 text-left">Intensity</th>
      <th className="border p-3 text-left">Ideal For</th>
      <th className="border p-3 text-left">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Soft Roller</strong></td>
      <td className="border p-3">Light</td>
      <td className="border p-3">Beginners, sensitive areas</td>
      <td className="border p-3">$15-25</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Standard Roller</strong></td>
      <td className="border p-3">Medium</td>
      <td className="border p-3">Quads, calves, back</td>
      <td className="border p-3">$20-35</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Textured Roller</strong></td>
      <td className="border p-3">High</td>
      <td className="border p-3">Deep trigger points</td>
      <td className="border p-3">$30-50</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Lacrosse Ball</strong></td>
      <td className="border p-3">Very High</td>
      <td className="border p-3">Glutes, plantar fascia, shoulders</td>
      <td className="border p-3">$5-10</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Massage Gun</strong></td>
      <td className="border p-3">Variable</td>
      <td className="border p-3">All areas, quick sessions</td>
      <td className="border p-3">$60-300</td>
    </tr>
  </tbody>
</table>

**Beginner Recommendation:**
- Start with a standard foam roller (medium)
- Add a lacrosse ball for small areas
- Massage gun optional (nice to have)

---
### Technique: Rolling Correctly

**Basic Rules:**
1. **Roll slowly:** 2-3 cm per second (don't go fast back and forth!)
2. **Find pain point:** Stop on trigger point, hold 30-60 sec
3. **Adjust pressure:** Moderate pain okay (4-6/10), never unbearable
4. **Breathe:** Inhale deeply, "sink" into pressure on exhale
5. **Don't roll over bones:** Only on muscle tissue
6. **Don't roll on acute injuries:** Don't massage inflammation

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Don't Roll On:</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-red-700 dark:text-red-300">
    <li>Acute injuries (strain, tear)</li>
    <li>Directly over bones or joints</li>
    <li>Lower back (spine!)</li>
    <li>Bruises or swelling</li>
    <li>Numbness or sharp pain (nerve!)</li>
  </ul>
</div>

---
### Key Areas for Runners

**1. IT Band (Outer Thigh):**
- Lie on side, roller under thigh
- Roll from hip to knee
- Especially important for ITBS/runner's knee
- 2-3 minutes per side

**2. Quadriceps (Front of Thigh):**
- On stomach, roller under thigh
- Roll from hip to knee
- Both legs or individual
- 2 minutes per side

**3. Calves:**
- Sitting, roller under calf
- From behind knee to Achilles tendon
- For more pressure: Stack other leg on top
- 2 minutes per side

**4. Hamstrings (Back of Thigh):**
- Sitting, roller under thigh
- From glutes to knee
- For more pressure: On one leg
- 2 minutes per side

**5. Glutes:**
- Sitting on the roller
- Or lacrosse ball under glutes
- Circular movements
- 2 minutes per side

**6. Plantar Fascia (Sole of Foot):**
- Roll lacrosse ball or frozen water bottle under foot
- Standing or sitting
- Especially for plantar fasciitis
- 1-2 minutes per foot

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Massage Gun Tips</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    The massage gun (percussion therapy) is quick and effective:
  </p>
  <ul className="list-disc list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li><strong>Speed:</strong> Low for relaxation, high for deep trigger points</li>
    <li><strong>Duration:</strong> 30-60 sec per muscle group</li>
    <li><strong>Pressure:</strong> Place lightly, don't push in</li>
    <li><strong>Avoid:</strong> Bones, joints, spine, neck</li>
  </ul>
</div>

---
### Routines for Runners

**Quick Post-Run Routine (10 Min):**

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">📋 10-Minute Post-Run Routine</h4>
  <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
    <p>1. <strong>Calves:</strong> 2 min (1 min per side)</p>
    <p>2. <strong>Quads:</strong> 2 min (1 min per side)</p>
    <p>3. <strong>IT Band:</strong> 2 min (1 min per side)</p>
    <p>4. <strong>Hamstrings:</strong> 2 min (1 min per side)</p>
    <p>5. <strong>Glutes:</strong> 2 min (lacrosse ball, 1 min per side)</p>
  </div>
</div>

**Intensive Rest Day Routine (20 Min):**
- All above areas: 2-3 min per side each
- Plus foot sole with lacrosse ball (2 min per foot)
- Plus back (upper back, not lower!)
- Slower, deeper, focus on trigger points

---
### Summary

**Key Takeaways:**
- 🧘 **Foam rolling** releases tension and improves recovery
- 🎯 **Technique:** Roll slowly, hold trigger points (30-60 sec), moderate pressure
- 🔧 **Tools:** Foam roller (standard), lacrosse ball, optional massage gun
- 🦵 **Key areas:** IT band, calves, quads, hamstrings, glutes
- ⏰ **Timing:** After running (10 min) or on rest days (20 min)
- ⚠️ **Don't roll:** Over bones, acute injuries, lower back

**Next Steps:**
1. Get a standard foam roller and a lacrosse ball
2. Test the 10-minute post-run routine
3. Find your personal trigger points
4. Build foam rolling as a habit (3-5x per week)
    `
  },

  task: {
    de: {
      title: 'Foam Rolling Routine aufbauen',
      description: 'Entwickle eine persönliche Foam Rolling Routine und integriere sie in dein Training.',
      checklist: [
        { text: 'Faszienrolle und Lacrosse-Ball besorgen' },
        { text: '10-Min Post-Run Routine 3x durchführen' },
        { text: 'Persönliche Trigger-Punkte identifizieren' },
        { text: 'Foam Rolling nach jedem Lauf integrieren (1 Woche)' },
        { text: 'Intensive Ruhetag-Routine testen (20 Min)' },
        { text: 'Vergleich: Muskelkater mit vs. ohne Foam Rolling' }
      ]
    },
    en: {
      title: 'Build Foam Rolling Routine',
      description: 'Develop a personal foam rolling routine and integrate it into your training.',
      checklist: [
        { text: 'Get a foam roller and lacrosse ball' },
        { text: 'Do 10-min post-run routine 3 times' },
        { text: 'Identify personal trigger points' },
        { text: 'Integrate foam rolling after every run (1 week)' },
        { text: 'Test intensive rest day routine (20 min)' },
        { text: 'Compare: Soreness with vs. without foam rolling' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Foam Rolling Grundregeln?',
        back: 'Langsam rollen (2-3 cm/Sek), Trigger-Punkte halten (30-60 Sek), moderater Druck (4-6/10), tief atmen. Nie über Knochen/Gelenke!'
      },
      {
        front: 'Top 3 Tools für Läufer?',
        back: '1) Standard-Faszienrolle (Oberschenkel, Waden), 2) Lacrosse-Ball (Glutes, Fußsohle), 3) Massage Gun (optional, schnelle Sessions).'
      },
      {
        front: 'Wann Foam Rolling?',
        back: 'Nach dem Laufen (10-15 Min ideal), vor dem Laufen (5 Min leicht), an Ruhetagen (20 Min intensiv), abends zum Entspannen.'
      }
    ],
    en: [
      {
        front: 'Foam rolling basic rules?',
        back: 'Roll slowly (2-3 cm/sec), hold trigger points (30-60 sec), moderate pressure (4-6/10), breathe deeply. Never over bones/joints!'
      },
      {
        front: 'Top 3 tools for runners?',
        back: '1) Standard foam roller (quads, calves), 2) Lacrosse ball (glutes, foot sole), 3) Massage gun (optional, quick sessions).'
      },
      {
        front: 'When to foam roll?',
        back: 'After running (10-15 min ideal), before running (5 min light), on rest days (20 min intensive), evenings to relax.'
      }
    ]
  }
};
