import React, { useState } from 'react';
import { Clock, Heart, Activity, Trophy, ChevronRight } from 'lucide-react';

const PaceCalculator = () => {
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [pace, setPace] = useState('');
  
  const calculatePace = () => {
    if (!distance || !time) return;
    const [hours, minutes, seconds] = time.split(':').map(Number);
    const totalMinutes = (hours || 0) * 60 + (minutes || 0) + (seconds || 0) / 60;
    const paceMinPerKm = totalMinutes / parseFloat(distance);
    
    const pMin = Math.floor(paceMinPerKm);
    const pSec = Math.round((paceMinPerKm - pMin) * 60);
    setPace(`${pMin}:${pSec < 10 ? '0' : ''}${pSec}`);
  };

  return (
    <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-lg border border-stone-100 dark:border-stone-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl">
          <Clock size={24} />
        </div>
        <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100">Pace Rechner</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Distanz (km)</label>
          <input 
            type="number" 
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-full p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="z.B. 10"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Zeit (hh:mm:ss)</label>
          <input 
            type="text" 
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="01:00:00"
          />
        </div>
        <button 
          onClick={calculatePace}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg transition-transform active:scale-95"
        >
          Berechnen
        </button>
        
        {pace && (
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 text-center animate-fade-in">
            <div className="text-sm text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wider mb-1">Deine Pace</div>
            <div className="text-4xl font-bold text-stone-800 dark:text-white font-mono">
              {pace} <span className="text-lg text-stone-500 font-normal">min/km</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const HeartRateZones = () => {
  const [age, setAge] = useState('');
  const [zones, setZones] = useState(null);

  const calculate = () => {
    if (!age) return;
    const maxHr = 220 - parseInt(age);
    
    const zoneData = [
      { name: 'Gesundheit', range: '50-60%', min: 0.5, max: 0.6, color: 'bg-gray-400' },
      { name: 'Fettverbrennung', range: '60-70%', min: 0.6, max: 0.7, color: 'bg-green-500' },
      { name: 'Aerob', range: '70-80%', min: 0.7, max: 0.8, color: 'bg-yellow-500' },
      { name: 'Anaerob', range: '80-90%', min: 0.8, max: 0.9, color: 'bg-orange-500' },
      { name: 'Maximum', range: '90-100%', min: 0.9, max: 1.0, color: 'bg-red-600' },
    ];

    setZones(zoneData.map(z => ({
      ...z,
      bpmMin: Math.round(maxHr * z.min),
      bpmMax: Math.round(maxHr * z.max)
    })));
  };

  return (
    <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-lg border border-stone-100 dark:border-stone-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-xl">
          <Heart size={24} />
        </div>
        <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100">HF Zonen</h3>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Alter</label>
          <input 
            type="number" 
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-red-500 outline-none"
          />
        </div>
        <button 
          onClick={calculate}
          className="self-end px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold shadow-lg transition-transform active:scale-95"
        >
          Go
        </button>
      </div>

      {zones && (
        <div className="space-y-3 animate-fade-in">
          {zones.map((z, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-100 dark:border-stone-700 p-3">
              <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${z.color}`}></div>
              <div className="flex justify-between items-center pl-2">
                <div>
                  <div className="font-bold text-stone-800 dark:text-stone-200">{z.name}</div>
                  <div className="text-xs text-stone-500">{z.range}</div>
                </div>
                <div className="font-mono font-bold text-stone-600 dark:text-stone-300">
                  {z.bpmMin}-{z.bpmMax} <span className="text-xs font-normal">bpm</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const RacePredictor = () => {
  const [recentDist, setRecentDist] = useState('5');
  const [recentTime, setRecentTime] = useState('');
  const [predictions, setPredictions] = useState(null);

  const predict = () => {
    if (!recentTime) return;
    
    // Riegel formula: T2 = T1 * (D2 / D1)^1.06
    const [h, m, s] = recentTime.split(':').map(Number);
    const t1Seconds = (h||0)*3600 + (m||0)*60 + (s||0);
    const d1 = parseFloat(recentDist);

    const targets = [
      { name: '5K', dist: 5 },
      { name: '10K', dist: 10 },
      { name: 'Halbmarathon', dist: 21.0975 },
      { name: 'Marathon', dist: 42.195 }
    ];

    const preds = targets.map(t => {
      const t2Seconds = t1Seconds * Math.pow((t.dist / d1), 1.06);
      const h2 = Math.floor(t2Seconds / 3600);
      const m2 = Math.floor((t2Seconds % 3600) / 60);
      const s2 = Math.round(t2Seconds % 60);
      return {
        ...t,
        time: `${h2}:${m2 < 10 ? '0' : ''}${m2}:${s2 < 10 ? '0' : ''}${s2}`
      };
    });

    setPredictions(preds);
  };

  return (
    <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-lg border border-stone-100 dark:border-stone-700 md:col-span-2">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded-xl">
          <Trophy size={24} />
        </div>
        <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100">Wettkampf Prognose</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Distanz</label>
          <select 
            value={recentDist}
            onChange={(e) => setRecentDist(e.target.value)}
            className="w-full p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 outline-none"
          >
            <option value="5">5 km</option>
            <option value="10">10 km</option>
            <option value="21.0975">Halbmarathon</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Zeit (hh:mm:ss)</label>
          <input 
            type="text" 
            value={recentTime}
            onChange={(e) => setRecentTime(e.target.value)}
            placeholder="00:25:00"
            className="w-full p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 outline-none"
          />
        </div>
        <button 
          onClick={predict}
          className="self-end w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl font-bold shadow-lg transition-transform active:scale-95"
        >
          Prognose
        </button>
      </div>

      {predictions && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
          {predictions.map((p, i) => (
            <div key={i} className="bg-stone-50 dark:bg-stone-900 p-4 rounded-xl border border-stone-200 dark:border-stone-700 text-center">
              <div className="text-xs text-stone-500 font-bold uppercase mb-1">{p.name}</div>
              <div className="text-lg font-bold text-stone-800 dark:text-stone-100 font-mono">{p.time}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const RunTools = () => {
  return (
    <div className="max-w-5xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8 text-stone-800 dark:text-white px-4">Lauf Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        <PaceCalculator />
        <HeartRateZones />
        <RacePredictor />
      </div>
    </div>
  );
};

export default RunTools;
