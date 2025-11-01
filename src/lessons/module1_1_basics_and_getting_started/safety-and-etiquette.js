
import { Shield, Users, ArrowDown } from 'lucide-react';

export const safetyAndEtiquette = {
  de: {
    title: "Sicherheit & Hallen-Etikette",
    description: "Die wichtigsten Regeln für ein sicheres und faires Miteinander in der Boulderhalle.",
    content: `
### Deine Sicherheit zuerst

Bouldern ist sicher, solange man einige Grundregeln beachtet. Deine Gesundheit ist das Wichtigste.

**1. Richtig Fallen:**
Das A und O beim Bouldern. Du wirst fallen, also lerne, es richtig zu tun.
*   **Abspringen, nicht abklettern:** Wenn du merkst, dass du einen Boulder nicht schaffst, versuche kontrolliert abzuspringen, anstatt bis zur Erschöpfung weiterzumachen.
*   **Landung:** Lande immer auf beiden Füßen, gehe dabei in die Knie und rolle dann sanft auf deinen Hintern/Rücken ab. Lass dich von der Matte "auffangen".
*   **Arme:** Halte deine Arme nah am Körper, um zu vermeiden, dass du dich mit einem ausgestreckten Arm abzustützen versuchst.

<div className="flex justify-center my-4">
  <ArrowDown size={64} className="text-teal-500" />
</div>

**2. Sturzraum freihalten:**
Gehe oder sitze niemals direkt unter jemandem, der gerade klettert. Halte immer ausreichend Abstand. Der Bereich unter einem Boulderer ist seine "Sturzzone".

### Faires Miteinander (Etikette)

Eine Boulderhalle ist ein sozialer Ort. Mit ein paar einfachen Verhaltensregeln tragen alle zu einer guten Atmosphäre bei.

<div className="flex justify-around my-4 p-4 bg-stone-200 dark:bg-stone-700 rounded-lg">
  <div className="text-center">
    <Users size={52} className="text-stone-600 dark:text-stone-300 mx-auto" />
    <h4 className="font-bold mt-2">Rücksicht nehmen</h4>
    <p className="text-sm">Drängle dich nicht vor. Warte, bis der Boulderer vor dir fertig ist. Normalerweise gilt: Wer zuerst an der Wand stand, klettert auch zuerst.</p>
  </div>
  <div className="text-center">
    <Shield size={52} className="text-stone-600 dark:text-stone-300 mx-auto" />
    <h4 className="font-bold mt-2">Aufmerksamkeit</h4>
    <p className="text-sm">Laufe nicht gedankenlos durch die Halle. Achte auf kletternde Personen über dir und um dich herum.</p>
  </div>
</div>
    `,
    task: {
      title: "Praktische Übung: Fall-Training",
      description: "Übe das richtige Fallen aus geringer Höhe, um ein Gefühl für die Bewegung und die Matte zu bekommen.",
      checklist: [
        { text: "Stelle dich auf die Matte. Springe ein paar Mal locker auf der Stelle, um ein Gefühl für die Federung zu bekommen.", checked: false },
        { text: "Klettere nur 2-3 Griffe nach oben, sodass deine Füße knapp über dem Boden sind.", checked: false },
        { text: "Lass los und lande bewusst auf beiden Füßen.", checked: false },
        { text: "Federn die Landung mit den Knien ab und rolle sofort sanft nach hinten auf deinen Po ab.", checked: false },
        { text: "Wiederhole dies 5 Mal, bis sich die Bewegung flüssig und kontrolliert anfühlt.", checked: false },
      ]
    }
  },
  en: {
    title: "Safety & Gym Etiquette",
    description: "The most important rules for a safe and fair experience in the bouldering gym.",
    content: `
### Your Safety First

Bouldering is safe as long as you follow a few basic rules. Your health is the most important thing.

**1. Falling Correctly:**
The be-all and end-all of bouldering. You will fall, so learn to do it correctly.
*   **Jump off, don't climb down:** When you realize you can't finish a boulder, try to jump off in a controlled manner instead of continuing to exhaustion.
*   **Landing:** Always land on both feet, bending your knees, and then gently roll onto your butt/back. Let the mat "catch" you.
*   **Arms:** Keep your arms close to your body to avoid trying to break your fall with an outstretched arm.

<div className="flex justify-center my-4">
  <ArrowDown size={64} className="text-teal-500" />
</div>

**2. Keep the Fall Zone Clear:**
Never walk or sit directly under someone who is climbing. Always keep a safe distance. The area under a boulderer is their "fall zone".

### Fair Play (Etiquette)

A bouldering gym is a social place. With a few simple rules of conduct, everyone contributes to a good atmosphere.

<div className="flex justify-around my-4 p-4 bg-stone-200 dark:bg-stone-700 rounded-lg">
  <div className="text-center">
    <Users size={52} className="text-stone-600 dark:text-stone-300 mx-auto" />
    <h4 className="font-bold mt-2">Be Considerate</h4>
    <p className="text-sm">Don't cut in line. Wait until the boulderer in front of you is finished. Usually, the rule is: whoever was at the wall first, climbs first.</p>
  </div>
  <div className="text-center">
    <Shield size={52} className="text-stone-600 dark:text-stone-300 mx-auto" />
    <h4 className="font-bold mt-2">Be Aware</h4>
    <p className="text-sm">Don't walk thoughtlessly through the gym. Pay attention to people climbing above and around you.</p>
  </div>
</div>
    `,
    task: {
      title: "Practical Exercise: Fall Practice",
      description: "Practice falling correctly from a low height to get a feel for the movement and the mat.",
      checklist: [
        { text: "Stand on the mat. Jump lightly on the spot a few times to get a feel for the cushioning.", checked: false },
        { text: "Climb only 2-3 holds up, so your feet are just above the ground.", checked: false },
        { text: "Let go and consciously land on both feet.", checked: false },
        { text: "Absorb the landing with your knees and immediately roll back gently onto your butt.", checked: false },
        { text: "Repeat this 5 times until the movement feels fluid and controlled.", checked: false },
      ]
    }
  }
};
