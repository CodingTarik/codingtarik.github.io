# Blog Posts erstellen ✍️

Es gibt zwei Möglichkeiten, Blog Posts zu erstellen: Manuell oder über das Admin Panel.

## 🎯 Methode 1: Admin Panel (Empfohlen)

### Zugriff
```
http://localhost:5173/#/admin
```

### Schritt-für-Schritt

1. **Authentifizierung**
   - Klicke auf "Sign in with GitHub"
   - Gib deinen GitHub Personal Access Token ein
   - Oder nutze OAuth (Production)

2. **Neuen Post erstellen**
   - Tab "New Post" wählen
   - Metadaten ausfüllen:
     - **Title**: Post-Titel
     - **Description**: Kurzbeschreibung (100-200 Zeichen)
     - **Author**: Dein Name
     - **Date**: Veröffentlichungsdatum
     - **Categories**: Komma-getrennt (z.B. "React, JavaScript, Web")
     - **Thumbnail**: URL zum Bild (optional)
     - **Featured**: Checkbox für hervorgehobene Posts

3. **Content schreiben**
   - Nutze den Markdown Editor
   - Formatierung mit Markdown-Syntax
   - Code-Blöcke mit ` ``` ` umschließen

4. **Preview prüfen**
   - Klicke auf "Preview"
   - Prüfe Formatierung und Layout
   - Zurück zum Editor mit "Back to Editor"

5. **Publishen**
   - Klicke auf "Publish Post"
   - Post wird automatisch zu GitHub committed
   - Datei wird in `src/blog/posts/{kategorie}/{post-id}.js` erstellt

### Vorteile
✅ Benutzerfreundlich
✅ Live Preview
✅ Automatisches Committen
✅ Validierung
✅ Keine manuelle Datei-Erstellung

## 📝 Methode 2: Manuell

### Schritt 1: Template kopieren

Kopiere `src/blog/template_post.js`:

```bash
cp src/blog/template_post.js src/blog/posts/category/my-post.js
```

### Schritt 2: Post-Datei bearbeiten

`src/blog/posts/category/my-post.js`:

```javascript
export default {
  // Eindeutige ID (URL-friendly)
  id: 'my-awesome-post',
  
  // Titel
  title: 'My Awesome Post',
  
  // Kurzbeschreibung (wird in Übersicht angezeigt)
  description: 'This is a short description of my post that appears in the overview.',
  
  // Veröffentlichungsdatum (YYYY-MM-DD)
  date: '2024-01-15',
  
  // Autor
  author: 'Tarik Azzouzi',
  
  // Kategorien (Array)
  categories: ['React', 'JavaScript', 'Tutorial'],
  
  // Thumbnail URL (optional)
  thumbnail: 'https://example.com/image.jpg',
  
  // Featured Post (optional, default: false)
  featured: true,
  
  // Social Media Bild (optional)
  socialImage: 'https://example.com/social-image.jpg',
  
  // Keywords für SEO (optional)
  keywords: ['react', 'javascript', 'web development'],
  
  // Markdown Content
  content: `
# My Awesome Post

Welcome to my blog post!

## Introduction

This is the introduction...

### Subsection

More content here...

## Code Example

\`\`\`javascript
function hello() {
  console.log("Hello World!");
}
\`\`\`

## Lists

- Item 1
- Item 2
- Item 3

## Links

Check out [my website](https://example.com)!

## Images

![Alt text](https://example.com/image.jpg)

## Conclusion

Thanks for reading!
  `
};
```

### Schritt 3: Commit & Push

```bash
git add src/blog/posts/category/my-post.js
git commit -m "Add new blog post: My Awesome Post"
git push
```

### Vorteile
✅ Volle Kontrolle
✅ Versionierung
✅ Offline-Arbeit

### Nachteile
❌ Keine Live Preview
❌ Manuelles Committen
❌ Fehleranfälliger

## 📚 Markdown Syntax

### Überschriften
```markdown
# H1 Überschrift
## H2 Überschrift
### H3 Überschrift
#### H4 Überschrift
```

### Text-Formatierung
```markdown
**Fett**
*Kursiv*
~~Durchgestrichen~~
`Inline Code`
```

### Listen
```markdown
# Ungeordnet
- Punkt 1
- Punkt 2
  - Unterpunkt

