import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, Palette, Target, BookOpen, Eye, ArrowLeft, Trophy, Sparkles } from 'lucide-react';

// Games
import ReactionTime from './games/ReactionTime';
import StroopTest from './games/StroopTest';
import NBack from './games/NBack';
import AimTrainer from './games/AimTrainer';
import SpeedReading from './games/SpeedReading';
import PeripheralVision from './games/PeripheralVision';

const GAMES = [
  {
    id: 'reaction',
    title: 'Reaction Time',
    description: 'Test your visual reaction speed. Based on cognitive psychology research on simple reaction time tasks.',
    icon: Zap,
    gradient: 'from-yellow-500 to-orange-600',
    bgGlow: 'bg-yellow-500/10',
    component: ReactionTime,
    science: 'Avg human: 200-250ms',
    category: 'Speed',
  },
  {
    id: 'stroop',
    title: 'Stroop Test',
    description: 'Classic psychological test. Name the COLOR, not the word. Measures cognitive interference and executive function.',
    icon: Palette,
    gradient: 'from-purple-500 to-pink-600',
    bgGlow: 'bg-purple-500/10',
    component: StroopTest,
    science: 'J.R. Stroop, 1935',
    category: 'Focus',
  },
  {
    id: 'nback',
    title: 'N-Back',
    description: 'The gold standard working memory task. Match positions from N steps ago. Used in neuroscience research worldwide.',
    icon: Brain,
    gradient: 'from-indigo-500 to-blue-600',
    bgGlow: 'bg-indigo-500/10',
    component: NBack,
    science: 'Jaeggi et al., 2008',
    category: 'Memory',
  },
  {
    id: 'aim',
    title: 'Aim Trainer',
    description: 'Train hand-eye coordination and motor precision. Based on Fitts\' Law — a fundamental model of human motor performance.',
    icon: Target,
    gradient: 'from-red-500 to-rose-600',
    bgGlow: 'bg-red-500/10',
    component: AimTrainer,
    science: 'Fitts\' Law, 1954',
    category: 'Motor',
  },
  {
    id: 'speed-reading',
    title: 'Speed Reading',
    description: 'RSVP-based speed reading trainer with comprehension testing. Measure your effective words per minute.',
    icon: BookOpen,
    gradient: 'from-emerald-500 to-teal-600',
    bgGlow: 'bg-emerald-500/10',
    component: SpeedReading,
    science: 'Rapid Serial Visual Presentation',
    category: 'Reading',
  },
  {
    id: 'peripheral',
    title: 'Peripheral Vision',
    description: 'Test how well you perceive stimuli outside your central focus. Used in sports vision research and aviation training.',
    icon: Eye,
    gradient: 'from-cyan-500 to-blue-600',
    bgGlow: 'bg-cyan-500/10',
    component: PeripheralVision,
    science: 'Sports Vision Research',
    category: 'Vision',
  },
];

export default function BrainTraining() {
  const [activeGame, setActiveGame] = useState(null);

  if (activeGame) {
    const game = GAMES.find(g => g.id === activeGame);
    const GameComponent = game.component;
    return <GameComponent onBack={() => setActiveGame(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/3 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 md:py-16">
        {/* Back Button */}
        <motion.a
          href="/tools"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          <span>Back to Tools</span>
        </motion.a>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full mb-6"
          >
            <Sparkles size={16} className="text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">Science-Based Training</span>
          </motion.div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <Brain size={48} className="text-indigo-400" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Brain Training
            </h1>
          </div>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            6 scientifically-backed cognitive training exercises. Test reaction time, working memory, 
            focus, motor skills, reading speed, and peripheral vision.
          </p>
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {GAMES.map((game, index) => {
            const Icon = game.icon;
            return (
              <motion.button
                key={game.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveGame(game.id)}
                className="group relative bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-6 text-left hover:border-slate-600 transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 ${game.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs font-medium rounded-full">
                    {game.category}
                  </span>
                </div>

                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${game.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  <Icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                  {game.title}
                </h3>
                <p className="relative text-sm text-slate-400 mb-3 line-clamp-2">
                  {game.description}
                </p>

                {/* Science tag */}
                <div className="relative flex items-center gap-1 text-xs text-slate-500">
                  <Sparkles size={12} />
                  <span>{game.science}</span>
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 md:mt-16 bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl p-6 md:p-8"
        >
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Trophy size={20} className="text-yellow-400" />
            About Brain Training
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-400">
            <div>
              <p className="mb-3">
                Each exercise targets a specific cognitive domain backed by peer-reviewed research. 
                The <strong className="text-slate-300">Stroop Test</strong> (1935) is one of the most replicated experiments in psychology, 
                measuring cognitive interference and executive control.
              </p>
              <p>
                The <strong className="text-slate-300">N-Back task</strong> is the gold-standard working memory assessment used in 
                cognitive neuroscience labs worldwide. Higher N-levels demand greater working memory capacity.
              </p>
            </div>
            <div>
              <p className="mb-3">
                <strong className="text-slate-300">Reaction time</strong> is a fundamental measure of cognitive processing speed, 
                with the average human visual reaction time being 200-250ms.
              </p>
              <p>
                All your scores are saved locally in your browser. Track your progress over time and 
                challenge yourself to improve across all six domains.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
