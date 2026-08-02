#!/usr/bin/env node

/**
 * Blog Post Generator CLI Tool
 * ──────────────────────────────
 * Creates new blog posts in either JS or MDX format.
 * 
 * Usage:
 *   node scripts/new-post.mjs                    # Interactive mode
 *   node scripts/new-post.mjs --title "My Post"  # Quick mode with flags
 *   node scripts/new-post.mjs --format mdx       # Generate MDX file
 *   node scripts/new-post.mjs --format js        # Generate JS file (default)
 * 
 * Options:
 *   --title, -t       Post title
 *   --description, -d Post description
 *   --category, -c    Categories (comma-separated)
 *   --author, -a      Author name (default: Tarik Azzouzi)
 *   --format, -f      Output format: js or mdx (default: js)
 *   --draft           Create as draft (default: false)
 *   --featured        Mark as featured (default: false)
 *   --output, -o      Custom output directory
 *   --clipboard       Copy to clipboard instead of writing file
 *   --help, -h        Show help
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const POSTS_DIR = path.join(PROJECT_ROOT, 'src', 'blog', 'posts');

// ─── ANSI Colors ───
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  magenta: '\x1b[35m',
  gray: '\x1b[90m',
  bgGreen: '\x1b[42m',
  bgBlue: '\x1b[44m',
  white: '\x1b[37m',
};

// ─── Predefined categories ───
const AVAILABLE_CATEGORIES = [
  'Web Development', 'React', 'JavaScript', 'TypeScript', 'Node.js',
  'Cybersecurity', 'DevOps', 'Docker', 'Terraform', 'Cloud',
  'C++', 'Java', 'Python', 'NLP', 'Machine Learning',
  'Database', 'Linux', 'Git', 'Tutorial', 'Architecture',
  'Testing', 'Performance', 'Security', 'API', 'Backend',
  'Frontend', 'Mobile', 'Network', 'Algorithms', 'Data Structures'
];

// ─── Helpers ───
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[äöüß]/g, (match) => ({ 'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'ß': 'ss' }[match]))
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function getToday() {
  return new Date().toISOString().split('T')[0];
}

function estimateReadingTime(wordCount) {
  return Math.max(1, Math.ceil(wordCount / 200));
}

// ─── Determine category directory ───
function getCategoryDir(categories) {
  const techCategories = ['Web Development', 'React', 'JavaScript', 'TypeScript', 'Node.js',
    'Cybersecurity', 'DevOps', 'Docker', 'Terraform', 'Cloud', 'C++', 'Java', 'Python',
    'NLP', 'Machine Learning', 'Database', 'Linux', 'Git', 'Architecture', 'Testing',
    'Performance', 'Security', 'API', 'Backend', 'Frontend', 'Mobile', 'Network',
    'Algorithms', 'Data Structures'];
  const toolsCategories = ['Tutorial', 'Tools'];

  if (categories.some(cat => toolsCategories.includes(cat))) return 'tools';
  if (categories.some(cat => techCategories.includes(cat))) return 'technology';
  return 'technology'; // default
}

// ─── Check for existing post IDs ───
function getExistingPostIds() {
  const ids = new Set();
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
          if (idMatch) ids.add(idMatch[1]);
        } catch (e) { /* ignore */ }
      }
    }
  }
  scanDir(POSTS_DIR);
  return ids;
}

// ─── Generate JS post content ───
function generateJSPost(config) {
  const {
    id, title, description, date, author, categories,
    keywords, draft, featured, lastModified, language
  } = config;

  return `export default {
  // ─── Metadata ───
  id: '${id}',
  title: '${title.replace(/'/g, "\\'")}',
  description: '${description.replace(/'/g, "\\'")}',
  date: '${date}',
  lastModified: '${lastModified || date}',
  author: '${author}',
  language: '${language}',

  // ─── Publishing ───
  published: ${!draft},
  draft: ${draft},
  featured: ${featured},

  // ─── Categorization ───
  categories: [${categories.map(c => `'${c}'`).join(', ')}],
  keywords: [${keywords.map(k => `'${k}'`).join(', ')}],

  // ─── Media ───
  thumbnail: '', // Add path to thumbnail image
  socialImage: '', // Add path to social sharing image (1200x630 recommended)

  // ─── Content (Markdown) ───
  content: \`
# ${title}

## Introduction

Write your introduction here. Explain what this post is about and why readers should care.

## Main Content

### Section 1

Your content goes here. Use **bold** and *italic* for emphasis.

\\\`\\\`\\\`javascript
// Code examples with syntax highlighting
const example = () => {
  console.log('Hello World!');
};
\\\`\\\`\\\`

### Section 2

Continue with more content. You can use:

- Bullet points for lists
- **Bold text** for emphasis
- \\\`inline code\\\` for technical terms
- [Links](https://example.com) to reference resources

### Section 3

Add tables for structured data:

| Feature | Description | Status |
|---------|-------------|--------|
| Item 1  | Description | Done   |
| Item 2  | Description | WIP    |

## Summary

Summarize the key takeaways from this post.

## Resources

- [Resource 1](https://example.com)
- [Resource 2](https://example.com)

---

*Published on ${date} by ${author}*
\`
};
`;
}

