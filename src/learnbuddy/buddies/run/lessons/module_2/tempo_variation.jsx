import React from 'react';

export const tempoVariationLesson = {
  id: 'r2_m2_tempo',
  title: { 
    en: '2.2 Tempo Variation Introduction', 
    de: '2.2 Tempo-Variation (Einführung)' 
  },
  description: { 
    en: 'Learn why different paces matter and how to incorporate Easy Runs and Tempo Runs into your training.', 
    de: 'Lerne, warum verschiedene Tempos wichtig sind und wie du Easy Runs und Tempo Runs in dein Training integrierst.' 
  },
  category: 'building',
  
  content: {
    de: `
### Tempo-Variation: Warum verschiedene Tempos? 🎯

Nicht jeder Lauf sollte gleich schnell sein! Variation im Tempo macht dich schneller, stärker und verletzungsresistenter.

---

### Warum verschiedene Tempos?

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
  <div className="p-4 bg-green-50 dark:bg-green-900/40 rounded-lg">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Easy Runs</h4>
    <p className="text-sm text-green-700 dark:text-green-300">
      Basisausdauer aufbauen, ohne Überlastung. <strong>80% deiner Läufe!</strong>
    </p>
  </div>
  <div className="p-4 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Tempo Runs</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      Schneller, aber kontrolliert. Verbessert aerobe Kapazität.
    </p>
  </div>
  <div className="p-4 bg-purple-50 dark:bg-purple-900/40 rounded-lg">
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Intervalle</h4>
    <p className="text-sm text-purple-700 dark:text-purple-300">
      Schnell-Langsam-Wechsel. Verbessert Geschwindigkeit & VO2max.
    </p>
  </div>
</div>

---

### Easy Run - Der wichtigste Lauf!

**80% deiner Läufe sollten Easy sein!**

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">✓ Easy Run Charakteristika</h4>
  <ul className="text-sm space-y-2 text-green-700 dark:text-green-300">
    <li><strong>Tempo:</strong> Konversationstempo (kannst du die ganze Zeit reden?)</li>
    <li><strong>Gefühl:</strong> Leicht, entspannt, kontrolliert</li>
    <li><strong>Herzfrequenz:</strong> Zone 2 (60-70% maxHF)</li>
    <li><strong>Zweck:</strong> Basisausdauer aufbauen ohne Überlastung</li>
    <li><strong>Dauer:</strong> 20-60 Minuten</li>
  </ul>
</div>

**Warum Easy Runs so wichtig sind:**

- ✅ Baut aerobe Basis auf
- ✅ Verbessert Fettverbrennung
- ✅ Reduziert Verletzungsrisiko
- ✅ Ermöglicht häufigeres Training
- ✅ Mentale Erholung

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Der häufigste Fehler</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Viele Läufer laufen ihre "Easy Runs" zu schnell! Wenn du nicht die ganze Zeit reden kannst, läufst du zu schnell. Langsamer werden!
  </p>
</div>

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Praktische Übung</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Lauf 30 Minuten im Easy-Tempo. Kannst du die ganze Zeit reden? Wenn nicht, langsamer! Easy Runs sollten sich leicht anfühlen, nicht anstrengend.
  </p>
</div>

---

### Tempo Run - Einführung

**"Comfortably Hard"** - anstrengend, aber kontrolliert.

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">✓ Tempo Run Charakteristika</h4>
  <ul className="text-sm space-y-2 text-purple-700 dark:text-purple-300">
    <li><strong>Tempo:</strong> "Comfortably Hard" - anstrengend, aber kontrolliert</li>
    <li><strong>Sprechen:</strong> Kannst du noch 1-2 Sätze sagen? Dann richtig!</li>
    <li><strong>Dauer:</strong> 20-30 Minuten kontinuierlich</li>
    <li><strong>Herzfrequenz:</strong> Zone 4 (80-90% maxHF)</li>
    <li><strong>Zweck:</strong> Verbessert aerobe Kapazität, Laktatschwelle</li>
  </ul>
</div>

**Wie fühlt sich Tempo Run an?**

- Anstrengend, aber nicht maximal
- Du könntest noch 1-2 Sätze sagen
- Kontrolliert, nicht außer Kontrolle
- Nach 20-30 Min erschöpft, aber nicht völlig kaputt

**Wann Tempo Runs?**

- 1x pro Woche (maximal!)
- Nach mindestens 10 Minuten Aufwärmen
- Nicht an aufeinanderfolgenden Tagen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Praktische Übung</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Nach 10 Min Aufwärmen: 15 Min Tempo-Run, dann 10 Min Abkühlen. Spüre den Unterschied zu Easy Run. Es sollte anstrengend sein, aber kontrolliert.
  </p>
</div>

---

### Zusammenfassung

**Die Tempo-Verteilung:**

- ✅ **80% Easy Runs:** Konversationstempo, leicht, entspannt
- ✅ **15-20% Tempo/Intervalle:** Anstrengend, kontrolliert
- ✅ **Variation ist wichtig:** Nicht jeden Lauf gleich schnell!

**Merke dir:** Easy Runs sind nicht "zu langsam" - sie sind genau richtig! Sie sind das Fundament deines Trainings.
    `,
    en: `
### Tempo Variation: Why Different Paces? 🎯

Not every run should be the same speed! Variation in pace makes you faster, stronger, and more injury-resistant.

---

### Why Different Paces?

- **Easy Runs:** Build base endurance without overload. **80% of your runs!**
- **Tempo Runs:** Faster, but controlled. Improves aerobic capacity.
- **Intervals:** Fast-slow alternation. Improves speed & VO2max.

---

### Easy Run - The Most Important Run!

**80% of your runs should be Easy!**

**Characteristics:**
- **Pace:** Conversation pace (can you talk the whole time?)
- **Feeling:** Light, relaxed, controlled
- **Heart Rate:** Zone 2 (60-70% maxHR)
- **Purpose:** Build base endurance without overload
- **Duration:** 20-60 minutes

**Why Easy Runs are so important:**

- ✅ Builds aerobic base
- ✅ Improves fat burning
- ✅ Reduces injury risk
- ✅ Enables more frequent training
- ✅ Mental recovery

---

### Tempo Run - Introduction

**"Comfortably Hard"** - strenuous, but controlled.

**Characteristics:**
- **Pace:** "Comfortably Hard" - strenuous, but controlled
- **Speaking:** Can you still say 1-2 sentences? Then it's right!
- **Duration:** 20-30 minutes continuously
- **Heart Rate:** Zone 4 (80-90% maxHR)
- **Purpose:** Improves aerobic capacity, lactate threshold

**When Tempo Runs?**

- 1x per week (maximum!)
- After at least 10 minutes warm-up
- Not on consecutive days

---

### Summary

**The Pace Distribution:**

- ✅ **80% Easy Runs:** Conversation pace, light, relaxed
- ✅ **15-20% Tempo/Intervals:** Strenuous, controlled
- ✅ **Variation is important:** Not every run the same speed!

**Remember:** Easy Runs are not "too slow" - they're exactly right! They're the foundation of your training.
    `
  },

  task: {
    de: {
      title: 'Easy Run vs. Tempo Run testen',
      description: 'Erlebe den Unterschied zwischen Easy Run und Tempo Run.',
      checklist: [
        { text: 'Lauf 1: 30 Min Easy Run - kannst du die ganze Zeit reden?' },
        { text: 'Lauf 2: 10 Min Aufwärmen, dann 15 Min Tempo Run, dann 10 Min Abkühlen' },
        { text: 'Vergleiche: Wie fühlt sich jeder Lauf an?' },
        { text: 'Notiere: Welches Tempo war Easy? Welches Tempo war Tempo?' },
        { text: 'Stelle sicher: 80% deiner Läufe sind Easy!' }
      ]
    },
    en: {
      title: 'Test Easy Run vs. Tempo Run',
      description: 'Experience the difference between Easy Run and Tempo Run.',
      checklist: [
        { text: 'Run 1: 30 min Easy Run - can you talk the whole time?' },
        { text: 'Run 2: 10 min warm-up, then 15 min Tempo Run, then 10 min cool-down' },
        { text: 'Compare: How does each run feel?' },
        { text: 'Note: Which pace was Easy? Which pace was Tempo?' },
        { text: 'Ensure: 80% of your runs are Easy!' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Wie viel Prozent der Läufe sollten Easy sein?',
        back: '80%! Easy Runs sind das Fundament des Trainings. Sie bauen Basisausdauer auf ohne Überlastung.'
      },
      {
        front: 'Was ist ein Easy Run?',
        back: 'Konversationstempo - du kannst die ganze Zeit reden. Leicht, entspannt, kontrolliert. Zone 2 (60-70% maxHF).'
      },
      {
        front: 'Was ist ein Tempo Run?',
        back: '"Comfortably Hard" - anstrengend, aber kontrolliert. Du kannst noch 1-2 Sätze sagen. 20-30 Min kontinuierlich. Zone 4.'
      }
    ],
    en: [
      {
        front: 'What percentage of runs should be Easy?',
        back: '80%! Easy Runs are the foundation of training. They build base endurance without overload.'
      },
      {
        front: 'What is an Easy Run?',
        back: 'Conversation pace - you can talk the whole time. Light, relaxed, controlled. Zone 2 (60-70% maxHR).'
      }
    ]
  }
};

