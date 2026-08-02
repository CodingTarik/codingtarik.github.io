import { Mountain, Activity, Footprints, AlertTriangle, TrendingUp, Shield, RotateCcw } from 'lucide-react';

export const overhangTechniques = {
  title: {
    de: "Überhang-Techniken",
    en: "Overhang Techniques"
  },
  description: {
    de: "Meistere steiles Gelände mit Körperspannung, Heel Hooks, Toe Hooks, Knee Bars und speziellen Überhang-Techniken.",
    en: "Master steep terrain with body tension, heel hooks, toe hooks, knee bars, and special overhang techniques."
  },
  content: {
    de: `
### Überhang-Techniken: Klettern im steilen Gelände

Überhänge sind Wände, die <strong>mehr als 90° geneigt</strong> sind – sie lehnen sich über dich. Im Überhang ist alles anders: Du hängst teilweise unter der Wand, die Schwerkraft zieht stärker, und ohne die richtigen Techniken geht dir die Kraft in Sekunden aus.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Mountain className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Das fundamentale Prinzip</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        <strong>"Im Überhang sind Füße noch wichtiger als in der Vertikalen!"</strong>
      </p>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Ohne aktive Fußarbeit (Hooks, Klemmer) trägst du dein gesamtes Gewicht an den Armen. Mit der richtigen Technik kannst du dein Gewicht verteilen und deutlich energiesparender klettern.
      </p>
    </div>
  </div>
</div>

---

### Körperspannung im Überhang

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Activity className="text-green-600 dark:text-green-400" size={24} />
    Core-Spannung ist alles!
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Warum Körperspannung im Überhang entscheidend ist</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Im Überhang will die Schwerkraft deine Füße von der Wand reißen. Nur durch <strong>aktive Körperspannung</strong> (Core, Rücken, Gesäß) hältst du die Füße an den Tritten und dein Gewicht verteilt.
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Bauch und Rücken permanent anspannen</li>
        <li>Gesäß und Beine aktiv arbeiten lassen</li>
        <li>Füße aktiv in die Tritte drücken (nicht passiv draufstellen)</li>
        <li>Kompakte Körperposition halten (nicht aushängen)</li>
      </ul>
    </div>
  </div>
</div>

---

### Heel Hook (Fersen-Haken)

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Footprints className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Die wichtigste Überhang-Technik!</h4>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
        Beim Heel Hook hakst du deine <strong>Ferse über einen Griff</strong> und ziehst aktiv mit dem Bein. Das übernimmt einen großen Teil deines Gewichts und entlastet die Arme enorm.
      </p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
        <li><strong>Position:</strong> Ferse über den Griff legen, Zehen nach oben</li>
        <li><strong>Aktivieren:</strong> Mit dem Beinbeuger (Hamstring) aktiv ziehen</li>
        <li><strong>Hüfte:</strong> Hüfte zur Wand und zum Hook drehen</li>
        <li><strong>Core:</strong> Extreme Körperspannung halten</li>
        <li><strong>Schuhwahl:</strong> Gummierte Ferse am Schuh hilft</li>
      </ul>
    </div>
  </div>
</div>

---

### Toe Hook (Zehen-Haken)

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Footprints className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Oberseite des Fußes nutzen</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        Beim Toe Hook hakst du die <strong>Oberseite deines Fußes</strong> (Spann) über einen Griff. Besonders effektiv an Volumes, Kanten und in horizontalen Dächern.
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>Sehr Core-intensiv:</strong> Der Zug kommt hauptsächlich aus der Bauchmuskulatur</li>
        <li><strong>Stabilisierung:</strong> Verhindert, dass dein Körper von der Wand schwingt</li>
        <li><strong>Flexible Schuhe:</strong> Schuhe mit guter Zehenbox-Gummi helfen</li>
        <li><strong>Kombination:</strong> Oft mit Heel Hook auf der anderen Seite kombiniert (Bicycle)</li>
      </ul>
    </div>
  </div>
</div>

---

### Knee Bar (Knie-Klemmer)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Shield className="text-green-600 dark:text-green-400" size={24} />
    Die ultimative Rastposition!
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Was ist ein Knee Bar?</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Bei einem Knee Bar klemmst du dein <strong>Knie und deinen Fuß</strong> gegeneinander ein – typischerweise Fuß auf einem Tritt und Knie gegen die Unterseite eines Griffs/Volumes. So hängst du <strong>ohne Hände</strong>!
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Perfekt zum Ausruhen im Überhang</li>
        <li>Beide Hände frei zum Chalken und Schütteln</li>
        <li>Knie-Pad empfehlenswert (schont die Knie)</li>
        <li>Braucht Übung – nicht immer sofort erkennbar</li>
      </ul>
    </div>
  </div>
</div>

---

### Weitere Überhang-Techniken

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <RotateCcw className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Spezial-Techniken</h4>
      <div className="space-y-3 mt-3">
        <div>
          <p className="text-sm text-blue-700 dark:text-blue-300"><strong>Bicycle:</strong> Ein Fuß hookt (Heel oder Toe), der andere drückt auf der Gegenseite – wie Fahrradtreten. Extrem stabil in Dächern.</p>
        </div>
        <div>
          <p className="text-sm text-blue-700 dark:text-blue-300"><strong>Drop Knee:</strong> Extremes Eindrehen im Überhang. Ein Knie zeigt nach unten, Hüfte ganz nah an der Wand. Spart enorm Armkraft.</p>
        </div>
        <div>
          <p className="text-sm text-blue-700 dark:text-blue-300"><strong>Bat Hang:</strong> Kopfüber an Heel Hooks hängen. Extrem fortgeschritten und Core-intensiv. Meist in horizontalen Dächern.</p>
        </div>
        <div>
          <p className="text-sm text-blue-700 dark:text-blue-300"><strong>Cutting Feet:</strong> Kontrolliertes "Füße verlieren" und schnelles Wiederfinden. Core anspannen, um das Schwingen zu stoppen und Füße zurück an die Wand bringen.</p>
        </div>
      </div>
    </div>
  </div>
</div>

---

### Sicherheit im Überhang

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Achtung beim Überhang-Klettern!</h4>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li><strong>Sturzrichtung:</strong> Im Überhang fällst du nach hinten – achte auf freien Landebereich</li>
        <li><strong>Schulterbelastung:</strong> Überhänge belasten Schultern stark – aufwärmen!</li>
        <li><strong>Knie-Belastung:</strong> Knee Bars und Drop Knees belasten die Knie – langsam steigern</li>
        <li><strong>Nicht übertreiben:</strong> Überhang-Sessions sind intensiv – höre auf deinen Körper</li>
      </ul>
    </div>
  </div>
</div>

---

### Praktische Übungen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    Übungen für den Überhang
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 1: Heel Hook Training</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Finde einen leichten Überhang-Boulder mit großen Griffen</li>
        <li>Übe Heel Hooks an verschiedenen Positionen</li>
        <li>Spüre, wie viel Gewicht dein Heel Hook tragen kann</li>
        <li>Aktiviere bewusst den Beinbeuger</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 2: Core an der Wand</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Hänge an einem guten Griff im Überhang</li>
        <li>Hebe die Füße kontrolliert zu den Tritten</li>
        <li>Halte die Position 5 Sekunden mit voller Körperspannung</li>
        <li>Wiederhole 5 Mal</li>
      </ol>
    </div>
  </div>
</div>

**Merke:** Im Überhang gewinnt nicht der Stärkste, sondern der Effizienteste. Hooks, Klemmer und Körperspannung machen den Unterschied!
    `,
    en: `
### Overhang Techniques: Climbing in Steep Terrain

Overhangs are walls that are <strong>angled more than 90°</strong> – they lean over you. In overhangs, everything changes: You're partially hanging under the wall, gravity pulls harder, and without the right techniques, your strength drains in seconds.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Mountain className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">The Fundamental Principle</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        <strong>"In overhangs, feet are even more important than on vertical walls!"</strong>
      </p>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Without active footwork (hooks, jams), you carry your entire weight on your arms. With the right technique, you can distribute your weight and climb much more efficiently.
      </p>
    </div>
  </div>
</div>

---

### Body Tension in Overhangs

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Activity className="text-green-600 dark:text-green-400" size={24} />
    Core Tension is Everything!
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Why Body Tension is Crucial in Overhangs</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        In overhangs, gravity wants to rip your feet off the wall. Only through <strong>active body tension</strong> (core, back, glutes) can you keep your feet on footholds and distribute your weight.
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Keep abs and back constantly engaged</li>
        <li>Actively work glutes and legs</li>
        <li>Actively push feet into footholds (don't just place them)</li>
        <li>Maintain compact body position (don't hang loose)</li>
      </ul>
    </div>
  </div>
</div>

---

### Heel Hook

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Footprints className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">The Most Important Overhang Technique!</h4>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
        In a heel hook, you <strong>hook your heel over a hold</strong> and actively pull with your leg. This takes on a large portion of your weight and enormously relieves your arms.
      </p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
        <li><strong>Position:</strong> Place heel on top of hold, toes pointing up</li>
        <li><strong>Activate:</strong> Actively pull with hamstring</li>
        <li><strong>Hips:</strong> Rotate hips toward the wall and the hook</li>
        <li><strong>Core:</strong> Maintain extreme body tension</li>
        <li><strong>Shoe choice:</strong> Rubber-coated heel on shoe helps</li>
      </ul>
    </div>
  </div>
</div>

---

### Toe Hook

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Footprints className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Using the Top of Your Foot</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        In a toe hook, you hook the <strong>top of your foot</strong> (instep) over a hold. Especially effective on volumes, edges, and in horizontal roofs.
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>Very core-intensive:</strong> The pull comes mainly from the abdominal muscles</li>
        <li><strong>Stabilization:</strong> Prevents your body from swinging off the wall</li>
        <li><strong>Flexible shoes:</strong> Shoes with good toe-box rubber help</li>
        <li><strong>Combination:</strong> Often combined with heel hook on the other side (bicycle)</li>
      </ul>
    </div>
  </div>
</div>

---

### Knee Bar

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Shield className="text-green-600 dark:text-green-400" size={24} />
    The Ultimate Rest Position!
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">What is a Knee Bar?</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        In a knee bar, you wedge your <strong>knee and foot</strong> against each other – typically foot on a foothold and knee against the underside of a hold/volume. This lets you hang <strong>completely hands-free</strong>!
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Perfect for resting in overhangs</li>
        <li>Both hands free for chalking and shaking out</li>
        <li>Knee pad recommended (protects the knees)</li>
        <li>Takes practice – not always immediately obvious</li>
      </ul>
    </div>
  </div>
</div>

---

### More Overhang Techniques

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <RotateCcw className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Special Techniques</h4>
      <div className="space-y-3 mt-3">
        <div>
          <p className="text-sm text-blue-700 dark:text-blue-300"><strong>Bicycle:</strong> One foot hooks (heel or toe), the other pushes on the opposite side – like pedaling. Extremely stable in roofs.</p>
        </div>
        <div>
          <p className="text-sm text-blue-700 dark:text-blue-300"><strong>Drop Knee:</strong> Extreme turn-in in overhang. One knee points down, hips very close to wall. Saves enormous arm strength.</p>
        </div>
        <div>
          <p className="text-sm text-blue-700 dark:text-blue-300"><strong>Bat Hang:</strong> Hanging upside down on heel hooks. Extremely advanced and core-intensive. Usually in horizontal roofs.</p>
        </div>
        <div>
          <p className="text-sm text-blue-700 dark:text-blue-300"><strong>Cutting Feet:</strong> Controlled "losing feet" and quick recovery. Engage core to stop swinging and bring feet back to the wall.</p>
        </div>
      </div>
    </div>
  </div>
</div>

---

### Safety in Overhangs

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Watch Out in Overhangs!</h4>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li><strong>Fall direction:</strong> In overhangs you fall backward – ensure clear landing area</li>
        <li><strong>Shoulder stress:</strong> Overhangs stress shoulders heavily – warm up!</li>
        <li><strong>Knee stress:</strong> Knee bars and drop knees stress knees – progress gradually</li>
        <li><strong>Don't overdo it:</strong> Overhang sessions are intense – listen to your body</li>
      </ul>
    </div>
  </div>
</div>

---

### Practical Exercises

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    Exercises for Overhangs
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 1: Heel Hook Training</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Find an easy overhang boulder with large holds</li>
        <li>Practice heel hooks at various positions</li>
        <li>Feel how much weight your heel hook can carry</li>
        <li>Consciously activate the hamstring</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 2: Core on the Wall</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Hang on a good hold in the overhang</li>
        <li>Lift feet controlled to the footholds</li>
        <li>Hold the position for 5 seconds with full body tension</li>
        <li>Repeat 5 times</li>
      </ol>
    </div>
  </div>
</div>

**Remember:** In overhangs, the most efficient climber wins, not the strongest. Hooks, jams, and body tension make all the difference!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Überhang-Techniken",
      description: "Übe die wichtigsten Techniken für steiles Gelände.",
      checklist: [
        { text: "Übung 1: Heel Hook Training - Übe an verschiedenen Positionen im Überhang und spüre die Gewichtsentlastung", checked: false },
        { text: "Übung 2: Core an der Wand - Hänge im Überhang und hebe die Füße kontrolliert zu den Tritten", checked: false },
        { text: "Übung 3: Suche nach Knee-Bar-Positionen in deiner Halle und übe, sie zu finden und zu nutzen", checked: false },
        { text: "Beobachte: Wie nutzen erfahrene Kletterer Hooks und Klemmer im Überhang?", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Overhang Techniques",
      description: "Practice the most important techniques for steep terrain.",
      checklist: [
        { text: "Exercise 1: Heel hook training - Practice at various positions in overhangs and feel the weight relief", checked: false },
        { text: "Exercise 2: Core on the wall - Hang in the overhang and lift feet controlled to footholds", checked: false },
        { text: "Exercise 3: Search for knee bar positions in your gym and practice finding and using them", checked: false },
        { text: "Observe: How do experienced climbers use hooks and jams in overhangs?", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum ist Körperspannung im Überhang so extrem wichtig?",
        answer: "Im Überhang will die Schwerkraft die Füße von der Wand reißen. Ohne aktive Körperspannung (Core, Rücken, Gesäß) hängt man nur an den Armen und verliert schnell die Kraft. Mit guter Spannung hält man die Füße an den Tritten und verteilt das Gewicht, was deutlich energiesparender ist."
      },
      {
        question: "Was ist der Unterschied zwischen Heel Hook und Toe Hook?",
        answer: "Beim Heel Hook legt man die Ferse über einen Griff und zieht mit dem Beinbeuger (Hamstring). Beim Toe Hook hookt man die Oberseite des Fußes (Spann) über einen Griff – der Zug kommt hauptsächlich aus der Bauchmuskulatur. Beide Techniken können kombiniert werden (Bicycle), wobei ein Fuß hookt und der andere drückt."
      },
      {
        question: "Was ist ein Knee Bar und warum ist er so wertvoll im Überhang?",
        answer: "Ein Knee Bar ist eine Klemm-Technik, bei der Knie und Fuß gegeneinander geklemmt werden (Fuß auf Tritt, Knie gegen Griff/Volume). Man kann dadurch komplett ohne Hände hängen. Das ist die ultimative Rastposition im Überhang – beide Hände sind frei zum Chalken, Schütteln und Erholen."
      }
    ],
    en: [
      {
        question: "Why is body tension so extremely important in overhangs?",
        answer: "In overhangs, gravity wants to rip your feet off the wall. Without active body tension (core, back, glutes), you hang only on your arms and lose strength quickly. With good tension, you keep feet on footholds and distribute weight, which is much more energy-efficient."
      },
      {
        question: "What is the difference between a heel hook and a toe hook?",
        answer: "In a heel hook, you place your heel over a hold and pull with the hamstring. In a toe hook, you hook the top of your foot (instep) over a hold – the pull comes mainly from the abdominal muscles. Both techniques can be combined (bicycle), where one foot hooks and the other pushes."
      },
      {
        question: "What is a knee bar and why is it so valuable in overhangs?",
        answer: "A knee bar is a jamming technique where knee and foot are wedged against each other (foot on foothold, knee against hold/volume). You can hang completely hands-free. It's the ultimate rest position in overhangs – both hands are free for chalking, shaking out, and recovering."
      }
    ]
  }
};
