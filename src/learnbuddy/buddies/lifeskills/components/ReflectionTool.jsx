import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Save, X, Brain, Calendar, ChevronLeft, ChevronRight, TrendingUp, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { useTheme } from '../../../context/ThemeContext';
import {
  loadReflections,
  addReflection,
  updateReflection,
  deleteReflection
} from '../utils/storage';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const REFLECTION_SECTIONS = {
  en: [
    {
      id: 'review',
      title: '🗓 1. Rückblick: Was ist diese Woche passiert?',
      questions: [
        { id: 'experiences', question: 'Was waren meine 3 wichtigsten Erlebnisse oder Erkenntnisse?', type: 'textarea' },
        { id: 'energy_given', question: 'Was hat mir Energie gegeben?', type: 'textarea' },
        { id: 'energy_taken', question: 'Was hat mir Energie geraubt?', type: 'textarea' },
        { id: 'gratitude', question: 'Wofür war ich diese Woche dankbar?', type: 'textarea' }
      ]
    },
    {
      id: 'progress',
      title: '🎯 2. Fortschritt & Ziele',
      questions: [
        { id: 'goals_progress', question: 'Habe ich mich meinen Zielen genähert? In welchen Bereichen?', type: 'textarea' },
        { id: 'achievements', question: 'Was habe ich konkret erreicht oder verbessert?', type: 'textarea' },
        { id: 'procrastination', question: 'Wo habe ich Prokrastiniert oder nachgelassen – und warum?', type: 'textarea' },
        { id: 'learnings', question: 'Was habe ich gelernt, das ich nächste Woche anwenden kann?', type: 'textarea' }
      ]
    },
    {
      id: 'personal',
      title: '🧠 3. Persönliche Entwicklung',
      questions: [
        { id: 'behavior', question: 'Habe ich mich so verhalten, wie ich sein möchte?', type: 'textarea' },
        { id: 'uncertainty', question: 'Gab es Momente, wo ich unsicher, still oder gehemmt war? Warum?', type: 'textarea' },
        { id: 'stress', question: 'Wie bin ich mit Stress, Kritik oder Emotionen umgegangen?', type: 'textarea' },
        { id: 'future_advice', question: 'Was würde mein zukünftiges Ich mir raten?', type: 'textarea' }
      ]
    },
    {
      id: 'social',
      title: '🤝 4. Soziale Beziehungen',
      questions: [
        { id: 'contact', question: 'Habe ich bewusst Kontakt zu anderen gesucht oder gehalten?', type: 'textarea' },
        { id: 'conversations', question: 'Gab es gute Gespräche oder neue Bekanntschaften? Was war daran schön?', type: 'textarea' },
        { id: 'presence', question: 'Wo hätte ich aktiver zuhören, offener oder präsenter sein können?', type: 'textarea' }
      ]
    },
    {
      id: 'body',
      title: '💪 5. Körper & Geist',
      questions: [
        { id: 'body_care', question: 'Habe ich gut auf meinen Körper geachtet? (Bewegung, Ernährung, Schlaf)', type: 'textarea' },
        { id: 'mental_state', question: 'Wie war mein mentaler Zustand? (Fokus, Stresslevel, Klarheit)', type: 'textarea' },
        { id: 'rest', question: 'Habe ich genug Ruhe & Zeit für mich gehabt?', type: 'textarea' }
      ]
    },
    {
      id: 'outlook',
      title: '🔄 6. Ausblick & Fokus für nächste Woche',
      questions: [
        { id: 'improvements', question: 'Was möchte ich nächste Woche bewusst besser machen?', type: 'textarea' },
        { id: 'focus', question: 'Was ist mein persönlicher Fokus (z. B. "klarer ausdrücken", "Disziplin beim Training", "offener sein")?', type: 'textarea' },
        { id: 'challenge', question: 'Eine konkrete Mini-Challenge für mich: (z. B. „1 Tag ohne Social Media" / „3-mal Small Talk starten" / „7 Uhr aufstehen jeden Tag")', type: 'textarea' },
        { id: 'success', question: 'Was wäre ein kleiner, aber echter Erfolg am Ende der nächsten Woche?', type: 'textarea' }
      ]
    },
    {
      id: 'summary',
      title: '✅ Optional: 3-Satz-Abschluss',
      questions: [
        { id: 'learned', question: 'Diese Woche habe ich gelernt, dass …', type: 'textarea' },
        { id: 'proud', question: 'Ich bin stolz auf …', type: 'textarea' },
        { id: 'next_week', question: 'Nächste Woche werde ich …', type: 'textarea' }
      ]
    }
  ],
  de: [
    {
      id: 'review',
      title: '🗓 1. Rückblick: Was ist diese Woche passiert?',
      questions: [
        { id: 'experiences', question: 'Was waren meine 3 wichtigsten Erlebnisse oder Erkenntnisse?', type: 'textarea' },
        { id: 'energy_given', question: 'Was hat mir Energie gegeben?', type: 'textarea' },
        { id: 'energy_taken', question: 'Was hat mir Energie geraubt?', type: 'textarea' },
        { id: 'gratitude', question: 'Wofür war ich diese Woche dankbar?', type: 'textarea' }
      ]
    },
    {
      id: 'progress',
      title: '🎯 2. Fortschritt & Ziele',
      questions: [
        { id: 'goals_progress', question: 'Habe ich mich meinen Zielen genähert? In welchen Bereichen?', type: 'textarea' },
        { id: 'achievements', question: 'Was habe ich konkret erreicht oder verbessert?', type: 'textarea' },
        { id: 'procrastination', question: 'Wo habe ich Prokrastiniert oder nachgelassen – und warum?', type: 'textarea' },
        { id: 'learnings', question: 'Was habe ich gelernt, das ich nächste Woche anwenden kann?', type: 'textarea' }
      ]
    },
    {
      id: 'personal',
      title: '🧠 3. Persönliche Entwicklung',
      questions: [
        { id: 'behavior', question: 'Habe ich mich so verhalten, wie ich sein möchte?', type: 'textarea' },
        { id: 'uncertainty', question: 'Gab es Momente, wo ich unsicher, still oder gehemmt war? Warum?', type: 'textarea' },
        { id: 'stress', question: 'Wie bin ich mit Stress, Kritik oder Emotionen umgegangen?', type: 'textarea' },
        { id: 'future_advice', question: 'Was würde mein zukünftiges Ich mir raten?', type: 'textarea' }
      ]
    },
    {
      id: 'social',
      title: '🤝 4. Soziale Beziehungen',
      questions: [
        { id: 'contact', question: 'Habe ich bewusst Kontakt zu anderen gesucht oder gehalten?', type: 'textarea' },
        { id: 'conversations', question: 'Gab es gute Gespräche oder neue Bekanntschaften? Was war daran schön?', type: 'textarea' },
        { id: 'presence', question: 'Wo hätte ich aktiver zuhören, offener oder präsenter sein können?', type: 'textarea' }
      ]
    },
    {
      id: 'body',
      title: '💪 5. Körper & Geist',
      questions: [
        { id: 'body_care', question: 'Habe ich gut auf meinen Körper geachtet? (Bewegung, Ernährung, Schlaf)', type: 'textarea' },
        { id: 'mental_state', question: 'Wie war mein mentaler Zustand? (Fokus, Stresslevel, Klarheit)', type: 'textarea' },
        { id: 'rest', question: 'Habe ich genug Ruhe & Zeit für mich gehabt?', type: 'textarea' }
      ]
    },
    {
      id: 'outlook',
      title: '🔄 6. Ausblick & Fokus für nächste Woche',
      questions: [
        { id: 'improvements', question: 'Was möchte ich nächste Woche bewusst besser machen?', type: 'textarea' },
        { id: 'focus', question: 'Was ist mein persönlicher Fokus (z. B. "klarer ausdrücken", "Disziplin beim Training", "offener sein")?', type: 'textarea' },
        { id: 'challenge', question: 'Eine konkrete Mini-Challenge für mich: (z. B. „1 Tag ohne Social Media" / „3-mal Small Talk starten" / „7 Uhr aufstehen jeden Tag")', type: 'textarea' },
        { id: 'success', question: 'Was wäre ein kleiner, aber echter Erfolg am Ende der nächsten Woche?', type: 'textarea' }
      ]
    },
    {
      id: 'summary',
      title: '✅ Optional: 3-Satz-Abschluss',
      questions: [
        { id: 'learned', question: 'Diese Woche habe ich gelernt, dass …', type: 'textarea' },
        { id: 'proud', question: 'Ich bin stolz auf …', type: 'textarea' },
        { id: 'next_week', question: 'Nächste Woche werde ich …', type: 'textarea' }
      ]
    }
  ]
};