// ─── Generate MDX post content ───
function generateMDXPost(config) {
  const {
    id, title, description, date, author, categories,
    keywords, draft, featured, lastModified, language
  } = config;

  return `---
# ─── Post Metadata ───
id: '${id}'
title: '${title.replace(/'/g, "''")}'
description: '${description.replace(/'/g, "''")}'
date: '${date}'
lastModified: '${lastModified || date}'
author: '${author}'
language: '${language}'

# ─── Publishing ───
published: ${!draft}
draft: ${draft}
featured: ${featured}

# ─── Categorization ───
categories:
${categories.map(c => `  - '${c}'`).join('\n')}
keywords:
${keywords.map(k => `  - '${k}'`).join('\n')}

# ─── Media ───
thumbnail: '' # Add path to thumbnail image
socialImage: '' # Add path to social sharing image (1200x630 recommended)
---

# ${title}

## Introduction

Write your introduction here. Explain what this post is about and why readers should care.

## Main Content

### Section 1

Your content goes here. Use **bold** and *italic* for emphasis.

\`\`\`javascript
// Code examples with syntax highlighting
const example = () => {
  console.log('Hello World!');
};
\`\`\`

### Section 2

Continue with more content. You can use:

- Bullet points for lists
- **Bold text** for emphasis
- \`inline code\` for technical terms
- [Links](https://example.com) to reference resources

{/* You can use JSX components in MDX! */}
<Info>
  This is an info callout box. Use it for important notes.
</Info>

<Warning>
  This is a warning callout. Use it for cautionary information.
</Warning>

### Section 3

Add tables for structured data:

| Feature | Description | Status |
|---------|-------------|--------|
| Item 1  | Description | Done   |
| Item 2  | Description | WIP    |

## Summary

Summarize the key takeaways from this post.

## Resources

- [Resource 1](https://example.com)
- [Resource 2](https://example.com)

---

*Published on ${date} by ${author}*
`;
}

