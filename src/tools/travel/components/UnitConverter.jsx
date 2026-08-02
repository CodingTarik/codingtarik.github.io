import React, { useState, useMemo } from 'react';
import { ArrowLeftRight, Thermometer, Ruler, Weight, Shirt, DollarSign } from 'lucide-react';

const converterTabs = [
  { id: 'currency', name: 'Währung', icon: '💱' },
  { id: 'temperature', name: 'Temperatur', icon: '🌡️' },
  { id: 'distance', name: 'Distanz', icon: '📏' },
  { id: 'weight', name: 'Gewicht', icon: '⚖️' },
  { id: 'clothing', name: 'Kleidung', icon: '👕' },
  { id: 'speed', name: 'Geschwindigkeit', icon: '🏎️' },
];

export default function UnitConverter({ countries }) {
  const [activeTab, setActiveTab] = useState('currency');

  return (
    <div className="space-y-6 pb-4">
      {/* Tab selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {converterTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-violet-500/20 text-violet-300 ring-1 ring-violet-500/30'
                : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-300'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'currency' && <CurrencyConverter countries={countries} />}
      {activeTab === 'temperature' && <TemperatureConverter />}
      {activeTab === 'distance' && <DistanceConverter />}
      {activeTab === 'weight' && <WeightConverter />}
      {activeTab === 'clothing' && <ClothingSizes />}
      {activeTab === 'speed' && <SpeedConverter />}
    </div>
  );
}

function CurrencyConverter({ countries }) {
  const [amount, setAmount] = useState('100');
  const [fromCurrency, setFromCurrency] = useState('EUR');

  const uniqueCurrencies = useMemo(() => {
    const seen = new Set();
    return countries.filter(c => {
      if (seen.has(c.currency.code)) return false;
      seen.add(c.currency.code);
      return true;
    });
  }, [countries]);

  const fromCountry = countries.find(c => c.currency.code === fromCurrency);
  const amountInEur = fromCountry ? parseFloat(amount || 0) / fromCountry.currency.rateToEur : parseFloat(amount || 0);

  return (
    <div className="space-y-4">
      <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">
        <h3 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
          <DollarSign size={14} className="text-violet-400" /> Währungsrechner
        </h3>
        <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-4">
          <div className="flex-1">
            <label className="block text-xs text-slate-400 mb-1.5">Betrag</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xl text-white font-mono focus:border-violet-500 focus:outline-none"
            />
          </div>
          <div className="sm:w-48">
            <label className="block text-xs text-slate-400 mb-1.5">Währung</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-white focus:border-violet-500 focus:outline-none appearance-none"
            >
              {uniqueCurrencies.map(c => (
                <option key={c.currency.code} value={c.currency.code}>
                  {c.flag} {c.currency.code} — {c.currency.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-xs text-slate-500">⚠️ Wechselkurse sind Richtwerte. Vor der Reise aktuelle Kurse prüfen!</p>
      </div>

      {/* Conversion results */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {countries.filter(c => c.currency.code !== fromCurrency).map(country => {
          const converted = amountInEur * country.currency.rateToEur;
          return (
            <div key={country.id} className="bg-[#111827] rounded-2xl border border-white/5 p-4 hover:border-violet-500/20 transition">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{country.flag}</span>
                <span className="text-xs text-slate-400">{country.name}</span>
              </div>
              <div className="text-lg font-bold text-white font-mono">
                {country.currency.symbol}{converted < 100 ? converted.toFixed(2) : converted < 10000 ? converted.toFixed(0) : Math.round(converted).toLocaleString('de-DE')}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">{country.currency.code}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('25');
  const c = parseFloat(celsius) || 0;
  const f = (c * 9 / 5) + 32;
  const k = c + 273.15;

  return (
    <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">
      <h3 className="text-sm font-semibold text-slate-300 mb-4">🌡️ Temperatur</h3>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-xs text-slate-400 mb-1.5">Celsius (°C)</label>
          <input
            type="number"
            value={celsius}
            onChange={(e) => setCelsius(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-xl text-white font-mono focus:border-violet-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1.5">Fahrenheit (°F)</label>
          <div className="bg-white/5 rounded-xl px-3 py-3 text-xl text-violet-400 font-mono border border-white/10">{f.toFixed(1)}</div>
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1.5">Kelvin (K)</label>
          <div className="bg-white/5 rounded-xl px-3 py-3 text-xl text-violet-400 font-mono border border-white/10">{k.toFixed(1)}</div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {[
          { label: 'Eiskalt', c: 0 }, { label: 'Kühl', c: 15 },
          { label: 'Angenehm', c: 22 }, { label: 'Heiß', c: 35 },
        ].map(preset => (
          <button
            key={preset.label}
            onClick={() => setCelsius(preset.c.toString())}
            className="bg-white/5 rounded-xl py-2 text-xs text-slate-400 hover:bg-white/10 hover:text-white transition"
          >
            {preset.label} ({preset.c}°C)
          </button>
        ))}
      </div>
    </div>
  );
}

function DistanceConverter() {
  const [km, setKm] = useState('100');
  const k = parseFloat(km) || 0;
  const mi = k * 0.621371;
  const m = k * 1000;
  const ft = k * 3280.84;

  return (
    <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">
      <h3 className="text-sm font-semibold text-slate-300 mb-4">📏 Distanz</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs text-slate-400 mb-1.5">Kilometer</label>
          <input
            type="number"
            value={km}
            onChange={(e) => setKm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-xl text-white font-mono focus:border-violet-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1.5">Meilen</label>
          <div className="bg-white/5 rounded-xl px-3 py-3 text-xl text-violet-400 font-mono border border-white/10">{mi.toFixed(2)}</div>
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1.5">Meter</label>
          <div className="bg-white/5 rounded-xl px-3 py-3 text-xl text-violet-400 font-mono border border-white/10">{m.toLocaleString('de-DE')}</div>
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1.5">Fuß</label>
          <div className="bg-white/5 rounded-xl px-3 py-3 text-xl text-violet-400 font-mono border border-white/10">{Math.round(ft).toLocaleString('de-DE')}</div>
        </div>
      </div>
    </div>
  );
}

function WeightConverter() {
  const [kg, setKg] = useState('75');
  const k = parseFloat(kg) || 0;
  const lbs = k * 2.20462;
  const oz = k * 35.274;
  const stone = k * 0.157473;

  return (
    <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">
      <h3 className="text-sm font-semibold text-slate-300 mb-4">⚖️ Gewicht</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs text-slate-400 mb-1.5">Kilogramm</label>
          <input
            type="number"
            value={kg}
            onChange={(e) => setKg(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-xl text-white font-mono focus:border-violet-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1.5">Pfund (lbs)</label>
          <div className="bg-white/5 rounded-xl px-3 py-3 text-xl text-violet-400 font-mono border border-white/10">{lbs.toFixed(1)}</div>
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1.5">Unzen (oz)</label>
          <div className="bg-white/5 rounded-xl px-3 py-3 text-xl text-violet-400 font-mono border border-white/10">{oz.toFixed(1)}</div>
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1.5">Stone</label>
          <div className="bg-white/5 rounded-xl px-3 py-3 text-xl text-violet-400 font-mono border border-white/10">{stone.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

function SpeedConverter() {
  const [kmh, setKmh] = useState('100');
  const k = parseFloat(kmh) || 0;
  const mph = k * 0.621371;
  const ms = k / 3.6;
  const knots = k * 0.539957;

  return (
    <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">
      <h3 className="text-sm font-semibold text-slate-300 mb-4">🏎️ Geschwindigkeit</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs text-slate-400 mb-1.5">km/h</label>
          <input
            type="number"
            value={kmh}
            onChange={(e) => setKmh(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-xl text-white font-mono focus:border-violet-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1.5">mph</label>
          <div className="bg-white/5 rounded-xl px-3 py-3 text-xl text-violet-400 font-mono border border-white/10">{mph.toFixed(1)}</div>
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1.5">m/s</label>
          <div className="bg-white/5 rounded-xl px-3 py-3 text-xl text-violet-400 font-mono border border-white/10">{ms.toFixed(1)}</div>
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1.5">Knoten</label>
          <div className="bg-white/5 rounded-xl px-3 py-3 text-xl text-violet-400 font-mono border border-white/10">{knots.toFixed(1)}</div>
        </div>
      </div>
    </div>
  );
}

function ClothingSizes() {
  return (
    <div className="space-y-4">
      {/* Men's clothing */}
      <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">
        <h3 className="text-sm font-semibold text-slate-300 mb-4">👔 Herren-Oberteile</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-slate-400 font-medium">EU/DE</th>
                <th className="text-left py-2 px-3 text-slate-400 font-medium">US/UK</th>
                <th className="text-left py-2 px-3 text-slate-400 font-medium">Asien (CN/KR)</th>
                <th className="text-left py-2 px-3 text-slate-400 font-medium">Int.</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {[
                ['44', 'XS (34)', '165/84A', 'XS'],
                ['46', 'S (36)', '170/88A', 'S'],
                ['48', 'M (38)', '175/92A', 'M'],
                ['50', 'L (40)', '180/96A', 'L'],
                ['52', 'XL (42)', '185/100A', 'XL'],
                ['54', 'XXL (44)', '190/104A', 'XXL'],
              ].map(([eu, us, asia, intl]) => (
                <tr key={eu} className="border-b border-white/5">
                  <td className="py-2 px-3 font-mono text-white">{eu}</td>
                  <td className="py-2 px-3">{us}</td>
                  <td className="py-2 px-3">{asia}</td>
                  <td className="py-2 px-3 text-violet-400 font-medium">{intl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Shoes */}
      <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">
        <h3 className="text-sm font-semibold text-slate-300 mb-4">👟 Schuhgrößen</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-slate-400 font-medium">EU</th>
                <th className="text-left py-2 px-3 text-slate-400 font-medium">US (Herren)</th>
                <th className="text-left py-2 px-3 text-slate-400 font-medium">UK</th>
                <th className="text-left py-2 px-3 text-slate-400 font-medium">cm</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {[
                ['39', '6.5', '6', '24.5'],
                ['40', '7', '6.5', '25'],
                ['41', '8', '7.5', '25.5'],
                ['42', '8.5', '8', '26.5'],
                ['43', '9.5', '9', '27'],
                ['44', '10.5', '9.5', '28'],
                ['45', '11', '10.5', '28.5'],
                ['46', '12', '11', '29.5'],
              ].map(([eu, us, uk, cm]) => (
                <tr key={eu} className="border-b border-white/5">
                  <td className="py-2 px-3 font-mono text-white">{eu}</td>
                  <td className="py-2 px-3">{us}</td>
                  <td className="py-2 px-3">{uk}</td>
                  <td className="py-2 px-3 text-violet-400">{cm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-violet-500/10 rounded-2xl border border-violet-500/20 p-4 text-xs text-violet-300">
        💡 In Asien (China, Südkorea, Thailand) fallen Größen oft 1–2 Nummern kleiner aus. Im Zweifel immer anprobieren!
      </div>
    </div>
  );
}
