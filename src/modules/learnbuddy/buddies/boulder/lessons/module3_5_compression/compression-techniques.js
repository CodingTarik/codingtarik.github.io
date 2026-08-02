import { Maximize2, Activity, Target, AlertTriangle, TrendingUp, Grip } from 'lucide-react';

export const compressionTechniques = {
  title: {
    de: "Compression - Kompression",
    en: "Compression Techniques"
  },
  description: {
    de: "Lerne die Kunst der Kompression: Griffe zusammendrücken, Volume-Probleme lösen und massive Körperspannung aufbauen.",
    en: "Learn the art of compression: squeezing holds together, solving volume problems, and building massive body tension."
  },
  content: {
    de: `
### Compression: Die Kunst des Zusammendrückens

Compression-Klettern ist eine der anspruchsvollsten Techniken im Bouldern. Du musst <strong>Griffe gegeneinander drücken</strong> oder zusammenpressen, oft ohne klare Tritt-Möglichkeiten. Es erfordert massive Körperspannung und Arm-Kraft.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Maximize2 className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Das Prinzip</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        <strong>"Drücke die Griffe zusammen, als wolltest du sie zerquetschen!"</strong> Bei Compression erzeugst du Halt, indem du von zwei Seiten nach innen drückst. Stell dir vor, du drückst einen großen Ball zusammen.
      </p>
    </div>
  </div>
</div>

---

### Wann brauchst du Compression?

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    Typische Compression-Situationen
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Volume-Probleme</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Große Volumes in der Halle: Du musst das Volume von beiden Seiten umfassen und zusammendrücken.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Arêtes (Kanten)</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Fels- oder Wand-Kanten, die du von beiden Seiten gleichzeitig greifen musst.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Gegenüberliegende Griffe</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Zwei Griffe, die nur funktionieren, wenn du sie gegeneinander drückst (z.B. zwei Sloper von außen).
      </p>
    </div>
  </div>
</div>

---

### Technik

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Activity className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">So funktioniert Compression</h4>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
        <li><strong>Arme und Core zusammen:</strong> Arme drücken nach innen, Core stabilisiert den Körper</li>
        <li><strong>Richtung:</strong> Immer "nach innen" drücken – die Griffe zusammenpressen</li>
        <li><strong>Füße:</strong> Oft nur minimal belastet oder smearing – Hauptarbeit machen Arme und Core</li>
        <li><strong>Brust zur Wand:</strong> Je näher du am Volume/der Kante bist, desto besser</li>
        <li><strong>Ganzer Arm:</strong> Nicht nur Hände – Unterarme, Oberarme und Schultern arbeiten alle</li>
      </ul>
    </div>
  </div>
</div>

---

### Sicherheit

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Vorsicht!</h4>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li>Compression ist sehr intensiv für Schultern und Handgelenke</li>
        <li>Immer gut aufwärmen!</li>
        <li>Stürze bei Compression können unkontrolliert sein – achte auf Landebereich</li>
        <li>Nicht zu lange trainieren – die Belastung ist sehr hoch</li>
      </ul>
    </div>
  </div>
</div>

---

### Praktische Übungen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    Übungen für Compression
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 1: Volume-Umfassen</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Finde ein großes Volume in deiner Halle und übe, es von beiden Seiten zu umfassen und zu halten. Spüre, wie du die Kraft nach innen richteten musst.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 2: Ball-Squeeze</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Drücke einen Medizinball oder Basketball mit beiden Händen zusammen. Halte 10 Sekunden, wiederhole 5 Mal. Das trainiert die Compression-Kraft.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Übung 3: Compression-Boulder</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Suche gezielt Compression-Boulder in deiner Halle. Übe das Zusammendrücken von verschiedenen Griff-Formen und Volumes.
      </p>
    </div>
  </div>
</div>

**Merke:** Compression ist Ganzkörper-Arbeit. Arme, Core und die richtige Druckrichtung müssen zusammenspielen!
    `,
    en: `
### Compression: The Art of Squeezing

Compression climbing is one of the most demanding techniques in bouldering. You have to <strong>press holds against each other</strong> or squeeze them together, often without clear footholds. It requires massive body tension and arm strength.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Maximize2 className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">The Principle</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        <strong>"Squeeze the holds together as if you want to crush them!"</strong> In compression, you create grip by pressing inward from two sides. Imagine squeezing a large ball together.
      </p>
    </div>
  </div>
</div>

---

### When Do You Need Compression?

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    Typical Compression Situations
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Volume Problems</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Large volumes in the gym: You must grip the volume from both sides and squeeze together.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Arêtes (Edges)</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Rock or wall edges that you must grip from both sides simultaneously.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Opposing Holds</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Two holds that only work when you press them against each other (e.g., two slopers from outside).
      </p>
    </div>
  </div>
</div>

---

### Technique

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Activity className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">How Compression Works</h4>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
        <li><strong>Arms and core together:</strong> Arms push inward, core stabilizes the body</li>
        <li><strong>Direction:</strong> Always press "inward" – squeeze the holds together</li>
        <li><strong>Feet:</strong> Often only minimal load or smearing – main work from arms and core</li>
        <li><strong>Chest to wall:</strong> The closer you are to the volume/edge, the better</li>
        <li><strong>Whole arm:</strong> Not just hands – forearms, upper arms, and shoulders all work</li>
      </ul>
    </div>
  </div>
</div>

---

### Safety

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Caution!</h4>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li>Compression is very intense for shoulders and wrists</li>
        <li>Always warm up well!</li>
        <li>Falls during compression can be uncontrolled – watch your landing area</li>
        <li>Don't train too long – the stress is very high</li>
      </ul>
    </div>
  </div>
</div>

---

### Practical Exercises

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
    Exercises for Compression
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 1: Volume Hugging</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Find a large volume in your gym and practice gripping it from both sides and holding on. Feel how you must direct force inward.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 2: Ball Squeeze</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Squeeze a medicine ball or basketball with both hands. Hold 10 seconds, repeat 5 times. This trains compression strength.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Exercise 3: Compression Boulders</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Specifically seek out compression boulders in your gym. Practice squeezing different hold shapes and volumes.
      </p>
    </div>
  </div>
</div>

**Remember:** Compression is full-body work. Arms, core, and the right pressure direction must work together!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Compression",
      description: "Trainiere Compression-Techniken an Volumes und gegenüberliegenden Griffen.",
      checklist: [
        { text: "Übung 1: Volume-Umfassen - Greife ein großes Volume von beiden Seiten und halte", checked: false },
        { text: "Übung 2: Ball-Squeeze - Drücke einen Ball mit beiden Händen zusammen (5x10 Sek)", checked: false },
        { text: "Übung 3: Suche und klettere gezielt Compression-Boulder in deiner Halle", checked: false },
        { text: "Achte auf: Immer nach innen drücken, Core anspannen, Brust nah an der Wand", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Compression",
      description: "Train compression techniques on volumes and opposing holds.",
      checklist: [
        { text: "Exercise 1: Volume hugging - Grip a large volume from both sides and hold", checked: false },
        { text: "Exercise 2: Ball squeeze - Squeeze a ball with both hands (5x10 sec)", checked: false },
        { text: "Exercise 3: Seek out and climb compression boulders in your gym", checked: false },
        { text: "Focus on: Always press inward, engage core, chest close to the wall", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was ist das Grundprinzip von Compression-Klettern?",
        answer: "Beim Compression-Klettern erzeugt man Halt, indem man von zwei Seiten nach innen drückt – man presst die Griffe zusammen. Statt einen einzelnen Griff zu halten, drückt man zwei gegenüberliegende Flächen (z.B. Seiten eines Volumes) zusammen. Arme und Core arbeiten dabei zusammen."
      },
      {
        question: "In welchen Situationen brauchst du Compression?",
        answer: "Compression braucht man bei Volume-Problemen (großes Volume von beiden Seiten greifen), bei Arêtes/Kanten (von beiden Seiten gleichzeitig greifen), und bei gegenüberliegenden Griffen, die nur durch Zusammendrücken funktionieren. Typisch in modernen Wettkampf-Bouldern mit großen Volumes."
      },
      {
        question: "Warum ist Core-Spannung bei Compression so wichtig?",
        answer: "Bei Compression drücken die Arme von außen nach innen. Ohne Core-Spannung würde der Körper instabil sein und von der Wand schwingen. Der Core stabilisiert den Körper, während die Arme die Druckkraft aufbringen. Es ist echte Ganzkörper-Arbeit: Arme, Core und die richtige Druckrichtung müssen zusammenspielen."
      }
    ],
    en: [
      {
        question: "What is the basic principle of compression climbing?",
        answer: "In compression climbing, you create grip by pressing inward from two sides – squeezing holds together. Instead of holding a single hold, you press two opposing surfaces (e.g., sides of a volume) together. Arms and core work together."
      },
      {
        question: "In what situations do you need compression?",
        answer: "You need compression for volume problems (gripping a large volume from both sides), arêtes/edges (gripping from both sides simultaneously), and opposing holds that only work through squeezing. Typical in modern competition boulders with large volumes."
      },
      {
        question: "Why is core tension so important in compression?",
        answer: "In compression, arms press inward from outside. Without core tension, the body would be unstable and swing off the wall. The core stabilizes the body while arms generate pressing force. It's true full-body work: arms, core, and the right pressure direction must work together."
      }
    ]
  }
};
