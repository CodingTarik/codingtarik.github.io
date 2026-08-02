import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, XCircle, Clock, FileText, Shield, ChevronDown, Check } from 'lucide-react';

const CHECKLIST_KEY = 'travelhub_visa_checklist';

const defaultChecklist = [
  { id: 'passport', label: 'Reisepass (mind. 6 Monate gültig)', checked: false },
  { id: 'passport_copy', label: 'Passkopie (digital + Papier)', checked: false },
  { id: 'photos', label: 'Passfotos (4x, biometrisch)', checked: false },
  { id: 'insurance', label: 'Auslandskrankenversicherung', checked: false },
  { id: 'insurance_card', label: 'Versicherungskarte / Police-Nr.', checked: false },
  { id: 'vaccination', label: 'Impfausweis / Impfpass', checked: false },
  { id: 'drivers_license', label: 'Internationaler Führerschein', checked: false },
  { id: 'credit_cards', label: 'Kreditkarten (min. 2 verschiedene)', checked: false },
  { id: 'cash_eur', label: 'Bargeld EUR', checked: false },
  { id: 'cash_usd', label: 'Bargeld USD (für Visa on Arrival)', checked: false },
  { id: 'flight_docs', label: 'Flugtickets / Buchungsbestätigungen', checked: false },
  { id: 'hotel_docs', label: 'Hotelreservierungen', checked: false },
  { id: 'emergency_contacts', label: 'Notfallkontakte aufgeschrieben', checked: false },
  { id: 'vpn', label: 'VPN installiert (für China!)', checked: false },
  { id: 'apps', label: 'Offline-Karten heruntergeladen', checked: false },
  { id: 'sim', label: 'eSIM / SIM-Strategie geplant', checked: false },
];

function loadChecklist() {
  try { return JSON.parse(localStorage.getItem(CHECKLIST_KEY)) || defaultChecklist; }
  catch { return defaultChecklist; }
}

function saveChecklist(list) {
  localStorage.setItem(CHECKLIST_KEY, JSON.stringify(list));
}

function getVisaTypeConfig(type) {
  switch (type) {
    case 'visa-free': return { label: 'Visumfrei', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', icon: CheckCircle2 };
    case 'visa-on-arrival': return { label: 'Visa on Arrival', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', icon: AlertCircle };
    case 'e-visa': return { label: 'e-Visa', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', icon: AlertCircle };
    case 'visa-required': return { label: 'Visum erforderlich', color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20', icon: XCircle };
    case 'home': return { label: 'Heimatland', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', icon: Shield };
    default: return { label: type, color: 'text-slate-400', bg: 'bg-white/5', border: 'border-white/10', icon: FileText };
  }
}

export default function VisaChecker({ countries }) {
  const [checklist, setChecklist] = useState(loadChecklist);
  const [filterType, setFilterType] = useState('all');
  const [expandedCountry, setExpandedCountry] = useState(null);

  useEffect(() => { saveChecklist(checklist); }, [checklist]);

  const toggleCheck = (id) => {
    setChecklist(prev => prev.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const checkedCount = checklist.filter(i => i.checked).length;
  const progress = (checkedCount / checklist.length) * 100;

  const filteredCountries = countries.filter(c => {
    if (c.id === 'de') return false;
    if (filterType === 'all') return true;
    return c.visa.type === filterType;
  });

  const visaStats = {
    free: countries.filter(c => c.visa.type === 'visa-free').length,
    arrival: countries.filter(c => c.visa.type === 'visa-on-arrival' || c.visa.type === 'e-visa').length,
    required: countries.filter(c => c.visa.type === 'visa-required').length,
  };

  return (
    <div className="space-y-6 pb-4">
      {/* Visa overview stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-emerald-500/10 rounded-2xl border border-emerald-500/20 p-4 text-center">
          <div className="text-2xl font-bold text-emerald-400">{visaStats.free}</div>
          <div className="text-xs text-slate-400 mt-1">Visumfrei</div>
        </div>
        <div className="bg-amber-500/10 rounded-2xl border border-amber-500/20 p-4 text-center">
          <div className="text-2xl font-bold text-amber-400">{visaStats.arrival}</div>
          <div className="text-xs text-slate-400 mt-1">Visa on Arrival / e-Visa</div>
        </div>
        <div className="bg-red-500/10 rounded-2xl border border-red-500/20 p-4 text-center">
          <div className="text-2xl font-bold text-red-400">{visaStats.required}</div>
          <div className="text-xs text-slate-400 mt-1">Visum nötig</div>
        </div>
      </div>

      {/* Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {[
          { value: 'all', label: 'Alle' },
          { value: 'visa-free', label: 'Visumfrei' },
          { value: 'visa-on-arrival', label: 'On Arrival' },
          { value: 'e-visa', label: 'e-Visa' },
          { value: 'visa-required', label: 'Visum nötig' },
        ].map(f => (
          <button
            key={f.value}
            onClick={() => setFilterType(f.value)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              filterType === f.value ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Country visa cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredCountries.map(country => {
          const config = getVisaTypeConfig(country.visa.type);
          const Icon = config.icon;
          const isExpanded = expandedCountry === country.id;

          return (
            <div
              key={country.id}
              className={`${config.bg} rounded-2xl border ${config.border} overflow-hidden transition-all hover:scale-[1.01] cursor-pointer`}
              onClick={() => setExpandedCountry(isExpanded ? null : country.id)}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{country.flag}</span>
                    <div>
                      <div className="text-sm font-semibold text-slate-100">{country.name}</div>
                      <div className="text-[10px] text-slate-500">{country.region}</div>
                    </div>
                  </div>
                  <Icon size={20} className={config.color} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Status</span>
                    <span className={`text-xs font-semibold ${config.color}`}>{config.label}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Dauer</span>
                    <span className="text-xs text-slate-300">{country.visa.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Kosten</span>
                    <span className="text-xs text-slate-300">{country.visa.cost}</span>
                  </div>
                </div>
                {country.visa.note && (
                  <div className={`mt-3 p-2.5 rounded-xl ${config.bg} text-xs ${config.color} leading-relaxed`}>
                    💡 {country.visa.note}
                  </div>
                )}
                <button className="flex items-center gap-1 mt-3 text-[10px] text-slate-500 hover:text-slate-300 transition">
                  <ChevronDown size={12} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  {isExpanded ? 'Weniger' : 'Mehr Info'}
                </button>
              </div>
              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Steckdose</span>
                    <span className="text-xs text-slate-300">{country.plugType}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Spannung</span>
                    <span className="text-xs text-slate-300">{country.voltage}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Währung</span>
                    <span className="text-xs text-slate-300">{country.currency.name} ({country.currency.code})</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Document checklist */}
      <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
            <FileText size={14} className="text-amber-400" /> Dokumente-Checkliste
          </h3>
          <span className="text-xs text-slate-400">{checkedCount}/{checklist.length}</span>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-4">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="space-y-1">
          {checklist.map(item => (
            <button
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                item.checked ? 'bg-white/[0.02]' : 'hover:bg-white/5'
              }`}
            >
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-all ${
                item.checked
                  ? 'bg-teal-500 border-teal-500'
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {item.checked && <Check size={12} className="text-white" />}
              </div>
              <span className={`text-sm transition-all ${item.checked ? 'text-slate-500 line-through' : 'text-slate-300'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
