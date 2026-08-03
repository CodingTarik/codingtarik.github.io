export default {
  id: 'schroedinger-style',
  title: 'Web Dev: The Schrödinger Way',
  description: 'A fun, hand-drawn style Paged.js book exploring Web Development concepts. Fully A4 print optimized!',
  type: 'book',
  category: 'Special Edition',
  level: 'Beginner',
  duration: 'Book (4 Pages)',
  author: 'Tarik Azzouzi & Schrödinger',
  coverImage: 'https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&w=1200&q=80',
  featured: true,
  tags: ['Paged.js', 'Fun', 'Creative', 'PDF'],
  pagedOptions: {
    pageSize: 'A4',
    margin: '25mm'
  },
  chapters: [
    {
      id: 'cover-page',
      title: 'Chapter 1: The Cover',
      chapterNumber: 1,
      content: `
<style>
  /* Schrödinger Style Overrides */
  .schroedinger-font { font-family: 'Comic Sans MS', 'Chalkboard SE', 'Marker Felt', cursive; }
  .sketch-box { border: 3px dashed #6b21a8; padding: 15px; border-radius: 20px; background: #faf5ff; transform: rotate(-1deg); }
  .marker-highlight { background-color: #fef08a; padding: 2px 10px; border-radius: 8px; font-weight: bold; }
  .purple-accent { color: #7e22ce; }
</style>

<div style="text-align: center; padding-top: 50px;">
  <!-- SVG Cover Graphic -->
  <svg width="250" height="250" viewBox="0 0 200 200" style="margin: 0 auto; display: block;">
    <circle cx="100" cy="100" r="90" fill="none" stroke="#f59e0b" stroke-width="8" stroke-dasharray="10 8" />
    <path d="M60,80 Q100,20 140,80 Q160,120 100,160 Q40,120 60,80 Z" fill="#f59e0b" opacity="0.9" />
    <text x="100" y="110" font-family="monospace" font-size="28" font-weight="bold" fill="white" text-anchor="middle">{'<Code>'}</text>
  </svg>

  <h1 class="schroedinger-font" style="font-size: 4rem; font-weight: 900; color: #111; margin-top: 40px; line-height: 1.1;">
    Web Dev:<br/>
    <span class="purple-accent">The Schrödinger Way</span>
  </h1>
  
  <p class="sketch-box schroedinger-font" style="display: inline-block; margin-top: 30px; font-size: 1.3rem; color: #444;">
    No cats were harmed in this PDF export. 🐾
  </p>
</div>

<div class="page-break"></div>

<h2 class="schroedinger-font purple-accent" style="font-size: 3rem; font-weight: 800; padding-bottom: 10px; margin-top: 40px;">
  Hey there! 👋
</h2>
<p style="font-size: 1.25rem; font-weight: 500;">
  This book demonstrates the absolute power of <span class="marker-highlight">Paged.js</span>.
</p>
<p style="font-size: 1.25rem;">
  Notice how this page is completely clean and follows the A4 format perfectly when you click <em>Export PDF</em>? 
  The <code>&lt;div class="page-break"&gt;&lt;/div&gt;</code> element manually pushed this text to page 2!
</p>

<!-- A cool scratch / hand-drawn SVG underline -->
<div style="position: relative; display: inline-block; margin-top: 30px; transform: rotate(-2deg);">
  <span class="schroedinger-font" style="font-size: 2.5rem; font-weight: bold; position: relative; z-index: 10; color: #111;">Let's build cool stuff.</span>
  <svg width="100%" height="30" style="position: absolute; bottom: -15px; left: 0; z-index: 1;" preserveAspectRatio="none">
    <path d="M0,20 Q50,0 100,20 Q150,30 200,10" fill="none" stroke="#10b981" stroke-width="5" stroke-linecap="round" />
    <path d="M10,25 Q60,5 110,25 Q160,35 210,15" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" />
  </svg>
</div>

<div style="position: absolute; right: 20px; top: 100px;">
  <svg width="80" height="80" viewBox="0 0 100 100">
    <path d="M20,80 Q50,20 80,80" fill="none" stroke="#7e22ce" stroke-width="6" stroke-linecap="round" />
    <circle cx="50" cy="50" r="10" fill="#7e22ce" />
  </svg>
  <p class="schroedinger-font purple-accent" style="font-size: 1.2rem; transform: rotate(15deg);">MAGIC!</p>
</div>
`
    },
    {
      id: 'the-magic',
      title: 'Chapter 2: The Magic of CSS',
      chapterNumber: 2,
      content: `
<h2 class="schroedinger-font" style="font-size: 3rem; color: #111; position: relative; display: inline-block;">
  The Magic of CSS
  <svg width="100%" height="20" style="position: absolute; bottom: -5px; left: 0;" preserveAspectRatio="none">
    <path d="M0,10 Q50,0 100,10 Q150,20 200,10" fill="none" stroke="#f59e0b" stroke-width="6" />
  </svg>
</h2>

<p style="font-size: 1.25rem;">
  When building books for print using web technologies, CSS is your absolute best friend.
</p>

<div class="sketch-box" style="margin: 40px 0; transform: rotate(1deg);">
  <p class="schroedinger-font" style="font-size: 1.4rem; color: #111; margin: 0;">
    "CSS is the duct tape of the internet. It holds everything together visually."
  </p>
</div>

<p style="font-size: 1.25rem;">
  For example, to prevent paragraphs from being awkwardly cut in half across two pages in a PDF, we use the following CSS trick:
</p>

<pre style="background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 12px; box-shadow: 10px 10px 0px #7e22ce;"><code class="language-css">
.prose p {
  page-break-inside: avoid;
  break-inside: avoid;
}
</code></pre>

<div class="page-break"></div>

<h3 class="schroedinger-font" style="font-size: 2.5rem; background: #7e22ce; color: #fff; display: inline-block; padding: 10px 20px; transform: skewX(-10deg) rotate(-2deg); box-shadow: 5px 5px 0 #f59e0b;">
  <span style="display: inline-block; transform: skewX(10deg);">Print CSS is Awesome!</span>
</h3>

<p style="font-size: 1.25rem; margin-top: 30px;">
  This heading was forced onto a brand new page! You can export this entire document to PDF and see how beautifully it prints out.
</p>
<p style="font-size: 1.25rem;">
  Go ahead, click the <strong>Export PDF / Print</strong> button!
</p>

<div style="text-align: center; margin-top: 50px; position: relative;">
  <svg width="200" height="200" viewBox="0 0 100 100" style="display: inline-block;">
    <!-- Drawn Arrow -->
    <path d="M10,50 L40,80 L90,20" fill="none" stroke="#10b981" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Doodle Stars -->
    <path d="M80,10 L85,25 L100,25 L88,35 L92,50 L80,40 L68,50 L72,35 L60,25 L75,25 Z" fill="#fef08a" />
    <path d="M20,10 L22,17 L30,17 L24,22 L26,30 L20,25 L14,30 L16,22 L10,17 L18,17 Z" fill="#fef08a" />
  </svg>
  <p class="schroedinger-font purple-accent" style="font-weight: bold; font-size: 2rem; margin-top: -20px; transform: rotate(-5deg);">
    Export Successful!
  </p>
</div>
`
    }
  ]
};
