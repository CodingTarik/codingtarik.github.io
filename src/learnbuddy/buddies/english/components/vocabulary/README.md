# Vocabulary Trainer - Vokabeltrainer

Ein umfassendes Vokabellern-System mit Google Sheets Integration, Spaced Repetition und Gamification.

## Features

### 🎴 Decks
- Erstelle unbegrenzt viele Vokabel-Decks
- Verknüpfe jedes Deck mit einem Google Spreadsheet
- Importiere/Exportiere Decks als JSON

### 📚 Zwei Lernmodi

#### Spaced Repetition
- Lernen basierend auf wissenschaftlich bewährter Spaced Repetition Methodik (SuperMemo 2)
- Bewerte jede Karte mit: Again, Hard, Good, Easy
- System berechnet automatisch die nächste Wiederholungszeit
- Optimale Lernintervalle für langfristiges Behalten

#### General Review
- Gehe alle Karten durch (mit Shuffle-Funktion)
- Bewerte dein Wissenslevel mit 1-5 Sternen
- Ideale für erste Durchsicht neuer Vokabeln
- Navigation vor/zurück möglich

### 🎮 Gamification
- **Streak System**: Tägliche Lern-Serien tracken
- **Progress Bars**: Visuelles Feedback für Fortschritt
- **Achievements**: Badges für erreichte Meilensteine
- **Weekly Goals**: Setze und erreiche Wochenziele
- **Statistics**: Detaillierte Statistiken über Lernfortschritt

### 📊 Google Sheets Integration
- Alle Daten in deinem eigenen Google Spreadsheet
- Volle Kontrolle über deine Daten
- Bearbeite Karten direkt im Spreadsheet oder in der App
- Automatische Synchronisation

### ✨ Markdown Support
- Formatiere Karteninhalt mit Markdown
- Füge Bilder ein
- Erstelle Listen, Code-Blöcke, etc.

### 🖼️ Bild-Integration
- Füge Bilder zu Vokabelkarten hinzu (über Image_URL Spalte)
- Integrierte Bildersuche ohne API-Key (LoremFlickr)
- Bilder werden auf der Rückseite der Karte angezeigt (optimal für Lerneffekt)
- Bilder können jederzeit entfernt oder ausgetauscht werden

## Setup-Anleitung

### 1. Google Spreadsheet erstellen

1. Öffne [Google Sheets](https://sheets.google.com)
2. Erstelle ein neues Spreadsheet
3. Füge diese Header in die erste Zeile ein:

```
Wort    Übersetzung    Weitere Erklärung    Rating_General    Last_Review_date    Next_Review_date    Interval    Ease_Factor    Repetitions    Image_URL
```

### 2. Apps Script einrichten

1. Im Spreadsheet: **Erweiterungen → Apps Script**
2. Kopiere den bereitgestellten Code (wird beim Erstellen eines Decks angezeigt)
3. Speichere das Projekt
4. **Bereitstellen → Neue Bereitstellung**
5. Typ: **Web-App**
6. Einstellungen:
   - Ausführen als: **Ich**
   - Wer hat Zugriff: **Jeder**
7. Kopiere die Web-App URL

### 3. Deck in der App erstellen

1. Klicke auf "Neues Deck"
2. Gib Namen und Beschreibung ein
3. Folge der Setup-Anleitung
4. Füge die Web-App URL ein
5. Fertig! 🎉

## Datenformat

### Spreadsheet-Struktur

| Spalte | Beschreibung | Beispiel |
|--------|--------------|----------|
| Wort | Das englische Wort/Phrase | "serendipity" |
| Übersetzung | Übersetzung in deine Sprache | "glücklicher Zufall" |
| Weitere Erklärung | Zusätzliche Infos (Markdown) | "**Example:** It was pure serendipity that we met." |
| Rating_General | Deine Bewertung (1-5) | 4 |
| Last_Review_date | Letzte Wiederholung | 2025-11-07T10:30:00.000Z |
| Next_Review_date | Nächste Wiederholung | 2025-11-14T10:30:00.000Z |
| Interval | Intervall in Tagen | 7 |
| Ease_Factor | Schwierigkeitsfaktor | 2.5 |
| Repetitions | Anzahl erfolgreicher Wiederholungen | 3 |
| Image_URL | URL zu einem Beispielbild (optional) | "https://source.unsplash.com/featured/800x600/?serendipity" |

### Beispiel-Karte mit Markdown

**Wort:** eloquent

**Übersetzung:** redegewandt, wortgewandt

**Weitere Erklärung:**
```markdown
**Definition:** Fluent or persuasive in speaking or writing

**Example:**
- She gave an *eloquent* speech at the conference
- His *eloquent* defense convinced the jury

**Synonyms:** articulate, fluent, expressive

**Pronunciation:** /ˈel.ə.kwənt/

![Speaker Icon](https://example.com/speaker.png)
```

## Lernalgorithmus

### Spaced Repetition (SuperMemo 2)

Das System verwendet den SuperMemo 2 Algorithmus:

- **Again (1)**: < 1 Minute - Intervall wird zurückgesetzt
- **Hard (2)**: Intervall halbiert
- **Good (3)**: Normales Intervall (1 Tag → 6 Tage → dann * Ease Factor)
- **Easy (4)**: Längeres Intervall (4 Tage)

Der **Ease Factor** (Leichtigkeitsfaktor) wird bei jeder Bewertung angepasst:
- Startet bei 2.5
- Wird höher bei einfachen Karten
- Wird niedriger bei schweren Karten
- Minimum: 1.3

## Tipps für effektives Lernen

1. **Täglich lernen**: Auch nur 5-10 Minuten pro Tag sind effektiv
2. **Ehrlich bewerten**: Rate Karten nach echtem Wissen, nicht nach Gefühl
3. **Kontext hinzufügen**: Nutze das Erklärungsfeld für Beispielsätze
4. **Kleine Decks**: Lieber mehrere kleine thematische Decks als ein riesiges
5. **Bilder nutzen**: Visuelle Verbindungen helfen beim Lernen
6. **Review-Balance**: Nutze beide Modi - Spaced Repetition für Langzeitlernen, General Review zum Auffrischen

## Troubleshooting

### Karten werden nicht geladen
- Prüfe die Web-App URL
- Stelle sicher, dass das Apps Script korrekt deployed ist
- Prüfe, ob "Jeder" Zugriff hat

### Änderungen werden nicht gespeichert
- Prüfe die Berechtigung "Ausführen als: Ich"
- Stelle sicher, dass das Spreadsheet nicht schreibgeschützt ist

### Spaced Repetition zeigt keine Karten
- Das ist normal! Es bedeutet, dass keine Karten zur Wiederholung fällig sind
- Nutze General Review, um alle Karten zu lernen

## Datenschutz

- Alle Daten werden in DEINEM Google Spreadsheet gespeichert
- Die App speichert nur Deck-Metadaten (Name, URL) lokal im Browser
- Review-Historie wird lokal gespeichert
- Keine Daten werden an externe Server gesendet

## Technische Details

### Verwendete Technologien
- React
- LocalStorage für Deck-Metadaten
- Google Apps Script für Spreadsheet-API
- SuperMemo 2 Algorithmus
- React Markdown für Rendering

### Datenspeicherung
```javascript
// LocalStorage Keys
'english_vocabulary_decks'         // Deck-Metadaten
'english_vocabulary_review_history' // Review-Sessions
```

## Credits

Entwickelt für LearnBuddy - Your Personal Learning Companion

Basiert auf dem SuperMemo 2 Algorithmus von Piotr Woźniak

