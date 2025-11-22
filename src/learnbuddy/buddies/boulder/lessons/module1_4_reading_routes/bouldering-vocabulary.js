import { BookOpen, MessageSquare, Target, Zap, TrendingUp, Info } from 'lucide-react';

export const boulderingVocabulary = {
  title: {
    de: "Boulder-Vokabular - Das musst du kennen!",
    en: "Bouldering Vocabulary - You Need to Know This!"
  },
  description: {
    de: "Lerne das wichtigste Boulder-Vokabular: Crux, Beta, Flash, Onsight, Redpoint und viele weitere Begriffe, die du in der Community hören wirst.",
    en: "Learn the most important bouldering vocabulary: Crux, Beta, Flash, Onsight, Redpoint, and many more terms you'll hear in the community."
  },
  content: {
    de: `
### Die Sprache der Boulder-Community

Wenn du in eine Boulderhalle gehst, wirst du viele Begriffe hören, die dir vielleicht fremd vorkommen. "Hast du schon Beta für diesen Boulder?" "Das ist der Crux!" "Ich habe ihn geflasht!"

Lerne diese Begriffe, und du wirst dich sofort wie ein Teil der Community fühlen.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <BookOpen className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Warum ist das wichtig?</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Diese Begriffe sind Teil der Boulder-Kultur. Wenn du sie kennst, kannst du besser mit anderen kommunizieren, Beta teilen und dich in der Community zurechtfinden.
      </p>
    </div>
  </div>
</div>

---

### Die wichtigsten Begriffe

#### Crux: Die schwerste Stelle

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Target className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Crux</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-2">
        <strong>Definition:</strong> Die schwerste Stelle in einem Boulder. Der Punkt, an dem die meisten Leute scheitern.
      </p>
      <p className="text-sm text-red-700 dark:text-red-300">
        <strong>Beispiel:</strong> "Der Crux ist der dritte Zug – da muss man weit springen."
      </p>
    </div>
  </div>
</div>

#### Beta: Die Lösung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <MessageSquare className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Beta</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        <strong>Definition:</strong> Die Lösung oder Sequenz für einen Boulder. Wie man einen Boulder klettert.
      </p>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        <strong>Beispiel:</strong> "Hast du Beta für diesen Boulder?" oder "Die Beta ist: Links greifen, dann rechts, dann hoch."
      </p>
      <p className="text-sm text-green-700 dark:text-green-300">
        <strong>Wichtig:</strong> Beta zu teilen ist ein üblicher und geschätzter Teil der Boulder-Community. Es ist nicht "cheaten", sondern Zusammenarbeit!
      </p>
    </div>
  </div>
</div>

#### Flash: Beim ersten Versuch (mit Beta)

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Flash</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
    <strong>Definition:</strong> Einen Boulder beim ersten Versuch schaffen, aber mit vorheriger Information (Beta von anderen, Video, etc.).
  </p>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    <strong>Beispiel:</strong> "Ich habe ihn geflasht!" bedeutet: "Ich habe ihn beim ersten Versuch geschafft, nachdem ich Beta gesehen habe."
  </p>
</div>

#### Onsight: Beim ersten Versuch (ohne Beta)

<div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">Onsight</h4>
  <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
    <strong>Definition:</strong> Einen Boulder beim ersten Versuch schaffen, OHNE vorherige Information. Du siehst ihn zum ersten Mal und schaffst ihn sofort.
  </p>
  <p className="text-sm text-orange-700 dark:text-orange-300">
    <strong>Beispiel:</strong> "Ich habe ihn onsight gemacht!" – das ist die höchste Form des Erfolgs!
  </p>
</div>

#### Redpoint: Nach mehreren Versuchen

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Redpoint</h4>
  <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
    <strong>Definition:</strong> Einen Boulder nach mehreren Versuchen schaffen. Du hast ihn probiert, bist gescheitert, hast es nochmal versucht, und schließlich geschafft.
  </p>
  <p className="text-sm text-teal-700 dark:text-teal-300">
    <strong>Beispiel:</strong> "Ich habe ihn nach 10 Versuchen geredpointet." – das ist völlig normal und nichts, wofür man sich schämen muss!
  </p>
</div>

#### Project: Langfristiges Ziel

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Project</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
    <strong>Definition:</strong> Ein Boulder, an dem man langfristig arbeitet. Ein Ziel, das mehrere Sessions oder sogar Wochen dauert.
  </p>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    <strong>Beispiel:</strong> "Das ist mein Project für diesen Monat." – ein Boulder, den du regelmäßig probierst, bis du ihn schaffst.
  </p>
</div>

#### Send: Erfolgreich abgeschlossen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Send</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-2">
    <strong>Definition:</strong> Einen Boulder erfolgreich abgeschlossen. Du hast den Top erreicht und die Route geschafft.
  </p>
  <p className="text-sm text-green-700 dark:text-green-300">
    <strong>Beispiel:</strong> "Ich habe ihn gesendet!" oder "Nice send!" (als Kompliment für andere).
  </p>
</div>

#### Pump: Unterarme sind "dicht"

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Pump</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-2">
    <strong>Definition:</strong> Wenn deine Unterarme "dicht" sind – eine Übersäuerung der Muskeln durch zu viel Anstrengung.
  </p>
  <p className="text-sm text-red-700 dark:text-red-300">
    <strong>Beispiel:</strong> "Ich habe Pump!" bedeutet: "Meine Unterarme brennen, ich kann nicht mehr klettern."
  </p>
  <p className="text-sm text-red-700 dark:text-red-300 mt-2">
    <strong>Lösung:</strong> Pause machen, Arme ausschütteln, etwas warten, bis der Pump nachlässt.
  </p>
</div>

#### Crispy: Sehr gute Form

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Crispy</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
    <strong>Definition:</strong> Sehr gute Form oder Leistung. Du warst besonders gut, präzise, kraftvoll.
  </p>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    <strong>Beispiel:</strong> "Du warst heute richtig crispy!" – ein großes Kompliment!
  </p>
</div>

#### Sandbag: Schwerer als der Grade suggeriert

<div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">Sandbag</h4>
  <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
    <strong>Definition:</strong> Ein Boulder, der schwerer ist als sein Grade suggeriert. Ein V4, der sich wie ein V6 anfühlt.
  </p>
  <p className="text-sm text-orange-700 dark:text-orange-300">
    <strong>Beispiel:</strong> "Dieser Boulder ist total sandbagged!" – er ist schwerer als erwartet.
  </p>
</div>

---

### Weitere wichtige Begriffe

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">Zusätzliches Vokabular</h4>
  
  <div className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Dyno:</strong> Eine dynamische Bewegung, ein Sprung zu einem Griff.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Mantle:</strong> Auf einen Griff oder eine Kante hochziehen und dann hochdrücken.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Gaston:</strong> Ein Griff, den du von der Seite greifst, mit dem Daumen nach unten.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Sloper:</strong> Ein schlechter, abgerundeter Griff ohne gute Kante.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Crimp:</strong> Ein kleiner, scharfer Griff, den du mit den Fingerspitzen greifst.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Jug:</strong> Ein großer, guter Griff, den du leicht greifen kannst.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Pinch:</strong> Ein Griff, den du zwischen Daumen und Fingern kneifst.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Volume:</strong> Eine große, dreidimensionale Struktur an der Wand.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Traverse:</strong> Seitwärts klettern, nicht nach oben.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Highball:</strong> Ein sehr hoher Boulder (über 3-4 Meter).</p>
    </div>
  </div>
</div>

---

### Zusammenfassung: Die wichtigsten Punkte

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Dein Boulder-Vokabular-Check
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Crux:</strong> Die schwerste Stelle im Boulder.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Beta:</strong> Die Lösung oder Sequenz für einen Boulder.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Flash:</strong> Beim 1. Versuch geschafft (mit Beta).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Onsight:</strong> Beim 1. Versuch geschafft (ohne Beta).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Redpoint:</strong> Nach mehreren Versuchen geschafft.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Project:</strong> Boulder, an dem man langfristig arbeitet.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">7.</span>
      <span><strong>Send:</strong> Boulder erfolgreich abgeschlossen.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">8.</span>
      <span><strong>Pump:</strong> Unterarme sind "dicht" (Übersäuerung).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">9.</span>
      <span><strong>Crispy:</strong> Sehr gute Form/Leistung.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">10.</span>
      <span><strong>Sandbag:</strong> Boulder ist schwerer als der Grade suggeriert.</span>
    </li>
  </ul>
</div>

**Denk daran:** Diese Begriffe sind Teil der Boulder-Kultur. Wenn du sie kennst, kannst du besser mit anderen kommunizieren und dich in der Community zurechtfinden. Scheue dich nicht, nachzufragen, wenn du einen Begriff nicht kennst – jeder war mal Anfänger!
    `,
    en: `
### The Language of the Bouldering Community

When you enter a bouldering gym, you'll hear many terms that might seem foreign to you. "Do you have beta for this boulder?" "That's the crux!" "I flashed it!"

Learn these terms, and you'll immediately feel like part of the community.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <BookOpen className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Why Is This Important?</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        These terms are part of bouldering culture. When you know them, you can communicate better with others, share beta, and navigate the community.
      </p>
    </div>
  </div>
</div>

---

### The Most Important Terms

#### Crux: The Hardest Spot

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Target className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Crux</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-2">
        <strong>Definition:</strong> The hardest spot in a boulder. The point where most people fail.
      </p>
      <p className="text-sm text-red-700 dark:text-red-300">
        <strong>Example:</strong> "The crux is the third move – you have to jump far there."
      </p>
    </div>
  </div>
</div>

#### Beta: The Solution

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <MessageSquare className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Beta</h4>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        <strong>Definition:</strong> The solution or sequence for a boulder. How to climb a boulder.
      </p>
      <p className="text-sm text-green-700 dark:text-green-300 mb-2">
        <strong>Example:</strong> "Do you have beta for this boulder?" or "The beta is: grab left, then right, then up."
      </p>
      <p className="text-sm text-green-700 dark:text-green-300">
        <strong>Important:</strong> Sharing beta is a common and valued part of the bouldering community. It's not "cheating," but cooperation!
      </p>
    </div>
  </div>
</div>

#### Flash: On First Try (With Beta)

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Flash</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
    <strong>Definition:</strong> Completing a boulder on the first try, but with prior information (beta from others, video, etc.).
  </p>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    <strong>Example:</strong> "I flashed it!" means: "I completed it on the first try after seeing beta."
  </p>
</div>

#### Onsight: On First Try (Without Beta)

<div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">Onsight</h4>
  <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
    <strong>Definition:</strong> Completing a boulder on the first try, WITHOUT prior information. You see it for the first time and complete it immediately.
  </p>
  <p className="text-sm text-orange-700 dark:text-orange-300">
    <strong>Example:</strong> "I onsighted it!" – that's the highest form of success!
  </p>
</div>

#### Redpoint: After Multiple Attempts

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-2">Redpoint</h4>
  <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
    <strong>Definition:</strong> Completing a boulder after multiple attempts. You tried it, failed, tried again, and finally succeeded.
  </p>
  <p className="text-sm text-teal-700 dark:text-teal-300">
    <strong>Example:</strong> "I redpointed it after 10 attempts." – that's completely normal and nothing to be ashamed of!
  </p>
</div>

#### Project: Long-Term Goal

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Project</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
    <strong>Definition:</strong> A boulder you work on long-term. A goal that takes multiple sessions or even weeks.
  </p>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    <strong>Example:</strong> "That's my project for this month." – a boulder you regularly try until you complete it.
  </p>
</div>

#### Send: Successfully Completed

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Send</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-2">
    <strong>Definition:</strong> Successfully completed a boulder. You reached the top and completed the route.
  </p>
  <p className="text-sm text-green-700 dark:text-green-300">
    <strong>Example:</strong> "I sent it!" or "Nice send!" (as a compliment for others).
  </p>
</div>

#### Pump: Forearms Are "Tight"

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Pump</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-2">
    <strong>Definition:</strong> When your forearms are "tight" – muscle acidification from too much effort.
  </p>
  <p className="text-sm text-red-700 dark:text-red-300">
    <strong>Example:</strong> "I have pump!" means: "My forearms are burning, I can't climb anymore."
  </p>
  <p className="text-sm text-red-700 dark:text-red-300 mt-2">
    <strong>Solution:</strong> Take a break, shake your arms, wait a bit until the pump subsides.
  </p>
</div>

#### Crispy: Very Good Form

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Crispy</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
    <strong>Definition:</strong> Very good form or performance. You were particularly good, precise, powerful.
  </p>
    <p className="text-sm text-purple-700 dark:text-purple-300">
    <strong>Example:</strong> "You were really crispy today!" – a big compliment!
  </p>
</div>

#### Sandbag: Harder Than Grade Suggests

<div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">Sandbag</h4>
  <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
    <strong>Definition:</strong> A boulder that's harder than its grade suggests. A V4 that feels like a V6.
  </p>
  <p className="text-sm text-orange-700 dark:text-orange-300">
    <strong>Example:</strong> "This boulder is totally sandbagged!" – it's harder than expected.
  </p>
</div>

---

### Additional Important Terms

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4">Additional Vocabulary</h4>
  
  <div className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Dyno:</strong> A dynamic move, a jump to a hold.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Mantle:</strong> Pulling up onto a hold or edge and then pushing up.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Gaston:</strong> A hold you grab from the side, with thumb pointing down.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Sloper:</strong> A bad, rounded hold without a good edge.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Crimp:</strong> A small, sharp hold you grab with fingertips.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Jug:</strong> A large, good hold you can easily grab.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Pinch:</strong> A hold you pinch between thumb and fingers.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Volume:</strong> A large, three-dimensional structure on the wall.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Traverse:</strong> Climbing sideways, not upward.</p>
    </div>
    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg">
      <p><strong>Highball:</strong> A very tall boulder (over 3-4 meters).</p>
    </div>
  </div>
</div>

---

### Summary: The Most Important Points

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Your Bouldering Vocabulary Checklist
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Crux:</strong> The hardest spot in the boulder.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Beta:</strong> The solution or sequence for a boulder.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Flash:</strong> Completed on 1st try (with beta).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Onsight:</strong> Completed on 1st try (without beta).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Redpoint:</strong> Completed after multiple attempts.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Project:</strong> Boulder you work on long-term.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">7.</span>
      <span><strong>Send:</strong> Successfully completed boulder.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">8.</span>
      <span><strong>Pump:</strong> Forearms are "tight" (acidification).</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">9.</span>
      <span><strong>Crispy:</strong> Very good form/performance.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">10.</span>
      <span><strong>Sandbag:</strong> Boulder is harder than grade suggests.</span>
    </li>
  </ul>
</div>

**Remember:** These terms are part of bouldering culture. When you know them, you can communicate better with others and navigate the community. Don't hesitate to ask if you don't know a term – everyone was a beginner once!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Boulder-Vokabular lernen",
      description: "Lerne die wichtigsten Boulder-Begriffe kennen und verwende sie in der Halle.",
      checklist: [
        { text: "Lerne die 10 wichtigsten Begriffe auswendig: Crux, Beta, Flash, Onsight, Redpoint, Project, Send, Pump, Crispy, Sandbag", checked: false },
        { text: "Verwende diese Begriffe in der Halle: Frage nach Beta, identifiziere den Crux, beschreibe deine Versuche", checked: false },
        { text: "Höre anderen Kletterern zu: Welche Begriffe verwenden sie? Was bedeuten sie?", checked: false },
        { text: "Wichtig: Scheue dich nicht, nachzufragen, wenn du einen Begriff nicht kennst – jeder war mal Anfänger!", checked: false },
        { text: "Teile Beta mit anderen: Das ist ein geschätzter Teil der Boulder-Community", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Learn Bouldering Vocabulary",
      description: "Learn the most important bouldering terms and use them in the gym.",
      checklist: [
        { text: "Memorize the 10 most important terms: Crux, Beta, Flash, Onsight, Redpoint, Project, Send, Pump, Crispy, Sandbag", checked: false },
        { text: "Use these terms in the gym: Ask for beta, identify the crux, describe your attempts", checked: false },
        { text: "Listen to other climbers: Which terms do they use? What do they mean?", checked: false },
        { text: "Important: Don't hesitate to ask if you don't know a term – everyone was a beginner once!", checked: false },
        { text: "Share beta with others: That's a valued part of the bouldering community", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was ist der Unterschied zwischen Flash und Onsight?",
        answer: "Flash bedeutet, einen Boulder beim ersten Versuch zu schaffen, aber mit vorheriger Information (Beta von anderen, Video, etc.). Onsight bedeutet, einen Boulder beim ersten Versuch zu schaffen, OHNE vorherige Information – man sieht ihn zum ersten Mal und schafft ihn sofort."
      },
      {
        question: "Was bedeutet 'Beta' und warum ist es wichtig?",
        answer: "Beta ist die Lösung oder Sequenz für einen Boulder – wie man einen Boulder klettert. Beta zu teilen ist ein üblicher und geschätzter Teil der Boulder-Community. Es ist nicht 'cheaten', sondern Zusammenarbeit. Wenn man nach Beta fragt oder Beta teilt, hilft man anderen und wird selbst geholfen."
      },
      {
        question: "Was ist ein 'Crux' und warum ist es wichtig, ihn zu identifizieren?",
        answer: "Der Crux ist die schwerste Stelle in einem Boulder – der Punkt, an dem die meisten Leute scheitern. Es ist wichtig, den Crux zu identifizieren, weil man dann weiß, wo man besonders aufpassen oder üben muss. Wenn man den Crux meistert, schafft man meist den ganzen Boulder."
      }
    ],
    en: [
      {
        question: "What is the difference between Flash and Onsight?",
        answer: "Flash means completing a boulder on the first try, but with prior information (beta from others, video, etc.). Onsight means completing a boulder on the first try, WITHOUT prior information – you see it for the first time and complete it immediately."
      },
      {
        question: "What does 'Beta' mean and why is it important?",
        answer: "Beta is the solution or sequence for a boulder – how to climb a boulder. Sharing beta is a common and valued part of the bouldering community. It's not 'cheating,' but cooperation. When you ask for beta or share beta, you help others and get helped yourself."
      },
      {
        question: "What is a 'Crux' and why is it important to identify it?",
        answer: "The crux is the hardest spot in a boulder – the point where most people fail. It's important to identify the crux because then you know where you need to be especially careful or practice. When you master the crux, you usually complete the whole boulder."
      }
    ]
  }
};
