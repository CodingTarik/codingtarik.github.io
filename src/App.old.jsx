import React, { useState, useEffect } from 'react';
import { Home, BookOpen, ListTodo, ShoppingBag, Save, Check, X, ChevronLeft, Mountain, Users, Shield, Footprints, Hand, Award, Target, Timer, TrendingUp, Book, Zap, Activity } from 'lucide-react';

// ============================================================================
// HAUPT-APP KOMPONENTE
// ============================================================================
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLesson, setCurrentLesson] = useState(null);
  const [savedTasks, setSavedTasks] = useState([]);
  const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);

  // LocalStorage laden
  useEffect(() => {
    const saved = localStorage.getItem('boulderBuddyTasks');
    if (saved) {
      setSavedTasks(JSON.parse(saved));
    }
  }, []);

  // LocalStorage speichern
  useEffect(() => {
    localStorage.setItem('boulderBuddyTasks', JSON.stringify(savedTasks));
  }, [savedTasks]);

  const saveTask = (task) => {
    setSavedTasks([...savedTasks, { ...task, id: Date.now() }]);
    setShowSaveConfirmation(true);
    setTimeout(() => setShowSaveConfirmation(false), 2000);
  };

  const removeTask = (taskId) => {
    setSavedTasks(savedTasks.filter(task => task.id !== taskId));
  };

  const toggleChecklistItem = (taskId, itemIndex) => {
    setSavedTasks(savedTasks.map(task => {
      if (task.id === taskId) {
        const newChecklist = [...task.checklist];
        newChecklist[itemIndex] = { ...newChecklist[itemIndex], checked: !newChecklist[itemIndex].checked };
        return { ...task, checklist: newChecklist };
      }
      return task;
    }));
  };

  return (
    <div className="min-h-screen bg-stone-100 pb-20">
      {/* Save Confirmation Toast */}
      {showSaveConfirmation && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-bounce">
          <Check size={20} />
          <span className="font-semibold">Gespeichert!</span>
        </div>
      )}

      {/* Main Content */}
      {currentLesson ? (
        <LessonDetailPage 
          lesson={currentLesson} 
          onBack={() => setCurrentLesson(null)}
          onSaveTask={saveTask}
        />
      ) : (
        <>
          {currentPage === 'home' && <HomePage onStartLesson={() => { setCurrentPage('lektionen'); setCurrentLesson(null); }} />}
          {currentPage === 'lektionen' && <LessonsPage onSelectLesson={setCurrentLesson} />}
          {currentPage === 'plan' && (
            <TrainingPlanPage 
              tasks={savedTasks} 
              onRemoveTask={removeTask}
              onToggleChecklistItem={toggleChecklistItem}
            />
          )}
          {currentPage === 'ausruestung' && <GearGuidePage />}
        </>
      )}

      {/* Bottom Navigation */}
      {!currentLesson && <BottomNavigation currentPage={currentPage} setCurrentPage={setCurrentPage} />}
    </div>
  );
}

