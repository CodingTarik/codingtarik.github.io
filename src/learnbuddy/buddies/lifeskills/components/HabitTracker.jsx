import React, { useState, useEffect } from 'react';
import { 
  Plus, Trash2, Edit2, Save, X, Flame, Calendar, TrendingUp, 
  Trophy, Star, Award, Zap, Target, ChevronLeft, ChevronRight,
  Dumbbell, BookOpen, Heart, Coffee, Music, Code, Gamepad2, 
  Bike, Moon, Sun, Utensils, Shirt, GraduationCap, Briefcase,
  Home, Car, Plane, Camera, Paintbrush, Palette, Lightbulb
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import {
  loadHabits,
  addHabit,
  updateHabit,
  deleteHabit,
  logHabit,
  unlogHabit,
  isHabitLogged,
  getHabitStats,
  loadHabitLogs
} from '../utils/storage';

const COLORS = [
  '#eab308', '#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#f43f5e', '#14b8a6'
];

const HABIT_ICONS = [
  { name: 'Dumbbell', component: Dumbbell, label: { en: 'Exercise', de: 'Sport' } },
  { name: 'BookOpen', component: BookOpen, label: { en: 'Reading', de: 'Lesen' } },
  { name: 'Heart', component: Heart, label: { en: 'Health', de: 'Gesundheit' } },
  { name: 'Coffee', component: Coffee, label: { en: 'Morning Routine', de: 'Morgenroutine' } },
  { name: 'Music', component: Music, label: { en: 'Music', de: 'Musik' } },
  { name: 'Code', component: Code, label: { en: 'Coding', de: 'Programmieren' } },
  { name: 'Gamepad2', component: Gamepad2, label: { en: 'Gaming', de: 'Gaming' } },
  { name: 'Bike', component: Bike, label: { en: 'Cycling', de: 'Radfahren' } },
  { name: 'Moon', component: Moon, label: { en: 'Sleep', de: 'Schlaf' } },
  { name: 'Sun', component: Sun, label: { en: 'Wake Up', de: 'Aufstehen' } },
  { name: 'Utensils', component: Utensils, label: { en: 'Cooking', de: 'Kochen' } },
  { name: 'Shirt', component: Shirt, label: { en: 'Fashion', de: 'Mode' } },
  { name: 'GraduationCap', component: GraduationCap, label: { en: 'Study', de: 'Lernen' } },
  { name: 'Briefcase', component: Briefcase, label: { en: 'Work', de: 'Arbeit' } },
  { name: 'Home', component: Home, label: { en: 'Home', de: 'Zuhause' } },
  { name: 'Car', component: Car, label: { en: 'Travel', de: 'Reisen' } },
  { name: 'Plane', component: Plane, label: { en: 'Travel', de: 'Reisen' } },
  { name: 'Camera', component: Camera, label: { en: 'Photography', de: 'Fotografie' } },
  { name: 'Paintbrush', component: Paintbrush, label: { en: 'Art', de: 'Kunst' } },
  { name: 'Palette', component: Palette, label: { en: 'Design', de: 'Design' } },
  { name: 'Lightbulb', component: Lightbulb, label: { en: 'Ideas', de: 'Ideen' } },
  { name: 'Target', component: Target, label: { en: 'Goals', de: 'Ziele' } },
  { name: 'Zap', component: Zap, label: { en: 'Energy', de: 'Energie' } }
];

function HabitTracker() {
  const { language } = useLanguage();
  const [habits, setHabits] = useState(loadHabits());
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    color: COLORS[0],
    frequency: 'daily',
    icon: 'Dumbbell',
    weeklyDays: [] // For weekly habits: [0=Sunday, 1=Monday, ..., 6=Saturday]
  });
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [viewMode, setViewMode] = useState('calendar'); // 'calendar', 'list', or 'month'
  const [calendarOffset, setCalendarOffset] = useState(0); // Days to go back from today
  const [monthView, setMonthView] = useState(new Date()); // Current month for month view

  useEffect(() => {
    setHabits(loadHabits());
  }, [selectedDate, calendarOffset, monthView]);

  const handleAdd = () => {
    if (formData.name.trim()) {
      addHabit(formData);
      setHabits(loadHabits());
      setFormData({
        name: '',
        description: '',
        color: COLORS[0],
        frequency: 'daily',
        icon: 'Dumbbell',
        weeklyDays: []
      });
      setShowAddForm(false);
    }
  };

  const handleEdit = (habit) => {
    setEditingId(habit.id);
    setFormData({
      name: habit.name,
      description: habit.description || '',
      color: habit.color,
      frequency: habit.frequency,
      icon: habit.icon || 'Dumbbell',
      weeklyDays: habit.weeklyDays || []
    });
    setShowAddForm(true);
  };

  const handleUpdate = () => {
    if (formData.name.trim()) {
      updateHabit(editingId, formData);
      setHabits(loadHabits());
      setEditingId(null);
      setFormData({
        name: '',
        description: '',
        color: COLORS[0],
        frequency: 'daily',
        icon: 'Dumbbell',
        weeklyDays: []
      });
      setShowAddForm(false);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm(language === 'en' ? 'Delete this habit?' : 'Gewohnheit löschen?')) {
      deleteHabit(id);
      setHabits(loadHabits());
    }
  };

  const handleToggle = (habitId, date = null) => {
    const targetDate = date || selectedDate;
    if (isHabitLogged(habitId, targetDate)) {
      unlogHabit(habitId, targetDate);
    } else {
      logHabit(habitId, targetDate);
    }
    setHabits(loadHabits()); // Refresh to update stats
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setEditingId(null);
    setFormData({
      name: '',
      description: '',
      color: COLORS[0],
      frequency: 'daily',
      icon: 'Dumbbell',
      weeklyDays: []
    });
  };

  // Get dates for calendar view (configurable range, can go into future)
  const getCalendarDates = (days = 90) => {
    const dates = [];
    const startOffset = calendarOffset + days - 1;
    for (let i = startOffset; i >= calendarOffset; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  // Get dates for month view
  const getMonthDates = (date = new Date()) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - startDate.getDay()); // Start from Sunday
    
    const dates = [];
    const current = new Date(startDate);
    for (let i = 0; i < 42; i++) { // 6 weeks * 7 days
      dates.push(current.toISOString().split('T')[0]);
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  const calendarDates = getCalendarDates(90);
  const monthDates = getMonthDates(monthView);

  // Check if a date is valid for a weekly habit
  const isDateValidForHabit = (habit, date) => {
    if (habit.frequency === 'daily') return true;
    if (habit.frequency === 'weekly') {
      if (!habit.weeklyDays || habit.weeklyDays.length === 0) return true; // No restriction
      const dateObj = new Date(date);
      const dayOfWeek = dateObj.getDay(); // 0 = Sunday, 6 = Saturday
      return habit.weeklyDays.includes(dayOfWeek);
    }
    return true;
  };

  // Gamification: Calculate level and XP
  const getGamificationStats = (habitId) => {
    const stats = getHabitStats(habitId);
    const totalCompletions = stats.totalCompletions;
    
    // XP system: 10 XP per completion, bonus for streaks
    const baseXP = totalCompletions * 10;
    const streakBonus = Math.floor(stats.streak / 7) * 50; // Bonus every week
    const totalXP = baseXP + streakBonus;
    
    // Level system: Each level requires more XP
    // Level 1: 0-99, Level 2: 100-299, Level 3: 300-599, etc.
    let level = 1;
    let xpForCurrentLevel = 0;
    let xpForNextLevel = 100;
    
    for (let l = 1; l <= 100; l++) {
      const xpNeeded = l === 1 ? 0 : 100 * Math.pow(1.5, l - 2);
      const xpForLevel = l === 1 ? 100 : 100 * Math.pow(1.5, l - 1);
      
      if (totalXP >= xpNeeded && totalXP < xpNeeded + xpForLevel) {
        level = l;
        xpForCurrentLevel = totalXP - xpNeeded;
        xpForNextLevel = xpForLevel;
        break;
      }
    }
    
    // Achievements
    const achievements = [];
    if (stats.streak >= 7) achievements.push({ name: { en: 'Week Warrior', de: 'Wochenkrieger' }, icon: Trophy, color: '#f59e0b' });
    if (stats.streak >= 30) achievements.push({ name: { en: 'Monthly Master', de: 'Monatsmeister' }, icon: Star, color: '#8b5cf6' });
    if (stats.streak >= 100) achievements.push({ name: { en: 'Century Champion', de: 'Hundert-Tage-Champion' }, icon: Award, color: '#ec4899' });
    if (totalCompletions >= 50) achievements.push({ name: { en: 'Half Century', de: 'Halbes Jahrhundert' }, icon: Target, color: '#10b981' });
    if (totalCompletions >= 100) achievements.push({ name: { en: 'Centurion', de: 'Zenturio' }, icon: Zap, color: '#f43f5e' });
    
    return {
      level,
      totalXP,
      xpForCurrentLevel,
      xpForNextLevel,
      progress: (xpForCurrentLevel / xpForNextLevel) * 100,
      achievements
    };
  };

  const getIconComponent = (iconName) => {
    const icon = HABIT_ICONS.find(i => i.name === iconName);
    return icon ? icon.component : Dumbbell;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
          {language === 'en' ? 'Habit Tracker' : 'Gewohnheiten Tracker'}
        </h1>
        <div className="flex gap-2">
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                viewMode === 'calendar'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 dark:hover:bg-stone-600'
              }`}
            >
              {language === 'en' ? '90 Days' : '90 Tage'}
            </button>
            <button
              onClick={() => setViewMode('month')}
              className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                viewMode === 'month'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 dark:hover:bg-stone-600'
              }`}
            >
              {language === 'en' ? 'Month' : 'Monat'}
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                viewMode === 'list'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 dark:hover:bg-stone-600'
              }`}
            >
              {language === 'en' ? 'List' : 'Liste'}
            </button>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
          >
            <Plus size={20} />
            {language === 'en' ? 'Add Habit' : 'Gewohnheit hinzufügen'}
          </button>
        </div>
      </div>

      {/* Date Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
          {language === 'en' ? 'Select Date' : 'Datum auswählen'}
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
        />
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <div className="mb-6 bg-white dark:bg-stone-800 rounded-2xl p-6 border border-stone-200 dark:border-stone-700 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100">
              {editingId
                ? language === 'en' ? 'Edit Habit' : 'Gewohnheit bearbeiten'
                : language === 'en' ? 'Add New Habit' : 'Neue Gewohnheit hinzufügen'}
            </h2>
            <button
              onClick={handleCancel}
              className="p-1 hover:bg-stone-100 dark:hover:bg-stone-700 rounded"
            >
              <X size={20} />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                {language === 'en' ? 'Habit Name' : 'Gewohnheitsname'}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={language === 'en' ? 'e.g., Exercise, Read, Meditate' : 'z.B. Sport, Lesen, Meditieren'}
                className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                {language === 'en' ? 'Description (optional)' : 'Beschreibung (optional)'}
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder={language === 'en' ? 'Add a description...' : 'Beschreibung hinzufügen...'}
                rows="3"
                className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                {language === 'en' ? 'Frequency' : 'Häufigkeit'}
              </label>
              <select
                value={formData.frequency}
                onChange={(e) => setFormData({ ...formData, frequency: e.target.value, weeklyDays: e.target.value === 'daily' ? [] : formData.weeklyDays })}
                className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
              >
                <option value="daily">{language === 'en' ? 'Daily' : 'Täglich'}</option>
                <option value="weekly">{language === 'en' ? 'Weekly' : 'Wöchentlich'}</option>
              </select>
            </div>
            {formData.frequency === 'weekly' && (
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Days of Week' : 'Wochentage'}
                </label>
                <div className="grid grid-cols-7 gap-2">
                  {[
                    { day: 0, label: { en: 'Sun', de: 'So' } },
                    { day: 1, label: { en: 'Mon', de: 'Mo' } },
                    { day: 2, label: { en: 'Tue', de: 'Di' } },
                    { day: 3, label: { en: 'Wed', de: 'Mi' } },
                    { day: 4, label: { en: 'Thu', de: 'Do' } },
                    { day: 5, label: { en: 'Fri', de: 'Fr' } },
                    { day: 6, label: { en: 'Sat', de: 'Sa' } }
                  ].map(({ day, label }) => (
                    <button
                      key={day}
                      onClick={() => {
                        const newDays = formData.weeklyDays.includes(day)
                          ? formData.weeklyDays.filter(d => d !== day)
                          : [...formData.weeklyDays, day];
                        setFormData({ ...formData, weeklyDays: newDays });
                      }}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        formData.weeklyDays.includes(day)
                          ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/30 font-semibold'
                          : 'border-stone-200 dark:border-stone-700 hover:border-yellow-300'
                      }`}
                    >
                      <div className={`text-sm ${formData.weeklyDays.includes(day) ? 'text-yellow-700 dark:text-yellow-300' : 'text-stone-700 dark:text-stone-300'}`}>
                        {label[language]}
                      </div>
                    </button>
                  ))}
                </div>
                {formData.weeklyDays.length === 0 && (
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-2">
                    {language === 'en' ? 'Select at least one day' : 'Wähle mindestens einen Tag'}
                  </p>
                )}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                {language === 'en' ? 'Icon' : 'Icon'}
              </label>
              <div className="grid grid-cols-6 md:grid-cols-8 gap-2">
                {HABIT_ICONS.map((icon) => {
                  const IconComponent = icon.component;
                  return (
                    <button
                      key={icon.name}
                      onClick={() => setFormData({ ...formData, icon: icon.name })}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        formData.icon === icon.name
                          ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/30 scale-110'
                          : 'border-stone-200 dark:border-stone-700 hover:border-yellow-300 hover:scale-105'
                      }`}
                      title={icon.label[language]}
                    >
                      <IconComponent 
                        size={24} 
                        className={`${
                          formData.icon === icon.name
                            ? 'text-yellow-600 dark:text-yellow-400'
                            : 'text-stone-600 dark:text-stone-400'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                {language === 'en' ? 'Color' : 'Farbe'}
              </label>
              <div className="flex gap-2">
                {COLORS.map((color) => (
                  <button
                    key={color}
                    onClick={() => setFormData({ ...formData, color })}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      formData.color === color
                        ? 'border-stone-800 dark:border-stone-200 scale-110'
                        : 'border-stone-300 dark:border-stone-600 hover:scale-105'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={editingId ? handleUpdate : handleAdd}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Save size={18} />
              {editingId
                ? language === 'en' ? 'Update' : 'Aktualisieren'
                : language === 'en' ? 'Add Habit' : 'Gewohnheit hinzufügen'}
            </button>
          </div>
        </div>
      )}

      {/* Calendar View */}
      {viewMode === 'calendar' && (
        <div className="bg-white dark:bg-stone-800 rounded-2xl p-6 border border-stone-200 dark:border-stone-700 shadow-lg">
          {/* Calendar Navigation */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setCalendarOffset(calendarOffset - 90)}
              className="p-2 bg-stone-100 dark:bg-stone-700 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-600 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="text-sm font-medium text-stone-700 dark:text-stone-300 text-center">
              {calendarOffset === 0 
                ? language === 'en' ? 'Last 90 days' : 'Letzte 90 Tage'
                : calendarOffset > 0
                ? language === 'en' ? `${calendarOffset + 1}-${calendarOffset + 90} days ago` : `${calendarOffset + 1}-${calendarOffset + 90} Tage zurück`
                : language === 'en' ? `In ${Math.abs(calendarOffset)}-${Math.abs(calendarOffset + 89)} days` : `In ${Math.abs(calendarOffset)}-${Math.abs(calendarOffset + 89)} Tagen`}
            </div>
            <button
              onClick={() => setCalendarOffset(calendarOffset + 90)}
              className="p-2 bg-stone-100 dark:bg-stone-700 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-600 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-max">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-2 text-sm font-semibold text-stone-700 dark:text-stone-300 sticky left-0 bg-white dark:bg-stone-800 z-10 min-w-[200px]">
                    {language === 'en' ? 'Habit' : 'Gewohnheit'}
                  </th>
                  {calendarDates.map((date) => {
                    const dateObj = new Date(date);
                    const isToday = date === new Date().toISOString().split('T')[0];
                    return (
                      <th
                        key={date}
                        className={`text-center p-2 text-xs font-medium ${
                          isToday
                            ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                            : 'text-stone-600 dark:text-stone-400'
                        }`}
                      >
                        <div>{dateObj.getDate()}</div>
                        <div className="text-[10px]">
                          {dateObj.toLocaleDateString(language === 'en' ? 'en-US' : 'de-DE', { weekday: 'short' })}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {habits.map((habit) => {
                  const stats = getHabitStats(habit.id);
                  const gamification = getGamificationStats(habit.id);
                  const IconComponent = getIconComponent(habit.icon);
                  return (
                    <tr key={habit.id} className="border-t border-stone-200 dark:border-stone-700">
                      <td className="p-3 sticky left-0 bg-white dark:bg-stone-800 z-10 min-w-[250px]">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: habit.color + '20' }}
                          >
                            <IconComponent 
                              size={20} 
                              style={{ color: habit.color }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-stone-800 dark:text-stone-100 truncate">
                              {habit.name}
                            </div>
                            <div className="flex items-center gap-2 mt-1 flex-wrap">
                              <div className="flex items-center gap-1">
                                <Flame size={12} className="text-orange-500" />
                                <span className="text-xs text-stone-600 dark:text-stone-400">
                                  {stats.streak}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star size={12} className="text-yellow-500" />
                                <span className="text-xs text-stone-600 dark:text-stone-400">
                                  Lv.{gamification.level}
                                </span>
                              </div>
                              {gamification.achievements.length > 0 && (
                                <div className="flex items-center gap-1">
                                  <Trophy size={12} className="text-amber-500" />
                                  <span className="text-xs text-stone-600 dark:text-stone-400">
                                    {gamification.achievements.length}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <button
                              onClick={() => handleEdit(habit)}
                              className="p-1 hover:bg-stone-100 dark:hover:bg-stone-700 rounded"
                            >
                              <Edit2 size={14} className="text-stone-600 dark:text-stone-400" />
                            </button>
                            <button
                              onClick={() => handleDelete(habit.id)}
                              className="p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded"
                            >
                              <Trash2 size={14} className="text-red-600 dark:text-red-400" />
                            </button>
                          </div>
                        </div>
                      </td>
                      {calendarDates.map((date) => {
                        const logged = isHabitLogged(habit.id, date);
                        const isValid = isDateValidForHabit(habit, date);
                        const isToday = date === new Date().toISOString().split('T')[0];
                        return (
                          <td key={date} className="p-2 text-center">
                            <button
                              onClick={() => isValid && handleToggle(habit.id, date)}
                              disabled={!isValid}
                              className={`w-8 h-8 rounded-full transition-all ${
                                !isValid
                                  ? 'bg-stone-100 dark:bg-stone-800 opacity-30 cursor-not-allowed'
                                  : logged
                                  ? 'bg-green-500 hover:bg-green-600'
                                  : 'bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600'
                              } ${isToday ? 'ring-2 ring-yellow-400' : ''}`}
                              style={logged && isValid ? { backgroundColor: habit.color } : {}}
                              title={!isValid ? (language === 'en' ? 'Not scheduled for this day' : 'Nicht für diesen Tag geplant') : ''}
                            >
                              {logged && isValid && '✓'}
                            </button>
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

      {/* Month View */}
      {viewMode === 'month' && (
        <div className="bg-white dark:bg-stone-800 rounded-2xl p-6 border border-stone-200 dark:border-stone-700 shadow-lg">
          {/* Month Navigation */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => {
                const newMonth = new Date(monthView);
                newMonth.setMonth(newMonth.getMonth() - 1);
                setMonthView(newMonth);
              }}
              className="p-2 bg-stone-100 dark:bg-stone-700 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-600 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="text-lg font-semibold text-stone-800 dark:text-stone-100">
              {monthView.toLocaleDateString(language === 'en' ? 'en-US' : 'de-DE', { 
                month: 'long', 
                year: 'numeric' 
              })}
            </div>
            <button
              onClick={() => {
                const newMonth = new Date(monthView);
                newMonth.setMonth(newMonth.getMonth() + 1);
                setMonthView(newMonth);
              }}
              className="p-2 bg-stone-100 dark:bg-stone-700 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-600 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Month Calendar Grid */}
          <div className="overflow-x-auto">
            <div className="min-w-max">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left p-2 text-sm font-semibold text-stone-700 dark:text-stone-300 sticky left-0 bg-white dark:bg-stone-800 z-10 min-w-[200px]">
                      {language === 'en' ? 'Habit' : 'Gewohnheit'}
                    </th>
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
                      <th
                        key={idx}
                        className="text-center p-2 text-xs font-medium text-stone-600 dark:text-stone-400"
                      >
                        {language === 'en' ? day : day === 'Sun' ? 'So' : day === 'Mon' ? 'Mo' : day === 'Tue' ? 'Di' : day === 'Wed' ? 'Mi' : day === 'Thu' ? 'Do' : day === 'Fri' ? 'Fr' : 'Sa'}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {habits.map((habit) => {
                    const stats = getHabitStats(habit.id);
                    const gamification = getGamificationStats(habit.id);
                    const IconComponent = getIconComponent(habit.icon);
                    const currentMonth = monthView.getMonth();
                    const currentYear = monthView.getFullYear();
                    
                    return (
                      <tr key={habit.id} className="border-t border-stone-200 dark:border-stone-700">
                        <td className="p-3 sticky left-0 bg-white dark:bg-stone-800 z-10 min-w-[200px]">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center"
                              style={{ backgroundColor: habit.color + '20' }}
                            >
                              <IconComponent 
                                size={20} 
                                style={{ color: habit.color }}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-stone-800 dark:text-stone-100 truncate">
                                {habit.name}
                              </div>
                              <div className="flex items-center gap-2 mt-1 flex-wrap">
                                <div className="flex items-center gap-1">
                                  <Flame size={12} className="text-orange-500" />
                                  <span className="text-xs text-stone-600 dark:text-stone-400">
                                    {stats.streak}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Star size={12} className="text-yellow-500" />
                                  <span className="text-xs text-stone-600 dark:text-stone-400">
                                    Lv.{gamification.level}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        {Array.from({ length: 7 }, (_, weekDay) => {
                          // Get all dates for this weekday in the month
                          const weekDates = monthDates.filter((date, idx) => idx % 7 === weekDay);
                          return (
                            <td key={weekDay} className="p-1 align-top">
                              <div className="space-y-1">
                                {weekDates.map((date) => {
                                  const dateObj = new Date(date);
                                  const isCurrentMonth = dateObj.getMonth() === currentMonth;
                                  const logged = isHabitLogged(habit.id, date);
                                  const isValid = isDateValidForHabit(habit, date);
                                  const isToday = date === new Date().toISOString().split('T')[0];
                                  
                                  if (!isCurrentMonth) return null;
                                  
                                  return (
                                    <button
                                      key={date}
                                      onClick={() => isValid && handleToggle(habit.id, date)}
                                      disabled={!isValid}
                                      className={`w-7 h-7 rounded-full transition-all text-xs ${
                                        !isValid
                                          ? 'bg-stone-100 dark:bg-stone-800 opacity-30 cursor-not-allowed'
                                          : logged
                                          ? 'bg-green-500 hover:bg-green-600 text-white'
                                          : 'bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-stone-700 dark:text-stone-300'
                                      } ${isToday ? 'ring-2 ring-yellow-400' : ''}`}
                                      style={logged && isValid ? { backgroundColor: habit.color } : {}}
                                      title={`${dateObj.getDate()}. ${dateObj.toLocaleDateString(language === 'en' ? 'en-US' : 'de-DE', { month: 'short' })}${!isValid ? ' - ' + (language === 'en' ? 'Not scheduled' : 'Nicht geplant') : ''}`}
                                    >
                                      {dateObj.getDate()}
                                    </button>
                                  );
                                })}
                              </div>
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

      {/* List View */}
      {viewMode === 'list' && (
        <div className="space-y-4">
          {habits.map((habit) => {
            const stats = getHabitStats(habit.id);
            const gamification = getGamificationStats(habit.id);
            const logged = isHabitLogged(habit.id, selectedDate);
            const isValid = isDateValidForHabit(habit, selectedDate);
            const IconComponent = getIconComponent(habit.icon);
            return (
              <div
                key={habit.id}
                className="bg-white dark:bg-stone-800 rounded-xl p-6 border border-stone-200 dark:border-stone-700 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: habit.color + '20' }}
                      >
                        <IconComponent 
                          size={24} 
                          style={{ color: habit.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-xl text-stone-800 dark:text-stone-100">
                          {habit.name}
                        </div>
                        {habit.description && (
                          <div className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                            {habit.description}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Gamification Stats */}
                    <div className="mt-4 mb-4 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Star size={18} className="text-yellow-500" />
                          <span className="text-sm font-bold text-stone-800 dark:text-stone-100">
                            {language === 'en' ? 'Level' : 'Level'} {gamification.level}
                          </span>
                        </div>
                        <span className="text-xs text-stone-600 dark:text-stone-400">
                          {gamification.totalXP} XP
                        </span>
                      </div>
                      <div className="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full transition-all duration-500"
                          style={{ width: `${gamification.progress}%` }}
                        />
                      </div>
                      <div className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                        {gamification.xpForCurrentLevel} / {gamification.xpForNextLevel} XP {language === 'en' ? 'to next level' : 'zum nächsten Level'}
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    {gamification.achievements.length > 0 && (
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        {gamification.achievements.map((achievement, idx) => {
                          const AchievementIcon = achievement.icon;
                          return (
                            <div
                              key={idx}
                              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-stone-100 dark:bg-stone-700"
                              style={{ borderLeft: `3px solid ${achievement.color}` }}
                            >
                              <AchievementIcon size={14} style={{ color: achievement.color }} />
                              <span className="text-xs font-medium text-stone-700 dark:text-stone-300">
                                {achievement.name[language]}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <Flame size={18} className="text-orange-500" />
                        <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                          {stats.streak} {language === 'en' ? 'day streak' : 'Tage Streak'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp size={18} className="text-green-500" />
                        <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                          {stats.thisWeek} {language === 'en' ? 'this week' : 'diese Woche'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-blue-500" />
                        <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                          {stats.totalCompletions} {language === 'en' ? 'total' : 'gesamt'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    {habit.frequency === 'weekly' && habit.weeklyDays && habit.weeklyDays.length > 0 && (
                      <div className="text-xs text-stone-600 dark:text-stone-400 mr-2">
                        {language === 'en' ? 'Days: ' : 'Tage: '}
                        {habit.weeklyDays.sort().map(day => {
                          const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                          const daysDe = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
                          return language === 'en' ? days[day] : daysDe[day];
                        }).join(', ')}
                      </div>
                    )}
                    <button
                      onClick={() => isValid && handleToggle(habit.id)}
                      disabled={!isValid}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                        !isValid
                          ? 'bg-stone-100 dark:bg-stone-800 opacity-50 cursor-not-allowed text-stone-500 dark:text-stone-500'
                          : logged
                          ? 'bg-green-500 hover:bg-green-600 text-white'
                          : 'bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-stone-700 dark:text-stone-300'
                      }`}
                      style={logged && isValid ? { backgroundColor: habit.color } : {}}
                      title={!isValid ? (language === 'en' ? 'Not scheduled for this day' : 'Nicht für diesen Tag geplant') : ''}
                    >
                      {logged && isValid
                        ? language === 'en' ? '✓ Done' : '✓ Erledigt'
                        : !isValid
                        ? language === 'en' ? 'Not Scheduled' : 'Nicht geplant'
                        : language === 'en' ? 'Mark Done' : 'Als erledigt markieren'}
                    </button>
                    <button
                      onClick={() => handleEdit(habit)}
                      className="p-2 hover:bg-stone-100 dark:hover:bg-stone-700 rounded transition-colors"
                    >
                      <Edit2 size={18} className="text-stone-600 dark:text-stone-400" />
                    </button>
                    <button
                      onClick={() => handleDelete(habit.id)}
                      className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors"
                    >
                      <Trash2 size={18} className="text-red-600 dark:text-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          {habits.length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700">
              <Calendar size={48} className="mx-auto mb-4 text-stone-400" />
              <p className="text-stone-600 dark:text-stone-400 mb-4">
                {language === 'en' ? 'No habits yet. Add your first habit!' : 'Noch keine Gewohnheiten. Füge deine erste Gewohnheit hinzu!'}
              </p>
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                {language === 'en' ? 'Add Habit' : 'Gewohnheit hinzufügen'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HabitTracker;

