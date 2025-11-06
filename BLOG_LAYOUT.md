# 🎨 Blog Layout & Design

## Layout-Übersicht

Das Blog hat ein **komplett eigenständiges Design** mit **linker Sidebar** und **keinem Header oben**.

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  ┌──────────┐  ┌───────────────────────────┐  │
│  │          │  │                           │  │
│  │  SIDEBAR │  │      MAIN CONTENT         │  │
│  │  (Links) │  │      (Blog Posts)         │  │
│  │          │  │                           │  │
│  │  Fixed   │  │      Scrollable           │  │
│  │  320px   │  │                           │  │
│  │          │  │                           │  │
│  └──────────┘  └───────────────────────────┘  │
│                                                 │
└─────────────────────────────────────────────────┘
```

## 📐 Blog Sidebar (Links, Fixed)

### Position & Größe
- **Position**: `fixed left-0 top-0 bottom-0`
- **Breite**: `320px` (w-80)
- **Scroll**: Vertikal scrollbar bei viel Inhalt
- **Z-Index**: Über Content

### Inhalt (von oben nach unten):

1. **Blog-Header**
   ```
   Tarik's Blog        ← Gradient Titel (purple → pink)
   Gedanken & Projekte ← Untertitel
   ```

2. **Theme Toggle**
   - Light/Dark Mode Button
   - Icon + Text

3. **"Go to LearnBuddy" Button** 🎯
   - Prominenter Button
   - Gradient: `teal → orange`
   - Icon: BookOpen
   - Hover: Shadow + Scale

4. **Suchfeld**
   - Live-Search
   - Icon links
   - Placeholder: "Suche..."

5. **Kategorien-Filter**
   - "Alle Beiträge" Button
   - Dynamische Kategorie-Buttons
   - Active State: purple Background

6. **Neueste Beiträge**
   - Top 5 Posts
   - Titel + Datum
   - Klickbar

7. **Über mich** (mit Border-Top)
   - Kurz-Bio
   - CV-Link (PDF)

8. **Social Media** (mit Border-Top)
   - GitHub
   - LinkedIn
   - Discord
   - Email

## 📄 Main Content Area

### Position & Größe
- **Margin-Left**: `320px` (ml-80) - Platz für Sidebar
- **Padding**: `32px` (p-8)
- **Max-Width**: `896px` (max-w-4xl) + centered

### Content
- **Blog Posts** als Karten (PostCard)
- **Spacing**: `24px` zwischen Posts (space-y-6)
- **Empty State**: "Keine Beiträge gefunden"

## 🎨 Design-Details

### Farben

**Blog-spezifische Farben:**
```css
Primary:   #9333ea (purple-600) → #db2777 (pink-600)  /* Gradient */
Hover:     #a855f7 (purple-500)
Background: #fafaf9 (stone-50) / #1c1917 (stone-900)  /* Light/Dark */
```

**LearnBuddy-Farben:**
```css
Primary:   #14b8a6 (teal-500) → #f97316 (orange-500)  /* Gradient */
```

### Typography

```css
Blog-Titel:      3xl (30px), bold, gradient
Untertitel:      sm (14px), stone-600
Section-Header:  sm (14px), bold
Post-Titel:      2xl (24px), bold
Body-Text:       sm/base (14-16px)
```

### Spacing

```css
Sidebar-Padding:     24px (p-6)
Content-Padding:     32px (p-8)
Section-Spacing:     24px (space-y-6)
Element-Spacing:     12px (gap-3)
```

### Borders & Shadows

```css
Sidebar-Border:  1px right, stone-200/800
Cards-Shadow:    shadow-md (medium)
Hover-Shadow:    shadow-xl (extra large)
Border-Radius:   8-12px (rounded-lg/xl)
```

## 📱 Responsive Design

### Desktop (Standard)
```
┌──────────┬─────────────────┐
│ Sidebar  │  Main Content   │
│ 320px    │  Flex-1         │
└──────────┴─────────────────┘
```

### Mobile/Tablet (< 1024px)
**TODO**: Mobile Layout noch implementieren
- Sidebar als Hamburger-Menu?
- Oder Sidebar ausblenden?
- Oder Blog nicht mobil verfügbar?

## 🔄 Navigation & Interactions

### Sidebar-Interactions

**Blog-Titel (Click)**
```javascript
→ Scroll to top
→ Clear search
→ Clear category filter
```

**Theme Toggle (Click)**
```javascript
→ Switch Light ↔ Dark Mode
→ Persisted in localStorage
```

**Go to LearnBuddy (Click)**
```javascript
→ onBackToLearnBuddy()
→ window.location.hash = '#/learnbuddy/...'
```

**Search Input (Type)**
```javascript
→ Real-time filter
→ Searches: title, description, content, categories
```

**Category Button (Click)**
```javascript
→ Filter posts by category
→ Active state: purple background
```

**Recent Post (Click)**
```javascript
→ onPostClick(postId)
→ window.location.hash = '#/blog/post/...'
```

### Main Content Interactions

**Post Card (Click)**
```javascript
→ onPostClick(postId)
→ Navigate to PostDetail
```

## 🎯 VS LearnBuddy Layout

| Aspekt | Blog | LearnBuddy |
|--------|------|------------|
| Header | ❌ Kein Header oben | ✅ GlobalHeader (fixed top) |
| Navigation | 🔲 Sidebar links (fixed) | 🔽 Bottom Nav (fixed bottom) |
| Layout | Sidebar + Content | Header + Content + Bottom Nav |
| Gradient | Purple → Pink | Teal → Orange |
| Spacing | ml-80 (320px) | pt-16 pb-20 |

## 📊 Component-Hierarchie

```
Blog View
│
├── BlogPage.jsx
│   ├── BlogSidebar.jsx (Links, Fixed)
│   │   ├── Header-Section
│   │   ├── Theme-Toggle
│   │   ├── Go-to-LearnBuddy-Button
│   │   ├── Search-Input
│   │   ├── Categories
│   │   ├── Recent-Posts
│   │   ├── About-Section
│   │   └── Social-Media
│   │
│   └── Main-Content
│       └── PostCard.jsx (Multiple)
│
└── PostDetail.jsx
    ├── Sidebar-Placeholder (w-80, leer)
    └── Article-Content
