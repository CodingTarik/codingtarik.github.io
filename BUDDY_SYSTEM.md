# LearnBuddy System Architecture

## Overview
LearnBuddy is a modular learning platform that supports multiple "buddies" - specialized learning companions for different activities. Each buddy has its own lessons, custom features, and data storage.

## Current Buddies
- **BoulderBuddy**: Learn bouldering techniques, track training, and log sessions
- **SwimBuddy**: Swimming lessons and workout plans (coming soon)
- **RunBuddy**: Running form, training plans, and route tracking (coming soon)
- **GymBuddy**: Strength training exercises and progress tracking (coming soon)
- **CookBuddy**: Cooking lessons, recipes, and meal planning (coming soon)

## Directory Structure

```
src/
├── buddies/
│   ├── boulder/
│   │   ├── lessons/           # Boulder-specific lessons
│   │   ├── components/        # Boulder-specific features (Training, SessionLogger)
│   │   ├── data/              # Boulder data (lessons, exercises, warmups)
│   │   └── config.js          # Boulder buddy configuration
│   ├── swim/
│   ├── run/
│   ├── gym/
│   └── cook/
├── shared/
│   ├── components/            # Shared UI components (LessonsPage, PlanPage, etc.)
│   └── hooks/                 # Shared React hooks
├── context/
│   ├── BuddyContext.jsx       # Manages active buddy state
│   ├── LanguageContext.jsx    # i18n support
│   └── ThemeContext.jsx       # Dark/Light mode
└── utils/                     # Utility functions
```

## Buddy Configuration

Each buddy has a `config.js` file that defines:

```javascript
{
  id: 'boulder',
  name: { en: 'BoulderBuddy', de: 'BoulderBuddy' },
  icon: Mountain,
  theme: {
    primary: 'teal',
    primaryColor: '#14b8a6',
    accent: 'orange',
    background: 'stone'
  },
  sharedTabs: ['home', 'lessons', 'plan'],
  customTabs: [
    {
      id: 'training',
      name: { en: 'Training', de: 'Training' },
      icon: Dumbbell,
      component: 'TrainingPage'
    }
  ],
  planItemType: {
    type: 'training_task',
    fields: { ... }
  },
  planTranslations: { ... }
}
```

## Shared Features

All buddies share these core features:
- **Home**: Welcome page with buddy selector
- **Lessons**: Categorized lessons with progress tracking
- **Plan**: Save items from lessons for later (buddy-specific structure)

## Custom Features

Each buddy can define custom tabs with unique functionality:
- **BoulderBuddy**: Training (workout builder), Sessions (session logger)
- **SwimBuddy**: Workouts, Progress
- **RunBuddy**: Routes, Races
- **GymBuddy**: Exercises, Stats
- **CookBuddy**: Recipes, Shopping List

## Data Persistence

Data is stored in localStorage with buddy-specific keys:
- `activeBuddy`: Currently selected buddy
- `{buddyId}BuddyPlanItems`: Plan items for each buddy
- `{buddyId}_lessonProgress`: Lesson completion status
- Buddy-specific data (e.g., `boulderWorkouts`, `swimSessions`)

## Adding a New Buddy

1. Create directory structure: `src/buddies/newbuddy/{lessons,components,data}`
2. Create `config.js` with buddy configuration
3. Add buddy to `BuddyContext.jsx` BUDDIES registry
4. Create home page component
5. Implement custom tabs and features
6. Add lessons and content

## Switching Buddies

Users can switch buddies via the dropdown on the home page. When switching:
- Active buddy is saved to localStorage
- Navigation tabs update to show buddy-specific tabs
- Plan items are loaded from buddy-specific storage
- Lessons are loaded from buddy-specific data

## Future Enhancements

- Buddy-specific themes (colors, fonts)
- Cross-buddy data sharing (e.g., general fitness stats)
- Buddy recommendations based on user goals
- Community features per buddy

