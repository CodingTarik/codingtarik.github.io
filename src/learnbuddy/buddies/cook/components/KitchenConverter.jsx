import React, { useState } from 'react';
import { Calculator, ArrowRight, Info } from 'lucide-react';

const CONVERSIONS = {
  volume: {
    name: 'Volumen',
    units: [
      { id: 'ml', name: 'Milliliter (ml)', toBase: 1 },
      { id: 'l', name: 'Liter (l)', toBase: 1000 },
      { id: 'cup', name: 'Cup (US)', toBase: 236.588 },
      { id: 'tbsp', name: 'Esslöffel (EL)', toBase: 15 },
      { id: 'tsp', name: 'Teelöffel (TL)', toBase: 5 },
      { id: 'floz', name: 'Fluid Ounce (fl oz)', toBase: 29.5735 }
    ]
  },
  weight: {
    name: 'Gewicht',
    units: [
      { id: 'g', name: 'Gramm (g)', toBase: 1 },
      { id: 'kg', name: 'Kilogramm (kg)', toBase: 1000 },
      { id: 'oz', name: 'Unze (oz)', toBase: 28.3495 },
      { id: 'lb', name: 'Pfund (lb)', toBase: 453.592 },
      { id: 'mg', name: 'Milligramm (mg)', toBase: 0.001 }
    ]
  },
  temperature: {
    name: 'Temperatur',
    units: [
      { id: 'c', name: 'Celsius (°C)', convert: (v, to) => to === 'f' ? (v * 9/5) + 32 : to === 'k' ? v + 273.15 : v },
      { id: 'f', name: 'Fahrenheit (°F)', convert: (v, to) => to === 'c' ? (v - 32) * 5/9 : to === 'k' ? (v - 32) * 5/9 + 273.15 : v },
      { id: 'k', name: 'Kelvin (K)', convert: (v, to) => to === 'c' ? v - 273.15 : to === 'f' ? (v - 273.15) * 9/5 + 32 : v }
    ]
  }
};

const COMMON_INGREDIENTS = [
  { name: 'Mehl', cup: 120, tbsp: 8 },
  { name: 'Zucker', cup: 200, tbsp: 12.5 },
  { name: 'Butter', cup: 227, tbsp: 14 },
  { name: 'Milch', cup: 240, tbsp: 15 },
  { name: 'Öl', cup: 220, tbsp: 13.75 },
  { name: 'Honig', cup: 340, tbsp: 21 },
  { name: 'Reis (roh)', cup: 185, tbsp: 11.5 },
  { name: 'Haferflocken', cup: 90, tbsp: 5.6 }
];

const KitchenConverter = () => {
  const [category, setCategory] = useState('volume');
  const [fromUnit, setFromUnit] = useState('ml');
  const [toUnit, setToUnit] = useState('cup');
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  const convert = () => {
    if (!value || isNaN(value)) return;
    
    const val = parseFloat(value);
    const cat = CONVERSIONS[category];

    if (category === 'temperature') {
      const fromUnitObj = cat.units.find(u => u.id === fromUnit);
      const converted = fromUnitObj.convert(val, toUnit);
      setResult(converted.toFixed(2));
    } else {
      const from = cat.units.find(u => u.id === fromUnit);
      const to = cat.units.find(u => u.id === toUnit);
      const baseValue = val * from.toBase;
      const converted = baseValue / to.toBase;
      setResult(converted.toFixed(2));
    }
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="w-8 h-8 text-amber-500" />
          <div>
            <h2 className="text-2xl font-bold">Küchen-Umrechner</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Rechne Maßeinheiten schnell um</p>
          </div>
        </div>

        {/* Category Selector */}
        <div className="flex gap-2 mb-6">
          {Object.entries(CONVERSIONS).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => {
                setCategory(key);
                setFromUnit(cat.units[0].id);
                setToUnit(cat.units[1].id);
                setResult(null);
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                category === key
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Converter */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-end mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Von</label>
            <input
              type="number"
              value={value}
              onChange={handleValueChange}
              onKeyPress={(e) => e.key === 'Enter' && convert()}
              placeholder="Wert eingeben"
              className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 mb-2"
            />
            <select
              value={fromUnit}
              onChange={(e) => {
                setFromUnit(e.target.value);
                setResult(null);
              }}
              className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {CONVERSIONS[category].units.map(unit => (
                <option key={unit.id} value={unit.id}>{unit.name}</option>
              ))}
            </select>
          </div>

          <button
            onClick={convert}
            className="bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-lg transition-colors mb-2"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <div>
            <label className="block text-sm font-medium mb-2">Nach</label>
            <div className="p-3 border-2 border-amber-500 rounded-lg bg-amber-50 dark:bg-amber-900/20 mb-2 h-[52px] flex items-center">
              <span className="text-2xl font-bold text-amber-700 dark:text-amber-300">
                {result || '—'}
              </span>
            </div>
            <select
              value={toUnit}
              onChange={(e) => {
                setToUnit(e.target.value);
                setResult(null);
              }}
              className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {CONVERSIONS[category].units.map(unit => (
                <option key={unit.id} value={unit.id}>{unit.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Common Ingredients Reference */}
        {category === 'volume' && (
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <div className="flex items-start gap-2 mb-3">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Häufige Zutaten (1 Cup ≈)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  {COMMON_INGREDIENTS.map(ing => (
                    <div key={ing.name} className="bg-white dark:bg-gray-800 p-2 rounded">
                      <div className="font-medium">{ing.name}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{ing.cup}g</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Temperature Reference */}
        {category === 'temperature' && (
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <div className="flex items-start gap-2">
              <Info className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">Häufige Backtemperaturen</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-white dark:bg-gray-800 p-2 rounded">
                    <div className="font-medium">Niedrig</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">150°C / 300°F</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded">
                    <div className="font-medium">Mittel</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">180°C / 350°F</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded">
                    <div className="font-medium">Hoch</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">200°C / 400°F</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded">
                    <div className="font-medium">Sehr hoch</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">230°C / 450°F</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KitchenConverter;