// ============================================================================
// BOTTOM NAVIGATION
// ============================================================================
function BottomNavigation({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'lektionen', icon: BookOpen, label: 'Lektionen' },
    { id: 'plan', icon: ListTodo, label: 'Mein Plan' },
    { id: 'ausruestung', icon: ShoppingBag, label: 'Ausrüstung' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 shadow-lg">
      <div className="flex justify-around items-center h-16 max-w-2xl mx-auto">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              currentPage === item.id ? 'text-teal-500' : 'text-stone-600'
            }`}
          >
            <item.icon size={24} />
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

// ============================================================================
// HOME PAGE
// ============================================================================
function HomePage({ onStartLesson }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-stone-800 mb-4">
          Willkommen beim BoulderBuddy! 🧗
        </h1>
        
        {/* Climbing Wall SVG */}
        <div className="my-8">
          <svg viewBox="0 0 400 300" className="w-full max-w-md mx-auto">
            {/* Wall */}
            <rect x="50" y="20" width="300" height="260" fill="#d6d3d1" stroke="#78716c" strokeWidth="2" />
            
            {/* Holds - various shapes */}
            <ellipse cx="100" cy="80" rx="20" ry="15" fill="#14b8a6" />
            <circle cx="180" cy="100" r="18" fill="#f97316" />
            <rect x="250" y="70" width="35" height="25" rx="8" fill="#14b8a6" />
            <ellipse cx="120" cy="160" rx="25" ry="18" fill="#f97316" />
            <circle cx="220" cy="150" r="15" fill="#14b8a6" />
            <ellipse cx="300" cy="180" rx="22" ry="16" fill="#f97316" />
            <circle cx="150" cy="230" r="20" fill="#14b8a6" />
            <rect x="260" y="220" width="30" height="20" rx="6" fill="#f97316" />
            
            {/* Climber stick figure */}
            <circle cx="220" cy="200" r="15" fill="#57534e" />
            <line x1="220" y1="215" x2="220" y2="260" stroke="#57534e" strokeWidth="4" />
            <line x1="220" y1="230" x2="190" y2="250" stroke="#57534e" strokeWidth="4" />
            <line x1="220" y1="230" x2="250" y2="250" stroke="#57534e" strokeWidth="4" />
            <line x1="220" y1="260" x2="200" y2="285" stroke="#57534e" strokeWidth="4" />
            <line x1="220" y1="260" x2="240" y2="285" stroke="#57534e" strokeWidth="4" />
          </svg>
        </div>

        <p className="text-lg text-stone-700 mb-6 leading-relaxed">
          Dein kostenloser Begleiter auf dem Weg zum Bouldern. Lerne die Grundlagen, 
          entdecke Techniken und plane dein nächstes Training.
        </p>

        <button
          onClick={onStartLesson}
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-lg shadow-md transition-all transform hover:scale-105"
        >
          <span className="flex items-center gap-2 text-lg">
            <Mountain size={24} />
            Starte Lektion 1
          </span>
        </button>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <BookOpen size={32} className="mx-auto mb-3 text-teal-500" />
          <h3 className="font-bold text-stone-800 mb-2">12+ Lektionen</h3>
          <p className="text-sm text-stone-600">Von Basics bis Profi-Techniken</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Target size={32} className="mx-auto mb-3 text-orange-500" />
          <h3 className="font-bold text-stone-800 mb-2">Praktische Aufgaben</h3>
          <p className="text-sm text-stone-600">Direkt an der Wand anwendbar</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <TrendingUp size={32} className="mx-auto mb-3 text-teal-500" />
          <h3 className="font-bold text-stone-800 mb-2">Trainingsplan</h3>
          <p className="text-sm text-stone-600">Speichere & tracke deinen Fortschritt</p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// LESSONS DATA
// ============================================================================
const lessonsData = [
  {
    id: 1,
    category: 'Grundlagen & Theorie',
    title: 'Was ist Bouldern? (Halle & Fels)',
    icon: Mountain,
    description: 'Bouldern ist Klettern in Absprunghöhe ohne Seil und Gurt. Der Name kommt vom englischen "boulder" (Felsblock). Du kletterst meist 3-5 Meter hoch über dicken Matten, die dich beim Abspringen oder Fallen auffangen.',
    content: `
**Was ist Bouldern?**

Bouldern ist die reinste Form des Kletterns – nur du, der Fels (oder die Kletterwand) und deine Schuhe. Keine Seile, keine Gurte, nur pure Bewegung. Die Routen (genannt "Boulder" oder "Probleme") sind kurz aber intensiv und technisch anspruchsvoll.

**Halle vs. Fels**

- **Boulderhalle**: Perfekt für Anfänger! Klimatisiert, sichere Matten, markierte Routen nach Schwierigkeit (meist mit Farben), und eine Community, die dir hilft.
- **Outdoor Bouldern**: Das Ziel vieler Boulderer. Echter Fels, Natur, aber auch mehr Vorbereitung nötig (Crashpads, Spotting, Wetter).

**Warum Bouldern?**

- Ganzkörper-Workout (Kraft, Ausdauer, Flexibilität)
- Problemlösungstraining fürs Gehirn
- Soziale Community
- Niedriger Einstieg (keine teure Ausrüstung am Anfang)
- Schneller Fortschritt sichtbar
    `,
    task: {
      title: 'Dein erster Boulder',
      description: 'Besuche eine Boulderhalle und klettere 3 verschiedene Routen im Anfängerbereich (meist grün oder gelb markiert). Ziel: Bewegung spüren, nicht Schwierigkeit!',
      checklist: [
        { text: 'Boulderhalle in der Nähe gefunden', checked: false },
        { text: '3 verschiedene leichte Boulder geklettert', checked: false },
        { text: 'Mit mindestens einer Person gesprochen', checked: false },
        { text: 'Notiere: Welcher Boulder hat am meisten Spaß gemacht?', checked: false }
      ]
    }
  },
  {
    id: 2,
    category: 'Grundlagen & Theorie',
    title: 'Sicherheit & Hallen-Etikette',
    icon: Shield,
    description: 'Bouldern ist relativ sicher – wenn du die Regeln kennst. Richtiges Fallen, Aufmerksamkeit und Respekt schützen dich und andere.',
    content: `
**Richtig Fallen – Die wichtigste Skill!**

90% der Verletzungen beim Bouldern passieren beim Fallen, nicht beim Klettern.

**Falltechnik:**
1. Kontrolliert abspringen (nicht einfach loslassen)
2. Auf den Füßen landen, Knie leicht gebeugt
3. Sofort nach hinten abrollen (Po → Rücken)
4. Niemals steif mit gestreckten Beinen landen
5. Hände schützen: nicht abstützen!

**Hallen-Etikette:**

- **Nie unter Kletternden laufen/stehen** – das ist die goldene Regel!
- Matten freihalten, kein Gepäck drauf
- Andere Boulderer beobachten, bevor du in eine Route einsteigst
- Chalk-Überschuss abwischen nach dem Boulder
- Bürsten sind zum Griffe säubern, nicht als Spielzeug
- Schuhe ausziehen außerhalb der Matten (Hygiene)

**Spotting (Sichern beim Bouldern):**

Kein Seil, aber Freunde können "spotten" – sie stehen bereit, deinen Fall zu lenken (nicht fangen!), besonders bei schwierigen Stellen oder Überhängen.
    `,
    task: {
      title: 'Falltechnik üben',
      description: 'Übe 10x kontrolliert von der Wand abzuspringen (aus ca. 1,5m Höhe) und korrekt abzurollen. Film dich selbst oder lass einen Freund zuschauen.',
      checklist: [
        { text: 'Kontrolliertes Abspringen geübt', checked: false },
        { text: 'Abrollen nach hinten durchgeführt', checked: false },
        { text: 'Hände NICHT abgestützt beim Fallen', checked: false },
        { text: 'Gefühl für sichere Landung entwickelt', checked: false }
      ]
    }
  },
  {
    id: 3,
    category: 'Grundlagen & Theorie',
    title: 'Boulder-ABC: Griffe & Routen',
    icon: Award,
    description: 'Verstehe wie Boulder-Routen markiert sind, welche Griffarten es gibt und wie Schwierigkeitsgrade funktionieren.',
    content: `
**Routen lesen:**

In Hallen sind Boulder meist farblich markiert:
- **Griffe einer Farbe** = eine Route
- **Start**: Oft mit "START" markiert oder zwei Griffe für beide Hände
- **Top**: Der letzte Griff, meist markiert mit "TOP"
- **Füße**: Manchmal "Feet follow" (alle Tritte erlaubt) oder nur markierte Tritte

**Schwierigkeitsgrade:**

Je nach Halle: Farben, Zahlen oder Fontainebleau-Skala (4a, 5a, 6a...).
- **Anfänger**: ca. 4a-5b
- **Fortgeschritten**: 5c-6b
- **Profi**: 6c+

**Die wichtigsten Griffarten:**

1. **Jug (Henkel)**: Große, komfortable Griffe – perfekt für Anfänger
2. **Crimp (Leiste)**: Schmale Griffe, nur Fingerkuppen
3. **Sloper (Aufleger)**: Runde, abfallende Griffe – brauchen Reibung
4. **Pinch (Zange)**: Greifen mit Daumen gegenüber
5. **Pocket (Loch)**: Löcher für 1-3 Finger

**Pro-Tip:** Jede Route ist ein "Problem" – eine Abfolge von Moves. Beobachte andere, plane deine Sequenz!
    `,
    task: {
      title: 'Griff-Safari',
      description: 'Finde in deiner Halle mindestens einen Boulder, der alle 5 Hauptgriffarten enthält. Klettere ihn und benenne jeden Griff laut.',
      checklist: [
        { text: 'Jug gefunden und verwendet', checked: false },
        { text: 'Crimp identifiziert', checked: false },
        { text: 'Sloper gemeistert (rutschig!)', checked: false },
        { text: 'Pinch mit Daumen-Opposition gegriffen', checked: false },
        { text: 'Pocket mit 1-2 Fingern getestet', checked: false }
      ]
    }
  },
  {
    id: 4,
    category: 'Ausrüstung',
    title: 'Der perfekte Kletterschuh',
    icon: Footprints,
    description: 'Der wichtigste Ausrüstungsgegenstand beim Bouldern. Passform ist alles – ein guter Schuh macht dich sofort besser.',
    content: `
**Warum spezielle Kletterschuhe?**

Normale Turnschuhe haben zu viel Dämpfung und zu wenig Gefühl. Kletterschuhe haben:
- **Sticky Rubber** (Reibungs-Gummi) für Halt auf kleinsten Tritten
- **Enge Passform** für Präzision
- **Vorspannung** für Kraft in den Zehen

**Die 3 Schuh-Typen:**

1. **Neutral/Anfänger**: Flach, komfortabel, ideal für Einsteiger (z.B. La Sportiva Tarantula)
2. **Moderat**: Leichte Vorspannung (Downturn), für Überhänge
3. **Aggressiv**: Starke Vorspannung, nur für schwere Routen & schmerzunempfindliche Füße

**Anprobe-Tipps:**

- Kletterschuhe müssen ENG sitzen (aber nicht schmerzhaft!)
- Deine Zehen sollten leicht gekrümmt sein
- Keine Luftpolster an der Ferse
- Verschiedene Marken = verschiedene Passformen (La Sportiva schmal, Scarpa breiter)
- Für Anfänger: Komfort > Performance

**SVG-Darstellung: Schuhtypen**
[Neutral] [Moderat] [Aggressiv]
    `,
    task: {
      title: 'Schuh-Test',
      description: 'Probiere in deiner Halle mindestens 3 verschiedene Schuhmodelle (Verleih!). Klettere denselben Boulder in jedem Paar und notiere Unterschiede.',
      checklist: [
        { text: '3 verschiedene Schuhe getestet', checked: false },
        { text: 'Notiert: Welcher Schuh war am komfortabelsten?', checked: false },
        { text: 'Notiert: Mit welchem Schuh hattest du das beste Gefühl?', checked: false },
        { text: 'Entscheidung: Kaufe oder leihe die für dich passenden Schuhe', checked: false }
      ]
    }
  },
  {
    id: 5,
    category: 'Ausrüstung',
    title: 'Chalk & Zubehör',
    icon: Hand,
    description: 'Magnesiumcarbonat (Chalk) ist dein bester Freund für besseren Grip. Plus: Bürsten, Tape und mehr.',
    content: `
**Warum Chalk?**

Deine Hände schwitzen → Griffe werden rutschig → Chalk absorbiert Feuchtigkeit und erhöht Reibung.

**Chalk-Arten:**

1. **Powder (Pulver)**: Klassisch, in Chalk-Bag
2. **Block**: Muss zerbröselt werden, weniger Staub
3. **Liquid Chalk**: Flüssig, trocknet zu dünner Schicht, sehr beliebt & sauber

**Chalk-Bag vs. Chalk-Ball:**

- **Chalk-Bag**: Kleiner Beutel am Gürtel (beim Routenklettern)
- **Beim Bouldern**: Meist große Chalk-Eimer am Boden

**Weiteres Zubehör:**

- **Bürste**: Reinigt Griffe von Chalk & Schmutz (besserer Grip!)
- **Tape**: Schützt Haut bei Verletzungen oder empfindlichen Stellen
- **Nagelfeile**: Scharfe Kanten glätten (Haut schonen)
- **Hautpflege**: Creme nach dem Training (Kletterhaut ist trocken!)

**Hallen-Regel:** Viele Hallen erlauben nur Liquid Chalk wegen weniger Staub.
    `,
    task: {
      title: 'Chalk richtig einsetzen',
      description: 'Klettere 3 Boulder: 1x ohne Chalk, 1x mit normalem Chalk, 1x mit Liquid Chalk. Spüre den Unterschied!',
      checklist: [
        { text: 'Boulder ohne Chalk geklettert (rutschig?)', checked: false },
        { text: 'Mit Powder Chalk getestet', checked: false },
        { text: 'Mit Liquid Chalk getestet', checked: false },
        { text: 'Griffe nach dem Training gebürstet', checked: false },
        { text: 'Entscheidung: Besorge dein eigenes Chalk', checked: false }
      ]
    }
  },
  {
    id: 6,
    category: 'Grundtechniken',
    title: 'Körperspannung & der "Stille Affe"',
    icon: Activity,
    description: 'Die fundamentalste Technik: Körperspannung. Ohne sie verschwendest du Energie und fällst.',
    content: `
**Was ist Körperspannung?**

Stell dir vor, dein ganzer Körper ist ein gespanntes Seil – nicht schlaff, sondern unter Kontrolle. Vom Kopf bis zu den Zehen aktiv.

**Der "Stille Affe":**

Gute Boulderer klettern leise und flüssig. Schlechte Boulderer:
- Schlackern mit den Beinen
- Knallen auf Tritte
- Schwingen unkontrolliert
- Atmen schwer & verkrampfen

**Technik-Tipps:**

1. **Körperschwerpunkt nah an der Wand**: Hüfte zur Wand drücken
2. **Arme lang lassen**: Nicht hochziehen wie Klimmzüge!
3. **Beine machen die Arbeit**: Drücken, nicht mit Armen ziehen
4. **Atmen nicht vergessen**: Verkrampfung = schlechte Spannung
5. **Füße leise aufsetzen**: Das zeigt Kontrolle

**Core-Spannung:**

Dein Rumpf (Bauch & Rücken) hält alles zusammen. Übungen:
- Plank (Unterarmstütz)
- Hollow Body Hold
- Beinheben hängend
    `,
    task: {
      title: 'Der Stille Affe',
      description: 'Klettere 5 sehr leichte Boulder mit dem Fokus auf: LAUTLOSE Tritte. Jemand mit geschlossenen Augen sollte nicht hören, wann du auf Tritte steigst.',
      checklist: [
        { text: 'Füße kontrolliert und leise aufgesetzt', checked: false },
        { text: 'Körperschwerpunkt nah an der Wand gehalten', checked: false },
        { text: 'Arme gestreckt gelassen (nicht hochgezogen)', checked: false },
        { text: 'Keine unkontrollierten Schwünge', checked: false },
        { text: 'Feedback von einem Freund eingeholt: "War ich leise?"', checked: false }
      ]
    }
  },
  {
    id: 7,
    category: 'Grundtechniken',
    title: 'Richtig Greifen: Crimps, Slopers & Co.',
    icon: Hand,
    description: 'Jeder Griff braucht eine andere Greiftechnik. Lerne die 5 Hauptgriffe richtig zu halten – das schont Finger & gibt Kraft.',
    content: `
**1. Jug (Henkel) – Der Freund:**
Einfach umfassen. Hier kannst du hängen und verschnaufen.

**2. Crimp (Leiste) – Der Fingerfresser:**
Nur die ersten beiden Fingerglieder auf dem Griff.
- **Open Crimp**: Finger leicht gebeugt (sicherer!)
- **Closed Crimp**: Daumen über Zeigefinger (mehr Kraft, aber Verletzungsrisiko!)
⚠️ **Anfänger**: Vermeide Closed Crimp! Deine Sehnen sind noch nicht bereit.

**3. Sloper (Aufleger) – Der Trickser:**
Runder, abfallender Griff. Kein "Greifen", sondern:
- Handfläche auf den Griff legen
- Mit Körpergewicht & Reibung halten
- Arme gestreckt, Schwerpunkt tief

**4. Pinch (Zange):**
Daumen auf einer Seite, Finger auf der anderen. Wie eine Kneifzange.

**5. Pocket (Loch):**
1-3 Finger ins Loch.
- **Monodoi (1 Finger)**: Nur für Profis!
- **2 Finger**: Mittel- & Ringfinger meist am stärksten
⚠️ Vorsicht: Hohe Belastung auf einzelne Finger!

**SVG-Darstellung:**
[Hier könnten simple Hand-Icons für jede Griffart sein]
    `,
    task: {
      title: 'Open Hand Training',
      description: 'Klettere 3 sehr leichte Boulder NUR mit offener Hand – kein Crimpen erlaubt! Das trainiert Sloper-Gefühl und schont deine Finger.',
      checklist: [
        { text: 'Arme lang gelassen bei Slopern', checked: false },
        { text: 'Körperschwerpunkt tief & nah an der Wand', checked: false },
        { text: 'KEIN Crimp verwendet (auch wenn es einfacher wäre)', checked: false },
        { text: 'Gefühl für Reibung & Handflächen entwickelt', checked: false }
      ]
    }
  },
  {
    id: 8,
    category: 'Grundtechniken',
    title: 'Fußtechnik: Treten, Hooken & Eindrehen',
    icon: Footprints,
    description: 'Anfänger fokussieren auf die Hände. Profis wissen: Beine sind stärker! Gute Fußtechnik = weniger Armkraft nötig.',
    content: `
**Grundregel: Beine drücken, Arme halten nur Balance!**

**1. Präzises Treten:**
- **Innenkante des Schuhs** auf kleinen Tritten (präziser)
- **Spitze des Schuhs** für ganz kleine Tritte
- **Außenkante** beim Eindrehen (siehe unten)
- Schaue auf den Tritt, bevor du drauf steigst!

**2. Eindrehen:**
Die effizienteste Technik für hohe Griffe:
- Seitlich zur Wand drehen
- Innenseite der Hüfte zur Wand
- Außenkante des Fußes auf den Tritt
- Reichweite +20cm!

**3. Heel Hook (Fersen-Hook):**
Ferse auf einen Griff/Tritt haken → zieht dich hoch oder hält dich stabil.
Wird oft in Überhängen verwendet.

**4. Toe Hook (Zehen-Hook):**
Oberseite des Schuhs (Zehen) über einen Griff haken.
Braucht flexible Schuhe & Core-Kraft.

**5. Smearing (Anschmieren):**
Kein Tritt? Drücke den ganzen Schuh flach gegen die Wand → Reibung!

**SVG: Eindrehen Illustration**
[Strichfigur die seitlich zur Wand gedreht ist]
    `,
    task: {
      title: 'Eindrehen üben',
      description: 'Klettere 3 Boulder und zwinge dich, bei JEDEM hohen Griff einzudrehen (auch wenn es nicht nötig wäre). Ziel: Bewegung automatisieren.',
      checklist: [
        { text: 'Mindestens 5x bewusst eingedreht', checked: false },
        { text: 'Außenkante des Fußes verwendet', checked: false },
        { text: 'Hüfte nah an die Wand gebracht', checked: false },
        { text: 'Gemerkt: Reichweite ist größer!', checked: false },
        { text: 'Einen Heel Hook ausprobiert', checked: false }
      ]
    }
  },
  {
    id: 9,
    category: 'Fortgeschrittene Techniken',
    title: 'Dynamische Moves: Dyno & Dead Point',
    icon: Zap,
    description: 'Manchmal musst du springen! Lerne explosive Bewegungen und kontrollierte Sprünge.',
    content: `
**Was sind dynamische Moves?**

Wenn ein Griff zu weit weg ist, um statisch (kontrolliert) hinzugreifen, musst du Schwung nutzen.

**1. Dead Point:**
Ein kontrollierter, fließender Schwung. 
- Du nutzt den Moment der Schwerelosigkeit am höchsten Punkt
- Arme & Beine arbeiten koordiniert
- Kein unkontrolliertes Springen!

**2. Dyno (Dynamischer Sprung):**
Beide Füße verlassen die Tritte, du "fliegst" zum Griff.
- Voller Körpereinsatz
- Timing ist alles
- Oft spektakulär, aber auch riskant (Sturzgefahr!)

**Technik für Dead Point:**
1. Starte tief (Knie gebeugt)
2. Drücke explosiv mit den Beinen
3. Schwinge Hüfte nach oben
4. Greife am höchsten Punkt (wenn Körper kurz "schwebt")
5. Kontrolliert landen

**Wann einsetzen?**
- Wenn statisches Erreichen unmöglich ist
- Bei Überhängen mit großen Abständen
- Bei Wettkämpfen für spektakuläre Moves

⚠️ **Anfänger:** Erst statische Techniken meistern, dann dynamische!
    `,
    task: {
      title: 'Dead Point Training',
      description: 'Finde einen Boulder mit einem großen Griff-Abstand. Übe 10x den Move als Dead Point (nicht Dyno!). Fokus auf Timing & Kontrolle.',
      checklist: [
        { text: 'Knie gebeugt gestartet', checked: false },
        { text: 'Explosiv mit Beinen gedrückt', checked: false },
        { text: 'Am höchsten Punkt gegriffen', checked: false },
        { text: 'Kontrolliert gelandet (nicht abgefallen!)', checked: false },
        { text: 'Einen echten Dyno versucht (wenn du dich traust!)', checked: false }
      ]
    }
  },
  {
    id: 10,
    category: 'Fortgeschrittene Techniken',
    title: 'Überhang-Techniken: Knie-Bar & Bat-Hang',
    icon: Mountain,
    description: 'In steilen Überhängen gelten andere Regeln. Lerne spezielle Techniken, um Energie zu sparen.',
    content: `
**Warum sind Überhänge anders?**

In vertikalen Wänden helfen Beine beim Hochdrücken. In Überhängen:
- Arme tragen mehr Gewicht
- Core-Kraft ist essentiell
- Spezielle Rest-Positionen nötig

**1. Knie-Bar (Knie-Stange):**
Die ultimative Ruhepause im Überhang!
- Fuß auf einem Tritt
- Knie unter einem Griff/Volumen
- Fuß & Knie klemmen dich ein → Hände frei!
- Du kannst sogar loslassen & chalken

**Wo finden?**
Schaue nach Volumes oder großen Griffen über einem Tritt.

**2. Bat-Hang (Fledermaus-Hängen):**
Kopfüber hängen mit Heel Hooks.
- Beide Fersen auf Griffen
- Hänge kopfüber
- Extrem Core-intensiv!

**3. Drop-Knee (Knie-Drop):**
Ähnlich wie Eindrehen, aber extremer:
- Ein Knie zeigt nach unten
- Hüfte ganz nah an der Wand
- Spart Armkraft in Überhängen

**4. Flagging (Bein als Gegengewicht):**
Ein Bein schwebt frei und balanciert deinen Körper aus.
    `,
    task: {
      title: 'Knie-Bar suchen',
      description: 'Finde in deiner Halle 2 Boulder mit möglichen Knie-Bar-Positionen. Übe, dich einzuklemmen und Hände loszulassen.',
      checklist: [
        { text: 'Mindestens 1 Knie-Bar Position gefunden', checked: false },
        { text: 'Erfolgreich eingeklemmt', checked: false },
        { text: 'Beide Hände für 5 Sekunden losgelassen', checked: false },
        { text: 'Einen Drop-Knee ausprobiert', checked: false },
        { text: 'Notiert: Wie viel Energie spart das?', checked: false }
      ]
    }
  },
  {
    id: 11,
    category: 'Training & Progression',
    title: 'Trainingsplan für Anfänger (3x/Woche)',
    icon: Timer,
    description: 'Wie oft solltest du trainieren? Was ist zu viel? Ein einfacher Plan für nachhaltige Progression.',
    content: `
**Anfänger-Fehler #1: Zu viel, zu früh!**

Deine Sehnen & Bänder brauchen LÄNGER als Muskeln, um sich anzupassen. Überlastung = Verletzung.

**Optimaler Anfänger-Plan: 3x pro Woche**

**Session 1: Technik-Fokus (90 Min)**
- 15 Min Aufwärmen (leichte Boulder)
- 60 Min: Nur leichte Boulder (unter deinem Limit), Fokus auf saubere Technik
- 15 Min Dehnen & Core-Training

**Session 2: Limit-Bouldern (90 Min)**
- 15 Min Aufwärmen
- 60 Min: Boulder an deinem Limit, mehrere Versuche
- 15 Min Cool-down & Antagonisten-Training (Liegestütze für Balance)

**Session 3: Ausdauer & Spaß (90 Min)**
- 15 Min Aufwärmen
- 60 Min: Viele verschiedene Boulder, wenig Pause
- 15 Min Stretching

**Wichtige Regeln:**
- Mindestens 1 Ruhetag zwischen Sessions
- Bei Schmerzen (nicht Muskelkater!): PAUSE
- Nach 4 Wochen: 1 Woche "Deload" (weniger Intensität)

**Progression:**
Messe nicht nach Schwierigkeitsgrad, sondern:
- Wie leicht fühlt sich Boulder X an?
- Schaffst du mehr Versuche ohne Pump?
- Ist deine Technik sauberer?
    `,
    task: {
      title: 'Trainingslog starten',
      description: 'Führe für 2 Wochen ein einfaches Trainingstagebuch: Datum, welche Boulder, wie fühlst du dich (1-10), Besonderheiten.',
      checklist: [
        { text: 'Notizbuch oder App ausgewählt', checked: false },
        { text: 'Nach jeder Session: Datum & Boulder notiert', checked: false },
        { text: 'Eigenes Gefühl bewertet (Energie, Motivation, Schmerzen)', checked: false },
        { text: 'Nach 2 Wochen: Muster erkannt? (z.B. nach welchem Ruhetag bin ich am stärksten?)', checked: false }
      ]
    }
  },
  {
    id: 12,
    category: 'Training & Progression',
    title: 'Finger-Kraft & Verletzungsprävention',
    icon: Hand,
    description: 'Deine Finger sind dein wertvollstes Kapital – und am anfälligsten für Verletzungen. Schütze sie!',
    content: `
**Die häufigsten Verletzungen:**

1. **Pulley-Riss** (Ringband): Knacken + Schmerz im Finger
2. **Tendinitis** (Sehnenentzündung): Schmerz, der nicht weggeht
3. **Kapsel-Zerrung**: Geschwollene Fingergelenke

**Ursachen:**
- Zu schnelle Progression
- Zu viel Crimpen (v.a. Closed Crimp)
- Kein Aufwärmen
- Ignorieren von Schmerzen

**Prävention – Die goldenen Regeln:**

1. **IMMER Aufwärmen:**
   - 10-15 Min leichte Boulder
   - Finger-Warm-up: Faust öffnen/schließen
   - Gelenke kreisen

2. **Progressives Training:**
   - Nicht mehr als 10% Steigerung pro Woche
   - Nicht jeden Tag Limit-Bouldern

3. **Technik > Kraft:**
   - Open Hand statt Crimp wann immer möglich
   - Beine nutzen (entlastet Finger)

4. **Antagonisten-Training:**
   - Finger-Strecker trainieren (Gummiband um Finger, öffnen)
   - Liegestütze für Balance

5. **Bei Schmerz: PAUSE!**
   - Nicht "durchtrainieren"
   - Entzündungen können chronisch werden

**Übungen für starke Finger:**
- Hängen an großen Griffen (10-15 Sek)
- SPÄTER (nach 6+ Monaten): Hangboard-Training
    `,
    task: {
      title: 'Aufwärm-Routine etablieren',
      description: 'Erstelle deine persönliche 10-Min-Aufwärm-Routine und führe sie vor JEDER Session durch (3x).',
      checklist: [
        { text: '5 leichte Boulder geklettert', checked: false },
        { text: 'Finger-Kreisen & Öffnen/Schließen (50x)', checked: false },
        { text: 'Schultern kreisen & Handgelenke mobilisieren', checked: false },
        { text: 'Erst nach 10 Min mit "echtem" Bouldern gestartet', checked: false },
        { text: 'Notiert: Fühlt sich mein Körper bereit an?', checked: false }
      ]
    }
  },
  {
    id: 13,
    category: 'Mental & Taktik',
    title: 'Route Reading: Boulder knacken ohne Kraft',
    icon: Book,
    description: 'Die besten Boulderer lösen Probleme mit dem Kopf, nicht mit Muskeln. Lerne, Boulder zu "lesen".',
    content: `
**Was ist Route Reading?**

Bevor du in einen Boulder einsteigst, analysierst du:
- Wo sind die Griffe?
- Welche Sequenz (Reihenfolge) ist am effizientesten?
- Wo sind Rest-Positionen?
- Was ist der Crux (schwerste Stelle)?

**Die 4 Schritte:**

**1. Beobachten:**
- Schaue andere beim Bouldern zu
- Wo scheitern sie? Wo gelingt es?
- Kopiere nicht blind – jeder Körper ist anders!

**2. Griffe identifizieren:**
- Markiere Start & Top
- Welche Zwischengriffe?
- Gibt es "versteckte" Tritte?

**3. Sequenz planen:**
- Von Top nach unten denken (oft einfacher!)
- Wo ist die Crux? (Vielleicht am Start!)
- Welche Hand kommt auf welchen Griff?

**4. Visualisieren:**
- Stehe vor dem Boulder
- Gehe die Sequenz im Kopf durch
- Bewege deine Hände in der Luft (hilft wirklich!)

**Pro-Tipp: Beta-Sharing**
"Beta" = Die Lösung für einen Boulder. Teile & tausche mit anderen!

**Flash vs. Redpoint:**
- **Flash**: Beim 1. Versuch geschafft (mit Beta von anderen)
- **Redpoint**: Nach mehreren Versuchen geschafft
    `,
    task: {
      title: 'Route Reading Praxis',
      description: 'Wähle einen Boulder ÜBER deinem Niveau. Verbringe 5 Min mit Route Reading (ohne zu klettern). Dann 3 Versuche.',
      checklist: [
        { text: 'Boulder ausgewählt (der schwer aussieht!)', checked: false },
        { text: 'Andere beobachtet (wenn möglich)', checked: false },
        { text: 'Sequenz geplant & visualisiert', checked: false },
        { text: 'Crux identifiziert', checked: false },
        { text: 'Nach 3 Versuchen: War die Sequenz richtig? Was würdest du ändern?', checked: false }
      ]
    }
  },
  {
    id: 14,
    category: 'Mental & Taktik',
    title: 'Angst & Mentale Stärke: Höher als gedacht',
    icon: TrendingUp,
    description: 'Bouldern ist zu 50% mental. Umgang mit Höhenangst, Versagensangst und Frustration.',
    content: `
**Die 3 häufigsten mentalen Blockaden:**

**1. Höhenangst ("Ich bin zu hoch!")**
Auch wenn es nur 4 Meter sind – das Gehirn sagt: Gefahr!

**Strategie:**
- Falltechnik üben (Vertrauen in Landung)
- Progressive Gewöhnung: Erst niedrige Boulder
- Atmen nicht vergessen!
- Abspringen üben (bewusst loslassen)

**2. Versagensangst ("Alle schauen zu!")**
Gefühl, dass alle deinen Fehler sehen.

**Realität:** Niemand urteilt! Boulderer sind die unterstützendste Community.

**Strategie:**
- Jeder fällt – Profis fallen mehr als Anfänger!
- "Fallen ist Teil des Sports"
- Mit anderen reden – du bist nicht allein!

**3. Frustration ("Ich schaff den Boulder nicht!")**
Du versuchst einen Boulder 20x und scheitern immer an derselben Stelle.

**Strategie:**
- Pause machen (komm am nächsten Tag wieder)
- Fokus auf Prozess, nicht Ergebnis
- Jeder Versuch ist Training
- Manchmal braucht der Körper Zeit zu lernen

**Mental-Training:**
- Visualisierung (Boulder im Kopf erfolgreich klettern)
- Positives Self-Talk ("Ich kann das!")
- Kleine Ziele setzen ("Heute erreiche ich den 3. Griff")
    `,
    task: {
      title: 'Komfortzone erweitern',
      description: 'Klettere bewusst einen Boulder, der dich mental herausfordert (z.B. hoch, exponiert, oder viele Zuschauer). Fokus: Atmung & Selbstgespräch.',
      checklist: [
        { text: 'Boulder ausgewählt, der Unbehagen auslöst', checked: false },
        { text: 'Vor dem Versuch: 5x tief durchgeatmet', checked: false },
        { text: 'Während des Kletterns: Positives Self-Talk ("Ich bin sicher, ich kann das")', checked: false },
        { text: 'Nach dem Versuch (egal ob Erfolg/Fail): Notiert, wie es sich anfühlte', checked: false },
        { text: 'Wiederholung: 2x pro Training einen "Angst-Boulder"', checked: false }
      ]
    }
  }
];

// ============================================================================
// LESSONS PAGE
// ============================================================================
function LessonsPage({ onSelectLesson }) {
  const categories = [...new Set(lessonsData.map(l => l.category))];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-stone-800 mb-6 flex items-center gap-2">
        <BookOpen className="text-teal-500" />
        Boulder-Lektionen
      </h1>
      
      {categories.map(category => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-bold text-stone-700 mb-4 border-b-2 border-teal-500 pb-2">
            {category}
          </h2>
          <div className="space-y-3">
            {lessonsData.filter(l => l.category === category).map(lesson => (
              <button
                key={lesson.id}
                onClick={() => onSelectLesson(lesson)}
                className="w-full bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all text-left hover:bg-stone-50"
              >
                <div className="flex items-start gap-3">
                  <lesson.icon className="text-teal-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-stone-800 mb-1">{lesson.title}</h3>
                    <p className="text-sm text-stone-600">{lesson.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// LESSON DETAIL PAGE
// ============================================================================
function LessonDetailPage({ lesson, onBack, onSaveTask }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-teal-500 hover:text-teal-600 mb-6"
      >
        <ChevronLeft size={20} />
        <span>Zurück zu Lektionen</span>
      </button>

      {/* Lesson Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-start gap-4 mb-4">
          <lesson.icon className="text-teal-500 flex-shrink-0" size={32} />
          <div>
            <div className="text-sm text-stone-500 mb-1">{lesson.category}</div>
            <h1 className="text-2xl font-bold text-stone-800">{lesson.title}</h1>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="prose prose-stone max-w-none">
          {lesson.content.split('\n').map((paragraph, idx) => {
            if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
              return (
                <h3 key={idx} className="text-lg font-bold text-stone-800 mt-4 mb-2">
                  {paragraph.replace(/\*\*/g, '')}
                </h3>
              );
            }
            if (paragraph.trim().startsWith('⚠️')) {
              return (
                <div key={idx} className="bg-orange-50 border-l-4 border-orange-500 p-4 my-3">
                  <p className="text-stone-700">{paragraph}</p>
                </div>
              );
            }
            if (paragraph.trim().startsWith('-')) {
              return (
                <li key={idx} className="ml-4 text-stone-700 my-1">
                  {paragraph.substring(1).trim()}
                </li>
              );
            }
            if (paragraph.trim()) {
              return (
                <p key={idx} className="text-stone-700 mb-3 leading-relaxed">
                  {paragraph}
                </p>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* Practical Task */}
      {lesson.task && (
        <div className="bg-gradient-to-br from-teal-50 to-orange-50 rounded-lg shadow-md p-6 border-2 border-teal-500">
          <h2 className="text-xl font-bold text-stone-800 mb-2 flex items-center gap-2">
            <Target className="text-teal-500" />
            {lesson.task.title}
          </h2>
          <p className="text-stone-700 mb-4">{lesson.task.description}</p>
          
          <div className="bg-white rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-stone-800 mb-3">Worauf du achten musst:</h3>
            <ul className="space-y-2">
              {lesson.task.checklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-stone-700">
                  <span className="text-teal-500 mt-1">□</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => onSaveTask({
              lessonTitle: lesson.title,
              taskTitle: lesson.task.title,
              description: lesson.task.description,
              checklist: lesson.task.checklist.map(item => ({ ...item, checked: false }))
            })}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Save size={20} />
            Fürs Training speichern
          </button>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// TRAINING PLAN PAGE
// ============================================================================
function TrainingPlanPage({ tasks, onRemoveTask, onToggleChecklistItem }) {
  if (tasks.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-stone-800 mb-6 flex items-center gap-2">
          <ListTodo className="text-teal-500" />
          Mein nächstes Training
        </h1>
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <Target size={64} className="mx-auto mb-4 text-stone-300" />
          <p className="text-stone-600 text-lg">
            Speichere Aufgaben aus den Lektionen, um dein Training zu planen!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-stone-800 mb-6 flex items-center gap-2">
        <ListTodo className="text-teal-500" />
        Mein nächstes Training
      </h1>

      <div className="mb-4 bg-teal-50 rounded-lg p-4 border border-teal-200">
        <p className="text-stone-700 text-sm">
          <strong>{tasks.length}</strong> Aufgabe{tasks.length !== 1 ? 'n' : ''} gespeichert
        </p>
      </div>

      <div className="space-y-4">
        {tasks.map(task => (
          <div key={task.id} className="bg-white rounded-lg shadow-md p-5 relative">
            {/* Remove Button */}
            <button
              onClick={() => onRemoveTask(task.id)}
              className="absolute top-3 right-3 text-stone-400 hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Task Header */}
            <div className="mb-3 pr-8">
              <div className="text-xs text-teal-600 font-semibold mb-1">
                Aus Lektion: {task.lessonTitle}
              </div>
              <h3 className="text-lg font-bold text-stone-800">{task.taskTitle}</h3>
              <p className="text-sm text-stone-600 mt-1">{task.description}</p>
            </div>

            {/* Checklist */}
            <div className="bg-stone-50 rounded-lg p-4">
              <h4 className="font-semibold text-stone-700 mb-3 text-sm">Worauf achten:</h4>
              <div className="space-y-2">
                {task.checklist.map((item, idx) => (
                  <label key={idx} className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={item.checked || false}
                      onChange={() => onToggleChecklistItem(task.id, idx)}
                      className="mt-1 w-4 h-4 text-teal-500 rounded focus:ring-teal-500"
                    />
                    <span className={`text-sm ${item.checked ? 'line-through text-stone-400' : 'text-stone-700'}`}>
                      {item.text}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Progress */}
            <div className="mt-3">
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-stone-200 rounded-full h-2">
                  <div
                    className="bg-teal-500 h-2 rounded-full transition-all"
                    style={{
                      width: `${(task.checklist.filter(i => i.checked).length / task.checklist.length) * 100}%`
                    }}
                  />
                </div>
                <span className="text-xs text-stone-600 font-semibold">
                  {task.checklist.filter(i => i.checked).length}/{task.checklist.length}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// GEAR GUIDE PAGE
// ============================================================================
function GearGuidePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-stone-800 mb-6 flex items-center gap-2">
        <ShoppingBag className="text-teal-500" />
        Ausrüstungs-Guide
      </h1>

      {/* Shoes Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
          <Footprints className="text-orange-500" />
          Kletterschuhe
        </h2>
        
        {/* Shoe Types SVG */}
        <div className="mb-4 bg-stone-50 rounded-lg p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            {/* Neutral Shoe */}
            <div>
              <svg viewBox="0 0 100 60" className="w-full mb-2">
                <path d="M 10 40 L 90 40 L 85 20 L 15 20 Z" fill="#14b8a6" stroke="#0f766e" strokeWidth="2"/>
                <ellipse cx="80" cy="40" rx="8" ry="10" fill="#44403c"/>
              </svg>
              <div className="text-xs font-semibold text-stone-700">Neutral</div>
              <div className="text-xs text-stone-500">Anfänger</div>
            </div>
            
            {/* Moderate Shoe */}
            <div>
              <svg viewBox="0 0 100 60" className="w-full mb-2">
                <path d="M 10 40 Q 50 45 90 35 L 85 18 Q 50 23 15 18 Z" fill="#f97316" stroke="#c2410c" strokeWidth="2"/>
                <ellipse cx="80" cy="35" rx="8" ry="10" fill="#44403c"/>
              </svg>
              <div className="text-xs font-semibold text-stone-700">Moderat</div>
              <div className="text-xs text-stone-500">Fortgeschritten</div>
            </div>
            
            {/* Aggressive Shoe */}
            <div>
              <svg viewBox="0 0 100 60" className="w-full mb-2">
                <path d="M 10 35 Q 50 50 90 25 L 85 15 Q 50 30 15 15 Z" fill="#14b8a6" stroke="#0f766e" strokeWidth="2"/>
                <ellipse cx="78" cy="28" rx="8" ry="10" fill="#44403c"/>
              </svg>
              <div className="text-xs font-semibold text-stone-700">Aggressiv</div>
              <div className="text-xs text-stone-500">Experten</div>
            </div>
          </div>
        </div>

        <div className="space-y-3 text-stone-700">
          <div className="flex items-start gap-3">
            <Check size={20} className="text-teal-500 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Passform ist wichtiger als Marke:</strong> Probiere verschiedene Modelle. La Sportiva passt schmalen Füßen, Scarpa eher breiten.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Check size={20} className="text-teal-500 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Eng, aber nicht schmerzhaft:</strong> Zehen sollten leicht gekrümmt sein.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Check size={20} className="text-teal-500 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Anfänger-Empfehlungen:</strong> La Sportiva Tarantula, Scarpa Origin, Five Ten Rogue
            </div>
          </div>
        </div>
      </div>

      {/* Chalk Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
          <Hand className="text-orange-500" />
          Chalk & Zubehör
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-stone-800 mb-2">Chalk-Arten:</h3>
            <ul className="space-y-1 text-sm text-stone-700">
              <li>• <strong>Powder:</strong> Klassisch, staubt</li>
              <li>• <strong>Block:</strong> Weniger Staub</li>
              <li>• <strong>Liquid:</strong> Sauber & lange haltend ⭐</li>
            </ul>
          </div>
          
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-stone-800 mb-2">Weiteres Equipment:</h3>
            <ul className="space-y-1 text-sm text-stone-700">
              <li>• <strong>Bürste:</strong> Griffe reinigen</li>
              <li>• <strong>Tape:</strong> Haut schützen</li>
              <li>• <strong>Handcreme:</strong> Nach dem Training</li>
            </ul>
          </div>
        </div>

        <div className="bg-teal-50 border-l-4 border-teal-500 p-4">
          <p className="text-sm text-stone-700">
            <strong>Tipp:</strong> Viele Hallen erlauben nur Liquid Chalk wegen Staubentwicklung. Frage vorher!
          </p>
        </div>
      </div>

      {/* Budget Guide */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-stone-800 mb-4">💰 Budget-Guide für Anfänger</h2>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center bg-white rounded-lg p-3">
            <span className="font-semibold text-stone-700">Kletterschuhe</span>
            <span className="text-stone-600">60-120€</span>
          </div>
          <div className="flex justify-between items-center bg-white rounded-lg p-3">
            <span className="font-semibold text-stone-700">Liquid Chalk</span>
            <span className="text-stone-600">10-15€</span>
          </div>
          <div className="flex justify-between items-center bg-white rounded-lg p-3">
            <span className="font-semibold text-stone-700">Bürste</span>
            <span className="text-stone-600">5-10€</span>
          </div>
          <div className="flex justify-between items-center bg-white rounded-lg p-3">
            <span className="font-semibold text-stone-700">Halleneintritt (Monatskarte)</span>
            <span className="text-stone-600">50-80€</span>
          </div>
          <div className="border-t-2 border-orange-300 pt-3 flex justify-between items-center">
            <span className="font-bold text-stone-800 text-lg">Gesamt (Start)</span>
            <span className="font-bold text-orange-600 text-lg">~85€ + Eintritt</span>
          </div>
        </div>

        <p className="text-sm text-stone-600 mt-4 text-center">
          Tipp: Viele Hallen verleihen Schuhe (2-5€) – perfekt zum Testen!
        </p>
      </div>
    </div>
  );
}

export default App;

