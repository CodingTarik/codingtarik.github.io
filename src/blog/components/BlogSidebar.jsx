import React, { useState } from 'react';
import { Mail, Github, Linkedin, MessageCircle, FileText, BookOpen, Sun, Moon, User, FolderOpen, Code, Shield, Coffee, Box, Target, X, Rss } from 'lucide-react';
import { getAllCategories } from '../utils/blogUtils';
import { useTheme } from '../../learnbuddy/context/ThemeContext';
import { downloadRSSFeed } from '../utils/rssUtils';

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
    { id: 'categories', label: 'Categories', icon: FolderOpen },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'cv', label: 'CV', icon: User }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/CodingTarik',
      color: 'hover:text-stone-900 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn', 
      url: 'https://linkedin.com/in/tarikazzouzi', // TODO: Anpassen
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
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
      icon: MessageCircle,
      label: 'Discord',
      url: 'https://discord.com/users/yourid', // TODO: Anpassen
      color: 'hover:text-indigo-600 dark:hover:text-indigo-400'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:your.email@example.com', // TODO: Anpassen
      color: 'hover:text-stone-900 dark:hover:text-stone-100'
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 bottom-0 w-80 bg-white dark:bg-stone-900 border-r border-stone-200 dark:border-stone-800 flex flex-col z-50
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Mobile Close Button */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
        >
          <X size={24} className="text-stone-600 dark:text-stone-400" />
        </button>

        {/* Header - Profile */}
        <div className="p-6 border-b border-stone-200 dark:border-stone-800">
        {/* Profile Photo Placeholder */}
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-stone-200 to-stone-300 dark:from-stone-700 dark:to-stone-800 flex items-center justify-center">
          <User size={40} className="text-stone-500 dark:text-stone-400" />
        </div>
        
        {/* Name & Username */}
        <div className="text-center">
          <h1 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-1">
            Tarik Azzouzi
          </h1>
          <a
            href="https://github.com/CodingTarik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            @CodingTarik
          </a>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="border-b border-stone-200 dark:border-stone-800">
        {tabs.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`w-full px-6 py-3 text-left font-medium transition-all ${
                selectedTab === tab.id
                  ? 'bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 border-l-4 border-stone-900 dark:border-stone-100'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800/50'
              }`}
            >
              <div className="flex items-center gap-2">
                {Icon && <Icon size={18} />}
                <span>{tab.label}</span>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Main Content Area - Empty, content shows on the right */}
      <div className="flex-1"></div>

      {/* Bottom Section - Go to LearnBuddy, Buy Me a Coffee, Theme Toggle & Social */}
      <div className="p-6 border-t border-stone-200 dark:border-stone-800 space-y-3">
        {/* Go to LearnBuddy Button */}
        {onBackToLearnBuddy && (
          <button
            onClick={onBackToLearnBuddy}
            className="w-full bg-gradient-to-r from-teal-500 to-orange-500 text-white rounded-lg shadow-lg p-3 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 font-semibold"
          >
            <BookOpen size={18} />
            <span>Go to LearnBuddy</span>
          </button>
        )}

        {/* Buy Me a Coffee Button */}
        <a
          href="https://www.buymeacoffee.com/yourname" // TODO: Deine Buy Me a Coffee URL
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-md p-3 hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 font-semibold"
        >
          <Coffee size={18} />
          <span>Buy Me a Coffee</span>
        </a>

        {/* RSS Feed Button */}
        <button
          onClick={() => {
            downloadRSSFeed();
            alert('RSS Feed wurde heruntergeladen!');
          }}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-all text-sm font-medium text-orange-700 dark:text-orange-300"
        >
          <Rss size={16} />
          <span>RSS Feed</span>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all text-sm font-medium text-stone-700 dark:text-stone-300"
        >
          {isDark ? (
            <>
              <Sun size={16} className="text-amber-500" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon size={16} className="text-stone-600" />
              <span>Dark Mode</span>
            </>
          )}
        </button>

        {/* Social Media Links */}
        <div className="grid grid-cols-3 gap-2">
          {socialLinks.map(link => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center p-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 transition-all ${link.color}`}
                title={link.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
      </div>
    </>
  );
}

