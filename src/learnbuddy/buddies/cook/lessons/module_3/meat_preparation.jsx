import React from 'react';

export const meatCookingLesson = {
  id: 'c3_m3_meat',
  title: { 
    en: '3.1 Meat Preparation', 
    de: '3.1 Fleischzubereitung' 
  },
  description: { 
    en: 'Steak, Chicken, Roast. How to fry meat perfectly and why "resting" is the most important step.', 
    de: 'Steak, Hähnchen, Braten. Wie man Fleisch perfekt brät und warum "Ruhen" der wichtigste Schritt ist.' 
  },
  category: 'preparations',
  
  content: {
    de: `
### Fleisch ist Vertrauenssache 🥩

Fleisch ist oft die teuerste Zutat auf dem Teller. Es zu ruinieren tut weh (dem Geldbeutel und der Seele). Hier sind die Regeln, damit es immer gelingt.

---

### 1. Vorbereitung (Das A&O)

1.  **Temperieren:** Nimm Fleisch 30 Min vor dem Braten aus dem Kühlschrank. Eiskaltes Fleisch in einer heißen Pfanne kühlt die Pfanne ab -> Fleisch kocht statt zu braten.
2.  **Trocken tupfen:** Wasser ist der Feind der Bräunung. Tupfe das Fleisch mit Küchenpapier FURZTROCKEN ab. Nur trockenes Fleisch bekommt eine Kruste (Maillard-Reaktion).
3.  **Salzen:**
    *   Entweder **40 Min vorher** (Salz zieht Wasser, Wasser wird wieder resorbiert -> Fleisch wird zart).
    *   Oder **direkt vor dem Braten**.
    *   Niemals 10 Min vorher (Fleisch ist nass -> keine Kruste).

---

### 2. Kurzbraten (Steaks, Koteletts)

Ziel: Außen Kruste, innen saftig/rosa.

1.  **Hitze:** Pfanne extrem heiß (Rauchpunkt beachten!).
2.  **Anbraten:** Fleisch reinlegen. NICHT bewegen! Warte, bis es sich von selbst löst (Karamellisierung).
3.  **Wenden:** Nur einmal (oder oft wenden für gleichmäßigere Garung - Profis streiten darüber. Beides geht.).
4.  **Kerntemperatur:** Benutze ein Thermometer!
    *   **Rare (blutig):** 48-52°C
    *   **Medium Rare (rosa):** 54-57°C (Der Sweet Spot!)
    *   **Medium:** 58-60°C
    *   **Well Done:** 65°C+ (Schuhsohle)
5.  **RUHEN:** Das Wichtigste! Nimm das Fleisch aus der Pfanne und lass es **5-10 Minuten** auf einem Brett liegen (evtl. leicht abdecken).
    *   **Warum?** Beim Braten sammeln sich die Säfte in der Mitte. Beim Ruhen verteilen sie sich wieder. Schneidest du sofort, läuft der Saft raus und das Fleisch ist trocken.

---

### 3. Schmoren (Gulasch, Braten, Haxe)

Ziel: Zähes Fleisch (Muskeln, die viel gearbeitet haben) weich machen.

1.  **Anbraten:** Für den Geschmack (Röstaromen).
2.  **Ablöschen:** Wein, Brühe. Löst den Satz vom Boden.
3.  **Simmern:** Lange Zeit (2-4 Stunden) bei niedriger Hitze. Kollagen wird zu Gelatine.

---

### 4. Hähnchen (Geflügel)

Hier gibt es kein "Medium". Hähnchen muss durch sein (Salmonellen).

*   **Brust:** Mager. Wird schnell trocken. Gar bei 65-70°C. Tipp: "Schmetterlingsschnitt" für gleichmäßige Dicke.
*   **Keule:** Fettiger. Verzeiht mehr. Gar bei 75°C.

---

### Zusammenfassung

*   Trocken tupfen.
*   Heiße Pfanne.
*   Thermometer benutzen.
*   Ruhen lassen. Ruhen lassen. Ruhen lassen.
    `,
    en: `
### Meat is a Matter of Trust 🥩

Meat is often the most expensive ingredient on the plate. Ruining it hurts (your wallet and your soul). Here are the rules for success every time.

---

### 1. Preparation (The Alpha & Omega)

1.  **Temper:** Take meat out of the fridge 30 mins before cooking. Ice-cold meat in a hot pan cools the pan down -> meat boils instead of frying.
2.  **Pat Dry:** Water is the enemy of browning. Pat the meat BONE DRY with paper towels. Only dry meat gets a crust (Maillard reaction).
3.  **Salt:**
    *   Either **40 mins before** (Salt draws water, water gets reabsorbed -> meat gets tender).
    *   Or **immediately before frying**.
    *   Never 10 mins before (Meat is wet -> no crust).

---

### 2. Searing (Steaks, Chops)

Goal: Crust outside, juicy/pink inside.

1.  **Heat:** Pan extremely hot (watch smoke point!).
2.  **Sear:** Put meat in. Do NOT move! Wait until it releases by itself (Caramelization).
3.  **Flip:** Only once (or flip often for even cooking - pros argue about this. Both work.).
4.  **Core Temperature:** Use a thermometer!
    *   **Rare:** 48-52°C (120-125°F)
    *   **Medium Rare:** 54-57°C (130-135°F) (The Sweet Spot!)
    *   **Medium:** 58-60°C (135-140°F)
    *   **Well Done:** 65°C+ (150°F+) (Shoe leather)
5.  **REST:** The Most Important! Take meat out of pan and let sit on a board for **5-10 minutes** (cover loosely).
    *   **Why?** During frying, juices gather in the center. During resting, they redistribute. If you cut immediately, juice runs out and meat is dry.

---

### 3. Braising (Stew, Roast, Shank)

Goal: Make tough meat (muscles that worked hard) soft.

1.  **Sear:** For flavor (roasted notes).
2.  **Deglaze:** Wine, broth. Loosens bits from bottom.
3.  **Simmer:** Long time (2-4 hours) at low heat. Collagen turns to gelatin.

---

### 4. Chicken (Poultry)

There is no "Medium" here. Chicken must be cooked through (Salmonella).

*   **Breast:** Lean. Dries out fast. Done at 65-70°C (150-160°F). Tip: "Butterfly cut" for even thickness.
*   **Thigh:** Fattier. Forgives more. Done at 75°C (165°F).

---

### Summary

*   Pat dry.
*   Hot pan.
*   Use thermometer.
*   Let rest. Let rest. Let rest.
    `
  },

  task: {
    de: {
      title: 'Das perfekte Steak',
      description: 'Brate ein Steak nach allen Regeln der Kunst.',
      checklist: [
        { text: 'Nimm das Steak 30 Min vorher raus. Salze es (40 Min vorher oder direkt davor).' },
        { text: 'Tupfe es trocken.' },
        { text: 'Brate es scharf an. Miss die Temperatur (Ziel: 54°C).' },
        { text: 'Nimm es raus und warte 5-8 Minuten. Schneide es erst dann an.' },
        { text: 'Ist es saftig? Ja!' }
      ]
    },
    en: {
      title: 'The Perfect Steak',
      description: 'Fry a steak by the book.',
      checklist: [
        { text: 'Take steak out 30 mins early. Salt it (40 mins prior or immediately before).' },
        { text: 'Pat it dry.' },
        { text: 'Sear it hot. Measure temperature (Target: 54°C / 130°F).' },
        { text: 'Take it out and wait 5-8 minutes. Cut only then.' },
        { text: 'Is it juicy? Yes!' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Warum muss Fleisch vor dem Anschneiden ruhen?', back: 'Damit sich die Fleischsäfte wieder im Stück verteilen. Schneidet man sofort, läuft der Saft aus und das Fleisch wird trocken.' },
      { front: 'Warum tupft man Fleisch trocken?', back: 'Weil Wasser bei 100°C verdampft. Fleisch bräunt aber erst ab 140°C. Nasses Fleisch kocht statt zu braten.' },
      { front: 'Bei welcher Temperatur ist Hähnchen sicher?', back: 'Brust: ca. 70°C. Keule: ca. 75°C.' }
    ],
    en: [
      { front: 'Why must meat rest before cutting?', back: 'So juices redistribute throughout the meat. Cutting immediately causes juice to run out, drying the meat.' },
      { front: 'Why pat meat dry?', back: 'Water evaporates at 100°C. Meat browns at 140°C. Wet meat boils instead of frying.' },
      { front: 'At what temperature is chicken safe?', back: 'Breast: approx. 70°C (160°F). Thigh: approx. 75°C (165°F).' }
    ]
  }
};
