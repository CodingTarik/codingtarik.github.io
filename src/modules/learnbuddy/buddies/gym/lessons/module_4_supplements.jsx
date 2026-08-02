import React from 'react';

export const supplementsLesson = {
  id: 'g1_m4_supplements',
  title: { 
    en: '4.4 Supplements (Useful vs. Waste)', 
    de: '4.4 Supplements (Sinnvoll vs. Geldverschwendung)' 
  },
  description: { 
    en: 'The Big 3 (Creatine, Protein, D3) and what you can save money on.', 
    de: 'Die Big 3 (Kreatin, Protein, D3) und was du dir sparen kannst.' 
  },
  category: 'nutrition',
  
  content: {
    de: `
### Modul 4.4: Supplements (Nahrungsergänzung)

Die Supplement-Industrie will dir erzählen, dass du ohne Pulver nicht breit wirst. **Lüge.**
Supplements sind die Spitze der Pyramide (die letzten 5%). Ohne gutes Training und Essen bringen sie **nichts**.

Aber es gibt ein paar, die wissenschaftlich bewiesen helfen:

---

### Die "Big 3" (Sinnvoll & Evidenz-basiert)

#### 1. Kreatin Monohydrat
Das am besten erforschte Supplement der Welt.
*   **Wirkung:** Erhöht die Kraftausdauer (ATP-Speicher). Du schaffst vielleicht 1-2 Wiederholungen mehr. Zieht Wasser in den Muskel (sieht praller aus).
*   **Dosis:** 5g täglich (jeden Tag, für immer).
*   **Nebenwirkung:** Gewichtszunahme durch Wasser (gut für Muskeln!).
*   **Fazit:** Kaufen! (Monohydrat ist billig und reicht völlig).

#### 2. Protein-Pulver (Whey)
Kein Wundermittel, sondern einfach **Essen in Pulverform**.
*   **Wirkung:** Hilft dir, dein Protein-Ziel zu erreichen.
*   **Wann?** Praktisch nach dem Training oder als Snack.
*   **Fazit:** Sinnvoll für Bequemlichkeit.

#### 3. Vitamin D3 (+ K2)
Viele Menschen (besonders im Winter/Büro) haben einen Mangel.
*   **Wirkung:** Wichtig für Knochen, Immunsystem und Testosteron.
*   **Dosis:** 2000-5000 IE (am besten nach Bluttest).
*   **Fazit:** Sehr wichtig für die Gesundheit.

---

### Optional (Nice to have)
*   **Omega-3 (Fischöl/Algenöl):** Wenn du wenig fetten Fisch isst. Gut für Herz & Entzündungen.
*   **Koffein (Booster/Kaffee):** Wirkt leistungssteigernd. Vorsicht: Gewöhnungseffekt!
*   **Magnesium/Zink:** Bei Krämpfen oder viel Schwitzen.

---

### Geldverschwendung (Meistens)
*   **BCAAs / EAAs:** Wenn du genug Protein isst, hast du schon alle Aminosäuren. Nur sinnvoll, wenn du gefastet trainierst.
*   **Testosteron-Booster:** Wirken meist nicht (außer auf die Libido). Tribulus & Co sind Geldverschwendung.
*   **Fatburner:** Das Einzige, was Fett verbrennt, ist ein Kaloriendefizit. Fatburner sind meist nur teures Koffein.
*   **Mass Gainer:** Zucker und Protein für extrem viel Geld. Iss lieber Haferflocken und Erdnussbutter.

`,
    en: `
### Module 4.4: Supplements (Useful vs. Waste)

The supplement industry wants to tell you that you won't get big without powders. **Lie.**
Supplements are the tip of the pyramid (the last 5%). Without good training and food, they do **nothing**.

But there are a few that are scientifically proven to help:

---

### The "Big 3" (Useful & Evidence-based)

#### 1. Creatine Monohydrate
The most researched supplement in the world.
*   **Effect:** Increases strength endurance (ATP stores). You might manage 1-2 more reps. Draws water into the muscle (looks fuller).
*   **Dose:** 5g daily (every day, forever).
*   **Side effect:** Weight gain from water (good for muscles!).
*   **Verdict:** Buy! (Monohydrate is cheap and sufficient).

#### 2. Protein Powder (Whey)
Not a miracle cure, just **food in powder form**.
*   **Effect:** Helps you hit your protein goal.
*   **When?** Convenient after training or as a snack.
*   **Verdict:** Useful for convenience.

#### 3. Vitamin D3 (+ K2)
Many people (especially in winter/office jobs) are deficient.
*   **Effect:** Important for bones, immune system, and testosterone.
*   **Dose:** 2000-5000 IU (best after blood test).
*   **Verdict:** Very important for health.

---

### Optional (Nice to have)
*   **Omega-3 (Fish oil/Algae oil):** If you eat little fatty fish. Good for heart & inflammation.
*   **Caffeine (Booster/Coffee):** Performance enhancing. Caution: Habituation effect!
*   **Magnesium/Zinc:** For cramps or heavy sweating.

---

### Waste of Money (Mostly)
*   **BCAAs / EAAs:** If you eat enough protein, you already have all amino acids. Only useful if training fasted.
*   **Testosterone Boosters:** Usually don't work (except on libido). Tribulus & Co are waste of money.
*   **Fat Burners:** The only thing that burns fat is a calorie deficit. Fat burners are mostly just expensive caffeine.
*   **Mass Gainers:** Sugar and protein for extreme money. Eat oats and peanut butter instead.

`
  },

  task: {
    de: {
      title: 'Supplement-Check',
      description: 'Überprüfe deinen Schrank.',
      checklist: [
        { text: 'Hast du Kreatin? Wenn nicht, ist es die beste Investition (ca. 20€ für 6 Monate).' },
        { text: 'Wirf leere Versprechungen raus (Fatburner, Testo-Booster).' },
        { text: 'Nimmst du Vitamin D? (Besonders im Winter wichtig).' }
      ]
    },
    en: {
      title: 'Supplement Check',
      description: 'Check your cabinet.',
      checklist: [
        { text: 'Do you have Creatine? If not, it is the best investment (approx. 20€ for 6 months).' },
        { text: 'Throw out empty promises (Fat burners, Testo boosters).' },
        { text: 'Do you take Vitamin D? (Especially important in winter).' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was bewirkt Kreatin?',
        back: 'Steigert Kraftausdauer und speichert Wasser im Muskel.'
      },
      {
        front: 'Sind BCAAs sinnvoll?',
        back: 'Meistens nicht, wenn man genug Protein isst.'
      },
      {
        front: 'Was ist Whey Protein?',
        back: 'Gefiltertes Molke-Eiweiß (schnell verfügbar, hohe Qualität).'
      }
    ],
    en: [
      {
        front: 'What does Creatine do?',
        back: 'Increases strength endurance and stores water in the muscle.'
      },
      {
        front: 'Are BCAAs useful?',
        back: 'Mostly not, if you eat enough protein.'
      },
      {
        front: 'What is Whey Protein?',
        back: 'Filtered whey protein (quickly available, high quality).'
      }
    ]
  }
};


