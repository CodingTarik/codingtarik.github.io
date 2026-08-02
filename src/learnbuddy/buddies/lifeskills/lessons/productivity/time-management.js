export const timeManagement = {
    id: 'productivity-time-management',
    title: {
        en: 'Time Management: Master Your Hours',
        de: 'Zeitmanagement: Meistere deine Stunden'
    },
    difficulty: 'beginner',
    duration: 40,
    description: {
        en: 'Learn the Eisenhower Matrix, time blocking, Pareto principle, and how to beat procrastination.',
        de: 'Lerne die Eisenhower-Matrix, Time Blocking, das Pareto-Prinzip und wie du Prokrastination besiegst.'
    },
    content: {
        en: `## Time Management: Master Your Hours

### The Truth About Time
Everyone has the same 24 hours. The difference isn't time – it's **priorities**. Time management is really about **energy management** and **decision management**.

---

### The Eisenhower Matrix

Named after President Dwight D. Eisenhower: *"What is important is seldom urgent, and what is urgent is seldom important."*

<div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg my-4">
  <table className="w-full border-collapse">
    <thead><tr>
      <th className="border p-2 bg-slate-200 dark:bg-slate-700"></th>
      <th className="border p-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200">URGENT</th>
      <th className="border p-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200">NOT URGENT</th>
    </tr></thead>
    <tbody>
      <tr>
        <td className="border p-2 bg-red-100 dark:bg-red-900/30 font-bold text-red-800 dark:text-red-200">IMPORTANT</td>
        <td className="border p-2 bg-red-50 dark:bg-red-900/20"><strong>DO IT NOW</strong><br/>Crises, deadlines, emergencies</td>
        <td className="border p-2 bg-blue-50 dark:bg-blue-900/20"><strong>SCHEDULE IT</strong><br/>Planning, learning, relationships, health</td>
      </tr>
      <tr>
        <td className="border p-2 bg-green-100 dark:bg-green-900/30 font-bold text-green-800 dark:text-green-200">NOT IMPORTANT</td>
        <td className="border p-2 bg-yellow-50 dark:bg-yellow-900/20"><strong>DELEGATE IT</strong><br/>Interruptions, some emails, some meetings</td>
        <td className="border p-2 bg-slate-100 dark:bg-slate-700/50"><strong>ELIMINATE IT</strong><br/>Social media, busywork, time wasters</td>
      </tr>
    </tbody>
  </table>
</div>

**Key insight:** Most people live in Quadrant 1 (firefighting) and Quadrant 4 (distractions). The goal is to spend more time in **Quadrant 2** – important but not urgent. This is where growth happens.

---

### Time Blocking

Time blocking means **scheduling every hour** of your day in advance. Instead of a to-do list, you have a time-blocked calendar.

**How to time block:**
1. **Identify your peak hours:** When are you most focused? (Usually morning)
2. **Block deep work first:** 2-4 hour blocks for your most important tasks
3. **Batch similar tasks:** All emails at 10am and 3pm. All calls at 2pm.
4. **Include buffer time:** 15-30 min between blocks for transitions
5. **Protect your blocks:** Treat them like meetings – non-negotiable

---

### The Pareto Principle (80/20 Rule)

**80% of results come from 20% of efforts.** This applies everywhere:
- 20% of your clients generate 80% of revenue
- 20% of your study material covers 80% of the exam
- 20% of your habits create 80% of your happiness

**Action step:** Identify your vital 20% and ruthlessly prioritize it.

---

### Beating Procrastination

<div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-amber-800 dark:text-amber-200">The Procrastination Equation</p>
  <p className="text-amber-700 dark:text-amber-300 mt-2"><strong>Motivation = (Expectancy × Value) / (Impulsiveness × Delay)</strong></p>
  <ul className="mt-2 text-amber-700 dark:text-amber-300 space-y-1">
    <li><strong>Increase Expectancy:</strong> Break tasks into small wins you know you can accomplish</li>
    <li><strong>Increase Value:</strong> Connect tasks to your identity ("I'm the kind of person who...")</li>
    <li><strong>Decrease Impulsiveness:</strong> Remove distractions (phone in another room, website blockers)</li>
    <li><strong>Decrease Delay:</strong> Set shorter deadlines, use Pomodoro technique</li>
  </ul>
</div>

### Practical Techniques
1. **2-Minute Rule:** If it takes less than 2 minutes, do it now
2. **Eat the Frog:** Do the hardest task first thing in the morning
3. **Pomodoro:** 25 min work + 5 min break. After 4 cycles, take 15-30 min break
4. **Weekly Review:** Every Sunday, review your week and plan the next one
5. **Time Audit:** Track your time for 3 days to see where it actually goes`,

        de: `## Zeitmanagement: Meistere deine Stunden

### Die Wahrheit über Zeit
Jeder hat die gleichen 24 Stunden. Der Unterschied liegt nicht in der Zeit – sondern in den **Prioritäten**. Zeitmanagement ist eigentlich **Energiemanagement** und **Entscheidungsmanagement**.

---

### Die Eisenhower-Matrix

Benannt nach Präsident Dwight D. Eisenhower: *„Was wichtig ist, ist selten dringend, und was dringend ist, ist selten wichtig."*

<div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg my-4">
  <table className="w-full border-collapse">
    <thead><tr>
      <th className="border p-2 bg-slate-200 dark:bg-slate-700"></th>
      <th className="border p-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200">DRINGEND</th>
      <th className="border p-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200">NICHT DRINGEND</th>
    </tr></thead>
    <tbody>
      <tr>
        <td className="border p-2 bg-red-100 dark:bg-red-900/30 font-bold text-red-800 dark:text-red-200">WICHTIG</td>
        <td className="border p-2 bg-red-50 dark:bg-red-900/20"><strong>SOFORT ERLEDIGEN</strong><br/>Krisen, Deadlines, Notfälle</td>
        <td className="border p-2 bg-blue-50 dark:bg-blue-900/20"><strong>EINPLANEN</strong><br/>Planung, Lernen, Beziehungen, Gesundheit</td>
      </tr>
      <tr>
        <td className="border p-2 bg-green-100 dark:bg-green-900/30 font-bold text-green-800 dark:text-green-200">NICHT WICHTIG</td>
        <td className="border p-2 bg-yellow-50 dark:bg-yellow-900/20"><strong>DELEGIEREN</strong><br/>Unterbrechungen, manche E-Mails/Meetings</td>
        <td className="border p-2 bg-slate-100 dark:bg-slate-700/50"><strong>ELIMINIEREN</strong><br/>Social Media, Beschäftigungstherapie, Zeitverschwender</td>
      </tr>
    </tbody>
  </table>
</div>

**Schlüsselerkenntnis:** Die meisten Menschen leben in Quadrant 1 (Feuerlöschen) und Quadrant 4 (Ablenkungen). Das Ziel ist, mehr Zeit in **Quadrant 2** zu verbringen – wichtig, aber nicht dringend. Hier passiert Wachstum.

---

### Time Blocking

Time Blocking bedeutet, **jede Stunde** deines Tages im Voraus zu planen. Statt einer To-Do-Liste hast du einen zeitblockierten Kalender.

**So funktioniert Time Blocking:**
1. **Identifiziere deine Spitzenzeiten:** Wann bist du am fokussiertesten? (Meist morgens)
2. **Blocke Deep Work zuerst:** 2-4 Stunden-Blöcke für deine wichtigsten Aufgaben
3. **Ähnliches bündeln:** Alle E-Mails um 10 und 15 Uhr. Alle Anrufe um 14 Uhr.
4. **Pufferzeit einplanen:** 15-30 Min. zwischen Blöcken für Übergänge
5. **Blöcke schützen:** Behandle sie wie Termine – nicht verhandelbar

---

### Das Pareto-Prinzip (80/20-Regel)

**80% der Ergebnisse kommen von 20% der Anstrengungen.** Das gilt überall:
- 20% deiner Kunden generieren 80% des Umsatzes
- 20% deines Lernmaterials deckt 80% der Prüfung ab
- 20% deiner Gewohnheiten erzeugen 80% deines Glücks

**Handlungsschritt:** Identifiziere deine entscheidenden 20% und priorisiere sie konsequent.

---

### Prokrastination besiegen

<div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-amber-800 dark:text-amber-200">Die Prokrastinations-Gleichung</p>
  <p className="text-amber-700 dark:text-amber-300 mt-2"><strong>Motivation = (Erwartung × Wert) / (Impulsivität × Verzögerung)</strong></p>
  <ul className="mt-2 text-amber-700 dark:text-amber-300 space-y-1">
    <li><strong>Erwartung erhöhen:</strong> Teile Aufgaben in kleine Erfolge, die du sicher schaffen kannst</li>
    <li><strong>Wert erhöhen:</strong> Verbinde Aufgaben mit deiner Identität ("Ich bin jemand, der...")</li>
    <li><strong>Impulsivität senken:</strong> Ablenkungen entfernen (Handy in anderen Raum, Website-Blocker)</li>
    <li><strong>Verzögerung senken:</strong> Kürzere Deadlines setzen, Pomodoro-Technik nutzen</li>
  </ul>
</div>

### Praktische Techniken
1. **2-Minuten-Regel:** Dauert es weniger als 2 Minuten, erledige es sofort
2. **Eat the Frog:** Erledige die schwerste Aufgabe als Erstes am Morgen
3. **Pomodoro:** 25 Min. Arbeit + 5 Min. Pause. Nach 4 Zyklen 15-30 Min. Pause
4. **Wochenrückblick:** Jeden Sonntag die Woche reflektieren und die nächste planen
5. **Zeit-Audit:** Tracke 3 Tage lang deine Zeit, um zu sehen, wohin sie wirklich geht`
    },
    task: {
        en: {
            title: 'Master Your Time',
            description: 'Apply these time management techniques this week.',
            checklist: [
                { text: 'Categorize your current to-do list using the Eisenhower Matrix' },
                { text: 'Time block tomorrow\'s schedule in advance' },
                { text: 'Identify your top 20% tasks using the Pareto principle' },
                { text: 'Try Pomodoro for one focused work session' }
            ]
        },
        de: {
            title: 'Meistere deine Zeit',
            description: 'Wende diese Zeitmanagement-Techniken diese Woche an.',
            checklist: [
                { text: 'Kategorisiere deine aktuelle To-Do-Liste mit der Eisenhower-Matrix' },
                { text: 'Plane den morgigen Tag mit Time Blocking im Voraus' },
                { text: 'Identifiziere deine Top 20% Aufgaben mit dem Pareto-Prinzip' },
                { text: 'Probiere Pomodoro für eine fokussierte Arbeitssession' }
            ]
        }
    },
    exercises: [
        { id: 'time-audit', title: { en: 'Time Audit', de: 'Zeit-Audit' }, description: { en: 'Track every 30-minute block for 3 days. Categorize: productive, neutral, wasteful.', de: 'Tracke jeden 30-Minuten-Block für 3 Tage. Kategorisiere: produktiv, neutral, verschwendet.' } }
    ],
    notes: {
        en: [
            { front: 'Eisenhower Matrix', back: 'Urgent+Important: Do. Important+Not Urgent: Schedule. Urgent+Not Important: Delegate. Neither: Eliminate.' },
            { front: 'Pareto Principle', back: '80% of results come from 20% of efforts. Find your vital 20%.' },
            { front: 'Procrastination Fix', back: 'Break tasks small, remove distractions, shorten deadlines, eat the frog first.' }
        ],
        de: [
            { front: 'Eisenhower-Matrix', back: 'Dringend+Wichtig: Tun. Wichtig+Nicht dringend: Planen. Dringend+Nicht wichtig: Delegieren. Keines: Eliminieren.' },
            { front: 'Pareto-Prinzip', back: '80% der Ergebnisse kommen von 20% der Anstrengungen. Finde deine wichtigsten 20%.' },
            { front: 'Prokrastination besiegen', back: 'Aufgaben zerteilen, Ablenkungen entfernen, Deadlines kürzen, Frosch zuerst essen.' }
        ]
    }
};
