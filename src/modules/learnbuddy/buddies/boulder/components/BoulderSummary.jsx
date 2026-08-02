import React from 'react';
import { ArrowLeft, AlertTriangle, Lightbulb, Trophy, Mountain, Info, Flame, Brain, Activity, Ruler } from 'lucide-react';

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

const BoulderSummary = ({ onBack }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 mb-24 font-sans">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-teal-600 font-medium mb-8 hover:text-teal-800 hover:underline transition-colors px-4 py-2 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20"
      >
        <ArrowLeft size={20} /> Zurück zur Übersicht
      </button>

      <div className="bg-white dark:bg-stone-900 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-black/5">
        {/* Hero Header */}
        <div className="bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-700 p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight relative z-10">
            Das Boulder-Kompendium
          </h1>
          <p className="text-teal-50 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed relative z-10">
            Vom ersten Griff bis zum Top-Out: Ein umfassender Guide zu Technik, Mindset und physischer Meisterschaft an der Wand.
          </p>
        </div>

        <div className="p-8 md:p-16 prose prose-lg dark:prose-invert max-w-none text-stone-700 dark:text-stone-300">
          
          {/* Phase 1: Grundlagen */}
          <section>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-700 dark:text-teal-400 font-bold text-3xl shadow-inner">1</div>
              <div>
                <span className="text-teal-600 dark:text-teal-400 font-bold tracking-wider uppercase text-sm">Die Basis</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Einführung & Philosophie</h2>
              </div>
            </div>
            
            <p className="lead text-xl md:leading-relaxed text-stone-600 dark:text-stone-300">
              Bouldern ist die reinste Form des Kletterns. Ohne Seil, Gurt und Sicherungsgerät reduzierst du den Sport auf das Wesentliche: <strong>Dich, den Fels und die Schwerkraft.</strong> Während beim Seilklettern oft die Ausdauer der limitierende Faktor ist, gleicht das Bouldern einem Sprint. Es verlangt maximale Kraftentfaltung, komplexe Problemlösungskompetenz und akrobatische Körperbeherrschung auf kurzer Distanz.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-8">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Fundamentale Bewegungsprinzipien</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">Bewegung aus den Füßen einleiten</h4>
                  <p className="text-sm">Mantra: "Beine drücken, Arme balancieren". Kraft aus den größten Muskelgruppen nutzen. Bewusstsein dafür schaffen, wann man zieht und wann man drückt. Beine sind 3x stärker als Arme!</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Die Hüfte als Zentrum der Bewegung</h4>
                  <p className="text-sm">Hüfte nah an der Wand halten = Effizienz. Eindrehen der Hüfte zur Reichweiten-Maximierung. Hüft-Position bestimmt die Körper-Ausrichtung und entscheidet über Erfolg oder Misserfolg.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Spannung vs. Entspannung</h4>
                  <p className="text-sm">Gezielte Ganzkörperspannung für schwere Züge. Bewusstes Lockern an guten Griffen zur Erholung. Vermeiden von "Dauer-Verkrampfung". Effizienz bedeutet, Energie nur dann zu verbrauchen, wenn nötig.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 my-10">
              <div>
                <h3 className="text-2xl font-bold text-teal-700 dark:text-teal-400 mt-0 mb-4">Ursprung & Entwicklung</h3>
                <p className="mb-6">
                  Die Wurzeln des Boulderns liegen im späten 19. Jahrhundert. Was als spielerisches Training an den Sandsteinblöcken von <em>Fontainebleau</em> (Frankreich) begann, um sich auf hohe alpine Wände vorzubereiten, hat sich längst emanzipiert. Heute ist Bouldern eine olympische Disziplin und ein globaler Lifestyle.
                </p>
                
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2"><Ruler className="text-teal-600" size={20}/> Schwierigkeitsgrade verstehen</h4>
                <p className="text-sm mb-4">Wie schwer ein Boulder ist, wird auf Skalen gemessen. Die zwei wichtigsten Systeme weltweit sind:</p>
                <div className="bg-stone-50 dark:bg-stone-800 p-5 rounded-xl border border-stone-200 dark:border-stone-700 grid grid-cols-2 gap-4">
                  <div>
                    <strong className="block text-teal-700 dark:text-teal-400 mb-1">Fb-Skala (Fontainebleau)</strong>
                    <span className="text-sm text-stone-600 dark:text-stone-400">Europa-Standard. Beginnt bei 1, relevant ab 5a. Geht bis 9A. Beispiel: 6b+</span>
                  </div>
                  <div>
                    <strong className="block text-teal-700 dark:text-teal-400 mb-1">V-Scale (Vermin)</strong>
                    <span className="text-sm text-stone-600 dark:text-stone-400">USA-Standard. Startet bei V0 (ca. Fb 4). Geht bis V17. Beispiel: V4</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center bg-gradient-to-b from-stone-50 to-stone-100 dark:from-stone-800 dark:to-stone-900 rounded-2xl p-8 shadow-inner">
                 <svg viewBox="0 0 200 200" className="w-full max-w-[280px] h-auto drop-shadow-xl mb-6 transform hover:scale-105 transition-transform duration-500">
                  <defs>
                    <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2dd4bf" />
                      <stop offset="100%" stopColor="#0f766e" />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="90" fill="#f0fdfa" className="dark:fill-stone-800"/>
                  <path d="M40 160 L100 50 L160 160 Z" fill="url(#mountainGrad)" stroke="#0f766e" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M100 50 L120 160 L80 160 Z" fill="#14b8a6" opacity="0.3" />
                  <path d="M100 50 L100 20" stroke="#334155" strokeWidth="3" />
                  <path d="M100 20 L140 35 L100 50" fill="#f59e0b" stroke="#b45309" strokeWidth="2" strokeLinejoin="round" />
                </svg>
                <p className="text-base text-center text-stone-600 dark:text-stone-400 font-medium italic">
                  "Jeder Boulder ist ein Rätsel, das du mit deinem Körper lösen musst."
                </p>
              </div>
            </div>

            <InfoBox type="warning" title="Safety First: Die Kunst des Fallens">
              <p className="mb-4">
                Bouldern ist statistisch sicher, aber Verletzungen passieren meist beim Landen. Das richtige Fallen ("Abrollen") ist der wichtigste Skill, den du lernen musst, noch <em>bevor</em> du schwere Routen probierst.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Gelenke schützen:</strong> Versuche niemals, einen Sturz aus der Höhe im Stehen "durchzudrücken". Deine Knie und die Wirbelsäule absorbieren sonst die gesamte Energie.</li>
                <li><strong>Der "Paratrooper Roll":</strong> Lande auf beiden Fußballen → gehe sofort tief in die Hocke → rolle dich über den runden Rücken nach hinten ab. Übe das aus niedriger Höhe!</li>
                <li><strong>Arme weg!</strong> Ein klassischer Anfängerfehler ist, sich beim Sturz nach hinten mit den Händen abzustützen. Dies ist die Hauptursache für gebrochene Handgelenke und Ellbogenluxationen. Halte die Arme beim Fallen vor der Brust ("T-Rex Arme").</li>
                <li><strong>Todeszone (Fallbereich):</strong> Halte dich niemals im Sturzbereich anderer Kletterer auf. Auch Matte ist hart, wenn 80kg darauf landen.</li>
            </ul>
            </InfoBox>

            <InfoBox type="note" title="Hallen-Etikette & Regeln">
              <p className="mb-3">Respektvolles Verhalten macht die Halle für alle angenehm:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>NIEMALS unter Kletternden durchlaufen</strong> – warte, bis die Route frei ist</li>
                <li><strong>Matten freihalten:</strong> Kein Gepäck, Handy, Wasserflaschen auf den Matten</li>
                <li><strong>Auf andere achten:</strong> Schaue vor dem Einsteigen in eine Route, ob jemand klettert</li>
                <li><strong>"Next!" rufen:</strong> Wenn ein Boulder frei sein sollte, kommuniziere das</li>
                <li><strong>Schuhe ausziehen:</strong> Außerhalb der Matten, um Schmutz zu vermeiden</li>
                <li><strong>Chalk sparsam nutzen:</strong> Griffe säubern nach dem Klettern (Bürste!)</li>
                <li><strong>Lautstärke & Musik:</strong> Rücksicht auf andere! Kopfhörer statt Boxen</li>
                <li><strong>Spotting:</strong> Biete Hilfe an, wenn jemand es braucht (besonders bei Traversen)</li>
              </ul>
            </InfoBox>

            <h3 className="text-2xl font-bold mb-6">Routen lesen & verstehen</h3>
            <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl mb-8">
              <h4 className="font-bold text-lg mb-3">Griff-Markierungen & Farben</h4>
              <p className="text-sm mb-2">Farbsysteme in verschiedenen Hallen. Start-Griffe erkennen (oft doppelt markiert). Top-Griffe & Zonen. Feet follow vs. markierte Tritte. Volumes & Strukturen können auch Teil der Route sein.</p>
              <p className="text-sm"><strong>Tipp:</strong> Schaue dir die Route erst vom Boden aus genau an, bevor du einsteigst!</p>
            </div>

            <h3 className="text-2xl font-bold mb-6">Ausrüstung - Gear für Anfänger</h3>
            <div className="space-y-6 mb-8">
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Kletterschuhe (DAS wichtigste Investment!)</h4>
                <p className="text-sm mb-2">Warum spezielle Schuhe? Sticky Rubber und Vorspannung ermöglichen besseren Grip. Die 3 Schuhtypen:</p>
                <ul className="text-sm list-disc list-inside space-y-1 ml-2">
                  <li><strong>Neutral:</strong> Bequem, für Anfänger geeignet (z.B. La Sportiva Tarantula, Scarpa Origin)</li>
                  <li><strong>Moderat:</strong> Leichte Vorspannung, guter Kompromiss</li>
                  <li><strong>Aggressiv:</strong> Starke Vorspannung, für Fortgeschrittene (Downturn, Asymmetrie)</li>
                </ul>
                <p className="text-sm mt-2"><strong>Passform:</strong> Eng aber nicht schmerzhaft. Leisten vs. Klettverschluss vs. Schnürung – probiere verschiedene Modelle!</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Chalk - Für besseren Grip</h4>
                <p className="text-sm mb-2">Magnesiumcarbonat absorbiert Schweiß. Pulver vs. Block vs. Liquid Chalk. Chalk-Bag vs. Chalk-Bucket. Viele Hallen erlauben nur Liquid Chalk (weniger Staub).</p>
                <p className="text-sm"><strong>Wichtig:</strong> Wie viel ist zu viel? Over-chalking = schlechter Grip! Sparsam nutzen.</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Weiteres Equipment</h4>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li><strong>Bürste:</strong> Griffe reinigen für besseren Grip</li>
                  <li><strong>Tape:</strong> Hautschutz bei Verletzungen</li>
                  <li><strong>Nagelfeile:</strong> Scharfe Kanten glätten</li>
                  <li><strong>Hautpflege:</strong> Creme, Balsam (z.B. Climb On!, Rhino Repair)</li>
                  <li><strong>Crashpad (Outdoor):</strong> Größe, Dicke, Hinge vs. Taco-Pad</li>
                </ul>
                <p className="text-sm mt-2"><strong>Budget-Guide:</strong> Minimal-Setup: Schuhe (geliehen), Liquid Chalk, Halleneintritt. Starter-Set: ~100-150€. Was kann warten? (Eigenes Crashpad, teure Schuhe)</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6">Vokabular der Halle</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-50 dark:bg-stone-800 p-5 rounded-xl border-l-4 border-teal-500 shadow-sm">
                <h4 className="font-bold text-teal-700 dark:text-teal-400">Crux (Schlüsselstelle)</h4>
                <p className="text-sm mt-1 mb-2">Der objektiv schwierigste Einzelzug oder die härteste Sequenz einer Route. Hier entscheidet sich oft Erfolg oder Misserfolg.</p>
                <div className="bg-teal-50 dark:bg-teal-900/20 p-2 rounded text-xs mt-2">
                  <p><strong>Warum ist die Crux wichtig?</strong> Die Crux ist der "Schlüssel" zum Boulder – wenn du sie schaffst, ist der Rest meist einfacher. Beim Route Reading solltest du die Crux identifizieren und planen, wie du sie angehst. Oft lohnt es sich, die Crux isoliert zu üben, bevor du den ganzen Boulder probierst.</p>
                </div>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-5 rounded-xl border-l-4 border-teal-500 shadow-sm">
                <h4 className="font-bold text-teal-700 dark:text-teal-400">Beta</h4>
                <p className="text-sm mt-1 mb-2">Informationen über die Route. "Darf ich dir Beta geben?" heißt: "Soll ich dir verraten, wie es geht?" (Ungefragte Beta gilt als unhöflich!).</p>
                <div className="bg-teal-50 dark:bg-teal-900/20 p-2 rounded text-xs mt-2">
                  <p><strong>Was ist Beta genau?</strong> Die Sequenz, die Bewegungen, die Griffreihenfolge – im Grunde die "Lösung" eines Boulders. Beta ist subjektiv: Was für einen großen Kletterer funktioniert, muss nicht für einen kleinen funktionieren. Deshalb: Erst selbst probieren, dann Beta fragen!</p>
                </div>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-5 rounded-xl border-l-4 border-teal-500 shadow-sm">
                <h4 className="font-bold text-teal-700 dark:text-teal-400">Flash vs. Redpoint</h4>
                <p className="text-sm mt-1"><strong>Flash:</strong> Erster Versuch erfolgreich (mit Vorwissen). <strong>Onsight:</strong> Erster Versuch erfolgreich (ohne jegliche Info). <strong>Redpoint:</strong> Erfolgreich nach Üben.</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-5 rounded-xl border-l-4 border-teal-500 shadow-sm">
                <h4 className="font-bold text-teal-700 dark:text-teal-400">Pump & Laktat</h4>
                <p className="text-sm mt-1 mb-2">Das brennende Gefühl in den Unterarmen ("dicke Arme"), wenn sich Laktat ansammelt und die Kapillaren komprimiert werden.</p>
                <div className="bg-teal-50 dark:bg-teal-900/20 p-2 rounded text-xs mt-2">
                  <p><strong>Was passiert beim Pump?</strong> Bei intensiver Belastung produzieren deine Muskeln Laktat (Milchsäure) schneller, als es abtransportiert werden kann. Das Laktat sammelt sich an, die Blutgefäße werden komprimiert, deine Arme fühlen sich "dick" an und werden schwach. <strong>Lösung:</strong> Shake-Outs, Pausen, bessere Technik (weniger Kraft = weniger Pump).</p>
                </div>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-5 rounded-xl border-l-4 border-teal-500 shadow-sm">
                <h4 className="font-bold text-teal-700 dark:text-teal-400">Project</h4>
                <p className="text-sm mt-1">Boulder, an dem man langfristig arbeitet. Mehrere Sessions investieren, um ihn zu schaffen.</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-5 rounded-xl border-l-4 border-teal-500 shadow-sm">
                <h4 className="font-bold text-teal-700 dark:text-teal-400">Sandbag</h4>
                <p className="text-sm mt-1">Boulder ist schwerer als der Grad suggeriert. Oft historisch bedingt oder subjektiv schwierig für bestimmte Körpergrößen.</p>
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* Phase 2: Technik */}
          <section>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-700 dark:text-amber-400 font-bold text-3xl shadow-inner">2</div>
              <div>
                <span className="text-amber-600 dark:text-amber-400 font-bold tracking-wider uppercase text-sm">Bewegungslehre</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Fundamentale Technik</h2>
              </div>
            </div>

            <p className="mb-8">
              Kraft ist endlich, Technik ist unendlich. Viele Anfänger versuchen, Defizite in der Technik durch Klimmzüge zu kompensieren. Ein Meisterboulderer bewegt sich jedoch effizient. Das Ziel ist es, so wenig Energie wie möglich zu verbrauchen, um oben anzukommen.
            </p>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-md border border-stone-100 dark:border-stone-700 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-amber-600 text-lg mb-3">1. Langer Arm (Straight Arm)</h4>
                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-3">
                  Muskeln verbrauchen Energie, Knochen nicht. Wenn du deine Arme anwinkels (T-Rex), stehen deine Bizepse unter Dauerspannung. Lerne, mit gestreckten Armen zu klettern und dich "ins Skelett zu hängen". Beuge den Arm nur kurz im Moment des Zuges ("Lock-off"), um zum nächsten Griff zu gelangen.
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="text-xs"><strong>Was ist ein Lock-Off?</strong> Ein Lock-Off ist das Halten des Arms in angewinkelter Position (z.B. 90° oder 120°). Du "sperrst" den Arm in dieser Position, um freie Hand zum nächsten Griff zu bekommen. Sehr kraftintensiv – deshalb nur kurz halten!</p>
                </div>
              </div>
              <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-md border border-stone-100 dark:border-stone-700 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-amber-600 text-lg mb-3">2. Silent Feet</h4>
                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed">
                  Achte auf das Geräusch deiner Füße. Ein lautes "Bamm" bedeutet, dass du den Tritt nicht kontrolliert hast oder abgerutscht bist. Setze den Fuß präzise, lautlos und kontrolliert. Behalte den Blick auf dem Fuß, bis er den Tritt *wirklich* berührt hat, bevor du nach oben schaust.
                </p>
              </div>
              <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-md border border-stone-100 dark:border-stone-700 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-amber-600 text-lg mb-3">3. Schwerpunkt & Hüfte</h4>
                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed">
                  Deine Hüfte ist dein Schwerpunkt (Center of Gravity). Je weiter sie von der Wand weg ist (Hintern rausstrecken), desto mehr Gewicht zieht an deinen Fingern. Bring die Hüfte aggressiv nah an die Wand ("Froschposition" oder Eindrehen).
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-10 mb-6">Die Anatomie der Griffe</h3>
            <p className="mb-6">Jeder Griff erfordert eine andere Handhaltung. Zu wissen, wie man einen Griff belastet (Zugrichtung), ist der Schlüssel.</p>
            
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 mb-10">
              <div className="bg-green-50 dark:bg-green-900/10 p-5 rounded-xl border border-green-100 dark:border-green-800">
                <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Jug (Henkel)</h4>
                <p className="text-sm">Der beste Freund des Kletterers. Tief hinterschnitten. Nutze sie strategisch zum Ausschütteln und Entspannen. Aber Vorsicht: Auch Henkel können im Dach pumpig werden!</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/10 p-5 rounded-xl border border-red-100 dark:border-red-800">
                <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Crimp (Leiste)</h4>
                <p className="text-sm">Schmale Kanten, auf denen nur die Fingerkuppen Platz finden. Vermeide den "Full Crimp" (Daumen über Zeigefinger) am Anfang, um deine Ringbänder zu schonen. Trainiere "Open Hand".</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-xl border border-blue-100 dark:border-blue-800">
                <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Sloper (Aufleger)</h4>
                <p className="text-sm">Runde, glatte Formen ohne Kante. Sie halten nur durch Reibung und Körperposition. Die Regel: Dein Schwerpunkt muss <strong>vertikal unter</strong> dem Griff sein. "Vertraue dem Fleisch" der Handfläche.</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/10 p-5 rounded-xl border border-purple-100 dark:border-purple-800">
                <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-2">Pinch (Zange)</h4>
                <p className="text-sm">Hier arbeitet der Daumen in Opposition zu den Fingern. Erfordert spezifische Kraft im Daumenballen. Pinches können dich oft stabilisieren, wenn du sie aktiv zudrückst.</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/10 p-5 rounded-xl border border-orange-100 dark:border-orange-800">
                <h4 className="font-bold text-orange-800 dark:text-orange-300 mb-2">Pocket (Loch)</h4>
                <p className="text-sm">1-Finger (Mono), 2-Finger oder 3-Finger Löcher. ⚠️ Hohe Belastung! Mittel- und Ringfinger sind meist am stärksten. Nie ruckartig belasten. Vorsicht als Anfänger!</p>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/10 p-5 rounded-xl border border-indigo-100 dark:border-indigo-800">
                <h4 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2">Side-Pull (Seitgriff)</h4>
                <p className="text-sm">Griff seitlich ziehen. Körper in Opposition zum Zug positionieren. Oft mit Flagging kombiniert für Stabilität.</p>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/10 p-5 rounded-xl border border-pink-100 dark:border-pink-800">
                <h4 className="font-bold text-pink-800 dark:text-pink-300 mb-2">Match (Zusammenführen)</h4>
                <p className="text-sm">Beide Hände auf einem Griff platzieren. Wichtig für Position halten oder Handwechsel. Match auf Slopers erfordert gleichmäßige Gewichtsverteilung.</p>
              </div>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800/60 p-6 rounded-xl mb-8">
              <h4 className="font-bold text-lg mb-4">Spezielle Belastungsrichtungen</h4>
              <ul className="grid md:grid-cols-2 gap-4 list-none p-0 m-0">
                <li className="flex gap-3 items-start">
                   <div className="mt-1 bg-stone-300 dark:bg-stone-600 rounded p-1"><ArrowLeft size={14} className="rotate-90"/></div>
                   <div><strong>Undercling (Untergriff):</strong> Funktioniert entgegengesetzt. Du ziehst den Griff nach oben (Bizeps), während du die Füße fest in die Wand drückst. Benötigt hohe Füße und Körperspannung.</div>
                </li>
                <li className="flex gap-3 items-start">
                   <div className="mt-1 bg-stone-300 dark:bg-stone-600 rounded p-1"><ArrowLeft size={14} /></div>
                   <div><strong>Gaston (Schulterzug):</strong> Wie das Aufdrücken einer Fahrstuhltür. Daumen zeigen nach unten, Ellbogen nach außen. Belastet stark die Schulter.</div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6">Fußtechnik: Das Geheimnis der Profis</h3>
            <p className="mb-6">
              Wenn du einem Profi zuschaust, sieht es leicht aus. Das liegt an der Fußtechnik. Während Anfänger sich hochziehen, schieben sich Profis mit den Beinen hoch (Beinmuskeln sind viel stärker als Arme!).
            </p>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg text-amber-700 dark:text-amber-400">
                  <Activity size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Pivoting (Drehpunkt Zehenspitze)</h4>
                  <p>Stehe niemals auf dem Mittelfuß oder der Ferse (außer beim Hook). Nutze ausschließlich die Spitze deines großen Zehs. Das macht deinen Fuß zu einem präzisen Drehgelenk. Du kannst so deine Hüfte eindrehen, ohne den Fuß umsetzen zu müssen.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg text-amber-700 dark:text-amber-400">
                  <Activity size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Eindrehen & Drop Knee</h4>
                  <p>Die "ägyptische Haltung". Drehe ein Knie nach innen unten. Dadurch drückt sich deine Hüfte an die Wand und du gewinnst enorm an Reichweite mit der gleichseitigen Hand. Es entlastet zudem die Arme massiv, da das Skelett die Last trägt.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                 <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg text-amber-700 dark:text-amber-400">
                  <Activity size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Smearing (Reibungstritt)</h4>
                  <p>Oft gibt es keine Tritte, nur die nackte Wand oder ein großes Volumen. Drücke den Fuß mit maximaler Fläche gegen die Wand. Hier ist die Ferse <em>tief</em> zu halten, um die Kontaktfläche des Gummis zu maximieren. Vertraue der Physik!</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg text-amber-700 dark:text-amber-400">
                  <Activity size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Fußwechsel (Swapping Feet)</h4>
                  <p>Auf einem Tritt den Fuß wechseln. Statisch (langsam) oder dynamisch (mit kleinem Sprung). Wichtig für Sequenzierung und optimale Körperposition. Übe bewusst, um flüssig zu werden.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg text-amber-700 dark:text-amber-400">
                  <Activity size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Backstep</h4>
                  <p>Außenkante des Fußes zur Wand, Knie zeigt von der Wand weg. Sehr effizient in Überhängen, ermöglicht bessere Hüftposition und entlastet die Arme.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg text-amber-700 dark:text-amber-400">
                  <Activity size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Rock-over (Gewichtsverlagerung)</h4>
                  <p>Gewicht kontrolliert auf einen Fuß verlagern. Wichtig für Slab und Balance-Boulder. Langsam Gewicht auf den vorderen Fuß bringen, Hüfte über den Fuß bewegen. Erfordert Vertrauen und Balance, oft kombiniert mit Pivoting.</p>
                </div>
              </div>
            </div>

            <InfoBox type="tip" title="Balance-Tipp: Flagging">
              <p><strong>Das Problem:</strong> Wenn Hand und Fuß auf einer vertikalen Linie sind, dreht dich die Schwerkraft von der Wand weg ("Scheunentor-Effekt").</p>
              <p className="mt-2"><strong>Die Lösung:</strong> Nutze das freie Bein als Gegengewicht (wie ein Seiltänzer seine Stange).</p>
              <ul className="mt-2 ml-4 list-disc">
                <li><strong>Normal Flag:</strong> Das freie Bein streckt zur Seite.</li>
                <li><strong>Inside Flag:</strong> Das freie Bein kreuzt <em>vor</em> dem Standbein.</li>
                <li><strong>Outside Flag (Standard):</strong> Das freie Bein kreuzt <em>hinter</em> dem Standbein vorbei. Das stabilisiert die Hüfte seitlich und verhindert das Aufklappen.</li>
              </ul>
            </InfoBox>

            <h3 className="text-2xl font-bold mt-12 mb-6">Balance & Schwerpunkt-Konzepte</h3>
            <div className="space-y-6 mb-8">
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Drei-Punkt-Kontakt</h4>
                <p className="mb-2">Immer 3 Punkte an der Wand (2 Füße + 1 Hand oder umgekehrt). Ausnahme: Dynamische Moves. Diese Regel hilft dir, kontrolliert zu klettern und unnötige Stürze zu vermeiden.</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Das Balance-Dreieck</h4>
                <p className="mb-2">Visualisiere das Dreieck zwischen deinen Kontaktpunkten. Der Schwerpunkt sollte idealerweise innerhalb dieses Dreiecks bleiben. Aktives Verlagern des Dreiecks zur nächsten Position ermöglicht flüssige Bewegungen.</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Gegendruck (Opposition)</h4>
                <p className="mb-2">Drücken vs. Ziehen gleichzeitig nutzen. Beispiel: Undercling + Fußdruck. Diese Technik ermöglicht es, auch schwierige Positionen zu halten, indem du Kräfte gegeneinander ausbalancierst.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6">Pacing & Erholung an der Wand</h3>
            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500">
                <h4 className="font-bold text-lg mb-3">Kletter-Atmung</h4>
                <p className="mb-2"><strong>Nicht die Luft anhalten!</strong> Das ist der häufigste Fehler. Tiefes Ausatmen bei schweren Zügen ("Power-Schrei") hilft, Spannung zu lösen. Ruhige, tiefe Atmung an Rastpositionen senkt den Puls und ermöglicht Erholung.</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500">
                <h4 className="font-bold text-lg mb-3">Shake-Outs & Rastpositionen</h4>
                <p className="mb-2">Aktives "Ausschütteln" der Arme an guten Griffen. Einen Arm nach dem anderen lockern, um Pump abzubauen. No-Hands-Rests (Knee-Bars, Bat Hangs) identifizieren und nutzen. Das richtige Timing: Wann lohnt sich eine Pause?</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6">Cross-through & Cross-over</h3>
            <p className="mb-6">Bewegungsmuster, bei denen ein Arm über oder unter den anderen kreuzt. Wichtig für effiziente Sequenzierung und vermeidet unnötige Position-Wechsel.</p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Cross-through (Arm unter dem anderen)</h4>
                <p className="text-sm">Arm geht unter dem anderen Arm durch. Erlaubt bessere Körperposition, oft effizienter als Handwechsel. Beispiel: Rechte Hand greift links, indem Arm unter linkem Arm durchgeht.</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Cross-over (Arm über den anderen)</h4>
                <p className="text-sm">Arm geht über den anderen Arm. Für weite Griffe oder spezielle Sequenzen. Erfordert gute Schulter-Mobilität. Oft in Competition-Style Boulder zu sehen.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6">Traversing - Horizontales Klettern</h3>
            <p className="mb-6">Horizontal an der Wand klettern (nicht hoch!). Ausgezeichnet für Ausdauer und Techniktraining, geringeres Verletzungsrisiko, perfekt zum Aufwärmen.</p>
            <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl mb-8">
              <h4 className="font-bold text-lg mb-3">Traversing-Techniken</h4>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Kontinuierliche Bewegung ohne Pause</li>
                <li>Effiziente Griffwechsel (Match, Cross-through)</li>
                <li>Gute Fußarbeit (Pivoting, Smearing)</li>
                <li>Körperspannung halten</li>
                <li>Richtungswechsel einbauen</li>
              </ul>
              <p className="mt-4 text-sm"><strong>Training:</strong> 10 Minuten kontinuierliches Traversieren, Traverse mit nur Slopern, Traverse mit Match auf jedem Griff, Traverse mit Cross-through Moves.</p>
            </div>
          </section>

          <SectionDivider />

          {/* Phase 3: Fortgeschritten */}
          <section>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 font-bold text-3xl shadow-inner">3</div>
              <div>
                <span className="text-red-600 dark:text-red-400 font-bold tracking-wider uppercase text-sm">Advanced Skills</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Fortgeschrittene Techniken</h2>
              </div>
            </div>

            <p className="mb-8">
              Ab einem gewissen Grad reicht statisches Klettern nicht mehr aus. Griffe liegen zu weit entfernt oder sind zu schlecht, um sie langsam zu halten. Willkommen in der Welt der Dynamik und der komplexen 3D-Bewegungen.
            </p>

            <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-red-600 mt-0 mb-4 flex items-center gap-2"><Flame /> Dynamisches Klettern</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-red-200 dark:border-red-900 pl-4">
                    <h4 className="font-bold text-lg">Dead Point</h4>
                    <p className="text-stone-600 dark:text-stone-300">
                      Die eleganteste Form der Dynamik. Du erzeugst Schwung aus der Hüfte und greifst den Zielgriff genau im "toten Punkt" der Bewegung – dem Moment der Schwerelosigkeit am Scheitelpunkt deiner Parabel. In diesem Sekundenbruchteil lastet kein Gewicht auf den Fingern, was dir Zeit gibt, den Griff präzise zu fassen.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-200 dark:border-red-900 pl-4">
                    <h4 className="font-bold text-lg">Der Dyno</h4>
                    <p className="text-stone-600 dark:text-stone-300">
                      Ein vollständiger Sprung, bei dem oft alle vier Gliedmaßen den Kontakt zur Wand verlieren.
                      <br/><strong>Der Schlüssel:</strong> Der Impuls kommt zu 100% aus den Beinen, nicht aus dem Armzug. Die Arme führen den Körper nur zur Wand ("Steuern"). Beim Kontakt ("Catch") muss der Rumpf extrem angespannt werden, um den Schwung abzufangen.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-200 dark:border-red-900 pl-4">
                    <h4 className="font-bold text-lg">Jump & Catch</h4>
                    <p className="text-stone-600 dark:text-stone-300">
                      Timing ist alles. Landung abfedern – den Griff "einfangen", nicht reißen. Der Griff sollte sanft gegriffen werden, während der Körper noch nach oben steigt. Übe an niedrigen Griffen zuerst.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-200 dark:border-red-900 pl-4">
                    <h4 className="font-bold text-lg">Anlauf & Koordination (Competition Style)</h4>
                    <p className="text-stone-600 dark:text-stone-300">
                      Laufen an der Wand vor dem Absprung. Mehrere Tritte schnell hintereinander nutzen, um Momentum zu erzeugen. Timing & Präzision bei voller Geschwindigkeit. Sehr athletisch und spektakulär.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-200 dark:border-red-900 pl-4">
                    <h4 className="font-bold text-lg">Campus-Moves an der Wand</h4>
                    <p className="text-stone-600 dark:text-stone-300">
                      Ohne Füße zwischen Griffen bewegen. Trainiert Oberkörperkraft & Lock-Off. ⚠️ Hohes Verletzungsrisiko – langsam steigern! Nur für Fortgeschrittene mit guter Fingerkraft.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <svg viewBox="0 0 200 200" className="w-full h-auto drop-shadow-xl bg-white dark:bg-stone-800 rounded-xl p-4">
                  <circle cx="100" cy="100" r="90" fill="#fef2f2" className="dark:fill-stone-900/50" />
                  <path d="M40 140 Q100 40 160 80" stroke="#dc2626" strokeWidth="6" fill="none" strokeDasharray="12 8" strokeLinecap="round" />
                  <circle cx="40" cy="140" r="12" fill="#ef4444" />
                  <path d="M148 78 L162 78 L155 93 Z" fill="#dc2626" />
                  <circle cx="160" cy="80" r="18" fill="#fbbf24" stroke="#b45309" strokeWidth="3" />
                </svg>
                <p className="text-xs text-center mt-3 text-stone-400">Die Parabel des Schwungs nutzen</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6">Tricks für den Überhang & 3D-Klettern</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">Heel & Toe Hooks</h4>
                <p className="text-sm">Im Überhang tragen die Füße oft kein Gewicht, sondern <em>ziehen</em> oder <em>klemmen</em>.
                <br/><strong>Heel Hook:</strong> Ferse auflegen, Zehen anziehen, Oberschenkelrückseite (Hamstrings) aktivieren.
                <br/><strong>Toe Hook:</strong> Mit dem Spann hinter eine Kante haken. Braucht massive Schienbein- und Core-Kraft.</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">Bicycle</h4>
                <p className="text-sm">Eine Zangenbewegung mit den Füßen. Ein Fuß steht normal auf einem Tritt (drückt), der andere hakt von oben als Toe-Hook (zieht) dagegen. So klemmst du dich an einem Volumen fest und kannst die Hände lösen.</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">Knee-Bar (Knieklemmer)</h4>
                <p className="text-sm">Technik-Cheatcode! Du klemmst Unter- oder Oberschenkel zwischen zwei Felsstrukturen. Wenn es gut sitzt ("bombenfest"), kannst du beide Hände loslassen und dich kopfüber ausruhen ("No-Hands-Rest").</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">The Rose Move</h4>
                <p className="text-sm">Eine extreme Kreuzbewegung, bei der du den Arm so weit kreuzt, dass du dich mit dem Rücken zur Wand drehst und unter deinem eigenen Arm hindurchschaust. Erforderlich bei weit entfernten Griffen.</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">Bat Hang (Fledermaus)</h4>
                <p className="text-sm">Kopfüber hängen mit Heel Hooks. Extrem Core-intensiv. Meist in horizontalen Dächern. Erfordert massive Körperspannung und Flexibilität.</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">Moon Kick / I-Pogo</h4>
                <p className="text-sm">Bein-Schwung für Momentum. Erzeugt Aufwärtsbewegung ohne Ziehen. Sehr Core-intensiv. Oft in Competition-Style Boulder zu sehen.</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">Kontrolliertes "Füße Schneiden" (Cutting Feet)</h4>
                <p className="text-sm">Wenn Füße vom Tritt rutschen oder schwingen: Core anspannen, um Schwingen zu stoppen. Schnell Füße wieder an die Wand bringen. Wichtig für dynamische Moves im Überhang.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-10 mb-4">Spezialsituationen</h3>
            <div className="space-y-4">
                <div className="border-l-4 border-teal-500 pl-4 py-2">
                    <strong className="block text-lg">Mantling (Der Ausstieg)</strong>
                    <p className="text-stone-600 dark:text-stone-300">Wie das Aussteigen aus einem Schwimmbecken. Der kritische Moment ist das Umdrehen des Ellbogens von "Ziehen" (unten) auf "Drücken" (oben/Trizeps). Oft musst du dabei den Fuß sehr hoch auf Handhöhe setzen. Varianten: Low Mantel (kontrolliert), High Mantel (explosiv), Mantle mit Heel Hook (effizient in Überhängen).</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4 py-2">
                    <strong className="block text-lg">Compression & Slabs</strong>
                    <p className="text-stone-600 dark:text-stone-300">Während man im Überhang zieht, muss man an Platten (Slabs) und Kanten oft drücken. Bei der Compression ("Bärenumarmung") drückst du zwei seitliche Griffe gegeneinander, um an der Wand zu bleiben. Slabs erfordern maximales Vertrauen in die Reibung und ruhiges Atmen.</p>
                </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6">Route Reading - Boulder knacken mit dem Kopf</h3>
            <div className="space-y-6 mb-8">
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Pre-Climb Analysis</h4>
                <p className="mb-2">Vor dem Klettern analysieren: Alle Griffe identifizieren, Crux finden, mögliche Sequenzen durchdenken, Rest-Positionen planen. Profis wissen oft schon am Boden, welche Hand zuerst an den Top-Griff geht (Reverse Engineering).</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Beta-Breaking - Eigene Lösungen finden</h4>
                <p className="mb-2">Nicht blind Beta kopieren! Jeder Körper ist anders (Größe, Reichweite, Stärken). Was für andere funktioniert, muss nicht für dich funktionieren. Verschiedene Sequenzen ausprobieren, alternative Griffe/Tritte finden, eigene Bewegungsmuster entwickeln. Beta-Breaking trainiert Problemlösungsfähigkeit und macht dich zu einem besseren Kletterer.</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Forerunning (Bewegungen am Boden simulieren)</h4>
                <p className="mb-2">Bewegungsabläufe trocken üben. Hilft bei komplexen Sequenzen, baut Muskelgedächtnis auf. Bewegungen in der Luft durchgehen, bevor du an die Wand gehst.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6">Stemming & Laybacking - Spezialtechniken</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Stemming - Drücken gegen Wände</h4>
                <p className="text-sm mb-2">Technik für Ecken, Winkel und Volumes. Drücken gegen gegenüberliegende Wände/Strukturen. Körperspannung hält dich in Position. Varianten:</p>
                <ul className="text-sm list-disc list-inside space-y-1 ml-2">
                  <li><strong>Hand-Foot-Stem:</strong> Eine Hand + ein Fuß gegen eine Wand, andere Hand + Fuß gegen andere Wand</li>
                  <li><strong>Hand-Hand-Stem:</strong> Beide Hände gegen verschiedene Wände</li>
                  <li><strong>Foot-Foot-Stem:</strong> Beide Füße gegen Wände, sehr kraftsparend!</li>
                </ul>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Laybacking - Nach hinten lehnen</h4>
                <p className="text-sm mb-2">Technik für Spalten, Ecken und Kanten. Körpergewicht nach hinten verlagern. Arme ziehen, Füße drücken (Opposition!). Hände greifen Kante/Spalte von der Seite, Körper lehnt sich nach hinten, Füße drücken gegen Wand. Körperspannung extrem wichtig. Oft in Kombination mit Stemming.</p>
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* Phase 4: Training */}
          <section>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-3xl shadow-inner">4</div>
              <div>
                <span className="text-purple-600 dark:text-purple-400 font-bold tracking-wider uppercase text-sm">Physiologie</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Training & Gesundheit</h2>
              </div>
            </div>

            <p className="mb-6">
              "Klettern lernt man nur durch Klettern." Das stimmt am Anfang. Später brauchst du systematisches Training, um Plateaus zu überwinden und verletzungsfrei zu bleiben.
            </p>

            <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-2xl mb-8">
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">Der heilige Gral: Das Warm-up</h3>
              <p className="mb-4">Wer kalt in schwere Boulder einsteigt, bettelt um Verletzungen. Ein gutes Warm-up dauert 20 Minuten:</p>
              <ol className="list-decimal list-inside space-y-2 font-medium">
                <li><span className="font-normal">Pulse Raiser (5 Min): Seilspringen, Jumping Jacks. Ziel: Körpertemperatur erhöhen.</span></li>
                <li><span className="font-normal">Mobility (5 Min): Gelenke kreisen (besonders Schultern, Handgelenke, Hüfte).</span></li>
                <li><span className="font-normal">Recruitment (5 Min): Hängen an der Stange (Schultern aktivieren), Theraband-Übungen.</span></li>
                <li><span className="font-normal">Pyramide (5 Min): Leichte Boulder klettern, dabei bewusst auf perfekte Technik achten.</span></li>
              </ol>
            </div>

            <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-2xl mb-8">
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">Cool-down - Die oft vergessene Phase</h3>
              <p className="mb-4">Wichtig zur Förderung der Regeneration:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Leichtes statisches Dehnen (Unterarme, Schultern, Hüfte) - 30s pro Dehnung</li>
                <li>Antagonisten-Übungen (5-10 Min): Leichte Liegestütze, Finger-Strecker</li>
                <li>Fördert Durchblutung und beschleunigt Regeneration</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-6">Trainingsplanung & Struktur</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-purple-700 mb-3">Häufigkeit & Session-Typen</h4>
                <p className="text-sm mb-2"><strong>Wie oft?</strong> Anfänger: 2-3x/Woche, Fortgeschritten: 3-4x/Woche, Profis: 5-6x/Woche (+ Ruhetage!)</p>
                <p className="text-sm mb-2"><strong>Session-Typen:</strong></p>
                <ul className="text-sm list-disc list-inside space-y-1 ml-2">
                  <li>Technik-Session: Leichte Boulder, Fokus auf saubere Ausführung</li>
                  <li>Limit-Session: Boulder an persönlichem Limit, mehrere Versuche</li>
                  <li>Ausdauer-Session: Viele Boulder, wenig Pause (Pump-Training)</li>
                  <li>Projekt-Session: An einem schweren Boulder arbeiten</li>
                </ul>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-purple-700 mb-3">Periodisierung & Progression</h4>
                <p className="text-sm mb-2">4 Wochen Training → 1 Woche Deload (reduzierte Intensität). Langfristige Planung mit Saison-Zielen.</p>
                <p className="text-sm mb-2"><strong>Progression messen:</strong> Nicht nur nach Grad! Wie fühlt sich Boulder an? Mehr Versuche ohne Pump? Sauberere Technik? Trainingslog führen hilft, Muster zu erkennen.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-6">Praktische Technik-Übungen (Drills)</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-purple-700 mb-3">Bewegungs-Flow Übungen</h4>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li><strong>Boulder-Golf:</strong> Einen Boulder mit so wenig Zügen wie möglich klettern</li>
                  <li><strong>Add-On:</strong> Bei jeder Wiederholung einen Zug hinzufügen</li>
                  <li><strong>Nur Füße:</strong> Eine Route nur mit den Füßen traversieren, Hände an einer Leiste</li>
                </ul>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-purple-700 mb-3">Elimination Drills</h4>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li><strong>Einarmig:</strong> Leichte Boulder nur mit einem Arm klettern</li>
                  <li><strong>Stumme Füße:</strong> So leise klettern wie möglich</li>
                  <li><strong>Sloper-Only:</strong> Nur auf Slopern klettern</li>
                  <li><strong>Hovering:</strong> Hand/Fuß 2-3 Sekunden über dem nächsten Griff/Tritt schweben lassen</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-6">Trainingsmethoden für Kletterer</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-stone-200 dark:border-stone-700 p-5 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
                <h4 className="font-bold text-purple-700 mb-2">4x4 Kraftausdauer</h4>
                <p className="text-sm">Wähle 4 Boulder, die du gut schaffst. Klettere Boulder A, spring ab, sofort wieder rein (4x). Dann Boulder B (4x). Kaum Pause. Simuliert den Pump in langen Routen.</p>
              </div>
              <div className="border border-stone-200 dark:border-stone-700 p-5 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
                <h4 className="font-bold text-purple-700 mb-2">Limit Bouldering</h4>
                <p className="text-sm">Projiziere Boulder, die du (noch) nicht schaffen kannst. Mache 3-5 qualitativ hochwertige Versuche mit langen Pausen (3-5 Min). Ziel: Maximalkraft und neuronale Anpassung.</p>
              </div>
              <div className="border border-stone-200 dark:border-stone-700 p-5 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
                <h4 className="font-bold text-purple-700 mb-2">Antagonisten-Training</h4>
                <p className="text-sm">Klettern ist sehr "ziehend" (Rücken, Bizeps, Fingerbeuger). Du musst die Gegenspieler trainieren: Liegestütze, Dips, Overhead Press und Fingerstrecker (Gummiband), um Haltungsschäden ("Kletterrundrücken") zu vermeiden.</p>
              </div>
              <div className="border border-stone-200 dark:border-stone-700 p-5 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
                <h4 className="font-bold text-purple-700 mb-2">Core is King</h4>
                <p className="text-sm">Körperspannung verbindet Hände und Füße. Ohne Core verlierst du die Füße im Überhang. Übungen: Toes-to-Bar, Planks, Hanging Leg Raises.</p>
              </div>
            </div>

            <InfoBox type="warning" title="Kritische Warnung: Fingerkraft & Hangboard">
              <p className="font-semibold mb-2 text-amber-800 dark:text-amber-200">Geduld ist deine wichtigste Muskelgruppe.</p>
              <p>
                Deine Muskeln passen sich innerhalb von Wochen an Belastung an. Deine Sehnen und Ringbänder (die "Pulleys", die die Sehnen am Knochen halten) brauchen <strong>Jahre</strong>.
                Ein typischer Anfängerfehler ist zu frühes Campusboard- oder Hangboard-Training.
              </p>
              <p className="mt-2 font-bold">Die Regel: Kein systematisches Fingerboard-Training im ersten Jahr!</p>
              <p>Wenn du Schmerzen in den Fingern hast (besonders Druckschmerz an der Basis): <strong>Sofort Pause machen.</strong> Ein Ringbandriss (das laute "Pop"-Geräusch) wirft dich 6-12 Monate zurück.</p>
            </InfoBox>

            <h3 className="text-2xl font-bold mt-12 mb-6">Fingerkraft-Training: Hangboards & Trainingsgeräte</h3>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8 border-l-4 border-blue-500">
              <h4 className="font-bold text-xl mb-3 text-blue-800 dark:text-blue-200">Finger-Anatomie verstehen: Pulleys & Sehnen</h4>
              <p className="mb-4 text-sm text-stone-700 dark:text-stone-300">
                Um zu verstehen, warum Fingerkraft-Training so vorsichtig angegangen werden muss, ist es wichtig zu wissen, wie deine Finger funktionieren:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold mb-2 text-sm">Was sind Pulleys (Ringbänder)?</h5>
                  <p className="text-xs mb-2">Pulleys sind ringförmige Bänder aus Bindegewebe, die die Sehnen der Fingerbeuger am Knochen halten – wie kleine Umlenkrollen. Sie sorgen dafür, dass die Sehnen nah am Knochen verlaufen und so effizient Kraft übertragen können.</p>
                  <p className="text-xs"><strong>Die wichtigsten:</strong> A2-Pulley (am häufigsten verletzt), A4-Pulley. Sie liegen an der Basis der Fingerknochen.</p>
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-sm">Warum sind sie so verletzungsanfällig?</h5>
                  <ul className="text-xs list-disc list-inside space-y-1">
                    <li><strong>Sehnen passen sich langsam an:</strong> Während Muskeln in Wochen stärker werden, brauchen Sehnen <strong>Monate bis Jahre</strong></li>
                    <li><strong>Hohe Belastung:</strong> Beim Crimpen lastet enormes Gewicht auf kleinen Strukturen</li>
                    <li><strong>Full Crimp ist gefährlich:</strong> Daumen über Zeigefinger erhöht Belastung massiv</li>
                    <li><strong>Pulley-Riss:</strong> Hörst du ein "Pop" und spürst sofortigen Schmerz → sofort zum Arzt!</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white dark:bg-stone-900 p-4 rounded-lg mt-4">
                <p className="text-xs font-bold mb-2">💡 Die Regel:</p>
                <p className="text-xs">Muskeln = schnell stärker (Wochen). Sehnen/Pulleys = langsam stärker (Jahre). Deshalb: Progressive Belastung, viel Geduld, bei Schmerz sofort Pause!</p>
              </div>
            </div>
            
            <div className="bg-stone-50 dark:bg-stone-800 p-8 rounded-2xl mb-8 border-l-4 border-purple-500">
              <h4 className="font-bold text-2xl mb-4 text-purple-700 dark:text-purple-400">Was ist ein Hangboard?</h4>
              <p className="mb-4 text-stone-700 dark:text-stone-300">
                Ein <strong>Hangboard</strong> (auch Fingerboard genannt) ist ein Trainingsgerät mit verschiedenen Griffgrößen und -formen, das an der Wand oder Türrahmen montiert wird. Es ist speziell dafür designed, Fingerkraft isoliert zu trainieren – ohne dass du dabei klettern musst.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h5 className="font-bold text-lg mb-2">Was trainiert man?</h5>
                  <ul className="list-disc list-inside space-y-2 text-sm text-stone-700 dark:text-stone-300">
                    <li><strong>Fingerkraft:</strong> Maximale Kraft der Fingerbeuger</li>
                    <li><strong>Sehnen-Stärke:</strong> Ringbänder (Pulleys) werden belastet</li>
                    <li><strong>Lock-Off-Kraft:</strong> Halten in verschiedenen Armwinkeln</li>
                    <li><strong>Griffarten:</strong> Open Hand, Half Crimp, Full Crimp</li>
                    <li><strong>Einarmige Kraft:</strong> Fortgeschrittene können einarmig hängen</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-2">Warum Hangboard?</h5>
                  <ul className="list-disc list-inside space-y-2 text-sm text-stone-700 dark:text-stone-300">
                    <li><strong>Isoliertes Training:</strong> Nur Fingerkraft, keine anderen Faktoren</li>
                    <li><strong>Messbare Progression:</strong> Gewicht oder Zeit genau tracken</li>
                    <li><strong>Zeiteffizient:</strong> 20-30 Min Training statt 2h Klettern</li>
                    <li><strong>Konsistente Belastung:</strong> Gleiche Griffe, gleiche Bedingungen</li>
                    <li><strong>Verletzungsprävention:</strong> Kontrollierte Belastung (wenn richtig gemacht!)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-stone-900 p-6 rounded-xl mb-6">
                <h5 className="font-bold text-lg mb-3">Hangboard-Trainingsprotokolle</h5>
                <div className="space-y-4">
                  <div>
                    <h6 className="font-bold mb-2">1. Max Hangs (Maximalkraft)</h6>
                    <p className="text-sm mb-2"><strong>Ziel:</strong> Maximale Fingerkraft entwickeln</p>
                    <ul className="text-sm list-disc list-inside space-y-1 ml-2">
                      <li><strong>Dauer:</strong> 10 Sekunden hängen</li>
                      <li><strong>Gewicht:</strong> So schwer wie möglich (mit Zusatzgewicht oder leichteren Griffen)</li>
                      <li><strong>Pause:</strong> 3-5 Minuten zwischen Sets</li>
                      <li><strong>Sets:</strong> 4-6 Wiederholungen</li>
                      <li><strong>Frequenz:</strong> 2-3x pro Woche</li>
                    </ul>
                    <p className="text-xs mt-2 text-stone-500"><em>Beispiel: Eva López Protokoll</em></p>
                  </div>
                  
                  <div>
                    <h6 className="font-bold mb-2">2. Repeaters (Kraftausdauer)</h6>
                    <p className="text-sm mb-2"><strong>Ziel:</strong> Fingerkraft über längere Zeit halten</p>
                    <ul className="text-sm list-disc list-inside space-y-1 ml-2">
                      <li><strong>Dauer:</strong> 7 Sekunden hängen, 3 Sekunden Pause</li>
                      <li><strong>Wiederholungen:</strong> 6-8 pro Set</li>
                      <li><strong>Pause zwischen Sets:</strong> 3-5 Minuten</li>
                      <li><strong>Sets:</strong> 3-5</li>
                      <li><strong>Gewicht:</strong> Moderate Belastung (70-80% von Max)</li>
                    </ul>
                  </div>

                  <div>
                    <h6 className="font-bold mb-2">3. Density Hangs (Volumen)</h6>
                    <p className="text-sm mb-2"><strong>Ziel:</strong> Sehnen-Anpassung, für Anfänger geeigneter</p>
                    <ul className="text-sm list-disc list-inside space-y-1 ml-2">
                      <li><strong>Dauer:</strong> 30-60 Sekunden hängen</li>
                      <li><strong>Gewicht:</strong> Leicht (Körpergewicht oder sogar mit Unterstützung)</li>
                      <li><strong>Pause:</strong> 2-3 Minuten</li>
                      <li><strong>Sets:</strong> 3-5</li>
                      <li><strong>Fokus:</strong> Auf gute Form, nicht maximale Belastung</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                <h5 className="font-bold text-lg mb-3 text-amber-800 dark:text-amber-200">Wichtige Regeln für Hangboard-Training</h5>
                <ul className="list-disc list-inside space-y-2 text-sm text-amber-900 dark:text-amber-100">
                  <li><strong>Immer aufwärmen:</strong> 10-15 Min leichte Übungen, Finger mobilisieren</li>
                  <li><strong>Open Hand bevorzugen:</strong> Weniger belastend für Ringbänder als Full Crimp</li>
                  <li><strong>Bei Schmerz STOPPEN:</strong> Kein "Durchbeißen"!</li>
                  <li><strong>Progressive Belastung:</strong> Langsam steigern (10%-Regel)</li>
                  <li><strong>Nicht täglich:</strong> Sehnen brauchen Zeit zur Regeneration</li>
                  <li><strong>Gute Form:</strong> Schultern aktiv, nicht passiv hängen</li>
                </ul>
              </div>
            </div>

            <div className="bg-stone-50 dark:bg-stone-800 p-8 rounded-2xl mb-8 border-l-4 border-red-500">
              <h4 className="font-bold text-2xl mb-4 text-red-700 dark:text-red-400">Campus Board - Das gefährlichste Trainingsgerät</h4>
              <p className="mb-4 text-stone-700 dark:text-stone-300">
                Ein <strong>Campus Board</strong> ist eine schräge Wand mit horizontalen Leisten in verschiedenen Abständen. Du kletterst daran <strong>ohne Füße</strong> – nur mit den Armen. Es ist extrem kraftintensiv und hat ein sehr hohes Verletzungsrisiko.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h5 className="font-bold text-lg mb-2">Was trainiert man?</h5>
                  <ul className="list-disc list-inside space-y-2 text-sm text-stone-700 dark:text-stone-300">
                    <li><strong>Explosive Oberkörperkraft:</strong> Schnelle, kraftvolle Bewegungen</li>
                    <li><strong>Lock-Off-Kraft:</strong> Halten in verschiedenen Positionen</li>
                    <li><strong>Koordination:</strong> Präzise Bewegungen zwischen Leisten</li>
                    <li><strong>Power:</strong> Maximale Kraftentfaltung</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-2">Warum so gefährlich?</h5>
                  <ul className="list-disc list-inside space-y-2 text-sm text-stone-700 dark:text-stone-300">
                    <li><strong>Hohe Belastung:</strong> Sehr abrupte, explosive Bewegungen</li>
                    <li><strong>Ringbänder:</strong> Extreme Belastung auf Finger-Sehnen</li>
                    <li><strong>Schultern:</strong> Hohes Risiko für Verletzungen</li>
                    <li><strong>Keine Füße:</strong> Alles Gewicht auf Armen</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                <h5 className="font-bold text-lg mb-3 text-red-800 dark:text-red-200">⚠️ Wann Campus Board nutzen?</h5>
                <ul className="list-disc list-inside space-y-2 text-sm text-red-900 dark:text-red-100">
                  <li><strong>Nur für Fortgeschrittene:</strong> Mindestens 2-3 Jahre Klettererfahrung</li>
                  <li><strong>Gute Fingerkraft:</strong> Du solltest bereits einarmig an großen Griffen hängen können</li>
                  <li><strong>Keine Verletzungen:</strong> Keine Finger-, Schulter- oder Ellbogenprobleme</li>
                  <li><strong>Konservativ starten:</strong> Erst mit beiden Händen, dann langsam steigern</li>
                  <li><strong>Selten trainieren:</strong> Maximal 1x pro Woche, nicht vor dem Klettern!</li>
                </ul>
                <p className="mt-3 text-sm font-bold text-red-900 dark:text-red-100">
                  ⚠️ Campus Board ist NICHT für Anfänger! Die Verletzungsgefahr ist extrem hoch. Besser: Erst Hangboard-Training, dann später Campus Board.
                </p>
              </div>
            </div>

            <div className="bg-stone-50 dark:bg-stone-800 p-8 rounded-2xl mb-8 border-l-4 border-indigo-500">
              <h4 className="font-bold text-2xl mb-4 text-indigo-700 dark:text-indigo-400">System Boards: MoonBoard, Kilter, Tension</h4>
              <p className="mb-4 text-stone-700 dark:text-stone-300">
                <strong>System Boards</strong> sind spezielle Trainingswände mit fest definierten Griff-Anordnungen. Sie werden über Apps gesteuert, die dir zeigen, welche Griffe für welchen Boulder leuchten sollen. Sie sind sehr kraftintensiv und perfekt für systematisches Training.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white dark:bg-stone-900 p-5 rounded-xl">
                  <h5 className="font-bold text-lg mb-2">MoonBoard</h5>
                  <p className="text-sm mb-2">Das Original. Sehr steil (40°), sehr kraftintensiv. Weltweite Community mit tausenden von Benchmark-Problemen. LED-Lichter zeigen die Route.</p>
                  <p className="text-xs text-stone-500"><strong>Für:</strong> Fortgeschrittene, die maximale Kraft trainieren wollen</p>
                </div>
                <div className="bg-white dark:bg-stone-900 p-5 rounded-xl">
                  <h5 className="font-bold text-lg mb-2">Kilter Board</h5>
                  <p className="text-sm mb-2">Verstellbarer Neigungswinkel (0° bis 50°). Weniger steil = technischer. Sehr beliebt, große Community. Gute App mit Filtern.</p>
                  <p className="text-xs text-stone-500"><strong>Für:</strong> Alle Levels, da verstellbar</p>
                </div>
                <div className="bg-white dark:bg-stone-900 p-5 rounded-xl">
                  <h5 className="font-bold text-lg mb-2">Tension Board</h5>
                  <p className="text-sm mb-2">Ähnlich wie MoonBoard, aber mit anderen Griffen. Sehr kraftintensiv. Gute App, aktive Community.</p>
                  <p className="text-xs text-stone-500"><strong>Für:</strong> Fortgeschrittene, die Abwechslung wollen</p>
                </div>
              </div>

              <div className="bg-white dark:bg-stone-900 p-6 rounded-xl">
                <h5 className="font-bold text-lg mb-3">Was trainiert man an System Boards?</h5>
                <ul className="list-disc list-inside space-y-2 text-sm text-stone-700 dark:text-stone-300">
                  <li><strong>Fingerkraft:</strong> Kleine, schlechte Griffe</li>
                  <li><strong>Oberkörperkraft:</strong> Sehr steile Wände</li>
                  <li><strong>Technik:</strong> Präzise Bewegungen zwischen kleinen Griffen</li>
                  <li><strong>Problemlösung:</strong> Benchmark-Probleme sind sehr spezifisch</li>
                  <li><strong>Konsistenz:</strong> Gleiche Griffe weltweit = vergleichbare Schwierigkeit</li>
                </ul>
                <p className="mt-4 text-sm"><strong>Tipp:</strong> System Boards sind perfekt für Training, wenn du keine Boulderhalle in der Nähe hast oder spezifische Schwächen trainieren willst. Aber: Sie sind sehr kraftintensiv – nicht jeden Tag!</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-6">Kraft-Training Off The Wall</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-purple-700 mb-3">Core-Training</h4>
                <p className="text-sm mb-2">Körperspannung verbindet Hände und Füße. Ohne Core verlierst du die Füße im Überhang.</p>
                <ul className="text-sm list-disc list-inside space-y-1 ml-2">
                  <li>Plank-Variationen</li>
                  <li>Hollow Body Hold</li>
                  <li>L-Sit / V-Sit</li>
                  <li>Beinheben hängend</li>
                  <li>Russian Twists</li>
                  <li>Ab-Wheel Rollouts</li>
                </ul>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-purple-700 mb-3">Pull-Training</h4>
                <ul className="text-sm list-disc list-inside space-y-1 ml-2 mb-3">
                  <li><strong>Klimmzüge:</strong> Verschiedene Griffarten (breit, eng, einarmig). Basis für Oberkörperkraft.</li>
                  <li><strong>One-Arm Hangs:</strong> Progression zu One-Arm Pullup. Erst an großen Griffen, dann kleiner.</li>
                  <li><strong>Frenchies:</strong> Lock-Offs auf verschiedenen Höhen (siehe Erklärung unten)</li>
                </ul>
                <div className="bg-white dark:bg-stone-900 p-4 rounded-lg mt-3">
                  <h5 className="font-bold text-sm mb-2">Was sind Frenchies?</h5>
                  <p className="text-xs mb-2">Eine Übung, die Lock-Off-Kraft trainiert:</p>
                  <ol className="text-xs list-decimal list-inside space-y-1 ml-2">
                    <li>Klimmzug bis Kinn über Stange</li>
                    <li>Halten für 3-5 Sekunden</li>
                    <li>Langsam runterlassen bis 90° Ellbogen</li>
                    <li>Halten für 3-5 Sekunden</li>
                    <li>Langsam runterlassen bis 120° Ellbogen</li>
                    <li>Halten für 3-5 Sekunden</li>
                    <li>Langsam komplett runterlassen</li>
                  </ol>
                  <p className="text-xs mt-2"><strong>Warum?</strong> Lock-Off-Kraft ist essentiell beim Klettern – du musst oft in angewinkelter Position halten, um zum nächsten Griff zu greifen.</p>
                </div>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-purple-700 mb-3">Push-Training (Antagonisten!)</h4>
                <ul className="text-sm list-disc list-inside space-y-1 ml-2">
                  <li>Liegestütze (normal, diamond, archer)</li>
                  <li>Dips</li>
                  <li>Overhead Press</li>
                  <li>Face Pulls (Schultergesundheit!)</li>
                  <li>Handgelenk-Strecker</li>
                </ul>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-purple-700 mb-3">Bein-Training & Mobility</h4>
                <ul className="text-sm list-disc list-inside space-y-1 ml-2">
                  <li>Kniebeugen (Explosive Power)</li>
                  <li>Ausfallschritte (Balance)</li>
                  <li>Box Jumps (Plyometrie für Dynos)</li>
                  <li>Hüft-Mobility (für hohe Tritte & Hooks)</li>
                  <li>Schulter-Mobility (Overhead Reaches)</li>
                  <li>Hamstrings (bessere Reichweite)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-6">Ausdauer & Kampfkraft</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-purple-700 mb-3">Pump-Resistance Training</h4>
                <p className="text-sm mb-2">Was ist "Pump"? Unterarm-Übersäuerung (Laktat). Gefühl: Arme werden dick & schwach. Progression: Später pump = länger klettern.</p>
                <ul className="text-sm list-disc list-inside space-y-1 ml-2">
                  <li><strong>4x4s:</strong> 4 Boulder, 4 mal durchklettern, minimale Pause</li>
                  <li><strong>Pyramids:</strong> Aufsteigend schwierig, dann absteigend</li>
                  <li><strong>Linked Boulders:</strong> 2-3 Boulder hintereinander</li>
                </ul>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-purple-700 mb-3">Power Endurance & Aerobe Fitness</h4>
                <p className="text-sm mb-2">Lange, intensive Boulder mehrmals wiederholen. Interval Training an der Wand.</p>
                <p className="text-sm mb-2">Klettern hilft, aber nicht genug! Cardio: Laufen, Radfahren (2x Woche, 30 Min) für schnellere Recovery zwischen Sessions.</p>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold text-lg mb-2">Ernährung</h4>
                    <ul className="list-disc list-inside text-stone-600 dark:text-stone-300 space-y-2">
                        <li><strong>Protein:</strong> Baustein für Regeneration (1.5-2g pro kg Körpergewicht).</li>
                        <li><strong>Kohlenhydrate:</strong> Treibstoff für explosive Bewegungen.</li>
                        <li><strong>Hydration:</strong> Trockene Sehnen sind verletzungsanfälliger.</li>
                        <li><strong>Pre-Session:</strong> 1-2h vorher leichte Mahlzeit (Kohlenhydrate + Protein).</li>
                        <li><strong>Post-Session:</strong> 30-60 Min nach Training: Protein + Kohlenhydrate für Recovery.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-2">Recovery</h4>
                    <ul className="list-disc list-inside text-stone-600 dark:text-stone-300 space-y-2">
                        <li><strong>Schlaf:</strong> 8h+. Hier lernt das Gehirn die Bewegungsmuster.</li>
                        <li><strong>Deload:</strong> Alle 4-6 Wochen eine Woche mit halbem Volumen klettern.</li>
                        <li><strong>Hautpflege:</strong> Feilen von Hornhaut und Pflegecremes nach dem Klettern.</li>
                        <li><strong>Aktive Regeneration:</strong> Yoga, Stretching, leichtes Cardio.</li>
                        <li><strong>Übertraining erkennen:</strong> Ständige Müdigkeit, schlechte Performance trotz Training → Woche Pause!</li>
                    </ul>
                </div>
            </div>
          </section>

          <SectionDivider />

          {/* Phase 5: Mental */}
          <section>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-3xl shadow-inner">5</div>
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">Mindset</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Mentale Stärke</h2>
              </div>
            </div>

            <p className="lead italic mb-8 text-stone-500">
              "Der wichtigste Muskel beim Klettern ist das Gehirn." – Wolfgang Güllich
            </p>
            
            <div className="space-y-8">
              <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-700">
                <h4 className="font-bold text-xl flex items-center gap-3 mb-3 text-blue-600"><Brain size={24}/> Angstmanagement</h4>
                <p>
                  Höhenangst ist ein natürlicher Instinkt. Du kannst sie nicht löschen, aber managen. Nutze "Progressive Desensibilisierung": Klettere auf eine Höhe, die sich leicht unangenehm anfühlt, und springe kontrolliert ab. Wiederhole dies, bis es langweilig wird. Dann gehe einen Griff höher. Vertrauen in die eigene Falltechnik ist das beste Mittel gegen Angst.
                </p>
              </div>

              <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-700">
                <h4 className="font-bold text-xl flex items-center gap-3 mb-3 text-blue-600"><Brain size={24}/> Visualisierung & Route Reading</h4>
                <p>
                  Bevor du die Matte betrittst, solltest du den Boulder "klettern". Gehe die Bewegungen im Kopf durch (Mental Cinema). Spüre, wie sich der Griff anfühlt, wo der Fuß steht, wie du den Schwerpunkt verlagerst. Profis wissen oft schon am Boden, welche Hand zuerst an den Top-Griff geht (Reverse Engineering).
                </p>
              </div>

              <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-700">
                <h4 className="font-bold text-xl flex items-center gap-3 mb-3 text-blue-600"><Brain size={24}/> Frustrationstoleranz & Das Ego</h4>
                <p>
                  Es wird Tage geben ("High Gravity Days"), an denen nichts funktioniert. Das ist Teil des Prozesses. Trenne deinen Selbstwert vom Schwierigkeitsgrad (Grade). Ein guter Boulderer ist nicht der, der am härtesten klettert, sondern der, der am besten lernt. Wenn du scheiterst, frage nicht "Warum bin ich so schwach?", sondern "Was hat technisch gefehlt?".
                </p>
              </div>

              <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-700">
                <h4 className="font-bold text-xl flex items-center gap-3 mb-3 text-blue-600"><Brain size={24}/> Positives Self-Talk & Growth Mindset</h4>
                <p>
                  Innerer Dialog: "Ich kann das!" statt "Ich schaff das nie!". Growth Mindset (Wachstums-Mentalität) bedeutet, dass Fähigkeiten entwickelbar sind. Fehler = Lern-Chancen, nicht Versagen. Jeder Boulder, den du nicht schaffst, lehrt dich etwas.
                </p>
              </div>

              <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-700">
                <h4 className="font-bold text-xl flex items-center gap-3 mb-3 text-blue-600"><Brain size={24}/> Atemtechniken</h4>
                <p>
                  Tiefes Atmen reduziert Stress. 4-7-8 Atmung (4 Sek einatmen, 7 Sek halten, 8 Sek ausatmen) vor schwierigen Versuchen. Während des Kletterns: Nicht Luft anhalten! Bewusstes Atmen hilft, Spannung zu lösen und Energie zu sparen.
                </p>
              </div>

              <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-700">
                <h4 className="font-bold text-xl flex items-center gap-3 mb-3 text-blue-600"><Brain size={24}/> Fokus & Flow-State</h4>
                <p>
                  "Im Moment sein" – Tunnel-Vision entwickeln (nur Boulder, keine Ablenkungen). Flow-State entsteht, wenn Herausforderung und Fähigkeit im Gleichgewicht sind. Musik? Manche ja, manche nein (Präferenz). Finde heraus, was für dich funktioniert.
                </p>
              </div>

              <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-700">
                <h4 className="font-bold text-xl flex items-center gap-3 mb-3 text-blue-600"><Brain size={24}/> Ziele setzen (SMART-Ziele)</h4>
                <p className="mb-2">
                  <strong>SMART:</strong> Specific (spezifisch), Measurable (messbar), Achievable (erreichbar), Relevant (relevant für dich), Time-bound (zeitlich definiert).
                </p>
                <p className="mb-2">
                  <strong>Kurz-, Mittel-, Langfristige Ziele:</strong> Kurzfristig: "Diese Woche 3x trainieren". Mittelfristig: "In 3 Monaten 5c klettern". Langfristig: "In 1 Jahr Outdoor bouldern in Fontainebleau".
                </p>
                <p>
                  <strong>Prozess-Ziele vs. Ergebnis-Ziele:</strong> Prozess: "Jede Session 10 Min Fußtechnik üben" (besser kontrollierbar!). Ergebnis: "Boulder XY schaffen". Auch kleine Fortschritte feiern!
                </p>
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* Phase 6: Outdoor & Spezial */}
          <section className="bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-800 dark:to-stone-900/50 p-8 rounded-3xl border border-stone-200 dark:border-stone-700">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-300 font-bold text-3xl shadow-inner">6</div>
              <div>
                <span className="text-stone-500 dark:text-stone-400 font-bold tracking-wider uppercase text-sm">Die echte Welt</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Outdoor & Erweiterung</h2>
              </div>
            </div>

            <p className="mb-8 font-medium">
              Der Schritt von Plastik zu Fels ist riesig. Draußen gibt es keine bunten Tapes, die Griffe sind schwerer zu sehen, und der Boden ist uneben.
            </p>

            <div className="grid md:grid-cols-2 gap-10 mb-8">
              <div>
                <h4 className="font-bold text-2xl mb-4 flex items-center gap-2 text-stone-700 dark:text-stone-200"><Mountain /> Das Outdoor-Setup</h4>
                <ul className="space-y-4 list-disc list-inside text-stone-600 dark:text-stone-300">
                  <li><strong>Crashpads:</strong> Du bist für deine Sicherheit selbst verantwortlich. Lege Pads so, dass keine Lücken entstehen. Decke Steine und Wurzeln ab.</li>
                  <li><strong>Spotting:</strong> Draußen ist Spotten Pflicht! Der Spotter steht mit erhobenen Händen ("Löffel-Hände") bereit, um den Kletterer im Sturz so zu lenken, dass er auf dem Pad landet und nicht mit dem Kopf gegen Felsen schlägt.</li>
                  <li><strong>Haut & Fels:</strong> Echter Fels (Granit, Gneis) ist wie Schmirgelpapier. Deine Haut wird das Limit sein, nicht deine Kraft. Tape ist dein bester Freund.</li>
                  <li><strong>Bedingungen:</strong> Reibung ist temperaturabhängig. "Send Temps" sind oft kalt (nahe 0°C), da der Gummi und die Hände dann weniger schwitzen ("kleben").</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-2xl mb-4 flex items-center gap-2 text-stone-700 dark:text-stone-200"><Trophy /> Ethik & Respekt</h4>
                <div className="bg-white dark:bg-stone-900 p-5 rounded-xl border border-stone-200 dark:border-stone-800 shadow-sm">
                  <p className="mb-3 text-sm font-bold uppercase tracking-wide text-teal-600">Leave No Trace</p>
                  <ul className="space-y-2 text-sm">
                    <li>Putze deine Tickmarks (Chalk-Striche zur Orientierung) und Griffspuren am Ende weg.</li>
                    <li>Nimm allen Müll mit (auch Tape-Reste!).</li>
                    <li>Kein lautes Musik-Boxen am Fels.</li>
                    <li><strong>Wichtig:</strong> Klettere niemals an nassem Sandstein (z.B. Fontainebleau, Pfalz). Griffe brechen dann sofort ab!</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6">Fels-Typen verstehen</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Granit</h4>
                <p className="text-sm mb-2">Fontainebleau (FR), Yosemite (USA). Reibung, Sloper. Sehr beliebt für Bouldern.</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Sandstein</h4>
                <p className="text-sm mb-2">Elbsandgebirge (DE). Soft, verletzungsanfällig. ⚠️ Niemals nass klettern!</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Kalkstein</h4>
                <p className="text-sm mb-2">Frankenjura (DE). Pockets, Leisten. Sehr technisch.</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Basalt, Gneis</h4>
                <p className="text-sm mb-2">Verschiedene Gebiete weltweit. Jeder Fels hat eigene Charakteristika. Guidebooks helfen!</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6">Unterschiede Halle → Outdoor</h3>
            <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl mb-8">
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Keine Farb-Markierungen:</strong> Routenfindung schwieriger! Guidebooks oder Apps (27 Crags, Mountain Project) sind essentiell.</li>
                <li><strong>Wetter-Einfluss:</strong> Temperatur, Luftfeuchtigkeit beeinflussen Reibung massiv.</li>
                <li><strong>Unebener Boden:</strong> Spotting noch wichtiger als in der Halle!</li>
                <li><strong>Natürliche Griffe:</strong> Keine Schrauben-Griffe, alles ist anders geformt.</li>
                <li><strong>Vorbereitung:</strong> Crashpad kaufen/leihen, Bürste, Chalk, Tape. Wetter checken!</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-6">Beliebte Outdoor-Gebiete</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Europa</h4>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li>Fontainebleau (FR) - Die Wiege des Boulderns</li>
                  <li>Albarracín (ES) - Spanisches Juwel</li>
                  <li>Magic Wood (CH) - Schweizer Klassiker</li>
                  <li>Ticino (CH) - Granit-Paradies</li>
                </ul>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Weltweit</h4>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li>USA: Bishop, Hueco Tanks, Red Rock, Squamish</li>
                  <li>Rocklands (SA) - Südafrikanisches Traumziel</li>
                  <li>Hampi (IN) - Indisches Abenteuer</li>
                  <li>Shiobara (JP) - Japanische Perfektion</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6">Wettkämpfe & Competitions</h3>
            <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl mb-8">
              <p className="mb-4 text-sm"><strong>Warum an Comps teilnehmen?</strong> Motivation & Ziele, Community treffen, Spaß! Keine Profi-Ambitionen nötig. Locals sind oft Anfänger-freundlich!</p>
              <p className="mb-4 text-sm"><strong>Formate:</strong> Boulder-Format (X Probleme, Y Minuten, Punkte für Tops/Zones), Flash-Format (Ein Versuch pro Boulder), Onsight (Keine Vorschau).</p>
              <p className="text-sm"><strong>Vorbereitung:</strong> Mental vorbereiten (Nervosität ist normal!), längeres Aufwärmen, Ernährung & Hydration, Spaß haben!</p>
            </div>

            <h3 className="text-2xl font-bold mb-6">Spezial-Stile & Nischen</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Highball Bouldering</h4>
                <p className="text-sm">Sehr hohe Boulder (6-12 Meter). Sturzrisiko extrem hoch! Nur für Erfahrene. Mentale Stärke essentiell.</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Deep Water Soloing (DWS)</h4>
                <p className="text-sm">Über Wasser klettern, Fall ins Wasser. Mallorca (Es Pontàs), Thailand (Railay). Einzigartige Erfahrung!</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Board Climbing</h4>
                <p className="text-sm">MoonBoard, Kilter, Tension. Systematisches Training an Brettern mit definierter Griff-Anordnung. Sehr kraft-intensiv, für Fortgeschrittene. App-gesteuert mit LED-Lichtern, weltweite Community.</p>
              </div>
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Ästhetik-Bouldern</h4>
                <p className="text-sm">"Schönheit" der Bewegung. Klassische Linien, elegante Moves. Font-Bouldering-Kultur. Nicht nur Kraft, sondern auch Eleganz zählt.</p>
              </div>
            </div>
          </section>

          <div className="mt-16 text-center p-10 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-3xl border border-teal-100 dark:border-teal-900/30">
            <p className="text-2xl font-serif text-stone-700 dark:text-stone-300 italic mb-6">
              "Der beste Kletterer ist der, der am meisten Spaß hat."
            </p>
            <div className="flex items-center justify-center gap-2 text-stone-500 dark:text-stone-400 font-medium">
              <span className="w-8 h-px bg-stone-400"></span>
              <span>Alex Lowe</span>
              <span className="w-8 h-px bg-stone-400"></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BoulderSummary;