export const basicLegal = {
    id: 'legal-basic-legal',
    title: {
        en: 'Basic Legal Knowledge: Know Your Rights',
        de: 'Grundlagen Recht: Kenne deine Rechte'
    },
    difficulty: 'beginner',
    duration: 45,
    description: {
        en: 'Understand rental law, contract basics, consumer rights, and essential insurance types.',
        de: 'Verstehe Mietrecht, Vertragsgrundlagen, Verbraucherrechte und wichtige Versicherungsarten.'
    },
    content: {
        en: `## Basic Legal Knowledge: Know Your Rights

### Why Legal Literacy Matters
You don't need a law degree, but understanding basic legal concepts protects you from being taken advantage of. These are the areas that affect almost everyone.

---

### Rental Law (Tenant Rights)

<div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-blue-800 dark:text-blue-200">Key Tenant Rights</p>
  <ul className="mt-2 text-blue-700 dark:text-blue-300 space-y-1">
    <li><strong>Deposit:</strong> Max 3 months' cold rent. Must be returned within reasonable time after moving out (typically 3-6 months).</li>
    <li><strong>Notice Period:</strong> Typically 3 months for tenants. Landlords need longer depending on tenancy length.</li>
    <li><strong>Repairs:</strong> Structural issues are the landlord's responsibility. Minor repairs (up to a limit) can be tenant's.</li>
    <li><strong>Rent Increase:</strong> Must follow legal limits. Compare with local rent index (Mietspiegel in Germany).</li>
    <li><strong>Inspection:</strong> Landlord must give notice (typically 24-48h) before entering your apartment.</li>
    <li><strong>Documentation:</strong> ALWAYS do a move-in/move-out protocol with photos. This protects your deposit.</li>
  </ul>
</div>

---

### Contract Basics

**A valid contract needs:**
1. **Offer and acceptance** – Both parties agree
2. **Consideration** – Something of value is exchanged
3. **Capacity** – Both parties are legally able to contract (18+, sound mind)
4. **Legality** – The purpose must be legal

**Red flags in contracts:**
- Auto-renewal clauses buried in fine print
- Unlimited liability clauses
- Unilateral change clauses ("We can change terms at any time")
- Excessive cancellation penalties

**Golden rule:** Read EVERYTHING before signing. If you don't understand it, ask or get legal advice.

---

### Consumer Rights

<div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-green-800 dark:text-green-200">Your Rights as a Consumer</p>
  <ul className="mt-2 text-green-700 dark:text-green-300 space-y-2">
    <li><strong>Right of Withdrawal:</strong> 14-day return right for online purchases (EU). No reason needed.</li>
    <li><strong>Warranty:</strong> 2-year legal warranty on all consumer goods (EU). First 12 months: burden of proof on seller.</li>
    <li><strong>Defective Products:</strong> You can demand repair, replacement, price reduction, or refund.</li>
    <li><strong>Misleading Advertising:</strong> Products must match their description. False claims are actionable.</li>
    <li><strong>Subscription Traps:</strong> Many countries now require easy cancellation (e.g., cancel button requirement).</li>
  </ul>
</div>

---

### Essential Insurance Types

| Insurance | Priority | Why |
|-----------|----------|-----|
| **Health Insurance** | MUST HAVE | Medical care can bankrupt you without it |
| **Liability Insurance** | MUST HAVE | Covers damage you accidentally cause to others (very cheap, ~5€/month) |
| **Disability Insurance** | Very Important | Protects your income if you can't work |
| **Household Insurance** | Important | Covers theft, fire, water damage to your belongings |
| **Car Insurance** | Required by law | Mandatory for all car owners |
| **Legal Insurance** | Nice to have | Covers lawyer fees if you need legal help |

<div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-amber-800 dark:text-amber-200">Insurance Tips</p>
  <ul className="mt-2 text-amber-700 dark:text-amber-300 space-y-1">
    <li>Compare at least 3 providers before choosing</li>
    <li>Higher deductible = lower premium (choose based on your savings)</li>
    <li>Review your insurance annually – needs change</li>
    <li>Don't over-insure: skip phone insurance, extended warranties on cheap items</li>
  </ul>
</div>`,

        de: `## Grundlagen Recht: Kenne deine Rechte

### Warum Rechtswissen wichtig ist
Du brauchst kein Jura-Studium, aber grundlegende Rechtskenntnisse schützen dich davor, übervorteilt zu werden. Das sind die Bereiche, die fast jeden betreffen.

---

### Mietrecht (Mieterrechte)

<div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-blue-800 dark:text-blue-200">Wichtige Mieterrechte</p>
  <ul className="mt-2 text-blue-700 dark:text-blue-300 space-y-1">
    <li><strong>Kaution:</strong> Max. 3 Monats-Kaltmieten. Muss nach Auszug in angemessener Frist zurückgegeben werden (typisch 3-6 Monate).</li>
    <li><strong>Kündigungsfrist:</strong> 3 Monate für Mieter. Vermieter brauchen je nach Mietdauer länger (3/6/9 Monate).</li>
    <li><strong>Reparaturen:</strong> Strukturelle Probleme sind Vermietersache. Kleinreparaturen (bis zur Grenze, ca. 75-100€) können auf Mieter umgelegt werden.</li>
    <li><strong>Mieterhöhung:</strong> Nur bis zur ortsüblichen Vergleichsmiete (Mietspiegel). Max. 20% in 3 Jahren (Kappungsgrenze).</li>
    <li><strong>Besichtigung:</strong> Vermieter muss Termin ankündigen (24-48h vorher) und braucht einen triftigen Grund.</li>
    <li><strong>Dokumentation:</strong> IMMER ein Ein-/Auszugsprotokoll mit Fotos machen. Das schützt deine Kaution.</li>
  </ul>
</div>

---

### Vertragsgrundlagen

**Ein gültiger Vertrag braucht:**
1. **Angebot und Annahme** – Beide Parteien stimmen zu
2. **Gegenleistung** – Etwas von Wert wird ausgetauscht
3. **Geschäftsfähigkeit** – Beide Parteien sind volljährig und geistig fähig
4. **Legalität** – Der Vertragszweck muss legal sein

**Warnsignale in Verträgen:**
- Automatische Verlängerungsklauseln im Kleingedruckten
- Unbeschränkte Haftungsklauseln
- Einseitige Änderungsklauseln ("Wir können die Bedingungen jederzeit ändern")
- Überhöhte Stornogebühren

**Goldene Regel:** Lies ALLES, bevor du unterschreibst. Wenn du es nicht verstehst, frag nach oder hol dir Rechtsberatung.

---

### Verbraucherrechte

<div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-green-800 dark:text-green-200">Deine Rechte als Verbraucher</p>
  <ul className="mt-2 text-green-700 dark:text-green-300 space-y-2">
    <li><strong>Widerrufsrecht:</strong> 14-Tage-Rückgaberecht bei Online-Käufen (EU). Kein Grund nötig.</li>
    <li><strong>Gewährleistung:</strong> 2 Jahre gesetzliche Gewährleistung auf alle Konsumgüter (EU). Erste 12 Monate: Beweislast beim Verkäufer.</li>
    <li><strong>Mangelhafte Produkte:</strong> Du kannst Nachbesserung, Ersatzlieferung, Preisminderung oder Rücktritt verlangen.</li>
    <li><strong>Irreführende Werbung:</strong> Produkte müssen der Beschreibung entsprechen. Falsche Angaben sind abmahnfähig.</li>
    <li><strong>Abo-Fallen:</strong> Seit 2022 müssen Anbieter einen einfachen Kündigungsbutton anbieten.</li>
  </ul>
</div>

---

### Wichtige Versicherungsarten

| Versicherung | Priorität | Warum |
|-------------|-----------|-------|
| **Krankenversicherung** | PFLICHT | Medizinische Versorgung kann ohne ruinös sein |
| **Privathaftpflicht** | MUSS HABEN | Deckt Schäden, die du versehentlich verursachst (sehr günstig, ~5€/Monat) |
| **Berufsunfähigkeit** | Sehr wichtig | Schützt dein Einkommen, wenn du nicht arbeiten kannst |
| **Hausratversicherung** | Wichtig | Deckt Diebstahl, Feuer, Wasserschäden deiner Sachen |
| **Kfz-Versicherung** | Gesetzlich vorgeschrieben | Pflicht für alle Autobesitzer |
| **Rechtsschutz** | Nice to have | Übernimmt Anwaltskosten bei Rechtsstreitigkeiten |

<div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-amber-800 dark:text-amber-200">Versicherungstipps</p>
  <ul className="mt-2 text-amber-700 dark:text-amber-300 space-y-1">
    <li>Mindestens 3 Anbieter vergleichen vor Abschluss</li>
    <li>Höherer Selbstbehalt = niedrigere Prämie (je nach Ersparnissen wählen)</li>
    <li>Versicherungen jährlich überprüfen – Bedürfnisse ändern sich</li>
    <li>Nicht überversichern: Handy-Versicherung, Garantieverlängerungen auf günstige Artikel streichen</li>
  </ul>
</div>`
    },
    task: {
        en: {
            title: 'Know Your Legal Rights',
            description: 'Understand and apply basic legal knowledge.',
            checklist: [
                { text: 'Review your current rental contract for key terms and notice periods' },
                { text: 'Check if you have liability insurance (if not, get quotes)' },
                { text: 'Read the fine print of one subscription you have' },
                { text: 'Know your local tenant rights hotline or advice center' }
            ]
        },
        de: {
            title: 'Kenne deine Rechte',
            description: 'Verstehe und wende grundlegendes Rechtswissen an.',
            checklist: [
                { text: 'Überprüfe deinen Mietvertrag auf wichtige Klauseln und Kündigungsfristen' },
                { text: 'Prüfe, ob du eine Haftpflichtversicherung hast (wenn nicht, Angebote einholen)' },
                { text: 'Lies das Kleingedruckte eines Abos, das du hast' },
                { text: 'Kenne die Mieterberatung oder Verbraucherzentrale in deiner Stadt' }
            ]
        }
    },
    exercises: [
        { id: 'contract-review', title: { en: 'Contract Review', de: 'Vertrags-Check' }, description: { en: 'Take any contract you\'ve signed recently and identify: notice period, auto-renewal, and any surprising clauses.', de: 'Nimm einen kürzlich unterschriebenen Vertrag und identifiziere: Kündigungsfrist, Auto-Verlängerung und überraschende Klauseln.' } }
    ],
    notes: {
        en: [
            { front: 'Consumer Rights (EU)', back: '14-day withdrawal for online purchases. 2-year warranty. First 12 months: seller must prove no defect.' },
            { front: 'Must-Have Insurance', back: 'Health insurance (mandatory), liability insurance (~5€/month), disability insurance.' },
            { front: 'Contract Golden Rule', back: 'Read EVERYTHING before signing. If you don\'t understand it, get legal advice.' }
        ],
        de: [
            { front: 'Verbraucherrechte (EU)', back: '14-Tage-Widerruf bei Online-Kauf. 2 Jahre Gewährleistung. Erste 12 Monate: Verkäufer muss beweisen.' },
            { front: 'Must-Have Versicherungen', back: 'Krankenversicherung (Pflicht), Haftpflicht (~5€/Monat), Berufsunfähigkeit.' },
            { front: 'Vertrags-Goldene-Regel', back: 'Lies ALLES vor dem Unterschreiben. Wenn du es nicht verstehst, hol Rechtsberatung.' }
        ]
    }
};
