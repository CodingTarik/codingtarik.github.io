# Architektur 🏗️

## Übersicht

LearnBuddy folgt einer modularen, komponentenbasierten Architektur mit klarer Trennung zwischen den verschiedenen Systemen.

## 🎯 Architektur-Prinzipien

### 1. **Separation of Concerns**
- LearnBuddy, Blog und Admin sind getrennte Module
- Jeder Bereich hat eigene Komponenten, Hooks und Utils
- Nur wirklich gemeinsame Komponenten in `/shared`

### 2. **Component-Based**
- Kleine, wiederverwendbare Komponenten
- Props für Konfiguration
- Composition over Inheritance

### 3. **State Management**
- React Context für globalen State
- LocalStorage für Persistierung
- Keine externe State-Library nötig

### 4. **File-Based Routing**
- Hash-based Routing (`#/path`)
- Keine zusätzliche Router-Library
- Einfach und performant

## 📂 Ordnerstruktur

```
src/
├── learnbuddy/              # LearnBuddy System
│   ├── buddies/             # Buddy-Module
│   │   ├── boulder/
│   │   │   ├── components/  # Buddy-spezifische Komponenten
│   │   │   ├── data/        # Daten (Übungen, Lektionen)
│   │   │   ├── lessons/     # Lektionen-Content
│   │   │   └── config.js    # Buddy-Konfiguration
│   │   ├── english/
│   │   ├── gym/
│   │   └── ...
│   │
│   ├── context/             # React Context
│   │   ├── BuddyContext.jsx      # Buddy-Verwaltung
│   │   ├── LanguageContext.jsx   # Sprache
│   │   ├── ThemeContext.jsx      # Dark/Light Mode
│   │   └── SettingsContext.jsx   # Einstellungen
│   │
│   └── shared/              # LearnBuddy-weite Komponenten
│       └── components/
│           ├── GlobalHeader.jsx
│           ├── BottomNavigation.jsx
│           ├── HomePage.jsx
│           └── ...
│
├── blog/                    # Blog System
│   ├── components/          # Blog Komponenten
│   │   ├── BlogPage.jsx           # Hauptseite
│   │   ├── BlogSidebar.jsx        # Navigation
│   │   ├── PostDetail.jsx         # Post-Ansicht
│   │   ├── PostCard.jsx           # Post-Karte
│   │   ├── SearchPage.jsx         # Suche
│   │   ├── CategoriesPage.jsx     # Kategorien
│   │   ├── BlogPostContent.jsx    # Markdown Renderer
│   │   └── ...
│   │
│   ├── posts/               # Blog Posts (JS-Dateien)
│   │   ├── category1/
│   │   │   ├── post1.js
│   │   │   └── post2.js
│   │   └── category2/
│   │       └── post3.js
│   │
│   ├── utils/               # Blog Utilities
│   │   ├── blogUtils.js          # Post-Verwaltung, Suche
│   │   ├── seoUtils.js           # SEO Funktionen
│   │   ├── rssUtils.js           # RSS Feed
│   │   └── analyticsWrapper.js   # Analytics
│   │
│   └── template_post.js     # Template für neue Posts
│
├── admin/                   # Admin Panel
│   ├── components/          # Admin Komponenten
│   │   ├── PostEditor.jsx        # Editor
│   │   ├── PostPreview.jsx       # Preview
│   │   ├── PostList.jsx          # Post-Liste
│   │   └── GitHubAuth.jsx        # Authentifizierung
│   │
│   ├── hooks/               # Custom Hooks
│   │   ├── useGitHub.js          # GitHub Auth
│   │   └── useGitHubCommit.js    # GitHub API
│   │
│   ├── utils/               # Admin Utilities
│   │   └── postUtils.js          # Post-Generierung
│   │
│   └── AdminPanel.jsx       # Haupt-Panel
│
├── cv/                      # CV/Portfolio
│   └── components/
│       ├── CVPage.jsx
│       └── ProjectsPage.jsx
│
├── shared/                  # App-weite Komponenten
│   └── components/
│       ├── Footer.jsx
│       ├── PrivacyPage.jsx
│       └── ImprintPageFooter.jsx
│
├── App.jsx                  # Haupt-App (Routing)
├── main.jsx                 # Entry Point
└── index.css                # Globale Styles
```

## 🔄 Datenfluss

### LearnBuddy System

```
User Interaction
    ↓
Component (z.B. HomePage)
    ↓
Context (BuddyContext)
    ↓
LocalStorage (Persistierung)
    ↓
Re-render
```

### Blog System

```
User sucht Post
    ↓
SearchPage Component
    ↓
blogUtils.searchPostsAdvanced()
    ↓
Fuse.js (Fuzzy Search)
    ↓
Ergebnisse anzeigen
```

### Admin Panel

