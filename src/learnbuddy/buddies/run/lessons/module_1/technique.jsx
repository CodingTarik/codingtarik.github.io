import React from 'react';

export const techniqueLesson = {
  id: 'r1_m1_technique',
  title: { 
    en: '1.3 Running Technique Fundamentals', 
    de: '1.3 Grundlagen der Lauftechnik' 
  },
  description: { 
    en: 'Learn proper running form: posture, arm movement, foot strike, cadence, and breathing - the essentials of efficient running.', 
    de: 'Lerne die richtige Laufhaltung: Körperhaltung, Armbewegung, Fußaufsatz, Schrittfrequenz und Atmung - das A&O des effizienten Laufens.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Lauftechnik: Das A&O des Laufens 🏃

Gute Lauftechnik macht dich nicht nur schneller, sondern auch verletzungsresistenter und effizienter. Sie ist wichtiger als Geschwindigkeit oder Distanz. Schlechte Technik führt zu Verletzungen und verschwendet Energie.

**Merke dir:** Technik verbessern ist ein fortlaufender Prozess. Perfektion kommt mit Übung. Aber die Grundlagen solltest du früh lernen.

---

### Körperhaltung (Posture)

Die richtige Körperhaltung ist die Basis für alles andere. Sie bestimmt, wie effizient du läufst und wie wenig Energie du verschwendest.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">✓ Die richtige Haltung</h4>
  <ul className="text-sm space-y-2 text-blue-700 dark:text-blue-300">
    <li><strong>Aufrechter Oberkörper:</strong> Nicht nach vorne gebeugt! Stelle dir vor, eine Schnur zieht dich von oben</li>
    <li><strong>Schultern entspannt:</strong> Nicht hochgezogen oder nach vorn gerollt</li>
    <li><strong>Kopf geradeaus:</strong> Blick nach vorne, nicht auf den Boden (20-30 Meter voraus schauen)</li>
    <li><strong>Brust raus:</strong> Stolz, aber nicht angespannt</li>
    <li><strong>Hüfte leicht nach vorne gekippt:</strong> Neutrale Position, nicht nach hinten gedrückt</li>
    <li><strong>Körper leicht nach vorne geneigt:</strong> Aus den Knöcheln, nicht aus der Hüfte!</li>
  </ul>
</div>

**Häufige Fehler:**

- ❌ Nach vorne gebeugt (überlastet den Rücken)
- ❌ Nach hinten gelehnt (bremsend, ineffizient)
- ❌ Kopf nach unten (schlechte Haltung, Gefahr)
- ❌ Hochgezogene Schultern (Verschwendung von Energie)

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">💡 Übung: Spiegel-Test</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Stehe vor einem Spiegel. Übe die aufrechte Haltung: Brust raus, Schultern entspannt, Kopf geradeaus. Gehe langsam und halte die Haltung. Spüre, wie sich das anfühlt. Dann übe beim Laufen.
  </p>
</div>

---

### Armhaltung & Armbewegung

Deine Arme beeinflussen dein Tempo mehr, als du denkst. Sie helfen, Rhythmus zu halten und Energie zu sparen.

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="p-4 bg-green-50 dark:bg-green-900/40 rounded-lg">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">✓ Richtig</h4>
    <ul className="text-sm space-y-1 text-green-700 dark:text-green-300">
      <li>Arme im 90° Winkel</li>
      <li>Schwingen parallel zur Laufrichtung</li>
      <li>Hände entspannt (lockere Faust)</li>
      <li>Schultern bleiben ruhig</li>
      <li>Arme unterstützen Beinbewegung</li>
    </ul>
  </div>
  <div className="p-4 bg-red-50 dark:bg-red-900/40 rounded-lg">
    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">✗ Falsch</h4>
    <ul className="text-sm space-y-1 text-red-700 dark:text-red-300">
      <li>Arme zu steif oder zu locker</li>
      <li>Über die Körpermitte schwingen</li>
      <li>Geballte Fäuste</li>
      <li>Schultern mitschwingen</li>
      <li>Arme zu hoch oder zu tief</li>
    </ul>
  </div>
</div>

**Wie die Arme richtig funktionieren:**

- **90° Winkel:** Ellenbogen etwa im rechten Winkel. Nicht zu steif, nicht zu locker.
- **Parallel zur Laufrichtung:** Arme schwingen vor und zurück, nicht über die Körpermitte. Das wäre Energieverschwendung.
- **Lockere Faust:** Hände entspannt, nicht geballt. Stelle dir vor, du hältst ein Ei – fest genug, um es nicht fallen zu lassen, aber nicht so fest, dass du es zerbrichst.
- **Schultern ruhig:** Nur die Arme bewegen sich, nicht die Schultern.

**Die Verbindung:** Wenn dein rechtes Bein nach vorne geht, geht dein linker Arm nach vorne (und umgekehrt). Das ist natürlich und effizient.

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Praktische Übung</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Lauf 100 Meter nur mit Fokus auf deine Armbewegung. Stelle sicher, dass:
  </p>
  <ol className="text-sm space-y-1 text-green-700 dark:text-green-300 mt-3 list-decimal list-inside">
    <li>Arme im 90° Winkel sind</li>
    <li>Sie parallel schwingen (nicht über die Mitte)</li>
    <li>Hände entspannt sind</li>
    <li>Schultern ruhig bleiben</li>
  </ol>
  <p className="text-sm text-green-700 dark:text-green-300 mt-3">
    Spüre den Unterschied. Die Arme sollten den Rhythmus unterstützen, nicht behindern.
  </p>
</div>

---

### Fußaufsatz (Foot Strike)

Der Fußaufsatz ist ein heiß diskutiertes Thema. Aber hier ist die Wahrheit: **Es gibt keine One-Size-Fits-All-Lösung!**

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
  <div className="p-4 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Vorfußlauf</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
      Aufsatz mit dem Ballen des Fußes (Vorfuß). Schneller, aber belastender für Waden.
    </p>
    <p className="text-xs text-blue-600 dark:text-blue-400">
      Für: Sprint, kurze Distanzen, erfahrene Läufer
    </p>
  </div>
  <div className="p-4 bg-green-50 dark:bg-green-900/40 rounded-lg">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Mittelfußlauf</h4>
    <p className="text-sm text-green-700 dark:text-green-300 mb-2">
      Aufsatz mit der Mitte des Fußes. Ausgewogen, effizient.
    </p>
    <p className="text-xs text-green-600 dark:text-green-400">
      Für: Die meisten Läufer, natürlicher Stil
    </p>
  </div>
  <div className="p-4 bg-purple-50 dark:bg-purple-900/40 rounded-lg">
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Fersenlauf</h4>
    <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
      Aufsatz mit der Ferse zuerst. Kann bei langsamem Tempo natürlich sein.
    </p>
    <p className="text-xs text-purple-600 dark:text-purple-400">
      Für: Langsames Laufen, längere Distanzen
    </p>
  </div>
</div>

**Wichtig:** Finde deinen natürlichen Aufsatz! Künstliches Ändern kann zu Verletzungen führen.

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Nicht künstlich ändern!</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Wenn du normalerweise mit der Ferse aufsetzt, ist das für langsame Läufe völlig okay. Ändere deinen Aufsatz nicht radikal – das führt oft zu Verletzungen. Was wichtig ist: <strong>Leichter Aufsatz</strong>, nicht stampfen!
  </p>
</div>

**Was wirklich wichtig ist:**

- ✅ **Leichter Aufsatz:** Nicht stampfen! Lande sanft.
- ✅ **Unter dem Körper:** Fuß sollte unter dem Körperschwerpunkt aufsetzen, nicht davor
- ✅ **Kurze Bodenkontaktzeit:** Je schneller du wieder abhebst, desto effizienter

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Praktische Übung: Barfuß auf Gras</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    <strong>Vorsichtig!</strong> Lauf 20-30 Meter barfuß auf weichem Gras. Spüre, wie dein Fuß natürlich aufsetzt. Dein Körper wird dir zeigen, was natürlich ist. Das ist dein natürlicher Aufsatz.
  </p>
</div>

---

### Schrittfrequenz (Cadence)

Cadence ist die Anzahl deiner Schritte pro Minute. Sie ist ein wichtiger Indikator für Effizienz.

**Was ist optimal?**

- **170-180 Schritte pro Minute** (beide Füße zusammen gezählt)
- Das entspricht etwa **85-90 Schritten pro Fuß** in 30 Sekunden

**Warum ist Cadence wichtig?**

- ✅ **Reduziert Verletzungsrisiko:** Kürzere Schritte = weniger Belastung pro Schritt
- ✅ **Effizienter:** Weniger Energie pro Schritt
- ✅ **Besser für Gelenke:** Weniger Stoßbelastung

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Die Regel: Kürzere Schritte statt längere!</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Viele Anfänger versuchen, schneller zu werden, indem sie längere Schritte machen. Das ist falsch! Besser: Mehr Schritte mit kürzerer Länge. Das ist effizienter und sicherer.
  </p>
</div>

**Wie messe ich meine Cadence?**

1. Laufe normal
2. Zähle deine Schritte für 30 Sekunden (einen Fuß)
3. Multipliziere mit 2 → Das ist deine Schritte pro Minute

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Praktische Übung</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Zähle deine Schritte für 30 Sekunden während eines normalen Laufs. Ziel: 85-90 Schritte pro Fuß in 30 Sekunden. Wenn du drunter bist, versuche, kürzere, schnellere Schritte zu machen (nicht längere!).
  </p>
</div>

**Wie verbessere ich meine Cadence?**

- Musik mit 170-180 BPM laufen lassen
- Metronom-App nutzen
- Bewusst kürzere Schritte machen
- Arme schneller bewegen (hilft den Beinen zu folgen)

---

### Atmung (Breathing)

Richtiges Atmen ist entscheidend für Ausdauer und Komfort. Es ist etwas, das viele Anfänger vernachlässigen.

**Nasenatmung vs. Mundatmung**

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="p-4 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Nasenatmung</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      Gut für: Langsame Läufe, Aufwärmen, entspannte Läufe. Filtert Luft, erwärmt sie.
    </p>
  </div>
  <div className="p-4 bg-green-50 dark:bg-green-900/40 rounded-lg">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Mundatmung</h4>
    <p className="text-sm text-green-700 dark:text-green-300">
      Normal bei: Anstrengung, schnelleren Läufen. Körper braucht mehr Sauerstoff. <strong>Das ist völlig normal!</strong>
    </p>
  </div>
</div>

**Atemrhythmus**

Die meisten Läufer nutzen einen Rhythmus, der mit den Schritten synchronisiert ist:

- **2:2 Rhythmus:** 2 Schritte einatmen, 2 Schritte ausatmen (häufig bei moderatem Tempo)
- **3:2 Rhythmus:** 3 Schritte einatmen, 2 Schritte ausatmen (häufig bei leichter Anstrengung)
- **2:1 Rhythmus:** 2 Schritte einatmen, 1 Schritt ausatmen (bei hoher Anstrengung)

**Bauchatmung statt Brustatmung**

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">💡 Bauchatmung (Zwerchfell)</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Atme tief in den Bauch, nicht nur in die Brust. Das Zwerchfell arbeitet, nicht nur der Brustkorb. Mehr Sauerstoffaufnahme, weniger Seitenstechen. Übe das beim Gehen oder langsamem Laufen.
  </p>
</div>

**Was tun bei Seitenstechen?**

- Langsamer werden
- Tiefer atmen (Bauchatmung)
- Ausatmen beim Aufsetzen des gegenüberliegenden Fußes
- Nicht zu viel essen/trinken vor dem Laufen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Praktische Übung</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Atme bewusst während des Laufens:
  </p>
  <ol className="text-sm space-y-1 text-green-700 dark:text-green-300 mt-3 list-decimal list-inside">
    <li>Spüre deinen natürlichen Rhythmus</li>
    <li>Versuche, tief in den Bauch zu atmen</li>
    <li>Synchronisiere Atmung mit Schritten (2:2 oder 3:2)</li>
    <li>Wenn du schneller wirst, wechsle zu Mundatmung</li>
  </ol>
</div>

---

### Zusammenfassung: Die Checkliste

**Beim Laufen solltest du regelmäßig checken:**

- ✅ **Körperhaltung:** Aufrecht, nicht gebeugt
- ✅ **Arme:** 90° Winkel, parallel schwingen, entspannt
- ✅ **Fußaufsatz:** Leicht, unter dem Körper
- ✅ **Cadence:** 85-90 Schritte pro Fuß in 30 Sekunden
- ✅ **Atmung:** Tief, rhythmisch, Bauchatmung

**Merke dir:** Perfektion kommt mit Übung. Aber die Grundlagen früh zu lernen spart dir später Probleme. Übe einen Aspekt pro Lauf, nicht alles auf einmal!
    `,
    en: `
### Running Technique: The Essentials 🏃

Good running technique makes you not only faster, but also more injury-resistant and efficient. It's more important than speed or distance. Bad technique leads to injuries and wastes energy.

**Remember:** Improving technique is an ongoing process. Perfection comes with practice. But you should learn the basics early.

---

### Body Posture

Proper body posture is the foundation for everything else. It determines how efficiently you run and how little energy you waste.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">✓ The Correct Posture</h4>
  <ul className="text-sm space-y-2 text-blue-700 dark:text-blue-300">
    <li><strong>Upright upper body:</strong> Not bent forward! Imagine a string pulling you from above</li>
    <li><strong>Relaxed shoulders:</strong> Not raised or rolled forward</li>
    <li><strong>Head straight:</strong> Look ahead, not at the ground (look 20-30 meters ahead)</li>
    <li><strong>Chest out:</strong> Proud, but not tense</li>
    <li><strong>Hip slightly tilted forward:</strong> Neutral position, not pushed back</li>
    <li><strong>Body slightly leaning forward:</strong> From the ankles, not from the hips!</li>
  </ul>
</div>

**Common Mistakes:**

- ❌ Bent forward (overloads back)
- ❌ Leaning back (braking, inefficient)
- ❌ Head down (poor posture, danger)
- ❌ Raised shoulders (waste of energy)

---

### Arm Position & Movement

Your arms affect your pace more than you think. They help maintain rhythm and save energy.

- **90° Angle:** Elbows approximately at right angles. Not too stiff, not too loose.
- **Parallel to running direction:** Arms swing forward and back, not across the body midline. That would be wasteful.
- **Loose fist:** Hands relaxed, not clenched. Imagine holding an egg – tight enough not to drop it, but not so tight you crush it.
- **Quiet shoulders:** Only the arms move, not the shoulders.

**The Connection:** When your right leg goes forward, your left arm goes forward (and vice versa). This is natural and efficient.

---

### Foot Strike

Foot strike is a hotly debated topic. But here's the truth: **There's no one-size-fits-all solution!**

**Important:** Find your natural strike! Artificially changing can lead to injuries.

**What's really important:**

- ✅ **Light strike:** Don't stomp! Land softly.
- ✅ **Under the body:** Foot should land under your center of gravity, not in front of it
- ✅ **Short ground contact time:** The faster you lift off again, the more efficient

---

### Cadence

Cadence is the number of your steps per minute. It's an important indicator of efficiency.

**What's optimal?**

- **170-180 steps per minute** (both feet counted together)
- That's about **85-90 steps per foot** in 30 seconds

**Why is cadence important?**

- ✅ **Reduces injury risk:** Shorter steps = less load per step
- ✅ **More efficient:** Less energy per step
- ✅ **Better for joints:** Less impact

**The Rule: Shorter steps instead of longer!**

---

### Breathing

Proper breathing is crucial for endurance and comfort. It's something many beginners neglect.

**Breathing Rhythm**

Most runners use a rhythm synchronized with their steps:

- **2:2 Rhythm:** 2 steps inhale, 2 steps exhale (common at moderate pace)
- **3:2 Rhythm:** 3 steps inhale, 2 steps exhale (common at light effort)
- **2:1 Rhythm:** 2 steps inhale, 1 step exhale (at high effort)

**Belly Breathing Instead of Chest Breathing**

Breathe deep into the belly, not just the chest. The diaphragm works, not just the ribcage. More oxygen uptake, less side stitch.

---

### Summary: The Checklist

**While running you should regularly check:**

- ✅ **Posture:** Upright, not bent
- ✅ **Arms:** 90° angle, parallel swing, relaxed
- ✅ **Foot strike:** Light, under the body
- ✅ **Cadence:** 85-90 steps per foot in 30 seconds
- ✅ **Breathing:** Deep, rhythmic, belly breathing

**Remember:** Perfection comes with practice. But learning the basics early saves you problems later. Practice one aspect per run, not everything at once!
    `
  },

  task: {
    de: {
      title: 'Technik-Training: Ein Aspekt pro Lauf',
      description: 'Übe die Lauftechnik systematisch. Nimm dir einen Aspekt pro Lauf vor und konzentriere dich darauf.',
      checklist: [
        { text: 'Lauf 1: Fokus auf Körperhaltung – achte darauf, aufrecht zu laufen' },
        { text: 'Lauf 2: Fokus auf Armbewegung – stelle sicher, Arme parallel zu schwingen' },
        { text: 'Lauf 3: Fokus auf Fußaufsatz – lande leicht, nicht stampfend' },
        { text: 'Lauf 4: Cadence messen – zähle Schritte für 30 Sekunden' },
        { text: 'Lauf 5: Atmung – übe Bauchatmung und finde deinen Rhythmus' },
        { text: 'Nach jedem Lauf: Notiere, was sich gut angefühlt hat und was verbesserungswürdig ist' }
      ]
    },
    en: {
      title: 'Technique Training: One Aspect Per Run',
      description: 'Practice running technique systematically. Take one aspect per run and focus on it.',
      checklist: [
        { text: 'Run 1: Focus on posture – pay attention to running upright' },
        { text: 'Run 2: Focus on arm movement – ensure arms swing parallel' },
        { text: 'Run 3: Focus on foot strike – land lightly, not stomping' },
        { text: 'Run 4: Measure cadence – count steps for 30 seconds' },
        { text: 'Run 5: Breathing – practice belly breathing and find your rhythm' },
        { text: 'After each run: Note what felt good and what needs improvement' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was ist die richtige Körperhaltung beim Laufen?',
        back: 'Aufrechter Oberkörper, entspannte Schultern, Kopf geradeaus, Hüfte leicht nach vorne gekippt, Körper leicht nach vorne geneigt (aus Knöcheln)'
      },
      {
        front: 'Wie sollten die Arme beim Laufen sein?',
        back: '90° Winkel, parallel zur Laufrichtung schwingen, Hände entspannt (lockere Faust), Schultern ruhig'
      },
      {
        front: 'Was ist die optimale Schrittfrequenz?',
        back: '170-180 Schritte pro Minute (85-90 Schritte pro Fuß in 30 Sekunden)'
      },
      {
        front: 'Sollte ich meinen Fußaufsatz ändern?',
        back: 'Nein, nicht künstlich ändern! Finde deinen natürlichen Aufsatz. Was wichtig ist: Leichter Aufsatz, nicht stampfen!'
      },
      {
        front: 'Wie sollte ich beim Laufen atmen?',
        back: 'Tief in den Bauch (Bauchatmung), rhythmisch synchronisiert mit Schritten (2:2 oder 3:2), bei Anstrengung Mundatmung ist normal'
      }
    ],
    en: [
      {
        front: 'What is the correct body posture when running?',
        back: 'Upright upper body, relaxed shoulders, head straight, hip slightly tilted forward, body slightly leaning forward (from ankles)'
      },
      {
        front: 'How should the arms be when running?',
        back: '90° angle, swing parallel to running direction, hands relaxed (loose fist), quiet shoulders'
      },
      {
        front: 'What is the optimal cadence?',
        back: '170-180 steps per minute (85-90 steps per foot in 30 seconds)'
      },
      {
        front: 'Should I change my foot strike?',
        back: 'No, don\'t artificially change! Find your natural strike. What\'s important: Light strike, don\'t stomp!'
      },
      {
        front: 'How should I breathe when running?',
        back: 'Deep into belly (belly breathing), rhythmically synchronized with steps (2:2 or 3:2), mouth breathing during effort is normal'
      }
    ]
  }
};

