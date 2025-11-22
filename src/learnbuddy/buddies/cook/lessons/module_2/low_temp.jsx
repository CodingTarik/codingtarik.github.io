import React from 'react';

export const lowTempLesson = {
  id: 'c2_m2_low_temp',
  title: { 
    en: '2.6 Low Temp Techniques', 
    de: '2.6 Niedrigtemperatur & Sanftes Garen' 
  },
  description: { 
    en: 'Poaching and Confit. How to cook delicate foods like fish and eggs without destroying them.', 
    de: 'Pochieren und Konfieren. Wie man Empfindliches wie Fisch und Eier gart, ohne sie zu zerstören.' 
  },
  category: 'techniques',
  
  content: {
    de: `
### Wenn 100°C zu viel sind 🌡️

Manche Lebensmittel sind Diven. Fischfilets oder Eier vertragen keine Gewalt. Für sie gehen wir noch eine Stufe tiefer als Simmern.

---

### 1. Pochieren (70-80°C)

Garen in heißer Flüssigkeit, die sich **nicht bewegt**. Kein Blubbern. Gar nichts. Nur Dampf steigt auf.

*   **Der Klassiker:** Das "Verlorene Ei" (Poached Egg).
*   **Fisch:** Ein Stück Lachs in 80°C heißem Wasser (oder gewürztem Fond) ziehen lassen. Es bleibt unglaublich saftig. Wenn du es brätst, wird es oft trocken.
*   **Trick:** Topf vom Herd ziehen! Wasser aufkochen, Hitze aus, Fisch rein, Deckel drauf, 10 Min warten.

---

### 2. Konfieren (Confit)

Garen in **Fett** (Öl, Schmalz) bei niedriger Temperatur (ca. 80-90°C).

*   Ursprünglich eine Konservierungsmethode (Entenkeulen in Entenfett).
*   **Modernes Highlight:** **Knoblauch-Confit**.
    *   Lege 20 geschälte Knoblauchzehen in einen kleinen Topf.
    *   Bedecke sie komplett mit Olivenöl.
    *   Lasse sie bei minimaler Hitze 30-45 Min ziehen (nicht frittieren!). Sie müssen weich wie Butter werden.
    *   Das Ergebnis: Streichfähiger, süßer Knoblauch ohne Schärfe. Und du hast ein geiles Knoblauchöl übrig!

---

### Zusammenfassung

Hitze ist ein Spektrum.
*   200°C+ (Grillen/Braten)
*   100°C (Kochen)
*   90°C (Simmern)
*   70-80°C (Pochieren/Konfieren)

Ein guter Koch wählt die Temperatur passend zum Produkt.
    `,
    en: `
### When 100°C is too much 🌡️

Some foods are divas. Fish fillets or eggs can't handle violence. For them, we go one step lower than simmering.

---

### 1. Poaching (70-80°C / 160-175°F)

Cooking in hot liquid that **does not move**. No bubbles. Nothing. Just steam rising.

*   **The Classic:** Poached Egg.
*   **Fish:** Let a piece of salmon sit in 80°C water (or seasoned stock). It stays incredibly juicy. Frying often dries it out.
*   **Trick:** Take pot off heat! Boil water, heat off, fish in, lid on, wait 10 mins.

---

### 2. Confit

Cooking in **fat** (oil, lard) at low temperature (approx. 80-90°C / 175-195°F).

*   Originally a preservation method (Duck legs in duck fat).
*   **Modern Highlight:** **Garlic Confit**.
    *   Put 20 peeled garlic cloves in a small pot.
    *   Cover completely with olive oil.
    *   Let sit at minimal heat for 30-45 mins (don't fry!). They must become soft like butter.
    *   Result: Spreadable, sweet garlic without bite. And you have awesome garlic oil left!

---

### Summary

Heat is a spectrum.
*   200°C+ (Grilling/Frying)
*   100°C (Boiling)
*   90°C (Simmering)
*   70-80°C (Poaching/Confit)

A good chef chooses temperature fitting the product.
    `
  },

  task: {
    de: {
      title: 'Confit-Experiment',
      description: 'Mache Knoblauch-Confit. Es ist lebensverändernd.',
      checklist: [
        { text: 'Kaufe 2-3 Knollen Knoblauch. Schäle die Zehen.' },
        { text: 'Gib sie in einen kleinen Topf und bedecke sie mit Olivenöl.' },
        { text: 'Erhitze es GANZ sanft. Es darf nur ab und zu ein Bläschen kommen.' },
        { text: 'Nach 30-40 Min sind die Zehen goldbraun und weich.' },
        { text: 'Lasse es abkühlen. Lagere es im Glas im Kühlschrank (hält 2 Wochen).' },
        { text: 'Streiche eine Zehe auf geröstetes Brot.' }
      ]
    },
    en: {
      title: 'Confit Experiment',
      description: 'Make Garlic Confit. It is life changing.',
      checklist: [
        { text: 'Buy 2-3 bulbs of garlic. Peel cloves.' },
        { text: 'Put in small pot, cover with olive oil.' },
        { text: 'Heat VERY gently. Only occasional bubbles.' },
        { text: 'After 30-40 mins cloves are golden and soft.' },
        { text: 'Let cool. Store in jar in fridge (lasts 2 weeks).' },
        { text: 'Spread a clove on toasted bread.' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist Pochieren?', back: 'Garen in heißer Flüssigkeit (70-80°C) ohne Bewegung. Für Fisch und Eier.' },
      { front: 'Was ist Konfieren?', back: 'Garen in Fett bei niedriger Temperatur (Confit). Macht Fleisch/Gemüse extrem zart und haltbar.' }
    ],
    en: [
      { front: 'What is Poaching?', back: 'Cooking in hot liquid (70-80°C) without movement. For fish and eggs.' },
      { front: 'What is Confit?', back: 'Cooking in fat at low temperature. Makes meat/veggies extremely tender and preserved.' }
    ]
  }
};

