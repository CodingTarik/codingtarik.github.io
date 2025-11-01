import { Hand } from 'lucide-react';

export default {
  id: 7,
  category: 'Grundtechniken',
  title: 'Richtig Greifen: Crimps, Slopers & Co.',
  icon: Hand,
  description: 'Jeder Griff braucht eine andere Greiftechnik. Lerne die 5 Hauptgriffe richtig zu halten – das schont Finger & gibt Kraft.',
  content: `
**1. Jug (Henkel) – Der Freund**

Der einfachste und beliebteste Griff!

- Einfach mit der ganzen Hand umfassen
- Hier kannst du hängen und verschnaufen
- Keine spezielle Technik nötig
- **Wann verwenden**: Zum Ausruhen, für Anfänger-Boulder

**2. Crimp (Leiste) – Der Fingerfresser**

Nur die ersten beiden Fingerglieder auf dem Griff.

**Open Crimp (Half Crimp):**
- Finger leicht gebeugt (ca. 90°)
- Daumen liegt daneben oder leicht drüber
- **Sicherer für Sehnen!**
- Für Anfänger: **Immer Open Crimp verwenden**

**Closed Crimp (Full Crimp):**
- Daumen über Zeigefinger gepresst
- Mehr Kraft, aber **hohes Verletzungsrisiko!**
- Nur für erfahrene Kletterer
- Kann zu Pulley-Riss führen

⚠️ **Anfänger:** Vermeide Closed Crimp! Deine Sehnen brauchen Monate um sich anzupassen.

**3. Sloper (Aufleger) – Der Trickser**

Runder, abfallender Griff ohne Kante.

**Technik:**
- Nicht "greifen", sondern **auflegen**
- Handfläche auf den Griff legen
- Mit Körpergewicht & Reibung halten
- **Arme gestreckt** lassen (skelettales Hängen)
- Schwerpunkt tief halten
- Je mehr Hautfläche, desto mehr Reibung

**Tipps:**
- Chalk ist essentiell bei Slopern
- Warme Hände = besserer Grip
- Körperposition ist wichtiger als Handkraft

**4. Pinch (Zange)**

Daumen auf einer Seite, Finger auf der anderen.

**Technik:**
- Opposition: Daumen drückt gegen Finger
- Wie eine Kneifzange
- Trainiert Daumen-Kraft (oft vernachlässigt!)

**Varianten:**
- **Side-Pinch**: Griff von der Seite zangen
- **Thumb-Catch**: Daumen über Kante haken

**5. Pocket (Loch)**

Löcher für 1-3 Finger.

**Typen:**
- **Mono (1 Finger)**: Nur für Profis! Höchstes Verletzungsrisiko
- **2-Finger**: Mittel- & Ringfinger meist am stärksten
- **3-Finger**: Alle außer Daumen

⚠️ **Vorsicht:** 
- Hohe Belastung auf einzelne Finger!
- Nie ruckartig belasten
- Progressive Gewöhnung nötig
- Anfänger: 2-3 Finger Pockets sind okay, 1-Finger vermeiden

**6. Undergriff (Undercling)**

Griff von unten halten (Handfläche zeigt nach oben).

**Technik:**
- Arme ziehen, Füße drücken (**Opposition!**)
- Körperspannung extrem wichtig
- Oft in Überhängen
- Kann sehr kraftsparend sein wenn richtig ausgeführt

**7. Seitgriff (Side-Pull)**

Griff seitlich ziehen.

**Technik:**
- Körper in Opposition zum Zug
- Oft mit Flagging kombiniert
- Eine Hand zieht, andere Hand & Füße stabilisieren

**Trainings-Tipps:**

- **Open Hand > Crimp** (für Anfänger & Langzeit-Gesundheit)
- Verschiedene Griffe trainieren (nicht nur Favoriten!)
- Finger-Kraft kommt mit Zeit (Sehnen brauchen Monate!)
- Bei Schmerz: PAUSE
  `,
  task: {
    title: 'Open Hand Training',
    description: 'Klettere 3 sehr leichte Boulder NUR mit offener Hand – kein Crimpen erlaubt! Das trainiert Sloper-Gefühl und schont deine Finger. Selbst bei Leisten: Open Crimp verwenden.',
    checklist: [
      { text: 'Arme lang gelassen bei Slopern (skelettales Hängen)', checked: false },
      { text: 'Körperschwerpunkt tief & nah an der Wand', checked: false },
      { text: 'KEIN Closed Crimp verwendet (auch wenn es einfacher wäre!)', checked: false },
      { text: 'Gefühl für Reibung & Handflächen-Kontakt entwickelt', checked: false },
      { text: 'Bei Leisten: Open Crimp verwendet, nicht Closed Crimp', checked: false },
      { text: 'Notiert: Wie anstrengend war Open Hand? (Wird mit Training leichter!)', checked: false }
    ]
  }
};

