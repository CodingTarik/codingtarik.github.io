
import { Grip, Palette, Waypoints } from 'lucide-react';

export const boulderingABCs = {
  de: {
    title: "Das Boulder-ABC",
    description: "Verstehe, wie Boulder 'geschraubt' sind, was die Farben bedeuten und wie du eine Route liest.",
    content: `
### Die Sprache der Wand

Ein Boulder in der Halle ist keine zufällige Ansammlung von Griffen. Er ist eine vom Routenbau-Team entworfene Bewegungsherausforderung.

**1. Griffarten:**
Es gibt unzählige verschiedene Griffformen. Die Grundtypen sind:
*   **Henkel:** Große, gut zu haltende Griffe. Perfekt für Anfänger.
*   **Leisten:** Kleine Kanten, die Fingerkraft erfordern.
*   **Sloper:** Runde, abschüssige Griffe, die Körperspannung und Reibung benötigen.
*   **Zangen:** Griffe, die man mit dem Daumen auf der einen und den Fingern auf der anderen Seite "kneifen" muss.
*   **Pockets:** Löcher, in die nur ein oder mehrere Finger passen.

<div className="flex justify-center my-4">
  <Grip size={64} className="text-stone-500" />
</div>

**2. Die Farben-Logik:**
In den meisten Hallen folgt das System einer einfachen Regel: **Ein Boulder, eine Farbe**.
*   Alle Griffe und Tritte einer bestimmten Farbe gehören zu einem Boulder.
*   Die Schwierigkeit des Boulders wird oft durch ein farbiges Schild am Startgriff angezeigt. Jede Halle hat ihr eigenes Farbschema für Schwierigkeitsgrade (z.B. Gelb = sehr leicht, Blau = mittel, Rot = schwer).

<div className="flex justify-center my-4">
  <Palette size={64} className="text-stone-500" />
</div>

**3. Start, Top & Zonen:**
*   **Start:** Der Boulder beginnt an den Griffen, die mit einem oder zwei Schildchen markiert sind. Beide Hände müssen an diesen Startgriffen sein, und die Füße dürfen nur die Tritte der gleichen Farbe berühren, bevor man vom Boden abhebt.
*   **Zone (optional):** Manchmal gibt es einen "Zonengriff" auf halbem Weg, der ebenfalls markiert ist. Das Erreichen dieses Griffs gibt in Wettkämpfen Punkte.
*   **Top:** Der letzte Griff des Boulders. Um den Boulder abzuschließen, muss man diesen Griff für einige Sekunden kontrolliert mit beiden Händen halten.

<div className="flex justify-center my-4">
  <Waypoints size={64} className="text-stone-500" />
</div>
    `,
    task: {
      title: "Praktische Übung: Farben-Tour",
      description: "Mach dich mit dem Schwierigkeitssystem deiner Halle vertraut und finde 'deine' Farbe.",
      checklist: [
        { text: "Gehe zur Übersichtstafel der Schwierigkeitsgrade in deiner Halle und schau dir die Farb-Reihenfolge an.", checked: false },
        { text: "Suche dir die einfachste Farbe (z.B. Gelb oder Grün).", checked: false },
        { text: "Klettere 3-4 verschiedene Boulder in dieser Farbe. Konzentriere dich darauf, wirklich nur Griffe und Tritte dieser einen Farbe zu benutzen.", checked: false },
        { text: "Finde den markierten Startgriff und den Top-Griff für jeden Boulder.", checked:false },
        { text: "Wenn du dich sicher fühlst, probiere einen Boulder der nächstschwierigeren Farbe.", checked: false },
      ]
    }
  },
  en: {
    title: "The Bouldering ABCs",
    description: "Understand how boulders are 'set', what the colors mean, and how to read a route.",
    content: `
### The Language of the Wall

A boulder in the gym is not a random collection of holds. It is a movement challenge designed by the route setting team.

**1. Hold Types:**
There are countless different hold shapes. The basic types are:
*   **Jugs:** Large, easy-to-hold grips. Perfect for beginners.
*   **Crimpers:** Small edges that require finger strength.
*   **Slopers:** Round, sloping holds that require body tension and friction.
*   **Pinches:** Holds that you have to "pinch" with your thumb on one side and your fingers on the other.
*   **Pockets:** Holes that fit only one or more fingers.

<div className="flex justify-center my-4">
  <Grip size={64} className="text-stone-500" />
</div>

**2. The Color Logic:**
In most gyms, the system follows a simple rule: **One boulder, one color**.
*   All holds and footholds of a specific color belong to one boulder.
*   The difficulty of the boulder is often indicated by a colored tag at the starting hold. Each gym has its own color scheme for difficulty levels (e.g., Yellow = very easy, Blue = medium, Red = hard).

<div className="flex justify-center my-4">
  <Palette size={64} className="text-stone-500" />
</div>

**3. Start, Top & Zones:**
*   **Start:** The boulder begins at the holds marked with one or two tags. Both hands must be on these starting holds, and your feet may only touch the footholds of the same color before you lift off the ground.
*   **Zone (optional):** Sometimes there is a "zone hold" halfway, which is also marked. Reaching this hold earns points in competitions.
*   **Top:** The final hold of the boulder. To complete the boulder, you must hold this grip in a controlled manner with both hands for a few seconds.

<div className="flex justify-center my-4">
  <Waypoints size={64} className="text-stone-500" />
</div>
    `,
    task: {
      title: "Practical Exercise: Color Tour",
      description: "Familiarize yourself with your gym's grading system and find 'your' color.",
      checklist: [
        { text: "Go to the difficulty chart in your gym and look at the color order.", checked: false },
        { text: "Find the easiest color (e.g., Yellow or Green).", checked: false },
        { text: "Climb 3-4 different boulders in this color. Focus on using only holds and footholds of this one color.", checked: false },
        { text: "Find the marked starting hold and the top hold for each boulder.", checked: false },
        { text: "If you feel confident, try a boulder of the next higher difficulty color.", checked: false },
      ]
    }
  }
};
