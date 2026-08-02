import React from 'react';

export const communityLesson = {
  id: 'r8_m3_community',
  title: { 
    en: '8.3 Running Community', 
    de: '8.3 Laufgemeinschaft' 
  },
  description: { 
    en: 'Discover running clubs, parkrun, virtual communities, and the benefits of running with others for motivation and joy.', 
    de: 'Entdecke Laufclubs, Parkrun, virtuelle Communities und die Vorteile des gemeinsamen Laufens für Motivation und Freude.' 
  },
  category: 'lifestyle',
  
  content: {
    de: `
### Laufgemeinschaft: Gemeinsam läuft es besser! 🤝

Laufen kann einsam sein - muss es aber nicht! Eine Laufgemeinschaft bietet Motivation, Freundschaft, Sicherheit und macht das Laufen noch besser. Dieser Modul zeigt, wie du deine Lauf-Community findest.

---
### Warum gemeinsam laufen?

**Vorteile:**
- **Motivation:** Verabredung = du gehst hin (auch ohne Lust)
- **Sicherheit:** Nicht allein unterwegs (besonders Dunkelheit, Trail)
- **Sozial:** Freundschaften, Gleichgesinnte, Gemeinschaft
- **Lernen:** Erfahrene Läufer teilen Wissen
- **Spaß:** Unterhaltung auf langen Läufen
- **Accountability:** Jemand merkt, wenn du fehlst

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Wusstest du?</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Studien zeigen: Läufer, die in Gruppen trainieren, bleiben langfristig aktiver und haben mehr Freude am Laufen. Die soziale Komponente ist einer der stärksten Motivationsfaktoren!
  </p>
</div>

---
### Laufclubs & Gruppen

**Wie finden?**
- Google: "Laufclub + [deine Stadt]"
- Strava: Lokale Clubs suchen
- Lauf-Events: Dort Gruppen kennenlernen
- Laufgeschäfte: Organisieren oft Lauftreffs
- Social Media: Facebook/Instagram Laufgruppen

**Worauf achten?**
- **Niveau:** Anfänger-freundlich oder Wettkampf-orientiert?
- **Tempo:** Verschiedene Pace-Gruppen angeboten?
- **Atmosphäre:** Inklusiv, freundlich, unterstützend?
- **Zeiten:** Passen die Trainingszeiten zu deinem Alltag?
- **Kosten:** Kostenlos oder Mitgliedsbeitrag?

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Community-Typ</th>
      <th className="border p-3 text-left">Beschreibung</th>
      <th className="border p-3 text-left">Für wen?</th>
      <th className="border p-3 text-left">Kosten</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Laufverein</strong></td>
      <td className="border p-3">Organisiert, Training, Wettkämpfe</td>
      <td className="border p-3">Alle Level, Wettkampf-orientiert</td>
      <td className="border p-3">50-200€/Jahr</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Lauftreff</strong></td>
      <td className="border p-3">Informell, regelmäßig, locker</td>
      <td className="border p-3">Anfänger, Hobby-Läufer</td>
      <td className="border p-3">Meist kostenlos</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Parkrun</strong></td>
      <td className="border p-3">5 km, jeden Samstag, weltweit</td>
      <td className="border p-3">Alle (Gehen bis Sprint)</td>
      <td className="border p-3">Kostenlos!</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Online Community</strong></td>
      <td className="border p-3">Strava, Reddit, Facebook</td>
      <td className="border p-3">Alle, besonders Alleinläufer</td>
      <td className="border p-3">Kostenlos</td>
    </tr>
  </tbody>
</table>

---
### Parkrun: Die globale Lauf-Revolution

**Was ist Parkrun?**
- Kostenloser 5-km-Lauf jeden Samstag morgen
- Weltweit in über 20 Ländern
- Alle sind willkommen (Gehen, Joggen, Laufen)
- Gemeinschafts-Fokus, nicht nur Wettkampf
- Zeitnahme und Ergebnisse online

**Warum Parkrun?**
- **Niedrige Hürde:** Kostenlos, kein Anmelden, komm einfach
- **Gemeinschaft:** Alle Level, freundlich, inklusiv
- **Regelmäßigkeit:** Jeden Samstag, feste Routine
- **Fortschritt:** Zeiten vergleichen, PBs (Personal Bests) feiern
- **Reisen:** Parkrun-Tourismus (bei Reisen lokalen Parkrun besuchen!)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Parkrun starten</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    <strong>Schritt 1:</strong> Registriere dich kostenlos auf parkrun.com (Barcode bekommen)
  </p>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    <strong>Schritt 2:</strong> Finde deinen lokalen Parkrun (Website/App)
  </p>
  <p className="text-sm text-green-700 dark:text-green-300">
    <strong>Schritt 3:</strong> Samstag morgen hingehen, Barcode zeigen, laufen, Spaß haben!
  </p>
</div>

---
### Laufen mit Anderen: Tipps

**Tempo anpassen:**
- Laufe im Tempo des langsamsten Läufers (bei Easy Runs)
- Konversationstempo = soziales Laufen
- Ego zu Hause lassen (nicht angeben!)

**Etikette:**
- Pünktlich sein
- Tempo des Langsamsten respektieren
- Nicht ständig auf die Uhr schauen
- Positiv und unterstützend sein
- Neue Läufer willkommen heißen

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">📋 Lauf-Events zum Mitmachen</h4>
  <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
    <p><strong>Parkrun:</strong> 5 km, jeden Samstag, kostenlos</p>
    <p><strong>Fun Runs:</strong> 5-10 km, Spaß-Events (Color Run, Mud Run)</p>
    <p><strong>Benefiz-Läufe:</strong> Laufen für guten Zweck</p>
    <p><strong>Firmenläufe:</strong> Mit Kollegen laufen</p>
    <p><strong>Staffel-Läufe:</strong> Teamwork! (z.B. Ekiden)</p>
  </div>
</div>

---
### Zusammenfassung

**Key Takeaways:**
- 🤝 **Gemeinsam laufen** = mehr Motivation, Sicherheit, Freude
- 🏃‍♀️ **Parkrun:** Kostenlos, jeden Samstag, weltweit, alle Level
- 🏢 **Laufvereine:** Organisiert, Wettkämpfe, verschiedene Gruppen
- 📱 **Online:** Strava, Facebook, Reddit für virtuelle Community
- 🎯 **Tipp:** Geh zu einem Parkrun - niedrigste Einstiegshürde!
- ❤️ **Laufen verbindet** - die Community ist eine der besten Seiten des Sports
    `,
    en: `
### Running Community: Better Together! 🤝

Running can be lonely - but it doesn't have to be! A running community offers motivation, friendship, safety, and makes running even better. This module shows how to find your running community.

---
### Why Run Together?

**Benefits:**
- **Motivation:** Appointment = you show up (even without desire)
- **Safety:** Not alone (especially darkness, trail)
- **Social:** Friendships, like-minded people, community
- **Learning:** Experienced runners share knowledge
- **Fun:** Conversation on long runs
- **Accountability:** Someone notices when you're absent

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Did You Know?</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Studies show: Runners who train in groups stay active longer and enjoy running more. The social component is one of the strongest motivation factors!
  </p>
</div>

---
### Running Clubs & Groups

**How to Find?**
- Google: "Running club + [your city]"
- Strava: Search for local clubs
- Running events: Meet groups there
- Running stores: Often organize group runs
- Social media: Facebook/Instagram running groups

**What to Look For?**
- **Level:** Beginner-friendly or competition-oriented?
- **Pace:** Different pace groups offered?
- **Atmosphere:** Inclusive, friendly, supportive?
- **Times:** Do training times fit your schedule?
- **Cost:** Free or membership fee?

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Community Type</th>
      <th className="border p-3 text-left">Description</th>
      <th className="border p-3 text-left">For Whom?</th>
      <th className="border p-3 text-left">Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Running Club</strong></td>
      <td className="border p-3">Organized, training, races</td>
      <td className="border p-3">All levels, competition-oriented</td>
      <td className="border p-3">$50-200/year</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Running Group</strong></td>
      <td className="border p-3">Informal, regular, casual</td>
      <td className="border p-3">Beginners, hobby runners</td>
      <td className="border p-3">Usually free</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Parkrun</strong></td>
      <td className="border p-3">5 km, every Saturday, worldwide</td>
      <td className="border p-3">Everyone (walk to sprint)</td>
      <td className="border p-3">Free!</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Online Community</strong></td>
      <td className="border p-3">Strava, Reddit, Facebook</td>
      <td className="border p-3">Everyone, especially solo runners</td>
      <td className="border p-3">Free</td>
    </tr>
  </tbody>
</table>

---
### Parkrun: The Global Running Revolution

**What is Parkrun?**
- Free 5 km run every Saturday morning
- Worldwide in over 20 countries
- Everyone welcome (walk, jog, run)
- Community focus, not just competition
- Timing and results online

**Why Parkrun?**
- **Low barrier:** Free, no sign-up, just come
- **Community:** All levels, friendly, inclusive
- **Regularity:** Every Saturday, fixed routine
- **Progress:** Compare times, celebrate PBs (Personal Bests)
- **Travel:** Parkrun tourism (visit local parkrun when traveling!)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Start Parkrun</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    <strong>Step 1:</strong> Register free at parkrun.com (get barcode)
  </p>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    <strong>Step 2:</strong> Find your local parkrun (website/app)
  </p>
  <p className="text-sm text-green-700 dark:text-green-300">
    <strong>Step 3:</strong> Go Saturday morning, show barcode, run, have fun!
  </p>
</div>

---
### Running with Others: Tips

**Adjust Pace:**
- Run at slowest runner's pace (for easy runs)
- Conversational pace = social running
- Leave ego at home (don't show off!)

**Etiquette:**
- Be punctual
- Respect the slowest runner's pace
- Don't constantly check your watch
- Be positive and supportive
- Welcome new runners

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">📋 Running Events to Try</h4>
  <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
    <p><strong>Parkrun:</strong> 5 km, every Saturday, free</p>
    <p><strong>Fun Runs:</strong> 5-10 km, fun events (Color Run, Mud Run)</p>
    <p><strong>Charity Runs:</strong> Running for a good cause</p>
    <p><strong>Corporate Runs:</strong> Running with colleagues</p>
    <p><strong>Relay Races:</strong> Teamwork! (e.g., Ekiden)</p>
  </div>
</div>

---
### Summary

**Key Takeaways:**
- 🤝 **Running together** = more motivation, safety, joy
- 🏃‍♀️ **Parkrun:** Free, every Saturday, worldwide, all levels
- 🏢 **Running clubs:** Organized, races, various groups
- 📱 **Online:** Strava, Facebook, Reddit for virtual community
- 🎯 **Tip:** Go to a parkrun - lowest entry barrier!
- ❤️ **Running connects** - community is one of the best parts of the sport
    `
  },

  task: {
    de: {
      title: 'Laufgemeinschaft finden',
      description: 'Finde und teste eine Laufgemeinschaft in deiner Nähe.',
      checklist: [
        { text: 'Lokalen Laufclub oder Lauftreff recherchieren' },
        { text: 'Für Parkrun registrieren (parkrun.com)' },
        { text: 'An einem Parkrun oder Lauftreff teilnehmen' },
        { text: 'Strava-Club beitreten (lokal oder thematisch)' },
        { text: 'Einen Lauf mit Freund/Bekanntem verabreden' },
        { text: 'Für ein Lauf-Event anmelden (5K/10K)' }
      ]
    },
    en: {
      title: 'Find Running Community',
      description: 'Find and try a running community near you.',
      checklist: [
        { text: 'Research local running club or group' },
        { text: 'Register for parkrun (parkrun.com)' },
        { text: 'Attend a parkrun or running group' },
        { text: 'Join a Strava club (local or thematic)' },
        { text: 'Schedule a run with a friend' },
        { text: 'Sign up for a running event (5K/10K)' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was ist Parkrun?',
        back: 'Kostenloser 5-km-Lauf, jeden Samstag morgen, weltweit in 20+ Ländern. Alle willkommen (Gehen bis Sprint). Registrierung auf parkrun.com, Barcode zeigen, loslaufen!'
      },
      {
        front: 'Vorteile von Laufgruppen?',
        back: 'Motivation (Verabredung), Sicherheit (nicht allein), soziale Kontakte, Wissensaustausch, Spaß auf langen Läufen, Accountability.'
      },
      {
        front: 'Etikette beim Gruppenlaufen?',
        back: 'Tempo des Langsamsten respektieren, pünktlich sein, positiv und unterstützend sein, Ego zu Hause lassen, neue Läufer willkommen heißen.'
      }
    ],
    en: [
      {
        front: 'What is parkrun?',
        back: 'Free 5 km run, every Saturday morning, worldwide in 20+ countries. Everyone welcome (walk to sprint). Register at parkrun.com, show barcode, go!'
      },
      {
        front: 'Benefits of running groups?',
        back: 'Motivation (appointment), safety (not alone), social contacts, knowledge sharing, fun on long runs, accountability.'
      },
      {
        front: 'Etiquette for group running?',
        back: "Respect slowest runner's pace, be punctual, be positive and supportive, leave ego at home, welcome new runners."
      }
    ]
  }
};
