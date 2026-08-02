import React from 'react';

export const dessertsLesson = {
  id: 'c4_m4_desserts',
  title: { 
    en: '4.8 Desserts & Sweets', 
    de: '4.8 Desserts & Süßspeisen' 
  },
  description: { 
    en: 'The sweet finale: Basics of creams, puddings, and fruit desserts.', 
    de: 'Das süße Finale: Grundlagen von Cremes, Puddings und Fruchtdesserts.' 
  },
  category: 'theory',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Der krönende Abschluss 🍮</h2>
          <p className="text-lg leading-relaxed">
            Ein Dessert muss nicht kompliziert sein. Oft sind die einfachsten Dinge – perfekt ausgeführt – die besten. 
            Hier geht es um die Klassiker, die ohne Backofen funktionieren.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Pudding & Cremes (Bindung)
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-yellow-900 dark:text-yellow-100">Der Stärke-Pudding</h4>
              <p className="text-sm mb-2">Klassischer Vanille- oder Schokopudding.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Prinzip:</strong> Milch + Zucker + Speisestärke aufkochen.</li>
                <li><strong>Wichtig:</strong> Stärke erst in <em>kalter</em> Milch anrühren, dann in die heiße Milch geben (sonst Klümpchen!).</li>
                <li><strong>Trick:</strong> Frischhaltefolie direkt auf die Oberfläche legen (verhindert Hautbildung).</li>
              </ul>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2">Die Mousse (Luftigkeit)</h4>
              <p className="text-sm mb-2">Klassische Mousse au Chocolat.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Prinzip:</strong> Geschmacksträger (Schokolade) + Luft (Eischnee oder Sahne).</li>
                <li><strong>Technik:</strong> "Unterheben" (Fold). Nicht rühren! Die Luftbläschen müssen erhalten bleiben.</li>
                <li><strong>Geduld:</strong> Braucht Zeit im Kühlschrank zum Festwerden.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Fruchtdesserts
          </h3>
          
          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-2">Kompott 🍎</h4>
              <p className="text-sm">
                Früchte in Flüssigkeit (Wasser/Saft + Zucker) gekocht.
                <br/><strong>Tipp:</strong> Harte Früchte (Apfel, Birne) eignen sich perfekt. Gewürze wie Zimt, Nelke oder Sternanis mitkochen.
              </p>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-2">Rote Grütze 🍒</h4>
              <p className="text-sm">
                Beerenmischung, die mit Stärke gebunden wird.
                <br/><strong>Konsistenz:</strong> Zwischen Sauce und Pudding. Perfekt zu Vanillesauce oder Eis.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-2">Obstsalat (Das Upgrade) 🥗</h4>
              <p className="text-sm">
                Nicht nur kleinschneiden!
                <br/><strong>Marinieren:</strong> Mit Zitrone/Limette und etwas Zucker/Honig mischen und 15 Min ziehen lassen. Zieht Saft und schmeckt viel intensiver!
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Einfaches Tiramisu (Schichten)
          </h3>
          <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-xl">
             <p className="mb-3">Das beliebteste italienische Dessert funktioniert ohne Kochen.</p>
             <ol className="list-decimal list-inside space-y-2 ml-4">
               <li><strong>Die Creme:</strong> Mascarpone + Zucker + Eigelb (klassisch) oder Sahne (modern) cremig rühren.</li>
               <li><strong>Der Keks:</strong> Löffelbiskuits kurz (!) in starken Espresso (ggf. mit Amaretto) tauchen.</li>
               <li><strong>Schichten:</strong> Keks - Creme - Keks - Creme.</li>
               <li><strong>Finish:</strong> Kakao drüberstäuben (erst kurz vor dem Servieren!).</li>
               <li><strong>Zeit:</strong> Muss mind. 4 Stunden kühlen (durchziehen).</li>
             </ol>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-bold">Schokoladen-Mousse (Einfache Variante):</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Schmelze 100g Zartbitterschokolade im Wasserbad (lauwarm abkühlen lassen).</li>
            <li>Schlage 200ml Sahne steif.</li>
            <li>Gib erst einen Löffel Sahne zur Schokolade und rühre ihn glatt (Temperaturangleich).</li>
            <li>Hebe dann die restliche Sahne vorsichtig unter (nicht rühren, falten!).</li>
            <li>Fülle es in Gläser und stelle es für 2 Stunden kalt.</li>
          </ol>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">The Sweet Finale 🍮</h2>
          <p className="text-lg leading-relaxed">
            A dessert doesn't have to be complicated. Often the simplest things – executed perfectly – are the best. 
            Here we focus on classics that work without an oven.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Puddings & Creams (Binding)
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-yellow-900 dark:text-yellow-100">Starch Pudding</h4>
              <p className="text-sm mb-2">Classic vanilla or chocolate pudding.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Principle:</strong> Boil milk + sugar + cornstarch.</li>
                <li><strong>Important:</strong> Mix starch in <em>cold</em> milk first, then add to hot milk (avoids lumps!).</li>
                <li><strong>Trick:</strong> Place cling film directly on the surface (prevents skin formation).</li>
              </ul>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2">The Mousse (Airiness)</h4>
              <p className="text-sm mb-2">Classic Chocolate Mousse.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Principle:</strong> Flavor carrier (chocolate) + Air (egg whites or cream).</li>
                <li><strong>Technique:</strong> "Fold". Do not stir! The air bubbles must be preserved.</li>
                <li><strong>Patience:</strong> Needs time in the fridge to set.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Fruit Desserts
          </h3>
          
          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-2">Compote 🍎</h4>
              <p className="text-sm">
                Fruit cooked in liquid (water/juice + sugar).
                <br/><strong>Tip:</strong> Hard fruits (apple, pear) are perfect. Cook with spices like cinnamon, cloves, or star anise.
              </p>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-2">Red Fruit Pudding (Rote Grütze) 🍒</h4>
              <p className="text-sm">
                Berry mix thickened with starch.
                <br/><strong>Consistency:</strong> Between sauce and pudding. Perfect with vanilla sauce or ice cream.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-2">Fruit Salad (The Upgrade) 🥗</h4>
              <p className="text-sm">
                Not just chopping!
                <br/><strong>Marinate:</strong> Mix with lemon/lime and some sugar/honey and let sit for 15 min. Draws out juice and tastes much more intense!
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Simple Tiramisu (Layering)
          </h3>
          <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-xl">
             <p className="mb-3">The most popular Italian dessert works without cooking.</p>
             <ol className="list-decimal list-inside space-y-2 ml-4">
               <li><strong>The Cream:</strong> Mix mascarpone + sugar + egg yolks (classic) or cream (modern) until creamy.</li>
               <li><strong>The Biscuit:</strong> Dip ladyfingers briefly (!) in strong espresso (opt. with Amaretto).</li>
               <li><strong>Layers:</strong> Biscuit - Cream - Biscuit - Cream.</li>
               <li><strong>Finish:</strong> Dust with cocoa (just before serving!).</li>
               <li><strong>Time:</strong> Must chill for at least 4 hours.</li>
             </ol>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-bold">Chocolate Mousse (Simple Version):</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Melt 100g dark chocolate in a water bath (let cool to lukewarm).</li>
            <li>Whip 200ml heavy cream until stiff.</li>
            <li>Add a spoonful of cream to the chocolate and mix until smooth (tempering).</li>
            <li>Then gently fold in the remaining cream (do not stir, fold!).</li>
            <li>Fill into glasses and refrigerate for 2 hours.</li>
          </ol>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Einfache Schokomousse',
      description: 'Mache eine Mousse aus nur 2 Zutaten (Schokolade & Sahne).',
      checklist: [
        { text: 'Schmelze Schokolade und lass sie abkühlen' },
        { text: 'Schlage Sahne steif' },
        { text: 'Gleiche Temperatur an (Löffel-Trick)' },
        { text: 'Hebe die Sahne vorsichtig unter' },
        { text: 'Kühle für mind. 2 Stunden' }
      ]
    },
    en: {
      title: 'Simple Chocolate Mousse',
      description: 'Make a mousse from just 2 ingredients (chocolate & cream).',
      checklist: [
        { text: 'Melt chocolate and let cool' },
        { text: 'Whip cream until stiff' },
        { text: 'Temper mixture (spoon trick)' },
        { text: 'Gently fold in the cream' },
        { text: 'Chill for at least 2 hours' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Wie verhindert man Haut auf Pudding?', back: 'Frischhaltefolie direkt auf die heiße Oberfläche legen.' },
      { front: 'Was bedeutet "Unterheben"?', back: 'Zutaten (wie Eischnee/Sahne) vorsichtig mit einem Spatel in eine Masse falten, um Luftbläschen zu erhalten.' },
      { front: 'Warum muss man Puddingstärke kalt anrühren?', back: 'In heißer Flüssigkeit würde sie sofort klumpen.' },
      { front: 'Was ist der Unterschied zwischen Kompott und Mus?', back: 'Kompott enthält Fruchtstücke, Mus ist püriert.' }
    ],
    en: [
      { front: 'How to prevent skin on pudding?', back: 'Place cling film directly on the hot surface.' },
      { front: 'What does "folding" mean?', back: 'Gently mixing ingredients (like egg whites/cream) into a mixture with a spatula to keep air bubbles.' },
      { front: 'Why mix starch in cold liquid?', back: 'It would clump immediately in hot liquid.' },
      { front: 'What is the difference between compote and puree?', back: 'Compote contains fruit pieces, puree is smooth.' }
    ]
  }
};

