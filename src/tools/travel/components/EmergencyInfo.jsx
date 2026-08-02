import React, { useState } from 'react';
import { Phone, Shield, MapPin, AlertTriangle, Search, Globe, MessageCircle, ShieldAlert } from 'lucide-react';

export default function EmergencyInfo({ countries }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = countries.filter(c => {
    if (c.id === 'de') return false;
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
        {/* Back button + country header */}
        <button
          onClick={() => setSelectedCountry(null)}
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
        >
          ← Zurück zur Übersicht
        </button>

        <div className="bg-gradient-to-br from-red-900/20 to-rose-900/20 rounded-2xl border border-red-500/20 p-6 text-center">
          <span className="text-5xl">{country.flag}</span>
          <h2 className="text-2xl font-bold text-white mt-3">{country.name}</h2>
          <p className="text-sm text-slate-400">{country.nameEn} · {country.region}</p>
        </div>

        {/* Emergency numbers */}
        <div className="bg-[#111827] rounded-2xl border border-red-500/10 p-5">
          <h3 className="text-sm font-semibold text-red-400 mb-4 flex items-center gap-2">
            <Phone size={14} /> Notrufnummern
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <EmergencyNumber label="Polizei" number={country.emergency.police} icon="🚔" />
            <EmergencyNumber label="Krankenwagen" number={country.emergency.ambulance} icon="🚑" />
            <EmergencyNumber label="Feuerwehr" number={country.emergency.fire} icon="🚒" />
            <EmergencyNumber label="Allg. Notruf" number={country.emergency.general} icon="📞" />
          </div>
        </div>

        {/* Embassy */}
        <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">
          <h3 className="text-sm font-semibold text-blue-400 mb-4 flex items-center gap-2">
            <Shield size={14} /> Deutsche Botschaft / Konsulat
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin size={14} className="text-slate-500 mt-0.5 shrink-0" />
              <div>
                <div className="text-xs text-slate-400">Stadt</div>
                <div className="text-sm text-white">{country.embassy.city}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={14} className="text-slate-500 mt-0.5 shrink-0" />
              <div>
                <div className="text-xs text-slate-400">Telefon</div>
                <a href={`tel:${country.embassy.phone}`} className="text-sm text-teal-400 hover:underline">{country.embassy.phone}</a>
              </div>
            </div>
            {country.embassy.address && country.embassy.address !== '—' && (
              <div className="flex items-start gap-3">
                <Globe size={14} className="text-slate-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Adresse</div>
                  <div className="text-sm text-slate-300">{country.embassy.address}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Safety info */}
        <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">
          <h3 className="text-sm font-semibold text-amber-400 mb-4 flex items-center gap-2">
            <AlertTriangle size={14} /> Sicherheitshinweise
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">{country.safety}</p>
        </div>

        {/* Drinking water */}
        <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">
          <h3 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
            💧 Trinkwasser
          </h3>
          <p className="text-sm text-slate-300">{country.drinkingWater}</p>
        </div>

        {/* Emergency phrases */}
        {country.phrases.length > 0 && (
          <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">
            <h3 className="text-sm font-semibold text-purple-400 mb-4 flex items-center gap-2">
              <MessageCircle size={14} /> Wichtige Phrasen
            </h3>
            <div className="space-y-2">
              {country.phrases.map((phrase, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <span className="text-sm text-slate-400">{phrase.de}</span>
                  <span className="text-sm text-white font-medium text-right">{phrase.local}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* General emergency numbers */}
        <div className="bg-amber-500/10 rounded-2xl border border-amber-500/20 p-5">
          <h3 className="text-sm font-semibold text-amber-400 mb-3">⚠️ Allgemeine Hinweise</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• <strong>Krisenvorsorgeliste</strong>: Registriere dich bei der Deutschen Botschaft (elefand.diplo.de)</li>
            <li>• <strong>Bürgertelefon AA</strong>: +49 30 1817 2000 (rund um die Uhr)</li>
            <li>• <strong>Versicherung</strong>: Halte deine Versicherungsnummer immer griffbereit</li>
            <li>• <strong>Passkopie</strong>: Foto vom Reisepass auf dem Handy + Cloud speichern</li>
          </ul>
        </div>
      </div>
    );
  }

  // Country selection grid
  return (
    <div className="space-y-6 pb-4">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-900/20 to-rose-900/20 rounded-2xl border border-red-500/10 p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
            <ShieldAlert size={20} className="text-red-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Notfall-Info</h2>
            <p className="text-xs text-slate-400">Notrufnummern, Botschaften & Sicherheit</p>
          </div>
        </div>
        <div className="bg-amber-500/10 rounded-xl p-3 text-xs text-amber-300">
          💡 Tipp: Speichere die Notfallnummern deiner nächsten Reiseländer offline im Handy!
        </div>
      </div>

      {/* Quick global numbers */}
      <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">
        <h3 className="text-sm font-semibold text-slate-300 mb-3">Wichtige Nummern — immer dabei</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <QuickNumber label="Bürgertelefon (AA)" number="+49 30 1817 2000" note="Rund um die Uhr" />
          <QuickNumber label="Sperr-Notruf Karten" number="+49 116 116" note="EC/Kreditkarten sperren" />
          <QuickNumber label="ADAC Auslandsnotruf" number="+49 89 22 22 22" note="Bei Autopannen" />
          <QuickNumber label="EU-Notruf" number="112" note="Funktioniert in allen EU-Ländern" />
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Land suchen..."
          className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder-slate-600 focus:border-red-500 focus:outline-none"
        />
      </div>

      {/* Country grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map(country => (
          <button
            key={country.id}
            onClick={() => setSelectedCountry(country.id)}
            className="bg-[#111827] rounded-2xl border border-white/5 p-4 text-center hover:border-red-500/30 hover:bg-red-500/5 transition-all hover:scale-[1.02]"
          >
            <span className="text-3xl">{country.flag}</span>
            <div className="text-sm font-medium text-slate-200 mt-2">{country.name}</div>
            <div className="text-[10px] text-slate-500 mt-0.5">{country.region}</div>
            <div className="mt-2 text-xs text-red-400 font-mono">{country.emergency.general}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function EmergencyNumber({ label, number, icon }) {
  return (
    <a
      href={`tel:${number}`}
      className="bg-white/5 rounded-xl p-3 flex items-center gap-3 hover:bg-red-500/10 transition group"
    >
      <span className="text-xl">{icon}</span>
      <div>
        <div className="text-xs text-slate-400">{label}</div>
        <div className="text-lg font-bold text-white font-mono group-hover:text-red-400 transition">{number}</div>
      </div>
    </a>
  );
}

function QuickNumber({ label, number, note }) {
  return (
    <a
      href={`tel:${number.replace(/\s/g, '')}`}
      className="bg-white/5 rounded-xl p-3 hover:bg-white/10 transition group"
    >
      <div className="text-xs text-slate-400">{label}</div>
      <div className="text-base font-bold text-white font-mono group-hover:text-teal-400 transition">{number}</div>
      <div className="text-[10px] text-slate-500 mt-0.5">{note}</div>
    </a>
  );
}