function ReflectionTool() {
  const { language } = useLanguage();
  const { isDark } = useTheme();
  const [reflections, setReflections] = useState(loadReflections());
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    weekStart: getWeekStart(new Date()).toISOString().split('T')[0],
    answers: {},
    metrics: {
      stressLevel: 5,
      mood: 5,
      energyLevel: 5,
      sleepQuality: 5,
      nutrition: 5,
      exercise: 0, // days per week
      productivity: 5,
      socialConnections: 5,
      selfCare: 5,
      workLifeBalance: 5
    }
  });
  const [selectedReflection, setSelectedReflection] = useState(null);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'stats'

  useEffect(() => {
    setReflections(loadReflections());
  }, []);

  function getWeekStart(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Monday as start
    return new Date(d.setDate(diff));
  }

  function getWeekEnd(date) {
    const start = getWeekStart(date);
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    return end;
  }

  const sections = REFLECTION_SECTIONS[language] || REFLECTION_SECTIONS.de;

  const handleAnswerChange = (questionId, value) => {
    setFormData({
      ...formData,
      answers: {
        ...formData.answers,
        [questionId]: value
      }
    });
  };

  const handleSave = () => {
    if (editingId) {
      updateReflection(editingId, formData);
    } else {
      addReflection(formData);
    }
    setReflections(loadReflections());
    resetForm();
    setShowForm(false);
  };

  const handleEdit = (reflection) => {
    setEditingId(reflection.id);
    setFormData({
      weekStart: reflection.weekStart || getWeekStart(new Date()).toISOString().split('T')[0],
      answers: reflection.answers || {},
      metrics: reflection.metrics || {
        stressLevel: 5,
        mood: 5,
        energyLevel: 5,
        sleepQuality: 5,
        nutrition: 5,
        exercise: 0,
        productivity: 5,
        socialConnections: 5,
        selfCare: 5,
        workLifeBalance: 5
      }
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm(language === 'en' ? 'Delete this reflection?' : 'Reflexion löschen?')) {
      deleteReflection(id);
      setReflections(loadReflections());
    }
  };

  const resetForm = () => {
    setFormData({
      weekStart: getWeekStart(new Date()).toISOString().split('T')[0],
      answers: {},
      metrics: {
        stressLevel: 5,
        mood: 5,
        energyLevel: 5,
        sleepQuality: 5,
        nutrition: 5,
        exercise: 0,
        productivity: 5,
        socialConnections: 5,
        selfCare: 5,
        workLifeBalance: 5
      }
    });
    setEditingId(null);
  };

  const handleMetricChange = (metricId, value) => {
    setFormData({
      ...formData,
      metrics: {
        ...formData.metrics,
        [metricId]: parseFloat(value) || 0
      }
    });
  };

  // Get chart data for statistics
  const getChartData = () => {
    const sortedReflections = [...reflections]
      .filter(r => r.metrics)
      .sort((a, b) => new Date(a.weekStart || a.timestamp) - new Date(b.weekStart || b.timestamp));

    const labels = sortedReflections.map(r => {
      const date = new Date(r.weekStart || r.timestamp);
      return date.toLocaleDateString(language === 'en' ? 'en-US' : 'de-DE', { month: 'short', day: 'numeric' });
    });

    const metricsLabels = {
      stressLevel: language === 'en' ? 'Stress Level' : 'Stresslevel',
      mood: language === 'en' ? 'Mood' : 'Stimmung',
      energyLevel: language === 'en' ? 'Energy Level' : 'Energieniveau',
      sleepQuality: language === 'en' ? 'Sleep Quality' : 'Schlafqualität',
      nutrition: language === 'en' ? 'Nutrition' : 'Ernährung',
      exercise: language === 'en' ? 'Exercise (days/week)' : 'Sport (Tage/Woche)',
      productivity: language === 'en' ? 'Productivity' : 'Produktivität',
      socialConnections: language === 'en' ? 'Social Connections' : 'Soziale Verbindungen',
      selfCare: language === 'en' ? 'Self Care' : 'Selbstfürsorge',
      workLifeBalance: language === 'en' ? 'Work-Life Balance' : 'Work-Life-Balance'
    };

    const colors = {
      stressLevel: 'rgba(239, 68, 68, 0.8)',
      mood: 'rgba(251, 191, 36, 0.8)',
      energyLevel: 'rgba(34, 197, 94, 0.8)',
      sleepQuality: 'rgba(59, 130, 246, 0.8)',
      nutrition: 'rgba(168, 85, 247, 0.8)',
      exercise: 'rgba(236, 72, 153, 0.8)',
      productivity: 'rgba(14, 165, 233, 0.8)',
      socialConnections: 'rgba(249, 115, 22, 0.8)',
      selfCare: 'rgba(20, 184, 166, 0.8)',
      workLifeBalance: 'rgba(139, 92, 246, 0.8)'
    };

    return {
      labels,
      datasets: Object.keys(metricsLabels).map(metricId => ({
        label: metricsLabels[metricId],
        data: sortedReflections.map(r => r.metrics?.[metricId] || 0),
        borderColor: colors[metricId],
        backgroundColor: colors[metricId].replace('0.8', '0.2'),
        tension: 0.4
      }))
    };
  };

  const handleCancel = () => {
    resetForm();
    setShowForm(false);
  };

  const weekStart = formData.weekStart ? new Date(formData.weekStart) : getWeekStart(new Date());
  const weekEnd = getWeekEnd(weekStart);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {language === 'en' ? 'Weekly Reflection' : 'Wöchentliche Reflexion'}
        </h1>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode(viewMode === 'list' ? 'stats' : 'list')}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
              viewMode === 'stats'
                ? 'bg-purple-500 text-white'
                : 'bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 dark:hover:bg-stone-600'
            }`}
          >
            {viewMode === 'stats' ? <BarChart3 size={18} /> : <TrendingUp size={18} />}
            {viewMode === 'stats' 
              ? (language === 'en' ? 'List View' : 'Listenansicht')
              : (language === 'en' ? 'Statistics' : 'Statistiken')}
          </button>
          <button
            onClick={() => setShowForm(true)}
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
          >
            <Plus size={20} />
            {language === 'en' ? 'New Reflection' : 'Neue Reflexion'}
          </button>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="mb-6 bg-white dark:bg-stone-800 rounded-2xl p-6 border border-stone-200 dark:border-stone-700 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100">
              {editingId
                ? language === 'en' ? 'Edit Reflection' : 'Reflexion bearbeiten'
                : language === 'en' ? 'Weekly Reflection' : 'Wöchentliche Reflexion'}
            </h2>
            <button
              onClick={handleCancel}
              className="p-1 hover:bg-stone-100 dark:hover:bg-stone-700 rounded"
            >
              <X size={20} />
            </button>
          </div>

          {/* Week Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
              {language === 'en' ? 'Week (Monday)' : 'Woche (Montag)'}
            </label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const newDate = new Date(weekStart);
                  newDate.setDate(newDate.getDate() - 7);
                  setFormData({ ...formData, weekStart: newDate.toISOString().split('T')[0] });
                }}
                className="p-2 bg-stone-100 dark:bg-stone-700 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-600 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <input
                type="date"
                value={formData.weekStart}
                onChange={(e) => {
                  const date = new Date(e.target.value);
                  const weekStartDate = getWeekStart(date);
                  setFormData({ ...formData, weekStart: weekStartDate.toISOString().split('T')[0] });
                }}
                className="flex-1 px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
              />
              <button
                onClick={() => {
                  const newDate = new Date(weekStart);
                  newDate.setDate(newDate.getDate() + 7);
                  setFormData({ ...formData, weekStart: newDate.toISOString().split('T')[0] });
                }}
                className="p-2 bg-stone-100 dark:bg-stone-700 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-600 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
              {weekStart.toLocaleDateString()} - {weekEnd.toLocaleDateString()}
            </p>
          </div>

          {/* Trackable Metrics */}
          <div className="mb-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-5 border border-indigo-200 dark:border-indigo-800">
            <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-4">
              📊 {language === 'en' ? 'Trackable Metrics' : 'Trackbare Metriken'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Stress Level' : 'Stresslevel'} (1-10): {formData.metrics.stressLevel}
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.metrics.stressLevel}
                  onChange={(e) => handleMetricChange('stressLevel', e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Mood' : 'Stimmung'} (1-10): {formData.metrics.mood}
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.metrics.mood}
                  onChange={(e) => handleMetricChange('mood', e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Energy Level' : 'Energieniveau'} (1-10): {formData.metrics.energyLevel}
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.metrics.energyLevel}
                  onChange={(e) => handleMetricChange('energyLevel', e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Sleep Quality' : 'Schlafqualität'} (1-10): {formData.metrics.sleepQuality}
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.metrics.sleepQuality}
                  onChange={(e) => handleMetricChange('sleepQuality', e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Nutrition' : 'Ernährung'} (1-10): {formData.metrics.nutrition}
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.metrics.nutrition}
                  onChange={(e) => handleMetricChange('nutrition', e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Exercise (days/week)' : 'Sport (Tage/Woche)'}: {formData.metrics.exercise}
                </label>
                <input
                  type="range"
                  min="0"
                  max="7"
                  value={formData.metrics.exercise}
                  onChange={(e) => handleMetricChange('exercise', e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Productivity' : 'Produktivität'} (1-10): {formData.metrics.productivity}
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.metrics.productivity}
                  onChange={(e) => handleMetricChange('productivity', e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Social Connections' : 'Soziale Verbindungen'} (1-10): {formData.metrics.socialConnections}
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.metrics.socialConnections}
                  onChange={(e) => handleMetricChange('socialConnections', e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Self Care' : 'Selbstfürsorge'} (1-10): {formData.metrics.selfCare}
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.metrics.selfCare}
                  onChange={(e) => handleMetricChange('selfCare', e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Work-Life Balance' : 'Work-Life-Balance'} (1-10): {formData.metrics.workLifeBalance}
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.metrics.workLifeBalance}
                  onChange={(e) => handleMetricChange('workLifeBalance', e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, idx) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-rose-900/20 rounded-xl p-5 border-2 border-purple-300 dark:border-purple-700 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-4">
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.questions.map((question) => (
                    <div key={question.id}>
                      <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                        {question.question}
                      </label>
                      {question.type === 'textarea' ? (
                        <textarea
                          value={formData.answers[question.id] || ''}
                          onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                          rows="3"
                          className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                          placeholder={language === 'en' ? 'Your answer...' : 'Deine Antwort...'}
                        />
                      ) : (
                        <input
                          type={question.type}
                          value={formData.answers[question.id] || ''}
                          onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                          className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-2 mt-6">
            <button
              onClick={handleSave}
              className="flex-1 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Save size={18} />
              {editingId
                ? language === 'en' ? 'Update' : 'Aktualisieren'
                : language === 'en' ? 'Save Reflection' : 'Reflexion speichern'}
            </button>
            <button
              onClick={handleCancel}
              className="px-6 py-3 border border-stone-300 dark:border-stone-600 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors"
            >
              {language === 'en' ? 'Cancel' : 'Abbrechen'}
            </button>
          </div>
        </div>
      )}

      {/* Statistics View */}
      {viewMode === 'stats' && (
        <div className="space-y-6">
          {reflections.filter(r => r.metrics).length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700">
              <BarChart3 size={48} className="mx-auto mb-4 text-stone-400" />
              <p className="text-stone-600 dark:text-stone-400 mb-4">
                {language === 'en' ? 'No metrics data yet. Add reflections with metrics to see statistics!' : 'Noch keine Metrikdaten. Füge Reflexionen mit Metriken hinzu, um Statistiken zu sehen!'}
              </p>
            </div>
          ) : (
            <>
              {/* Overview Stats */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {['stressLevel', 'mood', 'energyLevel', 'sleepQuality', 'productivity'].map((metricId) => {
                  const values = reflections
                    .filter(r => r.metrics?.[metricId])
                    .map(r => r.metrics[metricId]);
                  const avg = values.length > 0 ? (values.reduce((a, b) => a + b, 0) / values.length).toFixed(1) : 0;
                  const labels = {
                    stressLevel: language === 'en' ? 'Stress' : 'Stress',
                    mood: language === 'en' ? 'Mood' : 'Stimmung',
                    energyLevel: language === 'en' ? 'Energy' : 'Energie',
                    sleepQuality: language === 'en' ? 'Sleep' : 'Schlaf',
                    productivity: language === 'en' ? 'Productivity' : 'Produktivität'
                  };
                  return (
                    <div key={metricId} className="bg-white dark:bg-stone-800 rounded-xl p-4 border border-stone-200 dark:border-stone-700">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{avg}</div>
                      <div className="text-xs text-stone-600 dark:text-stone-400 mt-1">{labels[metricId]}</div>
                    </div>
                  );
                })}
              </div>

              {/* Main Chart - All Metrics */}
              <div className="bg-white dark:bg-stone-800 rounded-2xl p-6 border border-stone-200 dark:border-stone-700 shadow-lg">
                <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4">
                  {language === 'en' ? 'All Metrics Over Time' : 'Alle Metriken im Zeitverlauf'}
                </h2>
                <div className="h-96">
                  <Line
                    data={getChartData()}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'top',
                          labels: {
                            color: isDark ? '#e5e7eb' : '#374151',
                            usePointStyle: true,
                            padding: 15,
                            font: { size: 11 }
                          }
                        },
                        tooltip: {
                          mode: 'index',
                          intersect: false
                        }
                      },
                      scales: {
                        x: {
                          ticks: {
                            color: isDark ? '#9ca3af' : '#6b7280'
                          },
                          grid: {
                            color: isDark ? '#374151' : '#e5e7eb'
                          }
                        },
                        y: {
                          beginAtZero: true,
                          max: 10,
                          ticks: {
                            color: isDark ? '#9ca3af' : '#6b7280'
                          },
                          grid: {
                            color: isDark ? '#374151' : '#e5e7eb'
                          }
                        }
                      },
                      interaction: {
                        mode: 'nearest',
                        axis: 'x',
                        intersect: false
                      }
                    }}
                  />
                </div>
              </div>

              {/* Individual Metric Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['stressLevel', 'mood', 'energyLevel', 'sleepQuality', 'nutrition', 'exercise', 'productivity', 'socialConnections', 'selfCare', 'workLifeBalance'].map((metricId) => {
                  const sortedReflections = [...reflections]
                    .filter(r => r.metrics?.[metricId])
                    .sort((a, b) => new Date(a.weekStart || a.timestamp) - new Date(b.weekStart || b.timestamp));
                  
                  if (sortedReflections.length === 0) return null;

                  const labels = sortedReflections.map(r => {
                    const date = new Date(r.weekStart || r.timestamp);
                    return date.toLocaleDateString(language === 'en' ? 'en-US' : 'de-DE', { month: 'short', day: 'numeric' });
                  });
                  
                  const data = sortedReflections.map(r => r.metrics[metricId]);
                  
                  const metricLabels = {
                    stressLevel: language === 'en' ? 'Stress Level' : 'Stresslevel',
                    mood: language === 'en' ? 'Mood' : 'Stimmung',
                    energyLevel: language === 'en' ? 'Energy Level' : 'Energieniveau',
                    sleepQuality: language === 'en' ? 'Sleep Quality' : 'Schlafqualität',
                    nutrition: language === 'en' ? 'Nutrition' : 'Ernährung',
                    exercise: language === 'en' ? 'Exercise (days/week)' : 'Sport (Tage/Woche)',
                    productivity: language === 'en' ? 'Productivity' : 'Produktivität',
                    socialConnections: language === 'en' ? 'Social Connections' : 'Soziale Verbindungen',
                    selfCare: language === 'en' ? 'Self Care' : 'Selbstfürsorge',
                    workLifeBalance: language === 'en' ? 'Work-Life Balance' : 'Work-Life-Balance'
                  };

                  const colors = {
                    stressLevel: 'rgba(239, 68, 68, 0.8)',
                    mood: 'rgba(251, 191, 36, 0.8)',
                    energyLevel: 'rgba(34, 197, 94, 0.8)',
                    sleepQuality: 'rgba(59, 130, 246, 0.8)',
                    nutrition: 'rgba(168, 85, 247, 0.8)',
                    exercise: 'rgba(236, 72, 153, 0.8)',
                    productivity: 'rgba(14, 165, 233, 0.8)',
                    socialConnections: 'rgba(249, 115, 22, 0.8)',
                    selfCare: 'rgba(20, 184, 166, 0.8)',
                    workLifeBalance: 'rgba(139, 92, 246, 0.8)'
                  };

                  return (
                    <div key={metricId} className="bg-white dark:bg-stone-800 rounded-xl p-4 border border-stone-200 dark:border-stone-700">
                      <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100 mb-3">
                        {metricLabels[metricId]}
                      </h3>
                      <div className="h-48">
                        <Bar
                          data={{
                            labels,
                            datasets: [{
                              label: metricLabels[metricId],
                              data,
                              backgroundColor: colors[metricId].replace('0.8', '0.6'),
                              borderColor: colors[metricId],
                              borderWidth: 2
                            }]
                          }}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                              legend: { display: false },
                              tooltip: {
                                callbacks: {
                                  label: (context) => `${context.parsed.y}${metricId === 'exercise' ? ' days' : '/10'}`
                                }
                              }
                            },
                            scales: {
                              x: {
                                ticks: {
                                  color: isDark ? '#9ca3af' : '#6b7280',
                                  maxRotation: 45,
                                  minRotation: 45,
                                  font: { size: 9 }
                                },
                                grid: {
                                  display: false
                                }
                              },
                              y: {
                                beginAtZero: true,
                                max: metricId === 'exercise' ? 7 : 10,
                                ticks: {
                                  color: isDark ? '#9ca3af' : '#6b7280',
                                  font: { size: 10 }
                                },
                                grid: {
                                  color: isDark ? '#374151' : '#e5e7eb'
                                }
                              }
                            }
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}

      {/* Reflections List */}
      {viewMode === 'list' && (
      <div className="space-y-4">
        {reflections
          .sort((a, b) => new Date(b.weekStart || b.timestamp) - new Date(a.weekStart || a.timestamp))
          .map((reflection, index) => {
            const weekStartDate = reflection.weekStart ? new Date(reflection.weekStart) : new Date(reflection.timestamp);
            const weekEndDate = getWeekEnd(weekStartDate);
            return (
              <motion.div
                key={reflection.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-rose-900/20 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => setSelectedReflection(selectedReflection === reflection.id ? null : reflection.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar size={20} className="text-purple-500" />
                      <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100">
                        {weekStartDate.toLocaleDateString()} - {weekEndDate.toLocaleDateString()}
                      </h3>
                    </div>
                    {reflection.metrics && (
                      <div className="mb-3 flex flex-wrap gap-2">
                        {Object.entries(reflection.metrics).map(([key, value]) => {
                          if (value === null || value === undefined) return null;
                          const labels = {
                            stressLevel: language === 'en' ? 'Stress' : 'Stress',
                            mood: language === 'en' ? 'Mood' : 'Stimmung',
                            energyLevel: language === 'en' ? 'Energy' : 'Energie',
                            sleepQuality: language === 'en' ? 'Sleep' : 'Schlaf',
                            nutrition: language === 'en' ? 'Nutrition' : 'Ernährung',
                            exercise: language === 'en' ? 'Exercise' : 'Sport',
                            productivity: language === 'en' ? 'Productivity' : 'Produktivität',
                            socialConnections: language === 'en' ? 'Social' : 'Sozial',
                            selfCare: language === 'en' ? 'Self Care' : 'Selbstfürsorge',
                            workLifeBalance: language === 'en' ? 'Balance' : 'Balance'
                          };
                          return (
                            <div key={key} className="text-xs bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">
                              <span className="font-medium">{labels[key] || key}:</span> {value}{key === 'exercise' ? 'd' : '/10'}
                            </div>
                          );
                        })}
                      </div>
                    )}
                    <AnimatePresence>
                      {selectedReflection === reflection.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 space-y-4"
                        >
                          {sections.map((section) => (
                            <motion.div
                              key={section.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="border-l-4 border-purple-500 pl-4 bg-white dark:bg-stone-800 rounded-lg p-3 shadow-sm"
                            >
                            <h4 className="font-semibold text-stone-800 dark:text-stone-100 mb-2">
                              {section.title}
                            </h4>
                            <div className="space-y-2">
                              {section.questions.map((question) => {
                                const answer = reflection.answers?.[question.id];
                                if (!answer) return null;
                                return (
                                  <div key={question.id} className="text-sm">
                                    <div className="font-medium text-stone-700 dark:text-stone-300 mb-1">
                                      {question.question}
                                    </div>
                                    <div className="text-stone-600 dark:text-stone-400 whitespace-pre-wrap">
                                      {answer}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(reflection);
                      }}
                      className="p-2 hover:bg-stone-100 dark:hover:bg-stone-700 rounded transition-colors"
                    >
                      <Edit2 size={18} className="text-stone-600 dark:text-stone-400" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(reflection.id);
                      }}
                      className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors"
                    >
                      <Trash2 size={18} className="text-red-600 dark:text-red-400" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        {reflections.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700">
            <Brain size={48} className="mx-auto mb-4 text-stone-400" />
            <p className="text-stone-600 dark:text-stone-400 mb-4">
              {language === 'en' ? 'No reflections yet. Start your weekly reflection!' : 'Noch keine Reflexionen. Starte deine wöchentliche Reflexion!'}
            </p>
          </div>
        )}
      </div>
      )}
    </div>
  );
}

export default ReflectionTool;
