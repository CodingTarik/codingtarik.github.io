import { ChefHat, ShoppingCart, BookOpen, Calculator, Timer, Calendar, Map } from 'lucide-react';
import CookHomePage from './components/CookHomePage';
import RecipeBook from './components/RecipeBook';
import ShoppingList from './components/ShoppingList';
import KitchenConverter from './components/KitchenConverter';
import KitchenTimer from './components/KitchenTimer';
import MealPlanner from './components/MealPlanner';
import CookSkillPath from './components/CookSkillPath';
import { lessons, getLessonById, getNextLesson } from './data/lessons';

export const cookBuddyConfig = {
  id: 'cook',
  name: {
    en: 'CookBuddy',
    de: 'CookBuddy'
  },
  icon: ChefHat,
  theme: {
    primary: 'amber',
    primaryColor: '#f59e0b',
    accent: 'yellow',
    background: 'orange'
  },
  homePage: CookHomePage,
  lessons: {
    data: lessons,
    getLessonById: getLessonById,
    getNextLesson: getNextLesson
  },
  
  sharedTabs: ['home', 'lessons'],
  
  customTabs: [
    {
      id: 'path',
      name: { en: 'Skill Path', de: 'Skill Path' },
      icon: Map,
      component: CookSkillPath
    },
    {
      id: 'recipes',
      name: { en: 'Recipes', de: 'Rezepte' },
      icon: BookOpen,
      component: RecipeBook
    },
    {
      id: 'mealplan',
      name: { en: 'Meal Plan', de: 'Wochenplan' },
      icon: Calendar,
      component: MealPlanner
    },
    {
      id: 'shopping',
      name: { en: 'Shopping', de: 'Einkauf' },
      icon: ShoppingCart,
      component: ShoppingList
    },
    {
      id: 'timer',
      name: { en: 'Timer', de: 'Timer' },
      icon: Timer,
      component: KitchenTimer
    },
    {
      id: 'converter',
      name: { en: 'Converter', de: 'Umrechner' },
      icon: Calculator,
      component: KitchenConverter
    }
  ],
  
  planItemType: {
    type: 'recipe',
    fields: {
      recipeName: 'string',
      ingredients: 'array',
      steps: 'array',
      cookingTime: 'number'
    }
  },
  
  planTranslations: {
    en: {
      title: 'My Meal Plan',
      emptyMessage: 'Save recipes from lessons to plan your meals!',
      emptyTip: '💡 Tip: Create your weekly meal plan and shopping list here.'
    },
    de: {
      title: 'Mein Essensplan',
      emptyMessage: 'Speichere Rezepte aus den Lektionen für deine Mahlzeiten!',
      emptyTip: '💡 Tipp: Erstelle hier deinen wöchentlichen Essensplan und Einkaufsliste.'
    }
  }
};
