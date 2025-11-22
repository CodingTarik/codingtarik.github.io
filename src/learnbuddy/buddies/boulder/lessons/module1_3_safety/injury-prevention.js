
import { Activity, AlertTriangle, Heart, Shield, Zap, TrendingUp, Thermometer } from 'lucide-react';

export const injuryPrevention = {
  title: {
    de: "Verletzungsprävention - Basics",
    en: "Injury Prevention - Basics"
  },
  description: {
    de: "Lerne, wie du Verletzungen vermeidest: Warum Aufwärmen essentiell ist, welche Verletzungen häufig auftreten und wie du auf Schmerz reagieren solltest.",
    en: "Learn how to prevent injuries: why warming up is essential, which injuries are common, and how you should respond to pain."
  },
  content: {
    de: `
### Verletzungsprävention: Besser vorbeugen als heilen

Verletzungen sind der größte Feind jedes Kletterers. Sie können Wochen oder Monate der Fortschritte zunichtemachen und die Freude am Bouldern trüben. Die gute Nachricht: **Die meisten Verletzungen sind vermeidbar.**

In dieser Lektion lernst du die Grundlagen der Verletzungsprävention: warum Aufwärmen so wichtig ist, welche Verletzungen häufig auftreten, und wie du auf Schmerz reagieren solltest.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Shield className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Die Realität</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        <strong>80% der Boulder-Verletzungen</strong> sind auf mangelndes Aufwärmen, Überlastung oder Ignorieren von Warnsignalen zurückzuführen. Mit den richtigen Präventionsmaßnahmen kannst du das Risiko erheblich reduzieren.
      </p>
    </div>
  </div>
</div>

---

### Warum Aufwärmen essentiell ist

Aufwärmen ist nicht optional – es ist **absolut notwendig**. Ein kalter Körper ist anfällig für Verletzungen.

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Activity className="text-green-600 dark:text-green-400" size={24} />
    Was passiert beim Aufwärmen?
  </h3>
  
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <div className="flex items-start gap-2">
      <span className="font-bold">1.</span>
      <span><strong>Durchblutung steigt:</strong> Mehr Blut fließt zu den Muskeln, Sehnen und Gelenken. Sie werden besser mit Sauerstoff und Nährstoffen versorgt.</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold">2.</span>
      <span><strong>Muskeltemperatur steigt:</strong> Warme Muskeln sind elastischer und weniger anfällig für Risse.</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold">3.</span>
      <span><strong>Gelenke werden geschmiert:</strong> Die Gelenkflüssigkeit wird dünnflüssiger und schmiert besser.</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold">4.</span>
      <span><strong>Nervensystem aktiviert:</strong> Deine Reaktionszeit verbessert sich, deine Koordination wird besser.</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold">5.</span>
      <span><strong>Mentaler Fokus:</strong> Du kommst in den "Kletter-Modus" und bist bereit für die Herausforderung.</span>
    </div>
  </div>
</div>

#### Ein gutes Aufwärmprogramm

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Dein Aufwärm-Ritual (10-15 Minuten)</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Phase 1: Allgemeines Aufwärmen (5 Minuten)</h5>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>Leichtes Laufen oder Gehen (2-3 Minuten)</li>
        <li>Armkreisen (vorwärts und rückwärts)</li>
        <li>Schulterkreisen</li>
        <li>Hüftkreisen</li>
        <li>Leichte Dehnübungen</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Phase 2: Spezifisches Aufwärmen (5-10 Minuten)</h5>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>Einfache Boulder klettern (V0-V2)</li>
        <li>Langsam beginnen, Intensität steigern</li>
        <li>Verschiedene Bewegungen ausprobieren</li>
        <li>Finger und Handgelenke aktivieren</li>
        <li>Körper auf Betriebstemperatur bringen</li>
      </ul>
    </div>
  </div>
</div>

**Wichtig:** Ein gutes Aufwärmen sollte mindestens 10-15 Minuten dauern. Zu kurz ist genauso schlecht wie gar kein Aufwärmen!

---

### Typische Boulder-Verletzungen

Wenn du weißt, welche Verletzungen häufig auftreten, kannst du sie besser vermeiden.

#### 1. Pulley-Verletzungen (Ringbandriss)

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Die häufigste Fingerverletzung</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        Die Pulleys sind Bänder, die die Sehnen an den Fingern halten. Beim Bouldern werden sie extrem belastet, besonders bei kleinen Griffen und Überhängen.
      </p>
      <p className="text-sm font-semibold text-red-800 dark:text-red-200 mb-2">Symptome:</p>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside mb-3">
        <li>Plötzlicher, stechender Schmerz im Finger</li>
        <li>Schwellung am Fingeransatz</li>
        <li>Schwierigkeiten, den Finger zu beugen</li>
        <li>Ein "Knall" oder "Pop" beim Verletzen</li>
      </ul>
      <p className="text-sm font-semibold text-red-800 dark:text-red-200 mb-2">Vorbeugung:</p>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li>Langsam steigern, nicht zu schnell zu schweren Griffen</li>
        <li>Finger aufwärmen mit leichten Übungen</li>
        <li>Kleine Griffe nicht zu lange halten</li>
        <li>Bei Schmerz sofort aufhören</li>
      </ul>
    </div>
  </div>
</div>

#### 2. Tendinitis (Sehnenscheidenentzündung)

<div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">Überlastung der Sehnen</h4>
  <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
    Tendinitis entsteht durch wiederholte Überlastung. Die Sehnen werden gereizt und entzünden sich.
  </p>
  <p className="text-sm font-semibold text-orange-800 dark:text-orange-200 mb-2">Symptome:</p>
  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1 list-disc list-inside mb-3">
    <li>Schmerz bei Bewegung (besonders am Morgen)</li>
    <li>Schwellung und Rötung</li>
    <li>Steifheit</li>
    <li>Schmerz bei Druck</li>
  </ul>
  <p className="text-sm font-semibold text-orange-800 dark:text-orange-200 mb-2">Vorbeugung:</p>
  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1 list-disc list-inside">
    <li>Langsam steigern, nicht zu viel auf einmal</li>
    <li>Ausreichend Pausen zwischen Sessions</li>
    <li>Dehnübungen für Unterarme</li>
    <li>Bei ersten Anzeichen: Pause einlegen</li>
  </ul>
</div>

#### 3. Schulterschäden

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Die Schulter: Ein komplexes Gelenk</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
    Die Schulter ist das beweglichste Gelenk des Körpers, aber auch sehr anfällig für Verletzungen. Beim Bouldern wird sie stark belastet.
  </p>
  <p className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-2">Häufige Probleme:</p>
  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside mb-3">
    <li>Impingement-Syndrom (Einklemmung)</li>
    <li>Rotatorenmanschetten-Verletzungen</li>
    <li>Schulterinstabilität</li>
  </ul>
  <p className="text-sm font-semibold text-purple-800 dark:text-orange-200 mb-2">Vorbeugung:</p>
  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
    <li>Schulter-Aufwärmübungen</li>
    <li>Krafttraining für die Rotatorenmanschette</li>
    <li>Gute Technik (nicht nur mit Armen ziehen!)</li>
    <li>Bei Schmerz: Pause und Arzt konsultieren</li>
  </ul>
</div>

---

### Red Flags: Schmerz vs. Muskelkater

Es ist wichtig zu wissen, wann Schmerz ein Warnsignal ist und wann es nur Muskelkater ist.

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
      <Heart className="text-green-600 dark:text-green-400" size={24} />
      ✅ Muskelkater (Normal)
    </h4>
    <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
      <li>Beginnt 24-48 Stunden nach dem Training</li>
      <li>Betrifft große Muskelgruppen</li>
      <li>Wird besser bei Bewegung</li>
      <li>Symmetrisch (beide Seiten)</li>
      <li>Kein stechender Schmerz</li>
      <li>Verschwindet nach einigen Tagen</li>
    </ul>
  </div>
  
  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
    <h4 className="font-bold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
      <AlertTriangle className="text-red-600 dark:text-red-400" size={24} />
      ❌ Warnsignal (Gefährlich!)
    </h4>
    <ul className="text-sm text-red-700 dark:text-red-300 space-y-2 list-disc list-inside">
      <li>Plötzlicher, stechender Schmerz</li>
      <li>Schmerz bei bestimmten Bewegungen</li>
      <li>Schwellung oder Rötung</li>
      <li>Schmerz wird schlimmer bei Bewegung</li>
      <li>Asymmetrisch (nur eine Seite)</li>
      <li>Hält länger als eine Woche an</li>
      <li>Schmerz in Gelenken oder Sehnen</li>
    </ul>
  </div>
</div>

**Die goldene Regel:** Wenn du unsicher bist, ob es Muskelkater oder eine Verletzung ist, konsultiere einen Arzt. Es ist besser, vorsichtig zu sein!

---

### Bei Schmerz: PAUSE (nicht "durchtrainieren"!)

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Die gefährlichste Einstellung</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        "Ich trainiere einfach durch, dann wird es schon besser" – das ist der schnellste Weg zu einer schweren Verletzung.
      </p>
      <p className="text-sm text-red-700 dark:text-red-300">
        <strong>Schmerz ist ein Warnsignal!</strong> Wenn dein Körper dir sagt, dass etwas nicht stimmt, höre zu. Ignorierst du Schmerz, kann aus einer kleinen Verletzung eine große werden.
      </p>
    </div>
  </div>
</div>

#### Was tun bei Schmerz?

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Die PECH-Regel</h4>
  
  <div className="space-y-3 text-sm text-amber-700 dark:text-amber-300">
    <div className="flex items-start gap-2">
      <span className="font-bold text-amber-800 dark:text-amber-200">P</span>
      <span><strong>ause:</strong> Sofort aufhören zu klettern. Keine weiteren Versuche.</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold text-amber-800 dark:text-amber-200">E</span>
      <span><strong>is:</strong> Die verletzte Stelle kühlen (15-20 Minuten, mehrmals täglich).</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold text-amber-800 dark:text-amber-200">C</span>
      <span><strong>ompression:</strong> Leichter Druckverband (nicht zu fest!).</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold text-amber-800 dark:text-amber-200">H</span>
      <span><strong>ochlagern:</strong> Die verletzte Stelle hochlagern, um Schwellung zu reduzieren.</span>
    </div>
  </div>
</div>

**Wann zum Arzt?**
- Wenn der Schmerz stark ist oder nicht nachlässt
- Bei Schwellung, Rötung oder Überwärmung
- Wenn du einen "Knall" oder "Pop" gehört hast
- Wenn du die Bewegung nicht mehr ausführen kannst
- Wenn der Schmerz länger als eine Woche anhält

---

### Präventionsstrategien

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Shield className="text-green-600 dark:text-green-400" size={24} />
    Wie du Verletzungen vermeidest
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">1. Immer aufwärmen</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Mindestens 10-15 Minuten Aufwärmen vor jeder Session. Keine Ausnahmen!
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">2. Langsam steigern</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Nicht zu schnell zu schweren Bouldern. Gib deinem Körper Zeit, sich anzupassen.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">3. Ausreichend Pausen</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Mindestens 1-2 Ruhetage pro Woche. Dein Körper braucht Zeit zur Regeneration.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">4. Auf Schmerz hören</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Wenn etwas wehtut, höre auf. Ignoriere keine Warnsignale.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">5. Gute Technik</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Lerne die richtige Technik. Schlechte Technik führt zu Überlastung und Verletzungen.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">6. Krafttraining</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Stärke deine Antagonisten (Gegenspieler-Muskeln) und deine Stabilität.
      </p>
    </div>
  </div>
</div>

---

### Zusammenfassung: Die wichtigsten Punkte

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Dein Verletzungspräventions-Check
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Immer aufwärmen:</strong> Mindestens 10-15 Minuten vor jeder Session.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Langsam steigern:</strong> Nicht zu schnell zu schweren Bouldern.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Schmerz erkennen:</strong> Lerne den Unterschied zwischen Muskelkater und Warnsignal.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Bei Schmerz: PAUSE:</strong> Niemals "durchtrainieren" – das verschlimmert Verletzungen.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>PECH-Regel:</strong> Pause, Eis, Compression, Hochlagern bei Verletzungen.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Arzt konsultieren:</strong> Bei starkem Schmerz, Schwellung oder wenn der Schmerz nicht nachlässt.</span>
    </li>
  </ul>
</div>

**Denk daran:** Verletzungen sind vermeidbar. Mit den richtigen Präventionsmaßnahmen kannst du lange und gesund klettern. Dein Körper ist dein wichtigstes Werkzeug – behandle ihn gut!
    `,
    en: `
### Injury Prevention: Better Safe Than Sorry

Injuries are the biggest enemy of every climber. They can undo weeks or months of progress and dampen the joy of bouldering. The good news: **Most injuries are preventable.**

In this lesson, you'll learn the basics of injury prevention: why warming up is so important, which injuries are common, and how you should respond to pain.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Shield className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">The Reality</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        <strong>80% of bouldering injuries</strong> are due to lack of warming up, overloading, or ignoring warning signs. With the right preventive measures, you can significantly reduce the risk.
      </p>
    </div>
  </div>
</div>

---

### Why Warming Up Is Essential

Warming up isn\'t optional – it\'s **absolutely necessary**. A cold body is prone to injuries.

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Activity className="text-green-600 dark:text-green-400" size={24} />
    What Happens During Warm-Up?
  </h3>
  
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <div className="flex items-start gap-2">
      <span className="font-bold">1.</span>
      <span><strong>Blood circulation increases:</strong> More blood flows to muscles, tendons, and joints. They're better supplied with oxygen and nutrients.</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold">2.</span>
      <span><strong>Muscle temperature rises:</strong> Warm muscles are more elastic and less prone to tears.</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold">3.</span>
      <span><strong>Joints are lubricated:</strong> Joint fluid becomes thinner and lubricates better.</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold">4.</span>
      <span><strong>Nervous system activated:</strong> Your reaction time improves, your coordination gets better.</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold">5.</span>
      <span><strong>Mental focus:</strong> You get into "climbing mode" and are ready for the challenge.</span>
    </div>
  </div>
</div>

#### A Good Warm-Up Program

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Your Warm-Up Ritual (10-15 Minutes)</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Phase 1: General Warm-Up (5 Minutes)</h5>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>Light running or walking (2-3 minutes)</li>
        <li>Arm circles (forward and backward)</li>
        <li>Shoulder circles</li>
        <li>Hip circles</li>
        <li>Light stretching exercises</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Phase 2: Specific Warm-Up (5-10 Minutes)</h5>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>Climb easy boulders (V0-V2)</li>
        <li>Start slowly, increase intensity</li>
        <li>Try different movements</li>
        <li>Activate fingers and wrists</li>
        <li>Bring body to operating temperature</li>
      </ul>
    </div>
  </div>
</div>

**Important:** A good warm-up should last at least 10-15 minutes. Too short is just as bad as no warm-up at all!

---

### Common Bouldering Injuries

If you know which injuries are common, you can better avoid them.

#### 1. Pulley Injuries (Pulley Tear)

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">The Most Common Finger Injury</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        Pulleys are bands that hold tendons in the fingers. In bouldering, they\'re extremely stressed, especially on small holds and overhangs.
      </p>
      <p className="text-sm font-semibold text-red-800 dark:text-red-200 mb-2">Symptoms:</p>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside mb-3">
        <li>Sudden, sharp pain in finger</li>
        <li>Swelling at finger base</li>
        <li>Difficulty bending finger</li>
        <li>A "pop" or "snap" when injured</li>
      </ul>
      <p className="text-sm font-semibold text-red-800 dark:text-red-200 mb-2">Prevention:</p>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li>Progress slowly, don\'t go to hard holds too quickly</li>
        <li>Warm up fingers with light exercises</li>
        <li>Don't hold small holds too long</li>
        <li>Stop immediately if in pain</li>
      </ul>
    </div>
  </div>
</div>

#### 2. Tendinitis (Tendon Inflammation)

<div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">Tendon Overload</h4>
  <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
    Tendinitis occurs from repeated overload. Tendons become irritated and inflamed.
  </p>
  <p className="text-sm font-semibold text-orange-800 dark:text-orange-200 mb-2">Symptoms:</p>
  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1 list-disc list-inside mb-3">
    <li>Pain during movement (especially in morning)</li>
    <li>Swelling and redness</li>
    <li>Stiffness</li>
    <li>Pain when pressed</li>
  </ul>
  <p className="text-sm font-semibold text-orange-800 dark:text-orange-200 mb-2">Prevention:</p>
  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1 list-disc list-inside">
    <li>Progress slowly, don\'t do too much at once</li>
    <li>Sufficient rest between sessions</li>
    <li>Stretching exercises for forearms</li>
    <li>Take a break at first signs</li>
  </ul>
</div>

#### 3. Shoulder Injuries

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">The Shoulder: A Complex Joint</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
    The shoulder is the most mobile joint in the body, but also very prone to injuries. In bouldering, it\'s heavily stressed.
  </p>
  <p className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-2">Common Problems:</p>
  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside mb-3">
    <li>Impingement syndrome (pinching)</li>
    <li>Rotator cuff injuries</li>
    <li>Shoulder instability</li>
  </ul>
  <p className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-2">Prevention:</p>
  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
    <li>Shoulder warm-up exercises</li>
    <li>Strength training for rotator cuff</li>
    <li>Good technique (don\'t just pull with arms!)</li>
    <li>If in pain: rest and consult doctor</li>
  </ul>
</div>

---

### Red Flags: Pain vs. Muscle Soreness

It's important to know when pain is a warning sign and when it\'s just muscle soreness.

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
      <Heart className="text-green-600 dark:text-green-400" size={24} />
      ✅ Muscle Soreness (Normal)
    </h4>
    <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
      <li>Begins 24-48 hours after training</li>
      <li>Affects large muscle groups</li>
      <li>Gets better with movement</li>
      <li>Symmetric (both sides)</li>
      <li>No sharp pain</li>
      <li>Disappears after a few days</li>
    </ul>
  </div>
  
  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
    <h4 className="font-bold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
      <AlertTriangle className="text-red-600 dark:text-red-400" size={24} />
      ❌ Warning Sign (Dangerous!)
    </h4>
    <ul className="text-sm text-red-700 dark:text-red-300 space-y-2 list-disc list-inside">
      <li>Sudden, sharp pain</li>
      <li>Pain during specific movements</li>
      <li>Swelling or redness</li>
      <li>Pain gets worse with movement</li>
      <li>Asymmetric (only one side)</li>
      <li>Lasts longer than a week</li>
      <li>Pain in joints or tendons</li>
    </ul>
  </div>
</div>

**The golden rule:** If you\'re unsure whether it\'s muscle soreness or an injury, consult a doctor. It's better to be safe!

---

### When in Pain: REST (Don't "Push Through"!)

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">The Most Dangerous Attitude</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        "I'll just push through, it'll get better" – that\'s the fastest way to a serious injury.
      </p>
      <p className="text-sm text-red-700 dark:text-red-300">
        <strong>Pain is a warning sign!</strong> If your body tells you something's wrong, listen. If you ignore pain, a small injury can become a big one.
      </p>
    </div>
  </div>
</div>

#### What to Do When in Pain?

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">The RICE Rule</h4>
  
  <div className="space-y-3 text-sm text-amber-700 dark:text-amber-300">
    <div className="flex items-start gap-2">
      <span className="font-bold text-amber-800 dark:text-amber-200">R</span>
      <span><strong>est:</strong> Stop climbing immediately. No further attempts.</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold text-amber-800 dark:text-amber-200">I</span>
      <span><strong>ce:</strong> Cool the injured area (15-20 minutes, several times daily).</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold text-amber-800 dark:text-amber-200">C</span>
      <span><strong>ompression:</strong> Light pressure bandage (not too tight!).</span>
    </div>
    <div className="flex items-start gap-2">
      <span className="font-bold text-amber-800 dark:text-amber-200">E</span>
      <span><strong>levation:</strong> Elevate the injured area to reduce swelling.</span>
    </div>
  </div>
</div>

**When to see a doctor?**
- If pain is severe or doesn't subside
- With swelling, redness, or overheating
- If you heard a "pop" or "snap"
- If you can no longer perform the movement
- If pain lasts longer than a week

---

### Prevention Strategies

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Shield className="text-green-600 dark:text-green-400" size={24} />
    How to Prevent Injuries
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">1. Always Warm Up</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        At least 10-15 minutes warm-up before every session. No exceptions!
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">2. Progress Slowly</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Don't go to hard boulders too quickly. Give your body time to adapt.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">3. Sufficient Rest</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        At least 1-2 rest days per week. Your body needs time to recover.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">4. Listen to Pain</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        If something hurts, stop. Don't ignore warning signs.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">5. Good Technique</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Learn proper technique. Bad technique leads to overload and injuries.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">6. Strength Training</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Strengthen your antagonists (opposing muscles) and your stability.
      </p>
    </div>
  </div>
</div>

---

### Summary: The Most Important Points

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Your Injury Prevention Checklist
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Always warm up:</strong> At least 10-15 minutes before every session.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Progress slowly:</strong> Don't go to hard boulders too quickly.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Recognize pain:</strong> Learn the difference between muscle soreness and warning sign.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>When in pain: REST:</strong> Never "push through" – that worsens injuries.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>RICE rule:</strong> Rest, Ice, Compression, Elevation for injuries.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Consult doctor:</strong> With severe pain, swelling, or if pain doesn't subside.</span>
    </li>
  </ul>
</div>

**Remember:** Injuries are preventable. With the right preventive measures, you can climb long and healthy. Your body is your most important tool – treat it well!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Aufwärm-Ritual entwickeln",
      description: "Entwickle ein persönliches Aufwärm-Ritual und lerne, Schmerz von Muskelkater zu unterscheiden.",
      checklist: [
        { text: "Erstelle dein persönliches Aufwärm-Ritual: 5 Minuten allgemeines Aufwärmen + 5-10 Minuten spezifisches Aufwärmen", checked: false },
        { text: "Führe dieses Ritual bei deiner nächsten Session durch (mindestens 10-15 Minuten)", checked: false },
        { text: "Lerne, Schmerz von Muskelkater zu unterscheiden: Beobachte deinen Körper nach dem Training", checked: false },
        { text: "Wichtig: Wenn du Schmerz spürst (nicht Muskelkater!), höre sofort auf zu klettern", checked: false },
        { text: "Merke dir die PECH-Regel: Pause, Eis, Compression, Hochlagern bei Verletzungen", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Develop Warm-Up Ritual",
      description: "Develop a personal warm-up ritual and learn to distinguish pain from muscle soreness.",
      checklist: [
        { text: "Create your personal warm-up ritual: 5 minutes general warm-up + 5-10 minutes specific warm-up", checked: false },
        { text: "Perform this ritual at your next session (at least 10-15 minutes)", checked: false },
        { text: "Learn to distinguish pain from muscle soreness: Observe your body after training", checked: false },
        { text: "Important: If you feel pain (not muscle soreness!), stop climbing immediately", checked: false },
        { text: "Remember the RICE rule: Rest, Ice, Compression, Elevation for injuries", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum ist Aufwärmen so wichtig?",
        answer: "Aufwärmen erhöht die Durchblutung, steigert die Muskel- und Gelenktemperatur, verbessert die Elastizität der Muskeln, schmiert die Gelenke und aktiviert das Nervensystem. Ein kalter Körper ist anfällig für Verletzungen."
      },
      {
        question: "Was ist der Unterschied zwischen Muskelkater und einem Warnsignal?",
        answer: "Muskelkater beginnt 24-48 Stunden nach dem Training, betrifft große Muskelgruppen, wird bei Bewegung besser und verschwindet nach einigen Tagen. Ein Warnsignal ist plötzlicher, stechender Schmerz, oft mit Schwellung, wird bei Bewegung schlimmer und hält länger als eine Woche an."
      },
      {
        question: "Was solltest du tun, wenn du Schmerz spürst?",
        answer: "Bei Schmerz sollte man sofort aufhören zu klettern (PAUSE), niemals 'durchtrainieren'. Die PECH-Regel anwenden: Pause, Eis, Compression, Hochlagern. Bei starkem Schmerz, Schwellung oder wenn der Schmerz nicht nachlässt, einen Arzt konsultieren."
      }
    ],
    en: [
      {
        question: "Why is warming up so important?",
        answer: "Warming up increases blood circulation, raises muscle and joint temperature, improves muscle elasticity, lubricates joints, and activates the nervous system. A cold body is prone to injuries."
      },
      {
        question: "What is the difference between muscle soreness and a warning sign?",
        answer: "Muscle soreness begins 24-48 hours after training, affects large muscle groups, gets better with movement, and disappears after a few days. A warning sign is sudden, sharp pain, often with swelling, gets worse with movement, and lasts longer than a week."
      },
      {
        question: "What should you do when you feel pain?",
        answer: "When in pain, you should stop climbing immediately (REST), never 'push through'. Apply the RICE rule: Rest, Ice, Compression, Elevation. With severe pain, swelling, or if pain doesn't subside, consult a doctor."
      }
    ]
  }
};

