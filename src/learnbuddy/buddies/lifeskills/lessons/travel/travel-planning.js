export const travelPlanning = {
    id: 'travel-travel-planning',
    title: {
        en: 'Travel Planning: The Complete Guide',
        de: 'Reiseplanung: Der komplette Guide'
    },
    difficulty: 'beginner',
    duration: 45,
    description: {
        en: 'Master travel budgeting, booking strategies, packing, insurance, and international travel tips.',
        de: 'Meistere Reisebudget, Buchungsstrategien, Packen, Reiseversicherung und internationale Reisetipps.'
    },
    content: {
        en: `## Travel Planning: The Complete Guide

### Budgeting Your Trip

<div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-blue-800 dark:text-blue-200">Budget Categories</p>
  <table className="w-full mt-2 text-blue-700 dark:text-blue-300 text-sm">
    <tr><td className="font-bold pr-2 py-1 border-b">Transport</td><td className="border-b py-1">Flights, trains, local transport (~30-40% of budget)</td></tr>
    <tr><td className="font-bold pr-2 py-1 border-b">Accommodation</td><td className="border-b py-1">Hotels, hostels, Airbnb (~25-35%)</td></tr>
    <tr><td className="font-bold pr-2 py-1 border-b">Food</td><td className="border-b py-1">Restaurants, groceries, street food (~15-25%)</td></tr>
    <tr><td className="font-bold pr-2 py-1 border-b">Activities</td><td className="border-b py-1">Tours, museums, experiences (~10-15%)</td></tr>
    <tr><td className="font-bold pr-2 py-1">Buffer</td><td className="py-1">Emergencies, spontaneous plans (~10%)</td></tr>
  </table>
</div>

**Money-saving tips:**
- Book flights on Tuesdays/Wednesdays (typically cheapest)
- Use Google Flights for price tracking and "Explore" for flexible destinations
- Travel in shoulder season (just before/after peak – best value)
- Cook some meals if you have a kitchen
- Free walking tours (tip-based) are often the best city introductions

---

### Booking Strategies

**Flights:**
- Book domestic 1-3 months ahead, international 2-6 months ahead
- Use incognito mode when searching (prices can increase based on search history)
- Compare: Google Flights, Skyscanner, Momondo
- Consider nearby airports and flexible dates (±3 days can save hundreds)

**Accommodation:**
- Booking.com for hotels (free cancellation options)
- Hostelworld for hostels (great for solo travelers)
- Airbnb for longer stays (negotiate weekly/monthly discounts)
- Read reviews carefully – filter by recent, read the bad ones

---

### Packing Like a Pro

<div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-amber-800 dark:text-amber-200">The Capsule Wardrobe Method</p>
  <p className="text-amber-700 dark:text-amber-300 mt-1">Pack clothes that all mix and match. Stick to 2-3 colors. For a week-long trip:</p>
  <ul className="mt-2 text-amber-700 dark:text-amber-300 space-y-1">
    <li>3-4 tops (quick-dry material)</li>
    <li>2 bottoms (1 pants, 1 shorts/skirt)</li>
    <li>1 jacket/layer</li>
    <li>5-7 underwear and socks</li>
    <li>2 pairs of shoes (walking + dressy)</li>
    <li>1 outfit for nicer occasions</li>
  </ul>
</div>

**Packing hacks:**
- Roll clothes instead of folding (saves space, reduces wrinkles)
- Use packing cubes (game changer for organization)
- Wear your heaviest items on the plane
- Always carry: passport, phone, charger, medications, one change of clothes in carry-on

---

### Travel Insurance

<div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border-l-4 border-red-500 my-4">
  <p className="font-bold text-red-800 dark:text-red-200">Don't Skip Travel Insurance</p>
  <p className="text-red-700 dark:text-red-300 mt-1">A hospital stay abroad can cost tens of thousands. Travel insurance typically costs 3-5% of your trip cost.</p>
  <ul className="mt-2 text-red-700 dark:text-red-300 space-y-1">
    <li><strong>Must cover:</strong> Medical emergencies, trip cancellation, lost luggage</li>
    <li><strong>Nice to have:</strong> Flight delays, adventure sports coverage</li>
    <li><strong>Check first:</strong> Your credit card may include travel insurance</li>
    <li><strong>EU tip:</strong> EHIC/GHIC card covers basic medical in EU countries (but not everything)</li>
  </ul>
</div>

---

### International Travel Tips

**Documents checklist:**
- Passport (valid for 6+ months beyond travel dates)
- Visa (check requirements well in advance)
- Copies of all documents (digital + physical, stored separately)
- Travel insurance confirmation
- Vaccination records if required

**Practical tips:**
- Notify your bank about travel dates (avoid card blocks)
- Get a travel-friendly debit card (no foreign transaction fees)
- Download offline maps (Google Maps allows offline areas)
- Learn 5 phrases in the local language: hello, thank you, please, excuse me, how much?
- Research local customs and etiquette (tipping, dress codes, gestures)

**Safety:**
- Register with your embassy for travel advisories
- Share your itinerary with someone at home
- Keep emergency numbers saved (local emergency + embassy)
- Use hotel safes for valuables
- Trust your instincts – if something feels wrong, leave`,

        de: `## Reiseplanung: Der komplette Guide

### Reise-Budget planen

<div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-blue-800 dark:text-blue-200">Budget-Kategorien</p>
  <table className="w-full mt-2 text-blue-700 dark:text-blue-300 text-sm">
    <tr><td className="font-bold pr-2 py-1 border-b">Transport</td><td className="border-b py-1">Flüge, Züge, lokaler Transport (~30-40% des Budgets)</td></tr>
    <tr><td className="font-bold pr-2 py-1 border-b">Unterkunft</td><td className="border-b py-1">Hotels, Hostels, Airbnb (~25-35%)</td></tr>
    <tr><td className="font-bold pr-2 py-1 border-b">Essen</td><td className="border-b py-1">Restaurants, Einkauf, Streetfood (~15-25%)</td></tr>
    <tr><td className="font-bold pr-2 py-1 border-b">Aktivitäten</td><td className="border-b py-1">Touren, Museen, Erlebnisse (~10-15%)</td></tr>
    <tr><td className="font-bold pr-2 py-1">Puffer</td><td className="py-1">Notfälle, spontane Pläne (~10%)</td></tr>
  </table>
</div>

**Spartipps:**
- Flüge am Dienstag/Mittwoch buchen (typischerweise am günstigsten)
- Google Flights für Preisverfolgung und "Entdecken" für flexible Ziele nutzen
- In der Nebensaison reisen (kurz vor/nach der Hauptsaison – bestes Preis-Leistungs-Verhältnis)
- Selbst kochen, wenn die Unterkunft eine Küche hat
- Free Walking Tours (auf Trinkgeldbasis) sind oft die besten Stadteinführungen

---

### Buchungsstrategien

**Flüge:**
- Inlandsflüge 1-3 Monate vorher, international 2-6 Monate vorher buchen
- Inkognito-Modus beim Suchen nutzen (Preise können basierend auf Suchverlauf steigen)
- Vergleichen: Google Flights, Skyscanner, Momondo
- Nahe Flughäfen und flexible Daten prüfen (±3 Tage können Hunderte sparen)

**Unterkünfte:**
- Booking.com für Hotels (kostenlose Stornierung möglich)
- Hostelworld für Hostels (toll für Alleinreisende)
- Airbnb für längere Aufenthalte (Wochen-/Monatsrabatte verhandeln)
- Bewertungen sorgfältig lesen – nach Aktualität filtern, die schlechten lesen

---

### Packen wie ein Profi

<div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-amber-800 dark:text-amber-200">Die Kapsel-Garderobe-Methode</p>
  <p className="text-amber-700 dark:text-amber-300 mt-1">Packe Kleidung, die sich alle kombinieren lässt. Beschränke dich auf 2-3 Farben. Für eine Woche:</p>
  <ul className="mt-2 text-amber-700 dark:text-amber-300 space-y-1">
    <li>3-4 Oberteile (schnell trocknendes Material)</li>
    <li>2 Unterteile (1 lange Hose, 1 Shorts/Rock)</li>
    <li>1 Jacke/Schicht</li>
    <li>5-7 Unterwäsche und Socken</li>
    <li>2 Paar Schuhe (Laufschuhe + schicker)</li>
    <li>1 Outfit für feinere Anlässe</li>
  </ul>
</div>

**Packhacks:**
- Kleidung rollen statt falten (spart Platz, weniger Falten)
- Packwürfel nutzen (Game Changer für Organisation)
- Die schwersten Sachen im Flugzeug tragen
- Immer im Handgepäck: Reisepass, Handy, Ladekabel, Medikamente, einen Satz Wechselkleidung

---

### Reiseversicherung

<div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border-l-4 border-red-500 my-4">
  <p className="font-bold text-red-800 dark:text-red-200">Reiseversicherung nicht überspringen</p>
  <p className="text-red-700 dark:text-red-300 mt-1">Ein Krankenhausaufenthalt im Ausland kann Zehntausende kosten. Reiseversicherung kostet typischerweise 3-5% der Reisekosten.</p>
  <ul className="mt-2 text-red-700 dark:text-red-300 space-y-1">
    <li><strong>Muss abdecken:</strong> Medizinische Notfälle, Reiserücktritt, verlorenes Gepäck</li>
    <li><strong>Nice to have:</strong> Flugverspätungen, Abenteuersport-Abdeckung</li>
    <li><strong>Zuerst prüfen:</strong> Deine Kreditkarte könnte Reiseversicherung beinhalten</li>
    <li><strong>EU-Tipp:</strong> EHIC-Karte deckt grundlegende Behandlung in EU-Ländern (aber nicht alles)</li>
  </ul>
</div>

---

### Internationale Reisetipps

**Dokumenten-Checkliste:**
- Reisepass (mindestens 6 Monate über das Reisedatum hinaus gültig)
- Visum (Anforderungen rechtzeitig prüfen)
- Kopien aller Dokumente (digital + physisch, getrennt aufbewahren)
- Reiseversicherungsbestätigung
- Impfnachweise, falls erforderlich

**Praktische Tipps:**
- Bank über Reisedaten informieren (Kartensperren vermeiden)
- Reisefreundliche Debitkarte besorgen (keine Auslandsgebühren)
- Offline-Karten herunterladen (Google Maps erlaubt Offline-Bereiche)
- 5 Phrasen in der Landessprache lernen: Hallo, Danke, Bitte, Entschuldigung, Wie viel?
- Lokale Bräuche und Etikette recherchieren (Trinkgeld, Kleiderordnung, Gesten)

**Sicherheit:**
- Bei der Botschaft für Reisewarnungen registrieren
- Reiseroute mit jemandem zu Hause teilen
- Notfallnummern speichern (lokaler Notruf + Botschaft)
- Hotel-Safe für Wertsachen nutzen
- Vertraue deinem Bauchgefühl – wenn sich etwas falsch anfühlt, geh`
    },
    task: {
        en: {
            title: 'Plan Your Next Trip',
            description: 'Apply these travel planning skills to a real or hypothetical trip.',
            checklist: [
                { text: 'Create a budget breakdown for a trip you want to take' },
                { text: 'Set up a Google Flights price alert for a destination' },
                { text: 'Create a packing list using the capsule wardrobe method' },
                { text: 'Research travel insurance options and compare 3 providers' }
            ]
        },
        de: {
            title: 'Plane deine nächste Reise',
            description: 'Wende diese Reiseplanungs-Skills auf eine reale oder hypothetische Reise an.',
            checklist: [
                { text: 'Erstelle eine Budget-Aufschlüsselung für eine Reise, die du machen willst' },
                { text: 'Richte einen Google Flights Preisalarm für ein Reiseziel ein' },
                { text: 'Erstelle eine Packliste mit der Kapsel-Garderobe-Methode' },
                { text: 'Recherchiere Reiseversicherungen und vergleiche 3 Anbieter' }
            ]
        }
    },
    exercises: [
        { id: 'trip-budget', title: { en: 'Budget a Dream Trip', de: 'Traumreise budgetieren' }, description: { en: 'Choose a dream destination. Research and create a detailed budget for 7 days including flights, accommodation, food, and activities.', de: 'Wähle ein Traumziel. Recherchiere und erstelle ein detailliertes Budget für 7 Tage inkl. Flüge, Unterkunft, Essen und Aktivitäten.' } }
    ],
    notes: {
        en: [
            { front: 'Flight Booking', back: 'Book Tue/Wed, 1-6 months ahead, use incognito, compare 3+ sites, flexible dates ±3 days.' },
            { front: 'Packing Rule', back: 'Capsule wardrobe (2-3 colors), roll don\'t fold, packing cubes, heaviest items on you.' },
            { front: 'Travel Insurance', back: 'Must cover: medical, cancellation, lost luggage. Costs 3-5% of trip. Check credit card first.' }
        ],
        de: [
            { front: 'Flugbuchung', back: 'Di/Mi buchen, 1-6 Monate vorher, Inkognito, 3+ Seiten vergleichen, flexible Daten ±3 Tage.' },
            { front: 'Pack-Regel', back: 'Kapsel-Garderobe (2-3 Farben), rollen statt falten, Packwürfel, schwerste Sachen am Körper.' },
            { front: 'Reiseversicherung', back: 'Muss abdecken: Medizin, Storno, Gepäck. Kostet 3-5% der Reise. Kreditkarte zuerst prüfen.' }
        ]
    }
};
