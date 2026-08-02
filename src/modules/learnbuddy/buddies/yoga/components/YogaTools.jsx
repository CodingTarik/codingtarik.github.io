import React, { useState } from 'react';
import { Clock, Wind, BookOpen, Layers, Sparkles } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import YogaSessionTimer from './YogaSessionTimer';
import BreathingGuide from './BreathingGuide';
import PoseLibrary from './PoseLibrary';
import SequenceBuilder from './SequenceBuilder';

/**
 * YogaTools - Main container component that provides navigation between different yoga tools
 */
const YogaTools = () => {
  const { language } = useLanguage();
  const [activeTool, setActiveTool] = useState(null);

  const tools = [
    {
      id: 'session-timer',
      name: language === 'en' ? 'Session Timer' : 'Session-Timer',
      nameDe: 'Session-Timer',
      description: language === 'en' 
        ? 'Guided yoga sessions with automatic pose transitions'
        : 'Geführte Yoga-Sessions mit automatischen Pose-Übergängen',
      icon: Clock,
      color: 'purple',
      component: YogaSessionTimer
    },
    {
      id: 'breathing',
      name: language === 'en' ? 'Breathing Guide' : 'Atemführer',
      nameDe: 'Atemführer',
      description: language === 'en'
        ? 'Visual breathing guide for pranayama practice'
        : 'Visueller Atemführer für Pranayama-Praxis',
      icon: Wind,
      color: 'blue',
      component: BreathingGuide
    },
    {
      id: 'poses',
      name: language === 'en' ? 'Pose Library' : 'Posen-Bibliothek',
      nameDe: 'Posen-Bibliothek',
      description: language === 'en'
        ? 'Comprehensive library of yoga poses with instructions'
        : 'Umfassende Bibliothek von Yoga-Posen mit Anleitungen',
      icon: BookOpen,
      color: 'green',
      component: PoseLibrary
    },
    {
      id: 'sequence-builder',
      name: language === 'en' ? 'Sequence Builder' : 'Sequenz-Builder',
      nameDe: 'Sequenz-Builder',
      description: language === 'en'
        ? 'Build and customize your own yoga sequences'
        : 'Erstelle und passe deine eigenen Yoga-Sequenzen an',
      icon: Layers,
      color: 'pink',
      component: SequenceBuilder
    }
  ];

  const ActiveComponent = activeTool ? tools.find(t => t.id === activeTool)?.component : null;

  if (ActiveComponent) {
    return (
      <div>
        <button
          onClick={() => setActiveTool(null)}
          className="mb-6 text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-2 font-medium"
        >
          ← {language === 'en' ? 'Back to Tools' : 'Zurück zu Tools'}
        </button>
        <ActiveComponent />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center justify-center gap-3">
          <Sparkles className="w-10 h-10 text-purple-500" />
          {language === 'en' ? 'Yoga Tools' : 'Yoga-Tools'}
        </h1>
        <p className="text-stone-600 dark:text-stone-400 text-lg">
          {language === 'en'
            ? 'Choose a tool to enhance your yoga practice'
            : 'Wähle ein Tool, um deine Yoga-Praxis zu verbessern'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className="group bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border-2 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-600 transition-all transform hover:-translate-y-2 hover:shadow-xl text-left"
            >
              <div className={`w-16 h-16 rounded-2xl bg-${tool.color}-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-2">
                {language === 'de' && tool.nameDe ? tool.nameDe : tool.name}
              </h3>
              <p className="text-stone-600 dark:text-stone-400">
                {tool.description}
              </p>
              <div className="mt-4 text-purple-600 dark:text-purple-400 font-medium group-hover:underline">
                {language === 'en' ? 'Open →' : 'Öffnen →'}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default YogaTools;


