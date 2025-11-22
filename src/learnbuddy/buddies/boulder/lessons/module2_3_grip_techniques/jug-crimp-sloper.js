import { Hand, AlertCircle, Target, Zap, TrendingUp, Activity } from 'lucide-react';

export const jugCrimpSloper = {
  title: {
    de: "Die 7 Hauptgriffe: Jug, Crimp & Sloper",
    en: "The 7 Main Grips: Jug, Crimp & Sloper"
  },
  description: {
    de: "Lerne die drei wichtigsten Grifftypen kennen: Jug (Henkel), Crimp (Leiste) und Sloper (Aufleger). Jeder Griff erfordert eine andere Technik.",
    en: "Learn the three most important grip types: Jug (handle), Crimp (edge) and Sloper (slope). Each grip requires a different technique."
  },
  content: {
    de: `
### Die 7 Hauptgriffe: Grundlagen der Greiftechnik

Beim Bouldern gibt es verschiedene Grifftypen, und jeder erfordert eine andere Technik. Die drei wichtigsten Griffe für Anfänger sind **Jug**, **Crimp** und **Sloper**. Lerne sie kennen, und du wirst effizienter klettern!

---

### 1. JUG (Henkel) - Dein bester Freund als Anfänger

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <div className="flex items-start gap-4">
    <Hand className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Was ist ein Jug?</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-3">
        Ein <strong>Jug</strong> (englisch für "Henkel" oder "Krug") ist ein großer, positiver Griff, den du komplett umfassen kannst. Er ist der einfachste und freundlichste Griff für Anfänger.
      </p>
      <p className="text-sm text-green-700 dark:text-green-300">
        <strong>Eigenschaften:</strong> Groß, positiv (du kannst ihn von oben greifen), einfach zu halten, perfekt zum Verschnaufen.
      </p>
    </div>
  </div>
</div>

#### Wie greifst du einen Jug?

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">Die Technik</h4>
  
  <div className="space-y-3 text-sm text-blue-700 dark:text-blue-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-1">✅ Einfach umfassen</h5>
      <p>Lege deine Hand komplett um den Griff. Alle Finger können greifen.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-1">✅ Hängen</h5>
      <p>Du kannst einfach hängen. Keine spezielle Technik nötig.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-1">✅ Verschnaufen</h5>
      <p>Jugs sind perfekt zum Verschnaufen. Nutze sie als Rastpositionen!</p>
    </div>
  </div>
</div>

**Tipp:** Jugs sind deine besten Freunde als Anfänger. Nutze sie zum Verschnaufen und zum Erholen!

---

### 2. CRIMP (Leiste) - Vorsicht bei Anfängern!

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Was ist ein Crimp?</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        Ein <strong>Crimp</strong> ist ein kleiner, schmaler Griff, den du nur mit den ersten beiden Fingergliedern greifen kannst. Er ist sehr kraftvoll, aber auch <strong>verletzungsgefährlich</strong> für Anfänger!
      </p>
      <p className="text-sm text-red-700 dark:text-red-300">
        <strong>Eigenschaften:</strong> Klein, schmal, nur erste beiden Fingerglieder, hohe Belastung auf Finger, Verletzungsrisiko!
      </p>
    </div>
  </div>
</div>

#### Open Crimp vs. Closed Crimp

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Die zwei Arten von Crimps</h4>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">✅ Open Crimp (Half Crimp)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Für Anfänger empfohlen!</strong>
      </p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>Finger leicht gebogen</li>
        <li>Geringeres Verletzungsrisiko</li>
        <li>Weniger Kraft, aber sicherer</li>
        <li>Gute Übergangstechnik</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">⚠️ Closed Crimp (Full Crimp)</h5>
      <p className="text-sm text-red-700 dark:text-red-300 mb-2">
        <strong>Nur für Fortgeschrittene!</strong>
      </p>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li>Daumen über Zeigefinger</li>
        <li>Hohes Verletzungsrisiko</li>
        <li>Mehr Kraft, aber gefährlich</li>
        <li>Nur wenn nötig!</li>
      </ul>
    </div>
  </div>
</div>

#### Warum ist Crimping gefährlich?

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">Das Verletzungsrisiko</h4>
  
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Beim Crimping wird eine <strong>hohe Belastung</strong> auf die Finger-Sehnen ausgeübt. Die Sehnen brauchen Monate, um sich anzupassen. Wenn du zu früh oder zu viel crimpst, riskierst du:
  </p>
  
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-2 list-disc list-inside">
    <li><strong>Pulley-Verletzungen:</strong> Die Ringbänder in den Fingern können reißen</li>
    <li><strong>Sehnenentzündungen:</strong> Schmerzhafte Entzündungen der Finger-Sehnen</li>
    <li><strong>Chronische Probleme:</strong> Langfristige Schäden, die schwer zu heilen sind</li>
  </ul>
  
  <p className="text-sm text-red-700 dark:text-red-300 mt-3">
    <strong>Als Anfänger:</strong> Vermeide Closed Crimps komplett! Nutze Open Crimps nur sparsam. Finger-Kraft und Sehnen-Anpassung dauern Monate.
  </p>
</div>

#### Wie greifst du einen Crimp sicher?

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">Sichere Crimp-Technik</h4>
  
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li><strong>Open Crimp verwenden:</strong> Finger leicht gebogen, kein Daumen über Zeigefinger</li>
    <li><strong>Langsam steigern:</strong> Beginne mit großen Crimps, arbeite dich zu kleineren vor</li>
    <li><strong>Nicht ruckartig belasten:</strong> Langsam Gewicht auf den Griff verlagern</li>
    <li><strong>Höre auf deinen Körper:</strong> Bei Schmerzen sofort stoppen!</li>
    <li><strong>Finger-Kraft trainieren:</strong> Langsam und kontrolliert, nicht übertreiben</li>
  </ol>
</div>

---

### 3. SLOPER (Aufleger) - Reibung statt Kraft

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Hand className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Was ist ein Sloper?</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        Ein <strong>Sloper</strong> ist ein runder, abfallender Griff ohne positive Kante. Du kannst ihn nicht "greifen", sondern musst ihn "auflegen" und Reibung nutzen.
      </p>
      <p className="text-sm text-purple-700 dark:text-purple-300">
        <strong>Eigenschaften:</strong> Rund, abfallend, keine positive Kante, Reibung ist alles, sehr technisch.
      </p>
    </div>
  </div>
</div>

#### Wie greifst du einen Sloper?

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">Die Sloper-Technik</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">1. Nicht "greifen", sondern "auflegen"</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        Lege deine Handfläche flach auf den Sloper. Nicht mit den Fingerspitzen greifen, sondern mit der ganzen Handfläche Kontakt haben.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">2. Arme gestreckt</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        Halte deine Arme gestreckt! Gebeugte Arme reduzieren die Reibung. Gestreckte Arme = mehr Reibung.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">3. Körper tief</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        Halte deinen Körper tief unter dem Sloper. Je tiefer du bist, desto mehr Reibung kannst du erzeugen.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">4. Schwerpunkt zentral</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        Dein Schwerpunkt sollte direkt unter dem Sloper sein. Das maximiert die Reibung.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">5. Chalk ist wichtig!</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        Reibung = Kraft. Chalk erhöht die Reibung. Nutze Chalk bei Slopern!
      </p>
    </div>
  </div>
</div>

#### Der häufigste Fehler bei Slopern

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-3">Was nicht funktioniert</h4>
  
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    <strong>Der Fehler:</strong> Anfänger versuchen, Sloper mit gebeugten Armen und Fingerspitzen zu greifen, als wären es Crimps.
  </p>
  
  <p className="text-sm text-red-700 dark:text-red-300">
    <strong>Warum es nicht funktioniert:</strong> Sloper haben keine positive Kante zum Greifen. Du brauchst Reibung, nicht Kraft. Gebeugte Arme reduzieren die Reibung.
  </p>
</div>

---

### Vergleich der drei Griffe

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-4">Griff-Vergleich</h4>
  
  <table className="w-full border-collapse text-sm">
    <thead>
      <tr className="bg-indigo-100 dark:bg-indigo-800">
        <th className="border p-2 text-left">Griff</th>
        <th className="border p-2 text-left">Schwierigkeit</th>
        <th className="border p-2 text-left">Technik</th>
        <th className="border p-2 text-left">Verletzungsrisiko</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border p-2 font-bold">Jug</td>
        <td className="border p-2">Einfach</td>
        <td className="border p-2">Einfach umfassen</td>
        <td className="border p-2 text-green-600 dark:text-green-400">Niedrig</td>
      </tr>
      <tr>
        <td className="border p-2 font-bold">Crimp</td>
        <td className="border p-2">Mittel-Schwer</td>
        <td className="border p-2">Erste beiden Fingerglieder</td>
        <td className="border p-2 text-red-600 dark:text-red-400">Hoch!</td>
      </tr>
      <tr>
        <td className="border p-2 font-bold">Sloper</td>
        <td className="border p-2">Schwer</td>
        <td className="border p-2">Reibung nutzen</td>
        <td className="border p-2 text-amber-600 dark:text-amber-400">Mittel</td>
      </tr>
    </tbody>
  </table>
</div>

---

### Praktische Übungen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Activity className="text-green-600 dark:text-green-400" size={24} />
    Übungen für die drei Griffe
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 1: Jug-Erkennung</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Gehe durch die Halle und identifiziere alle Jugs</li>
        <li>Klettere einen Boulder nur mit Jugs</li>
        <li>Nutze Jugs als Rastpositionen</li>
        <li>Spüre, wie einfach sie zu halten sind</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 2: Open Crimp üben</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Suche große Crimps (nicht zu klein!)</li>
        <li>Greife mit Open Crimp (Finger leicht gebogen)</li>
        <li>Langsam Gewicht verlagern</li>
        <li>Bei Schmerzen sofort stoppen!</li>
        <li>Nur sparsam üben als Anfänger</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 3: Sloper-Technik</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Suche einen großen Sloper</li>
        <li>Lege Handfläche flach auf</li>
        <li>Arme gestreckt halten</li>
        <li>Körper tief positionieren</li>
        <li>Spüre die Reibung</li>
        <li>Chalk verwenden!</li>
      </ol>
    </div>
  </div>
</div>

---

### Zusammenfassung: Die wichtigsten Punkte

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Dein Griff-Check
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Jug:</strong> Großer, positiver Griff. Einfach umfassen, hängen, verschnaufen. Dein bester Freund als Anfänger!</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Crimp:</strong> Kleiner, schmaler Griff. Nur erste beiden Fingerglieder. Open Crimp für Anfänger, Closed Crimp vermeiden! Hohes Verletzungsrisiko.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Sloper:</strong> Runder, abfallender Griff. Nicht greifen, sondern auflegen. Reibung nutzen. Arme gestreckt, Körper tief, Chalk wichtig!</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Sicherheit:</strong> Crimps vorsichtig angehen, langsam steigern, auf Schmerzen achten. Finger-Kraft braucht Monate!</span>
    </li>
  </ul>
</div>

**Denk daran:** Jeder Griff erfordert eine andere Technik. Lerne sie kennen, und du wirst effizienter klettern!
    `,
    en: `
### The 7 Main Grips: Fundamentals of Grip Technique

In bouldering, there are different grip types, and each requires a different technique. The three most important grips for beginners are **Jug**, **Crimp**, and **Sloper**. Learn them, and you'll climb more efficiently!

---

### 1. JUG (Handle) - Your Best Friend as a Beginner

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <div className="flex items-start gap-4">
    <Hand className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">What Is a Jug?</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-3">
        A <strong>Jug</strong> (English for "handle" or "jug") is a large, positive hold that you can fully wrap your hand around. It's the easiest and friendliest grip for beginners.
      </p>
      <p className="text-sm text-green-700 dark:text-green-300">
        <strong>Characteristics:</strong> Large, positive (you can grip it from above), easy to hold, perfect for resting.
      </p>
    </div>
  </div>
</div>

#### How Do You Grip a Jug?

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">The Technique</h4>
  
  <div className="space-y-3 text-sm text-blue-700 dark:text-blue-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-1">✅ Simply Wrap</h5>
      <p>Place your hand completely around the hold. All fingers can grip.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-1">✅ Hang</h5>
      <p>You can simply hang. No special technique needed.</p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-1">✅ Rest</h5>
      <p>Jugs are perfect for resting. Use them as rest positions!</p>
    </div>
  </div>
</div>

**Tip:** Jugs are your best friends as a beginner. Use them for resting and recovery!

---

### 2. CRIMP (Edge) - Caution for Beginners!

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">What Is a Crimp?</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        A <strong>crimp</strong> is a small, narrow hold that you can only grip with the first two finger joints. It's very powerful, but also <strong>injury-prone</strong> for beginners!
      </p>
      <p className="text-sm text-red-700 dark:text-red-300">
        <strong>Characteristics:</strong> Small, narrow, only first two finger joints, high load on fingers, injury risk!
      </p>
    </div>
  </div>
</div>

#### Open Crimp vs. Closed Crimp

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">The Two Types of Crimps</h4>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">✅ Open Crimp (Half Crimp)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        <strong>Recommended for beginners!</strong>
      </p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>Fingers slightly bent</li>
        <li>Lower injury risk</li>
        <li>Less power, but safer</li>
        <li>Good transition technique</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">⚠️ Closed Crimp (Full Crimp)</h5>
      <p className="text-sm text-red-700 dark:text-red-300 mb-2">
        <strong>Only for advanced climbers!</strong>
      </p>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li>Thumb over index finger</li>
        <li>High injury risk</li>
        <li>More power, but dangerous</li>
        <li>Only when necessary!</li>
      </ul>
    </div>
  </div>
</div>

#### Why Is Crimping Dangerous?

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">The Injury Risk</h4>
  
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    When crimping, a <strong>high load</strong> is placed on the finger tendons. Tendons need months to adapt. If you crimp too early or too much, you risk:
  </p>
  
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-2 list-disc list-inside">
    <li><strong>Pulley injuries:</strong> The ring bands in fingers can tear</li>
    <li><strong>Tendonitis:</strong> Painful inflammation of finger tendons</li>
    <li><strong>Chronic problems:</strong> Long-term damage that's hard to heal</li>
  </ul>
  
  <p className="text-sm text-red-700 dark:text-red-300 mt-3">
    <strong>As a beginner:</strong> Avoid closed crimps completely! Use open crimps sparingly. Finger strength and tendon adaptation take months.
  </p>
</div>

#### How Do You Grip a Crimp Safely?

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">Safe Crimp Technique</h4>
  
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li><strong>Use open crimp:</strong> Fingers slightly bent, no thumb over index finger</li>
    <li><strong>Progress slowly:</strong> Start with large crimps, work your way to smaller ones</li>
    <li><strong>Don't load abruptly:</strong> Slowly shift weight onto the hold</li>
    <li><strong>Listen to your body:</strong> Stop immediately if there's pain!</li>
    <li><strong>Train finger strength:</strong> Slowly and controlled, don't overdo it</li>
  </ol>
</div>

---

### 3. SLOPER (Slope) - Friction Instead of Power

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Hand className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">What Is a Sloper?</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        A <strong>sloper</strong> is a rounded, sloping hold without a positive edge. You can't "grip" it, but must "place" it and use friction.
      </p>
      <p className="text-sm text-purple-700 dark:text-purple-300">
        <strong>Characteristics:</strong> Rounded, sloping, no positive edge, friction is everything, very technical.
      </p>
    </div>
  </div>
</div>

#### How Do You Grip a Sloper?

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">The Sloper Technique</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">1. Don't "Grip", But "Place"</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        Place your palm flat on the sloper. Don't grip with fingertips, but have full palm contact.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">2. Arms Straight</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        Keep your arms straight! Bent arms reduce friction. Straight arms = more friction.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">3. Body Low</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        Keep your body low under the sloper. The lower you are, the more friction you can generate.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">4. Center of Gravity Central</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        Your center of gravity should be directly under the sloper. This maximizes friction.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">5. Chalk Is Important!</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        Friction = power. Chalk increases friction. Use chalk on slopers!
      </p>
    </div>
  </div>
</div>

#### The Most Common Mistake on Slopers

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-3">What Doesn't Work</h4>
  
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    <strong>The mistake:</strong> Beginners try to grip slopers with bent arms and fingertips, as if they were crimps.
  </p>
  
  <p className="text-sm text-red-700 dark:text-red-300">
    <strong>Why it doesn't work:</strong> Slopers have no positive edge to grip. You need friction, not power. Bent arms reduce friction.
  </p>
</div>

---

### Comparison of the Three Grips

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-4">Grip Comparison</h4>
  
  <table className="w-full border-collapse text-sm">
    <thead>
      <tr className="bg-indigo-100 dark:bg-indigo-800">
        <th className="border p-2 text-left">Grip</th>
        <th className="border p-2 text-left">Difficulty</th>
        <th className="border p-2 text-left">Technique</th>
        <th className="border p-2 text-left">Injury Risk</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border p-2 font-bold">Jug</td>
        <td className="border p-2">Easy</td>
        <td className="border p-2">Simply wrap</td>
        <td className="border p-2 text-green-600 dark:text-green-400">Low</td>
      </tr>
      <tr>
        <td className="border p-2 font-bold">Crimp</td>
        <td className="border p-2">Medium-Hard</td>
        <td className="border p-2">First two finger joints</td>
        <td className="border p-2 text-red-600 dark:text-red-400">High!</td>
      </tr>
      <tr>
        <td className="border p-2 font-bold">Sloper</td>
        <td className="border p-2">Hard</td>
        <td className="border p-2">Use friction</td>
        <td className="border p-2 text-amber-600 dark:text-amber-400">Medium</td>
      </tr>
    </tbody>
  </table>
</div>

---

### Practical Exercises

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Activity className="text-green-600 dark:text-green-400" size={24} />
    Exercises for the Three Grips
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 1: Jug Recognition</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Walk through the gym and identify all jugs</li>
        <li>Climb a boulder using only jugs</li>
        <li>Use jugs as rest positions</li>
        <li>Feel how easy they are to hold</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 2: Practice Open Crimp</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Find large crimps (not too small!)</li>
        <li>Grip with open crimp (fingers slightly bent)</li>
        <li>Slowly shift weight</li>
        <li>Stop immediately if there's pain!</li>
        <li>Practice sparingly as a beginner</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 3: Sloper Technique</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Find a large sloper</li>
        <li>Place palm flat on it</li>
        <li>Keep arms straight</li>
        <li>Position body low</li>
        <li>Feel the friction</li>
        <li>Use chalk!</li>
      </ol>
    </div>
  </div>
</div>

---

### Summary: The Most Important Points

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Your Grip Checklist
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Jug:</strong> Large, positive hold. Simply wrap, hang, rest. Your best friend as a beginner!</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Crimp:</strong> Small, narrow hold. Only first two finger joints. Open crimp for beginners, avoid closed crimp! High injury risk.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Sloper:</strong> Rounded, sloping hold. Don't grip, but place. Use friction. Arms straight, body low, chalk important!</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Safety:</strong> Approach crimps carefully, progress slowly, watch for pain. Finger strength takes months!</span>
    </li>
  </ul>
</div>

**Remember:** Each grip requires a different technique. Learn them, and you'll climb more efficiently!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Die drei Hauptgriffe",
      description: "Übe die drei wichtigsten Grifftypen: Jug, Crimp und Sloper.",
      checklist: [
        { text: "Übung 1: Jug-Erkennung - Identifiziere alle Jugs in der Halle, nutze sie als Rastpositionen", checked: false },
        { text: "Übung 2: Open Crimp üben - Suche große Crimps, greife mit Open Crimp, langsam steigern", checked: false },
        { text: "Übung 3: Sloper-Technik - Lege Handfläche flach auf, Arme gestreckt, Körper tief, Chalk verwenden", checked: false },
        { text: "Wichtig: Bei Crimps auf Schmerzen achten, bei Schmerzen sofort stoppen!", checked: false },
        { text: "Vergleiche die drei Griffe: Wie fühlen sie sich an? Welche Technik braucht welcher Griff?", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: The Three Main Grips",
      description: "Practice the three most important grip types: Jug, Crimp and Sloper.",
      checklist: [
        { text: "Exercise 1: Jug recognition - Identify all jugs in the gym, use them as rest positions", checked: false },
        { text: "Exercise 2: Practice open crimp - Find large crimps, grip with open crimp, progress slowly", checked: false },
        { text: "Exercise 3: Sloper technique - Place palm flat, arms straight, body low, use chalk", checked: false },
        { text: "Important: Watch for pain on crimps, stop immediately if there's pain!", checked: false },
        { text: "Compare the three grips: How do they feel? Which technique does each grip need?", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was ist ein Jug und wie greifst du ihn?",
        answer: "Ein Jug ist ein großer, positiver Griff, den du komplett umfassen kannst. Er ist der einfachste Griff für Anfänger. Du greifst ihn einfach, indem du deine Hand komplett um den Griff legst. Alle Finger können greifen. Jugs sind perfekt zum Verschnaufen und als Rastpositionen."
      },
      {
        question: "Was ist der Unterschied zwischen Open Crimp und Closed Crimp, und warum ist Crimping gefährlich?",
        answer: "Open Crimp (Half Crimp) bedeutet, dass die Finger leicht gebogen sind - das ist für Anfänger empfohlen. Closed Crimp (Full Crimp) bedeutet, dass der Daumen über den Zeigefinger gelegt wird - das ist nur für Fortgeschrittene. Crimping ist gefährlich, weil eine hohe Belastung auf die Finger-Sehnen ausgeübt wird. Die Sehnen brauchen Monate, um sich anzupassen. Zu frühes oder zu häufiges Crimpen kann zu Pulley-Verletzungen, Sehnenentzündungen und chronischen Problemen führen."
      },
      {
        question: "Wie greifst du einen Sloper richtig?",
        answer: "Ein Sloper ist ein runder, abfallender Griff ohne positive Kante. Du greifst ihn nicht, sondern legst ihn auf. Die Technik: 1) Handfläche flach auflegen (nicht mit Fingerspitzen greifen), 2) Arme gestreckt halten (gebeugte Arme reduzieren Reibung), 3) Körper tief positionieren, 4) Schwerpunkt zentral unter dem Sloper, 5) Chalk verwenden (erhöht Reibung). Reibung ist alles bei Slopern!"
      }
    ],
    en: [
      {
        question: "What is a jug and how do you grip it?",
        answer: "A jug is a large, positive hold that you can fully wrap your hand around. It's the easiest grip for beginners. You grip it simply by placing your hand completely around the hold. All fingers can grip. Jugs are perfect for resting and as rest positions."
      },
      {
        question: "What is the difference between open crimp and closed crimp, and why is crimping dangerous?",
        answer: "Open crimp (half crimp) means fingers are slightly bent - this is recommended for beginners. Closed crimp (full crimp) means thumb is placed over index finger - this is only for advanced climbers. Crimping is dangerous because a high load is placed on finger tendons. Tendons need months to adapt. Too early or too frequent crimping can lead to pulley injuries, tendonitis, and chronic problems."
      },
      {
        question: "How do you grip a sloper correctly?",
        answer: "A sloper is a rounded, sloping hold without a positive edge. You don't grip it, but place it. The technique: 1) Place palm flat (don't grip with fingertips), 2) Keep arms straight (bent arms reduce friction), 3) Position body low, 4) Center of gravity central under sloper, 5) Use chalk (increases friction). Friction is everything on slopers!"
      }
    ]
  }
};

