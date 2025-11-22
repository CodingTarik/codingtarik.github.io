# How to Add Custom Tabs to a Buddy

This guide explains how to add custom tabs (like RecipeBook, ShoppingList for CookBuddy) to any LearnBuddy module.

## Overview

Custom tabs are buddy-specific features that appear in the bottom navigation. Examples:
- **CookBuddy**: Recipes, Shopping List
- **LifeSkillsBuddy**: Pomodoro Timer, Habit Tracker, Goal Tracker
- **EnglishBuddy**: Vocabulary, Reading, Writing, Speaking, Listening

## Step-by-Step Process

### Step 1: Create the Component

Create your component in the buddy's `components/` folder:

```
src/learnbuddy/buddies/{buddyName}/components/YourComponent.jsx
```

Example for CookBuddy:
```jsx
// src/learnbuddy/buddies/cook/components/RecipeBook.jsx
import React, { useState } from 'react';

const RecipeBook = () => {
  // Your component logic
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2>My Recipe Book</h2>
      {/* Your UI */}
    </div>
  );
};

export default RecipeBook;
```

### Step 2: Update Buddy Config

Edit `src/learnbuddy/buddies/{buddyName}/config.js`:

```javascript
import { ChefHat, ShoppingCart, BookOpen } from 'lucide-react';
import RecipeBook from './components/RecipeBook';
import ShoppingList from './components/ShoppingList';

export const cookBuddyConfig = {
  id: 'cook',
  name: { en: 'CookBuddy', de: 'CookBuddy' },
  icon: ChefHat,
  
  // ... other config ...
  
  customTabs: [
    {
      id: 'recipes',                              // Unique ID for routing
      name: { en: 'Recipes', de: 'Rezepte' },     // Tab name (i18n)
      icon: BookOpen,                             // Lucide icon
      component: RecipeBook                       // Direct component reference
    },
    {
      id: 'shopping',
      name: { en: 'Shopping List', de: 'Einkaufsliste' },
      icon: ShoppingCart,
      component: ShoppingList
    }
  ]
};
```

**Important:** Use direct component references, NOT strings!

### Step 3: Register in App.jsx (CRITICAL!)

This is the step that's easy to forget but absolutely necessary!

#### 3a. Import Components

At the top of `src/App.jsx`, add imports:

```javascript
// Cook-specific components
import RecipeBook from './learnbuddy/buddies/cook/components/RecipeBook';
import ShoppingList from './learnbuddy/buddies/cook/components/ShoppingList';
```

#### 3b. Add to renderCustomTab Function

Find the `renderCustomTab` function (around line 355) and add your buddy's case:

```javascript
const renderCustomTab = (tabId) => {
  if (activeBuddy === 'boulder') {
    // Boulder tabs...
  } else if (activeBuddy === 'english') {
    // English tabs...
  } else if (activeBuddy === 'lifeskills') {
    // LifeSkills tabs...
  } else if (activeBuddy === 'piano') {
    // Piano tabs...
  } else if (activeBuddy === 'cook') {
    // Cook components
    if (tabId === 'recipes') {
      return <RecipeBook />;
    } else if (tabId === 'shopping') {
      return <ShoppingList />;
    }
  }
  
  // Default "Coming Soon" message
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 mt-8">
      <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-12 text-center">
        <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
          {language === 'en' ? 'Coming Soon!' : 'Bald verfügbar!'}
        </h2>
        <p className="text-stone-600 dark:text-stone-400">
          {language === 'en'
            ? 'This feature is currently being developed. Stay tuned!'
            : 'Dieses Feature wird gerade entwickelt. Bleib dran!'}
        </p>
      </div>
    </div>
  );
};
```

## Lessons Structure

If your buddy has lessons, ensure they're structured correctly:

```javascript
// In src/learnbuddy/buddies/{buddyName}/data/lessons.js
export const lessons = [
  {
    id: 'lesson1',
    title: { en: 'Lesson 1', de: 'Lektion 1' },
    category: 'basics',
    content: <div>...</div>
  }
];

export function getLessonById(id) {
  return lessons.find(l => l.id === id);
}

export function getNextLesson(currentId) {
  const idx = lessons.findIndex(l => l.id === currentId);
  return idx >= 0 && idx < lessons.length - 1 ? lessons[idx + 1] : null;
}
```

Then in config.js:

```javascript
import { lessons, getLessonById, getNextLesson } from './data/lessons';

export const cookBuddyConfig = {
  // ...
  lessons: {
    data: lessons,
    getLessonById: getLessonById,
    getNextLesson: getNextLesson
  }
};
```

## Common Mistakes

### ❌ Mistake 1: Using String Component Names
```javascript
// WRONG
customTabs: [
  {
    id: 'recipes',
    component: 'RecipeBook'  // String - will show "Coming Soon"
  }
]
```

```javascript
// CORRECT
import RecipeBook from './components/RecipeBook';

customTabs: [
  {
    id: 'recipes',
    component: RecipeBook  // Direct reference
  }
]
```

### ❌ Mistake 2: Forgetting App.jsx Registration
Even if the config is correct, tabs won't work without registering in `App.jsx`!

### ❌ Mistake 3: Wrong Lessons Structure
```javascript
// WRONG
lessons: lessonData  // Direct export

// CORRECT
lessons: {
  data: lessons,
  getLessonById: getLessonById,
  getNextLesson: getNextLesson
}
```

## Testing

1. Start the dev server: `npm run dev`
2. Navigate to your buddy: `#/learnbuddy/cook/home`
3. Check the bottom navigation - your custom tabs should appear
4. Click each tab - it should show your component (not "Coming Soon")

## Example: Complete CookBuddy Implementation

See the following files for a complete example:
- `src/learnbuddy/buddies/cook/config.js`
- `src/learnbuddy/buddies/cook/components/RecipeBook.jsx`
- `src/learnbuddy/buddies/cook/components/ShoppingList.jsx`
- `src/App.jsx` (lines 47-48 for imports, lines 405-412 for rendering)

## Need Help?

Refer to existing implementations:
- **LifeSkillsBuddy**: Most comprehensive example (6 custom tabs)
- **EnglishBuddy**: Good example with vocabulary and media tabs
- **PianoBuddy**: Simple example with 2 tabs

