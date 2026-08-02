import React from 'react';

export const lifelongRunningLesson = {
  id: 'r8_m4_lifelong_running',
  title: { 
    en: '8.4 Lifelong Running', 
    de: '8.4 Lebenslanges Laufen' 
  },
  description: { 
    en: 'Learn to adapt running through life stages, aging gracefully as a runner, and maintaining health and joy in running for decades.', 
    de: 'Lerne, das Laufen an Lebensphasen anzupassen, würdevoll als Läufer zu altern und Gesundheit und Freude am Laufen für Jahrzehnte zu bewahren.' 
  },
  category: 'lifestyle',
  
  content: {
    de: `
### Lebenslanges Laufen: Ein Sport für immer! 🏃‍♂️

Laufen ist einer der wenigen Sportarten, die du dein ganzes Leben ausüben kannst. Von den ersten Schritten mit 30 bis zum Marathon mit 70+ - mit den richtigen Anpassungen bleibt Laufen lebenslang eine Quelle von Gesundheit und Freude.

---
### Laufen durch die Lebensphasen

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Lebensphase</th>
      <th className="border p-3 text-left">Fokus</th>
      <th className="border p-3 text-left">Anpassungen</th>
      <th className="border p-3 text-left">Typische Ziele</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>20er</strong></td>
      <td className="border p-3">Aufbau, Leistung</td>
      <td className="border p-3">Hohe Trainingskapazität, schnelle Erholung</td>
      <td className="border p-3">PBs, Wettkämpfe, Distanzen steigern</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>30er</strong></td>
      <td className="border p-3">Peak Performance</td>
      <td className="border p-3">Beste Ausdauer-Jahre, Balance mit Beruf/Familie</td>
      <td className="border p-3">Marathon, HM-PBs, Ultramarathon</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>40er</strong></td>
      <td className="border p-3">Smart trainieren</td>
      <td className="border p-3">Mehr Regeneration, Krafttraining wichtiger</td>
      <td className="border p-3">Altersklassen-Wettkämpfe, neue Distanzen</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>50er</strong></td>
      <td className="border p-3">Gesundheit erhalten</td>
      <td className="border p-3">Verletzungsprävention, Mobilität, Flexibilität</td>
      <td className="border p-3">Konsistenz, Freude, Gesundheit</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>60+</strong></td>
      <td className="border p-3">Aktiv bleiben</td>
      <td className="border p-3">Gelenkschonung, weniger Intensität, mehr Beweglichkeit</td>
      <td className="border p-3">Aktiv bleiben, Gemeinschaft, Freude</td>
    </tr>
  </tbody>
</table>

---
### Laufen & Altern

**Was passiert mit dem Alter?**
- **VO2max sinkt:** Ca. 10% pro Jahrzehnt ab 30 (Training verlangsamt!)
- **Muskelmasse:** Nimmt ab 40 ab (Sarcopenie) → Krafttraining!
- **Regeneration:** Dauert länger → Mehr Ruhetage
- **Sehnen & Bänder:** Weniger elastisch → Aufwärmen wichtiger
- **Verletzungsrisiko:** Steigt → Prävention essentiell

**Die gute Nachricht:**
- Ausdauer hält sich gut (Marathon-Bestzeiten fallen erst ab 50+ deutlich)
- Regelmäßiges Laufen verlangsamt den Alterungsprozess
- Masters-Läufer (40+) können noch PBs laufen!
- Laufen erhält Knochengesundheit, Herz-Kreislauf, mentale Fitness

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Inspirierende Fakten</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li>Fauja Singh lief einen Marathon mit 100 Jahren!</li>
    <li>Viele 70+ Läufer laufen regelmäßig Marathons</li>
    <li>Die meisten Altersklassen-Rekorde werden ständig verbessert</li>
    <li>Laufen reduziert das Risiko für Demenz, Herzkrankheiten, Diabetes</li>
  </ul>
</div>

---
### Anpassungen ab 40+

**Training:**
- **Mehr Ruhetage:** 2-3 pro Woche (statt 1-2)
- **Weniger Intensität:** 85-90% der Läufe Easy (statt 80%)
- **Krafttraining:** 2-3x pro Woche essentiell (Muskelmasse erhalten!)
- **Mobilität:** Tägliches Dehnen/Yoga
- **Aufwärmen:** Länger (15-20 Min statt 5-10)
- **Progression:** Noch langsamer steigern (5% statt 10%)

**Prävention:**
- **Regelmäßige Check-ups:** Sportärztliche Untersuchung jährlich
- **Schuhe:** Häufiger wechseln (500 km statt 800)
- **Cross-Training:** Schwimmen, Radfahren (gelenkschonend)
- **Ernährung:** Mehr Protein (1,6-2,0 g/kg), Calcium, Vitamin D

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Warnzeichen beachten</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li>Chronische Gelenkschmerzen → Arzt aufsuchen</li>
    <li>Herzrhythmusstörungen → Sofort stoppen, Kardiologe</li>
    <li>Brustschmerzen beim Laufen → Sofort stoppen, Notfall</li>
    <li>Wiederkehrende Verletzungen → Biomechanische Analyse</li>
  </ul>
</div>

---
### Laufen & Familie/Beruf

**Zeitmanagement-Strategien:**
- **Frühmorgens:** Vor Familie/Beruf laufen (5-6 Uhr)
- **Mittagspause:** Kurzlauf (30 Min) in der Pause
- **Pendel-Lauf:** Zur Arbeit laufen (Run Commute)
- **Familien-Lauf:** Mit Kindern/Partner laufen (Jogger/Buggy)
- **Effizienz:** Kürzere, intensivere Läufe statt lange Easy Runs

**Mit der Familie:**
- Kinder zum Laufen motivieren (spielerisch, nicht zwingen)
- Partner einbeziehen (gemeinsame Events)
- Lauf als "Me Time" etablieren (mentale Gesundheit)
- Flexibel sein (mal kürzer, mal gar nicht - das ist okay!)

---
### Die Philosophie des lebenslangen Laufens

**Schlüsselprinzipien:**
1. **Freude vor Leistung:** Laufen soll Spaß machen - immer
2. **Langfristigkeit:** Lieber 30 Jahre moderat als 5 Jahre extrem
3. **Anpassung:** Ziele und Erwartungen an Lebensphase anpassen
4. **Dankbarkeit:** Dankbar sein, dass der Körper laufen kann
5. **Prozess:** Den Weg genießen, nicht nur das Ziel

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">📋 Checkliste: Lebenslanges Laufen</h4>
  <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
    <p>✅ Freude am Laufen bewahren (nicht nur Leistung)</p>
    <p>✅ Auf Körper hören (Schmerz = Pause)</p>
    <p>✅ Krafttraining integrieren (besonders ab 40+)</p>
    <p>✅ Genügend Regeneration einplanen</p>
    <p>✅ Regelmäßige sportärztliche Untersuchung</p>
    <p>✅ Gemeinschaft pflegen (Laufgruppe, Events)</p>
    <p>✅ Flexibel mit Zielen umgehen</p>
    <p>✅ Dankbar sein für jeden Lauf</p>
  </div>
</div>

---
### Zusammenfassung

**Key Takeaways:**
- 🏃 **Laufen ist lebenslang** möglich - von 20 bis 80+
- 📅 **Anpassung:** Training an Lebensphase anpassen (mehr Ruhe, mehr Kraft ab 40+)
- 💪 **Krafttraining:** Ab 40 essentiell (Muskelmasse erhalten!)
- ❤️ **Freude:** Laufen soll immer Spaß machen - Leistung ist sekundär
- 👨‍👩‍👧 **Familie:** Laufen integrieren (frühmorgens, Run Commute, Familien-Lauf)
- 🙏 **Dankbarkeit:** Jeder Lauf ist ein Geschenk - genieße es!

**Laufen ist nicht ein Kapitel deines Lebens - es ist ein roter Faden, der alles verbindet.** 🌟
    `,
    en: `
### Lifelong Running: A Sport Forever! 🏃‍♂️

Running is one of the few sports you can do your entire life. From first steps at 30 to marathons at 70+ - with the right adjustments, running remains a lifelong source of health and joy.

---
### Running Through Life Stages

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Life Stage</th>
      <th className="border p-3 text-left">Focus</th>
      <th className="border p-3 text-left">Adjustments</th>
      <th className="border p-3 text-left">Typical Goals</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>20s</strong></td>
      <td className="border p-3">Building, performance</td>
      <td className="border p-3">High training capacity, fast recovery</td>
      <td className="border p-3">PBs, races, increase distances</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>30s</strong></td>
      <td className="border p-3">Peak performance</td>
      <td className="border p-3">Best endurance years, balance work/family</td>
      <td className="border p-3">Marathon, HM PBs, ultra</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>40s</strong></td>
      <td className="border p-3">Train smart</td>
      <td className="border p-3">More recovery, strength training more important</td>
      <td className="border p-3">Age group races, new distances</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>50s</strong></td>
      <td className="border p-3">Maintain health</td>
      <td className="border p-3">Injury prevention, mobility, flexibility</td>
      <td className="border p-3">Consistency, joy, health</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>60+</strong></td>
      <td className="border p-3">Stay active</td>
      <td className="border p-3">Joint protection, less intensity, more mobility</td>
      <td className="border p-3">Stay active, community, joy</td>
    </tr>
  </tbody>
</table>

---
### Running & Aging

**What Happens with Age?**
- **VO2max declines:** ~10% per decade from 30 (training slows it!)
- **Muscle mass:** Decreases from 40 (sarcopenia) → strength training!
- **Recovery:** Takes longer → more rest days
- **Tendons & ligaments:** Less elastic → warm-up more important
- **Injury risk:** Increases → prevention essential

**The Good News:**
- Endurance holds up well (marathon times only drop significantly from 50+)
- Regular running slows the aging process
- Masters runners (40+) can still set PBs!
- Running maintains bone health, cardiovascular fitness, mental fitness

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Inspiring Facts</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li>Fauja Singh ran a marathon at age 100!</li>
    <li>Many 70+ runners regularly run marathons</li>
    <li>Most age group records are constantly being improved</li>
    <li>Running reduces risk of dementia, heart disease, diabetes</li>
  </ul>
</div>

---
### Adjustments from 40+

**Training:**
- **More rest days:** 2-3 per week (instead of 1-2)
- **Less intensity:** 85-90% of runs easy (instead of 80%)
- **Strength training:** 2-3x per week essential (maintain muscle!)
- **Mobility:** Daily stretching/yoga
- **Warm-up:** Longer (15-20 min instead of 5-10)
- **Progression:** Even slower increases (5% instead of 10%)

**Prevention:**
- **Regular check-ups:** Annual sports medical exam
- **Shoes:** Replace more often (500 km instead of 800)
- **Cross-training:** Swimming, cycling (low impact)
- **Nutrition:** More protein (1.6-2.0 g/kg), calcium, vitamin D

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Warning Signs to Watch</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li>Chronic joint pain → see doctor</li>
    <li>Heart rhythm irregularities → stop immediately, cardiologist</li>
    <li>Chest pain while running → stop immediately, emergency</li>
    <li>Recurring injuries → biomechanical analysis</li>
  </ul>
</div>

---
### Running & Family/Career

**Time Management Strategies:**
- **Early morning:** Run before family/work (5-6 AM)
- **Lunch break:** Short run (30 min) during break
- **Run commute:** Run to work
- **Family run:** Run with kids/partner (jogger/stroller)
- **Efficiency:** Shorter, intense runs instead of long easy runs

**With Family:**
- Motivate kids to run (playful, not forced)
- Include partner (shared events)
- Establish running as "me time" (mental health)
- Be flexible (sometimes shorter, sometimes nothing - that's okay!)

---
### The Philosophy of Lifelong Running

**Key Principles:**
1. **Joy over performance:** Running should be fun - always
2. **Long-term:** Better 30 years moderate than 5 years extreme
3. **Adaptation:** Adjust goals and expectations to life stage
4. **Gratitude:** Be grateful that your body can run
5. **Process:** Enjoy the journey, not just the destination

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">📋 Checklist: Lifelong Running</h4>
  <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
    <p>✅ Preserve joy in running (not just performance)</p>
    <p>✅ Listen to body (pain = pause)</p>
    <p>✅ Integrate strength training (especially from 40+)</p>
    <p>✅ Plan enough recovery</p>
    <p>✅ Regular sports medical check-up</p>
    <p>✅ Maintain community (running group, events)</p>
    <p>✅ Be flexible with goals</p>
    <p>✅ Be grateful for every run</p>
  </div>
</div>

---
### Summary

**Key Takeaways:**
- 🏃 **Running is lifelong** possible - from 20 to 80+
- 📅 **Adaptation:** Adjust training to life stage (more rest, more strength from 40+)
- 💪 **Strength training:** Essential from 40 (maintain muscle mass!)
- ❤️ **Joy:** Running should always be fun - performance is secondary
- 👨‍👩‍👧 **Family:** Integrate running (early morning, run commute, family run)
- 🙏 **Gratitude:** Every run is a gift - enjoy it!

**Running isn't a chapter of your life - it's a thread that connects everything.** 🌟
    `
  },

  task: {
    de: {
      title: 'Langfristigen Laufplan erstellen',
      description: 'Erstelle einen nachhaltigen Plan für lebenslanges Laufen.',
      checklist: [
        { text: 'Aktuelle Lebensphase reflektieren: Welche Anpassungen brauche ich?' },
        { text: 'Krafttraining 2x diese Woche integrieren' },
        { text: 'Zeitmanagement: Laufzeiten in den Wochenplan einbauen' },
        { text: 'Sportärztlichen Check-up planen (falls >1 Jahr her)' },
        { text: 'Langfristiges Ziel definieren (nicht nur Performance!)' },
        { text: '"Dankbarkeits-Lauf": Bewusst genießen, ohne Uhr/Tempo' }
      ]
    },
    en: {
      title: 'Create Long-term Running Plan',
      description: 'Create a sustainable plan for lifelong running.',
      checklist: [
        { text: 'Reflect on current life stage: What adjustments do I need?' },
        { text: 'Integrate strength training 2x this week' },
        { text: 'Time management: Build running times into weekly schedule' },
        { text: 'Schedule sports medical check-up (if >1 year ago)' },
        { text: 'Define long-term goal (not just performance!)' },
        { text: '"Gratitude run": Consciously enjoy, no watch/pace' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Anpassungen ab 40+?',
        back: 'Mehr Ruhetage (2-3/Woche), Krafttraining 2-3x/Woche, längeres Aufwärmen, langsamere Steigerung (5%), mehr Mobilität, regelmäßige Check-ups.'
      },
      {
        front: 'Laufen & Altern?',
        back: 'VO2max sinkt ~10%/Jahrzehnt, Muskelmasse nimmt ab 40 ab (Krafttraining!), Regeneration dauert länger. ABER: Laufen verlangsamt Alterung, Marathon mit 70+ möglich!'
      },
      {
        front: 'Philosophie des lebenslangen Laufens?',
        back: 'Freude vor Leistung, Langfristigkeit (30 Jahre moderat > 5 Jahre extrem), Anpassung an Lebensphasen, Dankbarkeit für jeden Lauf, Prozess genießen.'
      }
    ],
    en: [
      {
        front: 'Adjustments from 40+?',
        back: 'More rest days (2-3/week), strength training 2-3x/week, longer warm-up, slower progression (5%), more mobility, regular check-ups.'
      },
      {
        front: 'Running & aging?',
        back: 'VO2max drops ~10%/decade, muscle mass decreases from 40 (strength training!), recovery takes longer. BUT: Running slows aging, marathon at 70+ possible!'
      },
      {
        front: 'Philosophy of lifelong running?',
        back: 'Joy over performance, long-term (30 years moderate > 5 years extreme), adapt to life stages, gratitude for every run, enjoy the process.'
      }
    ]
  }
};
