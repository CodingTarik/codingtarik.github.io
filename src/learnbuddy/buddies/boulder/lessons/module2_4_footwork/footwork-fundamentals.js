import { Footprints, Target, Zap, AlertCircle, TrendingUp, Activity, Eye } from 'lucide-react';

export const footworkFundamentals = {
  title: {
    de: "Fußtechnik - Das Wichtigste!",
    en: "Footwork - The Most Important!"
  },
  description: {
    de: "Fußtechnik ist das Fundament des effizienten Kletterns. Lerne, wie du präzise trittst, leise kletterst und die Kraft deiner Beine nutzt.",
    en: "Footwork is the foundation of efficient climbing. Learn how to step precisely, climb quietly, and use the power of your legs."
  },
  content: {
    de: `
### Fußtechnik: Das Wichtigste beim Klettern!

Wenn du dir einen erfahrenen Kletterer ansiehst, wirst du feststellen: Seine Füße sind <strong>präzise, leise und kontrolliert</strong>. Er schaut auf jeden Tritt, bevor er drauf steigt. Er macht keine Geräusche. Seine Beine arbeiten aktiv.

Fußtechnik ist <strong>das Wichtigste</strong> beim Klettern. Warum? Weil deine Beine 3x stärker sind als deine Arme!

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Footprints className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Das fundamentale Prinzip</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        <strong>"Beine drücken, Arme halten Balance!"</strong>
      </p>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Deine Beine sind deine stärkste Kraftquelle. Nutze sie! Deine Arme sollten nur das Gleichgewicht halten, nicht dein gesamtes Gewicht tragen.
      </p>
    </div>
  </div>
</div>

---

### Warum Beine so wichtig sind

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    Die Kraft der Beine
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Beine sind 3x stärker als Arme</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Deine Oberschenkelmuskulatur (Quadrizeps) und Gesäßmuskeln sind die stärksten Muskeln deines Körpers. Warum sollten wir diese Kraftquelle ignorieren?
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li><strong>Oberschenkel:</strong> Die größten Muskeln deines Körpers</li>
        <li><strong>Gesäß:</strong> Dein stärkster Muskel</li>
        <li><strong>Waden:</strong> Stabilisieren und geben Antrieb</li>
        <li><strong>Arme:</strong> Relativ klein, schnell erschöpft</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Gute Fußarbeit = Energieersparnis</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Wenn du deine Beine richtig nutzt, sparst du enorm viel Energie:
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Weniger Belastung auf die Arme</li>
        <li>Längere Ausdauer</li>
        <li>Effizientere Bewegungen</li>
        <li>Weniger Erschöpfung</li>
      </ul>
    </div>
  </div>
</div>

---

### Präzises Treten: Schaue auf den Tritt BEVOR du drauf steigst!

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Eye className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Der häufigste Fehler</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        Anfänger schauen nicht auf die Tritte. Sie treten blind und hoffen, dass es schon passen wird. Das führt zu:
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
        <li>Rutschen und Abrutschen</li>
        <li>Ineffizienter Positionierung</li>
        <li>Verschwendeter Energie</li>
        <li>Unkontrollierten Bewegungen</li>
      </ul>
    </div>
  </div>
</div>

#### Die richtige Technik: Schauen, dann treten

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">Der Prozess des präzisen Tretens</h4>
  
  <ol className="text-sm text-teal-700 dark:text-teal-300 space-y-3 list-decimal list-inside">
    <li className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <strong>1. Schauen:</strong> Schaue auf den Tritt, bevor du deinen Fuß bewegst. Identifiziere die beste Position.
    </li>
    <li className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <strong>2. Planen:</strong> Überlege, welche Kante du nutzen willst (Innenkante, Spitze, Außenkante).
    </li>
    <li className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <strong>3. Bewusst bewegen:</strong> Bewege deinen Fuß bewusst zum Tritt. Nicht schnell, sondern präzise.
    </li>
    <li className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <strong>4. Platzieren:</strong> Platziere deinen Fuß genau auf der geplanten Position.
    </li>
    <li className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <strong>5. Vertrauen:</strong> Vertraue auf deine Platzierung und verlagere Gewicht.
    </li>
  </ol>
</div>

**Wichtig:** Schauen ist nicht optional – es ist essentiell! Gute Kletterer schauen immer auf die Tritte, bevor sie drauf steigen.

---

### Die verschiedenen Tritt-Kanten

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Welche Kante nutzt du wann?</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">1. Innenkante (meist präziser)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Wann:</strong> Die meisten Situationen. Standard-Tritt-Technik.
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        <strong>Wie:</strong> Die Innenseite deines Schuhs (großer Zeh) auf den Tritt. Sehr präzise und stabil.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">2. Spitze (für kleinste Tritte)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Wann:</strong> Sehr kleine Tritte, wo du maximale Präzision brauchst.
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        <strong>Wie:</strong> Nur die Spitze des Schuhs (großer Zeh) auf den Tritt. Sehr präzise, aber weniger stabil.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">3. Außenkante (beim Eindrehen)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Wann:</strong> Beim Eindrehen (Drop Knee Turn), um Reichweite zu gewinnen.
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        <strong>Wie:</strong> Die Außenseite deines Schuhs auf den Tritt. Ermöglicht extreme Körperpositionen.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">4. Ferse (Heel Hook)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Wann:</strong> Spezielle Technik für Überhänge und bestimmte Moves.
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        <strong>Wie:</strong> Ferse auf Griff oder Volume haken. Zieht dich hoch oder stabilisiert.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">5. Oberseite (Toe Hook)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Wann:</strong> Spezielle Technik für Überhänge und Dächer.
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        <strong>Wie:</strong> Oberseite des Schuhs über Griff. Sehr Core-intensiv.
      </p>
    </div>
  </div>
</div>

---

### Leise Treten = Gute Technik

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Zap className="text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">Warum leise Treten wichtig ist</h4>
      <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-3">
        Wenn du leise trittst, bedeutet das:
      </p>
      <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1 list-disc list-inside">
        <li>Du trittst <strong>präzise</strong> – kein Rutschen, kein Verfehlen</li>
        <li>Du trittst <strong>kontrolliert</strong> – bewusste Bewegungen</li>
        <li>Du trittst <strong>effizient</strong> – keine verschwendete Energie</li>
        <li>Du hast <strong>Vertrauen</strong> – du weißt, wo dein Fuß ist</li>
      </ul>
    </div>
  </div>
</div>

#### Was bedeutet "leise Treten"?

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">Leise vs. Laut</h4>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-3">❌ Lautes Treten</h5>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-2 list-disc list-inside">
        <li>Knallen oder Rutschen</li>
        <li>Unkontrollierte Bewegungen</li>
        <li>Mehrfaches Nachjustieren</li>
        <li>Verschwendete Energie</li>
        <li>Unsicherheit</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-green-200 dark:border-green-700">
      <h5 className="font-bold text-green-800 dark:text-green-200 mb-3">✅ Leises Treten</h5>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
        <li>Kein Knallen oder Rutschen</li>
        <li>Bewusste Platzierung</li>
        <li>Präzise auf Anhieb</li>
        <li>Energieeffizient</li>
        <li>Vertrauen in die Schuhe</li>
      </ul>
    </div>
  </div>
</div>

**Dein Ziel:** Werde zum "Stillen Affen" – leise, präzise, kontrolliert!

---

### Bewusstes Platzieren

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">Wie du bewusst platzierst</h4>
  
  <div className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-1">1. Schauen</h5>
      <p>Schau auf den Tritt, bevor du deinen Fuß bewegst. Identifiziere die beste Position.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-1">2. Langsam bewegen</h5>
      <p>Bewege deinen Fuß langsam und kontrolliert zum Tritt. Nicht schnell, sondern präzise.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-1">3. Präzise platzieren</h5>
      <p>Platziere deinen Fuß genau auf der geplanten Position. Kein Rutschen, kein Nachjustieren.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-1">4. Vertrauen</h5>
      <p>Vertraue auf deine Platzierung. Wenn du präzise platziert hast, kannst du Gewicht verlagern.</p>
    </div>
  </div>
</div>

---

### Vertrauen in die Schuhe

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Warum Vertrauen wichtig ist</h4>
  
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
    Wenn du nicht auf deine Schuhe vertraust, wirst du:
  </p>
  
  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside mb-3">
    <li>Zu viel Gewicht auf die Arme verlagern</li>
    <li>Unsicher treten</li>
    <li>Mehrfach nachjustieren</li>
    <li>Energie verschwenden</li>
  </ul>
  
  <p className="text-sm text-purple-700 dark:text-purple-300">
    <strong>Die Lösung:</strong> Vertraue auf deine Schuhe! Wenn du präzise platziert hast, wird dein Fuß halten. Die Reibung zwischen Schuh und Tritt ist sehr hoch.
  </p>
</div>

---

### Praktische Übungen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Activity className="text-green-600 dark:text-green-400" size={24} />
    Übungen für präzises Treten
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 1: Schauen, dann treten</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Klettere einen einfachen Boulder</li>
        <li>Bei jedem Tritt: Stoppe, schaue auf den Tritt</li>
        <li>Plane die Platzierung</li>
        <li>Trette bewusst und präzise</li>
        <li>Wiederhole bis es automatisch wird</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 2: Leise Treten</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Klettere einen Boulder sehr langsam</li>
        <li>Ziel: Kein Geräusch beim Treten</li>
        <li>Jeder Tritt sollte präzise sein</li>
        <li>Kein Rutschen, kein Nachjustieren</li>
        <li>Spüre die Kontrolle</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 3: Tritt-Kanten üben</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Suche verschiedene Tritt-Größen</li>
        <li>Übe Innenkante (Standard)</li>
        <li>Übe Spitze (kleine Tritte)</li>
        <li>Spüre den Unterschied</li>
        <li>Lerne, welche Kante wann am besten ist</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 4: Vertrauen entwickeln</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Platziere deinen Fuß präzise</li>
        <li>Vertraue auf die Platzierung</li>
        <li>Verlagere Gewicht langsam</li>
        <li>Spüre, wie der Schuh hält</li>
        <li>Baue Vertrauen auf</li>
      </ol>
    </div>
  </div>
</div>

---

### Zusammenfassung: Die wichtigsten Punkte

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Dein Fußtechnik-Check
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Beine drücken, Arme halten Balance:</strong> Beine sind 3x stärker als Arme. Nutze diese Kraft!</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Präzises Treten:</strong> Schaue auf den Tritt BEVOR du drauf steigst. Plane die Platzierung.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Tritt-Kanten:</strong> Innenkante (Standard), Spitze (kleine Tritte), Außenkante (Eindrehen), Ferse (Heel Hook), Oberseite (Toe Hook).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Leise Treten:</strong> Kein Knallen, kein Rutschen. Bewusste Platzierung, Vertrauen in die Schuhe.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Bewusstes Platzieren:</strong> Schauen, planen, langsam bewegen, präzise platzieren, vertrauen.</span>
    </li>
  </ul>
</div>

**Denk daran:** Fußtechnik ist das Wichtigste beim Klettern. Gute Fußarbeit macht dich zu einem effizienten Kletterer!
    `,
    en: `
### Footwork: The Most Important Thing in Climbing!

When you watch an experienced climber, you'll notice: Their feet are <strong>precise, quiet, and controlled</strong>. They look at each hold before stepping on it. They make no sounds. Their legs work actively.

Footwork is <strong>the most important thing</strong> in climbing. Why? Because your legs are 3x stronger than your arms!

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Footprints className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">The Fundamental Principle</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        <strong>"Legs push, arms hold balance!"</strong>
      </p>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Your legs are your strongest power source. Use them! Your arms should only maintain balance, not carry your entire weight.
      </p>
    </div>
  </div>
</div>

---

### Why Legs Are So Important

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    The Power of Legs
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Legs Are 3x Stronger Than Arms</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Your thigh muscles (quadriceps) and glutes are the strongest muscles in your body. Why should we ignore this power source?
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li><strong>Thighs:</strong> The largest muscles in your body</li>
        <li><strong>Glutes:</strong> Your strongest muscle</li>
        <li><strong>Calves:</strong> Stabilize and provide drive</li>
        <li><strong>Arms:</strong> Relatively small, get tired quickly</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Good Footwork = Energy Savings</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        When you use your legs correctly, you save enormous energy:
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Less load on arms</li>
        <li>Longer endurance</li>
        <li>More efficient movements</li>
        <li>Less exhaustion</li>
      </ul>
    </div>
  </div>
</div>

---

### Precise Stepping: Look at the Hold BEFORE You Step on It!

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Eye className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">The Most Common Mistake</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        Beginners don't look at holds. They step blindly and hope it will work. This leads to:
      </p>
      <ul className="text-sm text-purple-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Slipping and falling off</li>
        <li>Inefficient positioning</li>
        <li>Wasted energy</li>
        <li>Uncontrolled movements</li>
      </ul>
    </div>
  </div>
</div>

#### The Right Technique: Look, Then Step

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">The Process of Precise Stepping</h4>
  
  <ol className="text-sm text-teal-700 dark:text-teal-300 space-y-3 list-decimal list-inside">
    <li className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <strong>1. Look:</strong> Look at the hold before moving your foot. Identify the best position.
    </li>
    <li className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <strong>2. Plan:</strong> Think about which edge you want to use (inside edge, toe, outside edge).
    </li>
    <li className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <strong>3. Move Consciously:</strong> Move your foot consciously to the hold. Not fast, but precise.
    </li>
    <li className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <strong>4. Place:</strong> Place your foot exactly on the planned position.
    </li>
    <li className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <strong>5. Trust:</strong> Trust your placement and shift weight.
    </li>
  </ol>
</div>

**Important:** Looking is not optional – it's essential! Good climbers always look at holds before stepping on them.

---

### The Different Hold Edges

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Which Edge Do You Use When?</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">1. Inside Edge (usually more precise)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>When:</strong> Most situations. Standard stepping technique.
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        <strong>How:</strong> Inside of your shoe (big toe) on the hold. Very precise and stable.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">2. Toe (for smallest holds)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>When:</strong> Very small holds where you need maximum precision.
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        <strong>How:</strong> Only the tip of the shoe (big toe) on the hold. Very precise, but less stable.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">3. Outside Edge (when turning in)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>When:</strong> When turning in (drop knee turn) to gain reach.
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        <strong>How:</strong> Outside of your shoe on the hold. Enables extreme body positions.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">4. Heel (Heel Hook)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>When:</strong> Special technique for overhangs and certain moves.
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        <strong>How:</strong> Heel on hold or volume. Pulls you up or stabilizes.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">5. Top (Toe Hook)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>When:</strong> Special technique for overhangs and roofs.
      </p>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        <strong>How:</strong> Top of shoe over hold. Very core-intensive.
      </p>
    </div>
  </div>
</div>

---

### Quiet Stepping = Good Technique

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Zap className="text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">Why Quiet Stepping Is Important</h4>
      <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-3">
        When you step quietly, it means:
      </p>
      <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1 list-disc list-inside">
        <li>You step <strong>precisely</strong> – no slipping, no missing</li>
        <li>You step <strong>controlled</strong> – conscious movements</li>
        <li>You step <strong>efficiently</strong> – no wasted energy</li>
        <li>You have <strong>trust</strong> – you know where your foot is</li>
      </ul>
    </div>
  </div>
</div>

#### What Does "Quiet Stepping" Mean?

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">Quiet vs. Loud</h4>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-3">❌ Loud Stepping</h5>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-2 list-disc list-inside">
        <li>Slamming or slipping</li>
        <li>Uncontrolled movements</li>
        <li>Multiple readjustments</li>
        <li>Wasted energy</li>
        <li>Uncertainty</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-green-200 dark:border-green-700">
      <h5 className="font-bold text-green-800 dark:text-green-200 mb-3">✅ Quiet Stepping</h5>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
        <li>No slamming or slipping</li>
        <li>Conscious placement</li>
        <li>Precise on first try</li>
        <li>Energy-efficient</li>
        <li>Trust in shoes</li>
      </ul>
    </div>
  </div>
</div>

**Your Goal:** Become the "Silent Monkey" – quiet, precise, controlled!

---

### Conscious Placement

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">How You Place Consciously</h4>
  
  <div className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-1">1. Look</h5>
      <p>Look at the hold before moving your foot. Identify the best position.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-1">2. Move Slowly</h5>
      <p>Move your foot slowly and controlled to the hold. Not fast, but precise.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-1">3. Place Precisely</h5>
      <p>Place your foot exactly on the planned position. No slipping, no readjusting.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-1">4. Trust</h5>
      <p>Trust your placement. If you've placed precisely, you can shift weight.</p>
    </div>
  </div>
</div>

---

### Trust in Shoes

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Why Trust Is Important</h4>
  
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
    If you don't trust your shoes, you will:
  </p>
  
  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside mb-3">
    <li>Shift too much weight to arms</li>
    <li>Step uncertainly</li>
    <li>Readjust multiple times</li>
    <li>Waste energy</li>
  </ul>
  
  <p className="text-sm text-purple-700 dark:text-purple-300">
    <strong>The solution:</strong> Trust your shoes! If you've placed precisely, your foot will hold. The friction between shoe and hold is very high.
  </p>
</div>

---

### Practical Exercises

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Activity className="text-green-600 dark:text-green-400" size={24} />
    Exercises for Precise Stepping
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 1: Look, Then Step</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Climb an easy boulder</li>
        <li>At each hold: Stop, look at the hold</li>
        <li>Plan the placement</li>
        <li>Step consciously and precisely</li>
        <li>Repeat until it becomes automatic</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 2: Quiet Stepping</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Climb a boulder very slowly</li>
        <li>Goal: No sound when stepping</li>
        <li>Each step should be precise</li>
        <li>No slipping, no readjusting</li>
        <li>Feel the control</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 3: Practice Hold Edges</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Find different hold sizes</li>
        <li>Practice inside edge (standard)</li>
        <li>Practice toe (small holds)</li>
        <li>Feel the difference</li>
        <li>Learn which edge is best when</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 4: Develop Trust</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Place your foot precisely</li>
        <li>Trust the placement</li>
        <li>Shift weight slowly</li>
        <li>Feel how the shoe holds</li>
        <li>Build trust</li>
      </ol>
    </div>
  </div>
</div>

---

### Summary: The Most Important Points

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Your Footwork Checklist
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Legs push, arms hold balance:</strong> Legs are 3x stronger than arms. Use this power!</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Precise stepping:</strong> Look at the hold BEFORE you step on it. Plan the placement.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Hold edges:</strong> Inside edge (standard), toe (small holds), outside edge (turning in), heel (heel hook), top (toe hook).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Quiet stepping:</strong> No slamming, no slipping. Conscious placement, trust in shoes.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Conscious placement:</strong> Look, plan, move slowly, place precisely, trust.</span>
    </li>
  </ul>
</div>

**Remember:** Footwork is the most important thing in climbing. Good footwork makes you an efficient climber!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Präzises Treten",
      description: "Übe präzises Treten und entwickle gute Fußtechnik.",
      checklist: [
        { text: "Übung 1: Schauen, dann treten - Bei jedem Tritt stoppen, schauen, planen, dann treten", checked: false },
        { text: "Übung 2: Leise Treten - Klettere sehr langsam, Ziel: kein Geräusch beim Treten", checked: false },
        { text: "Übung 3: Tritt-Kanten üben - Übe Innenkante (Standard) und Spitze (kleine Tritte)", checked: false },
        { text: "Übung 4: Vertrauen entwickeln - Platziere präzise, vertraue auf die Platzierung, verlagere Gewicht", checked: false },
        { text: "Wichtig: Beobachte erfahrene Kletterer - Wie treten sie? Sind sie leise und präzise?", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Precise Stepping",
      description: "Practice precise stepping and develop good footwork.",
      checklist: [
        { text: "Exercise 1: Look, then step - At each hold stop, look, plan, then step", checked: false },
        { text: "Exercise 2: Quiet stepping - Climb very slowly, goal: no sound when stepping", checked: false },
        { text: "Exercise 3: Practice hold edges - Practice inside edge (standard) and toe (small holds)", checked: false },
        { text: "Exercise 4: Develop trust - Place precisely, trust placement, shift weight", checked: false },
        { text: "Important: Observe experienced climbers - How do they step? Are they quiet and precise?", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum ist Fußtechnik das Wichtigste beim Klettern?",
        answer: "Fußtechnik ist das Wichtigste, weil Beine 3x stärker sind als Arme. Gute Fußarbeit bedeutet Energieersparnis, längere Ausdauer, effizientere Bewegungen und weniger Erschöpfung. Das fundamentale Prinzip ist 'Beine drücken, Arme halten Balance' - die Beine sollten die Hauptarbeit machen, die Arme nur das Gleichgewicht halten."
      },
      {
        question: "Wie trittst du präzise?",
        answer: "Präzises Treten bedeutet: 1) Schaue auf den Tritt BEVOR du drauf steigst, 2) Plane die Platzierung (welche Kante?), 3) Bewege deinen Fuß bewusst und langsam zum Tritt, 4) Platziere präzise auf der geplanten Position, 5) Vertraue auf die Platzierung und verlagere Gewicht. Schauen ist nicht optional - es ist essentiell!"
      },
      {
        question: "Was bedeutet 'leises Treten' und warum ist es wichtig?",
        answer: "Leises Treten bedeutet kein Knallen, kein Rutschen, keine unkontrollierten Bewegungen. Es zeigt, dass du präzise, kontrolliert und effizient trittst. Leises Treten bedeutet bewusste Platzierung, Vertrauen in die Schuhe und Energieersparnis. Es ist ein Zeichen guter Technik - der 'Stille Affe' tritt leise!"
      }
    ],
    en: [
      {
        question: "Why is footwork the most important thing in climbing?",
        answer: "Footwork is the most important because legs are 3x stronger than arms. Good footwork means energy savings, longer endurance, more efficient movements, and less exhaustion. The fundamental principle is 'legs push, arms hold balance' - legs should do the main work, arms only maintain balance."
      },
      {
        question: "How do you step precisely?",
        answer: "Precise stepping means: 1) Look at the hold BEFORE you step on it, 2) Plan the placement (which edge?), 3) Move your foot consciously and slowly to the hold, 4) Place precisely on the planned position, 5) Trust the placement and shift weight. Looking is not optional - it's essential!"
      },
      {
        question: "What does 'quiet stepping' mean and why is it important?",
        answer: "Quiet stepping means no slamming, no slipping, no uncontrolled movements. It shows you step precisely, controlled, and efficiently. Quiet stepping means conscious placement, trust in shoes, and energy savings. It's a sign of good technique - the 'Silent Monkey' steps quietly!"
      }
    ]
  }
};

