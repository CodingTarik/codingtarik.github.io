
import { Shield, AlertTriangle, Footprints, ArrowDown, AlertCircle, Target, Zap, TrendingUp, Activity } from 'lucide-react';

export const fallingSafely = {
  title: {
    de: "Richtig Fallen - Die wichtigste Fähigkeit!",
    en: "Falling Safely - The Most Important Skill!"
  },
  description: {
    de: "Das Fallen ist die wichtigste Fähigkeit beim Bouldern. Lerne die Anatomie eines sicheren Falls und schütze dich vor Verletzungen.",
    en: "Falling is the most important skill in bouldering. Learn the anatomy of a safe fall and protect yourself from injuries."
  },
  content: {
    de: `
### Die wichtigste Fähigkeit beim Bouldern

**Du wirst fallen.** Das ist keine Frage des "Ob", sondern des "Wie oft". Und genau deshalb ist das richtige Fallen die wichtigste Fähigkeit, die du beim Bouldern lernen kannst – wichtiger als jede Klettertechnik.

Die meisten Verletzungen beim Bouldern passieren nicht beim Klettern selbst, sondern beim Fallen. Wenn du lernst, sicher zu fallen, kannst du diese Verletzungen vermeiden und mit mehr Selbstvertrauen klettern.

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Die Realität</h4>
      <p className="text-sm text-red-700 dark:text-red-300">
        <strong>90% der Boulder-Verletzungen</strong> passieren beim Fallen, nicht beim Klettern. Die häufigsten Verletzungen sind Knöchelverstauchungen und Handgelenksbrüche – beide können durch richtiges Fallen vermieden werden.
      </p>
    </div>
  </div>
</div>

---

### Die Anatomie eines sicheren Falls

Ein sicherer Fall besteht aus drei Phasen, die nahtlos ineinander übergehen:

#### Phase 1: Kontrolliert abspringen

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Target className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Nicht einfach loslassen!</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        Der häufigste Fehler ist, einfach die Griffe loszulassen und zu hoffen, dass alles gut geht. Das führt zu unkontrollierten Stürzen.
      </p>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        <strong>Stattdessen:</strong> Wenn du merkst, dass du gleich fallen wirst, bereite dich vor:
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 mt-3 space-y-2 list-disc list-inside">
        <li>Lass die Griffe los, wenn du bereit bist</li>
        <li>Richte deinen Körper auf (nicht zusammengekauert fallen)</li>
        <li>Bereite dich auf die Landung vor</li>
        <li>Schau nach unten, um die Landung zu sehen</li>
      </ul>
    </div>
  </div>
</div>

**Wichtig:** Wenn du merkst, dass du gleich fällst, lass nicht sofort los. Nimm dir einen Moment, um dich zu orientieren und vorzubereiten. Ein kontrollierter Absprung ist viel sicherer als ein unkontrollierter Sturz.

#### Phase 2: Die Landung - Füße zuerst

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Footprints className="text-green-600 dark:text-green-400" size={24} />
    Schritt 1: Füße zuerst
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    <strong>Lande immer auf beiden Füßen, hüftbreit auseinander.</strong> Deine Beine sind deine besten Stoßdämpfer.
  </p>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
    <li><strong>Beide Füße gleichzeitig:</strong> Nicht auf einem Fuß landen</li>
    <li><strong>Hüftbreit:</strong> Etwa schulterbreit, nicht zu eng, nicht zu weit</li>
    <li><strong>Zehen zeigen nach vorne:</strong> Nicht seitlich landen</li>
    <li><strong>Knie leicht gebeugt:</strong> Bereit, die Aufprallenergie aufzunehmen</li>
  </ul>
</div>

**Warum Füße zuerst?** Deine Beine sind die stärksten Körperteile und können die Aufprallenergie am besten absorbieren. Sie sind darauf ausgelegt, dein Körpergewicht zu tragen.

#### Phase 3: Tief gehen und abrollen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <ArrowDown className="text-green-600 dark:text-green-400" size={24} />
    Schritt 2: Tief gehen & Abrollen
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Sobald deine Füße den Boden berühren, <strong>gehe sofort tief in die Hocke</strong> und lass dich nach hinten auf deinen Po und Rücken abrollen.
  </p>
  <div className="space-y-3 mt-4">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-1">Die Bewegung:</p>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Füße landen → sofort Knie beugen</li>
        <li>In die Hocke gehen (tief!)</li>
        <li>Nach hinten auf Po fallen lassen</li>
        <li>Weiter auf Rücken abrollen</li>
        <li>Die Energie wird über die große Fläche verteilt</li>
      </ol>
    </div>
  </div>
</div>

**Warum abrollen?** Wenn du steif landest, wird die gesamte Aufprallenergie von deinen Knöcheln, Knien und Hüften aufgenommen. Beim Abrollen verteilt sich die Energie über eine viel größere Fläche (Po, Rücken) und wird sanft abgeleitet.

#### Phase 4: Arme schützen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Shield className="text-green-600 dark:text-green-400" size={24} />
    Schritt 3: Arme schützen
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    <strong>Versuche NIEMALS, dich mit den Händen abzustützen!</strong> Das ist der häufigste Grund für Handgelenksbrüche.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
      <p className="text-sm font-semibold text-red-800 dark:text-red-200 mb-1">❌ Falsch:</p>
      <p className="text-sm text-red-700 dark:text-red-300">Hände ausstrecken, um den Fall abzufangen</p>
    </div>
    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
      <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-1">✅ Richtig:</p>
      <p className="text-sm text-green-700 dark:text-green-300">Arme vor dem Körper halten, um sie zu schützen</p>
    </div>
  </div>
</div>

**Warum keine Hände?** Deine Handgelenke sind nicht darauf ausgelegt, dein gesamtes Körpergewicht aufzufangen. Wenn du versuchst, dich mit den Händen abzustützen, können sie brechen oder verstaucht werden.

---

### Was du NICHT tun solltest

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Die häufigsten Fehler beim Fallen</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">1. Steif landen</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        Wenn du mit gestreckten Beinen und steifem Körper landest, wird die gesamte Energie von deinen Gelenken aufgenommen. Das führt zu Verletzungen.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">2. Hände abstützen</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        Der häufigste Fehler! Wenn du versuchst, dich mit den Händen abzustützen, können deine Handgelenke brechen. Halte die Arme vor deinem Körper.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">3. Rückwärts fallen</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        Wenn du rückwärts fällst, kannst du nicht sehen, wo du landest. Du kannst auch nicht kontrolliert abrollen. Versuche immer, nach vorne zu fallen.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">4. Auf einem Fuß landen</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        Wenn du nur auf einem Fuß landest, wird die gesamte Energie von diesem einen Bein aufgenommen. Das führt zu Knöchelverstauchungen.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">5. Unkontrolliert loslassen</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        Wenn du einfach die Griffe loslässt ohne dich vorzubereiten, landest du in einer unkontrollierten Position. Bereite dich immer vor.
      </p>
    </div>
  </div>
</div>

---

### Falltraining: Übung macht den Meister

Das richtige Fallen muss geübt werden. Es ist eine Fähigkeit wie jede andere auch.

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Zap className="text-green-600 dark:text-green-400" size={24} />
    Falltraining: Schritt für Schritt
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Stufe 1: Vom Boden</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Beginne auf dem Boden, um die Bewegung zu lernen:
      </p>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Stehe auf den Matten</li>
        <li>Springe leicht hoch</li>
        <li>Lande auf beiden Füßen</li>
        <li>Gehe tief in die Hocke</li>
        <li>Rolle nach hinten ab</li>
        <li>Wiederhole 10 Mal</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Stufe 2: Von niedriger Höhe</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Wenn du die Bewegung beherrschst, übe von einer niedrigen Höhe:
      </p>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Klettere auf einen niedrigen Boulder (ca. 1 Meter)</li>
        <li>Lass dich kontrolliert fallen</li>
        <li>Führe die Landung durch</li>
        <li>Wiederhole mehrmals</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Stufe 3: Von mittlerer Höhe</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Steigere die Höhe langsam:
      </p>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Klettere auf einen mittleren Boulder (ca. 2 Meter)</li>
        <li>Übe kontrolliertes Fallen</li>
        <li>Spüre die Aufprallenergie</li>
        <li>Passe deine Technik an</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Stufe 4: Automatisierung</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Übe regelmäßig, bis die Bewegung automatisch wird:
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Übe bei jeder Session</li>
        <li>Führe bewusst Fallübungen durch</li>
        <li>Mache es zur Gewohnheit</li>
      </ul>
    </div>
  </div>
</div>

**Wichtig:** Übe das Fallen regelmäßig, nicht nur einmal. Es sollte eine automatische Reaktion werden, die du auch unter Stress ausführst.

---

### Häufigste Verletzungen beim Fallen

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Verletzungen und wie du sie vermeidest</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">1. Knöchelverstauchungen</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Ursache:</strong> Auf einem Fuß landen, seitlich landen, steif landen
      </p>
      <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">Vorbeugung:</p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>Immer auf beiden Füßen landen</li>
        <li>Zehen zeigen nach vorne</li>
        <li>Knie beugen, um Energie zu absorbieren</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">2. Handgelenksbrüche</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Ursache:</strong> Versuch, sich mit den Händen abzustützen
      </p>
      <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">Vorbeugung:</p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>NIEMALS mit den Händen abstützen</li>
        <li>Arme vor dem Körper halten</li>
        <li>Abrollen statt abstützen</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">3. Rückenverletzungen</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Ursache:</strong> Steif landen, keine Abrollbewegung
      </p>
      <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">Vorbeugung:</p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>Immer abrollen</li>
        <li>Knie beugen</li>
        <li>Energie über große Fläche verteilen</li>
      </ul>
    </div>
  </div>
</div>

---

### Zusammenfassung: Die wichtigsten Punkte

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Dein Fall-Sicherheits-Check
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Kontrolliert abspringen:</strong> Nicht einfach loslassen, sondern vorbereiten.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Füße zuerst:</strong> Immer auf beiden Füßen landen, hüftbreit.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Knie beugen:</strong> Sofort tief in die Hocke gehen.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Abrollen:</strong> Nach hinten auf Po und Rücken abrollen.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Arme schützen:</strong> NIEMALS mit den Händen abstützen!</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Üben:</strong> Falltraining regelmäßig durchführen, bis es automatisch wird.</span>
    </li>
  </ul>
</div>

**Denk daran:** Das richtige Fallen ist keine Option, es ist eine Notwendigkeit. Jeder erfahrene Kletterer hat diese Fähigkeit geübt. Nimm dir die Zeit, sie zu lernen – dein Körper wird es dir danken.
    `,
    en: `
### The Most Important Skill in Bouldering

**You will fall.** It's not a question of "if", but "how often". And that\'s exactly why falling correctly is the most important skill you can learn in bouldering – more important than any climbing technique.

Most injuries in bouldering don\'t happen while climbing, but while falling. If you learn to fall safely, you can avoid these injuries and climb with more confidence.

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">The Reality</h4>
      <p className="text-sm text-red-700 dark:text-red-300">
        <strong>90% of bouldering injuries</strong> happen while falling, not while climbing. The most common injuries are ankle sprains and wrist fractures – both can be prevented by falling correctly.
      </p>
    </div>
  </div>
</div>

---

### The Anatomy of a Safe Fall

A safe fall consists of three phases that seamlessly transition into each other:

#### Phase 1: Controlled Jump

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Target className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Don't Just Let Go!</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        The most common mistake is simply letting go of the holds and hoping everything will be fine. This leads to uncontrolled falls.
      </p>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        <strong>Instead:</strong> When you realize you\'re about to fall, prepare yourself:
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 mt-3 space-y-2 list-disc list-inside">
        <li>Let go of the holds when you\'re ready</li>
        <li>Straighten your body (don\'t fall curled up)</li>
        <li>Prepare for landing</li>
        <li>Look down to see the landing</li>
      </ul>
    </div>
  </div>
</div>

**Important:** When you realize you\'re about to fall, don\'t let go immediately. Take a moment to orient yourself and prepare. A controlled jump is much safer than an uncontrolled fall.

#### Phase 2: Landing - Feet First

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Footprints className="text-green-600 dark:text-green-400" size={24} />
    Step 1: Feet First
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    <strong>Always land on both feet, hip-width apart.</strong> Your legs are your best shock absorbers.
  </p>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
    <li><strong>Both feet simultaneously:</strong> Don't land on one foot</li>
    <li><strong>Hip-width:</strong> About shoulder-width, not too narrow, not too wide</li>
    <li><strong>Toes point forward:</strong> Don't land sideways</li>
    <li><strong>Knees slightly bent:</strong> Ready to absorb impact energy</li>
  </ul>
</div>

**Why feet first?** Your legs are the strongest body parts and can best absorb impact energy. They're designed to carry your body weight.

#### Phase 3: Go Deep and Roll

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <ArrowDown className="text-green-600 dark:text-green-400" size={24} />
    Step 2: Go Deep & Roll
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    As soon as your feet touch the ground, <strong>immediately go deep into a squat</strong> and let yourself fall backward onto your butt and back.
  </p>
  <div className="space-y-3 mt-4">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-1">The Movement:</p>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Feet land → immediately bend knees</li>
        <li>Go into squat (deep!)</li>
        <li>Let yourself fall backward onto butt</li>
        <li>Continue rolling onto back</li>
        <li>Energy is distributed over large area</li>
      </ol>
    </div>
  </div>
</div>

**Why roll?** If you land stiffly, all the impact energy is absorbed by your ankles, knees, and hips. When rolling, the energy is distributed over a much larger area (butt, back) and gently dissipated.

#### Phase 4: Protect Arms

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Shield className="text-green-600 dark:text-green-400" size={24} />
    Step 3: Protect Arms
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    <strong>NEVER try to catch yourself with your hands!</strong> This is the most common cause of wrist fractures.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
      <p className="text-sm font-semibold text-red-800 dark:text-red-200 mb-1">❌ Wrong:</p>
      <p className="text-sm text-red-700 dark:text-red-300">Extend hands to catch the fall</p>
    </div>
    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
      <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-1">✅ Right:</p>
      <p className="text-sm text-green-700 dark:text-green-300">Hold arms in front of body to protect them</p>
    </div>
  </div>
</div>

**Why no hands?** Your wrists aren\'t designed to catch your entire body weight. If you try to catch yourself with your hands, they can break or sprain.

---

### What You Should NOT Do

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ The Most Common Falling Mistakes</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">1. Landing Stiffly</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        If you land with straight legs and a stiff body, all the energy is absorbed by your joints. This leads to injuries.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">2. Catching with Hands</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        The most common mistake! If you try to catch yourself with your hands, your wrists can break. Keep your arms in front of your body.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">3. Falling Backward</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        If you fall backward, you can\'t see where you\'re landing. You also can\'t roll controlled. Always try to fall forward.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">4. Landing on One Foot</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        If you only land on one foot, all the energy is absorbed by that one leg. This leads to ankle sprains.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">5. Uncontrolled Release</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        If you simply let go of the holds without preparing, you land in an uncontrolled position. Always prepare yourself.
      </p>
    </div>
  </div>
</div>

---

### Fall Training: Practice Makes Perfect

Falling correctly must be practiced. It's a skill like any other.

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Zap className="text-green-600 dark:text-green-400" size={24} />
    Fall Training: Step by Step
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Level 1: From Ground</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Start on the ground to learn the movement:
      </p>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Stand on the mats</li>
        <li>Jump lightly up</li>
        <li>Land on both feet</li>
        <li>Go deep into squat</li>
        <li>Roll backward</li>
        <li>Repeat 10 times</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Level 2: From Low Height</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        When you master the movement, practice from a low height:
      </p>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Climb onto a low boulder (about 1 meter)</li>
        <li>Let yourself fall controlled</li>
        <li>Execute the landing</li>
        <li>Repeat several times</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Level 3: From Medium Height</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Gradually increase the height:
      </p>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Climb onto a medium boulder (about 2 meters)</li>
        <li>Practice controlled falling</li>
        <li>Feel the impact energy</li>
        <li>Adjust your technique</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Level 4: Automation</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Practice regularly until the movement becomes automatic:
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Practice every session</li>
        <li>Consciously perform fall exercises</li>
        <li>Make it a habit</li>
      </ul>
    </div>
  </div>
</div>

**Important:** Practice falling regularly, not just once. It should become an automatic reaction that you execute even under stress.

---

### Most Common Falling Injuries

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Injuries and How to Prevent Them</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">1. Ankle Sprains</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Cause:</strong> Landing on one foot, landing sideways, landing stiffly
      </p>
      <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">Prevention:</p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>Always land on both feet</li>
        <li>Toes point forward</li>
        <li>Bend knees to absorb energy</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">2. Wrist Fractures</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Cause:</strong> Attempting to catch yourself with hands
      </p>
      <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">Prevention:</p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>NEVER catch with hands</li>
        <li>Keep arms in front of body</li>
        <li>Roll instead of catch</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">3. Back Injuries</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Cause:</strong> Landing stiffly, no rolling movement
      </p>
      <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">Prevention:</p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>Always roll</li>
        <li>Bend knees</li>
        <li>Distribute energy over large area</li>
      </ul>
    </div>
  </div>
</div>

---

### Summary: The Most Important Points

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Your Fall Safety Checklist
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Controlled jump:</strong> Don't just let go, but prepare.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Feet first:</strong> Always land on both feet, hip-width apart.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Bend knees:</strong> Immediately go deep into squat.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Roll:</strong> Roll backward onto butt and back.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Protect arms:</strong> NEVER catch yourself with your hands!</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Practice:</strong> Perform fall training regularly until it becomes automatic.</span>
    </li>
  </ul>
</div>

**Remember:** Falling correctly isn\'t optional, it\'s a necessity. Every experienced climber has practiced this skill. Take the time to learn it – your body will thank you.
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Falltraining",
      description: "Übe das sichere Fallen von verschiedenen Höhen, um die Technik zu verinnerlichen.",
      checklist: [
        { text: "Stufe 1: Übe die Fallbewegung vom Boden (10 Wiederholungen): Füße landen → Knie beugen → Abrollen", checked: false },
        { text: "Stufe 2: Übe von niedriger Höhe (ca. 1 Meter): Kontrolliert fallen lassen und landen", checked: false },
        { text: "Stufe 3: Übe von mittlerer Höhe (ca. 2 Meter): Spüre die Aufprallenergie und passe deine Technik an", checked: false },
        { text: "Wichtig: NIEMALS mit den Händen abstützen! Halte die Arme vor dem Körper.", checked: false },
        { text: "Wiederhole das Falltraining regelmäßig bei jeder Session, bis es automatisch wird", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Fall Training",
      description: "Practice safe falling from different heights to internalize the technique.",
      checklist: [
        { text: "Level 1: Practice fall movement from ground (10 repetitions): Feet land → bend knees → roll", checked: false },
        { text: "Level 2: Practice from low height (about 1 meter): Let yourself fall controlled and land", checked: false },
        { text: "Level 3: Practice from medium height (about 2 meters): Feel impact energy and adjust your technique", checked: false },
        { text: "Important: NEVER catch yourself with your hands! Keep arms in front of body.", checked: false },
        { text: "Repeat fall training regularly every session until it becomes automatic", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum ist das richtige Fallen die wichtigste Fähigkeit beim Bouldern?",
        answer: "Weil 90% der Boulder-Verletzungen beim Fallen passieren, nicht beim Klettern. Wenn man lernt, sicher zu fallen, kann man diese Verletzungen vermeiden und mit mehr Selbstvertrauen klettern."
      },
      {
        question: "Was sind die drei Phasen eines sicheren Falls?",
        answer: "1. Kontrolliert abspringen (nicht einfach loslassen), 2. Füße zuerst landen (beide Füße, hüftbreit), 3. Tief gehen und abrollen (Knie beugen, nach hinten auf Po und Rücken abrollen)."
      },
      {
        question: "Warum sollte man NIEMALS versuchen, sich mit den Händen abzustützen?",
        answer: "Weil die Handgelenke nicht darauf ausgelegt sind, das gesamte Körpergewicht aufzufangen. Wenn man versucht, sich mit den Händen abzustützen, können sie brechen oder verstaucht werden. Die Arme sollten vor dem Körper gehalten werden, um sie zu schützen."
      }
    ],
    en: [
      {
        question: "Why is falling correctly the most important skill in bouldering?",
        answer: "Because 90% of bouldering injuries happen while falling, not while climbing. If you learn to fall safely, you can avoid these injuries and climb with more confidence."
      },
      {
        question: "What are the three phases of a safe fall?",
        answer: "1. Controlled jump (don\'t just let go), 2. Feet first landing (both feet, hip-width apart), 3. Go deep and roll (bend knees, roll backward onto butt and back)."
      },
      {
        question: "Why should you NEVER try to catch yourself with your hands?",
        answer: "Because wrists aren\'t designed to catch your entire body weight. If you try to catch yourself with your hands, they can break or sprain. Arms should be kept in front of the body to protect them."
      }
    ]
  }
};


