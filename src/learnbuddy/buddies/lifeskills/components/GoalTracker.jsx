import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Save, X, Target, CheckCircle2, Circle, Flag, Calendar, Trophy, Star, Award, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import {
  loadGoals,
  addGoal,
  updateGoal,
  deleteGoal
} from '../utils/storage';

function GoalTracker() {
  const { language } = useLanguage();
  const [goals, setGoals] = useState(loadGoals());
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    targetDate: '',
    progress: 0,
    status: 'active',
    milestones: [],
    useSMART: false,
    smart: {
      specific: '',
      measurable: '',
      achievable: '',
      relevant: '',
      timebound: '',
      attractive: ''
    }
  });
  const [newMilestone, setNewMilestone] = useState('');
  const [editingMilestoneDate, setEditingMilestoneDate] = useState(null);

  useEffect(() => {
    setGoals(loadGoals());
  }, []);

  const handleAdd = () => {
    if (formData.title.trim()) {
      addGoal({
        ...formData,
        targetDate: formData.targetDate || null
      });
      setGoals(loadGoals());
      resetForm();
      setShowAddForm(false);
    }
  };

  const handleEdit = (goal) => {
    setEditingId(goal.id);
    setFormData({
      title: goal.title,
      description: goal.description || '',
      targetDate: goal.targetDate ? goal.targetDate.split('T')[0] : '',
      progress: goal.progress || 0,
      status: goal.status,
      milestones: goal.milestones || [],
      useSMART: goal.useSMART || false,
      smart: goal.smart || {
        specific: '',
        measurable: '',
        achievable: '',
        relevant: '',
        timebound: '',
        attractive: ''
      }
    });
    setShowAddForm(true);
  };

  const handleUpdate = () => {
    if (formData.title.trim()) {
      updateGoal(editingId, {
        ...formData,
        targetDate: formData.targetDate || null
      });
      setGoals(loadGoals());
      resetForm();
      setEditingId(null);
      setShowAddForm(false);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm(language === 'en' ? 'Delete this goal?' : 'Ziel löschen?')) {
      deleteGoal(id);
      setGoals(loadGoals());
    }
  };

  const handleUpdateProgress = (id, progress) => {
    updateGoal(id, { progress: Math.max(0, Math.min(100, progress)) });
    setGoals(loadGoals());
  };

  const handleToggleStatus = (id, currentStatus) => {
    const newStatus = currentStatus === 'active' ? 'completed' : currentStatus === 'completed' ? 'paused' : 'active';
    updateGoal(id, { status: newStatus });
    setGoals(loadGoals());
  };

  const handleAddMilestone = () => {
    if (newMilestone.trim()) {
      setFormData({
        ...formData,
        milestones: [...formData.milestones, { 
          id: Date.now(), 
          text: newMilestone, 
          completed: false,
          completedDate: null
        }]
      });
      setNewMilestone('');
    }
  };

  const handleToggleMilestone = (milestoneId, goalId = null) => {
    if (goalId) {
      // Toggle milestone in existing goal
      const goal = goals.find(g => g.id === goalId);
      if (goal) {
        const updatedMilestones = goal.milestones.map(m =>
          m.id === milestoneId 
            ? { 
                ...m, 
                completed: !m.completed,
                completedDate: !m.completed ? new Date().toISOString() : null
              }
            : m
        );
        updateGoal(goalId, { milestones: updatedMilestones });
        setGoals(loadGoals());
      }
    } else {
      // Toggle milestone in form
      setFormData({
        ...formData,
        milestones: formData.milestones.map(m =>
          m.id === milestoneId 
            ? { 
                ...m, 
                completed: !m.completed,
                completedDate: !m.completed ? new Date().toISOString() : null
              }
            : m
        )
      });
    }
  };

  const handleSetMilestoneDate = (milestoneId, date, goalId = null) => {
    if (goalId) {
      const goal = goals.find(g => g.id === goalId);
      if (goal) {
        const updatedMilestones = goal.milestones.map(m =>
          m.id === milestoneId 
            ? { 
                ...m, 
                completedDate: date ? new Date(date + 'T12:00:00').toISOString() : null,
                completed: !!date
              }
            : m
        );
        updateGoal(goalId, { milestones: updatedMilestones });
        setGoals(loadGoals());
      }
    } else {
      setFormData({
        ...formData,
        milestones: formData.milestones.map(m =>
          m.id === milestoneId 
            ? { 
                ...m, 
                completedDate: date ? new Date(date + 'T12:00:00').toISOString() : null,
                completed: !!date
              }
            : m
        )
      });
    }
    setEditingMilestoneDate(null);
  };

  const handleDeleteMilestone = (milestoneId) => {
    setFormData({
      ...formData,
      milestones: formData.milestones.filter(m => m.id !== milestoneId)
    });
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      targetDate: '',
      progress: 0,
      status: 'active',
      milestones: [],
      useSMART: false,
      smart: {
        specific: '',
        measurable: '',
        achievable: '',
        relevant: '',
        timebound: '',
        attractive: ''
      }
    });
    setNewMilestone('');
    setEditingMilestoneDate(null);
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setEditingId(null);
    resetForm();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'completed':
        return 'bg-blue-500';
      case 'paused':
        return 'bg-yellow-500';
      default:
        return 'bg-stone-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active':
        return language === 'en' ? 'Active' : 'Aktiv';
      case 'completed':
        return language === 'en' ? 'Completed' : 'Abgeschlossen';
      case 'paused':
        return language === 'en' ? 'Paused' : 'Pausiert';
      default:
        return status;
    }
  };

  const activeGoals = goals.filter(g => g.status === 'active');
  const completedGoals = goals.filter(g => g.status === 'completed');
  const pausedGoals = goals.filter(g => g.status === 'paused');

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
          {language === 'en' ? 'Goal Tracker' : 'Ziel Tracker'}
        </h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
        >
          <Plus size={20} />
          {language === 'en' ? 'Add Goal' : 'Ziel hinzufügen'}
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-700 shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
              <Target size={24} className="text-green-600 dark:text-green-400" />
            </div>
            <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">
              {language === 'en' ? 'Active Goals' : 'Aktive Ziele'}
            </div>
          </div>
          <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
            {activeGoals.length}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-sky-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-700 shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
              <CheckCircle2 size={24} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">
              {language === 'en' ? 'Completed' : 'Abgeschlossen'}
            </div>
          </div>
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            {completedGoals.length}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-900/20 dark:via-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 border-2 border-yellow-300 dark:border-yellow-700 shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/40 rounded-lg">
              <Circle size={24} className="text-yellow-600 dark:text-yellow-400" />
            </div>
            <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">
              {language === 'en' ? 'Paused' : 'Pausiert'}
            </div>
          </div>
          <div className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 dark:from-yellow-400 dark:to-amber-400 bg-clip-text text-transparent">
            {pausedGoals.length}
          </div>
        </motion.div>
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <div className="mb-6 bg-white dark:bg-stone-800 rounded-2xl p-6 border border-stone-200 dark:border-stone-700 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100">
              {editingId
                ? language === 'en' ? 'Edit Goal' : 'Ziel bearbeiten'
                : language === 'en' ? 'Add New Goal' : 'Neues Ziel hinzufügen'}
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
                {language === 'en' ? 'Goal Title' : 'Zieltitel'}
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder={language === 'en' ? 'e.g., Learn Spanish, Run Marathon' : 'z.B. Spanisch lernen, Marathon laufen'}
                className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                {language === 'en' ? 'Description' : 'Beschreibung'}
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder={language === 'en' ? 'Describe your goal...' : 'Beschreibe dein Ziel...'}
                rows="3"
                className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  checked={formData.useSMART}
                  onChange={(e) => setFormData({ ...formData, useSMART: e.target.checked })}
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                  {language === 'en' ? 'Use SMART Framework (Optional)' : 'SMART-Framework verwenden (Optional)'}
                </span>
              </label>
            </div>
            {formData.useSMART && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800 space-y-3">
                <h3 className="font-semibold text-stone-800 dark:text-stone-100 mb-3">
                  {language === 'en' ? 'SMART Goal Framework' : 'SMART-Ziel-Framework'}
                </h3>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                    <strong>S</strong> - {language === 'en' ? 'Specific' : 'Spezifisch'}
                  </label>
                  <input
                    type="text"
                    value={formData.smart.specific}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      smart: { ...formData.smart, specific: e.target.value }
                    })}
                    placeholder={language === 'en' ? 'What exactly do you want to achieve?' : 'Was genau möchtest du erreichen?'}
                    className="w-full px-3 py-2 text-sm border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                    <strong>M</strong> - {language === 'en' ? 'Measurable' : 'Messbar'}
                  </label>
                  <input
                    type="text"
                    value={formData.smart.measurable}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      smart: { ...formData.smart, measurable: e.target.value }
                    })}
                    placeholder={language === 'en' ? 'How will you measure progress?' : 'Wie misst du den Fortschritt?'}
                    className="w-full px-3 py-2 text-sm border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                    <strong>A</strong> - {language === 'en' ? 'Achievable' : 'Erreichbar'}
                  </label>
                  <input
                    type="text"
                    value={formData.smart.achievable}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      smart: { ...formData.smart, achievable: e.target.value }
                    })}
                    placeholder={language === 'en' ? 'Is this goal realistic?' : 'Ist dieses Ziel realistisch?'}
                    className="w-full px-3 py-2 text-sm border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                    <strong>R</strong> - {language === 'en' ? 'Relevant' : 'Relevant'}
                  </label>
                  <input
                    type="text"
                    value={formData.smart.relevant}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      smart: { ...formData.smart, relevant: e.target.value }
                    })}
                    placeholder={language === 'en' ? 'Why is this goal important?' : 'Warum ist dieses Ziel wichtig?'}
                    className="w-full px-3 py-2 text-sm border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                    <strong>T</strong> - {language === 'en' ? 'Time-bound' : 'Zeitgebunden'}
                  </label>
                  <input
                    type="text"
                    value={formData.smart.timebound}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      smart: { ...formData.smart, timebound: e.target.value }
                    })}
                    placeholder={language === 'en' ? 'What is the deadline?' : 'Was ist die Deadline?'}
                    className="w-full px-3 py-2 text-sm border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                    <strong>A</strong> - {language === 'en' ? 'Attractive' : 'Attraktiv'}
                  </label>
                  <input
                    type="text"
                    value={formData.smart.attractive}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      smart: { ...formData.smart, attractive: e.target.value }
                    })}
                    placeholder={language === 'en' ? 'What makes this goal appealing to you?' : 'Was macht dieses Ziel für dich attraktiv?'}
                    className="w-full px-3 py-2 text-sm border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                  />
                </div>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                {language === 'en' ? 'Target Date (optional)' : 'Zieldatum (optional)'}
              </label>
              <input
                type="date"
                value={formData.targetDate}
                onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                {language === 'en' ? 'Progress' : 'Fortschritt'} ({formData.progress}%)
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={formData.progress}
                onChange={(e) => setFormData({ ...formData, progress: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                {language === 'en' ? 'Milestones' : 'Meilensteine'}
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newMilestone}
                  onChange={(e) => setNewMilestone(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddMilestone()}
                  placeholder={language === 'en' ? 'Add milestone...' : 'Meilenstein hinzufügen...'}
                  className="flex-1 px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                />
                <button
                  onClick={handleAddMilestone}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>
              <div className="space-y-2">
                {formData.milestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-center gap-2 bg-stone-50 dark:bg-stone-700/50 rounded-lg p-2">
                    <button
                      onClick={() => handleToggleMilestone(milestone.id)}
                      className="p-1"
                    >
                      {milestone.completed ? (
                        <CheckCircle2 size={18} className="text-green-500" />
                      ) : (
                        <Circle size={18} className="text-stone-400" />
                      )}
                    </button>
                    <span className={`flex-1 ${milestone.completed ? 'line-through text-stone-500' : 'text-stone-800 dark:text-stone-100'}`}>
                      {milestone.text}
                    </span>
                    {milestone.completed && milestone.completedDate && (
                      <span className="text-xs text-stone-500 dark:text-stone-400">
                        {new Date(milestone.completedDate).toLocaleDateString()}
                      </span>
                    )}
                    {editingMilestoneDate === milestone.id ? (
                      <div className="flex items-center gap-1">
                        <input
                          type="date"
                          defaultValue={milestone.completedDate ? new Date(milestone.completedDate).toISOString().split('T')[0] : ''}
                          onBlur={(e) => handleSetMilestoneDate(milestone.id, e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              handleSetMilestoneDate(milestone.id, e.target.value);
                            }
                          }}
                          className="text-xs px-2 py-1 border border-stone-300 dark:border-stone-600 rounded bg-white dark:bg-stone-700"
                          autoFocus
                        />
                        <button
                          onClick={() => setEditingMilestoneDate(null)}
                          className="p-1"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setEditingMilestoneDate(milestone.id)}
                        className="text-xs text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300"
                        title={language === 'en' ? 'Set date' : 'Datum setzen'}
                      >
                        <Calendar size={14} />
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteMilestone(milestone.id)}
                      className="p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded"
                    >
                      <X size={16} className="text-red-600 dark:text-red-400" />
                    </button>
                  </div>
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
                : language === 'en' ? 'Add Goal' : 'Ziel hinzufügen'}
            </button>
          </div>
        </div>
      )}

      {/* Goals List */}
      <div className="space-y-4">
        {[...activeGoals, ...pausedGoals, ...completedGoals].map((goal, index) => {
          const daysLeft = goal.targetDate
            ? Math.ceil((new Date(goal.targetDate) - new Date()) / (1000 * 60 * 60 * 24))
            : null;

          // Calculate completion percentage for milestones
          const completedMilestones = goal.milestones?.filter(m => m.completed).length || 0;
          const totalMilestones = goal.milestones?.length || 0;
          const milestoneProgress = totalMilestones > 0 ? (completedMilestones / totalMilestones) * 100 : 0;

          return (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`bg-gradient-to-br ${
                goal.status === 'active'
                  ? 'from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20 border-green-300 dark:border-green-700'
                  : goal.status === 'completed'
                  ? 'from-blue-50 via-cyan-50 to-sky-50 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-sky-900/20 border-blue-300 dark:border-blue-700'
                  : 'from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-900/20 dark:via-amber-900/20 dark:to-orange-900/20 border-yellow-300 dark:border-yellow-700'
              } rounded-xl p-6 border-2 shadow-lg hover:shadow-2xl transition-all`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      animate={goal.status === 'completed' ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <Target
                        size={28}
                        className={`${
                          goal.status === 'active'
                            ? 'text-green-500'
                            : goal.status === 'completed'
                            ? 'text-blue-500'
                            : 'text-yellow-500'
                        }`}
                      />
                    </motion.div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 dark:from-stone-100 dark:to-stone-300 bg-clip-text text-transparent">
                      {goal.title}
                    </h3>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(goal.status)} text-white shadow-sm`}
                    >
                      {getStatusText(goal.status)}
                    </motion.span>
                    {goal.status === 'completed' && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="ml-auto"
                      >
                        <Trophy size={20} className="text-yellow-500" />
                      </motion.div>
                    )}
                  </div>
                  {goal.description && (
                    <p className="text-stone-600 dark:text-stone-400 mb-2">{goal.description}</p>
                  )}
                  {goal.useSMART && goal.smart && (
                    <div className="mb-3 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                      <h4 className="text-sm font-semibold text-stone-800 dark:text-stone-100 mb-2">
                        {language === 'en' ? 'SMART Framework' : 'SMART-Framework'}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                        {goal.smart.specific && (
                          <div>
                            <strong>S:</strong> <span className="text-stone-600 dark:text-stone-400">{goal.smart.specific}</span>
                          </div>
                        )}
                        {goal.smart.measurable && (
                          <div>
                            <strong>M:</strong> <span className="text-stone-600 dark:text-stone-400">{goal.smart.measurable}</span>
                          </div>
                        )}
                        {goal.smart.achievable && (
                          <div>
                            <strong>A:</strong> <span className="text-stone-600 dark:text-stone-400">{goal.smart.achievable}</span>
                          </div>
                        )}
                        {goal.smart.relevant && (
                          <div>
                            <strong>R:</strong> <span className="text-stone-600 dark:text-stone-400">{goal.smart.relevant}</span>
                          </div>
                        )}
                        {goal.smart.timebound && (
                          <div>
                            <strong>T:</strong> <span className="text-stone-600 dark:text-stone-400">{goal.smart.timebound}</span>
                          </div>
                        )}
                        {goal.smart.attractive && (
                          <div>
                            <strong>A:</strong> <span className="text-stone-600 dark:text-stone-400">{goal.smart.attractive}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  {goal.targetDate && (
                    <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                      <Flag size={14} />
                      <span>
                        {new Date(goal.targetDate).toLocaleDateString()}
                        {daysLeft !== null && (
                          <span className={`ml-2 font-semibold ${daysLeft < 0 ? 'text-red-500' : daysLeft < 7 ? 'text-yellow-500' : 'text-green-500'}`}>
                            ({daysLeft < 0
                              ? language === 'en' ? `${Math.abs(daysLeft)} days overdue` : `${Math.abs(daysLeft)} Tage überfällig`
                              : daysLeft === 0
                              ? language === 'en' ? 'Today!' : 'Heute!'
                              : language === 'en' ? `${daysLeft} days left` : `${daysLeft} Tage übrig`})
                          </span>
                        )}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(goal)}
                    className="p-2 hover:bg-stone-100 dark:hover:bg-stone-700 rounded transition-colors"
                  >
                    <Edit2 size={18} className="text-stone-600 dark:text-stone-400" />
                  </button>
                  <button
                    onClick={() => handleDelete(goal.id)}
                    className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors"
                  >
                    <Trash2 size={18} className="text-red-600 dark:text-red-400" />
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                    {language === 'en' ? 'Progress' : 'Fortschritt'}
                  </span>
                  <span className="text-sm font-bold bg-gradient-to-r from-yellow-600 to-amber-600 dark:from-yellow-400 dark:to-amber-400 bg-clip-text text-transparent">
                    {goal.progress}%
                  </span>
                </div>
                <div className="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-4 overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${goal.progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 rounded-full shadow-lg"
                  />
                </div>
                {totalMilestones > 0 && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-stone-600 dark:text-stone-400">
                        {language === 'en' ? 'Milestones' : 'Meilensteine'}: {completedMilestones}/{totalMilestones}
                      </span>
                      <span className="text-xs font-semibold text-stone-600 dark:text-stone-400">
                        {Math.round(milestoneProgress)}%
                      </span>
                    </div>
                    <div className="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${milestoneProgress}%` }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Progress Controls */}
              <div className="flex items-center gap-2 mb-4">
                <button
                  onClick={() => handleUpdateProgress(goal.id, goal.progress - 5)}
                  className="px-3 py-1 bg-stone-200 dark:bg-stone-700 rounded hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors text-sm font-medium"
                >
                  -5%
                </button>
                <button
                  onClick={() => handleUpdateProgress(goal.id, goal.progress + 5)}
                  className="px-3 py-1 bg-stone-200 dark:bg-stone-700 rounded hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors text-sm font-medium"
                >
                  +5%
                </button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={goal.progress}
                  onChange={(e) => handleUpdateProgress(goal.id, parseInt(e.target.value))}
                  className="flex-1"
                />
                <button
                  onClick={() => handleToggleStatus(goal.id, goal.status)}
                  className={`px-4 py-1 rounded font-medium text-sm transition-colors ${
                    goal.status === 'active'
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                      : goal.status === 'completed'
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-stone-500 hover:bg-stone-600 text-white'
                  }`}
                >
                  {goal.status === 'active'
                    ? language === 'en' ? 'Complete' : 'Abschließen'
                    : goal.status === 'completed'
                    ? language === 'en' ? 'Reactivate' : 'Reaktivieren'
                    : language === 'en' ? 'Resume' : 'Fortsetzen'}
                </button>
              </div>

              {/* Milestones */}
              {goal.milestones && goal.milestones.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 pt-4 border-t border-stone-200 dark:border-stone-700"
                >
                  <h4 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2 flex items-center gap-2">
                    <Flag size={16} className="text-stone-500" />
                    {language === 'en' ? 'Milestones' : 'Meilensteine'}
                  </h4>
                  <div className="space-y-2">
                    {goal.milestones.map((milestone, idx) => (
                      <motion.div
                        key={milestone.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2 text-sm bg-white dark:bg-stone-800 rounded-lg p-2 border border-stone-200 dark:border-stone-700 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <button
                          onClick={() => handleToggleMilestone(milestone.id, goal.id)}
                          className="p-1"
                        >
                          {milestone.completed ? (
                            <CheckCircle2 size={16} className="text-green-500" />
                          ) : (
                            <Circle size={16} className="text-stone-400" />
                          )}
                        </button>
                        <span
                          className={`flex-1 ${milestone.completed ? 'line-through text-stone-500' : 'text-stone-700 dark:text-stone-300'}`}
                        >
                          {milestone.text}
                        </span>
                        {milestone.completed && milestone.completedDate && (
                          <span className="text-xs text-stone-500 dark:text-stone-400">
                            {new Date(milestone.completedDate).toLocaleDateString()}
                          </span>
                        )}
                        {editingMilestoneDate === `${goal.id}-${milestone.id}` ? (
                          <div className="flex items-center gap-1">
                            <input
                              type="date"
                              defaultValue={milestone.completedDate ? new Date(milestone.completedDate).toISOString().split('T')[0] : ''}
                              onBlur={(e) => handleSetMilestoneDate(milestone.id, e.target.value, goal.id)}
                              onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                  handleSetMilestoneDate(milestone.id, e.target.value, goal.id);
                                }
                              }}
                              className="text-xs px-2 py-1 border border-stone-300 dark:border-stone-600 rounded bg-white dark:bg-stone-700"
                              autoFocus
                            />
                            <button
                              onClick={() => setEditingMilestoneDate(null)}
                              className="p-1"
                            >
                              <X size={12} />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setEditingMilestoneDate(`${goal.id}-${milestone.id}`)}
                            className="text-xs text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300"
                            title={language === 'en' ? 'Set date' : 'Datum setzen'}
                          >
                            <Calendar size={14} />
                          </button>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
        {goals.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700">
            <Target size={48} className="mx-auto mb-4 text-stone-400" />
            <p className="text-stone-600 dark:text-stone-400 mb-4">
              {language === 'en' ? 'No goals yet. Add your first goal!' : 'Noch keine Ziele. Füge dein erstes Ziel hinzu!'}
            </p>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              {language === 'en' ? 'Add Goal' : 'Ziel hinzufügen'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default GoalTracker;

