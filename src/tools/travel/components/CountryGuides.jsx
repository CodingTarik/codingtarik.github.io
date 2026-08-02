import React, { useState } from 'react';
import {
  Search, Wifi, CreditCard, Plug, Droplets, Car, MessageCircle,
  Shield, Utensils, ChevronDown, Globe, Phone, Smartphone
} from 'lucide-react';

export default function CountryGuides({ countries }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const regions = ['all', ...new Set(countries.map(c => c.region))];

  const filtered = countries.filter(c => {
    if (c.id === 'de') return false;
    if (selectedRegion !== 'all' && c.region !== selectedRegion) return false;
    if (searchQuery) {
      return c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             c.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  if (selectedCountry) {
    const country = countries.find(c => c.id === selectedCountry);
    if (!country) return null;

    return (
      <div className="space-y-4 pb-4">
        <button
          onClick={() => setSelectedCountry(null)}
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
        >
          ← Zurück zur Übersicht
        </button>

        {/* Country header */}
        <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-2xl border border-cyan-500/10 p-6">
          <div className="flex items-center gap-4">
            <span className="text-5xl">{country.flag}</span>
            <div>
              <h2 className="text-2xl font-bold text-white">{country.name}</h2>
              <p className="text-sm text-slate-400">{country.nameEn} · {country.region}</p>
            </div>
          </div>
        </div>

        {/* Info sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GuideCard icon={<CreditCard size={16} className="text-emerald-400" />} title="Währung & Bezahlen" color="emerald">
            <InfoRow label="Währung" value={`${country.currency.name} (${country.currency.code})`} />
            <InfoRow label="Symbol" value={country.currency.symbol} />
            <InfoRow label="Kurs" value={`1 EUR ≈ ${country.currency.rateToEur} ${country.currency.code}`} />
            <InfoRow label="Trinkgeld" value={country.tipping} />
          </GuideCard>

          <GuideCard icon={<Smartphone size={16} className="text-blue-400" />} title="Internet & SIM" color="blue">
            <InfoRow label="SIM-Karte" value={country.simCard} />
            <InfoRow label="Internet" value={country.internet} />
          </GuideCard>

          <GuideCard icon={<Plug size={16} className="text-amber-400" />} title="Strom & Steckdosen" color="amber">
            <InfoRow label="Steckertyp" value={country.plugType} />
            <InfoRow label="Spannung" value={country.voltage} />
            {country.plugType.includes('M') || country.plugType.includes('G') || country.plugType.includes('I') ? (
              <div className="mt-2 bg-amber-500/10 rounded-xl p-2.5 text-xs text-amber-300">
                ⚠️ Adapter nötig! Besorge dir einen Universal-Reiseadapter.
              </div>
            ) : (
              <div className="mt-2 bg-emerald-500/10 rounded-xl p-2.5 text-xs text-emerald-300">
                ✅ Typ C/F — Deutsche Stecker funktionieren hier!
              </div>
            )}
          </GuideCard>

          <GuideCard icon={<Car size={16} className="text-violet-400" />} title="Transport" color="violet">
            <p className="text-sm text-slate-300 leading-relaxed">{country.transport}</p>
          </GuideCard>

          <GuideCard icon={<Droplets size={16} className="text-cyan-400" />} title="Trinkwasser" color="cyan">
            <p className="text-sm text-slate-300">{country.drinkingWater}</p>
          </GuideCard>

          <GuideCard icon={<Shield size={16} className="text-red-400" />} title="Sicherheit" color="red">
            <p className="text-sm text-slate-300 leading-relaxed">{country.safety}</p>
          </GuideCard>

          <GuideCard icon={<Globe size={16} className="text-indigo-400" />} title="Sprachen" color="indigo">
            <div className="flex flex-wrap gap-2">
              {country.languages.map(lang => (
                <span key={lang} className="bg-white/5 px-2.5 py-1 rounded-lg text-xs text-slate-300">{lang}</span>
              ))}
            </div>
          </GuideCard>

          <GuideCard icon={<Phone size={16} className="text-rose-400" />} title="Notruf" color="rose">
            <InfoRow label="Allgemein" value={country.emergency.general} />
            <InfoRow label="Polizei" value={country.emergency.police} />
            <InfoRow label="Krankenwagen" value={country.emergency.ambulance} />
          </GuideCard>
        </div>

        {/* Visa info */}
        <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">
          <h3 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">📋 Visum</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <div className="text-xs text-slate-400">Status</div>
              <div className={`text-sm font-semibold mt-0.5 ${
                country.visa.type === 'visa-free' ? 'text-emerald-400' :
                country.visa.type === 'visa-required' ? 'text-red-400' : 'text-amber-400'
              }`}>
                {country.visa.type === 'visa-free' ? 'Visumfrei' :
                 country.visa.type === 'visa-on-arrival' ? 'Visa on Arrival' :
                 country.visa.type === 'e-visa' ? 'e-Visa' :
                 country.visa.type === 'visa-required' ? 'Visum nötig' : country.visa.type}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Dauer</div>
              <div className="text-sm text-slate-200 mt-0.5">{country.visa.duration}</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Kosten</div>
              <div className="text-sm text-slate-200 mt-0.5">{country.visa.cost}</div>
            </div>
          </div>
          {country.visa.note && (
            <div className="mt-3 bg-blue-500/10 rounded-xl p-3 text-xs text-blue-300">
              💡 {country.visa.note}
            </div>
          )}
        </div>

        {/* Phrases */}
        {country.phrases.length > 0 && (
          <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">
            <h3 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
              <MessageCircle size={14} className="text-purple-400" /> Wichtige Phrasen
            </h3>
            <div className="space-y-2">
              {country.phrases.map((phrase, i) => (
                <div key={i} className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0">
                  <span className="text-sm text-slate-400">{phrase.de}</span>
                  <span className="text-sm text-white font-medium text-right max-w-[50%]">{phrase.local}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Country selection view
  return (
    <div className="space-y-6 pb-4">
      {/* Header */}
      <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-2xl border border-cyan-500/10 p-5">
        <h2 className="text-lg font-bold text-white mb-1">Länder-Guides</h2>
        <p className="text-xs text-slate-400">Praktische Infos für jedes Land deiner Reise — Strom, SIM, Transport, Trinkgeld & mehr.</p>
      </div>

      {/* Search + filter */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex-1 min-w-[200px] relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Land suchen..."
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto">
          {regions.map(region => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedRegion === region
                  ? 'bg-white/10 text-white'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
              }`}
            >
              {region === 'all' ? 'Alle' : region}
            </button>
          ))}
        </div>
      </div>

      {/* Country cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map(country => (
          <button
            key={country.id}
            onClick={() => setSelectedCountry(country.id)}
            className="bg-[#111827] rounded-2xl border border-white/5 p-4 text-left hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all hover:scale-[1.02] group"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{country.flag}</span>
              <div>
                <div className="text-sm font-medium text-slate-200 group-hover:text-white transition">{country.name}</div>
                <div className="text-[10px] text-slate-500">{country.region}</div>
              </div>
            </div>
            <div className="space-y-1.5">
              <MiniInfo icon="💰" text={`${country.currency.code} (${country.currency.symbol})`} />
              <MiniInfo icon="🔌" text={country.plugType} />
              <MiniInfo icon="🕐" text={`UTC${country.utcOffset}`} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function GuideCard({ icon, title, color, children }) {
  return (
    <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">
      <h3 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
        {icon} {title}
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-2">
      <span className="text-xs text-slate-400 shrink-0">{label}</span>
      <span className="text-xs text-slate-200 text-right">{value}</span>
    </div>
  );
}

function MiniInfo({ icon, text }) {
  return (
    <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}
