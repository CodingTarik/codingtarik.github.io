
import { Footprints } from 'lucide-react';

export const movementFromTheFeet = {
  de: {
    title: "Bewegung aus den Füßen",
    description: "Lerne, warum deine Füße das Fundament jeder Bewegung beim Bouldern sind und wie du sie effektiv einsetzt.",
    content: `
### Das Fundament deiner Bewegung

Beim Bouldern neigen Anfänger oft dazu, sich mit den Armen hochzuziehen. Die wahre Kraft kommt jedoch aus den Beinen und der Hüfte. Deine Füße sind der Ausgangspunkt für fast jede Bewegung an der Wand.

**Warum sind die Füße so wichtig?**

1.  **Kraftübertragung:** Deine Beinmuskulatur ist weitaus stärker als deine Armmuskulatur. Indem du dich mit den Füßen abstößt, verlagerst du dein Gewicht effizient nach oben.
2.  **Stabilität:** Präzise gesetzte Tritte geben dir ein stabiles Fundament. Das ermöglicht es dir, deine Hände zu entlasten und den nächsten Griff sicher zu erreichen.
3.  **Reichweite:** Durch das Eindrehen der Hüfte und das Verlagern des Gewichts auf einen Fuß kannst du deine Reichweite enorm vergrößern.

### Die goldene Regel: Schieben, nicht ziehen!

Stell dir vor, du steigst eine Leiter hinauf. Du würdest dich hauptsächlich mit den Beinen nach oben schieben, nicht mit den Armen hochziehen. Genau dieses Prinzip gilt auch beim Bouldern.

**Visualisierung:**
<div className="flex justify-center my-4">
  <Footprints size={64} className="text-stone-500" />
</div>
Jeder Tritt ist ein kleiner "Sprung" nach oben, den du mit deinem Fuß initiierst.

    `,
    task: {
      title: "Praktische Übung: Stummes Klettern",
      description: "Diese Übung schärft dein Bewusstsein für präzise und bewusste Fußarbeit. Das Ziel ist, so leise wie möglich zu klettern.",
      checklist: [
        { text: "Wähle einen sehr einfachen Boulder (2-3 Schwierigkeitsgrade unter deinem Maximum).", checked: false },
        { text: "Konzentriere dich darauf, deine Füße absolut lautlos auf die Tritte zu setzen.", checked: false },
        { text: "Schau dir jeden Tritt genau an, bevor du deinen Fuß platzierst.", checked: false },
        { text: "Versuche, den Fuß beim ersten Kontakt nicht mehr zu bewegen oder anzupassen ('kleben lassen').", checked: false },
        { text: "Wiederhole das an 3 verschiedenen einfachen Bouldern.", checked: false },
      ]
    }
  },
  en: {
    title: "Movement from the Feet",
    description: "Learn why your feet are the foundation of every movement in bouldering and how to use them effectively.",
    content: `
### The Foundation of Your Movement

When bouldering, beginners often tend to pull themselves up with their arms. However, the real power comes from the legs and hips. Your feet are the starting point for almost every movement on the wall.

**Why are feet so important?**

1.  **Power Transfer:** Your leg muscles are much stronger than your arm muscles. By pushing off with your feet, you efficiently shift your weight upwards.
2.  **Stability:** Precisely placed footholds give you a stable foundation. This allows you to relieve your hands and securely reach the next hold.
3.  **Reach:** By turning your hip and shifting your weight onto one foot, you can greatly increase your reach.

### The Golden Rule: Push, don't pull!

Imagine climbing a ladder. You would mainly push yourself up with your legs, not pull with your arms. This exact principle applies to bouldering.

**Visualization:**
<div className="flex justify-center my-4">
  <Footprints size={64} className="text-stone-500" />
</div>
Every foothold is a small "jump" upwards that you initiate with your foot.

    `,
    task: {
      title: "Practical Exercise: Silent Climbing",
      description: "This exercise sharpens your awareness for precise and conscious footwork. The goal is to climb as quietly as possible.",
      checklist: [
        { text: "Choose a very easy boulder (2-3 grades below your maximum).", checked: false },
        { text: "Focus on placing your feet on the holds absolutely silently.", checked: false },
        { text: "Look at each foothold carefully before placing your foot.", checked: false },
        { text: "Try not to move or adjust your foot after the initial contact ('make it stick').", checked: false },
        { text: "Repeat this on 3 different easy boulders.", checked: false },
      ]
    }
  }
};
