/**
 * Blog Configuration
 * Zentrale Konfiguration für das Blog-System
 */

export const blogConfig = {
  // Blog Informationen
  title: "Tarik's Blog",
  subtitle: "CodingTarik",
  description: "Personal blog about programming, technology, and learning",
  author: {
    name: "Tarik Azzouzi",
    email: "BlogCodingTarik@web.de",
    github: "CodingTarik",
    linkedin: "tarik-azzouzi",
  },

  // URLs
  siteUrl: "https://codingtarik.github.io",
  blogUrl: "https://codingtarik.github.io/#/blog",
  
  // GitHub
  github: {
    owner: "CodingTarik",
    repo: "codingtarik.github.io",
  },
  
  // Social Media Links
  social: {
    github: "https://github.com/CodingTarik",
    linkedin: "https://www.linkedin.com/in/tarik-azzouzi/",
    hackthebox: "https://app.hackthebox.com/profile/477139",
    tryhackme: "https://tryhackme.com/p/CodingTarik",
    discord: "https://discord.gg/xggTvK2",
    email: "mailto:BlogCodingTarik@web.de",
  },

  // Support
  support: {
    buyMeCoffee: "https://buymeacoffee.com/codingtarik",
  },

  // Imprint / Impressum
  imprint: {
    name: "Tarik Azzouzi",
    street: "Nieder-Ramstädter-Straße 187",
    postalCode: "64285",
    city: "Darmstadt",
    country: "Deutschland",
    phone: "+49 1590 2299884",
    email: "BlogCodingTarik@web.de",
    website: "https://codingtarik.github.io",
  },

  // RSS Feed
  rss: {
    enabled: true,
    title: "Tarik's Blog RSS Feed",
    description: "Latest posts from Tarik's Blog",
    feedUrl: "https://codingtarik.github.io/rss.xml",
  },

  // SEO
  seo: {
    keywords: [
      "programming",
      "web development",
      "react",
      "javascript",
      "typescript",
      "tutorial",
      "coding",
      "software engineering",
    ],
    ogImage: "https://codingtarik.github.io/og-image.jpg",
    twitterHandle: "@CodingTarik",
  },

  // Features
  features: {
    search: true,
    categories: true,
    tags: true,
    comments: false, // Kann später aktiviert werden
    newsletter: false, // Kann später aktiviert werden
    darkMode: true,
  },

  // Pagination
  postsPerPage: 10,
  recentPostsCount: 5,

  // Analytics
  analytics: {
    umami: {
      enabled: true,
      websiteId: import.meta.env.VITE_UMAMI_WEBSITE_ID || "",
      src: import.meta.env.VITE_UMAMI_SRC || "https://analytics.umami.is/script.js",
    },
  },

  // Default Post Settings
  defaultPost: {
    author: "Tarik Azzouzi",
    featured: false,
    categories: ["General"],
  },
};

export default blogConfig;

