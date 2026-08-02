import React, { useState, useEffect, useMemo } from 'react';
import { Plus, Trash2, TrendingUp, Filter, Calendar, ChevronDown, DollarSign, X, Edit2 } from 'lucide-react';
import { budgetCategories } from '../data/countries';

const STORAGE_KEY = 'travelhub_budget';
const BUDGET_SETTINGS_KEY = 'travelhub_budget_settings';

function loadExpenses() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}

function saveExpenses(expenses) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
}

function loadSettings() {
  try { return JSON.parse(localStorage.getItem(BUDGET_SETTINGS_KEY)) || { dailyBudget: 50, currency: 'EUR' }; }
  catch { return { dailyBudget: 50, currency: 'EUR' }; }
}

function saveSettings(settings) {
  localStorage.setItem(BUDGET_SETTINGS_KEY, JSON.stringify(settings));
}

function convertToEur(amount, country) {
  if (!country || !country.currency) return amount;
  return amount / country.currency.rateToEur;
}

function formatEur(amount) {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount);
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

export default function BudgetTracker({ countries }) {
  const [expenses, setExpenses] = useState(loadExpenses);
  const [settings, setSettings] = useState(loadSettings);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [filterCountry, setFilterCountry] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  // Form state
  const [formAmount, setFormAmount] = useState('');
  const [formCountry, setFormCountry] = useState(countries[2]?.id || 'al');
  const [formCategory, setFormCategory] = useState('food');
  const [formNote, setFormNote] = useState('');
  const [formDate, setFormDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => { saveExpenses(expenses); }, [expenses]);
  useEffect(() => { saveSettings(settings); }, [settings]);

  const selectedCountry = countries.find(c => c.id === formCountry);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formAmount || parseFloat(formAmount) <= 0) return;

    const country = countries.find(c => c.id === formCountry);
    const expense = {
      id: editingId || Date.now().toString(),
      amount: parseFloat(formAmount),
      countryId: formCountry,
      currencyCode: country.currency.code,
      currencySymbol: country.currency.symbol,
      amountEur: convertToEur(parseFloat(formAmount), country),
      category: formCategory,
      note: formNote,
      date: formDate,
    };

    if (editingId) {
      setExpenses(prev => prev.map(ex => ex.id === editingId ? expense : ex));
      setEditingId(null);
    } else {
      setExpenses(prev => [expense, ...prev]);
    }

    setFormAmount('');
    setFormNote('');
    setFormDate(new Date().toISOString().split('T')[0]);
    setShowForm(false);
  };

  const handleEdit = (expense) => {
    setEditingId(expense.id);
    setFormAmount(expense.amount.toString());
    setFormCountry(expense.countryId);
    setFormCategory(expense.category);
    setFormNote(expense.note);
    setFormDate(expense.date);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setExpenses(prev => prev.filter(ex => ex.id !== id));
  };

  const filteredExpenses = useMemo(() => {
    return expenses.filter(ex => {
      if (filterCountry !== 'all' && ex.countryId !== filterCountry) return false;
      if (filterCategory !== 'all' && ex.category !== filterCategory) return false;
      return true;
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [expenses, filterCountry, filterCategory]);

  const stats = useMemo(() => {
    const total = filteredExpenses.reduce((sum, ex) => sum + ex.amountEur, 0);
    const byCategory = {};
    budgetCategories.forEach(cat => { byCategory[cat.id] = 0; });
    filteredExpenses.forEach(ex => { byCategory[ex.category] = (byCategory[ex.category] || 0) + ex.amountEur; });
    const byCountry = {};
    filteredExpenses.forEach(ex => {
      const c = countries.find(co => co.id === ex.countryId);
      const name = c ? `${c.flag} ${c.name}` : ex.countryId;
      byCountry[name] = (byCountry[name] || 0) + ex.amountEur;
    });
    const days = new Set(filteredExpenses.map(ex => ex.date)).size || 1;
    const dailyAvg = total / days;
    return { total, byCategory, byCountry, dailyAvg, days };
  }, [filteredExpenses, countries]);

  const maxCategoryAmount = Math.max(...Object.values(stats.byCategory), 1);
  const maxCountryAmount = Math.max(...Object.values(stats.byCountry), 1);

  return (
    <div className="space-y-6 pb-4">
      {/* Header with stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard label="Gesamt" value={formatEur(stats.total)} icon="💰" gradient="from-emerald-500/20 to-teal-500/20" />
        <StatCard label="Ø pro Tag" value={formatEur(stats.dailyAvg)} icon="📊" gradient="from-blue-500/20 to-indigo-500/20" />
        <StatCard label="Ausgaben" value={filteredExpenses.length} icon="🧾" gradient="from-amber-500/20 to-orange-500/20" />
        <StatCard label="Tage" value={stats.days} icon="📅" gradient="from-purple-500/20 to-violet-500/20" />
      </div>

      {/* Daily budget bar */}
      <div className="bg-[#111827] rounded-2xl border border-white/5 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-slate-400">Tagesbudget</span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={settings.dailyBudget}
              onChange={(e) => setSettings(prev => ({ ...prev, dailyBudget: parseFloat(e.target.value) || 0 }))}
              className="w-20 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-right text-sm text-white focus:border-teal-500 focus:outline-none"
            />
            <span className="text-sm text-slate-400">€/Tag</span>
          </div>
        </div>
        <div className="h-3 bg-white/5 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              stats.dailyAvg > settings.dailyBudget ? 'bg-gradient-to-r from-red-500 to-rose-500' : 'bg-gradient-to-r from-teal-400 to-emerald-500'
            }`}
            style={{ width: `${Math.min((stats.dailyAvg / (settings.dailyBudget || 1)) * 100, 100)}%` }}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-xs text-slate-500">{formatEur(stats.dailyAvg)} Ø/Tag</span>
          <span className={`text-xs font-medium ${stats.dailyAvg > settings.dailyBudget ? 'text-red-400' : 'text-emerald-400'}`}>
            {stats.dailyAvg <= settings.dailyBudget
              ? `${formatEur(settings.dailyBudget - stats.dailyAvg)} unter Budget`
              : `${formatEur(stats.dailyAvg - settings.dailyBudget)} über Budget`}
          </span>
        </div>
      </div>

      {/* Action buttons and filters */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => { setShowForm(true); setEditingId(null); }}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition shadow-lg shadow-teal-500/20"
        >
          <Plus size={16} />
          Ausgabe hinzufügen
        </button>
        <div className="flex items-center gap-2 ml-auto">
          <select
            value={filterCountry}
            onChange={(e) => setFilterCountry(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-slate-300 focus:border-teal-500 focus:outline-none appearance-none cursor-pointer"
          >
            <option value="all">Alle Länder</option>
            {countries.map(c => (
              <option key={c.id} value={c.id}>{c.flag} {c.name}</option>
            ))}
          </select>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-slate-300 focus:border-teal-500 focus:outline-none appearance-none cursor-pointer"
          >
            <option value="all">Alle Kategorien</option>
            {budgetCategories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.icon} {cat.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Add/Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => { setShowForm(false); setEditingId(null); }}>
          <div className="bg-[#111827] rounded-2xl border border-white/10 w-full max-w-md p-6 space-y-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">{editingId ? 'Ausgabe bearbeiten' : 'Neue Ausgabe'}</h3>
              <button onClick={() => { setShowForm(false); setEditingId(null); }} className="text-slate-500 hover:text-white transition"><X size={20} /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Betrag</label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.01"
                      value={formAmount}
                      onChange={(e) => setFormAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder-slate-600 focus:border-teal-500 focus:outline-none"
                      autoFocus
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                      {selectedCountry?.currency.symbol}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Land</label>
                  <select
                    value={formCountry}
                    onChange={(e) => setFormCountry(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:border-teal-500 focus:outline-none appearance-none"
                  >
                    {countries.map(c => (
                      <option key={c.id} value={c.id}>{c.flag} {c.name} ({c.currency.code})</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Kategorie</label>
                <div className="grid grid-cols-4 gap-2">
                  {budgetCategories.map(cat => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setFormCategory(cat.id)}
                      className={`flex flex-col items-center gap-1 py-2.5 rounded-xl text-xs transition-all ${
                        formCategory === cat.id
                          ? 'bg-white/10 text-white ring-1 ring-teal-500/50'
                          : 'bg-white/5 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      <span className="text-base">{cat.icon}</span>
                      <span className="truncate w-full text-center px-1" style={{ fontSize: '10px' }}>{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Datum</label>
                  <input
                    type="date"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:border-teal-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Notiz</label>
                  <input
                    type="text"
                    value={formNote}
                    onChange={(e) => setFormNote(e.target.value)}
                    placeholder="Optional..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder-slate-600 focus:border-teal-500 focus:outline-none"
                  />
                </div>
              </div>
              {formAmount && (
                <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl px-4 py-2.5 text-sm">
                  <span className="text-slate-400">≈ </span>
                  <span className="text-teal-400 font-semibold">{formatEur(convertToEur(parseFloat(formAmount) || 0, selectedCountry))}</span>
                </div>
              )}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl font-medium hover:opacity-90 transition shadow-lg shadow-teal-500/20"
              >
                {editingId ? 'Speichern' : 'Hinzufügen'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Charts row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Category breakdown */}
        <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">
          <h3 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
            <TrendingUp size={14} className="text-teal-400" /> Nach Kategorie
          </h3>
          <div className="space-y-3">
            {budgetCategories.map(cat => {
              const amount = stats.byCategory[cat.id] || 0;
              if (amount === 0 && filterCategory !== 'all') return null;
              return (
                <div key={cat.id}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-400">{cat.icon} {cat.name}</span>
                    <span className="text-xs font-medium text-slate-300">{formatEur(amount)}</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${(amount / maxCategoryAmount) * 100}%`, backgroundColor: cat.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Country breakdown */}
        <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">
          <h3 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
            <Filter size={14} className="text-blue-400" /> Nach Land
          </h3>
          <div className="space-y-3">
            {Object.entries(stats.byCountry)
              .sort(([, a], [, b]) => b - a)
              .map(([name, amount]) => (
                <div key={name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-400">{name}</span>
                    <span className="text-xs font-medium text-slate-300">{formatEur(amount)}</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-700"
                      style={{ width: `${(amount / maxCountryAmount) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            {Object.keys(stats.byCountry).length === 0 && (
              <p className="text-sm text-slate-600 text-center py-4">Noch keine Ausgaben</p>
            )}
          </div>
        </div>
      </div>

      {/* Expense list */}
      <div className="bg-[#111827] rounded-2xl border border-white/5 overflow-hidden">
        <div className="px-5 py-4 border-b border-white/5">
          <h3 className="text-sm font-semibold text-slate-300">Ausgaben ({filteredExpenses.length})</h3>
        </div>
        {filteredExpenses.length === 0 ? (
          <div className="px-5 py-12 text-center">
            <p className="text-slate-600 text-sm">Noch keine Ausgaben erfasst</p>
            <p className="text-slate-700 text-xs mt-1">Klicke "Ausgabe hinzufügen" um zu starten</p>
          </div>
        ) : (
          <div className="divide-y divide-white/5 max-h-[500px] overflow-y-auto">
            {filteredExpenses.map(expense => {
              const cat = budgetCategories.find(c => c.id === expense.category);
              const country = countries.find(c => c.id === expense.countryId);
              return (
                <div key={expense.id} className="px-5 py-3 flex items-center gap-3 hover:bg-white/[0.02] transition group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ backgroundColor: cat?.color + '20' }}>
                    {cat?.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-slate-200 truncate">{expense.note || cat?.name}</span>
                      <span className="text-xs text-slate-600">{country?.flag}</span>
                    </div>
                    <span className="text-xs text-slate-500">{formatDate(expense.date)}</span>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-sm font-semibold text-white">
                      {expense.currencySymbol}{expense.amount.toFixed(2)}
                    </div>
                    <div className="text-xs text-slate-500">{formatEur(expense.amountEur)}</div>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition shrink-0">
                    <button onClick={() => handleEdit(expense)} className="p-1.5 rounded-lg hover:bg-white/10 text-slate-500 hover:text-white transition"><Edit2 size={13} /></button>
                    <button onClick={() => handleDelete(expense.id)} className="p-1.5 rounded-lg hover:bg-red-500/20 text-slate-500 hover:text-red-400 transition"><Trash2 size={13} /></button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, icon, gradient }) {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-2xl border border-white/5 p-4`}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-slate-400">{label}</span>
        <span className="text-lg">{icon}</span>
      </div>
      <div className="text-xl font-bold text-white">{value}</div>
    </div>
  );
}
