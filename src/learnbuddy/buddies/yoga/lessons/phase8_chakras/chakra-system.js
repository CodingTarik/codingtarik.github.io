export const chakraSystem = {
  title: { de: "Das Chakra-System - 7 Energiezentren, Posen & Meditation", en: "The Chakra System - 7 Energy Centers, Poses & Meditation" },
  description: { de: "Lerne die 7 Chakren, zugeordnete Posen, Meditationen und wie du Blockaden erkennst.", en: "Learn the 7 chakras, associated poses, meditations, and how to recognize blockages." },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Das Chakra-System</h2>
  <p className="text-lg leading-relaxed">Chakren (Sanskrit: „Räder") sind Energiezentren entlang der Wirbelsäule. Die yogische Tradition beschreibt 7 Hauptchakren, die jeweils bestimmte körperliche, emotionale und spirituelle Aspekte repräsentieren. Wenn ein Chakra blockiert oder überaktiv ist, kann sich das auf verschiedene Weise manifestieren.</p>

  <div className="space-y-4">
    <div className="bg-red-50 dark:bg-red-900/40 p-5 rounded-lg border-2 border-red-200 dark:border-red-800">
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">1. Muladhara – Wurzelchakra (Rot)</h4>
      <p className="text-red-700 dark:text-red-300 text-sm mb-2"><strong>Lage:</strong> Basis der Wirbelsäule | <strong>Thema:</strong> Sicherheit, Erdung, Überleben</p>
      <p className="text-red-700 dark:text-red-300 text-sm"><strong>Posen:</strong> Mountain Pose, Warrior I, Bridge, Malasana | <strong>Mantra:</strong> LAM</p>
      <p className="text-red-700 dark:text-red-300 text-sm"><strong>Blockade:</strong> Angst, Unsicherheit, finanzielle Sorgen | <strong>Balance:</strong> Stabilität, Vertrauen</p>
    </div>

    <div className="bg-orange-50 dark:bg-orange-900/40 p-5 rounded-lg border-2 border-orange-200 dark:border-orange-800">
      <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">2. Svadhisthana – Sakralchakra (Orange)</h4>
      <p className="text-orange-700 dark:text-orange-300 text-sm mb-2"><strong>Lage:</strong> Unterbauch | <strong>Thema:</strong> Kreativität, Emotionen, Sexualität</p>
      <p className="text-orange-700 dark:text-orange-300 text-sm"><strong>Posen:</strong> Pigeon, Butterfly, Goddess, Hip Circles | <strong>Mantra:</strong> VAM</p>
      <p className="text-orange-700 dark:text-orange-300 text-sm"><strong>Blockade:</strong> Emotionale Taubheit, Schuldgefühle | <strong>Balance:</strong> Kreativität, Lebensfreude</p>
    </div>

    <div className="bg-yellow-50 dark:bg-yellow-900/40 p-5 rounded-lg border-2 border-yellow-200 dark:border-yellow-800">
      <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">3. Manipura – Solarplexus-Chakra (Gelb)</h4>
      <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-2"><strong>Lage:</strong> Oberbauch | <strong>Thema:</strong> Willenskraft, Selbstvertrauen, Transformation</p>
      <p className="text-yellow-700 dark:text-yellow-300 text-sm"><strong>Posen:</strong> Boat, Warrior III, Plank, Twists | <strong>Mantra:</strong> RAM</p>
      <p className="text-yellow-700 dark:text-yellow-300 text-sm"><strong>Blockade:</strong> Geringes Selbstwertgefühl, Kontrollbedürfnis | <strong>Balance:</strong> Entschlossenheit, innere Stärke</p>
    </div>

    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">4. Anahata – Herzchakra (Grün)</h4>
      <p className="text-green-700 dark:text-green-300 text-sm mb-2"><strong>Lage:</strong> Brustmitte | <strong>Thema:</strong> Liebe, Mitgefühl, Verbindung</p>
      <p className="text-green-700 dark:text-green-300 text-sm"><strong>Posen:</strong> Camel, Cobra, Fish, Bridge mit Brustöffnung | <strong>Mantra:</strong> YAM</p>
      <p className="text-green-700 dark:text-green-300 text-sm"><strong>Blockade:</strong> Beziehungsprobleme, Einsamkeit | <strong>Balance:</strong> Bedingungslose Liebe, Empathie</p>
    </div>

    <div className="bg-sky-50 dark:bg-sky-900/40 p-5 rounded-lg border-2 border-sky-200 dark:border-sky-800">
      <h4 className="font-bold text-sky-800 dark:text-sky-200 mb-2">5. Vishuddha – Kehlchakra (Blau)</h4>
      <p className="text-sky-700 dark:text-sky-300 text-sm mb-2"><strong>Lage:</strong> Kehle | <strong>Thema:</strong> Kommunikation, Wahrheit, Selbstausdruck</p>
      <p className="text-sky-700 dark:text-sky-300 text-sm"><strong>Posen:</strong> Shoulderstand, Plow, Fish, Neck Stretches | <strong>Mantra:</strong> HAM</p>
      <p className="text-sky-700 dark:text-sky-300 text-sm"><strong>Blockade:</strong> Angst zu sprechen, unterdrückte Wahrheit | <strong>Balance:</strong> Klare Kommunikation, Authentizität</p>
    </div>

    <div className="bg-indigo-50 dark:bg-indigo-900/40 p-5 rounded-lg border-2 border-indigo-200 dark:border-indigo-800">
      <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">6. Ajna – Stirnchakra / Drittes Auge (Indigo)</h4>
      <p className="text-indigo-700 dark:text-indigo-300 text-sm mb-2"><strong>Lage:</strong> Zwischen den Augenbrauen | <strong>Thema:</strong> Intuition, Weisheit, Klarheit</p>
      <p className="text-indigo-700 dark:text-indigo-300 text-sm"><strong>Posen:</strong> Child's Pose, Dolphin, Headstand, Seated Meditation | <strong>Mantra:</strong> OM</p>
      <p className="text-indigo-700 dark:text-indigo-300 text-sm"><strong>Blockade:</strong> Verwirrung, Kopfschmerzen, fehlende Klarheit | <strong>Balance:</strong> Intuition, inneres Wissen</p>
    </div>

    <div className="bg-violet-50 dark:bg-violet-900/40 p-5 rounded-lg border-2 border-violet-200 dark:border-violet-800">
      <h4 className="font-bold text-violet-800 dark:text-violet-200 mb-2">7. Sahasrara – Kronenchakra (Violett/Weiß)</h4>
      <p className="text-violet-700 dark:text-violet-300 text-sm mb-2"><strong>Lage:</strong> Scheitel des Kopfes | <strong>Thema:</strong> Spiritualität, Einheit, Erleuchtung</p>
      <p className="text-violet-700 dark:text-violet-300 text-sm"><strong>Posen:</strong> Headstand, Savasana, Lotus, Meditation | <strong>Mantra:</strong> Stille / OM</p>
      <p className="text-violet-700 dark:text-violet-300 text-sm"><strong>Blockade:</strong> Spirituelle Leere, Isolation | <strong>Balance:</strong> Verbundenheit mit allem, innerer Frieden</p>
    </div>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-6">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Chakra-Meditation (20 Minuten)</h3>
    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li>Setze dich bequem hin, schließe die Augen</li>
      <li>Beginne beim Wurzelchakra: Visualisiere rotes Licht, chante „LAM" (3 Min.)</li>
      <li>Wandere hoch durch jedes Chakra mit seiner Farbe und seinem Mantra (je 2 Min.)</li>
      <li>Am Kronenchakra: Stille, spüre Verbindung mit allem (3 Min.)</li>
      <li>Lasse alle Farben zu weißem Licht verschmelzen, komme langsam zurück</li>
    </ol>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Praktische Übung: Chakra-Balancing Sequenz</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Mountain Pose (Wurzel) – 1 Min. mit Fokus auf Erdung</li>
      <li>Pigeon Pose (Sakral) – 2 Min. pro Seite</li>
      <li>Boat Pose (Solarplexus) – 30 Sek. x 3</li>
      <li>Camel Pose (Herz) – 1 Min.</li>
      <li>Shoulderstand (Kehle) – 2 Min.</li>
      <li>Child's Pose (Drittes Auge) – 2 Min.</li>
      <li>Savasana (Krone) – 5 Min. Meditation</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">The Chakra System</h2>
  <p className="text-lg leading-relaxed">Chakras (Sanskrit: "wheels") are energy centers along the spine. The yogic tradition describes 7 main chakras, each representing specific physical, emotional, and spiritual aspects. When a chakra is blocked or overactive, it can manifest in various ways.</p>

  <div className="space-y-4">
    <div className="bg-red-50 dark:bg-red-900/40 p-5 rounded-lg border-2 border-red-200 dark:border-red-800">
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">1. Muladhara – Root Chakra (Red)</h4>
      <p className="text-red-700 dark:text-red-300 text-sm mb-2"><strong>Location:</strong> Base of spine | <strong>Theme:</strong> Safety, grounding, survival</p>
      <p className="text-red-700 dark:text-red-300 text-sm"><strong>Poses:</strong> Mountain Pose, Warrior I, Bridge, Malasana | <strong>Mantra:</strong> LAM</p>
      <p className="text-red-700 dark:text-red-300 text-sm"><strong>Blockage:</strong> Fear, insecurity, financial worries | <strong>Balanced:</strong> Stability, trust</p>
    </div>

    <div className="bg-orange-50 dark:bg-orange-900/40 p-5 rounded-lg border-2 border-orange-200 dark:border-orange-800">
      <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">2. Svadhisthana – Sacral Chakra (Orange)</h4>
      <p className="text-orange-700 dark:text-orange-300 text-sm mb-2"><strong>Location:</strong> Lower abdomen | <strong>Theme:</strong> Creativity, emotions, sexuality</p>
      <p className="text-orange-700 dark:text-orange-300 text-sm"><strong>Poses:</strong> Pigeon, Butterfly, Goddess, Hip Circles | <strong>Mantra:</strong> VAM</p>
      <p className="text-orange-700 dark:text-orange-300 text-sm"><strong>Blockage:</strong> Emotional numbness, guilt | <strong>Balanced:</strong> Creativity, joy of living</p>
    </div>

    <div className="bg-yellow-50 dark:bg-yellow-900/40 p-5 rounded-lg border-2 border-yellow-200 dark:border-yellow-800">
      <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">3. Manipura – Solar Plexus Chakra (Yellow)</h4>
      <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-2"><strong>Location:</strong> Upper abdomen | <strong>Theme:</strong> Willpower, self-confidence, transformation</p>
      <p className="text-yellow-700 dark:text-yellow-300 text-sm"><strong>Poses:</strong> Boat, Warrior III, Plank, Twists | <strong>Mantra:</strong> RAM</p>
      <p className="text-yellow-700 dark:text-yellow-300 text-sm"><strong>Blockage:</strong> Low self-esteem, need for control | <strong>Balanced:</strong> Determination, inner strength</p>
    </div>

    <div className="bg-green-50 dark:bg-green-900/40 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">4. Anahata – Heart Chakra (Green)</h4>
      <p className="text-green-700 dark:text-green-300 text-sm mb-2"><strong>Location:</strong> Center of chest | <strong>Theme:</strong> Love, compassion, connection</p>
      <p className="text-green-700 dark:text-green-300 text-sm"><strong>Poses:</strong> Camel, Cobra, Fish, Bridge with chest opening | <strong>Mantra:</strong> YAM</p>
      <p className="text-green-700 dark:text-green-300 text-sm"><strong>Blockage:</strong> Relationship issues, loneliness | <strong>Balanced:</strong> Unconditional love, empathy</p>
    </div>

    <div className="bg-sky-50 dark:bg-sky-900/40 p-5 rounded-lg border-2 border-sky-200 dark:border-sky-800">
      <h4 className="font-bold text-sky-800 dark:text-sky-200 mb-2">5. Vishuddha – Throat Chakra (Blue)</h4>
      <p className="text-sky-700 dark:text-sky-300 text-sm mb-2"><strong>Location:</strong> Throat | <strong>Theme:</strong> Communication, truth, self-expression</p>
      <p className="text-sky-700 dark:text-sky-300 text-sm"><strong>Poses:</strong> Shoulderstand, Plow, Fish, Neck Stretches | <strong>Mantra:</strong> HAM</p>
      <p className="text-sky-700 dark:text-sky-300 text-sm"><strong>Blockage:</strong> Fear of speaking, suppressed truth | <strong>Balanced:</strong> Clear communication, authenticity</p>
    </div>

    <div className="bg-indigo-50 dark:bg-indigo-900/40 p-5 rounded-lg border-2 border-indigo-200 dark:border-indigo-800">
      <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">6. Ajna – Third Eye Chakra (Indigo)</h4>
      <p className="text-indigo-700 dark:text-indigo-300 text-sm mb-2"><strong>Location:</strong> Between eyebrows | <strong>Theme:</strong> Intuition, wisdom, clarity</p>
      <p className="text-indigo-700 dark:text-indigo-300 text-sm"><strong>Poses:</strong> Child's Pose, Dolphin, Headstand, Seated Meditation | <strong>Mantra:</strong> OM</p>
      <p className="text-indigo-700 dark:text-indigo-300 text-sm"><strong>Blockage:</strong> Confusion, headaches, lack of clarity | <strong>Balanced:</strong> Intuition, inner knowing</p>
    </div>

    <div className="bg-violet-50 dark:bg-violet-900/40 p-5 rounded-lg border-2 border-violet-200 dark:border-violet-800">
      <h4 className="font-bold text-violet-800 dark:text-violet-200 mb-2">7. Sahasrara – Crown Chakra (Violet/White)</h4>
      <p className="text-violet-700 dark:text-violet-300 text-sm mb-2"><strong>Location:</strong> Top of head | <strong>Theme:</strong> Spirituality, unity, enlightenment</p>
      <p className="text-violet-700 dark:text-violet-300 text-sm"><strong>Poses:</strong> Headstand, Savasana, Lotus, Meditation | <strong>Mantra:</strong> Silence / OM</p>
      <p className="text-violet-700 dark:text-violet-300 text-sm"><strong>Blockage:</strong> Spiritual emptiness, isolation | <strong>Balanced:</strong> Connection with all, inner peace</p>
    </div>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 mt-6">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Chakra Meditation (20 Minutes)</h3>
    <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
      <li>Sit comfortably, close your eyes</li>
      <li>Start at the root chakra: Visualize red light, chant "LAM" (3 min)</li>
      <li>Travel upward through each chakra with its color and mantra (2 min each)</li>
      <li>At the crown chakra: Silence, feel connection with everything (3 min)</li>
      <li>Let all colors merge into white light, slowly come back</li>
    </ol>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Practice: Chakra-Balancing Sequence</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Mountain Pose (Root) – 1 min with grounding focus</li>
      <li>Pigeon Pose (Sacral) – 2 min per side</li>
      <li>Boat Pose (Solar Plexus) – 30 sec x 3</li>
      <li>Camel Pose (Heart) – 1 min</li>
      <li>Shoulderstand (Throat) – 2 min</li>
      <li>Child's Pose (Third Eye) – 2 min</li>
      <li>Savasana (Crown) – 5 min meditation</li>
    </ol>
  </div>
</div>
    `
  },
  task: { de: { title: "Chakra-System erforschen", description: "Lerne die 7 Chakren und ihre Verbindung zu Yoga-Posen.", checklist: [{ text: "Lerne die 7 Chakren mit ihren Farben und Mantras auswendig", checked: false }, { text: "Führe die Chakra-Balancing Sequenz durch", checked: false }, { text: "Probiere die 20-Minuten Chakra-Meditation aus", checked: false }] }, en: { title: "Explore the Chakra System", description: "Learn the 7 chakras and their connection to yoga poses.", checklist: [{ text: "Memorize the 7 chakras with their colors and mantras", checked: false }, { text: "Complete the chakra-balancing sequence", checked: false }, { text: "Try the 20-minute chakra meditation", checked: false }] } },
  quiz: { de: [{ question: "Nenne die 7 Chakren von unten nach oben mit ihren Farben.", answer: "1. Muladhara (Rot), 2. Svadhisthana (Orange), 3. Manipura (Gelb), 4. Anahata (Grün), 5. Vishuddha (Blau), 6. Ajna (Indigo), 7. Sahasrara (Violett/Weiß)." }, { question: "Welches Chakra ist mit Kommunikation verbunden und welche Posen helfen?", answer: "Das Vishuddha (Kehlchakra) – Shoulderstand, Plow, Fish und Neck Stretches helfen, dieses Chakra zu balancieren." }, { question: "Was bedeutet es, wenn ein Chakra 'blockiert' ist?", answer: "Die Energie fließt nicht frei durch dieses Zentrum, was sich körperlich (Verspannungen, Schmerzen) und emotional (Angst, Traurigkeit, Kontrollverlust) manifestieren kann." }], en: [{ question: "Name the 7 chakras from bottom to top with their colors.", answer: "1. Muladhara (Red), 2. Svadhisthana (Orange), 3. Manipura (Yellow), 4. Anahata (Green), 5. Vishuddha (Blue), 6. Ajna (Indigo), 7. Sahasrara (Violet/White)." }, { question: "Which chakra is connected to communication and which poses help?", answer: "Vishuddha (Throat Chakra) – Shoulderstand, Plow, Fish, and Neck Stretches help balance this chakra." }, { question: "What does it mean when a chakra is 'blocked'?", answer: "Energy doesn't flow freely through that center, which can manifest physically (tension, pain) and emotionally (fear, sadness, loss of control)." }] }
};