```
User erstellt Post
    ↓
PostEditor Component
    ↓
Form Validation
    ↓
Preview (optional)
    ↓
useGitHubCommit Hook
    ↓
GitHub API (Commit)
    ↓
Success/Error
```

## 🎨 Komponenten-Hierarchie

### App.jsx (Root)
```
App
├── ThemeProvider
│   └── LanguageProvider
│       └── BuddyProvider
│           └── SettingsProvider
│               └── AppContent
│                   ├── GlobalHeader (LearnBuddy)
│                   ├── Content (dynamisch)
│                   │   ├── LearnBuddy Pages
│                   │   ├── Blog Pages
│                   │   └── Admin Panel
│                   ├── BottomNavigation (LearnBuddy)
│                   └── Footer
```

### Blog Hierarchie
```
BlogPage
├── BlogSidebar
│   ├── Profile
│   ├── Navigation Tabs
│   ├── Social Links
│   └── Theme Toggle
│
└── Content Area
    ├── Hero Section
    ├── SearchBar
    ├── TagCloud
    └── PostCards (AnimatedPostCard)
```

### Admin Panel Hierarchie
```
AdminPanel
├── Auth Check
│   └── GitHubAuth (wenn nicht eingeloggt)
│
└── Authenticated View
    ├── TopNav
    │   ├── Logo
    │   ├── User Info
    │   └── Logout
    │
    ├── Tabs
    │   ├── All Posts
    │   ├── New Post
    │   └── Settings
    │
    └── Content
        ├── PostList (All Posts)
        ├── PostEditor (New/Edit)
        │   ├── Metadata Sidebar
        │   ├── Markdown Editor
        │   └── Preview
        └── Settings
```

## 🔌 Context API

### BuddyContext
```javascript
{
  activeBuddy: 'boulder',
  currentBuddyConfig: {...},
  allBuddies: [...],
  switchBuddy: (id) => {...}
}
```

### LanguageContext
```javascript
{
  language: 'en',
  setLanguage: (lang) => {...},
  t: (key) => {...}  // Translation function
}
```

### ThemeContext
```javascript
{
  theme: 'dark',
  toggleTheme: () => {...}
}
```

### SettingsContext
```javascript
{
  settings: {...},
  updateSetting: (key, value) => {...}
}
```

## 🛣️ Routing

### Hash-based Routing
```javascript
// LearnBuddy
#/learnbuddy/boulder/home
#/learnbuddy/boulder/lektionen
#/learnbuddy/boulder/training

// Blog
#/blog
#/blog/post/:id
#/blog/search
#/blog/categories
#/blog/projects

// Admin
#/admin
#/admin/callback

// Other
#/cv
#/privacy
#/imprint
```

### Route Handling (App.jsx)
```javascript
useEffect(() => {
  const handleHashChange = () => {
    const hash = window.location.hash;
    
    if (hash.startsWith('#/admin')) {
      setAppView('admin');
    } else if (hash.startsWith('#/blog')) {
      setAppView('blog');
      // Handle blog sub-routes
    } else if (hash.startsWith('#/learnbuddy')) {
      setAppView('learnbuddy');
      // Handle buddy routes
    }
    // ... more routes
  };
  
  window.addEventListener('hashchange', handleHashChange);
  handleHashChange(); // Initial load
}, []);
```

## 📦 Build & Bundle

### Vite Configuration
```javascript
// vite.config.js
export default {
  plugins: [
    react(),
    VitePWA({
      // PWA config
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Code splitting
        }
      }
    }
  }
}
```

### Output
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js    # Main bundle
│   └── index-[hash].css   # Styles
├── sw.js                  # Service Worker
└── manifest.json          # PWA Manifest
```

## 🔐 Sicherheit

### Admin Panel
- GitHub OAuth/Token Authentifizierung
- Token in LocalStorage (Development)
- Backend für OAuth (Production)
- Nur authentifizierte Commits

### Blog
- Statische Generierung (keine DB)
- XSS-Schutz durch React
- Content Security Policy

### Analytics
- GDPR-konform (Umami)
- Keine Cookies
- Anonymisierte Daten

## 🚀 Performance

### Optimierungen
- Code Splitting
- Lazy Loading
- Image Optimization
- PWA Caching
- Gzip Compression

### Metriken
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: 90+

## 🔄 State Persistierung

### LocalStorage Keys
```javascript
// LearnBuddy
'activeBuddy'
'favoriteBuddies'
'planItems'
'completedLessons'

// Blog
'recentSearches'
'viewCounts'

// Admin
'github_token'
'github_user'

// Theme
'theme'
'language'
```

## 📱 Responsive Design

### Breakpoints
```css
sm: 640px   /* Mobile */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large Desktop */
```

### Mobile-First Approach
- Base styles für Mobile
- Media Queries für größere Screens
- Touch-optimierte Interaktionen

