import React from 'react';

export const injuriesLesson = {
  id: 'r6_m2_injuries',
  title: { 
    en: '6.2 Understanding & Treating Running Injuries', 
    de: '6.2 Laufverletzungen verstehen & behandeln' 
  },
  description: { 
    en: 'Learn to recognize, treat, and prevent common running injuries like runner\'s knee, shin splints, and plantar fasciitis.', 
    de: 'Lerne häufige Laufverletzungen wie Läuferknie, Shin Splints und Plantarfasziitis zu erkennen, behandeln und vorzubeugen.' 
  },
  category: 'intermediate',
  
  content: {
    de: `
### Laufverletzungen verstehen & behandeln: Bleib gesund! 🏥

Laufverletzungen sind frustrierend, aber oft vermeidbar! Dieser Modul zeigt die häufigsten Verletzungen, ihre Ursachen, Behandlung und vor allem: Prävention. Wissen ist Macht - und hält dich auf der Strecke!

---
### Die häufigsten Laufverletzungen im Überblick

**Statistik:**
- 50-70% aller Läufer erleiden jährlich eine Verletzung
- Häufigste Ursache: Zu schnelle Steigerung (Missachtung der 10%-Regel!)
- 80% der Verletzungen sind Überlastungsschäden (nicht akute Traumata)

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Goldene Regel bei Schmerzen</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    <strong>Bei Schmerz: STOPP!</strong> Nicht "durchtrainieren"! Kleine Schmerzen werden zu großen Verletzungen.
  </p>
  <p className="text-sm text-red-700 dark:text-red-300">
    <strong>Schmerz vs. Muskelkater:</strong> Muskelkater = diffus, beide Seiten, nach 2-3 Tagen weg. Schmerz = lokalisiert, einseitig, wird schlimmer beim Laufen.
  </p>
</div>

**Die Top 5 Laufverletzungen:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Verletzung</th>
      <th className="border p-3 text-left">Häufigkeit</th>
      <th className="border p-3 text-left">Hauptursache</th>
      <th className="border p-3 text-left">Heilungsdauer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Läuferknie (ITBS)</strong></td>
      <td className="border p-3">12-15%</td>
      <td className="border p-3">Schwache Hüfte, zu schnelle Steigerung</td>
      <td className="border p-3">4-8 Wochen</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Shin Splints</strong></td>
      <td className="border p-3">10-15%</td>
      <td className="border p-3">Zu schnelle Steigerung, falsche Schuhe</td>
      <td className="border p-3">2-6 Wochen</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Plantarfasziitis</strong></td>
      <td className="border p-3">8-10%</td>
      <td className="border p-3">Überlastung, enge Waden</td>
      <td className="border p-3">6-12 Wochen</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Achillessehne</strong></td>
      <td className="border p-3">6-8%</td>
      <td className="border p-3">Zu schnelle Steigerung, enge Waden</td>
      <td className="border p-3">3-6 Monate</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Patellaspitzensyndrom</strong></td>
      <td className="border p-3">5-7%</td>
      <td className="border p-3">Zu viel Bergab, schwacher Quadrizeps</td>
      <td className="border p-3">4-12 Wochen</td>
    </tr>
  </tbody>
</table>

---
### 1. Läuferknie (ITBS - Iliotibiales Bandsyndrom) 🦵

**Was ist das?**
- Schmerz an der Außenseite des Knies
- IT-Band (Sehnenplatte) reibt über Knochenvorsprung
- Entzündung entsteht durch Reibung

**Symptome:**
- Stechender Schmerz außen am Knie
- Schlimmer beim Bergablaufen
- Oft nach 2-3 km Laufen
- Schmerz beim Treppensteigen

**Ursachen:**
- **Schwache Hüftabduktoren:** Hüfte kippt nach innen beim Laufen
- **Zu schnelle Steigerung:** Körper nicht angepasst
- **Zu viel Bergablaufen:** Zusätzliche Belastung
- **Falsche Schuhe:** Zu abgenutzt oder falsche Pronation

**Behandlung:**

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💊 ITBS-Behandlungsplan</h4>
  <div className="space-y-3 text-sm text-blue-700 dark:text-blue-300">
    <p><strong>Phase 1 (Woche 1-2): Akut</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>RICE: Rest, Ice (3x täglich 15 Min), Compression, Elevation</li>
      <li>Kein Laufen! (Cross-Training okay: Schwimmen, Radfahren ohne Widerstand)</li>
      <li>Entzündungshemmer (Ibuprofen) nur nach Rücksprache mit Arzt</li>
    </ul>
    <p><strong>Phase 2 (Woche 3-4): Rehabilitation</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Foam Rolling IT-Band (täglich 10 Min)</li>
      <li>Hüftkräftigung: Clamshells, Hip Bridges, Seitliches Beinheben (3x15, täglich)</li>
      <li>Dehnen: Hüftbeuger, IT-Band, Quadrizeps</li>
      <li>Langsam zurück: Walk-Run-Methode (1 Min laufen, 2 Min gehen)</li>
    </ul>
    <p><strong>Phase 3 (Woche 5+): Rückkehr</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Langsam steigern (10%-Regel strikt einhalten!)</li>
      <li>Hüftkräftigung weiter (2-3x pro Woche)</li>
      <li>Keine Berge für 4-6 Wochen</li>
    </ul>
  </div>
</div>

**Prävention:**
- **Hüftkräftigung:** Clamshells, Hip Bridges (2-3x pro Woche)
- **Foam Rolling:** IT-Band, Quadrizeps (3-5x pro Woche)
- **Langsame Steigerung:** 10%-Regel einhalten
- **Schuhe:** Alle 600-800 km wechseln

---
### 2. Shin Splints (Schienbeinkantensyndrom) 🦴

**Was ist das?**
- Schmerz an der Innenseite des Schienbeins
- Entzündung der Knochenhaut (Periostitis)
- Häufig bei Anfängern

**Symptome:**
- Diffuser Schmerz entlang Schienbein (Innenseite)
- Schlimmer beim Laufen, besser in Ruhe
- Berührungsempfindlich
- Oft nach Training auf hartem Untergrund

**Ursachen:**
- **Zu schnelle Steigerung:** Klassiker bei Anfängern!
- **Falsche Schuhe:** Zu wenig Dämpfung, zu abgenutzt
- **Harter Untergrund:** Asphalt, Beton
- **Schwache Unterschenkelmuskulatur:** Tibialis anterior
- **Fersenlauf:** Zu viel Impact

**Behandlung:**

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💊 Shin Splints Behandlung</h4>
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <p><strong>Sofortmaßnahmen:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>RICE: Rest, Ice (3x täglich 15 Min), Compression, Elevation</li>
      <li>Pause vom Laufen: 2-4 Wochen (je nach Schwere)</li>
      <li>Cross-Training: Schwimmen, Radfahren (kein Impact)</li>
    </ul>
    <p><strong>Rehabilitation:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Unterschenkel-Kräftigung: Zehenspitzengehen, Fersengehen (3x20, täglich)</li>
      <li>Waden dehnen: Stehend, sitzend (2x täglich)</li>
      <li>Massage: Schienbein mit Daumen massieren (vorsichtig!)</li>
    </ul>
    <p><strong>Rückkehr:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Nur schmerzfrei zurück!</li>
      <li>Start auf weichem Untergrund (Tartanbahn, Waldweg)</li>
      <li>Walk-Run-Methode (1 Min laufen, 2 Min gehen)</li>
      <li>Sehr langsam steigern (5% pro Woche)</li>
    </ul>
  </div>
</div>

**Prävention:**
- **Langsame Steigerung:** 10%-Regel (oder 5% bei Anfängern!)
- **Gute Schuhe:** Ausreichend Dämpfung, rechtzeitig wechseln
- **Weicher Untergrund:** Waldwege, Tartanbahn statt Asphalt
- **Unterschenkel-Kräftigung:** Zehenspitzengehen, Fersengehen (2-3x pro Woche)
- **Technik:** Mittelfuß-/Vorfußlauf statt Fersenlauf

---
### 3. Plantarfasziitis (Fersenschmerz) 🦶

**Was ist das?**
- Entzündung der Plantarfaszie (Sehnenplatte unter Fuß)
- Verbindet Ferse mit Zehen
- Sehr schmerzhaft, langwierig

**Symptome:**
- Stechender Schmerz an der Ferse (Unterseite)
- **Schlimmer morgens:** Erste Schritte nach Aufstehen sehr schmerzhaft
- Besser nach Aufwärmen, aber zurück nach Ruhe
- Schmerz beim Zehenspitzenstand

**Ursachen:**
- **Überlastung:** Zu viel, zu schnell
- **Enge Waden:** Zug auf Plantarfaszie
- **Falsche Schuhe:** Zu wenig Unterstützung, zu flach
- **Hohes Gewicht:** Zusätzliche Belastung
- **Plötzliche Tempowechsel:** Intervalle, Sprints

**Behandlung:**

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">💊 Plantarfasziitis Behandlung</h4>
  <div className="space-y-3 text-sm text-purple-700 dark:text-purple-300">
    <p><strong>Akutphase (Woche 1-3):</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Eis: Gefrorene Wasserflasche unter Fuß rollen (3x täglich 10 Min)</li>
      <li>Pause vom Laufen (Cross-Training: Schwimmen, Oberkörper-Kraft)</li>
      <li>Nachtschiene: Hält Fuß in Dehnung (optional, aber effektiv)</li>
    </ul>
    <p><strong>Rehabilitation (Woche 4-8):</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Waden dehnen: 3x täglich, 30 Sek halten (stehend, sitzend)</li>
      <li>Plantarfaszie dehnen: Zehen nach oben ziehen (3x täglich)</li>
      <li>Fußmuskulatur kräftigen: Handtuch mit Zehen greifen (3x20)</li>
      <li>Massage: Tennisball unter Fuß rollen (täglich 5 Min)</li>
    </ul>
    <p><strong>Rückkehr (Woche 9+):</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Nur schmerzfrei zurück!</li>
      <li>Gute Schuhe mit Dämpfung und Unterstützung</li>
      <li>Einlagen erwägen (Orthopäde konsultieren)</li>
      <li>Langsam steigern, keine Sprints/Intervalle für 3 Monate</li>
    </ul>
  </div>
</div>

**Prävention:**
- **Waden dehnen:** Täglich, besonders nach dem Laufen
- **Gute Schuhe:** Ausreichend Dämpfung, nicht zu flach
- **Einlagen:** Bei Bedarf (Plattfuß, Hohlfuß)
- **Fußmuskulatur:** Barfußgehen zu Hause, Zehengreifen
- **Gewicht:** Bei Übergewicht: Abnehmen reduziert Belastung

---
### 4. Achillessehnenprobleme (Achillodynie) 🎯

**Was ist das?**
- Entzündung oder Degeneration der Achillessehne
- Verbindet Wadenmuskulatur mit Ferse
- Kann chronisch werden!

**Symptome:**
- Schmerz an der Achillessehne (oberhalb Ferse)
- Morgensteifigkeit
- Schmerz beim Laufen (besonders Bergauf)
- Verdickung der Sehne sichtbar/fühlbar

**Ursachen:**
- **Zu schnelle Steigerung:** Besonders Tempo-Training
- **Enge Waden:** Zug auf Sehne
- **Zu viel Bergauf:** Zusätzliche Belastung
- **Falsche Schuhe:** Zu wenig Fersensprengung
- **Alter:** Sehnen werden weniger elastisch (>40 Jahre)

**Behandlung:**

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">💊 Achillessehnen Behandlung</h4>
  <div className="space-y-3 text-sm text-amber-700 dark:text-amber-300">
    <p><strong>Wichtig: Achillessehne heilt langsam! Geduld ist essentiell.</strong></p>
    <p><strong>Phase 1 (Woche 1-4): Akut</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Relative Ruhe (kein Laufen, aber nicht komplett immobilisieren)</li>
      <li>Eis nach Aktivität (15 Min)</li>
      <li>Exzentrisches Training: Fersenheben (3x15, täglich) - WICHTIGSTE Übung!</li>
    </ul>
    <p><strong>Phase 2 (Woche 5-12): Rehabilitation</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Exzentrisches Training fortsetzen (mit Gewicht steigern)</li>
      <li>Waden dehnen (vorsichtig, nicht zu aggressiv)</li>
      <li>Langsam zurück: Walk-Run auf flachem Untergrund</li>
    </ul>
    <p><strong>Phase 3 (Monat 4-6): Rückkehr</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Sehr langsam steigern (5% pro Woche)</li>
      <li>Keine Berge, keine Intervalle für 6 Monate</li>
      <li>Exzentrisches Training weiter (Prävention!)</li>
    </ul>
  </div>
</div>

**Exzentrische Fersenheben (DIE Übung!):**
1. Auf Treppenstufe stellen (nur Vorfuß auf Stufe)
2. Mit beiden Füßen auf Zehenspitzen gehen
3. Ein Bein abheben
4. Mit dem betroffenen Bein langsam (3-5 Sek) Ferse absenken
5. Mit beiden Füßen wieder hoch
6. 3x15 Wiederholungen, 2x täglich

**Prävention:**
- **Exzentrisches Training:** Auch ohne Verletzung (2x pro Woche)
- **Waden dehnen:** Nach jedem Lauf
- **Langsame Steigerung:** Besonders bei Tempo-Training
- **Schuhe:** Ausreichend Fersensprengung (8-10mm)

---
### 5. Patellaspitzensyndrom (Jumper's Knee) 🏀

**Was ist das?**
- Entzündung der Patellasehne (unter Kniescheibe)
- Häufig bei Sportarten mit viel Springen
- Bei Läufern: Oft durch Bergablaufen

**Symptome:**
- Schmerz unter der Kniescheibe
- Schlimmer beim Treppensteigen (besonders runter)
- Schmerz beim Springen/Landen
- Druckempfindlich

**Ursachen:**
- **Zu viel Bergablaufen:** Exzentrische Belastung Quadrizeps
- **Schwacher Quadrizeps:** Überlastung der Sehne
- **Zu schnelle Steigerung:** Besonders bei Intervallen
- **Schlechte Lauftechnik:** Zu viel Kniebeugen beim Laufen

**Behandlung:**
- RICE in Akutphase
- Quadrizeps-Kräftigung: Squats, Lunges (exzentrisch!)
- Dehnen: Quadrizeps, Hüftbeuger
- Tape oder Patella-Bandage
- Langsame Rückkehr, keine Berge für 6-8 Wochen

**Prävention:**
- **Quadrizeps-Kräftigung:** Squats, Lunges (2-3x pro Woche)
- **Bergab-Technik:** Kürzere Schritte, nicht zu schnell
- **Langsame Steigerung:** Besonders bei Bergläufen

---
### RICE-Methode: Erste Hilfe bei Verletzungen 🧊

**R - Rest (Ruhe):**
- Sofort aufhören zu laufen
- Betroffene Stelle schonen
- Cross-Training nur wenn schmerzfrei

**I - Ice (Eis):**
- 15-20 Minuten Eis auf betroffene Stelle
- 3-4x täglich
- Nicht direkt auf Haut (Handtuch dazwischen)
- Reduziert Entzündung und Schwellung

**C - Compression (Kompression):**
- Elastische Bandage
- Nicht zu fest (Durchblutung!)
- Reduziert Schwellung

**E - Elevation (Hochlagern):**
- Betroffene Stelle über Herzhöhe
- Reduziert Schwellung
- Besonders wichtig in ersten 48 Stunden

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Wann zum Arzt?</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-red-700 dark:text-red-300">
    <li><strong>Starke Schmerzen</strong> die nicht besser werden</li>
    <li><strong>Schwellung</strong> die nicht zurückgeht (nach 3-5 Tagen)</li>
    <li><strong>Schmerzen werden schlimmer</strong> trotz Ruhe</li>
    <li><strong>Unfähigkeit zu gehen</strong> oder Gewicht zu tragen</li>
    <li><strong>Hörbares "Knacken"</strong> oder "Reißen" bei Verletzung</li>
    <li><strong>Keine Besserung nach 2 Wochen</strong> Selbstbehandlung</li>
  </ul>
</div>

---
### Verletzungsprävention: Der beste Schutz! 🛡️

**Die 7 Säulen der Verletzungsprävention:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Säule</th>
      <th className="border p-3 text-left">Maßnahme</th>
      <th className="border p-3 text-left">Häufigkeit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>1. Progression</strong></td>
      <td className="border p-3">10%-Regel strikt einhalten</td>
      <td className="border p-3">Immer</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>2. Krafttraining</strong></td>
      <td className="border p-3">Core, Hüfte, Beine kräftigen</td>
      <td className="border p-3">2-3x/Woche</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>3. Regeneration</strong></td>
      <td className="border p-3">1-2 Ruhetage, ausreichend Schlaf</td>
      <td className="border p-3">Wöchentlich</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>4. Technik</strong></td>
      <td className="border p-3">Gute Lauftechnik, Lauf-ABC</td>
      <td className="border p-3">2x/Woche</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>5. Schuhe</strong></td>
      <td className="border p-3">Alle 600-800 km wechseln</td>
      <td className="border p-3">Regelmäßig</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>6. Mobilität</strong></td>
      <td className="border p-3">Dehnen, Foam Rolling</td>
      <td className="border p-3">3-5x/Woche</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>7. Hören</strong></td>
      <td className="border p-3">Auf Körper hören, bei Schmerz pausieren</td>
      <td className="border p-3">Immer</td>
    </tr>
  </tbody>
</table>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Praktische Übung: Verletzungsprävention-Routine</h4>
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <p><strong>Täglich (10 Min):</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Waden dehnen (2x 30 Sek pro Seite)</li>
      <li>Hüftbeuger dehnen (2x 30 Sek pro Seite)</li>
      <li>Foam Rolling: IT-Band, Waden (je 2 Min)</li>
    </ul>
    <p><strong>3x pro Woche (15 Min):</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Clamshells: 3x15 pro Seite</li>
      <li>Hip Bridges: 3x15</li>
      <li>Squats: 3x15</li>
      <li>Plank: 3x 30-60 Sek</li>
    </ul>
  </div>
</div>

---
### Zusammenfassung

**Key Takeaways:**
- 🛑 **Bei Schmerz: STOPP!** Nicht durchtrainieren, kleine Schmerzen werden zu großen Verletzungen
- 🦵 **ITBS:** Schwache Hüfte → Hüftkräftigung (Clamshells, Hip Bridges)
- 🦴 **Shin Splints:** Zu schnell gesteigert → 10%-Regel, gute Schuhe
- 🦶 **Plantarfasziitis:** Enge Waden → Täglich dehnen, exzentrisches Training
- 🎯 **Achillessehne:** Exzentrisches Fersenheben (DIE Übung!), Geduld (3-6 Monate)
- 🧊 **RICE:** Rest, Ice, Compression, Elevation (erste 48 Std.)
- 🛡️ **Prävention:** 10%-Regel, Krafttraining, Regeneration, auf Körper hören

**Nächste Schritte:**
1. Lerne die Symptome der häufigsten Verletzungen kennen
2. Integriere Präventions-Routine (Hüftkräftigung, Dehnen, Foam Rolling)
3. Halte die 10%-Regel strikt ein
4. Bei ersten Schmerzen: Sofort pausieren, RICE anwenden
5. Bei anhaltenden Schmerzen (>2 Wochen): Arzt aufsuchen

Verletzungen sind frustrierend, aber meist vermeidbar. Sei smart, höre auf deinen Körper! 💪
    `,
    en: `
### Understanding & Treating Running Injuries: Stay Healthy! 🏥

Running injuries are frustrating but often preventable! This module covers the most common injuries, their causes, treatment, and most importantly: prevention. Knowledge is power - and keeps you on the road!

---
### Overview of Most Common Running Injuries

**Statistics:**
- 50-70% of all runners suffer an injury annually
- Most common cause: Too rapid progression (ignoring the 10% rule!)
- 80% of injuries are overuse injuries (not acute trauma)

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Golden Rule for Pain</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    <strong>With pain: STOP!</strong> Don't "train through it"! Small pains become big injuries.
  </p>
  <p className="text-sm text-red-700 dark:text-red-300">
    <strong>Pain vs. Soreness:</strong> Soreness = diffuse, both sides, gone after 2-3 days. Pain = localized, one-sided, gets worse when running.
  </p>
</div>

**Top 5 Running Injuries:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Injury</th>
      <th className="border p-3 text-left">Frequency</th>
      <th className="border p-3 text-left">Main Cause</th>
      <th className="border p-3 text-left">Healing Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Runner's Knee (ITBS)</strong></td>
      <td className="border p-3">12-15%</td>
      <td className="border p-3">Weak hips, too rapid progression</td>
      <td className="border p-3">4-8 weeks</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Shin Splints</strong></td>
      <td className="border p-3">10-15%</td>
      <td className="border p-3">Too rapid progression, wrong shoes</td>
      <td className="border p-3">2-6 weeks</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Plantar Fasciitis</strong></td>
      <td className="border p-3">8-10%</td>
      <td className="border p-3">Overuse, tight calves</td>
      <td className="border p-3">6-12 weeks</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Achilles Tendon</strong></td>
      <td className="border p-3">6-8%</td>
      <td className="border p-3">Too rapid progression, tight calves</td>
      <td className="border p-3">3-6 months</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Patellar Tendinitis</strong></td>
      <td className="border p-3">5-7%</td>
      <td className="border p-3">Too much downhill, weak quads</td>
      <td className="border p-3">4-12 weeks</td>
    </tr>
  </tbody>
</table>

---
### 1. Runner's Knee (ITBS - Iliotibial Band Syndrome) 🦵

**What is it?**
- Pain on outside of knee
- IT band (tendon plate) rubs over bone prominence
- Inflammation from friction

**Symptoms:**
- Sharp pain outside of knee
- Worse when running downhill
- Often after 2-3 km running
- Pain when climbing stairs

**Causes:**
- **Weak hip abductors:** Hip drops inward when running
- **Too rapid progression:** Body not adapted
- **Too much downhill running:** Additional stress
- **Wrong shoes:** Too worn or wrong pronation

**Treatment:**

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💊 ITBS Treatment Plan</h4>
  <div className="space-y-3 text-sm text-blue-700 dark:text-blue-300">
    <p><strong>Phase 1 (Week 1-2): Acute</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>RICE: Rest, Ice (3x daily 15 min), Compression, Elevation</li>
      <li>No running! (Cross-training okay: swimming, cycling without resistance)</li>
      <li>Anti-inflammatories (ibuprofen) only after consulting doctor</li>
    </ul>
    <p><strong>Phase 2 (Week 3-4): Rehabilitation</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Foam rolling IT band (daily 10 min)</li>
      <li>Hip strengthening: Clamshells, hip bridges, side leg lifts (3x15, daily)</li>
      <li>Stretching: Hip flexors, IT band, quads</li>
      <li>Gradual return: Walk-run method (1 min run, 2 min walk)</li>
    </ul>
    <p><strong>Phase 3 (Week 5+): Return</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Increase slowly (strictly follow 10% rule!)</li>
      <li>Continue hip strengthening (2-3x per week)</li>
      <li>No hills for 4-6 weeks</li>
    </ul>
  </div>
</div>

**Prevention:**
- **Hip strengthening:** Clamshells, hip bridges (2-3x per week)
- **Foam rolling:** IT band, quads (3-5x per week)
- **Slow progression:** Follow 10% rule
- **Shoes:** Replace every 600-800 km

---
### 2. Shin Splints (Medial Tibial Stress Syndrome) 🦴

**What is it?**
- Pain on inside of shin
- Inflammation of periosteum (bone membrane)
- Common in beginners

**Symptoms:**
- Diffuse pain along shin (inside)
- Worse when running, better at rest
- Tender to touch
- Often after training on hard surface

**Causes:**
- **Too rapid progression:** Classic beginner mistake!
- **Wrong shoes:** Too little cushioning, too worn
- **Hard surface:** Asphalt, concrete
- **Weak lower leg muscles:** Tibialis anterior
- **Heel striking:** Too much impact

**Treatment:**

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💊 Shin Splints Treatment</h4>
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <p><strong>Immediate measures:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>RICE: Rest, Ice (3x daily 15 min), Compression, Elevation</li>
      <li>Break from running: 2-4 weeks (depending on severity)</li>
      <li>Cross-training: Swimming, cycling (no impact)</li>
    </ul>
    <p><strong>Rehabilitation:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Lower leg strengthening: Toe walks, heel walks (3x20, daily)</li>
      <li>Calf stretching: Standing, sitting (2x daily)</li>
      <li>Massage: Shin with thumb (careful!)</li>
    </ul>
    <p><strong>Return:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Only return pain-free!</li>
      <li>Start on soft surface (track, forest path)</li>
      <li>Walk-run method (1 min run, 2 min walk)</li>
      <li>Increase very slowly (5% per week)</li>
    </ul>
  </div>
</div>

**Prevention:**
- **Slow progression:** 10% rule (or 5% for beginners!)
- **Good shoes:** Adequate cushioning, replace timely
- **Soft surface:** Forest paths, track instead of asphalt
- **Lower leg strengthening:** Toe walks, heel walks (2-3x per week)
- **Technique:** Midfoot/forefoot strike instead of heel strike

---
### 3. Plantar Fasciitis (Heel Pain) 🦶

**What is it?**
- Inflammation of plantar fascia (tendon plate under foot)
- Connects heel to toes
- Very painful, long-lasting

**Symptoms:**
- Sharp pain at heel (bottom)
- **Worse in morning:** First steps after waking very painful
- Better after warming up, but returns after rest
- Pain when standing on toes

**Causes:**
- **Overuse:** Too much, too fast
- **Tight calves:** Pull on plantar fascia
- **Wrong shoes:** Too little support, too flat
- **High weight:** Additional stress
- **Sudden pace changes:** Intervals, sprints

**Treatment:**

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">💊 Plantar Fasciitis Treatment</h4>
  <div className="space-y-3 text-sm text-purple-700 dark:text-purple-300">
    <p><strong>Acute phase (Week 1-3):</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Ice: Roll frozen water bottle under foot (3x daily 10 min)</li>
      <li>Break from running (cross-training: swimming, upper body strength)</li>
      <li>Night splint: Keeps foot in stretch (optional but effective)</li>
    </ul>
    <p><strong>Rehabilitation (Week 4-8):</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Calf stretching: 3x daily, hold 30 sec (standing, sitting)</li>
      <li>Plantar fascia stretch: Pull toes upward (3x daily)</li>
      <li>Foot muscle strengthening: Grab towel with toes (3x20)</li>
      <li>Massage: Roll tennis ball under foot (daily 5 min)</li>
    </ul>
    <p><strong>Return (Week 9+):</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Only return pain-free!</li>
      <li>Good shoes with cushioning and support</li>
      <li>Consider insoles (consult orthopedist)</li>
      <li>Increase slowly, no sprints/intervals for 3 months</li>
    </ul>
  </div>
</div>

**Prevention:**
- **Calf stretching:** Daily, especially after running
- **Good shoes:** Adequate cushioning, not too flat
- **Insoles:** If needed (flat feet, high arches)
- **Foot muscles:** Walk barefoot at home, toe grabs
- **Weight:** If overweight: losing weight reduces stress

---
### 4. Achilles Tendon Problems (Achilles Tendinopathy) 🎯

**What is it?**
- Inflammation or degeneration of Achilles tendon
- Connects calf muscle to heel
- Can become chronic!

**Symptoms:**
- Pain at Achilles tendon (above heel)
- Morning stiffness
- Pain when running (especially uphill)
- Thickening of tendon visible/palpable

**Causes:**
- **Too rapid progression:** Especially tempo training
- **Tight calves:** Pull on tendon
- **Too much uphill:** Additional stress
- **Wrong shoes:** Too little heel drop
- **Age:** Tendons become less elastic (>40 years)

**Treatment:**

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">💊 Achilles Tendon Treatment</h4>
  <div className="space-y-3 text-sm text-amber-700 dark:text-amber-300">
    <p><strong>Important: Achilles tendon heals slowly! Patience is essential.</strong></p>
    <p><strong>Phase 1 (Week 1-4): Acute</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Relative rest (no running, but don't completely immobilize)</li>
      <li>Ice after activity (15 min)</li>
      <li>Eccentric training: Heel raises (3x15, daily) - MOST IMPORTANT exercise!</li>
    </ul>
    <p><strong>Phase 2 (Week 5-12): Rehabilitation</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Continue eccentric training (increase with weight)</li>
      <li>Calf stretching (careful, not too aggressive)</li>
      <li>Gradual return: Walk-run on flat surface</li>
    </ul>
    <p><strong>Phase 3 (Month 4-6): Return</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Increase very slowly (5% per week)</li>
      <li>No hills, no intervals for 6 months</li>
      <li>Continue eccentric training (prevention!)</li>
    </ul>
  </div>
</div>

**Eccentric Heel Raises (THE exercise!):**
1. Stand on stair step (only forefoot on step)
2. Rise on toes with both feet
3. Lift one leg
4. With affected leg slowly (3-5 sec) lower heel
5. Rise with both feet again
6. 3x15 reps, 2x daily

**Prevention:**
- **Eccentric training:** Even without injury (2x per week)
- **Calf stretching:** After every run
- **Slow progression:** Especially with tempo training
- **Shoes:** Adequate heel drop (8-10mm)

---
### 5. Patellar Tendinitis (Jumper's Knee) 🏀

**What is it?**
- Inflammation of patellar tendon (below kneecap)
- Common in sports with lots of jumping
- In runners: Often from downhill running

**Symptoms:**
- Pain below kneecap
- Worse when climbing stairs (especially down)
- Pain when jumping/landing
- Tender to pressure

**Causes:**
- **Too much downhill running:** Eccentric quad load
- **Weak quadriceps:** Overload of tendon
- **Too rapid progression:** Especially with intervals
- **Poor running technique:** Too much knee bend while running

**Treatment:**
- RICE in acute phase
- Quad strengthening: Squats, lunges (eccentric!)
- Stretching: Quads, hip flexors
- Tape or patellar strap
- Gradual return, no hills for 6-8 weeks

**Prevention:**
- **Quad strengthening:** Squats, lunges (2-3x per week)
- **Downhill technique:** Shorter steps, not too fast
- **Slow progression:** Especially with hill runs

---
### RICE Method: First Aid for Injuries 🧊

**R - Rest:**
- Stop running immediately
- Protect affected area
- Cross-training only if pain-free

**I - Ice:**
- 15-20 minutes ice on affected area
- 3-4x daily
- Not directly on skin (towel between)
- Reduces inflammation and swelling

**C - Compression:**
- Elastic bandage
- Not too tight (circulation!)
- Reduces swelling

**E - Elevation:**
- Affected area above heart level
- Reduces swelling
- Especially important in first 48 hours

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ When to See a Doctor?</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-red-700 dark:text-red-300">
    <li><strong>Severe pain</strong> that doesn't improve</li>
    <li><strong>Swelling</strong> that doesn't go down (after 3-5 days)</li>
    <li><strong>Pain gets worse</strong> despite rest</li>
    <li><strong>Unable to walk</strong> or bear weight</li>
    <li><strong>Audible "pop"</strong> or "tear" at injury</li>
    <li><strong>No improvement after 2 weeks</strong> of self-treatment</li>
  </ul>
</div>

---
### Injury Prevention: The Best Protection! 🛡️

**The 7 Pillars of Injury Prevention:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Pillar</th>
      <th className="border p-3 text-left">Measure</th>
      <th className="border p-3 text-left">Frequency</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>1. Progression</strong></td>
      <td className="border p-3">Strictly follow 10% rule</td>
      <td className="border p-3">Always</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>2. Strength Training</strong></td>
      <td className="border p-3">Strengthen core, hips, legs</td>
      <td className="border p-3">2-3x/week</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>3. Recovery</strong></td>
      <td className="border p-3">1-2 rest days, adequate sleep</td>
      <td className="border p-3">Weekly</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>4. Technique</strong></td>
      <td className="border p-3">Good running form, running drills</td>
      <td className="border p-3">2x/week</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>5. Shoes</strong></td>
      <td className="border p-3">Replace every 600-800 km</td>
      <td className="border p-3">Regularly</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>6. Mobility</strong></td>
      <td className="border p-3">Stretching, foam rolling</td>
      <td className="border p-3">3-5x/week</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>7. Listen</strong></td>
      <td className="border p-3">Listen to body, pause with pain</td>
      <td className="border p-3">Always</td>
    </tr>
  </tbody>
</table>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Practical Exercise: Injury Prevention Routine</h4>
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <p><strong>Daily (10 min):</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Calf stretching (2x 30 sec per side)</li>
      <li>Hip flexor stretching (2x 30 sec per side)</li>
      <li>Foam rolling: IT band, calves (2 min each)</li>
    </ul>
    <p><strong>3x per week (15 min):</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Clamshells: 3x15 per side</li>
      <li>Hip bridges: 3x15</li>
      <li>Squats: 3x15</li>
      <li>Plank: 3x 30-60 sec</li>
    </ul>
  </div>
</div>

---
### Summary

**Key Takeaways:**
- 🛑 **With pain: STOP!** Don't train through it, small pains become big injuries
- 🦵 **ITBS:** Weak hips → hip strengthening (clamshells, hip bridges)
- 🦴 **Shin Splints:** Too rapid progression → 10% rule, good shoes
- 🦶 **Plantar Fasciitis:** Tight calves → daily stretching, eccentric training
- 🎯 **Achilles Tendon:** Eccentric heel raises (THE exercise!), patience (3-6 months)
- 🧊 **RICE:** Rest, Ice, Compression, Elevation (first 48 hrs)
- 🛡️ **Prevention:** 10% rule, strength training, recovery, listen to body

**Next Steps:**
1. Learn symptoms of most common injuries
2. Integrate prevention routine (hip strengthening, stretching, foam rolling)
3. Strictly follow 10% rule
4. At first pain: Pause immediately, apply RICE
5. With persistent pain (>2 weeks): See doctor

Injuries are frustrating but mostly preventable. Be smart, listen to your body! 💪
    `
  }
};

