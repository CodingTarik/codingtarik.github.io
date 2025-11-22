export const swimGoggles = {
  title: {
    de: "Schwimmbrille - DAS wichtigste Equipment!",
    en: "Swim Goggles - THE Most Important Equipment!"
  },
  description: {
    de: "Erfahre alles über Schwimmbrillen: Warum sie unverzichtbar sind und wie du die richtige wählst.",
    en: "Learn everything about swim goggles: Why they are essential and how to choose the right one."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Schwimmbrille - DAS wichtigste Equipment!</h2>
  
  <p className="text-lg leading-relaxed">
    Wenn du nur ein Stück Ausrüstung kaufen kannst, dann nimm eine gute Schwimmbrille. Sie ist 
    das wichtigste Equipment für jeden Schwimmer - Anfänger oder Profi. Ohne Brille schwimmst 
    du nicht lange, weil deine Augen brennen und du dich unwohl fühlst.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Warum ist eine Brille so wichtig?</h3>
    
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Klarheit unter Wasser:</strong> Du siehst, wohin du schwimmst - Orientierung ist entscheidend!</li>
      <li><strong>Schutz vor Chlor:</strong> Chlor im Schwimmbadwasser reizt die Augen. Eine Brille schützt vor Rötungen und Infektionen.</li>
      <li><strong>Augen öffnen unter Wasser:</strong> Ohne Brille kneifst du die Augen zu. Mit Brille kannst du sie öffnen und dich wohlfühlen.</li>
      <li><strong>Besseres Training:</strong> Du kannst längere Strecken schwimmen, ohne dass deine Augen brennen.</li>
      <li><strong>Sicherheit:</strong> Du siehst den Beckenboden, andere Schwimmer und die Bahnenmarkierungen.</li>
    </ul>

    <p className="text-blue-700 dark:text-blue-300 mt-4">
      <strong>Tipp:</strong> Ohne Brille verlierst du 50% deiner Schwimmzeit durch Pausen, um deine 
      Augen zu schonen. Mit Brille schwimmst du effizienter und länger!
    </p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Passform: Dicht, aber nicht zu eng</h3>
    
    <p className="text-green-700 dark:text-green-300 mb-4">
      Die richtige Passform ist entscheidend. Eine Brille muss dicht abschließen, damit kein Wasser 
      eindringt, aber nicht zu eng, um Druckstellen zu vermeiden.
    </p>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">So findest du die richtige Passform:</h4>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Ohne Gummiband testen:</strong> Lege die Brille auf dein Gesicht (Gummi abnehmen). 
      Sie sollte durch Saugwirkung haften, ohne zu drücken.</li>
      <li><strong>Gummiband anpassen:</strong> Ziehe es sanft an - es sollte bequem sitzen, 
      nicht einschneiden.</li>
      <li><strong>Bewegungstest:</strong> Bewege den Kopf - die Brille sollte nicht verrutschen.</li>
      <li><strong>Wasser-Test:</strong> Im Laden oder zu Hause ins Wasser tauchen - kein Eindringen!</li>
    </ol>

    <div className="bg-amber-50 dark:bg-amber-900/40 p-4 rounded-lg mt-4">
      <p className="text-amber-800 dark:text-amber-200 font-semibold">
        💡 Pro-Tipp: Wenn die Brille nach 10 Sekunden Saugwirkung nicht haftet, ist sie zu groß 
        für dein Gesicht. Probiere ein anderes Modell!
      </p>
    </div>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-6">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Verschiedene Modelle: Schwedenbrille vs. Maskenbrille</h3>
    
    <p className="text-purple-700 dark:text-purple-300 mb-4">
      Es gibt verschiedene Brillentypen. Wähle basierend auf deinem Bedarf.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Schwedenbrille (Low-Profile)</h4>
        <p className="text-purple-700 dark:text-purple-300 text-sm">
          <strong>Vorteile:</strong> Hydrodynamisch (weniger Widerstand), günstig, langlebig.<br/>
          <strong>Nachteile:</strong> Kleiner Sichtbereich, anfangs ungewohnt.<br/>
          <strong>Für:</strong> Wettkämpfer, Fortgeschrittene.
        </p>
      </div>

      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Maskenbrille (Goggle Mask)</h4>
        <p className="text-purple-700 dark:text-purple-300 text-sm">
          <strong>Vorteile:</strong> Großer Sichtbereich, bequem, einfacher Einstieg.<br/>
          <strong>Nachteile:</strong> Mehr Widerstand, teurer.<br/>
          <strong>Für:</strong> Anfänger, Freizeitschwimmer.
        </p>
      </div>
    </div>

    <p className="text-purple-700 dark:text-purple-300 mt-4">
      Für Anfänger: Starte mit einer Maskenbrille. Später kannst du auf Schwedenbrille umsteigen.
    </p>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Anti-Beschlag: Spucke, Spray oder Profi-Produkte</h3>
    
    <p className="text-amber-700 dark:text-amber-300 mb-4">
      Brillen beschlagen durch Feuchtigkeit und Chlor. Hier sind bewährte Methoden:
    </p>

    <ol className="list-decimal list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Spucke-Methode:</strong> Spucke in die Brille, reibe aus, spüle mit frischem Wasser. 
      (Kostenlos und wirkt sofort!)</li>
      <li><strong>Anti-Fog-Spray:</strong> Spezielles Spray für Brillen - hält länger (ca. 1 Woche).</li>
      <li><strong>Shampoo-Trick:</strong> Reibe mit mildem Shampoo ein (nicht ausspülen).</li>
      <li><strong>Profi-Tipp:</strong> Lagere die Brille nicht in der Hülle feucht - immer trocken.</li>
    </ol>

    <div className="bg-red-50 dark:bg-red-900/40 p-4 rounded-lg mt-4">
      <p className="text-red-700 dark:text-red-300 font-semibold">
        ⚠️ Vermeide: Zahnpasta oder Seife - das kann die Beschichtung zerstören!
      </p>
    </div>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Pflege und Haltbarkeit</h3>
    
    <p className="text-green-700 dark:text-green-300 mb-4">
      Eine gute Brille hält 1-2 Jahre. Richte Pflege sorgfältig:
    </p>

    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Nach jedem Gebrauch:</strong> Mit Süßwasser abspülen (Chlor entfernen).</li>
      <li><strong>Trocknen:</strong> Mit einem weichen Tuch abtrocknen, nicht reiben!</li>
      <li><strong>Lagern:</strong> In der Originalhülle, kühl und trocken (nicht in der Sonne).</li>
      <li><strong>Überprüfen:</strong> Regelmäßig auf Risse oder lose Teile prüfen.</li>
      <li><strong>Ersatz:</strong> Kaufe immer eine Ersatzbrille - sie kann kaputtgehen!</li>
    </ul>

    <p className="text-green-700 dark:text-green-300 mt-4">
      <strong>Lebensdauer-Tipp:</strong> Wechsle die Brille, wenn sie nicht mehr dicht hält oder 
      beschlägt. Besser investieren als frustriert trainieren.
    </p>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-8">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Praktische Übungen mit der Brille</h3>
    
    <p className="text-purple-700 dark:text-purple-300 mb-4">
      Teste deine Brille mit diesen Übungen:
    </p>

    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li><strong>Augen öffnen Übung:</strong> Setze die Brille auf, tauche unter und öffne die Augen. 
      Schaue dich um - siehst du klar?</li>
      <li><strong>Dichtheit-Test:</strong> Schwimme 25m - dringt Wasser ein?</li>
      <li><strong>Komfort-Test:</strong> Schwimme 10 Minuten - drückt sie?</li>
      <li><strong>Beschlag-Test:</strong> Nach 5 Minuten Schwimmen - ist sie klar?</li>
    </ol>

    <div className="bg-amber-50 dark:bg-amber-900/40 p-4 rounded-lg mt-4">
      <p className="text-amber-800 dark:text-amber-200 font-semibold">
        💡 Anfänger-Tipp: Kaufe eine günstige Brille zum Testen (ca. 10-15€). Wenn sie passt, 
        investiere in eine Premium-Version.
      </p>
    </div>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Swim Goggles - THE Most Important Equipment!</h2>
  
  <p className="text-lg leading-relaxed">
    If you can only buy one piece of equipment, get good swim goggles. They are the most 
    important gear for every swimmer - beginner or pro. Without goggles, you won't swim long 
    because your eyes burn and you feel uncomfortable.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Why Are Goggles So Important?</h3>
    
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Clarity Underwater:</strong> You see where you're swimming - orientation is crucial!</li>
      <li><strong>Protection from Chlorine:</strong> Chlorine in pool water irritates eyes. Goggles protect against redness and infections.</li>
      <li><strong>Open Eyes Underwater:</strong> Without goggles, you squint. With goggles, you can open them and feel comfortable.</li>
      <li><strong>Better Training:</strong> You can swim longer distances without eye burn.</li>
      <li><strong>Safety:</strong> You see the pool bottom, other swimmers, and lane markers.</li>
    </ul>

    <p className="text-blue-700 dark:text-blue-300 mt-4">
      <strong>Tip:</strong> Without goggles, you lose 50% of your swim time to breaks to soothe 
      your eyes. With goggles, you swim more efficiently and longer!
    </p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Fit: Tight, But Not Too Tight</h3>
    
    <p className="text-green-700 dark:text-green-300 mb-4">
      Proper fit is crucial. Goggles must seal tightly to prevent water entry, but not too tight 
      to avoid pressure marks.
    </p>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">How to Find the Right Fit:</h4>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Test Without Strap:</strong> Place goggles on your face (remove strap). They should stick by suction without pressing.</li>
      <li><strong>Adjust Strap:</strong> Pull gently - it should fit comfortably, not dig in.</li>
      <li><strong>Movement Test:</strong> Move your head - goggles shouldn't slip.</li>
      <li><strong>Water Test:</strong> Submerge in store or at home - no leaks!</li>
    </ol>

    <div className="bg-amber-50 dark:bg-amber-900/40 p-4 rounded-lg mt-4">
      <p className="text-amber-800 dark:text-amber-200 font-semibold">
        💡 Pro-Tip: If goggles don't stick by suction after 10 seconds, they're too big for your face. Try another model!
      </p>
    </div>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-6">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Different Models: Swedish Goggles vs. Mask Goggles</h3>
    
    <p className="text-purple-700 dark:text-purple-300 mb-4">
      There are different goggle types. Choose based on your needs.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Swedish Goggles (Low-Profile)</h4>
        <p className="text-purple-700 dark:text-purple-300 text-sm">
          <strong>Pros:</strong> Hydrodynamic (less drag), affordable, durable.<br/>
          <strong>Cons:</strong> Smaller field of view, initially unusual.<br/>
          <strong>For:</strong> Racers, advanced swimmers.
        </p>
      </div>

      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Mask Goggles</h4>
        <p className="text-purple-700 dark:text-purple-300 text-sm">
          <strong>Pros:</strong> Large field of view, comfortable, easy entry.<br/>
          <strong>Cons:</strong> More drag, expensive.<br/>
          <strong>For:</strong> Beginners, recreational swimmers.
        </p>
      </div>
    </div>

    <p className="text-purple-700 dark:text-purple-300 mt-4">
      For beginners: Start with mask goggles. Later, switch to Swedish style.
    </p>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Anti-Fog: Spit, Spray, or Pro Products</h3>
    
    <p className="text-amber-700 dark:text-amber-300 mb-4">
      Goggles fog from moisture and chlorine. Here are proven methods:
    </p>

    <ol className="list-decimal list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Spit Method:</strong> Spit in goggles, rub, rinse with fresh water. 
      (Free and works immediately!)</li>
      <li><strong>Anti-Fog Spray:</strong> Special spray for goggles - lasts longer (about 1 week).</li>
      <li><strong>Shampoo Trick:</strong> Rub with mild shampoo (don't rinse).</li>
      <li><strong>Pro Tip:</strong> Don't store goggles wet in case - always dry.</li>
    </ol>

    <div className="bg-red-50 dark:bg-red-900/40 p-4 rounded-lg mt-4">
      <p className="text-red-700 dark:text-red-300 font-semibold">
        ⚠️ Avoid: Toothpaste or soap - it can destroy the coating!
      </p>
    </div>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Care and Durability</h3>
    
    <p className="text-green-700 dark:text-green-300 mb-4">
      Good goggles last 1-2 years. Care carefully:
    </p>

    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>After Each Use:</strong> Rinse with fresh water (remove chlorine).</li>
      <li><strong>Dry:</strong> Pat dry with soft cloth, don't rub!</li>
      <li><strong>Store:</strong> In original case, cool and dry (not in sun).</li>
      <li><strong>Check:</strong> Regularly for cracks or loose parts.</li>
      <li><strong>Spare:</strong> Always buy a spare pair - they can break!</li>
    </ul>

    <p className="text-green-700 dark:text-green-300 mt-4">
      <strong>Durability Tip:</strong> Replace goggles if they no longer seal or fog. Better to invest than train frustrated.
    </p>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-8">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Practical Exercises with Goggles</h3>
    
    <p className="text-purple-700 dark:text-purple-300 mb-4">
      Test your goggles with these exercises:
    </p>

    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li><strong>Open Eyes Exercise:</strong> Put on goggles, submerge and open eyes. Look around - clear vision?</li>
      <li><strong>Seal Test:</strong> Swim 25m - does water leak?</li>
      <li><strong>Comfort Test:</strong> Swim 10 minutes - does it press?</li>
      <li><strong>Fog Test:</strong> After 5 minutes swimming - still clear?</li>
    </ol>

    <div className="bg-amber-50 dark:bg-amber-900/40 p-4 rounded-lg mt-4">
      <p className="text-amber-800 dark:text-amber-200 font-semibold">
        💡 Beginner Tip: Buy cheap goggles to test (about 10-15€). If they fit, invest in premium.
      </p>
    </div>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Deine Schwimmbrille finden",
      description: "Finde und teste deine erste Schwimmbrille.",
      checklist: [
        { text: "Gehe in ein Geschäft oder online shoppen für Brillen", checked: false },
        { text: "Teste die Passform: Saugwirkung ohne Gummi", checked: false },
        { text: "Probiere verschiedene Modelle: Maske vs. Schwedenbrille", checked: false },
        { text: "Übe Anti-Beschlag: Spucke-Methode testen", checked: false },
        { text: "Pflegetipps anwenden: Nach Gebrauch abspülen", checked: false }
      ]
    },
    en: {
      title: "Find Your Swim Goggles",
      description: "Find and test your first swim goggles.",
      checklist: [
        { text: "Go shopping in store or online for goggles", checked: false },
        { text: "Test fit: Suction without strap", checked: false },
        { text: "Try different models: Mask vs. Swedish goggles", checked: false },
        { text: "Practice anti-fog: Spit method", checked: false },
        { text: "Apply care tips: Rinse after use", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum ist eine Schwimmbrille das wichtigste Equipment?",
        answer: "Sie schützt die Augen vor Chlor, ermöglicht das Öffnen der Augen unter Wasser, sorgt für Klarheit und Sicherheit, und erlaubt längeres Training ohne Pausen."
      },
      {
        question: "Wie testest du die Passform einer Brille?",
        answer: "Lege sie ohne Gummiband auf das Gesicht - sie sollte durch Saugwirkung haften, ohne zu drücken. Dann Gummi anpassen und im Wasser testen."
      },
      {
        question: "Was ist die beste Anti-Beschlag-Methode für Anfänger?",
        answer: "Die Spucke-Methode: Spucke in die Brille, reibe aus und spüle mit frischem Wasser. Einfach, kostenlos und wirkt sofort."
      },
      {
        question: "Wie pflegst du deine Brille?",
        answer: "Mit Süßwasser abspülen, mit weichem Tuch trocknen, in Hülle lagern. Regelmäßig auf Risse prüfen und bei Bedarf ersetzen."
      }
    ],
    en: [
      {
        question: "Why are swim goggles the most important equipment?",
        answer: "They protect eyes from chlorine, allow opening eyes underwater, provide clarity and safety, and enable longer training without breaks."
      },
      {
        question: "How do you test goggle fit?",
        answer: "Place on face without strap - it should stick by suction without pressing. Then adjust strap and test in water."
      },
      {
        question: "What is the best anti-fog method for beginners?",
        answer: "Spit method: Spit in goggles, rub, rinse with fresh water. Simple, free, and works immediately."
      },
      {
        question: "How do you care for your goggles?",
        answer: "Rinse with fresh water, pat dry with soft cloth, store in case. Check regularly for cracks and replace as needed."
      }
    ]
  }
};
