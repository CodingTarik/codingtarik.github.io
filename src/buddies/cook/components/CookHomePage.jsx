import React from 'react';
import { ChefHat, Utensils, BookOpen } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import SupportBanner from '../../../shared/components/SupportBanner';

function CookHomePage({ onStartLesson }) {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-8 rounded-full shadow-2xl">
            <ChefHat size={80} className="text-white" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-stone-800 dark:text-stone-100 mb-4">
          {language === 'en' ? 'Welcome to CookBuddy!' : 'Willkommen bei CookBuddy!'}
        </h1>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          {language === 'en' 
            ? 'Your free companion for learning to cook delicious and healthy meals. Master techniques, discover recipes, and enjoy cooking.' 
            : 'Dein kostenloser Begleiter zum Kochen lernen. Meistere Techniken, entdecke Rezepte und genieße das Kochen.'}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg text-center">
          <BookOpen size={48} className="mx-auto mb-4 text-amber-500" />
          <h3 className="font-bold text-lg mb-2 text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'Recipes' : 'Rezepte'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm">
            {language === 'en' 
              ? 'Step-by-step recipes for every skill level' 
              : 'Schritt-für-Schritt Rezepte für jedes Level'}
          </p>
        </div>
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg text-center">
          <Utensils size={48} className="mx-auto mb-4 text-orange-500" />
          <h3 className="font-bold text-lg mb-2 text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'Techniques' : 'Techniken'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm">
            {language === 'en' 
              ? 'Learn fundamental cooking methods' 
              : 'Lerne grundlegende Koch-Methoden'}
          </p>
        </div>
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg text-center">
          <ChefHat size={48} className="mx-auto mb-4 text-yellow-500" />
          <h3 className="font-bold text-lg mb-2 text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'Meal Planning' : 'Essensplanung'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm">
            {language === 'en' 
              ? 'Organize your weekly meals and shopping' 
              : 'Organisiere deine wöchentlichen Mahlzeiten'}
          </p>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => onStartLesson()}
          className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all transform hover:scale-105"
        >
          {language === 'en' ? '👨‍🍳 Start First Lesson' : '👨‍🍳 Erste Lektion starten'}
        </button>
      </div>

      <div className="mt-16 text-center text-stone-500 dark:text-stone-400 text-sm">
        <p>{language === 'en' ? 'Coming soon: Full cooking lessons and recipes!' : 'Bald verfügbar: Vollständige Koch-Lektionen und Rezepte!'}</p>
      </div>

      {/* Support Banner at the bottom */}
      <div className="mt-16">
        <SupportBanner />
      </div>
    </div>
  );
}

export default CookHomePage;

