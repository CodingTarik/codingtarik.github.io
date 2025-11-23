import React from 'react';

export const boulderCurriculum = {
  title: "Boulder Master Path",
  description: "Vom absoluten Anfänger zum fortgeschrittenen Boulderer – dein kompletter Wegweiser durch die Welt des Boulderns.",
  phases: [
    {
      title: "Phase 1: Grundlagen & Erste Schritte",
      description: "Der Einstieg in die Welt des Boulderns. Lerne die Basis-Techniken, Sicherheit und das richtige Mindset.",
      backgroundImage: "linear-gradient(to bottom, #e6fffa, #bbf7d0)", // Example background override
      modules: [
        {
          title: "Modul 1.1: Einführung ins Bouldern",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <defs>
                <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5eead4" />
                  <stop offset="100%" stopColor="#0f766e" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="90" fill="#f0fdfa" />
              <path d="M40 160 L100 50 L160 160 Z" fill="url(#mountainGrad)" stroke="#0f766e" strokeWidth="3" strokeLinejoin="round" />
              <path d="M100 50 L120 160 L80 160 Z" fill="#14b8a6" opacity="0.3" />
              <path d="M100 50 L100 20" stroke="#334155" strokeWidth="3" />
              <path d="M100 20 L140 35 L100 50" fill="#f59e0b" stroke="#b45309" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="160" cy="40" r="15" fill="#fcd34d" opacity="0.8" />
            </svg>
          ),
          topics: [
            {
              title: "Was ist Bouldern? Geschichte & Philosophie",
              details: [
                "Definition: Klettern in Absprunghöhe ohne Seil",
                "Ursprung: Fontainebleau (Frankreich) & Yosemite Valley",
                "Unterschied zu Seilklettern, Freiklettern, Sportklettern",
                "Warum Bouldern? (Physisch, mental, sozial)"
              ],
              media: {
                type: "image",
                url: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=300&auto=format&fit=crop", // Placeholder
                alt: "Bouldering Wall"
              },
              resources: [
                { type: "video", title: "History of Bouldering", url: "https://youtube.com" },
                { type: "article", title: "Fontainebleau Guide", url: "https://example.com" }
              ],
              tasks: [
                "Gehe in deine lokale Boulderhalle und schaue dir die Wände an",
                "Finde heraus, wo die 'Absprungmatte' ist"
              ]
            },
            {
              title: "Halle vs. Outdoor-Bouldern: Unterschiede & Etikette",
              details: [
                "Vor- und Nachteile Boulderhalle",
                "Was ist beim Outdoor-Bouldern anders?",
                "Crashpads, Spotting, Wetter, LNT (Leave No Trace)",
                "Ethik: Chalk-Nutzung, Vogelschutz, Respekt vor Natur"
              ],
               media: {
                type: "image",
                url: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=300&auto=format&fit=crop",
                alt: "Outdoor Bouldering"
              },
              tasks: [
                "Lies die Hallenregeln deiner lokalen Halle durch"
              ]
            },
            {
              title: "Die Boulder-Community: Kultur & Anschluss finden",
              details: [
                "Hallen-Kultur & Sozialdynamik",
                "Online-Communities (Instagram, YouTube, Reddit r/bouldering)",
                "Lokale Boulder-Gruppen finden",
                "Wettkämpfe & Events (auch für Anfänger!)"
              ]
            }
          ]
        },
        {
          title: "Modul 1.2: Fundamentale Bewegungsprinzipien",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fef3c7" />
              <path d="M60 140 Q100 120 140 140" stroke="#d97706" strokeWidth="8" fill="none" strokeLinecap="round" />
              <path d="M80 100 L100 140 L120 100" fill="#f59e0b" stroke="#b45309" strokeWidth="3" strokeLinejoin="round" />
              <circle cx="100" cy="140" r="15" fill="#ef4444" />
              <path d="M100 140 L100 60" stroke="#ef4444" strokeWidth="4" strokeDasharray="8 4" />
              <path d="M90 60 L100 45 L110 60" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
          topics: [
            {
              title: "Bewegung aus den Füßen einleiten",
              details: [
                "Mantra: 'Beine drücken, Arme balancieren'",
                "Kraft aus den größten Muskelgruppen nutzen",
                "Bewusstsein dafür schaffen, wann man zieht und wann man drückt"
              ]
            },
            {
              title: "Die Hüfte als Zentrum der Bewegung",
              details: [
                "Hüfte nah an der Wand halten = Effizienz",
                "Eindrehen der Hüfte zur Reichweiten-Maximierung",
                "Hüft-Position bestimmt die Körper-Ausrichtung"
              ]
            },
            {
              title: "Spannung vs. Entspannung: Effizienz an der Wand",
              details: [
                "Gezielte Ganzkörperspannung für schwere Züge",
                "Bewusstes Lockern an guten Griffen zur Erholung",
                "Vermeiden von 'Dauer-Verkrampfung'"
              ]
            }
          ]
        },
        {
          title: "Modul 1.3: Sicherheit - Die wichtigste Lektion!",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#ffe4e6" />
              <rect x="40" y="120" width="120" height="40" rx="5" fill="#f43f5e" stroke="#be123c" strokeWidth="3" />
              <path d="M40 120 L60 100 L140 100 L160 120" fill="#fb7185" stroke="#be123c" strokeWidth="3" strokeLinejoin="round" />
              <circle cx="100" cy="70" r="20" fill="#881337" />
              <path d="M100 90 L100 110" stroke="#881337" strokeWidth="4" strokeLinecap="round" />
              <path d="M100 100 L80 90" stroke="#881337" strokeWidth="4" strokeLinecap="round" />
              <path d="M100 100 L120 90" stroke="#881337" strokeWidth="4" strokeLinecap="round" />
            </svg>
          ),
          topics: [
            {
              title: "Richtig Fallen (The Most Important Skill!)",
              details: [
                "Anatomie eines sicheren Falls",
                "Kontrolliert abspringen (nicht einfach loslassen)",
                "Landung: Füße → Knie gebeugt → Abrollen",
                "Was NICHT tun: Steif landen, Hände abstützen, rückwärts fallen",
                "Übung: Falltraining von verschiedenen Höhen",
                "Häufigste Verletzungen beim Fallen (Knöchel, Handgelenke)"
              ],
              media: {
                type: "image",
                url: "https://images.unsplash.com/photo-1588771999234-a7638f206b7c?q=80&w=300&auto=format&fit=crop", // Fall practice
                alt: "Falling Technique"
              },
              tasks: [
                "Übe das Abspringen aus niedriger Höhe (3x)",
                "Übe das Abrollen auf der Matte (3x)"
              ]
            },
            {
              title: "Spotting - Den Partner sichern",
              details: [
                "Rolle des Spotters (lenken, nicht fangen!)",
                "Richtige Position & Handstellung",
                "Kommunikation mit Kletterer",
                "Wann Spotting besonders wichtig ist (Traverse, Highballs)"
              ]
            },
            {
              title: "Hallen-Etikette & Regeln",
              details: [
                "NIEMALS unter Kletternden durchlaufen",
                "Matten freihalten (kein Gepäck, Handy, Wasserflaschen)",
                "Auf andere achten vor dem Einsteigen in Route",
                "'Next!' rufen wenn Boulder frei sein sollte",
                "Schuhe ausziehen außerhalb der Matten",
                "Chalk sparsam nutzen & Griffe säubern",
                "Lautstärke & Musik (Rücksicht!)"
              ]
            },
            {
              title: "Verletzungsprävention - Basics",
              details: [
                "Warum Aufwärmen essentiell ist",
                "Typische Boulder-Verletzungen (Pulley, Tendinitis, Schulterschäden)",
                "Red Flags: Schmerz vs. Muskelkater",
                "Bei Schmerz: PAUSE (nicht 'durchtrainieren'!)"
              ]
            }
          ]
        },
        {
          title: "Modul 1.4: Routen lesen & verstehen",
          topics: [
            {
              title: "Griff-Markierungen & Farben",
              details: [
                "Farbsysteme in verschiedenen Hallen",
                "Start-Griffe erkennen (oft doppelt markiert)",
                "Top-Griffe & Zonen",
                "Feet follow vs. markierte Tritte",
                "Volumes & Strukturen"
              ]
            },
            {
              title: "Schwierigkeitsgrade verstehen",
              details: [
                "Fontainebleau-Skala (3a, 4a, 5a, 6a, 6a+, 6b, 6b+...)",
                "V-Scale (USA): V0, V1, V2...",
                "Relative Schwierigkeit (Halle vs. Halle unterschiedlich!)",
                "Subjektive Faktoren (Körpergröße, Stil, Stärken)"
              ]
            },
            {
              title: "Boulder-Vokabular (das musst du kennen!)",
              details: [
                "Crux: Schwerste Stelle im Boulder",
                "Beta: Lösung/Sequenz für einen Boulder",
                "Flash: Beim 1. Versuch geschafft (mit Beta)",
                "Onsight: 1. Versuch OHNE vorherige Infos",
                "Redpoint: Nach mehreren Versuchen geschafft",
                "Project: Boulder an dem man langfristig arbeitet",
                "Send: Boulder erfolgreich abgeschlossen",
                "Pump: Unterarme sind 'dicht' (Übersäuerung)",
                "Crispy: Sehr gute Form/Leistung",
                "Sandbag: Boulder ist schwerer als Grad suggeriert"
              ]
            }
          ]
        },
        {
          title: "Modul 1.5: Ausrüstung - Gear für Anfänger",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#e0f2fe" />
              <path d="M60 120 Q60 150 100 150 Q160 150 160 110 Q160 80 120 80 L100 80 Q60 80 60 120 Z" fill="#0284c7" stroke="#0369a1" strokeWidth="3" />
              <path d="M60 120 L100 120" stroke="#e0f2fe" strokeWidth="3" strokeDasharray="4 2" />
              <path d="M160 110 Q160 130 120 130" fill="none" stroke="#075985" strokeWidth="3" />
              <rect x="90" y="70" width="40" height="20" rx="5" fill="#f59e0b" transform="rotate(-10 110 80)" />
            </svg>
          ),
          customIcon: "https://cdn-icons-png.flaticon.com/512/9637/9637887.png", // Shoe icon placeholder
          topics: [
            {
              title: "Kletterschuhe (DAS wichtigste Investment!)",
              details: [
                "Warum spezielle Schuhe? (Sticky Rubber, Vorspannung)",
                "Die 3 Schuhtypen: Neutral, Moderat, Aggressiv",
                "Passform: Eng aber nicht schmerzhaft",
                "Leisten vs. Klettverschluss vs. Schnürung",
                "Asymmetrie & Downturn",
                "Anfänger-Empfehlungen: La Sportiva Tarantula, Scarpa Origin, Five Ten Rogue",
                "Pflege: Geruch vermeiden, richtig lagern, Resohlen"
              ]
            },
            {
              title: "Chalk - Für besseren Grip",
              details: [
                "Warum Magnesiumcarbonat?",
                "Pulver vs. Block vs. Liquid Chalk",
                "Chalk-Bag vs. Chalk-Bucket",
                "Hallen-Regeln (viele nur Liquid Chalk!)",
                "Wie viel ist zu viel? (Over-chalking = schlechter Grip)"
              ]
            },
            {
              title: "Weiteres Equipment",
              details: [
                "Bürste: Griffe reinigen für besseren Grip",
                "Tape: Hautschutz bei Verletzungen",
                "Nagelfeile: Scharfe Kanten glätten",
                "Hautpflege: Creme, Balsam (z.B. Climb On!, Rhino Repair)",
                "Crashpad (Outdoor): Größe, Dicke, Hinge vs. Taco-Pad"
              ]
            },
            {
              title: "Budget-Guide",
              details: [
                "Minimal-Setup: Schuhe (geliehen), Liquid Chalk, Halleneintritt",
                "Starter-Set: ~100-150€",
                "Was kann warten? (Eigenes Crashpad, teure Schuhe)",
                "Gebraucht kaufen: Worauf achten?"
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Phase 2: Grundtechniken Entwickeln",
      description: "Baue ein solides technisches Fundament auf. Lerne effizient zu klettern und Kraft zu sparen.",
      modules: [
        {
          title: "Modul 2.1: Körperspannung - Das Fundament",
          topics: [
            {
              title: "Was ist Körperspannung?",
              details: [
                "Aktive Kontrolle von Kopf bis Fuß",
                "Core-Engagement (Bauch, Rücken)",
                "Nicht verkrampfen, sondern kontrolliert spannen!"
              ]
            },
            {
              title: "Der 'Stille Affe'",
              details: [
                "Gute Kletterer sind leise & flüssig",
                "Keine unkontrollierten Bewegungen",
                "Kein Beine-Schlackern oder Tritte-Knallen"
              ]
            },
            {
              title: "Praktische Übungen",
              details: [
                "Statisches Halten an der Wand (Core-Training)",
                "Langsame, kontrollierte Bewegungen",
                "Plank, Hollow Body Hold, L-Sit",
                "Hängen an der Stange mit angewinkelten Beinen"
              ]
            }
          ]
        },
        {
          title: "Modul 2.2: Arme & Handgelenke richtig nutzen",
          topics: [
            {
              title: "Arme gestreckt lassen!",
              details: [
                "Anfängerfehler: Hochziehen wie Klimmzüge",
                "Skelett trägt Gewicht, nicht Muskeln",
                "'Hängen' statt 'Halten'",
                "Arme als passive Verbindung zur Wand sehen"
              ]
            },
            {
              title: "Straight Arm vs. Bent Arm Climbing",
              details: [
                "Wann gestreckter Arm? (90% der Zeit!)",
                "Wann Lock-Off nötig? (Dynamische Moves, Manteln)"
              ]
            },
            {
              title: "Schultergesundheit",
              details: [
                "Rotatorenmanschette schützen",
                "Antagonisten-Training: Liegestütze, Dips",
                "Schulter-Mobility-Übungen"
              ]
            }
          ]
        },
        {
          title: "Modul 2.3: Greiftechniken - Die 7 Hauptgriffe",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fefce8" />
              <path d="M70 100 Q100 80 130 100 Q130 130 100 130 Q70 130 70 100 Z" fill="#a8a29e" stroke="#57534e" strokeWidth="3" />
              <path d="M100 130 L100 160" stroke="#78716c" strokeWidth="10" strokeLinecap="round" />
              <path d="M100 160 L80 180" stroke="#78716c" strokeWidth="10" strokeLinecap="round" />
              <path d="M100 160 L120 180" stroke="#78716c" strokeWidth="10" strokeLinecap="round" />
              <circle cx="85" cy="90" r="8" fill="#fca5a5" stroke="#b91c1c" strokeWidth="2" />
              <circle cx="100" cy="85" r="8" fill="#fca5a5" stroke="#b91c1c" strokeWidth="2" />
              <circle cx="115" cy="90" r="8" fill="#fca5a5" stroke="#b91c1c" strokeWidth="2" />
            </svg>
          ),
          topics: [
            {
              title: "1. JUG (Henkel)",
              details: [
                "Einfach umfassen, hängen, verschnaufen",
                "Beste Freunde des Anfängers"
              ]
            },
            {
              title: "2. CRIMP (Leiste)",
              details: [
                "Nur erste beiden Fingerglieder",
                "Open Crimp vs. Closed Crimp (Half Crimp vs. Full Crimp)",
                "⚠️ Verletzungsrisiko! Anfänger: Open Crimp bevorzugen",
                "Finger-Kraft & Sehnen-Anpassung dauert Monate"
              ]
            },
            {
              title: "3. SLOPER (Aufleger)",
              details: [
                "Runder, abfallender Griff",
                "Nicht 'greifen', sondern auflegen & Reibung nutzen",
                "Arme gestreckt, Körper tief, Schwerpunkt zentral",
                "Reibung = Kraft (Chalk wichtig!)"
              ]
            },
            {
              title: "4. PINCH (Zange)",
              details: [
                "Daumen vs. Finger (Opposition)",
                "Daumen-Kraft trainieren",
                "Variation: Side-Pinch, Thumb-Catch"
              ]
            },
            {
              title: "5. POCKET (Loch)",
              details: [
                "1-Finger (Mono), 2-Finger, 3-Finger Pockets",
                "⚠️ Hohe Belastung! Vorsicht als Anfänger",
                "Mittel- & Ringfinger meist am stärksten",
                "Nie ruckartig belasten"
              ]
            },
            {
              title: "6. UNDERCLING (Untergriff)",
              details: [
                "Griff von unten halten",
                "Arme ziehen, Füße drücken (Opposition!)",
                "Körperspannung extrem wichtig"
              ]
            },
            {
              title: "7. SIDE-PULL (Seitgriff)",
              details: [
                "Griff seitlich ziehen",
                "Körper in Opposition zum Zug",
                "Oft mit Flagging kombiniert"
              ]
            }
          ]
        },
        {
          title: "Modul 2.4: Fußtechnik - Das Wichtigste!",
          topics: [
            {
              title: "Grundprinzip: Beine drücken, Arme halten Balance!",
              details: [
                "Beine sind 3x stärker als Arme",
                "Gute Fußarbeit = Energieersparnis"
              ]
            },
            {
              title: "Präzises Treten",
              details: [
                "Schaue auf den Tritt BEVOR du drauf steigst!",
                "Innenkante (meist präziser)",
                "Spitze (für kleinste Tritte)",
                "Außenkante (beim Eindrehen)",
                "Ferse (Heel Hook)",
                "Oberseite (Toe Hook)"
              ]
            },
            {
              title: "Leise Treten = Gute Technik",
              details: [
                "Kein Knallen oder Rutschen",
                "Bewusstes Platzieren",
                "Vertrauen in die Schuhe"
              ]
            },
            {
              title: "Fußwechsel (Swapping Feet)",
              details: [
                "Auf einem Tritt den Fuß wechseln",
                "Statisch (langsam) vs. dynamisch (mit kleinem Sprung)",
                "Wichtig für Sequenzierung & Körperposition"
              ]
            },
            {
              title: "Pivoting (Drehen auf dem Tritt)",
              details: [
                "Körper um den Fuß auf dem Tritt drehen, um die Hüfte zu positionieren",
                "Ermöglicht flüssige Richtungswechsel"
              ]
            },
            {
              title: "Smearing (Anschmieren)",
              details: [
                "Kein Tritt sichtbar? Ganzen Schuh flach aufsetzen",
                "Reibung gegen Wand",
                "Körpergewicht nach vorn"
              ]
            },
            {
              title: "Eindrehen (Drop Knee Turn)",
              details: [
                "Reichweite +20cm!",
                "Seitlich zur Wand drehen",
                "Außenkante des Fußes auf Tritt",
                "Hüfte nah an die Wand",
                "Die effizienteste Technik für hohe Griffe!"
              ]
            },
            {
              title: "Heel Hook (Fersen-Haken)",
              details: [
                "Ferse auf Griff/Volume haken",
                "Zieht dich hoch oder stabilisiert",
                "Core-intensiv!",
                "In Überhängen essentiell"
              ],
              media: {
                type: "image",
                url: "https://images.unsplash.com/photo-1601225696677-d09585722839?q=80&w=300&auto=format&fit=crop",
                alt: "Heel Hook Technique"
              }
            },
            {
              title: "Toe Hook (Zehen-Haken)",
              details: [
                "Oberseite des Schuhs über Griff",
                "Sehr Core-intensiv",
                "Braucht flexible Schuhe"
              ]
            },
            {
              title: "Backstep",
              details: [
                "Außenkante des Fußes zur Wand",
                "Knie zeigt von Wand weg",
                "Effizient in Überhängen"
              ]
            }
          ]
        },
        {
          title: "Modul 2.5: Balance & Schwerpunkt",
          topics: [
            {
              title: "Körperschwerpunkt nah an der Wand",
              details: [
                "Hüfte zur Wand drücken",
                "Nicht 'abhängen' vom Griff"
              ]
            },
            {
              title: "Drei-Punkt-Kontakt",
              details: [
                "Immer 3 Punkte an der Wand (2 Füße, 1 Hand oder umgekehrt)",
                "Ausnahme: Dynamische Moves"
              ]
            },
            {
              title: "Das Balance-Dreieck",
              details: [
                "Visualisiere das Dreieck zwischen den Kontaktpunkten",
                "Der Schwerpunkt sollte idealerweise innerhalb dieses Dreiecks bleiben",
                "Aktives Verlagern des Dreiecks zur nächsten Position"
              ]
            },
            {
              title: "Flagging (Bein als Gegengewicht)",
              details: [
                "Inside Flag vs. Outside Flag",
                "Verhindert Drehung ('Barn Door')",
                "Stabilität ohne zusätzlichen Tritt"
              ]
            },
            {
              title: "Gegendruck (Opposition)",
              details: [
                "Drücken vs. Ziehen gleichzeitig",
                "Z.B. Undergriff + Fußdruck"
              ]
            }
          ]
        },
        {
          title: "Modul 2.6: Pacing & Erholung an der Wand",
          topics: [
            {
              title: "Kletter-Atmung",
              details: [
                "Nicht die Luft anhalten! (häufigster Fehler)",
                "Tiefes Ausatmen bei schweren Zügen ('Power-Schrei')",
                "Ruhige, tiefe Atmung an Rastpositionen zur Puls-Senkung"
              ]
            },
            {
              title: "Shake-Outs & Rastpositionen finden",
              details: [
                "Aktives 'Ausschütteln' der Arme an guten Griffen",
                "Einen Arm nach dem anderen lockern, um Pump abzubauen",
                "No-Hands-Rests (Knee-Bars, Bat Hangs) identifizieren",
                "Das richtige Timing: Wann lohnt sich eine Pause?"
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Phase 3: Fortgeschrittene Techniken",
      description: "Meistere komplexe Bewegungen, Dynamik und mentale Aspekte für schwerere Boulder.",
      modules: [
        {
          title: "Modul 3.1: Dynamische Bewegungen",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#ede9fe" />
              <path d="M40 140 Q100 40 160 80" stroke="#7c3aed" strokeWidth="6" fill="none" strokeDasharray="10 6" strokeLinecap="round" />
              <circle cx="40" cy="140" r="10" fill="#8b5cf6" />
              <path d="M150 80 L160 80 L155 95 Z" fill="#7c3aed" />
              <circle cx="160" cy="80" r="15" fill="#fcd34d" stroke="#d97706" strokeWidth="3" />
            </svg>
          ),
          topics: [
            {
              title: "Dead Point",
              details: [
                "Kontrollierter Schwung zum Griff",
                "Timing: Greifen im 'Schwerelosigkeits-Moment'",
                "Koordination Arme + Beine",
                "Keine Füße verlassen Tritte"
              ]
            },
            {
              title: "Dyno (Dynamischer Sprung)",
              details: [
                "Beide Füße verlassen Tritte",
                "Explosiver Push mit Beinen",
                "Voll-Körper-Einsatz",
                "Risiko: Sturzgefahr, hohe Belastung",
                "Subtypen: Double Dyno, Triple Dyno"
              ]
            },
            {
              title: "Jump & Catch",
              details: [
                "Timing ist alles",
                "Landung abfedern (Griff 'einfangen', nicht reißen)"
              ]
            },
            {
              title: "Coordination Training",
              details: [
                "Campus Board (NUR für Fortgeschrittene!)",
                "Plyometrische Übungen",
                "Sprung-Kraft entwickeln"
              ]
            },
            {
              title: "Anlauf & Koordination (Competition Style)",
              details: [
                "Laufen an der Wand vor dem Absprung",
                "Mehrere Tritte schnell hintereinander nutzen",
                "Timing & Präzision bei voller Geschwindigkeit"
              ]
            },
            {
              title: "Campus-Moves an der Wand",
              details: [
                "Ohne Füße zwischen Griffen bewegen",
                "Trainiert Oberkörperkraft & Lock-Off",
                "⚠️ Hohes Verletzungsrisiko, langsam steigern"
              ]
            }
          ]
        },
        {
          title: "Modul 3.2: Überhang-Techniken",
          topics: [
            {
              title: "Warum Überhänge anders sind",
              details: [
                "Mehr Armkraft nötig",
                "Core extrem wichtig",
                "Spezielle Rest-Positionen"
              ]
            },
            {
              title: "Knee-Bar (Knie-Stange)",
              details: [
                "Fuß + Knie klemmen dich ein",
                "Hände-frei-Position!",
                "Zum Ausruhen & Chalken",
                "Wo finden? Volumes, große Griffe über Tritten"
              ]
            },
            {
              title: "Bat Hang (Fledermaus)",
              details: [
                "Kopfüber hängen mit Heel Hooks",
                "Extrem Core-intensiv",
                "Meist in horizontalen Dächern"
              ]
            },
            {
              title: "Drop Knee",
              details: [
                "Extremes Eindrehen",
                "Ein Knie zeigt nach unten",
                "Hüfte GANZ nah an Wand",
                "Spart Armkraft"
              ]
            },
            {
              title: "Bicycle (Fahrrad)",
              details: [
                "Füße klemmen um Volume/Feature",
                "Ein Fuß drückt, einer zieht (Hook)"
              ]
            },
            {
              title: "Rose Move",
              details: [
                "Komplexer Move mit verdrehtem Körper",
                "Meist mit Backstep + Hook"
              ]
            },
            {
              title: "Moon Kick / I-Pogo",
              details: [
                "Bein-Schwung für Momentum",
                "Erzeugt Aufwärtsbewegung ohne Ziehen",
                "Sehr Core-intensiv"
              ]
            },
            {
              title: "Kontrolliertes 'Füße Schneiden' (Cutting Feet)",
              details: [
                "Wenn Füße vom Tritt rutschen/schwingen",
                "Core anspannen, um Schwingen zu stoppen",
                "Schnell Füße wieder an die Wand bringen"
              ]
            }
          ]
        },
        {
          title: "Modul 3.3: Mantling (Hochdrücken)",
          topics: [
            {
              title: "Was ist ein Mantel?",
              details: [
                "Hochdrücken auf eine Ablage/Volumen",
                "Wie aus Pool hochdrücken"
              ]
            },
            {
              title: "Technik",
              details: [
                "Von Ziehen zu Drücken wechseln",
                "Fuß hochbringen (smearing oder auf Griff)",
                "Gewicht verlagern",
                "Explosiv hochdrücken (Trizeps!)"
              ]
            },
            {
              title: "Mantel-Varianten",
              details: [
                "Low Mantel (niedriges Hochdrücken)",
                "High Mantel (explosiv)"
              ]
            }
          ]
        },
        {
          title: "Modul 3.4: Slab-Klettern (Platten)",
          topics: [
            {
              title: "Was ist Slab?",
              details: [
                "Wandneigung < 90° (zurückgelehnt)",
                "Technisch sehr anspruchsvoll",
                "Balance > Kraft"
              ]
            },
            {
              title: "Slab-Techniken",
              details: [
                "Gewicht auf Füße (nicht ziehen mit Armen!)",
                "Hüfte nah an Wand",
                "Smearing & Präzision",
                "Vertrauen in die Schuhe"
              ]
            },
            {
              title: "Mental Challenge",
              details: [
                "Höhenangst (exponiert!)",
                "Vertrauen entwickeln"
              ]
            }
          ]
        },
        {
          title: "Modul 3.5: Compression (Kompression)",
          topics: [
            {
              title: "Was ist Compression?",
              details: [
                "Zwei Griffe gegeneinander drücken/ziehen",
                "Massive Core-Spannung nötig",
                "Oft Side-Pulls oder Slopers"
              ]
            },
            {
              title: "Technik",
              details: [
                "Arme & Core arbeiten zusammen",
                "Füße oft nur minimal belastet",
                "Richtung: Griffe 'zusammenpressen'"
              ]
            }
          ]
        },
        {
          title: "Modul 3.6: Route Reading - Boulder knacken mit Kopf",
          topics: [
            {
              title: "Pre-Climb Analysis (vor dem Klettern analysieren!)",
              details: [
                "Alle Griffe identifizieren",
                "Crux finden",
                "Mögliche Sequenzen durchdenken",
                "Rest-Positionen planen"
              ]
            },
            {
              title: "Andere beobachten",
              details: [
                "Beta von anderen lernen (aber nicht blind kopieren!)",
                "Körpergrößen-Unterschiede beachten",
                "Was funktioniert? Was nicht?"
              ]
            },
            {
              title: "Visualisierung",
              details: [
                "Boulder im Kopf klettern",
                "Bewegungen in der Luft durchgehen",
                "Mental Rehearsal (wie Athleten vor Wettkampf)"
              ]
            },
            {
              title: "Von oben nach unten denken",
              details: [
                "Oft einfacher als Start → Top",
                "Wo muss ich sein, um den Top-Griff zu erreichen?",
                "Rückwärts-Sequenz planen"
              ]
            },
            {
              title: "Beta-Sharing & Community",
              details: [
                "'Spray Wall' (über Boulder reden & analysieren)",
                "Beta ist subjektiv (deine Lösung ≠ meine Lösung)",
                "Respektvoller Austausch"
              ]
            },
            {
              title: "Kletterstile erkennen & nutzen",
              details: [
                "Power vs. Technik vs. Balance",
                "Eigene Stärken/Schwächen identifizieren",
                "Boulder suchen, die Schwächen trainieren"
              ]
            },
            {
              title: "Forerunning (Bewegungen am Boden simulieren)",
              details: [
                "Bewegungsabläufe trocken üben",
                "Hilft bei komplexen Sequenzen",
                "Muskelgedächtnis aufbauen"
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Phase 4: Training & Konditionierung",
      description: "Systematisches Training für Kraft, Ausdauer und Verletzungsprävention.",
      modules: [
        {
          title: "Modul 4.1: Strukturiertes Aufwärmen & Abwärmen",
          topics: [
            {
              title: "Die 4 Phasen des perfekten Warm-ups",
              details: [
                "1. Puls erhöhen (5 Min): Seilspringen, Hampelmänner, leichtes Rudern",
                "2. Dynamische Dehnung & Mobilität (5 Min): Armkreisen, Beinpendel, Hüftrotationen",
                "3. Aktivierung (5 Min): Schulter-Aktivierung (Theraband), Core (Plank), Finger (Knetball)",
                "4. Kletterspezifisches Aufwärmen (10-15 Min): Traversieren, sehr leichte Boulder klettern"
              ]
            },
            {
              title: "Cool-down - Die oft vergessene Phase",
              details: [
                "Wichtigkeit zur Förderung der Regeneration",
                "Leichtes statisches Dehnen (Unterarme, Schultern, Hüfte) - 30s pro Dehnung",
                "Antagonisten-Übungen (5-10 Min): Leichte Liegestütze, Finger-Strecker"
              ]
            }
          ]
        },
        {
          title: "Modul 4.2: Trainingsplanung",
          topics: [
            {
              title: "Wie oft trainieren?",
              details: [
                "Anfänger: 2-3x pro Woche",
                "Fortgeschritten: 3-4x pro Woche",
                "Profis: 5-6x pro Woche (+ Ruhetage!)"
              ]
            },
            {
              title: "Session-Typen",
              details: [
                "Technik-Session: Leichte Boulder, Fokus auf saubere Ausführung",
                "Limit-Session: Boulder an persönlichem Limit, mehrere Versuche",
                "Ausdauer-Session: Viele Boulder, wenig Pause (Pump-Training)",
                "Projekt-Session: An einem schweren Boulder arbeiten"
              ]
            },
            {
              title: "Periodisierung",
              details: [
                "4 Wochen Training → 1 Woche Deload (reduzierte Intensität)",
                "Langfristige Planung (Saison-Ziele)"
              ]
            },
            {
              title: "Progression messen",
              details: [
                "Nicht nur nach Grad!",
                "Wie fühlt sich Boulder an?",
                "Mehr Versuche ohne Pump?",
                "Sauberere Technik?"
              ]
            },
            {
              title: "Trainingslog führen",
              details: [
                "Datum, Boulder geklettert, Gefühl (1-10)",
                "Besonderheiten: Schmerzen? Durchbrüche?",
                "Muster erkennen (bester Ruhetag-Rhythmus?)"
              ]
            }
          ]
        },
        {
          title: "Modul 4.3: Praktische Technik-Übungen (Drills)",
          topics: [
            {
              title: "Bewegungs-Flow Übungen",
              details: [
                "'Boulder-Golf': Einen Boulder mit so wenig Zügen wie möglich klettern",
                "'Add-On': Bei jeder Wiederholung einen Zug hinzufügen",
                "'Nur Füße': Eine Route nur mit den Füßen traversieren, Hände an einer Leiste"
              ]
            },
            {
              title: "Elimination Drills (Bewegungseinschränkung)",
              details: [
                "'Einarmig': Leichte Boulder nur mit einem Arm klettern",
                "'Stumme Füße': So leise klettern wie möglich",
                "'Sloper-Only': Nur auf Slopern klettern"
              ]
            },
            {
              title: "Präzisions-Drills",
              details: [
                "'Hovering': Hand/Fuß 2-3 Sekunden über dem nächsten Griff/Tritt schweben lassen",
                "'No-Read': Einen Boulder klettern, ohne ihn vorher anzusehen",
                "'Sticky Hands/Feet': Einmal platziert, dürfen Hände/Füße nicht mehr angepasst werden"
              ]
            }
          ]
        },
        {
          title: "Modul 4.4: Finger-Kraft & Hangboard-Training",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#fef2f2" />
              <rect x="40" y="80" width="120" height="40" rx="5" fill="#fca5a5" stroke="#991b1b" strokeWidth="3" />
              <rect x="50" y="90" width="20" height="10" rx="2" fill="#7f1d1d" />
              <rect x="80" y="90" width="40" height="10" rx="2" fill="#7f1d1d" />
              <rect x="130" y="90" width="20" height="10" rx="2" fill="#7f1d1d" />
              <path d="M70 120 L70 150" stroke="#991b1b" strokeWidth="4" strokeLinecap="round" />
              <path d="M130 120 L130 150" stroke="#991b1b" strokeWidth="4" strokeLinecap="round" />
              <circle cx="70" cy="160" r="8" fill="#fca5a5" stroke="#991b1b" strokeWidth="3" />
              <circle cx="130" cy="160" r="8" fill="#fca5a5" stroke="#991b1b" strokeWidth="3" />
            </svg>
          ),
          topics: [
            {
              title: "Finger-Anatomie verstehen",
              details: [
                "Pulley-System (Ringbänder)",
                "Sehnen vs. Muskeln (Sehnen brauchen LÄNGER!)",
                "A2-Pulley = häufigste Verletzung"
              ]
            },
            {
              title: "Häufigste Finger-Verletzungen",
              details: [
                "Pulley-Riss: Knacken + sofortiger Schmerz",
                "Tendinitis (Sehnenentzündung): Schleichender Schmerz",
                "Kapsel-Zerrung: Geschwollene Gelenke"
              ]
            },
            {
              title: "Verletzungsprävention",
              details: [
                "Progressive Belastung (10%-Regel!)",
                "Open Hand > Closed Crimp",
                "IMMER aufwärmen (10-15 Min!)",
                "Bei Schmerz: PAUSE!"
              ]
            },
            {
              title: "Hangboard-Training (NUR nach 6-12 Monaten Bouldern!)",
              details: [
                "Warum so spät? Sehnen brauchen Zeit!",
                "Max Hangs (10 Sek, hohes Gewicht)",
                "Repeater (7/3 Sek on/off, moderate Intensität)",
                "Progressions-Protokolle (z.B. Eva López, Bechtel)"
              ]
            },
            {
              title: "Antagonisten-Training",
              details: [
                "Finger-Strecker (Gummiband-Übungen)",
                "Push-Übungen (Liegestütze, Dips) gegen Pull-Übungen"
              ]
            }
          ]
        },
        {
          title: "Modul 4.5: Kraft-Training Off The Wall",
          topics: [
            {
              title: "Core-Training",
              details: [
                "Plank-Variationen",
                "Hollow Body Hold",
                "L-Sit / V-Sit",
                "Beinheben hängend",
                "Russian Twists",
                "Ab-Wheel Rollouts"
              ]
            },
            {
              title: "Pull-Training",
              details: [
                "Klimmzüge (verschiedene Griffarten)",
                "One-Arm Hangs (progression zu One-Arm Pullup)",
                "Frenchies (Lock-Offs auf verschiedenen Höhen)"
              ]
            },
            {
              title: "Push-Training (Antagonisten!)",
              details: [
                "Liegestütze (normal, diamond, archer)",
                "Dips",
                "Overhead Press",
                "Face Pulls (Schultergesundheit!)",
                "Handgelenk-Strecker"
              ]
            },
            {
              title: "Bein-Training",
              details: [
                "Kniebeugen (Explosive Power)",
                "Ausfallschritte (Balance)",
                "Box Jumps (Plyometrie für Dynos)"
              ]
            },
            {
              title: "Flexibility & Mobility",
              details: [
                "Hüft-Mobility (für hohe Tritte & Hooks)",
                "Schulter-Mobility (Overhead Reaches)",
                "Hamstrings (bessere Reichweite)",
                "Faszien-Training (Foam Rolling)"
              ]
            }
          ]
        },
        {
          title: "Modul 4.6: Ausdauer & Kampfkraft",
          topics: [
            {
              title: "Was ist 'Pump'?",
              details: [
                "Unterarm-Übersäuerung (Laktat)",
                "Gefühl: Arme werden dick & schwach",
                "Progression: Später pump = länger klettern"
              ]
            },
            {
              title: "Pump-Resistance Training",
              details: [
                "4x4s: 4 Boulder, 4 mal durchklettern, minimale Pause",
                "Pyramids: Aufsteigend schwierig, dann absteigend",
                "Linked Boulders: 2-3 Boulder hintereinander"
              ]
            },
            {
              title: "Power Endurance",
              details: [
                "Lange, intensive Boulder mehrmals wiederholen",
                "Interval Training an der Wand"
              ]
            },
            {
              title: "Aerobe Fitness",
              details: [
                "Klettern hilft, aber nicht genug!",
                "Cardio: Laufen, Radfahren (2x Woche, 30 Min)",
                "Schnellere Recovery zwischen Sessions"
              ]
            }
          ]
        },
        {
          title: "Modul 4.7: Ernährung für Boulderer",
          topics: [
            {
              title: "Basics",
              details: [
                "Protein für Muskel-Recovery (1.6-2g / kg Körpergewicht)",
                "Kohlenhydrate für Energie (vor & nach Session)",
                "Gesunde Fette (Hormone, Gelenke)",
                "Hydration! (Wasser vor, während, nach Training)"
              ]
            },
            {
              title: "Pre-Session Nutrition",
              details: [
                "1-2h vorher: Leichte Mahlzeit (Kohlenhydrate + etwas Protein)",
                "Beispiel: Banane + Nussbutter, Haferflocken, Reiswaffeln"
              ]
            },
            {
              title: "Post-Session Recovery",
              details: [
                "30-60 Min nach Training: Protein + Kohlenhydrate",
                "Beispiel: Protein-Shake, Hühnchen + Reis, Quark + Obst"
              ]
            },
            {
              title: "Gewichtsmanagement",
              details: [
                "⚠️ Vorsicht! Essstörungen in der Kletter-Community verbreitet",
                "Performance ≠ leicht sein",
                "Kraft-zu-Gewicht-Verhältnis, aber Gesundheit zuerst!"
              ]
            },
            {
              title: "Supplements (optional)",
              details: [
                "Protein-Pulver (Convenience)",
                "Creatin (Kraft & Power)",
                "Vitamin D (besonders im Winter)",
                "Omega-3 (Entzündungshemmung)"
              ]
            }
          ]
        },
        {
          title: "Modul 4.8: Recovery & Regeneration",
          topics: [
            {
              title: "Schlaf - Die wichtigste Recovery!",
              details: [
                "7-9 Stunden pro Nacht",
                "Muskel-Reparatur & Neuroplastizität (Bewegungen lernen)"
              ]
            },
            {
              title: "Aktive Regeneration",
              details: [
                "Yoga / Stretching",
                "Leichtes Cardio (Durchblutung)",
                "Spazieren, Schwimmen"
              ]
            },
            {
              title: "Passive Regeneration",
              details: [
                "Rest Days sind ESSENTIELL!",
                "Mindestens 1-2 komplette Ruhetage pro Woche"
              ]
            },
            {
              title: "Recovery-Tools",
              details: [
                "Foam Rolling (Faszien)",
                "Massage (professionell oder Selbst-Massage)",
                "Kontrast-Bad (Wechsel warm/kalt)",
                "Kompression (Compression Sleeves)"
              ]
            },
            {
              title: "Übertraining erkennen",
              details: [
                "Ständige Müdigkeit",
                "Schlechte Performance trotz Training",
                "Erhöhter Ruhepuls",
                "Reizbarkeit",
                "→ Lösung: WOCHE PAUSE!"
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Phase 5: Mentale Stärke & Psychologie",
      description: "Der Kopf klettert mit. Überwinde Ängste und entwickle ein starkes Mindset.",
      modules: [
        {
          title: "Modul 5.1: Angst überwinden",
          illustration: (
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <circle cx="100" cy="100" r="90" fill="#e0e7ff" />
              <path d="M70 80 Q100 50 130 80 Q150 100 130 130 Q100 160 70 130 Q50 100 70 80 Z" fill="#a5b4fc" stroke="#4338ca" strokeWidth="3" />
              <path d="M80 90 Q90 80 100 90" stroke="#4338ca" strokeWidth="3" fill="none" />
              <path d="M100 90 Q110 80 120 90" stroke="#4338ca" strokeWidth="3" fill="none" />
              <circle cx="100" cy="60" r="15" fill="#fbbf24" stroke="#b45309" strokeWidth="2" />
              <path d="M90 60 L80 50" stroke="#b45309" strokeWidth="2" />
              <path d="M110 60 L120 50" stroke="#b45309" strokeWidth="2" />
              <path d="M100 45 L100 35" stroke="#b45309" strokeWidth="2" />
            </svg>
          ),
          topics: [
            {
              title: "Höhenangst beim Bouldern",
              details: [
                "Auch 4 Meter können Angst auslösen!",
                "Progressive Desensibilisierung: Langsam höher",
                "Falltechnik üben → Vertrauen entwickeln",
                "Abspringen üben (bewusst loslassen)"
              ]
            },
            {
              title: "Versagensangst",
              details: [
                "'Alle schauen zu!'",
                "Realität: Niemand urteilt (Boulder-Community ist supportive!)",
                "Fallen gehört dazu (Profis fallen mehr als Anfänger!)"
              ]
            },
            {
              title: "Angst vor Verletzung",
              details: [
                "Berechtigt! Aber nicht lähmend",
                "Risiko-Management: Gute Technik, Aufwärmen, Grenzen kennen",
                "'Educated Risk' (kalkuliertes Risiko)"
              ]
            }
          ]
        },
        {
          title: "Modul 5.2: Mentale Techniken",
          topics: [
            {
              title: "Visualisierung",
              details: [
                "Boulder mental durchklettern (vor dem Versuch)",
                "Erfolgreiche Moves im Kopf verankern",
                "Wissenschaftlich belegt: Neuronen feuern wie bei echter Bewegung!"
              ]
            },
            {
              title: "Positives Self-Talk",
              details: [
                "Innerer Dialog: 'Ich kann das!' statt 'Ich schaff das nie!'",
                "Growth Mindset (Wachstums-Mentalität)",
                "Fehler = Lern-Chancen"
              ]
            },
            {
              title: "Atemtechniken",
              details: [
                "Tiefes Atmen reduziert Stress",
                "4-7-8 Atmung (4 Sek einatmen, 7 Sek halten, 8 Sek ausatmen)",
                "Während des Kletterns: Nicht Luft anhalten!"
              ]
            },
            {
              title: "Fokus & Flow-State",
              details: [
                "'Im Moment sein'",
                "Tunnel-Vision entwickeln (nur Boulder, keine Ablenkungen)",
                "Musik? Manche ja, manche nein (Präferenz)"
              ]
            }
          ]
        },
        {
          title: "Modul 5.3: Frustration & Plateaus meistern",
          topics: [
            {
              title: "Der Boulder, der nicht geht",
              details: [
                "10, 20, 50 Versuche... und immer derselbe Fehler",
                "Strategie 1: Pause machen (nächster Tag / nächste Woche)",
                "Strategie 2: Beta ändern (neue Sequenz probieren)",
                "Strategie 3: Akzeptieren & weiter gehen (nicht jeder Boulder für jeden)"
              ]
            },
            {
              title: "Plateaus (keine Progression)",
              details: [
                "Normal! Jeder hat sie",
                "Körper & Geist brauchen Zeit zum Adaptieren",
                "Fokus auf Prozess, nicht Ergebnis",
                "Verschiedene Aspekte trainieren (Technik, Kraft, Flexibilität)"
              ]
            },
            {
              title: "Vergleich mit anderen",
              details: [
                "'Der ist viel besser als ich und klettert kürzer!'",
                "Jeder hat andere Stärken, Körper, Vorgeschichte",
                "Fokus auf eigene Progression"
              ]
            }
          ]
        },
        {
          title: "Modul 5.4: Ziele setzen (Goals)",
          topics: [
            {
              title: "SMART-Ziele",
              details: [
                "Specific (spezifisch)",
                "Measurable (messbar)",
                "Achievable (erreichbar)",
                "Relevant (relevant für dich)",
                "Time-bound (zeitlich definiert)"
              ]
            },
            {
              title: "Kurz-, Mittel-, Langfristige Ziele",
              details: [
                "Kurzfristig: 'Diese Woche 3x trainieren'",
                "Mittelfristig: 'In 3 Monaten 5c klettern'",
                "Langfristig: 'In 1 Jahr Outdoor bouldern in Fontainebleau'"
              ]
            },
            {
              title: "Prozess-Ziele vs. Ergebnis-Ziele",
              details: [
                "Prozess: 'Jede Session 10 Min Fußtechnik üben'",
                "Ergebnis: 'Boulder XY schaffen'",
                "Prozess-Ziele = besser kontrollierbar!"
              ]
            },
            {
              title: "Celebrations (Erfolge feiern!)",
              details: [
                "Auch kleine Fortschritte wertschätzen",
                "Mit Freunden teilen",
                "Trainingslog: 'Wins' notieren"
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Phase 6: Spezial-Themen & Outdoor",
      description: "Erweitere dein Horizont: Felsklettern, Wettkämpfe und Spezialdisziplinen.",
      modules: [
        {
          title: "Modul 6.1: Outdoor-Bouldern - Der nächste Schritt",
          topics: [
            {
              title: "Vorbereitung",
              details: [
                "Crashpad kaufen/leihen (Hinge, Taco, Größe)",
                "Bürste, Chalk, Tape",
                "Guidebook oder App (27 Crags, Mountain Project)",
                "Wetter checken (Regen = rutschiger Fels!)"
              ]
            },
            {
              title: "Fels-Typen verstehen",
              details: [
                "Granit (Fontainebleau, Yosemite): Reibung, Sloper",
                "Sandstein (Elbsandgebirge): Soft, Verletzungs-anfällig",
                "Kalkstein (Frankenjura): Pockets, Leisten",
                "Basalt, Gneis, etc."
              ]
            },
            {
              title: "Unterschiede Halle → Outdoor",
              details: [
                "Keine Farb-Markierungen (Routenfindung schwieriger!)",
                "Wetter-Einfluss (Temperatur, Luftfeuchtigkeit)",
                "Unebener Boden (Spotting wichtiger!)",
                "Natürliche Griffe (keine Schrauben-Griffe)"
              ]
            },
            {
              title: "Spotting Outdoor",
              details: [
                "Crashpads positionieren",
                "Mehrere Pads überlappen",
                "Spotter MUSS aufmerksam sein (keine Ablenkung!)"
              ]
            },
            {
              title: "Leave No Trace (LNT) Ethik",
              details: [
                "Chalk minimieren (kann Fels beschädigen)",
                "Keine Bäume/Pflanzen beschädigen",
                "Müll mitnehmen",
                "Lärm reduzieren (Anwohner, Wildtiere)",
                "Zugangs-Beschränkungen respektieren (Vogelschutz!)"
              ]
            },
            {
              title: "Beliebte Outdoor-Gebiete",
              details: [
                "Europa: Fontainebleau (FR), Albarracín (ES), Magic Wood (CH), Ticino (CH)",
                "USA: Bishop, Hueco Tanks, Red Rock, Squamish",
                "Welt: Rocklands (SA), Hampi (IN), Shiobara (JP)"
              ]
            }
          ]
        },
        {
          title: "Modul 6.2: Wettkämpfe & Competitions",
          topics: [
            {
              title: "Arten von Wettkämpfen",
              details: [
                "Locals: Hallen-Comps (oft Anfänger-freundlich!)",
                "Regional: Landes-Cups",
                "National: Deutsche Meisterschaften",
                "International: World Cups, Olympia"
              ]
            },
            {
              title: "Wettbewerbs-Formate",
              details: [
                "Boulder-Format: X Probleme, Y Minuten, Punkte für Tops/Zones",
                "Flash-Format: Ein Versuch pro Boulder",
                "Onsight: Keine Vorschau"
              ]
            },
            {
              title: "Warum an Comps teilnehmen?",
              details: [
                "Motivation & Ziele",
                "Community treffen",
                "Spaß!",
                "Keine Profi-Ambitionen nötig"
              ]
            },
            {
              title: "Wettkampf-Vorbereitung",
              details: [
                "Mental vorbereiten (Nervosität ist normal!)",
                "Aufwärmen (länger als normal!)",
                "Ernährung & Hydration",
                "Spaß haben!"
              ]
            }
          ]
        },
        {
          title: "Modul 6.3: Spezial-Stile & Nischen",
          topics: [
            {
              title: "Highball Bouldering",
              details: [
                "Sehr hohe Boulder (6-12 Meter)",
                "Sturzrisiko extrem hoch!",
                "Nur für Erfahrene",
                "Mentale Stärke essentiell"
              ]
            },
            {
              title: "Deep Water Soloing (DWS)",
              details: [
                "Über Wasser klettern, Fall ins Wasser",
                "Mallorca (Es Pontàs), Thailand (Railay)",
                "Einzigartige Erfahrung!"
              ]
            },
            {
              title: "Competition Climbing (als Stil)",
              details: [
                "Sehr dynamisch, athletisch",
                "Künstliche Volumes & Griffe",
                "Kreative Probleme"
              ]
            },
            {
              title: "Ästhetik-Bouldern",
              details: [
                "'Schönheit' der Bewegung",
                "Klassische Linien, elegante Moves",
                "Font-Bouldering-Kultur"
              ]
            },
            {
              title: "Board Climbing (MoonBoard, Kilter, Tension)",
              details: [
                "Systematisches Training an Brettern mit definierter Griff-Anordnung",
                "Sehr kraft-intensiv, für Fortgeschrittene",
                "Weltweite Community & Benchmark-Probleme",
                "App-gesteuert mit LED-Lichtern"
              ]
            },
            {
              title: "System Board Training",
              details: [
                "Training an einer Wand mit symmetrischem Griff-Layout",
                "Gezieltes Training von Schwächen",
                "Erstellen eigener Boulder-Probleme"
              ]
            }
          ]
        },
        {
          title: "Modul 6.4: Langfristige Kletter-Karriere",
          topics: [
            {
              title: "Mit Verletzungen umgehen",
              details: [
                "Unvermeidbar über Jahre",
                "Richtig rehabilitieren (nicht zu früh zurück!)",
                "Physiotherapie",
                "Alternative Training während Heilung"
              ]
            },
            {
              title: "Altern & Bouldern",
              details: [
                "Viele klettern bis 60+ Jahre!",
                "Fokus verschiebt sich: Kraft → Technik",
                "Anpassung des Trainings (weniger Intensität, mehr Recovery)"
              ]
            },
            {
              title: "Balance mit Leben",
              details: [
                "Bouldern als Hobby vs. Obsession",
                "Work-Life-Climb Balance",
                "Soziale Aspekte (Freunde, Familie)"
              ]
            },
            {
              title: "Andere Kletter-Disziplinen erkunden",
              details: [
                "Sport Climbing (Seilklettern)",
                "Trad Climbing (mit eigener Sicherung)",
                "Alpines Klettern (Berge!)"
              ]
            }
          ]
        }
      ]
    }
  ]
};
