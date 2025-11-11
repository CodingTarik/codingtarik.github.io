import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Save, X, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import {
  loadDayPlans,
  updateDayPlan,
  getDayPlan,
  getWeekPlan,
  getAllWeeks,
  getWeekKey
} from '../utils/storage';

const DAYS_OF_WEEK = [
  { id: 0, name: { en: 'Sunday', de: 'Sonntag' }, short: { en: 'Sun', de: 'So' } },
  { id: 1, name: { en: 'Monday', de: 'Montag' }, short: { en: 'Mon', de: 'Mo' } },
  { id: 2, name: { en: 'Tuesday', de: 'Dienstag' }, short: { en: 'Tue', de: 'Di' } },
  { id: 3, name: { en: 'Wednesday', de: 'Mittwoch' }, short: { en: 'Wed', de: 'Mi' } },
  { id: 4, name: { en: 'Thursday', de: 'Donnerstag' }, short: { en: 'Thu', de: 'Do' } },
  { id: 5, name: { en: 'Friday', de: 'Freitag' }, short: { en: 'Fri', de: 'Fr' } },
  { id: 6, name: { en: 'Saturday', de: 'Samstag' }, short: { en: 'Sat', de: 'Sa' } }
];

const CATEGORIES = [
  { id: 'work', name: { en: 'Work', de: 'Arbeit' }, color: '#3b82f6', emoji: '💼' },
  { id: 'study', name: { en: 'Study', de: 'Lernen' }, color: '#8b5cf6', emoji: '📚' },
  { id: 'exercise', name: { en: 'Exercise', de: 'Sport' }, color: '#10b981', emoji: '🏃' },
  { id: 'meal', name: { en: 'Meal', de: 'Mahlzeit' }, color: '#f59e0b', emoji: '🍽️' },
  { id: 'sleep', name: { en: 'Sleep', de: 'Schlaf' }, color: '#6366f1', emoji: '😴' },
  { id: 'break', name: { en: 'Break', de: 'Pause' }, color: '#14b8a6', emoji: '☕' },
  { id: 'social', name: { en: 'Social', de: 'Sozial' }, color: '#ec4899', emoji: '👥' },
  { id: 'hobby', name: { en: 'Hobby', de: 'Hobby' }, color: '#f43f5e', emoji: '🎨' },
  { id: 'chores', name: { en: 'Chores', de: 'Haushalt' }, color: '#64748b', emoji: '🧹' },
  { id: 'other', name: { en: 'Other', de: 'Sonstiges' }, color: '#94a3b8', emoji: '📝' }
];

// Generate 30-minute slots from 00:00 to 23:30 (48 slots)
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    slots.push(`${String(hour).padStart(2, '0')}:00`);
    slots.push(`${String(hour).padStart(2, '0')}:30`);
  }
  return slots;
};

const TIME_SLOTS = generateTimeSlots();

// Helper functions for week handling
const getWeekNumber = (date) => {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
};

const getDateFromWeek = (year, week) => {
  const simple = new Date(year, 0, 1 + (week - 1) * 7);
  const dow = simple.getDay();
  const ISOweekStart = simple;
  if (dow <= 4) {
    ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
  } else {
    ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
  }
  return ISOweekStart;
};

