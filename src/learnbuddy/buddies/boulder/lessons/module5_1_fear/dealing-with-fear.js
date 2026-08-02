import { ShieldAlert, Brain, Heart, TrendingUp, AlertTriangle, Target, ArrowDown } from 'lucide-react';

export const dealingWithFear = {
  title: { de: "Angst & Sturztraining", en: "Fear & Fall Practice" },
  description: { de: "Höhenangst überwinden, Sturzangst abbauen, Falltechnik üben und mentale Blockaden lösen.", en: "Overcome height fear, reduce fear of falling, practice fall technique, and resolve mental blocks." },
  content: {
    de: `
### Angst & Sturztraining: Dein größter Gegner bist du selbst

Angst beim Klettern ist <strong>normal und gesund</strong> – sie schützt dich vor riskanten Situationen. Aber wenn Angst dich <strong>blockiert</strong> und am Klettern hindert, musst du aktiv daran arbeiten.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <ShieldAlert className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Drei Arten von Angst beim Klettern</h4>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2 list-disc list-inside">
        <li><strong>Höhenangst:</strong> Auch 4 Meter können Angst auslösen! Progressive Desensibilisierung hilft.</li>
        <li><strong>Sturzangst:</strong> Die Angst vor dem Fallen. Lösung: Kontrolliertes Fallen üben!</li>
        <li><strong>Versagensangst:</strong> "Alle schauen zu!" Realität: Die Community ist supportive.</li>
      </ul>
    </div>
  </div>
</div>

---

### Sturztraining

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <ArrowDown className="text-green-600 dark:text-green-400" size={24} />
    Kontrolliert Fallen lernen
  </h3>
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Schritt 1: Niedriges Abspringen</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Springe aus 50cm Höhe kontrolliert ab. Lande auf beiden Füßen, Knie gebeugt. Wiederhole 10x.</p>
    </div>
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Schritt 2: Höhe steigern</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Steigere auf 1m, 1.5m, 2m. Bei jeder Höhe übe kontrolliertes Landen und Abrollen.</p>
    </div>
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Schritt 3: Bewusstes Loslassen</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Am wichtigsten: Übe, <strong>bewusst loszulassen</strong> statt einfach abzurutschen. Das gibt dir Kontrolle über den Sturz.</p>
    </div>
  </div>
</div>

---

### Progressive Desensibilisierung

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Brain className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Langsam Vertrauen aufbauen</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        Angst verschwindet nicht über Nacht. Aber durch <strong>regelmäßige, kontrollierte Exposition</strong> wird sie kleiner.
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
        <li>Klettere regelmäßig bis zur Höhe, wo Angst beginnt</li>
        <li>Halte dort an, atme tief, bleibe 30 Sekunden</li>
        <li>Nächste Session: Einen Zug weiter</li>
        <li>Feiere jeden Fortschritt!</li>
        <li>Nie dich selbst zwingen – Stress verschlimmert Angst</li>
      </ul>
    </div>
  </div>
</div>

---

### Mentale Strategien

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Heart className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Was hilft gegen Angst?</h4>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
        <li><strong>Atemtechnik:</strong> 4 Sek einatmen, 7 Sek halten, 8 Sek ausatmen</li>
        <li><strong>Positives Self-Talk:</strong> "Ich kann das" statt "Ich schaff das nie"</li>
        <li><strong>Fokus auf Prozess:</strong> Nächster Griff, nicht "wie hoch bin ich"</li>
        <li><strong>Growth Mindset:</strong> Fallen = Lernen, nicht Versagen</li>
        <li><strong>Community:</strong> Klettere mit unterstützenden Menschen</li>
      </ul>
    </div>
  </div>
</div>

**Merke:** Profis fallen mehr als Anfänger – weil sie es wagen, an ihr Limit zu gehen. Fallen gehört zum Klettern!
    `,
    en: `
### Fear & Fall Practice: Your Biggest Opponent is Yourself

Fear while climbing is <strong>normal and healthy</strong> – it protects you from risky situations. But when fear <strong>blocks</strong> you and prevents climbing, you need to actively work on it.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <ShieldAlert className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Three Types of Climbing Fear</h4>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2 list-disc list-inside">
        <li><strong>Height fear:</strong> Even 4 meters can trigger fear! Progressive desensitization helps.</li>
        <li><strong>Fear of falling:</strong> The fear of the fall itself. Solution: Practice controlled falling!</li>
        <li><strong>Fear of failure:</strong> "Everyone's watching!" Reality: The community is supportive.</li>
      </ul>
    </div>
  </div>
</div>

---

### Fall Practice

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <ArrowDown className="text-green-600 dark:text-green-400" size={24} />
    Learning to Fall Controlled
  </h3>
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Step 1: Low Jumping</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Jump from 50cm height in a controlled manner. Land on both feet, knees bent. Repeat 10x.</p>
    </div>
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Step 2: Increase Height</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Increase to 1m, 1.5m, 2m. At each height, practice controlled landing and rolling.</p>
    </div>
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Step 3: Conscious Letting Go</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Most important: Practice <strong>consciously letting go</strong> instead of just slipping off. This gives you control over the fall.</p>
    </div>
  </div>
</div>

---

### Progressive Desensitization

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Brain className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Slowly Building Trust</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
        Fear doesn't disappear overnight. But through <strong>regular, controlled exposure</strong>, it gets smaller.
      </p>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
        <li>Regularly climb to the height where fear begins</li>
        <li>Stop there, breathe deeply, stay 30 seconds</li>
        <li>Next session: One move further</li>
        <li>Celebrate every progress!</li>
        <li>Never force yourself – stress worsens fear</li>
      </ul>
    </div>
  </div>
</div>

---

### Mental Strategies

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Heart className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">What Helps Against Fear?</h4>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
        <li><strong>Breathing technique:</strong> 4 sec inhale, 7 sec hold, 8 sec exhale</li>
        <li><strong>Positive self-talk:</strong> "I can do this" instead of "I'll never make it"</li>
        <li><strong>Focus on process:</strong> Next hold, not "how high am I"</li>
        <li><strong>Growth mindset:</strong> Falling = learning, not failing</li>
        <li><strong>Community:</strong> Climb with supportive people</li>
      </ul>
    </div>
  </div>
</div>

**Remember:** Pros fall more than beginners – because they dare to push their limits. Falling is part of climbing!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Sturztraining",
      description: "Übe kontrolliertes Fallen und baue deine Sturzangst ab.",
      checklist: [
        { text: "Sturztraining: Springe 10x aus niedriger Höhe kontrolliert ab", checked: false },
        { text: "Steigere langsam die Höhe und übe bewusstes Loslassen", checked: false },
        { text: "Atemübung: Übe die 4-7-8 Atmung wenn du Angst spürst", checked: false },
        { text: "Klettere bis zu deiner Angst-Grenze, halte an, atme, dann einen Zug weiter", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Fall Practice",
      description: "Practice controlled falling and reduce your fear of falling.",
      checklist: [
        { text: "Fall practice: Jump 10x from low height in controlled manner", checked: false },
        { text: "Gradually increase height and practice conscious letting go", checked: false },
        { text: "Breathing exercise: Practice 4-7-8 breathing when you feel fear", checked: false },
        { text: "Climb to your fear threshold, stop, breathe, then one more move", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Was sind die drei Arten von Angst beim Klettern?", answer: "1) Höhenangst: Auch geringe Höhen können Angst auslösen, progressive Desensibilisierung hilft. 2) Sturzangst: Die Angst vor dem Fallen selbst, wird durch kontrolliertes Sturztraining reduziert. 3) Versagensangst: Die Angst, dass andere zuschauen und urteilen – die Kletter-Community ist aber sehr unterstützend." },
      { question: "Wie funktioniert progressive Desensibilisierung?", answer: "Man exponiert sich regelmäßig und kontrolliert der Angst-Situation: Bis zur Angst-Grenze klettern, anhalten, tief atmen, 30 Sekunden bleiben. Nächste Session: Einen Zug weiter. Wichtig: Nie sich selbst zwingen, jeden Fortschritt feiern. Mit der Zeit wird die Angst kleiner, weil das Gehirn lernt, dass die Situation sicher ist." },
      { question: "Warum ist bewusstes Loslassen beim Sturztraining so wichtig?", answer: "Bewusstes Loslassen gibt Kontrolle über den Sturz. Statt unkontrolliert abzurutschen, entscheidest du, wann du fällst. Das trainiert das Vertrauen in die eigene Fähigkeit, sicher zu landen. Es reduziert die Angst, weil du lernst, dass Fallen kontrollierbar und sicher sein kann, wenn du die richtige Technik nutzt." }
    ],
    en: [
      { question: "What are the three types of climbing fear?", answer: "1) Height fear: Even low heights can trigger fear, progressive desensitization helps. 2) Fear of falling: The fear of the fall itself, reduced through controlled fall practice. 3) Fear of failure: The fear that others are watching and judging – but the climbing community is very supportive." },
      { question: "How does progressive desensitization work?", answer: "You expose yourself regularly and controlled to the fear situation: Climb to the fear threshold, stop, breathe deeply, stay 30 seconds. Next session: One move further. Important: Never force yourself, celebrate every progress. Over time, fear diminishes because the brain learns the situation is safe." },
      { question: "Why is conscious letting go so important in fall practice?", answer: "Conscious letting go gives control over the fall. Instead of slipping off uncontrolled, you decide when to fall. This trains trust in your ability to land safely. It reduces fear because you learn that falling can be controlled and safe when using proper technique." }
    ]
  }
};
