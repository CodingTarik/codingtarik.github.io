import { Activity } from 'lucide-react';

export default {
  id: 6,
  category: 'Grundtechniken',
  title: 'Körperspannung & der "Stille Affe"',
  icon: Activity,
  description: 'Die fundamentalste Technik: Körperspannung. Ohne sie verschwendest du Energie und fällst.',
  content: `
**Was ist Körperspannung?**

Stell dir vor, dein ganzer Körper ist ein gespanntes Seil – nicht schlaff, sondern unter Kontrolle. Vom Kopf bis zu den Zehen aktiv und verbunden.

**Der "Stille Affe":**

Gute Boulderer klettern leise und flüssig wie ein Affe im Dschungel.

**Schlechte Boulderer:**
- ❌ Schlackern mit den Beinen
- ❌ Knallen auf Tritte
- ❌ Schwingen unkontrolliert
- ❌ Atmen schwer & verkrampfen
- ❌ Hektische, ruckartige Bewegungen

**Gute Boulderer:**
- ✅ Fließende, kontrollierte Bewegungen
- ✅ Leise Tritte (kaum hörbar)
- ✅ Ruhige Atmung
- ✅ Effiziente Energie-Nutzung

**Die 5 Säulen der Körperspannung:**

**1. Körperschwerpunkt nah an der Wand**
- Hüfte zur Wand drücken
- Nicht "abhängen" vom Griff
- Gewicht über den Füßen

**2. Arme lang lassen**
- NICHT hochziehen wie Klimmzüge!
- Skelett trägt Gewicht, nicht Muskeln
- "Hängen" statt "Halten"
- Arme nur beugen wenn nötig

**3. Beine machen die Arbeit**
- Beine sind 3x stärker als Arme!
- Drücken mit Beinen, nicht ziehen mit Armen
- Explosive Power aus den Beinen

**4. Atmen nicht vergessen**
- Verkrampfung = schlechte Spannung
- Gleichmäßig atmen
- Nicht Luft anhalten!
- Entspannte Schultern

**5. Füße leise aufsetzen**
- Zeigt Kontrolle & Präzision
- Bewusstes Platzieren
- Kein Rutschen oder Nachkorrigieren

**Core-Spannung - Der Schlüssel:**

Dein Rumpf (Bauch & Rücken) hält alles zusammen und überträgt Kraft von Beinen zu Armen.

**Core-Training Übungen:**

- **Plank** (Unterarmstütz): 30-60 Sek halten
- **Hollow Body Hold**: Rücken flach am Boden, Beine & Schultern heben
- **Beinheben hängend**: An Stange hängen, Beine anheben
- **L-Sit**: Fortgeschritten, an Stange/Parallel Bars
- **Russian Twists**: Rotation für seitliche Core-Muskeln

**Übung: Der Stille Affe Test**

Bitte einen Freund, die Augen zu schließen während du kletterst. Kann er hören wann du auf Tritte steigst? Wenn ja → mehr Kontrolle üben!

**Häufige Fehler:**

- **"Barn Door"**: Körper schwingt unkontrolliert zur Seite
  - Lösung: Flagging (Bein als Gegengewicht)
  
- **Schlackernde Beine**: Keine Core-Spannung
  - Lösung: Core-Training + bewusste Aktivierung

- **Verkrampfen**: Zu viel Spannung
  - Lösung: Atmen, lockern, nur nötige Muskeln anspannen
  `,
  task: {
    title: 'Der Stille Affe Challenge',
    description: 'Klettere 5 sehr leichte Boulder mit dem Fokus auf: LAUTLOSE Tritte & fließende Bewegungen. Jemand mit geschlossenen Augen sollte nicht hören, wann du auf Tritte steigst. Film dich optional selbst!',
    checklist: [
      { text: 'Füße kontrolliert und leise aufgesetzt (kaum hörbar)', checked: false },
      { text: 'Körperschwerpunkt nah an der Wand gehalten', checked: false },
      { text: 'Arme gestreckt gelassen (nicht hochgezogen wie Klimmzüge)', checked: false },
      { text: 'Keine unkontrollierten Schwünge oder "Barn Doors"', checked: false },
      { text: 'Gleichmäßig geatmet (nicht Luft angehalten)', checked: false },
      { text: 'Feedback von einem Freund eingeholt: "War ich leise? Sah es kontrolliert aus?"', checked: false }
    ]
  }
};

