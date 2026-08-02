import React, { useState } from 'react';
import { Music, Play, Clock, Star } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import PianoPlayer from './PianoPlayer';

const SongLibrary = () => {
  const { language } = useLanguage();
  const [selectedSong, setSelectedSong] = useState(null);

  // Sample song library - in a real app, these would be actual MIDI files
  const songs = [
    {
      id: 1,
      title: 'Ode an die Freude',
      titleEn: 'Ode to Joy',
      composer: 'Beethoven',
      difficulty: 'Anfänger',
      difficultyEn: 'Beginner',
      duration: '2:30',
      midiUrl: null // Would be actual MIDI file URL
    },
    {
      id: 2,
      title: 'Für Elise',
      titleEn: 'Für Elise',
      composer: 'Beethoven',
      difficulty: 'Mittelstufe',
      difficultyEn: 'Intermediate',
      duration: '3:45',
      midiUrl: null
    },
    {
      id: 3,
      title: 'Mondscheinsonate',
      titleEn: 'Moonlight Sonata',
      composer: 'Beethoven',
      difficulty: 'Fortgeschritten',
      difficultyEn: 'Advanced',
      duration: '5:20',
      midiUrl: null
    },
    {
      id: 4,
      title: 'Präludium C-Dur',
      titleEn: 'Prelude in C Major',
      composer: 'Bach',
      difficulty: 'Mittelstufe',
      difficultyEn: 'Intermediate',
      duration: '2:15',
      midiUrl: null
    }
  ];

  const getDifficultyColor = (difficulty) => {
    const lower = difficulty.toLowerCase();
    if (lower.includes('anfänger') || lower.includes('beginner')) return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
    if (lower.includes('mittel') || lower.includes('intermediate')) return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
    return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-3">
          <Music className="text-indigo-600" />
          {language === 'en' ? 'Song Library' : 'Lieder-Bibliothek'}
        </h1>
        <p className="text-stone-600 dark:text-stone-400">
          {language === 'en' 
            ? 'Browse and practice classical piano pieces with MIDI visualization.' 
            : 'Durchsuche und übe klassische Klavierstücke mit MIDI-Visualisierung.'}
        </p>
      </div>

      {selectedSong ? (
        <div className="space-y-6">
          <button
            onClick={() => setSelectedSong(null)}
            className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 font-medium"
          >
            ← {language === 'en' ? 'Back to Library' : 'Zurück zur Bibliothek'}
          </button>
          
          <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow border border-stone-200 dark:border-stone-700">
            <h2 className="text-2xl font-bold mb-2">
              {language === 'en' ? selectedSong.titleEn : selectedSong.title}
            </h2>
            <p className="text-stone-600 dark:text-stone-400 mb-4">{selectedSong.composer}</p>
            
            <div className="flex gap-4 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedSong.difficulty)}`}>
                {language === 'en' ? selectedSong.difficultyEn : selectedSong.difficulty}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-stone-100 text-stone-700 dark:bg-stone-700 dark:text-stone-300 flex items-center gap-1">
                <Clock size={14} />
                {selectedSong.duration}
              </span>
            </div>

            <PianoPlayer midiFileUrl={selectedSong.midiUrl} />
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {songs.map((song) => (
            <div
              key={song.id}
              className="bg-white dark:bg-stone-800 rounded-xl shadow-md border border-stone-200 dark:border-stone-700 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedSong(song)}
            >
              <div className="bg-gradient-to-br from-indigo-500 to-violet-600 p-6 text-white">
                <Music size={32} className="mb-2" />
                <h3 className="font-bold text-lg">
                  {language === 'en' ? song.titleEn : song.title}
                </h3>
                <p className="text-indigo-100 text-sm">{song.composer}</p>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(song.difficulty)}`}>
                    {language === 'en' ? song.difficultyEn : song.difficulty}
                  </span>
                  <span className="text-sm text-stone-500 flex items-center gap-1">
                    <Clock size={14} />
                    {song.duration}
                  </span>
                </div>
                
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <Play size={16} />
                  {language === 'en' ? 'Practice' : 'Üben'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {!selectedSong && (
        <div className="mt-12 bg-gradient-to-r from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 rounded-2xl p-8 text-center border border-indigo-200 dark:border-indigo-800">
          <Star className="mx-auto mb-4 text-indigo-600" size={48} />
          <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">
            {language === 'en' ? 'Coming Soon: More Songs!' : 'Bald verfügbar: Mehr Lieder!'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400">
            {language === 'en' 
              ? 'We are constantly adding new pieces to the library. Check back soon!' 
              : 'Wir fügen ständig neue Stücke zur Bibliothek hinzu. Schau bald wieder vorbei!'}
          </p>
        </div>
      )}
    </div>
  );
};

export default SongLibrary;


