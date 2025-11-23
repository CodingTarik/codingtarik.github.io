import React from 'react';
import { ArrowLeft, AlertTriangle, Lightbulb, Trophy, Info, Dumbbell, Activity, Calendar, Utensils, Battery, Flame, Zap } from 'lucide-react';

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

const GymSummary = ({ onBack }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 mb-24 font-sans">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-violet-600 font-medium mb-8 hover:text-violet-800 hover:underline transition-colors px-4 py-2 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20"
      >
        <ArrowLeft size={20} /> Zurück zur Übersicht
      </button>

      <div className="bg-white dark:bg-stone-900 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-black/5">
        {/* Hero Header */}
        <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight relative z-10">
            Das Kraft-Kompendium
          </h1>
          <p className="text-violet-50 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed relative z-10">
            Die Wissenschaft des Muskelaufbaus: Von der Anatomie bis zum perfekten Trainingsplan.
          </p>
        </div>

        <div className="p-8 md:p-16 prose prose-lg dark:prose-invert max-w-none text-stone-700 dark:text-stone-300">
          
          {/* Phase 1: Grundlagen */}
          <section>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 font-bold text-3xl shadow-inner">1</div>
              <div>
                <span className="text-violet-600 dark:text-violet-400 font-bold tracking-wider uppercase text-sm">Die Basis</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Grundlagen & Sicherheit</h2>
              </div>
            </div>
            
            <p className="lead text-xl md:leading-relaxed text-stone-600 dark:text-stone-300">
              Krafttraining ist mehr als nur Gewichte heben. Es ist eine Disziplin, die Technik, Geduld und Konsistenz erfordert. Bevor du schwer hebst, lerne richtig zu heben.
            </p>

            <div className="grid md:grid-cols-2 gap-10 my-10">
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-2xl border border-stone-200 dark:border-stone-700">
                 <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400 mt-0 mb-4 flex items-center gap-2"><Dumbbell size={24}/> Das Gym-ABC</h3>
                 <ul className="space-y-3 list-none pl-0 text-sm">
                    <li className="flex gap-3 items-start">
                        <div className="mt-1 bg-violet-100 dark:bg-violet-900/40 p-1 rounded text-violet-700">Rep</div>
                        <div><strong>Wiederholung:</strong> Einmalige Ausführung einer Übung (Hoch & Runter).</div>
                    </li>
                    <li className="flex gap-3 items-start">
                        <div className="mt-1 bg-violet-100 dark:bg-violet-900/40 p-1 rounded text-violet-700">Set</div>
                        <div><strong>Satz:</strong> Eine Gruppe von Wiederholungen (z.B. 3 Sätze à 10 Reps).</div>
                    </li>
                    <li className="flex gap-3 items-start">
                        <div className="mt-1 bg-violet-100 dark:bg-violet-900/40 p-1 rounded text-violet-700">ROM</div>
                        <div><strong>Range of Motion:</strong> Voller Bewegungsumfang. Keine halben Reps!</div>
                    </li>
                 </ul>
              </div>

              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-2xl border border-stone-200 dark:border-stone-700">
                 <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400 mt-0 mb-4">Sicherheit & Etikette</h3>
                 <div className="space-y-4 text-sm">
                    <div>
                        <strong className="block text-stone-800 dark:text-stone-200">Technik &gt; Gewicht</strong>
                        <span className="text-stone-600 dark:text-stone-400">Lass dein Ego an der Tür. Schlechtes Heben führt zu Verletzungen, nicht zu Muskeln.</span>
                    </div>
                    <div>
                        <strong className="block text-stone-800 dark:text-stone-200">Sei kein "Gym Bro"</strong>
                        <span className="text-stone-600 dark:text-stone-400">Räume Gewichte weg. Nutze ein Handtuch. Blockiere keine Geräte für Handy-Pausen.</span>
                    </div>
                 </div>
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* Phase 2: Die Übungen */}
          <section>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-3xl shadow-inner">2</div>
              <div>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-wider uppercase text-sm">Bibliothek</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Die wichtigsten Übungen</h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
                <div className="bg-white dark:bg-stone-800 p-5 rounded-xl shadow-sm border border-stone-100 dark:border-stone-700">
                    <h4 className="font-bold text-lg mb-2 text-indigo-600">Push (Drücken)</h4>
                    <p className="text-xs text-stone-500 mb-2">Brust, Schulter, Trizeps</p>
                    <ul className="text-sm list-disc list-inside space-y-1 text-stone-600 dark:text-stone-300">
                        <li><strong>Bankdrücken:</strong> König für Oberkörperkraft.</li>
                        <li><strong>Überkopfdrücken:</strong> Für breite Schultern.</li>
                        <li><strong>Dips:</strong> Masse für Brust & Trizeps.</li>
                    </ul>
                </div>
                <div className="bg-white dark:bg-stone-800 p-5 rounded-xl shadow-sm border border-stone-100 dark:border-stone-700">
                    <h4 className="font-bold text-lg mb-2 text-indigo-600">Pull (Ziehen)</h4>
                    <p className="text-xs text-stone-500 mb-2">Rücken, Bizeps</p>
                    <ul className="text-sm list-disc list-inside space-y-1 text-stone-600 dark:text-stone-300">
                        <li><strong>Klimmzüge:</strong> Für den V-Form-Rücken.</li>
                        <li><strong>Rudern:</strong> Für Rückendichte & Haltung.</li>
                        <li><strong>Kreuzheben:</strong> Stärkste Ganzkörperübung.</li>
                    </ul>
                </div>
                <div className="bg-white dark:bg-stone-800 p-5 rounded-xl shadow-sm border border-stone-100 dark:border-stone-700">
                    <h4 className="font-bold text-lg mb-2 text-indigo-600">Legs (Beine)</h4>
                    <p className="text-xs text-stone-500 mb-2">Quads, Hamstrings, Glutes</p>
                    <ul className="text-sm list-disc list-inside space-y-1 text-stone-600 dark:text-stone-300">
                        <li><strong>Kniebeuge (Squat):</strong> "König aller Übungen".</li>
                        <li><strong>Beinpresse:</strong> Volumen ohne Rückenbelastung.</li>
                        <li><strong>Ausfallschritte:</strong> Balance & Funktion.</li>
                    </ul>
                </div>
            </div>
          </section>

          <SectionDivider />

          {/* Phase 3: Training & Progression */}
          <section>
             <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-3xl shadow-inner">3</div>
              <div>
                <span className="text-purple-600 dark:text-purple-400 font-bold tracking-wider uppercase text-sm">System</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Training & Progression</h2>
              </div>
            </div>

            <div className="space-y-6">
                <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl border-l-4 border-purple-500">
                    <h4 className="font-bold text-xl mb-2 text-purple-700 dark:text-purple-400 flex items-center gap-2"><Activity /> Progressive Overload</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-300 mb-2">
                        Das wichtigste Prinzip überhaupt: Der Körper passt sich nur an, wenn der Reiz steigt.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-white dark:bg-stone-900 p-3 rounded-lg">1. Mehr Gewicht</div>
                        <div className="bg-white dark:bg-stone-900 p-3 rounded-lg">2. Mehr Wiederholungen</div>
                        <div className="bg-white dark:bg-stone-900 p-3 rounded-lg">3. Mehr Sätze</div>
                        <div className="bg-white dark:bg-stone-900 p-3 rounded-lg">4. Kürzere Pausen</div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                     <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-sm">
                        <h4 className="font-bold text-lg mb-3 text-purple-700 dark:text-purple-400 flex items-center gap-2"><Calendar/> Trainingspläne</h4>
                        <ul className="space-y-2 text-sm">
                            <li><strong>Ganzkörper (GK):</strong> 2-3x/Woche. Ideal für Anfänger. Jede Einheit trainiert alles.</li>
                            <li><strong>Ober/Unter (OK/UK):</strong> 4x/Woche. Trennung für bessere Erholung.</li>
                            <li><strong>Push/Pull/Legs (PPL):</strong> 3-6x/Woche. Für Fortgeschrittene mit viel Zeit.</li>
                        </ul>
                     </div>
                     <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-sm">
                        <h4 className="font-bold text-lg mb-3 text-purple-700 dark:text-purple-400 flex items-center gap-2"><Zap/> Intensität (RIR)</h4>
                        <p className="text-sm mb-2"><strong>Reps In Reserve:</strong> Wie viele Reps hättest du noch geschafft?</p>
                        <ul className="space-y-2 text-sm">
                            <li><strong>RIR 1-3:</strong> Optimal für Muskelaufbau. Nah am Versagen, aber sauber.</li>
                            <li><strong>RIR 0 (Versagen):</strong> Nur selten, hohe Erschöpfung.</li>
                        </ul>
                     </div>
                </div>
            </div>
          </section>

          <SectionDivider />

          {/* Phase 4: Ernährung */}
          <section>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-3xl shadow-inner">4</div>
              <div>
                <span className="text-green-600 dark:text-green-400 font-bold tracking-wider uppercase text-sm">Treibstoff</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Ernährung & Kalorien</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-stone-50 dark:bg-stone-800 p-5 rounded-xl text-center">
                    <div className="bg-blue-100 dark:bg-blue-900/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-600 font-bold">P</div>
                    <h4 className="font-bold mb-1">Protein</h4>
                    <p className="text-xs text-stone-500">Baustoff</p>
                    <p className="text-sm font-bold mt-2">1.6 - 2.2g / kg</p>
                    <p className="text-xs mt-1">Fleisch, Fisch, Eier, Tofu, Quark</p>
                </div>
                <div className="bg-stone-50 dark:bg-stone-800 p-5 rounded-xl text-center">
                    <div className="bg-orange-100 dark:bg-orange-900/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-orange-600 font-bold">C</div>
                    <h4 className="font-bold mb-1">Carbs</h4>
                    <p className="text-xs text-stone-500">Energie</p>
                    <p className="text-sm font-bold mt-2">Restkalorien</p>
                    <p className="text-xs mt-1">Reis, Hafer, Kartoffeln, Nudeln</p>
                </div>
                <div className="bg-stone-50 dark:bg-stone-800 p-5 rounded-xl text-center">
                    <div className="bg-yellow-100 dark:bg-yellow-900/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-yellow-600 font-bold">F</div>
                    <h4 className="font-bold mb-1">Fats</h4>
                    <p className="text-xs text-stone-500">Hormone</p>
                    <p className="text-sm font-bold mt-2">0.8 - 1.0g / kg</p>
                    <p className="text-xs mt-1">Nüsse, Öl, Avocado, Lachs</p>
                </div>
            </div>

            <InfoBox type="note" title="Bulk vs. Cut">
                <p><strong>Muskelaufbau (Bulk):</strong> Leichter Kalorienüberschuss (+200-300 kcal). Du brauchst Energie, um Gewebe aufzubauen!</p>
                <p className="mt-2"><strong>Fettabbau (Cut):</strong> Moderates Defizit (-300-500 kcal). Protein hochhalten, um Muskeln zu schützen.</p>
            </InfoBox>
          </section>

          <SectionDivider />

          {/* Phase 5: Recovery */}
          <section>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-3xl shadow-inner">5</div>
              <div>
                <span className="text-teal-600 dark:text-teal-400 font-bold tracking-wider uppercase text-sm">Regeneration</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Schlaf & Recovery</h2>
              </div>
            </div>

            <p className="mb-6">
                Muskeln wachsen nicht im Gym, sondern im Schlaf. Training ist nur der Reiz, Erholung ist das Wachstum.
            </p>

            <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-800">
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <Battery className="text-teal-600 mt-1" size={20}/>
                        <div><strong>Schlaf:</strong> 7-9 Stunden. Hier werden Wachstumshormone ausgeschüttet.</div>
                    </li>
                    <li className="flex items-start gap-3">
                        <Flame className="text-teal-600 mt-1" size={20}/>
                        <div><strong>Deload:</strong> Alle 4-8 Wochen eine leichte Woche einlegen, um das ZNS zu erholen.</div>
                    </li>
                    <li className="flex items-start gap-3">
                        <Activity className="text-teal-600 mt-1" size={20}/>
                        <div><strong>Active Recovery:</strong> Spazieren, leichtes Cardio fördert Durchblutung.</div>
                    </li>
                </ul>
            </div>
          </section>

           <div className="mt-16 text-center p-10 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-3xl border border-violet-100 dark:border-violet-900/30">
            <p className="text-2xl font-serif text-stone-700 dark:text-stone-300 italic mb-6">
              "Der einzige schlechte Workout ist der, den du nicht gemacht hast."
            </p>
            <div className="flex items-center justify-center gap-2 text-stone-500 dark:text-stone-400 font-medium">
              <span className="w-8 h-px bg-stone-400"></span>
              <span>Unbekannt</span>
              <span className="w-8 h-px bg-stone-400"></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GymSummary;

