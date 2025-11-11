import React from 'react';
import { Mail, Github, Linkedin, MessageCircle, FileText, Calendar, BookOpen } from 'lucide-react';
import { getRecentPosts, formatDate } from '../utils/blogUtils';

export default function Sidebar({ onPostClick, onBackToLearnBuddy }) {
  const recentPosts = getRecentPosts(5);

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/yourusername', // TODO: Hier deine GitHub URL einfügen
      color: 'hover:text-stone-800 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile', // TODO: Hier deine LinkedIn URL einfügen
      color: 'hover:text-blue-600'
    },
    {
      icon: MessageCircle,
      label: 'Discord',
      url: 'https://discord.com/users/yourid', // TODO: Hier deine Discord URL einfügen
      color: 'hover:text-indigo-500'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:BlogCodingTarik@web.de', // TODO: Hier deine Email einfügen
      color: 'hover:text-red-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Back to LearnBuddy Button */}
      {onBackToLearnBuddy && (
        <button
          onClick={onBackToLearnBuddy}
          className="w-full bg-gradient-to-r from-teal-500 to-orange-500 text-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all flex items-center justify-center gap-2 font-semibold"
        >
          <BookOpen size={20} />
          <span>Go to LearnBuddy</span>
        </button>
      )}

      {/* Recent Posts */}
      <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2">
          <FileText size={20} />
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
      <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-4">
          Über mich
        </h3>
        <div className="text-sm text-stone-600 dark:text-stone-400 space-y-3">
          <p>
            Hi! Ich bin <strong className="text-stone-800 dark:text-stone-200">Tarik</strong>, 
            ein Entwickler mit Leidenschaft für Lernen und Technologie.
          </p>
          <p>
            Ich entwickle Apps und Tools, die Menschen helfen, neue Skills zu lernen und ihre Ziele zu erreichen.
          </p>
          
          {/* CV/Resume Link */}
          <a
            href="/path/to/your/cv.pdf" // TODO: Hier Pfad zu deinem CV einfügen
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline font-medium"
          >
            <FileText size={16} />
            Lebenslauf ansehen (PDF)
          </a>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-4">
          Kontakt & Social Media
        </h3>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map(link => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 bg-stone-100 dark:bg-stone-700 rounded-lg text-stone-600 dark:text-stone-300 transition-all ${link.color}`}
                title={link.label}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Categories could be added here in the future */}
    </div>
  );
}

