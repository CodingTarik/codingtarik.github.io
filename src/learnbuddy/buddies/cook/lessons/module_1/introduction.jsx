import React from 'react';

export const introductionLesson = {
  id: 'c1_m1_intro_phil',
  title: { 
    en: '1.1 Introduction & Philosophy', 
    de: '1.1 Einführung & Philosophie' 
  },
  description: { 
    en: 'Understanding the kitchen, the philosophy of food, and your first steps into the culinary world.', 
    de: 'Verstehe die Küche, die Philosophie des Essens und deine ersten Schritte in die Welt des Kochens.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Willkommen in der Küche! 🍳

Der erste Schritt ist getan: Du bist hier, du bist neugierig, und du willst lernen zu kochen. Das ist großartig! Kochen ist eine der wertvollsten Fähigkeiten, die du erlernen kannst. Es verbindet Kreativität, Wissenschaft, Handwerk und die Freude, andere (oder dich selbst) glücklich zu machen.

Diese Reise wird dich von "Ich kann nur Nudeln kochen" zu "Ich kann spontan aus dem Kühlschrank ein leckeres Gericht zaubern" führen. Klingt weit weg? Ist es nicht. Du brauchst nur etwas Zeit, Geduld und die Bereitschaft, aus Fehlern zu lernen.

---

### Was ist Kochen eigentlich?

Kochen ist mehr als nur "Rezept befolgen". Es ist eine faszinierende Kombination aus drei Elementen:

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
  <div className="p-4 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
    <div className="text-3xl mb-2">🛠️</div>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Handwerk</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      Wie ein Tischler sein Holz bearbeitet, musst du lernen, wie man schneidet, rührt und Hitze kontrolliert. Das sind Fähigkeiten, die man üben kann und muss. Niemand wird als Meisterkoch geboren.
    </p>
  </div>
  
  <div className="p-4 bg-purple-50 dark:bg-purple-900/40 rounded-lg">
    <div className="text-3xl mb-2">🔬</div>
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Wissenschaft</h4>
    <p className="text-sm text-purple-700 dark:text-purple-300">
      Warum bräunt Fleisch? Warum geht ein Teig auf? Warum werden Eier fest? Wenn du die "Warum"-Fragen verstehst, bist du kein Sklave von Rezepten mehr. Du verstehst die Logik dahinter.
    </p>
  </div>
  
  <div className="p-4 bg-amber-50 dark:bg-amber-900/40 rounded-lg">
    <div className="text-3xl mb-2">🎨</div>
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Kreativität</h4>
    <p className="text-sm text-amber-700 dark:text-amber-300">
      Sobald du das Handwerk beherrschst, beginnt der Spaß. Aromen kombinieren, improvisieren, Dinge "aus dem Bauch heraus" tun. Hier wird Kochen zur Kunst.
    </p>
  </div>
</div>

**Der häufigste Fehler von Anfängern?** Sie versuchen, sofort kreativ zu sein, ohne das Handwerk zu beherrschen. Das führt zu Chaos, angebrannten Töpfen und Frust.

**Unser Weg:** Erst die Technik, dann die Freiheit. Schritt für Schritt.

---

### Die Küche als Arbeitsplatz

Profiköche denken in Zonen. Auch in deiner Heimküche (egal wie klein!) hilft dieses Denken enorm. Eine gut organisierte Küche macht den Unterschied zwischen Stress und Flow.

<div className="my-6 bg-stone-50 dark:bg-stone-900 p-6 rounded-xl border border-stone-200 dark:border-stone-700">

#### Die Zwei Hauptzonen:

<div className="grid md:grid-cols-2 gap-6 mt-4">
  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
    <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
      <span className="text-2xl">❄️</span> Die Kalte Zone (Vorbereitung)
    </h4>
    <p className="text-sm mb-3">
      Hier wird geschnitten, gewogen, gemischt und vorbereitet. <strong>Hier verbringst du 70% deiner Zeit!</strong>
    </p>
    <p className="text-sm font-semibold mb-2">Was du brauchst:</p>
    <ul className="text-sm space-y-1 list-disc list-inside">
      <li>Viel Arbeitsfläche (räume alles weg!)</li>
      <li>Großes Schneidebrett</li>
      <li>Mülleimer oder Schüssel für Abfälle in Reichweite</li>
      <li>Kleine Schüsseln für vorbereitete Zutaten</li>
      <li>Deine Waage</li>
    </ul>
  </div>
  
  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
    <h4 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
      <span className="text-2xl">🔥</span> Die Heiße Zone (Garen)
    </h4>
    <p className="text-sm mb-3">
      Herd, Ofen, Mikrowelle. Hier wird mit Hitze gearbeitet. <strong>Hier liegt nur, was JETZT gebraucht wird.</strong>
    </p>
    <p className="text-sm font-semibold mb-2">Was du brauchst:</p>
    <ul className="text-sm space-y-1 list-disc list-inside">
      <li>Vorbereitete Zutaten (aus der kalten Zone!)</li>
      <li>Kochgeschirr (Pfanne, Topf)</li>
      <li>Werkzeuge: Pfannenwender, Kochlöffel</li>
      <li>Probierlöffel (zum Abschmecken)</li>
      <li>Topflappen</li>
    </ul>
  </div>
</div>

</div>

**Profi-Tipp:** Räume BEVOR du kochst auf. Eine überladene Arbeitsfläche ist der Feind. Du brauchst Platz zum Denken und Arbeiten.

---

### Die Philosophie des Kochens

Kochen ist nicht nur eine praktische Fähigkeit. Es ist auch eine Einstellung. Hier sind drei Prinzipien, die dein Verhältnis zum Essen (und Leben) verändern werden:

<div className="space-y-6 my-6">

<div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
  <div className="text-4xl flex-shrink-0">🙏</div>
  <div>
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">1. Respekt vor dem Lebensmittel</h4>
    <p className="text-sm text-green-700 dark:text-green-300">
      Jedes Stück Fleisch war ein Tier, das gelebt hat. Jedes Gemüse hat Monate gebraucht, um zu wachsen. Werfe nichts weg, wenn es sich vermeiden lässt. Lerne Resteverwertung. 
      <br/><br/>
      <strong>Praktisch:</strong> Behandle Zutaten gut – quetsche Kräuter nicht unnötig, verbrenne Gewürze nicht, schneide Tomaten mit einem scharfen Messer, nicht mit einem stumpfen (sonst zerquetscht du sie).
    </p>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700">
  <div className="text-4xl flex-shrink-0">📅</div>
  <div>
    <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">2. Saisonalität & Regionalität</h4>
    <p className="text-sm text-orange-700 dark:text-orange-300">
      <strong>Erdbeeren im Dezember</strong> schmecken nach Wasser und kosten ein Vermögen. <strong>Erdbeeren im Juni</strong> schmecken nach Sonne und Kindheit.
      <br/><br/>
      Kochen nach Saison ist:
    </p>
    <ul className="text-sm list-disc list-inside mt-2 space-y-1 text-orange-700 dark:text-orange-300">
      <li><strong>Günstiger:</strong> Angebot und Nachfrage</li>
      <li><strong>Gesünder:</strong> Mehr Vitamine, weniger Transport</li>
      <li><strong>Leckerer:</strong> Vollreif geerntet, nicht unreif im Container gereift</li>
      <li><strong>Nachhaltiger:</strong> Weniger CO₂, lokale Bauern unterstützt</li>
    </ul>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
  <div className="text-4xl flex-shrink-0">🌱</div>
  <div>
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">3. Geduld & Übung</h4>
    <p className="text-sm text-purple-700 dark:text-purple-300">
      Du wirst Fehler machen. Du wirst Dinge anbrennen lassen. Du wirst versalzen. <strong>Das ist völlig normal.</strong>
      <br/><br/>
      Jeder Profikoch hat tausende Male das Gleiche gekocht, bevor es perfekt war. Kochen lernt man durch Kochen. Nicht durch Lesen. Nicht durch Videos. Durch TUN.
      <br/><br/>
      <strong>Die Regel:</strong> Wenn etwas schief geht, frage dich "Warum?". Verbrannt? Zu heiß. Zu salzig? Nächstes Mal weniger. Zu fade? Mehr würzen. Jeder Fehler ist eine Lektion.
    </p>
  </div>
</div>

</div>

---

### Warum diese Philosophie wichtig ist

Viele Menschen sehen Kochen als lästige Pflicht. "Ich muss ja essen." Aber wenn du mit der richtigen Einstellung rangehst, wird es zu einer der befriedigendsten Aktivitäten deines Tages.

**Kochen ist:**
- **Meditation:** Wenn du schneidest, bist du im Hier und Jetzt
- **Kreativität:** Du erschaffst etwas mit deinen Händen
- **Fürsorge:** Du kümmerst dich um dich (und andere)
- **Freiheit:** Du bist nicht abhängig von Lieferdiensten oder Fertiggerichten

---

### Zusammenfassung: Dein Mindset

Bevor wir in die Techniken eintauchen, verinnerliche diese drei Sätze:

1. **"Ich lerne das Handwerk, bevor ich improvisiere."**
2. **"Ich respektiere meine Zutaten und verschwende nichts."**
3. **"Ich habe Geduld mit mir selbst. Jeder Fehler macht mich besser."**

**Bist du bereit?** Dann lass uns in der nächsten Lektion mit dem wichtigsten Prinzip der Küche starten: **Mise en Place** – Alles an seinem Platz.
    `,
    en: `
### Welcome to the Kitchen! 🍳

You've taken the first step: you\'re here, you\'re curious, and you want to learn to cook. That's fantastic! Cooking is one of the most valuable skills you can acquire. It combines creativity, science, craftsmanship, and the joy of making others (or yourself) happy.

This journey will take you from "I can only cook pasta" to "I can spontaneously create a delicious meal from whatever's in the fridge." Sounds far away? It's not. You just need some time, patience, and the willingness to learn from mistakes.

---

### What is Cooking, Really?

Cooking is more than just "following a recipe." It's a fascinating combination of three elements:

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
  <div className="p-4 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
    <div className="text-3xl mb-2">🛠️</div>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Craft</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      Like a carpenter working with wood, you need to learn how to cut, stir, and control heat. These are skills that can and must be practiced. Nobody is born a master chef.
    </p>
  </div>
  
  <div className="p-4 bg-purple-50 dark:bg-purple-900/40 rounded-lg">
    <div className="text-3xl mb-2">🔬</div>
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Science</h4>
    <p className="text-sm text-purple-700 dark:text-purple-300">
      Why does meat brown? Why does dough rise? Why do eggs solidify? When you understand the "why" questions, you\'re no longer a slave to recipes. You understand the logic behind it.
    </p>
  </div>
  
  <div className="p-4 bg-amber-50 dark:bg-amber-900/40 rounded-lg">
    <div className="text-3xl mb-2">🎨</div>
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Creativity</h4>
    <p className="text-sm text-amber-700 dark:text-amber-300">
      Once you master the craft, the fun begins. Combining flavors, improvising, doing things "from the gut." This is where cooking becomes art.
    </p>
  </div>
</div>

**The most common beginner mistake?** They try to be creative immediately without mastering the craft. This leads to chaos, burned pots, and frustration.

**Our approach:** Technique first, then freedom. Step by step.

---

### The Kitchen as a Workspace

Professional chefs think in zones. Even in your home kitchen (no matter how small!), this thinking helps enormously. A well-organized kitchen makes the difference between stress and flow.

<div className="my-6 bg-stone-50 dark:bg-stone-900 p-6 rounded-xl border border-stone-200 dark:border-stone-700">

#### The Two Main Zones:

<div className="grid md:grid-cols-2 gap-6 mt-4">
  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
    <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
      <span className="text-2xl">❄️</span> The Cold Zone (Preparation)
    </h4>
    <p className="text-sm mb-3">
      This is where you cut, weigh, mix, and prepare. <strong>You'll spend 70% of your time here!</strong>
    </p>
    <p className="text-sm font-semibold mb-2">What you need:</p>
    <ul className="text-sm space-y-1 list-disc list-inside">
      <li>Plenty of counter space (clear everything away!)</li>
      <li>Large cutting board</li>
      <li>Trash bin or bowl for scraps within reach</li>
      <li>Small bowls for prepped ingredients</li>
      <li>Your scale</li>
    </ul>
  </div>
  
  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
    <h4 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
      <span className="text-2xl">🔥</span> The Hot Zone (Cooking)
    </h4>
    <p className="text-sm mb-3">
      Stove, oven, microwave. This is where you work with heat. <strong>Only what\'s needed RIGHT NOW should be here.</strong>
    </p>
    <p className="text-sm font-semibold mb-2">What you need:</p>
    <ul className="text-sm space-y-1 list-disc list-inside">
      <li>Prepped ingredients (from the cold zone!)</li>
      <li>Cookware (pan, pot)</li>
      <li>Tools: spatula, wooden spoon</li>
      <li>Tasting spoon</li>
      <li>Pot holders</li>
    </ul>
  </div>
</div>

</div>

**Pro Tip:** Clean up BEFORE you cook. A cluttered counter is the enemy. You need space to think and work.

---

### The Philosophy of Cooking

Cooking isn\'t just a practical skill. It's also an attitude. Here are three principles that will change your relationship with food (and life):

<div className="space-y-6 my-6">

<div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
  <div className="text-4xl flex-shrink-0">🙏</div>
  <div>
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">1. Respect for Ingredients</h4>
    <p className="text-sm text-green-700 dark:text-green-300">
      Every piece of meat was an animal that lived. Every vegetable took months to grow. Don't waste anything if it can be avoided. Learn to use leftovers.
      <br/><br/>
      <strong>Practically:</strong> Treat ingredients well – don\'t unnecessarily bruise herbs, don\'t burn spices, cut tomatoes with a sharp knife, not a dull one (or you'll crush them).
    </p>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700">
  <div className="text-4xl flex-shrink-0">📅</div>
  <div>
    <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">2. Seasonality & Locality</h4>
    <p className="text-sm text-orange-700 dark:text-orange-300">
      <strong>Strawberries in December</strong> taste like water and cost a fortune. <strong>Strawberries in June</strong> taste like sunshine and childhood.
      <br/><br/>
      Cooking seasonally is:
    </p>
    <ul className="text-sm list-disc list-inside mt-2 space-y-1 text-orange-700 dark:text-orange-300">
      <li><strong>Cheaper:</strong> Supply and demand</li>
      <li><strong>Healthier:</strong> More vitamins, less transport</li>
      <li><strong>Tastier:</strong> Picked ripe, not ripened in containers</li>
      <li><strong>More sustainable:</strong> Less CO₂, supports local farmers</li>
    </ul>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
  <div className="text-4xl flex-shrink-0">🌱</div>
  <div>
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">3. Patience & Practice</h4>
    <p className="text-sm text-purple-700 dark:text-purple-300">
      You will make mistakes. You will burn things. You will over-salt. <strong>This is completely normal.</strong>
      <br/><br/>
      Every professional chef has cooked the same thing thousands of times before it was perfect. You learn cooking by cooking. Not by reading. Not by watching videos. By DOING.
      <br/><br/>
      <strong>The rule:</strong> When something goes wrong, ask yourself "Why?". Burned? Too hot. Too salty? Less next time. Too bland? More seasoning. Every mistake is a lesson.
    </p>
  </div>
</div>

</div>

---

### Why This Philosophy Matters

Many people see cooking as a tedious chore. "I have to eat." But if you approach it with the right mindset, it becomes one of the most satisfying activities of your day.

**Cooking is:**
- **Meditation:** When you chop, you\'re in the here and now
- **Creativity:** You create something with your hands
- **Care:** You take care of yourself (and others)
- **Freedom:** You're not dependent on delivery services or ready meals

---

### Summary: Your Mindset

Before we dive into techniques, internalize these three sentences:

1. **"I'll learn the craft before I improvise."**
2. **"I respect my ingredients and waste nothing."**
3. **"I have patience with myself. Every mistake makes me better."**

**Are you ready?** Then let's start with the most important principle in the kitchen in the next lesson: **Mise en Place** – Everything in its place.
    `
  },

  // Task that can be saved to the plan
  task: {
    de: {
      title: 'Der Markt-Check: Lerne Saisonalität kennen',
      description: 'Kochen beginnt beim Einkaufen. Gehe über einen Wochenmarkt oder in einen guten Supermarkt und lerne, welche Produkte gerade Saison haben. Diese Übung öffnet deine Augen für Qualität und Frische.',
      checklist: [
        { text: 'Identifiziere 5 Gemüsesorten, die JETZT Saison haben (Tipp: Sie sind oft billiger und prominent platziert)' },
        { text: 'Kaufe ein Gemüse oder Obst, das du noch nie zubereitet hast' },
        { text: 'Frage einen Händler: "Wie bereiten Sie das am liebsten zu?" und notiere die Antwort' },
        { text: 'Vergleiche die Preise von saisonalen vs. nicht-saisonalen Produkten (z.B. Tomaten im Sommer vs. Winter)' },
        { text: 'Notiere deine Entdeckungen in einem Kochnotizbuch oder in deinem Handy' }
      ]
    },
    en: {
      title: 'The Market Check: Learn About Seasonality',
      description: 'Cooking starts with shopping. Visit a farmers market or a good supermarket and learn which products are currently in season. This exercise will open your eyes to quality and freshness.',
      checklist: [
        { text: 'Identify 5 vegetables that are in season RIGHT NOW (Tip: they\'re often cheaper and prominently displayed)' },
        { text: 'Buy a vegetable or fruit you\'ve never prepared before' },
        { text: 'Ask a vendor: "How do you like to prepare this?" and note the answer' },
        { text: 'Compare prices of seasonal vs. non-seasonal products (e.g., tomatoes in summer vs. winter)' },
        { text: 'Write down your discoveries in a cooking notebook or on your phone' }
      ]
    }
  },

  // Flashcards for memorization
  notes: {
    de: [
      {
        front: 'Was sind die drei Elemente des Kochens?',
        back: '1. Handwerk (Techniken lernen)\n2. Wissenschaft (Verstehen warum)\n3. Kreativität (Improvisieren)'
      },
      {
        front: 'Was ist die "Kalte Zone" in der Küche?',
        back: 'Der Vorbereitungsbereich, wo geschnitten, gewogen und gemischt wird. Hier verbringst du 70% der Zeit.'
      },
      {
        front: 'Was ist die "Heiße Zone" in der Küche?',
        back: 'Der Kochbereich (Herd, Ofen), wo mit Hitze gearbeitet wird. Hier liegt nur, was JETZT gebraucht wird.'
      },
      {
        front: 'Warum sollte man saisonal kochen?',
        back: '- Günstiger (mehr Angebot)\n- Gesünder (mehr Vitamine)\n- Leckerer (vollreif geerntet)\n- Nachhaltiger (weniger Transport)'
      },
      {
        front: 'Was bedeutet "Respekt vor dem Lebensmittel"?',
        back: 'Zutaten wertschätzen, nichts unnötig verschwenden, Reste verwerten, Produkte sorgfältig behandeln (nicht quetschen, verbrennen).'
      },
      {
        front: 'Was ist die wichtigste Regel beim Lernen des Kochens?',
        back: 'Erst das Handwerk lernen, dann kreativ werden. Geduld haben und aus Fehlern lernen. Jeder Fehler ist eine Lektion.'
      }
    ],
    en: [
      {
        front: 'What are the three elements of cooking?',
        back: '1. Craft (learning techniques)\n2. Science (understanding why)\n3. Creativity (improvising)'
      },
      {
        front: 'What is the "Cold Zone" in the kitchen?',
        back: 'The preparation area where you cut, weigh, and mix. You spend 70% of your time here.'
      },
      {
        front: 'What is the "Hot Zone" in the kitchen?',
        back: 'The cooking area (stove, oven) where you work with heat. Only what\'s needed RIGHT NOW should be here.'
      },
      {
        front: 'Why should you cook seasonally?',
        back: '- Cheaper (more supply)\n- Healthier (more vitamins)\n- Tastier (picked ripe)\n- More sustainable (less transport)'
      },
      {
        front: 'What does "respect for ingredients" mean?',
        back: 'Value ingredients, don\'t waste unnecessarily, use leftovers, handle products carefully (don\'t crush, burn).'
      },
      {
        front: 'What is the most important rule when learning to cook?',
        back: 'Learn the craft first, then get creative. Have patience and learn from mistakes. Every mistake is a lesson.'
      }
    ]
  }
};

