# 🚀 BoulderBuddy - Feature Ideas & Roadmap

> Von Theorie-App zu praktischem Boulder-Companion

---

## 📱 CORE FEATURES (Praktisch & Interaktiv)

### 1. 🎯 **Boulder-Logger & Tracking**
**Problem:** Boulderer wissen nicht, was sie geschafft haben und wie sie sich verbessern.

**Features:**
- **Session-Logger**: Schnell Boulder nach Session loggen
  - Boulder-Grade eingeben (4a, 5b, 6c, etc.)
  - Anzahl der Versuche
  - Feeling-Bewertung (1-5 Sterne: "Wie schwer war's?")
  - Flash/Redpoint/Onsight markieren
  - Fotos vom Boulder (optional)
  
- **Statistiken & Visualisierung:**
  - Pyramiden-Graph (wie viele Boulder pro Grad)
  - Fortschritts-Chart (Grades über Zeit)
  - Heatmap: Welche Wochentage sind am produktivsten?
  - "Dieser Monat": X Boulder, Y Sessions, Durchschnitts-Grad
  - Streak-System: "5 Tage in Folge trainiert! 🔥"

- **Vergleich:**
  - "Vor 3 Monaten war dein Max 5c, jetzt 6a! +2 Grades 📈"
  - Jahresvergleich

**Implementation:**
- LocalStorage für Offline-First
- Optional: Cloud-Sync (Firebase/Supabase)
- Export als CSV/PDF für Backup

---

### 2. 🎥 **Video-Analyse Tool**
**Problem:** Schwer, eigene Technik zu sehen & Fehler zu erkennen.

**Features:**
- **Video aufnehmen** (direkt in der App oder importieren)
- **Frame-by-Frame Analyse**
- **Annotationen zeichnen:**
  - Körperschwerpunkt markieren
  - Fußplatzierung highlighten
  - Hüftposition tracken
- **Vergleichs-Modus:**
  - Eigenes Video vs. Profi-Video side-by-side
  - Vorher/Nachher-Vergleich nach Training
- **Slow-Motion Playback**
- **KI-Analyse (Future):**
  - "Deine Hüfte ist zu weit von der Wand"
  - "Arme nicht gestreckt bei Move #3"

**Tech Stack:**
- HTML5 Video API
- Canvas für Annotations
- Eventuell TensorFlow.js für Pose Detection

---

### 3. 🗺️ **Hallen-Finder & Community**
**Problem:** Neue Hallen finden, Boulder-Partner suchen.

**Features:**
- **Karte mit Boulderhallen** (Google Maps Integration)
  - Filter: Anfängerfreundlich, Wettkampf-Wand, Outdoor
  - Öffnungszeiten, Preise
  - User-Reviews & Ratings
  - Fotos der Halle

- **Boulder-Partner-Suche:**
  - Profil erstellen (Level, Präferenzen, Verfügbarkeit)
  - "Wer geht heute ins Boulderwerk München?"
  - Chat-System
  - Safety-Features: Public Meetups, Ratings

- **Event-Kalender:**
  - Competitions
  - Workshops
  - Community-Nights

**Alternative:** Integration mit bestehenden Plattformen (27 Crags, TheCrag)

---

### 4. 📸 **Boulder-Problem Scanner (AR)**
**Problem:** Schwer, Routen zu merken oder zu teilen.

**Features:**
- **Foto-Modus:**
  - Boulder fotografieren
  - Griffe automatisch erkennen (Farbe/Form)
  - Sequenz auf Foto markieren (1, 2, 3...)
  - Beta als Overlay zeichnen

- **AR-Modus (Advanced):**
  - Kamera auf Boulder richten
  - App zeigt Beta als Overlay in Real-Time
  - "Linke Hand hierhin, dann eindrehen..."

- **Projekt-Management:**
  - Eigene "Project"-Liste
  - Notizen zu jedem Boulder
  - Versuchs-Historie
  - "Versuche vor nächster Session: 3"

**Similar Apps:** Kaya (Climbing App mit Boulder-Tracking)

---

### 5. ⏱️ **Interaktive Timer & Challenges**
**Status:** Teilweise implementiert (Warmup Timer)

**Erweitern mit:**
- **Interval-Training:**
  - 4x4s: 4 Boulder, 4 Durchgänge, 3 Min Pause
  - Pyramids: Aufsteigend schwer, dann absteigend
  - Max-Hangs: 10 Sek on, 5 Min off, 5 Reps

