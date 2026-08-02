import { Mountain, Footprints, Brain, AlertTriangle, TrendingUp, Eye, Scale } from 'lucide-react';

export const slabTechniques = {
  title: {
    de: "Slab/Platte - Reibungsklettern",
    en: "Slab Climbing - Friction Techniques"
  },
  description: {
    de: "Meistere die Kunst des Slab-Kletterns: Vertrauen in die Füße, Balance auf flachen Wänden und die mentale Herausforderung.",
    en: "Master the art of slab climbing: trusting your feet, balancing on low-angle walls, and the mental challenge."
  },
  content: {
    de: `
### Slab-Klettern: Wenn Balance alles ist

Slab (Platte) bezeichnet Wände mit weniger als 90° Neigung – die Wand lehnt sich <strong>von dir weg</strong>. Hier ist alles anders als im Überhang: Statt Kraft brauchst du <strong>Balance, Reibung und Vertrauen</strong> in deine Schuhe.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Mountain className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Das fundamentale Prinzip</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        <strong>"Auf der Platte klettern deine Füße – deine Hände helfen nur beim Balancieren!"</strong> Im Slab liegt fast 100% deines Gewichts auf den Füßen. Deine Hände dienen nur als Stabilisierung.
      </p>
    </div>
  </div>
</div>

---

### Smearing: Reibung ist dein Freund

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Footprints className="text-green-600 dark:text-green-400" size={24} />
    Smearing-Technik
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Was ist Smearing?</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Smearing bedeutet, den <strong>gesamten Vorfuß flach auf die Wandoberfläche</strong> zu setzen und auf Reibung zu vertrauen – ohne einen echten Tritt. Je mehr Gummi-Kontaktfläche, desto mehr Halt.
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li><strong>Maximiere die Kontaktfläche:</strong> Vorfuß flach aufsetzen</li>
        <li><strong>Gewicht über den Fuß:</strong> Dein Gewicht muss direkt über dem Reibungspunkt sein</li>
        <li><strong>Nicht rutschen:</strong> Langsames, kontrolliertes Bewegen</li>
        <li><strong>Gute Schuhe helfen:</strong> Weiches Gummi = mehr Reibung auf Slab</li>
      </ul>
    </div>
  </div>
</div>

---

### Körperposition auf der Platte

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Scale className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Die richtige Position</h4>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
        <li><strong>Hüfte nah an der Wand:</strong> Wie immer, aber auf Slab besonders wichtig</li>
        <li><strong>Gewicht auf den Füßen:</strong> Verlagere dein Gewicht konsequent über die Füße</li>
        <li><strong>Arme nicht ziehen:</strong> Hände nur zum Balancieren nutzen, nicht zum Hochziehen!</li>
        <li><strong>Aufrecht stehen:</strong> Nicht in die Wand "reinlehnen" – das reduziert Reibung auf den Füßen</li>
        <li><strong>Kleine Schritte:</strong> Viele kleine Schritte sind sicherer als wenige große</li>
      </ul>
    </div>
  </div>
</div>

---

### Die mentale Herausforderung

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Brain className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Slab ist Kopfsache!</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        Slab-Klettern ist oft die <strong>mentale Herausforderung Nr. 1</strong>. Du stehst exponiert, die Griffe sind klein, und du musst deinen Schuhen vertrauen, obwohl es sich anfühlt, als würdest du jeden Moment abrutschen.
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>Vertrauen entwickeln:</strong> Übe an leichten Slabs und steigere langsam</li>
        <li><strong>Nicht nach unten schauen:</strong> Fokus auf den nächsten Tritt/Griff</li>
        <li><strong>Atmen:</strong> Tiefes, ruhiges Atmen hilft gegen Angst</li>
        <li><strong>Commitment:</strong> Zögerliches Treten erhöht die Rutschgefahr – tritt entschlossen!</li>
      </ul>
    </div>
  </div>
</div>

---

### Sicherheit auf der Platte

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Vorsicht beim Slab!</h4>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li><strong>Stürze auf Slab:</strong> Du rutschst an der Wand entlang → Abschürfungen möglich</li>
        <li><strong>Landebereich:</strong> Achte auf freien Boden unter dir</li>
        <li><strong>Schuhe prüfen:</strong> Abgenutzte Sohlen = weniger Reibung = gefährlich auf Slab</li>
        <li><strong>Sauber klettern:</strong> Chalk auf der Wandoberfläche reduziert Reibung für die Schuhe</li>
      </ul>
    </div>
  </div>
</div>

---

### Praktische Übungen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    Übungen für Slab
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 1: Smearing üben</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Finde eine leichte Slab-Wand</li>
        <li>Klettere NUR mit Smearing (ignoriere sichtbare Tritte)</li>
        <li>Spüre, wie viel Reibung deine Schuhe haben</li>
        <li>Vertraue den Schuhen!</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 2: Ohne-Hände-Klettern</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Finde eine sehr leichte Slab-Wand</li>
        <li>Klettere so weit wie möglich ohne Hände</li>
        <li>Nutze die Hände nur zum Balancieren an der Wand (nicht greifen)</li>
        <li>Das trainiert perfekte Gewichtsverlagerung</li>
      </ol>
    </div>
  </div>
</div>

**Merke:** Auf der Platte gewinnt nicht der Stärkste, sondern der, der seinen Schuhen vertraut und die beste Balance hat!
    `,
    en: `
### Slab Climbing: When Balance is Everything

Slab refers to walls angled less than 90° – the wall leans <strong>away from you</strong>. Everything is different from overhangs: Instead of strength, you need <strong>balance, friction, and trust</strong> in your shoes.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Mountain className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">The Fundamental Principle</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        <strong>"On slab, your feet climb – your hands just help balance!"</strong> On slab, nearly 100% of your weight is on your feet. Your hands only serve as stabilization.
      </p>
    </div>
  </div>
</div>

---

### Smearing: Friction is Your Friend

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Footprints className="text-green-600 dark:text-green-400" size={24} />
    Smearing Technique
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">What is Smearing?</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Smearing means placing your <strong>entire forefoot flat on the wall surface</strong> and trusting friction – without a real foothold. The more rubber contact area, the more grip.
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li><strong>Maximize contact area:</strong> Place forefoot flat</li>
        <li><strong>Weight over foot:</strong> Your weight must be directly above the friction point</li>
        <li><strong>Don't slip:</strong> Slow, controlled movements</li>
        <li><strong>Good shoes help:</strong> Soft rubber = more friction on slab</li>
      </ul>
    </div>
  </div>
</div>

---

### Body Position on Slab

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Scale className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">The Right Position</h4>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
        <li><strong>Hips close to wall:</strong> As always, but especially important on slab</li>
        <li><strong>Weight on feet:</strong> Consistently shift weight over your feet</li>
        <li><strong>Don't pull with arms:</strong> Use hands only for balance, not for pulling up!</li>
        <li><strong>Stand upright:</strong> Don't "lean into" the wall – that reduces friction on feet</li>
        <li><strong>Small steps:</strong> Many small steps are safer than few large ones</li>
      </ul>
    </div>
  </div>
</div>

---

### The Mental Challenge

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Brain className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Slab is a Head Game!</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        Slab climbing is often the <strong>#1 mental challenge</strong>. You stand exposed, holds are small, and you have to trust your shoes even though it feels like you could slip at any moment.
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>Build trust:</strong> Practice on easy slabs and gradually increase</li>
        <li><strong>Don't look down:</strong> Focus on the next hold/foothold</li>
        <li><strong>Breathe:</strong> Deep, calm breathing helps against fear</li>
        <li><strong>Commitment:</strong> Hesitant stepping increases slip risk – step decisively!</li>
      </ul>
    </div>
  </div>
</div>

---

### Safety on Slab

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Caution on Slab!</h4>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li><strong>Falls on slab:</strong> You slide along the wall → scrapes possible</li>
        <li><strong>Landing area:</strong> Ensure clear ground below you</li>
        <li><strong>Check shoes:</strong> Worn soles = less friction = dangerous on slab</li>
        <li><strong>Clean climbing:</strong> Chalk on wall surface reduces friction for shoes</li>
      </ul>
    </div>
  </div>
</div>

---

### Practical Exercises

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    Exercises for Slab
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 1: Practice Smearing</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Find an easy slab wall</li>
        <li>Climb ONLY with smearing (ignore visible footholds)</li>
        <li>Feel how much friction your shoes have</li>
        <li>Trust your shoes!</li>
      </ol>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 2: No-Hands Climbing</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-1 list-decimal list-inside">
        <li>Find a very easy slab wall</li>
        <li>Climb as far as possible without hands</li>
        <li>Use hands only for balance on wall (don't grip)</li>
        <li>This trains perfect weight transfer</li>
      </ol>
    </div>
  </div>
</div>

**Remember:** On slab, the strongest climber doesn't win – the one who trusts their shoes and has the best balance does!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Slab-Klettern",
      description: "Trainiere Reibungsklettern und entwickle Vertrauen in deine Schuhe.",
      checklist: [
        { text: "Übung 1: Smearing üben - Klettere nur mit Reibung, ignoriere sichtbare Tritte", checked: false },
        { text: "Übung 2: Ohne-Hände-Klettern auf einer leichten Slab-Wand", checked: false },
        { text: "Übung 3: Klettere einen Slab-Boulder und achte auf aufrechte Körperposition", checked: false },
        { text: "Mental: Vertraue deinen Schuhen – tritt entschlossen, nicht zögerlich", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Slab Climbing",
      description: "Train friction climbing and develop trust in your shoes.",
      checklist: [
        { text: "Exercise 1: Practice smearing - Climb only with friction, ignore visible footholds", checked: false },
        { text: "Exercise 2: No-hands climbing on an easy slab wall", checked: false },
        { text: "Exercise 3: Climb a slab boulder and focus on upright body position", checked: false },
        { text: "Mental: Trust your shoes – step decisively, not hesitantly", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum sollst du auf der Platte nicht an den Griffen ziehen?",
        answer: "Auf der Platte liegt fast 100% des Gewichts auf den Füßen. Wenn du an den Griffen ziehst, lehnst du deinen Oberkörper zur Wand – das zieht dein Gewicht von den Füßen weg und reduziert die Reibung. Deine Füße rutschen leichter ab. Die Hände dienen nur zum Balancieren, die Beine machen die Arbeit."
      },
      {
        question: "Was ist Smearing und wie machst du es richtig?",
        answer: "Smearing bedeutet, den gesamten Vorfuß flach auf die Wandoberfläche zu setzen und auf Reibung zu vertrauen. Man maximiert die Gummi-Kontaktfläche. Das Gewicht muss direkt über dem Reibungspunkt sein. Wichtig: Langsam und kontrolliert bewegen, nicht rutschen. Weiche Schuhe helfen mit mehr Reibung."
      },
      {
        question: "Warum ist Slab-Klettern mental so herausfordernd?",
        answer: "Slab-Klettern ist mental herausfordernd, weil man exponiert steht, die Griffe klein sind und man seinen Schuhen vertrauen muss, obwohl es sich unsicher anfühlt. Zögerliches Treten erhöht paradoxerweise die Rutschgefahr. Man muss entschlossen treten und Vertrauen entwickeln – das geht nur durch langsames Steigern und Übung."
      }
    ],
    en: [
      {
        question: "Why shouldn't you pull on holds on slab?",
        answer: "On slab, nearly 100% of weight is on your feet. When you pull on holds, you lean your upper body toward the wall – this pulls weight off your feet and reduces friction. Your feet slip more easily. Hands only serve for balance, legs do the work."
      },
      {
        question: "What is smearing and how do you do it correctly?",
        answer: "Smearing means placing your entire forefoot flat on the wall surface and trusting friction. You maximize the rubber contact area. Weight must be directly above the friction point. Important: Move slowly and controlled, don't slip. Soft shoes help with more friction."
      },
      {
        question: "Why is slab climbing so mentally challenging?",
        answer: "Slab climbing is mentally challenging because you stand exposed, holds are small, and you must trust your shoes even though it feels insecure. Paradoxically, hesitant stepping increases slip risk. You must step decisively and build trust – this only comes through gradual progression and practice."
      }
    ]
  }
};