// ─── Interactive mode ───
async function interactiveMode(args) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (question) => new Promise(resolve => rl.question(question, resolve));

  console.log(`\n${c.bgBlue}${c.white}${c.bold}  Blog Post Generator  ${c.reset}\n`);
  console.log(`${c.dim}Create a new blog post with all metadata and structure.${c.reset}\n`);

  // Title
  let title = args.title;
  if (!title) {
    title = await ask(`${c.cyan}${c.bold}Title${c.reset}: `);
    if (!title.trim()) {
      console.log(`${c.red}Title is required!${c.reset}`);
      rl.close();
      process.exit(1);
    }
  }

  // ID (auto-generated from title)
  const existingIds = getExistingPostIds();
  let id = slugify(title);
  if (existingIds.has(id)) {
    console.log(`${c.yellow}Warning: Post ID '${id}' already exists!${c.reset}`);
    const customId = await ask(`${c.cyan}Custom ID${c.reset} (or Enter to add suffix): `);
    if (customId.trim()) {
      id = slugify(customId);
    } else {
      id = `${id}-${Date.now().toString(36)}`;
    }
  }
  console.log(`${c.dim}  ID: ${id}${c.reset}`);

  // Description
  let description = args.description;
  if (!description) {
    description = await ask(`${c.cyan}${c.bold}Description${c.reset} ${c.dim}(SEO, max ~160 chars)${c.reset}: `);
  }

  // Format
  let format = args.format;
  if (!format) {
    const formatAnswer = await ask(`${c.cyan}${c.bold}Format${c.reset} ${c.dim}[js/mdx]${c.reset} (default: js): `);
    format = formatAnswer.trim().toLowerCase() || 'js';
  }
  if (!['js', 'mdx'].includes(format)) {
    console.log(`${c.yellow}Unknown format '${format}', using 'js'${c.reset}`);
    format = 'js';
  }

  // Language
  const langAnswer = await ask(`${c.cyan}${c.bold}Language${c.reset} ${c.dim}[de/en]${c.reset} (default: de): `);
  const language = langAnswer.trim().toLowerCase() || 'de';

  // Categories
  console.log(`\n${c.dim}Available categories:${c.reset}`);
  const columns = 3;
  for (let i = 0; i < AVAILABLE_CATEGORIES.length; i += columns) {
    const row = AVAILABLE_CATEGORIES.slice(i, i + columns)
      .map((cat, j) => `${c.gray}${String(i + j + 1).padStart(2)}.${c.reset} ${cat}`)
      .map(s => s.padEnd(40))
      .join('');
    console.log(`  ${row}`);
  }
  console.log();

  let categories = args.categories;
  if (!categories) {
    const catInput = await ask(`${c.cyan}${c.bold}Categories${c.reset} ${c.dim}(numbers or names, comma-separated)${c.reset}: `);
    categories = catInput.split(',').map(c => {
      const trimmed = c.trim();
      const num = parseInt(trimmed);
      if (!isNaN(num) && num >= 1 && num <= AVAILABLE_CATEGORIES.length) {
        return AVAILABLE_CATEGORIES[num - 1];
      }
      return trimmed;
    }).filter(c => c.length > 0);
  }

  if (categories.length === 0) {
    categories = ['General'];
  }

  // Keywords
  const keywordsInput = await ask(`${c.cyan}${c.bold}Keywords${c.reset} ${c.dim}(comma-separated, for SEO)${c.reset}: `);
  const keywords = keywordsInput.split(',').map(k => k.trim()).filter(k => k.length > 0);
  if (keywords.length === 0) {
    keywords.push(...categories.map(c => c.toLowerCase()));
    keywords.push(id.replace(/-/g, ' '));
  }

  // Author
  const author = args.author || 'Tarik Azzouzi';

  // Draft
  const draftAnswer = args.draft !== undefined ? args.draft : 
    (await ask(`${c.cyan}${c.bold}Draft?${c.reset} ${c.dim}[y/N]${c.reset}: `)).trim().toLowerCase() === 'y';

  // Featured
  const featuredAnswer = args.featured !== undefined ? args.featured :
    (await ask(`${c.cyan}${c.bold}Featured?${c.reset} ${c.dim}[y/N]${c.reset}: `)).trim().toLowerCase() === 'y';

  rl.close();

  const config = {
    id,
    title,
    description: description || `${title} - A comprehensive guide`,
    date: getToday(),
    lastModified: getToday(),
    author,
    language,
    categories,
    keywords,
    draft: draftAnswer,
    featured: featuredAnswer,
  };

  // Generate content
  const content = format === 'mdx' ? generateMDXPost(config) : generateJSPost(config);

  // Determine output path
  const categoryDir = getCategoryDir(categories);
  const outputDir = args.output || path.join(POSTS_DIR, categoryDir);
  const filename = `${id}.${format}`;
  const outputPath = path.join(outputDir, filename);

  if (args.clipboard) {
    // Output to stdout for piping/clipboard
    console.log('\n' + content);
    console.log(`\n${c.green}${c.bold}Content generated! Copy the above.${c.reset}`);
  } else {
    // Write file
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    if (fs.existsSync(outputPath)) {
      console.log(`${c.red}${c.bold}File already exists: ${outputPath}${c.reset}`);
      process.exit(1);
    }

    fs.writeFileSync(outputPath, content, 'utf-8');

    // Print summary
    console.log(`\n${c.bgGreen}${c.white}${c.bold}  Post Created Successfully!  ${c.reset}\n`);
    console.log(`${c.green}  File:${c.reset}        ${path.relative(PROJECT_ROOT, outputPath)}`);
    console.log(`${c.green}  ID:${c.reset}          ${id}`);
    console.log(`${c.green}  Title:${c.reset}       ${title}`);
    console.log(`${c.green}  Format:${c.reset}      ${format.toUpperCase()}`);
    console.log(`${c.green}  Categories:${c.reset}  ${categories.join(', ')}`);
    console.log(`${c.green}  Keywords:${c.reset}    ${keywords.join(', ')}`);
    console.log(`${c.green}  Draft:${c.reset}       ${draftAnswer ? 'Yes' : 'No'}`);
    console.log(`${c.green}  Featured:${c.reset}    ${featuredAnswer ? 'Yes' : 'No'}`);
    console.log(`${c.green}  Language:${c.reset}    ${language}`);
    console.log(`${c.green}  URL:${c.reset}         /blog/post/${id}`);
    console.log(`\n${c.dim}Next steps:${c.reset}`);
    console.log(`  1. Edit the content in ${c.cyan}${path.relative(PROJECT_ROOT, outputPath)}${c.reset}`);
    console.log(`  2. Add a thumbnail image`);
    console.log(`  3. Run ${c.cyan}npm run dev${c.reset} to preview`);
    if (draftAnswer) {
      console.log(`  4. Set ${c.cyan}draft: false${c.reset} / ${c.cyan}published: true${c.reset} when ready to publish`);
    }
    console.log();
  }
}

