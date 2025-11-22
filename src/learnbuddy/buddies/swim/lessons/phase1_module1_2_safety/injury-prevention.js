export const injuryPrevention = {
  title: {
    de: "Verletzungsprävention - Basics",
    en: "Injury Prevention - Basics"
  },
  description: {
    de: "Lerne, wie du Verletzungen beim Schwimmen vermeidest und auf deinen Körper hörst.",
    en: "Learn how to prevent injuries while swimming and listen to your body."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Verletzungsprävention - Basics</h2>
  
  <p className="text-lg leading-relaxed">
    Schwimmen ist eine gelenkschonende Sportart, aber auch hier können Verletzungen auftreten, 
    wenn du nicht auf deinen Körper hörst oder falsche Technik verwendest. Lerne, wie du 
    Verletzungen vermeidest und gesund bleibst.
  </p>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Warum Aufwärmen essentiell ist</h3>
    
    <p className="text-green-700 dark:text-green-300 mb-4">
      Auch im Wasser solltest du dich aufwärmen! Viele Menschen denken, dass das Wasser warm 
      genug ist, aber Aufwärmen ist mehr als nur die Körpertemperatur zu erhöhen.
    </p>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">Was passiert beim Aufwärmen?</h4>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300 mb-4">
      <li><strong>Durchblutung steigt:</strong> Muskeln werden besser durchblutet und erhalten 
      mehr Sauerstoff</li>
      <li><strong>Gelenke werden mobilisiert:</strong> Gelenkflüssigkeit wird produziert, 
      Bewegungen werden geschmeidiger</li>
      <li><strong>Herz-Kreislauf-System aktiviert:</strong> Dein Körper bereitet sich auf 
      die Belastung vor</li>
      <li><strong>Mentale Vorbereitung:</strong> Du konzentrierst dich auf das Training</li>
    </ul>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">Wie wärmst du dich auf?</h4>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>200m locker schwimmen:</strong> Beginne langsam und steigere das Tempo</li>
      <li><strong>Leichte Dehnübungen:</strong> Schultern, Arme, Beine dehnen</li>
      <li><strong>Technik-Übungen:</strong> Einfache Bewegungen ohne Kraftaufwand</li>
      <li><strong>5-10 Minuten:</strong> Das Aufwärmen sollte 5-10 Minuten dauern</li>
    </ul>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-6">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Typische Schwimm-Verletzungen</h3>
    
    <h4 className="font-semibold text-red-800 dark:text-red-200 mt-4 mb-2">1. Schulter-Verletzungen</h4>
    <p className="text-red-700 dark:text-red-300 mb-3">
      Die Schulter ist die am häufigsten verletzte Stelle beim Schwimmen. Das liegt daran, 
      dass die Schulter sehr beweglich ist und bei vielen Schwimmstilen stark belastet wird.
    </p>
    <p className="text-red-700 dark:text-red-300 mb-3">
      <strong>Ursachen:</strong> Falsche Technik (z.B. Ellbogen zu tief), Überlastung, 
      mangelnde Aufwärmung, schwache Rückenmuskulatur
    </p>
    <p className="text-red-700 dark:text-red-300">
      <strong>Vorbeugung:</strong> Richtige Technik lernen, Ellbogen hoch halten, 
      Antagonisten trainieren (Rückenmuskulatur), Aufwärmen
    </p>

    <h4 className="font-semibold text-red-800 dark:text-red-200 mt-4 mb-2">2. Rücken-Verletzungen</h4>
    <p className="text-red-700 dark:text-red-300 mb-3">
      Besonders beim Brustschwimmen kann der Rücken belastet werden, wenn der Kopf zu hoch 
      gehalten wird.
    </p>
    <p className="text-red-700 dark:text-red-300 mb-3">
      <strong>Ursachen:</strong> Kopf zu hoch beim Brustschwimmen, fehlende Core-Stabilität, 
      falsche Körperposition
    </p>
    <p className="text-red-700 dark:text-blue-300">
      <strong>Vorbeugung:</strong> Kopfposition korrigieren, Core-Training, richtige 
      Körperposition lernen
    </p>

    <h4 className="font-semibold text-red-800 dark:text-red-200 mt-4 mb-2">3. Knie-Verletzungen</h4>
    <p className="text-red-700 dark:text-red-300 mb-3">
      Besonders beim Brustschwimmen können die Knie belastet werden durch die Beinbewegung.
    </p>
    <p className="text-red-700 dark:text-red-300 mb-3">
      <strong>Ursachen:</strong> Zu weite Beinbewegung beim Brustschwimmen, falsche 
      Technik, Vorbelastung
    </p>
    <p className="text-red-700 dark:text-red-300">
      <strong>Vorbeugung:</strong> Technik korrigieren, Beinbewegung nicht zu weit, 
      bei Vorbelastung andere Stile bevorzugen
    </p>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Red Flags: Schmerz vs. Muskelkater</h3>
    
    <p className="text-amber-700 dark:text-amber-300 mb-4">
      Es ist wichtig zu unterscheiden zwischen normalem Muskelkater und Schmerz, der auf eine 
      Verletzung hinweist:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Muskelkater (OK)</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-amber-700 dark:text-amber-300">
          <li>Beginnt 24-48 Stunden nach dem Training</li>
          <li>Diffuser Schmerz in den Muskeln</li>
          <li>Wird besser mit Bewegung</li>
          <li>Verschwindet nach 2-3 Tagen</li>
          <li>Normale Beweglichkeit</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Verletzung (⚠️)</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-amber-700 dark:text-amber-300">
          <li>Schmerz während oder direkt nach dem Training</li>
          <li>Scharfer, stechender Schmerz</li>
          <li>Wird schlimmer mit Bewegung</li>
          <li>Hält länger als 3 Tage an</li>
          <li>Eingeschränkte Beweglichkeit</li>
        </ul>
      </div>
    </div>

    <p className="text-amber-700 dark:text-amber-300 mt-4 font-semibold">
      Bei Schmerz (nicht Muskelkater): SOFORT PAUSIEREN und einen Arzt aufsuchen!
    </p>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-6">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Bei Schmerz: PAUSE (nicht "durchtrainieren"!)</h3>
    
    <p className="text-red-700 dark:text-red-300 mb-4">
      Der größte Fehler, den du machen kannst, ist, trotz Schmerz weiter zu trainieren. 
      "No pain, no gain" ist hier völlig falsch!
    </p>

    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li><strong>Schmerz ist ein Warnsignal:</strong> Dein Körper sagt dir, dass etwas 
      nicht stimmt</li>
      <li><strong>Durchtrainieren verschlimmert:</strong> Eine kleine Verletzung kann zu einer 
      großen werden</li>
      <li><strong>Längere Pause nötig:</strong> Eine verschleppte Verletzung braucht viel 
      länger zum Heilen</li>
      <li><strong>Arzt aufsuchen:</strong> Bei anhaltendem Schmerz immer einen Arzt konsultieren</li>
    </ul>

    <p className="text-red-700 dark:text-red-300 mt-4 font-semibold">
      Regel: Wenn es weh tut, hör auf! Besser eine Woche Pause als Monate lang verletzt sein.
    </p>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Ohrinfektionen vermeiden</h3>
    
    <p className="text-blue-700 dark:text-blue-300 mb-4">
      Ohrinfektionen sind eine häufige Nebenwirkung des Schwimmens, besonders wenn Wasser 
      im Ohr bleibt.
    </p>

    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mt-4 mb-2">Vorbeugung:</h4>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Ohren nach dem Schwimmen trocknen:</strong> Kopf zur Seite neigen und 
      leicht schütteln</li>
      <li><strong>Ohrenstöpsel verwenden:</strong> Besonders bei empfindlichen Ohren</li>
      <li><strong>Nicht mit Wattestäbchen reinigen:</strong> Das kann das Ohr verletzen</li>
      <li><strong>Bei wiederkehrenden Infektionen:</strong> Arzt aufsuchen, möglicherweise 
      spezielle Ohrentropfen</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Zusammenfassung: Gesund schwimmen</h3>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Immer aufwärmen (5-10 Minuten)</li>
      <li>Richtige Technik lernen und anwenden</li>
      <li>Auf deinen Körper hören</li>
      <li>Bei Schmerz: PAUSE, nicht durchtrainieren</li>
      <li>Ohren nach dem Schwimmen trocknen</li>
      <li>Bei anhaltenden Problemen: Arzt aufsuchen</li>
    </ul>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Injury Prevention - Basics</h2>
  
  <p className="text-lg leading-relaxed">
    Swimming is a joint-friendly sport, but injuries can still occur if you don't listen to 
    your body or use incorrect technique. Learn how to prevent injuries and stay healthy.
  </p>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Why Warming Up is Essential</h3>
    
    <p className="text-green-700 dark:text-green-300 mb-4">
      Even in the water, you should warm up! Many people think the water is warm enough, but 
      warming up is more than just raising body temperature.
    </p>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">What happens during warm-up?</h4>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300 mb-4">
      <li><strong>Blood circulation increases:</strong> Muscles are better supplied with blood 
      and receive more oxygen</li>
      <li><strong>Joints are mobilized:</strong> Joint fluid is produced, movements become smoother</li>
      <li><strong>Cardiovascular system activated:</strong> Your body prepares for the load</li>
      <li><strong>Mental preparation:</strong> You focus on training</li>
    </ul>

    <h4 className="font-semibold text-green-800 dark:text-green-200 mt-4 mb-2">How do you warm up?</h4>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>200m easy swimming:</strong> Start slowly and increase pace</li>
      <li><strong>Light stretching:</strong> Stretch shoulders, arms, legs</li>
      <li><strong>Technique exercises:</strong> Simple movements without effort</li>
      <li><strong>5-10 minutes:</strong> Warm-up should last 5-10 minutes</li>
    </ul>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-6">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Typical Swimming Injuries</h3>
    
    <h4 className="font-semibold text-red-800 dark:text-red-200 mt-4 mb-2">1. Shoulder Injuries</h4>
    <p className="text-red-700 dark:text-red-300 mb-3">
      The shoulder is the most commonly injured area in swimming. This is because the shoulder 
      is very mobile and heavily stressed in many swimming styles.
    </p>
    <p className="text-red-700 dark:text-red-300 mb-3">
      <strong>Causes:</strong> Incorrect technique (e.g., elbow too low), overuse, lack of 
      warm-up, weak back muscles
    </p>
    <p className="text-red-700 dark:text-red-300">
      <strong>Prevention:</strong> Learn proper technique, keep elbow high, train antagonists 
      (back muscles), warm up
    </p>

    <h4 className="font-semibold text-red-800 dark:text-red-200 mt-4 mb-2">2. Back Injuries</h4>
    <p className="text-red-700 dark:text-red-300 mb-3">
      Especially in breaststroke, the back can be stressed if the head is held too high.
    </p>
    <p className="text-red-700 dark:text-red-300 mb-3">
      <strong>Causes:</strong> Head too high in breaststroke, lack of core stability, 
      incorrect body position
    </p>
    <p className="text-red-700 dark:text-red-300">
      <strong>Prevention:</strong> Correct head position, core training, learn proper 
      body position
    </p>

    <h4 className="font-semibold text-red-800 dark:text-red-200 mt-4 mb-2">3. Knee Injuries</h4>
    <p className="text-red-700 dark:text-red-300 mb-3">
      Especially in breaststroke, knees can be stressed by the leg movement.
    </p>
    <p className="text-red-700 dark:text-red-300 mb-3">
      <strong>Causes:</strong> Leg movement too wide in breaststroke, incorrect technique, 
      pre-existing conditions
    </p>
    <p className="text-red-700 dark:text-red-300">
      <strong>Prevention:</strong> Correct technique, don't make leg movement too wide, 
      prefer other styles if pre-existing conditions
    </p>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Red Flags: Pain vs. Muscle Soreness</h3>
    
    <p className="text-amber-700 dark:text-amber-300 mb-4">
      It's important to distinguish between normal muscle soreness and pain that indicates an injury:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Muscle Soreness (OK)</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-amber-700 dark:text-amber-300">
          <li>Begins 24-48 hours after training</li>
          <li>Diffuse pain in muscles</li>
          <li>Gets better with movement</li>
          <li>Disappears after 2-3 days</li>
          <li>Normal mobility</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-stone-800 p-4 rounded-lg">
        <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Injury (⚠️)</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-amber-700 dark:text-amber-300">
          <li>Pain during or immediately after training</li>
          <li>Sharp, stabbing pain</li>
          <li>Gets worse with movement</li>
          <li>Lasts longer than 3 days</li>
          <li>Limited mobility</li>
        </ul>
      </div>
    </div>

    <p className="text-amber-700 dark:text-amber-300 mt-4 font-semibold">
      With pain (not muscle soreness): PAUSE IMMEDIATELY and see a doctor!
    </p>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-6">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">With Pain: PAUSE (don't "push through"!)</h3>
    
    <p className="text-red-700 dark:text-red-300 mb-4">
      The biggest mistake you can make is to continue training despite pain. "No pain, no gain" 
      is completely wrong here!
    </p>

    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li><strong>Pain is a warning signal:</strong> Your body is telling you something is wrong</li>
      <li><strong>Pushing through makes it worse:</strong> A small injury can become a big one</li>
      <li><strong>Longer break needed:</strong> A neglected injury takes much longer to heal</li>
      <li><strong>See a doctor:</strong> Always consult a doctor for persistent pain</li>
    </ul>

    <p className="text-red-700 dark:text-red-300 mt-4 font-semibold">
      Rule: If it hurts, stop! Better one week off than months of injury.
    </p>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Preventing Ear Infections</h3>
    
    <p className="text-blue-700 dark:text-blue-300 mb-4">
      Ear infections are a common side effect of swimming, especially if water stays in the ear.
    </p>

    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mt-4 mb-2">Prevention:</h4>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Dry ears after swimming:</strong> Tilt head to the side and shake gently</li>
      <li><strong>Use earplugs:</strong> Especially for sensitive ears</li>
      <li><strong>Don't clean with cotton swabs:</strong> This can injure the ear</li>
      <li><strong>For recurring infections:</strong> See a doctor, possibly special ear drops</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Summary: Swimming Healthy</h3>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Always warm up (5-10 minutes)</li>
      <li>Learn and apply proper technique</li>
      <li>Listen to your body</li>
      <li>With pain: PAUSE, don't push through</li>
      <li>Dry ears after swimming</li>
      <li>For persistent problems: See a doctor</li>
    </ul>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Verletzungsprävention praktizieren",
      description: "Integriere Verletzungsprävention in dein Training.",
      checklist: [
        { text: "Wärme dich vor jedem Training 5-10 Minuten auf (200m locker schwimmen)", checked: false },
        { text: "Lerne die Unterschiede zwischen Muskelkater und Verletzungsschmerz", checked: false },
        { text: "Trockne deine Ohren nach jedem Schwimmen", checked: false },
      ]
    },
    en: {
      title: "Practice Injury Prevention",
      description: "Integrate injury prevention into your training.",
      checklist: [
        { text: "Warm up before every training session for 5-10 minutes (200m easy swimming)", checked: false },
        { text: "Learn the differences between muscle soreness and injury pain", checked: false },
        { text: "Dry your ears after every swim", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Warum ist Aufwärmen auch im Wasser wichtig?",
        answer: "Aufwärmen erhöht die Durchblutung, mobilisiert Gelenke, aktiviert das Herz-Kreislauf-System und bereitet mental auf das Training vor. Es ist mehr als nur die Körpertemperatur zu erhöhen."
      },
      {
        question: "Was sind die häufigsten Schwimm-Verletzungen?",
        answer: "Schulter-Verletzungen (durch falsche Technik oder Überlastung), Rücken-Verletzungen (besonders beim Brustschwimmen mit zu hohem Kopf) und Knie-Verletzungen (durch falsche Beinbewegung beim Brustschwimmen)."
      },
      {
        question: "Was sollte man tun, wenn man Schmerz (nicht Muskelkater) spürt?",
        answer: "Sofort pausieren und nicht weiter trainieren. Schmerz ist ein Warnsignal. Bei anhaltendem Schmerz sollte man einen Arzt aufsuchen. Besser eine Woche Pause als Monate lang verletzt sein."
      }
    ],
    en: [
      {
        question: "Why is warming up important even in water?",
        answer: "Warming up increases blood circulation, mobilizes joints, activates the cardiovascular system, and mentally prepares for training. It's more than just raising body temperature."
      },
      {
        question: "What are the most common swimming injuries?",
        answer: "Shoulder injuries (from incorrect technique or overuse), back injuries (especially in breaststroke with head too high), and knee injuries (from incorrect leg movement in breaststroke)."
      },
      {
        question: "What should you do if you feel pain (not muscle soreness)?",
        answer: "Pause immediately and don't continue training. Pain is a warning signal. For persistent pain, you should see a doctor. Better one week off than months of injury."
      }
    ]
  }
};

