import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { ArrowLeft, Save, Palette } from 'lucide-react';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../lib/db';
import { useT } from '../lib/i18n';
import type { Deck, DeckSettings } from '../types';
import { DEFAULT_DECK_SETTINGS } from '../types';

const COLORS = [
  '#6366f1', '#8b5cf6', '#a855f7', '#ec4899', '#f43f5e',
  '#ef4444', '#f97316', '#eab308', '#22c55e', '#14b8a6',
  '#06b6d4', '#3b82f6',
];

const ICONS = ['📚', '🧠', '🌍', '🔬', '📐', '🎵', '💻', '🏥', '⚖️', '🎨', '🚀', '🌱', '📖', '🔥', '💡', '🎯', '🏆', '⭐'];

export default function DeckEditor() {
  const { t } = useT();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isNew = !id || id === 'new';

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState(COLORS[0]);
  const [icon, setIcon] = useState('📚');
  const [tags, setTags] = useState('');
  const [settings, setSettings] = useState<DeckSettings>({ ...DEFAULT_DECK_SETTINGS });
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [parentDeckId, setParentDeckId] = useState<string>('');

  const allDecks = useLiveQuery(() => db.decks.toArray());

  useEffect(() => {
    if (!isNew && id) {
      db.decks.get(id).then(deck => {
        if (deck) {
          setName(deck.name);
          setDescription(deck.description);
          setColor(deck.color);
          setIcon(deck.icon);
          setTags(deck.tags.join(', '));
          setSettings(deck.settings);
          setParentDeckId(deck.parentDeckId || '');
        }
      });
    }
  }, [id, isNew]);

  const handleSave = async () => {
    if (!name.trim()) {
      toast.error(t('deckEditor.toast.nameRequired'));
      return;
    }

    const deck: Deck = {
      id: isNew ? uuidv4() : id!,
      name: name.trim(),
      description: description.trim(),
      color,
      icon,
      createdAt: isNew ? Date.now() : Date.now(),
      updatedAt: Date.now(),
      settings,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      parentDeckId: parentDeckId || undefined,
    };

    if (!isNew) {
      const existing = await db.decks.get(id!);
      if (existing) {
        deck.createdAt = existing.createdAt;
        deck.isFavorite = existing.isFavorite;
      }
    }

    await db.decks.put(deck);
    toast.success(isNew ? t('deckEditor.toast.created') : t('deckEditor.toast.updated'));
    navigate(isNew ? `/deck/${deck.id}` : `/deck/${id}`);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold">{isNew ? t('deckEditor.newDeck') : t('deckEditor.editDeck')}</h1>
      </div>

      <div className="space-y-6">
        {/* Icon & Color */}
        <div className="glass-card rounded-2xl p-5">
          <label className="text-sm font-medium text-slate-300 mb-3 block">Icon</label>
          <div className="flex flex-wrap gap-2 mb-4">
            {ICONS.map(i => (
              <button
                key={i}
                onClick={() => setIcon(i)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-all
                  ${icon === i ? 'bg-primary-500/20 ring-2 ring-primary-500 scale-110' : 'bg-slate-800/50 hover:bg-slate-700/50'}`}
              >
                {i}
              </button>
            ))}
          </div>

          <label className="text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
            <Palette size={16} />
            Color
          </label>
          <div className="flex flex-wrap gap-2">
            {COLORS.map(c => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`w-8 h-8 rounded-full transition-all
                  ${color === c ? 'ring-2 ring-white scale-110' : 'hover:scale-110'}`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>

        {/* Name & Description */}
        <div className="glass-card rounded-2xl p-5 space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-300 mb-1.5 block">{t('deckEditor.name')}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('deckEditor.namePlaceholder')}
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-white transition-colors"
              autoFocus
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-300 mb-1.5 block">{t('deckEditor.description')}</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t('deckEditor.descPlaceholder')}
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-white resize-none transition-colors"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-300 mb-1.5 block">{t('deckEditor.tags')}</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g., language, german, vocabulary"
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-white transition-colors"
            />
            <p className="text-xs text-slate-500 mt-1">Separate tags with commas</p>
          </div>

          {/* Parent Deck (Subdeck support) */}
          <div>
            <label className="text-sm font-medium text-slate-300 mb-1.5 block">Parent Deck (optional)</label>
            <select
              value={parentDeckId}
              onChange={(e) => setParentDeckId(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-white transition-colors"
            >
              <option value="">None (top-level deck)</option>
              {allDecks?.filter(d => d.id !== id).map(d => (
                <option key={d.id} value={d.id}>{d.icon} {d.name}</option>
              ))}
            </select>
            <p className="text-xs text-slate-500 mt-1">Make this a subdeck of another deck (Anki-style hierarchy)</p>
          </div>
        </div>

        {/* Study Settings */}
        <div className="glass-card rounded-2xl p-5">
          <h2 className="text-lg font-bold mb-4">{t('deckEditor.studySettings')}</h2>

          <div className="grid grid-cols-2 gap-4">
            <SettingInput
              label="New cards/day"
              value={settings.newCardsPerDay}
              onChange={(v) => setSettings(s => ({ ...s, newCardsPerDay: v }))}
            />
            <SettingInput
              label="Reviews/day"
              value={settings.reviewsPerDay}
              onChange={(v) => setSettings(s => ({ ...s, reviewsPerDay: v }))}
            />
            <SettingInput
              label="Graduating interval (days)"
              value={settings.graduatingInterval}
              onChange={(v) => setSettings(s => ({ ...s, graduatingInterval: v }))}
            />
            <SettingInput
              label="Easy interval (days)"
              value={settings.easyInterval}
              onChange={(v) => setSettings(s => ({ ...s, easyInterval: v }))}
            />
          </div>

          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="mt-4 text-sm text-primary-400 hover:text-primary-300 transition-colors"
          >
            {showAdvanced ? 'Hide' : 'Show'} Advanced Settings
          </button>

          {showAdvanced && (
            <div className="mt-4 grid grid-cols-2 gap-4 pt-4 border-t border-slate-700/50">
              <SettingInput
                label="Starting ease"
                value={settings.startingEase}
                step={0.1}
                onChange={(v) => setSettings(s => ({ ...s, startingEase: v }))}
              />
              <SettingInput
                label="Easy bonus"
                value={settings.easyBonus}
                step={0.1}
                onChange={(v) => setSettings(s => ({ ...s, easyBonus: v }))}
              />
              <SettingInput
                label="Interval modifier"
                value={settings.intervalModifier}
                step={0.1}
                onChange={(v) => setSettings(s => ({ ...s, intervalModifier: v }))}
              />
              <SettingInput
                label="Max interval (days)"
                value={settings.maxInterval}
                onChange={(v) => setSettings(s => ({ ...s, maxInterval: v }))}
              />
              <SettingInput
                label="Lapse new interval"
                value={settings.lapseNewInterval}
                step={0.1}
                onChange={(v) => setSettings(s => ({ ...s, lapseNewInterval: v }))}
              />
              <SettingInput
                label="Lapse min interval"
                value={settings.lapseMinInterval}
                onChange={(v) => setSettings(s => ({ ...s, lapseMinInterval: v }))}
              />
              <div className="col-span-2">
                <label className="text-sm text-slate-400 mb-1.5 block">Learning steps (minutes, comma-separated)</label>
                <input
                  type="text"
                  value={settings.learningSteps.join(', ')}
                  onChange={(e) => {
                    const steps = e.target.value.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
                    setSettings(s => ({ ...s, learningSteps: steps.length > 0 ? steps : [1, 10] }));
                  }}
                  className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-sm transition-colors"
                />
              </div>
              <div className="col-span-2">
                <label className="text-sm text-slate-400 mb-1.5 block">Lapse steps (minutes, comma-separated)</label>
                <input
                  type="text"
                  value={settings.lapseSteps.join(', ')}
                  onChange={(e) => {
                    const steps = e.target.value.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
                    setSettings(s => ({ ...s, lapseSteps: steps.length > 0 ? steps : [10] }));
                  }}
                  className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-sm transition-colors"
                />
              </div>
              <label className="col-span-2 flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.showTimer}
                  onChange={(e) => setSettings(s => ({ ...s, showTimer: e.target.checked }))}
                  className="w-4 h-4 rounded bg-slate-800 border-slate-600"
                />
                <span className="text-sm text-slate-300">Show timer during study</span>
              </label>
              <label className="col-span-2 flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.buryRelated}
                  onChange={(e) => setSettings(s => ({ ...s, buryRelated: e.target.checked }))}
                  className="w-4 h-4 rounded bg-slate-800 border-slate-600"
                />
                <span className="text-sm text-slate-300">Bury related cards</span>
              </label>
            </div>
          )}
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg glow-sm"
        >
          <Save size={20} />
          {isNew ? t('deckEditor.createDeck') : t('deckEditor.saveChanges')}
        </button>
      </div>
    </div>
  );
}

function SettingInput({ label, value, step = 1, onChange }: {
  label: string;
  value: number;
  step?: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className="text-sm text-slate-400 mb-1.5 block">{label}</label>
      <input
        type="number"
        value={value}
        step={step}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-sm transition-colors"
      />
    </div>
  );
}
