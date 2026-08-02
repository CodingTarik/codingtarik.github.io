import { Calendar, BarChart3, Target, Clock, TrendingUp, BookOpen, Repeat } from 'lucide-react';

export const trainingPlanning = {
  title: { de: "Trainingsplanung", en: "Training Planning" },
  description: { de: "Periodisierung, Session-Struktur, Frequenz und wie du deinen Fortschritt misst.", en: "Periodization, session structure, frequency, and how to measure your progress." },
  content: {
    de: `
### Trainingsplanung für Kletterer

Ohne Plan trainierst du ziellos. Ein <strong>strukturierter Trainingsplan</strong> hilft dir, gezielt besser zu werden und Übertraining zu vermeiden.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Calendar className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Wie oft trainieren?</h4>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li><strong>Anfänger:</strong> 2-3x pro Woche (Sehnen brauchen Erholung!)</li>
        <li><strong>Fortgeschritten:</strong> 3-4x pro Woche</li>
        <li><strong>Profis:</strong> 5-6x (+ Ruhetage!)</li>
        <li>Mindestens 1-2 komplette Ruhetage pro Woche</li>
      </ul>
    </div>
  </div>
</div>

---

### Session-Typen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    Verschiedene Trainings-Sessions
  </h3>
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Technik-Session</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Leichte Boulder, Fokus auf saubere Ausführung. Drills, Fußtechnik, Silent Feet. Wenig Ermüdung, hohe Qualität.</p>
    </div>
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Limit-Session</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Boulder an deinem persönlichen Limit. Wenige Boulder, viele Versuche, lange Pausen. Maximum Kraft.</p>
    </div>
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Ausdauer-Session</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Viele Boulder unter deinem Limit, wenig Pause. 4x4s, Pyramids, Linked Boulders. Pump-Training.</p>
    </div>
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Projekt-Session</h4>
      <p className="text-sm text-green-700 dark:text-green-300">An einem schweren Boulder arbeiten. Einzelzüge üben, verbinden, senden.</p>
    </div>
  </div>
</div>

---

### Periodisierung

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Repeat className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">4+1 Regel</h4>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        <strong>4 Wochen Training → 1 Woche Deload</strong> (reduzierte Intensität). In der Deload-Woche kletterst du leichter und weniger – dein Körper regeneriert und adaptiert. Danach bist du oft stärker als zuvor!
      </p>
    </div>
  </div>
</div>

### Fortschritt messen

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <BarChart3 className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Nicht nur nach Grad messen!</h4>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
        <li>Wie fühlt sich der Boulder an? Kontrollierter als letzte Woche?</li>
        <li>Mehr Versuche ohne Pump?</li>
        <li>Sauberere Technik?</li>
        <li>Weniger Versuche für den gleichen Boulder?</li>
        <li>Trainingslog führen: Datum, Boulder, Gefühl (1-10), Besonderheiten</li>
      </ul>
    </div>
  </div>
</div>

**Merke:** Ein guter Plan schlägt zielloses Training. Variiere deine Sessions und gönne dir Pausen!
    `,
    en: `
### Training Planning for Climbers

Without a plan, you train aimlessly. A <strong>structured training plan</strong> helps you improve systematically and avoid overtraining.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Calendar className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">How Often to Train?</h4>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li><strong>Beginner:</strong> 2-3x per week (tendons need recovery!)</li>
        <li><strong>Intermediate:</strong> 3-4x per week</li>
        <li><strong>Advanced:</strong> 5-6x (+ rest days!)</li>
        <li>At least 1-2 complete rest days per week</li>
      </ul>
    </div>
  </div>
</div>

---

### Session Types

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    Different Training Sessions
  </h3>
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Technique Session</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Easy boulders, focus on clean execution. Drills, footwork, silent feet. Low fatigue, high quality.</p>
    </div>
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Limit Session</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Boulders at your personal limit. Few boulders, many attempts, long rests. Maximum strength.</p>
    </div>
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Endurance Session</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Many boulders below your limit, short rest. 4x4s, pyramids, linked boulders. Pump training.</p>
    </div>
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Project Session</h4>
      <p className="text-sm text-green-700 dark:text-green-300">Work on a hard boulder. Practice individual moves, link them, send.</p>
    </div>
  </div>
</div>

---

### Periodization

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Repeat className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">The 4+1 Rule</h4>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        <strong>4 weeks training → 1 week deload</strong> (reduced intensity). During deload week, climb easier and less – your body recovers and adapts. Afterwards, you're often stronger than before!
      </p>
    </div>
  </div>
</div>

### Measuring Progress

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <BarChart3 className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Don't Just Measure by Grade!</h4>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
        <li>How does the boulder feel? More controlled than last week?</li>
        <li>More attempts without pump?</li>
        <li>Cleaner technique?</li>
        <li>Fewer attempts for the same boulder?</li>
        <li>Keep a training log: date, boulders, feeling (1-10), notes</li>
      </ul>
    </div>
  </div>
</div>

**Remember:** A good plan beats aimless training. Vary your sessions and allow yourself rest!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Trainingsplanung",
      description: "Erstelle deinen persönlichen Trainingsplan.",
      checklist: [
        { text: "Erstelle einen Wochenplan mit 2-3 Sessions und mindestens 1 Ruhetag", checked: false },
        { text: "Plane verschiedene Session-Typen (Technik, Limit, Ausdauer)", checked: false },
        { text: "Starte ein Trainingslog (Datum, Boulder, Gefühl, Besonderheiten)", checked: false },
        { text: "Plane alle 4 Wochen eine Deload-Woche ein", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Training Planning",
      description: "Create your personal training plan.",
      checklist: [
        { text: "Create a weekly plan with 2-3 sessions and at least 1 rest day", checked: false },
        { text: "Plan different session types (technique, limit, endurance)", checked: false },
        { text: "Start a training log (date, boulders, feeling, notes)", checked: false },
        { text: "Plan a deload week every 4 weeks", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Was sind die vier Session-Typen beim Klettertraining?", answer: "1) Technik-Session: Leichte Boulder, Fokus auf saubere Ausführung. 2) Limit-Session: Boulder am persönlichen Limit, wenige Boulder, viele Versuche. 3) Ausdauer-Session: Viele Boulder unter dem Limit, wenig Pause (4x4s, Pyramids). 4) Projekt-Session: An einem schweren Boulder arbeiten, Einzelzüge üben und verbinden." },
      { question: "Was ist die 4+1 Periodisierung?", answer: "4 Wochen normales Training gefolgt von 1 Woche Deload mit reduzierter Intensität. In der Deload-Woche klettert man leichter und weniger. Der Körper regeneriert und adaptiert. Danach ist man oft stärker als zuvor. Diese Zyklen wiederholen sich." },
      { question: "Wie misst du deinen Fortschritt beim Klettern richtig?", answer: "Nicht nur nach Grad messen! Auch achten auf: Wie kontrolliert fühlt sich der Boulder an, gibt es mehr Versuche ohne Pump, ist die Technik sauberer, braucht man weniger Versuche für den gleichen Boulder. Ein Trainingslog mit Datum, Bouldern, Gefühl (1-10) und Besonderheiten hilft, Muster und Fortschritt zu erkennen." }
    ],
    en: [
      { question: "What are the four session types in climbing training?", answer: "1) Technique session: Easy boulders, focus on clean execution. 2) Limit session: Boulders at personal limit, few boulders, many attempts. 3) Endurance session: Many boulders below limit, short rest (4x4s, pyramids). 4) Project session: Work on a hard boulder, practice individual moves and link them." },
      { question: "What is the 4+1 periodization?", answer: "4 weeks of normal training followed by 1 week of deload with reduced intensity. During deload week, climb easier and less. The body recovers and adapts. Afterwards, you're often stronger than before. These cycles repeat." },
      { question: "How do you properly measure your climbing progress?", answer: "Don't just measure by grade! Also notice: How controlled does the boulder feel, are there more attempts without pump, is technique cleaner, do you need fewer attempts for the same boulder. A training log with date, boulders, feeling (1-10), and notes helps recognize patterns and progress." }
    ]
  }
};
