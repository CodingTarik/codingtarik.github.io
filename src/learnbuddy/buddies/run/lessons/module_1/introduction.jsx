import React from 'react';

export const introductionLesson = {
  id: 'r1_m1_intro',
  title: { 
    en: '1.1 Introduction & Philosophy', 
    de: '1.1 Einführung & Philosophie' 
  },
  description: { 
    en: 'Understanding what running is, its benefits, and how to approach it as a lifestyle.', 
    de: 'Verstehe, was Laufen ist, seine Vorteile und wie du es als Lebensstil angehen kannst.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Willkommen beim Laufen! 🏃

Du hast den ersten Schritt getan: Du bist hier, du bist neugierig, und du willst laufen lernen. Das ist großartig! Laufen ist eine der natürlichsten und zugänglichsten Bewegungsformen der Welt. Es erfordert keine teure Ausrüstung, keine Mitgliedschaft im Fitnessstudio – nur dich, deine Beine und die Bereitschaft, anzufangen.

Diese Reise wird dich von "Ich kann nicht einmal 100 Meter laufen" zu "Ich laufe regelmäßig und fühle mich großartig" führen. Klingt weit weg? Ist es nicht. Du brauchst nur etwas Zeit, Geduld und die Bereitschaft, langsam zu beginnen.

---

### Was ist Laufen eigentlich?

Laufen ist mehr als nur "schnelles Gehen". Es ist eine der ursprünglichsten Bewegungsformen des Menschen. Unsere Vorfahren liefen, um zu jagen, zu fliehen und zu überleben. Heute laufen wir aus anderen Gründen, aber die Bewegung ist dieselbe.

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
  <div className="p-4 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
    <div className="text-3xl mb-2">🏃</div>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Natürliche Bewegung</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      Laufen ist eine fundamentale menschliche Fähigkeit. Dein Körper ist dafür gemacht. Du musst nur lernen, ihn richtig zu nutzen und langsam aufzubauen.
    </p>
  </div>
  
  <div className="p-4 bg-green-50 dark:bg-green-900/40 rounded-lg">
    <div className="text-3xl mb-2">💪</div>
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Ausdauersport</h4>
    <p className="text-sm text-green-700 dark:text-green-300">
      Laufen trainiert dein Herz-Kreislauf-System, deine Muskeln und deine Ausdauer. Es ist eine der effizientesten Formen des Cardio-Trainings.
    </p>
  </div>
  
  <div className="p-4 bg-purple-50 dark:bg-purple-900/40 rounded-lg">
    <div className="text-3xl mb-2">🌱</div>
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Lebensstil</h4>
    <p className="text-sm text-purple-700 dark:text-purple-300">
      Laufen kann zu einer Gewohnheit werden, die dein Leben bereichert. Es ist nicht nur Sport – es ist eine Art, zu leben.
    </p>
  </div>
</div>

**Der häufigste Fehler von Anfängern?** Sie versuchen, zu schnell zu laufen oder zu weit. Das führt zu Verletzungen, Frustration und dem Gefühl, dass Laufen "nichts für mich ist".

**Unser Weg:** Langsam starten, langsam steigern. Schritt für Schritt. Respekt vor deinem Körper.

---

### Die Vorteile des Laufens

Laufen bietet dir mehr als nur körperliche Fitness. Es ist ein ganzheitliches Training für Körper, Geist und Seele.

<div className="space-y-6 my-6">

<div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
  <div className="text-4xl flex-shrink-0">❤️</div>
  <div>
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Körperliche Vorteile</h4>
    <ul className="text-sm space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Herz-Kreislauf-Gesundheit:</strong> Stärkt dein Herz, verbessert die Durchblutung, senkt den Blutdruck</li>
      <li><strong>Gewichtsmanagement:</strong> Effektive Kalorienverbrennung, unterstützt gesundes Gewicht</li>
      <li><strong>Knochenstärke:</strong> Belastung stärkt die Knochen, beugt Osteoporose vor</li>
      <li><strong>Muskelaufbau:</strong> Stärkt Beine, Core und Oberkörper (durch Armbewegung)</li>
      <li><strong>Immunsystem:</strong> Regelmäßiges, moderates Laufen stärkt die Abwehrkräfte</li>
    </ul>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
  <div className="text-4xl flex-shrink-0">🧠</div>
  <div>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Mentale Vorteile</h4>
    <ul className="text-sm space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Stressabbau:</strong> Laufen reduziert Cortisol und setzt Endorphine frei</li>
      <li><strong>Endorphine:</strong> Das "Runner's High" – ein natürliches Hochgefühl</li>
      <li><strong>Selbstvertrauen:</strong> Jeder Lauf ist ein Erfolg, der dein Selbstbewusstsein stärkt</li>
      <li><strong>Klare Gedanken:</strong> Laufen hilft, den Kopf freizubekommen und Probleme zu lösen</li>
      <li><strong>Bessere Schlafqualität:</strong> Regelmäßiges Laufen verbessert den Schlaf</li>
      <li><strong>Depressionsprävention:</strong> Studien zeigen, dass Laufen bei leichten Depressionen helfen kann</li>
    </ul>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
  <div className="text-4xl flex-shrink-0">👥</div>
  <div>
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Soziale Vorteile</h4>
    <ul className="text-sm space-y-2 text-purple-700 dark:text-purple-300">
      <li><strong>Laufgruppen:</strong> Finde Gleichgesinnte und laufe gemeinsam</li>
      <li><strong>Gemeinschaft:</strong> Lauf-Events und Rennen schaffen Verbindungen</li>
      <li><strong>Motivation:</strong> Andere Läufer inspirieren und motivieren dich</li>
      <li><strong>Verantwortlichkeit:</strong> Verabredungen zum Laufen helfen, dranzubleiben</li>
      <li><strong>Neue Freundschaften:</strong> Laufen verbindet Menschen aller Altersgruppen</li>
    </ul>
  </div>
</div>

</div>

---

### Laufen als Lebensstil

Laufen ist nicht nur ein Sport, den du machst – es kann zu einer Lebensweise werden, die dein gesamtes Leben positiv beeinflusst.

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Nachhaltigkeit & Langfristigkeit</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-4">
    <strong>Das wichtigste Prinzip:</strong> Langfristigkeit ist wichtiger als kurzfristige Ziele. Ein Läufer, der 10 Jahre lang regelmäßig läuft, ist erfolgreicher als jemand, der 3 Monate intensiv trainiert und dann aufgibt.
  </p>
  <ul className="text-sm space-y-2 text-amber-700 dark:text-amber-300">
    <li><strong>Konsistenz > Intensität:</strong> Regelmäßiges, moderates Laufen ist besser als sporadische, intensive Sessions</li>
    <li><strong>Geduld:</strong> Fortschritte kommen langsam, aber sie kommen</li>
    <li><strong>Balance:</strong> Laufen sollte dein Leben bereichern, nicht dominieren</li>
    <li><strong>Freude:</strong> Wenn es keinen Spaß macht, wirst du nicht dranbleiben</li>
  </ul>
</div>

**Die Philosophie des Laufens:** Es geht nicht darum, der Schnellste oder der Beste zu sein. Es geht darum, besser zu werden als du gestern warst. Es geht um die Reise, nicht nur um das Ziel.

---

### Warum diese Philosophie wichtig ist

Viele Menschen sehen Laufen als Qual oder als Mittel zum Zweck ("Ich muss abnehmen"). Aber wenn du mit der richtigen Einstellung rangehst, wird es zu einer der bereicherndsten Aktivitäten deines Lebens.

**Laufen ist:**
- **Meditation in Bewegung:** Wenn du läufst, bist du im Hier und Jetzt
- **Selbstfürsorge:** Du tust etwas Gutes für dich selbst
- **Freiheit:** Du kannst überall laufen, wann immer du willst
- **Erfolg:** Jeder Lauf ist ein kleiner Sieg

---

### Zusammenfassung: Dein Mindset

Bevor wir in die Techniken eintauchen, verinnerliche diese drei Prinzipien:

1. **"Ich starte langsam und steigere mich langsam."**
2. **"Ich respektiere meinen Körper und höre auf ihn."**
3. **"Ich habe Geduld mit mir selbst. Jeder Schritt macht mich besser."**

**Bist du bereit?** Dann lass uns in der nächsten Lektion mit dem Fundament starten: **Ausrüstung & Kleidung** – denn die richtige Ausrüstung macht den Unterschied zwischen Freude und Frustration.
    `,
    en: `
### Welcome to Running! 🏃

You've taken the first step: you\'re here, you\'re curious, and you want to learn to run. That's fantastic! Running is one of the most natural and accessible forms of movement in the world. It requires no expensive equipment, no gym membership – just you, your legs, and the willingness to start.

This journey will take you from "I can\'t even run 100 meters" to "I run regularly and feel great." Sounds far away? It's not. You just need some time, patience, and the willingness to start slowly.

---

### What is Running, Really?

Running is more than just "fast walking." It's one of the most fundamental human movements. Our ancestors ran to hunt, flee, and survive. Today we run for different reasons, but the movement is the same.

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
  <div className="p-4 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
    <div className="text-3xl mb-2">🏃</div>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Natural Movement</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      Running is a fundamental human ability. Your body is made for it. You just need to learn to use it correctly and build up slowly.
    </p>
  </div>
  
  <div className="p-4 bg-green-50 dark:bg-green-900/40 rounded-lg">
    <div className="text-3xl mb-2">💪</div>
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Endurance Sport</h4>
    <p className="text-sm text-green-700 dark:text-green-300">
      Running trains your cardiovascular system, your muscles, and your endurance. It's one of the most efficient forms of cardio training.
    </p>
  </div>
  
  <div className="p-4 bg-purple-50 dark:bg-purple-900/40 rounded-lg">
    <div className="text-3xl mb-2">🌱</div>
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Lifestyle</h4>
    <p className="text-sm text-purple-700 dark:text-purple-300">
      Running can become a habit that enriches your life. It's not just sport – it\'s a way of living.
    </p>
  </div>
</div>

**The most common beginner mistake?** They try to run too fast or too far. This leads to injuries, frustration, and the feeling that running "isn\'t for me."

**Our approach:** Start slowly, progress slowly. Step by step. Respect your body.

---

### The Benefits of Running

Running offers you more than just physical fitness. It's holistic training for body, mind, and soul.

<div className="space-y-6 my-6">

<div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
  <div className="text-4xl flex-shrink-0">❤️</div>
  <div>
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Physical Benefits</h4>
    <ul className="text-sm space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Cardiovascular Health:</strong> Strengthens your heart, improves circulation, lowers blood pressure</li>
      <li><strong>Weight Management:</strong> Effective calorie burning, supports healthy weight</li>
      <li><strong>Bone Strength:</strong> Impact strengthens bones, prevents osteoporosis</li>
      <li><strong>Muscle Building:</strong> Strengthens legs, core, and upper body (through arm movement)</li>
      <li><strong>Immune System:</strong> Regular, moderate running strengthens defenses</li>
    </ul>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
  <div className="text-4xl flex-shrink-0">🧠</div>
  <div>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Mental Benefits</h4>
    <ul className="text-sm space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Stress Relief:</strong> Running reduces cortisol and releases endorphins</li>
      <li><strong>Endorphins:</strong> The "Runner's High" – a natural high</li>
      <li><strong>Self-Confidence:</strong> Every run is a success that builds your self-esteem</li>
      <li><strong>Clear Thoughts:</strong> Running helps clear your head and solve problems</li>
      <li><strong>Better Sleep Quality:</strong> Regular running improves sleep</li>
      <li><strong>Depression Prevention:</strong> Studies show running can help with mild depression</li>
    </ul>
  </div>
</div>

<div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
  <div className="text-4xl flex-shrink-0">👥</div>
  <div>
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Social Benefits</h4>
    <ul className="text-sm space-y-2 text-purple-700 dark:text-purple-300">
      <li><strong>Running Groups:</strong> Find like-minded people and run together</li>
      <li><strong>Community:</strong> Running events and races create connections</li>
      <li><strong>Motivation:</strong> Other runners inspire and motivate you</li>
      <li><strong>Accountability:</strong> Running appointments help you stay committed</li>
      <li><strong>New Friendships:</strong> Running connects people of all ages</li>
    </ul>
  </div>
</div>

</div>

---

### Running as a Lifestyle

Running isn\'t just a sport you do – it can become a way of life that positively influences your entire life.

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">Sustainability & Longevity</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-4">
    <strong>The most important principle:</strong> Longevity is more important than short-term goals. A runner who runs regularly for 10 years is more successful than someone who trains intensively for 3 months and then gives up.
  </p>
  <ul className="text-sm space-y-2 text-amber-700 dark:text-amber-300">
    <li><strong>Consistency > Intensity:</strong> Regular, moderate running is better than sporadic, intense sessions</li>
    <li><strong>Patience:</strong> Progress comes slowly, but it comes</li>
    <li><strong>Balance:</strong> Running should enrich your life, not dominate it</li>
    <li><strong>Joy:</strong> If it\'s not fun, you won\'t stick with it</li>
  </ul>
</div>

**The Philosophy of Running:** It's not about being the fastest or the best. It's about becoming better than you were yesterday. It's about the journey, not just the destination.

---

### Why This Philosophy Matters

Many people see running as torture or as a means to an end ("I need to lose weight"). But if you approach it with the right mindset, it becomes one of the most enriching activities in your life.

**Running is:**
- **Meditation in Motion:** When you run, you\'re in the here and now
- **Self-Care:** You're doing something good for yourself
- **Freedom:** You can run anywhere, anytime you want
- **Success:** Every run is a small victory

---

### Summary: Your Mindset

Before we dive into techniques, internalize these three principles:

1. **"I start slowly and progress slowly."**
2. **"I respect my body and listen to it."**
3. **"I have patience with myself. Every step makes me better."**

**Are you ready?** Then let's start with the foundation in the next lesson: **Equipment & Clothing** – because the right equipment makes the difference between joy and frustration.
    `
  },

  task: {
    de: {
      title: 'Deine erste Beobachtung: Spaziergang mit Bewusstsein',
      description: 'Bevor du mit dem Laufen beginnst, lerne deinen Körper kennen. Diese Übung hilft dir, deine Ausgangsbasis zu verstehen.',
      checklist: [
        { text: 'Gehe 30 Minuten spazieren in einem moderaten Tempo' },
        { text: 'Beobachte deine Atmung: Wie schnell atmest du? Durch Nase oder Mund?' },
        { text: 'Spüre deine Herzfrequenz: Ist sie erhöht? Wie fühlt sich das an?' },
        { text: 'Achte auf deine Körperhaltung: Stehst du aufrecht? Sind deine Schultern entspannt?' },
        { text: 'Notiere deine Beobachtungen: Wie fühlst du dich? Was war einfach, was war anstrengend?' }
      ]
    },
    en: {
      title: 'Your First Observation: Conscious Walk',
      description: 'Before you start running, get to know your body. This exercise helps you understand your starting point.',
      checklist: [
        { text: 'Walk for 30 minutes at a moderate pace' },
        { text: 'Observe your breathing: How fast are you breathing? Through nose or mouth?' },
        { text: 'Feel your heart rate: Is it elevated? How does that feel?' },
        { text: 'Pay attention to your posture: Are you standing upright? Are your shoulders relaxed?' },
        { text: 'Note your observations: How do you feel? What was easy, what was challenging?' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was sind die drei Aspekte des Laufens?',
        back: '1. Natürliche Bewegung (fundamentale menschliche Fähigkeit)\n2. Ausdauersport (Cardio-Training)\n3. Lebensstil (Gewohnheit, die das Leben bereichert)'
      },
      {
        front: 'Was sind die wichtigsten körperlichen Vorteile des Laufens?',
        back: 'Herz-Kreislauf-Gesundheit, Gewichtsmanagement, Knochenstärke, Muskelaufbau, stärkeres Immunsystem'
      },
      {
        front: 'Was sind die wichtigsten mentalen Vorteile des Laufens?',
        back: 'Stressabbau, Endorphine (Runner\'s High), Selbstvertrauen, klare Gedanken, bessere Schlafqualität, Depressionsprävention'
      },
      {
        front: 'Was ist das wichtigste Prinzip beim Laufen?',
        back: 'Langfristigkeit ist wichtiger als kurzfristige Ziele. Konsistenz > Intensität. Langsam starten, langsam steigern.'
      },
      {
        front: 'Was ist der häufigste Fehler von Anfängern?',
        back: 'Zu schnell oder zu weit laufen. Das führt zu Verletzungen und Frustration. Lösung: Langsam starten, langsam steigern.'
      }
    ],
    en: [
      {
        front: 'What are the three aspects of running?',
        back: '1. Natural Movement (fundamental human ability)\n2. Endurance Sport (cardio training)\n3. Lifestyle (habit that enriches life)'
      },
      {
        front: 'What are the most important physical benefits of running?',
        back: 'Cardiovascular health, weight management, bone strength, muscle building, stronger immune system'
      },
      {
        front: 'What are the most important mental benefits of running?',
        back: 'Stress relief, endorphins (Runner\'s High), self-confidence, clear thoughts, better sleep quality, depression prevention'
      },
      {
        front: 'What is the most important principle in running?',
        back: 'Longevity is more important than short-term goals. Consistency > Intensity. Start slowly, progress slowly.'
      },
      {
        front: 'What is the most common beginner mistake?',
        back: 'Running too fast or too far. This leads to injuries and frustration. Solution: Start slowly, progress slowly.'
      }
    ]
  }
};

