/**
 * History-based Navigation Utility
 * Replaces hash-based routing (#/blog/post/xyz) with real paths (/blog/post/xyz)
 * for proper SEO, social media sharing, and crawler support.
 */

/**
 * Navigate to a new path using History API
 * @param {string} path - The path to navigate to (e.g. '/blog/post/my-post')
 * @param {object} options - Navigation options
 * @param {boolean} options.replace - Use replaceState instead of pushState
 * @param {object} options.state - State object to pass
 */
const isOffline = (typeof __IS_OFFLINE__ !== 'undefined' && __IS_OFFLINE__) || (window.location.protocol === 'file:');

/**
 * Navigate to a new path using History API or Hash (offline)
 * @param {string} path - The path to navigate to (e.g. '/blog/post/my-post')
 * @param {object} options - Navigation options
 * @param {boolean} options.replace - Use replaceState instead of pushState
 * @param {object} options.state - State object to pass
 */
export function navigate(path, { replace = false, state = {} } = {}) {
  // Normalize path to always start with /
  if (!path.startsWith('/')) {
    path = '/' + path;
  }

  if (isOffline) {
    if (replace) {
      const currentUrl = window.location.href.replace(window.location.hash, '');
      window.location.replace(currentUrl + '#' + path);
    } else {
      window.location.hash = path;
    }
    // No need to dispatch popstate manually, hashchange triggers it or popstate does
  } else {
    if (replace) {
      window.history.replaceState(state, '', path);
    } else {
      window.history.pushState(state, '', path);
    }
    // Dispatch popstate so listeners react to programmatic navigation
    window.dispatchEvent(new PopStateEvent('popstate', { state }));
  }
}

/**
 * Get the current pathname
 * @returns {string} Current pathname (e.g. '/blog/post/my-post')
 */
export function getPath() {
  if (isOffline) {
    // Return hash path without the #
    return window.location.hash.slice(1) || '/';
  }
  return window.location.pathname;
}

/**
 * Get the current full URL with search params
 * @returns {string}
 */
export function getFullPath() {
  if (isOffline) {
    return window.location.hash.slice(1) || '/';
  }
  return window.location.pathname + window.location.search;
}

/**
 * Get search params as URLSearchParams
 * @returns {URLSearchParams}
 */
export function getSearchParams() {
  if (isOffline) {
    const hash = window.location.hash;
    const queryIndex = hash.indexOf('?');
    if (queryIndex !== -1) {
      return new URLSearchParams(hash.slice(queryIndex));
    }
    return new URLSearchParams();
  }
  return new URLSearchParams(window.location.search);
}

/**
 * Subscribe to navigation changes (both popstate and programmatic)
 * @param {function} callback - Called with the new path
 * @returns {function} Unsubscribe function
 */
export function onNavigate(callback) {
  const handler = () => callback(getPath());
  window.addEventListener('popstate', handler);
  return () => window.removeEventListener('popstate', handler);
}

/**
 * Create a click handler for navigation links
 * Prevents default browser behavior and uses History API instead
 * @param {string} path - The path to navigate to
 * @param {object} options - Navigation options
 * @returns {function} Click event handler
 */
export function createLinkHandler(path, options = {}) {
  return (e) => {
    if (e) {
      e.preventDefault();
    }
    navigate(path, options);
  };
}

/**
 * Link component helper - converts hash-style paths to real paths
 * @param {string} hashPath - Old hash path like '#/blog/post/xyz'
 * @returns {string} Real path like '/blog/post/xyz'
 */
export function fromHash(hashPath) {
  if (!hashPath) return '/';
  return hashPath.replace(/^#/, '');
}
