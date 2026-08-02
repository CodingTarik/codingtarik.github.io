import React from 'react';

export const runCurriculum = {
  title: "Der Lauf-Kompass",
  description: "Vom absoluten Anfänger zum Marathonläufer – dein kompletter Wegweiser für ein langes Läuferleben.",
  phases: [
    {
      title: "Phase 1: Die Fundamente (Woche 1-8)",
      description: "Aller Anfang ist... wichtig! Hier legst du die Basis für ein verletzungsfreies Läuferleben.",
      backgroundImage: "linear-gradient(to bottom right, #ecfdf5, #d1fae5)",
      modules: [
        {
          title: "Modul 1.1: Einführung & Philosophie",
          illustration: {
             url: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=300&auto=format&fit=crop",
             alt: "Runner tying shoes"
          },
          topics: [
            {
              title: "Was ist Laufen?",
              details: ["Natürliche Bewegung & Lebensstil", "Physische Vorteile (Herz, Gewicht, Knochen)", "Mentale Vorteile (Stressabbau, Endorphine)"]
            },
            {
              title: "Laufen als Lebensstil",
              details: ["Nachhaltigkeit & Langfristigkeit", "Soziale Aspekte (Community)", "Warum wir laufen"]
            },
            {
              title: "Praxis: Der erste Schritt",
              tasks: ["Gehe 30 Min spazieren", "Beobachte Atmung & Haltung"]
            }
          ]
        },
        {
          title: "Modul 1.2: Ausrüstung & Kleidung",
          illustration: {
            url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=300&auto=format&fit=crop",
            alt: "Running Shoes"
          },
          topics: [
            {
              title: "Laufschuhe - Das Fundament",
              details: ["Warum Laufanalyse wichtig ist", "Schuhtypen (Neutral, Stabilität)", "Passform & Lebensdauer (600-800km)"]
            },
            {
              title: "Kleidung & Schichtenprinzip",
              details: ["Funktion vor Mode", "Zwiebelprinzip (Base, Mid, Outer)", "Kleidung nach Temperatur"]
            },
            {
              title: "Praxis: Ausrüstungs-Check",
              tasks: ["Laufanalyse machen lassen", "Wohlfühltemperatur testen"]
            }
          ]
        },
        {
          title: "Modul 1.3: Grundlagen der Lauftechnik",
          topics: [
            {
              title: "Körperhaltung (Posture)",
              details: ["Aufrecht, Schultern entspannt", "Blick geradeaus", "Hüfte neutral"]
            },
            {
              title: "Armhaltung & -bewegung",
              details: ["90° Winkel", "Parallel zur Laufrichtung", "Kein Mitschwingen der Schultern"]
            },
            {
              title: "Fußaufsatz & Schrittfrequenz",
              details: ["Natürlicher Aufsatz", "Cadence (Ziel: 170-180 Schritte/Min)", "Leiser Auftritt"]
            },
            {
               title: "Praxis: Technik-Drills",
               tasks: ["Vor Spiegel Haltung üben", "Schritte pro Minute zählen"]
            }
          ]
        },
        {
          title: "Modul 1.4: Erste Schritte (Walk-Run)",
          topics: [
            {
              title: "Die Walk-Run-Methode",
              details: ["Verletzungsprävention für Gelenke", "Struktur: Gehen -> Laufen -> Gehen", "Beispiel: 1 Min Laufen, 2 Min Gehen"]
            },
            {
              title: "Laufzeiten & Distanzen",
              details: ["Konversationstempo ('Talk Test')", "3x pro Woche, 20-30 Min total", "Zeit > Distanz"]
            },
            {
               title: "Praxis: Erster Lauf",
               tasks: ["20 Min Walk-Run absolvieren", "Aufwärmen nicht vergessen"]
            }
          ]
        },
        {
           title: "Modul 1.5: Trainingsplanung & Prävention",
           topics: [
              { title: "Die 10%-Regel", details: ["Steigerung max 10% pro Woche", "Verhindert Überlastung"] },
              { title: "Verletzungen erkennen", details: ["ITBS, Shin Splints, Plantarfasziitis", "Schmerz = Stoppen!"] },
              { title: "Kräftigung & Dehnen", details: ["Core-Training integrieren", "Dynamisch vor, Statisch nach dem Lauf"] }
           ]
        }
      ]
    },
    {
      title: "Phase 2: Aufbau & Konsolidierung (Woche 9-20)",
      description: "Du läufst regelmäßig. Jetzt bauen wir Distanz und Variation auf.",
      backgroundImage: "linear-gradient(to bottom right, #ecfdf5, #a7f3d0)",
      modules: [
        {
          title: "Modul 2.1: Kontinuierliches Laufen",
          topics: [
             { title: "Vom Walk-Run zum Dauerlauf", details: ["Ziel: 20-30 Min durchlaufen", "Tempo: Easy Run"] },
             { title: "Distanzsteigerung", details: ["Von 3km auf 5km", "Langsame Progression"] }
          ]
        },
        {
          title: "Modul 2.2: Tempo-Variation",
          illustration: {
             url: "https://images.unsplash.com/photo-1533560906234-85425e8e669f?q=80&w=300&auto=format&fit=crop",
             alt: "Stopwatch"
          },
          topics: [
             { title: "Easy Run", details: ["80% des Trainings", "Konversationstempo", "Basis-Ausdauer"] },
             { title: "Tempo Run", details: ["'Comfortably Hard'", "20-30 Min anstrengend aber kontrolliert"] },
             { title: "Praxis: Tempo fühlen", tasks: ["30 Min Easy Run (Reden!)", "15 Min Tempo Run"] }
          ]
        },
        {
           title: "Modul 2.3: Intervalltraining Basics",
           topics: [
              { title: "Was sind Intervalle?", details: ["Schnell + Erholung", "Verbessert VO2max"] },
              { title: "Fartlek (Fahrtspiel)", details: ["Unstrukturiertes Spiel mit Tempo", "Spaß & Flexibilität"] },
              { title: "Praxis: Fartlek", tasks: ["30 Min Fartlek im Park"] }
           ]
        },
        {
           title: "Modul 2.4: Der Long Run",
           topics: [
              { title: "Mentale & physische Ausdauer", details: ["Längster Lauf der Woche", "Sehr langsam!"] },
              { title: "Planung", details: ["20-30% der Wochenkilometer", "Max 2.5-3 Stunden"] }
           ]
        },
        {
           title: "Modul 2.6: Cross- & Krafttraining",
           topics: [
              { title: "Warum Cross-Training?", details: ["Verletzungsprävention", "Mentale Abwechslung"] },
              { title: "Optionen", details: ["Radfahren, Schwimmen, Yoga"] },
              { title: "Kraft für Läufer", details: ["Core, Beine, Hüfte", "2x pro Woche 20-30 Min"] }
           ]
        }
      ]
    },
    {
      title: "Phase 3: Spezialisierung & Distanzen (Woche 21-36)",
      description: "Erste Wettkampf-Distanzen: 5K, 10K und Halbmarathon.",
      backgroundImage: "linear-gradient(to bottom right, #d1fae5, #6ee7b7)",
      modules: [
        {
           title: "Modul 3.1: 5K & 10K Training",
           topics: [
              { title: "5K Ziel", details: ["Durchlaufen ohne Pause", "Fokus Ausdauer"] },
              { title: "10K Steigerung", details: ["Mehr Long Runs", "Intervalltraining (800m Wiederholungen)"] },
              { title: "Race-Strategie", details: ["Negative Splits", "Start nicht zu schnell"] }
           ]
        },
        {
           title: "Modul 3.3: Halbmarathon (21.1 km)",
           illustration: {
              url: "https://images.unsplash.com/photo-1552674605-46d5387575b2?q=80&w=300&auto=format&fit=crop",
              alt: "Half Marathon"
           },
           topics: [
              { title: "Die Herausforderung", details: ["Doppelte 10K Distanz", "12-16 Wochen Vorbereitung"] },
              { title: "Trainingsstruktur", details: ["Long Run bis 20-22km", "40-60km Wochenvolumen"] },
              { title: "Ernährung im Lauf", details: ["Gels testen", "Hydration"] }
           ]
        },
        {
           title: "Modul 3.5: Hill Training",
           topics: [
              { title: "Warum Hügel?", details: ["Kraftaufbau", "Lauftechnik", "Mentale Stärke"] },
              { title: "Praxis: Hill Repeats", tasks: ["6x 30 Sek schnell hoch, langsam runter"] }
           ]
        }
      ]
    },
    {
      title: "Phase 4: Marathon & Fortgeschritten (Woche 37-52)",
      description: "Die Königsdisziplin. 42,195 Kilometer Willenskraft.",
      backgroundImage: "linear-gradient(to bottom right, #a7f3d0, #34d399)",
      modules: [
        {
           title: "Modul 4.1: Marathon Vorbereitung",
           illustration: {
              url: "https://images.unsplash.com/photo-1530143311094-34d807799e8f?q=80&w=300&auto=format&fit=crop",
              alt: "Marathon Finish"
           },
           topics: [
              { title: "Respekt vor der Distanz", details: ["16-20 Wochen Plan", "Long Runs bis 32-35km"] },
              { title: "Die Wand (The Wall)", details: ["Glykogen leer", "Vermeidung durch Pacing & Ernährung"] },
              { title: "Praxis: Strategie", tasks: ["30km Lauf mit Race-Ernährung", "Negative Split Strategie üben"] }
           ]
        },
        {
           title: "Modul 4.2: Ernährung & Tapering",
           topics: [
              { title: "Carb-Loading", details: ["Speicher füllen 2-3 Tage vorher"] },
              { title: "Race-Nutrition", details: ["Gels alle 45-60 Min", "Elektrolyte"] },
              { title: "Tapering", details: ["Volumen reduzieren, Intensität halten", "Regeneration vor dem Rennen"] }
           ]
        },
        {
           title: "Modul 4.5: Mentale Vorbereitung",
           topics: [
              { title: "Visualisierung", details: ["Rennverlauf & Ziellinie vorstellen"] },
              { title: "Mantras", details: ["Positive Sätze für schwere Momente"] },
              { title: "Umgang mit Schmerz", details: ["Unterschied Schmerz vs. Verletzung"] }
           ]
        }
      ]
    },
    {
       title: "Phase 5: Spezialisierungen & Extras",
       description: "Über den Asphalt hinaus: Trail, Ultra und mehr.",
       backgroundImage: "linear-gradient(to bottom right, #6ee7b7, #10b981)",
       modules: [
          {
             title: "Modul 5.1: Trail Running",
             illustration: {
                url: "https://images.unsplash.com/photo-1501147830916-ce44a6359892?q=80&w=300&auto=format&fit=crop",
                alt: "Trail Running"
             },
             topics: [
                { title: "Laufen im Gelände", details: ["Technik bergauf/bergab", "Ausrüstung (Schuhe, Rucksack)"] },
                { title: "Sicherheit", details: ["Route kennen", "Erste Hilfe"] }
             ]
          },
          {
             title: "Modul 5.2: Ultra Running",
             topics: [
                { title: "Jenseits des Marathons", details: ["50km bis 100 Meilen", "Mentale Härte"] },
                { title: "Training", details: ["Back-to-Back Long Runs", "Power Hiking"] }
             ]
          },
          {
             title: "Modul 5.4: Extremes Wetter",
             topics: [
                { title: "Hitze & Kälte", details: ["Anpassung & Kleidung", "Hydration"] },
                { title: "Regen & Nässe", details: ["Ausrüstung & Sichtbarkeit"] }
             ]
          }
       ]
    },
    {
       title: "Phase 6: Regeneration & Gesundheit",
       description: "Laufen ist gut, Regeneration macht dich besser.",
       backgroundImage: "linear-gradient(to bottom right, #34d399, #059669)",
       modules: [
          {
             title: "Modul 6.1: Aktive & Passive Regeneration",
             topics: [
                { title: "Schlaf", details: ["Wichtigstes Recovery-Tool", "7-9 Stunden"] },
                { title: "Aktive Erholung", details: ["Spazieren, Yoga, leichtes Joggen"] }
             ]
          },
          {
             title: "Modul 6.2: Verletzungen managen",
             topics: [
                { title: "RICE-Methode", details: ["Rest, Ice, Compression, Elevation"] },
                { title: "Wann zum Arzt?", details: ["Anhaltende Schmerzen, Schwellungen"] }
             ]
          },
          {
             title: "Modul 6.4: Tools",
             topics: [
                { title: "Foam Rolling", details: ["Selbstmassage für Faszien"] },
                { title: "Mobilität", details: ["Hüftöffner, Waden-Dehnung"] }
             ]
          }
       ]
    }
  ]
};


