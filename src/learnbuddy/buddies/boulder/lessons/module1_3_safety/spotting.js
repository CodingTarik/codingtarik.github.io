
import { Users, Hand, MessageSquare, AlertCircle, Target, Eye, Shield, TrendingUp } from 'lucide-react';

export const spotting = {
  title: {
    de: "Spotting - Den Partner sichern",
    en: "Spotting - Securing Your Partner"
  },
  description: {
    de: "Lerne die Kunst des Spottings: wie du deinen Kletterpartner sicherst, ohne ihn zu fangen. Spotting ist Teamwork und Vertrauen.",
    en: "Learn the art of spotting: how to secure your climbing partner without catching them. Spotting is teamwork and trust."
  },
  content: {
    de: `
### Spotting: Teamwork und Vertrauen

Spotting ist eine der wichtigsten sozialen Fähigkeiten beim Bouldern. Es geht nicht darum, den Kletterer zu fangen (das ist unmöglich und gefährlich), sondern darum, ihn zu **lenken** und zu **schützen**.

Ein guter Spotter kann den Unterschied zwischen einer sicheren Landung und einer Verletzung machen. Aber Spotting ist eine Kunst, die gelernt werden muss.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Users className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Was ist Spotting?</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Spotting bedeutet, den Kletterer zu beobachten und zu lenken, wenn er fällt. Der Spotter hilft, den Kopf und die Wirbelsäule zu schützen und lenkt den Kletterer in eine sichere Landeposition.
      </p>
    </div>
  </div>
</div>

---

### Die Rolle des Spotters: Lenken, nicht fangen!

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">WICHTIG: Du fängst NICHT!</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        Der häufigste Fehler beim Spotting ist der Versuch, den Kletterer zu fangen. Das ist <strong>gefährlich</strong> und kann zu Verletzungen für beide führen.
      </p>
      <p className="text-sm text-red-700 dark:text-red-300">
        <strong>Warum?</strong> Ein fallender Kletterer hat viel mehr Gewicht und Schwung, als du auffangen kannst. Wenn du versuchst zu fangen, kannst du dich selbst verletzen oder den Kletterer in eine noch gefährlichere Position bringen.
      </p>
    </div>
  </div>
</div>

**Deine Aufgabe als Spotter:**
- Den Kletterer **lenken**, nicht fangen
- Den **Kopf und die Wirbelsäule** schützen
- Den Kletterer in eine **sichere Landeposition** bringen
- **Kommunizieren** mit dem Kletterer

---

### Die richtige Position & Handstellung

#### Position: Wo stehst du?

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    Die ideale Spotter-Position
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">1. Hinter dem Kletterer</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Stehe <strong>hinter</strong> dem Kletterer, nicht direkt unter ihm. Du solltest sehen können, wo er klettert und wo er wahrscheinlich fallen wird.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">2. In sicherer Entfernung</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Stehe nah genug, um schnell reagieren zu können, aber nicht so nah, dass du im Weg bist oder selbst gefährdet wirst. Etwa <strong>1-2 Meter</strong> Abstand ist ideal.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">3. Beweglich bleiben</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Bewege dich mit dem Kletterer mit. Wenn er sich seitwärts bewegt (Traverse), bewege dich auch seitwärts. Bleibe immer in einer Position, von der aus du schnell reagieren kannst.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">4. Beide Füße auf dem Boden</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Halte beide Füße fest auf dem Boden. Du brauchst einen stabilen Stand, um lenken zu können. Nicht auf den Matten stehen, sondern außerhalb.
      </p>
    </div>
  </div>
</div>

#### Handstellung: Wie hältst du die Hände?

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Hand className="text-green-600 dark:text-green-400" size={24} />
    Die richtige Handstellung
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Handposition</h4>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
        <li><strong>Hände auf Brusthöhe:</strong> Halte deine Hände etwa auf Brusthöhe des Kletterers</li>
        <li><strong>Handflächen nach oben:</strong> Handflächen zeigen nach oben, bereit zu lenken</li>
        <li><strong>Finger gespreizt:</strong> Finger leicht gespreizt für bessere Kontrolle</li>
        <li><strong>Arme leicht gebeugt:</strong> Nicht steif, aber bereit zu reagieren</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Was du tust, wenn der Kletterer fällt</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
        <li><strong>Kopf schützen:</strong> Deine Hauptaufgabe ist es, den Kopf zu schützen. Lenke den Kopf weg von gefährlichen Stellen.</li>
        <li><strong>Wirbelsäule lenken:</strong> Hilf dem Kletterer, auf den Rücken zu fallen, nicht auf den Kopf oder die Wirbelsäule.</li>
        <li><strong>Schwung dämpfen:</strong> Versuche, den Schwung etwas zu dämpfen, aber nicht zu stoppen.</li>
        <li><strong>Zur Seite lenken:</strong> Wenn nötig, lenke den Kletterer zur Seite, weg von gefährlichen Stellen.</li>
      </ol>
    </div>
  </div>
</div>

**Wichtig:** Du lenkst mit leichten, kontrollierten Bewegungen. Nicht mit Gewalt stoppen oder umwerfen!

---

### Kommunikation mit dem Kletterer

Kommunikation ist essentiell beim Spotting. Du musst wissen, was der Kletterer vorhat, und der Kletterer muss wissen, dass du bereit bist.

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <MessageSquare className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Vor dem Klettern</h4>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>"Ich spotte dich"</strong> - Lass den Kletterer wissen, dass du bereit bist</li>
        <li><strong>"Wo wirst du wahrscheinlich fallen?"</strong> - Frage nach der kritischen Stelle</li>
        <li><strong>"Ich bin bereit"</strong> - Bestätige, dass du in Position bist</li>
      </ul>
    </div>
  </div>
</div>

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Eye className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Während des Kletterns</h4>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>Beobachte:</strong> Behalte den Kletterer immer im Auge</li>
        <li><strong>Bereit sein:</strong> Halte dich bereit, schnell zu reagieren</li>
        <li><strong>Nicht ablenken:</strong> Sei ruhig und konzentriert</li>
      </ul>
    </div>
  </div>
</div>

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Shield className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Wenn der Kletterer fällt</h4>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>Kopf schützen:</strong> Deine erste Priorität</li>
        <li><strong>Lenken:</strong> Hilf dem Kletterer, sicher zu landen</li>
        <li><strong>Nachfragen:</strong> "Alles okay?" nach der Landung</li>
      </ul>
    </div>
  </div>
</div>

---

### Wann ist Spotting besonders wichtig?

Spotting ist nicht immer notwendig, aber in bestimmten Situationen ist es **essentiell**:

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Situationen, die Spotting erfordern</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">1. Traversen (seitwärts klettern)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        Bei Traversen fällt der Kletterer oft seitwärts, was gefährlich sein kann. Spotting ist hier besonders wichtig, um den Kletterer zu lenken.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">2. Highballs (hohe Boulder)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        Bei hohen Bouldern (über 3-4 Meter) ist Spotting absolut notwendig. Die Fallhöhe ist größer, die Aufprallenergie höher.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">3. Überhänge</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        In Überhängen fällt der Kletterer oft weiter von der Wand weg. Spotting hilft, den Fall zu kontrollieren.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">4. Dynamische Bewegungen</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        Bei dynamischen Bewegungen (Dynos) ist der Fall unvorhersehbarer. Spotting ist hier wichtig.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">5. Anfänger</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        Anfänger fallen häufiger und unvorhersehbarer. Spotting gibt ihnen Sicherheit und hilft, Verletzungen zu vermeiden.
      </p>
    </div>
  </div>
</div>

---

### Häufige Fehler beim Spotting

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Was du NICHT tun solltest</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">1. Versuchen zu fangen</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        Der gefährlichste Fehler! Du kannst einen fallenden Kletterer nicht auffangen. Versuche es nicht – du verletzt dich selbst und den Kletterer.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">2. Zu nah stehen</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        Wenn du zu nah stehst, bist du im Weg und kannst selbst verletzt werden. Halte Abstand.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">3. Nicht aufpassen</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        Wenn du nicht aufpasst, kannst du nicht schnell genug reagieren. Halte den Kletterer immer im Auge.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">4. Zu viele Spotter</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        Mehr als 2-3 Spotter sind kontraproduktiv. Zu viele Menschen im Weg können gefährlich sein. Ein guter Spotter ist besser als viele schlechte.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">5. Auf den Matten stehen</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        Stehe nicht auf den Matten, sondern außerhalb. Du brauchst einen stabilen Stand auf festem Boden.
      </p>
    </div>
  </div>
</div>

---

### Zusammenfassung: Die wichtigsten Punkte

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Dein Spotting-Check
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Lenken, nicht fangen:</strong> Deine Aufgabe ist es, den Kletterer zu lenken, nicht zu fangen.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Position:</strong> Hinter dem Kletterer, 1-2 Meter Abstand, außerhalb der Matten.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Handstellung:</strong> Hände auf Brusthöhe, Handflächen nach oben, bereit zu lenken.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Kopf schützen:</strong> Deine Hauptaufgabe ist es, den Kopf und die Wirbelsäule zu schützen.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Kommunikation:</strong> Sprich mit dem Kletterer vor, während und nach dem Klettern.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Besonders wichtig:</strong> Bei Traversen, Highballs, Überhängen und für Anfänger.</span>
    </li>
  </ul>
</div>

**Denk daran:** Spotting ist eine Fähigkeit, die Übung braucht. Je mehr du spottest, desto besser wirst du. Es ist ein Akt des Vertrauens und der Zusammenarbeit – genau das, was die Boulder-Community ausmacht.
    `,
    en: `
### Spotting: Teamwork and Trust

Spotting is one of the most important social skills in bouldering. It's not about catching the climber (that\'s impossible and dangerous), but about **guiding** and **protecting** them.

A good spotter can make the difference between a safe landing and an injury. But spotting is an art that must be learned.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Users className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">What is Spotting?</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Spotting means observing and guiding the climber when they fall. The spotter helps protect the head and spine and guides the climber into a safe landing position.
      </p>
    </div>
  </div>
</div>

---

### The Spotter's Role: Guide, Don't Catch!

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">IMPORTANT: You DON'T Catch!</h4>
      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
        The most common mistake in spotting is trying to catch the climber. This is <strong>dangerous</strong> and can cause injuries for both.
      </p>
      <p className="text-sm text-red-700 dark:text-red-300">
        <strong>Why?</strong> A falling climber has much more weight and momentum than you can catch. If you try to catch, you can injure yourself or put the climber in an even more dangerous position.
      </p>
    </div>
  </div>
</div>

**Your task as a spotter:**
- **Guide** the climber, don\'t catch
- Protect the **head and spine**
- Guide the climber into a **safe landing position**
- **Communicate** with the climber

---

### The Right Position & Hand Position

#### Position: Where Do You Stand?

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Target className="text-green-600 dark:text-green-400" size={24} />
    The Ideal Spotter Position
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">1. Behind the Climber</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Stand <strong>behind</strong> the climber, not directly under them. You should be able to see where they\'re climbing and where they\'re likely to fall.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">2. At Safe Distance</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Stand close enough to react quickly, but not so close that you\'re in the way or at risk yourself. About <strong>1-2 meters</strong> distance is ideal.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">3. Stay Mobile</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Move with the climber. If they move sideways (traverse), move sideways too. Always stay in a position from which you can react quickly.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">4. Both Feet on Ground</h4>
      <p className="text-sm text-green-700 dark:text-green-300">
        Keep both feet firmly on the ground. You need a stable stance to guide. Don't stand on the mats, but outside them.
      </p>
    </div>
  </div>
</div>

#### Hand Position: How Do You Hold Your Hands?

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Hand className="text-green-600 dark:text-green-400" size={24} />
    The Right Hand Position
  </h3>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Hand Position</h4>
      <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
        <li><strong>Hands at chest height:</strong> Hold your hands about at the climber's chest height</li>
        <li><strong>Palms up:</strong> Palms face up, ready to guide</li>
        <li><strong>Fingers spread:</strong> Fingers slightly spread for better control</li>
        <li><strong>Arms slightly bent:</strong> Not stiff, but ready to react</li>
      </ul>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">What You Do When the Climber Falls</h4>
      <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
        <li><strong>Protect head:</strong> Your main task is to protect the head. Guide the head away from dangerous spots.</li>
        <li><strong>Guide spine:</strong> Help the climber fall on their back, not on their head or spine.</li>
        <li><strong>Dampen momentum:</strong> Try to dampen the momentum somewhat, but don\'t stop it.</li>
        <li><strong>Guide sideways:</strong> If necessary, guide the climber sideways, away from dangerous spots.</li>
      </ol>
    </div>
  </div>
</div>

**Important:** You guide with light, controlled movements. Don't stop or push with force!

---

### Communication with the Climber

Communication is essential in spotting. You need to know what the climber plans to do, and the climber needs to know you\'re ready.

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <MessageSquare className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Before Climbing</h4>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>"I\'m spotting you"</strong> - Let the climber know you\'re ready</li>
        <li><strong>"Where are you likely to fall?"</strong> - Ask about the critical spot</li>
        <li><strong>"I\'m ready"</strong> - Confirm you\'re in position</li>
      </ul>
    </div>
  </div>
</div>

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Eye className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">During Climbing</h4>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>Observe:</strong> Always keep an eye on the climber</li>
        <li><strong>Be ready:</strong> Stay ready to react quickly</li>
        <li><strong>Don't distract:</strong> Be quiet and focused</li>
      </ul>
    </div>
  </div>
</div>

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Shield className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">When the Climber Falls</h4>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
        <li><strong>Protect head:</strong> Your first priority</li>
        <li><strong>Guide:</strong> Help the climber land safely</li>
        <li><strong>Check:</strong> "Are you okay?" after landing</li>
      </ul>
    </div>
  </div>
</div>

---

### When Is Spotting Especially Important?

Spotting isn\'t always necessary, but in certain situations it\'s **essential**:

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Situations That Require Spotting</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">1. Traverses (climbing sideways)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        In traverses, climbers often fall sideways, which can be dangerous. Spotting is especially important here to guide the climber.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">2. Highballs (tall boulders)</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        On tall boulders (over 3-4 meters), spotting is absolutely necessary. The fall height is greater, the impact energy higher.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">3. Overhangs</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        In overhangs, climbers often fall further away from the wall. Spotting helps control the fall.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">4. Dynamic Moves</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        In dynamic moves (dynos), the fall is more unpredictable. Spotting is important here.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-700">
      <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">5. Beginners</h5>
      <p className="text-sm text-amber-700 dark:text-amber-300">
        Beginners fall more often and unpredictably. Spotting gives them security and helps prevent injuries.
      </p>
    </div>
  </div>
</div>

---

### Common Spotting Mistakes

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ What You Should NOT Do</h4>
  
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">1. Trying to Catch</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        The most dangerous mistake! You can\'t catch a falling climber. Don't try – you'll injure yourself and the climber.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">2. Standing Too Close</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        If you stand too close, you\'re in the way and can get injured yourself. Keep distance.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">3. Not Paying Attention</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        If you\'re not paying attention, you can\'t react quickly enough. Always keep an eye on the climber.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">4. Too Many Spotters</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        More than 2-3 spotters is counterproductive. Too many people in the way can be dangerous. One good spotter is better than many bad ones.
      </p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-800 rounded-lg border border-red-200 dark:border-red-700">
      <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">5. Standing on Mats</h5>
      <p className="text-sm text-red-700 dark:text-red-300">
        Don't stand on the mats, but outside them. You need a stable stance on solid ground.
      </p>
    </div>
  </div>
</div>

---

### Summary: The Most Important Points

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
    Your Spotting Checklist
  </h3>
  <ul className="space-y-3 text-sm text-teal-700 dark:text-teal-300">
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">1.</span>
      <span><strong>Guide, don\'t catch:</strong> Your task is to guide the climber, not catch them.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">2.</span>
      <span><strong>Position:</strong> Behind the climber, 1-2 meters distance, outside the mats.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">3.</span>
      <span><strong>Hand position:</strong> Hands at chest height, palms up, ready to guide.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">4.</span>
      <span><strong>Protect head:</strong> Your main task is to protect the head and spine.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">5.</span>
      <span><strong>Communication:</strong> Talk with the climber before, during, and after climbing.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="font-bold text-teal-800 dark:text-teal-200">6.</span>
      <span><strong>Especially important:</strong> On traverses, highballs, overhangs, and for beginners.</span>
    </li>
  </ul>
</div>

**Remember:** Spotting is a skill that requires practice. The more you spot, the better you'll get. It's an act of trust and cooperation – exactly what makes the bouldering community special.
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Spotting lernen",
      description: "Übe das Spotting mit einem Partner, um die Technik zu verinnerlichen.",
      checklist: [
        { text: "Finde einen Partner und übt zusammen: Einer klettert, einer spottet", checked: false },
        { text: "Position üben: Stehe hinter dem Kletterer, 1-2 Meter Abstand, außerhalb der Matten", checked: false },
        { text: "Handstellung üben: Hände auf Brusthöhe, Handflächen nach oben", checked: false },
        { text: "Kommunikation üben: Sprich mit dem Kletterer vor dem Klettern ('Ich spotte dich')", checked: false },
        { text: "Wichtig: Versuche NIEMALS zu fangen! Nur lenken und den Kopf schützen", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Learn Spotting",
      description: "Practice spotting with a partner to internalize the technique.",
      checklist: [
        { text: "Find a partner and practice together: One climbs, one spots", checked: false },
        { text: "Practice position: Stand behind climber, 1-2 meters distance, outside mats", checked: false },
        { text: "Practice hand position: Hands at chest height, palms up", checked: false },
        { text: "Practice communication: Talk with climber before climbing ('I\'m spotting you')", checked: false },
        { text: "Important: NEVER try to catch! Only guide and protect the head", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was ist die Hauptaufgabe eines Spotters?",
        answer: "Die Hauptaufgabe eines Spotters ist es, den Kletterer zu lenken (nicht zu fangen), den Kopf und die Wirbelsäule zu schützen, und den Kletterer in eine sichere Landeposition zu bringen."
      },
      {
        question: "Warum sollte man NIEMALS versuchen, einen fallenden Kletterer zu fangen?",
        answer: "Ein fallender Kletterer hat viel mehr Gewicht und Schwung, als man auffangen kann. Wenn man versucht zu fangen, kann man sich selbst verletzen oder den Kletterer in eine noch gefährlichere Position bringen. Die Aufgabe ist es zu lenken, nicht zu fangen."
      },
      {
        question: "In welchen Situationen ist Spotting besonders wichtig?",
        answer: "Spotting ist besonders wichtig bei Traversen (seitwärts klettern), Highballs (hohe Boulder über 3-4 Meter), Überhängen, dynamischen Bewegungen (Dynos) und für Anfänger, die häufiger und unvorhersehbarer fallen."
      }
    ],
    en: [
      {
        question: "What is the main task of a spotter?",
        answer: "The main task of a spotter is to guide the climber (not catch), protect the head and spine, and guide the climber into a safe landing position."
      },
      {
        question: "Why should you NEVER try to catch a falling climber?",
        answer: "A falling climber has much more weight and momentum than you can catch. If you try to catch, you can injure yourself or put the climber in an even more dangerous position. The task is to guide, not catch."
      },
      {
        question: "In which situations is spotting especially important?",
        answer: "Spotting is especially important on traverses (climbing sideways), highballs (tall boulders over 3-4 meters), overhangs, dynamic moves (dynos), and for beginners who fall more often and unpredictably."
      }
    ]
  }
};

