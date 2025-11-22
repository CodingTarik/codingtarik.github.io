import React, { useState, useEffect } from 'react';
import { Book, Clock, Users, Flame, PlusCircle, ChevronRight, Search, Star, Plus, X, Edit2 } from 'lucide-react';
import toast from 'react-hot-toast';

// Sample recipes with full instructions
const SAMPLE_RECIPES = [
  {
    id: 'r1',
    title: 'Perfekte Tomatensauce',
    time: '30 Min',
    difficulty: 'Einfach',
    servings: 4,
    image: '🍅',
    tags: ['Basis', 'Vegan', 'Italienisch'],
    ingredients: [
      '800g Dosentomaten (Gute Qualität!)',
      '1 Zwiebel',
      '2 Knoblauchzehen',
      '4 EL Olivenöl',
      'Salz, Pfeffer',
      '1 Prise Zucker',
      'Frisches Basilikum'
    ],
    steps: [
      'Vorbereitung (5 Min): Zwiebel schälen und in sehr feine Würfel schneiden (ca. 3-5mm). Knoblauch schälen und fein hacken oder durch eine Knoblauchpresse drücken. Tipp: Je feiner geschnitten, desto besser löst sich alles in der Sauce auf.',
      'Anschwitzen beginnen (2 Min): Olivenöl in einem mittelgroßen Topf bei mittlerer Hitze erwärmen. Das Öl sollte warm sein, aber nicht rauchen. Test: Ein Stück Zwiebel ins Öl geben - wenn es leicht brutzelt, ist die Temperatur perfekt.',
      'Zwiebeln dünsten (5-7 Min): Zwiebeln ins Öl geben und langsam glasig dünsten. WICHTIG: Sie sollen weich und durchsichtig werden, aber NICHT braun! Braune Zwiebeln würden der Sauce einen bitteren Geschmack geben. Gelegentlich umrühren.',
      'Knoblauch hinzufügen (1 Min): Gehackten Knoblauch zu den Zwiebeln geben und nur kurz (max. 1 Minute) mitdünsten. Knoblauch verbrennt schnell und wird dann bitter! Die Küche sollte jetzt fantastisch riechen.',
      'Tomaten unterrühren (1 Min): Dosentomaten komplett in den Topf geben. Die leere Dose mit etwa 50ml Wasser ausschwenken und ebenfalls dazu geben - so verschwendest du nichts! Mit einem Holzlöffel die Tomaten etwas zerdrücken.',
      'Würzen (1 Min): Mit ca. 1 TL Salz, frisch gemahlenem Pfeffer und 1 Prise Zucker würzen. Der Zucker neutralisiert die Säure der Tomaten und macht den Geschmack runder. Gut umrühren.',
      'Köcheln lassen (20-30 Min): Hitze auf niedrig stellen. Die Sauce sollte nur noch leicht blubbern, nicht kochen. Gelegentlich umrühren, damit nichts anbrennt. Je länger sie köchelt, desto intensiver wird der Geschmack. Die Sauce dickt dabei ein und wird cremiger.',
      'Finale & Abschmecken (2 Min): Frisches Basilikum in Streifen schneiden und unterrühren. Probiere die Sauce und korrigiere bei Bedarf mit Salz, Pfeffer oder noch einer Prise Zucker. Fertig! Die Sauce ist nun bereit für Pasta, Pizza oder als Basis für andere Gerichte.'
    ],
    isFavorite: false
  },
  {
    id: 'r2',
    title: 'Rührei "Low & Slow"',
    time: '10 Min',
    difficulty: 'Mittel',
    servings: 2,
    image: '🥚',
    tags: ['Frühstück', 'Protein', 'Klassiker'],
    ingredients: [
      '4 Eier (Größe M/L)',
      '20g Kalte Butter',
      'Salz',
      'Schnittlauch (optional)'
    ],
    steps: [
      'Vorbereitung (1 Min): Eier in eine Schüssel aufschlagen und mit einer Gabel oder einem Schneebesen gut verquirlen, bis Eigelb und Eiweiß komplett vermischt sind. Noch NICHT salzen - Salz vor dem Kochen macht die Eier wässrig! Schnittlauch fein hacken und beiseite stellen.',
      'Pfanne vorbereiten (1 Min): Eine beschichtete Pfanne bei MITTLERER Hitze erwärmen (Stufe 5-6 von 10). NICHT zu heiß! Die kalte Butter in die Pfanne geben und langsam schmelzen lassen. Die Butter sollte leicht schäumen, aber auf keinen Fall braun werden.',
      'Eier hineingeben (30 Sek): Sobald die Butter vollständig geschmolzen ist (aber noch nicht gebräunt), die verquirlten Eier in die Pfanne gießen. Sie sollten sanft zu brutzeln beginnen.',
      'Das Geheimnis: Langsam rühren (3-4 Min): Mit einem Holzlöffel oder Silikon-Spatel in großen, langsamen Bewegungen rühren. Vom Rand zur Mitte schieben. NICHT schnell rühren wie beim Scrambled Eggs! Die Eier sollten cremige "Flocken" bilden. Geduld ist hier alles.',
      'Perfektes Timing - Vom Herd nehmen (30 Sek): WICHTIG! Nimm die Pfanne vom Herd, wenn die Eier noch LEICHT flüssig aussehen (etwa zu 80% gestockt). Sie garen in der heißen Pfanne nach und werden dann perfekt cremig. Wenn du wartest, bis sie "fertig" aussehen, werden sie trocken und gummiartig!',
      'Finale & Servieren (30 Sek): Jetzt erst mit etwas Salz würzen und gut unterrühren. Auf einen vorgewärmten Teller geben und frischen Schnittlauch darüber streuen. Sofort servieren! Rührei wartet nicht. Genieße die perfekte cremige Konsistenz.'
    ],
    isFavorite: true
  }
];

