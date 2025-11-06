/**
 * Admin Panel Configuration
 * Zentrale Konfiguration für das Admin Panel
 */

export const adminConfig = {
  // GitHub Repository
  github: {
    owner: "CodingTarik",
    repo: "codingtarik.github.io",
    branch: "master",
    
    // OAuth (Production)
    clientId: import.meta.env.VITE_GITHUB_CLIENT_ID || "",
    oauthEnabled: import.meta.env.VITE_GITHUB_OAUTH_ENABLED === "true",
    oauthEndpoint: import.meta.env.VITE_GITHUB_OAUTH_ENDPOINT || "",
    redirectUri: window.location.origin + "/#/admin/callback",
  },

  // Blog Posts
  posts: {
    basePath: "src/blog/posts",
    defaultCategory: "general",
    defaultAuthor: "Tarik Azzouzi",
  },

  // Editor Settings
  editor: {
    autoSave: false, // In Entwicklung
    autoSaveInterval: 30000, // 30 Sekunden
    previewMode: "split", // 'split' oder 'tab'
    theme: "light", // 'light' oder 'dark'
  },

  // Validation
  validation: {
    minTitleLength: 5,
    maxTitleLength: 100,
    minDescriptionLength: 50,
    maxDescriptionLength: 300,
    minContentLength: 100,
    requiredFields: ["id", "title", "description", "content", "date", "author"],
  },

  // Features
  features: {
    preview: true,
    autoCommit: true,
    drafts: false, // In Entwicklung
    scheduling: false, // In Entwicklung
    imageUpload: false, // In Entwicklung
  },

  // Storage Keys
  storageKeys: {
    token: "github_token",
    user: "github_user",
    drafts: "admin_drafts",
  },
};

export default adminConfig;

