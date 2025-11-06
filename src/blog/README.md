# Blog System - Anleitung

Dieses Blog-System ermöglicht es dir, einfach neue Blog-Posts mittels Markdown zu erstellen.

## 📝 Neuen Blog-Post erstellen

### 1. Template kopieren

Kopiere die Datei `template_post.js` und benenne sie nach deinem Post:

```bash
cp src/blog/template_post.js src/blog/posts/mein-neuer-post.js
```

### 2. Metadaten anpassen

Öffne die neue Datei und fülle die Metadaten aus:

```javascript
export default {
  id: 'mein-neuer-post',              // Eindeutige ID (URL-freundlich)
  title: 'Mein neuer Post-Titel',     // Titel des Posts
  description: 'Kurze Beschreibung',  // Für SEO und Preview
  date: '2025-11-06',                 // Veröffentlichungsdatum
  author: 'Tarik',                    // Dein Name
  categories: ['Kategorie1'],         // Array von Kategorien
  thumbnail: '/path/to/image.jpg',    // Optional: Thumbnail
  featured: false,                     // Optional: Featured Post
  keywords: ['keyword1', 'keyword2'], // SEO Keywords
  
  content: `
    // Dein Markdown-Content hier
  `
};
```

### 3. Content schreiben

Der `content` wird in **Markdown** geschrieben. Du kannst auch HTML einfügen:

```markdown
# Hauptüberschrift

## Unterüberschrift

Dies ist ein **fetter** und *kursiver* Text.

### Code-Beispiele

\`\`\`javascript
const beispiel = 'Hello World';
\`\`\`

### HTML einfügen

<div style="padding: 20px; background: #f0f0f0;">
  Custom HTML Content
</div>

### Bilder

![Alt Text](/path/to/image.jpg)

### Listen

- Punkt 1
- Punkt 2
- Punkt 3
```

## 📁 Ordnerstruktur für Posts

Du kannst Unterordner für Kategorisierung erstellen:

```
src/blog/posts/
├── welcome.js
├── learnbuddy-project.js
├── technology/
│   ├── react-tips.js
│   └── javascript-tricks.js
├── personal/
│   └── my-journey.js
└── tutorials/
    └── how-to-build-pwa.js
```

Alle `.js` Dateien in `posts/` und Unterordnern werden automatisch erkannt!

## 🏷️ Kategorien

Kategorien werden automatisch aus allen Posts generiert. Du musst sie nur in den Post-Metadaten angeben:

```javascript
categories: ['Web Development', 'React', 'Tutorial']
```

## 🔍 SEO Features

Das Blog-System ist SEO-optimiert:

- ✅ Meta-Tags für Titel, Beschreibung, Keywords
- ✅ Open Graph Tags für Social Media
- ✅ Twitter Cards
- ✅ Structured Data (JSON-LD) für Search Engines
- ✅ Canonical URLs
- ✅ Responsive Images

## 📱 Social Media Integration

In der Sidebar (`src/blog/components/Sidebar.jsx`) kannst du deine Social-Media-Links anpassen:

```javascript
const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    url: 'https://github.com/deinusername',
  },
  // ... weitere Links
];
```

## 🎨 Design anpassen

Die Blog-Komponenten verwenden Tailwind CSS. Du kannst die Styles in den jeweiligen Komponenten anpassen:

- `BlogPage.jsx` - Haupt-Blog-Seite
- `PostCard.jsx` - Post-Vorschau-Karten
- `PostDetail.jsx` - Einzelner Post
- `Sidebar.jsx` - Seitenleiste

## 🚀 Deployment

Nach dem Build wird der Blog als statische Seite generiert. Die Posts werden zur Build-Zeit eingebunden.

```bash
npm run build
```

## 💡 Tipps

### Featured Posts

Setze `featured: true` für wichtige Posts. Diese werden hervorgehoben dargestellt.

### Thumbnails

Für beste Ergebnisse:
- Format: JPG oder PNG
- Größe: 1200x630px (optimal für Social Media)
- Speicherort: `public/blog-images/`

### Lesezeit

Die Lesezeit wird automatisch basierend auf der Wortanzahl berechnet (200 Wörter/Minute).

### Suchfunktion

Die Suche durchsucht:
- Post-Titel
- Beschreibungen
- Content
- Kategorien

## 📊 Sitemap generieren

Das Blog-System bietet Utilities zur Sitemap-Generierung in `src/blog/utils/seoUtils.js`:

```javascript
import { generateSitemapData } from './blog/utils/seoUtils';
import { getAllPosts } from './blog/utils/blogUtils';

const sitemapData = generateSitemapData(getAllPosts());
// Verwende sitemapData um eine sitemap.xml zu erstellen
```

## 🆘 Hilfe

Bei Fragen oder Problemen:
1. Schaue in die Beispiel-Posts (`welcome.js`, `learnbuddy-project.js`)
2. Verwende das Template (`template_post.js`)
3. Prüfe die Konsole auf Fehler

Viel Erfolg beim Bloggen! 🎉

