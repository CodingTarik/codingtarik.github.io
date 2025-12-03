import React from 'react';

export const safetyHygieneLesson = {
  id: 'c1_m1_safety',
  title: { 
    en: '1.3 Safety & Hygiene', 
    de: '1.3 Sicherheit & Hygiene' 
  },
  description: { 
    en: 'The kitchen can be a dangerous place. Learn how to protect yourself and your guests from injury and illness.', 
    de: 'Die Küche kann ein gefährlicher Ort sein. Lerne, wie du dich und deine Gäste vor Verletzungen und Krankheiten schützt.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Safety First! 🛡️

Bevor wir das erste Mal wirklich kochen, müssen wir über Sicherheit sprechen. Eine Küche ist voll mit scharfen Klingen, extremen Temperaturen und potenziellen Bakterienherden. Aber keine Sorge: Mit dem richtigen Wissen hast du alles im Griff.

---

### Teil 1: Persönliche Sicherheit

Verletzungen passieren meistens durch Unaufmerksamkeit oder falsche Technik.

<div className="space-y-6 my-6">

<div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">🔥 Brand-Verletzungen & Fettbrand</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Dies ist die **wichtigste Regel** in der Küche:
  </p>
  <div className="bg-white dark:bg-stone-800 p-3 rounded border border-red-200 dark:border-red-800 mb-3">
    <p className="font-bold text-center text-red-600 dark:text-red-400">
      NIEMALS Wasser in brennendes Fett gießen! 🚫💧
    </p>
  </div>
  <p className="text-sm text-red-700 dark:text-red-300">
    Wasser verdampft explosionsartig und reißt das brennende Fett mit sich. Es entsteht ein riesiger Feuerball.
    <br/><br/>
    <strong>So machst du es richtig:</strong>
    <br/>1. Ruhe bewahren.
    <br/>2. Flamme ausschalten (Energie wegnehmen).
    <br/>3. <strong>Deckel drauf!</strong> (Sauerstoff entziehen).
    <br/>4. Oder eine Löschdecke benutzen.
  </p>
</div>

<div className="p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
  <h4 className="font-bold text-orange-800 dark:text-orange-300 mb-2">🔪 Schnittverletzungen</h4>
  <p className="text-sm text-orange-700 dark:text-orange-300">
    Paradoxerweise passieren die meisten Unfälle mit <strong>stumpfen</strong> Messern. Warum? Weil du mehr Kraft aufwenden musst und leichter abrutschst.
    <br/><br/>
    <strong>Die Regeln:</strong>
    <br/>• Halte Messer immer scharf.
    <br/>• Schneide immer vom Körper weg.
    <br/>• Wenn ein Messer fällt: <strong>Lass es fallen!</strong> Versuche NIEMALS, es zu fangen. Spring zurück.
    <br/>• Nutze den "Krallengriff" (Fingerkuppen nach innen gewölbt), um deine Finger zu schützen.
  </p>
</div>

<div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">💨 Dampf ist heißer als du denkst</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Wenn du einen Deckel von einem kochenden Topf nimmst, entweicht heißer Dampf.
    <br/><br/>
    <strong>Richtig:</strong> Öffne den Deckel immer <strong>von dir weg</strong> (wie ein Schild), damit der Dampf nach hinten entweicht und nicht in dein Gesicht.
  </p>
</div>

</div>

---

### Teil 2: Lebensmittelsicherheit (HACCP für Zuhause)

Du willst nicht, dass deine Gäste (oder du selbst) krank werden. Bakterien sieht, riecht und schmeckt man oft nicht.

<div className="my-6 space-y-6">

<div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">☠️ Kreuzkontamination: Der unsichtbare Feind</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Das passiert, wenn Bakterien von rohem Fleisch auf Lebensmittel übergehen, die nicht mehr gekocht werden (z.B. Salat).
  </p>
  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-white dark:bg-stone-800 p-3 rounded shadow-sm">
      <p className="font-bold text-red-600 mb-1">Szenario (Falsch):</p>
      <p className="text-xs">Du schneidest rohes Huhn auf einem Brett. Danach schneidest du auf DEMSELBEN Brett (oder mit demselben Messer) die Gurken für den Salat.</p>
    </div>
    <div className="bg-white dark:bg-stone-800 p-3 rounded shadow-sm">
      <p className="font-bold text-green-600 mb-1">Lösung:</p>
      <p className="text-xs">Benutze <strong>separate Bretter</strong>! Profis nutzen Farben (Rot = Fleisch, Grün = Gemüse). Zuhause reicht: Erst Gemüse schneiden, DANN Fleisch. Oder Brett und Messer zwischendurch heiß abwaschen.</p>
    </div>
  </div>
</div>

<div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">🌡️ Die Gefahrenzone (4°C - 60°C)</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Bakterien lieben Temperaturen zwischen 4°C und 60°C. Sie vermehren sich dort explosionsartig (Verdopplung alle 20 Min!).
    <br/><br/>
    <strong>Die Regeln:</strong>
    <br/>• <strong>Kalt halten:</strong> Kühlschrank unter 5°C.
    <br/>• <strong>Heiß halten:</strong> Essen über 60°C halten.
    <br/>• <strong>2-Stunden-Regel:</strong> Lass gekochtes Essen nicht länger als 2 Stunden bei Raumtemperatur stehen.
    <br/>• <strong>Auftauen:</strong> Taue Fleisch NIEMALS auf der Heizung oder bei Raumtemperatur auf. Immer langsam im Kühlschrank!
  </p>
</div>

</div>

### Zusammenfassung

Sicherheit in der Küche ist kein Hexenwerk, sondern Gewohnheit.
1. **Fettbrand** = Deckel drauf (KEIN Wasser).
2. **Messer** = Fallen lassen (nicht fangen).
3. **Kreuzkontamination** = Rohes Fleisch und Salat streng trennen.
4. **Temperatur** = Aus der Gefahrenzone raushalten.

Bleib sicher, damit das Kochen Spaß bleibt!
    `,
    en: `
### Safety First! 🛡️

Before we really start cooking, we need to talk about safety. A kitchen is full of sharp blades, extreme temperatures, and potential bacterial hazards. But don't worry: with the right knowledge, you've got this handled.

---

### Part 1: Personal Safety

Injuries usually happen due to inattention or incorrect technique.

<div className="space-y-6 my-6">

<div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">🔥 Burn Injuries & Grease Fires</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    This is the **most important rule** in the kitchen:
  </p>
  <div className="bg-white dark:bg-stone-800 p-3 rounded border border-red-200 dark:border-red-800 mb-3">
    <p className="font-bold text-center text-red-600 dark:text-red-400">
      NEVER pour water on burning grease! 🚫💧
    </p>
  </div>
  <p className="text-sm text-red-700 dark:text-red-300">
    Water evaporates explosively and carries the burning grease with it. A huge fireball results.
    <br/><br/>
    <strong>How to do it right:</strong>
    <br/>1. Stay calm.
    <br/>2. Turn off the flame (remove energy).
    <br/>3. **Put a lid on it!** (Cut off oxygen).
    <br/>4. Or use a fire blanket.
  </p>
</div>

<div className="p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
  <h4 className="font-bold text-orange-800 dark:text-orange-300 mb-2">🔪 Cuts</h4>
  <p className="text-sm text-orange-700 dark:text-orange-300">
    Paradoxically, most accidents happen with **dull** knives. Why? Because you have to use more force and slip more easily.
    <br/><br/>
    <strong>The Rules:</strong>
    <br/>• Keep knives sharp.
    <br/>• Always cut away from your body.
    <br/>• If a knife falls: **Let it fall!** NEVER try to catch it. Jump back.
    <br/>• Use the "claw grip" (fingertips curled inward) to protect your fingers.
  </p>
</div>

<div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">💨 Steam is Hotter Than You Think</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    When you take a lid off a boiling pot, hot steam escapes.
    <br/><br/>
    <strong>Right:</strong> Always open the lid **away from you** (like a shield) so the steam escapes to the back and not into your face.
  </p>
</div>

</div>

---

### Part 2: Food Safety (Home HACCP)

You don't want your guests (or yourself) to get sick. Bacteria often cannot be seen, smelled, or tasted.

<div className="my-6 space-y-6">

<div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">☠️ Cross-Contamination: The Invisible Enemy</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    This happens when bacteria from raw meat transfer to foods that won't be cooked further (e.g., salad).
  </p>
  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-white dark:bg-stone-800 p-3 rounded shadow-sm">
      <p className="font-bold text-red-600 mb-1">Scenario (Wrong):</p>
      <p className="text-xs">You cut raw chicken on a board. Then you cut cucumbers for the salad on the SAME board (or with the same knife).</p>
    </div>
    <div className="bg-white dark:bg-stone-800 p-3 rounded shadow-sm">
      <p className="font-bold text-green-600 mb-1">Solution:</p>
      <p className="text-xs">Use **separate boards**! Pros use colors (Red = Meat, Green = Vegetables). At home: Cut vegetables first, THEN meat. Or wash board and knife with hot water in between.</p>
    </div>
  </div>
</div>

<div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">🌡️ The Danger Zone (4°C - 60°C / 40°F - 140°F)</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Bacteria love temperatures between 4°C and 60°C. They multiply explosively there (doubling every 20 mins!).
    <br/><br/>
    <strong>The Rules:</strong>
    <br/>• **Keep Cold:** Fridge below 5°C.
    <br/>• **Keep Hot:** Keep food above 60°C.
    <br/>• **2-Hour Rule:** Don't leave cooked food out at room temperature for more than 2 hours.
    <br/>• **Thawing:** NEVER thaw meat on the heater or at room temperature. Always slowly in the fridge!
  </p>
</div>

</div>

### Summary

Safety in the kitchen isn't rocket science, it's habit.
1. **Grease Fire** = Lid on (NO water).
2. **Falling Knife** = Let it fall (don't catch).
3. **Cross-Contamination** = Strictly separate raw meat and salad.
4. **Temperature** = Keep out of the danger zone.

Stay safe so cooking remains fun!
    `
  },

  notes: {
    de: [
      {
        front: 'Was tun bei Fettbrand?',
        back: 'NIEMALS Wasser benutzen! Flamme aus, Deckel drauf (Sauerstoff entziehen) oder Löschdecke.'
      },
      {
        front: 'Was ist Kreuzkontamination?',
        back: 'Übertragung von Bakterien von rohen Lebensmitteln (z.B. Fleisch) auf verzehrfertige Lebensmittel (z.B. Salat) durch Hände, Messer oder Schneidebretter.'
      },
      {
        front: 'Was ist die "Gefahrenzone" für Bakterien?',
        back: 'Zwischen 4°C und 60°C. In diesem Bereich vermehren sich Bakterien am schnellsten.'
      },
      {
        front: 'Wie taue ich Fleisch richtig auf?',
        back: 'Langsam im Kühlschrank. Niemals bei Zimmertemperatur oder auf der Heizung (Bakterienwachstum!).'
      },
      {
        front: 'Wie hebe ich einen Topfdeckel richtig an?',
        back: 'Von mir weg öffnen, wie ein Schild. Damit der heiße Dampf nicht ins Gesicht steigt.'
      }
    ],
    en: [
      {
        front: 'What to do in a grease fire?',
        back: 'NEVER use water! Turn off heat, put a lid on (cut off oxygen), or use a fire blanket.'
      },
      {
        front: 'What is cross-contamination?',
        back: 'Transfer of bacteria from raw foods (e.g., meat) to ready-to-eat foods (e.g., salad) via hands, knives, or cutting boards.'
      },
      {
        front: 'What is the "Danger Zone" for bacteria?',
        back: 'Between 4°C and 60°C (40-140°F). Bacteria multiply fastest in this range.'
      },
      {
        front: 'How do I thaw meat correctly?',
        back: 'Slowly in the fridge. Never at room temperature or on a heater (bacterial growth!).'
      },
      {
        front: 'How do I lift a pot lid correctly?',
        back: 'Open away from you, like a shield. So hot steam doesn\'t hit your face.'
      }
    ]
  }
};


