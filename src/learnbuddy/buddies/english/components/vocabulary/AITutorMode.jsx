import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Mic, MicOff, Play, Pause, Loader, Volume2, VolumeX, SkipForward, ChevronLeft, Star, Check, X, RefreshCw, Edit, Eye, Upload } from 'lucide-react';
import toast from 'react-hot-toast';
import { useLanguage } from '../../../../context/LanguageContext';
import { useSettings } from '../../../../context/SettingsContext';
import { fetchCardsFromSheet, updateCardInSheet, addCardToSheet, deleteCardFromSheet } from '../../utils/googleSheetsAPI';
import { getDueCards, calculateNextReview, RATING } from '../../utils/spacedRepetition';
import { 
  getCachedCards, 
  setCachedCards, 
  updateCardLocally,
  deleteCardLocally,
  getPendingChangesCount,
  getPendingChanges,
  clearPendingChanges
} from '../../utils/vocabularyCache';
import { 
  transcribeAudio, 
  generateVoiceResponse, 
  generateVocabularyTutorResponse 
} from '../../../../utils/chatgpt';
import ReactMarkdown from 'react-markdown';
import CardEditModal from './CardEditModal';
import * as sounds from '../../utils/vocabularySounds';

function AITutorMode({ deck, onBack }) {
  const { language } = useLanguage();
  const { globalSettings } = useSettings();
  const [allCards, setAllCards] = useState([]);
  const [dueCards, setDueCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [sessionComplete, setSessionComplete] = useState(false);
  
  // Voice recording state
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const recordingIntervalRef = useRef(null);
  
  // AI Tutor state
  const [tutorState, setTutorState] = useState('question'); // 'question', 'waiting', 'feedback', 'rating'
  const [tutorQuestionAudio, setTutorQuestionAudio] = useState(null);
  const [tutorFeedbackAudio, setTutorFeedbackAudio] = useState(null);
  const [tutorFeedbackText, setTutorFeedbackText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const audioRefs = useRef({});
  const [soundsEnabled, setSoundsEnabled] = useState(sounds.areSoundsEnabled());
  const [editingCard, setEditingCard] = useState(null);
  const [showAnswerManually, setShowAnswerManually] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [pendingCount, setPendingCount] = useState(0);
  
  // Session stats
  const [sessionStats, setSessionStats] = useState({
    again: 0,
    hard: 0,
    good: 0,
    easy: 0,
    total: 0
  });

  useEffect(() => {
    loadCards();
    checkApiKey();
    updatePendingCount();
  }, [deck]);

  const updatePendingCount = () => {
    setPendingCount(getPendingChangesCount(deck.id));
  };

  useEffect(() => {
    if (dueCards.length > 0 && currentIndex < dueCards.length && tutorState === 'question') {
      askQuestion();
    }
  }, [currentIndex, dueCards.length]);

  useEffect(() => {
    return () => {
      // Cleanup
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current);
      }
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
      Object.values(audioRefs.current).forEach(audio => {
        if (audio) {
          audio.pause();
          URL.revokeObjectURL(audio.src);
        }
      });
    };
  }, [audioUrl]);

  const checkApiKey = () => {
    if (!globalSettings.chatGptApiKey) {
      toast.error(language === 'en' 
        ? 'Please configure your ChatGPT API key in settings!' 
        : 'Bitte konfiguriere deinen ChatGPT API Key in den Einstellungen!');
    }
  };

  const loadCards = async () => {
    setLoading(true);
    try {
      const cached = getCachedCards(deck.id);
      let fetchedCards;
      if (cached && cached.cards) {
        fetchedCards = cached.cards;
      } else {
        fetchedCards = await fetchCardsFromSheet(deck.scriptUrl);
        setCachedCards(deck.id, fetchedCards);
      }
      
      setAllCards(fetchedCards);
      const due = getDueCards(fetchedCards);
      setDueCards(due);
      
      if (due.length === 0) {
        setSessionComplete(true);
      }
    } catch (error) {
      console.error('Error loading cards:', error);
      toast.error(language === 'en' ? 'Failed to load cards' : 'Karten konnten nicht geladen werden');
    } finally {
      setLoading(false);
    }
  };

  const askQuestion = async () => {
    if (!globalSettings.chatGptApiKey) {
      checkApiKey();
      return;
    }

    const currentCard = dueCards[currentIndex];
    if (!currentCard) return;

    setIsProcessing(true);
    setTutorState('question');
    setTutorFeedbackText('');
    setUserAnswer('');
    setAudioBlob(null);
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
    }

    try {
      const isFirstQuestion = currentIndex === 0;
      const questionText = isFirstQuestion
        ? (language === 'de' 
          ? `Kommen wir zum nächsten Wort. Was bedeutet "${currentCard.word}"?`
          : `Let's move to the next word. What does "${currentCard.word}" mean?`)
        : (language === 'de'
          ? `Was bedeutet "${currentCard.word}"?`
          : `What does "${currentCard.word}" mean?`);

      // Generate AI voice for question
      const questionAudioBlob = await generateVoiceResponse(questionText, globalSettings.chatGptApiKey);
      const questionAudioUrl = URL.createObjectURL(questionAudioBlob);
      setTutorQuestionAudio(questionAudioUrl);
      
      // Play question automatically
      playAudio('question', questionAudioBlob);
      
      setTutorState('waiting');
    } catch (error) {
      console.error('Error asking question:', error);
      toast.error(error.message || (language === 'en' ? 'Failed to generate question' : 'Frage konnte nicht generiert werden'));
      setIsProcessing(false);
    } finally {
      setIsProcessing(false);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setAudioBlob(blob);
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);

      recordingIntervalRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

    } catch (error) {
      console.error('Error starting recording:', error);
      toast.error(language === 'en' 
        ? 'Could not access microphone. Please check permissions.' 
        : 'Mikrofon konnte nicht zugegriffen werden. Bitte Berechtigungen prüfen.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
    if (recordingIntervalRef.current) {
      clearInterval(recordingIntervalRef.current);
    }
  };

  const handleSendAnswer = async () => {
    if (!audioBlob || !globalSettings.chatGptApiKey) {
      if (!globalSettings.chatGptApiKey) {
        checkApiKey();
      }
      return;
    }

    setIsProcessing(true);
    setTutorState('feedback');

    try {
      const currentCard = dueCards[currentIndex];
      
      // Transcribe user's answer (let Whisper auto-detect language to support both English and German)
      const transcription = await transcribeAudio(audioBlob, globalSettings.chatGptApiKey, null);
      setUserAnswer(transcription);

      // Get AI tutor feedback
      const isFirstQuestion = currentIndex === 0;
      const feedback = await generateVocabularyTutorResponse(
        currentCard, 
        transcription, 
        isFirstQuestion, 
        globalSettings.chatGptApiKey, 
        language
      );
      
      setTutorFeedbackText(feedback.feedbackText);
      setIsAnswerCorrect(feedback.isCorrect);

      // Generate AI voice for feedback
      const feedbackAudioBlob = await generateVoiceResponse(feedback.feedbackText, globalSettings.chatGptApiKey);
      const feedbackAudioUrl = URL.createObjectURL(feedbackAudioBlob);
      setTutorFeedbackAudio(feedbackAudioUrl);
      
      // Play feedback automatically
      playAudio('feedback', feedbackAudioBlob);
      
      if (feedback.isCorrect) {
        sounds.playCorrect();
      } else {
        sounds.playWrong();
      }

      setTutorState('rating');
    } catch (error) {
      console.error('Error processing answer:', error);
      toast.error(error.message || (language === 'en' ? 'Failed to process answer' : 'Antwort konnte nicht verarbeitet werden'));
      setTutorState('waiting');
    } finally {
      setIsProcessing(false);
    }
  };

  const playAudio = (audioId, audioBlob) => {
    // Stop any currently playing audio
    Object.values(audioRefs.current).forEach(audio => {
      if (audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    if (playingAudioId === audioId) {
      setPlayingAudioId(null);
      return;
    }

    const audio = new Audio();
    const url = audioBlob instanceof Blob ? URL.createObjectURL(audioBlob) : audioBlob;
    audio.src = url;
    
    audioRefs.current[audioId] = audio;
    setPlayingAudioId(audioId);

    audio.onended = () => {
      setPlayingAudioId(null);
      if (audioBlob instanceof Blob) {
        URL.revokeObjectURL(url);
      }
    };

    audio.onerror = () => {
      setPlayingAudioId(null);
      if (audioBlob instanceof Blob) {
        URL.revokeObjectURL(url);
      }
      toast.error(language === 'en' ? 'Error playing audio' : 'Fehler beim Abspielen');
    };

    audio.play();
  };

  const handleRating = (rating) => {
    const currentCard = dueCards[currentIndex];
    const updatedCard = calculateNextReview(currentCard, rating);
    
    // Update locally
    const cardIndex = allCards.findIndex(c => c === currentCard);
    updateCardLocally(deck.id, cardIndex, updatedCard);
    updatePendingCount();
    
    // Update session stats
    const newStats = { ...sessionStats, total: sessionStats.total + 1 };
    switch (rating) {
      case RATING.AGAIN:
        newStats.again++;
        break;
      case RATING.HARD:
        newStats.hard++;
        break;
      case RATING.GOOD:
        newStats.good++;
        break;
      case RATING.EASY:
        newStats.easy++;
        break;
    }
    setSessionStats(newStats);
    
    // Move to next card
    if (currentIndex < dueCards.length - 1) {
      setTimeout(() => {
        sounds.playWhoosh();
        setCurrentIndex(currentIndex + 1);
        setTutorState('question');
        setTutorQuestionAudio(null);
        setTutorFeedbackAudio(null);
        setTutorFeedbackText('');
        setUserAnswer('');
        setAudioBlob(null);
        setShowAnswerManually(false);
        if (audioUrl) {
          URL.revokeObjectURL(audioUrl);
          setAudioUrl(null);
        }
      }, 500);
    } else {
      // Session complete
      sounds.playLevelUp();
      sounds.playCelebration();
      setSessionComplete(true);
    }
  };

  const handleSkip = () => {
    if (currentIndex < dueCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
        setTutorState('question');
        setTutorQuestionAudio(null);
        setTutorFeedbackAudio(null);
        setTutorFeedbackText('');
        setUserAnswer('');
        setAudioBlob(null);
        setShowAnswerManually(false);
        if (audioUrl) {
          URL.revokeObjectURL(audioUrl);
          setAudioUrl(null);
        }
        if (isRecording) {
          stopRecording();
        }
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setTutorState('question');
      setTutorQuestionAudio(null);
      setTutorFeedbackAudio(null);
      setTutorFeedbackText('');
      setUserAnswer('');
      setAudioBlob(null);
      setShowAnswerManually(false);
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
        setAudioUrl(null);
      }
      if (isRecording) {
        stopRecording();
      }
    }
  };

  const handleShowAnswerManually = () => {
    setShowAnswerManually(true);
    setTutorState('rating');
    sounds.playWhoosh();
  };

  const handleSaveCard = async (cardData) => {
    try {
      const currentCard = dueCards[currentIndex];
      const cardIndex = allCards.findIndex(c => c === currentCard);
      
      // Update card locally
      const updatedCard = { ...currentCard, ...cardData };
      updateCardLocally(deck.id, cardIndex, updatedCard);
      
      // Reload cards to reflect changes
      await loadCards();
      updatePendingCount();
      
      setEditingCard(null);
      toast.success(language === 'en' ? 'Card updated!' : 'Karte aktualisiert!');
    } catch (error) {
      console.error('Error saving card:', error);
      toast.error(language === 'en' ? 'Failed to update card' : 'Karte konnte nicht aktualisiert werden');
    }
  };

  const handleDeleteCard = async (cardToDelete) => {
    try {
      const cardIndex = allCards.findIndex(c => c === cardToDelete);
      
      if (cardIndex === -1) {
        toast.error(language === 'en' ? 'Card not found' : 'Karte nicht gefunden');
        return;
      }
      
      // Delete card locally
      const success = deleteCardLocally(deck.id, cardIndex);
      
      if (success) {
        // Reload cards to reflect changes
        await loadCards();
        updatePendingCount();
        
        // If we deleted the current card, move to next or previous
        const deletedCardIndex = dueCards.findIndex(c => c === cardToDelete);
        if (deletedCardIndex !== -1) {
          if (deletedCardIndex < dueCards.length - 1) {
            // Move to next card
            setCurrentIndex(deletedCardIndex);
          } else if (deletedCardIndex > 0) {
            // Move to previous card
            setCurrentIndex(deletedCardIndex - 1);
          } else {
            // No more cards
            setSessionComplete(true);
          }
        }
        
        setEditingCard(null);
        toast.success(language === 'en' ? 'Card deleted!' : 'Karte gelöscht!', { icon: '🗑️' });
      } else {
        toast.error(language === 'en' ? 'Failed to delete card' : 'Karte konnte nicht gelöscht werden');
      }
    } catch (error) {
      console.error('Error deleting card:', error);
      toast.error(language === 'en' ? 'Failed to delete card' : 'Karte konnte nicht gelöscht werden');
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleSound = () => {
    const newState = !soundsEnabled;
    setSoundsEnabled(newState);
    sounds.saveSoundSettings(newState);
    sounds.playButtonClick();
  };

  const handleSync = async (forceRefresh = false) => {
    setSyncing(true);
    try {
      const pending = getPendingChanges(deck.id);
      const hasPending = pending.adds.length > 0 || pending.updates.length > 0 || pending.deletes.length > 0;
      
      if (!hasPending || forceRefresh) {
        // No pending changes - just refresh from Google Sheets
        await loadCards(true);
        updatePendingCount();
        toast.success(
          language === 'en' ? 'Cards refreshed from Google Sheets!' : 'Karten von Google Sheets aktualisiert!',
          { icon: '✅' }
        );
        return;
      }
      
      // Has pending changes - upload to Google Sheets
      let errors = [];
      
      // Process deletes first (in reverse order to maintain indices)
      for (const index of pending.deletes.sort((a, b) => b - a)) {
        try {
          await deleteCardFromSheet(deck.scriptUrl, index);
        } catch (e) {
          errors.push(`Delete at index ${index}: ${e.message}`);
        }
      }
      
      // Process updates (including review progress)
      for (const { index, card } of pending.updates) {
        try {
          await updateCardInSheet(deck.scriptUrl, index, card);
        } catch (e) {
          errors.push(`Update at index ${index}: ${e.message}`);
        }
      }
      
      // Process adds
      for (const card of pending.adds) {
        try {
          const { _tempId, ...cardWithoutTemp } = card;
          await addCardToSheet(deck.scriptUrl, cardWithoutTemp);
        } catch (e) {
          errors.push(`Add card "${card.word}": ${e.message}`);
        }
      }
      
      if (errors.length > 0) {
        console.error('Sync errors:', errors);
        toast.error(
          language === 'en' ? `${errors.length} changes failed to sync` : `${errors.length} Änderungen konnten nicht synchronisiert werden`,
          { duration: 5000 }
        );
      } else {
        // Clear pending changes and reload
        clearPendingChanges(deck.id);
        await loadCards(true);
        updatePendingCount();
        toast.success(
          language === 'en' ? 'All changes synced successfully!' : 'Alle Änderungen erfolgreich synchronisiert!',
          { icon: '🎉' }
        );
      }
    } catch (error) {
      console.error('Sync error:', error);
      toast.error(language === 'en' ? 'Sync failed' : 'Synchronisierung fehlgeschlagen');
    } finally {
      setSyncing(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-64">
          <Loader className="animate-spin text-rose-500" size={48} />
        </div>
      </div>
    );
  }

  if (sessionComplete) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            {language === 'en' ? '🎉 Session Complete!' : '🎉 Session abgeschlossen!'}
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-6">
            {language === 'en' 
              ? `You reviewed ${sessionStats.total} cards!`
              : `Du hast ${sessionStats.total} Karten wiederholt!`}
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={onBack}
              className="bg-rose-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-rose-600 transition-all flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              {language === 'en' ? 'Back to Decks' : 'Zurück zu Decks'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentCard = dueCards[currentIndex];
  if (!currentCard) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 shadow-lg text-center">
          <p className="text-stone-600 dark:text-stone-400">
            {language === 'en' ? 'No cards due for review' : 'Keine Karten zum Wiederholen'}
          </p>
          <button
            onClick={onBack}
            className="mt-4 bg-rose-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-rose-600 transition-all flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={20} />
            {language === 'en' ? 'Back to Decks' : 'Zurück zu Decks'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          {language === 'en' ? 'Back' : 'Zurück'}
        </button>
        
        <div className="flex items-center gap-4">
          <button
            onClick={() => setEditingCard(currentCard)}
            className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-700 transition-all"
            title={language === 'en' ? 'Edit card' : 'Karte bearbeiten'}
          >
            <Edit size={20} />
          </button>
          <button
            onClick={() => handleSync(false)}
            disabled={syncing}
            className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-700 transition-all relative"
            title={language === 'en' ? 'Sync changes' : 'Änderungen synchronisieren'}
          >
            {syncing ? (
              <Loader size={20} className="animate-spin" />
            ) : (
              <Upload size={20} />
            )}
            {pendingCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {pendingCount}
              </span>
            )}
          </button>
          <button
            onClick={toggleSound}
            className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-700 transition-all"
          >
            {soundsEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
          <div className="text-sm text-stone-600 dark:text-stone-400">
            {currentIndex + 1} / {dueCards.length}
          </div>
        </div>
      </div>

      {/* Card Display */}
      <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 shadow-lg mb-6">
        {/* Word */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            {currentCard.word}
          </h2>
        </div>

        {/* Tutor Question Audio */}
        {tutorState === 'question' && tutorQuestionAudio && (
          <div className="mb-4 flex items-center justify-center gap-3">
            <button
              onClick={() => playAudio('question', tutorQuestionAudio)}
              className="p-3 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-all"
            >
              {playingAudioId === 'question' ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <span className="text-stone-600 dark:text-stone-400">
              {language === 'en' ? 'Listen to the question' : 'Höre dir die Frage an'}
            </span>
          </div>
        )}

        {/* Waiting for Answer */}
        {tutorState === 'waiting' && (
          <div className="text-center mb-6">
            <p className="text-lg text-stone-600 dark:text-stone-400 mb-4">
              {language === 'en' ? 'Record your answer' : 'Nimm deine Antwort auf'}
            </p>
            
            {/* Manual Reveal Button */}
            <div className="mb-4">
              <button
                onClick={handleShowAnswerManually}
                className="px-4 py-2 bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-lg hover:bg-stone-300 dark:hover:bg-stone-600 transition-all flex items-center gap-2 mx-auto"
              >
                <Eye size={18} />
                {language === 'en' ? 'Show Answer' : 'Antwort anzeigen'}
              </button>
            </div>
            
            {audioBlob ? (
              <div className="flex items-center justify-center gap-4 mb-4">
                <button
                  onClick={() => playAudio('preview', audioBlob)}
                  className="p-3 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-all"
                >
                  {playingAudioId === 'preview' ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <span className="text-sm text-stone-600 dark:text-stone-400">
                  {formatTime(recordingTime)}
                </span>
                <button
                  onClick={() => {
                    setAudioBlob(null);
                    if (audioUrl) {
                      URL.revokeObjectURL(audioUrl);
                      setAudioUrl(null);
                    }
                  }}
                  className="p-2 text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
                >
                  <X size={20} />
                </button>
                <button
                  onClick={handleSendAnswer}
                  disabled={isProcessing}
                  className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all disabled:opacity-50"
                >
                  {isProcessing ? <Loader size={20} className="animate-spin" /> : <Check size={20} />}
                </button>
              </div>
            ) : (
              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`p-6 rounded-full ${
                  isRecording
                    ? 'bg-red-500 text-white hover:bg-red-600 animate-pulse'
                    : 'bg-rose-500 text-white hover:bg-rose-600'
                } transition-all shadow-lg mb-4`}
              >
                {isRecording ? <MicOff size={32} /> : <Mic size={32} />}
              </button>
            )}
            
            {isRecording && (
              <p className="text-stone-600 dark:text-stone-400">
                {formatTime(recordingTime)} - {language === 'en' ? 'Recording...' : 'Aufnahme läuft...'}
              </p>
            )}
          </div>
        )}

        {/* Feedback */}
        {tutorState === 'feedback' && isProcessing && (
          <div className="text-center mb-6">
            <Loader className="animate-spin text-rose-500 mx-auto mb-4" size={32} />
            <p className="text-stone-600 dark:text-stone-400">
              {language === 'en' ? 'Processing your answer...' : 'Verarbeite deine Antwort...'}
            </p>
          </div>
        )}

        {tutorState === 'rating' && (tutorFeedbackText || showAnswerManually) && (
          <div className="mb-6">
            {/* User Answer */}
            {userAnswer && (
              <div className="mb-4 p-4 bg-stone-100 dark:bg-stone-700 rounded-lg">
                <p className="text-sm text-stone-500 dark:text-stone-400 mb-1">
                  {language === 'en' ? 'Your answer:' : 'Deine Antwort:'}
                </p>
                <p className="text-stone-800 dark:text-stone-200">{userAnswer}</p>
              </div>
            )}

            {/* Tutor Feedback */}
            {tutorFeedbackText && (
              <div className={`p-4 rounded-lg mb-4 ${
                isAnswerCorrect 
                  ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700'
                  : 'bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-300 dark:border-amber-700'
              }`}>
                <div className="flex items-start gap-3 mb-2">
                  <button
                    onClick={() => playAudio('feedback', tutorFeedbackAudio)}
                    className="p-2 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-all flex-shrink-0"
                  >
                    {playingAudioId === 'feedback' ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1">
                      {language === 'en' ? 'Tutor Feedback:' : 'Tutor Feedback:'}
                    </p>
                    <p className="text-stone-800 dark:text-stone-200">{tutorFeedbackText}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Translation */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-4">
              <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">
                {language === 'en' ? 'Translation:' : 'Übersetzung:'}
              </p>
              <p className="text-blue-900 dark:text-blue-200 text-lg">{currentCard.translation}</p>
            </div>

            {/* Image - shown on the back of the card */}
            {currentCard.image_url && (
              <div className="mb-4 flex justify-center">
                <img 
                  src={currentCard.image_url} 
                  alt={currentCard.word}
                  className="max-w-full max-h-64 rounded-lg shadow-md"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}

            {/* Explanation */}
            {currentCard.explanation && (
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg mb-4">
                <p className="text-sm font-semibold text-purple-800 dark:text-purple-300 mb-1">
                  {language === 'en' ? 'Explanation:' : 'Erklärung:'}
                </p>
                <div className="text-purple-900 dark:text-purple-200">
                  <ReactMarkdown>{currentCard.explanation}</ReactMarkdown>
                </div>
              </div>
            )}

            {/* Rating Buttons */}
            <div className="flex flex-wrap gap-3 justify-center mb-4">
              <button
                onClick={() => handleRating(RATING.AGAIN)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all flex items-center gap-2"
              >
                <X size={18} />
                {language === 'en' ? 'Again' : 'Nochmal'}
              </button>
              <button
                onClick={() => handleRating(RATING.HARD)}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all flex items-center gap-2"
              >
                <Star size={18} />
                {language === 'en' ? 'Hard' : 'Schwer'}
              </button>
              <button
                onClick={() => handleRating(RATING.GOOD)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all flex items-center gap-2"
              >
                <Check size={18} />
                {language === 'en' ? 'Good' : 'Gut'}
              </button>
              <button
                onClick={() => handleRating(RATING.EASY)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all flex items-center gap-2"
              >
                <Star size={18} />
                {language === 'en' ? 'Easy' : 'Einfach'}
              </button>
            </div>

            {/* Continue Button */}
            <div className="text-center">
              <button
                onClick={() => {
                  // Auto-select "Good" rating and continue
                  handleRating(RATING.GOOD);
                }}
                className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-bold hover:from-rose-600 hover:to-pink-600 transition-all flex items-center gap-2 mx-auto"
              >
                {language === 'en' ? 'Continue' : 'Fahre fort'}
                <SkipForward size={20} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleBack}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-lg hover:bg-stone-300 dark:hover:bg-stone-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <ChevronLeft size={20} />
          {language === 'en' ? 'Back' : 'Zurück'}
        </button>

        <button
          onClick={handleSkip}
          disabled={currentIndex >= dueCards.length - 1}
          className="px-4 py-2 bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-lg hover:bg-stone-300 dark:hover:bg-stone-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {language === 'en' ? 'Skip' : 'Überspringen'}
          <SkipForward size={20} />
        </button>
      </div>

      {/* Card Edit Modal */}
      {editingCard && (
        <CardEditModal
          isOpen={!!editingCard}
          onClose={() => setEditingCard(null)}
          onSave={handleSaveCard}
          onDelete={handleDeleteCard}
          card={editingCard}
          deckId={deck.id}
        />
      )}
    </div>
  );
}

export default AITutorMode;

