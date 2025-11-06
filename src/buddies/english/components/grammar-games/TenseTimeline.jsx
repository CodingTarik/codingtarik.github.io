import React, { useState } from 'react';
import { Clock, Calendar, Zap, CheckCircle } from 'lucide-react';

function TenseTimeline({ language = 'en' }) {
  const [selectedTime, setSelectedTime] = useState(null);

  const timePoints = [
    {
      id: 'past',
      position: 20,
      icon: Calendar,
      label: { en: 'Past', de: 'Vergangenheit' },
      color: 'blue',
      examples: {
        en: [
          'I worked yesterday',
          'She visited Berlin last year',
          'They played soccer'
        ],
        de: [
          'I worked yesterday (Ich arbeitete gestern)',
          'She visited Berlin last year (Sie besuchte Berlin letztes Jahr)',
          'They played soccer (Sie spielten Fußball)'
        ]
      },
      tense: { en: 'Past Simple', de: 'Past Simple' },
      description: {
        en: 'Actions that happened and finished in the past',
        de: 'Handlungen, die in der Vergangenheit passiert und abgeschlossen sind'
      }
    },
    {
      id: 'present-habit',
      position: 50,
      icon: Clock,
      label: { en: 'Present (Habits)', de: 'Gegenwart (Gewohnheiten)' },
      color: 'green',
      examples: {
        en: [
          'I drink coffee every morning ☕',
          'She works as a teacher',
          'They live in Berlin'
        ],
        de: [
          'I drink coffee every morning (Ich trinke jeden Morgen Kaffee) ☕',
          'She works as a teacher (Sie arbeitet als Lehrerin)',
          'They live in Berlin (Sie leben in Berlin)'
        ]
      },
      tense: { en: 'Present Simple', de: 'Present Simple' },
      description: {
        en: 'Regular actions, habits, and permanent situations',
        de: 'Regelmäßige Handlungen, Gewohnheiten und dauerhafte Situationen'
      }
    },
    {
      id: 'present-now',
      position: 55,
      icon: Zap,
      label: { en: 'Right Now', de: 'Genau jetzt' },
      color: 'yellow',
      examples: {
        en: [
          'I am studying right now 📚',
          'She is eating lunch',
          'They are watching TV'
        ],
        de: [
          'I am studying right now (Ich lerne gerade) 📚',
          'She is eating lunch (Sie isst gerade zu Mittag)',
          'They are watching TV (Sie schauen gerade fern)'
        ]
      },
      tense: { en: 'Present Continuous', de: 'Present Continuous' },
      description: {
        en: 'Actions happening at this exact moment',
        de: 'Handlungen, die genau in diesem Moment passieren'
      }
    },
    {
      id: 'future',
      position: 80,
      icon: Calendar,
      label: { en: 'Future', de: 'Zukunft' },
      color: 'purple',
      examples: {
        en: [
          'I will travel tomorrow ✈️',
          'She will start a new job',
          'They will visit us'
        ],
        de: [
          'I will travel tomorrow (Ich werde morgen reisen) ✈️',
          'She will start a new job (Sie wird einen neuen Job anfangen)',
          'They will visit us (Sie werden uns besuchen)'
        ]
      },
      tense: { en: 'Future Simple', de: 'Future Simple' },
      description: {
        en: 'Actions that will happen in the future',
        de: 'Handlungen, die in der Zukunft passieren werden'
      }
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-500',
      hover: 'hover:bg-blue-600',
      border: 'border-blue-500',
      text: 'text-blue-800 dark:text-blue-200',
      bgLight: 'bg-blue-50 dark:bg-blue-900/20'
    },
    green: {
      bg: 'bg-green-500',
      hover: 'hover:bg-green-600',
      border: 'border-green-500',
      text: 'text-green-800 dark:text-green-200',
      bgLight: 'bg-green-50 dark:bg-green-900/20'
    },
    yellow: {
      bg: 'bg-yellow-500',
      hover: 'hover:bg-yellow-600',
      border: 'border-yellow-500',
      text: 'text-yellow-800 dark:text-yellow-200',
      bgLight: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    purple: {
      bg: 'bg-purple-500',
      hover: 'hover:bg-purple-600',
      border: 'border-purple-500',
      text: 'text-purple-800 dark:text-purple-200',
      bgLight: 'bg-purple-50 dark:bg-purple-900/20'
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-stone-100 dark:from-slate-900/50 dark:to-stone-900/50 rounded-xl p-6 border-2 border-slate-300 dark:border-slate-700 my-6">
      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
        <Clock className="text-slate-500" />
        {language === 'de' ? 'Interaktive Zeit-Linie' : 'Interactive Tense Timeline'}
      </h3>
      <p className="text-sm text-stone-600 dark:text-stone-400 mb-6">
        {language === 'de' 
          ? 'Klicke auf einen Zeitpunkt, um zu sehen, welche Zeitform du verwenden solltest!' 
          : 'Click on a time point to see which tense you should use!'}
      </p>

      {/* Timeline */}
      <div className="relative h-32 bg-white dark:bg-stone-800 rounded-lg p-4 mb-6 border-2 border-slate-300 dark:border-slate-600">
        {/* Timeline line */}
        <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-purple-500 rounded-full transform -translate-y-1/2"></div>
        
        {/* Time points */}
        {timePoints.map((point) => {
          const Icon = point.icon;
          const colors = colorClasses[point.color];
          const isSelected = selectedTime === point.id;
          
          return (
            <button
              key={point.id}
              onClick={() => setSelectedTime(point.id)}
              className={`absolute top-1/2 transform -translate-y-1/2 transition-all ${
                isSelected ? 'scale-125 z-10' : 'hover:scale-110'
              }`}
              style={{ left: `${point.position}%` }}
            >
              <div className={`${colors.bg} ${colors.hover} p-3 rounded-full shadow-lg border-4 border-white dark:border-stone-900 relative`}>
                <Icon size={24} className="text-white" />
                {isSelected && (
                  <div className="absolute -top-1 -right-1">
                    <CheckCircle size={20} className="text-teal-500 bg-white dark:bg-stone-900 rounded-full" />
                  </div>
                )}
              </div>
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <p className={`text-xs font-bold ${colors.text}`}>
                  {point.label[language]}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected time info */}
      {selectedTime && (
        <div className={`${colorClasses[timePoints.find(p => p.id === selectedTime).color].bgLight} rounded-lg p-6 border-2 ${colorClasses[timePoints.find(p => p.id === selectedTime).color].border} animate-fade-in`}>
          {(() => {
            const point = timePoints.find(p => p.id === selectedTime);
            return (
              <>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`${colorClasses[point.color].bg} p-2 rounded-lg`}>
                    <point.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-stone-800 dark:text-stone-200">
                      {point.tense[language]}
                    </h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      {point.description[language]}
                    </p>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-stone-800 rounded-lg p-4 mt-4">
                  <p className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                    {language === 'de' ? '📝 Beispiele:' : '📝 Examples:'}
                  </p>
                  <ul className="space-y-2">
                    {point.examples[language].map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={`${colorClasses[point.color].text} font-bold mt-0.5`}>•</span>
                        <span className="text-stone-700 dark:text-stone-300">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            );
          })()}
        </div>
      )}

      {!selectedTime && (
        <div className="text-center p-8 text-stone-500 dark:text-stone-400 italic">
          {language === 'de' 
            ? '👆 Wähle einen Zeitpunkt auf der Linie aus!' 
            : '👆 Select a time point on the timeline!'}
        </div>
      )}
    </div>
  );
}

export default TenseTimeline;

