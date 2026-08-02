import { PianoLessons } from '../lessons';

// Module 1 - Remaining lessons
import { noteValues } from '../lessons/module1_rhythm/note-values';
import { rests } from '../lessons/module1_rhythm/rests';
import { tappingExercises } from '../lessons/module1_rhythm/tapping-exercises';
import { staffLines } from '../lessons/module1_reading/staff-lines';
import { trebleClef } from '../lessons/module1_reading/treble-clef';
import { notesOnStaff } from '../lessons/module1_reading/notes-on-staff';
import { odeToJoy } from '../lessons/module1_reading/ode-to-joy';
import { fiveFingerRight } from '../lessons/module1_technique/five-finger-right';
import { fiveFingerLeft } from '../lessons/module1_technique/five-finger-left';
import { bothHands } from '../lessons/module1_technique/both-hands';

// Module 2
import { bassClef } from '../lessons/module2_bass_clef/bass-clef';
import { bassClefNotes } from '../lessons/module2_bass_clef/bass-clef-notes';
import { grandStaff } from '../lessons/module2_bass_clef/grand-staff';
import { eighthNotes } from '../lessons/module2_rhythm2/eighth-notes';
import { dottedHalfNote } from '../lessons/module2_rhythm2/dotted-half-note';
import { threeQuarterTime } from '../lessons/module2_rhythm2/three-quarter-time';
import { pianoForte } from '../lessons/module2_dynamics/piano-forte';
import { mezzoForte } from '../lessons/module2_dynamics/mezzo-forte';
import { crescendoDecrescendo } from '../lessons/module2_dynamics/crescendo-decrescendo';
import { contraryMotion } from '../lessons/module2_coordination/contrary-motion';
import { handExchange } from '../lessons/module2_coordination/hand-exchange';
import { legatoStaccato } from '../lessons/module2_coordination/legato-staccato';

// Module 3
import { wholeHalfSteps } from '../lessons/module3_intervals/whole-half-steps';
import { intervals } from '../lessons/module3_intervals/intervals';
import { intervalsOnKeyboard } from '../lessons/module3_intervals/intervals-on-keyboard';
import { sharps } from '../lessons/module3_accidentals/sharps';
import { flats } from '../lessons/module3_accidentals/flats';
import { naturals } from '../lessons/module3_accidentals/naturals';
import { majorScaleStructure } from '../lessons/module3_scales/major-scale-structure';
import { cMajorScale } from '../lessons/module3_scales/c-major-scale';
import { gMajorScale } from '../lessons/module3_scales/g-major-scale';
import { fMajorScale } from '../lessons/module3_scales/f-major-scale';

// Module 4
import { majorTriad } from '../lessons/module4_triads/major-triad';
import { minorTriad } from '../lessons/module4_triads/minor-triad';
import { primaryChords } from '../lessons/module4_triads/primary-chords';
import { rootPosition } from '../lessons/module4_inversions/root-position';
import { firstInversion } from '../lessons/module4_inversions/first-inversion';
import { secondInversion } from '../lessons/module4_inversions/second-inversion';
import { arpeggios } from '../lessons/module4_accompaniment/arpeggios';
import { albertiBass } from '../lessons/module4_accompaniment/alberti-bass';
import { waltzAccompaniment } from '../lessons/module4_accompaniment/waltz-accompaniment';

// Module 5
import { sustainPedal } from '../lessons/module5_pedal/sustain-pedal';
import { pedalChange } from '../lessons/module5_pedal/pedal-change';
import { unaCorda } from '../lessons/module5_pedal/una-corda';
import { sixteenthNotes } from '../lessons/module5_rhythm3/sixteenth-notes';
import { triplets } from '../lessons/module5_rhythm3/triplets';
import { dottedEighth } from '../lessons/module5_rhythm3/dotted-eighth';
import { naturalMinor } from '../lessons/module5_minor/natural-minor';
import { harmonicMinor } from '../lessons/module5_minor/harmonic-minor';
import { melodicMinor } from '../lessons/module5_minor/melodic-minor';
import { abForm } from '../lessons/module5_forms/ab-form';
import { abaForm } from '../lessons/module5_forms/aba-form';
import { rondo } from '../lessons/module5_forms/rondo';

