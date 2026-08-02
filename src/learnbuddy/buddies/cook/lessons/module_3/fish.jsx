import React from 'react';

export const fishLesson = {
  id: 'c3_m3_fish',
  title: { 
    en: '3.2 Fish & Seafood', 
    de: '3.2 Fisch & Meeresfrüchte' 
  },
  description: { 
    en: 'Fish is fast food. Learn to recognize freshness and cook fish without drying it out.', 
    de: 'Fisch ist Fast Food. Lerne Frische zu erkennen und Fisch zu garen, ohne ihn auszutrocknen.' 
  },
  category: 'preparations',
  
  content: {
    de: `
### Das empfindlichste Protein 🐟

Fisch hat kaum Bindegewebe. Das bedeutet: Er ist extrem schnell gar.
Der Grat zwischen "perfekt glasig" und "trocken" ist schmal (oft nur 1 Minute).

---

### 1. Frische erkennen

Verlass dich auf deine Sinne:
1.  **Geruch:** Frischer Fisch riecht nach Meer, Algen oder fast gar nicht. Wenn er "fischig" oder stechend stinkt -> Weg damit!
2.  **Augen:** Klar und gewölbt. (Trüb/Eingefallen = alt).
3.  **Kiemen:** Leuchtend rot. (Braun/Grau = alt).
4.  **Fleisch:** Fest. Wenn du draufdrückst, muss die Delle sofort zurückspringen.

---

### 2. Auf der Haut braten (The Crispy Skin)

Die Königsdisziplin. Nichts schmeckt besser als krosse Lachshaut.

1.  **Trocken tupfen:** Die Haut muss knochentrocken sein! Sonst dämpft sie nur.
2.  **Einschneiden:** Bei dicken Filets die Haut leicht einritzen (verhindert Wölben).
3.  **Pfanne:** Mittel-hohe Hitze. Öl rein.
4.  **Hineinlegen:** Lege den Fisch immer **vom Körper weg** in die Pfanne (Spritzgefahr).
5.  **Drücken:** Drücke das Filet die ersten 10 Sekunden mit einem Pfannenwender flach auf den Boden (sonst wölbt es sich).
6.  **Geduld:** Lass ihn liegen! Wenn du rüttelst, reißt die Haut. Warte, bis er sich von selbst löst.
7.  **Die 90%-Regel:** Brate den Fisch zu 90% auf der Hautseite. Du siehst an der Seite, wie das Fleisch weiß wird. Erst ganz am Ende kurz wenden ("Kuss auf die Fleischseite") und rausnehmen.

---

### 3. Garnelen (Shrimps) 🍤

Garnelen sind die Indikatoren für Hitze.
*   **Roh:** Grau und weich.
*   **Gar:** Rosa und C-förmig.
*   **Übergart:** Weiß und O-förmig (geschlossener Kreis). Schmecken wie Gummi.

Brate Garnelen extrem heiß und extrem kurz (1-2 Min pro Seite). Sobald sie rosa sind, raus!

---

### 4. Dämpfen & Pochieren

Da Fisch so empfindlich ist, liebt er sanfte Methoden.
*   **Dämpfen:** Ganze Fische oder Filets im Dampfkorb. Dauert ca. 8-10 Min. Bleibt extrem saftig.
*   **Pochieren:** In heißem (nicht kochendem!) Sud ziehen lassen.

---

### Zusammenfassung

Hab keine Angst vor Fisch. Er ist das perfekte "Fast Food", weil er in 5 Minuten fertig ist.
**Regel:** Lieber etwas glasig (untergart) servieren als trocken. Die Restwärme gart ihn fertig.
    `,
    en: `
### The Most Delicate Protein 🐟

Fish has almost no connective tissue. That means: It cooks extremely fast.
The line between "perfectly glassy" and "dry" is thin (often just 1 minute).

---

### 1. Recognizing Freshness

Trust your senses:
1.  **Smell:** Fresh fish smells like the sea, algae, or almost nothing. If it stinks "fishy" or sharp -> Trash it!
2.  **Eyes:** Clear and bulging. (Cloudy/Sunken = old).
3.  **Gills:** Bright red. (Brown/Gray = old).
4.  **Flesh:** Firm. If you press it, the dent must bounce back immediately.

---

### 2. Pan-Frying Skin-On (The Crispy Skin)

The supreme discipline. Nothing tastes better than crispy salmon skin.

1.  **Pat Dry:** Skin must be bone dry! Otherwise it just steams.
2.  **Score:** For thick fillets, lightly score the skin (prevents curling).
3.  **Pan:** Med-High heat. Oil in.
4.  **Lay In:** Always lay fish **away from your body** into the pan (splash danger).
5.  **Press:** Press the fillet flat with a spatula for the first 10 seconds (prevents curling).
6.  **Patience:** Leave it! If you shake it, skin tears. Wait until it releases by itself.
7.  **The 90% Rule:** Cook fish 90% on the skin side. Watch the side of the fillet turn white. Flip only at the very end ("Kiss on the flesh side") and remove.

---

### 3. Shrimp (Prawns) 🍤

Shrimp are heat indicators.
*   **Raw:** Gray and soft.
*   **Cooked:** Pink and C-shaped.
*   **Overcooked:** White and O-shaped (closed circle). Tastes like rubber.

Fry shrimp extremely hot and extremely short (1-2 mins per side). As soon as pink, get them out!

---

### 4. Steaming & Poaching

Since fish is so delicate, it loves gentle methods.
*   **Steaming:** Whole fish or fillets in steamer basket. Takes approx. 8-10 mins. Stays extremely juicy.
*   **Poaching:** Let sit in hot (not boiling!) liquid.

---

### Summary

Don't fear fish. It is the perfect "Fast Food" because it's done in 5 minutes.
**Rule:** Better serve slightly glassy (undercooked) than dry. Residual heat finishes it.
    `
  },

  task: {
    de: {
      title: 'Crispy Skin Challenge',
      description: 'Brate ein Fischfilet auf der Haut.',
      checklist: [
        { text: 'Besorge ein Lachs- oder Forellenfilet mit Haut.' },
        { text: 'Trockne die Haut extrem gut ab.' },
        { text: 'Brate es auf der Hautseite in einer Edelstahl- oder Gusseisenpfanne.' },
        { text: 'Wende es erst, wenn die Haut knusprig ist und sich von selbst löst.' },
        { text: 'Gare die Fleischseite nur ganz kurz (30 Sek).' }
      ]
    },
    en: {
      title: 'Crispy Skin Challenge',
      description: 'Fry a fish fillet on the skin.',
      checklist: [
        { text: 'Get a salmon or trout fillet with skin.' },
        { text: 'Dry the skin extremely well.' },
        { text: 'Fry on skin side in Stainless or Cast Iron pan.' },
        { text: 'Flip only when skin is crispy and releases by itself.' },
        { text: 'Cook flesh side only very briefly (30 secs).' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Woran erkennt man frischen Fisch?', back: 'Klare Augen, rote Kiemen, neutraler Meergeruch (stinkt nicht!).' },
      { front: 'Wie verhindert man, dass Fischhaut in der Pfanne klebt?', back: 'Haut trocken tupfen, Pfanne heiß genug machen, Geduld haben (löst sich von selbst).' },
      { front: 'Wie erkennt man, dass Garnelen gar sind?', back: 'Sie werden rosa und formen ein "C". Ein "O" bedeutet übergart (Gummi).' }
    ],
    en: [
      { front: 'How to recognize fresh fish?', back: 'Clear eyes, red gills, neutral sea smell (doesn\'t stink!).' },
      { front: 'How to prevent fish skin from sticking?', back: 'Pat skin dry, pan hot enough, patience (releases by itself).' },
      { front: 'How to tell when shrimp are done?', back: 'They turn pink and form a "C". An "O" means overcooked (rubber).' }
    ]
  }
};

