import Fuse from 'fuse.js';

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
 * Advanced fuzzy search using Fuse.js
 * Searches in: title, description, content, categories, and author
 * Returns posts sorted by relevance with match highlighting
 */
export function searchPostsAdvanced(query) {
  if (!query || query.trim() === '') {
    return [];
  }

  const allPosts = getAllPosts();

  // Configure Fuse.js options
  const fuseOptions = {
    keys: [
      { name: 'title', weight: 3.0 },
      { name: 'description', weight: 2.0 },
      { name: 'content', weight: 1.0 },
      { name: 'categories', weight: 1.5 },
      { name: 'author', weight: 0.5 }
    ],
    threshold: 0.4, // 0.0 = perfect match, 1.0 = match anything
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: 2,
    ignoreLocation: true, // Search entire string
    useExtendedSearch: true,
    findAllMatches: true
  };

  const fuse = new Fuse(allPosts, fuseOptions);
  const results = fuse.search(query);

  // Return posts with match information
  return results.map(result => ({
    ...result.item,
    searchScore: result.score,
    matches: result.matches
  }));
};

/**
 * Get search suggestions based on partial query
 */
export function getSearchSuggestions(query, limit = 5) {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const allPosts = getAllPosts();
  const suggestions = new Set();

  // Get title suggestions
  allPosts.forEach(post => {
    const title = post.title.toLowerCase();
    const queryLower = query.toLowerCase();
    
    if (title.includes(queryLower)) {
      suggestions.add(post.title);
    }

    // Add category suggestions
    if (post.categories) {
      post.categories.forEach(cat => {
        if (cat.toLowerCase().includes(queryLower)) {
          suggestions.add(cat);
        }
      });
    }
  });

  return Array.from(suggestions).slice(0, limit);
}

/**
 * Get related posts based on categories and content similarity
 */
export function getRelatedPosts(postId, limit = 3) {
  const currentPost = getPostById(postId);
  if (!currentPost) return [];

  const allPosts = getAllPosts().filter(p => p.id !== postId);
  
  // Score posts based on shared categories and content similarity
  const scoredPosts = allPosts.map(post => {
    let score = 0;

    // Category overlap
    if (currentPost.categories && post.categories) {
      const sharedCategories = currentPost.categories.filter(cat => 
        post.categories.includes(cat)
      );
      score += sharedCategories.length * 10;
    }

    // Title word overlap
    const currentWords = new Set(currentPost.title.toLowerCase().split(/\s+/));
    const postWords = post.title.toLowerCase().split(/\s+/);
    postWords.forEach(word => {
      if (currentWords.has(word) && word.length > 3) {
        score += 2;
      }
    });

    return { post, score };
  });

  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}

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

