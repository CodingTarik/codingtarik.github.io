# Build & Deployment 🚀

Diese Anleitung zeigt dir, wie du LearnBuddy für Production baust und deployed.

## 📋 Voraussetzungen

- Node.js 18+ installiert
- npm oder yarn
- Git Repository
- Hosting-Plattform Account (Netlify, Vercel, oder GitHub Pages)

## 🔨 Build-Prozess

### Development Build

```bash
# Development Server starten
npm run dev

# Läuft auf http://localhost:5173
```

### Production Build

```bash
# Production Build erstellen
npm run build

# Output in /dist Ordner
```

### Build-Output

```
dist/
├── index.html              # Haupt-HTML
├── assets/
│   ├── index-[hash].js    # JavaScript Bundle (~3MB)
│   └── index-[hash].css   # CSS Bundle (~150KB)
├── sw.js                  # Service Worker (PWA)
├── workbox-[hash].js      # Workbox Runtime
├── manifest.json          # PWA Manifest
└── [static assets]        # Icons, Sounds, etc.
```

### Build-Optimierungen

```javascript
// vite.config.js
export default {
  build: {
    // Minification
    minify: 'terser',
    
    // Source Maps (optional)
    sourcemap: false,
    
    // Chunk Size Warning
    chunkSizeWarningLimit: 1000,
    
    // Manual Chunks (Code Splitting)
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'markdown': ['markdown-to-jsx'],
          'motion': ['framer-motion'],
        }
      }
    }
  }
}
```

## 🌐 Deployment-Optionen

### Option 1: Netlify (Empfohlen)

#### Schritt 1: Netlify Account erstellen
1. Gehe zu [netlify.com](https://netlify.com)
2. Sign up mit GitHub

#### Schritt 2: Repository verbinden
1. "New site from Git"
2. GitHub Repository auswählen
3. Branch: `master` oder `main`

#### Schritt 3: Build-Einstellungen
```
Build command: npm run build
Publish directory: dist
```

#### Schritt 4: Environment Variables
```
VITE_UMAMI_WEBSITE_ID=your-website-id
VITE_UMAMI_SRC=https://analytics.umami.is/script.js
VITE_GITHUB_CLIENT_ID=your-client-id (optional)
VITE_GITHUB_OAUTH_ENABLED=true (optional)
```

#### Schritt 5: Deploy
- Klicke "Deploy site"
- Automatischer Build & Deploy
- URL: `https://your-site.netlify.app`

#### Netlify Features
✅ Automatische Deploys bei Git Push
✅ Preview Deploys für Pull Requests
✅ Custom Domain Support
✅ HTTPS automatisch
✅ CDN weltweit
✅ Serverless Functions (für OAuth)

#### Netlify Functions (für OAuth)

`netlify/functions/github-oauth.js`:
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
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),
  };
};
```

### Option 2: Vercel

#### Schritt 1: Vercel Account
1. Gehe zu [vercel.com](https://vercel.com)
2. Sign up mit GitHub

#### Schritt 2: Import Project
1. "New Project"
2. Import Git Repository
3. Framework: Vite

#### Schritt 3: Build Settings
```
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

#### Schritt 4: Environment Variables
Gleiche wie bei Netlify

#### Schritt 5: Deploy
- Klicke "Deploy"
- URL: `https://your-site.vercel.app`

#### Vercel Features
✅ Automatische Deploys
✅ Preview Deploys
✅ Edge Network
✅ Serverless Functions
✅ Analytics

### Option 3: GitHub Pages

#### Schritt 1: GitHub Actions Workflow

`.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
      env:
        VITE_UMAMI_WEBSITE_ID: ${{ secrets.VITE_UMAMI_WEBSITE_ID }}
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

#### Schritt 2: Repository Settings
1. Settings → Pages
2. Source: `gh-pages` branch
3. Save

#### Schritt 3: Base URL anpassen

`vite.config.js`:
```javascript
export default {
  base: '/learn_bouldering/', // Repository name
}
```

#### GitHub Pages Features
✅ Kostenlos
✅ Automatische Deploys
✅ HTTPS
❌ Keine Serverless Functions
❌ Langsamer als Netlify/Vercel

### Option 4: Custom Server

#### Nginx Configuration

`/etc/nginx/sites-available/learnbuddy`:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    root /var/www/learnbuddy/dist;
    index index.html;
    
    # SPA Routing
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Gzip Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

#### SSL mit Let's Encrypt
```bash
sudo certbot --nginx -d your-domain.com
```

## 🔧 Environment Variables

### Development (.env.local)
```env
VITE_UMAMI_WEBSITE_ID=dev-website-id
VITE_UMAMI_SRC=https://analytics.umami.is/script.js
VITE_GITHUB_CLIENT_ID=dev-client-id
VITE_GITHUB_OAUTH_ENABLED=false
```

### Production
Setze in Hosting-Plattform:
```env
VITE_UMAMI_WEBSITE_ID=prod-website-id
VITE_UMAMI_SRC=https://analytics.umami.is/script.js
VITE_GITHUB_CLIENT_ID=prod-client-id
VITE_GITHUB_OAUTH_ENABLED=true
VITE_GITHUB_OAUTH_ENDPOINT=https://your-domain.com/api/github-oauth
```

## 📊 Performance-Optimierung

### 1. Code Splitting
```javascript
// Lazy Loading
const AdminPanel = lazy(() => import('./admin/AdminPanel'));

