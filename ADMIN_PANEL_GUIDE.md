# Admin Panel Guide 🛠️

Das Admin Panel ermöglicht es dir, Blog-Posts direkt über die Webseite zu erstellen, bearbeiten und zu GitHub zu committen.

## 🚀 Zugriff

Öffne das Admin Panel unter: `http://localhost:5173/#/admin` (oder deine Domain + `/#/admin`)

## 🔐 Authentifizierung

### Entwicklungsmodus (Aktuell)

1. Klicke auf "Sign in with GitHub"
2. Du wirst aufgefordert, einen **GitHub Personal Access Token** einzugeben
3. So erstellst du einen Token:
   - Gehe zu GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Klicke auf "Generate new token (classic)"
   - Gib dem Token einen Namen (z.B. "LearnBuddy Admin")
   - Wähle die **`repo`** Berechtigung (Full control of private repositories)
   - Klicke auf "Generate token"
   - **Kopiere den Token sofort** (du siehst ihn nur einmal!)
4. Füge den Token in das Prompt-Fenster ein

### Produktionsmodus (Optional)

Für eine OAuth-Authentifizierung:

1. Erstelle eine GitHub OAuth App:
   - GitHub → Settings → Developer settings → OAuth Apps → New OAuth App
   - Application name: `LearnBuddy Admin`
   - Homepage URL: `https://deine-domain.com`
   - Authorization callback URL: `https://deine-domain.com/admin`
   
2. Füge die Credentials zur `.env` hinzu:
   ```env
   VITE_GITHUB_CLIENT_ID=dein_client_id
   VITE_GITHUB_REDIRECT_URI=https://deine-domain.com/admin
   ```

## ✍️ Neuen Blog Post erstellen

1. Klicke auf den Tab **"New Post"**
2. Fülle die Metadaten aus:
   - **Title**: Titel des Posts (wird automatisch in eine ID umgewandelt)
   - **Description**: Kurze Beschreibung (wird in der Übersicht angezeigt)
   - **Post ID**: Automatisch generiert, kann aber angepasst werden
   - **Author**: Dein Name (Standard: Tarik Azzouzi)
   - **Date**: Veröffentlichungsdatum
   - **Categories**: Komma-getrennte Kategorien (z.B. "React, JavaScript, Web")
   - **Thumbnail URL**: Optional - URL zu einem Bild
   - **Featured**: Checkbox für hervorgehobene Posts

3. Schreibe den Content im **Markdown Editor**:
   - Nutze die Markdown-Syntax für Formatierung
   - Der Editor unterstützt:
     - Überschriften (`# H1`, `## H2`, etc.)
     - Listen (`-` oder `1.`)
     - Links (`[Text](URL)`)
     - Bilder (`![Alt](URL)`)
     - Code-Blöcke (``` ` ` ` ```)
     - Fett (`**text**`), Kursiv (`*text*`)
     - Und vieles mehr!

4. Klicke auf **"Preview"** um eine Vorschau zu sehen

5. Klicke auf **"Publish Post"** um zu speichern:
   - Der Post wird automatisch als `.js` Datei erstellt
   - Die Datei wird in `src/blog/posts/{kategorie}/{post-id}.js` gespeichert
   - Ein Commit wird automatisch zu GitHub gepusht
   - Der Post erscheint sofort auf der Webseite (nach Rebuild)

## ✏️ Bestehenden Post bearbeiten

1. Gehe zum Tab **"All Posts"**
2. Suche den Post (nutze die Suchleiste oder Filter)
3. Klicke auf den **Edit-Button** (Stift-Icon)
4. Bearbeite den Post
5. Klicke auf **"Update Post"**
   - Der bestehende Post wird überschrieben
   - Ein Update-Commit wird zu GitHub gepusht

## 🗑️ Post löschen

1. Gehe zum Tab **"All Posts"**
2. Klicke auf den **Delete-Button** (Papierkorb-Icon)
3. Bestätige die Löschung
4. Der Post wird aus GitHub entfernt

## 📝 Markdown Tipps

### Überschriften
```markdown
# H1 Überschrift
## H2 Überschrift
### H3 Überschrift
```

### Listen
```markdown
- Punkt 1
- Punkt 2
  - Unterpunkt

1. Nummeriert 1
2. Nummeriert 2
```

### Links & Bilder
```markdown
[Link Text](https://example.com)
![Bild Alt Text](https://example.com/image.jpg)
```

### Code
```markdown
Inline `code` mit Backticks

\`\`\`javascript
// Code Block
function hello() {
  console.log("Hello!");
}
\`\`\`
```

### Zitate
```markdown
> Dies ist ein Zitat
> über mehrere Zeilen
```

### Tabellen
```markdown
| Spalte 1 | Spalte 2 |
|----------|----------|
| Wert 1   | Wert 2   |
```

## 🎨 Best Practices

1. **Kategorien konsistent halten**: Nutze die gleichen Kategorien für ähnliche Posts
2. **Gute Beschreibungen**: Schreibe aussagekräftige Beschreibungen (100-200 Zeichen)
3. **Bilder optimieren**: Nutze komprimierte Bilder für schnellere Ladezeiten
4. **Vorschau nutzen**: Prüfe immer die Vorschau vor dem Publishen
5. **Sinnvolle IDs**: Lass die ID automatisch generieren oder wähle kurze, aussagekräftige IDs

## 🔧 Technische Details

### Dateistruktur
```
src/blog/posts/
├── kategorie1/
│   ├── post-id-1.js
│   └── post-id-2.js
└── kategorie2/
    └── post-id-3.js
```

### Post-Datei Format
```javascript
export default {
  id: 'post-id',
  title: 'Post Title',
  description: 'Post description',
  date: '2024-01-01',
  author: 'Tarik Azzouzi',
  categories: ['Category1', 'Category2'],
  thumbnail: 'https://...',
  featured: false,
  content: `
# Markdown Content
...
  `,
};
```

### GitHub API
- Nutzt die GitHub Contents API
- Commits werden mit deinem GitHub Account gemacht
- Branch: `master`
- Repository: `CodingTarik/learn_bouldering`

## 🚨 Troubleshooting

### "Failed to authenticate"
- Prüfe, ob dein Token noch gültig ist
- Stelle sicher, dass der Token die `repo` Berechtigung hat
- Generiere einen neuen Token wenn nötig

### "Failed to commit file"
- Prüfe deine Internetverbindung
- Stelle sicher, dass du Schreibrechte auf das Repository hast
- Prüfe, ob die Datei bereits existiert (bei neuen Posts)

### "Post not appearing on website"
- Der Build-Prozess muss laufen (in Entwicklung: automatisch)
- In Produktion: Warte auf den automatischen Deploy
- Prüfe die Browser-Console auf Fehler

## 📚 Weitere Ressourcen

- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub API Docs](https://docs.github.com/en/rest)
- [MDEditor Docs](https://uiwjs.github.io/react-md-editor/)

## 🎉 Viel Erfolg!

Bei Fragen oder Problemen, öffne ein Issue auf GitHub!

