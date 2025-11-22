import React from 'react';
import PianoPlayer from '../../components/PianoPlayer';

const KeyboardGeography = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto p-6">
      <div className="prose dark:prose-invert max-w-none">
        <h1>Die Klaviatur: Orientierung</h1>
        <p>
          Auf den ersten Blick sieht ein Klavier mit 88 Tasten verwirrend aus. Aber es gibt ein einfaches Muster,
          das sich immer wiederholt.
        </p>

        <h3>Das Muster der Schwarzen Tasten</h3>
        <p>
          Schau dir die schwarzen Tasten genau an. Sie sind in Gruppen angeordnet:
        </p>
        
        <div className="my-8 bg-white dark:bg-stone-900 p-6 rounded-xl border border-stone-200 dark:border-stone-800">
          <h4 className="text-center font-bold mb-4">Das 2er und 3er Muster</h4>
          <svg viewBox="0 0 600 120" className="w-full h-32">
             {/* White keys background */}
             <rect x="0" y="0" width="600" height="120" fill="none" />
             
             {/* Draw an octave C to C */}
             {/* C, D, E, F, G, A, B. 7 white keys. Let's draw 2 octaves. 14 keys. */}
             {Array.from({length: 14}).map((_, i) => (
               <g key={i}>
                 <rect x={i * 40} y="0" width="40" height="120" fill="white" stroke="#cbd5e1" />
                 <text x={i * 40 + 12} y="110" fontSize="12" fill="#94a3b8" opacity="0.5">
                    {['C','D','E','F','G','A','B'][i%7]}
                 </text>
               </g>
             ))}
             
             {/* Black keys - Octave 1 */}
             {/* C# */}
             <rect x="25" y="0" width="24" height="80" fill="#1e293b" rx="2" />
             {/* D# */}
             <rect x="65" y="0" width="24" height="80" fill="#1e293b" rx="2" />
             
             {/* Group Marker 2 */}
             <rect x="20" y="-5" width="75" height="10" fill="#6366f1" rx="5" opacity="0.8" />
             <text x="45" y="-10" fill="#6366f1" fontSize="12" fontWeight="bold">2er</text>
             
             {/* F# */}
             <rect x="145" y="0" width="24" height="80" fill="#1e293b" rx="2" />
             {/* G# */}
             <rect x="185" y="0" width="24" height="80" fill="#1e293b" rx="2" />
             {/* A# */}
             <rect x="225" y="0" width="24" height="80" fill="#1e293b" rx="2" />
             
             {/* Group Marker 3 */}
             <rect x="140" y="-5" width="115" height="10" fill="#ec4899" rx="5" opacity="0.8" />
             <text x="180" y="-10" fill="#ec4899" fontSize="12" fontWeight="bold">3er</text>

             {/* Octave 2 Repeats... */}
             <rect x="305" y="0" width="24" height="80" fill="#1e293b" rx="2" />
             <rect x="345" y="0" width="24" height="80" fill="#1e293b" rx="2" />
             <rect x="425" y="0" width="24" height="80" fill="#1e293b" rx="2" />
             <rect x="465" y="0" width="24" height="80" fill="#1e293b" rx="2" />
             <rect x="505" y="0" width="24" height="80" fill="#1e293b" rx="2" />

             {/* Arrows highlighting gap */}
             <path d="M 100,60 L 130,60" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrow)" />
             <text x="105" y="50" fontSize="10" fill="#64748b">Lücke</text>
          </svg>
        </div>

        <ul>
          <li>Eine Gruppe von <strong>2 schwarzen Tasten</strong> (Zwillinge)</li>
          <li>Eine Gruppe von <strong>3 schwarzen Tasten</strong> (Drillinge)</li>
        </ul>
        <p>
          Zwischen den Gruppen sind immer zwei weiße Tasten ohne schwarze Taste dazwischen (E-F und H-C).
        </p>

        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border-l-4 border-indigo-500 my-4">
          <strong>Aufgabe:</strong> Finde alle 2er-Gruppen auf dem Klavier unten. Spiele sie von tief (links) nach hoch (rechts).
          Danach finde alle 3er-Gruppen.
        </div>
      </div>

      <div className="mt-8">
        <PianoPlayer />
      </div>
    </div>
  );
};

export default KeyboardGeography;
