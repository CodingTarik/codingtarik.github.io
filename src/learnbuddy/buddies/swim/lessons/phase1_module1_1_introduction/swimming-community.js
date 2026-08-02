export const swimmingCommunity = {
  title: {
    de: "Die Schwimm-Community",
    en: "The Swimming Community"
  },
  description: {
    de: "Entdecke die Schwimm-Community: Vereine, Schwimmschulen, Wettkämpfe und Online-Ressourcen.",
    en: "Discover the swimming community: clubs, swim schools, competitions, and online resources."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Die Schwimm-Community</h2>
  
  <p className="text-lg leading-relaxed">
    Schwimmen ist nicht nur ein Einzelsport - es gibt eine große, vielfältige Community von 
    Schwimmern, die sich gegenseitig unterstützen, motivieren und voneinander lernen. Egal ob 
    du Wettkampfschwimmer werden möchtest oder einfach nur für Fitness schwimmst, die Community 
    kann dir helfen, deine Ziele zu erreichen.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Vereine & Schwimmschulen finden</h3>
    
    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mt-4 mb-2">Schwimmvereine</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Schwimmvereine bieten strukturiertes Training, professionelle Anleitung und die Möglichkeit, 
      mit anderen Schwimmern zu trainieren. Sie sind ideal für:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300 mb-4">
      <li>Regelmäßiges, strukturiertes Training</li>
      <li>Technik-Verbesserung durch Trainer</li>
      <li>Wettkampfvorbereitung</li>
      <li>Soziale Kontakte mit Gleichgesinnten</li>
      <li>Zugang zu Schwimmbädern und Equipment</li>
    </ul>

    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mt-4 mb-2">Schwimmschulen</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Schwimmschulen sind perfekt für Anfänger, die systematisch die Grundlagen lernen möchten. 
      Sie bieten:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300 mb-4">
      <li>Kleine Gruppen oder Einzelunterricht</li>
      <li>Schritt-für-Schritt Anleitung</li>
      <li>Fokus auf Sicherheit und richtige Technik</li>
      <li>Anfängerfreundliche Umgebung</li>
    </ul>

    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mt-4 mb-2">Wie finde ich einen Verein oder eine Schule?</h4>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Suche online nach "Schwimmverein [deine Stadt]" oder "Schwimmschule [deine Stadt]"</li>
      <li>Frage im Schwimmbad nach Empfehlungen</li>
      <li>Besuche Probetrainings, um die Atmosphäre kennenzulernen</li>
      <li>Prüfe Bewertungen und Erfahrungen anderer</li>
    </ul>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Wettkampfschwimmen vs. Freizeitschwimmen</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Wettkampfschwimmen</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-amber-700 dark:text-amber-300">
          <li>Strukturiertes Training mit Zielen</li>
          <li>Teilnahme an Wettkämpfen</li>
          <li>Fokus auf Geschwindigkeit und Technik</li>
          <li>Regelmäßige Trainingszeiten</li>
          <li>Messung von Zeiten und Fortschritt</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Freizeitschwimmen</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-amber-700 dark:text-amber-300">
          <li>Flexible Trainingszeiten</li>
          <li>Fokus auf Fitness und Spaß</li>
          <li>Kein Druck durch Wettkämpfe</li>
          <li>Eigene Ziele setzen</li>
          <li>Entspannung und Stressabbau</li>
        </ul>
      </div>
    </div>

    <p className="text-amber-700 dark:text-amber-300 mt-4">
      Beide Ansätze sind völlig legitim! Wähle das, was zu deinen Zielen und deinem Lebensstil passt. 
      Du kannst auch beides kombinieren - manchmal für Wettkämpfe trainieren, manchmal einfach nur 
      zum Spaß schwimmen.
    </p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Masters-Schwimmen (Erwachsenen-Training)</h3>
    
    <p className="text-green-700 dark:text-green-300 mb-4">
      Masters-Schwimmen ist speziell für Erwachsene ab 18 Jahren gedacht. Es ist perfekt für:
    </p>

    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300 mb-4">
      <li><strong>Wiedereinsteiger:</strong> Menschen, die früher geschwommen sind und wieder 
      einsteigen möchten</li>
      <li><strong>Späteinsteiger:</strong> Erwachsene, die erst als Erwachsene schwimmen lernen</li>
      <li><strong>Fitness-Schwimmer:</strong> Menschen, die für Gesundheit und Fitness schwimmen</li>
      <li><strong>Wettkampfschwimmer:</strong> Erwachsene, die an Wettkämpfen teilnehmen möchten</li>
    </ul>

    <p className="text-green-700 dark:text-green-300">
      Masters-Training ist oft weniger intensiv als Jugend-Training, aber trotzdem strukturiert 
      und zielorientiert. Die Altersgruppen werden in 5-Jahres-Schritten eingeteilt (z.B. 25-29, 
      30-34, etc.), sodass du gegen Schwimmer deines Alters antrittst.
    </p>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-6">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Online-Communities & Ressourcen</h3>
    
    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mt-4 mb-2">Soziale Medien</h4>
    <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300 mb-4">
      <li><strong>Instagram:</strong> #swimming, #swimlife, #swimtraining - Inspiration und 
      Community</li>
      <li><strong>YouTube:</strong> Unzählige Tutorials, Technik-Analysen und Trainingsvideos</li>
      <li><strong>Facebook-Gruppen:</strong> Lokale und internationale Schwimm-Communities</li>
      <li><strong>Reddit:</strong> r/Swimming - Diskussionen, Fragen, Tipps</li>
    </ul>

    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mt-4 mb-2">Apps & Tools</h4>
    <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300 mb-4">
      <li><strong>Swim-Tracking-Apps:</strong> Tracke deine Strecken, Zeiten und Fortschritt</li>
      <li><strong>Trainingsplan-Apps:</strong> Strukturierte Trainingspläne für verschiedene Ziele</li>
      <li><strong>Technik-Apps:</strong> Video-Analyse und Feedback</li>
    </ul>

    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mt-4 mb-2">Websites & Blogs</h4>
    <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li>Schwimm-Verbände (z.B. DSV in Deutschland, USA Swimming)</li>
      <li>Schwimm-Magazine und Blogs</li>
      <li>Online-Kurse und Webinare</li>
      <li>Foren für spezifische Fragen</li>
    </ul>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-8">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Warum ist die Community wichtig?</h3>
    <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
      Die Schwimm-Community bietet dir:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300 mt-3">
      <li><strong>Motivation:</strong> Andere Schwimmer können dich inspirieren und motivieren</li>
      <li><strong>Lernen:</strong> Du kannst von erfahrenen Schwimmern lernen</li>
      <li><strong>Unterstützung:</strong> Bei Fragen oder Problemen findest du Hilfe</li>
      <li><strong>Freundschaften:</strong> Gemeinsame Leidenschaft verbindet</li>
      <li><strong>Verantwortlichkeit:</strong> Regelmäßiges Training wird leichter mit einer Gruppe</li>
    </ul>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">The Swimming Community</h2>
  
  <p className="text-lg leading-relaxed">
    Swimming is not just an individual sport - there's a large, diverse community of swimmers 
    who support, motivate, and learn from each other. Whether you want to become a competitive 
    swimmer or just swim for fitness, the community can help you achieve your goals.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Finding Clubs & Swim Schools</h3>
    
    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mt-4 mb-2">Swim Clubs</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Swim clubs offer structured training, professional guidance, and the opportunity to train 
      with other swimmers. They're ideal for:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300 mb-4">
      <li>Regular, structured training</li>
      <li>Technique improvement through coaches</li>
      <li>Competition preparation</li>
      <li>Social contacts with like-minded people</li>
      <li>Access to pools and equipment</li>
    </ul>

    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mt-4 mb-2">Swim Schools</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Swim schools are perfect for beginners who want to learn the basics systematically. They offer:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300 mb-4">
      <li>Small groups or individual lessons</li>
      <li>Step-by-step instruction</li>
      <li>Focus on safety and proper technique</li>
      <li>Beginner-friendly environment</li>
    </ul>

    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mt-4 mb-2">How do I find a club or school?</h4>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Search online for "swim club [your city]" or "swim school [your city]"</li>
      <li>Ask at the pool for recommendations</li>
      <li>Visit trial sessions to get to know the atmosphere</li>
      <li>Check reviews and experiences of others</li>
    </ul>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Competitive Swimming vs. Recreational Swimming</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Competitive Swimming</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-amber-700 dark:text-amber-300">
          <li>Structured training with goals</li>
          <li>Competition participation</li>
          <li>Focus on speed and technique</li>
          <li>Regular training times</li>
          <li>Measurement of times and progress</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Recreational Swimming</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-amber-700 dark:text-amber-300">
          <li>Flexible training times</li>
          <li>Focus on fitness and fun</li>
          <li>No pressure from competitions</li>
          <li>Set your own goals</li>
          <li>Relaxation and stress relief</li>
        </ul>
      </div>
    </div>

    <p className="text-amber-700 dark:text-amber-300 mt-4">
      Both approaches are completely legitimate! Choose what fits your goals and lifestyle. 
      You can also combine both - sometimes train for competitions, sometimes just swim for fun.
    </p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Masters Swimming (Adult Training)</h3>
    
    <p className="text-green-700 dark:text-green-300 mb-4">
      Masters swimming is specifically for adults 18 and older. It's perfect for:
    </p>

    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300 mb-4">
      <li><strong>Returning swimmers:</strong> People who swam before and want to get back into it</li>
      <li><strong>Late starters:</strong> Adults who learn to swim as adults</li>
      <li><strong>Fitness swimmers:</strong> People who swim for health and fitness</li>
      <li><strong>Competitive swimmers:</strong> Adults who want to compete</li>
    </ul>

    <p className="text-green-700 dark:text-green-300">
      Masters training is often less intense than youth training, but still structured and goal-oriented. 
      Age groups are divided in 5-year increments (e.g., 25-29, 30-34, etc.), so you compete 
      against swimmers your age.
    </p>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-6">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Online Communities & Resources</h3>
    
    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mt-4 mb-2">Social Media</h4>
    <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300 mb-4">
      <li><strong>Instagram:</strong> #swimming, #swimlife, #swimtraining - inspiration and community</li>
      <li><strong>YouTube:</strong> Countless tutorials, technique analyses, and training videos</li>
      <li><strong>Facebook Groups:</strong> Local and international swimming communities</li>
      <li><strong>Reddit:</strong> r/Swimming - discussions, questions, tips</li>
    </ul>

    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mt-4 mb-2">Apps & Tools</h4>
    <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300 mb-4">
      <li><strong>Swim tracking apps:</strong> Track your distances, times, and progress</li>
      <li><strong>Training plan apps:</strong> Structured training plans for various goals</li>
      <li><strong>Technique apps:</strong> Video analysis and feedback</li>
    </ul>

    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mt-4 mb-2">Websites & Blogs</h4>
    <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li>Swimming federations (e.g., DSV in Germany, USA Swimming)</li>
      <li>Swimming magazines and blogs</li>
      <li>Online courses and webinars</li>
      <li>Forums for specific questions</li>
    </ul>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-8">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Why is the community important?</h3>
    <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
      The swimming community offers you:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300 mt-3">
      <li><strong>Motivation:</strong> Other swimmers can inspire and motivate you</li>
      <li><strong>Learning:</strong> You can learn from experienced swimmers</li>
      <li><strong>Support:</strong> You'll find help with questions or problems</li>
      <li><strong>Friendships:</strong> Shared passion connects</li>
      <li><strong>Accountability:</strong> Regular training becomes easier with a group</li>
    </ul>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Schwimm-Community erkunden",
      description: "Finde heraus, welche Schwimm-Communities und Ressourcen in deiner Nähe verfügbar sind.",
      checklist: [
        { text: "Suche nach Schwimmvereinen oder Schwimmschulen in deiner Stadt", checked: false },
        { text: "Informiere dich über Probetrainings oder Schnupperkurse", checked: false },
        { text: "Folge Schwimm-Communities auf Social Media (Instagram, YouTube)", checked: false },
        { text: "Lade eine Schwimm-Tracking-App herunter und teste sie", checked: false }
      ]
    },
    en: {
      title: "Explore the Swimming Community",
      description: "Find out what swimming communities and resources are available near you.",
      checklist: [
        { text: "Search for swim clubs or swim schools in your city", checked: false },
        { text: "Learn about trial sessions or taster courses", checked: false },
        { text: "Follow swimming communities on social media (Instagram, YouTube)", checked: false },
        { text: "Download a swim tracking app and try it out", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was sind die Vorteile eines Schwimmvereins?",
        answer: "Strukturiertes Training, professionelle Anleitung, Wettkampfvorbereitung, soziale Kontakte und Zugang zu Schwimmbädern und Equipment."
      },
      {
        question: "Was ist Masters-Schwimmen?",
        answer: "Masters-Schwimmen ist speziell für Erwachsene ab 18 Jahren gedacht und bietet strukturiertes Training für Wiedereinsteiger, Späteinsteiger und Wettkampfschwimmer."
      },
      {
        question: "Warum ist die Schwimm-Community wichtig?",
        answer: "Sie bietet Motivation, Lernmöglichkeiten, Unterstützung, Freundschaften und hilft dabei, regelmäßig zu trainieren."
      }
    ],
    en: [
      {
        question: "What are the advantages of a swim club?",
        answer: "Structured training, professional guidance, competition preparation, social contacts, and access to pools and equipment."
      },
      {
        question: "What is Masters swimming?",
        answer: "Masters swimming is specifically for adults 18 and older and offers structured training for returning swimmers, late starters, and competitive swimmers."
      },
      {
        question: "Why is the swimming community important?",
        answer: "It offers motivation, learning opportunities, support, friendships, and helps maintain regular training."
      }
    ]
  }
};


