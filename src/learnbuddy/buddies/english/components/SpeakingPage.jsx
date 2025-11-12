import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Mic, MicOff, Play, Pause, Loader, RefreshCw, FileText, Trash2, Sparkles, X, CheckCircle, AlertCircle, Eye, EyeOff, Send } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { useSettings } from '../../../context/SettingsContext';
import { speakingTopics, getRandomSpeakingTopic, getSpeakingTopicById, getAllSpeakingCategories } from '../data/speakingTopics';
import { 
  getAllConversations, 
  saveConversation, 
  updateConversation, 
  deleteConversation,
  addMessageToConversation,
  updateMessageInConversation
} from '../utils/speakingStorage';
import { 
  analyzeSpokenEnglish, 
  generateVoiceResponse, 
  generateConversationalResponse,
  transcribeAudio
} from '../../../utils/chatgpt';
import toast from 'react-hot-toast';

function SpeakingPage() {
  const { language } = useLanguage();
  const { globalSettings } = useSettings();
  const [view, setView] = useState('select'); // 'select', 'chat', 'saved'
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [savedConversations, setSavedConversations] = useState([]);
  
  // Recording state
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const recordingIntervalRef = useRef(null);
  
  // Playback state
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const audioRefs = useRef({});
  
  // Analysis state
  const [analyzingMessageId, setAnalyzingMessageId] = useState(null);
  const [showAnalysis, setShowAnalysis] = useState({});

  useEffect(() => {
    loadSavedConversations();
  }, []);

  // Auto-show analysis if it exists when conversation loads
  useEffect(() => {
    if (currentConversation && currentConversation.messages) {
      const analysisStates = {};
      currentConversation.messages.forEach(msg => {
        if (msg.role === 'user' && msg.analysis) {
          analysisStates[msg.id] = true; // Auto-show if analysis exists
        }
      });
      setShowAnalysis(prev => ({ ...prev, ...analysisStates }));
    }
  }, [currentConversation]);

  useEffect(() => {
    return () => {
      // Cleanup: stop recording and clear intervals
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current);
      }
      // Cleanup audio URLs
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  const loadSavedConversations = () => {
    const conversations = getAllConversations();
    setSavedConversations(conversations.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)));
  };

  const handleRandomTopic = () => {
    const topic = getRandomSpeakingTopic();
    setSelectedTopic(topic);
    startNewConversation(topic);
  };

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
    startNewConversation(topic);
  };

  const startNewConversation = (topic) => {
    const conversation = saveConversation({
      topicId: topic.id,
      topicTitle: topic.title[language] || topic.title.en,
      topicCategory: topic.category,
      messages: []
    });
    setCurrentConversation(conversation);
    setView('chat');
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

      // Start timer
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

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSendMessage = async () => {
    if (!audioBlob || !currentConversation) return;

    if (!globalSettings.chatGptApiKey) {
      toast.error(language === 'en' 
        ? 'Please configure your ChatGPT API key in settings!' 
        : 'Bitte konfiguriere deinen ChatGPT API Key in den Einstellungen!');
      return;
    }

    const loadingToast = toast.loading(language === 'en' ? 'Processing...' : 'Verarbeite...');

    try {
      // Transcribe audio
      const transcription = await transcribeAudio(audioBlob, globalSettings.chatGptApiKey);
      
      // Save user message
      const userMessage = {
        role: 'user',
        transcription: transcription,
        audioBlob: await blobToBase64(audioBlob),
        timestamp: new Date().toISOString()
      };
      
      const savedUserMessage = addMessageToConversation(currentConversation.id, userMessage);
      
      // Generate AI response
      const topicContext = selectedTopic.situation[language] || selectedTopic.situation.en;
      const conversationHistory = (currentConversation.messages || []).map(msg => ({
        role: msg.role,
        text: msg.text || msg.transcription
      }));
      
      const aiResponseText = await generateConversationalResponse(
        transcription, 
        topicContext, 
        conversationHistory,
        globalSettings.chatGptApiKey
      );
      
      // Generate AI voice response
      const aiAudioBlob = await generateVoiceResponse(aiResponseText, globalSettings.chatGptApiKey);
      const aiAudioBase64 = await blobToBase64(aiAudioBlob);
      
      // Save AI message
      const aiMessage = {
        role: 'assistant',
        text: aiResponseText,
        audioBlob: aiAudioBase64,
        timestamp: new Date().toISOString()
      };
      
      addMessageToConversation(currentConversation.id, aiMessage);
      
      // Update conversation state
      const updatedConv = getAllConversations().find(c => c.id === currentConversation.id);
      setCurrentConversation(updatedConv);
      
      // Clear recording
      setAudioBlob(null);
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
        setAudioUrl(null);
      }
      
      toast.success(language === 'en' ? 'Message sent!' : 'Nachricht gesendet!', { id: loadingToast });
      
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error(error.message || (language === 'en' ? 'Failed to send message' : 'Nachricht konnte nicht gesendet werden'), { id: loadingToast });
    }
  };

  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const base64ToBlob = (base64) => {
    const byteCharacters = atob(base64.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: 'audio/webm' });
  };

  const playAudio = (messageId, audioBase64) => {
    // Stop any currently playing audio
    Object.values(audioRefs.current).forEach(audio => {
      if (audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    if (playingAudioId === messageId) {
      setPlayingAudioId(null);
      return;
    }

    const audio = new Audio();
    const blob = base64ToBlob(audioBase64);
    const url = URL.createObjectURL(blob);
    audio.src = url;
    
    audioRefs.current[messageId] = audio;
    setPlayingAudioId(messageId);

    audio.onended = () => {
      setPlayingAudioId(null);
      URL.revokeObjectURL(url);
    };

    audio.onerror = () => {
      setPlayingAudioId(null);
      URL.revokeObjectURL(url);
      toast.error(language === 'en' ? 'Error playing audio' : 'Fehler beim Abspielen');
    };

    audio.play();
  };

  const handleAnalyzeMessage = async (messageId, audioBase64, forceReanalyze = false) => {
    if (!globalSettings.chatGptApiKey) {
      toast.error(language === 'en' 
        ? 'Please configure your ChatGPT API key in settings!' 
        : 'Bitte konfiguriere deinen ChatGPT API Key in den Einstellungen!');
      return;
    }

    setAnalyzingMessageId(messageId);
    const loadingToast = toast.loading(language === 'en' ? 'Analyzing...' : 'Analysiere...');

    try {
      const audioBlob = base64ToBlob(audioBase64);
      const analysis = await analyzeSpokenEnglish(audioBlob, globalSettings.chatGptApiKey);
      
      // Save analysis to message
      updateMessageInConversation(currentConversation.id, messageId, { analysis });
      
      // Update conversation state
      const updatedConv = getAllConversations().find(c => c.id === currentConversation.id);
      setCurrentConversation(updatedConv);
      
      setShowAnalysis(prev => ({ ...prev, [messageId]: true }));
      toast.success(language === 'en' ? 'Analysis complete!' : 'Analyse abgeschlossen!', { id: loadingToast });
      
    } catch (error) {
      console.error('Error analyzing message:', error);
      toast.error(error.message || (language === 'en' ? 'Failed to analyze' : 'Analyse fehlgeschlagen'), { id: loadingToast });
    } finally {
      setAnalyzingMessageId(null);
    }
  };

  const handleLoadConversation = (conversation) => {
    const topic = getSpeakingTopicById(conversation.topicId);
    if (topic) {
      setSelectedTopic(topic);
    }
    setCurrentConversation(conversation);
    setView('chat');
  };

  const handleDeleteConversation = (conversationId) => {
    if (window.confirm(language === 'en' ? 'Delete this conversation?' : 'Diese Unterhaltung löschen?')) {
      deleteConversation(conversationId);
      loadSavedConversations();
      if (currentConversation && currentConversation.id === conversationId) {
        setView('select');
        setCurrentConversation(null);
        setSelectedTopic(null);
      }
      toast.success(language === 'en' ? 'Conversation deleted!' : 'Unterhaltung gelöscht!');
    }
  };

  const getCategoryName = (category) => {
    const names = {
      restaurant: { en: 'Restaurant', de: 'Restaurant' },
      cinema: { en: 'Cinema', de: 'Kino' },
      date: { en: 'Date', de: 'Date' },
      friends: { en: 'Friends', de: 'Freunde' },
      job: { en: 'Job', de: 'Beruf' },
      airport: { en: 'Airport', de: 'Flughafen' },
      transport: { en: 'Transport', de: 'Transport' },
      social: { en: 'Social', de: 'Sozial' },
      shopping: { en: 'Shopping', de: 'Einkaufen' },
      travel: { en: 'Travel', de: 'Reisen' },
      health: { en: 'Health', de: 'Gesundheit' }
    };
    return names[category]?.[language] || category;
  };

  if (view === 'select') {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle size={48} className="text-rose-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              {language === 'en' ? 'Speaking Practice' : 'Sprechpraxis'}
            </h1>
          </div>
          <p className="text-xl text-stone-600 dark:text-stone-400 mb-6">
            {language === 'en' 
              ? 'Practice speaking English in real-life situations!'
              : 'Übe Englisch sprechen in realen Situationen!'}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={handleRandomTopic}
              className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-3"
            >
              <RefreshCw size={24} />
              {language === 'en' ? '🎲 Random Topic' : '🎲 Zufälliges Thema'}
            </button>
            
            <button
              onClick={() => setView('saved')}
              className="bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 px-6 py-4 rounded-xl font-bold text-lg hover:bg-stone-300 dark:hover:bg-stone-600 transition-all flex items-center gap-3 shadow-lg"
            >
              <FileText size={24} />
              {language === 'en' ? 'Saved Conversations' : 'Gespeicherte Unterhaltungen'}
              {savedConversations.length > 0 && (
                <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm">
                  {savedConversations.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Topics by Category */}
        <div className="space-y-8">
          {Object.entries(
            speakingTopics.reduce((acc, topic) => {
              if (!acc[topic.category]) acc[topic.category] = [];
              acc[topic.category].push(topic);
              return acc;
            }, {})
          ).map(([category, topics]) => (
            <div key={category} className="bg-white dark:bg-stone-800 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
                {getCategoryName(category)}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {topics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleSelectTopic(topic)}
                    className="text-left p-4 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-xl hover:shadow-lg transition-all border border-rose-200 dark:border-rose-800"
                  >
                    <h3 className="font-bold text-lg text-stone-800 dark:text-stone-100 mb-2">
                      {topic.title[language] || topic.title.en}
                    </h3>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      {topic.situation[language] || topic.situation.en}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (view === 'chat') {
    const messages = currentConversation?.messages || [];
    
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 h-[calc(100vh-200px)] flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => {
              setView('select');
              setCurrentConversation(null);
              setSelectedTopic(null);
              setAudioBlob(null);
              if (audioUrl) {
                URL.revokeObjectURL(audioUrl);
                setAudioUrl(null);
              }
            }}
            className="text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 mb-4 flex items-center gap-2"
          >
            ← {language === 'en' ? 'Back to Topics' : 'Zurück zu Themen'}
          </button>
          
          {selectedTopic && (
            <div className="bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 rounded-xl p-4 border border-rose-200 dark:border-rose-800">
              <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">
                {selectedTopic.title[language] || selectedTopic.title.en}
              </h2>
              <p className="text-sm text-stone-700 dark:text-stone-300">
                {selectedTopic.situation[language] || selectedTopic.situation.en}
              </p>
            </div>
          )}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.length === 0 ? (
            <div className="text-center py-12 text-stone-500 dark:text-stone-400">
              {language === 'en' 
                ? 'Start the conversation by recording a message!' 
                : 'Beginne die Unterhaltung, indem du eine Nachricht aufnimmst!'}
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    message.role === 'user'
                      ? 'bg-rose-500 text-white'
                      : 'bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200'
                  }`}
                >
                  {/* Audio Player */}
                  {message.audioBlob && (
                    <div className="flex items-center gap-3 mb-2">
                      <button
                        onClick={() => playAudio(message.id, message.audioBlob)}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all"
                      >
                        {playingAudioId === message.id ? (
                          <Pause size={16} />
                        ) : (
                          <Play size={16} />
                        )}
                      </button>
                      <span className="text-xs opacity-75">
                        {language === 'en' ? 'Voice message' : 'Sprachnachricht'}
                      </span>
                    </div>
                  )}

                  {/* Transcription/Text */}
                  {(message.transcription || message.text) && (
                    <p className="mb-2">
                      {message.transcription || message.text}
                    </p>
                  )}

                  {/* Analysis Button (only for user messages) */}
                  {message.role === 'user' && message.audioBlob && (
                    <div className="mt-2 pt-2 border-t border-white/20 flex items-center gap-3">
                      {message.analysis ? (
                        <>
                          <button
                            onClick={() => setShowAnalysis(prev => ({ 
                              ...prev, 
                              [message.id]: !prev[message.id] 
                            }))}
                            className="text-xs flex items-center gap-1 opacity-75 hover:opacity-100"
                          >
                            {showAnalysis[message.id] ? <EyeOff size={14} /> : <Eye size={14} />}
                            {showAnalysis[message.id] 
                              ? (language === 'en' ? 'Hide Analysis' : 'Analyse ausblenden')
                              : (language === 'en' ? 'Show Analysis' : 'Analyse anzeigen')}
                          </button>
                          <button
                            onClick={() => handleAnalyzeMessage(message.id, message.audioBlob, true)}
                            disabled={analyzingMessageId === message.id}
                            className="text-xs flex items-center gap-1 opacity-75 hover:opacity-100 disabled:opacity-50"
                          >
                            {analyzingMessageId === message.id ? (
                              <>
                                <Loader size={14} className="animate-spin" />
                                {language === 'en' ? 'Re-analyzing...' : 'Neu analysiere...'}
                              </>
                            ) : (
                              <>
                                <RefreshCw size={14} />
                                {language === 'en' ? 'Re-analyze' : 'Neu analysieren'}
                              </>
                            )}
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => handleAnalyzeMessage(message.id, message.audioBlob)}
                          disabled={analyzingMessageId === message.id}
                          className="text-xs flex items-center gap-1 opacity-75 hover:opacity-100 disabled:opacity-50"
                        >
                          {analyzingMessageId === message.id ? (
                            <>
                              <Loader size={14} className="animate-spin" />
                              {language === 'en' ? 'Analyzing...' : 'Analysiere...'}
                            </>
                          ) : (
                            <>
                              <Sparkles size={14} />
                              {language === 'en' ? 'Analyze' : 'Analysieren'}
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  )}

                  {/* Analysis Results */}
                  {message.analysis && showAnalysis[message.id] && (
                    <div className="mt-3 pt-3 border-t border-white/20 space-y-2 text-xs">
                      {message.analysis.grammarCorrections && (
                        <div className="bg-amber-500/20 rounded p-2">
                          <div className="font-semibold mb-1 flex items-center gap-1">
                            <AlertCircle size={12} />
                            {language === 'en' ? 'Grammar & Vocabulary:' : 'Grammatik & Vokabular:'}
                          </div>
                          <p className="opacity-90 whitespace-pre-wrap">
                            {message.analysis.grammarCorrections}
                          </p>
                        </div>
                      )}
                      {message.analysis.pronunciationTips && (
                        <div className="bg-blue-500/20 rounded p-2">
                          <div className="font-semibold mb-1 flex items-center gap-1">
                            <Mic size={12} />
                            {language === 'en' ? 'Pronunciation Tips:' : 'Aussprache-Tipps:'}
                          </div>
                          <p className="opacity-90 whitespace-pre-wrap">
                            {message.analysis.pronunciationTips}
                          </p>
                        </div>
                      )}
                      {message.analysis.fluencySuggestions && (
                        <div className="bg-purple-500/20 rounded p-2">
                          <div className="font-semibold mb-1 flex items-center gap-1">
                            <Sparkles size={12} />
                            {language === 'en' ? 'Fluency Suggestions:' : 'Flüssigkeits-Vorschläge:'}
                          </div>
                          <p className="opacity-90 whitespace-pre-wrap">
                            {message.analysis.fluencySuggestions}
                          </p>
                        </div>
                      )}
                      {message.analysis.improvedVersion && (
                        <div className="bg-green-500/20 rounded p-2">
                          <div className="font-semibold mb-1 flex items-center gap-1">
                            <CheckCircle size={12} />
                            {language === 'en' ? 'Improved Version:' : 'Verbesserte Version:'}
                          </div>
                          <p className="opacity-90 whitespace-pre-wrap">
                            {message.analysis.improvedVersion}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Timestamp */}
                  <div className="text-xs opacity-50 mt-2">
                    {new Date(message.timestamp).toLocaleTimeString(language === 'en' ? 'en-US' : 'de-DE', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Recording/Input Area */}
        <div className="bg-white dark:bg-stone-800 rounded-2xl p-4 shadow-lg border border-stone-200 dark:border-stone-700">
          {audioBlob ? (
            <div className="flex items-center gap-4">
              <div className="flex-1 flex items-center gap-3">
                <button
                  onClick={() => playAudio('preview', audioBlob)}
                  className="p-3 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-all"
                >
                  {playingAudioId === 'preview' ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <div className="flex-1">
                  <p className="text-sm text-stone-600 dark:text-stone-400">
                    {language === 'en' ? 'Recording ready' : 'Aufnahme bereit'}
                  </p>
                  <p className="text-xs text-stone-500 dark:text-stone-500">
                    {formatTime(recordingTime)}
                  </p>
                </div>
              </div>
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
                onClick={handleSendMessage}
                className="p-3 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-all"
              >
                <Send size={20} />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`p-4 rounded-full ${
                  isRecording
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-rose-500 text-white hover:bg-rose-600'
                } transition-all shadow-lg`}
              >
                {isRecording ? (
                  <MicOff size={24} />
                ) : (
                  <Mic size={24} />
                )}
              </button>
              <div className="flex-1">
                {isRecording ? (
                  <div>
                    <p className="text-lg font-semibold text-stone-800 dark:text-stone-200">
                      {formatTime(recordingTime)}
                    </p>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      {language === 'en' ? 'Recording...' : 'Aufnahme läuft...'}
                    </p>
                  </div>
                ) : (
                  <p className="text-stone-600 dark:text-stone-400">
                    {language === 'en' 
                      ? 'Hold to record a voice message' 
                      : 'Halten zum Aufnehmen einer Sprachnachricht'}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (view === 'saved') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <button
            onClick={() => setView('select')}
            className="text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 mb-4 flex items-center gap-2"
          >
            ← {language === 'en' ? 'Back to Topics' : 'Zurück zu Themen'}
          </button>
          
          <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-6">
            {language === 'en' ? 'Saved Conversations' : 'Gespeicherte Unterhaltungen'}
          </h2>
        </div>

        {savedConversations.length === 0 ? (
          <div className="bg-white dark:bg-stone-800 rounded-xl p-12 text-center shadow-lg">
            <FileText size={64} className="mx-auto mb-4 text-stone-400" />
            <p className="text-xl text-stone-600 dark:text-stone-400">
              {language === 'en' 
                ? 'No saved conversations yet. Start practicing!'
                : 'Noch keine gespeicherten Unterhaltungen. Fang an zu üben!'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {savedConversations.map((conversation) => (
              <div
                key={conversation.id}
                className="bg-white dark:bg-stone-800 rounded-xl p-6 shadow-lg border border-stone-200 dark:border-stone-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">
                      {conversation.topicTitle}
                    </h3>
                    <p className="text-sm text-stone-500 dark:text-stone-400">
                      {new Date(conversation.updatedAt).toLocaleDateString(language === 'en' ? 'en-US' : 'de-DE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                    <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                      {conversation.messages?.length || 0} {language === 'en' ? 'messages' : 'Nachrichten'}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleLoadConversation(conversation)}
                      className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition-all"
                    >
                      {language === 'en' ? 'Open' : 'Öffnen'}
                    </button>
                    <button
                      onClick={() => handleDeleteConversation(conversation.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
}

export default SpeakingPage;

