import Fuse from 'fuse.js';

// ─── Content Management: Import all blog posts from root /posts/ directory ───
const jsModules = import.meta.glob('/posts/**/*.js', { eager: true });
const relativeJsModules = import.meta.glob('../../../posts/**/*.js', { eager: true });

const allModules = {
  ...jsModules,
  ...relativeJsModules,
};

// Extract and normalize posts from modules
const posts = Object.entries(allModules)
  .map(([filepath, module]) => {
    const post = module.default;
    if (!post || !post.id) return null;

    // Determine content type from file extension
    const isMdx = filepath.endsWith('.mdx');

    return {
      ...post,
      // Content management fields with defaults
      published: post.published !== undefined ? post.published : !post.draft,
      draft: post.draft || false,
      lastModified: post.lastModified || post.date,
      language: post.language || 'de',
      contentType: isMdx ? 'mdx' : 'markdown',
      // Source file path (for admin/debugging)
      _filepath: filepath,
    };
  })
  .filter(post => post !== null)
  // Filter out drafts/unpublished posts in production
  .filter(post => {
    if (import.meta.env.DEV) return true; // Show all in dev mode
    return post.published !== false && post.draft !== true;
  });

/**
 * Get all blog posts sorted by date (newest first)
 */
export const getAllPosts = () => {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
};

/**
 * Get a single post by ID
 */
export const getPostById = (id) => {
  return posts.find(post => post.id === id);
};

/**
 * Advanced fuzzy search using Fuse.js
 */
export function searchPostsAdvanced(query) {
  if (!query || query.trim() === '') {
    return [];
  }

  const allPosts = getAllPosts();

  const fuseOptions = {
    keys: [
      { name: 'title', weight: 3.0 },
      { name: 'description', weight: 2.0 },
      { name: 'content', weight: 1.0 },
      { name: 'categories', weight: 1.5 },
      { name: 'author', weight: 0.5 },
      { name: 'keywords', weight: 2.0 },
    ],
    threshold: 0.4,
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: 2,
    ignoreLocation: true,
    useExtendedSearch: true,
    findAllMatches: true,
    getFn: (obj, path) => {
      const value = Fuse.config.getFn(obj, path);
      if (path[0] === 'content' && typeof value !== 'string') {
        return '';
      }
      return value;
    }
  };

  const fuse = new Fuse(allPosts, fuseOptions);
  const results = fuse.search(query);

  return results.map(result => ({
    ...result.item,
    searchScore: result.score,
    matches: result.matches
  }));
}

/**
 * Get search suggestions based on partial query
 */
export function getSearchSuggestions(query, limit = 5) {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const allPosts = getAllPosts();
  const suggestions = new Set();

  allPosts.forEach(post => {
    const title = post.title.toLowerCase();
    const queryLower = query.toLowerCase();
    
    if (title.includes(queryLower)) {
      suggestions.add(post.title);
    }

    if (post.categories) {
      post.categories.forEach(cat => {
        if (cat.toLowerCase().includes(queryLower)) {
          suggestions.add(cat);
        }
      });
    }

    // Also search keywords
    if (post.keywords) {
      post.keywords.forEach(kw => {
        if (kw.toLowerCase().includes(queryLower)) {
          suggestions.add(kw);
        }
      });
    }
  });

  return Array.from(suggestions).slice(0, limit);
}

/**
 * Get related posts based on categories, keywords, and content similarity
 * Improved algorithm: TF-IDF-like scoring + recency bonus
 */
export function getRelatedPosts(postId, limit = 3) {
  const currentPost = getPostById(postId);
  if (!currentPost) return [];

  const allPosts = getAllPosts().filter(p => p.id !== postId);
  
  const scoredPosts = allPosts.map(post => {
    let score = 0;

    // Category overlap (highest weight)
    if (currentPost.categories && post.categories) {
      const sharedCategories = currentPost.categories.filter(cat => 
        post.categories.includes(cat)
      );
      score += sharedCategories.length * 15;
    }

    // Keyword overlap
    if (currentPost.keywords && post.keywords) {
      const currentKeywords = new Set(currentPost.keywords.map(k => k.toLowerCase()));
      const sharedKeywords = post.keywords.filter(kw => 
        currentKeywords.has(kw.toLowerCase())
      );
      score += sharedKeywords.length * 8;
    }

    // Title word overlap (ignoring short common words)
    const stopWords = new Set(['the', 'a', 'an', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'and', 'or', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'can', 'der', 'die', 'das', 'ein', 'eine', 'und', 'oder', 'ist', 'sind', 'war', 'mit', 'fuer', 'von', 'zu']);
    const currentWords = new Set(
      currentPost.title.toLowerCase().split(/\s+/).filter(w => w.length > 2 && !stopWords.has(w))
    );
    const postWords = post.title.toLowerCase().split(/\s+/).filter(w => w.length > 2 && !stopWords.has(w));
    postWords.forEach(word => {
      if (currentWords.has(word)) {
        score += 3;
      }
    });

    // Recency bonus: newer posts get a small boost
    const daysSincePost = (Date.now() - new Date(post.date).getTime()) / (1000 * 60 * 60 * 24);
    const recencyBonus = Math.max(0, 5 - daysSincePost / 365); // Up to 5 points for posts within 1 year
    score += recencyBonus;

    return { post, score };
  });

  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .filter(item => item.score > 0) // Only return if there's some relevance
    .map(item => item.post);
}

/**
 * Get all unique categories from all posts
 */
export const getAllCategories = () => {
  const categoriesMap = new Map();
  posts.forEach(post => {
    if (post.categories) {
      post.categories.forEach(category => {
        categoriesMap.set(category, (categoriesMap.get(category) || 0) + 1);
      });
    }
  });
  // Return sorted by count (most popular first), then alphabetically
  return Array.from(categoriesMap.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([category]) => category);
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
    const contentMatch = typeof post.content === 'string' && post.content.toLowerCase().includes(lowerQuery);
    const categoryMatch = post.categories?.some(cat => 
      cat.toLowerCase().includes(lowerQuery)
    );
    const keywordMatch = post.keywords?.some(kw =>
      kw.toLowerCase().includes(lowerQuery)
    );
    
    return titleMatch || descriptionMatch || contentMatch || categoryMatch || keywordMatch;
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
  if (typeof content !== 'string') {
    return 5; // Default for non-string content
  }
  const wordsPerMinute = 200;
  // Strip markdown/HTML for more accurate word count
  const strippedContent = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[([^\]]*)\]\(.*?\)/g, '$1') // Remove link syntax
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/#{1,6}\s/g, '') // Remove heading syntax
    .replace(/[*_~]/g, ''); // Remove emphasis syntax
  const wordCount = strippedContent.split(/\s+/).filter(w => w.length > 0).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(1, minutes);
};

/**
 * Get post statistics
 */
export const getPostStats = () => {
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const totalWords = allPosts.reduce((sum, post) => {
    if (typeof post.content === 'string') {
      return sum + post.content.split(/\s+/).length;
    }
    return sum;
  }, 0);

  return {
    totalPosts: allPosts.length,
    totalCategories: categories.length,
    totalWords,
    avgReadingTime: Math.round(totalWords / 200 / allPosts.length),
    newestPost: allPosts[0],
    oldestPost: allPosts[allPosts.length - 1],
  };
};
