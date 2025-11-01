
import { Shell, VenetianMask } from 'lucide-react';

export const whatIsBouldering = {
  de: {
    title: "Was ist Bouldern?",
    description: "Eine Einführung in die Welt des Boulderns, die Unterschiede zwischen Halle und Fels und die grundlegende Philosophie.",
    content: `
### Klettern in Absprunghöhe

Bouldern ist Klettern ohne Seil und Gurt an Felsblöcken oder künstlichen Kletterwänden in einer Höhe, aus der das sichere Abspringen noch möglich ist. Dicke Weichbodenmatten (Crashpads) am Boden minimieren das Verletzungsrisiko.

<div className="flex justify-around my-4 p-4 bg-stone-200 dark:bg-stone-700 rounded-lg">
  <div className="text-center">
    <Shell size={52} className="text-stone-600 dark:text-stone-300 mx-auto" />
    <h4 className="font-bold mt-2">Bouldern am Fels</h4>
    <p className="text-sm">Der Ursprung: Problemlösung an echten Felsblöcken in der Natur.</p>
  </div>
  <div className="text-center">
    <VenetianMask size={52} className="text-stone-600 dark:text-stone-300 mx-auto" />
    <h4 className="font-bold mt-2">Bouldern in der Halle</h4>
    <p className="text-sm">Die moderne Form: Klettern an künstlichen Wänden mit definierten Routen (Bouldern).</p>
  </div>
</div>

### Mehr als nur Sport

Bouldern ist eine einzigartige Kombination aus körperlicher Herausforderung und mentalem Rätsel. Jede Route (ein "Boulder") ist ein kleines Problem, das es zu lösen gilt. Es geht nicht nur um Kraft, sondern vor allem um Technik, Kreativität und Bewegungsintelligenz.

**Die Philosophie:**
*   **Gemeinschaft:** Man bouldert oft zusammen, tüftelt gemeinsam an Lösungen und motiviert sich gegenseitig.
*   **Kreativität:** Es gibt selten nur einen richtigen Weg nach oben. Jeder Körper ist anders, daher sind auch die Lösungen individuell.
*   **Spielerischer Ansatz:** Bouldern hat einen sehr spielerischen Charakter. Es geht ums Ausprobieren, Scheitern und wieder Versuchen.
    `,
    task: {
      title: "Praktische Übung: Die Beobachter-Rolle",
      description: "Bevor du selbst startest, nimm dir Zeit, andere zu beobachten. Dies ist eine der schnellsten Arten zu lernen.",
      checklist: [
        { text: "Setz dich für 10 Minuten in einen Bereich der Halle, der dich interessiert.", checked: false },
        { text: "Beobachte, wie unterschiedliche Leute (groß, klein, männlich, weiblich) denselben Boulder klettern.", checked: false },
        { text: "Achte darauf, wie sie ihre Füße setzen. Wo schauen sie hin, bevor sie einen Zug machen?", checked: false },
        { text: "Höre zu, wie sich Boulderer gegenseitig Tipps geben ('Gib mehr Druck auf den linken Fuß!', 'Versuch mal einen Heel-Hook!').", checked: false },
        { text: "Versuche, die 'Sprache' der Griffe und Farben zu verstehen. Welche Farbe scheint einfach, welche schwer?", checked: false },
      ]
    }
  },
  en: {
    title: "What is Bouldering?",
    description: "An introduction to the world of bouldering, the differences between gym and rock, and the basic philosophy.",
    content: `
### Climbing at Jumping Height

Bouldering is climbing without a rope and harness on boulders or artificial climbing walls at a height from which it is still safe to jump off. Thick soft floor mats (crash pads) on the ground minimize the risk of injury.

<div className="flex justify-around my-4 p-4 bg-stone-200 dark:bg-stone-700 rounded-lg">
  <div className="text-center">
    <Shell size={52} className="text-stone-600 dark:text-stone-300 mx-auto" />
    <h4 className="font-bold mt-2">Bouldering on Rock</h4>
    <p className="text-sm">The origin: problem-solving on real boulders in nature.</p>
  </div>
  <div className="text-center">
    <VenetianMask size={52} className="text-stone-600 dark:text-stone-300 mx-auto" />
    <h4 className="font-bold mt-2">Bouldering in the Gym</h4>
    <p className="text-sm">The modern form: climbing on artificial walls with defined routes (boulders).</p>
  </div>
</div>

### More than just a Sport

Bouldering is a unique combination of physical challenge and mental puzzle. Each route (a "boulder") is a small problem to be solved. It's not just about strength, but above all about technique, creativity, and movement intelligence.

**The Philosophy:**
*   **Community:** People often boulder together, work on solutions together, and motivate each other.
*   **Creativity:** There is rarely only one right way to the top. Every body is different, so the solutions are also individual.
*   **Playful Approach:** Bouldering has a very playful character. It's about trying, failing, and trying again.
    `,
    task: {
      title: "Practical Exercise: The Observer Role",
      description: "Before you start yourself, take time to observe others. This is one of the fastest ways to learn.",
      checklist: [
        { text: "Sit for 10 minutes in an area of the gym that interests you.", checked: false },
        { text: "Observe how different people (tall, short, male, female) climb the same boulder.", checked: false },
        { text: "Pay attention to how they place their feet. Where do they look before making a move?", checked: false },
        { text: "Listen to how boulderers give each other tips ('Put more pressure on the left foot!', 'Try a heel-hook!').", checked: false },
        { text: "Try to understand the 'language' of the holds and colors. Which color seems easy, which one difficult?", checked: false },
      ]
    }
  }
};
