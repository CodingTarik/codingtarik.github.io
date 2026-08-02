import React, { useState } from 'react';
import { Timer, TrendingUp, Flame, Activity, Waves } from 'lucide-react';

const SwimPaceCalculator = () => {
  const [distance, setDistance] = useState('1000');
  const [time, setTime] = useState('');
  const [pace100, setPace100] = useState('');

  const calculate = () => {
    const [min, sec] = time.split(':').map(Number);
    const totalSeconds = min * 60 + sec;
    const secondsPer100 = totalSeconds / (parseFloat(distance) / 100);
    
    const pMin = Math.floor(secondsPer100 / 60);
    const pSec = Math.round(secondsPer100 % 60);
    setPace100(`${pMin}:${pSec < 10 ? '0' : ''}${pSec}`);
  };

  return (
    <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-lg border border-stone-100 dark:border-stone-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 rounded-xl">
          <Timer size={24} />
        </div>
        <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100">Pace / 100m</h3>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Distanz (m)</label>
            <input 
              type="number" 
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="w-full p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Zeit (mm:ss)</label>
            <input 
              type="text" 
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="20:00"
              className="w-full p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
          </div>
        </div>
        
        <button 
          onClick={calculate}
          className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-bold shadow-lg transition-transform active:scale-95"
        >
          Berechnen
        </button>
        
        {pace100 && (
          <div className="mt-6 p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl border border-cyan-100 dark:border-cyan-800 text-center animate-fade-in">
            <div className="text-sm text-cyan-600 dark:text-cyan-400 font-medium uppercase tracking-wider mb-1">Deine Pace</div>
            <div className="text-4xl font-bold text-stone-800 dark:text-white font-mono">
              {pace100} <span className="text-lg text-stone-500 font-normal">min/100m</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CssCalculator = () => {
  const [t400, setT400] = useState('');
  const [t200, setT200] = useState('');
  const [css, setCss] = useState(null); // css pace in seconds per 100m
  const [zones, setZones] = useState(null);

  const toSeconds = (str) => {
    const [m, s] = str.split(':').map(Number);
    return m * 60 + s;
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = Math.round(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const calculate = () => {
    const s400 = toSeconds(t400);
    const s200 = toSeconds(t200);
    
    if (!s400 || !s200) return;

    const speed = (400 - 200) / (s400 - s200);
    const paceSeconds = 100 / speed; // CSS Pace per 100m
    
    setCss(paceSeconds);

    // Calculate Zones based on CSS Pace
    // En1 (Aerob): CSS + 4-6s
    // En2 (Schwelle): CSS + 2-4s
    // En3 (VO2max): CSS - 2-4s
    // Sp1 (Sprint): CSS - 4-8s
    setZones([
      { name: 'A1 / Easy', pace: `${formatTime(paceSeconds + 6)} - ${formatTime(paceSeconds + 4)}`, color: 'bg-green-500' },
      { name: 'A2 / Threshold', pace: `${formatTime(paceSeconds + 4)} - ${formatTime(paceSeconds + 2)}`, color: 'bg-yellow-500' },
      { name: 'A3 / VO2max', pace: `${formatTime(paceSeconds)} - ${formatTime(paceSeconds - 2)}`, color: 'bg-orange-500' },
      { name: 'SP / Sprint', pace: `< ${formatTime(paceSeconds - 4)}`, color: 'bg-red-500' },
    ]);
  };

  return (
    <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-lg border border-stone-100 dark:border-stone-700 md:col-span-2">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl">
          <Activity size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100">CSS & Trainingszonen</h3>
          <p className="text-xs text-stone-500">Critical Swim Speed basierend auf 400m & 200m Test</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">400m Zeit</label>
          <input 
            type="text" 
            value={t400}
            onChange={(e) => setT400(e.target.value)}
            placeholder="06:00"
            className="w-full p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">200m Zeit</label>
          <input 
            type="text" 
            value={t200}
            onChange={(e) => setT200(e.target.value)}
            placeholder="02:50"
            className="w-full p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <button 
          onClick={calculate}
          className="self-end w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg transition-transform active:scale-95"
        >
          Berechnen
        </button>
      </div>

      {css && (
        <div className="space-y-6 animate-fade-in">
          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
            <div className="text-sm text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wider mb-1">Dein CSS Tempo</div>
            <div className="text-4xl font-bold text-stone-800 dark:text-white font-mono">{formatTime(css)}</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {zones.map((z, i) => (
              <div key={i} className="relative overflow-hidden bg-stone-50 dark:bg-stone-900 p-3 rounded-xl border border-stone-200 dark:border-stone-700">
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${z.color}`}></div>
                <div className="pl-2">
                  <div className="text-xs font-bold text-stone-500 uppercase mb-1">{z.name}</div>
                  <div className="font-mono font-bold text-stone-800 dark:text-stone-200">{z.pace}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const CalorieCalculator = () => {
  const [weight, setWeight] = useState('');
  const [duration, setDuration] = useState('');
  const [intensity, setIntensity] = useState('moderate');
  const [calories, setCalories] = useState(null);

  const calculate = () => {
    if (!weight || !duration) return;
    
    // MET values: Moderate = 7, Vigorous = 10
    const met = intensity === 'moderate' ? 7 : 10;
    // Calories = MET * Weight(kg) * Time(hours)
    const cal = met * parseFloat(weight) * (parseFloat(duration) / 60);
    
    setCalories(Math.round(cal));
  };

  return (
    <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-lg border border-stone-100 dark:border-stone-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-xl">
          <Flame size={24} />
        </div>
        <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100">Kalorien</h3>
      </div>

      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Gewicht (kg)</label>
            <input 
              type="number" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Dauer (min)</label>
            <input 
              type="number" 
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Intensität</label>
          <select 
            value={intensity}
            onChange={(e) => setIntensity(e.target.value)}
            className="w-full p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 outline-none"
          >
            <option value="moderate">Moderat (Locker)</option>
            <option value="vigorous">Intensiv (Schnell)</option>
          </select>
        </div>

        <button 
          onClick={calculate}
          className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold shadow-lg transition-transform active:scale-95"
        >
          Berechnen
        </button>

        {calories && (
          <div className="mt-4 text-center">
            <div className="text-3xl font-bold text-orange-600">{calories} <span className="text-lg text-stone-500 font-normal">kcal</span></div>
          </div>
        )}
      </div>
    </div>
  );
};

const SwimTools = () => {
  return (
    <div className="max-w-5xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8 text-stone-800 dark:text-white px-4">Schwimm Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        <SwimPaceCalculator />
        <CalorieCalculator />
        <CssCalculator />
      </div>
    </div>
  );
};

export default SwimTools;
