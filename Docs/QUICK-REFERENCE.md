# Quick Reference 🚀

Schnelle Übersicht über die wichtigsten Befehle und Workflows.

## 📦 Installation & Setup

```bash
# Repository klonen
git clone https://github.com/CodingTarik/learn_bouldering.git
cd learn_bouldering

# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Build für Production
npm run build
```

## 🔗 Wichtige URLs

```
Development:
├── App:          http://localhost:5173
├── Blog:         http://localhost:5173/#/blog
├── Admin Panel:  http://localhost:5173/#/admin
└── CV:           http://localhost:5173/#/cv

Production:
├── App:          https://your-domain.com
├── Blog:         https://your-domain.com/#/blog
├── Admin Panel:  https://your-domain.com/#/admin
└── CV:           https://your-domain.com/#/cv
```

## 🎯 Häufige Aufgaben

### Neuen Buddy erstellen
```bash
# 1. Ordner erstellen
mkdir -p src/learnbuddy/buddies/mein-buddy/{components,data,lessons}

# 2. Config erstellen
touch src/learnbuddy/buddies/mein-buddy/config.js

# 3. HomePage erstellen
touch src/learnbuddy/buddies/mein-buddy/components/MeinBuddyHomePage.jsx

# 4. In BuddyContext registrieren
# src/learnbuddy/context/BuddyContext.jsx
```

### Blog Post erstellen (Admin Panel)
```
1. Gehe zu http://localhost:5173/#/admin
2. Login mit GitHub Token
3. Tab "New Post"
4. Metadaten ausfüllen
5. Content schreiben
6. Preview prüfen
7. Publish → Auto-Commit!
```

### Blog Post erstellen (Manuell)
```bash
# 1. Template kopieren
cp src/blog/template_post.js src/blog/posts/kategorie/mein-post.js

# 2. Datei bearbeiten
# Metadaten und Content anpassen

# 3. Committen
git add src/blog/posts/kategorie/mein-post.js
git commit -m "Add blog post: Mein Post"
git push
```

### Neue Lektion erstellen
```bash
# 1. Lektion-Datei erstellen
touch src/learnbuddy/buddies/boulder/lessons/module1/neue-lektion.js

# 2. In lessons.js registrieren
# src/learnbuddy/buddies/boulder/data/lessons.js

# 3. Content schreiben
# Markdown in content-Feld
```

## 📂 Wichtige Dateien

```
Konfiguration:
├── vite.config.js           # Build-Konfiguration
├── tailwind.config.js       # Styling-Konfiguration
├── package.json             # Dependencies
└── .env                     # Environment Variables

Haupt-App:
├── src/App.jsx              # Routing & Layout
├── src/main.jsx             # Entry Point
└── src/index.css            # Globale Styles

LearnBuddy:
├── src/learnbuddy/context/BuddyContext.jsx     # Buddy-Verwaltung
└── src/learnbuddy/buddies/*/config.js          # Buddy-Configs

Blog:
├── src/blog/components/BlogPage.jsx            # Blog Hauptseite
├── src/blog/posts/                             # Blog Posts
└── src/blog/utils/blogUtils.js                 # Blog Utilities

Admin:
├── src/admin/AdminPanel.jsx                    # Admin Hauptseite
├── src/admin/components/PostEditor.jsx         # Editor
└── src/admin/hooks/useGitHub.js                # GitHub Auth
```

## 🔧 Nützliche Befehle

```bash
# Development
npm run dev              # Dev Server starten
npm run build            # Production Build
npm run preview          # Build Preview

# Code Quality
npm run lint             # Linting (falls konfiguriert)
npm run format           # Formatting (falls konfiguriert)

# Dependencies
npm install              # Dependencies installieren
npm update               # Dependencies updaten
npm audit fix            # Security Fixes

# Git
git status               # Status prüfen
git add .                # Alle Änderungen stagen
git commit -m "message"  # Committen
git push                 # Pushen
```

## 🎨 Styling

### Tailwind Classes
```javascript
// Container
'bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm'

// Buttons
'px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'

// Text
'text-2xl font-bold text-gray-900 dark:text-white'

// Gradients
'bg-gradient-to-r from-blue-500 to-blue-600'

// Responsive
'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
```

### Custom Colors
```javascript
// In tailwind.config.js
colors: {
  primary: 'rgb(var(--primary))',
  secondary: 'rgb(var(--secondary))',
  accent: 'rgb(var(--accent))',
  background: 'rgb(var(--background))',
  text: 'rgb(var(--text))',
  muted: 'rgb(var(--muted))',
}
```

## 🔐 GitHub Token

### Erstellen
```
1. GitHub → Settings
2. Developer settings → Personal access tokens
3. Tokens (classic) → Generate new token
4. Scope: "repo" auswählen
5. Generate token → Kopieren!
```

