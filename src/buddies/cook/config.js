import { ChefHat, ShoppingCart, BookOpen } from 'lucide-react';

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
  
  sharedTabs: ['home', 'lessons', 'plan'],
  
  customTabs: [
    {
      id: 'recipes',
      name: { en: 'Recipes', de: 'Rezepte' },
      icon: BookOpen,
      component: 'RecipeBook'
    },
    {
      id: 'shopping',
      name: { en: 'Shopping List', de: 'Einkaufsliste' },
      icon: ShoppingCart,
      component: 'ShoppingList'
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

