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
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-amber-700 dark:text-amber-400 mb-4">Der Beilagen-Himmel 🥔</h2>
          <p className="text-lg leading-relaxed">
            Du kannst Reis und Nudeln kochen (Modul 2.7). Jetzt machen wir daraus Gerichte, die selbst die 
            Hauptspeise in den Schatten stellen können. Eine perfekte Beilage kann ein einfaches Gericht zum 
            Festmahl machen.
          </p>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
          <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-3">
            Warum Beilagen wichtig sind
          </h3>
          <p className="mb-3">
            Beilagen sind nicht "Füllmaterial". Sie:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Balancieren den Teller (Textur, Geschmack, Farbe)</li>
            <li>Machen satt (Kohlenhydrate = Energie)</li>
            <li>Binden Saucen (Kartoffeln, Reis, Brot)</li>
            <li>Können selbst zum Star werden</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Kartoffeln - Die Vielseitigen
          </h3>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Kartoffelpüree (Der Seelentröster)</h4>
              <p className="mb-3">
                <strong>Die Regeln für perfektes Püree:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
                <li><strong>Kartoffelsorte:</strong> Mehlig kochend! (Zerfallen besser, werden fluffiger)</li>
                <li><strong>Stampfen:</strong> NIE mit dem Pürierstab (wird Kleister!). Nimm einen Stampfer oder eine Kartoffelpresse</li>
                <li><strong>Fett:</strong> Viel Butter (mindestens 50g auf 1kg Kartoffeln)</li>
                <li><strong>Flüssigkeit:</strong> Warme Milch (kalte Milch kühlt das Püree aus und macht es grau)</li>
                <li><strong>Würzen:</strong> Salz, Pfeffer, Muskatnuss</li>
              </ol>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <p className="font-semibold mb-2">Die Technik:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm ml-4">
                  <li>Kartoffeln kochen, abgießen, kurz ausdampfen lassen</li>
                  <li>Stampfen (nicht pürieren!)</li>
                  <li>Butter unterrühren (schmilzt durch die Hitze)</li>
                  <li>Warme Milch nach und nach unterrühren, bis gewünschte Konsistenz</li>
                  <li>Abschmecken</li>
                </ol>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Bratkartoffeln (Die Knusper-Challenge)</h4>
              <p className="mb-3">
                <strong>Warum werden sie oft matschig?</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong>Pfanne zu voll:</strong> Sie dämpfen übereinander statt zu braten</li>
                <li><strong>Zu viel Bewegung:</strong> Lass sie liegen! Nur wenden, wenn sie braun sind</li>
                <li><strong>Falsche Kartoffeln:</strong> Festkochend verwenden (zerfallen nicht)</li>
              </ul>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <p className="font-semibold mb-2">Der Trick:</p>
                <p className="mb-3">
                  Nimm gekochte Kartoffeln vom Vortag! Die Stärke hat sich verändert (retrogradiert), 
                  sie werden viel knuspriger.
                </p>
                <p className="font-semibold mb-2">Alternative (aus rohen Kartoffeln):</p>
                <ol className="list-decimal list-inside space-y-1 text-sm ml-4">
                  <li>Kartoffelscheiben in Pfanne mit wenig Öl, Deckel drauf</li>
                  <li>Bei mittlerer Hitze 10-15 Min garen (dämpfen)</li>
                  <li>Deckel ab, Hitze hoch, knusprig braten</li>
                  <li>Nur einmal wenden</li>
                </ol>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Pommes Frites (Doppelt frittiert)</h4>
              <p className="mb-3">
                <strong>Das Geheimnis knuspriger Pommes: Zweimal frittieren!</strong>
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li><strong>Vorbereitung:</strong> Kartoffeln in Stifte schneiden, in Wasser legen (Stärke auswaschen), abtrocknen</li>
                  <li><strong>1. Frittieren:</strong> Bei 160°C für 5-7 Min (gart durch, keine Farbe)</li>
                  <li><strong>Pause:</strong> Auf Küchenpapier abtropfen, abkühlen lassen</li>
                  <li><strong>2. Frittieren:</strong> Bei 180°C für 2-3 Min (wird knusprig und goldbraun)</li>
                  <li><strong>Salzen:</strong> Sofort nach dem Rausholen</li>
                </ol>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Kartoffelgratin</h4>
              <p className="mb-3">
                <strong>Cremig, käsig, überbacken - Luxus pur.</strong>
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <p className="mb-2"><strong>Zutaten:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4 mb-3">
                  <li>1kg festkochende Kartoffeln (in dünne Scheiben)</li>
                  <li>400ml Sahne</li>
                  <li>Knoblauch, Muskatnuss, Salz, Pfeffer</li>
                  <li>Geriebener Käse (Gruyère, Emmentaler)</li>
                </ul>
                <p className="mb-2"><strong>Technik:</strong></p>
                <ol className="list-decimal list-inside space-y-1 text-sm ml-4">
                  <li>Form mit Knoblauch ausreiben</li>
                  <li>Kartoffelscheiben schichten, zwischen den Schichten würzen</li>
                  <li>Sahne drüber gießen</li>
                  <li>Käse drüber streuen</li>
                  <li>Bei 180°C für 60-75 Min backen (bis goldbraun und Kartoffeln weich)</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Reis - Die Verwandlungskünstler
          </h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Risotto (Die Geduldsprobe)</h4>
              <p className="mb-3">
                <strong>Reis, der cremig ist, aber noch Biss hat.</strong>
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg mb-3">
                <p className="mb-2"><strong>Die 5 Schritte:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li><strong>Reis:</strong> Risottoreis (Arborio/Carnaroli). NICHT waschen! (Wir brauchen die Stärke)</li>
                  <li><strong>Anschwitzen:</strong> Zwiebeln + Reis in Butter glasig dünsten (2-3 Min)</li>
                  <li><strong>Ablöschen:</strong> Mit Weißwein (Säure bringt Frische!)</li>
                  <li><strong>Brühe:</strong> Heiße Brühe Kellenweise zugeben, ständig rühren. Der Reis reibt aneinander und gibt Stärke ab → Cremigkeit</li>
                  <li><strong>Mantecare:</strong> Vom Herd nehmen, kalte Butter + Parmesan einrühren (macht es seidig)</li>
                </ol>
              </div>
              <p className="text-sm italic">
                💡 <strong>Wichtig:</strong> Ständig rühren! Das ist die Arbeit, die das Risotto cremig macht.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Pilaw (Türkischer Reis)</h4>
              <p className="mb-3">
                <strong>Reis, der körnig und aromatisch ist.</strong>
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Reis in Butter anbraten (glasig, leicht nussig)</li>
                  <li>Mit heißer Brühe aufgießen (1:1.5 Verhältnis)</li>
                  <li>Deckel drauf, bei niedriger Hitze quellen lassen (15-20 Min)</li>
                  <li>Nicht umrühren! (Sonst wird er matschig)</li>
                </ol>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Gebratener Reis (Asiatisch)</h4>
              <p className="mb-3">
                <strong>Der beste Weg, Reste zu verwerten.</strong>
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <p className="mb-2"><strong>Trick:</strong> Verwende Reis vom Vortag (trocknet aus, wird körniger)</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Wok/Pfanne sehr heiß</li>
                  <li>Öl rein, Ei verquirlen und rühren (Rührei)</li>
                  <li>Gemüse (Zwiebeln, Erbsen, Karotten) kurz anbraten</li>
                  <li>Reis dazu, alles durchbraten</li>
                  <li>Mit Sojasauce würzen</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Nudeln & Teigwaren
          </h3>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Selbstgemachte Pasta</h4>
              <p className="mb-3">
                <strong>Frische Pasta ist eine andere Welt als getrocknete.</strong>
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <p className="mb-2"><strong>Basis-Teig:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                  <li>100g Mehl (Typ 405 oder 00) + 1 Ei (Faustregel)</li>
                  <li>Prise Salz</li>
                </ul>
                <p className="mb-2"><strong>Technik:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Mehl auf Arbeitsfläche, Mulde formen, Ei rein</li>
                  <li>Mit Gabel verquirlen, dann kneten (10-15 Min, bis glatt und elastisch)</li>
                  <li>In Frischhaltefolie wickeln, 30 Min ruhen lassen</li>
                  <li>Ausrollen (dünn!) mit Nudelmaschine oder Nudelholz</li>
                  <li>Schneiden (Tagliatelle, Fettuccine, etc.)</li>
                  <li>In kochendem Salzwasser 2-3 Min kochen</li>
                </ol>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Spätzle (Schwäbische Spezialität)</h4>
              <p className="mb-3">
                <strong>Der einfachste Teig der Welt.</strong>
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <p className="mb-2"><strong>Teig:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                  <li>Pro 100g Mehl → 1 Ei</li>
                  <li>Prise Salz</li>
                  <li>Etwas Wasser (bis Teig zähflüssig ist)</li>
                </ul>
                <p className="mb-2"><strong>Technik:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Alle Zutaten verrühren, bis Teig Blasen wirft (5 Min schlagen)</li>
                  <li>Durch Spätzlesieb/Spätzlehobel in kochendes Salzwasser drücken</li>
                  <li>Wenn sie oben schwimmen, sind sie fertig (1-2 Min)</li>
                  <li>Mit Schaumkelle rausholen, abtropfen</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">🎯 Die goldenen Regeln für Beilagen</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-2xl mr-3">1️⃣</span>
              <span><strong>Timing:</strong> Beilagen müssen fertig sein, wenn das Hauptgericht fertig ist</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">2️⃣</span>
              <span><strong>Würzen:</strong> Beilagen brauchen Salz! Kartoffeln, Reis, Nudeln sind fade ohne</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">3️⃣</span>
              <span><strong>Textur:</strong> Knusprig (Bratkartoffeln), cremig (Püree), körnig (Pilaw) - Abwechslung ist wichtig</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">4️⃣</span>
              <span><strong>Fett:</strong> Butter, Öl, Sahne - Beilagen brauchen Fett für Geschmack</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-semibold">Wähle 3 verschiedene Beilagen und meistere sie:</p>
          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>
              <strong>Kartoffelpüree:</strong> Mehlige Kartoffeln, stampfen (nicht pürieren!), mit Butter und warmer Milch cremig rühren
            </li>
            <li>
              <strong>Risotto:</strong> Reis anschwitzen, mit Brühe nach und nach aufgießen, ständig rühren, am Ende "Mantecare"
            </li>
            <li>
              <strong>Bratkartoffeln:</strong> Gekochte Kartoffeln vom Vortag in heißer Pfanne knusprig braten (wenig bewegen!)
            </li>
          </ol>
          <p className="mt-4 text-sm">
            <strong>Ziel:</strong> Jede Beilage sollte so gut sein, dass sie auch alleine gegessen werden könnte.
          </p>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-amber-700 dark:text-amber-400 mb-4">Side Dish Heaven 🥔</h2>
          <p className="text-lg leading-relaxed">
            You can cook rice and pasta (Module 2.7). Now let's make dishes that can even outshine the main course. 
            A perfect side dish can turn a simple meal into a feast.
          </p>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
          <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-3">
            Why Sides Matter
          </h3>
          <p className="mb-3">
            Sides are not "filler". They:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Balance the plate (texture, flavor, color)</li>
            <li>Provide satiety (carbs = energy)</li>
            <li>Bind sauces (potatoes, rice, bread)</li>
            <li>Can become the star themselves</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Potatoes - The Versatile Ones
          </h3>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Mashed Potatoes (Comfort Food)</h4>
              <p className="mb-3">
                <strong>Rules for Perfect Mash:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
                <li><strong>Potato Type:</strong> Starchy/Floury! (Break down better, fluffier)</li>
                <li><strong>Mashing:</strong> NEVER use a blender (becomes glue!). Use a masher or ricer</li>
                <li><strong>Fat:</strong> Lots of butter (at least 50g per 1kg potatoes)</li>
                <li><strong>Liquid:</strong> Warm milk (cold milk cools mash and turns it gray)</li>
                <li><strong>Season:</strong> Salt, pepper, nutmeg</li>
              </ol>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <p className="font-semibold mb-2">The Technique:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm ml-4">
                  <li>Cook potatoes, drain, let steam off briefly</li>
                  <li>Mash (don't blend!)</li>
                  <li>Stir in butter (melts from heat)</li>
                  <li>Gradually stir in warm milk until desired consistency</li>
                  <li>Season to taste</li>
                </ol>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Roast Potatoes (The Crispy Challenge)</h4>
              <p className="mb-3">
                <strong>Why are they often mushy?</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong>Pan too full:</strong> They steam instead of fry</li>
                <li><strong>Too much movement:</strong> Let them sit! Only flip when brown</li>
                <li><strong>Wrong potatoes:</strong> Use waxy ones (don't fall apart)</li>
              </ul>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <p className="font-semibold mb-2">The Trick:</p>
                <p className="mb-3">
                  Use boiled potatoes from the day before! The starch has changed (retrogradation), 
                  they get much crispier.
                </p>
                <p className="font-semibold mb-2">Alternative (from raw):</p>
                <ol className="list-decimal list-inside space-y-1 text-sm ml-4">
                  <li>Potato slices in pan with little oil, lid on</li>
                  <li>Cook at medium heat 10-15 min (steam)</li>
                  <li>Lid off, heat up, fry crispy</li>
                  <li>Only flip once</li>
                </ol>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">French Fries (Double Fried)</h4>
              <p className="mb-3">
                <strong>The secret to crispy fries: Fry twice!</strong>
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li><strong>Prep:</strong> Cut potatoes into sticks, soak in water (wash out starch), dry</li>
                  <li><strong>1st Fry:</strong> At 160°C for 5-7 min (cooks through, no color)</li>
                  <li><strong>Break:</strong> Drain on paper towels, let cool</li>
                  <li><strong>2nd Fry:</strong> At 180°C for 2-3 min (gets crispy and golden)</li>
                  <li><strong>Salt:</strong> Immediately after removing</li>
                </ol>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Potato Gratin</h4>
              <p className="mb-3">
                <strong>Creamy, cheesy, baked - pure luxury.</strong>
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <p className="mb-2"><strong>Ingredients:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4 mb-3">
                  <li>1kg waxy potatoes (sliced thin)</li>
                  <li>400ml cream</li>
                  <li>Garlic, nutmeg, salt, pepper</li>
                  <li>Grated cheese (Gruyère, Emmental)</li>
                </ul>
                <p className="mb-2"><strong>Technique:</strong></p>
                <ol className="list-decimal list-inside space-y-1 text-sm ml-4">
                  <li>Rub dish with garlic</li>
                  <li>Layer potato slices, season between layers</li>
                  <li>Pour cream over</li>
                  <li>Sprinkle cheese on top</li>
                  <li>Bake at 180°C for 60-75 min (until golden and potatoes soft)</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Rice - The Shape-Shifters
          </h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Risotto (The Patience Test)</h4>
              <p className="mb-3">
                <strong>Rice that is creamy but still has bite.</strong>
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg mb-3">
                <p className="mb-2"><strong>The 5 Steps:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li><strong>Rice:</strong> Risotto rice (Arborio/Carnaroli). DON'T wash! (We need the starch)</li>
                  <li><strong>Sweat:</strong> Onions + rice in butter until translucent (2-3 min)</li>
                  <li><strong>Deglaze:</strong> With white wine (acid brings freshness!)</li>
                  <li><strong>Broth:</strong> Add hot broth ladle by ladle, stir constantly. Rice rubs together and releases starch → creaminess</li>
                  <li><strong>Mantecare:</strong> Off heat, stir in cold butter + Parmesan (makes it silky)</li>
                </ol>
              </div>
              <p className="text-sm italic">
                💡 <strong>Important:</strong> Stir constantly! That's the work that makes risotto creamy.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Pilaf (Turkish Rice)</h4>
              <p className="mb-3">
                <strong>Rice that is fluffy and aromatic.</strong>
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Toast rice in butter (translucent, slightly nutty)</li>
                  <li>Add hot broth (1:1.5 ratio)</li>
                  <li>Lid on, simmer at low heat (15-20 min)</li>
                  <li>Don't stir! (Or it gets mushy)</li>
                </ol>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Fried Rice (Asian)</h4>
              <p className="mb-3">
                <strong>The best way to use leftovers.</strong>
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <p className="mb-2"><strong>Trick:</strong> Use day-old rice (dries out, gets fluffier)</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Wok/pan very hot</li>
                  <li>Oil in, scramble egg</li>
                  <li>Vegetables (onions, peas, carrots) stir-fry briefly</li>
                  <li>Add rice, fry everything</li>
                  <li>Season with soy sauce</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Pasta & Dough
          </h3>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Homemade Pasta</h4>
              <p className="mb-3">
                <strong>Fresh pasta is a different world from dried.</strong>
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <p className="mb-2"><strong>Basic Dough:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                  <li>100g flour (Type 405 or 00) + 1 egg (rule of thumb)</li>
                  <li>Pinch of salt</li>
                </ul>
                <p className="mb-2"><strong>Technique:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Flour on work surface, form well, egg in</li>
                  <li>Whisk with fork, then knead (10-15 min, until smooth and elastic)</li>
                  <li>Wrap in plastic, rest 30 min</li>
                  <li>Roll out (thin!) with pasta machine or rolling pin</li>
                  <li>Cut (tagliatelle, fettuccine, etc.)</li>
                  <li>Cook in boiling salted water 2-3 min</li>
                </ol>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Spaetzle (Swabian Specialty)</h4>
              <p className="mb-3">
                <strong>The easiest dough in the world.</strong>
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <p className="mb-2"><strong>Dough:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                  <li>Per 100g flour → 1 egg</li>
                  <li>Pinch of salt</li>
                  <li>Some water (until dough is viscous)</li>
                </ul>
                <p className="mb-2"><strong>Technique:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Mix all ingredients until dough bubbles (beat 5 min)</li>
                  <li>Press through spaetzle maker into boiling salted water</li>
                  <li>When they float, they're done (1-2 min)</li>
                  <li>Remove with slotted spoon, drain</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">🎯 The Golden Rules for Sides</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-2xl mr-3">1️⃣</span>
              <span><strong>Timing:</strong> Sides must be ready when main dish is ready</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">2️⃣</span>
              <span><strong>Season:</strong> Sides need salt! Potatoes, rice, pasta are bland without</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">3️⃣</span>
              <span><strong>Texture:</strong> Crispy (roast potatoes), creamy (mash), fluffy (pilaf) - variety is important</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">4️⃣</span>
              <span><strong>Fat:</strong> Butter, oil, cream - sides need fat for flavor</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-semibold">Choose 3 different sides and master them:</p>
          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>
              <strong>Mashed Potatoes:</strong> Starchy potatoes, mash (don't blend!), make creamy with butter and warm milk
            </li>
            <li>
              <strong>Risotto:</strong> Sweat rice, add broth gradually, stir constantly, finish with "Mantecare"
            </li>
            <li>
              <strong>Roast Potatoes:</strong> Day-old boiled potatoes, fry crispy in hot pan (don't move much!)
            </li>
          </ol>
          <p className="mt-4 text-sm">
            <strong>Goal:</strong> Each side should be so good it could be eaten alone.
          </p>
        </div>
      </div>
    )
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