const RecipeBook = () => {
  const [savedRecipes, setSavedRecipes] = useState(() => {
    const saved = localStorage.getItem('cookbuddy_saved_recipes');
    return saved ? JSON.parse(saved) : SAMPLE_RECIPES;
  });
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    time: '',
    difficulty: 'Einfach',
    servings: 4,
    image: '🍽️',
    tags: [],
    ingredients: [''],
    steps: ['']
  });

  useEffect(() => {
    localStorage.setItem('cookbuddy_saved_recipes', JSON.stringify(savedRecipes));
  }, [savedRecipes]);

  const addToShoppingList = (ingredients) => {
    const existingList = JSON.parse(localStorage.getItem('cookbuddy_shopping_list') || '[]');
    const newItems = ingredients.map(ing => ({
      id: Date.now() + Math.random(),
      text: ing,
      completed: false,
      category: 'recipe-import'
    }));
    
    localStorage.setItem('cookbuddy_shopping_list', JSON.stringify([...existingList, ...newItems]));
    toast.success(`${ingredients.length} Zutaten zur Einkaufsliste hinzugefügt!`);
  };

  const toggleFavorite = (recipeId) => {
    setSavedRecipes(savedRecipes.map(r => 
      r.id === recipeId ? { ...r, isFavorite: !r.isFavorite } : r
    ));
  };

  const deleteRecipe = (recipeId) => {
    if (confirm('Rezept wirklich löschen?')) {
      setSavedRecipes(savedRecipes.filter(r => r.id !== recipeId));
      setSelectedRecipe(null);
      toast.success('Rezept gelöscht');
    }
  };

  const addCustomRecipe = () => {
    if (!newRecipe.title.trim()) {
      toast.error('Bitte gib einen Titel ein');
      return;
    }
    
    const recipe = {
      ...newRecipe,
      id: `custom_${Date.now()}`,
      ingredients: newRecipe.ingredients.filter(i => i.trim()),
      steps: newRecipe.steps.filter(s => s.trim()),
      isFavorite: false
    };
    
    setSavedRecipes([...savedRecipes, recipe]);
    setShowAddModal(false);
    setNewRecipe({
      title: '',
      time: '',
      difficulty: 'Einfach',
      servings: 4,
      image: '🍽️',
      tags: [],
      ingredients: [''],
      steps: ['']
    });
    toast.success('Rezept hinzugefügt!');
  };

  const filteredRecipes = savedRecipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const favoriteRecipes = filteredRecipes.filter(r => r.isFavorite);
  const otherRecipes = filteredRecipes.filter(r => !r.isFavorite);

  // Recipe Detail View
  if (selectedRecipe) {
    return (
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="h-48 bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-6xl relative">
          {selectedRecipe.image}
          <button
            onClick={() => toggleFavorite(selectedRecipe.id)}
            className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <Star 
              className={`w-6 h-6 ${selectedRecipe.isFavorite ? 'fill-amber-500 text-amber-500' : 'text-gray-400'}`}
            />
          </button>
        </div>
        
        <div className="p-6">
          <button 
            onClick={() => setSelectedRecipe(null)}
            className="text-amber-600 hover:text-amber-700 font-medium mb-4 flex items-center gap-1"
          >
            ← Zurück zum Kochbuch
          </button>

          <div className="flex items-start justify-between mb-2">
            <h2 className="text-3xl font-bold">{selectedRecipe.title}</h2>
            {selectedRecipe.id.startsWith('custom_') && (
              <button
                onClick={() => deleteRecipe(selectedRecipe.id)}
                className="text-red-500 hover:text-red-600 p-2"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          
          <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {selectedRecipe.time}</span>
            <span className="flex items-center gap-1"><Flame className="w-4 h-4" /> {selectedRecipe.difficulty}</span>
            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {selectedRecipe.servings} Port.</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Zutaten</h3>
                <button 
                  onClick={() => addToShoppingList(selectedRecipe.ingredients)}
                  className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full hover:bg-amber-200 transition-colors flex items-center gap-1"
                >
                  <PlusCircle className="w-3 h-3" /> Alles zur Liste
                </button>
              </div>
              <ul className="space-y-2">
                {selectedRecipe.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Zubereitung</h3>
              {selectedRecipe.steps && selectedRecipe.steps.length > 0 ? (
                <ol className="space-y-3">
                  {selectedRecipe.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      <span className="flex-1 pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-amber-800 dark:text-amber-200 text-sm">
                  Die vollständige Anleitung findest du in der entsprechenden Lektion!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Add Recipe Modal
  if (showAddModal) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Neues Rezept hinzufügen</h2>
            <button onClick={() => setShowAddModal(false)} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Titel</label>
              <input
                type="text"
                value={newRecipe.title}
                onChange={(e) => setNewRecipe({...newRecipe, title: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
                placeholder="z.B. Spaghetti Carbonara"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Zeit</label>
                <input
                  type="text"
                  value={newRecipe.time}
                  onChange={(e) => setNewRecipe({...newRecipe, time: e.target.value})}
                  className="w-full p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
                  placeholder="30 Min"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Schwierigkeit</label>
                <select
                  value={newRecipe.difficulty}
                  onChange={(e) => setNewRecipe({...newRecipe, difficulty: e.target.value})}
                  className="w-full p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
                >
                  <option>Einfach</option>
                  <option>Mittel</option>
                  <option>Schwer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Portionen</label>
                <input
                  type="number"
                  value={newRecipe.servings}
                  onChange={(e) => setNewRecipe({...newRecipe, servings: parseInt(e.target.value)})}
                  className="w-full p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Zutaten</label>
              {newRecipe.ingredients.map((ing, idx) => (
                <div key={idx} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={ing}
                    onChange={(e) => {
                      const updated = [...newRecipe.ingredients];
                      updated[idx] = e.target.value;
                      setNewRecipe({...newRecipe, ingredients: updated});
                    }}
                    className="flex-1 p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
                    placeholder="z.B. 200g Spaghetti"
                  />
                  <button
                    onClick={() => setNewRecipe({...newRecipe, ingredients: newRecipe.ingredients.filter((_, i) => i !== idx)})}
                    className="text-red-500 hover:text-red-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
              <button
                onClick={() => setNewRecipe({...newRecipe, ingredients: [...newRecipe.ingredients, '']})}
                className="text-sm text-amber-600 hover:text-amber-700 flex items-center gap-1"
              >
                <Plus className="w-4 h-4" /> Zutat hinzufügen
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Zubereitung</label>
              {newRecipe.steps.map((step, idx) => (
                <div key={idx} className="flex gap-2 mb-2">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-2">
                    {idx + 1}
                  </span>
                  <textarea
                    value={step}
                    onChange={(e) => {
                      const updated = [...newRecipe.steps];
                      updated[idx] = e.target.value;
                      setNewRecipe({...newRecipe, steps: updated});
                    }}
                    className="flex-1 p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
                    placeholder="Beschreibe diesen Schritt..."
                    rows={2}
                  />
                  <button
                    onClick={() => setNewRecipe({...newRecipe, steps: newRecipe.steps.filter((_, i) => i !== idx)})}
                    className="text-red-500 hover:text-red-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
              <button
                onClick={() => setNewRecipe({...newRecipe, steps: [...newRecipe.steps, '']})}
                className="text-sm text-amber-600 hover:text-amber-700 flex items-center gap-1"
              >
                <Plus className="w-4 h-4" /> Schritt hinzufügen
              </button>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={addCustomRecipe}
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-medium"
              >
                Rezept speichern
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="px-6 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Abbrechen
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Recipe List View
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Book className="w-8 h-8 text-amber-500" />
            Mein Kochbuch
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Deine gesammelten Rezepte und Erfolge</p>
        </div>
        <div className="text-center bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="text-2xl font-bold text-amber-500">{savedRecipes.length}</div>
          <div className="text-xs uppercase tracking-wider text-gray-500">Rezepte</div>
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rezepte durchsuchen..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Neues Rezept
        </button>
      </div>

      {favoriteRecipes.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
            Favoriten
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {favoriteRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} onClick={() => setSelectedRecipe(recipe)} />
            ))}
          </div>
        </div>
      )}

      {otherRecipes.length > 0 && (
        <div>
          <h3 className="text-xl font-bold mb-4">Alle Rezepte</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {otherRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} onClick={() => setSelectedRecipe(recipe)} />
            ))}
          </div>
        </div>
      )}

      {filteredRecipes.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p>Keine Rezepte gefunden.</p>
        </div>
      )}
    </div>
  );
};

const RecipeCard = ({ recipe, onClick }) => (
  <div 
    onClick={onClick}
    className="group bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-amber-200 dark:hover:border-amber-800 flex gap-4"
  >
    <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-4xl group-hover:scale-105 transition-transform relative">
      {recipe.image}
      {recipe.isFavorite && (
        <Star className="absolute -top-1 -right-1 w-5 h-5 fill-amber-500 text-amber-500" />
      )}
    </div>
    <div className="flex-1 py-1">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-lg group-hover:text-amber-600 transition-colors">{recipe.title}</h3>
        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-amber-500" />
      </div>
      <div className="flex flex-wrap gap-2 mt-2 mb-3">
        {recipe.tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3 text-xs text-gray-500">
        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {recipe.time}</span>
        <span className="flex items-center gap-1"><Flame className="w-3 h-3" /> {recipe.difficulty}</span>
      </div>
    </div>
  </div>
);

export default RecipeBook;
