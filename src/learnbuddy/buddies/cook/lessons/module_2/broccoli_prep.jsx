import React from 'react';

export const broccoliPrepLesson = {
  id: 'c2_m2_broccoli_prep',
  title: { 
    en: '2.14 Broccoli Preparation', 
    de: '2.14 Brokkoli-Zubereitung' 
  },
  description: { 
    en: 'Master broccoli: cutting florets, preparing stems, blanching, roasting, and different cooking methods for perfect results.', 
    de: 'Meistere Brokkoli: Röschen schneiden, Strunk verwerten, Blanchieren, Rösten und verschiedene Garmethoden für perfekte Ergebnisse.' 
  },
  category: 'techniques',
  
  content: {
    de: `
### Brokkoli richtig zubereiten: Zero Waste, maximaler Geschmack 🥦

Brokkoli gehört zu den nährstoffreichsten Gemüsesorten – und ist trotzdem bei vielen unbeliebt. Warum? Weil er oft falsch zubereitet wird: zu lange gekocht, matschig, farblos, geschmacklos. Richtig zubereitet ist Brokkoli knackig, leuchtend grün, voller Geschmack und unglaublich vielseitig.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500 my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Das größte Brokkoli-Geheimnis</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Der Strunk ist kein Abfall!</strong> Er enthält sogar mehr Nährstoffe als die Röschen und schmeckt geschält mild und süßlich – ähnlich wie Kohlrabi. Wer den Strunk wegwirft, verschwendet den besten Teil.</p>
</div>

---

### 1. Röschen schneiden: Die richtige Technik

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Schritt für Schritt:</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>Brokkoli kopfüber halten</strong> (Röschen nach unten, Strunk nach oben).</li>
    <li>Schneide die Röschen-Stiele dort ab, wo sie den Hauptstrunk treffen. Arbeite von außen nach innen.</li>
    <li><strong>Nicht hacken!</strong> Schneide sauber, sonst krümeln die Röschen auseinander.</li>
    <li>Große Röschen teilen: Schneide durch den Stiel, nicht durch die Blume. So behältst du die Form.</li>
    <li><strong>Gleichmäßige Größe:</strong> Alle Röschen sollten ähnlich groß sein (ca. 3-4 cm). Sonst garen kleine Röschen durch, während große noch roh sind.</li>
  </ol>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Profi-Tipp: Brokkoli-"Steaks"</h4>
  <p className="text-sm text-green-700 dark:text-green-300">Schneide den Brokkoli komplett von oben nach unten in 2-3 cm dicke Scheiben. Du erhältst "Steaks", die du in der Pfanne oder im Ofen rösten kannst. Sieht spektakulär aus und hat fantastische Röstaromen!</p>
</div>

---

### 2. Den Strunk verwerten: Die unterschätzte Zutat

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Schritt für Schritt:</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>Schneide das <strong>holzige untere Ende</strong> ab (ca. 1-2 cm) – es ist faserig und zäh.</li>
    <li><strong>Schäle den Strunk</strong> mit einem Sparschäler. Die äußere Schicht ist holzig, das Innere ist zart.</li>
    <li>Schneide das geschälte Innere in <strong>Scheiben, Würfel oder Stifte</strong>.</li>
    <li>Der Strunk gart etwas langsamer als die Röschen – schneide ihn kleiner oder gib ihn 2 Min früher ins Wasser.</li>
  </ol>
</div>

**Verwendung des Strunks:**
- Suppen und Eintöpfe (würfeln)
- Rohkost-Sticks (Stifte)
- In Butter gebraten als Beilage
- Geraspelt im Slaw oder Salat
- Püriert für Brokkoli-Cremesuppe

---

### 3. Waschen: Der richtige Zeitpunkt

<div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Wichtig: Reihenfolge beachten!</h4>
  <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-2">
    <li><strong>Erst schneiden, dann waschen.</strong> Ganzen Brokkoli zu waschen ist ineffektiv – Schmutz sitzt zwischen den Röschen.</li>
    <li>Geschnittene Röschen in eine Schüssel mit kaltem Wasser legen und vorsichtig schwenken.</li>
    <li>Eventuelle Insekten oder Sand sinken auf den Boden.</li>
    <li>Auf einem Küchentuch abtropfen lassen. <strong>Nicht zu lange im Wasser lassen</strong> – Vitamine sind wasserlöslich!</li>
  </ul>
</div>

---

### 4. Garmethoden: Für jeden Geschmack die richtige Technik

<table className="w-full border-collapse my-4">
  <thead>
    <tr className="bg-gray-100 dark:bg-stone-700">
      <th className="border dark:border-stone-600 p-2 text-left">Methode</th>
      <th className="border dark:border-stone-600 p-2 text-left">Zeit</th>
      <th className="border dark:border-stone-600 p-2 text-left">Ergebnis</th>
      <th className="border dark:border-stone-600 p-2 text-left">Ideal für</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border dark:border-stone-600 p-2 font-semibold">Dämpfen</td>
      <td className="border dark:border-stone-600 p-2">3-5 Min</td>
      <td className="border dark:border-stone-600 p-2">Knackig, leuchtend grün</td>
      <td className="border dark:border-stone-600 p-2">Beilage, gesündeste Methode</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2 font-semibold">Blanchieren</td>
      <td className="border dark:border-stone-600 p-2">2-3 Min + Eiswasser</td>
      <td className="border dark:border-stone-600 p-2">Leuchtend grün, knackig</td>
      <td className="border dark:border-stone-600 p-2">Vorbereitung, Salate</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2 font-semibold">Rösten (Ofen)</td>
      <td className="border dark:border-stone-600 p-2">20-25 Min bei 220°C</td>
      <td className="border dark:border-stone-600 p-2">Goldbraun, karamellisiert, nussig</td>
      <td className="border dark:border-stone-600 p-2">Beilage, Salat, Pasta</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2 font-semibold">Anbraten</td>
      <td className="border dark:border-stone-600 p-2">5-7 Min hohe Hitze</td>
      <td className="border dark:border-stone-600 p-2">Leicht gebräunt, knackig</td>
      <td className="border dark:border-stone-600 p-2">Wok, schnelle Beilagen</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2 font-semibold">Roh</td>
      <td className="border dark:border-stone-600 p-2">-</td>
      <td className="border dark:border-stone-600 p-2">Knackig, frisch, mild</td>
      <td className="border dark:border-stone-600 p-2">Salate, Rohkost mit Dip</td>
    </tr>
  </tbody>
</table>

---

### 5. Blanchieren: Die Profi-Technik im Detail

Blanchieren fixiert die leuchtende Farbe und bewahrt die Textur. Perfekt als Vorbereitung.

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Schritt für Schritt:</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>Großen Topf</strong> mit Wasser zum Kochen bringen. Großzügig salzen (wie Meerwasser).</li>
    <li><strong>Eiswasser</strong> vorbereiten: Schüssel mit Wasser und Eiswürfeln.</li>
    <li>Röschen ins kochende Wasser geben. <strong>NICHT den Deckel drauf!</strong> (Säuren können entweichen → Farbe bleibt grün).</li>
    <li>Genau <strong>2-3 Minuten</strong> kochen. Röschen sollen noch Biss haben.</li>
    <li><strong>Sofort</strong> mit einer Schaumkelle ins Eiswasser umsetzen.</li>
    <li>30 Sekunden im Eiswasser lassen, dann herausnehmen und abtropfen.</li>
  </ol>
</div>

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Warum Eiswasser?</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">Das kalte Wasser stoppt den Garprozess sofort. Ohne Eiswasser gart der Brokkoli durch die Restwärme weiter und wird matschig. Dieses Prinzip heißt "Abschrecken" und ist einer der wichtigsten Profi-Tricks.</p>
</div>

---

### 6. Rösten: Die Geschmacksexplosion

Gerösteter Brokkoli ist eine Offenbarung. Die Hitze karamellisiert die natürlichen Zucker und erzeugt ein nussiges, intensives Aroma.

#### Schritt für Schritt:
1. Röschen und geschälten Strunk in gleichmäßige Stücke schneiden.
2. Mit Olivenöl, Salz und Pfeffer mischen. Optional: Knoblauch, Chiliflocken, Zitronenzeste.
3. Auf einem Backblech **in einer Schicht** verteilen – nicht stapeln! Sonst dämpfen sie statt zu rösten.
4. Bei **220°C** für 20-25 Min rösten, einmal wenden.
5. Fertig, wenn die Spitzen dunkelbraun (nicht schwarz!) sind.

---

### Sicherheitshinweise

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Sicherheit beim Brokkoli:</h4>
  <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-2">
    <li><strong>Der Strunk ist hart!</strong> Beim Schneiden nicht zu viel Kraft aufwenden. Lass das Messer die Arbeit machen.</li>
    <li><strong>Heißes Wasser beim Blanchieren:</strong> Immer eine Schaumkelle benutzen, nie mit den Händen ins Wasser greifen.</li>
    <li><strong>Dampf beim Dämpfen:</strong> Deckel immer von dir weg öffnen, Dampf kann Verbrühungen verursachen.</li>
    <li><strong>Heißes Backblech:</strong> Beim Rösten immer Ofenhandschuhe verwenden.</li>
  </ul>
</div>

---

### Häufige Fehler

<div className="space-y-3 my-4">
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Zu lange kochen</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">DER häufigste Fehler. Brokkoli braucht nur 3-5 Min (Dämpfen) oder 2-3 Min (Blanchieren). Übergarter Brokkoli ist matschig, stinkt nach Schwefel und hat kaum noch Nährstoffe.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Strunk wegwerfen</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Verschwendung des nahrhaftesten und schmackhaftesten Teils! Einfach schälen und verwenden.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Ungleichmäßige Röschen</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Große und kleine Röschen mischen = ungleichmäßiges Garen. Schneide alles auf ähnliche Größe.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Vor dem Schneiden waschen</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Wasser kommt nicht zwischen die dichten Röschen. Erst schneiden, dann waschen.</p>
    </div>
  </div>
</div>

---

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 my-4">
  <h3 className="font-bold text-green-800 dark:text-green-300 mb-4">🎯 Praktische Übung: Brokkoli 3 Wege</h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-4">Kaufe 2 Köpfe Brokkoli und bereite sie auf drei verschiedene Arten zu. Vergleiche Farbe, Textur und Geschmack.</p>
  <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
    <li><strong>Zerteilen:</strong> Schneide einen Kopf in gleichmäßige Röschen. Schäle den Strunk und schneide ihn in Stifte.</li>
    <li><strong>Blanchieren:</strong> Blanchiere die Hälfte der Röschen (2-3 Min + Eiswasser). Prüfe: Sind sie noch knackig? Leuchtend grün?</li>
    <li><strong>Rösten:</strong> Röste die andere Hälfte mit Olivenöl bei 220°C für 20 Min. Sind die Spitzen goldbraun?</li>
    <li><strong>Strunk-Test:</strong> Brate die Strunk-Stifte in Butter an. Wie schmecken sie? Vergleiche mit den Röschen.</li>
    <li><strong>Vergleich:</strong> Probiere blanchiert vs. geröstet vs. roh. Welche Methode bevorzugst du?</li>
  </ol>
</div>
    `,
    en: `
### Broccoli Done Right: Zero Waste, Maximum Flavor 🥦

Broccoli is one of the most nutrient-rich vegetables – yet it's unpopular with many people. Why? Because it's often prepared wrong: cooked too long, mushy, colorless, flavorless. Properly prepared, broccoli is crisp, vibrant green, full of flavor, and incredibly versatile.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500 my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">The Biggest Broccoli Secret</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300"><strong>The stem is NOT waste!</strong> It actually contains more nutrients than the florets and tastes mild and slightly sweet when peeled – similar to kohlrabi. Anyone who throws away the stem is wasting the best part.</p>
</div>

---

### 1. Cutting Florets: The Right Technique

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Step by Step:</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>Hold broccoli upside down</strong> (florets pointing down, stem up).</li>
    <li>Cut floret stems where they meet the main stalk. Work from outside in.</li>
    <li><strong>Don't hack!</strong> Cut cleanly, otherwise florets crumble apart.</li>
    <li>Split large florets: Cut through the stem, not the flower. This keeps the shape.</li>
    <li><strong>Uniform size:</strong> All florets should be similar size (about 3-4 cm). Otherwise small ones overcook while large ones are still raw.</li>
  </ol>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Pro Tip: Broccoli "Steaks"</h4>
  <p className="text-sm text-green-700 dark:text-green-300">Cut the entire broccoli top-to-bottom into 2-3 cm thick slices. You get "steaks" that you can roast in a pan or oven. Looks spectacular and has fantastic roasted flavors!</p>
</div>

---

### 2. Using the Stem: The Underrated Ingredient

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Step by Step:</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>Cut off the <strong>woody bottom end</strong> (about 1-2 cm) – it's fibrous and tough.</li>
    <li><strong>Peel the stem</strong> with a vegetable peeler. The outer layer is woody, the inside is tender.</li>
    <li>Cut the peeled interior into <strong>slices, cubes, or sticks</strong>.</li>
    <li>The stem cooks slightly slower than florets – cut it smaller or add it 2 min earlier.</li>
  </ol>
</div>

**Stem uses:**
- Soups and stews (diced)
- Crudité sticks (batons)
- Pan-fried in butter as a side
- Grated in slaw or salad
- Puréed for cream of broccoli soup

---

### 3. Washing: The Right Timing

<div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Important: Follow the order!</h4>
  <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-2">
    <li><strong>Cut first, then wash.</strong> Washing whole broccoli is ineffective – dirt hides between florets.</li>
    <li>Place cut florets in a bowl of cold water and gently swish.</li>
    <li>Any insects or sand will sink to the bottom.</li>
    <li>Drain on a kitchen towel. <strong>Don't leave in water too long</strong> – vitamins are water-soluble!</li>
  </ul>
</div>

---

### 4. Cooking Methods: The Right Technique for Every Taste

<table className="w-full border-collapse my-4">
  <thead>
    <tr className="bg-gray-100 dark:bg-stone-700">
      <th className="border dark:border-stone-600 p-2 text-left">Method</th>
      <th className="border dark:border-stone-600 p-2 text-left">Time</th>
      <th className="border dark:border-stone-600 p-2 text-left">Result</th>
      <th className="border dark:border-stone-600 p-2 text-left">Ideal for</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border dark:border-stone-600 p-2 font-semibold">Steaming</td>
      <td className="border dark:border-stone-600 p-2">3-5 min</td>
      <td className="border dark:border-stone-600 p-2">Crisp, vibrant green</td>
      <td className="border dark:border-stone-600 p-2">Side dish, healthiest method</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2 font-semibold">Blanching</td>
      <td className="border dark:border-stone-600 p-2">2-3 min + ice water</td>
      <td className="border dark:border-stone-600 p-2">Vibrant green, crisp</td>
      <td className="border dark:border-stone-600 p-2">Prep ahead, salads</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2 font-semibold">Roasting (oven)</td>
      <td className="border dark:border-stone-600 p-2">20-25 min at 220°C/425°F</td>
      <td className="border dark:border-stone-600 p-2">Golden, caramelized, nutty</td>
      <td className="border dark:border-stone-600 p-2">Side dish, salad, pasta</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2 font-semibold">Stir-frying</td>
      <td className="border dark:border-stone-600 p-2">5-7 min high heat</td>
      <td className="border dark:border-stone-600 p-2">Lightly browned, crisp</td>
      <td className="border dark:border-stone-600 p-2">Wok dishes, quick sides</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2 font-semibold">Raw</td>
      <td className="border dark:border-stone-600 p-2">-</td>
      <td className="border dark:border-stone-600 p-2">Crunchy, fresh, mild</td>
      <td className="border dark:border-stone-600 p-2">Salads, crudités with dip</td>
    </tr>
  </tbody>
</table>

---

### 5. Blanching: The Professional Technique in Detail

Blanching locks in vibrant color and preserves texture. Perfect for advance preparation.

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Step by Step:</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>Bring a <strong>large pot</strong> of water to a boil. Salt generously (like seawater).</li>
    <li>Prepare <strong>ice water</strong>: bowl with water and ice cubes.</li>
    <li>Add florets to boiling water. <strong>Don't put the lid on!</strong> (Acids can escape → color stays green).</li>
    <li>Cook exactly <strong>2-3 minutes</strong>. Florets should still have bite.</li>
    <li><strong>Immediately</strong> transfer with a slotted spoon to the ice water.</li>
    <li>Leave 30 seconds in ice water, then remove and drain.</li>
  </ol>
</div>

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Why Ice Water?</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">The cold water stops the cooking process immediately. Without ice water, broccoli continues cooking from residual heat and becomes mushy. This principle is called "shocking" and is one of the most important professional tricks.</p>
</div>

---

### 6. Roasting: The Flavor Explosion

Roasted broccoli is a revelation. The heat caramelizes natural sugars and creates a nutty, intense aroma.

#### Step by Step:
1. Cut florets and peeled stem into uniform pieces.
2. Toss with olive oil, salt, and pepper. Optional: garlic, chili flakes, lemon zest.
3. Spread on a baking sheet **in a single layer** – don't stack! Otherwise they steam instead of roast.
4. Roast at **220°C (425°F)** for 20-25 min, flip once.
5. Done when tips are dark brown (not black!).

---

### Safety Tips

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Broccoli Safety:</h4>
  <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-2">
    <li><strong>The stem is hard!</strong> Don't use too much force when cutting. Let the knife do the work.</li>
    <li><strong>Hot water when blanching:</strong> Always use a slotted spoon, never reach into the water with your hands.</li>
    <li><strong>Steam when steaming:</strong> Always open the lid away from you, steam can cause scalds.</li>
    <li><strong>Hot baking sheet:</strong> Always use oven mitts when roasting.</li>
  </ul>
</div>

---

### Common Mistakes

<div className="space-y-3 my-4">
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Cooking too long</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">THE most common mistake. Broccoli needs only 3-5 min (steaming) or 2-3 min (blanching). Overcooked broccoli is mushy, smells of sulfur, and has barely any nutrients left.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Throwing away the stem</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Wasting the most nutritious and flavorful part! Just peel and use it.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Uneven florets</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Mixing large and small florets = uneven cooking. Cut everything to similar size.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Washing before cutting</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Water doesn't penetrate the dense florets. Cut first, then wash.</p>
    </div>
  </div>
</div>

---

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 my-4">
  <h3 className="font-bold text-green-800 dark:text-green-300 mb-4">🎯 Practice Exercise: Broccoli 3 Ways</h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-4">Buy 2 heads of broccoli and prepare them three different ways. Compare color, texture, and flavor.</p>
  <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
    <li><strong>Break down:</strong> Cut one head into uniform florets. Peel the stem and cut into sticks.</li>
    <li><strong>Blanch:</strong> Blanch half the florets (2-3 min + ice water). Check: Still crisp? Vibrant green?</li>
    <li><strong>Roast:</strong> Roast the other half with olive oil at 220°C/425°F for 20 min. Are the tips golden?</li>
    <li><strong>Stem test:</strong> Pan-fry the stem sticks in butter. How do they taste? Compare with florets.</li>
    <li><strong>Compare:</strong> Taste blanched vs. roasted vs. raw. Which method do you prefer?</li>
  </ol>
</div>
    `
  },

  task: {
    de: {
      title: 'Brokkoli 3 Wege',
      description: 'Bereite Brokkoli auf drei Arten zu und vergleiche die Ergebnisse.',
      checklist: [
        { text: 'Schneide einen Kopf Brokkoli in gleichmäßige Röschen (ca. 3-4 cm).' },
        { text: 'Schäle den Strunk und schneide ihn in Stifte.' },
        { text: 'Blanchiere Röschen: 2-3 Min kochen + Eiswasser. Prüfe Farbe und Textur.' },
        { text: 'Röste Röschen: 20 Min bei 220°C mit Olivenöl. Sind die Spitzen goldbraun?' },
        { text: 'Brate Strunk-Stifte in Butter an. Schmecke den Unterschied zu den Röschen.' },
        { text: 'Geschmacksvergleich: blanchiert vs. geröstet vs. roh.' }
      ]
    },
    en: {
      title: 'Broccoli 3 Ways',
      description: 'Prepare broccoli three different ways and compare results.',
      checklist: [
        { text: 'Cut one broccoli head into uniform florets (about 3-4 cm).' },
        { text: 'Peel the stem and cut into sticks.' },
        { text: 'Blanch florets: 2-3 min boil + ice water. Check color and texture.' },
        { text: 'Roast florets: 20 min at 220°C/425°F with olive oil. Are tips golden?' },
        { text: 'Pan-fry stem sticks in butter. Taste the difference from florets.' },
        { text: 'Taste comparison: blanched vs. roasted vs. raw.' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Warum sollte man den Brokkoli-Strunk nicht wegwerfen?', back: 'Er enthält mehr Nährstoffe als die Röschen! Geschält schmeckt er mild und süßlich, ähnlich wie Kohlrabi.' },
      { front: 'Was ist Blanchieren?', back: 'Gemüse kurz in kochendem Salzwasser garen (2-3 Min), dann sofort in Eiswasser "abschrecken". Bewahrt Farbe, Textur und Nährstoffe.' },
      { front: 'Warum kein Deckel beim Blanchieren von Brokkoli?', back: 'Ohne Deckel können Säuren entweichen, die sonst die grüne Farbe zerstören würden. Ergebnis: leuchtend grüner Brokkoli.' },
      { front: 'Wie röstet man Brokkoli richtig?', back: 'Röschen mit Olivenöl, Salz, Pfeffer mischen. In einer Schicht auf Backblech, 220°C, 20-25 Min. Nicht stapeln (sonst dämpfen).' },
      { front: 'Wann Brokkoli waschen?', back: 'Erst NACH dem Schneiden. Ganzer Brokkoli lässt sich schlecht waschen – Schmutz sitzt zwischen den Röschen.' }
    ],
    en: [
      { front: 'Why not throw away the broccoli stem?', back: 'It has more nutrients than the florets! Peeled, it tastes mild and sweet, similar to kohlrabi.' },
      { front: 'What is blanching?', back: 'Briefly cook vegetables in boiling salted water (2-3 min), then immediately "shock" in ice water. Preserves color, texture, and nutrients.' },
      { front: 'Why no lid when blanching broccoli?', back: 'Without a lid, acids can escape that would otherwise destroy the green color. Result: vibrant green broccoli.' },
      { front: 'How to roast broccoli properly?', back: 'Toss florets with olive oil, salt, pepper. Single layer on baking sheet, 220°C/425°F, 20-25 min. Don\'t stack (otherwise they steam).' },
      { front: 'When to wash broccoli?', back: 'AFTER cutting. Whole broccoli is hard to wash – dirt hides between the dense florets.' }
    ]
  }
};
