import React from 'react';

export const biomechanicsDeepDiveLesson = {
  id: 'r9_m4_biomechanics',
  title: { 
    en: '9.4 Running Biomechanics Deep Dive', 
    de: '9.4 Laufbiomechanik im Detail' 
  },
  description: { 
    en: 'Analyze foot strike patterns, pronation, supination, gait analysis methods, and corrective strategies for optimal biomechanics.', 
    de: 'Analysiere Fußaufsatzmuster, Pronation, Supination, Ganganalyse-Methoden und Korrekturstrategien für optimale Biomechanik.' 
  },
  category: 'advancedPerformance',
  
  content: {
    de: `
### Laufbiomechanik im Detail: Verstehe deinen Laufstil 🦶

Biomechanik ist die Wissenschaft der Bewegung. Im Laufsport bestimmt deine Biomechanik, wie effizient du läufst und wie anfällig du für Verletzungen bist. In diesem Modul analysieren wir jeden Aspekt deines Laufstils – vom Fußaufsatz bis zur Armarbeit.

---
### Der Laufzyklus

**Phasen eines Schritts:**
1. **Standphase (60%):** Fuß hat Bodenkontakt
   - Initial Contact (Fußaufsatz)
   - Midstance (Fuß unter dem Körper)
   - Toe-Off (Abstoß)
2. **Schwungphase (40%):** Fuß in der Luft
   - Initial Swing (Bein nach hinten)
   - Mid Swing (Bein unter dem Körper)
   - Terminal Swing (Bein nach vorne)

**Kräfte beim Laufen:**
- Aufprallkraft: 2-3x Körpergewicht bei jedem Schritt
- Bei 1.000 Schritten/km = 60.000-90.000 Aufprallbelastungen bei einem Marathon!
- Deshalb ist Biomechanik so wichtig für die Verletzungsprävention

---
### Fußaufsatz-Analyse

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Fußaufsatz</th>
      <th className="border p-3 text-left">Beschreibung</th>
      <th className="border p-3 text-left">Vorteile</th>
      <th className="border p-3 text-left">Nachteile</th>
      <th className="border p-3 text-left">Häufigkeit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Rückfuß (Heel Strike)</strong></td>
      <td className="border p-3">Ferse zuerst</td>
      <td className="border p-3">Natürlich bei langsamen Tempi, weniger Wadenbelastung</td>
      <td className="border p-3">Höhere Stoßbelastung, Bremseffekt</td>
      <td className="border p-3">~75% aller Läufer</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Mittelfuß (Midfoot)</strong></td>
      <td className="border p-3">Ganzer Fuß gleichzeitig</td>
      <td className="border p-3">Gute Kraftverteilung, weniger Stoß</td>
      <td className="border p-3">Erfordert Anpassung</td>
      <td className="border p-3">~20% aller Läufer</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Vorfuß (Forefoot)</strong></td>
      <td className="border p-3">Ballen zuerst</td>
      <td className="border p-3">Maximale Federwirkung, schnell</td>
      <td className="border p-3">Hohe Wadenbelastung, Achillessehne</td>
      <td className="border p-3">~5% aller Läufer</td>
    </tr>
  </tbody>
</table>

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Gibt es den "perfekten" Fußaufsatz?</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Nein! Der beste Fußaufsatz ist der, der für DICH natürlich ist und keine Verletzungen verursacht. Die Forschung zeigt: Der Aufsatz unter dem Körperschwerpunkt ist wichtiger als WO am Fuß du aufsetzt. Vermeide Overstriding (Fuß weit vor dem Körper) – das ist der häufigste Fehler!
  </p>
</div>

---
### Pronation und Supination

**Was ist Pronation?**
- Natürliche Einwärtsdrehung des Fußes nach dem Aufsatz
- Dämpfungsmechanismus (absorbiert Stoßkräfte)
- 10-15° Pronation ist NORMAL und gesund

**Pronationstypen:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Typ</th>
      <th className="border p-3 text-left">Fußstellung</th>
      <th className="border p-3 text-left">Schuhtyp</th>
      <th className="border p-3 text-left">Risiko</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Neutral</strong></td>
      <td className="border p-3">10-15° Einwärtsdrehung</td>
      <td className="border p-3">Neutralschuh</td>
      <td className="border p-3">Gering</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Überpronation</strong></td>
      <td className="border p-3">>15° Einwärtsdrehung</td>
      <td className="border p-3">Stabilitätsschuh</td>
      <td className="border p-3">Knie-Innenrotation, Shin Splints</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Supination (Unterpronation)</strong></td>
      <td className="border p-3">Auswärtsdrehung</td>
      <td className="border p-3">Neutralschuh (weich)</td>
      <td className="border p-3">Stressfrakturen, IT-Band</td>
    </tr>
  </tbody>
</table>

**Selbsttest: Nasse-Füße-Test**
- Füße nass machen und auf Papier stehen
- Abdruck ansehen:
  - Vollständiger Abdruck → Überpronation (Plattfuß)
  - Normaler Bogen → Neutral
  - Sehr schmaler Verbindungsstreifen → Supination (Hohlfuß)

---
### Ganganalyse: Methoden

**1. Video-Ganganalyse (DIY):**
- Jemand filmt dich von hinten und von der Seite beim Laufen
- Zeitlupe nutzen (Smartphone kann das!)
- Achte auf: Kniestellung, Fußaufsatz, Beckenneigung, Armschwung

**2. Professionelle Ganganalyse:**
- Laufband-Analyse mit Kameras
- Kraftmessplatten (Force Plates)
- 3D-Bewegungsanalyse (Markersysteme)
- Kosten: 50-200€ in spezialisierten Laufshops oder beim Sportmediziner

**3. Sensor-basierte Analyse:**
- Laufsensoren (Stryd, RunScribe, Garmin Running Dynamics)
- Messen Kadenz, Bodenkontaktzeit, vertikale Oszillation, Schrittlänge
- Kontinuierliches Monitoring möglich

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 DIY-Videoanalyse Checkliste</h4>
  <ol className="list-decimal list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li>Filme von hinten: Achte auf Fersenbewegung (Eversion/Inversion)</li>
    <li>Filme von der Seite: Wo setzt der Fuß auf? (Vor oder unter dem Körper?)</li>
    <li>Kniestellung: Fallen die Knie nach innen? (Valgus-Stellung)</li>
    <li>Beckenneigung: Kippt das Becken bei jedem Schritt? (Trendelenburg)</li>
    <li>Armarbeit: Symmetrisch? Überkreuzt die Hand die Körpermitte?</li>
    <li>Oberkörper: Aufrecht oder stark nach vorne geneigt?</li>
  </ol>
</div>

---
### Häufige biomechanische Probleme und Korrekturen

**1. Overstriding (zu langer Schritt)**
- Problem: Fuß landet weit vor dem Körper → Bremseffekt
- Korrektur: Kadenz erhöhen, kürzere Schritte, "unter dem Körper aufsetzen"

**2. Knie-Valgus (X-Bein-Stellung)**
- Problem: Knie fallen bei jedem Schritt nach innen
- Korrektur: Gluteus-Stärkung (Clamshells, Seitstützbeinheben), Einbein-Squats

**3. Excessive Trunk Rotation**
- Problem: Oberkörper rotiert zu stark
- Korrektur: Core-Training, Arme parallel zur Laufrichtung führen

**4. Hip Drop (Beckenabsinken)**
- Problem: Becken kippt bei Einbeinstand zur Seite
- Korrektur: Gluteus medius stärken (Seitliche Beinheber, Monster Walks)

**5. Asymmetrien**
- Problem: Unterschiedliche Schrittlänge, ungleichmäßiger Abstoß
- Korrektur: Einbeinige Übungen, Physiotherapie bei strukturellen Problemen

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Veränderungen brauchen Zeit</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Biomechanische Korrekturen sollten schrittweise erfolgen. Dein Körper hat sich über Jahre an deinen aktuellen Laufstil angepasst. Plötzliche Änderungen können neue Verletzungen verursachen. Fokussiere dich auf EINE Korrektur pro Monat und steigere die Distanz langsam.
  </p>
</div>

---
### Zusammenfassung

**Key Takeaways:**
- 🦶 **Fußaufsatz:** Kein "perfekter" Typ – Aufsatz unter dem Körper ist wichtiger
- 🔄 **Pronation:** 10-15° ist normal, Überpronation und Supination erkennen
- 📹 **Ganganalyse:** Video-Analyse als DIY oder professionell im Laufladen
- 🏋️ **Korrekturen:** Overstriding, Knie-Valgus und Hip Drop durch gezieltes Training beheben
- ⏱️ **Geduld:** Eine Korrektur pro Monat, schrittweise Anpassung
- 💪 **Krafttraining:** Gluteus, Core und Stabilität als Fundament

**Nächster Schritt:** Lass dich filmen (Seite + hinten) und analysiere deinen Laufstil! 📹
    `,
    en: `
### Running Biomechanics Deep Dive: Understand Your Running Style 🦶

Biomechanics is the science of movement. In running, your biomechanics determine how efficiently you run and how susceptible you are to injuries. In this module, we analyze every aspect of your running form – from foot strike to arm swing.

---
### The Running Cycle

**Phases of a Stride:**
1. **Stance Phase (60%):** Foot has ground contact
   - Initial Contact (foot strike)
   - Midstance (foot under body)
   - Toe-Off (push-off)
2. **Swing Phase (40%):** Foot in the air
   - Initial Swing (leg behind)
   - Mid Swing (leg under body)
   - Terminal Swing (leg forward)

**Forces During Running:**
- Impact force: 2-3x body weight with each step
- At 1,000 steps/km = 60,000-90,000 impacts during a marathon!
- That's why biomechanics are so important for injury prevention

---
### Foot Strike Analysis

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Foot Strike</th>
      <th className="border p-3 text-left">Description</th>
      <th className="border p-3 text-left">Advantages</th>
      <th className="border p-3 text-left">Disadvantages</th>
      <th className="border p-3 text-left">Frequency</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Rearfoot (Heel Strike)</strong></td>
      <td className="border p-3">Heel first</td>
      <td className="border p-3">Natural at slow paces, less calf stress</td>
      <td className="border p-3">Higher impact, braking effect</td>
      <td className="border p-3">~75% of all runners</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Midfoot</strong></td>
      <td className="border p-3">Whole foot simultaneously</td>
      <td className="border p-3">Good force distribution, less impact</td>
      <td className="border p-3">Requires adaptation</td>
      <td className="border p-3">~20% of all runners</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Forefoot</strong></td>
      <td className="border p-3">Ball first</td>
      <td className="border p-3">Maximum spring effect, fast</td>
      <td className="border p-3">High calf load, Achilles tendon</td>
      <td className="border p-3">~5% of all runners</td>
    </tr>
  </tbody>
</table>

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Is There a "Perfect" Foot Strike?</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    No! The best foot strike is the one that is natural for YOU and doesn't cause injuries. Research shows: Landing under your center of gravity is more important than WHERE on the foot you land. Avoid overstriding (foot far in front of body) – that's the most common error!
  </p>
</div>

---
### Pronation and Supination

**What is Pronation?**
- Natural inward roll of the foot after landing
- Cushioning mechanism (absorbs impact forces)
- 10-15° pronation is NORMAL and healthy

**Pronation Types:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Type</th>
      <th className="border p-3 text-left">Foot Position</th>
      <th className="border p-3 text-left">Shoe Type</th>
      <th className="border p-3 text-left">Risk</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Neutral</strong></td>
      <td className="border p-3">10-15° inward roll</td>
      <td className="border p-3">Neutral shoe</td>
      <td className="border p-3">Low</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Overpronation</strong></td>
      <td className="border p-3">>15° inward roll</td>
      <td className="border p-3">Stability shoe</td>
      <td className="border p-3">Knee internal rotation, shin splints</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Supination (Underpronation)</strong></td>
      <td className="border p-3">Outward roll</td>
      <td className="border p-3">Neutral shoe (soft)</td>
      <td className="border p-3">Stress fractures, IT band</td>
    </tr>
  </tbody>
</table>

**Self-Test: Wet Foot Test**
- Wet your feet and stand on paper
- Look at the imprint:
  - Full imprint → Overpronation (flat foot)
  - Normal arch → Neutral
  - Very narrow connecting strip → Supination (high arch)

---
### Gait Analysis: Methods

**1. Video Gait Analysis (DIY):**
- Have someone film you from behind and from the side while running
- Use slow motion (smartphones can do this!)
- Watch for: knee position, foot strike, pelvic tilt, arm swing

**2. Professional Gait Analysis:**
- Treadmill analysis with cameras
- Force plates
- 3D motion capture (marker systems)
- Cost: $50-200 at specialized running stores or sports physicians

**3. Sensor-Based Analysis:**
- Running sensors (Stryd, RunScribe, Garmin Running Dynamics)
- Measure cadence, ground contact time, vertical oscillation, stride length
- Continuous monitoring possible

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 DIY Video Analysis Checklist</h4>
  <ol className="list-decimal list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li>Film from behind: Watch heel movement (eversion/inversion)</li>
    <li>Film from the side: Where does the foot land? (In front of or under the body?)</li>
    <li>Knee position: Do knees collapse inward? (Valgus position)</li>
    <li>Pelvic tilt: Does the pelvis drop with each step? (Trendelenburg)</li>
    <li>Arm swing: Symmetrical? Does the hand cross the midline?</li>
    <li>Upper body: Upright or strongly leaning forward?</li>
  </ol>
</div>

---
### Common Biomechanical Issues and Corrections

**1. Overstriding (too long a stride)**
- Problem: Foot lands far in front of body → braking effect
- Correction: Increase cadence, shorter steps, "land under your body"

**2. Knee Valgus (knock-knee position)**
- Problem: Knees collapse inward with each step
- Correction: Gluteus strengthening (clamshells, side-lying leg raises), single-leg squats

**3. Excessive Trunk Rotation**
- Problem: Upper body rotates too much
- Correction: Core training, arms parallel to running direction

**4. Hip Drop (pelvic drop)**
- Problem: Pelvis tilts to the side during single-leg stance
- Correction: Strengthen gluteus medius (side leg raises, monster walks)

**5. Asymmetries**
- Problem: Different stride lengths, uneven push-off
- Correction: Single-leg exercises, physiotherapy for structural issues

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Changes Take Time</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Biomechanical corrections should be made gradually. Your body has adapted to your current running style over years. Sudden changes can cause new injuries. Focus on ONE correction per month and increase distance slowly.
  </p>
</div>

---
### Summary

**Key Takeaways:**
- 🦶 **Foot strike:** No "perfect" type – landing under the body is more important
- 🔄 **Pronation:** 10-15° is normal, recognize overpronation and supination
- 📹 **Gait analysis:** Video analysis DIY or professional at running store
- 🏋️ **Corrections:** Fix overstriding, knee valgus, and hip drop through targeted training
- ⏱️ **Patience:** One correction per month, gradual adaptation
- 💪 **Strength training:** Glutes, core, and stability as foundation

**Next step:** Get filmed (side + behind) and analyze your running form! 📹
    `
  },

  task: {
    de: {
      title: 'Biomechanik analysieren und verbessern',
      description: 'Führe eine Ganganalyse durch und identifiziere Verbesserungspotenziale in deiner Laufbiomechanik.',
      checklist: [
        { text: 'Nasse-Füße-Test durchführen (Pronationstyp bestimmen)' },
        { text: 'DIY-Videoanalyse: Filmen von hinten und von der Seite' },
        { text: 'Checkliste abarbeiten: Fußaufsatz, Knie, Becken, Arme, Oberkörper' },
        { text: 'Hauptproblem identifizieren (z.B. Overstriding, Knie-Valgus)' },
        { text: 'Gezielte Korrekturübungen 3x pro Woche starten' },
        { text: 'Nach 4 Wochen erneut filmen und vergleichen' }
      ]
    },
    en: {
      title: 'Analyze and Improve Biomechanics',
      description: 'Perform a gait analysis and identify areas for improvement in your running biomechanics.',
      checklist: [
        { text: 'Do wet foot test (determine pronation type)' },
        { text: 'DIY video analysis: Film from behind and from the side' },
        { text: 'Work through checklist: foot strike, knees, pelvis, arms, upper body' },
        { text: 'Identify main issue (e.g., overstriding, knee valgus)' },
        { text: 'Start targeted corrective exercises 3x per week' },
        { text: 'Film again after 4 weeks and compare' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Die drei Fußaufsatz-Typen?',
        back: 'Rückfuß (Ferse, ~75% der Läufer), Mittelfuß (~20%), Vorfuß (Ballen, ~5%). Kein Typ ist "besser" – wichtiger ist, UNTER dem Körperschwerpunkt aufzusetzen und nicht zu overstriden.'
      },
      {
        front: 'Was ist der Unterschied zwischen Pronation und Supination?',
        back: 'Pronation = Einwärtsdrehung (10-15° normal, >15° = Überpronation). Supination = Auswärtsdrehung (selten). Nasse-Füße-Test: Plattfuß = Überpronation, Hohlfuß = Supination, normaler Bogen = Neutral.'
      },
      {
        front: 'Die 5 häufigsten biomechanischen Probleme?',
        back: '1) Overstriding (zu langer Schritt), 2) Knie-Valgus (Knie nach innen), 3) Excessive Trunk Rotation, 4) Hip Drop (Beckenabsinken), 5) Asymmetrien. Lösung: Gezielte Kraft + eine Korrektur/Monat.'
      }
    ],
    en: [
      {
        front: 'The three foot strike types?',
        back: 'Rearfoot (heel, ~75% of runners), midfoot (~20%), forefoot (ball, ~5%). No type is "better" – more important is landing UNDER your center of gravity and not overstriding.'
      },
      {
        front: 'What is the difference between pronation and supination?',
        back: 'Pronation = inward roll (10-15° normal, >15° = overpronation). Supination = outward roll (rare). Wet foot test: flat foot = overpronation, high arch = supination, normal arch = neutral.'
      },
      {
        front: 'The 5 most common biomechanical issues?',
        back: '1) Overstriding, 2) Knee valgus (knees in), 3) Excessive trunk rotation, 4) Hip drop (pelvic drop), 5) Asymmetries. Solution: Targeted strength + one correction/month.'
      }
    ]
  }
};
