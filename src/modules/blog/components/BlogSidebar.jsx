import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Github, Linkedin, FileText, Sun, Moon, 
  FolderOpen, Code, Coffee, Box, Target, X, Rss, Search, Wrench 
} from 'lucide-react';
import { useTheme } from '../../learnbuddy/context/ThemeContext';
import { generateRSSFeed } from '../utils/rssUtils';
import { trackSocialClick, trackCoffeeClick, trackRSSClick } from './Analytics';
import blogConfig from '../config';
import profileImage from '../../../assets/profile.jpeg';

// Custom Discord Icon
const DiscordIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

export default function BlogSidebar({
  selectedTab,
  onTabChange,
  isOpen,
  onClose
}) {
  const { isDark, toggleTheme } = useTheme();

  const tabs = [
    { id: 'posts', label: 'Posts', icon: FileText },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'categories', label: 'Categories', icon: FolderOpen },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'tools', label: 'Tools', icon: Wrench }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: blogConfig.social.github },
    { icon: Linkedin, label: 'LinkedIn', url: blogConfig.social.linkedin },
    { icon: Box, label: 'HackTheBox', url: blogConfig.social.hackthebox },
    { icon: Target, label: 'TryHackMe', url: blogConfig.social.tryhackme },
    { icon: DiscordIcon, label: 'Discord', url: blogConfig.social.discord },
    { icon: Mail, label: 'Email', url: blogConfig.social.email }
  ];

  const avatarCfg = blogConfig.avatar || {
    sizePx: 200,
    zoom: 1.15,
    offsetX: '50%',
    offsetY: '25%',
    borderWidthPx: 4
  };

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

      {/* Sidebar Container */}
      <aside
        className={`
          fixed left-0 top-0 bottom-0 w-[85vw] max-w-72 bg-card border-r border-border flex flex-col z-50
          transition-transform duration-300 ease-in-out shadow-xl lg:shadow-none
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Mobile Close Button */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-3.5 right-3.5 p-1.5 rounded-lg hover:bg-border/60 text-muted hover:text-text transition-colors"
          title="Close sidebar"
        >
          <X size={20} />
        </button>

        {/* Profile Header */}
        <div className="p-5 border-b border-border text-center">
          <motion.div
            className="mx-auto mb-4 rounded-full bg-gradient-to-br from-primary via-secondary to-primary shadow-xl flex items-center justify-center"
            style={{
              width: `${avatarCfg.sizePx}px`,
              height: `${avatarCfg.sizePx}px`,
              padding: `${avatarCfg.borderWidthPx}px`,
              maxWidth: '85%'
            }}
            whileHover={{ scale: 1.04, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-card border border-background">
              <img
                src={profileImage}
                alt={blogConfig.author.name}
                className="w-full h-full object-cover transition-transform duration-300"
                style={{
                  transform: `scale(${avatarCfg.zoom})`,
                  objectPosition: `${avatarCfg.offsetX} ${avatarCfg.offsetY}`
                }}
              />
            </div>
          </motion.div>

          <h2 className="text-lg font-bold bg-gradient-to-r from-text via-primary to-secondary bg-clip-text text-transparent">
            Tarik Azzouzi
          </h2>
          <a
            href={blogConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-primary transition-colors inline-block mt-0.5 font-medium"
          >
            @{blogConfig.author.github}
          </a>
        </div>

        {/* Main Navigation */}
        <nav className="p-3 space-y-1 flex-grow">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  onTabChange(tab.id);
                  onClose();
                }}
                className={`
                  w-full px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center justify-between group cursor-pointer
                  ${isActive
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'text-muted hover:text-text hover:bg-border/40'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className={isActive ? 'text-white' : 'group-hover:text-primary transition-colors'} />
                  <span>{tab.label}</span>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Streamlined Footer Toolbar */}
        <div className="p-4 border-t border-border space-y-3 bg-background/40">
          {/* Action Row: Theme, RSS, Coffee */}
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center p-2 rounded-xl bg-card border border-border text-muted hover:text-text hover:border-primary transition-all shadow-sm cursor-pointer"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-indigo-500" />}
            </button>

            <button
              onClick={() => {
                trackRSSClick();
                const rssFeed = generateRSSFeed();
                const blob = new Blob([rssFeed], { type: 'application/rss+xml' });
                const url = URL.createObjectURL(blob);
                window.open(url, '_blank');
                setTimeout(() => URL.revokeObjectURL(url), 100);
              }}
              className="flex items-center justify-center p-2 rounded-xl bg-card border border-border text-muted hover:text-orange-500 hover:border-orange-500/50 transition-all shadow-sm cursor-pointer"
              title="RSS Feed"
            >
              <Rss size={16} />
            </button>

            <a
              href={blogConfig.support.buyMeCoffee}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCoffeeClick()}
              className="flex items-center justify-center p-2 rounded-xl bg-card border border-border text-muted hover:text-amber-500 hover:border-amber-500/50 transition-all shadow-sm"
              title="Buy Me a Coffee"
            >
              <Coffee size={16} />
            </a>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center justify-between px-1 pt-1">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick(link.label, link.url)}
                  className="p-1.5 text-muted hover:text-primary hover:scale-110 transition-all"
                  title={link.label}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
