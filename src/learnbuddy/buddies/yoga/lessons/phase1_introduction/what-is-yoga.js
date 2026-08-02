export const whatIsYoga = {
  title: {
    de: "Was ist Yoga? Geschichte, Stile & die 8 Glieder",
    en: "What is Yoga? History, Styles & the 8 Limbs"
  },
  description: {
    de: "Entdecke die Ursprünge des Yoga, verschiedene Stile und die acht Glieder nach Patanjali.",
    en: "Discover the origins of yoga, different styles, and the eight limbs according to Patanjali."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Was ist Yoga?</h2>
  
  <p className="text-lg leading-relaxed">
    Yoga ist weit mehr als nur Dehnen und Körperhaltungen. Es ist ein jahrtausendealtes System, 
    das Körper, Geist und Seele in Einklang bringt. Das Wort "Yoga" stammt aus dem Sanskrit und 
    bedeutet "Vereinigung" oder "Verbindung" - die Vereinigung von Körper und Geist, von Atem 
    und Bewegung, von individuellem Bewusstsein und universellem Bewusstsein.
  </p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Die Essenz des Yoga</h3>
    <p className="text-purple-700 dark:text-purple-300">
      Yoga ist eine ganzheitliche Praxis, die vor über 5.000 Jahren in Indien entstand. Es 
      umfasst Körperhaltungen (Asanas), Atemübungen (Pranayama), Meditation und ethische 
      Prinzipien. Ziel ist es, inneren Frieden, körperliche Gesundheit und geistige Klarheit 
      zu erreichen.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Die Geschichte des Yoga</h3>
  
  <p className="leading-relaxed">
    Die ältesten Yoga-Texte sind die Veden, die vor etwa 5.000 Jahren in Indien verfasst wurden. 
    Die Yoga-Sutras von Patanjali, geschrieben um 200 v. Chr., gelten als das Grundlagenwerk 
    des klassischen Yoga. Sie beschreiben den achtgliedrigen Pfad (Ashtanga), der bis heute 
    die Basis vieler Yoga-Traditionen bildet.
  </p>

  <p className="leading-relaxed">
    Im 20. Jahrhundert brachten Lehrer wie T. Krishnamacharya, B.K.S. Iyengar und Pattabhi Jois 
    Yoga in den Westen. Heute praktizieren weltweit über 300 Millionen Menschen Yoga - von 
    sanfter Meditation bis hin zu kraftvollen Flows.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">Die wichtigsten Yoga-Stile</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Hatha Yoga</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        Der Klassiker: Langsame, gehaltene Posen mit Fokus auf Ausrichtung und Atmung. 
        Ideal für Anfänger. "Ha" bedeutet Sonne, "Tha" bedeutet Mond - die Balance 
        gegensätzlicher Energien.
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Vinyasa Yoga</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        Fließende Bewegungen, synchronisiert mit dem Atem. Dynamisch und kreativ, 
        jede Klasse ist anders. Auch "Flow Yoga" genannt.
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Ashtanga Yoga</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        Eine feste Sequenz von Posen, die immer in derselben Reihenfolge geübt werden. 
        Sehr strukturiert, körperlich fordernd und diszipliniert.
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Yin Yoga</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        Passive Posen, die 3-5 Minuten gehalten werden. Fokus auf tiefes Bindegewebe, 
        Faszien und Gelenke. Meditativ und ruhig.
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Iyengar Yoga</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        Präzise Ausrichtung mit vielen Hilfsmitteln (Blöcke, Gurte, Decken). 
        Therapeutisch und detailorientiert.
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Kundalini Yoga</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        Kombination aus Körperübungen, Atemtechniken, Meditation und Mantras. 
        Fokus auf spirituelle Energie und Bewusstseinserweiterung.
      </p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Die 8 Glieder des Yoga (Ashtanga)</h3>
  
  <p className="leading-relaxed mb-4">
    Patanjali beschrieb in seinen Yoga-Sutras acht Stufen, die zusammen den vollständigen 
    Yoga-Pfad bilden. Asanas (Körperhaltungen) sind nur ein Teil davon:
  </p>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Die 8 Glieder nach Patanjali</h3>
    <ol className="list-decimal list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>Yama</strong> - Ethische Regeln im Umgang mit anderen (Gewaltlosigkeit, Wahrhaftigkeit, Nicht-Stehlen, Mäßigung, Nicht-Horten)</li>
      <li><strong>Niyama</strong> - Selbstdisziplin und innere Beobachtung (Reinheit, Zufriedenheit, Disziplin, Selbststudium, Hingabe)</li>
      <li><strong>Asana</strong> - Körperhaltungen, die den Körper stärken und flexibel machen</li>
      <li><strong>Pranayama</strong> - Atemkontrolle und Atemübungen</li>
      <li><strong>Pratyahara</strong> - Rückzug der Sinne von äußeren Ablenkungen</li>
      <li><strong>Dharana</strong> - Konzentration auf einen einzigen Punkt</li>
      <li><strong>Dhyana</strong> - Meditation, ununterbrochener Fluss der Konzentration</li>
      <li><strong>Samadhi</strong> - Vollkommene Versenkung, Einheit mit dem Objekt der Meditation</li>
    </ol>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Warum ist das wichtig?</h3>
    <p className="text-blue-700 dark:text-blue-300">
      Die 8 Glieder zeigen, dass Yoga nicht nur "Sport" ist. Die Körperpraxis (Asana) ist nur 
      eine von acht Stufen. Wenn du Yoga praktizierst, trainierst du nicht nur deinen Körper, 
      sondern auch deinen Geist, deine Atemkontrolle und dein ethisches Bewusstsein. 
      Dieses Verständnis macht deine Praxis reicher und tiefer.
    </p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Praktische Übung: Dein erster Moment der Stille</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Finde einen ruhigen Platz und setze dich bequem hin</li>
      <li>Schließe die Augen und lege die Hände auf die Knie</li>
      <li>Atme 5 Minuten lang langsam durch die Nase ein und aus</li>
      <li>Beobachte deinen Atem, ohne ihn zu verändern</li>
      <li>Notiere danach, was du bemerkt hast - Gedanken, Gefühle, Empfindungen</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">What is Yoga?</h2>
  
  <p className="text-lg leading-relaxed">
    Yoga is far more than just stretching and postures. It is an ancient system that brings 
    body, mind, and soul into harmony. The word "Yoga" comes from Sanskrit and means "union" 
    or "connection" - the union of body and mind, of breath and movement, of individual 
    consciousness and universal consciousness.
  </p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">The Essence of Yoga</h3>
    <p className="text-purple-700 dark:text-purple-300">
      Yoga is a holistic practice that originated in India over 5,000 years ago. It encompasses 
      physical postures (asanas), breathing exercises (pranayama), meditation, and ethical 
      principles. The goal is to achieve inner peace, physical health, and mental clarity.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The History of Yoga</h3>
  
  <p className="leading-relaxed">
    The oldest yoga texts are the Vedas, composed in India about 5,000 years ago. The Yoga 
    Sutras of Patanjali, written around 200 BCE, are considered the foundational text of 
    classical yoga. They describe the eightfold path (Ashtanga), which still forms the basis 
    of many yoga traditions today.
  </p>

  <p className="leading-relaxed">
    In the 20th century, teachers like T. Krishnamacharya, B.K.S. Iyengar, and Pattabhi Jois 
    brought yoga to the West. Today, over 300 million people worldwide practice yoga - from 
    gentle meditation to powerful flows.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Major Yoga Styles</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Hatha Yoga</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        The classic: slow, held poses with focus on alignment and breathing. Ideal for 
        beginners. "Ha" means sun, "Tha" means moon - the balance of opposing energies.
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Vinyasa Yoga</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        Flowing movements synchronized with breath. Dynamic and creative, every class is 
        different. Also called "Flow Yoga."
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Ashtanga Yoga</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        A fixed sequence of poses always practiced in the same order. Very structured, 
        physically demanding, and disciplined.
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Yin Yoga</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        Passive poses held for 3-5 minutes. Focus on deep connective tissue, fascia, and 
        joints. Meditative and calm.
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Iyengar Yoga</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        Precise alignment with many props (blocks, straps, blankets). Therapeutic and 
        detail-oriented.
      </p>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/40 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Kundalini Yoga</h4>
      <p className="text-purple-700 dark:text-purple-300 text-sm">
        Combination of exercises, breathing techniques, meditation, and mantras. Focus on 
        spiritual energy and consciousness expansion.
      </p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The 8 Limbs of Yoga (Ashtanga)</h3>
  
  <p className="leading-relaxed mb-4">
    Patanjali described eight stages in his Yoga Sutras that together form the complete yoga 
    path. Asanas (postures) are only one part of it:
  </p>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">The 8 Limbs According to Patanjali</h3>
    <ol className="list-decimal list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>Yama</strong> - Ethical rules for interacting with others (non-violence, truthfulness, non-stealing, moderation, non-hoarding)</li>
      <li><strong>Niyama</strong> - Self-discipline and inner observance (purity, contentment, discipline, self-study, surrender)</li>
      <li><strong>Asana</strong> - Physical postures that strengthen and make the body flexible</li>
      <li><strong>Pranayama</strong> - Breath control and breathing exercises</li>
      <li><strong>Pratyahara</strong> - Withdrawal of the senses from external distractions</li>
      <li><strong>Dharana</strong> - Concentration on a single point</li>
      <li><strong>Dhyana</strong> - Meditation, uninterrupted flow of concentration</li>
      <li><strong>Samadhi</strong> - Complete absorption, unity with the object of meditation</li>
    </ol>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Why Does This Matter?</h3>
    <p className="text-blue-700 dark:text-blue-300">
      The 8 limbs show that yoga is not just "exercise." The physical practice (asana) is only 
      one of eight stages. When you practice yoga, you're training not just your body, but also 
      your mind, breath control, and ethical awareness. This understanding makes your practice 
      richer and deeper.
    </p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Practice Exercise: Your First Moment of Stillness</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Find a quiet spot and sit comfortably</li>
      <li>Close your eyes and place your hands on your knees</li>
      <li>Breathe slowly in and out through your nose for 5 minutes</li>
      <li>Observe your breath without trying to change it</li>
      <li>Afterward, write down what you noticed - thoughts, feelings, sensations</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Deine erste Mission: Yoga entdecken",
      description: "Bevor du auf die Matte gehst, nimm dir Zeit, die Grundlagen des Yoga zu verstehen.",
      checklist: [
        { text: "Lies über die verschiedenen Yoga-Stile und finde heraus, welcher dich anspricht", checked: false },
        { text: "Lerne die 8 Glieder des Yoga auswendig und schreibe sie auf", checked: false },
        { text: "Setze dich 5 Minuten in Stille und beobachte deinen Atem", checked: false },
        { text: "Suche nach einem Yoga-Studio oder Online-Kurs in deiner Nähe", checked: false }
      ]
    },
    en: {
      title: "Your First Mission: Discover Yoga",
      description: "Before you step on the mat, take time to understand the fundamentals of yoga.",
      checklist: [
        { text: "Read about different yoga styles and find which one appeals to you", checked: false },
        { text: "Memorize the 8 limbs of yoga and write them down", checked: false },
        { text: "Sit in silence for 5 minutes and observe your breath", checked: false },
        { text: "Search for a yoga studio or online class near you", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was bedeutet das Wort 'Yoga' wörtlich übersetzt?",
        answer: "Yoga bedeutet 'Vereinigung' oder 'Verbindung' aus dem Sanskrit - die Verbindung von Körper, Geist und Seele."
      },
      {
        question: "Welches sind die 8 Glieder des Yoga nach Patanjali?",
        answer: "Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana und Samadhi."
      },
      {
        question: "Was ist der Hauptunterschied zwischen Hatha Yoga und Vinyasa Yoga?",
        answer: "Hatha Yoga betont langsame, gehaltene Posen mit Fokus auf Ausrichtung, während Vinyasa Yoga fließende Bewegungen synchronisiert mit dem Atem praktiziert."
      }
    ],
    en: [
      {
        question: "What does the word 'Yoga' literally translate to?",
        answer: "Yoga means 'union' or 'connection' from Sanskrit - the connection of body, mind, and soul."
      },
      {
        question: "What are the 8 limbs of yoga according to Patanjali?",
        answer: "Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, and Samadhi."
      },
      {
        question: "What is the main difference between Hatha Yoga and Vinyasa Yoga?",
        answer: "Hatha Yoga emphasizes slow, held poses with focus on alignment, while Vinyasa Yoga practices flowing movements synchronized with breath."
      }
    ]
  }
};
