import React from 'react';

export const fishSeafoodLesson = {
  id: 'c3_m3_fish',
  title: { 
    en: '3.2 Fish & Seafood', 
    de: '3.2 Fisch & Meeresfrüchte' 
  },
  description: { 
    en: 'Crispy skin, juicy flesh. How to handle the delicate creatures of the sea.', 
    de: 'Knusprige Haut, saftiges Fleisch. Der Umgang mit den empfindlichen Bewohnern des Meeres.' 
  },
  category: 'preparations',
  
  content: {
    de: `
### Weniger ist mehr 🐟

Fisch hat kein starkes Bindegewebe wie Rindfleisch. Er zerfällt leicht und gart extrem schnell.

**Die wichtigste Regel:** Fisch ist fertig, BEVOR du denkst, dass er fertig ist. Die Resthitze erledigt den Rest.

---

### 1. Frische erkennen

Kaufe keinen Fisch, der nach "Fisch" riecht. Frischer Fisch riecht nach Meerwasser, Gurke oder gar nichts.
*   **Augen:** Klar und gewölbt (nicht trüb/eingefallen).
*   **Kiemen:** Leuchtend rot (nicht braun/grau).
*   **Fleisch:** Fest (Drucktest: Delle sollte verschwinden).

---

### 2. Auf der Haut braten (Crispy Skin)

Der Heilige Gral: Knusprige Haut, saftiges Fleisch.

1.  **Haut trocken tupfen:** Extrem wichtig!
2.  **Haut einritzen:** (Optional bei dicken Filets), damit sie sich nicht wölbt.
3.  **Pfanne heiß:** Öl rein.
4.  **Einlegen:** Lege den Fisch **von dir weg** in die Pfanne (keine Fettspritzer).
5.  **Drücken:** Drücke das Filet mit einem Pfannenwender für 10 Sekunden flach auf den Boden (verhindert Wölben).
6.  **Geduld:** Brate den Fisch zu **80-90% auf der Hautseite**! Dreh ihn erst um, wenn das Fleisch oben fast durch aussieht (weiß wird).
7.  **Finale:** Wenden (Hitze aus), 30 Sekunden auf der Fleischseite ziehen lassen. Fertig.

---

### 3. Dämpfen & Pochieren

Für feine Fische (Kabeljau, Forelle).
*   Fisch in einen Dämpfeinsatz oder in 80°C heißen Sud legen.
*   Er ist fertig, wenn das Fleisch sich leicht in Segmente (Flakes) schieben lässt und nicht mehr glasig ist.

---

### 4. Garnelen (Shrimps) 🦐

Garnelen sind die Fast-Food-Könige des Meeres.
*   **Darm entfernen:** Schwarzer Faden am Rücken. Einschneiden und rausziehen (schmeckt sandig).
*   **Braten:** Sehr heiß, sehr kurz. 1-2 Minuten pro Seite.
*   **Farbe:** Sobald sie pink sind und ein "C" formen, sind sie fertig. Wenn sie ein "O" formen (Kringel), sind sie übergart und gummiartig.

---

### Zusammenfassung

*   Fischhaut muss trocken sein für Knusprigkeit.
*   Brate fast nur auf der Hautseite.
*   Garnelen: "C" ist cooked, "O" ist overcooked.
    `,
    en: `
### Less is More 🐟

Fish doesn't have strong connective tissue like beef. It flakes easily and cooks extremely fast.

**The most important rule:** Fish is done BEFORE you think it's done. Residual heat does the rest.

---

### 1. Spotting Freshness

Don't buy fish that smells like "fish". Fresh fish smells like seawater, cucumber, or nothing.
*   **Eyes:** Clear and bulging (not cloudy/sunken).
*   **Gills:** Bright red (not brown/gray).
*   **Flesh:** Firm (Pressure test: indent should disappear).

---

### 2. Pan-Searing (Crispy Skin)

The Holy Grail: Crispy skin, juicy flesh.

1.  **Pat Skin Dry:** Extremely important!
2.  **Score Skin:** (Optional for thick fillets) prevents curling.
3.  **Hot Pan:** Oil in.
4.  **Place:** Lay fish **away from you** into pan (no splashes).
5.  **Press:** Press fillet flat with spatula for 10 seconds (prevents curling).
6.  **Patience:** Cook fish **80-90% on the skin side**! Only flip when flesh looks opaque/white almost to the top.
7.  **Finale:** Flip (Heat off), let sit on flesh side for 30 seconds. Done.

---

### 3. Steaming & Poaching

For delicate fish (Cod, Trout).
*   Place fish in steamer or 80°C liquid.
*   It's done when flesh flakes easily and is no longer translucent.

---

### 4. Shrimp (Prawns) 🦐

Shrimp are the fast food kings of the sea.
*   **Devein:** Black thread on back. Cut and pull out (tastes sandy).
*   **Fry:** Very hot, very short. 1-2 mins per side.
*   **Color:** As soon as they are pink and form a "C", they are done. If they form an "O" (ring), they are overcooked and rubbery.

---

### Summary

*   Fish skin must be dry for crispiness.
*   Fry almost exclusively on skin side.
*   Shrimp: "C" is cooked, "O" is overcooked.
    `
  },

  task: {
    de: {
      title: 'Crispy Skin Challenge',
      description: 'Brate ein Lachsfilet auf der Haut.',
      checklist: [
        { text: 'Tupfe die Haut komplett trocken.' },
        { text: 'Brate es auf mittlerer bis hoher Hitze fast komplett auf der Hautseite.' },
        { text: 'Drücke es am Anfang runter.' },
        { text: 'Wende es erst ganz am Ende. Ist die Haut wie ein Chip?' }
      ]
    },
    en: {
      title: 'Crispy Skin Challenge',
      description: 'Pan-sear a salmon fillet on the skin.',
      checklist: [
        { text: 'Pat skin completely dry.' },
        { text: 'Cook on medium-high heat almost entirely on skin side.' },
        { text: 'Press down at the start.' },
        { text: 'Flip only at the very end. Is the skin like a chip?' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Wann ist Fisch gar?', back: 'Wenn das Eiweiß gerinnt (weiß wird) und sich die Segmente leicht voneinander lösen (Flakes).' },
      { front: 'Wie verhindert man, dass sich Fischfilets in der Pfanne wölben?', back: 'Haut einritzen und/oder das Filet die ersten Sekunden mit dem Pfannenwender flach drücken.' },
      { front: 'Wann sind Garnelen fertig?', back: 'Wenn sie rosa sind und eine C-Form haben. Eine geschlossene O-Form bedeutet übergart (zäh).' }
    ],
    en: [
      { front: 'When is fish done?', back: 'When proteins set (turns opaque) and flakes separate easily.' },
      { front: 'How to prevent fish fillets from curling?', back: 'Score the skin and/or press fillet down with spatula for first few seconds.' },
      { front: 'When are shrimp done?', back: 'When pink and C-shaped. Closed O-shape means overcooked (tough).' }
    ]
  }
};
