export const waterSafety = {
  title: {
    de: "Wassersicherheit & Selbstrettung",
    en: "Water Safety & Self-Rescue"
  },
  description: {
    de: "Die wichtigste Lektion: Lerne, wie du sicher im Wasser bist und dich selbst retten kannst.",
    en: "The most important lesson: Learn how to be safe in the water and rescue yourself."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-red-800 dark:text-red-200 mb-4">Wassersicherheit & Selbstrettung</h2>
  
  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">⚠️ DIE WICHTIGSTE REGEL</h3>
    <p className="text-red-700 dark:text-red-300 text-lg font-semibold">
      NIEMALS ALLEINE SCHWIMMEN GEHEN!
    </p>
    <p className="text-red-700 dark:text-red-300 mt-2">
      Selbst die besten Schwimmer können in Not geraten. Immer mit einem Partner oder in einer 
      Gruppe schwimmen. Das Buddy-System kann Leben retten.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Das Buddy-System</h3>
  
  <p className="leading-relaxed">
    Das Buddy-System bedeutet, dass du immer mit mindestens einer anderen Person schwimmst, 
    die dich beobachtet und im Notfall helfen kann. Dein Buddy sollte:
  </p>

  <ul className="list-disc list-inside space-y-2 mt-4">
    <li>Immer in Sichtweite sein</li>
    <li>Deine Fähigkeiten kennen</li>
    <li>Im Notfall Hilfe holen können</li>
    <li>Selbst ein sicherer Schwimmer sein</li>
  </ul>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Ertrinkungsprävention: Warnsignale erkennen</h3>
    
    <p className="text-amber-700 dark:text-amber-300 mb-4">
      Ertrinken sieht nicht aus wie in Filmen - es ist oft still und unauffällig. Lerne die 
      Warnsignale zu erkennen:
    </p>

    <h4 className="font-semibold text-amber-800 dark:text-amber-200 mt-4 mb-2">Warnsignale einer Person in Not:</h4>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Kopf tief im Wasser:</strong> Mund auf Wasserhöhe</li>
      <li><strong>Kopf nach hinten geneigt:</strong> Versucht, den Mund über Wasser zu halten</li>
      <li><strong>Glasiger Blick:</strong> Leere, fokussierte Augen</li>
      <li><strong>Keine Hilferufe:</strong> Kann nicht mehr sprechen oder rufen</li>
      <li><strong>Vertikale Position:</strong> Treibt vertikal im Wasser, keine horizontale Schwimmlage</li>
      <li><strong>Arme seitlich:</strong> Versucht, sich über Wasser zu halten, keine Schwimmbewegungen</li>
      <li><strong>Hyperventilation:</strong> Schnelles, panisches Atmen</li>
      <li><strong>Keine Reaktion:</strong> Reagiert nicht auf Ansprache</li>
    </ul>

    <p className="text-amber-700 dark:text-amber-300 mt-4 font-semibold">
      Wenn du diese Signale siehst: SOFORT Hilfe holen! Rufe laut um Hilfe und alarmiere 
      Rettungsschwimmer oder den Notruf.
    </p>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Selbstrettungstechniken</h3>
    
    <p className="text-blue-700 dark:text-blue-300 mb-4">
      Wenn du in eine schwierige Situation gerätst, gibt es Techniken, die dir helfen können, 
      bis Hilfe kommt:
    </p>

    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mt-4 mb-2">1. Rückenlage (Back Float)</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Die Rückenlage ist eine der wichtigsten Selbstrettungstechniken. Sie erlaubt dir, 
      zu atmen und Energie zu sparen:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300 mb-4">
      <li>Lege dich auf den Rücken</li>
      <li>Kopf leicht nach hinten, Ohren im Wasser</li>
      <li>Arme seitlich ausbreiten für Balance</li>
      <li>Ruhig atmen, nicht panisch werden</li>
      <li>Leichte Beinbewegungen, um an der Oberfläche zu bleiben</li>
    </ul>

    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mt-4 mb-2">2. Toter Mann (Dead Man's Float)</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Eine Technik, um Energie zu sparen und zu atmen:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300 mb-4">
      <li>Bauchlage im Wasser</li>
      <li>Gesicht im Wasser, Kopf leicht angehoben zum Atmen</li>
      <li>Arme und Beine entspannt</li>
      <li>Regelmäßig den Kopf heben zum Einatmen</li>
      <li>Sehr energieeffizient</li>
    </ul>

    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mt-4 mb-2">3. Wassertreten (Treading Water)</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Wassertreten hilft dir, an einer Stelle zu bleiben und den Kopf über Wasser zu halten:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Vertikale Position im Wasser</li>
      <li>Arme und Beine machen kreisförmige Bewegungen</li>
      <li>Ruhig und kontrolliert atmen</li>
      <li>Kann lange durchgehalten werden mit Übung</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Erste Hilfe am Beckenrand</h3>
    
    <p className="text-green-700 dark:text-green-300 mb-4">
      Wenn jemand in Not ist, ist es wichtig, richtig zu handeln:
    </p>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">1. Hilfe holen</h4>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300 mb-4">
      <li>Rufe laut um Hilfe</li>
      <li>Alarmiere Rettungsschwimmer oder den Notruf (112 in Deutschland/Europa, 911 in USA)</li>
      <li>Gib klare Informationen: Wo ist die Person? Was ist passiert?</li>
    </ul>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">2. Nicht selbst ins Wasser springen</h4>
    <p className="text-green-700 dark:text-green-300 mb-3">
      Wenn du nicht ausgebildeter Rettungsschwimmer bist, springe nicht selbst ins Wasser. 
      Du könntest selbst in Gefahr geraten. Nutze stattdessen:
    </p>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300 mb-4">
      <li>Rettungsring oder Rettungsboje</li>
      <li>Schwimmnudel oder Poolnudel</li>
      <li>Langes Seil oder Handtuch</li>
      <li>Warte auf professionelle Hilfe</li>
    </ul>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">3. Nach der Rettung</h4>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Person an Land bringen</li>
      <li>Bewusstsein prüfen</li>
      <li>Bei Bewusstlosigkeit: Stabile Seitenlage</li>
      <li>Bei Atemstillstand: Herz-Lungen-Wiederbelebung (wenn ausgebildet)</li>
      <li>Wärme zuführen (Decke, Handtuch)</li>
      <li>Bis zum Eintreffen des Rettungsdienstes betreuen</li>
    </ul>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-8">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Wichtige Sicherheitsregeln</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li>Nie alleine schwimmen gehen</li>
      <li>Nur in bewachten Gewässern schwimmen</li>
      <li>Kenne deine Grenzen - überschätze dich nicht</li>
      <li>Bei Müdigkeit oder Unwohlsein sofort aussteigen</li>
      <li>Kein Alkohol oder Drogen vor oder während des Schwimmens</li>
      <li>Respektiere Warnschilder und Absperrungen</li>
      <li>Kinder immer beaufsichtigen</li>
      <li>Bei Gewitter sofort das Wasser verlassen</li>
    </ul>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-red-800 dark:text-red-200 mb-4">Water Safety & Self-Rescue</h2>
  
  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">⚠️ THE MOST IMPORTANT RULE</h3>
    <p className="text-red-700 dark:text-red-300 text-lg font-semibold">
      NEVER SWIM ALONE!
    </p>
    <p className="text-red-700 dark:text-red-300 mt-2">
      Even the best swimmers can get into trouble. Always swim with a partner or in a group. 
      The buddy system can save lives.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">The Buddy System</h3>
  
  <p className="leading-relaxed">
    The buddy system means you always swim with at least one other person who watches you and 
    can help in an emergency. Your buddy should:
  </p>

  <ul className="list-disc list-inside space-y-2 mt-4">
    <li>Always be within sight</li>
    <li>Know your abilities</li>
    <li>Be able to get help in an emergency</li>
    <li>Be a safe swimmer themselves</li>
  </ul>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Drowning Prevention: Recognizing Warning Signs</h3>
    
    <p className="text-amber-700 dark:text-amber-300 mb-4">
      Drowning doesn't look like in movies - it's often quiet and inconspicuous. Learn to recognize 
      the warning signs:
    </p>

    <h4 className="font-semibold text-amber-800 dark:text-amber-200 mt-4 mb-2">Warning signs of a person in distress:</h4>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Head low in water:</strong> Mouth at water level</li>
      <li><strong>Head tilted back:</strong> Trying to keep mouth above water</li>
      <li><strong>Glass-like eyes:</strong> Empty, focused eyes</li>
      <li><strong>No calls for help:</strong> Can no longer speak or call</li>
      <li><strong>Vertical position:</strong> Floating vertically in water, no horizontal swimming position</li>
      <li><strong>Arms to the side:</strong> Trying to stay above water, no swimming movements</li>
      <li><strong>Hyperventilation:</strong> Fast, panicked breathing</li>
      <li><strong>No response:</strong> Doesn't respond to calls</li>
    </ul>

    <p className="text-amber-700 dark:text-amber-300 mt-4 font-semibold">
      If you see these signs: GET HELP IMMEDIATELY! Call loudly for help and alert lifeguards 
      or emergency services.
    </p>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Self-Rescue Techniques</h3>
    
    <p className="text-blue-700 dark:text-blue-300 mb-4">
      If you get into a difficult situation, there are techniques that can help you until help arrives:
    </p>

    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mt-4 mb-2">1. Back Float</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      The back float is one of the most important self-rescue techniques. It allows you to 
      breathe and save energy:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300 mb-4">
      <li>Lie on your back</li>
      <li>Head slightly back, ears in water</li>
      <li>Arms spread to the side for balance</li>
      <li>Breathe calmly, don't panic</li>
      <li>Light leg movements to stay at surface</li>
    </ul>

    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mt-4 mb-2">2. Dead Man's Float</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      A technique to save energy and breathe:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300 mb-4">
      <li>Prone position in water</li>
      <li>Face in water, head slightly raised to breathe</li>
      <li>Arms and legs relaxed</li>
      <li>Regularly raise head to inhale</li>
      <li>Very energy efficient</li>
    </ul>

    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mt-4 mb-2">3. Treading Water</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Treading water helps you stay in one place and keep your head above water:
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Vertical position in water</li>
      <li>Arms and legs make circular movements</li>
      <li>Breathe calmly and controlled</li>
      <li>Can be maintained for a long time with practice</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">First Aid at Poolside</h3>
    
    <p className="text-green-700 dark:text-green-300 mb-4">
      If someone is in distress, it's important to act correctly:
    </p>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">1. Get help</h4>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300 mb-4">
      <li>Call loudly for help</li>
      <li>Alert lifeguards or emergency services (112 in Germany/Europe, 911 in USA)</li>
      <li>Give clear information: Where is the person? What happened?</li>
    </ul>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">2. Don't jump in yourself</h4>
    <p className="text-green-700 dark:text-green-300 mb-3">
      If you're not a trained lifeguard, don't jump in yourself. You could get into danger too. 
      Instead use:
    </p>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300 mb-4">
      <li>Rescue ring or rescue buoy</li>
      <li>Pool noodle</li>
      <li>Long rope or towel</li>
      <li>Wait for professional help</li>
    </ul>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">3. After rescue</h4>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Bring person to shore</li>
      <li>Check consciousness</li>
      <li>If unconscious: Recovery position</li>
      <li>If breathing stopped: CPR (if trained)</li>
      <li>Provide warmth (blanket, towel)</li>
      <li>Care for until emergency services arrive</li>
    </ul>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-8">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Important Safety Rules</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li>Never swim alone</li>
      <li>Only swim in supervised waters</li>
      <li>Know your limits - don't overestimate yourself</li>
      <li>Exit immediately if tired or unwell</li>
      <li>No alcohol or drugs before or during swimming</li>
      <li>Respect warning signs and barriers</li>
      <li>Always supervise children</li>
      <li>Leave water immediately in thunderstorms</li>
    </ul>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Sicherheit üben",
      description: "Übe die wichtigsten Selbstrettungstechniken im flachen Wasser.",
      checklist: [
        { text: "Übe die Rückenlage: Lege dich auf den Rücken und bleibe 30 Sekunden ruhig", checked: false },
        { text: "Übe den Toten Mann: Bauchlage mit regelmäßigem Atmen", checked: false },
        { text: "Übe Wassertreten: Bleibe 30 Sekunden vertikal im Wasser", checked: false },
        { text: "Finde einen Schwimm-Buddy für deine nächsten Schwimmsessions", checked: false }
      ]
    },
    en: {
      title: "Practice Safety",
      description: "Practice the most important self-rescue techniques in shallow water.",
      checklist: [
        { text: "Practice back float: Lie on your back and stay calm for 30 seconds", checked: false },
        { text: "Practice dead man's float: Prone position with regular breathing", checked: false },
        { text: "Practice treading water: Stay vertical in water for 30 seconds", checked: false },
        { text: "Find a swim buddy for your next swim sessions", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum ist das Buddy-System so wichtig?",
        answer: "Das Buddy-System stellt sicher, dass immer jemand da ist, der dich beobachtet und im Notfall Hilfe holen kann. Selbst die besten Schwimmer können in Not geraten."
      },
      {
        question: "Wie sehen Warnsignale einer Person in Not aus?",
        answer: "Kopf tief im Wasser, glasiger Blick, keine Hilferufe, vertikale Position, Arme seitlich, Hyperventilation. Ertrinken ist oft still und unauffällig."
      },
      {
        question: "Was sind die wichtigsten Selbstrettungstechniken?",
        answer: "Rückenlage (Back Float), Toter Mann (Dead Man's Float) und Wassertreten (Treading Water). Diese Techniken helfen, Energie zu sparen und zu atmen, bis Hilfe kommt."
      }
    ],
    en: [
      {
        question: "Why is the buddy system so important?",
        answer: "The buddy system ensures there's always someone watching you and can get help in an emergency. Even the best swimmers can get into trouble."
      },
      {
        question: "What do warning signs of a person in distress look like?",
        answer: "Head low in water, glass-like eyes, no calls for help, vertical position, arms to the side, hyperventilation. Drowning is often quiet and inconspicuous."
      },
      {
        question: "What are the most important self-rescue techniques?",
        answer: "Back float, dead man's float, and treading water. These techniques help save energy and breathe until help arrives."
      }
    ]
  }
};

