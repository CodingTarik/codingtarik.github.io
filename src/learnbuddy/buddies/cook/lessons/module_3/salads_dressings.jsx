import React from 'react';

export const saladsDressingsLesson = {
  id: 'c3_m3_salads',
  title: { 
    en: '3.5 Salads & Dressings', 
    de: '3.5 Salate & Dressings' 
  },
  description: { 
    en: 'More than just lettuce. How to make salads that are actually satisfying.', 
    de: 'Mehr als nur Blätter. Wie man Salate macht, die wirklich satt machen.' 
  },
  category: 'preparations',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-4">Salat ist kein Beiwerk 🥗</h2>
          <p className="text-lg leading-relaxed">
            Ein guter Salat ist nicht "was man nebenbei isst". Er ist eine Komposition aus Texturen, Farben und 
            Geschmäckern. Der Unterschied zwischen "meh" und "wow" liegt im Dressing und der Vorbereitung.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-3">
            Die 3 Säulen eines guten Salats
          </h3>
          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>
              <strong>Basis:</strong> Frischer, trockener Salat (Feuchtigkeit ist der Feind!)
            </li>
            <li>
              <strong>Textur:</strong> Knackiges (Nüsse, Croutons), Cremiges (Käse, Avocado), Saftiges (Tomaten)
            </li>
            <li>
              <strong>Dressing:</strong> Die Balance aus Öl, Säure, Salz (und oft Süße)
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Salat richtig vorbereiten
          </h3>
          
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">Schritt 1: Waschen</h4>
              <p className="mb-2">
                Salat kann sandig sein (besonders Feldsalat, Rucola). 
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>In kaltem Wasser waschen (mehrmals wechseln, bis kein Sand mehr da ist)</li>
                <li>Blätter vorsichtig bewegen (nicht zerquetschen)</li>
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">Schritt 2: Trocknen (WICHTIG!)</h4>
              <p className="mb-3">
                <strong>Warum?</strong> Wasser verdünnt das Dressing und macht den Salat matschig.
              </p>
              <p className="mb-2">
                <strong>Methoden:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Salatschleuder:</strong> Die beste Methode (schleudert Wasser raus)</li>
                <li><strong>Küchenpapier:</strong> Blätter vorsichtig abtupfen</li>
                <li><strong>Sauberes Geschirrtuch:</strong> Blätter darin ausschlagen</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">Schritt 3: Zupfen vs. Schneiden</h4>
              <p className="mb-2">
                <strong>Zupfen:</strong> Kopfsalat, Rucola, Feldsalat (behält Frische)
              </p>
              <p>
                <strong>Schneiden:</strong> Eisbergsalat, Chinakohl, Rotkohl (mit scharfem Messer!)
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Dressings - Die Wissenschaft der Balance
          </h3>
          
          <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-lg mb-4">
            <h4 className="font-bold mb-3 text-lg">Die Basis-Formel: Vinaigrette</h4>
            <p className="mb-4">
              <strong>Verhältnis: 3:1 (Öl : Säure)</strong>
            </p>
            <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
              <p className="mb-3"><strong>Zutaten:</strong></p>
              <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
                <li>3 EL Öl (Olivenöl, Rapsöl, Nussöl)</li>
                <li>1 EL Säure (Essig, Zitronensaft)</li>
                <li>1 TL Senf (Emulgator! Hält die Mischung zusammen)</li>
                <li>Salz, Pfeffer</li>
                <li>Optional: 1 TL Honig/Ahornsirup (Balance zur Säure)</li>
              </ul>
              <p className="mb-3"><strong>Anleitung:</strong></p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Senf + Säure + Salz/Pfeffer in eine Schüssel geben</li>
                <li>Öl langsam einrühren (mit Schneebesen oder Gabel)</li>
                <li>Abschmecken und anpassen</li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">Variante: Joghurt-Dressing</h4>
              <p className="mb-3"><strong>Zutaten:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>150g Joghurt (Naturjoghurt)</li>
                <li>2 EL Olivenöl</li>
                <li>1 EL Zitronensaft</li>
                <li>Frische Kräuter (Dill, Petersilie)</li>
                <li>Knoblauch (optional)</li>
                <li>Salz, Pfeffer</li>
              </ul>
              <p className="mt-3 text-sm italic">
                💡 Perfekt für: Gurken, Tomaten, Krautsalat
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">Variante: Honig-Senf-Dressing</h4>
              <p className="mb-3"><strong>Zutaten:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>3 EL Olivenöl</li>
                <li>1 EL Apfelessig</li>
                <li>1 EL Honig</li>
                <li>1 EL Senf (körnig)</li>
                <li>Salz, Pfeffer</li>
              </ul>
              <p className="mt-3 text-sm italic">
                💡 Perfekt für: Blattsalate, Rucola, Spinat
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Klassische Salate
          </h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Grüner Salat (Basis)</h4>
              <p className="mb-3">
                <strong>Zutaten:</strong> Kopfsalat, Rucola, Feldsalat (gemischt)
              </p>
              <p className="mb-3">
                <strong>Dressing:</strong> Klassische Vinaigrette
              </p>
              <p className="mb-3">
                <strong>Extras:</strong> Geröstete Nüsse, Parmesan-Hobel, Croutons
              </p>
              <p className="text-sm italic">
                💡 <strong>Tipp:</strong> Dressing erst kurz vor dem Servieren dazugeben (sonst wird der Salat matschig)
              </p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Kartoffelsalat (Deutsch)</h4>
              <p className="mb-3">
                <strong>Zwei Varianten:</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white dark:bg-stone-700 p-3 rounded">
                  <p className="font-semibold mb-2">Süddeutsch (warm)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Festkochende Kartoffeln</li>
                    <li>Heiße Brühe</li>
                    <li>Essig, Öl</li>
                    <li>Zwiebeln</li>
                    <li>Speck (optional)</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-stone-700 p-3 rounded">
                  <p className="font-semibold mb-2">Norddeutsch (kalt)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Festkochende Kartoffeln</li>
                    <li>Mayonnaise</li>
                    <li>Brühe</li>
                    <li>Gewürzgurken</li>
                    <li>Zwiebeln, Äpfel</li>
                  </ul>
                </div>
              </div>
              <p className="mt-3 text-sm italic">
                💡 <strong>Wichtig:</strong> Kartoffeln noch warm mit Dressing mischen (saugen es besser auf)
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Nudelsalat</h4>
              <p className="mb-3">
                <strong>Basis:</strong> Kurze Nudeln (Fusilli, Penne) - al dente kochen, abschrecken
              </p>
              <p className="mb-3">
                <strong>Dressing:</strong> Mayonnaise + Joghurt + Senf + Essig
              </p>
              <p className="mb-3">
                <strong>Einlagen:</strong> Paprika, Gurke, Tomaten, Erbsen, Mais, Schinken
              </p>
              <p className="text-sm italic">
                💡 <strong>Tipp:</strong> Nudelsalat schmeckt am nächsten Tag besser (Aromen ziehen durch)
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Krautsalat (Coleslaw)</h4>
              <p className="mb-3">
                <strong>Basis:</strong> Weißkohl oder Rotkohl (fein hobeln)
              </p>
              <p className="mb-3">
                <strong>Dressing:</strong> Mayonnaise + Essig + Zucker + Salz
              </p>
              <p className="mb-3">
                <strong>Extras:</strong> Karotten (geraspelt), Zwiebeln
              </p>
              <p className="text-sm italic">
                💡 <strong>Tipp:</strong> Kohl mit Salz einmassieren, 10 Min ziehen lassen (wird weicher)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">🎯 Die goldenen Regeln</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-2xl mr-3">1️⃣</span>
              <span><strong>Trocken ist Trumpf:</strong> Salat muss komplett trocken sein</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">2️⃣</span>
              <span><strong>Dressing sparsam:</strong> Lieber nachgeben als ertränken</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">3️⃣</span>
              <span><strong>Timing:</strong> Dressing erst kurz vor dem Servieren (außer Kartoffel-/Nudelsalat)</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">4️⃣</span>
              <span><strong>Balance:</strong> Öl + Säure + Salz (+ oft Süße) = perfektes Dressing</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-semibold">Mache 3 verschiedene Dressings und teste sie an verschiedenen Salaten.</p>
          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>
              <strong>Klassische Vinaigrette:</strong> 3 EL Öl, 1 EL Essig, 1 TL Senf, Salz, Pfeffer
              <br/><span className="text-sm italic">→ Teste an: Grünem Salat</span>
            </li>
            <li>
              <strong>Honig-Senf-Dressing:</strong> Wie oben, aber mit 1 EL Honig
              <br/><span className="text-sm italic">→ Teste an: Rucola mit Nüssen</span>
            </li>
            <li>
              <strong>Joghurt-Dressing:</strong> Joghurt + Öl + Zitrone + Kräuter
              <br/><span className="text-sm italic">→ Teste an: Gurkensalat</span>
            </li>
          </ol>
          <p className="mt-4 text-sm">
            <strong>Beobachte:</strong> Wie verändert sich der Geschmack? Welches Dressing passt zu welchem Salat?
          </p>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-4">Salad is Not a Side Dish 🥗</h2>
          <p className="text-lg leading-relaxed">
            A good salad is not "something you eat on the side". It's a composition of textures, colors and 
            flavors. The difference between "meh" and "wow" lies in the dressing and preparation.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-3">
            The 3 Pillars of a Good Salad
          </h3>
          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>
              <strong>Base:</strong> Fresh, dry lettuce (moisture is the enemy!)
            </li>
            <li>
              <strong>Texture:</strong> Crunchy (nuts, croutons), Creamy (cheese, avocado), Juicy (tomatoes)
            </li>
            <li>
              <strong>Dressing:</strong> The balance of oil, acid, salt (and often sweetness)
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Preparing Lettuce Properly
          </h3>
          
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">Step 1: Washing</h4>
              <p className="mb-2">
                Lettuce can be sandy (especially lamb's lettuce, arugula). 
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Wash in cold water (change several times until no sand remains)</li>
                <li>Move leaves gently (don't crush)</li>
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">Step 2: Drying (IMPORTANT!)</h4>
              <p className="mb-3">
                <strong>Why?</strong> Water dilutes the dressing and makes salad soggy.
              </p>
              <p className="mb-2">
                <strong>Methods:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Salad spinner:</strong> Best method (spins water out)</li>
                <li><strong>Paper towels:</strong> Pat leaves gently</li>
                <li><strong>Clean dish towel:</strong> Shake leaves in it</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">Step 3: Tear vs. Cut</h4>
              <p className="mb-2">
                <strong>Tear:</strong> Butter lettuce, arugula, lamb's lettuce (keeps freshness)
              </p>
              <p>
                <strong>Cut:</strong> Iceberg, Chinese cabbage, red cabbage (with sharp knife!)
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Dressings - The Science of Balance
          </h3>
          
          <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-lg mb-4">
            <h4 className="font-bold mb-3 text-lg">The Base Formula: Vinaigrette</h4>
            <p className="mb-4">
              <strong>Ratio: 3:1 (Oil : Acid)</strong>
            </p>
            <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
              <p className="mb-3"><strong>Ingredients:</strong></p>
              <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
                <li>3 tbsp Oil (olive oil, canola oil, nut oil)</li>
                <li>1 tbsp Acid (vinegar, lemon juice)</li>
                <li>1 tsp Mustard (emulsifier! Holds mixture together)</li>
                <li>Salt, Pepper</li>
                <li>Optional: 1 tsp honey/maple syrup (balance to acid)</li>
              </ul>
              <p className="mb-3"><strong>Instructions:</strong></p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Put mustard + acid + salt/pepper in a bowl</li>
                <li>Whisk in oil slowly (with whisk or fork)</li>
                <li>Taste and adjust</li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">Variant: Yogurt Dressing</h4>
              <p className="mb-3"><strong>Ingredients:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>150g Yogurt (plain)</li>
                <li>2 tbsp Olive oil</li>
                <li>1 tbsp Lemon juice</li>
                <li>Fresh herbs (dill, parsley)</li>
                <li>Garlic (optional)</li>
                <li>Salt, Pepper</li>
              </ul>
              <p className="mt-3 text-sm italic">
                💡 Perfect for: Cucumbers, tomatoes, coleslaw
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">Variant: Honey Mustard Dressing</h4>
              <p className="mb-3"><strong>Ingredients:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>3 tbsp Olive oil</li>
                <li>1 tbsp Apple cider vinegar</li>
                <li>1 tbsp Honey</li>
                <li>1 tbsp Mustard (grainy)</li>
                <li>Salt, Pepper</li>
              </ul>
              <p className="mt-3 text-sm italic">
                💡 Perfect for: Leaf salads, arugula, spinach
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Classic Salads
          </h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Green Salad (Base)</h4>
              <p className="mb-3">
                <strong>Ingredients:</strong> Butter lettuce, arugula, lamb's lettuce (mixed)
              </p>
              <p className="mb-3">
                <strong>Dressing:</strong> Classic vinaigrette
              </p>
              <p className="mb-3">
                <strong>Extras:</strong> Toasted nuts, shaved Parmesan, croutons
              </p>
              <p className="text-sm italic">
                💡 <strong>Tip:</strong> Add dressing just before serving (or salad gets soggy)
              </p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Potato Salad (German)</h4>
              <p className="mb-3">
                <strong>Two variants:</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white dark:bg-stone-700 p-3 rounded">
                  <p className="font-semibold mb-2">Southern (warm)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Waxy potatoes</li>
                    <li>Hot broth</li>
                    <li>Vinegar, oil</li>
                    <li>Onions</li>
                    <li>Bacon (optional)</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-stone-700 p-3 rounded">
                  <p className="font-semibold mb-2">Northern (cold)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Waxy potatoes</li>
                    <li>Mayonnaise</li>
                    <li>Broth</li>
                    <li>Pickles</li>
                    <li>Onions, apples</li>
                  </ul>
                </div>
              </div>
              <p className="mt-3 text-sm italic">
                💡 <strong>Important:</strong> Mix potatoes with dressing while still warm (absorbs better)
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Pasta Salad</h4>
              <p className="mb-3">
                <strong>Base:</strong> Short pasta (fusilli, penne) - cook al dente, rinse
              </p>
              <p className="mb-3">
                <strong>Dressing:</strong> Mayonnaise + yogurt + mustard + vinegar
              </p>
              <p className="mb-3">
                <strong>Mix-ins:</strong> Bell peppers, cucumber, tomatoes, peas, corn, ham
              </p>
              <p className="text-sm italic">
                💡 <strong>Tip:</strong> Pasta salad tastes better the next day (flavors meld)
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg">Coleslaw</h4>
              <p className="mb-3">
                <strong>Base:</strong> White or red cabbage (shred finely)
              </p>
              <p className="mb-3">
                <strong>Dressing:</strong> Mayonnaise + vinegar + sugar + salt
              </p>
              <p className="mb-3">
                <strong>Extras:</strong> Carrots (grated), onions
              </p>
              <p className="text-sm italic">
                💡 <strong>Tip:</strong> Massage cabbage with salt, let sit 10 min (softens)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">🎯 The Golden Rules</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-2xl mr-3">1️⃣</span>
              <span><strong>Dry is King:</strong> Lettuce must be completely dry</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">2️⃣</span>
              <span><strong>Dressing Sparingly:</strong> Better to add more than to drown</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">3️⃣</span>
              <span><strong>Timing:</strong> Dressing just before serving (except potato/pasta salad)</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">4️⃣</span>
              <span><strong>Balance:</strong> Oil + Acid + Salt (+ often Sweetness) = perfect dressing</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-semibold">Make 3 different dressings and test them on different salads.</p>
          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>
              <strong>Classic Vinaigrette:</strong> 3 tbsp oil, 1 tbsp vinegar, 1 tsp mustard, salt, pepper
              <br/><span className="text-sm italic">→ Test on: Green salad</span>
            </li>
            <li>
              <strong>Honey Mustard Dressing:</strong> As above, but with 1 tbsp honey
              <br/><span className="text-sm italic">→ Test on: Arugula with nuts</span>
            </li>
            <li>
              <strong>Yogurt Dressing:</strong> Yogurt + oil + lemon + herbs
              <br/><span className="text-sm italic">→ Test on: Cucumber salad</span>
            </li>
          </ol>
          <p className="mt-4 text-sm">
            <strong>Observe:</strong> How does the taste change? Which dressing fits which salad?
          </p>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Dressing-Meisterschaft',
      description: 'Stelle 3 verschiedene Dressings her und teste sie.',
      checklist: [
        { text: 'Mache eine klassische Vinaigrette (3:1 Öl:Essig + Senf)' },
        { text: 'Mache ein Honig-Senf-Dressing (mit Honig)' },
        { text: 'Mache ein Joghurt-Dressing (Joghurt + Öl + Zitrone)' },
        { text: 'Teste jedes Dressing an einem anderen Salat' },
        { text: 'Welches schmeckt dir am besten? Warum?' }
      ]
    },
    en: {
      title: 'Dressing Mastery',
      description: 'Make 3 different dressings and test them.',
      checklist: [
        { text: 'Make a classic vinaigrette (3:1 oil:vinegar + mustard)' },
        { text: 'Make a honey mustard dressing (with honey)' },
        { text: 'Make a yogurt dressing (yogurt + oil + lemon)' },
        { text: 'Test each dressing on a different salad' },
        { text: 'Which do you like best? Why?' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Warum muss Salat trocken sein?', back: 'Weil Wasser das Dressing verdünnt und den Salat matschig macht. Dressing haftet nur an trockenem Salat.' },
      { front: 'Was ist das Standard-Verhältnis für Vinaigrette?', back: '3:1 (Öl : Säure). Senf dient als Emulgator und hält die Mischung zusammen.' },
      { front: 'Warum gibt man Kartoffelsalat-Dressing zu warmen Kartoffeln?', back: 'Warme Kartoffeln saugen das Dressing besser auf und nehmen mehr Geschmack an.' },
      { front: 'Wann gibt man Dressing zum Salat?', back: 'Blattsalate: Kurz vor dem Servieren. Kartoffel-/Nudelsalat: Früher (Aromen ziehen durch).' }
    ],
    en: [
      { front: 'Why must lettuce be dry?', back: 'Because water dilutes the dressing and makes salad soggy. Dressing only adheres to dry lettuce.' },
      { front: 'What is the standard ratio for vinaigrette?', back: '3:1 (Oil : Acid). Mustard serves as emulsifier and holds the mixture together.' },
      { front: 'Why add potato salad dressing to warm potatoes?', back: 'Warm potatoes absorb dressing better and take on more flavor.' },
      { front: 'When do you add dressing to salad?', back: 'Leaf salads: Just before serving. Potato/pasta salad: Earlier (flavors meld).' }
    ]
  }
};