- **Challenge-Modus:**
  - "30-Boulder-Challenge": 30 Boulder in einer Session
  - "Blind-Bouldern": Timer stoppt nach 2 Min, Boulder muss geschafft sein
  - "Grades-Bingo": Schaffe 3a, 4a, 5a, 6a in einer Session

- **Gamification:**
  - Achievements: "Erste 6b!", "100 Boulder geloggt", "30-Tage-Streak"
  - Levels: "Boulder Newbie" → "Boulder Master"
  - XP-System basierend auf Grades & Aktivität

---

### 6. 🧘 **Mental Training & Mindfulness**
**Problem:** Mentale Blockaden, Versagensangst, Höhenangst.

**Features:**
- **Geführte Meditationen:**
  - "Pre-Session Mindfulness" (5 Min)
  - "Angst überwinden" (10 Min)
  - "Flow-State erreichen" (7 Min)

- **Visualisierungs-Übungen:**
  - Geführte Imagery: Boulder im Kopf durchklettern
  - Audio + animierte Visuals

- **Angst-Tagebuch:**
  - "Was hat heute Angst gemacht?"
  - "Wie habe ich damit umgegangen?"
  - Fortschritts-Tracking

- **Atem-Übungen:**
  - Box-Breathing (4-4-4-4)
  - 4-7-8 Atmung
  - Integriert mit Timer & visuellem Guide

---

### 7. 💪 **Kraft-Tests & Benchmarks**
**Problem:** Schwer zu messen, ob man stärker wird.

**Features:**
- **Finger-Kraft-Test:**
  - Max-Hang auf 20mm Leiste
  - One-Arm-Hang-Time
  - Progressions-Tracking

- **Pull-Up-Tracker:**
  - Max Reps
  - Weighted Pull-Ups
  - One-Arm-Progression

- **Core-Tests:**
  - Plank-Duration
  - L-Sit Hold Time
  - Leg-Raises Reps

- **Flexibilität:**
  - Shoulder-Mobility-Score
  - Hip-Flexibility-Test

- **Benchmarks:**
  - "Durchschnittlicher Boulderer: 30 Sek Hang"
  - "Du: 45 Sek – Überdurchschnittlich! 💪"
  - Vergleich mit eigenem Fortschritt

---

### 8. 🎓 **Adaptive Lernpfade**
**Problem:** Jeder lernt anders, feste Lektionen passen nicht für alle.

**Features:**
- **Onboarding-Quiz:**
  - "Wie lange boulderst du schon?"
  - "Was ist dein aktuelles Level?"
  - "Was sind deine Schwächen?" (Fußtechnik, Kraft, Angst, etc.)

- **Personalisierter Lernpfad:**
  - "Für dich empfohlen: Lektion 7 (Fußtechnik)"
  - Skip bereits bekannte Basics
  - Fokus auf Schwächen

- **Skill-Tree:**
  - Visueller Skill-Tree wie in Videospielen
  - Unlock neue Lektionen nach Progress
  - "Crimp Mastery: 3/5 Sterne"

- **Adaptive Difficulty:**
  - Aufgaben passen sich an Level an
  - "Klettere 3 Boulder" → "Klettere 5 Boulder auf 6a"

---

### 9. 🏆 **Wettkampf-Modus**
**Problem:** Fehlende Motivation, keine Ziele.

**Features:**
- **Challenges mit Freunden:**
  - "Wer schafft mehr 6a Boulder diese Woche?"
  - Leaderboards
  - Private Gruppen

- **Wöchentliche Challenges:**
  - "Diese Woche: Schaffe 3 Boulder mit Heel Hooks"
  - "Challenge: 50 Boulder in 7 Tagen"
  - Rewards: Badges, XP

- **Virtual Competitions:**
  - Monatliche App-weite Competitions
  - "Wer klettert die meisten Grades diese Woche?"
  - Kategorien: Anfänger, Fortgeschritten, Profi

---

### 10. 🩺 **Verletzungs-Prävention & Recovery**
**Problem:** Boulderer übertrainieren und verletzen sich.

**Features:**
- **Recovery-Tracker:**
  - "Wie fühlen sich deine Finger heute?" (1-10)
  - "Schmerzen wo?" (Finger, Schulter, Ellbogen...)
  - Warnung: "Finger-Score < 5 → Ruhetag empfohlen!"

- **Load-Management:**
  - Training-Load berechnen (Boulder × Versuche × Schwierigkeit)
  - Warnung bei zu schneller Steigerung
  - "Letzte Woche: 100 Units, diese Woche: 150 → +50%! ⚠️ Zu schnell!"

