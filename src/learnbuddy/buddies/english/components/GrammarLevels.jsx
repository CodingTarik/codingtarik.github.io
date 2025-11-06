import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

function GrammarLevels() {
  const { language } = useLanguage();

  const levels = [
    { id: 'a1', name: 'A1', title: language === 'en' ? 'Beginner' : 'Anfänger', color: 'green' },
    { id: 'a2', name: 'A2', title: language === 'en' ? 'Elementary' : 'Grundlagen', color: 'lime' },
    { id: 'b1', name: 'B1', title: language === 'en' ? 'Intermediate' : 'Mittelstufe', color: 'yellow' },
    { id: 'b2', name: 'B2', title: language === 'en' ? 'Upper Intermediate' : 'Fortgeschritten', color: 'orange' },
    { id: 'c1', name: 'C1', title: language === 'en' ? 'Advanced' : 'Sehr Fortgeschritten', color: 'red' },
    { id: 'c2', name: 'C2', title: language === 'en' ? 'Proficiency' : 'Experte', color: 'purple' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
      <div className="text-center mb-12">
        <GraduationCap size={64} className="mx-auto mb-4 text-rose-500" />
        <h1 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">
          {language === 'en' ? 'English Grammar by Level' : 'Englische Grammatik nach Level'}
        </h1>
        <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          {language === 'en'
            ? 'Master English grammar step by step from beginner to advanced level.'
            : 'Meistere englische Grammatik Schritt für Schritt vom Anfänger bis zum Experten-Level.'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level) => (
          <div
            key={level.id}
            className="group bg-white dark:bg-stone-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-stone-200 dark:border-stone-700 p-6 cursor-pointer"
          >
            <div className={`w-16 h-16 rounded-full bg-${level.color}-100 dark:bg-${level.color}-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <span className={`text-2xl font-bold text-${level.color}-600 dark:text-${level.color}-400`}>
                {level.name}
              </span>
            </div>
            <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">
              {level.title}
            </h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm mb-4">
              {language === 'en' ? 'Grammar topics and exercises' : 'Grammatik-Themen und Übungen'}
            </p>
            <div className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
              <BookOpen size={16} />
              <span>{language === 'en' ? 'Coming soon' : 'Bald verfügbar'}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 rounded-2xl p-8 text-center border border-rose-200 dark:border-rose-800">
        <Award size={48} className="mx-auto mb-4 text-rose-500" />
        <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-2">
          {language === 'en' ? 'Track Your Progress' : 'Verfolge deinen Fortschritt'}
        </h3>
        <p className="text-stone-600 dark:text-stone-400">
          {language === 'en'
            ? 'Complete exercises and track your grammar mastery across all levels.'
            : 'Absolviere Übungen und verfolge deine Grammatik-Kenntnisse über alle Level.'}
        </p>
      </div>
    </div>
  );
}

export default GrammarLevels;

