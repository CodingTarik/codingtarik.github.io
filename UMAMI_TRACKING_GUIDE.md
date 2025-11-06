# Umami Analytics - Tracking Guide 📊

## Wie bekomme ich eine Übersicht über Blog-Post Klicks?

### Methode 1: Events Dashboard (Empfohlen) ✅

1. **Gehe zu deinem Umami Dashboard**
   - Login bei https://umami.is
   - Wähle deine Website aus

2. **Navigiere zu "Events"**
   - Im linken Menü auf "Events" klicken
   - Hier siehst du alle getrackt Events

3. **Filtere nach "post-view"**
   - Suche nach dem Event `post-view`
   - Klicke darauf für Details

4. **Siehe Post-Details**
   - Du siehst alle Properties:
     - `postId` - ID des Posts
     - `postTitle` - Titel des Posts
     - `categories` - Kategorien
   - Sortiere nach Anzahl der Views

### Methode 2: Custom Dashboard erstellen

1. **Erstelle ein Custom Dashboard**
   - In Umami: Settings → Dashboards → New Dashboard

2. **Füge Widget hinzu**
   - Widget Type: "Events"
   - Event Name: `post-view`
   - Group by: `postTitle`

3. **Ergebnis**
   - Übersichtliche Liste aller Blog-Posts
   - Sortiert nach Anzahl der Views
   - Mit Balkendiagramm

### Methode 3: URL-basiertes Tracking

1. **Gehe zu "Pages"**
   - Im Umami Dashboard
   - Siehst du alle besuchten URLs

2. **Filtere nach `/blog/post/`**
   - Alle URLs die mit `#/blog/post/` beginnen
   - Zeigt direkte Page Views

---

## Alle getrackte Events im Blog

### 📄 **Post Events**
| Event | Beschreibung | Properties |
|-------|--------------|------------|
| `post-view` | Blog-Post wurde angezeigt | `postId`, `postTitle`, `categories` |
| `post-share` | Share-Button geklickt | `postId`, `postTitle`, `platform` |

### 🧭 **Navigation Events**
| Event | Beschreibung | Properties |
|-------|--------------|------------|
| `category-click` | Kategorie angeklickt | `category` |
| `search` | Suche durchgeführt | `query`, `resultsCount` |

### 🔗 **Interaction Events**
| Event | Beschreibung | Properties |
|-------|--------------|------------|
| `social-link-click` | Social Media Link geklickt | `platform`, `url` |
| `buy-me-coffee-click` | "Buy Me a Coffee" geklickt | - |
| `rss-feed-click` | RSS Feed geklickt | - |
| `outbound-link` | Externer Link geklickt | `url`, `linkText` |

### 📖 **Content Events**
| Event | Beschreibung | Properties |
|-------|--------------|------------|
| `toc-click` | Table of Contents geklickt | `heading` |
| `scroll-to-top` | Scroll-to-Top Button geklickt | - |

---

## Beispiel-Queries für Umami

### Top 10 Blog-Posts nach Views
```
Event: post-view
Group by: postTitle
Sort by: Count (descending)
Limit: 10
```

### Blog-Posts nach Kategorie
```
Event: post-view
Group by: categories
Sort by: Count (descending)
```

### Suchbegriffe mit Ergebnissen
```
Event: search
Group by: query
Show: resultsCount
```

### Meistgeklickte Social Media Links
```
Event: social-link-click
Group by: platform
Sort by: Count (descending)
```

---

## Dashboard-Widgets Empfehlungen

### Widget 1: Top Blog Posts
- **Type:** Bar Chart
- **Event:** `post-view`
- **Group by:** `postTitle`
- **Limit:** 10

### Widget 2: Popular Categories
- **Type:** Pie Chart
- **Event:** `category-click`
- **Group by:** `category`

### Widget 3: Search Queries
- **Type:** Table
- **Event:** `search`
- **Group by:** `query`
- **Show:** `resultsCount`

### Widget 4: Social Engagement
- **Type:** Bar Chart
- **Event:** `social-link-click`
- **Group by:** `platform`

### Widget 5: Content Engagement
- **Type:** Metric
- **Events:** 
  - `toc-click` (Table of Contents)
  - `scroll-to-top` (Scroll Button)
  - `buy-me-coffee-click` (Coffee Button)

---

## Erweiterte Analysen

### Conversion Funnel
1. **Page View** → Blog Post geöffnet
2. **post-view** → Post wurde gelesen
3. **toc-click** → User navigiert im Content
4. **scroll-to-top** → User scrollt zurück (engaged)
5. **post-share** → User teilt den Post (high engagement)
6. **buy-me-coffee-click** → User unterstützt dich (conversion!)

### Engagement Score berechnen
```
High Engagement:
- post-view + toc-click + scroll-to-top + post-share

Medium Engagement:
- post-view + toc-click

Low Engagement:
- post-view only
```

---

## Export & Reporting

### CSV Export
1. Gehe zu Events
2. Wähle Zeitraum
3. Klicke auf "Export"
4. Wähle "CSV"

### API Access (für Custom Reports)
```javascript
// Umami API Beispiel
const response = await fetch('https://umami.is/api/websites/{websiteId}/events', {
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN'
  }
});
```

---

## Best Practices

### 1. **Regelmäßig checken**
- Täglich: Quick Overview
- Wöchentlich: Detaillierte Analyse
- Monatlich: Trends & Patterns

### 2. **A/B Testing**
- Teste verschiedene Post-Titel
- Vergleiche Engagement nach Kategorie
- Optimiere basierend auf Daten

### 3. **Content-Strategie**
- Schreibe mehr über beliebte Themen
- Fokus auf Kategorien mit hohem Engagement
- Reagiere auf Suchbegriffe

### 4. **Alerts einrichten**
- Benachrichtigung bei hohem Traffic
- Alert bei neuen Suchbegriffen
- Notification bei Social Shares

---

## Troubleshooting

### Events werden nicht angezeigt?
1. ✅ Umami Script in `index.html` aktiviert?
2. ✅ Website ID korrekt?
3. ✅ `ANALYTICS_PROVIDER = 'umami'` in `analyticsWrapper.js`?
4. ✅ Browser Console: `window.umami` definiert?

### Events werden doppelt getrackt?
- Prüfe, ob Analytics-Komponente mehrfach gemountet wird
- Verwende `useEffect` mit Dependencies

### Falsche Daten?
- Cache leeren
- Inkognito-Modus testen
- Umami Dashboard refreshen

---

## Quick Reference

### Wichtigste Metriken für Blog-Success

1. **📊 Total Post Views** - Wie viele Posts wurden gelesen?
2. **🔥 Top 10 Posts** - Welche Posts sind am beliebtesten?
3. **📈 Engagement Rate** - Wie viele User interagieren?
4. **🔍 Search Queries** - Was suchen User?
5. **💰 Coffee Clicks** - Wie viele User unterstützen?

### Dashboard URL
```
https://umami.is/websites/{your-website-id}
```

### Event-Namen (Copy-Paste)
```
post-view
post-share
category-click
search
social-link-click
buy-me-coffee-click
rss-feed-click
toc-click
scroll-to-top
```

---

## Support & Hilfe

- 📚 Umami Docs: https://umami.is/docs
- 💬 Community: https://github.com/umami-software/umami/discussions
- 🎥 Video Tutorials: YouTube "Umami Analytics"

**Viel Erfolg mit deinem Blog! 🚀**

