import React from 'react';

export const sidesLesson = {
  id: 'c3_m3_sides',
  title: { 
    en: '3.6 Sides & Carbs (Advanced)', 
    de: '3.6 Beilagen & Sattmacher (Erweitert)' 
  },
  description: { 
    en: 'Beyond boiled potatoes. Mashed potatoes, Roast potatoes, Risotto, and homemade Spaetzle.', 
    de: 'Jenseits von Salzkartoffeln. Püree, Bratkartoffeln, Risotto und selbstgemachte Spätzle.' 
  },
  category: 'preparations',
  
  content: {
    de: `
### Der Beilagen-Himmel 🥔

Du kannst Reis und Nudeln kochen (Modul 2.7). Jetzt machen wir daraus Gerichte.

---

### 1. Kartoffelpüree (Der Seelentröster)

*   **Kartoffeln:** Mehlig kochend! (Zerfallen besser).
*   **Stampfen:** Nie mit dem Pürierstab (wird Kleister!). Nimm einen Stampfer oder eine Presse.
*   **Fett:** Viel Butter.
*   **Flüssigkeit:** Warme Milch (kalte Milch kühlt das Püree aus).
*   **Geheimtipp:** Eine Prise Muskatnuss.

---

### 2. Bratkartoffeln (Die Knusper-Aufgabe)

Warum werden sie oft matschig?
1.  **Pfanne zu voll:** Sie dämpfen übereinander.
2.  **Zu viel Bewegung:** Lass sie liegen! Nur wenden, wenn sie braun sind.
3.  **Trick:** Nimm gekochte Kartoffeln vom Vortag. Die Stärke hat sich verändert, sie werden knuspriger. Oder: Rohe Kartoffelscheiben erst bei mittlerer Hitze mit Deckel garen (Dämpfen), dann Deckel ab und Hitze hoch (Braten).

---

### 3. Risotto (Die Geduldsprobe)

Reis, der cremig ist, aber noch Biss hat.
1.  **Reis:** Risottoreis (Arborio/Carnaroli). Nicht waschen! (Wir brauchen die Stärke).
2.  **Anschwitzen:** Reis in Butter glasig dünsten.
3.  **Ablöschen:** Mit Weißwein (Säure!).
4.  **Brühe:** Heiße Brühe Kellenweise zugeben. Immer rühren. Der Reis reibt aneinander und gibt Stärke ab -> Cremigkeit.
5.  **Mantecare:** Am Ende vom Herd nehmen. Kalte Butter und Parmesan einrühren.

---

### 4. Selbstgemachte Pasta/Spätzle

*   **Spätzle:** Der einfachste Teig der Welt.
    *   Pro 100g Mehl -> 1 Ei. Prise Salz.
    *   Rühren, bis der Teig Blasen wirft.
    *   Durch ein Spätzlesieb in kochendes Wasser drücken.
    *   Wenn sie oben schwimmen, sind sie fertig.

---

### Zusammenfassung

Beilagen sind oft die heimlichen Stars. Ein perfektes Püree kann besser sein als das Steak dazu.
    `,
    en: `
### Side Dish Heaven 🥔

You can cook rice and pasta (Module 2.7). Now let's make dishes out of them.

---

### 1. Mashed Potatoes (Comfort Food)

*   **Potatoes:** Starchy/Floury! (Break down better).
*   **Mashing:** Never use a blender (becomes glue!). Use a masher or ricer.
*   **Fat:** Lots of butter.
*   **Liquid:** Warm milk (cold milk cools mash down).
*   **Secret:** A pinch of nutmeg.

---

### 2. Roast Potatoes / Fried Potatoes

Why are they often mushy?
1.  **Pan too full:** They steam each other.
2.  **Too much movement:** Let them sit! Only flip when brown.
3.  **Trick:** Use boiled potatoes from the day before. Starch has changed, they get crispier. Or: Cook raw slices with lid on first (steam), then lid off and heat up (fry).

---

### 3. Risotto (The Patience Test)

Rice that is creamy but still has bite.
1.  **Rice:** Risotto rice (Arborio/Carnaroli). Don't wash! (We need the starch).
2.  **Sweat:** Sweat rice in butter until translucent.
3.  **Deglaze:** With white wine (Acid!).
4.  **Broth:** Add hot broth ladle by ladle. Stir constantly. Rice rubs together and releases starch -> Creaminess.
5.  **Mantecare:** Take off heat at end. Stir in cold butter and Parmesan.

---

### 4. Homemade Pasta/Spaetzle

*   **Spaetzle:** Easiest dough in the world.
    *   Per 100g Flour -> 1 Egg. Pinch salt.
    *   Stir until dough bubbles.
    *   Press through Spaetzle maker/colander into boiling water.
    *   When they float, they are done.

---

### Summary

Sides are often the secret stars. A perfect mash can be better than the steak next to it.
    `
  },

  task: {
    de: {
      title: 'Risotto-Challenge',
      description: 'Koche ein einfaches Risotto.',
      checklist: [
        { text: 'Schwitze Zwiebelwürfel und Risottoreis in Butter an.' },
        { text: 'Lösche mit einem Schuss Weißwein (oder Essigwasser) ab.' },
        { text: 'Gib nach und nach heiße Brühe dazu, rühre ständig.' },
        { text: 'Nach ca. 20 Min ist der Reis weich, aber hat noch Biss.' },
        { text: 'Nimm den Topf vom Herd. Rühre Butter und Parmesan unter ("Mantecare").' }
      ]
    },
    en: {
      title: 'Risotto Challenge',
      description: 'Cook a simple Risotto.',
      checklist: [
        { text: 'Sweat diced onion and risotto rice in butter.' },
        { text: 'Deglaze with splash of white wine (or vinegar water).' },
        { text: 'Add hot broth gradually, stir constantly.' },
        { text: 'After approx. 20 mins rice is soft but has bite.' },
        { text: 'Take pot off heat. Stir in butter and Parmesan ("Mantecare").' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Warum darf man Kartoffelpüree nicht pürieren?', back: 'Die Stärkezellen platzen und das Püree wird zäh wie Kleister. Immer stampfen oder pressen.' },
      { front: 'Was ist das Geheimnis von gutem Risotto?', back: 'Ständiges Rühren (löst Stärke) und am Ende "Mantecare" (Butter/Käse ohne Hitze einrühren).' },
      { front: 'Warum wäscht man Risottoreis nicht?', back: 'Weil man die Stärke außen am Korn braucht für die Cremigkeit.' }
    ],
    en: [
      { front: 'Why never blend mashed potatoes?', back: 'Starch cells burst and mash becomes gluey. Always mash or rice.' },
      { front: 'Secret to good Risotto?', back: 'Constant stirring (releases starch) and "Mantecare" (stir in butter/cheese off heat) at the end.' },
      { front: 'Why don\'t you wash risotto rice?', back: 'Because you need the starch on the outside for creaminess.' }
    ]
  }
};

