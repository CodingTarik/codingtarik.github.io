import React, { useState, useEffect } from 'react';
import { Trophy, Flame, TrendingUp, Calendar, Target, Award, BarChart3, Settings, Zap, Clock, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';
import { getDecks, getAllReviewDates } from '../../utils/deckStorage';
import { calculateStreak, getDueCards } from '../../utils/spacedRepetition';
import { getCachedCards } from '../../utils/vocabularyCache';
import { fetchCardsFromSheet } from '../../utils/googleSheetsAPI';

const GOAL_STORAGE_KEY = 'vocab_daily_goal';
const RATING_DISTRIBUTION_KEY = 'vocab_rating_distribution';

function StatsPanel() {
  const { language } = useLanguage();
  const [stats, setStats] = useState({
    totalDecks: 0,
    totalCards: 0,
    cardsStudiedToday: 0,
    streak: 0,
    weeklyGoal: 50,
    weeklyProgress: 0,
    dueToday: 0,
    dueTomorrow: 0,
    dueThisWeek: 0,
    forecast: [] // Array of {date, count} for next 30 days
  });
  
  const [dailyGoal, setDailyGoal] = useState(() => {
    const saved = localStorage.getItem(GOAL_STORAGE_KEY);
    return saved ? parseInt(saved) : 20;
  });
  
  const [ratingDistribution, setRatingDistribution] = useState(() => {
    const saved = localStorage.getItem(RATING_DISTRIBUTION_KEY);
    return saved ? JSON.parse(saved) : { easy: 20, good: 60, hard: 15, again: 5 };
  });
  
  const [allCardsData, setAllCardsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, [dailyGoal, ratingDistribution]);

  const loadStats = async () => {
    setLoading(true);
    try {
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

      // Load all cards from all decks
      const allCards = [];
      for (const deck of decks) {
        try {
          const cached = getCachedCards(deck.id);
          if (cached && cached.cards) {
            allCards.push(...cached.cards.map(card => ({ ...card, deckId: deck.id })));
          } else {
            // Try to fetch if not cached
            const fetched = await fetchCardsFromSheet(deck.scriptUrl);
            allCards.push(...fetched.map(card => ({ ...card, deckId: deck.id })));
          }
        } catch (error) {
          console.error(`Error loading cards for deck ${deck.id}:`, error);
        }
      }
      
      setAllCardsData(allCards);

      // Calculate due cards forecast
      const now = new Date();
      const forecast = [];
      const dueByDay = {};
      
      // Initialize next 30 days
      for (let i = 0; i < 30; i++) {
        const date = new Date(now);
        date.setDate(date.getDate() + i);
        date.setHours(0, 0, 0, 0);
        dueByDay[date.toISOString().split('T')[0]] = 0;
      }

      // Count cards due on each day
      allCards.forEach(card => {
        if (!card.nextReviewDate) {
          // New cards are due today
          const todayKey = now.toISOString().split('T')[0];
          dueByDay[todayKey] = (dueByDay[todayKey] || 0) + 1;
        } else {
          const reviewDate = new Date(card.nextReviewDate);
          reviewDate.setHours(0, 0, 0, 0);
          const reviewKey = reviewDate.toISOString().split('T')[0];
          if (dueByDay[reviewKey] !== undefined) {
            dueByDay[reviewKey] = (dueByDay[reviewKey] || 0) + 1;
          }
        }
      });

      // Convert to array format
      Object.entries(dueByDay).forEach(([date, count]) => {
        forecast.push({ date, count });
      });

      // Calculate due cards
      const dueToday = getDueCards(allCards).length;
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      const dueTomorrow = allCards.filter(card => {
        if (!card.nextReviewDate) return false;
        const reviewDate = new Date(card.nextReviewDate);
        reviewDate.setHours(0, 0, 0, 0);
        return reviewDate.getTime() === tomorrow.getTime();
      }).length;

      const weekFromNow = new Date(now);
      weekFromNow.setDate(weekFromNow.getDate() + 7);
      const dueThisWeek = allCards.filter(card => {
        if (!card.nextReviewDate) return true;
        const reviewDate = new Date(card.nextReviewDate);
        return reviewDate <= weekFromNow && reviewDate > now;
      }).length;

      setStats({
        totalDecks: decks.length,
        totalCards: allCards.length,
        cardsStudiedToday: todayReviews,
        streak,
        weeklyGoal: 50,
        weeklyProgress: weeklyReviews,
        dueToday,
        dueTomorrow,
        dueThisWeek,
        forecast
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
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
    const { streak, cardsStudiedToday, dueToday } = stats;
    
    if (cardsStudiedToday === 0 && dueToday > 0) {
      return language === 'en' 
        ? "Let's study some cards today!"
        : "Lass uns heute einige Karten lernen!";
    }
    
    if (cardsStudiedToday >= dailyGoal) {
      return language === 'en'
        ? "Daily goal achieved! Amazing!"
        : "Tagesziel erreicht! Fantastisch!";
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
  const dailyProgressPercent = Math.min(100, (stats.cardsStudiedToday / dailyGoal) * 100);

  // Calculate learning forecast based on goal and rating distribution
  const calculateLearningForecast = () => {
    const forecast = [];
    let totalMastered = 0;
    const daysToForecast = 30;
    
    for (let day = 0; day < daysToForecast; day++) {
      const date = new Date();
      date.setDate(date.getDate() + day);
      
      // Calculate how many cards will be reviewed today
      // Use forecast data if available, otherwise estimate based on average
      const dueToday = stats.forecast[day]?.count || 0;
      const cardsReviewed = Math.min(dailyGoal, Math.max(dueToday, dailyGoal * 0.8));
      
      // Based on rating distribution, calculate how many cards will be "mastered"
      // Simplified: assume easy/good cards are mastered after 3 successful reviews
      // For this forecast, we'll use a simplified model where mastery = cards reviewed * mastery rate
      const masteryRate = (ratingDistribution.easy * 0.9 + ratingDistribution.good * 0.7) / 100;
      const masteredToday = Math.round(cardsReviewed * masteryRate);
      
      totalMastered += masteredToday;
      
      forecast.push({
        date: date.toISOString().split('T')[0],
        cardsReviewed,
        masteredToday,
        totalMastered: Math.min(stats.totalCards, totalMastered),
        remaining: Math.max(0, stats.totalCards - totalMastered)
      });
    }
    
    return forecast;
  };

  const learningForecast = calculateLearningForecast();

  // Get recommendation for rating distribution to meet goal
  const getRatingRecommendation = () => {
    const avgDuePerDay = stats.forecast.slice(0, 7).reduce((sum, f) => sum + f.count, 0) / 7;
    const neededPerDay = dailyGoal;
    
    if (avgDuePerDay <= neededPerDay) {
      // Can afford to be more selective (more easy/good)
      return {
        easy: 25,
        good: 60,
        hard: 12,
        again: 3,
        message: language === 'en' 
          ? "You can be selective! Aim for more 'Easy' and 'Good' ratings."
          : "Du kannst wählerisch sein! Strebe nach mehr 'Einfach' und 'Gut' Bewertungen."
      };
    } else {
      // Need to be more efficient (more good, less easy to review more cards)
      return {
        easy: 15,
        good: 65,
        hard: 15,
        again: 5,
        message: language === 'en'
          ? "Focus on 'Good' ratings to review more cards efficiently."
          : "Konzentriere dich auf 'Gut' Bewertungen, um mehr Karten effizient zu wiederholen."
      };
    }
  };

  const recommendation = getRatingRecommendation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-stone-600 dark:text-stone-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Motivational Header */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-1">{getMotivationalMessage()}</h3>
            <p className="text-white/80">
              {language === 'en' 
                ? 'Your learning statistics & forecast'
                : 'Deine Lernstatistiken & Prognose'}
            </p>
          </div>
          <Trophy size={48} className="opacity-80" />
        </div>
      </div>

      {/* Daily Goal Section */}
      <div className="bg-white dark:bg-stone-800 rounded-2xl p-6 border-2 border-stone-200 dark:border-stone-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Target className="text-rose-500" size={24} />
            <h4 className="text-lg font-bold text-stone-800 dark:text-stone-100">
              {language === 'en' ? 'Daily Goal' : 'Tagesziel'}
            </h4>
          </div>
          <button
            onClick={() => {
              const newGoal = prompt(
                language === 'en' 
                  ? `Set daily goal (current: ${dailyGoal} cards)`
                  : `Tagesziel setzen (aktuell: ${dailyGoal} Karten)`,
                dailyGoal
              );
              if (newGoal && !isNaN(newGoal) && parseInt(newGoal) > 0) {
                setDailyGoal(parseInt(newGoal));
                localStorage.setItem(GOAL_STORAGE_KEY, newGoal);
              }
            }}
            className="p-2 hover:bg-stone-100 dark:hover:bg-stone-700 rounded-lg transition-colors"
          >
            <Settings size={20} className="text-stone-600 dark:text-stone-400" />
          </button>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-stone-700 dark:text-stone-300">
              {stats.cardsStudiedToday} / {dailyGoal} {language === 'en' ? 'cards' : 'Karten'}
            </span>
            <span className="text-sm font-bold text-stone-800 dark:text-stone-100">
              {Math.round(dailyProgressPercent)}%
            </span>
          </div>
          <div className="relative h-6 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-500 flex items-center justify-end pr-2"
              style={{ width: `${dailyProgressPercent}%` }}
            >
              {dailyProgressPercent > 15 && (
                <span className="text-xs font-bold text-white">
                  {stats.cardsStudiedToday}
                </span>
              )}
            </div>
          </div>
        </div>

        {dailyProgressPercent >= 100 && (
          <div className="text-center text-sm font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded-xl">
            🎉 {language === 'en' ? 'Daily goal achieved!' : 'Tagesziel erreicht!'}
          </div>
        )}
      </div>

      {/* Due Cards Forecast */}
      <div className="bg-white dark:bg-stone-800 rounded-2xl p-6 border-2 border-stone-200 dark:border-stone-700">
        <h4 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2">
          <Calendar className="text-blue-500" size={24} />
          {language === 'en' ? 'Upcoming Reviews' : 'Anstehende Wiederholungen'}
        </h4>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border-2 border-red-200 dark:border-red-800">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-1">
              {stats.dueToday}
            </div>
            <div className="text-xs text-red-800 dark:text-red-300 font-semibold">
              {language === 'en' ? 'Due Today' : 'Heute fällig'}
            </div>
          </div>
          
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 border-2 border-orange-200 dark:border-orange-800">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">
              {stats.dueTomorrow}
            </div>
            <div className="text-xs text-orange-800 dark:text-orange-300 font-semibold">
              {language === 'en' ? 'Due Tomorrow' : 'Morgen fällig'}
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border-2 border-blue-200 dark:border-blue-800">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
              {stats.dueThisWeek}
            </div>
            <div className="text-xs text-blue-800 dark:text-blue-300 font-semibold">
              {language === 'en' ? 'This Week' : 'Diese Woche'}
            </div>
          </div>
        </div>

        {/* 7-Day Forecast Chart */}
        <div className="mt-6">
          <h5 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3">
            {language === 'en' ? 'Next 7 Days Forecast' : 'Prognose nächste 7 Tage'}
          </h5>
          <div className="flex items-end gap-2 h-32">
            {stats.forecast.slice(0, 7).map((day, index) => {
              const maxCount = Math.max(...stats.forecast.slice(0, 7).map(d => d.count), 1);
              const height = (day.count / maxCount) * 100;
              const isToday = index === 0;
              const date = new Date(day.date);
              const dayName = date.toLocaleDateString(language === 'en' ? 'en-US' : 'de-DE', { weekday: 'short' });
              
              return (
                <div key={day.date} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex flex-col items-center">
                    <div
                      className={`w-full rounded-t-lg transition-all duration-300 ${
                        isToday
                          ? 'bg-gradient-to-t from-rose-500 to-pink-500'
                          : day.count > dailyGoal
                          ? 'bg-gradient-to-t from-orange-500 to-red-500'
                          : 'bg-gradient-to-t from-blue-500 to-indigo-500'
                      }`}
                      style={{ height: `${Math.max(height, 5)}%` }}
                      title={`${day.count} cards on ${day.date}`}
                    />
                    <div className="text-xs font-bold text-stone-800 dark:text-stone-100 mt-1">
                      {day.count}
                    </div>
                  </div>
                  <div className={`text-xs mt-2 font-semibold ${isToday ? 'text-rose-600 dark:text-rose-400' : 'text-stone-600 dark:text-stone-400'}`}>
                    {dayName}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Rating Recommendation */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-800">
        <h4 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-3 flex items-center gap-2">
          <Zap className="text-purple-500" size={24} />
          {language === 'en' ? 'Rating Recommendation' : 'Bewertungsempfehlung'}
        </h4>
        
        <p className="text-sm text-stone-700 dark:text-stone-300 mb-4">
          {recommendation.message}
        </p>
        
        <div className="grid grid-cols-4 gap-3">
          {[
            { key: 'easy', label: language === 'en' ? 'Easy' : 'Einfach', color: 'blue', icon: '✅' },
            { key: 'good', label: language === 'en' ? 'Good' : 'Gut', color: 'green', icon: '👍' },
            { key: 'hard', label: language === 'en' ? 'Hard' : 'Schwer', color: 'orange', icon: '😓' },
            { key: 'again', label: language === 'en' ? 'Again' : 'Nochmal', color: 'red', icon: '🔄' }
          ].map(({ key, label, color, icon }) => (
            <div key={key} className="bg-white dark:bg-stone-800 rounded-xl p-4 border-2 border-stone-200 dark:border-stone-700">
              <div className="text-2xl mb-2">{icon}</div>
              <div className={`text-2xl font-bold text-${color}-600 dark:text-${color}-400 mb-1`}>
                {recommendation[key]}%
              </div>
              <div className="text-xs text-stone-600 dark:text-stone-400 font-semibold">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Progress Forecast */}
      <div className="bg-white dark:bg-stone-800 rounded-2xl p-6 border-2 border-stone-200 dark:border-stone-700">
        <h4 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2">
          <TrendingUp className="text-green-500" size={24} />
          {language === 'en' ? '30-Day Learning Forecast' : '30-Tage Lernprognose'}
        </h4>
        
        <p className="text-sm text-stone-600 dark:text-stone-400 mb-4">
          {language === 'en' 
            ? `Based on your daily goal of ${dailyGoal} cards and current rating distribution, here's your projected learning progress:`
            : `Basierend auf deinem Tagesziel von ${dailyGoal} Karten und aktueller Bewertungsverteilung, hier ist deine prognostizierte Lernfortschritt:`}
        </p>

        {/* Progress Chart */}
        <div className="relative h-64 mb-4 bg-stone-50 dark:bg-stone-900/50 rounded-xl p-4">
          <div className="absolute inset-4 flex flex-col justify-between pointer-events-none">
            {[0, 25, 50, 75, 100].map(percent => (
              <div key={percent} className="flex items-center">
                <div className="w-12 text-xs text-stone-500 dark:text-stone-400 text-right pr-2">
                  {Math.round((stats.totalCards * percent) / 100)}
                </div>
                <div className="flex-1 h-px bg-stone-200 dark:bg-stone-700 opacity-30" />
              </div>
            ))}
          </div>
          
          <svg className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)]" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Area under curve */}
            <defs>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
            </defs>
            
            {/* Area fill */}
            <polygon
              fill="url(#areaGradient)"
              points={`0,100 ${learningForecast.map((day, index) => {
                const x = (index / (learningForecast.length - 1)) * 100;
                const y = 100 - ((day.totalMastered / stats.totalCards) * 100);
                return `${x},${y}`;
              }).join(' ')} 100,100`}
            />
            
            {/* Line */}
            <polyline
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={learningForecast.map((day, index) => {
                const x = (index / (learningForecast.length - 1)) * 100;
                const y = 100 - ((day.totalMastered / stats.totalCards) * 100);
                return `${x},${y}`;
              }).join(' ')}
            />
            
            {/* Data points */}
            {learningForecast.filter((_, i) => i % 5 === 0 || i === learningForecast.length - 1).map((day, idx) => {
              const index = idx * 5;
              const x = (index / (learningForecast.length - 1)) * 100;
              const y = 100 - ((day.totalMastered / stats.totalCards) * 100);
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="2"
                  fill="#10b981"
                  stroke="white"
                  strokeWidth="1"
                />
              );
            })}
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {learningForecast[7]?.totalMastered || 0}
            </div>
            <div className="text-xs text-stone-600 dark:text-stone-400">
              {language === 'en' ? 'In 7 days' : 'In 7 Tagen'}
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {learningForecast[14]?.totalMastered || 0}
            </div>
            <div className="text-xs text-stone-600 dark:text-stone-400">
              {language === 'en' ? 'In 14 days' : 'In 14 Tagen'}
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {learningForecast[29]?.totalMastered || 0}
            </div>
            <div className="text-xs text-stone-600 dark:text-stone-400">
              {language === 'en' ? 'In 30 days' : 'In 30 Tagen'}
            </div>
          </div>
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

        {/* Total Cards */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between mb-3">
            <BarChart3 className="text-green-500" size={32} />
            <span className="text-3xl">📊</span>
          </div>
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
            {stats.totalCards}
          </div>
          <div className="text-sm text-green-800 dark:text-green-300 font-semibold">
            {language === 'en' ? 'Total Cards' : 'Gesamt Karten'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsPanel;
