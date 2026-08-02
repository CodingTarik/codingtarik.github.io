import React, { useState, useEffect, useMemo } from 'react';
import { Plus, X, Search, BookOpen, MapPin, Calendar, ChevronDown, Trash2, Edit2 } from 'lucide-react';

const STORAGE_KEY = 'travelhub_journal';

const moods = [
  { id: 'amazing', emoji: '🤩', label: 'Fantastisch' },
  { id: 'happy', emoji: '😊', label: 'Gut' },
  { id: 'neutral', emoji: '😐', label: 'OK' },
  { id: 'tired', emoji: '😴', label: 'Müde' },
  { id: 'sad', emoji: '😢', label: 'Traurig' },
  { id: 'sick', emoji: '🤒', label: 'Krank' },
  { id: 'excited', emoji: '🎉', label: 'Aufgeregt' },
  { id: 'adventurous', emoji: '🏔️', label: 'Abenteuer' },
];

function loadEntries() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}

function saveEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export default function TravelJournal({ countries }) {
  const [entries, setEntries] = useState(loadEntries);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCountry, setFilterCountry] = useState('all');
  const [expandedEntry, setExpandedEntry] = useState(null);

  // Form state
  const [formTitle, setFormTitle] = useState('');
  const [formText, setFormText] = useState('');
  const [formCountry, setFormCountry] = useState(countries[2]?.id || 'al');
  const [formMood, setFormMood] = useState('happy');
  const [formDate, setFormDate] = useState(new Date().toISOString().split('T')[0]);
  const [formLocation, setFormLocation] = useState('');

  useEffect(() => { saveEntries(entries); }, [entries]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formTitle.trim()) return;

    const entry = {
      id: editingId || Date.now().toString(),
      title: formTitle.trim(),
      text: formText.trim(),
      countryId: formCountry,
      mood: formMood,
      date: formDate,
      location: formLocation.trim(),
      createdAt: editingId ? entries.find(en => en.id === editingId)?.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (editingId) {
      setEntries(prev => prev.map(en => en.id === editingId ? entry : en));
      setEditingId(null);
    } else {
      setEntries(prev => [entry, ...prev]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormTitle('');
    setFormText('');
    setFormMood('happy');
    setFormDate(new Date().toISOString().split('T')[0]);
    setFormLocation('');
    setShowForm(false);
    setEditingId(null);
  };

  const handleEdit = (entry) => {
    setEditingId(entry.id);
    setFormTitle(entry.title);
    setFormText(entry.text);
    setFormCountry(entry.countryId);
    setFormMood(entry.mood);
    setFormDate(entry.date);
    setFormLocation(entry.location || '');
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setEntries(prev => prev.filter(en => en.id !== id));
  };

  const filteredEntries = useMemo(() => {
    return entries.filter(en => {
      if (filterCountry !== 'all' && en.countryId !== filterCountry) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return en.title.toLowerCase().includes(q) ||
               en.text.toLowerCase().includes(q) ||
               (en.location && en.location.toLowerCase().includes(q));
      }
      return true;
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [entries, filterCountry, searchQuery]);

  // Group entries by date
  const groupedEntries = useMemo(() => {
    const groups = {};
    filteredEntries.forEach(entry => {
      const dateKey = entry.date;
      if (!groups[dateKey]) groups[dateKey] = [];
      groups[dateKey].push(entry);
    });
    return Object.entries(groups).sort(([a], [b]) => new Date(b) - new Date(a));
  }, [filteredEntries]);

  const totalWords = entries.reduce((sum, en) => sum + en.text.split(/\s+/).filter(Boolean).length, 0);
  const countriesVisited = new Set(entries.map(en => en.countryId)).size;

  return (
    <div className="space-y-6 pb-4">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-pink-500/10 rounded-2xl border border-pink-500/20 p-4 text-center">
          <div className="text-2xl font-bold text-pink-400">{entries.length}</div>
          <div className="text-xs text-slate-400 mt-1">Einträge</div>
        </div>
        <div className="bg-purple-500/10 rounded-2xl border border-purple-500/20 p-4 text-center">
          <div className="text-2xl font-bold text-purple-400">{totalWords}</div>
          <div className="text-xs text-slate-400 mt-1">Wörter</div>
        </div>
        <div className="bg-rose-500/10 rounded-2xl border border-rose-500/20 p-4 text-center">
          <div className="text-2xl font-bold text-rose-400">{countriesVisited}</div>
          <div className="text-xs text-slate-400 mt-1">Länder</div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => { setShowForm(true); setEditingId(null); }}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition shadow-lg shadow-pink-500/20"
        >
          <Plus size={16} />
          Neuer Eintrag
        </button>

        <div className="flex-1 min-w-[200px] relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Suchen..."
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder-slate-600 focus:border-pink-500 focus:outline-none"
          />
        </div>

        <select
          value={filterCountry}
          onChange={(e) => setFilterCountry(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-slate-300 focus:border-pink-500 focus:outline-none appearance-none"
        >
          <option value="all">Alle Länder</option>
          {countries.map(c => (
            <option key={c.id} value={c.id}>{c.flag} {c.name}</option>
          ))}
        </select>
      </div>

      {/* Form modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={resetForm}>
          <div className="bg-[#111827] rounded-2xl border border-white/10 w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 space-y-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">{editingId ? 'Eintrag bearbeiten' : 'Neuer Tagebucheintrag'}</h3>
              <button onClick={resetForm} className="text-slate-500 hover:text-white transition"><X size={20} /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Titel *</label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="Was hast du heute erlebt?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder-slate-600 focus:border-pink-500 focus:outline-none"
                  autoFocus
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Datum</label>
                  <input
                    type="date"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:border-pink-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Land</label>
                  <select
                    value={formCountry}
                    onChange={(e) => setFormCountry(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:border-pink-500 focus:outline-none appearance-none"
                  >
                    {countries.map(c => (
                      <option key={c.id} value={c.id}>{c.flag} {c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Ort</label>
                  <input
                    type="text"
                    value={formLocation}
                    onChange={(e) => setFormLocation(e.target.value)}
                    placeholder="z.B. Petra"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder-slate-600 focus:border-pink-500 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Stimmung</label>
                <div className="flex flex-wrap gap-2">
                  {moods.map(mood => (
                    <button
                      key={mood.id}
                      type="button"
                      onClick={() => setFormMood(mood.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs transition-all ${
                        formMood === mood.id
                          ? 'bg-white/10 text-white ring-1 ring-pink-500/50'
                          : 'bg-white/5 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      <span>{mood.emoji}</span>
                      <span>{mood.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Tagebucheintrag</label>
                <textarea
                  value={formText}
                  onChange={(e) => setFormText(e.target.value)}
                  placeholder="Erzähl von deinem Tag..."
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder-slate-600 focus:border-pink-500 focus:outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-medium hover:opacity-90 transition shadow-lg shadow-pink-500/20"
              >
                {editingId ? 'Speichern' : 'Eintrag erstellen'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Entry list */}
      {groupedEntries.length === 0 ? (
        <div className="bg-[#111827] rounded-2xl border border-white/5 p-12 text-center">
          <BookOpen size={40} className="mx-auto text-slate-700 mb-3" />
          <p className="text-slate-500 text-sm">Noch keine Einträge</p>
          <p className="text-slate-700 text-xs mt-1">Starte dein Reisetagebuch mit dem ersten Eintrag!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {groupedEntries.map(([dateKey, dayEntries]) => (
            <div key={dateKey}>
              <div className="flex items-center gap-3 mb-3">
                <Calendar size={14} className="text-pink-400" />
                <h3 className="text-sm font-semibold text-slate-300">
                  {new Date(dateKey).toLocaleDateString('de-DE', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })}
                </h3>
                <div className="flex-1 h-px bg-white/5" />
              </div>
              <div className="space-y-3">
                {dayEntries.map(entry => {
                  const country = countries.find(c => c.id === entry.countryId);
                  const mood = moods.find(m => m.id === entry.mood);
                  const isExpanded = expandedEntry === entry.id;

                  return (
                    <div
                      key={entry.id}
                      className="bg-[#111827] rounded-2xl border border-white/5 overflow-hidden hover:border-white/10 transition-all"
                    >
                      <div
                        className="p-4 cursor-pointer"
                        onClick={() => setExpandedEntry(isExpanded ? null : entry.id)}
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl mt-0.5">{mood?.emoji || '📝'}</span>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-white">{entry.title}</h4>
                            <div className="flex items-center gap-2 mt-1 flex-wrap">
                              {country && (
                                <span className="text-xs text-slate-500 flex items-center gap-1">
                                  {country.flag} {country.name}
                                </span>
                              )}
                              {entry.location && (
                                <span className="text-xs text-slate-500 flex items-center gap-1">
                                  <MapPin size={10} /> {entry.location}
                                </span>
                              )}
                            </div>
                            {!isExpanded && entry.text && (
                              <p className="text-xs text-slate-500 mt-2 line-clamp-2">{entry.text}</p>
                            )}
                          </div>
                          <ChevronDown size={16} className={`text-slate-500 transition-transform shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
                        </div>
                      </div>
                      {isExpanded && (
                        <div className="px-4 pb-4 pt-1">
                          {entry.text && (
                            <div className="bg-white/[0.02] rounded-xl p-4 mb-3">
                              <p className="text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">{entry.text}</p>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => { e.stopPropagation(); handleEdit(entry); }}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-xs text-slate-400 hover:text-white hover:bg-white/10 transition"
                            >
                              <Edit2 size={12} /> Bearbeiten
                            </button>
                            <button
                              onClick={(e) => { e.stopPropagation(); handleDelete(entry.id); }}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-xs text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition"
                            >
                              <Trash2 size={12} /> Löschen
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
