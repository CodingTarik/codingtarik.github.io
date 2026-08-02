import React from 'react';

export const saladsLesson = {
  id: 'c3_m3_salads',
  title: { 
    en: '3.5 Salads & Dressings', 
    de: '3.5 Salate & Dressings' 
  },
  description: { 
    en: 'No more soggy leaves. The formula for the perfect vinaigrette and how to treat salad right.', 
    de: 'Keine matschigen Blätter mehr. Die Formel für die perfekte Vinaigrette und wie man Salat richtig behandelt.' 
  },
  category: 'preparations',
  
  content: {
    de: `
### Mehr als nur Beilage 🥗

Ein Salat kann der Star sein. Aber oft ist er eine traurige, wässrige Angelegenheit.
Zwei Dinge töten jeden Salat: **Wasser** und **zu schweres Dressing**.

---

### 1. Die Trocken-Pflicht

Dressing besteht aus Öl. Salat ist nass vom Waschen.
Öl und Wasser stoßen sich ab.
Wenn dein Salat nass ist, rutscht das Dressing einfach runter und sammelt sich als Pfütze am Boden.

**Lösung:** Benutze eine **Salatschleuder**. Es ist das einzige Küchen-Gadget (neben Waage/Mixer), das wirklich essenziell ist. Trockene Blätter = Dressing haftet perfekt.

---

### 2. Die Vinaigrette-Formel (3:1)

Du brauchst keine Fertigsaucen. Eine Vinaigrette ist in 30 Sekunden gemacht.

**Die Goldene Regel:**
**3 Teile Öl : 1 Teil Säure**

*   **Öl:** Gutes Olivenöl (Geschmack) oder Rapsöl (Neutral).
*   **Säure:** Essig (Weißwein, Apfel, Balsamico) oder Zitrone.
*   **Der Emulgator (Der Kleber):** Senf oder Honig. Er hilft, Öl und Essig zu verbinden.
*   **Würze:** Salz, Pfeffer.

**Beispiel:** 3 EL Öl + 1 EL Essig + 1 TL Senf + Salz/Pfeffer. In ein Glas, schütteln, fertig.

---

### 3. Dressing-Timing

Säure "kocht" die Salatblätter (macht sie weich und matschig).
*   Mache das Dressing **in der Schüssel ganz unten**.
*   Lege das Besteck (Löffel/Gabel) gekreuzt darüber.
*   Lege den Salat oben drauf (er berührt das Dressing nicht).
*   **Erst am Tisch** mischen!
*   Oder: Dressing separat servieren.

---

### 4. Andere Dressings

*   **Joghurt:** Leichter als Mayonnaise. Mit Zitrone und Kräutern.
*   **Creme:** Basis Mayonnaise oder Sour Cream. Für deftige Salate (Kartoffel, Kraut).

---

### Zusammenfassung

*   Salat MUSS trocken sein.
*   3 Teile Öl, 1 Teil Säure.
*   Senf bindet.
*   Erst kurz vor dem Essen mischen.
    `,
    en: `
### More Than a Side 🥗

A salad can be the star. But often it's a sad, watery affair.
Two things kill every salad: **Water** and **heavy dressing**.

---

### 1. The Drying Duty

Dressing consists of oil. Salad is wet from washing.
Oil and water repel each other.
If your salad is wet, the dressing just slides off and pools at the bottom.

**Solution:** Use a **Salad Spinner**. It's the only kitchen gadget (besides scale/blender) that is truly essential. Dry leaves = dressing sticks perfectly.

---

### 2. The Vinaigrette Formula (3:1)

You don't need store-bought dressings. A vinaigrette is made in 30 seconds.

**The Golden Rule:**
**3 Parts Oil : 1 Part Acid**

*   **Oil:** Good Olive Oil (Flavor) or Canola (Neutral).
*   **Acid:** Vinegar (White wine, Apple, Balsamic) or Lemon.
*   **The Emulsifier (The Glue):** Mustard or Honey. Helps bind oil and vinegar.
*   **Seasoning:** Salt, Pepper.

**Example:** 3 tbsp Oil + 1 tbsp Vinegar + 1 tsp Mustard + Salt/Pepper. In a jar, shake, done.

---

### 3. Dressing Timing

Acid "cooks" salad leaves (makes them soft and mushy).
*   Make dressing **in the bottom of the bowl**.
*   Place servers (spoon/fork) crossed over it.
*   Place salad on top (doesn't touch dressing).
*   Mix **at the table**!
*   Or: Serve dressing separately.

---

### 4. Other Dressings

*   **Yogurt:** Lighter than Mayo. With lemon and herbs.
*   **Cream:** Base Mayo or Sour Cream. For hearty salads (Potato, Slaw).

---

### Summary

*   Salad MUST be dry.
*   3 Parts Oil, 1 Part Acid.
*   Mustard binds.
*   Mix just before eating.
    `
  },

  task: {
    de: {
      title: 'Vinaigrette-Test',
      description: 'Baue deine eigene Haus-Vinaigrette.',
      checklist: [
        { text: 'Nimm ein altes Marmeladenglas.' },
        { text: 'Gib 1 EL Essig, 1 TL Senf, Salz und Pfeffer hinein.' },
        { text: 'Gib 3 EL Olivenöl dazu.' },
        { text: 'Deckel drauf, wild schütteln.' },
        { text: 'Teste an einem trockenen Salatblatt.' }
      ]
    },
    en: {
      title: 'Vinaigrette Test',
      description: 'Build your own house vinaigrette.',
      checklist: [
        { text: 'Take an old jam jar.' },
        { text: 'Add 1 tbsp vinegar, 1 tsp mustard, salt, and pepper.' },
        { text: 'Add 3 tbsp olive oil.' },
        { text: 'Lid on, shake wildly.' },
        { text: 'Test on a dry salad leaf.' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Wie ist das klassische Vinaigrette-Verhältnis?', back: '3 Teile Öl zu 1 Teil Säure (Essig/Zitrone).' },
      { front: 'Warum braucht man Senf in der Vinaigrette?', back: 'Er wirkt als Emulgator und verhindert, dass sich Öl und Essig sofort wieder trennen.' },
      { front: 'Was ist der größte Fehler beim Salat?', back: 'Nasser Salat (Dressing rutscht ab) oder zu früh angemacht (wird matschig).' }
    ],
    en: [
      { front: 'What is the classic Vinaigrette ratio?', back: '3 Parts Oil to 1 Part Acid (Vinegar/Lemon).' },
      { front: 'Why use mustard in Vinaigrette?', back: 'It acts as an emulsifier and prevents oil and vinegar from separating immediately.' },
      { front: 'Biggest mistake with salad?', back: 'Wet salad (dressing slides off) or dressed too early (gets soggy).' }
    ]
  }
};

