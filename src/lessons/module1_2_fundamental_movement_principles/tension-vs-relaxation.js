
import { Zap, Feather } from 'lucide-react';

export const tensionVsRelaxation = {
  de: {
    title: "Spannung vs. Entspannung",
    description: "Der Wechsel zwischen maximaler Körperspannung und bewusster Entspannung ist der Schlüssel zu kraftsparendem Klettern.",
    content: `
### Der Rhythmus des Kletterns

Effizientes Bouldern ist kein Dauerzustand maximaler Anspannung. Es ist ein dynamischer Tanz zwischen Anspannung in schweren Zügen und Entspannung in Ruhepositionen.

**Körperspannung (Anspannen):**

*   **Wann?** In dem Moment, in dem du dich von einem Griff zum nächsten bewegst, besonders bei überhängenden oder weiten Zügen.
*   **Was?** Dein gesamter Rumpf (Bauch-, Rücken- und Gesäßmuskulatur) ist aktiviert. Deine Füße pressen aktiv gegen die Tritte. Dein Körper ist eine straffe Feder.
*   **Ziel:** Stabilität erzeugen, Kraft effizient übertragen und ein "Durchsacken" des Körpers verhindern.

**Entspannung:**

*   **Wann?** Sobald du einen Griff stabil hältst und eine Ruheposition gefunden hast (z.B. am langen Arm hängend).
*   **Was?** Atme tief durch. Schüttle die Hand aus, die nicht am Greifen ist. Entspanne deine Schultern und deinen Nacken.
*   **Ziel:** Milchsäure abbauen, Energie für den nächsten schweren Zug sammeln.

**Visualisierung:**
<div className="flex justify-around my-4">
  <div className="text-center">
    <Zap size={64} className="text-orange-500 mx-auto" />
    <p>Anspannung im Zug</p>
  </div>
  <div className="text-center">
    <Feather size={64} className="text-teal-500 mx-auto" />
    <p>Entspannung in der Ruheposition</p>
  </div>
</div>

    `,
    task: {
      title: "Praktische Übung: Atmen & Schütteln",
      description: "Diese Übung trainiert das bewusste Entspannen während des Kletterns.",
      checklist: [
        { text: "Klettere einen sehr einfachen Boulder.", checked: false },
        { text: "Halte nach jedem einzelnen Zug für 5 Sekunden inne.", checked: false },
        { text: "In dieser Pause, atme einmal tief ein und aus.", checked: false },
        { text: "Lasse den Arm, den du gerade nicht bewegt hast, bewusst locker hängen ('langer Arm').", checked: false },
        { text: "Wenn möglich, schüttle die freie Hand kurz aus, bevor du weiterkletterst.", checked: false },
      ]
    }
  },
  en: {
    title: "Tension vs. Relaxation",
    description: "Alternating between maximum body tension and conscious relaxation is the key to energy-efficient climbing.",
    content: `
### The Rhythm of Climbing

Efficient bouldering is not a constant state of maximum tension. It is a dynamic dance between tension during difficult moves and relaxation in rest positions.

**Body Tension (Tensing):**

*   **When?** The moment you move from one hold to the next, especially on overhanging or long moves.
*   **What?** Your entire core (abs, back, and glutes) is activated. Your feet are actively pressing against the holds. Your body is a tight spring.
*   **Goal:** Create stability, transfer power efficiently, and prevent the body from 'sagging'.

**Relaxation:**

*   **When?** As soon as you are holding a grip stably and have found a rest position (e.g., hanging on a straight arm).
*   **What?** Take a deep breath. Shake out the hand that is not gripping. Relax your shoulders and neck.
*   **Goal:** Break down lactic acid, gather energy for the next difficult move.

**Visualization:**
<div className="flex justify-around my-4">
  <div className="text-center">
    <Zap size={64} className="text-orange-500 mx-auto" />
    <p>Tension in the move</p>
  </div>
  <div className="text-center">
    <Feather size={64} className="text-teal-500 mx-auto" />
    <p>Relaxation in the rest position</p>
  </div>
</div>

    `,
    task: {
      title: "Practical Exercise: Breathe & Shake",
      description: "This exercise trains conscious relaxation while climbing.",
      checklist: [
        { text: "Climb a very easy boulder.", checked: false },
        { text: "Pause for 5 seconds after every single move.", checked: false },
        { text: "During this pause, take one deep breath in and out.", checked: false },
        { text: "Consciously let the arm you just didn't move hang loosely ('straight arm').", checked: false },
        { text: "If possible, shake out the free hand briefly before continuing to climb.", checked: false },
      ]
    }
  }
};