# Geordnet
1. Erster
2. Zweiter
3. Dritter
```

### Links & Bilder
```markdown
[Link Text](https://example.com)
![Bild Alt Text](https://example.com/image.jpg)
```

### Code-Blöcke
````markdown
```javascript
function example() {
  return "Hello World";
}
```
````

### Zitate
```markdown
> Dies ist ein Zitat
> über mehrere Zeilen
```

### Tabellen
```markdown
| Spalte 1 | Spalte 2 | Spalte 3 |
|----------|----------|----------|
| Wert 1   | Wert 2   | Wert 3   |
| Wert 4   | Wert 5   | Wert 6   |
```

### Horizontale Linie
```markdown
---
```

## 🎨 Best Practices

### 1. **Gute Titel**
```
✅ "How to Build a React App with TypeScript"
❌ "React App"
```

### 2. **Aussagekräftige Beschreibungen**
```
✅ "Learn how to set up a React application with TypeScript, including configuration, best practices, and common pitfalls to avoid."
❌ "React tutorial"
```

### 3. **Passende Kategorien**
```
✅ ['React', 'TypeScript', 'Tutorial']
❌ ['Programming', 'Stuff', 'Things']
```

### 4. **Sinnvolle IDs**
```
✅ 'react-typescript-setup-guide'
❌ 'post123'
```

### 5. **Struktur**
```markdown
# Haupttitel

## Einleitung
Worum geht es?

## Hauptteil
### Unterabschnitt 1
### Unterabschnitt 2

## Fazit
Zusammenfassung
```

### 6. **Code-Beispiele**
- Immer Syntax-Highlighting nutzen
- Kommentare hinzufügen
- Vollständige, funktionierende Beispiele

### 7. **Bilder**
- Optimierte Größe (< 500KB)
- Aussagekräftige Alt-Texte
- Relevante Bilder

## 🔍 SEO Optimierung

### Meta-Daten
```javascript
{
  title: 'Klarer, beschreibender Titel (50-60 Zeichen)',
  description: 'Genaue Beschreibung mit Keywords (150-160 Zeichen)',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  socialImage: 'https://example.com/og-image.jpg'
}
```

### Content
- Klare Überschriften-Hierarchie (H1 → H2 → H3)
- Keywords natürlich einbauen
- Interne Links zu anderen Posts
- Externe Links zu Quellen
- Alt-Texte für Bilder

### URL
- Kurz und beschreibend
- Nur Kleinbuchstaben
- Bindestriche statt Leerzeichen
- Keine Sonderzeichen

## 📂 Ordnerstruktur

```
src/blog/posts/
├── react/
│   ├── react-hooks-guide.js
│   ├── react-performance.js
│   └── react-typescript.js
│
├── javascript/
│   ├── async-await-explained.js
│   └── es6-features.js
│
├── tutorial/
│   ├── git-basics.js
│   └── docker-intro.js
│
└── general/
    └── welcome-post.js
```

## 🎯 Post-Typen

### Tutorial
```javascript
{
  title: 'How to Build...',
  categories: ['Tutorial', 'React'],
  content: `
    # Step-by-step guide
    ## Prerequisites
    ## Step 1
    ## Step 2
    ## Conclusion
  `
}
```

### Guide
```javascript
{
  title: 'Complete Guide to...',
  categories: ['Guide', 'JavaScript'],
  content: `
    # Comprehensive overview
    ## Introduction
    ## Core Concepts
    ## Advanced Topics
    ## Best Practices
  `
}
```

### News/Update
```javascript
{
  title: 'What\'s New in React 19',
  categories: ['News', 'React'],
  content: `
    # Latest updates
    ## New Features
    ## Breaking Changes
    ## Migration Guide
  `
}
```

### Opinion
```javascript
{
  title: 'Why I Prefer TypeScript',
  categories: ['Opinion', 'TypeScript'],
  content: `
    # Personal perspective
    ## My Experience
    ## Pros and Cons
    ## Conclusion
  `
}
```

## ✅ Checkliste vor dem Publishen

- [ ] Titel ist klar und beschreibend
- [ ] Beschreibung ist aussagekräftig
- [ ] Kategorien sind passend
- [ ] Datum ist korrekt
- [ ] Content ist vollständig
- [ ] Rechtschreibung geprüft
- [ ] Code-Beispiele getestet
- [ ] Links funktionieren
- [ ] Bilder sind optimiert
- [ ] Preview geprüft
- [ ] SEO-Daten vollständig

## 🐛 Troubleshooting

### Post erscheint nicht
- Prüfe Datei-Export (`export default {...}`)
- Prüfe Datei-Pfad (`src/blog/posts/...`)
- Browser-Cache leeren
- Build neu starten

### Markdown wird nicht gerendert
- Prüfe Template-Strings (Backticks)
- Prüfe Escaping von Sonderzeichen
- Prüfe Code-Block Syntax

### Bilder laden nicht
- Prüfe URL (https://)
- Prüfe CORS-Einstellungen
- Nutze optimierte Bilder

## 📚 Ressourcen

- [Markdown Guide](https://www.markdownguide.org/)
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [SEO Best Practices](https://developers.google.com/search/docs)
- [Writing for the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/)

## 🎉 Fertig!

Dein Blog Post ist jetzt live! 🚀

