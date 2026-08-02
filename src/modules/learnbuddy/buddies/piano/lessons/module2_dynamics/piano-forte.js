export const pianoForte = {
  title: { de: "Lautstärke: p (piano) und f (forte)", en: "Volume: p (piano) and f (forte)" },
  description: { de: "Leise und laut spielen – die Grundlagen der Dynamik.", en: "Playing soft and loud – the basics of dynamics." },
  content: {
    de: `
### Dynamik: Leise und Laut

**Dynamik** bedeutet Lautstärke in der Musik. Die zwei grundlegenden Dynamikzeichen sind **p** (piano = leise) und **f** (forte = laut). Ja, das Instrument "Klavier" heißt eigentlich "Pianoforte" – weil es als erstes Tasteninstrument leise UND laut spielen konnte!

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Die Grundzeichen</h4>
  <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
    <li><strong>p (piano):</strong> Leise – sanfter Anschlag, wenig Gewicht</li>
    <li><strong>f (forte):</strong> Laut – fester Anschlag, mehr Gewicht in die Taste</li>
  </ul>
</div>

### Wie steuert man die Lautstärke?

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Die Technik</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
    Die Lautstärke hängt davon ab, wie schnell der Hammer die Saite trifft. Das steuerst du durch:
  </p>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
    <li><strong>Armgewicht:</strong> Mehr Gewicht = lauter, weniger Gewicht = leiser</li>
    <li><strong>Anschlaggeschwindigkeit:</strong> Schneller Finger = lauter, langsamer = leiser</li>
    <li><strong>NICHT:</strong> Härter hämmern! Lautstärke kommt aus dem Gewicht, nicht aus Kraft</li>
  </ul>
</div>

### Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Dynamik-Übung</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Spiele C-D-E-F-G ganz leise (p) – kaum hörbar</li>
    <li>Spiele dasselbe ganz laut (f) – voll und kräftig</li>
    <li>Wechsle: 1 Takt leise, 1 Takt laut</li>
    <li>Spüre den Unterschied im Armgewicht und Anschlag</li>
  </ol>
</div>
    `,
    en: `
### Dynamics: Soft and Loud

**Dynamics** means volume in music. The two basic dynamic markings are **p** (piano = soft) and **f** (forte = loud). Yes, the instrument "piano" is actually called "pianoforte" – because it was the first keyboard instrument that could play soft AND loud!

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">The Basic Markings</h4>
  <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
    <li><strong>p (piano):</strong> Soft – gentle touch, less weight</li>
    <li><strong>f (forte):</strong> Loud – firm touch, more weight into the key</li>
  </ul>
</div>

### How Do You Control Volume?

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">The Technique</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
    Volume depends on how fast the hammer hits the string. You control this through:
  </p>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
    <li><strong>Arm weight:</strong> More weight = louder, less weight = softer</li>
    <li><strong>Attack speed:</strong> Faster finger = louder, slower = softer</li>
    <li><strong>NOT:</strong> Hammering harder! Volume comes from weight, not from force</li>
  </ul>
</div>

### Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Dynamics Exercise</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Play C-D-E-F-G very softly (p) – barely audible</li>
    <li>Play the same very loudly (f) – full and strong</li>
    <li>Alternate: 1 measure soft, 1 measure loud</li>
    <li>Feel the difference in arm weight and touch</li>
  </ol>
</div>
    `
  },
  task: {
    de: {
      title: "p und f üben",
      description: "Lerne, die Lautstärke bewusst zu kontrollieren.",
      checklist: [
        { text: "Spiele eine Passage leise (p) – sanft und zart", checked: false },
        { text: "Spiele dieselbe Passage laut (f) – voll und kräftig", checked: false },
        { text: "Wechsle zwischen p und f innerhalb eines Stücks", checked: false },
        { text: "Achte darauf, Armgewicht statt Kraft zu nutzen", checked: false }
      ]
    },
    en: {
      title: "Practice p and f",
      description: "Learn to consciously control volume.",
      checklist: [
        { text: "Play a passage softly (p) – gentle and delicate", checked: false },
        { text: "Play the same passage loudly (f) – full and strong", checked: false },
        { text: "Switch between p and f within a piece", checked: false },
        { text: "Focus on using arm weight rather than force", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Was bedeuten p und f in der Musik?", answer: "p steht für 'piano' (italienisch für leise) und f für 'forte' (laut). Das Klavier heißt eigentlich 'Pianoforte', weil es als erstes Tasteninstrument leise und laut spielen konnte." },
      { question: "Wie erzeugt man Lautstärke am Klavier richtig?", answer: "Durch Armgewicht und Anschlaggeschwindigkeit, nicht durch hartes Hämmern. Mehr Gewicht in die Taste = lauter, weniger Gewicht = leiser. Der Finger überträgt das Gewicht des Arms auf die Taste." }
    ],
    en: [
      { question: "What do p and f mean in music?", answer: "p stands for 'piano' (Italian for soft) and f for 'forte' (loud). The piano is actually called 'pianoforte' because it was the first keyboard instrument that could play soft and loud." },
      { question: "How do you properly create volume on the piano?", answer: "Through arm weight and attack speed, not through hard hammering. More weight into the key = louder, less weight = softer. The finger transfers the arm's weight to the key." }
    ]
  }
};
