import React from 'react';

export const safetyLesson = {
  id: 'g1_m1_safety',
  title: { 
    en: '1.2 Safety & Gym Etiquette', 
    de: '1.2 Sicherheit & Studio-Etikette' 
  },
  description: { 
    en: 'Learn the most important safety rules, how to fail safely, and the unwritten laws of the gym.', 
    de: 'Lerne die wichtigsten Sicherheitsregeln, wie man sicher "failt" und die ungeschriebenen Gesetze des Studios.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Das Wichtigste zuerst: Verletzungsprävention 🛡️

Krafttraining ist sicher – wenn du es richtig machst. Die meisten Verletzungen im Gym passieren nicht durch schwere Gewichte, sondern durch **schlechte Technik, fehlendes Aufwärmen und Ego**.

<div className="my-6 p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">

### ⚠️ Die goldene Regel

<div className="text-2xl font-bold text-red-800 dark:text-red-200 my-4">
  TECHNIK > GEWICHT!
</div>

<p className="text-red-700 dark:text-red-300">
  Das Ego an der Tür lassen. Niemand im Studio interessiert sich dafür, wie viel du hebst. 
  Aber alle werden es bemerken, wenn du dich verletzt, weil du zu schwer trainiert hast.
</p>

</div>

---

### Die 5 Grundregeln der Sicherheit

<div className="space-y-4 my-6">

<div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
    <span className="text-2xl">🔥</span> 1. Immer aufwärmen!
  </h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
    <strong>Warum?</strong> Kalte Muskeln, Sehnen und Gelenke sind anfällig für Verletzungen. 
    Ein gutes Warm-Up erhöht die Durchblutung, macht Gelenke geschmeidig und bereitet das Nervensystem vor.
  </p>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    <strong>Wie?</strong> 5-10 Min leichtes Cardio + dynamisches Dehnen + Aufwärmsätze mit leichten Gewichten.
  </p>
</div>

<div className="p-5 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
    <span className="text-2xl">👂</span> 2. Höre auf deinen Körper
  </h4>
  <div className="space-y-3">
    <div>
      <p className="text-sm font-semibold text-green-800 dark:text-green-200">✅ Muskelkater (OK):</p>
      <p className="text-sm text-green-700 dark:text-green-300">
        Dumpfer, verzögerter Schmerz (24-48h nach Training). Das ist normal – Mikrorisse in den Muskeln heilen.
      </p>
    </div>
    <div>
      <p className="text-sm font-semibold text-red-800 dark:text-red-200">❌ Verletzungsschmerz (STOPP!):</p>
      <p className="text-sm text-red-700 dark:text-red-300">
        Stechend, plötzlich, während oder direkt nach der Übung. Sofort abbrechen! Nicht "durchbeißen"!
      </p>
    </div>
  </div>
</div>

<div className="p-5 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3 flex items-center gap-2">
    <span className="text-2xl">📏</span> 3. Voller Bewegungsumfang (ROM)
  </h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
    <strong>Range of Motion (ROM)</strong> bedeutet: Die Übung über den vollen, natürlichen Bewegungsumfang ausführen.
  </p>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    <strong>Warum?</strong> Halbe Bewegungen = halbe Ergebnisse. Voller ROM trainiert den Muskel komplett und hält Gelenke gesund.
  </p>
  <p className="text-sm text-purple-700 dark:text-purple-300 mt-2">
    <strong>Beispiel:</strong> Bei Kniebeugen bis parallel (Oberschenkel waagerecht) oder tiefer – nicht nur 10cm runter!
  </p>
</div>

<div className="p-5 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-3 flex items-center gap-2">
    <span className="text-2xl">🐌</span> 4. Kontrollierte Bewegungen
  </h4>
  <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
    Keine Schwung-Bewegungen! Das Gewicht kontrolliert heben UND senken.
  </p>
  <p className="text-sm text-orange-700 dark:text-orange-300">
    <strong>Faustregel:</strong> 2 Sekunden hoch (konzentrisch), 2-3 Sekunden runter (exzentrisch). 
    Die exzentrische Phase (Ablassen) ist besonders wichtig für Muskelwachstum!
  </p>
</div>

<div className="p-5 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
    <span className="text-2xl">🔒</span> 5. Sicherheits-Clips nutzen
  </h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Bei Langhantel-Übungen (Bankdrücken, Kniebeuge) IMMER Sicherheits-Clips an den Enden der Stange anbringen. 
    Sonst können die Gewichte abrutschen – extrem gefährlich!
  </p>
</div>

</div>

---

### Richtiges "Failen" – Gewicht sicher ablegen

Es wird passieren: Du schaffst die letzte Wiederholung nicht. Das ist normal! Aber du musst wissen, wie du das Gewicht sicher ablegst.

<div className="grid md:grid-cols-2 gap-6 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-3 flex items-center gap-2">
    <span className="text-2xl">🏋️</span> Bankdrücken
  </h4>
  <div className="space-y-3 text-sm text-stone-700 dark:text-stone-300">
    <div>
      <p className="font-semibold mb-1">Option 1: "Roll of Shame"</p>
      <p>Wenn du alleine trainierst und keine Sicherheitsablagen hast: Stange kontrolliert auf die Brust ablassen, 
      dann über Bauch und Hüfte abrollen. Nicht elegant, aber sicher!</p>
    </div>
    <div>
      <p className="font-semibold mb-1">Option 2: Sicherheitsablagen</p>
      <p>Im Power Rack oder an der Multipresse: Sicherheitsablagen auf Brusthöhe einstellen. 
      Wenn du nicht mehr kannst, Stange einfach ablegen.</p>
    </div>
    <div>
      <p className="font-semibold mb-1">Option 3: Spotter</p>
      <p>Jemanden bitten, dich zu sichern (siehe unten).</p>
    </div>
  </div>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-3 flex items-center gap-2">
    <span className="text-2xl">🦵</span> Kniebeuge
  </h4>
  <div className="space-y-3 text-sm text-stone-700 dark:text-stone-300">
    <div>
      <p className="font-semibold mb-1">Im Rack (Power Rack/Squat Rack):</p>
      <p>Sicherheitsablagen auf Hüfthöhe einstellen. Wenn du nicht mehr kannst: 
      In die Hocke gehen, Stange auf den Ablagen ablegen, dann nach vorne rausgehen.</p>
    </div>
    <div>
      <p className="font-semibold mb-1">Notfall (ohne Rack):</p>
      <p>Gewicht kontrolliert nach hinten abwerfen (nicht nach vorne!). 
      Deshalb IMMER im Rack trainieren, wenn möglich!</p>
    </div>
  </div>
</div>

</div>

<div className="my-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
  <p className="text-sm text-yellow-800 dark:text-yellow-200">
    <strong>💡 Profi-Tipp:</strong> Trainiere schwere Sätze (besonders Bankdrücken und Kniebeuge) IMMER mit Sicherheitsablagen oder einem Spotter. 
    Lieber einmal zu vorsichtig als einmal im Krankenhaus!
  </p>
</div>

---

### Spotting – Den Partner sichern

Ein "Spotter" ist jemand, der dich bei schweren Übungen sichert. Das ist Teamwork!

<div className="my-6 bg-stone-50 dark:bg-stone-900 p-6 rounded-xl border border-stone-200 dark:border-stone-700">

#### 🤝 Wann brauchst du einen Spotter?

- **Bankdrücken** (besonders schwere Sätze oder Muskelversagen)
- **Kniebeuge** (wenn kein Rack mit Sicherheitsablagen)
- **Überkopfdrücken** (optional, bei sehr schweren Gewichten)

#### 📋 Kommunikation ist der Schlüssel:

<div className="grid md:grid-cols-2 gap-4 mt-4">

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
  <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Bevor du startest, sage:</p>
  <ul className="text-sm space-y-1 text-blue-700 dark:text-blue-300 list-disc list-inside">
    <li>"Ich mache 8 Wiederholungen"</li>
    <li>"Hilf mir nur, wenn ich stecken bleibe"</li>
    <li>"Greif nicht ein, außer ich sage 'Hilfe!'"</li>
  </ul>
</div>

<div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
  <p className="font-semibold text-green-800 dark:text-green-200 mb-2">Als Spotter:</p>
  <ul className="text-sm space-y-1 text-green-700 dark:text-green-300 list-disc list-inside">
    <li>Stehe bereit, aber greife nicht zu früh ein</li>
    <li>Nur leicht unterstützen, nicht hochreißen!</li>
    <li>Beim Bankdrücken: An der Stange greifen, nicht an den Armen</li>
  </ul>
</div>

</div>

</div>

---

### Studio-Etikette: Die ungeschriebenen Regeln

Das Gym ist ein gemeinsamer Raum. Respekt und Rücksicht machen das Training für alle angenehmer.

<div className="space-y-4 my-6">

<div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
  <div className="text-3xl flex-shrink-0">🧹</div>
  <div>
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">1. Gewichte zurückräumen</h4>
    <p className="text-sm text-green-700 dark:text-green-300">
      Die wichtigste Regel! Räume ALLE Gewichte nach Benutzung zurück. 
      Niemand will deine 100kg-Hantel abräumen, bevor er trainieren kann.
    </p>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
  <div className="text-3xl flex-shrink-0">🧼</div>
  <div>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">2. Handtuch benutzen & desinfizieren</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      Lege ein Handtuch auf Bänke/Geräte. Nach Benutzung: Gerät mit Desinfektionsmittel abwischen. 
      Niemand will in deinem Schweiß liegen!
    </p>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
  <div className="text-3xl flex-shrink-0">📱</div>
  <div>
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">3. Keine Geräte "campieren"</h4>
    <p className="text-sm text-purple-700 dark:text-purple-300">
      Pausen sind wichtig, aber mache sie NEBEN dem Gerät, nicht darauf sitzend. 
      5 Minuten am Handy auf der Bank = andere können nicht trainieren.
    </p>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700">
  <div className="text-3xl flex-shrink-0">🤝</div>
  <div>
    <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">4. Höflich fragen & abwechseln</h4>
    <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
      Wenn jemand ein Gerät benutzt, das du brauchst:
    </p>
    <p className="text-sm text-orange-700 dark:text-orange-300">
      "Wie viele Sätze hast du noch?" oder "Können wir uns abwechseln?" 
      Die meisten sind freundlich und teilen gerne!
    </p>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
  <div className="text-3xl flex-shrink-0">🔇</div>
  <div>
    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">5. Lautstärke respektieren</h4>
    <p className="text-sm text-red-700 dark:text-red-300">
      Musik über Kopfhörer, nicht über Lautsprecher. Gewichte kontrolliert ablegen, nicht fallen lassen 
      (außer beim Kreuzheben – da ist es manchmal unvermeidbar). Kein lautes Grunzen (außer bei Maximalversuchen).
    </p>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <div className="text-3xl flex-shrink-0">👀</div>
  <div>
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">6. Nicht starren</h4>
    <p className="text-sm text-stone-700 dark:text-stone-300">
      Jeder ist im Studio, um zu trainieren – nicht um angestarrt zu werden. 
      Fokussiere dich auf dein Training. Kopfhörer helfen!
    </p>
  </div>
</div>

</div>

---

### Zusammenfassung: Sicher & respektvoll trainieren

<div className="my-6 p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl border border-red-200 dark:border-red-700">

#### ✅ Deine Sicherheits-Checkliste:

1. **Immer aufwärmen** (5-10 Min + Aufwärmsätze)
2. **Technik > Gewicht** (perfekte Form ist wichtiger!)
3. **Höre auf deinen Körper** (Schmerz ≠ Muskelkater)
4. **Nutze Sicherheitsablagen** bei schweren Übungen
5. **Räume Gewichte zurück** und desinfiziere Geräte
6. **Sei höflich** und respektiere andere

</div>

**In der nächsten Lektion** lernst du das fundamentale Vokabular des Krafttrainings – das **Gym-ABC**. 
Damit verstehst du, wovon alle reden!

🛡️ **Sicher trainieren = langfristig trainieren!**
    `,
    en: `
### First Things First: Injury Prevention 🛡️

Strength training is safe – when done correctly. Most gym injuries don't happen because of heavy weights, but because of **poor technique, lack of warm-up, and ego**.

<div className="my-6 p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">

### ⚠️ The Golden Rule

<div className="text-2xl font-bold text-red-800 dark:text-red-200 my-4">
  TECHNIQUE > WEIGHT!
</div>

<p className="text-red-700 dark:text-red-300">
  Leave your ego at the door. Nobody in the gym cares how much you lift. 
  But everyone will notice when you get injured because you trained too heavy.
</p>

</div>

---

### The 5 Basic Safety Rules

<div className="space-y-4 my-6">

<div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
    <span className="text-2xl">🔥</span> 1. Always Warm Up!
  </h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
    <strong>Why?</strong> Cold muscles, tendons, and joints are prone to injury. 
    A good warm-up increases blood flow, lubricates joints, and prepares the nervous system.
  </p>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    <strong>How?</strong> 5-10 min light cardio + dynamic stretching + warm-up sets with light weights.
  </p>
</div>

<div className="p-5 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
    <span className="text-2xl">👂</span> 2. Listen to Your Body
  </h4>
  <div className="space-y-3">
    <div>
      <p className="text-sm font-semibold text-green-800 dark:text-green-200">✅ Muscle Soreness (OK):</p>
      <p className="text-sm text-green-700 dark:text-green-300">
        Dull, delayed pain (24-48h after training). This is normal – micro-tears in muscles healing.
      </p>
    </div>
    <div>
      <p className="text-sm font-semibold text-red-800 dark:text-red-200">❌ Injury Pain (STOP!):</p>
      <p className="text-sm text-red-700 dark:text-red-300">
        Sharp, sudden, during or right after exercise. Stop immediately! Don't "push through"!
      </p>
    </div>
  </div>
</div>

<div className="p-5 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3 flex items-center gap-2">
    <span className="text-2xl">📏</span> 3. Full Range of Motion (ROM)
  </h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
    <strong>Range of Motion (ROM)</strong> means: Perform the exercise through the full, natural movement range.
  </p>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    <strong>Why?</strong> Half movements = half results. Full ROM trains the muscle completely and keeps joints healthy.
  </p>
  <p className="text-sm text-purple-700 dark:text-purple-300 mt-2">
    <strong>Example:</strong> For squats, go to parallel (thighs horizontal) or deeper – not just 10cm down!
  </p>
</div>

<div className="p-5 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-3 flex items-center gap-2">
    <span className="text-2xl">🐌</span> 4. Controlled Movements
  </h4>
  <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
    No momentum! Control the weight both lifting AND lowering.
  </p>
  <p className="text-sm text-orange-700 dark:text-orange-300">
    <strong>Rule of thumb:</strong> 2 seconds up (concentric), 2-3 seconds down (eccentric). 
    The eccentric phase (lowering) is especially important for muscle growth!
  </p>
</div>

<div className="p-5 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
    <span className="text-2xl">🔒</span> 5. Use Safety Clips
  </h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    For barbell exercises (bench press, squat) ALWAYS attach safety clips to the ends of the bar. 
    Otherwise weights can slide off – extremely dangerous!
  </p>
</div>

</div>

---

### Proper "Failing" – Safely Dropping Weight

It will happen: you can't complete the last rep. That's normal! But you need to know how to safely drop the weight.

<div className="grid md:grid-cols-2 gap-6 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-3 flex items-center gap-2">
    <span className="text-2xl">🏋️</span> Bench Press
  </h4>
  <div className="space-y-3 text-sm text-stone-700 dark:text-stone-300">
    <div>
      <p className="font-semibold mb-1">Option 1: "Roll of Shame"</p>
      <p>If training alone without safety bars: Lower bar to chest in control, 
      then roll it over stomach and hips. Not elegant, but safe!</p>
    </div>
    <div>
      <p className="font-semibold mb-1">Option 2: Safety Bars</p>
      <p>In a power rack or smith machine: Set safety bars at chest height. 
      When you can't continue, just lower the bar.</p>
    </div>
    <div>
      <p className="font-semibold mb-1">Option 3: Spotter</p>
      <p>Ask someone to spot you (see below).</p>
    </div>
  </div>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-3 flex items-center gap-2">
    <span className="text-2xl">🦵</span> Squat
  </h4>
  <div className="space-y-3 text-sm text-stone-700 dark:text-stone-300">
    <div>
      <p className="font-semibold mb-1">In a Rack (Power/Squat Rack):</p>
      <p>Set safety bars at hip height. When you can't continue: 
      Squat down, rest bar on safety bars, then step forward out.</p>
    </div>
    <div>
      <p className="font-semibold mb-1">Emergency (without rack):</p>
      <p>Drop weight backwards in control (not forward!). 
      That's why ALWAYS train in a rack when possible!</p>
    </div>
  </div>
</div>

</div>

<div className="my-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
  <p className="text-sm text-yellow-800 dark:text-yellow-200">
    <strong>💡 Pro Tip:</strong> Train heavy sets (especially bench press and squat) ALWAYS with safety bars or a spotter. 
    Better once too cautious than once in the hospital!
  </p>
</div>

---

### Spotting – Securing Your Partner

A "spotter" is someone who secures you during heavy exercises. It's teamwork!

<div className="my-6 bg-stone-50 dark:bg-stone-900 p-6 rounded-xl border border-stone-200 dark:border-stone-700">

#### 🤝 When do you need a spotter?

- **Bench Press** (especially heavy sets or training to failure)
- **Squat** (if no rack with safety bars)
- **Overhead Press** (optional, for very heavy weights)

#### 📋 Communication is key:

<div className="grid md:grid-cols-2 gap-4 mt-4">

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
  <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Before you start, say:</p>
  <ul className="text-sm space-y-1 text-blue-700 dark:text-blue-300 list-disc list-inside">
    <li>"I'm doing 8 reps"</li>
    <li>"Only help if I get stuck"</li>
    <li>"Don't intervene unless I say 'Help!'"</li>
  </ul>
</div>

<div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
  <p className="font-semibold text-green-800 dark:text-green-200 mb-2">As a spotter:</p>
  <ul className="text-sm space-y-1 text-green-700 dark:text-green-300 list-disc list-inside">
    <li>Be ready, but don't intervene too early</li>
    <li>Only assist lightly, don't yank it up!</li>
    <li>For bench press: Grip the bar, not the arms</li>
  </ul>
</div>

</div>

</div>

---

### Gym Etiquette: The Unwritten Rules

The gym is a shared space. Respect and consideration make training pleasant for everyone.

<div className="space-y-4 my-6">

<div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
  <div className="text-3xl flex-shrink-0">🧹</div>
  <div>
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">1. Re-rack Weights</h4>
    <p className="text-sm text-green-700 dark:text-green-300">
      The most important rule! Return ALL weights after use. 
      Nobody wants to unload your 100kg barbell before they can train.
    </p>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
  <div className="text-3xl flex-shrink-0">🧼</div>
  <div>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">2. Use Towel & Disinfect</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      Place a towel on benches/equipment. After use: wipe equipment with disinfectant. 
      Nobody wants to lie in your sweat!
    </p>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
  <div className="text-3xl flex-shrink-0">📱</div>
  <div>
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">3. Don't "Camp" on Equipment</h4>
    <p className="text-sm text-purple-700 dark:text-purple-300">
      Rest periods are important, but take them NEXT TO the equipment, not sitting on it. 
      5 minutes on your phone on the bench = others can't train.
    </p>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700">
  <div className="text-3xl flex-shrink-0">🤝</div>
  <div>
    <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">4. Ask Politely & Share</h4>
    <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
      If someone is using equipment you need:
    </p>
    <p className="text-sm text-orange-700 dark:text-orange-300">
      "How many sets do you have left?" or "Can we work in together?" 
      Most people are friendly and happy to share!
    </p>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
  <div className="text-3xl flex-shrink-0">🔇</div>
  <div>
    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">5. Respect Volume Levels</h4>
    <p className="text-sm text-red-700 dark:text-red-300">
      Music through headphones, not speakers. Lower weights in control, don't drop them 
      (except deadlifts – sometimes unavoidable). No loud grunting (except max attempts).
    </p>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <div className="text-3xl flex-shrink-0">👀</div>
  <div>
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">6. Don't Stare</h4>
    <p className="text-sm text-stone-700 dark:text-stone-300">
      Everyone is at the gym to train – not to be stared at. 
      Focus on your training. Headphones help!
    </p>
  </div>
</div>

</div>

---

### Summary: Train Safely & Respectfully

<div className="my-6 p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl border border-red-200 dark:border-red-700">

#### ✅ Your Safety Checklist:

1. **Always warm up** (5-10 min + warm-up sets)
2. **Technique > Weight** (perfect form is more important!)
3. **Listen to your body** (pain ≠ muscle soreness)
4. **Use safety bars** for heavy exercises
5. **Re-rack weights** and disinfect equipment
6. **Be polite** and respect others

</div>

**In the next lesson** you'll learn the fundamental vocabulary of strength training – the **Gym ABC**. 
Then you'll understand what everyone is talking about!

🛡️ **Train safely = train long-term!**
    `
  },

  task: {
    de: {
      title: 'Sicherheits-Check: Lerne die Notfall-Prozeduren',
      description: 'Sicherheit geht vor! Mache dich mit den Sicherheitsvorkehrungen deines Studios vertraut.',
      checklist: [
        { text: 'Finde heraus, wo die Erste-Hilfe-Ausrüstung im Studio ist' },
        { text: 'Identifiziere alle Power Racks mit Sicherheitsablagen' },
        { text: 'Übe den "Roll of Shame" mit einer leeren Stange (20kg) auf der Bank' },
        { text: 'Frage einen Trainer, wie man richtig spottet (beim Bankdrücken)' },
        { text: 'Beobachte, wie erfahrene Trainierende Gewichte zurückräumen und desinfizieren' }
      ]
    },
    en: {
      title: 'Safety Check: Learn Emergency Procedures',
      description: 'Safety first! Familiarize yourself with your gym\'s safety measures.',
      checklist: [
        { text: 'Find out where the first aid equipment is in the gym' },
        { text: 'Identify all power racks with safety bars' },
        { text: 'Practice the "roll of shame" with an empty bar (20kg) on the bench' },
        { text: 'Ask a trainer how to spot properly (for bench press)' },
        { text: 'Observe how experienced gym-goers re-rack weights and disinfect equipment' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was ist die goldene Regel der Sicherheit im Gym?',
        back: 'TECHNIK > GEWICHT! Perfekte Form ist wichtiger als schwere Gewichte. Das Ego an der Tür lassen.'
      },
      {
        front: 'Was ist der Unterschied zwischen Muskelkater und Verletzungsschmerz?',
        back: 'Muskelkater: Dumpf, verzögert (24-48h nach Training), normal\nVerletzungsschmerz: Stechend, plötzlich, während/nach Übung → SOFORT STOPPEN!'
      },
      {
        front: 'Was bedeutet ROM und warum ist es wichtig?',
        back: 'Range of Motion = voller Bewegungsumfang. Wichtig weil: Halbe Bewegungen = halbe Ergebnisse. Voller ROM trainiert Muskel komplett und hält Gelenke gesund.'
      },
      {
        front: 'Wie macht man den "Roll of Shame" beim Bankdrücken?',
        back: 'Wenn du alleine trainierst und nicht mehr kannst: Stange kontrolliert auf Brust ablassen, dann über Bauch und Hüfte abrollen. Nicht elegant, aber sicher!'
      },
      {
        front: 'Wann braucht man einen Spotter?',
        back: 'Bei Bankdrücken (schwere Sätze/Muskelversagen), Kniebeuge (ohne Rack mit Sicherheitsablagen), Überkopfdrücken (optional bei sehr schweren Gewichten)'
      },
      {
        front: 'Nenne 3 wichtige Studio-Etikette-Regeln',
        back: '1. Gewichte zurückräumen (wichtigste Regel!)\n2. Handtuch benutzen & Geräte desinfizieren\n3. Nicht auf Geräten "campieren" (Pausen daneben machen)'
      }
    ],
    en: [
      {
        front: 'What is the golden rule of gym safety?',
        back: 'TECHNIQUE > WEIGHT! Perfect form is more important than heavy weights. Leave your ego at the door.'
      },
      {
        front: 'What is the difference between muscle soreness and injury pain?',
        back: 'Muscle soreness: Dull, delayed (24-48h after training), normal\nInjury pain: Sharp, sudden, during/after exercise → STOP IMMEDIATELY!'
      },
      {
        front: 'What does ROM mean and why is it important?',
        back: 'Range of Motion = full movement range. Important because: Half movements = half results. Full ROM trains muscle completely and keeps joints healthy.'
      },
      {
        front: 'How do you do the "roll of shame" on bench press?',
        back: 'When training alone and can\'t continue: Lower bar to chest in control, then roll it over stomach and hips. Not elegant, but safe!'
      },
      {
        front: 'When do you need a spotter?',
        back: 'For bench press (heavy sets/training to failure), squat (without rack with safety bars), overhead press (optional for very heavy weights)'
      },
      {
        front: 'Name 3 important gym etiquette rules',
        back: '1. Re-rack weights (most important rule!)\n2. Use towel & disinfect equipment\n3. Don\'t "camp" on equipment (take breaks next to it)'
      }
    ]
  }
};


