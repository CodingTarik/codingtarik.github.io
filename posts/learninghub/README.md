# Learning Hub Content & Book Authoring Guide

Welcome to the **Learning Hub** content directory! This guide explains how to create, format, and publish interactive **Series (Courses)** and **Paged.js Books (PDF-optimised A4 eBooks)**.

---

## 📁 File Structure & Registration

All learning materials are defined as standalone JavaScript objects inside `posts/learninghub/`:

- `web-dev-foundations.js`: Interactive course (series)
- `modern-developer-handbook.js`: Interactive course (series)
- `schroedinger-style.js`: Paged.js eBook (book)
- `bob-learns-infosec.js`: Paged.js eBook mit Terminal/Glitch-Design ("Bob learns Information Security Management", 6 Seiten)

### Registering a New Course/Book
To make a new course or book visible on the website:
1. Create your JS file in `posts/learninghub/your-course-name.js`.
2. Open `src/modules/learninghub/data/coursesData.js`.
3. Import your course file and add it to the exported `courses` array.

---

## 📚 Types of Content

| Field | Type | Description |
| :--- | :--- | :--- |
| `type: 'series'` | Interactive Course | Rendered with lesson sidebars, series navigation, and progress tracking. |
| `type: 'book'` | Paged.js A4 eBook | Rendered as printable A4 paper pages with PDF export, continuous scroll, and page jumps. |

---

## ⚙️ Special Tags & Directives for eBooks (`type: 'book'`)

You can control page layout and pagination by embedding simple HTML tags inside your markdown:

### 1. Page Breaks
Forces a new A4 page both on-screen and in PDF export.
```html
<div class="page-break"></div>
```

### 2. Full-Bleed Cover Page Themes
Removes container padding and headers to create seamless, edge-to-edge cover artwork. Choose from 5 built-in themes:

```html
<!-- Theme 1: Deep Navy Cosmic -->
<div class="cover-page full-bleed book-cover-blue">...</div>

<!-- Theme 2: Cyberpunk Purple/Neon -->
<div class="cover-page full-bleed book-cover-cyberpunk">...</div>

<!-- Theme 3: Forest Emerald -->
<div class="cover-page full-bleed book-cover-emerald">...</div>

<!-- Theme 4: Sunset Amber -->
<div class="cover-page full-bleed book-cover-sunset">...</div>

<!-- Theme 5: Obsidian Gold Minimalist -->
<div class="cover-page full-bleed book-cover-minimal">...</div>
```

### 3. Suppress Header on a Specific Page
Hides the top `Chapter X • Page Y` header bar on the page where it appears.
```html
<div class="no-header"></div>
```

---

## 🎨 Built-in Helper CSS Classes

Use these pre-configured classes to quickly style your books without writing custom CSS:

### Text Highlights & Markers
```html
<span class="marker-yellow">Highlighted text</span>
<span class="marker-green">Success text</span>
<span class="marker-purple">Purple text</span>
```

### Custom Callout & Sketch Boxes
```html
<!-- Sketch Box with purple dashed border -->
<div class="sketch-box">
  <p>Important hand-drawn style note!</p>
</div>

<!-- Blue Quote Box with accent border -->
<div class="quote-box-blue">
  <p>"Inspiration quote or tip here."</p>
</div>

<!-- Dark Styled Code Container -->
<div class="code-box-dark">
  <pre>const magic = true;</pre>
</div>
```

---

## 🖨️ PDF Export Best Practices

When users click **Export PDF / Print**:
1. All elements with `.marker-*`, `.sketch-box`, and custom background colors automatically retain their full colors (`print-color-adjust: exact`).
2. **Browser Print Dialog**: Make sure **Background Graphics** is checked in the browser print window to ensure background gradients print completely.

---

## 📝 Example Book Template

```javascript
export default {
  id: 'my-awesome-book',
  title: 'My Awesome eBook',
  description: 'An A4 PDF-optimized book exploring tech topics.',
  type: 'book',
  category: 'Development',
  level: 'Beginner',
  duration: 'Book (3 Pages)',
  author: 'Your Name',
  pagedOptions: {
    pageSize: 'A4',
    margin: '0mm'
  },
  chapters: [
    {
      id: 'chapter-1',
      title: 'Introduction',
      chapterNumber: 1,
      content: `
<div class="cover-page full-bleed book-cover-blue">
  <h1>My Awesome eBook</h1>
  <p>By Your Name</p>
</div>

<div class="page-break"></div>

<h2>Welcome 👋</h2>
<p>This is page 2 with <span class="marker-yellow">yellow highlights</span>!</p>

<div class="sketch-box">
  <p>A fun sketch box note.</p>
</div>
`
    }
  ]
};
```
