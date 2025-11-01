import React, { useState, useRef } from 'react';
import { Camera, Video, Plus, Save, X, Star, Clock, MessageSquare } from 'lucide-react';
import { createSession, addBoulder } from '../utils/sessionStorage';
import { useLanguage } from '../context/LanguageContext';

function SessionLogger({ onComplete, onCancel }) {
  const { language, t } = useLanguage();
  const [sessionDuration, setSessionDuration] = useState('');
  const [sessionFeeling, setSessionFeeling] = useState(5);
  const [sessionNotes, setSessionNotes] = useState('');
  const [boulders, setBoulders] = useState([]);
  const [showBoulderForm, setShowBoulderForm] = useState(false);
  
  // Current boulder being added
  const [currentBoulder, setCurrentBoulder] = useState({
    grade: '5a',
    attempts: 1,
    sent: false,
    flash: false,
    feeling: 3,
    notes: '',
    photos: [],
    videos: []
  });

  const photoInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const grades = [
    '3a', '3a+', '3b', '3b+', '3c', '3c+',
    '4a', '4a+', '4b', '4b+', '4c', '4c+',
    '5a', '5a+', '5b', '5b+', '5c', '5c+',
    '6a', '6a+', '6b', '6b+', '6c', '6c+',
    '7a', '7a+', '7b', '7b+', '7c', '7c+',
    '8a', '8a+', '8b', '8b+', '8c', '8c+'
  ];

  const handlePhotoCapture = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurrentBoulder(prev => ({
          ...prev,
          photos: [...prev.photos, reader.result]
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const handleVideoCapture = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurrentBoulder(prev => ({
          ...prev,
          videos: [...prev.videos, reader.result]
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const addCurrentBoulder = () => {
    if (!currentBoulder.grade) {
      alert(t('pleaseSelectGrade'));
      return;
    }

    setBoulders([...boulders, { ...currentBoulder, tempId: Date.now() }]);
    setCurrentBoulder({
      grade: '5a',
      attempts: 1,
      sent: false,
      flash: false,
      feeling: 3,
      notes: '',
      photos: [],
      videos: []
    });
    setShowBoulderForm(false);
  };

  const removeBoulder = (tempId) => {
    setBoulders(boulders.filter(b => b.tempId !== tempId));
  };

  const handleSaveSession = () => {
    if (!sessionDuration) {
      alert(t('pleaseEnterDuration'));
      return;
    }

    // Create session
    const session = createSession({
      duration: parseInt(sessionDuration),
      feeling: sessionFeeling,
      notes: sessionNotes,
      boulderCount: boulders.length
    });

    // Add all boulders
    boulders.forEach(boulder => {
      addBoulder({
        ...boulder,
        sessionId: session.id
      });
    });

    onComplete();
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-6">
        📝 {t('sessionLogger')}
      </h1>

      {/* Session Details */}
      <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4">
          {t('sessionDetails')}
        </h2>

        {/* Duration */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
            <Clock size={16} className="inline mr-2" />
            {t('durationMinutes')}
          </label>
          <input
            type="number"
            value={sessionDuration}
            onChange={(e) => setSessionDuration(e.target.value)}
            placeholder="90"
            className="w-full px-4 py-2 border-2 border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 rounded-lg focus:border-teal-500 focus:outline-none"
          />
        </div>

        {/* Feeling */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
            {t('howDoYouFeel')}
          </label>
          <div className="flex gap-2">
            {[1,2,3,4,5,6,7,8,9,10].map(num => (
              <button
                key={num}
                onClick={() => setSessionFeeling(num)}
                className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
                  sessionFeeling === num
                    ? 'bg-teal-500 text-white'
                    : 'bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
            <MessageSquare size={16} className="inline mr-2" />
            {t('notes')}
          </label>
          <textarea
            value={sessionNotes}
            onChange={(e) => setSessionNotes(e.target.value)}
            placeholder={t('sessionNotes')}
            rows={3}
            className="w-full px-4 py-2 border-2 border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 rounded-lg focus:border-teal-500 focus:outline-none resize-none"
          />
        </div>
      </div>

      {/* Boulder List */}
      <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100">
            {t('climbedBoulders')} ({boulders.length})
          </h2>
          <button
            onClick={() => setShowBoulderForm(true)}
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
          >
            <Plus size={20} />
            {t('addBoulder')}
          </button>
        </div>

        {boulders.length === 0 ? (
          <p className="text-stone-500 dark:text-stone-400 text-center py-8">
            {t('noBoulders')}
          </p>
        ) : (
          <div className="space-y-3">
            {boulders.map(boulder => (
              <div key={boulder.tempId} className="bg-stone-50 dark:bg-stone-900 rounded-lg p-4 flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-teal-600">{boulder.grade}</span>
                    {boulder.sent && <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">✓ SENT</span>}
                    {boulder.flash && <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-semibold">⚡ FLASH</span>}
                    <span className="text-sm text-stone-600 dark:text-stone-400">{boulder.attempts} {t('attempts')}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < boulder.feeling ? 'fill-orange-500 text-orange-500' : 'text-stone-300'} />
                    ))}
                  </div>
                  {boulder.notes && <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">{boulder.notes}</p>}
                  {boulder.photos.length > 0 && (
                    <div className="flex gap-2 mb-2">
                      {boulder.photos.map((photo, idx) => (
                        <img key={idx} src={photo} alt="Boulder" className="w-16 h-16 object-cover rounded" />
                      ))}
                    </div>
                  )}
                  {boulder.videos.length > 0 && (
                    <div className="text-xs text-teal-600 dark:text-teal-400">
                      📹 {boulder.videos.length} Video(s)
                    </div>
                  )}
                </div>
                <button
                  onClick={() => removeBoulder(boulder.tempId)}
                  className="text-stone-400 hover:text-red-500 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Save/Cancel */}
      <div className="flex gap-3">
        <button
          onClick={onCancel}
          className="flex-1 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-stone-800 dark:text-stone-100 font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          {t('cancel')}
        </button>
        <button
          onClick={handleSaveSession}
          className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Save size={20} />
          {t('saveSession')}
        </button>
      </div>

      {/* Boulder Form Modal */}
      {showBoulderForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white dark:bg-stone-800 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4">
                {t('addBoulder')}
              </h3>

              {/* Grade */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                  {t('grade')}
                </label>
                <select
                  value={currentBoulder.grade}
                  onChange={(e) => setCurrentBoulder({...currentBoulder, grade: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 rounded-lg focus:border-teal-500 focus:outline-none"
                >
                  {grades.map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>

              {/* Attempts */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                  {t('attempts')}
                </label>
                <input
                  type="number"
                  value={currentBoulder.attempts}
                  onChange={(e) => setCurrentBoulder({...currentBoulder, attempts: parseInt(e.target.value) || 1})}
                  min="1"
                  className="w-full px-4 py-2 border-2 border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 rounded-lg focus:border-teal-500 focus:outline-none"
                />
              </div>

              {/* Checkboxes */}
              <div className="mb-4 space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={currentBoulder.sent}
                    onChange={(e) => setCurrentBoulder({...currentBoulder, sent: e.target.checked, flash: e.target.checked ? currentBoulder.flash : false})}
                    className="w-5 h-5 text-teal-500 rounded focus:ring-teal-500"
                  />
                  <span className="text-stone-700 dark:text-stone-300">
                    ✓ {t('sent')}
                  </span>
                </label>
                {currentBoulder.sent && (
                  <label className="flex items-center gap-2 cursor-pointer ml-7">
                    <input
                      type="checkbox"
                      checked={currentBoulder.flash}
                      onChange={(e) => setCurrentBoulder({...currentBoulder, flash: e.target.checked})}
                      className="w-5 h-5 text-yellow-500 rounded focus:ring-yellow-500"
                    />
                    <span className="text-stone-700 dark:text-stone-300">
                      ⚡ {t('flash')}
                    </span>
                  </label>
                )}
              </div>

              {/* Feeling */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                  {t('difficulty')} (1-5 ⭐)
                </label>
                <div className="flex gap-2">
                  {[1,2,3,4,5].map(num => (
                    <button
                      key={num}
                      onClick={() => setCurrentBoulder({...currentBoulder, feeling: num})}
                      type="button"
                      className="flex-1"
                    >
                      <Star 
                        size={32} 
                        className={num <= currentBoulder.feeling ? 'fill-orange-500 text-orange-500' : 'text-stone-300'} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Photos */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                  <Camera size={16} className="inline mr-2" />
                  {t('photos')}
                </label>
                <input
                  ref={photoInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  capture="environment"
                  onChange={handlePhotoCapture}
                  className="hidden"
                />
                <button
                  onClick={() => photoInputRef.current?.click()}
                  type="button"
                  className="w-full bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 dark:hover:bg-stone-600 text-stone-700 dark:text-stone-300 font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  {t('takePhoto')}
                </button>
                {currentBoulder.photos.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {currentBoulder.photos.map((photo, idx) => (
                      <div key={idx} className="relative">
                        <img src={photo} alt="Boulder" className="w-20 h-20 object-cover rounded" />
                        <button
                          onClick={() => setCurrentBoulder({
                            ...currentBoulder,
                            photos: currentBoulder.photos.filter((_, i) => i !== idx)
                          })}
                          type="button"
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Videos */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                  <Video size={16} className="inline mr-2" />
                  {t('videos')}
                </label>
                <input
                  ref={videoInputRef}
                  type="file"
                  accept="video/*"
                  capture="environment"
                  onChange={handleVideoCapture}
                  className="hidden"
                />
                <button
                  onClick={() => videoInputRef.current?.click()}
                  type="button"
                  className="w-full bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 dark:hover:bg-stone-600 text-stone-700 dark:text-stone-300 font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  {t('recordVideo')}
                </button>
                {currentBoulder.videos.length > 0 && (
                  <div className="mt-2 text-sm text-teal-600 dark:text-teal-400">
                    📹 {currentBoulder.videos.length} {t('videosAdded')}
                  </div>
                )}
              </div>

              {/* Notes */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                  {t('notes')}
                </label>
                <textarea
                  value={currentBoulder.notes}
                  onChange={(e) => setCurrentBoulder({...currentBoulder, notes: e.target.value})}
                  placeholder={t('exampleNotes')}
                  rows={2}
                  className="w-full px-4 py-2 border-2 border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 rounded-lg focus:border-teal-500 focus:outline-none resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowBoulderForm(false)}
                  type="button"
                  className="flex-1 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-stone-800 dark:text-stone-100 font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  {t('cancel')}
                </button>
                <button
                  onClick={addCurrentBoulder}
                  type="button"
                  className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  {t('add')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SessionLogger;

