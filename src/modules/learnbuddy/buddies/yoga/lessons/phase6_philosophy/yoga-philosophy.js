export const yogaPhilosophy = {
  title: { de: "Yoga-Philosophie - Sutras & Bhagavad Gita", en: "Yoga Philosophy - Sutras & Bhagavad Gita" },
  description: { de: "Vertiefe dein Verständnis der Yoga-Philosophie: Patanjalis Sutras, Bhagavad Gita und moderne Anwendung.", en: "Deepen your understanding of yoga philosophy: Patanjali's Sutras, Bhagavad Gita, and modern application." },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Yoga-Philosophie</h2>
  <p className="text-lg leading-relaxed">Yoga-Philosophie gibt deiner Praxis Tiefe und Bedeutung. Sie zeigt, wie die Prinzipien der Matte in den Alltag übertragen werden können.</p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Die Yoga-Sutras von Patanjali</h3>
    <p className="text-purple-700 dark:text-purple-300 mb-3">196 kurze Verse (Sutras), die das Wesen des Yoga beschreiben. Die wichtigsten:</p>
    <div className="space-y-3 text-purple-700 dark:text-purple-300">
      <div className="bg-white dark:bg-purple-800/20 p-3 rounded-lg">
        <p className="font-bold italic">"Yogas chitta vritti nirodhah"</p>
        <p>"Yoga ist das Zur-Ruhe-Bringen der Gedankenwellen im Geist." (Sutra 1.2)</p>
      </div>
      <div className="bg-white dark:bg-purple-800/20 p-3 rounded-lg">
        <p className="font-bold italic">"Tada drashtuh svarupe avasthanam"</p>
        <p>"Dann ruht der Beobachter in seiner wahren Natur." (Sutra 1.3)</p>
      </div>
      <div className="bg-white dark:bg-purple-800/20 p-3 rounded-lg">
        <p className="font-bold italic">"Abhyasa vairagyabhyam tan nirodhah"</p>
        <p>"Durch Übung und Nicht-Anhaftung wird dies erreicht." (Sutra 1.12)</p>
      </div>
    </div>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-4">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Die Yamas & Niyamas im Alltag</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-purple-700 dark:text-purple-300">
      <div><h4 className="font-bold">Ahimsa (Gewaltlosigkeit)</h4><p className="text-sm">Freundlichkeit zu dir selbst und anderen, auch in Gedanken.</p></div>
      <div><h4 className="font-bold">Satya (Wahrhaftigkeit)</h4><p className="text-sm">Ehrlich sein, aber mit Mitgefühl.</p></div>
      <div><h4 className="font-bold">Asteya (Nicht-Stehlen)</h4><p className="text-sm">Auch: anderer Leute Zeit, Energie oder Ideen nicht stehlen.</p></div>
      <div><h4 className="font-bold">Santosha (Zufriedenheit)</h4><p className="text-sm">Dankbarkeit für das, was ist, statt ständig mehr zu wollen.</p></div>
      <div><h4 className="font-bold">Tapas (Disziplin)</h4><p className="text-sm">Die Flamme der Praxis am Brennen halten, auch an schwierigen Tagen.</p></div>
      <div><h4 className="font-bold">Svadhyaya (Selbststudium)</h4><p className="text-sm">Sich selbst erforschen - auf und abseits der Matte.</p></div>
    </div>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-4">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Die Bhagavad Gita & Yoga-Pfade</h3>
    <div className="space-y-3 text-purple-700 dark:text-purple-300">
      <div><h4 className="font-bold">Karma Yoga</h4><p>Yoga des selbstlosen Handelns. Handle ohne Anhaftung an das Ergebnis.</p></div>
      <div><h4 className="font-bold">Bhakti Yoga</h4><p>Yoga der Hingabe. Liebe und Devotion als Weg zur Befreiung.</p></div>
      <div><h4 className="font-bold">Jnana Yoga</h4><p>Yoga des Wissens. Selbsterforschung und Unterscheidungskraft.</p></div>
      <div><h4 className="font-bold">Raja Yoga</h4><p>Yoga der Meditation. Der achtgliedrige Pfad des Patanjali.</p></div>
    </div>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Yoga im Alltag</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Achtsamkeit:</strong> Bewusstes Essen, Gehen, Sprechen</li>
      <li><strong>Atemübungen bei Stress:</strong> 3 tiefe Atemzüge vor einer schwierigen Situation</li>
      <li><strong>Dankbarkeit:</strong> 3 Dinge pro Tag aufschreiben, für die du dankbar bist</li>
      <li><strong>Nicht-Wertung:</strong> Beobachte, ohne sofort zu urteilen</li>
      <li><strong>Körperhaltung:</strong> Bewusstes Sitzen und Stehen am Arbeitsplatz</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Praktische Übung: Yama/Niyama-Woche</h3>
    <p className="text-green-700 dark:text-green-300">Wähle ein Yama oder Niyama und praktiziere es eine Woche lang bewusst:</p>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Wähle z.B. Ahimsa (Gewaltlosigkeit) oder Santosha (Zufriedenheit)</li>
      <li>Beobachte eine Woche lang, wo du diesem Prinzip schon folgst</li>
      <li>Bemerke Momente, in denen du dagegen handelst (ohne Selbstverurteilung!)</li>
      <li>Schreibe am Ende der Woche auf, was du gelernt hast</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Yoga Philosophy</h2>
  <p className="text-lg leading-relaxed">Yoga philosophy gives your practice depth and meaning. It shows how the principles from the mat can be transferred into daily life.</p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">The Yoga Sutras of Patanjali</h3>
    <p className="text-purple-700 dark:text-purple-300 mb-3">196 short verses (sutras) describing the essence of yoga. The most important:</p>
    <div className="space-y-3 text-purple-700 dark:text-purple-300">
      <div className="bg-white dark:bg-purple-800/20 p-3 rounded-lg">
        <p className="font-bold italic">"Yogas chitta vritti nirodhah"</p>
        <p>"Yoga is the stilling of the fluctuations of the mind." (Sutra 1.2)</p>
      </div>
      <div className="bg-white dark:bg-purple-800/20 p-3 rounded-lg">
        <p className="font-bold italic">"Tada drashtuh svarupe avasthanam"</p>
        <p>"Then the seer rests in its true nature." (Sutra 1.3)</p>
      </div>
      <div className="bg-white dark:bg-purple-800/20 p-3 rounded-lg">
        <p className="font-bold italic">"Abhyasa vairagyabhyam tan nirodhah"</p>
        <p>"Through practice and non-attachment this is achieved." (Sutra 1.12)</p>
      </div>
    </div>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-4">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Yamas & Niyamas in Daily Life</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-purple-700 dark:text-purple-300">
      <div><h4 className="font-bold">Ahimsa (Non-violence)</h4><p className="text-sm">Kindness to yourself and others, even in thoughts.</p></div>
      <div><h4 className="font-bold">Satya (Truthfulness)</h4><p className="text-sm">Being honest, but with compassion.</p></div>
      <div><h4 className="font-bold">Asteya (Non-stealing)</h4><p className="text-sm">Also: not stealing others' time, energy, or ideas.</p></div>
      <div><h4 className="font-bold">Santosha (Contentment)</h4><p className="text-sm">Gratitude for what is, instead of always wanting more.</p></div>
      <div><h4 className="font-bold">Tapas (Discipline)</h4><p className="text-sm">Keeping the flame of practice burning, even on difficult days.</p></div>
      <div><h4 className="font-bold">Svadhyaya (Self-study)</h4><p className="text-sm">Exploring yourself - on and off the mat.</p></div>
    </div>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-4">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Bhagavad Gita & Yoga Paths</h3>
    <div className="space-y-3 text-purple-700 dark:text-purple-300">
      <div><h4 className="font-bold">Karma Yoga</h4><p>Yoga of selfless action. Act without attachment to the result.</p></div>
      <div><h4 className="font-bold">Bhakti Yoga</h4><p>Yoga of devotion. Love and devotion as a path to liberation.</p></div>
      <div><h4 className="font-bold">Jnana Yoga</h4><p>Yoga of knowledge. Self-inquiry and discernment.</p></div>
      <div><h4 className="font-bold">Raja Yoga</h4><p>Yoga of meditation. Patanjali's eightfold path.</p></div>
    </div>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Yoga in Daily Life</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Mindfulness:</strong> Conscious eating, walking, speaking</li>
      <li><strong>Breath exercises during stress:</strong> 3 deep breaths before a difficult situation</li>
      <li><strong>Gratitude:</strong> Write down 3 things per day you're grateful for</li>
      <li><strong>Non-judgment:</strong> Observe without immediately judging</li>
      <li><strong>Posture:</strong> Conscious sitting and standing at the workplace</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Practice: Yama/Niyama Week</h3>
    <p className="text-green-700 dark:text-green-300">Choose a Yama or Niyama and consciously practice it for a week:</p>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Choose e.g. Ahimsa (non-violence) or Santosha (contentment)</li>
      <li>Observe for a week where you already follow this principle</li>
      <li>Notice moments when you act against it (without self-judgment!)</li>
      <li>At the end of the week, write down what you learned</li>
    </ol>
  </div>
</div>
    `
  },
  task: { de: { title: "Yoga-Philosophie im Alltag", description: "Bringe die Philosophie des Yoga von der Matte in dein Leben.", checklist: [{ text: "Lies über die Yoga-Sutras und schreibe 3 auf, die dich ansprechen", checked: false }, { text: "Wähle ein Yama/Niyama und praktiziere es bewusst eine Woche lang", checked: false }, { text: "Übe täglich 3 Minuten Dankbarkeitsmeditation", checked: false }, { text: "Schreibe auf, wie sich dein Yoga-Verständnis durch die Philosophie verändert hat", checked: false }] }, en: { title: "Yoga Philosophy in Daily Life", description: "Bring the philosophy of yoga from the mat into your life.", checklist: [{ text: "Read about the Yoga Sutras and write down 3 that resonate", checked: false }, { text: "Choose a Yama/Niyama and consciously practice it for one week", checked: false }, { text: "Practice 3 minutes of gratitude meditation daily", checked: false }, { text: "Write down how your understanding of yoga changed through philosophy", checked: false }] } },
  quiz: { de: [{ question: "Was bedeutet 'Yogas chitta vritti nirodhah'?", answer: "'Yoga ist das Zur-Ruhe-Bringen der Gedankenwellen im Geist.' Dies ist Sutra 1.2 von Patanjali und beschreibt die Essenz des Yoga." }, { question: "Was sind die vier Yoga-Pfade der Bhagavad Gita?", answer: "Karma Yoga (Handeln), Bhakti Yoga (Hingabe), Jnana Yoga (Wissen) und Raja Yoga (Meditation)." }, { question: "Wie kann man Ahimsa (Gewaltlosigkeit) im Alltag praktizieren?", answer: "Freundlichkeit zu sich selbst und anderen, auch in Gedanken. Keine abwertenden Selbstgespräche, mitfühlender Umgang mit anderen, bewusste Sprache." }], en: [{ question: "What does 'Yogas chitta vritti nirodhah' mean?", answer: "'Yoga is the stilling of the fluctuations of the mind.' This is Sutra 1.2 by Patanjali and describes the essence of yoga." }, { question: "What are the four yoga paths of the Bhagavad Gita?", answer: "Karma Yoga (action), Bhakti Yoga (devotion), Jnana Yoga (knowledge), and Raja Yoga (meditation)." }, { question: "How can you practice Ahimsa (non-violence) in daily life?", answer: "Kindness to yourself and others, even in thoughts. No negative self-talk, compassionate interaction with others, conscious language." }] }
};
