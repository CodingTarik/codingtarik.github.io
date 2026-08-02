export const swimCap = {
  title: {
    de: "Badekappe - Schutz und Hydrodynamik",
    en: "Swim Cap - Protection and Hydrodynamics"
  },
  description: {
    de: "Erfahre, warum eine Badekappe wichtig ist und welche Art für dich passt.",
    en: "Learn why a swim cap is important and which type suits you."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Badekappe - Schutz und Hydrodynamik</h2>
  
  <p className="text-lg leading-relaxed">
    Eine Badekappe ist mehr als nur Mode - sie schützt deine Haare, verbessert die Hydrodynamik 
    und hält die Hygiene. Viele Schwimmbäder verlangen sie sogar!
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Warum Kappe? Die Vorteile</h3>
    
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Chlor-Schutz:</strong> Chlor trocknet Haare aus. Eine Kappe schützt vor Schaden und Verfärbung.</li>
      <li><strong>Hydrodynamik:</strong> Glatte Kappe reduziert Wasserwiderstand - du schwimmst schneller!</li>
      <li><strong>Hygiene:</strong> Weniger Haare im Wasser, sauberer Pool für alle.</li>
      <li><strong>Brillen-Halter:</strong> Hält die Brille an Ort und Stelle.</li>
      <li><strong>Langlebigkeit:</strong> Lange Haare bleiben besser kontrolliert.</li>
    </ul>

    <p className="text-blue-700 dark:text-blue-300 mt-4">
      <strong>Fakt:</strong> In Wettkämpfen ist Kappe Pflicht. Für Anfänger: Sie macht Training angenehmer.
    </p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Materialien: Silikon vs. Latex vs. Stoff</h3>
    
    <p className="text-green-700 dark:text-green-300 mb-4">
      Wähle das Material passend zu deinem Bedarf.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Silikon</h4>
        <p className="text-green-700 dark:text-green-300 text-sm">
          <strong>Pros:</strong> Bequem, langlebig, leicht auf/zuziehen.<br/>
          <strong>Cons:</strong> Teurer, weniger Grip.<br/>
          <strong>Für:</strong> Anfänger, langes Haar.
        </p>
      </div>

      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Latex</h4>
        <p className="text-green-700 dark:text-green-300 text-sm">
          <strong>Pros:</strong> Günstig, hydrodynamisch, guter Grip.<br/>
          <strong>Cons:</strong> Kann reißen, Allergien möglich.<br/>
          <strong>Für:</strong> Wettkämpfer, Budget.
        </p>
      </div>

      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Stoff (Cloth)</h4>
        <p className="text-green-700 dark:text-green-300 text-sm">
          <strong>Pros:</strong> Atmungsaktiv, bequem für langes Haar.<br/>
          <strong>Cons:</strong> Mehr Widerstand, saugt Wasser.<br/>
          <strong>Für:</strong> Freizeit, langes Haar.
        </p>
      </div>
    </div>

    <p className="text-green-700 dark:text-green-300 mt-4">
      Anfänger-Empfehlung: Silikon - bequem und langlebig.
    </p>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-6">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Richtig aufsetzen: Haare komplett drin</h3>
    
    <p className="text-purple-700 dark:text-purple-300 mb-4">
      Falsches Aufsetzen führt zu Rutschen. So machst du es richtig:
    </p>

    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li><strong>Haare kämmen:</strong> Glatt kämmen, Knoten lösen.</li>
      <li><strong>Kappe greifen:</strong> Von vorne fassen, hinten dehnen.</li>
      <li><strong>Vorne aufsetzen:</strong> Stirn bedecken, Ohren einziehen.</li>
      <li><strong>Hinten ziehen:</strong> Über den Hinterkopf, Nacken bedecken.</li>
      <li><strong>Glätten:</strong> Mit Händen glätten, keine Falten.</li>
      <li><strong>Brille drauf:</strong> Brille über Kappe setzen.</li>
    </ol>

    <div className="bg-amber-50 dark:bg-amber-900/40 p-4 rounded-lg mt-4">
      <p className="text-amber-800 dark:text-amber-200 font-semibold">
        💡 Trick für langes Haar: Rolle es zu einem Dutt, dann Kappe aufsetzen.
      </p>
    </div>

    <p className="text-purple-700 dark:text-purple-300 mt-4">
      Übe das Aufsetzen zu Hause - es wird mit der Zeit leichter!
    </p>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Pflege und Probleme lösen</h3>
    
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Pflege:</strong> Mit Süßwasser abspülen, trocken lagern. Keine scharfen Kanten.</li>
      <li><strong>Reißen:</strong> Bei Latex: Vorsichtig dehnen. Silikon ist robuster.</li>
      <li><strong>Rutschen:</strong> Größere Kappe wählen oder Haare besser fixieren.</li>
      <li><strong>Allergie:</strong> Bei Latex-Reizung: Zu Silikon wechseln.</li>
    </ul>

    <div className="bg-red-50 dark:bg-red-900/40 p-4 rounded-lg mt-4">
      <p className="text-red-700 dark:text-red-300 font-semibold">
        ⚠️ In manchen Bädern Pflicht: Überprüfe die Regeln!
      </p>
    </div>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Praktische Übungen</h3>
    
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Aufsetzen üben:</strong> 5x richtig aufsetzen, mit Brille kombinieren.</li>
      <li><strong>Schwimmtest:</strong> 25m schwimmen - rutscht sie?</li>
      <li><strong>Haar-Test:</strong> Mit nassem Haar aufsetzen - passt sie?</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Swim Cap - Protection and Hydrodynamics</h2>
  
  <p className="text-lg leading-relaxed">
    A swim cap is more than fashion - it protects hair, improves hydrodynamics, and maintains hygiene. 
    Many pools even require them!
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Why Cap? The Benefits</h3>
    
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Chlorine Protection:</strong> Chlor dries hair. Cap protects from damage and discoloration.</li>
      <li><strong>Hydrodynamics:</strong> Smooth cap reduces water resistance - you swim faster!</li>
      <li><strong>Hygiene:</strong> Less hair in water, cleaner pool for all.</li>
      <li><strong>Goggle Holder:</strong> Keeps goggles in place.</li>
      <li><strong>Control:</strong> Long hair stays better managed.</li>
    </ul>

    <p className="text-blue-700 dark:text-blue-300 mt-4">
      <strong>Fact:</strong> Caps are mandatory in competitions. For beginners: Makes training more pleasant.
    </p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Materials: Silicone vs. Latex vs. Cloth</h3>
    
    <p className="text-green-700 dark:text-green-300 mb-4">
      Choose material based on your needs.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Silicone</h4>
        <p className="text-green-700 dark:text-green-300 text-sm">
          <strong>Pros:</strong> Comfortable, durable, easy on/off.<br/>
          <strong>Cons:</strong> Expensive, less grip.<br/>
          <strong>For:</strong> Beginners, long hair.
        </p>
      </div>

      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Latex</h4>
        <p className="text-green-700 dark:text-green-300 text-sm">
          <strong>Pros:</strong> Cheap, hydrodynamic, good grip.<br/>
          <strong>Cons:</strong> Can tear, allergies possible.<br/>
          <strong>For:</strong> Racers, budget.
        </p>
      </div>

      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Cloth</h4>
        <p className="text-green-700 dark:text-green-300 text-sm">
          <strong>Pros:</strong> Breathable, comfortable for long hair.<br/>
          <strong>Cons:</strong> More drag, absorbs water.<br/>
          <strong>For:</strong> Recreation, long hair.
        </p>
      </div>
    </div>

    <p className="text-green-700 dark:text-green-300 mt-4">
      Beginner recommendation: Silicone - comfortable and durable.
    </p>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-6">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Proper Fitting: All Hair Inside</h3>
    
    <p className="text-purple-700 dark:text-purple-300 mb-4">
      Wrong fitting causes slipping. Do it right:
    </p>

    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li><strong>Comb Hair:</strong> Smooth, untangle knots.</li>
      <li><strong>Grab Cap:</strong> Hold front, stretch back.</li>
      <li><strong>Front On:</strong> Cover forehead, tuck ears.</li>
      <li><strong>Pull Back:</strong> Over crown, cover nape.</li>
      <li><strong>Smooth:</strong> With hands, no wrinkles.</li>
      <li><strong>Goggles On:</strong> Over cap.</li>
    </ol>

    <div className="bg-amber-50 dark:bg-amber-900/40 p-4 rounded-lg mt-4">
      <p className="text-amber-800 dark:text-amber-200 font-semibold">
        💡 Trick for long hair: Bun it up, then cap on.
      </p>
    </div>

    <p className="text-purple-700 dark:text-purple-300 mt-4">
      Practice putting on at home - gets easier!
    </p>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Care and Problem Solving</h3>
    
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Care:</strong> Rinse with fresh water, dry storage. No sharp edges.</li>
      <li><strong>Tearing:</strong> For latex: Stretch carefully. Silicone is tougher.</li>
      <li><strong>Slipping:</strong> Larger cap or better hair fix.</li>
      <li><strong>Allergy:</strong> If latex irritates: Switch to silicone.</li>
    </ul>

    <div className="bg-red-50 dark:bg-red-900/40 p-4 rounded-lg mt-4">
      <p className="text-red-700 dark:text-red-300 font-semibold">
        ⚠️ Required in some pools: Check rules!
      </p>
    </div>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Practical Exercises</h3>
    
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Putting On Practice:</strong> 5x correctly, with goggles.</li>
      <li><strong>Swim Test:</strong> 25m - does it slip?</li>
      <li><strong>Hair Test:</strong> With wet hair - fits?</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Deine Badekappe auswählen",
      description: "Finde die passende Kappe für dein Training.",
      checklist: [
        { text: "Vergleiche Materialien: Silikon, Latex, Stoff", checked: false },
        { text: "Übe das Aufsetzen: Haare komplett drin", checked: false },
        { text: "Teste im Wasser: Rutscht sie?", checked: false },
        { text: "Pflege anwenden: Nach Gebrauch abspülen", checked: false }
      ]
    },
    en: {
      title: "Select Your Swim Cap",
      description: "Find the right cap for your training.",
      checklist: [
        { text: "Compare materials: Silicone, latex, cloth", checked: false },
        { text: "Practice putting on: All hair inside", checked: false },
        { text: "Test in water: Does it slip?", checked: false },
        { text: "Apply care: Rinse after use", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was sind die Hauptvorteile einer Badekappe?",
        answer: "Chlor-Schutz für Haare, bessere Hydrodynamik (weniger Widerstand), Hygiene und Brillen-Halter."
      },
      {
        question: "Welches Material ist für Anfänger am besten?",
        answer: "Silikon - bequem, langlebig und leicht auf/zuziehen, ideal für langes Haar."
      },
      {
        question: "Wie setzt du eine Kappe richtig auf?",
        answer: "Haare kämmen, vorne aufsetzen (Stirn bedecken), Ohren einziehen, hinten ziehen und glätten."
      },
      {
        question: "Was tust du, wenn die Kappe rutscht?",
        answer: "Größere Kappe wählen, Haare besser fixieren oder Material wechseln (z.B. von Stoff zu Silikon)."
      }
    ],
    en: [
      {
        question: "What are the main benefits of a swim cap?",
        answer: "Chlorine protection for hair, better hydrodynamics (less resistance), hygiene, and goggle holder."
      },
      {
        question: "Which material is best for beginners?",
        answer: "Silicone - comfortable, durable, easy on/off, ideal for long hair."
      },
      {
        question: "How do you put on a cap correctly?",
        answer: "Comb hair, place front (cover forehead), tuck ears, pull back and smooth."
      },
      {
        question: "What if the cap slips?",
        answer: "Choose larger size, fix hair better, or change material (e.g. from cloth to silicone)."
      }
    ]
  }
};

