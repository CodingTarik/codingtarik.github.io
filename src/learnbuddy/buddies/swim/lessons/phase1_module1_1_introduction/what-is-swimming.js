export const whatIsSwimming = {
  title: {
    de: "Was ist Schwimmen? Geschichte & Philosophie",
    en: "What is Swimming? History & Philosophy"
  },
  description: {
    de: "Tauche ein in die Welt des Schwimmens: Von der Überlebensfähigkeit zum Wettkampfsport.",
    en: "Dive into the world of swimming: From survival skill to competitive sport."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Was ist Schwimmen?</h2>
  
  <p className="text-lg leading-relaxed">
    Schwimmen ist eine der ältesten und natürlichsten Formen der menschlichen Fortbewegung. 
    Es ist die Kunst, sich durch koordinierte Bewegungen im Wasser fortzubewegen - eine Fähigkeit, 
    die uns Menschen seit Jahrtausenden begleitet.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Definition</h3>
    <p className="text-blue-700 dark:text-blue-300">
      Schwimmen ist die Fortbewegung im Wasser durch koordinierte Bewegungen von Armen, Beinen 
      und Körper. Es ist eine Fähigkeit, die sowohl als Überlebensfähigkeit, als Sportart, als 
      Therapieform und als Freizeitaktivität praktiziert wird.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Die Geschichte des Schwimmens</h3>
  
  <p className="leading-relaxed">
    Die Geschichte des Schwimmens reicht weit zurück in die Vergangenheit. Archäologische Funde 
    zeigen, dass Menschen bereits vor über 10.000 Jahren schwammen. In der Antike war Schwimmen 
    Teil der militärischen Ausbildung - sowohl bei den Griechen als auch bei den Römern.
  </p>

  <p className="leading-relaxed">
    Im 19. Jahrhundert entwickelte sich Schwimmen zu einer organisierten Sportart. Die ersten 
    Schwimmwettkämpfe wurden in England abgehalten, und 1896 wurde Schwimmen zu einer der 
    ersten olympischen Disziplinen bei den modernen Olympischen Spielen.
  </p>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Die 4 olympischen Schwimmstile</h3>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Kraul (Freestyle):</strong> Der schnellste und effizienteste Stil, bei dem 
      die Arme abwechselnd über Wasser nach vorn geführt werden.</li>
      <li><strong>Rücken:</strong> Ähnlich wie Kraul, aber auf dem Rücken liegend - der einzige 
      Stil, bei dem das Gesicht immer über Wasser ist.</li>
      <li><strong>Brust:</strong> Der klassische Anfängerstil mit symmetrischen Bewegungen von 
      Armen und Beinen.</li>
      <li><strong>Delfin (Butterfly):</strong> Der kraftvollste und anspruchsvollste Stil mit 
      gleichzeitigen Armbewegungen und einer wellenförmigen Körperbewegung.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Warum Schwimmen?</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Ganzkörpertraining</h4>
      <p className="text-green-700 dark:text-green-300 text-sm">
        Schwimmen aktiviert fast alle Muskelgruppen gleichzeitig. Arme, Beine, Rumpf und Core 
        arbeiten zusammen, um dich durch das Wasser zu bewegen. Es ist eines der effektivsten 
        Ganzkörper-Workouts überhaupt.
      </p>
    </div>

    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Gelenkschonend</h4>
      <p className="text-green-700 dark:text-green-300 text-sm">
        Im Wasser trägt der Auftrieb dein Körpergewicht, sodass Gelenke, Wirbelsäule und 
        Bänder entlastet werden. Perfekt für Menschen mit Gelenkproblemen oder Verletzungen.
      </p>
    </div>

    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Lebensrettend</h4>
      <p className="text-green-700 dark:text-green-300 text-sm">
        Schwimmen zu können kann im Notfall Leben retten - sowohl dein eigenes als auch das 
        anderer. Es ist eine der wichtigsten Überlebensfähigkeiten, die ein Mensch erlernen kann.
      </p>
    </div>

    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Ausdauer & Fitness</h4>
      <p className="text-green-700 dark:text-green-300 text-sm">
        Regelmäßiges Schwimmen verbessert deine kardiovaskuläre Fitness, stärkt dein Herz-Kreislauf-System 
        und erhöht deine Lungenkapazität. Es ist ein hervorragendes Ausdauertraining.
      </p>
    </div>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-8">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Die Philosophie des Schwimmens</h3>
    <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
      Schwimmen ist mehr als nur eine Sportart - es ist eine Form der Meditation in Bewegung. 
      Im Wasser gibt es keine Ablenkungen, nur du und das Element. Viele Schwimmer beschreiben 
      das Gefühl des "Flows" - einen Zustand vollkommener Konzentration und Harmonie zwischen 
      Körper und Geist.
    </p>
    <p className="text-blue-700 dark:text-blue-300 leading-relaxed mt-3">
      Es lehrt uns Geduld, Ausdauer und Respekt vor dem Wasser. Jede Bahn ist eine Chance, 
      besser zu werden, sowohl körperlich als auch mental.
    </p>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">What is Swimming?</h2>
  
  <p className="text-lg leading-relaxed">
    Swimming is one of the oldest and most natural forms of human movement. It is the art of 
    moving through water through coordinated movements - a skill that has accompanied humans 
    for thousands of years.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Definition</h3>
    <p className="text-blue-700 dark:text-blue-300">
      Swimming is movement through water through coordinated movements of arms, legs, and body. 
      It is a skill practiced as a survival skill, sport, therapy, and recreational activity.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The History of Swimming</h3>
  
  <p className="leading-relaxed">
    The history of swimming dates back far into the past. Archaeological finds show that humans 
    were swimming more than 10,000 years ago. In antiquity, swimming was part of military training 
    - both among the Greeks and the Romans.
  </p>

  <p className="leading-relaxed">
    In the 19th century, swimming developed into an organized sport. The first swimming competitions 
    were held in England, and in 1896, swimming became one of the first Olympic disciplines at the 
    modern Olympic Games.
  </p>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">The 4 Olympic Swimming Styles</h3>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Freestyle (Front Crawl):</strong> The fastest and most efficient style, where 
      arms are alternately brought forward over the water.</li>
      <li><strong>Backstroke:</strong> Similar to freestyle, but lying on your back - the only 
      style where the face always stays above water.</li>
      <li><strong>Breaststroke:</strong> The classic beginner style with symmetrical movements 
      of arms and legs.</li>
      <li><strong>Butterfly:</strong> The most powerful and demanding style with simultaneous 
      arm movements and a wave-like body movement.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Why Swimming?</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Full-Body Workout</h4>
      <p className="text-green-700 dark:text-green-300 text-sm">
        Swimming activates almost all muscle groups simultaneously. Arms, legs, torso, and core 
        work together to move you through the water. It's one of the most effective full-body 
        workouts there is.
      </p>
    </div>

    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Joint-Friendly</h4>
      <p className="text-green-700 dark:text-green-300 text-sm">
        In water, buoyancy carries your body weight, so joints, spine, and ligaments are relieved. 
        Perfect for people with joint problems or injuries.
      </p>
    </div>

    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Life-Saving</h4>
      <p className="text-green-700 dark:text-green-300 text-sm">
        Being able to swim can save lives in an emergency - both your own and others'. It is one 
        of the most important survival skills a person can learn.
      </p>
    </div>

    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Endurance & Fitness</h4>
      <p className="text-green-700 dark:text-green-300 text-sm">
        Regular swimming improves your cardiovascular fitness, strengthens your cardiovascular system, 
        and increases your lung capacity. It's excellent endurance training.
      </p>
    </div>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-8">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">The Philosophy of Swimming</h3>
    <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
      Swimming is more than just a sport - it's a form of meditation in motion. In the water, 
      there are no distractions, just you and the element. Many swimmers describe the feeling 
      of "flow" - a state of complete concentration and harmony between body and mind.
    </p>
    <p className="text-blue-700 dark:text-blue-300 leading-relaxed mt-3">
      It teaches us patience, endurance, and respect for water. Every lap is a chance to get 
      better, both physically and mentally.
    </p>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Deine erste Mission: Informiere dich über Schwimmen",
      description: "Bevor du ins Wasser gehst, nimm dir Zeit, um die Grundlagen des Schwimmens zu verstehen.",
      checklist: [
        { text: "Informiere dich über die 4 olympischen Schwimmstile und ihre Besonderheiten", checked: false },
        { text: "Suche nach einem Schwimmbad oder einer Schwimmschule in deiner Nähe", checked: false },
        { text: "Lies über die gesundheitlichen Vorteile des Schwimmens", checked: false },
        { text: "Schreibe auf, warum du schwimmen lernen möchtest (Motivation festhalten)", checked: false }
      ]
    },
    en: {
      title: "Your First Mission: Learn About Swimming",
      description: "Before you get in the water, take time to understand the basics of swimming.",
      checklist: [
        { text: "Learn about the 4 Olympic swimming styles and their characteristics", checked: false },
        { text: "Find a swimming pool or swim school near you", checked: false },
        { text: "Read about the health benefits of swimming", checked: false },
        { text: "Write down why you want to learn to swim (capture motivation)", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was sind die 4 olympischen Schwimmstile?",
        answer: "Kraul (Freestyle), Rücken, Brust und Delfin (Butterfly)."
      },
      {
        question: "Warum ist Schwimmen gelenkschonend?",
        answer: "Der Auftrieb im Wasser trägt das Körpergewicht, sodass Gelenke, Wirbelsäule und Bänder entlastet werden."
      },
      {
        question: "Welche Vorteile hat Schwimmen als Ganzkörpertraining?",
        answer: "Schwimmen aktiviert fast alle Muskelgruppen gleichzeitig - Arme, Beine, Rumpf und Core arbeiten zusammen."
      }
    ],
    en: [
      {
        question: "What are the 4 Olympic swimming styles?",
        answer: "Freestyle (Front Crawl), Backstroke, Breaststroke, and Butterfly."
      },
      {
        question: "Why is swimming joint-friendly?",
        answer: "Buoyancy in water carries body weight, so joints, spine, and ligaments are relieved."
      },
      {
        question: "What are the benefits of swimming as a full-body workout?",
        answer: "Swimming activates almost all muscle groups simultaneously - arms, legs, torso, and core work together."
      }
    ]
  }
};


