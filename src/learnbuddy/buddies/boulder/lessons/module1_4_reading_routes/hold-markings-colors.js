import { Palette, Target, Eye, AlertCircle, Info, TrendingUp } from 'lucide-react';

export const holdMarkingsColors = {
  title: {
    de: "Griff-Markierungen & Farben",
    en: "Hold Markings & Colors"
  },
  description: {
    de: "Lerne, wie Boulder-Routen markiert sind: Farbsysteme, Start- und Top-Griffe, und wie du eine Route richtig identifizierst.",
    en: "Learn how boulder routes are marked: color systems, start and top holds, and how to correctly identify a route."
  },
  content: {
    de: `
### Die Sprache der Farben

Wenn du zum ersten Mal in eine Boulderhalle gehst, kann die Wand wie ein buntes Chaos aussehen. Aber jede Farbe hat eine Bedeutung – sie erzählt dir eine Geschichte über eine Route.

Lerne, diese Sprache zu lesen, und du wirst sofort wissen, welche Griffe zu welcher Route gehören, wo sie beginnt und wo sie endet.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Palette className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Das Grundprinzip</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        <strong>Alle Griffe derselben Farbe gehören zu derselben Route.</strong> Das ist die einfachste Regel, die du kennen musst. Wenn du einen roten Griff greifst, musst du nur rote Griffe verwenden, bis du den Top erreicht hast.
      </p>
    </div>
  </div>
</div>

---

### Farbsysteme in verschiedenen Hallen

Jede Halle hat ihr eigenes Farbsystem. Es gibt keine einheitliche Regelung, aber die meisten Hallen folgen ähnlichen Prinzipien.

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Häufige Farbsysteme</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">1. Schwierigkeitsbasiert</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        Viele Hallen verwenden Farben, um Schwierigkeitsgrade zu kennzeichnen:
      </p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li><strong>Grün/Gelb:</strong> Einfach (Anfänger)</li>
        <li><strong>Blau:</strong> Mittel</li>
        <li><strong>Rot:</strong> Schwer</li>
        <li><strong>Schwarz:</strong> Sehr schwer</li>
      </ul>
      <p className="text-sm text-amber-700 dark:text-amber-300 mt-2">
        <strong>Wichtig:</strong> Dies variiert von Halle zu Halle! Schau immer auf die Schilder oder frage das Personal.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">2. Nummeriert</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        Manche Hallen nummerieren ihre Routen und verwenden verschiedene Farben für verschiedene Sets:
      </p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>Jede Route hat eine Nummer</li>
        <li>Farben zeigen verschiedene Sets (z.B. Set 1, Set 2)</li>
        <li>Schwierigkeitsgrade werden separat angezeigt</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">3. Gemischt</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        Viele Hallen kombinieren beide Systeme: Farben für Sets, Nummern für Routen, und separate Schwierigkeitsgrade.
      </p>
    </div>
  </div>
</div>

**Wichtig:** Wenn du in eine neue Halle gehst, schaue dir immer zuerst die Schilder oder die Legende an. Jede Halle ist anders!

---

### Start-Griffe erkennen

Der Start ist der wichtigste Teil einer Route. Wenn du falsch startest, kletterst du die falsche Route.

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    Wie erkennst du den Start?
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">1. Doppelte Markierung</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Die häufigste Methode: Start-Griffe sind <strong>doppelt markiert</strong> oder haben ein <strong>besonderes Zeichen</strong>:
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Zwei Griffe derselben Farbe mit "START" oder "S" markiert</li>
        <li>Griffe mit einem Pfeil nach oben ↑</li>
        <li>Griffe mit einem Kreis oder einem besonderen Symbol</li>
        <li>Griffe, die größer oder anders aussehen</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">2. Position</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Start-Griffe sind normalerweise <strong>unten an der Wand</strong>, oft auf Augenhöhe oder etwas höher. Sie sind die ersten Griffe der Route.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">3. Schilder</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Viele Hallen haben <strong>Schilder</strong> neben oder über den Routen, die den Start zeigen. Schaue immer nach diesen Schildern!
      </p>
    </div>
  </div>
</div>

**Wichtig:** Wenn du unsicher bist, wo der Start ist, schaue dir die Route von unten an oder frage andere Kletterer. Es ist besser, einmal zu fragen, als die falsche Route zu klettern!

---

### Top-Griffe & Zonen

Der Top ist das Ziel – hier endet die Route. Aber nicht alle Routen haben einen einzelnen Top-Griff.

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">Top-Varianten</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-purple-200 dark:border-purple-700">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">1. Einzelner Top-Griff</h5>
      <p className="text-sm text-purple-700 dark:text-purple-300">
        Der einfachste Fall: Ein einzelner Griff ist als "TOP" markiert. Wenn du diesen Griff mit beiden Händen hältst, hast du die Route geschafft.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-purple-200 dark:border-purple-700">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">2. Top-Zone</h5>
      <p className="text-sm text-purple-700 dark:text-purple-300">
        Manche Routen haben eine <strong>Top-Zone</strong> – mehrere Griffe, die alle als Top gelten. Wenn du einen dieser Griffe mit beiden Händen hältst, hast du geschafft.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-purple-200 dark:border-purple-700">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">3. Top-Markierung</h5>
      <p className="text-sm text-purple-700 dark:text-purple-300">
        Top-Griffe sind oft mit <strong>"TOP"</strong>, <strong>"T"</strong> oder einem <strong>besonderen Symbol</strong> markiert. Schaue nach diesen Markierungen!
      </p>
    </div>
  </div>
</div>

**Wichtig:** In den meisten Hallen musst du den Top-Griff <strong>mit beiden Händen</strong> halten, um die Route als geschafft zu zählen. Ein Hand reicht nicht!

---

### "Feet follow" vs. markierte Tritte

Eine der häufigsten Fragen von Anfängern: "Welche Tritte darf ich benutzen?"

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">Die zwei Systeme</h4>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">"Feet follow"</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
        <strong>Du darfst ALLE Tritte benutzen</strong>, unabhängig von der Farbe. Die Tritte folgen den Griffen nicht.
      </p>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        Dies ist das häufigste System in modernen Hallen. Es macht das Klettern einfacher und flexibler.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Markierte Tritte</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
        <strong>Du darfst nur Tritte derselben Farbe benutzen</strong> wie die Griffe. Die Tritte sind genauso markiert wie die Griffe.
      </p>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        Dies ist seltener, aber manche Hallen verwenden es noch. Schaue immer auf die Schilder!
      </p>
    </div>
  </div>
</div>

**Wie findest du heraus, welches System verwendet wird?**

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
    <Info className="text-amber-600 dark:text-amber-400" size={24} />
    Tipps zum Erkennen
  </h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li><strong>Schilder lesen:</strong> Die meisten Hallen haben Schilder, die das System erklären</li>
    <li><strong>Andere beobachten:</strong> Schaue, welche Tritte andere Kletterer benutzen</li>
    <li><strong>Fragen:</strong> Wenn unsicher, frage das Personal oder andere Kletterer</li>
    <li><strong>Standard:</strong> Wenn nichts markiert ist, gilt meist "feet follow"</li>
  </ul>
</div>

---

### Volumes & Strukturen

Nicht alle Griffe sind gleich – manche sind Teil von größeren Strukturen.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">Was sind Volumes?</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
    <strong>Volumes</strong> sind große, dreidimensionale Strukturen an der Wand. Sie können Teil einer Route sein oder nicht.
  </p>
  
  <div className="space-y-3 mt-4">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-1">Volumes als Teil der Route</h5>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Wenn ein Volume die gleiche Farbe wie die Route hat oder markiert ist, darfst du es benutzen. Du kannst darauf treten, dich daran festhalten, oder es als Stütze nutzen.
      </p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-1">Volumes außerhalb der Route</h5>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Wenn ein Volume nicht markiert ist oder eine andere Farbe hat, darfst du es normalerweise <strong>nicht</strong> benutzen. Es gehört nicht zur Route.
      </p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-1">Wand-Strukturen</h5>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Die Wand selbst (ohne Griffe) darfst du normalerweise <strong>nicht</strong> benutzen. Nur markierte Griffe und Volumes gehören zur Route.
      </p>
    </div>
  </div>
</div>

**Wichtig:** Wenn du unsicher bist, ob ein Volume oder eine Struktur Teil der Route ist, schaue auf die Markierungen oder frage andere Kletterer.

---

### Häufige Fehler beim Lesen von Routen

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Was du vermeiden solltest</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">1. Farben mischen</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        Der häufigste Fehler: Griffe verschiedener Farben benutzen. Wenn du eine rote Route kletterst, benutze nur rote Griffe!
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">2. Falscher Start</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        Wenn du nicht beim richtigen Start beginnst, kletterst du die falsche Route. Nimm dir Zeit, den Start zu finden.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">3. Top nicht erreichen</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        Eine Route ist nur geschafft, wenn du den Top-Griff mit beiden Händen hältst. Nur fast dran sein reicht nicht!
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">4. Nicht nachfragen</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        Wenn du unsicher bist, frage! Es ist besser, einmal zu fragen, als die falsche Route zu klettern oder andere zu stören.
      </p>
    </div>
  </div>
</div>

---

### Zusammenfassung: Die wichtigsten Punkte

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Dein Route-Lese-Check
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Farbsystem verstehen:</strong> Alle Griffe derselben Farbe gehören zu derselben Route.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Start finden:</strong> Start-Griffe sind oft doppelt markiert oder haben ein besonderes Zeichen.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Top erreichen:</strong> Top-Griffe sind markiert – halte sie mit beiden Händen, um die Route zu schaffen.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Tritte verstehen:</strong> Meist "feet follow" (alle Tritte erlaubt), manchmal nur markierte Tritte.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Volumes beachten:</strong> Nur markierte Volumes gehören zur Route.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Bei Unsicherheit fragen:</strong> Schaue auf Schilder oder frage andere Kletterer.</span>
    </li>
  </ul>
</div>

**Denk daran:** Jede Halle ist anders. Wenn du in eine neue Halle gehst, nimm dir Zeit, das System zu verstehen. Es ist besser, langsam zu beginnen, als die falsche Route zu klettern!
    `,
    en: `
### The Language of Colors

When you first enter a bouldering gym, the wall can look like a colorful chaos. But every color has a meaning – it tells you a story about a route.

Learn to read this language, and you'll immediately know which holds belong to which route, where it starts, and where it ends.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Palette className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">The Basic Principle</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        <strong>All holds of the same color belong to the same route.</strong> That's the simplest rule you need to know. If you grab a red hold, you must only use red holds until you reach the top.
      </p>
    </div>
  </div>
</div>

---

### Color Systems in Different Gyms

Every gym has its own color system. There's no uniform regulation, but most gyms follow similar principles.

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Common Color Systems</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">1. Difficulty-Based</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        Many gyms use colors to mark difficulty levels:
      </p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li><strong>Green/Yellow:</strong> Easy (beginner)</li>
        <li><strong>Blue:</strong> Medium</li>
        <li><strong>Red:</strong> Hard</li>
        <li><strong>Black:</strong> Very hard</li>
      </ul>
      <p className="text-sm text-amber-700 dark:text-amber-300 mt-2">
        <strong>Important:</strong> This varies from gym to gym! Always look at the signs or ask staff.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">2. Numbered</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
        Some gyms number their routes and use different colors for different sets:
      </p>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>Each route has a number</li>
        <li>Colors show different sets (e.g., Set 1, Set 2)</li>
        <li>Difficulty levels are shown separately</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">3. Mixed</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        Many gyms combine both systems: colors for sets, numbers for routes, and separate difficulty levels.
      </p>
    </div>
  </div>
</div>

**Important:** When you go to a new gym, always look at the signs or legend first. Every gym is different!

---

### Recognizing Start Holds

The start is the most important part of a route. If you start wrong, you\'re climbing the wrong route.

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    How Do You Recognize the Start?
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">1. Double Marking</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        The most common method: Start holds are <strong>double-marked</strong> or have a <strong>special symbol</strong>:
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Two holds of the same color marked with "START" or "S"</li>
        <li>Holds with an upward arrow ↑</li>
        <li>Holds with a circle or special symbol</li>
        <li>Holds that are larger or look different</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">2. Position</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Start holds are usually <strong>at the bottom of the wall</strong>, often at eye level or slightly higher. They're the first holds of the route.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">3. Signs</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Many gyms have <strong>signs</strong> next to or above routes showing the start. Always look for these signs!
      </p>
    </div>
  </div>
</div>

**Important:** If you\'re unsure where the start is, look at the route from below or ask other climbers. It's better to ask once than to climb the wrong route!

---

### Top Holds & Zones

The top is the goal – that\'s where the route ends. But not all routes have a single top hold.

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">Top Variants</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-purple-200 dark:border-purple-700">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">1. Single Top Hold</h5>
      <p className="text-sm text-purple-700 dark:text-purple-300">
        The simplest case: A single hold is marked as "TOP". When you hold this hold with both hands, you've completed the route.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-purple-200 dark:border-purple-700">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">2. Top Zone</h5>
      <p className="text-sm text-purple-700 dark:text-purple-300">
        Some routes have a <strong>top zone</strong> – multiple holds that all count as top. When you hold one of these holds with both hands, you've completed it.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-purple-200 dark:border-purple-700">
      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">3. Top Marking</h5>
      <p className="text-sm text-purple-700 dark:text-purple-300">
        Top holds are often marked with <strong>"TOP"</strong>, <strong>"T"</strong>, or a <strong>special symbol</strong>. Look for these markings!
      </p>
    </div>
  </div>
</div>

**Important:** In most gyms, you must hold the top hold <strong>with both hands</strong> to count the route as completed. One hand isn\'t enough!

---

### "Feet Follow" vs. Marked Holds

One of the most common questions from beginners: "Which holds can I use?"

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">The Two Systems</h4>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">"Feet Follow"</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
        <strong>You can use ALL holds</strong>, regardless of color. The holds don\'t follow the grips.
      </p>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        This is the most common system in modern gyms. It makes climbing easier and more flexible.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-teal-200 dark:border-teal-700">
      <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Marked Holds</h5>
      <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
        <strong>You can only use holds of the same color</strong> as the grips. The holds are marked just like the grips.
      </p>
      <p className="text-sm text-teal-700 dark:text-teal-300">
        This is rarer, but some gyms still use it. Always look at the signs!
      </p>
    </div>
  </div>
</div>

**How do you find out which system is used?**

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
    <Info className="text-amber-600 dark:text-amber-400" size={24} />
    Tips for Recognition
  </h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li><strong>Read signs:</strong> Most gyms have signs explaining the system</li>
    <li><strong>Observe others:</strong> Watch which holds other climbers use</li>
    <li><strong>Ask:</strong> If unsure, ask staff or other climbers</li>
    <li><strong>Standard:</strong> If nothing is marked, "feet follow" usually applies</li>
  </ul>
</div>

---

### Volumes & Structures

Not all holds are the same – some are part of larger structures.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">What Are Volumes?</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
    <strong>Volumes</strong> are large, three-dimensional structures on the wall. They can be part of a route or not.
  </p>
  
  <div className="space-y-3 mt-4">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-1">Volumes as Part of Route</h5>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        If a volume has the same color as the route or is marked, you can use it. You can step on it, hold onto it, or use it as support.
      </p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-1">Volumes Outside Route</h5>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        If a volume isn\'t marked or has a different color, you usually <strong>cannot</strong> use it. It doesn't belong to the route.
      </p>
    </div>
    
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-1">Wall Structures</h5>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        The wall itself (without holds) you usually <strong>cannot</strong> use. Only marked holds and volumes belong to the route.
      </p>
    </div>
  </div>
</div>

**Important:** If you\'re unsure whether a volume or structure is part of the route, look at the markings or ask other climbers.

---

### Common Mistakes in Reading Routes

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ What You Should Avoid</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">1. Mixing Colors</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        The most common mistake: Using holds of different colors. If you\'re climbing a red route, only use red holds!
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">2. Wrong Start</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        If you don\'t start at the right start, you\'re climbing the wrong route. Take time to find the start.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">3. Not Reaching Top</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        A route is only completed when you hold the top hold with both hands. Just being almost there isn\'t enough!
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">4. Not Asking</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        If you\'re unsure, ask! It's better to ask once than to climb the wrong route or disturb others.
      </p>
    </div>
  </div>
</div>

---

### Summary: The Most Important Points

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Your Route Reading Checklist
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Understand color system:</strong> All holds of the same color belong to the same route.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Find start:</strong> Start holds are often double-marked or have a special symbol.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Reach top:</strong> Top holds are marked – hold them with both hands to complete the route.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Understand holds:</strong> Usually "feet follow" (all holds allowed), sometimes only marked holds.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Note volumes:</strong> Only marked volumes belong to the route.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Ask when unsure:</strong> Look at signs or ask other climbers.</span>
    </li>
  </ul>
</div>

**Remember:** Every gym is different. When you go to a new gym, take time to understand the system. It's better to start slowly than to climb the wrong route!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Routen lesen lernen",
      description: "Übe das Lesen von Routen in der Halle, um das Farbsystem zu verstehen.",
      checklist: [
        { text: "Gehe in eine Boulderhalle und schaue dir die Schilder an: Welches Farbsystem wird verwendet?", checked: false },
        { text: "Identifiziere 3 verschiedene Routen: Finde den Start, die Griffe und den Top jeder Route", checked: false },
        { text: "Finde heraus, ob 'feet follow' oder markierte Tritte verwendet werden: Schaue auf Schilder oder frage", checked: false },
        { text: "Beobachte andere Kletterer: Welche Griffe benutzen sie? Wo starten sie?", checked: false },
        { text: "Wichtig: Wenn du unsicher bist, frage andere Kletterer oder das Personal", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Learn to Read Routes",
      description: "Practice reading routes in the gym to understand the color system.",
      checklist: [
        { text: "Go to a bouldering gym and look at the signs: Which color system is used?", checked: false },
        { text: "Identify 3 different routes: Find the start, holds, and top of each route", checked: false },
        { text: "Find out if 'feet follow' or marked holds are used: Look at signs or ask", checked: false },
        { text: "Observe other climbers: Which holds do they use? Where do they start?", checked: false },
        { text: "Important: If you\'re unsure, ask other climbers or staff", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was ist das Grundprinzip der Griff-Markierungen?",
        answer: "Das Grundprinzip ist, dass alle Griffe derselben Farbe zu derselben Route gehören. Wenn du einen roten Griff greifst, musst du nur rote Griffe verwenden, bis du den Top erreicht hast."
      },
      {
        question: "Wie erkennst du den Start einer Route?",
        answer: "Start-Griffe sind oft doppelt markiert oder haben ein besonderes Zeichen (z.B. 'START', 'S', ein Pfeil nach oben). Sie befinden sich normalerweise unten an der Wand. Viele Hallen haben auch Schilder, die den Start zeigen."
      },
      {
        question: "Was bedeutet 'feet follow'?",
        answer: "'Feet follow' bedeutet, dass du alle Tritte benutzen darfst, unabhängig von der Farbe. Die Tritte folgen den Griffen nicht. Dies ist das häufigste System in modernen Hallen. Wenn nichts markiert ist, gilt meist 'feet follow'."
      }
    ],
    en: [
      {
        question: "What is the basic principle of hold markings?",
        answer: "The basic principle is that all holds of the same color belong to the same route. If you grab a red hold, you must only use red holds until you reach the top."
      },
      {
        question: "How do you recognize the start of a route?",
        answer: "Start holds are often double-marked or have a special symbol (e.g., 'START', 'S', an upward arrow). They're usually at the bottom of the wall. Many gyms also have signs showing the start."
      },
      {
        question: "What does 'feet follow' mean?",
        answer: "'Feet follow' means you can use all holds regardless of color. The holds don\'t follow the grips. This is the most common system in modern gyms. If nothing is marked, 'feet follow' usually applies."
      }
    ]
  }
};

