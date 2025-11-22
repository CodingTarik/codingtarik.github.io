import React from 'react';

const GAMES_LIST = [
  {
    id: 'grammarRacer',
    title: 'Grammar Racer',
    description: 'A high-speed racing game. Steer your car into the correct answer lane to score points and avoid crashing!',
    icon: '🏎️',
    type: 'Action / Reflex'
  },
  {
    id: 'verbPilot',
    title: 'Verb Pilot',
    description: 'Fly a plane through the sky. Collect the correct words (like verbs or nouns) while dodging wrong ones.',
    icon: '✈️',
    type: 'Endless Runner'
  },
  {
    id: 'grammarSmash',
    title: 'Grammar Smash',
    description: 'Angry Birds style physics game. Aim your catapult and smash the correct answer blocks!',
    icon: '💣',
    type: 'Physics / Aiming'
  },
  {
    id: 'grammarMole',
    title: 'Grammar Mole',
    description: 'Whack-a-Mole style arcade game. Hit the moles that show the correct words before they disappear.',
    icon: '🔨',
    type: 'Arcade / Speed'
  },
  {
    id: 'wordDrop',
    title: 'Word Drop',
    description: 'Catch the correct falling words in your basket! Avoid the wrong ones.',
    icon: '🌧️',
    type: 'Arcade / Catching'
  },
  {
    id: 'sentenceBuilder',
    title: 'Sentence Builder',
    description: 'Drag and drop words to build correct sentences. Great for learning word order.',
    icon: 'puzzle',
    type: 'Logic / Puzzle'
  },
  {
    id: 'fixTheMistake',
    title: 'Fix The Mistake',
    description: 'Identify the error in a sentence and choose the correct fix.',
    icon: 'wrench',
    type: 'Quiz / Correction'
  },
  {
    id: 'verbConjugator',
    title: 'Verb Conjugator',
    description: 'Practice verb tables quickly. Fill in the missing forms.',
    icon: 'table',
    type: 'Drill / Memory'
  },
  {
    id: 'translateThis',
    title: 'Translate This',
    description: 'Classic translation practice. Match the English sentence to the German one.',
    icon: 'globe',
    type: 'Translation'
  }
];

export default function GamesList() {
  return (
    <div className="p-6 bg-white dark:bg-stone-900 rounded-xl shadow-lg border border-stone-200 dark:border-stone-700">
      <h2 className="text-2xl font-bold mb-6 text-stone-800 dark:text-stone-100 flex items-center gap-2">
        🎮 Game Library
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {GAMES_LIST.map(game => (
          <div key={game.id} className="p-4 rounded-lg bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <div className="text-3xl p-2 bg-white dark:bg-stone-700 rounded-lg shadow-sm">
                {game.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg text-stone-900 dark:text-white">
                  {game.title}
                </h3>
                <span className="text-xs font-mono bg-stone-200 dark:bg-stone-900 px-2 py-0.5 rounded text-stone-600 dark:text-stone-400">
                  {game.type}
                </span>
                <p className="text-sm text-stone-600 dark:text-stone-400 mt-2">
                  {game.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

