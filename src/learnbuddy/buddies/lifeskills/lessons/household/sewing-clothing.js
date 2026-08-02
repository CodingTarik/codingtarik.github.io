export const sewingClothing = {
    id: 'household-sewing-clothing',
    title: {
        en: 'Sewing & Clothing Care: Save Your Wardrobe',
        de: 'Nähen & Kleidungspflege: Rette deine Garderobe'
    },
    difficulty: 'beginner',
    duration: 35,
    description: {
        en: 'Learn button replacement, hemming, stain removal, and proper ironing techniques.',
        de: 'Lerne Knöpfe annähen, Säumen, Fleckenentfernung und richtiges Bügeln.'
    },
    content: {
        en: `## Sewing & Clothing Care: Save Your Wardrobe

### Why This Matters
A missing button, a torn seam, or a stubborn stain shouldn't mean throwing away perfectly good clothes. These basic skills save money and reduce waste.

---

### Sewing a Button (The #1 Repair)

<div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-blue-800 dark:text-blue-200">Step-by-Step Button Sewing</p>
  <ol className="mt-2 text-blue-700 dark:text-blue-300 space-y-1">
    <li>Thread the needle with ~50cm of thread. Double it and tie a knot at the end.</li>
    <li>Position the button where it belongs. Push needle from the BACK of the fabric through one hole.</li>
    <li>Push needle down through the opposite hole, through the fabric.</li>
    <li>Repeat 4-6 times through each pair of holes (cross pattern for 4-hole buttons).</li>
    <li><strong>Create a shank:</strong> Wrap thread around the threads between button and fabric 3-4 times. This gives the button room to sit flat when buttoned.</li>
    <li>Push needle to the back of the fabric. Make 2-3 small stitches to secure. Cut thread.</li>
  </ol>
</div>

---

### Fixing a Torn Seam

1. Turn garment inside out
2. Pin the torn area closed, matching the original seam line
3. Thread needle, knot the end
4. Use a **backstitch:** Go forward one stitch, then back half a stitch, forward again
5. Stitch along the original seam line, 1cm past the tear on each side
6. Knot and cut

---

### Basic Hemming

**Quick Hem (no machine needed):**
1. Fold fabric to desired length, pin in place
2. Iron the fold to create a crease
3. Fold under 1cm (raw edge hidden), iron again
4. Use a **slip stitch:** Catch a tiny bit of the fold, then a tiny bit of the garment. Nearly invisible from outside.
5. Or use **iron-on hemming tape** for a no-sew solution

---

### Stain Removal Guide

<div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-amber-800 dark:text-amber-200">Golden Rule: Act FAST. Don't rub – BLOT.</p>
  <table className="w-full mt-2 text-amber-700 dark:text-amber-300 text-sm">
    <tr><td className="font-bold pr-2 py-1 align-top border-b">Coffee/Tea</td><td className="border-b py-1">Cold water immediately. Then dish soap + cold water. Rinse.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top border-b">Red Wine</td><td className="border-b py-1">Cover with salt immediately (absorbs). Then cold water + white vinegar.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top border-b">Grease/Oil</td><td className="border-b py-1">Dish soap directly on stain. Let sit 10 min. Wash warm.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top border-b">Blood</td><td className="border-b py-1">COLD water only (hot sets the stain!). Hydrogen peroxide for stubborn stains.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top border-b">Ink</td><td className="border-b py-1">Rubbing alcohol or hand sanitizer on the stain. Blot. Repeat.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">Grass</td><td className="py-1">White vinegar + dish soap. Soak 30 min. Wash normally.</td></tr>
  </table>
</div>

---

### Ironing Like a Pro

**Temperature guide (check label!):**
- One dot (•): Low – Synthetics, silk, nylon
- Two dots (••): Medium – Wool, polyester blends
- Three dots (•••): High – Cotton, linen

**Ironing order for a shirt:**
1. Collar (both sides)
2. Yoke (shoulder area)
3. Cuffs and sleeves
4. Front panels (button side last)
5. Back

**Pro tips:**
- Iron dark clothes inside out to prevent shine
- Use steam for stubborn wrinkles
- Hang immediately after ironing
- A garment steamer is a great alternative for quick touch-ups`,

        de: `## Nähen & Kleidungspflege: Rette deine Garderobe

### Warum das wichtig ist
Ein fehlender Knopf, eine gerissene Naht oder ein hartnäckiger Fleck sollte nicht bedeuten, dass man perfekt gute Kleidung wegwirft. Diese Grundkenntnisse sparen Geld und reduzieren Verschwendung.

---

### Knopf annähen (Die #1 Reparatur)

<div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-blue-800 dark:text-blue-200">Schritt-für-Schritt Knopf annähen</p>
  <ol className="mt-2 text-blue-700 dark:text-blue-300 space-y-1">
    <li>Faden (~50cm) durch die Nadel ziehen. Doppelt nehmen und am Ende verknoten.</li>
    <li>Knopf positionieren. Nadel von der RÜCKSEITE des Stoffes durch ein Loch stechen.</li>
    <li>Nadel durch das gegenüberliegende Loch zurück durch den Stoff stechen.</li>
    <li>4-6 Mal wiederholen durch jedes Lochpaar (Kreuzmuster bei 4-Loch-Knöpfen).</li>
    <li><strong>Stiel wickeln:</strong> Faden 3-4 Mal um die Fäden zwischen Knopf und Stoff wickeln. Das gibt dem Knopf Platz, damit er flach liegt.</li>
    <li>Nadel auf die Rückseite führen. 2-3 kleine Stiche zur Sicherung. Faden abschneiden.</li>
  </ol>
</div>

---

### Gerissene Naht reparieren

1. Kleidungsstück auf links drehen
2. Den gerissenen Bereich zusammenstecken, an der originalen Nahtlinie
3. Nadel einfädeln, Ende verknoten
4. **Rückstich** verwenden: Einen Stich vorwärts, einen halben zurück, wieder vorwärts
5. Entlang der originalen Nahtlinie nähen, 1cm über den Riss hinaus auf jeder Seite
6. Verknoten und abschneiden

---

### Grundlegendes Säumen

**Schnellsaum (ohne Maschine):**
1. Stoff auf gewünschte Länge falten, feststecken
2. Falte bügeln, um einen Knick zu erzeugen
3. 1cm nach innen falten (Schnittkante versteckt), nochmal bügeln
4. **Blindstich** verwenden: Winziges Stück der Falte fassen, dann winziges Stück des Kleidungsstücks. Von außen fast unsichtbar.
5. Oder **Saumband zum Aufbügeln** für eine näh-freie Lösung

---

### Fleckenentfernungs-Guide

<div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-amber-800 dark:text-amber-200">Goldene Regel: SCHNELL handeln. Nicht reiben – TUPFEN.</p>
  <table className="w-full mt-2 text-amber-700 dark:text-amber-300 text-sm">
    <tr><td className="font-bold pr-2 py-1 align-top border-b">Kaffee/Tee</td><td className="border-b py-1">Sofort kaltes Wasser. Dann Spülmittel + kaltes Wasser. Ausspülen.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top border-b">Rotwein</td><td className="border-b py-1">Sofort mit Salz bedecken (saugt auf). Dann kaltes Wasser + weißer Essig.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top border-b">Fett/Öl</td><td className="border-b py-1">Spülmittel direkt auf den Fleck. 10 Min. einwirken. Warm waschen.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top border-b">Blut</td><td className="border-b py-1">NUR kaltes Wasser (heißes fixiert den Fleck!). Wasserstoffperoxid bei hartnäckigen Flecken.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top border-b">Tinte</td><td className="border-b py-1">Isopropanol oder Handdesinfektionsmittel auf den Fleck. Tupfen. Wiederholen.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">Gras</td><td className="py-1">Weißer Essig + Spülmittel. 30 Min. einweichen. Normal waschen.</td></tr>
  </table>
</div>

---

### Richtig bügeln

**Temperatur-Guide (Etikett prüfen!):**
- Ein Punkt (•): Niedrig – Synthetik, Seide, Nylon
- Zwei Punkte (••): Mittel – Wolle, Polyester-Mischungen
- Drei Punkte (•••): Hoch – Baumwolle, Leinen

**Bügelreihenfolge für ein Hemd:**
1. Kragen (beide Seiten)
2. Passe (Schulterbereich)
3. Manschetten und Ärmel
4. Vorderteile (Knopfleiste zuletzt)
5. Rücken

**Profi-Tipps:**
- Dunkle Kleidung auf links bügeln (verhindert Glanz)
- Dampf für hartnäckige Falten nutzen
- Sofort nach dem Bügeln aufhängen
- Ein Dampfglätter ist eine tolle Alternative für schnelle Auffrischungen`
    },
    task: {
        en: {
            title: 'Clothing Care Practice',
            description: 'Master basic sewing and clothing care skills.',
            checklist: [
                { text: 'Sew a button onto a piece of practice fabric or a garment' },
                { text: 'Iron a dress shirt following the proper order' },
                { text: 'Treat one stain on a garment using the correct method' },
                { text: 'Assemble a basic sewing kit: needles, thread, scissors, buttons' }
            ]
        },
        de: {
            title: 'Kleidungspflege üben',
            description: 'Meistere grundlegende Näh- und Pflegekenntnisse.',
            checklist: [
                { text: 'Nähe einen Knopf an ein Übungsstück oder Kleidungsstück' },
                { text: 'Bügle ein Hemd in der richtigen Reihenfolge' },
                { text: 'Behandle einen Fleck mit der richtigen Methode' },
                { text: 'Stelle ein Basis-Nähset zusammen: Nadeln, Faden, Schere, Knöpfe' }
            ]
        }
    },
    exercises: [
        { id: 'button-practice', title: { en: 'Button Sewing Challenge', de: 'Knopf-Näh-Challenge' }, description: { en: 'Practice sewing 5 buttons onto a piece of scrap fabric. Time yourself – aim for under 3 minutes each.', de: 'Übe, 5 Knöpfe auf ein Stück Reststoff zu nähen. Stoppe die Zeit – Ziel: unter 3 Minuten pro Knopf.' } }
    ],
    notes: {
        en: [
            { front: 'Stain Rule #1', back: 'Act FAST. Blot, don\'t rub. Cold water for most stains (except grease).' },
            { front: 'Button Sewing', back: '4-6 passes through holes, then wrap thread 3-4 times to create a shank.' },
            { front: 'Iron Temperature', back: '• = Low (synthetic), •• = Medium (wool), ••• = High (cotton, linen).' }
        ],
        de: [
            { front: 'Flecken-Regel #1', back: 'SCHNELL handeln. Tupfen, nicht reiben. Kaltes Wasser für die meisten Flecken (außer Fett).' },
            { front: 'Knopf annähen', back: '4-6 Durchgänge durch die Löcher, dann 3-4 Mal umwickeln für den Stiel.' },
            { front: 'Bügeltemperatur', back: '• = Niedrig (Synthetik), •• = Mittel (Wolle), ••• = Hoch (Baumwolle, Leinen).' }
        ]
    }
};
