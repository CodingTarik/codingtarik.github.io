import { TreePine, Mountain, Shield, Map, TrendingUp, AlertTriangle, Leaf } from 'lucide-react';

export const outdoorBouldering = {
  title: { de: "Outdoor Bouldern", en: "Outdoor Bouldering" },
  description: { de: "Crashpads, Spotting, Felstypen, Leave No Trace und alles für dein erstes Outdoor-Abenteuer.", en: "Crashpads, spotting, rock types, Leave No Trace, and everything for your first outdoor adventure." },
  content: {
    de: `
### Outdoor Bouldern: Der nächste Schritt

Outdoor Bouldern ist ein <strong>komplett anderes Erlebnis</strong> als die Halle. Echten Fels anfassen, in der Natur klettern, die Elemente spüren – das ist, wofür Bouldern gemacht wurde!

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Mountain className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Was ist anders?</h4>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li>Keine Farb-Markierungen → Routenfindung selbst!</li>
        <li>Wetter-Einfluss (Temperatur, Feuchtigkeit, Regen)</li>
        <li>Unebener Boden → Spotting wichtiger!</li>
        <li>Natürliche Griffe (keine Schrauben-Griffe)</li>
        <li>Grade oft anders als in der Halle ("Sandbag")</li>
      </ul>
    </div>
  </div>
</div>

---

### Ausrüstung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Shield className="text-green-600 dark:text-green-400" size={24} />
    Was du brauchst
  </h3>
  <div className="space-y-2">
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Crashpad:</strong> Hinge-Pad oder Taco-Pad. Am besten 2+ Pads überlappen lassen.</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Chalk:</strong> Block-Chalk und Bürste zum Reinigen der Griffe.</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Guidebook/App:</strong> 27 Crags, Mountain Project, oder lokale Guidebooks.</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Wetter-Check:</strong> Regen = rutschig! Ideale Bedingungen: kühl und trocken.</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Kletterpartner:</strong> Nie allein outdoor bouldern! Spotter sind essentiell.</p>
  </div>
</div>

---

### Felstypen

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Map className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Verschiedene Gesteine</h4>
      <div className="space-y-2 mt-2">
        <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Granit</strong> (Fontainebleau, Yosemite): Viel Reibung, Sloper, rau</p>
        <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Sandstein</strong> (Elbsandgebirge): Weich, empfindlich, Erosion beachten</p>
        <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Kalkstein</strong> (Frankenjura): Pockets, Leisten, scharfkantig</p>
        <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Vulkanit/Basalt:</strong> Sehr rau, tolle Reibung, aber hautfressend</p>
      </div>
    </div>
  </div>
</div>

---

### Leave No Trace (LNT)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Leaf className="text-green-600 dark:text-green-400" size={24} />
    Respektiere die Natur!
  </h3>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
    <li><strong>Chalk minimieren:</strong> Überschüssiges Chalk abbürsten</li>
    <li><strong>Keine Pflanzen beschädigen:</strong> Auf Wegen bleiben</li>
    <li><strong>Müll mitnehmen:</strong> Alles, was du mitbringst, nimmst du auch wieder mit</li>
    <li><strong>Lärm reduzieren:</strong> Rücksicht auf Anwohner und Wildtiere</li>
    <li><strong>Zugangs-Beschränkungen respektieren:</strong> Vogelschutz, Sperrungen beachten!</li>
    <li><strong>Sandstein bei Nässe NICHT klettern:</strong> Der Fels wird weich und bricht!</li>
  </ul>
</div>

---

### Spotting Outdoor

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Sicherheit outdoor!</h4>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li>Crashpads korrekt positionieren und überlappen</li>
        <li>Spotter MUSS aufmerksam sein (kein Handy!)</li>
        <li>Sturzzone analysieren – wo fällst du hin?</li>
        <li>Unebener Boden: Steine, Wurzeln, Löcher beachten</li>
        <li>Highballs meiden als Anfänger!</li>
      </ul>
    </div>
  </div>
</div>

**Merke:** Outdoor Bouldern ist pures Abenteuer. Respektiere die Natur, sei sicher und genieße jeden Moment am Fels!
    `,
    en: `
### Outdoor Bouldering: The Next Step

Outdoor bouldering is a <strong>completely different experience</strong> from the gym. Touching real rock, climbing in nature, feeling the elements – this is what bouldering was made for!

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Mountain className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">What's Different?</h4>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li>No color markings → route finding yourself!</li>
        <li>Weather influence (temperature, humidity, rain)</li>
        <li>Uneven ground → spotting more important!</li>
        <li>Natural holds (no bolt-on holds)</li>
        <li>Grades often different from gym ("sandbag")</li>
      </ul>
    </div>
  </div>
</div>

---

### Equipment

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Shield className="text-green-600 dark:text-green-400" size={24} />
    What You Need
  </h3>
  <div className="space-y-2">
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Crashpad:</strong> Hinge or taco pad. Best to overlap 2+ pads.</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Chalk:</strong> Block chalk and brush for cleaning holds.</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Guidebook/App:</strong> 27 Crags, Mountain Project, or local guidebooks.</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Weather check:</strong> Rain = slippery! Ideal conditions: cool and dry.</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Climbing partner:</strong> Never boulder outdoor alone! Spotters are essential.</p>
  </div>
</div>

---

### Rock Types

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Map className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Different Rock Types</h4>
      <div className="space-y-2 mt-2">
        <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Granite</strong> (Fontainebleau, Yosemite): High friction, slopers, rough</p>
        <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Sandstone</strong> (Saxon Switzerland): Soft, fragile, mind erosion</p>
        <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Limestone</strong> (Frankenjura): Pockets, crimps, sharp edges</p>
        <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Volcanic/Basalt:</strong> Very rough, great friction, but skin-eating</p>
      </div>
    </div>
  </div>
</div>

---

### Leave No Trace (LNT)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Leaf className="text-green-600 dark:text-green-400" size={24} />
    Respect Nature!
  </h3>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
    <li><strong>Minimize chalk:</strong> Brush off excess chalk</li>
    <li><strong>Don't damage plants:</strong> Stay on trails</li>
    <li><strong>Pack out trash:</strong> Everything you bring in, take out</li>
    <li><strong>Reduce noise:</strong> Respect residents and wildlife</li>
    <li><strong>Respect access restrictions:</strong> Bird nesting, closures!</li>
    <li><strong>Don't climb sandstone when wet:</strong> Rock becomes soft and breaks!</li>
  </ul>
</div>

---

### Spotting Outdoors

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Safety Outdoors!</h4>
      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
        <li>Position and overlap crashpads correctly</li>
        <li>Spotter MUST be attentive (no phone!)</li>
        <li>Analyze fall zone – where will you land?</li>
        <li>Uneven ground: watch for rocks, roots, holes</li>
        <li>Avoid highballs as a beginner!</li>
      </ul>
    </div>
  </div>
</div>

**Remember:** Outdoor bouldering is pure adventure. Respect nature, stay safe, and enjoy every moment on the rock!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Outdoor Bouldern",
      description: "Bereite dich auf dein erstes Outdoor-Abenteuer vor.",
      checklist: [
        { text: "Finde ein lokales Outdoor-Boulder-Gebiet (App, Guidebook, oder frage in deiner Halle)", checked: false },
        { text: "Organisiere Equipment: Crashpad (leihen/kaufen), Bürste, Chalk", checked: false },
        { text: "Finde einen erfahrenen Kletterpartner für deinen ersten Outdoor-Trip", checked: false },
        { text: "Lerne die LNT-Prinzipien: Chalk abbürsten, Müll mitnehmen, Natur respektieren", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Outdoor Bouldering",
      description: "Prepare for your first outdoor adventure.",
      checklist: [
        { text: "Find a local outdoor bouldering area (app, guidebook, or ask at your gym)", checked: false },
        { text: "Organize equipment: crashpad (borrow/buy), brush, chalk", checked: false },
        { text: "Find an experienced climbing partner for your first outdoor trip", checked: false },
        { text: "Learn the LNT principles: brush off chalk, pack out trash, respect nature", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Was sind die wichtigsten Unterschiede zwischen Halle und Outdoor?", answer: "Outdoor hat keine Farbmarkierungen (Routenfindung selbst), Wetter beeinflusst die Bedingungen, der Boden ist uneben (Spotting wichtiger), Griffe sind natürlich (nicht geschraubt), Grade können anders sein als in der Halle (Sandbag). Außerdem braucht man eigenes Equipment (Crashpad) und einen Kletterpartner." },
      { question: "Was bedeutet 'Leave No Trace' und warum ist es wichtig?", answer: "Leave No Trace bedeutet, die Natur so zu verlassen, wie man sie vorgefunden hat. Konkret: Chalk minimieren und abbürsten, keine Pflanzen beschädigen, allen Müll mitnehmen, Lärm reduzieren, Zugangs-Beschränkungen respektieren. Es ist wichtig, weil Outdoor-Gebiete durch Nutzung beschädigt werden können und wir den Zugang für zukünftige Kletterer erhalten wollen." },
      { question: "Worauf musst du beim Spotting outdoor besonders achten?", answer: "Outdoor ist Spotting noch wichtiger als in der Halle: Crashpads korrekt positionieren und überlappen, der Spotter muss ständig aufmerksam sein (kein Handy!), die Sturzzone analysieren, unebenen Boden beachten (Steine, Wurzeln, Löcher). Als Anfänger sollte man Highballs (sehr hohe Boulder) meiden. Nie allein outdoor bouldern!" }
    ],
    en: [
      { question: "What are the main differences between gym and outdoor?", answer: "Outdoor has no color markings (route finding yourself), weather affects conditions, ground is uneven (spotting more important), holds are natural (not bolted on), grades can differ from gym (sandbag). You also need your own equipment (crashpad) and a climbing partner." },
      { question: "What does 'Leave No Trace' mean and why is it important?", answer: "Leave No Trace means leaving nature as you found it. Specifically: minimize and brush off chalk, don't damage plants, pack out all trash, reduce noise, respect access restrictions. It's important because outdoor areas can be damaged by use and we want to preserve access for future climbers." },
      { question: "What do you need to watch for when spotting outdoors?", answer: "Outdoors, spotting is even more important than in the gym: position and overlap crashpads correctly, spotter must be constantly attentive (no phone!), analyze the fall zone, watch for uneven ground (rocks, roots, holes). Beginners should avoid highballs (very tall boulders). Never boulder outdoors alone!" }
    ]
  }
};
