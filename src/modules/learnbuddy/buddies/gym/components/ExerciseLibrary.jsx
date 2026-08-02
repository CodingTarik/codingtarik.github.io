import React, { useState } from 'react';
import { exercises, muscleGroups } from '../data/exercises';

const ExerciseLibrary = ({ onSelect }) => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredExercises = exercises.filter(ex => {
    const matchesGroup = filter === 'all' || ex.muscleGroup === filter;
    const matchesSearch = ex.name.toLowerCase().includes(search.toLowerCase());
    return matchesGroup && matchesSearch;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-center justify-between">
        <input
          type="text"
          placeholder="Suche Übung..."
          className="p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800"
        >
          <option value="all">Alle Muskelgruppen</option>
          {muscleGroups.map(g => (
            <option key={g.id} value={g.id}>{g.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredExercises.map(ex => (
          <div 
            key={ex.id} 
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onSelect && onSelect(ex)}
          >
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400">{ex.name}</h3>
              <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                {muscleGroups.find(g => g.id === ex.muscleGroup)?.name}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{ex.description}</p>
            <div className="mt-3 flex gap-2 text-xs text-gray-500">
              <span className="capitalize">Schwierigkeit: {ex.difficulty}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseLibrary;


