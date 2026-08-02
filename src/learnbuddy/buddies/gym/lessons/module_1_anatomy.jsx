import React from 'react';

export const anatomyLesson = {
  id: 'g1_m1_anatomy',
  title: { 
    en: '1.4 Basic Anatomy (Your Muscle Map)', 
    de: '1.4 Basis-Anatomie (Deine Muskel-Landkarte)' 
  },
  description: { 
    en: 'Learn the major muscle groups, their functions, and which exercises train them.', 
    de: 'Lerne die wichtigsten Muskelgruppen, ihre Funktionen und welche Übungen sie trainieren.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Deine Muskel-Landkarte 🗺️

Um effektiv zu trainieren, musst du verstehen, welche Muskeln du trainierst. Diese Lektion gibt dir eine Übersicht über die wichtigsten Muskelgruppen und ihre Funktionen.

<div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
  <p className="text-sm text-blue-800 dark:text-blue-200">
    <strong>💡 Warum ist Anatomie wichtig?</strong> Wenn du weißt, welcher Muskel welche Bewegung macht, 
    kannst du besser verstehen, warum eine Übung funktioniert – und wie du sie optimal ausführst. 
    Das ist die "Mind-Muscle-Connection"!
  </p>
</div>

---

### Oberkörper: Push (Drücken)

Diese Muskeln sind für alle Drückbewegungen verantwortlich.

<div className="space-y-6 my-6">

<div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-3 text-lg">💪 Pectoralis (Brustmuskel)</h4>
  
  <div className="mb-4">
    <p className="text-sm text-red-700 dark:text-red-300 mb-2">
      <strong>Funktion:</strong> Drückt den Arm nach vorne und zur Körpermitte.
    </p>
    <p className="text-sm text-red-700 dark:text-red-300">
      <strong>Alltagsbewegung:</strong> Tür aufdrücken, jemanden umarmen.
    </p>
  </div>

  <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded-lg">
    <p className="text-sm text-red-800 dark:text-red-200 font-semibold mb-2">Hauptübungen:</p>
    <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
      <li><strong>Bankdrücken</strong> (Flach, Schrägbank, Negativbank)</li>
      <li><strong>Liegestütze</strong> (Push-ups)</li>
      <li><strong>Dips</strong> (vorgebeugt für untere Brust)</li>
      <li><strong>Fliegende</strong> (Isolation für Dehnung)</li>
    </ul>
  </div>
</div>

<div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-3 text-lg">🎯 Deltoideus (Schulter)</h4>
  
  <div className="mb-4">
    <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
      <strong>Funktion:</strong> Hebt den Arm (vorne, seitlich, hinten). Hat 3 Anteile!
    </p>
    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1 list-disc list-inside">
      <li><strong>Vordere Schulter:</strong> Arm nach vorne heben</li>
      <li><strong>Seitliche Schulter:</strong> Arm zur Seite heben (für "breite" Schultern!)</li>
      <li><strong>Hintere Schulter:</strong> Arm nach hinten ziehen (wichtig für Haltung!)</li>
    </ul>
  </div>

  <div className="bg-orange-100 dark:bg-orange-900/40 p-4 rounded-lg">
    <p className="text-sm text-orange-800 dark:text-orange-200 font-semibold mb-2">Hauptübungen:</p>
    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1 list-disc list-inside">
      <li><strong>Überkopfdrücken</strong> (vordere + seitliche Schulter)</li>
      <li><strong>Seitheben</strong> (seitliche Schulter – essentiell!)</li>
      <li><strong>Face Pulls</strong> (hintere Schulter – für Gesundheit!)</li>
      <li><strong>Vorgebeugtes Seitheben</strong> (hintere Schulter)</li>
    </ul>
  </div>
</div>

<div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-lg">💥 Triceps (Armstrecker)</h4>
  
  <div className="mb-4">
    <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
      <strong>Funktion:</strong> Streckt den Arm. Macht ca. 2/3 der Armmasse aus!
    </p>
    <p className="text-sm text-amber-700 dark:text-amber-300">
      <strong>Fun Fact:</strong> Wenn du "große Arme" willst, trainiere den Trizeps mehr als den Bizeps!
    </p>
  </div>

  <div className="bg-amber-100 dark:bg-amber-900/40 p-4 rounded-lg">
    <p className="text-sm text-amber-800 dark:text-amber-200 font-semibold mb-2">Hauptübungen:</p>
    <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
      <li><strong>Enges Bankdrücken</strong> (Compound)</li>
      <li><strong>Dips</strong> (aufrecht, Ellenbogen eng)</li>
      <li><strong>Trizepsdrücken am Kabel</strong> (Isolation)</li>
      <li><strong>French Press / Skullcrushers</strong> (Isolation)</li>
    </ul>
  </div>
</div>

</div>

---

### Oberkörper: Pull (Ziehen)

Diese Muskeln sind für alle Ziehbewegungen verantwortlich.

<div className="space-y-6 my-6">

<div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg">🦅 Latissimus Dorsi ("Lats")</h4>
  
  <div className="mb-4">
    <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
      <strong>Funktion:</strong> Zieht den Arm nach unten und zum Körper. Der große Rückenmuskel für "Breite"!
    </p>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      <strong>Alltagsbewegung:</strong> Tür zuziehen, Klimmzug-Bewegung.
    </p>
  </div>

  <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded-lg">
    <p className="text-sm text-blue-800 dark:text-blue-200 font-semibold mb-2">Hauptübungen:</p>
    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
      <li><strong>Klimmzüge</strong> (Pull-ups / Chin-ups – König der Rückenübungen!)</li>
      <li><strong>Latzug</strong> (Lat Pulldown – Alternative zu Klimmzügen)</li>
      <li><strong>Einarmiges Rudern</strong> (mit Kurzhantel)</li>
    </ul>
  </div>
</div>

<div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-lg">🏔️ Trapezius & Rhomboiden (Oberer Rücken)</h4>
  
  <div className="mb-4">
    <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
      <strong>Funktion:</strong> Zieht die Schulterblätter zusammen. Wichtig für Haltung und "Dichte"!
    </p>
    <p className="text-sm text-purple-700 dark:text-purple-300">
      <strong>Trapezius (Nacken):</strong> Hebt die Schultern (Shrugs).
    </p>
  </div>

  <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded-lg">
    <p className="text-sm text-purple-800 dark:text-purple-200 font-semibold mb-2">Hauptübungen:</p>
    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
      <li><strong>Langhantel-Rudern</strong> (vorgebeugt)</li>
      <li><strong>Rudern am Kabel</strong> (sitzend)</li>
      <li><strong>T-Bar Rudern</strong></li>
      <li><strong>Shrugs</strong> (für Trapezius)</li>
    </ul>
  </div>
</div>

<div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3 text-lg">💪 Biceps (Armbeuger)</h4>
  
  <div className="mb-4">
    <p className="text-sm text-green-700 dark:text-green-300 mb-2">
      <strong>Funktion:</strong> Beugt den Arm. Der "Show-Muskel"!
    </p>
    <p className="text-sm text-green-700 dark:text-green-300">
      <strong>Wichtig:</strong> Wird bei allen Zug-Übungen mittrainiert. Braucht weniger Volumen als du denkst!
    </p>
  </div>

  <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded-lg">
    <p className="text-sm text-green-800 dark:text-green-200 font-semibold mb-2">Hauptübungen:</p>
    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
      <li><strong>Langhantel-Curls</strong> (Barbell Curls)</li>
      <li><strong>Kurzhantel-Curls</strong> (Dumbbell Curls)</li>
      <li><strong>Hammer Curls</strong> (für Brachialis – dickere Arme)</li>
      <li><strong>Schrägbank Curls</strong> (maximale Dehnung)</li>
    </ul>
  </div>
</div>

</div>

---

### Unterkörper: Die Kraftzentrale

Der Unterkörper enthält die größten und stärksten Muskeln deines Körpers!

<div className="space-y-6 my-6">

<div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
  <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3 text-lg">🦵 Quadriceps ("Quads")</h4>
  
  <div className="mb-4">
    <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">
      <strong>Funktion:</strong> Streckt das Knie. Oberschenkel-Vorderseite.
    </p>
    <p className="text-sm text-yellow-700 dark:text-yellow-300">
      <strong>Alltagsbewegung:</strong> Aufstehen, Treppensteigen, Springen.
    </p>
  </div>

  <div className="bg-yellow-100 dark:bg-yellow-900/40 p-4 rounded-lg">
    <p className="text-sm text-yellow-800 dark:text-yellow-200 font-semibold mb-2">Hauptübungen:</p>
    <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1 list-disc list-inside">
      <li><strong>Kniebeuge</strong> (Squat – König der Beinübungen!)</li>
      <li><strong>Frontkniebeuge</strong> (Front Squat – sehr Quad-lastig)</li>
      <li><strong>Beinpresse</strong> (Leg Press)</li>
      <li><strong>Ausfallschritte</strong> (Lunges)</li>
      <li><strong>Beinstrecker</strong> (Leg Extensions – Isolation)</li>
    </ul>
  </div>
</div>

<div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-3 text-lg">🏃 Hamstrings & Gluteus</h4>
  
  <div className="mb-4">
    <p className="text-sm text-red-700 dark:text-red-300 mb-2">
      <strong>Hamstrings:</strong> Oberschenkel-Rückseite. Beugt das Knie, streckt die Hüfte.
    </p>
    <p className="text-sm text-red-700 dark:text-red-300">
      <strong>Gluteus (Gesäß):</strong> Der stärkste Muskel des Körpers! Streckt die Hüfte.
    </p>
  </div>

  <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded-lg">
    <p className="text-sm text-red-800 dark:text-red-200 font-semibold mb-2">Hauptübungen:</p>
    <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
      <li><strong>Kreuzheben</strong> (Deadlift – trainiert die gesamte "hintere Kette"!)</li>
      <li><strong>Rumänisches Kreuzheben</strong> (RDL – Fokus Hamstrings)</li>
      <li><strong>Hip Thrusts</strong> (beste Übung für Gluteus!)</li>
      <li><strong>Beinbeuger</strong> (Leg Curls – Isolation Hamstrings)</li>
    </ul>
  </div>
</div>

<div className="p-6 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-3 text-lg">🦶 Waden (Gastrocnemius & Soleus)</h4>
  
  <div className="mb-4">
    <p className="text-sm text-stone-700 dark:text-stone-300 mb-2">
      <strong>Funktion:</strong> Streckt den Fuß (Zehenspitzenstand).
    </p>
    <p className="text-sm text-stone-700 dark:text-stone-300">
      <strong>Wichtig:</strong> Waden sind genetisch sehr unterschiedlich – manche haben es leichter!
    </p>
  </div>

  <div className="bg-stone-100 dark:bg-stone-800 p-4 rounded-lg">
    <p className="text-sm text-stone-800 dark:text-stone-200 font-semibold mb-2">Hauptübungen:</p>
    <ul className="text-sm text-stone-700 dark:text-stone-300 space-y-1 list-disc list-inside">
      <li><strong>Wadenheben Stehend</strong> (Standing Calf Raises – Gastrocnemius)</li>
      <li><strong>Wadenheben Sitzend</strong> (Seated Calf Raises – Soleus)</li>
    </ul>
  </div>
</div>

</div>

---

### Rumpf (Core): Die Stabilität

Der Core ist nicht nur "Sixpack" – er stabilisiert deinen gesamten Körper!

<div className="space-y-6 my-6">

<div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-l-4 border-indigo-500">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3 text-lg">📐 Rectus Abdominis (Bauchmuskeln)</h4>
  
  <div className="mb-4">
    <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-2">
      <strong>Funktion:</strong> Beugt den Rumpf nach vorne. Das "Sixpack"!
    </p>
    <p className="text-sm text-indigo-700 dark:text-indigo-300">
      <strong>Wichtig:</strong> Sichtbarkeit hängt von Körperfettanteil ab, nicht nur von Training!
    </p>
  </div>

  <div className="bg-indigo-100 dark:bg-indigo-900/40 p-4 rounded-lg">
    <p className="text-sm text-indigo-800 dark:text-indigo-200 font-semibold mb-2">Hauptübungen:</p>
    <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1 list-disc list-inside">
      <li><strong>Crunches</strong> (klassisch)</li>
      <li><strong>Beinheben</strong> (Leg Raises – unterer Bauch)</li>
      <li><strong>Ab-Wheel</strong> (Bauchroller – sehr effektiv!)</li>
    </ul>
  </div>
</div>

<div className="p-6 bg-teal-50 dark:bg-teal-900/20 rounded-lg border-l-4 border-teal-500">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-3 text-lg">🌀 Obliques (Seitliche Bauchmuskeln)</h4>
  
  <div className="mb-4">
    <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
      <strong>Funktion:</strong> Rotation und seitliche Beugung des Rumpfes.
    </p>
  </div>

  <div className="bg-teal-100 dark:bg-teal-900/40 p-4 rounded-lg">
    <p className="text-sm text-teal-800 dark:text-teal-200 font-semibold mb-2">Hauptübungen:</p>
    <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-1 list-disc list-inside">
      <li><strong>Russian Twists</strong></li>
      <li><strong>Seit-Plank</strong> (Side Plank)</li>
      <li><strong>Wood Chops</strong> (am Kabel)</li>
    </ul>
  </div>
</div>

<div className="p-6 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border-l-4 border-cyan-500">
  <h4 className="font-bold text-cyan-800 dark:text-cyan-200 mb-3 text-lg">🛡️ Core-Stabilität (Transversus & Co.)</h4>
  
  <div className="mb-4">
    <p className="text-sm text-cyan-700 dark:text-cyan-300 mb-2">
      <strong>Funktion:</strong> Stabilisiert den Rumpf bei allen Bewegungen. Tief liegende Muskeln!
    </p>
    <p className="text-sm text-cyan-700 dark:text-cyan-300">
      <strong>Wichtig:</strong> Wird bei Kniebeugen, Kreuzheben und Überkopfdrücken massiv mittrainiert!
    </p>
  </div>

  <div className="bg-cyan-100 dark:bg-cyan-900/40 p-4 rounded-lg">
    <p className="text-sm text-cyan-800 dark:text-cyan-200 font-semibold mb-2">Hauptübungen:</p>
    <ul className="text-sm text-cyan-700 dark:text-cyan-300 space-y-1 list-disc list-inside">
      <li><strong>Plank</strong> (Unterarmstütz – die Basis!)</li>
      <li><strong>Pallof Press</strong> (Anti-Rotation am Kabel)</li>
      <li><strong>Alle Grundübungen!</strong> (Kniebeuge, Kreuzheben, etc.)</li>
    </ul>
  </div>
</div>

</div>

---

### Zusammenfassung: Deine Muskel-Landkarte

<div className="my-6 p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl border border-red-200 dark:border-red-700">

#### ✅ Die wichtigsten Muskelgruppen:

**Oberkörper Push:**
- Brust (Pectoralis) → Bankdrücken, Liegestütze
- Schultern (Deltoideus) → Überkopfdrücken, Seitheben
- Trizeps → Dips, Trizepsdrücken

**Oberkörper Pull:**
- Rücken (Latissimus) → Klimmzüge, Latzug
- Oberer Rücken (Trapezius, Rhomboiden) → Rudern
- Bizeps → Curls

**Unterkörper:**
- Quads → Kniebeuge, Beinpresse
- Hamstrings & Gluteus → Kreuzheben, Hip Thrusts
- Waden → Wadenheben

**Core:**
- Bauch (Rectus Abdominis) → Crunches, Beinheben
- Seitlicher Bauch (Obliques) → Russian Twists
- Core-Stabilität → Plank, Grundübungen

</div>

**In der nächsten Lektion** lernst du, welche **Ausrüstung** du wirklich brauchst (und was nur Marketing ist)!

🗺️ **Jetzt kennst du deine Muskel-Landkarte!**
    `,
    en: `
### Your Muscle Map 🗺️

To train effectively, you need to understand which muscles you're training. This lesson gives you an overview of the major muscle groups and their functions.

<div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
  <p className="text-sm text-blue-800 dark:text-blue-200">
    <strong>💡 Why is anatomy important?</strong> When you know which muscle does which movement, 
    you can better understand why an exercise works – and how to perform it optimally. 
    That's the "mind-muscle connection"!
  </p>
</div>

---

### Upper Body: Push (Pressing)

These muscles are responsible for all pressing movements.

<div className="space-y-6 my-6">

<div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-3 text-lg">💪 Pectoralis (Chest)</h4>
  
  <div className="mb-4">
    <p className="text-sm text-red-700 dark:text-red-300 mb-2">
      <strong>Function:</strong> Pushes the arm forward and toward the body center.
    </p>
    <p className="text-sm text-red-700 dark:text-red-300">
      <strong>Daily movement:</strong> Pushing open a door, hugging someone.
    </p>
  </div>

  <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded-lg">
    <p className="text-sm text-red-800 dark:text-red-200 font-semibold mb-2">Main exercises:</p>
    <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
      <li><strong>Bench Press</strong> (Flat, Incline, Decline)</li>
      <li><strong>Push-ups</strong></li>
      <li><strong>Dips</strong> (leaning forward for lower chest)</li>
      <li><strong>Flys</strong> (isolation for stretch)</li>
    </ul>
  </div>
</div>

<div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-3 text-lg">🎯 Deltoideus (Shoulders)</h4>
  
  <div className="mb-4">
    <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
      <strong>Function:</strong> Lifts the arm (front, side, back). Has 3 parts!
    </p>
    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1 list-disc list-inside">
      <li><strong>Front shoulder:</strong> Lifts arm forward</li>
      <li><strong>Lateral shoulder:</strong> Lifts arm to side (for "wide" shoulders!)</li>
      <li><strong>Rear shoulder:</strong> Pulls arm backward (important for posture!)</li>
    </ul>
  </div>

  <div className="bg-orange-100 dark:bg-orange-900/40 p-4 rounded-lg">
    <p className="text-sm text-orange-800 dark:text-orange-200 font-semibold mb-2">Main exercises:</p>
    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1 list-disc list-inside">
      <li><strong>Overhead Press</strong> (front + lateral shoulder)</li>
      <li><strong>Lateral Raises</strong> (lateral shoulder – essential!)</li>
      <li><strong>Face Pulls</strong> (rear shoulder – for health!)</li>
      <li><strong>Bent-over Lateral Raises</strong> (rear shoulder)</li>
    </ul>
  </div>
</div>

<div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-lg">💥 Triceps (Arm Extensor)</h4>
  
  <div className="mb-4">
    <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
      <strong>Function:</strong> Extends the arm. Makes up about 2/3 of arm mass!
    </p>
    <p className="text-sm text-amber-700 dark:text-amber-300">
      <strong>Fun fact:</strong> If you want "big arms", train triceps more than biceps!
    </p>
  </div>

  <div className="bg-amber-100 dark:bg-amber-900/40 p-4 rounded-lg">
    <p className="text-sm text-amber-800 dark:text-amber-200 font-semibold mb-2">Main exercises:</p>
    <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
      <li><strong>Close-Grip Bench Press</strong> (compound)</li>
      <li><strong>Dips</strong> (upright, elbows close)</li>
      <li><strong>Cable Pushdowns</strong> (isolation)</li>
      <li><strong>French Press / Skullcrushers</strong> (isolation)</li>
    </ul>
  </div>
</div>

</div>

---

### Upper Body: Pull (Pulling)

These muscles are responsible for all pulling movements.

<div className="space-y-6 my-6">

<div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg">🦅 Latissimus Dorsi ("Lats")</h4>
  
  <div className="mb-4">
    <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
      <strong>Function:</strong> Pulls the arm down and to the body. The large back muscle for "width"!
    </p>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      <strong>Daily movement:</strong> Pulling a door closed, pull-up motion.
    </p>
  </div>

  <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded-lg">
    <p className="text-sm text-blue-800 dark:text-blue-200 font-semibold mb-2">Main exercises:</p>
    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
      <li><strong>Pull-ups / Chin-ups</strong> (king of back exercises!)</li>
      <li><strong>Lat Pulldown</strong> (alternative to pull-ups)</li>
      <li><strong>One-Arm Dumbbell Row</strong></li>
    </ul>
  </div>
</div>

<div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-lg">🏔️ Trapezius & Rhomboids (Upper Back)</h4>
  
  <div className="mb-4">
    <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
      <strong>Function:</strong> Pulls shoulder blades together. Important for posture and "thickness"!
    </p>
    <p className="text-sm text-purple-700 dark:text-purple-300">
      <strong>Trapezius (neck):</strong> Elevates shoulders (shrugs).
    </p>
  </div>

  <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded-lg">
    <p className="text-sm text-purple-800 dark:text-purple-200 font-semibold mb-2">Main exercises:</p>
    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
      <li><strong>Barbell Row</strong> (bent-over)</li>
      <li><strong>Seated Cable Row</strong></li>
      <li><strong>T-Bar Row</strong></li>
      <li><strong>Shrugs</strong> (for trapezius)</li>
    </ul>
  </div>
</div>

<div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3 text-lg">💪 Biceps (Arm Flexor)</h4>
  
  <div className="mb-4">
    <p className="text-sm text-green-700 dark:text-green-300 mb-2">
      <strong>Function:</strong> Flexes the arm. The "show muscle"!
    </p>
    <p className="text-sm text-green-700 dark:text-green-300">
      <strong>Important:</strong> Trained with all pulling exercises. Needs less volume than you think!
    </p>
  </div>

  <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded-lg">
    <p className="text-sm text-green-800 dark:text-green-200 font-semibold mb-2">Main exercises:</p>
    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
      <li><strong>Barbell Curls</strong></li>
      <li><strong>Dumbbell Curls</strong></li>
      <li><strong>Hammer Curls</strong> (for brachialis – thicker arms)</li>
      <li><strong>Incline Curls</strong> (maximum stretch)</li>
    </ul>
  </div>
</div>

</div>

---

### Lower Body: The Powerhouse

The lower body contains the largest and strongest muscles in your body!

<div className="space-y-6 my-6">

<div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
  <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3 text-lg">🦵 Quadriceps ("Quads")</h4>
  
  <div className="mb-4">
    <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">
      <strong>Function:</strong> Extends the knee. Front of thigh.
    </p>
    <p className="text-sm text-yellow-700 dark:text-yellow-300">
      <strong>Daily movement:</strong> Standing up, climbing stairs, jumping.
    </p>
  </div>

  <div className="bg-yellow-100 dark:bg-yellow-900/40 p-4 rounded-lg">
    <p className="text-sm text-yellow-800 dark:text-yellow-200 font-semibold mb-2">Main exercises:</p>
    <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1 list-disc list-inside">
      <li><strong>Squat</strong> (king of leg exercises!)</li>
      <li><strong>Front Squat</strong> (very quad-dominant)</li>
      <li><strong>Leg Press</strong></li>
      <li><strong>Lunges</strong></li>
      <li><strong>Leg Extensions</strong> (isolation)</li>
    </ul>
  </div>
</div>

<div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-3 text-lg">🏃 Hamstrings & Glutes</h4>
  
  <div className="mb-4">
    <p className="text-sm text-red-700 dark:text-red-300 mb-2">
      <strong>Hamstrings:</strong> Back of thigh. Flexes knee, extends hip.
    </p>
    <p className="text-sm text-red-700 dark:text-red-300">
      <strong>Glutes (buttocks):</strong> The strongest muscle in the body! Extends hip.
    </p>
  </div>

  <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded-lg">
    <p className="text-sm text-red-800 dark:text-red-200 font-semibold mb-2">Main exercises:</p>
    <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
      <li><strong>Deadlift</strong> (trains entire "posterior chain"!)</li>
      <li><strong>Romanian Deadlift</strong> (RDL – hamstring focus)</li>
      <li><strong>Hip Thrusts</strong> (best exercise for glutes!)</li>
      <li><strong>Leg Curls</strong> (hamstring isolation)</li>
    </ul>
  </div>
</div>

<div className="p-6 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-3 text-lg">🦶 Calves (Gastrocnemius & Soleus)</h4>
  
  <div className="mb-4">
    <p className="text-sm text-stone-700 dark:text-stone-300 mb-2">
      <strong>Function:</strong> Extends the foot (standing on toes).
    </p>
    <p className="text-sm text-stone-700 dark:text-stone-300">
      <strong>Important:</strong> Calves are very genetic – some have it easier!
    </p>
  </div>

  <div className="bg-stone-100 dark:bg-stone-800 p-4 rounded-lg">
    <p className="text-sm text-stone-800 dark:text-stone-200 font-semibold mb-2">Main exercises:</p>
    <ul className="text-sm text-stone-700 dark:text-stone-300 space-y-1 list-disc list-inside">
      <li><strong>Standing Calf Raises</strong> (gastrocnemius)</li>
      <li><strong>Seated Calf Raises</strong> (soleus)</li>
    </ul>
  </div>
</div>

</div>

---

### Core: Stability

The core isn't just "six-pack" – it stabilizes your entire body!

<div className="space-y-6 my-6">

<div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-l-4 border-indigo-500">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3 text-lg">📐 Rectus Abdominis (Abs)</h4>
  
  <div className="mb-4">
    <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-2">
      <strong>Function:</strong> Flexes trunk forward. The "six-pack"!
    </p>
    <p className="text-sm text-indigo-700 dark:text-indigo-300">
      <strong>Important:</strong> Visibility depends on body fat percentage, not just training!
    </p>
  </div>

  <div className="bg-indigo-100 dark:bg-indigo-900/40 p-4 rounded-lg">
    <p className="text-sm text-indigo-800 dark:text-indigo-200 font-semibold mb-2">Main exercises:</p>
    <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1 list-disc list-inside">
      <li><strong>Crunches</strong> (classic)</li>
      <li><strong>Leg Raises</strong> (lower abs)</li>
      <li><strong>Ab-Wheel</strong> (very effective!)</li>
    </ul>
  </div>
</div>

<div className="p-6 bg-teal-50 dark:bg-teal-900/20 rounded-lg border-l-4 border-teal-500">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-3 text-lg">🌀 Obliques (Side Abs)</h4>
  
  <div className="mb-4">
    <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
      <strong>Function:</strong> Rotation and lateral flexion of trunk.
    </p>
  </div>

  <div className="bg-teal-100 dark:bg-teal-900/40 p-4 rounded-lg">
    <p className="text-sm text-teal-800 dark:text-teal-200 font-semibold mb-2">Main exercises:</p>
    <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-1 list-disc list-inside">
      <li><strong>Russian Twists</strong></li>
      <li><strong>Side Plank</strong></li>
      <li><strong>Wood Chops</strong> (cable)</li>
    </ul>
  </div>
</div>

<div className="p-6 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border-l-4 border-cyan-500">
  <h4 className="font-bold text-cyan-800 dark:text-cyan-200 mb-3 text-lg">🛡️ Core Stability (Transversus & Co.)</h4>
  
  <div className="mb-4">
    <p className="text-sm text-cyan-700 dark:text-cyan-300 mb-2">
      <strong>Function:</strong> Stabilizes trunk during all movements. Deep muscles!
    </p>
    <p className="text-sm text-cyan-700 dark:text-cyan-300">
      <strong>Important:</strong> Massively trained during squats, deadlifts, and overhead press!
    </p>
  </div>

  <div className="bg-cyan-100 dark:bg-cyan-900/40 p-4 rounded-lg">
    <p className="text-sm text-cyan-800 dark:text-cyan-200 font-semibold mb-2">Main exercises:</p>
    <ul className="text-sm text-cyan-700 dark:text-cyan-300 space-y-1 list-disc list-inside">
      <li><strong>Plank</strong> (the foundation!)</li>
      <li><strong>Pallof Press</strong> (anti-rotation cable)</li>
      <li><strong>All compound exercises!</strong> (squat, deadlift, etc.)</li>
    </ul>
  </div>
</div>

</div>

---

### Summary: Your Muscle Map

<div className="my-6 p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl border border-red-200 dark:border-red-700">

#### ✅ The major muscle groups:

**Upper Body Push:**
- Chest (Pectoralis) → Bench press, push-ups
- Shoulders (Deltoideus) → Overhead press, lateral raises
- Triceps → Dips, tricep pushdowns

**Upper Body Pull:**
- Back (Latissimus) → Pull-ups, lat pulldown
- Upper back (Trapezius, Rhomboids) → Rows
- Biceps → Curls

**Lower Body:**
- Quads → Squat, leg press
- Hamstrings & Glutes → Deadlift, hip thrusts
- Calves → Calf raises

**Core:**
- Abs (Rectus Abdominis) → Crunches, leg raises
- Side abs (Obliques) → Russian twists
- Core stability → Plank, compound exercises

</div>

**In the next lesson** you'll learn which **equipment** you really need (and what's just marketing)!

🗺️ **Now you know your muscle map!**
    `
  },

  task: {
    de: {
      title: 'Muskel-Mapping: Fühle deine Muskeln',
      description: 'Lerne, deine Muskeln bewusst wahrzunehmen – die Basis für Mind-Muscle-Connection.',
      checklist: [
        { text: 'Mache 10 Liegestütze und konzentriere dich darauf, wo du die Brust spürst' },
        { text: 'Mache 10 Bodyweight-Squats und spüre, wo die Quads arbeiten' },
        { text: 'Hänge dich an eine Klimmzugstange (oder halte dich fest) und spüre, wie der Latissimus aktiviert wird' },
        { text: 'Mache einen 30-Sekunden-Plank und spüre, welche Core-Muskeln arbeiten' },
        { text: 'Notiere dir: Welche Muskeln konntest du am besten spüren? Welche weniger?' }
      ]
    },
    en: {
      title: 'Muscle Mapping: Feel Your Muscles',
      description: 'Learn to consciously perceive your muscles – the foundation for mind-muscle connection.',
      checklist: [
        { text: 'Do 10 push-ups and focus on where you feel your chest' },
        { text: 'Do 10 bodyweight squats and feel where your quads are working' },
        { text: 'Hang from a pull-up bar (or hold on) and feel how your lats activate' },
        { text: 'Do a 30-second plank and feel which core muscles are working' },
        { text: 'Note down: Which muscles could you feel best? Which less?' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Welche 3 Muskelgruppen gehören zum "Push" (Drücken)?',
        back: '1. Pectoralis (Brust)\n2. Deltoideus (Schulter – 3 Anteile!)\n3. Triceps (Armstrecker – 2/3 der Armmasse!)'
      },
      {
        front: 'Welche 3 Muskelgruppen gehören zum "Pull" (Ziehen)?',
        back: '1. Latissimus Dorsi (Lats – für Breite)\n2. Trapezius & Rhomboiden (oberer Rücken – für Dichte)\n3. Biceps (Armbeuger)'
      },
      {
        front: 'Was sind die 3 Hauptmuskelgruppen des Unterkörpers?',
        back: '1. Quadriceps (Quads – Oberschenkel-Vorderseite)\n2. Hamstrings & Gluteus (Oberschenkel-Rückseite & Gesäß)\n3. Waden (Gastrocnemius & Soleus)'
      },
      {
        front: 'Welche Übung trainiert die meisten Muskeln gleichzeitig?',
        back: 'Kreuzheben (Deadlift) – trainiert die gesamte "hintere Kette": Rücken, Gluteus, Hamstrings, Core, Unterarme, Trapezius'
      },
      {
        front: 'Was ist der Unterschied zwischen Latissimus und Trapezius?',
        back: 'Latissimus: Großer Rückenmuskel für "Breite" (vertikales Ziehen: Klimmzüge)\nTrapezius: Oberer Rücken/Nacken für "Dichte" (horizontales Ziehen: Rudern, Shrugs)'
      },
      {
        front: 'Warum ist der Core wichtiger als nur für ein "Sixpack"?',
        back: 'Der Core stabilisiert den gesamten Körper bei allen Bewegungen. Er wird massiv bei Kniebeugen, Kreuzheben und Überkopfdrücken mittrainiert. Stabilität > Ästhetik!'
      }
    ],
    en: [
      {
        front: 'Which 3 muscle groups belong to "Push" (pressing)?',
        back: '1. Pectoralis (chest)\n2. Deltoideus (shoulders – 3 parts!)\n3. Triceps (arm extensor – 2/3 of arm mass!)'
      },
      {
        front: 'Which 3 muscle groups belong to "Pull" (pulling)?',
        back: '1. Latissimus Dorsi (lats – for width)\n2. Trapezius & Rhomboids (upper back – for thickness)\n3. Biceps (arm flexor)'
      },
      {
        front: 'What are the 3 main muscle groups of the lower body?',
        back: '1. Quadriceps (quads – front of thigh)\n2. Hamstrings & Glutes (back of thigh & buttocks)\n3. Calves (gastrocnemius & soleus)'
      },
      {
        front: 'Which exercise trains the most muscles simultaneously?',
        back: 'Deadlift – trains the entire "posterior chain": back, glutes, hamstrings, core, forearms, trapezius'
      },
      {
        front: 'What is the difference between latissimus and trapezius?',
        back: 'Latissimus: Large back muscle for "width" (vertical pulling: pull-ups)\nTrapezius: Upper back/neck for "thickness" (horizontal pulling: rows, shrugs)'
      },
      {
        front: 'Why is the core more important than just for a "six-pack"?',
        back: 'The core stabilizes the entire body during all movements. It\'s massively trained during squats, deadlifts, and overhead press. Stability > aesthetics!'
      }
    ]
  }
};


