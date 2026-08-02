import React from 'react';

export const injuryPreventionLesson = {
  id: 'g1_m5_injury',
  title: { 
    en: '5.5 Injury Prevention & Rehabilitation', 
    de: '5.5 Verletzungsprävention & Rehabilitation' 
  },
  description: { 
    en: 'The best training plan is useless if you\'re injured. Learn how to prevent injuries and what to do when they happen.', 
    de: 'Der beste Trainingsplan ist nutzlos, wenn du verletzt bist. Lerne, wie du Verletzungen vermeidest und was du tun kannst, wenn es doch passiert.' 
  },
  category: 'recovery',
  
  content: {
    de: `
### Modul 5.5: Verletzungsprävention & Rehabilitation

Eine Verletzung ist der **größte Feind des Fortschritts**. Nicht ein schlechter Trainingsplan, nicht eine unoptimale Ernährung – eine Verletzung kann dich Wochen oder Monate zurückwerfen. Die gute Nachricht: Die meisten Gym-Verletzungen sind **vermeidbar**.

---

### Die häufigsten Gym-Verletzungen

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Die Top 4 Verletzungszonen</h4>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-3">
    <li><strong>1. Schulter:</strong> Impingement, Rotatorenmanschetten-Probleme. Häufig durch zu viel Bankdrücken ohne Gegenarbeit (Rudern, Face Pulls), schlechte Technik beim Überkopfdrücken.</li>
    <li><strong>2. Unterer Rücken:</strong> Bandscheibenvorfall, Muskelzerrung. Meist durch rundenden Rücken beim Kreuzheben oder Kniebeugen, zu schnelle Gewichtssteigerung.</li>
    <li><strong>3. Knie:</strong> Patellasehnen-Probleme, Meniskusverletzungen. Oft durch zu tiefe Kniebeugen mit schlechter Technik, Knie fallen nach innen (Valgus).</li>
    <li><strong>4. Ellenbogen:</strong> Tennis-/Golfer-Ellenbogen (Tendinitis). Häufig bei zu viel Bizeps-Curls, Trizeps-Extensions oder zu enger Griffbreite.</li>
  </ul>
</div>

---

### Die goldene Regel: Technik > Gewicht

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">🏆 Prioritäten-Pyramide</h4>
  <ol className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
    <li><strong>1. Saubere Technik</strong> – Immer. Keine Ausnahme. Lieber 60kg sauber als 80kg mit Schwung.</li>
    <li><strong>2. Voller Bewegungsradius (ROM)</strong> – Halbe Wiederholungen = halbe Ergebnisse und höheres Verletzungsrisiko.</li>
    <li><strong>3. Kontrollierte Geschwindigkeit</strong> – Kein Reißen, kein Fallenlassen. Besonders die exzentrische Phase (Ablassen) kontrollieren.</li>
    <li><strong>4. Dann erst Gewicht steigern</strong> – Wenn die oberen 3 Punkte sitzen, darfst du mehr auflegen.</li>
  </ol>
</div>

**Das Ego ist dein größter Feind.** Der Typ, der mit 150kg Bankdrücken und dabei den Rücken brückt wie eine Katze, wird bald nicht mehr trainieren können. Der Typ mit 80kg und perfekter Technik wird in 2 Jahren stärker sein.

---

### Präventions-Strategien

**1. Ausgewogenes Training**
Trainiere immer Agonist UND Antagonist:

| Push (Drücken) | Pull (Ziehen) |
|---|---|
| Bankdrücken | Rudern |
| Schulterdrücken | Face Pulls |
| Trizeps | Bizeps |
| Quadrizeps (Beinstrecker) | Beinbeuger (Hamstrings) |

*Faustregel: Für jede Drück-Übung eine Zug-Übung.*

**2. Deload-Wochen einbauen**
Alle 4-6 Wochen eine Woche mit reduziertem Gewicht (50-60% des normalen Arbeitsgewichts). Das gibt Gelenken, Sehnen und dem Nervensystem Zeit zur Erholung.

**3. Pre-Hab Übungen**
Kleine Übungen, die Schwachstellen stärken, BEVOR sie zu Verletzungen werden:

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🛡️ Top Pre-Hab Übungen</h4>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
    <li>• <strong>Face Pulls</strong> (3×15-20) – Schultergesundheit, Rotatorenmanschette</li>
    <li>• <strong>Band Pull-Aparts</strong> (3×20) – Oberer Rücken, Schulterblatt-Stabilität</li>
    <li>• <strong>External Rotation</strong> mit leichtem Gewicht (3×15) – Rotatorenmanschette</li>
    <li>• <strong>Dead Hangs</strong> (3×30 Sek.) – Schulterdekompression, Griffkraft</li>
    <li>• <strong>Plank + Side Plank</strong> (je 30-60 Sek.) – Rumpfstabilität</li>
    <li>• <strong>Banded Clamshells</strong> (3×15) – Hüftstabilität, Gluteus Medius</li>
  </ul>
</div>

**4. Auf den Körper hören**
*   **Muskelkater** = normal (besonders bei neuen Übungen).
*   **Scharfer, stechender Schmerz** = SOFORT aufhören! Das ist keine Schwäche, das ist Intelligenz.
*   **Gelenkschmerzen** = Technik überprüfen, Gewicht reduzieren, Arzt aufsuchen.

---

### Was tun bei einer Verletzung? Die PECH-Regel

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">🏥 PECH-Regel (Erste Hilfe bei akuten Verletzungen)</h4>
  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>• <strong>P – Pause:</strong> Training sofort stoppen. Nicht "durchbeißen"!</li>
    <li>• <strong>E – Eis:</strong> Kühlen (20 Min on, 20 Min off) – reduziert Schwellung.</li>
    <li>• <strong>C – Compression:</strong> Bandage/Verband – verhindert übermäßiges Anschwellen.</li>
    <li>• <strong>H – Hochlegen:</strong> Betroffene Stelle über Herzhöhe lagern – fördert Rückfluss.</li>
  </ul>
  <p className="text-sm text-blue-700 dark:text-blue-300 mt-3"><strong>Wichtig:</strong> Bei starken Schmerzen, Schwellung oder Bewegungseinschränkung → Arzt aufsuchen!</p>
</div>

---

### Rehabilitation: Zurück zum Training

Wenn du verletzt warst, ist der Weg zurück genauso wichtig wie die Heilung selbst:

1.  **Ärztliche Freigabe abwarten** – Nicht voreilig zurückkehren.
2.  **Langsam anfangen** – Starte mit 50% deines vorherigen Arbeitsgewichts.
3.  **Schmerzfrei trainieren** – Wenn eine Übung schmerzt, finde eine Alternative.
4.  **Um die Verletzung herum trainieren** – Schulter verletzt? Trainiere Beine! Knie verletzt? Oberkörper ist frei.
5.  **Physiotherapie** – Investiere in professionelle Hilfe. Ein guter Physio ist Gold wert.

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">💡 Schmerzfreie Alternativen</h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
    <li>• Bankdrücken schmerzt? → Kurzhantel-Drücken (neutraler Griff), Floor Press</li>
    <li>• Kniebeugen schmerzen? → Beinpresse, Bulgarian Split Squats</li>
    <li>• Kreuzheben schmerzt? → Trap-Bar Deadlift, Hip Thrusts</li>
    <li>• Schulterdrücken schmerzt? → Landmine Press, Lateral Raises</li>
  </ul>
</div>
`,
    en: `
### Module 5.5: Injury Prevention & Rehabilitation

An injury is the **biggest enemy of progress**. Not a bad training plan, not suboptimal nutrition – an injury can set you back weeks or months. The good news: Most gym injuries are **preventable**.

---

### The Most Common Gym Injuries

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ The Top 4 Injury Zones</h4>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-3">
    <li><strong>1. Shoulder:</strong> Impingement, rotator cuff issues. Often from too much bench pressing without counter-work (rows, face pulls), poor overhead press form.</li>
    <li><strong>2. Lower Back:</strong> Herniated disc, muscle strain. Usually from rounding the back during deadlifts or squats, increasing weight too fast.</li>
    <li><strong>3. Knee:</strong> Patellar tendon issues, meniscus injuries. Often from squats with poor form, knees caving inward (valgus).</li>
    <li><strong>4. Elbow:</strong> Tennis/golfer's elbow (tendinitis). Common with too many bicep curls, tricep extensions, or too narrow grip width.</li>
  </ul>
</div>

---

### The Golden Rule: Technique > Weight

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">🏆 Priority Pyramid</h4>
  <ol className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
    <li><strong>1. Clean technique</strong> – Always. No exceptions. Better 60kg clean than 80kg with momentum.</li>
    <li><strong>2. Full range of motion (ROM)</strong> – Half reps = half results and higher injury risk.</li>
    <li><strong>3. Controlled speed</strong> – No jerking, no dropping. Especially control the eccentric phase (lowering).</li>
    <li><strong>4. Only then increase weight</strong> – When the above 3 points are solid, you may add more.</li>
  </ol>
</div>

**Your ego is your biggest enemy.** The guy bench pressing 150kg with his back arched like a cat will soon not be able to train at all. The guy with 80kg and perfect form will be stronger in 2 years.

---

### Prevention Strategies

**1. Balanced Training**
Always train agonist AND antagonist:

| Push | Pull |
|---|---|
| Bench Press | Rows |
| Shoulder Press | Face Pulls |
| Triceps | Biceps |
| Quads (Leg Extension) | Hamstrings (Leg Curl) |

*Rule of thumb: For every push exercise, do a pull exercise.*

**2. Build in Deload Weeks**
Every 4-6 weeks, one week with reduced weight (50-60% of normal working weight). This gives joints, tendons, and the nervous system time to recover.

**3. Pre-Hab Exercises**
Small exercises that strengthen weak points BEFORE they become injuries:

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🛡️ Top Pre-Hab Exercises</h4>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
    <li>• <strong>Face Pulls</strong> (3×15-20) – Shoulder health, rotator cuff</li>
    <li>• <strong>Band Pull-Aparts</strong> (3×20) – Upper back, scapular stability</li>
    <li>• <strong>External Rotation</strong> with light weight (3×15) – Rotator cuff</li>
    <li>• <strong>Dead Hangs</strong> (3×30 sec) – Shoulder decompression, grip strength</li>
    <li>• <strong>Plank + Side Plank</strong> (30-60 sec each) – Core stability</li>
    <li>• <strong>Banded Clamshells</strong> (3×15) – Hip stability, gluteus medius</li>
  </ul>
</div>

**4. Listen to Your Body**
*   **DOMS (sore muscles)** = normal (especially with new exercises).
*   **Sharp, stabbing pain** = STOP immediately! That's not weakness, that's intelligence.
*   **Joint pain** = Check technique, reduce weight, see a doctor.

---

### What to Do When Injured? The RICE Method

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">🏥 RICE Method (First Aid for Acute Injuries)</h4>
  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>• <strong>R – Rest:</strong> Stop training immediately. Don't "push through"!</li>
    <li>• <strong>I – Ice:</strong> Cool (20 min on, 20 min off) – reduces swelling.</li>
    <li>• <strong>C – Compression:</strong> Bandage/wrap – prevents excessive swelling.</li>
    <li>• <strong>E – Elevation:</strong> Raise affected area above heart level – promotes drainage.</li>
  </ul>
  <p className="text-sm text-blue-700 dark:text-blue-300 mt-3"><strong>Important:</strong> For severe pain, swelling, or limited range of motion → see a doctor!</p>
</div>

---

### Rehabilitation: Back to Training

When you've been injured, the way back is just as important as the healing itself:

1.  **Wait for medical clearance** – Don't rush back.
2.  **Start slow** – Begin with 50% of your previous working weight.
3.  **Train pain-free** – If an exercise hurts, find an alternative.
4.  **Train around the injury** – Shoulder injured? Train legs! Knee injured? Upper body is fair game.
5.  **Physical therapy** – Invest in professional help. A good physio is worth their weight in gold.

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">💡 Pain-Free Alternatives</h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
    <li>• Bench press hurts? → Dumbbell press (neutral grip), Floor press</li>
    <li>• Squats hurt? → Leg press, Bulgarian split squats</li>
    <li>• Deadlifts hurt? → Trap-bar deadlift, Hip thrusts</li>
    <li>• Shoulder press hurts? → Landmine press, Lateral raises</li>
  </ul>
</div>
`
  },

  task: {
    de: {
      title: 'Verletzungsprävention umsetzen',
      description: 'Integriere Präventionsmaßnahmen in dein Training.',
      checklist: [
        { text: 'Füge Face Pulls oder Band Pull-Aparts als Aufwärmübung zu deinem nächsten Training hinzu.' },
        { text: 'Überprüfe deine Technik: Filme dich bei einer Hauptübung und vergleiche mit Tutorials.' },
        { text: 'Plane eine Deload-Woche in den nächsten 4-6 Wochen ein.' },
        { text: 'Identifiziere ein Muskel-Ungleichgewicht (z.B. mehr Push als Pull?) und korrigiere es.' }
      ]
    },
    en: {
      title: 'Implement Injury Prevention',
      description: 'Integrate prevention measures into your training.',
      checklist: [
        { text: 'Add face pulls or band pull-aparts as warm-up to your next workout.' },
        { text: 'Check your form: Film yourself on a main exercise and compare with tutorials.' },
        { text: 'Schedule a deload week in the next 4-6 weeks.' },
        { text: 'Identify a muscle imbalance (e.g. more push than pull?) and correct it.' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was sind die 4 häufigsten Verletzungszonen im Gym?',
        back: 'Schulter, unterer Rücken, Knie und Ellenbogen.'
      },
      {
        front: 'Was ist die PECH-Regel?',
        back: 'Pause, Eis, Compression, Hochlegen – Erste Hilfe bei akuten Sportverletzungen.'
      },
      {
        front: 'Was ist die goldene Regel der Verletzungsprävention?',
        back: 'Technik > Gewicht. Immer. Lieber sauber und leichter als schwer und unsauber.'
      },
      {
        front: 'Was sind Pre-Hab Übungen?',
        back: 'Kleine Übungen (Face Pulls, Band Pull-Aparts, Dead Hangs), die Schwachstellen stärken, BEVOR sie zu Verletzungen werden.'
      }
    ],
    en: [
      {
        front: 'What are the 4 most common injury zones in the gym?',
        back: 'Shoulder, lower back, knee, and elbow.'
      },
      {
        front: 'What is the RICE method?',
        back: 'Rest, Ice, Compression, Elevation – first aid for acute sports injuries.'
      },
      {
        front: 'What is the golden rule of injury prevention?',
        back: 'Technique > Weight. Always. Better clean and lighter than heavy and sloppy.'
      },
      {
        front: 'What are pre-hab exercises?',
        back: 'Small exercises (face pulls, band pull-aparts, dead hangs) that strengthen weak points BEFORE they become injuries.'
      }
    ]
  }
};