- **Verletzungs-Datenbank:**
  - "Was tun bei Pulley-Riss?"
  - Rehab-Übungen mit Videos
  - Wann zum Arzt?

- **Antagonisten-Reminder:**
  - "Du hast diese Woche 3x gebouldert, aber 0x Liegestütze!"
  - Push-Exercise-Tracker

---

## 🌐 SOCIAL FEATURES

### 11. 📱 **Social Feed & Sharing**
- Post deinen Send (Boulder + Feeling + Foto)
- Kommentare & Likes
- Beta-Sharing: "Wie hast du den Move gemacht?"
- Follower-System
- "Freunde haben heute 15 Boulder geschafft – Beat them!"

### 12. 🎯 **Mentor-System**
- Erfahrene Boulderer als Mentoren
- 1-on-1 Coaching (in-app Chat/Video)
- Tipps zu spezifischen Techniken
- Form-Check: Video hochladen, Feedback bekommen

---

## 🔬 ADVANCED/FUTURE FEATURES

### 13. 🤖 **KI-Coach**
- **Computer Vision:**
  - Video analysieren
  - Technik-Fehler automatisch erkennen
  - "Deine Hüfte ist 15cm zu weit von der Wand"

- **Personalisierte Empfehlungen:**
  - "Basierend auf deinen Sessions: Trainiere mehr Core!"
  - "Du scheiterst oft an Slopern → Empfohlene Lektion: Richtig Greifen"

- **Chatbot:**
  - "Wie schaffe ich einen Heel Hook?"
  - Instant-Antworten basierend auf Lektionen

### 14. 🎮 **Gamification & AR**
- **Virtual Boulder:**
  - AR-Boulder auf jeder Wand projizieren
  - Smartphone als Beamer
  - Moves werden tracked

- **Boulder-RPG:**
  - Character leveln
  - Gear sammeln (virtuelle Schuhe, Chalk)
  - Dungeons = schwere Boulder
  - Boss-Fight = Outdoor-Boulder

### 15. 📊 **Performance-Analytics (Pro-Version)**
- **Fortgeschrittene Statistiken:**
  - Erfolgsrate nach Grifftyp (Crimps: 60%, Slopers: 40%)
  - Beste Uhrzeit zum Trainieren
  - Korrelation: Schlaf vs. Performance
  - Ernährungs-Tracking → Performance

- **Predictive Analytics:**
  - "In 3 Monaten wirst du wahrscheinlich 6c klettern"
  - "Deine Schwachstelle: Overhangs (-20% Erfolgsrate)"

### 16. 🌍 **Outdoor-Integration**
- **GPS-Tracking:**
  - Outdoor-Boulder finden (GPS-Koordinaten)
  - Wegbeschreibungen
  - "In deiner Nähe: Fontainebleau (50km)"

- **Weather-Integration:**
  - "Perfekte Bedingungen heute: 15°C, trocken"
  - Friction-Vorhersage basierend auf Temperatur/Luftfeuchtigkeit

- **Offline-Maps:**
  - Download Boulder-Areas für Offline-Nutzung

---

## 🎨 UX/UI IMPROVEMENTS

### 17. 🎨 **Personalisierung**
- Custom Themes (nicht nur Dark/Light)
- Avatar erstellen
- Farbschema wählen
- Font-Größe anpassen (Accessibility)

### 18. 🔊 **Audio-Coaching**
- Lektionen als Podcasts/Audio
- "Höre Lektion 5 während des Aufwärmens"
- Voice-Commands: "Starte Timer", "Logge Boulder"

### 19. 📴 **Offline-First**
- Alles funktioniert ohne Internet
- Sync wenn Online
- Download-Funktion für Videos/Bilder

---

## 💰 MONETIZATION (Optional)

### Free Tier:
- Alle Lektionen
- Basis-Tracking
- Aufwärm-Timer

### Premium Tier (3-5€/Monat):
- Video-Analyse
- Advanced Stats
- KI-Coach
- Unbegrenzte Boulder-Logs
- Cloud-Sync
- Ad-Free

### One-Time-Purchases:
- "Outdoor-Boulder-Pack" (10€): GPS, Weather, Maps
- "Competition-Mode" (5€): Wettkämpfe, Challenges

---

## 🛠️ TECHNICAL IMPLEMENTATION PRIORITIES

### Phase 1 (MVP Erweiterung) - 1-2 Monate:
1. ✅ Boulder-Logger & Tracking (Basic)
2. ✅ Statistiken (Pyramide, Chart)
3. ✅ Session-Tracking
4. ✅ Achievements (Basic)

