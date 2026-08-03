export default {
  id: 'schroedinger-style',
  title: 'Web Dev: The Schrödinger Way',
  description: 'A fun, hand-drawn style Paged.js book exploring Web Development concepts. Fully A4 print optimized!',
  type: 'book',
  category: 'Special Edition',
  level: 'Beginner',
  duration: 'Book (4 Pages)',
  author: 'Prof. S. Schrödinger',
  coverImage: 'https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&w=1200&q=80',
  featured: true,
  tags: ['Paged.js', 'Fun', 'Creative', 'PDF'],
  pagedOptions: {
    pageSize: 'A4',
    margin: '0mm'
  },
  chapters: [
    {
      id: 'cover-page',
      title: 'Cover & Introduction',
      chapterNumber: 1,
      content: `
<div class="cover-page full-bleed book-cover-blue">

  <!-- Stars -->
  <div style="position:absolute;top:8%;left:12%;width:6px;height:6px;background-color:#ffffff;border-radius:50%;opacity:0.9;"></div>
  <div style="position:absolute;top:18%;left:78%;width:4px;height:4px;background-color:#ffd700;border-radius:50%;opacity:0.9;"></div>
  <div style="position:absolute;top:65%;left:8%;width:5px;height:5px;background-color:#ffffff;border-radius:50%;opacity:0.7;"></div>
  <div style="position:absolute;top:80%;left:85%;width:4px;height:4px;background-color:#a78bfa;border-radius:50%;opacity:0.9;"></div>

  <!-- Schrödinger Character SVG -->
  <svg width="220" height="270" viewBox="0 0 220 280" style="display:block;margin:0 auto 20px;" xmlns="http://www.w3.org/2000/svg">
    <path d="M55,100 Q20,160 25,250 Q70,230 110,240 Q150,230 195,250 Q200,160 165,100 Q140,115 110,110 Q80,115 55,100 Z" fill="#7c3aed"/>
    <path d="M65,105 Q35,160 38,230 Q70,218 110,225 Q150,218 182,230 Q185,160 155,105 Q135,118 110,113 Q85,118 65,105 Z" fill="#4c1d95"/>
    <path d="M70,100 Q90,90 110,88 Q130,90 150,100 Q140,115 110,112 Q80,115 70,100 Z" fill="#a855f7"/>
    <rect x="80" y="110" width="60" height="90" rx="5" fill="#1e293b"/>
    <polygon points="110,115 104,130 110,160 116,130" fill="#ef4444"/>
    <polygon points="95,112 110,122 95,118" fill="#ffffff"/>
    <polygon points="125,112 110,122 125,118" fill="#ffffff"/>
    <ellipse cx="110" cy="80" rx="35" ry="38" fill="#f5d0a9"/>
    <circle cx="97" cy="76" r="11" fill="none" stroke="#1e293b" stroke-width="2.5"/>
    <circle cx="123" cy="76" r="11" fill="none" stroke="#1e293b" stroke-width="2.5"/>
    <line x1="108" y1="76" x2="112" y2="76" stroke="#1e293b" stroke-width="2.5"/>
    <circle cx="97" cy="76" r="5" fill="#1e3a5f"/>
    <circle cx="123" cy="76" r="5" fill="#1e3a5f"/>
    <path d="M98,95 Q110,105 122,95" fill="none" stroke="#8b4513" stroke-width="2" stroke-linecap="round"/>
    <path d="M76,68 Q78,42 90,38 Q110,30 130,38 Q142,42 144,68 Q135,55 110,52 Q85,55 76,68 Z" fill="#5c3d11"/>
    <rect x="78" y="30" width="64" height="8" rx="2" fill="#1e293b"/>
    <circle cx="110" cy="14" r="4" fill="#ffd700"/>
    <path d="M80,120 Q60,140 55,165" stroke="#f5d0a9" stroke-width="12" stroke-linecap="round" fill="none"/>
    <path d="M140,120 Q160,140 165,165" stroke="#f5d0a9" stroke-width="12" stroke-linecap="round" fill="none"/>
    <rect x="30" y="158" width="22" height="30" rx="3" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
    <path d="M168,125 L170,118 L172,125 L179,127 L172,129 L170,136 L168,129 L161,127 Z" fill="#ffd700"/>
    <rect x="90" y="200" width="18" height="45" rx="5" fill="#1e293b"/>
    <rect x="112" y="200" width="18" height="45" rx="5" fill="#1e293b"/>
    <ellipse cx="99" cy="247" rx="14" ry="7" fill="#111827"/>
    <ellipse cx="121" cy="247" rx="14" ry="7" fill="#111827"/>
  </svg>

  <p style="color:#a78bfa;font-size:0.85rem;letter-spacing:6px;text-transform:uppercase;font-weight:800;margin:0 0 8px;font-family:monospace;">
    ✦ Special Edition ✦
  </p>
  <h1 class="book-title-sketch" style="color:#ffffff;line-height:1.15;margin:0 0 15px;">
    Web Dev:<br/><span style="color:#fbbf24;">The Schrödinger Way</span>
  </h1>
  <div style="display:inline-block;border:2px dashed #a78bfa;border-radius:12px;padding:8px 22px;transform:rotate(-2deg);">
    <p style="color:#e2e8f0;font-family:monospace;font-size:0.95rem;margin:0;">No cats were harmed in this PDF export. 🐾</p>
  </div>
  <p style="color:#94a3b8;font-size:0.8rem;margin:15px 0 0;font-style:italic;">By Prof. S. Schrödinger &bull; Illustrated Edition</p>
</div>

<div class="page-break"></div>

<h2 class="book-title-sketch" style="position:relative;display:inline-block;">
  Hey there! 👋
  <svg width="100%" height="15" style="position:absolute;bottom:-8px;left:0;" preserveAspectRatio="none" viewBox="0 0 200 15" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,8 Q50,2 100,8 Q150,14 200,8" fill="none" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
  </svg>
</h2>

<p style="font-size:1.15rem;color:#1e293b;line-height:1.8;">
  Welcome to this special book — designed to showcase the absolute power of <span class="marker-yellow">Paged.js</span>.
</p>
<p style="font-size:1.15rem;color:#1e293b;line-height:1.8;">
  Notice how the cover has a deep blue background with Schrödinger? Each page in this book is fully A4 optimized!
</p>

<div class="quote-box-blue">
  <p style="font-family:'Comic Sans MS',cursive;font-size:1.25rem;color:#0c4a6e;margin:0;font-style:italic;">
    "The page-break tag is like Schrödinger's cat — until you print, you don't know if it worked!"
  </p>
  <p style="color:#0369a1;font-size:0.85rem;font-weight:bold;margin:6px 0 0;">— Prof. Schrödinger, probably</p>
</div>

<div style="position:relative;display:inline-block;margin-top:15px;">
  <span style="font-family:'Comic Sans MS',cursive;font-size:1.9rem;font-weight:bold;color:#1e293b;display:block;">Let's build cool stuff.</span>
  <svg width="300" height="18" style="position:absolute;bottom:-6px;left:0;" viewBox="0 0 300 18" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,10 Q75,2 150,10 Q225,18 300,10" fill="none" stroke="#10b981" stroke-width="5" stroke-linecap="round"/>
  </svg>
</div>
`
    },
    {
      id: 'css-magic',
      title: 'The Magic of Print CSS',
      chapterNumber: 2,
      content: `
<h2 class="book-title-sketch" style="position:relative;display:inline-block;">
  The Magic of CSS 🎨
  <svg width="100%" height="15" style="position:absolute;bottom:-5px;left:0;" preserveAspectRatio="none" viewBox="0 0 200 15" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,8 Q50,2 100,8 Q150,14 200,8" fill="none" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
  </svg>
</h2>

<p style="font-size:1.15rem;color:#1e293b;line-height:1.8;margin-bottom:20px;">
  When building books for print using web technologies, CSS is your best friend.
</p>

<div class="sketch-box">
  <p style="font-family:'Comic Sans MS',cursive;font-size:1.2rem;color:#4c1d95;margin:0;font-style:italic;">
    "CSS is the duct tape of the internet. It holds everything together — colorfully!"
  </p>
</div>

<p style="font-size:1.15rem;color:#1e293b;line-height:1.8;">
  To prevent paragraphs being cut across pages and to preserve colors in PDF export:
</p>

<div class="code-box-dark">
  <pre style="margin:0;font-family:monospace;font-size:0.9rem;color:#e2e8f0;white-space:pre-wrap;">.prose p {
  page-break-inside: <span class="marker-green">avoid</span>;
}
* {
  print-color-adjust: <span class="marker-yellow">exact</span> !important;
}</pre>
</div>

<div class="page-break"></div>

<div style="background-image:linear-gradient(135deg,#7c3aed,#2563eb);display:inline-block;padding:14px 28px;border-radius:14px;transform:rotate(-1deg);box-shadow:5px 5px 0 #fbbf24;margin-bottom:25px;">
  <h3 style="font-family:'Comic Sans MS',cursive;font-size:1.9rem;color:#ffffff;margin:0;">
    🎉 Print CSS is Awesome!
  </h3>
</div>

<p style="font-size:1.15rem;color:#1e293b;line-height:1.8;margin:20px 0;">
  This heading was forced onto a brand new page using <code class="marker-purple">&lt;div class="page-break"&gt;&lt;/div&gt;</code>!
</p>

<div style="text-align:center;margin-top:40px;">
  <svg width="200" height="170" viewBox="0 0 220 180" style="display:inline-block;" xmlns="http://www.w3.org/2000/svg">
    <circle cx="110" cy="90" r="75" fill="#ecfdf5" stroke="#10b981" stroke-width="4"/>
    <path d="M60,90 L90,125 L160,55" fill="none" stroke="#10b981" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M30,30 L33,22 L36,30 L44,33 L36,36 L33,44 L30,36 L22,33 Z" fill="#fbbf24"/>
    <path d="M185,20 L187,14 L189,20 L195,22 L189,24 L187,30 L185,24 L179,22 Z" fill="#a78bfa"/>
  </svg>
  <p style="font-family:'Comic Sans MS',cursive;color:#7c3aed;font-size:1.7rem;font-weight:bold;transform:rotate(-2deg);margin-top:5px;">
    Export Successful! ✨
  </p>
</div>
`
    }
  ]
};
