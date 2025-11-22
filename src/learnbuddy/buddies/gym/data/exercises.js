export const muscleGroups = [
  { id: 'chest', name: 'Brust' },
  { id: 'back', name: 'Rücken' },
  { id: 'legs', name: 'Beine' },
  { id: 'shoulders', name: 'Schultern' },
  { id: 'arms', name: 'Arme' },
  { id: 'core', name: 'Bauch & Core' },
  { id: 'cardio', name: 'Cardio' }
];

export const exercises = [
  // Chest
  {
    id: 'bench_press',
    name: 'Bankdrücken',
    muscleGroup: 'chest',
    description: 'Der Klassiker für die Brustmuskulatur. Lege dich auf die Bank, greife die Hantel etwas breiter als schulterbreit und senke sie kontrolliert zur Brust ab.',
    difficulty: 'intermediate',
    type: 'strength'
  },
  {
    id: 'push_ups',
    name: 'Liegestütze',
    muscleGroup: 'chest',
    description: 'Körpergewicht-Übung für Brust, Schultern und Trizeps. Halte den Körper gerade wie ein Brett.',
    difficulty: 'beginner',
    type: 'strength'
  },
  {
    id: 'chest_fly',
    name: 'Fliegende (Cable/Dumbbell)',
    muscleGroup: 'chest',
    description: 'Isolationsübung für die Brust. Öffne die Arme weit und führe sie vor der Brust zusammen.',
    difficulty: 'intermediate',
    type: 'strength'
  },

  // Back
  {
    id: 'pull_ups',
    name: 'Klimmzüge',
    muscleGroup: 'back',
    description: 'Zieh dich an der Stange hoch bis das Kinn drüber ist. Trainiert den Latissimus und Bizeps.',
    difficulty: 'advanced',
    type: 'strength'
  },
  {
    id: 'lat_pulldown',
    name: 'Latzug',
    muscleGroup: 'back',
    description: 'Alternative zu Klimmzügen am Kabelzug. Ziehe die Stange zur oberen Brust.',
    difficulty: 'beginner',
    type: 'strength'
  },
  {
    id: 'deadlift',
    name: 'Kreuzheben',
    muscleGroup: 'back',
    description: 'Komplexe Ganzkörperübung mit Fokus auf unterem Rücken, Beinen und Griffkraft.',
    difficulty: 'advanced',
    type: 'strength'
  },
  {
    id: 'rows',
    name: 'Rudern (Langhantel/Kabel)',
    muscleGroup: 'back',
    description: 'Ziehe das Gewicht zum Bauch. Wichtig für eine starke Rückenmitte.',
    difficulty: 'intermediate',
    type: 'strength'
  },

  // Legs
  {
    id: 'squat',
    name: 'Kniebeugen',
    muscleGroup: 'legs',
    description: 'Die Königin der Beinübungen. Gehe tief in die Hocke und drücke dich aus den Fersen wieder hoch.',
    difficulty: 'intermediate',
    type: 'strength'
  },
  {
    id: 'leg_press',
    name: 'Beinpresse',
    muscleGroup: 'legs',
    description: 'Geführte Übung für die Beine. Gut um schwere Gewichte sicher zu bewegen.',
    difficulty: 'beginner',
    type: 'strength'
  },
  {
    id: 'lunges',
    name: 'Ausfallschritte',
    muscleGroup: 'legs',
    description: 'Schritt nach vorne und das hintere Knie zum Boden senken.',
    difficulty: 'beginner',
    type: 'strength'
  },
  {
    id: 'calf_raises',
    name: 'Wadenheben',
    muscleGroup: 'legs',
    description: 'Drücke dich auf die Zehenspitzen hoch.',
    difficulty: 'beginner',
    type: 'strength'
  },

  // Shoulders
  {
    id: 'overhead_press',
    name: 'Schulterdrücken',
    muscleGroup: 'shoulders',
    description: 'Drücke das Gewicht von den Schultern über den Kopf.',
    difficulty: 'intermediate',
    type: 'strength'
  },
  {
    id: 'lateral_raise',
    name: 'Seitheben',
    muscleGroup: 'shoulders',
    description: 'Hebe die Arme seitlich an bis zur Waagerechten. Isoliert die seitliche Schulter.',
    difficulty: 'beginner',
    type: 'strength'
  },

  // Arms
  {
    id: 'bicep_curl',
    name: 'Bizeps Curls',
    muscleGroup: 'arms',
    description: 'Beuge den Arm im Ellbogengelenk um den Bizeps zu trainieren.',
    difficulty: 'beginner',
    type: 'strength'
  },
  {
    id: 'tricep_dips',
    name: 'Trizeps Dips',
    muscleGroup: 'arms',
    description: 'Stütze dich an einer Kante ab und beuge die Arme.',
    difficulty: 'intermediate',
    type: 'strength'
  },
  {
    id: 'tricep_pushdown',
    name: 'Trizeps Drücken (Kabel)',
    muscleGroup: 'arms',
    description: 'Drücke den Griff am Kabelzug nach unten.',
    difficulty: 'beginner',
    type: 'strength'
  },

  // Core
  {
    id: 'plank',
    name: 'Plank (Unterarmstütz)',
    muscleGroup: 'core',
    description: 'Statische Halteübung für die Rumpfstabilität.',
    difficulty: 'beginner',
    type: 'strength'
  },
  {
    id: 'crunches',
    name: 'Crunches',
    muscleGroup: 'core',
    description: 'Klassische Bauchaufzüge.',
    difficulty: 'beginner',
    type: 'strength'
  },

  // Cardio
  {
    id: 'treadmill',
    name: 'Laufband',
    muscleGroup: 'cardio',
    description: 'Laufen oder Gehen auf dem Laufband.',
    difficulty: 'beginner',
    type: 'cardio'
  },
  {
    id: 'elliptical',
    name: 'Crosstrainer',
    muscleGroup: 'cardio',
    description: 'Gelenkschonendes Ausdauertraining.',
    difficulty: 'beginner',
    type: 'cardio'
  }
];

