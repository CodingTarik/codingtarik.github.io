import React from 'react';

export const cookCurriculum = {
  title: "Der Küchen-Kompass",
  description: "Vom absoluten Anfänger zum selbstbewussten Hobbykoch – dein kompletter kulinarischer Fahrplan.",
  phases: [
    {
      title: "Phase 1: Die Fundamente der Küche",
      description: "Baue das Fundament für alles, was folgt. Organisation, Sicherheit und Verständnis sind der Schlüssel.",
      backgroundImage: "linear-gradient(to bottom, #fffbeb, #fef3c7)",
      modules: [
        {
          title: "Modul 1.1: Einführung & Philosophie",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <defs>
                <linearGradient id="chefGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fcd34d" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="90" fill="#fffbeb" />
              <path d="M60 140 C60 140 60 90 100 90 C140 90 140 140 140 140 L60 140 Z" fill="url(#chefGrad)" stroke="#b45309" strokeWidth="3" />
              <path d="M60 140 L140 140 L140 160 L60 160 Z" fill="#fff" stroke="#b45309" strokeWidth="3" />
              <circle cx="100" cy="90" r="35" fill="#fef3c7" stroke="#b45309" strokeWidth="3" />
              <path d="M100 55 L100 20" stroke="#b45309" strokeWidth="2" />
              <path d="M80 60 L70 30" stroke="#b45309" strokeWidth="2" />
              <path d="M120 60 L130 30" stroke="#b45309" strokeWidth="2" />
            </svg>
          ),
          topics: [
            {
              title: "Was ist Kochen?",
              details: [
                "Handwerk, Kreativität, Notwendigkeit",
                "Die Küche als Arbeitsplatz (Kalte Zone, Heiße Zone)",
                "Philosophie des Kochens (Respekt vor dem Lebensmittel, Saisonalität, Regionalität)"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Gehe über einen Wochenmarkt und identifiziere 5 Gemüsesorten, die gerade Saison haben."
              ]
            }
          ]
        },
        {
          title: "Modul 1.2: Mise en Place - Das Fundament",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#ecfccb" />
              <rect x="40" y="100" width="120" height="10" rx="2" fill="#78350f" />
              <path d="M50 90 L70 90 L75 100 L45 100 Z" fill="#fff" stroke="#57534e" strokeWidth="2" />
              <path d="M85 85 L115 85 L120 100 L80 100 Z" fill="#fff" stroke="#57534e" strokeWidth="2" />
              <path d="M130 90 L150 90 L155 100 L125 100 Z" fill="#fff" stroke="#57534e" strokeWidth="2" />
              <circle cx="100" cy="80" r="5" fill="#ef4444" />
              <circle cx="60" cy="85" r="5" fill="#22c55e" />
            </svg>
          ),
          topics: [
            {
              title: "Was ist 'Mise en Place'?",
              details: [
                "Alles an seinem Platz",
                "Warum es die wichtigste Regel ist (Stressreduktion, Effizienz)"
              ]
            },
            {
              title: "Praktische Umsetzung",
              details: [
                "Rezept komplett durchlesen! (Der häufigste Fehler)",
                "Zutaten abwiegen & bereitstellen (Schüsseln)",
                "Gemüse/Fleisch vorschneiden",
                "Werkzeuge bereitlegen"
              ]
            },
            {
              title: "Arbeitsplatz-Organisation",
              details: [
                "Sauberes Brett",
                "Abfallschüssel",
                "Feuchtes Tuch unterm Brett"
              ]
            },
            {
              title: "Praktische Übungen",
              type: "exercise",
              details: [
                "Übung 1: Wähle ein einfaches Rezept (z.B. Tomatensauce). Führe ein komplettes 'Mise en Place' durch, BEVOR du den Herd anmachst.",
                "Übung 2: Bereite eine komplette Mise en Place für ein 3-Gänge-Menü vor."
              ]
            }
          ]
        },
        {
          title: "Modul 1.3: Sicherheit & Hygiene",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fee2e2" />
              <path d="M100 40 L140 100 L100 160 L60 100 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" />
              <text x="100" y="120" textAnchor="middle" fill="#fff" fontSize="60" fontWeight="bold">!</text>
            </svg>
          ),
          topics: [
            {
              title: "Persönliche Sicherheit",
              details: [
                "Schnittverletzungen vermeiden",
                "Brandverletzungen: Umgang mit heißen Töpfen (nur trockene Lappen!)",
                "Der Ernstfall: Fettbrand. NIE mit Wasser löschen! (Deckel drauf, Luft entziehen)",
                "Dampfverbrennungen (Deckel vom Körper weg öffnen)",
                "Sicherer Umgang mit Geräten (Mixer, Pürierstab)"
              ]
            },
            {
              title: "Lebensmittelsicherheit (HACCP-Grundlagen)",
              details: [
                "Hände waschen (Wann, wie, warum)",
                "Kreuzkontamination: Rohes Geflügel/Fleisch/Fisch vs. Gemüse/Gegartes",
                "Separate Schneidebretter (Farbsysteme)",
                "Die Temperatur-Gefahrenzone (4°C - 60°C)",
                "Richtiges Auftauen (Im Kühlschrank, nicht bei Raumtemperatur)",
                "Richtiges Kühlen von Resten (Schnell abkühlen lassen)"
              ]
            },
            {
              title: "Küchenhygiene erweitert",
              details: [
                "Arbeitsflächen reinigen: Vor und nach dem Kochen",
                "Schneidebretter richtig reinigen (Holz vs. Kunststoff)",
                "Spülmaschine vs. Handwäsche (Messer NIE in Spülmaschine!)",
                "Kühlschrank regelmäßig reinigen (Schimmel vermeiden)",
                "Geräte reinigen: Mixer, Pürierstab, Schneebesen",
                "Spülschwamm regelmäßig wechseln (Keimschleuder!)",
                "Händewaschen: Vor, während, nach dem Kochen",
                "Haare zusammenbinden, Schmuck ablegen",
                "Lebensmittel richtig lagern (Kühlschrank-Zonen)"
              ]
            }
          ]
        },
        {
          title: "Modul 1.4: Rezepte lesen & Sprache verstehen",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#f0f9ff" />
              <rect x="60" y="50" width="80" height="100" fill="#fff" stroke="#0ea5e9" strokeWidth="2" rx="5" />
              <line x1="70" y1="70" x2="130" y2="70" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="70" y1="85" x2="130" y2="85" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="70" y1="100" x2="110" y2="100" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="70" y1="115" x2="120" y2="115" stroke="#cbd5e1" strokeWidth="2" />
            </svg>
          ),
          topics: [
            {
              title: "Grundlagen",
              details: [
                "Anatomie eines Rezepts (Zutatenliste, Schritte, Zeitangaben)",
                "Maßeinheiten & Umrechnungen (Gramm, Milliliter, EL, TL)",
                "Warum eine Waage genauer ist als Tassen (besonders beim Backen!)"
              ]
            },
            {
              title: "Koch-Vokabular (Basis)",
              details: [
                "Anschwitzen, Anbraten, Ablöschen",
                "Reduzieren, Simmern (Köcheln), Blanchieren",
                "Gratinieren (Überbacken), Montieren (mit Butter binden), Sautieren (Schwenken)"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Nimm ein unbekanntes Rezept. Lies es komplett durch. Markiere alle Begriffe, die du nicht kennst. Schlage sie nach."
              ]
            }
          ]
        },
        {
          title: "Modul 1.5: Ausrüstung & Geräte-Kunde",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#f3f4f6" />
              <path d="M60 60 L140 140" stroke="#4b5563" strokeWidth="15" strokeLinecap="round" />
              <path d="M60 140 L140 60" stroke="#9ca3af" strokeWidth="15" strokeLinecap="round" />
              <circle cx="100" cy="100" r="40" fill="#d1d5db" opacity="0.5" />
            </svg>
          ),
          topics: [
            {
              title: "Messer & Töpfe",
              details: [
                "Die 3 wichtigsten Messer (Kochmesser, Officemesser, Sägemesser)",
                "Töpfe & Pfannen (Materialien: Edelstahl, Gusseisen, Beschichtet - Vor- & Nachteile)"
              ]
            },
            {
              title: "Wichtige Kleingeräte",
              details: [
                "Waage!, Messbecher, Schneidebretter, Schüsseln, Sieb",
                "Das 'kleine' Werkzeug: Sparschäler, Reibe, Knoblauchpresse, Zitruspresse, Schneebesen, Pfannenwender"
              ]
            },
            {
              title: "Herd & Ofen",
              details: [
                "Grundlagen Herdplatte: Gas (direkt), Elektro (träge), Induktion (schnell)",
                "Ober-/Unterhitze (Standard)",
                "Umluft/Heißluft (Ventilator, 20°C niedriger einstellen)",
                "Grillfunktion (Starke Hitze nur von oben)",
                "Vorheizen: Wann und warum?"
              ]
            },
            {
              title: "Spezialgeräte",
              details: [
                "Schnellkochtopf / Druckkochtopf:",
                "  - Funktionsweise: Druck erhöht Siedepunkt",
                "  - Vorteile: Schnelleres Garen, Energieersparnis",
                "  - Verwendung: Hülsenfrüchte, Schmorgerichte, Suppen",
                "  - Sicherheit: Nie überfüllen, Dampf ablassen",
                "Slow Cooker / Crockpot:",
                "  - Funktionsweise: Niedrige Temperatur, langes Garen",
                "  - Vorteile: Meal Prep, zarte Ergebnisse",
                "  - Verwendung: Eintöpfe, Schmorgerichte, Pulled Pork",
                "Mikrowelle richtig nutzen:",
                "  - Nicht nur Aufwärmen: Gemüse dämpfen, Reis kochen",
                "  - Sicherheit: Keine Metalle, Deckel verwenden",
                "  - Gleichmäßiges Erhitzen: Rühren, umdrehen",
                "  - Dampfgarer-Funktion nutzen"
              ]
            },
            {
              title: "Praktische Übungen",
              type: "exercise",
              details: [
                "Identifiziere die Funktionen deines eigenen Ofens.",
                "Teste verschiedene Pfannenmaterialien (beschichtet vs. Edelstahl)."
              ]
            }
          ]
        },
        {
          title: "Modul 1.6: Die Speisekammer",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#ffedd5" />
              <rect x="50" y="60" width="100" height="10" fill="#7c2d12" />
              <rect x="50" y="130" width="100" height="10" fill="#7c2d12" />
              <rect x="60" y="30" width="20" height="30" fill="#c2410c" />
              <rect x="90" y="30" width="20" height="30" fill="#ea580c" />
              <rect x="120" y="30" width="20" height="30" fill="#fdba74" />
              <rect x="60" y="90" width="25" height="40" fill="#fbbf24" />
              <rect x="100" y="90" width="25" height="40" fill="#fcd34d" />
            </svg>
          ),
          topics: [
            {
              title: "Basis-Vorrathaltung",
              details: [
                "Trockenware: Mehl (Typ 405, 550), Zucker, Reis, Nudeln, Linsen",
                "Geschmacksträger: Salz (Jodiert, Meersalz), Pfeffer (ganze Körner!), Brühe",
                "Säure: Essig (Weißwein, Rotwein, Balsamico), Zitronen",
                "Fette: Olivenöl (kaltgepresst), Rapsöl (raffiniert/Bratöl)",
                "Konserven: Gehackte Tomaten, Kichererbsen, Bohnen, Thunfisch",
                "Aromaten: Zwiebeln, Knoblauch, Senf, Tomatenmark, Honig"
              ]
            }
          ]
        },
        {
          title: "Modul 1.7: Milchprodukte & Fette",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#e0f2fe" />
              <path d="M70 60 L90 140 L130 140 L110 60 Z" fill="#fff" stroke="#0284c7" strokeWidth="2" />
              <path d="M140 90 A20 20 0 0 1 140 130" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
              <text x="100" y="110" textAnchor="middle" fill="#0284c7" fontSize="20">MILK</text>
            </svg>
          ),
          topics: [
            {
              title: "Milch & Sahne",
              details: [
                "Milch: Frischmilch, H-Milch, Fettstufen",
                "Schlagsahne: min. 30% Fett (Aufschlagen, Binden)",
                "Saure Sahne: 10% Fett (Kalte Küche)",
                "Schmand: 20-29% Fett (Kochfest)",
                "Crème fraîche: min. 30% Fett (Luxuriös, kochfest)"
              ]
            },
            {
              title: "Andere Milchprodukte",
              details: [
                "Butter: Süßrahm vs. Sauerrahm",
                "Butterschmalz/Ghee: Hoch erhitzbar",
                "Joghurt: Dips, Marinaden",
                "Quark: Backen, Dips",
                "Käse: Frischkäse, Weichkäse, Hartkäse"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Schlage kalte Schlagsahne mit einem Handmixer steif. Beobachte die Phasen (flüssig -> cremig -> steif -> Butter)."
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Phase 2: Fundamentale Kochtechniken",
      description: "Lerne die Handgriffe, die Profis von Amateuren unterscheiden. Messertechnik und Hitzekontrolle.",
      backgroundImage: "linear-gradient(to bottom, #ffedd5, #fed7aa)",
      modules: [
        {
          title: "Modul 2.1: Messerfertigkeiten (Das A&O)",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#e5e7eb" />
              <path d="M140 60 L60 140 L50 130 L130 50 Z" fill="#9ca3af" stroke="#4b5563" strokeWidth="2" />
              <path d="M140 60 L160 80" stroke="#4b5563" strokeWidth="8" strokeLinecap="round" />
              <path d="M90 110 L110 130" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          ),
          topics: [
            {
              title: "Grundlagen",
              details: [
                "Die richtige Haltung des Messers (Pinch Grip)",
                "Die Haltung der Führungshand (Krallengriff!)",
                "Die 3 Grundbewegungen (Wiegeschnitt, Druck-/Zugschnitt, Hacken)",
                "Die 5 klassischen Schnittformen (Julienne, Brunoise, Mirepoix)"
              ]
            },
            {
              title: "Praktische Übungen",
              type: "exercise",
              details: [
                "Apfel: Schälen, vierteln, würfeln",
                "Zwiebel: Feine Würfel (Brunoise)",
                "Karotte: Feine Streifen (Julienne)",
                "Kräuter: Hacken im Wiegeschnitt"
              ]
            }
          ]
        },
        {
          title: "Modul 2.2: Messerpflege",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#d1fae5" />
              <rect x="60" y="80" width="80" height="20" fill="#34d399" rx="2" />
              <line x1="70" y1="90" x2="130" y2="90" stroke="#065f46" strokeWidth="2" />
              <path d="M80 60 L120 140" stroke="#9ca3af" strokeWidth="2" />
            </svg>
          ),
          topics: [
            {
              title: "Pflege & Sicherheit",
              details: [
                "Schärfe = Sicherheit! (Ein stumpfes Messer rutscht ab)",
                "Unterschied Wetzstahl (hält scharf) vs. Schleifstein (macht scharf)",
                "Reinigung & Lagerung (NIE in die Spülmaschine!)"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Lerne, ein Messer sicher am Wetzstahl abzuziehen (5x pro Seite vor dem Kochen)."
              ]
            }
          ]
        },
        {
          title: "Modul 2.3: Gemüse-Vorbereitung",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#dcfce7" />
              <path d="M100 60 L120 40 M100 60 L80 40 M100 60 L100 140" stroke="#166534" strokeWidth="8" strokeLinecap="round" />
              <circle cx="100" cy="50" r="25" fill="#22c55e" opacity="0.8" />
              <circle cx="80" cy="80" r="20" fill="#22c55e" opacity="0.8" />
              <circle cx="120" cy="80" r="20" fill="#22c55e" opacity="0.8" />
            </svg>
          ),
          topics: [
            {
              title: "Techniken",
              details: [
                "Brokkoli/Blumenkohl: Röschen trennen, Strunk schälen",
                "Spargel: Schälen (weiß komplett, grün unten)",
                "Tomaten: Häuten (Blanchieren)",
                "Paprika: Entkernen",
                "Kartoffeln: Schälen & schneiden",
                "Zucchini: Waschen, Enden abschneiden"
              ]
            },
            {
              title: "Praktische Übungen",
              type: "exercise",
              details: [
                "Putze einen Lauch gründlich und schneide ihn in feine Ringe.",
                "Verarbeite einen kompletten Brokkoli (Röschen & Strunk).",
                "Häute 3 Tomaten mit der Blanchier-Methode.",
                "Schneide 5 verschiedene Gemüsesorten in gleichmäßige Würfel."
              ]
            }
          ]
        },
        {
          title: "Modul 2.4: Die 5 Trockenen Hitzearten",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fee2e2" />
              <path d="M50 150 Q100 100 150 150" fill="#f87171" />
              <path d="M70 130 Q100 80 130 130" fill="#ef4444" />
              <path d="M90 110 Q100 90 110 110" fill="#b91c1c" />
            </svg>
          ),
          topics: [
            {
              title: "Methoden",
              details: [
                "1. Braten (Pfanne/Sauté): Hohe Hitze, Röstaromen (Maillard-Reaktion)",
                "2. Rösten (Ofen): Mittlere bis hohe Hitze, trockene Luft",
                "3. Grillen: Sehr hohe Hitze, Strahlung",
                "4. Frittieren: Garen in heißem Fett (160-180°C)",
                "5. Backen: Trockene Hitze im Ofen"
              ]
            },
            {
              title: "Praktische Übungen",
              type: "exercise",
              details: [
                "Röste Wurzelgemüse bei 200°C Umluft.",
                "Brate Hähnchenbrust scharf an.",
                "Frittiere Pommes (oder etwas Kleines) in heißem Öl.",
                "Karamellisiere Zwiebeln langsam in der Pfanne."
              ]
            }
          ]
        },
        {
          title: "Modul 2.5: Die 3 Feuchten Hitzearten",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#e0f2fe" />
              <path d="M50 120 Q75 100 100 120 T150 120" fill="none" stroke="#0ea5e9" strokeWidth="4" />
              <path d="M60 140 Q85 120 110 140 T160 140" fill="none" stroke="#0284c7" strokeWidth="4" />
              <circle cx="80" cy="90" r="5" fill="#bae6fd" />
              <circle cx="120" cy="70" r="8" fill="#bae6fd" />
            </svg>
          ),
          topics: [
            {
              title: "Methoden",
              details: [
                "1. Kochen (Sieden): 100°C (Nudeln, Kartoffeln)",
                "2. Simmern (Köcheln): 85-95°C (Suppen, Eintöpfe) - WICHTIG!",
                "3. Dämpfen/Dünsten: Garen im Wasserdampf oder eigener Flüssigkeit",
                "Blanchieren: Kurzes Kochen, dann abschrecken"
              ]
            },
            {
              title: "Praktische Übungen",
              type: "exercise",
              details: [
                "Dämpfe Brokkoliröschen bis sie 'al dente' sind.",
                "Blanchiere grüne Bohnen und schrecke sie ab.",
                "Dünste Zwiebeln in wenig Fett bis sie glasig sind."
              ]
            }
          ]
        },
        {
          title: "Modul 2.6: Niedrigtemperatur-Techniken",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fdf4ff" />
              <circle cx="100" cy="100" r="40" fill="#f5d0fe" />
              <path d="M100 60 L100 40" stroke="#a855f7" strokeWidth="2" />
              <path d="M135 85 L150 75" stroke="#a855f7" strokeWidth="2" />
            </svg>
          ),
          topics: [
            {
              title: "Methoden",
              details: [
                "Pochieren: Garen in heißer, nicht kochender Flüssigkeit (70-80°C)",
                "Konfieren: Langsames Garen in Fett bei niedriger Temperatur"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Pochiere ein Ei ('Verlorenes Ei') in Essigwasser."
              ]
            }
          ]
        },
        {
          title: "Modul 2.7: Grundnahrungsmittel kochen",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fff7ed" />
              <path d="M60 120 C60 120 80 60 100 60 C120 60 140 120 140 120" fill="#fed7aa" />
              <path d="M70 120 L130 120" stroke="#c2410c" strokeWidth="2" />
            </svg>
          ),
          topics: [
            {
              title: "Nudeln & Reis",
              details: [
                "Nudeln: Viel Salzwasser ('wie Meerwasser'), al dente kochen, Nudelwasser aufheben",
                "Reis: Quellmethode (1:1.5-2) vs. Wassermethode",
                "Basmatireis waschen, Risotto ständig rühren"
              ]
            },
            {
              title: "Kartoffeln & Co.",
              details: [
                "Kartoffeln: Festkochend vs. Mehlig, kalt ansetzen",
                "Hülsenfrüchte: Einweichen (außer Linsen), ohne Salz kochen",
                "Quinoa: Waschen (Bitterstoffe!), 1:2 Verhältnis"
              ]
            },
            {
              title: "Praktische Übungen",
              type: "exercise",
              details: [
                "Koche Pasta al dente und verwende Nudelwasser für eine Sauce.",
                "Koche Basmatireis nach der Quellmethode perfekt körnig.",
                "Koche Kartoffeln auf 3 Arten (Pell, Salz, Dämpfen) und vergleiche."
              ]
            }
          ]
        },
        {
          title: "Modul 2.8: Eier-Techniken",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fefce8" />
              <path d="M80 60 Q120 40 160 60 Q180 100 160 140 Q120 160 80 140 Q40 100 80 60" fill="#fff" stroke="#fde047" strokeWidth="2" />
              <circle cx="110" cy="100" r="25" fill="#facc15" />
            </svg>
          ),
          topics: [
            {
              title: "Eier kochen & braten",
              details: [
                "Kochen: 5 Min (weich), 6-7 Min (wachsweich), 10 Min (hart)",
                "Abschrecken stoppt Garprozess",
                "Spiegelei: Sunny Side Up vs. Over Easy",
                "Rührei: Low & Slow (cremig) vs. High & Fast",
                "Omelett: Französisch (cremig) vs. Amerikanisch"
              ]
            },
            {
              title: "Praktische Übungen",
              type: "exercise",
              details: [
                "Koche 3 Eier mit unterschiedlichen Zeiten und vergleiche.",
                "Mache ein cremiges Rührei (vom Herd nehmen bevor fertig!).",
                "Trenne Eier sauber für verschiedene Verwendungszwecke."
              ]
            }
          ]
        },
        {
          title: "Modul 2.10: Temperaturmessung - Das richtige Werkzeug",
          topics: [
            {
              title: "Thermometer-Typen",
              details: [
                "Digitales Thermometer:",
                "  - Sofortige Anzeige, präzise",
                "  - Für Fleisch, Eier, Saucen",
                "  - Spitze einstechen, warten bis stabil",
                "Analoges Thermometer:",
                "  - Klassisch, langlebig",
                "  - Braucht Zeit zum Anzeigen",
                "Infrarot-Thermometer:",
                "  - Berührungslos, sofort",
                "  - Für Pfannen, Öl, Oberflächen",
                "  - Nicht für Kerntemperatur!"
              ]
            },
            {
              title: "Wann wo messen?",
              details: [
                "Fleisch: In dickster Stelle, nicht am Knochen",
                "Geflügel: Brust & Keule separat messen",
                "Fisch: In dickster Stelle",
                "Eier: In Eigelb-Mitte",
                "Saucen: In der Mitte, nicht am Rand",
                "Öl zum Frittieren: 160-180°C"
              ]
            },
            {
              title: "Kalibrierung & Pflege",
              details: [
                "Eiswasser-Test: Sollte 0°C zeigen",
                "Kochendes Wasser: Sollte 100°C zeigen (auf Meereshöhe)",
                "Reinigung: Spitze abwischen, nicht tauchen",
                "Lagerung: Trocken, geschützt"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Messe die Temperatur von kochendem Wasser und Eiswasser. Kalibriere dein Thermometer falls nötig.",
                "Brate ein Steak und messe die Kerntemperatur in verschiedenen Stadien."
              ]
            }
          ]
        },
        {
          title: "Modul 2.9: Abschmecken & Aromen-Balance",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fafaf9" />
              <path d="M100 50 L150 140 L50 140 Z" fill="none" stroke="#78716c" strokeWidth="2" />
              <circle cx="100" cy="40" r="10" fill="#fbbf24" />
              <circle cx="160" cy="150" r="10" fill="#ef4444" />
              <circle cx="40" cy="150" r="10" fill="#84cc16" />
              <text x="100" y="100" textAnchor="middle" fontSize="14" fill="#44403c">Balance</text>
            </svg>
          ),
          topics: [
            {
              title: "Grundlagen",
              details: [
                "Die 5 Geschmacksrichtungen: Süß, Sauer, Salzig, Bitter, Umami",
                "Das Geschmacks-Dreieck: Salz, Säure, Fett",
                "Harte Kräuter (Rosmarin, Thymian) mitkochen",
                "Weiche Kräuter (Basilikum, Petersilie) am Ende zugeben"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Mache eine Tomatensauce und schmecke sie systematisch ab: Salz, Säure (Essig/Zitrone), Süße (Zucker), Fett (Öl)."
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Phase 3: Kernkompetenzen & Zubereitungen",
      description: "Wende die Techniken auf Hauptzutaten an. Fleisch, Fisch, Saucen und Beilagen.",
      backgroundImage: "linear-gradient(to bottom, #fee2e2, #fca5a5)",
      modules: [
        {
          title: "Modul 3.1: Fleischzubereitung",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fef2f2" />
              <path d="M60 100 Q80 60 120 60 Q160 60 160 100 Q160 140 120 140 Q80 140 60 100" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
              <line x1="80" y1="80" x2="100" y2="120" stroke="#fca5a5" strokeWidth="2" />
              <line x1="100" y1="80" x2="120" y2="120" stroke="#fca5a5" strokeWidth="2" />
            </svg>
          ),
          topics: [
            {
              title: "Grundlagen",
              details: [
                "Fleischqualitäten erkennen",
                "Auftauen im Kühlschrank",
                "Trocken tupfen vor dem Braten",
                "Ruhezeit beachten (essenziell!)"
              ]
            },
            {
              title: "Zubereitungsarten",
              details: [
                "Kurzbraten (Steak): Scharf anbraten, Kerntemperatur messen",
                "Schmoren (Gulasch): Anbraten, ablöschen, lange simmern",
                "Hähnchen: Brust (65-70°C) vs. Keule (75-80°C)",
                "Hackfleisch: Gut durchbraten"
              ]
            },
            {
              title: "Braising vs. Stewing - Der Unterschied",
              details: [
                "Braising (Schmoren):",
                "  - Große Stücke (Braten, Keule)",
                "  - Flüssigkeit bis zur Hälfte",
                "  - Im Ofen oder auf Herd",
                "  - Beispiel: Sauerbraten, Coq au Vin",
                "Stewing (Eintopf):",
                "  - Kleine Stücke (Würfel)",
                "  - Komplett mit Flüssigkeit bedeckt",
                "  - Auf Herd",
                "  - Beispiel: Gulasch, Chili",
                "Gemeinsamkeiten: Beide brauchen lange Zeit, niedrige Hitze"
              ]
            },
            {
              title: "Fleisch-Techniken erweitert",
              details: [
                "Glasieren:",
                "  - Fleisch mit Sauce glasieren (z.B. Hähnchen mit Honig-Soja)",
                "  - Mehrmals während des Garens bestreichen",
                "  - Erzeugt glänzende, aromatische Kruste",
                "Spicken:",
                "  - Fleisch mit Speckstreifen spicken",
                "  - Macht mageres Fleisch saftiger",
                "  - Mit Spicknadel oder Messer",
                "Bardieren:",
                "  - Fleisch mit Speck umwickeln",
                "  - Schützt vor Austrocknen",
                "  - Beispiel: Filet Mignon",
                "Confit detailliert:",
                "  - Langsames Garen in Fett bei niedriger Temperatur",
                "  - Ente, Gans, aber auch Gemüse",
                "  - Fett konserviert, macht zart",
                "  - Kann eingelagert werden"
              ]
            },
            {
              title: "Praktische Übungen",
              type: "exercise",
              details: [
                "Brate ein Steak Medium-Rare (54°C) mit Thermometer und Ruhezeit.",
                "Mache ein Schmorgericht (z.B. Gulasch) bis das Fleisch zart ist."
              ]
            }
          ]
        },
        {
          title: "Modul 3.2: Fisch & Meeresfrüchte",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#f0f9ff" />
              <path d="M60 100 Q100 80 140 100 L160 90 L160 110 L140 100 Q100 120 60 100 Z" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
              <circle cx="70" cy="95" r="2" fill="#0284c7" />
            </svg>
          ),
          topics: [
            {
              title: "Fisch zubereiten",
              details: [
                "Frische erkennen (Augen, Kiemen, Geruch)",
                "Auf der Haut braten (Haut muss trocken sein!)",
                "Dämpfen oder Pochieren (schonend)",
                "Nicht überkochen (10 Min pro 2,5cm Dicke)"
              ]
            },
            {
              title: "Garnelen",
              details: [
                "Vorbereiten: Köpfe, Panzer und Darm entfernen",
                "Kurz und scharf anbraten"
              ]
            },
            {
              title: "Praktische Übungen",
              type: "exercise",
              details: [
                "Brate ein Lachsfilet auf der Hautseite knusprig.",
                "Dämpfe einen ganzen Fisch oder filetiere und brate Garnelen."
              ]
            }
          ]
        },
        {
          title: "Modul 3.3: Suppen & Fonds",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fff7ed" />
              <path d="M60 80 L140 80 L130 140 L70 140 Z" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />
              <path d="M80 70 L70 50" stroke="#fed7aa" strokeWidth="3" />
              <path d="M100 70 L100 40" stroke="#fed7aa" strokeWidth="3" />
              <path d="M120 70 L130 50" stroke="#fed7aa" strokeWidth="3" />
            </svg>
          ),
          topics: [
            {
              title: "Grundlagen",
              details: [
                "Fond vs. Brühe",
                "Heller Fond (Geflügel/Gemüse) vs. Dunkler Fond (Rind)",
                "Klare Suppen vs. Gebundene Suppen (Püree/Creme)"
              ]
            },
            {
              title: "Stock/Brühe detailliert",
              details: [
                "Heller Fond:",
                "  - Geflügelknochen, Gemüse",
                "  - Nicht rösten, direkt kochen",
                "  - Klar, mild im Geschmack",
                "Dunkler Fond:",
                "  - Rinderknochen rösten (Maillard-Reaktion)",
                "  - Tomatenmark mitrösten",
                "  - Tiefbraun, intensiver Geschmack",
                "Fischfond:",
                "  - Fischgräten, keine Haut",
                "  - Kurz kochen (20-30 Min), sonst bitter",
                "Gemüsefond:",
                "  - Gemüseabschnitte verwenden",
                "  - Keine Kartoffeln (wird trüb)",
                "Klären (Consommé):",
                "  - Eiweiß + Gemüse, langsam erhitzen",
                "  - Eiweiß bindet Trübstoffe",
                "  - Durch Sieb gießen = klare Brühe",
                "Grundregeln:",
                "  - Kalt ansetzen, langsam erhitzen",
                "  - Skimmieren (Schaum abschöpfen)",
                "  - 2-4 Stunden köcheln lassen",
                "  - Nicht kochen (wird trüb!)"
              ]
            },
            {
              title: "Eintöpfe",
              details: [
                "Alles in einem Topf, lange köcheln",
                "Beispiele: Gulasch, Chili con Carne, Curry"
              ]
            },
            {
              title: "Praktische Übungen",
              type: "exercise",
              details: [
                "Koche einen einfachen Gemüse- oder Hühnerfond.",
                "Mache eine Cremesuppe (Gemüse pürieren, mit Sahne binden)."
              ]
            }
          ]
        },
        {
          title: "Modul 3.4: Saucen & Binden",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fefce8" />
              <path d="M70 140 C70 140 80 60 130 60 L130 80 C100 80 90 140 90 140" fill="#facc15" stroke="#eab308" strokeWidth="2" />
            </svg>
          ),
          topics: [
            {
              title: "Die 5 Mutter-Saucen",
              details: [
                "Béchamel (Milch + Mehlschwitze)",
                "Velouté (Heller Fond + Mehlschwitze)",
                "Espagnole (Brauner Fond + Mehlschwitze)",
                "Tomate",
                "Hollandaise (Emulsion)"
              ]
            },
            {
              title: "Bindetechniken",
              details: [
                "Mehlschwitze (Roux)",
                "Stärke (in kaltem Wasser anrühren)",
                "Montieren (kalte Butter einrühren)",
                "Reduktion (Einkochen)"
              ]
            },
            {
              title: "Emulsionen detailliert",
              details: [
                "Was ist eine Emulsion?",
                "  - Vermischung von Öl und Wasser (normalerweise unmöglich)",
                "  - Emulgator hält beides zusammen",
                "Mayonnaise Schritt für Schritt:",
                "  - Eigelb + Senf + Zitrone (Emulgator)",
                "  - Öl tropfenweise einrühren (langsam!)",
                "  - Wenn zu dick: Wasser/Zitrone hinzufügen",
                "  - Wenn gerinnt: Neues Eigelb, dann geronnene Masse langsam einrühren",
                "Hollandaise-Technik:",
                "  - Eigelb + Zitrone über Wasserbad schlagen",
                "  - Butter geschmolzen, langsam einrühren",
                "  - Nicht zu heiß (wird geronnen!)",
                "  - Warm halten, nicht kochen",
                "Vinaigrette:",
                "  - Senf als Emulgator",
                "  - Öl langsam einrühren",
                "  - Oder im Glas schütteln",
                "Tipps:",
                "  - Alles auf Raumtemperatur",
                "  - Langsam arbeiten, nicht hetzen",
                "  - Bei Fehlschlag: Neu anfangen"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Stelle eine Béchamel-Sauce her und mache eine Vinaigrette."
              ]
            }
          ]
        },
        {
          title: "Modul 3.5: Salate & Dressings",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#ecfccb" />
              <path d="M60 120 Q100 140 140 120 L130 80 Q100 100 70 80 Z" fill="#bef264" stroke="#65a30d" strokeWidth="2" />
              <path d="M70 80 Q100 60 130 80" fill="none" stroke="#65a30d" strokeWidth="2" />
            </svg>
          ),
          topics: [
            {
              title: "Dressings",
              details: [
                "Vinaigrette: Öl + Essig + Senf (3:1 Verhältnis)",
                "Joghurt-Dressing",
                "Creme-Dressing (Mayonnaise-Basis)"
              ]
            },
            {
              title: "Salat-Grundlagen",
              details: [
                "Richtig waschen und trocknen (Salatschleuder)",
                "Klassiker: Grüner Salat, Kartoffelsalat, Nudelsalat, Krautsalat"
              ]
            },
            {
              title: "Praktische Übungen",
              type: "exercise",
              details: [
                "Mache 3 verschiedene Vinaigrettes.",
                "Bereite einen klassischen Kartoffelsalat zu."
              ]
            }
          ]
        },
        {
          title: "Modul 3.6: Beilagen & Sattmacher",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fffbeb" />
              <circle cx="80" cy="100" r="20" fill="#fcd34d" />
              <circle cx="120" cy="100" r="20" fill="#fcd34d" />
              <circle cx="100" cy="80" r="20" fill="#fcd34d" />
            </svg>
          ),
          topics: [
            {
              title: "Kartoffeln erweitert",
              details: [
                "Pommes (doppelt frittieren)",
                "Bratkartoffeln (vorkochen oder roh)",
                "Kartoffelpüree (stampfen, Butter/Milch)",
                "Kartoffelgratin, Rösti"
              ]
            },
            {
              title: "Reis & Nudeln erweitert",
              details: [
                "Pilaw, Risotto, Sushi-Reis",
                "Pasta selbst machen (Mehl + Ei)",
                "Nudeln immer mit Sauce vermengen"
              ]
            },
            {
              title: "Risotto-Technik detailliert",
              details: [
                "Die Grundlagen:",
                "  - Arborio oder Carnaroli Reis",
                "  - Warme Brühe bereitstellen",
                "  - Zwiebeln glasig dünsten",
                "Der Prozess Schritt für Schritt:",
                "  1. Reis kurz anrösten (1-2 Min)",
                "  2. Wein hinzufügen, reduzieren",
                "  3. Brühe schluckweise hinzufügen",
                "  4. Ständig rühren (Stärke freisetzen)",
                "  5. Nach 15-20 Min: Cremig, aber noch bissfest",
                "  6. Butter + Parmesan einrühren (Mantecare)",
                "Wichtig:",
                "  - Nie zu viel Flüssigkeit auf einmal",
                "  - Ständig rühren (sonst brennt an)",
                "  - Cremig, nicht matschig",
                "  - Al dente testen",
                "Klassische Varianten:",
                "  - Risotto alla Milanese (Safran)",
                "  - Risotto ai Funghi (Pilze)",
                "  - Risotto ai Frutti di Mare (Meeresfrüchte)"
              ]
            },
            {
              title: "Pasta selbst machen - detailliert",
              details: [
                "Teigherstellung:",
                "  - 100g Mehl + 1 Ei (Faustregel)",
                "  - Mehl auf Arbeitsfläche, Mulde in der Mitte",
                "  - Ei in Mulde, mit Gabel verquirlen",
                "  - Langsam Mehl einarbeiten",
                "Kneten:",
                "  - 10-15 Minuten kneten",
                "  - Teig sollte glatt und elastisch sein",
                "  - Nicht zu trocken, nicht zu klebrig",
                "Ruhen lassen:",
                "  - 30 Minuten eingewickelt ruhen lassen",
                "  - Gluten entspannt sich, wird geschmeidiger",
                "Ausrollen:",
                "  - Mit Nudelmaschine: Von dick nach dünn",
                "  - Mit Nudelholz: Gleichmäßig ausrollen",
                "  - Dünn genug, dass man Hand durchsehen kann",
                "Schneiden:",
                "  - Tagliatelle: Breite Bänder",
                "  - Fettuccine: Etwas schmaler",
                "  - Pappardelle: Sehr breit",
                "  - Ravioli: Gefüllt, quadratisch",
                "Trocknen:",
                "  - Auf Nudelständer oder Küchentuch",
                "  - Oder sofort kochen (frisch ist am besten!)",
                "Kochen:",
                "  - Frische Pasta braucht nur 2-3 Minuten",
                "  - Al dente testen"
              ]
            },
            {
              title: "Knödel & Klöße",
              details: [
                "Semmelknödel, Kartoffelknödel",
                "Spätzle (Teig durchdrücken)"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Versuche dich an selbstgemachter Pasta oder perfekten Bratkartoffeln."
              ]
            }
          ]
        },
        {
          title: "Modul 3.7: Backen (Grundlagen)",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fff1f2" />
              <path d="M60 120 L60 90 C60 60 140 60 140 90 L140 120 Z" fill="#fda4af" stroke="#e11d48" strokeWidth="2" />
              <line x1="100" y1="60" x2="100" y2="30" stroke="#fda4af" strokeWidth="3" />
            </svg>
          ),
          topics: [
            {
              title: "Grundlagen & Teige",
              details: [
                "Backen ist Chemie (Genauigkeit!)",
                "Mehl-Typen (405, 550, 1050, Vollkorn)",
                "Triebmittel (Backpulver, Natron, Hefe)",
                "Rührteig (Kuchen, Muffins)",
                "Mürbeteig (Kekse, Quiche)"
              ]
            },
            {
              title: "Hefeteig & Brot",
              details: [
                "Hefe füttern, Gehen lassen",
                "No-Knead-Bread (Topfbrot)",
                "Schwaden (Dampf) für Kruste"
              ]
            },
            {
              title: "Kuchen & Torten",
              details: [
                "Biskuit (luftig durch Eischnee)",
                "Cremes & Glasuren"
              ]
            },
            {
              title: "Blind Backen (Blind Baking)",
              details: [
                "Was ist Blind Backen?",
                "  - Tortenboden ohne Füllung vorbacken",
                "  - Verhindert, dass Boden matschig wird",
                "Technik:",
                "  1. Teig in Form drücken",
                "  2. Mit Backpapier auslegen",
                "  3. Mit Bohnen/Reis beschweren (verhindert Aufgehen)",
                "  4. 15-20 Min bei 180°C backen",
                "  5. Bohnen entfernen, weitere 5-10 Min ohne Gewicht",
                "Wann verwenden:",
                "  - Quiche, Torten mit feuchter Füllung",
                "  - Tortenböden für Cremes",
                "Alternativen:",
                "  - Backperlen statt Bohnen",
                "  - Mit Gabel einstechen (weniger effektiv)"
              ]
            },
            {
              title: "Temperieren (Schokolade & Eier)",
              details: [
                "Schokolade temperieren:",
                "  - Für glänzende, knusprige Schokolade",
                "  - Schokolade schmelzen (max. 45°C)",
                "  - Abkühlen lassen (auf 27-28°C)",
                "  - Wieder leicht erwärmen (auf 31-32°C)",
                "  - Jetzt verwenden (Kruste bleibt stabil)",
                "Eier temperieren:",
                "  - Für Cremes, Saucen",
                "  - Eigelb langsam mit warmer Flüssigkeit vermischen",
                "  - Verhindert Gerinnen",
                "  - Wichtig bei Pudding, Crème Anglaise",
                "Technik:",
                "  1. Eigelb + etwas Zucker verquirlen",
                "  2. Warme Milch/Sahne langsam einrühren",
                "  3. Dann zurück in Topf, vorsichtig erhitzen"
              ]
            },
            {
              title: "Sauerteig detailliert",
              details: [
                "Was ist Sauerteig?",
                "  - Natürliche Hefe aus Mehl + Wasser",
                "  - Fermentation erzeugt Säure & Geschmack",
                "Anzucht (Starter):",
                "  - Tag 1-3: Mehl + Wasser mischen, täglich füttern",
                "  - Tag 4-7: Blasen entstehen, säuerlicher Geruch",
                "  - Nach 1-2 Wochen: Aktiv und einsatzbereit",
                "Fütterung:",
                "  - Regelmäßig füttern (alle 12-24h)",
                "  - Mehl + Wasser hinzufügen",
                "  - Überschuss wegwerfen oder verwenden",
                "Verwendung:",
                "  - 20-30% Starter im Teig",
                "  - Längere Gärzeit als Hefe",
                "  - Intensiverer Geschmack",
                "Vorteile:",
                "  - Natürlich, keine Zusatzstoffe",
                "  - Längere Haltbarkeit",
                "  - Einzigartiger Geschmack"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Backe Butterplätzchen aus Mürbeteig oder ein einfaches Brot."
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Phase 4: Theorie & Kreativität",
      description: "Verstehe das 'Warum' hinter dem Kochen und werde kreativ.",
      backgroundImage: "linear-gradient(to bottom, #f0f9ff, #e0f2fe)",
      modules: [
        {
          title: "Modul 4.1 & 4.2: Ernährung & Wissenschaft",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#f0fdf4" />
              <path d="M100 40 L100 160" stroke="#16a34a" strokeWidth="2" />
              <path d="M40 100 L160 100" stroke="#16a34a" strokeWidth="2" />
              <circle cx="100" cy="100" r="50" fill="none" stroke="#16a34a" strokeWidth="2" />
            </svg>
          ),
          topics: [
            {
              title: "Ernährungstheorie",
              details: [
                "Kalorien (Energie)",
                "Makronährstoffe (Kohlenhydrate, Proteine, Fette)",
                "Mikronährstoffe (Vitamine, Mineralstoffe)",
                "Nährwerttabellen lesen"
              ]
            },
            {
              title: "Lebensmittelwissenschaft",
              details: [
                "Maillard-Reaktion (Röstaromen)",
                "Karamellisierung (Zucker bräunen)",
                "Osmose (Salz entzieht Wasser)",
                "Öl-Rauchpunkte beachten"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Bräune Butter zu 'Nussbutter' und beobachte die Veränderung."
              ]
            }
          ]
        },
        {
          title: "Modul 4.3: Aromenaufbau Fortgeschritten",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fdf4ff" />
              <path d="M80 100 L120 100" stroke="#d946ef" strokeWidth="2" />
              <path d="M100 80 L100 120" stroke="#d946ef" strokeWidth="2" />
              <circle cx="100" cy="100" r="30" fill="none" stroke="#d946ef" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          ),
          topics: [
            {
              title: "Techniken",
              details: [
                "Marinieren: Geschmack (Öl) & Zartmachen (Säure)",
                "Rubs (Trockenmarinaden)",
                "Panieren (Mehl -> Ei -> Paniermehl)"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Mariniere Fleisch und paniere ein Schnitzel in der korrekten 'Panierstraße'."
              ]
            }
          ]
        },
        {
          title: "Modul 4.4: Lagerung & Haltbarkeit",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#eff6ff" />
              <rect x="60" y="50" width="80" height="100" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <line x1="60" y1="90" x2="140" y2="90" stroke="#3b82f6" strokeWidth="2" />
            </svg>
          ),
          topics: [
            {
              title: "Lagerung",
              details: [
                "Kühlschrank-Zonen nutzen",
                "Was gehört NICHT in den Kühlschrank?",
                "Richtig Einfrieren (Gefrierbrand vermeiden)",
                "Konservierungsmethoden (Einmachen, Pökeln, Fermentieren)"
              ]
            },
            {
              title: "Konservierung detailliert",
              details: [
                "Einmachen / Einkochen:",
                "  - Früchte/Gemüse in Gläser",
                "  - Mit Zucker/Salz + Säure",
                "  - Im Wasserbad einkochen (100°C)",
                "  - Vakuum entsteht beim Abkühlen",
                "  - Haltbarkeit: 1-2 Jahre",
                "Pökeln:",
                "  - Fleisch/Fisch mit Salz konservieren",
                "  - Trockenpökeln (Salz einreiben)",
                "  - Nasspökeln (Salzlake)",
                "  - Beispiel: Speck, Lachs",
                "Einlegen:",
                "  - In Essig (Säure konserviert)",
                "  - In Öl (Luftabschluss)",
                "  - In Alkohol (z.B. Rumtopf)",
                "Fermentieren:",
                "  - Natürliche Bakterien arbeiten",
                "  - Sauerkraut, Kimchi, Sauerteig",
                "  - Milchsäuregärung",
                "Trocknen:",
                "  - Obst, Kräuter, Fleisch",
                "  - Wasser entziehen = Bakterien können nicht wachsen",
                "  - Sonne oder Dörrgerät"
              ]
            },
          ]
        },
        {
          title: "Modul 4.5: Kräuter & Gewürze Vertiefung",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#ecfccb" />
              <path d="M100 140 L100 60 M100 60 L80 80 M100 60 L120 80" stroke="#65a30d" strokeWidth="4" strokeLinecap="round" />
            </svg>
          ),
          topics: [
            {
              title: "Verwendung",
              details: [
                "Harte Kräuter mitkochen, weiche am Ende",
                "Ganze Gewürze anrösten und mahlen",
                "Klassische Kombinationen (Italienisch, Französisch, Asiatisch)"
              ]
            },
            {
              title: "Gewürzmischungen selbst machen",
              details: [
                "Klassische Mischungen:",
                "  - Garam Masala (Indisch): Kardamom, Zimt, Nelken, Koriander, Kreuzkümmel",
                "  - Ras el Hanout (Marokkanisch): 20+ Gewürze",
                "  - Cajun-Spice: Paprika, Knoblauch, Zwiebel, Cayenne, Thymian",
                "  - Herbes de Provence: Thymian, Rosmarin, Oregano, Lavendel",
                "Verhältnisse beachten:",
                "  - Starte mit kleinen Mengen",
                "  - Probiere und passe an",
                "  - Schreib Rezept auf!",
                "Lagerung:",
                "  - In luftdichten Gläsern",
                "  - Kühl und dunkel lagern",
                "  - Nach 6 Monaten erneuern",
                "Anwendung:",
                "  - Rubs für Fleisch",
                "  - In Saucen und Eintöpfen",
                "  - Als Tischgewürz"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Röste ganze Gewürze an und stelle eine eigene Gewürzmischung her."
              ]
            }
          ]
        },
        {
          title: "Modul 4.6: Meal Prep & Resteverwertung",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#f3f4f6" />
              <rect x="60" y="70" width="35" height="35" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
              <rect x="105" y="70" width="35" height="35" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
              <rect x="60" y="115" width="35" height="35" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
              <rect x="105" y="115" width="35" height="35" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
            </svg>
          ),
          topics: [
            {
              title: "Strategien",
              details: [
                "Meal Prep: Vorkochen, Portionieren, Kühlen",
                "Resteverwertung: Bratkartoffeln, Reispfanne, Nudelsalat",
                "'Kühlschrank-Kochen': Kreativ werden mit dem was da ist"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Koche ein Gericht nur aus Zutaten, die du bereits zuhause hast."
              ]
            }
          ]
        },
        {
          title: "Modul 4.7: Vegetarisch & Vegan",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#dcfce7" />
              <path d="M100 60 Q130 80 130 110 Q130 140 100 160 Q70 140 70 110 Q70 80 100 60" fill="#4ade80" />
            </svg>
          ),
          topics: [
            {
              title: "Alternativen",
              details: [
                "Proteinquellen: Hülsenfrüchte, Tofu, Tempeh, Seitan",
                "Milch- & Butter-Alternativen",
                "Ei-Ersatz beim Backen (Apfelmus, Leinsamen)",
                "Gerichte: Ratatouille, Curry, Falafel, Hummus"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Bereite Tofu schmackhaft zu oder backe einen veganen Kuchen."
              ]
            }
          ]
        },
        {
          title: "Modul 4.8: Desserts & Süßspeisen",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fce7f3" />
              <path d="M80 80 A20 20 0 0 1 120 80" fill="#f472b6" />
              <path d="M100 80 L100 140" stroke="#f472b6" strokeWidth="2" />
            </svg>
          ),
          topics: [
            {
              title: "Klassiker",
              details: [
                "Pudding & Creme (nicht kochen bei Ei!)",
                "Mousse au Chocolat",
                "Frucht-Desserts: Kompott, Rote Grütze",
                "Eis & Sorbet"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Mache einen Pudding, eine Mousse oder ein Fruchtkompott."
              ]
            }
          ]
        },
        {
          title: "Modul 4.9: Aufstriche & Dips",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fff7ed" />
              <circle cx="100" cy="100" r="40" fill="#fed7aa" />
            </svg>
          ),
          topics: [
            {
              title: "Selbstgemacht",
              details: [
                "Aufstriche: Kräuterbutter, Frischkäse-Variationen",
                "Dips: Hummus, Guacamole, Tzatziki, Aioli",
                "Pesto & Chutney"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Stelle Hummus, Tzatziki oder ein Pesto selbst her."
              ]
            }
          ]
        },
        {
          title: "Modul 4.10: Snacks & Fingerfood",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fef3c7" />
              <circle cx="80" cy="90" r="15" fill="#fcd34d" />
              <circle cx="120" cy="90" r="15" fill="#fcd34d" />
              <circle cx="100" cy="120" r="15" fill="#fcd34d" />
            </svg>
          ),
          topics: [
            {
              title: "Ideen",
              details: [
                "Backofen: Ofengemüse, Kartoffelspalten",
                "Frittiert: Falafel, Zwiebelringe",
                "Kalt: Bruschetta, Caprese, Antipasti"
              ]
            }
          ]
        },
        {
          title: "Modul 4.11: Getränke",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#e0f2fe" />
              <path d="M80 60 L80 140 L120 140 L120 60 Z" fill="#bae6fd" stroke="#0ea5e9" strokeWidth="2" />
            </svg>
          ),
          topics: [
            {
              title: "Zubereitung",
              details: [
                "Kaffee & Tee (Wassertemperatur!)",
                "Selbstgemachte Limonade & Eistee",
                "Smoothies & Smoothie Bowls"
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Phase 5: Küchen-Management",
      description: "Werde zum Chef deiner Küche. Timing, Planung und Gastgeber-Qualitäten.",
      backgroundImage: "linear-gradient(to bottom, #f3f4f6, #e5e7eb)",
      modules: [
        {
          title: "Modul 5.1: Timing & Stressmanagement",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#f3f4f6" />
              <circle cx="100" cy="100" r="70" fill="#fff" stroke="#d1d5db" strokeWidth="4" />
              <line x1="100" y1="100" x2="100" y2="50" stroke="#ef4444" strokeWidth="3" />
              <line x1="100" y1="100" x2="140" y2="100" stroke="#4b5563" strokeWidth="3" />
            </svg>
          ),
          topics: [
            {
              title: "Planung",
              details: [
                "Der 'Schlachtplan': Rückwärts planen",
                "Vorbereitung ist alles (Mise en Place)",
                "Multitasking & Timer nutzen"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Plane ein 3-Gänge-Menü mit exaktem Zeitplan."
              ]
            }
          ]
        },
        {
          title: "Modul 5.2: Präsentation & Anrichten",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fafaf9" />
              <circle cx="100" cy="100" r="60" fill="#fff" stroke="#e7e5e4" strokeWidth="2" />
              <circle cx="100" cy="100" r="20" fill="#fca5a5" />
            </svg>
          ),
          topics: [
            {
              title: "Das Auge isst mit",
              details: [
                "Teller als Leinwand, sauberer Rand",
                "Höhe bauen, Farbkontraste",
                "Garnieren: Kräuter, Nüsse, Öl"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Richte ein Gericht bewusst schön an ('Instagram-ready')."
              ]
            }
          ]
        },
        {
          title: "Modul 5.3: Fehlerbehebung (Rettungs-Techniken)",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fee2e2" />
              <path d="M70 70 L130 130 M130 70 L70 130" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
            </svg>
          ),
          topics: [
            {
              title: "Was tun wenn...",
              details: [
                "...zu salzig? (Verdünnen, Sahne)",
                "...zu dünn? (Reduzieren, Stärke, Montieren)",
                "...zu scharf/sauer/süß? (Gegenpol finden)",
                "...angebrannt? (Nicht rühren, umfüllen!)"
              ]
            }
          ]
        },
        {
          title: "Modul 5.4: Gäste bewirten",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fdf4ff" />
              <path d="M70 100 L130 100 M100 70 L100 130" stroke="#d946ef" strokeWidth="2" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="#d946ef" strokeWidth="2" />
            </svg>
          ),
          topics: [
            {
              title: "Gastgeber sein",
              details: [
                "Menüplanung (Nichts zum ersten Mal kochen!)",
                "Vorbereitung (Vorspeise/Dessert vorbereiten)",
                "Puffer einplanen"
              ]
            }
          ]
        },
        {
          title: "Modul 5.5: Budget & Einkauf",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#ecfccb" />
              <text x="100" y="120" textAnchor="middle" fontSize="60" fill="#65a30d">€</text>
            </svg>
          ),
          topics: [
            {
              title: "Smart einkaufen",
              details: [
                "Saisonal & Angebote nutzen",
                "Günstige Proteine & Beilagen",
                "Einkaufsliste schreiben",
                "Resteverwertung"
              ]
            }
          ]
        },
        {
          title: "Modul 5.6: Schnelle Küche",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fff7ed" />
              <path d="M100 40 L120 80 L160 80 L130 110 L140 150 L100 130 L60 150 L70 110 L40 80 L80 80 Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
            </svg>
          ),
          topics: [
            {
              title: "Zeit sparen",
              details: [
                "Parallel arbeiten",
                "One-Pot-Gerichte & Stir-Frys",
                "Schnelle Klassiker: Pasta, Omelett, Quesadillas"
              ]
            },
            {
              title: "Praktische Übung",
              type: "exercise",
              details: [
                "Koche ein komplettes Gericht in unter 30 Minuten."
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Phase 6: Spezialisierung & Weltküchen",
      description: "Erweitere dein Repertoire mit internationalen Klassikern und Spezialtechniken.",
      backgroundImage: "linear-gradient(to bottom, #f5f3ff, #ede9fe)",
      modules: [
        {
          title: "Modul 6.1: Grillen & Outdoor",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fee2e2" />
              <line x1="60" y1="60" x2="140" y2="140" stroke="#dc2626" strokeWidth="4" />
              <line x1="140" y1="60" x2="60" y2="140" stroke="#dc2626" strokeWidth="4" />
            </svg>
          ),
          topics: [
            {
              title: "Grillen",
              details: [
                "Direktes Grillen (Steaks, Burger)",
                "Indirektes Grillen (Braten, Hähnchen)",
                "Holzkohle vs. Gas"
              ]
            }
          ]
        },
        {
          title: "Modul 6.2: Weltküchen Einführung",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#f0f9ff" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M100 30 L100 170 M30 100 L170 100" stroke="#0ea5e9" strokeWidth="1" />
            </svg>
          ),
          topics: [
            {
              title: "Italienisch",
              details: [
                "Pasta & Saucen",
                "Risotto (Technik)",
                "Pizza"
              ]
            },
            {
              title: "Asiatisch",
              details: [
                "Wok-Technik (Pfannenrühren)",
                "Aromen-Basis (Ingwer, Knoblauch, Soja)",
                "Saucen"
              ]
            },
            {
              title: "Mexikanisch",
              details: [
                "Salsa & Guacamole",
                "Tacos & Tortillas"
              ]
            },
            {
              title: "Deutsche Küche",
              details: [
                "Schnitzel, Braten",
                "Knödel, Saucen"
              ]
            }
          ]
        },
        {
          title: "Modul 6.3: Spezial-Disziplinen",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fdf4ff" />
              <path d="M80 100 L100 80 L120 100 L100 120 Z" fill="#d946ef" />
            </svg>
          ),
          topics: [
            {
              title: "Ausblick",
              details: [
                "Sous-Vide Garen",
                "Fermentation (Sauerkraut, Sauerteig)",
                "Pâtisserie (Blätterteig, feine Backwaren)",
                "Einmachen & Konservieren"
              ]
            },
            {
              title: "Sous-Vide detailliert",
              details: [
                "Was ist Sous-Vide?",
                "  - Garen im Vakuum bei präziser Temperatur",
                "  - Niedrige Temperatur, lange Zeit",
                "  - Perfekte Garung, keine Überkocher",
                "Equipment:",
                "  - Sous-Vide-Stick (Immersion Circulator)",
                "  - Vakuumierer oder Zip-Lock-Beutel",
                "  - Großer Topf oder Behälter",
                "Technik:",
                "  1. Lebensmittel würzen, in Beutel",
                "  2. Vakuumieren (oder Wasserstrahl-Methode)",
                "  3. Wasser auf präzise Temperatur bringen",
                "  4. Garen (oft Stunden lang)",
                "  5. Anbraten für Kruste (optional)",
                "Vorteile:",
                "  - Perfekte Garung (keine Überkocher)",
                "  - Zarteste Ergebnisse",
                "  - Vorbereitbar (kann warmgehalten werden)",
                "Temperaturen:",
                "  - Steak Medium-Rare: 54°C",
                "  - Hähnchenbrust: 65°C",
                "  - Fisch: 50-55°C",
                "  - Gemüse: 85-90°C"
              ]
            },
            {
              title: "Fermentation detailliert",
              details: [
                "Was ist Fermentation?",
                "  - Natürliche Bakterien verwandeln Zucker",
                "  - Erzeugt Säure, Kohlendioxid, Geschmack",
                "Sauerkraut Schritt für Schritt:",
                "  1. Weißkohl hobeln, salzen (2% Salz)",
                "  2. Stampfen bis Saft austritt",
                "  3. In Glasgefäß pressen",
                "  4. Mit Gewicht beschweren (unter Flüssigkeit)",
                "  5. 2-6 Wochen fermentieren lassen",
                "  6. Bei Raumtemperatur, täglich prüfen",
                "Kimchi:",
                "  - Ähnlich wie Sauerkraut",
                "  - Mit Chili, Ingwer, Knoblauch",
                "  - Koreanische Spezialität",
                "Sauerteig:",
                "  - Siehe Modul 3.7 (Backen)",
                "Wichtig:",
                "  - Hygiene (saubere Gefäße)",
                "  - Unter Flüssigkeit halten",
                "  - Schimmel = wegwerfen!",
                "  - Sauerkraut-Geruch ist normal"
              ]
            },
            {
              title: "Pizza-Teig detailliert",
              details: [
                "Grundrezept:",
                "  - 500g Mehl (Typ 550 oder 00)",
                "  - 325ml Wasser (65% Hydration)",
                "  - 10g Salz",
                "  - 5g Hefe (frisch oder trocken)",
                "Teigherstellung:",
                "  1. Hefe in lauwarmem Wasser auflösen",
                "  2. Mehl + Salz mischen",
                "  3. Wasser hinzufügen, kneten",
                "  4. 10-15 Min kneten (glatt und elastisch)",
                "Gärung:",
                "  - 1. Gärung: 1-2 Stunden bei Raumtemperatur",
                "  - Teig verdoppelt sich",
                "  - Oder: 24h im Kühlschrank (langsamere Gärung = mehr Geschmack)",
                "Formen:",
                "  1. Teig in Portionen teilen",
                "  2. Vorsichtig dehnen (nicht rollen!)",
                "  3. Mit Fingerkuppen drücken",
                "  4. Von Hand ausziehen",
                "Backen:",
                "  - Ofen auf Maximum vorheizen (250-300°C)",
                "  - Pizza-Stein oder Backblech",
                "  - 5-10 Minuten backen",
                "  - Kruste sollte knusprig, Blasen im Rand"
              ]
            }
          ]
        },
        {
          title: "Modul 6.4: Frühstück & Brunch",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fefce8" />
              <path d="M80 100 Q100 120 120 100" stroke="#ca8a04" strokeWidth="4" fill="none" />
              <circle cx="80" cy="80" r="5" fill="#ca8a04" />
              <circle cx="120" cy="80" r="5" fill="#ca8a04" />
            </svg>
          ),
          topics: [
            {
              title: "Frühstücksideen",
              details: [
                "Klassisch: Eier, Brot, Aufstriche",
                "Herzhaft: English Breakfast, Avocado Toast",
                "Süß: Pancakes, Waffeln, French Toast, Müsli"
              ]
            }
          ]
        },
        {
          title: "Modul 6.5: Die eigene Koch-Philosophie",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#ecfccb" />
              <path d="M100 60 L120 120 L60 120 Z" fill="#84cc16" />
            </svg>
          ),
          topics: [
            {
              title: "Meisterschaft",
              details: [
                "Intuitives Kochen (ohne Rezept)",
                "Eigene Rezepte entwickeln"
              ]
            }
          ]
        }
      ]
    }
  ]
};