### Verwenden
```
Admin Panel → Sign in with GitHub → Token eingeben
```

## 📊 Analytics

### Umami Setup
```env
# .env
VITE_UMAMI_WEBSITE_ID=your-website-id
VITE_UMAMI_SRC=https://analytics.umami.is/script.js
```

### Events tracken
```javascript
import { trackEvent } from './blog/components/Analytics';

trackEvent('button_click', { button: 'subscribe' });
```

## 🚀 Deployment

### Netlify
```bash
# 1. Push to GitHub
git push

# 2. Netlify verbinden
# - New site from Git
# - Repository auswählen
# - Build: npm run build
# - Publish: dist

# 3. Environment Variables setzen
# - VITE_UMAMI_WEBSITE_ID
# - VITE_GITHUB_CLIENT_ID (optional)
```

### Vercel
```bash
# 1. Push to GitHub
git push

# 2. Vercel verbinden
# - Import Project
# - Framework: Vite
# - Build: npm run build
# - Output: dist

# 3. Environment Variables setzen
```

## 🐛 Troubleshooting

### Build Fehler
```bash
# Cache leeren
rm -rf node_modules dist .vite
npm install
npm run build
```

### Port bereits belegt
```bash
# Anderen Port nutzen
npm run dev -- --port 3000
```

### Hot Reload funktioniert nicht
```bash
# Server neu starten
Ctrl+C
npm run dev
```

### Admin Panel Login Fehler
```
1. Neuen Token generieren
2. Prüfe "repo" Berechtigung
3. Browser-Cache leeren
4. Logout und neu einloggen
```

## 📚 Dokumentation

```
docs/
├── README.md                    # Übersicht
├── 01-PROJECT-OVERVIEW.md       # Projekt-Übersicht
├── 02-ARCHITECTURE.md           # Architektur
├── 05-CREATE-BUDDY.md           # Buddy erstellen
├── 08-CREATE-BLOG-POST.md       # Blog Post erstellen
├── 10-ADMIN-PANEL.md            # Admin Panel Guide
├── 16-DEPLOYMENT.md             # Deployment Guide
└── QUICK-REFERENCE.md           # Diese Datei
```

## 🔗 Wichtige Links

- **Repository**: https://github.com/CodingTarik/learn_bouldering
- **Umami Analytics**: https://analytics.umami.is
- **Netlify**: https://netlify.com
- **Vercel**: https://vercel.com
- **Tailwind CSS**: https://tailwindcss.com
- **React**: https://react.dev
- **Vite**: https://vitejs.dev
- **Markdown Guide**: https://www.markdownguide.org

## 💡 Tipps

### Performance
- Bilder optimieren (< 500KB)
- Code Splitting nutzen
- PWA Caching aktivieren
- CDN für Assets

### SEO
- Meta Tags setzen
- Sitemap generieren
- robots.txt erstellen
- Strukturierte Daten

### Sicherheit
- HTTPS nutzen
- Tokens sicher aufbewahren
- Environment Variables nutzen
- CSP Header setzen

### Best Practices
- Konsistente Namensgebung
- Komponenten wiederverwenden
- Code dokumentieren
- Tests schreiben (optional)

## 🎯 Workflow-Beispiele

### Feature hinzufügen
```bash
1. Branch erstellen
   git checkout -b feature/neue-funktion

2. Code schreiben
   # Änderungen vornehmen

3. Testen
   npm run dev

4. Committen
   git add .
   git commit -m "Add neue Funktion"

5. Pushen
   git push origin feature/neue-funktion

6. Pull Request erstellen
   # Auf GitHub
```

### Bug fixen
```bash
1. Issue identifizieren
2. Branch erstellen: git checkout -b fix/bug-name
3. Fix implementieren
4. Testen
5. Committen & Pushen
6. Pull Request
```

### Content updaten
```bash
1. Admin Panel öffnen
2. Post suchen
3. Edit klicken
4. Änderungen vornehmen
5. Update → Auto-Commit!
```

## ✅ Checklisten

### Vor dem Commit
- [ ] Code funktioniert
- [ ] Keine Console Errors
- [ ] Styling korrekt
- [ ] Responsive getestet
- [ ] Dark Mode getestet

### Vor dem Deploy
- [ ] Build erfolgreich
- [ ] Alle Tests passed
- [ ] Environment Variables gesetzt
- [ ] Analytics konfiguriert
- [ ] SEO optimiert

### Nach dem Deploy
- [ ] Website erreichbar
- [ ] Alle Links funktionieren
- [ ] Analytics trackt
- [ ] PWA installierbar
- [ ] Performance OK

## 🎉 Happy Coding!

Bei Fragen: BlogCodingTarik@web.de

