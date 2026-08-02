import React from 'react';

export const introLesson = {
  id: 'c1_m1_intro',
  title: { en: 'Introduction to Cooking', de: 'Einführung ins Kochen' },
  description: { 
    en: 'Learn the basics of your kitchen workspace.', 
    de: 'Lerne die Grundlagen deines Küchen-Arbeitsplatzes.' 
  },
  category: 'basics',
  content: (
    <div className="space-y-6">
      <p>Willkommen in der Küche! Bevor wir kochen, müssen wir unseren Arbeitsplatz verstehen.</p>
      
      <div className="bg-amber-50 dark:bg-amber-900/40 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
        <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Die Goldene Regel: Mise en Place</h3>
        <p className="text-amber-900 dark:text-amber-100">
          "Mise en Place" bedeutet "alles an seinem Platz". Bevor du den Herd einschaltest:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-amber-900 dark:text-amber-100">
          <li>Rezept komplett lesen</li>
          <li>Alle Zutaten abwiegen</li>
          <li>Alle Werkzeuge bereitstellen</li>
        </ul>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
        <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Praktische Übung</h3>
        <p className="text-blue-900 dark:text-blue-100">
          Deine erste Aufgabe ist kein Kochen, sondern Organisation.
          Suche ein einfaches Rezept und bereite alles vor, OHNE zu kochen.
        </p>
      </div>
    </div>
  )
};

export const tomatoSauceLesson = {
  id: 'c1_m1_tomato',
  title: { en: 'First Recipe: Tomato Sauce', de: 'Erstes Rezept: Tomatensauce' },
  description: { 
    en: 'Master the basics with a simple tomato sauce.', 
    de: 'Meistere die Grundlagen mit einer einfachen Tomatensauce.' 
  },
  category: 'basics',
  recipe: {
    id: 'r_tomato_basic',
    title: 'Klassische Tomatensauce',
    time: '30 Min',
    difficulty: 'Einfach',
    servings: 4,
    image: '🍅',
    tags: ['Basis', 'Vegan', 'Italienisch'],
    ingredients: [
      '800g Dosentomaten (ganz oder stückig)',
      '1 mittelgroße Zwiebel',
      '2 Knoblauchzehen',
      '4 EL Olivenöl',
      '1 TL Salz',
      'Frischer Pfeffer',
      '1 Prise Zucker',
      'Frisches Basilikum (optional)'
    ],
    steps: [
      'Vorbereitung (5 Min): Zwiebel schälen und in sehr feine Würfel schneiden (ca. 3-5mm). Knoblauch schälen und fein hacken oder durch eine Knoblauchpresse drücken. Tipp: Je feiner geschnitten, desto besser löst sich alles in der Sauce auf.',
      'Anschwitzen beginnen (2 Min): Olivenöl in einem mittelgroßen Topf bei mittlerer Hitze erwärmen. Das Öl sollte warm sein, aber nicht rauchen. Test: Ein Stück Zwiebel ins Öl geben - wenn es leicht brutzelt, ist die Temperatur perfekt.',
      'Zwiebeln dünsten (5-7 Min): Zwiebeln ins Öl geben und langsam glasig dünsten. WICHTIG: Sie sollen weich und durchsichtig werden, aber NICHT braun! Braune Zwiebeln würden der Sauce einen bitteren Geschmack geben. Gelegentlich umrühren.',
      'Knoblauch hinzufügen (1 Min): Gehackten Knoblauch zu den Zwiebeln geben und nur kurz (max. 1 Minute) mitdünsten. Knoblauch verbrennt schnell und wird dann bitter! Die Küche sollte jetzt fantastisch riechen.',
      'Tomaten unterrühren (1 Min): Dosentomaten komplett in den Topf geben. Die leere Dose mit etwa 50ml Wasser ausschwenken und ebenfalls dazu geben - so verschwendest du nichts! Mit einem Holzlöffel die Tomaten etwas zerdrücken.',
      'Würzen (1 Min): Mit ca. 1 TL Salz, frisch gemahlenem Pfeffer und 1 Prise Zucker würzen. Der Zucker neutralisiert die Säure der Tomaten und macht den Geschmack runder. Gut umrühren.',
      'Köcheln lassen (20-30 Min): Hitze auf niedrig stellen. Die Sauce sollte nur noch leicht blubbern, nicht kochen. Gelegentlich umrühren, damit nichts anbrennt. Je länger sie köchelt, desto intensiver wird der Geschmack. Die Sauce dickt dabei ein und wird cremiger.',
      'Finale & Abschmecken (2 Min): Frisches Basilikum in Streifen schneiden und unterrühren. Probiere die Sauce und korrigiere bei Bedarf mit Salz, Pfeffer oder noch einer Prise Zucker. Fertig! Die Sauce ist nun bereit für Pasta, Pizza oder als Basis für andere Gerichte.'
    ]
  },
  content: (
    <div className="space-y-6">
      <p>Eine gute Tomatensauce ist die Basis für viele Gerichte. Hier lernst du das "Anschwitzen" von Zwiebeln.</p>
      
      {/* The recipe card could be automatically rendered by a LessonRenderer component if we had one, 
          but for now we just describe it in the content or rely on the 'recipe' metadata to show a "Save Recipe" button */}
      
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Warum Zucker?</h3>
        <p className="text-sm text-gray-800 dark:text-gray-200">
          Tomaten haben viel Säure. Eine Prise Zucker neutralisiert diese Säure und macht den Geschmack runder ("umami").
        </p>
      </div>
    </div>
  )
};

