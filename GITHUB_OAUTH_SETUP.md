# GitHub OAuth Setup für Production 🔐

## 📋 Übersicht

Das Admin Panel unterstützt zwei Authentifizierungsmodi:

1. **Development Mode**: Personal Access Token (aktuell aktiv)
2. **Production Mode**: GitHub OAuth Flow (empfohlen für Production)

## 🚀 Production Mode einrichten

### Schritt 1: GitHub OAuth App erstellen

1. Gehe zu GitHub: https://github.com/settings/developers
2. Klicke auf **"OAuth Apps"** → **"New OAuth App"**
3. Fülle das Formular aus:
   ```
   Application name: LearnBuddy Admin Panel
   Homepage URL: https://deine-domain.com
   Application description: Admin Panel für Blog-Management
   Authorization callback URL: https://deine-domain.com/#/admin/callback
   ```
4. Klicke auf **"Register application"**
5. **Kopiere** die Client ID
6. Klicke auf **"Generate a new client secret"**
7. **Kopiere** das Client Secret (nur einmal sichtbar!)

### Schritt 2: Backend Server für Token Exchange

⚠️ **Wichtig**: OAuth erfordert einen Backend-Server, da das Client Secret nicht im Frontend gespeichert werden darf!

#### Option A: Netlify Functions (Empfohlen)

Erstelle eine Serverless Function:

**`netlify/functions/github-oauth.js`**:
```javascript
exports.handler = async (event) => {
  const { code } = JSON.parse(event.body);
  
  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code: code,
    }),
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
```

**Netlify Environment Variables**:
```
GITHUB_CLIENT_ID=deine_client_id
GITHUB_CLIENT_SECRET=dein_client_secret
```

#### Option B: Vercel Serverless Function

**`api/github-oauth.js`**:
```javascript
export default async function handler(req, res) {
  const { code } = req.body;

  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code: code,
    }),
  });

  const data = await response.json();
  res.status(200).json(data);
}
```

**Vercel Environment Variables**:
```
GITHUB_CLIENT_ID=deine_client_id
GITHUB_CLIENT_SECRET=dein_client_secret
```

#### Option C: Eigener Backend Server

**Express.js Beispiel**:
```javascript
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/github-oauth', async (req, res) => {
  const { code } = req.body;

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: code,
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'OAuth failed' });
  }
});

app.listen(3000);
```

### Schritt 3: Environment Variables setzen

Erstelle eine `.env` Datei (bereits als `.env.example` vorhanden):

```env
# GitHub OAuth
VITE_GITHUB_CLIENT_ID=deine_github_client_id
VITE_GITHUB_OAUTH_ENABLED=true
VITE_GITHUB_OAUTH_ENDPOINT=https://deine-domain.com/api/github-oauth
```

**Für Production (z.B. Netlify/Vercel)**:
Setze die Environment Variables in den Deployment-Settings:
- `VITE_GITHUB_CLIENT_ID`
- `VITE_GITHUB_OAUTH_ENABLED=true`
- `VITE_GITHUB_OAUTH_ENDPOINT=https://deine-domain.com/api/github-oauth`

### Schritt 4: Code ist bereits vorbereitet!

Der Code in `useGitHub.js` erkennt automatisch den Modus basierend auf den Environment Variables.

## 🔄 Zwischen Modi wechseln

### Development Mode (Standard)
```env
# Keine Environment Variables oder:
VITE_GITHUB_OAUTH_ENABLED=false
```
→ Nutzt Personal Access Token

### Production Mode
```env
VITE_GITHUB_CLIENT_ID=your_client_id
VITE_GITHUB_OAUTH_ENABLED=true
VITE_GITHUB_OAUTH_ENDPOINT=https://your-domain.com/api/github-oauth
```
→ Nutzt OAuth Flow

## 🧪 Lokales Testen des OAuth Flows

1. Erstelle eine GitHub OAuth App mit Callback URL: `http://localhost:5173/#/admin/callback`
2. Setze Environment Variables:
   ```env
   VITE_GITHUB_CLIENT_ID=deine_test_client_id
   VITE_GITHUB_OAUTH_ENABLED=true
   VITE_GITHUB_OAUTH_ENDPOINT=http://localhost:3000/api/github-oauth
   ```
3. Starte deinen Backend-Server auf Port 3000
4. Starte die App: `npm run dev`
5. Gehe zu `http://localhost:5173/#/admin`

## 📊 Vergleich der Modi

| Feature | Development Mode | Production Mode |
|---------|-----------------|-----------------|
| Setup | ✅ Einfach | ⚠️ Backend nötig |
| Sicherheit | ⚠️ Token im Browser | ✅ Sicher |
| User Experience | ⚠️ Token manuell eingeben | ✅ Ein-Klick Login |
| Empfohlen für | Entwicklung, Testing | Production |

## 🔒 Sicherheitshinweise

### ❌ NIEMALS:
- Client Secret im Frontend-Code
- Client Secret in Git committen
- Personal Access Tokens teilen
- Tokens in öffentlichen Repositories

### ✅ IMMER:
- Client Secret nur im Backend
- Environment Variables für Secrets
- `.env` in `.gitignore`
- HTTPS in Production
- Token-Ablaufdatum setzen

## 🐛 Troubleshooting

### "OAuth redirect URI mismatch"
- Prüfe, ob die Callback URL in der GitHub App exakt mit deiner URL übereinstimmt
- Format: `https://deine-domain.com/#/admin/callback`

### "Bad credentials"
- Prüfe Client ID und Secret
- Stelle sicher, dass Environment Variables korrekt gesetzt sind

### "CORS error"
- Backend muss CORS für deine Frontend-Domain erlauben
- Bei Netlify/Vercel: automatisch konfiguriert

### Token wird nicht gespeichert
- Prüfe Browser-Console auf Fehler
- Stelle sicher, dass localStorage verfügbar ist
- Prüfe, ob Third-Party Cookies blockiert sind

## 📚 Weitere Ressourcen

- [GitHub OAuth Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions)

## 💡 Empfehlung

Für Production empfehle ich:
1. **Netlify** oder **Vercel** für Hosting (kostenlos)
2. **Serverless Functions** für OAuth (automatisch skalierbar)
3. **Environment Variables** über Dashboard setzen
4. **GitHub OAuth App** mit Production URL

So ist dein Admin Panel sicher, benutzerfreundlich und production-ready! 🚀

