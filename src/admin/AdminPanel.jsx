import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  LogOut, 
  Plus, 
  FileText, 
  Settings,
  Github,
  Lock
} from 'lucide-react';
import GitHubAuth from './components/GitHubAuth';
import PostEditor from './components/PostEditor';
import PostList from './components/PostList';
import { useGitHub } from './hooks/useGitHub';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('posts'); // 'posts', 'new', 'settings'
  const [editingPost, setEditingPost] = useState(null);
  const { user, isAuthenticated, login, logout } = useGitHub();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 shadow-2xl">
            {/* Logo/Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                <Shield size={32} className="text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Admin Panel
              </h1>
              <p className="text-white/70">
                Manage your blog posts with GitHub
              </p>
            </div>

            {/* Login Component */}
            <GitHubAuth onLogin={login} authMode={user?.authMode} />

            {/* Security Notice */}
            <div className="mt-6 flex items-start gap-2 text-xs text-white/60">
              <Lock size={14} className="mt-0.5 flex-shrink-0" />
              <p>
                Secure authentication via GitHub OAuth. Your credentials are never stored.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-lg bg-card/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Shield size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-text">Admin Panel</h1>
                <p className="text-xs text-muted">Blog Management</p>
              </div>
            </div>

            {/* User Info & Logout */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <img
                  src={user?.avatar_url}
                  alt={user?.name}
                  className="w-8 h-8 rounded-full border-2 border-primary"
                />
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-text">{user?.name}</p>
                  <p className="text-xs text-muted">@{user?.login}</p>
                </div>
              </div>
              <button
                onClick={logout}
                className="flex items-center gap-2 px-3 py-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all"
              >
                <LogOut size={16} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-card rounded-lg p-1 border border-border">
          <button
            onClick={() => {
              setActiveTab('posts');
              setEditingPost(null);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all flex-1 sm:flex-none ${
              activeTab === 'posts'
                ? 'bg-primary text-white'
                : 'text-text hover:bg-background'
            }`}
          >
            <FileText size={18} />
            <span>All Posts</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('new');
              setEditingPost(null);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all flex-1 sm:flex-none ${
              activeTab === 'new'
                ? 'bg-primary text-white'
                : 'text-text hover:bg-background'
            }`}
          >
            <Plus size={18} />
            <span>New Post</span>
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all flex-1 sm:flex-none ${
              activeTab === 'settings'
                ? 'bg-primary text-white'
                : 'text-text hover:bg-background'
            }`}
          >
            <Settings size={18} />
            <span>Settings</span>
          </button>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'posts' && !editingPost && (
            <motion.div
              key="posts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <PostList
                onEdit={(post) => {
                  setEditingPost(post);
                  setActiveTab('edit');
                }}
                onNew={() => setActiveTab('new')}
              />
            </motion.div>
          )}

          {(activeTab === 'new' || editingPost) && (
            <motion.div
              key="editor"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <PostEditor
                post={editingPost}
                onSave={() => {
                  setActiveTab('posts');
                  setEditingPost(null);
                }}
                onCancel={() => {
                  setActiveTab('posts');
                  setEditingPost(null);
                }}
              />
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-2xl font-bold text-text mb-4">Settings</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-text mb-2">GitHub Repository</h3>
                    <p className="text-sm text-muted">
                      Connected to: <span className="font-mono text-primary">CodingTarik/learn_bouldering</span>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">Auto-commit</h3>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-muted">
                        Automatically commit changes to GitHub
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

