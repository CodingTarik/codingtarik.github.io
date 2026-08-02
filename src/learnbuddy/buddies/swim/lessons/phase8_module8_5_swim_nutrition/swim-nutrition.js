export const swimNutrition = {
  title: {
    de: "Schwimm-Ernährung - Energie für Training und Wettkampf",
    en: "Swim Nutrition - Fuel for Training and Competition"
  },
  description: {
    de: "Ernährung für Schwimmer: Vor dem Training, während des Trainings, Regeneration und Wettkampftag.",
    en: "Nutrition for swimmers: pre-swim meals, during training, recovery, and competition day."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Schwimm-Ernährung</h2>

  <p className="text-lg leading-relaxed">
    Ernährung ist der oft vernachlässigte dritte Pfeiler neben Technik und Training. Was du isst, 
    wann du es isst und wie viel du trinkst beeinflusst direkt deine Leistung im Wasser. Die 
    richtige Ernährung liefert Energie, unterstützt die Regeneration und hilft dir, am 
    Wettkampftag dein Bestes zu geben.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">Mahlzeiten vor dem Schwimmen</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Der optimale Zeitpunkt und die Zusammensetzung hängen von der Trainingsintensität ab.
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>2-3 Stunden vorher:</strong> Normale Mahlzeit mit Kohlenhydraten, Eiweiß und wenig Fett. Reis, Pasta, Huhn, Salat.</li>
      <li><strong>1-2 Stunden vorher:</strong> Leichte Mahlzeit oder Snack. Banane, Toast mit Honig, Müsli mit Milch.</li>
      <li><strong>30-60 Minuten vorher:</strong> Schnelle Kohlenhydrate. Energieriegel, Banane, trockene Kekse. Keine schweren Mahlzeiten.</li>
      <li><strong>Morgen-Training:</strong> Leichter Snack 30 Min. vorher oder nüchtern bei lockerem Training. Bei intensivem Training: Banane + Kaffee.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Während des Trainings</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <p className="text-green-700 dark:text-green-300 mb-3">
      Bei Einheiten unter 60 Minuten genügt meist Wasser. Bei längeren oder intensiven Einheiten:
    </p>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Flüssigkeit:</strong> Trinke alle 15-20 Minuten kleine Schlucke. Wasser oder verdünnter Sportsaft.</li>
      <li><strong>Elektrolyte:</strong> Bei Schweißverlust über 1 Liter: isotonische Getränke oder Elektrolyt-Tabs.</li>
      <li><strong>Kohlenhydrate:</strong> Bei Einheiten über 90 Min: 30-60g Kohlenhydrate pro Stunde (Gel, Banane, Energieriegel).</li>
      <li><strong>Vorsicht:</strong> Keine großen Mahlzeiten während des Schwimmens - Übelkeitsgefahr durch horizontale Lage.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Regeneration nach dem Training</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Das 30-Minuten-Fenster</h4>
    <p className="text-amber-700 dark:text-amber-300 mb-3">
      Die ersten 30 Minuten nach dem Training sind optimal für die Nährstoffaufnahme.
    </p>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Kohlenhydrate:</strong> Glykogenspeicher auffüllen. 1-1,2g pro kg Körpergewicht.</li>
      <li><strong>Eiweiß:</strong> Muskelreparatur. 20-30g hochwertiges Eiweiß (Whey, Ei, Huhn).</li>
      <li><strong>Verhältnis:</strong> 3:1 bis 4:1 Kohlenhydrate zu Eiweiß für optimale Regeneration.</li>
      <li><strong>Schnelle Optionen:</strong> Schokoladenmilch, Protein-Shake mit Banane, griechischer Joghurt mit Honig.</li>
      <li><strong>Volle Mahlzeit:</strong> Innerhalb von 2 Stunden - Fisch, Reis, Gemüse oder Pasta mit Huhn.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Wettkampftag</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Timing & Auswahl</h4>
    <ul className="list-disc list-inside space-y-3 text-blue-700 dark:text-blue-300">
      <li><strong>3-4 Stunden vor Start:</strong> Normale, vertraute Mahlzeit. Keine Experimente!</li>
      <li><strong>1-2 Stunden vorher:</strong> Leichter Snack. Toast, Banane, Haferflocken.</li>
      <li><strong>30 Min. vorher:</strong> Schnelle Kohlenhydrate. Gel oder kleine Banane. Kein Koffein, wenn nicht gewohnt.</li>
      <li><strong>Zwischen Vorläufen:</strong> Leichte Snacks, Flüssigkeit. Banane, Energieriegel, verdünnter Saft.</li>
      <li><strong>Wichtig:</strong> Nur Nahrungsmittel, die du kennst. Nichts Neues am Wettkampftag!</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Praktische Übungen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Pre-Swim-Protokoll:</strong> Teste verschiedene Pre-Training-Snacks und notiere, wie du dich fühlst.</li>
      <li><strong>Regenerations-Shake:</strong> Erstelle deinen persönlichen Post-Swim-Shake (Rezept notieren).</li>
      <li><strong>Wettkampf-Plan:</strong> Schreib einen Ernährungsplan für deinen nächsten Wettkampftag.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Swim Nutrition</h2>

  <p className="text-lg leading-relaxed">
    Nutrition is the often neglected third pillar alongside technique and training. What you eat, 
    when you eat it, and how much you drink directly influences your performance in the water. 
    The right nutrition provides energy, supports recovery, and helps you perform your best 
    on race day.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">Pre-Swim Meals</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Optimal timing and composition depend on training intensity.
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>2-3 hours before:</strong> Normal meal with carbs, protein, and minimal fat. Rice, pasta, chicken, salad.</li>
      <li><strong>1-2 hours before:</strong> Light meal or snack. Banana, toast with honey, cereal with milk.</li>
      <li><strong>30-60 minutes before:</strong> Quick carbs. Energy bar, banana, plain crackers. No heavy meals.</li>
      <li><strong>Morning training:</strong> Light snack 30 min before or fasted for easy training. For intense sessions: banana + coffee.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">During Training</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <p className="text-green-700 dark:text-green-300 mb-3">
      For sessions under 60 minutes, water is usually enough. For longer or intense sessions:
    </p>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Fluids:</strong> Drink small sips every 15-20 minutes. Water or diluted sports drink.</li>
      <li><strong>Electrolytes:</strong> When sweating over 1 liter: isotonic drinks or electrolyte tabs.</li>
      <li><strong>Carbohydrates:</strong> For sessions over 90 min: 30-60g carbs per hour (gel, banana, energy bar).</li>
      <li><strong>Caution:</strong> No large meals while swimming - nausea risk due to horizontal position.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Post-Training Recovery</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">The 30-Minute Window</h4>
    <p className="text-amber-700 dark:text-amber-300 mb-3">
      The first 30 minutes after training are optimal for nutrient uptake.
    </p>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Carbohydrates:</strong> Restore glycogen. 1-1.2g per kg body weight.</li>
      <li><strong>Protein:</strong> Muscle repair. 20-30g high-quality protein (whey, egg, chicken).</li>
      <li><strong>Ratio:</strong> 3:1 to 4:1 carbs to protein for optimal recovery.</li>
      <li><strong>Quick options:</strong> Chocolate milk, protein shake with banana, Greek yogurt with honey.</li>
      <li><strong>Full meal:</strong> Within 2 hours - fish, rice, vegetables or pasta with chicken.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Competition Day</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Timing & Selection</h4>
    <ul className="list-disc list-inside space-y-3 text-blue-700 dark:text-blue-300">
      <li><strong>3-4 hours before start:</strong> Normal, familiar meal. No experiments!</li>
      <li><strong>1-2 hours before:</strong> Light snack. Toast, banana, oatmeal.</li>
      <li><strong>30 min before:</strong> Quick carbs. Gel or small banana. No caffeine if not accustomed.</li>
      <li><strong>Between heats:</strong> Light snacks, fluids. Banana, energy bar, diluted juice.</li>
      <li><strong>Important:</strong> Only foods you know. Nothing new on race day!</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Practice Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Pre-swim log:</strong> Test different pre-training snacks and note how you feel.</li>
      <li><strong>Recovery shake:</strong> Create your personal post-swim shake (write down the recipe).</li>
      <li><strong>Race plan:</strong> Write a nutrition plan for your next competition day.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Ernährungsplan umsetzen",
      description: "Optimiere deine Ernährung für Training und Wettkampf.",
      checklist: [
        { text: "Teste 3 verschiedene Pre-Swim-Snacks und notiere die Wirkung", checked: false },
        { text: "Erstelle einen Regenerations-Shake und nutze ihn nach dem Training", checked: false },
        { text: "Schreibe einen Ernährungsplan für den nächsten Wettkampftag", checked: false },
        { text: "Halte das 30-Minuten-Regenerations-Fenster 3x pro Woche ein", checked: false }
      ]
    },
    en: {
      title: "Implement Nutrition Plan",
      description: "Optimize your nutrition for training and competition.",
      checklist: [
        { text: "Test 3 different pre-swim snacks and note the effect", checked: false },
        { text: "Create a recovery shake and use it after training", checked: false },
        { text: "Write a nutrition plan for your next competition day", checked: false },
        { text: "Hit the 30-minute recovery window 3x per week", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Warum ist das 30-Minuten-Fenster nach dem Training wichtig?", answer: "In den ersten 30 Minuten nach dem Training ist die Nährstoffaufnahme optimal. Der Körper füllt Glykogenspeicher besonders effizient auf und nutzt Eiweiß zur Muskelreparatur." },
      { question: "Was sollte man am Wettkampftag vermeiden?", answer: "Neue oder unbekannte Lebensmittel. Immer nur vertraute Nahrungsmittel essen, da unbekannte Speisen zu Verdauungsproblemen und Leistungseinbußen führen können." },
      { question: "Welches Kohlenhydrat-Eiweiß-Verhältnis ist für die Regeneration ideal?", answer: "3:1 bis 4:1 Kohlenhydrate zu Eiweiß. Das unterstützt sowohl die Glykogenauffüllung als auch die Muskelreparatur optimal." }
    ],
    en: [
      { question: "Why is the 30-minute window after training important?", answer: "In the first 30 minutes after training, nutrient uptake is optimal. The body restores glycogen most efficiently and uses protein for muscle repair." },
      { question: "What should you avoid on competition day?", answer: "New or unfamiliar foods. Always eat only familiar foods, as unknown foods can cause digestive issues and performance drops." },
      { question: "What carb-to-protein ratio is ideal for recovery?", answer: "3:1 to 4:1 carbohydrates to protein. This optimally supports both glycogen restoration and muscle repair." }
    ]
  }
};
