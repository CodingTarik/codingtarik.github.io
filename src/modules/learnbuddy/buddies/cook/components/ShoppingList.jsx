import React, { useState, useEffect } from 'react';
import { Trash2, Plus, Check, ShoppingBag, RefreshCw, Filter, Package, Apple, Milk, Beef, Wheat } from 'lucide-react';
import toast from 'react-hot-toast';

const CATEGORIES = [
  { id: 'produce', name: 'Obst & Gemüse', icon: Apple, color: 'green' },
  { id: 'dairy', name: 'Milchprodukte', icon: Milk, color: 'blue' },
  { id: 'meat', name: 'Fleisch & Fisch', icon: Beef, color: 'red' },
  { id: 'grains', name: 'Getreide & Backwaren', icon: Wheat, color: 'amber' },
  { id: 'pantry', name: 'Vorrat', icon: Package, color: 'stone' },
  { id: 'general', name: 'Sonstiges', icon: ShoppingBag, color: 'gray' }
];

const ShoppingList = () => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('cookbuddy_shopping_list');
    return saved ? JSON.parse(saved) : [];
  });
  const [newItem, setNewItem] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showCategorySelect, setShowCategorySelect] = useState(false);
  
  useEffect(() => {
    localStorage.setItem('cookbuddy_shopping_list', JSON.stringify(items));
  }, [items]);

  const addItem = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    
    setItems([
      ...items,
      {
        id: Date.now(),
        text: newItem,
        completed: false,
        category: selectedCategory,
        addedAt: new Date().toISOString()
      }
    ]);
    setNewItem('');
    toast.success('Zutat hinzugefügt');
  };

  const toggleItem = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
    toast.success('Zutat entfernt');
  };

  const clearCompleted = () => {
    const count = items.filter(i => i.completed).length;
    setItems(items.filter(item => !item.completed));
    toast.success(`${count} erledigte Einträge entfernt`);
  };

  const clearAll = () => {
    if (confirm('Wirklich alle Einträge löschen?')) {
      setItems([]);
      toast.success('Liste geleert');
    }
  };

  const exportList = () => {
    const text = items
      .filter(i => !i.completed)
      .map(i => `☐ ${i.text}`)
      .join('\n');
    
    navigator.clipboard.writeText(text);
    toast.success('Liste in Zwischenablage kopiert');
  };

  const filteredItems = filterCategory === 'all' 
    ? items 
    : items.filter(i => i.category === filterCategory);

  const groupedItems = CATEGORIES.reduce((acc, cat) => {
    acc[cat.id] = filteredItems.filter(i => i.category === cat.id);
    return acc;
  }, {});

  const stats = {
    total: items.length,
    completed: items.filter(i => i.completed).length,
    pending: items.filter(i => !i.completed).length
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-8 h-8" />
              <div>
                <h2 className="text-2xl font-bold">Einkaufsliste</h2>
                <p className="opacity-90 text-sm">Organisiert nach Kategorien</p>
              </div>
            </div>
            <div className="flex gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">{stats.pending}</div>
                <div className="text-xs opacity-75">Offen</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.completed}</div>
                <div className="text-xs opacity-75">Erledigt</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Add Item Form */}
          <form onSubmit={addItem} className="mb-6">
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Zutat hinzufügen (z.B. 500g Mehl)"
                className="flex-1 p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button 
                type="button"
                onClick={() => setShowCategorySelect(!showCategorySelect)}
                className="px-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                {CATEGORIES.find(c => c.id === selectedCategory)?.icon && 
                  React.createElement(CATEGORIES.find(c => c.id === selectedCategory).icon, { className: 'w-5 h-5' })
                }
              </button>
              <button 
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 rounded-lg transition-colors font-medium"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* Category Selector */}
            {showCategorySelect && (
              <div className="grid grid-cols-3 gap-2 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setShowCategorySelect(false);
                    }}
                    className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                      selectedCategory === cat.id
                        ? `bg-${cat.color}-100 dark:bg-${cat.color}-900/30 border-2 border-${cat.color}-500`
                        : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <cat.icon className="w-4 h-4" />
                    <span className="text-xs font-medium">{cat.name}</span>
                  </button>
                ))}
              </div>
            )}
          </form>

          {/* Filter & Actions */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filterCategory === 'all'
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Alle ({items.length})
              </button>
              {CATEGORIES.map(cat => {
                const count = items.filter(i => i.category === cat.id).length;
                if (count === 0) return null;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setFilterCategory(cat.id)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors flex items-center gap-1 ${
                      filterCategory === cat.id
                        ? `bg-${cat.color}-500 text-white`
                        : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    <cat.icon className="w-3 h-3" />
                    {count}
                  </button>
                );
              })}
            </div>
            <div className="flex gap-2">
              <button
                onClick={exportList}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500"
              >
                Exportieren
              </button>
              {items.length > 0 && (
                <button
                  onClick={clearAll}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500"
                >
                  Alle löschen
                </button>
              )}
            </div>
          </div>

          {/* Items by Category */}
          {items.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <ShoppingBag className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p className="font-medium">Deine Liste ist noch leer.</p>
              <p className="text-sm mt-1">Füge Zutaten hinzu oder importiere sie aus einem Rezept!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {CATEGORIES.map(cat => {
                const categoryItems = groupedItems[cat.id];
                if (categoryItems.length === 0) return null;

                const completed = categoryItems.filter(i => i.completed).length;
                const total = categoryItems.length;

                return (
                  <div key={cat.id}>
                    <div className="flex items-center gap-2 mb-3">
                      <cat.icon className={`w-5 h-5 text-${cat.color}-600`} />
                      <h3 className="font-semibold text-lg">{cat.name}</h3>
                      <span className="text-xs text-gray-500">
                        {completed}/{total}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {categoryItems.map(item => (
                        <div 
                          key={item.id}
                          className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                            item.completed 
                              ? 'bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-800 opacity-60' 
                              : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm'
                          }`}
                        >
                          <button
                            onClick={() => toggleItem(item.id)}
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 ${
                              item.completed
                                ? 'bg-green-500 border-green-500 text-white'
                                : 'border-gray-300 dark:border-gray-600 hover:border-amber-500'
                            }`}
                          >
                            {item.completed && <Check className="w-4 h-4" />}
                          </button>
                          
                          <span className={`flex-1 ${item.completed ? 'line-through' : ''}`}>
                            {item.text}
                          </span>
                          
                          <button
                            onClick={() => deleteItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Clear Completed Button */}
          {items.some(i => i.completed) && (
            <button
              onClick={clearCompleted}
              className="mt-6 flex items-center gap-2 text-sm text-gray-500 hover:text-amber-600 transition-colors mx-auto"
            >
              <RefreshCw className="w-4 h-4" />
              {stats.completed} erledigte Einträge entfernen
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