// Module 6
import { pentatonic } from '../lessons/module6_improv/pentatonic';
import { bluesScale } from '../lessons/module6_improv/blues-scale';
import { chordImprovisation } from '../lessons/module6_improv/chord-improvisation';
import { octaves } from '../lessons/module6_virtuosity/octaves';
import { ornaments } from '../lessons/module6_virtuosity/ornaments';
import { jumps } from '../lessons/module6_virtuosity/jumps';
import { baroque } from '../lessons/module6_styles/baroque';
import { classical } from '../lessons/module6_styles/classical';
import { romantic } from '../lessons/module6_styles/romantic';
import { jazzPop } from '../lessons/module6_styles/jazz-pop';

// Category titles for each section
const categories = {
  module1_intro: {
    en: 'Module 1.1: Basics & Posture',
    de: 'Modul 1.1: Grundlagen & Haltung'
  },
  module1_rhythm: {
    en: 'Module 1.2: Rhythm & Note Values',
    de: 'Modul 1.2: Rhythmus & Notenwerte'
  },
  module1_reading: {
    en: 'Module 1.3: Reading Music (Treble Clef)',
    de: 'Modul 1.3: Notenlesen (Violinschlüssel)'
  },
  module1_technique: {
    en: 'Module 1.4: Technique (5-Finger Position)',
    de: 'Modul 1.4: Technik (5-Finger-Lage)'
  },
  module2_bass: {
    en: 'Module 2.1: The Bass Clef',
    de: 'Modul 2.1: Der Bassschlüssel'
  },
  module2_rhythm: {
    en: 'Module 2.2: Rhythm II',
    de: 'Modul 2.2: Rhythmus II'
  },
  module2_dynamics: {
    en: 'Module 2.3: Dynamics & Expression',
    de: 'Modul 2.3: Dynamik & Ausdruck'
  },
  module2_coordination: {
    en: 'Module 2.4: Technique & Coordination',
    de: 'Modul 2.4: Technik & Koordination'
  },
  module3_intervals: {
    en: 'Module 3.1: Intervals',
    de: 'Modul 3.1: Intervalle'
  },
  module3_accidentals: {
    en: 'Module 3.2: Accidentals',
    de: 'Modul 3.2: Vorzeichen'
  },
  module3_scales: {
    en: 'Module 3.3: Scales',
    de: 'Modul 3.3: Tonleitern'
  },
  module4_triads: {
    en: 'Module 4.1: Triads',
    de: 'Modul 4.1: Dreiklänge'
  },
  module4_inversions: {
    en: 'Module 4.2: Chord Inversions',
    de: 'Modul 4.2: Akkordumkehrungen'
  },
  module4_accompaniment: {
    en: 'Module 4.3: Accompaniment Patterns',
    de: 'Modul 4.3: Begleitmuster'
  },
  module5_pedal: {
    en: 'Module 5.1: The Pedal',
    de: 'Modul 5.1: Das Pedal'
  },
  module5_rhythm: {
    en: 'Module 5.2: Rhythm III',
    de: 'Modul 5.2: Rhythmus III'
  },
  module5_minor: {
    en: 'Module 5.3: Minor Scales',
    de: 'Modul 5.3: Moll-Tonleitern'
  },
  module5_forms: {
    en: 'Module 5.4: Musical Forms',
    de: 'Modul 5.4: Musikalische Formen'
  },
  module6_improv: {
    en: 'Module 6.1: Improvisation',
    de: 'Modul 6.1: Improvisation'
  },
  module6_virtuosity: {
    en: 'Module 6.2: Virtuoso Technique',
    de: 'Modul 6.2: Virtuose Technik'
  },
  module6_styles: {
    en: 'Module 6.3: Style Study',
    de: 'Modul 6.3: Stilkunde'
  }
};

