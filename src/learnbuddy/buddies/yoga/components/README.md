# Yoga Buddy Components

Dieses Verzeichnis enthält alle interaktiven Tools für den YogaBuddy.

## Verfügbare Komponenten

### 1. YogaSessionTimer.jsx
Ein smooth, geführter Yoga-Session-Timer mit Pose-Übergängen.

**Features:**
- Anpassbare Sequenzen
- Smooth Pose-Übergänge mit Animationen
- Audio-Cues (optional)
- Fortschritts-Tracking
- Schöne UI mit smooth Animationen

**Verwendung:**
```jsx
import YogaSessionTimer from './components/YogaSessionTimer';

const sequence = [
  { name: 'Tadasana', nameDe: 'Berg-Pose', duration: 30, description: 'Grundhaltung' },
  { name: 'Uttanasana', nameDe: 'Vorbeuge', duration: 45, description: 'Rücken entspannen' },
  // ...
];

<YogaSessionTimer 
  sequence={sequence}
  onComplete={() => console.log('Session complete!')}
/>
```

### 2. BreathingGuide.jsx
Ein visueller Atemführer für Pranayama-Praxis.

**Features:**
- Mehrere Atemmuster (4-7-8, Box Breathing, Ujjayi, etc.)
- Smooth visuelle Animationen
- Geführte Audio-Cues
- Anpassbare Timing
- Beruhigende UI

**Verwendung:**
```jsx
import BreathingGuide from './components/BreathingGuide';

<BreathingGuide />
```

**Verfügbare Muster:**
- Box Breathing (4-4-4-4)
- 4-7-8 Breathing (Entspannung)
- Ujjayi Breath (Ozean-Atem)
- Energizing Breath (Schnell)
- Custom (Individuell)

### 3. PoseLibrary.jsx
Eine umfassende Yoga-Posen-Bibliothek mit visuellen Anleitungen.

**Features:**
- Durchsuchbare Posen-Datenbank
- Filter nach Kategorie, Schwierigkeit, Vorteilen
- Detaillierte Anleitungen und Ausrichtungshinweise
- Visuelle SVG-Darstellungen
- Sicherheitshinweise und Modifikationen

**Verwendung:**
```jsx
import PoseLibrary from './components/PoseLibrary';

<PoseLibrary />
```

**Kategorien:**
- Standing (Stehend)
- Sitting (Sitzend)
- Lying (Liegend)
- Balance
- Backbends (Rückbeugen)
- Twists (Drehungen)
- Inversions (Umkehrhaltungen)

### 4. SequenceBuilder.jsx
Ein interaktives Tool zum Erstellen individueller Yoga-Sequenzen.

**Features:**
- Drag & Drop Pose-Anordnung
- Individuelle Dauer für jede Pose
- Sequenzen speichern und laden
- Vorschau und Praxis-Modus
- Intuitive UI

**Verwendung:**
```jsx
import SequenceBuilder from './components/SequenceBuilder';

<SequenceBuilder />
```

**Funktionen:**
- Posen aus Bibliothek hinzufügen
- Reihenfolge per Drag & Drop ändern
- Dauer jeder Pose anpassen
- Sequenz speichern (localStorage)
- Direkt in Session Timer starten

## Integration

Alle Komponenten nutzen den `LanguageContext` für mehrsprachige Unterstützung (DE/EN).

Die Komponenten sind vollständig responsive und unterstützen Dark Mode.

## Datenstruktur

### Sequence Format
```javascript
{
  name: 'Sequence Name',
  poses: [
    {
      name: 'Pose Name',
      nameDe: 'Pose Name (DE)',
      duration: 30, // in seconds
      description: 'Optional description'
    }
  ],
  createdAt: 'ISO Date String'
}
```

### Pose Format
```javascript
{
  id: 'pose-id',
  name: 'Pose Name',
  nameDe: 'Pose Name (DE)',
  category: 'standing' | 'sitting' | 'lying' | 'balance' | 'backbend' | 'twist' | 'inversion',
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  benefits: ['benefit1', 'benefit2'],
  duration: 30, // default duration in seconds
  description: 'Pose description',
  instructions: ['Step 1', 'Step 2', ...],
  modifications: ['Modification 1', ...],
  warnings: ['Warning 1', ...]
}
```

## Styling

Alle Komponenten verwenden Tailwind CSS mit dem Purple/Pink Theme des YogaBuddies.

Farben:
- Primary: Purple (#a855f7)
- Accent: Pink (#ec4899)
- Background: Violet/Purple gradients

## Zukünftige Erweiterungen

- [ ] Audio-Anleitungen für Posen
- [ ] Video-Integration für Pose-Demonstrationen
- [ ] Fortschritts-Tracking über Zeit
- [ ] Soziale Features (Sequenzen teilen)
- [ ] Erweiterte Statistiken
- [ ] Integration mit Wearables (Herzfrequenz, etc.)


