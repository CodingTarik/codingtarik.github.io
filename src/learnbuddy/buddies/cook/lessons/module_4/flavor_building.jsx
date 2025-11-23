import React from 'react';

export const flavorBuildingLesson = {
  id: 'c4_m4_flavor',
  title: { 
    en: '4.3 Flavor Building', 
    de: '4.3 Aromenaufbau' 
  },
  description: { 
    en: 'Marinating, breading, rubs. How to make food taste better before it even hits the pan.', 
    de: 'Marinieren, Panieren, Rubs. Wie man Essen besser schmecken lässt, bevor es in die Pfanne kommt.' 
  },
  category: 'theory',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Geschmack ist planbar 🎨</h2>
          <p className="text-lg leading-relaxed">
            Gutes Kochen beginnt nicht in der Pfanne, sondern bei der Vorbereitung. Mit den richtigen Techniken 
            kannst du Geschmack in dein Essen "einbauen", bevor du überhaupt anfängst zu kochen.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Marinieren - Geschmack von außen nach innen
          </h3>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mb-4">
            <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">
              Was ist Marinieren?
            </h4>
            <p className="mb-3">
              Fleisch, Fisch oder Gemüse in einer Flüssigkeit einlegen, um:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Geschmack hinzuzufügen</strong> (Gewürze, Kräuter, Öl)</li>
              <li><strong>Zart zu machen</strong> (Säure bricht Proteine auf)</li>
            </ol>
          </div>

          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Die 3 Komponenten einer Marinade</h4>
              <div className="space-y-3">
                <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                  <p className="font-semibold mb-2">1. Öl (Geschmacksträger)</p>
                  <p className="text-sm mb-2">
                    Öl löst fettlösliche Aromastoffe und trägt sie ins Fleisch.
                  </p>
                  <p className="text-sm italic">Beispiele: Olivenöl, Sesamöl, Rapsöl</p>
                </div>
                <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                  <p className="font-semibold mb-2">2. Säure (Zartmacher)</p>
                  <p className="text-sm mb-2">
                    Säure denaturiert Proteine und macht Fleisch zarter. <strong>Aber:</strong> Zu viel Säure macht es matschig!
                  </p>
                  <p className="text-sm italic">Beispiele: Zitronensaft, Essig, Wein, Joghurt, Buttermilch</p>
                </div>
                <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                  <p className="font-semibold mb-2">3. Aromaten (Geschmack)</p>
                  <p className="text-sm mb-2">
                    Gewürze, Kräuter, Knoblauch, Ingwer, Chili, Honig, Senf
                  </p>
                  <p className="text-sm italic">Beispiele: Knoblauch, Ingwer, Paprika, Kreuzkümmel, Sojasauce</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">⏰ Wie lange marinieren?</h4>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-amber-100 dark:bg-amber-900/30">
                    <th className="border border-amber-300 dark:border-amber-700 p-3 text-left">Lebensmittel</th>
                    <th className="border border-amber-300 dark:border-amber-700 p-3 text-left">Mindestzeit</th>
                    <th className="border border-amber-300 dark:border-amber-700 p-3 text-left">Maximalzeit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">Fisch</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">15-30 Min</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">1 Stunde</td>
                  </tr>
                  <tr>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">Hähnchenbrust</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">30 Min</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">12 Stunden</td>
                  </tr>
                  <tr>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">Schweinefleisch</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">2 Stunden</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">24 Stunden</td>
                  </tr>
                  <tr>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">Rindfleisch</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">4 Stunden</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">48 Stunden</td>
                  </tr>
                  <tr>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">Gemüse</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">15 Min</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">2 Stunden</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-3 text-sm italic">
                ⚠️ <strong>Wichtig:</strong> Immer im Kühlschrank marinieren!
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">📝 Beispiel-Marinade: Joghurt-Tandoori</h4>
              <p className="mb-3"><strong>Zutaten:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                <li>200g Joghurt (Säure + Cremigkeit)</li>
                <li>2 EL Öl</li>
                <li>2 Knoblauchzehen, gepresst</li>
                <li>1 TL Ingwer, gerieben</li>
                <li>1 TL Paprika, 1 TL Kreuzkümmel, 1 TL Kurkuma</li>
                <li>Saft einer halben Zitrone</li>
                <li>Salz, Pfeffer</li>
              </ul>
              <p className="text-sm">
                <strong>Verwendung:</strong> Hähnchen 4-12 Stunden marinieren, dann braten oder grillen.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Rubs (Trockenmarinaden) - Geschmack ohne Flüssigkeit
          </h3>
          
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mb-4">
            <h4 className="text-xl font-bold text-red-900 dark:text-red-100 mb-3">
              Was ist ein Rub?
            </h4>
            <p className="mb-3">
              Eine Mischung aus trockenen Gewürzen, die auf Fleisch gerieben wird.
            </p>
            <p className="mb-3">
              <strong>Vorteil:</strong> Keine Flüssigkeit → bessere Kruste beim Braten/Grillen!
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">Die Basis eines guten Rubs</h4>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Salz:</strong> Basis (zieht Feuchtigkeit, würzt)</li>
                <li><strong>Zucker:</strong> Karamellisiert, gibt Kruste (brauner Zucker, Honigpulver)</li>
                <li><strong>Gewürze:</strong> Geschmack (Paprika, Kreuzkümmel, Knoblauchpulver, Chili)</li>
                <li><strong>Kräuter:</strong> Frische (getrocknete Kräuter: Thymian, Oregano, Rosmarin)</li>
              </ol>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">📝 Beispiel-Rub: BBQ-Rub</h4>
              <p className="mb-3"><strong>Zutaten:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                <li>2 EL Paprikapulver (süß)</li>
                <li>1 EL brauner Zucker</li>
                <li>1 EL Salz</li>
                <li>1 TL schwarzer Pfeffer</li>
                <li>1 TL Knoblauchpulver</li>
                <li>1 TL Zwiebelpulver</li>
                <li>1 TL Kreuzkümmel</li>
                <li>½ TL Cayennepfeffer (optional, für Schärfe)</li>
              </ul>
              <p className="text-sm mb-3">
                <strong>Verwendung:</strong> Auf Fleisch reiben, 30 Min - 12 Stunden ziehen lassen, dann grillen/braten.
              </p>
              <p className="text-sm italic">
                💡 <strong>Tipp:</strong> Rubs halten sich monatelang in einem luftdichten Glas!
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Panieren - Die Knusper-Technik
          </h3>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mb-4">
            <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">
              Was ist Panieren?
            </h4>
            <p className="mb-3">
              Eine Schutzhülle um Fleisch/Fisch/Gemüse, die beim Braten knusprig wird.
            </p>
            <p>
              <strong>Zweck:</strong> Schutz vor Austrocknen + knusprige Textur
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Die Panierstraße (3 Schritte)</h4>
              <div className="space-y-3">
                <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Station 1: Mehl</p>
                  <p className="text-sm mb-2">
                    <strong>Zweck:</strong> Trocknet die Oberfläche, damit das Ei haftet
                  </p>
                  <p className="text-sm italic">Tipp: Mit Salz und Pfeffer würzen</p>
                </div>
                <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Station 2: Verquirltes Ei</p>
                  <p className="text-sm mb-2">
                    <strong>Zweck:</strong> Klebstoff für das Paniermehl
                  </p>
                  <p className="text-sm italic">Tipp: Mit 1 EL Milch verdünnen (haftet besser)</p>
                </div>
                <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Station 3: Paniermehl/Semmelbrösel</p>
                  <p className="text-sm mb-2">
                    <strong>Zweck:</strong> Die knusprige Hülle
                  </p>
                  <p className="text-sm italic">Varianten: Panko (japanisch, extra knusprig), Cornflakes, Nüsse</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">🎯 Die Technik (Schritt für Schritt)</h4>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Fleisch trocken tupfen (wichtig!)</li>
                <li>In Mehl wenden, überschüssiges abklopfen</li>
                <li>Durch Ei ziehen, abtropfen lassen</li>
                <li>In Paniermehl wenden, leicht andrücken</li>
                <li><strong>Wichtig:</strong> 10-15 Min ruhen lassen (Panade haftet besser)</li>
                <li>In heißem Fett braten (Butterschmalz oder Öl)</li>
              </ol>
              <p className="mt-3 text-sm italic">
                💡 <strong>Profi-Tipp:</strong> Eine Hand für "trocken" (Mehl, Paniermehl), eine Hand für "nass" (Ei). 
                So verklebst du nicht alles!
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">⚠️ Häufige Fehler beim Panieren</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Fleisch nicht trocken:</strong> Panade haftet nicht → fällt ab</li>
                <li><strong>Fett nicht heiß genug:</strong> Panade saugt sich voll → matschig</li>
                <li><strong>Zu viel bewegen:</strong> Panade löst sich ab → lass es liegen!</li>
                <li><strong>Keine Ruhezeit:</strong> Panade haftet schlecht → bröckelt ab</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            4. Weitere Techniken
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">Brining (Pökeln/Salzlake)</h4>
              <p className="text-sm mb-3">
                Fleisch in Salzwasser einlegen (oft mit Zucker, Gewürzen).
              </p>
              <p className="text-sm mb-3">
                <strong>Zweck:</strong> Fleisch nimmt Wasser auf → saftiger, würziger
              </p>
              <p className="text-sm italic">
                Besonders gut für: Hähnchen, Truthahn, Schweinefleisch
              </p>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">Dry-Aging (Trockenreifung)</h4>
              <p className="text-sm mb-3">
                Fleisch kontrolliert altern lassen (Tage bis Wochen).
              </p>
              <p className="text-sm mb-3">
                <strong>Zweck:</strong> Enzyme bauen Bindegewebe ab → zarter, intensiver Geschmack
              </p>
              <p className="text-sm italic">
                Für Zuhause: Schwierig (braucht spezielle Bedingungen)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">🎯 Zusammenfassung: Wann was?</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-stone-200 dark:bg-stone-700">
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Technik</th>
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Zweck</th>
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Beste Verwendung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Marinieren</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Geschmack + Zartheit</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Hähnchen, Fisch, Gemüse</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Rub</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Geschmack + Kruste</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Grillen, Braten (Steak, Ribs)</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Panieren</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Knusprigkeit + Schutz</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Schnitzel, Fisch, Gemüse</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Brining</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Saftigkeit</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Hähnchen, Truthahn, Schwein</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-semibold">Paniere ein Schnitzel nach allen Regeln der Kunst:</p>
          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>
              <strong>Vorbereitung:</strong> 3 tiefe Teller bereitstellen (Mehl, Ei, Paniermehl)
            </li>
            <li>
              <strong>Fleisch:</strong> Schnitzel trocken tupfen, flach klopfen (gleichmäßige Dicke)
            </li>
            <li>
              <strong>Panierstraße:</strong> Mehl → Ei → Paniermehl (eine Hand trocken, eine nass!)
            </li>
            <li>
              <strong>Ruhen:</strong> 10-15 Min auf einem Teller ruhen lassen
            </li>
            <li>
              <strong>Braten:</strong> In heißem Butterschmalz/Öl (mittlere Hitze) 3-4 Min pro Seite
            </li>
            <li>
              <strong>Test:</strong> Ist die Panade goldbraun und knusprig? Perfekt!
            </li>
          </ol>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Flavor is Plannable 🎨</h2>
          <p className="text-lg leading-relaxed">
            Good cooking doesn't start in the pan, but in the preparation. With the right techniques, 
            you can "build" flavor into your food before you even start cooking.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Marinating - Flavor from Outside In
          </h3>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mb-4">
            <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">
              What is Marinating?
            </h4>
            <p className="mb-3">
              Soaking meat, fish or vegetables in a liquid to:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Add flavor</strong> (spices, herbs, oil)</li>
              <li><strong>Tenderize</strong> (acid breaks down proteins)</li>
            </ol>
          </div>

          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">The 3 Components of a Marinade</h4>
              <div className="space-y-3">
                <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                  <p className="font-semibold mb-2">1. Oil (Flavor Carrier)</p>
                  <p className="text-sm mb-2">
                    Oil dissolves fat-soluble flavor compounds and carries them into the meat.
                  </p>
                  <p className="text-sm italic">Examples: Olive oil, sesame oil, canola oil</p>
                </div>
                <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                  <p className="font-semibold mb-2">2. Acid (Tenderizer)</p>
                  <p className="text-sm mb-2">
                    Acid denatures proteins and makes meat tender. <strong>But:</strong> Too much acid makes it mushy!
                  </p>
                  <p className="text-sm italic">Examples: Lemon juice, vinegar, wine, yogurt, buttermilk</p>
                </div>
                <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                  <p className="font-semibold mb-2">3. Aromatics (Flavor)</p>
                  <p className="text-sm mb-2">
                    Spices, herbs, garlic, ginger, chili, honey, mustard
                  </p>
                  <p className="text-sm italic">Examples: Garlic, ginger, paprika, cumin, soy sauce</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">⏰ How Long to Marinate?</h4>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-amber-100 dark:bg-amber-900/30">
                    <th className="border border-amber-300 dark:border-amber-700 p-3 text-left">Food</th>
                    <th className="border border-amber-300 dark:border-amber-700 p-3 text-left">Minimum Time</th>
                    <th className="border border-amber-300 dark:border-amber-700 p-3 text-left">Maximum Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">Fish</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">15-30 min</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">1 hour</td>
                  </tr>
                  <tr>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">Chicken breast</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">30 min</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">12 hours</td>
                  </tr>
                  <tr>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">Pork</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">2 hours</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">24 hours</td>
                  </tr>
                  <tr>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">Beef</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">4 hours</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">48 hours</td>
                  </tr>
                  <tr>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">Vegetables</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">15 min</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">2 hours</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-3 text-sm italic">
                ⚠️ <strong>Important:</strong> Always marinate in the refrigerator!
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">📝 Example Marinade: Yogurt-Tandoori</h4>
              <p className="mb-3"><strong>Ingredients:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                <li>200g Yogurt (acid + creaminess)</li>
                <li>2 tbsp Oil</li>
                <li>2 garlic cloves, pressed</li>
                <li>1 tsp ginger, grated</li>
                <li>1 tsp paprika, 1 tsp cumin, 1 tsp turmeric</li>
                <li>Juice of half a lemon</li>
                <li>Salt, pepper</li>
              </ul>
              <p className="text-sm">
                <strong>Use:</strong> Marinate chicken 4-12 hours, then fry or grill.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Rubs (Dry Marinades) - Flavor Without Liquid
          </h3>
          
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mb-4">
            <h4 className="text-xl font-bold text-red-900 dark:text-red-100 mb-3">
              What is a Rub?
            </h4>
            <p className="mb-3">
              A mixture of dry spices rubbed onto meat.
            </p>
            <p className="mb-3">
              <strong>Advantage:</strong> No liquid → better crust when frying/grilling!
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">The Basis of a Good Rub</h4>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Salt:</strong> Base (draws moisture, seasons)</li>
                <li><strong>Sugar:</strong> Caramelizes, gives crust (brown sugar, honey powder)</li>
                <li><strong>Spices:</strong> Flavor (paprika, cumin, garlic powder, chili)</li>
                <li><strong>Herbs:</strong> Freshness (dried herbs: thyme, oregano, rosemary)</li>
              </ol>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">📝 Example Rub: BBQ Rub</h4>
              <p className="mb-3"><strong>Ingredients:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                <li>2 tbsp Paprika (sweet)</li>
                <li>1 tbsp Brown sugar</li>
                <li>1 tbsp Salt</li>
                <li>1 tsp Black pepper</li>
                <li>1 tsp Garlic powder</li>
                <li>1 tsp Onion powder</li>
                <li>1 tsp Cumin</li>
                <li>½ tsp Cayenne pepper (optional, for heat)</li>
              </ul>
              <p className="text-sm mb-3">
                <strong>Use:</strong> Rub on meat, let sit 30 min - 12 hours, then grill/fry.
              </p>
              <p className="text-sm italic">
                💡 <strong>Tip:</strong> Rubs keep for months in an airtight jar!
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Breading - The Crispy Technique
          </h3>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mb-4">
            <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">
              What is Breading?
            </h4>
            <p className="mb-3">
              A protective coating around meat/fish/vegetables that becomes crispy when fried.
            </p>
            <p>
              <strong>Purpose:</strong> Protection from drying out + crispy texture
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">The Breading Station (3 Steps)</h4>
              <div className="space-y-3">
                <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Station 1: Flour</p>
                  <p className="text-sm mb-2">
                    <strong>Purpose:</strong> Dries the surface so egg adheres
                  </p>
                  <p className="text-sm italic">Tip: Season with salt and pepper</p>
                </div>
                <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Station 2: Beaten Egg</p>
                  <p className="text-sm mb-2">
                    <strong>Purpose:</strong> Glue for the breadcrumbs
                  </p>
                  <p className="text-sm italic">Tip: Thin with 1 tbsp milk (adheres better)</p>
                </div>
                <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Station 3: Breadcrumbs</p>
                  <p className="text-sm mb-2">
                    <strong>Purpose:</strong> The crispy coating
                  </p>
                  <p className="text-sm italic">Variants: Panko (Japanese, extra crispy), cornflakes, nuts</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">🎯 The Technique (Step by Step)</h4>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Pat meat dry (important!)</li>
                <li>Dredge in flour, shake off excess</li>
                <li>Drag through egg, let drip</li>
                <li>Coat in breadcrumbs, press lightly</li>
                <li><strong>Important:</strong> Let rest 10-15 min (breading adheres better)</li>
                <li>Fry in hot fat (clarified butter or oil)</li>
              </ol>
              <p className="mt-3 text-sm italic">
                💡 <strong>Pro tip:</strong> One hand for "dry" (flour, breadcrumbs), one hand for "wet" (egg). 
                This way you don't glue everything together!
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">⚠️ Common Breading Mistakes</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Meat not dry:</strong> Breading doesn't stick → falls off</li>
                <li><strong>Fat not hot enough:</strong> Breading soaks up oil → soggy</li>
                <li><strong>Moving too much:</strong> Breading comes off → let it sit!</li>
                <li><strong>No resting time:</strong> Breading adheres poorly → crumbles off</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            4. Other Techniques
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">Brining</h4>
              <p className="text-sm mb-3">
                Soaking meat in salt water (often with sugar, spices).
              </p>
              <p className="text-sm mb-3">
                <strong>Purpose:</strong> Meat absorbs water → juicier, more flavorful
              </p>
              <p className="text-sm italic">
                Especially good for: Chicken, turkey, pork
              </p>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">Dry-Aging</h4>
              <p className="text-sm mb-3">
                Letting meat age in controlled conditions (days to weeks).
              </p>
              <p className="text-sm mb-3">
                <strong>Purpose:</strong> Enzymes break down connective tissue → tender, intense flavor
              </p>
              <p className="text-sm italic">
                For home: Difficult (needs special conditions)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">🎯 Summary: When What?</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-stone-200 dark:bg-stone-700">
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Technique</th>
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Purpose</th>
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Best Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Marinating</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Flavor + Tenderness</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Chicken, fish, vegetables</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Rub</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Flavor + Crust</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Grilling, frying (steak, ribs)</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Breading</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Crispiness + Protection</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Schnitzel, fish, vegetables</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Brining</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Juiciness</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Chicken, turkey, pork</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-semibold">Bread a schnitzel by the book:</p>
          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>
              <strong>Preparation:</strong> Set up 3 deep plates (flour, egg, breadcrumbs)
            </li>
            <li>
              <strong>Meat:</strong> Pat schnitzel dry, pound flat (even thickness)
            </li>
            <li>
              <strong>Breading station:</strong> Flour → Egg → Breadcrumbs (one hand dry, one wet!)
            </li>
            <li>
              <strong>Rest:</strong> Let rest 10-15 min on a plate
            </li>
            <li>
              <strong>Fry:</strong> In hot clarified butter/oil (medium heat) 3-4 min per side
            </li>
            <li>
              <strong>Test:</strong> Is the breading golden brown and crispy? Perfect!
            </li>
          </ol>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Schnitzel panieren',
      description: 'Paniere ein Schnitzel nach der klassischen Methode.',
      checklist: [
        { text: 'Bereite 3 Teller vor: Mehl, verquirltes Ei, Paniermehl' },
        { text: 'Tupfe das Fleisch trocken' },
        { text: 'Durchlaufe die Panierstraße: Mehl → Ei → Paniermehl' },
        { text: 'Lasse das panierte Schnitzel 10-15 Min ruhen' },
        { text: 'Brate es in heißem Fett goldbraun' },
        { text: 'Ist die Panade knusprig und haftet gut? Perfekt!' }
      ]
    },
    en: {
      title: 'Bread a Schnitzel',
      description: 'Bread a schnitzel using the classic method.',
      checklist: [
        { text: 'Prepare 3 plates: flour, beaten egg, breadcrumbs' },
        { text: 'Pat meat dry' },
        { text: 'Go through breading station: Flour → Egg → Breadcrumbs' },
        { text: 'Let breaded schnitzel rest 10-15 min' },
        { text: 'Fry in hot fat until golden brown' },
        { text: 'Is the breading crispy and adhering well? Perfect!' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was sind die 3 Komponenten einer Marinade?', back: 'Öl (Geschmacksträger), Säure (Zartmacher), Aromaten (Geschmack: Gewürze, Kräuter)' },
      { front: 'Was ist der Unterschied zwischen Marinieren und Rub?', back: 'Marinieren = flüssig (Geschmack + Zartheit). Rub = trocken (Geschmack + bessere Kruste beim Braten)' },
      { front: 'Was ist die Panierstraße?', back: 'Mehl (trocknet) → Ei (klebt) → Paniermehl (Kruste). Wichtig: 10-15 Min ruhen lassen!' },
      { front: 'Warum muss paniertes Fleisch ruhen?', back: 'Damit die Panade besser haftet und beim Braten nicht abfällt.' }
    ],
    en: [
      { front: 'What are the 3 components of a marinade?', back: 'Oil (flavor carrier), Acid (tenderizer), Aromatics (flavor: spices, herbs)' },
      { front: 'What is the difference between marinating and rub?', back: 'Marinating = liquid (flavor + tenderness). Rub = dry (flavor + better crust when frying)' },
      { front: 'What is the breading station?', back: 'Flour (dries) → Egg (glues) → Breadcrumbs (crust). Important: Let rest 10-15 min!' },
      { front: 'Why must breaded meat rest?', back: 'So the breading adheres better and doesn\'t fall off when frying.' }
    ]
  }
};

