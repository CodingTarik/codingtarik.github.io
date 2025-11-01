
import { Shield, Users, ArrowDown, UserCheck, PersonStanding, MoveUp } from 'lucide-react';

export const safetyAndEtiquette = {
  de: {
    title: "Sicherheit: Deine Wichtigste Lektion",
    description: "Lerne die goldenen Regeln der Sicherheit und des Miteinanders, um Bouldern zu einer großartigen Erfahrung für alle zu machen.",
    content: `
### Deine Sicherheit ist Priorität #1

Bouldern hat ein geringes Verletzungsrisiko, wenn du ein paar einfache, aber entscheidende Regeln beachtest. Die wichtigste Fähigkeit, die du zuerst lernst, ist nicht das Klettern, sondern das Fallen.

#### Die Kunst des richtigen Fallens
Du wirst fallen – oft. Lerne, es sicher und kontrolliert zu tun.

<div className="my-6 p-4 bg-stone-200 dark:bg-stone-800 rounded-lg">
  <h4 className="font-bold text-lg text-stone-800 dark:text-stone-200 mb-3">So landest du sicher: Eine 3-Stufen-Anleitung</h4>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
    <div className="p-3 bg-white dark:bg-stone-700 rounded-md shadow">
      <PersonStanding size={40} className="mx-auto text-teal-500 mb-2"/>
      <p className="font-bold text-stone-900 dark:text-stone-100">1. Füße zuerst</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Lande immer auf beiden Füßen mit gebeugten Knien, um den Aufprall abzufedern.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-700 rounded-md shadow">
      <ArrowDown size={40} className="mx-auto text-teal-500 mb-2"/>
      <p className="font-bold text-stone-900 dark:text-stone-100">2. Abrollen</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Lass dich sofort nach hinten auf deinen Po und Rücken abrollen. Verteile die Energie.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-700 rounded-md shadow">
      <MoveUp size={40} className="mx-auto text-teal-500 mb-2"/>
      <p className="font-bold text-stone-900 dark:text-stone-100">3. Arme am Körper</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Versuche niemals, dich mit den Händen abzustützen. Halte sie nah am Körper.</p>
    </div>
  </div>
</div>

#### Die goldene Regel der Halle
<div className="flex items-center gap-4 p-4 my-4 bg-orange-100 dark:bg-orange-900/50 border-l-4 border-orange-500 rounded-r-lg">
    <UserCheck size={40} className="text-orange-600 dark:text-orange-400 flex-shrink-0" />
    <div>
        <h4 className="font-bold text-orange-800 dark:text-orange-200">Halte die Sturzzone frei!</h4>
        <p className="text-orange-700 dark:text-orange-300">Gehe oder sitze niemals direkt unter jemandem, der klettert. Gib anderen Raum – ihre Sicherheit könnte davon abhängen.</p>
    </div>
</div>


### Hallen-Etikette: Sei ein guter Boulder-Buddy

Eine gute Atmosphäre entsteht durch gegenseitigen Respekt. Hier sind die ungeschriebenen Gesetze:

*   <div className="flex items-start gap-3 my-3"><Users className="text-teal-500 mt-1" size={20} /><p><strong className="text-stone-800 dark:text-stone-200">Warte, bis du dran bist:</strong> Drängle dich nicht vor. Wer zuerst an der Wand stand, klettert auch zuerst.</p></div>
*   <div className="flex items-start gap-3 my-3"><Shield className="text-teal-500 mt-1" size={20} /><p><strong className="text-stone-800 dark:text-stone-200">Sei aufmerksam:</strong> Halte die Matten frei von Flaschen, Handys und Taschen. Schaue nach oben, bevor du läufst.</p></div>
    `,
    task: {
      title: "Praktische Sicherheitsübung: Dein erster kontrollierter Fall",
      description: "Bevor du deinen ersten richtigen Boulder kletterst, solltest du dich mit dem Gefühl des Fallens vertraut machen. Das baut Vertrauen in dich und die Matten auf.",
      checklist: [
        { text: "Klettere nur die ersten 2-3 Griffe einer leichten Route, sodass deine Füße knapp über der Matte schweben.", checked: false },
        { text: "Atme tief aus, lass bewusst los und konzentriere dich auf die 3-Stufen-Landung: Füße, Knie beugen, abrollen.", checked: false },
        { text: "Achte darauf, dass deine Arme nicht nach hinten gehen, um dich abzustützen.", checked: false },
        { text: "Wiederhole das 3-4 Mal, bis es sich natürlich und kontrolliert anfühlt.", checked: false },
      ]
    },
    quiz: [
      {
        question: "Was ist der wichtigste Grundsatz beim Fallen?",
        answer: "Immer auf beiden Füßen landen, in die Knie gehen und sofort nach hinten abrollen, um die Aufprallenergie zu verteilen."
      },
      {
        question: "Was ist die 'Sturzzone' und warum ist sie heilig?",
        answer: "Es ist der Bereich direkt unter einem Kletterer. Man darf sich dort niemals aufhalten, da der Kletternde jederzeit unerwartet fallen könnte."
      },
      {
        question: "Nenne zwei wichtige Regeln der Hallen-Etikette.",
        answer: "1. Warte, bis du an der Reihe bist und drängle dich nicht vor. 2. Halte die Matten frei von Gegenständen wie Flaschen oder Handys."
      }
    ]
  },
  en: {
    title: "Safety: Your Most Important Lesson",
    description: "Learn the golden rules of safety and etiquette to make bouldering a great experience for everyone.",
    content: `
### Your Safety is Priority #1

Bouldering has a low risk of injury if you follow a few simple but crucial rules. The most important skill you'll learn first is not how to climb, but how to fall.

#### The Art of Falling Correctly
You will fall—often. Learn to do it safely and with control.

<div className="my-6 p-4 bg-stone-200 dark:bg-stone-800 rounded-lg">
  <h4 className="font-bold text-lg text-stone-800 dark:text-stone-200 mb-3">How to Land Safely: A 3-Step Guide</h4>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
    <div className="p-3 bg-white dark:bg-stone-700 rounded-md shadow">
      <PersonStanding size={40} className="mx-auto text-teal-500 mb-2"/>
      <p className="font-bold text-stone-900 dark:text-stone-100">1. Feet First</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Always land on both feet with bent knees to absorb the impact.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-700 rounded-md shadow">
      <ArrowDown size={40} className="mx-auto text-teal-500 mb-2"/>
      <p className="font-bold text-stone-900 dark:text-stone-100">2. Roll Back</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Immediately roll backward onto your bottom and back. Distribute the energy.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-700 rounded-md shadow">
      <MoveUp size={40} className="mx-auto text-teal-500 mb-2"/>
      <p className="font-bold text-stone-900 dark:text-stone-100">3. Arms In</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Never try to catch yourself with your hands. Keep them close to your body.</p>
    </div>
  </div>
</div>

#### The Golden Rule of the Gym
<div className="flex items-center gap-4 p-4 my-4 bg-orange-100 dark:bg-orange-900/50 border-l-4 border-orange-500 rounded-r-lg">
    <UserCheck size={40} className="text-orange-600 dark:text-orange-400 flex-shrink-0" />
    <div>
        <h4 className="font-bold text-orange-800 dark:text-orange-200">Keep the Fall Zone Clear!</h4>
        <p className="text-orange-700 dark:text-orange-300">Never walk or sit directly under someone who is climbing. Give others space—their safety might depend on it.</p>
    </div>
</div>


### Gym Etiquette: Be a Good Boulder-Buddy

A great atmosphere is built on mutual respect. Here are the unwritten laws:

*   <div className="flex items-start gap-3 my-3"><Users className="text-teal-500 mt-1" size={20} /><p><strong className="text-stone-800 dark:text-stone-200">Wait your turn:</strong> Don't push in. Whoever was at the wall first, climbs first.</p></div>
*   <div className="flex items-start gap-3 my-3"><Shield className="text-teal-500 mt-1" size={20} /><p><strong className="text-stone-800 dark:text-stone-200">Be aware:</strong> Keep the mats clear of bottles, phones, and bags. Look up before you walk.</p></div>
    `,
    task: {
      title: "Practical Safety Drill: Your First Controlled Fall",
      description: "Before you climb your first real boulder, you should get comfortable with the feeling of falling. This builds trust in yourself and the mats.",
      checklist: [
        { text: "Climb only the first 2-3 holds of an easy route, so your feet are just above the mat.", checked: false },
        { text: "Exhale, let go intentionally, and focus on the 3-step landing: feet, bend knees, roll back.", checked: false },
        { text: "Make sure your arms don't go behind you to catch your fall.", checked: false },
        { text: "Repeat this 3-4 times until it feels natural and controlled.", checked: false },
      ]
    },
    quiz: [
      {
        question: "What is the most important principle when falling?",
        answer: "Always land on both feet, bend your knees, and immediately roll backward to distribute the impact energy."
      },
      {
        question: "What is the 'fall zone' and why is it sacred?",
        answer: "It's the area directly underneath a climber. You must never stay there, as the climber could fall unexpectedly at any moment."
      },
      {
        question: "Name two important rules of gym etiquette.",
        answer: "1. Wait for your turn and don't cut in line. 2. Keep the mats clear of items like bottles or phones."
      }
    ]
  }
};