function DayPlanner() {
  const { language } = useLanguage();
  const [viewMode, setViewMode] = useState('day'); // 'day' or 'week'
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const [currentWeek, setCurrentWeek] = useState(getWeekKey());
  const [slots, setSlots] = useState(getDayPlan(selectedDay, currentWeek));
  const [weekPlan, setWeekPlan] = useState(getWeekPlan(currentWeek));
  const [editingSlot, setEditingSlot] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    startSlot: 0,
    endSlot: 1,
    category: 'work',
    activity: '',
    color: '',
    dayOfWeek: new Date().getDay()
  });

  useEffect(() => {
    setSlots(getDayPlan(selectedDay, currentWeek));
    setWeekPlan(getWeekPlan(currentWeek));
  }, [selectedDay, currentWeek]);

  const getCategoryInfo = (categoryId) => {
    return CATEGORIES.find(c => c.id === categoryId) || CATEGORIES[CATEGORIES.length - 1];
  };

  const formatTime = (slotIndex) => {
    return TIME_SLOTS[slotIndex] || '00:00';
  };

  const handleAddActivity = () => {
    if (formData.activity.trim() && formData.startSlot < formData.endSlot) {
      const targetDay = formData.dayOfWeek;
      const targetWeek = currentWeek;
      const targetSlots = getDayPlan(targetDay, targetWeek);
      const newSlots = [...targetSlots];
      const categoryInfo = getCategoryInfo(formData.category);
      const activityId = Date.now();
      
      // Add activity to all slots in range with same ID for grouping
      for (let i = formData.startSlot; i < formData.endSlot; i++) {
        if (!newSlots[i]) {
          newSlots[i] = [];
        }
        newSlots[i].push({
          id: activityId,
          activity: formData.activity,
          category: formData.category,
          color: formData.color || categoryInfo.color,
          emoji: categoryInfo.emoji,
          startSlot: formData.startSlot,
          endSlot: formData.endSlot
        });
      }
      
      updateDayPlan(targetDay, newSlots, targetWeek);
      
      // Update current view if it matches
      if (targetDay === selectedDay && targetWeek === currentWeek) {
        setSlots(newSlots);
      }
      if (targetWeek === currentWeek) {
        setWeekPlan(getWeekPlan(currentWeek));
      }
      
      setFormData({
        startSlot: 0,
        endSlot: 1,
        category: 'work',
        activity: '',
        color: '',
        dayOfWeek: new Date().getDay()
      });
      setShowAddForm(false);
    }
  };

  const handleDeleteActivity = (slotIndex, activityId, dayOfWeek = null, weekKey = null) => {
    const targetDay = dayOfWeek !== null ? dayOfWeek : selectedDay;
    const targetWeek = weekKey || currentWeek;
    const targetSlots = getDayPlan(targetDay, targetWeek);
    const newSlots = [...targetSlots];
    const activity = targetSlots[slotIndex]?.find(a => a.id === activityId);
    
    if (activity && activity.startSlot !== undefined && activity.endSlot !== undefined) {
      // Remove activity from all slots in its range
      for (let i = activity.startSlot; i < activity.endSlot; i++) {
        if (newSlots[i]) {
          newSlots[i] = newSlots[i].filter(a => a.id !== activityId);
        }
      }
    } else {
      // Fallback: remove from current slot only
      if (newSlots[slotIndex]) {
        newSlots[slotIndex] = newSlots[slotIndex].filter(a => a.id !== activityId);
      }
    }
    
    updateDayPlan(targetDay, newSlots, targetWeek);
    
    // Update current view if it matches
    if (targetDay === selectedDay && targetWeek === currentWeek) {
      setSlots(newSlots);
    }
    if (targetWeek === currentWeek) {
      setWeekPlan(getWeekPlan(currentWeek));
    }
  };

  const handleClearSlot = (slotIndex) => {
    const newSlots = [...slots];
    newSlots[slotIndex] = [];
    setSlots(newSlots);
    updateDayPlan(selectedDay, newSlots);
  };

  const getSlotHeight = (slotIndex) => {
    const activities = slots[slotIndex] || [];
    return Math.max(60, activities.length * 50 + 20);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {language === 'en' ? 'Day Planner' : 'Tagesplan'}
        </h1>
        <div className="flex gap-2">
          <div className="flex gap-2 bg-stone-100 dark:bg-stone-700 rounded-lg p-1">
            <button
              onClick={() => setViewMode('day')}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                viewMode === 'day'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                  : 'text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-600'
              }`}
            >
              {language === 'en' ? 'Day' : 'Tag'}
            </button>
            <button
              onClick={() => setViewMode('week')}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                viewMode === 'week'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                  : 'text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-600'
              }`}
            >
              {language === 'en' ? 'Week' : 'Woche'}
            </button>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-2 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
          >
            <Plus size={20} />
            {language === 'en' ? 'Add Activity' : 'Aktivität hinzufügen'}
          </button>
        </div>
      </div>

      {/* Week Navigation */}
      <div className="mb-6 bg-white dark:bg-stone-800 rounded-2xl p-4 border-2 border-indigo-200 dark:border-indigo-800 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => {
              const current = new Date(currentWeek);
              current.setDate(current.getDate() - 7);
              setCurrentWeek(getWeekKey(current));
            }}
            className="p-2 bg-stone-100 dark:bg-stone-700 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-600 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="text-center">
            <div className="text-lg font-bold text-stone-800 dark:text-stone-100">
              {new Date(currentWeek).toLocaleDateString(language === 'en' ? 'en-US' : 'de-DE', { 
                month: 'long', 
                year: 'numeric' 
              })}
            </div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              {language === 'en' ? 'Week of' : 'Woche vom'} {new Date(currentWeek).toLocaleDateString(language === 'en' ? 'en-US' : 'de-DE', { 
                day: 'numeric', 
                month: 'short' 
              })}
            </div>
          </div>
          <button
            onClick={() => {
              const current = new Date(currentWeek);
              current.setDate(current.getDate() + 7);
              setCurrentWeek(getWeekKey(current));
            }}
            className="p-2 bg-stone-100 dark:bg-stone-700 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-600 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Day Selector (only for day view) */}
        {viewMode === 'day' && (
          <div className="flex gap-2 justify-center">
            {DAYS_OF_WEEK.map((day) => (
              <motion.button
                key={day.id}
                onClick={() => setSelectedDay(day.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedDay === day.id
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                    : 'bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 dark:hover:bg-stone-600'
                }`}
              >
                <div className="text-xs">{day.short[language]}</div>
                <div className="text-sm font-semibold">{day.name[language]}</div>
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Add Activity Form */}
      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-indigo-300 dark:border-indigo-700 shadow-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100">
                {language === 'en' ? 'Add Activity' : 'Aktivität hinzufügen'}
              </h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="p-1 hover:bg-stone-100 dark:hover:bg-stone-700 rounded"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Activity' : 'Aktivität'}
                </label>
                <input
                  type="text"
                  value={formData.activity}
                  onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                  placeholder={language === 'en' ? 'e.g., Morning Run, Breakfast, Meeting...' : 'z.B. Morgenlauf, Frühstück, Meeting...'}
                  className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                    {language === 'en' ? 'Day of Week' : 'Wochentag'}
                  </label>
                  <select
                    value={formData.dayOfWeek}
                    onChange={(e) => setFormData({ ...formData, dayOfWeek: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                  >
                    {DAYS_OF_WEEK.map((day) => (
                      <option key={day.id} value={day.id}>{day.name[language]}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                    {language === 'en' ? 'Start Time' : 'Startzeit'}
                  </label>
                  <select
                    value={formData.startSlot}
                    onChange={(e) => setFormData({ ...formData, startSlot: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                  >
                    {TIME_SLOTS.map((time, index) => (
                      <option key={index} value={index}>{time}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                    {language === 'en' ? 'End Time' : 'Endzeit'}
                  </label>
                  <select
                    value={formData.endSlot}
                    onChange={(e) => setFormData({ ...formData, endSlot: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                  >
                    {TIME_SLOTS.map((time, index) => (
                      <option key={index} value={index}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Category' : 'Kategorie'}
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {CATEGORIES.map((category) => {
                    const isSelected = formData.category === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setFormData({ ...formData, category: category.id, color: category.color })}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          isSelected
                            ? 'border-indigo-500 bg-indigo-100 dark:bg-indigo-900/30'
                            : 'border-stone-200 dark:border-stone-700 hover:border-indigo-300'
                        }`}
                      >
                        <div className="text-2xl mb-1">{category.emoji}</div>
                        <div className={`text-xs font-medium ${isSelected ? 'text-indigo-700 dark:text-indigo-300' : 'text-stone-700 dark:text-stone-300'}`}>
                          {category.name[language]}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
              <button
                onClick={handleAddActivity}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Save size={18} />
                {language === 'en' ? 'Add Activity' : 'Aktivität hinzufügen'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Week View */}
      {viewMode === 'week' && (
        <div className="bg-white dark:bg-stone-800 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800 shadow-xl overflow-hidden">
          <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Calendar size={24} />
              {language === 'en' ? 'Week View' : 'Wochenansicht'}
            </h2>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-max">
              <table className="w-full">
                <thead>
                  <tr className="bg-stone-100 dark:bg-stone-700/50">
                    <th className="p-3 text-left text-sm font-semibold text-stone-700 dark:text-stone-300 sticky left-0 bg-stone-100 dark:bg-stone-700/50 z-20 min-w-[80px]">
                      {language === 'en' ? 'Time' : 'Zeit'}
                    </th>
                    {DAYS_OF_WEEK.map((day) => {
                      const dayDate = new Date(currentWeek);
                      dayDate.setDate(dayDate.getDate() + day.id - 1);
                      return (
                        <th key={day.id} className="p-3 text-center text-sm font-semibold text-stone-700 dark:text-stone-300 min-w-[200px]">
                          <div>{day.name[language]}</div>
                          <div className="text-xs font-normal text-stone-500 dark:text-stone-400">
                            {dayDate.toLocaleDateString(language === 'en' ? 'en-US' : 'de-DE', { day: 'numeric', month: 'short' })}
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {TIME_SLOTS.map((time, slotIndex) => {
                    const isEven = slotIndex % 2 === 0;
                    return (
                      <tr
                        key={slotIndex}
                        className={`border-b border-stone-200 dark:border-stone-700 ${
                          isEven ? 'bg-stone-50 dark:bg-stone-900/50' : 'bg-white dark:bg-stone-800'
                        }`}
                      >
                        <td className="p-2 text-center text-xs font-semibold text-stone-600 dark:text-stone-400 sticky left-0 bg-stone-100 dark:bg-stone-700/50 z-10 border-r border-stone-200 dark:border-stone-700">
                          {time}
                        </td>
                        {DAYS_OF_WEEK.map((day) => {
                          const daySlots = getDayPlan(day.id, currentWeek);
                          const activities = daySlots[slotIndex] || [];
                          
                          // Filter out activities that are not in their first slot
                          const displayActivities = activities.filter(activity => {
                            if (activity.startSlot !== undefined) {
                              return slotIndex === activity.startSlot;
                            }
                            return true;
                          });
                          
                          const isContinuationSlot = activities.some(activity => 
                            activity.startSlot !== undefined && 
                            slotIndex > activity.startSlot && 
                            slotIndex < activity.endSlot
                          );
                          
                          return (
                            <td key={day.id} className="p-1 min-h-[50px] align-top">
                              {isContinuationSlot ? (
                                <div 
                                  className="w-full h-full min-h-[40px] flex items-center px-2 rounded"
                                  style={{ 
                                    backgroundColor: `${activities.find(a => 
                                      a.startSlot !== undefined && slotIndex > a.startSlot && slotIndex < a.endSlot
                                    )?.color || '#6366f1'}15`,
                                    borderLeft: `3px solid ${activities.find(a => 
                                      a.startSlot !== undefined && slotIndex > a.startSlot && slotIndex < a.endSlot
                                    )?.color || '#6366f1'}`
                                  }}
                                >
                                  <div className="text-xs text-stone-500 dark:text-stone-400 italic truncate">
                                    {activities.find(a => 
                                      a.startSlot !== undefined && slotIndex > a.startSlot && slotIndex < a.endSlot
                                    )?.activity || ''}
                                  </div>
                                </div>
                              ) : displayActivities.length === 0 ? (
                                <div className="text-xs text-stone-300 dark:text-stone-600 italic h-full min-h-[40px] flex items-center justify-center">
                                  -
                                </div>
                              ) : (
                                <div className="space-y-1">
                                  {displayActivities.map((activity) => {
                                    const categoryInfo = getCategoryInfo(activity.category);
                                    const duration = activity.endSlot && activity.startSlot ? (activity.endSlot - activity.startSlot) * 30 : 30;
                                    return (
                                      <motion.div
                                        key={activity.id}
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="p-1.5 rounded border-2 text-xs"
                                        style={{
                                          borderColor: activity.color || categoryInfo.color,
                                          backgroundColor: `${activity.color || categoryInfo.color}20`
                                        }}
                                      >
                                        <div className="flex items-center gap-1">
                                          <span>{activity.emoji || categoryInfo.emoji}</span>
                                          <span className="flex-1 truncate font-medium text-stone-800 dark:text-stone-100">
                                            {activity.activity}
                                          </span>
                                        </div>
                                        {duration > 30 && (
                                          <div className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                                            {duration} {language === 'en' ? 'min' : 'Min'}
                                          </div>
                                        )}
                                        <button
                                          onClick={() => handleDeleteActivity(slotIndex, activity.id, day.id, currentWeek)}
                                          className="mt-1 p-0.5 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors"
                                        >
                                          <Trash2 size={10} className="text-red-600 dark:text-red-400" />
                                        </button>
                                      </motion.div>
                                    );
                                  })}
                                </div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Day Schedule */}
      {viewMode === 'day' && (
      <div className="bg-white dark:bg-stone-800 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800 shadow-xl overflow-hidden">
        <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Calendar size={24} />
            {DAYS_OF_WEEK[selectedDay].name[language]}
          </h2>
        </div>
        <div className="overflow-y-auto max-h-[600px]">
          <div className="grid grid-cols-1">
            {TIME_SLOTS.map((time, slotIndex) => {
              const activities = slots[slotIndex] || [];
              const isEven = slotIndex % 2 === 0;
              const isLast = slotIndex === TIME_SLOTS.length - 1;
              
              // Filter out activities that are not in their first slot (for multi-slot activities)
              const displayActivities = activities.filter(activity => {
                if (activity.startSlot !== undefined) {
                  return slotIndex === activity.startSlot;
                }
                return true;
              });
              
              // Check if this slot is part of a multi-slot activity (but not the first)
              const isContinuationSlot = activities.some(activity => 
                activity.startSlot !== undefined && 
                slotIndex > activity.startSlot && 
                slotIndex < activity.endSlot
              );
              
              return (
                <motion.div
                  key={slotIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: slotIndex * 0.01 }}
                  className={`flex border-b border-stone-200 dark:border-stone-700 ${
                    isEven ? 'bg-stone-50 dark:bg-stone-900/50' : 'bg-white dark:bg-stone-800'
                  } hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors ${
                    isContinuationSlot ? 'border-l-4' : ''
                  }`}
                  style={isContinuationSlot ? {
                    borderLeftColor: activities.find(a => 
                      a.startSlot !== undefined && slotIndex > a.startSlot && slotIndex < a.endSlot
                    )?.color || '#6366f1'
                  } : {}}
                >
                  {/* Time Label */}
                  <div className="w-20 p-3 flex items-center justify-center border-r border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-700/50 sticky left-0 z-10">
                    <span className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                      {time}
                    </span>
                  </div>
                  
                  {/* Activities */}
                  <div className="flex-1 p-2 min-h-[60px]">
                    {isContinuationSlot ? (
                      <div className="h-full flex items-center">
                        <div 
                          className="w-full h-full flex items-center px-2"
                          style={{ 
                            backgroundColor: `${activities.find(a => 
                              a.startSlot !== undefined && slotIndex > a.startSlot && slotIndex < a.endSlot
                            )?.color || '#6366f1'}15`
                          }}
                        >
                          <div className="text-xs text-stone-500 dark:text-stone-400 italic">
                            {activities.find(a => 
                              a.startSlot !== undefined && slotIndex > a.startSlot && slotIndex < a.endSlot
                            )?.activity || ''}
                          </div>
                        </div>
                      </div>
                    ) : displayActivities.length === 0 ? (
                      <div className="text-xs text-stone-400 dark:text-stone-500 italic h-full flex items-center">
                        {language === 'en' ? 'Free' : 'Frei'}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {displayActivities.map((activity, actIndex) => {
                          const categoryInfo = getCategoryInfo(activity.category);
                          const duration = activity.endSlot && activity.startSlot ? (activity.endSlot - activity.startSlot) * 30 : 30;
                          const isMultiSlot = activity.endSlot && activity.startSlot && (activity.endSlot - activity.startSlot) > 1;
                          
                          return (
                            <motion.div
                              key={`${activity.id}-${slotIndex}`}
                              initial={{ scale: 0.9, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              className="flex items-center gap-2 p-2 rounded-lg border-2 shadow-sm"
                              style={{
                                borderColor: activity.color || categoryInfo.color,
                                backgroundColor: `${activity.color || categoryInfo.color}20`
                              }}
                            >
                              <span className="text-lg">{activity.emoji || categoryInfo.emoji}</span>
                              <span className="flex-1 text-sm font-medium text-stone-800 dark:text-stone-100">
                                {activity.activity}
                              </span>
                              {isMultiSlot && (
                                <span className="text-xs px-2 py-1 rounded bg-white dark:bg-stone-700 text-stone-600 dark:text-stone-400">
                                  {formatTime(activity.startSlot)} - {formatTime(activity.endSlot)}
                                </span>
                              )}
                              <span className="text-xs px-2 py-1 rounded bg-white dark:bg-stone-700 text-stone-600 dark:text-stone-400">
                                {duration} {language === 'en' ? 'min' : 'Min'}
                              </span>
                              <button
                                onClick={() => handleDeleteActivity(slotIndex, activity.id)}
                                className="p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors"
                              >
                                <Trash2 size={14} className="text-red-600 dark:text-red-400" />
                              </button>
                            </motion.div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default DayPlanner;

