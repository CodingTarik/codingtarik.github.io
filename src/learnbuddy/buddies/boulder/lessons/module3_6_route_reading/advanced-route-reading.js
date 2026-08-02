import { Eye, Brain, Users, Map, TrendingUp, Lightbulb, Target } from 'lucide-react';

export const advancedRouteReading = {
  title: {
    de: "Route Reading - Fortgeschritten",
    en: "Route Reading - Advanced"
  },
  description: {
    de: "Lerne Beta-Analyse, Visualisierung, Sequenzierung und die Kunst, Boulder mit dem Kopf zu knacken.",
    en: "Learn beta analysis, visualization, sequencing, and the art of solving boulders with your mind."
  },
  content: {
    de: `
### Route Reading: Boulder knacken mit Kopf

Der Unterschied zwischen einem guten und einem großartigen Kletterer liegt oft nicht in der Kraft, sondern im <strong>Route Reading</strong> – der Fähigkeit, einen Boulder zu "lesen" und die optimale Lösung zu finden, BEVOR du einsteigst.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Eye className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Das fundamentale Prinzip</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        <strong>"Klettere den Boulder zuerst im Kopf, dann an der Wand!"</strong> Pre-Climb Analysis spart Versuche, Energie und Frustration. Profis verbringen oft mehr Zeit mit Lesen als mit Klettern.
      </p>
    </div>
  </div>
</div>

---

### Pre-Climb Analyse

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Map className="text-green-600 dark:text-green-400" size={24} />
    Vor dem Klettern analysieren
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Schritt 1: Alle Griffe identifizieren</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Schau dir <strong>alle</strong> Griffe und Tritte an. Welche Art sind sie? Jugs, Crimps, Sloper, Pinches? In welche Richtung funktionieren sie am besten?
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Schritt 2: Die Crux finden</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Wo ist die schwerste Stelle? Oft gibt es 1-2 Schlüsselstellen. Plane diese zuerst – der Rest folgt.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Schritt 3: Sequenzen durchdenken</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Welche Hand greift welchen Griff? Welcher Fuß steht wo? Manchmal ist die Reihenfolge entscheidend!
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Schritt 4: Rest-Positionen planen</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Wo kannst du rasten? Plane: Schnell durch die Crux, erholen an guten Griffen.
      </p>
    </div>
  </div>
</div>

---

### Visualisierung

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Brain className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Mental Rehearsal</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        Visualisierung ist eine <strong>wissenschaftlich belegte</strong> Technik: Wenn du eine Bewegung im Kopf durchgehst, feuern dieselben Neuronen wie bei der echten Bewegung. Du trainierst, ohne zu klettern!
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>Schließe die Augen:</strong> Stelle dir jeden Zug vor – Hand, Fuß, Körperposition</li>
        <li><strong>Pantomime:</strong> Gehe die Bewegungen am Boden vor der Wand durch (Forerunning)</li>
        <li><strong>Rückwärts denken:</strong> Beginne beim Top und arbeite dich zum Start zurück</li>
        <li><strong>Tempo visualisieren:</strong> Wo kletterst du schnell? Wo langsam?</li>
      </ul>
    </div>
  </div>
</div>

---

### On-Sight vs. Flash vs. Project

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Lightbulb className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Verschiedene Kletterstile</h4>
      <div className="space-y-3 mt-3">
        <div>
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>On-Sight:</strong> Erster Versuch, <strong>ohne</strong> vorherige Infos. Du hast den Boulder noch nie gesehen, niemanden klettern sehen, kein Beta bekommen. Erfordert hervorragendes Route Reading!</p>
        </div>
        <div>
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Flash:</strong> Erster Versuch, <strong>mit</strong> Infos. Du hast jemanden klettern sehen oder Beta bekommen. Trotzdem beeindruckend!</p>
        </div>
        <div>
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Project:</strong> Mehrere Versuche/Sessions. Du arbeitest die Einzelzüge aus, verbindest sie und sendest den Boulder schließlich komplett.</p>
        </div>
      </div>
    </div>
  </div>
</div>

---

### Beta-Sharing & Community

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Users className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Voneinander lernen</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        Beta (die Lösung für einen Boulder) ist <strong>subjektiv</strong>. Deine Lösung kann anders sein als die deines Kletterpartners – und trotzdem genauso gut!
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2 list-disc list-inside">
        <li><strong>Andere beobachten:</strong> Du kannst viel lernen, indem du anderen zusiehst</li>
        <li><strong>Körpergrößen-Unterschiede:</strong> Große und kleine Kletterer haben oft komplett anderes Beta</li>
        <li><strong>Respektvolles Teilen:</strong> Beta nur geben, wenn jemand fragt oder offen dafür ist</li>
        <li><strong>Eigene Lösung finden:</strong> Kopiere nicht blind – probiere dein eigenes Beta</li>
      </ul>
    </div>
  </div>
</div>

---

### Praktische Übungen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    Übungen für besseres Route Reading
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 1: 2-Minuten-Analyse</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Analysiere jeden Boulder 2 Minuten, bevor du einsteigst. Identifiziere Griffe, Crux, Sequenz, Rests. Dann klettere mit Plan.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 2: Rückwärts-Planung</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Beginne beim Top: Wo musst du sein, um den Top-Griff zu erreichen? Arbeite dich von dort zum Start zurück.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 3: Forerunning</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Gehe die Bewegungen am Boden vor der Wand durch. Bewege deine Arme und Beine, als würdest du klettern. Das baut Muskelgedächtnis auf.
      </p>
    </div>
  </div>
</div>

**Merke:** Die besten Kletterer sind nicht die stärksten – sie sind die klügsten. Route Reading ist eine Superkraft!
    `,
    en: `
### Route Reading: Solving Boulders with Your Mind

The difference between a good and a great climber often isn't strength – it's <strong>route reading</strong> – the ability to "read" a boulder and find the optimal solution BEFORE you start climbing.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Eye className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">The Fundamental Principle</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        <strong>"Climb the boulder in your mind first, then on the wall!"</strong> Pre-climb analysis saves attempts, energy, and frustration. Pros often spend more time reading than climbing.
      </p>
    </div>
  </div>
</div>

---

### Pre-Climb Analysis

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Map className="text-green-600 dark:text-green-400" size={24} />
    Analyze Before Climbing
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Step 1: Identify All Holds</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Look at <strong>all</strong> holds and footholds. What type are they? Jugs, crimps, slopers, pinches? Which direction do they work best?
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Step 2: Find the Crux</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Where is the hardest section? There are usually 1-2 key moves. Plan these first – the rest follows.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Step 3: Think Through Sequences</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Which hand grabs which hold? Which foot goes where? Sometimes the order is decisive!
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Step 4: Plan Rest Positions</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Where can you rest? Plan: Fast through the crux, recover at good holds.
      </p>
    </div>
  </div>
</div>

---

### Visualization

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Brain className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Mental Rehearsal</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        Visualization is a <strong>scientifically proven</strong> technique: When you mentally go through a movement, the same neurons fire as during the actual movement. You train without climbing!
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>Close your eyes:</strong> Visualize every move – hand, foot, body position</li>
        <li><strong>Pantomime:</strong> Go through movements on the ground in front of the wall (forerunning)</li>
        <li><strong>Think backwards:</strong> Start at the top and work back to the start</li>
        <li><strong>Visualize tempo:</strong> Where do you climb fast? Where slow?</li>
      </ul>
    </div>
  </div>
</div>

---

### On-Sight vs. Flash vs. Project

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Lightbulb className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Different Climbing Styles</h4>
      <div className="space-y-3 mt-3">
        <div>
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>On-Sight:</strong> First attempt, <strong>without</strong> prior info. You've never seen the boulder, watched anyone climb it, or received beta. Requires excellent route reading!</p>
        </div>
        <div>
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Flash:</strong> First attempt, <strong>with</strong> info. You've seen someone climb it or received beta. Still impressive!</p>
        </div>
        <div>
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Project:</strong> Multiple attempts/sessions. You work out individual moves, link them together, and finally send the complete boulder.</p>
        </div>
      </div>
    </div>
  </div>
</div>

---

### Beta-Sharing & Community

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Users className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Learning from Each Other</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        Beta (the solution for a boulder) is <strong>subjective</strong>. Your solution can be different from your climbing partner's – and still just as good!
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2 list-disc list-inside">
        <li><strong>Watch others:</strong> You can learn a lot by watching other climbers</li>
        <li><strong>Height differences:</strong> Tall and short climbers often have completely different beta</li>
        <li><strong>Respectful sharing:</strong> Only give beta when someone asks or is open to it</li>
        <li><strong>Find your own solution:</strong> Don't copy blindly – try your own beta</li>
      </ul>
    </div>
  </div>
</div>

---

### Practical Exercises

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    Exercises for Better Route Reading
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 1: 2-Minute Analysis</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Analyze every boulder for 2 minutes before climbing. Identify holds, crux, sequence, rests. Then climb with a plan.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 2: Backwards Planning</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Start at the top: Where do you need to be to reach the top hold? Work backwards from there to the start.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 3: Forerunning</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Go through the movements on the ground in front of the wall. Move your arms and legs as if climbing. This builds muscle memory.
      </p>
    </div>
  </div>
</div>

**Remember:** The best climbers aren't the strongest – they're the smartest. Route reading is a superpower!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Route Reading",
      description: "Trainiere systematisches Analysieren und Visualisieren von Bouldern.",
      checklist: [
        { text: "Übung 1: Analysiere jeden Boulder 2 Minuten bevor du einsteigst (Griffe, Crux, Sequenz)", checked: false },
        { text: "Übung 2: Plane einen Boulder rückwärts – vom Top zum Start", checked: false },
        { text: "Übung 3: Forerunning – gehe die Bewegungen am Boden vor der Wand durch", checked: false },
        { text: "Beobachte andere Kletterer und vergleiche deren Beta mit deinem", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Route Reading",
      description: "Train systematic analysis and visualization of boulders.",
      checklist: [
        { text: "Exercise 1: Analyze every boulder for 2 minutes before starting (holds, crux, sequence)", checked: false },
        { text: "Exercise 2: Plan a boulder backwards – from top to start", checked: false },
        { text: "Exercise 3: Forerunning – go through movements on the ground in front of the wall", checked: false },
        { text: "Observe other climbers and compare their beta with yours", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was sind die vier Schritte der Pre-Climb Analyse?",
        answer: "Die vier Schritte sind: 1) Alle Griffe identifizieren (Art, Richtung), 2) Die Crux finden (schwerste Stelle), 3) Sequenzen durchdenken (welche Hand/welcher Fuß wo?), 4) Rest-Positionen planen (wo rasten, wo schnell klettern). Profis verbringen oft mehr Zeit mit Lesen als mit Klettern."
      },
      {
        question: "Was ist der Unterschied zwischen On-Sight, Flash und Project?",
        answer: "On-Sight: Erster Versuch ohne vorherige Infos – kein Beta gesehen oder gehört. Flash: Erster Versuch mit Infos – jemanden gesehen oder Beta bekommen. Project: Mehrere Versuche/Sessions – Einzelzüge ausarbeiten, verbinden und schließlich komplett senden. On-Sight erfordert das beste Route Reading."
      },
      {
        question: "Warum funktioniert Visualisierung beim Klettern?",
        answer: "Visualisierung ist wissenschaftlich belegt: Wenn man eine Bewegung im Kopf durchgeht, feuern dieselben Neuronen wie bei der echten Bewegung. Man trainiert Muskelgedächtnis, ohne zu klettern. Man kann die Augen schließen und jeden Zug vorstellen, oder am Boden die Bewegungen durchgehen (Forerunning). Das hilft besonders bei komplexen Sequenzen und vor Wettkämpfen."
      }
    ],
    en: [
      {
        question: "What are the four steps of pre-climb analysis?",
        answer: "The four steps are: 1) Identify all holds (type, direction), 2) Find the crux (hardest section), 3) Think through sequences (which hand/foot where?), 4) Plan rest positions (where to rest, where to climb fast). Pros often spend more time reading than climbing."
      },
      {
        question: "What is the difference between on-sight, flash, and project?",
        answer: "On-sight: First attempt without prior info – no beta seen or heard. Flash: First attempt with info – seen someone climb or received beta. Project: Multiple attempts/sessions – work out individual moves, link them, and finally send complete. On-sight requires the best route reading."
      },
      {
        question: "Why does visualization work in climbing?",
        answer: "Visualization is scientifically proven: when you mentally go through a movement, the same neurons fire as during the actual movement. You train muscle memory without climbing. You can close your eyes and visualize each move, or go through movements on the ground (forerunning). This especially helps with complex sequences and before competitions."
      }
    ]
  }
};
