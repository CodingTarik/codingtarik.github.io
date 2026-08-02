import React from 'react';
import PianoPlayer from '../../components/PianoPlayer';

const FingerNumbering = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto p-6">
      <div className="prose dark:prose-invert max-w-none">
        <h1>Finger-Nummerierung (1-5)</h1>
        <p>
          Klaviernoten enthalten oft kleine Zahlen über oder unter den Notenköpfen. Das sind keine Rechenaufgaben, 
          sondern <strong>Fingersätze</strong>. Sie sagen dir, welchen Finger du benutzen sollst.
        </p>
        <p>
          Die Zählung beginnt immer beim Daumen.
        </p>

        <div className="my-8 bg-white dark:bg-stone-800 p-6 rounded-xl shadow border border-stone-200 dark:border-stone-700 flex justify-center">
           <svg viewBox="0 0 400 200" className="w-full max-w-md">
              {/* Left Hand Outline */}
              <g transform="translate(0, 0) scale(-1, 1) translate(-180, 0)">
                 <path d="M 20,180 C 10,160 0,120 10,100 C 15,90 20,80 30,80 L 40,40 C 42,30 52,30 55,40 L 60,90" fill="none" stroke="#94a3b8" strokeWidth="2" />
                 <path d="M 60,90 L 70,20 C 72,10 82,10 85,20 L 90,90" fill="none" stroke="#94a3b8" strokeWidth="2" />
                 <path d="M 90,90 L 100,10 C 102,0 112,0 115,10 L 120,90" fill="none" stroke="#94a3b8" strokeWidth="2" />
                 <path d="M 120,90 L 130,30 C 132,20 142,20 145,30 L 150,100" fill="none" stroke="#94a3b8" strokeWidth="2" />
                 <path d="M 150,100 L 170,130 C 180,140 170,160 150,150" fill="none" stroke="#94a3b8" strokeWidth="2" />
                 {/* Simplified Hand shapes */}
                 {/* Pinky */}
                 <rect x="20" y="50" width="20" height="60" rx="10" fill="#f1f5f9" stroke="#64748b" />
                 <text x="26" y="85" fontSize="20" fontWeight="bold" fill="#6366f1">5</text>
                 {/* Ring */}
                 <rect x="45" y="30" width="20" height="80" rx="10" fill="#f1f5f9" stroke="#64748b" />
                 <text x="51" y="75" fontSize="20" fontWeight="bold" fill="#6366f1">4</text>
                 {/* Middle */}
                 <rect x="70" y="20" width="20" height="90" rx="10" fill="#f1f5f9" stroke="#64748b" />
                 <text x="76" y="70" fontSize="20" fontWeight="bold" fill="#6366f1">3</text>
                 {/* Index */}
                 <rect x="95" y="35" width="20" height="75" rx="10" fill="#f1f5f9" stroke="#64748b" />
                 <text x="101" y="77" fontSize="20" fontWeight="bold" fill="#6366f1">2</text>
                 {/* Thumb - approximated */}
                 <path d="M 120,110 L 150,140 L 130,160 L 110,130 Z" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" strokeLinejoin="round" />
                 <text x="125" y="140" fontSize="20" fontWeight="bold" fill="#6366f1">1</text>
                 
                 <text x="60" y="180" fontSize="16" fill="#64748b">Linke Hand</text>
              </g>

              {/* Right Hand */}
              <g transform="translate(220, 0)">
                 {/* Pinky */}
                 <rect x="135" y="50" width="20" height="60" rx="10" fill="#f1f5f9" stroke="#64748b" />
                 <text x="141" y="85" fontSize="20" fontWeight="bold" fill="#6366f1">5</text>
                 {/* Ring */}
                 <rect x="110" y="30" width="20" height="80" rx="10" fill="#f1f5f9" stroke="#64748b" />
                 <text x="116" y="75" fontSize="20" fontWeight="bold" fill="#6366f1">4</text>
                 {/* Middle */}
                 <rect x="85" y="20" width="20" height="90" rx="10" fill="#f1f5f9" stroke="#64748b" />
                 <text x="91" y="70" fontSize="20" fontWeight="bold" fill="#6366f1">3</text>
                 {/* Index */}
                 <rect x="60" y="35" width="20" height="75" rx="10" fill="#f1f5f9" stroke="#64748b" />
                 <text x="66" y="77" fontSize="20" fontWeight="bold" fill="#6366f1">2</text>
                 {/* Thumb */}
                 <path d="M 35,110 L 5,140 L 25,160 L 45,130 Z" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" strokeLinejoin="round" />
                 <text x="25" y="140" fontSize="20" fontWeight="bold" fill="#6366f1">1</text>
                 
                 <text x="50" y="180" fontSize="16" fill="#64748b">Rechte Hand</text>
              </g>
           </svg>
        </div>

        <h3>Zuordnung</h3>
        <ul className="grid grid-cols-2 gap-4">
          <li className="bg-stone-100 dark:bg-stone-800 p-3 rounded"><strong>1</strong> = Daumen (Thumb)</li>
          <li className="bg-stone-100 dark:bg-stone-800 p-3 rounded"><strong>2</strong> = Zeigefinger (Index)</li>
          <li className="bg-stone-100 dark:bg-stone-800 p-3 rounded"><strong>3</strong> = Mittelfinger (Middle)</li>
          <li className="bg-stone-100 dark:bg-stone-800 p-3 rounded"><strong>4</strong> = Ringfinger (Ring)</li>
          <li className="bg-stone-100 dark:bg-stone-800 p-3 rounded"><strong>5</strong> = Kleiner Finger (Pinky)</li>
        </ul>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 my-6">
          <strong>Praxis-Übung:</strong>
          <br/>
          Lege deine <strong>rechte Hand</strong> so, dass der Daumen (1) auf dem <strong>Mittleren C</strong> liegt.
          Lege die anderen Finger auf die nächsten weißen Tasten (D, E, F, G).
          <br/><br/>
          Drücke nacheinander: 1 - 2 - 3 - 4 - 5 (C - D - E - F - G) und sage die Zahl laut dabei.
        </div>
      </div>

      <div className="mt-8">
        <PianoPlayer />
      </div>
    </div>
  );
};

export default FingerNumbering;


