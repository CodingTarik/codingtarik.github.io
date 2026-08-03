export default {
  id: 'web-dev-foundations',
  title: 'Web Development Foundations Masterclass',
  description: 'From your first HTML tag to modern React applications: The ultimate hands-on guide to modern web development.',
  type: 'lessons',
  category: 'Frontend',
  level: 'Beginner',
  duration: '2h 45m',
  author: 'Tarik Azzouzi',
  coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
  featured: true,
  tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'WebDev'],
  lessons: [
    {
      id: 'html-css-basics',
      title: 'Lesson 1: Modern HTML5 Semantics & CSS Layouts',
      duration: '35m',
      description: 'Learn semantic HTML structure, CSS Flexbox, and Grid for performant and accessible web design.',
      content: `
# Lesson 1: Modern HTML5 Semantics & CSS Layouts

Welcome to Lesson 1 of **Web Development Foundations**! In this module, we build the core foundation for clean, semantic HTML and modern CSS layouts.

> [!INFO]
> Semantic HTML improves accessibility for screen readers and is essential for Search Engine Optimization (SEO).

---

## 1. Semantic HTML5

Always use meaningful HTML5 elements instead of unorganized \`<div>\` containers:

\`\`\`html
<header className="site-header">
  <nav className="main-nav">
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
  </nav>
</header>

<main className="content">
  <article className="post">
    <h1>Modern Web Architecture</h1>
    <p>Article content goes here...</p>
  </article>
</main>
\`\`\`

---

## 2. Flexbox vs. CSS Grid

Both layout models complement each other perfectly:
- **Flexbox**: For one-dimensional alignments (rows OR columns).
- **CSS Grid**: For two-dimensional page layouts (rows AND columns).

### Flexbox Example

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
}
\`\`\`

### CSS Grid Example

\`\`\`css
.grid-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
\`\`\`
`
    },
    {
      id: 'javascript-es6-async',
      title: 'Lesson 2: Async JavaScript, Promises & Fetch API',
      duration: '45m',
      description: 'Master the Event Loop, asynchronous programming with Promises, async/await, and REST APIs.',
      content: `
# Lesson 2: Async JavaScript, Promises & Fetch API

JavaScript is single-threaded, but thanks to the Event Loop and asynchronous APIs, it handles non-blocking I/O operations seamlessly.

---

## 1. Asynchronous Code with async/await

The \`async/await\` syntax makes asynchronous code as clean and readable as synchronous code:

\`\`\`javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  }
}
\`\`\`

---

## 2. The JavaScript Event Loop

> [!WARNING]
> Synchronous blocking loops freeze the main thread. Always use asynchronous Web APIs for network requests and heavy I/O operations!
`
    },
    {
      id: 'react-state-architecture',
      title: 'Lesson 3: React Hooks & State Management',
      duration: '50m',
      description: 'Build reusable UI components with useState, useEffect, useContext, and custom Hooks.',
      content: `
# Lesson 3: React Hooks & State Management

React revolutionizes UI development through a declarative, component-based programming model.

---

## 1. State and Lifecycle with Hooks

Combine \`useState\` and \`useEffect\` for clean data flow:

\`\`\`jsx
import React, { useState, useEffect } from 'react';

export function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    async function load() {
      setLoading(true);
      const res = await fetch(\`/api/users/\${userId}\`);
      const data = await res.json();
      if (isMounted) {
        setUser(data);
        setLoading(false);
      }
    }
    
    load();
    return () => { isMounted = false; };
  }, [userId]);

  if (loading) return <div>Loading profile...</div>;
  return <div className="user-card">{user?.name}</div>;
}
\`\`\`
`
    },
    {
      id: 'performance-deployment',
      title: 'Lesson 4: Performance Optimization & Deployment',
      duration: '45m',
      description: 'Lighthouse audits, code-splitting, lazy loading, and automated CI/CD deployment.',
      content: `
# Lesson 4: Performance Optimization & Deployment

Great code means little if your web application takes too long to load.

---

## 1. Core Web Vitals

Focus on key performance metrics during your audits:
- **LCP (Largest Contentful Paint)**: Loading performance of main content (< 2.5s).
- **FID / INP (Interaction to Next Paint)**: User input responsiveness (< 200ms).
- **CLS (Cumulative Layout Shift)**: Visual stability of elements (< 0.1).

Congratulations! You have completed all lessons in this course! 🥳
`
    }
  ]
};
