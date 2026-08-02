
import { Mountain, Trees, Globe, Users, History, Brain, Compass } from 'lucide-react';

export const gymVsOutdoor = {
  title: {
    de: "Halle vs. Fels: Zwei Welten, eine Leidenschaft",
    en: "Gym vs. Rock: Two Worlds, One Passion"
  },
  description: {
    de: "Tauche tief ein in die Geschichte, Kultur und Praxis des Boulderns in der Halle und am echten Fels.",
    en: "Dive deep into the history, culture, and practice of bouldering in the gym and on real rock."
  },
  content: {
    de: `
### Die Zwei Seelen des Boulderns

Jeder Boulderer lebt in zwei Welten: der pulsierenden, sozialen Atmosphäre der **Boulderhalle** und der rohen, abenteuerlichen Stille des **Felsens**. Beide sind essenziell, um den Sport in seiner ganzen Tiefe zu erleben. Sie sind keine Gegensätze, sondern Partner, die dich auf unterschiedliche Weise fordern und fördern.

<div className="flex items-start gap-4 p-4 my-6 bg-stone-100 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <History size={48} className="text-orange-500 flex-shrink-0 mt-1" />
    <div>
        <h4 className="font-bold text-stone-800 dark:text-stone-200">Eine kurze Geschichte: Vom Wald zur Wand</h4>
        <p className="text-sm text-stone-600 dark:text-stone-400">Bouldern wurde an Felsblöcken in den Wäldern von Fontainebleau (Frankreich) geboren. Es war pures Training für die großen Alpenwände. Die Boulderhalle ist eine moderne Erfindung, die den Sport wetterunabhängig, sicher und für jeden zugänglich gemacht hat. Sie hat eine Explosion der Popularität und des technischen Niveaus ausgelöst, aber die Seele des Sports liegt immer noch in der Natur.</p>
    </div>
</div>

### Die Boulderhalle: Dein Labor, dein Wohnzimmer
<div className="p-6 bg-white dark:bg-stone-800 rounded-xl shadow-lg border-2 border-stone-100 dark:border-stone-700 my-6">
    <div className="flex items-center gap-3 mb-3">
      <Mountain size={32} className="text-teal-500" />
      <h4 className="text-xl font-bold text-stone-800 dark:text-stone-100">Der Vibe der Halle</h4>
    </div>
    <p className="text-stone-600 dark:text-stone-400 mb-4">Stell dir einen riesigen Spielplatz für Erwachsene vor, mit Musik, Café und Menschen, die alle dieselbe Leidenschaft teilen. Die Halle ist ein sozialer Treffpunkt, an dem du sicher experimentieren kannst. Jeder Griff hat eine Farbe, jede Route ist ein klar definiertes Puzzle. Hier baust du Kraft, Technik und Freundschaften auf.</p>
    <div className="grid grid-cols-2 gap-4 text-sm mt-4">
        <div>
            <h5 className="font-bold mb-2 text-stone-800 dark:text-stone-200">Vorteile:</h5>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span><span>Hohe Dichte an Routen für jedes Level</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span><span>Maximale Sicherheit durch dicke Matten</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span><span>Immer geöffnet, egal bei welchem Wetter</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span><span>Perfekt für gezieltes Training und Kurse</span></li>
            </ul>
        </div>
        <div>
            <h5 className="font-bold mb-2 text-stone-800 dark:text-stone-200">Nachteile:</h5>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-1">✗</span><span>Kann zu Stoßzeiten sehr voll sein</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-1">✗</span><span>Griffe und Wände sind künstlich</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-1">✗</span><span>Weniger Kreativität bei Tritten gefordert</span></li>
            </ul>
        </div>
    </div>
</div>

### Outdoor-Bouldern: Das ursprüngliche Abenteuer
<div className="p-6 bg-white dark:bg-stone-800 rounded-xl shadow-lg border-2 border-stone-100 dark:border-stone-700 my-6">
    <div className="flex items-center gap-3 mb-3">
      <Trees size={32} className="text-orange-500" />
      <h4 className="text-xl font-bold text-stone-800 dark:text-stone-100">Der Ruf der Natur</h4>
    </div>
    <p className="text-stone-600 dark:text-stone-400 mb-4">Draußen gibt es keine farbigen Griffe, die dir den Weg weisen. Nur du, der Fels und die unendlichen Möglichkeiten der Natur. Jeder Griff, jeder Tritt muss gefunden und bewertet werden. Es ist ein Dialog mit dem Gestein, ein mentales Puzzle in seiner reinsten Form. Die Stille des Waldes, das Gefühl von echtem Fels unter den Fingern – das ist eine tiefere, fast meditative Erfahrung.</p>
    <div className="grid grid-cols-2 gap-4 text-sm mt-4">
        <div>
            <h5 className="font-bold mb-2 text-stone-800 dark:text-stone-200">Vorteile:</h5>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span><span>Einzigartiges Naturerlebnis und Ruhe</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span><span>Fördert Kreativität, da Tritte nicht vorgegeben sind</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span><span>Verbessert die Fähigkeit, Fels zu "lesen"</span></li>
            </ul>
        </div>
        <div>
            <h5 className="font-bold mb-2 text-stone-800 dark:text-stone-200">Nachteile:</h5>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-1">✗</span><span>Abhängig von Wetter und Jahreszeit</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-1">✗</span><span>Höhere Anforderungen an Sicherheit (Spotting)</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-1">✗</span><span>Häufig längere Zustiege (Wanderungen)</span></li>
            </ul>
        </div>
    </div>
</div>

### Sicherheit draußen: Mehr als nur Matten
Outdoor-Bouldern bedeutet mehr Eigenverantwortung. Deine Sicherheit und die deiner Freunde hängt von drei Dingen ab:

1.  **Crashpad:** Deine mobile Landefläche. Lerne, sie richtig zu platzieren – nicht nur direkt unter dem Boulder, sondern dort, wo du wahrscheinlich landen wirst.
2.  **Spotting:** Dies ist eine aktive Kunst. Ein guter Spotter stützt nicht den Fall, sondern **lenkt den fallenden Körper** weg von Gefahren (z.B. andere Felsen) und sorgt dafür, dass er mit den Füßen voran auf dem Pad landet. Deine Hände sind am Rücken des Kletterers, bereit, ihn an den Schulterblättern zu steuern. Sprecht vorher miteinander!
3.  **Boulder-Inspektion:** Überprüfe die Griffe und den Fels auf lose Teile, bevor du mit voller Kraft daran ziehst.

### Leave No Trace: Der Ehrenkodex am Fels
<div className="flex items-center gap-4 p-4 my-6 bg-green-100 dark:bg-green-900/50 border-l-4 border-green-500 rounded-r-lg">
    <Globe size={40} className="text-green-600 dark:text-green-400 flex-shrink-0" />
    <div>
        <h4 className="font-bold text-green-800 dark:text-green-200">Hinterlasse nur Fußspuren</h4>
        <p className="text-sm text-green-700 dark:text-green-300">Draußen sind wir nur Gäste. Das bedeutet: Nimm **allen** Müll wieder mit (auch den von anderen), putze Chalk-Spuren von den Griffen, vermeide laute Musik und bleibe auf den Wegen. Der Respekt vor der Natur steht an erster Stelle.</p>
    </div>
</div>

### Synergie: Wie beides dich besser macht
Trainiere in der **Halle**, um stärker zu werden, spezifische Bewegungen zu lernen und deine Technik zu verfeinern. Gehe an den **Fels**, um diese Fähigkeiten anzuwenden, deine mentale Stärke zu testen und die wahre Essenz des Boulderns zu erleben.
    `,
    en: `
### The Two Souls of Bouldering

Every boulderer lives in two worlds: the vibrant, social atmosphere of the **bouldering gym** and the raw, adventurous silence of the **rock**. Both are essential to experiencing the sport in its full depth. They are not opposites, but partners that challenge and develop you in different ways.

<div className="flex items-start gap-4 p-4 my-6 bg-stone-100 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <History size={48} className="text-orange-500 flex-shrink-0 mt-1" />
    <div>
        <h4 className="font-bold text-stone-800 dark:text-stone-200">A Brief History: From Forest to Fluorescent Holds</h4>
        <p className="text-sm text-stone-600 dark:text-stone-400">Bouldering was born on boulders in the forests of Fontainebleau, France. It was pure training for the great Alpine walls. The bouldering gym is a modern invention that has made the sport weather-independent, safe, and accessible to everyone. It has triggered an explosion in popularity and technical standards, but the soul of the sport still lies in nature.</p>
    </div>
</div>

### The Bouldering Gym: Your Lab, Your Living Room
<div className="p-6 bg-white dark:bg-stone-800 rounded-xl shadow-lg border-2 border-stone-100 dark:border-stone-700 my-6">
    <div className="flex items-center gap-3 mb-3">
      <Mountain size={32} className="text-teal-500" />
      <h4 className="text-xl font-bold text-stone-800 dark:text-stone-100">The Vibe of the Gym</h4>
    </div>
    <p className="text-stone-600 dark:text-stone-400 mb-4">Imagine a huge playground for adults, with music, a café, and people who all share the same passion. The gym is a social hub where you can experiment safely. Every hold has a color, every route is a clearly defined puzzle. Here you build strength, technique, and friendships.</p>
    <div className="grid grid-cols-2 gap-4 text-sm mt-4">
        <div>
            <h5 className="font-bold mb-2 text-stone-800 dark:text-stone-200">Advantages:</h5>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span><span>High density of routes for every level</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span><span>Maximum safety with thick mats</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span><span>Always open, regardless of weather</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span><span>Perfect for targeted training and classes</span></li>
            </ul>
        </div>
        <div>
            <h5 className="font-bold mb-2 text-stone-800 dark:text-stone-200">Disadvantages:</h5>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-1">✗</span><span>Can be very crowded at peak times</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-1">✗</span><span>Holds and walls are artificial</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-1">✗</span><span>Less creativity required for footwork</span></li>
            </ul>
        </div>
    </div>
</div>

### Outdoor Bouldering: The Original Adventure
<div className="p-6 bg-white dark:bg-stone-800 rounded-xl shadow-lg border-2 border-stone-100 dark:border-stone-700 my-6">
    <div className="flex items-center gap-3 mb-3">
      <Trees size={32} className="text-orange-500" />
      <h4 className="text-xl font-bold text-stone-800 dark:text-stone-100">The Call of Nature</h4>
    </div>
    <p className="text-stone-600 dark:text-stone-400 mb-4">Outside, there are no colored holds to show you the way. Just you, the rock, and the infinite possibilities of nature. Every handhold, every foothold must be found and evaluated. It's a dialogue with the rock, a mental puzzle in its purest form. The silence of the forest, the feeling of real rock under your fingertips—this is a deeper, almost meditative experience.</p>
    <div className="grid grid-cols-2 gap-4 text-sm mt-4">
        <div>
            <h5 className="font-bold mb-2 text-stone-800 dark:text-stone-200">Advantages:</h5>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span><span>Unique nature experience and tranquility</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span><span>Fosters creativity as footholds are not given</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span><span>Improves the ability to "read" rock</span></li>
            </ul>
        </div>
        <div>
            <h5 className="font-bold mb-2 text-stone-800 dark:text-stone-200">Disadvantages:</h5>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-1">✗</span><span>Dependent on weather and season</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-1">✗</span><span>Higher demands on safety (spotting)</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-1">✗</span><span>Often longer approaches (hikes)</span></li>
            </ul>
        </div>
    </div>
</div>

### Safety Outdoors: More Than Just Mats
Outdoor bouldering means more personal responsibility. Your safety and that of your friends depends on three things:

1.  **Crash Pad:** Your portable landing zone. Learn to place it correctly—not just directly under the boulder, but where you are likely to land.
2.  **Spotting:** This is an active art. A good spotter doesn't catch the fall, but **guides the falling body** away from dangers (e.g., other rocks) and ensures they land on their feet on the pad. Your hands are on the climber's back, ready to control them by the shoulder blades. Talk to each other beforehand!
3.  **Boulder Inspection:** Check the holds and the rock for loose parts before pulling on them with full force.

### Leave No Trace: The Code of Honor on the Rock
<div className="flex items-center gap-4 p-4 my-6 bg-green-100 dark:bg-green-900/50 border-l-4 border-green-500 rounded-r-lg">
    <Globe size={40} className="text-green-600 dark:text-green-400 flex-shrink-0" />
    <div>
        <h4 className="font-bold text-green-800 dark:text-green-200">Leave Only Footprints</h4>
        <p className="text-sm text-green-700 dark:text-green-300">Outdoors, we are only guests. This means: pack out **all** your trash (including others'), brush chalk marks off holds, avoid loud music, and stay on the trails. Respect for nature comes first.</p>
    </div>
</div>

### Synergy: How Both Make You Better
Train in the **gym** to get stronger, learn specific movements, and refine your technique. Go to the **rock** to apply these skills, test your mental strength, and experience the true essence of bouldering.
    `
  },
  task: {
    de: {
      title: "Aufgabe: Analysiere einen Outdoor-Boulder-Spot",
      description: "Suche online nach einem bekannten Bouldergebiet in deiner Nähe oder einem, das dich interessiert (z.B. Fontainebleau, Magic Wood, Zillertal). Analysiere, was diesen Spot ausmacht.",
      checklist: [
        { text: "Welche Art von Gestein gibt es dort?", checked: false },
        { text: "Was sind die berühmtesten Boulder in diesem Gebiet?", checked: false },
        { text: "Welche Jahreszeit ist die beste, um dort zu bouldern?", checked: false },
        { text: "Gibt es spezielle Verhaltensregeln oder Zugangsbeschränkungen für das Gebiet?", checked: false },
      ]
    },
    en: {
      title: "Task: Analyze an Outdoor Bouldering Spot",
      description: "Search online for a famous bouldering area near you or one that interests you (e.g., Fontainebleau, Magic Wood, Zillertal). Analyze what makes this spot special.",
      checklist: [
        { text: "What type of rock is there?", checked: false },
        { text: "What are the most famous boulders in this area?", checked: false },
        { text: "What is the best season to boulder there?", checked: false },
        { text: "Are there any special rules of conduct or access restrictions for the area?", checked: false },
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was sind die zwei wichtigsten zusätzlichen Sicherheitsaspekte beim Outdoor-Bouldern?",
        answer: "Ein Crashpad zur Landungssicherung und korrektes Spotting durch Kletterpartner."
      },
      {
        question: "Was bedeutet 'Leave No Trace' (LNT)?",
        answer: "Es bedeutet, die Natur so zu verlassen, wie man sie vorgefunden hat – ohne Müll, Beschädigungen oder unnötige Spuren zu hinterlassen."
      },
      {
        question: "Nenne zwei Vorteile des Hallenboulderns gegenüber dem Felsklettern.",
        answer: "Es ist wetterunabhängig, hat eine höhere Dichte an Routen auf kleinem Raum und bietet eine kontrollierte, sichere Lernumgebung."
      }
    ],
    en: [
      {
        question: "What are the two most important additional safety aspects of outdoor bouldering?",
        answer: "A crash pad for landing safety and proper spotting by climbing partners."
      },
      {
        question: "What does 'Leave No Trace' (LNT) mean?",
        answer: "It means leaving nature as you found it—without leaving trash, damage, or unnecessary marks."
      },
      {
        question: "Name two advantages of gym bouldering over rock climbing.",
        answer: "It is weather-independent, has a higher density of routes in a small space, and offers a controlled, safe learning environment."
      }
    ]
  }
};
