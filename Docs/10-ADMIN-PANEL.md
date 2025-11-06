# Admin Panel Guide 🛠️

Das Admin Panel ermöglicht es dir, Blog-Posts direkt über die Webseite zu erstellen, bearbeiten und zu GitHub zu committen.

## 🚀 Zugriff

### Development
```
http://localhost:5173/#/admin
```

### Production
```
https://deine-domain.com/#/admin
```

## 🔐 Authentifizierung

### Development Mode (Standard)

1. Klicke auf **"Sign in with GitHub"**
2. Du wirst aufgefordert, einen **GitHub Personal Access Token** einzugeben

#### Token erstellen:
1. Gehe zu GitHub → [Settings](https://github.com/settings/tokens)
2. Developer settings → Personal access tokens → Tokens (classic)
3. **"Generate new token (classic)"**
4. Token-Name: `LearnBuddy Admin`
5. Wähle Berechtigung: **`repo`** (Full control of private repositories)
6. **"Generate token"**
7. **Kopiere den Token sofort** (nur einmal sichtbar!)
8. Füge Token im Prompt ein

### Production Mode (OAuth)

Siehe [GitHub OAuth Setup](./11-GITHUB-OAUTH.md) für Details.

## ✍️ Neuen Post erstellen

### 1. Tab "New Post" öffnen

### 2. Metadaten ausfüllen

#### Title *
- Klarer, beschreibender Titel
- 50-60 Zeichen optimal
- Wird automatisch in ID umgewandelt

**Beispiel:**
```
How to Build a React App with TypeScript
```

#### Description *
- Kurze Zusammenfassung
- 100-200 Zeichen
- Wird in Übersicht angezeigt

**Beispiel:**
```
Learn how to set up a React application with TypeScript, including configuration and best practices.
```

#### Post ID *
- Automatisch generiert aus Titel
- URL-friendly (nur Kleinbuchstaben, Bindestriche)
- Kann manuell angepasst werden

**Beispiel:**
```
how-to-build-react-app-typescript
```

#### Author
- Standard: Tarik Azzouzi
- Kann angepasst werden

#### Date
- Standard: Heutiges Datum
- Format: YYYY-MM-DD

#### Categories
- Komma-getrennte Liste
- Erste Kategorie = Ordner-Name

**Beispiel:**
```
React, TypeScript, Tutorial
```

#### Thumbnail URL (Optional)
- URL zu einem Bild
- Empfohlen: 1200x630px
- Format: JPG, PNG, WebP

**Beispiel:**
```
https://images.unsplash.com/photo-...
```

#### Featured
- Checkbox für hervorgehobene Posts
- Erscheint prominent auf Startseite

### 3. Content schreiben

#### Markdown Editor
- Vollständiger Markdown-Support
- Syntax-Highlighting
- Live-Formatierung

#### Unterstützte Syntax
```markdown
# Überschriften
## H2
### H3

**Fett** *Kursiv* ~~Durchgestrichen~~

[Links](https://example.com)

![Bilder](https://example.com/image.jpg)

- Listen
- Punkte

1. Nummerierte
2. Listen

> Zitate

`Inline Code`

```javascript
// Code-Blöcke
function hello() {
  console.log("Hello!");
}
```
```

### 4. Preview prüfen

- Klicke auf **"Preview"**
- Prüfe Formatierung
- Prüfe Layout
- Prüfe Bilder
- Zurück mit **"Back to Editor"**

### 5. Publishen

- Klicke auf **"Publish Post"**
- Post wird validiert
- Datei wird generiert
- **Automatischer Commit zu GitHub**
- Success-Meldung

## ✏️ Post bearbeiten

### 1. Tab "All Posts" öffnen

### 2. Post finden
- Nutze Suchleiste
- Oder filtere nach Kategorie
- Oder scrolle durch Liste

### 3. Edit-Button klicken
- Stift-Icon rechts am Post

### 4. Änderungen vornehmen
- Gleicher Editor wie bei "New Post"
- Alle Felder editierbar

### 5. Speichern
- Klicke auf **"Update Post"**
- **Automatischer Update-Commit zu GitHub**

## 🗑️ Post löschen

### 1. Tab "All Posts" öffnen

### 2. Delete-Button klicken
- Papierkorb-Icon rechts am Post

### 3. Bestätigen
- Sicherheitsabfrage
- **Unwiderruflich!**

### 4. Commit
- Post wird aus GitHub gelöscht
- Datei wird entfernt

## 🔍 Posts durchsuchen

### Suchleiste
- Sucht in Titel und Beschreibung
- Echtzeit-Suche
- Case-insensitive

### Kategorie-Filter
- Dropdown-Menü
- Zeigt nur Posts dieser Kategorie
- "All Categories" für Reset

### Statistiken
- **Total Posts**: Gesamtanzahl
- **Categories**: Anzahl Kategorien
- **Featured**: Anzahl Featured Posts

## ⚙️ Settings

### GitHub Repository
- Zeigt verbundenes Repository
- Standard: `CodingTarik/learn_bouldering`

### Auto-commit
- Checkbox: Automatisches Committen
- Standard: aktiviert

## 🎨 Features

### Markdown Editor
- **Toolbar**: Formatierungs-Buttons
- **Preview**: Split-View (optional)
- **Shortcuts**: Keyboard-Shortcuts
- **Auto-Save**: Entwürfe (in Entwicklung)

### Validierung
- **Required Fields**: Title, Description, Content
- **ID Validation**: Keine Duplikate
- **Date Validation**: Gültiges Datum
- **Category Validation**: Mindestens eine

### Preview
- **Exakte Darstellung**: Wie im echten Blog
- **Responsive**: Mobile/Desktop
- **Dark Mode**: Unterstützt
- **Animations**: Wie im Blog

### GitHub Integration
- **Auto-Commit**: Automatisches Committen
- **Commit Messages**: Aussagekräftig
- **Branch**: Master/Main
- **File Path**: Automatisch generiert

## 📝 Workflow

### Typischer Workflow

```
1. Login → Admin Panel
2. "New Post" → Metadaten eingeben
3. Content schreiben → Markdown Editor
4. Preview prüfen → Formatierung OK?
5. Publish → Auto-Commit
6. Fertig! → Post ist live
```

### Bearbeiten

```
1. "All Posts" → Post suchen
2. Edit klicken → Änderungen vornehmen
3. Update → Auto-Commit
4. Fertig! → Post aktualisiert
```

## 🔒 Sicherheit

### Token-Speicherung
- **LocalStorage**: Development
- **Session**: Temporär
- **Nie im Code**: Sicher

### Berechtigungen
- **Repo-Zugriff**: Nur mit Token
- **Commit-Rechte**: Nur Authentifizierte
- **Read-Only**: Ohne Token

### Best Practices
- ✅ Token regelmäßig erneuern
- ✅ Token nicht teilen
- ✅ Logout nach Nutzung
- ❌ Token nicht in Git
- ❌ Token nicht öffentlich

## 🐛 Troubleshooting

### "Failed to authenticate"
**Problem**: Token ungültig oder abgelaufen

**Lösung**:
1. Neuen Token generieren
2. Prüfe `repo` Berechtigung
3. Logout und neu einloggen

### "Failed to commit file"
**Problem**: Keine Schreibrechte oder Netzwerkfehler

**Lösung**:
1. Prüfe Internetverbindung
2. Prüfe Repository-Rechte
3. Prüfe Token-Berechtigungen
4. Versuche erneut

### "Post not appearing"
**Problem**: Build-Prozess läuft noch

**Lösung**:
1. Warte auf Build (1-2 Minuten)
2. Browser-Cache leeren
3. Hard-Refresh (Ctrl+Shift+R)
4. Prüfe Console auf Fehler

### "Markdown not rendering"
**Problem**: Syntax-Fehler im Markdown

**Lösung**:
1. Prüfe Code-Block Syntax (```)
2. Prüfe Escaping von Sonderzeichen
3. Nutze Preview zur Überprüfung

### "Images not loading"
**Problem**: Ungültige URL oder CORS

**Lösung**:
1. Prüfe URL (https://)
2. Nutze öffentliche Bild-URLs
3. Teste URL im Browser

## 💡 Tipps & Tricks

### Keyboard Shortcuts
```
Ctrl/Cmd + S  : Speichern (in Entwicklung)
Ctrl/Cmd + P  : Preview Toggle
Esc           : Dialog schließen
```

### Markdown Shortcuts
```
Ctrl/Cmd + B  : Fett
Ctrl/Cmd + I  : Kursiv
Ctrl/Cmd + K  : Link
```

### Schnelles Editieren
1. Nutze Suchleiste für schnellen Zugriff
2. Kategorie-Filter für thematische Posts
3. Sortierung nach Datum

### Content-Tipps
1. Schreibe Titel zuerst
2. Dann Beschreibung
3. Dann Content
4. Preview oft nutzen
5. Speichere regelmäßig (Ctrl+S)

### SEO-Optimierung
1. Keywords in Titel
2. Keywords in Beschreibung
3. Alt-Texte für Bilder
4. Interne Links
5. Strukturierte Überschriften

## 📚 Ressourcen

### Markdown
- [Markdown Guide](https://www.markdownguide.org/)
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### GitHub
- [Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [GitHub API](https://docs.github.com/en/rest)

### Editor
- [MDEditor Docs](https://uiwjs.github.io/react-md-editor/)

## 🎯 Best Practices

### Content-Erstellung
✅ Klare Struktur
✅ Aussagekräftige Titel
✅ Gute Beschreibungen
✅ Relevante Kategorien
✅ Optimierte Bilder

### Workflow
✅ Preview vor Publish
✅ Regelmäßige Backups
✅ Konsistente Namensgebung
✅ Versionierung nutzen

### Sicherheit
✅ Token sicher aufbewahren
✅ Logout nach Nutzung
✅ Berechtigungen minimal halten

## 🎉 Viel Erfolg!

Das Admin Panel macht Blog-Management einfach und effizient! 🚀

