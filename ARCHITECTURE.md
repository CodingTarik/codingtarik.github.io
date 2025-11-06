# Projekt-Architektur

## 📁 Ordnerstruktur (Neu organisiert!)

Die Architektur wurde umstrukturiert für bessere Übersichtlichkeit und Skalierbarkeit:

```
src/
├── blog/                           # 📝 Blog-System
│   ├── components/                 # Blog-Komponenten
│   │   ├── BlogPage.jsx           # Haupt-Blog-Seite
│   │   ├── PostCard.jsx           # Post-Vorschau-Karte
│   │   ├── PostDetail.jsx         # Einzelner Post
│   │   ├── Sidebar.jsx            # Sidebar (Posts, CV, Social)
│   │   └── SEOHead.jsx            # SEO Meta-Tags
│   ├── posts/                     # 📄 Blog-Posts (Markdown)
│   │   ├── welcome.js
│   │   ├── learnbuddy-project.js
│   │   └── technology/            # Kategorien als Unterordner
│   │       └── react-tips.js
│   ├── utils/                     # Blog-Utilities
│   │   ├── blogUtils.js           # Suche, Filter, etc.
│   │   └── seoUtils.js            # SEO-Funktionen
│   ├── template_post.js           # Template für neue Posts
│   └── README.md                  # Blog-Anleitung
│
├── learnbuddy/                    # 🎓 LearnBuddy-System
│   ├── buddies/                   # Alle Buddy-Module
│   │   ├── boulder/
│   │   │   ├── components/
│   │   │   ├── config.js
│   │   │   ├── data/
│   │   │   └── lessons/
│   │   ├── english/
│   │   ├── swim/
│   │   ├── run/
│   │   └── ... (weitere Buddies)
│   │
│   ├── context/                   # React Contexts (LearnBuddy)
│   │   ├── BuddyContext.jsx
│   │   ├── LanguageContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── SettingsContext.jsx
│   │
│   ├── shared/                    # LearnBuddy-interne Shared Components
│   │   └── components/
│   │       ├── BottomNavigation.jsx
│   │       ├── HomePage.jsx
│   │       ├── LessonsPage.jsx
│   │       ├── LessonDetailPage.jsx
│   │       ├── PlanPage.jsx
│   │       ├── SettingsPage.jsx
│   │       └── ... (weitere)
│   │
│   ├── utils/                     # LearnBuddy Utilities
│   │   ├── chatgpt.js
│   │   ├── pdfStorage.js
│   │   ├── sessionStorage.js
│   │   ├── sounds.js
│   │   └── workoutStorage.js
│   │
│   └── data/                      # LearnBuddy Daten
│
├── shared/                        # 🌐 Echte Shared Components (Blog + LearnBuddy)
│   └── components/
│       └── GlobalHeader.jsx       # Haupt-Header mit Navigation
│
├── App.jsx                        # Haupt-App-Komponente
└── main.jsx                       # Entry Point
```

## 🎯 Design-Prinzipien

### 1. **Separation of Concerns**
- **Blog** (`/blog`): Komplett eigenständiges Blog-System
- **LearnBuddy** (`/learnbuddy`): Lern-Plattform mit allen Buddies
- **Shared** (`/shared`): Nur Komponenten, die wirklich von beiden genutzt werden

### 2. **Skalierbarkeit**
Die Struktur ist vorbereitet für weitere eigenständige Bereiche:
```
src/
├── blog/          # Bereich 1: Blog
├── learnbuddy/    # Bereich 2: LearnBuddy
├── shop/          # Bereich 3: Zukünftig möglich
├── community/     # Bereich 4: Zukünftig möglich
└── shared/        # Gemeinsame Komponenten
```

### 3. **Klare URLs**
- Blog: `#/blog`, `#/blog/post/id`
- LearnBuddy: `#/learnbuddy/boulder/home`, `#/learnbuddy/english/lessons`
- Settings/Imprint: `#/settings`, `#/imprint`

## 🔄 URL-Routing

### Blog-URLs
```
#/blog                          → Blog-Homepage
#/blog/post/welcome             → Einzelner Blog-Post
```

### LearnBuddy-URLs
```
#/learnbuddy/boulder/home       → BoulderBuddy Home
#/learnbuddy/boulder/lessons    → BoulderBuddy Lektionen
#/learnbuddy/boulder/lessons/m1_1_l1  → Einzelne Lektion
#/learnbuddy/boulder/plan       → BoulderBuddy Plan
#/learnbuddy/boulder/custom-training  → Custom Tab
```

### Legacy-Support
Alte URLs werden automatisch umgeleitet:
```
#/boulder/home    →  #/learnbuddy/boulder/home
#/boulderbuddy    →  #/learnbuddy/boulder/home
#/swim/lessons    →  #/learnbuddy/swim/lessons
```

## 🧩 Navigation

### Desktop (Web-Version)
```
┌─────────────────────────────────────────┐
│ LearnBuddy [Blog] | Buddy Dropdown | ⚙️│  ← GlobalHeader
└─────────────────────────────────────────┘
```

