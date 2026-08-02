import React, { useState, useEffect } from 'react';
import { Clock, Sun, Moon, Sunrise, Sunset } from 'lucide-react';

function getTimeInTimezone(timezone) {
  try {
    const now = new Date();
    const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const timeStr = now.toLocaleTimeString('de-DE', options);
    const dateOptions = { timeZone: timezone, weekday: 'short', day: '2-digit', month: '2-digit' };
    const dateStr = now.toLocaleDateString('de-DE', dateOptions);
    const hour = parseInt(timeStr.split(':')[0], 10);
    return { time: timeStr, date: dateStr, hour };
  } catch {
    return { time: '--:--:--', date: '--', hour: 12 };
  }
}

function getTimeIcon(hour) {
  if (hour >= 6 && hour < 8) return <Sunrise size={16} className="text-amber-400" />;
  if (hour >= 8 && hour < 18) return <Sun size={16} className="text-yellow-400" />;
  if (hour >= 18 && hour < 20) return <Sunset size={16} className="text-orange-400" />;
  return <Moon size={16} className="text-indigo-300" />;
}

function getTimePeriod(hour) {
  if (hour >= 6 && hour < 12) return 'Morgen';
  if (hour >= 12 && hour < 18) return 'Nachmittag';
  if (hour >= 18 && hour < 22) return 'Abend';
  return 'Nacht';
}

function getTimeBgGradient(hour) {
  if (hour >= 6 && hour < 8) return 'from-amber-900/20 to-orange-900/20';
  if (hour >= 8 && hour < 18) return 'from-sky-900/20 to-blue-900/20';
  if (hour >= 18 && hour < 20) return 'from-orange-900/20 to-rose-900/20';
  return 'from-indigo-900/20 to-slate-900/20';
}

