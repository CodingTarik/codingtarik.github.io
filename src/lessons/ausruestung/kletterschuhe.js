import { Footprints } from 'lucide-react';

export default {
  id: 4,
  category: 'Ausrüstung',
  title: 'Der perfekte Kletterschuh',
  icon: Footprints,
  description: 'Der wichtigste Ausrüstungsgegenstand beim Bouldern. Passform ist alles – ein guter Schuh macht dich sofort besser.',
  content: `
**Warum spezielle Kletterschuhe?**

Normale Turnschuhe haben zu viel Dämpfung und zu wenig Gefühl. Kletterschuhe haben:

- **Sticky Rubber** (Reibungs-Gummi) für Halt auf kleinsten Tritten
- **Enge Passform** für Präzision
- **Vorspannung (Downturn)** für Kraft in den Zehen
- **Dünne Sohle** für maximales Gefühl

**Die 3 Schuh-Typen:**

**1. Neutral/Anfänger:**
- Flach, komfortabel
- Ideal für Einsteiger & lange Sessions
- Beispiele: La Sportiva Tarantula, Scarpa Origin, Five Ten Rogue
- Preis: 60-90€

**2. Moderat:**
- Leichte Vorspannung (Downturn)
- Gut für Überhänge
- Vielseitig einsetzbar
- Beispiele: La Sportiva Otaki, Scarpa Instinct VS
- Preis: 100-150€

**3. Aggressiv:**
- Starke Vorspannung
- Nur für schwere Routen & erfahrene Kletterer
- Unbequem für längere Sessions
- Beispiele: La Sportiva Solution, Scarpa Drago
- Preis: 150-180€

**Anprobe-Tipps:**

**Passform:**
- Kletterschuhe müssen ENG sitzen (aber nicht schmerzhaft!)
- Deine Zehen sollten leicht gekrümmt sein
- Keine Luftpolster an der Ferse
- Der Schuh sollte sich wie eine zweite Haut anfühlen

**Marken & Passformen:**
- **La Sportiva**: Schmale Füße, hoher Rist
- **Scarpa**: Breitere Füße, niedriger Rist
- **Five Ten**: Komfortabel, amerikanische Passform
- **Evolv**: Breite Fußbox
- **Tenaya**: Europäische Passform

**Verschluss-Systeme:**

- **Klettverschluss**: Schnell an/aus, verstellbar (am beliebtesten!)
- **Schnürung**: Präziseste Anpassung, zeitaufwendig
- **Slipper**: Keine Verschlüsse, nur für enge Passform

**Für Anfänger:**
Fokus auf Komfort > Performance. Du wirst länger trainieren können!

**Pflege-Tipps:**

- Nach jeder Session auslüften lassen
- Niemals in der Sonne trocknen (Gummi wird hart)
- Geruch: Spray oder Zeitungspapier hilft
- **Resohlen**: Ab ca. 80€ kann man Sohlen erneuern lassen (günstiger als Neukauf!)

**Budget-Empfehlungen:**

- **Leihschuhe (2-5€/Session)**: Zum Testen perfekt!
- **Einsteiger-Schuhe (60-90€)**: Solide Investition
- **Fortgeschritten (100-150€)**: Wenn du 2-3x/Woche kletterst

⚠️ **Häufigster Fehler:** Zu enge Schuhe zu früh kaufen. Starte komfortabel!
  `,
  task: {
    title: 'Schuh-Test Challenge',
    description: 'Probiere in deiner Halle mindestens 3 verschiedene Schuhmodelle (Verleih!). Klettere denselben Boulder in jedem Paar und notiere Unterschiede in Gefühl, Präzision und Komfort.',
    checklist: [
      { text: '3 verschiedene Schuhe getestet (verschiedene Marken wenn möglich)', checked: false },
      { text: 'Denselben Boulder in jedem Paar geklettert', checked: false },
      { text: 'Notiert: Welcher Schuh war am komfortabelsten?', checked: false },
      { text: 'Notiert: Mit welchem Schuh hattest du das beste Gefühl auf kleinen Tritten?', checked: false },
      { text: 'Fersensitz geprüft: Rutscht die Ferse?', checked: false },
      { text: 'Entscheidung: Kaufe oder leihe weiter, bis du den perfekten Schuh findest', checked: false }
    ]
  }
};

