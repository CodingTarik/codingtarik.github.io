import React from 'react';

export const grillingOutdoorLesson = {
  id: 'c6_m6_grilling',
  title: { 
    en: '6.1 Grilling & Outdoor', 
    de: '6.1 Grillen & Outdoor' 
  },
  description: { 
    en: 'Fire, smoke, and meat. Mastering direct vs. indirect heat.', 
    de: 'Feuer, Rauch und Fleisch. Direkte vs. indirekte Hitze meistern.' 
  },
  category: 'world',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Der Urtrieb am Feuer 🔥</h2>
          <p className="text-lg leading-relaxed">
            Grillen ist mehr als Würstchen verbrennen. Es ist Kochen mit Hochtemperatur und Rauch. 
            Wer den Unterschied zwischen direkter und indirekter Hitze kennt, ist der König am Rost.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Die zwei Zonen
          </h3>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-800">
            <p className="mb-3 font-bold">
              Der häufigste Fehler: Den ganzen Grill voll Kohle schütten.
            </p>
            <p className="mb-4">
              Baue immer <strong>Zwei Zonen</strong> auf:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <h4 className="font-bold text-red-600 text-lg mb-2">Direkte Zone (Die Hölle)</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li><strong>Wo:</strong> Direkt über der Glut/Flamme.</li>
                  <li><strong>Temperatur:</strong> 250°C - 350°C.</li>
                  <li><strong>Wofür:</strong> Steaks, Burger, Würstchen (Kurzbraten).</li>
                  <li><strong>Ziel:</strong> Kruste, Röstaromen (Maillard).</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <h4 className="font-bold text-blue-600 text-lg mb-2">Indirekte Zone (Der Backofen)</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li><strong>Wo:</strong> Neben der Glut (kein Feuer darunter). Deckel ZU!</li>
                  <li><strong>Temperatur:</strong> 120°C - 200°C.</li>
                  <li><strong>Wofür:</strong> Hähnchenschenkel, ganze Braten, Dickes Fleisch.</li>
                  <li><strong>Ziel:</strong> Garen ohne Verbrennen.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Kohle vs. Gas
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-stone-800 text-white p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2">Holzkohle 🪵</h4>
              <p className="text-sm mb-2">
                + Echter Rauchgeschmack (wenn Fett in Glut tropft).<br/>
                + Höhere Hitze möglich.<br/>
                - Braucht 30 Min Vorlauf (Anzündkamin nutzen!).
              </p>
            </div>
            <div className="bg-stone-200 dark:bg-stone-600 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2">Gas ⛽</h4>
              <p className="text-sm mb-2">
                + Sofort startklar.<br/>
                + Temperatur perfekt regelbar.<br/>
                - Weniger "Romantik", weniger Rauch (außer mit Räucherbox).
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Das perfekte Steak (Reverse Sear)
          </h3>
          <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
            <p className="mb-3 font-bold">
              So grillen Profis dicke Steaks (ab 3cm):
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm md:text-base">
              <li><strong>Indirekt garen:</strong> Lege das Steak in die indirekte Zone (ca. 120°C).</li>
              <li><strong>Warten:</strong> Lass es langsam auf ca. 48°C Kerntemperatur ziehen (Thermometer!).</li>
              <li><strong>Vollgas:</strong> Lege es nun auf die <strong>direkte Zone</strong> (maximale Hitze).</li>
              <li><strong>Kruste:</strong> Nur 30-60 Sekunden pro Seite für die Kruste.</li>
              <li><strong>Ruhen:</strong> 5 Min ruhen lassen. Perfektes Medium-Rare, ohne grauen Rand.</li>
            </ol>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-bold">Das 2-Zonen-Experiment:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Baue deinen Grill so auf, dass Kohle nur auf einer Seite liegt (oder nur ein Brenner an ist).</li>
            <li>Grille ein Würstchen <strong>direkt</strong> (braun & knackig).</li>
            <li>Grille einen Maiskolben (mit Butter bestrichen) <strong>indirekt</strong> bei geschlossenem Deckel für 20 Min.</li>
            <li>Beobachte den Unterschied: Der Mais verbrennt nicht, wird aber gar.</li>
          </ol>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Primal Instinct at the Fire 🔥</h2>
          <p className="text-lg leading-relaxed">
            Grilling is more than burning sausages. It's cooking with high heat and smoke. 
            Knowing the difference between direct and indirect heat makes you the king of the grill.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. The Two Zones
          </h3>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-800">
            <p className="mb-3 font-bold">
              Most common mistake: Filling the entire grill with charcoal.
            </p>
            <p className="mb-4">
              Always build <strong>Two Zones</strong>:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <h4 className="font-bold text-red-600 text-lg mb-2">Direct Zone (Hell)</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li><strong>Where:</strong> Directly over embers/flame.</li>
                  <li><strong>Temperature:</strong> 250°C - 350°C.</li>
                  <li><strong>For:</strong> Steaks, Burgers, Sausages (Searing).</li>
                  <li><strong>Goal:</strong> Crust, roasted flavors (Maillard).</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <h4 className="font-bold text-blue-600 text-lg mb-2">Indirect Zone (Oven)</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li><strong>Where:</strong> Next to embers (no fire underneath). Lid CLOSED!</li>
                  <li><strong>Temperature:</strong> 120°C - 200°C.</li>
                  <li><strong>For:</strong> Chicken legs, whole roasts, thick meat.</li>
                  <li><strong>Goal:</strong> Cooking through without burning.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Charcoal vs. Gas
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-stone-800 text-white p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2">Charcoal 🪵</h4>
              <p className="text-sm mb-2">
                + Real smoke flavor (when fat drips into embers).<br/>
                + Higher heat possible.<br/>
                - Needs 30 min prep (use chimney starter!).
              </p>
            </div>
            <div className="bg-stone-200 dark:bg-stone-600 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2">Gas ⛽</h4>
              <p className="text-sm mb-2">
                + Ready immediately.<br/>
                + Temperature perfectly adjustable.<br/>
                - Less "romance", less smoke (unless with smoker box).
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. The Perfect Steak (Reverse Sear)
          </h3>
          <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
            <p className="mb-3 font-bold">
              How pros grill thick steaks (3cm+):
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm md:text-base">
              <li><strong>Cook indirectly:</strong> Place steak in indirect zone (approx. 120°C).</li>
              <li><strong>Wait:</strong> Let it slowly reach approx. 48°C core temp (Thermometer!).</li>
              <li><strong>Full throttle:</strong> Now place on <strong>direct zone</strong> (max heat).</li>
              <li><strong>Crust:</strong> Only 30-60 seconds per side for crust.</li>
              <li><strong>Rest:</strong> Rest for 5 min. Perfect Medium-Rare, no grey band.</li>
            </ol>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-bold">The 2-Zone Experiment:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Set up your grill so charcoal is only on one side (or only one burner on).</li>
            <li>Grill a sausage <strong>directly</strong> (brown & snappy).</li>
            <li>Grill a corn cob (buttered) <strong>indirectly</strong> with lid closed for 20 min.</li>
            <li>Observe the difference: The corn doesn't burn but gets cooked.</li>
          </ol>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: '2-Zonen-Grillen',
      description: 'Baue einen Grill für 2 Zonen auf.',
      checklist: [
        { text: 'Platziere Kohle nur auf einer Seite' },
        { text: 'Erhitze den Grill' },
        { text: 'Grille etwas direkt (kurz, heiß)' },
        { text: 'Grille etwas indirekt (lang, Deckel zu)' }
      ]
    },
    en: {
      title: '2-Zone Grilling',
      description: 'Set up a grill for 2 zones.',
      checklist: [
        { text: 'Place charcoal on one side only' },
        { text: 'Heat the grill' },
        { text: 'Grill something directly (short, hot)' },
        { text: 'Grill something indirectly (long, lid closed)' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist die direkte Zone?', back: 'Direkt über der Hitze (zum Anbraten).' },
      { front: 'Was ist die indirekte Zone?', back: 'Neben der Hitze (zum Garen wie im Ofen).' },
      { front: 'Wann muss der Deckel zu sein?', back: 'Immer beim indirekten Grillen (Zirkulation).' },
      { front: 'Was ist Reverse Sear?', back: 'Erst langsam garen (indirekt), dann kurz anbraten (direkt).' }
    ],
    en: [
      { front: 'What is the direct zone?', back: 'Directly over heat (for searing).' },
      { front: 'What is the indirect zone?', back: 'Next to heat (for cooking like in an oven).' },
      { front: 'When must the lid be closed?', back: 'Always when grilling indirectly (circulation).' },
      { front: 'What is Reverse Sear?', back: 'Cook slowly first (indirect), then sear briefly (direct).' }
    ]
  }
};