- **LearnBuddy Logo**: Zurück zu LearnBuddy
- **Blog Button**: Wechsel zum Blog (nur Desktop)
- **Buddy Dropdown**: Auswahl des aktiven Buddies
- **Settings**: Einstellungen

### Mobile (PWA)
- Kein Blog-Button sichtbar (nur Web-Feature)
- Bottom-Navigation für LearnBuddy-Bereiche

### Im Blog
```
┌────────────────────────┐
│ [Go to LearnBuddy]     │  ← In Sidebar
│                        │
│ Neueste Posts          │
│ CV / Über mich         │
│ Social Media Links     │
└────────────────────────┘
```

## 🔧 Import-Pfade

### Von App.jsx
```javascript
// Shared (Blog + LearnBuddy)
import GlobalHeader from './shared/components/GlobalHeader';

// LearnBuddy Context
import { BuddyProvider } from './learnbuddy/context/BuddyContext';

// LearnBuddy Shared Components
import HomePage from './learnbuddy/shared/components/HomePage';

// LearnBuddy Buddies
import BoulderHome from './learnbuddy/buddies/boulder/components/BoulderHomePage';

// Blog
import BlogPage from './blog/components/BlogPage';
```

### Von LearnBuddy Buddy-Komponenten
```javascript
// Aus: src/learnbuddy/buddies/boulder/components/BoulderHomePage.jsx

import { useBuddy } from '../../../context/BuddyContext';           // Context
import SupportBanner from '../../../shared/components/SupportBanner'; // Shared
import { exercises } from '../data/exercises';                      // Buddy-Data
```

### Von LearnBuddy Shared Components
```javascript
// Aus: src/learnbuddy/shared/components/HomePage.jsx

import { useLanguage } from '../../context/LanguageContext';   // Context
import { useBuddy } from '../../context/BuddyContext';         // Context
```

### Von Blog-Komponenten
```javascript
// Aus: src/blog/components/BlogPage.jsx

import { getAllPosts } from '../utils/blogUtils';              // Blog Utils
import PostCard from './PostCard';                             // Blog Components
```

## 🚀 Neue Features hinzufügen

### Neuen Blog-Post erstellen
```bash
cp src/blog/template_post.js src/blog/posts/mein-post.js
# Metadaten ausfüllen und Content schreiben
```

### Neuen Buddy hinzufügen
```bash
# 1. Buddy-Ordner erstellen
mkdir -p src/learnbuddy/buddies/mynewbuddy/{components,data,lessons}

# 2. config.js erstellen
# 3. In BuddyContext.jsx registrieren
# 4. HomePage-Komponente erstellen
```

### Neue eigenständige Sektion (z.B. Shop)
```bash
# 1. Neuen Ordner erstellen
mkdir -p src/shop/{components,utils}

# 2. In App.jsx integrieren
# 3. URL-Routing hinzufügen (#/shop)
# 4. Navigation erweitern
```

## 📊 Bundle-Struktur

Nach `npm run build`:
```
dist/
├── index.html                    # Entry HTML
├── assets/
│   ├── index-[hash].css         # Styles (~101 KB)
│   └── index-[hash].js          # App Bundle (~1033 KB)
├── sw.js                        # Service Worker (PWA)
└── manifest.webmanifest         # PWA Manifest
```

## ⚡ Performance-Überlegungen

### Code Splitting (Zukünftig)
Die Struktur ermöglicht einfaches Code Splitting:
```javascript
// Lazy-load Blog
const BlogPage = lazy(() => import('./blog/components/BlogPage'));

// Lazy-load Buddies
const BoulderBuddy = lazy(() => import('./learnbuddy/buddies/boulder'));
```

### Bundle-Optimierung
- Blog und LearnBuddy sind logisch getrennt
- Shared Components werden nur einmal geladen
- Jeder Buddy kann individuell geladen werden

## 🔒 Wartbarkeit

### Vorteile der neuen Struktur:
1. ✅ Klare Verantwortlichkeiten
2. ✅ Einfaches Hinzufügen neuer Bereiche
3. ✅ Keine zirkulären Abhängigkeiten
4. ✅ Testbarkeit verbessert
5. ✅ Onboarding neuer Entwickler einfacher

### Regeln:
- **Blog** darf keine LearnBuddy-Komponenten importieren
- **LearnBuddy** darf keine Blog-Komponenten importieren
- **Shared** darf von beiden genutzt werden
- Jeder Bereich hat seine eigenen `utils/`, `components/`, etc.

## 📝 Dokumentation

- `/src/blog/README.md` - Blog-spezifische Anleitung
- `/BLOG_SUMMARY.md` - Blog-Feature-Übersicht
- `/ARCHITECTURE.md` - Dieses Dokument
- `/MIGRATION_SUMMARY.md` - Migrations-Historie

---

**Version**: 2.0 (Nach Umstrukturierung)
**Datum**: November 2025
**Status**: ✅ Produktiv

