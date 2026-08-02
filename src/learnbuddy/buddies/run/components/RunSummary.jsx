import React from 'react';
import { ArrowLeft, AlertTriangle, Lightbulb, Trophy, Info, Activity, Footprints, Timer, Heart, Zap, Battery, Utensils } from 'lucide-react';

const InfoBox = ({ type, title, children }) => {
  const styles = {
    tip: {
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-800",
      icon: <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      text: "text-blue-800 dark:text-blue-200"
    },
    warning: {
      bg: "bg-amber-50 dark:bg-amber-900/20",
      border: "border-amber-200 dark:border-amber-800",
      icon: <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      text: "text-amber-800 dark:text-amber-200"
    },
    success: {
      bg: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-800",
      icon: <Trophy className="w-5 h-5 text-green-600 dark:text-green-400" />,
      text: "text-green-800 dark:text-green-200"
    },
    note: {
      bg: "bg-stone-100 dark:bg-stone-800",
      border: "border-stone-200 dark:border-stone-700",
      icon: <Info className="w-5 h-5 text-stone-600 dark:text-stone-400" />,
      text: "text-stone-800 dark:text-stone-200"
    }
  };

  const style = styles[type] || styles.note;

  return (
    <div className={`${style.bg} border-l-4 ${style.border} p-5 rounded-r-lg my-8 shadow-sm`}>
      <div className="flex items-start gap-4">
        <div className="mt-1 flex-shrink-0">{style.icon}</div>
        <div className="flex-1">
          {title && <h4 className={`font-bold mb-2 text-lg ${style.text}`}>{title}</h4>}
          <div className={`text-base leading-relaxed ${style.text}`}>{children}</div>
        </div>
      </div>
    </div>
  );
};

const SectionDivider = () => (
  <div className="flex items-center justify-center my-16">
    <div className="h-px bg-stone-200 dark:bg-stone-700 flex-1"></div>
    <div className="mx-6 text-stone-300 dark:text-stone-600 text-xl">✦</div>
    <div className="h-px bg-stone-200 dark:bg-stone-700 flex-1"></div>
  </div>
);

