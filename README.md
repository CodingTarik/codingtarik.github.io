# 🧗 BoulderBuddy - Dein kostenloser Boulder Guide

Eine Progressive Web App (PWA) für Boulder-Anfänger mit interaktiven Lektionen, praktischen Trainingsaufgaben und persönlichem Trainingsplan.

![BoulderBuddy](public/icon.svg)

## ✨ Features

### 📚 Lektionen-System
- **14+ umfassende Lektionen** von Basics bis Fortgeschritten
  - Grundlagen & Theorie (Was ist Bouldern, Sicherheit, Routen lesen)
  - Ausrüstung (Schuhe, Chalk & mehr)
  - Grundtechniken (Körperspannung, Greifen, Fußtechnik)
  - Fortgeschrittene Techniken (Dynos, Überhang-Skills)
  - Training & Progression (Trainingsplan, Finger-Kraft)
  - Mental & Taktik (Route Reading, Angst überwinden)
- **Praktische Trainingsaufgaben** mit Checklisten
- **Persönlicher Trainingsplan** - speichere Aufgaben aus Lektionen

### 💪 Training & Workout-System
- **Custom Workouts erstellen** mit vorgefertigten oder eigenen Übungen
- **Vorgefertigte Übungen**: Aufwärmen, Kraft, Core, Dehnen, Pausen
- **Custom Übungen hinzufügen**: Mit/ohne Gewicht, Timer oder Wiederholungen
- **Verschiedene Timer-Modi**:
  - Countdown-Timer (rückwärts von definierter Zeit)
  - Challenge-Timer (vorwärts, selbst stoppen)
- **Interaktiver Workout-Executor**:
  - Live-Timer mit Sound bei Fertigstellung
  - SVG-Visualisierungen für jede Übung
  - Manuelle Anpassung der Werte nach Abschluss
- **Progress Tracking & History**:
  - Letzte Performance wird angezeigt
  - Challenge dich selbst: "Schaffe mehr als letztes Mal!"
  - Logging aller Übungen mit Datum & Werten
- **Workout-Sets**: Speichere mehrere Trainingsprogramme
- **Aufwärm-Timer**: Interaktiver Timer mit 10 Aufwärm-Übungen

### 🎨 Design & UX
- **Ausrüstungs-Guide** mit Budget-Tipps
- **Responsive Design** für Web, iOS und Android
- **Offline-fähig** (PWA) - kein Internet in der Halle? Kein Problem!
- **LocalStorage** - alle Daten lokal gespeichert
- **Modernes UI** mit Tailwind CSS & Lucide Icons

## 🎨 Design

- **Modernes, erdiges Design** mit Tailwind CSS
- Hintergrund: Warmes Braun/Beige (`bg-stone-100`)
- Akzentfarben: Motivierendes Türkis (`teal-500`) & Orange (`orange-500`)
- **Bottom-Navigation** für mobile-first UX
- **Lucide Icons** für klare Visualisierung

## 🚀 Installation & Start

### Voraussetzungen

- Node.js (Version 16+)
- npm oder yarn

### Setup

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungs-Server starten
npm run dev

# Die App läuft unter: http://localhost:5173
```

### Production Build (für Deployment)

```bash
# App bauen
npm run build

