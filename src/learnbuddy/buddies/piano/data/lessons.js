import { PianoLessons } from '../lessons';

export const lessons = [
  {
    id: 'module_1',
    title: 'Modul 1: Das Fundament',
    description: 'Haltung, Klaviatur, Notenlesen und erste Schritte.',
    lessons: [
      {
        id: 'p_1_1_1',
        title: 'Die Haltung am Klavier',
        description: 'Wie man richtig sitzt und die Hand hält.',
        duration: '10 min',
        component: PianoLessons.PianoPosture
      },
      {
        id: 'p_1_1_2',
        title: 'Die Klaviatur: Orientierung',
        description: 'Schwarze und weiße Tasten, Muster erkennen.',
        duration: '15 min',
        component: PianoLessons.KeyboardGeography
      },
      {
        id: 'p_1_1_3',
        title: 'Das mittlere C (C4)',
        description: 'Der wichtigste Ankerpunkt auf dem Klavier.',
        duration: '10 min',
        component: PianoLessons.MiddleC
      },
      {
        id: 'p_1_1_4',
        title: 'Finger-Nummerierung (1-5)',
        description: 'Welcher Finger ist welcher?',
        duration: '10 min',
        component: PianoLessons.FingerNumbering
      },
      {
        id: 'p_1_2_1',
        title: 'Rhythmus & Takt',
        description: 'Ganze, Halbe und Viertelnoten fühlen.',
        duration: '20 min',
        component: PianoLessons.BasicRhythm
      }
    ]
  }
];
