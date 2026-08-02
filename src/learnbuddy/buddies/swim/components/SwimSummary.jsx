import React from 'react';
import { ArrowLeft, AlertTriangle, Lightbulb, Trophy, Info, Waves, Wind, Droplets, Activity, Shield, Timer, Heart, Anchor, Play } from 'lucide-react';

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

const SwimSummary = ({ onBack }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 mb-24 font-sans">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-cyan-600 font-medium mb-8 hover:text-cyan-800 hover:underline transition-colors px-4 py-2 rounded-lg hover:bg-cyan-50 dark:hover:bg-cyan-900/20"
      >
        <ArrowLeft size={20} /> Zurück zur Übersicht
      </button>

      <div className="bg-white dark:bg-stone-900 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-black/5">
        {/* Hero Header */}
        <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-blue-800 p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight relative z-10">
            Das Schwimm-Kompendium
          </h1>
          <p className="text-cyan-50 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed relative z-10">
            Vom ersten Zug bis zur perfekten Wende: Ein umfassender Guide zu Technik, Sicherheit und der Kunst der Fortbewegung im Wasser.
          </p>
        </div>

        <div className="p-8 md:p-16 prose prose-lg dark:prose-invert max-w-none text-stone-700 dark:text-stone-300">
          
          {/* Phase 1: Wassergewöhnung & Grundlagen */}
          <section>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 font-bold text-3xl shadow-inner">1</div>
              <div>
                <span className="text-cyan-600 dark:text-cyan-400 font-bold tracking-wider uppercase text-sm">Die Basis</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Wassergewöhnung & Grundlagen</h2>
              </div>
            </div>
            
            <p className="lead text-xl md:leading-relaxed text-stone-600 dark:text-stone-300">
              Schwimmen ist mehr als Sport – es ist eine lebenswichtige Fähigkeit. Das Wasser trägt dich, aber es verlangt Respekt. Bevor wir nach Bestzeiten jagen, müssen wir lernen, uns sicher und effizient im Element Wasser zu bewegen.
            </p>

            <InfoBox type="warning" title="Sicherheit - Die wichtigste Lektion!">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Niemals alleine schwimmen:</strong> Nutze das Buddy-System. Wasser ist unberechenbar.</li>
                <li><strong>Warnsignale erkennen:</strong> Kälte, Erschöpfung, Krämpfe. Hör auf deinen Körper.</li>
                <li><strong>Selbstrettung:</strong> Lerne, dich auf den Rücken zu legen ("Toter Mann"), um Kraft zu sparen.</li>
                <li><strong>Beckenregeln:</strong> Respektiere Bahnen, Schwimmrichtung und andere Schwimmer. Springe nie in volle Bahnen!</li>
              </ul>
            </InfoBox>

            <div className="grid md:grid-cols-2 gap-10 my-10">
              <div>
                <h3 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400 mt-0 mb-4 flex items-center gap-2"><Droplets className="w-6 h-6"/> Wassergefühl entwickeln</h3>
                <p className="mb-4">
                  Wassergefühl ist die intuitive Verbindung zum Element. Es bedeutet, den Widerstand nicht zu bekämpfen, sondern zu nutzen.
                </p>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex gap-3 items-start">
                    <div className="mt-1 bg-cyan-100 dark:bg-cyan-900/40 p-1 rounded text-cyan-700"><Wind size={16}/></div>
                    <div><strong>Atmung:</strong> Die größte Hürde. Einatmen über Wasser, <em>Ausatmen unter Wasser</em> (Blubbern). Niemals die Luft anhalten!</div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="mt-1 bg-cyan-100 dark:bg-cyan-900/40 p-1 rounded text-cyan-700"><Waves size={16}/></div>
                    <div><strong>Schweben:</strong> Vertraue dem Auftrieb. Entspanne dich in Rücken- oder Bauchlage.</div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="mt-1 bg-cyan-100 dark:bg-cyan-900/40 p-1 rounded text-cyan-700"><ArrowLeft size={16}/></div>
                    <div><strong>Gleiten:</strong> Mach dich lang. Je länger und schmaler ("Streamline"), desto weniger Widerstand.</div>
                  </li>
                </ul>
              </div>

              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-2xl border border-stone-200 dark:border-stone-700">
                 <h3 className="text-xl font-bold text-cyan-700 dark:text-cyan-400 mt-0 mb-4">Equipment Basics</h3>
                 <div className="space-y-4">
                    <div>
                        <strong className="block text-stone-800 dark:text-stone-200">Schwimmbrille (Essential)</strong>
                        <span className="text-sm text-stone-600 dark:text-stone-400">Klarheit & Schutz. Sollte dicht sitzen, ohne Schmerzen. Anti-Fog ist Gold wert.</span>
                    </div>
                    <div>
                        <strong className="block text-stone-800 dark:text-stone-200">Badekappe</strong>
                        <span className="text-sm text-stone-600 dark:text-stone-400">Hygiene, Hydrodynamik und Schutz vor Chlor. Silikon ist langlebiger als Latex.</span>
                    </div>
                    <div>
                        <strong className="block text-stone-800 dark:text-stone-200">Trainings-Tools</strong>
                        <span className="text-sm text-stone-600 dark:text-stone-400">
                            <span className="bg-stone-200 dark:bg-stone-700 px-1 rounded mr-1">Pull Buoy</span> (für Arme), 
                            <span className="bg-stone-200 dark:bg-stone-700 px-1 rounded mr-1 ml-1">Kickboard</span> (für Beine), 
                            <span className="bg-stone-200 dark:bg-stone-700 px-1 rounded ml-1">Flossen</span> (für Technik).
                        </span>
                    </div>
                 </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-8">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Die perfekte Körperposition</h3>
              <div className="space-y-4">
                <p>
                    <strong>Horizontal ist King:</strong> Dein Körper ist wie eine Wippe. Wenn der Kopf hochgeht (zum Atmen oder Schauen), sinken die Beine ab. Das erhöht den Wasserwiderstand massiv.
                </p>
                <ul className="list-disc list-inside">
                    <li><strong>Kopfposition:</strong> Blick nach unten/vorn (nicht nach oben!), Hals in Verlängerung der Wirbelsäule.</li>
                    <li><strong>Hüfte:</strong> An der Wasseroberfläche halten.</li>
                    <li><strong>Streamline (Torpedo):</strong> Arme gestreckt über Kopf, Hände übereinander, Körper lang machen. Basis für jeden Abstoß.</li>
                </ul>
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* Phase 2: Grundschwimmstile */}
          <section>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-3xl shadow-inner">2</div>
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">Die 4 Stile</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Grundschwimmstile</h2>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 mb-12">
              {/* Brustschwimmen */}
              <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-md border border-stone-100 dark:border-stone-700 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-blue-600 text-xl mb-3 flex items-center gap-2"><Waves/> Brustschwimmen</h4>
                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-4">
                  Der klassische Anfängerstil, da der Kopf (meistens) über Wasser bleibt. Das Ziel ist eine symmetrische "Frosch"-Bewegung.
                </p>
                <div className="space-y-3 text-sm">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                        <strong>Armzug (Herzform):</strong> Arme nach vorn strecken → Handflächen nach außen drehen → Ellbogen hoch halten und Hände zur Brust ziehen (Form eines Herzes) → Schnell wieder nach vorn strecken.
                        <br/><span className="text-xs text-blue-800 dark:text-blue-300 mt-1 block">⚠️ Fehler: Ellbogen zu tief ziehen (verliert Kraft).</span>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                        <strong>Beinschlag (Frosch):</strong> Fersen zum Po ziehen (Knie nicht zu weit auseinander!) → Füße nach außen flexen (Zehen zeigen nach außen) → Kraftvoller, kreisförmiger Stoß nach hinten bis die Beine geschlossen sind.
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-100 dark:border-amber-800">
                        <strong>Das Geheimnis: Gleiten!</strong>
                        <p className="mt-1">Der Rhythmus ist: <strong>Zug → Atmen → Beine → GLEITEN.</strong></p>
                        <p className="mt-1">Viele Anfänger "rudern" hektisch. Nutze den Schub vom Beinschlag und gleite für 1-2 Sekunden in gestreckter Position (Streamline). Hier bist du am schnellsten!</p>
                    </div>
                </div>
              </div>

              {/* Kraulschwimmen */}
              <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-md border border-stone-100 dark:border-stone-700 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-blue-600 text-xl mb-3 flex items-center gap-2"><Timer/> Kraulschwimmen</h4>
                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-4">
                  Der effizienteste Stil. Hier zählt Rotation und Wasserlage.
                </p>
                <div className="space-y-3 text-sm">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                        <strong>Armzug (High Elbow):</strong> Hand taucht vor der Schulter ein (Fingerspitzen zuerst). Unter Wasser ziehst du in einer leichten S-Form bis zum Oberschenkel durch. Über Wasser führt der Ellbogen die Bewegung an (wie eine Marionette).
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                        <strong>Beinschlag:</strong> Locker aus der Hüfte kicken (nicht aus dem Knie!). Die Füße sollten das Wasser nur leicht "kochen" lassen, nicht wild spritzen. Dient primär der Balance, nicht dem Antrieb.
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-100 dark:border-amber-800">
                        <strong>Die Kunst der Atmung</strong>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                            <li><strong>Nicht den Kopf heben!</strong> Drehe den Kopf zur Seite, als würdest du auf der Schulter schlafen.</li>
                            <li><strong>Ein Auge im Wasser:</strong> Drehe nur so weit, dass ein Auge noch unter Wasser ist (die "Bugwelle" schafft eine Lufttasche).</li>
                            <li><strong>Rhythmus:</strong> Atme alle 3 Züge (Beidseitig). Das verhindert einseitige Belastung und lässt dich geradeaus schwimmen.</li>
                        </ul>
                    </div>
                </div>
              </div>

              {/* Rückenschwimmen */}
              <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-md border border-stone-100 dark:border-stone-700 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-blue-600 text-xl mb-3 flex items-center gap-2"><Shield/> Rückenschwimmen</h4>
                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-4">
                  Perfekt für die Haltung, da die Brust geöffnet wird. Kein Atem-Stress!
                </p>
                <div className="space-y-3 text-sm">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                        <strong>Körperlage:</strong> Hüfte hoch! Stell dir vor, dein Bauchnabel muss trocken bleiben. Ohren sind im Wasser, Blick geht stur nach oben zur Decke/Himmel (nicht zu den Füßen schauen, sonst sinkt die Hüfte!).
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                        <strong>Armzug:</strong> Arm gestreckt aus dem Wasser heben (Daumen zuerst raus). Hand dreht in der Luft. Kleiner Finger taucht zuerst ein. Unter Wasser beugen und kräftig Richtung Füße drücken.
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-100 dark:border-amber-800">
                        <strong>Rotation (Rolling):</strong> Schwimme nicht flach! Rotiere die Schultern mit jedem Zug (ca. 45°). Das ermöglicht tieferes Eintauchen und kräftigeren Zug.
                    </div>
                </div>
              </div>

              {/* Delfinschwimmen */}
              <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-md border border-stone-100 dark:border-stone-700 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-blue-600 text-xl mb-3 flex items-center gap-2"><Trophy/> Delfinschwimmen</h4>
                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-4">
                  Der anspruchsvollste Stil. Erfordert Rhythmus, nicht nur rohe Kraft.
                </p>
                <div className="space-y-3 text-sm">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                        <strong>Die Welle (Undulation):</strong> Die Bewegung kommt nicht aus den Beinen, sondern aus der Brust/Kopf. Drücke die Brust ins Wasser, die Hüfte kommt hoch. Drücke die Brust hoch, die Hüfte geht runter. Die Beine folgen wie eine Peitsche.
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                        <strong>Timing:</strong> 2 Kicks pro Armzug.
                        <br/>1. Kick: Wenn die Hände eintauchen (Hüfte hoch).
                        <br/>2. Kick: Wenn die Hände das Wasser verlassen (Hüfte runter/Antrieb).
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-100 dark:border-amber-800">
                        <strong>Arme & Atmung:</strong> Arme flach über das Wasser werfen (Daumen nach unten). Atme "nach vorne", indem du das Kinn kurz über das Wasser schiebst, während die Arme ziehen. Kopf muss wieder unten sein, bevor die Arme eintauchen!
                    </div>
                </div>
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* Phase 3: Starts & Wenden & Tauchen */}
          <section>
             <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-3xl shadow-inner">3</div>
              <div>
                <span className="text-purple-600 dark:text-purple-400 font-bold tracking-wider uppercase text-sm">Dynamik</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Starts, Wenden & Tauchen</h2>
              </div>
            </div>

            <div className="space-y-8">
                <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-400">Der Kopfsprung</h3>
                    <p className="mb-4">
                        Der Schlüssel zum schnellen Start. Ziel ist es, mit minimalem Widerstand ins Wasser einzutauchen ("Loch ins Wasser stechen").
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="bg-white dark:bg-stone-900 p-4 rounded-lg">
                            <strong>1. Absprung:</strong> Zehen über den Rand, Körper vorgebeugt, explosiv nach <em>vorn</em> (nicht nur oben).
                        </div>
                        <div className="bg-white dark:bg-stone-900 p-4 rounded-lg">
                            <strong>2. Flug:</strong> Streamline! Arme pressen den Kopf ein, Körper kerzengerade gestreckt.
                        </div>
                        <div className="bg-white dark:bg-stone-900 p-4 rounded-lg">
                            <strong>3. Eintauchen:</strong> Hände zuerst, Körper folgt der Linie. Nicht zu flach (Bauchklatscher) und nicht zu steil.
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                     <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                        <h4 className="font-bold text-lg mb-3 text-purple-700 dark:text-purple-400">Wenden (Turns)</h4>
                        <ul className="space-y-3">
                            <li><strong>Kraul (Flip Turn):</strong> Salto vorwärts an der Wand. Füße stoßen ab, Drehung in Rückenlage, dann zurück auf Bauch. Kontinuierliche Bewegung ohne Atmen direkt vor der Wand!</li>
                            <li><strong>Brust (Touch Turn):</strong> Beide Hände berühren gleichzeitig die Wand. Ellbogen ziehen zurück, Körper dreht sich, Abstoß unter Wasser.</li>
                            <li><strong>Rücken:</strong> Rückwärtsrolle oder Tellerwende. Hand berührt Wand, Abstoß in Rückenlage.</li>
                        </ul>
                     </div>
                     <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl">
                        <h4 className="font-bold text-lg mb-3 text-purple-700 dark:text-purple-400">Tauchen</h4>
                        <ul className="space-y-3">
                            <li><strong>Atemtechnik:</strong> Ruhig einatmen. ⚠️ <strong>Niemals hyperventilieren</strong> vor dem Tauchen (Gefahr von Schwimmbad-Blackout!).</li>
                            <li><strong>Druckausgleich:</strong> Nase zuhalten und sanft ausatmen ("Valsalva"), um Ohrendruck auszugleichen.</li>
                            <li><strong>Unterwasser-Phasen:</strong> Streamline + Delfinkicks sind die schnellste Fortbewegung unter Wasser (nach Start/Wende).</li>
                        </ul>
                     </div>
                </div>
            </div>
          </section>
          
          <SectionDivider />

          {/* Phase 5: Ausdauer & Training */}
          <section>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 font-bold text-3xl shadow-inner">4</div>
              <div>
                <span className="text-red-600 dark:text-red-400 font-bold tracking-wider uppercase text-sm">Fitness</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Ausdauer & Training</h2>
              </div>
            </div>

            <div className="mb-8">
                <p className="mb-6">
                    Schwimmen ist ein Geduldsspiel. Ausdauer kommt mit Konsistenz.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-stone-800 p-5 rounded-xl border border-red-100 dark:border-red-900/30">
                        <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2"><Activity size={18}/> Trainingsmethoden</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li><strong>LSD (Long Slow Distance):</strong> Lange Strecken, niedriges Tempo. Basis-Ausdauer.</li>
                            <li><strong>Intervalle:</strong> Kurze Strecken schnell, kurze Pause (z.B. 10x 50m). Steigert VO2max.</li>
                            <li><strong>Pyramiden:</strong> 50m - 100m - 200m - 100m - 50m. Abwechslung für den Kopf.</li>
                            <li><strong>Technik-Drills:</strong> Isoliertes Üben (nur Arme, nur Beine, Einarmig).</li>
                        </ul>
                    </div>
                     <div className="bg-white dark:bg-stone-800 p-5 rounded-xl border border-red-100 dark:border-red-900/30">
                        <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2"><Play size={18}/> Beispiel-Session (Anfänger)</h4>
                        <div className="text-sm space-y-2">
                            <p><strong>Warm-up:</strong> 200m locker (beliebiger Stil)</p>
                            <p><strong>Drills:</strong> 4x 50m Technik (z.B. Kraul-Beine)</p>
                            <p><strong>Main Set:</strong> 4x 100m Kraul (30 Sek Pause)</p>
                            <p><strong>Cool-down:</strong> 100m locker ausschwimmen</p>
                            <p className="mt-2 text-stone-500 italic">Total: ~900m</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>

          <SectionDivider />

           {/* Phase 6: Spezial & Outdoor */}
           <section className="bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-800 dark:to-stone-900/50 p-8 rounded-3xl border border-stone-200 dark:border-stone-700">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-3xl shadow-inner">5</div>
              <div>
                <span className="text-teal-500 dark:text-teal-400 font-bold tracking-wider uppercase text-sm">Erweiterung</span>
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 m-0">Open Water & Spezialisierung</h2>
              </div>
            </div>

             <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-2xl mb-4 flex items-center gap-2 text-teal-700 dark:text-teal-200"><Waves /> Open Water</h4>
                <p className="text-stone-600 dark:text-stone-300 mb-4">
                    Schwimmen im See oder Meer ist eine andere Welt. Keine Bahnen, kein Boden, trübes Wasser.
                </p>
                <ul className="space-y-2 list-disc list-inside text-stone-600 dark:text-stone-300 text-sm">
                  <li><strong>Sighting (Peilen):</strong> Regelmäßig den Kopf heben (Krokodil-Blick), um Navigationspunkte am Ufer zu checken.</li>
                  <li><strong>Sicherheit:</strong> Bunte Badekappe, Begleitboje ("Restube"), nie alleine!</li>
                  <li><strong>Kälte:</strong> Neoprenanzug schützt und gibt Auftrieb.</li>
                  <li><strong>Strömung & Wellen:</strong> Naturkräfte respektieren.</li>
                </ul>
              </div>
              <div>
                 <h4 className="font-bold text-2xl mb-4 flex items-center gap-2 text-teal-700 dark:text-teal-200"><Anchor /> Rettung & Diverses</h4>
                 <div className="space-y-4">
                    <div className="bg-white dark:bg-stone-900 p-4 rounded-lg border border-stone-200 dark:border-stone-800">
                        <strong className="text-teal-600">Rettungsschwimmen</strong>
                        <p className="text-xs mt-1">Selbstschutz geht vor! Rettungsgriffe (Achselgriff, Fesselgriff) und Transporttechniken.</p>
                    </div>
                    <div className="bg-white dark:bg-stone-900 p-4 rounded-lg border border-stone-200 dark:border-stone-800">
                        <strong className="text-teal-600">Wasserball</strong>
                        <p className="text-xs mt-1">Teamsport. Wassertreten ("Eggbeater") ist essenziell. Hohe Intensität.</p>
                    </div>
                    <div className="bg-white dark:bg-stone-900 p-4 rounded-lg border border-stone-200 dark:border-stone-800">
                        <strong className="text-teal-600">Langstrecke</strong>
                        <p className="text-xs mt-1">Marathon-Schwimmen (10km+). Pacing, Ernährung im Wasser und mentale Härte.</p>
                    </div>
                 </div>
              </div>
            </div>
           </section>

           <div className="mt-16 text-center p-10 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-3xl border border-cyan-100 dark:border-cyan-900/30">
            <p className="text-2xl font-serif text-stone-700 dark:text-stone-300 italic mb-6">
              "Wasser ist dein Freund. Du musst nicht gegen das Wasser kämpfen, sondern mit ihm arbeiten."
            </p>
            <div className="flex items-center justify-center gap-2 text-stone-500 dark:text-stone-400 font-medium">
              <span className="w-8 h-px bg-stone-400"></span>
              <span>Alexander Popov</span>
              <span className="w-8 h-px bg-stone-400"></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SwimSummary;

