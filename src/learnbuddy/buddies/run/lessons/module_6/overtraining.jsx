import React from 'react';

export const overtrainingLesson = {
  id: 'r6_m3_overtraining',
  title: { 
    en: '6.3 Overtraining - Recognizing & Preventing It', 
    de: '6.3 Übertraining - Erkennen & Vermeiden' 
  },
  description: { 
    en: 'Learn to identify overtraining syndrome, understand its warning signs, and implement strategies for prevention and recovery.', 
    de: 'Lerne das Übertrainingssyndrom zu erkennen, verstehe die Warnsignale und setze Strategien zur Prävention und Erholung um.' 
  },
  category: 'recovery',
  
  content: {
    de: `
### Übertraining: Wenn mehr Training weniger bringt! 🚨

Übertraining ist der größte Feind des ambitionierten Läufers. Der Körper kann sich nicht mehr erholen, Performance sinkt trotz mehr Training. Dieser Modul zeigt Warnsignale, Ursachen und wie du das Übertrainingssyndrom vermeidest.

---
### Was ist Übertraining?

**Definition:**
- Übertraining (Overtraining Syndrome, OTS) = chronisches Ungleichgewicht zwischen Training und Erholung
- Der Körper kann sich nicht mehr anpassen
- Performance sinkt trotz gleichem oder mehr Training
- **Nicht zu verwechseln mit:** Normaler Müdigkeit nach hartem Training (das ist Overreaching und erholt sich in 1-2 Wochen)

**Der Unterschied:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Zustand</th>
      <th className="border p-3 text-left">Dauer</th>
      <th className="border p-3 text-left">Erholung</th>
      <th className="border p-3 text-left">Gefahr</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Normales Training</strong></td>
      <td className="border p-3">1-2 Tage Müdigkeit</td>
      <td className="border p-3">Ruhetag reicht</td>
      <td className="border p-3">Keine</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Functional Overreaching</strong></td>
      <td className="border p-3">1-2 Wochen</td>
      <td className="border p-3">Deload-Woche</td>
      <td className="border p-3">Gering</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Non-Functional Overreaching</strong></td>
      <td className="border p-3">2-4 Wochen</td>
      <td className="border p-3">2-4 Wochen Pause</td>
      <td className="border p-3">Mittel</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Übertraining (OTS)</strong></td>
      <td className="border p-3">Monate bis Jahre</td>
      <td className="border p-3">Wochen bis Monate Pause</td>
      <td className="border p-3">Hoch</td>
    </tr>
  </tbody>
</table>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Wichtig</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Übertraining entwickelt sich schleichend! Die meisten Läufer bemerken es erst, wenn es zu spät ist. Prävention ist viel einfacher als Behandlung.
  </p>
</div>

---
### Warnsignale des Übertrainings

**Körperliche Symptome:**
- **Leistungsabfall:** Trotz hartem Training wird man langsamer
- **Chronische Müdigkeit:** Müde trotz ausreichend Schlaf
- **Erhöhte Ruheherzfrequenz:** +5-10 bpm über Baseline
- **Häufige Krankheiten:** Erkältungen, Infekte (Immunsystem geschwächt)
- **Anhaltender Muskelkater:** Erholung dauert ungewöhnlich lang
- **Schlafstörungen:** Einschlaf-/Durchschlafprobleme trotz Müdigkeit
- **Gewichtsverlust:** Ungewollter Gewichtsverlust
- **Verletzungsanfälligkeit:** Immer wieder kleine Verletzungen

**Psychische Symptome:**
- **Lustlosigkeit:** Keine Motivation zum Laufen
- **Reizbarkeit:** Schnell genervt, schlechte Laune
- **Konzentrationsprobleme:** Schwierigkeiten bei der Arbeit/Schule
- **Depressive Verstimmung:** Anhaltend niedergeschlagen
- **Appetitlosigkeit:** Kein Hunger trotz Training

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Selbst-Check: Bin ich übertrainiert?</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
    Beantworte ehrlich (3+ Ja = Warnsignal):
  </p>
  <ul className="list-disc list-inside space-y-2 text-sm text-blue-700 dark:text-blue-300">
    <li>Bin ich trotz ausreichend Schlaf chronisch müde?</li>
    <li>Ist meine Ruheherzfrequenz erhöht (+5 bpm)?</li>
    <li>Werde ich schlechter statt besser?</li>
    <li>Habe ich keine Lust mehr aufs Laufen?</li>
    <li>Bin ich häufiger krank als sonst?</li>
    <li>Schlafe ich schlecht trotz Müdigkeit?</li>
    <li>Habe ich immer wieder kleine Verletzungen?</li>
  </ul>
</div>

---
### Ursachen von Übertraining

**Trainingsfehler:**
- **Zu viel Volumen:** Zu viele Kilometer pro Woche
- **Zu viel Intensität:** Zu viele harte Einheiten (Intervalle, Tempo)
- **Zu schnelle Steigerung:** 10%-Regel missachtet
- **Zu wenig Ruhetage:** Jeden Tag Training
- **Keine Deload-Wochen:** Monatelang ohne Pause

**Lebensstil-Faktoren:**
- **Schlafmangel:** <7 Stunden/Nacht
- **Stress:** Beruf, Familie, Finanzen
- **Schlechte Ernährung:** Zu wenig Kalorien, Nährstoffmangel
- **Kein Ausgleich:** Nur Laufen, kein Sozialleben

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">💡 Die Stress-Schüssel</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
    Stell dir deinen Körper als Schüssel vor. Verschiedene Stressquellen füllen sie:
  </p>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li><strong>Training:</strong> Laufen, Krafttraining, Cross-Training</li>
    <li><strong>Arbeit:</strong> Deadlines, Meetings, Druck</li>
    <li><strong>Privat:</strong> Beziehung, Familie, Finanzen</li>
    <li><strong>Schlafmangel:</strong> Weniger Erholung = mehr Stress</li>
  </ul>
  <p className="text-sm text-amber-700 dark:text-amber-300 mt-3">
    Wenn die Schüssel überläuft = Übertraining. Reduziere EINE Quelle, wenn andere steigen!
  </p>
</div>

---
### Prävention: So vermeidest du Übertraining

**Die 80/20-Regel:**
- 80% deiner Läufe im Easy-Tempo (Zone 2)
- Nur 20% intensiv (Intervalle, Tempo, Wettkämpfe)
- Mehr Easy Runs = bessere Regeneration = mehr Fortschritt

**Trainingssteuerung:**
- **10%-Regel:** Max. 10% Steigerung pro Woche
- **Deload-Wochen:** Alle 3-4 Wochen Volumen um 40-50% reduzieren
- **Ruhetage:** Mindestens 1-2 pro Woche (nicht verhandelbar!)
- **Periodisierung:** Zyklen aus Aufbau und Erholung

**Monitoring:**
- **Ruheherzfrequenz:** Jeden Morgen messen (Baseline kennen!)
- **HRV:** Heart Rate Variability tracken (App: HRV4Training)
- **Lauf-Tagebuch:** Müdigkeit, Motivation, Schlaf, Stimmung notieren
- **Performance:** Zeiten tracken (Abfall = Warnsignal)

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Indikator</th>
      <th className="border p-3 text-left">Normal</th>
      <th className="border p-3 text-left">Warnsignal</th>
      <th className="border p-3 text-left">Aktion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Ruheherzfrequenz</strong></td>
      <td className="border p-3">Baseline ±2 bpm</td>
      <td className="border p-3">+5-10 bpm</td>
      <td className="border p-3">Ruhetag oder Easy Run</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Schlafqualität</strong></td>
      <td className="border p-3">Gut, durchschlafen</td>
      <td className="border p-3">Schlecht trotz Müdigkeit</td>
      <td className="border p-3">Training reduzieren</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Motivation</strong></td>
      <td className="border p-3">Freude am Laufen</td>
      <td className="border p-3">Kein Bock, Zwang</td>
      <td className="border p-3">Deload-Woche</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Performance</strong></td>
      <td className="border p-3">Stabil oder besser</td>
      <td className="border p-3">Abfall trotz Training</td>
      <td className="border p-3">2 Wochen Pause</td>
    </tr>
  </tbody>
</table>

---
### Behandlung: Was tun bei Übertraining?

**Sofortmaßnahmen:**
1. **Training stoppen oder drastisch reduzieren** (nur Easy Runs oder komplett Pause)
2. **Schlaf priorisieren** (8-9 Stunden/Nacht, Power Naps)
3. **Ernährung optimieren** (mehr Kalorien, Nährstoffe)
4. **Stress reduzieren** (andere Stressquellen minimieren)

**Erholungsplan:**

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🔄 Übertraining-Erholungsplan</h4>
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <p><strong>Woche 1-2:</strong> Komplett Pause oder nur Spazieren (30 Min/Tag)</p>
    <p><strong>Woche 3-4:</strong> Leichte Bewegung: Yoga, Schwimmen, kurze Easy Runs (20 Min)</p>
    <p><strong>Woche 5-6:</strong> Langsam zurück: 3x/Woche Easy Run (30 Min), kein Tempo</p>
    <p><strong>Ab Woche 7:</strong> Normales Training wieder aufbauen (50% des früheren Volumens, langsam steigern)</p>
  </div>
</div>

**Wann zum Arzt?**
- Symptome länger als 4 Wochen trotz Pause
- Depressive Verstimmung
- Hormonelle Veränderungen (Frauen: Ausbleiben der Periode)
- Stressfraktur-Verdacht

---
### Zusammenfassung

**Key Takeaways:**
- 🚨 **Übertraining** = chronisches Ungleichgewicht Training vs. Erholung
- 📉 **Warnsignale:** Leistungsabfall, Müdigkeit, Lustlosigkeit, erhöhte Ruheherzfrequenz
- 🔑 **Prävention:** 80/20-Regel, 10%-Steigerung, Deload-Wochen, Ruhetage
- 📊 **Monitoring:** Ruheherzfrequenz, HRV, Lauf-Tagebuch
- 🛑 **Bei Verdacht:** Training sofort reduzieren, Schlaf und Ernährung priorisieren
- ⏰ **Erholung:** Kann Wochen bis Monate dauern - Geduld ist essentiell

**Merke dir:** Mehr ist nicht immer besser! Der kluge Läufer trainiert smart, nicht nur hart. 🧠
    `,
    en: `
### Overtraining: When More Training Means Less Progress! 🚨

Overtraining is the ambitious runner's greatest enemy. The body can't recover anymore, performance drops despite more training. This module covers warning signs, causes, and how to avoid overtraining syndrome.

---
### What is Overtraining?

**Definition:**
- Overtraining Syndrome (OTS) = chronic imbalance between training and recovery
- Body can no longer adapt
- Performance drops despite same or more training
- **Not to be confused with:** Normal fatigue after hard training (that's overreaching and recovers in 1-2 weeks)

**The Difference:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Condition</th>
      <th className="border p-3 text-left">Duration</th>
      <th className="border p-3 text-left">Recovery</th>
      <th className="border p-3 text-left">Risk</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Normal Training</strong></td>
      <td className="border p-3">1-2 days fatigue</td>
      <td className="border p-3">Rest day is enough</td>
      <td className="border p-3">None</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Functional Overreaching</strong></td>
      <td className="border p-3">1-2 weeks</td>
      <td className="border p-3">Deload week</td>
      <td className="border p-3">Low</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Non-Functional Overreaching</strong></td>
      <td className="border p-3">2-4 weeks</td>
      <td className="border p-3">2-4 weeks break</td>
      <td className="border p-3">Medium</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Overtraining (OTS)</strong></td>
      <td className="border p-3">Months to years</td>
      <td className="border p-3">Weeks to months break</td>
      <td className="border p-3">High</td>
    </tr>
  </tbody>
</table>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Important</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Overtraining develops gradually! Most runners don't notice until it's too late. Prevention is much easier than treatment.
  </p>
</div>

---
### Warning Signs of Overtraining

**Physical Symptoms:**
- **Performance decline:** Getting slower despite hard training
- **Chronic fatigue:** Tired despite adequate sleep
- **Elevated resting heart rate:** +5-10 bpm above baseline
- **Frequent illness:** Colds, infections (weakened immune system)
- **Persistent soreness:** Recovery takes unusually long
- **Sleep disturbances:** Trouble falling/staying asleep despite tiredness
- **Weight loss:** Unintended weight loss
- **Injury prone:** Recurring small injuries

**Psychological Symptoms:**
- **Lack of motivation:** No desire to run
- **Irritability:** Easily annoyed, bad mood
- **Concentration problems:** Difficulty at work/school
- **Depressed mood:** Persistently down
- **Loss of appetite:** No hunger despite training

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Self-Check: Am I Overtrained?</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
    Answer honestly (3+ Yes = warning sign):
  </p>
  <ul className="list-disc list-inside space-y-2 text-sm text-blue-700 dark:text-blue-300">
    <li>Am I chronically tired despite enough sleep?</li>
    <li>Is my resting heart rate elevated (+5 bpm)?</li>
    <li>Am I getting worse instead of better?</li>
    <li>Have I lost motivation for running?</li>
    <li>Am I sick more often than usual?</li>
    <li>Am I sleeping poorly despite being tired?</li>
    <li>Do I keep getting small injuries?</li>
  </ul>
</div>

---
### Causes of Overtraining

**Training Errors:**
- **Too much volume:** Too many kilometers per week
- **Too much intensity:** Too many hard sessions (intervals, tempo)
- **Too rapid progression:** 10% rule ignored
- **Too few rest days:** Training every day
- **No deload weeks:** Months without a break

**Lifestyle Factors:**
- **Sleep deprivation:** <7 hours/night
- **Stress:** Work, family, finances
- **Poor nutrition:** Too few calories, nutrient deficiency
- **No balance:** Only running, no social life

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">💡 The Stress Bucket</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
    Think of your body as a bucket. Different stress sources fill it:
  </p>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li><strong>Training:</strong> Running, strength training, cross-training</li>
    <li><strong>Work:</strong> Deadlines, meetings, pressure</li>
    <li><strong>Personal:</strong> Relationship, family, finances</li>
    <li><strong>Sleep deficit:</strong> Less recovery = more stress</li>
  </ul>
  <p className="text-sm text-amber-700 dark:text-amber-300 mt-3">
    When the bucket overflows = overtraining. Reduce ONE source when others increase!
  </p>
</div>

---
### Prevention: How to Avoid Overtraining

**The 80/20 Rule:**
- 80% of your runs at easy pace (Zone 2)
- Only 20% intense (intervals, tempo, races)
- More easy runs = better recovery = more progress

**Training Management:**
- **10% Rule:** Max 10% increase per week
- **Deload Weeks:** Every 3-4 weeks reduce volume by 40-50%
- **Rest Days:** At least 1-2 per week (non-negotiable!)
- **Periodization:** Cycles of building and recovery

**Monitoring:**
- **Resting Heart Rate:** Measure every morning (know your baseline!)
- **HRV:** Track Heart Rate Variability (app: HRV4Training)
- **Running Journal:** Note fatigue, motivation, sleep, mood
- **Performance:** Track times (decline = warning sign)

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Indicator</th>
      <th className="border p-3 text-left">Normal</th>
      <th className="border p-3 text-left">Warning Sign</th>
      <th className="border p-3 text-left">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Resting HR</strong></td>
      <td className="border p-3">Baseline ±2 bpm</td>
      <td className="border p-3">+5-10 bpm</td>
      <td className="border p-3">Rest day or easy run</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Sleep Quality</strong></td>
      <td className="border p-3">Good, sleep through</td>
      <td className="border p-3">Poor despite tiredness</td>
      <td className="border p-3">Reduce training</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Motivation</strong></td>
      <td className="border p-3">Enjoy running</td>
      <td className="border p-3">No desire, forced</td>
      <td className="border p-3">Deload week</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Performance</strong></td>
      <td className="border p-3">Stable or improving</td>
      <td className="border p-3">Decline despite training</td>
      <td className="border p-3">2 weeks break</td>
    </tr>
  </tbody>
</table>

---
### Treatment: What to Do with Overtraining

**Immediate Actions:**
1. **Stop or drastically reduce training** (only easy runs or complete rest)
2. **Prioritize sleep** (8-9 hours/night, power naps)
3. **Optimize nutrition** (more calories, nutrients)
4. **Reduce stress** (minimize other stress sources)

**Recovery Plan:**

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🔄 Overtraining Recovery Plan</h4>
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <p><strong>Week 1-2:</strong> Complete rest or only walking (30 min/day)</p>
    <p><strong>Week 3-4:</strong> Light movement: yoga, swimming, short easy runs (20 min)</p>
    <p><strong>Week 5-6:</strong> Slowly return: 3x/week easy run (30 min), no tempo</p>
    <p><strong>From Week 7:</strong> Rebuild normal training (50% of former volume, increase gradually)</p>
  </div>
</div>

**When to See a Doctor?**
- Symptoms longer than 4 weeks despite rest
- Depressed mood
- Hormonal changes (women: missed periods)
- Suspected stress fracture

---
### Summary

**Key Takeaways:**
- 🚨 **Overtraining** = chronic imbalance training vs. recovery
- 📉 **Warning signs:** Performance decline, fatigue, lack of motivation, elevated resting HR
- 🔑 **Prevention:** 80/20 rule, 10% progression, deload weeks, rest days
- 📊 **Monitoring:** Resting heart rate, HRV, running journal
- 🛑 **If suspected:** Reduce training immediately, prioritize sleep and nutrition
- ⏰ **Recovery:** Can take weeks to months - patience is essential

**Remember:** More is not always better! The smart runner trains smart, not just hard. 🧠
    `
  },

  task: {
    de: {
      title: 'Übertraining-Monitoring starten',
      description: 'Starte ein systematisches Monitoring, um Übertraining frühzeitig zu erkennen.',
      checklist: [
        { text: 'Ruheherzfrequenz 7 Tage morgens messen (Baseline)' },
        { text: '80/20-Regel prüfen: Wie viele harte vs. easy Einheiten pro Woche?' },
        { text: 'Lauf-Tagebuch führen: Müdigkeit (1-10), Motivation (1-10)' },
        { text: 'Deload-Woche einplanen (Volumen 40-50% reduzieren)' },
        { text: 'Schlaf tracken: Dauer und Qualität notieren' },
        { text: 'Selbst-Check durchführen: 7 Warnsignal-Fragen beantworten' }
      ]
    },
    en: {
      title: 'Start Overtraining Monitoring',
      description: 'Start systematic monitoring to detect overtraining early.',
      checklist: [
        { text: 'Measure resting heart rate for 7 mornings (baseline)' },
        { text: 'Check 80/20 rule: How many hard vs. easy sessions per week?' },
        { text: 'Keep running journal: Fatigue (1-10), Motivation (1-10)' },
        { text: 'Schedule deload week (reduce volume 40-50%)' },
        { text: 'Track sleep: Note duration and quality' },
        { text: 'Do self-check: Answer 7 warning sign questions' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was ist Übertraining?',
        back: 'Chronisches Ungleichgewicht zwischen Training und Erholung. Performance sinkt trotz Training. Erholung dauert Wochen bis Monate.'
      },
      {
        front: 'Top 3 Warnsignale?',
        back: '1) Erhöhte Ruheherzfrequenz (+5 bpm), 2) Leistungsabfall trotz Training, 3) Chronische Müdigkeit und Lustlosigkeit.'
      },
      {
        front: 'Wie Übertraining vermeiden?',
        back: '80/20-Regel (80% Easy), 10%-Steigerung, Deload alle 3-4 Wochen, 1-2 Ruhetage/Woche, Monitoring (RHR, HRV).'
      }
    ],
    en: [
      {
        front: 'What is overtraining?',
        back: 'Chronic imbalance between training and recovery. Performance drops despite training. Recovery takes weeks to months.'
      },
      {
        front: 'Top 3 warning signs?',
        back: '1) Elevated resting heart rate (+5 bpm), 2) Performance decline despite training, 3) Chronic fatigue and lack of motivation.'
      },
      {
        front: 'How to prevent overtraining?',
        back: '80/20 rule (80% easy), 10% progression, deload every 3-4 weeks, 1-2 rest days/week, monitoring (RHR, HRV).'
      }
    ]
  }
};
