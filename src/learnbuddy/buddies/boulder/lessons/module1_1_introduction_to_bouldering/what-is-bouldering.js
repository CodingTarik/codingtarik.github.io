
import { Shell, VenetianMask, BrainCircuit, HeartPulse, Users, Zap, Leaf, ShieldCheck, Scroll, Scale, Mountain, Target, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { InteractiveWelcome } from '../../../../shared/components/InteractiveWelcome';

export const whatIsBouldering = {
  title: {
    de: "Willkommen in der Welt des Boulderns",
    en: "Welcome to the World of Bouldering"
  },
  description: {
    de: "Tauche tief ein in die Welt des Boulderns: ein Puzzle, ein Workout, eine Gemeinschaft und ein Weg zur Selbstentdeckung.",
    en: "Dive deep into the world of bouldering: a puzzle, a workout, a community, and a path to self-discovery."
  },
  content: {
    de: `
<InteractiveWelcome language="de" />

### Hey, wie schön, dass du hier bist!

Den ersten und wichtigsten Schritt hast du bereits gemacht: Du bist neugierig. Willkommen in einer der faszinierendsten Sportarten der Welt, die so viel mehr ist als nur das Klettern an einer Wand. Es ist eine Lebenseinstellung.

#### Was ist Bouldern im Kern?

Stell dir einen Spielplatz für Erwachsene vor, der dich körperlich und geistig herausfordert. Kein Seil, kein Gurt, nur du und ein kreatives Bewegungsproblem. Das ist die Essenz des Boulderns.

**Bouldern ist Klettern in seiner reinsten Form: kurz, intensiv und kreativ.** Du kletterst in einer sicheren Absprunghöhe, geschützt durch dicke Matten am Boden.

Jeder "Boulder" ist ein einzigartiges Rätsel. Es ist eine Mischung aus Turnen, Schach und purem Spieltrieb, die dich in einen Zustand des "Flows" versetzen kann, in dem die Welt um dich herum für einen Moment verschwindet.

<div className="flex items-start gap-4 p-4 my-6 bg-stone-100 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <Scroll size={48} className="text-orange-500 flex-shrink-0 mt-1" />
    <div>
        <h4 className="font-bold text-stone-800 dark:text-stone-200">Eine kurze Geschichte</h4>
        <p className="text-sm text-stone-600 dark:text-stone-400">Bouldern entstand als Trainingsform für Alpinisten in den Wäldern von Fontainebleau, Frankreich. Kletterer übten an Felsblöcken, um für große Wände zu trainieren. Schnell erkannten sie, dass diese "Probleme" eine eigene, faszinierende Disziplin waren. Was als Training begann, wurde zu einer globalen Bewegung.</p>
    </div>
</div>

#### Bouldern vs. Seilklettern
<div className="flex items-start gap-4 p-4 my-6 bg-stone-100 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <Scale size={48} className="text-teal-500 flex-shrink-0 mt-1" />
    <div>
        <h4 className="font-bold text-stone-800 dark:text-stone-200">Der Hauptunterschied</h4>
        <p className="text-sm text-stone-600 dark:text-stone-400">Beim Seilklettern geht es um Ausdauer und Höhe, gesichert durch ein Seil. Bouldern ist wie ein Sprint: maximale Kraft und Kreativität für wenige, intensive Züge. Die geringe Höhe und die Matten machen es zugänglicher und sozialer, da man sich gegenseitig vom Boden aus helfen kann.</p>
    </div>
</div>


### Die Philosophie: Mehr als nur Sport

Bouldern hat eine einzigartige Kultur, die auf Zusammenarbeit und persönlichem Fortschritt basiert.

*   **Kollaboratives Problemlösen:** Anstatt gegeneinander anzutreten, arbeitet man oft zusammen, um einen Boulder zu knacken. Man teilt "Beta" (Lösungen), feuert sich gegenseitig an und feiert die Erfolge der anderen.
*   **Fortschritt ist persönlich:** Es geht nicht darum, besser zu sein als andere, sondern darum, heute besser zu sein als gestern. Jeder Körper ist anders, daher ist auch jede Lösung individuell.
*   **Die Kunst des Scheiterns:** Du wirst öfter fallen als stehen. Bouldern lehrt dich, Scheitern nicht als Niederlage, sondern als wichtigen Teil des Lernprozesses zu sehen. Jeder Fall ist eine Information für den nächsten Versuch.

<div className="flex items-start gap-4 p-4 my-6 bg-stone-100 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <Users size={48} className="text-purple-500 flex-shrink-0 mt-1" />
    <div>
        <h4 className="font-bold text-stone-800 dark:text-stone-200">Eine globale Community</h4>
        <p className="text-sm text-stone-600 dark:text-stone-400">Vom ersten Tag an bist du Teil einer weltweiten Gemeinschaft. Ob in der Halle, am Fels oder online (auf Instagram, YouTube oder Reddit), du wirst feststellen, dass Bouldernde eine offene, hilfsbereite und vielfältige Gruppe sind, die ihre Leidenschaft gerne teilt.</p>
    </div>
</div>

### Die gesundheitlichen Vorteile (Körper & Geist)

Bouldern ist Meditation in Bewegung und eines der umfassendsten Workouts überhaupt.

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="p-4 bg-teal-50 dark:bg-teal-900/40 rounded-lg">
    <div className="flex items-center gap-3 mb-2">
      <HeartPulse className="text-teal-600 dark:text-teal-400" size={24} />
      <h5 className="font-bold text-teal-800 dark:text-teal-200">Physische Vorteile</h5>
    </div>
    <ul className="list-disc pl-5 space-y-1 text-sm text-teal-700 dark:text-teal-300">
      <li><strong>Funktionale Kraft:</strong> Du baust Kraft im ganzen Körper auf, die du auch im Alltag nutzen kannst.</li>
      <li><strong>Dynamische Balance:</strong> Du schulst dein Körperbewusstsein und deine Fähigkeit, in instabilen Positionen die Kontrolle zu behalten.</li>
      <li><strong>Verbesserte Beweglichkeit:</strong> Komplexe Bewegungen und hohe Tritte verbessern deine Flexibilität auf natürliche Weise.</li>
      <li><strong>Starker Rumpf:</strong> Du lernst, deinen Core zu aktivieren und deinen ganzen Körper als eine Einheit zu bewegen.</li>
    </ul>
  </div>
  <div className="p-4 bg-orange-50 dark:bg-orange-900/40 rounded-lg">
    <div className="flex items-center gap-3 mb-2">
      <BrainCircuit className="text-orange-600 dark:text-orange-400" size={24} />
      <h5 className="font-bold text-orange-800 dark:text-orange-200">Mentale Vorteile</h5>
    </div>
    <ul className="list-disc pl-5 space-y-1 text-sm text-orange-700 dark:text-orange-300">
      <li><strong>Kreative Problemlösung:</strong> Du wirst zum kreativen Denker, der ständig neue Lösungswege für physische Rätsel findet.</li>
      <li><strong>Fokus & Achtsamkeit:</strong> An der Wand zählt nur der nächste Griff. Du lernst, im Hier und Jetzt zu sein.</li>
      <li><strong>Resilienz:</strong> Scheitern ist Teil des Prozesses. Du lernst, Frustration zu überwinden und es immer wieder zu versuchen.</li>
      <li><strong>Selbstvertrauen:</strong> Einen Boulder zu schaffen, der unmöglich schien, ist ein unglaublicher Vertrauens-Booster.</li>
    </ul>
  </div>
</div>

### Deine erste Session: Ein kleiner Leitfaden

Der erste Schritt in eine Halle kann einschüchternd wirken, aber keine Sorge, es ist einfacher als du denkst.

**Die Atmosphäre:** Du wirst eine offene und hilfsbereite Umgebung vorfinden. Niemand wird dich verurteilen – jeder hat mal angefangen und freut sich über neue Gesichter.

**Die Ausrüstung:** Bequeme Sportkleidung genügt. Kletterschuhe kannst du dir in jeder Halle leihen.

**Die ersten Züge:** Suche die einfachsten Routen. Klettere ohne Druck, spiele herum und entdecke, wie sich die Bewegungen anfühlen. Es geht nicht darum, nach oben zu kommen, sondern darum, ein Gefühl für die Wand und deinen Körper zu entwickeln.
    `,
    en: `
<InteractiveWelcome language="en" />

### Hey, so glad you\'re here!

You've already taken the first and most important step: you\'re curious. Welcome to one of the most fascinating sports in the world, which is so much more than just climbing a wall. It's a mindset.

#### What is Bouldering at its Core?

Imagine an adult's playground that challenges you physically and mentally. No rope, no harness, just you and a creative movement problem. That is the essence of bouldering.

**Bouldering is climbing in its purest form: short, intense, and creative.** You climb at a safe jumping height, protected by thick mats on the floor.

Every "boulder" is a unique puzzle. It's a mix of gymnastics, chess, and pure playful instinct that can put you in a state of "flow" where the world around you momentarily disappears.

<div className="flex items-start gap-4 p-4 my-6 bg-stone-100 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <Scroll size={48} className="text-orange-500 flex-shrink-0 mt-1" />
    <div>
        <h4 className="font-bold text-stone-800 dark:text-stone-200">A Brief History</h4>
        <p className="text-sm text-stone-600 dark:text-stone-400">Bouldering originated as a form of training for mountaineers in the forests of Fontainebleau, France. Climbers practiced on boulders to train for big walls. They soon realized these "problems" were a fascinating discipline in their own right. What started as training became a global movement.</p>
    </div>
</div>

#### Bouldering vs. Rope Climbing
<div className="flex items-start gap-4 p-4 my-6 bg-stone-100 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <Scale size={48} className="text-teal-500 flex-shrink-0 mt-1" />
    <div>
        <h4 className="font-bold text-stone-800 dark:text-stone-200">The Main Difference</h4>
        <p className="text-sm text-stone-600 dark:text-stone-400">Rope climbing is about endurance and height, protected by a rope. Bouldering is like a sprint: maximum power and creativity for a few intense moves. The low height and mats make it more accessible and social, as people can help each other from the ground.</p>
    </div>
</div>

### The Philosophy: More Than Just a Sport

Bouldering has a unique culture based on collaboration and personal progress.

*   **Collaborative Problem-Solving:** Instead of competing against each other, climbers often work together to crack a boulder. They share "beta" (solutions), cheer each other on, and celebrate each other's successes.
*   **Progress is Personal:** It's not about being better than others, but about being better today than you were yesterday. Every body is different, so every solution is individual.
*   **The Art of Failure:** You will fall more than you will send. Bouldering teaches you to see failure not as a defeat, but as a vital part of the learning process. Every fall is information for the next attempt.

<div className="flex items-start gap-4 p-4 my-6 bg-stone-100 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
    <Users size={48} className="text-purple-500 flex-shrink-0 mt-1" />
    <div>
        <h4 className="font-bold text-stone-800 dark:text-stone-200">A Global Community</h4>
        <p className="text-sm text-stone-600 dark:text-stone-400">From day one, you are part of a worldwide community. Whether in the gym, at the crag, or online (on Instagram, YouTube, or Reddit), you'll find that boulderers are an open, helpful, and diverse group happy to share their passion.</p>
    </div>
</div>

### The Health Benefits (Body & Mind)

Bouldering is meditation in motion and one of the most comprehensive workouts there is.

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="p-4 bg-teal-50 dark:bg-teal-900/40 rounded-lg">
    <div className="flex items-center gap-3 mb-2">
      <HeartPulse className="text-teal-600 dark:text-teal-400" size={24} />
      <h5 className="font-bold text-teal-800 dark:text-teal-200">Physical Benefits</h5>
    </div>
    <ul className="list-disc pl-5 space-y-1 text-sm text-teal-700 dark:text-teal-300">
      <li><strong>Functional Strength:</strong> You'll build full-body strength that you can use in everyday life.</li>
      <li><strong>Dynamic Balance:</strong> You'll train your body awareness and your ability to maintain control in unstable positions.</li>
      <li><strong>Improved Mobility:</strong> Complex movements and high steps naturally improve your flexibility.</li>
      <li><strong>Strong Core:</strong> You learn to activate your core and move your entire body as one unit.</li>
    </ul>
  </div>
  <div className="p-4 bg-orange-50 dark:bg-orange-900/40 rounded-lg">
    <div className="flex items-center gap-3 mb-2">
      <BrainCircuit className="text-orange-600 dark:text-orange-400" size={24} />
      <h5 className="font-bold text-orange-800 dark:text-orange-200">Mental Benefits</h5>
    </div>
    <ul className="list-disc pl-5 space-y-1 text-sm text-orange-700 dark:text-orange-300">
      <li><strong>Creative Problem-Solving:</strong> You become a creative thinker, constantly finding new solutions for physical puzzles.</li>
      <li><strong>Focus & Mindfulness:</strong> On the wall, only the next move matters. You learn to be in the here and now.</li>
      <li><strong>Resilience:</strong> Failure is part of the process. You learn to overcome frustration and try again and again.</li>
      <li><strong>Self-Confidence:</strong> Sending a boulder that seemed impossible is an incredible confidence booster.</li>
    </ul>
  </div>
</div>

### Your First Session: A Quick Guide

The first step into a gym can seem intimidating, but don\'t worry, it\'s easier than you think.

**The Atmosphere:** You'll find an open and supportive environment. No one will judge you—everyone started once and is happy to see new faces.

**The Gear:** Comfortable sportswear is all you need. You can rent climbing shoes at any gym.

**The First Moves:** Look for the easiest routes. Climb without pressure, play around, and discover how the movements feel. It's not about getting to the top, but about developing a feel for the wall and your body.
    `
  },
  task: {
    de: {
      title: "Deine erste Mission: Werde zum Beobachter",
      description: "Der schnellste Weg, Bouldern zu lernen, ist, zuzusehen. Nimm dir bei deinem ersten Hallenbesuch bewusst Zeit, die Kultur und die Bewegungen aufzusaugen.",
      checklist: [
        { text: "Finde einen gemütlichen Platz und beobachte 10 Minuten lang das Geschehen. Was fällt dir auf?", checked: false },
        { text: "Achte darauf, wie erfahrene Kletterer vor einem Boulder stehen und die Griffe 'lesen', bevor sie einsteigen.", checked: false },
        { text: "Höre auf die Gespräche. Du wirst schnell feststellen, wie hilfsbereit die Community ist und wie offen über 'Beta' (Lösungen) gesprochen wird.", checked: false },
        { text: "Beobachte, wie unterschiedlich große Menschen dieselbe Route klettern. Du wirst sehen: Es gibt nicht den EINEN richtigen Weg!", checked: false },
      ]
    },
    en: {
      title: "Your First Mission: Become an Observer",
      description: "The fastest way to learn bouldering is to watch. During your first visit to the gym, consciously take the time to absorb the culture and the movements.",
      checklist: [
        { text: "Find a comfortable spot and watch for 10 minutes. What do you notice?", checked: false },
        { text: "Pay attention to how experienced climbers stand in front of a boulder and 'read' the holds before they start.", checked: false },
        { text: "Listen to the conversations. You'll quickly realize how supportive the community is and how openly they discuss 'beta' (solutions).", checked: false },
        { text: "Observe how people of different heights climb the same route. You'll see: there isn\'t just ONE right way!", checked: false },
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was ist der Hauptunterschied zwischen Bouldern und Seilklettern?",
        answer: "Bouldern findet in geringer Höhe ohne Seil statt und ist auf kurze, intensive Probleme fokussiert. Seilklettern überwindet größere Höhen mit Seilsicherung."
      },
      {
        question: "Welche drei Aspekte macht Bouldern zu einem einzigartigen Sport?",
        answer: "Die Kombination aus Ganzkörper-Workout (physisch), mentalem Puzzle (kreativ) und einer starken Gemeinschaft (sozial)."
      },
      {
        question: "Was bedeutet 'Beta' in der Boulder-Community?",
        answer: "'Beta' ist die Information oder die Lösungssequenz für einen Boulder. Beta zu teilen ist ein üblicher und geschätzter Teil der Community."
      }
    ],
    en: [
      {
        question: "What is the main difference between bouldering and rope climbing?",
        answer: "Bouldering takes place at low heights without a rope and focuses on short, intense problems. Rope climbing covers greater heights with rope protection."
      },
      {
        question: "What three aspects make bouldering a unique sport?",
        answer: "The combination of a full-body workout (physical), a mental puzzle (creative), and a strong community (social)."
      },
      {
        question: "What does 'beta' mean in the bouldering community?",
        answer: "'Beta' is the information or the solution sequence for a boulder. Sharing beta is a common and valued part of the community."
      }
    ]
  }
};
