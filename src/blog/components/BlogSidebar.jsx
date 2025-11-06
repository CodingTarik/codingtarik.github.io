import React from 'react';
import { Mail, Github, Linkedin, MessageCircle, FileText, Calendar, BookOpen, Sun, Moon, Search, Tag, Home } from 'lucide-react';
import { getRecentPosts, getAllCategories, formatDate } from '../utils/blogUtils';
import { useTheme } from '../../learnbuddy/context/ThemeContext';

export default function BlogSidebar({ 
  onPostClick, 
  onBackToLearnBuddy, 
  onCategorySelect,
  selectedCategory,
  onHomeClick,
  searchQuery,
  onSearchChange 
}) {
  const { isDark, toggleTheme } = useTheme();
  const recentPosts = getRecentPosts(5);
  const categories = getAllCategories();

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/yourusername', // TODO: Anpassen
      color: 'hover:text-stone-800 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile', // TODO: Anpassen
      color: 'hover:text-blue-600'
    },
    {
      icon: MessageCircle,
      label: 'Discord',
      url: 'https://discord.com/users/yourid', // TODO: Anpassen
      color: 'hover:text-indigo-500'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:your.email@example.com', // TODO: Anpassen
      color: 'hover:text-red-500'
    }
  ];

  return (
    <div className="fixed left-0 top-0 bottom-0 w-80 bg-white dark:bg-stone-900 border-r border-stone-200 dark:border-stone-800 overflow-y-auto">
      <div className="p-6 space-y-6">
        {/* Blog Header */}
        <div>
          <button
            onClick={onHomeClick}
            className="group mb-4"
          >
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              Tarik's Blog
            </h1>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
              Gedanken & Projekte
            </p>
          </button>

          {/* Theme Toggle */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all text-sm font-medium text-stone-700 dark:text-stone-300"
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
          </div>
        </div>

        {/* Back to LearnBuddy Button */}
        {onBackToLearnBuddy && (
          <button
            onClick={onBackToLearnBuddy}
            className="w-full bg-gradient-to-r from-teal-500 to-orange-500 text-white rounded-xl shadow-lg p-4 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 font-bold"
          >
            <BookOpen size={20} />
            <span>Go to LearnBuddy</span>
          </button>
        )}

        {/* Search */}
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Suche..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm text-stone-800 dark:text-stone-100"
          />
        </div>

        {/* Categories */}
        {categories.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-stone-800 dark:text-stone-100 mb-3 flex items-center gap-2">
              <Tag size={16} />
              Kategorien
            </h3>
            <div className="space-y-1">
              <button
                onClick={() => onCategorySelect(null)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === null
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
              >
                Alle Beiträge
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => onCategorySelect(category)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                      : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Recent Posts */}
        <div>
          <h3 className="text-sm font-bold text-stone-800 dark:text-stone-100 mb-3 flex items-center gap-2">
            <FileText size={16} />
            Neueste Beiträge
          </h3>
          <div className="space-y-3">
            {recentPosts.map(post => (
              <button
                key={post.id}
                onClick={() => onPostClick(post.id)}
                className="w-full text-left group"
              >
                <div className="text-sm font-medium text-stone-800 dark:text-stone-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                  {post.title}
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400 mt-1 flex items-center gap-1">
                  <Calendar size={12} />
                  {formatDate(post.date)}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* About / CV */}
        <div className="pt-6 border-t border-stone-200 dark:border-stone-800">
          <h3 className="text-sm font-bold text-stone-800 dark:text-stone-100 mb-3">
            Über mich
          </h3>
          <div className="text-sm text-stone-600 dark:text-stone-400 space-y-3">
            <p>
              Hi! Ich bin <strong className="text-stone-800 dark:text-stone-200">Tarik</strong>, 
              ein Entwickler mit Leidenschaft für Lernen und Technologie.
            </p>
            
            {/* CV/Resume Link */}
            <a
              href="/path/to/your/cv.pdf" // TODO: CV-Pfad anpassen
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline font-medium"
            >
              <FileText size={16} />
              Lebenslauf (PDF)
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="pt-6 border-t border-stone-200 dark:border-stone-800">
          <h3 className="text-sm font-bold text-stone-800 dark:text-stone-100 mb-3">
            Social Media
          </h3>
          <div className="space-y-2">
            {socialLinks.map(link => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-stone-600 dark:text-stone-300 transition-all ${link.color} hover:bg-stone-100 dark:hover:bg-stone-800`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

