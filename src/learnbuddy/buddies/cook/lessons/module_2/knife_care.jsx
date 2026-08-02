import React from 'react';

export const knifeCareLesson = {
  id: 'c2_m2_knife_care',
  title: { 
    en: '2.2 Knife Care', 
    de: '2.2 Messerpflege' 
  },
  description: { 
    en: 'A sharp knife is a safe knife. Learn how to keep it that way and why the dishwasher is the enemy.', 
    de: 'Ein scharfes Messer ist ein sicheres Messer. Lerne, wie es so bleibt und warum die Spülmaschine der Feind ist.' 
  },
  category: 'techniques',
  
  content: {
    de: `
### Respektiere dein Werkzeug 🙏

Ein gutes Messer kann ein Leben lang halten – oder in 6 Monaten ruiniert sein. Es hängt davon ab, wie du es behandelst.

---

### 1. Die Goldene Regel: NIEMALS in die Spülmaschine! 🚫🚿

Warum?
1.  **Chemie:** Das Spülmaschinensalz ist aggressiv und zerfrisst die feine Schneide (Korrosion).
2.  **Mechanik:** Das Messer wird durch den Wasserdruck gegen anderes Besteck geschleudert. Die Klinge bekommt Scharten.
3.  **Hitze:** Kann bei Holzgriffen das Holz zerstören.

**Die Lösung:** Sofort nach Benutzung unter warmem Wasser abspülen, evtl. etwas Spüli, und SOFORT abtrocknen. Fertig. 10 Sekunden Arbeit.

---

### 2. Scharf halten vs. Scharf machen

Es gibt einen riesigen Unterschied zwischen einem **Wetzstahl** und einem **Schleifstein**.

<div className="grid md:grid-cols-2 gap-6 my-6">

<div className="p-4 bg-stone-100 dark:bg-stone-900 rounded-lg">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Der Wetzstahl (Honig Steel)</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Das lange Metall-Ding, das bei jedem Messerblock dabei ist.
  </p>
  <ul className="list-disc list-inside text-sm space-y-1 text-stone-600 dark:text-stone-400">
    <li>**Funktion:** Richtet die Klinge auf (entgratet). Macht das Messer NICHT neu scharf, sondern hält es scharf.</li>
    <li>**Wann:** **VOR jedem Kochen.** 5-6 Mal pro Seite abziehen.</li>
    <li>**Wie:** Im 15-20° Winkel. Nicht wild herumfuchteln, sondern kontrolliert ziehen.</li>
  </ul>
</div>

<div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
  <h4 className="font-bold text-zinc-800 dark:text-zinc-200 mb-2">Der Schleifstein (Whetstone)</h4>
  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
    Ein Stein mit verschiedenen Körnungen (grob/fein).
  </p>
  <ul className="list-disc list-inside text-sm space-y-1 text-zinc-600 dark:text-zinc-400">
    <li>**Funktion:** Trägt Material ab. Schleift eine neue Schneide.</li>
    <li>**Wann:** Wenn der Wetzstahl nicht mehr hilft (alle 3-6 Monate).</li>
    <li>**Wie:** Das ist eine Kunst für sich. Oder man gibt es zum Profi-Schleifer.</li>
  </ul>
</div>

</div>

### 3. Die richtige Unterlage

Wo drauf schneidest du?
*   ✅ **Holz:** Perfekt. Weich genug, antibakteriell (Naturholz).
*   ✅ **Kunststoff:** Okay. Hygienisch, spülmaschinenfest.
*   ❌ **Glas / Stein / Marmor:** **TÖDLICH** für Messer. Die Unterlage ist härter als der Stahl. Dein Messer ist nach einmal Schneiden stumpf. Tu es nicht.

---

### 4. Lagerung

Wirf Messer nicht lose in die Schublade! Sie schlagen aneinander und werden stumpf (und du schneidest dich beim Reingreifen).
*   **Messerblock:** Gut.
*   **Magnetleiste:** Sehr gut (hygienisch, platzsparend).
*   **Klingenschutz:** Plastikhüllen für die Schublade.

---

### Zusammenfassung

Ein stumpfes Messer ist gefährlich, weil du Kraft aufwenden musst und abrutschst. Ein scharfes Messer gleitet durch die Tomate, ohne sie zu zerquetschen. Pflege es wie einen guten Freund.
    `,
    en: `
### Respect Your Tools 🙏

A good knife can last a lifetime – or be ruined in 6 months. It depends on how you treat it.

---

### 1. The Golden Rule: NEVER in the Dishwasher! 🚫🚿

Why?
1.  **Chemistry:** Dishwasher detergent is aggressive and eats away the fine edge (corrosion).
2.  **Mechanics:** The water pressure knocks the knife against other cutlery. The blade gets nicked.
3.  **Heat:** Can destroy wooden handles.

**The Solution:** Rinse immediately after use under warm water, maybe a little soap, and dry IMMEDIATELY. Done. 10 seconds of work.

---

### 2. Keeping Sharp vs. Making Sharp

There is a huge difference between a **Honing Steel** and a **Whetstone**.

<div className="grid md:grid-cols-2 gap-6 my-6">

<div className="p-4 bg-stone-100 dark:bg-stone-900 rounded-lg">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">The Honing Steel</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    The long metal rod that comes with every knife block.
  </p>
  <ul className="list-disc list-inside text-sm space-y-1 text-stone-600 dark:text-stone-400">
    <li>**Function:** Realigns the blade (removes burrs). Does NOT make the knife sharp again, but KEEPS it sharp.</li>
    <li>**When:** **BEFORE every cooking session.** Swipe 5-6 times per side.</li>
    <li>**How:** At a 15-20° angle. Don't wave it around wildly, pull controlled.</li>
  </ul>
</div>

<div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
  <h4 className="font-bold text-zinc-800 dark:text-zinc-200 mb-2">The Whetstone</h4>
  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
    A stone with different grits (coarse/fine).
  </p>
  <ul className="list-disc list-inside text-sm space-y-1 text-zinc-600 dark:text-zinc-400">
    <li>**Function:** Removes material. Grinds a new edge.</li>
    <li>**When:** When the honing steel no longer helps (every 3-6 months).</li>
    <li>**How:** This is an art in itself. Or give it to a professional sharpener.</li>
  </ul>
</div>

</div>

### 3. The Right Surface

What are you cutting on?
*   ✅ **Wood:** Perfect. Soft enough, antibacterial (natural wood).
*   ✅ **Plastic:** Okay. Hygienic, dishwasher safe.
*   ❌ **Glass / Stone / Marble:** **DEADLY** for knives. The surface is harder than the steel. Your knife is dull after one cut. Don't do it.

---

### 4. Storage

Don't throw knives loosely into the drawer! They hit each other and get dull (and you cut yourself reaching in).
*   **Knife Block:** Good.
*   **Magnetic Strip:** Very good (hygienic, saves space).
*   **Blade Guards:** Plastic covers for the drawer.

---

### Summary

A dull knife is dangerous because you have to use force and slip. A sharp knife glides through the tomato without crushing it. Treat it like a good friend.
    `
  },

  task: {
    de: {
      title: 'Messer-Pflege-Check',
      description: 'Überprüfe deine Ausrüstung und Gewohnheiten.',
      checklist: [
        { text: 'Hole deine Messer SOFORT aus der Spülmaschine (falls sie drin sind) und schwöre, es nie wieder zu tun.' },
        { text: 'Hast du einen Wetzstahl? Wenn ja, übe den Winkel (ca. 20 Grad).' },
        { text: 'Prüfe deine Schneidebretter. Hast du Glasbretter? Wirf sie weg oder nutze sie als Servierplatte.' },
        { text: 'Tomaten-Test: Schneide eine Tomate. Wenn es nicht mühelos geht, muss dein Messer geschliffen werden (nicht gewetzt!).' }
      ]
    },
    en: {
      title: 'Knife Care Check',
      description: 'Check your equipment and habits.',
      checklist: [
        { text: 'Take your knives out of the dishwasher IMMEDIATELY (if they are in there) and swear never to do it again.' },
        { text: 'Do you have a honing steel? If yes, practice the angle (approx. 20 degrees).' },
        { text: 'Check your cutting boards. Do you have glass boards? Throw them away or use them as serving platters.' },
        { text: 'Tomato Test: Cut a tomato. If it\'s not effortless, your knife needs to be sharpened (not honed!).' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Warum dürfen Messer nicht in die Spülmaschine?', back: 'Das Salz frisst die Klinge an, andere Gegenstände schlagen dagegen, Hitze schadet dem Griff.' },
      { front: 'Was ist der Unterschied zwischen Wetzstahl und Schleifstein?', back: 'Wetzstahl = richtet Klinge auf (täglich). Schleifstein = trägt Material ab und schärft neu (alle paar Monate).' },
      { front: 'Welche Schneidebretter sind tabu?', back: 'Glas, Stein, Marmor, Keramik. Sie sind härter als Stahl und machen Messer sofort stumpf.' }
    ],
    en: [
      { front: 'Why shouldn\'t knives go in the dishwasher?', back: 'Detergent eats the edge, other items hit it, heat damages the handle.' },
      { front: 'Difference between Honing Steel and Whetstone?', back: 'Honing Steel = realigns blade (daily). Whetstone = removes material and sharpens (every few months).' },
      { front: 'Which cutting boards are taboo?', back: 'Glass, Stone, Marble, Ceramic. They are harder than steel and dull knives immediately.' }
    ]
  }
};


