/**
 * Global Blog Configuration
 */

export const blogConfig = {
  title: "Tarik's Blog",
  subtitle: "CodingTarik",
  description: "Personal blog about programming, technology, and learning",
  author: {
    name: "Tarik Azzouzi",
    email: "BlogCodingTarik@web.de",
    github: "CodingTarik",
    linkedin: "tarik-azzouzi",
  },

  // Profile picture customization
  avatar: {
    sizePx: 200,          // Diameter in pixels
    zoom: 1.3,            // Zoom factor (1.0 = 100%, 1.3 = 130%)
    offsetX: "50%",       // Horizontal position (50% = center)
    offsetY: "55%",       // Vertical position (50% = center)
    borderWidthPx: 4,     // Border frame thickness
  },

  // Base URLs
  siteUrl: "https://codingtarik.github.io",
  blogUrl: "https://codingtarik.github.io/blog",

  // Repository metadata
  github: {
    owner: "CodingTarik",
    repo: "codingtarik.github.io",
  },

  // Social Media
  social: {
    github: "https://github.com/CodingTarik",
    linkedin: "https://www.linkedin.com/in/tarik-azzouzi/",
    fiverr: "https://www.fiverr.com/cyberta",
    hackthebox: "https://app.hackthebox.com/profile/477139",
    tryhackme: "https://tryhackme.com/p/CodingTarik",
    discord: "https://discord.gg/xggTvK2",
    email: "mailto:BlogCodingTarik@web.de",
  },

  // Support
  support: {
    buyMeCoffee: "https://buymeacoffee.com/codingtarik",
  },

  // Legal imprint information
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

  // SEO & Social sharing
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

  // Feature Toggles
  features: {
    search: true,
    categories: true,
    tags: true,
    comments: false,
    newsletter: false,
    darkMode: true,
  },

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

  // Default Post Metadata
  defaultPost: {
    author: "Tarik Azzouzi",
    featured: false,
    categories: ["General"],
  },
};

export default blogConfig;
