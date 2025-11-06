# Neuen Buddy erstellen 🎯

Diese Anleitung zeigt dir Schritt für Schritt, wie du einen neuen Buddy zur LearnBuddy-Plattform hinzufügst.

## 📋 Voraussetzungen

- Grundkenntnisse in React
- Verständnis der Buddy-Architektur
- Icon aus Lucide React

## 🚀 Schritt-für-Schritt Anleitung

### Schritt 1: Ordnerstruktur erstellen

Erstelle einen neuen Ordner für deinen Buddy:

```bash
src/learnbuddy/buddies/dein-buddy/
├── components/
│   └── DeinBuddyHomePage.jsx
├── data/
│   └── lessons.js
├── lessons/
│   └── module1/
│       └── lesson1.js
└── config.js
```

### Schritt 2: Config-Datei erstellen

`src/learnbuddy/buddies/dein-buddy/config.js`:

```javascript
import { Icon } from 'lucide-react'; // Wähle ein passendes Icon
import DeinBuddyHomePage from './components/DeinBuddyHomePage';
import { lessons, getLessonById, getNextLesson } from './data/lessons';

const deinBuddyConfig = {
  id: 'dein-buddy',
  
  // Name in verschiedenen Sprachen
  name: {
    de: 'Dein Buddy',
    en: 'Your Buddy'
  },
  
  // Beschreibung
  description: {
    de: 'Lerne etwas Neues mit Dein Buddy',
    en: 'Learn something new with Your Buddy'
  },
  
  // Icon
  icon: Icon,
  
  // Farben (Tailwind Classes)
  colors: {
    primary: 'bg-blue-500',
    secondary: 'bg-blue-600',
    accent: 'bg-blue-400',
    gradient: 'from-blue-500 to-blue-600'
  },
  
  // Home Component
  homeComponent: DeinBuddyHomePage,
  
  // Lektionen
  lessons: {
    data: lessons,
    getLessonById,
    getNextLesson
  },
  
  // Custom Tabs (optional)
  customTabs: [
    {
      id: 'special',
      name: {
        de: 'Spezial',
        en: 'Special'
      },
      icon: Icon,
      component: SpecialComponent // Optional
    }
  ],
  
  // Features
  features: {
    hasLessons: true,
    hasPlan: true,
    hasCustomTabs: true
  }
};

export default deinBuddyConfig;
```

### Schritt 3: HomePage Component erstellen

`src/learnbuddy/buddies/dein-buddy/components/DeinBuddyHomePage.jsx`:

```javascript
import React from 'react';
import { Icon } from 'lucide-react';
import SupportBanner from '../../../shared/components/SupportBanner';
import InteractiveWelcome from '../../../shared/components/InteractiveWelcome';

export default function DeinBuddyHomePage({ onNavigate, language }) {
  const content = {
    de: {
      title: 'Willkommen bei Dein Buddy!',
      subtitle: 'Dein persönlicher Lernbegleiter',
      description: 'Hier kannst du...',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3'
      ]
    },
    en: {
      title: 'Welcome to Your Buddy!',
      subtitle: 'Your personal learning companion',
      description: 'Here you can...',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3'
      ]
    }
  };

  const t = content[language] || content.en;

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <InteractiveWelcome
        title={t.title}
        subtitle={t.subtitle}
        icon={Icon}
      />

      {/* Description */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">{t.description}</h2>
        <ul className="space-y-2">
          {t.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Icon size={20} className="text-blue-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => onNavigate('lektionen')}
          className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all"
        >
          <Icon size={32} className="mb-2" />
          <h3 className="text-xl font-bold">Lektionen starten</h3>
          <p className="text-sm opacity-90">Beginne mit dem Lernen</p>
        </button>

        <button
          onClick={() => onNavigate('plan')}
          className="p-6 bg-white dark:bg-gray-800 border-2 border-blue-500 rounded-xl hover:shadow-lg transition-all"
        >
          <Icon size={32} className="mb-2 text-blue-500" />
          <h3 className="text-xl font-bold">Dein Plan</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Erstelle deinen Lernplan
          </p>
        </button>
      </div>

      {/* Support Banner */}
      <SupportBanner />
    </div>
  );
}
```

### Schritt 4: Lektionen-Daten erstellen

`src/learnbuddy/buddies/dein-buddy/data/lessons.js`:

```javascript
export const lessons = [
  {
    id: 'module1-lesson1',
    title: {
      de: 'Einführung',
      en: 'Introduction'
    },
    description: {
      de: 'Erste Schritte',
      en: 'First steps'
    },
    module: 'Module 1',
    duration: '10 min',
    difficulty: 'beginner',
    order: 1
  },
  // Mehr Lektionen...
];

export function getLessonById(id) {
  return lessons.find(lesson => lesson.id === id);
}

export function getNextLesson(currentId) {
  const currentIndex = lessons.findIndex(l => l.id === currentId);
  if (currentIndex === -1 || currentIndex === lessons.length - 1) {
    return null;
  }
  return lessons[currentIndex + 1];
}
```