export default function TimezoneDashboard({ countries }) {
  const [times, setTimes] = useState({});
  const [homeCountry] = useState('de');
  const [selectedRegion, setSelectedRegion] = useState('all');

  useEffect(() => {
    const updateTimes = () => {
      const newTimes = {};
      countries.forEach(c => {
        newTimes[c.id] = getTimeInTimezone(c.timezone);
      });
      setTimes(newTimes);
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, [countries]);

  const regions = ['all', ...new Set(countries.map(c => c.region))];
  const filtered = selectedRegion === 'all' ? countries : countries.filter(c => c.region === selectedRegion);

  // Sort by UTC offset
  const sorted = [...filtered].sort((a, b) => {
    const offsetA = parseFloat(a.utcOffset.replace('+', ''));
    const offsetB = parseFloat(b.utcOffset.replace('+', ''));
    return offsetA - offsetB;
  });

  const homeTime = times[homeCountry];

  return (
    <div className="space-y-6 pb-4">
      {/* Home time hero */}
      <div className="bg-gradient-to-br from-indigo-900/30 to-blue-900/20 rounded-2xl border border-indigo-500/10 p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl">🇩🇪</span>
          <span className="text-sm text-slate-400">Zuhause — Deutschland</span>
        </div>
        <div className="text-5xl sm:text-6xl font-bold text-white tracking-tight font-mono">
          {homeTime?.time || '--:--:--'}
        </div>
        <div className="flex items-center justify-center gap-2 mt-2 text-sm text-slate-400">
          {homeTime && getTimeIcon(homeTime.hour)}
          <span>{homeTime?.date}</span>
          <span className="text-slate-600">·</span>
          <span>{homeTime ? getTimePeriod(homeTime.hour) : '—'}</span>
        </div>
      </div>

      {/* Region filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
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

      {/* Clock grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {sorted.map(country => {
          const t = times[country.id];
          if (!t) return null;
          const isHome = country.id === homeCountry;
          const diffHours = parseFloat(country.utcOffset) - 1; // diff from Germany (UTC+1)

          return (
            <div
              key={country.id}
              className={`bg-gradient-to-br ${getTimeBgGradient(t.hour)} rounded-2xl border p-4 transition-all hover:scale-[1.02] ${
                isHome ? 'border-indigo-500/30 ring-1 ring-indigo-500/20' : 'border-white/5'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{country.flag}</span>
                  <div>
                    <div className="text-xs font-medium text-slate-200 leading-tight">{country.name}</div>
                    <div className="text-[10px] text-slate-500">UTC{country.utcOffset}</div>
                  </div>
                </div>
                {getTimeIcon(t.hour)}
              </div>
              <div className="text-2xl font-bold text-white font-mono tracking-tight">{t.time}</div>
              <div className="flex items-center justify-between mt-1.5">
                <span className="text-[10px] text-slate-500">{t.date}</span>
                {!isHome && (
                  <span className={`text-[10px] font-medium ${diffHours >= 0 ? 'text-teal-400' : 'text-amber-400'}`}>
                    {diffHours >= 0 ? '+' : ''}{diffHours}h
                  </span>
                )}
                {isHome && <span className="text-[10px] text-indigo-400 font-medium">Zuhause</span>}
              </div>
            </div>
          );
        })}
      </div>

      {/* Meeting planner */}
      <MeetingPlanner countries={countries} times={times} />
    </div>
  );
}

function MeetingPlanner({ countries, times }) {
  const [selectedCountries, setSelectedCountries] = useState(['de']);
  const [addCountry, setAddCountry] = useState('');

  const handleAdd = () => {
    if (addCountry && !selectedCountries.includes(addCountry)) {
      setSelectedCountries(prev => [...prev, addCountry]);
      setAddCountry('');
    }
  };

  const handleRemove = (id) => {
    if (id !== 'de') setSelectedCountries(prev => prev.filter(c => c !== id));
  };

  // Find overlapping "good hours" (8-22)
  const goodHours = [];
  for (let h = 0; h < 24; h++) {
    const allGood = selectedCountries.every(cId => {
      const c = countries.find(co => co.id === cId);
      if (!c) return false;
      const offset = parseFloat(c.utcOffset);
      const localHour = (h + offset) % 24;
      return localHour >= 8 && localHour <= 22;
    });
    if (allGood) goodHours.push(h);
  }

  return (
    <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">
      <h3 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
        <Clock size={14} className="text-blue-400" /> Meeting-Planer
      </h3>
      <p className="text-xs text-slate-500 mb-4">Finde die beste Zeit für Anrufe zwischen verschiedenen Zeitzonen.</p>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        {selectedCountries.map(cId => {
          const c = countries.find(co => co.id === cId);
          if (!c) return null;
          return (
            <span key={cId} className="flex items-center gap-1.5 bg-white/5 rounded-lg px-2.5 py-1.5 text-xs text-slate-300">
              {c.flag} {c.name}
              {cId !== 'de' && (
                <button onClick={() => handleRemove(cId)} className="text-slate-500 hover:text-red-400 transition ml-1">×</button>
              )}
            </span>
          );
        })}
        <div className="flex items-center gap-1">
          <select
            value={addCountry}
            onChange={(e) => setAddCountry(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-slate-400 focus:border-teal-500 focus:outline-none"
          >
            <option value="">+ Land hinzufügen</option>
            {countries.filter(c => !selectedCountries.includes(c.id)).map(c => (
              <option key={c.id} value={c.id}>{c.flag} {c.name}</option>
            ))}
          </select>
          {addCountry && (
            <button onClick={handleAdd} className="px-2 py-1.5 bg-teal-500/20 text-teal-400 rounded-lg text-xs hover:bg-teal-500/30 transition">OK</button>
          )}
        </div>
      </div>

      {selectedCountries.length > 1 && (
        <div>
          <div className="text-xs text-slate-400 mb-2">
            {goodHours.length > 0 ? (
              <>Gute Zeiten (8:00–22:00 für alle): <span className="text-teal-400 font-medium">{goodHours.length} Stunden Überlappung</span></>
            ) : (
              <span className="text-amber-400">Keine guten Überlappungszeiten gefunden</span>
            )}
          </div>
          <div className="grid grid-cols-12 sm:grid-cols-24 gap-0.5">
            {Array.from({ length: 24 }, (_, utcH) => {
              const isGood = goodHours.includes(utcH);
              // Show Germany's local hour
              const deHour = (utcH + 1) % 24;
              return (
                <div
                  key={utcH}
                  className={`h-8 rounded flex items-center justify-center text-[9px] font-mono transition-all ${
                    isGood ? 'bg-teal-500/30 text-teal-300' : 'bg-white/5 text-slate-600'
                  }`}
                  title={selectedCountries.map(cId => {
                    const c = countries.find(co => co.id === cId);
                    const localH = (utcH + parseFloat(c?.utcOffset || 0)) % 24;
                    return `${c?.flag} ${localH}:00`;
                  }).join('\n')}
                >
                  {deHour}
                </div>
              );
            })}
          </div>
          <div className="text-[10px] text-slate-600 mt-1">Uhrzeit in Deutschland (MEZ)</div>
        </div>
      )}
    </div>
  );
}
