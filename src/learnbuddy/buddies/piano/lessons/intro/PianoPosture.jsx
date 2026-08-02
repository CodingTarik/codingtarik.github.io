import React from 'react';
import PianoPlayer from '../../components/PianoPlayer';

const PianoPosture = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto p-6">
      <div className="prose dark:prose-invert max-w-none">
        <h1>Die Haltung am Klavier</h1>
        <p className="lead text-xl text-stone-600 dark:text-stone-300">
          Bevor wir den ersten Ton spielen, müssen wir lernen, wie man richtig am Klavier sitzt.
          Eine gute Haltung verhindert Rückenschmerzen und ermöglicht dir, virtuos und ausdrucksstark zu spielen.
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-md border border-stone-200 dark:border-stone-700">
             <h3 className="text-lg font-bold mb-4 text-center">Sitzposition</h3>
             <svg viewBox="0 0 200 200" className="w-full h-48 mx-auto">
                {/* Floor */}
                <line x1="10" y1="180" x2="190" y2="180" stroke="#94a3b8" strokeWidth="2" />
                
                {/* Piano */}
                <rect x="140" y="80" width="40" height="100" fill="#1e293b" />
                <rect x="130" y="80" width="10" height="20" fill="white" stroke="#cbd5e1" /> {/* Keys */}
                
                {/* Bench */}
                <rect x="40" y="120" width="40" height="60" fill="#78350f" />
                <rect x="35" y="120" width="50" height="10" fill="#451a03" rx="2" />
                
                {/* Person - Good Posture */}
                <circle cx="60" cy="70" r="12" fill="#6366f1" /> {/* Head */}
                <line x1="60" y1="82" x2="60" y2="130" stroke="#6366f1" strokeWidth="4" /> {/* Body */}
                <line x1="60" y1="130" x2="80" y2="130" stroke="#6366f1" strokeWidth="4" /> {/* Thigh */}
                <line x1="80" y1="130" x2="80" y2="170" stroke="#6366f1" strokeWidth="4" /> {/* Leg */}
                <line x1="70" y1="170" x2="90" y2="170" stroke="#6366f1" strokeWidth="4" /> {/* Foot */}
                
                {/* Arm */}
                <path d="M 60,90 Q 80,90 90,100 L 120,100" stroke="#6366f1" strokeWidth="3" fill="none" />
                
                {/* Guide Lines */}
                <line x1="130" y1="80" x2="130" y2="180" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 2" />
                <text x="45" y="195" fontSize="10" fill="#64748b">Gerader Rücken</text>
             </svg>
             <ul className="mt-4 text-sm space-y-2">
               <li>✅ Sitze mittig (vor dem C4)</li>
               <li>✅ Vordere Hälfte des Hockers</li>
               <li>✅ Füße flach auf dem Boden</li>
               <li>✅ Ellbogen leicht über Tastenhöhe</li>
             </ul>
          </div>

          <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-md border border-stone-200 dark:border-stone-700">
             <h3 className="text-lg font-bold mb-4 text-center">Handhaltung ("Die Kralle")</h3>
             <svg viewBox="0 0 200 200" className="w-full h-48 mx-auto">
                {/* Key */}
                <rect x="50" y="150" width="100" height="30" fill="white" stroke="#cbd5e1" />
                
                {/* Hand Shape - Curved */}
                <path d="M 20,120 Q 50,80 100,80 Q 150,80 180,120" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
                
                {/* Actual Hand */}
                <path d="M 40,120 C 40,100 60,80 100,80 C 140,80 160,100 160,120" stroke="#ec4899" strokeWidth="8" fill="none" strokeLinecap="round" />
                
                {/* Fingers striking */}
                <line x1="60" y1="120" x2="60" y2="150" stroke="#ec4899" strokeWidth="6" strokeLinecap="round" />
                <line x1="85" y1="115" x2="85" y2="150" stroke="#ec4899" strokeWidth="6" strokeLinecap="round" />
                <line x1="110" y1="115" x2="110" y2="150" stroke="#ec4899" strokeWidth="6" strokeLinecap="round" />
                
                {/* Ball metaphor */}
                <circle cx="100" cy="115" r="25" fill="#ec4899" opacity="0.2" />
                <text x="75" y="120" fontSize="10" fill="#ec4899" fontWeight="bold">Tennisball</text>
             </svg>
             <ul className="mt-4 text-sm space-y-2">
               <li>✅ "Tunnel" oder "Kralle" formen</li>
               <li>✅ Als ob du einen Ball hältst</li>
               <li>✅ Spielen mit den Fingerkuppen</li>
               <li>❌ Nicht durchdrücken!</li>
             </ul>
          </div>
        </div>

        <h3>3. Ausprobieren</h3>
        <p>
          Unten siehst du den Piano-Player. Wenn du ein Keyboard angeschlossen hast, versuche dich entspannt hinzusetzen
          und ein paar Tasten zu drücken. Achte darauf, dass deine Schultern locker hängen und nicht zu den Ohren gezogen sind.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Dein Instrument</h3>
        <PianoPlayer />
        <p className="text-sm text-gray-500 mt-2 text-center">
          Tipp: Klicke auf die Tasten oder nutze ein angeschlossenes USB-Keyboard.
        </p>
      </div>
    </div>
  );
};

export default PianoPosture;
