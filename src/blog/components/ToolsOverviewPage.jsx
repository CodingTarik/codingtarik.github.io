import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, User, Gamepad2, Wrench, ArrowRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export default function ToolsOverviewPage() {
  const tools = [
    {
      id: 'learnbuddy',
      title: 'LearnBuddy',
      description: 'Your personal learning companion with multiple skill buddies for various topics',
      icon: BookOpen,
      gradient: 'from-purple-600 to-blue-600',
      link: '#/learnbuddy/boulder/home',
      category: 'Learning'
    },
    {
      id: 'cv',
      title: 'CV / Resume',
      description: 'Professional curriculum vitae and portfolio overview',
      icon: User,
      gradient: 'from-blue-600 to-cyan-600',
      link: '#/cv',
      category: 'Professional'
    },
    {
      id: 'doodledash',
      title: 'DoodleDash',
      description: 'Draw and guess with friends! New: Avatars, Chat, Fill Tool & More!',
      icon: Gamepad2,
      gradient: 'from-pink-600 to-purple-600',
      link: '#/games/doodledash',
      category: 'Games',
      badge: 'Update'
    }
  ];

  const categories = [...new Set(tools.map(tool => tool.category))];

  return (
    <div className="min-h-screen relative">
      {/* Particle Background */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full mb-6"
          >
            <Sparkles size={16} className="text-teal-600 dark:text-teal-400" />
            <span className="text-sm font-medium text-teal-700 dark:text-teal-300">Tools & Games</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Explore My Tools
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A collection of useful tools, learning platforms, and games to help you learn, work, and have fun
          </p>
        </motion.div>

        {/* Tools Grid by Category */}
        {categories.map((category, categoryIndex) => (
          <div key={category} className="mb-12">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + categoryIndex * 0.1 }}
              className="text-2xl font-bold text-text mb-6 flex items-center gap-2"
            >
              {category === 'Games' && <Gamepad2 size={24} className="text-pink-600" />}
              {category === 'Learning' && <BookOpen size={24} className="text-purple-600" />}
              {category === 'Professional' && <User size={24} className="text-blue-600" />}
              {category === 'Tools' && <Wrench size={24} className="text-teal-600" />}
              {category}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools
                .filter(tool => tool.category === category)
                .map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <motion.a
                      key={tool.id}
                      href={tool.link}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + categoryIndex * 0.1 + index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                      {/* Gradient Background on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      
                      {/* Badge */}
                      {tool.badge && (
                        <div className="absolute top-4 right-4">
                          <span className="px-2 py-1 bg-gradient-to-r from-pink-600 to-rose-600 text-white text-xs font-bold rounded-full">
                            {tool.badge}
                          </span>
                        </div>
                      )}

                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={28} className="text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-text mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all">
                        {tool.title}
                      </h3>
                      <p className="text-muted text-sm mb-4 line-clamp-2">
                        {tool.description}
                      </p>

                      {/* Arrow */}
                      <div className="flex items-center text-teal-600 dark:text-teal-400 font-medium text-sm group-hover:gap-2 gap-1 transition-all">
                        <span>Explore</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.a>
                  );
                })}
            </div>
          </div>
        ))}

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
            <Wrench size={48} className="mx-auto mb-4 text-muted" />
            <h3 className="text-2xl font-bold text-text mb-2">
              More Coming Soon
            </h3>
            <p className="text-muted">
              I'm constantly working on new tools and games. Stay tuned for updates!
            </p>
          </div>
        </motion.div>

        {/* Back to Blog Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <a
            href="#/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl text-text hover:bg-border transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Back to Blog</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

