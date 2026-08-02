import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, User, Gamepad2, Wrench, ArrowRight, Activity, FileText, Music, Layers, Globe, MonitorSmartphone, Heart, Edit3, Code, ArrowLeftRight, Crosshair, Castle, Brain, Headphones, Shield } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { navigate } from '../../utils/navigation';

export default function ToolsOverviewPage() {
  const tools = [
    {
      id: 'learnbuddy',
      title: 'LearnBuddy',
      description: 'Your personal learning companion with multiple skill buddies for various topics',
      icon: BookOpen,
      gradient: 'from-purple-600 to-blue-600',
      link: '/learnbuddy/boulder/home',
      category: 'Learning'
    },
    {
      id: 'cv',
      title: 'CV / Resume',
      description: 'Professional curriculum vitae and portfolio overview',
      icon: User,
      gradient: 'from-blue-600 to-cyan-600',
      link: '/cv',
      category: 'Professional'
    },
    {
      id: 'logic-test',
      title: 'A.O.N. Assessment',
      description: 'Simulation of logical reasoning assessments including deductive reasoning, working memory, and more.',
      icon: User, // Using User icon as shield/brain are not imported, but User is already imported and used for CV
      gradient: 'from-indigo-600 to-blue-600',
      link: '/tools/logic-test',
      category: 'Professional'
    },
    {
      id: 'focus-detector',
      title: 'Focus Detector',
      description: 'Visual utility that tracks window focus and visibility state in real-time.',
      icon: Activity,
      gradient: 'from-emerald-600 to-teal-600',
      link: '/tools/focus-detector',
      category: 'Tools',
    },
    {
      id: 'pdf-tools',
      title: 'PDF Tools',
      description: 'Merge, split, compress, watermark and more — 100% private, runs in your browser.',
      icon: FileText,
      gradient: 'from-rose-600 to-orange-600',
      link: '/tools/pdf-tools',
      category: 'Tools',
      badge: 'New'
    },
    {
      id: 'piano-studio',
      title: 'Piano Studio',
      description: 'Professional piano practice tool with MIDI support, falling notes, multiplayer sessions & song planner.',
      icon: Music,
      gradient: 'from-indigo-600 to-violet-600',
      link: '/tools/piano',
      category: 'Hobby',
      badge: 'New'
    },
    {
      id: 'flashmaster',
      title: 'FlashMaster',
      description: 'Powerful flashcard app with spaced repetition, AI card generation, Anki import/export, voice study & more.',
      icon: Layers,
      gradient: 'from-indigo-500 to-purple-600',
      link: '/tools/flashmaster',
      category: 'Learning',
      badge: 'New'
    },
    {
      id: 'travel-hub',
      title: 'Travel Hub',
      description: 'Reise-Toolkit: Budget-Tracker, Zeitzonen, Visa-Checker, Tagebuch, Notfall-Info, Umrechner & Länder-Guides.',
      icon: Globe,
      gradient: 'from-teal-500 to-cyan-500',
      link: '/tools/travel',
      category: 'Tools',
      badge: 'New'
    },
    {
      id: 'device-test',
      title: 'Mic & Webcam Test',
      description: 'Test your microphone and webcam with real-time visualizations — 100% local, nothing is recorded or sent.',
      icon: MonitorSmartphone,
      gradient: 'from-sky-500 to-indigo-600',
      link: '/tools/device-test',
      category: 'Tools',
      badge: 'New'
    },
    {
      id: 'prompt-library',
      title: 'AI Prompt Library',
      description: 'Save, organize & reuse your AI prompts. Variables, tags, categories, import/export — all local in your browser.',
      icon: Sparkles,
      gradient: 'from-violet-500 to-purple-600',
      link: '/tools/prompt-library',
      category: 'Developer',
      badge: 'New'
    },
    {
      id: 'data-converter',
      title: 'Data Converter',
      description: 'Convert between JSON, YAML & TOML instantly. Auto-detection, pretty-print, minify — 100% client-side.',
      icon: ArrowLeftRight,
      gradient: 'from-teal-500 to-cyan-600',
      link: '/tools/data-converter',
      category: 'Developer',
      badge: 'New'
    },
    {
      id: 'markdown-editor',
      title: 'MarkdownPad',
      description: 'Lokale HedgeDoc-Alternative: Markdown-Editor mit Live-Preview, LaTeX, Mermaid, Bild-Paste, Dokumenten-Bibliothek & Druck.',
      icon: Edit3,
      gradient: 'from-violet-500 to-indigo-600',
      link: '/tools/markdown',
      category: 'Tools',
      badge: 'New'
    },
    {
      id: 'pubg-tierlist',
      title: 'PUBG Weapon Tier List',
      description: 'All PUBG weapons ranked: S- to D-Tier with Damage, Fire Rate, Range & Stability stats.',
      icon: Crosshair,
      gradient: 'from-orange-500 to-red-600',
      link: '/tools/pubg-tierlist',
      category: 'Gaming',
      badge: 'New'
    },
    {
      id: 'aoe-strategy',
      title: 'AoE II Strategy Guide',
      description: 'Build Orders & strategies for every Age of Empires II civilization. Dark Age to Castle Age step-by-step.',
      icon: Castle,
      gradient: 'from-amber-500 to-yellow-600',
      link: '/tools/aoe-strategy',
      category: 'Gaming',
      badge: 'New'
    },
    {
      id: 'brain-training',
      title: 'Brain Training',
      description: '6 science-based cognitive exercises: Reaction Time, Stroop Test, N-Back, Aim Trainer, Speed Reading & Peripheral Vision.',
      icon: Brain,
      gradient: 'from-indigo-500 to-purple-600',
      link: '/tools/brain-training',
      category: 'Learning',
      badge: 'New'
    },
    {
      id: 'perfect-pitch',
      title: 'Perfect Pitch Trainer',
      description: 'Train your ear to identify musical notes and intervals. Three modes: White Keys, All Keys & Intervals.',
      icon: Headphones,
      gradient: 'from-violet-500 to-pink-600',
      link: '/tools/perfect-pitch',
      category: 'Learning',
      badge: 'New'
    },
    {
      id: 'doodledash',
      title: 'DoodleDash',
      description: 'Draw and guess with friends! New: Avatars, Chat, Fill Tool & More!',
      icon: Gamepad2,
      gradient: 'from-pink-600 to-purple-600',
      link: '/games/doodledash',
      category: 'Games',
      badge: 'Update'
    },
    {
      id: 'maexchen',
      title: 'Mäxchen',
      description: 'Das legendäre Bluff-Würfelspiel! Würfle, bluffe und decke Lügner auf. 4-6 Spieler!',
      icon: Gamepad2,
      gradient: 'from-amber-500 to-orange-600',
      link: '/games/maexchen',
      category: 'Games',
      badge: 'Neu'
    },
    {
      id: 'kniffel',
      title: 'Kniffel',
      description: 'Das Würfel-Klassiker-Spiel! Sammle Punkte mit cleveren Kombinationen. 2-6 Spieler!',
      icon: Gamepad2,
      gradient: 'from-violet-500 to-purple-600',
      link: '/games/kniffel',
      category: 'Games',
      badge: 'Neu'
    },
    {
      id: 'liars-dice',
      title: "Liar's Dice",
      description: 'Bluff your way to victory! Bid, lie, and call out liars in this classic dice game. 2-8 players!',
      icon: Gamepad2,
      gradient: 'from-cyan-500 to-purple-600',
      link: '/games/liars-dice',
      category: 'Games',
      badge: 'New'
    },
    {
      id: 'imposter',
      title: 'Wort-Imposter',
      description: 'Finde den Spion! Jeder bekommt ein Wort — aber der Imposter hat ein anderes. 3-10 Spieler, 1 Gerät!',
      icon: Gamepad2,
      gradient: 'from-red-500 to-orange-600',
      link: '/games/imposter',
      category: 'Games',
      badge: 'Neu'
    },
    {
      id: 'cupcake-chaos',
      title: 'Cupcake Chaos',
      description: 'The chaotic card game! Draw, steal, trap & counter your way to exactly 10 cards. Shout CUPCAKE! to win. 2-6 players!',
      icon: Gamepad2,
      gradient: 'from-fuchsia-500 to-purple-600',
      link: '/games/cupcake-chaos',
      category: 'Games',
      badge: 'New'
    },
    {
      id: 'cybershield',
      title: 'CyberShield',
      description: 'Learn Information Security Management! Defend your organization against cyber threats as a SOC analyst. 30 ISMS scenarios!',
      icon: Shield,
      gradient: 'from-cyan-500 to-emerald-600',
      link: '/games/cybershield',
      category: 'Learning',
      badge: 'New'
    },
    {
      id: 'who-am-i',
      title: 'Who Am I?',
      description: 'The classic guessing game! Get a secret identity, ask yes/no questions, and figure out who you are. 2-12 players!',
      icon: Gamepad2,
      gradient: 'from-amber-500 to-pink-600',
      link: '/games/who-am-i',
      category: 'Games',
      badge: 'New'
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
              {category === 'Developer' && <Code size={24} className="text-violet-600" />}
              {category === 'Hobby' && <Heart size={24} className="text-rose-500" />}
              {category === 'Gaming' && <Crosshair size={24} className="text-orange-500" />}
              {category}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools
                .filter(tool => tool.category === category)
                .map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <motion.div
                      key={tool.id}
                      onClick={() => navigate(tool.link)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + categoryIndex * 0.1 + index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
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
                    </motion.div>
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
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl text-text hover:bg-border transition-all cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back to Blog</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}