### Phase 2 (Core Features) - 3-4 Monate:
1. Video-Upload & Playback
2. Foto-Annotations
3. Projekt-Management
4. Social-Feed (Basic)

### Phase 3 (Advanced) - 6+ Monate:
1. KI-Analyse (Computer Vision)
2. AR-Features
3. Outdoor-Integration
4. Mentor-System

---

## 📊 FEATURE PRIORITIZATION MATRIX

| Feature | Impact | Effort | Priority |
|---------|--------|--------|----------|
| Boulder-Logger | 🔥🔥🔥 | Low | **HIGH** |
| Video-Analyse | 🔥🔥🔥 | Medium | **HIGH** |
| Hallen-Finder | 🔥🔥 | Low | MEDIUM |
| Social-Feed | 🔥🔥 | Medium | MEDIUM |
| AR-Features | 🔥 | High | LOW |
| KI-Coach | 🔥🔥🔥 | Very High | LOW |
| Mental-Training | 🔥🔥 | Low | MEDIUM |
| Kraft-Tests | 🔥🔥 | Low | **HIGH** |

---

## 🎯 QUICK WINS (Implementierbar in < 1 Woche)

1. **Boulder-Counter:** Einfacher Zähler "Wie viele Boulder heute?" mit +/- Buttons
2. **Session-Timer:** "Wie lange war deine Session?" → Statistik
3. **Foto-Galerie:** Boulder fotografieren & speichern
4. **Sticker/Badges:** "First 6a!", "100 Boulder!" (Pure UI, kein Backend)
5. **Daily-Quote:** Motivierendes Zitat auf Homepage
6. **Boulder-Diary:** Freitext-Notizen zu Sessions
7. **Grade-Converter:** Font ↔ V-Scale ↔ YDS
8. **Rest-Day-Reminder:** "Letztes Training vor 1 Tag → Heute trainieren?"
9. **Chalk-Timer:** "Wie lange hält dein Liquid Chalk?" (Reminder)
10. **Musik-Integration:** Spotify/YouTube Playlists für Sessions

---

## 🔗 INTEGRATION-MÖGLICHKEITEN

- **Strava:** Sessions als "Workouts" loggen
- **MyFitnessPal:** Kalorien-Tracking
- **Apple Health / Google Fit:** Sync Workouts
- **Spotify:** Workout-Playlists
- **Google Calendar:** Training-Sessions eintragen
- **WhatsApp/Telegram:** Share Achievements
- **27 Crags / TheCrag:** Import/Export Boulder-Data

---

## 🚀 VISION: "Die ultimative Boulder-App"

**Ziel:** Von reiner Lernapp zu **vollständigem Boulder-Companion**

**User Journey:**
1. **Lernen:** Lektionen durcharbeiten
2. **Planen:** Training planen mit Custom-Workouts
3. **Trainieren:** Timer & Challenges nutzen
4. **Loggen:** Boulder & Performance tracken
5. **Analysieren:** Stats & Videos ansehen
6. **Verbessern:** Personalisierte Empfehlungen
7. **Community:** Freunde challengen & Fortschritt teilen

**Unique Selling Points:**
- ✅ Deutsch & Englisch (International)
- ✅ Offline-First (In der Halle oft kein Internet!)
- ✅ Privacy-First (Daten lokal, optional Cloud)
- ✅ Komplett kostenlos (Basic Features)
- ✅ Open-Source (Community-Driven)

---

## 📝 COMMUNITY FEEDBACK

**Sammle User-Feedback:**
- "Was fehlt dir in der App?"
- "Welches Feature würdest du am meisten nutzen?"
- In-App-Feedback-Button
- Discord/Telegram-Community

**Beta-Testing:**
- Closed Beta für neue Features
- A/B-Testing für UI-Changes

---

## ✨ CONCLUSION

Diese Feature-Ideen transformieren BoulderBuddy von einem **digitalen Lehrbuch** zu einem **interaktiven Training-Tool**, das Boulderer von Anfang bis Fortgeschritten begleitet.

**Next Steps:**
1. Priorisieren (Quick Wins first!)
2. User-Research (Was wollen Boulderer wirklich?)
3. MVP der Top-3-Features bauen
4. Beta-Testen
5. Iterieren basierend auf Feedback

**Let's make BoulderBuddy the #1 Bouldering App! 🧗‍♀️🚀**

---

*Letzte Aktualisierung: November 2025*

