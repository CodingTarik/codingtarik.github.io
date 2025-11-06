import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, BookOpen, Sun, Moon, User, FolderOpen, Code, Shield, Coffee, Box, Target, X, Rss, Search } from 'lucide-react';
import { getAllCategories } from '../utils/blogUtils';
import { useTheme } from '../../learnbuddy/context/ThemeContext';
import { generateRSSFeed } from '../utils/rssUtils';

// Custom Discord Icon Component
const DiscordIcon = ({ size = 18 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

export default function BlogSidebar({ 
  onBackToLearnBuddy, 
  selectedTab,
  onTabChange,
  onCategorySelect,
  selectedCategory,
  isOpen,
  onClose
}) {
  const { isDark, toggleTheme } = useTheme();
  const categories = getAllCategories();

  const tabs = [
    { id: 'posts', label: 'Posts', icon: FileText },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'categories', label: 'Categories', icon: FolderOpen },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'cv', label: 'CV', icon: User }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/CodingTarik',
      color: 'hover:text-text'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn', 
      url: 'https://linkedin.com/in/tarikazzouzi', // TODO: Anpassen
      color: 'hover:text-primary'
    },
    {
      icon: Box,
      label: 'HackTheBox',
      url: 'https://app.hackthebox.com/profile/yourprofile', // TODO: Anpassen
      color: 'hover:text-green-600 dark:hover:text-green-400'
    },
    {
      icon: Target,
      label: 'TryHackMe',
      url: 'https://tryhackme.com/p/yourprofile', // TODO: Anpassen
      color: 'hover:text-red-600 dark:hover:text-red-400'
    },
    {
      icon: DiscordIcon,
      label: 'Discord',
      url: 'https://discord.com/users/yourid', // TODO: Anpassen
      color: 'hover:text-primary'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:your.email@example.com', // TODO: Anpassen
      color: 'hover:text-text'
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div 
        initial={false}
        animate={{ x: 0 }}
        className={`
          fixed left-0 top-0 bottom-0 w-80 bg-background/95 backdrop-blur-xl border-r border-border flex flex-col z-50
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Mobile Close Button */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-border transition-colors"
        >
          <X size={24} className="text-text" />
        </button>

        {/* Header - Profile */}
        <motion.div 
          className="p-6 border-b border-border text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
        {/* Profile Photo Placeholder with Gradient Border */}
        <motion.div 
          className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center p-1"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <User size={40} className="text-primary" />
          </div>
        </motion.div>
        
        <motion.h2 
          className="text-xl font-bold bg-gradient-to-r from-text to-primary bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Tarik Azzouzi
        </motion.h2>
        <motion.a 
          href="https://github.com/CodingTarik" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-muted hover:text-primary transition-colors inline-block"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          @CodingTarik
        </motion.a>
        </motion.div>

      {/* Navigation Tabs */}
      <nav className="border-b border-border">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          return (
            <motion.button
              key={tab.id}
              onClick={() => {
                onTabChange(tab.id);
                onClose(); // Close mobile sidebar
              }}
              className={`w-full px-6 py-3 text-left font-medium transition-all flex items-center gap-3 group relative overflow-hidden ${
                selectedTab === tab.id
                  ? 'text-primary'
                  : 'text-muted hover:text-text'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
              whileHover={{ x: 5 }}
            >
              {/* Active Indicator */}
              {selectedTab === tab.id && (
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              {/* Hover Background */}
              <motion.div
                className="absolute inset-0 bg-primary/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              
              <div className="relative z-10 flex items-center gap-3">
                {Icon && (
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon size={18} className="group-hover:text-primary transition-colors" />
                  </motion.div>
                )}
                <span>{tab.label}</span>
              </div>
            </motion.button>
          );
        })}
      </nav>

      {/* Main Content Area - Empty, content shows on the right */}
      <div className="flex-grow overflow-y-auto scrollbar-thin">
        
      </div>

      {/* Footer Buttons */}
      <div className="p-4 space-y-2.5">
        {/* Go to LearnBuddy Button */}
        <button
          onClick={onBackToLearnBuddy}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg shadow-md p-2.5 hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 font-semibold text-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Go to LearnBuddy</span>
        </button>

        {/* Buy Me a Coffee */}
        <a
          href="https://www.buymeacoffee.com/tarikazzouzi"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-md p-2.5 hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 font-semibold text-sm"
        >
          <Coffee size={16} />
          <span>Buy Me a Coffee</span>
        </a>

        {/* RSS Feed Button */}
        <button
          onClick={() => {
            const rssFeed = generateRSSFeed();
            const blob = new Blob([rssFeed], { type: 'application/rss+xml' });
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank');
            setTimeout(() => URL.revokeObjectURL(url), 100);
          }}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-all text-xs font-medium text-orange-700 dark:text-orange-300"
        >
          <Rss size={14} />
          <span>RSS Feed</span>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-border/50 hover:bg-border transition-all text-xs font-medium text-text"
        >
          {isDark ? (
            <>
              <Sun size={14} className="text-amber-500" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon size={14} className="text-muted" />
              <span>Dark Mode</span>
            </>
          )}
        </button>

        {/* Social Media Links */}
        <div className="grid grid-cols-3 gap-2">
          {socialLinks.slice(0, 6).map(link => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center p-2 rounded-lg bg-border/50 text-muted transition-all ${link.color}`}
                title={link.label}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
      </motion.div>
    </>
  );
}

