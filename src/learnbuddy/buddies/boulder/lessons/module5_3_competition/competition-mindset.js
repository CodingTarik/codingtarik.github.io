import { Trophy, Brain, Users, Timer, TrendingUp, Flame, Target } from 'lucide-react';

export const competitionMindset = {
  title: { de: "Wettkampf-Mentalität", en: "Competition Mindset" },
  description: { de: "Wettkampfvorbereitung, Umgang mit Druck, Nervosität nutzen und Frustration/Plateaus meistern.", en: "Competition preparation, handling pressure, using nervousness, and mastering frustration/plateaus." },
  content: {
    de: `
### Wettkampf-Mentalität: Druck in Stärke verwandeln

Wettkämpfe sind nicht nur für Profis! Auch als Anfänger kannst du an <strong>lokalen Comps</strong> teilnehmen. Sie sind eine großartige Möglichkeit, dich zu pushen, die Community zu treffen und Spaß zu haben.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Trophy className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Warum an Comps teilnehmen?</h4>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li>Motivation & klare Ziele</li>
        <li>Community treffen und Gleichgesinnte finden</li>
        <li>Spaß haben – keine Profi-Ambitionen nötig!</li>
        <li>Unter Druck klettern lernen</li>
        <li>Den eigenen Fortschritt messen</li>
      </ul>
    </div>
  </div>
</div>

---

### Nervosität nutzen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Flame className="text-green-600 dark:text-green-400" size={24} />
    Nervosität ist Energie!
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-4">
    Nervosität und Aufregung aktivieren <strong>dieselben Hormone</strong> (Adrenalin, Cortisol). Der Unterschied ist nur die Interpretation. Sage dir: <strong>"Ich bin aufgeregt!"</strong> statt "Ich bin nervös!"
  </p>
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Vorbereitung</h4>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Länger aufwärmen als normal (Nervosität verbraucht Energie)</li>
        <li>Gute Ernährung & Hydration am Wettkampftag</li>
        <li>Feste Routine: Aufwärmen → Atmen → Visualisieren</li>
        <li>Musik? Manche ja, manche nein – kenne dich selbst</li>
      </ul>
    </div>
  </div>
</div>

---

### Frustration & Plateaus meistern

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Brain className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Der Boulder, der nicht geht</h4>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>Strategie 1: Pause.</strong> Morgen oder nächste Woche nochmal versuchen</li>
        <li><strong>Strategie 2: Beta ändern.</strong> Neue Sequenz, andere Körperposition</li>
        <li><strong>Strategie 3: Akzeptieren.</strong> Nicht jeder Boulder ist für jeden machbar</li>
        <li><strong>Plateaus sind normal!</strong> Jeder hat sie. Fokus auf Prozess, nicht Ergebnis</li>
        <li><strong>Vergleiche dich nicht</strong> – jeder hat andere Stärken und Vorgeschichte</li>
      </ul>
    </div>
  </div>
</div>

### Druck-Management

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Target className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Unter Druck performen</h4>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
        <li><strong>Fokus auf den Prozess:</strong> "Nächster Griff" statt "Ich muss gewinnen"</li>
        <li><strong>Kontrolliere das Kontrollierbare:</strong> Deine Vorbereitung, dein Atmen, dein Fokus</li>
        <li><strong>Akzeptiere das Unkontrollierbare:</strong> Boulder-Auswahl, andere Teilnehmer, Bedingungen</li>
        <li><strong>Spaß-Fokus:</strong> Das wichtigste Ziel ist, Spaß zu haben!</li>
      </ul>
    </div>
  </div>
</div>

**Merke:** "The best climber is the one having the most fun." – Alex Lowe
    `,
    en: `
### Competition Mindset: Turning Pressure into Strength

Competitions aren't just for pros! Even as a beginner, you can participate in <strong>local comps</strong>. They're a great way to push yourself, meet the community, and have fun.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Trophy className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Why Participate in Comps?</h4>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li>Motivation & clear goals</li>
        <li>Meet the community and find like-minded people</li>
        <li>Have fun – no pro ambitions needed!</li>
        <li>Learn to climb under pressure</li>
        <li>Measure your own progress</li>
      </ul>
    </div>
  </div>
</div>

---

### Using Nervousness

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Flame className="text-green-600 dark:text-green-400" size={24} />
    Nervousness is Energy!
  </h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-4">
    Nervousness and excitement activate the <strong>same hormones</strong> (adrenaline, cortisol). The only difference is interpretation. Tell yourself: <strong>"I'm excited!"</strong> instead of "I'm nervous!"
  </p>
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Preparation</h4>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
        <li>Warm up longer than normal (nervousness burns energy)</li>
        <li>Good nutrition & hydration on competition day</li>
        <li>Fixed routine: Warm up → Breathe → Visualize</li>
        <li>Music? Some yes, some no – know yourself</li>
      </ul>
    </div>
  </div>
</div>

---

### Mastering Frustration & Plateaus

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Brain className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">The Boulder That Won't Go</h4>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>Strategy 1: Take a break.</strong> Try again tomorrow or next week</li>
        <li><strong>Strategy 2: Change beta.</strong> New sequence, different body position</li>
        <li><strong>Strategy 3: Accept.</strong> Not every boulder is doable for everyone</li>
        <li><strong>Plateaus are normal!</strong> Everyone has them. Focus on process, not outcome</li>
        <li><strong>Don't compare yourself</strong> – everyone has different strengths and backgrounds</li>
      </ul>
    </div>
  </div>
</div>

### Pressure Management

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Target className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Performing Under Pressure</h4>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
        <li><strong>Focus on process:</strong> "Next hold" instead of "I need to win"</li>
        <li><strong>Control the controllable:</strong> Your preparation, breathing, focus</li>
        <li><strong>Accept the uncontrollable:</strong> Boulder selection, other participants, conditions</li>
        <li><strong>Fun focus:</strong> The most important goal is to have fun!</li>
      </ul>
    </div>
  </div>
</div>

**Remember:** "The best climber is the one having the most fun." – Alex Lowe
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Wettkampf-Mentalität",
      description: "Baue mentale Stärke für Wettkämpfe und schwere Boulder auf.",
      checklist: [
        { text: "Melde dich für einen lokalen Comp an (auch als Anfänger!)", checked: false },
        { text: "Übe Nervosität als 'Aufregung' umzudeuten: 'Ich bin aufgeregt!' statt 'Ich bin nervös!'", checked: false },
        { text: "Entwickle eine Pre-Climb-Routine und nutze sie bei jedem schweren Boulder", checked: false },
        { text: "Akzeptiere: Plateaus sind normal. Fokus auf den Prozess, nicht das Ergebnis", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Competition Mindset",
      description: "Build mental strength for competitions and hard boulders.",
      checklist: [
        { text: "Sign up for a local comp (even as a beginner!)", checked: false },
        { text: "Practice reframing nervousness as excitement: 'I'm excited!' instead of 'I'm nervous!'", checked: false },
        { text: "Develop a pre-climb routine and use it for every hard boulder", checked: false },
        { text: "Accept: Plateaus are normal. Focus on the process, not the outcome", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Warum solltest du auch als Anfänger an Wettkämpfen teilnehmen?", answer: "Wettkämpfe bieten Motivation und klare Ziele, man trifft die Community und Gleichgesinnte, lernt unter Druck zu klettern und kann den eigenen Fortschritt messen. Man braucht keine Profi-Ambitionen – das wichtigste Ziel ist Spaß. Lokale Comps sind oft sehr anfängerfreundlich." },
      { question: "Wie kannst du Nervosität in Stärke verwandeln?", answer: "Nervosität und Aufregung aktivieren dieselben Hormone (Adrenalin, Cortisol). Der Unterschied ist nur die Interpretation. Man sagt sich 'Ich bin aufgeregt!' statt 'Ich bin nervös!'. Zusätzlich hilft: Länger aufwärmen, gute Ernährung, feste Routine (Aufwärmen → Atmen → Visualisieren) und Spaß-Fokus." },
      { question: "Wie gehst du mit einem Boulder um, der einfach nicht geht?", answer: "Drei Strategien: 1) Pause machen – morgen oder nächste Woche nochmal versuchen, oft kommt der Durchbruch nach Erholung. 2) Beta ändern – neue Sequenz, andere Körperposition ausprobieren. 3) Akzeptieren – nicht jeder Boulder ist für jeden machbar. Plateaus sind normal, Fokus auf Prozess statt Ergebnis, und nie sich mit anderen vergleichen." }
    ],
    en: [
      { question: "Why should you participate in competitions even as a beginner?", answer: "Competitions offer motivation and clear goals, you meet the community and like-minded people, learn to climb under pressure, and can measure your progress. No pro ambitions needed – the most important goal is fun. Local comps are often very beginner-friendly." },
      { question: "How can you turn nervousness into strength?", answer: "Nervousness and excitement activate the same hormones (adrenaline, cortisol). The only difference is interpretation. Tell yourself 'I'm excited!' instead of 'I'm nervous!'. Additionally: warm up longer, good nutrition, fixed routine (warm up → breathe → visualize) and fun focus." },
      { question: "How do you deal with a boulder that just won't go?", answer: "Three strategies: 1) Take a break – try again tomorrow or next week, breakthroughs often come after recovery. 2) Change beta – try new sequence, different body position. 3) Accept – not every boulder is doable for everyone. Plateaus are normal, focus on process not outcome, and never compare yourself with others." }
    ]
  }
};
