import React, { useState } from 'react';
import { Activity, Plus, Timer, Repeat, TrendingUp } from 'lucide-react';
import { addStrengthTest, loadStrengthTests } from '../utils/sessionStorage';
import { useLanguage } from '../context/LanguageContext';

function StrengthTests() {
  const { language, t } = useLanguage();
  const [showTestForm, setShowTestForm] = useState(false);
  const [tests, setTests] = useState(loadStrengthTests());
  
  const [newTest, setNewTest] = useState({
    type: 'max_hang',
    value: '',
    notes: ''
  });

  const testTypes = [
    { id: 'max_hang', name: t('maxHang'), unit: 'seconds', icon: Timer },
    { id: 'pullups', name: t('pullups'), unit: 'reps', icon: Repeat },
    { id: 'weighted_pullup', name: t('weightedPullup'), unit: 'kg', icon: Activity },
    { id: 'plank', name: t('plank'), unit: 'seconds', icon: Timer },
    { id: 'leg_raise', name: t('legRaise'), unit: 'reps', icon: Repeat },
    { id: 'one_arm_hang', name: t('oneArmHang'), unit: 'seconds', icon: Timer },
  ];

  const handleAddTest = () => {
    if (!newTest.value) {
      alert(t('value') + '!');
      return;
    }

    const test = addStrengthTest({
      type: newTest.type,
      value: parseFloat(newTest.value),
      unit: testTypes.find(t => t.id === newTest.type).unit,
      notes: newTest.notes
    });

    setTests([test, ...tests]);
    setNewTest({ type: 'max_hang', value: '', notes: '' });
    setShowTestForm(false);
  };

  // Group tests by type
  const groupedTests = {};
  tests.forEach(test => {
    if (!groupedTests[test.type]) {
      groupedTests[test.type] = [];
    }
    groupedTests[test.type].push(test);
  });

  // Calculate best for each type
  const bestValues = {};
  Object.keys(groupedTests).forEach(type => {
    const values = groupedTests[type].map(t => t.value);
    bestValues[type] = Math.max(...values);
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 flex items-center gap-2">
          <Activity className="text-teal-500" />
          {t('strengthTests')}
        </h1>
        <button
          onClick={() => setShowTestForm(true)}
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
        >
          <Plus size={20} />
          {t('addTest')}
        </button>
      </div>

      {tests.length === 0 ? (
        <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-12 text-center">
          <Activity size={64} className="mx-auto mb-4 text-stone-300" />
          <p className="text-stone-600 dark:text-stone-400 text-lg">
            {t('noTestsYet')}
          </p>
          <p className="text-stone-500 dark:text-stone-500 text-sm mt-2">
            {t('addFirstTest')}
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Best Values Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.keys(groupedTests).slice(0, 3).map(type => {
              const testType = testTypes.find(t => t.id === type);
              const Icon = testType?.icon || Activity;
              const best = bestValues[type];
              const unit = testType?.unit || '';

              return (
                <div key={type} className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg shadow-md p-6 text-white">
                  <Icon size={24} className="mb-2" />
                  <div className="text-3xl font-bold mb-1">
                    {best} {unit}
                  </div>
                  <div className="text-teal-100 text-sm">
                    {testType?.name || type}
                  </div>
                  <div className="text-teal-200 text-xs mt-1">
                    {t('personalBest')}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Test History by Type */}
          {testTypes.filter(tt => groupedTests[tt.id]).map(testType => {
            const testsOfType = groupedTests[testType.id];
            const Icon = testType.icon;
            const best = bestValues[testType.id];

            // Calculate progress (last vs best)
            const lastValue = testsOfType[0]?.value;
            const progressPercent = best > 0 ? ((lastValue / best) * 100).toFixed(0) : 0;

            return (
              <div key={testType.id} className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Icon size={24} className="text-teal-500" />
                    <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100">
                      {testType.name}
                    </h2>
                  </div>
                  <div className="text-sm text-stone-600 dark:text-stone-400">
                    {t('best')}: <span className="font-bold text-teal-600">{best} {testType.unit}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-stone-600 dark:text-stone-400 mb-1">
                    <span>{t('currentProgress')}</span>
                    <span>{progressPercent}%</span>
                  </div>
                  <div className="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-teal-500 to-orange-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* History */}
                <div className="space-y-2">
                  {testsOfType.slice(0, 5).map(test => (
                    <div key={test.id} className="bg-stone-50 dark:bg-stone-900 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl font-bold text-teal-600">
                          {test.value}
                        </div>
                        <div className="text-sm text-stone-600 dark:text-stone-400">
                          {testType.unit}
                        </div>
                        {test.value === best && (
                          <div className="text-xs bg-yellow-500 text-white px-2 py-1 rounded font-semibold">
                            🏆 PR
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-stone-500 dark:text-stone-400">
                          {new Date(test.timestamp).toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US')}
                        </div>
                        {test.notes && (
                          <div className="text-xs text-stone-600 dark:text-stone-400 italic mt-1">
                            {test.notes}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Show Trend */}
                {testsOfType.length >= 2 && (
                  <div className="mt-3 flex items-center gap-2 text-sm">
                    <TrendingUp size={16} className="text-green-500" />
                    <span className="text-stone-600 dark:text-stone-400">
                      {t('trend')}: 
                      <span className="font-semibold ml-1">
                        {testsOfType[0].value > testsOfType[1].value 
                          ? '📈 ' + t('improving')
                          : '📉 ' + t('declining')
                        }
                      </span>
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Add Test Modal */}
      {showTestForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-stone-800 rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4">
              {t('addTest')}
            </h3>

            {/* Test Type */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                {t('testType')}
              </label>
              <select
                value={newTest.type}
                onChange={(e) => setNewTest({...newTest, type: e.target.value})}
                className="w-full px-4 py-2 border-2 border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 rounded-lg focus:border-teal-500 focus:outline-none"
              >
                {testTypes.map(tt => (
                  <option key={tt.id} value={tt.id}>{tt.name}</option>
                ))}
              </select>
            </div>

            {/* Value */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                {t('value')} ({testTypes.find(t => t.id === newTest.type)?.unit})
              </label>
              <input
                type="number"
                step="0.1"
                value={newTest.value}
                onChange={(e) => setNewTest({...newTest, value: e.target.value})}
                placeholder="30"
                className="w-full px-4 py-2 border-2 border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 rounded-lg focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* Notes */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                {t('notesOptional')}
              </label>
              <textarea
                value={newTest.notes}
                onChange={(e) => setNewTest({...newTest, notes: e.target.value})}
                placeholder={t('exampleAfterWarmup')}
                rows={2}
                className="w-full px-4 py-2 border-2 border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 rounded-lg focus:border-teal-500 focus:outline-none resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowTestForm(false)}
                className="flex-1 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-stone-800 dark:text-stone-100 font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                {t('cancel')}
              </button>
              <button
                onClick={handleAddTest}
                className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                {t('add')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StrengthTests;