// All lessons in a flat array with IDs and categories
export const lessons = [
  // ===== MODULE 1: DAS FUNDAMENT =====
  
  // 1.1 Basics & Posture (existing component-based lessons)
  {
    id: 'p_1_1_1',
    category: 'module1_intro',
    categoryTitle: categories.module1_intro,
    title: { de: 'Die Haltung am Klavier', en: 'Piano Posture' },
    description: { de: 'Wie man richtig sitzt und die Hand hält.', en: 'How to sit correctly and hold your hand.' },
    duration: '10 min',
    component: PianoLessons.PianoPosture
  },
  {
    id: 'p_1_1_2',
    category: 'module1_intro',
    categoryTitle: categories.module1_intro,
    title: { de: 'Die Klaviatur: Orientierung', en: 'Keyboard Geography' },
    description: { de: 'Schwarze und weiße Tasten, Muster erkennen.', en: 'Black and white keys, recognizing patterns.' },
    duration: '15 min',
    component: PianoLessons.KeyboardGeography
  },
  {
    id: 'p_1_1_3',
    category: 'module1_intro',
    categoryTitle: categories.module1_intro,
    title: { de: 'Das mittlere C (C4)', en: 'Middle C (C4)' },
    description: { de: 'Der wichtigste Ankerpunkt auf dem Klavier.', en: 'The most important anchor point on the piano.' },
    duration: '10 min',
    component: PianoLessons.MiddleC
  },
  {
    id: 'p_1_1_4',
    category: 'module1_intro',
    categoryTitle: categories.module1_intro,
    title: { de: 'Finger-Nummerierung (1-5)', en: 'Finger Numbering (1-5)' },
    description: { de: 'Welcher Finger ist welcher?', en: 'Which finger is which?' },
    duration: '10 min',
    component: PianoLessons.FingerNumbering
  },

  // 1.2 Rhythm & Note Values
  {
    id: 'p_1_2_1',
    category: 'module1_rhythm',
    categoryTitle: categories.module1_rhythm,
    title: { de: 'Rhythmus & Takt', en: 'Rhythm & Time' },
    description: { de: 'Ganze, Halbe und Viertelnoten fühlen.', en: 'Feeling whole, half, and quarter notes.' },
    duration: '20 min',
    component: PianoLessons.BasicRhythm
  },
  { id: 'p_1_2_2', category: 'module1_rhythm', categoryTitle: categories.module1_rhythm, ...noteValues },
  { id: 'p_1_2_3', category: 'module1_rhythm', categoryTitle: categories.module1_rhythm, ...rests },
  { id: 'p_1_2_4', category: 'module1_rhythm', categoryTitle: categories.module1_rhythm, ...tappingExercises },

  // 1.3 Reading Music (Treble Clef)
  { id: 'p_1_3_1', category: 'module1_reading', categoryTitle: categories.module1_reading, ...staffLines },
  { id: 'p_1_3_2', category: 'module1_reading', categoryTitle: categories.module1_reading, ...trebleClef },
  { id: 'p_1_3_3', category: 'module1_reading', categoryTitle: categories.module1_reading, ...notesOnStaff },
  { id: 'p_1_3_4', category: 'module1_reading', categoryTitle: categories.module1_reading, ...odeToJoy },

  // 1.4 Technique (5-Finger Position)
  { id: 'p_1_4_1', category: 'module1_technique', categoryTitle: categories.module1_technique, ...fiveFingerRight },
  { id: 'p_1_4_2', category: 'module1_technique', categoryTitle: categories.module1_technique, ...fiveFingerLeft },
  { id: 'p_1_4_3', category: 'module1_technique', categoryTitle: categories.module1_technique, ...bothHands },

  // ===== MODULE 2: ERWEITERTE GRUNDLAGEN =====

  // 2.1 Bass Clef
  { id: 'p_2_1_1', category: 'module2_bass', categoryTitle: categories.module2_bass, ...bassClef },
  { id: 'p_2_1_2', category: 'module2_bass', categoryTitle: categories.module2_bass, ...bassClefNotes },
  { id: 'p_2_1_3', category: 'module2_bass', categoryTitle: categories.module2_bass, ...grandStaff },

  // 2.2 Rhythm II
  { id: 'p_2_2_1', category: 'module2_rhythm', categoryTitle: categories.module2_rhythm, ...eighthNotes },
  { id: 'p_2_2_2', category: 'module2_rhythm', categoryTitle: categories.module2_rhythm, ...dottedHalfNote },
  { id: 'p_2_2_3', category: 'module2_rhythm', categoryTitle: categories.module2_rhythm, ...threeQuarterTime },

  // 2.3 Dynamics
  { id: 'p_2_3_1', category: 'module2_dynamics', categoryTitle: categories.module2_dynamics, ...pianoForte },
  { id: 'p_2_3_2', category: 'module2_dynamics', categoryTitle: categories.module2_dynamics, ...mezzoForte },
  { id: 'p_2_3_3', category: 'module2_dynamics', categoryTitle: categories.module2_dynamics, ...crescendoDecrescendo },

  // 2.4 Coordination
  { id: 'p_2_4_1', category: 'module2_coordination', categoryTitle: categories.module2_coordination, ...contraryMotion },
  { id: 'p_2_4_2', category: 'module2_coordination', categoryTitle: categories.module2_coordination, ...handExchange },
  { id: 'p_2_4_3', category: 'module2_coordination', categoryTitle: categories.module2_coordination, ...legatoStaccato },

  // ===== MODULE 3: MUSIKTHEORIE & TONLEITERN =====

  // 3.1 Intervals
  { id: 'p_3_1_1', category: 'module3_intervals', categoryTitle: categories.module3_intervals, ...wholeHalfSteps },
  { id: 'p_3_1_2', category: 'module3_intervals', categoryTitle: categories.module3_intervals, ...intervals },
  { id: 'p_3_1_3', category: 'module3_intervals', categoryTitle: categories.module3_intervals, ...intervalsOnKeyboard },

  // 3.2 Accidentals
  { id: 'p_3_2_1', category: 'module3_accidentals', categoryTitle: categories.module3_accidentals, ...sharps },
  { id: 'p_3_2_2', category: 'module3_accidentals', categoryTitle: categories.module3_accidentals, ...flats },
  { id: 'p_3_2_3', category: 'module3_accidentals', categoryTitle: categories.module3_accidentals, ...naturals },

  // 3.3 Scales
  { id: 'p_3_3_1', category: 'module3_scales', categoryTitle: categories.module3_scales, ...majorScaleStructure },
  { id: 'p_3_3_2', category: 'module3_scales', categoryTitle: categories.module3_scales, ...cMajorScale },
  { id: 'p_3_3_3', category: 'module3_scales', categoryTitle: categories.module3_scales, ...gMajorScale },
  { id: 'p_3_3_4', category: 'module3_scales', categoryTitle: categories.module3_scales, ...fMajorScale },

  // ===== MODULE 4: AKKORDE & HARMONIELEHRE =====

  // 4.1 Triads
  { id: 'p_4_1_1', category: 'module4_triads', categoryTitle: categories.module4_triads, ...majorTriad },
  { id: 'p_4_1_2', category: 'module4_triads', categoryTitle: categories.module4_triads, ...minorTriad },
  { id: 'p_4_1_3', category: 'module4_triads', categoryTitle: categories.module4_triads, ...primaryChords },

  // 4.2 Inversions
  { id: 'p_4_2_1', category: 'module4_inversions', categoryTitle: categories.module4_inversions, ...rootPosition },
  { id: 'p_4_2_2', category: 'module4_inversions', categoryTitle: categories.module4_inversions, ...firstInversion },
  { id: 'p_4_2_3', category: 'module4_inversions', categoryTitle: categories.module4_inversions, ...secondInversion },

  // 4.3 Accompaniment
  { id: 'p_4_3_1', category: 'module4_accompaniment', categoryTitle: categories.module4_accompaniment, ...arpeggios },
  { id: 'p_4_3_2', category: 'module4_accompaniment', categoryTitle: categories.module4_accompaniment, ...albertiBass },
  { id: 'p_4_3_3', category: 'module4_accompaniment', categoryTitle: categories.module4_accompaniment, ...waltzAccompaniment },

  // ===== MODULE 5: FORTGESCHRITTENE TECHNIK =====

  // 5.1 Pedal
  { id: 'p_5_1_1', category: 'module5_pedal', categoryTitle: categories.module5_pedal, ...sustainPedal },
  { id: 'p_5_1_2', category: 'module5_pedal', categoryTitle: categories.module5_pedal, ...pedalChange },
  { id: 'p_5_1_3', category: 'module5_pedal', categoryTitle: categories.module5_pedal, ...unaCorda },

  // 5.2 Rhythm III
  { id: 'p_5_2_1', category: 'module5_rhythm', categoryTitle: categories.module5_rhythm, ...sixteenthNotes },
  { id: 'p_5_2_2', category: 'module5_rhythm', categoryTitle: categories.module5_rhythm, ...triplets },
  { id: 'p_5_2_3', category: 'module5_rhythm', categoryTitle: categories.module5_rhythm, ...dottedEighth },

  // 5.3 Minor Scales
  { id: 'p_5_3_1', category: 'module5_minor', categoryTitle: categories.module5_minor, ...naturalMinor },
  { id: 'p_5_3_2', category: 'module5_minor', categoryTitle: categories.module5_minor, ...harmonicMinor },
  { id: 'p_5_3_3', category: 'module5_minor', categoryTitle: categories.module5_minor, ...melodicMinor },

  // 5.4 Musical Forms
  { id: 'p_5_4_1', category: 'module5_forms', categoryTitle: categories.module5_forms, ...abForm },
  { id: 'p_5_4_2', category: 'module5_forms', categoryTitle: categories.module5_forms, ...abaForm },
  { id: 'p_5_4_3', category: 'module5_forms', categoryTitle: categories.module5_forms, ...rondo },

  // ===== MODULE 6: VIRTUOSITÄT & IMPROVISATION =====

  // 6.1 Improvisation
  { id: 'p_6_1_1', category: 'module6_improv', categoryTitle: categories.module6_improv, ...pentatonic },
  { id: 'p_6_1_2', category: 'module6_improv', categoryTitle: categories.module6_improv, ...bluesScale },
  { id: 'p_6_1_3', category: 'module6_improv', categoryTitle: categories.module6_improv, ...chordImprovisation },

  // 6.2 Virtuoso Technique
  { id: 'p_6_2_1', category: 'module6_virtuosity', categoryTitle: categories.module6_virtuosity, ...octaves },
  { id: 'p_6_2_2', category: 'module6_virtuosity', categoryTitle: categories.module6_virtuosity, ...ornaments },
  { id: 'p_6_2_3', category: 'module6_virtuosity', categoryTitle: categories.module6_virtuosity, ...jumps },

  // 6.3 Style Study
  { id: 'p_6_3_1', category: 'module6_styles', categoryTitle: categories.module6_styles, ...baroque },
  { id: 'p_6_3_2', category: 'module6_styles', categoryTitle: categories.module6_styles, ...classical },
  { id: 'p_6_3_3', category: 'module6_styles', categoryTitle: categories.module6_styles, ...romantic },
  { id: 'p_6_3_4', category: 'module6_styles', categoryTitle: categories.module6_styles, ...jazzPop }
];
