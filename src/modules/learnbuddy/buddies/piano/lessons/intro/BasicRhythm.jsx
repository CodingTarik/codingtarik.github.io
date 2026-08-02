import React from 'react';
import SheetMusic from '../../components/SheetMusic';
import PianoPlayer from '../../components/PianoPlayer';

const BasicRhythm = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto p-6">
      <div className="prose dark:prose-invert max-w-none">
        <h1>Rhythmus & Notenwerte</h1>
        <p>
          Musik besteht nicht nur aus Tönen (Tonhöhe), sondern auch aus Zeit (Rhythmus).
          Wir müssen wissen, wie lange wir eine Taste gedrückt halten.
        </p>

        <h3>1. Die Ganze Note (Whole Note)</h3>
        <p>
          Sie sieht aus wie ein Kreis oder ein Ei. Sie dauert <strong>4 Schläge</strong>.
          Zähle: <em>"Eins, Zwei, Drei, Vier"</em> während du die Taste hältst.
        </p>
      </div>

      <div className="flex justify-center py-4">
        <SheetMusic notes="C4/w" width={300} height={120} />
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>2. Die Halbe Note (Half Note)</h3>
        <p>
          Sie hat einen leeren Kopf und einen Hals. Sie dauert <strong>2 Schläge</strong>.
          In einen 4/4 Takt passen genau zwei halbe Noten.
        </p>
      </div>

      <div className="flex justify-center py-4">
        <SheetMusic notes="C4/h, E4/h" width={300} height={120} />
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>3. Die Viertelnote (Quarter Note)</h3>
        <p>
          Sie hat einen ausgefüllten schwarzen Kopf und einen Hals. Sie dauert <strong>1 Schlag</strong>.
          Das ist der "Puls" der meisten Musik.
        </p>
      </div>

      <div className="flex justify-center py-4">
        <SheetMusic notes="C4/q, D4/q, E4/q, F4/q" width={300} height={120} />
      </div>

      <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
        <h3 className="text-lg font-bold mb-4">Interaktive Übung</h3>
        <p className="mb-4">
          Versuche das folgende Muster zu spielen. Nutze irgendeine Taste (z.B. das mittlere C).
          <br/>
          <strong>Muster:</strong> Viertel, Viertel, Halbe (1, 1, 2 Schläge).
        </p>
        <PianoPlayer />
      </div>
    </div>
  );
};

export default BasicRhythm;


