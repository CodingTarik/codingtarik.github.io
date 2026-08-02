import { ArrowUp, Hand, AlertTriangle, TrendingUp, Footprints, Activity } from 'lucide-react';

export const mantlingTopout = {
  title: {
    de: "Manteln & Top-Out",
    en: "Mantling & Top-Out"
  },
  description: {
    de: "Lerne die Technik des Mantelns – wie du dich über Kanten hochdrückst und Boulder sicher beendest.",
    en: "Learn the mantling technique – how to press yourself over edges and safely finish boulders."
  },
  content: {
    de: `
### Manteln & Top-Out: Über die Kante kommen

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <ArrowUp className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Was ist ein Mantel?</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Manteln ist die Technik, dich über eine Kante oder ein Volume <strong>hochzudrücken</strong> – wie wenn du dich aus einem Schwimmbecken hochdrückst. Es ist der Wechsel von "Ziehen" zu "Drücken" und erfordert Trizeps, Schultern und gutes Timing.
      </p>
    </div>
  </div>
</div>

---

### Die Mantel-Technik Schritt für Schritt

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Hand className="text-green-600 dark:text-green-400" size={24} />
    So meisterst du den Mantel
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Phase 1: Hochziehen</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Greife die Kante mit beiden Händen</li>
        <li>Ziehe dich hoch, bis deine Brust auf Kantenhöhe ist</li>
        <li>Nutze die Beine: Drücke dich mit den Füßen von der Wand ab</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Phase 2: Umgreifen (der schwierigste Teil!)</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Drehe die Hände von "Ziehen" auf "Drücken" um</li>
        <li>Setze die Handflächen flach auf die Kante</li>
        <li>Stütze dich ab – der Trizeps übernimmt jetzt</li>
        <li>Das ist der Moment, wo viele Kletterer scheitern!</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Phase 3: Fuß hochbringen</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Bringe einen Fuß auf die Kante (oder smeare an der Wand)</li>
        <li>Verlagere dein Gewicht über den Fuß</li>
        <li>Drücke dich mit dem Bein hoch</li>
        <li>Stehe auf!</li>
      </ol>
    </div>
  </div>
</div>

---

### Top-Out: Den Boulder beenden

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Footprints className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Top-Out-Varianten</h4>
      <div className="space-y-3 mt-3">
        <div>
          <p className="text-sm text-purple-700 dark:text-purple-300"><strong>Einfacher Top-Out:</strong> Große, flache Oberfläche – einfach hochdrücken und aufstehen.</p>
        </div>
        <div>
          <p className="text-sm text-purple-700 dark:text-purple-300"><strong>Mantel auf kleiner Kante:</strong> Wenig Platz zum Drücken – präzise Handplatzierung und schnelles Fußhochbringen nötig.</p>
        </div>
        <div>
          <p className="text-sm text-purple-700 dark:text-purple-300"><strong>Überhang Top-Out:</strong> Erst unter dem Dach klettern, dann über die Kante manteln – extrem anspruchsvoll.</p>
        </div>
        <div>
          <p className="text-sm text-purple-700 dark:text-purple-300"><strong>Slab Top-Out:</strong> Vertrauen in Schuhe, langsames Gewichtsverlagern, keine Hektik.</p>
        </div>
      </div>
    </div>
  </div>
</div>

---

### Tipps & häufige Fehler

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Activity className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Häufige Fehler beim Manteln</h4>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
        <li><strong>Zu weit weg von der Wand:</strong> Hüfte muss nah an die Kante – sonst drückt es dich weg</li>
        <li><strong>Keine Fußarbeit:</strong> Füße müssen aktiv mitarbeiten (Smearing, auf Tritt stellen)</li>
        <li><strong>Hektik:</strong> Langsam und kontrolliert > schnell und chaotisch</li>
        <li><strong>Nur Arme:</strong> Trizeps allein reicht nicht – Beine müssen drücken!</li>
      </ul>
    </div>
  </div>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Sicherheit beim Top-Out</h4>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li>Top-Out ist der häufigste Ort für Stürze (vor allem outdoor!)</li>
        <li>Nie übermütig werden – kontrolliert mantel, kein Schwung</li>
        <li>Outdoor: Prüfe die Oberfläche auf losen Fels oder Dreck</li>
        <li>Bei Unsicherheit: Lieber abklettern als unkontrolliert manteln</li>
      </ul>
    </div>
  </div>
</div>

---

### Praktische Übungen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    Übungen zum Manteln
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 1: Schwimmbad-Mantel</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Übe an niedrigen Mauern oder Kisten: Hände auf die Kante, hochziehen, Hände umdrehen, hochdrücken, Fuß rauf, aufstehen. Wiederhole, bis es flüssig wird.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 2: Top-Out Boulder</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Suche Boulder in deiner Halle, die ein Top-Out haben (statt Top-Griff). Übe den gesamten Ablauf: Letzte Züge → Mantel → Aufstehen.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 3: Trizeps-Training</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Dips und Liegestütze stärken den Trizeps – die Hauptmuskulatur beim Manteln. 3x10 Dips, 3x15 Liegestütze als Ergänzung.
      </p>
    </div>
  </div>
</div>

**Merke:** Manteln verbindet Klettern mit "Turnen". Der Schlüssel ist der fließende Übergang von Ziehen zu Drücken!
    `,
    en: `
### Mantling & Top-Out: Getting Over the Edge

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <ArrowUp className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">What is a Mantle?</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Mantling is the technique of <strong>pressing yourself up</strong> over an edge or volume – like pushing yourself out of a swimming pool. It's the transition from "pulling" to "pushing" and requires triceps, shoulders, and good timing.
      </p>
    </div>
  </div>
</div>

---

### The Mantle Technique Step by Step

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Hand className="text-green-600 dark:text-green-400" size={24} />
    How to Master the Mantle
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Phase 1: Pull Up</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Grab the edge with both hands</li>
        <li>Pull up until your chest is at edge height</li>
        <li>Use your legs: Push off the wall with your feet</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Phase 2: Hand Transition (the hardest part!)</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Rotate hands from "pulling" to "pushing" position</li>
        <li>Place palms flat on the edge</li>
        <li>Support yourself – the triceps takes over now</li>
        <li>This is the moment where many climbers fail!</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Phase 3: Bring Foot Up</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Bring one foot onto the edge (or smear on the wall)</li>
        <li>Shift your weight over the foot</li>
        <li>Push up with your leg</li>
        <li>Stand up!</li>
      </ol>
    </div>
  </div>
</div>

---

### Top-Out: Finishing the Boulder

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Footprints className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Top-Out Variants</h4>
      <div className="space-y-3 mt-3">
        <div>
          <p className="text-sm text-purple-700 dark:text-purple-300"><strong>Easy Top-Out:</strong> Large, flat surface – simply press up and stand.</p>
        </div>
        <div>
          <p className="text-sm text-purple-700 dark:text-purple-300"><strong>Mantle on small edge:</strong> Little space to push – precise hand placement and quick foot-up required.</p>
        </div>
        <div>
          <p className="text-sm text-purple-700 dark:text-purple-300"><strong>Overhang Top-Out:</strong> First climb under the roof, then mantle over the edge – extremely demanding.</p>
        </div>
        <div>
          <p className="text-sm text-purple-700 dark:text-purple-300"><strong>Slab Top-Out:</strong> Trust your shoes, slow weight shift, no rushing.</p>
        </div>
      </div>
    </div>
  </div>
</div>

---

### Tips & Common Mistakes

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Activity className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Common Mantling Mistakes</h4>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
        <li><strong>Too far from wall:</strong> Hips must be close to the edge – otherwise it pushes you away</li>
        <li><strong>No footwork:</strong> Feet must actively help (smearing, stepping on holds)</li>
        <li><strong>Rushing:</strong> Slow and controlled > fast and chaotic</li>
        <li><strong>Arms only:</strong> Triceps alone isn't enough – legs must push!</li>
      </ul>
    </div>
  </div>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Top-Out Safety</h4>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li>Top-out is the most common place for falls (especially outdoors!)</li>
        <li>Never be overconfident – mantle controlled, no swinging</li>
        <li>Outdoors: Check surface for loose rock or dirt</li>
        <li>If unsure: Better to downclimb than mantle uncontrolled</li>
      </ul>
    </div>
  </div>
</div>

---

### Practical Exercises

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    Mantling Exercises
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 1: Pool Mantle</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Practice on low walls or boxes: Hands on edge, pull up, rotate hands, press up, foot up, stand. Repeat until fluid.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 2: Top-Out Boulders</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Find boulders in your gym that have a top-out (instead of a top hold). Practice the full sequence: Last moves → Mantle → Stand up.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 3: Triceps Training</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Dips and push-ups strengthen the triceps – the main muscle for mantling. 3x10 dips, 3x15 push-ups as supplement.
      </p>
    </div>
  </div>
</div>

**Remember:** Mantling connects climbing with "gymnastics." The key is the smooth transition from pulling to pushing!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Manteln & Top-Out",
      description: "Übe die Mantel-Technik und lerne, Boulder sicher zu beenden.",
      checklist: [
        { text: "Übung 1: Übe Manteln an einer niedrigen Mauer oder Kiste bis es flüssig wird", checked: false },
        { text: "Übung 2: Finde Top-Out-Boulder in deiner Halle und übe die komplette Sequenz", checked: false },
        { text: "Übung 3: Mache 3x10 Dips und 3x15 Liegestütze für Trizeps-Kraft", checked: false },
        { text: "Wichtig: Übe langsam und kontrolliert – Manteln erfordert Geduld, nicht Hektik", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Mantling & Top-Out",
      description: "Practice the mantling technique and learn to finish boulders safely.",
      checklist: [
        { text: "Exercise 1: Practice mantling on a low wall or box until it feels fluid", checked: false },
        { text: "Exercise 2: Find top-out boulders in your gym and practice the full sequence", checked: false },
        { text: "Exercise 3: Do 3x10 dips and 3x15 push-ups for triceps strength", checked: false },
        { text: "Important: Practice slowly and controlled – mantling requires patience, not rushing", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was sind die drei Phasen beim Manteln?",
        answer: "Die drei Phasen sind: 1) Hochziehen – mit Händen an der Kante und Füßen an der Wand bis Brust auf Kantenhöhe ziehen, 2) Umgreifen – Hände von Zieh- in Drückposition drehen, flach auf die Kante setzen, Trizeps übernimmt, 3) Fuß hochbringen – einen Fuß auf die Kante bringen, Gewicht verlagern, mit Bein hochdrücken und aufstehen."
      },
      {
        question: "Was ist der häufigste Fehler beim Manteln?",
        answer: "Der häufigste Fehler ist, nur die Arme zu nutzen und die Füße zu vernachlässigen. Die Füße müssen aktiv mitarbeiten (Smearing, auf Tritt stellen). Weitere Fehler: Zu weit weg von der Wand (Hüfte muss nah an die Kante), Hektik statt kontrollierter Bewegung, und fehlende Trizeps-Kraft für die Drückphase."
      },
      {
        question: "Warum ist der Top-Out besonders gefährlich und was musst du beachten?",
        answer: "Der Top-Out ist der häufigste Ort für Stürze, besonders outdoor. Man sollte nie übermütig manteln, sondern kontrolliert vorgehen. Outdoor muss die Oberfläche auf losen Fels oder Dreck geprüft werden. Bei Unsicherheit ist es besser, abzuklettern als unkontrolliert zu manteln. Sicherheit geht immer vor!"
      }
    ],
    en: [
      {
        question: "What are the three phases of mantling?",
        answer: "The three phases are: 1) Pull up – with hands on the edge and feet on the wall, pull until chest is at edge height, 2) Hand transition – rotate hands from pulling to pushing position, place flat on edge, triceps takes over, 3) Bring foot up – get one foot on the edge, shift weight, push up with leg and stand."
      },
      {
        question: "What is the most common mistake when mantling?",
        answer: "The most common mistake is using only the arms and neglecting the feet. Feet must actively help (smearing, stepping on holds). Other mistakes: Being too far from the wall (hips must be close to edge), rushing instead of controlled movement, and lacking triceps strength for the pushing phase."
      },
      {
        question: "Why is the top-out particularly dangerous and what should you watch for?",
        answer: "The top-out is the most common place for falls, especially outdoors. Never mantle overconfidently – stay controlled. Outdoors, check the surface for loose rock or dirt. When in doubt, it's better to downclimb than to mantle uncontrolled. Safety always comes first!"
      }
    ]
  }
};
