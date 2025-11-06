import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Edit, 
  Trash2, 
  Search, 
  Calendar, 
  Tag,
  Plus,
  FileText,
  TrendingUp
} from 'lucide-react';
import { getAllPosts } from '../../blog/utils/blogUtils';

export default function PostList({ onEdit, onNew }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const posts = getAllPosts();

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set();
    posts.forEach(post => {
      if (post.categories) {
        post.categories.forEach(cat => cats.add(cat));
      }
    });
    return Array.from(cats).sort();
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = !searchQuery || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = !selectedCategory || 
        (post.categories && post.categories.includes(selectedCategory));

      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  const handleDelete = (post) => {
    if (confirm(`Are you sure you want to delete "${post.title}"?`)) {
      alert('Delete functionality will be implemented with GitHub API');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text">All Posts</h2>
          <p className="text-sm text-muted mt-1">
            {filteredPosts.length} of {posts.length} posts
          </p>
        </div>
        <button
          onClick={onNew}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all font-semibold"
        >
          <Plus size={18} />
          New Post
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-text placeholder:text-muted"
          />
        </div>

        {/* Category Filter */}
        <select
          value={selectedCategory || ''}
          onChange={(e) => setSelectedCategory(e.target.value || null)}
          className="px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-text"
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="flex items-center gap-2 text-primary mb-2">
            <FileText size={20} />
            <span className="text-sm font-semibold">Total Posts</span>
          </div>
          <div className="text-2xl font-bold text-text">{posts.length}</div>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="flex items-center gap-2 text-secondary mb-2">
            <Tag size={20} />
            <span className="text-sm font-semibold">Categories</span>
          </div>
          <div className="text-2xl font-bold text-text">{categories.length}</div>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="flex items-center gap-2 text-accent mb-2">
            <TrendingUp size={20} />
            <span className="text-sm font-semibold">Featured</span>
          </div>
          <div className="text-2xl font-bold text-text">
            {posts.filter(p => p.featured).length}
          </div>
        </div>
      </div>

      {/* Posts List */}
      {filteredPosts.length > 0 ? (
        <div className="space-y-4">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {/* Categories */}
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {post.categories.map((cat, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-semibold"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Description */}
                  {post.description && (
                    <p className="text-sm text-muted mb-3 line-clamp-2">
                      {post.description}
                    </p>
                  )}

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    {post.author && (
                      <div className="flex items-center gap-1">
                        <span>by {post.author}</span>
                      </div>
                    )}
                    {post.featured && (
                      <span className="px-2 py-0.5 bg-accent/10 text-accent rounded-full font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(post)}
                    className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all"
                    title="Edit"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(post)}
                    className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-card rounded-lg border border-border p-12 text-center">
          <FileText size={48} className="mx-auto mb-4 text-muted opacity-50" />
          <h3 className="text-xl font-bold text-text mb-2">No posts found</h3>
          <p className="text-muted mb-4">
            {searchQuery || selectedCategory
              ? 'Try adjusting your search or filter'
              : 'Get started by creating your first post'}
          </p>
          <button
            onClick={onNew}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all"
          >
            <Plus size={18} />
            Create Post
          </button>
        </div>
      )}
    </div>
  );
}

