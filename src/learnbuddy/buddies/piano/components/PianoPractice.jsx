import React from 'react';
import PianoPlayer from './PianoPlayer';
import { useLanguage } from '../../../context/LanguageContext';

const PianoPractice = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-4">
          {language === 'en' ? 'Free Play' : 'Freies Spiel'}
        </h1>
        <p className="text-stone-600 dark:text-stone-400">
          {language === 'en' 
            ? 'Practice freely on the piano. Connect your USB keyboard or click the keys to play.' 
            : 'Übe frei am Klavier. Schließe dein USB-Keyboard an oder klicke auf die Tasten zum Spielen.'}
        </p>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 p-6 rounded-2xl shadow-lg border border-indigo-100 dark:border-indigo-800">
        <PianoPlayer />
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow border border-stone-200 dark:border-stone-700">
          <h3 className="font-bold text-lg mb-2 text-indigo-600 dark:text-indigo-400">
            {language === 'en' ? '🎹 Play by Clicking' : '🎹 Klicken zum Spielen'}
          </h3>
          <p className="text-sm text-stone-600 dark:text-stone-400">
            {language === 'en' 
              ? 'Click on the piano keys with your mouse to hear the notes.' 
              : 'Klicke mit der Maus auf die Klaviertasten, um die Töne zu hören.'}
          </p>
        </div>

        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow border border-stone-200 dark:border-stone-700">
          <h3 className="font-bold text-lg mb-2 text-violet-600 dark:text-violet-400">
            {language === 'en' ? '🎮 USB Keyboard' : '🎮 USB-Keyboard'}
          </h3>
          <p className="text-sm text-stone-600 dark:text-stone-400">
            {language === 'en' 
              ? 'Connect your MIDI keyboard via USB to see your playing visualized in real-time.' 
              : 'Schließe dein MIDI-Keyboard per USB an, um dein Spiel in Echtzeit visualisiert zu sehen.'}
          </p>
        </div>

        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow border border-stone-200 dark:border-stone-700">
          <h3 className="font-bold text-lg mb-2 text-purple-600 dark:text-purple-400">
            {language === 'en' ? '📁 Load MIDI Files' : '📁 MIDI-Dateien laden'}
          </h3>
          <p className="text-sm text-stone-600 dark:text-stone-400">
            {language === 'en' 
              ? 'Upload MIDI files to see falling notes and play along (Synthesia-style).' 
              : 'Lade MIDI-Dateien hoch, um fallende Noten zu sehen und mitzuspielen (Synthesia-Stil).'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PianoPractice;


