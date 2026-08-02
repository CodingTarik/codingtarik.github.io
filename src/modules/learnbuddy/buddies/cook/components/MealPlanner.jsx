import React, { useState, useEffect } from 'react';
import { Calendar, Plus, Trash2, ChefHat, Clock, Users } from 'lucide-react';
import toast from 'react-hot-toast';

const DAYS = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
const MEAL_TIMES = ['Frühstück', 'Mittagessen', 'Abendessen', 'Snack'];

const MealPlanner = () => {
  const [mealPlan, setMealPlan] = useState(() => {
    const saved = localStorage.getItem('cookbuddy_meal_plan');
    return saved ? JSON.parse(saved) : {};
  });
  const [savedRecipes, setSavedRecipes] = useState(() => {
    const saved = localStorage.getItem('cookbuddy_saved_recipes');
    return saved ? JSON.parse(saved) : [];
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [currentWeek, setCurrentWeek] = useState(0); // 0 = current week, 1 = next week, etc.

  useEffect(() => {
    localStorage.setItem('cookbuddy_meal_plan', JSON.stringify(mealPlan));
  }, [mealPlan]);

  const getWeekKey = (weekOffset) => {
    const now = new Date();
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - now.getDay() + 1 + (weekOffset * 7)); // Monday
    return weekStart.toISOString().split('T')[0];
  };

  const addMeal = (day, mealTime, recipe) => {
    const weekKey = getWeekKey(currentWeek);
    const key = `${weekKey}_${day}_${mealTime}`;
    setMealPlan({
      ...mealPlan,
      [key]: {
        recipe,
        day,
        mealTime,
        week: weekKey
      }
    });
    setShowAddModal(false);
    setSelectedSlot(null);
    toast.success(`${recipe.title} zu ${day} ${mealTime} hinzugefügt`);
  };

  const removeMeal = (day, mealTime) => {
    const weekKey = getWeekKey(currentWeek);
    const key = `${weekKey}_${day}_${mealTime}`;
    const newPlan = { ...mealPlan };
    delete newPlan[key];
    setMealPlan(newPlan);
    toast.success('Mahlzeit entfernt');
  };

  const getMeal = (day, mealTime) => {
    const weekKey = getWeekKey(currentWeek);
    const key = `${weekKey}_${day}_${mealTime}`;
    return mealPlan[key];
  };

  const exportToShoppingList = () => {
    const weekKey = getWeekKey(currentWeek);
    const weekMeals = Object.values(mealPlan).filter(m => m.week === weekKey);
    
    const allIngredients = weekMeals.flatMap(meal => 
      meal.recipe.ingredients.map(ing => ({
        id: Date.now() + Math.random(),
        text: `${ing} (${meal.recipe.title})`,
        completed: false,
        category: 'recipe-import'
      }))
    );

    const existingList = JSON.parse(localStorage.getItem('cookbuddy_shopping_list') || '[]');
    localStorage.setItem('cookbuddy_shopping_list', JSON.stringify([...existingList, ...allIngredients]));
    toast.success(`${allIngredients.length} Zutaten zur Einkaufsliste hinzugefügt!`);
  };

  const getWeekStats = () => {
    const weekKey = getWeekKey(currentWeek);
    const weekMeals = Object.values(mealPlan).filter(m => m.week === weekKey);
    return {
      total: weekMeals.length,
      recipes: new Set(weekMeals.map(m => m.recipe.id)).size
    };
  };

  const stats = getWeekStats();

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Calendar className="w-8 h-8 text-amber-500" />
            <div>
              <h2 className="text-2xl font-bold">Wochenplan</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Plane deine Mahlzeiten für die Woche
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-center bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-lg">
              <div className="text-2xl font-bold text-amber-500">{stats.total}</div>
              <div className="text-xs text-gray-500">Mahlzeiten</div>
            </div>
            <button
              onClick={exportToShoppingList}
              disabled={stats.total === 0}
              className="bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium"
            >
              Zur Einkaufsliste
            </button>
          </div>
        </div>

        {/* Week Navigation */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => setCurrentWeek(currentWeek - 1)}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            ← Vorherige Woche
          </button>
          <div className="font-semibold">
            {currentWeek === 0 ? 'Diese Woche' : 
             currentWeek === 1 ? 'Nächste Woche' :
             currentWeek === -1 ? 'Letzte Woche' :
             `Woche ${currentWeek > 0 ? '+' : ''}${currentWeek}`}
          </div>
          <button
            onClick={() => setCurrentWeek(currentWeek + 1)}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            Nächste Woche →
          </button>
        </div>

        {/* Meal Plan Grid */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-200 dark:border-gray-700 p-2 bg-gray-50 dark:bg-gray-700 sticky left-0 z-10">
                  Tag
                </th>
                {MEAL_TIMES.map(mealTime => (
                  <th key={mealTime} className="border border-gray-200 dark:border-gray-700 p-2 bg-gray-50 dark:bg-gray-700 min-w-[200px]">
                    {mealTime}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DAYS.map(day => (
                <tr key={day}>
                  <td className="border border-gray-200 dark:border-gray-700 p-2 font-semibold bg-gray-50 dark:bg-gray-700 sticky left-0 z-10">
                    {day}
                  </td>
                  {MEAL_TIMES.map(mealTime => {
                    const meal = getMeal(day, mealTime);
                    return (
                      <td key={mealTime} className="border border-gray-200 dark:border-gray-700 p-2">
                        {meal ? (
                          <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg relative group">
                            <button
                              onClick={() => removeMeal(day, mealTime)}
                              className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-600"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                            <div className="text-2xl mb-1">{meal.recipe.image}</div>
                            <div className="font-medium text-sm">{meal.recipe.title}</div>
                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                              <Clock className="w-3 h-3" />
                              {meal.recipe.time}
                            </div>
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              setSelectedSlot({ day, mealTime });
                              setShowAddModal(true);
                            }}
                            className="w-full h-24 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-colors flex items-center justify-center text-gray-400 hover:text-amber-500"
                          >
                            <Plus className="w-6 h-6" />
                          </button>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Meal Modal */}
        {showAddModal && selectedSlot && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">
                  Mahlzeit für {selectedSlot.day} - {selectedSlot.mealTime}
                </h3>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setSelectedSlot(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {savedRecipes.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <ChefHat className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p>Keine Rezepte vorhanden</p>
                  <p className="text-sm mt-1">Füge erst Rezepte hinzu, um sie zu planen</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {savedRecipes.map(recipe => (
                    <button
                      key={recipe.id}
                      onClick={() => addMeal(selectedSlot.day, selectedSlot.mealTime, recipe)}
                      className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-colors text-left"
                    >
                      <div className="text-3xl mb-2">{recipe.image}</div>
                      <div className="font-medium">{recipe.title}</div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {recipe.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {recipe.servings}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealPlanner;


