import React from 'react';

export const sleepLesson = {
  id: 'g1_m5_sleep',
  title: { 
    en: '5.1 Sleep & Recovery', 
    de: '5.1 Schlaf & Erholung' 
  },
  description: { 
    en: 'Muscles grow while you sleep, not while you train. How to optimize recovery.', 
    de: 'Muskeln wachsen im Schlaf, nicht im Training. Wie du die Erholung optimierst.' 
  },
  category: 'recovery',
  
  content: {
    de: `
### Modul 5.1: Schlaf (Der wichtigste Faktor)

Du kannst perfekt trainieren und perfekt essen – wenn du nur 4 Stunden schläfst, wirst du keine Muskeln aufbauen (und fett werden).

**Warum?**
1.  **Wachstumshormone (HGH):** Werden fast ausschließlich im Tiefschlaf ausgeschüttet.
2.  **Cortisol (Stress):** Schlafmangel erhöht Cortisol. Cortisol baut Muskeln ab und speichert Fett.
3.  **ZNS-Erholung:** Dein Gehirn und Nervensystem (das die Muskeln steuert) regeneriert im Schlaf.

---

### Wie viel Schlaf?
*   **Ziel:** 7-9 Stunden pro Nacht.
*   *Profis (Lebron James, CR7) schlafen oft 10-12 Stunden.*

---

### Schlaf-Hygiene (Besser schlafen)
1.  **Dunkelheit:** Dein Zimmer muss dunkel sein (Melatonin-Produktion).
2.  **Kühle:** 18-20 Grad sind optimal.
3.  **Kein Blaulicht:** Handy weg 30-60 Min vor dem Bett! Das blaue Licht signalisiert dem Gehirn "Es ist Tag".
4.  **Koffein-Limit:** Kein Kaffee nach 14:00 Uhr. Koffein bleibt bis zu 8 Stunden im Blut.
5.  **Routine:** Gehe immer zur gleichen Zeit ins Bett.

---

### Stress-Management
Training ist Stress für den Körper. Arbeit ist Stress. Beziehungsprobleme sind Stress.
Der Körper unterscheidet nicht zwischen "gutem" und "schlechtem" Stress. Er hat nur einen "Stress-Topf". Wenn der überläuft, wirst du krank oder verletzt dich.
*   Nimm dir Pausen.
*   Nutze Deload-Wochen (siehe Modul 3.3).
`,
    en: `
### Module 5.1: Sleep (The Most Important Factor)

You can train perfectly and eat perfectly – if you only sleep 4 hours, you won't build muscle (and get fat).

**Why?**
1.  **Growth Hormones (HGH):** Are released almost exclusively during deep sleep.
2.  **Cortisol (Stress):** Sleep deprivation raises cortisol. Cortisol breaks down muscle and stores fat.
3.  **CNS Recovery:** Your brain and nervous system (which controls muscles) regenerate during sleep.

---

### How much sleep?
*   **Goal:** 7-9 hours per night.
*   *Pros (Lebron James, CR7) often sleep 10-12 hours.*

---

### Sleep Hygiene (Sleep Better)
1.  **Darkness:** Your room must be dark (Melatonin production).
2.  **Coolness:** 18-20 degrees Celsius is optimal.
3.  **No Blue Light:** Put phone away 30-60 min before bed! Blue light signals "It's day" to the brain.
4.  **Caffeine Limit:** No coffee after 2 PM. Caffeine stays in blood for up to 8 hours.
5.  **Routine:** Go to bed at the same time.

---

### Stress Management
Training is stress for the body. Work is stress. Relationship problems are stress.
The body doesn't distinguish between "good" and "bad" stress. It only has one "stress bucket". If it overflows, you get sick or injured.
*   Take breaks.
*   Use Deload weeks (see Module 3.3).
`
  },

  task: {
    de: {
      title: 'Schlaf-Audit',
      description: 'Verbessere heute Nacht deinen Schlaf.',
      checklist: [
        { text: 'Setze einen Wecker für das Zubettgehen (z.B. 22:30 Uhr).' },
        { text: 'Lege das Handy 30 Min vorher in ein anderes Zimmer.' },
        { text: 'Mache das Schlafzimmer komplett dunkel.' },
        { text: 'Schlafe mindestens 7.5 Stunden.' }
      ]
    },
    en: {
      title: 'Sleep Audit',
      description: 'Improve your sleep tonight.',
      checklist: [
        { text: 'Set an alarm for bedtime (e.g., 10:30 PM).' },
        { text: 'Put phone in another room 30 min before.' },
        { text: 'Make the bedroom completely dark.' },
        { text: 'Sleep at least 7.5 hours.' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Wann wachsen Muskeln?',
        back: 'Im Schlaf (Erholung), nicht im Training.'
      },
      {
        front: 'Was bewirkt Cortisol (Stresshormon)?',
        back: 'Muskelabbau und Fetteinlagerung.'
      },
      {
        front: 'Wann sollte man den letzten Kaffee trinken?',
        back: 'Vor 14:00 Uhr (damit der Schlaf nicht gestört wird).'
      }
    ],
    en: [
      {
        front: 'When do muscles grow?',
        back: 'During sleep (recovery), not during training.'
      },
      {
        front: 'What does Cortisol (stress hormone) do?',
        back: 'Muscle breakdown and fat storage.'
      },
      {
        front: 'When should you drink your last coffee?',
        back: 'Before 2 PM (so sleep is not disturbed).'
      }
    ]
  }
};

