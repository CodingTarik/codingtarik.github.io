import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import fs from 'fs'
import path from 'path'

const SITE_URL = 'https://codingtarik.github.io';

// ─── Build Plugin: Generate sitemap.xml with real URLs (no hash fragments) ───
function sitemapPlugin() {
  return {
    name: 'generate-sitemap',
    closeBundle() {
      const today = new Date().toISOString().split('T')[0];
      const postsDir = path.resolve(__dirname, 'src/blog/posts');
      const postEntries = [];

      function scanDir(dir) {
        if (!fs.existsSync(dir)) return;
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            scanDir(fullPath);
          } else if (entry.name.endsWith('.js') || entry.name.endsWith('.mdx')) {
            try {
              const content = fs.readFileSync(fullPath, 'utf-8');
              const idMatch = content.match(/id:\s*['"]([^'"]+)['"]/);
              const dateMatch = content.match(/date:\s*['"]([^'"]+)['"]/);
              const draftMatch = content.match(/(?:draft|published):\s*(true|false)/);

              // Skip drafts
              if (draftMatch) {
                const value = draftMatch[0];
                if (value.includes('draft: true') || value.includes('published: false')) {
                  return;
                }
              }

              if (idMatch) {
                postEntries.push({
                  id: idMatch[1],
                  date: dateMatch ? dateMatch[1] : today,
                  lastModified: today
                });
              }
            } catch (e) {
              console.warn(`Could not parse ${fullPath}:`, e.message);
            }
          }
        }
      }

      scanDir(postsDir);

      // Static pages — real URLs (no hash!)
      const staticPages = [
        { loc: `${SITE_URL}/`, changefreq: 'daily', priority: '1.0', lastmod: today },
        { loc: `${SITE_URL}/blog`, changefreq: 'daily', priority: '0.9', lastmod: today },
        { loc: `${SITE_URL}/blog/categories`, changefreq: 'weekly', priority: '0.7', lastmod: today },
        { loc: `${SITE_URL}/blog/projects`, changefreq: 'weekly', priority: '0.7', lastmod: today },
        { loc: `${SITE_URL}/blog/search`, changefreq: 'monthly', priority: '0.5', lastmod: today },
        { loc: `${SITE_URL}/cv`, changefreq: 'monthly', priority: '0.8', lastmod: today },
        { loc: `${SITE_URL}/tools`, changefreq: 'monthly', priority: '0.6', lastmod: today },
        { loc: `${SITE_URL}/tools/logic-test`, changefreq: 'monthly', priority: '0.5', lastmod: today },
        { loc: `${SITE_URL}/tools/flashmaster`, changefreq: 'monthly', priority: '0.5', lastmod: today },
        { loc: `${SITE_URL}/tools/pdf-tools`, changefreq: 'monthly', priority: '0.5', lastmod: today },
        { loc: `${SITE_URL}/tools/piano`, changefreq: 'monthly', priority: '0.5', lastmod: today },
        { loc: `${SITE_URL}/tools/travel`, changefreq: 'monthly', priority: '0.5', lastmod: today },
        { loc: `${SITE_URL}/privacy`, changefreq: 'yearly', priority: '0.2', lastmod: today },
        { loc: `${SITE_URL}/imprint`, changefreq: 'yearly', priority: '0.2', lastmod: today },
      ];

      // LearnBuddy buddies
      const buddies = ['boulder', 'swim', 'run', 'gym', 'cook', 'yoga', 'english', 'piano', 'lifeskills'];
      for (const buddy of buddies) {
        staticPages.push({
          loc: `${SITE_URL}/learnbuddy/${buddy}/home`,
          changefreq: 'monthly',
          priority: '0.6',
          lastmod: today
        });
        staticPages.push({
          loc: `${SITE_URL}/learnbuddy/${buddy}/lessons`,
          changefreq: 'monthly',
          priority: '0.5',
          lastmod: today
        });
      }

      // Blog post URLs — real paths!
      const postPages = postEntries.map(post => ({
        loc: `${SITE_URL}/blog/post/${post.id}`,
        changefreq: 'monthly',
        priority: '0.8',
        lastmod: post.date
      }));

      const allPages = [...staticPages, ...postPages];

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages.map(page => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

      const distDir = path.resolve(__dirname, 'dist');
      if (fs.existsSync(distDir)) {
        fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf-8');
        console.log(`\n✓ sitemap.xml generated with ${allPages.length} URLs (${postEntries.length} blog posts)`);
      }
    }
  };
}

