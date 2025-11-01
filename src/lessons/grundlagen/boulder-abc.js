import { Award } from 'lucide-react';

export default {
  id: 3,
  category: 'Grundlagen & Theorie',
  title: 'Boulder-ABC: Griffe & Routen',
  icon: Award,
  description: 'Verstehe wie Boulder-Routen markiert sind, welche Griffarten es gibt und wie Schwierigkeitsgrade funktionieren.',
  content: `
**Routen lesen:**

In Hallen sind Boulder meist farblich markiert:

- **Griffe einer Farbe** = eine Route
- **Start**: Oft mit "START" markiert oder zwei Griffe für beide Hände
- **Top**: Der letzte Griff, meist markiert mit "TOP"
- **Füße**: Manchmal "Feet follow" (alle Tritte erlaubt) oder nur markierte Tritte

**Schwierigkeitsgrade:**

Je nach Halle: Farben, Zahlen oder Fontainebleau-Skala (4a, 5a, 6a...).

- **Anfänger**: ca. 4a-5b (grün, gelb)
- **Fortgeschritten**: 5c-6b (blau, rot)
- **Profi**: 6c+ (schwarz, weiß)

**V-Scale (USA):**
- V0-V2 = Anfänger
- V3-V5 = Fortgeschritten
- V6+ = Profi

**Die wichtigsten Griffarten:**

**1. Jug (Henkel)**
Große, komfortable Griffe – perfekt für Anfänger. Du kannst dich daran ausruhen und verschnaufen.

**2. Crimp (Leiste)**
Schmale Griffe, nur Fingerkuppen passen drauf.
- **Open Crimp**: Finger leicht gebeugt (sicherer!)
- **Closed Crimp**: Daumen über Zeigefinger (mehr Kraft, aber Verletzungsrisiko!)

**3. Sloper (Aufleger)**
Runde, abfallende Griffe – keine Kante zum Greifen. Brauchen Reibung und richtige Technik.

**4. Pinch (Zange)**
Greifen mit Daumen auf einer Seite, Finger auf der anderen. Trainiert Daumen-Kraft.

**5. Pocket (Loch)**
Löcher für 1-3 Finger. Vorsicht: Hohe Belastung auf einzelne Finger!

**Boulder-Vokabular:**

- **Crux**: Schwerste Stelle im Boulder
- **Beta**: Die Lösung/Sequenz für einen Boulder
- **Flash**: Beim 1. Versuch geschafft (mit Beta von anderen)
- **Onsight**: 1. Versuch OHNE vorherige Infos
- **Send**: Boulder erfolgreich abgeschlossen
- **Project**: Boulder an dem man langfristig arbeitet

⚠️ **Pro-Tip:** Jede Route ist ein "Problem" – eine Abfolge von Moves. Beobachte andere, plane deine Sequenz!
  `,
  task: {
    title: 'Griff-Safari',
    description: 'Finde in deiner Halle mindestens einen Boulder, der alle 5 Hauptgriffarten enthält. Klettere ihn und benenne jeden Griff laut beim Greifen.',
    checklist: [
      { text: 'Jug gefunden und verwendet', checked: false },
      { text: 'Crimp identifiziert (Vorsicht: Open Crimp verwenden!)', checked: false },
      { text: 'Sloper gemeistert (rutschig, Reibung nutzen!)', checked: false },
      { text: 'Pinch mit Daumen-Opposition gegriffen', checked: false },
      { text: 'Pocket mit 1-2 Fingern getestet (nicht ruckartig!)', checked: false },
      { text: 'Mit einem Boulderer gesprochen: "Welcher Grifftyp ist dein Favorit?"', checked: false }
    ]
  }
};

