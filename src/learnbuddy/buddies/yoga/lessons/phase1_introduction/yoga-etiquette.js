export const yogaEtiquette = {
  title: {
    de: "Yoga-Etikette & Respekt",
    en: "Yoga Etiquette & Respect"
  },
  description: {
    de: "Lerne die wichtigsten Verhaltensregeln im Yoga-Unterricht und den Respekt für dich selbst und andere.",
    en: "Learn the key behavioral guidelines in yoga class and respect for yourself and others."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Yoga-Etikette & Respekt</h2>
  
  <p className="text-lg leading-relaxed">
    Yoga ist nicht nur eine körperliche Praxis - es ist ein Raum der Achtsamkeit und des 
    gegenseitigen Respekts. Ob du zu Hause alleine übst oder in einem Studio mit anderen, 
    bestimmte Verhaltensweisen machen die Erfahrung für alle besser.
  </p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Das Wichtigste zuerst</h3>
    <p className="text-purple-700 dark:text-purple-300">
      Die goldene Regel des Yoga lautet: Respektiere deinen Körper. Yoga ist kein Wettbewerb. 
      Es geht nicht darum, wie tief du dich beugen kannst oder wie die Person neben dir aussieht. 
      Es geht darum, wo DU heute bist - und das ist genau richtig.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Im Yoga-Studio</h3>

  <div className="space-y-4">
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Pünktlichkeit</h4>
      <p className="text-purple-700 dark:text-purple-300">
        Komme 5-10 Minuten vor der Klasse an. Wenn die Stunde bereits begonnen hat, warte 
        bis zu einem passenden Moment, um leise einzutreten. Störe niemals die Anfangsmeditation 
        oder Savasana am Ende.
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Handys & Geräte</h4>
      <p className="text-purple-700 dark:text-purple-300">
        Schalte dein Handy auf lautlos oder noch besser: in den Flugmodus. Ein klingelndes 
        Telefon kann die Konzentration der gesamten Klasse stören. Die Welt kann 60-90 Minuten 
        auf dich warten.
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Hygiene & Sauberkeit</h4>
      <p className="text-purple-700 dark:text-purple-300">
        Dusche vor der Klasse wenn möglich, vermeide starke Parfüms. Bringe ein Handtuch mit 
        und reinige deine Matte nach der Praxis. Trage saubere, bequeme Kleidung.
      </p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Respekt für dich selbst</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Die wichtigsten Prinzipien</h3>
    <ul className="list-disc list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>Keine Vergleiche:</strong> Jeder Körper ist anders. Was für jemand anderen leicht aussieht, muss es für dich nicht sein - und umgekehrt.</li>
      <li><strong>Höre auf deinen Körper:</strong> Schmerz ist ein Signal. Leichtes Unbehagen bei einer Dehnung ist normal, scharfer Schmerz niemals.</li>
      <li><strong>Es ist OK, Pausen zu machen:</strong> Child's Pose (Kindeshaltung) ist immer eine Option. Niemand wird dich verurteilen.</li>
      <li><strong>Frage den Lehrer:</strong> Wenn du unsicher bist, frage. Gute Lehrer helfen gerne mit Modifikationen.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Respekt für andere</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Gemeinschaft auf der Matte</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Gib anderen genug Platz für ihre Matte und Bewegungen</li>
      <li>Vermeide laute Gespräche während der Praxis</li>
      <li>Respektiere die Stille, besonders bei Meditation und Savasana</li>
      <li>Verlasse den Raum leise, wenn du früher gehen musst</li>
      <li>Lächle und sei offen - Yoga-Gemeinschaften sind oft wie eine Familie</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Namaste - Was bedeutet es?</h3>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <p className="text-purple-700 dark:text-purple-300 leading-relaxed">
      "Namaste" wird oft am Ende einer Yoga-Klasse gesagt, mit den Händen vor dem Herzen 
      zusammengelegt und einer leichten Verbeugung. Es bedeutet wörtlich "Ich verbeuge mich 
      vor dir" und drückt Respekt und Dankbarkeit aus. Die tiefere Bedeutung: "Das Göttliche 
      in mir grüßt das Göttliche in dir."
    </p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Praktische Übung: Achtsame Selbstbeobachtung</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Setze dich für 3 Minuten in Stille und beobachte deine Gedanken</li>
      <li>Wenn du merkst, dass du dich mit anderen vergleichst, bemerke es und lass es los</li>
      <li>Sage dir selbst: "Ich bin genau da, wo ich sein soll"</li>
      <li>Schreibe drei Dinge auf, die du an deinem Körper schätzt</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Yoga Etiquette & Respect</h2>
  
  <p className="text-lg leading-relaxed">
    Yoga is not just a physical practice - it's a space of mindfulness and mutual respect. 
    Whether you practice alone at home or in a studio with others, certain behaviors make 
    the experience better for everyone.
  </p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">The Most Important Thing First</h3>
    <p className="text-purple-700 dark:text-purple-300">
      The golden rule of yoga is: Respect your body. Yoga is not a competition. It's not about 
      how deep you can bend or how the person next to you looks. It's about where YOU are 
      today - and that is exactly right.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">In the Yoga Studio</h3>

  <div className="space-y-4">
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Punctuality</h4>
      <p className="text-purple-700 dark:text-purple-300">
        Arrive 5-10 minutes before class. If the session has already started, wait for an 
        appropriate moment to enter quietly. Never disturb the opening meditation or final Savasana.
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Phones & Devices</h4>
      <p className="text-purple-700 dark:text-purple-300">
        Put your phone on silent or better yet: airplane mode. A ringing phone can disrupt the 
        entire class's concentration. The world can wait 60-90 minutes for you.
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Hygiene & Cleanliness</h4>
      <p className="text-purple-700 dark:text-purple-300">
        Shower before class if possible, avoid strong perfumes. Bring a towel and clean your 
        mat after practice. Wear clean, comfortable clothing.
      </p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Respect for Yourself</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Key Principles</h3>
    <ul className="list-disc list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>No comparisons:</strong> Every body is different. What looks easy for someone else doesn't have to be easy for you - and vice versa.</li>
      <li><strong>Listen to your body:</strong> Pain is a signal. Mild discomfort during a stretch is normal, sharp pain never is.</li>
      <li><strong>It's OK to take breaks:</strong> Child's Pose is always an option. Nobody will judge you.</li>
      <li><strong>Ask the teacher:</strong> If you're unsure, ask. Good teachers are happy to help with modifications.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Respect for Others</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Community on the Mat</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Give others enough space for their mat and movements</li>
      <li>Avoid loud conversations during practice</li>
      <li>Respect the silence, especially during meditation and Savasana</li>
      <li>Leave the room quietly if you need to leave early</li>
      <li>Smile and be open - yoga communities are often like family</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Namaste - What Does It Mean?</h3>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <p className="text-purple-700 dark:text-purple-300 leading-relaxed">
      "Namaste" is often said at the end of a yoga class, with hands pressed together at the 
      heart and a slight bow. It literally means "I bow to you" and expresses respect and 
      gratitude. The deeper meaning: "The divine in me honors the divine in you."
    </p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Practice Exercise: Mindful Self-Observation</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Sit in silence for 3 minutes and observe your thoughts</li>
      <li>When you notice yourself comparing to others, notice it and let it go</li>
      <li>Tell yourself: "I am exactly where I need to be"</li>
      <li>Write down three things you appreciate about your body</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Yoga-Etikette verinnerlichen",
      description: "Übe Respekt und Achtsamkeit als Grundlage deiner Yoga-Reise.",
      checklist: [
        { text: "Richte einen ruhigen Übungsplatz zu Hause ein (ohne Ablenkungen)", checked: false },
        { text: "Übe 3 Minuten stille Selbstbeobachtung ohne Wertung", checked: false },
        { text: "Schreibe drei Dinge auf, die du an deinem Körper schätzt", checked: false },
        { text: "Informiere dich über Yoga-Studios oder Online-Kurse in deiner Nähe", checked: false }
      ]
    },
    en: {
      title: "Internalize Yoga Etiquette",
      description: "Practice respect and mindfulness as the foundation of your yoga journey.",
      checklist: [
        { text: "Set up a quiet practice space at home (free from distractions)", checked: false },
        { text: "Practice 3 minutes of silent self-observation without judgment", checked: false },
        { text: "Write down three things you appreciate about your body", checked: false },
        { text: "Research yoga studios or online classes near you", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was ist die goldene Regel des Yoga?",
        answer: "Respektiere deinen Körper. Yoga ist kein Wettbewerb - es geht darum, wo du heute bist."
      },
      {
        question: "Was bedeutet 'Namaste'?",
        answer: "Wörtlich 'Ich verbeuge mich vor dir'. Die tiefere Bedeutung: 'Das Göttliche in mir grüßt das Göttliche in dir.'"
      },
      {
        question: "Was solltest du tun, wenn du während einer Pose Schmerzen spürst?",
        answer: "Aufhören und in Child's Pose gehen. Scharfer Schmerz ist nie akzeptabel - leichtes Dehnungsunbehagen ist normal, aber Schmerz ist ein Warnsignal."
      }
    ],
    en: [
      {
        question: "What is the golden rule of yoga?",
        answer: "Respect your body. Yoga is not a competition - it's about where you are today."
      },
      {
        question: "What does 'Namaste' mean?",
        answer: "Literally 'I bow to you'. The deeper meaning: 'The divine in me honors the divine in you.'"
      },
      {
        question: "What should you do if you feel pain during a pose?",
        answer: "Stop and go into Child's Pose. Sharp pain is never acceptable - mild stretching discomfort is normal, but pain is a warning signal."
      }
    ]
  }
};