// ─── Build Plugin: Generate static RSS feed (rss.xml) ───
function rssFeedPlugin() {
  return {
    name: 'generate-rss-feed',
    closeBundle() {
      const postsDir = path.resolve(__dirname, 'src/blog/posts');
      const posts = [];

      function scanDir(dir) {
        if (!fs.existsSync(dir)) return;
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            scanDir(fullPath);
          } else if (entry.name.endsWith('.js') || entry.name.endsWith('.mdx')) {
            try {
              const content = fs.readFileSync(fullPath, 'utf-8');
              const idMatch = content.match(/id:\s*['"]([^'"]+)['"]/);
              const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
              const descMatch = content.match(/description:\s*['"]([^'"]+)['"]/);
              const dateMatch = content.match(/date:\s*['"]([^'"]+)['"]/);
              const authorMatch = content.match(/author:\s*['"]([^'"]+)['"]/);
              const categoriesMatch = content.match(/categories:\s*\[([^\]]*)\]/);
              const draftMatch = content.match(/draft:\s*(true|false)/);
              const publishedMatch = content.match(/published:\s*(true|false)/);

              // Skip drafts
              if (draftMatch && draftMatch[1] === 'true') return;
              if (publishedMatch && publishedMatch[1] === 'false') return;

              if (idMatch && titleMatch && dateMatch) {
                const categories = categoriesMatch
                  ? categoriesMatch[1].match(/['"]([^'"]+)['"]/g)?.map(s => s.replace(/['"]/g, '')) || []
                  : [];

                posts.push({
                  id: idMatch[1],
                  title: titleMatch[1],
                  description: descMatch ? descMatch[1] : '',
                  date: dateMatch[1],
                  author: authorMatch ? authorMatch[1] : 'Tarik Azzouzi',
                  categories
                });
              }
            } catch (e) {
              console.warn(`RSS: Could not parse ${fullPath}:`, e.message);
            }
          }
        }
      }

      scanDir(postsDir);

      // Sort by date descending
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      const escapeXml = (str) => str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');

      const rssItems = posts.map(post => {
        const postUrl = `${SITE_URL}/blog/post/${post.id}`;
        const pubDate = new Date(post.date).toUTCString();
        const categories = post.categories
          .map(cat => `    <category>${escapeXml(cat)}</category>`)
          .join('\n');

        return `  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${postUrl}</link>
    <guid isPermaLink="true">${postUrl}</guid>
    <pubDate>${pubDate}</pubDate>
    <description>${escapeXml(post.description)}</description>
${categories}
    <author>${escapeXml(post.author)}</author>
  </item>`;
      }).join('\n');

      const buildDate = new Date().toUTCString();

      const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Tarik Azzouzi - Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Gedanken, Projekte und Erfahrungen rund um Web Development, Cybersecurity und mehr</description>
    <language>de</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/icon.svg</url>
      <title>Tarik Azzouzi - Blog</title>
      <link>${SITE_URL}/blog</link>
    </image>
${rssItems}
  </channel>
</rss>`;

      const distDir = path.resolve(__dirname, 'dist');
      if (fs.existsSync(distDir)) {
        fs.writeFileSync(path.join(distDir, 'rss.xml'), rssFeed, 'utf-8');
        console.log(`✓ rss.xml generated with ${posts.length} posts`);
      }
    }
  };
}

// ─── Build Plugin: Copy index.html to 404.html for GitHub Pages SPA support ───
function spaFallbackPlugin() {
  return {
    name: 'spa-fallback-404',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');
      const fallbackPath = path.join(distDir, '404.html');

      if (fs.existsSync(indexPath)) {
        // Read the built index.html and use it as 404.html
        // This ensures GitHub Pages serves our SPA for all routes
        const indexContent = fs.readFileSync(indexPath, 'utf-8');
        fs.writeFileSync(fallbackPath, indexContent, 'utf-8');
        console.log('✓ 404.html created (SPA fallback for GitHub Pages)');
      }
    }
  };
}

export default defineConfig({
  base: process.env.BASE_URL || '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        format: 'es',
        // Manual chunks for code splitting heavy dependencies
        manualChunks: {
          // Core React
          'vendor-react': ['react', 'react-dom'],
          // Heavy markdown/content rendering
          'vendor-markdown': ['markdown-to-jsx', 'react-markdown', 'remark-gfm', 'remark-math', 'rehype-katex', 'rehype-raw'],
          // Syntax highlighting
          'vendor-syntax': ['react-syntax-highlighter', 'prism-react-renderer'],
          // Charts & visualization
          'vendor-charts': ['chart.js', 'react-chartjs-2', 'recharts'],
          // KaTeX math rendering
          'vendor-katex': ['katex', 'react-katex'],
          // Mermaid diagrams
          'vendor-mermaid': ['mermaid'],
          // Animation
          'vendor-motion': ['framer-motion'],
          // Search
          'vendor-search': ['fuse.js'],
        }
      }
    }
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.js',
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,xml,txt,json}'],
        maximumFileSizeToCacheInBytes: 50 * 1024 * 1024, // 50MB
      },
      manifest: {
        name: 'LearnBuddy - Dein persoenlicher Lern-Begleiter',
        short_name: 'LearnBuddy',
        description: 'Interaktiver Lernbegleiter fuer Bouldern, Kochen, Englisch, Klavier und mehr. Inklusive Blog ueber Web Development und Cybersecurity.',
        theme_color: '#14b8a6',
        background_color: '#fafaf9',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        categories: ['education', 'lifestyle', 'productivity'],
        icons: [
          {
            src: 'icon.svg',
            sizes: 'any',
            type: 'image/svg+xml'
          }
        ]
      },
    }),
    sitemapPlugin(),
    rssFeedPlugin(),
    spaFallbackPlugin()
  ]
})
