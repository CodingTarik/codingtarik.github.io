import React from 'react';

export const continuousRunsLesson = {
  id: 'r2_m1_continuous',
  title: { 
    en: '2.1 First Continuous Runs', 
    de: '2.1 Erste kontinuierliche Läufe' 
  },
  description: { 
    en: 'Transition from walk-run to continuous running and learn how to increase distance gradually.', 
    de: 'Übergang von Walk-Run zum kontinuierlichen Laufen und lerne, wie du Distanz langsam steigerst.' 
  },
  category: 'building',
  
  content: {
    de: `
### Erste kontinuierliche Läufe: Der nächste Schritt 🏃

Du hast die Walk-Run-Methode gemeistert – jetzt ist es Zeit, zum kontinuierlichen Laufen überzugehen! Aber: Langsam und schrittweise.

---

### Vom Walk-Run zum kontinuierlichen Laufen

**Dein Ziel:** 20-30 Minuten ohne Pause laufen können.

**Der Übergang:**

1. **Stufe 1:** 5 Min laufen, 1 Min gehen (3x wiederholen) = 18 Min total
2. **Stufe 2:** 10 Min laufen, 1 Min gehen (2x wiederholen) = 22 Min total  
3. **Stufe 3:** 20 Min durchlaufen! 🎉

**Tempo:** Immer Konversationstempo! Nicht schneller werden.

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Praktische Übung</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Steigere schrittweise: Diese Woche 5 Min laufen, 1 Min gehen (3x). Nächste Woche 10 Min laufen, 1 Min gehen (2x). Dann versuche 20 Min durchlaufen.
  </p>
</div>

---

### Distanzsteigerung

**Von 2-3 km zu 5 km**

- **Woche 1:** 3x 3 km
- **Woche 2:** 2x 3 km + 1x 4 km
- **Woche 3:** 2x 4 km + 1x 5 km
- **Woche 4:** 3x 5 km

**Wichtig:** Nicht jeden Lauf länger machen! Variation ist wichtig.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Die Regel</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Wenn du 5 km durchlaufen kannst, laufe nicht jeden Tag 5 km! Variation: Einige kürzere Läufe (3-4 km), ein längerer (5 km). Langsam steigern (10%-Regel).
  </p>
</div>

---

### Zusammenfassung

- ✅ Ziel: 20-30 Min ohne Pause laufen
- ✅ Tempo: Konversationstempo (Easy Run)
- ✅ Häufigkeit: 3x pro Woche
- ✅ Distanz: Langsam steigern, Variation einbauen
- ✅ Geduld: Jeder Schritt ist ein Erfolg!
    `,
    en: `
### First Continuous Runs: The Next Step 🏃

You've mastered the walk-run method – now it's time to transition to continuous running! But: Slowly and gradually.

---

### From Walk-Run to Continuous Running

**Your Goal:** Run 20-30 minutes without stopping.

**The Transition:**

1. **Stage 1:** 5 min run, 1 min walk (repeat 3x) = 18 min total
2. **Stage 2:** 10 min run, 1 min walk (repeat 2x) = 22 min total  
3. **Stage 3:** Run 20 min continuously! 🎉

**Pace:** Always conversation pace! Don't go faster.

---

### Distance Progression

**From 2-3 km to 5 km**

- **Week 1:** 3x 3 km
- **Week 2:** 2x 3 km + 1x 4 km
- **Week 3:** 2x 4 km + 1x 5 km
- **Week 4:** 3x 5 km

**Important:** Don't make every run longer! Variation is important.

---

### Summary

- ✅ Goal: Run 20-30 min without stopping
- ✅ Pace: Conversation pace (Easy Run)
- ✅ Frequency: 3x per week
- ✅ Distance: Slowly increase, add variation
- ✅ Patience: Every step is a success!
    `
  },

  task: {
    de: {
      title: 'Kontinuierliches Laufen aufbauen',
      description: 'Steigere schrittweise von Walk-Run zu kontinuierlichem Laufen.',
      checklist: [
        { text: 'Woche 1: 5 Min laufen, 1 Min gehen (3x)' },
        { text: 'Woche 2: 10 Min laufen, 1 Min gehen (2x)' },
        { text: 'Woche 3: Versuche 20 Min durchlaufen' },
        { text: 'Tempo: Immer Konversationstempo!' },
        { text: 'Notiere: Wie fühlst du dich? Was ist anders als bei Walk-Run?' }
      ]
    },
    en: {
      title: 'Build Continuous Running',
      description: 'Gradually progress from walk-run to continuous running.',
      checklist: [
        { text: 'Week 1: 5 min run, 1 min walk (3x)' },
        { text: 'Week 2: 10 min run, 1 min walk (2x)' },
        { text: 'Week 3: Try to run 20 min continuously' },
        { text: 'Pace: Always conversation pace!' },
        { text: 'Note: How do you feel? What\'s different from walk-run?' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Wie steigert man von Walk-Run zu kontinuierlichem Laufen?',
        back: 'Schrittweise: 5 Min laufen/1 Min gehen (3x) → 10 Min laufen/1 Min gehen (2x) → 20 Min durchlaufen'
      },
      {
        front: 'Wie schnell sollte das Tempo sein?',
        back: 'Konversationstempo - du solltest die ganze Zeit sprechen können. Nicht schneller werden beim Übergang!'
      }
    ],
    en: [
      {
        front: 'How do you progress from walk-run to continuous running?',
        back: 'Gradually: 5 min run/1 min walk (3x) → 10 min run/1 min walk (2x) → run 20 min continuously'
      }
    ]
  }
};


