import React, { useState, useEffect } from 'react';
import { Plus, Clock, Trash2, Edit2, Save, X, PieChart, TrendingUp, Calendar, Target, Trophy, Award, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import {
  loadTimeAuditEntries,
  addTimeAuditEntry,
  updateTimeAuditEntry,
  deleteTimeAuditEntry,
  getTimeAuditStats,
  getDayHourlyData
} from '../utils/storage';

const CATEGORIES = [
  { id: 'work', name: { en: 'Work', de: 'Arbeit' }, color: '#3b82f6', emoji: '💼' },
  { id: 'study', name: { en: 'Study', de: 'Lernen' }, color: '#8b5cf6', emoji: '📚' },
  { id: 'exercise', name: { en: 'Exercise', de: 'Sport' }, color: '#10b981', emoji: '🏃' },
  { id: 'social', name: { en: 'Social', de: 'Sozial' }, color: '#f59e0b', emoji: '👥' },
  { id: 'hobbies', name: { en: 'Hobbies', de: 'Hobbys' }, color: '#ec4899', emoji: '🎨' },
  { id: 'rest', name: { en: 'Rest', de: 'Erholung' }, color: '#6366f1', emoji: '😴' },
  { id: 'chores', name: { en: 'Chores', de: 'Haushalt' }, color: '#14b8a6', emoji: '🧹' },
  { id: 'entertainment', name: { en: 'Entertainment', de: 'Unterhaltung' }, color: '#f43f5e', emoji: '🎬' },
  { id: 'other', name: { en: 'Other', de: 'Sonstiges' }, color: '#64748b', emoji: '📝' }
];

function TimeAudit() {
  const { language } = useLanguage();
  const [entries, setEntries] = useState(loadTimeAuditEntries());
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    category: 'work',
    activity: '',
    duration: 0,
    date: new Date().toISOString().split('T')[0],
    startTime: '',
    endTime: '',
    useTimeRange: false
  });
  const [timeRange, setTimeRange] = useState(7); // days
  const [viewMode, setViewMode] = useState('list'); // 'list', 'chart', or 'daily'
  const [dailyViewMode, setDailyViewMode] = useState('aggregate'); // 'aggregate' or 'single'
  const [selectedDayForCircle, setSelectedDayForCircle] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    setEntries(loadTimeAuditEntries());
  }, []);

  const stats = getTimeAuditStats(timeRange);

  const calculateDuration = (startTime, endTime) => {
    if (!startTime || !endTime) return 0;
    const start = new Date(`2000-01-01T${startTime}`);
    const end = new Date(`2000-01-01T${endTime}`);
    if (end < start) {
      // Span midnight
      const endNextDay = new Date(`2000-01-02T${endTime}`);
      return Math.round((endNextDay - start) / (1000 * 60));
    }
    return Math.round((end - start) / (1000 * 60));
  };

  const handleAdd = () => {
    const hasValidData = formData.useTimeRange
      ? formData.activity.trim() && formData.startTime && formData.endTime
      : formData.activity.trim() && formData.duration > 0;

    if (hasValidData) {
      const entryDate = formData.date;
      let startTime = null;
      let endTime = null;
      let duration = formData.duration;

      if (formData.useTimeRange && formData.startTime && formData.endTime) {
        startTime = new Date(`${entryDate}T${formData.startTime}`).toISOString();
        endTime = new Date(`${entryDate}T${formData.endTime}`).toISOString();
        duration = calculateDuration(formData.startTime, formData.endTime);
      }

      addTimeAuditEntry({
        category: formData.category,
        activity: formData.activity,
        duration,
        startTime,
        endTime,
        timestamp: startTime || new Date(`${entryDate}T12:00:00`).toISOString()
      });
      setEntries(loadTimeAuditEntries());
      setFormData({
        category: 'work',
        activity: '',
        duration: 0,
        date: new Date().toISOString().split('T')[0],
        startTime: '',
        endTime: '',
        useTimeRange: false
      });
      setShowAddForm(false);
    }
  };

  const handleEdit = (entry) => {
    setEditingId(entry.id);
    const entryDate = new Date(entry.timestamp).toISOString().split('T')[0];
    const hasTimeRange = entry.startTime && entry.endTime;
    
    setFormData({
      category: entry.category,
      activity: entry.activity,
      duration: entry.duration,
      date: entryDate,
      startTime: hasTimeRange ? new Date(entry.startTime).toTimeString().slice(0, 5) : '',
      endTime: hasTimeRange ? new Date(entry.endTime).toTimeString().slice(0, 5) : '',
      useTimeRange: hasTimeRange
    });
    setShowAddForm(true);
  };

  const handleUpdate = () => {
    const hasValidData = formData.useTimeRange
      ? formData.activity.trim() && formData.startTime && formData.endTime
      : formData.activity.trim() && formData.duration > 0;

    if (hasValidData) {
      const entryDate = formData.date;
      let startTime = null;
      let endTime = null;
      let duration = formData.duration;

      if (formData.useTimeRange && formData.startTime && formData.endTime) {
        startTime = new Date(`${entryDate}T${formData.startTime}`).toISOString();
        endTime = new Date(`${entryDate}T${formData.endTime}`).toISOString();
        duration = calculateDuration(formData.startTime, formData.endTime);
      }

      updateTimeAuditEntry(editingId, {
        category: formData.category,
        activity: formData.activity,
        duration,
        startTime,
        endTime,
        timestamp: startTime || new Date(`${entryDate}T12:00:00`).toISOString()
      });
      setEntries(loadTimeAuditEntries());
      setEditingId(null);
      setFormData({
        category: 'work',
        activity: '',
        duration: 0,
        date: new Date().toISOString().split('T')[0],
        startTime: '',
        endTime: '',
        useTimeRange: false
      });
      setShowAddForm(false);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm(language === 'en' ? 'Delete this entry?' : 'Eintrag löschen?')) {
      deleteTimeAuditEntry(id);
      setEntries(loadTimeAuditEntries());
    }
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setEditingId(null);
    setFormData({
      category: 'work',
      activity: '',
      duration: 0,
      date: new Date().toISOString().split('T')[0],
      startTime: '',
      endTime: '',
      useTimeRange: false
    });
  };

  const getCategoryInfo = (categoryId) => {
    return CATEGORIES.find(c => c.id === categoryId) || CATEGORIES[CATEGORIES.length - 1];
  };

  const formatDuration = (minutes) => {
    if (minutes < 60) {
      return `${minutes} ${language === 'en' ? 'min' : 'Min'}`;
    }
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
  };

  // Calculate chart data
  const chartData = Object.entries(stats.byCategory)
    .map(([category, data]) => ({
      category,
      ...getCategoryInfo(category),
      minutes: data.total,
      percentage: stats.totalMinutes > 0 ? (data.total / stats.totalMinutes) * 100 : 0
    }))
    .sort((a, b) => b.minutes - a.minutes);

  // Get hourly data for current view
  const currentHourlyData = dailyViewMode === 'single' 
    ? getDayHourlyData(selectedDayForCircle)
    : (stats.aggregateHourlyData || stats.hourlyData || []);

  // Get all unique categories used in the hourly data
  const usedCategories = new Set();
  currentHourlyData.forEach(hourData => {
    Object.keys(hourData.categories || {}).forEach(cat => usedCategories.add(cat));
  });
  const categoryLegend = Array.from(usedCategories).map(cat => getCategoryInfo(cat));

  // Render circle diagram
  const renderCircleDiagram = (hourlyData, title) => {
    const maxMinutes = Math.max(...hourlyData.map(h => h.total), 60);
    
    return (
      <div>
        <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-4 text-center">
          {title}
        </h3>
        <div className="flex justify-center mb-6">
          <svg width="500" height="500" viewBox="0 0 500 500" className="max-w-full">
            {/* Outer circle */}
            <circle
              cx="250"
              cy="250"
              r="200"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
              className="dark:stroke-stone-700"
            />
            
            {/* Hour markers */}
            {Array.from({ length: 24 }, (_, i) => {
              const angle = (i * 15 - 90) * (Math.PI / 180);
              const x1 = 250 + 190 * Math.cos(angle);
              const y1 = 250 + 190 * Math.sin(angle);
              const x2 = 250 + 200 * Math.cos(angle);
              const y2 = 250 + 200 * Math.sin(angle);
              const labelX = 250 + 160 * Math.cos(angle);
              const labelY = 250 + 160 * Math.sin(angle);
              
              return (
                <g key={i}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="dark:stroke-stone-600"
                  />
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="12"
                    fill="#6b7280"
                    className="dark:fill-stone-400 font-medium"
                  >
                    {i}
                  </text>
                </g>
              );
            })}
            
            {/* Hour segments with data */}
            {hourlyData.map((hourData, hour) => {
              if (hourData.total === 0) return null;
              
              const radius = (hourData.total / maxMinutes) * 150;
              const startAngle = (hour * 15 - 90) * (Math.PI / 180);
              const endAngle = ((hour + 1) * 15 - 90) * (Math.PI / 180);
              
              // Get dominant category for this hour
              const categories = Object.entries(hourData.categories || {});
              const dominantCategory = categories.length > 0
                ? categories.reduce((a, b) => hourData.categories[a[0]] > hourData.categories[b[0]] ? a : b)[0]
                : 'other';
              const categoryInfo = getCategoryInfo(dominantCategory);
              
              // Create arc path
              const x1 = 250 + radius * Math.cos(startAngle);
              const y1 = 250 + radius * Math.sin(startAngle);
              const x2 = 250 + radius * Math.cos(endAngle);
              const y2 = 250 + radius * Math.sin(endAngle);
              const largeArc = 0;
              
              const pathData = [
                `M 250 250`,
                `L ${x1} ${y1}`,
                `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
                `Z`
              ].join(' ');
              
              return (
                <path
                  key={hour}
                  d={pathData}
                  fill={categoryInfo.color}
                  opacity="0.7"
                  className="hover:opacity-100 transition-opacity cursor-pointer"
                  title={`${hour}:00 - ${formatDuration(hourData.total)} - ${categoryInfo.name[language]}`}
                />
              );
            })}
            
            {/* Center circle */}
            <circle
              cx="250"
              cy="250"
              r="50"
              fill="white"
              className="dark:fill-stone-800 dark:stroke-stone-700"
              stroke="#e5e7eb"
              strokeWidth="2"
            />
            <text
              x="250"
              y="250"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="16"
              fontWeight="bold"
              fill="#1f2937"
              className="dark:fill-stone-100"
            >
              24h
            </text>
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
          {language === 'en' ? 'Time Audit' : 'Zeitanalyse'}
        </h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
        >
          <Plus size={20} />
          {language === 'en' ? 'Add Entry' : 'Eintrag hinzufügen'}
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-700 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
              <Clock size={24} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">
              {language === 'en' ? 'Total Time' : 'Gesamtzeit'}
            </div>
          </div>
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            {stats.totalHours}h
          </div>
          <div className="text-sm text-stone-600 dark:text-stone-400 mt-1">
            {language === 'en' ? 'Last' : 'Letzte'} {timeRange} {language === 'en' ? 'days' : 'Tage'}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-700 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
              <PieChart size={24} className="text-green-600 dark:text-green-400" />
            </div>
            <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">
              {language === 'en' ? 'Categories' : 'Kategorien'}
            </div>
          </div>
          <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
            {Object.keys(stats.byCategory).length}
          </div>
          <div className="text-sm text-stone-600 dark:text-stone-400 mt-1">
            {language === 'en' ? 'Active categories' : 'Aktive Kategorien'}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-rose-900/20 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-700 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
              <TrendingUp size={24} className="text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">
              {language === 'en' ? 'Entries' : 'Einträge'}
            </div>
          </div>
          <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            {stats.totalEntries}
          </div>
          <div className="text-sm text-stone-600 dark:text-stone-400 mt-1">
            {language === 'en' ? 'Total entries' : 'Einträge gesamt'}
          </div>
        </motion.div>
      </div>

      {/* Time Range Selector */}
      <div className="mb-6 flex gap-2">
        {[1, 7, 30, 90].map((days) => (
          <motion.button
            key={days}
            onClick={() => setTimeRange(days)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              timeRange === days
                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                : 'bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-600'
            }`}
          >
            {days === 1
              ? language === 'en' ? 'Today' : 'Heute'
              : `${days} ${language === 'en' ? 'days' : 'Tage'}`}
          </motion.button>
        ))}
      </div>

      {/* View Mode Toggle */}
      <div className="mb-6 flex gap-2">
        <motion.button
          onClick={() => setViewMode('list')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            viewMode === 'list'
              ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
              : 'bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300'
          }`}
        >
          {language === 'en' ? 'List View' : 'Listenansicht'}
        </motion.button>
        <motion.button
          onClick={() => setViewMode('chart')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            viewMode === 'chart'
              ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
              : 'bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300'
          }`}
        >
          {language === 'en' ? 'Category Chart' : 'Kategorien-Diagramm'}
        </motion.button>
        <motion.button
          onClick={() => setViewMode('daily')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            viewMode === 'daily'
              ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
              : 'bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300'
          }`}
        >
          {language === 'en' ? '24h Circle' : '24h Kreis'}
        </motion.button>
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <div className="mb-6 bg-white dark:bg-stone-800 rounded-2xl p-6 border border-stone-200 dark:border-stone-700 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100">
              {editingId
                ? language === 'en' ? 'Edit Entry' : 'Eintrag bearbeiten'
                : language === 'en' ? 'Add Time Entry' : 'Zeiteintrag hinzufügen'}
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
                {language === 'en' ? 'Date' : 'Datum'}
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                {language === 'en' ? 'Category' : 'Kategorie'}
              </label>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFormData({ ...formData, category: cat.id })}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      formData.category === cat.id
                        ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/30'
                        : 'border-stone-200 dark:border-stone-700 hover:border-yellow-300'
                    }`}
                  >
                    <div className="text-2xl mb-1">{cat.emoji}</div>
                    <div className="text-xs font-medium text-stone-700 dark:text-stone-300">
                      {cat.name[language]}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                {language === 'en' ? 'Activity' : 'Aktivität'}
              </label>
              <input
                type="text"
                value={formData.activity}
                onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                placeholder={language === 'en' ? 'What did you do?' : 'Was hast du gemacht?'}
                className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  checked={formData.useTimeRange}
                  onChange={(e) => setFormData({ ...formData, useTimeRange: e.target.checked })}
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                  {language === 'en' ? 'Use time range (start/end time)' : 'Zeitspanne verwenden (Start/Ende)'}
                </span>
              </label>
            </div>
            {formData.useTimeRange ? (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                    {language === 'en' ? 'Start Time' : 'Startzeit'}
                  </label>
                  <input
                    type="time"
                    value={formData.startTime}
                    onChange={(e) => {
                      const newStartTime = e.target.value;
                      setFormData({ 
                        ...formData, 
                        startTime: newStartTime,
                        duration: newStartTime && formData.endTime 
                          ? calculateDuration(newStartTime, formData.endTime) 
                          : formData.duration
                      });
                    }}
                    className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                    {language === 'en' ? 'End Time' : 'Endzeit'}
                  </label>
                  <input
                    type="time"
                    value={formData.endTime}
                    onChange={(e) => {
                      const newEndTime = e.target.value;
                      setFormData({ 
                        ...formData, 
                        endTime: newEndTime,
                        duration: formData.startTime && newEndTime 
                          ? calculateDuration(formData.startTime, newEndTime) 
                          : formData.duration
                      });
                    }}
                    className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                  />
                </div>
                {formData.startTime && formData.endTime && (
                  <div className="col-span-2">
                    <div className="text-sm text-stone-600 dark:text-stone-400">
                      {language === 'en' ? 'Duration' : 'Dauer'}: {formatDuration(calculateDuration(formData.startTime, formData.endTime))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Duration (minutes)' : 'Dauer (Minuten)'}
                </label>
                <input
                  type="number"
                  min="1"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                />
              </div>
            )}
            <button
              onClick={editingId ? handleUpdate : handleAdd}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Save size={18} />
              {editingId
                ? language === 'en' ? 'Update' : 'Aktualisieren'
                : language === 'en' ? 'Add Entry' : 'Eintrag hinzufügen'}
            </button>
          </div>
        </div>
      )}

      {/* Chart View */}
      {viewMode === 'chart' && (
        <div className="mb-8 bg-white dark:bg-stone-800 rounded-2xl p-6 border border-stone-200 dark:border-stone-700 shadow-lg">
          <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-6">
            {language === 'en' ? 'Time Distribution by Category' : 'Zeitverteilung nach Kategorien'}
          </h2>
          <div className="space-y-4">
            {chartData.map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="font-semibold text-stone-800 dark:text-stone-100">
                      {item.name[language]}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-stone-800 dark:text-stone-100">
                      {formatDuration(item.minutes)}
                    </div>
                    <div className="text-sm text-stone-600 dark:text-stone-400">
                      {item.percentage.toFixed(1)}%
                    </div>
                  </div>
                </div>
                <div className="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-4 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${item.percentage}%`,
                      backgroundColor: item.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 24-Hour Circle Diagram */}
      {viewMode === 'daily' && (
        <div className="mb-8 space-y-6">
          {/* View Mode Toggle */}
          <div className="bg-white dark:bg-stone-800 rounded-2xl p-6 border border-stone-200 dark:border-stone-700 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100">
                {language === 'en' ? '24-Hour Time Distribution' : '24-Stunden Zeitverteilung'}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setDailyViewMode('aggregate')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    dailyViewMode === 'aggregate'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300'
                  }`}
                >
                  {language === 'en' ? 'Aggregate' : 'Gesamt'}
                </button>
                <button
                  onClick={() => setDailyViewMode('single')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    dailyViewMode === 'single'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300'
                  }`}
                >
                  {language === 'en' ? 'Single Day' : 'Einzelner Tag'}
                </button>
              </div>
            </div>

            {/* Single Day Selector */}
            {dailyViewMode === 'single' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Select Date' : 'Datum auswählen'}
                </label>
                <input
                  type="date"
                  value={selectedDayForCircle}
                  onChange={(e) => setSelectedDayForCircle(e.target.value)}
                  className="px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                />
              </div>
            )}

            {/* Circle Diagrams */}
            {dailyViewMode === 'aggregate' ? (
              <>
                {/* Aggregate over selected time range */}
                {(!currentHourlyData || currentHourlyData.every(h => h.total === 0)) ? (
                  <div className="text-center py-12">
                    <Clock size={48} className="mx-auto mb-4 text-stone-400" />
                    <p className="text-stone-600 dark:text-stone-400">
                      {language === 'en' 
                        ? 'No time data with start/end times yet. Add entries with time ranges to see the 24-hour distribution!' 
                        : 'Noch keine Zeitdaten mit Start-/Endzeiten. Füge Einträge mit Zeitspannen hinzu, um die 24-Stunden-Verteilung zu sehen!'}
                    </p>
                  </div>
                ) : (
                  <>
                    {renderCircleDiagram(
                      currentHourlyData,
                      language === 'en' 
                        ? `Aggregate over last ${timeRange} days` 
                        : `Gesamt über letzte ${timeRange} Tage`
                    )}
                    
                    {/* Category Legend */}
                    {categoryLegend.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-3">
                          {language === 'en' ? 'Categories' : 'Kategorien'}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {categoryLegend.map((cat) => {
                            const totalMinutes = currentHourlyData.reduce((sum, h) => 
                              sum + (h.categories?.[cat.id] || 0), 0
                            );
                            return (
                              <div
                                key={cat.id}
                                className="flex items-center gap-3 p-3 rounded-lg bg-stone-50 dark:bg-stone-700/50 border border-stone-200 dark:border-stone-600"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-2xl">{cat.emoji}</span>
                                  <div
                                    className="w-4 h-4 rounded"
                                    style={{ backgroundColor: cat.color }}
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-semibold text-stone-800 dark:text-stone-100 truncate">
                                    {cat.name[language]}
                                  </div>
                                  <div className="text-xs text-stone-600 dark:text-stone-400">
                                    {formatDuration(totalMinutes)}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Hour Legend */}
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-3">
                        {language === 'en' ? 'Hours' : 'Stunden'}
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {currentHourlyData.map((hourData, hour) => {
                          if (hourData.total === 0) return null;
                          
                          const categories = Object.entries(hourData.categories || {});
                          const dominantCategory = categories.length > 0
                            ? categories.reduce((a, b) => hourData.categories[a[0]] > hourData.categories[b[0]] ? a : b)[0]
                            : 'other';
                          const categoryInfo = getCategoryInfo(dominantCategory);
                          
                          return (
                            <div
                              key={hour}
                              className="flex items-center gap-2 p-2 rounded-lg bg-stone-50 dark:bg-stone-700/50"
                            >
                              <div
                                className="w-4 h-4 rounded"
                                style={{ backgroundColor: categoryInfo.color }}
                              />
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-semibold text-stone-800 dark:text-stone-100">
                                  {String(hour).padStart(2, '0')}:00
                                </div>
                                <div className="text-xs text-stone-600 dark:text-stone-400">
                                  {formatDuration(hourData.total)}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                {/* Single Day View */}
                {(!currentHourlyData || currentHourlyData.every(h => h.total === 0)) ? (
                  <div className="text-center py-12">
                    <Clock size={48} className="mx-auto mb-4 text-stone-400" />
                    <p className="text-stone-600 dark:text-stone-400">
                      {language === 'en' 
                        ? 'No time data for this day. Add entries with time ranges!' 
                        : 'Keine Zeitdaten für diesen Tag. Füge Einträge mit Zeitspannen hinzu!'}
                    </p>
                  </div>
                ) : (
                  <>
                    {renderCircleDiagram(
                      currentHourlyData,
                      new Date(selectedDayForCircle).toLocaleDateString(language === 'en' ? 'en-US' : 'de-DE', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })
                    )}
                    
                    {/* Category Legend for Single Day */}
                    {categoryLegend.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-3">
                          {language === 'en' ? 'Categories' : 'Kategorien'}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {categoryLegend.map((cat) => {
                            const totalMinutes = currentHourlyData.reduce((sum, h) => 
                              sum + (h.categories?.[cat.id] || 0), 0
                            );
                            return (
                              <div
                                key={cat.id}
                                className="flex items-center gap-3 p-3 rounded-lg bg-stone-50 dark:bg-stone-700/50 border border-stone-200 dark:border-stone-600"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-2xl">{cat.emoji}</span>
                                  <div
                                    className="w-4 h-4 rounded"
                                    style={{ backgroundColor: cat.color }}
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-semibold text-stone-800 dark:text-stone-100 truncate">
                                    {cat.name[language]}
                                  </div>
                                  <div className="text-xs text-stone-600 dark:text-stone-400">
                                    {formatDuration(totalMinutes)}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Hour Legend for Single Day */}
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-3">
                        {language === 'en' ? 'Hours' : 'Stunden'}
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {currentHourlyData.map((hourData, hour) => {
                          if (hourData.total === 0) return null;
                          
                          const categories = Object.entries(hourData.categories || {});
                          const dominantCategory = categories.length > 0
                            ? categories.reduce((a, b) => hourData.categories[a[0]] > hourData.categories[b[0]] ? a : b)[0]
                            : 'other';
                          const categoryInfo = getCategoryInfo(dominantCategory);
                          
                          return (
                            <div
                              key={hour}
                              className="flex items-center gap-2 p-2 rounded-lg bg-stone-50 dark:bg-stone-700/50"
                            >
                              <div
                                className="w-4 h-4 rounded"
                                style={{ backgroundColor: categoryInfo.color }}
                              />
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-semibold text-stone-800 dark:text-stone-100">
                                  {String(hour).padStart(2, '0')}:00
                                </div>
                                <div className="text-xs text-stone-600 dark:text-stone-400">
                                  {formatDuration(hourData.total)}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <div className="space-y-4">
          {entries
            .filter((entry) => {
              const entryDate = new Date(entry.timestamp);
              const cutoff = new Date();
              cutoff.setDate(cutoff.getDate() - timeRange);
              return entryDate >= cutoff;
            })
            .map((entry, index) => {
              const categoryInfo = getCategoryInfo(entry.category);
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-xl p-4 border-2 border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                          style={{ backgroundColor: categoryInfo.color + '20' }}
                        >
                          {categoryInfo.emoji}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-stone-800 dark:text-stone-100">
                            {entry.activity || language === 'en' ? 'Untitled Activity' : 'Unbenannte Aktivität'}
                          </div>
                          <div className="text-sm text-stone-600 dark:text-stone-400 flex items-center gap-2 mt-1 flex-wrap">
                            <Calendar size={14} />
                            {new Date(entry.timestamp).toLocaleDateString()}
                            {entry.startTime && entry.endTime && (
                              <>
                                <span className="mx-2">•</span>
                                <Clock size={14} />
                                {new Date(entry.startTime).toLocaleTimeString(language === 'en' ? 'en-US' : 'de-DE', { hour: '2-digit', minute: '2-digit' })} - {new Date(entry.endTime).toLocaleTimeString(language === 'en' ? 'en-US' : 'de-DE', { hour: '2-digit', minute: '2-digit' })}
                              </>
                            )}
                            <span className="mx-2">•</span>
                            <span style={{ color: categoryInfo.color }} className="font-medium">
                              {categoryInfo.name[language]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <div className="text-right">
                        <div className="text-xl font-bold text-stone-800 dark:text-stone-100">
                          {formatDuration(entry.duration)}
                        </div>
                      </div>
                      <button
                        onClick={() => handleEdit(entry)}
                        className="p-2 hover:bg-stone-100 dark:hover:bg-stone-700 rounded transition-colors"
                      >
                        <Edit2 size={18} className="text-stone-600 dark:text-stone-400" />
                      </button>
                      <button
                        onClick={() => handleDelete(entry.id)}
                        className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors"
                      >
                        <Trash2 size={18} className="text-red-600 dark:text-red-400" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          {entries.filter((entry) => {
            const entryDate = new Date(entry.timestamp);
            const cutoff = new Date();
            cutoff.setDate(cutoff.getDate() - timeRange);
            return entryDate >= cutoff;
          }).length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700">
              <Clock size={48} className="mx-auto mb-4 text-stone-400" />
              <p className="text-stone-600 dark:text-stone-400">
                {language === 'en' ? 'No entries yet. Add your first time entry!' : 'Noch keine Einträge. Füge deinen ersten Zeiteintrag hinzu!'}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TimeAudit;