const RunSummary = ({ onBack }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 mb-24 font-sans">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-orange-600 font-medium mb-8 hover:text-orange-800 hover:underline transition-colors px-4 py-2 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20"
      >
        <ArrowLeft size={20} /> Zurück zur Übersicht
      </button>

      <div className="bg-white dark:bg-stone-900 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-black/5">
        {/* Hero Header */}
        <div className="bg-gradient-to-br from-orange-500 via-red-500 to-red-700 p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight relative z-10">
            Der Lauf-Kompass
          </h1>
          <p className="text-orange-50 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed relative z-10">
            Vom ersten Schritt bis zum Marathon: Ein umfassender Guide zu Technik, Training und der Freude am Laufen.
          </p>
        </div>

        <div className="p-8 md:p-16 prose prose-lg dark:prose-invert max-w-none text-stone-700 dark:text-stone-300">
          
          {/* Phase 1: Fundamente */}
          <section>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold text-3xl shadow-inner">1</div>
              <div>
                <span className="text-orange-600 dark:text-orange-400 font-bold tracking-wider uppercase text-sm">Die Basis</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Fundamente des Laufens</h2>
              </div>
            </div>
            
            <p className="lead text-xl md:leading-relaxed text-stone-600 dark:text-stone-300">
              Laufen ist die natürlichste Bewegung des Menschen. Doch um verletzungsfrei und effizient zu bleiben, müssen wir das Laufen neu "lernen".
            </p>

            <div className="grid md:grid-cols-2 gap-10 my-10">
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-2xl border border-stone-200 dark:border-stone-700">
                 <h3 className="text-xl font-bold text-orange-700 dark:text-orange-400 mt-0 mb-4 flex items-center gap-2"><Footprints size={24}/> Technik-Basics</h3>
                 <ul className="space-y-3 list-none pl-0 text-sm">
                    <li className="flex gap-3 items-start">
                        <div className="mt-1 bg-orange-100 dark:bg-orange-900/40 p-1 rounded text-orange-700">Posture</div>
                        <div><strong>Aufrechte Haltung:</strong> Kopf geradeaus, Schultern entspannt, Hüfte leicht nach vorn ("Tall Spine").</div>
                    </li>
                    <li className="flex gap-3 items-start">
                        <div className="mt-1 bg-orange-100 dark:bg-orange-900/40 p-1 rounded text-orange-700">Arms</div>
                        <div><strong>Arme schwingen:</strong> 90°-Winkel, parallel zur Laufrichtung (nicht vor dem Körper kreuzen!).</div>
                    </li>
                    <li className="flex gap-3 items-start">
                        <div className="mt-1 bg-orange-100 dark:bg-orange-900/40 p-1 rounded text-orange-700">Cadence</div>
                        <div><strong>Schrittfrequenz:</strong> Ziel: 170-180 Schritte/Min. Kürzere, schnellere Schritte sind effizienter und gelenkschonender.</div>
                    </li>
                 </ul>
              </div>

              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-2xl border border-stone-200 dark:border-stone-700">
                 <h3 className="text-xl font-bold text-orange-700 dark:text-orange-400 mt-0 mb-4">Ausrüstung</h3>
                 <div className="space-y-4 text-sm">
                    <div>
                        <strong className="block text-stone-800 dark:text-stone-200">Laufschuhe (Das A&O)</strong>
                        <span className="text-stone-600 dark:text-stone-400">Lass eine Laufanalyse machen! Neutral, Stabilität oder Dämpfung? Tausche sie alle 600-800km.</span>
                    </div>
                    <div>
                        <strong className="block text-stone-800 dark:text-stone-200">Kleidung (Zwiebelprinzip)</strong>
                        <span className="text-stone-600 dark:text-stone-400">Funktionswäsche statt Baumwolle (Vermeidet Scheuern!). Schichten anpassen: Base, Mid, Outer Layer.</span>
                    </div>
                 </div>
              </div>
            </div>

            <InfoBox type="tip" title="Die 10%-Regel">
              <p>Steigere deine wöchentliche Distanz oder Zeit niemals um mehr als <strong>10%</strong>. Dein Herz-Kreislauf-System passt sich schnell an, aber deine Sehnen, Bänder und Knochen brauchen Monate. Geduld verhindert Verletzungen!</p>
            </InfoBox>
          </section>

          <SectionDivider />

          {/* Phase 2: Trainingstypen */}
          <section>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 font-bold text-3xl shadow-inner">2</div>
              <div>
                <span className="text-red-600 dark:text-red-400 font-bold tracking-wider uppercase text-sm">Methodik</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Trainingsarten</h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-sm border border-stone-100 dark:border-stone-700">
                    <h4 className="font-bold text-lg mb-2 text-green-600 flex items-center gap-2"><Heart size={20}/> Easy Run (Basis)</h4>
                    <p className="text-sm mb-2"><strong>80% deines Trainings!</strong></p>
                    <p className="text-sm text-stone-600 dark:text-stone-300">
                        Laufe so langsam, dass du dich problemlos unterhalten kannst ("Talk Test"). Das baut die aerobe Basis auf und fördert die Fettverbrennung.
                    </p>
                </div>
                <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-sm border border-stone-100 dark:border-stone-700">
                    <h4 className="font-bold text-lg mb-2 text-orange-600 flex items-center gap-2"><Activity size={20}/> Tempo Run (Schwelle)</h4>
                    <p className="text-sm mb-2"><strong>"Comfortably Hard"</strong></p>
                    <p className="text-sm text-stone-600 dark:text-stone-300">
                        Laufen an der Laktatschwelle. Anstrengend, aber kontrolliert (20-30 Min). Du kannst noch kurze Sätze sprechen. Macht dich schneller über Distanz.
                    </p>
                </div>
                <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-sm border border-stone-100 dark:border-stone-700">
                    <h4 className="font-bold text-lg mb-2 text-red-600 flex items-center gap-2"><Zap size={20}/> Intervalle (Speed)</h4>
                    <p className="text-sm mb-2"><strong>VO2max Training</strong></p>
                    <p className="text-sm text-stone-600 dark:text-stone-300">
                        Kurze, schnelle Phasen (z.B. 400m-1000m) im Wechsel mit Trabpausen. Verbessert maximale Sauerstoffaufnahme und Geschwindigkeit. Hart!
                    </p>
                </div>
                <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-sm border border-stone-100 dark:border-stone-700">
                    <h4 className="font-bold text-lg mb-2 text-blue-600 flex items-center gap-2"><Timer size={20}/> Long Run (Ausdauer)</h4>
                    <p className="text-sm mb-2"><strong>Der Sonntags-Lauf</strong></p>
                    <p className="text-sm text-stone-600 dark:text-stone-300">
                        Längster Lauf der Woche. Tempo: Sehr langsam (Easy). Baut mentale Härte und kapillare Dichte auf. Max. 30% der Wochenkilometer.
                    </p>
                </div>
            </div>
          </section>

          <SectionDivider />

          {/* Phase 3: Distanzen & Strategie */}
          <section>
             <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-3xl shadow-inner">3</div>
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">Ziele</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Distanzen & Strategie</h2>
              </div>
            </div>

            <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6 py-2">
                    <h4 className="font-bold text-xl mb-2">5K (Der Einstieg)</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-300">
                        Perfektes erstes Ziel. Training: 8-12 Wochen. Mix aus Ausdauer und etwas Tempo. 
                        <br/><strong>Race-Strategie:</strong> Nicht zu schnell starten! Gleichmäßiges Tempo oder zweite Hälfte schneller ("Negative Split").
                    </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6 py-2">
                    <h4 className="font-bold text-xl mb-2">10K & Halbmarathon (Der Aufbau)</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-300">
                        Erfordert mehr Long Runs (bis 15-20km). Ernährung während des Laufs wird relevant (Gels/Wasser).
                        <br/><strong>Race-Strategie:</strong> Pacing ist entscheidend. Energie sparen für die letzten Kilometer.
                    </p>
                </div>
                <div className="border-l-4 border-red-500 pl-6 py-2">
                    <h4 className="font-bold text-xl mb-2">Marathon (Die Königsklasse)</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-300">
                        42,195 km. Respektiere die Distanz! 16-20 Wochen Vorbereitung. Der Long Run (bis 32km) ist der Schlüssel.
                        <br/><strong>Die Wand (Km 30):</strong> Glykogenspeicher leer. Vorbeugung durch Training, Pacing und Carbs während des Laufs.
                    </p>
                </div>
            </div>
          </section>

          <SectionDivider />

          {/* Phase 4: Ernährung & Recovery */}
          <section>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-3xl shadow-inner">4</div>
              <div>
                <span className="text-teal-600 dark:text-teal-400 font-bold tracking-wider uppercase text-sm">Gesundheit</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Ernährung & Recovery</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                    <h4 className="font-bold text-teal-700 dark:text-teal-400 mb-3 flex items-center gap-2"><Utensils size={20}/> Ernährung</h4>
                    <ul className="space-y-2 text-sm list-disc list-inside">
                        <li><strong>Vor dem Lauf:</strong> Leichte Kohlenhydrate (Banane, Toast) 1-2h vorher.</li>
                        <li><strong>Nach dem Lauf:</strong> Protein + Carbs innerhalb von 30-60 Min (Recovery Window).</li>
                        <li><strong>Long Runs:</strong> Gels/Carbs alle 45-60 Min einplanen.</li>
                        <li><strong>Hydration:</strong> Wasser ist Leben. Urinfarbe checken (hellgelb = gut).</li>
                    </ul>
                </div>
                <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                    <h4 className="font-bold text-teal-700 dark:text-teal-400 mb-3 flex items-center gap-2"><Battery size={20}/> Regeneration</h4>
                    <ul className="space-y-2 text-sm list-disc list-inside">
                        <li><strong>Schlaf:</strong> 7-9h. Hier passiert die Anpassung.</li>
                        <li><strong>Ruhetage:</strong> Sind Training! Ohne Pause keine Leistung.</li>
                        <li><strong>Aktive Erholung:</strong> Spazieren, Yoga, Foam Rolling.</li>
                        <li><strong>Verletzungen:</strong> Bei stechendem Schmerz sofort STOPP. RICE-Methode (Rest, Ice, Compression, Elevation).</li>
                    </ul>
                </div>
            </div>
          </section>

           <div className="mt-16 text-center p-10 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-3xl border border-orange-100 dark:border-orange-900/30">
            <p className="text-2xl font-serif text-stone-700 dark:text-stone-300 italic mb-6">
              "Es spielt keine Rolle, wie langsam du gehst, solange du nicht stehen bleibst."
            </p>
            <div className="flex items-center justify-center gap-2 text-stone-500 dark:text-stone-400 font-medium">
              <span className="w-8 h-px bg-stone-400"></span>
              <span>Konfuzius</span>
              <span className="w-8 h-px bg-stone-400"></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RunSummary;


