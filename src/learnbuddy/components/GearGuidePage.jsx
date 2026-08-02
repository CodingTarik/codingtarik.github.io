import React from 'react';
import { ShoppingBag, Footprints, Hand, Check } from 'lucide-react';

function GearGuidePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-stone-800 mb-6 flex items-center gap-2">
        <ShoppingBag className="text-teal-500" />
        Ausrüstungs-Guide
      </h1>

      {/* Shoes Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
          <Footprints className="text-orange-500" />
          Kletterschuhe
        </h2>
        
        {/* Shoe Types SVG */}
        <div className="mb-4 bg-stone-50 rounded-lg p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            {/* Neutral Shoe */}
            <div>
              <svg viewBox="0 0 100 60" className="w-full mb-2">
                <path d="M 10 40 L 90 40 L 85 20 L 15 20 Z" fill="#14b8a6" stroke="#0f766e" strokeWidth="2"/>
                <ellipse cx="80" cy="40" rx="8" ry="10" fill="#44403c"/>
              </svg>
              <div className="text-xs font-semibold text-stone-700">Neutral</div>
              <div className="text-xs text-stone-500">Anfänger</div>
            </div>
            
            {/* Moderate Shoe */}
            <div>
              <svg viewBox="0 0 100 60" className="w-full mb-2">
                <path d="M 10 40 Q 50 45 90 35 L 85 18 Q 50 23 15 18 Z" fill="#f97316" stroke="#c2410c" strokeWidth="2"/>
                <ellipse cx="80" cy="35" rx="8" ry="10" fill="#44403c"/>
              </svg>
              <div className="text-xs font-semibold text-stone-700">Moderat</div>
              <div className="text-xs text-stone-500">Fortgeschritten</div>
            </div>
            
            {/* Aggressive Shoe */}
            <div>
              <svg viewBox="0 0 100 60" className="w-full mb-2">
                <path d="M 10 35 Q 50 50 90 25 L 85 15 Q 50 30 15 15 Z" fill="#14b8a6" stroke="#0f766e" strokeWidth="2"/>
                <ellipse cx="78" cy="28" rx="8" ry="10" fill="#44403c"/>
              </svg>
              <div className="text-xs font-semibold text-stone-700">Aggressiv</div>
              <div className="text-xs text-stone-500">Experten</div>
            </div>
          </div>
        </div>

        <div className="space-y-3 text-stone-700">
          <div className="flex items-start gap-3 bg-stone-50 p-3 rounded-lg">
            <Check size={20} className="text-teal-500 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900">Passform ist wichtiger als Marke:</strong> Probiere verschiedene Modelle. La Sportiva passt schmalen Füßen, Scarpa eher breiten.
            </div>
          </div>
          <div className="flex items-start gap-3 bg-stone-50 p-3 rounded-lg">
            <Check size={20} className="text-teal-500 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900">Eng, aber nicht schmerzhaft:</strong> Zehen sollten leicht gekrümmt sein.
            </div>
          </div>
          <div className="flex items-start gap-3 bg-stone-50 p-3 rounded-lg">
            <Check size={20} className="text-teal-500 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900">Anfänger-Empfehlungen:</strong> La Sportiva Tarantula, Scarpa Origin, Five Ten Rogue
            </div>
          </div>
        </div>
      </div>

      {/* Chalk Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
          <Hand className="text-orange-500" />
          Chalk & Zubehör
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-stone-800 mb-2">Chalk-Arten:</h3>
            <ul className="space-y-1 text-sm text-stone-700">
              <li><strong>• Powder:</strong> Klassisch, staubt</li>
              <li><strong>• Block:</strong> Weniger Staub</li>
              <li><strong>• Liquid:</strong> Sauber & lange haltend ⭐</li>
            </ul>
          </div>
          
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-stone-800 mb-2">Weiteres Equipment:</h3>
            <ul className="space-y-1 text-sm text-stone-700">
              <li><strong>• Bürste:</strong> Griffe reinigen</li>
              <li><strong>• Tape:</strong> Haut schützen</li>
              <li><strong>• Handcreme:</strong> Nach dem Training</li>
            </ul>
          </div>
        </div>

        <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded">
          <p className="text-sm text-stone-700">
            <strong className="text-teal-700">💡 Tipp:</strong> Viele Hallen erlauben nur Liquid Chalk wegen Staubentwicklung. Frage vorher!
          </p>
        </div>
      </div>

      {/* Budget Guide */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg shadow-md p-6 border-2 border-orange-300">
        <h2 className="text-xl font-bold text-stone-800 mb-4">💰 Budget-Guide für Anfänger</h2>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center bg-white rounded-lg p-3 shadow-sm">
            <span className="font-semibold text-stone-700">Kletterschuhe</span>
            <span className="text-stone-600 font-mono">60-120€</span>
          </div>
          <div className="flex justify-between items-center bg-white rounded-lg p-3 shadow-sm">
            <span className="font-semibold text-stone-700">Liquid Chalk</span>
            <span className="text-stone-600 font-mono">10-15€</span>
          </div>
          <div className="flex justify-between items-center bg-white rounded-lg p-3 shadow-sm">
            <span className="font-semibold text-stone-700">Bürste</span>
            <span className="text-stone-600 font-mono">5-10€</span>
          </div>
          <div className="flex justify-between items-center bg-white rounded-lg p-3 shadow-sm">
            <span className="font-semibold text-stone-700">Halleneintritt (Monatskarte)</span>
            <span className="text-stone-600 font-mono">50-80€</span>
          </div>
          <div className="border-t-2 border-orange-300 pt-3 flex justify-between items-center">
            <span className="font-bold text-stone-800 text-lg">Gesamt (Start)</span>
            <span className="font-bold text-orange-600 text-lg">~85€ + Eintritt</span>
          </div>
        </div>

        <p className="text-sm text-stone-600 mt-4 text-center italic">
          💡 Tipp: Viele Hallen verleihen Schuhe (2-5€) – perfekt zum Testen!
        </p>
      </div>
    </div>
  );
}

export default GearGuidePage;

