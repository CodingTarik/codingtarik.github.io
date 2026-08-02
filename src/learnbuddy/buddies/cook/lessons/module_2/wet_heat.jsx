import React from 'react';

export const wetHeatLesson = {
  id: 'c2_m2_wet_heat',
  title: { 
    en: '2.5 Wet Heat Cooking (Tenderness)', 
    de: '2.5 Feuchte Hitze (Zartheit)' 
  },
  description: { 
    en: 'Boiling, Simmering, Steaming. How to cook pasta perfectly and why simmering is the secret to tender meat.', 
    de: 'Kochen, Simmern, Dämpfen. Wie man Nudeln perfekt kocht und warum Simmern das Geheimnis für zartes Fleisch ist.' 
  },
  category: 'techniques',
  
  content: {
    de: `
### Wasser als Werkzeug 💧

Feuchte Hitze geht maximal bis 100°C (Siedepunkt von Wasser). Das klingt wenig im Vergleich zum Braten (200°C), aber Wasser überträgt Energie extrem effizient.

Hier entstehen keine Röstaromen. Hier geht es um **Konsistenz** und **Zartheit**.

---

### 1. Kochen (Boiling) - 100°C

Das Wasser blubbert wild. Große Blasen.

*   **Wofür?** Eigentlich nur für zwei Dinge: **Nudeln** und **Kartoffeln**.
*   Alles andere (Fleisch, Fisch, Gemüse) wird bei 100°C zerstört. Das Eiweiß verhärtet sich sofort, das Fleisch wird trocken wie Schuhsohle.

---

### 2. Simmern (Köcheln) - 85-95°C

Das wichtigste Wort in der Suppenküche. Kleine Bläschen steigen sanft auf. Die Oberfläche bewegt sich kaum.

*   **Wofür?** Suppen, Fonds, Schmorgerichte (Gulasch), Würstchen.
*   **Warum?** Bei dieser Temperatur wird das harte Bindegewebe in zähem Fleisch (Kollagen) langsam zu Gelatine. Das Fleisch wird butterweich. Wenn du Gulasch kochst (100°C), wird es hart. Wenn du es simmerst (90°C), zerfällt es auf der Zunge.

---

### 3. Dämpfen (Steaming)

Garen im Wasserdampf. Das Essen berührt das Wasser nicht.

*   **Vorteil:** Extrem schonend. Vitamine werden nicht ins Kochwasser ausgespült (wie beim Kochen), sondern bleiben im Gemüse. Brokkoli bleibt leuchtend grün und knackig.
*   **Equipment:** Topf mit Siebeinsatz oder Dampfgarer.

---

### 4. Blanchieren

Kurz Kochen -> Sofort Eiswasser.

*   **Der Trick der Profis:** Grüne Bohnen werden grau, wenn man sie lange kocht. Blanchiere sie 3 Minuten in Salzwasser, dann sofort ins Eiswasser. Sie bleiben knallgrün und knackig. Du kannst sie dann später kurz in Butter schwenken, um sie wieder zu erwärmen.

---

### Zusammenfassung

*   Willst du Farbe? Nimm trockene Hitze (Pfanne).
*   Willst du Zartheit (bei langem Garen)? Nimm Simmern.
*   Willst du Vitamine/Farbe? Nimm Dämpfen/Blanchieren.
*   Willst du Nudeln? Lass es kochen!
    `,
    en: `
### Water as a Tool 💧

Wet heat goes up to max 100°C (212°F). That sounds low compared to frying (200°C/400°F), but water transfers energy extremely efficiently.

No roasted flavors happen here. This is about **texture** and **tenderness**.

---

### 1. Boiling - 100°C (212°F)

Water bubbling wildly. Big bubbles.

*   **For what?** Really only two things: **Pasta** and **Potatoes**.
*   Everything else (meat, fish, veggies) gets destroyed at 100°C. Protein hardens immediately, meat becomes dry like shoe leather.

---

### 2. Simmering - 85-95°C (185-205°F)

The most important word in soup making. Small bubbles rise gently. Surface barely moves.

*   **For what?** Soups, stocks, stews (Goulash), sausages.
*   **Why?** At this temperature, tough connective tissue in meat (collagen) slowly turns into gelatin. The meat becomes butter-soft. If you boil Goulash (100°C), it gets tough. If you simmer it (90°C), it melts on your tongue.

---

### 3. Steaming

Cooking in water vapor. Food doesn't touch the water.

*   **Advantage:** Extremely gentle. Vitamins aren't washed out into cooking water (like boiling), but stay in the veggie. Broccoli stays bright green and crisp.
*   **Equipment:** Pot with steamer insert.

---

### 4. Blanching

Boil briefly -> Ice water immediately.

*   **The Pro Trick:** Green beans turn gray if cooked long. Blanch them 3 mins in salted water, then straight into ice water. They stay bright green and crisp. You can toss them in butter later to reheat.

---

### Summary

*   Want color? Use Dry Heat (Pan).
*   Want tenderness (long cook)? Use Simmering.
*   Want vitamins/color? Use Steaming/Blanching.
*   Want pasta? Boil it!
    `
  },

  task: {
    de: {
      title: 'Simmer-Test',
      description: 'Lerne dein Wasser zu kontrollieren.',
      checklist: [
        { text: 'Bringe einen Topf Wasser zum Kochen (100°C, sprudelnd).' },
        { text: 'Reduziere die Hitze, bis nur noch einzelne Bläschen aufsteigen (Simmern).' },
        { text: 'Versuche, diesen Zustand 5 Minuten zu halten. Das ist die Temperatur, in der Suppen und Eintöpfe leben.' }
      ]
    },
    en: {
      title: 'Simmer Test',
      description: 'Learn to control your water.',
      checklist: [
        { text: 'Bring a pot of water to a boil (100°C, rolling boil).' },
        { text: 'Reduce heat until only occasional bubbles rise (Simmering).' },
        { text: 'Try to maintain this state for 5 minutes. This is where soups and stews live.' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist der Unterschied zwischen Kochen und Simmern?', back: 'Kochen = 100°C (aggressiv). Simmern = ca. 90°C (sanft). Simmern macht Fleisch zart, Kochen macht es zäh.' },
      { front: 'Warum blanchiert man Gemüse?', back: 'Um Farbe und Biss zu erhalten. Das Eiswasser stoppt den Garprozess sofort.' },
      { front: 'Was sollte man niemals kochen (100°C)?', back: 'Fisch, Fleisch (außer Tafelspitz/Huhn, aber auch da ist Simmern besser), Fonds.' }
    ],
    en: [
      { front: 'Difference between Boiling and Simmering?', back: 'Boiling = 100°C (aggressive). Simmering = approx. 90°C (gentle). Simmering makes meat tender, boiling makes it tough.' },
      { front: 'Why blanch vegetables?', back: 'To keep color and crunch. Ice water stops cooking process immediately.' },
      { front: 'What should never be boiled (100°C)?', back: 'Fish, Meat (unless boiling beef/chicken, but even then simmering is better), Stocks.' }
    ]
  }
};


