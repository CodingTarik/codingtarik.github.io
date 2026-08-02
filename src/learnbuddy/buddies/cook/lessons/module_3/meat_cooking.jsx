import React from 'react';

export const meatCookingLesson = {
  id: 'c3_m3_meat',
  title: { 
    en: '3.1 Meat Preparation', 
    de: '3.1 Fleischzubereitung' 
  },
  description: { 
    en: 'From steak to stew. Learn about temperatures, resting times, and why searing is crucial.', 
    de: 'Vom Steak bis zum Schmorbraten. Lerne alles über Temperaturen, Ruhezeiten und warum Anbraten essenziell ist.' 
  },
  category: 'preparations',
  
  content: {
    de: `
### Fleisch ist Respekt 🥩

Ein Tier hat sein Leben gelassen. Das Mindeste, was wir tun können, ist es perfekt zuzubereiten.

---

### 1. Die Vorbereitung

Egal welches Fleisch:
1.  **Trocken tupfen!** Feuchtes Fleisch brät nicht, es dämpft (wird grau). Nimm Küchenpapier und mach es trocken.
2.  **Temperatur:** Nimm Steaks 30 Min vor dem Braten aus dem Kühlschrank. (Bei Huhn/Hackfleisch: Lass es gekühlt!).
3.  **Salzen:** Entweder 40 Min *vorher* (Salz dringt ein, Saft kommt raus und wird wieder aufgesaugt) oder *direkt* vor dem Braten. Nicht 5 Min vorher (dann schwimmt es im Wasser).

---

### 2. Kurzbraten (Steak, Kotelett, Huhn)

Hohe Hitze. Ziel: Kruste außen, saftig innen.

**Die Garstufen (Kerntemperatur):**
Kauf dir ein digitales Thermometer. Es ist der einzige Weg, sicher zu sein. "Daumendruck-Test" ist ungenau.

*   **Rare (Blutig):** 50°C
*   **Medium-Rare (Perfekt):** 54°C (Rosa, warm)
*   **Medium:** 58°C (Durchgehend rosa)
*   **Well Done:** 65°C+ (Trocken... tu es nicht beim Steak!)
*   **Hähnchenbrust:** Muss durch sein! 65-70°C (nicht höher, sonst trocken).
*   **Hähnchenkeule:** Verträgt mehr, 75-80°C.

**WICHTIG: Die Ruhezeit!**
Wenn du ein Steak direkt aus der Pfanne schneidest, läuft der Saft raus. Das Fleisch ist trocken, der Teller nass.
Lass es **5-10 Minuten ruhen** (auf einem warmen Teller oder Brett). Die Säfte verteilen sich wieder im Fleisch.

---

### 3. Schmoren (Braten, Gulasch)

Niedrige Hitze, lange Zeit. Für zähe Stücke (Schulter, Nacken) mit viel Bindegewebe.

**Das Prinzip:**
1.  **Anbraten:** Fleischwürfel scharf anbraten (für den Geschmack/Farbe).
2.  **Ablöschen:** Mit Wein/Brühe den Bratensatz lösen.
3.  **Auffüllen:** Fleisch sollte bedeckt sein.
4.  **Simmern:** Deckel drauf, 2-3 Stunden bei niedriger Hitze (90°C) sanft köcheln.
5.  **Ergebnis:** Das harte Kollagen wird zu weicher Gelatine. Das Fleisch zerfällt.

---

### Zusammenfassung

*   Steak: Heiß & schnell + Ruhezeit.
*   Schmorbraten: Niedrig & langsam.
*   Hähnchen: Muss durch sein (aber nicht totgebraten).
*   Thermometer nutzen = Profi-Level freigeschaltet.
    `,
    en: `
### Meat is Respect 🥩

An animal gave its life. The least we can do is prepare it perfectly.

---

### 1. The Preparation

No matter the meat:
1.  **Pat dry!** Wet meat doesn't sear, it steams (turns gray). Use paper towels.
2.  **Temperature:** Take steaks out of fridge 30 mins before cooking. (Keep chicken/minced meat chilled!).
3.  **Salting:** Either 40 mins *before* (salt penetrates, draws juice, juice gets reabsorbed) or *immediately* before frying. Not 5 mins before (then it sits in a puddle).

---

### 2. Pan-Frying / Searing (Steak, Chops, Chicken)

High heat. Goal: Crust outside, juicy inside.

**Doneness (Core Temperature):**
Buy a digital thermometer. It's the only way to be sure. "Thumb test" is inaccurate.

*   **Rare:** 50°C (120°F)
*   **Medium-Rare (Perfect):** 54°C (130°F) (Pink, warm)
*   **Medium:** 58°C (135°F) (Pink throughout)
*   **Well Done:** 65°C+ (150°F+) (Dry... don't do it to a steak!)
*   **Chicken Breast:** Must be cooked! 65-70°C (150-160°F) (not higher, or it gets dry).
*   **Chicken Leg:** Can take more, 75-80°C (165-175°F).

**IMPORTANT: Resting Time!**
If you cut a steak straight from the pan, the juice runs out. Meat is dry, plate is wet.
Let it **rest 5-10 minutes** (on a warm plate or board). Juices redistribute.

---

### 3. Braising (Roasts, Stews)

Low heat, long time. For tough cuts (shoulder, neck) with lots of connective tissue.

**The Principle:**
1.  **Sear:** Fry meat cubes hard (for flavor/color).
2.  **Deglaze:** Dissolve fond with wine/stock.
3.  **Cover:** Meat should be submerged.
4.  **Simmer:** Lid on, simmer gently for 2-3 hours at low heat (90°C / 195°F).
5.  **Result:** Tough collagen turns into soft gelatin. Meat falls apart.

---

### Summary

*   Steak: Hot & fast + Resting.
*   Braise: Low & slow.
*   Chicken: Must be cooked safe (but not killed twice).
*   Use Thermometer = Pro Level Unlocked.
    `
  },

  task: {
    de: {
      title: 'Steak-Experiment',
      description: 'Lerne den Wert der Ruhezeit.',
      checklist: [
        { text: 'Brate zwei kleine Steaks (oder Hähnchenbrüste).' },
        { text: 'Schneide das erste SOFORT an, wenn es aus der Pfanne kommt. Beobachte, wie viel Saft herausläuft.' },
        { text: 'Lasse das zweite 5-8 Minuten auf einem Brett liegen. Schneide es dann an. Vergleiche die Saftigkeit.' }
      ]
    },
    en: {
      title: 'Steak Experiment',
      description: 'Learn the value of resting.',
      checklist: [
        { text: 'Fry two small steaks (or chicken breasts).' },
        { text: 'Cut the first one IMMEDIATELY when it comes out of the pan. Watch how much juice runs out.' },
        { text: 'Let the second one rest on a board for 5-8 minutes. Then cut it. Compare juiciness.' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Warum muss man Fleisch vor dem Braten trocken tupfen?', back: 'Feuchtigkeit erzeugt Dampf. Das Fleisch kocht statt zu braten und bekommt keine Kruste.' },
      { front: 'Warum muss Steak nach dem Braten ruhen?', back: 'Die Fleischfasern entspannen sich und halten den Saft wieder fest. Sofortiges Anschneiden = Saftverlust.' },
      { front: 'Kerntemperatur für Medium-Rare Steak?', back: 'Ca. 54°C.' }
    ],
    en: [
      { front: 'Why pat meat dry before frying?', back: 'Moisture creates steam. Meat boils instead of searing and gets no crust.' },
      { front: 'Why must steak rest after cooking?', back: 'Muscle fibers relax and hold onto the juices again. Cutting immediately = juice loss.' },
      { front: 'Core temp for Medium-Rare steak?', back: 'Approx. 54°C (130°F).' }
    ]
  }
};

