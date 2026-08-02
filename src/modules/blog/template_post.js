export default {
  // ─── Metadata ───
  id: 'unique-post-id', // Eindeutige ID (z.B. 'getting-started-with-react')
  title: 'Dein Post-Titel',
  description: 'Eine kurze Beschreibung des Posts (für SEO und Preview)',
  date: '2025-11-06', // Format: YYYY-MM-DD
  lastModified: '2025-11-06', // Letztes Update
  author: 'Tarik', // Dein Name
  language: 'de', // 'de' oder 'en'

  // ─── Publishing ───
  published: true, // false = wird nicht auf der Seite angezeigt
  draft: false, // true = nur im Dev-Modus sichtbar
  featured: false, // Optional: Featured Post auf Homepage

  // ─── Categorization ───
  categories: ['Category1', 'Category2'], // Mehrere Kategorien möglich
  keywords: ['keyword1', 'keyword2', 'keyword3'], // SEO Keywords
  
  // ─── Media ───
  thumbnail: '/path/to/thumbnail.jpg', // Optional: Pfad zum Thumbnail-Bild
  socialImage: '/path/to/social-image.jpg', // Optional: Bild für Social Media Shares (1200x630)
  
  // ─── Content in Markdown ───
  content: `
# Dein Post-Titel

## Einleitung

Hier kommt dein Inhalt in **Markdown**-Format.

### Untertitel

Du kannst auch normale HTML-Elemente verwenden:

<div style="padding: 20px; background: #f0f0f0; border-radius: 8px;">
  <strong>Custom HTML Box:</strong> Flexibilität für spezielle Layouts!
</div>

## Code-Beispiele

\`\`\`javascript
const example = () => {
  console.log('Code-Highlighting funktioniert!');
};
\`\`\`

## Listen

- Punkt 1
- Punkt 2
- Punkt 3

## Bilder

![Alt Text](/path/to/image.jpg)

## Links

[Link zu einer Website](https://example.com)

---

**Ende des Posts**
`
};
