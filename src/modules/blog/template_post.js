export default {
  // ─── Metadata ───
  id: 'unique-post-id', // Unique ID (e.g. 'getting-started-with-react')
  title: 'Post Title',
  description: 'Short post description for SEO and article previews',
  date: '2025-11-06', // Format: YYYY-MM-DD
  lastModified: '2025-11-06',
  author: 'Tarik',
  language: 'en', // 'en' or 'de'

  // ─── Publishing ───
  published: true, // Set to false to hide post from live site
  draft: false,
  featured: false,

  // ─── Categorization ───
  categories: ['Documentation'],
  keywords: ['keyword1', 'keyword2'],

  // ─── Media ───
  thumbnail: '/path/to/thumbnail.jpg',
  socialImage: '/path/to/social-image.jpg',

  // ─── Content ───
  content: `
# Post Title

## Introduction

Write post content in **Markdown** format.

### Features

Standard markdown formatting, code highlighting, and embedded components are supported.

\`\`\`javascript
const example = () => {
  console.log('Code highlighting works!');
};
\`\`\`
`
};
