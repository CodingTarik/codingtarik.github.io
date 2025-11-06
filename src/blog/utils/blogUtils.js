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
}

/**
 * Advanced semantic search in posts
 * Searches in: title, description, and content
 * Returns posts sorted by relevance
 */
export function searchPostsAdvanced(query) {
  if (!query || query.trim() === '') {
    return [];
  }

  const lowerQuery = query.toLowerCase().trim();
  const searchTerms = lowerQuery.split(' ').filter(term => term.length > 0);
  
  const posts = getAllPosts();
  const scoredPosts = [];

  posts.forEach(post => {
    let score = 0;
    const titleLower = post.title.toLowerCase();
    const descriptionLower = (post.description || '').toLowerCase();
    const contentLower = post.content.toLowerCase();

    searchTerms.forEach(term => {
      // Title matches (highest weight)
      if (titleLower.includes(term)) {
        score += 10;
        // Exact word match in title
        const titleWords = titleLower.split(/\s+/);
        if (titleWords.includes(term)) {
          score += 5;
        }
      }

      // Description matches (medium weight)
      if (descriptionLower.includes(term)) {
        score += 5;
        // Exact word match in description
        const descWords = descriptionLower.split(/\s+/);
        if (descWords.includes(term)) {
          score += 3;
        }
      }

      // Content matches (lower weight but still valuable)
      if (contentLower.includes(term)) {
        score += 2;
        // Count occurrences in content (max 10 bonus points)
        const occurrences = (contentLower.match(new RegExp(term, 'g')) || []).length;
        score += Math.min(occurrences * 0.5, 10);
      }

      // Category matches
      if (post.categories) {
        post.categories.forEach(cat => {
          if (cat.toLowerCase().includes(term)) {
            score += 8;
          }
        });
      }

      // Author matches
      if (post.author && post.author.toLowerCase().includes(term)) {
        score += 3;
      }
    });

    // Bonus for matching all search terms
    const allTermsInTitle = searchTerms.every(term => titleLower.includes(term));
    const allTermsInDescription = searchTerms.every(term => descriptionLower.includes(term));
    
    if (allTermsInTitle) score += 20;
    if (allTermsInDescription) score += 10;

    // Only include posts with a score
    if (score > 0) {
      scoredPosts.push({ post, score });
    }
  });

  // Sort by score (highest first), then by date
  return scoredPosts
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return new Date(b.post.date) - new Date(a.post.date);
    })
    .map(item => item.post);
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