<Suspense fallback={<Loading />}>
  <AdminPanel />
</Suspense>
```

### 2. Image Optimization
```bash
# Bilder komprimieren
npm install -g imagemin-cli

imagemin public/images/* --out-dir=public/images/optimized
```

### 3. Bundle Analysis
```bash
npm install -D rollup-plugin-visualizer

# In vite.config.js
import { visualizer } from 'rollup-plugin-visualizer';

plugins: [
  visualizer({ open: true })
]
```

### 4. PWA Caching
```javascript
// vite.config.js
VitePWA({
  workbox: {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
          }
        }
      }
    ]
  }
})
```

## 🔍 SEO-Optimierung

### Meta Tags (index.html)
```html
<head>
  <title>LearnBuddy - Interactive Learning Platform</title>
  <meta name="description" content="Learn new skills with interactive buddies and comprehensive tutorials.">
  <meta name="keywords" content="learning, education, tutorials, bouldering, programming">
  
  <!-- Open Graph -->
  <meta property="og:title" content="LearnBuddy">
  <meta property="og:description" content="Interactive Learning Platform">
  <meta property="og:image" content="https://your-domain.com/og-image.jpg">
  <meta property="og:url" content="https://your-domain.com">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="LearnBuddy">
  <meta name="twitter:description" content="Interactive Learning Platform">
  <meta name="twitter:image" content="https://your-domain.com/twitter-image.jpg">
</head>
```

### Sitemap
```bash
# Generiere Sitemap
npm install -D sitemap

# sitemap-generator.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://your-domain.com' });
const writeStream = createWriteStream('./dist/sitemap.xml');

sitemap.pipe(writeStream);
sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/blog', changefreq: 'daily', priority: 0.9 });
// ... more URLs
sitemap.end();
```

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://your-domain.com/sitemap.xml
```

## 🔒 Sicherheit

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://analytics.umami.is; 
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
               img-src 'self' data: https:;
               font-src 'self' https://fonts.gstatic.com;">
```

### HTTPS
- Immer HTTPS in Production
- Automatisch mit Netlify/Vercel
- Let's Encrypt für Custom Server

## 📈 Monitoring

### Analytics
- Umami Dashboard: https://analytics.umami.is
- Vercel Analytics (optional)
- Google Analytics (optional)

### Error Tracking
```bash
npm install @sentry/react

# In main.jsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: import.meta.env.MODE,
});
```

### Performance Monitoring
- Lighthouse CI
- Web Vitals
- Vercel Speed Insights

## ✅ Pre-Deployment Checkliste

- [ ] Build erfolgreich (`npm run build`)
- [ ] Keine Console Errors
- [ ] Alle Links funktionieren
- [ ] Bilder laden
- [ ] Responsive Design getestet
- [ ] Dark Mode funktioniert
- [ ] PWA installierbar
- [ ] SEO Meta Tags gesetzt
- [ ] Analytics konfiguriert
- [ ] Environment Variables gesetzt
- [ ] HTTPS aktiviert
- [ ] Custom Domain konfiguriert (optional)

## 🐛 Troubleshooting

### Build Fehler
```bash
# Cache leeren
rm -rf node_modules dist
npm install
npm run build
```

### 404 Errors
- Prüfe Routing (Hash-based)
- Prüfe Base URL in vite.config.js
- Prüfe Server Configuration

### Performance Issues
- Bundle Size analysieren
- Code Splitting implementieren
- Bilder optimieren
- CDN nutzen

## 🎉 Fertig!

Deine App ist jetzt live! 🚀

**URL**: https://your-domain.com
**Admin**: https://your-domain.com/#/admin
**Blog**: https://your-domain.com/#/blog

