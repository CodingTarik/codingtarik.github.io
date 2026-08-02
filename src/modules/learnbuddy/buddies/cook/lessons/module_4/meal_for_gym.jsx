import React from 'react';

export const mealForGymLesson = {
  id: 'meal_for_gym',
  title: {
    en: 'Science of Muscle Food',
    de: 'Science-Guide: Meal for Gym'
  },
  description: {
    en: 'Deep dive into nutrition chemistry and physics.',
    de: 'Der ultimative Science-Guide für Muskelaufbau: Chemie & Physik.'
  },
  isSpecial: true,
  content: (
    <div className="space-y-8">
      {/* Introduction */}
      <div>
        <p className="lead text-lg text-stone-700 dark:text-stone-300">
          Wir gehen jetzt eine Ebene tiefer: <strong>Vom „Was muss ich essen?“ zum „Warum funktioniert mein Körper so?“</strong>.
          Hier erfährst du die chemischen und physikalischen Mechanismen hinter den Ernährungstipps, damit du wirklich verstehst, was in dir passiert.
        </p>
      </div>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 text-9xl">🧬</div>
        <h1 className="text-3xl font-extrabold mb-2 text-white">Der ultimative Science-Guide für Muskelaufbau</h1>
        <p className="text-indigo-100 text-lg">Verstehe die Chemie hinter dem Wachstum.</p>
      </div>

      {/* Section 1: Proteins */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 border-b border-indigo-200 dark:border-indigo-800 pb-2">
          1. Proteine (Eiweiß): Die chemische Architektur
        </h2>

        <div className="bg-stone-50 dark:bg-stone-800 p-4 rounded-lg border-l-4 border-stone-400">
          <h3 className="font-bold mb-2">Das praktische Wissen (Wiederholung)</h3>
          <ul className="list-disc list-inside space-y-1 text-stone-700 dark:text-stone-300">
            <li><strong>Menge:</strong> 1,6 – 2,0 g/kg Körpergewicht.</li>
            <li><strong>Quellen:</strong> Eier, Fleisch, Fisch, Quark.</li>
          </ul>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-xl border border-indigo-100 dark:border-indigo-800">
          <h3 className="font-bold text-xl text-indigo-800 dark:text-indigo-300 mb-4 flex items-center gap-2">
            <span>🔬</span> Der Deep Dive: Chemie & Physik
          </h3>
          
          <p className="mb-4 italic text-indigo-900 dark:text-indigo-200">Warum baut ein Stück Hähnchen deine Muskeln auf, aber ein Stück Holz nicht?</p>

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-1">Chemische Struktur</h4>
              <p>
                Proteine sind lange Ketten aus <strong>Aminosäuren</strong>. Stell dir eine Perlenkette vor. Jede „Perle“ ist eine Aminosäure. 
                Es gibt 20 verschiedene Perlen, aber dein Körper kann 9 davon nicht selbst herstellen (die „essenziellen“ Aminosäuren).
                Die Verbindung zwischen den Perlen nennt man <strong>Peptidbindung</strong>.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-1">Der physikalische Prozess (Verdauung)</h4>
              <p>
                Wenn du ein Steak isst, ist das Protein „gefaltet“ (wie ein zusammengeknülltes Blatt Papier). Deine Magensäure (Salzsäure) denaturiert es – 
                das heißt, sie „bügelt“ das Papier glatt. Danach kommen Enzyme (Scheren), die die Perlenkette in einzelne Perlen zerschneiden.
                Nur diese einzelnen Aminosäuren sind klein genug, um durch die Darmwand in dein Blut zu gelangen.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-1">Warum ist die „Biologische Wertigkeit“ so wichtig?</h4>
              <p className="mb-2">Dein Muskel besteht aus einer ganz bestimmten Reihenfolge von Aminosäuren (z.B. Perle A, dann B, dann C).</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>Das Ei (Wert 100):</strong> Hat fast die gleiche Perlen-Mischung wie dein Muskel.</li>
                <li><strong>Pflanzen:</strong> Haben oft weniger von Perle A oder B. Wenn eine Sorte fehlt, stoppt der Muskelaufbau an dieser Stelle (Limitierende Aminosäure). Deshalb muss man vegane Quellen oft mischen.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Fats */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-amber-600 dark:text-amber-400 border-b border-amber-200 dark:border-amber-800 pb-2">
          2. Fette (Lipide): Molekulare Geometrie
        </h2>
        
        <p>Hier wird es physikalisch am spannendsten. Der Unterschied zwischen „gesund“ und „ungesund“ liegt allein in der <strong>Form des Moleküls</strong>.</p>

        <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700">
                <h3 className="font-bold text-lg text-amber-700 dark:text-amber-500 mb-2">A) Gesättigte Fettsäuren (Butter, Tierfett)</h3>
                <ul className="space-y-2 text-sm">
                    <li><strong>Die Chemie:</strong> Die Kohlenstoffkette ist komplett gerade (ohne „Knick“). Alle Bindungsarme sind mit Wasserstoffatomen besetzt („gesättigt“).</li>
                    <li><strong>Die Physik:</strong> Weil sie gerade wie Stifte sind, lassen sie sich extrem eng aneinanderpacken (stapeln). → Deshalb ist Butter bei Raumtemperatur <strong>fest</strong>.</li>
                    <li><strong>Im Körper:</strong> Wenn du zu viel davon isst, werden deine Zellmembranen (die Hülle deiner Zellen) eher starr und unbeweglich.</li>
                </ul>
            </div>

            <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700">
                <h3 className="font-bold text-lg text-green-600 dark:text-green-400 mb-2">B) Ungesättigte Fettsäuren (Öl, Nüsse)</h3>
                <ul className="space-y-2 text-sm">
                    <li><strong>Die Chemie:</strong> Die Kette hat eine <strong>Doppelbindung</strong>. Chemisch sorgt diese Doppelbindung für einen <strong>Knick</strong> im Molekül (cis-Konfiguration).</li>
                    <li><strong>Die Physik:</strong> Durch den Knick können sich die Moleküle nicht eng stapeln – sie brauchen mehr Platz. → Deshalb ist Olivenöl bei Raumtemperatur <strong>flüssig</strong>.</li>
                </ul>
            </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-800 dark:text-green-300 mb-1">✨ Der "Magic Effect" im Muskel</h4>
            <p>
                Deine Muskelzellwand besteht aus Fetten. Baust du viele ungesättigte Fette (mit Knick) ein, bleibt die Wand <strong>fluid (flüssig-flexibel)</strong>.
                <br/>
                <em>Vorteil:</em> Insulin-Rezeptoren und Nährstoff-Transporter können sich in einer flexiblen Wand viel besser bewegen. Das Protein kommt schneller in den Muskel!
            </p>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
            <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">C) Transfette (Die Gefahr)</h3>
            <p className="mb-2">
                <strong>Was passiert da?</strong> In der Fabrik wird flüssiges Öl künstlich gehärtet. Chemisch wird der gesunde „Knick“ gewaltsam geradegebogen (trans-Konfiguration).
            </p>
            <p>
                <strong>Warum ist das schlimm?</strong> Das Molekül sieht jetzt aus wie ein gesättigtes Fett, verhält sich aber chemisch aggressiv. Es baut sich in deine Zellwand ein und macht sie <strong>hart wie Beton</strong>.
                <br/>
                <em>Folge:</em> Entzündungsbotenstoffe werden gefeuert, Nährstoffe kommen nicht rein, Müll kommt nicht raus. Der Muskelaufbau stagniert.
            </p>
        </div>
      </section>

      {/* Section 3: Carbs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 border-b border-blue-200 dark:border-blue-800 pb-2">
          3. Kohlenhydrate: Kettenlänge & Hydrolyse
        </h2>
        <p>Kohlenhydrate sind chemisch gesehen nichts anderes als Zucker-Ketten.</p>
        
        <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm bg-white dark:bg-stone-800 rounded-lg shadow-sm">
                <thead>
                    <tr className="bg-stone-100 dark:bg-stone-700">
                        <th className="p-3 border-b dark:border-stone-600">Typ</th>
                        <th className="p-3 border-b dark:border-stone-600">Chemie</th>
                        <th className="p-3 border-b dark:border-stone-600">Physik</th>
                        <th className="p-3 border-b dark:border-stone-600">Effekt</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b dark:border-stone-700">
                        <td className="p-3 font-bold text-blue-600 dark:text-blue-400">Kurzkettig<br/><span className="text-xs font-normal text-stone-500">(Zucker, Weißbrot)</span></td>
                        <td className="p-3">Nur 1-2 Zuckerbausteine</td>
                        <td className="p-3">Diffundieren sofort ins Blut (keine Verdauung nötig)</td>
                        <td className="p-3">Blutzucker-Explosion → Insulinausstoß</td>
                    </tr>
                    <tr>
                        <td className="p-3 font-bold text-amber-600 dark:text-amber-400">Langkettig<br/><span className="text-xs font-normal text-stone-500">(Hafer, Reis)</span></td>
                        <td className="p-3">Tausende verknüpfte Zuckerbausteine (Netz)</td>
                        <td className="p-3">Enzyme (Scheren) müssen Glied für Glied abknipsen</td>
                        <td className="p-3">Konstante Energie über Stunden</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </section>

      {/* Summary Pro-Plan */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
        <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">Zusammenfassung für die Praxis (Der "Pro-Plan")</h3>
        <ol className="list-decimal list-inside space-y-3 text-stone-700 dark:text-stone-300">
            <li><strong>Proteine:</strong> Du brauchst das komplette Aminosäuren-Profil (Perlenkette), damit der Bauplan nicht stoppt → <strong>Tierische Quellen oder gute Veggie-Kombis.</strong></li>
            <li><strong>Fette:</strong> Du willst flexible Zellwände mit "Knick-Molekülen", damit Nährstoffe in den Muskel flutschen können → <strong>Omega-3 & Nüsse.</strong> Du willst keine "Beton-Wände" durch Transfette.</li>
            <li><strong>Kohlenhydrate:</strong> Du willst im Alltag Arbeit für deine Enzyme (langkettig), damit du satt bleibst. Nur nach dem Training willst du den direkten Weg ins Blut (kurzkettig).</li>
        </ol>
      </div>

      <hr className="border-stone-200 dark:border-stone-700 my-8"/>

      {/* Part 2: Recipes */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🍳</span>
            <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100">
             Teil 2: Schnelle Beispielgerichte (Muscle-Food)
            </h2>
        </div>
        
        <p className="text-stone-600 dark:text-stone-400">
            Hier sind Gerichte, die du in 5–10 Minuten machen kannst. Sie kombinieren die Nährstoffe so, wie dein Körper sie braucht.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
            {/* Recipe 1 */}
            <div className="bg-white dark:bg-stone-800 rounded-xl shadow-md overflow-hidden border border-stone-100 dark:border-stone-700">
                <div className="bg-orange-100 dark:bg-orange-900/50 p-3 border-b border-orange-200 dark:border-orange-800">
                    <h3 className="font-bold text-orange-800 dark:text-orange-200">1. Das Power-Frühstück</h3>
                    <p className="text-xs text-orange-700 dark:text-orange-300">Ziel: Lange Energie & Start der Proteinsynthese</p>
                </div>
                <div className="p-4 space-y-3">
                    <div>
                        <h4 className="text-sm font-bold uppercase text-stone-400 mb-1">Zutaten</h4>
                        <ul className="text-sm space-y-1">
                            <li>• 250g Magerquark (oder Skyr)</li>
                            <li>• 50–80g Haferflocken</li>
                            <li>• 1 Handvoll Beeren</li>
                            <li>• 1 EL Leinsamen/Chiasamen</li>
                            <li>• 10g Walnüsse</li>
                        </ul>
                    </div>
                    <div className="text-sm bg-stone-50 dark:bg-stone-900/50 p-2 rounded">
                        <strong>Warum gut?</strong> Quark liefert langsames Protein, Haferflocken geben Energie bis zum Mittag, Nüsse halten die Zellen flexibel.
                    </div>
                </div>
            </div>

            {/* Recipe 2 */}
            <div className="bg-white dark:bg-stone-800 rounded-xl shadow-md overflow-hidden border border-stone-100 dark:border-stone-700">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 border-b border-blue-200 dark:border-blue-800">
                    <h3 className="font-bold text-blue-800 dark:text-blue-200">2. Das „Work/Uni“-Mittagessen</h3>
                    <p className="text-xs text-blue-700 dark:text-blue-300">Ziel: Hochwertiges Protein + Sättigung ohne Koma</p>
                </div>
                <div className="p-4 space-y-3">
                    <div>
                        <h4 className="text-sm font-bold uppercase text-stone-400 mb-1">Zutaten</h4>
                        <ul className="text-sm space-y-1">
                            <li>• 150g Hähnchenbrust (angebraten)</li>
                            <li>• 75g Reis (Rohgewicht) oder 250g Kartoffeln</li>
                            <li>• Viel Brokkoli / TK-Kaisergemüse</li>
                            <li>• 1 EL Olivenöl (nach Kochen drüber)</li>
                        </ul>
                    </div>
                    <div className="text-sm bg-stone-50 dark:bg-stone-900/50 p-2 rounded">
                        <strong>Warum gut?</strong> Leicht verdaulich, liefert alle Makros. Das Öl sorgt dafür, dass Vitamine aufgenommen werden.
                    </div>
                </div>
            </div>

            {/* Recipe 3 */}
            <div className="bg-white dark:bg-stone-800 rounded-xl shadow-md overflow-hidden border border-stone-100 dark:border-stone-700">
                <div className="bg-red-100 dark:bg-red-900/50 p-3 border-b border-red-200 dark:border-red-800">
                    <h3 className="font-bold text-red-800 dark:text-red-200">3. Der Post-Workout-Refill</h3>
                    <p className="text-xs text-red-700 dark:text-red-300">Ziel: Insulin-Kick & Anaboles Fenster</p>
                </div>
                <div className="p-4 space-y-3">
                    <div>
                        <h4 className="text-sm font-bold uppercase text-stone-400 mb-1">Zutaten</h4>
                        <ul className="text-sm space-y-1">
                            <li>• 30–40g Whey Protein</li>
                            <li>• 1 reife Banane oder 3–4 Reiswaffeln</li>
                        </ul>
                    </div>
                    <div className="text-sm bg-stone-50 dark:bg-stone-900/50 p-2 rounded">
                        <strong>Warum gut?</strong> Hier ist keine Zeit für Verdauung. Zucker öffnet die Zelle, Whey repariert sofort.
                    </div>
                </div>
            </div>

            {/* Recipe 4 */}
            <div className="bg-white dark:bg-stone-800 rounded-xl shadow-md overflow-hidden border border-stone-100 dark:border-stone-700">
                <div className="bg-purple-100 dark:bg-purple-900/50 p-3 border-b border-purple-200 dark:border-purple-800">
                    <h3 className="font-bold text-purple-800 dark:text-purple-200">4. Das Regenerations-Abendessen</h3>
                    <p className="text-xs text-purple-700 dark:text-purple-300">Ziel: Hormone & Entzündungshemmung (Low Carb)</p>
                </div>
                <div className="p-4 space-y-3">
                    <div>
                        <h4 className="text-sm font-bold uppercase text-stone-400 mb-1">Zutaten</h4>
                        <ul className="text-sm space-y-1">
                            <li>• Rührei aus 3–4 Eiern (oder Lachs)</li>
                            <li>• Großer Salat oder Spinat</li>
                            <li>• 1/2 Avocado oder Olivenöl-Dressing</li>
                        </ul>
                    </div>
                    <div className="text-sm bg-stone-50 dark:bg-stone-900/50 p-2 rounded">
                        <strong>Warum gut?</strong> Wenig Kohlenhydrate für Fettverbrennung im Schlaf. Eier/Fette für Testosteron.
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-800 p-4 rounded-lg mt-4">
            <h4 className="font-bold mb-2">⚡ Pro-Tipp für Faule</h4>
            <ul className="space-y-2 text-sm">
                <li><strong>Snack:</strong> Handvoll Mandeln + 1 Proteinshake (Besser als jeder Riegel).</li>
                <li><strong>Notfall-Essen:</strong> Dose Thunfisch (im eigenen Saft) + Reiswaffeln.</li>
            </ul>
        </div>
      </section>
    </div>
  )
};

