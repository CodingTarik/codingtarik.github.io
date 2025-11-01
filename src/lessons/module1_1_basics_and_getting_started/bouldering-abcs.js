
import { Grip, Palette, Waypoints, Map, GitBranch, Eye } from 'lucide-react';

export const boulderingABCs = {
  de: {
    title: "Das Boulder-ABC: Routen verstehen",
    description: "Lerne die Sprache der Wand: Verstehe Griffe, Farben, Schwierigkeitsgrade und wie man eine Route liest.",
    content: `
### Die Sprache der Wand

Ein Boulder ist kein Zufall. Er ist eine sorgfältig gestaltete Herausforderung, eine Art vertikales Schachspiel. Um es zu lösen, musst du seine Sprache verstehen.

#### 1. Die Griffe: Dein Vokabular
Jeder Griff hat einen anderen Charakter. Hier sind die wichtigsten, die du am Anfang antreffen wirst:
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6 text-center">
    <div className="p-3 bg-stone-200 dark:bg-stone-800 rounded-lg h-full flex flex-col justify-center"><strong className="text-stone-900 dark:text-stone-100 block">Henkel (Jugs)</strong><p className="text-sm text-stone-600 dark:text-stone-400">Groß & einfach zu halten. Deine besten Freunde.</p></div>
    <div className="p-3 bg-stone-200 dark:bg-stone-800 rounded-lg h-full flex flex-col justify-center"><strong className="text-stone-900 dark:text-stone-100 block">Leisten (Crimps)</strong><p className="text-sm text-stone-600 dark:text-stone-400">Kleine Kanten, die Fingerkraft fordern.</p></div>
    <div className="p-3 bg-stone-200 dark:bg-stone-800 rounded-lg h-full flex flex-col justify-center"><strong className="text-stone-900 dark:text-stone-100 block">Aufleger (Slopers)</strong><p className="text-sm text-stone-600 dark:text-stone-400">Rund & abschüssig. Reibung ist hier alles.</p></div>
    <div className="p-3 bg-stone-200 dark:bg-stone-800 rounded-lg h-full flex flex-col justify-center"><strong className="text-stone-900 dark:text-stone-100 block">Zangen (Pinches)</strong><p className="text-sm text-stone-600 dark:text-stone-400">Werden mit Daumen und Fingern gekniffen.</p></div>
    <div className="p-3 bg-stone-200 dark:bg-stone-800 rounded-lg h-full flex flex-col justify-center"><strong className="text-stone-900 dark:text-stone-100 block">Löcher (Pockets)</strong><p className="text-sm text-stone-600 dark:text-stone-400">Passen nur für wenige Finger.</p></div>
    <div className="p-3 bg-stone-200 dark:bg-stone-800 rounded-lg h-full flex flex-col justify-center"><strong className="text-stone-900 dark:text-stone-100 block">Volumen</strong><p className="text-sm text-stone-600 dark:text-stone-400">Große Strukturen, die Teil der Wand werden.</p></div>
</div>

#### 2. Die Farben: Dein Wegweiser
<div className="flex items-center gap-4 p-4 my-4 bg-teal-50 dark:bg-teal-900/40 border-l-4 border-teal-500 rounded-r-lg">
    <Palette size={40} className="text-teal-600 dark:text-teal-400 flex-shrink-0" />
    <div>
        <h4 className="font-bold text-teal-800 dark:text-teal-200">Ein Boulder, eine Farbe</h4>
        <p className="text-teal-700 dark:text-teal-300">Normalerweise gehören alle Griffe und Tritte einer Farbe zu einem Boulder. Die Schwierigkeit wird oft durch ein Schild am Start angezeigt.</p>
    </div>
</div>

#### 3. Die Route: Deine Landkarte
Jeder Boulder hat einen definierten Anfang, ein optionales Zwischenziel und ein klares Ende.

<div className="flex justify-center items-center my-6 p-4 bg-stone-200 dark:bg-stone-800 rounded-lg">
    <div className="flex items-center gap-2 md:gap-4">
        <div className="text-center">
            <p className="font-bold text-sm text-stone-800 dark:text-stone-200">START</p>
            <Map size={32} className="text-green-500" />
            <p className="text-xs text-stone-600 dark:text-stone-400">Oft markiert</p>
        </div>
        <div className="flex-1 border-t-2 border-dashed border-stone-400 dark:border-stone-600"></div>
        <div className="text-center">
            <p className="font-bold text-sm text-stone-800 dark:text-stone-200">ZONE</p>
            <GitBranch size={32} className="text-blue-500" />
            <p className="text-xs text-stone-600 dark:text-stone-400">(Optional)</p>
        </div>
        <div className="flex-1 border-t-2 border-dashed border-stone-400 dark:border-stone-600"></div>
        <div className="text-center">
            <p className="font-bold text-sm text-stone-800 dark:text-stone-200">TOP</p>
            <Waypoints size={32} className="text-orange-500" />
            <p className="text-xs text-stone-600 dark:text-stone-400">Beide Hände</p>
        </div>
    </div>
</div>
    `,
    task: {
      title: "Praktische Übung: Dechiffriere deine ersten Boulder",
      description: "Wende dein neues Wissen an und lerne, die Boulder in deiner Halle aktiv zu 'lesen', bevor du sie kletterst.",
      checklist: [
        { text: "Finde die Tafel mit der Schwierigkeitsskala in deiner Halle. Merke dir die einfachste Farbe.", checked: false },
        { text: "Wähle einen Boulder in dieser Farbe. Finde die markierten Startgriffe (meist zwei) und den finalen Top-Griff.", checked: false },
        { text: "Verfolge mit deinen Augen den wahrscheinlichsten Weg von unten nach oben. Welche Griffe wirst du nutzen? Wo wirst du deine Füße platzieren?", checked: false },
        { text: "Klettere den Boulder und vergleiche deine geplante 'Beta' (Lösung) mit der tatsächlichen Bewegung. Was hat sich anders angefühlt als gedacht?", checked: false },
      ]
    },
    quiz: [
      {
        question: "Was bedeutet die Regel 'Ein Boulder, eine Farbe'?",
        answer: "Alle Griffe und Tritte einer einzigen Farbe gehören zusammen und bilden eine Route (einen Boulder)."
      },
      {
        question: "Welche drei Hauptpunkte hat ein Boulder in der Halle?",
        answer: "Einen markierten Start, einen optionalen Zonengriff und einen Top-Griff, der zum Abschluss mit beiden Händen gehalten werden muss."
      },
      {
        question: "Was ist der Unterschied zwischen einem 'Henkel' (Jug) und einem 'Aufleger' (Sloper)?",
        answer: "Ein Henkel ist ein großer, einfach zu greifender Griff. Ein Sloper ist rund und abschüssig und erfordert Körperspannung und Reibung, um ihn zu halten."
      }
    ]
  },
  en: {
    title: "The Bouldering ABCs: Understanding Routes",
    description: "Learn the language of the wall: understand holds, colors, grades, and how to read a route.",
    content: `
### The Language of the Wall

A boulder is not random. It's a carefully designed challenge, a kind of vertical chess game. To solve it, you need to understand its language.

#### 1. The Holds: Your Vocabulary
Every hold has a different character. Here are the main ones you'll encounter at the beginning:
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6 text-center">
    <div className="p-3 bg-stone-200 dark:bg-stone-800 rounded-lg h-full flex flex-col justify-center"><strong className="text-stone-900 dark:text-stone-100 block">Jugs</strong><p className="text-sm text-stone-600 dark:text-stone-400">Large & easy to hold. Your best friends.</p></div>
    <div className="p-3 bg-stone-200 dark:bg-stone-800 rounded-lg h-full flex flex-col justify-center"><strong className="text-stone-900 dark:text-stone-100 block">Crimps</strong><p className="text-sm text-stone-600 dark:text-stone-400">Small edges that demand finger strength.</p></div>
    <div className="p-3 bg-stone-200 dark:bg-stone-800 rounded-lg h-full flex flex-col justify-center"><strong className="text-stone-900 dark:text-stone-100 block">Slopers</strong><p className="text-sm text-stone-600 dark:text-stone-400">Round & sloping. Friction is everything.</p></div>
    <div className="p-3 bg-stone-200 dark:bg-stone-800 rounded-lg h-full flex flex-col justify-center"><strong className="text-stone-900 dark:text-stone-100 block">Pinches</strong><p className="text-sm text-stone-600 dark:text-stone-400">Squeezed with your thumb and fingers.</p></div>
    <div className="p-3 bg-stone-200 dark:bg-stone-800 rounded-lg h-full flex flex-col justify-center"><strong className="text-stone-900 dark:text-stone-100 block">Pockets</strong><p className="text-sm text-stone-600 dark:text-stone-400">Only fit a few fingers.</p></div>
    <div className="p-3 bg-stone-200 dark:bg-stone-800 rounded-lg h-full flex flex-col justify-center"><strong className="text-stone-900 dark:text-stone-100 block">Volumes</strong><p className="text-sm text-stone-600 dark:text-stone-400">Large structures that become part of the wall.</p></div>
</div>

#### 2. The Colors: Your Guide
<div className="flex items-center gap-4 p-4 my-4 bg-teal-50 dark:bg-teal-900/40 border-l-4 border-teal-500 rounded-r-lg">
    <Palette size={40} className="text-teal-600 dark:text-teal-400 flex-shrink-0" />
    <div>
        <h4 className="font-bold text-teal-800 dark:text-teal-200">One Boulder, One Color</h4>
        <p className="text-teal-700 dark:text-teal-300">Usually, all holds and footholds of one color belong to a single boulder. The difficulty is often shown by a tag at the start.</p>
    </div>
</div>

#### 3. The Route: Your Map
Every boulder has a defined start, an optional midpoint, and a clear end.

<div className="flex justify-center items-center my-6 p-4 bg-stone-200 dark:bg-stone-800 rounded-lg">
    <div className="flex items-center gap-2 md:gap-4">
        <div className="text-center">
            <p className="font-bold text-sm text-stone-800 dark:text-stone-200">START</p>
            <Map size={32} className="text-green-500" />
            <p className="text-xs text-stone-600 dark:text-stone-400">Often tagged</p>
        </div>
        <div className="flex-1 border-t-2 border-dashed border-stone-400 dark:border-stone-600"></div>
        <div className="text-center">
            <p className="font-bold text-sm text-stone-800 dark:text-stone-200">ZONE</p>
            <GitBranch size={32} className="text-blue-500" />
            <p className="text-xs text-stone-600 dark:text-stone-400">(Optional)</p>
        </div>
        <div className="flex-1 border-t-2 border-dashed border-stone-400 dark:border-stone-600"></div>
        <div className="text-center">
            <p className="font-bold text-sm text-stone-800 dark:text-stone-200">TOP</p>
            <Waypoints size={32} className="text-orange-500" />
            <p className="text-xs text-stone-600 dark:text-stone-400">Both hands</p>
        </div>
    </div>
</div>
    `,
    task: {
      title: "Practical Exercise: Decipher Your First Boulders",
      description: "Apply your new knowledge and learn to actively 'read' the boulders in your gym before you climb them.",
      checklist: [
        { text: "Find the difficulty scale chart in your gym. Memorize the easiest color.", checked: false },
        { text: "Choose a boulder of that color. Find the marked starting holds (usually two) and the final top hold.", checked: false },
        { text: "With your eyes, trace the most likely path from bottom to top. Which holds will you use? Where will you place your feet?", checked: false },
        { text: "Climb the boulder and compare your planned 'beta' (solution) with the actual movement. What felt different than you expected?", checked: false },
      ]
    },
    quiz: [
      {
        question: "What does the rule 'One Boulder, One Color' mean?",
        answer: "All holds and footholds of a single color belong together and form one route (a boulder)."
      },
      {
        question: "What are the three main points of a boulder in a gym?",
        answer: "A marked Start, an optional Zone hold, and a Top hold that must be held with both hands to finish."
      },
      {
        question: "What is the difference between a 'Jug' and a 'Sloper'?",
        answer: "A jug is a large, easy-to-grab hold. A sloper is round and sloping, requiring body tension and friction to hold."
      }
    ]
  }
};
