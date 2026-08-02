import { Zap, Trophy, Waves, Sparkles, TrendingUp, Monitor, Mountain } from 'lucide-react';

export const specialStyles = {
  title: { de: "Spezial-Stile & Disziplinen", en: "Special Styles & Disciplines" },
  description: { de: "Competition Climbing, Speed Climbing, Board Climbing, Highball, Deep Water Soloing und mehr.", en: "Competition climbing, speed climbing, board climbing, highball, deep water soloing, and more." },
  content: {
    de: `
### Spezial-Stile & Disziplinen: Die Vielfalt des Kletterns

Bouldern ist vielfältig! Neben dem klassischen Hallen- und Outdoor-Bouldern gibt es <strong>viele Spezial-Stile</strong>, die jeweils eigene Fähigkeiten, Ausrüstung und Mentalität erfordern.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Trophy className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Competition Climbing</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
        Wettkampf-Bouldern ist <strong>sehr dynamisch und athletisch</strong>. Große Volumes, kreative Moves, Koordination und Explosivität stehen im Fokus. Seit Tokyo 2020 ist Klettern olympisch!
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li>Boulder-Format: X Probleme, Y Minuten, Punkte für Tops/Zones</li>
        <li>Onsight oder Flash-Format</li>
        <li>Sehr athletisch und kreativ</li>
        <li>Lokale Comps bis Olympia</li>
      </ul>
    </div>
  </div>
</div>

---

### Board Climbing

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Monitor className="text-green-600 dark:text-green-400" size={24} />
    MoonBoard, Kilter, Tension Board
  </h3>
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Board Climbing nutzt <strong>standardisierte Wände</strong> mit festen Griff-Positionen und LED-Beleuchtung. Per App wählst du Boulder aus – die LEDs zeigen dir die Griffe.
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li><strong>Weltweite Community:</strong> Dieselben Boulder überall auf der Welt</li>
        <li><strong>Benchmark:</strong> Vergleiche dich mit Kletterern weltweit</li>
        <li><strong>Systematisches Training:</strong> Gezielt Schwächen trainieren</li>
        <li><strong>Sehr kraft-intensiv:</strong> Für Fortgeschrittene empfohlen</li>
      </ul>
    </div>
  </div>
</div>

---

### Weitere Stile

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Sparkles className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Spezial-Disziplinen</h4>
      <div className="space-y-3 mt-3">
        <div>
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Highball Bouldering:</strong> Sehr hohe Boulder (6-12m). Extremes Risiko, nur für Erfahrene. Mentale Stärke essentiell.</p>
        </div>
        <div>
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Deep Water Soloing (DWS):</strong> Klettern über Wasser, Fall ins Wasser. Mallorca, Thailand – einzigartiges Erlebnis!</p>
        </div>
        <div>
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Speed Climbing:</strong> Standardisierte 15m-Wand, so schnell wie möglich. Olympische Disziplin. Weltrekord: unter 5 Sekunden!</p>
        </div>
        <div>
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Ästhetik-Bouldern:</strong> Fokus auf Schönheit der Bewegung. Klassische Linien, elegante Moves. Font-Kultur.</p>
        </div>
      </div>
    </div>
  </div>
</div>

---

### Andere Kletter-Disziplinen

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Mountain className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Über Bouldern hinaus</h4>
      <div className="space-y-2 mt-2">
        <p className="text-sm text-purple-700 dark:text-purple-300"><strong>Sport Climbing:</strong> Seilklettern an Bohrhaken. Längere Routen, Ausdauer-fokussiert.</p>
        <p className="text-sm text-purple-700 dark:text-purple-300"><strong>Trad Climbing:</strong> Eigene Sicherungen legen. Abenteuer pur!</p>
        <p className="text-sm text-purple-700 dark:text-purple-300"><strong>Alpines Klettern:</strong> Berge besteigen mit Kletterpassagen. Die Königsdisziplin.</p>
        <p className="text-sm text-purple-700 dark:text-purple-300"><strong>Multi-Pitch:</strong> Mehrere Seillängen hintereinander. Ausdauer und Effizienz.</p>
      </div>
    </div>
  </div>
</div>

---

### Langfristige Kletter-Karriere

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Ein Leben lang klettern
  </h3>
  <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-2 list-disc list-inside">
    <li>Viele klettern bis 60+ Jahre!</li>
    <li>Fokus verschiebt sich: Kraft → Technik → Effizienz</li>
    <li>Verletzungen rehabilitieren, nicht ignorieren</li>
    <li>Balance: Bouldern als Hobby, nicht Obsession</li>
    <li><strong>"The best climber is the one having the most fun." – Alex Lowe</strong></li>
  </ul>
</div>

**Merke:** Klettern bietet unendliche Vielfalt. Entdecke verschiedene Stile und finde heraus, was dich am meisten begeistert!
    `,
    en: `
### Special Styles & Disciplines: The Diversity of Climbing

Bouldering is diverse! Besides classic gym and outdoor bouldering, there are <strong>many special styles</strong>, each requiring unique skills, equipment, and mindset.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Trophy className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Competition Climbing</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
        Competition bouldering is <strong>very dynamic and athletic</strong>. Large volumes, creative moves, coordination, and explosiveness are the focus. Since Tokyo 2020, climbing is an Olympic sport!
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li>Boulder format: X problems, Y minutes, points for tops/zones</li>
        <li>Onsight or flash format</li>
        <li>Very athletic and creative</li>
        <li>Local comps to Olympics</li>
      </ul>
    </div>
  </div>
</div>

---

### Board Climbing

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Monitor className="text-green-600 dark:text-green-400" size={24} />
    MoonBoard, Kilter, Tension Board
  </h3>
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        Board climbing uses <strong>standardized walls</strong> with fixed hold positions and LED lighting. Via app you select boulders – the LEDs show you the holds.
      </p>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li><strong>Worldwide community:</strong> Same boulders everywhere in the world</li>
        <li><strong>Benchmark:</strong> Compare yourself with climbers worldwide</li>
        <li><strong>Systematic training:</strong> Target weaknesses specifically</li>
        <li><strong>Very strength-intensive:</strong> Recommended for advanced climbers</li>
      </ul>
    </div>
  </div>
</div>

---

### More Styles

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Sparkles className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Special Disciplines</h4>
      <div className="space-y-3 mt-3">
        <div><p className="text-sm text-amber-700 dark:text-amber-300"><strong>Highball Bouldering:</strong> Very tall boulders (6-12m). Extreme risk, experienced only. Mental strength essential.</p></div>
        <div><p className="text-sm text-amber-700 dark:text-amber-300"><strong>Deep Water Soloing (DWS):</strong> Climbing over water, fall into water. Mallorca, Thailand – unique experience!</p></div>
        <div><p className="text-sm text-amber-700 dark:text-amber-300"><strong>Speed Climbing:</strong> Standardized 15m wall, as fast as possible. Olympic discipline. World record: under 5 seconds!</p></div>
        <div><p className="text-sm text-amber-700 dark:text-amber-300"><strong>Aesthetic Bouldering:</strong> Focus on beauty of movement. Classic lines, elegant moves. Font culture.</p></div>
      </div>
    </div>
  </div>
</div>

---

### Other Climbing Disciplines

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Mountain className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Beyond Bouldering</h4>
      <div className="space-y-2 mt-2">
        <p className="text-sm text-purple-700 dark:text-purple-300"><strong>Sport Climbing:</strong> Rope climbing on bolts. Longer routes, endurance-focused.</p>
        <p className="text-sm text-purple-700 dark:text-purple-300"><strong>Trad Climbing:</strong> Place your own protection. Pure adventure!</p>
        <p className="text-sm text-purple-700 dark:text-purple-300"><strong>Alpine Climbing:</strong> Climb mountains with climbing sections. The king discipline.</p>
        <p className="text-sm text-purple-700 dark:text-purple-300"><strong>Multi-Pitch:</strong> Multiple rope lengths in a row. Endurance and efficiency.</p>
      </div>
    </div>
  </div>
</div>

---

### Long-Term Climbing Career

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    A Lifetime of Climbing
  </h3>
  <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-2 list-disc list-inside">
    <li>Many climb until 60+ years!</li>
    <li>Focus shifts: Strength → Technique → Efficiency</li>
    <li>Rehabilitate injuries, don't ignore them</li>
    <li>Balance: Bouldering as hobby, not obsession</li>
    <li><strong>"The best climber is the one having the most fun." – Alex Lowe</strong></li>
  </ul>
</div>

**Remember:** Climbing offers infinite variety. Explore different styles and find what excites you most!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Spezial-Stile erkunden",
      description: "Erweitere deinen Horizont und probiere verschiedene Kletterstile.",
      checklist: [
        { text: "Probiere Board Climbing: Klettere 5 Boulder auf einem MoonBoard/Kilter Board in deiner Halle", checked: false },
        { text: "Informiere dich über einen lokalen Wettkampf und überlege, teilzunehmen", checked: false },
        { text: "Schau dir Competition-Climbing-Videos an (IFSC YouTube) und analysiere die Techniken", checked: false },
        { text: "Denke über deine langfristigen Kletterziele nach: Was begeistert dich am meisten?", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Explore Special Styles",
      description: "Expand your horizons and try different climbing styles.",
      checklist: [
        { text: "Try board climbing: Climb 5 boulders on a MoonBoard/Kilter Board in your gym", checked: false },
        { text: "Research a local competition and consider participating", checked: false },
        { text: "Watch competition climbing videos (IFSC YouTube) and analyze techniques", checked: false },
        { text: "Think about your long-term climbing goals: What excites you most?", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Was ist Board Climbing und warum ist es bei Fortgeschrittenen beliebt?", answer: "Board Climbing nutzt standardisierte Wände (MoonBoard, Kilter, Tension) mit festen Griffpositionen und LED-Beleuchtung. Per App wählt man Boulder aus. Es ist beliebt, weil man sich weltweit mit anderen vergleichen kann (Benchmark), gezielt Schwächen trainieren kann und die Boulder überall gleich sind. Es ist sehr kraft-intensiv und daher für Fortgeschrittene empfohlen." },
      { question: "Welche Kletter-Disziplinen gibt es neben Bouldern?", answer: "Sport Climbing: Seilklettern an Bohrhaken, längere Routen. Trad Climbing: Eigene Sicherungen legen, Abenteuer. Alpines Klettern: Berge mit Kletterpassagen, Königsdisziplin. Multi-Pitch: Mehrere Seillängen hintereinander. Speed Climbing: 15m-Standardwand so schnell wie möglich (olympisch). Deep Water Soloing: Über Wasser klettern." },
      { question: "Was ist das Wichtigste für eine langfristige Kletter-Karriere?", answer: "Verletzungen rehabilitieren statt ignorieren, den Fokus mit dem Alter von Kraft auf Technik und Effizienz verschieben, Balance zwischen Bouldern und dem restlichen Leben halten, verschiedene Stile erkunden und vor allem: Spaß haben! 'The best climber is the one having the most fun.' – Alex Lowe" }
    ],
    en: [
      { question: "What is board climbing and why is it popular among advanced climbers?", answer: "Board climbing uses standardized walls (MoonBoard, Kilter, Tension) with fixed hold positions and LED lighting. Via app you select boulders. It's popular because you can compare worldwide (benchmark), target weaknesses specifically, and boulders are the same everywhere. It's very strength-intensive and recommended for advanced climbers." },
      { question: "What climbing disciplines exist besides bouldering?", answer: "Sport Climbing: rope climbing on bolts, longer routes. Trad Climbing: place your own protection, adventure. Alpine Climbing: mountains with climbing sections, the king discipline. Multi-Pitch: multiple rope lengths in a row. Speed Climbing: 15m standard wall as fast as possible (Olympic). Deep Water Soloing: climbing over water." },
      { question: "What is most important for a long-term climbing career?", answer: "Rehabilitate injuries instead of ignoring them, shift focus from strength to technique and efficiency with age, maintain balance between bouldering and the rest of life, explore different styles, and above all: have fun! 'The best climber is the one having the most fun.' – Alex Lowe" }
    ]
  }
};
