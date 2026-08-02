import React, { useState, useEffect } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const BOOKMARKS_KEY = 'blog_bookmarked_posts';

/**
 * Get all bookmarked post IDs
 */
export function getBookmarkedPosts() {
  try {
    return JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || '[]');
  } catch {
    return [];
  }
}

/**
 * Check if a post is bookmarked
 */
export function isBookmarked(postId) {
  return getBookmarkedPosts().includes(postId);
}

/**
 * Toggle bookmark for a post
 */
export function toggleBookmark(postId) {
  const bookmarks = getBookmarkedPosts();
  const index = bookmarks.indexOf(postId);
  if (index > -1) {
    bookmarks.splice(index, 1);
  } else {
    bookmarks.push(postId);
  }
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  window.dispatchEvent(new CustomEvent('bookmarks-changed'));
  return index === -1; // Returns true if added, false if removed
}

/**
 * BookmarkButton component for individual posts
 */
export default function BookmarkButton({ postId, size = 'default' }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setBookmarked(isBookmarked(postId));

    const handler = () => setBookmarked(isBookmarked(postId));
    window.addEventListener('bookmarks-changed', handler);
    return () => window.removeEventListener('bookmarks-changed', handler);
  }, [postId]);

  const handleToggle = (e) => {
    e.stopPropagation();
    const added = toggleBookmark(postId);
    setBookmarked(added);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const isSmall = size === 'small';

  return (
    <div className="relative">
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`flex items-center gap-1.5 transition-colors ${
          bookmarked
            ? 'text-yellow-500 hover:text-yellow-600'
            : 'text-muted hover:text-primary'
        } ${isSmall ? 'p-1' : 'px-3 py-1.5 rounded-lg hover:bg-primary/10'}`}
        title={bookmarked ? 'Remove bookmark' : 'Bookmark this post'}
        aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark this post'}
      >
        {bookmarked ? (
          <BookmarkCheck size={isSmall ? 16 : 14} className="fill-current" />
        ) : (
          <Bookmark size={isSmall ? 16 : 14} />
        )}
        {!isSmall && <span className="text-sm">{bookmarked ? 'Saved' : 'Save'}</span>}
      </motion.button>

      {/* Toast notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-800 text-xs px-3 py-1.5 rounded-lg shadow-lg"
        >
          {bookmarked ? 'Bookmarked!' : 'Removed'}
        </motion.div>
      )}
    </div>
  );
}
