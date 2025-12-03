import React from 'react';

export const foodScienceLesson = {
  id: 'c4_m4_food_science',
  title: { 
    en: '4.2 Food Science (The Why)', 
    de: '4.2 Lebensmittelwissenschaft (Das Warum)' 
  },
  description: { 
    en: 'Maillard reaction, caramelization, and why salt makes water boil differently.', 
    de: 'Maillard-Reaktion, Karamellisierung und warum Salz das Wasser anders kochen lässt.' 
  },
  category: 'theory',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-orange-700 dark:text-orange-400 mb-4">Kochen ist Chemie 🧪</h2>
          <p className="text-lg leading-relaxed">
            Wenn du verstehst, <strong>warum</strong> etwas passiert, kannst du besser kochen. Du bist kein Sklave 
            von Rezepten mehr, sondern verstehst die Prinzipien dahinter.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Die Maillard-Reaktion (Warum Gebratenes schmeckt)
          </h3>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mb-4">
            <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-3">
              Was ist das?
            </h4>
            <p className="mb-3">
              Eine chemische Reaktion zwischen <strong>Aminosäuren</strong> (aus Protein) und 
              <strong>Zucker</strong> bei hoher Hitze (ab ca. 140°C).
            </p>
            <p className="mb-3">
              <strong>Ergebnis:</strong> Hunderte neue Aromastoffe entstehen → das typische "Röstaroma"
            </p>
            <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
              <p className="font-semibold mb-2">Wo siehst du sie?</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Gebratenes Fleisch (die braune Kruste)</li>
                <li>Geröstetes Brot (Toast)</li>
                <li>Geröstete Nüsse</li>
                <li>Gebratene Zwiebeln</li>
                <li>Kaffee (geröstete Bohnen)</li>
                <li>Bier (geröstetes Malz)</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
            <h4 className="font-bold mb-3">Warum ist das wichtig für dich?</h4>
            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li>
                <strong>Hohe Hitze:</strong> Die Maillard-Reaktion passiert nur ab 140°C. 
                Deshalb muss die Pfanne heiß sein!
              </li>
              <li>
                <strong>Trockene Oberfläche:</strong> Wasser verdampft bei 100°C. Solange Wasser auf dem Fleisch ist, 
                wird es nicht heißer als 100°C → keine Bräunung. <strong>Deshalb: Fleisch trocken tupfen!</strong>
              </li>
              <li>
                <strong>Nicht zu viel in die Pfanne:</strong> Zu viel Fleisch kühlt die Pfanne ab → es dämpft statt zu braten
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Karamellisierung (Zucker bräunen)
          </h3>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border-2 border-yellow-200 dark:border-yellow-800 mb-4">
            <h4 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-3">
              Was ist das?
            </h4>
            <p className="mb-3">
              Wenn <strong>Zucker</strong> erhitzt wird (ab ca. 160°C), zerfällt er und bildet neue Aromastoffe.
            </p>
            <p className="mb-3">
              <strong>Ergebnis:</strong> Süß-bitterer Geschmack, braune Farbe
            </p>
            <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
              <p className="font-semibold mb-2">Wo siehst du sie?</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Karamell (natürlich!)</li>
                <li>Karamellisierte Zwiebeln</li>
                <li>Crème Brûlée (die Zuckerkruste)</li>
                <li>Gebratene Äpfel</li>
                <li>Dunkles Bier, Cola (Zuckerkulör)</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
            <h4 className="font-bold mb-3">Praktisches Beispiel: Zwiebeln karamellisieren</h4>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Zwiebeln in Scheiben schneiden</li>
              <li>In Butter/Öl bei <strong>mittlerer</strong> Hitze anbraten</li>
              <li>Geduld! Es dauert 20-30 Minuten</li>
              <li>Die Zwiebeln werden erst glasig, dann braun, dann süß</li>
              <li>Prise Zucker am Ende beschleunigt den Prozess</li>
            </ol>
            <p className="mt-3 text-sm italic">
              💡 <strong>Tipp:</strong> Zu hohe Hitze verbrennt die Zwiebeln (bitter). Niedrige Hitze + Zeit = süß!
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Maillard vs. Karamellisierung - Der Unterschied
          </h3>
          
          <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-stone-200 dark:bg-stone-700">
                  <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Eigenschaft</th>
                  <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Maillard</th>
                  <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Karamellisierung</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Benötigt</strong></td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">Protein + Zucker</td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">Nur Zucker</td>
                </tr>
                <tr>
                  <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Temperatur</strong></td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">Ab 140°C</td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">Ab 160°C</td>
                </tr>
                <tr>
                  <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Geschmack</strong></td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">Komplex, herzhaft</td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">Süß-bitter</td>
                </tr>
                <tr>
                  <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Beispiel</strong></td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">Gebratenes Steak</td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">Karamell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            4. Salz im Wasser - Mythen und Wahrheit
          </h3>
          
          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">❌ Mythos: Salz lässt Wasser schneller kochen</h4>
              <p className="mb-2">
                <strong>Wahrheit:</strong> Salz erhöht den Siedepunkt minimal (um ca. 0.5°C bei normaler Menge). 
                Das ist praktisch irrelevant.
              </p>
              <p className="text-sm italic">
                Der echte Grund, warum wir salzen: <strong>Geschmack!</strong>
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">✅ Wahrheit: Wann salzen?</h4>
              <p className="mb-3">
                <strong>Nudelwasser:</strong> Salze, wenn das Wasser kocht (nicht vorher). Warum? 
                Ungesalzenes Wasser kocht schneller (weniger gelöste Stoffe).
              </p>
              <p className="mb-3">
                <strong>Wie viel?</strong> Das Wasser sollte "wie Meerwasser" schmecken. Faustregel: 10g Salz pro Liter.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">🧂 Osmose: Warum Salz Wasser aus Gemüse zieht</h4>
              <p className="mb-3">
                Wenn du Salz auf Gemüse (z.B. Gurken, Auberginen) gibst, zieht es Wasser raus.
              </p>
              <p className="mb-3">
                <strong>Warum?</strong> Osmose - Wasser wandert von niedriger zu hoher Salzkonzentration.
              </p>
              <p className="text-sm italic">
                💡 <strong>Nutzen:</strong> Auberginen salzen vor dem Braten → weniger Wasser → knuspriger!
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            5. Öle & Rauchpunkte
          </h3>
          
          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-800">
            <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3">
              Was ist der Rauchpunkt?
            </h4>
            <p className="mb-4">
              Die Temperatur, bei der Öl anfängt zu rauchen und sich zersetzt. 
              Über dem Rauchpunkt entstehen schädliche Stoffe und das Öl schmeckt bitter.
            </p>
            
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-orange-100 dark:bg-orange-900/30">
                  <th className="border border-orange-300 dark:border-orange-700 p-3 text-left">Öl</th>
                  <th className="border border-orange-300 dark:border-orange-700 p-3 text-left">Rauchpunkt</th>
                  <th className="border border-orange-300 dark:border-orange-700 p-3 text-left">Verwendung</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Olivenöl (nativ)</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">160-190°C</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Salate, niedrige Hitze</td>
                </tr>
                <tr>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Olivenöl (raffiniert)</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">220°C</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Braten</td>
                </tr>
                <tr>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Rapsöl (raffiniert)</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">220°C</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Braten, Frittieren</td>
                </tr>
                <tr>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Butter</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">150°C</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Niedrige Hitze, Backen</td>
                </tr>
                <tr>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Butterschmalz/Ghee</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">250°C</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Hohe Hitze, Braten</td>
                </tr>
                <tr>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Kokosöl</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">180°C</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Mittlere Hitze</td>
                </tr>
              </tbody>
            </table>
            
            <p className="mt-4 text-sm italic">
              💡 <strong>Faustregel:</strong> Kaltgepresst/Nativ = Salate. Raffiniert = Braten.
            </p>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">🎯 Zusammenfassung: Was du dir merken solltest</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-2xl mr-3">🔥</span>
              <span><strong>Maillard:</strong> Protein + Zucker + Hitze (140°C) = Röstaromen. Fleisch trocken tupfen!</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">🍯</span>
              <span><strong>Karamellisierung:</strong> Zucker + Hitze (160°C) = süß-bitter. Geduld bei Zwiebeln!</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">🧂</span>
              <span><strong>Salz:</strong> Zieht Wasser raus (Osmose). Nudelwasser erst salzen, wenn es kocht.</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">🛢️</span>
              <span><strong>Öle:</strong> Rauchpunkt beachten! Kaltgepresst = Salate, Raffiniert = Braten.</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-semibold">Beobachte die Maillard-Reaktion in Aktion:</p>
          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>
              <strong>Experiment 1:</strong> Brate Butter in einer Pfanne bei mittlerer Hitze. 
              Beobachte, wie sie von gelb zu braun wird und nussig riecht. Das ist die Maillard-Reaktion!
            </li>
            <li>
              <strong>Experiment 2:</strong> Karamellisiere Zwiebeln. Schneide Zwiebeln, brate sie 
              20-30 Min bei niedriger Hitze. Beobachte, wie sie von weiß → glasig → braun → süß werden.
            </li>
            <li>
              <strong>Experiment 3:</strong> Brate zwei Steaks: Eines nass, eines trocken getupft. 
              Welches bekommt eine bessere Kruste?
            </li>
          </ol>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-orange-700 dark:text-orange-400 mb-4">Cooking is Chemistry 🧪</h2>
          <p className="text-lg leading-relaxed">
            When you understand <strong>why</strong> something happens, you can cook better. You're no longer 
            a slave to recipes, but understand the principles behind them.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. The Maillard Reaction (Why Seared Food Tastes Good)
          </h3>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mb-4">
            <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-3">
              What is it?
            </h4>
            <p className="mb-3">
              A chemical reaction between <strong>amino acids</strong> (from protein) and 
              <strong>sugars</strong> at high heat (from about 140°C/285°F).
            </p>
            <p className="mb-3">
              <strong>Result:</strong> Hundreds of new flavor compounds form → the typical "roasted aroma"
            </p>
            <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
              <p className="font-semibold mb-2">Where do you see it?</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Seared meat (the brown crust)</li>
                <li>Toasted bread</li>
                <li>Roasted nuts</li>
                <li>Sautéed onions</li>
                <li>Coffee (roasted beans)</li>
                <li>Beer (roasted malt)</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
            <h4 className="font-bold mb-3">Why is this important for you?</h4>
            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li>
                <strong>High heat:</strong> The Maillard reaction only happens above 140°C/285°F. 
                That's why the pan must be hot!
              </li>
              <li>
                <strong>Dry surface:</strong> Water evaporates at 100°C/212°F. As long as there's water on the meat, 
                it won't get hotter than 100°C → no browning. <strong>Therefore: Pat meat dry!</strong>
              </li>
              <li>
                <strong>Don't overcrowd the pan:</strong> Too much meat cools the pan → it steams instead of sears
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Caramelization (Browning Sugar)
          </h3>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border-2 border-yellow-200 dark:border-yellow-800 mb-4">
            <h4 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-3">
              What is it?
            </h4>
            <p className="mb-3">
              When <strong>sugar</strong> is heated (from about 160°C/320°F), it breaks down and forms new flavor compounds.
            </p>
            <p className="mb-3">
              <strong>Result:</strong> Sweet-bitter taste, brown color
            </p>
            <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
              <p className="font-semibold mb-2">Where do you see it?</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Caramel (of course!)</li>
                <li>Caramelized onions</li>
                <li>Crème Brûlée (the sugar crust)</li>
                <li>Sautéed apples</li>
                <li>Dark beer, Cola (caramel color)</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
            <h4 className="font-bold mb-3">Practical Example: Caramelizing Onions</h4>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Slice onions</li>
              <li>Sauté in butter/oil at <strong>medium</strong> heat</li>
              <li>Patience! It takes 20-30 minutes</li>
              <li>Onions go from translucent → brown → sweet</li>
              <li>Pinch of sugar at the end speeds up the process</li>
            </ol>
            <p className="mt-3 text-sm italic">
              💡 <strong>Tip:</strong> Too high heat burns onions (bitter). Low heat + time = sweet!
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Maillard vs. Caramelization - The Difference
          </h3>
          
          <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-stone-200 dark:bg-stone-700">
                  <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Property</th>
                  <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Maillard</th>
                  <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Caramelization</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Requires</strong></td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">Protein + Sugar</td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">Only Sugar</td>
                </tr>
                <tr>
                  <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Temperature</strong></td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">From 140°C (285°F)</td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">From 160°C (320°F)</td>
                </tr>
                <tr>
                  <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Taste</strong></td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">Complex, savory</td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">Sweet-bitter</td>
                </tr>
                <tr>
                  <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Example</strong></td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">Seared steak</td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">Caramel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            4. Salt in Water - Myths and Truth
          </h3>
          
          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">❌ Myth: Salt makes water boil faster</h4>
              <p className="mb-2">
                <strong>Truth:</strong> Salt raises the boiling point minimally (by about 0.5°C/1°F at normal amounts). 
                This is practically irrelevant.
              </p>
              <p className="text-sm italic">
                The real reason we salt: <strong>Flavor!</strong>
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">✅ Truth: When to salt?</h4>
              <p className="mb-3">
                <strong>Pasta water:</strong> Salt when water boils (not before). Why? 
                Unsalted water boils faster (fewer dissolved substances).
              </p>
              <p className="mb-3">
                <strong>How much?</strong> Water should taste "like seawater". Rule of thumb: 10g salt per liter.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">🧂 Osmosis: Why Salt Draws Water from Vegetables</h4>
              <p className="mb-3">
                When you put salt on vegetables (e.g. cucumbers, eggplants), it draws water out.
              </p>
              <p className="mb-3">
                <strong>Why?</strong> Osmosis - water moves from low to high salt concentration.
              </p>
              <p className="text-sm italic">
                💡 <strong>Use:</strong> Salt eggplants before frying → less water → crispier!
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            5. Oils & Smoke Points
          </h3>
          
          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-800">
            <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3">
              What is the smoke point?
            </h4>
            <p className="mb-4">
              The temperature at which oil starts to smoke and decompose. 
              Above the smoke point, harmful substances form and oil tastes bitter.
            </p>
            
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-orange-100 dark:bg-orange-900/30">
                  <th className="border border-orange-300 dark:border-orange-700 p-3 text-left">Oil</th>
                  <th className="border border-orange-300 dark:border-orange-700 p-3 text-left">Smoke Point</th>
                  <th className="border border-orange-300 dark:border-orange-700 p-3 text-left">Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Olive oil (virgin)</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">160-190°C (320-375°F)</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Salads, low heat</td>
                </tr>
                <tr>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Olive oil (refined)</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">220°C (430°F)</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Frying</td>
                </tr>
                <tr>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Canola oil (refined)</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">220°C (430°F)</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Frying, deep-frying</td>
                </tr>
                <tr>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Butter</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">150°C (300°F)</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Low heat, baking</td>
                </tr>
                <tr>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Clarified butter/Ghee</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">250°C (480°F)</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">High heat, frying</td>
                </tr>
                <tr>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Coconut oil</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">180°C (350°F)</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Medium heat</td>
                </tr>
              </tbody>
            </table>
            
            <p className="mt-4 text-sm italic">
              💡 <strong>Rule of thumb:</strong> Cold-pressed/Virgin = Salads. Refined = Frying.
            </p>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">🎯 Summary: What to Remember</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-2xl mr-3">🔥</span>
              <span><strong>Maillard:</strong> Protein + Sugar + Heat (140°C) = roasted flavors. Pat meat dry!</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">🍯</span>
              <span><strong>Caramelization:</strong> Sugar + Heat (160°C) = sweet-bitter. Patience with onions!</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">🧂</span>
              <span><strong>Salt:</strong> Draws water out (osmosis). Salt pasta water when it boils.</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">🛢️</span>
              <span><strong>Oils:</strong> Watch smoke point! Cold-pressed = Salads, Refined = Frying.</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-semibold">Observe the Maillard reaction in action:</p>
          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>
              <strong>Experiment 1:</strong> Brown butter in a pan at medium heat. 
              Observe how it goes from yellow to brown and smells nutty. That's the Maillard reaction!
            </li>
            <li>
              <strong>Experiment 2:</strong> Caramelize onions. Slice onions, sauté them 
              20-30 min at low heat. Observe how they go from white → translucent → brown → sweet.
            </li>
            <li>
              <strong>Experiment 3:</strong> Sear two steaks: One wet, one patted dry. 
              Which gets a better crust?
            </li>
          </ol>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Butter bräunen',
      description: 'Beobachte die Maillard-Reaktion live.',
      checklist: [
        { text: 'Gib Butter in eine helle Pfanne (damit du die Farbe siehst)' },
        { text: 'Erhitze bei mittlerer Hitze' },
        { text: 'Beobachte: Butter schmilzt → schäumt → wird braun' },
        { text: 'Rieche: Es riecht nussig, wie Kekse!' },
        { text: 'Nimm die Pfanne vom Herd, bevor sie schwarz wird' },
        { text: 'Gratuliere! Du hast "Nussbutter" (Beurre Noisette) gemacht.' }
      ]
    },
    en: {
      title: 'Brown Butter',
      description: 'Watch the Maillard reaction live.',
      checklist: [
        { text: 'Put butter in a light-colored pan (so you can see the color)' },
        { text: 'Heat at medium heat' },
        { text: 'Observe: Butter melts → foams → turns brown' },
        { text: 'Smell: It smells nutty, like cookies!' },
        { text: 'Take pan off heat before it turns black' },
        { text: 'Congrats! You made "brown butter" (Beurre Noisette).' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist die Maillard-Reaktion?', back: 'Eine chemische Reaktion zwischen Aminosäuren (Protein) und Zucker bei hoher Hitze (ab 140°C), die Röstaromen erzeugt.' },
      { front: 'Was ist der Unterschied zwischen Maillard und Karamellisierung?', back: 'Maillard braucht Protein + Zucker, Karamellisierung nur Zucker. Maillard ab 140°C, Karamellisierung ab 160°C.' },
      { front: 'Warum muss Fleisch trocken sein zum Braten?', back: 'Weil Wasser bei 100°C verdampft. Solange Wasser da ist, wird das Fleisch nicht heißer als 100°C → keine Maillard-Reaktion (ab 140°C).' },
      { front: 'Was ist der Rauchpunkt eines Öls?', back: 'Die Temperatur, bei der Öl anfängt zu rauchen und sich zersetzt. Über dem Rauchpunkt entstehen schädliche Stoffe.' }
    ],
    en: [
      { front: 'What is the Maillard reaction?', back: 'A chemical reaction between amino acids (protein) and sugars at high heat (from 140°C/285°F) that creates roasted flavors.' },
      { front: 'What is the difference between Maillard and caramelization?', back: 'Maillard needs protein + sugar, caramelization only sugar. Maillard from 140°C, caramelization from 160°C.' },
      { front: 'Why must meat be dry for searing?', back: 'Because water evaporates at 100°C. As long as there\'s water, meat won\'t get hotter than 100°C → no Maillard reaction (from 140°C).' },
      { front: 'What is the smoke point of an oil?', back: 'The temperature at which oil starts to smoke and decompose. Above the smoke point, harmful substances form.' }
    ]
  }
};


