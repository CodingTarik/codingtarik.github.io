import React from 'react';
import PianoPlayer from '../../components/PianoPlayer';
import SheetMusic from '../../components/SheetMusic';

const MiddleC = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto p-6">
      <div className="prose dark:prose-invert max-w-none">
        <h1>Das mittlere C (C4)</h1>
        <p>
          Das wichtigste "Wahrzeichen" auf dem Klavier ist das <strong>mittlere C</strong> (Middle C).
          Es ist dein Ankerpunkt, von dem aus du dich orientierst.
        </p>

        <h3>Wie finde ich das C?</h3>
        <p>
          Suche eine <strong>2er-Gruppe</strong> von schwarzen Tasten.
          Die weiße Taste direkt <strong>links</strong> neben der 2er-Gruppe ist ein C.
        </p>

        <div className="my-6 flex justify-center">
           <svg viewBox="0 0 300 150" className="w-64 h-32">
              {/* White keys */}
              <rect x="0" y="0" width="50" height="150" fill="#e0f2fe" stroke="#cbd5e1" strokeWidth="2" /> {/* C - Highlighted */}
              <rect x="50" y="0" width="50" height="150" fill="white" stroke="#cbd5e1" />
              <rect x="100" y="0" width="50" height="150" fill="white" stroke="#cbd5e1" />
              <rect x="150" y="0" width="50" height="150" fill="white" stroke="#cbd5e1" />
              
              {/* Black keys (2 group) */}
              <rect x="35" y="0" width="30" height="90" fill="#1e293b" rx="2" />
              <rect x="95" y="0" width="30" height="90" fill="#1e293b" rx="2" />
              
              {/* Arrow pointing to C */}
              <path d="M 25,120 L 25,140" stroke="#0ea5e9" strokeWidth="4" markerEnd="url(#arrow)" />
              <text x="15" y="110" fontSize="24" fontWeight="bold" fill="#0ea5e9">C</text>
              
              {/* Label "Links neben 2er" */}
              <path d="M 60,45 Q 25,45 25,80" stroke="#ec4899" strokeWidth="2" fill="none" strokeDasharray="4 2" />
              <text x="70" y="40" fontSize="12" fill="#ec4899">Links neben 2er</text>
           </svg>
        </div>

        <p>
          Das "mittlere C" ist das C, das sich ziemlich genau in der Mitte deiner Klaviatur befindet (meistens unter dem Markenlogo).
        </p>

        <h3>Das C in Noten</h3>
        <p>
          Im Notensystem sieht das mittlere C so aus. Es hat seine eigene kleine Hilfslinie unter dem Liniensystem:
        </p>
      </div>

      <div className="flex justify-center py-4 bg-white rounded-xl shadow-sm border border-stone-100">
        <SheetMusic notes="C4/w" width={200} height={150} />
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 my-4">
          <strong>Übung:</strong> Finde alle C's auf der Tastatur unten. Beginne ganz links und arbeite dich nach rechts vor.
          Höre, wie der Ton immer höher wird, aber der Charakter gleich bleibt.
        </div>
      </div>

      <div className="mt-8">
        <PianoPlayer />
      </div>
    </div>
  );
};

export default MiddleC;
