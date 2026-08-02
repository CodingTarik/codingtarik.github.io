/**
 * Generate a URL-friendly ID from a title
 */
export function generatePostId(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Generate post template as JavaScript file content
 */
export function generatePostTemplate(postData) {
  const {
    id,
    title,
    description,
    content,
    author,
    date,
    categories,
    thumbnail,
    featured,
  } = postData;

  // Escape special characters in strings
  const escapeString = (str) => {
    return str
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\$/g, '\\$');
  };

  const template = `export default {
  id: '${id}',
  title: '${escapeString(title)}',
  description: '${escapeString(description)}',
  date: '${date}',
  author: '${escapeString(author)}',
  categories: ${JSON.stringify(categories)},
  ${thumbnail ? `thumbnail: '${escapeString(thumbnail)}',` : ''}
  ${featured ? 'featured: true,' : ''}
  content: \`${escapeString(content)}\`,
};
`;

  return template;
}

/**
 * Parse post file content back to object
 */
export function parsePostFile(fileContent) {
  try {
    // This is a simplified parser - in production you'd want more robust parsing
    const module = { exports: {} };
    const func = new Function('module', 'exports', fileContent + '\nreturn exports.default;');
    return func(module, module.exports);
  } catch (error) {
    console.error('Error parsing post file:', error);
    return null;
  }
}

/**
 * Validate post data
 */
export function validatePost(postData) {
  const errors = {};

  if (!postData.id || !postData.id.trim()) {
    errors.id = 'ID is required';
  }

  if (!postData.title || !postData.title.trim()) {
    errors.title = 'Title is required';
  }

  if (!postData.description || !postData.description.trim()) {
    errors.description = 'Description is required';
  }

  if (!postData.content || !postData.content.trim()) {
    errors.content = 'Content is required';
  }

  if (!postData.date) {
    errors.date = 'Date is required';
  }

  if (!postData.author || !postData.author.trim()) {
    errors.author = 'Author is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Format date for display
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Get file path for post
 */
export function getPostFilePath(postId, category = 'general') {
  return `src/blog/posts/${category}/${postId}.js`;
}