### Schritt 5: Lektionen-Content erstellen

`src/learnbuddy/buddies/dein-buddy/lessons/module1/lesson1.js`:

```javascript
export default {
  id: 'module1-lesson1',
  
  content: {
    de: `
# Einführung

Willkommen zur ersten Lektion!

## Was du lernen wirst

- Punkt 1
- Punkt 2
- Punkt 3

## Los geht's!

Hier ist der Inhalt...
    `,
    en: `
# Introduction

Welcome to the first lesson!

## What you'll learn

- Point 1
- Point 2
- Point 3

## Let's go!

Here's the content...
    `
  },
  
  // Quiz (optional)
  quiz: {
    questions: [
      {
        question: {
          de: 'Frage 1?',
          en: 'Question 1?'
        },
        options: [
          { de: 'Option A', en: 'Option A' },
          { de: 'Option B', en: 'Option B' },
          { de: 'Option C', en: 'Option C' }
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Erklärung...',
          en: 'Explanation...'
        }
      }
    ]
  }
};
```

### Schritt 6: Buddy registrieren

`src/learnbuddy/context/BuddyContext.jsx`:

```javascript
import deinBuddyConfig from '../buddies/dein-buddy/config';

// In der BuddyProvider Komponente:
const buddyConfigs = {
  boulder: boulderBuddyConfig,
  english: englishBuddyConfig,
  gym: gymBuddyConfig,
  'dein-buddy': deinBuddyConfig, // Hinzufügen!
  // ... andere Buddies
};
```

### Schritt 7: Testen

1. Starte die App: `npm run dev`
2. Wechsle zu deinem Buddy
3. Teste alle Features
4. Prüfe Responsive Design
5. Teste Dark/Light Mode

## 📝 Best Practices

### 1. **Konsistente Namensgebung**
```javascript
// Config ID
id: 'dein-buddy'

// Ordner
buddies/dein-buddy/

// Component
DeinBuddyHomePage.jsx

// Config
deinBuddyConfig
```

### 2. **Mehrsprachigkeit**
Immer `de` und `en` unterstützen:
```javascript
{
  de: 'Deutscher Text',
  en: 'English text'
}
```

### 3. **Icons**
Nutze Lucide React Icons:
```javascript
import { BookOpen, Dumbbell, Music } from 'lucide-react';
```

### 4. **Farben**
Wähle ein konsistentes Farbschema:
```javascript
colors: {
  primary: 'bg-blue-500',
  secondary: 'bg-blue-600',
  accent: 'bg-blue-400',
  gradient: 'from-blue-500 to-blue-600'
}
```

### 5. **Komponenten wiederverwenden**
Nutze existierende Komponenten:
- `SupportBanner`
- `InteractiveWelcome`
- `Quiz`
- `LessonContent`

## 🎨 Styling

### Tailwind Classes
```javascript
// Container
'bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm'

// Buttons
'px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'

// Text
'text-2xl font-bold text-gray-900 dark:text-white'

// Gradients
'bg-gradient-to-r from-blue-500 to-blue-600'
```

## 🔧 Erweiterte Features

### Custom Tabs
```javascript
customTabs: [
  {
    id: 'workouts',
    name: { de: 'Workouts', en: 'Workouts' },
    icon: Dumbbell,
    component: WorkoutsComponent
  }
]
```

### Daten-Persistierung
```javascript
// In Component
useEffect(() => {
  const saved = localStorage.getItem('dein-buddy-data');
  if (saved) {
    setData(JSON.parse(saved));
  }
}, []);

const saveData = (newData) => {
  localStorage.setItem('dein-buddy-data', JSON.stringify(newData));
  setData(newData);
};
```

### API Integration
```javascript
const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## ✅ Checkliste

- [ ] Ordnerstruktur erstellt
- [ ] config.js konfiguriert
- [ ] HomePage Component erstellt
- [ ] Lektionen-Daten definiert
- [ ] Mindestens 3 Lektionen erstellt
- [ ] Buddy in BuddyContext registriert
- [ ] Mehrsprachigkeit implementiert
- [ ] Icons ausgewählt
- [ ] Farben definiert
- [ ] Responsive getestet
- [ ] Dark Mode getestet
- [ ] Dokumentation geschrieben

## 🐛 Troubleshooting

### Buddy erscheint nicht
- Prüfe, ob in `BuddyContext.jsx` registriert
- Prüfe `id` in config.js
- Console für Fehler prüfen

### Lektionen laden nicht
- Prüfe `lessons.js` Export
- Prüfe Pfade in config.js
- Prüfe `getLessonById` Funktion

### Styling funktioniert nicht
- Prüfe Tailwind Classes
- Prüfe Dark Mode Classes
- Browser-Cache leeren

## 📚 Beispiele

Siehe existierende Buddies als Referenz:
- **Boulder**: Komplexes Beispiel mit Custom Tabs
- **English**: Beispiel mit Quiz-System
- **Gym**: Einfaches Beispiel

## 🎉 Fertig!

Dein neuer Buddy ist jetzt Teil von LearnBuddy! 🚀