// ─── Parse CLI args ───
function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--help' || arg === '-h') {
      showHelp();
      process.exit(0);
    }
    if (arg === '--title' || arg === '-t') parsed.title = args[++i];
    else if (arg === '--description' || arg === '-d') parsed.description = args[++i];
    else if (arg === '--category' || arg === '-c') parsed.categories = args[++i]?.split(',').map(s => s.trim());
    else if (arg === '--author' || arg === '-a') parsed.author = args[++i];
    else if (arg === '--format' || arg === '-f') parsed.format = args[++i]?.toLowerCase();
    else if (arg === '--output' || arg === '-o') parsed.output = args[++i];
    else if (arg === '--draft') parsed.draft = true;
    else if (arg === '--featured') parsed.featured = true;
    else if (arg === '--clipboard') parsed.clipboard = true;
  }

  return parsed;
}

function showHelp() {
  console.log(`
${c.bgBlue}${c.white}${c.bold}  Blog Post Generator  ${c.reset}

${c.bold}Usage:${c.reset}
  node scripts/new-post.mjs                         ${c.dim}# Interactive mode${c.reset}
  node scripts/new-post.mjs --title "My Post"        ${c.dim}# Quick create${c.reset}
  node scripts/new-post.mjs -t "Post" -f mdx         ${c.dim}# MDX format${c.reset}
  node scripts/new-post.mjs -t "Post" --clipboard     ${c.dim}# Copy to stdout${c.reset}

${c.bold}Options:${c.reset}
  -t, --title <title>         Post title
  -d, --description <desc>    SEO description
  -c, --category <cats>       Categories (comma-separated)
  -a, --author <name>         Author (default: Tarik Azzouzi)
  -f, --format <js|mdx>       Output format (default: js)
  -o, --output <dir>          Custom output directory
  --draft                     Create as draft
  --featured                  Mark as featured
  --clipboard                 Output to stdout instead of file
  -h, --help                  Show this help

${c.bold}Post Fields:${c.reset}
  ${c.cyan}id${c.reset}            Auto-generated from title (slug)
  ${c.cyan}title${c.reset}         Post title
  ${c.cyan}description${c.reset}   SEO description (max ~160 chars)
  ${c.cyan}date${c.reset}          Publication date (auto: today)
  ${c.cyan}lastModified${c.reset}  Last modified date
  ${c.cyan}author${c.reset}        Author name
  ${c.cyan}published${c.reset}     Whether post is published (true/false)
  ${c.cyan}draft${c.reset}         Whether post is a draft (true/false)
  ${c.cyan}featured${c.reset}      Whether post is featured
  ${c.cyan}categories${c.reset}    Post categories (array)
  ${c.cyan}keywords${c.reset}      SEO keywords (array)
  ${c.cyan}thumbnail${c.reset}     Thumbnail image path
  ${c.cyan}socialImage${c.reset}   Social sharing image (1200x630)
  ${c.cyan}language${c.reset}      Post language (de/en)

${c.bold}Available Categories:${c.reset}
  ${AVAILABLE_CATEGORIES.join(', ')}
`);
}

// ─── Main ───
const args = parseArgs();
interactiveMode(args);
