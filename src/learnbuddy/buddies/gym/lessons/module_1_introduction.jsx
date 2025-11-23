import React from 'react';

export const introductionLesson = {
  id: 'g1_m1_intro',
  title: { 
    en: '1.1 Introduction & Goal Setting', 
    de: '1.1 Einführung & Zielsetzung' 
  },
  description: { 
    en: 'Understanding strength training, setting realistic goals, and learning about different training styles.', 
    de: 'Verstehe Krafttraining, setze realistische Ziele und lerne verschiedene Trainingsarten kennen.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Willkommen bei GymBuddy! 💪

Du hast den ersten Schritt getan: Du bist hier, du bist motiviert, und du willst stärker werden. Das ist großartig! Krafttraining ist eine der transformativsten Aktivitäten, die du für deinen Körper und Geist tun kannst.

Diese Reise wird dich von "Ich weiß nicht, wo ich anfangen soll" zu "Ich habe einen Plan und weiß, was ich tue" führen. Klingt weit weg? Ist es nicht. Du brauchst nur etwas Zeit, Geduld und die Bereitschaft, aus Fehlern zu lernen.

---

### Was ist Krafttraining? (Und was ist es nicht?)

Krafttraining, auch Widerstandstraining genannt, ist das systematische Training deiner Muskulatur durch externe Widerstände (Gewichte, Maschinen, oder dein eigenes Körpergewicht).

<div className="my-6 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500">

#### 📖 Definition

**Krafttraining** ist Widerstandstraining zur Stärkung der Muskulatur. Es geht darum, deinen Muskeln einen Reiz zu geben, auf den sie sich anpassen müssen – indem sie stärker und größer werden.

</div>

**Was Krafttraining NICHT ist:**
- ❌ Nur für Bodybuilder oder "Muskelprotze"
- ❌ Gefährlich für deine Gelenke (bei korrekter Ausführung!)
- ❌ Macht Frauen "zu muskulös" (biologisch extrem schwierig ohne Steroide)
- ❌ Nur für junge Menschen (Krafttraining ist in jedem Alter wertvoll!)

---

### Warum Krafttraining? Die Vorteile

Krafttraining ist nicht nur "gut für die Muskeln". Es verändert deinen gesamten Körper und Geist:

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">

<div className="p-5 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
  <div className="text-3xl mb-3">💪</div>
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Physische Vorteile</h4>
  <ul className="text-sm space-y-2 text-green-700 dark:text-green-300">
    <li><strong>Stärkere Knochen:</strong> Erhöhte Knochendichte (wichtig im Alter!)</li>
    <li><strong>Besserer Stoffwechsel:</strong> Mehr Muskeln = höherer Grundumsatz</li>
    <li><strong>Haltungsverbesserung:</strong> Weniger Rückenschmerzen, aufrechte Körperhaltung</li>
    <li><strong>Verletzungsprävention:</strong> Stärkere Sehnen, Bänder, stabilere Gelenke</li>
    <li><strong>Fettabbau:</strong> Mehr Muskeln verbrennen mehr Kalorien (auch im Ruhezustand!)</li>
  </ul>
</div>

<div className="p-5 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
  <div className="text-3xl mb-3">🧠</div>
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Mentale Vorteile</h4>
  <ul className="text-sm space-y-2 text-purple-700 dark:text-purple-300">
    <li><strong>Disziplin:</strong> Du lernst, dich durchzubeißen und Ziele zu verfolgen</li>
    <li><strong>Stressabbau:</strong> Physische Anstrengung reduziert Cortisol (Stresshormon)</li>
    <li><strong>Selbstbewusstsein:</strong> Du siehst und fühlst Fortschritte – das motiviert!</li>
    <li><strong>Besserer Schlaf:</strong> Körperliche Erschöpfung führt zu tieferem Schlaf</li>
    <li><strong>Mentale Stärke:</strong> "Wenn ich das schaffe, schaffe ich alles"</li>
  </ul>
</div>

</div>

---

### Die verschiedenen Trainingsarten verstehen

Es gibt nicht "das eine" Krafttraining. Je nach Ziel gibt es verschiedene Ansätze:

<div className="space-y-4 my-6">

<div className="p-5 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2 flex items-center gap-2">
    <span className="text-2xl">🏋️</span> Bodybuilding (Fokus: Muskelwachstum & Ästhetik)
  </h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
    Ziel ist maximales Muskelwachstum (Hypertrophie) und eine ästhetische, symmetrische Körperform.
  </p>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    <strong>Typisch:</strong> 8-12 Wiederholungen, viele Isolationsübungen, Fokus auf "Pump" und Mind-Muscle-Connection.
  </p>
</div>

<div className="p-5 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
    <span className="text-2xl">⚡</span> Powerlifting (Fokus: Maximalkraft)
  </h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-2">
    Ziel ist maximale Kraft in drei Disziplinen: Kniebeuge (Squat), Bankdrücken (Bench Press), Kreuzheben (Deadlift).
  </p>
  <p className="text-sm text-red-700 dark:text-red-300">
    <strong>Typisch:</strong> 1-5 Wiederholungen mit sehr schweren Gewichten, Fokus auf die "Big 3".
  </p>
</div>

<div className="p-5 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
    <span className="text-2xl">🔥</span> CrossFit (Fokus: Funktionelle Fitness)
  </h4>
  <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
    Kombination aus Gewichtheben, Gymnastik und Ausdauer. Ziel ist allgemeine Fitness und Leistungsfähigkeit.
  </p>
  <p className="text-sm text-orange-700 dark:text-orange-300">
    <strong>Typisch:</strong> Hochintensive Workouts (WODs), viele Wiederholungen, Zeitdruck, Community-Fokus.
  </p>
</div>

<div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
    <span className="text-2xl">🤸</span> Calisthenics (Fokus: Körpergewicht & Skills)
  </h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
    Training mit dem eigenen Körpergewicht. Ziel ist relative Kraft (Kraft im Verhältnis zum Körpergewicht) und Körperkontrolle.
  </p>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    <strong>Typisch:</strong> Klimmzüge, Dips, Liegestütze, Handstand, L-Sit – keine Geräte nötig!
  </p>
</div>

</div>

**Für Anfänger empfehlen wir:** Eine Mischung aus Bodybuilding (Muskelaufbau) und grundlegenden Kraftübungen. Später kannst du dich spezialisieren!

---

### Realistische Erwartungen setzen

Einer der größten Fehler von Anfängern ist unrealistische Erwartungen. Social Media zeigt nur Highlights – nicht die Jahre harter Arbeit dahinter.

<div className="my-6 bg-stone-50 dark:bg-stone-900 p-6 rounded-xl border border-stone-200 dark:border-stone-700">

#### ⏱️ Realistische Zeitrahmen für sichtbare Veränderungen:

<div className="space-y-4 mt-4">

<div className="flex items-start gap-4">
  <div className="bg-green-100 dark:bg-green-900/30 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-green-800 dark:text-green-200">
    2-3
  </div>
  <div>
    <h5 className="font-bold text-stone-800 dark:text-stone-200">Monate</h5>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Erste sichtbare Veränderungen. Du fühlst dich stärker, Kleidung sitzt anders. Andere bemerken es vielleicht noch nicht.
    </p>
  </div>
</div>

<div className="flex items-start gap-4">
  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-blue-800 dark:text-blue-200">
    6-12
  </div>
  <div>
    <h5 className="font-bold text-stone-800 dark:text-stone-200">Monate</h5>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Deutliche Veränderungen. Andere fragen: "Trainierst du?" Deine Kraft hat sich verdoppelt oder verdreifacht.
    </p>
  </div>
</div>

<div className="flex items-start gap-4">
  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-purple-800 dark:text-purple-200">
    1-2+
  </div>
  <div>
    <h5 className="font-bold text-stone-800 dark:text-stone-200">Jahre</h5>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Transformative Veränderungen. Du siehst aus wie jemand, der trainiert. Dein Körper ist komplett anders.
    </p>
  </div>
</div>

</div>

<div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
  <p className="text-sm text-yellow-800 dark:text-yellow-200">
    <strong>⚠️ Wichtig:</strong> Muskelaufbau ist ein Marathon, kein Sprint. Wer dir verspricht, in 6 Wochen einen "Traumbody" zu bekommen, lügt. Geduld ist der Schlüssel!
  </p>
</div>

</div>

---

### Dein Mindset: Die 3 Grundprinzipien

Bevor du ins Studio gehst, verinnerliche diese drei Prinzipien:

<div className="space-y-4 my-6">

<div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
  <div className="text-4xl flex-shrink-0">🎯</div>
  <div>
    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">1. Technik > Gewicht!</h4>
    <p className="text-sm text-red-700 dark:text-red-300">
      Das Ego an der Tür lassen. Lieber 50kg mit perfekter Form als 100kg mit Schwung und Verletzungsrisiko. 
      Perfekte Technik ist die Basis für langfristigen Erfolg und Verletzungsprävention.
    </p>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
  <div className="text-4xl flex-shrink-0">📈</div>
  <div>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">2. Konsistenz > Intensität</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      Lieber 3x pro Woche zu 80% trainieren als 1x zu 120% und dann eine Woche ausfallen. 
      Langfristige Konsistenz schlägt kurzfristige Intensität. Immer.
    </p>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
  <div className="text-4xl flex-shrink-0">🌱</div>
  <div>
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">3. Geduld & Prozess-Fokus</h4>
    <p className="text-sm text-green-700 dark:text-green-300">
      Fokussiere dich auf den Prozess (Training, Ernährung, Schlaf), nicht auf das Ergebnis. 
      Die Ergebnisse kommen automatisch, wenn der Prozess stimmt. Vertraue dem System.
    </p>
  </div>
</div>

</div>

---

### Zusammenfassung: Deine ersten Schritte

Bevor wir in die Details eintauchen, merke dir diese Kernpunkte:

<div className="my-6 p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl border border-red-200 dark:border-red-700">

#### ✅ Deine Krafttraining-Grundsätze:

1. **Krafttraining ist für JEDEN** – unabhängig von Alter, Geschlecht oder Fitnesslevel
2. **Technik ist wichtiger als Gewicht** – immer!
3. **Realistische Erwartungen** – sichtbare Veränderungen brauchen 2-3 Monate minimum
4. **Konsistenz schlägt Intensität** – 3x pro Woche ist besser als 1x
5. **Geduld ist der Schlüssel** – Muskelaufbau ist ein Marathon

</div>

**Bist du bereit?** In der nächsten Lektion lernst du die wichtigsten Sicherheitsregeln und die ungeschriebenen Gesetze des Studios – die **Studio-Etikette**.

💪 **Dein Weg beginnt jetzt!**
    `,
    en: `
### Welcome to GymBuddy! 💪

You've taken the first step: you're here, you're motivated, and you want to get stronger. That's fantastic! Strength training is one of the most transformative activities you can do for your body and mind.

This journey will take you from "I don't know where to start" to "I have a plan and know what I'm doing." Sounds far away? It's not. You just need some time, patience, and the willingness to learn from mistakes.

---

### What is Strength Training? (And what isn't it?)

Strength training, also called resistance training, is the systematic training of your muscles through external resistance (weights, machines, or your own body weight).

<div className="my-6 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500">

#### 📖 Definition

**Strength training** is resistance training to strengthen muscles. It's about giving your muscles a stimulus they must adapt to – by becoming stronger and larger.

</div>

**What strength training is NOT:**
- ❌ Only for bodybuilders or "muscle heads"
- ❌ Dangerous for your joints (when done correctly!)
- ❌ Makes women "too muscular" (biologically extremely difficult without steroids)
- ❌ Only for young people (strength training is valuable at any age!)

---

### Why Strength Training? The Benefits

Strength training isn't just "good for muscles." It changes your entire body and mind:

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">

<div className="p-5 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
  <div className="text-3xl mb-3">💪</div>
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Physical Benefits</h4>
  <ul className="text-sm space-y-2 text-green-700 dark:text-green-300">
    <li><strong>Stronger bones:</strong> Increased bone density (important in old age!)</li>
    <li><strong>Better metabolism:</strong> More muscle = higher basal metabolic rate</li>
    <li><strong>Improved posture:</strong> Less back pain, upright posture</li>
    <li><strong>Injury prevention:</strong> Stronger tendons, ligaments, more stable joints</li>
    <li><strong>Fat loss:</strong> More muscle burns more calories (even at rest!)</li>
  </ul>
</div>

<div className="p-5 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
  <div className="text-3xl mb-3">🧠</div>
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Mental Benefits</h4>
  <ul className="text-sm space-y-2 text-purple-700 dark:text-purple-300">
    <li><strong>Discipline:</strong> You learn to push through and pursue goals</li>
    <li><strong>Stress relief:</strong> Physical exertion reduces cortisol (stress hormone)</li>
    <li><strong>Self-confidence:</strong> You see and feel progress – that motivates!</li>
    <li><strong>Better sleep:</strong> Physical exhaustion leads to deeper sleep</li>
    <li><strong>Mental strength:</strong> "If I can do this, I can do anything"</li>
  </ul>
</div>

</div>

---

### Understanding Different Training Styles

There's no "one" strength training. Depending on your goal, there are different approaches:

<div className="space-y-4 my-6">

<div className="p-5 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2 flex items-center gap-2">
    <span className="text-2xl">🏋️</span> Bodybuilding (Focus: Muscle Growth & Aesthetics)
  </h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
    Goal is maximum muscle growth (hypertrophy) and an aesthetic, symmetrical physique.
  </p>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    <strong>Typical:</strong> 8-12 repetitions, many isolation exercises, focus on "pump" and mind-muscle connection.
  </p>
</div>

<div className="p-5 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
    <span className="text-2xl">⚡</span> Powerlifting (Focus: Maximum Strength)
  </h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-2">
    Goal is maximum strength in three disciplines: Squat, Bench Press, Deadlift.
  </p>
  <p className="text-sm text-red-700 dark:text-red-300">
    <strong>Typical:</strong> 1-5 repetitions with very heavy weights, focus on the "Big 3".
  </p>
</div>

<div className="p-5 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
    <span className="text-2xl">🔥</span> CrossFit (Focus: Functional Fitness)
  </h4>
  <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
    Combination of weightlifting, gymnastics, and endurance. Goal is general fitness and performance.
  </p>
  <p className="text-sm text-orange-700 dark:text-orange-300">
    <strong>Typical:</strong> High-intensity workouts (WODs), many repetitions, time pressure, community focus.
  </p>
</div>

<div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
    <span className="text-2xl">🤸</span> Calisthenics (Focus: Bodyweight & Skills)
  </h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
    Training with your own body weight. Goal is relative strength (strength relative to body weight) and body control.
  </p>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    <strong>Typical:</strong> Pull-ups, dips, push-ups, handstand, L-sit – no equipment needed!
  </p>
</div>

</div>

**For beginners we recommend:** A mix of bodybuilding (muscle building) and basic strength exercises. You can specialize later!

---

### Setting Realistic Expectations

One of the biggest mistakes beginners make is unrealistic expectations. Social media only shows highlights – not the years of hard work behind them.

<div className="my-6 bg-stone-50 dark:bg-stone-900 p-6 rounded-xl border border-stone-200 dark:border-stone-700">

#### ⏱️ Realistic timeframes for visible changes:

<div className="space-y-4 mt-4">

<div className="flex items-start gap-4">
  <div className="bg-green-100 dark:bg-green-900/30 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-green-800 dark:text-green-200">
    2-3
  </div>
  <div>
    <h5 className="font-bold text-stone-800 dark:text-stone-200">Months</h5>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      First visible changes. You feel stronger, clothes fit differently. Others might not notice yet.
    </p>
  </div>
</div>

<div className="flex items-start gap-4">
  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-blue-800 dark:text-blue-200">
    6-12
  </div>
  <div>
    <h5 className="font-bold text-stone-800 dark:text-stone-200">Months</h5>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Significant changes. Others ask: "Do you work out?" Your strength has doubled or tripled.
    </p>
  </div>
</div>

<div className="flex items-start gap-4">
  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-purple-800 dark:text-purple-200">
    1-2+
  </div>
  <div>
    <h5 className="font-bold text-stone-800 dark:text-stone-200">Years</h5>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Transformative changes. You look like someone who trains. Your body is completely different.
    </p>
  </div>
</div>

</div>

<div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
  <p className="text-sm text-yellow-800 dark:text-yellow-200">
    <strong>⚠️ Important:</strong> Muscle building is a marathon, not a sprint. Anyone promising you a "dream body" in 6 weeks is lying. Patience is key!
  </p>
</div>

</div>

---

### Your Mindset: The 3 Core Principles

Before you go to the gym, internalize these three principles:

<div className="space-y-4 my-6">

<div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
  <div className="text-4xl flex-shrink-0">🎯</div>
  <div>
    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">1. Technique > Weight!</h4>
    <p className="text-sm text-red-700 dark:text-red-300">
      Leave your ego at the door. Better 50kg with perfect form than 100kg with momentum and injury risk. 
      Perfect technique is the foundation for long-term success and injury prevention.
    </p>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
  <div className="text-4xl flex-shrink-0">📈</div>
  <div>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">2. Consistency > Intensity</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      Better to train 3x per week at 80% than 1x at 120% and then miss a week. 
      Long-term consistency beats short-term intensity. Always.
    </p>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
  <div className="text-4xl flex-shrink-0">🌱</div>
  <div>
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">3. Patience & Process Focus</h4>
    <p className="text-sm text-green-700 dark:text-green-300">
      Focus on the process (training, nutrition, sleep), not the result. 
      Results come automatically when the process is right. Trust the system.
    </p>
  </div>
</div>

</div>

---

### Summary: Your First Steps

Before we dive into details, remember these key points:

<div className="my-6 p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl border border-red-200 dark:border-red-700">

#### ✅ Your Strength Training Principles:

1. **Strength training is for EVERYONE** – regardless of age, gender, or fitness level
2. **Technique is more important than weight** – always!
3. **Realistic expectations** – visible changes need 2-3 months minimum
4. **Consistency beats intensity** – 3x per week is better than 1x
5. **Patience is key** – muscle building is a marathon

</div>

**Are you ready?** In the next lesson, you'll learn the most important safety rules and the unwritten laws of the gym – **Gym Etiquette**.

💪 **Your journey starts now!**
    `
  },

  task: {
    de: {
      title: 'Studio-Besichtigung: Lerne dein Gym kennen',
      description: 'Bevor du mit dem Training beginnst, mache dich mit deinem Studio vertraut. Diese Übung nimmt dir die Angst und gibt dir Orientierung.',
      checklist: [
        { text: 'Besuche dein Studio zu einer ruhigen Zeit (z.B. vormittags) für eine entspannte Erkundung' },
        { text: 'Identifiziere die wichtigsten Bereiche: Freihanteln, Maschinen, Cardio-Bereich, Umkleiden' },
        { text: 'Frage einen Trainer nach einer kurzen Einführung in die Geräte (oft kostenlos!)' },
        { text: 'Notiere dir, wo die Notfall-Ausrüstung ist (Erste-Hilfe, Defibrillator)' },
        { text: 'Beobachte die Studio-Etikette: Wie verhalten sich erfahrene Trainierende?' }
      ]
    },
    en: {
      title: 'Gym Tour: Get to Know Your Gym',
      description: 'Before you start training, familiarize yourself with your gym. This exercise will reduce anxiety and give you orientation.',
      checklist: [
        { text: 'Visit your gym during a quiet time (e.g., morning) for a relaxed exploration' },
        { text: 'Identify the main areas: free weights, machines, cardio area, locker rooms' },
        { text: 'Ask a trainer for a brief introduction to the equipment (often free!)' },
        { text: 'Note where emergency equipment is (first aid, defibrillator)' },
        { text: 'Observe gym etiquette: How do experienced gym-goers behave?' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was ist Krafttraining?',
        back: 'Widerstandstraining zur Stärkung der Muskulatur. Es gibt den Muskeln einen Reiz, auf den sie sich anpassen müssen – indem sie stärker und größer werden.'
      },
      {
        front: 'Nenne 3 physische Vorteile von Krafttraining',
        back: '1. Stärkere Knochen (erhöhte Knochendichte)\n2. Besserer Stoffwechsel (höherer Grundumsatz)\n3. Verletzungsprävention (stärkere Sehnen, Bänder, Gelenke)'
      },
      {
        front: 'Nenne 3 mentale Vorteile von Krafttraining',
        back: '1. Disziplin (Ziele verfolgen)\n2. Stressabbau (reduziert Cortisol)\n3. Selbstbewusstsein (sichtbare Fortschritte)'
      },
      {
        front: 'Was ist der Unterschied zwischen Bodybuilding und Powerlifting?',
        back: 'Bodybuilding: Fokus auf Muskelwachstum & Ästhetik (8-12 Reps)\nPowerlifting: Fokus auf Maximalkraft in 3 Übungen (1-5 Reps)'
      },
      {
        front: 'Wie lange dauert es, bis man erste sichtbare Veränderungen sieht?',
        back: '2-3 Monate für erste sichtbare Veränderungen\n6-12 Monate für deutliche Veränderungen\n1-2+ Jahre für transformative Veränderungen'
      },
      {
        front: 'Was sind die 3 Grundprinzipien des Krafttrainings?',
        back: '1. Technik > Gewicht (perfekte Form wichtiger als schwere Gewichte)\n2. Konsistenz > Intensität (regelmäßig trainieren wichtiger als einmalig hart)\n3. Geduld & Prozess-Fokus (Vertraue dem System)'
      }
    ],
    en: [
      {
        front: 'What is strength training?',
        back: 'Resistance training to strengthen muscles. It gives muscles a stimulus they must adapt to – by becoming stronger and larger.'
      },
      {
        front: 'Name 3 physical benefits of strength training',
        back: '1. Stronger bones (increased bone density)\n2. Better metabolism (higher basal metabolic rate)\n3. Injury prevention (stronger tendons, ligaments, joints)'
      },
      {
        front: 'Name 3 mental benefits of strength training',
        back: '1. Discipline (pursuing goals)\n2. Stress relief (reduces cortisol)\n3. Self-confidence (visible progress)'
      },
      {
        front: 'What is the difference between bodybuilding and powerlifting?',
        back: 'Bodybuilding: Focus on muscle growth & aesthetics (8-12 reps)\nPowerlifting: Focus on maximum strength in 3 exercises (1-5 reps)'
      },
      {
        front: 'How long does it take to see first visible changes?',
        back: '2-3 months for first visible changes\n6-12 months for significant changes\n1-2+ years for transformative changes'
      },
      {
        front: 'What are the 3 core principles of strength training?',
        back: '1. Technique > Weight (perfect form more important than heavy weights)\n2. Consistency > Intensity (regular training more important than one-time hard)\n3. Patience & Process Focus (trust the system)'
      }
    ]
  }
};

