// Import all blog posts
const postModules = import.meta.glob('../posts/**/*.js', { eager: true });

// Extract posts from modules
const posts = Object.values(postModules).map(module => module.default);

/**
 * Get all blog posts sorted by date (newest first)
 */
export const getAllPosts = () => {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

/**
 * Get a single post by ID
 */
export const getPostById = (id) => {
  return posts.find(post => post.id === id);
};

/**
 * Get all unique categories from all posts
 */
export const getAllCategories = () => {
  const categoriesSet = new Set();
  posts.forEach(post => {
    if (post.categories) {
      post.categories.forEach(category => categoriesSet.add(category));
    }
  });
  return Array.from(categoriesSet).sort();
};

/**
 * Get posts by category
 */
export const getPostsByCategory = (category) => {
  return posts
    .filter(post => post.categories && post.categories.includes(category))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

/**
 * Get featured posts
 */
export const getFeaturedPosts = () => {
  return posts
    .filter(post => post.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

/**
 * Search posts by title, description, or content
 */
export const searchPosts = (query) => {
  if (!query || query.trim() === '') {
    return getAllPosts();
  }

  const lowerQuery = query.toLowerCase();
  
  return posts.filter(post => {
    const titleMatch = post.title.toLowerCase().includes(lowerQuery);
    const descriptionMatch = post.description?.toLowerCase().includes(lowerQuery);
    const contentMatch = post.content?.toLowerCase().includes(lowerQuery);
    const categoryMatch = post.categories?.some(cat => 
      cat.toLowerCase().includes(lowerQuery)
    );
    
    return titleMatch || descriptionMatch || contentMatch || categoryMatch;
  }).sort((a, b) => new Date(b.date) - new Date(a.date));
};

/**
 * Get recent posts (limited number)
 */
export const getRecentPosts = (limit = 5) => {
  return getAllPosts().slice(0, limit);
};

/**
 * Format date string
 */
export const formatDate = (dateString, locale = 'de-DE') => {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Calculate reading time (based on average 200 words per minute)
 */
export const calculateReadingTime = (content) => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return minutes;
};

