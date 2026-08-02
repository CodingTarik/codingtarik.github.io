import React, { useEffect, useState } from 'react';
import { getStats, getHistory } from '../utils/storage';
import { exercises } from '../data/exercises';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProgressStats = () => {
  const [stats, setStats] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setStats(getStats());
    setHistory(getHistory());
  }, []);

  if (!stats) return <div className="p-8 text-center">Lade Statistik...</div>;

  const getExerciseName = (id) => exercises.find(e => e.id === id)?.name || id;

  // Prepare Chart Data - Volume per Workout
  const chartData = {
    labels: history.slice(0, 7).reverse().map(s => new Date(s.completedAt).toLocaleDateString(undefined, { day: '2-digit', month: '2-digit' })),
    datasets: [
      {
        label: 'Total Volume (kg)',
        data: history.slice(0, 7).reverse().map(s => 
          s.exercises.reduce((acc, ex) => acc + ex.sets.reduce((sAcc, set) => sAcc + (set.weight * set.reps), 0), 0)
        ),
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
        borderRadius: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Trainingsvolumen (letzte 7 Workouts)' },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl shadow-lg">
          <div className="text-4xl font-bold mb-1">{stats.totalWorkouts}</div>
          <div className="text-blue-100 text-sm font-medium uppercase tracking-wide">Workouts Gesamt</div>
        </div>
        <div className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl shadow-lg">
          <div className="text-4xl font-bold mb-1">{Math.round(stats.totalTime / 60)}</div>
          <div className="text-green-100 text-sm font-medium uppercase tracking-wide">Minuten Trainiert</div>
        </div>
        <div className="p-6 bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-2xl shadow-lg">
          <div className="text-4xl font-bold mb-1">{Object.keys(stats.exerciseStats).length}</div>
          <div className="text-purple-100 text-sm font-medium uppercase tracking-wide">Übungen Gemeistert</div>
        </div>
      </div>

      {/* Charts */}
      <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-lg border border-stone-100 dark:border-stone-700">
        <Bar data={chartData} options={chartOptions} />
      </div>

      {/* Records Grid */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-stone-800 dark:text-stone-100">Persönliche Rekorde</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(stats.exerciseStats).map(([id, stat]) => (
            <div key={id} className="p-4 bg-white dark:bg-stone-800 rounded-xl shadow border border-stone-100 dark:border-stone-700 flex justify-between items-center group hover:border-blue-300 transition-colors">
              <div>
                <span className="font-semibold text-stone-700 dark:text-stone-200 block mb-1">{getExerciseName(id)}</span>
                <span className="text-xs text-stone-400">{stat.count} Sessions</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-xl text-blue-600 dark:text-blue-400">{stat.maxWeight} <span className="text-sm font-normal text-stone-500">kg</span></div>
                <div className="text-xs text-stone-400 uppercase">1RM (Est)</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* History List */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-stone-800 dark:text-stone-100">Verlauf</h3>
        <div className="space-y-3">
          {history.slice(0, 10).map(sess => (
            <div key={sess.id} className="p-5 bg-white dark:bg-stone-800 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-700 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-bold text-lg text-stone-800 dark:text-stone-100">{sess.workoutName}</span>
                  <div className="text-xs text-stone-500 mt-1">
                    {new Date(sess.completedAt).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                </div>
                <span className="bg-stone-100 dark:bg-stone-700 px-3 py-1 rounded-full text-xs font-bold text-stone-600 dark:text-stone-300">
                  {Math.floor(sess.duration / 60)} Min
                </span>
              </div>
              <div className="flex gap-2 mt-3 overflow-x-auto pb-2 scrollbar-hide">
                {sess.exercises.map((ex, i) => (
                  <span key={i} className="whitespace-nowrap px-2 py-1 bg-stone-50 dark:bg-stone-900 rounded text-xs text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-700">
                    {getExerciseName(ex.exerciseId)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressStats;
