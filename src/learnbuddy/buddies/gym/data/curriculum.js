import React from 'react';

export const gymCurriculum = {
  title: "GymBuddy Master Path",
  description: "Vom Anfänger zum Athleten – dein umfassender Guide für Krafttraining, Muskelaufbau und Ernährung.",
  phases: [
    {
      title: "Phase 1: Grundlagen & Einstieg (Woche 1-4)",
      description: "Verstehe die Basics, lerne die Sicherheit und finde dich im Gym zurecht.",
      backgroundImage: "linear-gradient(to bottom right, #ffe4e6, #fecdd3)",
      modules: [
        {
          title: "Modul 1.1: Einführung & Mindset",
          illustration: {
            url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=300&auto=format&fit=crop",
            alt: "Gym Dumbbells"
          },
          topics: [
            {
              title: "Was ist Krafttraining?",
              details: ["Definition & Ziele (Hypertrophie, Kraft, Gesundheit)", "Mythen entlarvt"]
            },
            {
              title: "Trainingsarten",
              details: ["Bodybuilding vs. Powerlifting vs. CrossFit", "Finde deinen Weg"]
            }
          ]
        },
        {
          title: "Modul 1.2: Sicherheit & Etikette",
          topics: [
            {
              title: "Verletzungsprävention",
              details: ["Technik > Gewicht", "Aufwärmen ist Pflicht", "Schmerz vs. Muskelkater"]
            },
            {
              title: "Spotting & Failen",
              details: ["Sicher ablegen (Roll of Shame)", "Wann Spotter nötig ist"]
            },
            {
              title: "Studio-Regeln",
              details: ["Gewichte wegräumen!", "Handtuch benutzen", "Geräte teilen"]
            }
          ]
        },
        {
          title: "Modul 1.3: Das Gym-Vokabular",
          topics: [
            {
              title: "Basics",
              details: ["Reps (Wiederholungen), Sets (Sätze), Pause", "Intensität & Volumen"]
            },
            {
              title: "Fortgeschritten",
              details: ["Konzentrisch/Exzentrisch", "Compound vs. Isolation", "ROM (Range of Motion)"]
            }
          ]
        },
        {
           title: "Modul 1.4: Anatomie-Crashkurs",
           topics: [
              { title: "Oberkörper Push", details: ["Brust, Schulter (Vorder/Seite), Trizeps"] },
              { title: "Oberkörper Pull", details: ["Rücken (Lat, Trap), Hintere Schulter, Bizeps"] },
              { title: "Unterkörper & Core", details: ["Quads, Hamstrings, Gluteus, Waden, Abs"] }
           ]
        }
      ]
    },
    {
      title: "Phase 2: Die Übungs-Bibliothek",
      description: "Lerne die wichtigsten Übungen für jede Muskelgruppe mit perfekter Technik.",
      backgroundImage: "linear-gradient(to bottom right, #fecdd3, #fda4af)",
      modules: [
        {
          title: "Modul 2.1: Brust (Pectoralis)",
          illustration: {
             url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=300&auto=format&fit=crop",
             alt: "Bench Press"
          },
          topics: [
            { title: "Flachbank", details: ["Langhantel-Bankdrücken", "Kurzhantel-Drücken", "Liegestütze"] },
            { title: "Schrägbank (Obere Brust)", details: ["Incline Press (LH/KH)"] },
            { title: "Isolation", details: ["Flys, Cable Crossover, Butterfly"] }
          ]
        },
        {
          title: "Modul 2.2: Rücken (Back)",
          topics: [
            { title: "Vertikales Ziehen (Breite)", details: ["Klimmzüge (Pull-up/Chin-up)", "Latzug"] },
            { title: "Horizontales Ziehen (Dichte)", details: ["Langhantel-Rudern", "Kabel-Rudern", "Einarmiges Rudern"] },
            { title: "Unterer Rücken", details: ["Kreuzheben (Deadlift)", "Hyperextensions"] }
          ]
        },
        {
          title: "Modul 2.3: Schultern (Delts)",
          topics: [
            { title: "Drücken", details: ["Overhead Press (Military Press)", "Kurzhantel-Drücken"] },
            { title: "Seitheben (Breite)", details: ["Lateral Raises (KH/Kabel) - Technik ist alles!"] },
            { title: "Hintere Schulter (Gesundheit)", details: ["Face Pulls", "Reverse Flys"] }
          ]
        },
        {
          title: "Modul 2.4: Beine (Legs)",
          illustration: {
             url: "https://images.unsplash.com/photo-1574680319311-129c990d7ec3?q=80&w=300&auto=format&fit=crop",
             alt: "Squat"
          },
          topics: [
            { title: "Quadriceps", details: ["Squats (Kniebeugen)", "Beinpresse", "Lunges", "Beinstrecker"] },
            { title: "Hamstrings & Glutes", details: ["Rumänisches Kreuzheben (RDL)", "Hip Thrusts", "Beinbeuger"] },
            { title: "Waden", details: ["Wadenheben (Stehend/Sitzend)"] }
          ]
        },
        {
           title: "Modul 2.5: Arme (Bizeps/Trizeps)",
           topics: [
              { title: "Trizeps (Masse)", details: ["Enges Bankdrücken", "Dips", "Pushdowns", "Skullcrushers"] },
              { title: "Bizeps", details: ["Langhantel-Curls", "Hammer Curls", "Incline Curls"] }
           ]
        }
      ]
    },
    {
      title: "Phase 3: Trainingsplanung & Progression (Woche 13-24)",
      description: "Strukturiertes Training statt Zufall. Werde stärker und baue systematisch auf.",
      backgroundImage: "linear-gradient(to bottom right, #fda4af, #fb7185)",
      modules: [
        {
           title: "Modul 3.1: Splits & Pläne",
           topics: [
              { title: "Ganzkörper (GK)", details: ["Für Anfänger (2-3x/Woche)", "Hohe Frequenz"] },
              { title: "Oberkörper/Unterkörper (OK/UK)", details: ["Fortgeschritten (4x/Woche)", "Gute Balance"] },
              { title: "Push/Pull/Legs (PPL)", details: ["Mittelstufe (3-6x/Woche)", "Beliebt & Effektiv"] }
           ]
        },
        {
           title: "Modul 3.2: Progressive Overload",
           illustration: {
              url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=300&auto=format&fit=crop",
              alt: "Weight Plates"
           },
           topics: [
              { title: "Das Prinzip", details: ["Mehr Reiz = Mehr Wachstum", "Körper passt sich an"] },
              { title: "5 Wege zur Steigerung", details: ["Mehr Gewicht", "Mehr Reps", "Mehr Sätze", "Weniger Pause", "Bessere Technik"] }
           ]
        },
        {
           title: "Modul 3.3: Intensität steuern",
           topics: [
              { title: "Wiederholungsbereiche", details: ["6-8 (Kraft)", "8-12 (Hypertrophie)", "12-15+ (Kraftausdauer)"] },
              { title: "RIR (Reps in Reserve)", details: ["Training nah am Versagen (1-3 RIR)", "Muskelversagen sparsam nutzen"] },
              { title: "Deload", details: ["Geplante Erholungswoche alle 4-8 Wochen"] }
           ]
        },
        {
           title: "Modul 3.4: Tracking",
           topics: [
              { title: "Logbuch führen", details: ["Apps oder Papier", "Du kannst nicht managen, was du nicht misst"] },
              { title: "Fortschritt", details: ["Zahlen schlagen Gefühle"] }
           ]
        }
      ]
    },
    {
      title: "Phase 4: Ernährung (Fuel)",
      description: "Muskeln werden in der Küche gemacht. Kalorien, Makros und Timing.",
      backgroundImage: "linear-gradient(to bottom right, #fb7185, #f43f5e)",
      modules: [
        {
           title: "Modul 4.1: Kalorienbilanz",
           illustration: {
              url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=300&auto=format&fit=crop",
              alt: "Healthy Food"
           },
           topics: [
              { title: "Bulk (Aufbau)", details: ["Leichter Überschuss (+200-500 kcal)", "Nötig für Muskelaufbau"] },
              { title: "Cut (Defizit)", details: ["Leichtes Defizit (-300-500 kcal)", "Fettabbau bei Muskelerhalt"] },
              { title: "Tracking", details: ["Apps nutzen", "Erhaltungskalorien finden"] }
           ]
        },
        {
           title: "Modul 4.2: Makronährstoffe",
           topics: [
              { title: "Protein", details: ["Baustoff (1.6-2.2g pro kg)", "Quellen: Fleisch, Fisch, Eier, Milch, Tofu, Linsen"] },
              { title: "Kohlenhydrate", details: ["Energie fürs Training", "Reis, Hafer, Kartoffeln, Obst"] },
              { title: "Fette", details: ["Hormone & Gesundheit (0.8-1g pro kg)", "Nüsse, Öl, Avocado, Lachs"] }
           ]
        },
        {
           title: "Modul 4.4: Supplements",
           topics: [
              { title: "Die 'Big 3'", details: ["Protein-Pulver (Convenience)", "Kreatin (Kraft & Leistung)", "Vitamin D3 (Gesundheit)"] },
              { title: "Geldverschwendung", details: ["BCAAs, Testo-Booster, Fatburner"] }
           ]
        }
      ]
    },
    {
      title: "Phase 5: Regeneration & Gesundheit",
      description: "Wachstum passiert in der Ruhephase, nicht im Training.",
      backgroundImage: "linear-gradient(to bottom right, #f43f5e, #e11d48)",
      modules: [
        {
           title: "Modul 5.1: Schlaf",
           topics: [
              { title: "Das #1 Tool", details: ["7-9 Stunden", "Wachstumshormone", "Schlafhygiene"] }
           ]
        },
        {
           title: "Modul 5.2: Warm-up & Cool-down",
           topics: [
              { title: "Warm-up Routine", details: ["Puls erhöhen", "Dynamisches Dehnen", "Aufwärmsätze"] },
              { title: "Cool-down", details: ["Statisches Dehnen (optional)", "Foam Rolling"] }
           ]
        },
        {
           title: "Modul 5.5: Cardio",
           topics: [
              { title: "Cardio & Gains", details: ["Herzgesundheit wichtig", "Mäßiges Cardio stört Aufbau nicht"] },
              { title: "LISS vs HIIT", details: ["Low Intensity (Erholung) vs High Intensity"] }
           ]
        }
      ]
    },
    {
       title: "Phase 6: Spezialisierung Calisthenics",
       description: "Beherrsche dein eigenes Körpergewicht.",
       backgroundImage: "linear-gradient(to bottom right, #e11d48, #be123c)",
       modules: [
          {
             title: "Modul 6.1: Basics",
             topics: [
                { title: "Relative Kraft", details: ["Kraft im Verhältnis zum Gewicht", "Hebel statt Gewichte"] },
                { title: "Progressionen", details: ["Schwerere Varianten statt mehr Gewicht"] }
             ]
          },
          {
             title: "Modul 6.3: The Big 5 & Skills",
             illustration: {
                url: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=300&auto=format&fit=crop",
                alt: "Calisthenics"
             },
             topics: [
                { title: "Dynamik", details: ["Push-ups, Pull-ups, Dips, Squats"] },
                { title: "Statik (Skills)", details: ["L-Sit, Handstand, Front Lever"] }
             ]
          }
       ]
    }
  ]
};

