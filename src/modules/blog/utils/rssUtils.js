/**
 * RSS Feed Utilities
 * 
 * Note: The primary RSS feed is now generated at BUILD TIME as a static file
 * (see rssFeedPlugin in vite.config.js → dist/rss.xml)
 * 
 * These client-side utilities remain for:
 * - Preview/download of RSS feed in admin panel
 * - Programmatic access to feed data
 */

import { getAllPosts } from './blogUtils';

const SITE_URL = 'https://codingtarik.github.io';

/**
 * Generates an RSS 2.0 feed XML from blog posts (client-side)
 * Uses real paths (not hash fragments) for proper RSS reader support
 */
export function generateRSSFeed() {
  const posts = getAllPosts();
  const blogUrl = `${SITE_URL}/blog`;
  
  const escapeXml = (str) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  };

  const rssItems = posts.map(post => {
    const postUrl = `${SITE_URL}/blog/post/${post.id}`;
    const pubDate = new Date(post.date).toUTCString();
    
    const title = escapeXml(post.title);
    const description = escapeXml(post.description || '');
    const categories = post.categories?.map(cat => 
      `    <category>${escapeXml(cat)}</category>`
    ).join('\n') || '';
    
    return `  <item>
    <title>${title}</title>
    <link>${postUrl}</link>
    <guid isPermaLink="true">${postUrl}</guid>
    <pubDate>${pubDate}</pubDate>
    <description>${description}</description>
${categories}
    ${post.author ? `<author>${escapeXml(post.author)}</author>` : ''}
  </item>`;
  }).join('\n');
  
  const buildDate = new Date().toUTCString();
  
  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Tarik Azzouzi - Blog</title>
    <link>${blogUrl}</link>
    <description>Gedanken, Projekte und Erfahrungen rund um Web Development, Cybersecurity und mehr</description>
    <language>de</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${rssItems}
  </channel>
</rss>`;
}

/**
 * Downloads the RSS feed as a file
 */
export function downloadRSSFeed() {
  const rssFeed = generateRSSFeed();
  const blob = new Blob([rssFeed], { type: 'application/rss+xml' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = 'blog-feed.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Copies the RSS feed content to clipboard
 */
export async function copyRSSFeedToClipboard() {
  const rssFeed = generateRSSFeed();
  try {
    await navigator.clipboard.writeText(rssFeed);
    return true;
  } catch (err) {
    console.error('Failed to copy RSS feed:', err);
    return false;
  }
}
