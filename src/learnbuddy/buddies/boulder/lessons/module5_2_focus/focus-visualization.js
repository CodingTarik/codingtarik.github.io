import { Brain, Eye, Wind, Target, TrendingUp, Sparkles, Focus } from 'lucide-react';

export const focusVisualization = {
  title: { de: "Fokus & Visualisierung", en: "Focus & Visualization" },
  description: { de: "Meditation, Route-Visualisierung, Atemtechniken und wie du in den Flow-State kommst.", en: "Meditation, route visualization, breathing techniques, and how to get into flow state." },
  content: {
    de: `
### Fokus & Visualisierung: Mentale Stärke entwickeln

Die besten Kletterer der Welt nutzen <strong>mentale Techniken</strong> genauso intensiv wie physisches Training. Visualisierung, Fokus und Atemtechniken können deine Performance dramatisch verbessern.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Brain className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Visualisierung: Klettern im Kopf</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        Wissenschaftlich belegt: Wenn du eine Bewegung im Kopf durchgehst, feuern <strong>dieselben Neuronen</strong> wie bei der echten Bewegung. Du trainierst dein Gehirn, ohne die Wand zu berühren!
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li>Schließe die Augen und stelle dir jeden Zug vor</li>
        <li>Spüre die Griffe, die Fußplatzierung, die Körperposition</li>
        <li>Visualisiere den ERFOLG – nicht das Scheitern</li>
        <li>Nutze es vor jedem Boulder-Versuch</li>
      </ul>
    </div>
  </div>
</div>

---

### Atemtechniken

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Wind className="text-green-600 dark:text-green-400" size={24} />
    Atmen gegen Stress
  </h3>
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">4-7-8 Atmung</h4>
      <p className="text-sm text-green-700 dark:text-green-300">4 Sek einatmen → 7 Sek halten → 8 Sek langsam ausatmen. 3-4 Zyklen. Senkt sofort den Puls und beruhigt das Nervensystem.</p>
    </div>
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Box Breathing</h4>
      <p className="text-sm text-green-700 dark:text-green-300">4 Sek einatmen → 4 Sek halten → 4 Sek ausatmen → 4 Sek halten. Einfach und effektiv zwischen den Versuchen.</p>
    </div>
  </div>
</div>

---

### Flow-State

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Sparkles className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Im Moment sein</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        Der Flow-State ist der Zustand völliger Konzentration, in dem alles mühelos fließt. Die Zeit scheint zu verschwinden und du bist nur noch im Moment.
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
        <li><strong>Herausforderung = Fähigkeit:</strong> Flow entsteht, wenn die Schwierigkeit zu deinem Können passt</li>
        <li><strong>Keine Ablenkungen:</strong> Handy weg, volle Konzentration auf den Boulder</li>
        <li><strong>Positiver Self-Talk:</strong> "Ich kann das" – nicht "Was wenn ich falle"</li>
        <li><strong>Routine:</strong> Fester Ablauf vor jedem Versuch (Chalken, Atmen, Visualisieren, Go!)</li>
      </ul>
    </div>
  </div>
</div>

### Positives Self-Talk

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Target className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Growth Mindset</h4>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
        <li>Statt "Ich kann das nicht" → "Ich kann das <strong>noch</strong> nicht"</li>
        <li>Statt "Ich bin schlecht" → "Ich bin am Lernen"</li>
        <li>Fehler = Lern-Chancen, nicht Versagen</li>
        <li>Fokus auf den Prozess, nicht das Ergebnis</li>
      </ul>
    </div>
  </div>
</div>

**Merke:** Dein stärkstes Werkzeug ist nicht dein Körper – es ist dein Geist. Trainiere ihn genauso wie deine Muskeln!
    `,
    en: `
### Focus & Visualization: Developing Mental Strength

The world's best climbers use <strong>mental techniques</strong> just as intensively as physical training. Visualization, focus, and breathing techniques can dramatically improve your performance.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Brain className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Visualization: Climbing in Your Mind</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        Scientifically proven: When you mentally go through a movement, <strong>the same neurons fire</strong> as during the actual movement. You train your brain without touching the wall!
      </p>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li>Close your eyes and visualize every move</li>
        <li>Feel the holds, the foot placement, the body position</li>
        <li>Visualize SUCCESS – not failure</li>
        <li>Use it before every boulder attempt</li>
      </ul>
    </div>
  </div>
</div>

---

### Breathing Techniques

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Wind className="text-green-600 dark:text-green-400" size={24} />
    Breathing Against Stress
  </h3>
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">4-7-8 Breathing</h4>
      <p className="text-sm text-green-700 dark:text-green-300">4 sec inhale → 7 sec hold → 8 sec slow exhale. 3-4 cycles. Immediately lowers heart rate and calms the nervous system.</p>
    </div>
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Box Breathing</h4>
      <p className="text-sm text-green-700 dark:text-green-300">4 sec inhale → 4 sec hold → 4 sec exhale → 4 sec hold. Simple and effective between attempts.</p>
    </div>
  </div>
</div>

---

### Flow State

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Sparkles className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Being in the Moment</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        Flow state is the state of total focus where everything flows effortlessly. Time seems to disappear and you're fully in the moment.
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
        <li><strong>Challenge = Skill:</strong> Flow happens when difficulty matches your ability</li>
        <li><strong>No distractions:</strong> Phone away, full focus on the boulder</li>
        <li><strong>Positive self-talk:</strong> "I can do this" – not "What if I fall"</li>
        <li><strong>Routine:</strong> Fixed sequence before each attempt (chalk, breathe, visualize, go!)</li>
      </ul>
    </div>
  </div>
</div>

### Positive Self-Talk

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Target className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Growth Mindset</h4>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
        <li>Instead of "I can't do this" → "I can't do this <strong>yet</strong>"</li>
        <li>Instead of "I'm bad" → "I'm learning"</li>
        <li>Mistakes = learning opportunities, not failures</li>
        <li>Focus on the process, not the result</li>
      </ul>
    </div>
  </div>
</div>

**Remember:** Your strongest tool isn't your body – it's your mind. Train it just like your muscles!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Fokus & Visualisierung",
      description: "Trainiere mentale Techniken für besseres Klettern.",
      checklist: [
        { text: "Visualisiere deinen nächsten Boulder komplett im Kopf, bevor du einsteigst", checked: false },
        { text: "Übe die 4-7-8 Atmung vor einem schweren Versuch", checked: false },
        { text: "Ersetze negativen Self-Talk durch positiven: 'Ich kann das noch nicht' statt 'Ich kann das nicht'", checked: false },
        { text: "Entwickle eine feste Pre-Climb-Routine: Chalken → Atmen → Visualisieren → Los!", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Focus & Visualization",
      description: "Train mental techniques for better climbing.",
      checklist: [
        { text: "Visualize your next boulder completely in your mind before starting", checked: false },
        { text: "Practice 4-7-8 breathing before a hard attempt", checked: false },
        { text: "Replace negative self-talk with positive: 'I can't do this yet' instead of 'I can't do this'", checked: false },
        { text: "Develop a fixed pre-climb routine: Chalk → Breathe → Visualize → Go!", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Warum funktioniert Visualisierung beim Klettern?", answer: "Visualisierung ist wissenschaftlich belegt: Wenn man eine Bewegung im Kopf durchgeht, feuern dieselben Neuronen wie bei der echten Bewegung. Das Gehirn wird trainiert, ohne den Körper zu belasten. Man kann Sequenzen, Timing und Körperpositionen mental üben und so die Performance verbessern." },
      { question: "Wie funktioniert die 4-7-8 Atemtechnik?", answer: "4 Sekunden einatmen durch die Nase, 7 Sekunden den Atem halten, 8 Sekunden langsam durch den Mund ausatmen. 3-4 Zyklen reichen. Diese Technik senkt sofort den Puls und beruhigt das Nervensystem. Ideal vor schweren Versuchen oder wenn Angst aufkommt." },
      { question: "Was ist ein Growth Mindset und warum ist es wichtig fürs Klettern?", answer: "Growth Mindset bedeutet zu glauben, dass Fähigkeiten durch Übung und Anstrengung wachsen. Statt 'Ich kann das nicht' denkt man 'Ich kann das NOCH nicht'. Fehler sind Lern-Chancen, nicht Versagen. Fürs Klettern ist das essentiell, weil man ständig scheitert und nur durch positive Einstellung und Durchhaltevermögen besser wird." }
    ],
    en: [
      { question: "Why does visualization work in climbing?", answer: "Visualization is scientifically proven: when you mentally go through a movement, the same neurons fire as during the actual movement. The brain is trained without stressing the body. You can mentally practice sequences, timing, and body positions to improve performance." },
      { question: "How does the 4-7-8 breathing technique work?", answer: "4 seconds inhale through nose, 7 seconds hold breath, 8 seconds slowly exhale through mouth. 3-4 cycles are enough. This technique immediately lowers heart rate and calms the nervous system. Ideal before hard attempts or when fear arises." },
      { question: "What is a growth mindset and why is it important for climbing?", answer: "Growth mindset means believing that abilities grow through practice and effort. Instead of 'I can't do this,' you think 'I can't do this YET.' Mistakes are learning opportunities, not failures. For climbing this is essential because you constantly fail and only improve through positive attitude and perseverance." }
    ]
  }
};
