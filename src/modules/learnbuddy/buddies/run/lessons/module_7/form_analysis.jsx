import React from 'react';

export const formAnalysisLesson = {
  id: 'r7_m3_form_analysis',
  title: { 
    en: '7.3 Running Form Analysis', 
    de: '7.3 Laufform-Analyse' 
  },
  description: { 
    en: 'Analyze and improve your running form with video analysis, cadence optimization, foot strike patterns, and arm swing technique.', 
    de: 'Analysiere und verbessere deine Laufform mit Video-Analyse, Schrittfrequenz-Optimierung, Fußaufsatz-Mustern und Armschwung-Technik.' 
  },
  category: 'performance',
  
  content: {
    de: `
### Laufform-Analyse: Lauf effizienter! 🎥

Gute Laufform bedeutet weniger Energieverschwendung und weniger Verletzungen. Kleine Änderungen an Cadence, Fußaufsatz oder Armschwung können große Wirkung haben. Dieser Modul zeigt, wie du deine Form analysierst und verbesserst.

---
### Video-Analyse: Sich selbst sehen

**Warum Video-Analyse?**
- Du kannst deine eigene Form nicht fühlen (Propriozeption täuscht)
- Video zeigt objektiv, was passiert
- Vorher-Nachher-Vergleich möglich
- Profis nutzen Video-Analyse regelmäßig

**DIY Video-Analyse:**
- Handy auf Stativ oder Freund filmt
- Seitenansicht + Vorderansicht + Rückansicht
- Bei verschiedenen Tempos (Easy, Tempo, Sprint)
- Auf Laufband oder draußen

**Worauf achten?**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Bereich</th>
      <th className="border p-3 text-left">Optimal</th>
      <th className="border p-3 text-left">Häufiger Fehler</th>
      <th className="border p-3 text-left">Auswirkung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Kopf</strong></td>
      <td className="border p-3">Geradeaus, neutral</td>
      <td className="border p-3">Nach unten schauen</td>
      <td className="border p-3">Nackenspannung, schlechte Haltung</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Schultern</strong></td>
      <td className="border p-3">Entspannt, tief</td>
      <td className="border p-3">Hochgezogen, angespannt</td>
      <td className="border p-3">Energieverschwendung, Verspannung</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Arme</strong></td>
      <td className="border p-3">90°, parallel vorwärts</td>
      <td className="border p-3">Über Körpermitte, zu steif</td>
      <td className="border p-3">Rotation, Energieverlust</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Rumpf</strong></td>
      <td className="border p-3">Aufrecht, leicht vorn</td>
      <td className="border p-3">Nach hinten gelehnt, zu weit vorne</td>
      <td className="border p-3">Bremswirkung, Rückenschmerzen</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Hüfte</strong></td>
      <td className="border p-3">Stabil, kein Absinken</td>
      <td className="border p-3">Hüft-Drop (Trendelenburg)</td>
      <td className="border p-3">Knieprobleme, ITBS</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Fußaufsatz</strong></td>
      <td className="border p-3">Unter Schwerpunkt</td>
      <td className="border p-3">Overstriding (zu weit vorne)</td>
      <td className="border p-3">Bremskraft, Schienbeinprobleme</td>
    </tr>
  </tbody>
</table>

---
### Cadence (Schrittfrequenz)

**Was ist Cadence?**
- Schritte pro Minute (Steps Per Minute, SPM)
- Optimal: 170-185 SPM (abhängig von Körpergröße und Tempo)
- Oft zitiert: 180 SPM als "Goldstandard" (von Jack Daniels)

**Warum höhere Cadence besser ist:**
- Kürzere Schritte = weniger Aufprallkraft
- Fuß landet näher am Schwerpunkt
- Weniger Overstriding
- Effizientere Energienutzung

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Cadence messen</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
    <strong>Methode 1:</strong> GPS-Uhr (zeigt Cadence automatisch an)
  </p>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
    <strong>Methode 2:</strong> Manuell: Zähle Schritte (ein Fuß) in 30 Sek × 4 = SPM
  </p>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    <strong>Deine Cadence &lt;170?</strong> Versuche um 5% zu steigern (z.B. von 165 auf 173). Nicht zu schnell ändern!
  </p>
</div>

**Cadence verbessern:**
- Metronom-App nutzen (Beat auf Ziel-Cadence einstellen)
- Musik mit passendem BPM (z.B. 180 BPM Playlist)
- Fokus auf "leichte, schnelle Füße"
- Steigerung: Max. 5% pro Monat

---
### Fußaufsatz (Foot Strike)

**Die drei Typen:**
- **Fersenlauf (Heel Strike):** Ferse trifft zuerst auf → häufigster Stil (>90% der Läufer)
- **Mittelfußlauf (Midfoot Strike):** Ganzer Fuß gleichzeitig → effizient
- **Vorfußlauf (Forefoot Strike):** Ballen zuerst → schnell, aber belastend für Waden

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Wichtig: Nicht zwanghaft ändern!</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Der Fußaufsatz ändert sich natürlich mit höherer Cadence und besserem Rumpf-Engagement. <strong>Erzwinge keine Umstellung!</strong> Plötzlicher Wechsel von Ferse zu Vorfuß = hohes Verletzungsrisiko (Achillessehne, Waden).
  </p>
</div>

**Was wirklich zählt:**
- Fuß landet unter dem Schwerpunkt (nicht davor!)
- Overstriding vermeiden (zu großer Schritt = Bremse)
- Leichter, leiser Aufsatz (nicht stampfen)

---
### Armschwung optimieren

**Optimaler Armschwung:**
- Arme im 90° Winkel (oder leicht enger)
- Schwung parallel zur Laufrichtung (nicht quer!)
- Hände entspannt (lockere Faust, nicht geballt)
- Schultern tief und entspannt
- Antrieb kommt aus der Schulter, nicht aus dem Ellbogen

**Häufige Fehler:**
- Arme schwingen über Körpermitte → erzeugt Rotation
- Zu steife Arme → verschwendet Energie
- Hände ballen → Spannung in Armen und Schultern
- Zu wenig Armschwung → fehlender Antrieb

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Form-Verbesserungs-Plan</h4>
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <p><strong>Woche 1-2:</strong> Video-Analyse machen. Hauptproblem identifizieren.</p>
    <p><strong>Woche 3-4:</strong> An EINEM Aspekt arbeiten (z.B. Cadence um 5% erhöhen).</p>
    <p><strong>Woche 5-6:</strong> Lauf-ABC (Drills) 2x/Woche integrieren.</p>
    <p><strong>Woche 7-8:</strong> Zweites Video machen. Vergleichen!</p>
  </div>
</div>

---
### Zusammenfassung

**Key Takeaways:**
- 🎥 **Video-Analyse:** Filme dich (Seite + Vorne), analysiere Haltung, Arme, Fußaufsatz
- 🦶 **Cadence:** 170-185 SPM anstreben, langsam steigern (5%/Monat)
- 👟 **Fußaufsatz:** Unter Schwerpunkt landen, nicht erzwungen ändern
- 💪 **Arme:** 90°, parallel, entspannt, Schultern tief
- 🏃 **Drills:** Lauf-ABC 2x/Woche (High Knees, Butt Kicks, Skipping)
- ⚠️ **Änderungen:** Nur eins gleichzeitig, langsam, Geduld!
    `,
    en: `
### Running Form Analysis: Run More Efficiently! 🎥

Good running form means less wasted energy and fewer injuries. Small changes to cadence, foot strike, or arm swing can have big effects. This module shows how to analyze and improve your form.

---
### Video Analysis: See Yourself

**Why Video Analysis?**
- You can't feel your own form (proprioception deceives)
- Video shows objectively what happens
- Before/after comparison possible
- Pros use video analysis regularly

**DIY Video Analysis:**
- Phone on tripod or friend films
- Side view + front view + rear view
- At different paces (easy, tempo, sprint)
- On treadmill or outdoors

**What to Look For?**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Area</th>
      <th className="border p-3 text-left">Optimal</th>
      <th className="border p-3 text-left">Common Error</th>
      <th className="border p-3 text-left">Impact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Head</strong></td>
      <td className="border p-3">Forward, neutral</td>
      <td className="border p-3">Looking down</td>
      <td className="border p-3">Neck tension, poor posture</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Shoulders</strong></td>
      <td className="border p-3">Relaxed, low</td>
      <td className="border p-3">Raised, tense</td>
      <td className="border p-3">Wasted energy, tension</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Arms</strong></td>
      <td className="border p-3">90°, parallel forward</td>
      <td className="border p-3">Crossing midline, too stiff</td>
      <td className="border p-3">Rotation, energy loss</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Torso</strong></td>
      <td className="border p-3">Upright, slight forward lean</td>
      <td className="border p-3">Leaning back, too far forward</td>
      <td className="border p-3">Braking, back pain</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Hips</strong></td>
      <td className="border p-3">Stable, no dropping</td>
      <td className="border p-3">Hip drop (Trendelenburg)</td>
      <td className="border p-3">Knee problems, ITBS</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Foot Strike</strong></td>
      <td className="border p-3">Under center of gravity</td>
      <td className="border p-3">Overstriding (too far ahead)</td>
      <td className="border p-3">Braking force, shin issues</td>
    </tr>
  </tbody>
</table>

---
### Cadence (Step Rate)

**What is Cadence?**
- Steps per minute (SPM)
- Optimal: 170-185 SPM (depends on height and pace)
- Often cited: 180 SPM as "gold standard" (from Jack Daniels)

**Why Higher Cadence is Better:**
- Shorter steps = less impact force
- Foot lands closer to center of gravity
- Less overstriding
- More efficient energy use

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Measuring Cadence</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
    <strong>Method 1:</strong> GPS watch (shows cadence automatically)
  </p>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
    <strong>Method 2:</strong> Manual: Count steps (one foot) in 30 sec × 4 = SPM
  </p>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    <strong>Your cadence &lt;170?</strong> Try to increase by 5% (e.g., from 165 to 173). Don't change too fast!
  </p>
</div>

**Improving Cadence:**
- Use metronome app (set beat to target cadence)
- Music with matching BPM (e.g., 180 BPM playlist)
- Focus on "light, quick feet"
- Increase: Max 5% per month

---
### Foot Strike

**The Three Types:**
- **Heel Strike:** Heel hits first → most common (>90% of runners)
- **Midfoot Strike:** Whole foot simultaneously → efficient
- **Forefoot Strike:** Ball first → fast but stresses calves

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Important: Don't Force Changes!</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Foot strike naturally changes with higher cadence and better core engagement. <strong>Don't force a switch!</strong> Sudden change from heel to forefoot = high injury risk (Achilles, calves).
  </p>
</div>

**What Really Matters:**
- Foot lands under center of gravity (not in front!)
- Avoid overstriding (too big step = brake)
- Light, quiet landing (don't stomp)

---
### Optimizing Arm Swing

**Optimal Arm Swing:**
- Arms at 90° angle (or slightly tighter)
- Swing parallel to running direction (not across!)
- Hands relaxed (loose fist, not clenched)
- Shoulders low and relaxed
- Drive comes from shoulder, not elbow

**Common Mistakes:**
- Arms swing across midline → creates rotation
- Too stiff arms → wastes energy
- Clenching hands → tension in arms and shoulders
- Too little arm swing → missing drive

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Form Improvement Plan</h4>
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <p><strong>Week 1-2:</strong> Do video analysis. Identify main issue.</p>
    <p><strong>Week 3-4:</strong> Work on ONE aspect (e.g., increase cadence by 5%).</p>
    <p><strong>Week 5-6:</strong> Integrate running drills 2x/week.</p>
    <p><strong>Week 7-8:</strong> Second video. Compare!</p>
  </div>
</div>

---
### Summary

**Key Takeaways:**
- 🎥 **Video analysis:** Film yourself (side + front), analyze posture, arms, foot strike
- 🦶 **Cadence:** Aim for 170-185 SPM, increase slowly (5%/month)
- 👟 **Foot strike:** Land under center of gravity, don't force changes
- 💪 **Arms:** 90°, parallel, relaxed, shoulders low
- 🏃 **Drills:** Running ABC 2x/week (high knees, butt kicks, skipping)
- ⚠️ **Changes:** Only one at a time, slowly, patience!
    `
  },

  task: {
    de: {
      title: 'Laufform analysieren und verbessern',
      description: 'Analysiere deine Laufform per Video und identifiziere Verbesserungspotential.',
      checklist: [
        { text: 'Video-Analyse durchführen (Seiten- und Vorderansicht)' },
        { text: 'Cadence messen (Ziel: 170-185 SPM)' },
        { text: 'Hauptproblem identifizieren (Tabelle nutzen)' },
        { text: 'Lauf-ABC Drills 2x diese Woche machen' },
        { text: '2 Wochen an einem Aspekt arbeiten' },
        { text: 'Zweites Video zum Vergleich machen' }
      ]
    },
    en: {
      title: 'Analyze and Improve Running Form',
      description: 'Analyze your running form via video and identify improvement potential.',
      checklist: [
        { text: 'Do video analysis (side and front view)' },
        { text: 'Measure cadence (target: 170-185 SPM)' },
        { text: 'Identify main issue (use table)' },
        { text: 'Do running drills 2x this week' },
        { text: 'Work on one aspect for 2 weeks' },
        { text: 'Make second video to compare' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Optimale Cadence?',
        back: '170-185 SPM. Messung: Schritte (ein Fuß) in 30 Sek × 4. Steigerung max. 5%/Monat. Metronom-App oder 180-BPM-Musik nutzen.'
      },
      {
        front: 'Fußaufsatz ändern?',
        back: 'Nicht erzwingen! Ändert sich natürlich mit höherer Cadence. Wichtigster Fokus: Fuß unter Schwerpunkt landen (kein Overstriding), leiser Aufsatz.'
      },
      {
        front: 'Top 3 Form-Fehler?',
        back: '1) Overstriding (Fuß zu weit vorne), 2) Arme über Körpermitte schwingen, 3) Schultern hochgezogen/angespannt.'
      }
    ],
    en: [
      {
        front: 'Optimal cadence?',
        back: '170-185 SPM. Measure: Steps (one foot) in 30 sec × 4. Increase max 5%/month. Use metronome app or 180 BPM music.'
      },
      {
        front: 'Change foot strike?',
        back: "Don't force it! Changes naturally with higher cadence. Key focus: Foot lands under center of gravity (no overstriding), quiet landing."
      },
      {
        front: 'Top 3 form errors?',
        back: '1) Overstriding (foot too far forward), 2) Arms swinging across midline, 3) Shoulders raised/tense.'
      }
    ]
  }
};
