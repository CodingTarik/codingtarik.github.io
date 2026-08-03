export default {
  id: 'web-dev-foundations',
  title: 'Web Development Foundations Masterclass',
  description: 'Vom ersten HTML-Tag bis zur modernen React-Anwendung: Der ultimative praxisnahe Einstieg in die moderne Webentwicklung.',
  type: 'lessons',
  category: 'Frontend',
  level: 'Anfänger',
  duration: '2 Std. 45 Min.',
  author: 'Tarik Azzouzi',
  coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
  featured: true,
  tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'WebDev'],
  lessons: [
    {
      id: 'html-css-basics',
      title: 'Lektion 1: Moderne HTML5 Semantic & CSS Layouts',
      duration: '35 Min.',
      description: 'Lerne semantische HTML-Strukturen, CSS Flexbox und Grid für performante und barrierefreie Layouts.',
      content: `
# Lektion 1: Moderne HTML5 Semantic & CSS Layouts

Willkommen zur ersten Lektion der **Web Development Foundations**! In diesem Modul legen wir das Fundament für sauberes, semantisches HTML und modernes Flexbox/Grid-Design.

> [!INFO]
> Semantisches HTML hilft nicht nur Screenreadern für Barrierefreiheit (Accessibility), sondern ist auch entscheidend für Suchmaschinenoptimierung (SEO).

---

## 1. Semantisches HTML5

Verwende stets aussagekräftige HTML5-Elemente statt anonymer \`<div>\`-Wüsten:

\`\`\`html
<header className="site-header">
  <nav className="main-nav">
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
  </nav>
</header>

<main className="content">
  <article className="post">
    <h1>Moderne Webarchitektur</h1>
    <p>Inhalt des Artikels...</p>
  </article>
</main>
\`\`\`

---

## 2. Flexbox vs. CSS Grid

Beide Layout-Modelle ergänzen sich perfekt:
- **Flexbox**: Für eindimensionale Ausrichtungen (Zeile ODER Spalte).
- **CSS Grid**: Für zweidimensionale Komplettlayouts (Zeilen UND Spalten).

### Flexbox Beispiel

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
}
\`\`\`

### CSS Grid Beispiel

\`\`\`css
.grid-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
\`\`\`

---

## Zusammenfassung & Übung

> [!TIP]
> **Praxis-Tipp**: Baue eine einfache Kartendarstellung mit Flexbox für den Header und CSS Grid für das Bilder-Raster.
`
    },
    {
      id: 'javascript-es6-async',
      title: 'Lektion 2: Async JavaScript, Promises & Fetch API',
      duration: '45 Min.',
      description: 'Verstehe die Event Loop, Asynchronität mit Promises und modernem async/await sowie REST API Aufrufe.',
      content: `
# Lektion 2: Async JavaScript, Promises & Fetch API

JavaScript ist single-threaded, kann aber dank des Event Loops und asynchroner Schnittstellen komplexe Operationen ohne Blockieren des UI-Threads verarbeiten.

---

## 1. Asynchronität mit async/await

Das Schlüsselwort \`async/await\` macht asynchronen Code so gut lesbar wie synchronen Code:

\`\`\`javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    if (!response.ok) {
      throw new Error(\`HTTP-Fehler! Status: \${response.status}\`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fehler beim Laden der Benutzerdaten:', error);
  }
}
\`\`\`

---

## 2. Der JavaScript Event Loop

> [!WARNING]
> Blockierende synchrone Schleifen frieren den Browser-Tab komplett ein. Nutze immer asynchrone Web APIs für Netzwerk- oder I/O-Aufgaben!

- **Call Stack**: Verarbeitet aktuelle Funktionsaufrufe.
- **Microtask Queue**: Hält Promises und \`queueMicrotask\` Aufrufe (höhere Priorität).
- **Macrotask Queue**: Hält \`setTimeout\`, \`setInterval\` und I/O Operations.
`
    },
    {
      id: 'react-state-architecture',
      title: 'Lektion 3: React Hooks & State Management',
      duration: '50 Min.',
      description: 'Entwickle wiederverwendbare UI-Komponenten mit useState, useEffect, useContext und custom Hooks.',
      content: `
# Lektion 3: React Hooks & State Management

React revolutioniert den UI-Bau durch ein deklaratives, komponentenbasiertes Programmiermodell.

---

## 1. State und Lifecycle mit Hooks

Kombiniere \`useState\` und \`useEffect\` für saubere Datenflüsse:

\`\`\`jsx
import React, { useState, useEffect } from 'react';

export function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    async function load() {
      setLoading(true);
      const res = await fetch(\`/api/users/\${userId}\`);
      const data = await res.json();
      if (isMounted) {
        setUser(data);
        setLoading(false);
      }
    }
    
    load();
    return () => { isMounted = false; };
  }, [userId]);

  if (loading) return <div>Lädt Profil...</div>;
  return <div className="user-card">{user?.name}</div>;
}
\`\`\`

> [!TIP]
> **Clean-up Funktion**: Denke in \`useEffect\` immer daran, nicht mehr benötigte Event Listener oder Subscriptions in der Cleanup-Funktion aufzuräumen.
`
    },
    {
      id: 'performance-deployment',
      title: 'Lektion 4: Performance Optimierung & Deployment',
      duration: '45 Min.',
      description: 'Lighthouse Audits, Code-Splitting, Lazy Loading und CI/CD Deployment auf Vercel oder GitHub Pages.',
      content: `
# Lektion 4: Performance Optimierung & Deployment

Der beste Code bringt nichts, wenn die Seite langsam lädt oder schwere Bundles übertragen werden.

---

## 1. Core Web Vitals

Achte beim Audit auf die Hauptkennzahlen:
- **LCP (Largest Contentful Paint)**: Messung der Ladezeit des Hauptinhalts (< 2.5s).
- **FID / INP (Interaction to Next Paint)**: Reaktionsfreudigkeit auf Benutzereingaben (< 200ms).
- **CLS (Cumulative Layout Shift)**: Visuelle Stabilität des Layouts (< 0.1).

---

## 2. Dynamic Imports & Lazy Loading

\`\`\`jsx
import React, { lazy, Suspense } from 'react';

const HeavyChartComponent = lazy(() => import('./HeavyChartComponent'));

export function AnalyticsDashboard() {
  return (
    <Suspense fallback={<div className="spinner">Diagramm lädt...</div>}>
      <HeavyChartComponent />
    </Suspense>
  );
}
\`\`\`

Herzlichen Glückwunsch! Du hast alle Lektionen dieses Kurses abgeschlossen! 🥳
`
    }
  ]
};