# Preview des Production Builds
npm run preview
```

## 📱 PWA Installation

### iOS (Safari)

1. Öffne die App in Safari
2. Tippe auf das "Teilen" Icon
3. Scrolle nach unten und wähle "Zum Home-Bildschirm"
4. Bestätige mit "Hinzufügen"

### Android (Chrome)

1. Öffne die App in Chrome
2. Tippe auf die drei Punkte (Menü)
3. Wähle "App installieren" oder "Zum Startbildschirm hinzufügen"
4. Bestätige die Installation

### Desktop (Chrome/Edge)

1. Öffne die App im Browser
2. Klicke auf das "+" Icon in der Adressleiste
3. Bestätige mit "Installieren"

## 📂 Projekt-Struktur

```
learn_bouldering/
├── public/
│   ├── manifest.json          # PWA Manifest
│   ├── icon.svg               # App Icon
│   └── icon-*.png             # PWA Icons (generiert beim Build)
├── src/
│   ├── App.jsx                # Haupt-App (alle Komponenten)
│   ├── main.jsx               # React Entry Point
│   └── index.css              # Tailwind Imports
├── index.html
├── package.json
├── vite.config.js             # Vite + PWA Config
├── tailwind.config.js
└── README.md
```

## 🧩 Komponenten

Die App ist modular aufgebaut mit separaten Komponenten:

### Core Components (`src/components/`)
- **App.jsx** - Haupt-Komponente mit State Management
- **BottomNavigation** - 5-Tab Navigation (Home, Lektionen, Training, Plan, Gear)
- **HomePage** - Willkommensseite mit Hero & Quick-Actions
- **LessonContent** - Markdown-Renderer mit Fettdruck-Support

### Lektionen (`src/components/`)
- **LessonsPage** - Lektionen-Übersicht nach Kategorien
- **LessonDetailPage** - Einzelne Lektion mit Aufgabe & Speichern

### Training System (`src/components/`)
- **TrainingPage** - Übersicht aller Custom Workouts
- **WorkoutBuilder** - Workout erstellen/bearbeiten mit Drag & Drop
- **WorkoutExecutor** - Interaktiver Timer/Counter während des Trainings
- **WarmupTimer** - Spezieller Timer für Aufwärm-Routinen

### Other (`src/components/`)
- **TrainingPlanPage** - Gespeicherte Lektions-Aufgaben mit Progress
- **GearGuidePage** - Ausrüstungs-Ratgeber

### Data (`src/data/`)
- **lessons.js** - Alle Lektionen zentral
- **exercises.js** - Vorgefertigte Trainingsübungen mit SVGs
- **warmupExercises.js** - Aufwärm-Routine-Übungen

### Utils (`src/utils/`)
- **workoutStorage.js** - LocalStorage Helper für Workouts & History

## 💾 Daten-Persistenz

- **LocalStorage** speichert gespeicherte Trainingsaufgaben
- Daten bleiben auch nach Schließen der App erhalten
- Keine Server-Anbindung nötig - alles lokal!

## 🎯 Nutzung

1. **Start**: Lies die Willkommensseite und starte Lektion 1
2. **Lektionen durcharbeiten**: Lies Theorie & klicke auf interessante Lektionen
3. **Aufgaben speichern**: In jeder Lektion findest du praktische Trainingsaufgaben - speichere sie für dein nächstes Training
4. **Training planen**: Gehe zu "Mein Plan" und arbeite deine Aufgaben ab
5. **Checklisten abhaken**: Markiere erledigte Punkte während deines Trainings
6. **Aufgaben löschen**: Nach Abschluss kannst du Aufgaben entfernen

## 🛠️ Technologie-Stack

- **React 18** - UI Framework
- **Vite** - Build Tool & Dev Server
- **Tailwind CSS** - Styling
- **Lucide React** - Icon Library
- **Vite PWA Plugin** - Progressive Web App Features
- **LocalStorage API** - Daten-Persistenz

## 📖 Lektionen-Kategorien

1. **Grundlagen & Theorie** (3 Lektionen)
2. **Ausrüstung** (2 Lektionen)
3. **Grundtechniken** (3 Lektionen)
4. **Fortgeschrittene Techniken** (2 Lektionen)
5. **Training & Progression** (2 Lektionen)
6. **Mental & Taktik** (2 Lektionen)

## 🌍 Internationalisierung & Themes

- **Mehrsprachig**: Deutsch 🇩🇪 & English 🇬🇧
- **Dark Mode**: Augenschonend für Abend-Sessions
- **Einstellungen**: Eigener Tab für Language & Theme Switch

## 🎓 Für wen ist BoulderBuddy?

- **Absolute Anfänger**: Keine Vorkenntnisse nötig
- **Wiedereinsteiger**: Auffrischung der Grundlagen
- **Hobby-Boulderer**: Neue Techniken & Trainingstipps
- **Hallen-Besucher**: Strukturiertes Training statt planloses Klettern

## 🤝 Beitragen

Dies ist ein Open-Source Projekt. Verbesserungsvorschläge, neue Lektionen oder Bug-Reports sind willkommen!

## 📄 Lizenz

MIT - Frei verwendbar für persönliche und kommerzielle Projekte.

## 🙏 Credits

- Icons: [Lucide Icons](https://lucide.dev/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Build: [Vite](https://vitejs.dev/)

---

**Viel Spaß beim Bouldern! 🧗‍♀️🧗‍♂️**

*"The best climber is the one having the most fun."* - Alex Lowe

