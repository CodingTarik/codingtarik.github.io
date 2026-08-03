export default {
  id: 'modern-developer-handbook',
  title: 'The Modern Software Architect Handbook',
  description: 'A complete Paged.js formatted book covering Clean Code, System Design, Microservices, and Cloud Architecture. Print-ready PDF export!',
  type: 'book',
  category: 'Software Architecture',
  level: 'Advanced',
  duration: 'Book (140 Pages)',
  author: 'Tarik Azzouzi',
  coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80',
  featured: true,
  tags: ['Architecture', 'Clean Code', 'PDF Book', 'Paged.js', 'System Design'],
  pagedOptions: {
    pageSize: 'A4',
    margin: '20mm',
    headerTitle: 'The Modern Software Architect Handbook',
    author: 'Tarik Azzouzi'
  },
  chapters: [
    {
      id: 'preface',
      title: 'Preface & Introduction',
      chapterNumber: 1,
      content: `
# Preface: The World of Modern Software Systems

Welcome to **The Modern Software Architect Handbook**! This book is formatted using the **Paged.js** CSS Paged Media standard.

You can read this book online or click the **Export PDF / Print** button in the header to save a beautifully formatted PDF document complete with page numbers.

---

## About the Author

Tarik Azzouzi is a Fullstack Engineer, security researcher, and web applications architect.

> [!NOTE]
> This book uses Paged.js for automatic page design (A4 format, running headers, running footers, and automatic chapter numbering).
`
    },
    {
      id: 'clean-code-principles',
      title: 'Chapter 1: Clean Code & Refactoring Patterns',
      chapterNumber: 2,
      content: `
# Chapter 1: Clean Code & Refactoring Patterns

Well-written code reads like well-crafted prose. In this chapter, we explore core software design principles.

---

## 1. SOLID Principles at a Glance

1. **Single Responsibility Principle (SRP)**: A class should have one, and only one, reason to change.
2. **Open/Closed Principle (OCP)**: Software entities should be open for extension, but closed for modification.
3. **Liskov Substitution Principle (LSP)**: Derived classes must be substitutable for their base classes.
4. **Interface Segregation Principle (ISP)**: Many client-specific interfaces are better than one general-purpose interface.
5. **Dependency Inversion Principle (DIP)**: Depend upon abstractions, not concretions.

---

## 2. Refactoring in Practice

\`\`\`typescript
// Before: Obscure monolith
function p(d: any) {
  if (d.s == 1 && d.u != null) {
    return d.u.a + ' ' + d.u.b;
  }
  return '';
}

// After: Declarative & strongly typed
interface User {
  firstName: string;
  lastName: string;
}

interface OrderData {
  status: 'ACTIVE' | 'PENDING' | 'CANCELLED';
  user?: User;
}

export function formatCustomerFullName(order: OrderData): string {
  if (order.status !== 'ACTIVE' || !order.user) {
    return '';
  }
  return \`\${order.user.firstName} \${order.user.lastName}\`;
}
\`\`\`
`
    },
    {
      id: 'system-design-microservices',
      title: 'Chapter 2: System Design & Microservices',
      chapterNumber: 3,
      content: `
# Chapter 2: System Design & Microservices

As systems grow, monolithic architectures face organizational and technical scalability limits.

---

## 1. Monolith vs. Microservices

> [!INFO]
> Almost always start with a **Modular Monolith** before decoupling domain boundaries into independent microservices.

---

## 2. Event-Driven Architecture (EDA)

Decouple producers and consumers asynchronously using message brokers such as Apache Kafka or RabbitMQ.
`
    },
    {
      id: 'epilogue-pdf-guide',
      title: 'Chapter 3: Summary & PDF Print Guide',
      chapterNumber: 4,
      content: `
# Chapter 3: Summary & Print Guide

You have completed the handbook!

---

## How to Export as PDF

To save this entire book as a PDF document on your machine:

1. Click **Export PDF / Print** in the top navigation bar.
2. In the browser print dialog, set destination to **Save as PDF**.
3. Enable **Background graphics** under settings.
4. Click Save!
`
    }
  ]
};
