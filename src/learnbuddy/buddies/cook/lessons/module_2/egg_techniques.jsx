import React from 'react';

export const eggTechniquesLesson = {
  id: 'c2_m2_eggs',
  title: { 
    en: '2.8 Mastering Eggs', 
    de: '2.8 Eier-Techniken (Basis)' 
  },
  description: { 
    en: 'The chef\'s hat has 100 folds, representing 100 ways to cook an egg. Let\'s learn the most important ones.', 
    de: 'Die Kochmütze hat 100 Falten für 100 Arten, ein Ei zu kochen. Wir lernen die wichtigsten.' 
  },
  category: 'techniques',
  
  content: {
    de: `
### Das unglaubliche Ei: Meistertechniken 🥚

Eier sind das vielseitigste Lebensmittel in der Küche – sie binden Saucen, lockern Teige, emulgieren Dressings und sind allein schon ein Star. Die Kochmütze hat angeblich 100 Falten für 100 Ei-Zubereitungsarten. Wir konzentrieren uns auf die Basics, aber mit Tiefe: Warum funktioniert es, häufige Fehler und wie du es perfektionierst.

<div className="bg-amber-50 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">Warum Eier verstehen?</h3>
  <p>Eier bestehen aus Eiweiß (Protein, das bei Hitze stockt) und Eigelb (Fett und Emulgator). Falsche Hitze macht sie gummiartig oder trocken. Richtig gemacht, sind sie cremig und lecker – und günstig!</p>
</div>

---

### 1. Gekochte Eier: Das Timing-Spiel

Das perfekte gekochte Ei hängt von exakter Zeit ab. Verwende Eier Größe M bei Raumtemperatur für beste Ergebnisse.

#### Garstufen und Technik:
- **Weich (5 Min):** Eiweiß glibberig, Eigelb flüssig – ideal für Dip-Eier.
- **Wachsweich (6-7 Min):** Eiweiß fest, Eigelb cremig – der Alleskönner für Salate oder Frühstück.
- **Hart (10 Min):** Alles fest, aber saftig – für Eiersalat.
- **Überkocht (12+ Min):** Grau-grüner Rand (Schwefelreaktion), trocken – vermeiden!

#### Schritt-für-Schritt:
1. Bringe Wasser zum Kochen (Salz hinzufügen optional).
2. Gib Eier mit Löffel hinein (verhindert Risse).
3. Starte Timer sofort.
4. Nach Garzeit: In Eiswasser abschrecken (stoppt Garen, erleichtert Schälen).
5. Schälen: Klopfe auf harte Fläche, rolle, ziehe Schale ab (unter Wasser hilft).

<ul className="list-disc list-inside space-y-2 my-4">
  <li><strong>Tipp:</strong> Ältere Eier (1-2 Wochen) schälen besser – frische kleben an der Schale.</li>
  <li><strong>Warum abschrecken?</strong> Es kontraktiert das Eiweiß und löst die Schale.</li>
</ul>

<div className="bg-red-50 p-4 rounded-lg">
  <h3 className="font-bold mb-2">Häufiger Fehler</h3>
  <p>Eier in kaltes Wasser geben – ungenaue Garzeit, da Aufheizen variiert.</p>
</div>

---

### 2. Rührei: Cremig vs. Flockig

Rührei kann luxuriös cremig oder rustikal flockig sein – wähle deine Methode.

#### Varianten:
- **Französisch (Low & Slow):** Niedrige Hitze, ständig rühren – ergibt Seidencreme.
- **Amerikanisch (High & Fast):** Hohe Hitze, weniger rühren – große, fluffige Flocken.

#### Schritt-für-Schritt (Cremig):
1. Eier verquirlen mit Salz/Pfeffer (optional Milch/Sahne für Cremigkeit).
2. Pfanne bei mittlerer Hitze mit Butter erhitzen.
3. Eier rein, sofort rühren (Holzlöffel oder Gummispatel).
4. Vom Herd nehmen, wenn noch leicht feucht – Restwärme vollendet es.

<table className="w-full border-collapse my-4">
  <thead>
    <tr className="bg-gray-100">
      <th className="border p-2">Stil</th>
      <th className="border p-2">Hitze</th>
      <th className="border p-2">Ergebnis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-2">Französisch</td>
      <td className="border p-2">Niedrig</td>
      <td className="border p-2">Cremig, fein</td>
    </tr>
    <tr>
      <td className="border p-2">Amerikanisch</td>
      <td className="border p-2">Hoch</td>
      <td className="border p-2">Flockig, rustikal</td>
    </tr>
  </tbody>
</table>

<div className="bg-blue-50 p-4 rounded-lg">
  <h3 className="font-bold mb-2">Tipp für Perfektion</h3>
  <p>Füge Kräuter oder Käse am Ende hinzu – Hitze zerstört Aromen.</p>
</div>

---

### 3. Spiegelei: Sunny Side Up oder Over Easy

Einfach, aber knifflig – der Rand knusprig, das Eigelb flüssig.

#### Schritt-für-Schritt:
1. Pfanne bei mittlerer Hitze erhitzen (Butter oder Öl).
2. Ei aufschlagen, vorsichtig reinlassen.
3. Für Sunny Side Up: Nicht wenden, ggf. Deckel drauf für festes Weiß.
4. Für Over Easy: Nach 2 Min wenden, 30 Sek garen.

<ol className="list-decimal list-inside space-y-2 my-4">
  <li><strong>Warum mittlere Hitze?</strong> Zu hoch: Weiß brennt, Eigelb bleibt roh.</li>
  <li><strong>Beispiel:</strong> Serviere auf Toast mit Avocado für ein schnelles Frühstück.</li>
</ol>

---

### 4. Omelett: Gefaltet und gefüllt

Omelett ist ein Ei-Pfannkuchen – französisch cremig oder amerikanisch gebräunt.

#### Schritt-für-Schritt (Französisch):
1. Eier verquirlen, Pfanne bei mittlerer Hitze mit Butter.
2. Eier rein, rühren bis halb gestockt.
3. Füllung (Käse, Schinken) in die Mitte, falten.
4. Auf Teller gleiten lassen.

<div className="bg-green-50 p-4 rounded-lg">
  <h3 className="font-bold mb-2">Warum rühren?</h3>
  <p>Erzeugt Cremigkeit – ohne Rühren wird es ein flaches Ei.</p>
</div>

---

### 5. Eier trennen: Für Creme und Schaum

Viele Rezepte brauchen nur Eigelb oder Eiweiß.

#### Methoden:
- **Hand:** Ei in Hand gleiten lassen, Weiß durch Finger laufen.
- **Schale:** Dotter zwischen Schalenhälften hin- und herschieben.

<ul className="list-disc list-inside space-y-2 my-4">
  <li><strong>Tipp:</strong> Kaltes Ei trennt sich leichter.</li>
  <li><strong>Warum wichtig?</strong> Eigelb emulgiert (Mayo), Eiweiß schäumt (Baiser).</li>
</ul>

---

<div className="bg-green-50 p-6 rounded-xl border-2 border-green-300 my-4">
  <h3 className="font-bold text-green-800 mb-4">🎯 Praktische Übungen</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>Koche 3 Eier: 5 Min (weich), 7 Min (wachsweich), 10 Min (hart). Schäle und vergleiche Konsistenz.</li>
    <li>Mache cremiges Rührei: Rühre langsam, nimm früh vom Herd. Füge Kräuter hinzu und probiere.</li>
    <li>Brate ein Spiegelei: Erreiche knusprigen Rand und flüssiges Eigelb. Experimentiere mit Hitze.</li>
    <li>Baue ein Omelett: Fülle mit Käse/Schinken, falte perfekt. Übe das Gleiten auf den Teller.</li>
    <li>Trenne 5 Eier: Verwende Hand-Methode. Mache aus Eiweiß Schaum, aus Eigelb eine Creme.</li>
  </ol>
</div>

### Zusammenfassung
Eier sind empfindlich – meistere Hitze und Timing für Perfektion. Übe diese Basics, und du hast ein Repertoire für unzählige Gerichte!
  `,
    en: `
### The Incredible Egg: Mastering Techniques 🥚

Eggs are the most versatile food in the kitchen – they bind sauces, lighten doughs, emulsify dressings, and shine on their own. The chef's hat supposedly has 100 folds for 100 ways to cook an egg. We focus on basics but with depth: Why it works, common mistakes, and how to perfect it.

<div className="bg-amber-50 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">Why Understand Eggs?</h3>
  <p>Eggs consist of white (protein that sets with heat) and yolk (fat and emulsifier). Wrong heat makes them rubbery or dry. Done right, they're creamy and delicious – and cheap!</p>
</div>

---

### 1. Boiled Eggs: The Timing Game

The perfect boiled egg depends on precise time. Use room-temp size M eggs for best results.

#### Doneness Levels and Technique:
- **Soft (5 Min):** White runny, yolk liquid – great for dipping.
- **Medium (6-7 Min):** White firm, yolk creamy – all-rounder for salads or breakfast.
- **Hard (10 Min):** All firm but juicy – for egg salad.
- **Overcooked (12+ Min):** Gray-green rim (sulfur reaction), dry – avoid!

#### Step-by-Step:
1. Bring water to boil (add salt optional).
2. Lower eggs in with spoon (prevents cracks).
3. Start timer immediately.
4. After time: Shock in ice water (stops cooking, aids peeling).
5. Peel: Tap on hard surface, roll, pull shell off (under water helps).

<ul className="list-disc list-inside space-y-2 my-4">
  <li><strong>Tip:</strong> Older eggs (1-2 weeks) peel better – fresh ones stick to shell.</li>
  <li><strong>Why shock?</strong> Contracts white and loosens shell.</li>
</ul>

<div className="bg-red-50 p-4 rounded-lg">
  <h3 className="font-bold mb-2">Common Mistake</h3>
  <p>Putting eggs in cold water – inaccurate timing as heating varies.</p>
</div>

---

### 2. Scrambled Eggs: Creamy vs. Fluffy

Scrambled can be luxurious creamy or rustic fluffy – choose your method.

#### Variations:
- **French (Low & Slow):** Low heat, constant stirring – yields silky custard.
- **American (High & Fast):** High heat, less stirring – big, fluffy curds.

#### Step-by-Step (Creamy):
1. Whisk eggs with salt/pepper (optional milk/cream for creaminess).
2. Heat pan on medium with butter.
3. Add eggs, stir immediately (wooden spoon or rubber spatula).
4. Remove from heat when still slightly wet – residual heat finishes.

<table className="w-full border-collapse my-4">
  <thead>
    <tr className="bg-gray-100">
      <th className="border p-2">Style</th>
      <th className="border p-2">Heat</th>
      <th className="border p-2">Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-2">French</td>
      <td className="border p-2">Low</td>
      <td className="border p-2">Creamy, fine</td>
    </tr>
    <tr>
      <td className="border p-2">American</td>
      <td className="border p-2">High</td>
      <td className="border p-2">Fluffy, rustic</td>
    </tr>
  </tbody>
</table>

<div className="bg-blue-50 p-4 rounded-lg">
  <h3 className="font-bold mb-2">Tip for Perfection</h3>
  <p>Add herbs or cheese at end – heat destroys flavors.</p>
</div>

---

### 3. Fried Egg: Sunny Side Up or Over Easy

Simple but tricky – crisp edges, runny yolk.

#### Step-by-Step:
1. Heat pan on medium (butter or oil).
2. Crack egg in carefully.
3. For Sunny Side Up: Don't flip, optional lid for set white.
4. For Over Easy: Flip after 2 min, cook 30 sec.

<ol className="list-decimal list-inside space-y-2 my-4">
  <li><strong>Why medium heat?</strong> Too high: White burns, yolk stays raw.</li>
  <li><strong>Example:</strong> Serve on toast with avocado for quick breakfast.</li>
</ol>

---

### 4. Omelet: Folded and Filled

Omelet is an egg pancake – French creamy or American browned.

#### Step-by-Step (French):
1. Whisk eggs, heat pan on medium with butter.
2. Add eggs, stir until half set.
3. Add filling (cheese, ham) to center, fold.
4. Slide onto plate.

<div className="bg-green-50 p-4 rounded-lg">
  <h3 className="font-bold mb-2">Why Stir?</h3>
  <p>Creates creaminess – without stirring, it's a flat egg.</p>
</div>

---

### 5. Separating Eggs: For Creams and Foams

Many recipes need yolk or white only.

#### Methods:
- **Hand:** Let egg slide into hand, white runs through fingers.
- **Shell:** Shift yolk between shell halves.

<ul className="list-disc list-inside space-y-2 my-4">
  <li><strong>Tip:</strong> Cold egg separates easier.</li>
  <li><strong>Why important?</strong> Yolk emulsifies (mayo), white foams (meringue).</li>
</ul>

---

<div className="bg-green-50 p-6 rounded-xl border-2 border-green-300 my-4">
  <h3 className="font-bold text-green-800 mb-4">🎯 Practice Exercises</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>Boil 3 eggs: 5 min (soft), 7 min (medium), 10 min (hard). Peel and compare texture.</li>
    <li>Make creamy scrambled: Stir slowly, remove early. Add herbs and taste.</li>
    <li>Fry a fried egg: Achieve crisp edge and runny yolk. Experiment with heat.</li>
    <li>Build an omelet: Fill with cheese/ham, fold perfectly. Practice sliding to plate.</li>
    <li>Separate 5 eggs: Use hand method. Whip whites to foam, make custard from yolks.</li>
  </ol>
</div>

### Summary
Eggs are sensitive – master heat and timing for perfection. Practice these basics for a repertoire of countless dishes!
  `
  },

  task: {
    de: {
      title: 'Eier-Masterclass',
      description: 'Perfektioniere dein Frühstücksei.',
      checklist: [
        { text: 'Koche ein wachsweiches Ei (genau 6:30 Minuten in kochendes Wasser).' },
        { text: 'Mache ein cremiges Rührei: Nimm es früher vom Herd, als du denkst!' },
        { text: 'Trenne ein Ei mit der Hand-Methode.' }
      ]
    },
    en: {
      title: 'Egg Masterclass',
      description: 'Perfect your breakfast egg.',
      checklist: [
        { text: 'Boil a soft egg (exactly 6:30 mins in boiling water).' },
        { text: 'Make creamy scrambled eggs: Take off heat sooner than you think!' },
        { text: 'Separate an egg using the hand method.' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Wie lange kocht ein perfektes weiches Ei?', back: 'Ca. 6 bis 7 Minuten (ins kochende Wasser gelegt).' },
      { front: 'Wann nimmt man Rührei vom Herd?', back: 'Wenn es noch leicht feucht/glänzend aussieht. Die Resthitze gart es fertig.' },
      { front: 'Was ist der grüne Rand beim hartgekochten Ei?', back: 'Zeichen für Überkochen (Schwefelreaktion). Das Ei ist trocken und schmeckt schwefelig.' }
    ],
    en: [
      { front: 'How long for a perfect soft boiled egg?', back: 'Approx. 6 to 7 minutes (put into boiling water).' },
      { front: 'When to take scrambled eggs off heat?', back: 'When still looking slightly wet/shiny. Residual heat finishes it.' },
      { front: 'What is the green ring in hard boiled eggs?', back: 'Sign of overcooking (Sulfur reaction). Egg is dry and tastes sulfury.' }
    ]
  }
};

