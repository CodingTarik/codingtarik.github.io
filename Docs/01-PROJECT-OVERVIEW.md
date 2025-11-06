# Projektübersicht 🌟

## Was ist LearnBuddy?

LearnBuddy ist eine interaktive Lernplattform, die verschiedene Lernbereiche ("Buddies") in einer einzigen Progressive Web App (PWA) vereint. Zusätzlich verfügt die Plattform über ein vollwertiges Blog-System mit Admin Panel.

## 🎯 Hauptfunktionen

### 1. **Buddy System**
Verschiedene Lernbereiche, jeder mit eigenem:
- **Boulder Buddy**: Klettertraining, Workouts, Session-Logging
- **English Buddy**: Grammatik, Lesematerial, Übungen
- **Gym Buddy**: Fitness-Training
- **Yoga Buddy**: Yoga-Übungen
- **Run Buddy**: Lauftraining
- **Swim Buddy**: Schwimmtraining
- **Piano Buddy**: Klavierlernen
- **Cook Buddy**: Kochrezepte
- **Cyber Security Buddy**: IT-Sicherheit
- **Life Skills Buddy**: Lebenskompetenzen

### 2. **Blog System**
- Vollwertiger Blog mit Markdown-Support
- Kategorien, Tags, Featured Posts
- Suche mit Fuse.js (Fuzzy Search)
- RSS Feed
- SEO-optimiert
- Responsive Design
- Dark/Light Mode

### 3. **Admin Panel**
- GitHub-basierte Authentifizierung
- Rich-Text Markdown Editor
- Live Preview
- Automatisches Committen zu GitHub
- Post Management (Erstellen, Bearbeiten, Löschen)

### 4. **Zusätzliche Features**
- **PWA**: Installierbar, Offline-fähig
- **Analytics**: Umami Integration
- **Multi-Language**: Deutsch/Englisch
- **Responsive**: Mobile-First Design
- **Animations**: Framer Motion
- **Theme**: Dark/Light Mode

## 🏗️ Technologie-Stack

### Frontend
- **React 18** - UI Framework
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animationen
- **Markdown-to-JSX** - Markdown Rendering
- **Fuse.js** - Fuzzy Search

### State Management
- **React Context API** - Globaler State
- **LocalStorage** - Persistierung

### Routing
- **Hash-based Routing** - Client-side Navigation

### Build & Deploy
- **Vite PWA Plugin** - Progressive Web App
- **GitHub Pages** - Hosting (optional)
- **Netlify/Vercel** - Alternative Hosting

## 📁 Projektstruktur

```
learn_bouldering/
├── src/
│   ├── learnbuddy/          # LearnBuddy System
│   │   ├── buddies/         # Alle Buddy-Module
│   │   ├── context/         # React Context
│   │   └── shared/          # Gemeinsame Komponenten
│   │
│   ├── blog/                # Blog System
│   │   ├── components/      # Blog Komponenten
│   │   ├── posts/           # Blog Posts (JS-Dateien)
│   │   └── utils/           # Blog Utilities
│   │
│   ├── admin/               # Admin Panel
│   │   ├── components/      # Admin Komponenten
│   │   ├── hooks/           # Custom Hooks
│   │   └── utils/           # Admin Utilities
│   │
│   ├── cv/                  # CV/Portfolio
│   ├── shared/              # App-weite Komponenten
│   └── App.jsx              # Haupt-App
│
├── docs/                    # Dokumentation
├── public/                  # Statische Assets
└── dist/                    # Build Output
```

## 🎨 Design-Philosophie

### Benutzerfreundlichkeit
- Intuitive Navigation
- Klare Hierarchie
- Konsistentes Design
- Schnelle Ladezeiten

### Modularität
- Wiederverwendbare Komponenten
- Klare Trennung der Bereiche
- Einfache Erweiterbarkeit

### Performance
- Code Splitting
- Lazy Loading
- Optimierte Assets
- PWA Caching

### Accessibility
- Semantisches HTML
- Keyboard Navigation
- Screen Reader Support
- ARIA Labels

## 🔄 Workflow

### Für Lernende
1. Buddy auswählen
2. Lektionen durcharbeiten
3. Fortschritt tracken
4. Plan erstellen

### Für Content-Ersteller
1. Admin Panel öffnen
2. Mit GitHub authentifizieren
3. Post erstellen/bearbeiten
4. Preview prüfen
5. Publishen (auto-commit)

### Für Entwickler
1. Code ändern
2. Lokal testen
3. Build erstellen
4. Deployen

## 📊 Metriken

- **Performance**: Lighthouse Score 90+
- **SEO**: Optimiert für Suchmaschinen
- **Accessibility**: WCAG 2.1 AA
- **PWA**: Installierbar, Offline-fähig

## 🎯 Zielgruppe

- **Lernende**: Personen, die neue Fähigkeiten erlernen möchten
- **Content-Ersteller**: Blogger, Lehrer, Experten
- **Entwickler**: Open Source Contributors

## 🚀 Zukunftspläne

- [ ] Mehr Buddies hinzufügen
- [ ] Community Features
- [ ] Gamification
- [ ] Mobile Apps (React Native)
- [ ] Backend API
- [ ] User Accounts
- [ ] Social Features

## 📈 Status

- ✅ LearnBuddy Core System
- ✅ Blog System
- ✅ Admin Panel
- ✅ PWA Features
- ✅ Analytics
- ✅ SEO Optimierung
- 🚧 Community Features (geplant)
- 🚧 Backend API (geplant)

