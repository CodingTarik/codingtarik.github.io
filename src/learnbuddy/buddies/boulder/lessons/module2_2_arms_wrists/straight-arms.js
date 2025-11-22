import { AlertCircle, Target, Zap, TrendingUp, Activity } from 'lucide-react';

export const straightArms = {
  title: {
    de: "Arme gestreckt lassen!",
    en: "Keep Arms Straight!"
  },
  description: {
    de: "Der häufigste Anfängerfehler: Hochziehen wie Klimmzüge. Lerne, warum gestreckte Arme effizienter sind und wie du deine Schultern schützt.",
    en: "The most common beginner mistake: pulling up like pull-ups. Learn why straight arms are more efficient and how to protect your shoulders."
  },
  content: {
    de: `
### Arme gestreckt lassen: Der Schlüssel zu effizientem Klettern

Wenn du Anfängern beim Klettern zusiehst, fällt dir vielleicht auf, dass sie ihre Arme ständig gebeugt halten und sich mit den Armen nach oben ziehen, als würden sie Klimmzüge machen. Das ist der **häufigste Fehler** beim Bouldern – und einer der ineffizientesten!

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Der Anfängerfehler</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        Anfänger ziehen sich mit gebeugten Armen nach oben, als würden sie Klimmzüge machen. Das führt zu:
      </p>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li>Schneller Erschöpfung der Arme</li>
        <li>Hohem Energieverbrauch</li>
        <li>Erhöhter Verletzungsgefahr für Schultern</li>
        <li>Ineffizienter Bewegung</li>
      </ul>
    </div>
  </div>
</div>

---

### Warum gestreckte Arme effizienter sind

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Activity className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Das Skelett trägt das Gewicht</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        Wenn deine Arme gestreckt sind, wird das Gewicht hauptsächlich von deinem <strong>Skelett</strong> getragen, nicht von deinen Muskeln. Das Skelett ist passiv und verbraucht keine Energie.
      </p>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Wenn deine Arme gebeugt sind, müssen deine <strong>Muskeln</strong> das Gewicht halten. Muskeln verbrauchen Energie und werden schnell müde.
      </p>
    </div>
  </div>
</div>

#### Der Unterschied: Gestreckt vs. Gebeugt

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">✅ Gestreckte Arme</h4>
    <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
      <li>Skelett trägt Gewicht</li>
      <li>Kein Energieverbrauch</li>
      <li>Längere Ausdauer</li>
      <li>Schultern geschützt</li>
      <li>Effizienter</li>
    </ul>
  </div>
  
  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
    <h4 className="font-bold text-red-800 dark:text-red-200 mb-3">❌ Gebeugte Arme</h4>
    <ul className="text-sm text-red-700 dark:text-red-300 space-y-2 list-disc list-inside">
      <li>Muskeln tragen Gewicht</li>
      <li>Hoher Energieverbrauch</li>
      <li>Schnelle Erschöpfung</li>
      <li>Schultern belastet</li>
      <li>Ineffizient</li>
    </ul>
  </div>
</div>

---

### "Hängen" statt "Halten"

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Zap className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Die Mentalität ändern</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        Statt zu denken "Ich halte mich fest", denke "Ich hänge hier". Das klingt vielleicht wie ein kleiner Unterschied, aber er ist fundamental:
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>"Halten":</strong> Aktiv, anstrengend, muskulär</li>
        <li><strong>"Hängen":</strong> Passiv, entspannt, skelettal</li>
      </ul>
      <p className="text-sm text-purple-700 dark:text-purple-300 mt-3">
        Wenn du "hängst", lässt du dein Skelett die Arbeit machen. Wenn du "hältst", machst du die Arbeit mit deinen Muskeln.
      </p>
    </div>
  </div>
</div>

---

### Arme als passive Verbindung zur Wand sehen

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">Die richtige Vorstellung</h4>
  
  <p className="text-sm text-teal-700 dark:text-teal-300 mb-4">
    Stelle dir vor, deine Arme sind wie <strong>Seile</strong>, die dich mit der Wand verbinden. Sie halten dich, aber sie arbeiten nicht aktiv. Deine Beine drücken, deine Arme halten nur die Verbindung.
  </p>
  
  <div className="space-y-3">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">✅ Richtige Vorstellung</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        Arme = Passive Verbindung, Skelett trägt Gewicht, Beine drücken aktiv
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">❌ Falsche Vorstellung</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        Arme = Aktive Kraftquelle, Muskeln tragen Gewicht, Beine passiv
      </p>
    </div>
  </div>
</div>

---

### Straight Arm vs. Bent Arm Climbing

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Wann gestreckter Arm? (90% der Zeit!)</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">✅ Gestreckte Arme verwenden bei:</h5>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>Rastpositionen (fast immer!)</li>
        <li>Vertikalen Wänden</li>
        <li>Leichten Überhängen</li>
        <li>Beim Positionieren</li>
        <li>Beim Balancieren</li>
        <li>Beim Lesen der Route</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">⚠️ Lock-Off nötig bei:</h5>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>Dynamischen Moves (Dynos, Dead Points)</li>
        <li>Manteln (Hochdrücken über die Kante)</li>
        <li>Sehr kleinen Griffen</li>
        <li>Kurzen, kraftvollen Zügen</li>
        <li>Wenn du dich positionieren musst</li>
      </ul>
      <p className="text-sm text-amber-700 dark:text-amber-300 mt-2">
        <strong>Wichtig:</strong> Lock-Offs sollten kurz sein! Sobald du kannst, strecke die Arme wieder.
      </p>
    </div>
  </div>
</div>

#### Was ist ein Lock-Off?

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Lock-Off erklärt</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-3">
    Ein <strong>Lock-Off</strong> ist eine Position, in der dein Arm gebeugt ist und du dein Gewicht hältst. Es ist eine kraftvolle Position, die Energie verbraucht.
  </p>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    <strong>Wann brauchst du es?</strong> Nur wenn du dich positionieren musst oder einen dynamischen Move machst. Ansonsten: Arme gestreckt lassen!
  </p>
</div>

---

### Schultergesundheit schützen

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Warum gestreckte Arme deine Schultern schützen</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        Gebeugte Arme belasten die <strong>Rotatorenmanschette</strong> stark. Die Rotatorenmanschette ist eine Gruppe von Muskeln und Sehnen, die deine Schulter stabilisieren. Überlastung führt zu Verletzungen.
      </p>
      <p className="text-sm text-red-700 dark:text-red-300">
        Gestreckte Arme entlasten die Rotatorenmanschette und schützen deine Schultern vor Verletzungen.
      </p>
    </div>
  </div>
</div>

#### Die Rotatorenmanschette

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">Was ist die Rotatorenmanschette?</h4>
  
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">
    Die Rotatorenmanschette besteht aus vier Muskeln, die deine Schulter stabilisieren:
  </p>
  
  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2 list-disc list-inside">
    <li><strong>Supraspinatus:</strong> Hebt den Arm</li>
    <li><strong>Infraspinatus:</strong> Dreht den Arm nach außen</li>
    <li><strong>Teres Minor:</strong> Dreht den Arm nach außen</li>
    <li><strong>Subscapularis:</strong> Dreht den Arm nach innen</li>
  </ul>
  
  <p className="text-sm text-blue-700 dark:text-blue-300 mt-4">
    Diese Muskeln sind klein und werden bei gebeugten Armen stark belastet. Gestreckte Arme entlasten sie.
  </p>
</div>

---

### Antagonisten-Training: Liegestütze, Dips

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Activity className="text-green-600 dark:text-green-400" size={24} />
    Schultergesundheit durch Antagonisten-Training
  </h3>
  
  <p className="text-sm text-green-700 dark:text-green-300 mb-4">
    Beim Klettern werden hauptsächlich die <strong>Zugmuskeln</strong> trainiert (Rücken, Bizeps). Um Verletzungen zu vermeiden, musst du auch die <strong>Gegenspieler</strong> (Antagonisten) trainieren: Brust, Trizeps, Schultern.
  </p>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">1. Liegestütze</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        <strong>Warum:</strong> Trainiert Brust, Trizeps, vordere Schultern
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>3x 10-15 Wiederholungen</li>
        <li>2-3x pro Woche</li>
        <li>Variationen: Enge Liegestütze, Diamant-Liegestütze</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">2. Dips</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        <strong>Warum:</strong> Trainiert Trizeps, vordere Schultern, Brust
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>3x 8-12 Wiederholungen</li>
        <li>2-3x pro Woche</li>
        <li>Anfänger: Unterstützte Dips oder negative Dips</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">3. Schulter-Mobility-Übungen</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        <strong>Warum:</strong> Erhält die Beweglichkeit und beugt Verletzungen vor
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Schulterkreisen (vorwärts/rückwärts)</li>
        <li>Armkreisen</li>
        <li>Dehnübungen für Schultern</li>
        <li>Täglich 5-10 Minuten</li>
      </ul>
    </div>
  </div>
</div>

---

### Praktische Übungen

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">Übungen für gestreckte Arme</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Übung 1: Bewusstes Hängen</h5>
      <ol className="text-sm text-teal-700 dark:text-teal-300 space-y-1 list-decimal list-inside">
        <li>Klettere auf einen einfachen Boulder</li>
        <li>Halte eine Position mit gestreckten Armen</li>
        <li>Spüre, wie dein Skelett das Gewicht trägt</li>
        <li>Halte 10-20 Sekunden</li>
        <li>Wiederhole mit verschiedenen Positionen</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Übung 2: Arme-Check</h5>
      <ol className="text-sm text-teal-700 dark:text-teal-300 space-y-1 list-decimal list-inside">
        <li>Klettere einen Boulder</li>
        <li>Bei jeder Position: Frage dich "Sind meine Arme gestreckt?"</li>
        <li>Wenn nicht: Strecke sie bewusst</li>
        <li>Spüre den Unterschied</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Übung 3: Lock-Off-Timing</h5>
      <ol className="text-sm text-teal-700 dark:text-teal-300 space-y-1 list-decimal list-inside">
        <li>Identifiziere Positionen, wo du einen Lock-Off brauchst</li>
        <li>Mache den Lock-Off kurz</li>
        <li>Strecke die Arme sofort wieder</li>
        <li>Ziel: Minimale Zeit in gebeugter Position</li>
      </ol>
    </div>
  </div>
</div>

---

### Zusammenfassung: Die wichtigsten Punkte

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Dein Straight-Arm-Check
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Arme gestreckt lassen:</strong> 90% der Zeit sollten deine Arme gestreckt sein. Das Skelett trägt das Gewicht, nicht die Muskeln.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>"Hängen" statt "Halten":</strong> Ändere deine Mentalität. Hänge passiv, statt aktiv zu halten.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Arme als passive Verbindung:</strong> Stelle dir vor, deine Arme sind Seile, die dich mit der Wand verbinden.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Lock-Offs nur wenn nötig:</strong> Nur bei dynamischen Moves oder Manteln. Kurz halten, dann wieder strecken.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Schultern schützen:</strong> Gestreckte Arme entlasten die Rotatorenmanschette. Antagonisten-Training (Liegestütze, Dips) ist wichtig.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Bewusst üben:</strong> Frage dich bei jeder Position "Sind meine Arme gestreckt?"</span>
    </li>
  </ul>
</div>

**Denk daran:** Gestreckte Arme sind nicht nur effizienter, sie schützen auch deine Schultern. Es ist eine der wichtigsten Techniken beim Bouldern!
    `,
    en: `
### Keep Arms Straight: The Key to Efficient Climbing

When you watch beginners climbing, you might notice that they constantly keep their arms bent and pull themselves up with their arms, as if doing pull-ups. This is the **most common mistake** in bouldering – and one of the most inefficient!

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">The Beginner Mistake</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        Beginners pull themselves up with bent arms, as if doing pull-ups. This leads to:
      </p>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li>Quick exhaustion of arms</li>
        <li>High energy consumption</li>
        <li>Increased risk of shoulder injury</li>
        <li>Inefficient movement</li>
      </ul>
    </div>
  </div>
</div>

---

### Why Straight Arms Are More Efficient

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Activity className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">The Skeleton Carries the Weight</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        When your arms are straight, the weight is mainly carried by your <strong>skeleton</strong>, not your muscles. The skeleton is passive and consumes no energy.
      </p>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        When your arms are bent, your <strong>muscles</strong> must hold the weight. Muscles consume energy and get tired quickly.
      </p>
    </div>
  </div>
</div>

#### The Difference: Straight vs. Bent

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">✅ Straight Arms</h4>
    <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
      <li>Skeleton carries weight</li>
      <li>No energy consumption</li>
      <li>Longer endurance</li>
      <li>Shoulders protected</li>
      <li>Efficient</li>
    </ul>
  </div>
  
  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
    <h4 className="font-bold text-red-800 dark:text-red-200 mb-3">❌ Bent Arms</h4>
    <ul className="text-sm text-red-700 dark:text-red-300 space-y-2 list-disc list-inside">
      <li>Muscles carry weight</li>
      <li>High energy consumption</li>
      <li>Quick exhaustion</li>
      <li>Shoulders stressed</li>
      <li>Inefficient</li>
    </ul>
  </div>
</div>

---

### "Hang" Instead of "Hold"

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Zap className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Change Your Mindset</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        Instead of thinking "I\'m holding on", think "I\'m hanging here". This might sound like a small difference, but it\'s fundamental:
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>"Hold":</strong> Active, strenuous, muscular</li>
        <li><strong>"Hang":</strong> Passive, relaxed, skeletal</li>
      </ul>
      <p className="text-sm text-purple-700 dark:text-purple-300 mt-3">
        When you "hang", you let your skeleton do the work. When you "hold", you do the work with your muscles.
      </p>
    </div>
  </div>
</div>

---

### See Arms as Passive Connection to Wall

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">The Right Image</h4>
  
  <p className="text-sm text-teal-700 dark:text-teal-300 mb-4">
    Imagine your arms are like <strong>ropes</strong> connecting you to the wall. They hold you, but they don\'t work actively. Your legs push, your arms just maintain the connection.
  </p>
  
  <div className="space-y-3">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">✅ Right Image</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        Arms = Passive connection, skeleton carries weight, legs push actively
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">❌ Wrong Image</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        Arms = Active power source, muscles carry weight, legs passive
      </p>
    </div>
  </div>
</div>

---

### Straight Arm vs. Bent Arm Climbing

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">When Straight Arm? (90% of the Time!)</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">✅ Use Straight Arms When:</h5>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>Rest positions (almost always!)</li>
        <li>Vertical walls</li>
        <li>Slight overhangs</li>
        <li>Positioning</li>
        <li>Balancing</li>
        <li>Reading the route</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">⚠️ Lock-Off Needed When:</h5>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>Dynamic moves (dynos, dead points)</li>
        <li>Mantling (pushing up over edge)</li>
        <li>Very small holds</li>
        <li>Short, powerful pulls</li>
        <li>When you need to position yourself</li>
      </ul>
      <p className="text-sm text-amber-700 dark:text-amber-300 mt-2">
        <strong>Important:</strong> Lock-offs should be short! As soon as you can, straighten your arms again.
      </p>
    </div>
  </div>
</div>

#### What Is a Lock-Off?

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Lock-Off Explained</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-3">
    A <strong>lock-off</strong> is a position where your arm is bent and you\'re holding your weight. It's a powerful position that consumes energy.
  </p>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    <strong>When do you need it?</strong> Only when you need to position yourself or make a dynamic move. Otherwise: keep arms straight!
  </p>
</div>

---

### Protect Shoulder Health

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Why Straight Arms Protect Your Shoulders</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        Bent arms heavily stress the <strong>rotator cuff</strong>. The rotator cuff is a group of muscles and tendons that stabilize your shoulder. Overload leads to injuries.
      </p>
      <p className="text-sm text-red-700 dark:text-red-300">
        Straight arms relieve the rotator cuff and protect your shoulders from injury.
      </p>
    </div>
  </div>
</div>

#### The Rotator Cuff

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">What Is the Rotator Cuff?</h4>
  
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">
    The rotator cuff consists of four muscles that stabilize your shoulder:
  </p>
  
  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2 list-disc list-inside">
    <li><strong>Supraspinatus:</strong> Lifts the arm</li>
    <li><strong>Infraspinatus:</strong> Rotates arm outward</li>
    <li><strong>Teres Minor:</strong> Rotates arm outward</li>
    <li><strong>Subscapularis:</strong> Rotates arm inward</li>
  </ul>
  
  <p className="text-sm text-blue-700 dark:text-blue-300 mt-4">
    These muscles are small and are heavily stressed with bent arms. Straight arms relieve them.
  </p>
</div>

---

### Antagonist Training: Push-ups, Dips

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Activity className="text-green-600 dark:text-green-400" size={24} />
    Shoulder Health Through Antagonist Training
  </h3>
  
  <p className="text-sm text-green-700 dark:text-green-300 mb-4">
    In climbing, mainly the <strong>pulling muscles</strong> are trained (back, biceps). To prevent injuries, you must also train the <strong>opponents</strong> (antagonists): chest, triceps, shoulders.
  </p>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">1. Push-ups</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        <strong>Why:</strong> Trains chest, triceps, front shoulders
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>3x 10-15 repetitions</li>
        <li>2-3x per week</li>
        <li>Variations: Close push-ups, diamond push-ups</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">2. Dips</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        <strong>Why:</strong> Trains triceps, front shoulders, chest
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>3x 8-12 repetitions</li>
        <li>2-3x per week</li>
        <li>Beginners: Assisted dips or negative dips</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-700 dark:text-green-200 mb-2">3. Shoulder Mobility Exercises</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        <strong>Why:</strong> Maintains mobility and prevents injuries
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Shoulder circles (forward/backward)</li>
        <li>Arm circles</li>
        <li>Shoulder stretches</li>
        <li>5-10 minutes daily</li>
      </ul>
    </div>
  </div>
</div>

---

### Practical Exercises

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">Exercises for Straight Arms</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Exercise 1: Conscious Hanging</h5>
      <ol className="text-sm text-teal-700 dark:text-teal-300 space-y-1 list-decimal list-inside">
        <li>Climb onto an easy boulder</li>
        <li>Hold a position with straight arms</li>
        <li>Feel how your skeleton carries the weight</li>
        <li>Hold for 10-20 seconds</li>
        <li>Repeat with different positions</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Exercise 2: Arm Check</h5>
      <ol className="text-sm text-teal-700 dark:text-teal-300 space-y-1 list-decimal list-inside">
        <li>Climb a boulder</li>
        <li>At each position: Ask yourself "Are my arms straight?"</li>
        <li>If not: Straighten them consciously</li>
        <li>Feel the difference</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Exercise 3: Lock-Off Timing</h5>
      <ol className="text-sm text-teal-700 dark:text-teal-300 space-y-1 list-decimal list-inside">
        <li>Identify positions where you need a lock-off</li>
        <li>Keep the lock-off short</li>
        <li>Straighten arms immediately again</li>
        <li>Goal: Minimal time in bent position</li>
      </ol>
    </div>
  </div>
</div>

---

### Summary: The Most Important Points

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Your Straight-Arm Checklist
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Keep arms straight:</strong> 90% of the time your arms should be straight. The skeleton carries the weight, not the muscles.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>"Hang" instead of "hold":</strong> Change your mindset. Hang passively instead of holding actively.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Arms as passive connection:</strong> Imagine your arms are ropes connecting you to the wall.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Lock-offs only when needed:</strong> Only for dynamic moves or mantling. Hold briefly, then straighten again.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Protect shoulders:</strong> Straight arms relieve the rotator cuff. Antagonist training (push-ups, dips) is important.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Practice consciously:</strong> Ask yourself at each position "Are my arms straight?"</span>
    </li>
  </ul>
</div>

**Remember:** Straight arms are not only more efficient, they also protect your shoulders. It's one of the most important techniques in bouldering!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Arme gestreckt lassen",
      description: "Übe das Klettern mit gestreckten Armen und entwickle die richtige Technik.",
      checklist: [
        { text: "Übung 1: Bewusstes Hängen - Halte Positionen mit gestreckten Armen, spüre wie das Skelett trägt", checked: false },
        { text: "Übung 2: Arme-Check - Frage dich bei jeder Position 'Sind meine Arme gestreckt?'", checked: false },
        { text: "Übung 3: Lock-Off-Timing - Identifiziere wo Lock-Offs nötig sind, halte sie kurz", checked: false },
        { text: "Antagonisten-Training: 3x 10-15 Liegestütze, 2-3x pro Woche", checked: false },
        { text: "Schulter-Mobility: Täglich 5-10 Minuten Schulterkreisen und Dehnübungen", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Keep Arms Straight",
      description: "Practice climbing with straight arms and develop the right technique.",
      checklist: [
        { text: "Exercise 1: Conscious hanging - Hold positions with straight arms, feel how skeleton carries", checked: false },
        { text: "Exercise 2: Arm check - Ask yourself at each position 'Are my arms straight?'", checked: false },
        { text: "Exercise 3: Lock-off timing - Identify where lock-offs are needed, keep them short", checked: false },
        { text: "Antagonist training: 3x 10-15 push-ups, 2-3x per week", checked: false },
        { text: "Shoulder mobility: Daily 5-10 minutes shoulder circles and stretches", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum sind gestreckte Arme effizienter als gebeugte Arme?",
        answer: "Gestreckte Arme lassen das Skelett das Gewicht tragen, was passiv ist und keine Energie verbraucht. Gebeugte Arme erfordern, dass die Muskeln das Gewicht halten, was Energie verbraucht und schnell müde macht. Gestreckte Arme sind also energieeffizienter und ermöglichen längere Ausdauer."
      },
      {
        question: "Was ist ein Lock-Off und wann brauchst du ihn?",
        answer: "Ein Lock-Off ist eine Position, in der der Arm gebeugt ist und das Gewicht gehalten wird. Er ist nur bei dynamischen Moves (Dynos, Dead Points), beim Manteln, bei sehr kleinen Griffen oder kurzen kraftvollen Zügen nötig. Lock-Offs sollten kurz gehalten werden, danach die Arme sofort wieder strecken."
      },
      {
        question: "Warum ist Antagonisten-Training wichtig für die Schultergesundheit?",
        answer: "Beim Klettern werden hauptsächlich die Zugmuskeln trainiert (Rücken, Bizeps). Um Verletzungen zu vermeiden, müssen auch die Gegenspieler (Antagonisten) trainiert werden: Brust, Trizeps, Schultern. Liegestütze und Dips trainieren diese Muskeln und schützen die Rotatorenmanschette vor Überlastung."
      }
    ],
    en: [
      {
        question: "Why are straight arms more efficient than bent arms?",
        answer: "Straight arms let the skeleton carry the weight, which is passive and consumes no energy. Bent arms require muscles to hold the weight, which consumes energy and gets tired quickly. Straight arms are therefore more energy-efficient and enable longer endurance."
      },
      {
        question: "What is a lock-off and when do you need it?",
        answer: "A lock-off is a position where the arm is bent and weight is held. It's only needed for dynamic moves (dynos, dead points), mantling, very small holds, or short powerful pulls. Lock-offs should be held briefly, then straighten arms immediately again."
      },
      {
        question: "Why is antagonist training important for shoulder health?",
        answer: "In climbing, mainly the pulling muscles are trained (back, biceps). To prevent injuries, the opponents (antagonists) must also be trained: chest, triceps, shoulders. Push-ups and dips train these muscles and protect the rotator cuff from overload."
      }
    ]
  }
};

