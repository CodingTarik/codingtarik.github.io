import React, { useState, useEffect } from 'react';
import { Trophy, Flame, TrendingUp, Calendar, Target, Award } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';
import { getDecks, getAllReviewDates } from '../../utils/deckStorage';
import { calculateStreak } from '../../utils/spacedRepetition';

function StatsPanel() {
  const { language } = useLanguage();
  const [stats, setStats] = useState({
    totalDecks: 0,
    totalCards: 0,
    cardsStudiedToday: 0,
    streak: 0,
    weeklyGoal: 50,
    weeklyProgress: 0
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = () => {
    const decks = getDecks();
    const reviewDates = getAllReviewDates();
    const streak = calculateStreak(reviewDates);
    
    // Calculate cards studied today
    const today = new Date().toDateString();
    const todayReviews = reviewDates.filter(date => 
      new Date(date).toDateString() === today
    ).length;

    // Calculate weekly progress (last 7 days)
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const weeklyReviews = reviewDates.filter(date => 
      new Date(date) >= weekAgo
    ).length;

    setStats({
      totalDecks: decks.length,
      totalCards: 0, // Would need to fetch from all decks
      cardsStudiedToday: todayReviews,
      streak,
      weeklyGoal: 50,
      weeklyProgress: weeklyReviews
    });
  };

  const getStreakEmoji = (streak) => {
    if (streak === 0) return '😴';
    if (streak < 3) return '🌱';
    if (streak < 7) return '🔥';
    if (streak < 14) return '⚡';
    if (streak < 30) return '🚀';
    return '👑';
  };

  const getMotivationalMessage = () => {
    const { streak, cardsStudiedToday } = stats;
    
    if (cardsStudiedToday === 0) {
      return language === 'en' 
        ? "Let's study some cards today!"
        : "Lass uns heute einige Karten lernen!";
    }
    
    if (streak >= 7) {
      return language === 'en'
        ? "Amazing streak! Keep it up!"
        : "Tolle Serie! Weiter so!";
    }
    
    if (cardsStudiedToday >= 20) {
      return language === 'en'
        ? "Fantastic work today!"
        : "Fantastische Arbeit heute!";
    }
    
    return language === 'en'
      ? "Great progress!"
      : "Toller Fortschritt!";
  };

  const weeklyProgressPercent = Math.min(100, (stats.weeklyProgress / stats.weeklyGoal) * 100);

  return (
    <div className="space-y-6">
      {/* Motivational Header */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-1">{getMotivationalMessage()}</h3>
            <p className="text-white/80">
              {language === 'en' 
                ? 'Your learning statistics'
                : 'Deine Lernstatistiken'}
            </p>
          </div>
          <Trophy size={48} className="opacity-80" />
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Streak */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6 border-2 border-orange-200 dark:border-orange-800">
          <div className="flex items-center justify-between mb-3">
            <Flame className="text-orange-500" size={32} />
            <span className="text-3xl">{getStreakEmoji(stats.streak)}</span>
          </div>
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
            {stats.streak}
          </div>
          <div className="text-sm text-orange-800 dark:text-orange-300 font-semibold">
            {language === 'en' ? 'Day Streak' : 'Tage Serie'}
          </div>
        </div>

        {/* Today's Cards */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between mb-3">
            <Target className="text-blue-500" size={32} />
            <span className="text-3xl">🎯</span>
          </div>
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
            {stats.cardsStudiedToday}
          </div>
          <div className="text-sm text-blue-800 dark:text-blue-300 font-semibold">
            {language === 'en' ? 'Cards Today' : 'Karten heute'}
          </div>
        </div>

        {/* Total Decks */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-between mb-3">
            <Award className="text-purple-500" size={32} />
            <span className="text-3xl">📚</span>
          </div>
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
            {stats.totalDecks}
          </div>
          <div className="text-sm text-purple-800 dark:text-purple-300 font-semibold">
            {language === 'en' ? 'Total Decks' : 'Gesamt Decks'}
          </div>
        </div>

        {/* Weekly Goal */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp className="text-green-500" size={32} />
            <span className="text-3xl">📈</span>
          </div>
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
            {stats.weeklyProgress}
          </div>
          <div className="text-sm text-green-800 dark:text-green-300 font-semibold">
            {language === 'en' ? 'This Week' : 'Diese Woche'}
          </div>
        </div>
      </div>

      {/* Weekly Goal Progress */}
      <div className="bg-white dark:bg-stone-800 rounded-2xl p-6 border-2 border-stone-200 dark:border-stone-700">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h4 className="text-lg font-bold text-stone-800 dark:text-stone-100">
              {language === 'en' ? 'Weekly Goal' : 'Wochenziel'}
            </h4>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              {stats.weeklyProgress} / {stats.weeklyGoal} {language === 'en' ? 'cards' : 'Karten'}
            </p>
          </div>
          <div className="text-2xl font-bold text-stone-800 dark:text-stone-100">
            {Math.round(weeklyProgressPercent)}%
          </div>
        </div>
        
        <div className="relative h-4 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
            style={{ width: `${weeklyProgressPercent}%` }}
          />
        </div>

        {weeklyProgressPercent >= 100 && (
          <div className="mt-3 text-center text-sm font-semibold text-green-600 dark:text-green-400">
            🎉 {language === 'en' ? 'Goal achieved! Amazing!' : 'Ziel erreicht! Fantastisch!'}
          </div>
        )}
      </div>

      {/* Achievement Badges */}
      <div className="bg-white dark:bg-stone-800 rounded-2xl p-6 border-2 border-stone-200 dark:border-stone-700">
        <h4 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2">
          <Trophy className="text-yellow-500" size={24} />
          {language === 'en' ? 'Achievements' : 'Erfolge'}
        </h4>
        
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
          {/* Streak Achievements */}
          <div className={`text-center p-3 rounded-xl ${stats.streak >= 3 ? 'bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20' : 'bg-stone-100 dark:bg-stone-700 opacity-50'}`}>
            <div className="text-3xl mb-1">🔥</div>
            <div className="text-xs font-semibold text-stone-700 dark:text-stone-300">3 Days</div>
          </div>
          
          <div className={`text-center p-3 rounded-xl ${stats.streak >= 7 ? 'bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20' : 'bg-stone-100 dark:bg-stone-700 opacity-50'}`}>
            <div className="text-3xl mb-1">⚡</div>
            <div className="text-xs font-semibold text-stone-700 dark:text-stone-300">7 Days</div>
          </div>
          
          <div className={`text-center p-3 rounded-xl ${stats.streak >= 14 ? 'bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20' : 'bg-stone-100 dark:bg-stone-700 opacity-50'}`}>
            <div className="text-3xl mb-1">🚀</div>
            <div className="text-xs font-semibold text-stone-700 dark:text-stone-300">14 Days</div>
          </div>
          
          <div className={`text-center p-3 rounded-xl ${stats.streak >= 30 ? 'bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20' : 'bg-stone-100 dark:bg-stone-700 opacity-50'}`}>
            <div className="text-3xl mb-1">👑</div>
            <div className="text-xs font-semibold text-stone-700 dark:text-stone-300">30 Days</div>
          </div>

          {/* Card Achievements */}
          <div className={`text-center p-3 rounded-xl ${stats.cardsStudiedToday >= 10 ? 'bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20' : 'bg-stone-100 dark:bg-stone-700 opacity-50'}`}>
            <div className="text-3xl mb-1">🌟</div>
            <div className="text-xs font-semibold text-stone-700 dark:text-stone-300">10 Today</div>
          </div>
          
          <div className={`text-center p-3 rounded-xl ${stats.cardsStudiedToday >= 25 ? 'bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20' : 'bg-stone-100 dark:bg-stone-700 opacity-50'}`}>
            <div className="text-3xl mb-1">💎</div>
            <div className="text-xs font-semibold text-stone-700 dark:text-stone-300">25 Today</div>
          </div>
        </div>
      </div>

      {/* Activity Calendar (Simplified) */}
      <div className="bg-white dark:bg-stone-800 rounded-2xl p-6 border-2 border-stone-200 dark:border-stone-700">
        <h4 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2">
          <Calendar className="text-rose-500" size={24} />
          {language === 'en' ? 'This Week' : 'Diese Woche'}
        </h4>
        
        <div className="grid grid-cols-7 gap-2">
          {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day, i) => {
            const isToday = new Date().getDay() === (i + 1) % 7;
            return (
              <div key={day} className="text-center">
                <div className="text-xs font-semibold text-stone-600 dark:text-stone-400 mb-2">
                  {day}
                </div>
                <div className={`h-10 rounded-lg ${
                  isToday 
                    ? 'bg-gradient-to-br from-rose-500 to-pink-500 ring-2 ring-rose-300 dark:ring-rose-700' 
                    : 'bg-stone-100 dark:bg-stone-700'
                }`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StatsPanel;

