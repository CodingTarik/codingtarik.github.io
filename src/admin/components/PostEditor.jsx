import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MDEditor from '@uiw/react-md-editor';
import { 
  Save, 
  X, 
  Eye, 
  Code, 
  Image as ImageIcon,
  Tag,
  Calendar,
  User,
  FileText,
  AlertCircle
} from 'lucide-react';
import PostPreview from './PostPreview';
import { useGitHubCommit } from '../hooks/useGitHubCommit';
import { generatePostId, generatePostTemplate } from '../utils/postUtils';
import adminConfig from '../config';

export default function PostEditor({ post, onSave, onCancel }) {
  const [showPreview, setShowPreview] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { commitPost } = useGitHubCommit();

  // Form state
  const [formData, setFormData] = useState({
    id: post?.id || '',
    title: post?.title || '',
    description: post?.description || '',
    content: post?.content || '',
    author: post?.author || adminConfig.posts.defaultAuthor,
    date: post?.date || new Date().toISOString().split('T')[0],
    categories: post?.categories?.join(', ') || '',
    thumbnail: post?.thumbnail || '',
    featured: post?.featured || false,
  });

  const [errors, setErrors] = useState({});

  // Auto-generate ID from title
  useEffect(() => {
    if (!post && formData.title && !formData.id) {
      setFormData(prev => ({
        ...prev,
        id: generatePostId(formData.title)
      }));
    }
  }, [formData.title, post]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Content is required';
    }

    if (!formData.id.trim()) {
      newErrors.id = 'ID is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSaving(true);

    try {
      // Convert categories string to array
      const categories = formData.categories
        .split(',')
        .map(cat => cat.trim())
        .filter(cat => cat);

      // Generate post file content
      const postContent = generatePostTemplate({
        ...formData,
        categories,
      });

      // Determine file path
      const fileName = `${formData.id}.js`;
      const category = categories[0] || adminConfig.posts.defaultCategory;
      const filePath = `${adminConfig.posts.basePath}/${category}/${fileName}`;

      // Commit to GitHub
      await commitPost(filePath, postContent, post ? 'Update' : 'Create');

      alert(`Post ${post ? 'updated' : 'created'} successfully!`);
      onSave();
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Failed to save post. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text">
            {post ? 'Edit Post' : 'Create New Post'}
          </h2>
          <p className="text-sm text-muted mt-1">
            {post ? `Editing: ${post.title}` : 'Fill in the details below'}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-lg hover:bg-secondary hover:text-white transition-all"
          >
            {showPreview ? <Code size={18} /> : <Eye size={18} />}
            <span className="hidden sm:inline">
              {showPreview ? 'Edit' : 'Preview'}
            </span>
          </button>
        </div>
      </div>

      {showPreview ? (
        /* Preview Mode */
        <PostPreview post={formData} onBack={() => setShowPreview(false)} />
      ) : (
        /* Edit Mode */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-text mb-2">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="Enter post title..."
                className={`w-full px-4 py-3 bg-card border ${
                  errors.title ? 'border-red-500' : 'border-border'
                } rounded-lg focus:outline-none focus:border-primary transition-colors text-text placeholder:text-muted`}
              />
              {errors.title && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.title}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-text mb-2">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                placeholder="Brief description of the post..."
                rows={3}
                className={`w-full px-4 py-3 bg-card border ${
                  errors.description ? 'border-red-500' : 'border-border'
                } rounded-lg focus:outline-none focus:border-primary transition-colors text-text placeholder:text-muted resize-none`}
              />
              {errors.description && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.description}
                </p>
              )}
            </div>

            {/* Content Editor */}
            <div>
              <label className="block text-sm font-semibold text-text mb-2">
                Content * (Markdown)
              </label>
              <div className={`border ${
                errors.content ? 'border-red-500' : 'border-border'
              } rounded-lg overflow-hidden`}>
                <MDEditor
                  value={formData.content}
                  onChange={(value) => handleChange('content', value || '')}
                  preview="edit"
                  height={500}
                  data-color-mode="light"
                />
              </div>
              {errors.content && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.content}
                </p>
              )}
            </div>
          </div>

          {/* Metadata Sidebar */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6 space-y-4 sticky top-20">
              <h3 className="font-bold text-text flex items-center gap-2">
                <FileText size={18} />
                Metadata
              </h3>

              {/* Post ID */}
              <div>
                <label className="block text-xs font-semibold text-muted mb-2">
                  Post ID *
                </label>
                <input
                  type="text"
                  value={formData.id}
                  onChange={(e) => handleChange('id', e.target.value)}
                  placeholder="post-id"
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-sm text-text font-mono"
                />
              </div>

              {/* Author */}
              <div>
                <label className="block text-xs font-semibold text-muted mb-2 flex items-center gap-1">
                  <User size={14} />
                  Author
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => handleChange('author', e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-sm text-text"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-semibold text-muted mb-2 flex items-center gap-1">
                  <Calendar size={14} />
                  Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-sm text-text"
                />
              </div>

              {/* Categories */}
              <div>
                <label className="block text-xs font-semibold text-muted mb-2 flex items-center gap-1">
                  <Tag size={14} />
                  Categories
                </label>
                <input
                  type="text"
                  value={formData.categories}
                  onChange={(e) => handleChange('categories', e.target.value)}
                  placeholder="React, JavaScript, Web"
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-sm text-text"
                />
                <p className="text-xs text-muted mt-1">
                  Comma-separated values
                </p>
              </div>

              {/* Thumbnail */}
              <div>
                <label className="block text-xs font-semibold text-muted mb-2 flex items-center gap-1">
                  <ImageIcon size={14} />
                  Thumbnail URL
                </label>
                <input
                  type="text"
                  value={formData.thumbnail}
                  onChange={(e) => handleChange('thumbnail', e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-sm text-text"
                />
              </div>

              {/* Featured */}
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => handleChange('featured', e.target.checked)}
                    className="rounded border-border"
                  />
                  <span className="text-sm text-text">Featured Post</span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-border space-y-2">
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                >
                  <Save size={18} />
                  {isSaving ? 'Saving...' : post ? 'Update Post' : 'Publish Post'}
                </button>
                <button
                  onClick={onCancel}
                  disabled={isSaving}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-background text-text rounded-lg hover:bg-card transition-all border border-border"
                >
                  <X size={18} />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