```

## 🎨 Theme Support

### Dark Mode
```css
Background:   stone-900
Text:         stone-100/200/300
Borders:      stone-800
Cards:        stone-800
Hover:        stone-700
```

### Light Mode
```css
Background:   stone-50
Text:         stone-800/600/500
Borders:      stone-200
Cards:        white
Hover:        stone-100
```

## ✨ Besondere Features

### Gradient-Titel
```jsx
<h1 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
  Tarik's Blog
</h1>
```

### Go-to-LearnBuddy Button
```jsx
<button className="bg-gradient-to-r from-teal-500 to-orange-500 hover:scale-[1.02]">
  <BookOpen /> Go to LearnBuddy
</button>
```

### Smooth Scrolling
```javascript
window.scrollTo({ top: 0, behavior: 'smooth' });
```

### Active States
```jsx
{isActive ? 'bg-purple-100 text-purple-700' : 'hover:bg-stone-100'}
```

## 🔧 Anpassungen

### Sidebar-Breite ändern
```jsx
// In BlogSidebar.jsx
className="w-80"  // Aktuell 320px

// In BlogPage.jsx & PostDetail.jsx
className="ml-80" // Muss gleich sein!
```

### Farben ändern
```jsx
// Blog-Gradient (Sidebar & Komponenten)
from-purple-600 to-pink-600  → Deine Farben

// Button-Gradient
from-teal-500 to-orange-500  → Deine Farben
```

### Social-Links anpassen
```jsx
// In BlogSidebar.jsx
const socialLinks = [
  { url: 'https://github.com/DEINNAME', ... },
  // ...
];
```

## 📸 Layout-Beispiel

```
╔══════════════════════════════════════════════════════╗
║ SIDEBAR (320px)          │  MAIN CONTENT            ║
║ ┌──────────────────┐     │  ┌────────────────────┐  ║
║ │ Tarik's Blog     │     │  │ ╔════════════════╗ │  ║
║ │ Gedanken & ...   │     │  │ ║  POST CARD 1   ║ │  ║
║ └──────────────────┘     │  │ ║  Titel, Desc   ║ │  ║
║                          │  │ ║  Categories    ║ │  ║
║ [ 🌙 Dark Mode ]        │  │ ╚════════════════╝ │  ║
║                          │  │                    │  ║
║ ┏━━━━━━━━━━━━━━━━━┓    │  │ ╔════════════════╗ │  ║
║ ┃ Go to LearnBuddy ┃    │  │ ║  POST CARD 2   ║ │  ║
║ ┗━━━━━━━━━━━━━━━━━┛    │  │ ║  ...           ║ │  ║
║                          │  │ ╚════════════════╝ │  ║
║ 🔍 [  Suche...    ]     │  │                    │  ║
║                          │  │ ╔════════════════╗ │  ║
║ KATEGORIEN               │  │ ║  POST CARD 3   ║ │  ║
║ [ Alle ] [ React ]      │  │ ║  ...           ║ │  ║
║                          │  │ ╚════════════════╝ │  ║
║ NEUESTE POSTS            │  │                    │  ║
║ • Post 1                 │  └────────────────────┘  ║
║ • Post 2                 │                          ║
║                          │                          ║
║ ÜBER MICH                │                          ║
║ Hi! Ich bin Tarik...    │                          ║
║                          │                          ║
║ SOCIAL MEDIA             │                          ║
║ 🐙 GitHub                │                          ║
║ 💼 LinkedIn              │                          ║
╚══════════════════════════════════════════════════════╝
```

---

**Design-System**: Modern, Clean, Minimal  
**Inspiration**: Medium, Dev.to, Notion  
**Status**: ✅ Implementiert & Funktional

