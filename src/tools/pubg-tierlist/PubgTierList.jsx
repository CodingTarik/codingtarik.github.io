import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, Filter, ChevronDown, ChevronUp, Crosshair, Shield, Zap, Target, Info, X } from 'lucide-react';
import { navigate } from '../../utils/navigation';

// ─── Weapon Data ────────────────────────────────────────────────────────────────
const WEAPONS = [
  // ── S-Tier ──
  { name: 'M416', type: 'AR', tier: 'S', damage: 41, fireRate: 86, range: 80, stability: 78, ammo: '5.56mm', mag: 30, desc: 'Most versatile AR in the game. Extremely stable with full attachment setup.' },
  { name: 'AWM', type: 'Sniper', tier: 'S', damage: 120, fireRate: 20, range: 100, stability: 40, ammo: '.300 Magnum', mag: 5, desc: 'Strongest one-shot potential. Airdrop exclusive only.' },
  { name: 'Groza', type: 'AR', tier: 'S', damage: 49, fireRate: 90, range: 55, stability: 55, ammo: '7.62mm', mag: 30, desc: 'Highest DPS of all ARs. Airdrop exclusive, close-range monster.' },
  { name: 'MG3', type: 'LMG', tier: 'S', damage: 40, fireRate: 95, range: 70, stability: 50, ammo: '7.62mm', mag: 75, desc: 'Massive firestorm with 75-round magazine. Airdrop only.' },

  // ── A-Tier ──
  { name: 'AKM', type: 'AR', tier: 'A', damage: 49, fireRate: 72, range: 70, stability: 45, ammo: '7.62mm', mag: 30, desc: 'High damage per shot. Strong recoil, but deadly on headshots.' },
  { name: 'Beryl M762', type: 'AR', tier: 'A', damage: 47, fireRate: 82, range: 65, stability: 40, ammo: '7.62mm', mag: 30, desc: 'Faster fire rate than AKM, but harder to control.' },
  { name: 'SCAR-L', type: 'AR', tier: 'A', damage: 41, fireRate: 78, range: 75, stability: 75, ammo: '5.56mm', mag: 30, desc: 'Stable alternative to M416. Great all-rounder.' },
  { name: 'Kar98k', type: 'Sniper', tier: 'A', damage: 79, fireRate: 18, range: 95, stability: 50, ammo: '7.62mm', mag: 5, desc: 'One-shot on Level 2 helmet. Best non-airdrop sniper.' },
  { name: 'Mini 14', type: 'DMR', tier: 'A', damage: 46, fireRate: 65, range: 90, stability: 70, ammo: '5.56mm', mag: 20, desc: 'High muzzle velocity, minimal bullet drop. Sniper-DMR hybrid.' },
  { name: 'UMP45', type: 'SMG', tier: 'A', damage: 41, fireRate: 75, range: 50, stability: 82, ammo: '.45 ACP', mag: 25, desc: 'Surprisingly strong at mid-range. Very stable.' },
  { name: 'Vector', type: 'SMG', tier: 'A', damage: 31, fireRate: 96, range: 35, stability: 65, ammo: '9mm', mag: 19, desc: 'Fastest TTK in close quarters. Needs extended mag.' },
  { name: 'DP-28', type: 'LMG', tier: 'A', damage: 51, fireRate: 60, range: 75, stability: 60, ammo: '7.62mm', mag: 47, desc: 'Solid damage, large magazine, bipod when prone. Very underrated.' },

  // ── B-Tier ──
  { name: 'M16A4', type: 'AR', tier: 'B', damage: 43, fireRate: 68, range: 82, stability: 60, ammo: '5.56mm', mag: 30, desc: 'Burst mode strong at range. No auto mode limits close combat.' },
  { name: 'QBZ95', type: 'AR', tier: 'B', damage: 41, fireRate: 78, range: 72, stability: 72, ammo: '5.56mm', mag: 30, desc: 'Sanhok exclusive. Solid replacement for M416/SCAR.' },
  { name: 'SLR', type: 'DMR', tier: 'B', damage: 58, fireRate: 52, range: 85, stability: 45, ammo: '7.62mm', mag: 10, desc: 'Highest DMR damage, but strong recoil.' },
  { name: 'SKS', type: 'DMR', tier: 'B', damage: 53, fireRate: 55, range: 80, stability: 55, ammo: '7.62mm', mag: 10, desc: 'Versatile DMR. Needs full attachments for maximum effectiveness.' },
  { name: 'MP5K', type: 'SMG', tier: 'B', damage: 33, fireRate: 85, range: 40, stability: 78, ammo: '9mm', mag: 30, desc: 'Vikendi exclusive. Good SMG with decent range.' },
  { name: 'Micro UZI', type: 'SMG', tier: 'B', damage: 26, fireRate: 98, range: 25, stability: 55, ammo: '9mm', mag: 25, desc: 'Absolutely deadly up close. Useless beyond 30m.' },
  { name: 'S12K', type: 'Shotgun', tier: 'B', damage: 22, fireRate: 55, range: 15, stability: 50, ammo: '12 Gauge', mag: 5, desc: 'Semi-auto shotgun. Good for building fights.' },
  { name: 'DBS', type: 'Shotgun', tier: 'B', damage: 26, fireRate: 70, range: 20, stability: 45, ammo: '12 Gauge', mag: 14, desc: 'Airdrop shotgun. Double-shot burst is deadly.' },
  { name: 'M249', type: 'LMG', tier: 'B', damage: 45, fireRate: 82, range: 68, stability: 48, ammo: '5.56mm', mag: 100, desc: '100-round magazine for sustained fire. Hard to control.' },
  { name: 'Mosin-Nagant', type: 'Sniper', tier: 'B', damage: 79, fireRate: 18, range: 92, stability: 50, ammo: '7.62mm', mag: 5, desc: 'Kar98k clone with slightly different handling. Same damage.' },

  // ── C-Tier ──
  { name: 'Tommy Gun', type: 'SMG', tier: 'C', damage: 40, fireRate: 72, range: 30, stability: 58, ammo: '.45 ACP', mag: 30, desc: 'No scope allowed. Limited to close range only.' },
  { name: 'Win94', type: 'Sniper', tier: 'C', damage: 66, fireRate: 22, range: 78, stability: 55, ammo: '.45 ACP', mag: 8, desc: 'Miramar/Sanhok. Lever-action with built-in 2.7x scope.' },
  { name: 'VSS', type: 'DMR', tier: 'C', damage: 41, fireRate: 58, range: 55, stability: 75, ammo: '9mm', mag: 10, desc: 'Built-in suppressor + scope. Stealth weapon, but weak damage.' },
  { name: 'S1897', type: 'Shotgun', tier: 'C', damage: 26, fireRate: 25, range: 12, stability: 50, ammo: '12 Gauge', mag: 5, desc: 'Pump-action. Only useful in absolute emergency situations.' },
  { name: 'S686', type: 'Shotgun', tier: 'C', damage: 26, fireRate: 40, range: 12, stability: 50, ammo: '12 Gauge', mag: 2, desc: 'Double-barrel, only 2 shots. High-risk weapon.' },
  { name: 'Mk47 Mutant', type: 'AR', tier: 'C', damage: 49, fireRate: 55, range: 72, stability: 50, ammo: '7.62mm', mag: 20, desc: 'Burst/single-fire AR. Niche pick, AKM is usually better.' },

  // ── D-Tier ──
  { name: 'P92', type: 'Pistol', tier: 'D', damage: 35, fireRate: 60, range: 20, stability: 65, ammo: '9mm', mag: 15, desc: 'Standard pistol. Only when nothing else is available.' },
  { name: 'P1911', type: 'Pistol', tier: 'D', damage: 41, fireRate: 50, range: 22, stability: 60, ammo: '.45 ACP', mag: 7, desc: 'Slightly more damage than P92, smaller magazine.' },
  { name: 'P18C', type: 'Pistol', tier: 'D', damage: 23, fireRate: 85, range: 18, stability: 50, ammo: '9mm', mag: 17, desc: 'Full-auto pistol. Spray-and-pray backup.' },
  { name: 'R1895', type: 'Pistol', tier: 'D', damage: 55, fireRate: 18, range: 25, stability: 40, ammo: '7.62mm', mag: 7, desc: 'Revolver. High damage, but extremely slow.' },
  { name: 'Sawed-Off', type: 'Shotgun', tier: 'D', damage: 22, fireRate: 35, range: 8, stability: 40, ammo: '12 Gauge', mag: 2, desc: 'Shortest range in the game. Pistol-slot shotgun.' },
  { name: 'Crossbow', type: 'Sniper', tier: 'D', damage: 105, fireRate: 5, range: 60, stability: 80, ammo: 'Bolt', mag: 1, desc: 'Silent and deadly, but extremely slow reload.' },
];

