export const carBasics = {
    id: 'diy-car-basics',
    title: {
        en: 'Car Basics: Essential Maintenance Skills',
        de: 'Auto-Basics: Grundlegende Wartungskenntnisse'
    },
    difficulty: 'beginner',
    duration: 40,
    description: {
        en: 'Learn tire changing, oil checking, jump starting, and basic car maintenance everyone should know.',
        de: 'Lerne Reifenwechsel, Ölkontrolle, Starthilfe und grundlegende Autopflege, die jeder kennen sollte.'
    },
    content: {
        en: `## Car Basics: Essential Maintenance Skills

### Why Every Driver Should Know This
Breaking down on a highway at midnight shouldn't mean being helpless. These skills can save you time, money, and potentially keep you safe in emergencies.

---

### How to Change a Tire

<div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-blue-800 dark:text-blue-200">Step-by-Step Tire Change</p>
  <ol className="mt-2 text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>Safety first:</strong> Pull over to a flat, safe surface. Turn on hazard lights. Place warning triangle 50-100m behind your car.</li>
    <li><strong>Prepare:</strong> Get spare tire, jack, and wrench from trunk. Put on safety vest.</li>
    <li><strong>Loosen lug nuts:</strong> BEFORE jacking up the car, loosen each nut 1/2 turn (counterclockwise). The car's weight keeps it stable.</li>
    <li><strong>Jack up:</strong> Place jack at the designated jack point (check your manual). Raise until tire is 2-3 cm off ground.</li>
    <li><strong>Remove tire:</strong> Fully remove lug nuts. Pull tire straight toward you.</li>
    <li><strong>Mount spare:</strong> Lift spare onto studs. Hand-tighten lug nuts in a star/cross pattern.</li>
    <li><strong>Lower car:</strong> Lower the jack slowly. Then fully tighten lug nuts (star pattern, as tight as possible).</li>
    <li><strong>Drive carefully:</strong> Spare tires usually have a speed limit (80-100 km/h). Get to a shop ASAP.</li>
  </ol>
</div>

---

### How to Check & Top Up Oil

**When:** Check every 2 weeks or before long trips.

1. **Engine must be warm but off** for at least 5 minutes (oil settles)
2. **Find the dipstick** (usually yellow handle)
3. **Pull out, wipe clean**, reinsert fully, pull out again
4. **Read the level:** Oil should be between the MIN and MAX marks
5. **If low:** Add the correct oil type (check manual!) in small amounts. Check again. Don't overfill.

<div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-amber-800 dark:text-amber-200">Warning Signs for Oil Problems</p>
  <ul className="mt-2 text-amber-700 dark:text-amber-300 space-y-1">
    <li>Oil light on dashboard = STOP driving immediately</li>
    <li>Dark, gritty oil = needs changing</li>
    <li>Milky/frothy oil = possible coolant leak (mechanic NOW)</li>
    <li>Burning oil smell = possible leak</li>
  </ul>
</div>

---

### How to Jump Start a Car

<div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border-l-4 border-red-500 my-4">
  <p className="font-bold text-red-800 dark:text-red-200">Cable Connection Order (CRITICAL!)</p>
  <ol className="mt-2 text-red-700 dark:text-red-300 space-y-1">
    <li><strong>RED cable:</strong> Dead battery (+) → Good battery (+)</li>
    <li><strong>BLACK cable:</strong> Good battery (-) → Unpainted metal on dead car (NOT the battery!)</li>
    <li>Start the working car, wait 2-3 minutes</li>
    <li>Try starting the dead car</li>
    <li><strong>Disconnect in REVERSE order:</strong> Black from dead car → Black from good car → Red from good car → Red from dead car</li>
  </ol>
  <p className="text-red-700 dark:text-red-300 mt-2 text-sm italic">Wrong order can cause sparks near the battery (hydrogen gas = explosion risk).</p>
</div>

---

### Regular Maintenance Schedule

| Check | Frequency | DIY? |
|-------|-----------|------|
| Tire pressure | Monthly | Yes |
| Oil level | Bi-weekly | Yes |
| Windshield washer fluid | Monthly | Yes |
| Coolant level | Monthly | Yes |
| Lights (all) | Monthly | Yes |
| Wiper blades | Every 6 months | Yes |
| Oil change | Every 10,000-15,000 km | Shop |
| Brake pads | Every 30,000-50,000 km | Shop |
| TÜV/MOT | Every 2 years | Shop |

### Dashboard Warning Lights
- **Red lights** = STOP. Don't drive. (Oil pressure, temperature, brakes)
- **Yellow/Orange lights** = Caution. Drive carefully to a shop. (Check engine, battery, ABS)
- **Blue/Green lights** = Information only. (High beams, turn signals)`,

        de: `## Auto-Basics: Grundlegende Wartungskenntnisse

### Warum jeder Fahrer das wissen sollte
Nachts auf der Autobahn liegen zu bleiben sollte nicht bedeuten, hilflos zu sein. Diese Fähigkeiten können dir Zeit, Geld und möglicherweise deine Sicherheit in Notfällen retten.

---

### Reifenwechsel Schritt für Schritt

<div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-blue-800 dark:text-blue-200">Anleitung Reifenwechsel</p>
  <ol className="mt-2 text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>Sicherheit zuerst:</strong> Auf ebener, sicherer Fläche anhalten. Warnblinker an. Warndreieck 50-100m hinter dem Auto aufstellen.</li>
    <li><strong>Vorbereiten:</strong> Reserverad, Wagenheber und Radkreuz aus dem Kofferraum holen. Warnweste anziehen.</li>
    <li><strong>Radmuttern lockern:</strong> VOR dem Aufbocken jede Mutter 1/2 Umdrehung lösen (gegen den Uhrzeigersinn). Das Gewicht des Autos hält es stabil.</li>
    <li><strong>Aufbocken:</strong> Wagenheber am vorgesehenen Punkt ansetzen (Betriebsanleitung!). Anheben, bis der Reifen 2-3 cm über dem Boden ist.</li>
    <li><strong>Reifen entfernen:</strong> Radmuttern komplett lösen. Reifen gerade zu dir ziehen.</li>
    <li><strong>Ersatzrad montieren:</strong> Auf die Bolzen heben. Radmuttern handfest im Kreuz-/Sternmuster anziehen.</li>
    <li><strong>Auto ablassen:</strong> Wagenheber langsam ablassen. Dann Radmuttern voll festziehen (Sternmuster, so fest wie möglich).</li>
    <li><strong>Vorsichtig fahren:</strong> Ersatzräder haben meist ein Tempolimit (80-100 km/h). So schnell wie möglich zur Werkstatt.</li>
  </ol>
</div>

---

### Öl kontrollieren und nachfüllen

**Wann:** Alle 2 Wochen oder vor langen Fahrten prüfen.

1. **Motor muss warm, aber seit 5 Minuten aus sein** (Öl setzt sich)
2. **Ölmessstab finden** (meist gelber Griff)
3. **Herausziehen, abwischen**, komplett einstecken, wieder herausziehen
4. **Füllstand ablesen:** Öl sollte zwischen MIN und MAX sein
5. **Wenn niedrig:** Richtiges Öl nachfüllen (Betriebsanleitung!) in kleinen Mengen. Erneut prüfen. Nicht überfüllen.

<div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-amber-800 dark:text-amber-200">Warnsignale bei Öl-Problemen</p>
  <ul className="mt-2 text-amber-700 dark:text-amber-300 space-y-1">
    <li>Öllampe im Dashboard = SOFORT anhalten</li>
    <li>Dunkles, körniges Öl = Ölwechsel nötig</li>
    <li>Milchiges/schaumiges Öl = mögliches Kühlmittelleck (sofort Werkstatt)</li>
    <li>Brennender Ölgeruch = mögliches Leck</li>
  </ul>
</div>

---

### Starthilfe geben

<div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border-l-4 border-red-500 my-4">
  <p className="font-bold text-red-800 dark:text-red-200">Kabel-Reihenfolge (WICHTIG!)</p>
  <ol className="mt-2 text-red-700 dark:text-red-300 space-y-1">
    <li><strong>ROTES Kabel:</strong> Leere Batterie (+) → Volle Batterie (+)</li>
    <li><strong>SCHWARZES Kabel:</strong> Volle Batterie (-) → Unlackiertes Metallteil am Pannenfahrzeug (NICHT die Batterie!)</li>
    <li>Funktionierendes Auto starten, 2-3 Minuten warten</li>
    <li>Pannenfahrzeug starten versuchen</li>
    <li><strong>In UMGEKEHRTER Reihenfolge abklemmen:</strong> Schwarz vom Pannenfahrzeug → Schwarz vom Spenderauto → Rot vom Spenderauto → Rot vom Pannenfahrzeug</li>
  </ol>
  <p className="text-red-700 dark:text-red-300 mt-2 text-sm italic">Falsche Reihenfolge kann Funken nahe der Batterie verursachen (Wasserstoffgas = Explosionsgefahr).</p>
</div>

---

### Regelmäßige Wartung

| Prüfung | Häufigkeit | Selbst machbar? |
|---------|-----------|-----------------|
| Reifendruck | Monatlich | Ja |
| Ölstand | Alle 2 Wochen | Ja |
| Wischwasser | Monatlich | Ja |
| Kühlmittelstand | Monatlich | Ja |
| Beleuchtung (alle) | Monatlich | Ja |
| Scheibenwischer | Alle 6 Monate | Ja |
| Ölwechsel | Alle 10.000-15.000 km | Werkstatt |
| Bremsbeläge | Alle 30.000-50.000 km | Werkstatt |
| TÜV/HU | Alle 2 Jahre | Werkstatt |

### Warnleuchten im Dashboard
- **Rote Leuchten** = STOPP. Nicht weiterfahren. (Öldruck, Temperatur, Bremsen)
- **Gelbe/Orange Leuchten** = Vorsicht. Vorsichtig zur Werkstatt. (Motorkontrolle, Batterie, ABS)
- **Blaue/Grüne Leuchten** = Nur Information. (Fernlicht, Blinker)`
    },
    task: {
        en: {
            title: 'Master Car Basics',
            description: 'Practice essential car maintenance skills.',
            checklist: [
                { text: 'Locate your spare tire, jack, and wrench in your car' },
                { text: 'Check your oil level using the dipstick' },
                { text: 'Check all tire pressures and adjust if needed' },
                { text: 'Review the jump start procedure until you can explain it' }
            ]
        },
        de: {
            title: 'Auto-Basics meistern',
            description: 'Übe grundlegende Auto-Wartungsfähigkeiten.',
            checklist: [
                { text: 'Finde Ersatzrad, Wagenheber und Radkreuz in deinem Auto' },
                { text: 'Prüfe den Ölstand mit dem Ölmessstab' },
                { text: 'Prüfe alle Reifendrücke und korrigiere sie bei Bedarf' },
                { text: 'Gehe die Starthilfe-Anleitung durch, bis du sie erklären kannst' }
            ]
        }
    },
    exercises: [
        { id: 'tire-practice', title: { en: 'Practice Tire Change', de: 'Reifenwechsel üben' }, description: { en: 'In your driveway, practice the full tire change procedure (without actually driving). Time yourself.', de: 'Übe in deiner Einfahrt den kompletten Reifenwechsel-Ablauf (ohne zu fahren). Stoppe die Zeit.' } }
    ],
    notes: {
        en: [
            { front: 'Jump Start Order', back: 'Red: Dead(+) → Good(+). Black: Good(-) → Metal on dead car. Disconnect in reverse.' },
            { front: 'Tire Change Key', back: 'Loosen nuts BEFORE jacking up. Tighten in star pattern AFTER lowering.' },
            { front: 'Dashboard Lights', back: 'Red = Stop immediately. Yellow = Drive carefully to shop. Blue/Green = Info only.' }
        ],
        de: [
            { front: 'Starthilfe-Reihenfolge', back: 'Rot: Leer(+) → Voll(+). Schwarz: Voll(-) → Metall am Pannenfahrzeug. Umgekehrt abklemmen.' },
            { front: 'Reifenwechsel Tipp', back: 'Muttern VOR dem Aufbocken lockern. Im Sternmuster NACH dem Ablassen festziehen.' },
            { front: 'Warnleuchten', back: 'Rot = Sofort stoppen. Gelb = Vorsichtig zur Werkstatt. Blau/Grün = Nur Info.' }
        ]
    }
};
