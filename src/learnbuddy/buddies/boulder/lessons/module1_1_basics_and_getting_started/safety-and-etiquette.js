
import { Shield, Users, ArrowDown, UserCheck, PersonStanding, MoveUp, Brush, Wind, HelpCircle, Baby, Flame, Sparkles, Footprints, Eye, PackageX, LocateFixed, CircleDot } from 'lucide-react';

export const safetyAndEtiquette = {
  de: {
    title: "Sicherheit & Etikette: Die ungeschriebenen Gesetze",
    description: "Lerne die goldenen Regeln der Sicherheit und des Miteinanders, um Bouldern zu einer großartigen Erfahrung für alle zu machen.",
    content: `
### Deine Sicherheit ist Priorität #1

Bouldern ist ein sicherer Sport, solange du die wichtigste Fähigkeit beherrschst: **das richtige Fallen**. Bevor du lernst zu klettern, lerne zu fallen. Dein Körper wird es dir danken.

#### Die Kunst des kontrollierten Fallens
Du wirst fallen – oft. Lerne, es sicher und kontrolliert zu tun, um die Energie sanft abzuleiten.

<div className="my-6 p-4 bg-stone-100 dark:bg-stone-800 border-2 border-stone-200 dark:border-stone-700 rounded-xl">
  <h4 className="font-bold text-lg text-stone-800 dark:text-stone-200 mb-4 text-center">So landest du wie eine Katze: Eine 3-Stufen-Anleitung</h4>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
    
    <div className="p-4 bg-white dark:bg-stone-700/50 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
      <div className="flex justify-center items-center h-16 w-16 bg-teal-100 dark:bg-teal-900 rounded-full mx-auto mb-3">
        <Footprints size={32} className="text-teal-500"/>
      </div>
      <p className="font-bold text-stone-900 dark:text-stone-100">1. Füße zuerst</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Lande immer auf beiden Füßen, hüftbreit auseinander. Deine Beine sind deine besten Stoßdämpfer.</p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-700/50 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
      <div className="flex justify-center items-center h-16 w-16 bg-teal-100 dark:bg-teal-900 rounded-full mx-auto mb-3">
        <ArrowDown size={32} className="text-teal-500"/>
      </div>
      <p className="font-bold text-stone-900 dark:text-stone-100">2. Tief gehen & Abrollen</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Gehe sofort tief in die Hocke und lass dich nach hinten auf deinen Po und Rücken abrollen. Wie eine Judorolle.</p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-700/50 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
       <div className="flex justify-center items-center h-16 w-16 bg-teal-100 dark:bg-teal-900 rounded-full mx-auto mb-3">
        <Shield size={32} className="text-teal-500"/>
      </div>
      <p className="font-bold text-stone-900 dark:text-stone-100">3. Arme schützen</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Versuche NIEMALS, dich mit den Händen abzustützen. Halte sie vor deinem Körper, um sie zu schützen.</p>
    </div>
  </div>
</div>

#### Die goldene Regel der Halle
<div className="flex items-center gap-4 p-5 my-6 bg-red-100 dark:bg-red-900/50 border-l-8 border-red-500 rounded-lg shadow-lg">
    <UserCheck size={48} className="text-red-600 dark:text-red-400 flex-shrink-0" />
    <div>
        <h4 className="font-bold text-xl text-red-800 dark:text-red-200">HALTE DIE STURZZONE FREI!</h4>
        <p className="text-red-700 dark:text-red-300">Das ist die wichtigste Regel. Gehe oder sitze niemals unter jemandem, der klettert. Beobachte deine Umgebung, bevor du eine Matte betrittst.</p>
    </div>
</div>

### Bevor du kletterst: Die richtige Vorbereitung
Ein paar Minuten Vorbereitung können Verletzungen vorbeugen und deinen Erfolg an der Wand massiv steigern.

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="p-4 bg-stone-100 dark:bg-stone-800 rounded-lg">
    <div className="flex items-center gap-3 mb-2">
      <Flame className="text-orange-500" />
      <h5 className="font-bold text-stone-800 dark:text-stone-200">Aufwärmen ist Pflicht</h5>
    </div>
    <p className="text-sm text-stone-600 dark:text-stone-400">Klettere niemals kalt! Ein 10-15-minütiges Aufwärmprogramm (Hampelmänner, Armkreisen, leichte Dehnübungen) bereitet deine Muskeln und Gelenke vor. Nutze den Aufwärm-Timer in der App!</p>
  </div>
  <div className="p-4 bg-stone-100 dark:bg-stone-800 rounded-lg">
    <div className="flex items-center gap-3 mb-2">
      <Eye className="text-teal-500" />
      <h5 className="font-bold text-stone-800 dark:text-stone-200">Erst lesen, dann klettern</h5>
    </div>
    <p className="text-sm text-stone-600 dark:text-stone-400">Schau dir den Boulder vom Boden aus an. Plane deine ersten Züge. Das "Lesen" der Route ist die halbe Miete und spart Kraft.</p>
  </div>
</div>

### Hallen-Etikette: Sei ein guter Boulder-Buddy
Eine gute Atmosphäre entsteht durch gegenseitigen Respekt. Hier sind die ungeschriebenen Gesetze, die jeder kennen sollte:

<div className="space-y-4">
  <div className="flex items-start gap-4 p-3 bg-white dark:bg-stone-800 rounded-lg shadow-sm"><Users className="text-teal-500 mt-1 flex-shrink-0" size={24} /><div><strong className="text-stone-800 dark:text-stone-200">Warte, bis du dran bist:</strong> Drängle dich nicht vor. Wer zuerst an der Wand stand, klettert auch zuerst. Gib anderen Raum für ihre Versuche.</div></div>
  <div className="flex items-start gap-4 p-3 bg-white dark:bg-stone-800 rounded-lg shadow-sm"><PackageX className="text-red-500 mt-1 flex-shrink-0" size={24} /><div><strong className="text-stone-800 dark:text-stone-200">Nichts auf die Matten!</strong> Deine Trinkflasche, dein Handy oder deine Tasche haben auf den Fallmatten nichts zu suchen. Sie sind eine große Verletzungsgefahr für dich und andere.</div></div>
  <div className="flex items-start gap-4 p-3 bg-white dark:bg-stone-800 rounded-lg shadow-sm"><LocateFixed className="text-teal-500 mt-1 flex-shrink-0" size={24} /><div><strong className="text-stone-800 dark:text-stone-200">Schau, bevor du springst:</strong> Bevor du von der Wand abspringst, wirf immer einen kurzen Blick nach unten, um sicherzustellen, dass niemand unter dir ist.</div></div>
  <div className="flex items-start gap-4 p-3 bg-white dark:bg-stone-800 rounded-lg shadow-sm"><Brush className="text-teal-500 mt-1 flex-shrink-0" size={24} /><div><strong className="text-stone-800 dark:text-stone-200">Putze deine Griffe:</strong> Bürste nach deinen Versuchen überschüssiges Chalk oder Gummiabrieb von den Griffen. Besonders bei Slopern ist das ein Zeichen des Respekts.</div></div>
  <div className="flex items-start gap-4 p-3 bg-white dark:bg-stone-800 rounded-lg shadow-sm"><Wind className="text-teal-500 mt-1 flex-shrink-0" size={24} /><div><strong className="text-stone-800 dark:text-stone-200">Chalk-Etikette:</strong> Vermeide riesige Chalk-Wolken. Klopfe überschüssiges Chalk in deinem Chalkbag ab, nicht in die Luft.</div></div>
  <div className="flex items-start gap-4 p-3 bg-white dark:bg-stone-800 rounded-lg shadow-sm"><HelpCircle className="text-teal-500 mt-1 flex-shrink-0" size={24} /><div><strong className="text-stone-800 dark:text-stone-200">Frage vor dem Tipp:</strong> Gib "Beta" (Tipps zur Lösung) nur, wenn du gefragt wirst. Das Lösen des Puzzles ist Teil des Spaßes.</div></div>
    <div className="flex items-start gap-4 p-3 bg-white dark:bg-stone-800 rounded-lg shadow-sm"><Baby className="text-orange-500 mt-1 flex-shrink-0" size={24} /><div><strong className="text-stone-800 dark:text-stone-200">Achte auf Kinder:</strong> Kinder sind oft unberechenbar und erkennen Gefahrenzonen nicht. Sei in ihrer Nähe besonders wachsam.</div></div>
  <div className="flex items-start gap-4 p-3 bg-white dark:bg-stone-800 rounded-lg shadow-sm"><Sparkles className="text-teal-500 mt-1 flex-shrink-0" size={24} /><div><strong className="text-stone-800 dark:text-stone-200">Schuhe aus:</strong> Trage deine Kletterschuhe nur auf den Matten. Ziehe sie aus, wenn du auf die Toilette gehst oder die Halle verlässt.</div></div>
</div>
    `,
    task: {
      title: "Praktische Sicherheitsübung: Dein erster kontrollierter Fall",
      description: "Bevor du deinen ersten richtigen Boulder kletterst, solltest du dich mit dem Gefühl des Fallens vertraut machen. Das baut Vertrauen in dich und die Matten auf.",
      checklist: [
        { text: "Klettere nur die ersten 2-3 Griffe einer leichten Route, sodass deine Füße knapp über der Matte schweben.", checked: false },
        { text: "Atme tief aus, lass bewusst los und konzentriere dich auf die 3-Stufen-Landung: Füße, Knie beugen, abrollen.", checked: false },
        { text: "Stelle sicher, dass deine Arme vor dir bleiben und du nicht versuchst, dich abzustützen.", checked: false },
        { text: "Wiederhole das 3-4 Mal von einer leicht erhöhten Position, bis es sich natürlich anfühlt.", checked: false },
      ]
    },
    quiz: [
      {
        question: "Was sind die 3 Schritte für eine sichere Landung?",
        answer: "1. Auf beiden Füßen landen. 2. In die Hocke gehen und sofort abrollen. 3. Arme vor dem Körper halten und sich nicht abstützen."
      },
      {
        question: "Was ist die 'Sturzzone' und warum ist sie heilig?",
        answer: "Es ist der Bereich direkt unter einem Kletterer, in den er fallen könnte. Man darf sich dort niemals aufhalten, um Kollisionen zu vermeiden."
      },
      {
        question: "Wann solltest du jemandem 'Beta' (Tipps) geben?",
        answer: "Nur, wenn die Person dich ausdrücklich danach fragt. Ansonsten nimmst du ihr den Spaß am selbstständigen Lösen des Problems."
      }
    ]
  },
  en: {
    title: "Safety & Etiquette: The Unwritten Laws",
    description: "Learn the golden rules of safety and etiquette to make bouldering a great experience for everyone.",
    content: `
### Your Safety is Priority #1

Bouldering is a safe sport as long as you master the most important skill: **how to fall correctly**. Before you learn to climb, learn to fall. Your body will thank you.

#### The Art of the Controlled Fall
You will fall—often. Learn to do it safely and with control to dissipate the energy gently.

<div className="my-6 p-4 bg-stone-100 dark:bg-stone-800 border-2 border-stone-200 dark:border-stone-700 rounded-xl">
  <h4 className="font-bold text-lg text-stone-800 dark:text-stone-200 mb-4 text-center">How to Land Like a Cat: A 3-Step Guide</h4>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
    
    <div className="p-4 bg-white dark:bg-stone-700/50 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
      <div className="flex justify-center items-center h-16 w-16 bg-teal-100 dark:bg-teal-900 rounded-full mx-auto mb-3">
        <Footprints size={32} className="text-teal-500"/>
      </div>
      <p className="font-bold text-stone-900 dark:text-stone-100">1. Feet First</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Always land on both feet, hip-width apart. Your legs are your best shock absorbers.</p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-700/50 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
      <div className="flex justify-center items-center h-16 w-16 bg-teal-100 dark:bg-teal-900 rounded-full mx-auto mb-3">
        <ArrowDown size={32} className="text-teal-500"/>
      </div>
      <p className="font-bold text-stone-900 dark:text-stone-100">2. Go Low & Roll</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Immediately go into a deep squat and roll backward onto your bottom and back. Think of a judo roll.</p>
    </div>
    
    <div className="p-4 bg-white dark:bg-stone-700/50 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
       <div className="flex justify-center items-center h-16 w-16 bg-teal-100 dark:bg-teal-900 rounded-full mx-auto mb-3">
        <Shield size={32} className="text-teal-500"/>
      </div>
      <p className="font-bold text-stone-900 dark:text-stone-100">3. Protect Your Arms</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">NEVER try to catch yourself with your hands. Keep them in front of your body to protect them.</p>
    </div>
  </div>
</div>

#### The Golden Rule of the Gym
<div className="flex items-center gap-4 p-5 my-6 bg-red-100 dark:bg-red-900/50 border-l-8 border-red-500 rounded-lg shadow-lg">
    <UserCheck size={48} className="text-red-600 dark:text-red-400 flex-shrink-0" />
    <div>
        <h4 className="font-bold text-xl text-red-800 dark:text-red-200">KEEP THE FALL ZONE CLEAR!</h4>
        <p className="text-red-700 dark:text-red-300">This is the most important rule. Never walk or sit under someone who is climbing. Be aware of your surroundings before stepping onto a mat.</p>
    </div>
</div>

### Before You Climb: Proper Preparation
A few minutes of prep can prevent injuries and massively increase your success on the wall.

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="p-4 bg-stone-100 dark:bg-stone-800 rounded-lg">
    <div className="flex items-center gap-3 mb-2">
      <Flame className="text-orange-500" />
      <h5 className="font-bold text-stone-800 dark:text-stone-200">Warm-Up is Mandatory</h5>
    </div>
    <p className="text-sm text-stone-600 dark:text-stone-400">Never climb cold! A 10-15 minute warm-up (jumping jacks, arm circles, light stretching) prepares your muscles and joints. Use the warm-up timer in the app!</p>
  </div>
  <div className="p-4 bg-stone-100 dark:bg-stone-800 rounded-lg">
    <div className="flex items-center gap-3 mb-2">
      <Eye className="text-teal-500" />
      <h5 className="font-bold text-stone-800 dark:text-stone-200">Read First, Climb Later</h5>
    </div>
    <p className="text-sm text-stone-600 dark:text-stone-400">Look at the boulder from the ground. Plan your first moves. "Reading" the route is half the battle and saves energy.</p>
  </div>
</div>

### Gym Etiquette: Be a Good Boulder-Buddy
A great atmosphere is built on mutual respect. Here are the unwritten laws everyone should know:

<div className="space-y-4">
  <div className="flex items-start gap-4 p-3 bg-white dark:bg-stone-800 rounded-lg shadow-sm"><Users className="text-teal-500 mt-1 flex-shrink-0" size={24} /><div><strong className="text-stone-800 dark:text-stone-200">Wait your turn:</strong> Don't push in. Whoever was at the wall first, climbs first. Give others space for their attempts.</div></div>
  <div className="flex items-start gap-4 p-3 bg-white dark:bg-stone-800 rounded-lg shadow-sm"><PackageX className="text-red-500 mt-1 flex-shrink-0" size={24} /><div><strong className="text-stone-800 dark:text-stone-200">Nothing on the mats!</strong> Your water bottle, phone, or bag have no place on the fall mats. They are a major injury hazard for you and others.</div></div>
  <div className="flex items-start gap-4 p-3 bg-white dark:bg-stone-800 rounded-lg shadow-sm"><LocateFixed className="text-teal-500 mt-1 flex-shrink-0" size={24} /><div><strong className="text-stone-800 dark:text-stone-200">Look before you leap:</strong> Before jumping down from the wall, always take a quick look below to ensure no one is under you.</div></div>
  <div className="flex items-start gap-4 p-3 bg-white dark:bg-stone-800 rounded-lg shadow-sm"><Brush className="text-teal-500 mt-1 flex-shrink-0" size={24} /><div><strong className="text-stone-800 dark:text-stone-200">Brush your holds:</strong> After your attempts, brush off excess chalk or rubber residue from the holds. This is a sign of respect, especially on slopers.</div></div>
  <div className="flex items-start gap-4 p-3 bg-white dark:bg-stone-800 rounded-lg shadow-sm"><Wind className="text-teal-500 mt-1 flex-shrink-0" size={24} /><div><strong className="text-stone-800 dark:text-stone-200">Chalk Etiquette:</strong> Avoid huge chalk clouds. Tap off excess chalk inside your chalk bag, not in the air.</div></div>
  <div className="flex items-start gap-4 p-3 bg-white dark:bg-stone-800 rounded-lg shadow-sm"><HelpCircle className="text-teal-500 mt-1 flex-shrink-0" size={24} /><div><strong className="text-stone-800 dark:text-stone-200">Ask before advising:</strong> Only give "beta" (tips for the solution) if you're asked. Solving the puzzle is part of the fun.</div></div>
  <div className="flex items-start gap-4 p-3 bg-white dark:bg-stone-800 rounded-lg shadow-sm"><Baby className="text-orange-500 mt-1 flex-shrink-0" size={24} /><div><strong className="text-stone-800 dark:text-stone-200">Watch out for kids:</strong> Children are often unpredictable and don't recognize danger zones. Be especially vigilant when they are around.</div></div>
  <div className="flex items-start gap-4 p-3 bg-white dark:bg-stone-800 rounded-lg shadow-sm"><Sparkles className="text-teal-500 mt-1 flex-shrink-0" size={24} /><div><strong className="text-stone-800 dark:text-stone-200">Shoes off:</strong> Wear your climbing shoes only on the mats. Take them off when you go to the restroom or leave the gym.</div></div>
</div>
    `,
    task: {
      title: "Practical Safety Drill: Your First Controlled Fall",
      description: "Before you climb your first real boulder, you should get comfortable with the feeling of falling. This builds trust in yourself and the mats.",
      checklist: [
        { text: "Climb only the first 2-3 holds of an easy route, so your feet are just above the mat.", checked: false },
        { text: "Exhale, let go intentionally, and focus on the 3-step landing: feet, bend knees, roll back.", checked: false },
        { text: "Make sure your arms stay in front of you and you don't try to catch yourself.", checked: false },
        { text: "Repeat this 3-4 times from a slightly elevated position until it feels natural.", checked: false },
      ]
    },
    quiz: [
      {
        question: "What are the 3 steps for a safe landing?",
        answer: "1. Land on both feet. 2. Go into a squat and immediately roll back. 3. Keep your arms in front of your body and don't catch yourself."
      },
      {
        question: "What is the 'fall zone' and why is it sacred?",
        answer: "It's the area directly under a climber where they might fall. You must never stay there to avoid collisions."
      },
      {
        question: "When should you give someone 'beta' (tips)?",
        answer: "Only when the person explicitly asks you for it. Otherwise, you're taking away their fun of solving the problem themselves."
      }
    ]
  }
};