const TIERS = ['S', 'A', 'B', 'C', 'D'];
const TIER_CONFIG = {
  S: { color: 'from-yellow-400 to-amber-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400', label: 'S-Tier — Meta-Defining' },
  A: { color: 'from-emerald-400 to-green-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', label: 'A-Tier — Very Strong' },
  B: { color: 'from-blue-400 to-cyan-500', bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', label: 'B-Tier — Solid Pick' },
  C: { color: 'from-orange-400 to-amber-500', bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', label: 'C-Tier — Situational' },
  D: { color: 'from-red-400 to-rose-500', bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', label: 'D-Tier — Avoid if Possible' },
};

const WEAPON_TYPES = ['All', 'AR', 'SMG', 'Sniper', 'DMR', 'LMG', 'Shotgun', 'Pistol'];

const TYPE_ICONS = {
  AR: Crosshair,
  SMG: Zap,
  Sniper: Target,
  DMR: Target,
  LMG: Shield,
  Shotgun: Shield,
  Pistol: Zap,
};

// ─── Stat Bar Component ────────────────────────────────────────────────────────
function StatBar({ label, value, color }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-400 w-16 shrink-0">{label}</span>
      <div className="flex-1 h-2 bg-gray-700/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
      <span className="text-xs font-mono text-gray-400 w-8 text-right">{value}</span>
    </div>
  );
}

// ─── Weapon Card Component ──────────────────────────────────────────────────────
function WeaponCard({ weapon, tierConfig }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = TYPE_ICONS[weapon.type] || Crosshair;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`${tierConfig.bg} ${tierConfig.border} border rounded-xl overflow-hidden cursor-pointer hover:border-opacity-60 transition-all`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tierConfig.color} flex items-center justify-center`}>
              <Icon size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">{weapon.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">{weapon.type}</span>
                <span className="text-xs text-gray-600">|</span>
                <span className="text-xs text-gray-500">{weapon.ammo}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold px-2 py-0.5 rounded bg-gradient-to-r ${tierConfig.color} text-white`}>
              {weapon.tier}
            </span>
            {expanded ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
          </div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-2">
                <StatBar label="Damage" value={weapon.damage} color="from-red-500 to-rose-400" />
                <StatBar label="Fire Rate" value={weapon.fireRate} color="from-yellow-500 to-amber-400" />
                <StatBar label="Range" value={weapon.range} color="from-blue-500 to-cyan-400" />
                <StatBar label="Stability" value={weapon.stability} color="from-green-500 to-emerald-400" />
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                <span>Magazine: {weapon.mag}</span>
              </div>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">{weapon.desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────────
export default function PubgTierList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedTier, setSelectedTier] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const filteredWeapons = useMemo(() => {
    return WEAPONS.filter(w => {
      const matchesSearch = w.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === 'All' || w.type === selectedType;
      const matchesTier = !selectedTier || w.tier === selectedTier;
      return matchesSearch && matchesType && matchesTier;
    });
  }, [searchQuery, selectedType, selectedTier]);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate('/tools')}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} className="text-gray-400" />
            </button>
            <div>
              <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                PUBG Weapon Tier List
              </h1>
              <p className="text-sm text-gray-500 mt-1">Season 2025/26 Meta Ranking of All Weapons</p>
            </div>
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="ml-auto p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Info size={20} className="text-gray-400" />
            </button>
          </div>

          {/* Info Panel */}
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mb-4"
              >
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-sm text-gray-300 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white">How does the Tier List work?</h3>
                    <button onClick={() => setShowInfo(false)}><X size={16} className="text-gray-500" /></button>
                  </div>
                  <p>Weapons are ranked based on damage, fire rate, range, stability, and overall meta strength.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-2">
                    {TIERS.map(t => (
                      <div key={t} className={`${TIER_CONFIG[t].bg} ${TIER_CONFIG[t].border} border rounded-lg p-2 text-center`}>
                        <span className={`font-bold ${TIER_CONFIG[t].text}`}>{t}</span>
                        <p className="text-[10px] text-gray-500 mt-0.5">{TIER_CONFIG[t].label.split('—')[1]?.trim()}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Search */}
          <div className="relative mb-4">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search weapon..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {/* Type Filter */}
            <div className="flex flex-wrap gap-1.5">
              {WEAPON_TYPES.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    selectedType === type
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40'
                      : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-gray-600'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Tier Filter */}
            <div className="flex gap-1.5 ml-auto">
              {selectedTier && (
                <button
                  onClick={() => setSelectedTier(null)}
                  className="px-2 py-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  <X size={14} />
                </button>
              )}
              {TIERS.map(t => (
                <button
                  key={t}
                  onClick={() => setSelectedTier(selectedTier === t ? null : t)}
                  className={`w-8 h-8 text-xs font-bold rounded-lg transition-all ${
                    selectedTier === t
                      ? `bg-gradient-to-br ${TIER_CONFIG[t].color} text-white`
                      : `${TIER_CONFIG[t].bg} ${TIER_CONFIG[t].text} border ${TIER_CONFIG[t].border} hover:opacity-80`
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        {TIERS.filter(t => !selectedTier || t === selectedTier).map(tier => {
          const tierWeapons = filteredWeapons.filter(w => w.tier === tier);
          if (tierWeapons.length === 0) return null;

          return (
            <div key={tier} className="mb-8">
              {/* Tier Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${TIER_CONFIG[tier].color} flex items-center justify-center font-black text-xl text-white shadow-lg`}>
                  {tier}
                </div>
                <div>
                  <h2 className={`font-bold text-lg ${TIER_CONFIG[tier].text}`}>{TIER_CONFIG[tier].label}</h2>
                  <p className="text-xs text-gray-500">{tierWeapons.length} weapon{tierWeapons.length !== 1 ? 's' : ''}</p>
                </div>
              </div>

              {/* Weapons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <AnimatePresence>
                  {tierWeapons.map(weapon => (
                    <WeaponCard key={weapon.name} weapon={weapon} tierConfig={TIER_CONFIG[tier]} />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          );
        })}

        {filteredWeapons.length === 0 && (
          <div className="text-center py-16">
            <Crosshair size={48} className="mx-auto mb-4 text-gray-700" />
            <h3 className="text-lg font-bold text-gray-500">No weapons found</h3>
            <p className="text-sm text-gray-600 mt-1">Try different filters or search terms</p>
          </div>
        )}

        {/* Legend */}
        <div className="mt-12 bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="font-bold text-gray-300 mb-4 flex items-center gap-2">
            <Filter size={16} />
            Stat Explanation
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-rose-400" />
                <span className="text-gray-300 font-medium">Damage</span>
              </div>
              <p className="text-xs text-gray-500">Base damage per hit (chest shot)</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-500 to-amber-400" />
                <span className="text-gray-300 font-medium">Fire Rate</span>
              </div>
              <p className="text-xs text-gray-500">Rate of fire (higher = faster)</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                <span className="text-gray-300 font-medium">Range</span>
              </div>
              <p className="text-xs text-gray-500">Effective weapon range</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-400" />
                <span className="text-gray-300 font-medium">Stability</span>
              </div>
              <p className="text-xs text-gray-500">Recoil control (higher = more stable)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
