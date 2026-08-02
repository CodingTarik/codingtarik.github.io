import React from 'react';

export const hybridTrainingLesson = {
  id: 'g1_m6_hybrid',
  title: { 
    en: '6.4 Hybrid Training (Gym + Calisthenics)', 
    de: '6.4 Hybrid-Training (Gym + Calisthenics)' 
  },
  description: { 
    en: 'The best of both worlds: Combine gym training for absolute strength with calisthenics for skills and body control.', 
    de: 'Das Beste aus beiden Welten: Kombiniere Gym-Training für absolute Kraft mit Calisthenics für Skills und Körperkontrolle.' 
  },
  category: 'calisthenics',
  
  content: {
    de: `
### Modul 6.4: Hybrid-Training (Gym + Calisthenics)

Warum sich entscheiden, wenn du beides haben kannst? **Hybrid-Training** kombiniert das Beste aus der Gym-Welt (schwere Gewichte für maximale Muskelkraft) mit dem Besten aus Calisthenics (Körperkontrolle, relative Kraft, Skills). Das Ergebnis: Ein Athlet, der stark IST und stark AUSSIEHT – und seinen Körper meisterhaft kontrollieren kann.

---

### Warum Hybrid?

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">🏆 Das Beste aus beiden Welten</h4>
  <div className="overflow-x-auto">

| Was dir das Gym gibt | Was dir Calisthenics gibt |
|---|---|
| Absolute Kraft (schwer heben) | Relative Kraft (eigenes Gewicht meistern) |
| Gezielte Muskelhypertrophie | Ganzkörper-Koordination |
| Einfache Progression (mehr Gewicht) | Beeindruckende Skills (Muscle-Up, Handstand) |
| Isolationsübungen für Schwachstellen | Funktionale Bewegungsmuster |
| Maximale Beinentwicklung | Überall trainierbar |

  </div>
  <p className="text-sm text-blue-700 dark:text-blue-300 mt-3"><strong>Fazit:</strong> Gym-Training alleine macht dich stark, aber nicht unbedingt beweglich oder geschickt. Calisthenics alleine limitiert deine maximale Kraft (besonders bei Beinen). Die Kombination macht dich zum <strong>kompletten Athleten</strong>.</p>
</div>

---

### Wie kombiniert man beides?

Es gibt verschiedene Ansätze – hier die drei beliebtesten:

#### Ansatz 1: Abwechselnde Tage

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">📅 Wochenplan: Alternierend</h4>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
    <li>• <strong>Montag:</strong> Gym – Schweres Krafttraining (Kniebeugen, Bankdrücken, Rudern)</li>
    <li>• <strong>Dienstag:</strong> Calisthenics – Skills + Bodyweight (Handstand, Pull-Ups, Dips)</li>
    <li>• <strong>Mittwoch:</strong> Ruhe / Mobilitätsarbeit</li>
    <li>• <strong>Donnerstag:</strong> Gym – Schweres Krafttraining (Kreuzheben, Schulterdrücken)</li>
    <li>• <strong>Freitag:</strong> Calisthenics – Skills + Bodyweight (Front Lever, Muscle-Up Training)</li>
    <li>• <strong>Samstag:</strong> Optionaler leichter Calisthenics-Tag (Skill-Practice)</li>
    <li>• <strong>Sonntag:</strong> Ruhe</li>
  </ul>
</div>

#### Ansatz 2: Innerhalb einer Session

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">🔀 Innerhalb eines Workouts mischen</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">Starte mit Calisthenics-Skills (wenn du frisch bist), dann Gewichte für Hypertrophie:</p>
  <ol className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
    <li>1. <strong>Skill-Arbeit</strong> (10-15 Min): Handstand, Front Lever oder Muscle-Up Training</li>
    <li>2. <strong>Schwere Compound-Übung</strong> (Gym): Kniebeugen, Bankdrücken oder Kreuzheben</li>
    <li>3. <strong>Calisthenics-Grundübungen:</strong> Weighted Pull-Ups, Dips, L-Sit</li>
    <li>4. <strong>Isolationsübungen</strong> (Gym): Bizeps-Curls, Lateral Raises, etc.</li>
    <li>5. <strong>Core & Mobility:</strong> Hanging Leg Raises, Dehnen</li>
  </ol>
</div>

#### Ansatz 3: Hybrid PPL (Push/Pull/Legs)

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💪 Beispiel: Hybrid PPL Plan</h4>
  
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2"><strong>Push Day:</strong></p>
  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 mb-4">
    <li>• Handstand Practice (5-10 Min)</li>
    <li>• Bankdrücken: 4×6-8 (Gym)</li>
    <li>• Dips: 3×8-12 (Calisthenics, ggf. gewichtet)</li>
    <li>• Schulterdrücken: 3×8-10 (Gym)</li>
    <li>• Pseudo-Planche Push-Ups: 3×8-12 (Calisthenics)</li>
    <li>• Lateral Raises: 3×12-15 (Gym)</li>
  </ul>

  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2"><strong>Pull Day:</strong></p>
  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 mb-4">
    <li>• Front Lever Practice (5-10 Min)</li>
    <li>• Weighted Pull-Ups: 4×5-8 (Hybrid)</li>
    <li>• Barbell Rows: 3×8-10 (Gym)</li>
    <li>• Muscle-Up Training: 3-5 Versuche (Calisthenics)</li>
    <li>• Face Pulls: 3×15-20 (Gym)</li>
    <li>• Hanging Leg Raises: 3×10-15 (Calisthenics)</li>
  </ul>

  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2"><strong>Leg Day:</strong></p>
  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
    <li>• Pistol Squat Practice (5 Min)</li>
    <li>• Kniebeugen: 4×6-8 (Gym – hier sind Gewichte effektiver)</li>
    <li>• Rumänisches Kreuzheben: 3×8-10 (Gym)</li>
    <li>• Bulgarian Split Squats: 3×10 pro Seite (Hybrid)</li>
    <li>• Wadenheben: 4×12-15 (Gym)</li>
    <li>• L-Sit Hold: 3× max (Calisthenics)</li>
  </ul>
</div>

---

### Die Brücken-Übungen: Gym + Calisthenics

Einige Übungen sind perfekte "Brücken" zwischen beiden Welten:

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🌉 Hybrid-Übungen</h4>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
    <li>• <strong>Weighted Pull-Ups:</strong> Klimmzüge mit Zusatzgewicht (Dip-Gürtel). DIE beste Hybrid-Übung überhaupt.</li>
    <li>• <strong>Weighted Dips:</strong> Dips mit Gewichtsscheibe. Baut massive Brust und Trizeps auf.</li>
    <li>• <strong>Ring Rows:</strong> Rudern an Turnringen. Funktionaler als Maschinen-Rudern.</li>
    <li>• <strong>Ring Dips/Push-Ups:</strong> Instabilität der Ringe + Drückbewegung = extremer Muskelreiz.</li>
    <li>• <strong>Weighted Pistol Squats:</strong> Einbeinige Kniebeuge mit Kurzhantel oder Kettlebell.</li>
  </ul>
</div>

---

### Wer profitiert am meisten?

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">🎯 Hybrid-Training ist ideal für...</h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
    <li>• <strong>Gym-Gänger, die sich langweilen:</strong> Skills lernen gibt dir neue Ziele jenseits von "mehr Gewicht".</li>
    <li>• <strong>Calisthenics-Athleten, die Plateau haben:</strong> Gewichte können Schwachstellen gezielt aufbauen (besonders Beine).</li>
    <li>• <strong>Sportler:</strong> Die Kombination aus absoluter + relativer Kraft ist optimal für fast jede Sportart.</li>
    <li>• <strong>Ästhetik-Fans:</strong> Gym für die Masse, Calisthenics für die Definition und den "Athleten-Look".</li>
    <li>• <strong>Reisende:</strong> Gym wenn verfügbar, Calisthenics wenn nicht – du bist nie ohne Training.</li>
  </ul>
</div>

---

### Häufige Fehler beim Hybrid-Training

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Das solltest du vermeiden</h4>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
    <li>• <strong>Zu viel Volumen:</strong> Gym + Calisthenics ist DOPPELTE Belastung. Lieber weniger, aber qualitativ hochwertig.</li>
    <li>• <strong>Kein klarer Fokus:</strong> Entscheide, was Priorität hat (Skills oder Kraft?) und plane entsprechend.</li>
    <li>• <strong>Skills nach dem Krafttraining:</strong> Skill-Arbeit erfordert ein frisches Nervensystem. Mache sie ZUERST oder an separaten Tagen.</li>
    <li>• <strong>Erholung vernachlässigen:</strong> Mehr Training = mehr Erholung nötig. Schlaf, Ernährung und Deload-Wochen sind noch wichtiger.</li>
    <li>• <strong>Beine vergessen:</strong> Weder Gym noch Calisthenics – Beine werden oft zum Stiefkind. Schwere Kniebeugen bleiben Pflicht!</li>
  </ul>
</div>

---

### Der erste Schritt

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🚀 So startest du mit Hybrid-Training</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2">
    <li>1. <strong>Wähle EINEN Calisthenics-Skill</strong> als Ziel (z.B. Muscle-Up oder Handstand).</li>
    <li>2. <strong>Füge 10-15 Min Skill-Praxis</strong> am Anfang deines Gym-Workouts hinzu.</li>
    <li>3. <strong>Ersetze eine Gym-Übung</strong> durch eine Calisthenics-Variante (z.B. Weighted Pull-Ups statt Latziehen).</li>
    <li>4. <strong>Behalte dein Gym-Grundgerüst</strong> (Kniebeugen, Bankdrücken, Kreuzheben).</li>
    <li>5. <strong>Steigere langsam</strong> – füge nicht alles auf einmal hinzu.</li>
  </ol>
</div>
`,
    en: `
### Module 6.4: Hybrid Training (Gym + Calisthenics)

Why choose when you can have both? **Hybrid training** combines the best of the gym world (heavy weights for maximum muscle strength) with the best of calisthenics (body control, relative strength, skills). The result: An athlete who IS strong and LOOKS strong – and can masterfully control their body.

---

### Why Hybrid?

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">🏆 The Best of Both Worlds</h4>
  <div className="overflow-x-auto">

| What the Gym Gives You | What Calisthenics Gives You |
|---|---|
| Absolute strength (heavy lifting) | Relative strength (master your bodyweight) |
| Targeted muscle hypertrophy | Full-body coordination |
| Simple progression (more weight) | Impressive skills (muscle-up, handstand) |
| Isolation exercises for weak points | Functional movement patterns |
| Maximum leg development | Train anywhere |

  </div>
  <p className="text-sm text-blue-700 dark:text-blue-300 mt-3"><strong>Bottom line:</strong> Gym training alone makes you strong, but not necessarily mobile or skillful. Calisthenics alone limits your maximum strength (especially legs). The combination makes you a <strong>complete athlete</strong>.</p>
</div>

---

### How to Combine Both?

There are different approaches – here are the three most popular:

#### Approach 1: Alternating Days

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">📅 Weekly Plan: Alternating</h4>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
    <li>• <strong>Monday:</strong> Gym – Heavy strength (Squats, Bench Press, Rows)</li>
    <li>• <strong>Tuesday:</strong> Calisthenics – Skills + Bodyweight (Handstand, Pull-Ups, Dips)</li>
    <li>• <strong>Wednesday:</strong> Rest / Mobility work</li>
    <li>• <strong>Thursday:</strong> Gym – Heavy strength (Deadlifts, Shoulder Press)</li>
    <li>• <strong>Friday:</strong> Calisthenics – Skills + Bodyweight (Front Lever, Muscle-Up Training)</li>
    <li>• <strong>Saturday:</strong> Optional light calisthenics day (skill practice)</li>
    <li>• <strong>Sunday:</strong> Rest</li>
  </ul>
</div>

#### Approach 2: Within One Session

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">🔀 Mixing Within a Workout</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">Start with calisthenics skills (when fresh), then weights for hypertrophy:</p>
  <ol className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
    <li>1. <strong>Skill work</strong> (10-15 min): Handstand, front lever, or muscle-up training</li>
    <li>2. <strong>Heavy compound</strong> (Gym): Squats, bench press, or deadlifts</li>
    <li>3. <strong>Calisthenics basics:</strong> Weighted pull-ups, dips, L-sit</li>
    <li>4. <strong>Isolation exercises</strong> (Gym): Bicep curls, lateral raises, etc.</li>
    <li>5. <strong>Core & mobility:</strong> Hanging leg raises, stretching</li>
  </ol>
</div>

#### Approach 3: Hybrid PPL (Push/Pull/Legs)

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💪 Example: Hybrid PPL Plan</h4>
  
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2"><strong>Push Day:</strong></p>
  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 mb-4">
    <li>• Handstand Practice (5-10 min)</li>
    <li>• Bench Press: 4×6-8 (Gym)</li>
    <li>• Dips: 3×8-12 (Calisthenics, weighted if possible)</li>
    <li>• Shoulder Press: 3×8-10 (Gym)</li>
    <li>• Pseudo-Planche Push-Ups: 3×8-12 (Calisthenics)</li>
    <li>• Lateral Raises: 3×12-15 (Gym)</li>
  </ul>

  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2"><strong>Pull Day:</strong></p>
  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 mb-4">
    <li>• Front Lever Practice (5-10 min)</li>
    <li>• Weighted Pull-Ups: 4×5-8 (Hybrid)</li>
    <li>• Barbell Rows: 3×8-10 (Gym)</li>
    <li>• Muscle-Up Training: 3-5 attempts (Calisthenics)</li>
    <li>• Face Pulls: 3×15-20 (Gym)</li>
    <li>• Hanging Leg Raises: 3×10-15 (Calisthenics)</li>
  </ul>

  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2"><strong>Leg Day:</strong></p>
  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
    <li>• Pistol Squat Practice (5 min)</li>
    <li>• Squats: 4×6-8 (Gym – weights are more effective here)</li>
    <li>• Romanian Deadlift: 3×8-10 (Gym)</li>
    <li>• Bulgarian Split Squats: 3×10 per side (Hybrid)</li>
    <li>• Calf Raises: 4×12-15 (Gym)</li>
    <li>• L-Sit Hold: 3× max (Calisthenics)</li>
  </ul>
</div>

---

### Bridge Exercises: Gym + Calisthenics

Some exercises are perfect "bridges" between both worlds:

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🌉 Hybrid Exercises</h4>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
    <li>• <strong>Weighted Pull-Ups:</strong> Pull-ups with added weight (dip belt). THE best hybrid exercise.</li>
    <li>• <strong>Weighted Dips:</strong> Dips with weight plate. Builds massive chest and triceps.</li>
    <li>• <strong>Ring Rows:</strong> Rowing on gymnastic rings. More functional than machine rows.</li>
    <li>• <strong>Ring Dips/Push-Ups:</strong> Ring instability + pressing = extreme muscle stimulus.</li>
    <li>• <strong>Weighted Pistol Squats:</strong> Single-leg squat with dumbbell or kettlebell.</li>
  </ul>
</div>

---

### Who Benefits Most?

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">🎯 Hybrid Training Is Ideal For...</h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
    <li>• <strong>Gym-goers who are bored:</strong> Learning skills gives you new goals beyond "more weight".</li>
    <li>• <strong>Calisthenics athletes who plateau:</strong> Weights can target weak points (especially legs).</li>
    <li>• <strong>Athletes:</strong> The combination of absolute + relative strength is optimal for almost any sport.</li>
    <li>• <strong>Aesthetics fans:</strong> Gym for mass, calisthenics for definition and the "athlete look".</li>
    <li>• <strong>Travelers:</strong> Gym when available, calisthenics when not – you're never without training.</li>
  </ul>
</div>

---

### Common Mistakes in Hybrid Training

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ What to Avoid</h4>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
    <li>• <strong>Too much volume:</strong> Gym + calisthenics is DOUBLE the load. Better less but higher quality.</li>
    <li>• <strong>No clear focus:</strong> Decide what's priority (skills or strength?) and plan accordingly.</li>
    <li>• <strong>Skills after heavy lifting:</strong> Skill work requires a fresh nervous system. Do it FIRST or on separate days.</li>
    <li>• <strong>Neglecting recovery:</strong> More training = more recovery needed. Sleep, nutrition, and deload weeks are even more important.</li>
    <li>• <strong>Forgetting legs:</strong> Neither gym nor calisthenics – legs often get neglected. Heavy squats remain mandatory!</li>
  </ul>
</div>

---

### The First Step

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🚀 How to Start Hybrid Training</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2">
    <li>1. <strong>Choose ONE calisthenics skill</strong> as a goal (e.g. muscle-up or handstand).</li>
    <li>2. <strong>Add 10-15 min skill practice</strong> at the start of your gym workout.</li>
    <li>3. <strong>Replace one gym exercise</strong> with a calisthenics variation (e.g. weighted pull-ups instead of lat pulldown).</li>
    <li>4. <strong>Keep your gym foundation</strong> (squats, bench press, deadlifts).</li>
    <li>5. <strong>Increase gradually</strong> – don't add everything at once.</li>
  </ol>
</div>
`
  },

  task: {
    de: {
      title: 'Hybrid-Training ausprobieren',
      description: 'Integriere Calisthenics-Elemente in dein nächstes Gym-Workout.',
      checklist: [
        { text: 'Wähle einen Calisthenics-Skill als Ziel (z.B. Handstand, Muscle-Up, Front Lever).' },
        { text: 'Füge 10 Min Skill-Practice am Anfang deines nächsten Workouts hinzu.' },
        { text: 'Ersetze Latziehen durch (gewichtete) Klimmzüge oder Maschinen-Dips durch Barren-Dips.' },
        { text: 'Probiere den Hybrid PPL Plan für eine Woche aus und vergleiche mit deinem normalen Plan.' }
      ]
    },
    en: {
      title: 'Try Hybrid Training',
      description: 'Integrate calisthenics elements into your next gym workout.',
      checklist: [
        { text: 'Choose one calisthenics skill as a goal (e.g. handstand, muscle-up, front lever).' },
        { text: 'Add 10 min skill practice at the start of your next workout.' },
        { text: 'Replace lat pulldown with (weighted) pull-ups or machine dips with bar dips.' },
        { text: 'Try the hybrid PPL plan for one week and compare with your normal plan.' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was ist Hybrid-Training?',
        back: 'Die Kombination aus Gym-Training (Gewichte für absolute Kraft) und Calisthenics (Eigengewicht für relative Kraft und Skills).'
      },
      {
        front: 'Was ist die beste Hybrid-Übung?',
        back: 'Weighted Pull-Ups (Klimmzüge mit Zusatzgewicht) – vereint das Beste aus beiden Welten.'
      },
      {
        front: 'Nenne die 3 Ansätze für Hybrid-Training.',
        back: '1. Abwechselnde Tage (Gym/Calisthenics), 2. Innerhalb einer Session mischen, 3. Hybrid PPL (Push/Pull/Legs mit beiden Elementen).'
      },
      {
        front: 'Wann sollte Skill-Training im Hybrid-Workout stattfinden?',
        back: 'Am Anfang des Workouts (wenn das Nervensystem frisch ist) oder an separaten Tagen. NICHT nach schwerem Krafttraining.'
      }
    ],
    en: [
      {
        front: 'What is hybrid training?',
        back: 'The combination of gym training (weights for absolute strength) and calisthenics (bodyweight for relative strength and skills).'
      },
      {
        front: 'What\'s the best hybrid exercise?',
        back: 'Weighted pull-ups – combines the best of both worlds.'
      },
      {
        front: 'Name the 3 approaches for hybrid training.',
        back: '1. Alternating days (gym/calisthenics), 2. Mix within one session, 3. Hybrid PPL (push/pull/legs with both elements).'
      },
      {
        front: 'When should skill training happen in a hybrid workout?',
        back: 'At the start of the workout (when nervous system is fresh) or on separate days. NOT after heavy strength training.'
      }
    ]
  }
};
