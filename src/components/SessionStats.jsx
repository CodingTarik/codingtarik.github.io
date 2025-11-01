import React, { useState } from 'react';
import { TrendingUp, Calendar, BarChart3, Award, Play } from 'lucide-react';
import { loadSessions, loadBoulders, getSessionStats, getBoulderStats, getMaxGrade } from '../utils/sessionStorage';
import { useLanguage } from '../context/LanguageContext';
import VideoPlayer from './VideoPlayer';

function SessionStats() {
  const { language, t } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const sessions = loadSessions();
  const boulders = loadBoulders();
  const sessionStats = getSessionStats();
  const boulderStats = getBoulderStats();
  const maxGrade = getMaxGrade();

  // Group boulders by grade for pyramid
  const gradeOrder = ['3a', '3b', '3c', '4a', '4b', '4c', '5a', '5b', '5c', '6a', '6b', '6c', '7a', '7b', '7c', '8a', '8b', '8c'];
  const pyramid = gradeOrder.map(grade => ({
    grade,
    count: boulders.filter(b => b.grade.startsWith(grade)).length
  })).filter(g => g.count > 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-6 flex items-center gap-2">
        <BarChart3 className="text-teal-500" />
        {t('statistics')}
      </h1>

      {sessions.length === 0 ? (
        <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-12 text-center">
          <Calendar size={64} className="mx-auto mb-4 text-stone-300" />
          <p className="text-stone-600 dark:text-stone-400 text-lg">
            {t('noSessionsYet')}
          </p>
          <p className="text-stone-500 dark:text-stone-500 text-sm mt-2">
            {t('startSessionToSeeStats')}
          </p>
        </div>
      ) : (
        <>
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg shadow-md p-6 text-white">
              <div className="text-4xl font-bold mb-1">{sessionStats.totalSessions}</div>
              <div className="text-teal-100 text-sm">Sessions</div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-md p-6 text-white">
              <div className="text-4xl font-bold mb-1">{sessionStats.totalBoulders}</div>
              <div className="text-orange-100 text-sm">
                {t('boulders')}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-md p-6 text-white">
              <div className="text-4xl font-bold mb-1">{boulderStats.sendRate}%</div>
              <div className="text-purple-100 text-sm">
                {t('sendRate')}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-md p-6 text-white">
              <div className="text-4xl font-bold mb-1">{maxGrade || '?'}</div>
              <div className="text-green-100 text-sm">
                {t('maxGrade')}
              </div>
            </div>
          </div>

          {/* Boulder Pyramid */}
          {pyramid.length > 0 && (
            <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2">
                <Award className="text-teal-500" />
                {t('boulderPyramid')}
              </h2>
              <div className="space-y-2">
                {pyramid.reverse().map(({ grade, count }) => {
                  const maxCount = Math.max(...pyramid.map(p => p.count));
                  const width = (count / maxCount) * 100;
                  
                  return (
                    <div key={grade} className="flex items-center gap-3">
                      <div className="w-12 text-right font-bold text-stone-700 dark:text-stone-300">
                        {grade}
                      </div>
                      <div className="flex-1 bg-stone-100 dark:bg-stone-700 rounded-full h-8 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-teal-500 to-orange-500 h-full flex items-center px-3 rounded-full transition-all duration-500"
                          style={{ width: `${Math.max(width, 10)}%` }}
                        >
                          <span className="text-white font-bold text-sm">{count}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Recent Sessions */}
          <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2">
              <Calendar className="text-teal-500" />
              {t('recentSessions')}
            </h2>
            <div className="space-y-3">
              {sessions.slice(0, 5).map(session => (
                <div key={session.id} className="bg-stone-50 dark:bg-stone-900 rounded-lg p-4 border-l-4 border-teal-500">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                      {new Date(session.date).toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US', {
                        weekday: 'short',
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="text-sm text-stone-600 dark:text-stone-400">
                      ⏱️ {session.duration} min
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-teal-600">
                      {session.boulderCount || 0}
                    </div>
                    <div className="text-sm text-stone-600 dark:text-stone-400">
                      {language === 'de' ? 'Boulder' : 'boulders'}
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex items-center gap-1">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-4 rounded ${
                            i < session.feeling ? 'bg-orange-500' : 'bg-stone-300 dark:bg-stone-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  {session.notes && (
                    <p className="text-sm text-stone-600 dark:text-stone-400 mt-2 italic">
                      "{session.notes}"
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recent Boulders with Media */}
          <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2">
              <TrendingUp className="text-teal-500" />
              {t('recentBoulders')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {boulders.slice(0, 6).map(boulder => (
                <div key={boulder.id} className="bg-stone-50 dark:bg-stone-900 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-2xl font-bold text-teal-600">{boulder.grade}</span>
                      {boulder.sent && <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded font-semibold">✓</span>}
                      {boulder.flash && <span className="ml-1 text-xs bg-yellow-500 text-white px-2 py-1 rounded font-semibold">⚡</span>}
                    </div>
                    <div className="text-xs text-stone-500 dark:text-stone-400">
                      {new Date(boulder.timestamp).toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US')}
                    </div>
                  </div>

                  {boulder.photos && boulder.photos.length > 0 && (
                    <div className="flex gap-2 mb-2 overflow-x-auto">
                      {boulder.photos.slice(0, 3).map((photo, idx) => (
                        <img key={idx} src={photo} alt="Boulder" className="w-20 h-20 object-cover rounded" />
                      ))}
                    </div>
                  )}

                  {boulder.videos && boulder.videos.length > 0 && (
                  <button
                    onClick={() => setSelectedVideo(boulder.videos[0])}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold py-2 px-3 rounded flex items-center justify-center gap-2 transition-colors"
                  >
                    <Play size={16} />
                    {t('watchVideo')}
                  </button>
                  )}

                  {boulder.notes && (
                    <p className="text-xs text-stone-600 dark:text-stone-400 mt-2 line-clamp-2">
                      {boulder.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayer
          videoUrl={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}

export default SessionStats;

