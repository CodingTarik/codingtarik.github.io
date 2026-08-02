import React, { useState, useEffect } from 'react';
import { Languages, Save, Sparkles, RefreshCw, BookOpen, X, CheckCircle, AlertCircle, Loader, FileText, Trash2, Eye, EyeOff, Lightbulb } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { useSettings } from '../../../context/SettingsContext';
import { writingTopics, getRandomTopic, getTopicById } from '../data/writingTopics';
import { getAllTexts, saveText, updateText, deleteText } from '../utils/writingStorage';
import { correctTextWithChatGPT, generateExampleText } from '../../../utils/chatgpt';
import toast from 'react-hot-toast';

function WritingPage() {
  const { language } = useLanguage();
  const { globalSettings } = useSettings();
  const [view, setView] = useState('select'); // 'select', 'write', 'saved'
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentText, setCurrentText] = useState('');
  const [savedTexts, setSavedTexts] = useState([]);
  const [currentTextId, setCurrentTextId] = useState(null);
  const [correction, setCorrection] = useState(null);
  const [isCorrecting, setIsCorrecting] = useState(false);
  const [showCorrection, setShowCorrection] = useState(false);
  const [exampleText, setExampleText] = useState(null);
  const [isGeneratingExample, setIsGeneratingExample] = useState(false);
  const [showExample, setShowExample] = useState(false);

  useEffect(() => {
    loadSavedTexts();
  }, []);

  const loadSavedTexts = () => {
    const texts = getAllTexts();
    setSavedTexts(texts.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)));
  };

  const handleRandomTopic = () => {
    const topic = getRandomTopic();
    setSelectedTopic(topic);
    setView('write');
    setCurrentText('');
    setCurrentTextId(null);
    setCorrection(null);
    setShowCorrection(false);
    setExampleText(null);
    setShowExample(false);
  };

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
    setView('write');
    setCurrentText('');
    setCurrentTextId(null);
    setCorrection(null);
    setShowCorrection(false);
    setExampleText(null);
    setShowExample(false);
  };

  const handleSave = () => {
    if (!currentText.trim()) {
      toast.error(language === 'en' ? 'Please write something first!' : 'Bitte schreibe zuerst etwas!');
      return;
    }

    if (!selectedTopic) {
      toast.error(language === 'en' ? 'Please select a topic first!' : 'Bitte wähle zuerst ein Thema!');
      return;
    }

    const textData = {
      topicId: selectedTopic.id,
      topicTitle: selectedTopic.title[language] || selectedTopic.title.en,
      text: currentText,
      correction: correction
    };

    if (currentTextId) {
      updateText(currentTextId, textData);
      toast.success(language === 'en' ? 'Text updated!' : 'Text aktualisiert!');
    } else {
      saveText(textData);
      toast.success(language === 'en' ? 'Text saved!' : 'Text gespeichert!');
    }

    loadSavedTexts();
  };

  const handleCorrect = async () => {
    if (!currentText.trim()) {
      toast.error(language === 'en' ? 'Please write something first!' : 'Bitte schreibe zuerst etwas!');
      return;
    }

    if (!globalSettings.chatGptApiKey) {
      toast.error(language === 'en' 
        ? 'Please configure your ChatGPT API key in settings!' 
        : 'Bitte konfiguriere deinen ChatGPT API Key in den Einstellungen!');
      return;
    }

    setIsCorrecting(true);
    try {
      const result = await correctTextWithChatGPT(currentText, globalSettings.chatGptApiKey);
      setCorrection(result);
      setShowCorrection(true);
      
      // Auto-save correction if text is already saved
      if (currentTextId) {
        updateText(currentTextId, { correction: result });
      }
      
      toast.success(language === 'en' ? 'Text corrected!' : 'Text korrigiert!');
    } catch (error) {
      toast.error(error.message || (language === 'en' ? 'Failed to correct text' : 'Text konnte nicht korrigiert werden'));
    } finally {
      setIsCorrecting(false);
    }
  };

  const handleGenerateExample = async () => {
    if (!selectedTopic) {
      toast.error(language === 'en' ? 'Please select a topic first!' : 'Bitte wähle zuerst ein Thema!');
      return;
    }

    if (!globalSettings.chatGptApiKey) {
      toast.error(language === 'en' 
        ? 'Please configure your ChatGPT API key in settings!' 
        : 'Bitte konfiguriere deinen ChatGPT API Key in den Einstellungen!');
      return;
    }

    setIsGeneratingExample(true);
    try {
      const example = await generateExampleText(selectedTopic, globalSettings.chatGptApiKey, language);
      setExampleText(example);
      setShowExample(true);
      toast.success(language === 'en' ? 'Example generated!' : 'Beispiel generiert!');
    } catch (error) {
      toast.error(error.message || (language === 'en' ? 'Failed to generate example' : 'Beispiel konnte nicht generiert werden'));
    } finally {
      setIsGeneratingExample(false);
    }
  };

  const handleLoadText = (text) => {
    const topic = getTopicById(text.topicId);
    setSelectedTopic(topic || { id: text.topicId, title: { en: text.topicTitle, de: text.topicTitle } });
    setCurrentText(text.text);
    setCurrentTextId(text.id);
    setCorrection(text.correction || null);
    setShowCorrection(false);
    setExampleText(null);
    setShowExample(false);
    setView('write');
  };

  const handleDeleteText = (textId) => {
    if (window.confirm(language === 'en' ? 'Delete this text?' : 'Diesen Text löschen?')) {
      deleteText(textId);
      loadSavedTexts();
      if (currentTextId === textId) {
        setView('select');
        setCurrentText('');
        setSelectedTopic(null);
        setCurrentTextId(null);
        setCorrection(null);
      }
      toast.success(language === 'en' ? 'Text deleted!' : 'Text gelöscht!');
    }
  };

  const getCategoryName = (category) => {
    const names = {
      horror: { en: 'Horror', de: 'Horror' },
      adventure: { en: 'Adventure', de: 'Abenteuer' },
      short_story: { en: 'Short Story', de: 'Kurzgeschichte' },
      job_application: { en: 'Job Application', de: 'Bewerbung' },
      resignation: { en: 'Resignation', de: 'Kündigung' },
      informative: { en: 'Informative', de: 'Informativ' },
      personal: { en: 'Personal', de: 'Persönlich' },
      opinion: { en: 'Opinion', de: 'Meinung' },
      business_email: { en: 'Business Email', de: 'Business Email' },
      review: { en: 'Review', de: 'Rezension' },
      descriptive: { en: 'Descriptive', de: 'Beschreibend' },
      complaint: { en: 'Complaint', de: 'Beschwerde' },
      report: { en: 'Report', de: 'Bericht' },
      scientific: { en: 'Scientific', de: 'Wissenschaftlich' },
      diary: { en: 'Diary', de: 'Tagebuch' },
      text_message: { en: 'Text Message', de: 'Textnachricht' },
      letter: { en: 'Letter', de: 'Brief' },
      blog: { en: 'Blog', de: 'Blog' },
      product_description: { en: 'Product Description', de: 'Produktbeschreibung' },
      professional: { en: 'Professional', de: 'Beruflich' },
      recipe: { en: 'Recipe', de: 'Rezept' },
      instructions: { en: 'Instructions', de: 'Anleitung' },
      invitation: { en: 'Invitation', de: 'Einladung' },
      thank_you: { en: 'Thank You', de: 'Dankeschön' },
      apology: { en: 'Apology', de: 'Entschuldigung' },
      congratulations: { en: 'Congratulations', de: 'Glückwunsch' }
    };
    return names[category]?.[language] || category;
  };

  if (view === 'select') {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Languages size={48} className="text-rose-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              {language === 'en' ? 'Writing Practice' : 'Schreibpraxis'}
            </h1>
          </div>
          <p className="text-xl text-stone-600 dark:text-stone-400 mb-6">
            {language === 'en' 
              ? 'Choose a topic and start writing!'
              : 'Wähle ein Thema und fange an zu schreiben!'}
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
              {language === 'en' ? 'Saved Texts' : 'Gespeicherte Texte'}
              {savedTexts.length > 0 && (
                <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm">
                  {savedTexts.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Topics by Category */}
        <div className="space-y-8">
          {Object.entries(
            writingTopics.reduce((acc, topic) => {
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
                      {language === 'en' ? 'Tense:' : 'Zeitform:'} {topic.tense}
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

  if (view === 'write') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => {
              setView('select');
              setSelectedTopic(null);
              setCurrentText('');
              setCurrentTextId(null);
              setCorrection(null);
              setShowCorrection(false);
              setExampleText(null);
              setShowExample(false);
            }}
            className="text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 mb-4 flex items-center gap-2"
          >
            ← {language === 'en' ? 'Back to Topics' : 'Zurück zu Themen'}
          </button>
          
          {selectedTopic && (
            <div className="bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 rounded-xl p-6 border border-rose-200 dark:border-rose-800">
              <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
                {selectedTopic.title[language] || selectedTopic.title.en}
              </h2>
              
              <div className="space-y-4 text-stone-700 dark:text-stone-300">
                <div>
                  <h3 className="font-semibold mb-2">
                    {language === 'en' ? '📝 Tense to Use:' : '📝 Zu verwendende Zeitform:'}
                  </h3>
                  <p className="text-sm">{selectedTopic.tense}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">
                    {language === 'en' ? '💡 Tips:' : '💡 Tipps:'}
                  </h3>
                  <p className="text-sm">{selectedTopic.tips[language] || selectedTopic.tips.en}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">
                    {language === 'en' ? '📚 Typical Sentences:' : '📚 Typische Sätze:'}
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {selectedTopic.typicalSentences.map((sentence, idx) => (
                      <li key={idx}>{sentence}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">
                    {language === 'en' ? '📖 Useful Vocabulary:' : '📖 Nützliche Vokabeln:'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTopic.vocabulary.map((word, idx) => (
                      <span
                        key={idx}
                        className="bg-white dark:bg-stone-700 px-3 py-1 rounded-lg text-sm border border-rose-200 dark:border-rose-800"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Writing Area */}
        <div className="bg-white dark:bg-stone-800 rounded-xl p-6 shadow-lg mb-6">
          <label className="block font-semibold text-stone-800 dark:text-stone-100 mb-3">
            {language === 'en' ? 'Your Text:' : 'Dein Text:'}
          </label>
          <textarea
            value={currentText}
            onChange={(e) => setCurrentText(e.target.value)}
            placeholder={language === 'en' 
              ? 'Start writing here...' 
              : 'Beginne hier zu schreiben...'}
            className="w-full h-64 px-4 py-3 rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
          />
          <div className="mt-2 text-sm text-stone-500 dark:text-stone-400">
            {currentText.length} {language === 'en' ? 'characters' : 'Zeichen'}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={handleSave}
            className="flex-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Save size={20} />
            {language === 'en' ? 'Save Text' : 'Text speichern'}
          </button>
          
          <button
            onClick={handleGenerateExample}
            disabled={isGeneratingExample || !selectedTopic}
            className="flex-1 bg-gradient-to-r from-purple-500 to-violet-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGeneratingExample ? (
              <>
                <Loader size={20} className="animate-spin" />
                {language === 'en' ? 'Generating...' : 'Generiere...'}
              </>
            ) : (
              <>
                <Lightbulb size={20} />
                {language === 'en' ? 'Generate Good Example' : 'Gutes Beispiel generieren'}
              </>
            )}
          </button>
          
          <button
            onClick={handleCorrect}
            disabled={isCorrecting || !currentText.trim()}
            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCorrecting ? (
              <>
                <Loader size={20} className="animate-spin" />
                {language === 'en' ? 'Correcting...' : 'Korrigiere...'}
              </>
            ) : (
              <>
                <Sparkles size={20} />
                {language === 'en' ? 'Correct Text' : 'Text korrigieren'}
              </>
            )}
          </button>
        </div>

        {/* Example Text */}
        {exampleText && (
          <div className="bg-white dark:bg-stone-800 rounded-xl p-6 shadow-lg mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 flex items-center gap-2">
                <Lightbulb className="text-purple-500" size={24} />
                {language === 'en' ? 'Example Text' : 'Beispieltext'}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleGenerateExample}
                  disabled={isGeneratingExample}
                  className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 text-sm font-semibold"
                  title={language === 'en' ? 'Generate new example' : 'Neues Beispiel generieren'}
                >
                  <RefreshCw size={16} className={isGeneratingExample ? 'animate-spin' : ''} />
                  {language === 'en' ? 'New' : 'Neu'}
                </button>
                <button
                  onClick={() => setShowExample(!showExample)}
                  className="text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
                >
                  {showExample ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {showExample && (
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border-l-4 border-purple-500 p-4 rounded-lg">
                <p className="text-stone-700 dark:text-stone-300 whitespace-pre-wrap leading-relaxed">
                  {exampleText}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Correction Results */}
        {correction && (
          <div className="bg-white dark:bg-stone-800 rounded-xl p-6 shadow-lg mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 flex items-center gap-2">
                <CheckCircle className="text-green-500" size={24} />
                {language === 'en' ? 'Correction Results' : 'Korrektur-Ergebnisse'}
              </h3>
              <button
                onClick={() => setShowCorrection(!showCorrection)}
                className="text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
              >
                {showCorrection ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {showCorrection && (
              <div className="space-y-4">
                {correction.grammarCorrections && (
                  <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2 flex items-center gap-2">
                      <AlertCircle size={20} />
                      {language === 'en' ? 'Grammar & Spelling Corrections:' : 'Grammatik- & Rechtschreibkorrekturen:'}
                    </h4>
                    <p className="text-sm text-amber-700 dark:text-amber-300 whitespace-pre-wrap">
                      {correction.grammarCorrections}
                    </p>
                  </div>
                )}

                {correction.suggestions && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                      <Sparkles size={20} />
                      {language === 'en' ? 'General Suggestions:' : 'Allgemeine Vorschläge:'}
                    </h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300 whitespace-pre-wrap">
                      {correction.suggestions}
                    </p>
                  </div>
                )}

                {correction.improvedVersion && (
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                      <CheckCircle size={20} />
                      {language === 'en' ? 'Improved Version:' : 'Verbesserte Version:'}
                    </h4>
                    <p className="text-sm text-green-700 dark:text-green-300 whitespace-pre-wrap">
                      {correction.improvedVersion}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
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
            {language === 'en' ? 'Saved Texts' : 'Gespeicherte Texte'}
          </h2>
        </div>

        {savedTexts.length === 0 ? (
          <div className="bg-white dark:bg-stone-800 rounded-xl p-12 text-center shadow-lg">
            <FileText size={64} className="mx-auto mb-4 text-stone-400" />
            <p className="text-xl text-stone-600 dark:text-stone-400">
              {language === 'en' 
                ? 'No saved texts yet. Start writing!'
                : 'Noch keine gespeicherten Texte. Fang an zu schreiben!'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {savedTexts.map((text) => (
              <div
                key={text.id}
                className="bg-white dark:bg-stone-800 rounded-xl p-6 shadow-lg border border-stone-200 dark:border-stone-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">
                      {text.topicTitle}
                    </h3>
                    <p className="text-sm text-stone-500 dark:text-stone-400">
                      {new Date(text.updatedAt).toLocaleDateString(language === 'en' ? 'en-US' : 'de-DE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleLoadText(text)}
                      className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition-all"
                    >
                      {language === 'en' ? 'Edit' : 'Bearbeiten'}
                    </button>
                    <button
                      onClick={() => handleDeleteText(text.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-stone-700 dark:text-stone-300 whitespace-pre-wrap line-clamp-3">
                    {text.text}
                  </p>
                </div>
                
                {text.correction && (
                  <div className="mt-4 pt-4 border-t border-stone-200 dark:border-stone-700">
                    <p className="text-sm font-semibold text-stone-600 dark:text-stone-400 mb-2">
                      {language === 'en' ? '✓ Corrected' : '✓ Korrigiert'}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
}

export default WritingPage;

